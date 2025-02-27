---
title: "JSON.parseで「)の値がありません」エラー"
date: "2024-12-21"
categories: 
  - "program"
tags: 
  - "script"
---

jsonの中身を見てみると、改行が挟まれてる。俺のスクリプトでは file.readln() でjsonを読み込むので、改行があるとエラーを吐く。なんで readln を使ったほうがいいのかは忘れた。

つまりjson書き出しの部分が悪い。以下のコードのように改行をなくしてから書き出せばOK。

```
function writeFile(object, filename) {
  var myFile = new File(dataPath + "/" + filename + ".json");
  myFile.open("w");
  myFile.encoding = "UTF-8";
  myFile.write(JSON.stringify(object).replace(/\r?\n/g, ''));
  myFile.close();
}
```
