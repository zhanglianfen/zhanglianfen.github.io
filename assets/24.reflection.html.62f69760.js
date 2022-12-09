import{_ as e,V as n,W as i,a1 as s}from"./framework.02eddb67.js";const l={},a=s(`<h1 id="反射" tabindex="-1"><a class="header-anchor" href="#反射" aria-hidden="true">#</a> 反射</h1><blockquote><p><strong>为什么通过反射创建对象要比使用new创建对象慢？</strong></p></blockquote><p>尽管在平时的业务开发中，我们很少会用到反射、注解、动态代理这些比较高级的Java语法，但是，在框架开发中，它们却非常常用，可以说是支撑框架开发的核心技术。比如，我们常用的Spring框架，其中的IOC就是基于反射实现的，AOP就是基于动态代理实现的，配置就是基于注解实现的。尽管在业务开发中，我们不常用到它们，但是，要想阅读开源框架的源码，掌握这些技术是必不可少的。接下来，我们就来讲讲反射、注解、动态代理。本节我们重点讲下反射。</p><h2 id="一、反射的作用" tabindex="-1"><a class="header-anchor" href="#一、反射的作用" aria-hidden="true">#</a> <strong>一、反射的作用</strong></h2><p>反射的作用主要有3个：创建对象、执行方法、获取类信息。</p><p><strong>1）创建对象</strong></p><p>在编写代码的时候，我们通过new语句用来创建对象。代码中有多少条new语句，JVM就会创建多少个对象。但是，并不是所有的对象的创建，都是在编写代码时事先知道的。如果在代码的运行过程中，我们需要根据配置、输入、执行结果等，动态创建一些额外的对象，这个时候我们无法使用new语句了。我们需要有一种新的方法，在程序运行期间，动态地告知JVM去创建某个类的对象。这种方法就是反射。</p><p>不管是new还是反射，对象的创建都是在运行时进行的，不过申请创建对象的时机却是不同的。通过new来创建对象，其创建对象的需求是在代码编写时确定的，而通过反射来创建对象，其创建对象的需求是在运行时是确定的。因此，我们把通过new语句的方式来创建对象叫做静态申请对象创建，我们把通过反射的方式来创建对象叫做动态申请对象创建。</p><p><strong>2）执行方法</strong></p><p>除了在程序运行期间动态申请对象创建之外，程序还可以动态申请执行方法。跟创建对象类似，尽管执行方法总是发生在运行时，但是申请执行方法的时机却可以不同。一般来讲，程序会执行哪些方法，在代码编写时就确定了。但是，如果在运行时，额外申请新的要执行的方法，这个时候，就只能依靠反射来实现了。稍后讲到的动态代理，实际上，就是依赖反射可以动态执行方法来实现的。</p><p>不管是反射创建对象，还是执行方法，实际上，跟普通的对象创建和方法执行，本质上没有太大区别。只不过是告知JVM的时机和方式不同而已。</p><p><strong>3）获取类信息</strong></p><p>除了创建对象、执行方法之外，反射还能够获取对象的类信息，包括类中的构造函数、方法、成员变量等信息。稍后要讲到的注解，实际上，就是依赖反射的这个作用。</p><h2 id="二、反射的用法" tabindex="-1"><a class="header-anchor" href="#二、反射的用法" aria-hidden="true">#</a> <strong>二、反射的用法</strong></h2><p>实现上述反射的这3个作用需要4个类：Class、Method、Constructor、Field，这也是反射所涉及的核心类，接下来，我们依次来介绍一下这4个类。</p><p><strong>1）Class</strong></p><p>Class跟关键字class容易混淆，Class实际上跟Person、String等一样，也是一个类，只是其比较特殊，存储的是类的信息。Class类提供了大量的方法，可以获取类的信息，比如获取类中的方法，获取构造函数，获取成员变量等。我们将重要的常用到方法罗列如下，当然，你也可以查看java.lang.Class源码来了解更多细节。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 获取类信息
public static Class&lt;?&gt; forName(String className)；

// 获取类名
public String getName();
public String getSimpleName();

// 获取父类信息
public native Class&lt;? super T&gt; getSuperclass();

// 获取package信息
public Package getPackage()

// 获取接口信息
public Class&lt;?&gt;[] getInterfaces();

// 获取成员的变量，包含私有成员变量，不包含父类成员变量
public Field[] getDeclaredFields();
public Field getDeclaredField(String name);

// 获取成员变量，只包含公有成员变量，包含父类成员变量
public Field[] getFields();
public Field getField(String name);

// 获取类的方法，包括私有方法，不包含父类方法
public Method[] getDeclaredMethods();
public Method getDeclaredMethod(String name, Class&lt;?&gt;... parameterTypes);

// 获取类的方法，只包含公有方法，包含父类方法
public Method[] getMethods();
public Method getMethod(String name, Class&lt;?&gt;... parameterTypes);

// 获取构造函数，只包含公共构造函数
public Constructor&lt;?&gt;[] getConstructors();
public Constructor&lt;T&gt; getConstructor(Class&lt;?&gt;... parameterTypes);

// 获取构造函数，包含私有构造函数
public Constructor[] getDeclaredConstructors();
public Constructor getDeclaredConstructor(Class... parameterTypes);

// 获取类上的注解
public Annotation[] getAnnotations();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了获取类信息的方法之外，Class类还提供了方法来创建对象，如下所示。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 创建类对象
public T newInstance();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>一般来讲，我们有以下3种方式来创建Class类对象。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 方法一：使用forName()+类名全称
Class&lt;?&gt; clazz = Class.forName(&quot;com.wz.demo.Student&quot;);

// 方法二
Class&lt;?&gt; clazz = Student.class;
Class&lt;Student&gt; clazz = Student.class;

// 方法三
Class&lt;?&gt; clazz = student.getClass();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上述代码，我们可以发现，实际上，Class类是一个泛型类。如果我们无法提前知道获取的类的信息是哪个类的，那么我们就可以使用？通配符来具体化泛型类。如果我们可以明确获取的是哪个类的信息，那么我们可以直接使用具体类型具体化泛型类。不过，方法一、方法三并不能像下面这样具体化Class类，因为forName()函数和getClass()函数在函数定义中的返回值本来就是<code>Class&lt;?&gt;</code>，<code>Class&lt;?&gt;</code>类型的返回值不能赋值给<code>Class&lt;Student&gt;</code>。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//不正确的使用方法
Class&lt;Student&gt; clazz = Class.forName(&quot;com.wz.demo.Student&quot;);
Class&lt;Student&gt; clazz = student.getClass(); 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2）Constructor</strong></p><p>Constructor用来存储构造函数的信息。如下所示。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 构造函数所包含的信息
// 在Constructor中，以下信息都有相应的方法来获取
public final class Constructor&lt;T&gt; extends Executable {
    private Class&lt;T&gt;            clazz;
    private int                 slot;
    private Class&lt;?&gt;[]          parameterTypes;
    private Class&lt;?&gt;[]          exceptionTypes;
    private int                 modifiers;
    // Generics and annotations support
    private transient String    signature;
    // generic info repository; lazily initialized
    private transient ConstructorRepository genericInfo;
    private byte[]              annotations;
    private byte[]              parameterAnnotations;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Constructor类也提供了一些方法来获取以上信息，这里我们就不一一列举了，你可以查看java.lang.reflect.Constructor类源码去自行了解。这里介绍一下Constructor类中常用的newInstance()方法，如下所示。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public T newInstance(Object ... initargs);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过newInstance()方法，我们可以调用构造函数来创建对象。你应该也已经注意到，Class类中也包含newInstance()方法。区别在于，Class类上的newInstance()方法只能通过无参构造函数来创建对象，如果想要使用有参构造函数创建对象，我们需要先获取对应的Constructor类对象，然后再调用其上的newInstance()方法。稍后会有代码示例。</p><p><strong>3）Method</strong></p><p>Method存储的是方法的信息。如下所示。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public final class Method extends Executable {
    private Class&lt;?&gt;            clazz;
    private int                 slot;
    // This is guaranteed to be interned by the VM in the 1.4
    // reflection implementation
    private String              name;
    private Class&lt;?&gt;            returnType;
    private Class&lt;?&gt;[]          parameterTypes;
    private Class&lt;?&gt;[]          exceptionTypes;
    private int                 modifiers;
    // Generics and annotations support
    private transient String              signature;
    // generic info repository; lazily initialized
    private transient MethodRepository genericInfo;
    private byte[]              annotations;
    private byte[]              parameterAnnotations;
    private byte[]              annotationDefault;
    private volatile MethodAccessor methodAccessor;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同时，Method类也提供了大量方法来获取以上信息，这里我们也不一一罗列了。感兴趣的话，你可以查看java.lang.reflect.Method类的源码。这里我们介绍一下常用的invoke()方法，如下所示，调用此方法可以执行对应方法。稍后会有代码示例。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public Object invoke(Object obj, Object... args);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>4）Field</strong></p><p>Filed用来存储成员变量的信息，如下所示。同样，Field类也提供了大量方法来获取以下信息，这里我们也不一一罗列了。感兴趣的话，你可以查看java.lang.reflect.Field类的源码。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public final class Field extends AccessibleObject implements Member {
    private Class&lt;?&gt;            clazz;
    private int                 slot;
    // This is guaranteed to be interned by the VM in the 1.4
    // reflection implementation
    private String              name;
    private Class&lt;?&gt;            type;
    private int                 modifiers;
    // Generics and annotations support
    private transient String    signature;
    // generic info repository; lazily initialized
    private transient FieldRepository genericInfo;
    private byte[]              annotations;
    // Cached field accessor created without override
    private FieldAccessor fieldAccessor;
    // Cached field accessor created with override
    private FieldAccessor overrideFieldAccessor;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、反射攻击" tabindex="-1"><a class="header-anchor" href="#三、反射攻击" aria-hidden="true">#</a> <strong>三、反射攻击</strong></h2><p>上面罗列了Class、Constructor、Method、Field中的常用方法，实际上，在Constructor、Method、Field类中，包含一个公共的方法，能够改变构造函数、方法、成员变量的访问权限，</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public void setAccessible(boolean flag);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>利用这个方法，我们可以将私有的构造函数、方法、成员变量设置为可访问的，这样就可以超越权限限制，在代码中访问私有的构造函数、方法和成员变量。示例代码如下所示。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Demo {
  public static class Person {
    private int age;
    private Person() {}
    private void print() {
      System.out.println(this.age);
    }
  }

  public static void main(String[] args) throws Exception {
    Class&lt;?&gt; clazz = Class.forName(&quot;com.wz.demo.Demo$Person&quot;);

    Constructor&lt;?&gt; constructor = clazz.getDeclaredConstructor();
    constructor.setAccessible(true);
    Person pobj = (Person) constructor.newInstance();

    Field field = clazz.getDeclaredField(&quot;age&quot;);
    field.setAccessible(true);
    field.set(pobj, 10);

    Method method = clazz.getDeclaredMethod(&quot;print&quot;);
    method.setAccessible(true);
    method.invoke(pobj);
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在《设计模式之美》中，我们有讲到单例模式。单例模式只允许单例类实例化一个对象。单例模式有很多实现方式，其中一种实现方法如下所示，我们通过将构造函数设置为私有的，来禁止外部代码创建新的对象。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class IdGenerator { //单例
  private AtomicLong id = new AtomicLong(0);
  private static final IdGenerator instance = new IdGenerator();
  
  private IdGenerator() {}
  
  public static IdGenerator getInstance() {
    return instance;
  }
  
  public long getId() {
    return id.incrementAndGet();
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不过，通过反射，我们仍然可以绕开代码中的访问权限控制，调用私有的构造函数，实例化新的对象，如下所示，这种打破单例类只能实例化一个对象的限制的情况，就叫做反射攻击。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Demo {
  public static void main(String[] args) throws Exception {
    Class&lt;?&gt; clazz = Class.forName(&quot;com.wz.demo.IdGenerator&quot;);
    Constructor&lt;?&gt; constructor = clazz.getDeclaredConstructor();
    constructor.setAccessible(true);
    IdGenerator idGenerator = (IdGenerator) constructor.newInstance();
    System.out.println(idGenerator.getId());
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、反射的应用" tabindex="-1"><a class="header-anchor" href="#四、反射的应用" aria-hidden="true">#</a> <strong>四、反射的应用</strong></h2><p>在《设计模式之美》中，我们讲到，Spring可以作为一种IOC容器（也叫做DI容器，依赖注入容器），实际上，IOC容器就是一个大的工厂类，负责在程序启动时，根据配置，事先创建好对象。当应用程序需要使用某个对象时，直接从容器中获取即可。</p><p>在普通的工厂模式中，工厂类要创建哪个对象是事先确定好的，并且是写死在工厂类代码中的。作为一个通用的框架来说，框架代码跟应用代码应该是高度解耦的，IOC容器事先并不知道应用会创建哪些对象，不可能把某个应用要创建的对象写死在框架代码中。应用程序通过配置文件，定义好需要创建的对象。IOC容器读取配置文件，并将每个要创建的对象信息，解析为一定的内存结构：BeanDefinition，然后根据BeanDefinition中的信息，通过反射创建对象。</p><p>对于IOC容器的完整实现，我们在《设计模式之美》中有详细介绍。这里，我们重点展示跟反射有关的部分，也就是根据BeanDefinition创建对象。代码如下所示。在下列代码中，我们使用Class.forName()来创建对象，对于无参构造，我们使用Class对象上的newInstance()来创建对象，对于有参构造，我们先获取对应的Constructor对象，然后调用Constructor对象上的newInstance()来创建对象。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class BeansFactory {
  private ConcurrentHashMap&lt;String, Object&gt; singletonObjects
                                         = new ConcurrentHashMap&lt;&gt;();
  private ConcurrentHashMap&lt;String, BeanDefinition&gt; beanDefinitions 
                                         = new ConcurrentHashMap&lt;&gt;();

  public void addBeanDefinitions(List&lt;BeanDefinition&gt; beanDefinitionList) {
    for (BeanDefinition beanDefinition : beanDefinitionList) {
      this.beanDefinitions.putIfAbsent(beanDefinition.getId(), beanDefinition);
    }

    for (BeanDefinition beanDefinition : beanDefinitionList) {
      if (beanDefinition.isLazyInit() == false &amp;&amp; beanDefinition.isSingleton()) {
        createBean(beanDefinition);
      }
    }
  }

  public Object getBean(String beanId) {
    BeanDefinition beanDefinition = beanDefinitions.get(beanId);
    if (beanDefinition == null) {
      throw new NoSuchBeanDefinitionException(&quot;Bean is not defined: &quot; + beanId);
    }
    return createBean(beanDefinition);
  }

  @VisibleForTesting
  protected Object createBean(BeanDefinition beanDefinition) {
    if (beanDefinition.isSingleton() 
        &amp;&amp; singletonObjects.contains(beanDefinition.getId())) {
      return singletonObjects.get(beanDefinition.getId());
    }

    Object bean = null;
    try {
      Class beanClass = Class.forName(beanDefinition.getClassName());
      List&lt;BeanDefinition.ConstructorArg&gt; args = beanDefinition.getConstructorArgs();
      if (args.isEmpty()) {
        bean = beanClass.newInstance();
      } else {
        Class[] argClasses = new Class[args.size()];
        Object[] argObjects = new Object[args.size()];
        for (int i = 0; i &lt; args.size(); ++i) {
          BeanDefinition.ConstructorArg arg = args.get(i);
          if (!arg.getIsRef()) {
            argClasses[i] = arg.getType();
            argObjects[i] = arg.getArg();
          } else {
            BeanDefinition refBeanDefinition = beanDefinitions.get(arg.getArg());
            if (refBeanDefinition == null) {
              throw new NoSuchBeanDefinitionException(arg.getArg());
            }
            argClasses[i] = Class.forName(refBeanDefinition.getClassName());
            argObjects[i] = createBean(refBeanDefinition);
          }
        }
        bean = beanClass.getConstructor(argClasses).newInstance(argObjects);
      }
    } catch (ClassNotFoundException | IllegalAccessException
             | InstantiationException | NoSuchMethodException 
             | InvocationTargetException e) {
      throw new BeanCreationFailureException(
          &quot;Create Bean failed: &quot; + beanDefinition.getId(), e);
    }

    if (bean != null &amp;&amp; beanDefinition.isSingleton()) {
      singletonObjects.putIfAbsent(beanDefinition.getId(), bean);
      return singletonObjects.get(beanDefinition.getId());
    }
    
    return bean;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、反射的原理" tabindex="-1"><a class="header-anchor" href="#五、反射的原理" aria-hidden="true">#</a> <strong>五、反射的原理</strong></h2><p>前面我们提到，使用反射来创建对象，跟使用new创建对象，大体的流程是一样，只不过向JVM申请创建对象的方式不同而已。但是，我们还经常听说，使用反射来创建对象，要比使用new创建对象，要慢很多。那这到底又是为什么呢？接下来，我们先做个实验来验证一下情况是否属实。测试代码如下所示。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Demo24_1 {
  public static class C {
    public void f() {}
  }
  
  public static void main(String[] args) throws Exception {
    // 使用new创建对象
    long start = System.currentTimeMillis();
    for (int i = 0; i &lt; 10000000; ++i) {
      C c = new C();
    }
    System.out.println(System.currentTimeMillis()-start);

    // 使用反射创建对象
    start = System.currentTimeMillis();
    for (int i = 0; i &lt; 10000000; ++i) {
      Class&lt;?&gt; clazz = C.class;
      Object obj = clazz.newInstance();
    }
    System.out.println(System.currentTimeMillis()-start);
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行上述代码，得到结果为：通过new创建对象的耗时为3ms，通过反射创建对象的耗时为31ms，差不多10倍的差距。尽管耗时有10倍的差距，但从耗时的绝对值上来看，通过反射创建1000万个对象，耗时才只有31ms，对于大部分应用程序来说都是可以接受的，绝大部分情况下，通过反射创建对象都不会是应用程序的性能瓶颈，我们不需要为反射带来的一丢丢性能损耗而担忧。</p><p>前面讲到，使用反射还可以动态的执行方法，那么，相比于直接执行方法，使用反射执行方法会不会也很慢呢？为了测试使用反射执行方法的性能，我们对上面的测试代码稍作修改，如下所示。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Demo24_1 {
  public static class C {
    public void f() {}
  }
  
  public static void main(String[] args) throws Exception {
    // 普通方法调用
    long start = System.currentTimeMillis();
    C c = new C();
    for (int i = 0; i &lt; 10000000; ++i) {
      c.f();
    }
    System.out.println(System.currentTimeMillis()-start);

    // 使用反射执行方法
    start = System.currentTimeMillis();
    Class&lt;?&gt; clazz = C.class;
    Object obj = clazz.newInstance();
    for (int i = 0; i &lt; 10000000; ++i) {
      Method method = clazz.getMethod(&quot;f&quot;);
      method.invoke(obj);
    }
    System.out.println(System.currentTimeMillis()-start);
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行上述代码，得到的结果为：普通方法调用的耗时为3ms，而使用反射执行方法的耗时为1259ms，有几百倍的差距。这个差距就比较大了。尽管性能差距如此大，但我们也不必为使用反射导致方法执行性能下降而担忧。这是为什么呢？</p><p>原因有二。其一是：使用反射执行方法，并不会让方法内部逻辑的执行速度变慢，只是增加了一些额外耗时而已，这部分额外的耗时是固定的，跟方法内部逻辑的复杂程度无关。其二是：1000万次方法调用才耗时1259ms，平均执行一次方法的增加的额外耗时为0.0001259ms，非常小，对于大部分方法来说，特别是一些包含IO操作的方法（比如访问数据库），方法本身内部逻辑执行的耗时远远大于使用反射而额外增加的耗时，因此，在大部分情况下，我也并不需要担心使用反射执行方法导致的一丢丢性能下降。</p><p>那么，相比普通的对象创建和执行，使用反射创建对象和执行方法，增加的额外耗时产生在哪里呢？</p><p><strong>1）安全性检查</strong></p><p>对于普通的对象创建和执行，大量的安全性检查，比如传入某个方法的数据类型必须与参数类型匹配、在某个对象上调用某个方法必须确保这个对象有这个方法，这些都是在编译时完成的，不占用运行时间，但是，对于反射，因为其是在运行时才确定创建什么对象、执行什么方法的，所以，安全性检查无法在编译时执行，只能在运行时真正创建创建、执行方法时再完成，那么这就会增加额外的运行时间。</p><p><strong>2）类、方法查找</strong></p><p>当我们使用反射创建对象或执行方法时，我们需要通过类名、方法名去查找对应的类或方法，而类名、方法名都是字符串，字符串匹配相对来说比较慢速。而正常情况下，代码经过编译之后，得到的字节码中，每个类和方法都会分配一个对应的编号，保存在常量池中，代码中所有出现类或方法的地方，都会被替换为编号。相比于通过类名、方法名字符串来查找类和方法，通过编号来查找对应的类或方法，显然要快得多。</p><p>我们再通过一个简单的例子进一步解释一下，代码如下所示。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Demo {
  public static void main(String[] args) {
    Demo d = new Demo();
    f();
  }

  public static void f() {}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码经过编译之后，得到的字节码如下所示，其中，常量池（Constant pool）中保存了各个类、方法的编号。类创建通过“new #编码”来实现，方法执行通过“invokespecial #编号”来实现。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Demo
  minor version: 0
  major version: 53
  flags: (0x0021) ACC_PUBLIC, ACC_SUPER
  this_class: #2                          // Demo
  super_class: #5                         // java/lang/Object
  interfaces: 0, fields: 0, methods: 3, attributes: 1
Constant pool:
   #1 = Methodref          #5.#15         // java/lang/Object.&quot;&lt;init&gt;&quot;:()V
   #2 = Class              #16            // Demo
   #3 = Methodref          #2.#15         // Demo.&quot;&lt;init&gt;&quot;:()V
   #4 = Methodref          #2.#17         // Demo.f:()V
   #5 = Class              #18            // java/lang/Object
   #6 = Utf8               &lt;init&gt;
   #7 = Utf8               ()V
   #8 = Utf8               Code
   #9 = Utf8               LineNumberTable
  #10 = Utf8               main
  #11 = Utf8               ([Ljava/lang/String;)V
  #12 = Utf8               f
  #13 = Utf8               SourceFile
  #14 = Utf8               Demo.java
  #15 = NameAndType        #6:#7          // &quot;&lt;init&gt;&quot;:()V
  #16 = Utf8               Demo
  #17 = NameAndType        #12:#7         // f:()V
  #18 = Utf8               java/lang/Object
{
  public Demo();
    descriptor: ()V
    flags: (0x0001) ACC_PUBLIC
    Code:
      stack=1, locals=1, args_size=1
         0: aload_0
         1: invokespecial #1     // Method java/lang/Object.&quot;&lt;init&gt;&quot;:()V
         4: return
      LineNumberTable:
        line 1: 0

  public static void main(java.lang.String[]);
    descriptor: ([Ljava/lang/String;)V
    flags: (0x0009) ACC_PUBLIC, ACC_STATIC
    Code:
      stack=2, locals=2, args_size=1
         0: new           #2                  // class Demo
         3: dup
         4: invokespecial #3                  // Method &quot;&lt;init&gt;&quot;:()V
         7: astore_1
         8: invokestatic  #4                  // Method f:()V
        11: return
      LineNumberTable:
        line 3: 0
        line 4: 8
        line 5: 11

  public static void f();
    descriptor: ()V
    flags: (0x0009) ACC_PUBLIC, ACC_STATIC
    Code:
      stack=0, locals=0, args_size=0
         0: return
      LineNumberTable:
        line 8: 0
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六、课后思考题" tabindex="-1"><a class="header-anchor" href="#六、课后思考题" aria-hidden="true">#</a> <strong>六、课后思考题</strong></h2><p>单例模式有多种实现方式，其他实现方式是否也存在可能被反射攻击的问题呢？</p>`,71),d=[a];function t(r,v){return n(),i("div",null,d)}const u=e(l,[["render",t],["__file","24.reflection.html.vue"]]);export{u as default};
