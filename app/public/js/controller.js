/**
 * Created by huijun on 2016/3/14.
 */
var app=angular.module('myApp');
app.controller('HomeCtrl',function($scope){
    $scope.title='金隅嘉华';
});

app.controller('RegCtrl',function($scope){
    $scope.title='金隅嘉华RegCtrl'
    $scope.save=function(){
        console.info('save');
    }
});

app.controller('LoginCtrl',function($scope){
    $scope.title='金隅嘉华LoginCtrl';
});