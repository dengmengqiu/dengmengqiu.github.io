import"./vue-baa4c554.js";import{b as o}from"./@vue-3d103999.js";const d={},r=`<h1>\u9762\u8BD5\u9898\u624B\u5199bind\uFF0C\u539F\u6765\u6CA1\u6709\u6211\u60F3\u5F97\u90A3\u4E48\u7B80\u5355</h1>
<blockquote>
<p>\u2623\uFE0F\u5BFC\u8BED\uFF1Abind\u4E0D\u4EC5\u662F\u7ED1\u5B9A\u4E0A\u4E0B\u6587\u548C\u9ED8\u8BA4\u53C2\u6570\uFF0C\u8FD8\u9700\u8981\u5E94\u5BF9\u4E00\u4E9B\u5982new\u8C03\u7528\u8FD9\u6837\u7684\u7279\u6B8A\u573A\u666F\uFF0C\u9700\u8981\u5728\u5185\u90E8\u5224\u65AD\u8C03\u7528\u73AF\u5883\u6539\u53D8\u4E0A\u4E0B\u6587\u5E76\u8BBE\u7F6E\u539F\u578B</p>
</blockquote>
<p>\u5148\u6765\u7B80\u5355\u56DE\u987E\u4E00\u4E0B<code>bind</code>\u662F\u5E72\u5565\u7684\uFF1A</p>
<blockquote>
<p><code>bind</code> - \u8FD4\u56DE\u7ED1\u5B9A\u4E0A\u4E0B\u6587\u548C\u53C2\u6570\u7684\u65B0\u51FD\u6570\uFF0C\u53EF\u7528\u4E8E\u751F\u4EA7\u504F\u51FD\u6570</p>
</blockquote>
<blockquote>
<p>\u8BED\u6CD5\uFF1A<code>let bound = func.bind(context, [arg1], [arg2], ...);</code></p>
</blockquote>
<p>\u6211\u9A6C\u4E0A\u61C2\u4E86\uFF0C\u8FD9\u4E0D\u5C31\u662F\u7528<code>apply</code>\u6784\u5EFA\u7684\u8BED\u6CD5\u7CD6\uFF0C\u800C<code>bind</code>\u7684\u4F5C\u7528\u5C31\u662F\u8BA9\u4F60\u4E0D\u7528\u6BCF\u6B21\u90FD\u5199apply\u53BB\u7ED1\u5B9A\u4E0A\u4E0B\u6587\u548C\u9ED8\u8BA4\u53C2\u6570</p>
<p>\u5509\u256E(\u256F\u25BD\u2570)\u256D\uFF0C\u4ECA\u5929\u7684\u624B\u5199\u4EE3\u7801\u6BCF\u65E5\u4E00\u9898\u53C8\u7ED3\u675F\u4E86</p>
<p>\u542D\u542D\u65BD\u5DE5\uFF1A</p>
<pre><code class="language-javascript">Function.prototype.myBind = function (context, ...args) {
  if (typeof this !== &quot;function&quot;) {
    throw new TypeError(&quot;The binding object must be a function&quot;);
  }
  const originFunc = this; // (*)
  return function () {
    return originFunc.apply(context,[...args, ...arguments]); 
  };
};
</code></pre>
<p>\u6D45\u6CE8\u610F\u4E00\u4E0B\u5728<code>(*)</code>\u5904\u8981\u4FDD\u5B58\u4E00\u4E0Bthis\uFF0C\u4E0D\u80FD\u76F4\u63A5\u5728\u8FD4\u56DE\u7684\u51FD\u6570\u91CC\u5199this\uFF0C\u56E0\u4E3A\u8FD4\u56DE\u51FD\u6570\u4E2Dthis\u7684\u503C\u662F\u8BE5\u51FD\u6570\u8C03\u7528\u7684\u65F6\u5019\u624D\u51B3\u5B9A\u7684</p>
<p>OK\uFF0C\u5927\u529F\u544A\u6210\uFF0C\u51FA\u4E8E\u4E25\u8C28\uFF0C\u770B\u770B\u522B\u4EBA\u5199\u7684\uFF08\u5176\u5B9E\u4E5F\u6CA1\u4EC0\u4E48\u597D\u770B\u7684\u5BF9\u5427\uFF09</p>
<pre><code class="language-javascript">// bind \u51FD\u6570\u5B9E\u73B0
Function.prototype.myBind = function(context) {
  // \u5224\u65AD\u8C03\u7528\u5BF9\u8C61\u662F\u5426\u4E3A\u51FD\u6570
  if (typeof this !== &quot;function&quot;) {
    throw new TypeError(&quot;Error&quot;);
  }
  // \u83B7\u53D6\u53C2\u6570
  var args = [...arguments].slice(1),
      fn = this;
  return function Fn() {
    // \u6839\u636E\u8C03\u7528\u65B9\u5F0F\uFF0C\u4F20\u5165\u4E0D\u540C\u7ED1\u5B9A\u503C
    return fn.apply(
      this instanceof Fn ? this : context, // (*)
      args.concat(...arguments)
    );
  };
};
</code></pre>
<p>\u8C22\uFF01<code>(*)</code>\u662F\u5565\uFF1F\u4E3A\u561B\u8981\u6574\u4E2A\u8FD9\uFF1F</p>
<p>\u9047\u4E8B\u4E0D\u89C9\uFF0C<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind#%E4%BD%9C%E4%B8%BA%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E4%BD%BF%E7%94%A8%E7%9A%84%E7%BB%91%E5%AE%9A%E5%87%BD%E6%95%B0" title="MDN\u91CC\u5B66\uFF01">MDN\u91CC\u5B66\uFF01</a></p>
<p><img src="image/image_mkkFnX67dR.png" alt=""></p>
<p>\u54E6\u54E6\uFF01\u662Fnew\uFF0C\u5F53\u6211\u4EEC\u7528new\u8C03\u7528\u7ED1\u5B9A\u51FD\u6570\u65F6...\u6211\u81EA\u5DF1\u4E5F\u6709\u70B9\u8FF7\u7CCA\u4E86w(\uFF9F\u0414\uFF9F)w</p>
<p>\u81EA\u5DF1\u6574\u4E2A\u4F8B\u5B50\u6D4B\u6D4B\uFF0C\u54FC</p>
<pre><code class="language-javascript">function Rabbit(name) {
  this.name = name;
}

const fake = {};

// myBind
let Rabbit_lee = Rabbit.myBind(fake, &quot;lee&quot;);
let rab = new Rabbit_lee();

console.log(fake); //  { name: 'lee' }
console.log(rab); // {}
console.log(rab instanceof Rabbit); // false

// bind
Rabbit_lee = Rabbit.bind(fake, &quot;lee&quot;);
rab = new Rabbit_lee();

console.log(fake); // {}
console.log(rab); // Rabbit { name: 'lee' }
console.log(rab instanceof Rabbit); // true

</code></pre>
<p>\u5982\u4E0A\uFF0CJS\u7684bind\u5E0C\u671B\u7684\u662F\u4F7F\u7528new\u8C03\u7528\u65F6\uFF0C\u539F\u5148\u7ED1\u5B9A\u7684\u4E0A\u4E0B\u6587\u88AB\u5FFD\u7565\uFF0C\u800C\u53EA\u4F7F\u7528\u7ED1\u5B9A\u7684\u9ED8\u8BA4\u53C2\u6570</p>
<p>\u56DE\u987E\u4E00\u4E0B\uFF0C<code>new</code>\u5173\u952E\u5B57\u4F1A\u8FDB\u884C\u5982\u4E0B\u64CD\u4F5C\uFF1A</p>
<ol>
<li>\u521B\u5EFA\u4E00\u4E2A\u7A7A\u7684\u7B80\u5355<code>JavaScript</code>\u5BF9\u8C61(\u5373<code>{}</code>)</li>
<li>\u5C06\u8FD9\u4E2A\u7A7A\u5BF9\u8C61\u7684\u539F\u578B\u6307\u5411\u6784\u9020\u51FD\u6570\u7684<code>prototype</code>\u5C5E\u6027</li>
<li>\u5C06\u6B65\u9AA41\u65B0\u521B\u5EFA\u7684\u5BF9\u8C61\u4F5C\u4E3A<code>this</code>\u7684\u4E0A\u4E0B\u6587</li>
<li>\u6267\u884C\u6784\u9020\u51FD\u6570\u5185\u90E8\u7684\u4EE3\u7801</li>
<li>\u5982\u679C\u8BE5\u51FD\u6570\u6CA1\u6709\u8FD4\u56DE\u5BF9\u8C61\uFF0C\u5219\u8FD4\u56DE<code>this</code></li>
</ol>
<p>\u6240\u4EE5\u8BF4\uFF0C\u9488\u5BF9\u8FD9\u4E2A\u7279\u6B8A\u8C03\u7528\u573A\u666F\uFF0C\u6211\u4EEC\u8981\u80FD\u81EA\u52A8\u6539\u53D8\u7ED1\u5B9A\u7684\u4E0A\u4E0B\u6587\uFF0C\u6765\u5427</p>
<p>\u56E0\u6B64\uFF0C\u6211\u4EEC\u9700\u8981\u5224\u65AD\u7ED1\u5B9A\u51FD\u6570<code>bound</code>\u662F\u5426\u5728\u88AB<code>new</code>\u8C03\u7528</p>
<p>\u56E0\u4E3A<code>new</code>\u4F1A\u5148\u5C06<code>this</code>\u7684\u539F\u578B\u6307\u5411\u6784\u9020\u51FD\u6570\u7684\u539F\u578B\uFF0C\u6240\u4EE5\u6B64\u65F6\u7684<code>this</code>\u662F\u53EF\u4EE5\u4F7F\u7528<code>instanceof</code>\u6765\u5224\u65AD\u662F\u4E0D\u662F<code>new</code>\u65B0\u521B\u9020\u7684\u5B9E\u4F8B\u7684</p>
<p>\u90A3\u4E48\u4EE3\u7801\u6765\u54AF</p>
<pre><code class="language-javascript">Function.prototype.myBind = function (context, ...args) {
  if (typeof this !== &quot;function&quot;) {
    throw new TypeError(&quot;The binding object must be a function&quot;);
  }
  const originFunc = this;
  function bound() {
    return originFunc.apply(this instanceof bound ? this : context, [
      ...args,
      ...arguments,
    ]);
  }
  bound.prototype = Object.create(originFunc.prototype); // (*)
  return bound;
};

</code></pre>
<p>\u9700\u8981\u6CE8\u610F\u7684\u662F\u5728<code>(*)</code>\uFF0C\u4E3A\u4E86\u5B8C\u6574\u6027\uFF0C\u4F7F\u5B9E\u4F8B\u53EF\u4EE5\u7528<code>instanceof</code>\u5224\u65AD\u539F\u578B\uFF0C\u6211\u4EEC\u4E5F\u8981\u4E3A<code>bound</code>\u8BBE\u7F6E\u539F\u578B\uFF0C\u56E0\u4E3A\u4ED6\u624D\u662F\u771F\u7684\u6784\u9020\u51FD\u6570\u5440\uFF08\u6709\u70B9\u9694\u58C1\u8001\u738B\u7684\u610F\u601DO(\u2229_\u2229)O~\uFF09</p>
`,t=o(`<h1>\u9762\u8BD5\u9898\u624B\u5199bind\uFF0C\u539F\u6765\u6CA1\u6709\u6211\u60F3\u5F97\u90A3\u4E48\u7B80\u5355</h1><blockquote><p>\u2623\uFE0F\u5BFC\u8BED\uFF1Abind\u4E0D\u4EC5\u662F\u7ED1\u5B9A\u4E0A\u4E0B\u6587\u548C\u9ED8\u8BA4\u53C2\u6570\uFF0C\u8FD8\u9700\u8981\u5E94\u5BF9\u4E00\u4E9B\u5982new\u8C03\u7528\u8FD9\u6837\u7684\u7279\u6B8A\u573A\u666F\uFF0C\u9700\u8981\u5728\u5185\u90E8\u5224\u65AD\u8C03\u7528\u73AF\u5883\u6539\u53D8\u4E0A\u4E0B\u6587\u5E76\u8BBE\u7F6E\u539F\u578B</p></blockquote><p>\u5148\u6765\u7B80\u5355\u56DE\u987E\u4E00\u4E0B<code>bind</code>\u662F\u5E72\u5565\u7684\uFF1A</p><blockquote><p><code>bind</code> - \u8FD4\u56DE\u7ED1\u5B9A\u4E0A\u4E0B\u6587\u548C\u53C2\u6570\u7684\u65B0\u51FD\u6570\uFF0C\u53EF\u7528\u4E8E\u751F\u4EA7\u504F\u51FD\u6570</p></blockquote><blockquote><p>\u8BED\u6CD5\uFF1A<code>let bound = func.bind(context, [arg1], [arg2], ...);</code></p></blockquote><p>\u6211\u9A6C\u4E0A\u61C2\u4E86\uFF0C\u8FD9\u4E0D\u5C31\u662F\u7528<code>apply</code>\u6784\u5EFA\u7684\u8BED\u6CD5\u7CD6\uFF0C\u800C<code>bind</code>\u7684\u4F5C\u7528\u5C31\u662F\u8BA9\u4F60\u4E0D\u7528\u6BCF\u6B21\u90FD\u5199apply\u53BB\u7ED1\u5B9A\u4E0A\u4E0B\u6587\u548C\u9ED8\u8BA4\u53C2\u6570</p><p>\u5509\u256E(\u256F\u25BD\u2570)\u256D\uFF0C\u4ECA\u5929\u7684\u624B\u5199\u4EE3\u7801\u6BCF\u65E5\u4E00\u9898\u53C8\u7ED3\u675F\u4E86</p><p>\u542D\u542D\u65BD\u5DE5\uFF1A</p><pre><code class="language-javascript">Function.prototype.myBind = function (context, ...args) {
  if (typeof this !== &quot;function&quot;) {
    throw new TypeError(&quot;The binding object must be a function&quot;);
  }
  const originFunc = this; // (*)
  return function () {
    return originFunc.apply(context,[...args, ...arguments]); 
  };
};
</code></pre><p>\u6D45\u6CE8\u610F\u4E00\u4E0B\u5728<code>(*)</code>\u5904\u8981\u4FDD\u5B58\u4E00\u4E0Bthis\uFF0C\u4E0D\u80FD\u76F4\u63A5\u5728\u8FD4\u56DE\u7684\u51FD\u6570\u91CC\u5199this\uFF0C\u56E0\u4E3A\u8FD4\u56DE\u51FD\u6570\u4E2Dthis\u7684\u503C\u662F\u8BE5\u51FD\u6570\u8C03\u7528\u7684\u65F6\u5019\u624D\u51B3\u5B9A\u7684</p><p>OK\uFF0C\u5927\u529F\u544A\u6210\uFF0C\u51FA\u4E8E\u4E25\u8C28\uFF0C\u770B\u770B\u522B\u4EBA\u5199\u7684\uFF08\u5176\u5B9E\u4E5F\u6CA1\u4EC0\u4E48\u597D\u770B\u7684\u5BF9\u5427\uFF09</p><pre><code class="language-javascript">// bind \u51FD\u6570\u5B9E\u73B0
Function.prototype.myBind = function(context) {
  // \u5224\u65AD\u8C03\u7528\u5BF9\u8C61\u662F\u5426\u4E3A\u51FD\u6570
  if (typeof this !== &quot;function&quot;) {
    throw new TypeError(&quot;Error&quot;);
  }
  // \u83B7\u53D6\u53C2\u6570
  var args = [...arguments].slice(1),
      fn = this;
  return function Fn() {
    // \u6839\u636E\u8C03\u7528\u65B9\u5F0F\uFF0C\u4F20\u5165\u4E0D\u540C\u7ED1\u5B9A\u503C
    return fn.apply(
      this instanceof Fn ? this : context, // (*)
      args.concat(...arguments)
    );
  };
};
</code></pre><p>\u8C22\uFF01<code>(*)</code>\u662F\u5565\uFF1F\u4E3A\u561B\u8981\u6574\u4E2A\u8FD9\uFF1F</p><p>\u9047\u4E8B\u4E0D\u89C9\uFF0C<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind#%E4%BD%9C%E4%B8%BA%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E4%BD%BF%E7%94%A8%E7%9A%84%E7%BB%91%E5%AE%9A%E5%87%BD%E6%95%B0" title="MDN\u91CC\u5B66\uFF01">MDN\u91CC\u5B66\uFF01</a></p><p><img src="image/image_mkkFnX67dR.png" alt></p><p>\u54E6\u54E6\uFF01\u662Fnew\uFF0C\u5F53\u6211\u4EEC\u7528new\u8C03\u7528\u7ED1\u5B9A\u51FD\u6570\u65F6...\u6211\u81EA\u5DF1\u4E5F\u6709\u70B9\u8FF7\u7CCA\u4E86w(\uFF9F\u0414\uFF9F)w</p><p>\u81EA\u5DF1\u6574\u4E2A\u4F8B\u5B50\u6D4B\u6D4B\uFF0C\u54FC</p><pre><code class="language-javascript">function Rabbit(name) {
  this.name = name;
}

const fake = {};

// myBind
let Rabbit_lee = Rabbit.myBind(fake, &quot;lee&quot;);
let rab = new Rabbit_lee();

console.log(fake); //  { name: &#39;lee&#39; }
console.log(rab); // {}
console.log(rab instanceof Rabbit); // false

// bind
Rabbit_lee = Rabbit.bind(fake, &quot;lee&quot;);
rab = new Rabbit_lee();

console.log(fake); // {}
console.log(rab); // Rabbit { name: &#39;lee&#39; }
console.log(rab instanceof Rabbit); // true

</code></pre><p>\u5982\u4E0A\uFF0CJS\u7684bind\u5E0C\u671B\u7684\u662F\u4F7F\u7528new\u8C03\u7528\u65F6\uFF0C\u539F\u5148\u7ED1\u5B9A\u7684\u4E0A\u4E0B\u6587\u88AB\u5FFD\u7565\uFF0C\u800C\u53EA\u4F7F\u7528\u7ED1\u5B9A\u7684\u9ED8\u8BA4\u53C2\u6570</p><p>\u56DE\u987E\u4E00\u4E0B\uFF0C<code>new</code>\u5173\u952E\u5B57\u4F1A\u8FDB\u884C\u5982\u4E0B\u64CD\u4F5C\uFF1A</p><ol><li>\u521B\u5EFA\u4E00\u4E2A\u7A7A\u7684\u7B80\u5355<code>JavaScript</code>\u5BF9\u8C61(\u5373<code>{}</code>)</li><li>\u5C06\u8FD9\u4E2A\u7A7A\u5BF9\u8C61\u7684\u539F\u578B\u6307\u5411\u6784\u9020\u51FD\u6570\u7684<code>prototype</code>\u5C5E\u6027</li><li>\u5C06\u6B65\u9AA41\u65B0\u521B\u5EFA\u7684\u5BF9\u8C61\u4F5C\u4E3A<code>this</code>\u7684\u4E0A\u4E0B\u6587</li><li>\u6267\u884C\u6784\u9020\u51FD\u6570\u5185\u90E8\u7684\u4EE3\u7801</li><li>\u5982\u679C\u8BE5\u51FD\u6570\u6CA1\u6709\u8FD4\u56DE\u5BF9\u8C61\uFF0C\u5219\u8FD4\u56DE<code>this</code></li></ol><p>\u6240\u4EE5\u8BF4\uFF0C\u9488\u5BF9\u8FD9\u4E2A\u7279\u6B8A\u8C03\u7528\u573A\u666F\uFF0C\u6211\u4EEC\u8981\u80FD\u81EA\u52A8\u6539\u53D8\u7ED1\u5B9A\u7684\u4E0A\u4E0B\u6587\uFF0C\u6765\u5427</p><p>\u56E0\u6B64\uFF0C\u6211\u4EEC\u9700\u8981\u5224\u65AD\u7ED1\u5B9A\u51FD\u6570<code>bound</code>\u662F\u5426\u5728\u88AB<code>new</code>\u8C03\u7528</p><p>\u56E0\u4E3A<code>new</code>\u4F1A\u5148\u5C06<code>this</code>\u7684\u539F\u578B\u6307\u5411\u6784\u9020\u51FD\u6570\u7684\u539F\u578B\uFF0C\u6240\u4EE5\u6B64\u65F6\u7684<code>this</code>\u662F\u53EF\u4EE5\u4F7F\u7528<code>instanceof</code>\u6765\u5224\u65AD\u662F\u4E0D\u662F<code>new</code>\u65B0\u521B\u9020\u7684\u5B9E\u4F8B\u7684</p><p>\u90A3\u4E48\u4EE3\u7801\u6765\u54AF</p><pre><code class="language-javascript">Function.prototype.myBind = function (context, ...args) {
  if (typeof this !== &quot;function&quot;) {
    throw new TypeError(&quot;The binding object must be a function&quot;);
  }
  const originFunc = this;
  function bound() {
    return originFunc.apply(this instanceof bound ? this : context, [
      ...args,
      ...arguments,
    ]);
  }
  bound.prototype = Object.create(originFunc.prototype); // (*)
  return bound;
};

</code></pre><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\u5728<code>(*)</code>\uFF0C\u4E3A\u4E86\u5B8C\u6574\u6027\uFF0C\u4F7F\u5B9E\u4F8B\u53EF\u4EE5\u7528<code>instanceof</code>\u5224\u65AD\u539F\u578B\uFF0C\u6211\u4EEC\u4E5F\u8981\u4E3A<code>bound</code>\u8BBE\u7F6E\u539F\u578B\uFF0C\u56E0\u4E3A\u4ED6\u624D\u662F\u771F\u7684\u6784\u9020\u51FD\u6570\u5440\uFF08\u6709\u70B9\u9694\u58C1\u8001\u738B\u7684\u610F\u601DO(\u2229_\u2229)O~\uFF09</p>`,27);function e(n,i){return t}const c={render:e};c.__hmrId="/Users/deng/Documents/GitHub/dengmengqiu.github.io/posts/post/bind/bind.md";const u=n=>({components:n,render:e});export{c as VueComponent,u as VueComponentWith,d as attributes,r as html};
