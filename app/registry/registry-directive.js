angular.module('myApp').directive('registry', function() {
    return {
        restrict: "E",
        replace: true,
        scope: {},
        templateUrl: 'app/registry/registry.html'
    };
});