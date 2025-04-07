---
title: "AEでテキスト下揃えアニメーション"
date: "2025-04-07"
description: "ちょっと工夫が要る"
categories: 
  - "mad"
tags: 
  - "tips"
---

ちょっと工夫が要るのでメモ。TypeAnimeJPを作ったときの知識が役に立った。

# ソーステキストにエクスプレッションを追加
以下のテキストをアニメーションさせるとする。

```
ああああ
いいい
うう
ええええ
おおおおお
```

改行部分に「\n」を追加する。

```
ああああ\n
いいい\n
うう\n
ええええ\n
おおおおお
```

改行を無くして1行にする。

```
ああああ\nいいい\nうう\nええええ\nおおおおお
```

空のテキストレイヤーを作成し、ソーステキストに以下のエクスプレッションを書く。（text変数にさっきのテキストをぶち込む）

```javascript
var text = "ああああ\nいいい\nうう\nええええ\nおおおおお";
```

スライダー制御エフェクトを追加して、その値を取得するエクスプレッションを追記。  
Math.roundで整数値にまとめる。文字数を指定するための値なので。

```javascript
var s = Math.round(effect("スライダー制御")("スライダー"));
```

slice関数でスライダー制御の値の文字数だけ表示されるようにする。

```javascript
text.slice(0, s);
```

これでスライダー制御の値にキーフレームを打てばアニメーションするようになる。

# アンカーポイントにエクスプレッションを追加
このままでは上揃えのままなので、下揃えにするためにアンカーポイントにエクスプレッションを追加していく。

sourceRectAtTimeでこのレイヤーの縦横のサイズを得る。  
さっきわざわざテキストをエクスプレッション内に記述したのは、普通にテキストを書いてアニメーターの不透明度でアニメーションさせると、レイヤーのサイズが変化しないから。

ちなみに「time - thisLayer.startTime」がちょっと工夫ポイント。startTimeの説明がややこしいので意味は割愛。

```javascript
var r = thisLayer.sourceRectAtTime(time - thisLayer.startTime, true);
```

レイヤーの縦横のサイズが取得できたので、その値を使って位置を補正。もともとのアンカーポイントの値にレイヤーの高さを追加するだけ。

```javascript
[value[0], value[1] + r.height];
```

# エクスプレッションまとめ
ソーステキスト

```javascript
var text = "ああああ\nいいい\nうう\nええええ\nおおおおお";
var s = Math.round(effect("スライダー制御")("スライダー"));
text.slice(0, s);
```

アンカーポイント

```javascript
var r = thisLayer.sourceRectAtTime(time - thisLayer.startTime, true);
[value[0], value[1] + r.height];
```