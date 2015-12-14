angular.module('myApp').controller('OutOfTownersCtrl', ['$scope',
    function($scope) {
        $scope.airports = [
            {
                name: "Eugene Airport (EUG)",
                website: "http://flyeug.com",
                distance: "19 miles | 30 minute drive",
                directions: "https://www.google.com/maps/dir/Eugene+Airport,+Douglas+Drive,+Eugene,+OR/Mount+Pisgah+Arboretum,+Frank+Parrish+Road,+Eugene,+OR/@44.0644773,-123.1684852,12z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x54c102dec4db7dd1:0xf6acae00aa866d93!2m2!1d-123.2159003!2d44.1217811!1m5!1m1!1s0x54c0dfeaf5bb2711:0x714799a0f1538344!2m2!1d-122.9807488!2d44.0069736?hl=en"
            }, {
                name: "Portland International Airport (PDX)",
                website: "http://flypdx.com/pdx",
                distance: "126 miles | 2 hours 10 minute drive",
                directions: "https://www.google.com/maps/dir/Portland+International+Airport,+Northeast+Airport+Way,+Portland,+OR/Mount+Pisgah+Arboretum,+Frank+Parrish+Road,+Eugene,+OR/@44.7948083,-123.9311777,8z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x5495a0aa74dc20d1:0x5bda7693380e5c3d!2m2!1d-122.5950942!2d45.5897694!1m5!1m1!1s0x54c0dfeaf5bb2711:0x714799a0f1538344!2m2!1d-122.9807488!2d44.0069736?hl=en"
            }
        ];

        $scope.hotels = [
            {
                name: "Valley River Inn",
                address: "1000 Valley River Way, Eugene, OR 97401",
                phone: "(541) 743-1000",
                website: "http://www.valleyriverinn.com/",
                distance: "10.0 miles from venue"
            }, {
                name: "Hilton Garden Inn",
                address: "3528 Gateway St, Springfield, OR 97477",
                phone: "(541) 736-3000",
                website: "http://hiltongardeninn3.hilton.com/en/hotels/oregon/hilton-garden-inn-eugene-springfield-EUGORGI/index.html",
                distance: "8.4 miles from venue"
            }, {
                name: "Comfort Suites",
                address: "3060 E 25th Ave, Eugene, OR 97403",
                phone: "(541) 343-7000",
                website: "https://www.choicehotels.com/oregon/eugene/comfort-suites-hotels/or163",
                distance: "5.3 miles from venue"
            }, {
                name: "Inn at the 5th",
                address: "205 E 6th Ave, Eugene, OR 97401",
                phone: "(541) 743-4099",
                website: "http://www.innat5th.com/",
                distance: "7.9 miles from venue"
            }, {
                name: "Courtyard Marriott",
                address: "3443 Hutton St, Springfield, OR 97477",
                phone: "(541) 726-2121",
                website: "http://www.marriott.com/hotels/travel/eugcy-courtyard-eugene-springfield/",
                distance: "8.3 miles from venue"
            }
        ];

        $scope.foodCategories = [
            {
                category: "Breakfast",
                venues: [
                    { name: "Off the Waffle", cost: "$" },
                    { name: "New Day Bakery", cost: "$" },
                    { name: "Morning Glory", cost: "$$" },
                    { name: "Agate Alley Bistro", cost: "$$" },
                    { name: "Voodoo Doughnuts", cost: "$" }
                ]
            }, {
                category: "Lunch",
                venues: [
                    { name: "Bahn Mi", cost: "$" },
                    { name: "Laughing Planet", cost: "$" },
                    { name: "Falling Sky Delicatessen", cost: "$$" },
                    { name: "Bier Stein", cost: "$$" },
                    { name: "Cornucopia", cost: "$$" },
                    { name: "Mucho Gusto", cost: "$" },
                ]
            }, {
                category: "Dinner",
                venues: [
                    { name: "Noli", cost: "$$" },
                    { name: "Sabai", cost: "$$" },
                    { name: "Tacovore", cost: "$" },
                    { name: "Pizza Research Institute", cost: "$$" },
                    { name: "Belly Taqueria", cost: "$$" },
                    { name: "Sushi Pure", cost: "$$" },
                    { name: "Marche", cost: "$$$" },
                ]
            }, {
                category: "Drinks/Dessert",
                venues: [
                    { name: "Bier Stein" },
                    { name: "Ninkasi" },
                    { name: "Oakshire" },
                    { name: "Rye" },
                    { name: "Izakaya Meiji" },
                    { name: "Sweet Life Patisserie" },
                ]
            }
        ];

        $scope.exploreIdeas = [
            {
                idea: "Go on a Hike",
                info: "Spencer's Butte, Mt Pisgah, Hobbit Trail"
            }, {
                idea: "Visit Covered Bridges",
                info: "19 are located in our county"
            }, {
                idea: "Visit the Coast",
                info: "Florence, Newport, Thor's Well"
            }, {
                idea: "Go Wine Tasting",
                info: "Sarver, Noble, Sweet Cheeks, & more"
            }, {
                idea: "Visit Portland",
                info: "2 hour drive north"
            },{
                idea: "Visit Crater Lake",
                info: "3 hour drive southeast"
            }
        ];
    }
]);