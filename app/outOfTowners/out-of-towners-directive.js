angular.module('myApp').directive('outOfTowners', function() {
    return {
        restrict: "E",
        replace: true,
        scope: {},
        controller: 'OutOfTownersCtrl',
        templateUrl: 'app/outOfTowners/out-of-towners.html'
    };
});