$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    navigation: false,
    nav: false,
    autoplayTimeout: 3000,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})