/**
 * Created by huijun on 2016/3/14.
 */
var app=angular.module('myApp',['ngRoute']);
app.config(function($routeProvider,$locationProvider){
    $routeProvider.when('/',{
        templateUrl:'pages/home.html',
        controller:'HomeCtrl'
    }).when('/home',{
        templateUrl:'pages/home.html',
        controller:'HomeCtrl'
    }).otherwise({
        redirectTo:'/'
    })
});