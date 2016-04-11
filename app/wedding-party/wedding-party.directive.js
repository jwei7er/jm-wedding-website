(function() {
    'use strict';

    angular
        .module('jmwwApp')
        .directive('jmwwWeddingParty', jmwwWeddingParty);

    function jmwwWeddingParty() {
        var directive = {
            restrict: 'EA',
            scope: {},
            controller: 'WeddingPartyController',
            controllerAs: 'vm',
            templateUrl: 'app/wedding-party/wedding-party.html'
        };
        return directive;
    }
})();