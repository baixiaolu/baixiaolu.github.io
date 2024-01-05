import{_ as n,o as s,c as a,e}from"./app-RLcf5AN2.js";const t={},p=e(`<h1 id="tempermonkey" tabindex="-1"><a class="header-anchor" href="#tempermonkey" aria-hidden="true">#</a> TemperMonkey</h1><h2 id="引入jquery的示例" tabindex="-1"><a class="header-anchor" href="#引入jquery的示例" aria-hidden="true">#</a> 引入jquery的示例</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// ==UserScript==</span>
<span class="token comment">// @name         change copyright</span>
<span class="token comment">// @namespace    https://www.xxx.com/</span>
<span class="token comment">// @version      2023-12-29</span>
<span class="token comment">// @description  try to take over the world!</span>
<span class="token comment">// @author       You</span>
<span class="token comment">// @match        https://www.xxx.com/*</span>
<span class="token comment">// @require      https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js</span>
<span class="token comment">// @grant        none</span>
<span class="token comment">// ==/UserScript==</span>

<span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;.footer div p&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&#39;北京xx公司&#39;</span>

    <span class="token comment">// Your code here...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="无jquery时-写原生的示例" tabindex="-1"><a class="header-anchor" href="#无jquery时-写原生的示例" aria-hidden="true">#</a> 无jquery时，写原生的示例</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// ==UserScript==</span>
<span class="token comment">// @name         sys-hidden-logo</span>
<span class="token comment">// @namespace    http://222.222.111.111:8888/p/</span>
<span class="token comment">// @version      2023-12-29</span>
<span class="token comment">// @description  try to take over the world!</span>
<span class="token comment">// @author       You</span>
<span class="token comment">// @match        http://222.222.111.111:8888/p/</span>
<span class="token comment">// @grant        none</span>
<span class="token comment">// ==/UserScript==</span>

<span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">var</span> imgElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.nav-log&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>imgElement<span class="token punctuation">)</span>
            imgElement<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>imgElement<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">var</span> leftElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.leftBox&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>leftElement<span class="token punctuation">)</span>
            leftElement<span class="token punctuation">.</span>childNodes<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token string">&#39;北京xx公司&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),c=[p];function o(i,l){return s(),a("div",null,c)}const r=n(t,[["render",o],["__file","index.html.vue"]]);export{r as default};
