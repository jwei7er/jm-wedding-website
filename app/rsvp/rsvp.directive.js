(function() {
    'use strict';

    angular
        .module('jmwwApp')
        .directive('jmwwRsvp', jmwwRsvp);

    function jmwwRsvp() {
        var directive = {
            restrict: 'EA',
            scope: {},
            controller: 'RsvpController',
            controllerAs: 'vm',
            templateUrl: 'app/rsvp/rsvp.html'
        };
        return directive;
    }
})();