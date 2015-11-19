angular.module('myApp').directive('rsvp', function() {
    return {
        restrict: "E",
        replace: true,
        scope: {},
        controller: 'RSVPCtrl',
        templateUrl: 'app/rsvp/rsvp.html'
    };
});