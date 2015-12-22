angular.module('myApp').controller('WeddingPartyCtrl', ['$scope',
    function($scope) {
        $scope.bridesmaids = [
            {
                name: "Mallory Queen",
                img: "img/mallory-profile.jpg",
                title: "Maid of Honor",
                story: "I feel so lucky to have Mallory as a best friend. I've know Mal since middle school - she was that friend who always came up with the most fun and creative things to do. Whether we’re roaming a jewelry store or grabbing a bite to eat, the conversations and laughter never seem to end. I know I can call her at any hour of the day with good or bad news, and she will always be there with support. It seems like for every big life moment, she's been there for me. It only seems right to have her by my side at the next big moment - my wedding day."
            }, {
                name: "Kristy Jensen",
                img: "img/kristy-profile.jpg",
                title: "Bridesmaid",
                story: "I met Kristy during my freshman year of college at Washington State University - Go Cougs! We lived together for three years - three different places, countless drives across the pass back home for the holidays, marathons of Friends, dance parties (with terrible dance moves), and cheese pizza with extra cheese. She knows me so well, and I can't imagine not having her by my side."
            }, {
                name: "Darlene Marsh",
                img: "img/darlene-profile.jpg",
                title: "Bridesmaid",
                story: "She may be short, but she is mighty! I've known Dar since middle school, but we have definitely gotten closer in the past few years. I can't even count the number of times I've slept on Dar’s couch in Portland. She's one of those friends that you can go months without talking to, but the next time you see each other it feels like it's only been a week."
            }, {
                name: "Rachel Allen",
                img: "img/rachel-profile.jpg",
                title: "Bridesmaid",
                story: "I met Rachel working at the University of Oregon. It’s hard meeting people in a new city - Rachel was one of my first friends in town and has helped make Eugene feel like home. One day at Taco Tuesday we were talking about online dating sites, and Rachel encouraged me to try Match. Who would have thought that I would end up marrying my first Match date! She’s one of the most caring people I've met, and I look forward to watching her get married this year too!"
            }
        ];

        $scope.groomsmen = [
            {
                name: "Luke Weiler",
                img: "img/luke-profile.jpg",
                title: "Best Man/Brother",
                story: "I first met Luke the day I was born. When we were younger, we shared plenty of toys, several bedrooms, and a memorable used station wagon. As we've grown older, we've shared life experiences. Luke was at the UofA during my four years there and he also accompanied me during most of my drive out west to Oregon. I know I can talk to Luke about anything. I'm really proud of him for taking the risk and quitting his job to pursue his Ph.D. at Michigan State University. I can't imagine having anyone else standing next to me as my best man."
            }, {
                name: "Blair Shelton",
                img: "img/blair-profile.jpg",
                title: "Groomsman",
                story: "Blair and I know each other pretty well. We were roommates for three years during our time at the University of Arkansas where we became great friends. I was there the day Blair met his wife, Vanessa, and remember how he would not stop talking about her cute country accent for weeks. Between ski trips, trips to the HPER, spring break trips, late night Taco Bell trips, and trips to the Student Union for Chick-fil-A, we've taken a lot of trips together. Blair gave me an appreciation for car racing video games, late night Taco Bell, sports cars, European techno, wooden spool tables, and Velveeta and Rotel cheese dip."
            }, {
                name: "Chris Bryan",
                img: "img/chris-profile.jpg",
                title: "Groomsman",
                story: "Chris and I first met wayyyyy back in elementary school. We didn't see each other again until our freshmen year at the UofA when we were neighbors in Pomfret Hall. We both majored in Computer Science, so we had most of the same classes together. Since graduating, we've taken several trips together. Whether it is Dallas, St. Louis, the Czech Republic, Oman, Morocco, Spain, France, or London, hanging out with Chris is always fun (except for that one time we almost got thrown off the train in Kutna Hora...). I'm glad that Chris had the idea to quit our jobs, travel overseas, and then go to grad school because it lead me to Oregon."
            }, {
                name: "Jason Hardy",
                img: "img/jason-profile.jpg",
                title: "Groomsman",
                story: "I first met Jason in high school, back when people knew him as Drew. We both ended up going to the University of Arkansas and majoring in Computer Science. Jason definitely helped me during some of those early programming classes, and I am forever thankful for that. One time, Jason ran through a crowd of sorority sisters just so that I could chase him in my lycra Spider-Man costume. We were also part of the \"Razorhogs\" and painted up for 19 straight Razorback football games."
            }
        ];
    }
]);