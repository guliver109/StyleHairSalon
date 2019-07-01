// main jQuery support for app

// Initialize Animate on Scroll
AOS.init({
    duration: 800,
    easing: 'slide'
});

(function ($) {
    'use strict';

    // parallax Scrolling effects
    $(window).stellar({
        responsive: true,
        scrollProperty: 'scroll',
        horizontalScrolling: false,
        horizontalOffset: 0,
        verticalOffset: 0,
        parallaxBackgrounds: true,
        parallaxElements: true,
        hideDistantElements: false
    });

    // parallax scrolling effect plugin
    $.Scrollax();

    var fullHeight = function () {
        $('.js-fullheight').css('height', $(window).height());
        $(window).resize(function () {
            $('.js-fullheight').css('height', $(window).height());
        });
    }
    fullHeight();

    // for loader
    var loader = function () {
        setTimeout(function () {
            if ($('#ftco-loader').length > 0) {
                $('#ftco-loader').removeClass('show');
            }
        }, 1);
    }
    loader();

    // parallax scrolling effect plugin
    $.Scrollax();

    // navbar menu toggle
    $('nav .dropdown').hover(function () {
        // var $this = $(this);
        // timer;
        // clearTimeout(timer);
        $(this).addClass('show');
        $(this).find('> a').attr('aria-expended', true);
        // $(this).find('.dropdown-menu').addClass('animated-fast fadeInUp show');
        $(this).find('.dropdown-menu').addClass('show');
    }, function () {
        // timer;
        // timer = setTimeout(function(){
        $(this).removeClass('show');
        $(this).find('> a').attr('aria-expanded', false);
        // $(this).find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
        $(this).find('.dropdown-menu').removeClass('show');
        // }, 100);
    });

    $('#dropdown04').on('show.bs.dropdown', function () {
        console.log('show');
    });

    // $('.navbar-toggler').click(function () {
    //     $('.collapse').toggle();

    // });

    // Carousel
    var carousel = function () {
        $('.home-slider').owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            margin: 0,
            nav: false,
            navText: ["<span class='ion-md-arrow-back></span>", "<span class='ion-chevron-right'></span>"],
            autoplayHoverPause: false,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            rensponsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 1,
                    nav: false
                },
                1000: {
                    items: 1,
                    nav: false
                }
            }
        });
        $('.carousel-work').owlCarousel({
            autoplay: true,
            loop: true,
            items: 1,
            nav: true,
            navText: ["<span class='ion-md-arrow-back></span>", "<span class='ion-chevron-right'></span>"],
            stagePadding: 0,
            center: true,
            margin: 30,
            responsive: {
                0: {
                    items: 1,
                    stagePadding: 0
                },
                600: {
                    items: 3,
                    stagePadding: 50
                },
                1000: {
                    items: 3,
                    stagePadding: 100
                }
            }
        });
    };
    carousel();

}(jQuery));

// scroll navbar feature(shownig navbar when scroll down)
var scrollWindow = function () {
    $(window).scroll(function () {
        var $th = $(this),
            scTop = $th.scrollTop(),
            nav = $('.ftco_navbar'),
            scrollWrap = $('.js-scroll-wrap');

        if (scTop > 150) {
            if (!nav.hasClass('scrolled')) {
                nav.addClass('scrolled');
                // console.log('scrolled');
            }
        }
        if (scTop < 150) {
            if (nav.hasClass('scrolled')) {
                nav.removeClass('scrolled sleep');
            }
        }
        if (scTop > 350) {
            if (!nav.hasClass('awake')) {
                nav.addClass('awake');
            }
            if (scrollWrap.length > 0) {
                scrollWrap.addClass('sleep');
            }
        }
        if (scTop < 350) {
            if (nav.hasClass('awake')) {
                nav.removeClass('awake');
                nav.addClass('sleep');
            }
            if (scrollWrap > 0) {
                scrollWrap.removeClass('sleep');
            }
        }
    })
}
scrollWindow();

var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

// counter for features
// var counter = function() {

//     $('#section-counter').waypoint( function( direction ) {

//         if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

//             var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
//             $('.number').each(function(){
//                 var $this = $(this),
//                     num = $this.data('number');
//                     console.log(num);
//                 $this.animateNumber(
//                   {
//                     number: num,
//                     numberStep: comma_separator_number_step
//                   }, 7000
//                 );
//             });

//         }

//     } , { offset: '95%' } );

// }
// counter();

// scroll animation feature
var contentWayPoint = function () {
    var i = 0;
    $('.ftco-animate').waypoint(function (direction) {
        if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
            i++;
            $(this.element).addClass('item-animate');
            setTimeout(function () {
                $('body .ftco-animate.item-animate').each(function (k) {
                    var el = $(this);
                    setTimeout(function () {
                        var effect = el.data('animate-effect');
                        if (effect === 'fadeIn') {
                            el.addClass('fadeIn ftco-animated');
                        } else if (effect === 'fadeInLeft') {
                            el.addClass('fadeInLeft ftco-animated');
                        } else if (effect === 'fadeInRight') {
                            el.addClass('fadeInRight ftco-animated');
                        } else {
                            el.addClass('fadeInUp ftco-animated');
                        }
                        el.removeClass('item-animate');
                    }, k * 50, 'easeInOutExpo');
                });
            }, 100);
        }
    }, { offset: '95%' });
};
contentWayPoint();