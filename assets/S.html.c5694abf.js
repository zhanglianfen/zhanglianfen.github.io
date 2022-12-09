import{_ as n,V as s,W as a,a1 as p}from"./framework.02eddb67.js";const t={},e=p(`<h1 id="单一职责原则" tabindex="-1"><a class="header-anchor" href="#单一职责原则" aria-hidden="true">#</a> 单一职责原则</h1><h2 id="如何理解单一职责原则-srp" tabindex="-1"><a class="header-anchor" href="#如何理解单一职责原则-srp" aria-hidden="true">#</a> 如何理解单一职责原则（SRP）？</h2><p>文章的开头我们提到了 SOLID 原则，实际上，SOLID 原则并非单纯的 1 个原则，而是由 5 个设计原则组成的，它们分别是：单一职责原则、开闭原则、里式替换原则、接口隔离原则和依赖反转原则，依次对应 SOLID 中的 S、O、L、I、D 这 5 个英文字母。我们今天要学习的是 SOLID 原则中的第一个原则：单一职责原则。</p><p>单一职责原则的英文是 Single Responsibility Principle，缩写为 SRP。这个原则的英文描述是这样的：A class or module should have a single reponsibility。如果我们把它翻译成中文，那就是：一个类或者模块只负责完成一个职责（或者功能）。</p><p>注意，这个原则描述的对象包含两个，一个是类（class），一个是模块（module）。关于这两个概念，在专栏中，有两种理解方式。一种理解是：把模块看作比类更加抽象的概念，类也可以看作模块。另一种理解是：把模块看作比类更加粗粒度的代码块，模块中包含多个类，多个类组成一个模块。</p><p>不管哪种理解方式，单一职责原则在应用到这两个描述对象的时候，道理都是相通的。为了方便你理解，接下来我只从“类”设计的角度，来讲解如何应用这个设计原则。对于“模块”来说，你可以自行引申。</p><p>单一职责原则的定义描述非常简单，也不难理解。一个类只负责完成一个职责或者功能。也就是说，不要设计大而全的类，要设计粒度小、功能单一的类。换个角度来讲就是，一个类包含了两个或者两个以上业务不相干的功能，那我们就说它职责不够单一，应该将它拆分成多个功能更加单一、粒度更细的类。</p><p>我举一个例子来解释一下。比如，一个类里既包含订单的一些操作，又包含用户的一些操作。而订单和用户是两个独立的业务领域模型，我们将两个不相干的功能放到同一个类中，那就违反了单一职责原则。为了满足单一职责原则，我们需要将这个类拆分成两个粒度更细、功能更加单一的两个类：订单类和用户类。</p><h2 id="如何判断类的职责是否足够单一" tabindex="-1"><a class="header-anchor" href="#如何判断类的职责是否足够单一" aria-hidden="true">#</a> 如何判断类的职责是否足够单一？</h2><p>从刚刚这个例子来看，单一职责原则看似不难应用。那是因为我举的这个例子比较极端，一眼就能看出订单和用户毫不相干。但大部分情况下，类里的方法是归为同一类功能，还是归为不相关的两类功能，并不是那么容易判定的。在真实的软件开发中，对于一个类是否职责单一的判定，是很难拿捏的。我举一个更加贴近实际的例子来给你解释一下。</p><p>在一个社交产品中，我们用下面的 UserInfo 类来记录用户的信息。你觉得，UserInfo 类的设计是否满足单一职责原则呢？</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserInfo</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token keyword">long</span> userId<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> username<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> email<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> telephone<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token keyword">long</span> createTime<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token keyword">long</span> lastLoginTime<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> avatarUrl<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> provinceOfAddress<span class="token punctuation">;</span> <span class="token comment">// 省</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> cityOfAddress<span class="token punctuation">;</span> <span class="token comment">// 市</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> regionOfAddress<span class="token punctuation">;</span> <span class="token comment">// 区 </span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> detailedAddress<span class="token punctuation">;</span> <span class="token comment">// 详细地址</span>
  <span class="token comment">// ... 省略其他属性和方法...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于这个问题，有两种不同的观点。一种观点是，UserInfo 类包含的都是跟用户相关的信息，所有的属性和方法都隶属于用户这样一个业务模型，满足单一职责原则；另一种观点是，地址信息在 UserInfo 类中，所占的比重比较高，可以继续拆分成独立的 UserAddress 类，UserInfo 只保留除 Address 之外的其他信息，拆分之后的两个类的职责更加单一。</p><p>哪种观点更对呢？实际上，要从中做出选择，我们不能脱离具体的应用场景。如果在这个社交产品中，用户的地址信息跟其他信息一样，只是单纯地用来展示，那 UserInfo 现在的设计就是合理的。但是，如果这个社交产品发展得比较好，之后又在产品中添加了电商的模块，用户的地址信息还会用在电商物流中，那我们最好将地址信息从 UserInfo 中拆分出来，独立成用户物流信息（或者叫地址信息、收货信息等）。</p><p>我们再进一步延伸一下。如果做这个社交产品的公司发展得越来越好，公司内部又开发出了跟多其他产品（可以理解为其他 App）。公司希望支持统一账号系统，也就是用户一个账号可以在公司内部的所有产品中登录。这个时候，我们就需要继续对 UserInfo 进行拆分，将跟身份认证相关的信息（比如，email、telephone 等）抽取成独立的类。</p><p>从刚刚这个例子，我们可以总结出，不同的应用场景、不同阶段的需求背景下，对同一个类的职责是否单一的判定，可能都是不一样的。在某种应用场景或者当下的需求背景下，一个类的设计可能已经满足单一职责原则了，但如果换个应用场景或着在未来的某个需求背景下，可能就不满足了，需要继续拆分成粒度更细的类。</p><p>除此之外，从不同的业务层面去看待同一个类的设计，对类是否职责单一，也会有不同的认识。比如，例子中的 UserInfo 类。如果我们从“用户”这个业务层面来看，UserInfo 包含的信息都属于用户，满足职责单一原则。如果我们从更加细分的“用户展示信息”“地址信息”“登录认证信息”等等这些更细粒度的业务层面来看，那 UserInfo 就应该继续拆分。</p><p>综上所述，评价一个类的职责是否足够单一，我们并没有一个非常明确的、可以量化的标准，可以说，这是件非常主观、仁者见仁智者见智的事情。实际上，在真正的软件开发中，我们也没必要过于未雨绸缪，过度设计。所以，<strong>我们可以先写一个粗粒度的类，满足业务需求。随着业务的发展，如果粗粒度的类越来越庞大，代码越来越多，这个时候，我们就可以将这个粗粒度的类，拆分成几个更细粒度的类。这就是所谓的持续重构</strong>（后面的章节中我们会讲到）。</p><p>听到这里，你可能会说，这个原则如此含糊不清、模棱两可，到底该如何拿捏才好啊？我这里还有一些小技巧，能够很好地帮你，从侧面上判定一个类的职责是否够单一。而且，我个人觉得，下面这几条判断原则，比起很主观地去思考类是否职责单一，要更有指导意义、更具有可执行性：</p><ul><li><p>类中的代码行数、函数或属性过多，会影响代码的可读性和可维护性，我们就需要考虑对类进行拆分；</p></li><li><p>类依赖的其他类过多，或者依赖类的其他类过多，不符合高内聚、低耦合的设计思想，我们就需要考虑对类进行拆分；</p></li><li><p>私有方法过多，我们就要考虑能否将私有方法独立到新的类中，设置为 public 方法，供更多的类使用，从而提高代码的复用性；</p></li><li><p>比较难给类起一个合适名字，很难用一个业务名词概括，或者只能用一些笼统的 Manager、Context 之类的词语来命名，这就说明类的职责定义得可能不够清晰；</p></li><li><p>类中大量的方法都是集中操作类中的某几个属性，比如，在 UserInfo 例子中，如果一半的方法都是在操作 address 信息，那就可以考虑将这几个属性和对应的方法拆分出来。</p></li></ul><p>不过，你可能还会有这样的疑问：在上面的判定原则中，我提到类中的代码行数、函数或者属性过多，就有可能不满足单一职责原则。那多少行代码才算是行数过多呢？多少个函数、属性才称得上过多呢？</p><p>比较初级的工程师经常会问这类问题。实际上，这个问题并不好定量地回答，就像你问大厨“放盐少许”中的“少许”是多少，大厨也很难告诉你一个特别具体的量值。</p><p>如果继续深究一下的话，你可能还会说，一些菜谱确实给出了，做某某菜需要放多少克盐，放多少克油的具体量值啊。我想说的是，那是给家庭主妇用的，那不是给专业的大厨看的。类比一下做饭，如果你是没有太多项目经验的编程初学者，实际上，我也可以给你一个凑活能用、比较宽泛的、可量化的标准，那就是一个类的代码行数最好不能超过 200 行，函数个数及属性个数都最好不要超过 10 个。</p><p>实际上， 从另一个角度来看，当一个类的代码，读起来让你头大了，实现某个功能时不知道该用哪个函数了，想用哪个函数翻半天都找不到了，只用到一个小功能要引入整个类（类中包含很多无关此功能实现的函数）的时候，这就说明类的行数、函数、属性过多了。实际上，等你做多项目了，代码写多了，在开发中慢慢“品尝”，自然就知道什么是“放盐少许”了，这就是所谓的“专业第六感”。</p><h2 id="类的职责是否设计得越单一越好" tabindex="-1"><a class="header-anchor" href="#类的职责是否设计得越单一越好" aria-hidden="true">#</a> 类的职责是否设计得越单一越好？</h2><p>为了满足单一职责原则，是不是把类拆得越细就越好呢？答案是否定的。我们还是通过一个例子来解释一下。Serialization 类实现了一个简单协议的序列化和反序列功能，具体代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * Protocol format: identifier-string;<span class="token punctuation">{</span>gson string<span class="token punctuation">}</span>
 * For example: UEUEUE;<span class="token punctuation">{</span>&quot;a&quot;:&quot;A&quot;,&quot;b&quot;:&quot;B&quot;<span class="token punctuation">}</span>
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Serialization</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">IDENTIFIER_STRING</span> <span class="token operator">=</span> <span class="token string">&quot;UEUEUE;&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">Gson</span> gson<span class="token punctuation">;</span>
  
  <span class="token keyword">public</span> <span class="token class-name">Serialization</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>gson <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Gson</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">serialize</span><span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> object<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">StringBuilder</span> textBuilder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    textBuilder<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token constant">IDENTIFIER_STRING</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    textBuilder<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>gson<span class="token punctuation">.</span><span class="token function">toJson</span><span class="token punctuation">(</span>object<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> textBuilder<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token keyword">public</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token function">deserialize</span><span class="token punctuation">(</span><span class="token class-name">String</span> text<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>text<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token constant">IDENTIFIER_STRING</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">emptyMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">String</span> gsonStr <span class="token operator">=</span> text<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token constant">IDENTIFIER_STRING</span><span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> gson<span class="token punctuation">.</span><span class="token function">fromJson</span><span class="token punctuation">(</span>gsonStr<span class="token punctuation">,</span> <span class="token class-name">Map</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们想让类的职责更加单一，我们对 Serialization 类进一步拆分，拆分成一个只负责序列化工作的 Serializer 类和另一个只负责反序列化工作的 Deserializer 类。拆分后的具体代码如下所示：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Serializer</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">IDENTIFIER_STRING</span> <span class="token operator">=</span> <span class="token string">&quot;UEUEUE;&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">Gson</span> gson<span class="token punctuation">;</span>
  
  <span class="token keyword">public</span> <span class="token class-name">Serializer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>gson <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Gson</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">serialize</span><span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> object<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">StringBuilder</span> textBuilder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    textBuilder<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token constant">IDENTIFIER_STRING</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    textBuilder<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>gson<span class="token punctuation">.</span><span class="token function">toJson</span><span class="token punctuation">(</span>object<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> textBuilder<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Deserializer</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">IDENTIFIER_STRING</span> <span class="token operator">=</span> <span class="token string">&quot;UEUEUE;&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">Gson</span> gson<span class="token punctuation">;</span>
  
  <span class="token keyword">public</span> <span class="token class-name">Deserializer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>gson <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Gson</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token keyword">public</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token function">deserialize</span><span class="token punctuation">(</span><span class="token class-name">String</span> text<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>text<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token constant">IDENTIFIER_STRING</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">emptyMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">String</span> gsonStr <span class="token operator">=</span> text<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token constant">IDENTIFIER_STRING</span><span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> gson<span class="token punctuation">.</span><span class="token function">fromJson</span><span class="token punctuation">(</span>gsonStr<span class="token punctuation">,</span> <span class="token class-name">Map</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>虽然经过拆分之后，Serializer 类和 Deserializer 类的职责更加单一了，但也随之带来了新的问题。如果我们修改了协议的格式，数据标识从“UEUEUE”改为“DFDFDF”，或者序列化方式从 JSON 改为了 XML，那 Serializer 类和 Deserializer 类都需要做相应的修改，代码的内聚性显然没有原来 Serialization 高了。而且，如果我们仅仅对 Serializer 类做了协议修改，而忘记了修改 Deserializer 类的代码，那就会导致序列化、反序列化不匹配，程序运行出错，也就是说，拆分之后，代码的可维护性变差了。</p><p>实际上，不管是应用设计原则还是设计模式，最终的目的还是提高代码的可读性、可扩展性、复用性、可维护性等。我们在考虑应用某一个设计原则是否合理的时候，也可以以此作为最终的考量标准。</p><h2 id="重点回顾" tabindex="-1"><a class="header-anchor" href="#重点回顾" aria-hidden="true">#</a> 重点回顾</h2><p><strong>1. 如何理解单一职责原则（SRP）？</strong></p><p>一个类只负责完成一个职责或者功能。不要设计大而全的类，要设计粒度小、功能单一的类。单一职责原则是为了实现代码高内聚、低耦合，提高代码的复用性、可读性、可维护性。</p><p><strong>2. 如何判断类的职责是否足够单一？</strong></p><p>不同的应用场景、不同阶段的需求背景、不同的业务层面，对同一个类的职责是否单一，可能会有不同的判定结果。实际上，一些侧面的判断指标更具有指导意义和可执行性，比如，出现下面这些情况就有可能说明这类的设计不满足单一职责原则：</p><p>类中的代码行数、函数或者属性过多；</p><p>类依赖的其他类过多，或者依赖类的其他类过多；</p><p>私有方法过多；</p><p>比较难给类起一个合适的名字；</p><p>类中大量的方法都是集中操作类中的某几个属性。</p><p><strong>3. 类的职责是否设计得越单一越好？</strong></p><p>单一职责原则通过避免设计大而全的类，避免将不相关的功能耦合在一起，来提高类的内聚性。同时，类职责单一，类依赖的和被依赖的其他类也会变少，减少了代码的耦合性，以此来实现代码的高内聚、低耦合。但是，如果拆分得过细，实际上会适得其反，反倒会降低内聚性，也会影响代码的可维护性。</p><h2 id="课堂讨论" tabindex="-1"><a class="header-anchor" href="#课堂讨论" aria-hidden="true">#</a> 课堂讨论</h2><p>对于如何判断一个类是否职责单一，如何判断代码行数过多，你还有哪些其他的方法吗？</p><blockquote><p>方法就是全凭感觉。感觉不爽，就尝试着是否可以拆分多个类，感觉来了谁也挡不住。没有硬性要求吧，都是凭借经验。比如用户service可能包含用户的登录注册修改密码忘记密码等等，这些操作都需要验证邮箱，这时候你会发现这个类就很乱，就可以把他一分为二，弄个UserService再弄个UserEmailService专门处理用户相关邮件的操作逻辑，让UserService依赖Email的，等等这种，我觉得真的是全凭经验。换句话说，屎一样的代码写多了，写到自己看着都想吐的时候，经验就积累了。</p></blockquote><p>单一职责原则，除了应用到类的设计上，还能延伸到哪些其他设计方面吗？</p><blockquote><p>方法设计上也用到了，比如自上而下的编程方式，先把核心方法定义好在去写具体细节，不要上来就把所有的细节都写到一个大而全的方法里。自上而下的编程方式他不香吗？</p></blockquote>`,48),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","S.html.vue"]]);export{k as default};
