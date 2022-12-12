const e=JSON.parse('{"key":"v-3ef1ef32","path":"/zh/basics/MySQL/%E5%AE%9E%E8%B7%B5%E7%AF%87/11%E7%BB%99%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%8A%A0%E5%AD%97%E6%AE%B5%E7%B4%A2%E5%BC%95.html","title":"怎么给字符串字段加索引？","lang":"zh-CN","frontmatter":{"description":"怎么给字符串字段加索引？ 现在，几乎所有的系统都支持邮箱登录，如何在邮箱这样的字段上建立合理的索引，是我们今天要讨论的问题。 假设，你现在维护一个支持邮箱登录的系统，用户表是这么定义的： mysql&gt; create table SUser( ID bigint unsigned primary key, email varchar(64), ... )engine=innodb;","head":[["meta",{"property":"og:url","content":"https://theme-zhang.netlify.app/zh/basics/MySQL/%E5%AE%9E%E8%B7%B5%E7%AF%87/11%E7%BB%99%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%8A%A0%E5%AD%97%E6%AE%B5%E7%B4%A2%E5%BC%95.html"}],["meta",{"property":"og:site_name","content":"zhang"}],["meta",{"property":"og:title","content":"怎么给字符串字段加索引？"}],["meta",{"property":"og:description","content":"怎么给字符串字段加索引？ 现在，几乎所有的系统都支持邮箱登录，如何在邮箱这样的字段上建立合理的索引，是我们今天要讨论的问题。 假设，你现在维护一个支持邮箱登录的系统，用户表是这么定义的： mysql&gt; create table SUser( ID bigint unsigned primary key, email varchar(64), ... )engine=innodb;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-09T06:04:07.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"article:modified_time","content":"2022-12-09T06:04:07.000Z"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://theme-zhang.netlify.app/en/basics/MySQL/%E5%AE%9E%E8%B7%B5%E7%AF%87/11%E7%BB%99%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%8A%A0%E5%AD%97%E6%AE%B5%E7%B4%A2%E5%BC%95.html"}]]},"headers":[{"level":2,"title":"前缀索引对覆盖索引的影响","slug":"前缀索引对覆盖索引的影响","link":"#前缀索引对覆盖索引的影响","children":[]},{"level":2,"title":"其他方式","slug":"其他方式","link":"#其他方式","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1670565847000,"updatedTime":1670565847000,"contributors":[{"name":"zhanglf","email":"454486214@qq.com","commits":1}]},"readingTime":{"minutes":10.49,"words":3148},"filePathRelative":"zh/basics/MySQL/实践篇/11给字符串加字段索引.md","localizedDate":"2022年12月9日","excerpt":"<h1> 怎么给字符串字段加索引？</h1>\\n<p>现在，几乎所有的系统都支持邮箱登录，如何在邮箱这样的字段上建立合理的索引，是我们今天要讨论的问题。</p>\\n<p>假设，你现在维护一个支持邮箱登录的系统，用户表是这么定义的：</p>\\n<div class=\\"language-sql line-numbers-mode\\" data-ext=\\"sql\\"><pre class=\\"language-sql\\"><code>mysql<span class=\\"token operator\\">&gt;</span> <span class=\\"token keyword\\">create</span> <span class=\\"token keyword\\">table</span> SUser<span class=\\"token punctuation\\">(</span>\\nID <span class=\\"token keyword\\">bigint</span> <span class=\\"token keyword\\">unsigned</span> <span class=\\"token keyword\\">primary</span> <span class=\\"token keyword\\">key</span><span class=\\"token punctuation\\">,</span>\\nemail <span class=\\"token keyword\\">varchar</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">64</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span> \\n<span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span> \\n<span class=\\"token punctuation\\">)</span><span class=\\"token keyword\\">engine</span><span class=\\"token operator\\">=</span><span class=\\"token keyword\\">innodb</span><span class=\\"token punctuation\\">;</span> \\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
