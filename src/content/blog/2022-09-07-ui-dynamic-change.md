---
title: "UIの動的変更"
date: "2022-09-07"
categories: 
  - "program"
tags: 
  - "script"
---

```
function updateUILayout(container) {
  try {
    container.layout.layout();
    mainWin.layout.layout();
  } catch (e) {
    alert(e.message + e.line)
  }
}
```

変えたいパーツの上のグループを container にぶち込めばOK。
