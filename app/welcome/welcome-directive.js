angular.module('jmwwApp').directive('welcome', function() {
    "use strict";

    return {
        restrict: "E",
        replace: true,
        scope: {},
        templateUrl: 'app/welcome/welcome.html'
    };
});