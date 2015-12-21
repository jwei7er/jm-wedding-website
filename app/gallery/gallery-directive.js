angular.module('myApp').directive('gallery', function() {
    return {
        restrict: "E",
        replace: true,
        scope: {},
        templateUrl: 'app/gallery/gallery.html'
    };
});