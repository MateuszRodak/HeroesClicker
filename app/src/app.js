var app = angular.module('myApp', []);

app.controller('MyController', ['$scope', function($scope){
    $scope.name = 'Hello World from controller';
}])

