import{_ as n,o as a,c as s,e}from"./app-RLcf5AN2.js";const i={},l=e(`<h1 id="python开箱即用手册" tabindex="-1"><a class="header-anchor" href="#python开箱即用手册" aria-hidden="true">#</a> python开箱即用手册</h1><h2 id="安装miniconda" tabindex="-1"><a class="header-anchor" href="#安装miniconda" aria-hidden="true">#</a> 安装miniconda</h2><blockquote><p>推荐使用miniconda管理环境</p></blockquote><ul><li>官网下载：https://repo.anaconda.com/miniconda/Miniconda3-latest-Windows-x86_64.exe</li><li>管理员身份运行</li><li>最好安装在C盘根目录</li><li>下一步-完成</li><li>开始菜单找到“Anaconda Prompt (miniconda3)”，管理员身份运行，输入python能看到版本号安装完毕！</li><li>开始菜单找到“Anaconda Prompt (miniconda3)”，管理员身份运行</li></ul><h2 id="配置源" tabindex="-1"><a class="header-anchor" href="#配置源" aria-hidden="true">#</a> 配置源</h2><ul><li>各系统都可以通过修改用户目录下的 .condarc 文件来使用 TUNA 镜像源。Windows 用户无法直接创建名为 .condarc 的文件，可先执行 conda config --set show_channel_urls yes 生成该文件之后再修改。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>conda config <span class="token parameter variable">--set</span> show_channel_urls <span class="token function">yes</span> <span class="token comment">#windows生成.condarc文件</span>

<span class="token function">vim</span> .condarc <span class="token comment">#配置conda源为清华源https://mirrors4.tuna.tsinghua.edu.cn/help/anaconda/</span>

conda clean <span class="token parameter variable">-i</span> <span class="token comment">#清除索引缓存，保证用的是镜像站提供的索引</span>

conda create <span class="token parameter variable">-n</span> <span class="token builtin class-name">test</span> <span class="token assign-left variable">python</span><span class="token operator">=</span><span class="token number">3.10</span> <span class="token comment">#创建虚拟环境</span>

conda activate <span class="token builtin class-name">test</span> <span class="token comment">#激活环境</span>

python <span class="token comment">#查看python版本</span>

pip list <span class="token comment">#查看安装的包</span>

pip <span class="token function">install</span> opencv-python <span class="token comment">#安装某个包</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果pip install太慢，要配置pypi的源，搜清华pypi，点进去，就能看到方法，如果只临时用一次，可使用下面的命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#临时使用清华的源</span>
pip <span class="token function">install</span> <span class="token parameter variable">-i</span> https://pypi.tuna.tsinghua.edu.cn/simple some-package

<span class="token comment">#永久修改源</span>
python <span class="token parameter variable">-m</span> pip <span class="token function">install</span> <span class="token parameter variable">--upgrade</span> pip <span class="token comment">#升级 pip 到最新的版本 (&gt;=10.0.0) </span>
pip config <span class="token builtin class-name">set</span> global.index-url https://pypi.tuna.tsinghua.edu.cn/simple <span class="token comment">#配置源</span>

<span class="token comment"># 参考资料：https://mirrors.tuna.tsinghua.edu.cn/help/pypi/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="miniconda常用命令" tabindex="-1"><a class="header-anchor" href="#miniconda常用命令" aria-hidden="true">#</a> miniconda常用命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>conda <span class="token function">env</span> list <span class="token comment"># 列出所有环境</span>

conda create --name/-n ENVNAME <span class="token assign-left variable">python</span><span class="token operator">=</span><span class="token number">3.6</span> <span class="token comment"># 新建环境</span>

conda create <span class="token parameter variable">-n</span> ENVNAME <span class="token assign-left variable">python</span><span class="token operator">=</span><span class="token number">3.7</span> <span class="token assign-left variable">numpy</span><span class="token operator">=</span><span class="token number">1.16</span>.4 matplotlib <span class="token comment"># 创建环境时安装一些包,同时指定包的版本</span>

conda activate ENVNAME <span class="token comment"># 激活/切换环境</span>
 
conda activate /path/to/environment-dir <span class="token comment"># 激活特定路径的环境</span>

conda deactivate <span class="token comment"># 关闭当前环境</span>

conda remove <span class="token parameter variable">-n</span> ENVNAME <span class="token parameter variable">--all</span> <span class="token comment"># 删除环境，也可以直接删掉 miniconda 安装目录下 envs 里面的对应文件夹</span>

<span class="token comment"># 复制环境, 笔者注: 不可通过复制 anaconda 安装目录下 envs 下的文件夹来复制环境, 因为这样的操作不会自己改变此环境里的配置信息, 对复制后的环境的操作会影响到原环境# 复制 ENVNAME1, 新环境命名为 ENVNAME2</span>
conda create <span class="token parameter variable">-n</span> ENVNAME2 <span class="token parameter variable">--clone</span> ENVNAME1

<span class="token comment"># 重命名, 目前没有直接重命名的命令, 需要先 clone 再 remove 旧环境</span>
conda create <span class="token parameter variable">-n</span> ENVNAME2 <span class="token parameter variable">--clone</span> ENVNAME1
conda remove <span class="token parameter variable">-n</span> ENVNAME1 <span class="token parameter variable">--all</span>

<span class="token comment"># 更多命令参考：https://zhuanlan.zhihu.com/p/597570432</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),c=[l];function t(p,o){return a(),s("div",null,c)}const r=n(i,[["render",t],["__file","index.html.vue"]]);export{r as default};
