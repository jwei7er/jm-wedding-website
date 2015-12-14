angular.module('myApp').controller('WeddingPartyCtrl', ['$scope',
    function($scope) {
        $scope.bridesmaids = [
            {
                name: "Mallory Queen",
                img: "img/mallory_small.jpg",
                title: "Maid of Honor",
                story: "I feel so lucky to have Mallory as a best friend.  I've know Mal since middle school - she was that friend who always came up with the most fun and creative things to do. Whether we’re roaming a jewelry store or grabbing a bite to eat, the conversations and laughter never seem to end.  I know I can call her at any hour of the day with good or bad news, and she will always be there with support. It seems like for every big life moment, she's been there for me. It only seems right to have her by my side at the next big moment - my wedding day."
            }, {
                name: "Kristy Jensen",
                img: "img/kristy_small.jpg",
                title: "Bridesmaid",
                story: "I met Kristy during my freshman year of college at Washington State University - Go Cougs! We lived together for three years - three different places, countless drives across the pass back home for the holidays, marathons of Friends, dance parties (with terrible dance moves), and cheese pizza with extra cheese.  She knows me so well, and I can't imagine not having her by my side."
            }, {
                name: "Darlene Marsh",
                img: "img/darlene_small.jpg",
                title: "Bridesmaid",
                story: "She may be short, but she is mighty!  I've known Dar since middle school, but we have definitely gotten closer in the past few years.  I can't even count the number of times I've slept on Dar’s couch in Portland.  She's one of those friends that you can go months without talking to, but the next time you see each other it feels like it's only been a week."
            }, {
                name: "Rachel Johnson",
                img: "img/rachel_small.jpg",
                title: "Bridesmaid",
                story: "I met Rachel working at the University of Oregon.  It’s hard meeting people in a new city - Rachel was one of my first friends in town and has helped make Eugene feel like home.  One day at Taco Tuesday we were talking about online dating sites, and Rachel encouraged me to try Match.  Who would have thought that I would end up marrying my first Match date!  She’s one of the most caring people I've met, and I look forward to watching her get married this year too!"
            }
        ];

        $scope.groomsmen = [
            {
                name: "Luke Weiler",
                img: "img/luke_small.jpg",
                title: "Best Man/Brother",
                story: "Luke has known Jordan since the day he was born. Between sharing rooms, sharing toys, and sharing cars, Luke knows Jordan pretty well. Luke joined Jordan for most of the moving trip across the country. Jordan likes to think he planted the idea for Luke to return to grad school."
            }, {
                name: "Blair Shelton",
                img: "img/blair_small.jpg",
                title: "Groomsman",
                story: "Jordan met Blair sometime during freshman year at the University of Arkansas in Pomfret Hall, probably in C wing. They decided to become roommates for their Sophomore year and decided to keep the streak going for their Junior and Senior years as well. Blair gave Jordan an appreciation for racing video games, Taco Bell, fine cars, and Velvetta and Rotel cheese dip. Jordan was there the day Blair met his eventual wife and remembers how he could not stop talking about that cute accent. Between ski trips, Mission Trips, late night Taco Bell trips, and Chick-fil-a runs to the Union, they've taken a lot of trips together. Blair is also a great friend."
            }, {
                name: "Chris Bryan",
                img: "img/chris_small.jpg",
                title: "Groomsman",
                story: "Chris and Jordan first met wayyyyy back in the 4th or 5th or 6th grade. They later became neighbors in Pomfret Hall during freshmen year at the University of Arkansas. Since they both majored in Computer Science, they both spent a lot of time in the classroom together. Chris and Jordan have done a lot of international traveling together going to places like The Czech Republic, Oman, Dubai, Morocco, Spain, France, London, and Edinburgh. Chris planted the idea to quit their jobs and return to grad school."
            }, {
                name: "Jason Drew Hardy",
                img: "img/jason_small.jpg",
                title: "Groomsman",
                story: "Jordan and Jason met back in high school at Southside High. They had A.P. Physics together and later spent a lot of time at the University of Arkansas grabbing at each other's legs all over campus and trying to keep each other awake during class. One time, Jason played the bait to Jordan's Spider-Man and ran through a crowd of sorority sisters so that Jordan could chase him in his lycra superhero costume. Jason helped Jordan get through some of those make-or-break programming classes, and Jordan is forever thankful for that. They also painted up as part of the Razorhogs for 19 straight home football games."
            }
        ];
    }
]);