(function() {
    'use strict';

    angular
        .module('jmwwApp')
        .directive('jmwwOurStory', jmwwOurStory);

    function jmwwOurStory() {
        var directive = {
            restrict: 'EA',
            scope: {},
            controller: 'OurStoryController',
            controllerAs: 'vm',
            templateUrl: 'app/our-story/our-story.html'
        };
        return directive;
    }
})();