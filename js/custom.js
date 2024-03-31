
$(document).ready(function () {
    $("#test").owlCarousel({
        items: 1,
    });
    var owl = $('#test');
    owl.owlCarousel();
    // Listen to owl events:
    owl.on('changed.owl.carousel', function (event) {
    new WOW().init(); 
})
$("#test2").owlCarousel({
    items: 4,
    margin: 30,
    dots: false,
    nav: true,
});
$("#test3").owlCarousel({
    items: 3,
    dots: false,
    nav: false,
});
$("#test4").owlCarousel({
    items: 6,
    dots: false,
    nav: true,
});
new WOW().init();
});
