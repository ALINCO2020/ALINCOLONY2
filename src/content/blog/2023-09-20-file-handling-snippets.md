---
title: "ファイル操作スニペット"
date: "2023-09-20"
categories: 
  - "program"
tags: 
  - "script"
---

ファイルの存在を確認。ファイルの保存・読み込み。ファイル扱うスクリプトは毎回頭にこれ書けばいいかも。

```javascript
var dataPath = Folder.decode(Folder.userData) + '/Aescripts/YourScriptName';
var f = new Folder(dataPath);
if (!f.exists) f.create();

function fileExist(filename) {
  var file = new File(dataPath + "/" + filename + ".json");
  return file.exists
}

function writeFile(object, filename) {
  var myFile = new File(dataPath + "/" + filename + ".json");
  myFile.open("w");
  myFile.encoding = "UTF-8";
  myFile.write(JSON.stringify(object).replace(/\r?\n/g, ''));
  myFile.close();
}

function readFile(filename) {
  var file = new File(dataPath + "/" + filename + ".json");
  file.open('r');
  file.encoding = 'UTF-8';
  return JSON.parse(file.readln());
}

var settings;
function makeSettings() {
  settings = {}
  writeFile(settings, 'settings')
}
if (!fileExist('settings')) {
  makeSettings()
} else {
  try {
    settings = readFile('settings')
  } catch (e) {
    makeSettings()
  }
}
```

# 更新記録
- 2024/12/20（金）
  - writeFile関数に改行をなくす処理を追加
- 2024/12/21（土）
  - 拡張子をtxtからjsonに