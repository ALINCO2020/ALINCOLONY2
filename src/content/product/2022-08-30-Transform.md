---
title: "Transform"
date: "2022-08-30"
thumbnail: "images-product/Transform.png"
description: "Utility Boxのトランスフォームを改良"
categories: 
  - "script"
tags:
  - "OSS"
---

Utility Boxのトランスフォームを改良

![](/images-product/Transform.png)

# 説明
使い方はUtility Boxと大体同じ。

- UI変更
- 自動で3次元レイヤーに
- キーフレームが打たれてても動作するように

[動作環境]  
Adobe After Effects : 2022 2023 2024  
OS : Windows10 Mac

[更新履歴]  
2022-09-06 バグ修正&スケールをXYZ固定できるように  
2022-10-17 キーフレーム上で実行するとすべてのキーフレームを更新するように  
2022-11-10 Sequenceボタンをaltクリックでマイナスの値になるように  
2022-11-23 キーフレーム上でSequenceボタンをctrlクリックした際に他のキーフレームを更新しないように  
2022-12-05 Randomizeボタンも同様の処理に  
2023-01-09 Shift+Sequenceクリックで全て同じだけずらすように 位置のバグFix  
2023-12-18 位置、回転、スケールで別々の値を保持できるように  
2024-05-29 小数点以下を勝手に丸めるバグを修正

[ソースコード]  
[https://github.com/ALINCO2020/Transform.jsx](https://github.com/ALINCO2020/Transform.jsx)

[download](/files/Transform_V1.8.zip "download")