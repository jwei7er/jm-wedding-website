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
            vm.errorMsg = "";
            vm.successMsg = "";

            if (vm.sentRsvp) {
                vm.errorMsg = "You've already sent in your RSVP. If you need to submit another, please refresh the page.";
                return;
            } else if (!vm.name || !vm.reply) {
                vm.errorMsg = "Name and response are required.";
                return;
            }

            var payload = {
                name: vm.name,
                rsvp: vm.reply,
                email: vm.email,
                food: vm.foodRestrictions,
                music: vm.musicRequest,
                note: vm.note
            };

            rsvpService.sendRsvp(payload)
                .then(function() {
                    vm.sentRsvp = true;
                    vm.successMsg = "Thank you for submitting your RSVP!";
                }).catch(function() {
                    vm.errorMsg = "There was a problem sending your RSVP. Please try again.";
                });
        };
    }
})();