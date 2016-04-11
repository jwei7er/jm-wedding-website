angular.module('myApp').directive('gallery', function() {
    "use strict";

    return {
        restrict: "E",
        replace: true,
        scope: {},
        templateUrl: 'app/gallery/gallery.html'
    };
});