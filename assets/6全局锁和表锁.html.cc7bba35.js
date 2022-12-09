const e=JSON.parse('{"key":"v-4060db31","path":"/zh/basics/MySQL/%E5%9F%BA%E7%A1%80%E7%AF%87/6%E5%85%A8%E5%B1%80%E9%94%81%E5%92%8C%E8%A1%A8%E9%94%81.html","title":"全局锁和表锁","lang":"zh-CN","frontmatter":{"author":"极客时间","date":"2022-05-26T00:00:00.000Z","category":["MySQL基础篇"],"description":"今天我要跟你聊聊 MySQL 的锁。数据库锁设计的初衷是处理并发问题。作为多用户共享的资源，当出现并发访问的时候，数据库需要合理地控制资源的访问规则。而锁就是用来实现这些访问规则的重要数据结构。 根据加锁的范围，MySQL 里面的锁大致可以分成全局锁、表级锁和行锁三类。今天这篇文章，我会和你分享全局锁和表级锁。而关于行锁的内容，会留着在下一篇文章中再和...","head":[["meta",{"property":"og:url","content":"https://theme-zhang.netlify.app/zh/basics/MySQL/%E5%9F%BA%E7%A1%80%E7%AF%87/6%E5%85%A8%E5%B1%80%E9%94%81%E5%92%8C%E8%A1%A8%E9%94%81.html"}],["meta",{"property":"og:site_name","content":"zhang"}],["meta",{"property":"og:title","content":"全局锁和表锁"}],["meta",{"property":"og:description","content":"今天我要跟你聊聊 MySQL 的锁。数据库锁设计的初衷是处理并发问题。作为多用户共享的资源，当出现并发访问的时候，数据库需要合理地控制资源的访问规则。而锁就是用来实现这些访问规则的重要数据结构。 根据加锁的范围，MySQL 里面的锁大致可以分成全局锁、表级锁和行锁三类。今天这篇文章，我会和你分享全局锁和表级锁。而关于行锁的内容，会留着在下一篇文章中再和..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-09T06:04:07.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"article:author","content":"极客时间"}],["meta",{"property":"article:published_time","content":"2022-05-26T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-12-09T06:04:07.000Z"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://theme-zhang.netlify.app/en/basics/MySQL/%E5%9F%BA%E7%A1%80%E7%AF%87/6%E5%85%A8%E5%B1%80%E9%94%81%E5%92%8C%E8%A1%A8%E9%94%81.html"}]]},"excerpt":"","headers":[{"level":2,"title":"全局锁","slug":"全局锁","link":"#全局锁","children":[]},{"level":2,"title":"表级锁","slug":"表级锁","link":"#表级锁","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]},{"level":2,"title":"思考题","slug":"思考题","link":"#思考题","children":[]}],"git":{"createdTime":1670565847000,"updatedTime":1670565847000,"contributors":[{"name":"zhanglf","email":"454486214@qq.com","commits":1}]},"readingTime":{"minutes":12.12,"words":3637},"autoDesc":true,"localizedDate":"2022年5月26日","filePathRelative":"zh/basics/MySQL/基础篇/6全局锁和表锁.md"}');export{e as data};
