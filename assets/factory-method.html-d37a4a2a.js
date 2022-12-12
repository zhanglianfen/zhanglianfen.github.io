const t=JSON.parse('{"key":"v-1358c4ed","path":"/zh/basics/design-patterns/creational-patterns/factory-method.html","title":"工厂方法","lang":"zh-CN","frontmatter":{"description":"工厂方法 一般情况下，工厂模式分为三种更加细分的类型：简单工厂、工厂方法和抽象工厂。不过，在 GoF 的《设计模式》一书中，它将简单工厂模式看作是工厂方法模式的一种特例，所以工厂模式只被分成了工厂方法和抽象工厂两类。实际上，前面一种分类方法更加常见，所以，在今天的讲解中，我们沿用第一种分类方法。 在这三种细分的工厂模式中，简单工厂、工厂方法原理比较简单，在实际的项目中也比较常用。而抽象工厂的原理稍微复杂点，在实际的项目中相对也不常用。所以，我们今天讲解的重点是前两种工厂模式。对于抽象工厂，稍微了解一下即可。 除此之外，重点也不是原理和实现，因为这些都很简单，重点还是搞清楚应用场景：什么时候该用工厂模式？相对于直接 new 来创建对象，用工厂模式来创建究竟有什么好处呢？","head":[["meta",{"property":"og:url","content":"https://theme-zhang.netlify.app/zh/basics/design-patterns/creational-patterns/factory-method.html"}],["meta",{"property":"og:site_name","content":"zhang"}],["meta",{"property":"og:title","content":"工厂方法"}],["meta",{"property":"og:description","content":"工厂方法 一般情况下，工厂模式分为三种更加细分的类型：简单工厂、工厂方法和抽象工厂。不过，在 GoF 的《设计模式》一书中，它将简单工厂模式看作是工厂方法模式的一种特例，所以工厂模式只被分成了工厂方法和抽象工厂两类。实际上，前面一种分类方法更加常见，所以，在今天的讲解中，我们沿用第一种分类方法。 在这三种细分的工厂模式中，简单工厂、工厂方法原理比较简单，在实际的项目中也比较常用。而抽象工厂的原理稍微复杂点，在实际的项目中相对也不常用。所以，我们今天讲解的重点是前两种工厂模式。对于抽象工厂，稍微了解一下即可。 除此之外，重点也不是原理和实现，因为这些都很简单，重点还是搞清楚应用场景：什么时候该用工厂模式？相对于直接 new 来创建对象，用工厂模式来创建究竟有什么好处呢？"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-09T06:04:07.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"article:modified_time","content":"2022-12-09T06:04:07.000Z"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://theme-zhang.netlify.app/en/basics/design-patterns/creational-patterns/factory-method.html"}]]},"headers":[{"level":2,"title":"简单工厂（静态工厂）","slug":"简单工厂-静态工厂","link":"#简单工厂-静态工厂","children":[]},{"level":2,"title":"工厂方法","slug":"工厂方法-1","link":"#工厂方法-1","children":[]},{"level":2,"title":"抽象工厂（Abstract Factory）","slug":"抽象工厂-abstract-factory","link":"#抽象工厂-abstract-factory","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"思考题","slug":"思考题","link":"#思考题","children":[]}],"git":{"createdTime":1670565847000,"updatedTime":1670565847000,"contributors":[{"name":"zhanglf","email":"454486214@qq.com","commits":1}]},"readingTime":{"minutes":14.11,"words":4232},"filePathRelative":"zh/basics/design-patterns/creational-patterns/factory-method.md","localizedDate":"2022年12月9日","excerpt":"<h1> 工厂方法</h1>\\n<p>一般情况下，工厂模式分为三种更加细分的类型：简单工厂、工厂方法和抽象工厂。不过，在 GoF 的《设计模式》一书中，它将简单工厂模式看作是工厂方法模式的一种特例，所以工厂模式只被分成了工厂方法和抽象工厂两类。实际上，前面一种分类方法更加常见，所以，在今天的讲解中，我们沿用第一种分类方法。</p>\\n<p>在这三种细分的工厂模式中，简单工厂、工厂方法原理比较简单，在实际的项目中也比较常用。而抽象工厂的原理稍微复杂点，在实际的项目中相对也不常用。所以，我们今天讲解的重点是前两种工厂模式。对于抽象工厂，稍微了解一下即可。</p>\\n<p>除此之外，重点也不是原理和实现，因为这些都很简单，重点还是搞清楚应用场景：什么时候该用工厂模式？相对于直接 new 来创建对象，用工厂模式来创建究竟有什么好处呢？</p>","autoDesc":true}');export{t as data};
