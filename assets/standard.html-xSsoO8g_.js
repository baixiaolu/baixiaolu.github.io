import{_ as n,o as s,c as a,e}from"./app-RLcf5AN2.js";const o={},t=e('<h1 id="数据库和代码约定" tabindex="-1"><a class="header-anchor" href="#数据库和代码约定" aria-hidden="true">#</a> 数据库和代码约定</h1><h2 id="_1-数据库约定" tabindex="-1"><a class="header-anchor" href="#_1-数据库约定" aria-hidden="true">#</a> 1. 数据库约定</h2><ol><li>表名全部<code>ici_</code>开头，使用小写加下划线命名法，多个单词都用下划线分隔，如：<code>ici_park_info</code></li><li>表名和字段名使用简洁明了的英文单词，不要使用拼音、拼音缩写、数字等</li><li>表名和字段名不要使用数据库保留字，比如<code>user</code>、<code>group</code>、<code>order</code>等</li><li>每个表必备以下字段：</li></ol><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>ici_table_name<span class="token punctuation">`</span></span>  <span class="token punctuation">(</span>\n	<span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span> <span class="token keyword">int</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;表自增id&#39;</span><span class="token punctuation">,</span>\n	<span class="token identifier"><span class="token punctuation">`</span>xx_id<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;表uuid&#39;</span><span class="token punctuation">,</span> <span class="token comment">--如果表名为ici_table_name，则xx为table_name，本字段名为table_name_id</span>\n	<span class="token comment">-- 其它字段</span>\n	<span class="token identifier"><span class="token punctuation">`</span>org_id<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;8EADB678-A646-1E51-3E87-75A547B8AF19&#39;</span><span class="token punctuation">,</span>\n	<span class="token identifier"><span class="token punctuation">`</span>create_time<span class="token punctuation">`</span></span> <span class="token keyword">timestamp</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CURRENT_TIMESTAMP</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;创建时间&#39;</span><span class="token punctuation">,</span>\n	<span class="token identifier"><span class="token punctuation">`</span>update_time<span class="token punctuation">`</span></span> <span class="token keyword">timestamp</span> <span class="token boolean">NULL</span> <span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">CURRENT_TIMESTAMP</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;最近更新时间&#39;</span><span class="token punctuation">,</span>\n	<span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-代码约定及说明" tabindex="-1"><a class="header-anchor" href="#_2-代码约定及说明" aria-hidden="true">#</a> 2. 代码约定及说明</h2><ol><li>按java规范，使用驼峰命名法，类名使用大写开头，如：<code>UserInfo</code>、<code>UserVo</code>，方法名使用小写开头，如：<code>getUserInfo</code>、<code>getUserVo</code></li><li><code>@Api</code>、<code>@ApiOperation</code>、<code>@ApiParam</code>等注解要写明，以便生成文档，每个接口文件夹命名要和excel对应，比如<code>E1-1</code>这样开头</li><li><code>uuid</code>字段调用<code>SysTools.getGUID()</code>即可，不要自己实现。</li><li>在<code>\\cyunsoft-appservice\\src\\main\\resources\\application.properties</code>文件中的<code>app.nocheck.url</code>配置项添加你的接口，就可以跳过鉴权直接调试。</li></ol><h2 id="_3-接口及接口文档约定" tabindex="-1"><a class="header-anchor" href="#_3-接口及接口文档约定" aria-hidden="true">#</a> 3. 接口及接口文档约定</h2><ol><li>接口请求方式只有get和post，不支持put和delete请求方式，delete请求方式改为post</li><li>post请求的格式使用form-data</li><li>交付的接口文档</li><li>所有表都有park_id字段，相对应的，接口都可使用park_id参数查询数据</li></ol><h2 id="_4-交付" tabindex="-1"><a class="header-anchor" href="#_4-交付" aria-hidden="true">#</a> 4. 交付</h2><p>交付结果有3项内容：</p><ol><li>数据库表和合理的测试数据</li><li>apifox导出的接口文档，按excel的sheet分好文件夹，命名：sheet表英文名-中文接口名-开发者名字简称，比如：<code>A1.用户信息-zhang</code>，里面放增删改查查5个接口。多个文件夹加编号，比如<code>A1-1.用户信息-zhang</code>、<code>A1-2.角色信息-zhang</code></li><li>代码提交到指定的分支</li><li>接口在自己本地调试成功的录屏</li></ol><p>每天晚上交付以上内容</p>',12),p=[t];function c(i,l){return s(),a("div",null,p)}const r=n(o,[["render",c],["__file","standard.html.vue"]]);export{r as default};