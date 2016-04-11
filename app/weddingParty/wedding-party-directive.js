angular.module('myApp').directive('weddingParty', function() {
    "use strict";

    return {
        restrict: "E",
        replace: true,
        scope: {},
        controller: 'WeddingPartyCtrl',
        templateUrl: 'app/weddingParty/wedding-party.html'
    };
});