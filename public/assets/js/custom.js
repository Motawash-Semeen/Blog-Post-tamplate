$(document).ready(function() {
    $(".dropservice").click(function() {
        $(".service-child").slideToggle("slow");
    });
});


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
    },

});



$(document).ready(function() {
    $('.topicSlider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});