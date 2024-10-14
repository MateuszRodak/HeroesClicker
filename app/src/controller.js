(function(){

    angular.module("controllerModule",{})
    .controller('HelloWorldContr', function($scope){

    $scope.name ="Hello World!";
    })
})();