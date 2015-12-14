angular.module('myApp').directive('theWedding', function() {
    return {
        restrict: "E",
        replace: true,
        scope: {},
        templateUrl: 'app/theWedding/the-wedding.html'
    };
});