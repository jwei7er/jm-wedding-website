angular.module('myApp').directive('gallery', function() {
    return {
        restrict: "E",
        replace: true,
        scope: {},
        controller: 'GalleryCtrl',
        templateUrl: 'app/gallery/gallery.html'
    };
});