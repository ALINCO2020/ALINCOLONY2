---
title: "長方形パスに対するパスのトリミングの挙動をエクスプレッションでいい感じに"
date: "2025-01-09"
categories: 
  - "mad"
tags: 
  - "tips"
---

https://twitter.com/ALINCO2020/status/1877327428147724429

パスのトリミングの終了点とオフセットをいじって実現。長方形のサイズを変更しても追従する。横方向と縦方向でエクスプレッションが違う。

# 横方向

↓終了点

```
var size = thisProperty.propertyGroup(1).propertyGroup(1)(1)(2); // 長方形パスのサイズを取得できればなんでもいい
var x = size[0];
var y = size[1];
var ratio = x / (x + y);
value * ratio + 100 * (1 - ratio) / 2;
```

↓オフセット

```
var end = thisProperty.propertyGroup(1)(2); // パスのトリミングの終了点を取得できればなんでもいい
var size = thisProperty.propertyGroup(1).propertyGroup(1)(1)(2); // 長方形パスのサイズを取得できればなんでもいい
var x = size[0];
var y = size[1];
var ratio = x / (x + y);
var trueEndValue = (end - 100 * (1 - ratio) / 2) / ratio;
-360 * trueEndValue / 100 / 2 * ratio;
```

# 縦方向

↓終了点

```
var size = thisProperty.propertyGroup(1).propertyGroup(1)(1)(2); // 長方形パスのサイズを取得できればなんでもいい
var x = size[0];
var y = size[1];
var ratio = 1 - (x / (x + y));
value * ratio + 100 * (1 - ratio) / 2;
```

↓オフセット

```
var end = thisProperty.propertyGroup(1)(2); // パスのトリミングの終了点を取得できればなんでもいい
var size = thisProperty.propertyGroup(1).propertyGroup(1)(1)(2); // 長方形パスのサイズを取得できればなんでもいい
var x = size[0];
var y = size[1];
var ratio = 1 - (x / (x + y));
var trueEndValue = (end - 100 * (1 - ratio) / 2) / ratio;
-360 * trueEndValue / 100 / 2 * ratio - 360 * (1 - ratio) / 2
```
