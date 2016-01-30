angular.module('myApp').controller('OutOfTownersCtrl', ['$scope',
    function($scope) {
        $scope.airports = [
            {
                name: "Eugene Airport (EUG)",
                website: "http://flyeug.com",
                distance: "18.7 miles | 30 minute drive",
                directions: "https://goo.gl/maps/64eaLhiKo3K2"
            }, {
                name: "Portland International Airport (PDX)",
                website: "http://flypdx.com/pdx",
                distance: "126 miles | 2 hour 10 minute drive",
                directions: "https://goo.gl/maps/3cwAqGRxcZ42"
            }
        ];

        $scope.hotels = [
            {
                name: "Valley River Inn",
                address: "1000 Valley River Way, Eugene, OR 97401",
                phone: "(541) 743-1000 or (800) 543-8266",
                website: "http://www.valleyriverinn.com",
                distance: "10.3 miles | 16 minute drive",
                directions: "https://goo.gl/maps/GRvgYMm2bQ82",
                roomInformation: "Deluxe room for $259",
                dates: "Wednesday, Sept 21 - Monday, Sept 26",
                bookingInstructions: "Call to reserve.",
                bookingNotes: "Mention \"Megan Coble Wedding Guest Rooms\" to get the reduced rates. Book by Monday, August 22."
            }, {
                name: "Comfort Suites (in Creswell)",
                address: "247 Melton Rd, Creswell, OR 97426",
                phone: "(541) 895-4025 or (541) 895-4081",
                website: "https://www.choicehotels.com/oregon/creswell/comfort-inn-hotels/or203",
                distance: "9.7 miles | 12 min drive",
                directions: "https://goo.gl/maps/4zWd3kkUf7D2",
                roomInformation: "King Bed for $139, Two Queens for $159",
                dates: "Friday, Sept 23 - Sunday, Sept 25",
                bookingInstructions: "Call to reserve.",
                bookingNotes: "Mention \"Weiler-Coble Wedding Party\" to get the reduced rates. Book by Friday, September 16."
            }
        ];

        $scope.foodCategories = [
            {
                category: "Breakfast",
                venues: [
                    { name: "Off the Waffle", cost: "$" },
                    { name: "New Day Bakery", cost: "$" },
                    { name: "Morning Glory (Vegetarian)", cost: "$$" },
                    { name: "Agate Alley Bistro", cost: "$$" },
                    { name: "Voodoo Doughnuts", cost: "$" }
                ]
            }, {
                category: "Lunch",
                venues: [
                    { name: "Bon Mi", cost: "$" },
                    { name: "Laughing Planet", cost: "$" },
                    { name: "Falling Sky Delicatessen", cost: "$$" },
                    { name: "Bier Stein", cost: "$$" },
                    { name: "Cornucopia", cost: "$$" },
                    { name: "Mucho Gusto", cost: "$" }
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
                    { name: "Marche", cost: "$$$" }
                ]
            }, {
                category: "Drinks/Dessert",
                venues: [
                    { name: "Bier Stein", cost: "$$" },
                    { name: "Izakaya Meiji", cost: "$$" },
                    { name: "Ninkasi", cost: "$" },
                    { name: "Oakshire", cost: "$" },
                    { name: "Rye", cost: "$$" },
                    { name: "Sweet Life Patisserie", cost: "$" }
                ]
            }
        ];

        $scope.exploreIdeas = [
            {
                idea: "Go on a Hike",
                info: "Spencer's Butte, Mt Pisgah, Hobbit Trail"
            }, {
                idea: "Go Wine Tasting",
                info: "Sarver, Noble, Sweet Cheeks, & more"
            }, {
                idea: "Visit Covered Bridges",
                info: "19 are located in our county"
            }, {
                idea: "Visit the Coast",
                info: "Florence, Newport, Thor's Well"
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