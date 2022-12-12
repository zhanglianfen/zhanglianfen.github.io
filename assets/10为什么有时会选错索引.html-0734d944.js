const n=JSON.parse('{"key":"v-182efb20","path":"/zh/basics/MySQL/%E5%AE%9E%E8%B7%B5%E7%AF%87/10%E4%B8%BA%E4%BB%80%E4%B9%88%E6%9C%89%E6%97%B6%E4%BC%9A%E9%80%89%E9%94%99%E7%B4%A2%E5%BC%95.html","title":"为什么有时会选错索引","lang":"zh-CN","frontmatter":{"description":"为什么有时会选错索引 前面我们介绍过索引，你已经知道了在 MySQL 中一张表其实是可以支持多个索引的。但是，你写 SQL 语句的时候，并没有主动指定使用哪个索引。也就是说，使用哪个索引是由 MySQL 来确定的。 不知道你有没有碰到过这种情况，一条本来可以执行得很快的语句，却由于 MySQL 选错了索引，而导致执行速度变得很慢？ 我们一起来看一个例子吧。 我们先建一个简单的表，表里有 a、b 两个字段，并分别建上索引： CREATE TABLE `t` ( `id` int(11) NOT NULL, `a` int(11) DEFAULT NULL, `b` int(11) DEFAULT NULL, PRIMARY KEY (`id`), KEY `a` (`a`), KEY `b` (`b`) ) ENGINE=InnoDB；","head":[["meta",{"property":"og:url","content":"https://theme-zhang.netlify.app/zh/basics/MySQL/%E5%AE%9E%E8%B7%B5%E7%AF%87/10%E4%B8%BA%E4%BB%80%E4%B9%88%E6%9C%89%E6%97%B6%E4%BC%9A%E9%80%89%E9%94%99%E7%B4%A2%E5%BC%95.html"}],["meta",{"property":"og:site_name","content":"zhang"}],["meta",{"property":"og:title","content":"为什么有时会选错索引"}],["meta",{"property":"og:description","content":"为什么有时会选错索引 前面我们介绍过索引，你已经知道了在 MySQL 中一张表其实是可以支持多个索引的。但是，你写 SQL 语句的时候，并没有主动指定使用哪个索引。也就是说，使用哪个索引是由 MySQL 来确定的。 不知道你有没有碰到过这种情况，一条本来可以执行得很快的语句，却由于 MySQL 选错了索引，而导致执行速度变得很慢？ 我们一起来看一个例子吧。 我们先建一个简单的表，表里有 a、b 两个字段，并分别建上索引： CREATE TABLE `t` ( `id` int(11) NOT NULL, `a` int(11) DEFAULT NULL, `b` int(11) DEFAULT NULL, PRIMARY KEY (`id`), KEY `a` (`a`), KEY `b` (`b`) ) ENGINE=InnoDB；"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-09T06:04:07.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"article:modified_time","content":"2022-12-09T06:04:07.000Z"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://theme-zhang.netlify.app/en/basics/MySQL/%E5%AE%9E%E8%B7%B5%E7%AF%87/10%E4%B8%BA%E4%BB%80%E4%B9%88%E6%9C%89%E6%97%B6%E4%BC%9A%E9%80%89%E9%94%99%E7%B4%A2%E5%BC%95.html"}]]},"headers":[{"level":2,"title":"优化器的逻辑","slug":"优化器的逻辑","link":"#优化器的逻辑","children":[]},{"level":2,"title":"索引选择异常和处理","slug":"索引选择异常和处理","link":"#索引选择异常和处理","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1670565847000,"updatedTime":1670565847000,"contributors":[{"name":"zhanglf","email":"454486214@qq.com","commits":1}]},"readingTime":{"minutes":15.78,"words":4735},"filePathRelative":"zh/basics/MySQL/实践篇/10为什么有时会选错索引.md","localizedDate":"2022年12月9日","excerpt":"<h1> 为什么有时会选错索引</h1>\\n<p>前面我们介绍过索引，你已经知道了在 MySQL 中一张表其实是可以支持多个索引的。但是，你写 SQL 语句的时候，并没有主动指定使用哪个索引。也就是说，使用哪个索引是由 MySQL 来确定的。</p>\\n<p>不知道你有没有碰到过这种情况，一条本来可以执行得很快的语句，却由于 MySQL 选错了索引，而导致执行速度变得很慢？</p>\\n<p>我们一起来看一个例子吧。</p>\\n<p>我们先建一个简单的表，表里有 a、b 两个字段，并分别建上索引：</p>\\n<div class=\\"language-sql line-numbers-mode\\" data-ext=\\"sql\\"><pre class=\\"language-sql\\"><code><span class=\\"token keyword\\">CREATE</span> <span class=\\"token keyword\\">TABLE</span> <span class=\\"token identifier\\"><span class=\\"token punctuation\\">`</span>t<span class=\\"token punctuation\\">`</span></span> <span class=\\"token punctuation\\">(</span>\\n  <span class=\\"token identifier\\"><span class=\\"token punctuation\\">`</span>id<span class=\\"token punctuation\\">`</span></span> <span class=\\"token keyword\\">int</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">11</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">NOT</span> <span class=\\"token boolean\\">NULL</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token identifier\\"><span class=\\"token punctuation\\">`</span>a<span class=\\"token punctuation\\">`</span></span> <span class=\\"token keyword\\">int</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">11</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">DEFAULT</span> <span class=\\"token boolean\\">NULL</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token identifier\\"><span class=\\"token punctuation\\">`</span>b<span class=\\"token punctuation\\">`</span></span> <span class=\\"token keyword\\">int</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">11</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">DEFAULT</span> <span class=\\"token boolean\\">NULL</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token keyword\\">PRIMARY</span> <span class=\\"token keyword\\">KEY</span> <span class=\\"token punctuation\\">(</span><span class=\\"token identifier\\"><span class=\\"token punctuation\\">`</span>id<span class=\\"token punctuation\\">`</span></span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token keyword\\">KEY</span> <span class=\\"token identifier\\"><span class=\\"token punctuation\\">`</span>a<span class=\\"token punctuation\\">`</span></span> <span class=\\"token punctuation\\">(</span><span class=\\"token identifier\\"><span class=\\"token punctuation\\">`</span>a<span class=\\"token punctuation\\">`</span></span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token keyword\\">KEY</span> <span class=\\"token identifier\\"><span class=\\"token punctuation\\">`</span>b<span class=\\"token punctuation\\">`</span></span> <span class=\\"token punctuation\\">(</span><span class=\\"token identifier\\"><span class=\\"token punctuation\\">`</span>b<span class=\\"token punctuation\\">`</span></span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">ENGINE</span><span class=\\"token operator\\">=</span><span class=\\"token keyword\\">InnoDB</span>；\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
