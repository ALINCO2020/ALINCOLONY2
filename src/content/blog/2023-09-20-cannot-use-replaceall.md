---
title: "replaceAllが使えない"
date: "2023-09-20"
categories: 
  - "program"
tags: 
  - "script"
---

ExtendScriptでは使えないので正規表現を使う。

```javascript
text.replaceAll('$', '') // replaceAll の場合
text.replace(/\$/g, '') // replace の場合
```
