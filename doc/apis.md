API文档
====================

> “Design and programming are human activities; forget that and all is lost.”
>
> —Bjarne Stroustrup

* * *
所有的API都采用RESTful风格API。所有list里面的item都返回一个_id。


* 获取投放数据列表

```
* method: GET
* url: /skus
*
* request: {
*    names: [name<String>]
* }
* 
* response: [
    {name: <String>, data: <Object>}, // 这里的Object的结构为key-value，可以任意在后台进行设置
    {name: <String>, data: <Object>},
    ...
  ]

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
    {name: <String>, _id: <String>},
    {name: <String>, _id: <String>},
    {name: <String>, _id: <String>}
    ...
  ]

NOTE: 这个每个页面渲染的时候会通过全局变量的方式注入页面；也可以通过上面的请求进行获取。

```


* 获取文章列表

```
* method: GET
* url: /posts
* request: {
    categoryId: <String>, // 分类的id
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
    categoryId: <String>, // 分类的id
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
* url: /posts/search/:keyword
* request: {
    pageNum: <Integer>, //分页页码
    pageCount: <Integer>, //每页数目
    [sortType]: <String>, //可选，根据什么数据排序。默认为"publishedDate"，按发布时间排序
    [sortDirection]: 1/-1 //可选，排序方向。默认为1。1为正序，-1为逆序
  }
* response: [
    同`获取文章列表`返回结果
  ]
```


* 搜索商品

```
* method: GET
* url: /products/search/:keyword
* request: {
    pageNum: <Integer>, //分页页码
    pageCount: <Integer>, //每页数目
    [sortType]: <String>, //可选，根据什么数据排序。默认为"publishedDate"，按发布时间排序
    [sortDirection]: 1/-1 //可选，排序方向。默认为1。1为正序，-1为逆序
  }
* response: [
    同`获取商品列表`返回结果
  ]

```

* 获取文章详情

```
* method: GET
* url: /posts/:id
* request: 无
* response: {
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
    ],
    products: [ // 注意这里需要返回这篇文章相关的商品数据
      {}, // 数据和获取商品列表里面单个商品数据一致
      {},
      {}
      ...
    ]
  }

```

* 获取商品详情

```
* method: GET
* url: /products/:id
* request: {
    related_post_num: <Integer> // 返回和该商品相关文章的数目
  }
* response: {
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
    ],
    posts: [ // 注意这里需要返回此件商品相关的文章数据
      {}, // 数据和获取文章列表里面单篇文章数据一致
      {},
      {}
    ]
 },

```
