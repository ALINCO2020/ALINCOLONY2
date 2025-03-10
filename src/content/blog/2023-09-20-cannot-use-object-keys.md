---
title: "Object.keys()が使えない"
date: "2023-09-20"
categories: 
  - "program"
tags: 
  - "script"
---

こんな関数を用意してやる。

```javascript
var getKeys = function(associativeArrayObject) {
  var arrayWithKeys=[], associativeArrayObject;
  for (key in associativeArrayObject) {
    // Avoid returning these keys from the Associative Array that are stored in it for some reason
    if (key !== undefined && key !== "toJSONString" && key !== "parseJSON" ) {
      arrayWithKeys.push(key);
    }
  }
  return arrayWithKeys;
}
```

使い方

```
getKeys(Object)
```
