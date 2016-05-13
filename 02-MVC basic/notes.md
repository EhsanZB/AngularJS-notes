## MVC

> Model

* it's a kind of data storage and represents our `data` (json/xml/database/...).
* Models in AngularJS are the properties of a scope; scopes are attached to the DOM where scope properties are accessed through bindings.

> View

* presentation assets. (display data)
* html files (`templates`).

> Controller

* gives us ability to add functionality to our data and link models to the view.
* contains javascript classes. such classes contain `business logic` behind the application to decorate the scope with functions and values.
* controlls Angular application.
* it's a middle ware between view and model to bind data.
* has bidirectional relation with model and one-way relation with view.
* naming the controller with `PascalCase`.
* ng-Controller directive specifies a Controller class;

---

> ng-controller

* use to reference controllers that created in javascript.
* attaches a controller class to the view.
* manage the parts of the page using javascript classes.

_note that the exmaple below works on version 1.2.x (from 1.3 and above, we need to declare module otherwise, the controller in our view will be declared as undefined!)_

* more details at [AngularJs Breaking Changes](https://github.com/angular/angular.js/blob/master/CHANGELOG.md#breaking-changes-1)
* also note that in this example, we have place everything in a global variable called $scope (not a good practice! could conflict with other variables)
* in such case, we need to specify Namespaces to differentiate between variables with same name (see next topic).

```html
<!DOCTYPE html>
<html lang="en" ng-app="">
<head>
    <meta charset="UTF-8">
    <title>MVC basic</title>
    <script src="angular.min.js"></script>

</head>
<body>

    <!--setting up the View-->
    <!--linking our controller to the view by applying ng-controller-->
    <div ng-controller= "MyController">
        <h3>Hello  {{author.name + ', ' + author.lastName}}</h3>
        <h5>Your age is {{10+25}}</h5>
    </div>


    <script>
    // define our Controller
    function MyController($scope) {
        // define our Model (data) by manually creating an object
        // also called as 'model object'
        $scope.author = {
        'name' : 'John',
        'lastName' : 'Doe'
        };
    }
    </script>

</body>
</html>
```

##### Shopping cart example:

```html
<!doctype html>
<html>
<head>
    <title>Your Shopping Cart</title>
    <script src="angular.min.js"></script>
</head>
<body ng-controller='CartController' ng-app=''>

    <h1>Your Order</h1>

    <div ng-repeat='item in items'>
        <span>{{item.title}}</span>
        <input ng-model='item.quantity'>
        <span>{{item.price | currency}}</span>
        <span>{{item.price * item.quantity | currency}}</span>
        <button ng-click="remove($index)">Remove</button>
    </div>

    <script>
        function CartController($scope) {
            $scope.items = [
                {title: 'Paint pots', quantity: 8, price: 3.95},
                {title: 'Polka dots', quantity: 17, price: 12.95},
                {title: 'Pebbles', quantity: 5, price: 6.95}
            ];

            $scope.remove = function(index) { $scope.items.splice(index, 1);
            }
        }
    </script>
</body>
</html>
```