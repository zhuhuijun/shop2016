/**
 * Created by huijun on 2016/3/17.
 */
var express = require('express');
var router = express.Router();
var User=require('../models').User;
var crypto = require('crypto');
function encrypto(str) {
    return crypto.createHash('md5').update(str).digest('hex');
}
router.post('/reg', function (req, res) {
    var user = req.body;
    user.userpwd = encrypto(user.userpwd);
    var md5Email = encrypto(user.useremail);
    var avatar = "https://secure.gravatar.com/avatar" + md5Email + "?s=48";
    delete  user.userpwd2;
    user.avatar = avatar;
    new User(user).save(function (err, result) {
        if (err) {
            res.status(500).json({msg: err});
        } else {
            res.json(result);
        }
    });
});
module.exports = router;