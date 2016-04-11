(function() {
    'use strict';

    angular
        .module('jmwwApp')
        .directive('jmwwGallery', jmwwGallery);

    function jmwwGallery() {
        var directive = {
            restrict: 'EA',
            scope: {},
            controller: 'GalleryController',
            controllerAs: 'vm',
            templateUrl: 'app/gallery/gallery.html'
        };
        return directive;
    }
})();