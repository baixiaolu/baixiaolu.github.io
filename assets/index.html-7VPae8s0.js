import{_ as n,o as a,c as s,e}from"./app-RLcf5AN2.js";const t={},i=e(`<h1 id="langchain开箱即用手册" tabindex="-1"><a class="header-anchor" href="#langchain开箱即用手册" aria-hidden="true">#</a> LangChain开箱即用手册</h1><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><h2 id="配置源" tabindex="-1"><a class="header-anchor" href="#配置源" aria-hidden="true">#</a> 配置源</h2><h2 id="github项目langchain-chatchat部署命令" tabindex="-1"><a class="header-anchor" href="#github项目langchain-chatchat部署命令" aria-hidden="true">#</a> github项目Langchain-Chatchat部署命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ll /root/miniconda3/envs/
conda create <span class="token parameter variable">--prefix</span> /root/miniconda3/envs/chatchat <span class="token assign-left variable">python</span><span class="token operator">=</span><span class="token number">3.10</span>
conda activate /root/miniconda3/envs/chatchat
<span class="token builtin class-name">source</span> activate /root/miniconda3/envs/chatchat
<span class="token function">git</span> clone git@github.com:chatchat-space/Langchain-Chatchat.git
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;autodl231203&quot;</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;autodl231203@autodl.com&quot;</span>
ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">&quot;autodl231203@autodl.com&quot;</span>
<span class="token function">cat</span> ~/.ssh/id_rsa.pub 
<span class="token function">git</span> clone git@github.com:chatchat-space/Langchain-Chatchat.git
<span class="token builtin class-name">cd</span> Langchain-Chatchat/
pip <span class="token function">install</span> <span class="token parameter variable">-r</span> requirements.txt 
pip <span class="token function">install</span> <span class="token parameter variable">-r</span> requirements_api.txt
pip <span class="token function">install</span> <span class="token parameter variable">-r</span> requirements_webui.txt  
<span class="token function">git</span> lfs <span class="token function">install</span>
<span class="token function">curl</span> <span class="token parameter variable">-s</span> https://packagecloud.io/install/repositories/github/git-lfs/script.deb.sh <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">bash</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> git-lfs
<span class="token function">git</span> lfs <span class="token function">install</span>
<span class="token function">git</span> clone https://huggingface.co/THUDM/chatglm2-6b
<span class="token builtin class-name">export</span> <span class="token assign-left variable">http_proxy</span><span class="token operator">=</span>http://172.31.72.89:7890
<span class="token builtin class-name">export</span> <span class="token assign-left variable">https_proxy</span><span class="token operator">=</span>https://172.31.72.89:7890
<span class="token function">git</span> clone https://huggingface.co/THUDM/chatglm2-6b
<span class="token builtin class-name">source</span> /etc/network_turbo
<span class="token function">git</span> clone https://huggingface.co/THUDM/chatglm2-6b
<span class="token function">git</span> clone https://huggingface.co/moka-ai/m3e-base
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> Langchain-Chatchat
ll
<span class="token builtin class-name">cd</span> /root/autodl-tmp/
ll
<span class="token function">git</span> clone git@github.com:chatchat-space/Langchain-Chatchat.git
<span class="token builtin class-name">cd</span> Langchain-Chatchat
pip <span class="token function">install</span> <span class="token parameter variable">-r</span> requirements.txt 
pip <span class="token function">install</span> <span class="token parameter variable">-r</span> requirements_api.txt
pip <span class="token function">install</span> <span class="token parameter variable">-r</span> requirements_webui.txt  
<span class="token function">git</span> clone https://huggingface.co/THUDM/chatglm2-6b
<span class="token function">git</span> clone https://huggingface.co/moka-ai/m3e-base
python copy_config_example.py
python init_database.py --recreate-vs
python startup.py <span class="token parameter variable">-a</span>
<span class="token builtin class-name">unset</span> http_proxy <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">unset</span> https_proxy
python startup.py <span class="token parameter variable">-a</span>
<span class="token function">env</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-i</span> proxy
<span class="token builtin class-name">source</span> /etc/network_turbo
<span class="token function">env</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-i</span> proxy
<span class="token builtin class-name">unset</span> http_proxy <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">unset</span> https_proxy
<span class="token function">env</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-i</span> proxy
python startup.py <span class="token parameter variable">-a</span>
<span class="token builtin class-name">exit</span>
<span class="token function">history</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),l=[i];function c(p,o){return a(),s("div",null,l)}const u=n(t,[["render",c],["__file","index.html.vue"]]);export{u as default};
