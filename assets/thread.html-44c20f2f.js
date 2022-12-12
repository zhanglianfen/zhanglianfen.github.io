import{_ as a,V as r,W as e,a1 as p}from"./framework-6f747a7a.js";const t={},i=p('<h1 id="线程" tabindex="-1"><a class="header-anchor" href="#线程" aria-hidden="true">#</a> <strong>线程</strong></h1><div class="custom-container tip"><p class="custom-container-title">提示</p><p>有了进程为什么还要有线程？线程越多执行就越快吗？</p><p>尽管在平时的开发中，我们很少会直接编写多线程代码，但是，常用的框架和容器，无一例外的都会用到多线程。比如，Dubbo、Tomcat均使用多线程来处理请求。业务代码一般运行在这些框架或容器中，因此，也就间接的会用到多线程。只有对多线程的使用和原理有透彻的了解，我们才能编写出线程安全且高性能的代码。</p><p>在正式的学习如何编写多线程代码之前，我们先介绍多线程方面的一些基础理论知识，其中包括：线程的由来、调度策略、线程状态、线程模型、Java线程的实现方式。</p></div><h2 id="线程概述" tabindex="-1"><a class="header-anchor" href="#线程概述" aria-hidden="true">#</a> <strong>线程概述</strong></h2><h3 id="一、线程由来" tabindex="-1"><a class="header-anchor" href="#一、线程由来" aria-hidden="true">#</a> <strong>一、线程由来</strong></h3><p>进程和线程并非从计算机诞生就存在，随着计算机硬件的发展，操作系统经历了单进程、多进程、多线程，才逐渐发展为现在的并发模型。接下来，我们就按照演进的过程，介绍一下进程和线程的由来。</p><h4 id="_1-单进程" tabindex="-1"><a class="header-anchor" href="#_1-单进程" aria-hidden="true">#</a> <strong>1）单进程</strong></h4><p>进程是操作系统中非常重要的一个概念。进程这个概念，实际上是对程序运行过程中所涉及的数据（比如创建的对象、变量）、代码、资源（比如打开的文件）、执行信息（比如执行到哪行代码了）的封装聚合，起到方便管理的作用。进程跟程序之间的关系，有点类似类跟对象之间关系。针对同一个类，JVM可以创建多个对象。同理，针对同一个程序，操作系统也可以创建多个进程。</p><p>早期的计算机只支持单进程，也就是一次只能执行一个程序。一个程序执行完之后，才会轮到下一个程序来执行。每个程序在执行的过程中，都独占计算机资源（比如CPU、内存）。早期的计算机主要用于执行涉及科学计算的批处理程序。这类程序有两大特点。</p><p>其一：科学计算一般都是CPU密集型的，<strong>早期的计算机都是单核的，CPU资源是瓶颈，并发执行多个程序并不能提高吞吐量</strong>（吞吐量指单位时间内执行完的程序个数）。</p><p>其二：<strong>对于批处理程序来说，我们一般只注重吞吐量，而不注重实时性。</strong> 因此，这种单进程的运行模式，对于早期计算机来说已经足够了。</p><h4 id="_2-多进程" tabindex="-1"><a class="header-anchor" href="#_2-多进程" aria-hidden="true">#</a> <strong>2）多进程</strong></h4><p>随着计算机的硬件的发展，特别是随着个人计算机的发展和推广，计算机的应用越来越丰富，不再只是用于工业级的科学计算。对于个人计算机来说，因其应用的特点（比如听歌的同时打字），人们对实时性的要求变的更高。</p><p>因为限于计算机的发展，早期的计算机都是单核的，所以，计算机内部采用“并发”的方式，来实现用户眼里的“并行”需求。也就是说，在粗时间粒度上，两个程序看似并行运行。在细时间粒度上，两个程序实则交替执行。这就类似我们观看的视频。每个视频由一组画面帧来组成，计算机每隔一段很小的时间，发送一个画面帧到屏幕，尽管帧与帧之间并非完全连续，但从人眼角度来说，我们是无法察觉到两个帧之间的细小间隔的。</p><p>并行（paralelism）与并发（concurrency）的区别，如下所示。从图中，我们可以发现，两个程序并发执行，每个程序执行时间增加一倍，实际上，也就相当于计算机变慢了一倍而已。</p><figure><img src="http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/75376600_1656865366.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>从上图中，我们还可以发现，一个进程在执行的过程中，会被频繁的暂停和重启继续执行。暂停时，操作系统需要帮忙记录下这个进程暂停时的环境信息，重启执行时，操作系统需要恢复这个进程执行的环境信息。我们把这里的环境信息叫做上下文（Context）。<strong>两个进程之间切换执行，就会导致上下文切换（Context Switching）。</strong></p><p>我们拿打印资料来举例进一步解释。</p><p>打印机就相当于CPU。打印机只管不停打印，具体打印什么，它并不在乎。打印员就相当于操作系统，负责告诉打印机打印什么内容。假设现在有两个打印任务，一个是打印《数据结构与算法之美》，另一个是打印《设计模式之美》，边打印边递交给旁边的两个审查人员审查。如果我们先打印一本，再打印另一本，那么任何时刻只有一个审查人员在忙碌，另一个审查人员就会闲着。因此，我们希望并发打印两本书。一本书打印10页之后，切换为打印另一本书，循环往复，交替执行。</p><p>假设《数据结构与算法之美》需要彩印，并且页面尺寸比较大，《设计模式之美》只需要黑白印书，并且页面尺寸比较小。所以，打印员将打印机从打印一本书切换为打印另一本书时，打印员首先需要将当前这本书的打印参数保存下来，以便稍后恢复打印。这里的打印参数包括打印机设置（彩印还是黑白、页面尺寸等）、打印到的页码等。</p><p>操作系统用进程表（Process Table）来记录所有进程的执行信息。进程表中每一个表项叫做进程控制块，简称PCB（Process Control Block）。一个PCB记录一个进程的执行信息。PCB中包含的信息具体如下所示。</p><ul><li>进程ID：每个进程会有一个ID。</li><li>进程状态：NEW、READY、RUNNING、WAITING、TERMINATED等。</li><li>程序计数器（Programm Counter），也叫做PC计数器：用来记录接下来要执行的代码所在的内存地址。实际上，PC计数器中保存的值就是CS和IP这两个寄存器的值。</li><li>寄存器值：CPU在执行过程中，会用到各种寄存器来暂存计算结果，因此，在暂停进程时，操作系统需要将当下各个寄存器的值保存在PCB中，以便恢复执行时恢复寄存器的值。</li><li>调度信息：比如进程的优先级等。</li><li>文件列表：记录已经打开的文件的信息，比如读取到哪个文件的哪个位置了。</li><li>其他信息，比如统计信息，进程运行了多长时间了之类的。</li></ul><p>PCB中的部分信息（比如寄存器的值），就相当于刚刚讲到的打印参数。CPU在执行程序的过程中，寄存器起到重要的作用。操作系统将执行进程从进程A切换到进程B时，会将当前寄存器的值保存到进程A的PCB中，然后，拿进程B的PCB中保存的寄存器值重设寄存器。</p><h4 id="_3-多线程" tabindex="-1"><a class="header-anchor" href="#_3-多线程" aria-hidden="true">#</a> <strong>3）多线程</strong></h4><p>实际上，多进程已经很好地满足了多个程序并发执行的需求。线程的引入完全是在设计、性能、易用性上的进一步优化。</p><div class="custom-container tip"><p class="custom-container-title">设计</p><p><strong>在设计方面，</strong> 引入线程之后，进程相当于做了拆分。拆分之后，进程只负责线程共享资源的管理（比如虚拟内存中的代码段、数据段，以及打开的文件等）。线程负责代码的执行。原来由进程负责的部分数据现在由线程负责，比如栈（也就是函数调用栈）、程序计数器、寄存器值。</p><p>在引入线程前，操作系统按照进程来分配CPU执行时间。<strong>在引入线程后，进程是资源分配的最小单元，线程是CPU调度的最小单元</strong>，操作系统按照线程来分配CPU执行时间。因此，进程切换替代为了线程切换。当然，线程的切换跟进程切换一样，也会导致上下文的切换。</p><p>需要注意的是，这里提到的进程切换跟进程交换（Swap-in、Swap-out）没有任何关系，进程交换指的是，操作系统将一个暂时不再运行的进程的所有内容保存到磁盘上（Swap-out），再将保存在磁盘上的某个进程的所有内容重新读入内存（Swap-in）。</p></div><div class="custom-container tip"><p class="custom-container-title">性能</p><p><strong>在性能方面，随着多核计算机的发展，多线程可以让一个程序并行运行在多个CPU上，程序执行的效率更高。</strong> 程序中的逻辑可以粗略的分为两类：需要CPU参与执行的逻辑和不需要CPU参与执行的逻辑（比如读写IO）。实际上，提高程序执行效率（主要是吞吐量）的关键，是让两类逻辑并行执行（注意这里是并行而非并发），也就是在IO读写的同时，CPU也在执行指令。</p><p>如果操作系统只支持多进程，那么只是两个程序之间有可能并行执行，程序内部包含的两类逻辑之间并不能并行执行。<strong>在引入多线程之后，不仅程序间可以并行执行，程序内也可以并行执行。也就是说，多进程相当于粗粒度的并行，多线程相当于细粒度的并行。</strong></p></div><div class="custom-container tip"><p class="custom-container-title">易用性</p><p><strong>在易用性方面，引入多线程之后，每个线程负责执行一个逻辑，多个逻辑之间的调度执行，由操作系统来完成。如果没有多线程，多个逻辑之间的调度执行，需要程序员自己去维护。引入多线程，程序的开发难度降低。</strong></p><p>比如，前面讲到java.nio时，我们讲到过多种网络I/O模型。其中，阻塞模型一般会配合多线程来实现。一个客户端连接对应一个线程，代码非常清晰。非阻塞模型不使用多线程，必须配合多路复用器来实现。多路复用器就相当于我们刚刚讲到的调度多个逻辑执行的代码。因为Java已经提供了现成的多路复用器（Selector类），所以，非阻塞模型实现起来好像也并不复杂，但这只不过是将复杂度隐藏了而已，如果没有现成的Selector类，那么我们就需要自己去编写相应的代码，代码就复杂多了。</p><p>再比如，Java虚拟机除了要执行应用程序的代码之外，还需要做JIT编译，还需要做垃圾回收，这几个任务都在独立的线程中完成。因为每个任务都是独立的，不应该将没有关联的业务代码拼凑在一起，分离开来更容易开发和维护。</p></div><h3 id="二、调度策略" tabindex="-1"><a class="header-anchor" href="#二、调度策略" aria-hidden="true">#</a> <strong>二、调度策略</strong></h3><p>对于支持多线程的操作系统，多个线程共同竞争CPU资源，那么，操作系统就必须设计一定的算法，来调度多个线程轮流执行。基础的调度算法有很多种，比如先来先服务、最短作业优先、高优先级优先、多优先级队列、轮转调度（Round Robin）等等。操作系统使用的调度算法一般会比较复杂，往往会组合各种基础调度算法，特别是针对多核计算机。</p><p>大部分操作系统都会用到轮转调度这种基础的调度算法，基于此再组合其他基础的调度算法，以实现兼顾公平、优先级、响应时间、吞吐量等。这里我们重点讲一讲轮转调度算法。对于其他基础调度算法，以及具体操作系统的具体调度算法，如果感兴趣的话，你可以自行研究。</p><p>轮转调度算法的原理非常简单。所有就绪线程（状态为READY，待会会讲到线程状态）会放入到一个队列中，操作系统每次从队首取一个线程，分配时间片执行此线程，当时间片用完之后，将这个线程暂停，放入队列的尾部，然后从队首再取新的线程继续执行，以此类推。当然，除了时间片用完之外，还存在其他情况也会导致线程切换，比如线程等待I/O读写完成、线程等待获取锁，以及线程主动让出时间片（比如调用Java中的yield()函数）。</p><p>那么一个时间片到底有多长呢？</p><p>因为操作系统中的调度算法比较复杂，所以，时间片的大小一般并不是简单固定的。不过，时间片的大小一般处于10ms~100ms这个量级范围，不能太大也不能太小。时间片太大的话，其他线程等待的时间就会过长。时间片太小的话，线程上下文切换耗时跟时间片相当（线程上下文切换的耗时在几ms的量级范围），CPU还没执行几行代码就要进行线程切换，大部分时间都浪费在线程切换上了。</p><figure><img src="http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/95994900_1656865367.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>实际上，线程切换的耗时并不只有上下文切换的耗时，还有线程调度的耗时（执行调度算法本身也耗时）。除此之外，线程切换还会导致CPU缓存失效（从执行一个代码切换为执行另一个代码），因此过于频繁的上下文切换，会导致程序执行变慢。</strong></p><p>操作系统一般会保证一个固定的时间间隔内，所有的就绪线程都要运行一遍，这样才能保证每个线程都不会等待太久。也就是说，如果线程数较多，那么时间片就相对短一些，如果线程数较少，那么时间片就会相对长一些。我们经常听说，对于CPU密集的程序来说（并不会有太多IO读写和CPU执行指令并行进行），程序中创建的线程过多会导致程序变慢。原因就是因为线程多导致时间片变短，上下文切换耗时占比增多，从而影响程序的执行效率。</p><p>除此之外，我们还听到说，<strong>频繁加锁和释放锁也会导致程序变慢</strong>。那么，变慢的原因一个是<strong>加锁和释放锁本身就耗时</strong>，另一个是<strong>加锁会导致其他线程请求锁阻塞</strong>，在没有用完时间片的情况下，就切换为其他线程执行。执行代码逻辑的时间减少，大部分时间都浪费在了上下文切换，程序也会变慢。</p><p>实际上，在线程没有发明之前，进程还承担着线程的作用（执行代码），当时的进程调度算法跟刚刚讲的线程调度算法基本一样。<strong>当线程发明之后，进程只负责资源的管理，线程承担了大部分进程的工作，所以，线程在发明之初也叫做子进程（sub-process），或者轻量级进程（light-weight process）。</strong> 甚至在有些系统中，直接对进程的实现代码稍作修改，就实现了线程。</p><h3 id="三、线程状态" tabindex="-1"><a class="header-anchor" href="#三、线程状态" aria-hidden="true">#</a> <strong>三、线程状态</strong></h3><p>在线程调度执行的过程中，线程会处于各种不同的状态，比如有时候在执行，有时候等待操作系统调度执行，有时候会等待I/O读写完成，有时候会等待获取锁等等，为了方便标明线程所处的状态，操作系统一般会定义如下线程状态。</p><p>1）NEW：新创建的线程，在没有调用start()函数前，线程处于NEW状态。</p><p>2）READY：线程一切就绪，等待操作系统调度。</p><p>3）RUNNING：线程正在执行。</p><p>4）WAITING：线程在等待I/O读写完成、等待获取锁、等待时钟定时到期（调用sleep()函数）等等，总之，等待其他事件发生之后，线程才能被调度使用CPU，此时，线程的状态就是WAITING状态。</p><p>5）TERMINATED：线程终止状态。线程终止之后，未必就立即销毁。有些操作系统为了节省线程创建的时间（毕竟要分配内存还得初始化一些变量），会复用处于TERMINATED状态的线程。</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>当然，不同的操作系统可能会定义不同的多线程状态，不过基本上也不会差别很大。熟悉Java多线程的同学，可能会发现，上述定义的线程状态跟Java线程状态有些差别，关于这点的解释，我们留在<a href="#%E4%BA%94%E3%80%81java%E7%BA%BF%E7%A8%8B%E7%9A%84%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86">后面讲解</a>。</p></div><h2 id="线程模型" tabindex="-1"><a class="header-anchor" href="#线程模型" aria-hidden="true">#</a> <strong>线程模型</strong></h2><div class="custom-container tip"><p class="custom-container-title">提示</p><p>操作系统的线程状态，跟Java中的线程状态并不吻合。这是为什么呢？Java线程跟操作系统线程有什么关系呢？除此之外，我们还常听说Java线程的两种实现方式，一种叫Green Thread，一种叫Native Thread，这两种实现方式有什么区别呢？带着这些问题，我们来看下面的内容：线程模型。</p></div><h3 id="一、线程模型概述" tabindex="-1"><a class="header-anchor" href="#一、线程模型概述" aria-hidden="true">#</a> <strong>一、线程模型概述</strong></h3><p>所谓线程模型指的就是线程的实现方式。线程有各种实现方式，常见的有：内核线程、用户线程、混合线程。除此之外，你或许还听说过其他线程模型：1:1线程模型、M:1线程模型、M:N线程模型，以及刚刚提到的Green Thread、Native Thread，甚至还听说过协程，实际上，这些都是对线程实现方式的不同称谓罢了，它们之间的对应关系如下图所示。</p><figure><img src="http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/40974600_1657036998.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="二、内核线程" tabindex="-1"><a class="header-anchor" href="#二、内核线程" aria-hidden="true">#</a> <strong>二、内核线程</strong></h3><p>上一节，我们讲到线程调度。不同线程模型的主要区别在于线程调度是由谁来完成，是操作系统内核还是虚拟机。<strong>由操作系统内核来负责多线程调度的多线程实现方式，就叫做内核线程。</strong></p><p>前面在讲解Java IO的时候，我们提到，进程地址空间分为用户空间和内核空间。程序在用户空间执行时，CPU处于用户态；程序在内核空间执行时，CPU处于内核态。而调用程序运行在内核空间，CPU处于内核态，因此，内核线程，也叫做内核空间线程或内核态线程。</p><p>对于应用程序来说，其运行在用户空间，是无法直接操作（创建、使用、销毁等）内核线程的。因此，操作系统暴露操作线程的系统调用，给应用程序使用。因为系统调用比较底层，所以，大部分编程语言都对其进行封装，提供易用的线程接口，比如Linux中的pthread、C++中的std::thread等等。对于Java这种跨平台的语言来说，为了提供统一的线程操作接口，也必然会将操作系统提供的系统调用，封装为自己的线程类库。</p><p>内核线程，也叫做1:1模型。前面的1表示用户空间的一个线程，也就是在应用程序开发者眼里的一个线程，比如通过Java Thread创建的一个线程对象。后面的1表示内核空间的一个线程，也就是真正的线程。1:1模型指的就是：一个应用程序中的线程对应一个内核线程。</p><figure><img src="http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/28746700_1657036999.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>从上述讲解，我们发现，应用程序需要通过系统调用，才能实现对内核线程的操作。而前面讲过，系统调用会导致用户态和内核态的上下文切换，比较耗时。这是内核线程的一个弊端。</p><h3 id="三、用户线程-协程" tabindex="-1"><a class="header-anchor" href="#三、用户线程-协程" aria-hidden="true">#</a> <strong>三、用户线程（协程）</strong></h3><p>为了解决内核线程的弊端（系统调用导致上下文切换），于是，计算机科学家们就发明了用户线程。类比内核线程，用户线程指的是线程的调度由虚拟机完成，因为虚拟机本质上就是一个应用程序，运行在用户空间，所以，用户线程也叫做用户空间线程或用户态线程。<strong>实际上，我们常听到的协程，也就是用户线程。</strong></p><p>实现调度算法来调度线程的程序，我们叫做调度程序。用户线程的调度程序的实现思路，跟内核线程的调度程序的实现思路，基本上是一致的。虚拟机中内嵌一个调度程序。如果运行虚拟机上的应用程序创建了3个用户线程，那么虚拟机在运行的过程中，当获得CPU时间片之后，会分为3个小的时间片，分别运行这三个用户线程对应的代码。当然，这只是其中一种调度算法。调度算法也有可能是，当虚拟机获得时间片之后，把时间片全部用来执行一个用户线程的代码，等到虚拟机再次获得CPU时间片之后，再把时间片全部用来执行另一个用户线程的代码。</p><p>实际上，用户线程只是一个华丽的外壳，抛开外壳，从本质上看，虚拟执行三个线程，就相当于轮询执行三段代码（每个线程对应一段代码）。所以，应用程序操作用户线程（创建、使用、销毁等），都是在用户空间完成的，完全不需要操作系统内核的参与。这样就避免了系统调用带来的用户态和内核态的上下文切换。</p><p>不过，用户线程也需要有专门的结构来记录上下文信息。虚拟机在执行某个用户线程对应的代码时，如果分配给这个用户线程的时间片用完了，那么就需要保存这个用户线程的上下文，以便之后再次获得时间片之后重新继续执行。除此之外，虚拟机也需要为每个用户线程维护独立的栈（也就是函数调用栈）。</p><p>用户线程也叫做M:1线程模型。其中，M表示M个用户线程，1表示1个内核线程。我们知道，虚拟机本质上也是程序，在运行时，操作系统会为其创建进程，并且是单线程（这里的线程指的是内核线程）的进程。如下图所示。</p><figure><img src="http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/9538000_1657037000.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>操作系统线程调度算法调度的是内核线程，为内核线程之间公平地分配时间片。不管虚拟机中创建多少个用户线程，它们都只能共享一个内核线程的CPU时间片。因此，用户线程无法利用多核优势。即便一台计算机上只运行一个虚拟机，虚拟机上的多个用户线程也只能排队使用一个CPU资源，其他CPU资源都在白白浪费。这就是用户线程的相对于内核线程的弊端。</p><p>除此之外，用户线程在使用上还有另外的限制。在用户线程中，我们无法使用阻塞模式的系统调用，比如read()、write()等阻塞I/O系统调用。我们知道，在内核线程中，当我们调用read()、write()等阻塞I/O系统调用时，操作系统会让当前线程会让出时间片，切换为其他线程执行。对于用户线程来说，当一个用户线程中的代码调用了read()、write()等阻塞I/O系统调用时，对应的内核线程，就会被操作操作系统调度让出时间片，直到I/O读写完成才会放入就绪队列，重新排队等待分配时间片。也就是说，只要一个用户线程阻塞了，其他用户线程也无法工作了。</p><p>解决这个问题的办法就是，在用户线程中不要使用阻塞模式的系统调用。比如读写I/O，我们可以使用非阻塞的read()、write()系统调用。操作系统一般都会提供这类非阻塞的I/O系统调用，并且，内核线程在执行这类非阻塞的I/O系统调用时，不需要让出时间片，可以继续执行后续的代码。</p><p>当然，相对于阻塞模式的系统调用，非阻塞模式的系统调用使用起来很不方便。比如调用非阻塞的write()系统调用，应用程序需要轮询查看是否写入完成。为了解决这个问题，一般支持用户线程的编程语言，会使用非阻塞函数模拟实现阻塞函数。在用法上，让程序员感知好像是在使用阻塞函数，实际上，底层使用的是非阻塞的系统调用来实现的。</p><h3 id="四、混合线程" tabindex="-1"><a class="header-anchor" href="#四、混合线程" aria-hidden="true">#</a> <strong>四、混合线程</strong></h3><p>用户线程虽然可以避免使用内核线程导致的内核态和用户态的上下文切换，但是，用户线程也存在弊端，比如，一个进程内的用户线程无法利用多核并行运行，以及一个用户线程调用阻塞系统调用会阻塞一个进程中的所有用户线程。为了解决这些问题，于是，计算机科学家又发明了混合线程。混合线程又叫做M:N线程模型。</p><p>M:N线程模型表示一个进程中的M个用户线程对应N个内核线程，M一般大于N。如果M等于N，那就退化成了1:1线程模型。如果M小于N，那么多于的内核线程会浪费掉。如果应用程序创建M个用户线程，那么虚拟机就会使用操作系统提供的系统调用，创建N个内核线程来服务这M个用户线程。M个用户线程并不会绑定在一个内核线程上，因此，一个用户线程阻塞并不会导致所有的用户线程阻塞。同时，M个用户线程分散在N个内核线程上，不同的用户线程可以分散在不同的CPU上执行，也就利用到了计算机多核的优势。</p><figure><img src="http://wechatapppro-1252524126.file.myqcloud.com/appnvnpyonz2273/image/ueditor/87016300_1657037000.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>当然，相对于1:1线程模型和M:1线程模型，M:N线程模型实现起来也比较复杂。刚刚我们讲到，使用M:1模型实现的用户线程，也称为协程。实际上，不严格的讲，使用M:N模型实现的线程，也可以称为是协程。Go语言中的线程就是基于M:N模型来实现的，有时候也被叫做Go协程。</p><h3 id="五、java线程的实现原理" tabindex="-1"><a class="header-anchor" href="#五、java线程的实现原理" aria-hidden="true">#</a> <strong>五、Java线程的实现原理</strong></h3><p>Java线程有两种实现方法，一种叫Green Thread，一种叫Native Thread。</p><p>实际上，Green Thread就是用户线程模型，也就是M:1线程模型。之所有叫Green Thread，是因为开发这个项目的团队名称叫Green Team，因此，他们把开发的线程库命名为Green Thread。实际上，Green Thread只存在于早期JDK版本中（JDK1.1和JDK1.2），在JDK1.3中便已经废弃，取而代之是Native Thread。</p><p>Native Thread实际上就是内核线程模型，也就是1:1线程模型。Java提供的线程库，只不过是对操作系统提供的操作内核线程的系统调用的二次封装。线程的调度由操作系统来完成，因此，Java线程库实现起来非常简单。</p><p>每个操作系统的内核线程实现都有细微差别，比如线程的状态定义、线程的优先级划分等等都有可能不同。Java作为跨平台编程语言，需要提供统一编程接口。为了封装各个操作系统中线程实现的差别，Java线程库定义了自己的线程状态和优先级，并且定义了线程状态和优先级跟各个操作系统中线程状态和优先级的映射关系。</p><p>在<a href="#%E4%B8%89%E3%80%81%E7%BA%BF%E7%A8%8B%E7%8A%B6%E6%80%81">线程状态</a>中，我们讲到，操作系统中基本的线程状态有5个，分别是：NEW、READY、RUNNING、WAITING、TERMINATED。<strong>而Java中定义了6个线程状态，分别是：NEW、RUNNABLE、WAITING、TIMED_WAITING、BLOCKED、TERMINATED。关于Java中各个线程状态的含义、触发条件、跟操作系统线程状态的映射关系，我们在后面章节中详细讲解。</strong></p><p>除此之外，Java线程中定义了10个级别的线程优先级（从1到10），跟线程状态类似，Java定义的线程优先级跟操作系统定义的线程优先级也并非一一对应，例如，Linux优先级有140个，Window线程优先级有7个。</p><h2 id="思考题" tabindex="-1"><a class="header-anchor" href="#思考题" aria-hidden="true">#</a> 思考题</h2><p><strong>线程概述问题：</strong></p><p>1）除了进程上下文切换、线程上下文切换、系统调度导致的内核态和用户态的上下文切换，你还能想到有哪些其他的上下文切换？</p><p>2）如果N个线程运行在N个CPU，是否还会有线程切换？</p><p><strong>线程模型问题：</strong></p><p>3）用户线程模型，也就是M:1线程模型，因为无法利用多核优势，是不是就一无是处呢？</p>',87),n=[i];function o(s,d){return r(),e("div",null,n)}const g=a(t,[["render",o],["__file","thread.html.vue"]]);export{g as default};
