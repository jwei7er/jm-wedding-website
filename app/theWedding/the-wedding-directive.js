angular.module('jmwwApp').directive('theWedding', function() {
    "use strict";

    return {
        restrict: "E",
        replace: true,
        scope: {},
        templateUrl: 'app/theWedding/the-wedding.html'
    };
});