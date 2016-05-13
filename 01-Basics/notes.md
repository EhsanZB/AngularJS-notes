## AngularJS basics

* angular directives help us to `define the view` for our application. angular `extends HTML` with directives.
* ng-directiveName (equal to data-ng-directiveName). we can also make custom directive.

> ng-app

* defineds an AngularJs `application`. It tells Angular that which element should be managed.

> ng-model

* binds tha value of `HTML controls` (inputs, textarea, select) to application data.

> ng-bind

* binds application data to the `HTML view`.

```html
<!DOCTYPE html>
<html lang="en" ng-app="">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="angular.min.js"></script>
</head>
<body>

    <input type="text" ng-model="name">

    <!--binding data using ng-model directive-->
    <h3>Hello, {{name}}</h3>

    <!--binding data to an element using ng-bind directive-->
    <h3 ng-bind="name"></h3>

    <!--note that we can not use {{expression}} when using ng-bing-->
    <label>My name is: </label><label ng-bind="name"></label>

</body>
</html>
```