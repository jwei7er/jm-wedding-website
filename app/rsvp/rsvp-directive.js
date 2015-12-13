angular.module('myApp').directive('rsvp', function() {
    return {
        restrict: "E",
        replace: true,
        scope: {},
        templateUrl: 'app/rsvp/rsvp.html'
    };
});