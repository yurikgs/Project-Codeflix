//olw carousel setup

$(() => {

    //nav icon setup consts
    const prevIcon = '<img src="img/icons/prev-icon.svg" alt:"prev" >';
    const nextIcon = '<img src="img/icons/next-icon.svg" alt:"next" >';

    $('#carousel-small-1').owlCarousel({
        nav: true,
        loop: true,
        margin: 200,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 3500, //dessincronizar carrosséis
        smartSpeed: 800,
        navText: [
            prevIcon,
            nextIcon
        ],
        responsive: {
            0: {
                items: 1
            },
            450: {
                items: 1.9
            },
            637: {
                items: 2.5
            },
            755: {
                items: 3
            },
            1000: {
                items: 4
            },
            1315: {
                items: 5
            }
        }
    })

    $('#carousel-small-2').owlCarousel({
        nav: true,
        loop: true,
        margin: 200,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 3500, //dessincronizar carrosséis
        smartSpeed: 800,
        navText: [
            prevIcon,
            nextIcon
        ],
        responsive: {
            0: {
                items: 1
            },
            450: {
                items: 1.9
            },
            637: {
                items: 2.5
            },
            755: {
                items: 3
            },
            1000: {
                items: 4
            },
            1315: {
                items: 5
            }
        }
    })

    $('#carousel-big-1').owlCarousel({
        nav: false,
        loop: true,
        margin: 250,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 5000, //dessincronizar carrosséis
        smartSpeed: 1800,
        responsive: {
            0: {
                items: 1
            },
            759: {
                items: 2
            },
            1285: {
                items: 2.9
            }
        }
    })
});