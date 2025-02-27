---
title: "パスのプロパティにsetValue"
date: "2023-09-20"
categories: 
  - "program"
tags: 
  - "script"
---

```
// pathプロパティ取得
var path = hogehoge.property()
// Shapeオブジェクトのインスタンス作成
var newShape = new Shape()
// もろもろ入れて
newShape.vertices = newV
newShape.inTangents = newInT
newShape.outTangents = newOutT
newShape.closed = closed
// setValue
path.setValue(newShape)
```

フォントと似てる処理の流れ。Shapeオブジェクトを作ってそれにもろもろ入れてsetValue。

vertices は頂点。inTangents と outTangents は制御点。どれも\[\[x,y\], \[x,y\]\]のような座標の形式になる。

制御点は頂点をもとに計算される座標。つまり\[0, 0\]なら頂点と同じ位置に重なることになる。

closedはパスを閉じるかどうかのブール。
