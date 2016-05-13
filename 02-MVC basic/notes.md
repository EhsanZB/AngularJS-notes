## MVC

> Model

* it's a kind of data storage and represents our `data` (json/xml/database/...).

> View

* presentation assets. (display data)
* html files (templates).

> Controller

* gives us ability to add functionality to our data and link models to the view.
* javascript classes.
* controlls Angular application.
* it's a middle ware between view and model to bind data.
* has bidirectional relation with model and one-way relation with view.
* naming the controller with `PascalCase`.

---

> ng-controller

* use to reference controllers that created in javascript.
* manage the parts of the page using javascript classes.

_note that the exmaple below works on version 1.2.x (from 1.3 and above, we need to declare module)_

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
        $scope.author = {
        'name' : 'John',
        'lastName' : 'Doe'
        };
    }
    </script>

</body>
</html>
```