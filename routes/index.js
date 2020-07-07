var express = require('express');
var router = express.Router();
var { User1 } = require("../model/user")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  const doc = new User1({
    username:"123"
  }) //options符合集合规则的⽂文档数据，以对象形式
  doc.save() //将⽂文档插⼊入数据库中
});

module.exports = router;
