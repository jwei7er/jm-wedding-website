angular.module('myApp').controller('WeddingPartyCtrl', ['$scope',
    function($scope) {
        $scope.bridesmaids = [
            {
                name: "Mallory Queen",
                img: "img/mallory_small.jpg",
                title: "Maid of Honor",
                story: "Mallory and Megan go waaaaaaaay back in time. Mallory hosted Megan's bar mitzvah."
            }, {
                name: "Kristy Jensen",
                img: "img/kristy_small.jpg",
                title: "Bridesmaid",
                story: "Kristy saved Megan's life by pushing her away from the path of a speeding porsche. Ever since that day, they have
                been besties."
            }, {
                name: "Darlene Marsh",
                img: "img/darlene_small.jpg",
                title: "Bridesmaid",
                story: "Dar and Megan know each other from way back, like high school back."
            }, {
                name: "Rachel Johnson",
                img: "img/rachel_small.jpg",
                title: "Bridesmaid",
                story: "Rachel and Megan met while working at the University of Oregon."
            }
        ];

        $scope.groomsmen = [
            {
                name: "Luke Weiler",
                img: "img/luke_small.jpg",
                title: "Best Brother/Man",
                story: "Luke has known Jordan since the day he was born."
            }, {
                name: "Blair Shelton",
                img: "img/blair_small.jpg",
                title: "Groomsman",
                story: "Jordan met Blair sometime during freshman year at the University of Arkansas in Pomfret Hall. Probably on C wing."
            }, {
                name: "Chris Bryan",
                img: "img/chris_small.jpg",
                title: "Groomsman",
                story: "Chris and Jordan first met wayyyyy back in the 4th or 5th or 6th grade. 
                They later became neighbors during freshmen year at the University of Arkansas (Go Hogs) in Pomfret Hall. Chris and Jordan 
                have done a lot of international traveling together going to places like The Czech Republic, Oman, Dubai, Morocco, Spain, France, London, and Edinburgh."
            }, {
                name: "Jason Drew Hardy",
                img: "img/jason_small.jpg",
                title: "Groomsman",
                story: "Jordan and Jason met back in high school at Southside High. They had A.P. Physics together and later spend a lot of time at
                the University of Arkansas grabbing each other's legs all over campus and trying to keep each other awake during class. One time, Jason
                played the bait to Jordan's Spider-Man and ran through a crowd of sorority sisters so that Jordan could chase him in his lycra superhero 
                costume."
            }
        ];
    }
]);