angular.module('myApp').directive('theWedding', function() {
    "use strict";

    return {
        restrict: "E",
        replace: true,
        scope: {},
        templateUrl: 'app/theWedding/the-wedding.html'
    };
});