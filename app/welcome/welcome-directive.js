angular.module('myApp').directive('welcome', function() {
    return {
        restrict: "E",
        replace: true,
        scope: {},
        templateUrl: 'app/welcome/welcome.html'
    };
});