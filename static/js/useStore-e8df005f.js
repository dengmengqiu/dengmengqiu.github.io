import"./vue-baa4c554.js";import{b as t}from"./@vue-3d103999.js";const d={},i=`<h1>vite+vuex4.x | hooks - useStore\u5931\u6548\u89E3\u51B3</h1>
<p>\u4ECA\u5929\u9047\u5230\u4E86\u4E2A\u8BA9\u4EBA<code>?</code>\u7684bug</p>
<h2>\u9700\u6C42\u60C5\u666F</h2>
<p>\u5F15\u5165<code>vuex - store</code>\uFF0C\u4F7F\u7528<code>store.dispatch</code>\u5411<code>action</code>\u6D3E\u53D1\u4EFB\u52A1</p>
<pre><code class="language-typescript">  //\u7EC4ITodo\uFF0C\u5E76dispatch\u7ED9action
  function setTodo(todoValue: string): void {
    const store: Store&lt;any&gt; = useStore();

    const todo: ITodo = {
      id: new Date().getTime(),
      content: todoValue,
      status: &quot;willdo&quot;,
    };

    store.dispatch(SET_TODO, todo);
  }
</code></pre>
<p>import</p>
<pre><code class="language-typescript">import { Store, useStore } from &quot;vuex&quot;;

</code></pre>
<h2>Error</h2>
<p><img src="image/image_JbaXF9C3JB.png" alt=""></p>
<p>\u5F88\u660E\u663E\uFF0C\u6B64\u5904\u7684<code>store</code>\u83B7\u53D6\u5931\u8D25</p>
<p>\u4E14warn\u63D0\u793A<code>useStore</code>\u53EA\u80FD\u4F7F\u7528\u5728<code>setup()</code>\u4E2D\uFF0C\u65E0\u8BED\uFF0C\u8BE5hooks\u6B63\u662F\u5F15\u5165\u7EC4\u4EF6<code>setup</code>\u4E2D</p>
<p><img src="image/image_dfIMbwU1AP.png" alt=""></p>
<h2>Solution</h2>
<p>\u65E2\u7136<code>useStore</code>\u4E0D\u80FD\u7ED9\u6211\u5E26\u6765\u65B0\u9C9C\u7684<code>store</code>\uFF0C\u90A3\u6211\u4EEC\u5C31\u6362\u4E2A\u601D\u8DEF\uFF0C\u81EA\u5DF1\u53BB\u62FF</p>
<p>\u4FEE\u6539<code>import</code></p>
<pre><code class="language-typescript">// import { Store, useStore } from &quot;vuex&quot;;
import store from &quot;../store/index&quot;; //\u5728\u5B9E\u4F8B\u4E2D\u5F15\u5165store\u624D\u6709\u6548\uFF0C\u4E0A\u4E00\u884CuseStore\u65E0\u6548\uFF0C\u5BB6\u4EBA\u4EEC\u611F\u89C9\u662Fvite\u6784\u5EFA\u7684\u95EE\u9898

</code></pre>
<p>\u6B64\u5904\u4F7F\u7528<code>../store</code>\u4E5F\u662F\u53EF\u4EE5\u7684</p>
<p><code>../store/index</code>:</p>
<pre><code class="language-typescript">import { createStore } from &quot;vuex&quot;;
import actions from &quot;./actions&quot;;
import mutations from &quot;./mutations&quot;;
import state from &quot;./state&quot;;

export default createStore({
  state,
  mutations,
  actions,
});

</code></pre>
<p>\u8FD9\u91CC\u7684\u9ED8\u8BA4\u5BFC\u51FA\uFF0C\u5B9E\u5219\u53EF\u4EE5\u5199\u6210</p>
<pre><code class="language-typescript">export const store = createStore(...)
</code></pre>
<p>\u4FEE\u6539\u5F15\u5165\u540E\u7684hooks\u4E2D\uFF0C\u6211\u4EEC\u76F4\u63A5\u4F7F\u7528<code>store</code>\u53CA\u5176\u65B9\u6CD5</p>
<pre><code class="language-typescript">  function setTodo(todoValue: string): void {
    // const store: Store&lt;any&gt; = useStore();

    const todo: ITodo = {
      id: new Date().getTime(),
      content: todoValue,
      status: &quot;willdo&quot;,
    };

    store.dispatch(SET_TODO, todo);
  }
</code></pre>
<p>warn\u548Cerror\u6D88\u5931</p>
<p><img src="image/image_1STSBYgtrs.png" alt=""></p>
<h2>\u95EE\u9898\u6EAF\u6E90</h2>
<p>\u67E5\u9605\u7F51\u7EDC + \u624B\u52A8\u6392\u9664\uFF0C\u51E0\u4E4E\u53EF\u786E\u5B9A\u4E3A\u662F<code>vite</code>\u7684\u539F\u56E0\uFF0C\u8BE5\u4EE3\u7801\uFF08\u62A5\u9519\u7248\u672C\uFF09\u5728<code>vue-cli + webpack</code>\u4E2D\u53EF\u6B63\u5E38\u4F7F\u7528\uFF0C\u5177\u4F53\u539F\u56E0\uFF0C\u54B1\u6CA1\u67E5\u5230\uFF0C\u672A\u6765\u6DF1\u7A76</p>
<h2>\u6269\u5C55</h2>
<p><code>useStore</code>\u7684\u4F5C\u7528</p>
<p><a href="https://vuex.vuejs.org/zh/guide/composition-api.html#%E7%BB%84%E5%90%88%E5%BC%8Fapi">https://vuex.vuejs.org/zh/guide/composition-api.html#\u7EC4\u5408\u5F0Fapi</a></p>
<p><code>useStore</code>\u6E90\u7801\u5206\u6790</p>
<pre><code class="language-typescript">function useStore (key) {
    
  if ( key === void 0 ) key = null;

  // \u76F4\u63A5\u901A\u8FC7key\u83B7\u53D6\u901A\u8FC7provide\u4FDD\u5B58\u7684store\u5BF9\u8C61
  return inject(key !== null ? key : storeKey)
}
</code></pre>
<p>\u8FD9\u4E5F\u89E3\u91CA\u4E86\u4E3A\u4F55\u6211\u4EEC\u5728hooks\u4E2D\u4F7F\u7528<code>useStore</code>\u65F6\u4F1A\u62A5<code>inject</code>\u8B66\u544A</p>
`,n=t(`<h1>vite+vuex4.x | hooks - useStore\u5931\u6548\u89E3\u51B3</h1><p>\u4ECA\u5929\u9047\u5230\u4E86\u4E2A\u8BA9\u4EBA<code>?</code>\u7684bug</p><h2>\u9700\u6C42\u60C5\u666F</h2><p>\u5F15\u5165<code>vuex - store</code>\uFF0C\u4F7F\u7528<code>store.dispatch</code>\u5411<code>action</code>\u6D3E\u53D1\u4EFB\u52A1</p><pre><code class="language-typescript">  //\u7EC4ITodo\uFF0C\u5E76dispatch\u7ED9action
  function setTodo(todoValue: string): void {
    const store: Store&lt;any&gt; = useStore();

    const todo: ITodo = {
      id: new Date().getTime(),
      content: todoValue,
      status: &quot;willdo&quot;,
    };

    store.dispatch(SET_TODO, todo);
  }
</code></pre><p>import</p><pre><code class="language-typescript">import { Store, useStore } from &quot;vuex&quot;;

</code></pre><h2>Error</h2><p><img src="image/image_JbaXF9C3JB.png" alt></p><p>\u5F88\u660E\u663E\uFF0C\u6B64\u5904\u7684<code>store</code>\u83B7\u53D6\u5931\u8D25</p><p>\u4E14warn\u63D0\u793A<code>useStore</code>\u53EA\u80FD\u4F7F\u7528\u5728<code>setup()</code>\u4E2D\uFF0C\u65E0\u8BED\uFF0C\u8BE5hooks\u6B63\u662F\u5F15\u5165\u7EC4\u4EF6<code>setup</code>\u4E2D</p><p><img src="image/image_dfIMbwU1AP.png" alt></p><h2>Solution</h2><p>\u65E2\u7136<code>useStore</code>\u4E0D\u80FD\u7ED9\u6211\u5E26\u6765\u65B0\u9C9C\u7684<code>store</code>\uFF0C\u90A3\u6211\u4EEC\u5C31\u6362\u4E2A\u601D\u8DEF\uFF0C\u81EA\u5DF1\u53BB\u62FF</p><p>\u4FEE\u6539<code>import</code></p><pre><code class="language-typescript">// import { Store, useStore } from &quot;vuex&quot;;
import store from &quot;../store/index&quot;; //\u5728\u5B9E\u4F8B\u4E2D\u5F15\u5165store\u624D\u6709\u6548\uFF0C\u4E0A\u4E00\u884CuseStore\u65E0\u6548\uFF0C\u5BB6\u4EBA\u4EEC\u611F\u89C9\u662Fvite\u6784\u5EFA\u7684\u95EE\u9898

</code></pre><p>\u6B64\u5904\u4F7F\u7528<code>../store</code>\u4E5F\u662F\u53EF\u4EE5\u7684</p><p><code>../store/index</code>:</p><pre><code class="language-typescript">import { createStore } from &quot;vuex&quot;;
import actions from &quot;./actions&quot;;
import mutations from &quot;./mutations&quot;;
import state from &quot;./state&quot;;

export default createStore({
  state,
  mutations,
  actions,
});

</code></pre><p>\u8FD9\u91CC\u7684\u9ED8\u8BA4\u5BFC\u51FA\uFF0C\u5B9E\u5219\u53EF\u4EE5\u5199\u6210</p><pre><code class="language-typescript">export const store = createStore(...)
</code></pre><p>\u4FEE\u6539\u5F15\u5165\u540E\u7684hooks\u4E2D\uFF0C\u6211\u4EEC\u76F4\u63A5\u4F7F\u7528<code>store</code>\u53CA\u5176\u65B9\u6CD5</p><pre><code class="language-typescript">  function setTodo(todoValue: string): void {
    // const store: Store&lt;any&gt; = useStore();

    const todo: ITodo = {
      id: new Date().getTime(),
      content: todoValue,
      status: &quot;willdo&quot;,
    };

    store.dispatch(SET_TODO, todo);
  }
</code></pre><p>warn\u548Cerror\u6D88\u5931</p><p><img src="image/image_1STSBYgtrs.png" alt></p><h2>\u95EE\u9898\u6EAF\u6E90</h2><p>\u67E5\u9605\u7F51\u7EDC + \u624B\u52A8\u6392\u9664\uFF0C\u51E0\u4E4E\u53EF\u786E\u5B9A\u4E3A\u662F<code>vite</code>\u7684\u539F\u56E0\uFF0C\u8BE5\u4EE3\u7801\uFF08\u62A5\u9519\u7248\u672C\uFF09\u5728<code>vue-cli + webpack</code>\u4E2D\u53EF\u6B63\u5E38\u4F7F\u7528\uFF0C\u5177\u4F53\u539F\u56E0\uFF0C\u54B1\u6CA1\u67E5\u5230\uFF0C\u672A\u6765\u6DF1\u7A76</p><h2>\u6269\u5C55</h2><p><code>useStore</code>\u7684\u4F5C\u7528</p><p><a href="https://vuex.vuejs.org/zh/guide/composition-api.html#%E7%BB%84%E5%90%88%E5%BC%8Fapi">https://vuex.vuejs.org/zh/guide/composition-api.html#\u7EC4\u5408\u5F0Fapi</a></p><p><code>useStore</code>\u6E90\u7801\u5206\u6790</p><pre><code class="language-typescript">function useStore (key) {
    
  if ( key === void 0 ) key = null;

  // \u76F4\u63A5\u901A\u8FC7key\u83B7\u53D6\u901A\u8FC7provide\u4FDD\u5B58\u7684store\u5BF9\u8C61
  return inject(key !== null ? key : storeKey)
}
</code></pre><p>\u8FD9\u4E5F\u89E3\u91CA\u4E86\u4E3A\u4F55\u6211\u4EEC\u5728hooks\u4E2D\u4F7F\u7528<code>useStore</code>\u65F6\u4F1A\u62A5<code>inject</code>\u8B66\u544A</p>`,33);function o(e,c){return n}const r={render:o};r.__hmrId="/Users/deng/Documents/GitHub/dengmengqiu.github.io/posts/post/useStore/useStore.md";const u=e=>({components:e,render:o});export{r as VueComponent,u as VueComponentWith,d as attributes,i as html};
