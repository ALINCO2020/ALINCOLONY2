---
title: "ConoHa Wing で Python を動かそうとして躓いたポイント"
date: "2022-09-11"
categories: 
  - "program"
---

24時間つけっぱなしのメインPCで動かしてる Python のプログラムがあって「あれ、俺サーバー契約してるんだからそっちで動かせばよくね…？」となり。わりと躓いたのでメモ。

<!--more-->

## 【SSH接続で Permission denied (publickey).】

ConoHa のコントロールパネル > サーバー管理 > SSH で SSH Key 発行して接続するだけなんだけど接続してみると Permission denied (publickey).

```
ssh conoha@www123.conoha.ne.jp -p 1234 -i ~/.ssh/name-tag.pem
```

ホスト名が www123.conoha.ne.jp ポート番号が 1234 ユーザ名が conoha .pem ファイルが name-tag.pem の場合の例。@の前のところのユーザー名を指定してなかった。このバカーーーー！！！

## 【pyenv のインストールに失敗】

```
git clone git://github.com/yyuu/pyenv.git ~/.pyenv
```

で失敗。git:// を https:// に変更したら成功。

## 【anaconda のインストールでメモリ不足エラー】

anaconda3 のバージョンを最新の 2022.05 でインストールしようとしたら Oserror: \[Errno 12\] Cannot Allocate Memory

バージョンを 2020.02 に落としたらいけた。最新のはデカすぎるのね、、、。

2020.02 は参考にしたサイトで使われてたバージョン。もうちょい新しいのでもいけるかも。

## 【cron で python コマンドが効かない】

パスは通したはずなのに……。仕方ないから pyenv 内の実行ファイルまでのフルパスを通して解決。

```
~/.pyenv/versions/anaconda3-2020.02/bin/python /home/ユーザー名/workspace/test.py
```

## 【同じディレクトリに置いた jsonファイルを見つけてくれない】

相対パス使えないのかしら。。。またフルパスを書いて解決。

ルートディレクトリで Python 実行してたから作業ディレクトリにあるファイルを見つけられないのは当然ですね、はい。cron はコマンドをフルパスで書かなきゃダメみたいなのでこちらも同じくフルパスで書きましょう。
