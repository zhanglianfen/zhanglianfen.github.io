import{_ as p,V as t,W as c,X as n,Y as s,Z as o,a1 as a,y as l}from"./framework.02eddb67.js";const i={},u=a(`<h1 id="为什么基于接口而非实现编程-有必要为每个类都定义接口吗" tabindex="-1"><a class="header-anchor" href="#为什么基于接口而非实现编程-有必要为每个类都定义接口吗" aria-hidden="true">#</a> 为什么基于接口而非实现编程？有必要为每个类都定义接口吗？</h1><p>在上一节课中，我们讲了接口和抽象类，以及各种编程语言是如何支持、实现这两个语法概念的。今天，我们继续讲一个跟“接口”相关的知识点：基于接口而非实现编程。这个原则非常重要，是一种非常有效的提高代码质量的手段，在平时的开发中特别经常被用到。</p><p>为了让你理解透彻，并真正掌握这条原则如何应用，今天，我会结合一个有关图片存储的实战案例来讲解。除此之外，这条原则还很容易被过度应用，比如为每一个实现类都定义对应的接口。针对这类问题，在今天的讲解中，我也会告诉你如何来做权衡，怎样恰到好处地应用这条原则。</p><h2 id="如何解读原则中的-接口-二字" tabindex="-1"><a class="header-anchor" href="#如何解读原则中的-接口-二字" aria-hidden="true">#</a> 如何解读原则中的“接口”二字？</h2><p>“基于接口而非实现编程”这条原则的英文描述是：“Program to an interface, not an implementation”。我们理解这条原则的时候，千万不要一开始就与具体的编程语言挂钩，局限在编程语言的“接口”语法中（比如 Java 中的 interface 接口语法）。这条原则最早出现于 1994 年 GoF 的《设计模式》这本书，它先于很多编程语言而诞生（比如 Java 语言），是一条比较抽象、泛化的设计思想。</p><p>实际上，理解这条原则的关键，就是理解其中的“接口”两个字。还记得我们上一节课讲的“接口”的定义吗？从本质上来看，“接口”就是一组“协议”或者“约定”，是功能提供者提供给使用者的一个“功能列表”。“接口”在不同的应用场景下会有不同的解读，比如服务端与客户端之间的“接口”，类库提供的“接口”，甚至是一组通信的协议都可以叫作“接口”。刚刚对“接口”的理解，都比较偏上层、偏抽象，与实际的写代码离得有点远。如果落实到具体的编码，“基于接口而非实现编程”这条原则中的“接口”，可以理解为编程语言中的接口或者抽象类。</p><p>前面我们提到，这条原则能非常有效地提高代码质量，之所以这么说，那是因为，应用这条原则，可以将接口和实现相分离，封装不稳定的实现，暴露稳定的接口。上游系统面向接口而非实现编程，不依赖不稳定的实现细节，这样当实现发生变化的时候，上游系统的代码基本上不需要做改动，以此来降低耦合性，提高扩展性。</p><p>实际上，“基于接口而非实现编程”这条原则的另一个表述方式，是“基于抽象而非实现编程”。后者的表述方式其实更能体现这条原则的设计初衷。在软件开发中，最大的挑战之一就是需求的不断变化，这也是考验代码设计好坏的一个标准。**越抽象、越顶层、越脱离具体某一实现的设计，越能提高代码的灵活性，越能应对未来的需求变化。好的代码设计，不仅能应对当下的需求，而且在将来需求发生变化的时候，仍然能够在不破坏原有代码设计的情况下灵活应对。**而抽象就是提高代码扩展性、灵活性、可维护性最有效的手段之一。</p><h2 id="如何将这条原则应用到实战中" tabindex="-1"><a class="header-anchor" href="#如何将这条原则应用到实战中" aria-hidden="true">#</a> 如何将这条原则应用到实战中？</h2><p>对于这条原则，我们结合一个具体的实战案例来进一步讲解一下。</p><p>假设我们的系统中有很多涉及图片处理和存储的业务逻辑。图片经过处理之后被上传到阿里云上。为了代码复用，我们封装了图片存储相关的代码逻辑，提供了一个统一的 AliyunImageStore 类，供整个系统来使用。具体的代码实现如下所示：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AliyunImageStore</span> <span class="token punctuation">{</span>
  <span class="token comment">//... 省略属性、构造函数等...</span>
  
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">createBucketIfNotExisting</span><span class="token punctuation">(</span><span class="token class-name">String</span> bucketName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ... 创建 bucket 代码逻辑...</span>
    <span class="token comment">// ... 失败会抛出异常..</span>
  <span class="token punctuation">}</span>
  
  <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">generateAccessToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ... 根据 accesskey/secrectkey 等生成 access token</span>
  <span class="token punctuation">}</span>
  
  <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">uploadToAliyun</span><span class="token punctuation">(</span><span class="token class-name">Image</span> image<span class="token punctuation">,</span> <span class="token class-name">String</span> bucketName<span class="token punctuation">,</span> <span class="token class-name">String</span> accessToken<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//... 上传图片到阿里云...</span>
    <span class="token comment">//... 返回图片存储在阿里云上的地址 (url）...</span>
  <span class="token punctuation">}</span>
  
  <span class="token keyword">public</span> <span class="token class-name">Image</span> <span class="token function">downloadFromAliyun</span><span class="token punctuation">(</span><span class="token class-name">String</span> url<span class="token punctuation">,</span> <span class="token class-name">String</span> accessToken<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//... 从阿里云下载图片...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// AliyunImageStore 类的使用举例</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ImageProcessingJob</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">BUCKET_NAME</span> <span class="token operator">=</span> <span class="token string">&quot;ai_images_bucket&quot;</span><span class="token punctuation">;</span>
  <span class="token comment">//... 省略其他无关代码...</span>
  
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Image</span> image <span class="token operator">=</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span> <span class="token comment">// 处理图片，并封装为 Image 对象</span>
    <span class="token class-name">AliyunImageStore</span> imageStore <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AliyunImageStore</span><span class="token punctuation">(</span><span class="token comment">/* 省略参数 */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    imageStore<span class="token punctuation">.</span><span class="token function">createBucketIfNotExisting</span><span class="token punctuation">(</span><span class="token constant">BUCKET_NAME</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> accessToken <span class="token operator">=</span> imageStore<span class="token punctuation">.</span><span class="token function">generateAccessToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    imagestore<span class="token punctuation">.</span><span class="token function">uploadToAliyun</span><span class="token punctuation">(</span>image<span class="token punctuation">,</span> <span class="token constant">BUCKET_NAME</span><span class="token punctuation">,</span> accessToken<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>整个上传流程包含三个步骤：创建 bucket（你可以简单理解为存储目录）、生成 access token 访问凭证、携带 access token 上传图片到指定的 bucket 中。代码实现非常简单，类中的几个方法定义得都很干净，用起来也很清晰，乍看起来没有太大问题，完全能满足我们将图片存储在阿里云的业务需求。</p><p>不过，软件开发中唯一不变的就是变化。过了一段时间后，我们自建了私有云，不再将图片存储到阿里云了，而是将图片存储到自建私有云上。为了满足这样一个需求的变化，我们该如何修改代码呢？</p><p>我们需要重新设计实现一个存储图片到私有云的 PrivateImageStore 类，并用它替换掉项目中所有的 AliyunImageStore 类对象。这样的修改听起来并不复杂，只是简单替换而已，对整个代码的改动并不大。不过，我们经常说，“细节是魔鬼”。这句话在软件开发中特别适用。实际上，刚刚的设计实现方式，就隐藏了很多容易出问题的“魔鬼细节”，我们一块来看看都有哪些。</p><p>新的 PrivateImageStore 类需要设计实现哪些方法，才能在尽量最小化代码修改的情况下，替换掉 AliyunImageStore 类呢？这就要求我们必须将 AliyunImageStore 类中所定义的所有 public 方法，在 PrivateImageStore 类中都逐一定义并重新实现一遍。而这样做就会存在一些问题，我总结了下面两点。</p><p>首先，AliyunImageStore 类中有些函数命名暴露了实现细节，比如，uploadToAliyun() 和 downloadFromAliyun()。如果开发这个功能的同事没有接口意识、抽象思维，那这种暴露实现细节的命名方式就不足为奇了，毕竟最初我们只考虑将图片存储在阿里云上。而我们把这种包含“aliyun”字眼的方法，照抄到 PrivateImageStore 类中，显然是不合适的。如果我们在新类中重新命名 uploadToAliyun()、downloadFromAliyun() 这些方法，那就意味着，我们要修改项目中所有使用到这两个方法的代码，代码修改量可能就会很大。</p><p>其次，将图片存储到阿里云的流程，跟存储到私有云的流程，可能并不是完全一致的。比如，阿里云的图片上传和下载的过程中，需要生产 access token，而私有云不需要 access token。一方面，AliyunImageStore 中定义的 generateAccessToken() 方法不能照抄到 PrivateImageStore 中；另一方面，我们在使用 AliyunImageStore 上传、下载图片的时候，代码中用到了 generateAccessToken() 方法，如果要改为私有云的上传下载流程，这些代码都需要做调整。</p><p>那这两个问题该如何解决呢？解决这个问题的根本方法就是，在编写代码的时候，要遵从“基于接口而非实现编程”的原则，具体来讲，我们需要做到下面这 3 点。</p><ol><li><p>函数的命名不能暴露任何实现细节。比如，前面提到的 uploadToAliyun() 就不符合要求，应该改为去掉 aliyun 这样的字眼，改为更加抽象的命名方式，比如：upload()。</p></li><li><p>封装具体的实现细节。比如，跟阿里云相关的特殊上传（或下载）流程不应该暴露给调用者。我们对上传（或下载）流程进行封装，对外提供一个包裹所有上传（或下载）细节的方法，给调用者使用。</p></li><li><p>为实现类定义抽象的接口。具体的实现类都依赖统一的接口定义，遵从一致的上传功能协议。使用者依赖接口，而不是具体的实现类来编程。</p></li></ol><p>我们按照这个思路，把代码重构一下。重构后的代码如下所示：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">ImageStore</span> <span class="token punctuation">{</span>
  <span class="token class-name">String</span> <span class="token function">upload</span><span class="token punctuation">(</span><span class="token class-name">Image</span> image<span class="token punctuation">,</span> <span class="token class-name">String</span> bucketName<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">Image</span> <span class="token function">download</span><span class="token punctuation">(</span><span class="token class-name">String</span> url<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AliyunImageStore</span> <span class="token keyword">implements</span> <span class="token class-name">ImageStore</span> <span class="token punctuation">{</span>
  <span class="token comment">//... 省略属性、构造函数等...</span>
    
  <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">upload</span><span class="token punctuation">(</span><span class="token class-name">Image</span> image<span class="token punctuation">,</span> <span class="token class-name">String</span> bucketName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">createBucketIfNotExisting</span><span class="token punctuation">(</span>bucketName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> accessToken <span class="token operator">=</span> <span class="token function">generateAccessToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//... 上传图片到阿里云...</span>
    <span class="token comment">//... 返回图片在阿里云上的地址 (url)...</span>
  <span class="token punctuation">}</span>
    
  <span class="token keyword">public</span> <span class="token class-name">Image</span> <span class="token function">download</span><span class="token punctuation">(</span><span class="token class-name">String</span> url<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> accessToken <span class="token operator">=</span> <span class="token function">generateAccessToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//... 从阿里云下载图片...</span>
  <span class="token punctuation">}</span>
    
  <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">createBucketIfNotExisting</span><span class="token punctuation">(</span><span class="token class-name">String</span> bucketName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ... 创建 bucket...</span>
    <span class="token comment">// ... 失败会抛出异常..</span>
  <span class="token punctuation">}</span>
    
  <span class="token keyword">private</span> <span class="token class-name">String</span> <span class="token function">generateAccessToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ... 根据 accesskey/secrectkey 等生成 access token</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 上传下载流程改变：私有云不需要支持 access token</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PrivateImageStore</span> <span class="token keyword">implements</span> <span class="token class-name">ImageStore</span>  <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">upload</span><span class="token punctuation">(</span><span class="token class-name">Image</span> image<span class="token punctuation">,</span> <span class="token class-name">String</span> bucketName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">createBucketIfNotExisting</span><span class="token punctuation">(</span>bucketName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//... 上传图片到私有云...</span>
    <span class="token comment">//... 返回图片的 url...</span>
  <span class="token punctuation">}</span>
    
  <span class="token keyword">public</span> <span class="token class-name">Image</span> <span class="token function">download</span><span class="token punctuation">(</span><span class="token class-name">String</span> url<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//... 从私有云下载图片...</span>
  <span class="token punctuation">}</span>
    
  <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">createBucketIfNotExisting</span><span class="token punctuation">(</span><span class="token class-name">String</span> bucketName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ... 创建 bucket...</span>
    <span class="token comment">// ... 失败会抛出异常..</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// ImageStore 的使用举例</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ImageProcessingJob</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">BUCKET_NAME</span> <span class="token operator">=</span> <span class="token string">&quot;ai_images_bucket&quot;</span><span class="token punctuation">;</span>
  <span class="token comment">//... 省略其他无关代码...</span>
  
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Image</span> image <span class="token operator">=</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span><span class="token comment">// 处理图片，并封装为 Image 对象</span>
    <span class="token class-name">ImageStore</span> imageStore <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PrivateImageStore</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    imagestore<span class="token punctuation">.</span><span class="token function">upload</span><span class="token punctuation">(</span>image<span class="token punctuation">,</span> <span class="token constant">BUCKET_NAME</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除此之外，很多人在定义接口的时候，希望通过实现类来反推接口的定义。先把实现类写好，然后看实现类中有哪些方法，照抄到接口定义中。如果按照这种思考方式，就有可能导致接口定义不够抽象，依赖具体的实现。这样的接口设计就没有意义了。不过，如果你觉得这种思考方式更加顺畅，那也没问题，只是将实现类的方法搬移到接口定义中的时候，要有选择性的搬移，不要将跟具体实现相关的方法搬移到接口中，比如 AliyunImageStore 中的 generateAccessToken() 方法。</p><p>总结一下，我们在做软件开发的时候，一定要有抽象意识、封装意识、接口意识。在定义接口的时候，不要暴露任何实现细节。接口的定义只表明做什么，而不是怎么做。而且，在设计接口的时候，我们要多思考一下，这样的接口设计是否足够通用，是否能够做到在替换具体的接口实现的时候，不需要任何接口定义的改动。</p><h2 id="是否需要为每个类定义接口" tabindex="-1"><a class="header-anchor" href="#是否需要为每个类定义接口" aria-hidden="true">#</a> 是否需要为每个类定义接口？</h2><p>看了刚刚的讲解，你可能会有这样的疑问：为了满足这条原则，我是不是需要给每个实现类都定义对应的接口呢？在开发的时候，是不是任何代码都要只依赖接口，完全不依赖实现编程呢？</p><p>做任何事情都要讲求一个“度”，过度使用这条原则，非得给每个类都定义接口，接口满天飞，也会导致不必要的开发负担。至于什么时候，该为某个类定义接口，实现基于接口的编程，什么时候不需要定义接口，直接使用实现类编程，我们做权衡的根本依据，还是要回归到设计原则诞生的初衷上来。只要搞清楚了这条原则是为了解决什么样的问题而产生的，你就会发现，很多之前模棱两可的问题，都会变得豁然开朗。</p><p>前面我们也提到，这条原则的设计初衷是，将接口和实现相分离，封装不稳定的实现，暴露稳定的接口。上游系统面向接口而非实现编程，不依赖不稳定的实现细节，这样当实现发生变化的时候，上游系统的代码基本上不需要做改动，以此来降低代码间的耦合性，提高代码的扩展性。</p><p>从这个设计初衷上来看，如果在我们的业务场景中，某个功能只有一种实现方式，未来也不可能被其他实现方式替换，那我们就没有必要为其设计接口，也没有必要基于接口编程，直接使用实现类就可以了。</p><p>除此之外，越是不稳定的系统，我们越是要在代码的扩展性、维护性上下功夫。相反，如果某个系统特别稳定，在开发完之后，基本上不需要做维护，那我们就没有必要为其扩展性，投入不必要的开发时间。</p><h2 id="重点回顾" tabindex="-1"><a class="header-anchor" href="#重点回顾" aria-hidden="true">#</a> 重点回顾</h2><ol><li><p>“基于接口而非实现编程”，这条原则的另一个表述方式，是“基于抽象而非实现编程”。后者的表述方式其实更能体现这条原则的设计初衷。我们在做软件开发的时候，一定要有抽象意识、封装意识、接口意识。越抽象、越顶层、越脱离具体某一实现的设计，越能提高代码的灵活性、扩展性、可维护性。</p></li><li><p>我们在定义接口的时候，一方面，命名要足够通用，不能包含跟具体实现相关的字眼；另一方面，与特定实现有关的方法不要定义在接口中。</p></li><li><p>“基于接口而非实现编程”这条原则，不仅仅可以指导非常细节的编程开发，还能指导更加上层的架构设计、系统设计等。比如，服务端与客户端之间的“接口”设计、类库的“接口”设计。</p></li></ol><h2 id="课堂讨论" tabindex="-1"><a class="header-anchor" href="#课堂讨论" aria-hidden="true">#</a> 课堂讨论</h2><p>在今天举的代码例子中，尽管我们通过接口来隔离了两个具体的实现。但是，在项目中很多地方，我们都是通过下面第 8 行的方式来使用接口的。这就会产生一个问题，那就是，如果我们要替换图片存储方式，还是需要修改很多类似第 8 行那样的代码。这样的设计还是不够完美，对此，你有更好的实现思路吗？</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// ImageStore 的使用举例</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ImageProcessingJob</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">BUCKET_NAME</span> <span class="token operator">=</span> <span class="token string">&quot;ai_images_bucket&quot;</span><span class="token punctuation">;</span>
  <span class="token comment">//... 省略其他无关代码...</span>
  
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Image</span> image <span class="token operator">=</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span><span class="token comment">// 处理图片，并封装为 Image 对象</span>
    <span class="token class-name">ImageStore</span> imageStore <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PrivateImageStore</span><span class="token punctuation">(</span><span class="token comment">/* 省略构造函数 */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    imagestore<span class="token punctuation">.</span><span class="token function">upload</span><span class="token punctuation">(</span>image<span class="token punctuation">,</span> <span class="token constant">BUCKET_NAME</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35),k=a("<p>关于思考题我想出两种方法改进：简单工厂方法和使用反射。</p><p>1、简单工厂方法</p><p>ImageStore imageStore = ImageStoreFactory.newInstance(SOTRE_TYPE_CONFIG);</p><p>config文件可以写类似properties的文件，使用key-value存储。</p><p>缺点：再新增另一种存储手段时，需要修改工厂类和添加新的类。修改工厂类，违反了开放-封闭原则。</p><p>那有没有更好一点的方法呢？</p><p>2、使用反射。</p><p>在配置文件中定义需要的image store类型。</p><p>在ProcessJob中</p><p>ImageStore store = (ImageStore) Class.forName(STORE_CLASS).newInstance();</p><p>缺点：使用反射，在大量创建对象时会有性能损失。</p>",11),r={href:"https://github.com/gdhucoder/Algorithms4/tree/master/geekbang/designpattern/u009",target:"_blank",rel:"noopener noreferrer"},d=n("p",null,"补充：关于access token：Aliyun的AccessToken时有expireTime时限的。不需要每次重新获取，过期时重新获取即可。",-1);function m(v,b){const e=l("ExternalLinkIcon");return t(),c("div",null,[u,n("blockquote",null,[k,n("p",null,[s("关于减少ProcessJob中的修改，还有没有更好的方法呢？我只是抛砖引玉，希望和大家一起讨论。具体实现："),n("a",r,[s("https://github.com/gdhucoder/Algorithms4/tree/master/geekbang/designpattern/u009"),o(e)])]),d])])}const y=p(i,[["render",m],["__file","基于接口而非基于实现编程.html.vue"]]);export{y as default};
