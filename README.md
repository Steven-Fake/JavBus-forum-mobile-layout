# JavBus论坛移动端界面适配

> 使司机社(JavBus)的论坛适应移动端界面的Tampermonkey脚本

## 效果

|Before|After|
|:----:|:---:|
|![before](https://i.mji.rip/2023/08/01/cd00c10b419cc7577f081f54bc7e9475.png)|![after](https://i.mji.rip/2023/08/01/dd645dd5ac87f2b000cd5d25d3ede18b.png)|

## 使用方法

1. 首先确保使用的浏览器支持安装插件(如安卓的[Kiwi Browser](https://kiwibrowser.com/))，且已安装[Tampermonkey](https://www.tampermonkey.net/)或其他同类插件管理器。
2. 转到Sleazy Fork的脚本页面：[JavBus论坛移动端界面适配](https://sleazyfork.org/zh-CN/scripts/472169-javbus论坛移动端界面适配)
3. 点击“安装此脚本”按钮
4. 在弹出窗口点击“安装”按钮
5. 完成，以移动端布局逛论坛吧

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
