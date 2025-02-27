---
title: "レイヤーと関連付けられていないため、値を設定できません"
date: "2023-09-20"
categories: 
  - "program"
tags: 
  - "script"
---

スクリプトからSourceTextのスタイルをいじろうとした時に出たエラー。TypeAnimeJP開発中に追加テキストを左揃え固定にしようとしたときに遭遇。

```
// 左揃えに
var tmpTextDocument = tmpTextLayer.property("Source Text").value
tmpTextDocument.justification = ParagraphJustification.LEFT_JUSTIFY
tmpTextLayer.property("Source Text").setValue(tmpTextDocument)
```

こんな感じにしたらいけた。一回valueで取得して値をいじって再度setValue。フォントを指定するときと同じ流れ。
