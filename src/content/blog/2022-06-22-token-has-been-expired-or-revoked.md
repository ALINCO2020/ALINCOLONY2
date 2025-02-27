---
title: "GCP の Gmail API で Token has been expired or revoked."
date: "2022-06-22"
categories: 
  - "program"
---

OAuth 同意画面が外部向けかつ、公開ステータスが「テスト」の場合に発行されるトークンは7日で有効期限が切れてしまうらしい。

公開ステータスを本番環境にすればOK。認証のときに警告が出るけど自分しか使わないので問題ない。（Google による審査が必要です！みたいに言われるけど無視してOK。審査なしでも本番環境に変更は可能）

あとこれ Gmail API 関係ないね。
