// $('.owl-carousel').owlCarousel({
//     loop: true,
//     margin: 20,
//     dots: false,
//     navigation: false,
//     nav: false,
//     autoplayTimeout: 3000,
//     autoplay: true,
//     responsive: {
//         0: {
//             items: 1
//         },
//         600: {
//             items: 2
//         },
//         1000: {
//             items: 3
//         }
//     }
// })  Para que desaparezcan los puntos y las fechitas del carrousel

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    //default settings:
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
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