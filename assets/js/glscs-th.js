"use strict";
! function(e) {
    var t = {
        init() {
            t.stickyHeader(), t.dropdownAnimation(), t.headerButtons(), t.isotope(), t.onepageHeaderOffset(), t.onepageNavLinks(), t.anchorSmoothScroll(), t.svgInject(), t.backgroundImage(), t.backgroundImageMobile(), t.imageHoverOverlay(), t.rellax(), t.scrollCue(), t.showMoreItems(), t.owlCarousel(), t.heroSlider(), t.animatedCaptions(), t.lightbox(), t.plyr(), t.progressBar(), t.pageProgress(), t.counterUp(), t.bsTooltips(), t.bsPopovers(), t.bsModal(), t.iTooltip(), t.contactForm(), t.pricingSwitcher(), t.textRotator(), t.codeSnippet()
        },
        stickyHeader() {
            e(".navbar").length && new Headhesive(".navbar", {
                offset: 350,
                offsetSide: "top",
                classes: {
                    clone: "banner--clone fixed ",
                    stick: "banner--stick",
                    unstick: "banner--unstick"
                },
                onStick: function() {
                    e(e.SmartMenus.Bootstrap.init), e(".navbar:not(.fixed) .language-select .dropdown-menu").removeClass("show")
                },
                onUnstick: function() {
                    e(".navbar.fixed .language-select .dropdown-menu").removeClass("show")
                }
            })
        },
        dropdownAnimation() {
            e(".navbar .navbar-nav:not(.navbar-nav-other)").bind({
                "show.smapi": function(t, i) {
                    e(i).removeClass("hide-animation").addClass("show-animation")
                },
                "hide.smapi": function(t, i) {
                    e(i).removeClass("show-animation").addClass("hide-animation")
                }
            }).on("animationend webkitAnimationEnd oanimationend MSAnimationEnd", "ul", function(t) {
                e(this).removeClass("show-animation hide-animation"), t.stopPropagation()
            })
        },
        headerButtons() {
            var t = e(".hamburger.animate");
            e(".language-select .dropdown-menu");
            var i = e(".offcanvas-nav"),
                a = e('[data-toggle="offcanvas-nav"]'),
                n = e(".offcanvas-nav-close"),
                o = e(".offcanvas-info"),
                s = e(".offcanvas-info-close"),
                l = e('[data-toggle="offcanvas-info"]');
            t.on("click", function() {
                t.toggleClass("active")
            }), a.on("click", function(e) {
                e.stopPropagation(), i.toggleClass("open")
            }), i.on("click", function(e) {
                e.stopPropagation()
            }), n.on("click", function(e) {
                i.removeClass("open"), t.removeClass("active")
            }), l.on("click", function(e) {
                e.stopPropagation(), o.toggleClass("open")
            }), o.on("click", function(e) {
                e.stopPropagation()
            }), e(document).on("click", function() {
                i.removeClass("open"), o.removeClass("open"), t.removeClass("active")
            }), s.on("click", function(e) {
                o.removeClass("open")
            }), e(".onepage .navbar li a.scroll").on("click", function() {
                i.removeClass("open"), t.removeClass("active")
            })
        },
        isotope() {
            e(".grid").each(function(t, i) {
                var a = e(i),
                    n = a.find(".isotope").imagesLoaded(function() {
                        n.isotope({
                            itemSelector: ".item",
                            layoutMode: "masonry",
                            percentPosition: !0,
                            masonry: {
                                columnWidth: n.width() / 12
                            },
                            transitionDuration: "0.7s"
                        })
                    });
                e(window).resize(function() {
                    n.isotope({
                        masonry: {
                            columnWidth: n.width() / 12
                        }
                    })
                }), e(window).on("load", function() {
                    n.isotope({
                        masonry: {
                            columnWidth: n.width() / 12
                        }
                    })
                }), a.find(".isotope-filter").on("click", "a", function() {
                    var t = e(this).attr("data-filter");
                    n.isotope({
                        filter: t
                    })
                })
            }), e(".isotope-filter").each(function(t, i) {
                var a = e(i);
                a.on("click", "a", function() {
                    a.find(".active").removeClass("active"), e(this).addClass("active")
                })
            })
        },
        onepageHeaderOffset() {
            var t = e(".navbar:not(.banner--clone)").outerHeight();
            e(".onepage section").css({
                "padding-top": "75px",
                "margin-top": "-75px"
            }), e(".onepage section:first-of-type").css({
                "padding-top": "" + t + "px",
                "margin-top": "-" + t + "px"
            })
        },
        onepageNavLinks() {
            e('.onepage .navbar ul.navbar-nav a[href="#"]').on("click", function(e) {
                e.preventDefault()
            })
        },
        anchorSmoothScroll() {
            e(function() {
                function t(t) {
                    var t = t.length ? t : e("[name=" + this.hash.slice(1) + "]");
                    t.length && e("html,body").animate({
                        scrollTop: t.offset().top
                    }, 1500, "easeInOutExpo")
                }
                setTimeout(function() {
                    location.hash && (window.scrollTo(0, 0), t(e("#" + location.hash.split("#")[1])))
                }, 1), e('a.scroll[href*="#"]:not([href="#"])').on("click", function() {
                    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) return t(e(this.hash)), !1
                })
            })
        },
        svgInject() {
            SVGInject.setOptions({
                onFail: function(e, t) {
                    e.classList.remove("svg-inject")
                }
            }), document.addEventListener("DOMContentLoaded", function() {
                SVGInject(document.querySelectorAll("img.svg-inject"), {
                    useCache: !0
                })
            })
        },
        backgroundImage() {
            e(".bg-image").css("background-image", function() {
                return "url(" + e(this).data("image-src") + ")"
            })
        },
        backgroundImageMobile() {
            (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i)) && e(".image-wrapper").addClass("mobile")
        },
        imageHoverOverlay() {
            e(".overlay:not(.caption) > a, .overlay:not(.caption) > span").prepend('<span class="bg"></span>')
        },
        rellax() {
            e(".rellax").length && (window.onload = function() {
                var t = new Rellax(".rellax", {
                    speed: 2,
                    center: !0,
                    breakpoints: [576, 992, 1201]
                });
                e(".projects-overflow").imagesLoaded(function() {
                    t.refresh()
                })
            })
        },
        scrollCue() {
            scrollCue.init({
                interval: -400,
                duration: 700,
                percentage: .8
            }), scrollCue.update()
        },
        showMoreItems() {
            e(".show-more").each(function() {
                var i = e(this);
                i.showMoreItems({
                    startNum: i.data("showstart"),
                    afterNum: i.data("showafter"),
                    moreText: "Show More",
                    after: function() {
                        t.isotope(), t.rellax(), t.scrollCue()
                    }
                })
            })
        },
        owlCarousel() {
            e(".basic-slider").each(function() {
                var t = e(this);
                t.owlCarousel({
                    items: 1,
                    nav: t.data("nav"),
                    navText: ["<i class='uil-arrow-left'></i>", "<i class='uil-arrow-right'></i>"],
                    dots: !0,
                    dotsEach: !0,
                    autoHeight: !0,
                    loop: !1,
                    rewind: !0,
                    margin: t.data("margin")
                })
            }), e(".carousel").each(function() {
                var t = e(this);
                t.owlCarousel({
                    autoHeight: !1,
                    nav: t.data("nav"),
                    navText: ["<i class='uil-arrow-left'></i>", "<i class='uil-arrow-right'></i>"],
                    dots: t.data("dots"),
                    dotsEach: !0,
                    loop: t.data("loop"),
                    margin: t.data("margin"),
                    autoplay: t.data("autoplay"),
                    autoplayTimeout: t.data("autoplay-timeout"),
                    responsive: t.data("responsive")
                })
            })
        },
        heroSlider() {
            e(".hm-crslc").each(function() {
                var t = e(this);

                function i(t) {
                    t.target;
                    var i = t.item.count,
                        a = t.item.index + 1;
                    a > i && (a -= i), e("#counter").html("0" + a + " <span>/ 0" + i + "</span>")
                }
                t.owlCarousel({
                    items: 1,
                    nav: e(this).data("nav"),
                    navText: ["<i class='uil uil-angle-left-b'></i>", "<i class='uil uil-angle-right-b'></i>"],
                    dots: e(this).data("dots"),
                    dotsEach: !0,
                    autoHeight: !1,
                    loop: !1,
                    rewind: !0,
                    autoplay: t.data("autoplay"),
                    autoplayTimeout: 6e3,
                    autoplayHoverPause: !1,
                    margin: 0,
                    onInitialized: i,
                    onTranslated: i,
                    animateIn: "fadeIn",
                    animateOut: "fadeOut"
                }), t.on("changed.owl.carousel", t => {
                    e(".owl-item.active").find(".animated-caption").each(function(t, i) {
                        e(this).removeClass("animate__animated").removeClass(e(this).data("anim"))
                    }), e(".owl-item").eq(t.item.index).find(".animated-caption").each(function(t, i) {
                        var a = e(this).data("anim-delay"),
                            n = e(this).data("anim-duration");
                        e(this).addClass("animate__animated").addClass(e(this).data("anim")).css({
                            "animation-delay": a + "ms",
                            "animation-duration": n + "ms"
                        })
                    })
                }), t.trigger("refresh.owl.carousel")
            })
        },
        animatedCaptions() {
            e(".animated-captions").find(".animated-caption").each(function() {
                var t = e(this).data("anim-delay"),
                    i = e(this).data("anim-duration");
                e(this).addClass("animate__animated").addClass(e(this).data("anim")).css({
                    "animation-delay": t + "ms",
                    "animation-duration": i + "ms"
                })
            })
        },
        lightbox() {
            GLightbox({
                selector: "*[data-glightbox]",
                touchNavigation: !0,
                loop: !1,
                zoomable: !1,
                autoplayVideos: !0,
                moreLength: 0,
                slideExtraAttributes: {
                    poster: ""
                },
                plyr: {
                    css: "",
                    js: "",
                    config: {
                        ratio: "16:9",
                        fullscreen: {
                            enabled: !1,
                            iosNative: !1
                        },
                        youtube: {
                            noCookie: !0,
                            rel: 0,
                            showinfo: 0,
                            iv_load_policy: 3
                        },
                        vimeo: {
                            byline: !1,
                            portrait: !1,
                            title: !1,
                            transparent: !1
                        }
                    }
                }
            })
        },
        plyr() {
            Plyr.setup(".player", {
                loadSprite: !0
            })
        },
        progressBar() {
            var t = e(".progressbar.line"),
                i = e(".progressbar.semi-circle");
            t.each(function(i) {
                var a = new ProgressBar.Line(this, {
                        strokeWidth: 6,
                        trailWidth: 6,
                        duration: 3e3,
                        easing: "easeInOut",
                        text: {
                            style: {
                                color: "inherit",
                                position: "absolute",
                                right: "0",
                                top: "-30px",
                                padding: 0,
                                margin: 0,
                                transform: null
                            },
                            autoStyleContainer: !1
                        },
                        step: function(e, t, i) {
                            t.setText(Math.round(100 * t.value()) + " %")
                        }
                    }),
                    n = e(this).attr("data-value") / 100;
                t.waypoint(function() {
                    a.animate(n)
                }, {
                    offset: "100%"
                })
            }), i.each(function(t) {
                var a = new ProgressBar.SemiCircle(this, {
                        strokeWidth: 6,
                        trailWidth: 6,
                        duration: 2e3,
                        easing: "easeInOut",
                        step: function(e, t, i) {
                            t.setText(Math.round(100 * t.value()))
                        }
                    }),
                    n = e(this).attr("data-value") / 100;
                i.waypoint(function() {
                    a.animate(n)
                }, {
                    offset: "100%"
                })
            })
        },
        pageProgress() {
            if (e(".progress-wrap").length) {
                var t = document.querySelector(".progress-wrap path"),
                    i = t.getTotalLength();
                t.style.transition = t.style.WebkitTransition = "none", t.style.strokeDasharray = i + " " + i, t.style.strokeDashoffset = i, t.getBoundingClientRect(), t.style.transition = t.style.WebkitTransition = "stroke-dashoffset 10ms linear";
                var a = function() {
                    var a = e(window).scrollTop(),
                        n = e(document).height() - e(window).height();
                    t.style.strokeDashoffset = i - a * i / n
                };
                a(), e(window).scroll(a), jQuery(window).on("scroll", function() {
                    jQuery(this).scrollTop() > 150 ? jQuery(".progress-wrap").addClass("active-progress") : jQuery(".progress-wrap").removeClass("active-progress")
                }), jQuery(".progress-wrap").on("click", function(e) {
                    return e.preventDefault(), jQuery("html, body").animate({
                        scrollTop: 0
                    }, 550), !1
                })
            }
        },
        counterUp() {
            var t = window.counterUp.default;
            e(".counter").each(function(i, a) {
                new Waypoint({
                    element: e(this),
                    handler: function() {
                        t(a, {
                            duration: 2500,
                            delay: 30
                        }), this.destroy()
                    },
                    offset: "bottom-in-view"
                })
            })
        },
        bsTooltips() {
            [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function(e) {
                return new bootstrap.Tooltip(e)
            })
        },
        bsPopovers() {
            [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')).map(function(e) {
                return new bootstrap.Popover(e)
            })
        },
        bsModal() {
            var t, i = window.innerWidth,
                a = i - e("body").innerWidth();
            if (document.querySelectorAll(".modal").forEach(t => {
                    t.addEventListener("show.bs.modal", function(t) {
                        e(".navbar.fixed").css("padding-right", a), e(".progress-wrap").css("margin-right", a)
                    }), t.addEventListener("hidden.bs.modal", function(t) {
                        e(".navbar.fixed").css("padding-right", ""), e(".progress-wrap").css("margin-right", "")
                    })
                }), e(".modal-popup").length > 0) {
                var n = new bootstrap.Modal(document.querySelector(".modal-popup"));
                document.querySelector(".modal-popup"), setTimeout(function() {
                    n.show()
                }, 200)
            }
        },
        iTooltip() {
            new iTooltip(".itooltip").init({
                className: "itooltip-inner",
                indentX: 15,
                indentY: 15,
                positionX: "right",
                positionY: "bottom"
            })
        },
        contactForm() {
            window.addEventListener("load", function() {
                var t = document.querySelectorAll(".contact-form.needs-validation");
                Array.prototype.filter.call(t, function(t) {
                    t.addEventListener("submit", function(i) {
                        !1 === t.checkValidity() && (i.preventDefault(), i.stopPropagation()), t.classList.add("was-validated"), !0 === t.checkValidity() && (i.preventDefault(), t.classList.remove("was-validated"), e.ajax({
                            type: "POST",
                            url: "assets/php/contact.php",
                            data: e(this).serialize(),
                            success: function(t) {
                                var i = "alert-" + t.type,
                                    a = t.message;
                                i && a && (e(".contact-form").find(".messages").html('<div class="alert ' + i + ' alert-dismissible fade show"><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>' + a + "</div>"), e(".contact-form")[0].reset())
                            }
                        }))
                    }, !1)
                })
            }, !1)
        },
        pricingSwitcher() {
            e(".pricing-wrapper").each(function(t, i) {
                var a = e(i);
                a.find(".pricing-switcher").on("click", function() {
                    a.find(".pricing-switcher").toggleClass("pricing-switcher-active"), a.find(".price").removeClass("price-hidden"), a.find(".price").toggleClass("price-show price-hide")
                })
            })
        },
        textRotator() {
            null != document.querySelector(".rotator-zoom") && new ReplaceMe(document.querySelector(".rotator-zoom"), {
                animation: "animate__animated animate__zoomIn",
                speed: 2500,
                separator: ",",
                clickChange: !1,
                loopCount: "infinite"
            }), null != document.querySelector(".rotator-fade") && new ReplaceMe(document.querySelector(".rotator-fade"), {
                animation: "animate__animated animate__fadeInDown",
                speed: 2500,
                separator: ",",
                clickChange: !1,
                loopCount: "infinite"
            })
        },
        codeSnippet() {
            document.querySelectorAll(".code-wrapper-inner").forEach(function(e) {
                e.insertAdjacentHTML("beforebegin", '<button type="button" class="btn btn-sm btn-white rounded-pill btn-clipboard">Copy</button>')
            }), new ClipboardJS(".btn-clipboard", {
                target: function(e) {
                    return e.nextElementSibling
                }
            }).on("success", e => {
                e.trigger.textContent = "Copied!", e.clearSelection(), setTimeout(() => {
                    e.trigger.textContent = "Copy"
                }, 2e3)
            }), new ClipboardJS(".btn-copy-icon").on("success", function(e) {
                e.clearSelection(), e.trigger.textContent = "Copied!", window.setTimeout(function() {
                    e.trigger.textContent = "Copy"
                }, 2300)
            })
        }
    };
    t.init()
}(jQuery), $(document).ready(function() {
    $(".imgLiquid").imgLiquid()
}), $(document).ready(function() {
    $(".nws-crl").owlCarousel({
        loop: !0,
        margin: 30,
        dots: !1,
        nav: !0,
        navText: ["<i class='uil uil-angle-left-b'></i>", "<i class='uil uil-angle-right-b'></i>"],
        items: 1
    }), $(".csr-crsl").owlCarousel({
        loop: !0,
        margin: 30,
        dots: !0,
        nav: !1,
        items: 1,
        autoplay: !0,
        autoplayTimeout: 2500,
        autoplayHoverPause: !1
    }), $(".awr-crsl").owlCarousel({
        loop: !1,
        margin: 30,
        dots: !1,
        nav: !1,
        items: 1,
        autoplay: !0,
        autoplayTimeout: 3e3,
        autoplayHoverPause: !1,
        animateIn: "fadeIn",
        animateOut: "fadeOut"
    }), $(".prjct-dtl-cl").owlCarousel({
        loop: !0,
        margin: 30,
        dots: !1,
        nav: !0,
        navText: ["<i class='uil uil-angle-left-b'></i>", "<i class='uil uil-angle-right-b'></i>"],
        items: 1,
        autoplay: !0,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1
    }), $(".crsl-gls").owlCarousel({
        loop: !0,
        margin: 30,
        dots: !1,
        nav: !0,
        navText: ["<i class='uil uil-angle-left-b'></i>", "<i class='uil uil-angle-right-b'></i>"],
        items: 1,
        autoplay: !0,
        autoplayTimeout: 1e4,
        autoplayHoverPause: !1,
        animateIn: "fadeIn",
        animateOut: "fadeOut"
    }), $(".nwly-awd-pr").owlCarousel({
        loop: !0,
        margin: 30,
        dots: !1,
        nav: !1,
        items: 1,
        autoplay: !0,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        animateIn: "fadeIn",
        animateOut: "fadeOut"
    }), $(".sst-sc-b").owlCarousel({
        loop: !1,
        margin: 0,
        nav: !1,
        dots: !1,
        autoplay: !0,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        onInitialized: t,
        onTranslated: t,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1e3: {
                items: 1
            }
        }
    });
    var e = $(".sst-sc-b");

    function t(e) {
        e.target;
        var t = e.item.count,
            i = e.item.index + 1;
        i > t && (i -= t), $("#cntlds").html("0" + i + " <span>/ 0" + t + "</span>")
    }
    $(".my-next-button").click(function() {
        e.trigger("next.owl.carousel")
    }), $(".my-prev-button").click(function() {
        e.trigger("prev.owl.carousel")
    })
}), $(document).ready(function() {
    $(".owl-carousel.ctgsc-crls").owlCarousel({
        loop: !0,
        margin: 0,
        nav: !1,
        dots: !1,
        autoplay: !0,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1e3: {
                items: 4
            },
            1500: {
                items: 5
            }
        }
    });
    var e = $(".owl-carousel.ctgsc-crls");
    $(".my-next-button").click(function() {
        e.trigger("next.owl.carousel")
    }), $(".my-prev-button").click(function() {
        e.trigger("prev.owl.carousel")
    })
}), $(document).ready(function() {
    $(".sst-ltsc-crs").owlCarousel({
        loop: !1,
        margin: 50,
        nav: !1,
        dots: !1,
        autoplay: !0,
        autoplayTimeout: 3e3,
        autoplayHoverPause: !1,
        onInitialized: e,
        onTranslated: e,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1e3: {
                items: 3
            }
        }
    });

    function e(e) {
        e.target;
        var t = e.item.count,
            i = e.item.index + 1;
        i > t && (i -= t), $("#sstbt").html("0" + i + " <span>/ 0" + t + "</span>")
    }
}), $(document).ready(function() {
    $(".clnts-crsl-fr").owlCarousel({
        loop: !1,
        margin: 50,
        nav: !1,
        dots: !1,
        autoplay: !1,
        autoplayTimeout: 3e3,
        autoplayHoverPause: !1,
        onInitialized: e,
        onTranslated: e,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1e3: {
                items: 4
            }
        }
    });

    function e(e) {
        e.target;
        var t = e.item.count,
            i = e.item.index + 1;
        i > t && (i -= t), $("#sstbt").html("0" + i + " <span>/ 0" + t + "</span>")
    }
}), $(document).ready(function() {
    $(".sctr-sm-pr").owlCarousel({
        loop: !0,
        margin: 0,
        nav: !1,
        dots: !1,
        autoplay: !0,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        onInitialized: t,
        onTranslated: t,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1e3: {
                items: 1
            }
        }
    });
    var e = $(".sctr-sm-pr");

    function t(e) {
        e.target;
        var t = e.item.count,
            i = e.item.index + 1;
        i > t && (i -= t), $("#cntlds").html("0" + i + " <span>/ 0" + t + "</span>")
    }
    $(".my-next-button").click(function() {
        e.trigger("next.owl.carousel")
    }), $(".my-prev-button").click(function() {
        e.trigger("prev.owl.carousel")
    })
});
var timer, liquidIsMobile = function e() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    },
    liquidMobileNavBreakpoint = function e() {
        return window.liquidParams && window.liquidParams.mobileNavBreakpoint ? window.liquidParams.mobileNavBreakpoint : jQuery("body").data("mobile-nav-breakpoint") || 1199
    },
    liquidWindowWidth = function e() {
        return window.innerWidth
    },
    liquidWindowHeight = function e() {
        return window.innerHeight
    };

function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function e(t) {
        return typeof t
    } : function e(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(e)
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
}

function _defineProperties(e, t) {
    for (var i = 0; i < t.length; i++) {
        var a = t[i];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
    }
}

function _createClass(e, t, i) {
    return t && _defineProperties(e.prototype, t), i && _defineProperties(e, i), e
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
}

function _defineProperties(e, t) {
    for (var i = 0; i < t.length; i++) {
        var a = t[i];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
    }
}

function _createClass(e, t, i) {
    return t && _defineProperties(e.prototype, t), i && _defineProperties(e, i), e
}

function Search(e) {
    $.ajax({
        url: "ajax/filter_search.php",
        type: "POST",
        data: {
            q: e
        },
        success: function(e, t, i) {
            $("div").find("#txtResultM").html(e)
        },
        error: function(e, t, i) {}
    })
}
jQuery(document).ready(function(e) {
        liquidWindowWidth() <= liquidMobileNavBreakpoint() || liquidIsMobile() || e(".vc_row.lqd-css-sticky").liquidStickyRow()
    }),
    function(e, t, i, a) {
        var n = "liquidParallax",
            o = {
                duration: 1800,
                offset: 0,
                triggerHook: "onEnter",
                easing: "linear",
                parallaxBG: !1,
                scaleBG: !0,
                overflowHidden: !0
            },
            s = {},
            l = {},
            r = function() {
                function i(t, a, r, c) {
                    _classCallCheck(this, i), this.element = t, this.$element = e(t), this.options = e.extend({}, o, a), this.parallaxFromOptions = e.extend({}, s, r), this.parallaxToOptions = e.extend({}, l, c), this.isInitialized = !1, this.parallaxElement = this.element, this.triggerElement = this.parallaxElement, this._defaults = o, this._name = n, this.build()
                }
                return _createClass(i, [{
                    key: "build",
                    value: function e() {
                        return liquidIsMobile() && this.options.parallaxBG && this.$element.is(".titlebar") ? (this.$element.addClass("liquid-parallax-bg"), !1) : this.$element.is(".vc_row") && this.$element.is(".vc_row:first-of-type") || this.$element.is(".titlebar") && this.options.parallaxBG ? ((this.$element.closest(".lqd-css-sticky").length || this.$element.is(".vc_row[data-pin]") || this.$element.is(".lqd-css-sticky")) && this.handleSentinel(), this.init(), !1) : void this.initIO()
                    }
                }, {
                    key: "setParallaxFromParams",
                    value: function t() {
                        var i = {
                            targets: this.parallaxElement,
                            duration: 0,
                            easing: "linear"
                        };
                        anime(e.extend({}, this.parallaxFromOptions, i))
                    }
                }, {
                    key: "createSentinel",
                    value: function t() {
                        this.$sentinel = e('<div class="lqd-parallax-sentinel" />').appendTo("body")
                    }
                }, {
                    key: "handleSentinel",
                    value: function e() {
                        this.createSentinel(), this.positionSentinel(), this.handleResize(), this.triggerElement = this.$sentinel.get(0)
                    }
                }, {
                    key: "positionSentinel",
                    value: function e() {
                        this.$sentinel.attr("style", ""), this.$sentinel.css({
                            width: this.$element.width(),
                            height: this.$element.height(),
                            top: this.$element.offset().top,
                            left: this.$element.offset().left
                        })
                    }
                }, {
                    key: "initParallax",
                    value: function e() {
                        if (!this.$element.is(".wpb_column")) {
                            var t = this.options.overflowHidden ? "overflow-hidden" : "";
                            this.$element.wrap('<div class="ld-parallax-wrap '.concat(t, '" />'))
                        }
                    }
                }, {
                    key: "initParallaxBG",
                    value: function t() {
                        var i = this.$element.children(".lqd-vbg-wrap");
                        if (!this.element.hasAttribute("data-slideshow-bg") && !this.element.hasAttribute("data-row-bg") && !i.length) return this.createParallaxBgMarkup(), this.parallaxElement = e(".liquid-parallax-figure", this.element).get(0), !1;
                        if (this.element.hasAttribute("data-slideshow-bg")) {
                            var a = e(".ld-slideshow-bg-wrap", this.element),
                                n = e(".ld-slideshow-bg-inner", a);
                            return this.updateParallaxBgOptions(n), this.parallaxElement = n.get(0), this.$element.addClass("liquid-parallax-bg"), !1
                        }
                        if (this.element.hasAttribute("data-row-bg")) {
                            var o = e(".row-bg-wrap", this.element),
                                s = e(".row-bg", o);
                            this.updateParallaxBgOptions(s), this.parallaxElement = s.get(0), this.$element.addClass("liquid-parallax-bg")
                        }
                        i.length && (this.updateParallaxBgOptions(i.children()), this.parallaxElement = i.children().get(0))
                    }
                }, {
                    key: "createParallaxBgMarkup",
                    value: function t() {
                        var i = e('<div class="liquid-parallax-container"></div>'),
                            a = e('<figure class="liquid-parallax-figure"></figure>'),
                            n = this.$element.css("background-image"),
                            o = this.$element.css("background-position");
                        this.updateParallaxBgOptions(a), n && "none" != n && (a.css("background-image", n), a.css("background-position", o), this.$element.addClass("bg-none")), this.$element.addClass("liquid-parallax-bg"), a.appendTo(i), i.prependTo(this.element)
                    }
                }, {
                    key: "updateParallaxBgOptions",
                    value: function e(t) {
                        var i = this.$element.is(".vc_row") && !liquidIsMobile() ? "-30%" : "-20%",
                            n = this.$element.is(".vc_row") && !liquidIsMobile() ? "140%" : "120%";
                        _typeof(this.parallaxFromOptions.translateY) === _typeof(a) && (this.parallaxFromOptions.translateY = i), _typeof(this.parallaxToOptions.translateY) === _typeof(a) && (this.parallaxToOptions.translateY = "0%"), this.options.scaleBG && t.css("height", n)
                    }
                }, {
                    key: "createTimeline",
                    value: function t() {
                        return anime(e.extend({}, this.parallaxToOptions, {
                            targets: this.parallaxElement,
                            duration: this.options.duration,
                            easing: this.options.easing,
                            autoplay: !1
                        }))
                    }
                }, {
                    key: "initIO",
                    value: function t() {
                        var i = this,
                            a = this.options.parallaxBG,
                            n = this.$element.closest("[data-pin]"),
                            o = this.$element.closest(".lqd-css-sticky"),
                            s = function t(s) {
                                s.forEach(function(t) {
                                    t.isIntersecting ? (i.isInitialized || (i.isInitialized = !0, a && (i.options.duration = t.rootBounds.height + t.boundingClientRect.height), (n.length || o.length || i.$element.is(".vc_row[data-pin]") || i.$element.is(".lqd-css-sticky")) && i.handleSentinel(), i.init()), e(i.parallaxElement).addClass("will-change")) : e(i.parallaxElement).removeClass("will-change")
                                })
                            };
                        new IntersectionObserver(s, {
                            rootMargin: "7%"
                        }).observe(this.element)
                    }
                }, {
                    key: "init",
                    value: function e() {
                        this.options.parallaxBG || this.initParallax(), this.options.parallaxBG && this.initParallaxBG(), this.setParallaxFromParams();
                        var t = new ScrollMagic.Controller,
                            i = this.createTimeline(),
                            a = new ScrollMagic.Scene({
                                duration: i.duration,
                                offset: this.options.offset,
                                triggerHook: this.options.triggerHook
                            });
                        a.triggerElement(this.triggerElement), a.addTo(t), this.$element.is(".vc_row") || this.$element.is(".titlebar") || this.$element.parent().addClass("parallax-applied"), a.on("progress", function(e) {
                            i.seek(e.progress * i.duration)
                        })
                    }
                }, {
                    key: "handleResize",
                    value: function i() {
                        e(t).on("resize", this.onWindowResize.bind(this))
                    }
                }, {
                    key: "onWindowResize",
                    value: function e() {
                        this.positionSentinel()
                    }
                }]), i
            }();
        e.fn[n] = function(t) {
            return this.each(function() {
                var i = e(this).data("parallax-options"),
                    a = e(this).data("parallax-from"),
                    o = e(this).data("parallax-to"),
                    s = null;
                i && (s = e.extend(!0, {}, t, i, a, o)), e.data(this, "plugin_" + n) || e.data(this, "plugin_" + n, new r(this, s, a, o))
            })
        }
    }(jQuery, window, document), jQuery(document).ready(function(e) {
        if (e("body").hasClass("compose-mode")) return !1;
        e("[data-parallax]").not("[data-pin]:not(.vc_row)").liquidParallax()
    }),
    function(e, t, i, a) {
        var n = "liquidAnimateOnScroll",
            o = {
                offset: 0,
                triggerHook: "onLeave",
                easing: "linear",
                staticSentinel: null,
                staticSentinelRel: "closest"
            },
            s = {},
            l = {},
            r = function() {
                function i(t, a, r, c) {
                    _classCallCheck(this, i), this.element = t, this.$element = e(t), this.options = e.extend({}, o, a), this.animateFromOptions = e.extend({}, s, r), this.animateToOptions = e.extend({}, l, c), this.isInitialized = !1, this.animateElement = this.element, this.triggerElement = this.getTriggerElement(), this.elementOuterHeight = this.getElementOuterHeight(), this._defaults = o, this._name = n, this.build()
                }
                return _createClass(i, [{
                    key: "build",
                    value: function e() {
                        this.initIO()
                    }
                }, {
                    key: "getTriggerElement",
                    value: function e() {
                        var t = this.options;
                        return t.staticSentinel ? this.$element[t.staticSentinelRel](t.staticSentinel).get(0) : this.animateElement
                    }
                }, {
                    key: "getElementOuterHeight",
                    value: function e() {
                        return this.$element.outerHeight()
                    }
                }, {
                    key: "getElementOffset",
                    value: function e() {
                        return this.$element.offset()
                    }
                }, {
                    key: "setAnimateFromParams",
                    value: function t() {
                        var i = {
                            targets: this.animateElement,
                            duration: 0,
                            easing: "linear"
                        };
                        anime(e.extend({}, this.animateFromOptions, i))
                    }
                }, {
                    key: "createSentinel",
                    value: function t() {
                        this.$sentinel = e('<div class="lqd-animate-sentinel invisible pos-abs" />').appendTo("body")
                    }
                }, {
                    key: "handleSentinel",
                    value: function e() {
                        this.createSentinel(), this.positionSentinel(), this.handleEvents(), this.triggerElement = this.$sentinel.get(0)
                    }
                }, {
                    key: "positionSentinel",
                    value: function e() {
                        if (!this.$sentinel) return !1;
                        this.$sentinel.attr("style", ""), this.$sentinel.css({
                            width: this.$element.width(),
                            height: this.elementOuterHeight,
                            top: this.getElementOffset().top,
                            left: this.getElementOffset().left
                        })
                    }
                }, {
                    key: "createTimeline",
                    value: function t() {
                        return anime(e.extend({}, this.animateToOptions, {
                            targets: this.animateElement,
                            duration: this.elementOuterHeight,
                            easing: this.options.easing,
                            autoplay: !1
                        }))
                    }
                }, {
                    key: "initIO",
                    value: function t() {
                        var i = this,
                            a = this.$element.closest("[data-pin]"),
                            n = this.$element.closest(".lqd-css-sticky"),
                            o = function t(o) {
                                o.forEach(function(t) {
                                    t.isIntersecting ? (i.isInitialized || (i.isInitialized = !0, !i.options.staticSentinel && (a.length || n.length || i.$element.is(".vc_row[data-pin]") || i.$element.is(".vc_row.lqd-css-sticky")) && i.handleSentinel(), i.init()), e(i.animateElement).addClass("will-change")) : e(i.animateElement).removeClass("will-change")
                                })
                            };
                        new IntersectionObserver(o, {
                            rootMargin: "3%"
                        }).observe(this.element)
                    }
                }, {
                    key: "init",
                    value: function e() {
                        this.setAnimateFromParams();
                        var t = new ScrollMagic.Controller,
                            i = this.createTimeline(),
                            a = new ScrollMagic.Scene({
                                duration: i.duration,
                                offset: this.options.offset,
                                triggerHook: this.options.triggerHook
                            });
                        a.triggerElement(this.triggerElement), a.addTo(t), a.on("progress", function(e) {
                            i.seek(e.progress * i.duration)
                        })
                    }
                }, {
                    key: "handleEvents",
                    value: function i() {
                        e(t).on("load resize", this.positionSentinel.bind(this)), this.element.addEventListener("lqd-sticky-row-initiated", this.positionSentinel.bind(this))
                    }
                }]), i
            }();
        e.fn[n] = function(t) {
            return this.each(function() {
                var i = e(this),
                    a = i.data("animate-options"),
                    o = i.data("animate-from"),
                    s = i.data("animate-to"),
                    l = null;
                a && (l = e.extend(!0, {}, t, a, o, s)), e.data(this, "plugin_" + n) || e.data(this, "plugin_" + n, new r(this, l, o, s))
            })
        }
    }(jQuery, window, document), $(document).ready(function() {
        $(".nmdc-lst").click(function() {
            $(this).hasClass("active") ? $(".nmdc-lst").removeClass("active") : ($(".nmdc-lst").removeClass("active"), $(this).addClass("active"))
        })
    }), $("#SearchBox").on("keyup", function() {
        clearTimeout(timer), timer = setTimeout(Search, 2e3)
    }), $("#SearchBox").on("keydown", function() {
        clearTimeout(timer)
    }),
    function() {
        let e = document.getElementById("crslmncs"),
            t = e.getElementsByTagName("video"),
            i = t.length,
            a = new Flickity(e, {
                wrapAround: !0,
                autoPlay: !1,
                fade: !0,
                fullscreen: !0,
                on: {
                    ready: function() {
                        console.log("Flickity ready"), t[0].play()
                    }
                }
            });
        for (let n = 0; n < i; n++) t[n].addEventListener("loadedmetadata", function() {
            console.log("Video Duration_" + n + " : " + t[n].duration)
        }, !1), t[n].addEventListener("ended", function() {
            a.next("true")
        }, !1);
        a.on("change", function e(a) {
            for (let n = 0; n < i; n++) t[n].currentTime = 0, t[a].play()
        })
    }();