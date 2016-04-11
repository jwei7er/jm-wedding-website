angular.module('myApp').directive('ourStory', function() {
    "use strict";

    return {
        restrict: "E",
        replace: true,
        scope: {},
        controller: 'OurStoryCtrl',
        templateUrl: 'app/ourStory/our-story.html'
    };
});