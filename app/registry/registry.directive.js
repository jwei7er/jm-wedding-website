(function() {
    'use strict';

    angular
        .module('jmwwApp')
        .directive('jmwwRegistry', jmwwRegistry);

    function jmwwRegistry() {
        var directive = {
            restrict: 'EA',
            scope: {},
            templateUrl: 'app/registry/registry.html'
        };
        return directive;
    }
})();