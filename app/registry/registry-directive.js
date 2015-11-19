angular.module('myApp').directive('registry', function() {
    return {
        restrict: "E",
        replace: true,
        scope: {},
        controller: 'RegistryCtrl',
        templateUrl: 'app/registry/registry.html'
    };
});