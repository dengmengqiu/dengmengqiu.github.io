import"./vue-baa4c554.js";import{b as e}from"./@vue-3d103999.js";const i={},u=`<h2>1. \u7ED3\u6784\u4F53\u5728\u5185\u5B58\u4E2D\u662F\u5982\u4F55\u5B58\u50A8\u7684</h2>
<pre><code class="language-c">typedef struct student 
{ 
 int id; 
 char name[30]; 
 int math; 
} Student; s

int main() 
{ 
 
 Student stu; 
 stu.id = 123456; 
 strcpy(stu.name,&quot;feizhufeifei&quot;); 
 stu.math = 90; 
 stu.PE = 80; 
 printf(&quot;Student:%p\\r\\n&quot;,&amp;stu); 
 printf(&quot;stu.ID:%p\\r\\n&quot;,&amp;stu.ID); 
 printf(&quot;stu.name:%p\\r\\n&quot;,&amp;stu.name); 
 printf(&quot;stu.math:%p\\r\\n&quot;,&amp;stu.math); 
 return 0; 
} 

/**  \u6253\u5370\u7ED3\u679C\u5982\u4E0B\uFF1A */

//\u7ED3\u6784\u4F53\u7684\u5730\u5740 
// Student:0xffffcbb0 
//\u7ED3\u6784\u4F53\u7B2C\u4E00\u4E2A\u6210\u5458\u7684\u5730\u5740 
// stu.ID:0xffffcbb0  //\u504F\u79FB\u5730\u5740 +0 
// stu.name:0xffffcbb4//\u504F\u79FB\u5730\u5740 +4 
// stu.math:0xffffcbd4//\u504F\u79FB\u5730\u5740 +24 
</code></pre>
<p>\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\uFF0C\u7ED3\u6784\u4F53\u7684\u5730\u5740\u548C\u7ED3\u6784\u4F53\u7B2C\u4E00\u4E2A\u6210\u5458\u7684\u5730\u5740\u662F\u76F8\u540C\u7684( <span style="color: red;">x</span> )\u3002
\u4E0D\u592A\u7406\u89E3\u7684\u518D\u770B\u4E0B\u8FD9\u4E24\u4E2A\u4F8B\u5B50\uFF1A</p>
<ul>
<li>struct A { int a; char b; int c; char d; };a \u504F\u79FB\u4E3A 0 \uFF0C b \u504F\u79FB\u4E3A 4 \uFF0C c \u504F\u79FB\u4E3A 8 (\u5927\u4E8E 4 + 1 \u7684 4 \u7684\u6700\u5C0F\u6574\u6570\u500D)\uFF0C d \u504F\u79FB\u4E3A 12 \u3002A \u5BF9\u9F50\u4E3A 4 \uFF0C\u5927\u5C0F\u4E3A 16 \u3002</li>
<li>struct B { int a; char b; char c; long d; };a \u504F\u79FB\u4E3A 0 \uFF0C b \u504F\u79FB\u4E3A 4 \uFF0C c \u504F\u79FB\u4E3A 5 \uFF0C d \u504F\u79FB\u4E3A 8 \u3002B \u5BF9\u9F50\u4E3A 8 \uFF0C \u5927\u5C0F\u4E3A 16 \u3002</li>
</ul>
<p><strong>\u4EE5\u4E0A\u60C5\u51B5\u53EA\u9488\u5BF9 POD \u7C7B\u578B\u7684\u7ED3\u6784\u4F53\uFF0C\u5177\u4F53\u89C1\u300A\u6DF1\u5165\u7406\u89E3c++11: c++11\u7684\u7279\u6027\u4E0E\u4F7F\u7528\u300BPOD\u7C7B\u578B\u7AE0\u8282</strong> , \u5BF9\u4E8E\u975EPOD\u7C7B\u578B\u662F\u4E0D\u6210\u7ACB\u7684\uFF0C\u4F46\u662F\u8FD9\u5E76\u4E0D\u5F71\u54CD\u5229\u7528\u6210\u5458\u53D8\u91CF\u7684\u504F\u79FB\u5730\u5740\u8BA1\u7B97\u7ED3\u6784\u4F53\u9996\u5730\u5740\u3002\u4F8B\u5982\uFF1A</p>
<pre><code class="language-c">#include &lt;stdint.h&gt;
#include &lt;stdio.h&gt;
#include &lt;string.h&gt;

#define offsetof(TYPE, MEMBER) ((size_t) &amp;((TYPE *)0)-&gt;MEMBER) 
#define container_of(ptr, type, member) ({ \\ 
        const typeof( ((type *)0)-&gt;member ) *__mptr = (ptr); \\ 
        (type *)( (char *)__mptr - offsetof(type,member) );}) 


typedef struct chinese {
 private:
    int a;
    char b;
} Chinese;

typedef struct studenta : Chinese
{ 
 int id; 
 char name[30]; 
 int math; 
} ChinaStudent; 

typedef struct studentb
{ 
 int id; 
 char name[30]; 
 int math; 
}Student; 
 
int main() 
{ 
    ChinaStudent a;
    Student b;
    printf(&quot;a.id: %d, a: %d\\n&quot;, &amp;a.id, &amp;a);
    printf(&quot;b.id: %d, b: %d\\n&quot;, &amp;b.id, &amp;b);
    return 0;  
} 

/** \u6253\u5370\u7ED3\u679C */
// a.id: 1827697936, a: 1827697928
// b.id: 1827697888, b: 1827697888
</code></pre>
<p>\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\uFF0C\u7ED3\u6784\u4F53\u4E2D\u6210\u5458\u53D8\u91CF\u5728\u5185\u5B58\u4E2D\u5B58\u50A8\u7684\u5176\u5B9E\u662F\u504F\u79FB\u5730\u5740\u3002\u4E5F\u5C31\u662F\u8BF4 <strong>\u7ED3\u6784\u4F53A\u7684\u5730\u5740+\u6210\u5458\u53D8\u91CF\u7684\u504F\u79FB\u5730\u5740 = \u7ED3\u6784\u4F53\u6210\u5458\u53D8\u91CF\u7684\u8D77\u59CB\u5730\u5740</strong>\u3002</p>
<p>\u56E0\u6B64\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u6839\u636E <strong>\u7ED3\u6784\u4F53\u53D8\u91CF\u7684\u8D77\u59CB\u5730\u5740\u548C\u6210\u5458\u53D8\u91CF\u7684\u504F\u79FB\u5730\u5740\u6765\u53CD\u63A8\u51FA\u7ED3\u6784\u4F53A\u7684\u5730\u5740</strong>\u3002</p>
<h2>2. container_of\u5B8F</h2>
<pre><code class="language-c">#define offsetof(TYPE, MEMBER) ((size_t) &amp;((TYPE*)0)-&gt;MEMBER) 
#define container_of(ptr, type, member) ({          \\ 
        const typeof(((type *)0)-&gt;member)*__mptr = (ptr);    \\ 
    (type *)((char *)__mptr - offsetof(type, member)); }) 
</code></pre>
<p>\u9996\u5148\u770B\u4E0B\u4E09\u4E2A\u53C2\u6570:</p>
<ul>
<li>ptr\u662F\u6210\u5458\u53D8\u91CF\u7684\u6307\u9488</li>
<li>type\u662F\u6307\u7ED3\u6784\u4F53\u7684\u7C7B\u578B</li>
<li>member\u662F\u6210\u5458\u53D8\u91CF\u7684\u540D\u5B57\u3002</li>
</ul>
<p>container_of\u5B8F\u7684\u4F5C\u7528\u662F <strong>\u901A\u8FC7\u7ED3\u6784\u4F53\u5185\u67D0\u4E2A\u6210\u5458\u53D8\u91CF\u7684\u5730\u5740\u548C\u8BE5\u53D8\u91CF\u540D\uFF0C\u4EE5\u53CA\u7ED3\u6784\u4F53\u7C7B\u578B, \u627E\u5230\u8BE5\u7ED3\u6784\u4F53\u53D8\u91CF\u7684\u5730\u5740</strong>\u3002\u8FD9\u91CC\u4F7F\u7528\u7684\u662F\u4E00\u4E2A\u5229\u7528\u7F16\u8BD1\u5668\u6280\u672F\u7684\u5C0F\u6280\u5DE7\uFF0C\u5373 <strong>\u5148\u6C42\u5F97\u7ED3\u6784\u6210\u5458\u5728\u7ED3\u6784\u4E2D\u7684\u504F\u79FB\u91CF\uFF0C\u7136\u540E\u6839\u636E\u6210\u5458\u53D8\u91CF\u7684\u5730\u5740\u53CD\u8FC7\u6765\u5F97\u51FA\u4E3B\u7ED3\u6784\u53D8\u91CF\u7684\u5730\u5740</strong>\u3002\u4E0B\u9762\u5177\u4F53\u5206\u6790\u4E0B\u5404\u4E2A\u90E8\u5206\u3002</p>
<h3>2.1  typeof</h3>
<p>\u9996\u5148\u770B\u4E0Btypeof\uFF0C\u662F\u7528\u4E8E\u8FD4\u56DE\u4E00\u4E2A\u53D8\u91CF\u7684\u7C7B\u578B\uFF0C\u8FD9\u662FGCC\u7F16\u8BD1\u5668\u7684\u4E00\u4E2A\u6269\u5C55\u529F\u80FD\uFF0C\u4E5F\u5C31\u662F\u8BF4typeof\u662F\u7F16\u8BD1\u5668\u76F8\u5173\u7684\u3002\u65E2\u4E0D\u662FC\u8BED\u8A00\u89C4\u8303\u7684\u6240\u8981\u6C42\uFF0C\u4E5F\u4E0D\u662F\u67D0\u4E2A\u6807\u51C6\u7684\u4E00\u90E8\u5206\u3002</p>
<pre><code class="language-c">int main() 
{ 
 int a = 5; 
 //\u8FD9\u91CC\u5B9A\u4E49\u4E00\u4E2A\u548Ca\u7C7B\u578B\u76F8\u540C\u7684\u53D8\u91CFb 
 typeof(a) b  = 6; 
 printf(&quot;%d,%d\\r\\n&quot;,a,b);//5 6 
 return 0; 
} 
</code></pre>
<h3>2.2 (((type *)0)-&gt;member)</h3>
<p><strong>((TYPE *)0)</strong> \u5C060\u8F6C\u6362\u4E3A <strong>type</strong> \u7C7B\u578B\u7684\u7ED3\u6784\u4F53\u6307\u9488\uFF0C\u6362\u53E5\u8BDD\u8BF4\u5C31\u662F\u8BA9\u7F16\u8BD1\u5668\u8BA4\u4E3A\u8FD9\u4E2A\u7ED3\u6784\u4F53\u662F\u5F00\u59CB\u4E8E\u7A0B\u5E8F\u6BB5\u8D77\u59CB\u4F4D\u7F6E0\uFF0C\u5F00\u59CB\u4E8E0\u5730\u5740\u7684\u8BDD\uFF0C\u6211\u4EEC\u5F97\u5230\u7684\u6210\u5458\u53D8\u91CF\u7684\u5730\u5740\u5C31\u76F4\u63A5\u7B49\u4E8E\u6210\u5458\u53D8\u91CF\u7684\u504F\u79FB\u5730\u5740\u4E86\u3002</p>
<p><strong>(((type *)0)-&gt;member)</strong> \u5F15\u7528\u7ED3\u6784\u4F53\u4E2DMEMBER\u6210\u5458\u3002</p>
<h3>2.3 const typeof(((type * )0) -&gt;member)*__mptr = (ptr);</h3>
<p>\u8FD9\u53E5\u4EE3\u7801\u610F\u601D\u662F\u7528 <strong>typeof()</strong> \u83B7\u53D6\u7ED3\u6784\u4F53\u91CCmember\u6210\u5458\u5C5E\u6027\u7684\u7C7B\u578B\uFF0C\u7136\u540E\u5B9A\u4E49\u4E00\u4E2A\u8BE5\u7C7B\u578B\u7684\u4E34\u65F6\u6307\u9488\u53D8\u91CF _<strong>mptr</strong>\uFF0C\u5E76\u5C06ptr\u6240\u6307\u5411\u7684member\u7684\u5730\u5740\u8D4B\u7ED9 _<strong>mptr</strong>;</p>
<p>\u4E3A\u4EC0\u4E48\u4E0D\u76F4\u63A5\u4F7F\u7528 <strong>ptr</strong> \u800C\u8981\u591A\u6B64\u4E00\u4E3E\u5462?\u6211\u60F3\u53EF\u80FD\u662F\u4E3A\u4E86\u907F\u514D\u5BF9 <strong>ptr</strong> \u53CA <strong>ptr</strong> \u6307\u5411\u7684\u5185\u5BB9\u9020\u6210\u7834\u574F</p>
<h3>2.4 offsetof(type, member))</h3>
<pre><code class="language-c">#define offsetof(TYPE, MEMBER) ((size_t) &amp;((TYPE*)0)-&gt;MEMBER)
</code></pre>
<p><strong>size_t</strong> \u662F\u6807\u51C6C\u5E93\u4E2D\u5B9A\u4E49\u7684\uFF0C\u572832\u4F4D\u67B6\u6784\u4E2D\u88AB\u666E\u904D\u5B9A\u4E49\u4E3A\uFF1A</p>
<pre><code class="language-c">typedef unsigned int size_t;
</code></pre>
<p>\u800C\u572864\u4F4D\u67B6\u6784\u4E2D\u88AB\u5B9A\u4E49\u4E3A\uFF1A</p>
<pre><code class="language-c">typedef unsigned long size_t;
</code></pre>
<p>\u5B98\u65B9\u89E3\u91CA\u662F\uFF1A<strong>\u53D6\u67D0\u4E2A\u7ED3\u6784\u4F53\u6210\u5458\u4E0E\u7ED3\u6784\u4F53\u672C\u8EAB\u8D77\u59CB\u5730\u5740\u7684\u504F\u79FB\u5927\u5C0F</strong></p>
<ul>
<li>(TYPE* 0\uFF09,\u5148\u628A 0 \u5730\u5740\u5F3A\u8F6C\u6210type\u7C7B\u578B\uFF0C\u4E5F\u5C31\u662F\u4F20\u5165\u7684\u7ED3\u6784\u4F53\u7C7B\u578B</li>
<li>&amp; \u53D6\u5730\u5740\u7B26\uFF0C\u53D6\u7684\u662FTYPE\u7C7B\u578B\u7ED3\u6784\u4F53\u7684MEMBER \u53D8\u91CF\u7684\u5730\u5740</li>
<li>\u5176\u6B21\u518D\u4ED4\u7EC6\u60F3\u60F3\uFF0C\u53D6 0 \u5730\u5740\u7684MEMBER \u53D8\u91CF\u7684\u5730\u5740\uFF0C\u90A3\u4E48\u5C31\u76F4\u63A5\u5F97\u5230\u8BE5    <strong>MEMBER\u53D8\u91CF\u4E0E0\u5730\u5740\u7684\u504F\u79FB\u5927\u5C0F</strong> \u4E86</li>
</ul>
<p>\u4E5F\u5C31\u4E0E\u5B98\u65B9\u89E3\u91CA\u5BF9\u5E94\u4E0A\u4E86</p>
<h3>2.5 (type * )((char * )__mptr - offsetof(type, member))</h3>
<p>\u8FD9\u53E5\u8BDD\u7684\u610F\u601D\u5C31\u662F\uFF0C\u628A _<strong>mptr</strong> \u8F6C\u6362\u6210 <strong>char*</strong> \u7C7B\u578B\u3002\u56E0\u4E3A <strong>offsetof</strong> \u5F97\u5230\u7684\u504F\u79FB\u91CF\u662F\u4EE5\u5B57\u8282\u4E3A\u5355\u4F4D\u3002\u4E24\u8005\u76F8\u51CF\u5F97\u5230\u7ED3\u6784\u4F53\u7684\u8D77\u59CB\u4F4D\u7F6E\uFF0C \u518D\u5F3A\u5236\u8F6C\u6362\u6210 <strong>type</strong> \u7C7B\u578B</p>
<h2>3. \u4E3E\u4F8B</h2>
<pre><code class="language-c">#define offsetof(TYPE, MEMBER) ((size_t) &amp;((TYPE *)0)-&gt;MEMBER) 
#define container_of(ptr, type, member) ({ \\ 
        const typeof( ((type *)0)-&gt;member ) *__mptr = (ptr); \\ 
        (type *)( (char *)__mptr - offsetof(type,member) );}) 
         
typedef struct student 
{ 
 int id; 
 char name[30]; 
 int math; 
}Student; 
 
int main() 
{ 
    Student stu; 
        Student *sptr = NULL; 
  stu.id = 123456; 
  strcpy(stu.name,&quot;zhongyi&quot;); 
  stu.math = 90; 
        sptr = container_of(&amp;stu.id,Student,id); 
        printf(&quot;sptr=%p\\n&quot;,sptr); 
        sptr = container_of(&amp;stu.name,Student,name); 
        printf(&quot;sptr=%p\\n&quot;,sptr); 
        sptr = container_of(&amp;stu.math,Student,id); 
        printf(&quot;sptr=%p\\n&quot;,sptr); 
        return 0;  
} 

/** \u8FD0\u884C\u7ED3\u679C/
// sptr=0x16ddf7510
// sptr=0x16ddf7510
// sptr=0x16ddf7510
</code></pre>
<p><a href="https://www.jb51.net/article/222490.htm">\u53C2\u8003\u6587\u7AE01</a></p>
<p><a href="hhttps://www.cnblogs.com/20180211lijunxin/articles/14591296.html">\u53C2\u8003\u6587\u7AE02</a></p>
`,r=e(`<h2>1. \u7ED3\u6784\u4F53\u5728\u5185\u5B58\u4E2D\u662F\u5982\u4F55\u5B58\u50A8\u7684</h2><pre><code class="language-c">typedef struct student 
{ 
 int id; 
 char name[30]; 
 int math; 
} Student; s

int main() 
{ 
 
 Student stu; 
 stu.id = 123456; 
 strcpy(stu.name,&quot;feizhufeifei&quot;); 
 stu.math = 90; 
 stu.PE = 80; 
 printf(&quot;Student:%p\\r\\n&quot;,&amp;stu); 
 printf(&quot;stu.ID:%p\\r\\n&quot;,&amp;stu.ID); 
 printf(&quot;stu.name:%p\\r\\n&quot;,&amp;stu.name); 
 printf(&quot;stu.math:%p\\r\\n&quot;,&amp;stu.math); 
 return 0; 
} 

/**  \u6253\u5370\u7ED3\u679C\u5982\u4E0B\uFF1A */

//\u7ED3\u6784\u4F53\u7684\u5730\u5740 
// Student:0xffffcbb0 
//\u7ED3\u6784\u4F53\u7B2C\u4E00\u4E2A\u6210\u5458\u7684\u5730\u5740 
// stu.ID:0xffffcbb0  //\u504F\u79FB\u5730\u5740 +0 
// stu.name:0xffffcbb4//\u504F\u79FB\u5730\u5740 +4 
// stu.math:0xffffcbd4//\u504F\u79FB\u5730\u5740 +24 
</code></pre><p>\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\uFF0C\u7ED3\u6784\u4F53\u7684\u5730\u5740\u548C\u7ED3\u6784\u4F53\u7B2C\u4E00\u4E2A\u6210\u5458\u7684\u5730\u5740\u662F\u76F8\u540C\u7684( <span style="color:red;">x</span> )\u3002 \u4E0D\u592A\u7406\u89E3\u7684\u518D\u770B\u4E0B\u8FD9\u4E24\u4E2A\u4F8B\u5B50\uFF1A</p><ul><li>struct A { int a; char b; int c; char d; };a \u504F\u79FB\u4E3A 0 \uFF0C b \u504F\u79FB\u4E3A 4 \uFF0C c \u504F\u79FB\u4E3A 8 (\u5927\u4E8E 4 + 1 \u7684 4 \u7684\u6700\u5C0F\u6574\u6570\u500D)\uFF0C d \u504F\u79FB\u4E3A 12 \u3002A \u5BF9\u9F50\u4E3A 4 \uFF0C\u5927\u5C0F\u4E3A 16 \u3002</li><li>struct B { int a; char b; char c; long d; };a \u504F\u79FB\u4E3A 0 \uFF0C b \u504F\u79FB\u4E3A 4 \uFF0C c \u504F\u79FB\u4E3A 5 \uFF0C d \u504F\u79FB\u4E3A 8 \u3002B \u5BF9\u9F50\u4E3A 8 \uFF0C \u5927\u5C0F\u4E3A 16 \u3002</li></ul><p><strong>\u4EE5\u4E0A\u60C5\u51B5\u53EA\u9488\u5BF9 POD \u7C7B\u578B\u7684\u7ED3\u6784\u4F53\uFF0C\u5177\u4F53\u89C1\u300A\u6DF1\u5165\u7406\u89E3c++11: c++11\u7684\u7279\u6027\u4E0E\u4F7F\u7528\u300BPOD\u7C7B\u578B\u7AE0\u8282</strong> , \u5BF9\u4E8E\u975EPOD\u7C7B\u578B\u662F\u4E0D\u6210\u7ACB\u7684\uFF0C\u4F46\u662F\u8FD9\u5E76\u4E0D\u5F71\u54CD\u5229\u7528\u6210\u5458\u53D8\u91CF\u7684\u504F\u79FB\u5730\u5740\u8BA1\u7B97\u7ED3\u6784\u4F53\u9996\u5730\u5740\u3002\u4F8B\u5982\uFF1A</p><pre><code class="language-c">#include &lt;stdint.h&gt;
#include &lt;stdio.h&gt;
#include &lt;string.h&gt;

#define offsetof(TYPE, MEMBER) ((size_t) &amp;((TYPE *)0)-&gt;MEMBER) 
#define container_of(ptr, type, member) ({ \\ 
        const typeof( ((type *)0)-&gt;member ) *__mptr = (ptr); \\ 
        (type *)( (char *)__mptr - offsetof(type,member) );}) 


typedef struct chinese {
 private:
    int a;
    char b;
} Chinese;

typedef struct studenta : Chinese
{ 
 int id; 
 char name[30]; 
 int math; 
} ChinaStudent; 

typedef struct studentb
{ 
 int id; 
 char name[30]; 
 int math; 
}Student; 
 
int main() 
{ 
    ChinaStudent a;
    Student b;
    printf(&quot;a.id: %d, a: %d\\n&quot;, &amp;a.id, &amp;a);
    printf(&quot;b.id: %d, b: %d\\n&quot;, &amp;b.id, &amp;b);
    return 0;  
} 

/** \u6253\u5370\u7ED3\u679C */
// a.id: 1827697936, a: 1827697928
// b.id: 1827697888, b: 1827697888
</code></pre><p>\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\uFF0C\u7ED3\u6784\u4F53\u4E2D\u6210\u5458\u53D8\u91CF\u5728\u5185\u5B58\u4E2D\u5B58\u50A8\u7684\u5176\u5B9E\u662F\u504F\u79FB\u5730\u5740\u3002\u4E5F\u5C31\u662F\u8BF4 <strong>\u7ED3\u6784\u4F53A\u7684\u5730\u5740+\u6210\u5458\u53D8\u91CF\u7684\u504F\u79FB\u5730\u5740 = \u7ED3\u6784\u4F53\u6210\u5458\u53D8\u91CF\u7684\u8D77\u59CB\u5730\u5740</strong>\u3002</p><p>\u56E0\u6B64\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u6839\u636E <strong>\u7ED3\u6784\u4F53\u53D8\u91CF\u7684\u8D77\u59CB\u5730\u5740\u548C\u6210\u5458\u53D8\u91CF\u7684\u504F\u79FB\u5730\u5740\u6765\u53CD\u63A8\u51FA\u7ED3\u6784\u4F53A\u7684\u5730\u5740</strong>\u3002</p><h2>2. container_of\u5B8F</h2><pre><code class="language-c">#define offsetof(TYPE, MEMBER) ((size_t) &amp;((TYPE*)0)-&gt;MEMBER) 
#define container_of(ptr, type, member) ({          \\ 
        const typeof(((type *)0)-&gt;member)*__mptr = (ptr);    \\ 
    (type *)((char *)__mptr - offsetof(type, member)); }) 
</code></pre><p>\u9996\u5148\u770B\u4E0B\u4E09\u4E2A\u53C2\u6570:</p><ul><li>ptr\u662F\u6210\u5458\u53D8\u91CF\u7684\u6307\u9488</li><li>type\u662F\u6307\u7ED3\u6784\u4F53\u7684\u7C7B\u578B</li><li>member\u662F\u6210\u5458\u53D8\u91CF\u7684\u540D\u5B57\u3002</li></ul><p>container_of\u5B8F\u7684\u4F5C\u7528\u662F <strong>\u901A\u8FC7\u7ED3\u6784\u4F53\u5185\u67D0\u4E2A\u6210\u5458\u53D8\u91CF\u7684\u5730\u5740\u548C\u8BE5\u53D8\u91CF\u540D\uFF0C\u4EE5\u53CA\u7ED3\u6784\u4F53\u7C7B\u578B, \u627E\u5230\u8BE5\u7ED3\u6784\u4F53\u53D8\u91CF\u7684\u5730\u5740</strong>\u3002\u8FD9\u91CC\u4F7F\u7528\u7684\u662F\u4E00\u4E2A\u5229\u7528\u7F16\u8BD1\u5668\u6280\u672F\u7684\u5C0F\u6280\u5DE7\uFF0C\u5373 <strong>\u5148\u6C42\u5F97\u7ED3\u6784\u6210\u5458\u5728\u7ED3\u6784\u4E2D\u7684\u504F\u79FB\u91CF\uFF0C\u7136\u540E\u6839\u636E\u6210\u5458\u53D8\u91CF\u7684\u5730\u5740\u53CD\u8FC7\u6765\u5F97\u51FA\u4E3B\u7ED3\u6784\u53D8\u91CF\u7684\u5730\u5740</strong>\u3002\u4E0B\u9762\u5177\u4F53\u5206\u6790\u4E0B\u5404\u4E2A\u90E8\u5206\u3002</p><h3>2.1 typeof</h3><p>\u9996\u5148\u770B\u4E0Btypeof\uFF0C\u662F\u7528\u4E8E\u8FD4\u56DE\u4E00\u4E2A\u53D8\u91CF\u7684\u7C7B\u578B\uFF0C\u8FD9\u662FGCC\u7F16\u8BD1\u5668\u7684\u4E00\u4E2A\u6269\u5C55\u529F\u80FD\uFF0C\u4E5F\u5C31\u662F\u8BF4typeof\u662F\u7F16\u8BD1\u5668\u76F8\u5173\u7684\u3002\u65E2\u4E0D\u662FC\u8BED\u8A00\u89C4\u8303\u7684\u6240\u8981\u6C42\uFF0C\u4E5F\u4E0D\u662F\u67D0\u4E2A\u6807\u51C6\u7684\u4E00\u90E8\u5206\u3002</p><pre><code class="language-c">int main() 
{ 
 int a = 5; 
 //\u8FD9\u91CC\u5B9A\u4E49\u4E00\u4E2A\u548Ca\u7C7B\u578B\u76F8\u540C\u7684\u53D8\u91CFb 
 typeof(a) b  = 6; 
 printf(&quot;%d,%d\\r\\n&quot;,a,b);//5 6 
 return 0; 
} 
</code></pre><h3>2.2 (((type *)0)-&gt;member)</h3><p><strong>((TYPE *)0)</strong> \u5C060\u8F6C\u6362\u4E3A <strong>type</strong> \u7C7B\u578B\u7684\u7ED3\u6784\u4F53\u6307\u9488\uFF0C\u6362\u53E5\u8BDD\u8BF4\u5C31\u662F\u8BA9\u7F16\u8BD1\u5668\u8BA4\u4E3A\u8FD9\u4E2A\u7ED3\u6784\u4F53\u662F\u5F00\u59CB\u4E8E\u7A0B\u5E8F\u6BB5\u8D77\u59CB\u4F4D\u7F6E0\uFF0C\u5F00\u59CB\u4E8E0\u5730\u5740\u7684\u8BDD\uFF0C\u6211\u4EEC\u5F97\u5230\u7684\u6210\u5458\u53D8\u91CF\u7684\u5730\u5740\u5C31\u76F4\u63A5\u7B49\u4E8E\u6210\u5458\u53D8\u91CF\u7684\u504F\u79FB\u5730\u5740\u4E86\u3002</p><p><strong>(((type *)0)-&gt;member)</strong> \u5F15\u7528\u7ED3\u6784\u4F53\u4E2DMEMBER\u6210\u5458\u3002</p><h3>2.3 const typeof(((type * )0) -&gt;member)*__mptr = (ptr);</h3><p>\u8FD9\u53E5\u4EE3\u7801\u610F\u601D\u662F\u7528 <strong>typeof()</strong> \u83B7\u53D6\u7ED3\u6784\u4F53\u91CCmember\u6210\u5458\u5C5E\u6027\u7684\u7C7B\u578B\uFF0C\u7136\u540E\u5B9A\u4E49\u4E00\u4E2A\u8BE5\u7C7B\u578B\u7684\u4E34\u65F6\u6307\u9488\u53D8\u91CF _<strong>mptr</strong>\uFF0C\u5E76\u5C06ptr\u6240\u6307\u5411\u7684member\u7684\u5730\u5740\u8D4B\u7ED9 _<strong>mptr</strong>;</p><p>\u4E3A\u4EC0\u4E48\u4E0D\u76F4\u63A5\u4F7F\u7528 <strong>ptr</strong> \u800C\u8981\u591A\u6B64\u4E00\u4E3E\u5462?\u6211\u60F3\u53EF\u80FD\u662F\u4E3A\u4E86\u907F\u514D\u5BF9 <strong>ptr</strong> \u53CA <strong>ptr</strong> \u6307\u5411\u7684\u5185\u5BB9\u9020\u6210\u7834\u574F</p><h3>2.4 offsetof(type, member))</h3><pre><code class="language-c">#define offsetof(TYPE, MEMBER) ((size_t) &amp;((TYPE*)0)-&gt;MEMBER)
</code></pre><p><strong>size_t</strong> \u662F\u6807\u51C6C\u5E93\u4E2D\u5B9A\u4E49\u7684\uFF0C\u572832\u4F4D\u67B6\u6784\u4E2D\u88AB\u666E\u904D\u5B9A\u4E49\u4E3A\uFF1A</p><pre><code class="language-c">typedef unsigned int size_t;
</code></pre><p>\u800C\u572864\u4F4D\u67B6\u6784\u4E2D\u88AB\u5B9A\u4E49\u4E3A\uFF1A</p><pre><code class="language-c">typedef unsigned long size_t;
</code></pre><p>\u5B98\u65B9\u89E3\u91CA\u662F\uFF1A<strong>\u53D6\u67D0\u4E2A\u7ED3\u6784\u4F53\u6210\u5458\u4E0E\u7ED3\u6784\u4F53\u672C\u8EAB\u8D77\u59CB\u5730\u5740\u7684\u504F\u79FB\u5927\u5C0F</strong></p><ul><li>(TYPE* 0\uFF09,\u5148\u628A 0 \u5730\u5740\u5F3A\u8F6C\u6210type\u7C7B\u578B\uFF0C\u4E5F\u5C31\u662F\u4F20\u5165\u7684\u7ED3\u6784\u4F53\u7C7B\u578B</li><li>&amp; \u53D6\u5730\u5740\u7B26\uFF0C\u53D6\u7684\u662FTYPE\u7C7B\u578B\u7ED3\u6784\u4F53\u7684MEMBER \u53D8\u91CF\u7684\u5730\u5740</li><li>\u5176\u6B21\u518D\u4ED4\u7EC6\u60F3\u60F3\uFF0C\u53D6 0 \u5730\u5740\u7684MEMBER \u53D8\u91CF\u7684\u5730\u5740\uFF0C\u90A3\u4E48\u5C31\u76F4\u63A5\u5F97\u5230\u8BE5 <strong>MEMBER\u53D8\u91CF\u4E0E0\u5730\u5740\u7684\u504F\u79FB\u5927\u5C0F</strong> \u4E86</li></ul><p>\u4E5F\u5C31\u4E0E\u5B98\u65B9\u89E3\u91CA\u5BF9\u5E94\u4E0A\u4E86</p><h3>2.5 (type * )((char * )__mptr - offsetof(type, member))</h3><p>\u8FD9\u53E5\u8BDD\u7684\u610F\u601D\u5C31\u662F\uFF0C\u628A _<strong>mptr</strong> \u8F6C\u6362\u6210 <strong>char*</strong> \u7C7B\u578B\u3002\u56E0\u4E3A <strong>offsetof</strong> \u5F97\u5230\u7684\u504F\u79FB\u91CF\u662F\u4EE5\u5B57\u8282\u4E3A\u5355\u4F4D\u3002\u4E24\u8005\u76F8\u51CF\u5F97\u5230\u7ED3\u6784\u4F53\u7684\u8D77\u59CB\u4F4D\u7F6E\uFF0C \u518D\u5F3A\u5236\u8F6C\u6362\u6210 <strong>type</strong> \u7C7B\u578B</p><h2>3. \u4E3E\u4F8B</h2><pre><code class="language-c">#define offsetof(TYPE, MEMBER) ((size_t) &amp;((TYPE *)0)-&gt;MEMBER) 
#define container_of(ptr, type, member) ({ \\ 
        const typeof( ((type *)0)-&gt;member ) *__mptr = (ptr); \\ 
        (type *)( (char *)__mptr - offsetof(type,member) );}) 
         
typedef struct student 
{ 
 int id; 
 char name[30]; 
 int math; 
}Student; 
 
int main() 
{ 
    Student stu; 
        Student *sptr = NULL; 
  stu.id = 123456; 
  strcpy(stu.name,&quot;zhongyi&quot;); 
  stu.math = 90; 
        sptr = container_of(&amp;stu.id,Student,id); 
        printf(&quot;sptr=%p\\n&quot;,sptr); 
        sptr = container_of(&amp;stu.name,Student,name); 
        printf(&quot;sptr=%p\\n&quot;,sptr); 
        sptr = container_of(&amp;stu.math,Student,id); 
        printf(&quot;sptr=%p\\n&quot;,sptr); 
        return 0;  
} 

/** \u8FD0\u884C\u7ED3\u679C/
// sptr=0x16ddf7510
// sptr=0x16ddf7510
// sptr=0x16ddf7510
</code></pre><p><a href="https://www.jb51.net/article/222490.htm">\u53C2\u8003\u6587\u7AE01</a></p><p><a href="hhttps://www.cnblogs.com/20180211lijunxin/articles/14591296.html">\u53C2\u8003\u6587\u7AE02</a></p>`,37);function n(t,s){return r}const p={render:n};p.__hmrId="/Users/deng/Documents/GitHub/dengmengqiu.github.io/posts/post/os/linuxContainerOf.md";const f=t=>({components:t,render:n});export{p as VueComponent,f as VueComponentWith,i as attributes,u as html};
