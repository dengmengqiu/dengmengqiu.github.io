import"./vue-baa4c554.js";import{b as e}from"./@vue-3d103999.js";const o={},i=`<h2>vm_area_struct</h2>
<p><strong>linux</strong> \u5185\u6838\u4F7F\u7528 <strong>vm_area_struct</strong> \u7ED3\u6784\u6765\u8868\u793A\u4E00\u4E2A\u72EC\u7ACB\u7684\u865A\u62DF\u5185\u5B58\u533A\u57DF\uFF0C\u7531\u4E8E\u6BCF\u4E2A\u4E0D\u540C\u5730\u5740\u7684\u865A\u62DF\u5185\u5B58\u533A\u57DF\u529F\u80FD\u548C\u5185\u90E8\u673A\u5236\u90FD\u4E0D\u540C\uFF0C\u56E0\u6B64 <strong>\u4E00\u4E2A\u8FDB\u7A0B\u4F7F\u7528\u591A\u4E2Avm_area_struct\u7ED3\u6784\u6765\u5206\u522B\u8868\u793A\u4E0D\u540C\u7C7B\u578B\u7684\u865A\u62DF\u5185\u5B58\u533A\u57DF\uFF0C\u5305\u62EC\u865A\u62DF\u5185\u5B58\u7684\u8D77\u59CB\u548C\u7ED3\u675F\u5730\u5740\uFF0C\u4EE5\u53CA\u5185\u5B58\u7684\u8BBF\u95EE\u6743\u9650\u7B49</strong> \u3002\u5404\u4E2Avm_area_struct\u7ED3\u6784\u4F7F\u7528\u94FE\u8868\u6216\u8005\u6811\u5F62\u7ED3\u6784\u94FE\u63A5\uFF0C\u65B9\u4FBF\u8FDB\u7A0B\u5FEB\u901F\u8BBF\u95EE\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p>
<p><img src="https://i-blog.csdnimg.cn/blog_migrate/9f31339a492342163a3d97e995875688.png#pic_center" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p>
<p>Linux\u5185\u6838\u4E2D\uFF0C\u5173\u4E8E\u865A\u5B58\u7BA1\u7406\u7684 <strong>\u6700\u57FA\u672C\u7684\u7BA1\u7406\u5355\u5143</strong> \u5E94\u8BE5\u662F <strong>struct vm_area_struct</strong> \u4E86\uFF0C\u5B83\u63CF\u8FF0\u7684\u662F\u4E00\u6BB5\u8FDE\u7EED\u7684\u3001\u5177\u6709\u76F8\u540C\u8BBF\u95EE\u5C5E\u6027\u7684\u865A\u5B58\u7A7A\u95F4\uFF0C\u8BE5\u865A\u5B58\u7A7A\u95F4\u7684\u5927\u5C0F\u4E3A\u7269\u7406\u5185\u5B58\u9875\u9762\u7684\u6574\u6570\u500D\u3002</p>
<pre><code class="language-c">&lt;include/linux/mm_types.h&gt;
struct vm_area_struct {
    /* The first cache line has the info for VMA tree walking. */

    unsigned long vm_start;     /* Our start address within vm_mm. */
    unsigned long vm_end;       /* The first byte after our end address
                       within vm_mm. */
/*[vm_start, vm_end) \u8FD9\u4E48\u4E2A\u60C5\u51B5\uFF0C\u8868\u793A\u4E00\u5757\u865A\u62DF\u5185\u5B58\u7A7A\u95F4*/
    /* linked list of VM areas per task, sorted by address */
    struct vm_area_struct *vm_next, *vm_prev;
/*\u5728mm-&gt;mmap\u94FE\u8868\u4E2D\u524D\u540E\u8282\u70B9*/
    struct rb_node vm_rb;
/*\u63D2\u5165\u5230mm-&gt;mm_rb\u7EA2\u9ED1\u6811\u7684\u8282\u70B9*/
    /*
     * Largest free memory gap in bytes to the left of this VMA.
     * Either between this VMA and vma-&gt;vm_prev, or between one of the
     * VMAs below us in the VMA rbtree and its -&gt;vm_prev. This helps
     * get_unmapped_area find a free area of the right size.
     */
    unsigned long rb_subtree_gap;
/*\u4EE5\u5F53\u524Dvma\u4E3A\u6839\uFF0C\u5DE6\u5B50\u6811\u4E2D\u6700\u5927\u53EF\u7528\u865A\u62DF\u5185\u5B58\u533A\u57DF\u7684\u5927\u5C0F*/
    /* Second cache line starts here. */

    struct mm_struct *vm_mm;    /* The address space we belong to. */
/*\u540C\u4E00\u8FDB\u7A0B\u6240\u6709\u7684vma\u6307\u5411\u7684vm_mm\u662F\u76F8\u540C\u7684*/
    pgprot_t vm_page_prot;      /* Access permissions of this VMA. */
/*\u8BBF\u95EE\u6743\u9650*/
    unsigned long vm_flags;     /* Flags, see mm.h. */
/*\u5C5E\u6027\uFF0C\u8BE6\u770Bmm.h*/
    /*
     * For areas with an address space and backing store,
     * linkage into the address_space-&gt;i_mmap interval tree.
     *
     * For private anonymous mappings, a pointer to a null terminated string
     * in the user process containing the name given to the vma, or NULL
     * if unnamed.
     */
    union {
        struct {
            struct rb_node rb;
            unsigned long rb_subtree_last;
        } shared;
        const char __user *anon_name;
    };

    /*
     * A file's MAP_PRIVATE vma can be in both i_mmap tree and anon_vma
     * list, after a COW of one of the file pages.  A MAP_SHARED vma
     * can only be in the i_mmap tree.  An anonymous MAP_PRIVATE, stack
     * or brk vma (with NULL file) can only be in an anon_vma list.
     */
    struct list_head anon_vma_chain; /* Serialized by mmap_sem &amp;
                      * page_table_lock */
    struct anon_vma *anon_vma;  /* Serialized by page_table_lock */

    /* Function pointers to deal with this struct. */
    const struct vm_operations_struct *vm_ops;
/*\u8BE5vma\u64CD\u4F5C\u51FD\u6570\uFF0C\u5305\u62EC\u6253\u5F00\u3001\u5173\u95ED\u3001\u5EFA\u7ACB\u6620\u5C04\u4E09\u4E2A\u51FD\u6570*/

    /* Information about our backing store: */
    unsigned long vm_pgoff;     /* Offset (within vm_file) in PAGE_SIZE
                       units */
    struct file * vm_file;      /* File we map to (can be NULL). */
/*\u6587\u4EF6\u6620\u5C04\u7684\u6587\u4EF6\u4FE1\u606F\uFF0C\u533F\u540D\u6620\u5C04\u4E3ANULL*/
    void * vm_private_data;     /* was vm_pte (shared mem) */

    atomic_long_t swap_readahead_info;
#ifndef CONFIG_MMU
    struct vm_region *vm_region;    /* NOMMU mapping region */
#endif
#ifdef CONFIG_NUMA
    struct mempolicy *vm_policy;    /* NUMA policy for the VMA */
#endif
    struct vm_userfaultfd_ctx vm_userfaultfd_ctx;
#ifdef CONFIG_SPECULATIVE_PAGE_FAULT
    seqcount_t vm_sequence;     /* Speculative page fault field */
    atomic_t vm_ref_count;      /* see vma_get(), vma_put() */
#endif
} __randomize_layout;
</code></pre>
<p>\u2002\u2002vm_area_struct\u7ED3\u6784\u6240\u63CF\u8FF0\u7684\u865A\u5B58\u7A7A\u95F4\u4EE5 <strong>vm_start\u3001vm_end</strong> \u6210\u5458\u8868\u793A\uFF0C\u5B83\u4EEC\u5206\u522B\u4FDD\u5B58\u4E86\u8BE5\u865A\u5B58\u7A7A\u95F4\u7684\u9996\u5730\u5740\u548C\u672B\u5730\u5740\u540E\u7B2C\u4E00\u4E2A\u5B57\u8282\u7684\u5730\u5740\uFF0C\u4EE5\u5B57\u8282\u4E3A\u5355\u4F4D\uFF0C\u6240\u4EE5\u865A\u5B58\u7A7A\u95F4\u8303\u56F4\u53EF\u4EE5\u7528[vm_start, vm_end)\u8868\u793A\u3002</p>
<p>\u2002\u2002\u901A\u5E38\uFF0C<strong>\u8FDB\u7A0B\u6240\u4F7F\u7528\u5230\u7684\u865A\u5B58\u7A7A\u95F4\u4E0D\u8FDE\u7EED\uFF0C\u4E14\u5404\u90E8\u5206\u865A\u5B58\u7A7A\u95F4\u7684\u8BBF\u95EE\u5C5E\u6027\u4E5F\u53EF\u80FD\u4E0D\u540C\u3002\u6240\u4EE5\u4E00\u4E2A\u8FDB\u7A0B\u7684\u865A\u5B58\u7A7A\u95F4\u9700\u8981\u591A\u4E2Avm_area_struct\u7ED3\u6784\u6765\u63CF\u8FF0</strong>\u3002\u5728vm_area_struct\u7ED3\u6784\u7684\u6570\u76EE\u8F83\u5C11\u7684\u65F6\u5019\uFF0C\u5404\u4E2Avm_area_struct\u6309\u7167\u5347\u5E8F\u6392\u5E8F\uFF0C\u4EE5 <strong>\u5355\u94FE\u8868\u7684\u5F62\u5F0F\u7EC4\u7EC7\u6570\u636E</strong>\uFF08\u901A\u8FC7vm_next\u6307\u9488\u6307\u5411\u4E0B\u4E00\u4E2Avm_area_struct\u7ED3\u6784\uFF09\u3002\u4F46\u662F\u5F53vm_area_struct\u7ED3\u6784\u7684\u6570\u636E\u8F83\u591A\u7684\u65F6\u5019\uFF0C\u4ECD\u7136\u91C7\u7528\u94FE\u8868\u7EC4\u7EC7\u7684\u5316\uFF0C\u52BF\u5FC5\u4F1A\u5F71\u54CD\u5230\u5B83\u7684\u641C\u7D22\u901F\u5EA6\u3002\u9488\u5BF9\u8FD9\u4E2A\u95EE\u9898\uFF0Cvm_area_struct\u8FD8\u6DFB\u52A0\u4E86 <strong>vm_avl_hight</strong>\uFF08\u6811\u9AD8\uFF09\u3001 <strong>vm_avl_left</strong> \uFF08\u5DE6\u5B50\u8282\u70B9\uFF09\u3001<strong>vm_avl_right</strong>\uFF08\u53F3\u5B50\u8282\u70B9\uFF09\u4E09\u4E2A\u6210\u5458\u6765 <strong>\u5B9E\u73B0AVL\u6811</strong> \uFF0C\u4EE5\u63D0\u9AD8vm_area_struct\u7684\u641C\u7D22\u901F\u5EA6\u3002</p>
<p>\u2002\u2002\u5047\u5982\u8BE5vm_area_struct\u63CF\u8FF0\u7684\u662F\u4E00\u4E2A\u6587\u4EF6\u6620\u5C04\u7684\u865A\u5B58\u7A7A\u95F4\uFF0C\u6210\u5458 <strong>vm_file</strong> \u4FBF\u6307\u5411\u88AB\u6620\u5C04\u7684\u6587\u4EF6\u7684file\u7ED3\u6784\uFF0Cvm_pgoff\u662F\u8BE5\u865A\u5B58\u7A7A\u95F4\u8D77\u59CB\u5730\u5740\u5728vm_file\u6587\u4EF6\u91CC\u9762\u7684\u6587\u4EF6\u504F\u79FB\uFF0C\u5355\u4F4D\u4E3A\u7269\u7406\u9875\u9762\u3002</p>
<p>\u2002\u2002\u4E00\u4E2A\u7A0B\u5E8F\u53EF\u4EE5\u9009\u62E9MAP_SHARED\u6216MAP_PRIVATE\u5171\u4EAB\u6A21\u5F0F\u5C06\u4E00\u4E2A\u6587\u4EF6\u7684\u67D0\u90E8\u5206\u6570\u636E\u6620\u5C04\u5230\u81EA\u5DF1\u7684\u865A\u5B58\u7A7A\u95F4\u91CC\u9762\u3002\u8FD9\u4E24\u79CD\u6620\u5C04\u65B9\u5F0F\u7684\u533A\u522B\u5728\u4E8E\uFF1AMAP_SHARED\u6620\u5C04\u540E\u5728\u5185\u5B58\u4E2D\u5BF9\u8BE5\u865A\u5B58\u7A7A\u95F4\u7684\u6570\u636E\u8FDB\u884C\u4FEE\u6539\u4F1A\u5F71\u54CD\u5230\u5176\u4ED6\u4EE5\u540C\u6837\u65B9\u5F0F\u6620\u5C04\u8BE5\u90E8\u5206\u6570\u636E\u7684\u8FDB\u7A0B\uFF0C\u5E76\u4E14\u8BE5\u4FEE\u6539\u8FD8\u4F1A\u88AB\u5199\u56DE\u6587\u4EF6\u91CC\u9762\u53BB\uFF0C\u4E5F\u5C31\u662F\u8FD9\u4E9B\u8FDB\u7A0B\u5B9E\u9645\u4E0A\u662F\u5728\u5171\u7528\u8FD9\u4E9B\u6570\u636E\u3002\u800CMAP_PRIVATE\u6620\u5C04\u540E\u5BF9\u8BE5\u865A\u5B58\u7A7A\u95F4\u7684\u6570\u636E\u8FDB\u884C\u4FEE\u6539\u4E0D\u4F1A\u5F71\u54CD\u5230\u5176\u4ED6\u8FDB\u7A0B\uFF0C\u4E5F\u4E0D\u4F1A\u88AB\u5199\u5165\u6587\u4EF6\u4E2D\u3002</p>
<p>\u2002\u2002\u6765\u81EA\u4E0D\u540C\u8FDB\u7A0B\uFF0C\u6240\u6709\u6620\u5C04\u540C\u4E00\u4E2A\u6587\u4EF6\u7684vm_area_struct\u7ED3\u6784\u90FD\u4F1A\u6839\u636E\u5176\u5171\u4EAB\u6A21\u5F0F\u5206\u522B\u7EC4\u7EC7\u6210\u4E24\u4E2A\u94FE\u8868\u3002\u94FE\u8868\u7684\u94FE\u5934\u5206\u522B\u662F\uFF1Avm_file-&gt;f_dentry-&gt;d_inode-&gt;i_mapping-&gt;i_mmap_shared, vm_file-&gt;f_dentry-&gt;d_inode-&gt;i_mapping-&gt;i_mmap\u3002\u800Cvm_area_struct\u7ED3\u6784\u4E2D\u7684vm_next_share\u6307\u5411\u94FE\u8868\u4E2D\u7684\u4E0B\u4E00\u4E2A\u8282\u70B9\uFF1Bvm_pprev_share\u662F\u4E00\u4E2A\u6307\u9488\u7684\u6307\u9488\uFF0C\u5B83\u7684\u503C\u662F\u94FE\u8868\u4E2D\u4E0A\u4E00\u4E2A\u8282\u70B9\uFF08\u5934\u8282\u70B9\uFF09\u7ED3\u6784\u7684vm_next_share\uFF08i_mmap_shared\u6216i_mmap\uFF09\u7684\u5730\u5740\u3002</p>
<p>\u2002\u2002\u8FDB\u7A0B\u5EFA\u7ACBvm_area_struct\u7ED3\u6784\u540E\uFF0C\u53EA\u662F\u8BF4\u660E\u8FDB\u7A0B\u53EF\u4EE5\u8BBF\u95EE\u8FD9\u4E2A\u865A\u5B58\u7A7A\u95F4\uFF0C\u4F46\u6709\u53EF\u80FD\u8FD8\u6CA1\u6709\u5206\u914D\u76F8\u5E94\u7684\u7269\u7406\u9875\u9762\u5E76\u5EFA\u7ACB\u597D\u9875\u9762\u6620\u5C04\u3002\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u82E5\u662F\u8FDB\u7A0B\u6267\u884C\u4E2D\u6709\u6307\u4EE4\u9700\u8981\u8BBF\u95EE\u8BE5\u865A\u5B58\u7A7A\u95F4\u4E2D\u7684\u5185\u5B58\uFF0C\u4FBF\u4F1A\u4EA7\u751F\u4E00\u6B21\u7F3A\u9875\u5F02\u5E38\u3002\u8FD9\u65F6\u5019\uFF0C\u5C31\u9700\u8981\u901A\u8FC7vm_area_struct\u7ED3\u6784\u91CC\u9762\u7684 <strong>vm_ops-&gt;nopage</strong> \u6240\u6307\u5411\u7684\u51FD\u6570\u6765\u5C06\u4EA7\u751F\u7F3A\u9875\u5F02\u5E38\u7684\u5730\u5740\u5BF9\u5E94\u7684\u6587\u4EF6\u6570\u636E\u8BFB\u53D6\u51FA\u6765\u3002</p>
<p>\u2002\u2002vm_flags\u4E3B\u8981\u4FDD\u5B58\u4E86\u8FDB\u7A0B\u5BF9\u8BE5\u865A\u5B58\u7A7A\u95F4\u7684\u8BBF\u95EE\u6743\u9650\uFF0C\u7136\u540E\u8FD8\u6709\u4E00\u4E9B\u5176\u4ED6\u7684\u5C5E\u6027\u3002<strong>vm_page_prot</strong> \u662F\u65B0\u6620\u5C04\u7684\u7269\u7406\u9875\u9762\u7684\u9875\u8868\u9879pgprot\u7684\u9ED8\u8BA4\u503C\u3002</p>
<p>\u642C\u81EA\uFF1A<a href="https://blog.csdn.net/ywf861029/article/details/6114794">https://blog.csdn.net/ywf861029/article/details/6114794</a></p>
<p><a href="https://www.cnblogs.com/feng9exe/p/6879273.html">https://www.cnblogs.com/feng9exe/p/6879273.html</a></p>
`,a=e(`<h2>vm_area_struct</h2><p><strong>linux</strong> \u5185\u6838\u4F7F\u7528 <strong>vm_area_struct</strong> \u7ED3\u6784\u6765\u8868\u793A\u4E00\u4E2A\u72EC\u7ACB\u7684\u865A\u62DF\u5185\u5B58\u533A\u57DF\uFF0C\u7531\u4E8E\u6BCF\u4E2A\u4E0D\u540C\u5730\u5740\u7684\u865A\u62DF\u5185\u5B58\u533A\u57DF\u529F\u80FD\u548C\u5185\u90E8\u673A\u5236\u90FD\u4E0D\u540C\uFF0C\u56E0\u6B64 <strong>\u4E00\u4E2A\u8FDB\u7A0B\u4F7F\u7528\u591A\u4E2Avm_area_struct\u7ED3\u6784\u6765\u5206\u522B\u8868\u793A\u4E0D\u540C\u7C7B\u578B\u7684\u865A\u62DF\u5185\u5B58\u533A\u57DF\uFF0C\u5305\u62EC\u865A\u62DF\u5185\u5B58\u7684\u8D77\u59CB\u548C\u7ED3\u675F\u5730\u5740\uFF0C\u4EE5\u53CA\u5185\u5B58\u7684\u8BBF\u95EE\u6743\u9650\u7B49</strong> \u3002\u5404\u4E2Avm_area_struct\u7ED3\u6784\u4F7F\u7528\u94FE\u8868\u6216\u8005\u6811\u5F62\u7ED3\u6784\u94FE\u63A5\uFF0C\u65B9\u4FBF\u8FDB\u7A0B\u5FEB\u901F\u8BBF\u95EE\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://i-blog.csdnimg.cn/blog_migrate/9f31339a492342163a3d97e995875688.png#pic_center" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p><p>Linux\u5185\u6838\u4E2D\uFF0C\u5173\u4E8E\u865A\u5B58\u7BA1\u7406\u7684 <strong>\u6700\u57FA\u672C\u7684\u7BA1\u7406\u5355\u5143</strong> \u5E94\u8BE5\u662F <strong>struct vm_area_struct</strong> \u4E86\uFF0C\u5B83\u63CF\u8FF0\u7684\u662F\u4E00\u6BB5\u8FDE\u7EED\u7684\u3001\u5177\u6709\u76F8\u540C\u8BBF\u95EE\u5C5E\u6027\u7684\u865A\u5B58\u7A7A\u95F4\uFF0C\u8BE5\u865A\u5B58\u7A7A\u95F4\u7684\u5927\u5C0F\u4E3A\u7269\u7406\u5185\u5B58\u9875\u9762\u7684\u6574\u6570\u500D\u3002</p><pre><code class="language-c">&lt;include/linux/mm_types.h&gt;
struct vm_area_struct {
    /* The first cache line has the info for VMA tree walking. */

    unsigned long vm_start;     /* Our start address within vm_mm. */
    unsigned long vm_end;       /* The first byte after our end address
                       within vm_mm. */
/*[vm_start, vm_end) \u8FD9\u4E48\u4E2A\u60C5\u51B5\uFF0C\u8868\u793A\u4E00\u5757\u865A\u62DF\u5185\u5B58\u7A7A\u95F4*/
    /* linked list of VM areas per task, sorted by address */
    struct vm_area_struct *vm_next, *vm_prev;
/*\u5728mm-&gt;mmap\u94FE\u8868\u4E2D\u524D\u540E\u8282\u70B9*/
    struct rb_node vm_rb;
/*\u63D2\u5165\u5230mm-&gt;mm_rb\u7EA2\u9ED1\u6811\u7684\u8282\u70B9*/
    /*
     * Largest free memory gap in bytes to the left of this VMA.
     * Either between this VMA and vma-&gt;vm_prev, or between one of the
     * VMAs below us in the VMA rbtree and its -&gt;vm_prev. This helps
     * get_unmapped_area find a free area of the right size.
     */
    unsigned long rb_subtree_gap;
/*\u4EE5\u5F53\u524Dvma\u4E3A\u6839\uFF0C\u5DE6\u5B50\u6811\u4E2D\u6700\u5927\u53EF\u7528\u865A\u62DF\u5185\u5B58\u533A\u57DF\u7684\u5927\u5C0F*/
    /* Second cache line starts here. */

    struct mm_struct *vm_mm;    /* The address space we belong to. */
/*\u540C\u4E00\u8FDB\u7A0B\u6240\u6709\u7684vma\u6307\u5411\u7684vm_mm\u662F\u76F8\u540C\u7684*/
    pgprot_t vm_page_prot;      /* Access permissions of this VMA. */
/*\u8BBF\u95EE\u6743\u9650*/
    unsigned long vm_flags;     /* Flags, see mm.h. */
/*\u5C5E\u6027\uFF0C\u8BE6\u770Bmm.h*/
    /*
     * For areas with an address space and backing store,
     * linkage into the address_space-&gt;i_mmap interval tree.
     *
     * For private anonymous mappings, a pointer to a null terminated string
     * in the user process containing the name given to the vma, or NULL
     * if unnamed.
     */
    union {
        struct {
            struct rb_node rb;
            unsigned long rb_subtree_last;
        } shared;
        const char __user *anon_name;
    };

    /*
     * A file&#39;s MAP_PRIVATE vma can be in both i_mmap tree and anon_vma
     * list, after a COW of one of the file pages.  A MAP_SHARED vma
     * can only be in the i_mmap tree.  An anonymous MAP_PRIVATE, stack
     * or brk vma (with NULL file) can only be in an anon_vma list.
     */
    struct list_head anon_vma_chain; /* Serialized by mmap_sem &amp;
                      * page_table_lock */
    struct anon_vma *anon_vma;  /* Serialized by page_table_lock */

    /* Function pointers to deal with this struct. */
    const struct vm_operations_struct *vm_ops;
/*\u8BE5vma\u64CD\u4F5C\u51FD\u6570\uFF0C\u5305\u62EC\u6253\u5F00\u3001\u5173\u95ED\u3001\u5EFA\u7ACB\u6620\u5C04\u4E09\u4E2A\u51FD\u6570*/

    /* Information about our backing store: */
    unsigned long vm_pgoff;     /* Offset (within vm_file) in PAGE_SIZE
                       units */
    struct file * vm_file;      /* File we map to (can be NULL). */
/*\u6587\u4EF6\u6620\u5C04\u7684\u6587\u4EF6\u4FE1\u606F\uFF0C\u533F\u540D\u6620\u5C04\u4E3ANULL*/
    void * vm_private_data;     /* was vm_pte (shared mem) */

    atomic_long_t swap_readahead_info;
#ifndef CONFIG_MMU
    struct vm_region *vm_region;    /* NOMMU mapping region */
#endif
#ifdef CONFIG_NUMA
    struct mempolicy *vm_policy;    /* NUMA policy for the VMA */
#endif
    struct vm_userfaultfd_ctx vm_userfaultfd_ctx;
#ifdef CONFIG_SPECULATIVE_PAGE_FAULT
    seqcount_t vm_sequence;     /* Speculative page fault field */
    atomic_t vm_ref_count;      /* see vma_get(), vma_put() */
#endif
} __randomize_layout;
</code></pre><p>\u2002\u2002vm_area_struct\u7ED3\u6784\u6240\u63CF\u8FF0\u7684\u865A\u5B58\u7A7A\u95F4\u4EE5 <strong>vm_start\u3001vm_end</strong> \u6210\u5458\u8868\u793A\uFF0C\u5B83\u4EEC\u5206\u522B\u4FDD\u5B58\u4E86\u8BE5\u865A\u5B58\u7A7A\u95F4\u7684\u9996\u5730\u5740\u548C\u672B\u5730\u5740\u540E\u7B2C\u4E00\u4E2A\u5B57\u8282\u7684\u5730\u5740\uFF0C\u4EE5\u5B57\u8282\u4E3A\u5355\u4F4D\uFF0C\u6240\u4EE5\u865A\u5B58\u7A7A\u95F4\u8303\u56F4\u53EF\u4EE5\u7528[vm_start, vm_end)\u8868\u793A\u3002</p><p>\u2002\u2002\u901A\u5E38\uFF0C<strong>\u8FDB\u7A0B\u6240\u4F7F\u7528\u5230\u7684\u865A\u5B58\u7A7A\u95F4\u4E0D\u8FDE\u7EED\uFF0C\u4E14\u5404\u90E8\u5206\u865A\u5B58\u7A7A\u95F4\u7684\u8BBF\u95EE\u5C5E\u6027\u4E5F\u53EF\u80FD\u4E0D\u540C\u3002\u6240\u4EE5\u4E00\u4E2A\u8FDB\u7A0B\u7684\u865A\u5B58\u7A7A\u95F4\u9700\u8981\u591A\u4E2Avm_area_struct\u7ED3\u6784\u6765\u63CF\u8FF0</strong>\u3002\u5728vm_area_struct\u7ED3\u6784\u7684\u6570\u76EE\u8F83\u5C11\u7684\u65F6\u5019\uFF0C\u5404\u4E2Avm_area_struct\u6309\u7167\u5347\u5E8F\u6392\u5E8F\uFF0C\u4EE5 <strong>\u5355\u94FE\u8868\u7684\u5F62\u5F0F\u7EC4\u7EC7\u6570\u636E</strong>\uFF08\u901A\u8FC7vm_next\u6307\u9488\u6307\u5411\u4E0B\u4E00\u4E2Avm_area_struct\u7ED3\u6784\uFF09\u3002\u4F46\u662F\u5F53vm_area_struct\u7ED3\u6784\u7684\u6570\u636E\u8F83\u591A\u7684\u65F6\u5019\uFF0C\u4ECD\u7136\u91C7\u7528\u94FE\u8868\u7EC4\u7EC7\u7684\u5316\uFF0C\u52BF\u5FC5\u4F1A\u5F71\u54CD\u5230\u5B83\u7684\u641C\u7D22\u901F\u5EA6\u3002\u9488\u5BF9\u8FD9\u4E2A\u95EE\u9898\uFF0Cvm_area_struct\u8FD8\u6DFB\u52A0\u4E86 <strong>vm_avl_hight</strong>\uFF08\u6811\u9AD8\uFF09\u3001 <strong>vm_avl_left</strong> \uFF08\u5DE6\u5B50\u8282\u70B9\uFF09\u3001<strong>vm_avl_right</strong>\uFF08\u53F3\u5B50\u8282\u70B9\uFF09\u4E09\u4E2A\u6210\u5458\u6765 <strong>\u5B9E\u73B0AVL\u6811</strong> \uFF0C\u4EE5\u63D0\u9AD8vm_area_struct\u7684\u641C\u7D22\u901F\u5EA6\u3002</p><p>\u2002\u2002\u5047\u5982\u8BE5vm_area_struct\u63CF\u8FF0\u7684\u662F\u4E00\u4E2A\u6587\u4EF6\u6620\u5C04\u7684\u865A\u5B58\u7A7A\u95F4\uFF0C\u6210\u5458 <strong>vm_file</strong> \u4FBF\u6307\u5411\u88AB\u6620\u5C04\u7684\u6587\u4EF6\u7684file\u7ED3\u6784\uFF0Cvm_pgoff\u662F\u8BE5\u865A\u5B58\u7A7A\u95F4\u8D77\u59CB\u5730\u5740\u5728vm_file\u6587\u4EF6\u91CC\u9762\u7684\u6587\u4EF6\u504F\u79FB\uFF0C\u5355\u4F4D\u4E3A\u7269\u7406\u9875\u9762\u3002</p><p>\u2002\u2002\u4E00\u4E2A\u7A0B\u5E8F\u53EF\u4EE5\u9009\u62E9MAP_SHARED\u6216MAP_PRIVATE\u5171\u4EAB\u6A21\u5F0F\u5C06\u4E00\u4E2A\u6587\u4EF6\u7684\u67D0\u90E8\u5206\u6570\u636E\u6620\u5C04\u5230\u81EA\u5DF1\u7684\u865A\u5B58\u7A7A\u95F4\u91CC\u9762\u3002\u8FD9\u4E24\u79CD\u6620\u5C04\u65B9\u5F0F\u7684\u533A\u522B\u5728\u4E8E\uFF1AMAP_SHARED\u6620\u5C04\u540E\u5728\u5185\u5B58\u4E2D\u5BF9\u8BE5\u865A\u5B58\u7A7A\u95F4\u7684\u6570\u636E\u8FDB\u884C\u4FEE\u6539\u4F1A\u5F71\u54CD\u5230\u5176\u4ED6\u4EE5\u540C\u6837\u65B9\u5F0F\u6620\u5C04\u8BE5\u90E8\u5206\u6570\u636E\u7684\u8FDB\u7A0B\uFF0C\u5E76\u4E14\u8BE5\u4FEE\u6539\u8FD8\u4F1A\u88AB\u5199\u56DE\u6587\u4EF6\u91CC\u9762\u53BB\uFF0C\u4E5F\u5C31\u662F\u8FD9\u4E9B\u8FDB\u7A0B\u5B9E\u9645\u4E0A\u662F\u5728\u5171\u7528\u8FD9\u4E9B\u6570\u636E\u3002\u800CMAP_PRIVATE\u6620\u5C04\u540E\u5BF9\u8BE5\u865A\u5B58\u7A7A\u95F4\u7684\u6570\u636E\u8FDB\u884C\u4FEE\u6539\u4E0D\u4F1A\u5F71\u54CD\u5230\u5176\u4ED6\u8FDB\u7A0B\uFF0C\u4E5F\u4E0D\u4F1A\u88AB\u5199\u5165\u6587\u4EF6\u4E2D\u3002</p><p>\u2002\u2002\u6765\u81EA\u4E0D\u540C\u8FDB\u7A0B\uFF0C\u6240\u6709\u6620\u5C04\u540C\u4E00\u4E2A\u6587\u4EF6\u7684vm_area_struct\u7ED3\u6784\u90FD\u4F1A\u6839\u636E\u5176\u5171\u4EAB\u6A21\u5F0F\u5206\u522B\u7EC4\u7EC7\u6210\u4E24\u4E2A\u94FE\u8868\u3002\u94FE\u8868\u7684\u94FE\u5934\u5206\u522B\u662F\uFF1Avm_file-&gt;f_dentry-&gt;d_inode-&gt;i_mapping-&gt;i_mmap_shared, vm_file-&gt;f_dentry-&gt;d_inode-&gt;i_mapping-&gt;i_mmap\u3002\u800Cvm_area_struct\u7ED3\u6784\u4E2D\u7684vm_next_share\u6307\u5411\u94FE\u8868\u4E2D\u7684\u4E0B\u4E00\u4E2A\u8282\u70B9\uFF1Bvm_pprev_share\u662F\u4E00\u4E2A\u6307\u9488\u7684\u6307\u9488\uFF0C\u5B83\u7684\u503C\u662F\u94FE\u8868\u4E2D\u4E0A\u4E00\u4E2A\u8282\u70B9\uFF08\u5934\u8282\u70B9\uFF09\u7ED3\u6784\u7684vm_next_share\uFF08i_mmap_shared\u6216i_mmap\uFF09\u7684\u5730\u5740\u3002</p><p>\u2002\u2002\u8FDB\u7A0B\u5EFA\u7ACBvm_area_struct\u7ED3\u6784\u540E\uFF0C\u53EA\u662F\u8BF4\u660E\u8FDB\u7A0B\u53EF\u4EE5\u8BBF\u95EE\u8FD9\u4E2A\u865A\u5B58\u7A7A\u95F4\uFF0C\u4F46\u6709\u53EF\u80FD\u8FD8\u6CA1\u6709\u5206\u914D\u76F8\u5E94\u7684\u7269\u7406\u9875\u9762\u5E76\u5EFA\u7ACB\u597D\u9875\u9762\u6620\u5C04\u3002\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u82E5\u662F\u8FDB\u7A0B\u6267\u884C\u4E2D\u6709\u6307\u4EE4\u9700\u8981\u8BBF\u95EE\u8BE5\u865A\u5B58\u7A7A\u95F4\u4E2D\u7684\u5185\u5B58\uFF0C\u4FBF\u4F1A\u4EA7\u751F\u4E00\u6B21\u7F3A\u9875\u5F02\u5E38\u3002\u8FD9\u65F6\u5019\uFF0C\u5C31\u9700\u8981\u901A\u8FC7vm_area_struct\u7ED3\u6784\u91CC\u9762\u7684 <strong>vm_ops-&gt;nopage</strong> \u6240\u6307\u5411\u7684\u51FD\u6570\u6765\u5C06\u4EA7\u751F\u7F3A\u9875\u5F02\u5E38\u7684\u5730\u5740\u5BF9\u5E94\u7684\u6587\u4EF6\u6570\u636E\u8BFB\u53D6\u51FA\u6765\u3002</p><p>\u2002\u2002vm_flags\u4E3B\u8981\u4FDD\u5B58\u4E86\u8FDB\u7A0B\u5BF9\u8BE5\u865A\u5B58\u7A7A\u95F4\u7684\u8BBF\u95EE\u6743\u9650\uFF0C\u7136\u540E\u8FD8\u6709\u4E00\u4E9B\u5176\u4ED6\u7684\u5C5E\u6027\u3002<strong>vm_page_prot</strong> \u662F\u65B0\u6620\u5C04\u7684\u7269\u7406\u9875\u9762\u7684\u9875\u8868\u9879pgprot\u7684\u9ED8\u8BA4\u503C\u3002</p><p>\u642C\u81EA\uFF1A<a href="https://blog.csdn.net/ywf861029/article/details/6114794">https://blog.csdn.net/ywf861029/article/details/6114794</a></p><p><a href="https://www.cnblogs.com/feng9exe/p/6879273.html">https://www.cnblogs.com/feng9exe/p/6879273.html</a></p>`,14);function n(t,s){return a}const r={render:n};r.__hmrId="/Users/deng/Documents/GitHub/dengmengqiu.github.io/posts/post/os/linux_vm_area_struct.md";const g=t=>({components:t,render:n});export{r as VueComponent,g as VueComponentWith,o as attributes,i as html};
