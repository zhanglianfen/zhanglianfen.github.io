import{_ as i,V as t,W as n,X as e,Y as r,Z as o,a1 as a,D as s}from"./framework-6f747a7a.js";const h={},d=a('<h1 id="积分系统" tabindex="-1"><a class="header-anchor" href="#积分系统" aria-hidden="true">#</a> 积分系统</h1><p>对于一个工程师来说，如果要追求长远发展，你就不能一直只把自己放在执行者的角色，不能只是一个代码实现者，你还要有独立负责一个系统的能力，能端到端（end to end）开发一个完整的系统。这其中的工作就包括：前期的需求沟通分析、中期的代码设计实现、后期的系统上线维护等。</p><p>前面我们还提到过，大部分工程师都是做业务开发的。很多工程师都觉得，做业务开发没啥技术含量，没有成长，就是简单的 CRUD，翻译业务逻辑，根本用不上专栏中讲的设计原则、思想、模式。</p><p>所以，针对这两个普遍的现象，今天，我通过一个积分兑换系统的开发实战，一方面给你展示一个业务系统从需求分析到上线维护的整个开发套路，让你能举一反三地应用到所有其他系统的开发中，另一方面也给你展示在看似没有技术含量的业务开发中，实际上都蕴含了哪些设计原则、思想、模式。</p><h2 id="需求分析" tabindex="-1"><a class="header-anchor" href="#需求分析" aria-hidden="true">#</a> 需求分析</h2><p>积分是一种常见的营销手段，很多产品都会通过它来促进消费、增加用户粘性，比如淘宝积分、信用卡积分、商场消费积分等等。假设你是一家类似淘宝这样的电商平台的工程师，平台暂时还没有积分系统。Leader 希望由你来负责开发这样一个系统，你会如何来做呢？</p><p>你可能会说，只要产品经理给我产品设计文档（PRD）、线框图，我照着实现就可以了。我觉得，这种想法有点狭隘。我认为，技术人员应该更多地参与到产品设计中。在 Google 工作的时候，我很明显能感受到，Google 工程师跟其他公司工程师有一个很大区别，那就是大部分人都具备产品思维，并不是完全的“技术控”。所以，Google 很多产品的初期设计都是工程师来完成的，在产品发展壮大到一定程度的时候，才会引入产品经理的角色。</p><p>那你可能要问了，作为技术人，我该怎么做产品设计呢？首先，一定不要自己一个人闷头想。一方面，这样做很难想全面。另一方面，从零开始设计也比较浪费时间。所以，我们要学会“借鉴”。爱因斯坦说过，“创造的一大秘诀是要懂得如何隐藏你的来源”。你看大师都含蓄地表达了“借鉴”的重要性，我们也没有必要因为“借鉴”而感到不好意思了。</p><p>我们可以找几个类似的产品，比如淘宝，看看它们是如何设计积分系统的，然后借鉴到我们的产品中。你可以自己亲自用用淘宝，看看积分是怎么使用的，也可以直接百度一下“淘宝积分规则”。基于这两个输入，我们基本上就大致能摸清楚积分系统该如何设计了。除此之外，我们还要充分了解自己公司的产品，将借鉴来的东西糅合在我们自己的产品中，并做适当的微创新。</p><p>笼统地来讲，积分系统无外乎就两个大的功能点，一个是赚取积分，另一个是消费积分。赚取积分功能包括积分赚取渠道，比如下订单、每日签到、评论等；还包括积分兑换规则，比如订单金额与积分的兑换比例，每日签到赠送多少积分等。消费积分功能包括积分消费渠道，比如抵扣订单金额、兑换优惠券、积分换购、参与活动扣积分等；还包括积分兑换规则，比如多少积分可以换算成抵扣订单的多少金额，一张优惠券需要多少积分来兑换等等。</p><p>我刚刚给出的只是非常笼统、粗糙的功能需求。在实际情况中，肯定还有一些业务细节需要考虑，比如积分的有效期问题。对于这些业务细节，还是那句话，闷头拍脑袋想是想不全面的。以防遗漏，我们还是要有方法可寻。那除了刚刚讲的“借鉴”的思路之外，我还喜欢通过产品的<strong>线框图</strong>、<strong>用户用例</strong>（user case ）或者叫用户故事（user story）来细化业务流程，挖掘一些比较细节的、不容易想到的功能点。</p><p>线框图对你来说应该不陌生，我就不赘述了，我这里重点说一下用户用例。用户用例有点儿类似我们后面要讲的单元测试用例。它侧重情景化，其实就是模拟用户如何使用我们的产品，描述用户在一个特定的应用场景里的一个完整的业务操作流程。所以，它包含更多的细节，且更加容易被人理解。比如，有关积分有效期的用户用例，我们可以进行如下的设计：</p><ul><li><p>用户在获取积分的时候，会告知积分的有效期；</p></li><li><p>用户在使用积分的时候，会优先使用快过期的积分；</p></li><li><p>用户在查询积分明细的时候，会显示积分的有效期和状态（是否过期）；</p></li><li><p>用户在查询总可用积分的时候，会排除掉过期的积分。</p></li></ul><p>通过上面讲的方法，我们就可以将功能需求大致弄清楚了。积分系统的需求实际上并不复杂，我总结罗列了一下，如下所示。</p><h3 id="_1-积分赚取和兑换规则" tabindex="-1"><a class="header-anchor" href="#_1-积分赚取和兑换规则" aria-hidden="true">#</a> 1. 积分赚取和兑换规则</h3><p>积分的赚取渠道包括：下订单、每日签到、评论等。</p><p>积分兑换规则可以是比较通用的。比如，签到送 10 积分。再比如，按照订单总金额的 10% 兑换成积分，也就是 100 块钱的订单可以积累 10 积分。除此之外，积分兑换规则也可以是比较细化的。比如，不同的店铺、不同的商品，可以设置不同的积分兑换比例。</p><p>对于积分的有效期，我们可以根据不同渠道，设置不同的有效期。积分到期之后会作废；在消费积分的时候，优先使用快到期的积分。</p><h3 id="_2-积分消费和兑换规则" tabindex="-1"><a class="header-anchor" href="#_2-积分消费和兑换规则" aria-hidden="true">#</a> 2. 积分消费和兑换规则</h3><p>积分的消费渠道包括：抵扣订单金额、兑换优惠券、积分换购、参与活动扣积分等。</p><p>我们可以根据不同的消费渠道，设置不同的积分兑换规则。比如，积分换算成消费抵扣金额的比例是 10%，也就是 10 积分可以抵扣 1 块钱；100 积分可以兑换 15 块钱的优惠券等。</p><h3 id="_3-积分及其明细查询" tabindex="-1"><a class="header-anchor" href="#_3-积分及其明细查询" aria-hidden="true">#</a> 3. 积分及其明细查询</h3><p>查询用户的总积分，以及赚取积分和消费积分的历史记录。</p><h2 id="系统设计" tabindex="-1"><a class="header-anchor" href="#系统设计" aria-hidden="true">#</a> 系统设计</h2><p>面向对象设计聚焦在代码层面（主要是针对类），那系统设计就是聚焦在架构层面（主要是针对模块），两者有很多相似之处。很多设计原则和思想不仅仅可以应用到代码设计中，还能用到架构设计中。还记得面向对象设计的四个步骤吗？实际上，我们也可以借鉴那个过程来做系统设计。</p><h3 id="_1-合理地将功能划分到不同模块" tabindex="-1"><a class="header-anchor" href="#_1-合理地将功能划分到不同模块" aria-hidden="true">#</a> 1. 合理地将功能划分到不同模块</h3><p>前面讲到面向对象设计的时候，我们提到，面向对象设计的本质就是把合适的代码放到合适的类中。合理地划分代码可以实现代码的高内聚、低耦合，类与类之间的交互简单清晰，代码整体结构一目了然，那代码的质量就不会差到哪里去。类比面向对象设计，系统设计实际上就是将合适的功能放到合适的模块中。合理地划分模块也可以做到模块层面的高内聚、低耦合，架构整洁清晰。</p><p>对于前面罗列的所有功能点，我们有下面三种模块划分方法。</p><p>第一种划分方式是：积分赚取渠道及兑换规则、消费渠道及兑换规则的管理和维护（增删改查），不划分到积分系统中，而是放到更上层的营销系统中。这样积分系统就会变得非常简单，只需要负责增加积分、减少积分、查询积分、查询积分明细等这几个工作。</p><p>我举个例子解释一下。比如，用户通过下订单赚取积分。订单系统通过异步发送消息或者同步调用接口的方式，告知营销系统订单交易成功。营销系统根据拿到的订单信息，查询订单对应的积分兑换规则（兑换比例、有效期等），计算得到订单可兑换的积分数量，然后调用积分系统的接口给用户增加积分。</p><p>第二种划分方式是：积分赚取渠道及兑换规则、消费渠道及兑换规则的管理和维护，分散在各个相关业务系统中，比如订单系统、评论系统、签到系统、换购商城、优惠券系统等。还是刚刚那个下订单赚取积分的例子，在这种情况下，用户下订单成功之后，订单系统根据商品对应的积分兑换比例，计算所能兑换的积分数量，然后直接调用积分系统给用户增加积分。</p><p>第三种划分方式是：所有的功能都划分到积分系统中，包括积分赚取渠道及兑换规则、消费渠道及兑换规则的管理和维护。还是同样的例子，用户下订单成功之后，订单系统直接告知积分系统订单交易成功，积分系统根据订单信息查询积分兑换规则，给用户增加积分。</p><p>怎么判断哪种模块划分合理呢？实际上，我们可以反过来通过看它是否符合高内聚、低耦合特性来判断。如果一个功能的修改或添加，经常要跨团队、跨项目、跨系统才能完成，那说明模块划分的不够合理，职责不够清晰，耦合过于严重。</p><p>除此之外，为了避免业务知识的耦合，让下层系统更加通用，一般来讲，我们不希望下层系统（也就是被调用的系统）包含太多上层系统（也就是调用系统）的业务信息，但是，可以接受上层系统包含下层系统的业务信息。比如，订单系统、优惠券系统、换购商城等作为调用积分系统的上层系统，可以包含一些积分相关的业务信息。但是，反过来，积分系统中最好不要包含太多跟订单、优惠券、换购等相关的信息。</p><p>所以，综合考虑，我们更倾向于第一种和第二种模块划分方式。但是，不管选择这两种中的哪一种，积分系统所负责的工作是一样的，只包含积分的增、减、查询，以及积分明细的记录和查询。</p><h3 id="_2-设计模块与模块之间的交互关系" tabindex="-1"><a class="header-anchor" href="#_2-设计模块与模块之间的交互关系" aria-hidden="true">#</a> 2. 设计模块与模块之间的交互关系</h3><p>在面向对象设计中，类设计好之后，我们需要设计类之间的交互关系。类比到系统设计，系统职责划分好之后，接下来就是设计系统之间的交互，也就是确定有哪些系统跟积分系统之间有交互以及如何进行交互。</p><p>比较常见的系统之间的交互方式有两种，一种是同步接口调用，另一种是利用消息中间件异步调用。第一种方式简单直接，第二种方式的解耦效果更好。</p><p>比如，用户下订单成功之后，订单系统推送一条消息到消息中间件，营销系统订阅订单成功消息，触发执行相应的积分兑换逻辑。这样订单系统就跟营销系统完全解耦，订单系统不需要知道任何跟积分相关的逻辑，而营销系统也不需要直接跟订单系统交互。</p><p>除此之外，上下层系统之间的调用倾向于通过同步接口，同层之间的调用倾向于异步消息调用。比如，营销系统和积分系统是上下层关系，它们之间就比较推荐使用同步接口调用。</p><h3 id="_3-设计模块的接口、数据库、业务模型" tabindex="-1"><a class="header-anchor" href="#_3-设计模块的接口、数据库、业务模型" aria-hidden="true">#</a> 3. 设计模块的接口、数据库、业务模型</h3><p>刚刚讲了模块的功能划分，模块之间的交互的设计，现在，我们再来看，模块本身如何来设计。实际上，业务系统本身的设计无外乎有这样三方面的工作要做：接口设计、数据库设计和业务模型设计。这部分的具体内容我们放到下一下节课中跟实现一块进行讲解。</p><h2 id="业务开发包括哪些工作" tabindex="-1"><a class="header-anchor" href="#业务开发包括哪些工作" aria-hidden="true">#</a> 业务开发包括哪些工作？</h2><p>实际上，我们平时做业务系统的设计与开发，无外乎有这样三方面的工作要做：接口设计、数据库设计和业务模型设计（也就是业务逻辑）。</p><p>数据库和接口的设计非常重要，一旦设计好并投入使用之后，这两部分都不能轻易改动。改动数据库表结构，需要涉及数据的迁移和适配；改动接口，需要推动接口的使用者作相应的代码修改。这两种情况，即便是微小的改动，执行起来都会非常麻烦。因此，我们在设计接口和数据库的时候，一定要多花点心思和时间，切不可过于随意。相反，业务逻辑代码侧重内部实现，不涉及被外部依赖的接口，也不包含持久化的数据，所以对改动的容忍性更大。</p><p><strong>针对积分系统，我们先来看，如何设计数据库。</strong></p><p>数据库的设计比较简单。实际上，我们只需要一张记录积分流水明细的表就可以了。表中记录积分的赚取和消费流水。用户积分的各种统计数据，比如总积分、总可用积分等，都可以通过这张表来计算得到。</p><figure><img src="https://personal-site-pictures.oss-cn-beijing.aliyuncs.com/img/image-20220612120235224.png" alt="image-20220612120235224" tabindex="0" loading="lazy"><figcaption>image-20220612120235224</figcaption></figure><p><strong>接下来，我们再来看，如何设计积分系统的接口。</strong></p><p>接口设计要符合单一职责原则，粒度越小通用性就越好。但是，接口粒度太小也会带来一些问题。比如，一个功能的实现要调用多个小接口，一方面如果接口调用走网络（特别是公网），多次远程接口调用会影响性能；另一方面，本该在一个接口中完成的原子操作，现在分拆成多个小接口来完成，就可能会涉及分布式事务的数据一致性问题（一个接口执行成功了，但另一个接口执行失败了）。所以，为了兼顾易用性和性能，我们可以借鉴 facade（外观）设计模式，在职责单一的细粒度接口之上，再封装一层粗粒度的接口给外部使用。</p><p>对于积分系统来说，我们需要设计如下这样几个接口。</p><figure><img src="https://personal-site-pictures.oss-cn-beijing.aliyuncs.com/img/image-20220612120302103.png" alt="image-20220612120302103" tabindex="0" loading="lazy"><figcaption>image-20220612120302103</figcaption></figure><p><strong>最后，我们来看业务模型的设计。</strong></p><p>前面我们讲到，从代码实现角度来说，大部分业务系统的开发都可以分为 Controller、Service、Repository 三层。Controller 层负责接口暴露，Repository 层负责数据读写，Service 层负责核心业务逻辑，也就是这里说的业务模型。</p><p>除此之外，前面我们还提到两种开发模式，基于贫血模型的传统开发模式和基于充血模型的 DDD 开发模式。前者是一种面向过程的编程风格，后者是一种面向对象的编程风格。不管是 DDD 还是 OOP，高级开发模式的存在一般都是为了应对复杂系统，应对系统的复杂性。对于我们要开发的积分系统来说，因为业务相对比较简单，所以，选择简单的基于贫血模型的传统开发模式就足够了。</p><p>从开发的角度来说，我们可以把积分系统作为一个独立的项目，来独立开发，也可以跟其他业务代码（比如营销系统）放到同一个项目中进行开发。从运维的角度来说，我们可以将它跟其他业务一块部署，也可以作为一个微服务独立部署。具体选择哪种开发和部署方式，我们可以参考公司当前的技术架构来决定。</p><p>实际上，积分系统业务比较简单，代码量也不多，我更倾向于将它跟营销系统放到一个项目中开发部署。只要我们做好代码的模块化和解耦，让积分相关的业务代码跟其他业务代码之间边界清晰，没有太多耦合，后期如果需要将它拆分成独立的项目来开发部署，那也并不困难。</p><p>相信这样一个简单的业务功能的开发，对你来说并没有太大难度。所以，具体的代码实现我就不在专栏中给出了。感兴趣的话，你可以自己实现一下。接下来的内容，才是我们这一节的重点。</p><h2 id="为什么要分-mvc-三层开发" tabindex="-1"><a class="header-anchor" href="#为什么要分-mvc-三层开发" aria-hidden="true">#</a> 为什么要分 MVC 三层开发？</h2><p>我们刚刚提到，大部分业务系统的开发都可以分为三层：Contoller 层、Service 层、Repository 层。对于这种分层方式，我相信大部分人都很认同，甚至成为了一种开发习惯，但你有没有想过，为什么我们要分层开发？很多业务都比较简单，一层代码搞定所有的数据读取、业务逻辑、接口暴露不好吗？你可以把它作为一道面试题，试着自己思考下，然后再看我下面的讲解。</p><p>对于这个问题，我总结了以下几点原因。</p><h3 id="_1-分层能起到代码复用的作用" tabindex="-1"><a class="header-anchor" href="#_1-分层能起到代码复用的作用" aria-hidden="true">#</a> 1. 分层能起到代码复用的作用</h3><p>同一个 Repository 可能会被多个 Service 来调用，同一个 Service 可能会被多个 Controller 调用。比如，UserService 中的 getUserById() 接口封装了通过 ID 获取用户信息的逻辑，这部分逻辑可能会被 UserController 和 AdminController 等多个 Controller 使用。如果没有 Service 层，每个 Controller 都要重复实现这部分逻辑，显然会违反 DRY 原则。</p><h3 id="_2-分层能起到隔离变化的作用" tabindex="-1"><a class="header-anchor" href="#_2-分层能起到隔离变化的作用" aria-hidden="true">#</a> 2. 分层能起到隔离变化的作用</h3><p>分层体现了一种抽象和封装的设计思想。比如，Repository 层封装了对数据库访问的操作，提供了抽象的数据访问接口。基于接口而非实现编程的设计思想，Service 层使用 Repository 层提供的接口，并不关心其底层依赖的是哪种具体的数据库。当我们需要替换数据库的时候，比如从 MySQL 到 Oracle，从 Oracle 到 Redis，只需要改动 Repository 层的代码，Service 层的代码完全不需要修改。</p><p>除此之外，Controller、Service、Repository 三层代码的稳定程度不同、引起变化的原因不同，所以分成三层来组织代码，能有效地隔离变化。比如，Repository 层基于数据库表，而数据库表改动的可能性很小，所以 Repository 层的代码最稳定，而 Controller 层提供适配给外部使用的接口，代码经常会变动。分层之后，Controller 层中代码的频繁改动并不会影响到稳定的 Repository 层。</p><h3 id="_3-分层能起到隔离关注点的作用" tabindex="-1"><a class="header-anchor" href="#_3-分层能起到隔离关注点的作用" aria-hidden="true">#</a> 3. 分层能起到隔离关注点的作用</h3><p>Repository 层只关注数据的读写。Service 层只关注业务逻辑，不关注数据的来源。Controller 层只关注与外界打交道，数据校验、封装、格式转换，并不关心业务逻辑。三层之间的关注点不同，分层之后，职责分明，更加符合单一职责原则，代码的内聚性更好。</p><h3 id="_4-分层能提高代码的可测试性" tabindex="-1"><a class="header-anchor" href="#_4-分层能提高代码的可测试性" aria-hidden="true">#</a> 4. 分层能提高代码的可测试性</h3><p>后面讲单元测试的时候，我们会讲到，单元测试不依赖不可控的外部组件，比如数据库。分层之后，Repsitory 层的代码通过依赖注入的方式供 Service 层使用，当要测试包含核心业务逻辑的 Service 层代码的时候，我们可以用 mock 的数据源替代真实的数据库，注入到 Service 层代码中。代码的可测试性和单元测试我们后面会讲到，这里你稍微了解即可。</p><h3 id="_5-分层能应对系统的复杂性" tabindex="-1"><a class="header-anchor" href="#_5-分层能应对系统的复杂性" aria-hidden="true">#</a> 5. 分层能应对系统的复杂性</h3><p>所有的代码都放到一个类中，那这个类的代码就会因为需求的迭代而无限膨胀。我们知道，当一个类或一个函数的代码过多之后，可读性、可维护性就会变差。那我们就要想办法拆分。拆分有垂直和水平两个方向。水平方向基于业务来做拆分，就是模块化；垂直方向基于流程来做拆分，就是这里说的分层。</p><p>还是那句话，不管是分层、模块化，还是 OOP、DDD，以及各种设计模式、原则和思想，都是为了应对复杂系统，应对系统的复杂性。对于简单系统来说，其实是发挥不了作用的，就是俗话说的“杀鸡焉用牛刀”。</p><h2 id="bo、vo、entity-存在的意义是什么" tabindex="-1"><a class="header-anchor" href="#bo、vo、entity-存在的意义是什么" aria-hidden="true">#</a> BO、VO、Entity 存在的意义是什么？</h2><p>在前面的章节中，我们提到，针对 Controller、Service、Repository 三层，每层都会定义相应的数据对象，它们分别是 VO（View Object）、BO（Business Object）、Entity，例如 UserVo、UserBo、UserEntity。在实际的开发中，VO、BO、Entity 可能存在大量的重复字段，甚至三者包含的字段完全一样。在开发的过程中，我们经常需要重复定义三个几乎一样的类，显然是一种重复劳动。</p><p><strong>相对于每层定义各自的数据对象来说，是不是定义一个公共的数据对象更好些呢？</strong></p><p>实际上，我更加推荐每层都定义各自的数据对象这种设计思路，主要有以下 3 个方面的原因。</p><p>VO、BO、Entity 并非完全一样。比如，我们可以在 UserEntity、UserBo 中定义 Password 字段，但显然不能在 UserVo 中定义 Password 字段，否则就会将用户的密码暴露出去。</p><p>VO、BO、Entity 三个类虽然代码重复，但功能语义不重复，从职责上讲是不一样的。所以，也并不能算违背 DRY 原则。在前面讲到 DRY 原则的时候，针对这种情况，如果合并为同一个类，那也会存在后期因为需求的变化而需要再拆分的问题。</p><p>为了尽量减少每层之间的耦合，把职责边界划分明确，每层都会维护自己的数据对象，层与层之间通过接口交互。数据从下一层传递到上一层的时候，将下一层的数据对象转化成上一层的数据对象，再继续处理。虽然这样的设计稍微有些繁琐，每层都需要定义各自的数据对象，需要做数据对象之间的转化，但是分层清晰。对于非常大的项目来说，结构清晰是第一位的！</p><p><strong>既然 VO、BO、Entity 不能合并，那如何解决代码重复的问题呢？</strong></p><p>从设计的角度来说，VO、BO、Entity 的设计思路并不违反 DRY 原则，为了分层清晰、减少耦合，多维护几个类的成本也并不是不能接受的。但是，如果你真的有代码洁癖，对于代码重复的问题，我们也有一些办法来解决。</p><p>我们前面讲到，继承可以解决代码重复问题。我们可以将公共的字段定义在父类中，让 VO、BO、Entity 都继承这个父类，各自只定义特有的字段。因为这里的继承层次很浅，也不复杂，所以使用继承并不会影响代码的可读性和可维护性。后期如果因为业务的需要，有些字段需要从父类移动到子类，或者从子类提取到父类，代码改起来也并不复杂。</p><p>前面在讲“多用组合，少用继承”设计思想的时候，我们提到，组合也可以解决代码重复的问题，所以，这里我们还可以将公共的字段抽取到公共的类中，VO、BO、Entity 通过组合关系来复用这个类的代码。</p><p><strong>代码重复问题解决了，那不同分层之间的数据对象该如何互相转化呢？</strong></p><p>当下一层的数据通过接口调用传递到上一层之后，我们需要将它转化成上一层对应的数据对象类型。比如，Service 层从 Repository 层获取的 Entity 之后，将其转化成 BO，再继续业务逻辑的处理。所以，整个开发的过程会涉及“Entity 到 BO”和“BO 到 VO”这两种转化。</p><p>最简单的转化方式是手动复制。自己写代码在两个对象之间，一个字段一个字段的赋值。但这样的做法显然是没有技术含量的低级劳动。Java 中提供了多种数据对象转化工具，比如 BeanUtils、Dozer 等，可以大大简化繁琐的对象转化工作。如果你是用其他编程语言来做开发，也可以借鉴 Java 这些工具类的设计思路，自己在项目中实现对象转化工具类。</p><p><strong>VO、BO、Entity 都是基于贫血模型的，而且为了兼容框架或开发库（比如 MyBatis、Dozer、BeanUtils），我们还需要定义每个字段的 set 方法。这些都违背 OOP 的封装特性，会导致数据被随意修改。那到底该怎么办好呢？</strong></p><p>前面我们也提到过，Entity 和 VO 的生命周期是有限的，都仅限在本层范围内。而对应的 Repository 层和 Controller 层也都不包含太多业务逻辑，所以也不会有太多代码随意修改数据，即便设计成贫血、定义每个字段的 set 方法，相对来说也是安全的。</p><p>不过，Service 层包含比较多的业务逻辑代码，所以 BO 就存在被任意修改的风险了。但是，设计的问题本身就没有最优解，只有权衡。为了使用方便，我们只能做一些妥协，放弃 BO 的封装特性，由程序员自己来负责这些数据对象的不被错误使用。</p><h2 id="总结用到的设计原则和思想" tabindex="-1"><a class="header-anchor" href="#总结用到的设计原则和思想" aria-hidden="true">#</a> 总结用到的设计原则和思想</h2><p>前面我们提到，很多人做业务开发，总感觉就是 CRUD，翻译代码，根本用不到设计原则、思想和模式。实际上，只是你没有发现而已。现在，我就给你罗列一下，今天讲解的内容中，都用到了哪些设计原则、思想和模式。</p><figure><img src="https://personal-site-pictures.oss-cn-beijing.aliyuncs.com/img/image-20220612120344054.png" alt="image-20220612120344054" tabindex="0" loading="lazy"><figcaption>image-20220612120344054</figcaption></figure><h2 id="重点回顾" tabindex="-1"><a class="header-anchor" href="#重点回顾" aria-hidden="true">#</a> 重点回顾</h2><p>技术人也要有一些产品思维。对于产品设计、需求分析，我们要学会“借鉴”，一定不要自己闷头想。一方面这样做很难想全面，另一方面从零开始设计也比较浪费时间。除此之外，我们还可以通过线框图和用户用例来细化业务流程，挖掘一些比较细节的、不容易想到的功能点。</p><p>面向对象设计聚焦在代码层面（主要是针对类），那系统设计就是聚焦在架构层面（主要是针对模块），两者有很多相似之处。很多设计原则和思想不仅仅可以应用到代码设计中，还能用到架构设计中。实际上，我们可以借鉴面向对象设计的步骤，来做系统设计。</p><p>面向对象设计的本质就是把合适的代码放到合适的类中。合理地划分代码可以实现代码的高内聚、低耦合，类与类之间的交互简单清晰，代码整体结构一目了然。类比面向对象设计，系统设计实际上就是将合适的功能放到合适的模块中。合理地划分模块也可以做到模块层面的高内聚、低耦合，架构整洁清晰。在面向对象设计中，类设计好之后，我们需要设计类之间的交互关系。类比到系统设计，系统职责划分好之后，接下来就是设计系统之间的交互了。</p><hr><p><strong>1. 为什么要分 MVC 三层开发？</strong></p><p>对于这个问题，我总结了以下 5 点原因。</p><ul><li><p>分层能起到代码复用的作用</p></li><li><p>分层能起到隔离变化的作用</p></li><li><p>分层能起到隔离关注点的作用</p></li><li><p>分层能提高代码的可测试性</p></li><li><p>分层能应对系统的复杂性</p></li></ul>',101),c={href:"http://2.BO",target:"_blank",rel:"noopener noreferrer"},l=a('<p>从设计的角度来说，VO、BO、Entity 的设计思路并不违反 DRY 原则，为了分层清晰、减少耦合，多维护几个类的成本也并不是不能接受的。但是，如果你真的有代码洁癖，对于代码重复的问题，我们可以通过继承或者组合来解决。</p><p>如何进行数据对象之间的转化？最简单的方式就是手动复制。当然，你也可以使用 Java 中提供了数据对象转化工具，比如 BeanUtils、Dozer 等，可以大大简化繁琐的对象转化工作。</p><p>尽管 VO、BO、Entity 的设计违背 OOP 的封装特性，有被随意修改的风险。但 Entity 和 VO 的生命周期是有限的，都仅限在本层范围内，相对来说是安全的。Service 层包含比较多的业务逻辑代码，所以 BO 就存在被任意修改的风险了。为了使用方便，我们只能做一些妥协，放弃 BO 的封装特性，由程序员自己来负责这些数据对象的不被错误使用。</p><p><strong>3. 总结用到的设计原则和思想</strong></p><p>从表面上看，做业务开发可能并不是特别有技术挑战，但是实际上，如果你要做到知其然知其所以然，做到透彻理解、真的懂，并不是件容易的事情。深挖一下，你会发现这其中还是蕴含了很多设计原则、思想和模式的。</p><h2 id="课堂讨论" tabindex="-1"><a class="header-anchor" href="#课堂讨论" aria-hidden="true">#</a> 课堂讨论</h2><p>这两者听起来比较矛盾。作为一名技术人，为了谋求更好的发展，你觉得是应该多花点时间研究业务呢，还是要多花点心思在技术上呢？</p><blockquote><p>个人觉得，如果对当前工作不满意，想要找更好的工作的话，应该多花点时间在技术上，但是如果对当前工作很满意，想要继续在当前岗位上发展的话，还是应该多花时间在业务上。</p></blockquote><p>上节课中，我们讲到，下层系统不要包含太多上层系统的业务信息。但在今天的数据库设计中，积分明细表中 credit_transaction 中包含 event_id，channel_id 这些跟上层业务相关的字段，那这样的设计是否合理呢？</p><blockquote><p>保留上层应用id和channel完全符合设计原理，冗余业务信息方便日后做数据统计，沉淀数据资产反推营销策略迭代; 一次消费或赚取积分行为可能存在多次调用情况，方便幂等，不至于多次记账;方便业务系统查询某次赚取或消费的积分明细;暂时想到这么多。</p></blockquote><p>我们经常说，修改和查询不要耦合在一个接口中，要分成两个接口来做。赚取积分和消费积分接口返回积分明细 ID，这样的接口设计是否违背单一职责原则呢？是不是返回 void 或者 boolean 类型更合理呢？</p><blockquote><p>尽量不要返回void或boolean，有些业务需要反向关键积分流水id做单笔流水查询。 其实这两个讨论都类似于现实生活，去便利店买东西会给你小票，支付宝扫码付款会返回交易流水。都是为了方便真是场景解决“纠纷”(查询)用的。</p></blockquote>',12);function g(u,O){const p=s("ExternalLinkIcon");return t(),n("div",null,[d,e("p",null,[e("strong",null,[e("a",c,[r("2.BO"),o(p)]),r("、VO、Entity 存在的意义是什么？")])]),l])}const y=i(h,[["render",g],["__file","实战一.html.vue"]]);export{y as default};
