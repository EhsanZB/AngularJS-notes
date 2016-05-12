## AngularJS basics

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

    <!--binding using ng-model directive-->
    <h3>Hello, {{name}}</h3>

    <!--binding using ng-bind directive-->
    <h3 ng-bind="name"></h3>

</body>
</html>
```