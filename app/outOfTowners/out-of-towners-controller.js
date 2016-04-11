angular.module('myApp').controller('OutOfTownersCtrl', ['$scope',
    function($scope) {
        "use strict";

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
                roomInformation: "15% off normal rates",
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
                    { name: "Off the Waffle", website: "http://offthewaffle.com", cost: "$" },
                    { name: "New Day Bakery", website: "http://newdaybakery.net", cost: "$" },
                    { name: "Morning Glory (Vegetarian)", website: "http://www.morninggloryeugene.com", cost: "$$" },
                    { name: "Agate Alley Bistro", website: "http://www.agatealley.com", cost: "$$" },
                    { name: "Voodoo Doughnuts", website: "http://voodoodoughnut.com", cost: "$" }
                ]
            }, {
                category: "Lunch",
                venues: [
                    { name: "Bon Mi", website: "http://bonmieugene.com", cost: "$" },
                    { name: "Laughing Planet", website: "http://laughingplanetcafe.com/home", cost: "$" },
                    { name: "Falling Sky Delicatessen", website: "https://fallingskybrewing.com/falling-sky-brewing-deli-menu.html", cost: "$$" },
                    { name: "Bier Stein", website: "http://thebierstein.com", cost: "$$" },
                    { name: "Cornucopia", website: "http://www.cornucopiaeugene.com", cost: "$$" },
                    { name: "Mucho Gusto", website: "http://www.westrauntconcepts.com/welcome-mg.html", cost: "$" }
                ]
            }, {
                category: "Dinner",
                venues: [
                    { name: "Noli", website: "http://www.noliitaliancafe.com", cost: "$$" },
                    { name: "Sabai", website: "http://www.sabaicafe.com", cost: "$$" },
                    { name: "Tacovore", website: "http://tacovorepnw.com", cost: "$" },
                    { name: "Pizza Research Institute", website: "http://www.pizzaresearchinstitute.com", cost: "$$" },
                    { name: "Belly Taqueria", website: "http://www.bellytaqueria.com", cost: "$$" },
                    { name: "Sushi Pure", website: "http://www.sushipureeugene.com", cost: "$$" },
                    { name: "Marche", website: "http://marcherestaurant.com", cost: "$$$" }
                ]
            }, {
                category: "Drinks/Dessert",
                venues: [
                    { name: "Bier Stein", website: "http://thebierstein.com", cost: "$$" },
                    { name: "Izakaya Meiji", website: "http://izakayameiji.com", cost: "$$" },
                    { name: "Ninkasi", website: "http://www.ninkasibrewing.com/visit/tasting-room", cost: "$" },
                    { name: "Oakshire", website: "http://oakbrew.com/brewery/public-house", cost: "$" },
                    { name: "Rye", website: "http://ryeon3rd.com", cost: "$$" },
                    { name: "Sweet Life Patisserie", website: "http://sweetlifedesserts.com", cost: "$" }
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