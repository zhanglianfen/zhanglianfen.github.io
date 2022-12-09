import{_ as t,V as s,W as l,X as o,Y as e,Z as r,a1 as p,y as n}from"./framework.02eddb67.js";const c={},i=o("h1",{id:"paxos",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#paxos","aria-hidden":"true"},"#"),e(" Paxos")],-1),d=o("p",null,"可能和很多人的印象相反, Paxos其实是一个异常简洁而精巧的算法. 解读一遍Paxos算法其实只需要5分钟. 本文将集中在经典的basic Paxos上, 而不会涉及其各种变种(实在也太多了).",-1),u=o("h2",{id:"前言",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),e(" 前言")],-1),P={href:"https://zhuanlan.zhihu.com/p/35298019",target:"_blank",rel:"noopener noreferrer"},x=o("p",null,'一提起Paxos, 各位老司机可能已经虎躯一震, 毕竟江湖上关于Paxos的传闻太多. 比如当年Leslie Lamport的蒂花之秀: 在提出Paxos算法后先是把算法写成了一部古希腊神话背景的小说, 导致发表了7,8年也没人看的懂他想说什么(Lamport: "皮一下很开心, 你管我?");',-1),h=o("p",null,'比如后来Lamport实在看不下去了(Lamport: "哎, 愚蠢的地球人啊"), 把小说回炉重新整理成了一篇学术论文叫"Paxos Made Simple", 而其摘要只有短短一句话"The Paxos algorithm, when presented in plain English, is very simple" (Lamport: "要是道歉有用, 要警察干吗?");',-1),_=o("p",null,"再比因为Lamport稳重带皮的操作, 导致大家口口相传Paxos理解和实现起来有多困难多复杂, 导致出现了Raft这种改良版等等.",-1),q=o("p",null,[o("strong",null,"敲黑板"),e(': Paxos其实是一个异常简洁而精巧的算法. 解读一遍Paxos算法其实只需要5分钟. 真正复杂的地方在于想清楚Paxos算法在各种failure情形下如何依然"正确"的工作. 只有明白了这一层, 才算练成了Paxos的心法, 才能真正欣赏Paxos算法的精妙设计, 赞叹Lamport的天才思维. 在我看来, Paxos算法(连同Lamport的其他如BFT, Vector Clock等成就)是上个世纪八十/九十年代的经典分布式系统研究中最纯粹最优美, 也是整栋大厦底座最坚实的那一部分.')],-1),m={href:"http://link.zhihu.com/?target=http%3A//www.cs.cmu.edu/~dga/15-440/F12/",target:"_blank",rel:"noopener noreferrer"},g=p('<h2 id="paxos算法描述" tabindex="-1"><a class="header-anchor" href="#paxos算法描述" aria-hidden="true">#</a> Paxos算法描述</h2><p>考虑一个简化了的Paxos系统: 只有leader和acceptor两种角色.</p><p><strong>1. Prepare阶段</strong></p><ul><li><p>(1a) leader的节点给所有其他acceptor节点发送消息&quot;proposal(n)&quot;---n是该节点为这个提议选择的一个数字, 姑且理解为一个方案编号. 并期待该提议获得所有节点中的简单多数(Paxos的Quorum)的许可.</p></li><li><p>(1b) 每一个接受到proposal的acceptor节点: 如果这是它接受到的第一个proposal, 回答&quot;promise&quot;. 代表该节点<strong>许诺</strong>将会保持承认该proposal发送方为leader, 除非收到其他优先级更高的proposal; 如果已经有接收到并accepted(注: 这是下一阶段可能会发生的动作)其他的proposal(n&#39;,v&#39;)--n&#39;是该proposal的方案号而v&#39;是提议的共识:</p><ul><li>如果 n &lt; n&#39;, 之前accept的提议有更高优先级, 对新接受的提议回答&quot;reject&quot;, 以兑现之前的许诺.</li><li>如果 n &gt; n&#39;, 回答&quot;promise&quot;的并同时附上旧的提议,proposal(n&#39;, v&#39;). 这样在认可新的leader身份的同时, 也告诉了新的leader过去的被简单多数认可过的提议</li></ul></li><li><p>(1c) 如果proposer的提议受到了简单多数的&quot;reject&quot;, 竞争leader宣告失败, 可以放弃这一提议; 如果接受到了简单多数的&quot;promise&quot;, 则该proposer成为leader, 它需要从收到的promise里附带的之前accepted的提议中选取方案号(n值)最高的对应的共识; 如果历史上没有被accept过的提议, leader可以自己选取一个共识v.</p></li></ul><p><strong>2. Accept阶段</strong></p><ul><li>(2a) leader会对所有acceptor发送&quot;accept-request(n,v)&quot;, 请求所有acceptor接受编号为n的共识v的提议</li><li>(2b) 每一个接收到该提议的acceptor节点: 如果没有接受过编号比n更高的提议, 则返回&quot;accept&quot;表示接受这一共识提议; 否则返回&quot;reject&quot;</li><li>(2c) 如果简单多数的acceptor返回了&quot;accept&quot;, 则共识达成; 否则共识失败, 重启Paxos协议.</li></ul><p>请注意几点以帮助理解协议:</p><ol><li>第一阶段竞争的并不是共识本身, 而是在争取坐实leader身份获得简单多数的认可</li><li>方案编号n本身并不是共识, 而是提议的一个优先级, 在多个节点竞争leader身份时可以区分优先顺序. 共识本身(v)会在下一阶段leader身份确认后由leader添加进提议;</li><li>虽然这一轮上只会有一个leader获得简单多数的认可产生, 但可能有多个&quot;糊涂&quot;节点认为自己应该做leader, 见后面的分析;</li></ol><p>在我看来, Paxos对2PC和3PC有几点重要的改进.</p><p><strong>第一，分离共识的提议者proposer以及帮助提议最终通过的leader这两个角色.</strong> Paxos里, 即使一个leader身份被批准, 它也需要尊重历史上其他被同意过的提议. 换言之leader本身只是一个服务性的角色, 未必有机会自己提出共识. 回忆一下上一篇介绍的2PC和3PC这两个协议当中, coordinator不仅负责提出最后的共识协议, 同时也负责服务所有节点保证它的共识被通过. 而正是因为Paxos中把coordinator的职责解耦合成了proposer和leader, 使得整个算法更加robust.就算前任leader宕机了, 后面新产生leader也可以继承前任的&quot;遗志&quot;来完成一个Paxos协议.</p><p><strong>第二，对简单多数的巧妙应用.</strong> 第一阶段里选举leader要求的简单多数保证了选举出来的leader一定不会错过之前被accept过的提议---所以就算那个提议最初的proposer挂了, 也会至少被一个acceptor发给新的leader来继承. 而第二阶段里要求的达成共识的简单多数保证了有多个&quot;自以为是&quot;的leader出现时(比如一个leader掉线, 新leader选出, 旧leader重新上线), 一定只会有一个最后通过. 看过一个精彩的评论, 说Paxos其实就是连续运用两次&quot;抽屉原理&quot;, 其实非常准确.</p><h2 id="paxos与2pc-3pc的关系" tabindex="-1"><a class="header-anchor" href="#paxos与2pc-3pc的关系" aria-hidden="true">#</a> Paxos与2PC/3PC的关系</h2><p><strong>Paxos如何克服2PC的问题</strong>: 2PC的问题在于不能处理最简单的fail-stop错误模式.</p><ul><li>2PC中coordinator是唯一而固定的, 如果coordinator宕机, 那么就会有情形导致coordinator之前propose的提议的投票结果丢失. 就算启动新的后备coordinator, 没有机制可以学习以前的投票结果.</li><li>Paxos因为分离了提议和leader, 从算法上保证总可以选举出后备leader并接替前任leader的工作.</li></ul><p><strong>Paxos如何克服3PC的问题</strong>: 3PC改进了2PC的fail-stop的问题, 但是不能处理fail-recover类型的错误.</p><ul><li>3PC发生的问题在于当有多个&quot;自认的leader&quot;出现时, 并不能有效的解决coordinator之间的竞争---谁是真正的coordinator.</li><li>而Paxos通过Quorum的运用, 保证了多了个leader之间可以互相发现.</li></ul><h2 id="paxos的局限性" tabindex="-1"><a class="header-anchor" href="#paxos的局限性" aria-hidden="true">#</a> Paxos的局限性</h2><p>就像2PC以及3PC一样, Paxos也有其局限性.</p><p>1 活锁问题.</p><p>Paxos理论上存在一个不能终结协议的活锁竞争问题. 比如一个proposer提交的提议因为编号过低被拒绝时, 此proposer可能重启Paxos而提高编号重新提交. 如果同时有两个proposer都发现自己的方案编号过低, 从而轮流提出更高编号的proposal而导致对方被拒, 可能会导致死循环(或活锁).</p><p>2 恶意节点.</p><p>目前为止2PC, 3PC, Paxos均是假设所有节点都遵守协议的规定. 当存在恶意的, 可能发送任何导致协议停止或者出错的消息的节点存在时, 就需要有更强的共识算法在&quot;守法节点&quot;间达成共识. Lamport 的BFT(拜占庭将军问题)了解一下.</p>',22);function C(f,b){const a=n("ExternalLinkIcon");return s(),l("div",null,[i,d,u,o("p",null,[e('本文是“漫话分布式系统共识协议”这个系列的第二篇. 前一篇"'),o("a",P,[e("2PC/3PC篇"),r(a)]),e('"介绍了分布式共识算法中最早的2PC和3PC两位老前辈. 各位老司机迫不及待的催我赶紧开车, 写一写Paxos. 然后就有了从三番飞到北京的飞机上敲出来的这一篇.')]),x,h,_,q,o("p",null,[e("插点题外话: 我第一次认真接触和学习Paxos是在CMU时TA分布式系统("),o("a",m,[e("15-440, Fall 2012: Distributed Systems"),r(a)]),e("). 当时也真是现学现卖, 看完短短十来行的伪代码后, 硬是花了几天的时间才想清楚算法里各种变化, 然后最后从各种变化中找了最坑爹的一种作为期末考试题(各位同学抱歉啊). 然而值得一提的是, 当年这门课的大作业里很多同学用当时才刚刚发布不久的golang实现了一个简单的分布式Paxos系统. 这在当时一个很大胆的尝试, 但最后学生们的反馈非常好, 大约是从某种程度上证明(1) golang的系统抽象足够方便, 来搭建分布式系统可以很好的专注在算法层面上 (2) Paxos 也没那么恐怖.")]),g])}const L=t(c,[["render",C],["__file","Paxos.html.vue"]]);export{L as default};
