---
title: "エクスプレッションを使うスクリプトを書くときの注意点"
date: "2023-09-20"
categories: 
  - "program"
tags: 
  - "script"
---

プロジェクト設定のエクスプレッションエンジンが「以前のExtendScript」だと正常に動作しない。エクスプレッションがエラー吐く。

プロジェクト設定は取得できるので、以前のExtendScriptが選択されている場合は警告を出して処理を停止させるとかが良いと思う。

```javascript
app.project.expressionEngine
```
