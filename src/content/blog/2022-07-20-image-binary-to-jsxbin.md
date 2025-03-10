---
title: "画像ファイルをバイナリ化してjsxbinに埋め込み"
date: "2022-07-20"
categories: 
  - "program"
tags: 
  - "script"
---

```javascript
var f = File("画像ファイルパス");
f.encoding = 'BINARY'
f.open('e');

var binary;
binary = f.read().toSource();

var myFile = new File("~/Desktop/binaryOutput.txt");
myFile.open("w");
myFile.encoding = "UTF-8";
myFile.write(binary);
myFile.close();

$.writeln(binary);

f.close();
```

上記を実行すると出てくるファイルを開いて (new String("この部分") をコピー。コピーしたバイナリを変数に格納。画像ファイルのパスを入れるところにぶち込めば表示される。

これ画像だけじゃなくて ffx とかもバイナリ化して埋め込める気がする。。。jsxbinファイル一個だけ渡すスクリプトかっこよい。

参考 : [https://youtu.be/CVvdykFNXAY](https://youtu.be/CVvdykFNXAY)

追記 : これ使ったほうが早い。[https://scriptui.joonas.me/](https://scriptui.joonas.me/)
