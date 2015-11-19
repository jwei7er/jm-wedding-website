angular.module('myApp').controller('OurStoryCtrl', ['$scope',
    function($scope) {
        $scope.stories = [
            {
                title: "How we met",
                his: "We met on Match.",
                hers: "We asked me if I had committed a felony. I thought that was strange. He was adorably cute though. And he had a ton
                of jumping pictures...my favorite!!"
            }, {
                title: "First date",
                his: "We went to a thai restaurant.",
                hers: "Nobody was there but he was cute so I didn't care."
            }, {
                title: "Proposal",
                his: "I had everything planned.",
                hers: "I had no idea"
            }
        ];
    }
]);