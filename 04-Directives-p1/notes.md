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

> ng-checked
* sets the checked attribute on the element, if the expression inside ngChecked is truthy.

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

> ng-class
* The ngClass directive allows you to `dynamically set CSS classes` on an HTML element by databinding an expression that represents all classes to be added.
```html
<element ng-class="expression"> ... </element>
<element class="ng-class: expression;"> ... </element>
```

* there are three types the expression that we can be evaluated for this directive:

1. expression evaluates to a `string`
2. expression evaluates to an `object`
3. expression evaluates to an `array`

_note that If the expression evaluates to an array, each element of the array should either be a string or an object._

examples:
```
ng-class="style"
ng-class="{strike: deleted, bold: important, 'has-error': error}"
ng-class="[style1, style2, style3]"
ng-class="[style4, {orange: warning}]"
```

CSS:
```css
#box{
	width: 200px;
	height: 200px;
	border: 1px solid black;
}
div.bgRed{
	background-color: red;
}

div.bgGreen{
	background-color: green;
}

div.bgBlue{
	background-color: blue;
}
```

HTML:
```html
<!DOCTYPE html>
<html lang="en" ng-app="myApp">
<head>
    <meta charset="UTF-8">
    <title>Directives - sample</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <script src="angular.min.js"></script>
</head>
<body ng-controller="RGBController">

<div id="box" ng-class="{bgRed:R,bgGreen:G,bgBlue:B}"></div>
<div>
    <ul>
        <li>RED:<input type="checkbox" ng-model="R"></input></li>
        <li>GREEN:<input type="checkbox" ng-model="G"></input></li>
        <li>BLUE:<input type="checkbox" ng-model="B"></input></li>
    </ul>
</div>

<script>
    angular.module('myApp',[]).controller('RGBController',function($scope){

    })
</script>
</body>
</html>
```

> we can use ternary operators in conditional ngClass in which it allows us to use shorthand version of conditional statement to specify two different classes.

```
ng-class="$variableToEvaluate ? 'className-if-true' : 'className-if-false'"
```

> ng-options

* use to create options for a select element by getting the options from the scope model.
* use to dynamically generate a list of <option> elements for the <select> element using the array or object.
* By default, ngModel watches the model by reference, not value. So this is important to know when binding the select to a model that is an object or a collection.

> _Using select as will bind the result of the select expression to the model, but the value of the <select> and <option> html elements will be either the index (for array data sources) or property name (for object data sources) of the value within the collection. If a track by expression is used, the result of that expression will be set as the value of the option and select elements._

* ngOptions for __array data__ sources:

1. label `for` value `in` array
2. select `as` label `for` value `in` array
3. label `group by` group `for` value `in` array
4. label `disable when` disable `for` value `in` array
5. label `group by` group `for` value `in` array `track by` trackexpr
6. label` disable when` disable `for` value `in` array `track by` trackexpr
7. label `for` value `in` array | orderBy:orderexpr `track by` trackexpr

* ngOptions for __object data__ sources:

1. label `for` (key , value) `in` object
2. select `as` label `for` (key , value) `in` object
3. label `group by` group `for` (key, value) `in` object
4. label `disable when` disable `for` (key, value) `in` object
5. select `as` label `group by group `for` (key, value) `in` object
6. select `as` label `disable when` disable `for` (key, value) `in` object











