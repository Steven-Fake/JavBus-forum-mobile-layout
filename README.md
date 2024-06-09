# JavBus论坛移动端界面适配

> 使司机社(JavBus)的论坛适应移动端界面的Tampermonkey脚本

## 效果

|  页面   |                                           原始效果                                           |                                          修改后效果                                           |
|:-----:|:----------------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|
|  首页   |  ![index-original](https://i2.mjj.rip/2024/06/09/680ba5614763c3892fc8a428b6f7882b.png)   |  ![index-modified](https://i2.mjj.rip/2024/06/09/28db0cd029ba2981549459ceb9c15cf1.png)   |
|  帖子页  |   ![post-original](https://i2.mjj.rip/2024/06/09/680ba5614763c3892fc8a428b6f7882b.png)   |   ![post-modified](https://i2.mjj.rip/2024/06/09/c20a7c4409955b35ef9c6e6891bb2bda.png)   |
|  搜索页  |  ![search-original](https://i2.mjj.rip/2024/06/09/1c44aefa234a154cd35e2ed6a1e08919.png)  |  ![search-modified](https://i2.mjj.rip/2024/06/09/34abe7d69aab99b2154f9358b85cb1ec.png)  |
| 个人信息页 | ![profile-original](https://i2.mjj.rip/2024/06/09/a38614bcea66a901ea12108bb9decbb4.png)  | ![profile-modified](https://i2.mjj.rip/2024/06/09/6bbfb55ad33f342da511fe1930f30379.png)  |
|  收藏页  | ![favorite-original](https://i2.mjj.rip/2024/06/09/b0c7490064452260fcc8288d552d42b4.png) | ![favorite-modified](https://i2.mjj.rip/2024/06/09/8209f2e6e656772f15d419423d7cf002.png) |

## 使用方法

1. 首先确保使用的浏览器支持安装插件(如[Kiwi Browser](https://kiwibrowser.com/))
   ，且已安装[Tampermonkey](https://www.tampermonkey.net/)或其他同类插件管理器。
2. 转到Sleazy
   Fork的脚本页面：[JavBus论坛移动端界面适配](https://sleazyfork.org/zh-CN/scripts/472169-javbus论坛移动端界面适配)
3. 点击“安装此脚本”按钮
4. 在弹出窗口点击“安装”按钮
5. 完成。

## 更新日志

### 2023-08-01 v1.0

* 基本实现功能

### 2023-10-14 v1.1

* 修复了页面宽度过宽的问题(有些隐藏的元素宽度为固定值，直接删掉即可)
* 适配搜索页面
* 重构代码，大幅采用`style.cssText = "..."`代理多行的`style.<attribute> = "..."`，减少代码量。

### 2023-12-12 v1.1.1

* 修复了部分情况下对`null`对象使用`remove()`方法触发异常的问题(有些情况下网页中并不存在广告和隐藏元素)

### 2024-01-26 v1.1.2

* 修复了先前版本中删除元素过多导致的异常问题(依据奥卡姆剃刀法则，不影响界面效果的元素不应当尝试修改)

### 2024-02-11 v1.1.3

* 修复了JS脚本的元信息中@namespace和@homepageURL字段的错误，以实现追踪更新。

### 2024-06-09 v1.2.0

* 完全重构代码，使用界面类控制不同页面的样式，可读性更高。
* 采用`querySelector`和`querySelectorAll`代替`getElementById`和`getElementsByClassName`，减少代码量。
* 适配个人信息页和收藏页。
* 修复了一些界面中的样式问题。