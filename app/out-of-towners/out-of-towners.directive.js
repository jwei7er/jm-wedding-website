(function() {
    'use strict';

    angular
        .module('jmwwApp')
        .directive('jmwwOutOfTowners', jmwwOutOfTowners);

    function jmwwOutOfTowners() {
        var directive = {
            restrict: 'EA',
            scope: {},
            controller: 'OutOfTownersController',
            controllerAs: 'vm',
            templateUrl: 'app/out-of-towners/out-of-towners.html'
        };
        return directive;
    }
})();