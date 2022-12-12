const e=JSON.parse('{"key":"v-573ece1a","path":"/zh/basics/design-patterns/behavioral-patterns/Interpreter.html","title":"解释器模式","lang":"zh-CN","frontmatter":{"category":["行为型设计模式"],"description":"解释器模式 上节我们学习了命令模式。命令模式将请求封装成对象，方便作为函数参数传递和赋值给变量。它主要的应用场景是给命令的执行附加功能，换句话说，就是控制命令的执行，比如，排队、异步、延迟执行命令、给命令执行记录日志、撤销重做命令等等。总体上来讲，命令模式的应用范围并不广。 今天，我们来学习解释器模式，它用来描述如何构建一个简单的“语言”解释器。比起命令模式，解释器模式更加小众，只在一些特定的领域会被用到，比如编译器、规则引擎、正则表达式。所以，解释器模式也不是我们学习的重点，你稍微了解一下就可以了。 解释器模式的原理和实现","head":[["meta",{"property":"og:url","content":"https://theme-zhang.netlify.app/zh/basics/design-patterns/behavioral-patterns/Interpreter.html"}],["meta",{"property":"og:site_name","content":"zhang"}],["meta",{"property":"og:title","content":"解释器模式"}],["meta",{"property":"og:description","content":"解释器模式 上节我们学习了命令模式。命令模式将请求封装成对象，方便作为函数参数传递和赋值给变量。它主要的应用场景是给命令的执行附加功能，换句话说，就是控制命令的执行，比如，排队、异步、延迟执行命令、给命令执行记录日志、撤销重做命令等等。总体上来讲，命令模式的应用范围并不广。 今天，我们来学习解释器模式，它用来描述如何构建一个简单的“语言”解释器。比起命令模式，解释器模式更加小众，只在一些特定的领域会被用到，比如编译器、规则引擎、正则表达式。所以，解释器模式也不是我们学习的重点，你稍微了解一下就可以了。 解释器模式的原理和实现"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-09T06:04:07.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"article:modified_time","content":"2022-12-09T06:04:07.000Z"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://theme-zhang.netlify.app/en/basics/design-patterns/behavioral-patterns/Interpreter.html"}]]},"headers":[{"level":2,"title":"解释器模式的原理和实现","slug":"解释器模式的原理和实现","link":"#解释器模式的原理和实现","children":[]},{"level":2,"title":"解释器模式实战举例","slug":"解释器模式实战举例","link":"#解释器模式实战举例","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"思考题","slug":"思考题","link":"#思考题","children":[]}],"git":{"createdTime":1670565847000,"updatedTime":1670565847000,"contributors":[{"name":"zhanglf","email":"454486214@qq.com","commits":1}]},"readingTime":{"minutes":11.01,"words":3302},"filePathRelative":"zh/basics/design-patterns/behavioral-patterns/Interpreter.md","localizedDate":"2022年12月9日","excerpt":"<h1> 解释器模式</h1>\\n<p>上节我们学习了命令模式。命令模式将请求封装成对象，方便作为函数参数传递和赋值给变量。它主要的应用场景是给命令的执行附加功能，换句话说，就是控制命令的执行，比如，排队、异步、延迟执行命令、给命令执行记录日志、撤销重做命令等等。总体上来讲，命令模式的应用范围并不广。</p>\\n<p>今天，我们来学习解释器模式，它用来描述如何构建一个简单的“语言”解释器。比起命令模式，解释器模式更加小众，只在一些特定的领域会被用到，比如编译器、规则引擎、正则表达式。所以，解释器模式也不是我们学习的重点，你稍微了解一下就可以了。</p>\\n<h2> 解释器模式的原理和实现</h2>\\n","autoDesc":true}');export{e as data};