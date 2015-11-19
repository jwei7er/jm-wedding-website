angular.module('myApp').directive('theWedding', function() {
    return {
        restrict: "E",
        replace: true,
        scope: {},
        controller: 'TheWeddingCtrl',
        templateUrl: 'app/theWedding/the-wedding.html'
    };
});