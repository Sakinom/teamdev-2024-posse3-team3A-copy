# Gajup!

## セットアップ方法
### macユーザー向け
1. git cloneする
2. developブランチに移動する
3. rootディレクトリ（teamdev-2024-posse3-team3A）で`make init`を実行

### windowsユーザー向け
1. git cloneする
2. developブランチに移動する
3. rootディレクトリ（teamdev-2024-posse3-team3A）で以下のコマンドを実行
```
docker-compose build --no-cache --force-rm
docker-compose up -d
docker-compose exec app composer install
docker-compose exec app cp .env.example .env
docker-compose exec app php artisan migrate
docker-compose exec app php artisan migrate:fresh --seed
```

### 共通手順
4. `api/web/.env`ファイルの一部を以下のように編集
```
APP_NAME=Laravel
APP_ENV=local
APP_KEY=base64:Wyort/3truSZ4TG04Ck8KrhLm1ZrrtVcXnl28FpLX80=
APP_DEBUG=true
APP_URL=http://localhost
```
5. `cd front`を実行
6. `npm install`を実行
7. `npm run dev`を実行し、[localhost:3000](http://localhost:3000/login) にアクセスしてログイン画面が表示されれば成功

## ログイン方法
メールアドレス：test.user@example.com
パスワード：password

## 一番確認して欲しい機能
カルテ機能

## ダッシュボード
1. http://localhost:3000/admin/dashboard にアクセスする
2. ダッシュボードが表示される
### 企業の成長
- ダッシュボード上にアンケートの総合点数をもとに企業の成長を表す木のイラストが表示されます。
### 総合点数の表示
- 最近の総合点数が表示されます。
### 目標値と現状値の乖離
- ターゲットにしている観点の点数の目標値と現状値の差を確認することができます。
### メインアンケートの管理
- 回答率と配布予定日を確認することができます。
#### メインアンケート作成機能
- 3ヶ月～半年に1回行う全社員に配布するアンケートの配信設定を行えます
1. [アンケートの設定をする]ボタンを押します。
2. フォームに沿って情報を入力します。
## カルテ機能
### カルテ一覧
- アンケート結果の詳細が記録されているカルテが実施回ごとにまとめてあります。
### カルテ詳細
#### メインアンケート概要タブ
以下の内容が表示されます。
- アンケート結果を基にした、企業の良い点改善点
- アンケート回答率
- 直近6回の総合点の推移
- 直近3年分のeNPSの推移、割合
- eNPS割合
#### 施策入力タブ
- 実施する施策を入力し、入力された施策は社内報に反映されます。（社内報未実装）
#### メインアンケート詳細タブ
以下の内容が表示されます。
- ヒートマップ
- 組織と従業員両方の観点による平均総合点推移
- 設問ごとの回答割合
- 属性別評価点
- 属性別評価比較
#### マンスリーアンケートタブ
以下の内容が表示されます。
- アンケートに常設している設問の過去6回分の推移
- 追加した設問のデータ
#### 任意記述のAI要約タブ
以下の内容が表示されます
- アンケートでの自由記述をAIが分析、要約した文章
- ピックアップされた3点の内容
- 年代、部署が表示された自由記述の原文
## マンスリーアンケート作成機能
- メインアンケート作成後にマンスリーアンケートを作成することができます。
1. サイドバーの[マンスリーアンケート作成]をクリックします。
2. フォームに沿って情報を入力します。
## 従業員登録機能
- サイドバーの[従業員登録]をクリックします。
### ファイルテンプレート作成機能
- CSVダウンロードボタンを押すと、メールアドレスが羅列されたCSVファイルをダウンロードできます。
### 従業員データのインポート機能
- 従業員のメールアドレスが羅列されたCSVファイルを選択して、従業員情報を一度にインポートすることができます。
### 人事登録機能
1. 招待したい新しい人事のメールアドレスを入力します。
2. http://localhost:8025 にアクセスして受信したメールを確認します。
### 新規部署登録機能
- 追加したい部署の名前を入力することができます。
## メール配信＆回答機能
- メインアンケートやマンスリーアンケートを従業員に対して、メールで配布することができます。
- 今回はlaravelのschedule機能を使いますが、0:00ちょうどにコマンドを走らせた状態にする必要があるため擬似的に行います。
1. ターミナル内で docker compose exec app bash を実行
2. appコンテナ内で php artisan email:send-surveys を実行
3. http://localhost:8025 にアクセスしてメールが受信されていることを確認する。
4. メール内のリンクを開いて、アンケートに答える。
## 開発ルール
URL: https://docs.google.com/document/d/1PeR-SxS3jwVHSVlmEZ3663PespJJhDA3-MZOUTgH_QE/edit#heading=h.wncaeye6tsqg
