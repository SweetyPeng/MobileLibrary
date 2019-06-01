## 漂流吧图书酱
- **简介**

这是一个关于微信小程序的毕业设计，该小程序实现了漂流图书的查询、发布、借阅等功能，同时还有一些附带小功能。

[总体功能图](https://github.com/SweetyPeng/MobileLibrary/blob/develop/readmeImg/mainfunction.png)
- **有关**

1、豆瓣图书API

前期豆瓣图书的API可以使用，后面接口彻底挂了，所以又找了一些大佬自己搭建的代理。

```
http://douban.uieee.com/v2/book/isbn/
http://t.yushu.im/v2/book/id/
```
前者不稳定，有限制，但是内容基本等同于豆瓣API;后者使用比较局限，可以用来简单查询。

接口参数：
- 查询：
```
https://api.douban.com/v2/book/search?q=JAVA&count=2&field=title,author
```
- 根据ISBN 查询: 
```
https://api.douban.com/v2/book/id
```
### 主要技术
基于wepy框架，UI样式采用的是BiosanUi，在小程序开发基础上，采用了小程序云开发，解决后端和数据库问题。
#### 毕业快乐！