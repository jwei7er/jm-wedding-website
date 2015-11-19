angular.module('myApp').controller('RegistryCtrl', ['$scope',
    function($scope) {
        $scope.balls = "basketballs";
        $scope.locations = [
            { name: "Crate and Barrel", url: "http://www.crateandbarrel.com", img: "" },
            { name: "Target", url: "http://www.target.com", img: "" },
            { name: "Amazon", url: "http://www.amazon.com", img: "" },
        ];
    }
]);