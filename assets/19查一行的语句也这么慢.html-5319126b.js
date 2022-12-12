import{_ as t,V as l,W as r,X as i,Y as e,Z as n,a1 as s,D as o}from"./framework-6f747a7a.js";const d={},c=s(`<h1 id="为什么我只查一行的语句-也执行这么慢" tabindex="-1"><a class="header-anchor" href="#为什么我只查一行的语句-也执行这么慢" aria-hidden="true">#</a> 为什么我只查一行的语句，也执行这么慢？</h1><p>一般情况下，如果我跟你说查询性能优化，你首先会想到一些复杂的语句，想到查询需要返回大量的数据。但有些情况下，“查一行”，也会执行得特别慢。今天，我就跟你聊聊这个有趣的话题，看看什么情况下，会出现这个现象。</p><p>需要说明的是，如果 MySQL 数据库本身就有很大的压力，导致数据库服务器 CPU 占用率很高或 ioutil（IO 利用率）很高，这种情况下所有语句的执行都有可能变慢，不属于我们今天的讨论范围。</p><p>为了便于描述，我还是构造一个表，基于这个表来说明今天的问题。这个表有两个字段 id 和 c，并且我在里面插入了 10 万行记录。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysql&gt; CREATE TABLE \`t\` (
  \`id\` int(11) NOT NULL,
  \`c\` int(11) DEFAULT NULL,
  PRIMARY KEY (\`id\`)
) ENGINE=InnoDB;
 
delimiter ;;
create procedure idata()
begin
  declare i int;
  set i=1;
  while(i&lt;=100000)do
    insert into t values(i,i);
    set i=i+1;
  end while;
end;;
delimiter ;
 
call idata();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来，我会用几个不同的场景来举例，有些是前面的文章中我们已经介绍过的知识点，你看看能不能一眼看穿，来检验一下吧。</p><h2 id="第一类-查询长时间不返回" tabindex="-1"><a class="header-anchor" href="#第一类-查询长时间不返回" aria-hidden="true">#</a> 第一类：查询长时间不返回</h2><p>如图 1 所示，在表 t 执行下面的 SQL 语句：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysql&gt; select * from t where id=1;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查询结果长时间不返回。</p><p>一般碰到这种情况的话，大概率是表 t 被锁住了。接下来分析原因的时候，一般都是首先执行一下 show processlist 命令，看看当前语句处于什么状态。</p><p>然后我们再针对每种状态，去分析它们产生的原因、如何复现，以及如何处理。</p><h3 id="等-mdl-锁" tabindex="-1"><a class="header-anchor" href="#等-mdl-锁" aria-hidden="true">#</a> 等 MDL 锁</h3><p>如图 2 所示，就是使用 show processlist 命令查看 Waiting for table metadata lock 的示意图。</p><figure><img src="https://personal-site-pictures.oss-cn-beijing.aliyuncs.com/img/Waiting for table metadata lock 状态示意图.png" alt="Waiting for table metadata lock 状态示意图" tabindex="0" loading="lazy"><figcaption>Waiting for table metadata lock 状态示意图</figcaption></figure><p>出现<strong>这个状态表示的是，现在有一个线程正在表 t 上请求或者持有 MDL 写锁，把 select 语句堵住了。</strong></p>`,16),p={href:"https://time.geekbang.org/column/article/69862",target:"_blank",rel:"noopener noreferrer"},g=s(`<p>不过，在 MySQL 5.7 版本下复现这个场景，也很容易。如图 3 所示，我给出了简单的复现步骤。</p><figure><img src="https://personal-site-pictures.oss-cn-beijing.aliyuncs.com/img/MySQL 5.7 中 Waiting for table metadata lock 的复现步骤.png" alt="MySQL 5.7 中 Waiting for table metadata lock 的复现步骤" tabindex="0" loading="lazy"><figcaption>MySQL 5.7 中 Waiting for table metadata lock 的复现步骤</figcaption></figure><p>session A 通过 lock table 命令持有表 t 的 MDL 写锁，而 session B 的查询需要获取 MDL 读锁。所以，session B 进入等待状态。</p><p>这类问题的处理方式，就是找到谁持有 MDL 写锁，然后把它 kill 掉。</p><p>但是，由于在 show processlist 的结果里面，session A 的 Command 列是“Sleep”，导致查找起来很不方便。不过有了 performance_schema 和 sys 系统库以后，就方便多了。（MySQL 启动时需要设置 performance_schema=on，相比于设置为 off 会有 10% 左右的性能损失)</p><p>通过查询 sys.schema_table_lock_waits 这张表，我们就可以直接找出造成阻塞的 process id，把这个连接用 kill 命令断开即可。</p><figure><img src="https://personal-site-pictures.oss-cn-beijing.aliyuncs.com/img/查获加表锁的线程 id.png" alt="查获加表锁的线程 id" tabindex="0" loading="lazy"><figcaption>查获加表锁的线程 id</figcaption></figure><h3 id="等-flush" tabindex="-1"><a class="header-anchor" href="#等-flush" aria-hidden="true">#</a> 等 flush</h3><p>接下来，我给你举另外一种查询被堵住的情况。</p><p>我在表 t 上，执行下面的 SQL 语句：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysql&gt; select * from information_schema.processlist where id=1;
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这里，我先卖个关子。</p><p>你可以看一下图 5。我查出来这个线程的状态是 Waiting for table flush，你可以设想一下这是什么原因。</p><figure><img src="https://personal-site-pictures.oss-cn-beijing.aliyuncs.com/img/Waiting for table flush 状态示意图.png" alt="Waiting for table flush 状态示意图" tabindex="0" loading="lazy"><figcaption>Waiting for table flush 状态示意图</figcaption></figure><p>这个状态表示的是，现在有一个线程正要对表 t 做 flush 操作。MySQL 里面对表做 flush 操作的用法，一般有以下两个：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>flush tables t with read lock;
 
flush tables with read lock;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这两个 flush 语句，如果指定表 t 的话，代表的是只关闭表 t；如果没有指定具体的表名，则表示关闭 MySQL 里所有打开的表。</p><p>但是正常这两个语句执行起来都很快，除非它们也被别的线程堵住了。</p><p>所以，出现 Waiting for table flush 状态的可能情况是：有一个 flush tables 命令被别的语句堵住了，然后它又堵住了我们的 select 语句。</p><p>现在，我们一起来复现一下这种情况，<strong>复现步骤</strong>如图 6 所示：</p><figure><img src="https://personal-site-pictures.oss-cn-beijing.aliyuncs.com/img/Waiting for table flush 的复现步骤.png" alt="Waiting for table flush 的复现步骤" tabindex="0" loading="lazy"><figcaption>Waiting for table flush 的复现步骤</figcaption></figure><p>在 session A 中，我故意每行都调用一次 sleep(1)，这样这个语句默认要执行 10 万秒，在这期间表 t 一直是被 session A“打开”着。然后，session B 的 flush tables t 命令再要去关闭表 t，就需要等 session A 的查询结束。这样，session C 要再次查询的话，就会被 flush 命令堵住了。</p><p>图 7 是这个复现步骤的 show processlist 结果。这个例子的排查也很简单，你看到这个 show processlist 的结果，肯定就知道应该怎么做了。</p><figure><img src="https://personal-site-pictures.oss-cn-beijing.aliyuncs.com/img/Waiting for table flush 的 show processlist 结果.png" alt="Waiting for table flush 的 show processlist 结果" tabindex="0" loading="lazy"><figcaption>Waiting for table flush 的 show processlist 结果</figcaption></figure><h3 id="等行锁" tabindex="-1"><a class="header-anchor" href="#等行锁" aria-hidden="true">#</a> 等行锁</h3><p>现在，经过了表级锁的考验，我们的 select 语句终于来到引擎里了。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysql&gt; select * from t where id=1 lock in share mode; 
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,27),u={href:"https://time.geekbang.org/column/article/70562",target:"_blank",rel:"noopener noreferrer"},m=s(`<p>由于访问 id=1 这个记录时要加读锁，如果这时候已经有一个事务在这行记录上持有一个写锁，我们的 select 语句就会被堵住。</p><p>复现步骤和现场如下：</p><figure><img src="https://personal-site-pictures.oss-cn-beijing.aliyuncs.com/img/行锁复现.png" alt="行锁复现" tabindex="0" loading="lazy"><figcaption>行锁复现</figcaption></figure><figure><img src="https://personal-site-pictures.oss-cn-beijing.aliyuncs.com/img/行锁 show processlist 现场.png" alt="行锁 show processlist 现场" tabindex="0" loading="lazy"><figcaption>行锁 show processlist 现场</figcaption></figure><p>显然，session A 启动了事务，占有写锁，还不提交，是导致 session B 被堵住的原因。</p><p>这个问题并不难分析，但问题是怎么查出是谁占着这个写锁。如果你用的是 MySQL 5.7 版本，可以通过 sys.innodb_lock_waits 表查到。</p><p>查询方法是：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysql&gt; select * from t sys.innodb_lock_waits where locked_table=\`&#39;test&#39;.&#39;t&#39;\`\\G
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://personal-site-pictures.oss-cn-beijing.aliyuncs.com/img/通过 sys.innodb_lock_waits 查行锁.png" alt="通过 sys.innodb_lock_waits 查行锁" tabindex="0" loading="lazy"><figcaption>通过 sys.innodb_lock_waits 查行锁</figcaption></figure><p>可以看到，这个信息很全，4 号线程是造成堵塞的罪魁祸首。而干掉这个罪魁祸首的方式，就是 KILL QUERY 4 或 KILL 4。</p><p>不过，这里不应该显示“KILL QUERY 4”。这个命令表示停止 4 号线程当前正在执行的语句，而这个方法其实是没有用的。因为占有行锁的是 update 语句，这个语句已经是之前执行完成了的，现在执行 KILL QUERY，无法让这个事务去掉 id=1 上的行锁。</p><p>实际上，KILL 4 才有效，也就是说直接断开这个连接。这里隐含的一个逻辑就是，连接被断开的时候，会自动回滚这个连接里面正在执行的线程，也就释放了 id=1 上的行锁。</p><h2 id="第二类-查询慢" tabindex="-1"><a class="header-anchor" href="#第二类-查询慢" aria-hidden="true">#</a> 第二类：查询慢</h2><p>经过了重重封“锁”，我们再来看看一些查询慢的例子。</p><p>先来看一条你一定知道原因的 SQL 语句：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysql&gt; select * from t where c=50000 limit 1;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>由于字段 c 上没有索引，这个语句只能走 id 主键顺序扫描，因此需要扫描 5 万行。</p><p>作为确认，你可以看一下慢查询日志。注意，这里为了把所有语句记录到 slow log 里，我在连接后先执行了 set long_query_time=0，将慢查询日志的时间阈值设置为 0。</p><figure><img src="https://personal-site-pictures.oss-cn-beijing.aliyuncs.com/img/全表扫描 5 万行的 slow log.png" alt="全表扫描 5 万行的 slow log" tabindex="0" loading="lazy"><figcaption>全表扫描 5 万行的 slow log</figcaption></figure><p>Rows_examined 显示扫描了 50000 行。你可能会说，不是很慢呀，11.5 毫秒就返回了，我们线上一般都配置超过 1 秒才算慢查询。但你要记住：<strong>坏查询不一定是慢查询</strong>。我们这个例子里面只有 10 万行记录，数据量大起来的话，执行时间就线性涨上去了。</p><p>扫描行数多，所以执行慢，这个很好理解。</p><p>但是接下来，我们再看一个只扫描一行，但是执行很慢的语句。</p><p>如图 12 所示，是这个例子的 slow log。可以看到，执行的语句是</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysql&gt; select * from t where id=1；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>虽然扫描行数是 1，但执行时间却长达 800 毫秒。</p><figure><img src="https://personal-site-pictures.oss-cn-beijing.aliyuncs.com/img/扫描一行却执行得很慢.png" alt="扫描一行却执行得很慢" tabindex="0" loading="lazy"><figcaption>扫描一行却执行得很慢</figcaption></figure><p>是不是有点奇怪呢，这些时间都花在哪里了？</p><p>如果我把这个 slow log 的截图再往下拉一点，你可以看到下一个语句，select * from t where id=1 lock in share mode，执行时扫描行数也是 1 行，执行时间是 0.2 毫秒。</p><figure><img src="https://personal-site-pictures.oss-cn-beijing.aliyuncs.com/img/加上 lock in share mode 的 slow log.png" alt="加上 lock in share mode 的 slow log" tabindex="0" loading="lazy"><figcaption>加上 lock in share mode 的 slow log</figcaption></figure><p>看上去是不是更奇怪了？按理说 lock in share mode 还要加锁，时间应该更长才对啊。</p><p>可能有的同学已经有答案了。如果你还没有答案的话，我再给你一个提示信息，图 14 是这两个语句的执行输出结果。</p><figure><img src="https://personal-site-pictures.oss-cn-beijing.aliyuncs.com/img/两个语句的输出结果.png" alt="两个语句的输出结果" tabindex="0" loading="lazy"><figcaption>两个语句的输出结果</figcaption></figure><p>第一个语句的查询结果里 c=1，带 lock in share mode 的语句返回的是 c=1000001。看到这里应该有更多的同学知道原因了。如果你还是没有头绪的话，也别着急。我先跟你说明一下复现步骤，再分析原因。</p><figure><img src="https://personal-site-pictures.oss-cn-beijing.aliyuncs.com/img/复现步骤.png" alt="复现步骤" tabindex="0" loading="lazy"><figcaption>复现步骤</figcaption></figure><p>你看到了，session A 先用 start transaction with consistent snapshot 命令启动了一个事务，之后 session B 才开始执行 update 语句。</p><p>session B 执行完 100 万次 update 语句后，id=1 这一行处于什么状态呢？你可以从图 16 中找到答案。</p><figure><img src="https://personal-site-pictures.oss-cn-beijing.aliyuncs.com/img/id=1 的数据状态.png" alt="id=1 的数据状态" tabindex="0" loading="lazy"><figcaption>id=1 的数据状态</figcaption></figure><p>session B 更新完 100 万次，生成了 100 万个回滚日志 (undo log)。</p><p>带 lock in share mode 的 SQL 语句，是当前读，因此会直接读到 1000001 这个结果，所以速度很快；而 select * from t where id=1 这个语句，是一致性读，因此需要从 1000001 开始，依次执行 undo log，执行了 100 万次以后，才将 1 这个结果返回。</p><p>注意，undo log 里记录的其实是“把 2 改成 1”，“把 3 改成 2”这样的操作逻辑，画成减 1 的目的是方便你看图。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p>今天我给你举了在一个简单的表上，执行“查一行”，可能会出现的被锁住和执行慢的例子。这其中涉及到了表锁、行锁和一致性读的概念。</p><p>在实际使用中，碰到的场景会更复杂。但大同小异，你可以按照我在文章中介绍的定位方法，来定位并解决问题。</p><h2 id="思考题" tabindex="-1"><a class="header-anchor" href="#思考题" aria-hidden="true">#</a> 思考题</h2><p>我们在举例加锁读的时候，用的是这个语句，select * from t where id=1 lock in share mode。由于 id 上有索引，所以可以直接定位到 id=1 这一行，因此读锁也是只加在了这一行上。</p><p>但如果是下面的 SQL 语句，</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>begin;
select * from t where c=5 for update;
commit;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个语句序列是怎么加锁的呢？加的锁又是什么时候释放呢？</p>`,48);function h(f,b){const a=o("ExternalLinkIcon");return l(),r("div",null,[c,i("p",null,[e("在第 6 篇文章"),i("a",p,[e("《全局锁和表锁 ：给表加个字段怎么有这么多阻碍？》"),n(a)]),e("中，我给你介绍过一种复现方法。但需要说明的是，那个复现过程是基于 MySQL 5.6 版本的。而 MySQL 5.7 版本修改了 MDL 的加锁策略，所以就不能复现这个场景了。")]),g,i("p",null,[e("上面这条语句的用法你也很熟悉了，我们在第 8 篇"),i("a",u,[e("《事务到底是隔离的还是不隔离的？》"),n(a)]),e("文章介绍当前读时提到过。")]),m])}const x=t(d,[["render",h],["__file","19查一行的语句也这么慢.html.vue"]]);export{x as default};
