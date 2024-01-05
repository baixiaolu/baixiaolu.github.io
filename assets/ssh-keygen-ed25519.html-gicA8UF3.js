import{_ as e,o as s,c as n,e as a}from"./app-RLcf5AN2.js";const i={},l=a(`<h1 id="使用-ed25519-算法生成你的-ssh-密钥" tabindex="-1"><a class="header-anchor" href="#使用-ed25519-算法生成你的-ssh-密钥" aria-hidden="true">#</a> 使用 Ed25519 算法生成你的 SSH 密钥</h1><p>常见的 SSH 登录密钥使用 RSA 算法。RSA 经典且可靠，但性能不够理想。</p><p>只要你的服务器上 OpenSSH 版本大于 6.5（2014 年的古早版本），就可以利用 Ed25519 算法生成的密钥对，减少你的登录时间。如果你使用 SSH 访问 Git，那么就更值得一试。</p><p>Ed25519 的安全性在 RSA 2048 与 RSA 4096 之间，且性能在数十倍以上。</p><h2 id="准备工具" tabindex="-1"><a class="header-anchor" href="#准备工具" aria-hidden="true">#</a> 准备工具</h2><p>你需要用到 ssh-keygen，它是 OpenSSH 的组件，在 Linux 和 macOS 中一般都自带了。</p><p>如果你使用 Windows，安装 Git for Windows 时会一并安装 OpenSSH 到系统中。建议 Windows 用户使用 Git Bash 完成文中操作。</p><h2 id="生成密钥" tabindex="-1"><a class="header-anchor" href="#生成密钥" aria-hidden="true">#</a> 生成密钥</h2><p>先上车再解释，让我们直接开始：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> ~/.ssh <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> ~/.ssh
<span class="token comment"># 我在 GitHub</span>
ssh-keygen <span class="token parameter variable">-t</span> ed25519 <span class="token parameter variable">-f</span> my_github_ed25519  <span class="token parameter variable">-C</span> <span class="token string">&quot;me@github&quot;</span>
<span class="token comment"># 我在 Gitee</span>
ssh-keygen <span class="token parameter variable">-t</span> ed25519 <span class="token parameter variable">-f</span> my_gitee_ed25519   <span class="token parameter variable">-C</span> <span class="token string">&quot;me@gitee&quot;</span>
<span class="token comment"># 我在 GitLab</span>
ssh-keygen <span class="token parameter variable">-t</span> ed25519 <span class="token parameter variable">-f</span> my_gitlab_ed25519  <span class="token parameter variable">-C</span> <span class="token string">&quot;me@gitlab&quot;</span>
<span class="token comment"># 我在企业</span>
ssh-keygen <span class="token parameter variable">-t</span> ed25519 <span class="token parameter variable">-f</span> my_company_ed25519 <span class="token parameter variable">-C</span> <span class="token string">&quot;email@example.com&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>▲ 注意修改 [-C &quot;注释&quot;] 部分。</p><h2 id="添加到配置文件" tabindex="-1"><a class="header-anchor" href="#添加到配置文件" aria-hidden="true">#</a> 添加到配置文件</h2><p>将常用 SSH 信息写进全局配置文件，省得连接时配置。</p><p>编辑 ~/.ssh/config 文件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 关于别名
# Host 是别名，HostName 是真正的域名。
# 得益于别名，你可以直接以别名访问地址。例如：
# 无别名： git clone git@github.com:torvalds/linux.git
# 有别名： git clone github:torvalds/linux.git
# 本例中使用与域名一致的别名，以免错误的配置导致登录不上。

# 关于代理
# SOCKS 代理格式： ProxyCommand connect -S localhost:1080  %h %p
# HTTP 代理格式： ProxyCommand connect -H localhost:1080  %h %p
## SSH 代理依赖外部程序，这里使用了 Git for Windows 同捆的 connect.exe。
## Linux 下使用该代理方式需要额外安装 connect-proxy。

# 我在 GitHub
Host github.com
  Hostname github.com
#  ProxyCommand connect -H localhost:1080  %h %p
  User git
  PreferredAuthentications publickey
  IdentityFile ~/.ssh/my_github_ed25519

# 我在 GitLab
Host gitlab.com
  Hostname gitlab.com
#  ProxyCommand connect -H localhost:1080  %h %p
  User git
  PreferredAuthentications publickey
  IdentityFile ~/.ssh/my_gitlab_ed25519

# 我在 Gitee
Host gitee.com
  Hostname gitee.com
  User git
  PreferredAuthentications publickey
  IdentityFile ~/.ssh/my_gitee_ed25519

# 我在企业
Host example.com
  Hostname example.com
  Port 22
  User git
  PreferredAuthentications publickey
  IdentityFile ~/.ssh/my_company_ed25519
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置完毕。现在把 .pub 公钥文件发给服务器。</p><p>如果你懒得在每台机器上都配置一遍，把 ~/.ssh 下的文件放在安全的地方拷走即可。</p><h2 id="解释-ssh-keygen-的命令含义" tabindex="-1"><a class="header-anchor" href="#解释-ssh-keygen-的命令含义" aria-hidden="true">#</a> 解释： ssh-keygen 的命令含义</h2><p>举例：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-b</span> <span class="token number">4096</span> <span class="token parameter variable">-f</span> my_id <span class="token parameter variable">-C</span> <span class="token string">&quot;email@example.com&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中：</p><ul><li>[-t rsa] 表示使用 RSA 算法。</li><li>[-b 4096] 表示 RSA 密钥长度 4096 bits （默认 2048 bits）。Ed25519 算法不需要指定。</li><li>[-f my_id] 表示在【当前工作目录】下生成一个私钥文件 my_id （同时也会生成一个公钥文件 my_id.pub）。</li><li>[-C &quot;email@example.com&quot;] 表示在公钥文件中添加注释，即为这个公钥“起个别名”（不是 id，可以更改）。 在敲下该命令后，会提示输入 passphrase，即为私钥添加一个“解锁口令”。</li></ul><h2 id="解释-最佳实践" tabindex="-1"><a class="header-anchor" href="#解释-最佳实践" aria-hidden="true">#</a> 解释：最佳实践</h2><ul><li>私钥<strong>必须</strong>要有 passphrase。如果私钥文件遗失，没有 passphrase 也无法解锁（只能暴力破解）。不要偷懒，passphrase 一定要加。</li><li>一对密钥只对应一个 Git 服务。一对密钥通吃各 Git 服务不太明智。</li><li>严格来讲，你应该在不同的机器上用不同的密钥，出了问题好排查处理。但实际上复杂的管理反而更容易让人犯错，选择你能 hold 住的方式更为重要。</li></ul>`,24),d=[l];function t(r,c){return s(),n("div",null,d)}const o=e(i,[["render",t],["__file","ssh-keygen-ed25519.html.vue"]]);export{o as default};
