const e=JSON.parse('{"key":"v-2a3e70bc","path":"/zh/basics/design-principles/%E5%AE%9E%E6%88%98%E4%BA%8C.html","title":"实现一个支持各种统计规则的性能计数器","lang":"zh-CN","frontmatter":{"category":["设计原则和思想"],"description":"实现一个支持各种统计规则的性能计数器 项目背景 我们希望设计开发一个小的框架，能够获取接口调用的各种统计信息，比如，响应时间的最大值（max）、最小值（min）、平均值（avg）、百分位值（percentile）、接口调用次数（count）、频率（tps） 等，并且支持将统计结果以各种显示格式（比如：JSON 格式、网页格式、自定义显示格式等）输出到各种终端（Console 命令行、HTTP 网页、Email、日志文件、自定义输出终端等），以方便查看。 需求分析 性能计数器作为一个跟业务无关的功能，我们完全可以把它开发成一个独立的框架或者类库，集成到很多业务系统中。而作为可被复用的框架，除了功能性需求之外，非功能性需求也非常重要。所以，接下来，我们从这两个方面来做需求分析。","head":[["meta",{"property":"og:url","content":"https://theme-zhang.netlify.app/zh/basics/design-principles/%E5%AE%9E%E6%88%98%E4%BA%8C.html"}],["meta",{"property":"og:site_name","content":"zhang"}],["meta",{"property":"og:title","content":"实现一个支持各种统计规则的性能计数器"}],["meta",{"property":"og:description","content":"实现一个支持各种统计规则的性能计数器 项目背景 我们希望设计开发一个小的框架，能够获取接口调用的各种统计信息，比如，响应时间的最大值（max）、最小值（min）、平均值（avg）、百分位值（percentile）、接口调用次数（count）、频率（tps） 等，并且支持将统计结果以各种显示格式（比如：JSON 格式、网页格式、自定义显示格式等）输出到各种终端（Console 命令行、HTTP 网页、Email、日志文件、自定义输出终端等），以方便查看。 需求分析 性能计数器作为一个跟业务无关的功能，我们完全可以把它开发成一个独立的框架或者类库，集成到很多业务系统中。而作为可被复用的框架，除了功能性需求之外，非功能性需求也非常重要。所以，接下来，我们从这两个方面来做需求分析。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-09T06:04:07.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"article:modified_time","content":"2022-12-09T06:04:07.000Z"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://theme-zhang.netlify.app/en/basics/design-principles/%E5%AE%9E%E6%88%98%E4%BA%8C.html"}]]},"headers":[{"level":2,"title":"项目背景","slug":"项目背景","link":"#项目背景","children":[]},{"level":2,"title":"需求分析","slug":"需求分析","link":"#需求分析","children":[{"level":3,"title":"1. 功能性需求分析","slug":"_1-功能性需求分析","link":"#_1-功能性需求分析","children":[]},{"level":3,"title":"2. 非功能性需求分析","slug":"_2-非功能性需求分析","link":"#_2-非功能性需求分析","children":[]}]},{"level":2,"title":"框架设计","slug":"框架设计","link":"#框架设计","children":[]},{"level":2,"title":"小步快跑、逐步迭代","slug":"小步快跑、逐步迭代","link":"#小步快跑、逐步迭代","children":[]},{"level":2,"title":"面向对象设计与实现","slug":"面向对象设计与实现","link":"#面向对象设计与实现","children":[{"level":3,"title":"1. 划分职责进而识别出有哪些类","slug":"_1-划分职责进而识别出有哪些类","link":"#_1-划分职责进而识别出有哪些类","children":[]},{"level":3,"title":"2. 定义类及类与类之间的关系","slug":"_2-定义类及类与类之间的关系","link":"#_2-定义类及类与类之间的关系","children":[]},{"level":3,"title":"3. 将类组装起来并提供执行入口","slug":"_3-将类组装起来并提供执行入口","link":"#_3-将类组装起来并提供执行入口","children":[]}]},{"level":2,"title":"Review 设计与实现","slug":"review-设计与实现","link":"#review-设计与实现","children":[]},{"level":2,"title":"重点回顾","slug":"重点回顾","link":"#重点回顾","children":[]},{"level":2,"title":"课堂讨论","slug":"课堂讨论","link":"#课堂讨论","children":[]}],"git":{"createdTime":1670565847000,"updatedTime":1670565847000,"contributors":[{"name":"zhanglf","email":"454486214@qq.com","commits":1}]},"readingTime":{"minutes":26.17,"words":7852},"filePathRelative":"zh/basics/design-principles/实战二.md","localizedDate":"2022年12月9日","excerpt":"<h1> 实现一个支持各种统计规则的性能计数器</h1>\\n<h2> 项目背景</h2>\\n<p>我们希望设计开发一个小的框架，能够获取接口调用的各种统计信息，比如，响应时间的最大值（max）、最小值（min）、平均值（avg）、百分位值（percentile）、接口调用次数（count）、频率（tps） 等，并且支持将统计结果以各种显示格式（比如：JSON 格式、网页格式、自定义显示格式等）输出到各种终端（Console 命令行、HTTP 网页、Email、日志文件、自定义输出终端等），以方便查看。</p>\\n<h2> 需求分析</h2>\\n<p>性能计数器作为一个跟业务无关的功能，我们完全可以把它开发成一个独立的框架或者类库，集成到很多业务系统中。而作为可被复用的框架，除了功能性需求之外，非功能性需求也非常重要。所以，接下来，我们从这两个方面来做需求分析。</p>","autoDesc":true}');export{e as data};
