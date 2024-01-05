import{_ as i,r,o as l,c as d,a as e,d as a,b as n,e as c}from"./app-RLcf5AN2.js";const t={},o=c(`<h1 id="mac常用配置" tabindex="-1"><a class="header-anchor" href="#mac常用配置" aria-hidden="true">#</a> Mac常用配置</h1><h2 id="开发相关" tabindex="-1"><a class="header-anchor" href="#开发相关" aria-hidden="true">#</a> 开发相关</h2><h3 id="mysql相关" tabindex="-1"><a class="header-anchor" href="#mysql相关" aria-hidden="true">#</a> mysql相关</h3><h4 id="启动停止命令" tabindex="-1"><a class="header-anchor" href="#启动停止命令" aria-hidden="true">#</a> 启动停止命令</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> /usr/local/bin/mysql.server start
<span class="token function">sudo</span> /usr/local/bin/mysql.server stop
<span class="token function">sudo</span> /usr/local/bin/mysql.server restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="导入报错-err-1118-row-size-too-large-8126" tabindex="-1"><a class="header-anchor" href="#导入报错-err-1118-row-size-too-large-8126" aria-hidden="true">#</a> 导入报错：<code>[ERR] 1118 - Row size too large (&gt; 8126)</code></h4><p>编辑sql文件，在开头设置一下innodb_strict_mode为0</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SET</span> innodb_strict_mode <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者找到mysql配置文件mysql.ini</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">innodb_strict_mode</span><span class="token punctuation">=</span><span class="token value attr-value">0</span>
<span class="token comment"># 可通过show variables like &#39;%innodb_strict_mode%&#39;;命令查看</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="redis相关" tabindex="-1"><a class="header-anchor" href="#redis相关" aria-hidden="true">#</a> redis相关</h3><h4 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>brew <span class="token function">install</span> redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>redis 默认安装在 /usr/local/Cellar下，配置文件redis.conf在 /usr/local/etc下。有两种方式来启动redis</p><h4 id="启动" tabindex="-1"><a class="header-anchor" href="#启动" aria-hidden="true">#</a> 启动</h4><ol><li>通过brew services 来启动(后台启动) 推荐</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>brew services start redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>通过redis默认的命令 redis-server 来启动 由于Home Brew 会帮我们配置好环境变量(创建相关可执行文件的符号链接 到 /usr/local/bin 目录)，所以我们可以在终端的任意目录下运行命令</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 指定配置文件，后台启动必须这样做</span>
 redis-server /usr/local/etc/redis.conf
<span class="token comment"># 默认参数启动，这样启动后关闭窗口服务就停止了，不推荐</span>
redis-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>两种启动方式我更推荐前一种，可以通过两种方式同时启动服务，会创建两个redis-server 进程，数据不互通，也不会存在端口号冲突问题</p><h4 id="连接服务" tabindex="-1"><a class="header-anchor" href="#连接服务" aria-hidden="true">#</a> 连接服务</h4><p>redis默认端口为 6379， 端口的由来还很有趣，大家自行了解</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 远程服务连接</span>
redis-cli <span class="token parameter variable">-h</span> IP <span class="token parameter variable">-p</span> <span class="token number">6379</span>
<span class="token comment"># 本机服务连接</span>
redis-cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="关闭服务" tabindex="-1"><a class="header-anchor" href="#关闭服务" aria-hidden="true">#</a> 关闭服务</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>redis-cli <span class="token function">shutdown</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面提到的通过redis-server 加配置文件进行后台启动，需要修改配置文件，打开配置文件后，找到 daemonize no改为daemonize yes 保存即可</p><h3 id="maven" tabindex="-1"><a class="header-anchor" href="#maven" aria-hidden="true">#</a> maven</h3><p>大概以下步骤：</p><ol><li>下载</li><li>解压</li><li>修改配置文件（本地仓库、阿里云源）</li><li>配置环境变量并生效</li><li>mvn -version验证</li></ol><p>参考资料：</p>`,30),h={href:"https://zhuanlan.zhihu.com/p/439934300",target:"_blank",rel:"noopener noreferrer"},u={href:"https://blog.csdn.net/qq_38217990/article/details/129257106",target:"_blank",rel:"noopener noreferrer"},p=e("h3",{id:"jdk",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#jdk","aria-hidden":"true"},"#"),a(" JDK")],-1),v=e("p",null,"大概以下步骤：",-1),m=e("ol",null,[e("li",null,"下载"),e("li",null,"安装"),e("li",null,"找到jdk安装目录"),e("li",null,"配置环境变量"),e("li",null,"验证")],-1),b=e("p",null,"参考资料：",-1),_={href:"https://www.jianshu.com/p/a85658902f26",target:"_blank",rel:"noopener noreferrer"};function g(f,k){const s=r("ExternalLinkIcon");return l(),d("div",null,[o,e("ul",null,[e("li",null,[e("a",h,[a("Mac Maven 安装及配置"),n(s)])]),e("li",null,[e("a",u,[a("2023最新国内maven仓库镜像地址"),n(s)])])]),p,v,m,b,e("ul",null,[e("li",null,[e("a",_,[a("Mac系统安装JDK1.8及环境变量配置"),n(s)])])])])}const q=i(t,[["render",g],["__file","index.html.vue"]]);export{q as default};
