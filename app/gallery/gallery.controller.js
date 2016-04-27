(function() {
    'use strict';

    angular
        .module('jmwwApp')
        .controller('GalleryController', GalleryController);

    function GalleryController() {
        var vm = this;

        vm.photos = [
            { src: 'img/IMG_2631sc.jpg', alt: 'Cannon Beach' },
            { src: 'img/IMG_0485s.jpg', alt: 'Christmas Time' },
            { src: 'img/IMG_1748sc.jpg', alt: 'Skiing' },
            { src: 'img/IMG_2983sc.jpg', alt: 'Crater Lake' },
            { src: 'img/IMG_3011s.jpg', alt: 'San Francisco' },
            { src: 'img/IMG_3192sc.jpg', alt: 'Ducks Football' },
            { src: 'img/IMG_3458s.jpg', alt: 'Yosemite Hiking' },
            { src: 'img/IMG_3681sc.jpg', alt: 'Snow Shoeing' },
            { src: 'img/IMG_3717s.jpg', alt: 'Yosemite Glacier Point' },
            { src: 'img/IMG_4735s.jpg', alt: 'Mt Pisgah Hiking' },
            { src: 'img/IMG_6401s.jpg', alt: 'Hobbit Trail Hiking' },
            { src: 'img/IMG_6751s.jpg', alt: 'Pumpkin Patch' },
            { src: 'img/IMG_8319s.jpg', alt: 'Zadar, Croatia' },
            { src: 'img/IMG_9139s.jpg', alt: 'Venice, Italy' },
            { src: 'img/IMG_9180s.jpg', alt: 'Venice Gondolas' },
            { src: 'img/IMG_9762s.jpg', alt: 'Crater Lake Hiking' },
            { src: 'img/20150321_094021sc.jpg', alt: 'Dubrovnik, Croatia' },
            { src: 'img/20150324_135955sc.jpg', alt: 'Plitvice, Croatia' },
            { src: 'img/pumpkin.jpg', alt: 'Pumpkin Patch Engagement' }
        ];
    }
})();