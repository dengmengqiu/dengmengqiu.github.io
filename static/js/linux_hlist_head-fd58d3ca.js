import"./vue-baa4c554.js";import{b as e}from"./@vue-3d103999.js";const l={},a=`<p>\u539F\u6587\uFF1A <a href="http://linux.laoqinren.net/kernel/hlist/">http://linux.laoqinren.net/kernel/hlist/</a></p>
<h2>\u6570\u636E\u7ED3\u6784</h2>
<p><strong>hlist_head</strong> \u548C <strong>hlist_node</strong> \u7528\u4E8E\u6563\u5217\u8868\uFF0C\u5206\u522B\u8868\u793A\u5217\u8868\u5934\uFF08\u6570\u7EC4\u4E2D\u7684\u4E00\u9879\uFF09\u548C\u5217\u8868\u5934\u6240\u5728\u53CC\u5411\u94FE\u8868\u4E2D\u7684\u67D0\u9879\uFF0C\u4E24\u8005\u7ED3\u6784\u5982\u4E0B:</p>
<p>include/linux/types.h(line 190)</p>
<pre><code class="language-c">struct hlist_head {
	struct hlist_node *first;
};
</code></pre>
<p>include/linux/types.h(line 194)</p>
<pre><code class="language-c">struct hlist_node {
	struct hlist_node *next, **pprev;
};
</code></pre>
<p>\u5728\u5185\u6838\u4E2D\u7684\u666E\u901A\u53CC\u5411\u94FE\u8868\u57FA\u672C\u4E0A\u90FD\u662F\u901A\u8FC7 <strong>list_head</strong> \u5B9E\u73B0\u7684\uFF1A</p>
<p>include/linux/types.h(line 186)</p>
<pre><code class="language-c">struct list_head {
	struct list_head *next, *prev;
};
</code></pre>
<p><strong>list_head</strong> \u5F88\u597D\u7406\u89E3\uFF0C\u4F46\u662F <strong>hlist_head</strong> \u548C <strong>hlist_node</strong> \u4E3A\u4F55\u8981\u8FD9\u6837\u8BBE\u8BA1\u5462\uFF1F</p>
<p>\u5148\u770B\u4E0Bhlist_head\u548Chlist_node\u7684\u793A\u610F\u56FE:
<img src="https://i-blog.csdnimg.cn/blog_migrate/6d7d268164822b2e55e3cd93910747df.png#pic_center" alt="hashtable">
<strong>hash_table</strong>  \u4E3A\u6563\u5217\u8868\uFF08\u6570\u7EC4\uFF09\uFF0C\u5176\u4E2D\u7684\u5143\u7D20\u7C7B\u578B\u4E3A <strong>struct hlist_head</strong> \u3002\u4EE5 <strong>hlist_head</strong> \u4E3A\u94FE\u8868\u5934\u7684\u94FE\u8868\uFF0C\u5176\u4E2D\u7684\u8282\u70B9hash\u503C\u662F\u76F8\u540C\u7684\uFF08\u4E5F\u53EB\u51B2\u7A81\uFF09\u3002first\u6307\u9488\u6307\u5411\u94FE\u8868\u4E2D\u7684\u8282\u70B9\u2460\uFF0C\u7136\u540E\u8282\u70B9\u2460\u7684  <strong>pprev</strong> \u6307\u9488\u6307\u5411 <strong>hlist_head</strong> \u4E2D \u7684 <strong>first</strong> \uFF0C\u8282\u70B9\u2460\u7684 <strong>next</strong> \u6307\u9488\u6307\u5411\u8282\u70B9\u2461\u3002\u4EE5\u6B64\u7C7B\u63A8\u3002</p>
<p><strong>hash_table</strong> \u7684\u5217\u8868\u5934\u4EC5\u5B58\u653E\u4E00\u4E2A\u6307\u9488,\u4E5F\u5C31\u662F <strong>first</strong> \u6307\u9488,\u6307\u5411\u7684\u662F\u5BF9\u5E94\u94FE\u8868\u7684\u5934\u7ED3\u70B9,\u6CA1\u6709tail\u6307\u9488,\u4E5F\u5C31\u662F\u6307\u5411\u94FE\u8868\u5C3E\u8282\u70B9\u7684\u6307\u9488,\u8FD9\u6837\u7684\u8003\u8651\u662F\u4E3A\u4E86\u8282\u7701\u7A7A\u95F4\u2014\u2014\u5C24\u5176\u5728 <strong>hash bucket</strong> (\u6570\u7EC4size)\u5F88\u5927\u7684\u60C5\u51B5\u4E0B\u53EF\u4EE5\u8282\u7701\u4E00\u534A\u7684\u6307\u9488\u7A7A\u95F4\u3002</p>
<p><strong>\u4E3A\u4EC0\u4E48pprev\u662F\u4E00\u4E2A\u6307\u5411\u6307\u9488\u7684\u6307\u9488\u5462\uFF1F</strong> \u6309\u7167\u8FD9\u4E2A\u8BBE\u8BA1\uFF0C\u6211\u4EEC\u5982\u679C\u60F3\u8981\u5F97\u5230\u5C3E\u8282\u70B9\uFF0C\u5FC5\u987B\u904D\u5386\u6574\u4E2A\u94FE\u8868\uFF0C\u53EF\u5982\u679C\u662F\u4E00\u4E2A\u6307\u5411\u8282\u70B9\u7684\u6307\u9488\uFF0C\u90A3\u4E48\u5934\u7ED3\u70B9\u73B0\u5728\u7684<strong>pprev</strong>\u4FBF\u53EF\u4EE5\u76F4\u63A5\u6307\u5411\u5C3E\u8282\u70B9\uFF0C\u4E5F\u5C31\u662Flist_head\u7684\u505A\u6CD5\u3002</p>
<p>\u5BF9\u4E8E\u6563\u5217\u8868\u6765\u8BF4\uFF0C\u4E00\u822C\u53D1\u751F\u51B2\u7A81\u7684\u60C5\u51B5\u5E76\u4E0D\u591A\uFF08\u9664\u975Ehash\u8BBE\u8BA1\u51FA\u73B0\u4E86\u95EE\u9898\uFF09\uFF0C\u6240\u4EE5\u4E00\u4E2A\u94FE\u8868\u4E2D\u7684\u5143\u7D20\u6570\u91CF\u6BD4\u8F83\u6709\u9650\uFF0C\u904D\u5386\u7684\u52A3\u52BF\u57FA\u672C\u53EF\u4EE5\u5FFD\u7565\u3002</p>
<p><strong>\u5728\u5220\u9664\u94FE\u8868\u5934\u7ED3\u70B9\u7684\u65F6\u5019\uFF0C<strong>pprev</strong> \u8FD9\u4E2A\u8BBE\u8BA1\u65E0\u9700\u5224\u65AD\u5220\u9664\u7684\u8282\u70B9\u662F\u5426\u4E3A\u5934\u7ED3\u70B9</strong>\u3002\u5982\u679C\u662F\u666E\u901A\u53CC\u5411\u94FE\u8868\u7684\u8BBE\u8BA1\uFF0C\u90A3\u4E48\u5220\u9664\u5934\u7ED3\u70B9\u4E4B\u540E\uFF0C<strong>hlist_head</strong>\u4E2D\u7684first\u6307\u9488\u9700\u8981\u6307\u5411\u65B0\u7684\u5934\u7ED3\u70B9\u3002\u901A\u8FC7\u4E0B\u97622\u4E2A\u51FD\u6570\u6765\u52A0\u6DF1\u7406\u89E3:</p>
<p>include/linux/list.h(line 669)</p>
<pre><code class="language-c">static inline void hlist_add_head(struct hlist_node *n, struct hlist_head *h)
{
	struct hlist_node *first = h-&gt;first;
	n-&gt;next = first; //\u65B0\u8282\u70B9\u7684next\u6307\u9488\u6307\u5411\u539F\u5934\u7ED3\u70B9
	if (first) 
		first-&gt;pprev = &amp;n-&gt;next;//\u539F\u5934\u7ED3\u70B9\u7684pprev\u6307\u5411\u65B0\u8282\u70B9\u7684next\u5B57\u6BB5
	WRITE_ONCE(h-&gt;first, n);//first\u6307\u9488\u6307\u5411\u65B0\u7684\u8282\u70B9\uFF08\u66F4\u6362\u4E86\u5934\u7ED3\u70B9\uFF09
	n-&gt;pprev = &amp;h-&gt;first;//\u6B64\u65F6n\u662F\u94FE\u8868\u7684\u5934\u7ED3\u70B9,\u5C06\u5B83\u7684pprev\u6307\u5411list_head\u7684first\u5B57\u6BB5
}
</code></pre>
<p>include/linux/list.h(line 644)</p>
<pre><code class="language-c">static inline void __hlist_del(struct hlist_node *n)
{
	struct hlist_node *next = n-&gt;next;
	struct hlist_node **pprev = n-&gt;pprev;
	WRITE_ONCE(*pprev, next); // pprev\u6307\u5411\u7684\u662F\u524D\u4E00\u4E2A\u8282\u70B9\u7684next\u6307\u9488,\u5F53\u8BE5\u8282\u70B9\u662F\u5934\u8282\u70B9\u65F6\u6307\u5411 hlist_head\u7684first,\u4E24\u79CD\u60C5\u51B5\u4E0B\u4E0D\u8BBA\u8BE5\u8282\u70B9\u662F\u4E00\u822C\u7684\u8282\u70B9\u8FD8\u662F\u5934\u7ED3\u70B9\u90FD\u53EF\u4EE5\u901A\u8FC7\u8FD9\u4E2A\u64CD\u4F5C\u5220\u9664\u6389\u6240\u9700\u5220\u9664\u7684\u8282\u70B9\u3002
	if (next)
		next-&gt;pprev = pprev;//\u4F7F\u5220\u9664\u8282\u70B9\u7684\u540E\u4E00\u4E2A\u8282\u70B9\u7684pprev\u6307\u5411\u5220\u9664\u8282\u70B9\u7684\u524D\u4E00\u4E2A\u8282\u70B9\u7684next\u5B57\u6BB5\uFF0C\u8282\u70B9\u6210\u529F\u5220\u9664\u3002
}
</code></pre>
<h2>\u76F8\u5173API</h2>
<table>
<thead>
<tr>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>API</td>
<td>\u8BF4\u660E</td>
</tr>
<tr>
<td>HLIST_HEAD_INIT</td>
<td>\u9759\u6001\u521D\u59CB\u5316hlist_head</td>
</tr>
<tr>
<td>HLIST_HEAD</td>
<td>\u9759\u6001\u521D\u59CB\u5316hlist_head</td>
</tr>
<tr>
<td>INIT_HLIST_HEAD</td>
<td>\u52A8\u6001\u521D\u59CB\u5316hlist_head</td>
</tr>
<tr>
<td>INIT_HLIST_NODE</td>
<td>\u52A8\u6001\u521D\u59CB\u5316hlist_node</td>
</tr>
<tr>
<td>hlist_unhashed</td>
<td>\u5224\u65ADhlist_node\u662F\u5426\u6DFB\u52A0\u5230hash\u94FE\u8868\u4E2D</td>
</tr>
<tr>
<td>hlist_empty</td>
<td>\u5224\u65ADhash\u94FE\u8868\u662F\u5426\u4E3A\u7A7A</td>
</tr>
<tr>
<td>hlist_del</td>
<td>\u5728hash\u94FE\u8868\u4E2D\u5220\u9664\u4E00\u4E2A\u8282\u70B9</td>
</tr>
<tr>
<td>hlist_del_init</td>
<td>\u5728hash\u94FE\u8868\u4E2D\u5220\u9664\u4E00\u4E2A\u8282\u70B9</td>
</tr>
<tr>
<td>hlist_add_head</td>
<td>\u5728hash\u94FE\u8868\u5934\u6DFB\u52A0\u4E00\u4E2A\u8282\u70B9</td>
</tr>
<tr>
<td>hlist_add_before</td>
<td>\u5728\u6307\u5B9A\u8282\u70B9\u4E4B\u524D\u6DFB\u52A0\u4E00\u4E2A\u8282\u70B9</td>
</tr>
<tr>
<td>hlist_add_behind</td>
<td>\u5728\u6307\u5B9A\u8282\u70B9\u4E4B\u540E\u6DFB\u52A0\u4E00\u4E2A\u8282\u70B9</td>
</tr>
<tr>
<td>hlist_add_fake</td>
<td></td>
</tr>
<tr>
<td>hlist_fake</td>
<td></td>
</tr>
<tr>
<td>hlist_is_singular_node</td>
<td>\u5224\u65ADhlist\u662F\u5426\u53EA\u6709\u4E00\u4E2A\u8282\u70B9</td>
</tr>
<tr>
<td>hlist_move_list</td>
<td>\u5C06\u4E00\u4E2Ahash\u94FE\u8868\u4ECE\u4E00\u4E2Ahlist_head\u79FB\u52A8\u5230\u53E6\u5916\u4E00\u4E2Ahlist_head</td>
</tr>
<tr>
<td>hlist_entry</td>
<td>\u6839\u636Ehlist_node\u627E\u5230\u5176\u5916\u5C42\u7ED3\u6784\u4F53</td>
</tr>
<tr>
<td>hlist_entry_safe</td>
<td>\u540C\u4E0A</td>
</tr>
<tr>
<td>hlist_for_each	\u904D\u5386hash\u94FE\u8868</td>
<td></td>
</tr>
<tr>
<td>hlist_for_each_safe</td>
<td>\u540C\u4E0A</td>
</tr>
<tr>
<td>hlist_for_each_entry</td>
<td>\u904D\u5386hash\u94FE\u8868</td>
</tr>
<tr>
<td>hlist_for_each_entry_safe</td>
<td>\u540C\u4E0A</td>
</tr>
<tr>
<td>hlist_for_each_entry_continue</td>
<td>\u4ECE\u5F53\u524D\u8282\u70B9\u4E4B\u540E\u904D\u5386hash\u94FE\u8868</td>
</tr>
<tr>
<td>hlist_for_each_entry_from</td>
<td>\u4ECE\u5F53\u524D\u8282\u70B9\u5F00\u59CB\u904D\u5386hash\u94FE\u8868</td>
</tr>
</tbody>
</table>
<h2>\u7A0B\u5E8F\u793A\u4F8B</h2>
<p>\u5199\u4E00\u4E2A\u6D4B\u8BD5\u6A21\u5757\uFF0C\u9A8C\u8BC1\u4E00\u4E0B\u5404\u4E2AAPI</p>
<p>\u6A21\u5757\u4EE3\u7801</p>
<pre><code class="language-c">#include &lt;linux/module.h&gt;
#include &lt;linux/kernel.h&gt;
#include &lt;linux/init.h&gt;
#include &lt;linux/list.h&gt;
struct node {
	int val;
	struct hlist_node list;
};
static int __init hlist_test_init(void)
{
	struct hlist_head  head;
	struct node a, b, c, d, e;
	struct node *pos;
	struct hlist_node *p;
	printk(KERN_ALERT &quot;[Hello] hlist_test \\n&quot;);
	INIT_HLIST_HEAD(&amp;head); //\u521D\u59CB\u5316\u94FE\u8868\u5934
	a.val = 1;
	b.val = 2;
	c.val = 3;
	d.val = 4;
	e.val = 5;
	hlist_add_head(&amp;a.list, &amp;head); //\u6DFB\u52A0\u8282\u70B9
	hlist_add_head(&amp;b.list, &amp;head);
	hlist_add_head(&amp;c.list, &amp;head);
	printk(KERN_ALERT &quot;-------------------------------------- \\n&quot;);
	//\u904D\u5386\u94FE\u8868\uFF0C\u6253\u5370\u7ED3\u679C \u65B9\u6CD51
	hlist_for_each_entry(pos, &amp;head, list) {
		printk(KERN_ALERT &quot;node.val = %d\\n&quot;, pos-&gt;val);
	} // print 3 2 1
	printk(KERN_ALERT &quot;-------------------------------------- \\n&quot;);
	// \u904D\u5386\u94FE\u8868\uFF0C\u6253\u5370\u7ED3\u679C \u65B9\u6CD52
	hlist_for_each(p, &amp;head) {
		pos = hlist_entry(p, struct node, list);
		printk(KERN_ALERT &quot;node.val = %d\\n&quot;, pos-&gt;val);
	} // print 3 2 1
	printk(KERN_ALERT &quot;-------------------------------------- \\n&quot;);
	hlist_del_init(&amp;b.list); // \u5220\u9664\u4E2D\u95F4\u8282\u70B9
	hlist_for_each_entry(pos, &amp;head, list) {
		printk(KERN_ALERT &quot;node.val = %d\\n&quot;, pos-&gt;val);
	} // print 3 1
	printk(KERN_ALERT &quot;-------------------------------------- \\n&quot;);
	hlist_add_before(&amp;d.list, &amp;a.list); //\u5728\u6700\u540E\u4E00\u4E2A\u8282\u70B9\u4E4B\u524D\u6DFB\u52A0\u65B0\u8282\u70B9
	hlist_for_each_entry(pos, &amp;head, list) {
		printk(KERN_ALERT &quot;node.val = %d\\n&quot;, pos-&gt;val);
	} // print 3 4 1
	printk(KERN_ALERT &quot;-------------------------------------- \\n&quot;);
	hlist_add_behind(&amp;e.list, &amp;a.list);//\u5728\u6700\u540E\u4E00\u4E2A\u8282\u70B9\u4E4B\u540E\u6DFB\u52A0\u65B0\u8282\u70B9
	hlist_for_each_entry(pos, &amp;head, list) {
		printk(KERN_ALERT &quot;node.val = %d\\n&quot;, pos-&gt;val);
	} // print 3 4 1 5
	return 0;
}
static void __exit hlist_test_exit(void)
{
	printk(KERN_ALERT &quot;[Goodbye] hlist_test\\n&quot;);
}
module_init(hlist_test_init);
module_exit(hlist_test_exit);
MODULE_LICENSE(&quot;GPL&quot;);
</code></pre>
<p>\u6267\u884C\u7ED3\u679C</p>
<pre><code>[  944.056943] [Hello] hlist_test 
[  944.056947] -------------------------------------- 
[  944.056948] node.val = 3
[  944.056949] node.val = 2
[  944.056950] node.val = 1
[  944.056951] -------------------------------------- 
[  944.056952] node.val = 3
[  944.056953] node.val = 2
[  944.056954] node.val = 1
[  944.056955] -------------------------------------- 
[  944.056956] node.val = 3
[  944.056957] node.val = 1
[  944.056958] -------------------------------------- 
[  944.056959] node.val = 3
[  944.056960] node.val = 4
[  944.056961] node.val = 1
[  944.056962] -------------------------------------- 
[  944.056963] node.val = 3
[  944.056964] node.val = 4
[  944.056965] node.val = 1
[  944.056965] node.val = 5
</code></pre>
<p>\u5176\u4ED6
\u5185\u6838\u4E2D\u7528hlist\u6765\u5B9E\u73B0 hash table\uFF0C\u5728\u5185\u6838\u4E0A\u4E00\u822C\u6709\u5982\u4E0B\u7684hash table\uFF1A</p>
<pre><code># dmesg | grep &quot;hash table entries&quot; 
</code></pre>
<pre><code>[    0.000000] PV qspinlock hash table entries: 256 (order: 0, 4096 bytes)
[    0.000000] PID hash table entries: 4096 (order: 3, 32768 bytes)
[    0.294869] Dentry cache hash table entries: 524288 (order: 10, 4194304 bytes)
[    0.296328] Inode-cache hash table entries: 262144 (order: 9, 2097152 bytes)
[    0.296589] Mount-cache hash table entries: 8192 (order: 4, 65536 bytes)
[    0.296595] Mountpoint-cache hash table entries: 8192 (order: 4, 65536 bytes)
[    0.614525] TCP established hash table entries: 32768 (order: 6, 262144 bytes)
[    0.614769] TCP bind hash table entries: 32768 (order: 9, 2621440 bytes)
[    0.616607] UDP hash table entries: 2048 (order: 6, 393216 bytes)
[    0.616794] UDP-Lite hash table entries: 2048 (order: 6, 393216 bytes)
[    1.053747] futex hash table entries: 1024 (order: 5, 131072 bytes)
[    1.079062] Dquot-cache hash table entries: 512 (order 0, 4096 bytes)
</code></pre>
`,s=e(`<p>\u539F\u6587\uFF1A <a href="http://linux.laoqinren.net/kernel/hlist/">http://linux.laoqinren.net/kernel/hlist/</a></p><h2>\u6570\u636E\u7ED3\u6784</h2><p><strong>hlist_head</strong> \u548C <strong>hlist_node</strong> \u7528\u4E8E\u6563\u5217\u8868\uFF0C\u5206\u522B\u8868\u793A\u5217\u8868\u5934\uFF08\u6570\u7EC4\u4E2D\u7684\u4E00\u9879\uFF09\u548C\u5217\u8868\u5934\u6240\u5728\u53CC\u5411\u94FE\u8868\u4E2D\u7684\u67D0\u9879\uFF0C\u4E24\u8005\u7ED3\u6784\u5982\u4E0B:</p><p>include/linux/types.h(line 190)</p><pre><code class="language-c">struct hlist_head {
	struct hlist_node *first;
};
</code></pre><p>include/linux/types.h(line 194)</p><pre><code class="language-c">struct hlist_node {
	struct hlist_node *next, **pprev;
};
</code></pre><p>\u5728\u5185\u6838\u4E2D\u7684\u666E\u901A\u53CC\u5411\u94FE\u8868\u57FA\u672C\u4E0A\u90FD\u662F\u901A\u8FC7 <strong>list_head</strong> \u5B9E\u73B0\u7684\uFF1A</p><p>include/linux/types.h(line 186)</p><pre><code class="language-c">struct list_head {
	struct list_head *next, *prev;
};
</code></pre><p><strong>list_head</strong> \u5F88\u597D\u7406\u89E3\uFF0C\u4F46\u662F <strong>hlist_head</strong> \u548C <strong>hlist_node</strong> \u4E3A\u4F55\u8981\u8FD9\u6837\u8BBE\u8BA1\u5462\uFF1F</p><p>\u5148\u770B\u4E0Bhlist_head\u548Chlist_node\u7684\u793A\u610F\u56FE: <img src="https://i-blog.csdnimg.cn/blog_migrate/6d7d268164822b2e55e3cd93910747df.png#pic_center" alt="hashtable"><strong>hash_table</strong> \u4E3A\u6563\u5217\u8868\uFF08\u6570\u7EC4\uFF09\uFF0C\u5176\u4E2D\u7684\u5143\u7D20\u7C7B\u578B\u4E3A <strong>struct hlist_head</strong> \u3002\u4EE5 <strong>hlist_head</strong> \u4E3A\u94FE\u8868\u5934\u7684\u94FE\u8868\uFF0C\u5176\u4E2D\u7684\u8282\u70B9hash\u503C\u662F\u76F8\u540C\u7684\uFF08\u4E5F\u53EB\u51B2\u7A81\uFF09\u3002first\u6307\u9488\u6307\u5411\u94FE\u8868\u4E2D\u7684\u8282\u70B9\u2460\uFF0C\u7136\u540E\u8282\u70B9\u2460\u7684 <strong>pprev</strong> \u6307\u9488\u6307\u5411 <strong>hlist_head</strong> \u4E2D \u7684 <strong>first</strong> \uFF0C\u8282\u70B9\u2460\u7684 <strong>next</strong> \u6307\u9488\u6307\u5411\u8282\u70B9\u2461\u3002\u4EE5\u6B64\u7C7B\u63A8\u3002</p><p><strong>hash_table</strong> \u7684\u5217\u8868\u5934\u4EC5\u5B58\u653E\u4E00\u4E2A\u6307\u9488,\u4E5F\u5C31\u662F <strong>first</strong> \u6307\u9488,\u6307\u5411\u7684\u662F\u5BF9\u5E94\u94FE\u8868\u7684\u5934\u7ED3\u70B9,\u6CA1\u6709tail\u6307\u9488,\u4E5F\u5C31\u662F\u6307\u5411\u94FE\u8868\u5C3E\u8282\u70B9\u7684\u6307\u9488,\u8FD9\u6837\u7684\u8003\u8651\u662F\u4E3A\u4E86\u8282\u7701\u7A7A\u95F4\u2014\u2014\u5C24\u5176\u5728 <strong>hash bucket</strong> (\u6570\u7EC4size)\u5F88\u5927\u7684\u60C5\u51B5\u4E0B\u53EF\u4EE5\u8282\u7701\u4E00\u534A\u7684\u6307\u9488\u7A7A\u95F4\u3002</p><p><strong>\u4E3A\u4EC0\u4E48pprev\u662F\u4E00\u4E2A\u6307\u5411\u6307\u9488\u7684\u6307\u9488\u5462\uFF1F</strong> \u6309\u7167\u8FD9\u4E2A\u8BBE\u8BA1\uFF0C\u6211\u4EEC\u5982\u679C\u60F3\u8981\u5F97\u5230\u5C3E\u8282\u70B9\uFF0C\u5FC5\u987B\u904D\u5386\u6574\u4E2A\u94FE\u8868\uFF0C\u53EF\u5982\u679C\u662F\u4E00\u4E2A\u6307\u5411\u8282\u70B9\u7684\u6307\u9488\uFF0C\u90A3\u4E48\u5934\u7ED3\u70B9\u73B0\u5728\u7684<strong>pprev</strong>\u4FBF\u53EF\u4EE5\u76F4\u63A5\u6307\u5411\u5C3E\u8282\u70B9\uFF0C\u4E5F\u5C31\u662Flist_head\u7684\u505A\u6CD5\u3002</p><p>\u5BF9\u4E8E\u6563\u5217\u8868\u6765\u8BF4\uFF0C\u4E00\u822C\u53D1\u751F\u51B2\u7A81\u7684\u60C5\u51B5\u5E76\u4E0D\u591A\uFF08\u9664\u975Ehash\u8BBE\u8BA1\u51FA\u73B0\u4E86\u95EE\u9898\uFF09\uFF0C\u6240\u4EE5\u4E00\u4E2A\u94FE\u8868\u4E2D\u7684\u5143\u7D20\u6570\u91CF\u6BD4\u8F83\u6709\u9650\uFF0C\u904D\u5386\u7684\u52A3\u52BF\u57FA\u672C\u53EF\u4EE5\u5FFD\u7565\u3002</p><p><strong>\u5728\u5220\u9664\u94FE\u8868\u5934\u7ED3\u70B9\u7684\u65F6\u5019\uFF0C<strong>pprev</strong> \u8FD9\u4E2A\u8BBE\u8BA1\u65E0\u9700\u5224\u65AD\u5220\u9664\u7684\u8282\u70B9\u662F\u5426\u4E3A\u5934\u7ED3\u70B9</strong>\u3002\u5982\u679C\u662F\u666E\u901A\u53CC\u5411\u94FE\u8868\u7684\u8BBE\u8BA1\uFF0C\u90A3\u4E48\u5220\u9664\u5934\u7ED3\u70B9\u4E4B\u540E\uFF0C<strong>hlist_head</strong>\u4E2D\u7684first\u6307\u9488\u9700\u8981\u6307\u5411\u65B0\u7684\u5934\u7ED3\u70B9\u3002\u901A\u8FC7\u4E0B\u97622\u4E2A\u51FD\u6570\u6765\u52A0\u6DF1\u7406\u89E3:</p><p>include/linux/list.h(line 669)</p><pre><code class="language-c">static inline void hlist_add_head(struct hlist_node *n, struct hlist_head *h)
{
	struct hlist_node *first = h-&gt;first;
	n-&gt;next = first; //\u65B0\u8282\u70B9\u7684next\u6307\u9488\u6307\u5411\u539F\u5934\u7ED3\u70B9
	if (first) 
		first-&gt;pprev = &amp;n-&gt;next;//\u539F\u5934\u7ED3\u70B9\u7684pprev\u6307\u5411\u65B0\u8282\u70B9\u7684next\u5B57\u6BB5
	WRITE_ONCE(h-&gt;first, n);//first\u6307\u9488\u6307\u5411\u65B0\u7684\u8282\u70B9\uFF08\u66F4\u6362\u4E86\u5934\u7ED3\u70B9\uFF09
	n-&gt;pprev = &amp;h-&gt;first;//\u6B64\u65F6n\u662F\u94FE\u8868\u7684\u5934\u7ED3\u70B9,\u5C06\u5B83\u7684pprev\u6307\u5411list_head\u7684first\u5B57\u6BB5
}
</code></pre><p>include/linux/list.h(line 644)</p><pre><code class="language-c">static inline void __hlist_del(struct hlist_node *n)
{
	struct hlist_node *next = n-&gt;next;
	struct hlist_node **pprev = n-&gt;pprev;
	WRITE_ONCE(*pprev, next); // pprev\u6307\u5411\u7684\u662F\u524D\u4E00\u4E2A\u8282\u70B9\u7684next\u6307\u9488,\u5F53\u8BE5\u8282\u70B9\u662F\u5934\u8282\u70B9\u65F6\u6307\u5411 hlist_head\u7684first,\u4E24\u79CD\u60C5\u51B5\u4E0B\u4E0D\u8BBA\u8BE5\u8282\u70B9\u662F\u4E00\u822C\u7684\u8282\u70B9\u8FD8\u662F\u5934\u7ED3\u70B9\u90FD\u53EF\u4EE5\u901A\u8FC7\u8FD9\u4E2A\u64CD\u4F5C\u5220\u9664\u6389\u6240\u9700\u5220\u9664\u7684\u8282\u70B9\u3002
	if (next)
		next-&gt;pprev = pprev;//\u4F7F\u5220\u9664\u8282\u70B9\u7684\u540E\u4E00\u4E2A\u8282\u70B9\u7684pprev\u6307\u5411\u5220\u9664\u8282\u70B9\u7684\u524D\u4E00\u4E2A\u8282\u70B9\u7684next\u5B57\u6BB5\uFF0C\u8282\u70B9\u6210\u529F\u5220\u9664\u3002
}
</code></pre><h2>\u76F8\u5173API</h2><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>API</td><td>\u8BF4\u660E</td></tr><tr><td>HLIST_HEAD_INIT</td><td>\u9759\u6001\u521D\u59CB\u5316hlist_head</td></tr><tr><td>HLIST_HEAD</td><td>\u9759\u6001\u521D\u59CB\u5316hlist_head</td></tr><tr><td>INIT_HLIST_HEAD</td><td>\u52A8\u6001\u521D\u59CB\u5316hlist_head</td></tr><tr><td>INIT_HLIST_NODE</td><td>\u52A8\u6001\u521D\u59CB\u5316hlist_node</td></tr><tr><td>hlist_unhashed</td><td>\u5224\u65ADhlist_node\u662F\u5426\u6DFB\u52A0\u5230hash\u94FE\u8868\u4E2D</td></tr><tr><td>hlist_empty</td><td>\u5224\u65ADhash\u94FE\u8868\u662F\u5426\u4E3A\u7A7A</td></tr><tr><td>hlist_del</td><td>\u5728hash\u94FE\u8868\u4E2D\u5220\u9664\u4E00\u4E2A\u8282\u70B9</td></tr><tr><td>hlist_del_init</td><td>\u5728hash\u94FE\u8868\u4E2D\u5220\u9664\u4E00\u4E2A\u8282\u70B9</td></tr><tr><td>hlist_add_head</td><td>\u5728hash\u94FE\u8868\u5934\u6DFB\u52A0\u4E00\u4E2A\u8282\u70B9</td></tr><tr><td>hlist_add_before</td><td>\u5728\u6307\u5B9A\u8282\u70B9\u4E4B\u524D\u6DFB\u52A0\u4E00\u4E2A\u8282\u70B9</td></tr><tr><td>hlist_add_behind</td><td>\u5728\u6307\u5B9A\u8282\u70B9\u4E4B\u540E\u6DFB\u52A0\u4E00\u4E2A\u8282\u70B9</td></tr><tr><td>hlist_add_fake</td><td></td></tr><tr><td>hlist_fake</td><td></td></tr><tr><td>hlist_is_singular_node</td><td>\u5224\u65ADhlist\u662F\u5426\u53EA\u6709\u4E00\u4E2A\u8282\u70B9</td></tr><tr><td>hlist_move_list</td><td>\u5C06\u4E00\u4E2Ahash\u94FE\u8868\u4ECE\u4E00\u4E2Ahlist_head\u79FB\u52A8\u5230\u53E6\u5916\u4E00\u4E2Ahlist_head</td></tr><tr><td>hlist_entry</td><td>\u6839\u636Ehlist_node\u627E\u5230\u5176\u5916\u5C42\u7ED3\u6784\u4F53</td></tr><tr><td>hlist_entry_safe</td><td>\u540C\u4E0A</td></tr><tr><td>hlist_for_each \u904D\u5386hash\u94FE\u8868</td><td></td></tr><tr><td>hlist_for_each_safe</td><td>\u540C\u4E0A</td></tr><tr><td>hlist_for_each_entry</td><td>\u904D\u5386hash\u94FE\u8868</td></tr><tr><td>hlist_for_each_entry_safe</td><td>\u540C\u4E0A</td></tr><tr><td>hlist_for_each_entry_continue</td><td>\u4ECE\u5F53\u524D\u8282\u70B9\u4E4B\u540E\u904D\u5386hash\u94FE\u8868</td></tr><tr><td>hlist_for_each_entry_from</td><td>\u4ECE\u5F53\u524D\u8282\u70B9\u5F00\u59CB\u904D\u5386hash\u94FE\u8868</td></tr></tbody></table><h2>\u7A0B\u5E8F\u793A\u4F8B</h2><p>\u5199\u4E00\u4E2A\u6D4B\u8BD5\u6A21\u5757\uFF0C\u9A8C\u8BC1\u4E00\u4E0B\u5404\u4E2AAPI</p><p>\u6A21\u5757\u4EE3\u7801</p><pre><code class="language-c">#include &lt;linux/module.h&gt;
#include &lt;linux/kernel.h&gt;
#include &lt;linux/init.h&gt;
#include &lt;linux/list.h&gt;
struct node {
	int val;
	struct hlist_node list;
};
static int __init hlist_test_init(void)
{
	struct hlist_head  head;
	struct node a, b, c, d, e;
	struct node *pos;
	struct hlist_node *p;
	printk(KERN_ALERT &quot;[Hello] hlist_test \\n&quot;);
	INIT_HLIST_HEAD(&amp;head); //\u521D\u59CB\u5316\u94FE\u8868\u5934
	a.val = 1;
	b.val = 2;
	c.val = 3;
	d.val = 4;
	e.val = 5;
	hlist_add_head(&amp;a.list, &amp;head); //\u6DFB\u52A0\u8282\u70B9
	hlist_add_head(&amp;b.list, &amp;head);
	hlist_add_head(&amp;c.list, &amp;head);
	printk(KERN_ALERT &quot;-------------------------------------- \\n&quot;);
	//\u904D\u5386\u94FE\u8868\uFF0C\u6253\u5370\u7ED3\u679C \u65B9\u6CD51
	hlist_for_each_entry(pos, &amp;head, list) {
		printk(KERN_ALERT &quot;node.val = %d\\n&quot;, pos-&gt;val);
	} // print 3 2 1
	printk(KERN_ALERT &quot;-------------------------------------- \\n&quot;);
	// \u904D\u5386\u94FE\u8868\uFF0C\u6253\u5370\u7ED3\u679C \u65B9\u6CD52
	hlist_for_each(p, &amp;head) {
		pos = hlist_entry(p, struct node, list);
		printk(KERN_ALERT &quot;node.val = %d\\n&quot;, pos-&gt;val);
	} // print 3 2 1
	printk(KERN_ALERT &quot;-------------------------------------- \\n&quot;);
	hlist_del_init(&amp;b.list); // \u5220\u9664\u4E2D\u95F4\u8282\u70B9
	hlist_for_each_entry(pos, &amp;head, list) {
		printk(KERN_ALERT &quot;node.val = %d\\n&quot;, pos-&gt;val);
	} // print 3 1
	printk(KERN_ALERT &quot;-------------------------------------- \\n&quot;);
	hlist_add_before(&amp;d.list, &amp;a.list); //\u5728\u6700\u540E\u4E00\u4E2A\u8282\u70B9\u4E4B\u524D\u6DFB\u52A0\u65B0\u8282\u70B9
	hlist_for_each_entry(pos, &amp;head, list) {
		printk(KERN_ALERT &quot;node.val = %d\\n&quot;, pos-&gt;val);
	} // print 3 4 1
	printk(KERN_ALERT &quot;-------------------------------------- \\n&quot;);
	hlist_add_behind(&amp;e.list, &amp;a.list);//\u5728\u6700\u540E\u4E00\u4E2A\u8282\u70B9\u4E4B\u540E\u6DFB\u52A0\u65B0\u8282\u70B9
	hlist_for_each_entry(pos, &amp;head, list) {
		printk(KERN_ALERT &quot;node.val = %d\\n&quot;, pos-&gt;val);
	} // print 3 4 1 5
	return 0;
}
static void __exit hlist_test_exit(void)
{
	printk(KERN_ALERT &quot;[Goodbye] hlist_test\\n&quot;);
}
module_init(hlist_test_init);
module_exit(hlist_test_exit);
MODULE_LICENSE(&quot;GPL&quot;);
</code></pre><p>\u6267\u884C\u7ED3\u679C</p><pre><code>[  944.056943] [Hello] hlist_test 
[  944.056947] -------------------------------------- 
[  944.056948] node.val = 3
[  944.056949] node.val = 2
[  944.056950] node.val = 1
[  944.056951] -------------------------------------- 
[  944.056952] node.val = 3
[  944.056953] node.val = 2
[  944.056954] node.val = 1
[  944.056955] -------------------------------------- 
[  944.056956] node.val = 3
[  944.056957] node.val = 1
[  944.056958] -------------------------------------- 
[  944.056959] node.val = 3
[  944.056960] node.val = 4
[  944.056961] node.val = 1
[  944.056962] -------------------------------------- 
[  944.056963] node.val = 3
[  944.056964] node.val = 4
[  944.056965] node.val = 1
[  944.056965] node.val = 5
</code></pre><p>\u5176\u4ED6 \u5185\u6838\u4E2D\u7528hlist\u6765\u5B9E\u73B0 hash table\uFF0C\u5728\u5185\u6838\u4E0A\u4E00\u822C\u6709\u5982\u4E0B\u7684hash table\uFF1A</p><pre><code># dmesg | grep &quot;hash table entries&quot; 
</code></pre><pre><code>[    0.000000] PV qspinlock hash table entries: 256 (order: 0, 4096 bytes)
[    0.000000] PID hash table entries: 4096 (order: 3, 32768 bytes)
[    0.294869] Dentry cache hash table entries: 524288 (order: 10, 4194304 bytes)
[    0.296328] Inode-cache hash table entries: 262144 (order: 9, 2097152 bytes)
[    0.296589] Mount-cache hash table entries: 8192 (order: 4, 65536 bytes)
[    0.296595] Mountpoint-cache hash table entries: 8192 (order: 4, 65536 bytes)
[    0.614525] TCP established hash table entries: 32768 (order: 6, 262144 bytes)
[    0.614769] TCP bind hash table entries: 32768 (order: 9, 2621440 bytes)
[    0.616607] UDP hash table entries: 2048 (order: 6, 393216 bytes)
[    0.616794] UDP-Lite hash table entries: 2048 (order: 6, 393216 bytes)
[    1.053747] futex hash table entries: 1024 (order: 5, 131072 bytes)
[    1.079062] Dquot-cache hash table entries: 512 (order 0, 4096 bytes)
</code></pre>`,31);function n(t,r){return s}const d={render:n};d.__hmrId="/Users/deng/Documents/GitHub/dengmengqiu.github.io/posts/post/os/linux_hlist_head.md";const o=t=>({components:t,render:n});export{d as VueComponent,o as VueComponentWith,l as attributes,a as html};
