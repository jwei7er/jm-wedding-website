(function() {
    'use strict';

    angular
        .module('jmwwApp')
        .controller('RsvpController', RsvpController);

    RsvpController.$inject = ['rsvpService'];

    function RsvpController(rsvpService) {
        var vm = this;

        vm.sentRsvp = false;

        vm.submit = function() {
            vm.invalidMsg = "";
            vm.successMsg = "";

            if (vm.sentRsvp) {
                vm.invalidMsg = "You've already sent in your RSVP. If you need to submit another, please refresh the page.";
                return;
            } else if (!vm.name || !vm.reply) {
                vm.invalidMsg = "Name and response are required.";
                return;
            }

            var payload = {
                name: vm.name,
                rsvp: vm.reply,
                email: vm.email,
                food: vm.foodRestrictions,
                music: vm.musicRequest
            };

            rsvpService.sendRsvp(payload)
                .then(function() {
                    vm.sentRsvp = true;
                    vm.successMsg = "Thank you for submitting your RSVP!";
                }).catch(function() {
                    vm.invalidMsg = "There was a problem sending your RSVP. Please try again.";
                });
        };
    }
})();