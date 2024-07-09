document.addEventListener('DOMContentLoaded', function() {
    var owlCarousel = $('#owl-carousel');
    owlCarousel.owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        nav: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            320: {
                items: 1
            },
            576: {
                items: 3
            },
            768: {
                items: 4
            },
            1024:{
                items:6
            }
          
        }
    });
});