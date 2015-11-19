angular.module('myApp').directive('registryLocation', function() {
    return {
        restrict: "E",
        replace: true,
        scope: {
            location: "="
        },
        controller: 'RegistryLocationCtrl',
        templateUrl: 'app/registry/registry-location.html'
    };
});