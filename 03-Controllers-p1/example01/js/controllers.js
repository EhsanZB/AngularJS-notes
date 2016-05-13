// define the Namespace (angular module)
var myAppModule = angular.module('myApp',[]);

myAppModule.controller('MyController1', function ($scope){
	$scope.author = {
		
        'name' : 'John',
        'lastName' : 'Doe'
    };
});

myAppModule.controller('MyController2', function ($scope){
	$scope.author = {
		
        'name' : 'Foo',
        'lastName' : 'Bar'
    };
});
    
