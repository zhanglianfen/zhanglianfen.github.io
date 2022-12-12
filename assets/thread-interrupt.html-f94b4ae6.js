const e=JSON.parse('{"key":"v-752c8600","path":"/zh/language/Java/multithreading/thread-manage/thread-interrupt.html","title":"线程中断","lang":"zh-CN","frontmatter":{"category":["Java"],"tag":["多线程"],"description":"线程中断 提示 如何安全地提前终止正在执行业务逻辑的线程？ 大部分情况下，线程在执行完业务逻辑之后便自行结束，但是，少数情况下，由于应用程序关闭等原因，线程在执行业务逻辑的过程中有可能提前被终止。我们需要寻找一些安全的线程终止方式，避免突然中止业务逻辑而导致的数据不一致、资源得不到回收等问题。本节，我们就详细讲一讲，如何安全地提前终止线程，并且重点讲解其中的中断方法。","head":[["meta",{"property":"og:url","content":"https://theme-zhang.netlify.app/zh/language/Java/multithreading/thread-manage/thread-interrupt.html"}],["meta",{"property":"og:site_name","content":"zhang"}],["meta",{"property":"og:title","content":"线程中断"}],["meta",{"property":"og:description","content":"线程中断 提示 如何安全地提前终止正在执行业务逻辑的线程？ 大部分情况下，线程在执行完业务逻辑之后便自行结束，但是，少数情况下，由于应用程序关闭等原因，线程在执行业务逻辑的过程中有可能提前被终止。我们需要寻找一些安全的线程终止方式，避免突然中止业务逻辑而导致的数据不一致、资源得不到回收等问题。本节，我们就详细讲一讲，如何安全地提前终止线程，并且重点讲解其中的中断方法。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-09T06:04:07.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"article:tag","content":"多线程"}],["meta",{"property":"article:modified_time","content":"2022-12-09T06:04:07.000Z"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://theme-zhang.netlify.app/en/language/Java/multithreading/thread-manage/thread-interrupt.html"}]]},"headers":[{"level":2,"title":"一、基于标志终止线程","slug":"一、基于标志终止线程","link":"#一、基于标志终止线程","children":[]},{"level":2,"title":"二、基于中断终止线程","slug":"二、基于中断终止线程","link":"#二、基于中断终止线程","children":[]},{"level":2,"title":"三、基于中断异常终止线程","slug":"三、基于中断异常终止线程","link":"#三、基于中断异常终止线程","children":[]},{"level":2,"title":"四、Java中断 VS 操作系统中断","slug":"四、java中断-vs-操作系统中断","link":"#四、java中断-vs-操作系统中断","children":[]},{"level":2,"title":"五、课后思考题","slug":"五、课后思考题","link":"#五、课后思考题","children":[]}],"git":{"createdTime":1670565847000,"updatedTime":1670565847000,"contributors":[{"name":"zhanglf","email":"454486214@qq.com","commits":1}]},"readingTime":{"minutes":8.76,"words":2629},"filePathRelative":"zh/language/Java/multithreading/thread-manage/thread-interrupt.md","localizedDate":"2022年12月9日","excerpt":"<h1> 线程中断</h1>\\n<div class=\\"custom-container tip\\">\\n<p class=\\"custom-container-title\\">提示</p>\\n<p><strong>如何安全地提前终止正在执行业务逻辑的线程？</strong></p>\\n<p>大部分情况下，线程在执行完业务逻辑之后便自行结束，但是，少数情况下，由于应用程序关闭等原因，线程在执行业务逻辑的过程中有可能提前被终止。我们需要寻找一些安全的线程终止方式，避免突然中止业务逻辑而导致的数据不一致、资源得不到回收等问题。本节，我们就详细讲一讲，如何安全地提前终止线程，并且重点讲解其中的中断方法。</p>\\n</div>","autoDesc":true}');export{e as data};
