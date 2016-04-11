angular.module('jmwwApp').directive('outOfTowners', function() {
    "use strict";

    return {
        restrict: "E",
        replace: true,
        scope: {},
        controller: 'OutOfTownersCtrl',
        templateUrl: 'app/outOfTowners/out-of-towners.html'
    };
});