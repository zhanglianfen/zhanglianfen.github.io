const e=JSON.parse('{"key":"v-da88f300","path":"/zh/basics/MySQL/%E5%9F%BA%E7%A1%80%E7%AF%87/5%E7%B4%A2%E5%BC%95%EF%BC%88%E4%B8%8B%EF%BC%89.html","title":"索引（下）","lang":"zh-CN","frontmatter":{"author":"极客时间","date":"2022-05-25T00:00:00.000Z","category":["MySQL基础篇"],"description":"在上一篇文章中，我和你介绍了 InnoDB 索引的数据结构模型，今天我们再继续聊聊跟 MySQL 索引有关的概念。 在开始这篇文章之前，我们先来看一下这个问题： 在下面这个表 T 中，如果我执行 select * from T where k between 3 and 5，需要执行几次树的搜索操作，会扫描多少行？ 下面是这个表的初始化语句。! (ht...","head":[["meta",{"property":"og:url","content":"https://theme-zhang.netlify.app/zh/basics/MySQL/%E5%9F%BA%E7%A1%80%E7%AF%87/5%E7%B4%A2%E5%BC%95%EF%BC%88%E4%B8%8B%EF%BC%89.html"}],["meta",{"property":"og:site_name","content":"zhang"}],["meta",{"property":"og:title","content":"索引（下）"}],["meta",{"property":"og:description","content":"在上一篇文章中，我和你介绍了 InnoDB 索引的数据结构模型，今天我们再继续聊聊跟 MySQL 索引有关的概念。 在开始这篇文章之前，我们先来看一下这个问题： 在下面这个表 T 中，如果我执行 select * from T where k between 3 and 5，需要执行几次树的搜索操作，会扫描多少行？ 下面是这个表的初始化语句。! (ht..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-09T06:04:07.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"article:author","content":"极客时间"}],["meta",{"property":"article:published_time","content":"2022-05-25T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-12-09T06:04:07.000Z"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://theme-zhang.netlify.app/en/basics/MySQL/%E5%9F%BA%E7%A1%80%E7%AF%87/5%E7%B4%A2%E5%BC%95%EF%BC%88%E4%B8%8B%EF%BC%89.html"}]]},"excerpt":"","headers":[{"level":2,"title":"覆盖索引","slug":"覆盖索引","link":"#覆盖索引","children":[]},{"level":2,"title":"最左前缀原则","slug":"最左前缀原则","link":"#最左前缀原则","children":[]},{"level":2,"title":"索引下推","slug":"索引下推","link":"#索引下推","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]},{"level":2,"title":"思考题","slug":"思考题","link":"#思考题","children":[]}],"git":{"createdTime":1670565847000,"updatedTime":1670565847000,"contributors":[{"name":"zhanglf","email":"454486214@qq.com","commits":1}]},"readingTime":{"minutes":9.79,"words":2937},"autoDesc":true,"localizedDate":"2022年5月25日","filePathRelative":"zh/basics/MySQL/基础篇/5索引（下）.md"}');export{e as data};
