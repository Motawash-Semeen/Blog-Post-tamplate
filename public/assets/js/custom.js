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