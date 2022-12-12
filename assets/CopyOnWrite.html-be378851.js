const t=JSON.parse('{"key":"v-47d98fe2","path":"/zh/language/Java/multithreading/current-container/CopyOnWrite.html","title":"写时复制","lang":"zh-CN","frontmatter":{"category":["Java"],"tag":["多线程"],"description":"写时复制 提示 为什么JUC只支持数组类型的写时复制并发容器？ 上一节，我们对JUC并发容器做了一个框架性介绍，提到了很多并发容器。本节，我们讲解其中的CopyOnWriteArrayList和CopyOnWriteArraySet，它们都是采用写时复制技术来实现，因此，称为写时复制并发容器。从名称，我们可以发现，这两个容器都跟数组有关。那么，为什么JUC没有提供CopyOnWriteLinkedList、CopyOnWriteHashMap等其他类型的写时复制并发容器呢？带着这个问题，我们来学习本节的内容。","head":[["meta",{"property":"og:url","content":"https://theme-zhang.netlify.app/zh/language/Java/multithreading/current-container/CopyOnWrite.html"}],["meta",{"property":"og:site_name","content":"zhang"}],["meta",{"property":"og:title","content":"写时复制"}],["meta",{"property":"og:description","content":"写时复制 提示 为什么JUC只支持数组类型的写时复制并发容器？ 上一节，我们对JUC并发容器做了一个框架性介绍，提到了很多并发容器。本节，我们讲解其中的CopyOnWriteArrayList和CopyOnWriteArraySet，它们都是采用写时复制技术来实现，因此，称为写时复制并发容器。从名称，我们可以发现，这两个容器都跟数组有关。那么，为什么JUC没有提供CopyOnWriteLinkedList、CopyOnWriteHashMap等其他类型的写时复制并发容器呢？带着这个问题，我们来学习本节的内容。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-09T06:04:07.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"article:tag","content":"多线程"}],["meta",{"property":"article:modified_time","content":"2022-12-09T06:04:07.000Z"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://theme-zhang.netlify.app/en/language/Java/multithreading/current-container/CopyOnWrite.html"}]]},"headers":[{"level":2,"title":"一、基本原理","slug":"一、基本原理","link":"#一、基本原理","children":[]},{"level":2,"title":"二、读多写少","slug":"二、读多写少","link":"#二、读多写少","children":[]},{"level":2,"title":"三、弱一致性","slug":"三、弱一致性","link":"#三、弱一致性","children":[]},{"level":2,"title":"四、连续存储","slug":"四、连续存储","link":"#四、连续存储","children":[]},{"level":2,"title":"五、思考题","slug":"五、思考题","link":"#五、思考题","children":[]}],"git":{"createdTime":1670565847000,"updatedTime":1670565847000,"contributors":[{"name":"zhanglf","email":"454486214@qq.com","commits":1}]},"readingTime":{"minutes":10.75,"words":3225},"filePathRelative":"zh/language/Java/multithreading/current-container/CopyOnWrite.md","localizedDate":"2022年12月9日","excerpt":"<h1> 写时复制</h1>\\n<div class=\\"custom-container tip\\">\\n<p class=\\"custom-container-title\\">提示</p>\\n<p><strong>为什么JUC只支持数组类型的写时复制并发容器？</strong></p>\\n<p>上一节，我们对JUC并发容器做了一个框架性介绍，提到了很多并发容器。本节，我们讲解其中的CopyOnWriteArrayList和CopyOnWriteArraySet，它们都是采用写时复制技术来实现，因此，称为写时复制并发容器。从名称，我们可以发现，这两个容器都跟数组有关。那么，为什么JUC没有提供CopyOnWriteLinkedList、CopyOnWriteHashMap等其他类型的写时复制并发容器呢？带着这个问题，我们来学习本节的内容。</p>\\n</div>","autoDesc":true}');export{t as data};
