angular.module('jmwwApp').directive('registry', function() {
    "use strict";

    return {
        restrict: "E",
        replace: true,
        scope: {},
        templateUrl: 'app/registry/registry.html'
    };
});