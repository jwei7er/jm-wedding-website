angular.module('myApp').directive('weddingParty', function() {
    return {
        restrict: "E",
        replace: true,
        scope: {},
        controller: 'WeddingPartyCtrl',
        templateUrl: 'app/weddingParty/wedding-party.html'
    };
});