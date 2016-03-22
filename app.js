/**
 * Created by huijun on 2016/3/14.
 */
var express=require('express');
var path=require('path');
var app=express();
var favicon = require('serve-favicon');
var bodyParser=require('body-parser');

var cookieParser=require("cookie-parser");
var session=require("express-session");
var MongoStore=require('connect-mongo')(session);
var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:28017/myshop');


app.use(express.static(path.join(__dirname,'app','public')));
app.use(favicon(path.join(__dirname, 'app', 'public', 'favicon.ico')));
app.use(cookieParser());
app.use(bodyParser.json());//解析json
app.use(bodyParser.urlencoded({extended:false}));//x-form-urlencode
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'zfsecret',//密钥
    key: 'zhufengkey',//cookie name
    cookie: {maxAge: 1000 * 60 * 60},//设置过期时间
    store: new MongoStore({
        url: 'mongodb://127.0.0.1:28017/nodeshow',
        host: '127.0.0.1',
        port: 28017
    })
}));
var users=require('./routes/users');
app.use('/users',users);
app.listen(3000);