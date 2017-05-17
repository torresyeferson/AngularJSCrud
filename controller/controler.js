var myApp = angular.module('demoApp', []);

myApp.controller('listadoCtrl', function ($scope, $http) {
  	$http.get('http://localhost:8080/PracticaWeb/webresources/com.model.animales').success(function(data) {
    $scope.elementos =data;
    console.log(data)
 });
 
});
