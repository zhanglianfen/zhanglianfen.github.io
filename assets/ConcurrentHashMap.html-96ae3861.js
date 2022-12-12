const e=JSON.parse('{"key":"v-04c62694","path":"/zh/language/Java/multithreading/current-container/ConcurrentHashMap.html","title":"ConcurrentHashMap","lang":"zh-CN","frontmatter":{"category":["Java"],"tag":["多线程"],"description":"ConcurrentHashMap 提示 分段加锁：HashMap线程不安全的原因及ConcurrentHashMap的实现 HashMap是在开发中经常用到的容器，但是，它不是线程安全的，只能应用于单线程环境下。在多线程环境下，Java提供了线程安全的HashTable、SynchronizedMap，但是，两者因为采用粗粒度锁来实现，并发性能不佳。于是，JUC便开发了ConcurrentHashMap，利用分段加锁等技术来提高并发性能。本节，我们就来详细讲解一下ConcurrentHashMap的实现原理，这也是面试中经常被问到的地方。 这里特别声明一下，HashMap和ConcurrentHashMap在JDK7和JDK8中的实现方式均有较大差别，在本节中，我们参照JDK8中的实现方式来讲解。","head":[["meta",{"property":"og:url","content":"https://theme-zhang.netlify.app/zh/language/Java/multithreading/current-container/ConcurrentHashMap.html"}],["meta",{"property":"og:site_name","content":"zhang"}],["meta",{"property":"og:title","content":"ConcurrentHashMap"}],["meta",{"property":"og:description","content":"ConcurrentHashMap 提示 分段加锁：HashMap线程不安全的原因及ConcurrentHashMap的实现 HashMap是在开发中经常用到的容器，但是，它不是线程安全的，只能应用于单线程环境下。在多线程环境下，Java提供了线程安全的HashTable、SynchronizedMap，但是，两者因为采用粗粒度锁来实现，并发性能不佳。于是，JUC便开发了ConcurrentHashMap，利用分段加锁等技术来提高并发性能。本节，我们就来详细讲解一下ConcurrentHashMap的实现原理，这也是面试中经常被问到的地方。 这里特别声明一下，HashMap和ConcurrentHashMap在JDK7和JDK8中的实现方式均有较大差别，在本节中，我们参照JDK8中的实现方式来讲解。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-09T06:04:07.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"article:tag","content":"多线程"}],["meta",{"property":"article:modified_time","content":"2022-12-09T06:04:07.000Z"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://theme-zhang.netlify.app/en/language/Java/multithreading/current-container/ConcurrentHashMap.html"}]]},"headers":[{"level":2,"title":"一、HashMap线程不安全分析","slug":"一、hashmap线程不安全分析","link":"#一、hashmap线程不安全分析","children":[]},{"level":2,"title":"二、ConcurrentHashMap介绍","slug":"二、concurrenthashmap介绍","link":"#二、concurrenthashmap介绍","children":[]},{"level":2,"title":"三、get()函数的实现原理","slug":"三、get-函数的实现原理","link":"#三、get-函数的实现原理","children":[]},{"level":2,"title":"四、put()函数的实现原理","slug":"四、put-函数的实现原理","link":"#四、put-函数的实现原理","children":[]},{"level":2,"title":"五、size()函数的实现原理","slug":"五、size-函数的实现原理","link":"#五、size-函数的实现原理","children":[]},{"level":2,"title":"六、思考题","slug":"六、思考题","link":"#六、思考题","children":[]}],"git":{"createdTime":1670565847000,"updatedTime":1670565847000,"contributors":[{"name":"zhanglf","email":"454486214@qq.com","commits":1}]},"readingTime":{"minutes":17.61,"words":5284},"filePathRelative":"zh/language/Java/multithreading/current-container/ConcurrentHashMap.md","localizedDate":"2022年12月9日","excerpt":"<h1> ConcurrentHashMap</h1>\\n<div class=\\"custom-container tip\\">\\n<p class=\\"custom-container-title\\">提示</p>\\n<p><strong>分段加锁：HashMap线程不安全的原因及ConcurrentHashMap的实现</strong></p>\\n<p>HashMap是在开发中经常用到的容器，但是，它不是线程安全的，只能应用于单线程环境下。在多线程环境下，Java提供了线程安全的HashTable、SynchronizedMap，但是，两者因为采用粗粒度锁来实现，并发性能不佳。于是，JUC便开发了ConcurrentHashMap，利用分段加锁等技术来提高并发性能。本节，我们就来详细讲解一下ConcurrentHashMap的实现原理，这也是面试中经常被问到的地方。</p>\\n<p>这里特别声明一下，HashMap和ConcurrentHashMap在JDK7和JDK8中的实现方式均有较大差别，在本节中，我们参照JDK8中的实现方式来讲解。</p>\\n</div>","autoDesc":true}');export{e as data};
