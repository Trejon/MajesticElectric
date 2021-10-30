$(window).on("load", function() {
    $(".loader .inner").fadeOut(400, function() {
        $(".loader").fadeOut(650);
    });

    $(".items").isotope({
        filter: "*",
        animationOptions: {
            duration: 1500,
            easing: "linear",
            queue: false,
        },
    });
});

$(document).ready(function() {
    $("#slides").superslides({
        animation: "fade",
        play: 5000,
        pagination: false,
    });

    let typed = new Typed(".typed", {
        strings: [
            "Assisting with all electrical needs",
            "both commercial and residential",
        ],
        // strings: ['Assisting with all electrical needs, both commercial and residential.'],
        typeSpeed: 50,
        loop: true,
        startDelay: 1000,
        showCursor: false,
    });

    // let images = new Array(
    //     "../img/kitchen_light1-min.jpg",
    //     "../img/kitchen_light2-min.jpg",
    //     "../img/kitchen_light3-min.jpg",
    //     "../img/kitchen_light4-min.jpg"
    // );
    // let nextimage = 0;

    // function doSlideShow() {
    //     if (nextimage >= images.length) {
    //         nextimage = 0;
    //     }
    //     $(".backdrop")
    //         .css("background", 'url("' + images[nextimage++] + '")')
    //         .fadeIn(500, function() {
    //             setTimeout(doSlideShow, 1000);
    //         });
    // }

    // doSlideShow();

    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        // nav: true,
        center: true,
        // autoWidth: true,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplaySpeed: 1000,
        autoplayHoverPause: true,
    });
    $(".play").on("click", function() {
        owl.trigger("play.owl.autoplay", [1000]);
    });
    $(".stop").on("click", function() {
        owl.trigger("stop.owl.autoplay");
    });

    $("#filters a").click(function() {
        $("#filters .current").removeClass("current");
        $(this).addClass("current");

        const selector = $(this).attr("data-filter");

        $(".items").isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: "linear",
                queue: false,
            },
        });
        return false;
    });

    $("#navigation li a").click(function(e) {
        e.preventDefault();

        let targetElement = $(this).attr("href");
        let targetPosition = $(targetElement).offset().top;
        $("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");
    });

    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation() {
        const body = $("body");

        if ($(window).scrollTop() >= navTop) {
            body.css("padding-top", nav.outerHeight() + "px");
            body.addClass("fixedNav");
        } else {
            body.css("padding-top", 0);
            body.removeClass("fixedNav");
        }
    }
});

const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery img");
const original = document.querySelector(".full-img");
const caption = document.querySelector(".caption");

previews.forEach((preview) => {
    preview.addEventListener("click", () => {
        modal.classList.add("open");
        original.classList.add("open");
        //Dynamic change text and image
        const originalSource = preview.getAttribute("data-original");
        // original.src = `./full/${originalSource}`;
        original.src = originalSource;
        // const altText = preview.alt;
        // caption.textContent = altText;
    });
});

modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
        modal.classList.remove("open");
        original.classList.remove("open");
    }
});