! function (e) {
    "use strict";

    // function a() {
    //     var a = e(".portfolio-grid");
    //     if (a) {
    //         a.isotope({
    //             layoutMode: "masonry",
    //             itemSelector: "figure"
    //         });
    //         var t = e(".portfolio-filters"),
    //             o = t.find("a.filter");
    //         o.click(function () {
    //             var t = e(this);
    //             if (t.parent().hasClass("active")) return !1;
    //             o.parent().removeClass("active"), e(this).parent().addClass("active");
    //             var i = e(this).attr("data-filter");
    //             return a.isotope({
    //                 filter: i
    //             }), !1
    //         })
    //     }
    // }

    function a() {
        var portfolio_grid = e(".portfolio-grid");
        var blog_grid = e(".blog-grid");
        if (portfolio_grid && blog_grid) {
            portfolio_grid.isotope({
                layoutMode: "masonry",
                itemSelector: "figure"
            });
            blog_grid.isotope({
                layoutMode: "masonry",
                itemSelector: "figure"
            });
            var t = e(".portfolio-filters"),
                b = e(".blog-filters"),
                o = t.find("a.filter"),
                b_o = b.find("a.blog-filter");
            o.click(function () {
                var t = e(this);
                if (t.parent().hasClass("active")) return !1;
                o.parent().removeClass("active"), e(this).parent().addClass("active");
                var i = e(this).attr("data-filter");
                return portfolio_grid.isotope({
                    filter: i
                }), !1
            });
            b_o.click(function () {
                var t = e(this);
                if (t.parent().hasClass("active")) return !1;
                b_o.parent().removeClass("active"), e(this).parent().addClass("active");
                var i = e(this).attr("data-filter");
                return blog_grid.isotope({
                    filter: i
                }), !1
            });
        }
    }


    function t() {
        var a = e(window).width(),
            t = e("#site_header");
        1025 > a ? (t.addClass("mobile-menu-hide"), e(".menu-toggle").removeClass("open"), setTimeout(function () {
            t.addClass("animate")
        }, 500)) : t.removeClass("animate")
    }
    e(function () {
        e("#contact_form").validator(), e("#contact_form").on("submit", function (a) {
            if (!a.isDefaultPrevented()) {
                var t = "contact_form/contact_form.php";
                return e.ajax({
                    type: "POST",
                    url: t,
                    data: e(this).serialize(),
                    success: function (a) {
                        var t = "alert-" + a.type,
                            o = a.message,
                            i = '<div class="alert ' + t + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + o + "</div>";
                        t && o && (e("#contact_form").find(".messages").html(i), e("#contact_form")[0].reset())
                    }
                }), !1
            }
        })
    }), e(window).on("load", function () {
        e(".preloader").fadeOut(800, "linear");
        var a = e(".animated-sections");
        a[0] && PageTransitions.init({
            menu: "ul.main-menu"
        })
    }).on("resize", function () {
        t()
    }), e(document).ready(function () {
        var o = 20,
            i = o / e(document).height(),
            n = o / e(document).width();
        e("body").on("mousemove", function (a) {
            var t = a.pageX - e(document).width() / 2,
                o = a.pageY - e(document).height() / 2,
                s = n * t * -1,
                m = i * o * -1,
                c = e(".lm-animated-bg");
            c.addClass("transition"), c.css({
                "background-position": "calc( 50% + " + s + "px ) calc( 50% + " + m + "px )"
            }), setTimeout(function () {
                c.removeClass("transition")
            }, 300)
        }), e(".menu-toggle").on("click", function () {
            e("#site_header").addClass("animate"), e("#site_header").toggleClass("mobile-menu-hide"), e(".menu-toggle").toggleClass("open")
        }), e(".main-menu").on("click", "a", function (e) {
            t()
        }), e(".sidebar-toggle").on("click", function () {
            e("#blog-sidebar").toggleClass("open")
        });
        var s = e(".portfolio-grid");
        s.imagesLoaded(function () {
            a(this)
        });
        var m = e(".blog-masonry");
        if (m.imagesLoaded(function () {
                m.isotope({
                    layoutMode: "masonry",
                    itemSelector: ".item"
                });
                var a = e(".blog-filters"),
                    t = a.find("a.filter");
                t.click(function () {
                    var a = e(this);
                    if (a.parent().hasClass("active")) return !1;
                    t.parent().removeClass("active"), e(this).parent().addClass("active");
                    var o = e(this).attr("data-filter");
                    return m.isotope({
                        filter: o
                    }), !1
                })
            }), e(".text-rotation").owlCarousel({
                loop: !0,
                dots: !1,
                nav: !1,
                margin: 0,
                items: 1,
                autoplay: !0,
                autoplayHoverPause: !1,
                autoplayTimeout: 3800,
                animateOut: "animated-section-scaleDown",
                animateIn: "animated-section-scaleUp"
            }), e(".testimonials.owl-carousel").owlCarousel({
                nav: !0,
                items: 3,
                loop: !1,
                navText: !1,
                autoHeight: !0,
                margin: 25,
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    1200: {
                        items: 2
                    }
                }
            }), e(".clients.owl-carousel").imagesLoaded().owlCarousel({
                nav: !0,
                items: 2,
                loop: !1,
                navText: !1,
                margin: 10,
                autoHeight: !0,
                responsive: {
                    0: {
                        items: 2
                    },
                    768: {
                        items: 4
                    },
                    1200: {
                        items: 5
                    }
                }
            }), e(".form-control").val("").on("focusin", function () {
                e(this).parent(".form-group").addClass("form-group-focus")
            }).on("focusout", function () {
                0 === e(this).val().length && e(this).parent(".form-group").removeClass("form-group-focus")
            }), e("body").magnificPopup({
                delegate: "a.lightbox",
                type: "image",
                removalDelay: 300,
                mainClass: "mfp-fade",
                image: {
                    titleSrc: "title",
                    gallery: {
                        enabled: !0
                    }
                },
                iframe: {
                    markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe><div class="mfp-title mfp-bottom-iframe-title"></div></div>',
                    patterns: {
                        youtube: {
                            index: "youtube.com/",
                            id: null,
                            src: "%id%?autoplay=1"
                        },
                        vimeo: {
                            index: "vimeo.com/",
                            id: "/",
                            src: "//player.vimeo.com/video/%id%?autoplay=1"
                        },
                        gmaps: {
                            index: "//maps.google.",
                            src: "%id%&output=embed"
                        }
                    },
                    srcAction: "iframe_src"
                },
                callbacks: {
                    markupParse: function (e, a, t) {
                        a.title = t.el.attr("title")
                    }
                }
            }), e(".lmpixels-map")[0]) {
            var r = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6315816.202029036!2d-1.0304247343750008!3d39.381261739961204!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f6698d30d151%3A0x403d278a576e680!2zTcOhbGFnYQ!5e0!3m2!1sen!2ses!4v1672115012930!5m2!1sen!2ses";
            e(".lmpixels-map iframe").attr("src", r)
        }
        e(".messages").on("click", ".close", function () {
            e(this).parent().remove()
        })
    })
}(jQuery);