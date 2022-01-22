(function ($) {
    "use strict";

    /*---------------------------
        Achievement slider
    -----------------------------*/

    const achievementSlidr = new Swiper(".achievement-slider", {
        spaceBetween: 30,
        navigation: {
            nextEl: ".achievement-next",
            prevEl: ".achievement-prev"
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });

    /*---------------------------
        Testimonials slider
    -----------------------------*/

    const testimonialSlidr = new Swiper(".testimonials-slider", {
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
            nextEl: ".testimonial-next",
            prevEl: ".testimonial-prev"
        }
    });

    /*---------------------------
        About experience slider
    -----------------------------*/

    const experienceSlidre = new Swiper(".experience-content-slider", {
        observer: true,
        observeParents: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        breakpoints: {
            640: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });

    /*---------------------------
        About education slider
    -----------------------------*/

    const educationSlider = new Swiper(".education-content-slider", {
        observer: true,
        observeParents: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        breakpoints: {
            640: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 30
            }
        }
    });

    /*---------------------------
        Portfolio slider
    -----------------------------*/

    const portfolioSlider = new Swiper(".portfolio-slider", {
        slidesPerView: 1,

        navigation: {
            nextEl: ".portfolio-button-next",
            prevEl: ".portfolio-button-prev"
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction"
        }
    });
    portfolioSlider.on('slideChange', function () {
        new WOW().init();
    });

    /*---------------------------
        Achievement slider
    -----------------------------*/
    const portfolioSliderFullWidth = new Swiper(
        ".portfolio-slider-full-width", {
            allowTouchMove: true,
            preventClicks: true,
            slidesPerView: 4,
            spaceBetween: 30,
            slidesPerGroup: 1,
            grabCursor: true,
            calculateHeight: true,
            simulateTouch: true,
            keyboard: true,
            loop: false,
            loopFillGroupWithBlank: true,
            centeredSlides: false,
            speed: 1000,

            scrollbar: {
                el: '.swiper-scrollbar',
                clickable: true,
                hide: false,
                snapOnRelease: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            breakpoints: {
                1920: {
                    slidesPerView: 3,
                },
                767: {
                    autoHeight: true,
                    spaceBetween: 10,
                    centeredSlides: true,
                    slidesPerView: 1,
                    scrollbar: {
                        el: '.swiper-pagination',
                        clickable: true,
                        hide: true,

                    },

                }
            },
        }
    );

    /*---------------------------
    Fact Counter
    -----------------------------*/
    $(".counter").counter({
        interval: 40
    });

    /*---------------------------
        Animation initial
    -----------------------------*/

    new WOW().init();

    /*---------------------------
        Scroll down script
    -----------------------------*/
    var $root = $("html, body");

    $('.dust-one-page-nav a[href^="#"], .scroll-js-clicker').click(function () {
        $root.animate({
                scrollTop: $($.attr(this, "href")).offset().top
            },
            500
        );

        return false;
    });

    // Navigation hide on scroll on mobile screen
    $(window).on("scroll", function () {
        $(".navbar-collapse").collapse("hide");
    });


    /*---------------------------
        portfolio grid activation
    -----------------------------*/

    $(".portfolio-area").imagesLoaded(function () {
        // Portfolio grid
        const grid = $(".portfolio-grid");
        grid.isotope({
            itemSelector: ".portfolio-item"
        });
        // Portfolio filter
        $(".portfolio-filter li").on("click", function (e) {
            const filterValue = $(this).attr("data-filter");
            grid.isotope({
                filter: filterValue
            });
            e.preventDefault();
        });
    });

    /*---------------------------
        fillter menu active class addition
    -----------------------------*/

    $(".portfolio-filter li").on("click", function (e) {
        $(this)
            .siblings(".active")
            .removeClass("active");
        $(this).addClass("active");
        e.preventDefault();
    });

    /*---------------------------
        Blog post slider
    -----------------------------*/
    const blogPostSlider = new Swiper(".post-slide", {
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".post-button-next",
            prevEl: ".post-button-prev"
        }
    });

    /*---------------------------
        portfolio project slider
    -----------------------------*/
    const portfolioProjectSlider = new Swiper(".portfolio-project-slider", {
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".project-slider-button-next",
            prevEl: ".project-slider-button-prev"
        }
    });

    /* ---------------------------------------------
        Parallax active
    --------------------------------------------- */
    if ($(".scene").length != 0) {
        var scene = $(".scene").get(0);
        var parallaxInstance = new Parallax(scene);
    }

    if ($(".scene-parent").length != 0) {
        var sceneB = $(".scene-parent").get(0);
        var parallaxInstanceB = new Parallax(sceneB, {
            selector: ".layer"
        });
    }
    if ($(".scene-parent-2").length != 0) {
        var sceneC = $(".scene-parent-2").get(0);
        var parallaxInstanceC = new Parallax(sceneC, {
            selector: ".layer"
        });
    }

    const fsMenuWrapper = $('.full-screen-menu-area');
    const fsMenuClose = $('.fs-menu-close');
    const fsMenuBar = $('.fs-menu-bar');
    fsMenuClose.on('click', function (e) {
        fsMenuWrapper.toggleClass('removed');
        fsMenuWrapper.removeClass('active');
        e.preventDefault();

    });
    fsMenuBar.on('click', function (e) {
        fsMenuWrapper.toggleClass('active');
        e.preventDefault();
    });


    /* ---------------------------------------------
           Venobox inite
       --------------------------------------------- */
    $(document).ready(function () {
        $('.venobox').venobox();
    });



    let browserPrefix = '';
    let usrAg = navigator.userAgent;
    if (usrAg.indexOf("Chrome") > -1 || usrAg.indexOf("Safari") > -1) {
        browserPrefix = "-webkit-";
    } else if (usrAg.indexOf("Opera") > -1) {
        browserPrefix = "-o";
    } else if (usrAg.indexOf("Firefox") > -1) {
        browserPrefix = "-moz-";
    } else if (usrAg.indexOf("MSIE") > -1) {
        browserPrefix = "-ms-";
    }

    //TweenLite.defaultEase = Power3.easeInOut;

    const $cursor = jQuery('.marvel-custom-cursor');
    const $cursor__big = jQuery('.cursor__big');
    const $links = jQuery('.full-screen-menu-area a');

    jQuery(window).on('mousemove', function (e) {
        $cursor.css(browserPrefix + 'transform', 'translate(' + e.pageX + 'px, ' + e.pageY + 'px)');
    });

    $links.on('mouseenter', function (e) {
        $cursor__big.css(browserPrefix + 'transform', 'scale(1)');
    });

    $links.on('mouseleave', function (e) {
        $cursor__big.css(browserPrefix + 'transform', 'scale(0)');
    });



})(jQuery);