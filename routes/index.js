var express = require('express');
var router = express.Router();
/*连接database
var connection = mysql.CreateConnection("mysql://user:")
 */
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
