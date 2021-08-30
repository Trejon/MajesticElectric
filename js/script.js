$(document).ready(function() {

    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    });


    let typed = new Typed(".typed", {
        strings: ['Assisting with all electrical needs', 'both commercial and residential'],
        // strings: ['Assisting with all electrical needs, both commercial and residential.'],
        typeSpeed: 50,
        loop: true,
        startDelay: 1000,
        showCursor: false
    })





    // $(".owl-carousel").owlCarousel({
    //     loop: true,
    //     items: 4,
    //     autoplay: true,
    //     autoplayTimeout: 2e3,
    //     autoplayHoverPause: false,
    //     responsive: {
    //         0: { items: 1 },
    //         480: { items: 3 },
    //         768: { items: 5 },
    //         938: { items: 6 }
    //     }
    // });


    $('.owl-carousel').owlCarousel({
        items: 2,
        loop: true,
        margin: 50,
        nav: true,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplaySpeed: 1000,
        autoplayHoverPause: true
    });
    $('.play').on('click', function() {
        owl.trigger('play.owl.autoplay', [1000])
    })
    $('.stop').on('click', function() {
        owl.trigger('stop.owl.autoplay')
    })



})