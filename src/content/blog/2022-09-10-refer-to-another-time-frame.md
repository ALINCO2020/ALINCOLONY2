---
title: "別の時間のフレームを参照"
date: "2022-09-10"
categories: 
  - "program"
tags: 
  - "plugin-development"
---

RGBDelayでRGBがズレた状態のまま残り続けるキャッシュのバグを発見。PF\_OutFlag\_WIDE\_TIME\_INPUT フラグを立てることで解決。名前の通り、現在の時間以外のインプットも使いますよ～みたいな意味かな？
