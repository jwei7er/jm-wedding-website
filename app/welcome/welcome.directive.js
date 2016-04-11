(function() {
    'use strict';

    angular
        .module('jmwwApp')
        .directive('jmwwWelcome', jmwwWelcome);

    function jmwwWelcome() {
        var directive = {
            restrict: 'EA',
            scope: {},
            templateUrl: 'app/welcome/welcome.html'
        };
        return directive;
    }
})();