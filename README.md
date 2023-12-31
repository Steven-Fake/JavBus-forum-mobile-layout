# JavBus论坛移动端界面适配

> 使司机社(JavBus)的论坛适应移动端界面的Tampermonkey脚本

## 使用方法

1. 首先确保使用的浏览器支持安装插件(如安卓的[Kiwi Browser](https://kiwibrowser.com/))
   ，且已安装[Tampermonkey](https://www.tampermonkey.net/)或其他同类插件管理器
2. 转到Sleazy
   Fork的脚本页面：[JavBus论坛移动端界面适配](https://sleazyfork.org/zh-CN/scripts/472169-javbus%E8%AE%BA%E5%9D%9B%E7%A7%BB%E5%8A%A8%E7%AB%AF%E7%95%8C%E9%9D%A2%E9%80%82%E9%85%8D)
3. 点击“安装此脚本”按钮
4. 在弹出窗口点击“安装”按钮
5. 完成，以更适合移动端的布局逛论坛吧

## 更新日志

### 2023-08-01 v1.0

* 基本实现功能

### 2023-10-14 v1.1

* 修复了页面宽度过宽的问题(有些隐藏的元素宽度为固定值，直接删掉即可)
* 适配搜索页面
* 重构代码，大幅采用`style.cssText = "..."`代理多行的`style.<attribute> = "..."`，减少代码量。

### 2023-12-12 v1.1.1

* 修复了部分情况下对`null`对象使用`remove()`方法触发异常的问题(有些情况下网页中并不存在广告和隐藏元素)
