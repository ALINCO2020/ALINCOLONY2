---
title: "エフェクトを追加する方法"
date: "2023-09-20"
categories: 
  - "program"
tags: 
  - "script"
---

簡単なことなのに毎回ググってる気がする。addPropertyでエフェクトのmatchNameを入れてあげれば良い。matchNameはスクリプトで洗い出す。

例えばスライダー制御ならこんな感じ。

```javascript
var slider = layer.effect.addProperty("ADBE Slider Control")
```

addPropertyするとプロパティオブジェクトが返ってくるから、それを操作して名前を変えたり値を変えたりしていく。
