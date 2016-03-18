/**
 * Created by huijun on 2016/3/17.
 */
var mongoose = require('mongoose');

module.exports = mongoose.model('User', new
    mongoose.Schema({
    username: {type: 'String'},
    useremail: String,
    userpwd: String,
    avatar: String
}));