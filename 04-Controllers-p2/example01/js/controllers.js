var myAppModule = angular.module('myApp',[]);

myAppModule.controller('MyController', function ($scope){
	$scope.shoppingList = [
      
      {'name' : 'Milk'},
      {'name' : 'Apple'},
      {'name' : 'Butter'},
      {'name' : 'Bread'},
      {'name' : 'Chicken'}
   ]

});
    
