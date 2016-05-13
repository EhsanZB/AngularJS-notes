## Controllers - part1

* A module is a collection of services, directives, controllers, filters, and configuration information.
* module is a way to organizing our code (like Namespaces).
* use to seperate the functionalities in our application into different parts.
* so, in order to protect our variables we should apply Namespacing (e.g: myApp).
* We can think of a module as a container for the different parts of our app.
* angular.module(name, [requires], [configFn]);

```js
var myAppModule = angular.module('myApp',[]);
```

> _note that he empty array in angular.module('myApp', [ ]) is the list of modules that 'myApp' depends on._


HTML file:

```html
<!DOCTYPE html>
<html lang="en" ng-app="myApp">
<head>
    <meta charset="UTF-8">
    <title>MVC basic</title>
    <script src="lib/angular.min.js"></script>
    <!-- referencing the controller file -->
    <script src="js/controllers.js"></script>
</head>
<body>

    <div ng-controller= "MyController">
        <h3>Hello  {{author.name + ', ' + author.lastName}}</h3>
    </div>

</body>
</html>
```

javaScript file (Way#1):

```js
// define the Namespace (angular module)
var myAppModule = angular.module('myApp',[]);

myAppModule.controller('MyController', function ($scope){
	$scope.author = {

        'name' : 'John',
        'lastName' : 'Doe'
    };
});
```

javaScript file (Way#2):

```js
var myAppModule = angular.module('myApp',[]).controller('MyController', function ($scope){
	$scope.author = {

        'name' : 'John',
        'lastName' : 'Doe'
    };
});
```




