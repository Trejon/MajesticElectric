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
})