/*!
 * clipboard.js v2.0.8
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.ClipboardJS = e() : t.ClipboardJS = e()
}(this, function() {
    var t, e;
    return t = {
        686: function(t, e, i) {
            "use strict";
            i.d(e, {
                default: function() {
                    return y
                }
            });
            var e = i(279),
                n = i.n(e),
                e = i(370),
                s = i.n(e),
                e = i(817),
                r = i.n(e);

            function o(t) {
                try {
                    return document.execCommand(t)
                } catch (e) {
                    return
                }
            }
            var a = function(t) {
                    return t = r()(t), o("cut"), t
                },
                l = function(t) {
                    var e, i, n, s = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {
                            container: document.body
                        },
                        a = "";
                    return "string" == typeof t ? (e = t, i = "rtl" === document.documentElement.getAttribute("dir"), (n = document.createElement("textarea")).style.fontSize = "12pt", n.style.border = "0", n.style.padding = "0", n.style.margin = "0", n.style.position = "absolute", n.style[i ? "right" : "left"] = "-9999px", i = window.pageYOffset || document.documentElement.scrollTop, n.style.top = "".concat(i, "px"), n.setAttribute("readonly", ""), n.value = e, s.container.appendChild(n), a = r()(n), o("copy"), n.remove()) : (a = r()(t), o("copy")), a
                };

            function u(t) {
                return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }
            var h = function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    e = t.action,
                    i = void 0 === e ? "copy" : e,
                    n = t.container,
                    e = t.target,
                    t = t.text;
                if ("copy" !== i && "cut" !== i) throw Error('Invalid "action" value, use either "copy" or "cut"');
                if (void 0 !== e) {
                    if (!e || "object" !== u(e) || 1 !== e.nodeType) throw Error('Invalid "target" value, use a valid Element');
                    if ("copy" === i && e.hasAttribute("disabled")) throw Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                    if ("cut" === i && (e.hasAttribute("readonly") || e.hasAttribute("disabled"))) throw Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')
                }
                return t ? l(t, {
                    container: n
                }) : e ? "cut" === i ? a(e) : l(e, {
                    container: n
                }) : void 0
            };

            function c(t) {
                return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function d(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function p(t, e) {
                return (p = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function f(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var i, n = g(t);
                    return i = e ? (i = g(this).constructor, Reflect.construct(n, arguments, i)) : n.apply(this, arguments), n = this, i && ("object" === c(i) || "function" == typeof i) ? i : function(t) {
                        if (void 0 !== t) return t;
                        throw ReferenceError("this hasn't been initialised - super() hasn't been called")
                    }(n)
                }
            }

            function g(t) {
                return (g = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function m(t, e) {
                if (t = "data-clipboard-".concat(t), e.hasAttribute(t)) return e.getAttribute(t)
            }
            var y = function() {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && p(t, e)
                }(o, n());
                var t, e, i, r = f(o);

                function o(t, e) {
                    var i;
                    return function(t) {
                        if (!(t instanceof o)) throw TypeError("Cannot call a class as a function")
                    }(this), (i = r.call(this)).resolveOptions(e), i.listenClick(t), i
                }
                return t = o, i = [{
                    key: "copy",
                    value: function(t) {
                        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {
                            container: document.body
                        };
                        return l(t, e)
                    }
                }, {
                    key: "cut",
                    value: function(t) {
                        return a(t)
                    }
                }, {
                    key: "isSupported",
                    value: function() {
                        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                            t = "string" == typeof t ? [t] : t,
                            e = !!document.queryCommandSupported;
                        return t.forEach(function(t) {
                            e = e && !!document.queryCommandSupported(t)
                        }), e
                    }
                }], e = [{
                    key: "resolveOptions",
                    value: function() {
                        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                        this.action = "function" == typeof t.action ? t.action : this.defaultAction, this.target = "function" == typeof t.target ? t.target : this.defaultTarget, this.text = "function" == typeof t.text ? t.text : this.defaultText, this.container = "object" === c(t.container) ? t.container : document.body
                    }
                }, {
                    key: "listenClick",
                    value: function(t) {
                        var e = this;
                        this.listener = s()(t, "click", function(t) {
                            return e.onClick(t)
                        })
                    }
                }, {
                    key: "onClick",
                    value: function(t) {
                        var e = t.delegateTarget || t.currentTarget,
                            t = h({
                                action: this.action(e),
                                container: this.container,
                                target: this.target(e),
                                text: this.text(e)
                            });
                        this.emit(t ? "success" : "error", {
                            action: this.action,
                            text: t,
                            trigger: e,
                            clearSelection: function() {
                                e && e.focus(), document.activeElement.blur(), window.getSelection().removeAllRanges()
                            }
                        })
                    }
                }, {
                    key: "defaultAction",
                    value: function(t) {
                        return m("action", t)
                    }
                }, {
                    key: "defaultTarget",
                    value: function(t) {
                        if (t = m("target", t)) return document.querySelector(t)
                    }
                }, {
                    key: "defaultText",
                    value: function(t) {
                        return m("text", t)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.listener.destroy()
                    }
                }], d(t.prototype, e), i && d(t, i), o
            }()
        },
        828: function(t) {
            var e;
            "undefined" == typeof Element || Element.prototype.matches || ((e = Element.prototype).matches = e.matchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector), t.exports = function(t, e) {
                for (; t && 9 !== t.nodeType;) {
                    if ("function" == typeof t.matches && t.matches(e)) return t;
                    t = t.parentNode
                }
            }
        },
        438: function(t, e, i) {
            var n = i(828);

            function s(t, e, i, s, r) {
                var o = (function(t, e, i, s) {
                    return function(i) {
                        i.delegateTarget = n(i.target, e), i.delegateTarget && s.call(t, i)
                    }
                }).apply(this, arguments);
                return t.addEventListener(i, o, r), {
                    destroy: function() {
                        t.removeEventListener(i, o, r)
                    }
                }
            }
            t.exports = function(t, e, i, n, r) {
                return "function" == typeof t.addEventListener ? s.apply(null, arguments) : "function" == typeof i ? s.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)), Array.prototype.map.call(t, function(t) {
                    return s(t, e, i, n, r)
                }))
            }
        },
        879: function(t, e) {
            e.node = function(t) {
                return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType
            }, e.nodeList = function(t) {
                var i = Object.prototype.toString.call(t);
                return void 0 !== t && ("[object NodeList]" === i || "[object HTMLCollection]" === i) && "length" in t && (0 === t.length || e.node(t[0]))
            }, e.string = function(t) {
                return "string" == typeof t || t instanceof String
            }, e.fn = function(t) {
                return "[object Function]" === Object.prototype.toString.call(t)
            }
        },
        370: function(t, e, i) {
            var n = i(879),
                s = i(438);
            t.exports = function(t, e, i) {
                var r, o, a, l, u, h;
                if (!t && !e && !i) throw Error("Missing required arguments");
                if (!n.string(e)) throw TypeError("Second argument must be a String");
                if (!n.fn(i)) throw TypeError("Third argument must be a Function");
                if (n.node(t)) return u = e, h = i, (l = t).addEventListener(u, h), {
                    destroy: function() {
                        l.removeEventListener(u, h)
                    }
                };
                if (n.nodeList(t)) return r = t, o = e, a = i, Array.prototype.forEach.call(r, function(t) {
                    t.addEventListener(o, a)
                }), {
                    destroy: function() {
                        Array.prototype.forEach.call(r, function(t) {
                            t.removeEventListener(o, a)
                        })
                    }
                };
                if (n.string(t)) return s(document.body, t, e, i);
                throw TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
            }
        },
        817: function(t) {
            t.exports = function(t) {
                var e, i = "SELECT" === t.nodeName ? (t.focus(), t.value) : "INPUT" === t.nodeName || "TEXTAREA" === t.nodeName ? ((e = t.hasAttribute("readonly")) || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), e || t.removeAttribute("readonly"), t.value) : (t.hasAttribute("contenteditable") && t.focus(), i = window.getSelection(), (e = document.createRange()).selectNodeContents(t), i.removeAllRanges(), i.addRange(e), i.toString());
                return i
            }
        },
        279: function(t) {
            function e() {}
            e.prototype = {
                on: function(t, e, i) {
                    var n = this.e || (this.e = {});
                    return (n[t] || (n[t] = [])).push({
                        fn: e,
                        ctx: i
                    }), this
                },
                once: function(t, e, i) {
                    var n = this;

                    function s() {
                        n.off(t, s), e.apply(i, arguments)
                    }
                    return s._ = e, this.on(t, s, i)
                },
                emit: function(t) {
                    for (var e = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[t] || []).slice(), n = 0, s = i.length; n < s; n++) i[n].fn.apply(i[n].ctx, e);
                    return this
                },
                off: function(t, e) {
                    var i = this.e || (this.e = {}),
                        n = i[t],
                        s = [];
                    if (n && e)
                        for (var r = 0, o = n.length; r < o; r++) n[r].fn !== e && n[r].fn._ !== e && s.push(n[r]);
                    return s.length ? i[t] = s : delete i[t], this
                }
            }, t.exports = e, t.exports.TinyEmitter = e
        }
    }, e = {}, i.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return i.d(e, {
            a: e
        }), e
    }, i.d = function(t, e) {
        for (var n in e) i.o(e, n) && !i.o(t, n) && Object.defineProperty(t, n, {
            enumerable: !0,
            get: e[n]
        })
    }, i.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, i(686).default;

    function i(n) {
        if (e[n]) return e[n].exports;
        var s = e[n] = {
            exports: {}
        };
        return t[n](s, s.exports, i), s.exports
    }
}),
function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.counterUp = e() : t.counterUp = e()
}(self, function() {
    return (() => {
        "use strict";
        var t = {
                d(e, i) {
                    for (var n in i) t.o(i, n) && !t.o(e, n) && Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: i[n]
                    })
                },
                o: (t, e) => Object.prototype.hasOwnProperty.call(t, e),
                r(t) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(t, "__esModule", {
                        value: !0
                    })
                }
            },
            e = {};
        t.r(e), t.d(e, {
            default: () => i,
            divideNumbers: () => s
        });
        let i = (t, e = {}) => {
                let {
                    action: i = "start",
                    duration: r = 1e3,
                    delay: o = 16
                } = e;
                if ("stop" === i) return void n(t);
                if (n(t), !/[0-9]/.test(t.innerHTML)) return;
                let a = s(t.innerHTML, {
                    duration: r || t.getAttribute("data-duration"),
                    delay: o || t.getAttribute("data-delay")
                });
                t._countUpOrigInnerHTML = t.innerHTML, t.innerHTML = a[0] || "&nbsp;", t.style.visibility = "visible";
                let l = function() {
                    t.innerHTML = a.shift() || "&nbsp;", a.length ? (clearTimeout(t.countUpTimeout), t.countUpTimeout = setTimeout(l, o)) : t._countUpOrigInnerHTML = void 0
                };
                t.countUpTimeout = setTimeout(l, o)
            },
            n = t => {
                clearTimeout(t.countUpTimeout), t._countUpOrigInnerHTML && (t.innerHTML = t._countUpOrigInnerHTML, t._countUpOrigInnerHTML = void 0), t.style.visibility = ""
            },
            s = (t, e = {}) => {
                let {
                    duration: i = 1e3,
                    delay: n = 16
                } = e, s = i / n, r = t.toString().split(/(<[^>]+>|[0-9.][,.0-9]*[0-9]*)/), o = [];
                for (let a = 0; a < s; a++) o.push("");
                for (let l = 0; l < r.length; l++)
                    if (/([0-9.][,.0-9]*[0-9]*)/.test(r[l]) && !/<[^>]+>/.test(r[l])) {
                        let u = r[l],
                            h = [...u.matchAll(/[.,]/g)].map(t => ({
                                char: t[0],
                                i: u.length - t.index - 1
                            })).sort((t, e) => t.i - e.i);
                        u = u.replace(/[.,]/g, "");
                        let c = o.length - 1;
                        for (let d = s; d >= 1; d--) {
                            let p = parseInt(u / s * d, 10);
                            p = h.reduce((t, {
                                char: e,
                                i: i
                            }) => t.length <= i ? t : t.slice(0, -i) + e + t.slice(-i), p.toString()), o[c--] += p
                        }
                    } else
                        for (let f = 0; f < s; f++) o[f] += r[l];
                return o[o.length] = t.toString(), o
            };
        return e
    })()
}),
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], function(e) {
        return t(e)
    }) : "object" == typeof module && "object" == typeof module.exports ? exports = t(require("jquery")) : t(jQuery)
}(function(t) {
    function e(t) {
        var e = 7.5625,
            i = 2.75;
        return t < 1 / i ? e * t * t : t < 2 / i ? e * (t -= 1.5 / i) * t + .75 : t < 2.5 / i ? e * (t -= 2.25 / i) * t + .9375 : e * (t -= 2.625 / i) * t + .984375
    }
    t.easing.jswing = t.easing.swing;
    var i = Math.pow,
        n = Math.sqrt,
        s = Math.sin,
        r = Math.cos,
        o = Math.PI,
        a = 1.70158,
        l = 1.525 * a,
        u = 2 * o / 3,
        h = 2 * o / 4.5;
    t.extend(t.easing, {
        def: "easeOutQuad",
        swing: function(e) {
            return t.easing[t.easing.def](e)
        },
        easeInQuad: function(t) {
            return t * t
        },
        easeOutQuad: function(t) {
            return 1 - (1 - t) * (1 - t)
        },
        easeInOutQuad: function(t) {
            return t < .5 ? 2 * t * t : 1 - i(-2 * t + 2, 2) / 2
        },
        easeInCubic: function(t) {
            return t * t * t
        },
        easeOutCubic: function(t) {
            return 1 - i(1 - t, 3)
        },
        easeInOutCubic: function(t) {
            return t < .5 ? 4 * t * t * t : 1 - i(-2 * t + 2, 3) / 2
        },
        easeInQuart: function(t) {
            return t * t * t * t
        },
        easeOutQuart: function(t) {
            return 1 - i(1 - t, 4)
        },
        easeInOutQuart: function(t) {
            return t < .5 ? 8 * t * t * t * t : 1 - i(-2 * t + 2, 4) / 2
        },
        easeInQuint: function(t) {
            return t * t * t * t * t
        },
        easeOutQuint: function(t) {
            return 1 - i(1 - t, 5)
        },
        easeInOutQuint: function(t) {
            return t < .5 ? 16 * t * t * t * t * t : 1 - i(-2 * t + 2, 5) / 2
        },
        easeInSine: function(t) {
            return 1 - r(t * o / 2)
        },
        easeOutSine: function(t) {
            return s(t * o / 2)
        },
        easeInOutSine: function(t) {
            return -(r(o * t) - 1) / 2
        },
        easeInExpo: function(t) {
            return 0 === t ? 0 : i(2, 10 * t - 10)
        },
        easeOutExpo: function(t) {
            return 1 === t ? 1 : 1 - i(2, -10 * t)
        },
        easeInOutExpo: function(t) {
            return 0 === t ? 0 : 1 === t ? 1 : t < .5 ? i(2, 20 * t - 10) / 2 : (2 - i(2, -20 * t + 10)) / 2
        },
        easeInCirc: function(t) {
            return 1 - n(1 - i(t, 2))
        },
        easeOutCirc: function(t) {
            return n(1 - i(t - 1, 2))
        },
        easeInOutCirc: function(t) {
            return t < .5 ? (1 - n(1 - i(2 * t, 2))) / 2 : (n(1 - i(-2 * t + 2, 2)) + 1) / 2
        },
        easeInElastic: function(t) {
            return 0 === t ? 0 : 1 === t ? 1 : -i(2, 10 * t - 10) * s((10 * t - 10.75) * u)
        },
        easeOutElastic: function(t) {
            return 0 === t ? 0 : 1 === t ? 1 : i(2, -10 * t) * s((10 * t - .75) * u) + 1
        },
        easeInOutElastic: function(t) {
            return 0 === t ? 0 : 1 === t ? 1 : t < .5 ? -(i(2, 20 * t - 10) * s((20 * t - 11.125) * h)) / 2 : i(2, -20 * t + 10) * s((20 * t - 11.125) * h) / 2 + 1
        },
        easeInBack: function(t) {
            return (a + 1) * t * t * t - a * t * t
        },
        easeOutBack: function(t) {
            return 1 + (a + 1) * i(t - 1, 3) + a * i(t - 1, 2)
        },
        easeInOutBack: function(t) {
            return t < .5 ? i(2 * t, 2) * (7.189819 * t - l) / 2 : (i(2 * t - 2, 2) * ((l + 1) * (2 * t - 2) + l) + 2) / 2
        },
        easeInBounce: function(t) {
            return 1 - e(1 - t)
        },
        easeOutBounce: e,
        easeInOutBounce: function(t) {
            return t < .5 ? (1 - e(1 - 2 * t)) / 2 : (1 + e(2 * t - 1)) / 2
        }
    })
}),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).GLightbox = e()
}(this, function() {
    "use strict";

    function t(e) {
        return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(e)
    }

    function e(t, e) {
        if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function n(t, e, n) {
        return e && i(t.prototype, e), n && i(t, n), t
    }
    var s = Date.now();

    function r() {
        var t = {},
            e = !0,
            i = 0,
            n = arguments.length;
        "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (e = arguments[0], i++);
        for (var s = function i(n) {
                for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e && "[object Object]" === Object.prototype.toString.call(n[s]) ? t[s] = r(!0, t[s], n[s]) : t[s] = n[s])
            }; i < n; i++) {
            var o = arguments[i];
            s(o)
        }
        return t
    }

    function o(t, e) {
        if ((A(t) || t === window || t === document) && (t = [t]), I(t) || P(t) || (t = [t]), 0 != M(t)) {
            if (I(t) && !P(t))
                for (var i = t.length, n = 0; n < i && !1 !== e.call(t[n], t[n], n, t); n++);
            else if (P(t)) {
                for (var s in t)
                    if (L(t, s) && !1 === e.call(t[s], t[s], s, t)) break
            }
        }
    }

    function a(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            n = t[s] = t[s] || [],
            r = {
                all: n,
                evt: null,
                found: null
            };
        return e && i && M(n) > 0 && o(n, function(t, n) {
            if (t.eventName == e && t.fn.toString() == i.toString()) return r.found = !0, r.evt = n, !1
        }), r
    }

    function l(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = e.onElement,
            n = e.withCallback,
            s = e.avoidDuplicate,
            r = void 0 === s || s,
            l = e.once,
            u = void 0 !== l && l,
            h = e.useCapture,
            c = void 0 !== h && h,
            d = arguments.length > 2 ? arguments[2] : void 0,
            p = i || [];

        function f(t) {
            k(n) && n.call(d, t, this), u && f.destroy()
        }
        return C(p) && (p = document.querySelectorAll(p)), f.destroy = function() {
            o(p, function(e) {
                var i = a(e, t, f);
                i.found && i.all.splice(i.evt, 1), e.removeEventListener && e.removeEventListener(t, f, c)
            })
        }, o(p, function(e) {
            var i = a(e, t, f);
            (e.addEventListener && r && !i.found || !r) && (e.addEventListener(t, f, c), i.all.push({
                eventName: t,
                fn: f
            }))
        }), f
    }

    function u(t, e) {
        o(e.split(" "), function(e) {
            return t.classList.add(e)
        })
    }

    function h(t, e) {
        o(e.split(" "), function(e) {
            return t.classList.remove(e)
        })
    }

    function c(t, e) {
        return t.classList.contains(e)
    }

    function d(t, e) {
        for (; t !== document.body;) {
            if (!(t = t.parentElement)) return !1;
            if ("function" == typeof t.matches ? t.matches(e) : t.msMatchesSelector(e)) return t
        }
    }

    function p(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!t || "" === e) return !1;
        if ("none" == e) return k(i) && i(), !1;
        var n = b(),
            s = e.split(" ");
        o(s, function(e) {
            u(t, "g" + e)
        }), l(n, {
            onElement: t,
            avoidDuplicate: !1,
            once: !0,
            withCallback: function t(e, n) {
                o(s, function(t) {
                    h(n, "g" + t)
                }), k(i) && i()
            }
        })
    }

    function f(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        if ("" == e) return t.style.webkitTransform = "", t.style.MozTransform = "", t.style.msTransform = "", t.style.OTransform = "", t.style.transform = "", !1;
        t.style.webkitTransform = e, t.style.MozTransform = e, t.style.msTransform = e, t.style.OTransform = e, t.style.transform = e
    }

    function g(t) {
        t.style.display = "block"
    }

    function m(t) {
        t.style.display = "none"
    }

    function y(t) {
        var e = document.createDocumentFragment(),
            i = document.createElement("div");
        for (i.innerHTML = t; i.firstChild;) e.appendChild(i.firstChild);
        return e
    }

    function v() {
        return {
            width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        }
    }

    function b() {
        var t, e = document.createElement("fakeelement"),
            i = {
                animation: "animationend",
                OAnimation: "oAnimationEnd",
                MozAnimation: "animationend",
                WebkitAnimation: "webkitAnimationEnd"
            };
        for (t in i)
            if (void 0 !== e.style[t]) return i[t]
    }

    function $() {
        var t, e = document.createElement("fakeelement"),
            i = {
                transition: "transitionend",
                OTransition: "oTransitionEnd",
                MozTransition: "transitionend",
                WebkitTransition: "webkitTransitionEnd"
            };
        for (t in i)
            if (void 0 !== e.style[t]) return i[t]
    }

    function w(t) {
        var e = t.url,
            i = t.allow,
            n = t.callback,
            s = t.appendTo,
            r = document.createElement("iframe");
        return r.className = "vimeo-video gvideo", r.src = e, r.style.width = "100%", r.style.height = "100%", i && r.setAttribute("allow", i), r.onload = function() {
            u(r, "node-ready"), k(n) && n()
        }, s && s.appendChild(r), r
    }

    function _(t, e, i, n) {
        if (t()) {
            e();
            return
        }
        i || (i = 100);
        var s, r = setInterval(function() {
            t() && (clearInterval(r), s && clearTimeout(s), e())
        }, i);
        n && (s = setTimeout(function() {
            clearInterval(r)
        }, n))
    }

    function x(t, e, i) {
        if (z(t)) {
            console.error("Inject assets error");
            return
        }
        if (k(e) && (i = e, e = !1), C(e) && e in window) {
            k(i) && i();
            return
        }
        if (-1 !== t.indexOf(".css")) {
            if ((n = document.querySelectorAll('link[href="' + t + '"]')) && n.length > 0) {
                k(i) && i();
                return
            }
            var n, s = document.getElementsByTagName("head")[0],
                r = s.querySelectorAll('link[rel="stylesheet"]'),
                o = document.createElement("link");
            o.rel = "stylesheet", o.type = "text/css", o.href = t, o.media = "all", r ? s.insertBefore(o, r[0]) : s.appendChild(o), k(i) && i();
            return
        }
        if ((n = document.querySelectorAll('script[src="' + t + '"]')) && n.length > 0) {
            if (k(i)) {
                if (C(e)) return _(function() {
                    return void 0 !== window[e]
                }, function() {
                    i()
                }), !1;
                i()
            }
            return
        }
        var a = document.createElement("script");
        a.type = "text/javascript", a.src = t, a.onload = function() {
            if (k(i)) {
                if (C(e)) return _(function() {
                    return void 0 !== window[e]
                }, function() {
                    i()
                }), !1;
                i()
            }
        }, document.body.appendChild(a)
    }

    function S() {
        return "navigator" in window && window.navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i)
    }

    function T() {
        return null !== S() || void 0 !== document.createTouch || "ontouchstart" in window || "onmsgesturechange" in window || navigator.msMaxTouchPoints
    }

    function k(t) {
        return "function" == typeof t
    }

    function C(t) {
        return "string" == typeof t
    }

    function A(t) {
        return !!(t && t.nodeType && 1 == t.nodeType)
    }

    function E(t) {
        return Array.isArray(t)
    }

    function I(t) {
        return t && t.length && isFinite(t.length)
    }

    function P(e) {
        return "object" === t(e) && null != e && !k(e) && !E(e)
    }

    function z(t) {
        return null == t
    }

    function L(t, e) {
        return null !== t && hasOwnProperty.call(t, e)
    }

    function M(t) {
        if (!P(t)) return t.length;
        if (t.keys) return t.keys().length;
        var e = 0;
        for (var i in t) L(t, i) && e++;
        return e
    }

    function O(t) {
        return !isNaN(parseFloat(t)) && isFinite(t)
    }

    function D() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1,
            e = document.querySelectorAll(".gbtn[data-taborder]:not(.disabled)");
        if (!e.length) return !1;
        if (1 == e.length) return e[0];
        "string" == typeof t && (t = parseInt(t));
        var i = t < 0 ? 1 : t + 1;
        i > e.length && (i = "1");
        var n = [];
        o(e, function(t) {
            n.push(t.getAttribute("data-taborder"))
        });
        var s = n.filter(function(t) {
            return t >= parseInt(i)
        }).sort()[0];
        return document.querySelector('.gbtn[data-taborder="'.concat(s, '"]'))
    }

    function N(t) {
        if (t.events.hasOwnProperty("keyboard")) return !1;
        t.events.keyboard = l("keydown", {
            onElement: window,
            withCallback: function e(i, n) {
                var s = (i = i || window.event).keyCode;
                if (9 == s) {
                    var r = document.querySelector(".gbtn.focused");
                    if (!r) {
                        var o = !!document.activeElement && !!document.activeElement.nodeName && document.activeElement.nodeName.toLocaleLowerCase();
                        if ("input" == o || "textarea" == o || "button" == o) return
                    }
                    i.preventDefault();
                    var a = document.querySelectorAll(".gbtn[data-taborder]");
                    if (!a || a.length <= 0) return;
                    if (!r) {
                        var l = D();
                        l && (l.focus(), u(l, "focused"));
                        return
                    }
                    var c = D(r.getAttribute("data-taborder"));
                    h(r, "focused"), c && (c.focus(), u(c, "focused"))
                }
                39 == s && t.nextSlide(), 37 == s && t.prevSlide(), 27 == s && t.close()
            }
        })
    }

    function F(t) {
        return Math.sqrt(t.x * t.x + t.y * t.y)
    }

    function j(t, e) {
        return t.x * e.x + t.y * e.y
    }

    function H(t, e) {
        var i = F(t) * F(e);
        if (0 === i) return 0;
        var n = j(t, e) / i;
        return n > 1 && (n = 1), Math.acos(n)
    }

    function q(t, e) {
        return t.x * e.y - e.x * t.y
    }

    function W(t, e) {
        var i = H(t, e);
        return q(t, e) > 0 && (i *= -1), 180 * i / Math.PI
    }
    var R = function() {
        function t(i) {
            e(this, t), this.handlers = [], this.el = i
        }
        return n(t, [{
            key: "add",
            value: function t(e) {
                this.handlers.push(e)
            }
        }, {
            key: "del",
            value: function t(e) {
                e || (this.handlers = []);
                for (var i = this.handlers.length; i >= 0; i--) this.handlers[i] === e && this.handlers.splice(i, 1)
            }
        }, {
            key: "dispatch",
            value: function t() {
                for (var e = 0, i = this.handlers.length; e < i; e++) {
                    var n = this.handlers[e];
                    "function" == typeof n && n.apply(this.el, arguments)
                }
            }
        }]), t
    }();

    function B(t, e) {
        var i = new R(t);
        return i.add(e), i
    }
    var Y = function() {
        function t(i, n) {
            e(this, t), this.element = "string" == typeof i ? document.querySelector(i) : i, this.start = this.start.bind(this), this.move = this.move.bind(this), this.end = this.end.bind(this), this.cancel = this.cancel.bind(this), this.element.addEventListener("touchstart", this.start, !1), this.element.addEventListener("touchmove", this.move, !1), this.element.addEventListener("touchend", this.end, !1), this.element.addEventListener("touchcancel", this.cancel, !1), this.preV = {
                x: null,
                y: null
            }, this.pinchStartLen = null, this.zoom = 1, this.isDoubleTap = !1;
            var s = function t() {};
            this.rotate = B(this.element, n.rotate || s), this.touchStart = B(this.element, n.touchStart || s), this.multipointStart = B(this.element, n.multipointStart || s), this.multipointEnd = B(this.element, n.multipointEnd || s), this.pinch = B(this.element, n.pinch || s), this.swipe = B(this.element, n.swipe || s), this.tap = B(this.element, n.tap || s), this.doubleTap = B(this.element, n.doubleTap || s), this.longTap = B(this.element, n.longTap || s), this.singleTap = B(this.element, n.singleTap || s), this.pressMove = B(this.element, n.pressMove || s), this.twoFingerPressMove = B(this.element, n.twoFingerPressMove || s), this.touchMove = B(this.element, n.touchMove || s), this.touchEnd = B(this.element, n.touchEnd || s), this.touchCancel = B(this.element, n.touchCancel || s), this.translateContainer = this.element, this._cancelAllHandler = this.cancelAll.bind(this), window.addEventListener("scroll", this._cancelAllHandler), this.delta = null, this.last = null, this.now = null, this.tapTimeout = null, this.singleTapTimeout = null, this.longTapTimeout = null, this.swipeTimeout = null, this.x1 = this.x2 = this.y1 = this.y2 = null, this.preTapPosition = {
                x: null,
                y: null
            }
        }
        return n(t, [{
            key: "start",
            value: function t(e) {
                if (e.touches) {
                    var i = ["a", "button", "input"];
                    if (e.target && e.target.nodeName && i.indexOf(e.target.nodeName.toLowerCase()) >= 0) {
                        console.log("ignore drag for this touched element", e.target.nodeName.toLowerCase());
                        return
                    }
                    this.now = Date.now(), this.x1 = e.touches[0].pageX, this.y1 = e.touches[0].pageY, this.delta = this.now - (this.last || this.now), this.touchStart.dispatch(e, this.element), null !== this.preTapPosition.x && (this.isDoubleTap = this.delta > 0 && this.delta <= 250 && 30 > Math.abs(this.preTapPosition.x - this.x1) && 30 > Math.abs(this.preTapPosition.y - this.y1), this.isDoubleTap && clearTimeout(this.singleTapTimeout)), this.preTapPosition.x = this.x1, this.preTapPosition.y = this.y1, this.last = this.now;
                    var n, s = this.preV;
                    if (e.touches.length > 1) {
                        this._cancelLongTap(), this._cancelSingleTap();
                        var r = {
                            x: e.touches[1].pageX - this.x1,
                            y: e.touches[1].pageY - this.y1
                        };
                        s.x = r.x, s.y = r.y, this.pinchStartLen = F(s), this.multipointStart.dispatch(e, this.element)
                    }
                    this._preventTap = !1, this.longTapTimeout = setTimeout((function() {
                        this.longTap.dispatch(e, this.element), this._preventTap = !0
                    }).bind(this), 750)
                }
            }
        }, {
            key: "move",
            value: function t(e) {
                if (e.touches) {
                    var i = this.preV,
                        n = e.touches.length,
                        s = e.touches[0].pageX,
                        r = e.touches[0].pageY;
                    if (this.isDoubleTap = !1, n > 1) {
                        var o = e.touches[1].pageX,
                            a = e.touches[1].pageY,
                            l = {
                                x: e.touches[1].pageX - s,
                                y: e.touches[1].pageY - r
                            };
                        null !== i.x && (this.pinchStartLen > 0 && (e.zoom = F(l) / this.pinchStartLen, this.pinch.dispatch(e, this.element)), e.angle = W(l, i), this.rotate.dispatch(e, this.element)), i.x = l.x, i.y = l.y, null !== this.x2 && null !== this.sx2 ? (e.deltaX = (s - this.x2 + o - this.sx2) / 2, e.deltaY = (r - this.y2 + a - this.sy2) / 2) : (e.deltaX = 0, e.deltaY = 0), this.twoFingerPressMove.dispatch(e, this.element), this.sx2 = o, this.sy2 = a
                    } else {
                        if (null !== this.x2) {
                            e.deltaX = s - this.x2, e.deltaY = r - this.y2;
                            var u = Math.abs(this.x1 - this.x2),
                                h = Math.abs(this.y1 - this.y2);
                            (u > 10 || h > 10) && (this._preventTap = !0)
                        } else e.deltaX = 0, e.deltaY = 0;
                        this.pressMove.dispatch(e, this.element)
                    }
                    this.touchMove.dispatch(e, this.element), this._cancelLongTap(), this.x2 = s, this.y2 = r, n > 1 && e.preventDefault()
                }
            }
        }, {
            key: "end",
            value: function t(e) {
                if (e.changedTouches) {
                    this._cancelLongTap();
                    var i = this;
                    e.touches.length < 2 && (this.multipointEnd.dispatch(e, this.element), this.sx2 = this.sy2 = null), this.x2 && Math.abs(this.x1 - this.x2) > 30 || this.y2 && Math.abs(this.y1 - this.y2) > 30 ? (e.direction = this._swipeDirection(this.x1, this.x2, this.y1, this.y2), this.swipeTimeout = setTimeout(function() {
                        i.swipe.dispatch(e, i.element)
                    }, 0)) : (this.tapTimeout = setTimeout(function() {
                        i._preventTap || i.tap.dispatch(e, i.element), i.isDoubleTap && (i.doubleTap.dispatch(e, i.element), i.isDoubleTap = !1)
                    }, 0), i.isDoubleTap || (i.singleTapTimeout = setTimeout(function() {
                        i.singleTap.dispatch(e, i.element)
                    }, 250))), this.touchEnd.dispatch(e, this.element), this.preV.x = 0, this.preV.y = 0, this.zoom = 1, this.pinchStartLen = null, this.x1 = this.x2 = this.y1 = this.y2 = null
                }
            }
        }, {
            key: "cancelAll",
            value: function t() {
                this._preventTap = !0, clearTimeout(this.singleTapTimeout), clearTimeout(this.tapTimeout), clearTimeout(this.longTapTimeout), clearTimeout(this.swipeTimeout)
            }
        }, {
            key: "cancel",
            value: function t(e) {
                this.cancelAll(), this.touchCancel.dispatch(e, this.element)
            }
        }, {
            key: "_cancelLongTap",
            value: function t() {
                clearTimeout(this.longTapTimeout)
            }
        }, {
            key: "_cancelSingleTap",
            value: function t() {
                clearTimeout(this.singleTapTimeout)
            }
        }, {
            key: "_swipeDirection",
            value: function t(e, i, n, s) {
                return Math.abs(e - i) >= Math.abs(n - s) ? e - i > 0 ? "Left" : "Right" : n - s > 0 ? "Up" : "Down"
            }
        }, {
            key: "on",
            value: function t(e, i) {
                this[e] && this[e].add(i)
            }
        }, {
            key: "off",
            value: function t(e, i) {
                this[e] && this[e].del(i)
            }
        }, {
            key: "destroy",
            value: function t() {
                return this.singleTapTimeout && clearTimeout(this.singleTapTimeout), this.tapTimeout && clearTimeout(this.tapTimeout), this.longTapTimeout && clearTimeout(this.longTapTimeout), this.swipeTimeout && clearTimeout(this.swipeTimeout), this.element.removeEventListener("touchstart", this.start), this.element.removeEventListener("touchmove", this.move), this.element.removeEventListener("touchend", this.end), this.element.removeEventListener("touchcancel", this.cancel), this.rotate.del(), this.touchStart.del(), this.multipointStart.del(), this.multipointEnd.del(), this.pinch.del(), this.swipe.del(), this.tap.del(), this.doubleTap.del(), this.longTap.del(), this.singleTap.del(), this.pressMove.del(), this.twoFingerPressMove.del(), this.touchMove.del(), this.touchEnd.del(), this.touchCancel.del(), this.preV = this.pinchStartLen = this.zoom = this.isDoubleTap = this.delta = this.last = this.now = this.tapTimeout = this.singleTapTimeout = this.longTapTimeout = this.swipeTimeout = this.x1 = this.x2 = this.y1 = this.y2 = this.preTapPosition = this.rotate = this.touchStart = this.multipointStart = this.multipointEnd = this.pinch = this.swipe = this.tap = this.doubleTap = this.longTap = this.singleTap = this.pressMove = this.touchMove = this.touchEnd = this.touchCancel = this.twoFingerPressMove = null, window.removeEventListener("scroll", this._cancelAllHandler), null
            }
        }]), t
    }();

    function V(t) {
        var e = $(),
            i = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            n = c(t, "gslide-media") ? t : t.querySelector(".gslide-media"),
            s = d(n, ".ginner-container"),
            r = t.querySelector(".gslide-description");
        i > 769 && (n = s), u(n, "greset"), f(n, "translate3d(0, 0, 0)"), l(e, {
            onElement: n,
            once: !0,
            withCallback: function t(e, i) {
                h(n, "greset")
            }
        }), n.style.opacity = "", r && (r.style.opacity = "")
    }

    function X(t) {
        if (t.events.hasOwnProperty("touch")) return !1;
        var e, i, n, s = v(),
            r = s.width,
            o = s.height,
            a = !1,
            l = null,
            p = null,
            g = null,
            m = !1,
            y = 1,
            b = 4.5,
            $ = 1,
            w = !1,
            _ = !1,
            x = null,
            S = null,
            T = null,
            k = null,
            C = 0,
            A = 0,
            E = !1,
            I = !1,
            P = {},
            z = {},
            L = 0,
            M = 0,
            O = document.getElementById("glightbox-slider"),
            D = document.querySelector(".goverlay"),
            N = new Y(O, {
                touchStart: function e(i) {
                    a = !0, (c(i.targetTouches[0].target, "ginner-container") || d(i.targetTouches[0].target, ".gslide-desc") || "a" == i.targetTouches[0].target.nodeName.toLowerCase()) && (a = !1), d(i.targetTouches[0].target, ".gslide-inline") && !c(i.targetTouches[0].target.parentNode, "gslide-inline") && (a = !1), a && (z = i.targetTouches[0], P.pageX = i.targetTouches[0].pageX, P.pageY = i.targetTouches[0].pageY, L = i.targetTouches[0].clientX, M = i.targetTouches[0].clientY, p = (l = t.activeSlide).querySelector(".gslide-media"), n = l.querySelector(".gslide-inline"), g = null, c(p, "gslide-image") && (g = p.querySelector("img")), (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) > 769 && (p = l.querySelector(".ginner-container")), h(D, "greset"), (!(i.pageX > 20) || !(i.pageX < window.innerWidth - 20)) && i.preventDefault())
                },
                touchMove: function s(l) {
                    if (a) {
                        if (z = l.targetTouches[0], !w && !_) {
                            if (n && n.offsetHeight > o && 13 >= Math.abs(P.pageX - z.pageX)) return !1;
                            m = !0;
                            var u, h, c, d, y, v = l.targetTouches[0].clientX;
                            if (Math.abs(L - v) > Math.abs(M - l.targetTouches[0].clientY) ? (E = !1, I = !0) : (I = !1, E = !0), C = 100 * (e = z.pageX - P.pageX) / r, A = 100 * (i = z.pageY - P.pageY) / o, E && g && (u = 1 - Math.abs(i) / o, D.style.opacity = u, t.settings.touchFollowAxis && (C = 0)), I && (u = 1 - Math.abs(e) / r, p.style.opacity = u, t.settings.touchFollowAxis && (A = 0)), !g) return f(p, "translate3d(".concat(C, "%, 0, 0)"));
                            f(p, "translate3d(".concat(C, "%, ").concat(A, "%, 0)"))
                        }
                    }
                },
                touchEnd: function e() {
                    if (a) {
                        if (m = !1, _ || w) {
                            T = x, k = S;
                            return
                        }
                        var i = Math.abs(parseInt(A)),
                            n = Math.abs(parseInt(C));
                        if (i > 29 && g) {
                            t.close();
                            return
                        }
                        if (i < 29 && n < 25) return u(D, "greset"), D.style.opacity = 1, V(p)
                    }
                },
                multipointEnd: function t() {
                    setTimeout(function() {
                        w = !1
                    }, 50)
                },
                multipointStart: function t() {
                    w = !0, y = $ || 1
                },
                pinch: function t(e) {
                    if (!g || m) return !1;
                    w = !0, g.scaleX = g.scaleY = y * e.zoom;
                    var i = y * e.zoom;
                    if (_ = !0, i <= 1) {
                        _ = !1, i = 1, k = null, T = null, x = null, S = null, g.setAttribute("style", "");
                        return
                    }
                    i > b && (i = b), g.style.transform = "scale3d(".concat(i, ", ").concat(i, ", 1)"), $ = i
                },
                pressMove: function t(e) {
                    if (_ && !w) {
                        var i = z.pageX - P.pageX,
                            n = z.pageY - P.pageY;
                        T && (i += T), k && (n += k), x = i, S = n;
                        var s = "translate3d(".concat(i, "px, ").concat(n, "px, 0)");
                        $ && (s += " scale3d(".concat($, ", ").concat($, ", 1)")), f(g, s)
                    }
                },
                swipe: function e(i) {
                    if (!_) {
                        if (w) {
                            w = !1;
                            return
                        }
                        if ("Left" == i.direction) {
                            if (t.index == t.elements.length - 1) return V(p);
                            t.nextSlide()
                        }
                        if ("Right" == i.direction) {
                            if (0 == t.index) return V(p);
                            t.prevSlide()
                        }
                    }
                }
            });
        t.events.touch = N
    }
    var U = function() {
            function t(i, n) {
                var s = this,
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                if (e(this, t), this.img = i, this.slide = n, this.onclose = r, this.img.setZoomEvents) return !1;
                this.active = !1, this.zoomedIn = !1, this.dragging = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.img.addEventListener("mousedown", function(t) {
                    return s.dragStart(t)
                }, !1), this.img.addEventListener("mouseup", function(t) {
                    return s.dragEnd(t)
                }, !1), this.img.addEventListener("mousemove", function(t) {
                    return s.drag(t)
                }, !1), this.img.addEventListener("click", function(t) {
                    return s.slide.classList.contains("dragging-nav") ? (s.zoomOut(), !1) : s.zoomedIn ? void(s.zoomedIn && !s.dragging && s.zoomOut()) : s.zoomIn()
                }, !1), this.img.setZoomEvents = !0
            }
            return n(t, [{
                key: "zoomIn",
                value: function t() {
                    var e = this.widowWidth();
                    if (!this.zoomedIn && !(e <= 768)) {
                        var i = this.img;
                        if (i.setAttribute("data-style", i.getAttribute("style")), i.style.maxWidth = i.naturalWidth + "px", i.style.maxHeight = i.naturalHeight + "px", i.naturalWidth > e) {
                            var n = e / 2 - i.naturalWidth / 2;
                            this.setTranslate(this.img.parentNode, n, 0)
                        }
                        this.slide.classList.add("zoomed"), this.zoomedIn = !0
                    }
                }
            }, {
                key: "zoomOut",
                value: function t() {
                    this.img.parentNode.setAttribute("style", ""), this.img.setAttribute("style", this.img.getAttribute("data-style")), this.slide.classList.remove("zoomed"), this.zoomedIn = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.onclose && "function" == typeof this.onclose && this.onclose()
                }
            }, {
                key: "dragStart",
                value: function t(e) {
                    if (e.preventDefault(), !this.zoomedIn) {
                        this.active = !1;
                        return
                    }
                    "touchstart" === e.type ? (this.initialX = e.touches[0].clientX - this.xOffset, this.initialY = e.touches[0].clientY - this.yOffset) : (this.initialX = e.clientX - this.xOffset, this.initialY = e.clientY - this.yOffset), e.target === this.img && (this.active = !0, this.img.classList.add("dragging"))
                }
            }, {
                key: "dragEnd",
                value: function t(e) {
                    var i = this;
                    e.preventDefault(), this.initialX = this.currentX, this.initialY = this.currentY, this.active = !1, setTimeout(function() {
                        i.dragging = !1, i.img.isDragging = !1, i.img.classList.remove("dragging")
                    }, 100)
                }
            }, {
                key: "drag",
                value: function t(e) {
                    this.active && (e.preventDefault(), "touchmove" === e.type ? (this.currentX = e.touches[0].clientX - this.initialX, this.currentY = e.touches[0].clientY - this.initialY) : (this.currentX = e.clientX - this.initialX, this.currentY = e.clientY - this.initialY), this.xOffset = this.currentX, this.yOffset = this.currentY, this.img.isDragging = !0, this.dragging = !0, this.setTranslate(this.img, this.currentX, this.currentY))
                }
            }, {
                key: "onMove",
                value: function t(e) {
                    if (this.zoomedIn) {
                        var i = e.clientX - this.img.naturalWidth / 2,
                            n = e.clientY - this.img.naturalHeight / 2;
                        this.setTranslate(this.img, i, n)
                    }
                }
            }, {
                key: "setTranslate",
                value: function t(e, i, n) {
                    e.style.transform = "translate3d(" + i + "px, " + n + "px, 0)"
                }
            }, {
                key: "widowWidth",
                value: function t() {
                    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
                }
            }]), t
        }(),
        Q = function() {
            function t() {
                var i = this,
                    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                e(this, t);
                var s = n.dragEl,
                    r = n.toleranceX,
                    o = void 0 === r ? 40 : r,
                    a = n.toleranceY,
                    l = void 0 === a ? 65 : a,
                    u = n.slide,
                    h = void 0 === u ? null : u,
                    c = n.instance,
                    d = void 0 === c ? null : c;
                this.el = s, this.active = !1, this.dragging = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.direction = null, this.lastDirection = null, this.toleranceX = o, this.toleranceY = l, this.toleranceReached = !1, this.dragContainer = this.el, this.slide = h, this.instance = d, this.el.addEventListener("mousedown", function(t) {
                    return i.dragStart(t)
                }, !1), this.el.addEventListener("mouseup", function(t) {
                    return i.dragEnd(t)
                }, !1), this.el.addEventListener("mousemove", function(t) {
                    return i.drag(t)
                }, !1)
            }
            return n(t, [{
                key: "dragStart",
                value: function t(e) {
                    if (this.slide.classList.contains("zoomed")) {
                        this.active = !1;
                        return
                    }
                    "touchstart" === e.type ? (this.initialX = e.touches[0].clientX - this.xOffset, this.initialY = e.touches[0].clientY - this.yOffset) : (this.initialX = e.clientX - this.xOffset, this.initialY = e.clientY - this.yOffset);
                    var i = e.target.nodeName.toLowerCase(),
                        n = ["input", "select", "textarea", "button", "a"];
                    if (e.target.classList.contains("nodrag") || d(e.target, ".nodrag") || -1 !== n.indexOf(i)) {
                        this.active = !1;
                        return
                    }
                    e.preventDefault(), (e.target === this.el || "img" !== i && d(e.target, ".gslide-inline")) && (this.active = !0, this.el.classList.add("dragging"), this.dragContainer = d(e.target, ".ginner-container"))
                }
            }, {
                key: "dragEnd",
                value: function t(e) {
                    var i = this;
                    e && e.preventDefault(), this.initialX = 0, this.initialY = 0, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.active = !1, this.doSlideChange && (this.instance.preventOutsideClick = !0, "right" == this.doSlideChange && this.instance.prevSlide(), "left" == this.doSlideChange && this.instance.nextSlide()), this.doSlideClose && this.instance.close(), this.toleranceReached || this.setTranslate(this.dragContainer, 0, 0, !0), setTimeout(function() {
                        i.instance.preventOutsideClick = !1, i.toleranceReached = !1, i.lastDirection = null, i.dragging = !1, i.el.isDragging = !1, i.el.classList.remove("dragging"), i.slide.classList.remove("dragging-nav"), i.dragContainer.style.transform = "", i.dragContainer.style.transition = ""
                    }, 100)
                }
            }, {
                key: "drag",
                value: function t(e) {
                    if (this.active) {
                        e.preventDefault(), this.slide.classList.add("dragging-nav"), "touchmove" === e.type ? (this.currentX = e.touches[0].clientX - this.initialX, this.currentY = e.touches[0].clientY - this.initialY) : (this.currentX = e.clientX - this.initialX, this.currentY = e.clientY - this.initialY), this.xOffset = this.currentX, this.yOffset = this.currentY, this.el.isDragging = !0, this.dragging = !0, this.doSlideChange = !1, this.doSlideClose = !1;
                        var i = Math.abs(this.currentX),
                            n = Math.abs(this.currentY);
                        if (i > 0 && i >= Math.abs(this.currentY) && (!this.lastDirection || "x" == this.lastDirection)) {
                            this.yOffset = 0, this.lastDirection = "x", this.setTranslate(this.dragContainer, this.currentX, 0);
                            var s = this.shouldChange();
                            if (!this.instance.settings.dragAutoSnap && s && (this.doSlideChange = s), this.instance.settings.dragAutoSnap && s) {
                                this.instance.preventOutsideClick = !0, this.toleranceReached = !0, this.active = !1, this.instance.preventOutsideClick = !0, this.dragEnd(null), "right" == s && this.instance.prevSlide(), "left" == s && this.instance.nextSlide();
                                return
                            }
                        }
                        if (this.toleranceY > 0 && n > 0 && n >= i && (!this.lastDirection || "y" == this.lastDirection)) {
                            this.xOffset = 0, this.lastDirection = "y", this.setTranslate(this.dragContainer, 0, this.currentY);
                            var r = this.shouldClose();
                            !this.instance.settings.dragAutoSnap && r && (this.doSlideClose = !0), this.instance.settings.dragAutoSnap && r && this.instance.close();
                            return
                        }
                    }
                }
            }, {
                key: "shouldChange",
                value: function t() {
                    var e = !1;
                    if (Math.abs(this.currentX) >= this.toleranceX) {
                        var i = this.currentX > 0 ? "right" : "left";
                        ("left" == i && this.slide !== this.slide.parentNode.lastChild || "right" == i && this.slide !== this.slide.parentNode.firstChild) && (e = i)
                    }
                    return e
                }
            }, {
                key: "shouldClose",
                value: function t() {
                    var e = !1;
                    return Math.abs(this.currentY) >= this.toleranceY && (e = !0), e
                }
            }, {
                key: "setTranslate",
                value: function t(e, i, n) {
                    var s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    s ? e.style.transition = "all .2s ease" : e.style.transition = "", e.style.transform = "translate3d(".concat(i, "px, ").concat(n, "px, 0)")
                }
            }]), t
        }();

    function G(t, e, i, n) {
        var s = t.querySelector(".gslide-media"),
            r = new Image,
            o = "gSlideTitle_" + i,
            a = "gSlideDesc_" + i;
        r.addEventListener("load", function() {
            k(n) && n()
        }, !1), r.src = e.href, "" != e.sizes && "" != e.srcset && (r.sizes = e.sizes, r.srcset = e.srcset), r.alt = "", z(e.alt) || "" === e.alt || (r.alt = e.alt), "" !== e.title && r.setAttribute("aria-labelledby", o), "" !== e.description && r.setAttribute("aria-describedby", a), e.hasOwnProperty("_hasCustomWidth") && e._hasCustomWidth && (r.style.width = e.width), e.hasOwnProperty("_hasCustomHeight") && e._hasCustomHeight && (r.style.height = e.height), s.insertBefore(r, s.firstChild)
    }

    function Z(t, e, i, n) {
        var s = this,
            r = t.querySelector(".ginner-container"),
            o = "gvideo" + i,
            a = t.querySelector(".gslide-media"),
            l = this.getAllPlayers();
        u(r, "gvideo-container"), a.insertBefore(y('<div class="gvideo-wrapper"></div>'), a.firstChild);
        var h = t.querySelector(".gvideo-wrapper");
        x(this.settings.plyr.css, "Plyr");
        var c = e.href,
            d = location.protocol.replace(":", ""),
            p = "",
            f = "",
            g = !1;
        "file" == d && (d = "http"), a.style.maxWidth = e.width, x(this.settings.plyr.js, "Plyr", function() {
            if (c.match(/vimeo\.com\/([0-9]*)/)) {
                p = "vimeo", f = /vimeo.*\/(\d+)/i.exec(c)[1]
            }
            if (c.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || c.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || c.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)) {
                p = "youtube", f = K(c)
            }
            if (null !== c.match(/\.(mp4|ogg|webm|mov)$/)) {
                p = "local";
                var r, a, d = '<video id="' + o + '" ';
                d += 'style="background:#000; max-width: '.concat(e.width, ';" '), d += 'preload="metadata" ', d += 'poster="' + e.poster + '" ', d += 'x-webkit-airplay="allow" ', d += "playsinline ", d += "controls ", d += 'class="gvideo-local">';
                var m = c.toLowerCase().split(".").pop(),
                    v = {
                        mp4: "",
                        ogg: "",
                        webm: ""
                    };
                for (var b in v[m = "mov" == m ? "mp4" : m] = c, v)
                    if (v.hasOwnProperty(b)) {
                        var $ = v[b];
                        e.hasOwnProperty(b) && ($ = e[b]), "" !== $ && (d += '<source src="'.concat($, '" type="video/').concat(b, '">'))
                    }
                d += "</video>", g = y(d)
            }
            var w = g || y('<div id="'.concat(o, '" data-plyr-provider="').concat(p, '" data-plyr-embed-id="').concat(f, '"></div>'));
            u(h, "".concat(p, "-video gvideo")), h.appendChild(w), h.setAttribute("data-id", o), h.setAttribute("data-index", i);
            var x = L(s.settings.plyr, "config") ? s.settings.plyr.config : {},
                S = new Plyr("#" + o, x);
            S.on("ready", function(t) {
                var e = t.detail.plyr;
                l[o] = e, k(n) && n()
            }), _(function() {
                return t.querySelector("iframe") && "true" == t.querySelector("iframe").dataset.ready
            }, function() {
                s.resize(t)
            }), S.on("enterfullscreen", J), S.on("exitfullscreen", J)
        })
    }

    function K(t) {
        var e = "";
        return void 0 !== (t = t.replace(/(>|<)/gi, "").split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/))[2] ? (e = t[2].split(/[^0-9a-z_\-]/i))[0] : t
    }

    function J(t) {
        var e = d(t.target, ".gslide-media");
        "enterfullscreen" == t.type && u(e, "fullscreen"), "exitfullscreen" == t.type && h(e, "fullscreen")
    }

    function tt(t, e, i, n) {
        var s, r = this,
            o = t.querySelector(".gslide-media"),
            a = !!L(e, "href") && !!e.href && e.href.split("#").pop().trim(),
            h = !!L(e, "content") && !!e.content && e.content;
        if (h && (C(h) && (s = y('<div class="ginlined-content">'.concat(h, "</div>"))), A(h))) {
            "none" == h.style.display && (h.style.display = "block");
            var c = document.createElement("div");
            c.className = "ginlined-content", c.appendChild(h), s = c
        }
        if (a) {
            var d = document.getElementById(a);
            if (!d) return !1;
            var p = d.cloneNode(!0);
            p.style.height = e.height, p.style.maxWidth = e.width, u(p, "ginlined-content"), s = p
        }
        if (!s) return console.error("Unable to append inline slide content", e), !1;
        o.style.height = e.height, o.style.width = e.width, o.appendChild(s), this.events["inlineclose" + a] = l("click", {
            onElement: o.querySelectorAll(".gtrigger-close"),
            withCallback: function t(e) {
                e.preventDefault(), r.close()
            }
        }), k(n) && n()
    }

    function te(t, e, i, n) {
        var s = t.querySelector(".gslide-media"),
            r = w({
                url: e.href,
                callback: n
            });
        s.parentNode.style.maxWidth = e.width, s.parentNode.style.height = e.height, s.appendChild(r)
    }
    var ti = function() {
            function t() {
                var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                e(this, t), this.defaults = {
                    href: "",
                    sizes: "",
                    srcset: "",
                    title: "",
                    type: "",
                    description: "",
                    alt: "",
                    descPosition: "bottom",
                    effect: "",
                    width: "",
                    height: "",
                    content: !1,
                    zoomable: !0,
                    draggable: !0
                }, P(i) && (this.defaults = r(this.defaults, i))
            }
            return n(t, [{
                key: "sourceType",
                value: function t(e) {
                    var i = e;
                    return null !== (e = e.toLowerCase()).match(/\.(jpeg|jpg|jpe|gif|png|apn|webp|avif|svg)/) ? "image" : e.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || e.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || e.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/) || e.match(/vimeo\.com\/([0-9]*)/) || null !== e.match(/\.(mp4|ogg|webm|mov)/) ? "video" : null !== e.match(/\.(mp3|wav|wma|aac|ogg)/) ? "audio" : e.indexOf("#") > -1 && "" !== i.split("#").pop().trim() ? "inline" : e.indexOf("goajax=true") > -1 ? "ajax" : "external"
                }
            }, {
                key: "parseConfig",
                value: function t(e, i) {
                    var n, s = this,
                        a = r({
                            descPosition: i.descPosition
                        }, this.defaults);
                    if (P(e) && !A(e)) {
                        !L(e, "type") && (L(e, "content") && e.content ? e.type = "inline" : L(e, "href") && (e.type = this.sourceType(e.href)));
                        var l = r(a, e);
                        return this.setSize(l, i), l
                    }
                    var u = "",
                        h = e.getAttribute("data-glightbox"),
                        c = e.nodeName.toLowerCase();
                    if ("a" === c && (u = e.href), "img" === c && (u = e.src, a.alt = e.alt), a.href = u, o(a, function(t, n) {
                            L(i, n) && "width" !== n && (a[n] = i[n]);
                            var r = e.dataset[n];
                            z(r) || (a[n] = s.sanitizeValue(r))
                        }), a.content && (a.type = "inline"), !a.type && u && (a.type = this.sourceType(u)), z(h)) {
                        if (!a.title && "a" == c) {
                            var d = e.title;
                            z(d) || "" === d || (a.title = d)
                        }
                        if (!a.title && "img" == c) {
                            var p = e.alt;
                            z(p) || "" === p || (a.title = p)
                        }
                    } else {
                        var f = [];
                        o(a, function(t, e) {
                            f.push(";\\s?" + e)
                        }), f = f.join("\\s?:|"), "" !== h.trim() && o(a, function(t, e) {
                            var i = h,
                                n = RegExp("s?" + e + "s?:s?(.*?)(" + f + "s?:|$)"),
                                r = i.match(n);
                            if (r && r.length && r[1]) {
                                var o = r[1].trim().replace(/;\s*$/, "");
                                a[e] = s.sanitizeValue(o)
                            }
                        })
                    }
                    if (a.description && "." === a.description.substring(0, 1)) {
                        try {
                            n = document.querySelector(a.description).innerHTML
                        } catch (g) {
                            if (!(g instanceof DOMException)) throw g
                        }
                        n && (a.description = n)
                    }
                    if (!a.description) {
                        var m = e.querySelector(".glightbox-desc");
                        m && (a.description = m.innerHTML)
                    }
                    return this.setSize(a, i, e), this.slideConfig = a, a
                }
            }, {
                key: "setSize",
                value: function t(e, i) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        s = "video" == e.type ? this.checkSize(i.videosWidth) : this.checkSize(i.width),
                        r = this.checkSize(i.height);
                    return e.width = L(e, "width") && "" !== e.width ? this.checkSize(e.width) : s, e.height = L(e, "height") && "" !== e.height ? this.checkSize(e.height) : r, n && "image" == e.type && (e._hasCustomWidth = !!n.dataset.width, e._hasCustomHeight = !!n.dataset.height), e
                }
            }, {
                key: "checkSize",
                value: function t(e) {
                    return O(e) ? "".concat(e, "px") : e
                }
            }, {
                key: "sanitizeValue",
                value: function t(e) {
                    return "true" !== e && "false" !== e ? e : "true" === e
                }
            }]), t
        }(),
        tn = function() {
            function t(i, n, s) {
                e(this, t), this.element = i, this.instance = n, this.index = s
            }
            return n(t, [{
                key: "setContent",
                value: function t() {
                    var e = this,
                        i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (c(i, "loaded")) return !1;
                    var s = this.instance.settings,
                        r = this.slideConfig,
                        o = S();
                    k(s.beforeSlideLoad) && s.beforeSlideLoad({
                        index: this.index,
                        slide: i,
                        player: !1
                    });
                    var a = r.type,
                        l = r.descPosition,
                        h = i.querySelector(".gslide-media"),
                        d = i.querySelector(".gslide-title"),
                        p = i.querySelector(".gslide-desc"),
                        f = i.querySelector(".gdesc-inner"),
                        g = n,
                        m = "gSlideTitle_" + this.index,
                        y = "gSlideDesc_" + this.index;
                    if (k(s.afterSlideLoad) && (g = function t() {
                            k(n) && n(), s.afterSlideLoad({
                                index: e.index,
                                slide: i,
                                player: e.instance.getSlidePlayerInstance(e.index)
                            })
                        }), "" == r.title && "" == r.description ? f && f.parentNode.parentNode.removeChild(f.parentNode) : (d && "" !== r.title ? (d.id = m, d.innerHTML = r.title) : d.parentNode.removeChild(d), p && "" !== r.description ? (p.id = y, o && s.moreLength > 0 ? (r.smallDescription = this.slideShortDesc(r.description, s.moreLength, s.moreText), p.innerHTML = r.smallDescription, this.descriptionEvents(p, r)) : p.innerHTML = r.description) : p.parentNode.removeChild(p), u(h.parentNode, "desc-".concat(l)), u(f.parentNode, "description-".concat(l))), u(h, "gslide-".concat(a)), u(i, "loaded"), "video" === a) {
                        Z.apply(this.instance, [i, r, this.index, g]);
                        return
                    }
                    if ("external" === a) {
                        te.apply(this, [i, r, this.index, g]);
                        return
                    }
                    if ("inline" === a) {
                        tt.apply(this.instance, [i, r, this.index, g]), r.draggable && new Q({
                            dragEl: i.querySelector(".gslide-inline"),
                            toleranceX: s.dragToleranceX,
                            toleranceY: s.dragToleranceY,
                            slide: i,
                            instance: this.instance
                        });
                        return
                    }
                    if ("image" === a) {
                        G(i, r, this.index, function() {
                            var t = i.querySelector("img");
                            r.draggable && new Q({
                                dragEl: t,
                                toleranceX: s.dragToleranceX,
                                toleranceY: s.dragToleranceY,
                                slide: i,
                                instance: e.instance
                            }), r.zoomable && t.naturalWidth > t.offsetWidth && (u(t, "zoomable"), new U(t, i, function() {
                                e.instance.resize()
                            })), k(g) && g()
                        });
                        return
                    }
                    k(g) && g()
                }
            }, {
                key: "slideShortDesc",
                value: function t(e) {
                    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 50,
                        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        s = document.createElement("div");
                    s.innerHTML = e;
                    var r = s.innerText,
                        o = n;
                    if ((e = r.trim()).length <= i) return e;
                    var a = e.substr(0, i - 1);
                    return o ? (s = null, a + '... <a href="#" class="desc-more">' + n + "</a>") : a
                }
            }, {
                key: "descriptionEvents",
                value: function t(e, i) {
                    var n = this,
                        s = e.querySelector(".desc-more");
                    if (!s) return !1;
                    l("click", {
                        onElement: s,
                        withCallback: function t(e, s) {
                            e.preventDefault();
                            var r = document.body,
                                o = d(s, ".gslide-desc");
                            if (!o) return !1;
                            o.innerHTML = i.description, u(r, "gdesc-open");
                            var a = l("click", {
                                onElement: [r, d(o, ".gslide-description")],
                                withCallback: function t(e, s) {
                                    "a" !== e.target.nodeName.toLowerCase() && (h(r, "gdesc-open"), u(r, "gdesc-closed"), o.innerHTML = i.smallDescription, n.descriptionEvents(o, i), setTimeout(function() {
                                        h(r, "gdesc-closed")
                                    }, 400), a.destroy())
                                }
                            })
                        }
                    })
                }
            }, {
                key: "create",
                value: function t() {
                    return y(this.instance.settings.slideHTML)
                }
            }, {
                key: "getConfig",
                value: function t() {
                    A(this.element) || this.element.hasOwnProperty("draggable") || (this.element.draggable = this.instance.settings.draggable);
                    var e = new ti(this.instance.settings.slideExtraAttributes);
                    return this.slideConfig = e.parseConfig(this.element, this.instance.settings), this.slideConfig
                }
            }]), t
        }(),
        ts = "3.1.1",
        tr = S(),
        to = T(),
        ta = document.getElementsByTagName("html")[0],
        tl = {
            selector: ".glightbox",
            elements: null,
            skin: "clean",
            theme: "clean",
            closeButton: !0,
            startAt: null,
            autoplayVideos: !0,
            autofocusVideos: !0,
            descPosition: "bottom",
            width: "900px",
            height: "506px",
            videosWidth: "960px",
            beforeSlideChange: null,
            afterSlideChange: null,
            beforeSlideLoad: null,
            afterSlideLoad: null,
            slideInserted: null,
            slideRemoved: null,
            slideExtraAttributes: null,
            onOpen: null,
            onClose: null,
            loop: !1,
            zoomable: !0,
            draggable: !0,
            dragAutoSnap: !1,
            dragToleranceX: 40,
            dragToleranceY: 65,
            preload: !0,
            oneSlidePerOpen: !1,
            touchNavigation: !0,
            touchFollowAxis: !0,
            keyboardNavigation: !0,
            closeOnOutsideClick: !0,
            plugins: !1,
            plyr: {
                css: "https://cdn.plyr.io/3.6.8/plyr.css",
                js: "https://cdn.plyr.io/3.6.8/plyr.js",
                config: {
                    ratio: "16:9",
                    fullscreen: {
                        enabled: !0,
                        iosNative: !0
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
            },
            openEffect: "zoom",
            closeEffect: "zoom",
            slideEffect: "slide",
            moreText: "See more",
            moreLength: 60,
            cssEfects: {
                fade: { in: "fadeIn",
                    out: "fadeOut"
                },
                zoom: { in: "zoomIn",
                    out: "zoomOut"
                },
                slide: { in: "slideInRight",
                    out: "slideOutLeft"
                },
                slideBack: { in: "slideInLeft",
                    out: "slideOutRight"
                },
                none: { in: "none",
                    out: "none"
                }
            },
            svg: {
                close: '<i class="fa-solid fa-xmark"></i>',
                next: '<i class="fa-solid fa-chevron-right"></i>',
                prev: '<i class="fa-solid fa-chevron-left"></i>'
            }
        };
    tl.slideHTML = '<div class="gslide">\n    <div class="gslide-inner-content">\n        <div class="ginner-container">\n            <div class="gslide-media">\n            </div>\n            <div class="gslide-description">\n                <div class="gdesc-inner">\n                    <h4 class="gslide-title"></h4>\n                    <div class="gslide-desc"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>', tl.lightboxHTML = '<div id="glightbox-body" class="glightbox-container" tabindex="-1" role="dialog" aria-hidden="false">\n    <div class="gloader visible"></div>\n    <div class="goverlay"></div>\n    <div class="gcontainer">\n    <div id="glightbox-slider" class="gslider"></div>\n    <button class="gclose gbtn" aria-label="Close" data-taborder="3">{closeSVG}</button>\n    <button class="gprev gbtn" aria-label="Previous" data-taborder="2">{prevSVG}</button>\n    <button class="gnext gbtn" aria-label="Next" data-taborder="1">{nextSVG}</button>\n</div>\n</div>';
    var tu = function() {
        function t() {
            var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            e(this, t), this.customOptions = i, this.settings = r(tl, i), this.effectsClasses = this.getAnimationClasses(), this.videoPlayers = {}, this.apiEvents = [], this.fullElementsList = !1
        }
        return n(t, [{
            key: "init",
            value: function t() {
                var e = this,
                    i = this.getSelector();
                i && (this.baseEvents = l("click", {
                    onElement: i,
                    withCallback: function t(i, n) {
                        i.preventDefault(), e.open(n)
                    }
                })), this.elements = this.getElements()
            }
        }, {
            key: "open",
            value: function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (0 == this.elements.length) return !1;
                this.activeSlide = null, this.prevActiveSlideIndex = null, this.prevActiveSlide = null;
                var n = O(i) ? i : this.settings.startAt;
                if (A(e)) {
                    var s = e.getAttribute("data-gallery");
                    s && (this.fullElementsList = this.elements, this.elements = this.getGalleryElements(this.elements, s)), z(n) && (n = this.getElementIndex(e)) < 0 && (n = 0)
                }
                O(n) || (n = 0), this.build(), p(this.overlay, "none" == this.settings.openEffect ? "none" : this.settings.cssEfects.fade.in);
                var r = document.body;
                if (window.innerWidth - document.documentElement.clientWidth > 0) {
                    var o = document.createElement("style");
                    o.type = "text/css", o.className = "gcss-styles", document.head.appendChild(o), u(r, "gscrollbar-fixer")
                }
                u(r, "glightbox-open"), u(ta, "glightbox-open"), tr && (u(document.body, "glightbox-mobile"), this.settings.slideEffect = "slide", this.settings.autoplayVideos = !1), this.showSlide(n, !0), 1 == this.elements.length ? (u(this.prevButton, "glightbox-button-hidden"), u(this.nextButton, "glightbox-button-hidden")) : (h(this.prevButton, "glightbox-button-hidden"), h(this.nextButton, "glightbox-button-hidden")), this.lightboxOpen = !0, this.trigger("open"), k(this.settings.onOpen) && this.settings.onOpen(), to && this.settings.touchNavigation && X(this), this.settings.keyboardNavigation && N(this)
            }
        }, {
            key: "openAt",
            value: function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                this.open(null, e)
            }
        }, {
            key: "showSlide",
            value: function t() {
                var e = this,
                    i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                g(this.loader), this.index = parseInt(i);
                var s = this.slidesContainer.querySelector(".current");
                s && h(s, "current"), this.slideAnimateOut();
                var r = this.slidesContainer.querySelectorAll(".gslide")[i];
                if (c(r, "loaded")) this.slideAnimateIn(r, n), m(this.loader);
                else {
                    g(this.loader);
                    var o = this.elements[i],
                        a = {
                            index: this.index,
                            slide: r,
                            slideNode: r,
                            slideConfig: o.slideConfig,
                            slideIndex: this.index,
                            trigger: o.node,
                            player: null
                        };
                    this.trigger("slide_before_load", a), o.instance.setContent(r, function() {
                        m(e.loader), e.resize(), e.slideAnimateIn(r, n), e.trigger("slide_after_load", a)
                    })
                }
                this.slideDescription = r.querySelector(".gslide-description"), this.slideDescriptionContained = this.slideDescription && c(this.slideDescription.parentNode, "gslide-media"), this.settings.preload && (this.preloadSlide(i + 1), this.preloadSlide(i - 1)), this.updateNavigationClasses(), this.activeSlide = r
            }
        }, {
            key: "preloadSlide",
            value: function t(e) {
                var i = this;
                if (e < 0 || e > this.elements.length - 1 || z(this.elements[e])) return !1;
                var n = this.slidesContainer.querySelectorAll(".gslide")[e];
                if (c(n, "loaded")) return !1;
                var s = this.elements[e],
                    r = s.type,
                    o = {
                        index: e,
                        slide: n,
                        slideNode: n,
                        slideConfig: s.slideConfig,
                        slideIndex: e,
                        trigger: s.node,
                        player: null
                    };
                this.trigger("slide_before_load", o), "video" == r || "external" == r ? setTimeout(function() {
                    s.instance.setContent(n, function() {
                        i.trigger("slide_after_load", o)
                    })
                }, 200) : s.instance.setContent(n, function() {
                    i.trigger("slide_after_load", o)
                })
            }
        }, {
            key: "prevSlide",
            value: function t() {
                this.goToSlide(this.index - 1)
            }
        }, {
            key: "nextSlide",
            value: function t() {
                this.goToSlide(this.index + 1)
            }
        }, {
            key: "goToSlide",
            value: function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (this.prevActiveSlide = this.activeSlide, this.prevActiveSlideIndex = this.index, !this.loop() && (e < 0 || e > this.elements.length - 1)) return !1;
                e < 0 ? e = this.elements.length - 1 : e >= this.elements.length && (e = 0), this.showSlide(e)
            }
        }, {
            key: "insertSlide",
            value: function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
                i < 0 && (i = this.elements.length);
                var n = new tn(e, this, i),
                    s = n.getConfig(),
                    o = r({}, s),
                    a = n.create(),
                    l = this.elements.length - 1;
                o.index = i, o.node = !1, o.instance = n, o.slideConfig = s, this.elements.splice(i, 0, o);
                var u = null,
                    h = null;
                if (this.slidesContainer) {
                    if (i > l) this.slidesContainer.appendChild(a);
                    else {
                        var c = this.slidesContainer.querySelectorAll(".gslide")[i];
                        this.slidesContainer.insertBefore(a, c)
                    }(this.settings.preload && 0 == this.index && 0 == i || this.index - 1 == i || this.index + 1 == i) && this.preloadSlide(i), 0 == this.index && 0 == i && (this.index = 1), this.updateNavigationClasses(), u = this.slidesContainer.querySelectorAll(".gslide")[i], h = this.getSlidePlayerInstance(i), o.slideNode = u
                }
                this.trigger("slide_inserted", {
                    index: i,
                    slide: u,
                    slideNode: u,
                    slideConfig: s,
                    slideIndex: i,
                    trigger: null,
                    player: h
                }), k(this.settings.slideInserted) && this.settings.slideInserted({
                    index: i,
                    slide: u,
                    player: h
                })
            }
        }, {
            key: "removeSlide",
            value: function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
                if (e < 0 || e > this.elements.length - 1) return !1;
                var i = this.slidesContainer && this.slidesContainer.querySelectorAll(".gslide")[e];
                i && (this.getActiveSlideIndex() == e && (e == this.elements.length - 1 ? this.prevSlide() : this.nextSlide()), i.parentNode.removeChild(i)), this.elements.splice(e, 1), this.trigger("slide_removed", e), k(this.settings.slideRemoved) && this.settings.slideRemoved(e)
            }
        }, {
            key: "slideAnimateIn",
            value: function t(e, i) {
                var n = this,
                    s = e.querySelector(".gslide-media"),
                    r = e.querySelector(".gslide-description"),
                    o = {
                        index: this.prevActiveSlideIndex,
                        slide: this.prevActiveSlide,
                        slideNode: this.prevActiveSlide,
                        slideIndex: this.prevActiveSlide,
                        slideConfig: z(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig,
                        trigger: z(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node,
                        player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
                    },
                    a = {
                        index: this.index,
                        slide: this.activeSlide,
                        slideNode: this.activeSlide,
                        slideConfig: this.elements[this.index].slideConfig,
                        slideIndex: this.index,
                        trigger: this.elements[this.index].node,
                        player: this.getSlidePlayerInstance(this.index)
                    };
                if (s.offsetWidth > 0 && r && (m(r), r.style.display = ""), h(e, this.effectsClasses), i) p(e, this.settings.cssEfects[this.settings.openEffect].in, function() {
                    n.settings.autoplayVideos && n.slidePlayerPlay(e), n.trigger("slide_changed", {
                        prev: o,
                        current: a
                    }), k(n.settings.afterSlideChange) && n.settings.afterSlideChange.apply(n, [o, a])
                });
                else {
                    var l = this.settings.slideEffect,
                        c = "none" !== l ? this.settings.cssEfects[l].in : l;
                    this.prevActiveSlideIndex > this.index && "slide" == this.settings.slideEffect && (c = this.settings.cssEfects.slideBack.in), p(e, c, function() {
                        n.settings.autoplayVideos && n.slidePlayerPlay(e), n.trigger("slide_changed", {
                            prev: o,
                            current: a
                        }), k(n.settings.afterSlideChange) && n.settings.afterSlideChange.apply(n, [o, a])
                    })
                }
                setTimeout(function() {
                    n.resize(e)
                }, 100), u(e, "current")
            }
        }, {
            key: "slideAnimateOut",
            value: function t() {
                if (!this.prevActiveSlide) return !1;
                var e = this.prevActiveSlide;
                h(e, this.effectsClasses), u(e, "prev");
                var i = this.settings.slideEffect,
                    n = "none" !== i ? this.settings.cssEfects[i].out : i;
                this.slidePlayerPause(e), this.trigger("slide_before_change", {
                    prev: {
                        index: this.prevActiveSlideIndex,
                        slide: this.prevActiveSlide,
                        slideNode: this.prevActiveSlide,
                        slideIndex: this.prevActiveSlideIndex,
                        slideConfig: z(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig,
                        trigger: z(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node,
                        player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
                    },
                    current: {
                        index: this.index,
                        slide: this.activeSlide,
                        slideNode: this.activeSlide,
                        slideIndex: this.index,
                        slideConfig: this.elements[this.index].slideConfig,
                        trigger: this.elements[this.index].node,
                        player: this.getSlidePlayerInstance(this.index)
                    }
                }), k(this.settings.beforeSlideChange) && this.settings.beforeSlideChange.apply(this, [{
                    index: this.prevActiveSlideIndex,
                    slide: this.prevActiveSlide,
                    player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
                }, {
                    index: this.index,
                    slide: this.activeSlide,
                    player: this.getSlidePlayerInstance(this.index)
                }]), this.prevActiveSlideIndex > this.index && "slide" == this.settings.slideEffect && (n = this.settings.cssEfects.slideBack.out), p(e, n, function() {
                    var t = e.querySelector(".ginner-container"),
                        i = e.querySelector(".gslide-media"),
                        n = e.querySelector(".gslide-description");
                    t.style.transform = "", i.style.transform = "", h(i, "greset"), i.style.opacity = "", n && (n.style.opacity = ""), h(e, "prev")
                })
            }
        }, {
            key: "getAllPlayers",
            value: function t() {
                return this.videoPlayers
            }
        }, {
            key: "getSlidePlayerInstance",
            value: function t(e) {
                var i = "gvideo" + e,
                    n = this.getAllPlayers();
                return !!L(n, i) && !!n[i] && n[i]
            }
        }, {
            key: "stopSlideVideo",
            value: function t(e) {
                if (A(e)) {
                    var i = e.querySelector(".gvideo-wrapper");
                    i && (e = i.getAttribute("data-index"))
                }
                console.log("stopSlideVideo is deprecated, use slidePlayerPause");
                var n = this.getSlidePlayerInstance(e);
                n && n.playing && n.pause()
            }
        }, {
            key: "slidePlayerPause",
            value: function t(e) {
                if (A(e)) {
                    var i = e.querySelector(".gvideo-wrapper");
                    i && (e = i.getAttribute("data-index"))
                }
                var n = this.getSlidePlayerInstance(e);
                n && n.playing && n.pause()
            }
        }, {
            key: "playSlideVideo",
            value: function t(e) {
                if (A(e)) {
                    var i = e.querySelector(".gvideo-wrapper");
                    i && (e = i.getAttribute("data-index"))
                }
                console.log("playSlideVideo is deprecated, use slidePlayerPlay");
                var n = this.getSlidePlayerInstance(e);
                n && !n.playing && n.play()
            }
        }, {
            key: "slidePlayerPlay",
            value: function t(e) {
                if (A(e)) {
                    var i = e.querySelector(".gvideo-wrapper");
                    i && (e = i.getAttribute("data-index"))
                }
                var n = this.getSlidePlayerInstance(e);
                n && !n.playing && (n.play(), this.settings.autofocusVideos && n.elements.container.focus())
            }
        }, {
            key: "setElements",
            value: function t(e) {
                var i = this;
                this.settings.elements = !1;
                var n = [];
                e && e.length && o(e, function(t, e) {
                    var s = new tn(t, i, e),
                        o = s.getConfig(),
                        a = r({}, o);
                    a.slideConfig = o, a.instance = s, a.index = e, n.push(a)
                }), this.elements = n, this.lightboxOpen && (this.slidesContainer.innerHTML = "", this.elements.length && (o(this.elements, function() {
                    var t = y(i.settings.slideHTML);
                    i.slidesContainer.appendChild(t)
                }), this.showSlide(0, !0)))
            }
        }, {
            key: "getElementIndex",
            value: function t(e) {
                var i = !1;
                return o(this.elements, function(t, n) {
                    if (L(t, "node") && t.node == e) return i = n, !0
                }), i
            }
        }, {
            key: "getElements",
            value: function t() {
                var e = this,
                    i = [];
                this.elements = this.elements ? this.elements : [], !z(this.settings.elements) && E(this.settings.elements) && this.settings.elements.length && o(this.settings.elements, function(t, n) {
                    var s = new tn(t, e, n),
                        o = s.getConfig(),
                        a = r({}, o);
                    a.node = !1, a.index = n, a.instance = s, a.slideConfig = o, i.push(a)
                });
                var n = !1;
                return this.getSelector() && (n = document.querySelectorAll(this.getSelector())), n && o(n, function(t, n) {
                    var s = new tn(t, e, n),
                        o = s.getConfig(),
                        a = r({}, o);
                    a.node = t, a.index = n, a.instance = s, a.slideConfig = o, a.gallery = t.getAttribute("data-gallery"), i.push(a)
                }), i
            }
        }, {
            key: "getGalleryElements",
            value: function t(e, i) {
                return e.filter(function(t) {
                    return t.gallery == i
                })
            }
        }, {
            key: "getSelector",
            value: function t() {
                return !this.settings.elements && (this.settings.selector && "data-" == this.settings.selector.substring(0, 5) ? "*[".concat(this.settings.selector, "]") : this.settings.selector)
            }
        }, {
            key: "getActiveSlide",
            value: function t() {
                return this.slidesContainer.querySelectorAll(".gslide")[this.index]
            }
        }, {
            key: "getActiveSlideIndex",
            value: function t() {
                return this.index
            }
        }, {
            key: "getAnimationClasses",
            value: function t() {
                var e = [];
                for (var i in this.settings.cssEfects)
                    if (this.settings.cssEfects.hasOwnProperty(i)) {
                        var n = this.settings.cssEfects[i];
                        e.push("g".concat(n.in)), e.push("g".concat(n.out))
                    }
                return e.join(" ")
            }
        }, {
            key: "build",
            value: function t() {
                var e = this;
                if (this.built) return !1;
                var i = document.body.childNodes,
                    n = [];
                o(i, function(t) {
                    t.parentNode == document.body && "#" !== t.nodeName.charAt(0) && t.hasAttribute && !t.hasAttribute("aria-hidden") && (n.push(t), t.setAttribute("aria-hidden", "true"))
                });
                var s = L(this.settings.svg, "next") ? this.settings.svg.next : "",
                    r = L(this.settings.svg, "prev") ? this.settings.svg.prev : "",
                    a = L(this.settings.svg, "close") ? this.settings.svg.close : "",
                    h = this.settings.lightboxHTML;
                h = (h = (h = h.replace(/{nextSVG}/g, s)).replace(/{prevSVG}/g, r)).replace(/{closeSVG}/g, a), h = y(h), document.body.appendChild(h);
                var p = document.getElementById("glightbox-body");
                this.modal = p;
                var f = p.querySelector(".gclose");
                this.prevButton = p.querySelector(".gprev"), this.nextButton = p.querySelector(".gnext"), this.overlay = p.querySelector(".goverlay"), this.loader = p.querySelector(".gloader"), this.slidesContainer = document.getElementById("glightbox-slider"), this.bodyHiddenChildElms = n, this.events = {}, u(this.modal, "glightbox-" + this.settings.skin), this.settings.closeButton && f && (this.events.close = l("click", {
                    onElement: f,
                    withCallback: function t(i, n) {
                        i.preventDefault(), e.close()
                    }
                })), f && !this.settings.closeButton && f.parentNode.removeChild(f), this.nextButton && (this.events.next = l("click", {
                    onElement: this.nextButton,
                    withCallback: function t(i, n) {
                        i.preventDefault(), e.nextSlide()
                    }
                })), this.prevButton && (this.events.prev = l("click", {
                    onElement: this.prevButton,
                    withCallback: function t(i, n) {
                        i.preventDefault(), e.prevSlide()
                    }
                })), this.settings.closeOnOutsideClick && (this.events.outClose = l("click", {
                    onElement: p,
                    withCallback: function t(i, n) {
                        e.preventOutsideClick || c(document.body, "glightbox-mobile") || d(i.target, ".ginner-container") || d(i.target, ".gbtn") || c(i.target, "gnext") || c(i.target, "gprev") || e.close()
                    }
                })), o(this.elements, function(t, i) {
                    e.slidesContainer.appendChild(t.instance.create()), t.slideNode = e.slidesContainer.querySelectorAll(".gslide")[i]
                }), to && (u(document.body, "glightbox-touch"), this.settings.autoplayVideos = !1), this.events.resize = l("resize", {
                    onElement: window,
                    withCallback: function t() {
                        e.resize()
                    }
                }), this.built = !0
            }
        }, {
            key: "resize",
            value: function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                if (!(!(e = e || this.activeSlide) || c(e, "zoomed"))) {
                    var i = v(),
                        n = e.querySelector(".gvideo-wrapper"),
                        s = e.querySelector(".gslide-image"),
                        r = this.slideDescription,
                        o = i.width,
                        a = i.height;
                    if (o <= 768 ? u(document.body, "glightbox-mobile") : h(document.body, "glightbox-mobile"), n || s) {
                        var l = !1;
                        if (r && (c(r, "description-bottom") || c(r, "description-top")) && !c(r, "gabsolute") && (l = !0), s) {
                            if (o <= 768) s.querySelector("img");
                            else if (l) {
                                var d = r.offsetHeight,
                                    p = s.querySelector("img");
                                p.setAttribute("style", "max-height: calc(100vh - ".concat(d, "px)")), r.setAttribute("style", "max-width: ".concat(p.offsetWidth, "px;"))
                            }
                        }
                        if (n) {
                            var f = L(this.settings.plyr.config, "ratio") ? this.settings.plyr.config.ratio : "";
                            if (!f) {
                                var g = n.clientWidth,
                                    m = n.clientHeight,
                                    y = g / m;
                                f = "".concat(g / y, ":").concat(m / y)
                            }
                            var b = f.split(":"),
                                $ = this.settings.videosWidth,
                                w = this.settings.videosWidth,
                                _ = (w = O($) || -1 !== $.indexOf("px") ? parseInt($) : -1 !== $.indexOf("vw") ? o * parseInt($) / 100 : -1 !== $.indexOf("vh") ? a * parseInt($) / 100 : -1 !== $.indexOf("%") ? o * parseInt($) / 100 : parseInt(n.clientWidth)) / (parseInt(b[0]) / parseInt(b[1]));
                            if (_ = Math.floor(_), l && (a -= r.offsetHeight), w > o || _ > a || a < _ && o > w) {
                                var x = n.offsetWidth,
                                    S = n.offsetHeight,
                                    T = a / S,
                                    k = {
                                        width: x * T,
                                        height: S * T
                                    };
                                n.parentNode.setAttribute("style", "max-width: ".concat(k.width, "px")), l && r.setAttribute("style", "max-width: ".concat(k.width, "px;"))
                            } else n.parentNode.style.maxWidth = "".concat($), l && r.setAttribute("style", "max-width: ".concat($, ";"))
                        }
                    }
                }
            }
        }, {
            key: "reload",
            value: function t() {
                this.init()
            }
        }, {
            key: "updateNavigationClasses",
            value: function t() {
                var e = this.loop();
                h(this.nextButton, "disabled"), h(this.prevButton, "disabled"), 0 == this.index && this.elements.length - 1 == 0 ? (u(this.prevButton, "disabled"), u(this.nextButton, "disabled")) : 0 !== this.index || e ? this.index !== this.elements.length - 1 || e || u(this.nextButton, "disabled") : u(this.prevButton, "disabled")
            }
        }, {
            key: "loop",
            value: function t() {
                var t = L(this.settings, "loopAtEnd") ? this.settings.loopAtEnd : null;
                return L(this.settings, "loop") ? this.settings.loop : t
            }
        }, {
            key: "close",
            value: function t() {
                var e = this;
                if (!this.lightboxOpen) {
                    if (this.events) {
                        for (var i in this.events) this.events.hasOwnProperty(i) && this.events[i].destroy();
                        this.events = null
                    }
                    return !1
                }
                if (this.closing) return !1;
                this.closing = !0, this.slidePlayerPause(this.activeSlide), this.fullElementsList && (this.elements = this.fullElementsList), this.bodyHiddenChildElms.length && o(this.bodyHiddenChildElms, function(t) {
                    t.removeAttribute("aria-hidden")
                }), u(this.modal, "glightbox-closing"), p(this.overlay, "none" == this.settings.openEffect ? "none" : this.settings.cssEfects.fade.out), p(this.activeSlide, this.settings.cssEfects[this.settings.closeEffect].out, function() {
                    if (e.activeSlide = null, e.prevActiveSlideIndex = null, e.prevActiveSlide = null, e.built = !1, e.events) {
                        for (var t in e.events) e.events.hasOwnProperty(t) && e.events[t].destroy();
                        e.events = null
                    }
                    var i = document.body;
                    h(ta, "glightbox-open"), h(i, "glightbox-open touching gdesc-open glightbox-touch glightbox-mobile gscrollbar-fixer"), e.modal.parentNode.removeChild(e.modal), e.trigger("close"), k(e.settings.onClose) && e.settings.onClose();
                    var n = document.querySelector(".gcss-styles");
                    n && n.parentNode.removeChild(n), e.lightboxOpen = !1, e.closing = null
                })
            }
        }, {
            key: "destroy",
            value: function t() {
                this.close(), this.clearAllEvents(), this.baseEvents && this.baseEvents.destroy()
            }
        }, {
            key: "on",
            value: function t(e, i) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (!e || !k(i)) throw TypeError("Event name and callback must be defined");
                this.apiEvents.push({
                    evt: e,
                    once: n,
                    callback: i
                })
            }
        }, {
            key: "once",
            value: function t(e, i) {
                this.on(e, i, !0)
            }
        }, {
            key: "trigger",
            value: function t(e) {
                var i = this,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    s = [];
                o(this.apiEvents, function(t, i) {
                    var r = t.evt,
                        o = t.once,
                        a = t.callback;
                    r == e && (a(n), o && s.push(i))
                }), s.length && o(s, function(t) {
                    return i.apiEvents.splice(t, 1)
                })
            }
        }, {
            key: "clearAllEvents",
            value: function t() {
                this.apiEvents.splice(0, this.apiEvents.length)
            }
        }, {
            key: "version",
            value: function t() {
                return ts
            }
        }]), t
    }();

    function th() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = new tu(t);
        return e.init(), e
    }
    return th
}),
function(t, e) {
    "function" == typeof define && define.amd ? define([], function() {
        return e()
    }) : "object" == typeof exports ? module.exports = e() : t.Headhesive = e()
}(this, function() {
    "use strict";
    var t = function(e, i) {
            for (var n in i) i.hasOwnProperty(n) && (e[n] = "object" == typeof i[n] ? t(e[n], i[n]) : i[n]);
            return e
        },
        e = function(t, e) {
            var i, n, s, r = Date.now || function() {
                    return (new Date).getTime()
                },
                o = null,
                a = 0,
                l = function() {
                    a = r(), o = null, s = t.apply(i, n), i = n = null
                };
            return function() {
                var u = r(),
                    h = e - (u - a);
                return i = this, n = arguments, 0 >= h ? (clearTimeout(o), o = null, a = u, s = t.apply(i, n), i = n = null) : o || (o = setTimeout(l, h)), s
            }
        },
        i = function() {
            return void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
        },
        n = function(t, e) {
            for (var i = 0, n = t.offsetHeight; t;) i += t.offsetTop, t = t.offsetParent;
            return "bottom" === e && (i += n), i
        },
        s = function(e, i) {
            "querySelector" in document && "addEventListener" in window && (this.visible = !1, this.options = {
                offset: 300,
                offsetSide: "top",
                classes: {
                    clone: "headhesive",
                    stick: "headhesive--stick",
                    unstick: "headhesive--unstick"
                },
                throttle: 250,
                onInit: function() {},
                onStick: function() {},
                onUnstick: function() {},
                onDestroy: function() {}
            }, this.elem = "string" == typeof e ? document.querySelector(e) : e, this.options = t(this.options, i), this.init())
        };
    return s.prototype = {
        constructor: s,
        init: function() {
            if (this.clonedElem = this.elem.cloneNode(!0), this.clonedElem.className += " " + this.options.classes.clone, document.body.insertBefore(this.clonedElem, document.body.firstChild), "number" == typeof this.options.offset) this.scrollOffset = this.options.offset;
            else {
                if ("string" != typeof this.options.offset) throw Error("Invalid offset: " + this.options.offset);
                this._setScrollOffset()
            }
            this._throttleUpdate = e(this.update.bind(this), this.options.throttle), this._throttleScrollOffset = e(this._setScrollOffset.bind(this), this.options.throttle), window.addEventListener("scroll", this._throttleUpdate, !1), window.addEventListener("resize", this._throttleScrollOffset, !1), this.options.onInit.call(this)
        },
        _setScrollOffset: function() {
            "string" == typeof this.options.offset && (this.scrollOffset = n(document.querySelector(this.options.offset), this.options.offsetSide))
        },
        destroy: function() {
            document.body.removeChild(this.clonedElem), window.removeEventListener("scroll", this._throttleUpdate), window.removeEventListener("resize", this._throttleScrollOffset), this.options.onDestroy.call(this)
        },
        stick: function() {
            this.visible || (this.clonedElem.className = this.clonedElem.className.replace(RegExp("(^|\\s)*" + this.options.classes.unstick + "(\\s|$)*", "g"), ""), this.clonedElem.className += " " + this.options.classes.stick, this.visible = !0, this.options.onStick.call(this))
        },
        unstick: function() {
            this.visible && (this.clonedElem.className = this.clonedElem.className.replace(RegExp("(^|\\s)*" + this.options.classes.stick + "(\\s|$)*", "g"), ""), this.clonedElem.className += " " + this.options.classes.unstick, this.visible = !1, this.options.onUnstick.call(this))
        },
        update: function() {
            i() > this.scrollOffset ? this.stick() : this.unstick()
        }
    }, s
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {},
                n = i[t] = i[t] || [];
            return -1 == n.indexOf(e) && n.push(e), this
        }
    }, e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {};
            return (i[t] = i[t] || {})[e] = !0, this
        }
    }, e.off = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = i.indexOf(e);
            return -1 != n && i.splice(n, 1), this
        }
    }, e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            i = i.slice(0), e = e || [];
            for (var n = this._onceEvents && this._onceEvents[t], s = 0; s < i.length; s++) {
                var r = i[s];
                n && n[r] && (this.off(t, r), delete n[r]), r.apply(this, e)
            }
            return this
        }
    }, e.allOff = function() {
        delete this._events, delete this._onceEvents
    }, t
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter)
}("undefined" != typeof window ? window : this, function(t, e) {
    function i(t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }

    function n(t) {
        return Array.isArray(t) ? t : "object" == typeof t && "number" == typeof t.length ? u.call(t) : [t]
    }

    function s(t, e, r) {
        if (!(this instanceof s)) return new s(t, e, r);
        var o = t;
        return "string" == typeof t && (o = document.querySelectorAll(t)), o ? (this.elements = n(o), this.options = i({}, this.options), "function" == typeof e ? r = e : i(this.options, e), r && this.on("always", r), this.getImages(), a && (this.jqDeferred = new a.Deferred), void setTimeout(this.check.bind(this))) : void l.error("Bad element for imagesLoaded " + (o || t))
    }

    function r(t) {
        this.img = t
    }

    function o(t, e) {
        this.url = t, this.element = e, this.img = new Image
    }
    var a = t.jQuery,
        l = t.console,
        u = Array.prototype.slice;
    s.prototype = Object.create(e.prototype), s.prototype.options = {}, s.prototype.getImages = function() {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    }, s.prototype.addElementImages = function(t) {
        "IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
        var e = t.nodeType;
        if (e && h[e]) {
            for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var s = i[n];
                this.addImage(s)
            }
            if ("string" == typeof this.options.background) {
                var r = t.querySelectorAll(this.options.background);
                for (n = 0; n < r.length; n++) {
                    var o = r[n];
                    this.addElementBackgroundImages(o)
                }
            }
        }
    };
    var h = {
        1: !0,
        9: !0,
        11: !0
    };
    return s.prototype.addElementBackgroundImages = function(t) {
        var e = getComputedStyle(t);
        if (e)
            for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n;) {
                var s = n && n[2];
                s && this.addBackground(s, t), n = i.exec(e.backgroundImage)
            }
    }, s.prototype.addImage = function(t) {
        var e = new r(t);
        this.images.push(e)
    }, s.prototype.addBackground = function(t, e) {
        var i = new o(t, e);
        this.images.push(i)
    }, s.prototype.check = function() {
        function t(t, i, n) {
            setTimeout(function() {
                e.progress(t, i, n)
            })
        }
        var e = this;
        return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(e) {
            e.once("progress", t), e.check()
        }) : void this.complete()
    }, s.prototype.progress = function(t, e, i) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && l && l.log("progress: " + i, t, e)
    }, s.prototype.complete = function() {
        var t = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            var e = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[e](this)
        }
    }, r.prototype = Object.create(e.prototype), r.prototype.check = function() {
        return this.getIsImageComplete() ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
    }, r.prototype.getIsImageComplete = function() {
        return this.img.complete && this.img.naturalWidth
    }, r.prototype.confirm = function(t, e) {
        this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
    }, r.prototype.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, r.prototype.onload = function() {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, r.prototype.onerror = function() {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, r.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, o.prototype = Object.create(r.prototype), o.prototype.check = function() {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, o.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, o.prototype.confirm = function(t, e) {
        this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
    }, s.makeJQueryPlugin = function(e) {
        (e = e || t.jQuery) && ((a = e).fn.imagesLoaded = function(t, e) {
            return new s(this, t, e).jqDeferred.promise(a(this))
        })
    }, s.makeJQueryPlugin(), s
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function(t, e) {
    "use strict";

    function i(i, r, a) {
        function l(t, e, n) {
            var s, r = "$()." + i + '("' + e + '")';
            return t.each(function(t, l) {
                var u = a.data(l, i);
                if (!u) return void o(i + " not initialized. Cannot call methods, i.e. " + r);
                var h = u[e];
                if (!h || "_" == e.charAt(0)) return void o(r + " is not a valid method");
                var c = h.apply(u, n);
                s = void 0 === s ? c : s
            }), void 0 !== s ? s : t
        }

        function u(t, e) {
            t.each(function(t, n) {
                var s = a.data(n, i);
                s ? (s.option(e), s._init()) : (s = new r(n, e), a.data(n, i, s))
            })
        }(a = a || e || t.jQuery) && (r.prototype.option || (r.prototype.option = function(t) {
            a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
        }), a.fn[i] = function(t) {
            if ("string" == typeof t) {
                var e = s.call(arguments, 1);
                return l(this, t, e)
            }
            return u(this, t), this
        }, n(a))
    }

    function n(t) {
        !t || t && t.bridget || (t.bridget = i)
    }
    var s = Array.prototype.slice,
        r = t.console,
        o = void 0 === r ? function() {} : function(t) {
            r.error(t)
        };
    return n(e || t.jQuery), i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {},
                n = i[t] = i[t] || [];
            return -1 == n.indexOf(e) && n.push(e), this
        }
    }, e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {};
            return (i[t] = i[t] || {})[e] = !0, this
        }
    }, e.off = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = i.indexOf(e);
            return -1 != n && i.splice(n, 1), this
        }
    }, e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            i = i.slice(0), e = e || [];
            for (var n = this._onceEvents && this._onceEvents[t], s = 0; s < i.length; s++) {
                var r = i[s];
                n && n[r] && (this.off(t, r), delete n[r]), r.apply(this, e)
            }
            return this
        }
    }, e.allOff = function() {
        delete this._events, delete this._onceEvents
    }, t
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function() {
    "use strict";

    function t(t) {
        var e = parseFloat(t);
        return -1 == t.indexOf("%") && !isNaN(e) && e
    }

    function e() {}

    function i() {
        for (var t = {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                outerWidth: 0,
                outerHeight: 0
            }, e = 0; e < u; e++) t[l[e]] = 0;
        return t
    }

    function n(t) {
        var e = getComputedStyle(t);
        return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e
    }

    function s() {
        if (!h) {
            h = !0;
            var e = document.createElement("div");
            e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
            var i = document.body || document.documentElement;
            i.appendChild(e), o = 200 == Math.round(t(n(e).width)), r.isBoxSizeOuter = o, i.removeChild(e)
        }
    }

    function r(e) {
        if (s(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
            var r = n(e);
            if ("none" == r.display) return i();
            var a = {};
            a.width = e.offsetWidth, a.height = e.offsetHeight;
            for (var h = a.isBorderBox = "border-box" == r.boxSizing, c = 0; c < u; c++) {
                var d = l[c],
                    p = parseFloat(r[d]);
                a[d] = isNaN(p) ? 0 : p
            }
            var f = a.paddingLeft + a.paddingRight,
                g = a.paddingTop + a.paddingBottom,
                m = a.marginLeft + a.marginRight,
                y = a.marginTop + a.marginBottom,
                v = a.borderLeftWidth + a.borderRightWidth,
                b = a.borderTopWidth + a.borderBottomWidth,
                $ = h && o,
                w = t(r.width);
            !1 !== w && (a.width = w + ($ ? 0 : f + v));
            var _ = t(r.height);
            return !1 !== _ && (a.height = _ + ($ ? 0 : g + b)), a.innerWidth = a.width - (f + v), a.innerHeight = a.height - (g + b), a.outerWidth = a.width + m, a.outerHeight = a.height + y, a
        }
    }
    var o, a = "undefined" == typeof console ? e : function(t) {
            console.error(t)
        },
        l = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        u = l.length,
        h = !1;
    return r
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function() {
    "use strict";
    var t = function() {
        var t = window.Element.prototype;
        if (t.matches) return "matches";
        if (t.matchesSelector) return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var n = e[i] + "MatchesSelector";
            if (t[n]) return n
        }
    }();
    return function(e, i) {
        return e[t](i)
    }
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function(t, e) {
    var i = {};
    i.extend = function(t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }, i.modulo = function(t, e) {
        return (t % e + e) % e
    };
    var n = Array.prototype.slice;
    i.makeArray = function(t) {
        return Array.isArray(t) ? t : null == t ? [] : "object" == typeof t && "number" == typeof t.length ? n.call(t) : [t]
    }, i.removeFrom = function(t, e) {
        var i = t.indexOf(e); - 1 != i && t.splice(i, 1)
    }, i.getParent = function(t, i) {
        for (; t.parentNode && t != document.body;)
            if (e(t = t.parentNode, i)) return t
    }, i.getQueryElement = function(t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }, i.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, i.filterFindElements = function(t, n) {
        t = i.makeArray(t);
        var s = [];
        return t.forEach(function(t) {
            if (t instanceof HTMLElement) {
                if (!n) return void s.push(t);
                e(t, n) && s.push(t);
                for (var i = t.querySelectorAll(n), r = 0; r < i.length; r++) s.push(i[r])
            }
        }), s
    }, i.debounceMethod = function(t, e, i) {
        i = i || 100;
        var n = t.prototype[e],
            s = e + "Timeout";
        t.prototype[e] = function() {
            clearTimeout(this[s]);
            var t = arguments,
                e = this;
            this[s] = setTimeout(function() {
                n.apply(e, t), delete e[s]
            }, i)
        }
    }, i.docReady = function(t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
    }, i.toDashed = function(t) {
        return t.replace(/(.)([A-Z])/g, function(t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    };
    var s = t.console;
    return i.htmlInit = function(e, n) {
        i.docReady(function() {
            var r = i.toDashed(n),
                o = "data-" + r,
                a = document.querySelectorAll("[" + o + "]"),
                l = document.querySelectorAll(".js-" + r),
                u = i.makeArray(a).concat(i.makeArray(l)),
                h = o + "-options",
                c = t.jQuery;
            u.forEach(function(t) {
                var i, r = t.getAttribute(o) || t.getAttribute(h);
                try {
                    i = r && JSON.parse(r)
                } catch (a) {
                    return void(s && s.error("Error parsing " + o + " on " + t.className + ": " + a))
                }
                var l = new e(t, i);
                c && c.data(t, n, l)
            })
        })
    }, i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function(t, e) {
    "use strict";

    function i(t) {
        for (var e in t) return !1;
        return e = null, !0
    }

    function n(t, e) {
        t && (this.element = t, this.layout = e, this.position = {
            x: 0,
            y: 0
        }, this._create())
    }

    function s(t) {
        return t.replace(/([A-Z])/g, function(t) {
            return "-" + t.toLowerCase()
        })
    }
    var r = document.documentElement.style,
        o = "string" == typeof r.transition ? "transition" : "WebkitTransition",
        a = "string" == typeof r.transform ? "transform" : "WebkitTransform",
        l = {
            WebkitTransition: "webkitTransitionEnd",
            transition: "transitionend"
        }[o],
        u = {
            transform: a,
            transition: o,
            transitionDuration: o + "Duration",
            transitionProperty: o + "Property",
            transitionDelay: o + "Delay"
        },
        h = n.prototype = Object.create(t.prototype);
    h.constructor = n, h._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        }, this.css({
            position: "absolute"
        })
    }, h.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, h.getSize = function() {
        this.size = e(this.element)
    }, h.css = function(t) {
        var e = this.element.style;
        for (var i in t) e[u[i] || i] = t[i]
    }, h.getPosition = function() {
        var t = getComputedStyle(this.element),
            e = this.layout._getOption("originLeft"),
            i = this.layout._getOption("originTop"),
            n = t[e ? "left" : "right"],
            s = t[i ? "top" : "bottom"],
            r = parseFloat(n),
            o = parseFloat(s),
            a = this.layout.size; - 1 != n.indexOf("%") && (r = r / 100 * a.width), -1 != s.indexOf("%") && (o = o / 100 * a.height), r = isNaN(r) ? 0 : r, o = isNaN(o) ? 0 : o, r -= e ? a.paddingLeft : a.paddingRight, o -= i ? a.paddingTop : a.paddingBottom, this.position.x = r, this.position.y = o
    }, h.layoutPosition = function() {
        var t = this.layout.size,
            e = {},
            i = this.layout._getOption("originLeft"),
            n = this.layout._getOption("originTop"),
            s = i ? "paddingLeft" : "paddingRight",
            r = i ? "left" : "right",
            o = i ? "right" : "left",
            a = this.position.x + t[s];
        e[r] = this.getXValue(a), e[o] = "";
        var l = n ? "paddingTop" : "paddingBottom",
            u = n ? "top" : "bottom",
            h = n ? "bottom" : "top",
            c = this.position.y + t[l];
        e[u] = this.getYValue(c), e[h] = "", this.css(e), this.emitEvent("layout", [this])
    }, h.getXValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
    }, h.getYValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
    }, h._transitionTo = function(t, e) {
        this.getPosition();
        var i = this.position.x,
            n = this.position.y,
            s = t == this.position.x && e == this.position.y;
        if (this.setPosition(t, e), s && !this.isTransitioning) return void this.layoutPosition();
        var r = t - i,
            o = e - n,
            a = {};
        a.transform = this.getTranslate(r, o), this.transition({
            to: a,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: !0
        })
    }, h.getTranslate = function(t, e) {
        var i = this.layout._getOption("originLeft"),
            n = this.layout._getOption("originTop");
        return "translate3d(" + (t = i ? t : -t) + "px, " + (e = n ? e : -e) + "px, 0)"
    }, h.goTo = function(t, e) {
        this.setPosition(t, e), this.layoutPosition()
    }, h.moveTo = h._transitionTo, h.setPosition = function(t, e) {
        this.position.x = parseFloat(t), this.position.y = parseFloat(e)
    }, h._nonTransition = function(t) {
        for (var e in this.css(t.to), t.isCleaning && this._removeStyles(t.to), t.onTransitionEnd) t.onTransitionEnd[e].call(this)
    }, h.transition = function(t) {
        if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
            this.css(t.from);
            var n = this.element.offsetHeight;
            n = null
        }
        this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
    };
    var c = "opacity," + s(a);
    h.enableTransition = function() {
        if (!this.isTransitioning) {
            var t = this.layout.options.transitionDuration;
            t = "number" == typeof t ? t + "ms" : t, this.css({
                transitionProperty: c,
                transitionDuration: t,
                transitionDelay: this.staggerDelay || 0
            }), this.element.addEventListener(l, this, !1)
        }
    }, h.onwebkitTransitionEnd = function(t) {
        this.ontransitionend(t)
    }, h.onotransitionend = function(t) {
        this.ontransitionend(t)
    };
    var d = {
        "-webkit-transform": "transform"
    };
    h.ontransitionend = function(t) {
        if (t.target === this.element) {
            var e = this._transn,
                n = d[t.propertyName] || t.propertyName;
            delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd && (e.onEnd[n].call(this), delete e.onEnd[n]), this.emitEvent("transitionEnd", [this])
        }
    }, h.disableTransition = function() {
        this.removeTransitionStyles(), this.element.removeEventListener(l, this, !1), this.isTransitioning = !1
    }, h._removeStyles = function(t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e)
    };
    var p = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
    };
    return h.removeTransitionStyles = function() {
        this.css(p)
    }, h.stagger = function(t) {
        t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
    }, h.removeElem = function() {
        this.element.parentNode.removeChild(this.element), this.css({
            display: ""
        }), this.emitEvent("remove", [this])
    }, h.remove = function() {
        return o && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
            this.removeElem()
        }), void this.hide()) : void this.removeElem()
    }, h.reveal = function() {
        delete this.isHidden, this.css({
            display: ""
        });
        var t = this.layout.options,
            e = {};
        e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, h.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal")
    }, h.getHideRevealTransitionEndProperty = function(t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i
    }, h.hide = function() {
        this.isHidden = !0, this.css({
            display: ""
        });
        var t = this.layout.options,
            e = {};
        e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, h.onHideTransitionEnd = function() {
        this.isHidden && (this.css({
            display: "none"
        }), this.emitEvent("hide"))
    }, h.destroy = function() {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        })
    }, n
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, n, s, r) {
        return e(t, i, n, s, r)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function(t, e, i, n, s) {
    "use strict";

    function r(t, e) {
        var i = n.getQueryElement(t);
        if (!i) return void(l && l.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
        this.element = i, u && (this.$element = u(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e);
        var s = ++c;
        this.element.outlayerGUID = s, d[s] = this, this._create(), this._getOption("initLayout") && this.layout()
    }

    function o(t) {
        function e() {
            t.apply(this, arguments)
        }
        return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
    }

    function a(t) {
        if ("number" == typeof t) return t;
        var e = t.match(/(^\d*\.?\d*)(\w*)/),
            i = e && e[1],
            n = e && e[2];
        return i.length ? (i = parseFloat(i)) * (f[n] || 1) : 0
    }
    var l = t.console,
        u = t.jQuery,
        h = function() {},
        c = 0,
        d = {};
    r.namespace = "outlayer", r.Item = s, r.defaults = {
        containerStyle: {
            position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    };
    var p = r.prototype;
    n.extend(p, e.prototype), p.option = function(t) {
        n.extend(this.options, t)
    }, p._getOption = function(t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
    }, r.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    }, p._create = function() {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize()
    }, p.reloadItems = function() {
        this.items = this._itemize(this.element.children)
    }, p._itemize = function(t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], s = 0; s < e.length; s++) {
            var r = e[s],
                o = new i(r, this);
            n.push(o)
        }
        return n
    }, p._filterFindItemElements = function(t) {
        return n.filterFindElements(t, this.options.itemSelector)
    }, p.getItemElements = function() {
        return this.items.map(function(t) {
            return t.element
        })
    }, p.layout = function() {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"),
            e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), this._isLayoutInited = !0
    }, p._init = p.layout, p._resetLayout = function() {
        this.getSize()
    }, p.getSize = function() {
        this.size = i(this.element)
    }, p._getMeasurement = function(t, e) {
        var n, s = this.options[t];
        s ? ("string" == typeof s ? n = this.element.querySelector(s) : s instanceof HTMLElement && (n = s), this[t] = n ? i(n)[e] : s) : this[t] = 0
    }, p.layoutItems = function(t, e) {
        t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
    }, p._getItemsForLayout = function(t) {
        return t.filter(function(t) {
            return !t.isIgnored
        })
    }, p._layoutItems = function(t, e) {
        if (this._emitCompleteOnItems("layout", t), t && t.length) {
            var i = [];
            t.forEach(function(t) {
                var n = this._getItemLayoutPosition(t);
                n.item = t, n.isInstant = e || t.isLayoutInstant, i.push(n)
            }, this), this._processLayoutQueue(i)
        }
    }, p._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        }
    }, p._processLayoutQueue = function(t) {
        this.updateStagger(), t.forEach(function(t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e)
        }, this)
    }, p.updateStagger = function() {
        var t = this.options.stagger;
        return null == t ? void(this.stagger = 0) : (this.stagger = a(t), this.stagger)
    }, p._positionItem = function(t, e, i, n, s) {
        n ? t.goTo(e, i) : (t.stagger(s * this.stagger), t.moveTo(e, i))
    }, p._postLayout = function() {
        this.resizeContainer()
    }, p.resizeContainer = function() {
        if (this._getOption("resizeContainer")) {
            var t = this._getContainerSize();
            t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
        }
    }, p._getContainerSize = h, p._setContainerMeasure = function(t, e) {
        if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
        }
    }, p._emitCompleteOnItems = function(t, e) {
        function i() {
            s.dispatchEvent(t + "Complete", null, [e])
        }

        function n() {
            ++o == r && i()
        }
        var s = this,
            r = e.length;
        if (!e || !r) return void i();
        var o = 0;
        e.forEach(function(e) {
            e.once(t, n)
        })
    }, p.dispatchEvent = function(t, e, i) {
        var n = e ? [e].concat(i) : i;
        if (this.emitEvent(t, n), u) {
            if (this.$element = this.$element || u(this.element), e) {
                var s = u.Event(e);
                s.type = t, this.$element.trigger(s, i)
            } else this.$element.trigger(t, i)
        }
    }, p.ignore = function(t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0)
    }, p.unignore = function(t) {
        var e = this.getItem(t);
        e && delete e.isIgnored
    }, p.stamp = function(t) {
        (t = this._find(t)) && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
    }, p.unstamp = function(t) {
        (t = this._find(t)) && t.forEach(function(t) {
            n.removeFrom(this.stamps, t), this.unignore(t)
        }, this)
    }, p._find = function(t) {
        if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = n.makeArray(t)
    }, p._manageStamps = function() {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
    }, p._getBoundingRect = function() {
        var t = this.element.getBoundingClientRect(),
            e = this.size;
        this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        }
    }, p._manageStamp = h, p._getElementOffset = function(t) {
        var e = t.getBoundingClientRect(),
            n = this._boundingRect,
            s = i(t);
        return {
            left: e.left - n.left - s.marginLeft,
            top: e.top - n.top - s.marginTop,
            right: n.right - e.right - s.marginRight,
            bottom: n.bottom - e.bottom - s.marginBottom
        }
    }, p.handleEvent = n.handleEvent, p.bindResize = function() {
        t.addEventListener("resize", this), this.isResizeBound = !0
    }, p.unbindResize = function() {
        t.removeEventListener("resize", this), this.isResizeBound = !1
    }, p.onresize = function() {
        this.resize()
    }, n.debounceMethod(r, "onresize", 100), p.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, p.needsResizeLayout = function() {
        var t = i(this.element);
        return this.size && t && t.innerWidth !== this.size.innerWidth
    }, p.addItems = function(t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e
    }, p.appended = function(t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e))
    }, p.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            var i = this.items.slice(0);
            this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
        }
    }, p.reveal = function(t) {
        if (this._emitCompleteOnItems("reveal", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach(function(t, i) {
                t.stagger(i * e), t.reveal()
            })
        }
    }, p.hide = function(t) {
        if (this._emitCompleteOnItems("hide", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach(function(t, i) {
                t.stagger(i * e), t.hide()
            })
        }
    }, p.revealItemElements = function(t) {
        var e = this.getItems(t);
        this.reveal(e)
    }, p.hideItemElements = function(t) {
        var e = this.getItems(t);
        this.hide(e)
    }, p.getItem = function(t) {
        for (var e = 0; e < this.items.length; e++) {
            var i = this.items[e];
            if (i.element == t) return i
        }
    }, p.getItems = function(t) {
        t = n.makeArray(t);
        var e = [];
        return t.forEach(function(t) {
            var i = this.getItem(t);
            i && e.push(i)
        }, this), e
    }, p.remove = function(t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function(t) {
            t.remove(), n.removeFrom(this.items, t)
        }, this)
    }, p.destroy = function() {
        var t = this.element.style;
        t.height = "", t.position = "", t.width = "", this.items.forEach(function(t) {
            t.destroy()
        }), this.unbindResize(), delete d[this.element.outlayerGUID], delete this.element.outlayerGUID, u && u.removeData(this.element, this.constructor.namespace)
    }, r.data = function(t) {
        var e = (t = n.getQueryElement(t)) && t.outlayerGUID;
        return e && d[e]
    }, r.create = function(t, e) {
        var i = o(r);
        return i.defaults = n.extend({}, r.defaults), n.extend(i.defaults, e), i.compatOptions = n.extend({}, r.compatOptions), i.namespace = t, i.data = r.data, i.Item = o(s), n.htmlInit(i, t), u && u.bridget && u.bridget(t, i), i
    };
    var f = {
        ms: 1,
        s: 1e3
    };
    return r.Item = s, r
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
}(window, function(t) {
    "use strict";

    function e() {
        t.Item.apply(this, arguments)
    }
    var i = e.prototype = Object.create(t.Item.prototype),
        n = i._create;
    i._create = function() {
        this.id = this.layout.itemGUID++, n.call(this), this.sortData = {}
    }, i.updateSortData = function() {
        if (!this.isIgnored) {
            this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
            var t = this.layout.options.getSortData,
                e = this.layout._sorters;
            for (var i in t) {
                var n = e[i];
                this.sortData[i] = n(this.element, this)
            }
        }
    };
    var s = i.destroy;
    return i.destroy = function() {
        s.apply(this, arguments), this.css({
            display: ""
        })
    }, e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window, function(t, e) {
    "use strict";

    function i(t) {
        this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
    }
    var n = i.prototype;
    return ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"].forEach(function(t) {
        n[t] = function() {
            return e.prototype[t].apply(this.isotope, arguments)
        }
    }), n.needsVerticalResizeLayout = function() {
        var e = t(this.isotope.element);
        return this.isotope.size && e && e.innerHeight != this.isotope.size.innerHeight
    }, n._getMeasurement = function() {
        this.isotope._getMeasurement.apply(this, arguments)
    }, n.getColumnWidth = function() {
        this.getSegmentSize("column", "Width")
    }, n.getRowHeight = function() {
        this.getSegmentSize("row", "Height")
    }, n.getSegmentSize = function(t, e) {
        var i = t + e,
            n = "outer" + e;
        if (this._getMeasurement(i, n), !this[i]) {
            var s = this.getFirstItemSize();
            this[i] = s && s[n] || this.isotope.size["inner" + e]
        }
    }, n.getFirstItemSize = function() {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element)
    }, n.layout = function() {
        this.isotope.layout.apply(this.isotope, arguments)
    }, n.getSize = function() {
        this.isotope.getSize(), this.size = this.isotope.size
    }, i.modes = {}, i.create = function(t, e) {
        function s() {
            i.apply(this, arguments)
        }
        return s.prototype = Object.create(n), s.prototype.constructor = s, e && (s.options = e), s.prototype.namespace = t, i.modes[t] = s, s
    }, i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function(t, e) {
    var i = t.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var n = i.prototype;
    return n._resetLayout = function() {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        this.maxY = 0, this.horizontalColIndex = 0
    }, n.measureColumns = function() {
        if (this.getContainerWidth(), !this.columnWidth) {
            var t = this.items[0],
                i = t && t.element;
            this.columnWidth = i && e(i).outerWidth || this.containerWidth
        }
        var n = this.columnWidth += this.gutter,
            s = this.containerWidth + this.gutter,
            r = s / n,
            o = n - s % n;
        r = Math[o && o < 1 ? "round" : "floor"](r), this.cols = Math.max(r, 1)
    }, n.getContainerWidth = function() {
        var t = e(this._getOption("fitWidth") ? this.element.parentNode : this.element);
        this.containerWidth = t && t.innerWidth
    }, n._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
            i = Math[e && e < 1 ? "round" : "ceil"](t.size.outerWidth / this.columnWidth);
        i = Math.min(i, this.cols);
        for (var n = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", s = this[n](i, t), r = {
                x: this.columnWidth * s.col,
                y: s.y
            }, o = s.y + t.size.outerHeight, a = i + s.col, l = s.col; l < a; l++) this.colYs[l] = o;
        return r
    }, n._getTopColPosition = function(t) {
        var e = this._getTopColGroup(t),
            i = Math.min.apply(Math, e);
        return {
            col: e.indexOf(i),
            y: i
        }
    }, n._getTopColGroup = function(t) {
        if (t < 2) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, n = 0; n < i; n++) e[n] = this._getColGroupY(n, t);
        return e
    }, n._getColGroupY = function(t, e) {
        if (e < 2) return this.colYs[t];
        var i = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, i)
    }, n._getHorizontalColPosition = function(t, e) {
        var i = this.horizontalColIndex % this.cols;
        i = t > 1 && i + t > this.cols ? 0 : i;
        var n = e.size.outerWidth && e.size.outerHeight;
        return this.horizontalColIndex = n ? i + t : this.horizontalColIndex, {
            col: i,
            y: this._getColGroupY(i, t)
        }
    }, n._manageStamp = function(t) {
        var i = e(t),
            n = this._getElementOffset(t),
            s = this._getOption("originLeft") ? n.left : n.right,
            r = s + i.outerWidth,
            o = Math.floor(s / this.columnWidth);
        o = Math.max(0, o);
        var a = Math.floor(r / this.columnWidth);
        a -= r % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
        for (var l = this._getOption("originTop"), u = (l ? n.top : n.bottom) + i.outerHeight, h = o; h <= a; h++) this.colYs[h] = Math.max(u, this.colYs[h])
    }, n._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {
            height: this.maxY
        };
        return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
    }, n._getContainerFitWidth = function() {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
        return (this.cols - t) * this.columnWidth - this.gutter
    }, n.needsResizeLayout = function() {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth
    }, i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
}(window, function(t, e) {
    "use strict";
    var i = t.create("masonry"),
        n = i.prototype,
        s = {
            _getElementOffset: !0,
            layout: !0,
            _getMeasurement: !0
        };
    for (var r in e.prototype) s[r] || (n[r] = e.prototype[r]);
    var o = n.measureColumns;
    n.measureColumns = function() {
        this.items = this.isotope.filteredItems, o.call(this)
    };
    var a = n._getOption;
    return n._getOption = function(t) {
        return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
    }, i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
    "use strict";
    var e = t.create("fitRows"),
        i = e.prototype;
    return i._resetLayout = function() {
        this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
    }, i._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter,
            i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
        var n = {
            x: this.x,
            y: this.y
        };
        return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, n
    }, i._getContainerSize = function() {
        return {
            height: this.maxY
        }
    }, e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
    "use strict";
    var e = t.create("vertical", {
            horizontalAlignment: 0
        }),
        i = e.prototype;
    return i._resetLayout = function() {
        this.y = 0
    }, i._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
            i = this.y;
        return this.y += t.size.outerHeight, {
            x: e,
            y: i
        }
    }, i._getContainerSize = function() {
        return {
            height: this.y
        }
    }, e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], function(i, n, s, r, o, a) {
        return e(t, i, n, s, r, o, a)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
}(window, function(t, e, i, n, s, r, o) {
    function a(t, e) {
        return function(i, n) {
            for (var s = 0; s < t.length; s++) {
                var r = t[s],
                    o = i.sortData[r],
                    a = n.sortData[r];
                if (o > a || o < a) return (o > a ? 1 : -1) * ((void 0 !== e[r] ? e[r] : e) ? 1 : -1)
            }
            return 0
        }
    }
    var l = t.jQuery,
        u = String.prototype.trim ? function(t) {
            return t.trim()
        } : function(t) {
            return t.replace(/^\s+|\s+$/g, "")
        },
        h = e.create("isotope", {
            layoutMode: "masonry",
            isJQueryFiltering: !0,
            sortAscending: !0
        });
    h.Item = r, h.LayoutMode = o;
    var c = h.prototype;
    c._create = function() {
        for (var t in this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"], o.modes) this._initLayoutMode(t)
    }, c.reloadItems = function() {
        this.itemGUID = 0, e.prototype.reloadItems.call(this)
    }, c._itemize = function() {
        for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) t[i].id = this.itemGUID++;
        return this._updateItemsSortData(t), t
    }, c._initLayoutMode = function(t) {
        var e = o.modes[t],
            i = this.options[t] || {};
        this.options[t] = e.options ? s.extend(e.options, i) : i, this.modes[t] = new e(this)
    }, c.layout = function() {
        return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
    }, c._layout = function() {
        var t = this._getIsInstant();
        this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
    }, c.arrange = function(t) {
        this.option(t), this._getIsInstant();
        var e = this._filter(this.items);
        this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
    }, c._init = c.arrange, c._hideReveal = function(t) {
        this.reveal(t.needReveal), this.hide(t.needHide)
    }, c._getIsInstant = function() {
        var t = this._getOption("layoutInstant"),
            e = void 0 !== t ? t : !this._isLayoutInited;
        return this._isInstant = e, e
    }, c._bindArrangeComplete = function() {
        function t() {
            e && i && n && s.dispatchEvent("arrangeComplete", null, [s.filteredItems])
        }
        var e, i, n, s = this;
        this.once("layoutComplete", function() {
            e = !0, t()
        }), this.once("hideComplete", function() {
            i = !0, t()
        }), this.once("revealComplete", function() {
            n = !0, t()
        })
    }, c._filter = function(t) {
        var e = this.options.filter;
        e = e || "*";
        for (var i = [], n = [], s = [], r = this._getFilterTest(e), o = 0; o < t.length; o++) {
            var a = t[o];
            if (!a.isIgnored) {
                var l = r(a);
                l && i.push(a), l && a.isHidden ? n.push(a) : l || a.isHidden || s.push(a)
            }
        }
        return {
            matches: i,
            needReveal: n,
            needHide: s
        }
    }, c._getFilterTest = function(t) {
        return l && this.options.isJQueryFiltering ? function(e) {
            return l(e.element).is(t)
        } : "function" == typeof t ? function(e) {
            return t(e.element)
        } : function(e) {
            return n(e.element, t)
        }
    }, c.updateSortData = function(t) {
        var e;
        t ? (t = s.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
    }, c._getSorters = function() {
        var t = this.options.getSortData;
        for (var e in t) {
            var i = t[e];
            this._sorters[e] = d(i)
        }
    }, c._updateItemsSortData = function(t) {
        for (var e = t && t.length, i = 0; e && i < e; i++) t[i].updateSortData()
    };
    var d = function() {
        function t(t) {
            if ("string" != typeof t) return t;
            var i = u(t).split(" "),
                n = i[0],
                s = n.match(/^\[(.+)\]$/),
                r = s && s[1],
                o = e(r, n),
                a = h.sortDataParsers[i[1]];
            return t = a ? function(t) {
                return t && a(o(t))
            } : function(t) {
                return t && o(t)
            }
        }

        function e(t, e) {
            return t ? function(e) {
                return e.getAttribute(t)
            } : function(t) {
                var i = t.querySelector(e);
                return i && i.textContent
            }
        }
        return t
    }();
    h.sortDataParsers = {
        parseInt: function(t) {
            return parseInt(t, 10)
        },
        parseFloat: function(t) {
            return parseFloat(t)
        }
    }, c._sort = function() {
        if (this.options.sortBy) {
            var t = s.makeArray(this.options.sortBy);
            this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
            var e = a(this.sortHistory, this.options.sortAscending);
            this.filteredItems.sort(e)
        }
    }, c._getIsSameSortBy = function(t) {
        for (var e = 0; e < t.length; e++)
            if (t[e] != this.sortHistory[e]) return !1;
        return !0
    }, c._mode = function() {
        var t = this.options.layoutMode,
            e = this.modes[t];
        if (!e) throw Error("No layout mode: " + t);
        return e.options = this.options[t], e
    }, c._resetLayout = function() {
        e.prototype._resetLayout.call(this), this._mode()._resetLayout()
    }, c._getItemLayoutPosition = function(t) {
        return this._mode()._getItemLayoutPosition(t)
    }, c._manageStamp = function(t) {
        this._mode()._manageStamp(t)
    }, c._getContainerSize = function() {
        return this._mode()._getContainerSize()
    }, c.needsResizeLayout = function() {
        return this._mode().needsResizeLayout()
    }, c.appended = function(t) {
        var e = this.addItems(t);
        if (e.length) {
            var i = this._filterRevealAdded(e);
            this.filteredItems = this.filteredItems.concat(i)
        }
    }, c.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            this._resetLayout(), this._manageStamps();
            var i = this._filterRevealAdded(e);
            this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
        }
    }, c._filterRevealAdded = function(t) {
        var e = this._filter(t);
        return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
    }, c.insert = function(t) {
        var e = this.addItems(t);
        if (e.length) {
            var i, n, s = e.length;
            for (i = 0; i < s; i++) n = e[i], this.element.appendChild(n.element);
            var r = this._filter(e).matches;
            for (i = 0; i < s; i++) e[i].isLayoutInstant = !0;
            for (this.arrange(), i = 0; i < s; i++) delete e[i].isLayoutInstant;
            this.reveal(r)
        }
    };
    var p = c.remove;
    return c.remove = function(t) {
        t = s.makeArray(t);
        var e = this.getItems(t);
        p.call(this, t);
        for (var i = e && e.length, n = 0; i && n < i; n++) {
            var r = e[n];
            s.removeFrom(this.filteredItems, r)
        }
    }, c.shuffle = function() {
        for (var t = 0; t < this.items.length; t++) this.items[t].sortData.random = Math.random();
        this.options.sortBy = "random", this._sort(), this._layout()
    }, c._noTransition = function(t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var n = t.apply(this, e);
        return this.options.transitionDuration = i, n
    }, c.getFilteredItemElements = function() {
        return this.filteredItems.map(function(t) {
            return t.element
        })
    }, h
});
/*!
 * iTooltip.js v1.1.1
 * https://github.com/Ins-V/iTooltip
 */
class DoubleCenterException {
    constructor() {
        window.console.error('iTooltip Error: positionX and positionY properties cannot be "center" at the same time.')
    }
}
class iTooltip {
    constructor(t = "*") {
        let e = "*" !== t ? t : "*[title]";
        this.objects = document.querySelectorAll(e)
    }
    init(t = {}) {
        if (this.settings = Object.assign({
                className: "tooltip",
                indentX: 10,
                indentY: 15,
                positionX: "right",
                positionY: "bottom"
            }, t), "center" === this.settings.positionX && "center" === this.settings.positionY) throw new DoubleCenterException;
        this.objects.forEach(t => {
            t.getAttribute("title") && (t.addEventListener("mouseenter", t => this.createTooltip(t)), t.addEventListener("mouseleave", t => this.removeTooltip(t)))
        })
    }
    createTooltip(t) {
        let e = t.target;
        this.tooltip = document.createElement("div"), this.tooltip.classList.add(this.settings.className), this.tooltip.innerHTML = e.getAttribute("title");
        var i = t.target.className.split(" ").find(t => t.startsWith("itooltip-"));
        i && this.tooltip.classList.add(i), this.tooltip.style.position = "absolute", this.changePosition(t), e.removeAttribute("title"), document.body.appendChild(this.tooltip), e.addEventListener("mousemove", t => this.changePosition(t))
    }
    removeTooltip(t) {
        t.target.setAttribute("title", this.tooltip.innerHTML), this.tooltip.remove()
    }
    changePosition(t) {
        let [e, i] = this.getSizeTooltip(), n = this.getEdges(t), s = window.pageYOffset || document.documentElement.scrollTop, r = t.pageY, o = t.pageX;
        if (o = "right" === this.settings.positionX ? n.right <= e ? t.clientX - e - this.settings.indentX : t.clientX + this.settings.indentX : "left" === this.settings.positionX ? n.left <= e ? n.left + this.settings.indentX : t.clientX - e - this.settings.indentX : n.left <= Math.round(e / 2) ? t.clientX - n.left : t.clientX - Math.round(e / 2), "top" === this.settings.positionY) r = n.top <= i ? s + t.clientY + this.settings.indentY : t.pageY - i - this.settings.indentY;
        else if ("bottom" === this.settings.positionY) r = n.bottom < i && n.top > i + this.settings.indentY ? t.pageY - i - this.settings.indentY : s + t.clientY + this.settings.indentY;
        else {
            let a = Math.round(i / 2);
            n.bottom <= a && (a = Math.round(i - n.bottom)), n.top <= a && (a = n.top), r -= a
        }
        this.tooltip.style.top = `${r}px`, this.tooltip.style.left = `${o}px`
    }
    getSizeTooltip() {
        let t = this.tooltip.getBoundingClientRect();
        return [t.right - t.left, t.bottom - t.top]
    }
    getEdges(t) {
        let e = document.documentElement;
        return {
            left: t.clientX,
            right: e.clientWidth - t.clientX,
            top: t.clientY,
            bottom: e.clientHeight - t.clientY
        }
    }
}
/*!
 * jquery-hmbrgr.js v0.0.2
 * https://github.com/MorenoDiDomenico/jquery-hmbrgr
 *
 * Copyright 2015, Moreno Di Domenico
 * Released under the MIT license
 * http://mdd.mit-license.org
 *
 */
! function(t) {
    t.fn.hmbrgr = function(e) {
        function i(e) {
            t(e).css({
                width: a.width,
                height: a.height
            }).html("<span /><span /><span />").find("span").css({
                position: "absolute",
                width: "100%",
                height: a.barHeight,
                "border-radius": a.barRadius,
                "background-color": a.barColor,
                "transition-duration": a.speed + "ms"
            }), n(e), t.isFunction(a.onInit) && a.onInit.call(this)
        }

        function n(e) {
            t(e).data("clickable", !0).find("span").eq(0).css({
                top: l
            }), t(e).find("span").eq(1).css({
                top: u
            }), t(e).find("span").eq(2).css({
                top: h
            })
        }

        function s(e) {
            t(e).on("click", function(i) {
                i.preventDefault(), t(this).data("clickable") && (t(this).data("clickable", !1), t(e).toggleClass("cross"), t(e).hasClass("cross") ? r(e) : o(e))
            })
        }

        function r(e) {
            t(e).find("span").css({
                top: u
            }), setTimeout(function() {
                t(e).addClass(a.animation).data("clickable", !0), t.isFunction(a.onOpen) && a.onOpen.call(this)
            }, a.speed)
        }

        function o(e) {
            t(e).removeClass(a.animation), setTimeout(function() {
                n(e), t.isFunction(a.onClose) && a.onClose.call(this)
            }, a.speed)
        }
        var a = t.extend({
                width: 60,
                height: 50,
                speed: 200,
                barHeight: 8,
                barRadius: 0,
                barColor: "#ffffff",
                animation: "expand",
                onInit: null,
                onOpen: null,
                onClose: null
            }, e),
            l = 0,
            u = a.height / 2 - a.barHeight / 2,
            h = a.height - a.barHeight;
        return this.each(function() {
            i(this), s(this)
        })
    }
}(jQuery),
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t : t(jQuery)
}(function(t) {
    var e, i, n = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        s = "onwheel" in window.document || 9 <= window.document.documentMode ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        r = Array.prototype.slice;
    if (t.event.fixHooks)
        for (var o = n.length; o;) t.event.fixHooks[n[--o]] = t.event.mouseHooks;
    var a = t.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
            if (this.addEventListener)
                for (var e = s.length; e;) this.addEventListener(s[--e], l, !1);
            else this.onmousewheel = l;
            t.data(this, "mousewheel-line-height", a.getLineHeight(this)), t.data(this, "mousewheel-page-height", a.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var e = s.length; e;) this.removeEventListener(s[--e], l, !1);
            else this.onmousewheel = null;
            t.removeData(this, "mousewheel-line-height"), t.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(e) {
            var i = t(e),
                e = i["offsetParent" in t.fn ? "offsetParent" : "parent"]();
            return e.length || (e = t("body")), parseInt(e.css("fontSize"), 10) || parseInt(i.css("fontSize"), 10) || 16
        },
        getPageHeight: function(e) {
            return t(e).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };

    function l(n) {
        var s, o = n || window.event,
            l = r.call(arguments, 1),
            c = 0,
            d = 0,
            p = 0,
            f = 0;
        if ((n = t.event.fix(o)).type = "mousewheel", "detail" in o && (p = -1 * o.detail), "wheelDelta" in o && (p = o.wheelDelta), "wheelDeltaY" in o && (p = o.wheelDeltaY), "wheelDeltaX" in o && (d = -1 * o.wheelDeltaX), "axis" in o && o.axis === o.HORIZONTAL_AXIS && (d = -1 * p, p = 0), c = 0 === p ? d : p, "deltaY" in o && (c = p = -1 * o.deltaY), "deltaX" in o && (d = o.deltaX, 0 === p && (c = -1 * d)), 0 !== p || 0 !== d) return 1 === o.deltaMode ? (c *= s = t.data(this, "mousewheel-line-height"), p *= s, d *= s) : 2 === o.deltaMode && (c *= s = t.data(this, "mousewheel-page-height"), p *= s, d *= s), f = Math.max(Math.abs(p), Math.abs(d)), (!i || f < i) && h(o, i = f) && (i /= 40), h(o, f) && (c /= 40, d /= 40, p /= 40), c = Math[1 <= c ? "floor" : "ceil"](c / i), d = Math[1 <= d ? "floor" : "ceil"](d / i), p = Math[1 <= p ? "floor" : "ceil"](p / i), a.settings.normalizeOffset && this.getBoundingClientRect && (f = this.getBoundingClientRect(), n.offsetX = n.clientX - f.left, n.offsetY = n.clientY - f.top), n.deltaX = d, n.deltaY = p, n.deltaFactor = i, n.deltaMode = 0, l.unshift(n, c, d, p), e && window.clearTimeout(e), e = window.setTimeout(u, 200), (t.event.dispatch || t.event.handle).apply(this, l)
    }

    function u() {
        i = null
    }

    function h(t, e) {
        return a.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 == 0
    }
    t.fn.extend({
        mousewheel: function(t) {
            return t ? this.on("mousewheel", t) : this.trigger("mousewheel")
        },
        unmousewheel: function(t) {
            return this.off("mousewheel", t)
        }
    })
}),
/*! SmartMenus jQuery Plugin - v1.1.1 - July 23, 2020
 * http://www.smartmenus.org/
 * Copyright Vasil Dinkov, Vadikom Web Ltd. http://vadikom.com; Licensed MIT */
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && "object" == typeof module.exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function($) {
    function initMouseDetection(t) {
        var e = ".smartmenus_mouse";
        if (mouseDetectionEnabled || t) mouseDetectionEnabled && t && ($(document).off(e), mouseDetectionEnabled = !1);
        else {
            var i = !0,
                n = null,
                s = {
                    mousemove: function(t) {
                        var e = {
                            x: t.pageX,
                            y: t.pageY,
                            timeStamp: (new Date).getTime()
                        };
                        if (n) {
                            var s = Math.abs(n.x - e.x),
                                r = Math.abs(n.y - e.y);
                            if ((s > 0 || r > 0) && 4 >= s && 4 >= r && 300 >= e.timeStamp - n.timeStamp && (mouse = !0, i)) {
                                var o = $(t.target).closest("a");
                                o.is("a") && $.each(menuTrees, function() {
                                    return $.contains(this.$root[0], o[0]) ? (this.itemEnter({
                                        currentTarget: o[0]
                                    }), !1) : void 0
                                }), i = !1
                            }
                        }
                        n = e
                    }
                };
            s[touchEvents ? "touchstart" : "pointerover pointermove pointerout MSPointerOver MSPointerMove MSPointerOut"] = function(t) {
                isTouchEvent(t.originalEvent) && (mouse = !1)
            }, $(document).on(getEventsNS(s, e)), mouseDetectionEnabled = !0
        }
    }

    function isTouchEvent(t) {
        return !/^(4|mouse)$/.test(t.pointerType)
    }

    function getEventsNS(t, e) {
        e || (e = "");
        var i = {};
        for (var n in t) i[n.split(" ").join(e + " ") + e] = t[n];
        return i
    }
    var menuTrees = [],
        mouse = !1,
        touchEvents = "ontouchstart" in window,
        mouseDetectionEnabled = !1,
        requestAnimationFrame = window.requestAnimationFrame || function(t) {
            return setTimeout(t, 1e3 / 60)
        },
        cancelAnimationFrame = window.cancelAnimationFrame || function(t) {
            clearTimeout(t)
        },
        canAnimate = !!$.fn.animate;
    return $.SmartMenus = function(t, e) {
        this.$root = $(t), this.opts = e, this.rootId = "", this.accessIdPrefix = "", this.$subArrow = null, this.activatedItems = [], this.visibleSubMenus = [], this.showTimeout = 0, this.hideTimeout = 0, this.scrollTimeout = 0, this.clickActivated = !1, this.focusActivated = !1, this.zIndexInc = 0, this.idInc = 0, this.$firstLink = null, this.$firstSub = null, this.disabled = !1, this.$disableOverlay = null, this.$touchScrollingSub = null, this.cssTransforms3d = "perspective" in t.style || "webkitPerspective" in t.style, this.wasCollapsible = !1, this.init()
    }, $.extend($.SmartMenus, {
        hideAll: function() {
            $.each(menuTrees, function() {
                this.menuHideAll()
            })
        },
        destroy: function() {
            for (; menuTrees.length;) menuTrees[0].destroy();
            initMouseDetection(!0)
        },
        prototype: {
            init: function(t) {
                var e = this;
                if (!t) {
                    menuTrees.push(this), this.rootId = ((new Date).getTime() + Math.random() + "").replace(/\D/g, ""), this.accessIdPrefix = "sm-" + this.rootId + "-", this.$root.hasClass("sm-rtl") && (this.opts.rightToLeftSubMenus = !0);
                    var i = ".smartmenus";
                    this.$root.data("smartmenus", this).attr("data-smartmenus-id", this.rootId).dataSM("level", 1).on(getEventsNS({
                        "mouseover focusin": $.proxy(this.rootOver, this),
                        "mouseout focusout": $.proxy(this.rootOut, this),
                        keydown: $.proxy(this.rootKeyDown, this)
                    }, i)).on(getEventsNS({
                        mouseenter: $.proxy(this.itemEnter, this),
                        mouseleave: $.proxy(this.itemLeave, this),
                        mousedown: $.proxy(this.itemDown, this),
                        focus: $.proxy(this.itemFocus, this),
                        blur: $.proxy(this.itemBlur, this),
                        click: $.proxy(this.itemClick, this)
                    }, i), "a"), i += this.rootId, this.opts.hideOnClick && $(document).on(getEventsNS({
                        touchstart: $.proxy(this.docTouchStart, this),
                        touchmove: $.proxy(this.docTouchMove, this),
                        touchend: $.proxy(this.docTouchEnd, this),
                        click: $.proxy(this.docClick, this)
                    }, i)), $(window).on(getEventsNS({
                        "resize orientationchange": $.proxy(this.winResize, this)
                    }, i)), this.opts.subIndicators && (this.$subArrow = $("<span/>").addClass("sub-arrow"), this.opts.subIndicatorsText && this.$subArrow.html(this.opts.subIndicatorsText)), initMouseDetection()
                }
                if (this.$firstSub = this.$root.find("ul").each(function() {
                        e.menuInit($(this))
                    }).eq(0), this.$firstLink = this.$root.find("a").eq(0), this.opts.markCurrentItem) {
                    var n = /(index|default)\.[^#\?\/]*/i,
                        s = /#.*/,
                        r = window.location.href.replace(n, ""),
                        o = r.replace(s, "");
                    this.$root.find("a:not(.mega-menu a)").each(function() {
                        var t = this.href.replace(n, ""),
                            i = $(this);
                        (t == r || t == o) && (i.addClass("current"), e.opts.markCurrentTree && i.parentsUntil("[data-smartmenus-id]", "ul").each(function() {
                            $(this).dataSM("parent-a").addClass("current")
                        }))
                    })
                }
                this.wasCollapsible = this.isCollapsible()
            },
            destroy: function(t) {
                if (!t) {
                    var e = ".smartmenus";
                    this.$root.removeData("smartmenus").removeAttr("data-smartmenus-id").removeDataSM("level").off(e), e += this.rootId, $(document).off(e), $(window).off(e), this.opts.subIndicators && (this.$subArrow = null)
                }
                this.menuHideAll();
                var i = this;
                this.$root.find("ul").each(function() {
                    var t = $(this);
                    t.dataSM("scroll-arrows") && t.dataSM("scroll-arrows").remove(), t.dataSM("shown-before") && ((i.opts.subMenusMinWidth || i.opts.subMenusMaxWidth) && t.css({
                        width: "",
                        minWidth: "",
                        maxWidth: ""
                    }).removeClass("sm-nowrap"), t.dataSM("scroll-arrows") && t.dataSM("scroll-arrows").remove(), t.css({
                        zIndex: "",
                        top: "",
                        left: "",
                        marginLeft: "",
                        marginTop: "",
                        display: ""
                    })), 0 == (t.attr("id") || "").indexOf(i.accessIdPrefix) && t.removeAttr("id")
                }).removeDataSM("in-mega").removeDataSM("shown-before").removeDataSM("scroll-arrows").removeDataSM("parent-a").removeDataSM("level").removeDataSM("beforefirstshowfired").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeAttr("aria-expanded"), this.$root.find("a.has-submenu").each(function() {
                    var t = $(this);
                    0 == t.attr("id").indexOf(i.accessIdPrefix) && t.removeAttr("id")
                }).removeClass("has-submenu").removeDataSM("sub").removeAttr("aria-haspopup").removeAttr("aria-controls").removeAttr("aria-expanded").closest("li").removeDataSM("sub"), this.opts.subIndicators && this.$root.find("span.sub-arrow").remove(), this.opts.markCurrentItem && this.$root.find("a.current").removeClass("current"), t || (this.$root = null, this.$firstLink = null, this.$firstSub = null, this.$disableOverlay && (this.$disableOverlay.remove(), this.$disableOverlay = null), menuTrees.splice($.inArray(this, menuTrees), 1))
            },
            disable: function(t) {
                if (!this.disabled) {
                    if (this.menuHideAll(), !t && !this.opts.isPopup && this.$root.is(":visible")) {
                        var e = this.$root.offset();
                        this.$disableOverlay = $('<div class="sm-jquery-disable-overlay"/>').css({
                            position: "absolute",
                            top: e.top,
                            left: e.left,
                            width: this.$root.outerWidth(),
                            height: this.$root.outerHeight(),
                            zIndex: this.getStartZIndex(!0),
                            opacity: 0
                        }).appendTo(document.body)
                    }
                    this.disabled = !0
                }
            },
            docClick: function(t) {
                return this.$touchScrollingSub ? void(this.$touchScrollingSub = null) : void((this.visibleSubMenus.length && !$.contains(this.$root[0], t.target) || $(t.target).closest("a").length) && this.menuHideAll())
            },
            docTouchEnd: function() {
                if (this.lastTouch) {
                    if (!(!this.visibleSubMenus.length || void 0 !== this.lastTouch.x2 && this.lastTouch.x1 != this.lastTouch.x2 || void 0 !== this.lastTouch.y2 && this.lastTouch.y1 != this.lastTouch.y2 || this.lastTouch.target && $.contains(this.$root[0], this.lastTouch.target))) {
                        this.hideTimeout && (clearTimeout(this.hideTimeout), this.hideTimeout = 0);
                        var t = this;
                        this.hideTimeout = setTimeout(function() {
                            t.menuHideAll()
                        }, 350)
                    }
                    this.lastTouch = null
                }
            },
            docTouchMove: function(t) {
                if (this.lastTouch) {
                    var e = t.originalEvent.touches[0];
                    this.lastTouch.x2 = e.pageX, this.lastTouch.y2 = e.pageY
                }
            },
            docTouchStart: function(t) {
                var e = t.originalEvent.touches[0];
                this.lastTouch = {
                    x1: e.pageX,
                    y1: e.pageY,
                    target: e.target
                }
            },
            enable: function() {
                this.disabled && (this.$disableOverlay && (this.$disableOverlay.remove(), this.$disableOverlay = null), this.disabled = !1)
            },
            getClosestMenu: function(t) {
                for (var e = $(t).closest("ul"); e.dataSM("in-mega");) e = e.parent().closest("ul");
                return e[0] || null
            },
            getHeight: function(t) {
                return this.getOffset(t, !0)
            },
            getOffset: function(t, e) {
                "none" == t.css("display") && (i = {
                    position: t[0].style.position,
                    visibility: t[0].style.visibility
                }, t.css({
                    position: "absolute",
                    visibility: "hidden"
                }).show());
                var i, n = t[0].getBoundingClientRect && t[0].getBoundingClientRect(),
                    s = n && (e ? n.height || n.bottom - n.top : n.width || n.right - n.left);
                return s || 0 === s || (s = e ? t[0].offsetHeight : t[0].offsetWidth), i && t.hide().css(i), s
            },
            getStartZIndex: function(t) {
                var e = parseInt(this[t ? "$root" : "$firstSub"].css("z-index"));
                return !t && isNaN(e) && (e = parseInt(this.$root.css("z-index"))), isNaN(e) ? 1 : e
            },
            getTouchPoint: function(t) {
                return t.touches && t.touches[0] || t.changedTouches && t.changedTouches[0] || t
            },
            getViewport: function(t) {
                var e = t ? "Height" : "Width",
                    i = document.documentElement["client" + e],
                    n = window["inner" + e];
                return n && (i = Math.min(i, n)), i
            },
            getViewportHeight: function() {
                return this.getViewport(!0)
            },
            getViewportWidth: function() {
                return this.getViewport()
            },
            getWidth: function(t) {
                return this.getOffset(t)
            },
            handleEvents: function() {
                return !this.disabled && this.isCSSOn()
            },
            handleItemEvents: function(t) {
                return this.handleEvents() && !this.isLinkInMegaMenu(t)
            },
            isCollapsible: function() {
                return "static" == this.$firstSub.css("position")
            },
            isCSSOn: function() {
                return "inline" != this.$firstLink.css("display")
            },
            isFixed: function() {
                var t = "fixed" == this.$root.css("position");
                return t || this.$root.parentsUntil("body").each(function() {
                    return "fixed" == $(this).css("position") ? (t = !0, !1) : void 0
                }), t
            },
            isLinkInMegaMenu: function(t) {
                return $(this.getClosestMenu(t[0])).hasClass("mega-menu")
            },
            isTouchMode: function() {
                return !mouse || this.opts.noMouseOver || this.isCollapsible()
            },
            itemActivate: function(t, e) {
                var i = t.closest("ul"),
                    n = i.dataSM("level");
                if (n > 1 && (!this.activatedItems[n - 2] || this.activatedItems[n - 2][0] != i.dataSM("parent-a")[0])) {
                    var s = this;
                    $(i.parentsUntil("[data-smartmenus-id]", "ul").get().reverse()).add(i).each(function() {
                        s.itemActivate($(this).dataSM("parent-a"))
                    })
                }
                if ((!this.isCollapsible() || e) && this.menuHideSubMenus(this.activatedItems[n - 1] && this.activatedItems[n - 1][0] == t[0] ? n : n - 1), this.activatedItems[n - 1] = t, !1 !== this.$root.triggerHandler("activate.smapi", t[0])) {
                    var r = t.dataSM("sub");
                    r && (this.isTouchMode() || !this.opts.showOnClick || this.clickActivated) && this.menuShow(r)
                }
            },
            itemBlur: function(t) {
                var e = $(t.currentTarget);
                this.handleItemEvents(e) && this.$root.triggerHandler("blur.smapi", e[0])
            },
            itemClick: function(t) {
                var e = $(t.currentTarget);
                if (this.handleItemEvents(e)) {
                    if (this.$touchScrollingSub && this.$touchScrollingSub[0] == e.closest("ul")[0]) return this.$touchScrollingSub = null, t.stopPropagation(), !1;
                    if (!1 === this.$root.triggerHandler("click.smapi", e[0])) return !1;
                    var i = e.dataSM("sub"),
                        n = !!i && 2 == i.dataSM("level");
                    if (i) {
                        var s = $(t.target).is(".sub-arrow"),
                            r = this.isCollapsible(),
                            o = /toggle$/.test(this.opts.collapsibleBehavior),
                            a = /link$/.test(this.opts.collapsibleBehavior),
                            l = /^accordion/.test(this.opts.collapsibleBehavior);
                        if (i.is(":visible")) {
                            if (!r && this.opts.showOnClick && n) return this.menuHide(i), this.clickActivated = !1, this.focusActivated = !1, !1;
                            if (r && (o || s)) return this.itemActivate(e, l), this.menuHide(i), !1
                        } else if ((!a || !r || s) && (!r && this.opts.showOnClick && n && (this.clickActivated = !0), this.itemActivate(e, l), i.is(":visible"))) return this.focusActivated = !0, !1
                    }
                    return !(!r && this.opts.showOnClick && n || e.hasClass("disabled")) && !1 !== this.$root.triggerHandler("select.smapi", e[0]) && void 0
                }
            },
            itemDown: function(t) {
                var e = $(t.currentTarget);
                this.handleItemEvents(e) && e.dataSM("mousedown", !0)
            },
            itemEnter: function(t) {
                var e = $(t.currentTarget);
                if (this.handleItemEvents(e)) {
                    if (!this.isTouchMode()) {
                        this.showTimeout && (clearTimeout(this.showTimeout), this.showTimeout = 0);
                        var i = this;
                        this.showTimeout = setTimeout(function() {
                            i.itemActivate(e)
                        }, this.opts.showOnClick && 1 == e.closest("ul").dataSM("level") ? 1 : this.opts.showTimeout)
                    }
                    this.$root.triggerHandler("mouseenter.smapi", e[0])
                }
            },
            itemFocus: function(t) {
                var e = $(t.currentTarget);
                this.handleItemEvents(e) && (!this.focusActivated || this.isTouchMode() && e.dataSM("mousedown") || this.activatedItems.length && this.activatedItems[this.activatedItems.length - 1][0] == e[0] || this.itemActivate(e, !0), this.$root.triggerHandler("focus.smapi", e[0]))
            },
            itemLeave: function(t) {
                var e = $(t.currentTarget);
                this.handleItemEvents(e) && (this.isTouchMode() || (e[0].blur(), this.showTimeout && (clearTimeout(this.showTimeout), this.showTimeout = 0)), e.removeDataSM("mousedown"), this.$root.triggerHandler("mouseleave.smapi", e[0]))
            },
            menuHide: function(t) {
                if (!1 !== this.$root.triggerHandler("beforehide.smapi", t[0]) && (canAnimate && t.stop(!0, !0), "none" != t.css("display"))) {
                    var e = function() {
                        t.css("z-index", "")
                    };
                    this.isCollapsible() ? canAnimate && this.opts.collapsibleHideFunction ? this.opts.collapsibleHideFunction.call(this, t, e) : t.hide(this.opts.collapsibleHideDuration, e) : canAnimate && this.opts.hideFunction ? this.opts.hideFunction.call(this, t, e) : t.hide(this.opts.hideDuration, e), t.dataSM("scroll") && (this.menuScrollStop(t), t.css({
                        "touch-action": "",
                        "-ms-touch-action": "",
                        "-webkit-transform": "",
                        transform: ""
                    }).off(".smartmenus_scroll").removeDataSM("scroll").dataSM("scroll-arrows").hide()), t.dataSM("parent-a").removeClass("highlighted").attr("aria-expanded", "false"), t.attr({
                        "aria-expanded": "false",
                        "aria-hidden": "true"
                    });
                    var i = t.dataSM("level");
                    this.activatedItems.splice(i - 1, 1), this.visibleSubMenus.splice($.inArray(t, this.visibleSubMenus), 1), this.$root.triggerHandler("hide.smapi", t[0])
                }
            },
            menuHideAll: function() {
                this.showTimeout && (clearTimeout(this.showTimeout), this.showTimeout = 0);
                for (var t = this.opts.isPopup ? 1 : 0, e = this.visibleSubMenus.length - 1; e >= t; e--) this.menuHide(this.visibleSubMenus[e]);
                this.opts.isPopup && (canAnimate && this.$root.stop(!0, !0), this.$root.is(":visible") && (canAnimate && this.opts.hideFunction ? this.opts.hideFunction.call(this, this.$root) : this.$root.hide(this.opts.hideDuration))), this.activatedItems = [], this.visibleSubMenus = [], this.clickActivated = !1, this.focusActivated = !1, this.zIndexInc = 0, this.$root.triggerHandler("hideAll.smapi")
            },
            menuHideSubMenus: function(t) {
                for (var e = this.activatedItems.length - 1; e >= t; e--) {
                    var i = this.activatedItems[e].dataSM("sub");
                    i && this.menuHide(i)
                }
            },
            menuInit: function(t) {
                if (!t.dataSM("in-mega")) {
                    t.hasClass("mega-menu") && t.find("ul").dataSM("in-mega", !0);
                    for (var e = 2, i = t[0];
                        (i = i.parentNode.parentNode) != this.$root[0];) e++;
                    var n = t.prevAll("a").eq(-1);
                    n.length || (n = t.prevAll().find("a").eq(-1)), n.addClass("has-submenu").dataSM("sub", t), t.dataSM("parent-a", n).dataSM("level", e).parent().dataSM("sub", t);
                    var s = n.attr("id") || this.accessIdPrefix + ++this.idInc,
                        r = t.attr("id") || this.accessIdPrefix + ++this.idInc;
                    n.attr({
                        id: s,
                        "aria-haspopup": "true",
                        "aria-controls": r,
                        "aria-expanded": "false"
                    }), t.attr({
                        id: r,
                        role: "group",
                        "aria-hidden": "true",
                        "aria-labelledby": s,
                        "aria-expanded": "false"
                    }), this.opts.subIndicators && n[this.opts.subIndicatorsPos](this.$subArrow.clone())
                }
            },
            menuPosition: function(t) {
                var e, i, n = t.dataSM("parent-a"),
                    s = n.closest("li"),
                    r = s.parent(),
                    o = t.dataSM("level"),
                    a = this.getWidth(t),
                    l = this.getHeight(t),
                    u = n.offset(),
                    h = u.left,
                    c = u.top,
                    d = this.getWidth(n),
                    p = this.getHeight(n),
                    f = $(window),
                    g = f.scrollLeft(),
                    m = f.scrollTop(),
                    y = this.getViewportWidth(),
                    v = this.getViewportHeight(),
                    b = r.parent().is("[data-sm-horizontal-sub]") || 2 == o && !r.hasClass("sm-vertical"),
                    w = this.opts.rightToLeftSubMenus && !s.is("[data-sm-reverse]") || !this.opts.rightToLeftSubMenus && s.is("[data-sm-reverse]"),
                    _ = 2 == o ? this.opts.mainMenuSubOffsetX : this.opts.subMenusSubOffsetX,
                    x = 2 == o ? this.opts.mainMenuSubOffsetY : this.opts.subMenusSubOffsetY;
                if (b ? (e = w ? d - a - _ : _, i = this.opts.bottomToTopSubMenus ? -l - x : p + x) : (e = w ? _ - a : d - _, i = this.opts.bottomToTopSubMenus ? p - x - l : x), this.opts.keepInViewport) {
                    var S = h + e,
                        T = c + i;
                    if (w && g > S ? e = b ? g - S + e : d - _ : !w && S + a > g + y && (e = b ? g + y - a - S + e : _ - a), b || (v > l && T + l > m + v ? i += m + v - l - T : (l >= v || m > T) && (i += m - T)), b && (T + l > m + v + .49 || m > T) || !b && l > v + .49) {
                        var k = this;
                        t.dataSM("scroll-arrows") || t.dataSM("scroll-arrows", $([$('<span class="scroll-up"><span class="scroll-up-arrow"></span></span>')[0], $('<span class="scroll-down"><span class="scroll-down-arrow"></span></span>')[0]]).on({
                            mouseenter: function() {
                                t.dataSM("scroll").up = $(this).hasClass("scroll-up"), k.menuScroll(t)
                            },
                            mouseleave: function(e) {
                                k.menuScrollStop(t), k.menuScrollOut(t, e)
                            },
                            "mousewheel DOMMouseScroll": function(t) {
                                t.preventDefault()
                            }
                        }).insertAfter(t));
                        var C = ".smartmenus_scroll";
                        if (t.dataSM("scroll", {
                                y: this.cssTransforms3d ? 0 : i - p,
                                step: 1,
                                itemH: p,
                                subH: l,
                                arrowDownH: this.getHeight(t.dataSM("scroll-arrows").eq(1))
                            }).on(getEventsNS({
                                mouseover: function(e) {
                                    k.menuScrollOver(t, e)
                                },
                                mouseout: function(e) {
                                    k.menuScrollOut(t, e)
                                },
                                "mousewheel DOMMouseScroll": function(e) {
                                    k.menuScrollMousewheel(t, e)
                                }
                            }, C)).dataSM("scroll-arrows").css({
                                top: "auto",
                                left: "0",
                                marginLeft: e + (parseInt(t.css("border-left-width")) || 0),
                                width: a - (parseInt(t.css("border-left-width")) || 0) - (parseInt(t.css("border-right-width")) || 0),
                                zIndex: t.css("z-index")
                            }).eq(b && this.opts.bottomToTopSubMenus ? 0 : 1).show(), this.isFixed()) {
                            var A = {};
                            A[touchEvents ? "touchstart touchmove touchend" : "pointerdown pointermove pointerup MSPointerDown MSPointerMove MSPointerUp"] = function(e) {
                                k.menuScrollTouch(t, e)
                            }, t.css({
                                "touch-action": "none",
                                "-ms-touch-action": "none"
                            }).on(getEventsNS(A, C))
                        }
                    }
                }
                t.css({
                    top: "auto",
                    left: "0",
                    marginLeft: e,
                    marginTop: i - p
                })
            },
            menuScroll: function(t, e, i) {
                var n, s = t.dataSM("scroll"),
                    r = t.dataSM("scroll-arrows"),
                    o = s.up ? s.upEnd : s.downEnd;
                if (!e && s.momentum) {
                    if (s.momentum *= .92, .5 > (n = s.momentum)) return void this.menuScrollStop(t)
                } else n = i || (e || !this.opts.scrollAccelerate ? this.opts.scrollStep : Math.floor(s.step));
                var a = t.dataSM("level");
                if (this.activatedItems[a - 1] && this.activatedItems[a - 1].dataSM("sub") && this.activatedItems[a - 1].dataSM("sub").is(":visible") && this.menuHideSubMenus(a - 1), s.y = s.up && s.y >= o || !s.up && o >= s.y ? s.y : Math.abs(o - s.y) > n ? s.y + (s.up ? n : -n) : o, t.css(this.cssTransforms3d ? {
                        "-webkit-transform": "translate3d(0, " + s.y + "px, 0)",
                        transform: "translate3d(0, " + s.y + "px, 0)"
                    } : {
                        marginTop: s.y
                    }), mouse && (s.up && s.y > s.downEnd || !s.up && s.y < s.upEnd) && r.eq(s.up ? 1 : 0).show(), s.y == o) mouse && r.eq(s.up ? 0 : 1).hide(), this.menuScrollStop(t);
                else if (!e) {
                    this.opts.scrollAccelerate && s.step < this.opts.scrollStep && (s.step += .2);
                    var l = this;
                    this.scrollTimeout = requestAnimationFrame(function() {
                        l.menuScroll(t)
                    })
                }
            },
            menuScrollMousewheel: function(t, e) {
                if (this.getClosestMenu(e.target) == t[0]) {
                    var i = ((e = e.originalEvent).wheelDelta || -e.detail) > 0;
                    t.dataSM("scroll-arrows").eq(i ? 0 : 1).is(":visible") && (t.dataSM("scroll").up = i, this.menuScroll(t, !0))
                }
                e.preventDefault()
            },
            menuScrollOut: function(t, e) {
                mouse && (/^scroll-(up|down)/.test((e.relatedTarget || "").className) || (t[0] == e.relatedTarget || $.contains(t[0], e.relatedTarget)) && this.getClosestMenu(e.relatedTarget) == t[0] || t.dataSM("scroll-arrows").css("visibility", "hidden"))
            },
            menuScrollOver: function(t, e) {
                if (mouse && !/^scroll-(up|down)/.test(e.target.className) && this.getClosestMenu(e.target) == t[0]) {
                    this.menuScrollRefreshData(t);
                    var i = t.dataSM("scroll"),
                        n = $(window).scrollTop() - t.dataSM("parent-a").offset().top - i.itemH;
                    t.dataSM("scroll-arrows").eq(0).css("margin-top", n).end().eq(1).css("margin-top", n + this.getViewportHeight() - i.arrowDownH).end().css("visibility", "visible")
                }
            },
            menuScrollRefreshData: function(t) {
                var e = t.dataSM("scroll"),
                    i = $(window).scrollTop() - t.dataSM("parent-a").offset().top - e.itemH;
                this.cssTransforms3d && (i = -(parseFloat(t.css("margin-top")) - i)), $.extend(e, {
                    upEnd: i,
                    downEnd: i + this.getViewportHeight() - e.subH
                })
            },
            menuScrollStop: function(t) {
                return this.scrollTimeout ? (cancelAnimationFrame(this.scrollTimeout), this.scrollTimeout = 0, t.dataSM("scroll").step = 1, !0) : void 0
            },
            menuScrollTouch: function(t, e) {
                if (isTouchEvent(e = e.originalEvent)) {
                    var i = this.getTouchPoint(e);
                    if (this.getClosestMenu(i.target) == t[0]) {
                        var n = t.dataSM("scroll");
                        if (/(start|down)$/i.test(e.type)) this.menuScrollStop(t) ? (e.preventDefault(), this.$touchScrollingSub = t) : this.$touchScrollingSub = null, this.menuScrollRefreshData(t), $.extend(n, {
                            touchStartY: i.pageY,
                            touchStartTime: e.timeStamp
                        });
                        else if (/move$/i.test(e.type)) {
                            var s = void 0 !== n.touchY ? n.touchY : n.touchStartY;
                            if (void 0 !== s && s != i.pageY) {
                                this.$touchScrollingSub = t;
                                var r = i.pageY > s;
                                void 0 !== n.up && n.up != r && $.extend(n, {
                                    touchStartY: i.pageY,
                                    touchStartTime: e.timeStamp
                                }), $.extend(n, {
                                    up: r,
                                    touchY: i.pageY
                                }), this.menuScroll(t, !0, Math.abs(i.pageY - s))
                            }
                            e.preventDefault()
                        } else void 0 !== n.touchY && ((n.momentum = 15 * Math.pow(Math.abs(i.pageY - n.touchStartY) / (e.timeStamp - n.touchStartTime), 2)) && (this.menuScrollStop(t), this.menuScroll(t), e.preventDefault()), delete n.touchY)
                    }
                }
            },
            menuShow: function(t) {
                if ((t.dataSM("beforefirstshowfired") || (t.dataSM("beforefirstshowfired", !0), !1 !== this.$root.triggerHandler("beforefirstshow.smapi", t[0]))) && !1 !== this.$root.triggerHandler("beforeshow.smapi", t[0]) && (t.dataSM("shown-before", !0), canAnimate && t.stop(!0, !0), !t.is(":visible"))) {
                    var e = t.dataSM("parent-a"),
                        i = this.isCollapsible();
                    if ((this.opts.keepHighlighted || i) && e.addClass("highlighted"), i) t.removeClass("sm-nowrap").css({
                        zIndex: "",
                        width: "auto",
                        minWidth: "",
                        maxWidth: "",
                        top: "",
                        left: "",
                        marginLeft: "",
                        marginTop: ""
                    });
                    else {
                        if (t.css("z-index", this.zIndexInc = (this.zIndexInc || this.getStartZIndex()) + 1), (this.opts.subMenusMinWidth || this.opts.subMenusMaxWidth) && (t.css({
                                width: "auto",
                                minWidth: "",
                                maxWidth: ""
                            }).addClass("sm-nowrap"), this.opts.subMenusMinWidth && t.css("min-width", this.opts.subMenusMinWidth), this.opts.subMenusMaxWidth)) {
                            var n = this.getWidth(t);
                            t.css("max-width", this.opts.subMenusMaxWidth), n > this.getWidth(t) && t.removeClass("sm-nowrap").css("width", this.opts.subMenusMaxWidth)
                        }
                        this.menuPosition(t)
                    }
                    var s = function() {
                        t.css("overflow", "")
                    };
                    i ? canAnimate && this.opts.collapsibleShowFunction ? this.opts.collapsibleShowFunction.call(this, t, s) : t.show(this.opts.collapsibleShowDuration, s) : canAnimate && this.opts.showFunction ? this.opts.showFunction.call(this, t, s) : t.show(this.opts.showDuration, s), e.attr("aria-expanded", "true"), t.attr({
                        "aria-expanded": "true",
                        "aria-hidden": "false"
                    }), this.visibleSubMenus.push(t), this.$root.triggerHandler("show.smapi", t[0])
                }
            },
            popupHide: function(t) {
                this.hideTimeout && (clearTimeout(this.hideTimeout), this.hideTimeout = 0);
                var e = this;
                this.hideTimeout = setTimeout(function() {
                    e.menuHideAll()
                }, t ? 1 : this.opts.hideTimeout)
            },
            popupShow: function(t, e) {
                if (!this.opts.isPopup) return void alert('SmartMenus jQuery Error:\n\nIf you want to show this menu via the "popupShow" method, set the isPopup:true option.');
                if (this.hideTimeout && (clearTimeout(this.hideTimeout), this.hideTimeout = 0), this.$root.dataSM("shown-before", !0), canAnimate && this.$root.stop(!0, !0), !this.$root.is(":visible")) {
                    this.$root.css({
                        left: t,
                        top: e
                    });
                    var i = this,
                        n = function() {
                            i.$root.css("overflow", "")
                        };
                    canAnimate && this.opts.showFunction ? this.opts.showFunction.call(this, this.$root, n) : this.$root.show(this.opts.showDuration, n), this.visibleSubMenus[0] = this.$root
                }
            },
            refresh: function() {
                this.destroy(!0), this.init(!0)
            },
            rootKeyDown: function(t) {
                if (this.handleEvents()) switch (t.keyCode) {
                    case 27:
                        var e = this.activatedItems[0];
                        if (e) {
                            this.menuHideAll(), e[0].focus();
                            var i = e.dataSM("sub");
                            i && this.menuHide(i)
                        }
                        break;
                    case 32:
                        var n = $(t.target);
                        if (n.is("a") && this.handleItemEvents(n)) {
                            var i = n.dataSM("sub");
                            i && !i.is(":visible") && (this.itemClick({
                                currentTarget: t.target
                            }), t.preventDefault())
                        }
                }
            },
            rootOut: function(t) {
                if (this.handleEvents() && !this.isTouchMode() && t.target != this.$root[0] && (this.hideTimeout && (clearTimeout(this.hideTimeout), this.hideTimeout = 0), !this.opts.showOnClick || !this.opts.hideOnClick)) {
                    var e = this;
                    this.hideTimeout = setTimeout(function() {
                        e.menuHideAll()
                    }, this.opts.hideTimeout)
                }
            },
            rootOver: function(t) {
                this.handleEvents() && !this.isTouchMode() && t.target != this.$root[0] && this.hideTimeout && (clearTimeout(this.hideTimeout), this.hideTimeout = 0)
            },
            winResize: function(t) {
                if (this.handleEvents()) {
                    if (!("onorientationchange" in window) || "orientationchange" == t.type) {
                        var e = this.isCollapsible();
                        this.wasCollapsible && e || (this.activatedItems.length && this.activatedItems[this.activatedItems.length - 1][0].blur(), this.menuHideAll()), this.wasCollapsible = e
                    }
                } else if (this.$disableOverlay) {
                    var i = this.$root.offset();
                    this.$disableOverlay.css({
                        top: i.top,
                        left: i.left,
                        width: this.$root.outerWidth(),
                        height: this.$root.outerHeight()
                    })
                }
            }
        }
    }), $.fn.dataSM = function(t, e) {
        return e ? this.data(t + "_smartmenus", e) : this.data(t + "_smartmenus")
    }, $.fn.removeDataSM = function(t) {
        return this.removeData(t + "_smartmenus")
    }, $.fn.smartmenus = function(options) {
        if ("string" == typeof options) {
            var args = arguments,
                method = options;
            return Array.prototype.shift.call(args), this.each(function() {
                var t = $(this).data("smartmenus");
                t && t[method] && t[method].apply(t, args)
            })
        }
        return this.each(function() {
            var dataOpts = $(this).data("sm-options") || null;
            if (dataOpts && "object" != typeof dataOpts) try {
                dataOpts = eval("(" + dataOpts + ")")
            } catch (e) {
                dataOpts = null, alert('ERROR\n\nSmartMenus jQuery init:\nInvalid "data-sm-options" attribute value syntax.')
            }
            new $.SmartMenus(this, $.extend({}, $.fn.smartmenus.defaults, options, dataOpts))
        })
    }, $.fn.smartmenus.defaults = {
        isPopup: !1,
        mainMenuSubOffsetX: 0,
        mainMenuSubOffsetY: 0,
        subMenusSubOffsetX: 0,
        subMenusSubOffsetY: 0,
        subMenusMinWidth: "10rem",
        subMenusMaxWidth: "25rem",
        subIndicators: !0,
        subIndicatorsPos: "append",
        subIndicatorsText: "",
        scrollStep: 30,
        scrollAccelerate: !0,
        showTimeout: 200,
        hideTimeout: 200,
        showDuration: 0,
        showFunction: null,
        hideDuration: 0,
        hideFunction: function(t, e) {
            t.fadeOut(200, e)
        },
        collapsibleShowDuration: 0,
        collapsibleShowFunction: function(t, e) {
            t.slideDown(200, e)
        },
        collapsibleHideDuration: 0,
        collapsibleHideFunction: function(t, e) {
            t.slideUp(200, e)
        },
        showOnClick: !1,
        hideOnClick: !0,
        noMouseOver: !1,
        keepInViewport: !0,
        keepHighlighted: !0,
        markCurrentItem: !1,
        markCurrentTree: !0,
        rightToLeftSubMenus: !1,
        bottomToTopSubMenus: !1,
        collapsibleBehavior: "link"
    }, $
}),
function(t) {
    "function" == typeof define && define.amd ? define(["jquery", "smartmenus"], t) : "object" == typeof module && "object" == typeof module.exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function(t) {
    return t.extend(t.SmartMenus.Bootstrap = {}, {
        keydownFix: !1,
        init: function() {
            var e = t("ul.navbar-nav:not([data-sm-skip])");
            e.each(function() {
                var e = t(this),
                    i = e.data("smartmenus");
                if (!i) {
                    var n, s = e.is("[data-sm-skip-collapsible-behavior]"),
                        r = e.hasClass("ml-auto") || e.prevAll(".mr-auto").length > 0;

                    function o() {
                        e.find("a.current").each(function() {
                            var e = t(this);
                            (e.hasClass("dropdown-item") ? e : e.parent()).addClass("active")
                        }), e.find("a.has-submenu").each(function() {
                            var e = t(this);
                            e.is('[data-toggle="dropdown"]') && e.dataSM("bs-data-toggle-dropdown", !0).removeAttr("data-toggle"), !s && e.hasClass("dropdown-toggle") && e.dataSM("bs-dropdown-toggle", !0).removeClass("dropdown-toggle")
                        })
                    }

                    function a() {
                        e.find("a.current").each(function() {
                            var e = t(this);
                            (e.hasClass("active") ? e : e.parent()).removeClass("active")
                        }), e.find("a.has-submenu").each(function() {
                            var e = t(this);
                            e.dataSM("bs-dropdown-toggle") && e.addClass("dropdown-toggle").removeDataSM("bs-dropdown-toggle"), e.dataSM("bs-data-toggle-dropdown") && e.attr("data-toggle", "dropdown").removeDataSM("bs-data-toggle-dropdown")
                        })
                    }

                    function l(t) {
                        var s = i.getViewportWidth();
                        (s != n || t) && (i.isCollapsible() ? e.addClass("sm-collapsible") : e.removeClass("sm-collapsible"), n = s)
                    }
                    e.smartmenus({
                        subMenusSubOffsetX: -8,
                        subMenusSubOffsetY: 0,
                        subIndicators: !s,
                        collapsibleShowFunction: null,
                        collapsibleHideFunction: null,
                        rightToLeftSubMenus: r,
                        bottomToTopSubMenus: e.closest(".fixed-bottom").length > 0,
                        bootstrapHighlightClasses: ""
                    }).on({
                        "show.smapi": function(e, n) {
                            var s = t(n),
                                r = s.dataSM("scroll-arrows");
                            r && r.css("background-color", s.css("background-color")), s.parent().addClass("show"), i.opts.keepHighlighted && s.dataSM("level") > 2 && s.prevAll("a").addClass(i.opts.bootstrapHighlightClasses)
                        },
                        "hide.smapi": function(e, n) {
                            var s = t(n);
                            s.parent().removeClass("show"), i.opts.keepHighlighted && s.dataSM("level") > 2 && s.prevAll("a").removeClass(i.opts.bootstrapHighlightClasses)
                        }
                    }), i = e.data("smartmenus"), o(), i.refresh = function() {
                        t.SmartMenus.prototype.refresh.call(this), o(), l(!0)
                    }, i.destroy = function(e) {
                        a(), t.SmartMenus.prototype.destroy.call(this, e)
                    }, s && (i.opts.collapsibleBehavior = "toggle"), l(), t(window).on("resize.smartmenus" + i.rootId, l)
                }
            }), e.length && !t.SmartMenus.Bootstrap.keydownFix && (t(document).off("keydown.bs.dropdown.data-api", ".dropdown-menu"), t.fn.dropdown && t.fn.dropdown.Constructor && "function" == typeof t.fn.dropdown.Constructor._dataApiKeydownHandler && t(document).on("keydown.bs.dropdown.data-api", ".dropdown-menu.show", t.fn.dropdown.Constructor._dataApiKeydownHandler), t.SmartMenus.Bootstrap.keydownFix = !0)
        }
    }), t(t.SmartMenus.Bootstrap.init), t
}),
function() {
    "use strict";

    function t(n) {
        if (!n) throw Error("No options passed to Waypoint constructor");
        if (!n.element) throw Error("No element option passed to Waypoint constructor");
        if (!n.handler) throw Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, n), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = n.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1
    }
    var e = 0,
        i = {};
    t.prototype.queueTrigger = function(t) {
        this.group.queueTrigger(this, t)
    }, t.prototype.trigger = function(t) {
        this.enabled && this.callback && this.callback.apply(this, t)
    }, t.prototype.destroy = function() {
        this.context.remove(this), this.group.remove(this), delete i[this.key]
    }, t.prototype.disable = function() {
        return this.enabled = !1, this
    }, t.prototype.enable = function() {
        return this.context.refresh(), this.enabled = !0, this
    }, t.prototype.next = function() {
        return this.group.next(this)
    }, t.prototype.previous = function() {
        return this.group.previous(this)
    }, t.invokeAll = function(t) {
        var e = [];
        for (var n in i) e.push(i[n]);
        for (var s = 0, r = e.length; r > s; s++) e[s][t]()
    }, t.destroyAll = function() {
        t.invokeAll("destroy")
    }, t.disableAll = function() {
        t.invokeAll("disable")
    }, t.enableAll = function() {
        for (var e in t.Context.refreshAll(), i) i[e].enabled = !0;
        return this
    }, t.refreshAll = function() {
        t.Context.refreshAll()
    }, t.viewportHeight = function() {
        return window.innerHeight || document.documentElement.clientHeight
    }, t.viewportWidth = function() {
        return document.documentElement.clientWidth
    }, t.adapters = [], t.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    }, t.offsetAliases = {
        "bottom-in-view": function() {
            return this.context.innerHeight() - this.adapter.outerHeight()
        },
        "right-in-view": function() {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    }, window.Waypoint = t
}(),
function() {
    "use strict";

    function t(t) {
        window.setTimeout(t, 1e3 / 60)
    }

    function e(t) {
        this.element = t, this.Adapter = s.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        }, this.waypoints = {
            vertical: {},
            horizontal: {}
        }, t.waypointContextKey = this.key, n[t.waypointContextKey] = this, i += 1, s.windowContext || (s.windowContext = !0, s.windowContext = new e(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
    }
    var i = 0,
        n = {},
        s = window.Waypoint,
        r = window.onload;
    e.prototype.add = function(t) {
        var e = t.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[e][t.key] = t, this.refresh()
    }, e.prototype.checkEmpty = function() {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
            e = this.Adapter.isEmptyObject(this.waypoints.vertical),
            i = this.element == this.element.window;
        t && e && !i && (this.adapter.off(".waypoints"), delete n[this.key])
    }, e.prototype.createThrottledResizeHandler = function() {
        function t() {
            e.handleResize(), e.didResize = !1
        }
        var e = this;
        this.adapter.on("resize.waypoints", function() {
            e.didResize || (e.didResize = !0, s.requestAnimationFrame(t))
        })
    }, e.prototype.createThrottledScrollHandler = function() {
        function t() {
            e.handleScroll(), e.didScroll = !1
        }
        var e = this;
        this.adapter.on("scroll.waypoints", function() {
            (!e.didScroll || s.isTouch) && (e.didScroll = !0, s.requestAnimationFrame(t))
        })
    }, e.prototype.handleResize = function() {
        s.Context.refreshAll()
    }, e.prototype.handleScroll = function() {
        var t = {},
            e = {
                horizontal: {
                    newScroll: this.adapter.scrollLeft(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left"
                },
                vertical: {
                    newScroll: this.adapter.scrollTop(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up"
                }
            };
        for (var i in e) {
            var n = e[i],
                s = n.newScroll > n.oldScroll ? n.forward : n.backward;
            for (var r in this.waypoints[i]) {
                var o = this.waypoints[i][r];
                if (null !== o.triggerPoint) {
                    var a = n.oldScroll < o.triggerPoint,
                        l = n.newScroll >= o.triggerPoint,
                        u = a && l,
                        h = !a && !l;
                    (u || h) && (o.queueTrigger(s), t[o.group.id] = o.group)
                }
            }
        }
        for (var c in t) t[c].flushTriggers();
        this.oldScroll = {
            x: e.horizontal.newScroll,
            y: e.vertical.newScroll
        }
    }, e.prototype.innerHeight = function() {
        return this.element == this.element.window ? s.viewportHeight() : this.adapter.innerHeight()
    }, e.prototype.remove = function(t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty()
    }, e.prototype.innerWidth = function() {
        return this.element == this.element.window ? s.viewportWidth() : this.adapter.innerWidth()
    }, e.prototype.destroy = function() {
        var t = [];
        for (var e in this.waypoints)
            for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var n = 0, s = t.length; s > n; n++) t[n].destroy()
    }, e.prototype.refresh = function() {
        var t, e = this.element == this.element.window,
            i = e ? void 0 : this.adapter.offset(),
            n = {};
        for (var r in this.handleScroll(), t = {
                horizontal: {
                    contextOffset: e ? 0 : i.left,
                    contextScroll: e ? 0 : this.oldScroll.x,
                    contextDimension: this.innerWidth(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left",
                    offsetProp: "left"
                },
                vertical: {
                    contextOffset: e ? 0 : i.top,
                    contextScroll: e ? 0 : this.oldScroll.y,
                    contextDimension: this.innerHeight(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up",
                    offsetProp: "top"
                }
            }) {
            var o = t[r];
            for (var a in this.waypoints[r]) {
                var l, u, h, c, d, p = this.waypoints[r][a],
                    f = p.options.offset,
                    g = p.triggerPoint,
                    m = 0,
                    y = null == g;
                p.element !== p.element.window && (m = p.adapter.offset()[o.offsetProp]), "function" == typeof f ? f = f.apply(p) : "string" == typeof f && (f = parseFloat(f), p.options.offset.indexOf("%") > -1 && (f = Math.ceil(o.contextDimension * f / 100))), l = o.contextScroll - o.contextOffset, p.triggerPoint = Math.floor(m + l - f), u = g < o.oldScroll, h = p.triggerPoint >= o.oldScroll, c = u && h, d = !u && !h, !y && c ? (p.queueTrigger(o.backward), n[p.group.id] = p.group) : !y && d ? (p.queueTrigger(o.forward), n[p.group.id] = p.group) : y && o.oldScroll >= p.triggerPoint && (p.queueTrigger(o.forward), n[p.group.id] = p.group)
            }
        }
        return s.requestAnimationFrame(function() {
            for (var t in n) n[t].flushTriggers()
        }), this
    }, e.findOrCreateByElement = function(t) {
        return e.findByElement(t) || new e(t)
    }, e.refreshAll = function() {
        for (var t in n) n[t].refresh()
    }, e.findByElement = function(t) {
        return n[t.waypointContextKey]
    }, window.onload = function() {
        r && r(), e.refreshAll()
    }, s.requestAnimationFrame = function(e) {
        (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t).call(window, e)
    }, s.Context = e
}(),
function() {
    "use strict";

    function t(t, e) {
        return t.triggerPoint - e.triggerPoint
    }

    function e(t, e) {
        return e.triggerPoint - t.triggerPoint
    }

    function i(t) {
        this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), n[this.axis][this.name] = this
    }
    var n = {
            vertical: {},
            horizontal: {}
        },
        s = window.Waypoint;
    i.prototype.add = function(t) {
        this.waypoints.push(t)
    }, i.prototype.clearTriggerQueues = function() {
        this.triggerQueues = {
            up: [],
            down: [],
            left: [],
            right: []
        }
    }, i.prototype.flushTriggers = function() {
        for (var i in this.triggerQueues) {
            var n = this.triggerQueues[i],
                s = "up" === i || "left" === i;
            n.sort(s ? e : t);
            for (var r = 0, o = n.length; o > r; r += 1) {
                var a = n[r];
                (a.options.continuous || r === n.length - 1) && a.trigger([i])
            }
        }
        this.clearTriggerQueues()
    }, i.prototype.next = function(e) {
        this.waypoints.sort(t);
        var i = s.Adapter.inArray(e, this.waypoints);
        return i === this.waypoints.length - 1 ? null : this.waypoints[i + 1]
    }, i.prototype.previous = function(e) {
        this.waypoints.sort(t);
        var i = s.Adapter.inArray(e, this.waypoints);
        return i ? this.waypoints[i - 1] : null
    }, i.prototype.queueTrigger = function(t, e) {
        this.triggerQueues[e].push(t)
    }, i.prototype.remove = function(t) {
        var e = s.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1)
    }, i.prototype.first = function() {
        return this.waypoints[0]
    }, i.prototype.last = function() {
        return this.waypoints[this.waypoints.length - 1]
    }, i.findOrCreate = function(t) {
        return n[t.axis][t.name] || new i(t)
    }, s.Group = i
}(),
function() {
    "use strict";

    function t(t) {
        this.$element = e(t)
    }
    var e = window.jQuery,
        i = window.Waypoint;
    e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(e, i) {
        t.prototype[i] = function() {
            var t = Array.prototype.slice.call(arguments);
            return this.$element[i].apply(this.$element, t)
        }
    }), e.each(["extend", "inArray", "isEmptyObject"], function(i, n) {
        t[n] = e[n]
    }), i.adapters.push({
        name: "jquery",
        Adapter: t
    }), i.Adapter = t
}(),
function() {
    "use strict";

    function t(t) {
        return function() {
            var i = [],
                n = arguments[0];
            return t.isFunction(arguments[0]) && (n = t.extend({}, arguments[1]), n.handler = arguments[0]), this.each(function() {
                var s = t.extend({}, n, {
                    element: this
                });
                "string" == typeof s.context && (s.context = t(this).closest(s.context)[0]), i.push(new e(s))
            }), i
        }
    }
    var e = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
}(),
function(t, e, i, n) {
    function s(e, i) {
        this.settings = null, this.options = t.extend({}, s.Defaults, i), this.$element = t(e), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        }, this._states = {
            current: {},
            tags: {
                initializing: ["busy"],
                animating: ["busy"],
                dragging: ["interacting"]
            }
        }, t.each(["onResize", "onThrottledResize"], t.proxy(function(e, i) {
            this._handlers[i] = t.proxy(this[i], this)
        }, this)), t.each(s.Plugins, t.proxy(function(t, e) {
            this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
        }, this)), t.each(s.Workers, t.proxy(function(e, i) {
            this._pipe.push({
                filter: i.filter,
                run: t.proxy(i.run, this)
            })
        }, this)), this.setup(), this.initialize()
    }
    s.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        checkVisibility: !0,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: e,
        fallbackEasing: "swing",
        slideTransition: "",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    }, s.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, s.Type = {
        Event: "event",
        State: "state"
    }, s.Plugins = {}, s.Workers = [{
        filter: ["width", "settings"],
        run: function() {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            t.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var e = this.settings.margin || "",
                i = !this.settings.autoWidth,
                n = this.settings.rtl,
                s = {
                    width: "auto",
                    "margin-left": n ? e : "",
                    "margin-right": n ? "" : e
                };
            i || this.$stage.children().css(s), t.css = s
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                i = null,
                n = this._items.length,
                s = !this.settings.autoWidth,
                r = [];
            for (t.items = {
                    merge: !1,
                    width: e
                }; n--;) i = this._mergers[n], i = this.settings.mergeFit && Math.min(i, this.settings.items) || i, t.items.merge = i > 1 || t.items.merge, r[n] = s ? e * i : this._items[n].width();
            this._widths = r
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var e = [],
                i = this._items,
                n = this.settings,
                s = Math.max(2 * n.items, 4),
                r = 2 * Math.ceil(i.length / 2),
                o = n.loop && i.length ? n.rewind ? s : Math.max(s, r) : 0,
                a = "",
                l = "";
            for (o /= 2; o > 0;) e.push(this.normalize(e.length / 2, !0)), a += i[e[e.length - 1]][0].outerHTML, e.push(this.normalize(i.length - 1 - (e.length - 1) / 2, !0)), l = i[e[e.length - 1]][0].outerHTML + l, o -= 1;
            this._clones = e, t(a).addClass("cloned").appendTo(this.$stage), t(l).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, i = -1, n = 0, s = 0, r = []; ++i < e;) r.push((n = r[i - 1] || 0) + (s = this._widths[this.relative(i)] + this.settings.margin) * t);
            this._coordinates = r
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var t = this.settings.stagePadding,
                e = this._coordinates,
                i = {
                    width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                    "padding-left": t || "",
                    "padding-right": t || ""
                };
            this.$stage.css(i)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var e = this._coordinates.length,
                i = !this.settings.autoWidth,
                n = this.$stage.children();
            if (i && t.items.merge)
                for (; e--;) t.css.width = this._widths[this.relative(e)], n.eq(e).css(t.css);
            else i && (t.css.width = t.items.width, n.css(t.css))
        }
    }, {
        filter: ["items"],
        run: function() {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current)
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var t, e, i, n, s = this.settings.rtl ? 1 : -1,
                r = 2 * this.settings.stagePadding,
                o = this.coordinates(this.current()) + r,
                a = o + this.width() * s,
                l = [];
            for (i = 0, n = this._coordinates.length; i < n; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + r * s, (this.op(t, "<=", o) && this.op(t, ">", a) || this.op(e, "<", o) && this.op(e, ">", a)) && l.push(i);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
        }
    }], s.prototype.initializeStage = function() {
        this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = t("<" + this.settings.stageElement + ">", {
            class: this.settings.stageClass
        }).wrap(t("<div/>", {
            class: this.settings.stageOuterClass
        })), this.$element.append(this.$stage.parent()))
    }, s.prototype.initializeItems = function() {
        var e = this.$element.find(".owl-item");
        if (e.length) return this._items = e.get().map(function(e) {
            return t(e)
        }), this._mergers = this._items.map(function() {
            return 1
        }), void this.refresh();
        this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
    }, s.prototype.initialize = function() {
        if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
            var t, e, i;
            t = this.$element.find("img"), e = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : n, i = this.$element.children(e).width(), t.length && i <= 0 && this.preloadAutoWidthImages(t)
        }
        this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, s.prototype.isVisible = function() {
        return !this.settings.checkVisibility || this.$element.is(":visible")
    }, s.prototype.setup = function() {
        var e = this.viewport(),
            i = this.options.responsive,
            n = -1,
            s = null;
        i ? (t.each(i, function(t) {
            t <= e && t > n && (n = Number(t))
        }), "function" == typeof(s = t.extend({}, this.options, i[n])).stagePadding && (s.stagePadding = s.stagePadding()), delete s.responsive, s.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + n))) : s = t.extend({}, this.options), this.trigger("change", {
            property: {
                name: "settings",
                value: s
            }
        }), this._breakpoint = n, this.settings = s, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    }, s.prototype.optionsLogic = function() {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, s.prototype.prepare = function(e) {
        var i = this.trigger("prepare", {
            content: e
        });
        return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(e)), this.trigger("prepared", {
            content: i.data
        }), i.data
    }, s.prototype.update = function() {
        for (var e = 0, i = this._pipe.length, n = t.proxy(function(t) {
                return this[t]
            }, this._invalidated), s = {}; e < i;)(this._invalidated.all || t.grep(this._pipe[e].filter, n).length > 0) && this._pipe[e].run(s), e++;
        this._invalidated = {}, this.is("valid") || this.enter("valid")
    }, s.prototype.width = function(t) {
        switch (t = t || s.Width.Default) {
            case s.Width.Inner:
            case s.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, s.prototype.refresh = function() {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
    }, s.prototype.onThrottledResize = function() {
        e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }, s.prototype.onResize = function() {
        return !!this._items.length && this._width !== this.$element.width() && !!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
    }, s.prototype.registerEventHandlers = function() {
        t.support.transition && this.$stage.on(t.support.transition.end + ".owl.core", t.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(e, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
            return !1
        })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", t.proxy(this.onDragEnd, this)))
    }, s.prototype.onDragStart = function(e) {
        var n = null;
        3 !== e.which && (t.support.transform ? n = {
            x: (n = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === n.length ? 12 : 4],
            y: n[16 === n.length ? 13 : 5]
        } : (n = this.$stage.position(), n = {
            x: this.settings.rtl ? n.left + this.$stage.width() - this.width() + this.settings.margin : n.left,
            y: n.top
        }), this.is("animating") && (t.support.transform ? this.animate(n.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = t(e.target), this._drag.stage.start = n, this._drag.stage.current = n, this._drag.pointer = this.pointer(e), t(i).on("mouseup.owl.core touchend.owl.core", t.proxy(this.onDragEnd, this)), t(i).one("mousemove.owl.core touchmove.owl.core", t.proxy(function(e) {
            var n = this.difference(this._drag.pointer, this.pointer(e));
            t(i).on("mousemove.owl.core touchmove.owl.core", t.proxy(this.onDragMove, this)), Math.abs(n.x) < Math.abs(n.y) && this.is("valid") || (e.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }, this)))
    }, s.prototype.onDragMove = function(t) {
        var e = null,
            i = null,
            n = null,
            s = this.difference(this._drag.pointer, this.pointer(t)),
            r = this.difference(this._drag.stage.start, s);
        this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), i = this.coordinates(this.maximum() + 1) - e, r.x = ((r.x - e) % i + i) % i + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), n = this.settings.pullDrag ? -1 * s.x / 5 : 0, r.x = Math.max(Math.min(r.x, e + n), i + n)), this._drag.stage.current = r, this.animate(r.x))
    }, s.prototype.onDragEnd = function(e) {
        var n = this.difference(this._drag.pointer, this.pointer(e)),
            s = this._drag.stage.current,
            r = n.x > 0 ^ this.settings.rtl ? "left" : "right";
        t(i).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== n.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(s.x, 0 !== n.x ? r : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = r, (Math.abs(n.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
            return !1
        })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, s.prototype.closest = function(e, i) {
        var s = -1,
            r = 30,
            o = this.width(),
            a = this.coordinates();
        return this.settings.freeDrag || t.each(a, t.proxy(function(t, l) {
            return "left" === i && e > l - r && e < l + r ? s = t : "right" === i && e > l - o - r && e < l - o + r ? s = t + 1 : this.op(e, "<", l) && this.op(e, ">", a[t + 1] !== n ? a[t + 1] : l - o) && (s = "left" === i ? t + 1 : t), -1 === s
        }, this)), this.settings.loop || (this.op(e, ">", a[this.minimum()]) ? s = e = this.minimum() : this.op(e, "<", a[this.maximum()]) && (s = e = this.maximum())), s
    }, s.prototype.animate = function(e) {
        var i = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(), i && (this.enter("animating"), this.trigger("translate")), t.support.transform3d && t.support.transition ? this.$stage.css({
            transform: "translate3d(" + e + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
        }) : i ? this.$stage.animate({
            left: e + "px"
        }, this.speed(), this.settings.fallbackEasing, t.proxy(this.onTransitionEnd, this)) : this.$stage.css({
            left: e + "px"
        })
    }, s.prototype.is = function(t) {
        return this._states.current[t] && this._states.current[t] > 0
    }, s.prototype.current = function(t) {
        if (t === n) return this._current;
        if (0 === this._items.length) return n;
        if (t = this.normalize(t), this._current !== t) {
            var e = this.trigger("change", {
                property: {
                    name: "position",
                    value: t
                }
            });
            e.data !== n && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, s.prototype.invalidate = function(e) {
        return "string" === t.type(e) && (this._invalidated[e] = !0, this.is("valid") && this.leave("valid")), t.map(this._invalidated, function(t, e) {
            return e
        })
    }, s.prototype.reset = function(t) {
        (t = this.normalize(t)) !== n && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
    }, s.prototype.normalize = function(t, e) {
        var i = this._items.length,
            s = e ? 0 : this._clones.length;
        return !this.isNumeric(t) || i < 1 ? t = n : (t < 0 || t >= i + s) && (t = ((t - s / 2) % i + i) % i + s / 2), t
    }, s.prototype.relative = function(t) {
        return t -= this._clones.length / 2, this.normalize(t, !0)
    }, s.prototype.maximum = function(t) {
        var e, i, n, s = this.settings,
            r = this._coordinates.length;
        if (s.loop) r = this._clones.length / 2 + this._items.length - 1;
        else if (s.autoWidth || s.merge) {
            if (e = this._items.length)
                for (i = this._items[--e].width(), n = this.$element.width(); e-- && !((i += this._items[e].width() + this.settings.margin) > n););
            r = e + 1
        } else r = s.center ? this._items.length - 1 : this._items.length - s.items;
        return t && (r -= this._clones.length / 2), Math.max(r, 0)
    }, s.prototype.minimum = function(t) {
        return t ? 0 : this._clones.length / 2
    }, s.prototype.items = function(t) {
        return t === n ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
    }, s.prototype.mergers = function(t) {
        return t === n ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
    }, s.prototype.clones = function(e) {
        var i = this._clones.length / 2,
            s = i + this._items.length,
            r = function(t) {
                return t % 2 == 0 ? s + t / 2 : i - (t + 1) / 2
            };
        return e === n ? t.map(this._clones, function(t, e) {
            return r(e)
        }) : t.map(this._clones, function(t, i) {
            return t === e ? r(i) : null
        })
    }, s.prototype.speed = function(t) {
        return t !== n && (this._speed = t), this._speed
    }, s.prototype.coordinates = function(e) {
        var i, s = 1,
            r = e - 1;
        return e === n ? t.map(this._coordinates, t.proxy(function(t, e) {
            return this.coordinates(e)
        }, this)) : (this.settings.center ? (this.settings.rtl && (s = -1, r = e + 1), i = this._coordinates[e], i += (this.width() - i + (this._coordinates[r] || 0)) / 2 * s) : i = this._coordinates[r] || 0, i = Math.ceil(i))
    }, s.prototype.duration = function(t, e, i) {
        return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
    }, s.prototype.to = function(t, e) {
        var i = this.current(),
            n = null,
            s = t - this.relative(i),
            r = (s > 0) - (s < 0),
            o = this._items.length,
            a = this.minimum(),
            l = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(s) > o / 2 && (s += -1 * r * o), (n = (((t = i + s) - a) % o + o) % o + a) !== t && n - s <= l && n - s > 0 && (i = n - s, t = n, this.reset(i))) : this.settings.rewind ? (l += 1, t = (t % l + l) % l) : t = Math.max(a, Math.min(l, t)), this.speed(this.duration(i, t, e)), this.current(t), this.isVisible() && this.update()
    }, s.prototype.next = function(t) {
        t = t || !1, this.to(this.relative(this.current()) + 1, t)
    }, s.prototype.prev = function(t) {
        t = t || !1, this.to(this.relative(this.current()) - 1, t)
    }, s.prototype.onTransitionEnd = function(t) {
        if (t !== n && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return !1;
        this.leave("animating"), this.trigger("translated")
    }, s.prototype.viewport = function() {
        var n;
        return this.options.responsiveBaseElement !== e ? n = t(this.options.responsiveBaseElement).width() : e.innerWidth ? n = e.innerWidth : i.documentElement && i.documentElement.clientWidth ? n = i.documentElement.clientWidth : console.warn("Can not detect viewport width."), n
    }, s.prototype.replace = function(e) {
        this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function() {
            return 1 === this.nodeType
        }).each(t.proxy(function(t, e) {
            e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, s.prototype.add = function(e, i) {
        var s = this.relative(this._current);
        i = i === n ? this._items.length : this.normalize(i, !0), e = e instanceof jQuery ? e : t(e), this.trigger("add", {
            content: e,
            position: i
        }), e = this.prepare(e), 0 === this._items.length || i === this._items.length ? (0 === this._items.length && this.$stage.append(e), 0 !== this._items.length && this._items[i - 1].after(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[i].before(e), this._items.splice(i, 0, e), this._mergers.splice(i, 0, 1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[s] && this.reset(this._items[s].index()), this.invalidate("items"), this.trigger("added", {
            content: e,
            position: i
        })
    }, s.prototype.remove = function(t) {
        (t = this.normalize(t, !0)) !== n && (this.trigger("remove", {
            content: this._items[t],
            position: t
        }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: t
        }))
    }, s.prototype.preloadAutoWidthImages = function(e) {
        e.each(t.proxy(function(e, i) {
            this.enter("pre-loading"), i = t(i), t(new Image).one("load", t.proxy(function(t) {
                i.attr("src", t.target.src), i.css("opacity", 1), this.leave("pre-loading"), this.is("pre-loading") || this.is("initializing") || this.refresh()
            }, this)).attr("src", i.attr("src") || i.attr("data-src") || i.attr("data-src-retina"))
        }, this))
    }, s.prototype.destroy = function() {
        for (var n in this.$element.off(".owl.core"), this.$stage.off(".owl.core"), t(i).off(".owl.core"), !1 !== this.settings.responsive && (e.clearTimeout(this.resizeTimer), this.off(e, "resize", this._handlers.onThrottledResize)), this._plugins) this._plugins[n].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, s.prototype.op = function(t, e, i) {
        var n = this.settings.rtl;
        switch (e) {
            case "<":
                return n ? t > i : t < i;
            case ">":
                return n ? t < i : t > i;
            case ">=":
                return n ? t <= i : t >= i;
            case "<=":
                return n ? t >= i : t <= i
        }
    }, s.prototype.on = function(t, e, i, n) {
        t.addEventListener ? t.addEventListener(e, i, n) : t.attachEvent && t.attachEvent("on" + e, i)
    }, s.prototype.off = function(t, e, i, n) {
        t.removeEventListener ? t.removeEventListener(e, i, n) : t.detachEvent && t.detachEvent("on" + e, i)
    }, s.prototype.trigger = function(e, i, n, r, o) {
        var a = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            l = t.camelCase(t.grep(["on", e, n], function(t) {
                return t
            }).join("-").toLowerCase()),
            u = t.Event([e, "owl", n || "carousel"].join(".").toLowerCase(), t.extend({
                relatedTarget: this
            }, a, i));
        return this._supress[e] || (t.each(this._plugins, function(t, e) {
            e.onTrigger && e.onTrigger(u)
        }), this.register({
            type: s.Type.Event,
            name: e
        }), this.$element.trigger(u), this.settings && "function" == typeof this.settings[l] && this.settings[l].call(this, u)), u
    }, s.prototype.enter = function(e) {
        t.each([e].concat(this._states.tags[e] || []), t.proxy(function(t, e) {
            this._states.current[e] === n && (this._states.current[e] = 0), this._states.current[e]++
        }, this))
    }, s.prototype.leave = function(e) {
        t.each([e].concat(this._states.tags[e] || []), t.proxy(function(t, e) {
            this._states.current[e]--
        }, this))
    }, s.prototype.register = function(e) {
        if (e.type === s.Type.Event) {
            if (t.event.special[e.name] || (t.event.special[e.name] = {}), !t.event.special[e.name].owl) {
                var i = t.event.special[e.name]._default;
                t.event.special[e.name]._default = function(t) {
                    return i && i.apply && (!t.namespace || -1 === t.namespace.indexOf("owl")) ? i.apply(this, arguments) : t.namespace && t.namespace.indexOf("owl") > -1
                }, t.event.special[e.name].owl = !0
            }
        } else e.type === s.Type.State && (this._states.tags[e.name] ? this._states.tags[e.name] = this._states.tags[e.name].concat(e.tags) : this._states.tags[e.name] = e.tags, this._states.tags[e.name] = t.grep(this._states.tags[e.name], t.proxy(function(i, n) {
            return t.inArray(i, this._states.tags[e.name]) === n
        }, this)))
    }, s.prototype.suppress = function(e) {
        t.each(e, t.proxy(function(t, e) {
            this._supress[e] = !0
        }, this))
    }, s.prototype.release = function(e) {
        t.each(e, t.proxy(function(t, e) {
            delete this._supress[e]
        }, this))
    }, s.prototype.pointer = function(t) {
        var i = {
            x: null,
            y: null
        };
        return (t = (t = t.originalEvent || t || e.event).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX ? (i.x = t.pageX, i.y = t.pageY) : (i.x = t.clientX, i.y = t.clientY), i
    }, s.prototype.isNumeric = function(t) {
        return !isNaN(parseFloat(t))
    }, s.prototype.difference = function(t, e) {
        return {
            x: t.x - e.x,
            y: t.y - e.y
        }
    }, t.fn.owlCarousel = function(e) {
        var i = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var n = t(this),
                r = n.data("owl.carousel");
            r || (r = new s(this, "object" == typeof e && e), n.data("owl.carousel", r), t.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(e, i) {
                r.register({
                    type: s.Type.Event,
                    name: i
                }), r.$element.on(i + ".owl.carousel.core", t.proxy(function(t) {
                    t.namespace && t.relatedTarget !== this && (this.suppress([i]), r[i].apply(this, [].slice.call(arguments, 1)), this.release([i]))
                }, r))
            })), "string" == typeof e && "_" !== e.charAt(0) && r[e].apply(r, i)
        })
    }, t.fn.owlCarousel.Constructor = s
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, n) {
    var s = function(e) {
        this._core = e, this._interval = null, this._visible = null, this._handlers = {
            "initialized.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        }, this._core.options = t.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    s.Defaults = {
        autoRefresh: !0,
        autoRefreshInterval: 500
    }, s.prototype.watch = function() {
        this._interval || (this._visible = this._core.isVisible(), this._interval = e.setInterval(t.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }, s.prototype.refresh = function() {
        this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
    }, s.prototype.destroy = function() {
        var t, i;
        for (t in e.clearInterval(this._interval), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = s
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, n) {
    var s = function(e) {
        this._core = e, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": t.proxy(function(e) {
                if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type)) {
                    var i = this._core.settings,
                        n = i.center && Math.ceil(i.items / 2) || i.items,
                        s = i.center && -1 * n || 0,
                        r = (e.property && void 0 !== e.property.value ? e.property.value : this._core.current()) + s,
                        o = this._core.clones().length,
                        a = t.proxy(function(t, e) {
                            this.load(e)
                        }, this);
                    for (i.lazyLoadEager > 0 && (n += i.lazyLoadEager, i.loop && (r -= i.lazyLoadEager, n++)); s++ < n;) this.load(o / 2 + this._core.relative(r)), o && t.each(this._core.clones(this._core.relative(r)), a), r++
                }
            }, this)
        }, this._core.options = t.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    s.Defaults = {
        lazyLoad: !1,
        lazyLoadEager: 0
    }, s.prototype.load = function(i) {
        var n = this._core.$stage.children().eq(i),
            s = n && n.find(".owl-lazy");
        !s || t.inArray(n.get(0), this._loaded) > -1 || (s.each(t.proxy(function(i, n) {
            var s, r = t(n),
                o = e.devicePixelRatio > 1 && r.attr("data-src-retina") || r.attr("data-src") || r.attr("data-srcset");
            this._core.trigger("load", {
                element: r,
                url: o
            }, "lazy"), r.is("img") ? r.one("load.owl.lazy", t.proxy(function() {
                r.css("opacity", 1), this._core.trigger("loaded", {
                    element: r,
                    url: o
                }, "lazy")
            }, this)).attr("src", o) : r.is("source") ? r.one("load.owl.lazy", t.proxy(function() {
                this._core.trigger("loaded", {
                    element: r,
                    url: o
                }, "lazy")
            }, this)).attr("srcset", o) : ((s = new Image).onload = t.proxy(function() {
                r.css({
                    "background-image": 'url("' + o + '")',
                    opacity: "1"
                }), this._core.trigger("loaded", {
                    element: r,
                    url: o
                }, "lazy")
            }, this), s.src = o)
        }, this)), this._loaded.push(n.get(0)))
    }, s.prototype.destroy = function() {
        var t, e;
        for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Lazy = s
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, n) {
    var s = function(i) {
        this._core = i, this._previousHeight = null, this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.autoHeight && "position" === t.property.name && this.update()
            }, this),
            "loaded.owl.lazy": t.proxy(function(t) {
                t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        }, this._core.options = t.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
        var n = this;
        t(e).on("load", function() {
            n._core.settings.autoHeight && n.update()
        }), t(e).resize(function() {
            n._core.settings.autoHeight && (null != n._intervalId && clearTimeout(n._intervalId), n._intervalId = setTimeout(function() {
                n.update()
            }, 250))
        })
    };
    s.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    }, s.prototype.update = function() {
        var e = this._core._current,
            i = e + this._core.settings.items,
            n = this._core.settings.lazyLoad,
            s = this._core.$stage.children().toArray().slice(e, i),
            r = [],
            o = 0;
        t.each(s, function(e, i) {
            r.push(t(i).height())
        }), (o = Math.max.apply(null, r)) <= 1 && n && this._previousHeight && (o = this._previousHeight), this._previousHeight = o, this._core.$stage.parent().height(o).addClass(this._core.settings.autoHeightClass)
    }, s.prototype.destroy = function() {
        var t, e;
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = s
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, n) {
    var s = function(e) {
        this._core = e, this._videos = {}, this._playing = null, this._handlers = {
            "initialized.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.register({
                    type: "state",
                    name: "playing",
                    tags: ["interacting"]
                })
            }, this),
            "resize.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
            }, this),
            "refreshed.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this),
            "changed.owl.carousel": t.proxy(function(t) {
                t.namespace && "position" === t.property.name && this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": t.proxy(function(e) {
                if (e.namespace) {
                    var i = t(e.content).find(".owl-video");
                    i.length && (i.css("display", "none"), this.fetch(i, t(e.content)))
                }
            }, this)
        }, this._core.options = t.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function(t) {
            this.play(t)
        }, this))
    };
    s.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    }, s.prototype.fetch = function(t, e) {
        var i = t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube",
            n = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
            s = t.attr("data-width") || this._core.settings.videoWidth,
            r = t.attr("data-height") || this._core.settings.videoHeight,
            o = t.attr("href");
        if (!o) throw Error("Missing video URL.");
        if ((n = o.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu") > -1) i = "youtube";
        else if (n[3].indexOf("vimeo") > -1) i = "vimeo";
        else {
            if (!(n[3].indexOf("vzaar") > -1)) throw Error("Video URL not supported.");
            i = "vzaar"
        }
        n = n[6], this._videos[o] = {
            type: i,
            id: n,
            width: s,
            height: r
        }, e.attr("data-video", o), this.thumbnail(t, this._videos[o])
    }, s.prototype.thumbnail = function(e, i) {
        var n, s, r, o = i.width && i.height ? "width:" + i.width + "px;height:" + i.height + "px;" : "",
            a = e.find("img"),
            l = "src",
            u = "",
            h = this._core.settings,
            c = function(i) {
                s = '<div class="owl-video-play-icon"></div>', n = h.lazyLoad ? t("<div/>", {
                    class: "owl-video-tn " + u,
                    srcType: i
                }) : t("<div/>", {
                    class: "owl-video-tn",
                    style: "opacity:1;background-image:url(" + i + ")"
                }), e.after(n), e.after(s)
            };
        if (e.wrap(t("<div/>", {
                class: "owl-video-wrapper",
                style: o
            })), this._core.settings.lazyLoad && (l = "data-src", u = "owl-lazy"), a.length) return c(a.attr(l)), a.remove(), !1;
        "youtube" === i.type ? c(r = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg") : "vimeo" === i.type ? t.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + i.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(t) {
                c(r = t[0].thumbnail_large)
            }
        }) : "vzaar" === i.type && t.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + i.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(t) {
                c(r = t.framegrab_url)
            }
        })
    }, s.prototype.stop = function() {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
    }, s.prototype.play = function(e) {
        var i, n = t(e.target).closest("." + this._core.settings.itemClass),
            s = this._videos[n.attr("data-video")],
            r = s.width || "100%",
            o = s.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), n = this._core.items(this._core.relative(n.index())), this._core.reset(n.index()), (i = t('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')).attr("height", o), i.attr("width", r), "youtube" === s.type ? i.attr("src", "//www.youtube.com/embed/" + s.id + "?autoplay=1&rel=0&v=" + s.id) : "vimeo" === s.type ? i.attr("src", "//player.vimeo.com/video/" + s.id + "?autoplay=1") : "vzaar" === s.type && i.attr("src", "//view.vzaar.com/" + s.id + "/player?autoplay=true"), t(i).wrap('<div class="owl-video-frame" />').insertAfter(n.find(".owl-video")), this._playing = n.addClass("owl-video-playing"))
    }, s.prototype.isInFullScreen = function() {
        var e = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
        return e && t(e).parent().hasClass("owl-video-frame")
    }, s.prototype.destroy = function() {
        var t, e;
        for (t in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Video = s
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, n) {
    var s = function(e) {
        this.core = e, this.core.options = t.extend({}, s.Defaults, this.core.options), this.swapping = !0, this.previous = n, this.next = n, this.handlers = {
            "change.owl.carousel": t.proxy(function(t) {
                t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function(t) {
                t.namespace && (this.swapping = "translated" == t.type)
            }, this),
            "translate.owl.carousel": t.proxy(function(t) {
                t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    s.Defaults = {
        animateOut: !1,
        animateIn: !1
    }, s.prototype.swap = function() {
        if (1 === this.core.settings.items && t.support.animation && t.support.transition) {
            this.core.speed(0);
            var e, i = t.proxy(this.clear, this),
                n = this.core.$stage.children().eq(this.previous),
                s = this.core.$stage.children().eq(this.next),
                r = this.core.settings.animateIn,
                o = this.core.settings.animateOut;
            this.core.current() !== this.previous && (o && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), n.one(t.support.animation.end, i).css({
                left: e + "px"
            }).addClass("animated owl-animated-out").addClass(o)), r && s.one(t.support.animation.end, i).addClass("animated owl-animated-in").addClass(r))
        }
    }, s.prototype.clear = function(e) {
        t(e.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
    }, s.prototype.destroy = function() {
        var t, e;
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Animate = s
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, n) {
    var s = function(e) {
        this._core = e, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = {
            "changed.owl.carousel": t.proxy(function(t) {
                t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._paused && (this._time = 0)
            }, this),
            "initialized.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.autoplay && this.play()
            }, this),
            "play.owl.autoplay": t.proxy(function(t, e, i) {
                t.namespace && this.play(e, i)
            }, this),
            "stop.owl.autoplay": t.proxy(function(t) {
                t.namespace && this.stop()
            }, this),
            "mouseover.owl.autoplay": t.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "mouseleave.owl.autoplay": t.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this),
            "touchstart.owl.core": t.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "touchend.owl.core": t.proxy(function() {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        }, this._core.$element.on(this._handlers), this._core.options = t.extend({}, s.Defaults, this._core.options)
    };
    s.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, s.prototype._next = function(n) {
        this._call = e.setTimeout(t.proxy(this._next, this, n), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || i.hidden || this._core.next(n || this._core.settings.autoplaySpeed)
    }, s.prototype.read = function() {
        return (new Date).getTime() - this._time
    }, s.prototype.play = function(i, n) {
        var s;
        this._core.is("rotating") || this._core.enter("rotating"), i = i || this._core.settings.autoplayTimeout, s = Math.min(this._time % (this._timeout || i), i), this._paused ? (this._time = this.read(), this._paused = !1) : e.clearTimeout(this._call), this._time += this.read() % i - s, this._timeout = i, this._call = e.setTimeout(t.proxy(this._next, this, n), i - s)
    }, s.prototype.stop = function() {
        this._core.is("rotating") && (this._time = 0, this._paused = !0, e.clearTimeout(this._call), this._core.leave("rotating"))
    }, s.prototype.pause = function() {
        this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, e.clearTimeout(this._call))
    }, s.prototype.destroy = function() {
        var t, e;
        for (t in this.stop(), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.autoplay = s
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, n) {
    "use strict";
    var s = function(e) {
        this._core = e, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": t.proxy(function(e) {
                e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }, this),
            "added.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
            }, this),
            "remove.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
            }, this),
            "changed.owl.carousel": t.proxy(function(t) {
                t.namespace && "position" == t.property.name && this.draw()
            }, this),
            "initialized.owl.carousel": t.proxy(function(t) {
                t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
            }, this),
            "refreshed.owl.carousel": t.proxy(function(t) {
                t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
            }, this)
        }, this._core.options = t.extend({}, s.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    s.Defaults = {
        nav: !1,
        navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
        navSpeed: !1,
        navElement: 'button type="button" role="presentation"',
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    }, s.prototype.initialize = function() {
        var e, i = this._core.settings;
        for (e in this._controls.$relative = (i.navContainer ? t(i.navContainer) : t("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = t("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", t.proxy(function(t) {
                this.prev(i.navSpeed)
            }, this)), this._controls.$next = t("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", t.proxy(function(t) {
                this.next(i.navSpeed)
            }, this)), i.dotsData || (this._templates = [t('<button role="button">').addClass(i.dotClass).append(t("<span>")).prop("outerHTML")]), this._controls.$absolute = (i.dotsContainer ? t(i.dotsContainer) : t("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", t.proxy(function(e) {
                var n = t(e.target).parent().is(this._controls.$absolute) ? t(e.target).index() : t(e.target).parent().index();
                e.preventDefault(), this.to(n, i.dotsSpeed)
            }, this)), this._overrides) this._core[e] = t.proxy(this[e], this)
    }, s.prototype.destroy = function() {
        var t, e, i, n, s;
        for (t in s = this._core.settings, this._handlers) this.$element.off(t, this._handlers[t]);
        for (e in this._controls) "$relative" === e && s.navContainer ? this._controls[e].html("") : this._controls[e].remove();
        for (n in this.overides) this._core[n] = this._overrides[n];
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, s.prototype.update = function() {
        var t, e, i, n = this._core.clones().length / 2,
            s = n + this._core.items().length,
            r = this._core.maximum(!0),
            o = this._core.settings,
            a = o.center || o.autoWidth || o.dotsData ? 1 : o.dotsEach || o.items;
        if ("page" !== o.slideBy && (o.slideBy = Math.min(o.slideBy, o.items)), o.dots || "page" == o.slideBy)
            for (this._pages = [], t = n, e = 0, i = 0; t < s; t++) {
                if (e >= a || 0 === e) {
                    if (this._pages.push({
                            start: Math.min(r, t - n),
                            end: t - n + a - 1
                        }), Math.min(r, t - n) === r) break;
                    e = 0, ++i
                }
                e += this._core.mergers(this._core.relative(t))
            }
    }, s.prototype.draw = function() {
        var e, i = this._core.settings,
            n = this._core.items().length <= i.items,
            s = this._core.relative(this._core.current()),
            r = i.loop || i.rewind;
        this._controls.$relative.toggleClass("disabled", !i.nav || n), i.nav && (this._controls.$previous.toggleClass("disabled", !r && s <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !r && s >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !i.dots || n), i.dots && (e = this._pages.length - this._controls.$absolute.children().length, i.dotsData && 0 !== e ? this._controls.$absolute.html(this._templates.join("")) : e > 0 ? this._controls.$absolute.append(Array(e + 1).join(this._templates[0])) : e < 0 && this._controls.$absolute.children().slice(e).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(t.inArray(this.current(), this._pages)).addClass("active"))
    }, s.prototype.onTrigger = function(e) {
        var i = this._core.settings;
        e.page = {
            index: t.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: i && (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items)
        }
    }, s.prototype.current = function() {
        var e = this._core.relative(this._core.current());
        return t.grep(this._pages, t.proxy(function(t, i) {
            return t.start <= e && t.end >= e
        }, this)).pop()
    }, s.prototype.getPosition = function(e) {
        var i, n, s = this._core.settings;
        return "page" == s.slideBy ? (i = t.inArray(this.current(), this._pages), n = this._pages.length, e ? ++i : --i, i = this._pages[(i % n + n) % n].start) : (i = this._core.relative(this._core.current()), n = this._core.items().length, e ? i += s.slideBy : i -= s.slideBy), i
    }, s.prototype.next = function(e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
    }, s.prototype.prev = function(e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
    }, s.prototype.to = function(e, i, n) {
        var s;
        !n && this._pages.length ? (s = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % s + s) % s].start, i)) : t.proxy(this._overrides.to, this._core)(e, i)
    }, t.fn.owlCarousel.Constructor.Plugins.Navigation = s
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, n) {
    "use strict";
    var s = function(i) {
        this._core = i, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": t.proxy(function(i) {
                i.namespace && "URLHash" === this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": t.proxy(function(e) {
                if (e.namespace) {
                    var i = t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    i && (this._hashes[i] = e.content)
                }
            }, this),
            "changed.owl.carousel": t.proxy(function(i) {
                if (i.namespace && "position" === i.property.name) {
                    var n = this._core.items(this._core.relative(this._core.current())),
                        s = t.map(this._hashes, function(t, e) {
                            return t === n ? e : null
                        }).join();
                    s && e.location.hash.slice(1) !== s && (e.location.hash = s)
                }
            }, this)
        }, this._core.options = t.extend({}, s.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function(t) {
            var i = e.location.hash.substring(1),
                n = this._core.$stage.children(),
                s = this._hashes[i] && n.index(this._hashes[i]);
            void 0 !== s && s !== this._core.current() && this._core.to(this._core.relative(s), !1, !0)
        }, this))
    };
    s.Defaults = {
        URLhashListener: !1
    }, s.prototype.destroy = function() {
        var i, n;
        for (i in t(e).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(i, this._handlers[i]);
        for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Hash = s
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, n) {
    function s(e, i) {
        var n = !1,
            s = e.charAt(0).toUpperCase() + e.slice(1);
        return t.each((e + " " + a.join(s + " ") + s).split(" "), function(t, e) {
            if (void 0 !== o[e]) return n = !i || e, !1
        }), n
    }

    function r(t) {
        return s(t, !0)
    }
    var o = t("<support>").get(0).style,
        a = "Webkit Moz O ms".split(" "),
        l = {
            transition: {
                end: {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd",
                    transition: "transitionend"
                }
            },
            animation: {
                end: {
                    WebkitAnimation: "webkitAnimationEnd",
                    MozAnimation: "animationend",
                    OAnimation: "oAnimationEnd",
                    animation: "animationend"
                }
            }
        },
        u = {
            csstransforms: function() {
                return !!s("transform")
            },
            csstransforms3d: function() {
                return !!s("perspective")
            },
            csstransitions: function() {
                return !!s("transition")
            },
            cssanimations: function() {
                return !!s("animation")
            }
        };
    u.csstransitions() && (t.support.transition = new String(r("transition")), t.support.transition.end = l.transition.end[t.support.transition]), u.cssanimations() && (t.support.animation = new String(r("animation")), t.support.animation.end = l.animation.end[t.support.animation]), u.csstransforms() && (t.support.transform = new String(r("transform")), t.support.transform3d = u.csstransforms3d())
}(window.Zepto || window.jQuery, window, document),
function(t) {
    var e, i, n, s, r, o, a, l = navigator.userAgent;
    t.HTMLPictureElement && /ecko/.test(l) && l.match(/rv\:(\d+)/) && RegExp.$1 < 45 && addEventListener("resize", (i = document.createElement("source"), n = function(t) {
        var e, n, s = t.parentNode;
        "PICTURE" === s.nodeName.toUpperCase() ? (e = i.cloneNode(), s.insertBefore(e, s.firstElementChild), setTimeout(function() {
            s.removeChild(e)
        })) : (!t._pfLastSize || t.offsetWidth > t._pfLastSize) && (t._pfLastSize = t.offsetWidth, n = t.sizes, t.sizes += ",100vw", setTimeout(function() {
            t.sizes = n
        }))
    }, s = function() {
        var t, e = document.querySelectorAll("picture > img, img[srcset][sizes]");
        for (t = 0; t < e.length; t++) n(e[t])
    }, r = function() {
        clearTimeout(e), e = setTimeout(s, 99)
    }, o = t.matchMedia && matchMedia("(orientation: landscape)"), a = function() {
        r(), o && o.addListener && o.addListener(r)
    }, i.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", /^[c|i]|d$/.test(document.readyState || "") ? a() : document.addEventListener("DOMContentLoaded", a), r))
}(window),
function(t, e, i) {
    "use strict";

    function n(t) {
        return " " === t || "	" === t || "\n" === t || "\f" === t || "\r" === t
    }

    function s(e, i) {
        var n = new t.Image;
        return n.onerror = function() {
            q[e] = !1, tm()
        }, n.onload = function() {
            q[e] = 1 === n.width, tm()
        }, n.src = i, "pending"
    }

    function r() {
        J = !1, ti = t.devicePixelRatio, tt = {}, te = {}, L.DPR = ti || 1, tn.width = Math.max(t.innerWidth || 0, H.clientWidth), tn.height = Math.max(t.innerHeight || 0, H.clientHeight), tn.vw = tn.width / 100, tn.vh = tn.height / 100, $ = [tn.height, tn.width, ti].join("-"), tn.em = L.getEmValue(), tn.rem = tn.em
    }

    function o(t, e, i, n) {
        var s, r, o, a;
        return "saveData" === W.algorithm ? t > 2.7 ? a = i + 1 : (o = (r = e - i) * (s = Math.pow(t - .6, 1.5)), n && (o += .1 * s), a = t + o) : a = i > 1 ? Math.sqrt(t * e) : t, a > i
    }

    function a(t) {
        var e, i = L.getSet(t),
            n = !1;
        "pending" !== i && (n = $, i && (e = L.setRes(i), L.applySetCandidate(e, t))), t[L.ns].evaled = n
    }

    function l(t, e) {
        return t.res - e.res
    }

    function u(t, e, i) {
        var n;
        return !i && e && (i = (i = t[L.ns].sets) && i[i.length - 1]), (n = h(e, i)) && (e = L.makeUrl(e), t[L.ns].curSrc = e, t[L.ns].curCan = n, n.res || tg(n, n.set.sizes)), n
    }

    function h(t, e) {
        var i, n, s;
        if (t && e) {
            for (s = L.parseSet(e), t = L.makeUrl(t), i = 0; i < s.length; i++)
                if (t === L.makeUrl(s[i].url)) {
                    n = s[i];
                    break
                }
        }
        return n
    }

    function c(t, e) {
        var i, n, s, r, o = t.getElementsByTagName("source");
        for (i = 0, n = o.length; n > i; i++)(s = o[i])[L.ns] = !0, (r = s.getAttribute("srcset")) && e.push({
            srcset: r,
            media: s.getAttribute("media"),
            type: s.getAttribute("type"),
            sizes: s.getAttribute("sizes")
        })
    }

    function d(t, e) {
        function i(e) {
            var i, n = e.exec(t.substring(d));
            return n ? (d += (i = n[0]).length, i) : void 0
        }

        function s() {
            var t, i, n, s, r, l, u, h, c, d = !1,
                f = {};
            for (s = 0; s < a.length; s++) l = (r = a[s])[r.length - 1], h = parseInt(u = r.substring(0, r.length - 1), 10), c = parseFloat(u), th.test(u) && "w" === l ? ((t || i) && (d = !0), 0 === h ? d = !0 : t = h) : tc.test(u) && "x" === l ? ((t || i || n) && (d = !0), 0 > c ? d = !0 : i = c) : th.test(u) && "h" === l ? ((n || i) && (d = !0), 0 === h ? d = !0 : n = h) : d = !0;
            d || (f.url = o, t && (f.w = t), i && (f.d = i), n && (f.h = n), n || i || t || (f.d = 1), 1 === f.d && (e.has1x = !0), f.set = e, p.push(f))
        }

        function r() {
            for (i(to), l = "", u = "in descriptor";;) {
                if (h = t.charAt(d), "in descriptor" === u) {
                    if (n(h)) l && (a.push(l), l = "", u = "after descriptor");
                    else {
                        if ("," === h) return d += 1, l && a.push(l), void s();
                        if ("(" === h) l += h, u = "in parens";
                        else {
                            if ("" === h) return l && a.push(l), void s();
                            l += h
                        }
                    }
                } else if ("in parens" === u) {
                    if (")" === h) l += h, u = "in descriptor";
                    else {
                        if ("" === h) return a.push(l), void s();
                        l += h
                    }
                } else if ("after descriptor" === u) {
                    if (n(h));
                    else {
                        if ("" === h) return void s();
                        u = "in descriptor", d -= 1
                    }
                }
                d += 1
            }
        }
        for (var o, a, l, u, h, c = t.length, d = 0, p = [];;) {
            if (i(ta), d >= c) return p;
            o = i(tl), a = [], "," === o.slice(-1) ? (o = o.replace(tu, ""), s()) : r()
        }
    }

    function p(t) {
        function e(t) {
            function e() {
                r && (o.push(r), r = "")
            }

            function i() {
                o[0] && (a.push(o), o = [])
            }
            for (var s, r = "", o = [], a = [], l = 0, u = 0, h = !1;;) {
                if ("" === (s = t.charAt(u))) return e(), i(), a;
                if (h) {
                    if ("*" === s && "/" === t[u + 1]) {
                        h = !1, u += 2, e();
                        continue
                    }
                    u += 1
                } else {
                    if (n(s)) {
                        if (t.charAt(u - 1) && n(t.charAt(u - 1)) || !r) {
                            u += 1;
                            continue
                        }
                        if (0 === l) {
                            e(), u += 1;
                            continue
                        }
                        s = " "
                    } else if ("(" === s) l += 1;
                    else if (")" === s) l -= 1;
                    else {
                        if ("," === s) {
                            e(), i(), u += 1;
                            continue
                        }
                        if ("/" === s && "*" === t.charAt(u + 1)) {
                            h = !0, u += 2;
                            continue
                        }
                    }
                    r += s, u += 1
                }
            }
        }

        function i(t) {
            return !!(h.test(t) && parseFloat(t) >= 0) || !!c.test(t) || "0" === t || "-0" === t || "+0" === t
        }
        var s, r, o, a, l, u, h = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,
            c = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;
        for (o = (r = e(t)).length, s = 0; o > s; s++)
            if (i(l = (a = r[s])[a.length - 1]) && (u = l, a.pop(), 0 === a.length || (a = a.join(" "), L.matchesMedia(a)))) return u;
        return "100vw"
    }
    e.createElement("picture");
    var f, g, m, y, v, b, $, w, _, x, S, T, k, C, A, E, I, P, z, L = {},
        M = !1,
        O = function() {},
        D = e.createElement("img"),
        N = D.getAttribute,
        F = D.setAttribute,
        j = D.removeAttribute,
        H = e.documentElement,
        q = {},
        W = {
            algorithm: ""
        },
        R = "data-pfsrc",
        B = R + "set",
        Y = navigator.userAgent,
        V = /rident/.test(Y) || /ecko/.test(Y) && Y.match(/rv\:(\d+)/) && RegExp.$1 > 35,
        X = "currentSrc",
        U = /\s+\+?\d+(e\d+)?w/,
        Q = /(\([^)]+\))?\s*(.+)/,
        G = t.picturefillCFG,
        Z = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",
        K = "font-size:100%!important;",
        J = !0,
        tt = {},
        te = {},
        ti = t.devicePixelRatio,
        tn = {
            px: 1,
            in: 96
        },
        ts = e.createElement("a"),
        tr = !1,
        to = /^[ \t\n\r\u000c]+/,
        ta = /^[, \t\n\r\u000c]+/,
        tl = /^[^ \t\n\r\u000c]+/,
        tu = /[,]+$/,
        th = /^\d+$/,
        tc = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,
        td = function(t, e, i, n) {
            t.addEventListener ? t.addEventListener(e, i, n || !1) : t.attachEvent && t.attachEvent("on" + e, i)
        },
        tp = function(t) {
            var e = {};
            return function(i) {
                return i in e || (e[i] = t(i)), e[i]
            }
        },
        tf = (f = /^([\d\.]+)(em|vw|px)$/, g = function() {
            for (var t = arguments, e = 0, i = t[0];
                (++e in t);) i = i.replace(t[e], t[++e]);
            return i
        }, m = tp(function(t) {
            return "return " + g((t || "").toLowerCase(), /\band\b/g, "&&", /,/g, "||", /min-([a-z-\s]+):/g, "e.$1>=", /max-([a-z-\s]+):/g, "e.$1<=", /calc([^)]+)/g, "($1)", /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)", /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi, "") + ";"
        }), function(t, e) {
            var i;
            if (!(t in tt)) {
                if (tt[t] = !1, e && (i = t.match(f))) tt[t] = i[1] * tn[i[2]];
                else try {
                    tt[t] = Function("e", m(t))(tn)
                } catch (n) {}
            }
            return tt[t]
        }),
        tg = function(t, e) {
            return t.w ? (t.cWidth = L.calcListLength(e || "100vw"), t.res = t.w / t.cWidth) : t.res = t.d, t
        },
        tm = function(t) {
            if (M) {
                var i, n, s, r = t || {};
                if (r.elements && 1 === r.elements.nodeType && ("IMG" === r.elements.nodeName.toUpperCase() ? r.elements = [r.elements] : (r.context = r.elements, r.elements = null)), s = (i = r.elements || L.qsa(r.context || e, r.reevaluate || r.reselect ? L.sel : L.selShort)).length) {
                    for (L.setupRun(r), tr = !0, n = 0; s > n; n++) L.fillImg(i[n], r);
                    L.teardownRun(r)
                }
            }
        };
    for (y = t.console && console.warn ? function(t) {
            console.warn(t)
        } : O, (X in D) || (X = "src"), q["image/jpeg"] = !0, q["image/gif"] = !0, q["image/png"] = !0, q["image/svg+xml"] = e.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"), L.ns = ("pf" + (new Date).getTime()).substr(0, 9), L.supSrcset = ("srcset" in D), L.supSizes = ("sizes" in D), L.supPicture = !!t.HTMLPictureElement, L.supSrcset && L.supPicture && !L.supSizes && (w = e.createElement("img"), D.srcset = "data:,a", w.src = "data:,a", L.supSrcset = D.complete === w.complete, L.supPicture = L.supSrcset && L.supPicture), L.supSrcset && !L.supSizes ? (_ = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==", x = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", S = e.createElement("img"), T = function() {
            2 === S.width && (L.supSizes = !0), b = L.supSrcset && !L.supSizes, M = !0, setTimeout(tm)
        }, S.onload = T, S.onerror = T, S.setAttribute("sizes", "9px"), S.srcset = x + " 1w," + _ + " 9w", S.src = x) : M = !0, L.selShort = "picture>img,img[srcset]", L.sel = L.selShort, L.cfg = W, L.DPR = ti || 1, L.u = tn, L.types = q, L.setSize = O, L.makeUrl = tp(function(t) {
            return ts.href = t, ts.href
        }), L.qsa = function(t, e) {
            return ("querySelector" in t) ? t.querySelectorAll(e) : []
        }, L.matchesMedia = function() {
            return t.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches ? L.matchesMedia = function(t) {
                return !t || matchMedia(t).matches
            } : L.matchesMedia = L.mMQ, L.matchesMedia.apply(this, arguments)
        }, L.mMQ = function(t) {
            return !t || tf(t)
        }, L.calcLength = function(t) {
            var e = tf(t, !0) || !1;
            return 0 > e && (e = !1), e
        }, L.supportsType = function(t) {
            return !t || q[t]
        }, L.parseSize = tp(function(t) {
            var e = (t || "").match(Q);
            return {
                media: e && e[1],
                length: e && e[2]
            }
        }), L.parseSet = function(t) {
            return t.cands || (t.cands = d(t.srcset, t)), t.cands
        }, L.getEmValue = function() {
            var t;
            if (!v && (t = e.body)) {
                var i = e.createElement("div"),
                    n = H.style.cssText,
                    s = t.style.cssText;
                i.style.cssText = Z, H.style.cssText = K, t.style.cssText = K, t.appendChild(i), v = i.offsetWidth, t.removeChild(i), v = parseFloat(v, 10), H.style.cssText = n, t.style.cssText = s
            }
            return v || 16
        }, L.calcListLength = function(t) {
            if (!(t in te) || W.uT) {
                var e = L.calcLength(p(t));
                te[t] = e || tn.width
            }
            return te[t]
        }, L.setRes = function(t) {
            var e;
            if (t) {
                e = L.parseSet(t);
                for (var i = 0, n = e.length; n > i; i++) tg(e[i], t.sizes)
            }
            return e
        }, L.setRes.res = tg, L.applySetCandidate = function(t, e) {
            if (t.length) {
                var i, n, s, r, a, h, c, d, p, f = e[L.ns],
                    g = L.DPR;
                if (h = f.curSrc || e[X], (c = f.curCan || u(e, h, t[0].set)) && c.set === t[0].set && ((p = V && !e.complete && c.res - .1 > g) || (c.cached = !0, c.res >= g && (a = c))), !a) {
                    for (t.sort(l), a = t[(r = t.length) - 1], n = 0; r > n; n++)
                        if ((i = t[n]).res >= g) {
                            a = t[s = n - 1] && (p || h !== L.makeUrl(i.url)) && o(t[s].res, i.res, g, t[s].cached) ? t[s] : i;
                            break
                        }
                }
                a && (d = L.makeUrl(a.url), f.curSrc = d, f.curCan = a, d !== h && L.setSrc(e, a), L.setSize(e))
            }
        }, L.setSrc = function(t, e) {
            var i;
            t.src = e.url, "image/svg+xml" === e.set.type && (i = t.style.width, t.style.width = t.offsetWidth + 1 + "px", t.offsetWidth + 1 && (t.style.width = i))
        }, L.getSet = function(t) {
            var e, i, n, s = !1,
                r = t[L.ns].sets;
            for (e = 0; e < r.length && !s; e++)
                if ((i = r[e]).srcset && L.matchesMedia(i.media) && (n = L.supportsType(i.type))) {
                    "pending" === n && (i = n), s = i;
                    break
                }
            return s
        }, L.parseSets = function(t, e, n) {
            var s, r, o, a, l = e && "PICTURE" === e.nodeName.toUpperCase(),
                u = t[L.ns];
            (u.src === i || n.src) && (u.src = N.call(t, "src"), u.src ? F.call(t, R, u.src) : j.call(t, R)), (u.srcset === i || n.srcset || !L.supSrcset || t.srcset) && (s = N.call(t, "srcset"), u.srcset = s, a = !0), u.sets = [], l && (u.pic = !0, c(e, u.sets)), u.srcset ? (r = {
                srcset: u.srcset,
                sizes: N.call(t, "sizes")
            }, u.sets.push(r), (o = (b || u.src) && U.test(u.srcset || "")) || !u.src || h(u.src, r) || r.has1x || (r.srcset += ", " + u.src, r.cands.push({
                url: u.src,
                d: 1,
                set: r
            }))) : u.src && u.sets.push({
                srcset: u.src,
                sizes: null
            }), u.curCan = null, u.curSrc = i, u.supported = !(l || r && !L.supSrcset || o && !L.supSizes), a && L.supSrcset && !u.supported && (s ? (F.call(t, B, s), t.srcset = "") : j.call(t, B)), u.supported && !u.srcset && (!u.src && t.src || t.src !== L.makeUrl(u.src)) && (null === u.src ? t.removeAttribute("src") : t.src = u.src), u.parsed = !0
        }, L.fillImg = function(t, e) {
            var i, n = e.reselect || e.reevaluate;
            t[L.ns] || (t[L.ns] = {}), i = t[L.ns], (n || i.evaled !== $) && ((!i.parsed || e.reevaluate) && L.parseSets(t, t.parentNode, e), i.supported ? i.evaled = $ : a(t))
        }, L.setupRun = function() {
            (!tr || J || ti !== t.devicePixelRatio) && r()
        }, L.supPicture ? (tm = O, L.fillImg = O) : (C = t.attachEvent ? /d$|^c/ : /d$|^c|^i/, A = function() {
            var t = e.readyState || "";
            E = setTimeout(A, "loading" === t ? 200 : 999), e.body && (L.fillImgs(), (k = k || C.test(t)) && clearTimeout(E))
        }, E = setTimeout(A, e.body ? 9 : 99), I = function(t, e) {
            var i, n, s = function() {
                var r = new Date - n;
                e > r ? i = setTimeout(s, e - r) : (i = null, t())
            };
            return function() {
                n = new Date, i || (i = setTimeout(s, e))
            }
        }, P = H.clientHeight, z = function() {
            J = Math.max(t.innerWidth || 0, H.clientWidth) !== tn.width || H.clientHeight !== P, P = H.clientHeight, J && L.fillImgs()
        }, td(t, "resize", I(z, 99)), td(e, "readystatechange", A)), L.picturefill = tm, L.fillImgs = tm, L.teardownRun = O, tm._ = L, t.picturefillCFG = {
            pf: L,
            push: function(t) {
                var e = t.shift();
                "function" == typeof L[e] ? L[e].apply(L, t) : (W[e] = t[0], tr && L.fillImgs({
                    reselect: !0
                }))
            }
        }; G && G.length;) t.picturefillCFG.push(G.shift());
    t.picturefill = tm, "object" == typeof module && "object" == typeof module.exports ? module.exports = tm : "function" == typeof define && define.amd && define("picturefill", function() {
        return tm
    }), L.supPicture || (q["image/webp"] = s("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))
}(window, document),
/*!
 * Plyr v3.6.8
 * https://github.com/sampotts/plyr
 */
"object" == typeof navigator && function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("Plyr", e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).Plyr = e()
}(this, function() {
    "use strict";

    function t(t, e, i) {
        return e in t ? Object.defineProperty(t, e, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = i, t
    }

    function e(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function i(t, e, i) {
        return e in t ? Object.defineProperty(t, e, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = i, t
    }

    function n(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), i.push.apply(i, n)
        }
        return i
    }

    function s(t) {
        for (var e = 1; e < arguments.length; e++) {
            var s = null != arguments[e] ? arguments[e] : {};
            e % 2 ? n(Object(s), !0).forEach(function(e) {
                i(t, e, s[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s)) : n(Object(s)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(s, e))
            })
        }
        return t
    }
    var r, o, a, l = {
        addCSS: !0,
        thumbWidth: 15,
        watch: !0
    };

    function u(t, e) {
        return (function() {
            return Array.from(document.querySelectorAll(e)).includes(this)
        }).call(t, e)
    }
    var h = function(t) {
            return null != t ? t.constructor : null
        },
        c = function(t, e) {
            return !!(t && e && t instanceof e)
        },
        d = function(t) {
            return null == t
        },
        p = function(t) {
            return h(t) === Object
        },
        f = function(t) {
            return h(t) === String
        },
        g = function(t) {
            return Array.isArray(t)
        },
        m = function(t) {
            return c(t, NodeList)
        },
        y = f,
        v = g,
        b = m,
        $ = function(t) {
            return c(t, Element)
        },
        w = function(t) {
            return c(t, Event)
        },
        _ = function(t) {
            return d(t) || (f(t) || g(t) || m(t)) && !t.length || p(t) && !Object.keys(t).length
        };

    function x(t, e) {
        if (1 > e) {
            var i, n, s = (i = e, (n = "".concat(i).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/)) ? Math.max(0, (n[1] ? n[1].length : 0) - (n[2] ? +n[2] : 0)) : 0);
            return parseFloat(t.toFixed(s))
        }
        return Math.round(t / e) * e
    }
    var S = function() {
        var t, i, n;

        function r(t, e) {
            (function(t, e) {
                if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
            })(this, r), $(t) ? this.element = t : y(t) && (this.element = document.querySelector(t)), $(this.element) && _(this.element.rangeTouch) && (this.config = s({}, l, {}, e), this.init())
        }
        return t = r, i = [{
            key: "init",
            value: function() {
                r.enabled && (this.config.addCSS && (this.element.style.userSelect = "none", this.element.style.webKitUserSelect = "none", this.element.style.touchAction = "manipulation"), this.listeners(!0), this.element.rangeTouch = this)
            }
        }, {
            key: "destroy",
            value: function() {
                r.enabled && (this.config.addCSS && (this.element.style.userSelect = "", this.element.style.webKitUserSelect = "", this.element.style.touchAction = ""), this.listeners(!1), this.element.rangeTouch = null)
            }
        }, {
            key: "listeners",
            value: function(t) {
                var e = this,
                    i = t ? "addEventListener" : "removeEventListener";
                ["touchstart", "touchmove", "touchend"].forEach(function(t) {
                    e.element[i](t, function(t) {
                        return e.set(t)
                    }, !1)
                })
            }
        }, {
            key: "get",
            value: function(t) {
                if (!r.enabled || !w(t)) return null;
                var e, i = t.target,
                    n = t.changedTouches[0],
                    s = parseFloat(i.getAttribute("min")) || 0,
                    o = parseFloat(i.getAttribute("max")) || 100,
                    a = parseFloat(i.getAttribute("step")) || 1,
                    l = i.getBoundingClientRect(),
                    u = 100 / l.width * (this.config.thumbWidth / 2) / 100;
                return 0 > (e = 100 / l.width * (n.clientX - l.left)) ? e = 0 : 100 < e && (e = 100), 50 > e ? e -= (100 - 2 * e) * u : 50 < e && (e += 2 * (e - 50) * u), s + x(e / 100 * (o - s), a)
            }
        }, {
            key: "set",
            value: function(t) {
                r.enabled && w(t) && !t.target.disabled && (t.preventDefault(), t.target.value = this.get(t), function(t, e) {
                    if (t && e) {
                        var i = new Event(e, {
                            bubbles: !0
                        });
                        t.dispatchEvent(i)
                    }
                }(t.target, "touchend" === t.type ? "change" : "input"))
            }
        }], n = [{
            key: "setup",
            value: function(t) {
                var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                    i = null;
                if (_(t) || y(t) ? i = Array.from(document.querySelectorAll(y(t) ? t : 'input[type="range"]')) : $(t) ? i = [t] : b(t) ? i = Array.from(t) : v(t) && (i = t.filter($)), _(i)) return null;
                var n = s({}, l, {}, e);
                return y(t) && n.watch && new MutationObserver(function(e) {
                    Array.from(e).forEach(function(e) {
                        Array.from(e.addedNodes).forEach(function(e) {
                            $(e) && u(e, t) && new r(e, n)
                        })
                    })
                }).observe(document.body, {
                    childList: !0,
                    subtree: !0
                }), i.map(function(t) {
                    return new r(t, e)
                })
            }
        }, {
            key: "enabled",
            get: function() {
                return "ontouchstart" in document.documentElement
            }
        }], i && e(t.prototype, i), n && e(t, n), r
    }();
    let T = t => null != t ? t.constructor : null,
        k = (t, e) => Boolean(t && e && t instanceof e),
        C = t => null == t,
        A = t => T(t) === Object,
        E = t => T(t) === String,
        I = t => T(t) === Function,
        P = t => Array.isArray(t),
        z = t => k(t, NodeList),
        L = t => C(t) || (E(t) || P(t) || z(t)) && !t.length || A(t) && !Object.keys(t).length;
    var M = C,
        O = A,
        D = t => T(t) === Number && !Number.isNaN(t),
        N = E,
        F = t => T(t) === Boolean,
        j = I,
        H = P,
        q = z,
        W = t => null !== t && "object" == typeof t && 1 === t.nodeType && "object" == typeof t.style && "object" == typeof t.ownerDocument,
        R = t => k(t, Event),
        B = t => k(t, KeyboardEvent),
        Y = t => k(t, TextTrack) || !C(t) && E(t.kind),
        V = t => k(t, Promise) && I(t.then),
        X = t => {
            if (k(t, window.URL)) return !0;
            if (!E(t)) return !1;
            let e = t;
            t.startsWith("http://") && t.startsWith("https://") || (e = `http://${t}`);
            try {
                return !L(new URL(e).hostname)
            } catch (i) {
                return !1
            }
        },
        U = L;
    let Q = (() => {
        let t = document.createElement("span"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            },
            i = Object.keys(e).find(e => void 0 !== t.style[e]);
        return !!N(i) && e[i]
    })();

    function G(t, e) {
        setTimeout(() => {
            try {
                t.hidden = !0, t.offsetHeight, t.hidden = !1
            } catch (e) {}
        }, e)
    }
    let Z = {
        isIE: Boolean(window.document.documentMode),
        isEdge: window.navigator.userAgent.includes("Edge"),
        isWebkit: "WebkitAppearance" in document.documentElement.style && !/Edge/.test(navigator.userAgent),
        isIPhone: /(iPhone|iPod)/gi.test(navigator.platform),
        isIos: "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 || /(iPad|iPhone|iPod)/gi.test(navigator.platform)
    };

    function K(t, e) {
        return e.split(".").reduce((t, e) => t && t[e], t)
    }

    function J(t = {}, ...e) {
        if (!e.length) return t;
        let i = e.shift();
        return O(i) ? (Object.keys(i).forEach(e => {
            O(i[e]) ? (Object.keys(t).includes(e) || Object.assign(t, {
                [e]: {}
            }), J(t[e], i[e])) : Object.assign(t, {
                [e]: i[e]
            })
        }), J(t, ...e)) : t
    }

    function tt(t, e) {
        let i = t.length ? t : [t];
        Array.from(i).reverse().forEach((t, i) => {
            let n = i > 0 ? e.cloneNode(!0) : e,
                s = t.parentNode,
                r = t.nextSibling;
            n.appendChild(t), r ? s.insertBefore(n, r) : s.appendChild(n)
        })
    }

    function te(t, e) {
        W(t) && !U(e) && Object.entries(e).filter(([, t]) => !M(t)).forEach(([e, i]) => t.setAttribute(e, i))
    }

    function ti(t, e, i) {
        let n = document.createElement(t);
        return O(e) && te(n, e), N(i) && (n.innerText = i), n
    }

    function tn(t, e, i, n) {
        W(e) && e.appendChild(ti(t, i, n))
    }

    function ts(t) {
        q(t) || H(t) ? Array.from(t).forEach(ts) : W(t) && W(t.parentNode) && t.parentNode.removeChild(t)
    }

    function tr(t) {
        if (!W(t)) return;
        let {
            length: e
        } = t.childNodes;
        for (; e > 0;) t.removeChild(t.lastChild), e -= 1
    }

    function to(t, e) {
        return W(e) && W(e.parentNode) && W(t) ? (e.parentNode.replaceChild(t, e), t) : null
    }

    function ta(t, e) {
        if (!N(t) || U(t)) return {};
        let i = {},
            n = J({}, e);
        return t.split(",").forEach(t => {
            let e = t.trim(),
                s = e.replace(".", ""),
                r = e.replace(/[[\]]/g, "").split("="),
                [o] = r,
                a = r.length > 1 ? r[1].replace(/["']/g, "") : "";
            switch (e.charAt(0)) {
                case ".":
                    N(n.class) ? i.class = `${n.class} ${s}` : i.class = s;
                    break;
                case "#":
                    i.id = e.replace("#", "");
                    break;
                case "[":
                    i[o] = a
            }
        }), J(n, i)
    }

    function tl(t, e) {
        if (!W(t)) return;
        let i = e;
        F(i) || (i = !t.hidden), t.hidden = i
    }

    function tu(t, e, i) {
        if (q(t)) return Array.from(t).map(t => tu(t, e, i));
        if (W(t)) {
            let n = "toggle";
            return void 0 !== i && (n = i ? "add" : "remove"), t.classList[n](e), t.classList.contains(e)
        }
        return !1
    }

    function th(t, e) {
        return W(t) && t.classList.contains(e)
    }

    function tc(t, e) {
        let {
            prototype: i
        } = Element;
        return (i.matches || i.webkitMatchesSelector || i.mozMatchesSelector || i.msMatchesSelector || function() {
            return Array.from(document.querySelectorAll(e)).includes(this)
        }).call(t, e)
    }

    function td(t) {
        return this.elements.container.querySelectorAll(t)
    }

    function tp(t) {
        return this.elements.container.querySelector(t)
    }

    function tf(t = null, e = !1) {
        W(t) && (t.focus({
            preventScroll: !0
        }), e && tu(t, this.config.classNames.tabFocus))
    }
    let tg = {
            "audio/ogg": "vorbis",
            "audio/wav": "1",
            "video/webm": "vp8, vorbis",
            "video/mp4": "avc1.42E01E, mp4a.40.2",
            "video/ogg": "theora"
        },
        tm = {
            audio: "canPlayType" in document.createElement("audio"),
            video: "canPlayType" in document.createElement("video"),
            check(t, e, i) {
                let n = Z.isIPhone && i && tm.playsinline,
                    s = tm[t] || "html5" !== e;
                return {
                    api: s,
                    ui: s && tm.rangeInput && ("video" !== t || !Z.isIPhone || n)
                }
            },
            pip: !(Z.isIPhone || !j(ti("video").webkitSetPresentationMode) && (!document.pictureInPictureEnabled || ti("video").disablePictureInPicture)),
            airplay: j(window.WebKitPlaybackTargetAvailabilityEvent),
            playsinline: "playsInline" in document.createElement("video"),
            mime(t) {
                if (U(t)) return !1;
                let [e] = t.split("/"), i = t;
                if (!this.isHTML5 || e !== this.type) return !1;
                Object.keys(tg).includes(i) && (i += `; codecs="${tg[t]}"`);
                try {
                    return Boolean(i && this.media.canPlayType(i).replace(/no/, ""))
                } catch (n) {
                    return !1
                }
            },
            textTracks: "textTracks" in document.createElement("video"),
            rangeInput: (() => {
                let t = document.createElement("input");
                return t.type = "range", "range" === t.type
            })(),
            touch: "ontouchstart" in document.documentElement,
            transitions: !1 !== Q,
            reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches
        },
        ty = (() => {
            let t = !1;
            try {
                let e = Object.defineProperty({}, "passive", {
                    get: () => (t = !0, null)
                });
                window.addEventListener("test", null, e), window.removeEventListener("test", null, e)
            } catch (i) {}
            return t
        })();

    function tv(t, e, i, n = !1, s = !0, r = !1) {
        if (!t || !("addEventListener" in t) || U(e) || !j(i)) return;
        let o = e.split(" "),
            a = r;
        ty && (a = {
            passive: s,
            capture: r
        }), o.forEach(e => {
            this && this.eventListeners && n && this.eventListeners.push({
                element: t,
                type: e,
                callback: i,
                options: a
            }), t[n ? "addEventListener" : "removeEventListener"](e, i, a)
        })
    }

    function tb(t, e = "", i, n = !0, s = !1) {
        tv.call(this, t, e, i, !0, n, s)
    }

    function t$(t, e = "", i, n = !0, s = !1) {
        tv.call(this, t, e, i, !1, n, s)
    }

    function tw(t, e = "", i, n = !0, s = !1) {
        let r = (...o) => {
            t$(t, e, r, n, s), i.apply(this, o)
        };
        tv.call(this, t, e, r, !0, n, s)
    }

    function t_(t, e = "", i = !1, n = {}) {
        if (!W(t) || U(e)) return;
        let s = new CustomEvent(e, {
            bubbles: i,
            detail: { ...n,
                plyr: this
            }
        });
        t.dispatchEvent(s)
    }

    function tx() {
        this && this.eventListeners && (this.eventListeners.forEach(t => {
            let {
                element: e,
                type: i,
                callback: n,
                options: s
            } = t;
            e.removeEventListener(i, n, s)
        }), this.eventListeners = [])
    }

    function tS() {
        return new Promise(t => this.ready ? setTimeout(t, 0) : tb.call(this, this.elements.container, "ready", t)).then(() => {})
    }

    function t8(t) {
        V(t) && t.then(null, () => {})
    }

    function tT(t) {
        return H(t) ? t.filter((e, i) => t.indexOf(e) === i) : t
    }

    function tk(t, e) {
        return H(t) && t.length ? t.reduce((t, i) => Math.abs(i - e) < Math.abs(t - e) ? i : t) : null
    }

    function tC(t) {
        return !(!window || !window.CSS) && window.CSS.supports(t)
    }
    let tA = [
        [1, 1],
        [4, 3],
        [3, 4],
        [5, 4],
        [4, 5],
        [3, 2],
        [2, 3],
        [16, 10],
        [10, 16],
        [16, 9],
        [9, 16],
        [21, 9],
        [9, 21],
        [32, 9],
        [9, 32]
    ].reduce((t, [e, i]) => ({ ...t,
        [e / i]: [e, i]
    }), {});

    function tE(t) {
        return !!(H(t) || N(t) && t.includes(":")) && (H(t) ? t : t.split(":")).map(Number).every(D)
    }

    function t9(t) {
        if (!H(t) || !t.every(D)) return null;
        let [e, i] = t, n = (t, e) => 0 === e ? t : n(e, t % e), s = n(e, i);
        return [e / s, i / s]
    }

    function tI(t) {
        let e = t => tE(t) ? t.split(":").map(Number) : null,
            i = e(t);
        if (null === i && (i = e(this.config.ratio)), null === i && !U(this.embed) && H(this.embed.ratio) && ({
                ratio: i
            } = this.embed), null === i && this.isHTML5) {
            let {
                videoWidth: n,
                videoHeight: s
            } = this.media;
            i = [n, s]
        }
        return t9(i)
    }

    function tP(t) {
        if (!this.isVideo) return {};
        let {
            wrapper: e
        } = this.elements, i = tI.call(this, t);
        if (!H(i)) return {};
        let [n, s] = t9(i), r = 100 / n * s;
        if (tC(`aspect-ratio: ${n}/${s}`) ? e.style.aspectRatio = `${n}/${s}` : e.style.paddingBottom = `${r}%`, this.isVimeo && !this.config.vimeo.premium && this.supported.ui) {
            let o = 100 / this.media.offsetWidth * parseInt(window.getComputedStyle(this.media).paddingBottom, 10),
                a = (o - r) / (o / 50);
            this.fullscreen.active ? e.style.paddingBottom = null : this.media.style.transform = `translateY(-${a}%)`
        } else this.isHTML5 && e.classList.add(this.config.classNames.videoFixedRatio);
        return {
            padding: r,
            ratio: i
        }
    }

    function tz(t, e, i = .05) {
        let n = t / e,
            s = tk(Object.keys(tA), n);
        return Math.abs(s - n) <= i ? tA[s] : [t, e]
    }
    let tL = {
        getSources() {
            return this.isHTML5 ? Array.from(this.media.querySelectorAll("source")).filter(t => {
                let e = t.getAttribute("type");
                return !!U(e) || tm.mime.call(this, e)
            }) : []
        },
        getQualityOptions() {
            return this.config.quality.forced ? this.config.quality.options : tL.getSources.call(this).map(t => Number(t.getAttribute("size"))).filter(Boolean)
        },
        setup() {
            if (!this.isHTML5) return;
            let t = this;
            t.options.speed = t.config.speed.options, U(this.config.ratio) || tP.call(t), Object.defineProperty(t.media, "quality", {
                get() {
                    let e = tL.getSources.call(t).find(e => e.getAttribute("src") === t.source);
                    return e && Number(e.getAttribute("size"))
                },
                set(e) {
                    if (t.quality !== e) {
                        if (t.config.quality.forced && j(t.config.quality.onChange)) t.config.quality.onChange(e);
                        else {
                            let i = tL.getSources.call(t).find(t => Number(t.getAttribute("size")) === e);
                            if (!i) return;
                            let {
                                currentTime: n,
                                paused: s,
                                preload: r,
                                readyState: o,
                                playbackRate: a
                            } = t.media;
                            t.media.src = i.getAttribute("src"), ("none" !== r || o) && (t.once("loadedmetadata", () => {
                                t.speed = a, t.currentTime = n, s || t8(t.play())
                            }), t.media.load())
                        }
                        t_.call(t, t.media, "qualitychange", !1, {
                            quality: e
                        })
                    }
                }
            })
        },
        cancelRequests() {
            this.isHTML5 && (ts(tL.getSources.call(this)), this.media.setAttribute("src", this.config.blankVideo), this.media.load(), this.debug.log("Cancelled network requests"))
        }
    };

    function t0(t, ...e) {
        return U(t) ? t : t.toString().replace(/{(\d+)}/g, (t, i) => e[i].toString())
    }
    let tM = (t = "", e = "", i = "") => t.replace(RegExp(e.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"), "g"), i.toString()),
        tO = (t = "") => t.toString().replace(/\w\S*/g, t => t.charAt(0).toUpperCase() + t.substr(1).toLowerCase());

    function tD(t = "") {
        let e = t.toString();
        return (e = function(t = "") {
            let e = t.toString();
            return e = tM(e, "-", " "), e = tM(e, "_", " "), e = tO(e), tM(e, " ", "")
        }(e)).charAt(0).toLowerCase() + e.slice(1)
    }

    function t3(t) {
        let e = document.createElement("div");
        return e.appendChild(t), e.innerHTML
    }
    let tN = {
            pip: "PIP",
            airplay: "AirPlay",
            html5: "HTML5",
            vimeo: "Vimeo",
            youtube: "YouTube"
        },
        tF = {
            get(t = "", e = {}) {
                if (U(t) || U(e)) return "";
                let i = K(e.i18n, t);
                if (U(i)) return Object.keys(tN).includes(t) ? tN[t] : "";
                let n = {
                    "{seektime}": e.seekTime,
                    "{title}": e.title
                };
                return Object.entries(n).forEach(([t, e]) => {
                    i = tM(i, t, e)
                }), i
            }
        };
    class tj {
        constructor(e) {
            t(this, "get", t => {
                if (!tj.supported || !this.enabled) return null;
                let e = window.localStorage.getItem(this.key);
                if (U(e)) return null;
                let i = JSON.parse(e);
                return N(t) && t.length ? i[t] : i
            }), t(this, "set", t => {
                if (!tj.supported || !this.enabled || !O(t)) return;
                let e = this.get();
                U(e) && (e = {}), J(e, t), window.localStorage.setItem(this.key, JSON.stringify(e))
            }), this.enabled = e.config.storage.enabled, this.key = e.config.storage.key
        }
        static get supported() {
            try {
                if (!("localStorage" in window)) return !1;
                let t = "___test";
                return window.localStorage.setItem(t, t), window.localStorage.removeItem(t), !0
            } catch (e) {
                return !1
            }
        }
    }

    function tH(t, e = "text") {
        return new Promise((i, n) => {
            try {
                let s = new XMLHttpRequest;
                if (!("withCredentials" in s)) return;
                s.addEventListener("load", () => {
                    if ("text" === e) try {
                        i(JSON.parse(s.responseText))
                    } catch (t) {
                        i(s.responseText)
                    } else i(s.response)
                }), s.addEventListener("error", () => {
                    throw Error(s.status)
                }), s.open("GET", t, !0), s.responseType = e, s.send()
            } catch (r) {
                n(r)
            }
        })
    }

    function tq(t, e) {
        if (!N(t)) return;
        let i = N(e),
            n = !1,
            s = () => null !== document.getElementById(e),
            r = (t, e) => {
                t.innerHTML = e, i && s() || document.body.insertAdjacentElement("afterbegin", t)
            };
        if (!i || !s()) {
            let o = tj.supported,
                a = document.createElement("div");
            if (a.setAttribute("hidden", ""), i && a.setAttribute("id", e), o) {
                let l = window.localStorage.getItem(`cache-${e}`);
                if (n = null !== l) {
                    let u = JSON.parse(l);
                    r(a, u.content)
                }
            }
            tH(t).then(t => {
                U(t) || (o && window.localStorage.setItem(`cache-${e}`, JSON.stringify({
                    content: t
                })), r(a, t))
            }).catch(() => {})
        }
    }
    let tW = t => Math.trunc(t / 60 / 60 % 60, 10);

    function tR(t = 0, e = !1, i = !1) {
        var n, s;
        if (!D(t)) return tR(void 0, e, i);
        let r = t => `0${t}`.slice(-2),
            o = tW(t),
            a = Math.trunc((n = t) / 60 % 60, 10),
            l = Math.trunc((s = t) % 60, 10);
        return `${i&&t>0?"-":""}${o=e||o>0?`${o}:`:""}${r(a)}:${r(l)}`
    }
    let tB = {
        getIconUrl() {
            let t = new URL(this.config.iconUrl, window.location).host !== window.location.host || Z.isIE && !window.svg4everybody;
            return {
                url: this.config.iconUrl,
                cors: t
            }
        },
        findElements() {
            try {
                return this.elements.controls = tp.call(this, this.config.selectors.controls.wrapper), this.elements.buttons = {
                    play: td.call(this, this.config.selectors.buttons.play),
                    pause: tp.call(this, this.config.selectors.buttons.pause),
                    restart: tp.call(this, this.config.selectors.buttons.restart),
                    rewind: tp.call(this, this.config.selectors.buttons.rewind),
                    fastForward: tp.call(this, this.config.selectors.buttons.fastForward),
                    mute: tp.call(this, this.config.selectors.buttons.mute),
                    pip: tp.call(this, this.config.selectors.buttons.pip),
                    airplay: tp.call(this, this.config.selectors.buttons.airplay),
                    settings: tp.call(this, this.config.selectors.buttons.settings),
                    captions: tp.call(this, this.config.selectors.buttons.captions),
                    fullscreen: tp.call(this, this.config.selectors.buttons.fullscreen)
                }, this.elements.progress = tp.call(this, this.config.selectors.progress), this.elements.inputs = {
                    seek: tp.call(this, this.config.selectors.inputs.seek),
                    volume: tp.call(this, this.config.selectors.inputs.volume)
                }, this.elements.display = {
                    buffer: tp.call(this, this.config.selectors.display.buffer),
                    currentTime: tp.call(this, this.config.selectors.display.currentTime),
                    duration: tp.call(this, this.config.selectors.display.duration)
                }, W(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector(`.${this.config.classNames.tooltip}`)), !0
            } catch (t) {
                return this.debug.warn("It looks like there is a problem with your custom controls HTML", t), this.toggleNativeControls(!0), !1
            }
        },
        createIcon(t, e) {
            let i = "http://www.w3.org/2000/svg",
                n = tB.getIconUrl.call(this),
                s = `${n.cors?"":n.url}#${this.config.iconPrefix}`,
                r = document.createElementNS(i, "svg");
            te(r, J(e, {
                "aria-hidden": "true",
                focusable: "false"
            }));
            let o = document.createElementNS(i, "use"),
                a = `${s}-${t}`;
            return "href" in o && o.setAttributeNS("http://www.w3.org/1999/xlink", "href", a), o.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a), r.appendChild(o), r
        },
        createLabel(t, e = {}) {
            let i = tF.get(t, this.config);
            return ti("span", { ...e,
                class: [e.class, this.config.classNames.hidden].filter(Boolean).join(" ")
            }, i)
        },
        createBadge(t) {
            if (U(t)) return null;
            let e = ti("span", {
                class: this.config.classNames.menu.value
            });
            return e.appendChild(ti("span", {
                class: this.config.classNames.menu.badge
            }, t)), e
        },
        createButton(t, e) {
            let i = J({}, e),
                n = tD(t),
                s = {
                    element: "button",
                    toggle: !1,
                    label: null,
                    icon: null,
                    labelPressed: null,
                    iconPressed: null
                };
            switch (["element", "icon", "label"].forEach(t => {
                Object.keys(i).includes(t) && (s[t] = i[t], delete i[t])
            }), "button" !== s.element || Object.keys(i).includes("type") || (i.type = "button"), Object.keys(i).includes("class") ? i.class.split(" ").some(t => t === this.config.classNames.control) || J(i, {
                class: `${i.class} ${this.config.classNames.control}`
            }) : i.class = this.config.classNames.control, t) {
                case "play":
                    s.toggle = !0, s.label = "play", s.labelPressed = "pause", s.icon = "play", s.iconPressed = "pause";
                    break;
                case "mute":
                    s.toggle = !0, s.label = "mute", s.labelPressed = "unmute", s.icon = "volume", s.iconPressed = "muted";
                    break;
                case "captions":
                    s.toggle = !0, s.label = "enableCaptions", s.labelPressed = "disableCaptions", s.icon = "captions-off", s.iconPressed = "captions-on";
                    break;
                case "fullscreen":
                    s.toggle = !0, s.label = "enterFullscreen", s.labelPressed = "exitFullscreen", s.icon = "enter-fullscreen", s.iconPressed = "exit-fullscreen";
                    break;
                case "play-large":
                    i.class += ` ${this.config.classNames.control}--overlaid`, n = "play", s.label = "play", s.icon = "play";
                    break;
                default:
                    U(s.label) && (s.label = n), U(s.icon) && (s.icon = t)
            }
            let r = ti(s.element);
            return s.toggle ? (r.appendChild(tB.createIcon.call(this, s.iconPressed, {
                class: "icon--pressed"
            })), r.appendChild(tB.createIcon.call(this, s.icon, {
                class: "icon--not-pressed"
            })), r.appendChild(tB.createLabel.call(this, s.labelPressed, {
                class: "label--pressed"
            })), r.appendChild(tB.createLabel.call(this, s.label, {
                class: "label--not-pressed"
            }))) : (r.appendChild(tB.createIcon.call(this, s.icon)), r.appendChild(tB.createLabel.call(this, s.label))), J(i, ta(this.config.selectors.buttons[n], i)), te(r, i), "play" === n ? (H(this.elements.buttons[n]) || (this.elements.buttons[n] = []), this.elements.buttons[n].push(r)) : this.elements.buttons[n] = r, r
        },
        createRange(t, e) {
            let i = ti("input", J(ta(this.config.selectors.inputs[t]), {
                type: "range",
                min: 0,
                max: 100,
                step: .01,
                value: 0,
                autocomplete: "off",
                role: "slider",
                "aria-label": tF.get(t, this.config),
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                "aria-valuenow": 0
            }, e));
            return this.elements.inputs[t] = i, tB.updateRangeFill.call(this, i), S.setup(i), i
        },
        createProgress(t, e) {
            let i = ti("progress", J(ta(this.config.selectors.display[t]), {
                min: 0,
                max: 100,
                value: 0,
                role: "progressbar",
                "aria-hidden": !0
            }, e));
            if ("volume" !== t) {
                i.appendChild(ti("span", null, "0"));
                let n = {
                        played: "played",
                        buffer: "buffered"
                    }[t],
                    s = n ? tF.get(n, this.config) : "";
                i.innerText = `% ${s.toLowerCase()}`
            }
            return this.elements.display[t] = i, i
        },
        createTime(t, e) {
            let i = ta(this.config.selectors.display[t], e),
                n = ti("div", J(i, {
                    class: `${i.class?i.class:""} ${this.config.classNames.display.time} `.trim(),
                    "aria-label": tF.get(t, this.config)
                }), "00:00");
            return this.elements.display[t] = n, n
        },
        bindMenuItemShortcuts(t, e) {
            tb.call(this, t, "keydown keyup", i => {
                if (![32, 38, 39, 40].includes(i.which) || (i.preventDefault(), i.stopPropagation(), "keydown" === i.type)) return;
                let n = tc(t, '[role="menuitemradio"]');
                if (!n && [32, 39].includes(i.which)) tB.showMenuPanel.call(this, e, !0);
                else {
                    let s;
                    32 !== i.which && (40 === i.which || n && 39 === i.which ? W(s = t.nextElementSibling) || (s = t.parentNode.firstElementChild) : W(s = t.previousElementSibling) || (s = t.parentNode.lastElementChild), tf.call(this, s, !0))
                }
            }, !1), tb.call(this, t, "keyup", t => {
                13 === t.which && tB.focusFirstMenuItem.call(this, null, !0)
            })
        },
        createMenuItem({
            value: t,
            list: e,
            type: i,
            title: n,
            badge: s = null,
            checked: r = !1
        }) {
            let o = ta(this.config.selectors.inputs[i]),
                a = ti("button", J(o, {
                    type: "button",
                    role: "menuitemradio",
                    class: `${this.config.classNames.control} ${o.class?o.class:""}`.trim(),
                    "aria-checked": r,
                    value: t
                })),
                l = ti("span");
            l.innerHTML = n, W(s) && l.appendChild(s), a.appendChild(l), Object.defineProperty(a, "checked", {
                enumerable: !0,
                get: () => "true" === a.getAttribute("aria-checked"),
                set(t) {
                    t && Array.from(a.parentNode.children).filter(t => tc(t, '[role="menuitemradio"]')).forEach(t => t.setAttribute("aria-checked", "false")), a.setAttribute("aria-checked", t ? "true" : "false")
                }
            }), this.listeners.bind(a, "click keyup", e => {
                if (!B(e) || 32 === e.which) {
                    switch (e.preventDefault(), e.stopPropagation(), a.checked = !0, i) {
                        case "language":
                            this.currentTrack = Number(t);
                            break;
                        case "quality":
                            this.quality = t;
                            break;
                        case "speed":
                            this.speed = parseFloat(t)
                    }
                    tB.showMenuPanel.call(this, "home", B(e))
                }
            }, i, !1), tB.bindMenuItemShortcuts.call(this, a, i), e.appendChild(a)
        },
        formatTime(t = 0, e = !1) {
            return D(t) ? tR(t, tW(this.duration) > 0, e) : t
        },
        updateTimeDisplay(t = null, e = 0, i = !1) {
            W(t) && D(e) && (t.innerText = tB.formatTime(e, i))
        },
        updateVolume() {
            this.supported.ui && (W(this.elements.inputs.volume) && tB.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), W(this.elements.buttons.mute) && (this.elements.buttons.mute.pressed = this.muted || 0 === this.volume))
        },
        setRange(t, e = 0) {
            W(t) && (t.value = e, tB.updateRangeFill.call(this, t))
        },
        updateProgress(t) {
            var e, i;
            if (!this.supported.ui || !R(t)) return;
            let n = 0,
                s = (t, e) => {
                    let i = D(e) ? e : 0,
                        n = W(t) ? t : this.elements.display.buffer;
                    if (W(n)) {
                        n.value = i;
                        let s = n.getElementsByTagName("span")[0];
                        W(s) && (s.childNodes[0].nodeValue = i)
                    }
                };
            if (t) switch (t.type) {
                case "timeupdate":
                case "seeking":
                case "seeked":
                    e = this.currentTime, i = this.duration, n = 0 === e || 0 === i || Number.isNaN(e) || Number.isNaN(i) ? 0 : (e / i * 100).toFixed(2), "timeupdate" === t.type && tB.setRange.call(this, this.elements.inputs.seek, n);
                    break;
                case "playing":
                case "progress":
                    s(this.elements.display.buffer, 100 * this.buffered)
            }
        },
        updateRangeFill(t) {
            let e = R(t) ? t.target : t;
            if (W(e) && "range" === e.getAttribute("type")) {
                if (tc(e, this.config.selectors.inputs.seek)) {
                    e.setAttribute("aria-valuenow", this.currentTime);
                    let i = tB.formatTime(this.currentTime),
                        n = tB.formatTime(this.duration),
                        s = tF.get("seekLabel", this.config);
                    e.setAttribute("aria-valuetext", s.replace("{currentTime}", i).replace("{duration}", n))
                } else if (tc(e, this.config.selectors.inputs.volume)) {
                    let r = 100 * e.value;
                    e.setAttribute("aria-valuenow", r), e.setAttribute("aria-valuetext", `${r.toFixed(1)}%`)
                } else e.setAttribute("aria-valuenow", e.value);
                Z.isWebkit && e.style.setProperty("--value", e.value / e.max * 100 + "%")
            }
        },
        updateSeekTooltip(t) {
            if (!this.config.tooltips.seek || !W(this.elements.inputs.seek) || !W(this.elements.display.seekTooltip) || 0 === this.duration) return;
            let e = `${this.config.classNames.tooltip}--visible`,
                i = t => tu(this.elements.display.seekTooltip, e, t);
            if (this.touch) return void i(!1);
            let n = 0,
                s = this.elements.progress.getBoundingClientRect();
            if (R(t)) n = 100 / s.width * (t.pageX - s.left);
            else {
                if (!th(this.elements.display.seekTooltip, e)) return;
                n = parseFloat(this.elements.display.seekTooltip.style.left, 10)
            }
            n < 0 ? n = 0 : n > 100 && (n = 100), tB.updateTimeDisplay.call(this, this.elements.display.seekTooltip, this.duration / 100 * n), this.elements.display.seekTooltip.style.left = `${n}%`, R(t) && ["mouseenter", "mouseleave"].includes(t.type) && i("mouseenter" === t.type)
        },
        timeUpdate(t) {
            let e = !W(this.elements.display.duration) && this.config.invertTime;
            tB.updateTimeDisplay.call(this, this.elements.display.currentTime, e ? this.duration - this.currentTime : this.currentTime, e), t && "timeupdate" === t.type && this.media.seeking || tB.updateProgress.call(this, t)
        },
        durationUpdate() {
            if (!this.supported.ui || !this.config.invertTime && this.currentTime) return;
            if (this.duration >= 4294967296) return tl(this.elements.display.currentTime, !0), void tl(this.elements.progress, !0);
            W(this.elements.inputs.seek) && this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
            let t = W(this.elements.display.duration);
            !t && this.config.displayDuration && this.paused && tB.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration), t && tB.updateTimeDisplay.call(this, this.elements.display.duration, this.duration), tB.updateSeekTooltip.call(this)
        },
        toggleMenuButton(t, e) {
            tl(this.elements.settings.buttons[t], !e)
        },
        updateSetting(t, e, i) {
            let n = this.elements.settings.panels[t],
                s = null,
                r = e;
            if ("captions" === t) s = this.currentTrack;
            else {
                if (s = U(i) ? this[t] : i, U(s) && (s = this.config[t].default), !U(this.options[t]) && !this.options[t].includes(s)) return void this.debug.warn(`Unsupported value of '${s}' for ${t}`);
                if (!this.config[t].options.includes(s)) return void this.debug.warn(`Disabled value of '${s}' for ${t}`)
            }
            if (W(r) || (r = n && n.querySelector('[role="menu"]')), !W(r)) return;
            this.elements.settings.buttons[t].querySelector(`.${this.config.classNames.menu.value}`).innerHTML = tB.getLabel.call(this, t, s);
            let o = r && r.querySelector(`[value="${s}"]`);
            W(o) && (o.checked = !0)
        },
        getLabel(t, e) {
            switch (t) {
                case "speed":
                    return 1 === e ? tF.get("normal", this.config) : `${e}&times;`;
                case "quality":
                    if (D(e)) {
                        let i = tF.get(`qualityLabel.${e}`, this.config);
                        return i.length ? i : `${e}p`
                    }
                    return tO(e);
                case "captions":
                    return t4.getLabel.call(this);
                default:
                    return null
            }
        },
        setQualityMenu(t) {
            if (!W(this.elements.settings.panels.quality)) return;
            let e = "quality",
                i = this.elements.settings.panels.quality.querySelector('[role="menu"]');
            H(t) && (this.options.quality = tT(t).filter(t => this.config.quality.options.includes(t)));
            let n = !U(this.options.quality) && this.options.quality.length > 1;
            if (tB.toggleMenuButton.call(this, e, n), tr(i), tB.checkMenu.call(this), !n) return;
            let s = t => {
                let e = tF.get(`qualityBadge.${t}`, this.config);
                return e.length ? tB.createBadge.call(this, e) : null
            };
            this.options.quality.sort((t, e) => {
                let i = this.config.quality.options;
                return i.indexOf(t) > i.indexOf(e) ? 1 : -1
            }).forEach(t => {
                tB.createMenuItem.call(this, {
                    value: t,
                    list: i,
                    type: e,
                    title: tB.getLabel.call(this, "quality", t),
                    badge: s(t)
                })
            }), tB.updateSetting.call(this, e, i)
        },
        setCaptionsMenu() {
            if (!W(this.elements.settings.panels.captions)) return;
            let t = "captions",
                e = this.elements.settings.panels.captions.querySelector('[role="menu"]'),
                i = t4.getTracks.call(this),
                n = Boolean(i.length);
            if (tB.toggleMenuButton.call(this, t, n), tr(e), tB.checkMenu.call(this), !n) return;
            let s = i.map((t, i) => ({
                value: i,
                checked: this.captions.toggled && this.currentTrack === i,
                title: t4.getLabel.call(this, t),
                badge: t.language && tB.createBadge.call(this, t.language.toUpperCase()),
                list: e,
                type: "language"
            }));
            s.unshift({
                value: -1,
                checked: !this.captions.toggled,
                title: tF.get("disabled", this.config),
                list: e,
                type: "language"
            }), s.forEach(tB.createMenuItem.bind(this)), tB.updateSetting.call(this, t, e)
        },
        setSpeedMenu() {
            if (!W(this.elements.settings.panels.speed)) return;
            let t = "speed",
                e = this.elements.settings.panels.speed.querySelector('[role="menu"]');
            this.options.speed = this.options.speed.filter(t => t >= this.minimumSpeed && t <= this.maximumSpeed);
            let i = !U(this.options.speed) && this.options.speed.length > 1;
            tB.toggleMenuButton.call(this, t, i), tr(e), tB.checkMenu.call(this), i && (this.options.speed.forEach(i => {
                tB.createMenuItem.call(this, {
                    value: i,
                    list: e,
                    type: t,
                    title: tB.getLabel.call(this, "speed", i)
                })
            }), tB.updateSetting.call(this, t, e))
        },
        checkMenu() {
            let {
                buttons: t
            } = this.elements.settings, e = !U(t) && Object.values(t).some(t => !t.hidden);
            tl(this.elements.settings.menu, !e)
        },
        focusFirstMenuItem(t, e = !1) {
            if (this.elements.settings.popup.hidden) return;
            let i = t;
            W(i) || (i = Object.values(this.elements.settings.panels).find(t => !t.hidden));
            let n = i.querySelector('[role^="menuitem"]');
            tf.call(this, n, e)
        },
        toggleMenu(t) {
            let {
                popup: e
            } = this.elements.settings, i = this.elements.buttons.settings;
            if (!W(e) || !W(i)) return;
            let {
                hidden: n
            } = e, s = n;
            if (F(t)) s = t;
            else if (B(t) && 27 === t.which) s = !1;
            else if (R(t)) {
                let r = j(t.composedPath) ? t.composedPath()[0] : t.target,
                    o = e.contains(r);
                if (o || !o && t.target !== i && s) return
            }
            i.setAttribute("aria-expanded", s), tl(e, !s), tu(this.elements.container, this.config.classNames.menu.open, s), s && B(t) ? tB.focusFirstMenuItem.call(this, null, !0) : s || n || tf.call(this, i, B(t))
        },
        getMenuSize(t) {
            let e = t.cloneNode(!0);
            e.style.position = "absolute", e.style.opacity = 0, e.removeAttribute("hidden"), t.parentNode.appendChild(e);
            let i = e.scrollWidth,
                n = e.scrollHeight;
            return ts(e), {
                width: i,
                height: n
            }
        },
        showMenuPanel(t = "", e = !1) {
            let i = this.elements.container.querySelector(`#plyr-settings-${this.id}-${t}`);
            if (!W(i)) return;
            let n = i.parentNode,
                s = Array.from(n.children).find(t => !t.hidden);
            if (tm.transitions && !tm.reducedMotion) {
                n.style.width = `${s.scrollWidth}px`, n.style.height = `${s.scrollHeight}px`;
                let r = tB.getMenuSize.call(this, i),
                    o = t => {
                        t.target === n && ["width", "height"].includes(t.propertyName) && (n.style.width = "", n.style.height = "", t$.call(this, n, Q, o))
                    };
                tb.call(this, n, Q, o), n.style.width = `${r.width}px`, n.style.height = `${r.height}px`
            }
            tl(s, !0), tl(i, !1), tB.focusFirstMenuItem.call(this, i, e)
        },
        setDownloadUrl() {
            let t = this.elements.buttons.download;
            W(t) && t.setAttribute("href", this.download)
        },
        create(t) {
            let {
                bindMenuItemShortcuts: e,
                createButton: i,
                createProgress: n,
                createRange: s,
                createTime: r,
                setQualityMenu: o,
                setSpeedMenu: a,
                showMenuPanel: l
            } = tB;
            this.elements.controls = null, H(this.config.controls) && this.config.controls.includes("play-large") && this.elements.container.appendChild(i.call(this, "play-large"));
            let u = ti("div", ta(this.config.selectors.controls.wrapper));
            this.elements.controls = u;
            let h = {
                class: "plyr__controls__item"
            };
            return tT(H(this.config.controls) ? this.config.controls : []).forEach(o => {
                if ("restart" === o && u.appendChild(i.call(this, "restart", h)), "rewind" === o && u.appendChild(i.call(this, "rewind", h)), "play" === o && u.appendChild(i.call(this, "play", h)), "fast-forward" === o && u.appendChild(i.call(this, "fast-forward", h)), "progress" === o) {
                    let a = ti("div", {
                            class: `${h.class} plyr__progress__container`
                        }),
                        c = ti("div", ta(this.config.selectors.progress));
                    if (c.appendChild(s.call(this, "seek", {
                            id: `plyr-seek-${t.id}`
                        })), c.appendChild(n.call(this, "buffer")), this.config.tooltips.seek) {
                        let d = ti("span", {
                            class: this.config.classNames.tooltip
                        }, "00:00");
                        c.appendChild(d), this.elements.display.seekTooltip = d
                    }
                    this.elements.progress = c, a.appendChild(this.elements.progress), u.appendChild(a)
                }
                if ("current-time" === o && u.appendChild(r.call(this, "currentTime", h)), "duration" === o && u.appendChild(r.call(this, "duration", h)), "mute" === o || "volume" === o) {
                    let {
                        volume: p
                    } = this.elements;
                    if (W(p) && u.contains(p) || (p = ti("div", J({}, h, {
                            class: `${h.class} plyr__volume`.trim()
                        })), this.elements.volume = p, u.appendChild(p)), "mute" === o && p.appendChild(i.call(this, "mute")), "volume" === o && !Z.isIos) {
                        let f = {
                            max: 1,
                            step: .05,
                            value: this.config.volume
                        };
                        p.appendChild(s.call(this, "volume", J(f, {
                            id: `plyr-volume-${t.id}`
                        })))
                    }
                }
                if ("captions" === o && u.appendChild(i.call(this, "captions", h)), "settings" === o && !U(this.config.settings)) {
                    let g = ti("div", J({}, h, {
                        class: `${h.class} plyr__menu`.trim(),
                        hidden: ""
                    }));
                    g.appendChild(i.call(this, "settings", {
                        "aria-haspopup": !0,
                        "aria-controls": `plyr-settings-${t.id}`,
                        "aria-expanded": !1
                    }));
                    let m = ti("div", {
                            class: "plyr__menu__container",
                            id: `plyr-settings-${t.id}`,
                            hidden: ""
                        }),
                        y = ti("div"),
                        v = ti("div", {
                            id: `plyr-settings-${t.id}-home`
                        }),
                        b = ti("div", {
                            role: "menu"
                        });
                    v.appendChild(b), y.appendChild(v), this.elements.settings.panels.home = v, this.config.settings.forEach(i => {
                        let n = ti("button", J(ta(this.config.selectors.buttons.settings), {
                            type: "button",
                            class: `${this.config.classNames.control} ${this.config.classNames.control}--forward`,
                            role: "menuitem",
                            "aria-haspopup": !0,
                            hidden: ""
                        }));
                        e.call(this, n, i), tb.call(this, n, "click", () => {
                            l.call(this, i, !1)
                        });
                        let s = ti("span", null, tF.get(i, this.config)),
                            r = ti("span", {
                                class: this.config.classNames.menu.value
                            });
                        r.innerHTML = t[i], s.appendChild(r), n.appendChild(s), b.appendChild(n);
                        let o = ti("div", {
                                id: `plyr-settings-${t.id}-${i}`,
                                hidden: ""
                            }),
                            a = ti("button", {
                                type: "button",
                                class: `${this.config.classNames.control} ${this.config.classNames.control}--back`
                            });
                        a.appendChild(ti("span", {
                            "aria-hidden": !0
                        }, tF.get(i, this.config))), a.appendChild(ti("span", {
                            class: this.config.classNames.hidden
                        }, tF.get("menuBack", this.config))), tb.call(this, o, "keydown", t => {
                            37 === t.which && (t.preventDefault(), t.stopPropagation(), l.call(this, "home", !0))
                        }, !1), tb.call(this, a, "click", () => {
                            l.call(this, "home", !1)
                        }), o.appendChild(a), o.appendChild(ti("div", {
                            role: "menu"
                        })), y.appendChild(o), this.elements.settings.buttons[i] = n, this.elements.settings.panels[i] = o
                    }), m.appendChild(y), g.appendChild(m), u.appendChild(g), this.elements.settings.popup = m, this.elements.settings.menu = g
                }
                if ("pip" === o && tm.pip && u.appendChild(i.call(this, "pip", h)), "airplay" === o && tm.airplay && u.appendChild(i.call(this, "airplay", h)), "download" === o) {
                    let $ = J({}, h, {
                        element: "a",
                        href: this.download,
                        target: "_blank"
                    });
                    this.isHTML5 && ($.download = "");
                    let {
                        download: w
                    } = this.config.urls;
                    !X(w) && this.isEmbed && J($, {
                        icon: `logo-${this.provider}`,
                        label: this.provider
                    }), u.appendChild(i.call(this, "download", $))
                }
                "fullscreen" === o && u.appendChild(i.call(this, "fullscreen", h))
            }), this.isHTML5 && o.call(this, tL.getQualityOptions.call(this)), a.call(this), u
        },
        inject() {
            var t;
            if (this.config.loadSprite) {
                let e = tB.getIconUrl.call(this);
                e.cors && tq(e.url, "sprite-plyr")
            }
            this.id = Math.floor(1e4 * Math.random());
            let i = null;
            this.elements.controls = null;
            let n = {
                    id: this.id,
                    seektime: this.config.seekTime,
                    title: this.config.title
                },
                s = !0;
            j(this.config.controls) && (this.config.controls = this.config.controls.call(this, n)), this.config.controls || (this.config.controls = []), W(this.config.controls) || N(this.config.controls) ? i = this.config.controls : (i = tB.create.call(this, {
                id: this.id,
                seektime: this.config.seekTime,
                speed: this.speed,
                quality: this.quality,
                captions: t4.getLabel.call(this)
            }), s = !1);
            let r, o;
            if (s && N(this.config.controls) && (i = (o = t = i, Object.entries(n).forEach(([t, e]) => {
                    o = tM(o, `{${t}}`, e)
                }), o)), N(this.config.selectors.controls.container) && (r = document.querySelector(this.config.selectors.controls.container)), W(r) || (r = this.elements.container), r[W(i) ? "insertAdjacentElement" : "insertAdjacentHTML"]("afterbegin", i), W(this.elements.controls) || tB.findElements.call(this), !U(this.elements.buttons)) {
                let a = t => {
                    let e = this.config.classNames.controlPressed;
                    Object.defineProperty(t, "pressed", {
                        enumerable: !0,
                        get: () => th(t, e),
                        set(i = !1) {
                            tu(t, e, i)
                        }
                    })
                };
                Object.values(this.elements.buttons).filter(Boolean).forEach(t => {
                    H(t) || q(t) ? Array.from(t).filter(Boolean).forEach(a) : a(t)
                })
            }
            if (Z.isEdge && G(r), this.config.tooltips.controls) {
                let {
                    classNames: l,
                    selectors: u
                } = this.config, h = `${u.controls.wrapper} ${u.labels} .${l.hidden}`, c = td.call(this, h);
                Array.from(c).forEach(t => {
                    tu(t, this.config.classNames.hidden, !1), tu(t, this.config.classNames.tooltip, !0)
                })
            }
        }
    };

    function t1(t, e = !0) {
        let i = t;
        if (e) {
            let n = document.createElement("a");
            n.href = i, i = n.href
        }
        try {
            return new URL(i)
        } catch (s) {
            return null
        }
    }

    function tY(t) {
        let e = new URLSearchParams;
        return O(t) && Object.entries(t).forEach(([t, i]) => {
            e.set(t, i)
        }), e
    }
    let t4 = {
            setup() {
                var t, e;
                if (!this.supported.ui) return;
                if (!this.isVideo || this.isYouTube || this.isHTML5 && !tm.textTracks) return void(H(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && tB.setCaptionsMenu.call(this));
                if (W(this.elements.captions) || (this.elements.captions = ti("div", ta(this.config.selectors.captions)), t = this.elements.captions, e = this.elements.wrapper, W(t) && W(e) && e.parentNode.insertBefore(t, e.nextSibling)), Z.isIE && window.URL) {
                    let i = this.media.querySelectorAll("track");
                    Array.from(i).forEach(t => {
                        let e = t.getAttribute("src"),
                            i = t1(e);
                        null !== i && i.hostname !== window.location.href.hostname && ["http:", "https:"].includes(i.protocol) && tH(e, "blob").then(e => {
                            t.setAttribute("src", window.URL.createObjectURL(e))
                        }).catch(() => {
                            ts(t)
                        })
                    })
                }
                let n = tT((navigator.languages || [navigator.language || navigator.userLanguage || "en"]).map(t => t.split("-")[0])),
                    s = (this.storage.get("language") || this.config.captions.language || "auto").toLowerCase();
                "auto" === s && ([s] = n);
                let r = this.storage.get("captions");
                if (F(r) || ({
                        active: r
                    } = this.config.captions), Object.assign(this.captions, {
                        toggled: !1,
                        active: r,
                        language: s,
                        languages: n
                    }), this.isHTML5) {
                    let o = this.config.captions.update ? "addtrack removetrack" : "removetrack";
                    tb.call(this, this.media.textTracks, o, t4.update.bind(this))
                }
                setTimeout(t4.update.bind(this), 0)
            },
            update() {
                let t = t4.getTracks.call(this, !0),
                    {
                        active: e,
                        language: i,
                        meta: n,
                        currentTrackNode: s
                    } = this.captions,
                    r = Boolean(t.find(t => t.language === i));
                this.isHTML5 && this.isVideo && t.filter(t => !n.get(t)).forEach(t => {
                    this.debug.log("Track added", t), n.set(t, {
                        default: "showing" === t.mode
                    }), "showing" === t.mode && (t.mode = "hidden"), tb.call(this, t, "cuechange", () => t4.updateCues.call(this))
                }), (r && this.language !== i || !t.includes(s)) && (t4.setLanguage.call(this, i), t4.toggle.call(this, e && r)), tu(this.elements.container, this.config.classNames.captions.enabled, !U(t)), H(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && tB.setCaptionsMenu.call(this)
            },
            toggle(t, e = !0) {
                if (!this.supported.ui) return;
                let {
                    toggled: i
                } = this.captions, n = this.config.classNames.captions.active, s = M(t) ? !i : t;
                if (s !== i) {
                    if (e || (this.captions.active = s, this.storage.set({
                            captions: s
                        })), !this.language && s && !e) {
                        let r = t4.getTracks.call(this),
                            o = t4.findTrack.call(this, [this.captions.language, ...this.captions.languages], !0);
                        return this.captions.language = o.language, void t4.set.call(this, r.indexOf(o))
                    }
                    this.elements.buttons.captions && (this.elements.buttons.captions.pressed = s), tu(this.elements.container, n, s), this.captions.toggled = s, tB.updateSetting.call(this, "captions"), t_.call(this, this.media, s ? "captionsenabled" : "captionsdisabled")
                }
                setTimeout(() => {
                    s && this.captions.toggled && (this.captions.currentTrackNode.mode = "hidden")
                })
            },
            set(t, e = !0) {
                let i = t4.getTracks.call(this);
                if (-1 !== t) {
                    if (D(t)) {
                        if (t in i) {
                            if (this.captions.currentTrack !== t) {
                                this.captions.currentTrack = t;
                                let n = i[t],
                                    {
                                        language: s
                                    } = n || {};
                                this.captions.currentTrackNode = n, tB.updateSetting.call(this, "captions"), e || (this.captions.language = s, this.storage.set({
                                    language: s
                                })), this.isVimeo && this.embed.enableTextTrack(s), t_.call(this, this.media, "languagechange")
                            }
                            t4.toggle.call(this, !0, e), this.isHTML5 && this.isVideo && t4.updateCues.call(this)
                        } else this.debug.warn("Track not found", t)
                    } else this.debug.warn("Invalid caption argument", t)
                } else t4.toggle.call(this, !1, e)
            },
            setLanguage(t, e = !0) {
                if (!N(t)) return void this.debug.warn("Invalid language argument", t);
                let i = t.toLowerCase();
                this.captions.language = i;
                let n = t4.getTracks.call(this),
                    s = t4.findTrack.call(this, [i]);
                t4.set.call(this, n.indexOf(s), e)
            },
            getTracks(t = !1) {
                return Array.from((this.media || {}).textTracks || []).filter(e => !this.isHTML5 || t || this.captions.meta.has(e)).filter(t => ["captions", "subtitles"].includes(t.kind))
            },
            findTrack(t, e = !1) {
                let i = t4.getTracks.call(this),
                    n = t => Number((this.captions.meta.get(t) || {}).default),
                    s = Array.from(i).sort((t, e) => n(e) - n(t)),
                    r;
                return t.every(t => !(r = s.find(e => e.language === t))), r || (e ? s[0] : void 0)
            },
            getCurrentTrack() {
                return t4.getTracks.call(this)[this.currentTrack]
            },
            getLabel(t) {
                let e = t;
                return !Y(e) && tm.textTracks && this.captions.toggled && (e = t4.getCurrentTrack.call(this)), Y(e) ? U(e.label) ? U(e.language) ? tF.get("enabled", this.config) : t.language.toUpperCase() : e.label : tF.get("disabled", this.config)
            },
            updateCues(t) {
                if (!this.supported.ui) return;
                if (!W(this.elements.captions)) return void this.debug.warn("No captions element to render to");
                if (!M(t) && !Array.isArray(t)) return void this.debug.warn("updateCues: Invalid input", t);
                let e = t;
                if (!e) {
                    let i = t4.getCurrentTrack.call(this);
                    e = Array.from((i || {}).activeCues || []).map(t => t.getCueAsHTML()).map(t3)
                }
                let n = e.map(t => t.trim()).join("\n");
                if (n !== this.elements.captions.innerHTML) {
                    tr(this.elements.captions);
                    let s = ti("span", ta(this.config.selectors.caption));
                    s.innerHTML = n, this.elements.captions.appendChild(s), t_.call(this, this.media, "cuechange")
                }
            }
        },
        t5 = {
            enabled: !0,
            title: "",
            debug: !1,
            autoplay: !1,
            autopause: !0,
            playsinline: !0,
            seekTime: 10,
            volume: 1,
            muted: !1,
            duration: null,
            displayDuration: !0,
            invertTime: !0,
            toggleInvert: !0,
            ratio: null,
            clickToPlay: !0,
            hideControls: !0,
            resetOnEnd: !1,
            disableContextMenu: !0,
            loadSprite: !0,
            iconPrefix: "plyr",
            iconUrl: "https://cdn.plyr.io/3.6.8/plyr.svg",
            blankVideo: "https://cdn.plyr.io/static/blank.mp4",
            quality: {
                default: 576,
                options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
                forced: !1,
                onChange: null
            },
            loop: {
                active: !1
            },
            speed: {
                selected: 1,
                options: [.5, .75, 1, 1.25, 1.5, 1.75, 2, 4]
            },
            keyboard: {
                focused: !0,
                global: !1
            },
            tooltips: {
                controls: !1,
                seek: !0
            },
            captions: {
                active: !1,
                language: "auto",
                update: !1
            },
            fullscreen: {
                enabled: !0,
                fallback: !0,
                iosNative: !1
            },
            storage: {
                enabled: !0,
                key: "plyr"
            },
            controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"],
            settings: ["captions", "quality", "speed"],
            i18n: {
                restart: "Restart",
                rewind: "Rewind {seektime}s",
                play: "Play",
                pause: "Pause",
                fastForward: "Forward {seektime}s",
                seek: "Seek",
                seekLabel: "{currentTime} of {duration}",
                played: "Played",
                buffered: "Buffered",
                currentTime: "Current time",
                duration: "Duration",
                volume: "Volume",
                mute: "Mute",
                unmute: "Unmute",
                enableCaptions: "Enable captions",
                disableCaptions: "Disable captions",
                download: "Download",
                enterFullscreen: "Enter fullscreen",
                exitFullscreen: "Exit fullscreen",
                frameTitle: "Player for {title}",
                captions: "Captions",
                settings: "Settings",
                pip: "PIP",
                menuBack: "Go back to previous menu",
                speed: "Speed",
                normal: "Normal",
                quality: "Quality",
                loop: "Loop",
                start: "Start",
                end: "End",
                all: "All",
                reset: "Reset",
                disabled: "Disabled",
                enabled: "Enabled",
                advertisement: "Ad",
                qualityBadge: {
                    2160: "4K",
                    1440: "HD",
                    1080: "HD",
                    720: "HD",
                    576: "SD",
                    480: "SD"
                }
            },
            urls: {
                download: null,
                vimeo: {
                    sdk: "https://player.vimeo.com/api/player.js",
                    iframe: "https://player.vimeo.com/video/{0}?{1}",
                    api: "https://vimeo.com/api/oembed.json?url={0}"
                },
                youtube: {
                    sdk: "https://www.youtube.com/iframe_api",
                    api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}"
                },
                googleIMA: {
                    sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js"
                }
            },
            listeners: {
                seek: null,
                play: null,
                pause: null,
                restart: null,
                rewind: null,
                fastForward: null,
                mute: null,
                volume: null,
                captions: null,
                download: null,
                fullscreen: null,
                pip: null,
                airplay: null,
                speed: null,
                quality: null,
                loop: null,
                language: null
            },
            events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "ratechange", "cuechange", "download", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled", "languagechange", "controlshidden", "controlsshown", "ready", "statechange", "qualitychange", "adsloaded", "adscontentpause", "adscontentresume", "adstarted", "adsmidpoint", "adscomplete", "adsallcomplete", "adsimpression", "adsclick"],
            selectors: {
                editable: "input, textarea, select, [contenteditable]",
                container: ".plyr",
                controls: {
                    container: null,
                    wrapper: ".plyr__controls"
                },
                labels: "[data-plyr]",
                buttons: {
                    play: '[data-plyr="play"]',
                    pause: '[data-plyr="pause"]',
                    restart: '[data-plyr="restart"]',
                    rewind: '[data-plyr="rewind"]',
                    fastForward: '[data-plyr="fast-forward"]',
                    mute: '[data-plyr="mute"]',
                    captions: '[data-plyr="captions"]',
                    download: '[data-plyr="download"]',
                    fullscreen: '[data-plyr="fullscreen"]',
                    pip: '[data-plyr="pip"]',
                    airplay: '[data-plyr="airplay"]',
                    settings: '[data-plyr="settings"]',
                    loop: '[data-plyr="loop"]'
                },
                inputs: {
                    seek: '[data-plyr="seek"]',
                    volume: '[data-plyr="volume"]',
                    speed: '[data-plyr="speed"]',
                    language: '[data-plyr="language"]',
                    quality: '[data-plyr="quality"]'
                },
                display: {
                    currentTime: ".plyr__time--current",
                    duration: ".plyr__time--duration",
                    buffer: ".plyr__progress__buffer",
                    loop: ".plyr__progress__loop",
                    volume: ".plyr__volume--display"
                },
                progress: ".plyr__progress",
                captions: ".plyr__captions",
                caption: ".plyr__caption"
            },
            classNames: {
                type: "plyr--{0}",
                provider: "plyr--{0}",
                video: "plyr__video-wrapper",
                embed: "plyr__video-embed",
                videoFixedRatio: "plyr__video-wrapper--fixed-ratio",
                embedContainer: "plyr__video-embed__container",
                poster: "plyr__poster",
                posterEnabled: "plyr__poster-enabled",
                ads: "plyr__ads",
                control: "plyr__control",
                controlPressed: "plyr__control--pressed",
                playing: "plyr--playing",
                paused: "plyr--paused",
                stopped: "plyr--stopped",
                loading: "plyr--loading",
                hover: "plyr--hover",
                tooltip: "plyr__tooltip",
                cues: "plyr__cues",
                hidden: "plyr__sr-only",
                hideControls: "plyr--hide-controls",
                isIos: "plyr--is-ios",
                isTouch: "plyr--is-touch",
                uiSupported: "plyr--full-ui",
                noTransition: "plyr--no-transition",
                display: {
                    time: "plyr__time"
                },
                menu: {
                    value: "plyr__menu__value",
                    badge: "plyr__badge",
                    open: "plyr--menu-open"
                },
                captions: {
                    enabled: "plyr--captions-enabled",
                    active: "plyr--captions-active"
                },
                fullscreen: {
                    enabled: "plyr--fullscreen-enabled",
                    fallback: "plyr--fullscreen-fallback"
                },
                pip: {
                    supported: "plyr--pip-supported",
                    active: "plyr--pip-active"
                },
                airplay: {
                    supported: "plyr--airplay-supported",
                    active: "plyr--airplay-active"
                },
                tabFocus: "plyr__tab-focus",
                previewThumbnails: {
                    thumbContainer: "plyr__preview-thumb",
                    thumbContainerShown: "plyr__preview-thumb--is-shown",
                    imageContainer: "plyr__preview-thumb__image-container",
                    timeContainer: "plyr__preview-thumb__time-container",
                    scrubbingContainer: "plyr__preview-scrubbing",
                    scrubbingContainerShown: "plyr__preview-scrubbing--is-shown"
                }
            },
            attributes: {
                embed: {
                    provider: "data-plyr-provider",
                    id: "data-plyr-embed-id"
                }
            },
            ads: {
                enabled: !1,
                publisherId: "",
                tagUrl: ""
            },
            previewThumbnails: {
                enabled: !1,
                src: ""
            },
            vimeo: {
                byline: !1,
                portrait: !1,
                title: !1,
                speed: !0,
                transparent: !1,
                customControls: !0,
                referrerPolicy: null,
                premium: !1
            },
            youtube: {
                rel: 0,
                showinfo: 0,
                iv_load_policy: 3,
                modestbranding: 1,
                customControls: !0,
                noCookie: !1
            }
        },
        t7 = "picture-in-picture",
        t2 = "inline",
        tV = {
            html5: "html5",
            youtube: "youtube",
            vimeo: "vimeo"
        },
        tX = "audio",
        tU = "video",
        t6 = () => {};
    class tQ {
        constructor(t = !1) {
            this.enabled = window.console && t, this.enabled && this.log("Debugging enabled")
        }
        get log() {
            return this.enabled ? Function.prototype.bind.call(console.log, console) : t6
        }
        get warn() {
            return this.enabled ? Function.prototype.bind.call(console.warn, console) : t6
        }
        get error() {
            return this.enabled ? Function.prototype.bind.call(console.error, console) : t6
        }
    }
    class tG {
        constructor(e) {
            t(this, "onChange", () => {
                if (!this.enabled) return;
                let t = this.player.elements.buttons.fullscreen;
                W(t) && (t.pressed = this.active);
                let e = this.target === this.player.media ? this.target : this.player.elements.container;
                t_.call(this.player, e, this.active ? "enterfullscreen" : "exitfullscreen", !0)
            }), t(this, "toggleFallback", (t = !1) => {
                if (t ? this.scrollPosition = {
                        x: window.scrollX || 0,
                        y: window.scrollY || 0
                    } : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y), document.body.style.overflow = t ? "hidden" : "", tu(this.target, this.player.config.classNames.fullscreen.fallback, t), Z.isIos) {
                    let e = document.head.querySelector('meta[name="viewport"]'),
                        i = "viewport-fit=cover";
                    e || (e = document.createElement("meta")).setAttribute("name", "viewport");
                    let n = N(e.content) && e.content.includes(i);
                    t ? (this.cleanupViewport = !n, n || (e.content += `,${i}`)) : this.cleanupViewport && (e.content = e.content.split(",").filter(t => t.trim() !== i).join(","))
                }
                this.onChange()
            }), t(this, "trapFocus", t => {
                if (Z.isIos || !this.active || "Tab" !== t.key || 9 !== t.keyCode) return;
                let e = document.activeElement,
                    i = td.call(this.player, "a[href], button:not(:disabled), input:not(:disabled), [tabindex]"),
                    [n] = i,
                    s = i[i.length - 1];
                e !== s || t.shiftKey ? e === n && t.shiftKey && (s.focus(), t.preventDefault()) : (n.focus(), t.preventDefault())
            }), t(this, "update", () => {
                if (this.enabled) {
                    let t;
                    t = this.forceFallback ? "Fallback (forced)" : tG.native ? "Native" : "Fallback", this.player.debug.log(`${t} fullscreen enabled`)
                } else this.player.debug.log("Fullscreen not supported and fallback disabled");
                tu(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.enabled)
            }), t(this, "enter", () => {
                this.enabled && (Z.isIos && this.player.config.fullscreen.iosNative ? this.player.isVimeo ? this.player.embed.requestFullscreen() : this.target.webkitEnterFullscreen() : !tG.native || this.forceFallback ? this.toggleFallback(!0) : this.prefix ? U(this.prefix) || this.target[`${this.prefix}Request${this.property}`]() : this.target.requestFullscreen({
                    navigationUI: "hide"
                }))
            }), t(this, "exit", () => {
                if (this.enabled) {
                    if (Z.isIos && this.player.config.fullscreen.iosNative) this.target.webkitExitFullscreen(), t8(this.player.play());
                    else if (!tG.native || this.forceFallback) this.toggleFallback(!1);
                    else if (this.prefix) {
                        if (!U(this.prefix)) {
                            let t = "moz" === this.prefix ? "Cancel" : "Exit";
                            document[`${this.prefix}${t}${this.property}`]()
                        }
                    } else(document.cancelFullScreen || document.exitFullscreen).call(document)
                }
            }), t(this, "toggle", () => {
                this.active ? this.exit() : this.enter()
            }), this.player = e, this.prefix = tG.prefix, this.property = tG.property, this.scrollPosition = {
                x: 0,
                y: 0
            }, this.forceFallback = "force" === e.config.fullscreen.fallback, this.player.elements.fullscreen = e.config.fullscreen.container && function(t, e) {
                let {
                    prototype: i
                } = Element;
                return (i.closest || function() {
                    let t = this;
                    do {
                        if (tc.matches(t, e)) return t;
                        t = t.parentElement || t.parentNode
                    } while (null !== t && 1 === t.nodeType);
                    return null
                }).call(t, e)
            }(this.player.elements.container, e.config.fullscreen.container), tb.call(this.player, document, "ms" === this.prefix ? "MSFullscreenChange" : `${this.prefix}fullscreenchange`, () => {
                this.onChange()
            }), tb.call(this.player, this.player.elements.container, "dblclick", t => {
                W(this.player.elements.controls) && this.player.elements.controls.contains(t.target) || this.player.listeners.proxy(t, this.toggle, "fullscreen")
            }), tb.call(this, this.player.elements.container, "keydown", t => this.trapFocus(t)), this.update()
        }
        static get native() {
            return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)
        }
        get usingNative() {
            return tG.native && !this.forceFallback
        }
        static get prefix() {
            if (j(document.exitFullscreen)) return "";
            let t = "";
            return ["webkit", "moz", "ms"].some(e => !(!j(document[`${e}ExitFullscreen`]) && !j(document[`${e}CancelFullScreen`])) && (t = e, !0)), t
        }
        static get property() {
            return "moz" === this.prefix ? "FullScreen" : "Fullscreen"
        }
        get enabled() {
            return (tG.native || this.player.config.fullscreen.fallback) && this.player.config.fullscreen.enabled && this.player.supported.ui && this.player.isVideo
        }
        get active() {
            if (!this.enabled) return !1;
            if (!tG.native || this.forceFallback) return th(this.target, this.player.config.classNames.fullscreen.fallback);
            let t = this.prefix ? document[`${this.prefix}${this.property}Element`] : document.fullscreenElement;
            return t && t.shadowRoot ? t === this.target.getRootNode().host : t === this.target
        }
        get target() {
            return Z.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.fullscreen || this.player.elements.container
        }
    }

    function tZ(t, e = 1) {
        return new Promise((i, n) => {
            let s = new Image,
                r = () => {
                    delete s.onload, delete s.onerror, (s.naturalWidth >= e ? i : n)(s)
                };
            Object.assign(s, {
                onload: r,
                onerror: r,
                src: t
            })
        })
    }
    let tK = {
        addStyleHook() {
            tu(this.elements.container, this.config.selectors.container.replace(".", ""), !0), tu(this.elements.container, this.config.classNames.uiSupported, this.supported.ui)
        },
        toggleNativeControls(t = !1) {
            t && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls")
        },
        build() {
            if (this.listeners.media(), !this.supported.ui) return this.debug.warn(`Basic support only for ${this.provider} ${this.type}`), void tK.toggleNativeControls.call(this, !0);
            W(this.elements.controls) || (tB.inject.call(this), this.listeners.controls()), tK.toggleNativeControls.call(this), this.isHTML5 && t4.setup.call(this), this.volume = null, this.muted = null, this.loop = null, this.quality = null, this.speed = null, tB.updateVolume.call(this), tB.timeUpdate.call(this), tK.checkPlaying.call(this), tu(this.elements.container, this.config.classNames.pip.supported, tm.pip && this.isHTML5 && this.isVideo), tu(this.elements.container, this.config.classNames.airplay.supported, tm.airplay && this.isHTML5), tu(this.elements.container, this.config.classNames.isIos, Z.isIos), tu(this.elements.container, this.config.classNames.isTouch, this.touch), this.ready = !0, setTimeout(() => {
                t_.call(this, this.media, "ready")
            }, 0), tK.setTitle.call(this), this.poster && tK.setPoster.call(this, this.poster, !1).catch(() => {}), this.config.duration && tB.durationUpdate.call(this)
        },
        setTitle() {
            let t = tF.get("play", this.config);
            if (N(this.config.title) && !U(this.config.title) && (t += `, ${this.config.title}`), Array.from(this.elements.buttons.play || []).forEach(e => {
                    e.setAttribute("aria-label", t)
                }), this.isEmbed) {
                let e = tp.call(this, "iframe");
                if (!W(e)) return;
                let i = U(this.config.title) ? "video" : this.config.title,
                    n = tF.get("frameTitle", this.config);
                e.setAttribute("title", n.replace("{title}", i))
            }
        },
        togglePoster(t) {
            tu(this.elements.container, this.config.classNames.posterEnabled, t)
        },
        setPoster(t, e = !0) {
            return e && this.poster ? Promise.reject(Error("Poster already set")) : (this.media.setAttribute("data-poster", t), this.elements.poster.removeAttribute("hidden"), tS.call(this).then(() => tZ(t)).catch(e => {
                throw t === this.poster && tK.togglePoster.call(this, !1), e
            }).then(() => {
                if (t !== this.poster) throw Error("setPoster cancelled by later call to setPoster")
            }).then(() => (Object.assign(this.elements.poster.style, {
                backgroundImage: `url('${t}')`,
                backgroundSize: ""
            }), tK.togglePoster.call(this, !0), t)))
        },
        checkPlaying(t) {
            tu(this.elements.container, this.config.classNames.playing, this.playing), tu(this.elements.container, this.config.classNames.paused, this.paused), tu(this.elements.container, this.config.classNames.stopped, this.stopped), Array.from(this.elements.buttons.play || []).forEach(t => {
                Object.assign(t, {
                    pressed: this.playing
                }), t.setAttribute("aria-label", tF.get(this.playing ? "pause" : "play", this.config))
            }), R(t) && "timeupdate" === t.type || tK.toggleControls.call(this)
        },
        checkLoading(t) {
            this.loading = ["stalled", "waiting"].includes(t.type), clearTimeout(this.timers.loading), this.timers.loading = setTimeout(() => {
                tu(this.elements.container, this.config.classNames.loading, this.loading), tK.toggleControls.call(this)
            }, this.loading ? 250 : 0)
        },
        toggleControls(t) {
            let {
                controls: e
            } = this.elements;
            if (e && this.config.hideControls) {
                let i = this.touch && this.lastSeekTime + 2e3 > Date.now();
                this.toggleControls(Boolean(t || this.loading || this.paused || e.pressed || e.hover || i))
            }
        },
        migrateStyles() {
            Object.values({ ...this.media.style
            }).filter(t => !U(t) && N(t) && t.startsWith("--plyr")).forEach(t => {
                this.elements.container.style.setProperty(t, this.media.style.getPropertyValue(t)), this.media.style.removeProperty(t)
            }), U(this.media.style) && this.media.removeAttribute("style")
        }
    };
    class tJ {
        constructor(e) {
            t(this, "firstTouch", () => {
                let {
                    player: t
                } = this, {
                    elements: e
                } = t;
                t.touch = !0, tu(e.container, t.config.classNames.isTouch, !0)
            }), t(this, "setTabFocus", t => {
                let {
                    player: e
                } = this, {
                    elements: i
                } = e;
                if (clearTimeout(this.focusTimer), "keydown" === t.type && 9 !== t.which) return;
                "keydown" === t.type && (this.lastKeyDown = t.timeStamp);
                let n = t.timeStamp - this.lastKeyDown <= 20;
                ("focus" !== t.type || n) && ((() => {
                    let t = e.config.classNames.tabFocus;
                    tu(td.call(e, `.${t}`), t, !1)
                })(), "focusout" !== t.type && (this.focusTimer = setTimeout(() => {
                    let t = document.activeElement;
                    i.container.contains(t) && tu(document.activeElement, e.config.classNames.tabFocus, !0)
                }, 10)))
            }), t(this, "global", (t = !0) => {
                let {
                    player: e
                } = this;
                e.config.keyboard.global && tv.call(e, window, "keydown keyup", this.handleKey, t, !1), tv.call(e, document.body, "click", this.toggleMenu, t), tw.call(e, document.body, "touchstart", this.firstTouch), tv.call(e, document.body, "keydown focus blur focusout", this.setTabFocus, t, !1, !0)
            }), t(this, "container", () => {
                let {
                    player: t
                } = this, {
                    config: e,
                    elements: i,
                    timers: n
                } = t;
                !e.keyboard.global && e.keyboard.focused && tb.call(t, i.container, "keydown keyup", this.handleKey, !1), tb.call(t, i.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", e => {
                    let {
                        controls: s
                    } = i;
                    s && "enterfullscreen" === e.type && (s.pressed = !1, s.hover = !1);
                    let r = 0;
                    ["touchstart", "touchmove", "mousemove"].includes(e.type) && (tK.toggleControls.call(t, !0), r = t.touch ? 3e3 : 2e3), clearTimeout(n.controls), n.controls = setTimeout(() => tK.toggleControls.call(t, !1), r)
                });
                let s = () => {
                        if (!t.isVimeo || t.config.vimeo.premium) return;
                        let e = i.wrapper,
                            {
                                active: n
                            } = t.fullscreen,
                            [s, r] = tI.call(t),
                            o = tC(`aspect-ratio: ${s} / ${r}`);
                        if (!n) return void(o ? (e.style.width = null, e.style.height = null) : (e.style.maxWidth = null, e.style.margin = null));
                        let [a, l] = [Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0), Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)], u = a / l > s / r;
                        o ? (e.style.width = u ? "auto" : "100%", e.style.height = u ? "100%" : "auto") : (e.style.maxWidth = u ? l / r * s + "px" : null, e.style.margin = u ? "0 auto" : null)
                    },
                    r = () => {
                        clearTimeout(n.resized), n.resized = setTimeout(s, 50)
                    };
                tb.call(t, i.container, "enterfullscreen exitfullscreen", e => {
                    let {
                        target: n
                    } = t.fullscreen;
                    n === i.container && (!t.isEmbed && U(t.config.ratio) || (s(), ("enterfullscreen" === e.type ? tb : t$).call(t, window, "resize", r)))
                })
            }), t(this, "media", () => {
                let {
                    player: t
                } = this, {
                    elements: e
                } = t;
                if (tb.call(t, t.media, "timeupdate seeking seeked", e => tB.timeUpdate.call(t, e)), tb.call(t, t.media, "durationchange loadeddata loadedmetadata", e => tB.durationUpdate.call(t, e)), tb.call(t, t.media, "ended", () => {
                        t.isHTML5 && t.isVideo && t.config.resetOnEnd && (t.restart(), t.pause())
                    }), tb.call(t, t.media, "progress playing seeking seeked", e => tB.updateProgress.call(t, e)), tb.call(t, t.media, "volumechange", e => tB.updateVolume.call(t, e)), tb.call(t, t.media, "playing play pause ended emptied timeupdate", e => tK.checkPlaying.call(t, e)), tb.call(t, t.media, "waiting canplay seeked playing", e => tK.checkLoading.call(t, e)), t.supported.ui && t.config.clickToPlay && !t.isAudio) {
                    let i = tp.call(t, `.${t.config.classNames.video}`);
                    if (!W(i)) return;
                    tb.call(t, e.container, "click", n => {
                        ([e.container, i].includes(n.target) || i.contains(n.target)) && (t.touch && t.config.hideControls || (t.ended ? (this.proxy(n, t.restart, "restart"), this.proxy(n, () => {
                            t8(t.play())
                        }, "play")) : this.proxy(n, () => {
                            t8(t.togglePlay())
                        }, "play")))
                    })
                }
                t.supported.ui && t.config.disableContextMenu && tb.call(t, e.wrapper, "contextmenu", t => {
                    t.preventDefault()
                }, !1), tb.call(t, t.media, "volumechange", () => {
                    t.storage.set({
                        volume: t.volume,
                        muted: t.muted
                    })
                }), tb.call(t, t.media, "ratechange", () => {
                    tB.updateSetting.call(t, "speed"), t.storage.set({
                        speed: t.speed
                    })
                }), tb.call(t, t.media, "qualitychange", e => {
                    tB.updateSetting.call(t, "quality", null, e.detail.quality)
                }), tb.call(t, t.media, "ready qualitychange", () => {
                    tB.setDownloadUrl.call(t)
                });
                let n = t.config.events.concat(["keyup", "keydown"]).join(" ");
                tb.call(t, t.media, n, i => {
                    let {
                        detail: n = {}
                    } = i;
                    "error" === i.type && (n = t.media.error), t_.call(t, e.container, i.type, !0, n)
                })
            }), t(this, "proxy", (t, e, i) => {
                let {
                    player: n
                } = this, s = n.config.listeners[i], r = !0;
                j(s) && (r = s.call(n, t)), !1 !== r && j(e) && e.call(n, t)
            }), t(this, "bind", (t, e, i, n, s = !0) => {
                let {
                    player: r
                } = this, o = r.config.listeners[n], a = j(o);
                tb.call(r, t, e, t => this.proxy(t, i, n), s && !a)
            }), t(this, "controls", () => {
                let {
                    player: t
                } = this, {
                    elements: e
                } = t, i = Z.isIE ? "change" : "input";
                if (e.buttons.play && Array.from(e.buttons.play).forEach(e => {
                        this.bind(e, "click", () => {
                            t8(t.togglePlay())
                        }, "play")
                    }), this.bind(e.buttons.restart, "click", t.restart, "restart"), this.bind(e.buttons.rewind, "click", () => {
                        t.lastSeekTime = Date.now(), t.rewind()
                    }, "rewind"), this.bind(e.buttons.fastForward, "click", () => {
                        t.lastSeekTime = Date.now(), t.forward()
                    }, "fastForward"), this.bind(e.buttons.mute, "click", () => {
                        t.muted = !t.muted
                    }, "mute"), this.bind(e.buttons.captions, "click", () => t.toggleCaptions()), this.bind(e.buttons.download, "click", () => {
                        t_.call(t, t.media, "download")
                    }, "download"), this.bind(e.buttons.fullscreen, "click", () => {
                        t.fullscreen.toggle()
                    }, "fullscreen"), this.bind(e.buttons.pip, "click", () => {
                        t.pip = "toggle"
                    }, "pip"), this.bind(e.buttons.airplay, "click", t.airplay, "airplay"), this.bind(e.buttons.settings, "click", e => {
                        e.stopPropagation(), e.preventDefault(), tB.toggleMenu.call(t, e)
                    }, null, !1), this.bind(e.buttons.settings, "keyup", e => {
                        let i = e.which;
                        [13, 32].includes(i) && (13 !== i ? (e.preventDefault(), e.stopPropagation(), tB.toggleMenu.call(t, e)) : tB.focusFirstMenuItem.call(t, null, !0))
                    }, null, !1), this.bind(e.settings.menu, "keydown", e => {
                        27 === e.which && tB.toggleMenu.call(t, e)
                    }), this.bind(e.inputs.seek, "mousedown mousemove", t => {
                        let i = e.progress.getBoundingClientRect(),
                            n = 100 / i.width * (t.pageX - i.left);
                        t.currentTarget.setAttribute("seek-value", n)
                    }), this.bind(e.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", e => {
                        let i = e.currentTarget,
                            n = e.keyCode ? e.keyCode : e.which,
                            s = "play-on-seeked";
                        if (B(e) && 39 !== n && 37 !== n) return;
                        t.lastSeekTime = Date.now();
                        let r = i.hasAttribute(s),
                            o = ["mouseup", "touchend", "keyup"].includes(e.type);
                        r && o ? (i.removeAttribute(s), t8(t.play())) : !o && t.playing && (i.setAttribute(s, ""), t.pause())
                    }), Z.isIos) {
                    let n = td.call(t, 'input[type="range"]');
                    Array.from(n).forEach(t => this.bind(t, i, t => G(t.target)))
                }
                this.bind(e.inputs.seek, i, e => {
                    let i = e.currentTarget,
                        n = i.getAttribute("seek-value");
                    U(n) && (n = i.value), i.removeAttribute("seek-value"), t.currentTime = n / i.max * t.duration
                }, "seek"), this.bind(e.progress, "mouseenter mouseleave mousemove", e => tB.updateSeekTooltip.call(t, e)), this.bind(e.progress, "mousemove touchmove", e => {
                    let {
                        previewThumbnails: i
                    } = t;
                    i && i.loaded && i.startMove(e)
                }), this.bind(e.progress, "mouseleave touchend click", () => {
                    let {
                        previewThumbnails: e
                    } = t;
                    e && e.loaded && e.endMove(!1, !0)
                }), this.bind(e.progress, "mousedown touchstart", e => {
                    let {
                        previewThumbnails: i
                    } = t;
                    i && i.loaded && i.startScrubbing(e)
                }), this.bind(e.progress, "mouseup touchend", e => {
                    let {
                        previewThumbnails: i
                    } = t;
                    i && i.loaded && i.endScrubbing(e)
                }), Z.isWebkit && Array.from(td.call(t, 'input[type="range"]')).forEach(e => {
                    this.bind(e, "input", e => tB.updateRangeFill.call(t, e.target))
                }), t.config.toggleInvert && !W(e.display.duration) && this.bind(e.display.currentTime, "click", () => {
                    0 !== t.currentTime && (t.config.invertTime = !t.config.invertTime, tB.timeUpdate.call(t))
                }), this.bind(e.inputs.volume, i, e => {
                    t.volume = e.target.value
                }, "volume"), this.bind(e.controls, "mouseenter mouseleave", i => {
                    e.controls.hover = !t.touch && "mouseenter" === i.type
                }), e.fullscreen && Array.from(e.fullscreen.children).filter(t => !t.contains(e.container)).forEach(i => {
                    this.bind(i, "mouseenter mouseleave", i => {
                        e.controls.hover = !t.touch && "mouseenter" === i.type
                    })
                }), this.bind(e.controls, "mousedown mouseup touchstart touchend touchcancel", t => {
                    e.controls.pressed = ["mousedown", "touchstart"].includes(t.type)
                }), this.bind(e.controls, "focusin", () => {
                    let {
                        config: i,
                        timers: n
                    } = t;
                    tu(e.controls, i.classNames.noTransition, !0), tK.toggleControls.call(t, !0), setTimeout(() => {
                        tu(e.controls, i.classNames.noTransition, !1)
                    }, 0);
                    let s = this.touch ? 3e3 : 4e3;
                    clearTimeout(n.controls), n.controls = setTimeout(() => tK.toggleControls.call(t, !1), s)
                }), this.bind(e.inputs.volume, "wheel", e => {
                    let i = e.webkitDirectionInvertedFromDevice,
                        [n, s] = [e.deltaX, -e.deltaY].map(t => i ? -t : t),
                        r = Math.sign(Math.abs(n) > Math.abs(s) ? n : s);
                    t.increaseVolume(r / 50);
                    let {
                        volume: o
                    } = t.media;
                    (1 === r && o < 1 || -1 === r && o > 0) && e.preventDefault()
                }, "volume", !1)
            }), this.player = e, this.lastKey = null, this.focusTimer = null, this.lastKeyDown = null, this.handleKey = this.handleKey.bind(this), this.toggleMenu = this.toggleMenu.bind(this), this.setTabFocus = this.setTabFocus.bind(this), this.firstTouch = this.firstTouch.bind(this)
        }
        handleKey(t) {
            let {
                player: e
            } = this, {
                elements: i
            } = e, n = t.keyCode ? t.keyCode : t.which, s = "keydown" === t.type, r = s && n === this.lastKey;
            if (!t.altKey && !t.ctrlKey && !t.metaKey && !t.shiftKey && D(n)) {
                if (s) {
                    let o = document.activeElement;
                    if (W(o)) {
                        let {
                            editable: a
                        } = e.config.selectors, {
                            seek: l
                        } = i.inputs;
                        if (o !== l && tc(o, a) || 32 === t.which && tc(o, 'button, [role^="menuitem"]')) return
                    }
                    switch ([32, 37, 38, 39, 40, 48, 49, 50, 51, 52, 53, 54, 56, 57, 67, 70, 73, 75, 76, 77, 79].includes(n) && (t.preventDefault(), t.stopPropagation()), n) {
                        case 48:
                        case 49:
                        case 50:
                        case 51:
                        case 52:
                        case 53:
                        case 54:
                        case 55:
                        case 56:
                        case 57:
                            r || (e.currentTime = e.duration / 10 * (n - 48));
                            break;
                        case 32:
                        case 75:
                            r || t8(e.togglePlay());
                            break;
                        case 38:
                            e.increaseVolume(.1);
                            break;
                        case 40:
                            e.decreaseVolume(.1);
                            break;
                        case 77:
                            r || (e.muted = !e.muted);
                            break;
                        case 39:
                            e.forward();
                            break;
                        case 37:
                            e.rewind();
                            break;
                        case 70:
                            e.fullscreen.toggle();
                            break;
                        case 67:
                            r || e.toggleCaptions();
                            break;
                        case 76:
                            e.loop = !e.loop
                    }
                    27 === n && !e.fullscreen.usingNative && e.fullscreen.active && e.fullscreen.toggle(), this.lastKey = n
                } else this.lastKey = null
            }
        }
        toggleMenu(t) {
            tB.toggleMenu.call(this.player, t)
        }
    }
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
    var et = ((r = function(t, e) {
        t.exports = function() {
            var t = function() {},
                e = {},
                i = {},
                n = {};

            function s(t, e) {
                t = t.push ? t : [t];
                var s, r, o, a = [],
                    l = t.length,
                    u = l;
                for (s = function(t, i) {
                        i.length && a.push(t), --u || e(a)
                    }; l--;)(o = i[r = t[l]]) ? s(r, o) : (n[r] = n[r] || []).push(s)
            }

            function r(t, e) {
                if (t) {
                    var s = n[t];
                    if (i[t] = e, s)
                        for (; s.length;) s[0](t, e), s.splice(0, 1)
                }
            }

            function o(e, i) {
                e.call && (e = {
                    success: e
                }), i.length ? (e.error || t)(i) : (e.success || t)(e)
            }

            function a(e, i, n, s) {
                var r, o, l = document,
                    u = n.async,
                    h = (n.numRetries || 0) + 1,
                    c = n.before || t,
                    d = e.replace(/[\?|#].*$/, ""),
                    p = e.replace(/^(css|img)!/, "");
                s = s || 0, /(^css!|\.css$)/.test(d) ? ((o = l.createElement("link")).rel = "stylesheet", o.href = p, (r = "hideFocus" in o) && o.relList && (r = 0, o.rel = "preload", o.as = "style")) : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(d) ? (o = l.createElement("img")).src = p : ((o = l.createElement("script")).src = e, o.async = void 0 === u || u), o.onload = o.onerror = o.onbeforeload = function(t) {
                    var l = t.type[0];
                    if (r) try {
                        o.sheet.cssText.length || (l = "e")
                    } catch (u) {
                        18 != u.code && (l = "e")
                    }
                    if ("e" == l) {
                        if ((s += 1) < h) return a(e, i, n, s)
                    } else if ("preload" == o.rel && "style" == o.as) return o.rel = "stylesheet";
                    i(e, l, t.defaultPrevented)
                }, !1 !== c(e, o) && l.head.appendChild(o)
            }

            function l(t, e, i) {
                var n, s, r = (t = t.push ? t : [t]).length,
                    o = r,
                    l = [];
                for (n = function(t, i, n) {
                        if ("e" == i && l.push(t), "b" == i) {
                            if (!n) return;
                            l.push(t)
                        }--r || e(l)
                    }, s = 0; s < o; s++) a(t[s], n, i)
            }

            function u(t, i, n) {
                var s, a;
                if (i && i.trim && (s = i), a = (s ? n : i) || {}, s) {
                    if (s in e) throw "LoadJS";
                    e[s] = !0
                }

                function u(e, i) {
                    l(t, function(t) {
                        o(a, t), e && o({
                            success: e,
                            error: i
                        }, t), r(s, t)
                    }, a)
                }
                if (a.returnPromise) return new Promise(u);
                u()
            }
            return u.ready = function(t, e) {
                return s(t, function(t) {
                    o(e, t)
                }), u
            }, u.done = function(t) {
                r(t, [])
            }, u.reset = function() {
                e = {}, i = {}, n = {}
            }, u.isDefined = function(t) {
                return t in e
            }, u
        }()
    })(o = {
        exports: {}
    }, o.exports), o.exports);

    function ee(t) {
        return new Promise((e, i) => {
            et(t, {
                success: e,
                error: i
            })
        })
    }

    function ei(t) {
        t && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === t && (this.media.paused = !t, t_.call(this, this.media, t ? "play" : "pause"))
    }
    let en = {
        setup() {
            let t = this;
            tu(t.elements.wrapper, t.config.classNames.embed, !0), t.options.speed = t.config.speed.options, tP.call(t), O(window.Vimeo) ? en.ready.call(t) : ee(t.config.urls.vimeo.sdk).then(() => {
                en.ready.call(t)
            }).catch(e => {
                t.debug.warn("Vimeo SDK (player.js) failed to load", e)
            })
        },
        ready() {
            var t;
            let e = this,
                i = e.config.vimeo,
                {
                    premium: n,
                    referrerPolicy: s,
                    ...r
                } = i;
            n && Object.assign(r, {
                controls: !1,
                sidedock: !1
            });
            let o = tY({
                    loop: e.config.loop.active,
                    autoplay: e.autoplay,
                    muted: e.muted,
                    gesture: "media",
                    playsinline: !this.config.fullscreen.iosNative,
                    ...r
                }),
                a = e.media.getAttribute("src");
            U(a) && (a = e.media.getAttribute(e.config.attributes.embed.id));
            let l = U(t = a) ? null : D(Number(t)) ? t : t.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : t,
                u = ti("iframe"),
                h = t0(e.config.urls.vimeo.iframe, l, o);
            if (u.setAttribute("src", h), u.setAttribute("allowfullscreen", ""), u.setAttribute("allow", "autoplay; fullscreen; picture-in-picture; encrypted-media; accelerometer; gyroscope"), U(s) || u.setAttribute("referrerPolicy", s), n || !i.customControls) u.setAttribute("data-poster", e.poster), e.media = to(u, e.media);
            else {
                let c = ti("div", {
                    class: e.config.classNames.embedContainer,
                    "data-poster": e.poster
                });
                c.appendChild(u), e.media = to(c, e.media)
            }
            i.customControls || tH(t0(e.config.urls.vimeo.api, h)).then(t => {
                !U(t) && t.thumbnail_url && tK.setPoster.call(e, t.thumbnail_url).catch(() => {})
            }), e.embed = new window.Vimeo.Player(u, {
                autopause: e.config.autopause,
                muted: e.muted
            }), e.media.paused = !0, e.media.currentTime = 0, e.supported.ui && e.embed.disableTextTrack(), e.media.play = () => (ei.call(e, !0), e.embed.play()), e.media.pause = () => (ei.call(e, !1), e.embed.pause()), e.media.stop = () => {
                e.pause(), e.currentTime = 0
            };
            let {
                currentTime: d
            } = e.media;
            Object.defineProperty(e.media, "currentTime", {
                get: () => d,
                set(t) {
                    let {
                        embed: i,
                        media: n,
                        paused: s,
                        volume: r
                    } = e, o = s && !i.hasPlayed;
                    n.seeking = !0, t_.call(e, n, "seeking"), Promise.resolve(o && i.setVolume(0)).then(() => i.setCurrentTime(t)).then(() => o && i.pause()).then(() => o && i.setVolume(r)).catch(() => {})
                }
            });
            let p = e.config.speed.selected;
            Object.defineProperty(e.media, "playbackRate", {
                get: () => p,
                set(t) {
                    e.embed.setPlaybackRate(t).then(() => {
                        p = t, t_.call(e, e.media, "ratechange")
                    }).catch(() => {
                        e.options.speed = [1]
                    })
                }
            });
            let {
                volume: f
            } = e.config;
            Object.defineProperty(e.media, "volume", {
                get: () => f,
                set(t) {
                    e.embed.setVolume(t).then(() => {
                        f = t, t_.call(e, e.media, "volumechange")
                    })
                }
            });
            let {
                muted: g
            } = e.config;
            Object.defineProperty(e.media, "muted", {
                get: () => g,
                set(t) {
                    let i = !!F(t) && t;
                    e.embed.setVolume(i ? 0 : e.config.volume).then(() => {
                        g = i, t_.call(e, e.media, "volumechange")
                    })
                }
            });
            let m, {
                loop: y
            } = e.config;
            Object.defineProperty(e.media, "loop", {
                get: () => y,
                set(t) {
                    let i = F(t) ? t : e.config.loop.active;
                    e.embed.setLoop(i).then(() => {
                        y = i
                    })
                }
            }), e.embed.getVideoUrl().then(t => {
                m = t, tB.setDownloadUrl.call(e)
            }).catch(t => {
                this.debug.warn(t)
            }), Object.defineProperty(e.media, "currentSrc", {
                get: () => m
            }), Object.defineProperty(e.media, "ended", {
                get: () => e.currentTime === e.duration
            }), Promise.all([e.embed.getVideoWidth(), e.embed.getVideoHeight()]).then(t => {
                let [i, n] = t;
                e.embed.ratio = tz(i, n), tP.call(this)
            }), e.embed.setAutopause(e.config.autopause).then(t => {
                e.config.autopause = t
            }), e.embed.getVideoTitle().then(t => {
                e.config.title = t, tK.setTitle.call(this)
            }), e.embed.getCurrentTime().then(t => {
                d = t, t_.call(e, e.media, "timeupdate")
            }), e.embed.getDuration().then(t => {
                e.media.duration = t, t_.call(e, e.media, "durationchange")
            }), e.embed.getTextTracks().then(t => {
                e.media.textTracks = t, t4.setup.call(e)
            }), e.embed.on("cuechange", ({
                cues: t = []
            }) => {
                let i = t.map(t => (function(t) {
                    let e = document.createDocumentFragment(),
                        i = document.createElement("div");
                    return e.appendChild(i), i.innerHTML = t, e.firstChild.innerText
                })(t.text));
                t4.updateCues.call(e, i)
            }), e.embed.on("loaded", () => {
                e.embed.getPaused().then(t => {
                    ei.call(e, !t), t || t_.call(e, e.media, "playing")
                }), W(e.embed.element) && e.supported.ui && e.embed.element.setAttribute("tabindex", -1)
            }), e.embed.on("bufferstart", () => {
                t_.call(e, e.media, "waiting")
            }), e.embed.on("bufferend", () => {
                t_.call(e, e.media, "playing")
            }), e.embed.on("play", () => {
                ei.call(e, !0), t_.call(e, e.media, "playing")
            }), e.embed.on("pause", () => {
                ei.call(e, !1)
            }), e.embed.on("timeupdate", t => {
                e.media.seeking = !1, d = t.seconds, t_.call(e, e.media, "timeupdate")
            }), e.embed.on("progress", t => {
                e.media.buffered = t.percent, t_.call(e, e.media, "progress"), 1 === parseInt(t.percent, 10) && t_.call(e, e.media, "canplaythrough"), e.embed.getDuration().then(t => {
                    t !== e.media.duration && (e.media.duration = t, t_.call(e, e.media, "durationchange"))
                })
            }), e.embed.on("seeked", () => {
                e.media.seeking = !1, t_.call(e, e.media, "seeked")
            }), e.embed.on("ended", () => {
                e.media.paused = !0, t_.call(e, e.media, "ended")
            }), e.embed.on("error", t => {
                e.media.error = t, t_.call(e, e.media, "error")
            }), i.customControls && setTimeout(() => tK.build.call(e), 0)
        }
    };

    function es(t) {
        t && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === t && (this.media.paused = !t, t_.call(this, this.media, t ? "play" : "pause"))
    }

    function er(t) {
        return t.noCookie ? "https://www.youtube-nocookie.com" : "http:" === window.location.protocol ? "http://www.youtube.com" : void 0
    }
    let eo = {
            setup() {
                if (tu(this.elements.wrapper, this.config.classNames.embed, !0), O(window.YT) && j(window.YT.Player)) eo.ready.call(this);
                else {
                    let t = window.onYouTubeIframeAPIReady;
                    window.onYouTubeIframeAPIReady = () => {
                        j(t) && t(), eo.ready.call(this)
                    }, ee(this.config.urls.youtube.sdk).catch(t => {
                        this.debug.warn("YouTube API failed to load", t)
                    })
                }
            },
            getTitle(t) {
                tH(t0(this.config.urls.youtube.api, t)).then(t => {
                    if (O(t)) {
                        let {
                            title: e,
                            height: i,
                            width: n
                        } = t;
                        this.config.title = e, tK.setTitle.call(this), this.embed.ratio = tz(n, i)
                    }
                    tP.call(this)
                }).catch(() => {
                    tP.call(this)
                })
            },
            ready() {
                var t;
                let e = this,
                    i = e.config.youtube,
                    n = e.media && e.media.getAttribute("id");
                if (!U(n) && n.startsWith("youtube-")) return;
                let s = e.media.getAttribute("src");
                U(s) && (s = e.media.getAttribute(this.config.attributes.embed.id));
                let r = U(t = s) ? null : t.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : t,
                    o = ti("div", {
                        id: `${e.provider}-${Math.floor(1e4*Math.random())}`,
                        "data-poster": i.customControls ? e.poster : void 0
                    });
                if (e.media = to(o, e.media), i.customControls) {
                    let a = t => `https://i.ytimg.com/vi/${r}/${t}default.jpg`;
                    tZ(a("maxres"), 121).catch(() => tZ(a("sd"), 121)).catch(() => tZ(a("hq"))).then(t => tK.setPoster.call(e, t.src)).then(t => {
                        t.includes("maxres") || (e.elements.poster.style.backgroundSize = "cover")
                    }).catch(() => {})
                }
                e.embed = new window.YT.Player(e.media, {
                    videoId: r,
                    host: er(i),
                    playerVars: J({}, {
                        autoplay: e.config.autoplay ? 1 : 0,
                        hl: e.config.hl,
                        controls: e.supported.ui && i.customControls ? 0 : 1,
                        disablekb: 1,
                        playsinline: e.config.fullscreen.iosNative ? 0 : 1,
                        cc_load_policy: e.captions.active ? 1 : 0,
                        cc_lang_pref: e.config.captions.language,
                        widget_referrer: window ? window.location.href : null
                    }, i),
                    events: {
                        onError(t) {
                            if (!e.media.error) {
                                let i = t.data,
                                    n = {
                                        2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                                        5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                                        100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                                        101: "The owner of the requested video does not allow it to be played in embedded players.",
                                        150: "The owner of the requested video does not allow it to be played in embedded players."
                                    }[i] || "An unknown error occured";
                                e.media.error = {
                                    code: i,
                                    message: n
                                }, t_.call(e, e.media, "error")
                            }
                        },
                        onPlaybackRateChange(t) {
                            let i = t.target;
                            e.media.playbackRate = i.getPlaybackRate(), t_.call(e, e.media, "ratechange")
                        },
                        onReady(t) {
                            if (j(e.media.play)) return;
                            let n = t.target;
                            eo.getTitle.call(e, r), e.media.play = () => {
                                es.call(e, !0), n.playVideo()
                            }, e.media.pause = () => {
                                es.call(e, !1), n.pauseVideo()
                            }, e.media.stop = () => {
                                n.stopVideo()
                            }, e.media.duration = n.getDuration(), e.media.paused = !0, e.media.currentTime = 0, Object.defineProperty(e.media, "currentTime", {
                                get: () => Number(n.getCurrentTime()),
                                set(t) {
                                    e.paused && !e.embed.hasPlayed && e.embed.mute(), e.media.seeking = !0, t_.call(e, e.media, "seeking"), n.seekTo(t)
                                }
                            }), Object.defineProperty(e.media, "playbackRate", {
                                get: () => n.getPlaybackRate(),
                                set(t) {
                                    n.setPlaybackRate(t)
                                }
                            });
                            let {
                                volume: s
                            } = e.config;
                            Object.defineProperty(e.media, "volume", {
                                get: () => s,
                                set(t) {
                                    s = t, n.setVolume(100 * s), t_.call(e, e.media, "volumechange")
                                }
                            });
                            let {
                                muted: o
                            } = e.config;
                            Object.defineProperty(e.media, "muted", {
                                get: () => o,
                                set(t) {
                                    let i = F(t) ? t : o;
                                    o = i, n[i ? "mute" : "unMute"](), n.setVolume(100 * s), t_.call(e, e.media, "volumechange")
                                }
                            }), Object.defineProperty(e.media, "currentSrc", {
                                get: () => n.getVideoUrl()
                            }), Object.defineProperty(e.media, "ended", {
                                get: () => e.currentTime === e.duration
                            });
                            let a = n.getAvailablePlaybackRates();
                            e.options.speed = a.filter(t => e.config.speed.options.includes(t)), e.supported.ui && i.customControls && e.media.setAttribute("tabindex", -1), t_.call(e, e.media, "timeupdate"), t_.call(e, e.media, "durationchange"), clearInterval(e.timers.buffering), e.timers.buffering = setInterval(() => {
                                e.media.buffered = n.getVideoLoadedFraction(), (null === e.media.lastBuffered || e.media.lastBuffered < e.media.buffered) && t_.call(e, e.media, "progress"), e.media.lastBuffered = e.media.buffered, 1 === e.media.buffered && (clearInterval(e.timers.buffering), t_.call(e, e.media, "canplaythrough"))
                            }, 200), i.customControls && setTimeout(() => tK.build.call(e), 50)
                        },
                        onStateChange(t) {
                            let n = t.target;
                            switch (clearInterval(e.timers.playing), e.media.seeking && [1, 2].includes(t.data) && (e.media.seeking = !1, t_.call(e, e.media, "seeked")), t.data) {
                                case -1:
                                    t_.call(e, e.media, "timeupdate"), e.media.buffered = n.getVideoLoadedFraction(), t_.call(e, e.media, "progress");
                                    break;
                                case 0:
                                    es.call(e, !1), e.media.loop ? (n.stopVideo(), n.playVideo()) : t_.call(e, e.media, "ended");
                                    break;
                                case 1:
                                    i.customControls && !e.config.autoplay && e.media.paused && !e.embed.hasPlayed ? e.media.pause() : (es.call(e, !0), t_.call(e, e.media, "playing"), e.timers.playing = setInterval(() => {
                                        t_.call(e, e.media, "timeupdate")
                                    }, 50), e.media.duration !== n.getDuration() && (e.media.duration = n.getDuration(), t_.call(e, e.media, "durationchange")));
                                    break;
                                case 2:
                                    e.muted || e.embed.unMute(), es.call(e, !1);
                                    break;
                                case 3:
                                    t_.call(e, e.media, "waiting")
                            }
                            t_.call(e, e.elements.container, "statechange", !1, {
                                code: t.data
                            })
                        }
                    }
                })
            }
        },
        ea = {
            setup() {
                this.media ? (tu(this.elements.container, this.config.classNames.type.replace("{0}", this.type), !0), tu(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), !0), this.isEmbed && tu(this.elements.container, this.config.classNames.type.replace("{0}", "video"), !0), this.isVideo && (this.elements.wrapper = ti("div", {
                    class: this.config.classNames.video
                }), tt(this.media, this.elements.wrapper), this.elements.poster = ti("div", {
                    class: this.config.classNames.poster
                }), this.elements.wrapper.appendChild(this.elements.poster)), this.isHTML5 ? tL.setup.call(this) : this.isYouTube ? eo.setup.call(this) : this.isVimeo && en.setup.call(this)) : this.debug.warn("No media element found!")
            }
        };
    class el {
        constructor(e) {
            t(this, "load", () => {
                this.enabled && (O(window.google) && O(window.google.ima) ? this.ready() : ee(this.player.config.urls.googleIMA.sdk).then(() => {
                    this.ready()
                }).catch(() => {
                    this.trigger("error", Error("Google IMA SDK failed to load"))
                }))
            }), t(this, "ready", () => {
                var t;
                this.enabled || ((t = this).manager && t.manager.destroy(), t.elements.displayContainer && t.elements.displayContainer.destroy(), t.elements.container.remove()), this.startSafetyTimer(12e3, "ready()"), this.managerPromise.then(() => {
                    this.clearSafetyTimer("onAdsManagerLoaded()")
                }), this.listeners(), this.setupIMA()
            }), t(this, "setupIMA", () => {
                this.elements.container = ti("div", {
                    class: this.player.config.classNames.ads
                }), this.player.elements.container.appendChild(this.elements.container), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), google.ima.settings.setLocale(this.player.config.ads.language), google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline), this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container, this.player.media), this.loader = new google.ima.AdsLoader(this.elements.displayContainer), this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, t => this.onAdsManagerLoaded(t), !1), this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, t => this.onAdError(t), !1), this.requestAds()
            }), t(this, "requestAds", () => {
                let {
                    container: t
                } = this.player.elements;
                try {
                    let e = new google.ima.AdsRequest;
                    e.adTagUrl = this.tagUrl, e.linearAdSlotWidth = t.offsetWidth, e.linearAdSlotHeight = t.offsetHeight, e.nonLinearAdSlotWidth = t.offsetWidth, e.nonLinearAdSlotHeight = t.offsetHeight, e.forceNonLinearFullSlot = !1, e.setAdWillPlayMuted(!this.player.muted), this.loader.requestAds(e)
                } catch (i) {
                    this.onAdError(i)
                }
            }), t(this, "pollCountdown", (t = !1) => {
                if (!t) return clearInterval(this.countdownTimer), void this.elements.container.removeAttribute("data-badge-text");
                this.countdownTimer = setInterval(() => {
                    let t = tR(Math.max(this.manager.getRemainingTime(), 0)),
                        e = `${tF.get("advertisement",this.player.config)} - ${t}`;
                    this.elements.container.setAttribute("data-badge-text", e)
                }, 100)
            }), t(this, "onAdsManagerLoaded", t => {
                if (!this.enabled) return;
                let e = new google.ima.AdsRenderingSettings;
                e.restoreCustomPlaybackStateOnAdBreakComplete = !0, e.enablePreloading = !0, this.manager = t.getAdsManager(this.player, e), this.cuePoints = this.manager.getCuePoints(), this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, t => this.onAdError(t)), Object.keys(google.ima.AdEvent.Type).forEach(t => {
                    this.manager.addEventListener(google.ima.AdEvent.Type[t], t => this.onAdEvent(t))
                }), this.trigger("loaded")
            }), t(this, "addCuePoints", () => {
                U(this.cuePoints) || this.cuePoints.forEach(t => {
                    if (0 !== t && -1 !== t && t < this.player.duration) {
                        let e = this.player.elements.progress;
                        if (W(e)) {
                            let i = 100 / this.player.duration * t,
                                n = ti("span", {
                                    class: this.player.config.classNames.cues
                                });
                            n.style.left = `${i.toString()}%`, e.appendChild(n)
                        }
                    }
                })
            }), t(this, "onAdEvent", t => {
                let {
                    container: e
                } = this.player.elements, i = t.getAd(), n = t.getAdData();
                switch ((t => {
                    t_.call(this.player, this.player.media, `ads${t.replace(/_/g,"").toLowerCase()}`)
                })(t.type), t.type) {
                    case google.ima.AdEvent.Type.LOADED:
                        this.trigger("loaded"), this.pollCountdown(!0), i.isLinear() || (i.width = e.offsetWidth, i.height = e.offsetHeight);
                        break;
                    case google.ima.AdEvent.Type.STARTED:
                        this.manager.setVolume(this.player.volume);
                        break;
                    case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                        this.player.ended ? this.loadAds() : this.loader.contentComplete();
                        break;
                    case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                        this.pauseContent();
                        break;
                    case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                        this.pollCountdown(), this.resumeContent();
                        break;
                    case google.ima.AdEvent.Type.LOG:
                        n.adError && this.player.debug.warn(`Non-fatal ad error: ${n.adError.getMessage()}`)
                }
            }), t(this, "onAdError", t => {
                this.cancel(), this.player.debug.warn("Ads error", t)
            }), t(this, "listeners", () => {
                let {
                    container: t
                } = this.player.elements, e;
                this.player.on("canplay", () => {
                    this.addCuePoints()
                }), this.player.on("ended", () => {
                    this.loader.contentComplete()
                }), this.player.on("timeupdate", () => {
                    e = this.player.currentTime
                }), this.player.on("seeked", () => {
                    let t = this.player.currentTime;
                    U(this.cuePoints) || this.cuePoints.forEach((i, n) => {
                        e < i && i < t && (this.manager.discardAdBreak(), this.cuePoints.splice(n, 1))
                    })
                }), window.addEventListener("resize", () => {
                    this.manager && this.manager.resize(t.offsetWidth, t.offsetHeight, google.ima.ViewMode.NORMAL)
                })
            }), t(this, "play", () => {
                let {
                    container: t
                } = this.player.elements;
                this.managerPromise || this.resumeContent(), this.managerPromise.then(() => {
                    this.manager.setVolume(this.player.volume), this.elements.displayContainer.initialize();
                    try {
                        this.initialized || (this.manager.init(t.offsetWidth, t.offsetHeight, google.ima.ViewMode.NORMAL), this.manager.start()), this.initialized = !0
                    } catch (e) {
                        this.onAdError(e)
                    }
                }).catch(() => {})
            }), t(this, "resumeContent", () => {
                this.elements.container.style.zIndex = "", this.playing = !1, t8(this.player.media.play())
            }), t(this, "pauseContent", () => {
                this.elements.container.style.zIndex = 3, this.playing = !0, this.player.media.pause()
            }), t(this, "cancel", () => {
                this.initialized && this.resumeContent(), this.trigger("error"), this.loadAds()
            }), t(this, "loadAds", () => {
                this.managerPromise.then(() => {
                    this.manager && this.manager.destroy(), this.managerPromise = new Promise(t => {
                        this.on("loaded", t), this.player.debug.log(this.manager)
                    }), this.initialized = !1, this.requestAds()
                }).catch(() => {})
            }), t(this, "trigger", (t, ...e) => {
                let i = this.events[t];
                H(i) && i.forEach(t => {
                    j(t) && t.apply(this, e)
                })
            }), t(this, "on", (t, e) => (H(this.events[t]) || (this.events[t] = []), this.events[t].push(e), this)), t(this, "startSafetyTimer", (t, e) => {
                this.player.debug.log(`Safety timer invoked from: ${e}`), this.safetyTimer = setTimeout(() => {
                    this.cancel(), this.clearSafetyTimer("startSafetyTimer()")
                }, t)
            }), t(this, "clearSafetyTimer", t => {
                M(this.safetyTimer) || (this.player.debug.log(`Safety timer cleared from: ${t}`), clearTimeout(this.safetyTimer), this.safetyTimer = null)
            }), this.player = e, this.config = e.config.ads, this.playing = !1, this.initialized = !1, this.elements = {
                container: null,
                displayContainer: null
            }, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, this.safetyTimer = null, this.countdownTimer = null, this.managerPromise = new Promise((t, e) => {
                this.on("loaded", t), this.on("error", e)
            }), this.load()
        }
        get enabled() {
            let {
                config: t
            } = this;
            return this.player.isHTML5 && this.player.isVideo && t.enabled && (!U(t.publisherId) || X(t.tagUrl))
        }
        get tagUrl() {
            let {
                config: t
            } = this;
            return X(t.tagUrl) ? t.tagUrl : `https://go.aniview.com/api/adserver6/vast/?${tY({AV_PUBLISHERID:"58c25bb0073ef448b1087ad6",AV_CHANNELID:"5a0458dc28a06145e4519d21",AV_URL:window.location.hostname,cb:Date.now(),AV_WIDTH:640,AV_HEIGHT:480,AV_CDIM2:t.publisherId})}`
        }
    }
    let eu = t => {
            let e = [];
            return t.split(/\r\n\r\n|\n\n|\r\r/).forEach(t => {
                let i = {};
                t.split(/\r\n|\n|\r/).forEach(t => {
                    if (D(i.startTime)) {
                        if (!U(t.trim()) && U(i.text)) {
                            let e = t.trim().split("#xywh=");
                            [i.text] = e, e[1] && ([i.x, i.y, i.w, i.h] = e[1].split(","))
                        }
                    } else {
                        let n = t.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);
                        n && (i.startTime = 60 * Number(n[1] || 0) * 60 + 60 * Number(n[2]) + Number(n[3]) + Number(`0.${n[4]}`), i.endTime = 60 * Number(n[6] || 0) * 60 + 60 * Number(n[7]) + Number(n[8]) + Number(`0.${n[9]}`))
                    }
                }), i.text && e.push(i)
            }), e
        },
        eh = (t, e) => {
            let i = {};
            return t > e.width / e.height ? (i.width = e.width, i.height = 1 / t * e.width) : (i.height = e.height, i.width = t * e.height), i
        };
    class ec {
        constructor(e) {
            t(this, "load", () => {
                this.player.elements.display.seekTooltip && (this.player.elements.display.seekTooltip.hidden = this.enabled), this.enabled && this.getThumbnails().then(() => {
                    this.enabled && (this.render(), this.determineContainerAutoSizing(), this.loaded = !0)
                })
            }), t(this, "getThumbnails", () => new Promise(t => {
                let {
                    src: e
                } = this.player.config.previewThumbnails;
                if (U(e)) throw Error("Missing previewThumbnails.src config attribute");
                let i = () => {
                    this.thumbnails.sort((t, e) => t.height - e.height), this.player.debug.log("Preview thumbnails", this.thumbnails), t()
                };
                if (j(e)) e(t => {
                    this.thumbnails = t, i()
                });
                else {
                    let n = (N(e) ? [e] : e).map(t => this.getThumbnail(t));
                    Promise.all(n).then(i)
                }
            })), t(this, "getThumbnail", t => new Promise(e => {
                tH(t).then(i => {
                    let n = {
                        frames: eu(i),
                        height: null,
                        urlPrefix: ""
                    };
                    n.frames[0].text.startsWith("/") || n.frames[0].text.startsWith("http://") || n.frames[0].text.startsWith("https://") || (n.urlPrefix = t.substring(0, t.lastIndexOf("/") + 1));
                    let s = new Image;
                    s.onload = () => {
                        n.height = s.naturalHeight, n.width = s.naturalWidth, this.thumbnails.push(n), e()
                    }, s.src = n.urlPrefix + n.frames[0].text
                })
            })), t(this, "startMove", t => {
                if (this.loaded && R(t) && ["touchmove", "mousemove"].includes(t.type) && this.player.media.duration) {
                    if ("touchmove" === t.type) this.seekTime = this.player.media.duration * (this.player.elements.inputs.seek.value / 100);
                    else {
                        let e = this.player.elements.progress.getBoundingClientRect(),
                            i = 100 / e.width * (t.pageX - e.left);
                        this.seekTime = this.player.media.duration * (i / 100), this.seekTime < 0 && (this.seekTime = 0), this.seekTime > this.player.media.duration - 1 && (this.seekTime = this.player.media.duration - 1), this.mousePosX = t.pageX, this.elements.thumb.time.innerText = tR(this.seekTime)
                    }
                    this.showImageAtCurrentTime()
                }
            }), t(this, "endMove", () => {
                this.toggleThumbContainer(!1, !0)
            }), t(this, "startScrubbing", t => {
                (M(t.button) || !1 === t.button || 0 === t.button) && (this.mouseDown = !0, this.player.media.duration && (this.toggleScrubbingContainer(!0), this.toggleThumbContainer(!1, !0), this.showImageAtCurrentTime()))
            }), t(this, "endScrubbing", () => {
                this.mouseDown = !1, Math.ceil(this.lastTime) === Math.ceil(this.player.media.currentTime) ? this.toggleScrubbingContainer(!1) : tw.call(this.player, this.player.media, "timeupdate", () => {
                    this.mouseDown || this.toggleScrubbingContainer(!1)
                })
            }), t(this, "listeners", () => {
                this.player.on("play", () => {
                    this.toggleThumbContainer(!1, !0)
                }), this.player.on("seeked", () => {
                    this.toggleThumbContainer(!1)
                }), this.player.on("timeupdate", () => {
                    this.lastTime = this.player.media.currentTime
                })
            }), t(this, "render", () => {
                this.elements.thumb.container = ti("div", {
                    class: this.player.config.classNames.previewThumbnails.thumbContainer
                }), this.elements.thumb.imageContainer = ti("div", {
                    class: this.player.config.classNames.previewThumbnails.imageContainer
                }), this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer);
                let t = ti("div", {
                    class: this.player.config.classNames.previewThumbnails.timeContainer
                });
                this.elements.thumb.time = ti("span", {}, "00:00"), t.appendChild(this.elements.thumb.time), this.elements.thumb.container.appendChild(t), W(this.player.elements.progress) && this.player.elements.progress.appendChild(this.elements.thumb.container), this.elements.scrubbing.container = ti("div", {
                    class: this.player.config.classNames.previewThumbnails.scrubbingContainer
                }), this.player.elements.wrapper.appendChild(this.elements.scrubbing.container)
            }), t(this, "destroy", () => {
                this.elements.thumb.container && this.elements.thumb.container.remove(), this.elements.scrubbing.container && this.elements.scrubbing.container.remove()
            }), t(this, "showImageAtCurrentTime", () => {
                this.mouseDown ? this.setScrubbingContainerSize() : this.setThumbContainerSizeAndPos();
                let t = this.thumbnails[0].frames.findIndex(t => this.seekTime >= t.startTime && this.seekTime <= t.endTime),
                    e = t >= 0,
                    i = 0;
                this.mouseDown || this.toggleThumbContainer(e), e && (this.thumbnails.forEach((e, n) => {
                    this.loadedImages.includes(e.frames[t].text) && (i = n)
                }), t !== this.showingThumb && (this.showingThumb = t, this.loadImage(i)))
            }), t(this, "loadImage", (t = 0) => {
                let e = this.showingThumb,
                    i = this.thumbnails[t],
                    {
                        urlPrefix: n
                    } = i,
                    s = i.frames[e],
                    r = i.frames[e].text,
                    o = n + r;
                if (this.currentImageElement && this.currentImageElement.dataset.filename === r) this.showImage(this.currentImageElement, s, t, e, r, !1), this.currentImageElement.dataset.index = e, this.removeOldImages(this.currentImageElement);
                else {
                    this.loadingImage && this.usingSprites && (this.loadingImage.onload = null);
                    let a = new Image;
                    a.src = o, a.dataset.index = e, a.dataset.filename = r, this.showingThumbFilename = r, this.player.debug.log(`Loading image: ${o}`), a.onload = () => this.showImage(a, s, t, e, r, !0), this.loadingImage = a, this.removeOldImages(a)
                }
            }), t(this, "showImage", (t, e, i, n, s, r = !0) => {
                this.player.debug.log(`Showing thumb: ${s}. num: ${n}. qual: ${i}. newimg: ${r}`), this.setImageSizeAndOffset(t, e), r && (this.currentImageContainer.appendChild(t), this.currentImageElement = t, this.loadedImages.includes(s) || this.loadedImages.push(s)), this.preloadNearby(n, !0).then(this.preloadNearby(n, !1)).then(this.getHigherQuality(i, t, e, s))
            }), t(this, "removeOldImages", t => {
                Array.from(this.currentImageContainer.children).forEach(e => {
                    if ("img" !== e.tagName.toLowerCase()) return;
                    let i = this.usingSprites ? 500 : 1e3;
                    if (e.dataset.index !== t.dataset.index && !e.dataset.deleting) {
                        e.dataset.deleting = !0;
                        let {
                            currentImageContainer: n
                        } = this;
                        setTimeout(() => {
                            n.removeChild(e), this.player.debug.log(`Removing thumb: ${e.dataset.filename}`)
                        }, i)
                    }
                })
            }), t(this, "preloadNearby", (t, e = !0) => new Promise(i => {
                setTimeout(() => {
                    let n = this.thumbnails[0].frames[t].text;
                    if (this.showingThumbFilename === n) {
                        let s;
                        s = e ? this.thumbnails[0].frames.slice(t) : this.thumbnails[0].frames.slice(0, t).reverse();
                        let r = !1;
                        s.forEach(t => {
                            let e = t.text;
                            if (e !== n && !this.loadedImages.includes(e)) {
                                r = !0, this.player.debug.log(`Preloading thumb filename: ${e}`);
                                let {
                                    urlPrefix: s
                                } = this.thumbnails[0], o = s + e, a = new Image;
                                a.src = o, a.onload = () => {
                                    this.player.debug.log(`Preloaded thumb filename: ${e}`), this.loadedImages.includes(e) || this.loadedImages.push(e), i()
                                }
                            }
                        }), r || i()
                    }
                }, 300)
            })), t(this, "getHigherQuality", (t, e, i, n) => {
                if (t < this.thumbnails.length - 1) {
                    let s = e.naturalHeight;
                    this.usingSprites && (s = i.h), s < this.thumbContainerHeight && setTimeout(() => {
                        this.showingThumbFilename === n && (this.player.debug.log(`Showing higher quality thumb for: ${n}`), this.loadImage(t + 1))
                    }, 300)
                }
            }), t(this, "toggleThumbContainer", (t = !1, e = !1) => {
                let i = this.player.config.classNames.previewThumbnails.thumbContainerShown;
                this.elements.thumb.container.classList.toggle(i, t), !t && e && (this.showingThumb = null, this.showingThumbFilename = null)
            }), t(this, "toggleScrubbingContainer", (t = !1) => {
                let e = this.player.config.classNames.previewThumbnails.scrubbingContainerShown;
                this.elements.scrubbing.container.classList.toggle(e, t), t || (this.showingThumb = null, this.showingThumbFilename = null)
            }), t(this, "determineContainerAutoSizing", () => {
                (this.elements.thumb.imageContainer.clientHeight > 20 || this.elements.thumb.imageContainer.clientWidth > 20) && (this.sizeSpecifiedInCSS = !0)
            }), t(this, "setThumbContainerSizeAndPos", () => {
                if (this.sizeSpecifiedInCSS) {
                    if (this.elements.thumb.imageContainer.clientHeight > 20 && this.elements.thumb.imageContainer.clientWidth < 20) {
                        let t = Math.floor(this.elements.thumb.imageContainer.clientHeight * this.thumbAspectRatio);
                        this.elements.thumb.imageContainer.style.width = `${t}px`
                    } else if (this.elements.thumb.imageContainer.clientHeight < 20 && this.elements.thumb.imageContainer.clientWidth > 20) {
                        let e = Math.floor(this.elements.thumb.imageContainer.clientWidth / this.thumbAspectRatio);
                        this.elements.thumb.imageContainer.style.height = `${e}px`
                    }
                } else {
                    let i = Math.floor(this.thumbContainerHeight * this.thumbAspectRatio);
                    this.elements.thumb.imageContainer.style.height = `${this.thumbContainerHeight}px`, this.elements.thumb.imageContainer.style.width = `${i}px`
                }
                this.setThumbContainerPos()
            }), t(this, "setThumbContainerPos", () => {
                let t = this.player.elements.progress.getBoundingClientRect(),
                    e = this.player.elements.container.getBoundingClientRect(),
                    {
                        container: i
                    } = this.elements.thumb,
                    n = e.left - t.left + 10,
                    s = e.right - t.left - i.clientWidth - 10,
                    r = this.mousePosX - t.left - i.clientWidth / 2;
                r < n && (r = n), r > s && (r = s), i.style.left = `${r}px`
            }), t(this, "setScrubbingContainerSize", () => {
                let {
                    width: t,
                    height: e
                } = eh(this.thumbAspectRatio, {
                    width: this.player.media.clientWidth,
                    height: this.player.media.clientHeight
                });
                this.elements.scrubbing.container.style.width = `${t}px`, this.elements.scrubbing.container.style.height = `${e}px`
            }), t(this, "setImageSizeAndOffset", (t, e) => {
                if (!this.usingSprites) return;
                let i = this.thumbContainerHeight / e.h;
                t.style.height = t.naturalHeight * i + "px", t.style.width = t.naturalWidth * i + "px", t.style.left = `-${e.x*i}px`, t.style.top = `-${e.y*i}px`
            }), this.player = e, this.thumbnails = [], this.loaded = !1, this.lastMouseMoveTime = Date.now(), this.mouseDown = !1, this.loadedImages = [], this.elements = {
                thumb: {},
                scrubbing: {}
            }, this.load()
        }
        get enabled() {
            return this.player.isHTML5 && this.player.isVideo && this.player.config.previewThumbnails.enabled
        }
        get currentImageContainer() {
            return this.mouseDown ? this.elements.scrubbing.container : this.elements.thumb.imageContainer
        }
        get usingSprites() {
            return Object.keys(this.thumbnails[0].frames[0]).includes("w")
        }
        get thumbAspectRatio() {
            return this.usingSprites ? this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h : this.thumbnails[0].width / this.thumbnails[0].height
        }
        get thumbContainerHeight() {
            if (this.mouseDown) {
                let {
                    height: t
                } = eh(this.thumbAspectRatio, {
                    width: this.player.media.clientWidth,
                    height: this.player.media.clientHeight
                });
                return t
            }
            return this.sizeSpecifiedInCSS ? this.elements.thumb.imageContainer.clientHeight : Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4)
        }
        get currentImageElement() {
            return this.mouseDown ? this.currentScrubbingImageElement : this.currentThumbnailImageElement
        }
        set currentImageElement(t) {
            this.mouseDown ? this.currentScrubbingImageElement = t : this.currentThumbnailImageElement = t
        }
    }
    let ed = {
        insertElements(t, e) {
            N(e) ? tn(t, this.media, {
                src: e
            }) : H(e) && e.forEach(e => {
                tn(t, this.media, e)
            })
        },
        change(t) {
            K(t, "sources.length") ? (tL.cancelRequests.call(this), this.destroy.call(this, () => {
                this.options.quality = [], ts(this.media), this.media = null, W(this.elements.container) && this.elements.container.removeAttribute("class");
                let {
                    sources: e,
                    type: i
                } = t, [{
                    provider: n = tV.html5,
                    src: s
                }] = e, r = "html5" === n ? i : "div", o = "html5" === n ? {} : {
                    src: s
                };
                Object.assign(this, {
                    provider: n,
                    type: i,
                    supported: tm.check(i, n, this.config.playsinline),
                    media: ti(r, o)
                }), this.elements.container.appendChild(this.media), F(t.autoplay) && (this.config.autoplay = t.autoplay), this.isHTML5 && (this.config.crossorigin && this.media.setAttribute("crossorigin", ""), this.config.autoplay && this.media.setAttribute("autoplay", ""), U(t.poster) || (this.poster = t.poster), this.config.loop.active && this.media.setAttribute("loop", ""), this.config.muted && this.media.setAttribute("muted", ""), this.config.playsinline && this.media.setAttribute("playsinline", "")), tK.addStyleHook.call(this), this.isHTML5 && ed.insertElements.call(this, "source", e), this.config.title = t.title, ea.setup.call(this), this.isHTML5 && Object.keys(t).includes("tracks") && ed.insertElements.call(this, "track", t.tracks), (this.isHTML5 || this.isEmbed && !this.supported.ui) && tK.build.call(this), this.isHTML5 && this.media.load(), U(t.previewThumbnails) || (Object.assign(this.config.previewThumbnails, t.previewThumbnails), this.previewThumbnails && this.previewThumbnails.loaded && (this.previewThumbnails.destroy(), this.previewThumbnails = null), this.config.previewThumbnails.enabled && (this.previewThumbnails = new ec(this))), this.fullscreen.update()
            }, !0)) : this.debug.warn("Invalid source format")
        }
    };
    class ep {
        constructor(e, i) {
            if (t(this, "play", () => j(this.media.play) ? (this.ads && this.ads.enabled && this.ads.managerPromise.then(() => this.ads.play()).catch(() => t8(this.media.play())), this.media.play()) : null), t(this, "pause", () => this.playing && j(this.media.pause) ? this.media.pause() : null), t(this, "togglePlay", t => (F(t) ? t : !this.playing) ? this.play() : this.pause()), t(this, "stop", () => {
                    this.isHTML5 ? (this.pause(), this.restart()) : j(this.media.stop) && this.media.stop()
                }), t(this, "restart", () => {
                    this.currentTime = 0
                }), t(this, "rewind", t => {
                    this.currentTime -= D(t) ? t : this.config.seekTime
                }), t(this, "forward", t => {
                    this.currentTime += D(t) ? t : this.config.seekTime
                }), t(this, "increaseVolume", t => {
                    let e = this.media.muted ? 0 : this.volume;
                    this.volume = e + (D(t) ? t : 0)
                }), t(this, "decreaseVolume", t => {
                    this.increaseVolume(-t)
                }), t(this, "airplay", () => {
                    tm.airplay && this.media.webkitShowPlaybackTargetPicker()
                }), t(this, "toggleControls", t => {
                    if (this.supported.ui && !this.isAudio) {
                        let e = th(this.elements.container, this.config.classNames.hideControls),
                            i = void 0 === t ? void 0 : !t,
                            n = tu(this.elements.container, this.config.classNames.hideControls, i);
                        if (n && H(this.config.controls) && this.config.controls.includes("settings") && !U(this.config.settings) && tB.toggleMenu.call(this, !1), n !== e) {
                            let s = n ? "controlshidden" : "controlsshown";
                            t_.call(this, this.media, s)
                        }
                        return !n
                    }
                    return !1
                }), t(this, "on", (t, e) => {
                    tb.call(this, this.elements.container, t, e)
                }), t(this, "once", (t, e) => {
                    tw.call(this, this.elements.container, t, e)
                }), t(this, "off", (t, e) => {
                    t$(this.elements.container, t, e)
                }), t(this, "destroy", (t, e = !1) => {
                    if (!this.ready) return;
                    let i = () => {
                        document.body.style.overflow = "", this.embed = null, e ? (Object.keys(this.elements).length && (ts(this.elements.buttons.play), ts(this.elements.captions), ts(this.elements.controls), ts(this.elements.wrapper), this.elements.buttons.play = null, this.elements.captions = null, this.elements.controls = null, this.elements.wrapper = null), j(t) && t()) : (tx.call(this), tL.cancelRequests.call(this), to(this.elements.original, this.elements.container), t_.call(this, this.elements.original, "destroyed", !0), j(t) && t.call(this.elements.original), this.ready = !1, setTimeout(() => {
                            this.elements = null, this.media = null
                        }, 200))
                    };
                    this.stop(), clearTimeout(this.timers.loading), clearTimeout(this.timers.controls), clearTimeout(this.timers.resized), this.isHTML5 ? (tK.toggleNativeControls.call(this, !0), i()) : this.isYouTube ? (clearInterval(this.timers.buffering), clearInterval(this.timers.playing), null !== this.embed && j(this.embed.destroy) && this.embed.destroy(), i()) : this.isVimeo && (null !== this.embed && this.embed.unload().then(i), setTimeout(i, 200))
                }), t(this, "supports", t => tm.mime.call(this, t)), this.timers = {}, this.ready = !1, this.loading = !1, this.failed = !1, this.touch = tm.touch, this.media = e, N(this.media) && (this.media = document.querySelectorAll(this.media)), (window.jQuery && this.media instanceof jQuery || q(this.media) || H(this.media)) && (this.media = this.media[0]), this.config = J({}, t5, ep.defaults, i || {}, (() => {
                    try {
                        return JSON.parse(this.media.getAttribute("data-plyr-config"))
                    } catch (t) {
                        return {}
                    }
                })()), this.elements = {
                    container: null,
                    fullscreen: null,
                    captions: null,
                    buttons: {},
                    display: {},
                    progress: {},
                    inputs: {},
                    settings: {
                        popup: null,
                        menu: null,
                        panels: {},
                        buttons: {}
                    }
                }, this.captions = {
                    active: null,
                    currentTrack: -1,
                    meta: new WeakMap
                }, this.fullscreen = {
                    active: !1
                }, this.options = {
                    speed: [],
                    quality: []
                }, this.debug = new tQ(this.config.debug), this.debug.log("Config", this.config), this.debug.log("Support", tm), M(this.media) || !W(this.media)) return void this.debug.error("Setup failed: no suitable element passed");
            if (this.media.plyr) return void this.debug.warn("Target already setup");
            if (!this.config.enabled) return void this.debug.error("Setup failed: disabled by config");
            if (!tm.check().api) return void this.debug.error("Setup failed: no support");
            let n = this.media.cloneNode(!0);
            n.autoplay = !1, this.elements.original = n;
            let s = this.media.tagName.toLowerCase(),
                r = null,
                o = null;
            switch (s) {
                case "div":
                    if (W(r = this.media.querySelector("iframe"))) {
                        var a;
                        if (o = t1(r.getAttribute("src")), this.provider = (a = o.toString(), /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(a) ? tV.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(a) ? tV.vimeo : null), this.elements.container = this.media, this.media = r, this.elements.container.className = "", o.search.length) {
                            let l = ["1", "true"];
                            l.includes(o.searchParams.get("autoplay")) && (this.config.autoplay = !0), l.includes(o.searchParams.get("loop")) && (this.config.loop.active = !0), this.isYouTube ? (this.config.playsinline = l.includes(o.searchParams.get("playsinline")), this.config.youtube.hl = o.searchParams.get("hl")) : this.config.playsinline = !0
                        }
                    } else this.provider = this.media.getAttribute(this.config.attributes.embed.provider), this.media.removeAttribute(this.config.attributes.embed.provider);
                    if (U(this.provider) || !Object.values(tV).includes(this.provider)) return void this.debug.error("Setup failed: Invalid provider");
                    this.type = tU;
                    break;
                case "video":
                case "audio":
                    this.type = s, this.provider = tV.html5, this.media.hasAttribute("crossorigin") && (this.config.crossorigin = !0), this.media.hasAttribute("autoplay") && (this.config.autoplay = !0), (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) && (this.config.playsinline = !0), this.media.hasAttribute("muted") && (this.config.muted = !0), this.media.hasAttribute("loop") && (this.config.loop.active = !0);
                    break;
                default:
                    return void this.debug.error("Setup failed: unsupported type")
            }
            this.supported = tm.check(this.type, this.provider, this.config.playsinline), this.supported.api ? (this.eventListeners = [], this.listeners = new tJ(this), this.storage = new tj(this), this.media.plyr = this, W(this.elements.container) || (this.elements.container = ti("div", {
                tabindex: 0
            }), tt(this.media, this.elements.container)), tK.migrateStyles.call(this), tK.addStyleHook.call(this), ea.setup.call(this), this.config.debug && tb.call(this, this.elements.container, this.config.events.join(" "), t => {
                this.debug.log(`event: ${t.type}`)
            }), this.fullscreen = new tG(this), (this.isHTML5 || this.isEmbed && !this.supported.ui) && tK.build.call(this), this.listeners.container(), this.listeners.global(), this.config.ads.enabled && (this.ads = new el(this)), this.isHTML5 && this.config.autoplay && this.once("canplay", () => t8(this.play())), this.lastSeekTime = 0, this.config.previewThumbnails.enabled && (this.previewThumbnails = new ec(this))) : this.debug.error("Setup failed: no support")
        }
        get isHTML5() {
            return this.provider === tV.html5
        }
        get isEmbed() {
            return this.isYouTube || this.isVimeo
        }
        get isYouTube() {
            return this.provider === tV.youtube
        }
        get isVimeo() {
            return this.provider === tV.vimeo
        }
        get isVideo() {
            return this.type === tU
        }
        get isAudio() {
            return this.type === tX
        }
        get playing() {
            return Boolean(this.ready && !this.paused && !this.ended)
        }
        get paused() {
            return Boolean(this.media.paused)
        }
        get stopped() {
            return Boolean(this.paused && 0 === this.currentTime)
        }
        get ended() {
            return Boolean(this.media.ended)
        }
        set currentTime(t) {
            if (!this.duration) return;
            let e = D(t) && t > 0;
            this.media.currentTime = e ? Math.min(t, this.duration) : 0, this.debug.log(`Seeking to ${this.currentTime} seconds`)
        }
        get currentTime() {
            return Number(this.media.currentTime)
        }
        get buffered() {
            let {
                buffered: t
            } = this.media;
            return D(t) ? t : t && t.length && this.duration > 0 ? t.end(0) / this.duration : 0
        }
        get seeking() {
            return Boolean(this.media.seeking)
        }
        get duration() {
            let t = parseFloat(this.config.duration),
                e = (this.media || {}).duration,
                i = D(e) && e !== 1 / 0 ? e : 0;
            return t || i
        }
        set volume(t) {
            let e = t;
            N(e) && (e = Number(e)), D(e) || (e = this.storage.get("volume")), D(e) || ({
                volume: e
            } = this.config), e > 1 && (e = 1), e < 0 && (e = 0), this.config.volume = e, this.media.volume = e, !U(t) && this.muted && e > 0 && (this.muted = !1)
        }
        get volume() {
            return Number(this.media.volume)
        }
        set muted(t) {
            let e = t;
            F(e) || (e = this.storage.get("muted")), F(e) || (e = this.config.muted), this.config.muted = e, this.media.muted = e
        }
        get muted() {
            return Boolean(this.media.muted)
        }
        get hasAudio() {
            return !this.isHTML5 || !!this.isAudio || Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length)
        }
        set speed(t) {
            let e = null;
            D(t) && (e = t), D(e) || (e = this.storage.get("speed")), D(e) || (e = this.config.speed.selected);
            let {
                minimumSpeed: i,
                maximumSpeed: n
            } = this;
            e = function(t = 0, e = 0, i = 255) {
                return Math.min(Math.max(t, e), i)
            }(e, i, n), this.config.speed.selected = e, setTimeout(() => {
                this.media.playbackRate = e
            }, 0)
        }
        get speed() {
            return Number(this.media.playbackRate)
        }
        get minimumSpeed() {
            return this.isYouTube ? Math.min(...this.options.speed) : this.isVimeo ? .5 : .0625
        }
        get maximumSpeed() {
            return this.isYouTube ? Math.max(...this.options.speed) : this.isVimeo ? 2 : 16
        }
        set quality(t) {
            let e = this.config.quality,
                i = this.options.quality;
            if (!i.length) return;
            let n = [!U(t) && Number(t), this.storage.get("quality"), e.selected, e.default].find(D),
                s = !0;
            if (!i.includes(n)) {
                let r = tk(i, n);
                this.debug.warn(`Unsupported quality option: ${n}, using ${r} instead`), n = r, s = !1
            }
            e.selected = n, this.media.quality = n, s && this.storage.set({
                quality: n
            })
        }
        get quality() {
            return this.media.quality
        }
        set loop(t) {
            let e = F(t) ? t : this.config.loop.active;
            this.config.loop.active = e, this.media.loop = e
        }
        get loop() {
            return Boolean(this.media.loop)
        }
        set source(t) {
            ed.change.call(this, t)
        }
        get source() {
            return this.media.currentSrc
        }
        get download() {
            let {
                download: t
            } = this.config.urls;
            return X(t) ? t : this.source
        }
        set download(t) {
            X(t) && (this.config.urls.download = t, tB.setDownloadUrl.call(this))
        }
        set poster(t) {
            this.isVideo ? tK.setPoster.call(this, t, !1).catch(() => {}) : this.debug.warn("Poster can only be set for video")
        }
        get poster() {
            return this.isVideo ? this.media.getAttribute("poster") || this.media.getAttribute("data-poster") : null
        }
        get ratio() {
            if (!this.isVideo) return null;
            let t = t9(tI.call(this));
            return H(t) ? t.join(":") : t
        }
        set ratio(t) {
            this.isVideo ? N(t) && tE(t) ? (this.config.ratio = t9(t), tP.call(this)) : this.debug.error(`Invalid aspect ratio specified (${t})`) : this.debug.warn("Aspect ratio can only be set for video")
        }
        set autoplay(t) {
            let e = F(t) ? t : this.config.autoplay;
            this.config.autoplay = e
        }
        get autoplay() {
            return Boolean(this.config.autoplay)
        }
        toggleCaptions(t) {
            t4.toggle.call(this, t, !1)
        }
        set currentTrack(t) {
            t4.set.call(this, t, !1)
        }
        get currentTrack() {
            let {
                toggled: t,
                currentTrack: e
            } = this.captions;
            return t ? e : -1
        }
        set language(t) {
            t4.setLanguage.call(this, t, !1)
        }
        get language() {
            return (t4.getCurrentTrack.call(this) || {}).language
        }
        set pip(t) {
            if (!tm.pip) return;
            let e = F(t) ? t : !this.pip;
            j(this.media.webkitSetPresentationMode) && this.media.webkitSetPresentationMode(e ? t7 : t2), j(this.media.requestPictureInPicture) && (!this.pip && e ? this.media.requestPictureInPicture() : this.pip && !e && document.exitPictureInPicture())
        }
        get pip() {
            return tm.pip ? U(this.media.webkitPresentationMode) ? this.media === document.pictureInPictureElement : this.media.webkitPresentationMode === t7 : null
        }
        static supported(t, e, i) {
            return tm.check(t, e, i)
        }
        static loadSprite(t, e) {
            return tq(t, e)
        }
        static setup(t, e = {}) {
            let i = null;
            return N(t) ? i = Array.from(document.querySelectorAll(t)) : q(t) ? i = Array.from(t) : H(t) && (i = t.filter(W)), U(i) ? null : i.map(t => new ep(t, e))
        }
    }
    return ep.defaults = JSON.parse(JSON.stringify(a = t5)), ep
});
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
    Prism = function(t) {
        var e = /\blang(?:uage)?-([\w-]+)\b/i,
            i = 0,
            n = {},
            s = {
                manual: t.Prism && t.Prism.manual,
                disableWorkerMessageHandler: t.Prism && t.Prism.disableWorkerMessageHandler,
                util: {
                    encode: function t(e) {
                        return e instanceof r ? new r(e.type, t(e.content), e.alias) : Array.isArray(e) ? e.map(t) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
                    },
                    type: function(t) {
                        return Object.prototype.toString.call(t).slice(8, -1)
                    },
                    objId: function(t) {
                        return t.__id || Object.defineProperty(t, "__id", {
                            value: ++i
                        }), t.__id
                    },
                    clone: function t(e, i) {
                        var n, r;
                        switch (i = i || {}, s.util.type(e)) {
                            case "Object":
                                if (i[r = s.util.objId(e)]) return i[r];
                                for (var o in n = {}, i[r] = n, e) e.hasOwnProperty(o) && (n[o] = t(e[o], i));
                                return n;
                            case "Array":
                                return i[r = s.util.objId(e)] ? i[r] : (n = [], i[r] = n, e.forEach(function(e, s) {
                                    n[s] = t(e, i)
                                }), n);
                            default:
                                return e
                        }
                    },
                    getLanguage: function(t) {
                        for (; t && !e.test(t.className);) t = t.parentElement;
                        return t ? (t.className.match(e) || [, "none"])[1].toLowerCase() : "none"
                    },
                    currentScript: function() {
                        if ("undefined" == typeof document) return null;
                        if ("currentScript" in document) return document.currentScript;
                        try {
                            throw Error()
                        } catch (t) {
                            var e = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(t.stack) || [])[1];
                            if (e) {
                                var i = document.getElementsByTagName("script");
                                for (var n in i)
                                    if (i[n].src == e) return i[n]
                            }
                            return null
                        }
                    },
                    isActive: function(t, e, i) {
                        for (var n = "no-" + e; t;) {
                            var s = t.classList;
                            if (s.contains(e)) return !0;
                            if (s.contains(n)) return !1;
                            t = t.parentElement
                        }
                        return !!i
                    }
                },
                languages: {
                    plain: n,
                    plaintext: n,
                    text: n,
                    txt: n,
                    extend: function(t, e) {
                        var i = s.util.clone(s.languages[t]);
                        for (var n in e) i[n] = e[n];
                        return i
                    },
                    insertBefore: function(t, e, i, n) {
                        var r = (n = n || s.languages)[t],
                            o = {};
                        for (var a in r)
                            if (r.hasOwnProperty(a)) {
                                if (a == e)
                                    for (var l in i) i.hasOwnProperty(l) && (o[l] = i[l]);
                                i.hasOwnProperty(a) || (o[a] = r[a])
                            }
                        var u = n[t];
                        return n[t] = o, s.languages.DFS(s.languages, function(e, i) {
                            i === u && e != t && (this[e] = o)
                        }), o
                    },
                    DFS: function t(e, i, n, r) {
                        r = r || {};
                        var o = s.util.objId;
                        for (var a in e)
                            if (e.hasOwnProperty(a)) {
                                i.call(e, a, e[a], n || a);
                                var l = e[a],
                                    u = s.util.type(l);
                                "Object" !== u || r[o(l)] ? "Array" !== u || r[o(l)] || (r[o(l)] = !0, t(l, i, a, r)) : (r[o(l)] = !0, t(l, i, null, r))
                            }
                    }
                },
                plugins: {},
                highlightAll: function(t, e) {
                    s.highlightAllUnder(document, t, e)
                },
                highlightAllUnder: function(t, e, i) {
                    var n = {
                        callback: i,
                        container: t,
                        selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                    };
                    s.hooks.run("before-highlightall", n), n.elements = Array.prototype.slice.apply(n.container.querySelectorAll(n.selector)), s.hooks.run("before-all-elements-highlight", n);
                    for (var r, o = 0; r = n.elements[o++];) s.highlightElement(r, !0 === e, n.callback)
                },
                highlightElement: function(i, n, r) {
                    var o = s.util.getLanguage(i),
                        a = s.languages[o];
                    i.className = i.className.replace(e, "").replace(/\s+/g, " ") + " language-" + o;
                    var l = i.parentElement;
                    l && "pre" === l.nodeName.toLowerCase() && (l.className = l.className.replace(e, "").replace(/\s+/g, " ") + " language-" + o);
                    var u = {
                        element: i,
                        language: o,
                        grammar: a,
                        code: i.textContent
                    };

                    function h(t) {
                        u.highlightedCode = t, s.hooks.run("before-insert", u), u.element.innerHTML = u.highlightedCode, s.hooks.run("after-highlight", u), s.hooks.run("complete", u), r && r.call(u.element)
                    }
                    if (s.hooks.run("before-sanity-check", u), (l = u.element.parentElement) && "pre" === l.nodeName.toLowerCase() && !l.hasAttribute("tabindex") && l.setAttribute("tabindex", "0"), !u.code) return s.hooks.run("complete", u), void(r && r.call(u.element));
                    if (s.hooks.run("before-highlight", u), u.grammar) {
                        if (n && t.Worker) {
                            var c = new Worker(s.filename);
                            c.onmessage = function(t) {
                                h(t.data)
                            }, c.postMessage(JSON.stringify({
                                language: u.language,
                                code: u.code,
                                immediateClose: !0
                            }))
                        } else h(s.highlight(u.code, u.grammar, u.language))
                    } else h(s.util.encode(u.code))
                },
                highlight: function(t, e, i) {
                    var n = {
                        code: t,
                        grammar: e,
                        language: i
                    };
                    return s.hooks.run("before-tokenize", n), n.tokens = s.tokenize(n.code, n.grammar), s.hooks.run("after-tokenize", n), r.stringify(s.util.encode(n.tokens), n.language)
                },
                tokenize: function(t, e) {
                    var i = e.rest;
                    if (i) {
                        for (var n in i) e[n] = i[n];
                        delete e.rest
                    }
                    var h = new a;
                    return l(h, h.head, t),
                        function t(e, i, n, a, h, c) {
                            for (var d in n)
                                if (n.hasOwnProperty(d) && n[d]) {
                                    var p = n[d];
                                    p = Array.isArray(p) ? p : [p];
                                    for (var f = 0; f < p.length; ++f) {
                                        if (c && c.cause == d + "," + f) return;
                                        var g = p[f],
                                            m = g.inside,
                                            y = !!g.lookbehind,
                                            v = !!g.greedy,
                                            b = g.alias;
                                        if (v && !g.pattern.global) {
                                            var $ = g.pattern.toString().match(/[imsuy]*$/)[0];
                                            g.pattern = RegExp(g.pattern.source, $ + "g")
                                        }
                                        for (var w = g.pattern || g, _ = a.next, x = 0; _ !== i.tail && !(c && x >= c.reach); x += _.value.length, _ = _.next) {
                                            var S = _.value;
                                            if (i.length > e.length) return;
                                            if (!(S instanceof r)) {
                                                var T, k = 1;
                                                if (v) {
                                                    if (!(T = o(w, x, e, y))) break;
                                                    var C = T.index,
                                                        A = T.index + T[0].length,
                                                        E = x;
                                                    for (E += _.value.length; E <= C;) E += (_ = _.next).value.length;
                                                    if (E -= _.value.length, x = E, _.value instanceof r) continue;
                                                    for (var I = _; I !== i.tail && (E < A || "string" == typeof I.value); I = I.next) k++, E += I.value.length;
                                                    k--, S = e.slice(x, E), T.index -= x
                                                } else if (!(T = o(w, 0, S, y))) continue;
                                                var C = T.index,
                                                    P = T[0],
                                                    z = S.slice(0, C),
                                                    L = S.slice(C + P.length),
                                                    M = x + S.length;
                                                c && M > c.reach && (c.reach = M);
                                                var O = _.prev;
                                                z && (O = l(i, O, z), x += z.length), u(i, O, k);
                                                var D = new r(d, m ? s.tokenize(P, m) : P, b, P);
                                                if (_ = l(i, O, D), L && l(i, _, L), 1 < k) {
                                                    var N = {
                                                        cause: d + "," + f,
                                                        reach: M
                                                    };
                                                    t(e, i, n, _.prev, x, N), c && N.reach > c.reach && (c.reach = N.reach)
                                                }
                                            }
                                        }
                                    }
                                }
                        }(t, h, e, h.head, 0),
                        function(t) {
                            for (var e = [], i = t.head.next; i !== t.tail;) e.push(i.value), i = i.next;
                            return e
                        }(h)
                },
                hooks: {
                    all: {},
                    add: function(t, e) {
                        var i = s.hooks.all;
                        i[t] = i[t] || [], i[t].push(e)
                    },
                    run: function(t, e) {
                        var i = s.hooks.all[t];
                        if (i && i.length)
                            for (var n, r = 0; n = i[r++];) n(e)
                    }
                },
                Token: r
            };

        function r(t, e, i, n) {
            this.type = t, this.content = e, this.alias = i, this.length = 0 | (n || "").length
        }

        function o(t, e, i, n) {
            t.lastIndex = e;
            var s = t.exec(i);
            if (s && n && s[1]) {
                var r = s[1].length;
                s.index += r, s[0] = s[0].slice(r)
            }
            return s
        }

        function a() {
            var t = {
                    value: null,
                    prev: null,
                    next: null
                },
                e = {
                    value: null,
                    prev: t,
                    next: null
                };
            t.next = e, this.head = t, this.tail = e, this.length = 0
        }

        function l(t, e, i) {
            var n = e.next,
                s = {
                    value: i,
                    prev: e,
                    next: n
                };
            return e.next = s, n.prev = s, t.length++, s
        }

        function u(t, e, i) {
            for (var n = e.next, s = 0; s < i && n !== t.tail; s++) n = n.next;
            (e.next = n).prev = e, t.length -= s
        }
        if (t.Prism = s, r.stringify = function t(e, i) {
                if ("string" == typeof e) return e;
                if (Array.isArray(e)) {
                    var n = "";
                    return e.forEach(function(e) {
                        n += t(e, i)
                    }), n
                }
                var r = {
                        type: e.type,
                        content: t(e.content, i),
                        tag: "span",
                        classes: ["token", e.type],
                        attributes: {},
                        language: i
                    },
                    o = e.alias;
                o && (Array.isArray(o) ? Array.prototype.push.apply(r.classes, o) : r.classes.push(o)), s.hooks.run("wrap", r);
                var a = "";
                for (var l in r.attributes) a += " " + l + '="' + (r.attributes[l] || "").replace(/"/g, "&quot;") + '"';
                return "<" + r.tag + ' class="' + r.classes.join(" ") + '"' + a + ">" + r.content + "</" + r.tag + ">"
            }, !t.document) return t.addEventListener && (s.disableWorkerMessageHandler || t.addEventListener("message", function(e) {
            var i = JSON.parse(e.data),
                n = i.language,
                r = i.code,
                o = i.immediateClose;
            t.postMessage(s.highlight(r, s.languages[n], n)), o && t.close()
        }, !1)), s;
        var h = s.util.currentScript();

        function c() {
            s.manual || s.highlightAll()
        }
        if (h && (s.filename = h.src, h.hasAttribute("data-manual") && (s.manual = !0)), !s.manual) {
            var d = document.readyState;
            "loading" === d || "interactive" === d && h && h.defer ? document.addEventListener("DOMContentLoaded", c) : window.requestAnimationFrame ? window.requestAnimationFrame(c) : window.setTimeout(c, 16)
        }
        return s
    }(_self);
"undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism), Prism.languages.markup = {
        comment: /<!--[\s\S]*?-->/,
        prolog: /<\?[\s\S]+?\?>/,
        doctype: {
            pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
            greedy: !0,
            inside: {
                "internal-subset": {
                    pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                    lookbehind: !0,
                    greedy: !0,
                    inside: null
                },
                string: {
                    pattern: /"[^"]*"|'[^']*'/,
                    greedy: !0
                },
                punctuation: /^<!|>$|[[\]]/,
                "doctype-tag": /^DOCTYPE/,
                name: /[^\s<>'"]+/
            }
        },
        cdata: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        tag: {
            pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
            greedy: !0,
            inside: {
                tag: {
                    pattern: /^<\/?[^\s>\/]+/,
                    inside: {
                        punctuation: /^<\/?/,
                        namespace: /^[^\s>\/:]+:/
                    }
                },
                "special-attr": [],
                "attr-value": {
                    pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                    inside: {
                        punctuation: [{
                            pattern: /^=/,
                            alias: "attr-equals"
                        }, /"|'/]
                    }
                },
                punctuation: /\/?>/,
                "attr-name": {
                    pattern: /[^\s>\/]+/,
                    inside: {
                        namespace: /^[^\s>\/:]+:/
                    }
                }
            }
        },
        entity: [{
            pattern: /&[\da-z]{1,8};/i,
            alias: "named-entity"
        }, /&#x?[\da-f]{1,8};/i]
    }, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.languages.markup.doctype.inside["internal-subset"].inside = Prism.languages.markup, Prism.hooks.add("wrap", function(t) {
        "entity" === t.type && (t.attributes.title = t.content.replace(/&amp;/, "&"))
    }), Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
        value: function(t, e) {
            var i = {};
            i["language-" + e] = {
                pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                lookbehind: !0,
                inside: Prism.languages[e]
            }, i.cdata = /^<!\[CDATA\[|\]\]>$/i;
            var n = {
                "included-cdata": {
                    pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                    inside: i
                }
            };
            n["language-" + e] = {
                pattern: /[\s\S]+/,
                inside: Prism.languages[e]
            };
            var s = {};
            s[t] = {
                pattern: RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g, function() {
                    return t
                }), "i"),
                lookbehind: !0,
                greedy: !0,
                inside: n
            }, Prism.languages.insertBefore("markup", "cdata", s)
        }
    }), Object.defineProperty(Prism.languages.markup.tag, "addAttribute", {
        value: function(t, e) {
            Prism.languages.markup.tag.inside["special-attr"].push({
                pattern: RegExp("(^|[\"'\\s])(?:" + t + ")\\s*=\\s*(?:\"[^\"]*\"|'[^']*'|[^\\s'\">=]+(?=[\\s>]))", "i"),
                lookbehind: !0,
                inside: {
                    "attr-name": /^[^\s=]+/,
                    "attr-value": {
                        pattern: /=[\s\S]+/,
                        inside: {
                            value: {
                                pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                                lookbehind: !0,
                                alias: [e, "language-" + e],
                                inside: Prism.languages[e]
                            },
                            punctuation: [{
                                pattern: /^=/,
                                alias: "attr-equals"
                            }, /"|'/]
                        }
                    }
                }
            })
        }
    }), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.xml = Prism.languages.extend("markup", {}), Prism.languages.ssml = Prism.languages.xml, Prism.languages.atom = Prism.languages.xml, Prism.languages.rss = Prism.languages.xml,
    function(t) {
        var e = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
        t.languages.css = {
            comment: /\/\*[\s\S]*?\*\//,
            atrule: {
                pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
                inside: {
                    rule: /^@[\w-]+/,
                    "selector-function-argument": {
                        pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                        lookbehind: !0,
                        alias: "selector"
                    },
                    keyword: {
                        pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                        lookbehind: !0
                    }
                }
            },
            url: {
                pattern: RegExp("\\burl\\((?:" + e.source + "|(?:[^\\\\\r\n()\"']|\\\\[^])*)\\)", "i"),
                greedy: !0,
                inside: {
                    function: /^url/i,
                    punctuation: /^\(|\)$/,
                    string: {
                        pattern: RegExp("^" + e.source + "$"),
                        alias: "url"
                    }
                }
            },
            selector: {
                pattern: RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + e.source + ")*(?=\\s*\\{)"),
                lookbehind: !0
            },
            string: {
                pattern: e,
                greedy: !0
            },
            property: {
                pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
                lookbehind: !0
            },
            important: /!important\b/i,
            function: {
                pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
                lookbehind: !0
            },
            punctuation: /[(){};:,]/
        }, t.languages.css.atrule.inside.rest = t.languages.css;
        var i = t.languages.markup;
        i && (i.tag.addInlined("style", "css"), i.tag.addAttribute("style", "css"))
    }(Prism), Prism.languages.clike = {
        comment: [{
            pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
            lookbehind: !0,
            greedy: !0
        }, {
            pattern: /(^|[^\\:])\/\/.*/,
            lookbehind: !0,
            greedy: !0
        }],
        string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0
        },
        "class-name": {
            pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
            lookbehind: !0,
            inside: {
                punctuation: /[.\\]/
            }
        },
        keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
        boolean: /\b(?:true|false)\b/,
        function: /\b\w+(?=\()/,
        number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
        operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
        punctuation: /[{}[\];(),.:]/
    }, Prism.languages.javascript = Prism.languages.extend("clike", {
        "class-name": [Prism.languages.clike["class-name"], {
            pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,
            lookbehind: !0
        }],
        keyword: [{
            pattern: /((?:^|\})\s*)catch\b/,
            lookbehind: !0
        }, {
            pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
            lookbehind: !0
        }],
        function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
        number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
        operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
    }), Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/, Prism.languages.insertBefore("javascript", "keyword", {
        regex: {
            pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
            lookbehind: !0,
            greedy: !0,
            inside: {
                "regex-source": {
                    pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                    lookbehind: !0,
                    alias: "language-regex",
                    inside: Prism.languages.regex
                },
                "regex-delimiter": /^\/|\/$/,
                "regex-flags": /^[a-z]+$/
            }
        },
        "function-variable": {
            pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
            alias: "function"
        },
        parameter: [{
            pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
            lookbehind: !0,
            inside: Prism.languages.javascript
        }, {
            pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
            lookbehind: !0,
            inside: Prism.languages.javascript
        }, {
            pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
            lookbehind: !0,
            inside: Prism.languages.javascript
        }, {
            pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
            lookbehind: !0,
            inside: Prism.languages.javascript
        }],
        constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
    }), Prism.languages.insertBefore("javascript", "string", {
        hashbang: {
            pattern: /^#!.*/,
            greedy: !0,
            alias: "comment"
        },
        "template-string": {
            pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
            greedy: !0,
            inside: {
                "template-punctuation": {
                    pattern: /^`|`$/,
                    alias: "string"
                },
                interpolation: {
                    pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                    lookbehind: !0,
                    inside: {
                        "interpolation-punctuation": {
                            pattern: /^\$\{|\}$/,
                            alias: "punctuation"
                        },
                        rest: Prism.languages.javascript
                    }
                },
                string: /[\s\S]+/
            }
        }
    }), Prism.languages.markup && (Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.markup.tag.addAttribute("on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)", "javascript")), Prism.languages.js = Prism.languages.javascript,
    function(t) {
        function e(t, e) {
            return "___" + t.toUpperCase() + e + "___"
        }
        Object.defineProperties(t.languages["markup-templating"] = {}, {
            buildPlaceholders: {
                value: function(i, n, s, r) {
                    if (i.language === n) {
                        var o = i.tokenStack = [];
                        i.code = i.code.replace(s, function(t) {
                            if ("function" == typeof r && !r(t)) return t;
                            for (var s, a = o.length; - 1 !== i.code.indexOf(s = e(n, a));) ++a;
                            return o[a] = t, s
                        }), i.grammar = t.languages.markup
                    }
                }
            },
            tokenizePlaceholders: {
                value: function(i, n) {
                    if (i.language === n && i.tokenStack) {
                        i.grammar = t.languages[n];
                        var s = 0,
                            r = Object.keys(i.tokenStack);
                        ! function o(a) {
                            for (var l = 0; l < a.length && !(s >= r.length); l++) {
                                var u = a[l];
                                if ("string" == typeof u || u.content && "string" == typeof u.content) {
                                    var h = r[s],
                                        c = i.tokenStack[h],
                                        d = "string" == typeof u ? u : u.content,
                                        p = e(n, h),
                                        f = d.indexOf(p);
                                    if (-1 < f) {
                                        ++s;
                                        var g = d.substring(0, f),
                                            m = new t.Token(n, t.tokenize(c, i.grammar), "language-" + n, c),
                                            y = d.substring(f + p.length),
                                            v = [];
                                        g && v.push.apply(v, o([g])), v.push(m), y && v.push.apply(v, o([y])), "string" == typeof u ? a.splice.apply(a, [l, 1].concat(v)) : u.content = v
                                    }
                                } else u.content && o(u.content)
                            }
                            return a
                        }(i.tokens)
                    }
                }
            }
        })
    }(Prism),
    function(t) {
        var e = /\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/,
            i = [{
                pattern: /\b(?:false|true)\b/i,
                alias: "boolean"
            }, {
                pattern: /(::\s*)\b[a-z_]\w*\b(?!\s*\()/i,
                greedy: !0,
                lookbehind: !0
            }, {
                pattern: /(\b(?:case|const)\s+)\b[a-z_]\w*(?=\s*[;=])/i,
                greedy: !0,
                lookbehind: !0
            }, /\b(?:null)\b/i, /\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/],
            n = /\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[\da-f]+(?:_[\da-f]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
            s = /<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/,
            r = /[{}\[\](),:;]/;
        t.languages.php = {
            delimiter: {
                pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i,
                alias: "important"
            },
            comment: e,
            variable: /\$+(?:\w+\b|(?=\{))/i,
            package: {
                pattern: /(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
                lookbehind: !0,
                inside: {
                    punctuation: /\\/
                }
            },
            "class-name-definition": {
                pattern: /(\b(?:class|enum|interface|trait)\s+)\b[a-z_]\w*(?!\\)\b/i,
                lookbehind: !0,
                alias: "class-name"
            },
            "function-definition": {
                pattern: /(\bfunction\s+)[a-z_]\w*(?=\s*\()/i,
                lookbehind: !0,
                alias: "function"
            },
            keyword: [{
                pattern: /(\(\s*)\b(?:bool|boolean|int|integer|float|string|object|array)\b(?=\s*\))/i,
                alias: "type-casting",
                greedy: !0,
                lookbehind: !0
            }, {
                pattern: /([(,?]\s*)\b(?:bool|int|float|string|object|array(?!\s*\()|mixed|self|static|callable|iterable|(?:null|false)(?=\s*\|))\b(?=\s*\$)/i,
                alias: "type-hint",
                greedy: !0,
                lookbehind: !0
            }, {
                pattern: /([(,?]\s*[\w|]\|\s*)(?:null|false)\b(?=\s*\$)/i,
                alias: "type-hint",
                greedy: !0,
                lookbehind: !0
            }, {
                pattern: /(\)\s*:\s*(?:\?\s*)?)\b(?:bool|int|float|string|object|void|array(?!\s*\()|mixed|self|static|callable|iterable|(?:null|false)(?=\s*\|))\b/i,
                alias: "return-type",
                greedy: !0,
                lookbehind: !0
            }, {
                pattern: /(\)\s*:\s*(?:\?\s*)?[\w|]\|\s*)(?:null|false)\b/i,
                alias: "return-type",
                greedy: !0,
                lookbehind: !0
            }, {
                pattern: /\b(?:bool|int|float|string|object|void|array(?!\s*\()|mixed|iterable|(?:null|false)(?=\s*\|))\b/i,
                alias: "type-declaration",
                greedy: !0
            }, {
                pattern: /(\|\s*)(?:null|false)\b/i,
                alias: "type-declaration",
                greedy: !0,
                lookbehind: !0
            }, {
                pattern: /\b(?:parent|self|static)(?=\s*::)/i,
                alias: "static-context",
                greedy: !0
            }, {
                pattern: /(\byield\s+)from\b/i,
                lookbehind: !0
            }, /\bclass\b/i, {
                pattern: /((?:^|[^\s>:]|(?:^|[^-])>|(?:^|[^:]):)\s*)\b(?:__halt_compiler|abstract|and|array|as|break|callable|case|catch|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|enum|eval|exit|extends|final|finally|fn|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|match|new|or|parent|print|private|protected|public|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield)\b/i,
                lookbehind: !0
            }],
            "argument-name": {
                pattern: /([(,]\s+)\b[a-z_]\w*(?=\s*:(?!:))/i,
                lookbehind: !0
            },
            "class-name": [{
                pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i,
                greedy: !0,
                lookbehind: !0
            }, {
                pattern: /(\|\s*)\b[a-z_]\w*(?!\\)\b/i,
                greedy: !0,
                lookbehind: !0
            }, {
                pattern: /\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i,
                greedy: !0
            }, {
                pattern: /(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i,
                alias: "class-name-fully-qualified",
                greedy: !0,
                lookbehind: !0,
                inside: {
                    punctuation: /\\/
                }
            }, {
                pattern: /(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i,
                alias: "class-name-fully-qualified",
                greedy: !0,
                inside: {
                    punctuation: /\\/
                }
            }, {
                pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
                alias: "class-name-fully-qualified",
                greedy: !0,
                lookbehind: !0,
                inside: {
                    punctuation: /\\/
                }
            }, {
                pattern: /\b[a-z_]\w*(?=\s*\$)/i,
                alias: "type-declaration",
                greedy: !0
            }, {
                pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
                alias: ["class-name-fully-qualified", "type-declaration"],
                greedy: !0,
                inside: {
                    punctuation: /\\/
                }
            }, {
                pattern: /\b[a-z_]\w*(?=\s*::)/i,
                alias: "static-context",
                greedy: !0
            }, {
                pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*::)/i,
                alias: ["class-name-fully-qualified", "static-context"],
                greedy: !0,
                inside: {
                    punctuation: /\\/
                }
            }, {
                pattern: /([(,?]\s*)[a-z_]\w*(?=\s*\$)/i,
                alias: "type-hint",
                greedy: !0,
                lookbehind: !0
            }, {
                pattern: /([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
                alias: ["class-name-fully-qualified", "type-hint"],
                greedy: !0,
                lookbehind: !0,
                inside: {
                    punctuation: /\\/
                }
            }, {
                pattern: /(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i,
                alias: "return-type",
                greedy: !0,
                lookbehind: !0
            }, {
                pattern: /(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
                alias: ["class-name-fully-qualified", "return-type"],
                greedy: !0,
                lookbehind: !0,
                inside: {
                    punctuation: /\\/
                }
            }],
            constant: i,
            function: {
                pattern: /(^|[^\\\w])\\?[a-z_](?:[\w\\]*\w)?(?=\s*\()/i,
                lookbehind: !0,
                inside: {
                    punctuation: /\\/
                }
            },
            property: {
                pattern: /(->\s*)\w+/,
                lookbehind: !0
            },
            number: n,
            operator: s,
            punctuation: r
        };
        var o = {
                pattern: /\{\$(?:\{(?:\{[^{}]+\}|[^{}]+)\}|[^{}])+\}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)?)/,
                lookbehind: !0,
                inside: t.languages.php
            },
            a = [{
                pattern: /<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,
                alias: "nowdoc-string",
                greedy: !0,
                inside: {
                    delimiter: {
                        pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
                        alias: "symbol",
                        inside: {
                            punctuation: /^<<<'?|[';]$/
                        }
                    }
                }
            }, {
                pattern: /<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,
                alias: "heredoc-string",
                greedy: !0,
                inside: {
                    delimiter: {
                        pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
                        alias: "symbol",
                        inside: {
                            punctuation: /^<<<"?|[";]$/
                        }
                    },
                    interpolation: o
                }
            }, {
                pattern: /`(?:\\[\s\S]|[^\\`])*`/,
                alias: "backtick-quoted-string",
                greedy: !0
            }, {
                pattern: /'(?:\\[\s\S]|[^\\'])*'/,
                alias: "single-quoted-string",
                greedy: !0
            }, {
                pattern: /"(?:\\[\s\S]|[^\\"])*"/,
                alias: "double-quoted-string",
                greedy: !0,
                inside: {
                    interpolation: o
                }
            }];
        t.languages.insertBefore("php", "variable", {
            string: a,
            attribute: {
                pattern: /#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im,
                greedy: !0,
                inside: {
                    "attribute-content": {
                        pattern: /^(#\[)[\s\S]+(?=\]$)/,
                        lookbehind: !0,
                        inside: {
                            comment: e,
                            string: a,
                            "attribute-class-name": [{
                                pattern: /([^:]|^)\b[a-z_]\w*(?!\\)\b/i,
                                alias: "class-name",
                                greedy: !0,
                                lookbehind: !0
                            }, {
                                pattern: /([^:]|^)(?:\\?\b[a-z_]\w*)+/i,
                                alias: ["class-name", "class-name-fully-qualified"],
                                greedy: !0,
                                lookbehind: !0,
                                inside: {
                                    punctuation: /\\/
                                }
                            }],
                            constant: i,
                            number: n,
                            operator: s,
                            punctuation: r
                        }
                    },
                    delimiter: {
                        pattern: /^#\[|\]$/,
                        alias: "punctuation"
                    }
                }
            }
        }), t.hooks.add("before-tokenize", function(e) {
            /<\?/.test(e.code) && t.languages["markup-templating"].buildPlaceholders(e, "php", /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/gi)
        }), t.hooks.add("after-tokenize", function(e) {
            t.languages["markup-templating"].tokenizePlaceholders(e, "php")
        })
    }(Prism),
    function(t) {
        t.languages.sass = t.languages.extend("css", {
            comment: {
                pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,
                lookbehind: !0,
                greedy: !0
            }
        }), t.languages.insertBefore("sass", "atrule", {
            "atrule-line": {
                pattern: /^(?:[ \t]*)[@+=].+/m,
                greedy: !0,
                inside: {
                    atrule: /(?:@[\w-]+|[+=])/m
                }
            }
        }), delete t.languages.sass.atrule;
        var e = /\$[-\w]+|#\{\$[-\w]+\}/,
            i = [/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/, {
                pattern: /(\s)-(?=\s)/,
                lookbehind: !0
            }];
        t.languages.insertBefore("sass", "property", {
            "variable-line": {
                pattern: /^[ \t]*\$.+/m,
                greedy: !0,
                inside: {
                    punctuation: /:/,
                    variable: e,
                    operator: i
                }
            },
            "property-line": {
                pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,
                greedy: !0,
                inside: {
                    property: [/[^:\s]+(?=\s*:)/, {
                        pattern: /(:)[^:\s]+/,
                        lookbehind: !0
                    }],
                    punctuation: /:/,
                    variable: e,
                    operator: i,
                    important: t.languages.sass.important
                }
            }
        }), delete t.languages.sass.property, delete t.languages.sass.important, t.languages.insertBefore("sass", "punctuation", {
            selector: {
                pattern: /^([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/m,
                lookbehind: !0,
                greedy: !0
            }
        })
    }(Prism), Prism.languages.scss = Prism.languages.extend("css", {
        comment: {
            pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
            lookbehind: !0
        },
        atrule: {
            pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
            inside: {
                rule: /@[\w-]+/
            }
        },
        url: /(?:[-a-z]+-)?url(?=\()/i,
        selector: {
            pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/m,
            inside: {
                parent: {
                    pattern: /&/,
                    alias: "important"
                },
                placeholder: /%[-\w]+/,
                variable: /\$[-\w]+|#\{\$[-\w]+\}/
            }
        },
        property: {
            pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
            inside: {
                variable: /\$[-\w]+|#\{\$[-\w]+\}/
            }
        }
    }), Prism.languages.insertBefore("scss", "atrule", {
        keyword: [/@(?:if|else(?: if)?|forward|for|each|while|import|use|extend|debug|warn|mixin|include|function|return|content)\b/i, {
            pattern: /( )(?:from|through)(?= )/,
            lookbehind: !0
        }]
    }), Prism.languages.insertBefore("scss", "important", {
        variable: /\$[-\w]+|#\{\$[-\w]+\}/
    }), Prism.languages.insertBefore("scss", "function", {
        "module-modifier": {
            pattern: /\b(?:as|with|show|hide)\b/i,
            alias: "keyword"
        },
        placeholder: {
            pattern: /%[-\w]+/,
            alias: "selector"
        },
        statement: {
            pattern: /\B!(?:default|optional)\b/i,
            alias: "keyword"
        },
        boolean: /\b(?:true|false)\b/,
        null: {
            pattern: /\bnull\b/,
            alias: "keyword"
        },
        operator: {
            pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
            lookbehind: !0
        }
    }), Prism.languages.scss.atrule.inside.rest = Prism.languages.scss,
    function(t) {
        if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
        else if ("function" == typeof define && define.amd) define([], t);
        else {
            var e;
            (e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).ProgressBar = t()
        }
    }(function() {
        var t;
        return (function t(e, i, n) {
            function s(o, a) {
                if (!i[o]) {
                    if (!e[o]) {
                        var l = "function" == typeof require && require;
                        if (!a && l) return l(o, !0);
                        if (r) return r(o, !0);
                        var u = Error("Cannot find module '" + o + "'");
                        throw u.code = "MODULE_NOT_FOUND", u
                    }
                    var h = i[o] = {
                        exports: {}
                    };
                    e[o][0].call(h.exports, function(t) {
                        var i;
                        return s(e[o][1][t] || t)
                    }, h, h.exports, t, e, i, n)
                }
                return i[o].exports
            }
            for (var r = "function" == typeof require && require, o = 0; o < n.length; o++) s(n[o]);
            return s
        })({
            1: [function(e, i, n) {
                (function() {
                    var e = this || Function("return this")(),
                        s = function() {
                            "use strict";

                            function s() {}

                            function r(t, e) {
                                var i;
                                for (i in t) Object.hasOwnProperty.call(t, i) && e(i)
                            }

                            function o(t, e) {
                                return r(e, function(i) {
                                    t[i] = e[i]
                                }), t
                            }

                            function a(t, e) {
                                r(e, function(i) {
                                    void 0 === t[i] && (t[i] = e[i])
                                })
                            }

                            function l(t, e, i, n, s, r, o) {
                                var a, l, h, c = r > t ? 0 : (t - r) / s;
                                for (a in e) e.hasOwnProperty(a) && (h = "function" == typeof(l = o[a]) ? l : v[l], e[a] = u(i[a], n[a], h, c));
                                return e
                            }

                            function u(t, e, i, n) {
                                return t + (e - t) * i(n)
                            }

                            function h(t, e) {
                                var i = p.prototype.filter,
                                    n = t._filterArgs;
                                r(i, function(s) {
                                    void 0 !== i[s][e] && i[s][e].apply(t, n)
                                })
                            }

                            function c(t, e, i, n, s, r, o, a, u, c, d) {
                                f = e + i + n, m = (g = Math.min(d || S(), f)) >= f, y = n - (f - g), t.isPlaying() && (m ? (u(o, t._attachment, y), t.stop(!0)) : (t._scheduleId = c(t._timeoutHandler, _), h(t, "beforeTween"), e + i > g ? l(1, s, r, o, 1, 1, a) : l(g, s, r, o, n, e + i, a), h(t, "afterTween"), u(s, t._attachment, y)))
                            }

                            function d(t, e) {
                                var i = {},
                                    n = typeof e;
                                return "string" === n || "function" === n ? r(t, function(t) {
                                    i[t] = e
                                }) : r(t, function(t) {
                                    i[t] || (i[t] = e[t] || $)
                                }), i
                            }

                            function p(t, e) {
                                this._currentState = t || {}, this._configured = !1, this._scheduleFunction = b, void 0 !== e && this.setConfig(e)
                            }
                            var f, g, m, y, v, b, $ = "linear",
                                w = 500,
                                _ = 1e3 / 60,
                                x = Date.now ? Date.now : function() {
                                    return +new Date
                                },
                                S = "undefined" != typeof SHIFTY_DEBUG_NOW ? SHIFTY_DEBUG_NOW : x;
                            return b = "undefined" != typeof window && (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || window.mozCancelRequestAnimationFrame && window.mozRequestAnimationFrame) || setTimeout, p.prototype.tween = function(t) {
                                return this._isTweening ? this : (void 0 === t && this._configured || this.setConfig(t), this._timestamp = S(), this._start(this.get(), this._attachment), this.resume())
                            }, p.prototype.setConfig = function(t) {
                                t = t || {}, this._configured = !0, this._attachment = t.attachment, this._pausedAtTime = null, this._scheduleId = null, this._delay = t.delay || 0, this._start = t.start || s, this._step = t.step || s, this._finish = t.finish || s, this._duration = t.duration || w, this._currentState = o({}, t.from) || this.get(), this._originalState = this.get(), this._targetState = o({}, t.to) || this.get();
                                var e = this;
                                this._timeoutHandler = function() {
                                    c(e, e._timestamp, e._delay, e._duration, e._currentState, e._originalState, e._targetState, e._easing, e._step, e._scheduleFunction)
                                };
                                var i = this._currentState,
                                    n = this._targetState;
                                return a(n, i), this._easing = d(i, t.easing || $), this._filterArgs = [i, this._originalState, n, this._easing], h(this, "tweenCreated"), this
                            }, p.prototype.get = function() {
                                return o({}, this._currentState)
                            }, p.prototype.set = function(t) {
                                this._currentState = t
                            }, p.prototype.pause = function() {
                                return this._pausedAtTime = S(), this._isPaused = !0, this
                            }, p.prototype.resume = function() {
                                return this._isPaused && (this._timestamp += S() - this._pausedAtTime), this._isPaused = !1, this._isTweening = !0, this._timeoutHandler(), this
                            }, p.prototype.seek = function(t) {
                                t = Math.max(t, 0);
                                var e = S();
                                return this._timestamp + t === 0 || (this._timestamp = e - t, this.isPlaying() || (this._isTweening = !0, this._isPaused = !1, c(this, this._timestamp, this._delay, this._duration, this._currentState, this._originalState, this._targetState, this._easing, this._step, this._scheduleFunction, e), this.pause())), this
                            }, p.prototype.stop = function(t) {
                                return this._isTweening = !1, this._isPaused = !1, this._timeoutHandler = s, (e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.oCancelAnimationFrame || e.msCancelAnimationFrame || e.mozCancelRequestAnimationFrame || e.clearTimeout)(this._scheduleId), t && (h(this, "beforeTween"), l(1, this._currentState, this._originalState, this._targetState, 1, 0, this._easing), h(this, "afterTween"), h(this, "afterTweenEnd"), this._finish.call(this, this._currentState, this._attachment)), this
                            }, p.prototype.isPlaying = function() {
                                return this._isTweening && !this._isPaused
                            }, p.prototype.setScheduleFunction = function(t) {
                                this._scheduleFunction = t
                            }, p.prototype.dispose = function() {
                                var t;
                                for (t in this) this.hasOwnProperty(t) && delete this[t]
                            }, p.prototype.filter = {}, p.prototype.formula = {
                                linear: function(t) {
                                    return t
                                }
                            }, v = p.prototype.formula, o(p, {
                                now: S,
                                each: r,
                                tweenProps: l,
                                tweenProp: u,
                                applyFilter: h,
                                shallowCopy: o,
                                defaults: a,
                                composeEasingObject: d
                            }), "function" == typeof SHIFTY_DEBUG_NOW && (e.timeoutHandler = c), "object" == typeof n ? i.exports = p : "function" == typeof t && t.amd ? t(function() {
                                return p
                            }) : void 0 === e.Tweenable && (e.Tweenable = p), p
                        }();
                    s.shallowCopy(s.prototype.formula, {
                            easeInQuad: function(t) {
                                return Math.pow(t, 2)
                            },
                            easeOutQuad: function(t) {
                                return -(Math.pow(t - 1, 2) - 1)
                            },
                            easeInOutQuad: function(t) {
                                return (t /= .5) < 1 ? .5 * Math.pow(t, 2) : -.5 * ((t -= 2) * t - 2)
                            },
                            easeInCubic: function(t) {
                                return Math.pow(t, 3)
                            },
                            easeOutCubic: function(t) {
                                return Math.pow(t - 1, 3) + 1
                            },
                            easeInOutCubic: function(t) {
                                return (t /= .5) < 1 ? .5 * Math.pow(t, 3) : .5 * (Math.pow(t - 2, 3) + 2)
                            },
                            easeInQuart: function(t) {
                                return Math.pow(t, 4)
                            },
                            easeOutQuart: function(t) {
                                return -(Math.pow(t - 1, 4) - 1)
                            },
                            easeInOutQuart: function(t) {
                                return (t /= .5) < 1 ? .5 * Math.pow(t, 4) : -.5 * ((t -= 2) * Math.pow(t, 3) - 2)
                            },
                            easeInQuint: function(t) {
                                return Math.pow(t, 5)
                            },
                            easeOutQuint: function(t) {
                                return Math.pow(t - 1, 5) + 1
                            },
                            easeInOutQuint: function(t) {
                                return (t /= .5) < 1 ? .5 * Math.pow(t, 5) : .5 * (Math.pow(t - 2, 5) + 2)
                            },
                            easeInSine: function(t) {
                                return -Math.cos(t * (Math.PI / 2)) + 1
                            },
                            easeOutSine: function(t) {
                                return Math.sin(t * (Math.PI / 2))
                            },
                            easeInOutSine: function(t) {
                                return -.5 * (Math.cos(Math.PI * t) - 1)
                            },
                            easeInExpo: function(t) {
                                return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
                            },
                            easeOutExpo: function(t) {
                                return 1 === t ? 1 : -Math.pow(2, -10 * t) + 1
                            },
                            easeInOutExpo: function(t) {
                                return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (-Math.pow(2, -10 * --t) + 2)
                            },
                            easeInCirc: function(t) {
                                return -(Math.sqrt(1 - t * t) - 1)
                            },
                            easeOutCirc: function(t) {
                                return Math.sqrt(1 - Math.pow(t - 1, 2))
                            },
                            easeInOutCirc: function(t) {
                                return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                            },
                            easeOutBounce: function(t) {
                                return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                            },
                            easeInBack: function(t) {
                                var e = 1.70158;
                                return t * t * ((e + 1) * t - e)
                            },
                            easeOutBack: function(t) {
                                var e = 1.70158;
                                return (t -= 1) * t * ((e + 1) * t + e) + 1
                            },
                            easeInOutBack: function(t) {
                                var e = 1.70158;
                                return (t /= .5) < 1 ? .5 * (t * t * (((e *= 1.525) + 1) * t - e)) : .5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2)
                            },
                            elastic: function(t) {
                                return -1 * Math.pow(4, -8 * t) * Math.sin((6 * t - 1) * (2 * Math.PI) / 2) + 1
                            },
                            swingFromTo: function(t) {
                                var e = 1.70158;
                                return (t /= .5) < 1 ? .5 * (t * t * (((e *= 1.525) + 1) * t - e)) : .5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2)
                            },
                            swingFrom: function(t) {
                                var e = 1.70158;
                                return t * t * ((e + 1) * t - e)
                            },
                            swingTo: function(t) {
                                var e = 1.70158;
                                return (t -= 1) * t * ((e + 1) * t + e) + 1
                            },
                            bounce: function(t) {
                                return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                            },
                            bouncePast: function(t) {
                                return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 2 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 2 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 2 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                            },
                            easeFromTo: function(t) {
                                return (t /= .5) < 1 ? .5 * Math.pow(t, 4) : -.5 * ((t -= 2) * Math.pow(t, 3) - 2)
                            },
                            easeFrom: function(t) {
                                return Math.pow(t, 4)
                            },
                            easeTo: function(t) {
                                return Math.pow(t, .25)
                            }
                        }),
                        function() {
                            function t(t, e, i, n, s, r) {
                                function o(t) {
                                    return ((p * t + f) * t + g) * t
                                }

                                function a(t) {
                                    return ((m * t + y) * t + v) * t
                                }

                                function l(t) {
                                    return (3 * p * t + 2 * f) * t + g
                                }

                                function u(t) {
                                    return 1 / (200 * t)
                                }

                                function h(t, e) {
                                    return a(d(t, e))
                                }

                                function c(t) {
                                    return t >= 0 ? t : 0 - t
                                }

                                function d(t, e) {
                                    var i, n, s, r, a, u;
                                    for (s = t, u = 0; 8 > u; u++) {
                                        if (c(r = o(s) - t) < e) return s;
                                        if (1e-6 > c(a = l(s))) break;
                                        s -= r / a
                                    }
                                    if (n = 1, (i = 0) > (s = t)) return i;
                                    if (s > n) return n;
                                    for (; n > i && !(c((r = o(s)) - t) < e);) t > r ? i = s : n = s, s = .5 * (n - i) + i;
                                    return s
                                }
                                var p = 0,
                                    f = 0,
                                    g = 0,
                                    m = 0,
                                    y = 0,
                                    v = 0;
                                return g = 3 * e, f = 3 * (n - e) - g, p = 1 - g - f, v = 3 * i, y = 3 * (s - i) - v, m = 1 - v - y, h(t, u(r))
                            }

                            function e(e, i, n, s) {
                                return function(r) {
                                    return t(r, e, i, n, s, 1)
                                }
                            }
                            s.setBezierFunction = function(t, i, n, r, o) {
                                var a = e(i, n, r, o);
                                return a.displayName = t, a.x1 = i, a.y1 = n, a.x2 = r, a.y2 = o, s.prototype.formula[t] = a
                            }, s.unsetBezierFunction = function(t) {
                                delete s.prototype.formula[t]
                            }
                        }(),
                        function() {
                            function t(t, e, i, n, r, o) {
                                return s.tweenProps(n, e, t, i, 1, o, r)
                            }
                            var e = new s;
                            e._filterArgs = [], s.interpolate = function(i, n, r, o, a) {
                                var l = s.shallowCopy({}, i),
                                    u = a || 0,
                                    h = s.composeEasingObject(i, o || "linear");
                                e.set({});
                                var c = e._filterArgs;
                                c.length = 0, c[0] = l, c[1] = i, c[2] = n, c[3] = h, s.applyFilter(e, "tweenCreated"), s.applyFilter(e, "beforeTween");
                                var d = t(i, l, n, r, h, u);
                                return s.applyFilter(e, "afterTween"), d
                            }
                        }(),
                        function(t) {
                            function e(t, e) {
                                var i, n = [],
                                    s = t.length;
                                for (i = 0; s > i; i++) n.push("_" + e + "_" + i);
                                return n
                            }

                            function i(t) {
                                var e = t.match(w);
                                return e ? (1 === e.length || t[0].match($)) && e.unshift("") : e = ["", ""], e.join(k)
                            }

                            function n(e) {
                                t.each(e, function(t) {
                                    var i = e[t];
                                    "string" == typeof i && i.match(T) && (e[t] = s(i))
                                })
                            }

                            function s(t) {
                                return l(T, t, r)
                            }

                            function r(t) {
                                var e = o(t);
                                return "rgb(" + e[0] + "," + e[1] + "," + e[2] + ")"
                            }

                            function o(t) {
                                return 3 === (t = t.replace(/#/, "")).length && (t = (t = t.split(""))[0] + t[0] + t[1] + t[1] + t[2] + t[2]), C[0] = a(t.substr(0, 2)), C[1] = a(t.substr(2, 2)), C[2] = a(t.substr(4, 2)), C
                            }

                            function a(t) {
                                return parseInt(t, 16)
                            }

                            function l(t, e, i) {
                                var n = e.match(t),
                                    s = e.replace(t, k);
                                if (n)
                                    for (var r, o = n.length, a = 0; o > a; a++) r = n.shift(), s = s.replace(k, i(r));
                                return s
                            }

                            function u(t) {
                                return l(x, t, h)
                            }

                            function h(t) {
                                for (var e = t.match(_), i = e.length, n = t.match(S)[0], s = 0; i > s; s++) n += parseInt(e[s], 10) + ",";
                                return n.slice(0, -1) + ")"
                            }

                            function c(n) {
                                var s = {};
                                return t.each(n, function(t) {
                                    var r = n[t];
                                    if ("string" == typeof r) {
                                        var o = y(r);
                                        s[t] = {
                                            formatString: i(r),
                                            chunkNames: e(o, t)
                                        }
                                    }
                                }), s
                            }

                            function d(e, i) {
                                t.each(i, function(t) {
                                    for (var n = e[t], s = y(n), r = s.length, o = 0; r > o; o++) e[i[t].chunkNames[o]] = +s[o];
                                    delete e[t]
                                })
                            }

                            function p(e, i) {
                                t.each(i, function(t) {
                                    var n = e[t],
                                        s = f(e, i[t].chunkNames),
                                        r = g(s, i[t].chunkNames);
                                    n = m(i[t].formatString, r), e[t] = u(n)
                                })
                            }

                            function f(t, e) {
                                for (var i, n = {}, s = e.length, r = 0; s > r; r++) n[i = e[r]] = t[i], delete t[i];
                                return n
                            }

                            function g(t, e) {
                                A.length = 0;
                                for (var i = e.length, n = 0; i > n; n++) A.push(t[e[n]]);
                                return A
                            }

                            function m(t, e) {
                                for (var i = t, n = e.length, s = 0; n > s; s++) i = i.replace(k, +e[s].toFixed(4));
                                return i
                            }

                            function y(t) {
                                return t.match(_)
                            }

                            function v(e, i) {
                                t.each(i, function(t) {
                                    var n, s = i[t].chunkNames,
                                        r = s.length,
                                        o = e[t];
                                    if ("string" == typeof o) {
                                        var a = o.split(" "),
                                            l = a[a.length - 1];
                                        for (n = 0; r > n; n++) e[s[n]] = a[n] || l
                                    } else
                                        for (n = 0; r > n; n++) e[s[n]] = o;
                                    delete e[t]
                                })
                            }

                            function b(e, i) {
                                t.each(i, function(t) {
                                    var n = i[t].chunkNames,
                                        s = n.length,
                                        r = e[n[0]];
                                    if ("string" == typeof r) {
                                        for (var o = "", a = 0; s > a; a++) o += " " + e[n[a]], delete e[n[a]];
                                        e[t] = o.substr(1)
                                    } else e[t] = r
                                })
                            }
                            var $ = /(\d|\-|\.)/,
                                w = /([^\-0-9\.]+)/g,
                                _ = /[0-9.\-]+/g,
                                x = RegExp("rgb\\(" + _.source + /,\s*/.source + _.source + /,\s*/.source + _.source + "\\)", "g"),
                                S = /^.*\(/,
                                T = /#([0-9]|[a-f]){3,6}/gi,
                                k = "VAL",
                                C = [],
                                A = [];
                            t.prototype.filter.token = {
                                tweenCreated: function(t, e, i, s) {
                                    n(t), n(e), n(i), this._tokenData = c(t)
                                },
                                beforeTween: function(t, e, i, n) {
                                    v(n, this._tokenData), d(t, this._tokenData), d(e, this._tokenData), d(i, this._tokenData)
                                },
                                afterTween: function(t, e, i, n) {
                                    p(t, this._tokenData), p(e, this._tokenData), p(i, this._tokenData), b(n, this._tokenData)
                                }
                            }
                        }(s)
                }).call(null)
            }, {}],
            2: [function(t, e, i) {
                var n = t("./shape"),
                    s = t("./utils"),
                    r = function(t, e) {
                        this._pathTemplate = "M 50,50 m 0,-{radius} a {radius},{radius} 0 1 1 0,{2radius} a {radius},{radius} 0 1 1 0,-{2radius}", this.containerAspectRatio = 1, n.apply(this, arguments)
                    };
                r.prototype = new n, r.prototype.constructor = r, r.prototype._pathString = function(t) {
                    var e = t.strokeWidth;
                    t.trailWidth && t.trailWidth > t.strokeWidth && (e = t.trailWidth);
                    var i = 50 - e / 2;
                    return s.render(this._pathTemplate, {
                        radius: i,
                        "2radius": 2 * i
                    })
                }, r.prototype._trailString = function(t) {
                    return this._pathString(t)
                }, e.exports = r
            }, {
                "./shape": 7,
                "./utils": 8
            }],
            3: [function(t, e, i) {
                var n = t("./shape"),
                    s = t("./utils"),
                    r = function(t, e) {
                        this._pathTemplate = "M 0,{center} L 100,{center}", n.apply(this, arguments)
                    };
                r.prototype = new n, r.prototype.constructor = r, r.prototype._initializeSvg = function(t, e) {
                    t.setAttribute("viewBox", "0 0 100 " + e.strokeWidth), t.setAttribute("preserveAspectRatio", "none")
                }, r.prototype._pathString = function(t) {
                    return s.render(this._pathTemplate, {
                        center: t.strokeWidth / 2
                    })
                }, r.prototype._trailString = function(t) {
                    return this._pathString(t)
                }, e.exports = r
            }, {
                "./shape": 7,
                "./utils": 8
            }],
            4: [function(t, e, i) {
                e.exports = {
                    Line: t("./line"),
                    Circle: t("./circle"),
                    SemiCircle: t("./semicircle"),
                    Path: t("./path"),
                    Shape: t("./shape"),
                    utils: t("./utils")
                }
            }, {
                "./circle": 2,
                "./line": 3,
                "./path": 5,
                "./semicircle": 6,
                "./shape": 7,
                "./utils": 8
            }],
            5: [function(t, e, i) {
                var n = t("shifty"),
                    s = t("./utils"),
                    r = {
                        easeIn: "easeInCubic",
                        easeOut: "easeOutCubic",
                        easeInOut: "easeInOutCubic"
                    },
                    o = function t(e, i) {
                        if (!(this instanceof t)) throw Error("Constructor was called without new keyword");
                        i = s.extend({
                            duration: 800,
                            easing: "linear",
                            from: {},
                            to: {},
                            step: function() {}
                        }, i), n = s.isString(e) ? document.querySelector(e) : e, this.path = n, this._opts = i, this._tweenable = null;
                        var n, r = this.path.getTotalLength();
                        this.path.style.strokeDasharray = r + " " + r, this.set(0)
                    };
                o.prototype.value = function() {
                    var t;
                    return parseFloat((1 - this._getComputedDashOffset() / this.path.getTotalLength()).toFixed(6), 10)
                }, o.prototype.set = function(t) {
                    this.stop(), this.path.style.strokeDashoffset = this._progressToOffset(t);
                    var e = this._opts.step;
                    if (s.isFunction(e)) {
                        var i, n = this._easing(this._opts.easing);
                        e(this._calculateTo(t, n), this._opts.shape || this, this._opts.attachment)
                    }
                }, o.prototype.stop = function() {
                    this._stopTween(), this.path.style.strokeDashoffset = this._getComputedDashOffset()
                }, o.prototype.animate = function(t, e, i) {
                    e = e || {}, s.isFunction(e) && (i = e, e = {});
                    var r = s.extend({}, e),
                        o = s.extend({}, this._opts);
                    e = s.extend(o, e);
                    var a = this._easing(e.easing),
                        l = this._resolveFromAndTo(t, a, r);
                    this.stop(), this.path.getBoundingClientRect();
                    var u = this._getComputedDashOffset(),
                        h = this._progressToOffset(t),
                        c = this;
                    this._tweenable = new n, this._tweenable.tween({
                        from: s.extend({
                            offset: u
                        }, l.from),
                        to: s.extend({
                            offset: h
                        }, l.to),
                        duration: e.duration,
                        easing: a,
                        step: function(t) {
                            c.path.style.strokeDashoffset = t.offset;
                            var i = e.shape || c;
                            e.step(t, i, e.attachment)
                        },
                        finish: function(t) {
                            s.isFunction(i) && i()
                        }
                    })
                }, o.prototype._getComputedDashOffset = function() {
                    return parseFloat(window.getComputedStyle(this.path, null).getPropertyValue("stroke-dashoffset"), 10)
                }, o.prototype._progressToOffset = function(t) {
                    var e = this.path.getTotalLength();
                    return e - t * e
                }, o.prototype._resolveFromAndTo = function(t, e, i) {
                    return i.from && i.to ? {
                        from: i.from,
                        to: i.to
                    } : {
                        from: this._calculateFrom(e),
                        to: this._calculateTo(t, e)
                    }
                }, o.prototype._calculateFrom = function(t) {
                    return n.interpolate(this._opts.from, this._opts.to, this.value(), t)
                }, o.prototype._calculateTo = function(t, e) {
                    return n.interpolate(this._opts.from, this._opts.to, t, e)
                }, o.prototype._stopTween = function() {
                    null !== this._tweenable && (this._tweenable.stop(), this._tweenable = null)
                }, o.prototype._easing = function(t) {
                    return r.hasOwnProperty(t) ? r[t] : t
                }, e.exports = o
            }, {
                "./utils": 8,
                shifty: 1
            }],
            6: [function(t, e, i) {
                var n = t("./shape"),
                    s = t("./circle"),
                    r = t("./utils"),
                    o = function(t, e) {
                        this._pathTemplate = "M 50,50 m -{radius},0 a {radius},{radius} 0 1 1 {2radius},0", this.containerAspectRatio = 2, n.apply(this, arguments)
                    };
                o.prototype = new n, o.prototype.constructor = o, o.prototype._initializeSvg = function(t, e) {
                    t.setAttribute("viewBox", "0 0 100 50")
                }, o.prototype._initializeTextContainer = function(t, e, i) {
                    t.text.style && (i.style.top = "auto", i.style.bottom = "0", t.text.alignToBottom ? r.setStyle(i, "transform", "translate(-50%, 0)") : r.setStyle(i, "transform", "translate(-50%, 50%)"))
                }, o.prototype._pathString = s.prototype._pathString, o.prototype._trailString = s.prototype._trailString, e.exports = o
            }, {
                "./circle": 2,
                "./shape": 7,
                "./utils": 8
            }],
            7: [function(t, e, i) {
                var n = t("./path"),
                    s = t("./utils"),
                    r = "Object is destroyed",
                    o = function t(e, i) {
                        if (!(this instanceof t)) throw Error("Constructor was called without new keyword");
                        if (0 !== arguments.length) {
                            this._opts = s.extend({
                                color: "#555",
                                strokeWidth: 1,
                                trailColor: null,
                                trailWidth: null,
                                fill: null,
                                text: {
                                    style: {
                                        color: null,
                                        position: "absolute",
                                        left: "50%",
                                        top: "50%",
                                        padding: 0,
                                        margin: 0,
                                        transform: {
                                            prefix: !0,
                                            value: "translate(-50%, -50%)"
                                        }
                                    },
                                    autoStyleContainer: !0,
                                    alignToBottom: !0,
                                    value: null,
                                    className: "progressbar-text"
                                },
                                svgStyle: {
                                    display: "block",
                                    width: "100%"
                                },
                                warnings: !1
                            }, i, !0), s.isObject(i) && void 0 !== i.svgStyle && (this._opts.svgStyle = i.svgStyle), s.isObject(i) && s.isObject(i.text) && void 0 !== i.text.style && (this._opts.text.style = i.text.style);
                            var r, o = this._createSvgView(this._opts);
                            if (!(r = s.isString(e) ? document.querySelector(e) : e)) throw Error("Container does not exist: " + e);
                            this._container = r, this._container.appendChild(o.svg), this._opts.warnings && this._warnContainerAspectRatio(this._container), this._opts.svgStyle && s.setStyles(o.svg, this._opts.svgStyle), this.svg = o.svg, this.path = o.path, this.trail = o.trail, this.text = null;
                            var a = s.extend({
                                attachment: void 0,
                                shape: this
                            }, this._opts);
                            this._progressPath = new n(o.path, a), s.isObject(this._opts.text) && null !== this._opts.text.value && this.setText(this._opts.text.value)
                        }
                    };
                o.prototype.animate = function(t, e, i) {
                    if (null === this._progressPath) throw Error(r);
                    this._progressPath.animate(t, e, i)
                }, o.prototype.stop = function() {
                    if (null === this._progressPath) throw Error(r);
                    void 0 !== this._progressPath && this._progressPath.stop()
                }, o.prototype.destroy = function() {
                    if (null === this._progressPath) throw Error(r);
                    this.stop(), this.svg.parentNode.removeChild(this.svg), this.svg = null, this.path = null, this.trail = null, this._progressPath = null, null !== this.text && (this.text.parentNode.removeChild(this.text), this.text = null)
                }, o.prototype.set = function(t) {
                    if (null === this._progressPath) throw Error(r);
                    this._progressPath.set(t)
                }, o.prototype.value = function() {
                    if (null === this._progressPath) throw Error(r);
                    return void 0 === this._progressPath ? 0 : this._progressPath.value()
                }, o.prototype.setText = function(t) {
                    if (null === this._progressPath) throw Error(r);
                    null === this.text && (this.text = this._createTextContainer(this._opts, this._container), this._container.appendChild(this.text)), s.isObject(t) ? (s.removeChildren(this.text), this.text.appendChild(t)) : this.text.innerHTML = t
                }, o.prototype._createSvgView = function(t) {
                    var e = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                    this._initializeSvg(e, t);
                    var i = null;
                    (t.trailColor || t.trailWidth) && (i = this._createTrail(t), e.appendChild(i));
                    var n = this._createPath(t);
                    return e.appendChild(n), {
                        svg: e,
                        path: n,
                        trail: i
                    }
                }, o.prototype._initializeSvg = function(t, e) {
                    t.setAttribute("viewBox", "0 0 100 100")
                }, o.prototype._createPath = function(t) {
                    var e = this._pathString(t);
                    return this._createPathElement(e, t)
                }, o.prototype._createTrail = function(t) {
                    var e = this._trailString(t),
                        i = s.extend({}, t);
                    return i.trailColor || (i.trailColor = "#eee"), i.trailWidth || (i.trailWidth = i.strokeWidth), i.color = i.trailColor, i.strokeWidth = i.trailWidth, i.fill = null, this._createPathElement(e, i)
                }, o.prototype._createPathElement = function(t, e) {
                    var i = document.createElementNS("http://www.w3.org/2000/svg", "path");
                    return i.setAttribute("d", t), i.setAttribute("stroke", e.color), i.setAttribute("stroke-width", e.strokeWidth), e.fill ? i.setAttribute("fill", e.fill) : i.setAttribute("fill-opacity", "0"), i
                }, o.prototype._createTextContainer = function(t, e) {
                    var i = document.createElement("div");
                    i.className = t.text.className;
                    var n = t.text.style;
                    return n && (t.text.autoStyleContainer && (e.style.position = "relative"), s.setStyles(i, n), n.color || (i.style.color = t.color)), this._initializeTextContainer(t, e, i), i
                }, o.prototype._initializeTextContainer = function(t, e, i) {}, o.prototype._pathString = function(t) {
                    throw Error("Override this function for each progress bar")
                }, o.prototype._trailString = function(t) {
                    throw Error("Override this function for each progress bar")
                }, o.prototype._warnContainerAspectRatio = function(t) {
                    if (this.containerAspectRatio) {
                        var e = window.getComputedStyle(t, null),
                            i = parseFloat(e.getPropertyValue("width"), 10),
                            n = parseFloat(e.getPropertyValue("height"), 10);
                        s.floatEquals(this.containerAspectRatio, i / n) || (console.warn("Incorrect aspect ratio of container", "#" + t.id, "detected:", e.getPropertyValue("width") + "(width)", "/", e.getPropertyValue("height") + "(height)", "=", i / n), console.warn("Aspect ratio of should be", this.containerAspectRatio))
                    }
                }, e.exports = o
            }, {
                "./path": 5,
                "./utils": 8
            }],
            8: [function(t, e, i) {
                function n(t, e, i) {
                    for (var s in t = t || {}, i = i || !1, e = e || {})
                        if (e.hasOwnProperty(s)) {
                            var r = t[s],
                                o = e[s];
                            i && c(r) && c(o) ? t[s] = n(r, o, i) : t[s] = o
                        }
                    return t
                }

                function s(t, e) {
                    var i = t;
                    for (var n in e)
                        if (e.hasOwnProperty(n)) {
                            var s = e[n],
                                r = RegExp("\\{" + n + "\\}", "g");
                            i = i.replace(r, s)
                        }
                    return i
                }

                function r(t, e, i) {
                    for (var n = t.style, s = 0; s < g.length; ++s) n[g[s] + a(e)] = i;
                    n[e] = i
                }

                function o(t, e) {
                    d(e, function(e, i) {
                        null != e && (c(e) && !0 === e.prefix ? r(t, i, e.value) : t.style[i] = e)
                    })
                }

                function a(t) {
                    return t.charAt(0).toUpperCase() + t.slice(1)
                }

                function l(t) {
                    return "string" == typeof t || t instanceof String
                }

                function u(t) {
                    return "function" == typeof t
                }

                function h(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                }

                function c(t) {
                    return !h(t) && "object" == typeof t && !!t
                }

                function d(t, e) {
                    for (var i in t) t.hasOwnProperty(i) && e(t[i], i)
                }

                function p(t, e) {
                    return Math.abs(t - e) < m
                }

                function f(t) {
                    for (; t.firstChild;) t.removeChild(t.firstChild)
                }
                var g = "Webkit Moz O ms".split(" "),
                    m = .001;
                e.exports = {
                    extend: n,
                    render: s,
                    setStyle: r,
                    setStyles: o,
                    capitalize: a,
                    isString: l,
                    isFunction: u,
                    isObject: c,
                    forEachObject: d,
                    floatEquals: p,
                    removeChildren: f
                }
            }, {}]
        }, {}, [4])(4)
    }),
    /*!
     * RELLAX v1.12.1
     * https://github.com/dixonandmoe/rellax
     */
    function(t, e) {
        "function" == typeof define && define.amd ? define([], e) : "object" == typeof module && module.exports ? module.exports = e() : t.Rellax = e()
    }("undefined" != typeof window ? window : global, function() {
        var t = function(e, i) {
            function n() {
                if (3 === s.options.breakpoints.length && Array.isArray(s.options.breakpoints)) {
                    var t, e = !0,
                        i = !0;
                    if (s.options.breakpoints.forEach(function(n) {
                            "number" != typeof n && (i = !1), null !== t && n < t && (e = !1), t = n
                        }), e && i) return
                }
                s.options.breakpoints = [576, 768, 1201], console.warn("Rellax: You must pass an array of 3 numbers in ascending order to the breakpoints option. Defaults reverted")
            }
            var s = Object.create(t.prototype),
                r = 0,
                o = 0,
                a = 0,
                l = 0,
                u = [],
                h = !0,
                c = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function(t) {
                    return setTimeout(t, 1e3 / 60)
                },
                d = null,
                p = !1;
            try {
                var f = Object.defineProperty({}, "passive", {
                    get: function() {
                        p = !0
                    }
                });
                window.addEventListener("testPassive", null, f), window.removeEventListener("testPassive", null, f)
            } catch (g) {}
            var m = window.cancelAnimationFrame || window.mozCancelAnimationFrame || clearTimeout,
                y = window.transformProp || function() {
                    var t = document.createElement("div");
                    if (null === t.style.transform) {
                        var e, i = ["Webkit", "Moz", "ms"];
                        for (e in i)
                            if (void 0 !== t.style[i[e] + "Transform"]) return i[e] + "Transform"
                    }
                    return "transform"
                }();
            if (s.options = {
                    speed: -2,
                    verticalSpeed: null,
                    horizontalSpeed: null,
                    breakpoints: [576, 768, 1201],
                    center: !1,
                    wrapper: null,
                    relativeToWrapper: !1,
                    round: !0,
                    vertical: !0,
                    horizontal: !1,
                    verticalScrollAxis: "y",
                    horizontalScrollAxis: "x",
                    callback: function() {}
                }, i && Object.keys(i).forEach(function(t) {
                    s.options[t] = i[t]
                }), i && i.breakpoints && n(), e || (e = ".rellax"), 0 < (f = "string" == typeof e ? document.querySelectorAll(e) : [e]).length) {
                if (s.elems = f, s.options.wrapper && !s.options.wrapper.nodeType) {
                    if (f = document.querySelector(s.options.wrapper)) s.options.wrapper = f;
                    else {
                        console.warn("Rellax: The wrapper you're trying to use doesn't exist.");
                        return
                    }
                }
                var v, b = function() {
                        for (var t = 0; t < u.length; t++) s.elems[t].style.cssText = u[t].style;
                        for (u = [], o = window.innerHeight, v = (l = window.innerWidth) < (t = s.options.breakpoints)[0] ? "xs" : l >= t[0] && l < t[1] ? "sm" : l >= t[1] && l < t[2] ? "md" : "lg", $(), t = 0; t < s.elems.length; t++) {
                            var e = void 0,
                                i = s.elems[t],
                                n = i.getAttribute("data-rellax-percentage"),
                                r = i.getAttribute("data-rellax-speed"),
                                a = i.getAttribute("data-rellax-xs-speed"),
                                c = i.getAttribute("data-rellax-mobile-speed"),
                                d = i.getAttribute("data-rellax-tablet-speed"),
                                p = i.getAttribute("data-rellax-desktop-speed"),
                                f = i.getAttribute("data-rellax-vertical-speed"),
                                g = i.getAttribute("data-rellax-horizontal-speed"),
                                m = i.getAttribute("data-rellax-vertical-scroll-axis"),
                                y = i.getAttribute("data-rellax-horizontal-scroll-axis"),
                                _ = i.getAttribute("data-rellax-zindex") || 0,
                                T = i.getAttribute("data-rellax-min"),
                                k = i.getAttribute("data-rellax-max"),
                                C = i.getAttribute("data-rellax-min-x"),
                                A = i.getAttribute("data-rellax-max-x"),
                                E = i.getAttribute("data-rellax-min-y"),
                                I = i.getAttribute("data-rellax-max-y"),
                                P = !0;
                            a || c || d || p ? e = {
                                xs: a,
                                sm: c,
                                md: d,
                                lg: p
                            } : P = !1, a = s.options.wrapper ? s.options.wrapper.scrollTop : window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop, s.options.relativeToWrapper && (a = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) - s.options.wrapper.offsetTop);
                            var z = s.options.vertical && (n || s.options.center) ? a : 0,
                                L = s.options.horizontal && (n || s.options.center) ? s.options.wrapper ? s.options.wrapper.scrollLeft : window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft : 0;
                            a = z + i.getBoundingClientRect().top, c = i.clientHeight || i.offsetHeight || i.scrollHeight, d = L + i.getBoundingClientRect().left, p = i.clientWidth || i.offsetWidth || i.scrollWidth, z = n || (z - a + o) / (c + o), n = n || (L - d + l) / (p + l), s.options.center && (z = n = .5), e = P && null !== e[v] ? Number(e[v]) : r || s.options.speed, f = f || s.options.verticalSpeed, g = g || s.options.horizontalSpeed, m = m || s.options.verticalScrollAxis, y = y || s.options.horizontalScrollAxis, r = w(n, z, e, f, g), i = i.style.cssText, P = "", (n = /transform\s*:/i.exec(i)) && (P = (n = (P = i.slice(n.index)).indexOf(";")) ? " " + P.slice(11, n).replace(/\s/g, "") : " " + P.slice(11).replace(/\s/g, "")), u.push({
                                baseX: r.x,
                                baseY: r.y,
                                top: a,
                                left: d,
                                height: c,
                                width: p,
                                speed: e,
                                verticalSpeed: f,
                                horizontalSpeed: g,
                                verticalScrollAxis: m,
                                horizontalScrollAxis: y,
                                style: i,
                                transform: P,
                                zindex: _,
                                min: T,
                                max: k,
                                minX: C,
                                maxX: A,
                                minY: E,
                                maxY: I
                            })
                        }
                        S(), h && (window.addEventListener("resize", b), h = !1, x())
                    },
                    $ = function() {
                        var t = r,
                            e = a;
                        return r = s.options.wrapper ? s.options.wrapper.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset, a = s.options.wrapper ? s.options.wrapper.scrollLeft : (document.documentElement || document.body.parentNode || document.body).scrollLeft || window.pageXOffset, s.options.relativeToWrapper && (r = ((document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset) - s.options.wrapper.offsetTop), t != r && !!s.options.vertical || e != a && !!s.options.horizontal
                    },
                    w = function(t, e, i, n, r) {
                        var o = {};
                        return t = 100 * (r || i) * (1 - t), e = 100 * (n || i) * (1 - e), o.x = s.options.round ? Math.round(t) : Math.round(100 * t) / 100, o.y = s.options.round ? Math.round(e) : Math.round(100 * e) / 100, o
                    },
                    _ = function() {
                        window.removeEventListener("resize", _), window.removeEventListener("orientationchange", _), (s.options.wrapper ? s.options.wrapper : window).removeEventListener("scroll", _), (s.options.wrapper ? s.options.wrapper : document).removeEventListener("touchmove", _), d = c(x)
                    },
                    x = function() {
                        $() && !1 === h ? (S(), d = c(x)) : (d = null, window.addEventListener("resize", _), window.addEventListener("orientationchange", _), (s.options.wrapper ? s.options.wrapper : window).addEventListener("scroll", _, !!p && {
                            passive: !0
                        }), (s.options.wrapper ? s.options.wrapper : document).addEventListener("touchmove", _, !!p && {
                            passive: !0
                        }))
                    },
                    S = function() {
                        for (var t, e = 0; e < s.elems.length; e++) {
                            var i = u[e].verticalScrollAxis.toLowerCase(),
                                n = u[e].horizontalScrollAxis.toLowerCase();
                            t = -1 != i.indexOf("x") ? r : 0, i = -1 != i.indexOf("y") ? r : 0;
                            var h = -1 != n.indexOf("x") ? a : 0;
                            n = -1 != n.indexOf("y") ? a : 0, n = (t = w((t + h - u[e].left + l) / (u[e].width + l), (i + n - u[e].top + o) / (u[e].height + o), u[e].speed, u[e].verticalSpeed, u[e].horizontalSpeed)).y - u[e].baseY, i = t.x - u[e].baseX, null !== u[e].min && (s.options.vertical && !s.options.horizontal && (n = n <= u[e].min ? u[e].min : n), s.options.horizontal && !s.options.vertical && (i = i <= u[e].min ? u[e].min : i)), null != u[e].minY && (n = n <= u[e].minY ? u[e].minY : n), null != u[e].minX && (i = i <= u[e].minX ? u[e].minX : i), null !== u[e].max && (s.options.vertical && !s.options.horizontal && (n = n >= u[e].max ? u[e].max : n), s.options.horizontal && !s.options.vertical && (i = i >= u[e].max ? u[e].max : i)), null != u[e].maxY && (n = n >= u[e].maxY ? u[e].maxY : n), null != u[e].maxX && (i = i >= u[e].maxX ? u[e].maxX : i), s.elems[e].style[y] = "translate3d(" + (s.options.horizontal ? i : "0") + "px," + (s.options.vertical ? n : "0") + "px," + u[e].zindex + "px) " + u[e].transform
                        }
                        s.options.callback(t)
                    };
                return s.destroy = function() {
                    for (var t = 0; t < s.elems.length; t++) s.elems[t].style.cssText = u[t].style;
                    h || (window.removeEventListener("resize", b), h = !0), m(d), d = null
                }, b(), s.refresh = b, s
            }
            console.warn("Rellax: The elements you're trying to select don't exist.")
        };
        return t
    }),
    function(t, e) {
        "use strict";

        function i(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            return t
        }

        function n() {
            "function" == typeof e && e.fn.extend({
                ReplaceMe: function(t) {
                    return this.each(function() {
                        new s(this, t)
                    })
                }
            })
        }

        function s(t, e) {
            var n = {
                animation: "animated fadeIn",
                speed: 2e3,
                separator: ",",
                hoverStop: !1,
                clickChange: !1,
                loopCount: "infinite",
                autoRun: !0,
                onInit: !1,
                onChange: !1,
                onComplete: !1
            };
            if ("object" == typeof e ? this.options = i(n, e) : this.options = n, void 0 === t) throw Error('ReplaceMe [constructor]: "element" parameter is required');
            if ("object" == typeof t) this.element = t;
            else {
                if ("string" != typeof t) throw Error('ReplaceMe [constructor]: wrong "element" parameter');
                this.element = document.querySelector(t)
            }
            this.init()
        }
        s.prototype.init = function() {
            "function" == typeof this.options.onInit && this.options.onInit(), this.words = this.escapeHTML(this.element.innerHTML).split(this.options.separator), this.count = this.words.length, this.position = this.loopCount = 0, this.running = !1, this.bindAll(), !0 === this.options.autoRun && this.start()
        }, s.prototype.bindAll = function() {
            !0 === this.options.hoverStop && (this.element.addEventListener("mouseover", this.pause.bind(this)), this.element.addEventListener("mouseout", this.start.bind(this))), !0 === this.options.clickChange && this.element.addEventListener("click", this.change.bind(this))
        }, s.prototype.changeAnimation = function() {
            this.change(), this.loop = setTimeout(this.changeAnimation.bind(this), this.options.speed)
        }, s.prototype.start = function() {
            !0 !== this.running && (this.running = !0, this.changeWord(this.words[this.position]), this.position++), this.loop = setTimeout(this.changeAnimation.bind(this), this.options.speed)
        }, s.prototype.change = function() {
            return this.position > this.count - 1 && (this.position = 0, this.loopCount++, this.loopCount >= this.options.loopCount) ? void this.stop() : (this.changeWord(this.words[this.position]), this.position++, void("function" == typeof this.options.onChange && this.options.onChange()))
        }, s.prototype.stop = function() {
            this.running = !1, this.position = this.loopCount = 0, this.pause(), "function" == typeof this.options.onComplete && this.options.onComplete()
        }, s.prototype.pause = function() {
            clearTimeout(this.loop)
        }, s.prototype.changeWord = function(t) {
            this.element.innerHTML = '<span class="' + this.options.animation + '" style="display:inline-block;">' + t + "</span>"
        }, s.prototype.escapeHTML = function(t) {
            var e = /<\/?\w+\s*[^>]*>/g;
            return !0 === e.test(t) ? t.replace(e, "") : t
        }, t.ReplaceMe = s, n()
    }(window, window.jQuery);
/*!
 * scrollCue.js v2.0.0
 * https://github.com/prjct-samwest/scrollCue
 */
var $jscomp = $jscomp || {};
$jscomp.scope = {}, $jscomp.arrayIteratorImpl = function(t) {
    var e = 0;
    return function() {
        return e < t.length ? {
            done: !1,
            value: t[e++]
        } : {
            done: !0
        }
    }
}, $jscomp.arrayIterator = function(t) {
    return {
        next: $jscomp.arrayIteratorImpl(t)
    }
}, $jscomp.ASSUME_ES5 = !1, $jscomp.ASSUME_NO_NATIVE_MAP = !1, $jscomp.ASSUME_NO_NATIVE_SET = !1, $jscomp.SIMPLE_FROUND_POLYFILL = !1, $jscomp.ISOLATE_POLYFILLS = !1, $jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(t, e, i) {
    return t == Array.prototype || t == Object.prototype || (t[e] = i.value), t
}, $jscomp.getGlobal = function(t) {
    t = ["object" == typeof globalThis && globalThis, t, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
    for (var e = 0; e < t.length; ++e) {
        var i = t[e];
        if (i && i.Math == Math) return i
    }
    throw Error("Cannot find global object")
}, $jscomp.global = $jscomp.getGlobal(this), $jscomp.IS_SYMBOL_NATIVE = "function" == typeof Symbol && "symbol" == typeof Symbol("x"), $jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE, $jscomp.polyfills = {}, $jscomp.propertyToPolyfillSymbol = {}, $jscomp.POLYFILL_PREFIX = "$jscp$";
var $jscomp$lookupPolyfilledValue = function(t, e) {
    var i = $jscomp.propertyToPolyfillSymbol[e];
    return null == i ? t[e] : void 0 !== (i = t[i]) ? i : t[e]
};
$jscomp.polyfill = function(t, e, i, n) {
    e && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(t, e, i, n) : $jscomp.polyfillUnisolated(t, e, i, n))
}, $jscomp.polyfillUnisolated = function(t, e, i, n) {
    for (n = 0, i = $jscomp.global, t = t.split("."); n < t.length - 1; n++) {
        var s = t[n];
        s in i || (i[s] = {}), i = i[s]
    }(e = e(n = i[t = t[t.length - 1]])) != n && null != e && $jscomp.defineProperty(i, t, {
        configurable: !0,
        writable: !0,
        value: e
    })
}, $jscomp.polyfillIsolated = function(t, e, i, n) {
    var s = t.split(".");
    t = 1 === s.length, n = s[0], n = !t && n in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
    for (var r = 0; r < s.length - 1; r++) {
        var o = s[r];
        o in n || (n[o] = {}), n = n[o]
    }
    s = s[s.length - 1], null != (e = e(i = $jscomp.IS_SYMBOL_NATIVE && "es6" === i ? n[s] : null)) && (t ? $jscomp.defineProperty($jscomp.polyfills, s, {
        configurable: !0,
        writable: !0,
        value: e
    }) : e !== i && ($jscomp.propertyToPolyfillSymbol[s] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(s) : $jscomp.POLYFILL_PREFIX + s, s = $jscomp.propertyToPolyfillSymbol[s], $jscomp.defineProperty(n, s, {
        configurable: !0,
        writable: !0,
        value: e
    })))
}, $jscomp.initSymbol = function() {}, $jscomp.polyfill("Symbol", function(t) {
    if (t) return t;
    var e = function(t, e) {
        this.$jscomp$symbol$id_ = t, $jscomp.defineProperty(this, "description", {
            configurable: !0,
            writable: !0,
            value: e
        })
    };
    e.prototype.toString = function() {
        return this.$jscomp$symbol$id_
    };
    var i = 0,
        n = function(t) {
            if (this instanceof n) throw TypeError("Symbol is not a constructor");
            return new e("jscomp_symbol_" + (t || "") + "_" + i++, t)
        };
    return n
}, "es6", "es3"), $jscomp.initSymbolIterator = function() {}, $jscomp.polyfill("Symbol.iterator", function(t) {
    if (t) return t;
    t = Symbol("Symbol.iterator");
    for (var e = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), i = 0; i < e.length; i++) {
        var n = $jscomp.global[e[i]];
        "function" == typeof n && "function" != typeof n.prototype[t] && $jscomp.defineProperty(n.prototype, t, {
            configurable: !0,
            writable: !0,
            value: function() {
                return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this))
            }
        })
    }
    return t
}, "es6", "es3"), $jscomp.initSymbolAsyncIterator = function() {}, $jscomp.iteratorPrototype = function(t) {
    return (t = {
        next: t
    })[Symbol.iterator] = function() {
        return this
    }, t
}, $jscomp.iteratorFromArray = function(t, e) {
    t instanceof String && (t += "");
    var i = 0,
        n = {
            next: function() {
                if (i < t.length) {
                    var s = i++;
                    return {
                        value: e(s, t[s]),
                        done: !1
                    }
                }
                return n.next = function() {
                    return {
                        done: !0,
                        value: void 0
                    }
                }, n.next()
            }
        };
    return n[Symbol.iterator] = function() {
        return n
    }, n
}, $jscomp.polyfill("Array.prototype.keys", function(t) {
    return t || function() {
        return $jscomp.iteratorFromArray(this, function(t) {
            return t
        })
    }
}, "es6", "es3");
var scrollCue = function() {
    var t, e, i, n = {},
        s = 0,
        r = !0,
        o = !0,
        a = !1,
        l = !1,
        u = {
            duration: 600,
            interval: -.7,
            percentage: .75,
            enable: !0,
            docSlider: !1,
            pageChangeReset: !1
        };
    return n = {
        setEvents: function(t) {
            var e = function() {
                r && (requestAnimationFrame(function() {
                    r = !0, o && (n.setQuery(), n.runQuery())
                }), r = !1)
            };
            if (o && !t && window.addEventListener("load", n.runQuery), window.addEventListener("scroll", e), a) {
                t = docSlider.getElements().pages;
                for (var i = 0; i < t.length; i++) t[i].addEventListener("scroll", function(t) {
                    var i;
                    if (docSlider.getCurrentIndex() + "" !== (t = t.target.getAttribute("data-ds-index"))) return !1;
                    docSlider._getWheelEnable() && e()
                })
            }
            window.addEventListener("resize", function() {
                0 < s && clearTimeout(s), s = setTimeout(function() {
                    o && (n.searchElements(), n.setQuery(), n.runQuery())
                }, 200)
            })
        },
        setOptions: function(t, e) {
            var i = {};
            if (void 0 !== t) return Object.keys(t).forEach(function(s) {
                "[object Object]" === Object.prototype.toString.call(t[s]) ? i[s] = n.setOptions(t[s], e[s]) : (i[s] = t[s], void 0 !== e && void 0 !== e[s] && (i[s] = e[s]))
            }), i
        },
        searchElements: function() {
            t = [];
            for (var e = document.querySelectorAll("[data-cues]:not([data-disabled])"), s = 0; s < e.length; s++) {
                for (var r = e[s], o = 0; o < r.children.length; o++) {
                    var l = r.children[o];
                    n.setAttrPtoC(l, "data-cue", r, "data-cues", ""), n.setAttrPtoC(l, "data-duration", r, "data-duration", !1), n.setAttrPtoC(l, "data-interval", r, "data-interval", !1), n.setAttrPtoC(l, "data-sort", r, "data-sort", !1), n.setAttrPtoC(l, "data-addClass", r, "data-addClass", !1), n.setAttrPtoC(l, "data-group", r, "data-group", !1), n.setAttrPtoC(l, "data-delay", r, "data-delay", !1)
                }
                r.setAttribute("data-disabled", "true")
            }
            for (s = 0, e = document.querySelectorAll('[data-cue]:not([data-show="true"])'); s < e.length; s++) r = e[s], t.push({
                elm: r,
                cue: n.getAttr(r, "data-cue", "fadeIn"),
                duration: Number(n.getAttr(r, "data-duration", i.duration)),
                interval: Number(n.getAttr(r, "data-interval", i.interval)),
                order: n.getOrderNumber(r),
                sort: n.getAttr(r, "data-sort", null),
                addClass: n.getAttr(r, "data-addClass", null),
                group: n.getAttr(r, "data-group", null),
                delay: Number(n.getAttr(r, "data-delay", 0))
            });
            if (a)
                for (e = docSlider.getElements().pages.length, s = 0; s < e; s++)
                    for (r = document.querySelectorAll('[data-ds-index="' + s + '"] [data-cue]:not([data-scpage])'), o = 0; o < r.length; o++) r[o].setAttribute("data-scpage", s)
        },
        sortElements: function() {
            for (var t = arguments[0], e = [].slice.call(arguments).slice(1), i = {
                    $jscomp$loop$prop$i$4: 0
                }; i.$jscomp$loop$prop$i$4 < e.length; i = {
                    $jscomp$loop$prop$i$4: i.$jscomp$loop$prop$i$4
                }, i.$jscomp$loop$prop$i$4++) t.sort(function(t) {
                return function(i, n) {
                    var s = void 0 === e[t.$jscomp$loop$prop$i$4][1] || e[t.$jscomp$loop$prop$i$4][1],
                        r = e[t.$jscomp$loop$prop$i$4][0];
                    return i[r] > n[r] ? s ? 1 : -1 : i[r] < n[r] ? s ? -1 : 1 : 0
                }
            }(i))
        },
        randElements: function(t) {
            for (var e = t.length - 1; 0 < e; e--) {
                var i = Math.floor(Math.random() * (e + 1)),
                    n = t[e];
                t[e] = t[i], t[i] = n
            }
            return t
        },
        setDurationValue: function(t, e, i) {
            return void 0 === e ? t : (e = e.duration, 0 > (t = -1 === (i + "").indexOf(".") ? t + e + i : t + e + e * i) ? 0 : t)
        },
        getOrderNumber: function(t) {
            return t.hasAttribute("data-order") ? 0 <= (t = Number(t.getAttribute("data-order"))) ? t : 9007199254740991 + t : 0xfffffffffffff
        },
        setAttrPtoC: function(t, e, i, n, s) {
            i.hasAttribute(n) ? t.hasAttribute(e) || t.setAttribute(e, i.getAttribute(n)) : !1 !== s && t.setAttribute(e, s)
        },
        getAttr: function(t, e, i) {
            return t.hasAttribute(e) ? t.getAttribute(e) : i
        },
        getOffsetTop: function(t) {
            return t.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.scrollTop)
        },
        setClassNames: function(t, e) {
            if (e) {
                e = e.split(" ");
                for (var i = 0; i < e.length; i++) t.classList.add(e[i])
            }
        },
        setQuery: function() {
            e = {};
            for (var i = 0; i < t.length; i++) {
                var s = t[i],
                    r = s.group ? s.group : "$" + n.getOffsetTop(s.elm);
                if (!s.elm.hasAttribute("data-show")) {
                    if (a) {
                        var o = s.elm.getAttribute("data-scpage");
                        if (o !== docSlider.getCurrentIndex() + "" && null !== o) continue
                    }
                    void 0 === e[r] && (e[r] = []), e[r].push(s)
                }
            }
        },
        runQuery: function() {
            for (var t = Object.keys(e), i = {}, s = 0; s < t.length; i = {
                    $jscomp$loop$prop$elms$6: i.$jscomp$loop$prop$elms$6,
                    $jscomp$loop$prop$interval$7: i.$jscomp$loop$prop$interval$7
                }, s++)
                if (i.$jscomp$loop$prop$elms$6 = e[t[s]], n.isElementIn(i.$jscomp$loop$prop$elms$6[0].elm)) {
                    "reverse" === i.$jscomp$loop$prop$elms$6[0].sort ? i.$jscomp$loop$prop$elms$6.reverse() : "random" === i.$jscomp$loop$prop$elms$6[0].sort && n.randElements(i.$jscomp$loop$prop$elms$6), n.sortElements(i.$jscomp$loop$prop$elms$6, ["order"]);
                    for (var r = i.$jscomp$loop$prop$interval$7 = 0; r < i.$jscomp$loop$prop$elms$6.length; r++)(function(t) {
                        return function(e) {
                            t.$jscomp$loop$prop$elms$6[e].elm.setAttribute("data-show", "true"), n.setClassNames(t.$jscomp$loop$prop$elms$6[e].elm, t.$jscomp$loop$prop$elms$6[e].addClass), t.$jscomp$loop$prop$interval$7 = n.setDurationValue(t.$jscomp$loop$prop$interval$7, t.$jscomp$loop$prop$elms$6[e - 1], t.$jscomp$loop$prop$elms$6[e].interval), t.$jscomp$loop$prop$elms$6[e].elm.style.animationName = t.$jscomp$loop$prop$elms$6[e].cue, t.$jscomp$loop$prop$elms$6[e].elm.style.animationDuration = t.$jscomp$loop$prop$elms$6[e].duration + "ms", t.$jscomp$loop$prop$elms$6[e].elm.style.animationTimingFunction = "ease", t.$jscomp$loop$prop$elms$6[e].elm.style.animationDelay = t.$jscomp$loop$prop$interval$7 + t.$jscomp$loop$prop$elms$6[e].delay + "ms", t.$jscomp$loop$prop$elms$6[e].elm.style.animationDirection = "normal", t.$jscomp$loop$prop$elms$6[e].elm.style.animationFillMode = "both"
                        }
                    })(i)(r);
                    delete e[t[s]]
                }
        },
        isElementIn: function(t) {
            var e = t.hasAttribute("data-scpage") ? n.isScrollEndWithDocSlider : n.isScrollEnd;
            return window.pageYOffset > n.getOffsetTop(t) - window.innerHeight * i.percentage || e()
        },
        isScrollEnd: function() {
            var t = window.document.documentElement;
            return (window.document.body.scrollTop || t.scrollTop) >= t.scrollHeight - t.clientHeight
        },
        isScrollEndWithDocSlider: function() {
            var t = docSlider.getCurrentPage();
            return t.scrollTop >= t.scrollHeight - t.clientHeight
        }
    }, {
        init: function(t) {
            o = (i = n.setOptions(u, t)).enable, a = i.docSlider, l = i.pageChangeReset, a || (n.setEvents(), n.searchElements(), n.setQuery())
        },
        update: function() {
            o && (n.searchElements(), n.setQuery(), n.runQuery())
        },
        enable: function(t) {
            o = void 0 === t ? !o : t, scrollCue.update()
        },
        _hasDocSlider: function() {
            return a
        },
        _hasPageChangeReset: function() {
            return l
        },
        _initWithDocSlider: function(t) {
            n.setEvents(t), n.searchElements(), n.setQuery()
        },
        _updateWithDocSlider: function() {
            o && (n.setQuery(), n.runQuery())
        },
        _searchElements: function() {
            n.searchElements()
        }
    }
}();
/*!
 * showMoreItem.js Version:1.0.1
 * @copyright 2020 PeggyHsieh
 * @license MIT (https://github.com/peggy-hsieh/showMoreItems)
 */
! function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function($) {
    var ShowMoreItems = window.ShowMoreItems || {};
    (ShowMoreItems = function(t, e) {
        $(t).addClass("showMoreItemsList");
        var i, n = this,
            s = {
                nowNum: 1,
                startNum: 1,
                afterNum: 1,
                original: !1,
                moreText: "Show more",
                noMoreText: "No more",
                backMoreText: "Reset",
                responsive: "",
                after: function() {}
            };
        i = $(t).data("showMoreItems") || {}, n.defaults = $.extend({}, s, e, i), n.options = $.extend({}, s, e, i), n.registerBreakpoints(t), n.init(t)
    }).prototype.init = function(t) {
        var e = this;
        return e.sum = $(t).children().length, e.runData(t, e), !1
    }, ShowMoreItems.prototype.runData = function(t, e) {
        var i = this;
        i.goOut = !1, $(t).children().hide(), $(t).next(".button-box").remove(), i.nowNum = e.options.nowNum - 1, i.goNum = i.nowNum + e.options.startNum, i.sum <= e.options.startNum && (i.goNum = i.sum, i.goOut = !0);
        for (var n = i.nowNum; n < i.goNum; n++) $(t).children().eq(n).show(), i.nowNum += 1;
        i.goOut || $(t).after('<div class="button-box text-center mt-10"><button class="btn rounded-pill btn-soft-ash addListData">' + e.options.moreText + "</button></div>"), $(t).next().on("click", ".addListData", function(n) {
            i.goNum = i.nowNum + e.options.afterNum, i.sum <= i.goNum && (i.goNum = i.sum, i.goOut = !0);
            for (var s = i.nowNum; s < i.goNum; s++) $(t).children().eq(s).show(), i.nowNum += 1;
            i.goOut && e.options.original ? $(this).text(e.options.backMoreText).addClass("original") : i.goOut && $(this).text(e.options.noMoreText).addClass("d-none"), e.options.after()
        }), $(t).next().on("click", ".original", function(t) {
            return $(this).removeClass("original"), i.reflesh($(this)), !1
        })
    }, ShowMoreItems.prototype.reflesh = function(t) {
        thisE = t.parent().prev(), t.remove(), this.registerBreakpoints(t), this.init(thisE)
    }, ShowMoreItems.prototype.registerBreakpoints = function(t) {
        var e = this;
        e.options.responsive && (ResponsiveArr = (ResponsiveArr = e.options.responsive).sort(function(t, e) {
            return t.breakpoint > e.breakpoint ? -1 : 1
        }), e.options.responsive = ResponsiveArr, e.Oindex = -1, e.Owidth = $(window).width(), $.each(e.options.responsive, function(t, i) {
            $(window).width() <= i.breakpoint && (e.Oindex = t, i = i.settings, e.options = $.extend({}, e.options, i))
        }), $(window).resize(function() {
            return run = !1, $(window).width() < e.Owidth && (e.Owidth = $(window).width(), $.each(e.options.responsive, function(t, i) {
                if (e.Owidth <= i.breakpoint && e.Oindex < t) return e.Oindex = t, i = i.settings, e.options = $.extend({}, e.options, e.defaults), e.options = $.extend({}, e.options, i), run = !0, e.Oindex
            })), $(window).width() > e.Owidth && (e.Owidth = $(window).width(), $.each(ResponsiveArr, function(t, i) {
                if (e.Owidth > i.breakpoint && e.Oindex > t - 1) return e.Oindex = t - 1, -1 != e.Oindex ? (i = ResponsiveArr[t - 1].settings, e.options = $.extend({}, e.options, e.defaults), e.options = $.extend({}, e.options, i), run = !0) : (e.options = $.extend({}, e.options, e.defaults), run = !0), e.Oindex
            })), 1 == run && e.runData(t, e), !1
        }))
    }, $.fn.showMoreItems = function() {
        var t, e, i = this,
            n = arguments[0],
            s = Array.prototype.slice.call(arguments, 1),
            r = i.length;
        for (t = 0; t < r; t++)
            if ("object" == typeof n || void 0 === n ? i[t].showMoreItems = new ShowMoreItems(i[t], n) : e = i[t].showMoreItems[n].apply(i[t].showMoreItems, s), void 0 !== e) return e;
        return i
    }, $(function() {
        if ($('[data-showMoreItems="true"]').length) {
            if ("true" == (selecter = $('[data-showMoreItems="true"]')).attr("data-showMoreItems")) {
                var settings = {
                    nowNum: 1,
                    getView: 0,
                    startNum: 1,
                    afterNum: 1,
                    original: !1,
                    moreText: "Show more",
                    noMoreText: "No more",
                    backMoreText: "Reset",
                    responsive: "",
                    after: function() {}
                };
                selecter.attr("data-nowNum") && (settings.nowNum = parseInt(selecter.attr("data-nowNum"))), selecter.attr("data-startNum") && (settings.startNum = parseInt(selecter.attr("data-startNum"))), selecter.attr("data-afterNum") && (settings.afterNum = parseInt(selecter.attr("data-afterNum"))), selecter.attr("data-original") && (settings.original = Boolean(selecter.attr("data-original"))), selecter.attr("data-moreText") && (settings.moreText = selecter.attr("data-moreText")), selecter.attr("data-noMoreText") && (settings.noMoreText = selecter.attr("data-noMoreText")), selecter.attr("data-backMoreText") && (settings.backMoreText = selecter.attr("data-backMoreText")), selecter.attr("data-responsive") && (settings.responsive = eval(selecter.attr("data-responsive")))
            }
            $('[data-showMoreItems="true"]').showMoreItems(settings)
        }
    })
}),
function(t, e) {
    var i, n, s = "createElement",
        r = "getElementsByTagName",
        o = "length",
        a = "style",
        l = "title",
        u = "undefined",
        h = "setAttribute",
        c = "getAttribute",
        d = null,
        p = "__svgInject",
        f = "--inject-",
        g = RegExp(f + "\\d+", "g"),
        m = "LOAD_FAIL",
        y = "SVG_NOT_SUPPORTED",
        v = "SVG_INVALID",
        b = ["src", "alt", "onload", "onerror"],
        $ = e[s]("a"),
        w = typeof SVGRect != u,
        _ = {
            useCache: !0,
            copyAttributes: !0,
            makeIdsUnique: !0
        },
        x = {
            clipPath: ["clip-path"],
            "color-profile": d,
            cursor: d,
            filter: d,
            linearGradient: ["fill", "stroke"],
            marker: ["marker", "marker-end", "marker-mid", "marker-start"],
            mask: d,
            pattern: ["fill", "stroke"],
            radialGradient: ["fill", "stroke"]
        },
        S = 1,
        T = 2,
        k = 1;

    function C(t) {
        return (i = i || new XMLSerializer).serializeToString(t)
    }

    function A(t, e) {
        var i, n, s, l, u = f + k++,
            p = /url\("?#([a-zA-Z][\w:.-]*)"?\)/g,
            g = t.querySelectorAll("[id]"),
            m = e ? [] : d,
            y = {},
            v = [],
            b = !1;
        if (g[o]) {
            for (s = 0; s < g[o]; s++)(n = g[s].localName) in x && (y[n] = 1);
            for (n in y)(x[n] || [n]).forEach(function(t) {
                0 > v.indexOf(t) && v.push(t)
            });
            v[o] && v.push(a);
            var $, w, _, S = t[r]("*"),
                T = t;
            for (s = -1; T != d;) {
                if (T.localName == a)(_ = (w = T.textContent) && w.replace(p, function(t, e) {
                    return m && (m[e] = 1), "url(#" + e + u + ")"
                })) !== w && (T.textContent = _);
                else if (T.hasAttributes()) {
                    for (l = 0; l < v[o]; l++) $ = v[l], (_ = (w = T[c]($)) && w.replace(p, function(t, e) {
                        return m && (m[e] = 1), "url(#" + e + u + ")"
                    })) !== w && T[h]($, _);
                    ["xlink:href", "href"].forEach(function(t) {
                        var e = T[c](t);
                        /^\s*#/.test(e) && (e = e.trim(), T[h](t, e + u), m && (m[e.substring(1)] = 1))
                    })
                }
                T = S[++s]
            }
            for (s = 0; s < g[o]; s++) i = g[s], m && !m[i.id] || (i.id += u, b = !0)
        }
        return b
    }

    function E(t, i, n, r) {
        if (i) {
            i[h]("data-inject-url", n);
            var a = t.parentNode;
            if (a) {
                r.copyAttributes && function t(i, n) {
                    for (var r, a, u, c = i.attributes, d = 0; d < c[o]; d++)
                        if (a = (r = c[d]).name, -1 == b.indexOf(a)) {
                            if (u = r.value, a == l) {
                                var p, f = n.firstElementChild;
                                f && f.localName.toLowerCase() == l ? p = f : (p = e[s + "NS"]("http://www.w3.org/2000/svg", l), n.insertBefore(p, f)), p.textContent = u
                            } else n[h](a, u)
                        }
                }(t, i);
                var u = r.beforeInject,
                    c = u && u(t, i) || i;
                a.replaceChild(c, t), t[p] = S, z(t);
                var d = r.afterInject;
                d && d(t, c)
            }
        } else O(t, r)
    }

    function I() {
        for (var t = {}, e = arguments, i = 0; i < e[o]; i++) {
            var n = e[i];
            for (var s in n) n.hasOwnProperty(s) && (t[s] = n[s])
        }
        return t
    }

    function P(t, i) {
        if (i) {
            var s, a;
            try {
                s = (a = t, (n = n || new DOMParser).parseFromString(a, "text/xml"))
            } catch (l) {
                return d
            }
            return s[r]("parsererror")[o] ? d : s.documentElement
        }
        var u = e.createElement("div");
        return u.innerHTML = t, u.firstElementChild
    }

    function z(t) {
        t.removeAttribute("onload")
    }

    function L(t) {
        console.error("SVGInject: " + t)
    }

    function M(t, e, i) {
        t[p] = T, i.onFail ? i.onFail(t, e) : L(e)
    }

    function O(t, e) {
        z(t), M(t, v, e)
    }

    function D(t, e) {
        z(t), M(t, y, e)
    }

    function N(t, e) {
        M(t, m, e)
    }

    function F(t) {
        t.onload = d, t.onerror = d
    }

    function j(t) {
        L("no img element")
    }
    var H = function i(n, l) {
        var h = I(_, void 0),
            y = {};

        function b(t, e) {
            e = I(h, e);
            var i = function(i) {
                var n = function() {
                    var t = e.onAllFinish;
                    t && t(), i && i()
                };
                if (t && typeof t[o] != u) {
                    var s = 0,
                        r = t[o];
                    if (0 == r) n();
                    else
                        for (var a = function() {
                                ++s == r && n()
                            }, l = 0; l < r; l++) x(t[l], e, a)
                } else x(t, e, n)
            };
            return typeof Promise == u ? i() : new Promise(i)
        }

        function x(t, e, i) {
            if (t) {
                var n = t[p];
                if (n) Array.isArray(n) ? n.push(i) : i();
                else {
                    if (F(t), !w) return D(t, e), void i();
                    var s = e.beforeLoad,
                        r = s && s(t) || t[c]("src");
                    if (!r) return "" === r && N(t, e), void i();
                    var o, a = [];
                    t[p] = a;
                    var l = function() {
                            i(), a.forEach(function(t) {
                                t()
                            })
                        },
                        h = (o = r, $.href = o, $.href),
                        b = e.useCache,
                        _ = e.makeIdsUnique,
                        x = function(t) {
                            b && (y[h].forEach(function(e) {
                                e(t)
                            }), y[h] = t)
                        };
                    if (b) {
                        var S, T = function(i) {
                            if (i === m) N(t, e);
                            else if (i === v) O(t, e);
                            else {
                                var n, s, r = i[0],
                                    o = i[1],
                                    a = i[2];
                                _ && (r === d ? (r = A(n = P(o, !1), !1), i[0] = r, i[2] = r && C(n)) : r && (o = (s = a).replace(g, f + k++))), n = n || P(o, !1), E(t, n, h, e)
                            }
                            l()
                        };
                        if (typeof(S = y[h]) != u) return void(S.isCallbackQueue ? S.push(T) : T(S));
                        (S = []).isCallbackQueue = !0, y[h] = S
                    }! function t(e, i, n) {
                        if (e) {
                            var s = new XMLHttpRequest;
                            s.onreadystatechange = function() {
                                if (4 == s.readyState) {
                                    var t = s.status;
                                    200 == t ? i(s.responseXML, s.responseText.trim()) : 400 <= t ? n() : 0 == t && n()
                                }
                            }, s.open("GET", e, !0), s.send()
                        }
                    }(h, function(i, n) {
                        var s = i instanceof Document ? i.documentElement : P(n, !0),
                            r = e.afterLoad;
                        if (r) {
                            var o = r(s, n) || s;
                            if (o) {
                                var a = "string" == typeof o;
                                n = a ? o : C(s), s = a ? P(o, !0) : o
                            }
                        }
                        if (s instanceof SVGElement) {
                            var u = d;
                            if (_ && (u = A(s, !1)), b) {
                                var c = u && C(s);
                                x([u, n, c])
                            }
                            E(t, s, h, e)
                        } else O(t, e), x(v);
                        l()
                    }, function() {
                        N(t, e), x(m), l()
                    })
                }
            } else j()
        }
        return w && function t(i) {
            var n = e[r]("head")[0];
            if (n) {
                var o = e[s](a);
                o.type = "text/css", o.appendChild(e.createTextNode(i)), n.appendChild(o)
            }
        }('img[onload^="' + n + '("]{visibility:hidden;}'), b.setOptions = function(t) {
            h = I(h, t)
        }, b.create = i, b.err = function(t, e) {
            t ? t[p] != T && (F(t), w ? (z(t), N(t, h)) : D(t, h), e && (z(t), t.src = e)) : j()
        }, t[n] = b
    }("SVGInject");
    "object" == typeof module && "object" == typeof module.exports && (module.exports = H)
}(window, document);
/*!
 * Typer.js v0.1.0
 * https://unpkg.com/typer-dot-js@0.1.0/typer.js
 */
var Typer = function(t) {
    this.element = t;
    var e = t.dataset.delim || ",",
        i = t.dataset.words || "override these,sample typing";
    this.words = i.split(e).filter(t => t), this.delayVariance = parseInt(t.dataset.delayVariance) || 0, this.delay = parseInt(t.dataset.delay) || 200, this.loop = t.dataset.loop || "true", "false" === this.loop && (this.loop = 1), this.deleteDelay = t.dataset.deletedelay || t.dataset.deleteDelay || 800, this.progress = {
        word: 0,
        char: 0,
        building: !0,
        looped: 0
    }, this.typing = !0;
    var n = t.dataset.colors || "black";
    this.colors = n.split(","), this.element.style.color = this.colors[0], this.colorIndex = 0, this.doTyping()
};
Typer.prototype.start = function() {
    this.typing || (this.typing = !0, this.doTyping())
}, Typer.prototype.stop = function() {
    this.typing = !1
}, Typer.prototype.doTyping = function() {
    var t, e = this.element,
        i = this.progress,
        n = i.word,
        s = [...this.words[n]].slice(0, i.char).join(""),
        r = (2 * Math.random() - 1) * this.delayVariance + this.delay;
    this.cursor && (this.cursor.element.style.opacity = "1", this.cursor.on = !0, clearInterval(this.cursor.interval), this.cursor.interval = setInterval(() => this.cursor.updateBlinkState(), 400)), e.innerHTML = s, i.building ? (t = i.char === this.words[n].length) ? i.building = !1 : i.char += 1 : 0 === i.char ? (i.building = !0, i.word = (i.word + 1) % this.words.length, this.colorIndex = (this.colorIndex + 1) % this.colors.length, this.element.style.color = this.colors[this.colorIndex]) : i.char -= 1, i.word === this.words.length - 1 && (i.looped += 1), !i.building && this.loop <= i.looped && (this.typing = !1), setTimeout(() => {
        this.typing && this.doTyping()
    }, t ? this.deleteDelay : r)
};
var Cursor = function(t) {
    this.element = t, this.cursorDisplay = t.dataset.cursordisplay || t.dataset.cursorDisplay || "|", t.innerHTML = this.cursorDisplay, this.on = !0, t.style.transition = "all 0.1s", this.interval = setInterval(() => this.updateBlinkState(), 400)
};

function TyperSetup() {
    var t = {};
    for (let e of document.getElementsByClassName("typer")) t[e.id] = new Typer(e);
    for (let i of document.getElementsByClassName("typer-stop")) {
        let n = t[i.dataset.owner];
        i.onclick = () => n.stop()
    }
    for (let s of document.getElementsByClassName("typer-start")) {
        let r = t[s.dataset.owner];
        s.onclick = () => r.start()
    }
    for (let o of document.getElementsByClassName("cursor")) new Cursor(o).owner = t[o.dataset.owner]
}
Cursor.prototype.updateBlinkState = function() {
        this.on ? (this.element.style.opacity = "0", this.on = !1) : (this.element.style.opacity = "1", this.on = !0)
    }, TyperSetup(),
    function(t, e) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.anime = e()
    }(this, function() {
        "use strict";
        var t = {
                update: null,
                begin: null,
                loopBegin: null,
                changeBegin: null,
                change: null,
                changeComplete: null,
                loopComplete: null,
                complete: null,
                loop: 1,
                direction: "normal",
                autoplay: !0,
                timelineOffset: 0
            },
            e = {
                duration: 1e3,
                delay: 0,
                endDelay: 0,
                easing: "easeOutElastic(1, .5)",
                round: 0
            },
            i = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "perspective"],
            n = {
                CSS: {},
                springs: {}
            };

        function s(t, e, i) {
            return Math.min(Math.max(t, e), i)
        }

        function r(t, e) {
            return t.indexOf(e) > -1
        }

        function o(t, e) {
            return t.apply(null, e)
        }
        var a = {
            arr: function(t) {
                return Array.isArray(t)
            },
            obj: function(t) {
                return r(Object.prototype.toString.call(t), "Object")
            },
            pth: function(t) {
                return a.obj(t) && t.hasOwnProperty("totalLength")
            },
            svg: function(t) {
                return t instanceof SVGElement
            },
            inp: function(t) {
                return t instanceof HTMLInputElement
            },
            dom: function(t) {
                return t.nodeType || a.svg(t)
            },
            str: function(t) {
                return "string" == typeof t
            },
            fnc: function(t) {
                return "function" == typeof t
            },
            und: function(t) {
                return void 0 === t
            },
            hex: function(t) {
                return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)
            },
            rgb: function(t) {
                return /^rgb/.test(t)
            },
            hsl: function(t) {
                return /^hsl/.test(t)
            },
            col: function(t) {
                return a.hex(t) || a.rgb(t) || a.hsl(t)
            },
            key: function(i) {
                return !t.hasOwnProperty(i) && !e.hasOwnProperty(i) && "targets" !== i && "keyframes" !== i
            }
        };

        function l(t) {
            var e = /\(([^)]+)\)/.exec(t);
            return e ? e[1].split(",").map(function(t) {
                return parseFloat(t)
            }) : []
        }

        function u(t, e) {
            var i = l(t),
                r = s(a.und(i[0]) ? 1 : i[0], .1, 100),
                o = s(a.und(i[1]) ? 100 : i[1], .1, 100),
                u = s(a.und(i[2]) ? 10 : i[2], .1, 100),
                h = s(a.und(i[3]) ? 0 : i[3], .1, 100),
                c = Math.sqrt(o / r),
                d = u / (2 * Math.sqrt(o * r)),
                p = d < 1 ? c * Math.sqrt(1 - d * d) : 0,
                f = 1,
                g = d < 1 ? (d * c - h) / p : -h + c;

            function m(t) {
                var i = e ? e * t / 1e3 : t;
                return i = d < 1 ? Math.exp(-i * d * c) * (f * Math.cos(p * i) + g * Math.sin(p * i)) : (f + g * i) * Math.exp(-i * c), 0 === t || 1 === t ? t : 1 - i
            }
            return e ? m : function() {
                var e = n.springs[t];
                if (e) return e;
                for (var i = 0, s = 0;;)
                    if (1 === m(i += 1 / 6)) {
                        if (++s >= 16) break
                    } else s = 0;
                var r = i * (1 / 6) * 1e3;
                return n.springs[t] = r, r
            }
        }

        function h(t) {
            return void 0 === t && (t = 10),
                function(e) {
                    return Math.round(e * t) * (1 / t)
                }
        }
        var c, d, p = function() {
                var t = 11,
                    e = 1 / (t - 1);

                function i(t, e) {
                    return 1 - 3 * e + 3 * t
                }

                function n(t, e) {
                    return 3 * e - 6 * t
                }

                function s(t) {
                    return 3 * t
                }

                function r(t, e, r) {
                    return ((i(e, r) * t + n(e, r)) * t + s(e)) * t
                }

                function o(t, e, r) {
                    return 3 * i(e, r) * t * t + 2 * n(e, r) * t + s(e)
                }
                return function(i, n, s, a) {
                    if (0 <= i && i <= 1 && 0 <= s && s <= 1) {
                        var l = new Float32Array(t);
                        if (i !== n || s !== a)
                            for (var u = 0; u < t; ++u) l[u] = r(u * e, i, s);
                        return function(t) {
                            return i === n && s === a ? t : 0 === t || 1 === t ? t : r(h(t), n, a)
                        }
                    }

                    function h(n) {
                        for (var a = 0, u = 1, h = t - 1; u !== h && l[u] <= n; ++u) a += e;
                        var c = a + (n - l[--u]) / (l[u + 1] - l[u]) * e,
                            d = o(c, i, s);
                        return d >= .001 ? function(t, e, i, n) {
                            for (var s = 0; s < 4; ++s) {
                                var a = o(e, i, n);
                                if (0 === a) break;
                                e -= (r(e, i, n) - t) / a
                            }
                            return e
                        }(n, c, i, s) : 0 === d ? c : function(t, e, i, n, s) {
                            for (var o, a, l = 0;
                                (o = r(a = e + (i - e) / 2, n, s) - t) > 0 ? i = a : e = a, Math.abs(o) > 1e-7 && ++l < 10;);
                            return a
                        }(n, a, a + e, i, s)
                    }
                }
            }(),
            f = (c = {
                linear: function() {
                    return function(t) {
                        return t
                    }
                }
            }, d = {
                Sine: function() {
                    return function(t) {
                        return 1 - Math.cos(t * Math.PI / 2)
                    }
                },
                Circ: function() {
                    return function(t) {
                        return 1 - Math.sqrt(1 - t * t)
                    }
                },
                Back: function() {
                    return function(t) {
                        return t * t * (3 * t - 2)
                    }
                },
                Bounce: function() {
                    return function(t) {
                        for (var e, i = 4; t < ((e = Math.pow(2, --i)) - 1) / 11;);
                        return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
                    }
                },
                Elastic: function(t, e) {
                    void 0 === t && (t = 1), void 0 === e && (e = .5);
                    var i = s(t, 1, 10),
                        n = s(e, .1, 2);
                    return function(t) {
                        return 0 === t || 1 === t ? t : -i * Math.pow(2, 10 * (t - 1)) * Math.sin((t - 1 - n / (2 * Math.PI) * Math.asin(1 / i)) * (2 * Math.PI) / n)
                    }
                }
            }, ["Quad", "Cubic", "Quart", "Quint", "Expo"].forEach(function(t, e) {
                d[t] = function() {
                    return function(t) {
                        return Math.pow(t, e + 2)
                    }
                }
            }), Object.keys(d).forEach(function(t) {
                var e = d[t];
                c["easeIn" + t] = e, c["easeOut" + t] = function(t, i) {
                    return function(n) {
                        return 1 - e(t, i)(1 - n)
                    }
                }, c["easeInOut" + t] = function(t, i) {
                    return function(n) {
                        return n < .5 ? e(t, i)(2 * n) / 2 : 1 - e(t, i)(-2 * n + 2) / 2
                    }
                }
            }), c);

        function g(t, e) {
            if (a.fnc(t)) return t;
            var i = t.split("(")[0],
                n = f[i],
                s = l(t);
            switch (i) {
                case "spring":
                    return u(t, e);
                case "cubicBezier":
                    return o(p, s);
                case "steps":
                    return o(h, s);
                default:
                    return o(n, s)
            }
        }

        function m(t) {
            try {
                return document.querySelectorAll(t)
            } catch (e) {
                return
            }
        }

        function y(t, e) {
            for (var i = t.length, n = arguments.length >= 2 ? arguments[1] : void 0, s = [], r = 0; r < i; r++)
                if (r in t) {
                    var o = t[r];
                    e.call(n, o, r, t) && s.push(o)
                }
            return s
        }

        function v(t) {
            return t.reduce(function(t, e) {
                return t.concat(a.arr(e) ? v(e) : e)
            }, [])
        }

        function b(t) {
            return a.arr(t) ? t : (a.str(t) && (t = m(t) || t), t instanceof NodeList || t instanceof HTMLCollection ? [].slice.call(t) : [t])
        }

        function $(t, e) {
            return t.some(function(t) {
                return t === e
            })
        }

        function w(t) {
            var e = {};
            for (var i in t) e[i] = t[i];
            return e
        }

        function _(t, e) {
            var i = w(t);
            for (var n in t) i[n] = e.hasOwnProperty(n) ? e[n] : t[n];
            return i
        }

        function x(t, e) {
            var i = w(t);
            for (var n in e) i[n] = a.und(t[n]) ? e[n] : t[n];
            return i
        }

        function S(t) {
            var e, i, n, s;
            return a.rgb(t) ? (i = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e = t)) ? "rgba(" + i[1] + ",1)" : e : a.hex(t) ? (n = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(t, e, i, n) {
                return e + e + i + i + n + n
            }), "rgba(" + parseInt((s = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n))[1], 16) + "," + parseInt(s[2], 16) + "," + parseInt(s[3], 16) + ",1)") : a.hsl(t) ? function(t) {
                var e, i, n, s = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t),
                    r = parseInt(s[1], 10) / 360,
                    o = parseInt(s[2], 10) / 100,
                    a = parseInt(s[3], 10) / 100,
                    l = s[4] || 1;

                function u(t, e, i) {
                    return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
                }
                if (0 == o) e = i = n = a;
                else {
                    var h = a < .5 ? a * (1 + o) : a + o - a * o,
                        c = 2 * a - h;
                    e = u(c, h, r + 1 / 3), i = u(c, h, r), n = u(c, h, r - 1 / 3)
                }
                return "rgba(" + 255 * e + "," + 255 * i + "," + 255 * n + "," + l + ")"
            }(t) : void 0
        }

        function T(t) {
            var e = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t);
            if (e) return e[1]
        }

        function k(t, e) {
            return a.fnc(t) ? t(e.target, e.id, e.total) : t
        }

        function C(t, e) {
            return t.getAttribute(e)
        }

        function A(t, e, i) {
            if ($([i, "deg", "rad", "turn"], T(e))) return e;
            var s = n.CSS[e + i];
            if (!a.und(s)) return s;
            var r = document.createElement(t.tagName),
                o = t.parentNode && t.parentNode !== document ? t.parentNode : document.body;
            o.appendChild(r), r.style.position = "absolute", r.style.width = 100 + i;
            var l = 100 / r.offsetWidth;
            o.removeChild(r);
            var u = l * parseFloat(e);
            return n.CSS[e + i] = u, u
        }

        function E(t, e, i) {
            if (e in t.style) {
                var n = e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
                    s = t.style[e] || getComputedStyle(t).getPropertyValue(n) || "0";
                return i ? A(t, s, i) : s
            }
        }

        function I(t, e) {
            return a.dom(t) && !a.inp(t) && (C(t, e) || a.svg(t) && t[e]) ? "attribute" : a.dom(t) && $(i, e) ? "transform" : a.dom(t) && "transform" !== e && E(t, e) ? "css" : null != t[e] ? "object" : void 0
        }

        function P(t) {
            if (a.dom(t)) {
                for (var e, i = t.style.transform || "", n = /(\w+)\(([^)]*)\)/g, s = new Map; e = n.exec(i);) s.set(e[1], e[2]);
                return s
            }
        }

        function z(t, e, i, n) {
            var s, o = r(e, "scale") ? 1 : 0 + (r(s = e, "translate") || "perspective" === s ? "px" : r(s, "rotate") || r(s, "skew") ? "deg" : void 0),
                a = P(t).get(e) || o;
            return i && (i.transforms.list.set(e, a), i.transforms.last = e), n ? A(t, a, n) : a
        }

        function L(t, e, i, n) {
            switch (I(t, e)) {
                case "transform":
                    return z(t, e, n, i);
                case "css":
                    return E(t, e, i);
                case "attribute":
                    return C(t, e);
                default:
                    return t[e] || 0
            }
        }

        function M(t, e) {
            var i = /^(\*=|\+=|-=)/.exec(t);
            if (!i) return t;
            var n = T(t) || 0,
                s = parseFloat(e),
                r = parseFloat(t.replace(i[0], ""));
            switch (i[0][0]) {
                case "+":
                    return s + r + n;
                case "-":
                    return s - r + n;
                case "*":
                    return s * r + n
            }
        }

        function O(t, e) {
            if (a.col(t)) return S(t);
            if (/\s/g.test(t)) return t;
            var i = T(t),
                n = i ? t.substr(0, t.length - i.length) : t;
            return e ? n + e : n
        }

        function D(t, e) {
            return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
        }

        function N(t) {
            for (var e, i = t.points, n = 0, s = 0; s < i.numberOfItems; s++) {
                var r = i.getItem(s);
                s > 0 && (n += D(e, r)), e = r
            }
            return n
        }

        function F(t) {
            var e, i, n, s, r;
            if (t.getTotalLength) return t.getTotalLength();
            switch (t.tagName.toLowerCase()) {
                case "circle":
                    return 2 * Math.PI * C(r = t, "r");
                case "rect":
                    return 2 * C(s = t, "width") + 2 * C(s, "height");
                case "line":
                    return D({
                        x: C(n = t, "x1"),
                        y: C(n, "y1")
                    }, {
                        x: C(n, "x2"),
                        y: C(n, "y2")
                    });
                case "polyline":
                    return N(t);
                case "polygon":
                    return i = (e = t).points, N(e) + D(i.getItem(i.numberOfItems - 1), i.getItem(0))
            }
        }

        function j(t, e) {
            var i = e || {},
                n = i.el || function(t) {
                    for (var e = t.parentNode; a.svg(e) && a.svg(e.parentNode);) e = e.parentNode;
                    return e
                }(t),
                s = n.getBoundingClientRect(),
                r = C(n, "viewBox"),
                o = s.width,
                l = s.height,
                u = i.viewBox || (r ? r.split(" ") : [0, 0, o, l]);
            return {
                el: n,
                viewBox: u,
                x: u[0] / 1,
                y: u[1] / 1,
                w: o / u[2],
                h: l / u[3]
            }
        }

        function H(t, e) {
            function i(i) {
                void 0 === i && (i = 0);
                var n = e + i >= 1 ? e + i : 0;
                return t.el.getPointAtLength(n)
            }
            var n = j(t.el, t.svg),
                s = i(),
                r = i(-1),
                o = i(1);
            switch (t.property) {
                case "x":
                    return (s.x - n.x) * n.w;
                case "y":
                    return (s.y - n.y) * n.h;
                case "angle":
                    return 180 * Math.atan2(o.y - r.y, o.x - r.x) / Math.PI
            }
        }

        function q(t, e) {
            var i = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
                n = O(a.pth(t) ? t.totalLength : t, e) + "";
            return {
                original: n,
                numbers: n.match(i) ? n.match(i).map(Number) : [0],
                strings: a.str(t) || e ? n.split(i) : []
            }
        }

        function W(t) {
            return y(t ? v(a.arr(t) ? t.map(b) : b(t)) : [], function(t, e, i) {
                return i.indexOf(t) === e
            })
        }

        function R(t) {
            var e = W(t);
            return e.map(function(t, i) {
                return {
                    target: t,
                    id: i,
                    total: e.length,
                    transforms: {
                        list: P(t)
                    }
                }
            })
        }

        function B(t, e) {
            var i = w(e);
            if (/^spring/.test(i.easing) && (i.duration = u(i.easing)), a.arr(t)) {
                var n = t.length;
                2 !== n || a.obj(t[0]) ? a.fnc(e.duration) || (i.duration = e.duration / n) : t = {
                    value: t
                }
            }
            var s = a.arr(t) ? t : [t];
            return s.map(function(t, i) {
                var n = a.obj(t) && !a.pth(t) ? t : {
                    value: t
                };
                return a.und(n.delay) && (n.delay = i ? 0 : e.delay), a.und(n.endDelay) && (n.endDelay = i === s.length - 1 ? e.endDelay : 0), n
            }).map(function(t) {
                return x(t, i)
            })
        }

        function Y(t, e) {
            var i = [],
                n = e.keyframes;
            for (var s in n && (e = x(function(t) {
                    for (var e = y(v(t.map(function(t) {
                            return Object.keys(t)
                        })), function(t) {
                            return a.key(t)
                        }).reduce(function(t, e) {
                            return 0 > t.indexOf(e) && t.push(e), t
                        }, []), i = {}, n = function(n) {
                            var s = e[n];
                            i[s] = t.map(function(t) {
                                var e = {};
                                for (var i in t) a.key(i) ? i == s && (e.value = t[i]) : e[i] = t[i];
                                return e
                            })
                        }, s = 0; s < e.length; s++) n(s);
                    return i
                }(n), e)), e) a.key(s) && i.push({
                name: s,
                tweens: B(e[s], t)
            });
            return i
        }

        function V(t, e) {
            var i;
            return t.tweens.map(function(n) {
                var s = function(t, e) {
                        var i = {};
                        for (var n in t) {
                            var s = k(t[n], e);
                            a.arr(s) && 1 === (s = s.map(function(t) {
                                return k(t, e)
                            })).length && (s = s[0]), i[n] = s
                        }
                        return i.duration = parseFloat(i.duration), i.delay = parseFloat(i.delay), i
                    }(n, e),
                    r = s.value,
                    o = a.arr(r) ? r[1] : r,
                    l = T(o),
                    u = L(e.target, t.name, l, e),
                    h = i ? i.to.original : u,
                    c = a.arr(r) ? r[0] : h,
                    d = T(c) || T(u),
                    p = l || d;
                return a.und(o) && (o = h), s.from = q(c, p), s.to = q(M(o, c), p), s.start = i ? i.end : 0, s.end = s.start + s.delay + s.duration + s.endDelay, s.easing = g(s.easing, s.duration), s.isPath = a.pth(r), s.isColor = a.col(s.from.original), s.isColor && (s.round = 1), i = s, s
            })
        }
        var X = {
            css: function(t, e, i) {
                return t.style[e] = i
            },
            attribute: function(t, e, i) {
                return t.setAttribute(e, i)
            },
            object: function(t, e, i) {
                return t[e] = i
            },
            transform: function(t, e, i, n, s) {
                if (n.list.set(e, i), e === n.last || s) {
                    var r = "";
                    n.list.forEach(function(t, e) {
                        r += e + "(" + t + ") "
                    }), t.style.transform = r
                }
            }
        };

        function U(t, e) {
            R(t).forEach(function(t) {
                for (var i in e) {
                    var n = k(e[i], t),
                        s = t.target,
                        r = T(n),
                        o = L(s, i, r, t),
                        a = M(O(n, r || T(o)), o);
                    X[I(s, i)](s, i, a, t.transforms, !0)
                }
            })
        }

        function Q(t, e) {
            return y(v(t.map(function(t) {
                return e.map(function(e) {
                    return function(t, e) {
                        var i = I(t.target, e.name);
                        if (i) {
                            var n = V(e, t),
                                s = n[n.length - 1];
                            return {
                                type: i,
                                property: e.name,
                                animatable: t,
                                tweens: n,
                                duration: s.end,
                                delay: n[0].delay,
                                endDelay: s.endDelay
                            }
                        }
                    }(t, e)
                })
            })), function(t) {
                return !a.und(t)
            })
        }

        function G(t, e) {
            var i = t.length,
                n = function(t) {
                    return t.timelineOffset ? t.timelineOffset : 0
                },
                s = {};
            return s.duration = i ? Math.max.apply(Math, t.map(function(t) {
                return n(t) + t.duration
            })) : e.duration, s.delay = i ? Math.min.apply(Math, t.map(function(t) {
                return n(t) + t.delay
            })) : e.delay, s.endDelay = i ? s.duration - Math.max.apply(Math, t.map(function(t) {
                return n(t) + t.duration - t.endDelay
            })) : e.endDelay, s
        }
        var Z, K = 0,
            J = [],
            tt = [],
            te = function() {
                function t() {
                    Z = requestAnimationFrame(e)
                }

                function e(e) {
                    var i = J.length;
                    if (i) {
                        for (var n = 0; n < i;) {
                            var s = J[n];
                            if (s.paused) {
                                var r = J.indexOf(s);
                                r > -1 && (J.splice(r, 1), i = J.length)
                            } else s.tick(e);
                            n++
                        }
                        t()
                    } else Z = cancelAnimationFrame(Z)
                }
                return t
            }();

        function ti(i) {
            void 0 === i && (i = {});
            var n, r = 0,
                o = 0,
                a = 0,
                l = 0,
                u = null;

            function h(t) {
                var e = window.Promise && new Promise(function(t) {
                    return u = t
                });
                return t.finished = e, e
            }
            var c, d, p, f, g, m, v, b, $ = (d = _(t, c = i), p = _(e, c), f = Y(p, c), g = R(c.targets), m = Q(g, f), v = G(m, p), b = K, K++, x(d, {
                id: b,
                children: [],
                animatables: g,
                animations: m,
                duration: v.duration,
                delay: v.delay,
                endDelay: v.endDelay
            }));

            function w() {
                var t = $.direction;
                "alternate" !== t && ($.direction = "normal" !== t ? "normal" : "reverse"), $.reversed = !$.reversed, n.forEach(function(t) {
                    return t.reversed = $.reversed
                })
            }

            function S(t) {
                return $.reversed ? $.duration - t : t
            }

            function T() {
                r = 0, o = S($.currentTime) * (1 / ti.speed)
            }

            function k(t, e) {
                e && e.seek(t - e.timelineOffset)
            }

            function C(t) {
                for (var e = 0, i = $.animations, n = i.length; e < n;) {
                    var r = i[e],
                        o = r.animatable,
                        a = r.tweens,
                        l = a.length - 1,
                        u = a[l];
                    l && (u = y(a, function(e) {
                        return t < e.end
                    })[0] || u);
                    for (var h = s(t - u.start - u.delay, 0, u.duration) / u.duration, c = isNaN(h) ? 1 : u.easing(h), d = u.to.strings, p = u.round, f = [], g = u.to.numbers.length, m = void 0, v = 0; v < g; v++) {
                        var b = void 0,
                            w = u.to.numbers[v],
                            _ = u.from.numbers[v] || 0;
                        b = u.isPath ? H(u.value, c * w) : _ + c * (w - _), p && (u.isColor && v > 2 || (b = Math.round(b * p) / p)), f.push(b)
                    }
                    var x = d.length;
                    if (x) {
                        m = d[0];
                        for (var S = 0; S < x; S++) {
                            d[S];
                            var T = d[S + 1],
                                k = f[S];
                            isNaN(k) || (m += T ? k + T : k + " ")
                        }
                    } else m = f[0];
                    X[r.type](o.target, r.property, m, o.transforms), r.currentValue = m, e++
                }
            }

            function A(t) {
                $[t] && !$.passThrough && $[t]($)
            }

            function E(t) {
                var e = $.duration,
                    i = $.delay,
                    c = e - $.endDelay,
                    d = S(t);
                $.progress = s(d / e * 100, 0, 100), $.reversePlayback = d < $.currentTime, n && function(t) {
                    if ($.reversePlayback)
                        for (var e = l; e--;) k(t, n[e]);
                    else
                        for (var i = 0; i < l; i++) k(t, n[i])
                }(d), !$.began && $.currentTime > 0 && ($.began = !0, A("begin")), !$.loopBegan && $.currentTime > 0 && ($.loopBegan = !0, A("loopBegin")), d <= i && 0 !== $.currentTime && C(0), (d >= c && $.currentTime !== e || !e) && C(e), d > i && d < c ? ($.changeBegan || ($.changeBegan = !0, $.changeCompleted = !1, A("changeBegin")), A("change"), C(d)) : $.changeBegan && ($.changeCompleted = !0, $.changeBegan = !1, A("changeComplete")), $.currentTime = s(d, 0, e), $.began && A("update"), t >= e && (o = 0, $.remaining && !0 !== $.remaining && $.remaining--, $.remaining ? (r = a, A("loopComplete"), $.loopBegan = !1, "alternate" === $.direction && w()) : ($.paused = !0, $.completed || ($.completed = !0, A("loopComplete"), A("complete"), !$.passThrough && "Promise" in window && (u(), h($)))))
            }
            return h($), $.reset = function() {
                var t = $.direction;
                $.passThrough = !1, $.currentTime = 0, $.progress = 0, $.paused = !0, $.began = !1, $.loopBegan = !1, $.changeBegan = !1, $.completed = !1, $.changeCompleted = !1, $.reversePlayback = !1, $.reversed = "reverse" === t, $.remaining = $.loop, n = $.children;
                for (var e = l = n.length; e--;) $.children[e].reset();
                ($.reversed && !0 !== $.loop || "alternate" === t && 1 === $.loop) && $.remaining++, C($.reversed ? $.duration : 0)
            }, $.set = function(t, e) {
                return U(t, e), $
            }, $.tick = function(t) {
                a = t, r || (r = a), E((a + (o - r)) * ti.speed)
            }, $.seek = function(t) {
                E(S(t))
            }, $.pause = function() {
                $.paused = !0, T()
            }, $.play = function() {
                $.paused && ($.completed && $.reset(), $.paused = !1, J.push($), T(), Z || te())
            }, $.reverse = function() {
                w(), T()
            }, $.restart = function() {
                $.reset(), $.play()
            }, $.reset(), $.autoplay && $.play(), $
        }

        function tn(t, e) {
            for (var i = e.length; i--;) $(t, e[i].animatable.target) && e.splice(i, 1)
        }
        return "undefined" != typeof document && document.addEventListener("visibilitychange", function() {
            document.hidden ? (J.forEach(function(t) {
                return t.pause()
            }), tt = J.slice(0), ti.running = J = []) : tt.forEach(function(t) {
                return t.play()
            })
        }), ti.version = "3.1.0", ti.speed = 1, ti.running = J, ti.remove = function(t) {
            for (var e = W(t), i = J.length; i--;) {
                var n = J[i],
                    s = n.animations,
                    r = n.children;
                tn(e, s);
                for (var o = r.length; o--;) {
                    var a = r[o],
                        l = a.animations;
                    tn(e, l), l.length || a.children.length || r.splice(o, 1)
                }
                s.length || r.length || n.pause()
            }
        }, ti.get = L, ti.set = U, ti.convertPx = A, ti.path = function(t, e) {
            var i = a.str(t) ? m(t)[0] : t,
                n = e || 100;
            return function(t) {
                return {
                    property: t,
                    el: i,
                    svg: j(i),
                    totalLength: F(i) * (n / 100)
                }
            }
        }, ti.setDashoffset = function(t) {
            var e = F(t);
            return t.setAttribute("stroke-dasharray", e), e
        }, ti.stagger = function(t, e) {
            void 0 === e && (e = {});
            var i = e.direction || "normal",
                n = e.easing ? g(e.easing) : null,
                s = e.grid,
                r = e.axis,
                o = e.from || 0,
                l = "first" === o,
                u = "center" === o,
                h = "last" === o,
                c = a.arr(t),
                d = c ? parseFloat(t[0]) : parseFloat(t),
                p = c ? parseFloat(t[1]) : 0,
                f = T(c ? t[1] : t) || 0,
                m = e.start || 0 + (c ? d : 0),
                y = [],
                v = 0;
            return function(t, e, a) {
                if (l && (o = 0), u && (o = (a - 1) / 2), h && (o = a - 1), !y.length) {
                    for (var g = 0; g < a; g++) {
                        if (s) {
                            var b = u ? (s[0] - 1) / 2 : o % s[0],
                                $ = u ? (s[1] - 1) / 2 : Math.floor(o / s[0]),
                                w = b - g % s[0],
                                _ = $ - Math.floor(g / s[0]),
                                x = Math.sqrt(w * w + _ * _);
                            "x" === r && (x = -w), "y" === r && (x = -_), y.push(x)
                        } else y.push(Math.abs(o - g));
                        v = Math.max.apply(Math, y)
                    }
                    n && (y = y.map(function(t) {
                        return n(t / v) * v
                    })), "reverse" === i && (y = y.map(function(t) {
                        return r ? t < 0 ? -1 * t : -t : Math.abs(v - t)
                    }))
                }
                return m + (c ? (p - d) / v : d) * (Math.round(100 * y[e]) / 100) + f
            }
        }, ti.timeline = function(t) {
            void 0 === t && (t = {});
            var i = ti(t);
            return i.duration = 0, i.add = function(n, s) {
                var r = J.indexOf(i),
                    o = i.children;

                function l(t) {
                    t.passThrough = !0
                }
                r > -1 && J.splice(r, 1);
                for (var u = 0; u < o.length; u++) l(o[u]);
                var h = x(n, _(e, t));
                h.targets = h.targets || t.targets;
                var c = i.duration;
                h.autoplay = !1, h.direction = i.direction, h.timelineOffset = a.und(s) ? c : M(s, c), l(i), i.seek(h.timelineOffset);
                var d = ti(h);
                l(d), o.push(d);
                var p = G(o, t);
                return i.delay = p.delay, i.endDelay = p.endDelay, i.duration = p.duration, i.seek(0), i.reset(), i.autoplay && i.play(), i
            }, i
        }, ti.easing = g, ti.penner = f, ti.random = function(t, e) {
            return Math.floor(Math.random() * (e - t + 1)) + t
        }, ti
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.ScrollMagic = e()
    }(this, function() {
        "use strict";
        var t = function() {};
        t.version = "2.0.7", window.addEventListener("mousewheel", function() {});
        var e = "data-scrollmagic-pin-spacer";
        t.Controller = function(n) {
            var r, o, a = "REVERSE",
                l = "PAUSED",
                u = i.defaults,
                h = this,
                c = s.extend({}, u, n),
                d = [],
                p = !1,
                f = 0,
                g = l,
                m = !0,
                y = 0,
                v = !0,
                b = function() {
                    0 < c.refreshInterval && (o = window.setTimeout(k, c.refreshInterval))
                },
                $ = function() {
                    return c.vertical ? s.get.scrollTop(c.container) : s.get.scrollLeft(c.container)
                },
                w = function() {
                    return c.vertical ? s.get.height(c.container) : s.get.width(c.container)
                },
                _ = this._setScrollPos = function(t) {
                    c.vertical ? m ? window.scrollTo(s.get.scrollLeft(), t) : c.container.scrollTop = t : m ? window.scrollTo(t, s.get.scrollTop()) : c.container.scrollLeft = t
                },
                x = function() {
                    if (v && p) {
                        var t = s.type.Array(p) ? p : d.slice(0);
                        p = !1;
                        var e = f,
                            i = (f = h.scrollPos()) - e;
                        0 !== i && (g = 0 < i ? "FORWARD" : a), g === a && t.reverse(), t.forEach(function(t, e) {
                            t.update(!0)
                        })
                    }
                },
                S = function() {
                    r = s.rAF(x)
                },
                T = function(t) {
                    "resize" == t.type && (y = w(), g = l), !0 !== p && (p = !0, S())
                },
                k = function() {
                    if (!m && y != w()) {
                        var t;
                        try {
                            t = new Event("resize", {
                                bubbles: !1,
                                cancelable: !1
                            })
                        } catch (e) {
                            (t = document.createEvent("Event")).initEvent("resize", !1, !1)
                        }
                        c.container.dispatchEvent(t)
                    }
                    d.forEach(function(t, e) {
                        t.refresh()
                    }), b()
                };
            this._options = c;
            var C = function(t) {
                if (t.length <= 1) return t;
                var e = t.slice(0);
                return e.sort(function(t, e) {
                    return t.scrollOffset() > e.scrollOffset() ? 1 : -1
                }), e
            };
            return this.addScene = function(e) {
                    if (s.type.Array(e)) e.forEach(function(t, e) {
                        h.addScene(t)
                    });
                    else if (e instanceof t.Scene) {
                        if (e.controller() !== h) e.addTo(h);
                        else if (0 > d.indexOf(e))
                            for (var i in d.push(e), d = C(d), e.on("shift.controller_sort", function() {
                                    d = C(d)
                                }), c.globalSceneOptions) e[i] && e[i].call(e, c.globalSceneOptions[i])
                    }
                    return h
                }, this.removeScene = function(t) {
                    if (s.type.Array(t)) t.forEach(function(t, e) {
                        h.removeScene(t)
                    });
                    else {
                        var e = d.indexOf(t); - 1 < e && (t.off("shift.controller_sort"), d.splice(e, 1), t.remove())
                    }
                    return h
                }, this.updateScene = function(e, i) {
                    return s.type.Array(e) ? e.forEach(function(t, e) {
                        h.updateScene(t, i)
                    }) : i ? e.update(!0) : !0 !== p && e instanceof t.Scene && (-1 == (p = p || []).indexOf(e) && p.push(e), p = C(p), S()), h
                }, this.update = function(t) {
                    return T({
                        type: "resize"
                    }), t && x(), h
                }, this.scrollTo = function(i, n) {
                    if (s.type.Number(i)) _.call(c.container, i, n);
                    else if (i instanceof t.Scene) i.controller() === h && h.scrollTo(i.scrollOffset(), n);
                    else if (s.type.Function(i)) _ = i;
                    else {
                        var r = s.get.elements(i)[0];
                        if (r) {
                            for (; r.parentNode.hasAttribute(e);) r = r.parentNode;
                            var o = c.vertical ? "top" : "left",
                                a = s.get.offset(c.container),
                                l = s.get.offset(r);
                            m || (a[o] -= h.scrollPos()), h.scrollTo(l[o] - a[o], n)
                        }
                    }
                    return h
                }, this.scrollPos = function(t) {
                    return arguments.length ? (s.type.Function(t) && ($ = t), h) : $.call(h)
                }, this.info = function(t) {
                    var e = {
                        size: y,
                        vertical: c.vertical,
                        scrollPos: f,
                        scrollDirection: g,
                        container: c.container,
                        isDocument: m
                    };
                    return arguments.length ? void 0 !== e[t] ? e[t] : void 0 : e
                }, this.loglevel = function(t) {
                    return h
                }, this.enabled = function(t) {
                    return arguments.length ? (v != t && (v = !!t, h.updateScene(d, !0)), h) : v
                }, this.destroy = function(t) {
                    window.clearTimeout(o);
                    for (var e = d.length; e--;) d[e].destroy(t);
                    return c.container.removeEventListener("resize", T), c.container.removeEventListener("scroll", T), s.cAF(r), null
                },
                function() {
                    for (var t in c) u.hasOwnProperty(t) || delete c[t];
                    if (c.container = s.get.elements(c.container)[0], !c.container) throw "ScrollMagic.Controller init failed.";
                    (m = c.container === window || c.container === document.body || !document.body.contains(c.container)) && (c.container = window), y = w(), c.container.addEventListener("resize", T), c.container.addEventListener("scroll", T);
                    var e = parseInt(c.refreshInterval, 10);
                    c.refreshInterval = s.type.Number(e) ? e : u.refreshInterval, b()
                }(), h
        };
        var i = {
            defaults: {
                container: window,
                vertical: !0,
                globalSceneOptions: {},
                loglevel: 2,
                refreshInterval: 100
            }
        };
        t.Controller.addOption = function(t, e) {
            i.defaults[t] = e
        }, t.Controller.extend = function(e) {
            var i = this;
            t.Controller = function() {
                return i.apply(this, arguments), this.$super = s.extend({}, this), e.apply(this, arguments) || this
            }, s.extend(t.Controller, i), t.Controller.prototype = i.prototype, t.Controller.prototype.constructor = t.Controller
        }, t.Scene = function(i) {
            var r, o, a = "BEFORE",
                l = "DURING",
                u = "AFTER",
                h = n.defaults,
                c = this,
                d = s.extend({}, h, i),
                p = a,
                f = 0,
                g = {
                    start: 0,
                    end: 0
                },
                m = 0,
                y = !0,
                v = {};
            this.on = function(t, e) {
                return s.type.Function(e) && (t = t.trim().split(" ")).forEach(function(t) {
                    var i = t.split("."),
                        n = i[0],
                        s = i[1];
                    "*" != n && (v[n] || (v[n] = []), v[n].push({
                        namespace: s || "",
                        callback: e
                    }))
                }), c
            }, this.off = function(t, e) {
                return t && (t = t.trim().split(" ")).forEach(function(t, i) {
                    var n = t.split("."),
                        s = n[0],
                        r = n[1] || "";
                    ("*" === s ? Object.keys(v) : [s]).forEach(function(t) {
                        for (var i = v[t] || [], n = i.length; n--;) {
                            var s = i[n];
                            !s || r !== s.namespace && "*" !== r || e && e != s.callback || i.splice(n, 1)
                        }
                        i.length || delete v[t]
                    })
                }), c
            }, this.trigger = function(e, i) {
                if (e) {
                    var n = e.trim().split("."),
                        s = n[0],
                        r = n[1],
                        o = v[s];
                    o && o.forEach(function(e, n) {
                        r && r !== e.namespace || e.callback.call(c, new t.Event(s, e.namespace, c, i))
                    })
                }
                return c
            }, c.on("change.internal", function(t) {
                "loglevel" !== t.what && "tweenChanges" !== t.what && ("triggerElement" === t.what ? x() : "reverse" === t.what && c.update())
            }).on("shift.internal", function(t) {
                w(), c.update()
            }), this.addTo = function(e) {
                return e instanceof t.Controller && o != e && (o && o.removeScene(c), o = e, k(), _(!0), x(!0), w(), o.info("container").addEventListener("resize", S), e.addScene(c), c.trigger("add", {
                    controller: o
                }), c.update()), c
            }, this.enabled = function(t) {
                return arguments.length ? (y != t && (y = !!t, c.update(!0)), c) : y
            }, this.remove = function() {
                if (o) {
                    o.info("container").removeEventListener("resize", S);
                    var t = o;
                    o = void 0, t.removeScene(c), c.trigger("remove")
                }
                return c
            }, this.destroy = function(t) {
                return c.trigger("destroy", {
                    reset: t
                }), c.remove(), c.off("*.*"), null
            }, this.update = function(t) {
                if (o) {
                    if (t) {
                        if (o.enabled() && y) {
                            var e, i = o.info("scrollPos");
                            e = 0 < d.duration ? (i - g.start) / (g.end - g.start) : i >= g.start ? 1 : 0, c.trigger("update", {
                                startPos: g.start,
                                endPos: g.end,
                                scrollPos: i
                            }), c.progress(e)
                        } else b && p === l && E(!0)
                    } else o.updateScene(c, !1)
                }
                return c
            }, this.refresh = function() {
                return _(), x(), c
            }, this.progress = function(t) {
                if (arguments.length) {
                    var e = !1,
                        i = p,
                        n = o ? o.info("scrollDirection") : "PAUSED",
                        s = d.reverse || f <= t;
                    if (0 === d.duration ? (e = f != t, p = 0 == (f = t < 1 && s ? 0 : 1) ? a : l) : t < 0 && p !== a && s ? (p = a, e = (f = 0, !0)) : 0 <= t && t < 1 && s ? (f = t, p = l, e = !0) : 1 <= t && p !== u ? (f = 1, p = u, e = !0) : p !== l || s || E(), e) {
                        var r = {
                                progress: f,
                                state: p,
                                scrollDirection: n
                            },
                            h = p != i,
                            g = function(t) {
                                c.trigger(t, r)
                            };
                        h && i !== l && (g("enter"), g(i === a ? "start" : "end")), g("progress"), h && p !== l && (g(p === a ? "start" : "end"), g("leave"))
                    }
                    return c
                }
                return f
            };
            var b, $, w = function() {
                    g = {
                        start: m + d.offset
                    }, o && d.triggerElement && (g.start -= o.info("size") * d.triggerHook), g.end = g.start + d.duration
                },
                _ = function(t) {
                    if (r) {
                        var e = "duration";
                        C(e, r.call(c)) && !t && (c.trigger("change", {
                            what: e,
                            newval: d[e]
                        }), c.trigger("shift", {
                            reason: e
                        }))
                    }
                },
                x = function(t) {
                    var i = 0,
                        n = d.triggerElement;
                    if (o && (n || 0 < m)) {
                        if (n) {
                            if (n.parentNode) {
                                for (var r = o.info(), a = s.get.offset(r.container), l = r.vertical ? "top" : "left"; n.parentNode.hasAttribute(e);) n = n.parentNode;
                                var u = s.get.offset(n);
                                r.isDocument || (a[l] -= o.scrollPos()), i = u[l] - a[l]
                            } else c.triggerElement(void 0)
                        }
                        var h = i != m;
                        m = i, h && !t && c.trigger("shift", {
                            reason: "triggerElementPosition"
                        })
                    }
                },
                S = function(t) {
                    0 < d.triggerHook && c.trigger("shift", {
                        reason: "containerResize"
                    })
                },
                T = s.extend(n.validate, {
                    duration: function(t) {
                        if (s.type.String(t) && t.match(/^(\.|\d)*\d+%$/)) {
                            var e = parseFloat(t) / 100;
                            t = function() {
                                return o ? o.info("size") * e : 0
                            }
                        }
                        if (s.type.Function(t)) {
                            r = t;
                            try {
                                t = parseFloat(r.call(c))
                            } catch (i) {
                                t = -1
                            }
                        }
                        if (t = parseFloat(t), !s.type.Number(t) || t < 0) throw r && (r = void 0), 0;
                        return t
                    }
                }),
                k = function(t) {
                    (t = arguments.length ? [t] : Object.keys(T)).forEach(function(t, e) {
                        var i;
                        if (T[t]) try {
                            i = T[t](d[t])
                        } catch (n) {
                            i = h[t]
                        } finally {
                            d[t] = i
                        }
                    })
                },
                C = function(t, e) {
                    var i = !1,
                        n = d[t];
                    return d[t] != e && (d[t] = e, k(t), i = n != d[t]), i
                },
                A = function(t) {
                    c[t] || (c[t] = function(e) {
                        return arguments.length ? ("duration" === t && (r = void 0), C(t, e) && (c.trigger("change", {
                            what: t,
                            newval: d[t]
                        }), -1 < n.shifts.indexOf(t) && c.trigger("shift", {
                            reason: t
                        })), c) : d[t]
                    })
                };
            this.controller = function() {
                return o
            }, this.state = function() {
                return p
            }, this.scrollOffset = function() {
                return g.start
            }, this.triggerPosition = function() {
                var t = d.offset;
                return o && (d.triggerElement ? t += m : t += o.info("size") * c.triggerHook()), t
            }, c.on("shift.internal", function(t) {
                var e = "duration" === t.reason;
                (p === u && e || p === l && 0 === d.duration) && E(), e && I()
            }).on("progress.internal", function(t) {
                E()
            }).on("add.internal", function(t) {
                I()
            }).on("destroy.internal", function(t) {
                c.removePin(t.reset)
            });
            var E = function(t) {
                    if (b && o) {
                        var e = o.info(),
                            i = $.spacer.firstChild;
                        if (t || p !== l) {
                            var n = {
                                    position: $.inFlow ? "relative" : "absolute",
                                    top: 0,
                                    left: 0
                                },
                                r = s.css(i, "position") != n.position;
                            $.pushFollowers ? 0 < d.duration && (p === u && 0 === parseFloat(s.css($.spacer, "padding-top")) ? r = !0 : p === a && 0 === parseFloat(s.css($.spacer, "padding-bottom")) && (r = !0)) : n[e.vertical ? "top" : "left"] = d.duration * f, s.css(i, n), r && I()
                        } else {
                            "fixed" != s.css(i, "position") && (s.css(i, {
                                position: "fixed"
                            }), I());
                            var h = s.get.offset($.spacer, !0),
                                c = d.reverse || 0 === d.duration ? e.scrollPos - g.start : Math.round(f * d.duration * 10) / 10;
                            h[e.vertical ? "top" : "left"] += c, s.css($.spacer.firstChild, {
                                top: h.top,
                                left: h.left
                            })
                        }
                    }
                },
                I = function() {
                    if (b && o && $.inFlow) {
                        var t = p === l,
                            e = o.info("vertical"),
                            i = $.spacer.firstChild,
                            n = s.isMarginCollapseType(s.css($.spacer, "display")),
                            r = {};
                        $.relSize.width || $.relSize.autoFullWidth ? t ? s.css(b, {
                            width: s.get.width($.spacer)
                        }) : s.css(b, {
                            width: "100%"
                        }) : (r["min-width"] = s.get.width(e ? b : i, !0, !0), r.width = t ? r["min-width"] : "auto"), $.relSize.height ? t ? s.css(b, {
                            height: s.get.height($.spacer) - ($.pushFollowers ? d.duration : 0)
                        }) : s.css(b, {
                            height: "100%"
                        }) : (r["min-height"] = s.get.height(e ? i : b, !0, !n), r.height = t ? r["min-height"] : "auto"), $.pushFollowers && (r["padding" + (e ? "Top" : "Left")] = d.duration * f, r["padding" + (e ? "Bottom" : "Right")] = d.duration * (1 - f)), s.css($.spacer, r)
                    }
                },
                P = function() {
                    o && b && p === l && !o.info("isDocument") && E()
                },
                z = function() {
                    o && b && p === l && (($.relSize.width || $.relSize.autoFullWidth) && s.get.width(window) != s.get.width($.spacer.parentNode) || $.relSize.height && s.get.height(window) != s.get.height($.spacer.parentNode)) && I()
                },
                L = function(t) {
                    o && b && p === l && !o.info("isDocument") && (t.preventDefault(), o._setScrollPos(o.info("scrollPos") - ((t.wheelDelta || t[o.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || -(30 * t.detail))))
                };
            this.setPin = function(t, i) {
                if (i = s.extend({}, {
                        pushFollowers: !0,
                        spacerClass: "scrollmagic-pin-spacer"
                    }, i), !(t = s.get.elements(t)[0]) || "fixed" === s.css(t, "position")) return c;
                if (b) {
                    if (b === t) return c;
                    c.removePin()
                }
                var n = (b = t).parentNode.style.display,
                    r = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
                b.parentNode.style.display = "none";
                var o = "absolute" != s.css(b, "position"),
                    a = s.css(b, r.concat(["display"])),
                    l = s.css(b, ["width", "height"]);
                b.parentNode.style.display = n, !o && i.pushFollowers && (i.pushFollowers = !1);
                var u = b.parentNode.insertBefore(document.createElement("div"), b),
                    h = s.extend(a, {
                        position: o ? "relative" : "absolute",
                        boxSizing: "content-box",
                        mozBoxSizing: "content-box",
                        webkitBoxSizing: "content-box"
                    });
                if (o || s.extend(h, s.css(b, ["width", "height"])), s.css(u, h), u.setAttribute(e, ""), s.addClass(u, i.spacerClass), $ = {
                        spacer: u,
                        relSize: {
                            width: "%" === l.width.slice(-1),
                            height: "%" === l.height.slice(-1),
                            autoFullWidth: "auto" === l.width && o && s.isMarginCollapseType(a.display)
                        },
                        pushFollowers: i.pushFollowers,
                        inFlow: o
                    }, !b.___origStyle) {
                    b.___origStyle = {};
                    var d = b.style;
                    r.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]).forEach(function(t) {
                        b.___origStyle[t] = d[t] || ""
                    })
                }
                return $.relSize.width && s.css(u, {
                    width: l.width
                }), $.relSize.height && s.css(u, {
                    height: l.height
                }), u.appendChild(b), s.css(b, {
                    position: o ? "relative" : "absolute",
                    margin: "auto",
                    top: "auto",
                    left: "auto",
                    bottom: "auto",
                    right: "auto"
                }), ($.relSize.width || $.relSize.autoFullWidth) && s.css(b, {
                    boxSizing: "border-box",
                    mozBoxSizing: "border-box",
                    webkitBoxSizing: "border-box"
                }), window.addEventListener("scroll", P), window.addEventListener("resize", P), window.addEventListener("resize", z), b.addEventListener("mousewheel", L), b.addEventListener("DOMMouseScroll", L), E(), c
            }, this.removePin = function(t) {
                if (b) {
                    if (p === l && E(!0), t || !o) {
                        var i = $.spacer.firstChild;
                        if (i.hasAttribute(e)) {
                            var n = $.spacer.style,
                                r = {};
                            ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"].forEach(function(t) {
                                r[t] = n[t] || ""
                            }), s.css(i, r)
                        }
                        $.spacer.parentNode.insertBefore(i, $.spacer), $.spacer.parentNode.removeChild($.spacer), b.parentNode.hasAttribute(e) || (s.css(b, b.___origStyle), delete b.___origStyle)
                    }
                    window.removeEventListener("scroll", P), window.removeEventListener("resize", P), window.removeEventListener("resize", z), b.removeEventListener("mousewheel", L), b.removeEventListener("DOMMouseScroll", L), b = void 0
                }
                return c
            };
            var M, O = [];
            return c.on("destroy.internal", function(t) {
                    c.removeClassToggle(t.reset)
                }), this.setClassToggle = function(t, e) {
                    var i = s.get.elements(t);
                    return 0 !== i.length && s.type.String(e) && (0 < O.length && c.removeClassToggle(), M = e, O = i, c.on("enter.internal_class leave.internal_class", function(t) {
                        var e = "enter" === t.type ? s.addClass : s.removeClass;
                        O.forEach(function(t, i) {
                            e(t, M)
                        })
                    })), c
                }, this.removeClassToggle = function(t) {
                    return t && O.forEach(function(t, e) {
                        s.removeClass(t, M)
                    }), c.off("start.internal_class end.internal_class"), M = void 0, O = [], c
                },
                function() {
                    for (var t in d) h.hasOwnProperty(t) || delete d[t];
                    for (var e in h) A(e);
                    k()
                }(), c
        };
        var n = {
            defaults: {
                duration: 0,
                offset: 0,
                triggerElement: void 0,
                triggerHook: .5,
                reverse: !0,
                loglevel: 2
            },
            validate: {
                offset: function(t) {
                    if (t = parseFloat(t), !s.type.Number(t)) throw 0;
                    return t
                },
                triggerElement: function(t) {
                    if (t = t || void 0) {
                        var e = s.get.elements(t)[0];
                        if (!e || !e.parentNode) throw 0;
                        t = e
                    }
                    return t
                },
                triggerHook: function(t) {
                    var e = {
                        onCenter: .5,
                        onEnter: 1,
                        onLeave: 0
                    };
                    if (s.type.Number(t)) t = Math.max(0, Math.min(parseFloat(t), 1));
                    else {
                        if (!(t in e)) throw 0;
                        t = e[t]
                    }
                    return t
                },
                reverse: function(t) {
                    return !!t
                }
            },
            shifts: ["duration", "offset", "triggerHook"]
        };
        t.Scene.addOption = function(t, e, i, s) {
            t in n.defaults || (n.defaults[t] = e, n.validate[t] = i, s && n.shifts.push(t))
        }, t.Scene.extend = function(e) {
            var i = this;
            t.Scene = function() {
                return i.apply(this, arguments), this.$super = s.extend({}, this), e.apply(this, arguments) || this
            }, s.extend(t.Scene, i), t.Scene.prototype = i.prototype, t.Scene.prototype.constructor = t.Scene
        }, t.Event = function(t, e, i, n) {
            for (var s in n = n || {}) this[s] = n[s];
            return this.type = t, this.target = this.currentTarget = i, this.namespace = e || "", this.timeStamp = this.timestamp = Date.now(), this
        };
        var s = t._util = function(t) {
            var e, i = {},
                n = function(t) {
                    return parseFloat(t) || 0
                },
                s = function(e) {
                    return e.currentStyle ? e.currentStyle : t.getComputedStyle(e)
                },
                r = function(e, i, r, o) {
                    if ((i = i === document ? t : i) === t) o = !1;
                    else if (!c.DomElement(i)) return 0;
                    e = e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
                    var a = (r ? i["offset" + e] || i["outer" + e] : i["client" + e] || i["inner" + e]) || 0;
                    if (r && o) {
                        var l = s(i);
                        a += "Height" === e ? n(l.marginTop) + n(l.marginBottom) : n(l.marginLeft) + n(l.marginRight)
                    }
                    return a
                },
                o = function(t) {
                    return t.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function(t) {
                        return t[1].toUpperCase()
                    })
                };
            i.extend = function(t) {
                for (t = t || {}, e = 1; e < arguments.length; e++)
                    if (arguments[e])
                        for (var i in arguments[e]) arguments[e].hasOwnProperty(i) && (t[i] = arguments[e][i]);
                return t
            }, i.isMarginCollapseType = function(t) {
                return -1 < ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(t)
            };
            var a = 0,
                l = ["ms", "moz", "webkit", "o"],
                u = t.requestAnimationFrame,
                h = t.cancelAnimationFrame;
            for (e = 0; !u && e < 4; ++e) u = t[l[e] + "RequestAnimationFrame"], h = t[l[e] + "CancelAnimationFrame"] || t[l[e] + "CancelRequestAnimationFrame"];
            u || (u = function(e) {
                var i = (new Date).getTime(),
                    n = Math.max(0, 16 - (i - a)),
                    s = t.setTimeout(function() {
                        e(i + n)
                    }, n);
                return a = i + n, s
            }), h || (h = function(e) {
                t.clearTimeout(e)
            }), i.rAF = u.bind(t), i.cAF = h.bind(t);
            var c = i.type = function(t) {
                return Object.prototype.toString.call(t).replace(/^\[object (.+)\]$/, "$1").toLowerCase()
            };
            c.String = function(t) {
                return "string" === c(t)
            }, c.Function = function(t) {
                return "function" === c(t)
            }, c.Array = function(t) {
                return Array.isArray(t)
            }, c.Number = function(t) {
                return !c.Array(t) && 0 <= t - parseFloat(t) + 1
            }, c.DomElement = function(t) {
                return "object" == typeof HTMLElement || "function" == typeof HTMLElement ? t instanceof HTMLElement || t instanceof SVGElement : t && "object" == typeof t && null !== t && 1 === t.nodeType && "string" == typeof t.nodeName
            };
            var d = i.get = {};
            return d.elements = function(e) {
                var i = [];
                if (c.String(e)) try {
                    e = document.querySelectorAll(e)
                } catch (n) {
                    return i
                }
                if ("nodelist" === c(e) || c.Array(e) || e instanceof NodeList)
                    for (var s = 0, r = i.length = e.length; s < r; s++) {
                        var o = e[s];
                        i[s] = c.DomElement(o) ? o : d.elements(o)
                    } else(c.DomElement(e) || e === document || e === t) && (i = [e]);
                return i
            }, d.scrollTop = function(e) {
                return e && "number" == typeof e.scrollTop ? e.scrollTop : t.pageYOffset || 0
            }, d.scrollLeft = function(e) {
                return e && "number" == typeof e.scrollLeft ? e.scrollLeft : t.pageXOffset || 0
            }, d.width = function(t, e, i) {
                return r("width", t, e, i)
            }, d.height = function(t, e, i) {
                return r("height", t, e, i)
            }, d.offset = function(t, e) {
                var i = {
                    top: 0,
                    left: 0
                };
                if (t && t.getBoundingClientRect) {
                    var n = t.getBoundingClientRect();
                    i.top = n.top, i.left = n.left, e || (i.top += d.scrollTop(), i.left += d.scrollLeft())
                }
                return i
            }, i.addClass = function(t, e) {
                e && (t.classList ? t.classList.add(e) : t.className += " " + e)
            }, i.removeClass = function(t, e) {
                e && (t.classList ? t.classList.remove(e) : t.className = t.className.replace(RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " "))
            }, i.css = function(t, e) {
                if (c.String(e)) return s(t)[o(e)];
                if (c.Array(e)) {
                    var i = {},
                        n = s(t);
                    return e.forEach(function(t, e) {
                        i[t] = n[o(t)]
                    }), i
                }
                for (var r in e) {
                    var a = e[r];
                    a == parseFloat(a) && (a += "px"), t.style[o(r)] = a
                }
            }, i
        }(window || {});
        return t
    }),
    function(t) {
        t.fn.readall = function(e) {
            var i = t.extend({
                showheight: 96,
                showrows: null,
                animationspeed: 200,
                btnTextShowmore: "Read more",
                btnTextShowless: "Read less",
                btnClassShowmore: "readall-button",
                btnClassShowless: "readall-button"
            }, e);
            return t(this).each(function() {
                var e = t(this),
                    n = function() {
                        return e[0].scrollHeight
                    },
                    s = "readall-wrapper",
                    r = "readall-hide";
                if (null != i.showrows) {
                    var o = Math.floor(1.5 * parseFloat(e.css("font-size")));
                    i.showheight = o * i.showrows
                }
                e.addClass("readall").css({
                    overflow: "hidden"
                });
                var a = function(s) {
                    var o = e.parent().find("button." + i.btnClassShowmore.replace(/\s+/g, ".") + ", button." + i.btnClassShowless.replace(/\s+/g, "."));
                    n() > i.showheight + t(o).outerHeight() ? t(o).is(":visible") && null != s || (e.css({
                        height: i.showheight + "px",
                        "max-height": i.showheight + "px"
                    }), t(o).text(i.btnTextShowmore), e.addClass(r), t(o).removeClass(i.btnClassShowless).addClass(i.btnClassShowmore), t(o).show()) : (t(o).is(":visible") || null == s) && (e.css({
                        height: "",
                        "max-height": ""
                    }), e.removeClass(r), t(o).hide())
                };
                if (e.parent().not(s)) {
                    e.wrap(t("<div />").addClass(s));
                    var l = t("<button />").addClass(i.btnClassShowmore).text(i.btnTextShowmore).on("click", function(s) {
                        s.preventDefault(), e.hasClass(r) ? e.css({
                            height: i.showheight + "px",
                            "max-height": ""
                        }).animate({
                            height: n() + "px"
                        }, i.animationspeed, function() {
                            e.css({
                                height: ""
                            }), t(l).text(i.btnTextShowless)
                        }) : e.animate({
                            height: i.showheight + "px"
                        }, i.animationspeed, function() {
                            e.css({
                                "max-height": i.showheight + "px"
                            }), t(l).text(i.btnTextShowmore)
                        }), e.toggleClass(r), t(this).toggleClass(i.btnClassShowmore).toggleClass(i.btnClassShowless)
                    });
                    e.after(l), t(window).on("orientationchange resize", a), a(null)
                }
            }), this
        }
    }(jQuery);