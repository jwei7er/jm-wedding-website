angular.module('myApp').directive('rsvp', function() {
    "use strict";

    return {
        restrict: "E",
        replace: true,
        scope: {},
        templateUrl: 'app/rsvp/rsvp.html'
    };
});