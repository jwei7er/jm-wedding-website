(function() {
    'use strict';

    angular
        .module('jmwwApp')
        .directive('jmwwTheWedding', jmwwTheWedding);

    function jmwwTheWedding() {
        var directive = {
            restrict: 'EA',
            scope: {},
            templateUrl: 'app/the-wedding/the-wedding.html'
        };
        return directive;
    }
})();