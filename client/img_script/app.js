var app = angular.module('app', []);

app.controller('MainCtrl', function ($scope) {
    // $scope.images = images;
    $scope.images = JSON.parse(images_str);
    // $scope.images = images;
});