# jiketao-server
jiketao backend 


# 基本架构

* 框架: keystoneJs
* 数据库: mongodb 
* 模板引擎: swig 对应 templates 目录
* 静态资源: public 目录 

# 开发环境搭建

* keystone 配置
* mongodb
* mongo management studio 管理数据库
* node keystone 运行
* npm test 来运行 api 测试 
* 通过 dummy-json 来生产随机数据


# 开发文档
1. [数据库 shema 设计](/doc/database_schema_design.md)!
2. [startbootstrap-sb-admin-2 文档](http://ironsummitmedia.github.io/startbootstrap-sb-admin-2/pages/index.html)! 
3. [keystonejs 文档](http://keystonejs.com)!
4. [api](/doc/apis.md)

# 发布 

git remote add deploy ssh://user@ip/${bare-git-path}
git push deploy master





