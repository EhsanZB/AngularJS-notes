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

