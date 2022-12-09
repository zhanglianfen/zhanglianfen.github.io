import{_ as i,V as l,W as d,X as e,Y as n,Z as r,a1 as s,y as t}from"./framework.02eddb67.js";const p={},c=s(`<h1 id="程序本质" tabindex="-1"><a class="header-anchor" href="#程序本质" aria-hidden="true">#</a> 程序本质</h1><blockquote><p><strong>代码是如何被执行的？CPU、操作系统、虚拟机各司何职？</strong></p></blockquote><p>在开篇词中，我们讲到，专栏并非讲解Java语法如何使用，而是探究更本质的东西，本节，我们就来探讨一下，代码是如何被执行的？在执行的过程中，CPU、操作系统、虚拟机都起了什么样的作用？不过，本节的内容偏向整体的、粗略的介绍，对于各个知识点更加详细的讲解，我们会在专栏后面的内容中慢慢输出。</p><h2 id="一、解释型、编译型、混合型语言" tabindex="-1"><a class="header-anchor" href="#一、解释型、编译型、混合型语言" aria-hidden="true">#</a> 一、解释型、编译型、混合型语言</h2><p>要回答上述问题，我们要从最基础的讲起。</p><p>我们知道，CPU只认识机器指令（也叫做CPU指令、机器码），用像Python、C++、Java这样的高级语言编写的代码，需要编译（编译的意思实际上就是“翻译”）为机器指令之后，才能被CPU执行。而不同类型的语言，其编译过程也是不同的，据此我们将其分为三类。</p><p><strong>1）编译型语言</strong></p><p>对于类似C++这样的编译型语言，代码会事先被编译成机器指令（可执行文件），然后再一股脑儿交给CPU来执行。在执行时，CPU面对是已经编译好的机器指令，直接逐条执行即可，执行效率比较高。但因为每种类型的CPU（比如Intel、ARM等）支持的CPU指令集不同，并且程序还有可能调用操作系统提供的API，所以，编译之后的可执行文件只能在特定的操作系统和机器上执行，换一种操作系统或机器，编译之后的可执行文件就无法执行了。</p><p><strong>2）解释型语言</strong></p><p>对于类似Python这样的解释型语言，代码并不会被事先编译成机器指令，而是在执行的过程中，由Python虚拟机（也叫做解释器）逐条取出程序中的代码，编译成机器指令，交由CPU执行，完成之后，再取出下一条代码，重复上述的编译、执行过程。这种一边编译一边执行的过程，叫做解释执行。</p><p>解释型语言相对于编译型语言，执行速度会慢一些。因为程序是在执行的过程中一边编译一边执行的，所以，程序整体的执行时间包含了程序编译的时间。不过，使用解释性语言编写的代码，可移植性更好。程序在执行的过程中，虚拟机可以根据当前所在机器的CPU类型和操作系统类型，翻译成不同的CPU指令。这样，同一份代码就可以运行在不同类型的机器和不同类型的操作系统上。这就是常听到的“一次编写，多处运行”。</p><p><strong>3）混合型语言</strong></p><p>Java语言比较特殊，它属于混合型语言，既包含编译执行也包含解释执行。</p><p>Java编译器会先将代码（.java文件）编译成字节码（.class文件）而非机器码，字节码算是Java代码的一种中间状态，其跟平台无关，但又可以快速地被翻译成机器码。编译之后的字节码在执行时，仍然是解释执行的，也就是逐行读出字节码，然后翻译成机器码，再交给CPU执行。只不过，从字节码到机器码的翻译过程，比从高级语言到机器码的翻译过程，耗时要少。这样既保证了Java代码的可移植性（同一份代码可以运行在不同的CPU和操作系统上），又避免了解释执行效率低的问题。</p><p>实际上，在解释执行时，也存在编译执行。Java虚拟机会将热点字节码（反复多次执行的代码，类似缓存中的热点数据），编译成机器码缓存起来，以供反复执行，这样就避免了热点字节码反复编译，进一步节省了解释执行的时间。这就是著名的JIT编译（Just In Time Compile，即时编译），这部分内容会在专栏的第三部分中详细讲解，这里就暂不展开。</p><h2 id="二、cpu、操作系统、虚拟机" tabindex="-1"><a class="header-anchor" href="#二、cpu、操作系统、虚拟机" aria-hidden="true">#</a> 二、CPU、操作系统、虚拟机</h2><p>上面反复提到了CPU、操作系统、虚拟机，现在，我们就来看下，它们在程序的执行过程中，扮演了什么角色。CPU的工作非常明确，用来执行编译好的机器指令，我们重点看下操作系统和虚拟机。</p><p><strong>1）操作系统在程序执行中的作用</strong></p><p>早期的计算机还没有高级语言和操作系统，程序员用机器指令编写的代码，通过纸带打卡方式记录下来，传输给计算机（可以理解为CPU）直接执行。</p><p>随着硬件资源越来越丰富，计算机中开始集成各种硬件设备，比如内存、硬盘、各种输入输出（键盘、鼠标、显示器等），并且，人们希望多个程序能在计算机中并发执行（比如听歌的同时还能打字），于是，操作系统就诞生了。</p><p>操作系统用来管理硬件资源和调度程序的执行。打个比如，CPU等硬件就好比车间中的机器，工人就像操作系统，一个个程序就像一个个待执行的任务。工人（操作系统）调度机器（CPU等硬件）来执行各个任务（程序）。</p><p>除此之外，操作系统还担当了类库的作用。对于通用的功能代码，比如读写硬盘等，没必要在每个程序中都从零编写一遍。操作系统将这些通用的功能代码，封装成API（专业名称叫做系统调用），供我们在编写应用程序时直接调用。也就是说，在应用程序的执行过程中，CPU可能会跳转去执行操作系统中的某段代码。当然，这段代码肯定是已经编译好的机器指令。</p><p><strong>2）虚拟机在程序执行中的作用</strong></p><p>我们先下来对比一下，C++代码、Python代码、Java代码编译和执行的命令。如下所示。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// C++
$ g++ helloword.cpp -o helloworld
$ ./helloword

// Python
$ python helloworld.py

// Java
$ javac HelloWorld.java
$ java HelloWorld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>仔细观察上述命令行的区别，我们可以看出，C++编译之后的代码直接就可以执行，而Python和Java代码的执行，需要依赖其他程序，也就是虚拟机，表现在命令行中就是前面有python、java字样。</p><p>使用解释型和混合型语言编写的代码，执行过程都需要虚拟机的参与。实际上，虚拟机本身也可以看做一个程序，而且它已经是CPU可以执行的机器指令了。程序员编写的代码相当于嵌套在虚拟机程序中一个插件（或者功能模块），只不过，它跟虚拟机本身的代码有点不同，无法直接交给CPU执行。虚拟机将字节码翻译成CPU指令，放到固定的内存位置，再通过修改CPU寄存器中存储的地址的方式，引导CPU执行这块内存中存储的CPU指令（关于这一部分，我们待会会详细讲解）。</p><p>如果你是一名经验丰富的Java工程师，不知道你有没有感觉到，虚拟机的这套解释执行的机制，跟Java的反射语法异曲同工，反射是在代码的执行过程中，将字符串（类名、方法名等）转化成代码之后再被执行。而虚拟机的解释执行是将字节码（也可以看做是字符串）转化成CPU指令再执行。</p><p>站在操作系统和CPU的角度，Java程序编译之后的字节码跟虚拟机合并在一起，才算是一个完整的程序，才相当于C++编译之后的可执行文件。CPU在执行程序员编写的代码的同时，也在执行虚拟机代码。而且是先执行虚拟机代码，然后才是引导执行程序员编写的代码。</p><h2 id="三、cpu指令、汇编语言、字节码" tabindex="-1"><a class="header-anchor" href="#三、cpu指令、汇编语言、字节码" aria-hidden="true">#</a> 三、CPU指令、汇编语言、字节码</h2><p>前面反复提到CPU指令、字节码，估计你对此会很好奇，它们到底长什么样子。现在，我们就来具体看下。不过，提到CPU指令，免不了要讲一下汇编语言，所以，接下来，我们也会一并讲一下汇编语言。</p><p><strong>1）CPU指令</strong></p><p>前面提到，我们经常说的CPU指令、机器码、机器指令，实际上都是一个东西，就是CPU可以完成的操作。一条CPU指令包含的信息主要有：操作码、地址、数据三种，指明所要执行的操作、数据来源、操作结果去向。</p><p>CPU可以完成的所有的操作，叫做指令集。常见的指令集有X86、X86-64、ARM、MIPS等。不同的CPU支持的指令集可能不同（Intel CPU支持的X86指令集，ARM CPU支持指令集ARM）。当然，不同的CPU支持的指令集也可以相同（比如Intel和AMD的CPU都支持X86和X86-64指令集）。同一个CPU也可以支持多种指令集（Intel CPU支持的指令集有X86、X86-64以及其他扩展指令集）。CPU支持的指令集一般都非常庞大，例如Intel CPU支持2000多条指令，可以完成诸多不同类型的操作。</p><p><strong>2）汇编语言</strong></p><p>前面提到，在计算机发展的早期，程序员直接使用机器码来编写程序。但是，因为机器码是二进制码，所以，编写起来复杂、可读性也不好。为了解决这个问题，汇编语言就被发明出来了。汇编语言由一组汇编指令构成，汇编指令跟CPU指令一一对应，但汇编指令采用字符串而非二进制数来表示指令，所以，可读性好很多。实际上，CPU指令和汇编指令之间的关系，就类似IP地址和域名之间的关系，IP地址和域名一一对应，域名的可读性比IP地址好。</p><p>程序员使用汇编语言编写的代码，需要经过编译，翻译成机器码才能被CPU执行。这个编译过程有个特殊的名称，叫做“汇编”。C/C++语言的编译过程，实际上就包含汇编这一步骤。编译器先将C/C++代码编译成汇编代码，然后再汇编成机器码。</p><p>我们拿一段C语言代码来举例，如下所示，看看编译之后的汇编代码长什么样子。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">// hello.c</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> c <span class="token operator">=</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
  <span class="token keyword">return</span> c<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码编译成汇编代码，如下所示：</p><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>$ gcc -S hello.c
$ cat hello.s
_main:                                  ## @main
	.cfi_startproc
## %bb.0:
	pushq	%rbp
	.cfi_def_cfa_offset 16
	.cfi_offset %rbp, -16
	movq	%rsp, %rbp
	.cfi_def_cfa_register %rbp
	movl	$0, -4(%rbp)
	movl	$1, -8(%rbp)
	movl	$2, -12(%rbp)
	movl	-8(%rbp), %eax
	addl	-12(%rbp), %eax
	movl	%eax, -16(%rbp)
	movl	-16(%rbp), %eax
	popq	%rbp
	retq
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有同学可能有疑问，这个汇编代码跟他见过的不大一样，实际上，汇编指令跟CPU指令一一对应，相同指令集对应的汇编指令集都是一样的（比如上面的代码是Intel的CPU支持的X86指令集对应的汇编代码），只不过语法格式有可能不同。汇编语言主要有两种语法格式，一种是Intel风格的，一种是AT&amp;T风格的。上述汇编代码是AT&amp;T风格，对应的Intel风格如下所示。对比上下两段汇编代码，唯一的区别就是格式不同而已。注意下面这段代码添加了部分注释，汇编中的注释以分号开头。</p><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>$ gcc -S -masm=intel hello.c
$ cat hello.s
_main:                                  ## @main
	.cfi_startproc
## %bb.0:
	push	rbp
	.cfi_def_cfa_offset 16
	.cfi_offset rbp, -16
	mov	rbp, rsp
	.cfi_def_cfa_register rbp
	mov	dword ptr [rbp - 4], 0  ;安全word，没有实际意义
	mov	dword ptr [rbp - 8], 1  ;int a = 1; 存储在栈中rbp-8的位置
	mov	dword ptr [rbp - 12], 2 ;int b = 2; 存储在栈中rpb-12的位置
	mov	eax, dword ptr [rbp - 8] ;a的值累加在寄存器eax上
	add	eax, dword ptr [rbp - 12] ;b的值累加在寄存器eax上
	mov	dword ptr [rbp - 16], eax ;int c = a+b
	mov	eax, dword ptr [rbp - 16] ;return c。返回值通过eax返回给上层。
        ;所以，把c值赋值给eax。因为上一句指令结束之后，
        ;有可能还有其他运算还会用到eax（本程序比较简单，没有其他运算了），
        ;所以eax中的值有可能会被改变，所以程序返回时重新将c值重新赋值给eax。
	pop	rbp
	ret
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于没学习过汇编语言的同学，完全理解上述汇编代码可能比较困难。不过，这里，我们只需要简单了解汇编代码长什么样子，有个直观的认识即可。关于以上汇编代码的具体解释，我们在下一节会讲到。</p><p><strong>3）字节码</strong></p><p>我们常说，Java语言是跨平台的，&quot;write once, run anywhere&quot;（一次编写，多处运行）。程序员编写的代码，在不需要任何修改的情况下，就可以运行在不同的平台上（不同的操作系统和CPU）。</p><p>有人认为，Java语言之所以能跨平台，是字节码的功劳。因为字节码跟平台无关，我们在一个平台上编译得到的字节码，可以运行在其他平台上。</p><p>实际上，这样的观点是不确切的。毕竟没有字节码的解释型语言也可以跨平台。字节码诞生的目的是，克服解释型语言解释执行速度慢的缺点（字节码是介于高级语言和机器码之间的形态，比高级语言解释执行更快）。字节码跟平台无关，是为了让Java语言保留解释型语言跨平台的优点，而不是促使Java语言跨平台的最根本原因。这一点要搞清楚。</p><p>之所以Java语言能做到跨平台，最根本原因是有虚拟机的存在。Java代码跟平台无关，字节码跟平台无关，在编译执行过程中，总要有一个环节跟平台有关，不然，跟平台有关的、最终可以被CPU执行的机器码从何而来。俗话说的好，哪有什么岁月静好，只是有人帮你负重前行。跟平台有关的环节就是解释执行环节，而这个环节的主导者就是虚拟机。</p><p>虚拟机是已经编译好的可以被CPU执行的机器码，而机器码又是跟平台有关的，因此虚拟机必须跟平台有关。这也是为什么在不同的平台（操作系统和CPU）上，我们需要下载不同的Java虚拟机的原因。</p><p>​ <img src="https://personal-site-pictures.oss-cn-beijing.aliyuncs.com/img/280600_1650331141.jpeg" alt="img" loading="lazy"></p><p>明确了字节码的作用之后，我们通过一个简单的例子，来看下字节码到底长什么样子？</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloWorld</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> main <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">222222</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> c <span class="token operator">=</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于上面的代码，我们使用javac命令编译之后，会得到一个后缀为.class的文件HelloWorld.class，这个文件里保存的一堆二进制码就是字节码。为了方便查看，我们用vi打开转化成16进制格式之后，如下所示：</p><p>​ <img src="https://personal-site-pictures.oss-cn-beijing.aliyuncs.com/img/69417500_1650331141.jpeg" alt="img" loading="lazy"></p><p>这堆二进制码看似天书，实则有固定格式。下图是class文件的大体格式。例如，前4个字节为魔数（Magic Number），为固定值：0xCAFEBABE，用以表示此文件为字节码文件。紧跟着的4个字节表示编译器的JDK版本（major version和minor version）。当然，还有很多细节无法展示在下图中，在本节中，我们不展开介绍，在后面的内容中，慢慢学习。 <img src="https://personal-site-pictures.oss-cn-beijing.aliyuncs.com/img/64081800_1650331142.png" alt="img" loading="lazy"></p><p>显然，这样的二进制文件是交给虚拟机解析的，人类阅读起来非常费劲。我们可以使用javap工具，将class文件解析成适合人类阅读的格式，如下所示。这个过程被叫做反编译。为啥叫做反编译呢？我们可以跟“编译”对比着理解。编译是将贴近人阅读的内容，翻译成贴近机器阅读的内容的过程。对应地，反编译就是将贴近机器阅读的内容，翻译成贴近人阅读的内容的过程。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ javap -verbose HelloWorld 
Classfile /Users/wangzheng/Desktop/HelloWorld.class
  Last modified 2022-3-20; size 291 bytes
  MD5 checksum ea48b76348ad4f0c07a2bf96840e8e00
  Compiled from &quot;HelloWorld.java&quot;
public class HelloWorld
  minor version: 0
  major version: 52
  flags: ACC_PUBLIC, ACC_SUPER
Constant pool:
   #1 = Methodref          #4.#13         // java/lang/Object.&quot;&lt;init&gt;&quot;:()V
   #2 = Integer            222222
   #3 = Class              #14            // HelloWorld
   #4 = Class              #15            // java/lang/Object
   #5 = Utf8               &lt;init&gt;
   #6 = Utf8               ()V
   #7 = Utf8               Code
   #8 = Utf8               LineNumberTable
   #9 = Utf8               main
  #10 = Utf8               ([Ljava/lang/String;)V
  #11 = Utf8               SourceFile
  #12 = Utf8               HelloWorld.java
  #13 = NameAndType        #5:#6          // &quot;&lt;init&gt;&quot;:()V
  #14 = Utf8               HelloWorld
  #15 = Utf8               java/lang/Object
{
  public HelloWorld();
    descriptor: ()V
    flags: ACC_PUBLIC
    Code:
      stack=1, locals=1, args_size=1
         0: aload_0
         1: invokespecial #1   // Method java/lang/Object.&quot;&lt;init&gt;&quot;:()V
         4: return
      LineNumberTable:
        line 1: 0


  public static void main(java.lang.String[]);
    descriptor: ([Ljava/lang/String;)V
    flags: ACC_PUBLIC, ACC_STATIC
    Code:
      stack=2, locals=4, args_size=1
         0: iconst_1
         1: istore_1
         2: ldc           #2     // int 222222
         4: istore_2
         5: iload_1
         6: iload_2
         7: iadd
         8: istore_3
         9: return
      LineNumberTable:
        line 3: 0
        line 4: 2
        line 5: 5
        line 6: 9
}
SourceFile: &quot;HelloWorld.java&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不过，你有没有产生过这样的好奇，class文件为什么叫字节码？跟字节（byte）有什么关系呢？实际上，class文件里包含了很多类的信息，而其中main()函数中的代码对应的字节码指令（字节码指令是二进制的，下面的是反编译之后的助记符）只有下面这几行：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>         0: iconst_1  //把int型1入栈
         1: istore_1  //把栈顶int型数值存入第一个变量，也就是a
         2: ldc #2    //将常量池中的#2号常量222222入栈
         4: istore_2  //把栈顶int型数值存入第二个变量，也就是b
         5: iload_1   //把第一个变量的值入栈
         6: iload_2   //把第二个变量的值入栈
         7: iadd      //将栈顶的两个int型数据相加，结果压入栈
         8: istore_3  //将栈顶int型数值存入第三个变量，也就是c
         9: return    //程序返回
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一条字节码指令有些包含操作码和操作数两部分，有些只包含操作码这一部分。因为操作码长度为一个字节，所以，这种指令格式被叫做字节码。从另一个角度，我们也可以得知，字节码的操作码类型不超过256个（2^8）。相对于CPU指令和汇编指令，字节码指令少很多。这是因为字节码指令相对于CPU指令来说，抽象程度更高。一条字节码指令完成的逻辑，比一条CPU指令完成的逻辑，更加复杂。</p>`,61),v={href:"https://www.xzgedu.com/detail/i_625e1003e4b09dda125cbfc5/1?from=p_625cfab5e4b01a4851f30d8a&type=6&parent_pro_id=",target:"_blank",rel:"noopener noreferrer"},o=s(`<p>顺道提一句，在上述字节码中，a、b两个变量要先入栈中再计算，计算的结果也会放到栈中。为什么Java将c=a+b代码翻译成基于栈来运算的几条字节码呢？关于这一点，我们今天不展开讲解，在本专栏的JVM部分的基于栈的执行引擎中会给出答案。</p><h2 id="四、代码是如何被cpu执行的" tabindex="-1"><a class="header-anchor" href="#四、代码是如何被cpu执行的" aria-hidden="true">#</a> 四、代码是如何被CPU执行的？</h2><p>有了以上铺垫，我们最后讲解一下：“代码是如何被CPU执行的”。</p><p>不管是使用哪种类型的编程语言（编译型、解释型、混合型）编写的代码，不管经历什么样的编译、解释过程，最终交给CPU执行的都是机器码。</p><p><strong>提到CPU，就不得不提寄存器。</strong></p><p>我们知道，内存的读写速度比起CPU指令的执行速度要慢很多。从内存中读取32位二进制数据所耗费的时间，相当于CPU执行上百条指令所耗费的时间。所以，CPU在执行指令时，如果依赖内存来存储计算过程中的中间数据，那么，CPU总是在等待读写内存操作的完成，势必非常会影响CPU的计算速度。为了解决这个问题，寄存器就被发明出来了。</p><p>寄存器读写速度非常快，能够跟CPU指令执行速度相匹配。所以，数据会先读取到寄存器中再参与计算。不过，你可能会说了，数据在计算前需要先从内存读取到寄存器，计算之后存储在寄存器中的结果也要写入到内存，寄存器的存在并没有避免掉内存的读写，使用寄存器是不是多此一举呢？实际上，尽管最初数据来源于内存，最后计算结果也要写入内存，但中间的计算过程涉及到一些临时结果的存取，都可以在寄存器中完成，不用跟非常慢速的内存进行交互。顺便说一句，计算机为了提高CPU读写内存的速度，还引入了L1、L2、L3这三级缓存。</p><p>寄存器为了做到能让CPU高速访问，硬件设计比较特殊（高成本、高能耗），且与CPU距离很近（相对于内存来说，寄存器直接跟CPU集成在一起），这些也决定了寄存器的个数不会很多。不同的CPU包含的寄存器会有所不同。常见的寄存器有以下几类。</p><p><strong>1）通用寄存器：AX，BX，CX，DX</strong></p><p>通用寄存器区别于下面要讲到的特殊寄存器，它们一般用来存储普通数据。AX，BX，CX，DX这四种通用寄存器的用途又有所区别，比如AX是累加器，这些细节我们就不展开讲解了。</p><p><strong>2）指针寄存器：BP，SP，SI，DI，IP</strong></p><p>BP（Base Pointer Register）和SP（Stack Pointer Register）是用于存储栈空间地址的寄存器，SP存储栈顶地址，BP比较特殊，一般存储栈中一个栈帧的栈底地址。这一部分在下一节讲解函数的执行过程时再详细讲解。</p><p>SI（Source Index Register）源地址寄存器和DI（Destination Index Register）目的地址寄存器，分别用来存储读取和写入数据的内存地址。</p><p>IP（Instruction Pointer Register）指令指针寄存器存储下一条将要执行的指令的内存地址（此处的描述不够准确，下文解释）。</p><p><strong>3）段寄存器：CS，DS，SS</strong></p><p>程序由一组指令和一堆数据组成。指令存储在某块内存中（这块内存被称为代码段），由CPU逐一读取执行。数据也存储在某块内存中（这块内存被称为数据段）。指令执行的过程中，会操作（读取或写入）这块内存中的数据。</p><p>CS（Code Segment Register）代码段地址寄存器存储了代码段的起始地址。上文中讲到，IP寄存器中存储的是下一条将要执行的指令的内存地址，实际上，这样的说法是不准确的。CS和IP两个寄存器中存储的内容如下计算，才能得到一个真正的物理内存地址。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>物理内存地址 = 段地址（如CS） * 16 + 偏移地址（如IP）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们拿8086 CPU（早期16位的X86 CPU）举例解释。8086 CPU具有20位地址总线，支持1MB内存的寻址能力。对于16位的IP寄存器，只能存储64K（2^16）个内存地址，一个字节占一个地址，那么只能支持64KB大小内存的寻址。为了扩大寻址能力，计算机使用段地址和偏移地址相结合的方式来确定一个物理内存地址。</p><p>对于存储下一条将要执行的指令的寄存器，你或许还听到过PC寄存器（Program Counter Register）这种叫法。实际上，PC寄存器是一个抽象概念，CS寄存器和IP寄存器是具体寄存器的名称。我们可以简单理解为PC寄存器就是CS寄存器和IP寄存器的抽象统称。</p><p>DS（Data Segment Register）数据段地址寄存器存储了数据段的起始地址，同理，它跟DI或SI结合才能确定一个数据段中的内存地址。</p><p>SS（Stack Segment Register）栈寄存器存储的是栈的起始地址，同理，它跟SP结合才能确定栈顶的内存地址，跟BP结合才能确定栈中某个中间位置的内存地址。有些同学看到这里可能会有疑问，数据段是存储数据的，栈也是存储数据，这两者有什么联系呢？关于这个问题，我们在下一节文章中会讲到。</p><p><strong>4）指令寄存器：IR</strong></p><p>IR（Instruction Register）指令寄存器用来存放当前正在执行的指令。指令为一串二进制码，指令译码器需要从指令中解析出操作码和操作地址或操作数。所以，指令需要暂存在指令寄存器中等待译码处理。</p><p><strong>5）标志寄存器</strong></p><p>FR（Flag Register）标志寄存器，也叫做程序状态字寄存器（Program Status Word，PSW）,在这个寄存器中的每一个二进制位记录一类状态。比如cmp比较大小指令的运算结果会存储在ZF零标志位或CF进位标志位中。关于更多细节，我们不展开讲解。</p><p>以上寄存器都是用来辅助完成CPU的各种指令。注意，以上是16位的寄存器，32位的寄存器名称在对应的16位寄存器名称前加E（例如EAX，EBP，ESP，EIP），64位的寄存器名称在对应的16位寄存器名称前加R（例如RAX，RBP，RSP，RIP）。在下一节中，在讲解编程语言基本语法的底层实现原理时，我们还会提到更多寄存器的使用细节。</p><p><strong>了解了CPU指令执行的重要部件寄存器之后，我们来看下CPU执行指令的流程。</strong></p><p>对于编译型语言，操作系统会把编译好的机器码，加载到内存中的代码段，将代码中变量等数据放入内存中的数据段，并且设置好各个寄存器的初始值，如DS、CS等。IP寄存器中存储代码段中第一条指令的内存地址相对于CS的偏移地址。</p><p>CPU根据PC寄存器（CS寄存器和IP寄存器的总s称）存储的内存地址，从对应的内存单元中取出一条CPU指令，放到IR指令寄存器中，然后将IP寄存器中的地址+4（也就是下一条指令在代码段中的偏移地址。内存中的每一个字节都对应一个地址。对于32位CPU，一条指令长度为4字节，下一条指令地址=当前指令地址+4。对于64位CPU，一条指令长度是8字节，下一条指令地址=当前指令地址+8）。一条指令执行完成之后，再通过PC寄存器中的地址，取下一条指令继续执行。循环往复，直到所有的指令都执行完成。</p><p>对于解释型或混合型语言，操作系统将虚拟机本身的机器码，加载到内存中的代码段，然后一条一条地被CPU执行。这部分被执行的指令对应的功能，就包括把程序员编写的程序解释成机器码这一功能。虚拟机把解释好的机器码会放到某段内存中，然后将PC寄存器的地址设置为这段内存的首地址，于是，CPU就被虚拟机引导去执行程序员编写的代码了。</p><p>在本节中，我们把程序用到的内存，粗略地分为代码段和数据段，对于Java语言来说，其虚拟机对内存还做了更加细致的划分，这部分内容我们在专栏的JVM部分讲解。</p><h2 id="五、课后思考题" tabindex="-1"><a class="header-anchor" href="#五、课后思考题" aria-hidden="true">#</a> 五、课后思考题</h2><p>1）在你熟悉的语言中，有哪些是解释型语言？哪些是编译型语言？哪些是混合型语言？</p><p>2）本节中提到，C/C++代码会先编译成汇编代码，再汇编成机器码，才能被执行。按理来说，汇编代码跟机器码一一对应，为什么C/C++代码不直接编译成机器码呢？先编译成汇编代码不是多此一举吗？</p><p>注：对于课后思考题，你都可以在专栏中找到答案，比如今天的第二道题目，在本专栏的JVM部分的第一篇文章中就会讲解。</p>`,36);function u(m,b){const a=t("ExternalLinkIcon");return l(),d("div",null,[c,e("p",null,[n("Java8的字节码指令集"),e("a",v,[n("点击此处"),r(a)]),n("查看。")]),o])}const P=i(p,[["render",u],["__file","1.program.html.vue"]]);export{P as default};