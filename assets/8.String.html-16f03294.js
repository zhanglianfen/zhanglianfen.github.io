const t=JSON.parse('{"key":"v-55e2747e","path":"/zh/language/Java/basics/grammar/8.String.html","title":"字符串","lang":"zh-CN","frontmatter":{"category":["Java基础"],"description":"字符串 除了int、long等基本类型，及其Integer、Long等包装类之外，在项目开发中，字符串也是应用得非常多的数据类型。Java提供了String类，封装了字符数组（char[]），并提供了大量操作字符串的方法，比如toUpperCase()、split()、substring()等。除此之外，Java String也是面试中常考的知识点，比如，Java String为什么设计成final不可变类？早期JDK中的substring()函数为什么会出现内存泄露？intern()方法的作用和底层实现原理是什么？等等。本节我们就来详细聊聊String类型。","head":[["meta",{"property":"og:url","content":"https://theme-zhang.netlify.app/zh/language/Java/basics/grammar/8.String.html"}],["meta",{"property":"og:site_name","content":"zhang"}],["meta",{"property":"og:title","content":"字符串"}],["meta",{"property":"og:description","content":"字符串 除了int、long等基本类型，及其Integer、Long等包装类之外，在项目开发中，字符串也是应用得非常多的数据类型。Java提供了String类，封装了字符数组（char[]），并提供了大量操作字符串的方法，比如toUpperCase()、split()、substring()等。除此之外，Java String也是面试中常考的知识点，比如，Java String为什么设计成final不可变类？早期JDK中的substring()函数为什么会出现内存泄露？intern()方法的作用和底层实现原理是什么？等等。本节我们就来详细聊聊String类型。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-09T06:04:07.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"article:modified_time","content":"2022-12-09T06:04:07.000Z"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://theme-zhang.netlify.app/en/language/Java/basics/grammar/8.String.html"}]]},"headers":[{"level":2,"title":"一、String的实现原理","slug":"一、string的实现原理","link":"#一、string的实现原理","children":[{"level":3,"title":"1）构造方法","slug":"_1-构造方法","link":"#_1-构造方法","children":[]},{"level":3,"title":"2）运算符","slug":"_2-运算符","link":"#_2-运算符","children":[]},{"level":3,"title":"3）length()","slug":"_3-length","link":"#_3-length","children":[]},{"level":3,"title":"4）valueOf()","slug":"_4-valueof","link":"#_4-valueof","children":[]},{"level":3,"title":"5）compareTo()","slug":"_5-compareto","link":"#_5-compareto","children":[]},{"level":3,"title":"6）substring()","slug":"_6-substring","link":"#_6-substring","children":[]}]},{"level":2,"title":"二、String的压缩技术","slug":"二、string的压缩技术","link":"#二、string的压缩技术","children":[]},{"level":2,"title":"三、String的常量池技术","slug":"三、string的常量池技术","link":"#三、string的常量池技术","children":[]},{"level":2,"title":"四、String的不可变性","slug":"四、string的不可变性","link":"#四、string的不可变性","children":[]},{"level":2,"title":"五、StringBuilder","slug":"五、stringbuilder","link":"#五、stringbuilder","children":[]},{"level":2,"title":"六、课后思考题","slug":"六、课后思考题","link":"#六、课后思考题","children":[]}],"git":{"createdTime":1670565847000,"updatedTime":1670565847000,"contributors":[{"name":"zhanglf","email":"454486214@qq.com","commits":1}]},"readingTime":{"minutes":18.25,"words":5475},"filePathRelative":"zh/language/Java/basics/grammar/8.String.md","localizedDate":"2022年12月9日","excerpt":"<h1> 字符串</h1>\\n<p>除了int、long等基本类型，及其Integer、Long等包装类之外，在项目开发中，字符串也是应用得非常多的数据类型。Java提供了String类，封装了字符数组（char[]），并提供了大量操作字符串的方法，比如toUpperCase()、split()、substring()等。除此之外，Java String也是面试中常考的知识点，比如，Java String为什么设计成final不可变类？早期JDK中的substring()函数为什么会出现内存泄露？intern()方法的作用和底层实现原理是什么？等等。本节我们就来详细聊聊String类型。</p>","autoDesc":true}');export{t as data};
