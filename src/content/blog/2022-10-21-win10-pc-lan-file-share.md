---
title: "win10のPC2台をLANケーブルで接続してファイル共有"
date: "2022-10-21"
---

まずLANケーブルが認識されない。イーサネットが「_ネットワークケーブルが接続されていません_」となる。いや刺さっとるやろがい！

イーサネットのプロパティ > 構成 > 詳細設定 > 速度とデュプレックス を1台は「オートネゴシエーション」もう1台は「1.0Gbps 全二重通信」に設定してしばらく時間を置くと接続された。なんで若干のタイムラグがあるんだ……。

有線と無線を同時に使う設定はこちらを参考にした。[Windows10 Homeでも有線と無線を同時に使える](https://qiita.com/v2okimochi/items/6a08af25f8d315276cd1)

有線LANで接続できたはいいものの今度は何故か IPv6 の Wi-Fi が接続できなくなった。IPv4 は繋がる。意味がわからない。　追記：ルーター再起動したら直りました。
