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


// $(document).ready(function() {

//     var news = $(".weekly-tabs-main").li;
//     //news[i].removeClass('active')



//     $(".weekly-tabs-main").click(function(e) {
//         tabcontent = $("tabs");
//         for (i = 0; i < tabcontent.length; i++) {
//             tabcontent[i].addClass('hover:effect');
//             tabcontent[i].addClass('font-color');
//             tabcontent[i].removeClass('active');
//         }
//         var tabs = e.target.innerText;
//         tabs = tabs.toLowerCase();
//         $('.' + tabs).fadeIn("slow");
//         $(e.target).addClass('active');
//         $(e.target).removeClass('hover:effect');
//         $(e.target).removeClass('font-color');
//         //news[0].removeClass('active')
//     });



// });



function openTab(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    tavitems = document.getElementsByClassName(cityName);
    for (i = 0; i < tavitems.length; i++) {
        tavitems[i].style.display = "block";
    }
    evt.currentTarget.className += " active";

}