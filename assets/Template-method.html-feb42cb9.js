const e=JSON.parse('{"key":"v-741a5dc0","path":"/zh/basics/design-patterns/behavioral-patterns/Template-method.html","title":"模板模式","lang":"zh-CN","frontmatter":{"category":["行为型设计模式"],"description":"模板模式 上节学习了第一个行为型设计模式，观察者模式。针对不同的应用场景，有不同的实现方式，有同步阻塞、异步非阻塞的实现方式，也有进程内、进程间的实现方式。除此之外，还实现了一个简单的 EventBus 框架。 今天，再学习另外一种行为型设计模式，模板模式。绝大部分设计模式的原理和实现，都非常简单，难的是掌握应用场景，搞清楚能解决什么问题。 模板模式也不例外。模板模式主要是用来解决复用和扩展两个问题。我们今天会结合 Java Servlet、JUnit TestCase、Java InputStream、Java AbstractList 四个例子来具体讲解这两个作用。","head":[["meta",{"property":"og:url","content":"https://theme-zhang.netlify.app/zh/basics/design-patterns/behavioral-patterns/Template-method.html"}],["meta",{"property":"og:site_name","content":"zhang"}],["meta",{"property":"og:title","content":"模板模式"}],["meta",{"property":"og:description","content":"模板模式 上节学习了第一个行为型设计模式，观察者模式。针对不同的应用场景，有不同的实现方式，有同步阻塞、异步非阻塞的实现方式，也有进程内、进程间的实现方式。除此之外，还实现了一个简单的 EventBus 框架。 今天，再学习另外一种行为型设计模式，模板模式。绝大部分设计模式的原理和实现，都非常简单，难的是掌握应用场景，搞清楚能解决什么问题。 模板模式也不例外。模板模式主要是用来解决复用和扩展两个问题。我们今天会结合 Java Servlet、JUnit TestCase、Java InputStream、Java AbstractList 四个例子来具体讲解这两个作用。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-09T06:04:07.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"article:modified_time","content":"2022-12-09T06:04:07.000Z"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://theme-zhang.netlify.app/en/basics/design-patterns/behavioral-patterns/Template-method.html"}]]},"headers":[{"level":2,"title":"模板模式的原理与实现","slug":"模板模式的原理与实现","link":"#模板模式的原理与实现","children":[]},{"level":2,"title":"模板模式作用一：复用","slug":"模板模式作用一-复用","link":"#模板模式作用一-复用","children":[{"level":3,"title":"1. Java InputStream","slug":"_1-java-inputstream","link":"#_1-java-inputstream","children":[]},{"level":3,"title":"2. Java AbstractList","slug":"_2-java-abstractlist","link":"#_2-java-abstractlist","children":[]}]},{"level":2,"title":"模板模式作用二：扩展","slug":"模板模式作用二-扩展","link":"#模板模式作用二-扩展","children":[{"level":3,"title":"1. Java Servlet","slug":"_1-java-servlet","link":"#_1-java-servlet","children":[]},{"level":3,"title":"2.JUnit TestCase","slug":"_2-junit-testcase","link":"#_2-junit-testcase","children":[]}]},{"level":2,"title":"回调的原理解析","slug":"回调的原理解析","link":"#回调的原理解析","children":[]},{"level":2,"title":"应用举例一：JdbcTemplate","slug":"应用举例一-jdbctemplate","link":"#应用举例一-jdbctemplate","children":[]},{"level":2,"title":"应用举例二：setClickListener(）","slug":"应用举例二-setclicklistener","link":"#应用举例二-setclicklistener","children":[]},{"level":2,"title":"应用举例三：addShutdownHook()","slug":"应用举例三-addshutdownhook","link":"#应用举例三-addshutdownhook","children":[]},{"level":2,"title":"模板模式 VS 回调","slug":"模板模式-vs-回调","link":"#模板模式-vs-回调","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"思考题","slug":"思考题","link":"#思考题","children":[]}],"git":{"createdTime":1670565847000,"updatedTime":1670565847000,"contributors":[{"name":"zhanglf","email":"454486214@qq.com","commits":1}]},"readingTime":{"minutes":20.71,"words":6213},"filePathRelative":"zh/basics/design-patterns/behavioral-patterns/Template-method.md","localizedDate":"2022年12月9日","excerpt":"<h1> 模板模式</h1>\\n<p>上节学习了第一个行为型设计模式，观察者模式。针对不同的应用场景，有不同的实现方式，有同步阻塞、异步非阻塞的实现方式，也有进程内、进程间的实现方式。除此之外，还实现了一个简单的 EventBus 框架。</p>\\n<p>今天，再学习另外一种行为型设计模式，模板模式。<strong>绝大部分设计模式的原理和实现，都非常简单，难的是掌握应用场景，搞清楚能解决什么问题。</strong> 模板模式也不例外。模板模式主要是用来解决<strong>复用</strong>和<strong>扩展</strong>两个问题。我们今天会结合 Java Servlet、JUnit TestCase、Java InputStream、Java AbstractList 四个例子来具体讲解这两个作用。</p>","autoDesc":true}');export{e as data};
