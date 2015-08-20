API文档
====================

> “Design and programming are human activities; forget that and all is lost.”
> 
> —Bjarne Stroustrup

* * *
所有的API都采用RESTful风格API。


* 获取投放数据列表

```
* method: GET 
* url: /skus
* request: 无
* response: [
    {name: <String>, data: <Object>}, // 这里的Object的结构为key-value，可以任意在后台进行设置
    {name: <String>, data: <Object>},
    ...
]
    
```
* 获取特定投放数据

```
* method: GET
* url: /skus/:name
* request: 无
* response: {
    name: <String>,
    data: <Object> // 同上
  }

```

* 获取所有文章分类

```
* method: GET
* url: /posts/categories
* request: 无
* response: [
    {name: <String>}, 
    {name: <String>}, 
    {name: <String>}, 
    ...
  ]

NOTE: 这个每个页面渲染的时候会通过全局变量的方式注入页面；也可以通过上面的请求进行获取。

```

* 获取商品分类

```
* method: GET
* url: /products/categories
* request: 无
* response: [
    {name: <String>}, 
    {name: <String>}, 
    {name: <String>}, 
    ...
  ]

NOTE: 这个每个页面渲染的时候会通过全局变量的方式注入页面；也可以通过上面的请求进行获取。

```


* 获取文章列表

```
* method: GET
* url: /posts
* request: {
    pageNum: <Integer>, //分页页码
    pageCount: <Integer>, //每页数目
    [sortType]: <String>, //可选，根据什么数据排序。默认为"publishedDate"，按发布时间排序
    [sortDirection]: 1/-1 //可选，排序方向。默认为1。1为正序，-1为逆序
  }
* response: [
    {
      upvote: <Integer>, // 点赞数目
      title: <String>,
      state: <String> // draft（草稿）| published（发布）,
      author: {
        name: <String>,
        email: <String>
      },
      publishedDate: <String>,
      cover: <String> //  e.g. /images/1.png
      content: {
        brief: <String>,
        extended: <String>
      },
      categories: [
        {name: <String>},
        {name: <String>}
        ...
      ]
    },
    ...
  ]

```

* 获取商品列表

```
* method: GET
* url: /products
* request: {
    pageNum: <Integer>, //分页页码
    pageCount: <Integer>, //每页数目
    [sortType]: <String>, //可选，根据什么数据排序。默认为"publishedDate"，按发布时间排序
    [sortDirection]: 1/-1 //可选，排序方向。默认为1。1为正序，-1为逆序
  }
* response: [
    {
      title: <String>,
      details: {
        price: <Number>,
        priceRange: {
          max: <Number>,
          min: <Number>
        },
        pictures: [<String>, <String>, <String>], //商品图片
        upvote: <Integer>,
        ext: <Object> // 扩展规格说明数据，key-value
      },
      content: {
        brief: <String>,
        extended: <String>
      },
      categories: [
        {name: <String>},
        {name: <String>}
        ...
      ]
    },
    ...
 ]
```

* 搜索文章

```
* method: GET
* url: /products/search/:keyword
```


* 搜索商品
* 获取文章详情
* 获取商品详情
 