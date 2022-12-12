const e=JSON.parse('{"key":"v-771e973d","path":"/zh/language/Java/multithreading/current-container/currentContainer.html","title":"并发容器","lang":"zh-CN","frontmatter":{"category":["Java"],"tag":["多线程"],"description":"并发容器 提示 如何实现线程安全的数组、链表、哈希表等常用数据结构？ 为了方便开发，Java提供了很多容器，比如ArrayList、HashMap、TreeSet等，底层对数组、哈希表、红黑树等常用的数据结构进行了封装。在开发时，我们直接使用这些现成的容器即可，不需要重新从零去开发。对于这些封装了常用数据结构的容器，在多线程环境下，我们如何来保证它们的线程安全性呢？ 依靠程序员自己去编写代码，比如对操作加锁，来维护容器的线程安全性，一来耗费开发时间，二来性能没有保证。为了解决这个问题，JUC针对常用的容器，对应开发了高性能的并发容器。在多线程编程中，我们直接使用这些现成的并发容器即可。 从本节开始，我们就来详细讲解一下，JUC并发容器的用法和实现原理。在正式开始之前，本节先对JUC并发容器做一个框架性的介绍，让你对JUC并发容器有一个系统性的认识。","head":[["meta",{"property":"og:url","content":"https://theme-zhang.netlify.app/zh/language/Java/multithreading/current-container/currentContainer.html"}],["meta",{"property":"og:site_name","content":"zhang"}],["meta",{"property":"og:title","content":"并发容器"}],["meta",{"property":"og:description","content":"并发容器 提示 如何实现线程安全的数组、链表、哈希表等常用数据结构？ 为了方便开发，Java提供了很多容器，比如ArrayList、HashMap、TreeSet等，底层对数组、哈希表、红黑树等常用的数据结构进行了封装。在开发时，我们直接使用这些现成的容器即可，不需要重新从零去开发。对于这些封装了常用数据结构的容器，在多线程环境下，我们如何来保证它们的线程安全性呢？ 依靠程序员自己去编写代码，比如对操作加锁，来维护容器的线程安全性，一来耗费开发时间，二来性能没有保证。为了解决这个问题，JUC针对常用的容器，对应开发了高性能的并发容器。在多线程编程中，我们直接使用这些现成的并发容器即可。 从本节开始，我们就来详细讲解一下，JUC并发容器的用法和实现原理。在正式开始之前，本节先对JUC并发容器做一个框架性的介绍，让你对JUC并发容器有一个系统性的认识。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-09T06:04:07.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"article:tag","content":"多线程"}],["meta",{"property":"article:modified_time","content":"2022-12-09T06:04:07.000Z"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://theme-zhang.netlify.app/en/language/Java/multithreading/current-container/currentContainer.html"}]]},"headers":[{"level":2,"title":"一、Java容器回顾","slug":"一、java容器回顾","link":"#一、java容器回顾","children":[]},{"level":2,"title":"二、Java并发容器","slug":"二、java并发容器","link":"#二、java并发容器","children":[]},{"level":2,"title":"三、JUC并发容器","slug":"三、juc并发容器","link":"#三、juc并发容器","children":[]},{"level":2,"title":"四、思考题","slug":"四、思考题","link":"#四、思考题","children":[]}],"git":{"createdTime":1670565847000,"updatedTime":1670565847000,"contributors":[{"name":"zhanglf","email":"454486214@qq.com","commits":1}]},"readingTime":{"minutes":5.4,"words":1621},"filePathRelative":"zh/language/Java/multithreading/current-container/currentContainer.md","localizedDate":"2022年12月9日","excerpt":"<h1> 并发容器</h1>\\n<div class=\\"custom-container tip\\">\\n<p class=\\"custom-container-title\\">提示</p>\\n<p><strong>如何实现线程安全的数组、链表、哈希表等常用数据结构？</strong></p>\\n<p>为了方便开发，Java提供了很多容器，比如ArrayList、HashMap、TreeSet等，底层对数组、哈希表、红黑树等常用的数据结构进行了封装。在开发时，我们直接使用这些现成的容器即可，不需要重新从零去开发。对于这些封装了常用数据结构的容器，在多线程环境下，我们如何来保证它们的线程安全性呢？</p>\\n<p>依靠程序员自己去编写代码，比如对操作加锁，来维护容器的线程安全性，一来耗费开发时间，二来性能没有保证。为了解决这个问题，JUC针对常用的容器，对应开发了高性能的并发容器。在多线程编程中，我们直接使用这些现成的并发容器即可。</p>\\n<p>从本节开始，我们就来详细讲解一下，JUC并发容器的用法和实现原理。在正式开始之前，本节先对JUC并发容器做一个框架性的介绍，让你对JUC并发容器有一个系统性的认识。</p>\\n</div>","autoDesc":true}');export{e as data};