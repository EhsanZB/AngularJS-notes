## Directives - part1

> is an extension of HTML vocabulary that allows us to create new behaviours (creating `reusable components` that can be used within the whole application - or even by providing custom components).

* some built-in angular directives: ng-bind, ng-model, ng-click, ng-app, ...
* directives can be applied as:

1. attribute
2. element
3. class
4. comment

* directive syntax:

```
ng-model
ngModel
ng:model
data-ng-model
data:ng-model
```

* angular `normalizes` an element's tag and attribute name to determine which elements match which directives.
* since HTML is case-insensitive, angular refers to directives in the DOM by lower-case forms, typically using dash-delimited attributes on DOM elements.
* HTML5 valid directive syntax:


```html
<!--not html5 valid-->
<div ng-controller="MyController"></div>

<!--valid-->
<div data:ng-controller="MyController"></div>
```


> ng-if
* directive removes or recreates a portion of the DOM tree based on an {expression}.

```
ng-if="expression"
```

_note that ngIf differs from ngShow and ngHide in that ngIf completely removes and recreates the element in the DOM rather than changing its visibility via the display css property._

> ng-show
* shows or hides the given HTML element based on the expression provided to the ngShow attribute.

```
ng-show="true"
ng-show="false"
ng-show="expression" // any expression that evaluates to true/false
```

> ng-hide
* shows or hides the given HTML element based on the expression provided to the ngHide attribute.
* The .ng-hide CSS class is predefined in AngularJS and sets the display style to none (using an !important flag).
* .ng-hide selector can be easily overridden by heavier selectors. that's why we need to apply !important.

input (checkbox) directives:

> ng-true-value
* The value to which the expression should be set when selected.

> ng-false-value:
* The value to which the expression should be set when not selected.


```html
<!DOCTYPE html>
<html lang="en" ng-app="myApp">
<head>
    <meta charset="UTF-8">
    <title></title>
    <script src="angular.min.js"></script>
</head>
<body>

<form ng-controller="CheckboxController">
    <ul>
        <label>Do you agree? {{dataModel.acceptedValue2}}</label>
        <li><input type="checkbox" ng-model="dataModel.acceptedValue2" ng-true-value="'YES'" ng-false-value="'NO'"></li>

        <br>
        <label>How do you feel? {{dataModel.acceptedValue3}}</label>
        <li><input type="checkbox" ng-model="dataModel.acceptedValue3" ng-true-value="'OK'" ng-false-value="'NOT OK'"></li>

        <br>
        <label>Do you want to continue?</label>
        <li><input type="checkbox" ng-model="dataModel.acceptedValue1"</li>
        <li><input type="button" value="continue" ng-disabled="!dataModel.acceptedValue1"></li>
        <li><input type="checkbox" ng-checked="dataModel.acceptedValue1"><label ng-hide="!dataModel.acceptedValue1">{{message}}</label></li>

        <br>
        <!-- change the age value defined in the scope to see changes (to hide this element and remove it from DOM) -->
        <li ng-if="age > 30"><label>I'm in my thirties!</label></li>
    </ul>
</form>


<script>
    var myApp = angular.module('myApp',[]);
    myApp.controller('CheckboxController',function($scope){
        $scope.dataModel = {
            acceptedValue1 : false,
            acceptedValue2 : 'YES',
            acceptedValue3 : 'OK'
        };
        $scope.message = 'Yes, I want to continue.';
        $scope.age = 34;
    });
</script>

</body>
</html>

```
