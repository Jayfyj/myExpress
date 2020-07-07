var express = require('express');
var router = express.Router();
var { User1 } = require("../model/user")

/* GET home page. */
router.get('/signing/get_user_status', function(req, res, next) {
  console.log(123)
  // res.send({"aa":"123"});
  User1.find({"username":"123"}, function(err, doc){
    if(err) {
      console.log(13122)
    } else {
      console.log(doc)
      // doc.save();
      res.send(doc);
    }
  })
});

module.exports = router;
