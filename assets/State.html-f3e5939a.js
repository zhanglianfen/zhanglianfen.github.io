const t=JSON.parse('{"key":"v-e06b22ba","path":"/zh/basics/design-patterns/behavioral-patterns/State.html","title":"状态模式","lang":"zh-CN","frontmatter":{"category":["行为型设计模式"],"description":"状态模式 在实际的软件开发中，状态模式并不是很常用，但是在能够用到的场景里，它可以发挥很大的作用。从这一点上来看，它有点像我们之前讲到的组合模式。 状态模式一般用来实现状态机，而状态机常用在游戏、工作流引擎等系统开发中。不过，状态机的实现方式有多种，除了状态模式，比较常用的还有分支逻辑法和查表法。今天，我们就详细讲讲这几种实现方式，并且对比一下它们的优劣和应用场景。 什么是有限状态机？ 有限状态机，英文翻译是 Finite State Machine，缩写为 FSM，简称为状态机。状态机有 3 个组成部分：状态（State）、事件（Event）、动作（Action）。其中，事件也称为转移条件（Transition Condition）。事件触发状态的转移及动作的执行。不过，动作不是必须的，也可能只转移状态，不执行任何动作。","head":[["meta",{"property":"og:url","content":"https://theme-zhang.netlify.app/zh/basics/design-patterns/behavioral-patterns/State.html"}],["meta",{"property":"og:site_name","content":"zhang"}],["meta",{"property":"og:title","content":"状态模式"}],["meta",{"property":"og:description","content":"状态模式 在实际的软件开发中，状态模式并不是很常用，但是在能够用到的场景里，它可以发挥很大的作用。从这一点上来看，它有点像我们之前讲到的组合模式。 状态模式一般用来实现状态机，而状态机常用在游戏、工作流引擎等系统开发中。不过，状态机的实现方式有多种，除了状态模式，比较常用的还有分支逻辑法和查表法。今天，我们就详细讲讲这几种实现方式，并且对比一下它们的优劣和应用场景。 什么是有限状态机？ 有限状态机，英文翻译是 Finite State Machine，缩写为 FSM，简称为状态机。状态机有 3 个组成部分：状态（State）、事件（Event）、动作（Action）。其中，事件也称为转移条件（Transition Condition）。事件触发状态的转移及动作的执行。不过，动作不是必须的，也可能只转移状态，不执行任何动作。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-09T06:04:07.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"article:modified_time","content":"2022-12-09T06:04:07.000Z"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://theme-zhang.netlify.app/en/basics/design-patterns/behavioral-patterns/State.html"}]]},"headers":[{"level":2,"title":"什么是有限状态机？","slug":"什么是有限状态机","link":"#什么是有限状态机","children":[]},{"level":2,"title":"状态机实现方式一：分支逻辑法","slug":"状态机实现方式一-分支逻辑法","link":"#状态机实现方式一-分支逻辑法","children":[]},{"level":2,"title":"状态机实现方式二：查表法","slug":"状态机实现方式二-查表法","link":"#状态机实现方式二-查表法","children":[]},{"level":2,"title":"状态机实现方式三：状态模式","slug":"状态机实现方式三-状态模式","link":"#状态机实现方式三-状态模式","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"思考题","slug":"思考题","link":"#思考题","children":[]}],"git":{"createdTime":1670565847000,"updatedTime":1670565847000,"contributors":[{"name":"zhanglf","email":"454486214@qq.com","commits":1}]},"readingTime":{"minutes":11.44,"words":3433},"filePathRelative":"zh/basics/design-patterns/behavioral-patterns/State.md","localizedDate":"2022年12月9日","excerpt":"<h1> 状态模式</h1>\\n<p>在实际的软件开发中，状态模式并不是很常用，但是在能够用到的场景里，它可以发挥很大的作用。从这一点上来看，它有点像我们之前讲到的组合模式。</p>\\n<p>状态模式一般用来实现状态机，而状态机常用在游戏、工作流引擎等系统开发中。不过，状态机的实现方式有多种，除了状态模式，比较常用的还有分支逻辑法和查表法。今天，我们就详细讲讲这几种实现方式，并且对比一下它们的优劣和应用场景。</p>\\n<h2> 什么是有限状态机？</h2>\\n<p>有限状态机，英文翻译是 Finite State Machine，缩写为 FSM，简称为状态机。状态机有 3 个组成部分：状态（State）、事件（Event）、动作（Action）。其中，事件也称为转移条件（Transition Condition）。事件触发状态的转移及动作的执行。不过，动作不是必须的，也可能只转移状态，不执行任何动作。</p>","autoDesc":true}');export{t as data};
