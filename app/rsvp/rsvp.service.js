(function() {
    'use strict';

    angular
        .module('jmwwApp')
        .factory('rsvpService', rsvpService);

    rsvpService.$inject = ['$http', '$q'];

    function rsvpService($http, $q) {
        var service = {
            sendRsvp: sendRsvp
        };

        return service;

        function sendRsvp(payload) {
            var config = {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            };
            return $http.post('./scripts/phpmailer.php', payload, config)
                .then(sendRsvpComplete)
                .catch(sendRsvpFailed);

            function sendRsvpComplete(response) {
                return $q.resolve(response);
            }

            function sendRsvpFailed(error) {
                return $q.reject(error);
            }
        }
    }
})();