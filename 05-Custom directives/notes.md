## Directives - part2 (Custom directives)

```js
angular.module('myApp',[]).directive('directiveName', function(){
    return function(scope, element, attrs) {

    };
});
```
* by default a directive gets the parent’s scope. But we don’t want that in all cases.
* note that the directiveName is written in camelCase (its usage in an element: directive-name).

```html
<!DOCTYPE html>
<html lang="en" ng-app="myApp">
<head>
	<meta charset="UTF-8">
	<title>Custom directive - sample</title>
	<script src="angular.min.js"></script>
</head>
<body>

	<p ng-controller="TodayController" change-style="Saturday">Today is {{today}}.</p>
	<p ng-controller="TomorrowController">Tomorrow is {{tomorrow}}.</p>

<script>
	var days = ["Sunday", "Monday", "Tuesday", "WednesDay", "Thurseday", "Friday", "Saturday"];

	angular.module('myApp',[]).controller('TodayController', function($scope){

		$scope.today = days[new Date().getDay()];

	}).controller('TomorrowController', function($scope){

		if(days[new Date().getDay()] === "Saturday"){

			$scope.tomorrow = days[0];

		}else{

			$scope.tomorrow = days[new Date().getDay()+1];
		}

	}).directive('changeStyle', function(){

		return function(scope,element,attrs){

			if (scope.today == attrs.changeStyle || scope.today === "Sunday"){

				element.css({
					color : "red",
					fontSize : "20px"
				});

			};
		}
	});
</script>
</body>
</html>
```
##### Directive Definition Object:

* custom directive with configurable properties (attributes).

```js
angular.module('myApp',[]).directive('directiveName', function(){
    return {

        template:
        templateUrl:
        restrict:
        scope:
        link:
        compile:
        replace: // Deprecated!
        require:
        controller:
        controllerAs:
        bindToController:
        priority:
        terminal:
    };
});
```

> `template`: specifies the HTML markup that will be produced when the directive is compiled and linked by Angular.

> `templateUrl`: if we place the template in a separate HTML file, then we need to use templateUrl point to it instead of template.

> `restrict`:  provides a way to specify how a directive should be used in HTML or can be invoked. (AECM: Attribute,Element,Class,Comment).

* e.g: 'AE': the respective directive can be only invoked as either an attribute or as an element.
* if the directive name is colorList then:
    1. A: `<span color-list="example"></span>`
    2. E: `<color-list></color-list>`
    3. C: `<div class="color-list: example;"></div>`
    4. M: `<!-- my custom directive: color-list -->`

> `scope`: allows us to `isolate the scope` of the directive from the rest of the page.

* by default, scope follows the parent controller's scope in the scope tree.
* The scope property can be `true`, an `object` or a `falsy value`:
    1. __true__: A new child scope that prototypically inherits from its parent will be created for the directive's element.
    2. __false__: No scope will be created for the directive.
    3. __{...} (an object hash)__: A new "isolate" scope is created for the directive's element.
* _keys in the object hash map to the name of the property on the isolate scope._
* _Values in the object hash define how the property is bound to the parent scope, via matching attributes (@,=,&) on the directive's element._
* scope configuration in directives allows us to pass data to be rendered as a parameter.
    1. `@` or `@attr`: pass data as a string.
    2. `=` or `=attr`: bidirectional relationship between the controller's scope property and local scope directive property.
    3. `&` or `&attr`: binds the parameter with an expression in the content of the parent scope (also called as Parent execution binding).
    4. `<` or `<attr`: set up a one-way (one-directional) binding between a local scope property and an expression passed via the attribute attr.

> `link`: The link function is responsible for registering DOM listeners as well as updating the DOM.

* This property is used only if the compile property is not defined.
* The link function will be run as soon as the directive is linked to the DOM.

```
link: function (scope, element, attrs, controllers, transcludeFn){ }
```

> `compile`: The compile function deals with transforming the template DOM.

```
function compile(tElement, tAttrs, transclude) { ... }
```
* `Element`: The element where the directive has been declared
* `Attrs`: Normalized list of attributes declared on this element shared between all directive compile functions.
* `transclude`: While it's this function is deprecated, use the transclude function that is passed to the link function instead.
* The compile function cannot handle directives that recursively use themselves in their own templates or compile functions.







