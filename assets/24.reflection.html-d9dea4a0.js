const e=JSON.parse('{"key":"v-101f9898","path":"/zh/language/Java/basics/code/24.reflection.html","title":"反射","lang":"zh-CN","frontmatter":{"category":["Java"],"description":"反射 为什么通过反射创建对象要比使用new创建对象慢？ 尽管在平时的业务开发中，我们很少会用到反射、注解、动态代理这些比较高级的Java语法，但是，在框架开发中，它们却非常常用，可以说是支撑框架开发的核心技术。比如，我们常用的Spring框架，其中的IOC就是基于反射实现的，AOP就是基于动态代理实现的，配置就是基于注解实现的。尽管在业务开发中，我们不常用到它们，但是，要想阅读开源框架的源码，掌握这些技术是必不可少的。接下来，我们就来讲讲反射、注解、动态代理。本节我们重点讲下反射。","head":[["meta",{"property":"og:url","content":"https://theme-zhang.netlify.app/zh/language/Java/basics/code/24.reflection.html"}],["meta",{"property":"og:site_name","content":"zhang"}],["meta",{"property":"og:title","content":"反射"}],["meta",{"property":"og:description","content":"反射 为什么通过反射创建对象要比使用new创建对象慢？ 尽管在平时的业务开发中，我们很少会用到反射、注解、动态代理这些比较高级的Java语法，但是，在框架开发中，它们却非常常用，可以说是支撑框架开发的核心技术。比如，我们常用的Spring框架，其中的IOC就是基于反射实现的，AOP就是基于动态代理实现的，配置就是基于注解实现的。尽管在业务开发中，我们不常用到它们，但是，要想阅读开源框架的源码，掌握这些技术是必不可少的。接下来，我们就来讲讲反射、注解、动态代理。本节我们重点讲下反射。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-09T06:04:07.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"article:modified_time","content":"2022-12-09T06:04:07.000Z"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://theme-zhang.netlify.app/en/language/Java/basics/code/24.reflection.html"}]]},"headers":[{"level":2,"title":"一、反射的作用","slug":"一、反射的作用","link":"#一、反射的作用","children":[]},{"level":2,"title":"二、反射的用法","slug":"二、反射的用法","link":"#二、反射的用法","children":[]},{"level":2,"title":"三、反射攻击","slug":"三、反射攻击","link":"#三、反射攻击","children":[]},{"level":2,"title":"四、反射的应用","slug":"四、反射的应用","link":"#四、反射的应用","children":[]},{"level":2,"title":"五、反射的原理","slug":"五、反射的原理","link":"#五、反射的原理","children":[]},{"level":2,"title":"六、课后思考题","slug":"六、课后思考题","link":"#六、课后思考题","children":[]}],"git":{"createdTime":1670565847000,"updatedTime":1670565847000,"contributors":[{"name":"zhanglf","email":"454486214@qq.com","commits":1}]},"readingTime":{"minutes":15.32,"words":4597},"filePathRelative":"zh/language/Java/basics/code/24.reflection.md","localizedDate":"2022年12月9日","excerpt":"<h1> 反射</h1>\\n<blockquote>\\n<p><strong>为什么通过反射创建对象要比使用new创建对象慢？</strong></p>\\n</blockquote>\\n<p>尽管在平时的业务开发中，我们很少会用到反射、注解、动态代理这些比较高级的Java语法，但是，在框架开发中，它们却非常常用，可以说是支撑框架开发的核心技术。比如，我们常用的Spring框架，其中的IOC就是基于反射实现的，AOP就是基于动态代理实现的，配置就是基于注解实现的。尽管在业务开发中，我们不常用到它们，但是，要想阅读开源框架的源码，掌握这些技术是必不可少的。接下来，我们就来讲讲反射、注解、动态代理。本节我们重点讲下反射。</p>","autoDesc":true}');export{e as data};