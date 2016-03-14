/**
 * Created by huijun on 2016/3/14.
 */
var express=require('express');
var path=require('path');
var favicon = require('serve-favicon');
var app=express();
app.use(express.static(path.join(__dirname,'app','public')));
app.use(favicon(path.join(__dirname, 'app', 'public', 'favicon.ico')));
app.listen(3000);