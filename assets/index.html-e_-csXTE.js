import{_ as e,r as o,o as l,c as i,a as n,d as a,b as d,e as r}from"./app-RLcf5AN2.js";const t={},p=r(`<h1 id="mongodb" tabindex="-1"><a class="header-anchor" href="#mongodb" aria-hidden="true">#</a> MongoDB</h1><h2 id="_1-安装" tabindex="-1"><a class="header-anchor" href="#_1-安装" aria-hidden="true">#</a> 1. 安装</h2><h3 id="_1-1-安装mongodb" tabindex="-1"><a class="header-anchor" href="#_1-1-安装mongodb" aria-hidden="true">#</a> 1.1 安装MongoDB</h3><ol><li>下载MongoDB，解压到指定目录，如：/usr/local/mongodb</li><li>进入解压后的目录，执行以下命令：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./bin/mongod <span class="token parameter variable">--dbpath</span><span class="token operator">=</span>/usr/local/mongodb/data <span class="token parameter variable">--logpath</span><span class="token operator">=</span>/usr/local/mongodb/logs/mongodb.log <span class="token parameter variable">--logappend</span> <span class="token parameter variable">--fork</span> <span class="token parameter variable">--port</span> <span class="token number">27017</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-2-启动mongodb" tabindex="-1"><a class="header-anchor" href="#_1-2-启动mongodb" aria-hidden="true">#</a> 1.2 启动MongoDB</h3><p>启动MongoDB，执行以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./bin/mongod <span class="token parameter variable">--dbpath</span><span class="token operator">=</span>/usr/local/mongodb/data <span class="token parameter variable">--logpath</span><span class="token operator">=</span>/usr/local/mongodb/logs/mongodb.log <span class="token parameter variable">--logappend</span> <span class="token parameter variable">--fork</span> <span class="token parameter variable">--port</span> <span class="token number">27017</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-3-停止mongodb" tabindex="-1"><a class="header-anchor" href="#_1-3-停止mongodb" aria-hidden="true">#</a> 1.3 停止MongoDB</h3><ol><li>停止MongoDB，执行以下命令：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./bin/mongod <span class="token parameter variable">--dbpath</span><span class="token operator">=</span>/usr/local/mongodb/data <span class="token parameter variable">--logpath</span><span class="token operator">=</span>/usr/local/mongodb/logs/mongodb.log <span class="token parameter variable">--logappend</span> <span class="token parameter variable">--fork</span> <span class="token parameter variable">--port</span> <span class="token number">27017</span> <span class="token parameter variable">--shutdown</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-4-重启mongodb" tabindex="-1"><a class="header-anchor" href="#_1-4-重启mongodb" aria-hidden="true">#</a> 1.4 重启MongoDB</h3><ol><li>重启MongoDB，执行以下命令：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./bin/mongod <span class="token parameter variable">--dbpath</span><span class="token operator">=</span>/usr/local/mongodb/data <span class="token parameter variable">--logpath</span><span class="token operator">=</span>/usr/local/mongodb/logs/mongodb.log <span class="token parameter variable">--logappend</span> <span class="token parameter variable">--fork</span> <span class="token parameter variable">--port</span> <span class="token number">27017</span> <span class="token parameter variable">--shutdown</span>
./bin/mongod <span class="token parameter variable">--dbpath</span><span class="token operator">=</span>/usr/local/mongodb/data <span class="token parameter variable">--logpath</span><span class="token operator">=</span>/usr/local/mongodb/logs/mongodb.log <span class="token parameter variable">--logappend</span> <span class="token parameter variable">--fork</span> <span class="token parameter variable">--port</span> <span class="token number">27017</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-连接mongodb" tabindex="-1"><a class="header-anchor" href="#_2-连接mongodb" aria-hidden="true">#</a> 2. 连接MongoDB</h2><h3 id="_2-1-连接mongodb" tabindex="-1"><a class="header-anchor" href="#_2-1-连接mongodb" aria-hidden="true">#</a> 2.1 连接MongoDB</h3><p>连接MongoDB，可能用到以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mongo
/usr/local/mongodb/bin/mongo
/usr/local/mongodb/bin/mongo <span class="token parameter variable">-u</span> root
/usr/local/mongodb/bin/mongo <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span> <span class="token number">123456</span>
/usr/local/mongodb/bin/mongo <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span> <span class="token number">123456</span> <span class="token parameter variable">--authenticationDatabase</span> admin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-退出mongodb" tabindex="-1"><a class="header-anchor" href="#_2-2-退出mongodb" aria-hidden="true">#</a> 2.2 退出MongoDB</h3><p>退出MongoDB，执行以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">exit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-数据库操作" tabindex="-1"><a class="header-anchor" href="#_3-数据库操作" aria-hidden="true">#</a> 3. 数据库操作</h2><h3 id="_3-1-显示所有数据库" tabindex="-1"><a class="header-anchor" href="#_3-1-显示所有数据库" aria-hidden="true">#</a> 3.1 显示所有数据库</h3><p>显示所有数据库，执行以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>show dbs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-2-切换数据库" tabindex="-1"><a class="header-anchor" href="#_3-2-切换数据库" aria-hidden="true">#</a> 3.2 切换数据库</h3><p>切换数据库，执行以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>use db_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-3-创建数据库" tabindex="-1"><a class="header-anchor" href="#_3-3-创建数据库" aria-hidden="true">#</a> 3.3 创建数据库</h3><p>创建数据库，执行以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>use db_name <span class="token comment">#刚创建的数据库并不在数据库的列表中，要显示它，需要向数据库插入一些数据，它才会显示出来。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-4-删除数据库" tabindex="-1"><a class="header-anchor" href="#_3-4-删除数据库" aria-hidden="true">#</a> 3.4 删除数据库</h3><p>删除数据库，执行以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>db.dropDatabase<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-5-显示所有集合" tabindex="-1"><a class="header-anchor" href="#_3-5-显示所有集合" aria-hidden="true">#</a> 3.5 显示所有集合</h3><p>显示所有集合，执行以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>show collections
show tables
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-6-创建集合" tabindex="-1"><a class="header-anchor" href="#_3-6-创建集合" aria-hidden="true">#</a> 3.6 创建集合</h3><p>创建集合，执行以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>db.createCollection<span class="token punctuation">(</span>collection_name<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-7-集合查询操作" tabindex="-1"><a class="header-anchor" href="#_3-7-集合查询操作" aria-hidden="true">#</a> 3.7 集合查询操作</h3><p>显示集合中的所有文档，执行以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>db.collection_name.find<span class="token punctuation">(</span><span class="token punctuation">)</span>
db.collection_name.find<span class="token punctuation">(</span><span class="token punctuation">)</span>.pretty<span class="token punctuation">(</span><span class="token punctuation">)</span>      <span class="token comment"># 格式化输出</span>
db.collection_name.find<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;status&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span>  <span class="token comment"># 按条件查询</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-8-集合聚合操作" tabindex="-1"><a class="header-anchor" href="#_3-8-集合聚合操作" aria-hidden="true">#</a> 3.8 集合聚合操作</h3><p>显示集合中的所有文档，执行以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>db.collection_name.count<span class="token punctuation">(</span><span class="token punctuation">)</span>
db.collection_name.count<span class="token punctuation">(</span>query<span class="token punctuation">)</span>
db.collection_name.find<span class="token punctuation">(</span>query<span class="token punctuation">)</span>.count<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关于count，有个坑。 以下返回的不是5，而是user表中所有记录的数量，如下面的代码所示：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>db.users.find<span class="token punctuation">(</span><span class="token punctuation">)</span>.skip<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>.limit<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>.count<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果要返回限制之后的记录数量，要使用count（true）或者count（非0），如下面的代码所示：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>db.users.find<span class="token punctuation">(</span><span class="token punctuation">)</span>.skip<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>.limit<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>.count<span class="token punctuation">(</span>true<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-9-插入文档" tabindex="-1"><a class="header-anchor" href="#_3-9-插入文档" aria-hidden="true">#</a> 3.9 插入文档</h3><p>插入文档，执行以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>db.collection_name.insert<span class="token punctuation">(</span>document<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-10-更新文档" tabindex="-1"><a class="header-anchor" href="#_3-10-更新文档" aria-hidden="true">#</a> 3.10 更新文档</h3><p>更新文档，执行以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>db.collection_name.update<span class="token punctuation">(</span>query, update<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-11-删除文档" tabindex="-1"><a class="header-anchor" href="#_3-11-删除文档" aria-hidden="true">#</a> 3.11 删除文档</h3><p>删除文档，执行以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>db.collection_name.remove<span class="token punctuation">(</span>query<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4-常见问题" tabindex="-1"><a class="header-anchor" href="#_4-常见问题" aria-hidden="true">#</a> 4. 常见问题</h2><h3 id="_4-1-如何查看mongodb的日志" tabindex="-1"><a class="header-anchor" href="#_4-1-如何查看mongodb的日志" aria-hidden="true">#</a> 4.1 如何查看MongoDB的日志？</h3><p>MongoDB的日志保存在/usr/local/mongodb/logs/mongodb.log中，可以通过tail -f mongodb.log命令查看日志。</p><h3 id="_4-2-如何查看mongodb的内存使用情况" tabindex="-1"><a class="header-anchor" href="#_4-2-如何查看mongodb的内存使用情况" aria-hidden="true">#</a> 4.2 如何查看MongoDB的内存使用情况？</h3><p>MongoDB的内存使用情况可以通过db.serverStatus()命令查看。</p><h2 id="_5-参考资料" tabindex="-1"><a class="header-anchor" href="#_5-参考资料" aria-hidden="true">#</a> 5. 参考资料</h2>`,65),c=n("br",null,null,-1),u=n("br",null,null,-1),b=n("br",null,null,-1),h={href:"https://www.runoob.com/mongodb/mongodb-tutorial.html",target:"_blank",rel:"noopener noreferrer"};function m(g,v){const s=o("ExternalLinkIcon");return l(),i("div",null,[p,n("p",null,[a("[1] MongoDB官方文档"),c,a(" [2] MongoDB中文网"),u,a(" [3] MongoDB中文教程"),b,a(" [4] "),n("a",h,[a("MongoDB 教程 - 菜鸟教程"),d(s)])])])}const _=e(t,[["render",m],["__file","index.html.vue"]]);export{_ as default};