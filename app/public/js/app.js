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
    }).when('/user/reg',{
        templateUrl:'pages/user/reg.html',
        controller:'RegCtrl'
    }).when('/user/login',{
        templateUrl:'pages/user/login.html',
        controller:'LoginCtrl'
    }).otherwise({
        redirectTo:'/'
    })
});
app.run(function($http,$location,$rootScope){
    $http({
        url: '/users/validate',
        method: 'POST'
    }).success(function (user) {
        $rootScope.user=user;
        $location.path('/home');
    }).error(function (data) {
        $location.path('/users/login');
    })
});
