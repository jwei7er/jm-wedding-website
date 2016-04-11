(function() {
    'use strict';

    angular
        .module('jmwwApp')
        .directive('jmwwGallery', jmwwGallery);

    function jmwwGallery() {
        var directive = {
            restrict: 'EA',
            scope: {},
            templateUrl: 'app/gallery/gallery.html'
        };
        return directive;
    }
})();