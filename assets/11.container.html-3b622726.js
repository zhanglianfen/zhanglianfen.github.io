const e=JSON.parse('{"key":"v-509597cc","path":"/zh/language/Java/basics/container/11.container.html","title":"容器","lang":"zh-CN","frontmatter":{"category":["Java容器"],"description":"容器 为什么不推荐在项目中使用Vector、Stack、HashTable？ 为了方便开发，Java提供了很多容器，比如ArrayList、LinkedList、HashMap，这些容器底层封装了常用的数据结构，比如数组、链表、哈希表。尽管平时的开发几乎离不开容器，但据我了解，很多程序员只会使用最简单的几个，对容器的全貌没有一个系统性的认识，在使用时，也只是随手抓一个容器就用，不了解其底层实现原理，随便滥用的情况非常常见，极容易影响程序的性能。所以，本节就先粗略地介绍各个容器，让你对Java容器有一个框架性的认识。在后面的章节中，我们再详细讲解重点、难点容器。","head":[["meta",{"property":"og:url","content":"https://theme-zhang.netlify.app/zh/language/Java/basics/container/11.container.html"}],["meta",{"property":"og:site_name","content":"zhang"}],["meta",{"property":"og:title","content":"容器"}],["meta",{"property":"og:description","content":"容器 为什么不推荐在项目中使用Vector、Stack、HashTable？ 为了方便开发，Java提供了很多容器，比如ArrayList、LinkedList、HashMap，这些容器底层封装了常用的数据结构，比如数组、链表、哈希表。尽管平时的开发几乎离不开容器，但据我了解，很多程序员只会使用最简单的几个，对容器的全貌没有一个系统性的认识，在使用时，也只是随手抓一个容器就用，不了解其底层实现原理，随便滥用的情况非常常见，极容易影响程序的性能。所以，本节就先粗略地介绍各个容器，让你对Java容器有一个框架性的认识。在后面的章节中，我们再详细讲解重点、难点容器。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-09T06:04:07.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"article:modified_time","content":"2022-12-09T06:04:07.000Z"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://theme-zhang.netlify.app/en/language/Java/basics/container/11.container.html"}]]},"headers":[{"level":2,"title":"一、JCF","slug":"一、jcf","link":"#一、jcf","children":[]},{"level":2,"title":"二、List（列表）","slug":"二、list-列表","link":"#二、list-列表","children":[{"level":3,"title":"1）ArrayList","slug":"_1-arraylist","link":"#_1-arraylist","children":[]},{"level":3,"title":"2）LinkedList","slug":"_2-linkedlist","link":"#_2-linkedlist","children":[]},{"level":3,"title":"3）Vector","slug":"_3-vector","link":"#_3-vector","children":[]}]},{"level":2,"title":"三、Stack（栈）","slug":"三、stack-栈","link":"#三、stack-栈","children":[]},{"level":2,"title":"四、Queue（队列）","slug":"四、queue-队列","link":"#四、queue-队列","children":[]},{"level":2,"title":"五、Set（集合）","slug":"五、set-集合","link":"#五、set-集合","children":[]},{"level":2,"title":"六、Map（映射）","slug":"六、map-映射","link":"#六、map-映射","children":[]},{"level":2,"title":"七、课后思考题","slug":"七、课后思考题","link":"#七、课后思考题","children":[]}],"git":{"createdTime":1670565847000,"updatedTime":1670565847000,"contributors":[{"name":"zhanglf","email":"454486214@qq.com","commits":1}]},"readingTime":{"minutes":12.83,"words":3849},"filePathRelative":"zh/language/Java/basics/container/11.container.md","localizedDate":"2022年12月9日","excerpt":"<h1> 容器</h1>\\n<blockquote>\\n<p><strong>为什么不推荐在项目中使用Vector、Stack、HashTable？</strong></p>\\n</blockquote>\\n<p>为了方便开发，Java提供了很多容器，比如ArrayList、LinkedList、HashMap，这些容器底层封装了常用的数据结构，比如数组、链表、哈希表。尽管平时的开发几乎离不开容器，但据我了解，很多程序员只会使用最简单的几个，对容器的全貌没有一个系统性的认识，在使用时，也只是随手抓一个容器就用，不了解其底层实现原理，随便滥用的情况非常常见，极容易影响程序的性能。所以，本节就先粗略地介绍各个容器，让你对Java容器有一个框架性的认识。在后面的章节中，我们再详细讲解重点、难点容器。</p>","autoDesc":true}');export{e as data};
