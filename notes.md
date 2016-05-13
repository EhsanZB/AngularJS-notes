## Controllers - part2

> ng-repeat

* it allows us to iterate over the properties of an object.
* key refers to the item index ($index).

```html
<div ng-repeat="(key, value) in myObj"> ... </div>
```

> ng-src

* prevents any image to loading until after the angular library has finished its loading up and replaces the expression inside {{}}.
* when we work with templates, we can not simply call an image, we have to use ng-src directive.

```html
<img ng-src="img/{{item.fileName}}_tmb.jpg" alt="Photo of {{item.name}}" />
```

##### Example:

HTML:

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
        <ul>
        	<li ng-repeat="client in clients">
        		<h3>{{client.Name}}</h3>
        		<img ng-src="img/{{client.Name}}_tmb.jpg">
        		<h5>Account Number: {{client.Account}}</h5>
        	</li>
        </ul>
    </div>

</body>
</html>
```

javaScript:

> _note that it's not a good practice to put our data directly here. we need to read such data from json file using services._

```js
var myAppModule = angular.module('myApp',[]);

myAppModule.controller('MyController', function ($scope){
	$scope.clients = [
   {
      "Name" : "Xytrex Co.",
      "Description" : "Industrial Cleaning Supply Company",
      "Account" : "ABC15797531"
   },
   {
      "Name" : "Watson and Powell, Inc.",
      "Description" : "Law firm. New York Headquarters",
      "Account" : "ABC24689753"
   }

]
});
```






