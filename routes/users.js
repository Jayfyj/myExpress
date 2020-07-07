var express = require('express');
var router = express.Router();
var { User1 } = require("../model/user")
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/aa', function(req, res, next) {
  
  User1.find({"username":"123"}, function(err, doc){
    if(err) {
      console.log(13122)
    } else {
      console.log(doc)
      // doc.save();
    }
  })
  res.send('aa');
});

router.get('/as', function(req, res, next) {
  User1.update({"username":"123"},{"$set":{"username":"78520"}}, function(err, doc){
    if(err) {
      console.log(13122)
    } else {
      console.log(doc)
      
    }
  })
  res.send('respond with a resource');
});

module.exports = router;
