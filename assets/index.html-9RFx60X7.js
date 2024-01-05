import{_ as n,o as s,c as a,e}from"./app-RLcf5AN2.js";const t={},i=e(`<h1 id="nodejs开箱即用手册" tabindex="-1"><a class="header-anchor" href="#nodejs开箱即用手册" aria-hidden="true">#</a> NodeJS开箱即用手册</h1><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><h2 id="配置源" tabindex="-1"><a class="header-anchor" href="#配置源" aria-hidden="true">#</a> 配置源</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npm.taobao.org
<span class="token function">npm</span> config get registry  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="版本管理工具n常用命令" tabindex="-1"><a class="header-anchor" href="#版本管理工具n常用命令" aria-hidden="true">#</a> 版本管理工具n常用命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-g</span> n <span class="token comment">#安装n</span>
<span class="token comment"># 如果提示Unsupported platform for n@9.2.0: wanted {&quot;os&quot;:&quot;!win32&quot;} (current: {&quot;os&quot;:&quot;win32&quot;,&quot;arch&quot;:&quot;x64&quot;})，就使用 npm i -g n --force</span>

<span class="token builtin class-name">export</span> <span class="token assign-left variable">N_NODE_MIRROR</span><span class="token operator">=</span>https://npm.taobao.org/mirrors/node <span class="token comment">#给n换源</span>

n <span class="token punctuation">[</span>install/i<span class="token punctuation">]</span> <span class="token operator">&lt;</span>version<span class="token operator">&gt;</span> <span class="token comment"># 安装指定版本</span>

n lts/stable <span class="token comment"># 安装稳定版本</span>

n latest/current <span class="token comment"># 安装最新版本</span>

n <span class="token comment">#查看已安装的版本，直接输入n后输出当前已经安装的node版本以及正在使用的版本（前面有一个o），你可以通过移动上下方向键来选择要使用的版本，最后按回车生效。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[i];function r(c,l){return s(),a("div",null,o)}const p=n(t,[["render",r],["__file","index.html.vue"]]);export{p as default};
