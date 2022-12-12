const e=JSON.parse('{"key":"v-54b7ef54","path":"/zh/language/Java/basics/container/15.LinkedHashMap.html","title":"LinkedHashMap","lang":"zh-CN","frontmatter":{"category":["Java容器"],"description":"LinkedHashMap 如何使用LinkedHashMap实现LRU缓存？ 上一节我们讲了一个重点容器HashMap，其内部实现比较复杂，工作中和面试中都经常被涉及。本节，我们再讲解一个容易跟HashMap混淆的容器LinkedHashMap。LinkedHashMap是HashMap的增强版，既能实现快速的增删改查操作，又能实现容器内元素的有序遍历。借助这个特性，利用LinkedHashMap可以轻松实现LRU缓存，具体如何来做呢？带着这个问题，我们来学习本节的内容吧。","head":[["meta",{"property":"og:url","content":"https://theme-zhang.netlify.app/zh/language/Java/basics/container/15.LinkedHashMap.html"}],["meta",{"property":"og:site_name","content":"zhang"}],["meta",{"property":"og:title","content":"LinkedHashMap"}],["meta",{"property":"og:description","content":"LinkedHashMap 如何使用LinkedHashMap实现LRU缓存？ 上一节我们讲了一个重点容器HashMap，其内部实现比较复杂，工作中和面试中都经常被涉及。本节，我们再讲解一个容易跟HashMap混淆的容器LinkedHashMap。LinkedHashMap是HashMap的增强版，既能实现快速的增删改查操作，又能实现容器内元素的有序遍历。借助这个特性，利用LinkedHashMap可以轻松实现LRU缓存，具体如何来做呢？带着这个问题，我们来学习本节的内容吧。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-09T06:04:07.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"article:modified_time","content":"2022-12-09T06:04:07.000Z"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://theme-zhang.netlify.app/en/language/Java/basics/container/15.LinkedHashMap.html"}]]},"headers":[{"level":2,"title":"一、整体结构：哈希表+双向有序链表","slug":"一、整体结构-哈希表-双向有序链表","link":"#一、整体结构-哈希表-双向有序链表","children":[]},{"level":2,"title":"二、通过entrySet()输出有序的元素集合","slug":"二、通过entryset-输出有序的元素集合","link":"#二、通过entryset-输出有序的元素集合","children":[]},{"level":2,"title":"三、插入、删除、修改、查找的实现思路","slug":"三、插入、删除、修改、查找的实现思路","link":"#三、插入、删除、修改、查找的实现思路","children":[{"level":3,"title":"1）插入键值对","slug":"_1-插入键值对","link":"#_1-插入键值对","children":[]},{"level":3,"title":"2）删除键值对","slug":"_2-删除键值对","link":"#_2-删除键值对","children":[]},{"level":3,"title":"3）修改键对应值","slug":"_3-修改键对应值","link":"#_3-修改键对应值","children":[]},{"level":3,"title":"4）查找键值对","slug":"_4-查找键值对","link":"#_4-查找键值对","children":[]}]},{"level":2,"title":"四、利用LinkedHashMap实现LRU缓存","slug":"四、利用linkedhashmap实现lru缓存","link":"#四、利用linkedhashmap实现lru缓存","children":[]},{"level":2,"title":"五、课后思考题","slug":"五、课后思考题","link":"#五、课后思考题","children":[]}],"git":{"createdTime":1670565847000,"updatedTime":1670565847000,"contributors":[{"name":"zhanglf","email":"454486214@qq.com","commits":1}]},"readingTime":{"minutes":14.66,"words":4397},"filePathRelative":"zh/language/Java/basics/container/15.LinkedHashMap.md","localizedDate":"2022年12月9日","excerpt":"<h1> LinkedHashMap</h1>\\n<blockquote>\\n<p><strong>如何使用LinkedHashMap实现LRU缓存？</strong></p>\\n</blockquote>\\n<p>上一节我们讲了一个重点容器HashMap，其内部实现比较复杂，工作中和面试中都经常被涉及。本节，我们再讲解一个容易跟HashMap混淆的容器LinkedHashMap。LinkedHashMap是HashMap的增强版，既能实现快速的增删改查操作，又能实现容器内元素的有序遍历。借助这个特性，利用LinkedHashMap可以轻松实现LRU缓存，具体如何来做呢？带着这个问题，我们来学习本节的内容吧。</p>","autoDesc":true}');export{e as data};
