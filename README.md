# sequelize-transaction
Node.jsのORMであるsequelizeでトランザクション処理を扱うためのサンプル
## How to run
```
$ git clone https://github.com/tenmakamatani/sequelize-transaction.git
$ cd sequelize-transaction
$ npm i
$ mysql -u{username} -p{password}
mysql> source sqls/init.sql
mysql> \q
$ node index.js {your mysql username} {your mysql password}
```