---
title: "MacのVScodeでGoogle日本語入力がまともに機能しない問題"
date: "2023-08-29"
---

sudo で起動するのをやめたら直った。

そもそもなんで sudo でVScode起動してたかというと、権限が云々でファイルを保存できなかったから。chmod でファイル権限変えて解決。
