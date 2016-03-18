/**
 * Created by huijun on 2016/3/14.
 */
var app = angular.module('myApp');
app.controller('HomeCtrl', function ($scope) {
    $scope.title = '金隅嘉华';
});

app.controller('RegCtrl', function ($scope, $http, $location) {
    $scope.title = '金隅嘉华RegCtrl'
    $scope.save = function () {
        var v = $("#regform").validate({
            onsubmit: false,
            errorPlacement: function (error, element) {
                error.appendTo(element.parent());
            }
        });
        var ret = v.form();
        if (ret) {
            $http({
                url: '/users/reg',
                method: 'POST',
                data: $scope.user
            }).success(function (user) {
                $location.path('/users/login');
            }).error(function (data) {
                $location.path('/users/reg');
            })
        }
    }
});

app.controller('LoginCtrl', function ($scope,$http,$locatin) {
    $scope.save = function () {
        var v = $("#regform").validate({
            onsubmit: false,
            errorPlacement: function (error, element) {
                error.appendTo(element.parent());
            }
        });
        var ret = v.form();
        if (ret) {
            $http({
                url: '/users/login',
                method: 'POST',
                data: $scope.user
            }).success(function (user) {
                $location.path('/home');
            }).error(function (data) {
                $location.path('/users/login');
            })
        }
    }
});