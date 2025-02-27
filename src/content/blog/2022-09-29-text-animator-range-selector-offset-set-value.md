---
title: "テキストアニメーターの範囲セレクターのオフセットにsetValueできない"
date: "2022-09-29"
categories: 
  - "program"
tags: 
  - "script"
---

```
var animator1 = selectedLayer.Text.Animators.addProperty("ADBE Text Animator");
var selector1 = animator1.property("ADBE Text Selectors").addProperty("ADBE Text Selector"); // 範囲セレクターを追加
selector1.advanced.units.setValue(2) // 高度タブの単位を一旦「インデックス」に
selector1.property(6).setValue(comp.time, 0) // オフセットにsetValue
selector1.advanced.units.setValue(1) // 「パーセント」に戻す
```

範囲セレクターの高度タブの単位を「インデックス」にしてやるとできた。あとで「パーセント」に戻せばOK。
