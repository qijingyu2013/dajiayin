(function () {
    function e(n, t) {
        var i;
        n || (n = {});
        for (i in t)n[i] = t[i];
        return n
    }

    function o() {
        for (var r = arguments.length, t = {}, i = function (n, t) {
            var r, u;
            typeof n != "object" && (n = {});
            for (u in t)t.hasOwnProperty(u) && (r = t[u], n[u] = r && typeof r == "object" && Object.prototype.toString.call(r) !== "[object Array]" && typeof r.nodeType != "number" ? i(n[u] || {}, r) : t[u]);
            return n
        }, n = 0; n < r; n++)t = i(t, arguments[n]);
        return t
    }

    function h(n, t) {
        return parseInt(n, t || 10)
    }

    function yt(n) {
        return typeof n == "string"
    }

    function ft(n) {
        return typeof n == "object"
    }

    function tr(n) {
        return Object.prototype.toString.call(n) === "[object Array]"
    }

    function ui(n) {
        return typeof n == "number"
    }

    function ii(n) {
        return it.log(n) / it.LN10
    }

    function pt(n) {
        return it.pow(10, n)
    }

    function wt(n, t) {
        for (var i = n.length; i--;)if (n[i] === t) {
            n.splice(i, 1);
            break
        }
    }

    function i(n) {
        return n !== f && n !== null
    }

    function s(n, t, r) {
        var u, f;
        if (yt(t))i(r) ? n.setAttribute(t, r) : n && n.getAttribute && (f = n.getAttribute(t)); else if (i(t) && ft(t))for (u in t)n.setAttribute(u, t[u]);
        return f
    }

    function dt(n) {
        return tr(n) ? n : [n]
    }

    function n() {
        for (var i = arguments, t, r = i.length, n = 0; n < r; n++)if (t = i[n], typeof t != "undefined" && t !== null)return t
    }

    function p(n, t) {
        si && t && t.opacity !== f && (t.filter = "alpha(opacity=" + t.opacity * 100 + ")"), e(n.style, t)
    }

    function et(n, t, i, r, u) {
        return n = c.createElement(n), t && e(n, t), u && p(n, {
            padding: 0,
            border: rt,
            margin: 0
        }), i && p(n, i), r && r.appendChild(n), n
    }

    function bt(n, t) {
        var i = function () {
        };
        return i.prototype = new n, e(i.prototype, t), i
    }

    function yi(n, t, i, r) {
        var u = tt.lang, n = +n || 0, f = t === -1 ? (n.toString().split(".")[1] || "").length : isNaN(t = w(t)) ? 2 : t, t = i === void 0 ? u.decimalPoint : i, r = r === void 0 ? u.thousandsSep : r, u = n < 0 ? "-" : "", i = String(h(n = w(n).toFixed(f))), e = i.length > 3 ? i.length % 3 : 0;
        return u + (e ? i.substr(0, e) + r : "") + i.substr(e).replace(/(\d{3})(?=\d)/g, "$1" + r) + (f ? t + w(n - i).toFixed(f).slice(2) : "")
    }

    function pi(n, t) {
        return Array((t || 2) + 1 - String(n).length).join(0) + n
    }

    function rf(n, t, i) {
        var r = n[t];
        n[t] = function () {
            var n = Array.prototype.slice.call(arguments);
            return n.unshift(r), i.apply(this, n)
        }
    }

    function wi(n, t) {
        for (var e = "{", s = !1, i, r, o, u, f, h = []; (e = n.indexOf(e)) !== -1;) {
            if (i = n.slice(0, e), s) {
                for (r = i.split(":"), o = r.shift().split("."), f = o.length, i = t, u = 0; u < f; u++)i = i[o[u]];
                r.length && (r = r.join(":"), o = /\.([0-9])/, u = tt.lang, f = void 0, /f$/.test(r) ? (f = (f = r.match(o)) ? f[1] : -1, i = yi(i, f, u.decimalPoint, r.indexOf(",") > -1 ? u.thousandsSep : "")) : i = nu(r, i))
            }
            h.push(i), n = n.slice(e + 1), e = (s = !s) ? "}" : "{"
        }
        return h.push(n), h.join("")
    }

    function ou(n) {
        return it.pow(10, nt(it.log(n) / it.LN10))
    }

    function su(t, i, r, u) {
        var f, r = n(r, 1);
        for (f = t / r, i || (i = [1, 2, 2.5, 5, 10], u && u.allowDecimals === !1 && (r === 1 ? i = [1, 2, 5, 10] : r <= .1 && (i = [1 / r]))), u = 0; u < i.length; u++)if (t = i[u], f <= (i[u] + (i[u + 1] || i[u])) / 2)break;
        return t * r
    }

    function uf(n, t) {
        for (var r = t || [[yf, [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], [wu, [1, 2, 5, 10, 15, 30]], [tu, [1, 2, 5, 10, 15, 30]], [lr, [1, 2, 3, 4, 6, 8, 12]], [li, [1, 2]], [iu, [1, 2]], [ar, [1, 2, 3, 4, 6]], [ai, null]], u = r[r.length - 1], i = a[u[0]], f = u[1], e = 0; e < r.length; e++)if (u = r[e], i = a[u[0]], f = u[1], r[e + 1] && n <= (i * f[f.length - 1] + a[r[e + 1][0]]) / 2)break;
        return i === a[ai] && n < 5 * i && (f = [1, 2, 5]), i === a[ai] && n < 5 * i && (f = [1, 2, 5]), r = su(n / i, f, u[0] === ai ? ou(n / i) : 1), {
            unitRange: i,
            count: r,
            unitName: u[0]
        }
    }

    function ff(r, u, f, o) {
        var v = [], y = {}, p = tt.global.useUTC, l, s = new Date(u), h = r.unitRange, c = r.count;
        if (i(u)) {
            h >= a[wu] && (s.setMilliseconds(0), s.setSeconds(h >= a[tu] ? 0 : c * nt(s.getSeconds() / c))), h >= a[tu] && s[wf](h >= a[lr] ? 0 : c * nt(s[bu]() / c)), h >= a[lr] && s[bf](h >= a[li] ? 0 : c * nt(s[ku]() / c)), h >= a[li] && s[gu](h >= a[ar] ? 1 : c * nt(s[vr]() / c)), h >= a[ar] && (s[kf](h >= a[ai] ? 0 : c * nt(s[uu]() / c)), l = s[fu]()), h >= a[ai] && (l -= l % c, s[df](l)), h === a[iu] && s[gu](s[vr]() - s[du]() + n(o, 1)), u = 1, l = s[fu]();
            for (var o = s.getTime(), w = s[uu](), b = s[vr](), k = p ? 0 : (864e5 + s.getTimezoneOffset() * 6e4) % 864e5; o < f;)v.push(o), h === a[ai] ? o = ru(l + u * c, 0) : h === a[ar] ? o = ru(l, w + u * c) : !p && (h === a[li] || h === a[iu]) ? o = ru(l, w, b + u * c * (h === a[li] ? 1 : 7)) : o += h * c, u++;
            v.push(o), t(nf(v, function (n) {
                return h <= a[lr] && n % a[li] === k
            }), function (n) {
                y[n] = li
            })
        }
        return v.info = e(r, {higherRanks: y, totalRange: h * c}), v
    }

    function ef() {
        this.symbol = this.color = 0
    }

    function of(n, t) {
        for (var u = n.length, r, i = 0; i < u; i++)n[i].ss_i = i;
        for (n.sort(function (n, i) {
            return r = t(n, i), r === 0 ? n.ss_i - i.ss_i : r
        }), i = 0; i < u; i++)delete n[i].ss_i
    }

    function ir(n) {
        for (var t = n.length, i = n[0]; t--;)n[t] < i && (i = n[t]);
        return i
    }

    function fi(n) {
        for (var t = n.length, i = n[0]; t--;)n[t] > i && (i = n[t]);
        return i
    }

    function rr(n, t) {
        for (var i in n)n[i] && n[i] !== t && n[i].destroy && n[i].destroy(), delete n[i]
    }

    function sr(n) {
        gr || (gr = et(gi)), n && gr.appendChild(n), gr.innerHTML = ""
    }

    function gt(n, t) {
        var i = "Highcharts error #" + n + ": www.highcharts.com/errors/" + n;
        if (t)throw i; else d.console && console.log(i)
    }

    function ni(n) {
        return parseFloat(n.toPrecision(14))
    }

    function ur(t, i) {
        ki = n(t, i.animation)
    }

    function sf() {
        var r = tt.global.useUTC, t = r ? "getUTC" : "get", i = r ? "setUTC" : "set";
        ru = r ? Date.UTC : function (t, i, r, u, f, e) {
            return new Date(t, i, n(r, 1), n(u, 0), n(f, 0), n(e, 0)).getTime()
        }, bu = t + "Minutes", ku = t + "Hours", du = t + "Day", vr = t + "Date", uu = t + "Month", fu = t + "FullYear", wf = i + "Minutes", bf = i + "Hours", gu = i + "Date", kf = i + "Month", df = i + "FullYear"
    }

    function ei() {
    }

    function fr(n, t, i, r) {
        this.axis = n, this.pos = t, this.type = i || "", this.isNew = !0, i || r || this.addLabel()
    }

    function hu(n, t) {
        this.axis = n, t && (this.options = t, this.id = t.id)
    }

    function hf(t, i, r, u, f, e) {
        var o = t.chart.inverted;
        this.axis = t, this.isNegative = r, this.options = i, this.x = u, this.total = null, this.points = {}, this.stack = f, this.percent = e === "percent", this.alignOptions = {
            align: i.align || (o ? r ? "left" : "right" : "center"),
            verticalAlign: i.verticalAlign || (o ? "middle" : r ? "bottom" : "top"),
            y: n(i.y, o ? 4 : r ? 14 : -6),
            x: n(i.x, o ? r ? -6 : 6 : 0)
        }, this.textAlign = i.textAlign || (o ? r ? "right" : "left" : "center")
    }

    function pr() {
        this.init.apply(this, arguments)
    }

    function cu() {
        this.init.apply(this, arguments)
    }

    function lu(n, t) {
        this.init(n, t)
    }

    function au(n, t) {
        this.init(n, t)
    }

    function vu() {
        this.init.apply(this, arguments)
    }

    var f, c = document, d = window, it = Math, u = it.round, nt = it.floor, oi = it.ceil, r = it.max, l = it.min, w = it.abs, st = it.cos, vt = it.sin, er = it.PI, hr = er / 180, bi = navigator.userAgent, cf = d.opera, si = /msie/i.test(bi) && !cf, wr = c.documentMode === 8, br = /AppleWebKit/.test(bi), kr = /Firefox/.test(bi), lf = /(Mobile|Android|Windows Phone)/.test(bi), hi = "http://www.w3.org/2000/svg", ht = !!c.createElementNS && !!c.createElementNS(hi, "svg").createSVGRect, te = kr && parseInt(bi.split("Firefox/")[1], 10) < 4, ct = !ht && !si && !!c.createElement("canvas").getContext, cr, dr = c.documentElement.ontouchstart !== f, af = {}, yu = 0, gr, tt, nu, ki, pu, a, ci = function () {
    }, di = [], gi = "div", rt = "none", vf = "rgba(192,192,192," + (ht ? .0001 : .002) + ")", yf = "millisecond", wu = "second", tu = "minute", lr = "hour", li = "day", iu = "week", ar = "month", ai = "year", pf = "stroke-width", ru, bu, ku, du, vr, uu, fu, wf, bf, gu, kf, df, lt = {}, y, ot, ut, ti, vi, k, kt, ne, nr, g;
    d.Highcharts = d.Highcharts ? gt(16, !0) : {}, nu = function (t, r, f) {
        if (!i(r) || isNaN(r))return "Invalid date";
        var t = n(t, "%Y-%m-%d %H:%M:%S"), o = new Date(r), s, h = o[ku](), a = o[du](), v = o[vr](), c = o[uu](), y = o[fu](), l = tt.lang, p = l.weekdays, o = e({
            a: p[a].substr(0, 3),
            A: p[a],
            d: pi(v),
            e: v,
            b: l.shortMonths[c],
            B: l.months[c],
            m: pi(c + 1),
            y: y.toString().substr(2, 2),
            Y: y,
            H: pi(h),
            I: pi(h % 12 || 12),
            l: h % 12 || 12,
            M: pi(o[bu]()),
            p: h < 12 ? "AM" : "PM",
            P: h < 12 ? "am" : "pm",
            S: pi(o.getSeconds()),
            L: pi(u(r % 1e3), 3)
        }, Highcharts.dateFormats);
        for (s in o)for (; t.indexOf("%" + s) !== -1;)t = t.replace("%" + s, typeof o[s] == "function" ? o[s](r) : o[s]);
        return f ? t.substr(0, 1).toUpperCase() + t.substr(1) : t
    }, ef.prototype = {
        wrapColor: function (n) {
            this.color >= n && (this.color = 0)
        }, wrapSymbol: function (n) {
            this.symbol >= n && (this.symbol = 0)
        }
    }, a = function () {
        for (var n = 0, t = arguments, r = t.length, i = {}; n < r; n++)i[t[n++]] = t[n];
        return i
    }(yf, 1, wu, 1e3, tu, 6e4, lr, 36e5, li, 864e5, iu, 6048e5, ar, 26784e5, ai, 31556952e3), pu = {
        init: function (n, t, i) {
            var t = t || "", r = n.shift, e = t.indexOf("C") > -1, u = e ? 7 : 3, f, t = t.split(" "), i = [].concat(i), o, s, h = function (n) {
                for (f = n.length; f--;)n[f] === "M" && n.splice(f + 1, 0, n[f + 1], n[f + 2], n[f + 1], n[f + 2])
            };
            if (e && (h(t), h(i)), n.isArea && (o = t.splice(t.length - 6, 6), s = i.splice(i.length - 6, 6)), r <= i.length / u)for (; r--;)i = [].concat(i).splice(0, u).concat(i);
            if (n.shift = 0, t.length)for (n = i.length; t.length < n;)r = [].concat(t).splice(t.length - u, u), e && (r[u - 6] = r[u - 2], r[u - 5] = r[u - 1]), t = t.concat(r);
            return o && (t = t.concat(o), i = i.concat(s)), [t, i]
        }, step: function (n, t, i, r) {
            var f = [], u = n.length;
            if (i === 1)f = r; else if (u === t.length && i < 1)for (; u--;)r = parseFloat(n[u]), f[u] = isNaN(r) ? n[u] : i * parseFloat(t[u] - r) + r; else f = t;
            return f
        }
    }, function (n) {
        d.HighchartsAdapter = d.HighchartsAdapter || n && {
                init: function (t) {
                    var u = n.fx, e = u.step, i, r = n.Tween, o = r && r.propHooks;
                    i = n.cssHooks.opacity, n.extend(n.easing, {
                        easeOutQuad: function (n, t, i, r, u) {
                            return -r * (t /= u) * (t - 2) + i
                        }
                    }), n.each(["cur", "_default", "width", "height", "opacity"], function (n, t) {
                        var i = e, h, s;
                        t === "cur" ? i = u.prototype : t === "_default" && r && (i = o[t], t = "set"), (h = i[t]) && (i[t] = function (i) {
                            return i = n ? i : this, s = i.elem, s.attr ? s.attr(i.prop, t === "cur" ? f : i.now) : h.apply(this, arguments)
                        })
                    }), rf(i, "get", function (n, t, i) {
                        return t.attr ? t.opacity || 0 : n.call(this, t, i)
                    }), i = function (n) {
                        var i = n.elem, r;
                        n.started || (r = t.init(i, i.d, i.toD), n.start = r[0], n.end = r[1], n.started = !0), i.attr("d", t.step(n.start, n.end, n.pos, i.toD))
                    }, r ? o.d = {set: i} : e.d = i, this.each = Array.prototype.forEach ? function (n, t) {
                        return Array.prototype.forEach.call(n, t)
                    } : function (n, t) {
                        for (var i = 0, r = n.length; i < r; i++)if (t.call(n[i], n[i], i, n) === !1)return i
                    }, n.fn.highcharts = function () {
                        var r = "Chart", t = arguments, n, i;
                        return yt(t[0]) && (r = t[0], t = Array.prototype.slice.call(t, 1)), n = t[0], n !== f && (n.chart = n.chart || {}, n.chart.renderTo = this[0], new Highcharts[r](n, t[1]), i = this), n === f && (i = di[s(this[0], "data-highcharts-chart")]), i
                    }
                }, getScript: n.getScript, inArray: n.inArray, adapterRun: function (t, i) {
                    return n(t)[i]()
                }, grep: n.grep, map: function (n, t) {
                    for (var r = [], i = 0, u = n.length; i < u; i++)r[i] = t.call(n[i], n[i], i, n);
                    return r
                }, offset: function (t) {
                    return n(t).offset()
                }, addEvent: function (t, i, r) {
                    n(t).bind(i, r)
                }, removeEvent: function (t, i, r) {
                    var u = c.removeEventListener ? "removeEventListener" : "detachEvent";
                    c[u] && t && !t[u] && (t[u] = function () {
                    }), n(t).unbind(i, r)
                }, fireEvent: function (t, i, r, u) {
                    var f = n.Event(i), o = "detached" + i, s;
                    !si && r && (delete r.layerX, delete r.layerY), e(f, r), t[i] && (t[o] = t[i], t[i] = null), n.each(["preventDefault", "stopPropagation"], function (n, t) {
                        var i = f[t];
                        f[t] = function () {
                            try {
                                i.call(f)
                            } catch (n) {
                                t === "preventDefault" && (s = !0)
                            }
                        }
                    }), n(t).trigger(f), t[o] && (t[i] = t[o], t[o] = null), !u || f.isDefaultPrevented() || s || u(f)
                }, washMouseEvent: function (n) {
                    var t = n.originalEvent || n;
                    return t.pageX === f && (t.pageX = n.pageX, t.pageY = n.pageY), t
                }, animate: function (t, i, r) {
                    var u = n(t);
                    t.style || (t.style = {}), i.d && (t.toD = i.d, i.d = 1), u.stop(), i.opacity !== f && t.attr && (i.opacity += "px"), u.animate(i, r)
                }, stop: function (t) {
                    n(t).stop()
                }
            }
    }(d.jQuery), ut = d.HighchartsAdapter, y = ut || {}, ut && ut.init.call(ut, pu);
    var eu = y.adapterRun, ie = y.getScript, ri = y.inArray, t = y.each, nf = y.grep, re = y.offset, or = y.map, b = y.addEvent, at = y.removeEvent, v = y.fireEvent, gf = y.washMouseEvent, tf = y.animate, yr = y.stop, y = {
        enabled: !0,
        x: 0,
        y: 15,
        style: {color: "#666", cursor: "default", fontSize: "11px", lineHeight: "14px"}
    };
    tt = {
        colors: "#2f7ed8,#0d233a,#8bbc21,#910000,#1aadce,#492970,#f28f43,#77a1e5,#c42525,#a6c96a".split(","),
        symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
        lang: {
            loading: "Loading...",
            months: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
            shortMonths: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
            weekdays: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
            decimalPoint: ".",
            numericSymbols: "k,M,G,T,P,E".split(","),
            resetZoom: "Reset zoom",
            resetZoomTitle: "Reset zoom level 1:1",
            thousandsSep: ","
        },
        global: {
            useUTC: !0,
            canvasToolsURL: "http://code.highcharts.com/3.0.5/modules/canvas-tools.js",
            VMLRadialGradientURL: "http://code.highcharts.com/3.0.5/gfx/vml-radial-gradient.png"
        },
        chart: {
            borderColor: "#4572A7",
            borderRadius: 5,
            defaultSeriesType: "line",
            ignoreHiddenSeries: !0,
            spacingTop: 10,
            spacingRight: 10,
            spacingBottom: 15,
            spacingLeft: 10,
            style: {
                fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif',
                fontSize: "12px"
            },
            backgroundColor: "#FFFFFF",
            plotBorderColor: "#C0C0C0",
            resetZoomButton: {theme: {zIndex: 20}, position: {align: "right", x: -10, y: 10}}
        },
        title: {text: "Chart title", align: "center", margin: 15, style: {color: "#274b6d", fontSize: "16px"}},
        subtitle: {text: "", align: "center", style: {color: "#4d759e"}},
        plotOptions: {
            line: {
                allowPointSelect: !1,
                showCheckbox: !1,
                animation: {duration: 1e3},
                events: {},
                lineWidth: 2,
                marker: {
                    enabled: !0,
                    lineWidth: 0,
                    radius: 4,
                    lineColor: "#FFFFFF",
                    states: {hover: {enabled: !0}, select: {fillColor: "#FFFFFF", lineColor: "#000000", lineWidth: 2}}
                },
                point: {events: {}},
                dataLabels: o(y, {
                    align: "center", enabled: !1, formatter: function () {
                        return this.y === null ? "" : yi(this.y, -1)
                    }, verticalAlign: "bottom", y: 0
                }),
                cropThreshold: 300,
                pointRange: 0,
                showInLegend: !0,
                states: {hover: {marker: {}}, select: {marker: {}}},
                stickyTracking: !0
            }
        },
        labels: {style: {position: "absolute", color: "#3E576F"}},
        legend: {
            enabled: !0,
            align: "center",
            layout: "horizontal",
            labelFormatter: function () {
                return this.name
            },
            borderWidth: 1,
            borderColor: "#909090",
            borderRadius: 5,
            navigation: {activeColor: "#274b6d", inactiveColor: "#CCC"},
            shadow: !1,
            itemStyle: {cursor: "pointer", color: "#274b6d", fontSize: "12px"},
            itemHoverStyle: {color: "#000"},
            itemHiddenStyle: {color: "#CCC"},
            itemCheckboxStyle: {position: "absolute", width: "13px", height: "13px"},
            symbolWidth: 16,
            symbolPadding: 5,
            verticalAlign: "bottom",
            x: 0,
            y: 0,
            title: {style: {fontWeight: "bold"}}
        },
        loading: {
            labelStyle: {fontWeight: "bold", position: "relative", top: "1em"},
            style: {position: "absolute", backgroundColor: "white", opacity: .5, textAlign: "center"}
        },
        tooltip: {
            enabled: !0,
            animation: ht,
            backgroundColor: "rgba(255, 255, 255, .85)",
            borderWidth: 1,
            borderRadius: 3,
            dateTimeLabelFormats: {
                millisecond: "%A, %b %e, %H:%M:%S.%L",
                second: "%A, %b %e, %H:%M:%S",
                minute: "%A, %b %e, %H:%M",
                hour: "%A, %b %e, %H:%M",
                day: "%A, %b %e, %Y",
                week: "Week from %A, %b %e, %Y",
                month: "%B %Y",
                year: "%Y"
            },
            headerFormat: '<span style="font-size: 10px">{point.key}<\/span><br/>',
            pointFormat: '<span style="color:{series.color}">{series.name}<\/span>: <b>{point.y}<\/b><br/>',
            shadow: !0,
            snap: lf ? 25 : 10,
            style: {color: "#333333", cursor: "default", fontSize: "12px", padding: "8px", whiteSpace: "nowrap"}
        },
        credits: {
            enabled: !0,
            text: "Highcharts.com",
            href: "http://www.highcharts.com",
            position: {align: "right", x: -10, verticalAlign: "bottom", y: -5},
            style: {cursor: "pointer", color: "#909090", fontSize: "9px"}
        }
    }, ot = tt.plotOptions, ut = ot.line, sf(), ti = function (n) {
        var i = [], r, u;
        return function (n) {
            n && n.stops ? u = or(n.stops, function (n) {
                return ti(n[1])
            }) : (r = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/.exec(n)) ? i = [h(r[1]), h(r[2]), h(r[3]), parseFloat(r[4], 10)] : (r = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(n)) ? i = [h(r[1], 16), h(r[2], 16), h(r[3], 16), 1] : (r = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(n)) && (i = [h(r[1]), h(r[2]), h(r[3]), 1])
        }(n), {
            get: function (r) {
                var f;
                return u ? (f = o(n), f.stops = [].concat(f.stops), t(u, function (n, t) {
                    f.stops[t] = [f.stops[t][0], n.get(r)]
                })) : f = i && !isNaN(i[0]) ? r === "rgb" ? "rgb(" + i[0] + "," + i[1] + "," + i[2] + ")" : r === "a" ? i[3] : "rgba(" + i.join(",") + ")" : n, f
            }, brighten: function (n) {
                if (u)t(u, function (t) {
                    t.brighten(n)
                }); else if (ui(n) && n !== 0)for (var r = 0; r < 3; r++)i[r] += h(n * 255), i[r] < 0 && (i[r] = 0), i[r] > 255 && (i[r] = 255);
                return this
            }, rgba: i, setOpacity: function (n) {
                return i[3] = n, this
            }
        }
    }, ei.prototype = {
        init: function (n, t) {
            this.element = t === "span" ? et(t) : c.createElementNS(hi, t), this.renderer = n, this.attrSetters = {}
        }, opacity: 1, animate: function (t, i, r) {
            i = n(i, ki, !0), yr(this), i ? (i = o(i), r && (i.complete = r), tf(this, t, i)) : (this.attr(t), r && r())
        }, attr: function (t, u) {
            var e, o, l, b, a = this.element, y = a.nodeName.toLowerCase(), k = this.renderer, v, g = this.attrSetters, p = this.shadows, nt, d, w = this;
            if (yt(t) && i(u) && (e = t, t = {}, t[e] = u), yt(t))e = t, y === "circle" ? e = {
                    x: "cx",
                    y: "cy"
                }[e] || e : e === "strokeWidth" && (e = "stroke-width"), w = s(a, e) || this[e] || 0, e !== "d" && e !== "visibility" && (w = parseFloat(w)); else {
                for (e in t)if (v = !1, o = t[e], l = g[e] && g[e].call(this, o, e), l !== !1) {
                    if (l !== f && (o = l), e === "d")o && o.join && (o = o.join(" ")), /(NaN| {2}|^$)/.test(o) && (o = "M 0 0"); else if (e === "x" && y === "text")for (l = 0; l < a.childNodes.length; l++)b = a.childNodes[l], s(b, "x") === s(a, "x") && s(b, "x", o); else if (this.rotation && (e === "x" || e === "y"))d = !0; else if (e === "fill")o = k.color(o, a, e); else if (y === "circle" && (e === "x" || e === "y"))e = {
                            x: "cx",
                            y: "cy"
                        }[e] || e; else if (y === "rect" && e === "r")s(a, {
                        rx: o,
                        ry: o
                    }), v = !0; else if (e === "translateX" || e === "translateY" || e === "rotation" || e === "verticalAlign" || e === "scaleX" || e === "scaleY")v = d = !0; else if (e === "stroke")o = k.color(o, a, e); else if (e === "dashstyle") {
                        if (e = "stroke-dasharray", o = o && o.toLowerCase(), o === "solid")o = rt; else if (o) {
                            for (o = o.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(","), l = o.length; l--;)o[l] = h(o[l]) * n(t["stroke-width"], this["stroke-width"]);
                            o = o.join(",")
                        }
                    } else e === "width" ? o = h(o) : e === "align" ? (e = "text-anchor", o = {
                        left: "start",
                        center: "middle",
                        right: "end"
                    }[o]) : e === "title" && (l = a.getElementsByTagName("title")[0], l || (l = c.createElementNS(hi, "title"), a.appendChild(l)), l.textContent = o);
                    if (e === "strokeWidth" && (e = "stroke-width"), (e === "stroke-width" || e === "stroke") && (this[e] = o, this.stroke && this["stroke-width"] ? (s(a, "stroke", this.stroke), s(a, "stroke-width", this["stroke-width"]), this.hasStroke = !0) : e === "stroke-width" && o === 0 && this.hasStroke && (a.removeAttribute("stroke"), this.hasStroke = !1), v = !0), this.symbolName && /^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(e) && (nt || (this.symbolAttr(t), nt = !0), v = !0), p && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(e))for (l = p.length; l--;)s(p[l], e, e === "height" ? r(o - (p[l].cutHeight || 0), 0) : o);
                    (e === "width" || e === "height") && y === "rect" && o < 0 && (o = 0), this[e] = o, e === "text" ? (o !== this.textStr && delete this.bBox, this.textStr = o, this.added && k.buildText(this)) : v || s(a, e, o)
                }
                d && this.updateTransform()
            }
            return w
        }, addClass: function (n) {
            var t = this.element, i = s(t, "class") || "";
            return i.indexOf(n) === -1 && s(t, "class", i + " " + n), this
        }, symbolAttr: function (i) {
            var r = this;
            t("x,y,r,start,end,width,height,innerR,anchorX,anchorY".split(","), function (t) {
                r[t] = n(i[t], r[t])
            }), r.attr({d: r.renderer.symbols[r.symbolName](r.x, r.y, r.width, r.height, r)})
        }, clip: function (n) {
            return this.attr("clip-path", n ? "url(" + this.renderer.url + "#" + n.id + ")" : rt)
        }, crisp: function (n, t, i, r, f) {
            var o, h = {}, e = {}, s, n = n || this.strokeWidth || this.attr && this.attr("stroke-width") || 0;
            s = u(n) % 2 / 2, e.x = nt(t || this.x || 0) + s, e.y = nt(i || this.y || 0) + s, e.width = nt((r || this.width || 0) - 2 * s), e.height = nt((f || this.height || 0) - 2 * s), e.strokeWidth = n;
            for (o in e)this[o] !== e[o] && (this[o] = h[o] = e[o]);
            return h
        }, css: function (n) {
            var r = this.element, t = n && n.width && r.nodeName.toLowerCase() === "text", i, u = "", f = function (n, t) {
                return "-" + t.toLowerCase()
            };
            if (n && n.color && (n.fill = n.color), this.styles = n = e(this.styles, n), ct && t && delete n.width, si && !ht)t && delete n.width, p(this.element, n); else {
                for (i in n)u += i.replace(/([A-Z])/g, f) + ":" + n[i] + ";";
                s(r, "style", u)
            }
            return t && this.added && this.renderer.buildText(this), this
        }, on: function (n, t) {
            var i = this.element;
            return dr && n === "click" && (i.ontouchstart = function (n) {
                n.preventDefault(), t.call(i, n)
            }), i["on" + n] = t, this
        }, setRadialReference: function (n) {
            return this.element.radialReference = n, this
        }, translate: function (n, t) {
            return this.attr({translateX: n, translateY: t})
        }, invert: function () {
            return this.inverted = !0, this.updateTransform(), this
        }, htmlCss: function (n) {
            var t = this.element;
            return (t = n && t.tagName === "SPAN" && n.width) && (delete n.width, this.textWidth = t, this.updateTransform()), this.styles = e(this.styles, n), p(this.element, n), this
        }, htmlGetBBox: function () {
            var n = this.element, t = this.bBox;
            return t || (n.nodeName === "text" && (n.style.position = "absolute"), t = this.bBox = {
                x: n.offsetLeft,
                y: n.offsetTop,
                width: n.offsetWidth,
                height: n.offsetHeight
            }), t
        }, htmlUpdateTransform: function () {
            var f, y, u, e, o, s, w;
            if (this.added) {
                var b = this.renderer, r = this.element, k = this.translateX || 0, d = this.translateY || 0, nt = this.x || 0, tt = this.y || 0, l = this.textAlign || "left", c = {
                    left: 0,
                    center: .5,
                    right: 1
                }[l], it = l && l !== "left", u = this.shadows;
                if (p(r, {marginLeft: k, marginTop: d}), u && t(u, function (n) {
                        p(n, {marginLeft: k + 1, marginTop: d + 1})
                    }), this.inverted && t(r.childNodes, function (n) {
                        b.invertChild(n, r)
                    }), r.tagName === "SPAN") {
                    u = this.rotation, f = 0, o = 1, s = 0, e = h(this.textWidth);
                    var a = this.xCorr || 0, v = this.yCorr || 0, g = [u, l, r.innerHTML, this.textWidth].join(",");
                    g !== this.cTT && (i(u) && (f = u * hr, o = st(f), s = vt(f), this.setSpanRotation(u, s, o)), f = n(this.elemWidth, r.offsetWidth), y = n(this.elemHeight, r.offsetHeight), f > e && /[ \-]/.test(r.textContent || r.innerText) && (p(r, {
                        width: e + "px",
                        display: "block",
                        whiteSpace: "normal"
                    }), f = e), e = b.fontMetrics(r.style.fontSize).b, a = o < 0 && -f, v = s < 0 && -y, w = o * s < 0, a += s * e * (w ? 1 - c : c), v -= o * e * (u ? w ? c : 1 - c : 1), it && (a -= f * c * (o < 0 ? -1 : 1), u && (v -= y * c * (s < 0 ? -1 : 1)), p(r, {textAlign: l})), this.xCorr = a, this.yCorr = v), p(r, {
                        left: nt + a + "px",
                        top: tt + v + "px"
                    }), br && (y = r.offsetHeight), this.cTT = g
                }
            } else this.alignOnAdd = !0
        }, setSpanRotation: function (n) {
            var t = {};
            t[si ? "-ms-transform" : br ? "-webkit-transform" : kr ? "MozTransform" : cf ? "-o-transform" : ""] = t.transform = "rotate(" + n + "deg)", p(this.element, t)
        }, updateTransform: function () {
            var t = this.translateX || 0, r = this.translateY || 0, u = this.scaleX, f = this.scaleY, e = this.inverted, o = this.rotation;
            e && (t += this.attr("width"), r += this.attr("height")), t = ["translate(" + t + "," + r + ")"], e ? t.push("rotate(90) scale(-1,1)") : o && t.push("rotate(" + o + " " + (this.x || 0) + " " + (this.y || 0) + ")"), (i(u) || i(f)) && t.push("scale(" + n(u, 1) + " " + n(f, 1) + ")"), t.length && s(this.element, "transform", t.join(" "))
        }, toFront: function () {
            var n = this.element;
            return n.parentNode.appendChild(n), this
        }, align: function (t, i, r) {
            var e, f, o, h, s = {};
            return f = this.renderer, o = f.alignedObjects, t ? (this.alignOptions = t, this.alignByTranslate = i, !r || yt(r)) && (this.alignTo = e = r || "renderer", wt(o, this), o.push(this), r = null) : (t = this.alignOptions, i = this.alignByTranslate, e = this.alignTo), r = n(r, f[e], f), e = t.align, f = t.verticalAlign, o = (r.x || 0) + (t.x || 0), h = (r.y || 0) + (t.y || 0), (e === "right" || e === "center") && (o += (r.width - (t.width || 0)) / {
                    right: 1,
                    center: 2
                }[e]), s[i ? "translateX" : "x"] = u(o), (f === "bottom" || f === "middle") && (h += (r.height - (t.height || 0)) / ({
                    bottom: 1,
                    middle: 2
                }[f] || 1)), s[i ? "translateY" : "y"] = u(h), this[this.placed ? "animate" : "attr"](s), this.placed = !0, this.alignAttr = s, this
        }, getBBox: function () {
            var n = this.bBox, i = this.renderer, t, f = this.rotation, u, r;
            if (t = this.element, u = this.styles, r = f * hr, !n) {
                if (t.namespaceURI === hi || i.forExport) {
                    try {
                        n = t.getBBox ? e({}, t.getBBox()) : {width: t.offsetWidth, height: t.offsetHeight}
                    } catch (o) {
                    }
                    (!n || n.width < 0) && (n = {width: 0, height: 0})
                } else n = this.htmlGetBBox();
                i.isSVG && (i = n.width, t = n.height, si && u && u.fontSize === "11px" && t.toPrecision(3) === "22.7" && (n.height = t = 14), f && (n.width = w(t * vt(r)) + w(i * st(r)), n.height = w(t * st(r)) + w(i * vt(r)))), this.bBox = n
            }
            return n
        }, show: function () {
            return this.attr({visibility: "visible"})
        }, hide: function () {
            return this.attr({visibility: "hidden"})
        }, fadeOut: function (n) {
            var t = this;
            t.animate({opacity: 0}, {
                duration: n || 150, complete: function () {
                    t.hide()
                }
            })
        }, add: function (n) {
            var r = this.renderer, t = n || r, e = t.element || r.box, o = e.childNodes, f = this.element, u = s(f, "zIndex"), c;
            if (n && (this.parentGroup = n), this.parentInverted = n && n.inverted, this.textStr !== void 0 && r.buildText(this), u && (t.handleZ = !0, u = h(u)), t.handleZ)for (t = 0; t < o.length; t++)if (n = o[t], r = s(n, "zIndex"), n !== f && (h(r) > u || !i(u) && i(r))) {
                e.insertBefore(f, n), c = !0;
                break
            }
            return c || e.appendChild(f), this.added = !0, v(this, "add"), this
        }, safeRemoveChild: function (n) {
            var t = n.parentNode;
            t && t.removeChild(n)
        }, destroy: function () {
            var n = this, i = n.element || {}, f = n.shadows, r = n.renderer.isSVG && i.nodeName === "SPAN" && i.parentNode, e, u;
            if (i.onclick = i.onmouseout = i.onmouseover = i.onmousemove = i.point = null, yr(n), n.clipPath && (n.clipPath = n.clipPath.destroy()), n.stops) {
                for (u = 0; u < n.stops.length; u++)n.stops[u] = n.stops[u].destroy();
                n.stops = null
            }
            for (n.safeRemoveChild(i), f && t(f, function (t) {
                n.safeRemoveChild(t)
            }); r && r.childNodes.length === 0;)i = r.parentNode, n.safeRemoveChild(r), r = i;
            n.alignTo && wt(n.renderer.alignedObjects, n);
            for (e in n)delete n[e];
            return null
        }, shadow: function (t, i, u) {
            var l = [], e, f, c = this.element, o, h, a, v;
            if (t) {
                for (h = n(t.width, 3), a = (t.opacity || .15) / h, v = this.parentInverted ? "(-1,-1)" : "(" + n(t.offsetX, 1) + ", " + n(t.offsetY, 1) + ")", e = 1; e <= h; e++)f = c.cloneNode(0), o = h * 2 + 1 - 2 * e, s(f, {
                    isShadow: "true",
                    stroke: t.color || "black",
                    "stroke-opacity": a * e,
                    "stroke-width": o,
                    transform: "translate" + v,
                    fill: rt
                }), u && (s(f, "height", r(s(f, "height") - o, 0)), f.cutHeight = o), i ? i.element.appendChild(f) : c.parentNode.insertBefore(f, c), l.push(f);
                this.shadows = l
            }
            return this
        }
    }, vi = function () {
        this.init.apply(this, arguments)
    }, vi.prototype = {
        Element: ei, init: function (n, t, i, r) {
            var o = location, e, f, u;
            e = this.createElement("svg").attr({version: "1.1"}), f = e.element, n.appendChild(f), n.innerHTML.indexOf("xmlns") === -1 && s(f, "xmlns", hi), this.isSVG = !0, this.box = f, this.boxWrapper = e, this.alignedObjects = [], this.url = (kr || br) && c.getElementsByTagName("base").length ? o.href.replace(/#.*?$/, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : "", this.createElement("desc").add().element.appendChild(c.createTextNode("Created with Highcharts 3.0.5")), this.defs = this.createElement("defs").add(), this.forExport = r, this.gradients = {}, this.setSize(t, i, !1), kr && n.getBoundingClientRect && (this.subPixelFix = t = function () {
                p(n, {left: 0, top: 0}), u = n.getBoundingClientRect(), p(n, {
                    left: oi(u.left) - u.left + "px",
                    top: oi(u.top) - u.top + "px"
                })
            }, t(), b(d, "resize", t))
        }, isHidden: function () {
            return !this.boxWrapper.getBBox().width
        }, destroy: function () {
            var n = this.defs;
            return this.box = null, this.boxWrapper = this.boxWrapper.destroy(), rr(this.gradients || {}), this.gradients = null, n && (this.defs = n.destroy()), this.subPixelFix && at(d, "resize", this.subPixelFix), this.alignedObjects = null
        }, createElement: function (n) {
            var t = new this.Element;
            return t.init(this, n), t
        }, draw: function () {
        }, buildText: function (i) {
            for (var r = i.element, o = this, l = o.forExport, e = n(i.textStr, "").toString().replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g, '<span style="font-style:italic">').replace(/<a/g, "<span").replace(/<\/(b|strong|i|em|a)>/g, "<\/span>").split(/<br.*?>/g), a = r.childNodes, v = /style="([^"]+)"/, y = /href="(http[^"]+)"/, w = s(r, "x"), u = i.styles, f = u && u.width && h(u.width), b = u && u.lineHeight, k = a.length; k--;)r.removeChild(a[k]);
            f && !i.added && this.box.appendChild(r), e[e.length - 1] === "" && e.pop(), t(e, function (n, e) {
                var h, a = 0, n = n.replace(/<span/g, "|||<span").replace(/<\/span>/g, "<\/span>|||");
                h = n.split("|||"), t(h, function (n) {
                    var k, t, g, n, nt, d;
                    if ((n !== "" || h.length === 1) && (k = {}, t = c.createElementNS(hi, "tspan"), v.test(n) && (g = n.match(v)[1].replace(/(;| |^)color([ :])/, "$1fill$2"), s(t, "style", g)), y.test(n) && !l && (s(t, "onclick", 'location.href="' + n.match(y)[1] + '"'), p(t, {cursor: "pointer"})), n = (n.replace(/<(.|\n)*?>/g, "") || " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">"), n !== " " && (t.appendChild(c.createTextNode(n)), a ? k.dx = 0 : k.x = w, s(t, k), !a && e && (!ht && l && p(t, {display: "block"}), s(t, "dy", b || o.fontMetrics(/px$/.test(t.style.fontSize) ? t.style.fontSize : u.fontSize).h, br && t.offsetHeight)), r.appendChild(t), a++, f)))for (n = n.replace(/([^\^])-/g, "$1- ").split(" "), d = []; n.length || d.length;)delete i.bBox, nt = i.getBBox().width, k = nt > f, !k || n.length === 1 ? (n = d, d = [], n.length && (t = c.createElementNS(hi, "tspan"), s(t, {
                        dy: b || 16,
                        x: w
                    }), g && s(t, "style", g), r.appendChild(t), nt > f && (f = nt))) : (t.removeChild(t.firstChild), d.unshift(n.pop())), n.length && t.appendChild(c.createTextNode(n.join(" ").replace(/- /g, "-")))
                })
            })
        }, button: function (n, t, i, r, u, f, s, h) {
            var c = this.label(n, t, i, null, null, null, null, null, "button"), l = 0, p, w, a, v, y, k, n = {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
            }, u = o({
                "stroke-width": 1,
                stroke: "#CCCCCC",
                fill: {linearGradient: n, stops: [[0, "#FEFEFE"], [1, "#F6F6F6"]]},
                r: 2,
                padding: 5,
                style: {color: "black"}
            }, u);
            return a = u.style, delete u.style, f = o(u, {
                stroke: "#68A",
                fill: {linearGradient: n, stops: [[0, "#FFF"], [1, "#ACF"]]}
            }, f), v = f.style, delete f.style, s = o(u, {
                stroke: "#68A",
                fill: {linearGradient: n, stops: [[0, "#9BD"], [1, "#CDF"]]}
            }, s), y = s.style, delete s.style, h = o(u, {style: {color: "#CCC"}}, h), k = h.style, delete h.style, b(c.element, si ? "mouseover" : "mouseenter", function () {
                l !== 3 && c.attr(f).css(v)
            }), b(c.element, si ? "mouseout" : "mouseleave", function () {
                l !== 3 && (p = [u, f, s][l], w = [a, v, y][l], c.attr(p).css(w))
            }), c.setState = function (n) {
                (c.state = l = n) ? n === 2 ? c.attr(s).css(y) : n === 3 && c.attr(h).css(k) : c.attr(u).css(a)
            }, c.on("click", function () {
                l !== 3 && r.call(c)
            }).attr(u).css(e({cursor: "default"}, a))
        }, crispLine: function (n, t) {
            return n[1] === n[4] && (n[1] = n[4] = u(n[1]) - t % 2 / 2), n[2] === n[5] && (n[2] = n[5] = u(n[2]) + t % 2 / 2), n
        }, path: function (n) {
            var t = {fill: rt};
            return tr(n) ? t.d = n : ft(n) && e(t, n), this.createElement("path").attr(t)
        }, circle: function (n, t, i) {
            return n = ft(n) ? n : {x: n, y: t, r: i}, this.createElement("circle").attr(n)
        }, arc: function (n, t, i, r, u, f) {
            return ft(n) && (t = n.y, i = n.r, r = n.innerR, u = n.start, f = n.end, n = n.x), n = this.symbol("arc", n || 0, t || 0, i || 0, i || 0, {
                innerR: r || 0,
                start: u || 0,
                end: f || 0
            }), n.r = i, n
        }, rect: function (n, t, i, u, f, e) {
            return f = ft(n) ? n.r : f, f = this.createElement("rect").attr({
                rx: f,
                ry: f,
                fill: rt
            }), f.attr(ft(n) ? n : f.crisp(e, n, t, r(i, 0), r(u, 0)))
        }, setSize: function (t, i, r) {
            var u = this.alignedObjects, f = u.length;
            for (this.width = t, this.height = i, this.boxWrapper[n(r, !0) ? "animate" : "attr"]({
                width: t,
                height: i
            }); f--;)u[f].align()
        }, g: function (n) {
            var t = this.createElement("g");
            return i(n) ? t.attr({"class": "highcharts-" + n}) : t
        }, image: function (n, t, i, r, u) {
            var f = {preserveAspectRatio: rt};
            return arguments.length > 1 && e(f, {
                x: t,
                y: i,
                width: r,
                height: u
            }), f = this.createElement("image").attr(f), f.element.setAttributeNS ? f.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", n) : f.element.setAttribute("hc-svg-href", n), f
        }, symbol: function (n, t, i, r, f, o) {
            var s, h = this.symbols[n], h = h && h(u(t), u(i), r, f, o), a = /^url\((.*?)\)$/, c, l;
            return h ? (s = this.path(h), e(s, {
                symbolName: n,
                x: t,
                y: i,
                width: r,
                height: f
            }), o && e(s, o)) : a.test(n) && (l = function (n, t) {
                n.element && (n.attr({
                    width: t[0],
                    height: t[1]
                }), n.alignByTranslate || n.translate(u((r - t[0]) / 2), u((f - t[1]) / 2)))
            }, c = n.match(a)[1], n = af[c], s = this.image(c).attr({
                x: t,
                y: i
            }), s.isImg = !0, n ? l(s, n) : (s.attr({width: 0, height: 0}), et("img", {
                onload: function () {
                    l(s, af[c] = [this.width, this.height])
                }, src: c
            }))), s
        }, symbols: {
            circle: function (n, t, i, r) {
                var u = .166 * i;
                return ["M", n + i / 2, t, "C", n + i + u, t, n + i + u, t + r, n + i / 2, t + r, "C", n - u, t + r, n - u, t, n + i / 2, t, "Z"]
            }, square: function (n, t, i, r) {
                return ["M", n, t, "L", n + i, t, n + i, t + r, n, t + r, "Z"]
            }, triangle: function (n, t, i, r) {
                return ["M", n + i / 2, t, "L", n + i, t + r, n, t + r, "Z"]
            }, "triangle-down": function (n, t, i, r) {
                return ["M", n, t, "L", n + i, t, n + i / 2, t + r, "Z"]
            }, diamond: function (n, t, i, r) {
                return ["M", n + i / 2, t, "L", n + i, t + r / 2, n + i / 2, t + r, n, t + r / 2, "Z"]
            }, arc: function (n, t, i, r, u) {
                var e = u.start, i = u.r || i || r, f = u.end - .001, r = u.innerR, o = u.open, s = st(e), h = vt(e), c = st(f), f = vt(f), u = u.end - e < er ? 0 : 1;
                return ["M", n + i * s, t + i * h, "A", i, i, 0, u, 1, n + i * c, t + i * f, o ? "M" : "L", n + r * c, t + r * f, "A", r, r, 0, u, 0, n + r * s, t + r * h, o ? "" : "Z"]
            }
        }, clipRect: function (n, t, i, r) {
            var u = "highcharts-" + yu++, f = this.createElement("clipPath").attr({id: u}).add(this.defs), n = this.rect(n, t, i, r, 0).add(f);
            return n.id = u, n.clipPath = f, n
        }, color: function (n, r, u) {
            var l = this, h, b = /^rgba/, f, a, v, y, p, w, c, e = [];
            if (n && n.linearGradient ? f = "linearGradient" : n && n.radialGradient && (f = "radialGradient"), f) {
                u = n[f], a = l.gradients, y = n.stops, r = r.radialReference, tr(u) && (n[f] = u = {
                    x1: u[0],
                    y1: u[1],
                    x2: u[2],
                    y2: u[3],
                    gradientUnits: "userSpaceOnUse"
                }), f === "radialGradient" && r && !i(u.gradientUnits) && (u = o(u, {
                    cx: r[0] - r[2] / 2 + u.cx * r[2],
                    cy: r[1] - r[2] / 2 + u.cy * r[2],
                    r: u.r * r[2],
                    gradientUnits: "userSpaceOnUse"
                }));
                for (c in u)c !== "id" && e.push(c, u[c]);
                for (c in y)e.push(y[c]);
                return e = e.join(","), a[e] ? n = a[e].id : (u.id = n = "highcharts-" + yu++, a[e] = v = l.createElement(f).attr(u).add(l.defs), v.stops = [], t(y, function (n) {
                    b.test(n[1]) ? (h = ti(n[1]), p = h.get("rgb"), w = h.get("a")) : (p = n[1], w = 1), n = l.createElement("stop").attr({
                        offset: n[0],
                        "stop-color": p,
                        "stop-opacity": w
                    }).add(v), v.stops.push(n)
                })), "url(" + l.url + "#" + n + ")"
            }
            return b.test(n) ? (h = ti(n), s(r, u + "-opacity", h.get("a")), h.get("rgb")) : (r.removeAttribute(u + "-opacity"), n)
        }, text: function (t, i, r, f) {
            var e = tt.chart.style, o = ct || !ht && this.forExport;
            return f && !this.forExport ? this.html(t, i, r) : (i = u(n(i, 0)), r = u(n(r, 0)), t = this.createElement("text").attr({
                x: i,
                y: r,
                text: t
            }).css({
                fontFamily: e.fontFamily,
                fontSize: e.fontSize
            }), o && t.css({position: "absolute"}), t.x = i, t.y = r, t)
        }, html: function (n, i, r) {
            var c = tt.chart.style, f = this.createElement("span"), o = f.attrSetters, h = f.element, l = f.renderer;
            return o.text = function (n) {
                return n !== h.innerHTML && delete this.bBox, h.innerHTML = n, !1
            }, o.x = o.y = o.align = function (n, t) {
                return t === "align" && (t = "textAlign"), f[t] = n, f.htmlUpdateTransform(), !1
            }, f.attr({text: n, x: u(i), y: u(r)}).css({
                position: "absolute",
                whiteSpace: "nowrap",
                fontFamily: c.fontFamily,
                fontSize: c.fontSize
            }), f.css = f.htmlCss, l.isSVG && (f.add = function (n) {
                var i, r = l.box.parentNode, u = [];
                if (n) {
                    if (i = n.div, !i) {
                        for (; n;)u.push(n), n = n.parentGroup;
                        t(u.reverse(), function (n) {
                            var t;
                            i = n.div = n.div || et(gi, {className: s(n.element, "class")}, {
                                    position: "absolute",
                                    left: (n.translateX || 0) + "px",
                                    top: (n.translateY || 0) + "px"
                                }, i || r), t = i.style, e(n.attrSetters, {
                                translateX: function (n) {
                                    t.left = n + "px"
                                }, translateY: function (n) {
                                    t.top = n + "px"
                                }, visibility: function (n, i) {
                                    t[i] = n
                                }
                            })
                        })
                    }
                } else i = r;
                return i.appendChild(h), f.added = !0, f.alignOnAdd && f.htmlUpdateTransform(), f
            }), f
        }, fontMetrics: function (n) {
            var n = h(n || 11), n = n < 24 ? n + 4 : u(n * 1.2), t = u(n * .8);
            return {h: n, b: t}
        }, label: function (n, r, s, h, c, l, a, v, y) {
            function yt() {
                var n, t;
                n = w.element.style, g = (tt === void 0 || st === void 0 || p.styles.textAlign) && w.getBBox(), p.width = (tt || g.width || 0) + 2 * d + ft, p.height = (st || g.height || 0) + 2 * d, lt = d + nt.fontMetrics(n && n.fontSize).b, vt && (k || (n = u(-ut * d), t = v ? -lt : 0, p.box = k = h ? nt.symbol(h, n, t, p.width, p.height) : nt.rect(n, t, p.width, p.height, 0, et[pf]), k.add(p)), k.isImg || k.attr(o({
                    width: p.width,
                    height: p.height
                }, et)), et = null)
            }

            function rt() {
                var n = p.styles, n = n && n.textAlign, t = ft + d * (1 - ut), r;
                r = v ? 0 : lt, i(tt) && (n === "center" || n === "right") && (t += {
                        center: .5,
                        right: 1
                    }[n] * (tt - g.width)), (t !== w.x || r !== w.y) && w.attr({x: t, y: r}), w.x = t, w.y = r
            }

            function it(n, t) {
                k ? k.attr(n, t) : et[n] = t
            }

            function ot() {
                w.add(p), p.attr({text: n, x: r, y: s}), k && i(c) && p.attr({anchorX: c, anchorY: l})
            }

            var nt = this, p = nt.g(y), w = nt.text("", 0, 0, a).attr({zIndex: 1}), k, g, ut = 0, d = 3, ft = 0, tt, st, ht, ct, pt = 0, et = {}, lt, a = p.attrSetters, vt, wt;
            return b(p, "add", ot), a.width = function (n) {
                return tt = n, !1
            }, a.height = function (n) {
                return st = n, !1
            }, a.padding = function (n) {
                return i(n) && n !== d && (d = n, rt()), !1
            }, a.paddingLeft = function (n) {
                return i(n) && n !== ft && (ft = n, rt()), !1
            }, a.align = function (n) {
                return ut = {left: 0, center: .5, right: 1}[n], !1
            }, a.text = function (n, t) {
                return w.attr(t, n), yt(), rt(), !1
            }, a[pf] = function (n, t) {
                return vt = !0, pt = n % 2 / 2, it(t, n), !1
            }, a.stroke = a.fill = a.r = function (n, t) {
                return t === "fill" && (vt = !0), it(t, n), !1
            }, a.anchorX = function (n, t) {
                return c = n, it(t, n + pt - ht), !1
            }, a.anchorY = function (n, t) {
                return l = n, it(t, n - ct), !1
            }, a.x = function (n) {
                return p.x = n, n -= ut * ((tt || g.width) + d), ht = u(n), p.attr("translateX", ht), !1
            }, a.y = function (n) {
                return ct = p.y = u(n), p.attr("translateY", ct), !1
            }, wt = p.css, e(p, {
                css: function (n) {
                    if (n) {
                        var i = {}, n = o(n);
                        t("fontSize,fontWeight,fontFamily,color,lineHeight,width,textDecoration,textShadow".split(","), function (t) {
                            n[t] !== f && (i[t] = n[t], delete n[t])
                        }), w.css(i)
                    }
                    return wt.call(p, n)
                }, getBBox: function () {
                    return {width: g.width + 2 * d, height: g.height + 2 * d, x: g.x - d, y: g.y - d}
                }, shadow: function (n) {
                    return k && k.shadow(n), p
                }, destroy: function () {
                    at(p, "add", ot), at(p.element, "mouseenter"), at(p.element, "mouseleave"), w && (w = w.destroy()), k && (k = k.destroy()), ei.prototype.destroy.call(p), p = nt = yt = rt = it = ot = null
                }
            })
        }
    }, cr = vi, ht || ct || (Highcharts.VMLElement = k = {
        init: function (n, t) {
            var i = ["<", t, ' filled="f" stroked="f"'], r = ["position: ", "absolute", ";"], u = t === gi;
            (t === "shape" || u) && r.push("left:0;top:0;width:1px;height:1px;"), r.push("visibility: ", u ? "hidden" : "visible"), i.push(' style="', r.join(""), '"/>'), t && (i = u || t === "span" || t === "img" ? i.join("") : n.prepVML(i), this.element = et(i)), this.renderer = n, this.attrSetters = {}
        }, add: function (n) {
            var i = this.renderer, r = this.element, t = i.box, t = n ? n.element || n : t;
            return n && n.inverted && i.invertChild(r, t), t.appendChild(r), this.added = !0, this.alignOnAdd && !this.deferUpdateTransform && this.updateTransform(), v(this, "add"), this
        }, updateTransform: ei.prototype.htmlUpdateTransform, setSpanRotation: function (n, t, i) {
            p(this.element, {filter: n ? ["progid:DXImageTransform.Microsoft.Matrix(M11=", i, ", M12=", -t, ", M21=", t, ", M22=", i, ", sizingMethod='auto expand')"].join("") : rt})
        }, pathToVML: function (n) {
            for (var t = n.length, i = [], r; t--;)ui(n[t]) ? i[t] = u(n[t] * 10) - 5 : n[t] === "Z" ? i[t] = "x" : (i[t] = n[t], n.isArc && (n[t] === "wa" || n[t] === "at")) && (r = n[t] === "wa" ? 1 : -1, i[t + 5] === i[t + 7] && (i[t + 7] -= r), i[t + 6] === i[t + 8] && (i[t + 8] -= r));
            return i.join(" ") || "x"
        }, attr: function (n, t) {
            var e, o, c, h = this.element || {}, v = h.style, y = h.nodeName, p = this.renderer, d = this.symbolName, w, a = this.shadows, l, b = this.attrSetters, k = this;
            if (yt(n) && i(t) && (e = n, n = {}, n[e] = t), yt(n))e = n, k = e === "strokeWidth" || e === "stroke-width" ? this.strokeweight : this[e]; else for (e in n)if (o = n[e], l = !1, c = b[e] && b[e].call(this, o, e), c !== !1 && o !== null) {
                if (c !== f && (o = c), d && /^(x|y|r|start|end|width|height|innerR|anchorX|anchorY)/.test(e))w || (this.symbolAttr(n), w = !0), l = !0; else if (e === "d") {
                    if (o = o || [], this.d = o.join(" "), h.path = o = this.pathToVML(o), a)for (c = a.length; c--;)a[c].path = a[c].cutOff ? this.cutOffPath(o, a[c].cutOff) : o;
                    l = !0
                } else if (e === "visibility") {
                    if (a)for (c = a.length; c--;)a[c].style[e] = o;
                    y === "DIV" && (o = o === "hidden" ? "-999em" : 0, wr || (v[e] = o ? "visible" : "hidden"), e = "top"), v[e] = o, l = !0
                } else e === "zIndex" ? (o && (v[e] = o), l = !0) : ri(e, ["x", "y", "width", "height"]) !== -1 ? (this[e] = o, e === "x" || e === "y" ? e = {
                    x: "left",
                    y: "top"
                }[e] : o = r(0, o), this.updateClipping ? (this[e] = o, this.updateClipping()) : v[e] = o, l = !0) : e === "class" && y === "DIV" ? h.className = o : e === "stroke" ? (o = p.color(o, h, e), e = "strokecolor") : e === "stroke-width" || e === "strokeWidth" ? (h.stroked = o ? !0 : !1, e = "strokeweight", this[e] = o, ui(o) && (o += "px")) : e === "dashstyle" ? ((h.getElementsByTagName("stroke")[0] || et(p.prepVML(["<stroke/>"]), null, null, h))[e] = o || "solid", this.dashstyle = o, l = !0) : e === "fill" ? y === "SPAN" ? v.color = o : y !== "IMG" && (h.filled = o !== rt ? !0 : !1, o = p.color(o, h, e, this), e = "fillcolor") : e === "opacity" ? l = !0 : y === "shape" && e === "rotation" ? (this[e] = h.style[e] = o, h.style.left = -u(vt(o * hr) + 1) + "px", h.style.top = u(st(o * hr)) + "px") : e === "translateX" || e === "translateY" || e === "rotation" ? (this[e] = o, this.updateTransform(), l = !0) : e === "text" && (this.bBox = null, h.innerHTML = o, l = !0);
                l || (wr ? h[e] = o : s(h, e, o))
            }
            return k
        }, clip: function (n) {
            var t = this, i;
            return n ? (i = n.members, wt(i, t), i.push(t), t.destroyClip = function () {
                wt(i, t)
            }, n = n.getCSS(t)) : (t.destroyClip && t.destroyClip(), n = {clip: wr ? "inherit" : "rect(auto)"}), t.css(n)
        }, css: ei.prototype.htmlCss, safeRemoveChild: function (n) {
            n.parentNode && sr(n)
        }, destroy: function () {
            return this.destroyClip && this.destroyClip(), ei.prototype.destroy.apply(this)
        }, on: function (n, t) {
            return this.element["on" + n] = function () {
                var n = d.event;
                n.target = n.srcElement, t(n)
            }, this
        }, cutOffPath: function (n, t) {
            var i, n = n.split(/[ ,]/);
            return i = n.length, (i === 9 || i === 11) && (n[i - 4] = n[i - 2] = h(n[i - 2]) - 10 * t), n.join(" ")
        }, shadow: function (t, i, r) {
            var v = [], f, e = this.element, y = this.renderer, u, p = e.style, s, o = e.path, c, l, a, w;
            if (o && typeof o.value != "string" && (o = "x"), l = o, t) {
                for (a = n(t.width, 3), w = (t.opacity || .15) / a, f = 1; f <= 3; f++)c = a * 2 + 1 - 2 * f, r && (l = this.cutOffPath(o.value, c + .5)), s = ['<shape isShadow="true" strokeweight="', c, '" filled="false" path="', l, '" coordsize="10 10" style="', e.style.cssText, '" />'], u = et(y.prepVML(s), null, {
                    left: h(p.left) + n(t.offsetX, 1),
                    top: h(p.top) + n(t.offsetY, 1)
                }), r && (u.cutOff = c + 1), s = ['<stroke color="', t.color || "black", '" opacity="', w * f, '"/>'], et(y.prepVML(s), null, null, u), i ? i.element.appendChild(u) : e.parentNode.insertBefore(u, e), v.push(u);
                this.shadows = v
            }
            return this
        }
    }, k = bt(ei, k), kt = {
        Element: k, isIE8: bi.indexOf("MSIE 8.0") > -1, init: function (n, t, i) {
            var r, u;
            this.alignedObjects = [], r = this.createElement(gi), u = r.element, u.style.position = "relative", n.appendChild(r.element), this.isVML = !0, this.box = u, this.boxWrapper = r, this.setSize(t, i, !1), c.namespaces.hcv || (c.namespaces.add("hcv", "urn:schemas-microsoft-com:vml"), c.createStyleSheet().cssText = "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } ")
        }, isHidden: function () {
            return !this.box.offsetWidth
        }, clipRect: function (n, i, r, f) {
            var s = this.createElement(), o = ft(n);
            return e(s, {
                members: [],
                left: (o ? n.x : n) + 1,
                top: (o ? n.y : i) + 1,
                width: (o ? n.width : r) - 1,
                height: (o ? n.height : f) - 1,
                getCSS: function (n) {
                    var t = n.element, o = t.nodeName, n = n.inverted, i = this.top - (o === "shape" ? t.offsetTop : 0), r = this.left, t = r + this.width, f = i + this.height, i = {clip: "rect(" + u(n ? r : i) + "px," + u(n ? f : t) + "px," + u(n ? t : f) + "px," + u(n ? i : r) + "px)"};
                    return !n && wr && o === "DIV" && e(i, {width: t + "px", height: f + "px"}), i
                },
                updateClipping: function () {
                    t(s.members, function (n) {
                        n.css(s.getCSS(n))
                    })
                }
            })
        }, color: function (n, i, r, u) {
            var at = this, s, k = /^rgba/, v, c, f = rt;
            if (n && n.linearGradient ? c = "gradient" : n && n.radialGradient && (c = "pattern"), c) {
                var h, y, e = n.linearGradient || n.radialGradient, l, d, g, nt, ut, p = "", n = n.stops, w, ft = [], ot = function () {
                    v = ['<fill colors="' + ft.join(",") + '" opacity="', g, '" o:opacity2="', d, '" type="', c, '" ', p, 'focus="100%" method="any" />'], et(at.prepVML(v), null, null, i)
                };
                if (l = n[0], w = n[n.length - 1], l[0] > 0 && n.unshift([0, l[1]]), w[0] < 1 && n.push([1, w[1]]), t(n, function (n, t) {
                        k.test(n[1]) ? (s = ti(n[1]), h = s.get("rgb"), y = s.get("a")) : (h = n[1], y = 1), ft.push(n[0] * 100 + "% " + h), t ? (g = y, nt = h) : (d = y, ut = h)
                    }), r === "fill")if (c === "gradient")r = e.x1 || e[0] || 0, n = e.y1 || e[1] || 0, l = e.x2 || e[2] || 0, e = e.y2 || e[3] || 0, p = 'angle="' + (90 - it.atan((e - n) / (l - r)) * 180 / er) + '"', ot(); else {
                    var f = e.r, st = f * 2, ht = f * 2, ct = e.cx, lt = e.cy, a = i.radialReference, o, f = function () {
                        a && (o = u.getBBox(), ct += (a[0] - o.x) / o.width - .5, lt += (a[1] - o.y) / o.height - .5, st *= a[2] / o.width, ht *= a[2] / o.height), p = 'src="' + tt.global.VMLRadialGradientURL + '" size="' + st + "," + ht + '" origin="0.5,0.5" position="' + ct + "," + lt + '" color2="' + ut + '" ', ot()
                    };
                    u.added ? f() : b(u, "add", f), f = nt
                } else f = h
            } else k.test(n) && i.tagName !== "IMG" ? (s = ti(n), v = ["<", r, ' opacity="', s.get("a"), '"/>'], et(this.prepVML(v), null, null, i), f = s.get("rgb")) : (f = i.getElementsByTagName(r), f.length && (f[0].opacity = 1, f[0].type = "solid"), f = n);
            return f
        }, prepVML: function (n) {
            var t = this.isIE8, n = n.join("");
            return t ? (n = n.replace("/>", ' xmlns="urn:schemas-microsoft-com:vml" />'), n = n.indexOf('style="') === -1 ? n.replace("/>", ' style="display:inline-block;behavior:url(#default#VML);" />') : n.replace('style="', 'style="display:inline-block;behavior:url(#default#VML);')) : n = n.replace("<", "<hcv:"), n
        }, text: vi.prototype.html, path: function (n) {
            var t = {coordsize: "10 10"};
            return tr(n) ? t.d = n : ft(n) && e(t, n), this.createElement("shape").attr(t)
        }, circle: function (n, t, i) {
            var r = this.symbol("circle");
            return ft(n) && (i = n.r, t = n.y, n = n.x), r.isCircle = !0, r.attr({
                x: n,
                y: t,
                width: 2 * i,
                height: 2 * i
            })
        }, g: function (n) {
            var t;
            return n && (t = {className: "highcharts-" + n, "class": "highcharts-" + n}), this.createElement(gi).attr(t)
        }, image: function (n, t, i, r, u) {
            var f = this.createElement("img").attr({src: n});
            return arguments.length > 1 && f.attr({x: t, y: i, width: r, height: u}), f
        }, rect: function (n, t, i, u, f, e) {
            var o = this.symbol("rect");
            return o.r = ft(n) ? n.r : f, o.attr(ft(n) ? n : o.crisp(e, n, t, r(i, 0), r(u, 0)))
        }, invertChild: function (n, t) {
            var i = t.style;
            p(n, {flip: "x", left: h(i.width) - 1, top: h(i.height) - 1, rotation: -90})
        }, symbols: {
            arc: function (n, t, i, r, u) {
                var f = u.start, o = u.end, e = u.r || i || r, i = u.innerR, r = st(f), s = vt(f), h = st(o), c = vt(o);
                return o - f == 0 ? ["x"] : (f = ["wa", n - e, t - e, n + e, t + e, n + e * r, t + e * s, n + e * h, t + e * c], u.open && !i && f.push("e", "M", n, t), f.push("at", n - i, t - i, n + i, t + i, n + i * h, t + i * c, n + i * r, t + i * s, "x", "e"), f.isArc = !0, f)
            }, circle: function (n, t, i, r, u) {
                return u && u.isCircle && (n -= i / 2, t -= r / 2), ["wa", n, t, n + i, t + r, n + i, t + r / 2, n + i, t + r / 2, "e"]
            }, rect: function (n, t, r, u, f) {
                var o = n + r, s = t + u, e;
                return !i(f) || !f.r ? o = vi.prototype.symbols.square.apply(0, arguments) : (e = l(f.r, r, u), o = ["M", n + e, t, "L", o - e, t, "wa", o - 2 * e, t, o, t + 2 * e, o - e, t, o, t + e, "L", o, s - e, "wa", o - 2 * e, s - 2 * e, o, s, o, s - e, o - e, s, "L", n + e, s, "wa", n, s - 2 * e, n + 2 * e, s, n + e, s, n, s - e, "L", n, t + e, "wa", n, t, n + 2 * e, t + 2 * e, n, t + e, n + e, t, "x", "e"]), o
            }
        }
    }, Highcharts.VMLRenderer = k = function () {
        this.init.apply(this, arguments)
    }, k.prototype = o(vi.prototype, kt), cr = k), ct && (Highcharts.CanVGRenderer = k = function () {
        hi = "http://www.w3.org/1999/xhtml"
    }, k.prototype.symbols = {}, ne = function () {
        function t() {
            for (var i = n.length, t = 0; t < i; t++)n[t]();
            n = []
        }

        var n = [];
        return {
            push: function (i, r) {
                n.length === 0 && ie(r, t), n.push(i)
            }
        }
    }(), cr = k), fr.prototype = {
        addLabel: function () {
            var t = this.axis, l = t.options, a = t.chart, h = t.horiz, c = t.categories, v = t.series[0] && t.series[0].names, f = this.pos, o = l.labels, s = t.tickPositions, h = h && c && !o.step && !o.staggerLines && !o.rotation && a.plotWidth / s.length || !h && (a.optionsMarginLeft || a.chartWidth * .33), y = f === s[0], p = f === s[s.length - 1], v = c ? n(c[f], v && v[f], f) : f, c = this.label, s = s.info, w;
            t.isDatetimeAxis && s && (w = l.dateTimeLabelFormats[s.higherRanks[f] || s.unitName]), this.isFirst = y, this.isLast = p, l = t.labelFormatter.call({
                axis: t,
                chart: a,
                isFirst: y,
                isLast: p,
                dateTimeLabelFormat: w,
                value: t.isLog ? ni(pt(v)) : v
            }), f = h && {width: r(1, u(h - 2 * (o.padding || 10))) + "px"}, f = e(f, o.style), i(c) ? c && c.attr({text: l}).css(f) : (h = {align: t.labelAlign}, ui(o.rotation) && (h.rotation = o.rotation), this.label = i(l) && o.enabled ? a.renderer.text(l, 0, 0, o.useHTML).attr(h).css(f).add(t.labelGroup) : null)
        }, getLabelSize: function () {
            var n = this.label, t = this.axis;
            return n ? (this.labelBBox = n.getBBox())[t.horiz ? "height" : "width"] : 0
        }, getLabelSides: function () {
            var n = this.axis, t = this.labelBBox.width, n = t * {
                    left: 0,
                    center: .5,
                    right: 1
                }[n.labelAlign] - n.options.labels.x;
            return [-n, t - n]
        }, handleOverflow: function (n, t) {
            var s = !0, i = this.axis, f = i.chart, e = this.isFirst, c = this.isLast, r = t.x, l = i.reversed, o = i.tickPositions;
            if (e || c) {
                var u = this.getLabelSides(), h = u[0], u = u[1], f = f.plotLeft, a = f + i.len, o = (i = i.ticks[o[n + (e ? 1 : -1)]]) && i.label.xy && i.label.xy.x + i.getLabelSides()[e ? 0 : 1];
                e && !l || c && l ? r + h < f && (r = f - h, i && r + u > o && (s = !1)) : r + u > a && (r = a - u, i && r + h < o && (s = !1)), t.x = r
            }
            return s
        }, getPosition: function (n, t, i, r) {
            var u = this.axis, f = u.chart, e = r && f.oldChartHeight || f.chartHeight;
            return {
                x: n ? u.translate(t + i, null, null, r) + u.transB : u.left + u.offset + (u.opposite ? (r && f.oldChartWidth || f.chartWidth) - u.right - u.left : 0),
                y: n ? e - u.bottom + u.offset - (u.opposite ? u.height : 0) : e - u.translate(t + i, null, null, r) - u.transB
            }
        }, getLabelPosition: function (n, t, r, u, f, e, o, s) {
            var h = this.axis, v = h.transA, y = h.reversed, c = h.staggerLines, l = h.chart.renderer.fontMetrics(f.style.fontSize).b, a = f.rotation, n = n + f.x - (e && u ? e * v * (y ? -1 : 1) : 0), t = t + f.y - (e && !u ? e * v * (y ? 1 : -1) : 0);
            return a && h.side === 2 && (t -= l - l * st(a * hr)), i(f.y) || a || (t += l - r.getBBox().height / 2), c && (t += o / (s || 1) % c * (h.labelOffset / c)), {
                x: n,
                y: t
            }
        }, getMarkPath: function (n, t, i, r, u, f) {
            return f.crispLine(["M", n, t, "L", n + (u ? 0 : -i), t + (u ? i : 0)], r)
        }, render: function (t, i, r) {
            var u = this.axis, o = u.options, d = u.chart.renderer, l = u.horiz, y = this.type, p = this.label, a = this.pos, g = o.labels, s = this.gridLine, h = y ? y + "Grid" : "grid", c = y ? y + "Tick" : "tick", w = o[h + "LineWidth"], ut = o[h + "LineColor"], it = o[h + "LineDashStyle"], v = o[c + "Length"], h = o[c + "Width"] || 0, ft = o[c + "Color"], et = o[c + "Position"], c = this.mark, nt = g.step, b = !0, tt = u.tickmarkOffset, e = this.getPosition(l, a, tt, i), k = e.x, e = e.y, rt = l && k === u.pos + u.len || !l && e === u.pos ? -1 : 1, ot = u.staggerLines;
            this.isActive = !0, w && (a = u.getPlotLinePath(a + tt, w * rt, i, !0), s === f && (s = {
                stroke: ut,
                "stroke-width": w
            }, it && (s.dashstyle = it), y || (s.zIndex = 1), i && (s.opacity = 0), this.gridLine = s = w ? d.path(a).attr(s).add(u.gridGroup) : null), !i && s && a && s[this.isNew ? "attr" : "animate"]({
                d: a,
                opacity: r
            })), h && v && (et === "inside" && (v = -v), u.opposite && (v = -v), i = this.getMarkPath(k, e, v, h * rt, l, d), c ? c.animate({
                d: i,
                opacity: r
            }) : this.mark = d.path(i).attr({
                stroke: ft,
                "stroke-width": h,
                opacity: r
            }).add(u.axisGroup)), p && !isNaN(k) && (p.xy = e = this.getLabelPosition(k, e, p, l, g, tt, t, nt), this.isFirst && !this.isLast && !n(o.showFirstLabel, 1) || this.isLast && !this.isFirst && !n(o.showLastLabel, 1) ? b = !1 : !ot && l && g.overflow === "justify" && !this.handleOverflow(t, e) && (b = !1), nt && t % nt && (b = !1), b && !isNaN(e.y) ? (e.opacity = r, p[this.isNew ? "attr" : "animate"](e), this.isNew = !1) : p.attr("y", -9999))
        }, destroy: function () {
            rr(this, this.axis)
        }
    }, hu.prototype = {
        render: function () {
            var c = this, f = c.axis, a = f.horiz, h = (f.pointRange || 0) / 2, u = c.options, e = u.label, y = c.label, b = u.width, p = u.to, w = u.from, s = i(w) && i(p), k = u.value, nt = u.dashStyle, v = c.svgElem, t = [], tt, it = u.color, d = u.zIndex, g = u.events, rt = f.chart.renderer;
            if (f.isLog && (w = ii(w), p = ii(p), k = ii(k)), b)(t = f.getPlotLinePath(k, b), h = {
                stroke: it,
                "stroke-width": b
            }, nt) && (h.dashstyle = nt); else if (s)(w = r(w, f.min - h), p = l(p, f.max + h), t = f.getPlotBandPath(w, p, u), h = {fill: it}, u.borderWidth) && (h.stroke = u.borderColor, h["stroke-width"] = u.borderWidth); else return;
            if (i(d) && (h.zIndex = d), v)t ? v.animate({d: t}, null, v.onGetPath) : (v.hide(), v.onGetPath = function () {
                v.show()
            }); else if (t && t.length && (c.svgElem = v = rt.path(t).attr(h).add(), g))for (tt in u = function (n) {
                v.on(n, function (t) {
                    g[n].apply(c, [t])
                })
            }, g)u(tt);
            return e && i(e.text) && t && t.length && f.width > 0 && f.height > 0 ? (e = o({
                align: a && s && "center",
                x: a ? !s && 4 : 10,
                verticalAlign: !a && s && "middle",
                y: a ? s ? 16 : 10 : s ? 6 : -4,
                rotation: a && !s && 90
            }, e), y || (c.label = y = rt.text(e.text, 0, 0, e.useHTML).attr({
                align: e.textAlign || e.align,
                rotation: e.rotation,
                zIndex: d
            }).css(e.style).add()), f = [t[1], t[4], n(t[6], t[1])], t = [t[2], t[5], n(t[7], t[2])], a = ir(f), s = ir(t), y.align(e, !1, {
                x: a,
                y: s,
                width: fi(f) - a,
                height: fi(t) - s
            }), y.show()) : y && y.hide(), c
        }, destroy: function () {
            wt(this.axis.plotLinesAndBands, this), delete this.axis, rr(this)
        }
    }, hf.prototype = {
        destroy: function () {
            rr(this, this.axis)
        }, setTotal: function (n) {
            this.cum = this.total = n
        }, addValue: function (n) {
            this.setTotal(ni(this.total + n))
        }, render: function (n) {
            var t = this.options, i = t.format, i = i ? wi(i, this) : t.formatter.call(this);
            this.label ? this.label.attr({
                text: i,
                visibility: "hidden"
            }) : this.label = this.axis.chart.renderer.text(i, 0, 0, t.useHTML).css(t.style).attr({
                align: this.textAlign,
                rotation: t.rotation,
                visibility: "hidden"
            }).add(n)
        }, cacheExtremes: function (n, t) {
            this.points[n.index] = t
        }, setOffset: function (n, t) {
            var i = this.axis, e = i.chart, r = e.inverted, u = this.isNegative, f = i.translate(this.percent ? 100 : this.total, 0, 0, 0, 1), i = i.translate(0), i = w(f - i), s = e.xAxis[0].translate(this.x) + n, o = e.plotHeight, u = {
                x: r ? u ? f : f - i : s,
                y: r ? o - s - t : u ? o - f - i : o - f,
                width: r ? i : t,
                height: r ? t : i
            };
            (r = this.label) && (r.align(this.alignOptions, null, u), u = r.alignAttr, r.attr({visibility: this.options.crop === !1 || e.isInsidePlot(u.x, u.y) ? ht ? "inherit" : "visible" : "hidden"}))
        }
    }, pr.prototype = {
        defaultOptions: {
            dateTimeLabelFormats: {
                millisecond: "%H:%M:%S.%L",
                second: "%H:%M:%S",
                minute: "%H:%M",
                hour: "%H:%M",
                day: "%e. %b",
                week: "%e. %b",
                month: "%b '%y",
                year: "%Y"
            },
            endOnTick: !1,
            gridLineColor: "#C0C0C0",
            labels: y,
            lineColor: "#C0D0E0",
            lineWidth: 1,
            minPadding: .01,
            maxPadding: .01,
            minorGridLineColor: "#E0E0E0",
            minorGridLineWidth: 1,
            minorTickColor: "#A0A0A0",
            minorTickLength: 2,
            minorTickPosition: "outside",
            startOfWeek: 1,
            startOnTick: !1,
            tickColor: "#C0D0E0",
            tickLength: 5,
            tickmarkPlacement: "between",
            tickPixelInterval: 100,
            tickPosition: "outside",
            tickWidth: 1,
            title: {align: "middle", style: {color: "#4d759e", fontWeight: "bold"}},
            type: "linear"
        },
        defaultYAxisOptions: {
            endOnTick: !0,
            gridLineWidth: 1,
            tickPixelInterval: 72,
            showLastLabel: !0,
            labels: {x: -8, y: 3},
            lineWidth: 0,
            maxPadding: .05,
            minPadding: .05,
            startOnTick: !0,
            tickWidth: 0,
            title: {rotation: 270, text: "Values"},
            stackLabels: {
                enabled: !1, formatter: function () {
                    return yi(this.total, -1)
                }, style: y.style
            }
        },
        defaultLeftAxisOptions: {labels: {x: -8, y: null}, title: {rotation: 270}},
        defaultRightAxisOptions: {labels: {x: 8, y: null}, title: {rotation: 90}},
        defaultBottomAxisOptions: {labels: {x: 0, y: 14}, title: {rotation: 0}},
        defaultTopAxisOptions: {labels: {x: 0, y: -5}, title: {rotation: 0}},
        init: function (n, t) {
            var u = t.isX, e, o, r;
            this.horiz = n.inverted ? !u : u, this.xOrY = (this.isXAxis = u) ? "x" : "y", this.opposite = t.opposite, this.side = this.horiz ? this.opposite ? 0 : 2 : this.opposite ? 1 : 3, this.setOptions(t), r = this.options, e = r.type, this.labelFormatter = r.labels.formatter || this.defaultLabelFormatter, this.userOptions = t, this.minPixelPadding = 0, this.chart = n, this.reversed = r.reversed, this.zoomEnabled = r.zoomEnabled !== !1, this.categories = r.categories || e === "category", this.isLog = e === "logarithmic", this.isDatetimeAxis = e === "datetime", this.isLinked = i(r.linkedTo), this.tickmarkOffset = this.categories && r.tickmarkPlacement === "between" ? .5 : 0, this.ticks = {}, this.minorTicks = {}, this.plotLinesAndBands = [], this.alternateBands = {}, this.len = 0, this.minRange = this.userMinRange = r.minRange || r.maxZoom, this.range = r.range, this.offset = r.offset || 0, this.stacks = {}, this.oldStacks = {}, this.stackExtremes = {}, this.min = this.max = null, r = this.options.events, ri(this, n.axes) === -1 && (n.axes.push(this), n[u ? "xAxis" : "yAxis"].push(this)), this.series = this.series || [], n.inverted && u && this.reversed === f && (this.reversed = !0), this.removePlotLine = this.removePlotBand = this.removePlotBandOrLine;
            for (o in r)b(this, o, r[o]);
            this.isLog && (this.val2lin = ii, this.lin2val = pt)
        },
        setOptions: function (n) {
            this.options = o(this.defaultOptions, this.isXAxis ? {} : this.defaultYAxisOptions, [this.defaultTopAxisOptions, this.defaultRightAxisOptions, this.defaultBottomAxisOptions, this.defaultLeftAxisOptions][this.side], o(tt[this.isXAxis ? "xAxis" : "yAxis"], n))
        },
        update: function (t, i) {
            var r = this.chart, t = r.options[this.xOrY + "Axis"][this.options.index] = o(this.userOptions, t);
            this.destroy(!0), this._addedPlotLB = !1, this.init(r, e(t, {events: f})), r.isDirtyBox = !0, n(i, !0) && r.redraw()
        },
        remove: function (i) {
            var r = this.chart, u = this.xOrY + "Axis";
            t(this.series, function (n) {
                n.remove(!1)
            }), wt(r.axes, this), wt(r[u], this), r.options[u].splice(this.options.index, 1), t(r[u], function (n, t) {
                n.options.index = t
            }), this.destroy(), r.isDirtyBox = !0, n(i, !0) && r.redraw()
        },
        defaultLabelFormatter: function () {
            var t = this.axis, i = this.value, u = t.categories, o = this.dateTimeLabelFormat, e = tt.lang.numericSymbols, r = e && e.length, n, s = t.options.labels.format, t = t.isLog ? i : t.tickInterval;
            if (s)n = wi(s, this); else if (u)n = i; else if (o)n = nu(o, i); else if (r && t >= 1e3)for (; r-- && n === f;)u = Math.pow(1e3, r + 1), t >= u && e[r] !== null && (n = yi(i / u, -1) + e[r]);
            return n === f && (n = i >= 1e3 ? yi(i, 0) : yi(i, -1)), n
        },
        getSeriesExtremes: function () {
            var u = this, f = u.chart;
            u.hasVisibleSeries = !1, u.dataMin = u.dataMax = null, u.stackExtremes = {}, u.buildStacks(), t(u.series, function (t) {
                if (t.visible || !f.options.chart.ignoreHiddenSeries) {
                    var o = t.options, e;
                    e = o.threshold, u.hasVisibleSeries = !0, u.isLog && e <= 0 && (e = null), u.isXAxis ? (e = t.xData, e.length) && (u.dataMin = l(n(u.dataMin, e[0]), ir(e)), u.dataMax = r(n(u.dataMax, e[0]), fi(e))) : (o = o.stacking, u.usePercentage = o === "percent", u.usePercentage && (u.dataMin = 0, u.dataMax = 99), t.getExtremes(), o = t.dataMax, t = t.dataMin, !u.usePercentage && i(t) && i(o) && (u.dataMin = l(n(u.dataMin, t), t), u.dataMax = r(n(u.dataMax, o), o)), i(e) && (u.dataMin >= e ? (u.dataMin = e, u.ignoreMinPadding = !0) : u.dataMax < e && (u.dataMax = e, u.ignoreMaxPadding = !0)))
                }
            })
        },
        translate: function (n, t, i, r, u, f) {
            var h = this.len, e = 1, s = 0, o = r ? this.oldTransA : this.transA, r = r ? this.oldMin : this.min, c = this.minPixelPadding, u = (this.options.ordinal || this.isLog && u) && this.lin2val;
            return o || (o = this.transA), i && (e *= -1, s = h), this.reversed && (e *= -1, s -= e * h), t ? (n = n * e + s, n -= c, n = n / o + r, u && (n = this.lin2val(n))) : (u && (n = this.val2lin(n)), f === "between" && (f = .5), n = e * (n - r) * o + s + e * c + (ui(f) ? o * f * this.pointRange : 0)), n
        },
        toPixels: function (n, t) {
            return this.translate(n, !1, !this.horiz, null, !0) + (t ? 0 : this.pos)
        },
        toValue: function (n, t) {
            return this.translate(n - (t ? 0 : this.pos), !0, !this.horiz, null, !0)
        },
        getPlotLinePath: function (n, t, i, r) {
            var e = this.chart, s = this.left, h = this.top, f, c, l, n = this.translate(n, null, null, i), a = i && e.oldChartHeight || e.chartHeight, v = i && e.oldChartWidth || e.chartWidth, o;
            return f = this.transB, i = c = u(n + f), f = l = u(a - n - f), isNaN(n) ? o = !0 : this.horiz ? (f = h, l = a - this.bottom, i < s || i > s + this.width) && (o = !0) : (i = s, c = v - this.right, f < h || f > h + this.height) && (o = !0), o && !r ? null : e.renderer.crispLine(["M", i, f, "L", c, l], t || 0)
        },
        getPlotBandPath: function (n, t) {
            var i = this.getPlotLinePath(t), r = this.getPlotLinePath(n);
            return r && i ? r.push(i[4], i[5], i[1], i[2]) : r = null, r
        },
        getLinearTickPositions: function (n, t, i) {
            for (var r, t = ni(nt(t / n) * n), i = ni(oi(i / n) * n), u = []; t <= i;) {
                if (u.push(t), t = ni(t + n), t === r)break;
                r = t
            }
            return u
        },
        getLogTickPositions: function (t, i, r, f) {
            var o = this.options, e = this.len, s = [], h, v, l, c, a;
            if (f || (this._minorAutoInterval = null), t >= .5)t = u(t), s = this.getLinearTickPositions(t, i, r); else if (t >= .08)for (e = nt(i), o = t > .3 ? [1, 2, 4] : t > .15 ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; e < r + 1 && !a; e++)for (v = o.length, h = 0; h < v && !a; h++)l = ii(pt(e) * o[h]), l > i && (!f || c <= r) && s.push(c), c > r && (a = !0), c = l; else(i = pt(i), r = pt(r), t = o[f ? "minorTickInterval" : "tickInterval"], t = n(t === "auto" ? null : t, this._minorAutoInterval, (r - i) * (o.tickPixelInterval / (f ? 5 : 1)) / ((f ? e / this.tickPositions.length : e) || 1)), t = su(t, null, ou(t)), s = or(this.getLinearTickPositions(t, i, r), ii), f) || (this._minorAutoInterval = t / 5);
            return f || (this.tickInterval = t), s
        },
        getMinorTickPositions: function () {
            var i = this.options, n = this.tickPositions, r = this.minorTickInterval, t = [], u;
            if (this.isLog)for (u = n.length, i = 1; i < u; i++)t = t.concat(this.getLogTickPositions(r, n[i - 1], n[i], !0)); else if (this.isDatetimeAxis && i.minorTickInterval === "auto")t = t.concat(ff(uf(r), this.min, this.max, i.startOfWeek)), t[0] < this.min && t.shift(); else for (n = this.min + (n[0] - this.min) % r; n <= this.max; n += r)t.push(n);
            return t
        },
        adjustForMinRange: function () {
            var s = this.options, r = this.min, u = this.max, e, y = this.dataMax - this.dataMin >= this.minRange, c, h, v, a, p, o;
            this.isXAxis && this.minRange === f && !this.isLog && (i(s.min) || i(s.max) ? this.minRange = null : (t(this.series, function (n) {
                for (a = n.xData, h = p = n.xIncrement ? 1 : a.length - 1; h > 0; h--)(v = a[h] - a[h - 1], c === f || v < c) && (c = v)
            }), this.minRange = l(c * 5, this.dataMax - this.dataMin))), u - r < this.minRange && (o = this.minRange, e = (o - u + r) / 2, e = [r - e, n(s.min, r - e)], y && (e[2] = this.dataMin), r = fi(e), u = [r + o, n(s.max, r + o)], y && (u[2] = this.dataMax), u = ir(u), u - r < o && (e[0] = u - o, e[1] = n(s.min, u - o), r = fi(e))), this.min = r, this.max = u
        },
        setAxisTranslation: function (n) {
            var s = this.max - this.min, h = 0, u, e = 0, o = 0, f = this.linkedParent, c = this.transA;
            this.isXAxis && (f ? (e = f.minPointOffset, o = f.pointRangePadding) : t(this.series, function (n) {
                var t = n.pointRange, c = n.options.pointPlacement, f = n.closestPointRange;
                t > s && (t = 0), h = r(h, t), e = r(e, yt(c) ? 0 : t / 2), o = r(o, c === "on" ? 0 : t), !n.noSharedTooltip && i(f) && (u = i(u) ? l(u, f) : f)
            }), f = this.ordinalSlope && u ? this.ordinalSlope / u : 1, this.minPointOffset = e *= f, this.pointRangePadding = o *= f, this.pointRange = l(h, s), this.closestPointRange = u), n && (this.oldTransA = c), this.translationSlope = this.transA = c = this.len / (s + o || 1), this.transB = this.horiz ? this.left : this.bottom, this.minPixelPadding = c * e
        },
        setTickPositions: function (u) {
            var f = this, o = f.chart, e = f.options, h = f.isLog, c = f.isDatetimeAxis, v = f.isXAxis, s = f.isLinked, y = f.options.tickPositioner, p = e.maxPadding, w = e.minPadding, a = e.tickInterval, b = e.minTickInterval, k = e.tickPixelInterval, d = f.categories;
            s ? (f.linkedParent = o[v ? "xAxis" : "yAxis"][e.linkedTo], o = f.linkedParent.getExtremes(), f.min = n(o.min, o.dataMin), f.max = n(o.max, o.dataMax), e.type !== f.linkedParent.options.type && gt(11, 1)) : (f.min = n(f.userMin, e.min, f.dataMin), f.max = n(f.userMax, e.max, f.dataMax)), h && (!u && l(f.min, n(f.dataMin, f.min)) <= 0 && gt(10, 1), f.min = ni(ii(f.min)), f.max = ni(ii(f.max))), f.range && (f.userMin = f.min = r(f.min, f.max - f.range), f.userMax = f.max, u) && (f.range = null), f.beforePadding && f.beforePadding(), f.adjustForMinRange(), !d && !f.usePercentage && !s && i(f.min) && i(f.max) && (o = f.max - f.min) && (!i(e.min) && !i(f.userMin) && w && (f.dataMin < 0 || !f.ignoreMinPadding) && (f.min -= o * w), !i(e.max) && !i(f.userMax) && p && (f.dataMax > 0 || !f.ignoreMaxPadding) && (f.max += o * p)), f.tickInterval = f.min === f.max || f.min === void 0 || f.max === void 0 ? 1 : s && !a && k === f.linkedParent.options.tickPixelInterval ? f.linkedParent.tickInterval : n(a, d ? 1 : (f.max - f.min) * k / (f.len || 1)), v && !u && t(f.series, function (n) {
                n.processData(f.min !== f.oldMin || f.max !== f.oldMax)
            }), f.setAxisTranslation(!0), f.beforeSetTickPositions && f.beforeSetTickPositions(), f.postProcessTickInterval && (f.tickInterval = f.postProcessTickInterval(f.tickInterval)), f.pointRange && (f.tickInterval = r(f.pointRange, f.tickInterval)), !a && f.tickInterval < b && (f.tickInterval = b), c || h || a || (f.tickInterval = su(f.tickInterval, null, ou(f.tickInterval), e)), f.minorTickInterval = e.minorTickInterval === "auto" && f.tickInterval ? f.tickInterval / 5 : e.minorTickInterval, f.tickPositions = u = e.tickPositions ? [].concat(e.tickPositions) : y && y.apply(f, [f.min, f.max]), u || ((f.max - f.min) / f.tickInterval > 2 * f.len && gt(19, !0), u = c ? (f.getNonLinearTimeTicks || ff)(uf(f.tickInterval, e.units), f.min, f.max, e.startOfWeek, f.ordinalPositions, f.closestPointRange, !0) : h ? f.getLogTickPositions(f.tickInterval, f.min, f.max) : f.getLinearTickPositions(f.tickInterval, f.min, f.max), f.tickPositions = u), s || (h = u[0], c = u[u.length - 1], s = f.minPointOffset || 0, e.startOnTick ? f.min = h : f.min - s > h && u.shift(), e.endOnTick ? f.max = c : f.max + s < c && u.pop(), u.length === 1 && (f.min -= .001, f.max += .001))
        },
        setMaxTicks: function () {
            var i = this.chart, n = i.maxTicks || {}, t = this.tickPositions, r = this._maxTicksKey = [this.xOrY, this.pos, this.len].join("-");
            !this.isLinked && !this.isDatetimeAxis && t && t.length > (n[r] || 0) && this.options.alignTicks !== !1 && (n[r] = t.length), i.maxTicks = n
        },
        adjustTickAmount: function () {
            var n = this._maxTicksKey, t = this.tickPositions, r = this.chart.maxTicks, u, f;
            if (r && r[n] && !this.isDatetimeAxis && !this.categories && !this.isLinked && this.options.alignTicks !== !1) {
                if (u = this.tickAmount, f = t.length, this.tickAmount = n = r[n], f < n) {
                    for (; t.length < n;)t.push(ni(t[t.length - 1] + this.tickInterval));
                    this.transA *= (f - 1) / (n - 1), this.max = t[t.length - 1]
                }
                i(u) && n !== u && (this.isDirty = !0)
            }
        },
        setScale: function () {
            var n = this.stacks, i, r, f, u;
            if (this.oldMin = this.min, this.oldMax = this.max, this.oldAxisLength = this.len, this.setAxisSize(), u = this.len !== this.oldAxisLength, t(this.series, function (n) {
                    (n.isDirtyData || n.isDirty || n.xAxis.isDirty) && (f = !0)
                }), u || f || this.isLinked || this.forceRedraw || this.userMin !== this.oldUserMin || this.userMax !== this.oldUserMax) {
                if (!this.isXAxis)for (i in n)for (r in n[i])n[i][r].total = null;
                this.forceRedraw = !1, this.getSeriesExtremes(), this.setTickPositions(), this.oldUserMin = this.userMin, this.oldUserMax = this.userMax, this.isDirty || (this.isDirty = u || this.min !== this.oldMin || this.max !== this.oldMax)
            } else if (!this.isXAxis) {
                this.oldStacks && (n = this.stacks = this.oldStacks);
                for (i in n)for (r in n[i])n[i][r].cum = n[i][r].total
            }
            this.setMaxTicks()
        },
        setExtremes: function (t, i, r, u, f) {
            var o = this, s = o.chart, r = n(r, !0), f = e(f, {min: t, max: i});
            v(o, "setExtremes", f, function () {
                o.userMin = t, o.userMax = i, o.isDirtyExtremes = !0, r && s.redraw(u)
            })
        },
        zoom: function (n, t) {
            return this.allowZoomOutside || (i(this.dataMin) && n <= this.dataMin && (n = f), i(this.dataMax) && t >= this.dataMax && (t = f)), this.displayBtn = n !== f || t !== f, this.setExtremes(n, t, !1, f, {trigger: "zoom"}), !0
        },
        setAxisSize: function () {
            var i = this.chart, t = this.options, u = t.offsetLeft || 0, s = t.offsetRight || 0, o = this.horiz, f, e;
            this.left = e = n(t.left, i.plotLeft + u), this.top = f = n(t.top, i.plotTop), this.width = u = n(t.width, i.plotWidth - u + s), this.height = t = n(t.height, i.plotHeight), this.bottom = i.chartHeight - t - f, this.right = i.chartWidth - u - e, this.len = r(o ? u : t, 0), this.pos = o ? e : f
        },
        getExtremes: function () {
            var n = this.isLog;
            return {
                min: n ? ni(pt(this.min)) : this.min,
                max: n ? ni(pt(this.max)) : this.max,
                dataMin: this.dataMin,
                dataMax: this.dataMax,
                userMin: this.userMin,
                userMax: this.userMax
            }
        },
        getThreshold: function (n) {
            var t = this.isLog, i = t ? pt(this.min) : this.min, t = t ? pt(this.max) : this.max;
            return i > n || n === null ? n = i : t < n && (n = t), this.translate(n, 0, 1, 0, 1)
        },
        addPlotBand: function (n) {
            this.addPlotBandOrLine(n, "plotBands")
        },
        addPlotLine: function (n) {
            this.addPlotBandOrLine(n, "plotLines")
        },
        addPlotBandOrLine: function (n, t) {
            var r = new hu(this, n).render(), i = this.userOptions;
            return t && (i[t] = i[t] || [], i[t].push(n)), this.plotLinesAndBands.push(r), r
        },
        autoLabelAlign: function (t) {
            return t = (n(t, 0) - this.side * 90 + 720) % 360, t > 15 && t < 165 ? "right" : t > 195 && t < 345 ? "left" : "center"
        },
        getOffset: function () {
            var u = this, l = u.chart, d = l.renderer, c = u.options, w = u.tickPositions, h = u.ticks, tt = u.horiz, s = u.side, ft = l.inverted ? [1, 0, 3, 2][s] : s, a, et = 0, ot, st = 0, e = c.title, o = c.labels, y = 0, it = l.axisOffset, ht = l.clipOffset, rt = [-1, 1, 1, -1][s], p, b = 1, ct = n(o.maxStaggerLines, 5), ut, v, k, g;
            if (u.hasData = a = u.hasVisibleSeries || i(u.min) && i(u.max) && !!w, u.showAxis = l = a || n(c.showEmpty, !0), u.staggerLines = u.horiz && o.staggerLines, u.axisGroup || (u.gridGroup = d.g("grid").attr({zIndex: c.gridZIndex || 1}).add(), u.axisGroup = d.g("axis").attr({zIndex: c.zIndex || 2}).add(), u.labelGroup = d.g("axis-labels").attr({zIndex: o.zIndex || 7}).add()), a || u.isLinked) {
                if (u.labelAlign = n(o.align || u.autoLabelAlign(o.rotation)), t(w, function (n) {
                        h[n] ? h[n].addLabel() : h[n] = new fr(u, n)
                    }), u.horiz && !u.staggerLines && ct && !o.rotation) {
                    for (p = u.reversed ? [].concat(w).reverse() : w; b < ct;) {
                        for (a = [], ut = !1, o = 0; o < p.length; o++)v = p[o], k = (k = h[v].label && h[v].label.bBox) ? k.width : 0, g = o % b, k && (v = u.translate(v), a[g] !== f && v < a[g] && (ut = !0), a[g] = v + k);
                        if (ut)b++; else break
                    }
                    b > 1 && (u.staggerLines = b)
                }
                t(w, function (n) {
                    (s === 0 || s === 2 || {
                        1: "left",
                        3: "right"
                    }[s] === u.labelAlign) && (y = r(h[n].getLabelSize(), y))
                }), u.staggerLines && (y *= u.staggerLines, u.labelOffset = y)
            } else for (p in h)h[p].destroy(), delete h[p];
            e && e.text && e.enabled !== !1 && (u.axisTitle || (u.axisTitle = d.text(e.text, 0, 0, e.useHTML).attr({
                zIndex: 7,
                rotation: e.rotation || 0,
                align: e.textAlign || {low: "left", middle: "center", high: "right"}[e.align]
            }).css(e.style).add(u.axisGroup), u.axisTitle.isNew = !0), l && (et = u.axisTitle.getBBox()[tt ? "height" : "width"], st = n(e.margin, tt ? 5 : 10), ot = e.offset), u.axisTitle[l ? "show" : "hide"]()), u.offset = rt * n(c.offset, it[s]), u.axisTitleMargin = n(ot, y + st + (s !== 2 && y && rt * c.labels[tt ? "y" : "x"])), it[s] = r(it[s], u.axisTitleMargin + et + rt * u.offset), ht[ft] = r(ht[ft], nt(c.lineWidth / 2) * 2)
        },
        getLinePath: function (n) {
            var i = this.chart, u = this.opposite, t = this.offset, r = this.horiz, f = this.left + (u ? this.width : 0) + t;
            return this.lineTop = t = i.chartHeight - this.bottom - (u ? this.height : 0) + t, u && (n *= -1), i.renderer.crispLine(["M", r ? this.left : f, r ? t : this.top, "L", r ? i.chartWidth - this.right : f, r ? t : i.chartHeight - this.bottom], n)
        },
        getTitlePosition: function () {
            var n = this.horiz, i = this.left, e = this.top, t = this.len, r = this.options.title, u = n ? i : e, f = this.opposite, o = this.offset, s = h(r.style.fontSize || 12), t = {
                low: u + (n ? 0 : t),
                middle: u + t / 2,
                high: u + (n ? t : 0)
            }[r.align], i = (n ? e + this.height : i) + (n ? 1 : -1) * (f ? -1 : 1) * this.axisTitleMargin + (this.side === 2 ? s : 0);
            return {
                x: n ? t : i + (f ? this.width : 0) + o + (r.x || 0),
                y: n ? i - (f ? this.height : 0) + o : t + (r.y || 0)
            }
        },
        render: function () {
            var n = this, h = n.chart, c = h.renderer, r = n.options, k = n.isLog, d = n.isLinked, o = n.tickPositions, a = n.axisTitle, g = n.stacks, u = n.ticks, s = n.minorTicks, e = n.alternateBands, nt = r.stackLabels, tt = r.alternateGridColor, v = n.tickmarkOffset, y = r.lineWidth, l, it = h.hasRendered && i(n.oldMin) && !isNaN(n.oldMin), p, w, b, rt, ut;
            if (l = n.hasData, p = n.showAxis, t([u, s, e], function (n) {
                    for (var t in n)n[t].isActive = !1
                }), (l || d) && ((n.minorTickInterval && !n.categories && t(n.getMinorTickPositions(), function (t) {
                    s[t] || (s[t] = new fr(n, t, "minor")), it && s[t].isNew && s[t].render(null, !0), s[t].render(null, !1, 1)
                }), o.length && (t(o.slice(1).concat([o[0]]), function (t, i) {
                    i = i === o.length - 1 ? 0 : i + 1, (!d || t >= n.min && t <= n.max) && (u[t] || (u[t] = new fr(n, t)), it && u[t].isNew && u[t].render(i, !0), u[t].render(i, !1, 1))
                }), v && n.min === 0 && (u[-1] || (u[-1] = new fr(n, -1, null, !0)), u[-1].render(-1))), tt && t(o, function (t, i) {
                    i % 2 == 0 && t < n.max && (e[t] || (e[t] = new hu(n)), w = t + v, b = o[i + 1] !== f ? o[i + 1] + v : n.max, e[t].options = {
                        from: k ? pt(w) : w,
                        to: k ? pt(b) : b,
                        color: tt
                    }, e[t].render(), e[t].isActive = !0)
                }), n._addedPlotLB) || (t((r.plotLines || []).concat(r.plotBands || []), function (t) {
                    n.addPlotBandOrLine(t)
                }), n._addedPlotLB = !0)), t([u, s, e], function (n) {
                    var t, i, r = [], u = ki ? ki.duration || 500 : 0, f = function () {
                        for (i = r.length; i--;)n[r[i]] && !n[r[i]].isActive && (n[r[i]].destroy(), delete n[r[i]])
                    };
                    for (t in n)n[t].isActive || (n[t].render(t, !1, 0), n[t].isActive = !1, r.push(t));
                    n === e || !h.hasRendered || !u ? f() : u && setTimeout(f, u)
                }), y && (l = n.getLinePath(y), n.axisLine ? n.axisLine.animate({d: l}) : n.axisLine = c.path(l).attr({
                    stroke: r.lineColor,
                    "stroke-width": y,
                    zIndex: 7
                }).add(n.axisGroup), n.axisLine[p ? "show" : "hide"]()), a && p && (a[a.isNew ? "attr" : "animate"](n.getTitlePosition()), a.isNew = !1), nt && nt.enabled) {
                r = n.stackTotalGroup, r || (n.stackTotalGroup = r = c.g("stack-labels").attr({
                    visibility: "visible",
                    zIndex: 6
                }).add()), r.translate(h.plotLeft, h.plotTop);
                for (rt in g)for (ut in c = g[rt], c)c[ut].render(r)
            }
            n.isDirty = !1
        },
        removePlotBandOrLine: function (n) {
            for (var r = this.plotLinesAndBands, u = this.options, f = this.userOptions, i = r.length; i--;)r[i].id === n && r[i].destroy();
            t([u.plotLines || [], f.plotLines || [], u.plotBands || [], f.plotBands || []], function (t) {
                for (i = t.length; i--;)t[i].id === n && wt(t, t[i])
            })
        },
        setTitle: function (n, t) {
            this.update({title: n}, t)
        },
        redraw: function () {
            var n = this.chart.pointer;
            n.reset && n.reset(!0), this.render(), t(this.plotLinesAndBands, function (n) {
                n.render()
            }), t(this.series, function (n) {
                n.isDirty = !0
            })
        },
        buildStacks: function () {
            this.isXAxis || t(this.series, function (n) {
                n.setStackedPoints()
            })
        },
        setCategories: function (n, t) {
            this.update({categories: n}, t)
        },
        destroy: function (n) {
            var i = this, r = i.stacks, u, f = i.plotLinesAndBands;
            n || at(i);
            for (u in r)rr(r[u]), r[u] = null;
            for (t([i.ticks, i.minorTicks, i.alternateBands], function (n) {
                rr(n)
            }), n = f.length; n--;)f[n].destroy();
            t("stackTotalGroup,axisLine,axisGroup,gridGroup,labelGroup,axisTitle".split(","), function (n) {
                i[n] && (i[n] = i[n].destroy())
            })
        }
    }, cu.prototype = {
        init: function (n, t) {
            var r = t.borderWidth, i = t.style, u = h(i.padding);
            this.chart = n, this.options = t, this.crosshairs = [], this.now = {
                x: 0,
                y: 0
            }, this.isHidden = !0, this.label = n.renderer.label("", 0, 0, t.shape, null, null, t.useHTML, null, "tooltip").attr({
                padding: u,
                fill: t.backgroundColor,
                "stroke-width": r,
                r: t.borderRadius,
                zIndex: 8
            }).css(i).css({padding: 0}).hide().add(), ct || this.label.shadow(t.shadow), this.shared = t.shared
        }, destroy: function () {
            t(this.crosshairs, function (n) {
                n && n.destroy()
            }), this.label && (this.label = this.label.destroy()), clearTimeout(this.hideTimer), clearTimeout(this.tooltipTimeout)
        }, move: function (n, t, i, r) {
            var f = this, u = f.now, o = f.options.animation !== !1 && !f.isHidden;
            e(u, {
                x: o ? (2 * u.x + n) / 3 : n,
                y: o ? (u.y + t) / 2 : t,
                anchorX: o ? (2 * u.anchorX + i) / 3 : i,
                anchorY: o ? (u.anchorY + r) / 2 : r
            }), f.label.attr(u), o && (w(n - u.x) > 1 || w(t - u.y) > 1) && (clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function () {
                f && f.move(n, t, i, r)
            }, 32))
        }, hide: function () {
            var r = this, i;
            clearTimeout(this.hideTimer), this.isHidden || (i = this.chart.hoverPoints, this.hideTimer = setTimeout(function () {
                r.label.fadeOut(), r.isHidden = !0
            }, n(this.options.hideDelay, 500)), i && t(i, function (n) {
                n.setState()
            }), this.chart.hoverPoints = null)
        }, hideCrosshairs: function () {
            t(this.crosshairs, function (n) {
                n && n.hide()
            })
        }, getAnchor: function (n, i) {
            var e, r = this.chart, o = r.inverted, c = r.plotTop, s = 0, h = 0, l, n = dt(n);
            return e = n[0].tooltipPos, this.followPointer && i && (i.chartX === f && (i = r.pointer.normalize(i)), e = [i.chartX - r.plotLeft, i.chartY - c]), e || (t(n, function (n) {
                l = n.series.yAxis, s += n.plotX, h += (n.plotLow ? (n.plotLow + n.plotHigh) / 2 : n.plotY) + (!o && l ? l.top - c : 0)
            }), s /= n.length, h /= n.length, e = [o ? r.plotWidth - h : s, this.shared && !o && n.length > 1 && i ? i.chartY - c : o ? r.plotHeight - s : h]), or(e, u)
        }, getPosition: function (t, i, u) {
            var f = this.chart, h = f.plotLeft, o = f.plotTop, c = f.plotWidth, l = f.plotHeight, s = n(this.options.distance, 12), a = u.plotX, u = u.plotY, f = a + h + (f.inverted ? s : -t - s), e = u - i + o + 15, v;
            return f < 7 && (f = h + r(a, 0) + s), f + t > h + c && (f -= f + t - (h + c), e = u - i + o - s, v = !0), e < o + 5 && (e = o + 5, v && u >= e && u <= e + i && (e = u + o + s)), e + i > o + l && (e = r(o, o + l - i - s)), {
                x: f,
                y: e
            }
        }, defaultFormatter: function (n) {
            var u = this.points || dt(this), i = u[0].series, r;
            return r = [i.tooltipHeaderFormatter(u[0])], t(u, function (n) {
                i = n.series, r.push(i.tooltipFormatter && i.tooltipFormatter(n) || n.point.tooltipFormatter(i.tooltipOptions.pointFormat))
            }), r.push(n.options.footerFormat || ""), r.join("")
        }, refresh: function (i, r) {
            var s = this.chart, f = this.label, e = this.options, a, h, u = {}, c, p = [];
            c = e.formatter || this.defaultFormatter;
            var u = s.hoverPoints, y, o = e.crosshairs, l = this.shared;
            if (clearTimeout(this.hideTimer), this.followPointer = dt(i)[0].series.tooltipOptions.followPointer, h = this.getAnchor(i, r), a = h[0], h = h[1], l && (!i.series || !i.series.noSharedTooltip) ? (s.hoverPoints = i, u && t(u, function (n) {
                    n.setState()
                }), t(i, function (n) {
                    n.setState("hover"), p.push(n.getLabelConfig())
                }), u = {
                    x: i[0].category,
                    y: i[0].y
                }, u.points = p, i = i[0]) : u = i.getLabelConfig(), c = c.call(u, this), u = i.series, c === !1 ? this.hide() : (this.isHidden && (yr(f), f.attr("opacity", 1).show()), f.attr({text: c}), y = e.borderColor || i.color || u.color || "#606060", f.attr({stroke: y}), this.updatePosition({
                    plotX: a,
                    plotY: h
                }), this.isHidden = !1), o)for (o = dt(o), f = o.length; f--;)(l = i.series, e = l[f ? "yAxis" : "xAxis"], o[f] && e) && ((u = f ? n(i.stackY, i.y) : i.x, e.isLog && (u = ii(u)), l.modifyValue && (u = l.modifyValue(u)), e = e.getPlotLinePath(u, 1), this.crosshairs[f]) ? this.crosshairs[f].attr({
                d: e,
                visibility: "visible"
            }) : (u = {
                "stroke-width": o[f].width || 1,
                stroke: o[f].color || "#C0C0C0",
                zIndex: o[f].zIndex || 2
            }, o[f].dashStyle && (u.dashstyle = o[f].dashStyle), this.crosshairs[f] = s.renderer.path(e).attr(u).add()));
            v(s, "tooltipRefresh", {text: c, x: a + s.plotLeft, y: h + s.plotTop, borderColor: y})
        }, updatePosition: function (n) {
            var i = this.chart, t = this.label, t = (this.options.positioner || this.getPosition).call(this, t.width, t.height, n);
            this.move(u(t.x), u(t.y), n.plotX + i.plotLeft, n.plotY + i.plotTop)
        }
    }, lu.prototype = {
        init: function (n, t) {
            var i = ct ? "" : t.chart.zoomType, r = n.inverted, u;
            this.options = t, this.chart = n, this.zoomX = u = /x/.test(i), this.zoomY = i = /y/.test(i), this.zoomHor = u && !r || i && r, this.zoomVert = i && !r || u && r, this.pinchDown = [], this.lastValidTouch = {}, t.tooltip.enabled && (n.tooltip = new cu(n, t.tooltip)), this.setDOMEvents()
        }, normalize: function (n) {
            var t, o, i, n = n || d.event;
            return n.target || (n.target = n.srcElement), n = gf(n), i = n.touches ? n.touches.item(0) : n, this.chartPosition = t = re(this.chart.container), i.pageX === f ? (o = r(n.x, n.clientX - t.left), t = n.y) : (o = i.pageX - t.left, t = i.pageY - t.top), e(n, {
                chartX: u(o),
                chartY: u(t)
            })
        }, getCoordinates: function (n) {
            var i = {xAxis: [], yAxis: []};
            return t(this.chart.axes, function (t) {
                i[t.isXAxis ? "xAxis" : "yAxis"].push({axis: t, value: t.toValue(n[t.horiz ? "chartX" : "chartY"])})
            }), i
        }, getIndex: function (n) {
            var t = this.chart;
            return t.inverted ? t.plotHeight + t.plotTop - n.chartY : n.chartX - t.plotLeft
        }, runPointActions: function (n) {
            var t = this.chart, f = t.series, u = t.tooltip, i, c = t.hoverPoint, o = t.hoverSeries, e, r, s = t.chartWidth, h = this.getIndex(n);
            if (u && this.options.tooltip.shared && (!o || !o.noSharedTooltip)) {
                for (i = [], e = f.length, r = 0; r < e; r++)f[r].visible && f[r].options.enableMouseTracking !== !1 && !f[r].noSharedTooltip && f[r].tooltipPoints.length && (t = f[r].tooltipPoints[h], t.series) && (t._dist = w(h - t.clientX), s = l(s, t._dist), i.push(t));
                for (e = i.length; e--;)i[e]._dist > s && i.splice(e, 1);
                i.length && i[0].clientX !== this.hoverX && (u.refresh(i, n), this.hoverX = i[0].clientX)
            }
            if (o && o.tracker) {
                if ((t = o.tooltipPoints[h]) && t !== c)t.onMouseOver(n)
            } else u && u.followPointer && !u.isHidden && (n = u.getAnchor([{}], n), u.updatePosition({
                plotX: n[0],
                plotY: n[1]
            }))
        }, reset: function (n) {
            var t = this.chart, u = t.hoverSeries, r = t.hoverPoint, i = t.tooltip, t = i && i.shared ? t.hoverPoints : r;
            (n = n && i && t) && dt(t)[0].plotX === f && (n = !1), n ? i.refresh(t) : (r && r.onMouseOut(), u && u.onMouseOut(), i && (i.hide(), i.hideCrosshairs()), this.hoverX = null)
        }, scaleGroups: function (n, i) {
            var r = this.chart, u;
            t(r.series, function (t) {
                u = n || t.getPlotBox(), t.xAxis && t.xAxis.zoomEnabled && (t.group.attr(u), t.markerGroup && (t.markerGroup.attr(u), t.markerGroup.clip(i ? r.clipRect : null)), t.dataLabelsGroup && t.dataLabelsGroup.attr(u))
            }), r.clipRect.attr(i || r.clipBox)
        }, pinchTranslateDirection: function (n, t, i, r, u, f, e) {
            var l = this.chart, h = n ? "x" : "y", k = n ? "X" : "Y", a = "chart" + k, it = n ? "width" : "height", d = l["plot" + (n ? "Left" : "Top")], c, g, o = 1, nt = l.inverted, v = l.bounds[n ? "h" : "v"], y = t.length === 1, p = t[0][a], s = i[0][a], rt = !y && t[1][a], b = !y && i[1][a], tt, i = function () {
                !y && w(p - rt) > 20 && (o = w(s - b) / w(p - rt)), g = (d - s) / o + p, c = l["plot" + (n ? "Width" : "Height")] / o
            };
            i(), t = g, t < v.min ? (t = v.min, tt = !0) : t + c > v.max && (t = v.max - c, tt = !0), tt ? (s -= .8 * (s - e[h][0]), y || (b -= .8 * (b - e[h][1])), i()) : e[h] = [s, b], nt || (f[h] = g - d, f[it] = c), f = nt ? 1 / o : o, u[it] = c, u[h] = t, r[nt ? n ? "scaleY" : "scaleX" : "scale" + k] = o, r["translate" + k] = f * d + (s - f * p)
        }, pinch: function (n) {
            var i = this, f = i.chart, u = i.pinchDown, y = f.tooltip && f.tooltip.options.followTouchMove, o = n.touches, b = o.length, s = i.lastValidTouch, p = i.zoomHor || i.pinchHor, w = i.zoomVert || i.pinchVert, c = p || w, h = i.selectionMarker, a = {}, v = {};
            (y || c) && n.preventDefault(), or(o, function (n) {
                return i.normalize(n)
            }), n.type === "touchstart" ? (t(o, function (n, t) {
                u[t] = {chartX: n.chartX, chartY: n.chartY}
            }), s.x = [u[0].chartX, u[1] && u[1].chartX], s.y = [u[0].chartY, u[1] && u[1].chartY], t(f.axes, function (n) {
                if (n.zoomEnabled) {
                    var i = f.bounds[n.horiz ? "h" : "v"], u = n.minPixelPadding, t = n.toPixels(n.dataMin), e = n.toPixels(n.dataMax), o = l(t, e), t = r(t, e);
                    i.min = l(n.pos, o - u), i.max = r(n.pos + n.len, t + u)
                }
            })) : u.length && (h || (i.selectionMarker = h = e({destroy: ci}, f.plotBox)), p && i.pinchTranslateDirection(!0, u, o, a, h, v, s), w && i.pinchTranslateDirection(!1, u, o, a, h, v, s), i.hasPinched = c, i.scaleGroups(a, v), !c && y && b === 1 && this.runPointActions(i.normalize(n)))
        }, dragStart: function (n) {
            var t = this.chart;
            t.mouseIsDown = n.type, t.cancelClick = !1, t.mouseDownX = this.mouseDownX = n.chartX, t.mouseDownY = this.mouseDownY = n.chartY
        }, drag: function (n) {
            var i = this.chart, s = i.options.chart, t = n.chartX, r = n.chartY, a = this.zoomHor, v = this.zoomVert, u = i.plotLeft, f = i.plotTop, h = i.plotWidth, c = i.plotHeight, l, e = this.mouseDownX, o = this.mouseDownY;
            t < u ? t = u : t > u + h && (t = u + h), r < f ? r = f : r > f + c && (r = f + c), this.hasDragged = Math.sqrt(Math.pow(e - t, 2) + Math.pow(o - r, 2)), this.hasDragged > 10 && (l = i.isInsidePlot(e - u, o - f), i.hasCartesianSeries && (this.zoomX || this.zoomY) && l && !this.selectionMarker && (this.selectionMarker = i.renderer.rect(u, f, a ? 1 : h, v ? 1 : c, 0).attr({
                fill: s.selectionMarkerFill || "rgba(69,114,167,0.25)",
                zIndex: 7
            }).add()), this.selectionMarker && a && (t -= e, this.selectionMarker.attr({
                width: w(t),
                x: (t > 0 ? 0 : t) + e
            })), this.selectionMarker && v && (t = r - o, this.selectionMarker.attr({
                height: w(t),
                y: (t > 0 ? 0 : t) + o
            })), l && !this.selectionMarker && s.panning && i.pan(n, s.panning))
        }, drop: function (n) {
            var i = this.chart, f = this.hasPinched;
            if (this.selectionMarker) {
                var o = {
                    xAxis: [],
                    yAxis: [],
                    originalEvent: n.originalEvent || n
                }, u = this.selectionMarker, s = u.x, h = u.y, c;
                (this.hasDragged || f) && (t(i.axes, function (n) {
                    if (n.zoomEnabled) {
                        var t = n.horiz, i = n.toValue(t ? s : h), t = n.toValue(t ? s + u.width : h + u.height);
                        isNaN(i) || isNaN(t) || (o[n.xOrY + "Axis"].push({axis: n, min: l(i, t), max: r(i, t)}), c = !0)
                    }
                }), c && v(i, "selection", o, function (n) {
                    i.zoom(e(n, f ? {animation: !1} : null))
                })), this.selectionMarker = this.selectionMarker.destroy(), f && this.scaleGroups()
            }
            i && (p(i.container, {cursor: i._cursor}), i.cancelClick = this.hasDragged > 10, i.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = [])
        }, onContainerMouseDown: function (n) {
            n = this.normalize(n), n.preventDefault && n.preventDefault(), this.dragStart(n)
        }, onDocumentMouseUp: function (n) {
            this.drop(n)
        }, onDocumentMouseMove: function (n) {
            var t = this.chart, i = this.chartPosition, r = t.hoverSeries, n = gf(n);
            i && r && !this.inClass(n.target, "highcharts-tracker") && !t.isInsidePlot(n.pageX - i.left - t.plotLeft, n.pageY - i.top - t.plotTop) && this.reset()
        }, onContainerMouseLeave: function () {
            this.reset(), this.chartPosition = null
        }, onContainerMouseMove: function (n) {
            var t = this.chart, n = this.normalize(n);
            n.returnValue = !1, t.mouseIsDown === "mousedown" && this.drag(n), (this.inClass(n.target, "highcharts-tracker") || t.isInsidePlot(n.chartX - t.plotLeft, n.chartY - t.plotTop)) && !t.openMenu && this.runPointActions(n)
        }, inClass: function (n, t) {
            for (var i; n;) {
                if (i = s(n, "class")) {
                    if (i.indexOf(t) !== -1)return !0;
                    if (i.indexOf("highcharts-container") !== -1)return !1
                }
                n = n.parentNode
            }
        }, onTrackerMouseOut: function (n) {
            var t = this.chart.hoverSeries;
            !t || t.options.stickyTracking || this.inClass(n.toElement || n.relatedTarget, "highcharts-tooltip") || t.onMouseOut()
        }, onContainerClick: function (n) {
            var t = this.chart, i = t.hoverPoint, o = t.plotLeft, s = t.plotTop, h = t.inverted, r, u, f, n = this.normalize(n);
            n.cancelBubble = !0, t.cancelClick || (i && this.inClass(n.target, "highcharts-tracker") ? (r = this.chartPosition, u = i.plotX, f = i.plotY, e(i, {
                pageX: r.left + o + (h ? t.plotWidth - f : u),
                pageY: r.top + s + (h ? t.plotHeight - u : f)
            }), v(i.series, "click", e(n, {point: i})), t.hoverPoint && i.firePointEvent("click", n)) : (e(n, this.getCoordinates(n)), t.isInsidePlot(n.chartX - o, n.chartY - s) && v(t, "click", n)))
        }, onContainerTouchStart: function (n) {
            var t = this.chart;
            n.touches.length === 1 ? (n = this.normalize(n), t.isInsidePlot(n.chartX - t.plotLeft, n.chartY - t.plotTop) ? (this.runPointActions(n), this.pinch(n)) : this.reset()) : n.touches.length === 2 && this.pinch(n)
        }, onContainerTouchMove: function (n) {
            (n.touches.length === 1 || n.touches.length === 2) && this.pinch(n)
        }, onDocumentTouchEnd: function (n) {
            this.drop(n)
        }, setDOMEvents: function () {
            var i = this, n = i.chart.container, r;
            this._events = r = [[n, "onmousedown", "onContainerMouseDown"], [n, "onmousemove", "onContainerMouseMove"], [n, "onclick", "onContainerClick"], [n, "mouseleave", "onContainerMouseLeave"], [c, "mousemove", "onDocumentMouseMove"], [c, "mouseup", "onDocumentMouseUp"]], dr && r.push([n, "ontouchstart", "onContainerTouchStart"], [n, "ontouchmove", "onContainerTouchMove"], [c, "touchend", "onDocumentTouchEnd"]), t(r, function (n) {
                i["_" + n[2]] = function (t) {
                    i[n[2]](t)
                }, n[1].indexOf("on") === 0 ? n[0][n[1]] = i["_" + n[2]] : b(n[0], n[1], i["_" + n[2]])
            })
        }, destroy: function () {
            var n = this;
            t(n._events, function (t) {
                t[1].indexOf("on") === 0 ? t[0][t[1]] = null : at(t[0], t[1], n["_" + t[2]])
            }), delete n._events, clearInterval(n.tooltipTimeout)
        }
    }, au.prototype = {
        init: function (t, i) {
            var r = this, u = i.itemStyle, f = n(i.padding, 8), e = i.itemMarginTop || 0;
            this.options = i, i.enabled && (r.baseline = h(u.fontSize) + 3 + e, r.itemStyle = u, r.itemHiddenStyle = o(u, i.itemHiddenStyle), r.itemMarginTop = e, r.padding = f, r.initialItemX = f, r.initialItemY = f - 5, r.maxItemWidth = 0, r.chart = t, r.itemHeight = 0, r.lastLineHeight = 0, r.render(), b(r.chart, "endResize", function () {
                r.positionCheckboxes()
            }))
        }, colorizeItem: function (n, t) {
            var u = this.options, r = n.legendItem, h = n.legendLine, e = n.legendSymbol, i = this.itemHiddenStyle.color, u = t ? u.itemStyle.color : i, o = t ? n.color : i, i = n.options && n.options.marker, c = {
                stroke: o,
                fill: o
            }, s;
            if (r && r.css({fill: u, color: u}), h && h.attr({stroke: o}), e) {
                if (i && e.isMarker)for (s in i = n.convertAttribs(i), i)r = i[s], r !== f && (c[s] = r);
                e.attr(c)
            }
        }, positionItem: function (n) {
            var i = this.options, f = i.symbolPadding, i = !i.rtl, t = n._legendItemPos, r = t[0], t = t[1], u = n.checkbox;
            n.legendGroup && n.legendGroup.translate(i ? r : this.legendWidth - r - 2 * f - 4, t), u && (u.x = r, u.y = t)
        }, destroyItem: function (n) {
            var i = n.checkbox;
            t(["legendItem", "legendLine", "legendSymbol", "legendGroup"], function (t) {
                n[t] && (n[t] = n[t].destroy())
            }), i && sr(n.checkbox)
        }, destroy: function () {
            var n = this.group, t = this.box;
            t && (this.box = t.destroy()), n && (this.group = n.destroy())
        }, positionCheckboxes: function (n) {
            var r = this.group.alignAttr, i, u = this.clipHeight || this.legendHeight;
            r && (i = r.translateY, t(this.allItems, function (t) {
                var f = t.checkbox, e;
                f && (e = i + f.y + (n || 0) + 3, p(f, {
                    left: r.translateX + t.legendItemWidth + f.x - 20 + "px",
                    top: e + "px",
                    display: e > i - 6 && e < i + u - 6 ? "" : rt
                }))
            }))
        }, renderTitle: function () {
            var n = this.padding, t = this.options.title, i = 0;
            t.text && (this.title || (this.title = this.chart.renderer.label(t.text, n - 3, n - 4, null, null, null, null, null, "legend-title").attr({zIndex: 1}).css(t.style).add(this.group)), n = this.title.getBBox(), i = n.height, this.offsetWidth = n.width, this.contentGroup.attr({translateY: i})), this.titleHeight = i
        }, renderItem: function (t) {
            var w, i = this, l = i.chart, s = l.renderer, u = i.options, h = u.layout === "horizontal", f = u.symbolWidth, a = u.symbolPadding, k = i.itemStyle, d = i.itemHiddenStyle, g = i.padding, nt = h ? n(u.itemDistance, 8) : 0, tt = !u.rtl, it = u.width, y = u.itemMarginBottom || 0, p = i.itemMarginTop, c = i.initialItemX, e = t.legendItem, rt = t.series || t, ut = rt.options, ft = ut.showCheckbox, ot = u.useHTML;
            !e && (t.legendGroup = s.g("legend-item").attr({zIndex: 1}).add(i.scrollGroup), rt.drawLegendSymbol(i, t), t.legendItem = e = s.text(u.labelFormat ? wi(u.labelFormat, t) : u.labelFormatter.call(t), tt ? f + a : -a, i.baseline, ot).css(o(t.visible ? k : d)).attr({
                align: tt ? "left" : "right",
                zIndex: 2
            }).add(t.legendGroup), (ot ? e : t.legendGroup).on("mouseover", function () {
                t.setState("hover"), e.css(i.options.itemHoverStyle)
            }).on("mouseout", function () {
                e.css(t.visible ? k : d), t.setState()
            }).on("click", function (n) {
                var i = function () {
                    t.setVisible()
                }, n = {browserEvent: n};
                t.firePointEvent ? t.firePointEvent("legendItemClick", n, i) : v(t, "legendItemClick", n, i)
            }), i.colorizeItem(t, t.visible), ut && ft) && (t.checkbox = et("input", {
                type: "checkbox",
                checked: t.selected,
                defaultChecked: t.selected
            }, u.itemCheckboxStyle, l.container), b(t.checkbox, "click", function (n) {
                v(t, "checkboxClick", {checked: n.target.checked}, function () {
                    t.select()
                })
            })), s = e.getBBox(), w = t.legendItemWidth = u.itemWidth || f + a + s.width + nt + (ft ? 20 : 0), u = w, i.itemHeight = f = s.height, h && i.itemX - c + u > (it || l.chartWidth - 2 * g - c) && (i.itemX = c, i.itemY += p + i.lastLineHeight + y, i.lastLineHeight = 0), i.maxItemWidth = r(i.maxItemWidth, u), i.lastItemY = p + i.itemY + y, i.lastLineHeight = r(f, i.lastLineHeight), t._legendItemPos = [i.itemX, i.itemY], h ? i.itemX += u : (i.itemY += p + f + y, i.lastLineHeight = f), i.offsetWidth = it || r((h ? i.itemX - c - nt : u) + g, i.offsetWidth)
        }, render: function () {
            var n = this, l = n.chart, c = l.renderer, h = n.group, r, a, s, u, f = n.box, o = n.options, y = n.padding, v = o.borderWidth, p = o.backgroundColor;
            n.itemX = n.initialItemX, n.itemY = n.initialItemY, n.offsetWidth = 0, n.lastItemY = 0, h || (n.group = h = c.g("legend").attr({zIndex: 7}).add(), n.contentGroup = c.g().attr({zIndex: 1}).add(h), n.scrollGroup = c.g().add(n.contentGroup)), n.renderTitle(), r = [], t(l.series, function (n) {
                var t = n.options;
                t.showInLegend && !i(t.linkedTo) && (r = r.concat(n.legendItems || (t.legendType === "point" ? n.data : n)))
            }), of(r, function (n, t) {
                return (n.options && n.options.legendIndex || 0) - (t.options && t.options.legendIndex || 0)
            }), o.reversed && r.reverse(), n.allItems = r, n.display = a = !!r.length, t(r, function (t) {
                n.renderItem(t)
            }), s = o.width || n.offsetWidth, u = n.lastItemY + n.lastLineHeight + n.titleHeight, u = n.handleOverflow(u), (v || p) && (s += y, u += y, f ? s > 0 && u > 0 && (f[f.isNew ? "attr" : "animate"](f.crisp(null, null, null, s, u)), f.isNew = !1) : (n.box = f = c.rect(0, 0, s, u, o.borderRadius, v || 0).attr({
                stroke: o.borderColor,
                "stroke-width": v || 0,
                fill: p || rt
            }).add(h).shadow(o.shadow), f.isNew = !0), f[a ? "show" : "hide"]()), n.legendWidth = s, n.legendHeight = u, t(r, function (t) {
                n.positionItem(t)
            }), a && h.align(e({width: s, height: u}, o), !0, "spacingBox"), l.isResizing || this.positionCheckboxes()
        }, handleOverflow: function (t) {
            var e = this, u = this.chart, o = u.renderer, f = this.options, i = f.y, i = u.spacingBox.height + (f.verticalAlign === "top" ? -i : i) - this.padding, a = f.maxHeight, s = this.clipRect, c = f.navigation, v = n(c.animation, !0), h = c.arrowSize || 12, r = this.nav;
            return f.layout === "horizontal" && (i /= 2), a && (i = l(i, a)), t > i && !f.useHTML ? (this.clipHeight = u = i - 20 - this.titleHeight, this.pageCount = oi(t / u), this.currentPage = n(this.currentPage, 1), this.fullHeight = t, s || (s = e.clipRect = o.clipRect(0, 0, 9999, 0), e.contentGroup.clip(s)), s.attr({height: u}), r || (this.nav = r = o.g().attr({zIndex: 1}).add(this.group), this.up = o.symbol("triangle", 0, 0, h, h).on("click", function () {
                e.scroll(-1, v)
            }).add(r), this.pager = o.text("", 15, 10).css(c.style).add(r), this.down = o.symbol("triangle-down", 0, 0, h, h).on("click", function () {
                e.scroll(1, v)
            }).add(r)), e.scroll(0), t = i) : r && (s.attr({height: u.chartHeight}), r.hide(), this.scrollGroup.attr({translateY: 1}), this.clipHeight = 0), t
        }, scroll: function (n, t) {
            var u = this.pageCount, i = this.currentPage + n, r = this.clipHeight, e = this.options.navigation, o = e.activeColor, s = e.inactiveColor, e = this.pager, h = this.padding;
            i > u && (i = u), i > 0 && (t !== f && ur(t, this.chart), this.nav.attr({
                translateX: h,
                translateY: r + 7 + this.titleHeight,
                visibility: "visible"
            }), this.up.attr({fill: i === 1 ? s : o}).css({cursor: i === 1 ? "default" : "pointer"}), e.attr({text: i + "/" + this.pageCount}), this.down.attr({
                x: 18 + this.pager.getBBox().width,
                fill: i === u ? s : o
            }).css({cursor: i === u ? "default" : "pointer"}), r = -l(r * (i - 1), this.fullHeight - r + h) + 1, this.scrollGroup.animate({translateY: r}), e.attr({text: i + "/" + u}), this.currentPage = i, this.positionCheckboxes(r))
        }
    }, vu.prototype = {
        init: function (t, i) {
            var e, f = t.series, u, s;
            t.series = null, e = o(tt, t), e.series = t.series = f;
            var f = e.chart, r = f.margin, r = ft(r) ? r : [r, r, r, r];
            if (this.optionsMarginTop = n(f.marginTop, r[0]), this.optionsMarginRight = n(f.marginRight, r[1]), this.optionsMarginBottom = n(f.marginBottom, r[2]), this.optionsMarginLeft = n(f.marginLeft, r[3]), r = f.events, this.bounds = {
                    h: {},
                    v: {}
                }, this.callback = i, this.isResizing = 0, this.options = e, this.axes = [], this.series = [], this.hasCartesianSeries = f.showAxes, u = this, u.index = di.length, di.push(u), f.reflow !== !1 && b(u, "load", function () {
                    u.initReflow()
                }), r)for (s in r)b(u, s, r[s]);
            u.xAxis = [], u.yAxis = [], u.animation = ct ? !1 : n(f.animation, !0), u.pointCount = 0, u.counters = new ef, u.firstRender()
        }, initSeries: function (n) {
            var t = this.options.chart;
            return (t = lt[n.type || t.type || t.defaultSeriesType]) || gt(17, !0), t = new t, t.init(this, n), t
        }, addSeries: function (t, i, r) {
            var f, u = this;
            return t && (i = n(i, !0), v(u, "addSeries", {options: t}, function () {
                f = u.initSeries(t), u.isDirtyLegend = !0, u.linkSeries(), i && u.redraw(r)
            })), f
        }, addAxis: function (t, i, r, u) {
            var f = i ? "xAxis" : "yAxis", e = this.options;
            new pr(this, o(t, {
                index: this[f].length,
                isX: i
            })), e[f] = dt(e[f] || {}), e[f].push(t), n(r, !0) && this.redraw(u)
        }, isInsidePlot: function (n, t, i) {
            var r = i ? t : n, n = i ? n : t;
            return r >= 0 && r <= this.plotWidth && n >= 0 && n <= this.plotHeight
        }, adjustTickAmounts: function () {
            this.options.chart.alignTicks !== !1 && t(this.axes, function (n) {
                n.adjustTickAmount()
            }), this.maxTicks = null
        }, redraw: function (n) {
            var u = this.axes, i = this.series, f = this.pointer, s = this.legend, h = this.isDirtyLegend, e, c, o = this.isDirtyBox, l = i.length, r = l, a = this.renderer, y = a.isHidden(), p = [];
            for (ur(n, this), y && this.cloneRenderTo(), this.layOutTitles(); r--;)if (n = i[r], n.options.stacking && (e = !0, n.isDirty)) {
                c = !0;
                break
            }
            if (c)for (r = l; r--;)(n = i[r], n.options.stacking) && (n.isDirty = !0);
            t(i, function (n) {
                n.isDirty && n.options.legendType === "point" && (h = !0)
            }), h && s.options.enabled && (s.render(), this.isDirtyLegend = !1), e && this.getStacks(), this.hasCartesianSeries && (this.isResizing || (this.maxTicks = null, t(u, function (n) {
                n.setScale()
            })), this.adjustTickAmounts(), this.getMargins(), t(u, function (n) {
                n.isDirty && (o = !0)
            }), t(u, function (n) {
                n.isDirtyExtremes && (n.isDirtyExtremes = !1, p.push(function () {
                    v(n, "afterSetExtremes", n.getExtremes())
                })), (o || e) && n.redraw()
            })), o && this.drawChartBox(), t(i, function (n) {
                n.isDirty && n.visible && (!n.isCartesian || n.xAxis) && n.redraw()
            }), f && f.reset && f.reset(!0), a.draw(), v(this, "redraw"), y && this.cloneRenderTo(!0), t(p, function (n) {
                n.call()
            })
        }, showLoading: function (n) {
            var r = this.options, t = this.loadingDiv, i = r.loading;
            t || (this.loadingDiv = t = et(gi, {className: "highcharts-loading"}, e(i.style, {
                zIndex: 10,
                display: rt
            }), this.container), this.loadingSpan = et("span", null, i.labelStyle, t)), this.loadingSpan.innerHTML = n || r.lang.loading, this.loadingShown || (p(t, {
                opacity: 0,
                display: "",
                left: this.plotLeft + "px",
                top: this.plotTop + "px",
                width: this.plotWidth + "px",
                height: this.plotHeight + "px"
            }), tf(t, {opacity: i.style.opacity}, {duration: i.showDuration || 0}), this.loadingShown = !0)
        }, hideLoading: function () {
            var t = this.options, n = this.loadingDiv;
            n && tf(n, {opacity: 0}, {
                duration: t.loading.hideDuration || 100, complete: function () {
                    p(n, {display: rt})
                }
            }), this.loadingShown = !1
        }, get: function (n) {
            for (var i = this.axes, r = this.series, u, t = 0; t < i.length; t++)if (i[t].options.id === n)return i[t];
            for (t = 0; t < r.length; t++)if (r[t].options.id === n)return r[t];
            for (t = 0; t < r.length; t++)for (u = r[t].points || [], i = 0; i < u.length; i++)if (u[i].id === n)return u[i];
            return null
        }, getAxes: function () {
            var r = this, n = this.options, i = n.xAxis = dt(n.xAxis || {}), n = n.yAxis = dt(n.yAxis || {});
            t(i, function (n, t) {
                n.index = t, n.isX = !0
            }), t(n, function (n, t) {
                n.index = t
            }), i = i.concat(n), t(i, function (n) {
                new pr(r, n)
            }), r.adjustTickAmounts()
        }, getSelectedPoints: function () {
            var n = [];
            return t(this.series, function (t) {
                n = n.concat(nf(t.points || [], function (n) {
                    return n.selected
                }))
            }), n
        }, getSelectedSeries: function () {
            return nf(this.series, function (n) {
                return n.selected
            })
        }, getStacks: function () {
            var i = this;
            t(i.yAxis, function (n) {
                n.stacks && n.hasVisibleSeries && (n.oldStacks = n.stacks)
            }), t(i.series, function (t) {
                t.options.stacking && (t.visible === !0 || i.options.chart.ignoreHiddenSeries === !1) && (t.stackKey = t.type + n(t.options.stack, ""))
            })
        }, showResetZoom: function () {
            var t = this, i = tt.lang, n = t.options.chart.resetZoomButton, r = n.theme, u = r.states, f = n.relativeTo === "chart" ? null : "plotBox";
            this.resetZoomButton = t.renderer.button(i.resetZoom, null, null, function () {
                t.zoomOut()
            }, r, u && u.hover).attr({align: n.position.align, title: i.resetZoomTitle}).add().align(n.position, !1, f)
        }, zoomOut: function () {
            var n = this;
            v(n, "selection", {resetSelection: !0}, function () {
                n.zoom()
            })
        }, zoom: function (i) {
            var u, e = this.pointer, f = !1, r;
            !i || i.resetSelection ? t(this.axes, function (n) {
                u = n.zoom()
            }) : t(i.xAxis.concat(i.yAxis), function (n) {
                var t = n.axis, i = t.isXAxis;
                (e[i ? "zoomX" : "zoomY"] || e[i ? "pinchX" : "pinchY"]) && (u = t.zoom(n.min, n.max), t.displayBtn && (f = !0))
            }), r = this.resetZoomButton, f && !r ? this.showResetZoom() : !f && ft(r) && (this.resetZoomButton = r.destroy()), u && this.redraw(n(this.options.chart.animation, i && i.animation, this.pointCount < 100))
        }, pan: function (n, i) {
            var u = this, f = u.hoverPoints, e;
            f && t(f, function (n) {
                n.setState()
            }), t(i === "xy" ? [1, 0] : [1], function (t) {
                var s = n[t ? "chartX" : "chartY"], i = u[t ? "xAxis" : "yAxis"][0], f = u[t ? "mouseDownX" : "mouseDownY"], h = (i.pointRange || 0) / 2, o = i.getExtremes(), c = i.toValue(f - s, !0) + h, f = i.toValue(f + u[t ? "plotWidth" : "plotHeight"] - s, !0) - h;
                i.series.length && c > l(o.dataMin, o.min) && f < r(o.dataMax, o.max) && (i.setExtremes(c, f, !1, !1, {trigger: "pan"}), e = !0), u[t ? "mouseDownX" : "mouseDownY"] = s
            }), e && u.redraw(!1), p(u.container, {cursor: "move"})
        }, setTitle: function (n, i) {
            var f, r = this, u = r.options, e;
            e = u.title = o(u.title, n), f = u.subtitle = o(u.subtitle, i), u = f, t([["title", n, e], ["subtitle", i, u]], function (n) {
                var t = n[0], i = r[t], u = n[1], n = n[2];
                i && u && (r[t] = i = i.destroy()), n && n.text && !i && (r[t] = r.renderer.text(n.text, 0, 0, n.useHTML).attr({
                    align: n.align,
                    "class": "highcharts-" + t,
                    zIndex: n.zIndex || 4
                }).css(n.style).add())
            }), r.layOutTitles()
        }, layOutTitles: function () {
            var n = 0, r = this.title, u = this.subtitle, t = this.options, i = t.title, t = t.subtitle, f = this.spacingBox.width - 44;
            !r || (r.css({width: (i.width || f) + "px"}).align(e({y: 15}, i), !1, "spacingBox"), i.floating || i.verticalAlign) || (n = r.getBBox().height, n >= 18 && n <= 25 && (n = 15)), u && (u.css({width: (t.width || f) + "px"}).align(e({y: n + i.margin}, t), !1, "spacingBox"), !t.floating && !t.verticalAlign && (n = oi(n + u.getBBox().height))), this.titleOffset = n
        }, getChartSize: function () {
            var t = this.options.chart, i = this.renderToClone || this.renderTo;
            this.containerWidth = eu(i, "width"), this.containerHeight = eu(i, "height"), this.chartWidth = r(0, t.width || this.containerWidth || 600), this.chartHeight = r(0, n(t.height, this.containerHeight > 19 ? this.containerHeight : 400))
        }, cloneRenderTo: function (n) {
            var t = this.renderToClone, i = this.container;
            n ? t && (this.renderTo.appendChild(i), sr(t), delete this.renderToClone) : (i && i.parentNode === this.renderTo && this.renderTo.removeChild(i), this.renderToClone = t = this.renderTo.cloneNode(0), p(t, {
                position: "absolute",
                top: "-9999px",
                display: "block"
            }), c.body.appendChild(t), i && t.appendChild(i))
        }, getContainer: function () {
            var n, i = this.options.chart, t, r, u;
            this.renderTo = n = i.renderTo, u = "highcharts-" + yu++, yt(n) && (this.renderTo = n = c.getElementById(n)), n || gt(13, !0), t = h(s(n, "data-highcharts-chart")), !isNaN(t) && di[t] && di[t].destroy(), s(n, "data-highcharts-chart", this.index), n.innerHTML = "", n.offsetWidth || this.cloneRenderTo(), this.getChartSize(), t = this.chartWidth, r = this.chartHeight, this.container = n = et(gi, {
                className: "highcharts-container" + (i.className ? " " + i.className : ""),
                id: u
            }, e({
                position: "relative",
                overflow: "hidden",
                width: t + "px",
                height: r + "px",
                textAlign: "left",
                lineHeight: "normal",
                zIndex: 0,
                "-webkit-tap-highlight-color": "rgba(0,0,0,0)"
            }, i.style), this.renderToClone || n), this._cursor = n.style.cursor, this.renderer = i.forExport ? new vi(n, t, r, !0) : new cr(n, t, r), ct && this.renderer.create(this, n, t, r)
        }, getMargins: function () {
            var u = this.options.chart, c = u.spacingTop, d = u.spacingRight, g = u.spacingBottom, u = u.spacingLeft, e, o = this.legend, h = this.optionsMarginTop, l = this.optionsMarginLeft, a = this.optionsMarginRight, v = this.optionsMarginBottom, f = this.options.legend, s = n(f.margin, 10), y = f.x, p = f.y, w = f.align, b = f.verticalAlign, k = this.titleOffset;
            this.resetMargins(), e = this.axisOffset, k && !i(h) && (this.plotTop = r(this.plotTop, k + this.options.title.margin + c)), o.display && !f.floating && (w === "right" ? i(a) || (this.marginRight = r(this.marginRight, o.legendWidth - y + s + d)) : w === "left" ? i(l) || (this.plotLeft = r(this.plotLeft, o.legendWidth + y + s + u)) : b === "top" ? i(h) || (this.plotTop = r(this.plotTop, o.legendHeight + p + s + c)) : b !== "bottom" || i(v) || (this.marginBottom = r(this.marginBottom, o.legendHeight - p + s + g))), this.extraBottomMargin && (this.marginBottom += this.extraBottomMargin), this.extraTopMargin && (this.plotTop += this.extraTopMargin), this.hasCartesianSeries && t(this.axes, function (n) {
                n.getOffset()
            }), i(l) || (this.plotLeft += e[3]), i(h) || (this.plotTop += e[0]), i(v) || (this.marginBottom += e[2]), i(a) || (this.marginRight += e[1]), this.setChartSize()
        }, initReflow: function () {
            function t(t) {
                var f = i.width || eu(r, "width"), e = i.height || eu(r, "height"), t = t ? t.target : d;
                !n.hasUserSize && f && e && (t === d || t === c) && ((f !== n.containerWidth || e !== n.containerHeight) && (clearTimeout(u), n.reflowTimeout = u = setTimeout(function () {
                    n.container && (n.setSize(f, e, !1), n.hasUserSize = null)
                }, 100)), n.containerWidth = f, n.containerHeight = e)
            }

            var n = this, i = n.options.chart, r = n.renderTo, u;
            b(d, "resize", t), b(n, "destroy", function () {
                at(d, "resize", t)
            })
        }, setSize: function (n, f, e) {
            var o = this, s, h, c;
            o.isResizing += 1, c = function () {
                o && v(o, "endResize", null, function () {
                    o.isResizing -= 1
                })
            }, ur(e, o), o.oldChartHeight = o.chartHeight, o.oldChartWidth = o.chartWidth, i(n) && (o.chartWidth = s = r(0, u(n)), o.hasUserSize = !!s), i(f) && (o.chartHeight = h = r(0, u(f))), p(o.container, {
                width: s + "px",
                height: h + "px"
            }), o.setChartSize(!0), o.renderer.setSize(s, h, e), o.maxTicks = null, t(o.axes, function (n) {
                n.isDirty = !0, n.setScale()
            }), t(o.series, function (n) {
                n.isDirty = !0
            }), o.isDirtyLegend = !0, o.isDirtyBox = !0, o.getMargins(), o.redraw(e), o.oldChartHeight = null, v(o, "resize"), ki === !1 ? c() : setTimeout(c, ki && ki.duration || 500)
        }, setChartSize: function (n) {
            var f = this.inverted, e = this.renderer, i = this.chartWidth, v = this.chartHeight, o = this.options.chart, y = o.spacingTop, w = o.spacingRight, b = o.spacingBottom, p = o.spacingLeft, s = this.clipOffset, l, a, h, c;
            this.plotLeft = l = u(this.plotLeft), this.plotTop = a = u(this.plotTop), this.plotWidth = h = r(0, u(i - l - this.marginRight)), this.plotHeight = c = r(0, u(v - a - this.marginBottom)), this.plotSizeX = f ? c : h, this.plotSizeY = f ? h : c, this.plotBorderWidth = o.plotBorderWidth || 0, this.spacingBox = e.spacingBox = {
                x: p,
                y: y,
                width: i - p - w,
                height: v - y - b
            }, this.plotBox = e.plotBox = {
                x: l,
                y: a,
                width: h,
                height: c
            }, i = 2 * nt(this.plotBorderWidth / 2), f = oi(r(i, s[3]) / 2), e = oi(r(i, s[0]) / 2), this.clipBox = {
                x: f,
                y: e,
                width: nt(this.plotSizeX - r(i, s[1]) / 2 - f),
                height: nt(this.plotSizeY - r(i, s[2]) / 2 - e)
            }, n || t(this.axes, function (n) {
                n.setAxisSize(), n.setAxisTranslation()
            })
        }, resetMargins: function () {
            var t = this.options.chart, i = t.spacingRight, r = t.spacingBottom, u = t.spacingLeft;
            this.plotTop = n(this.optionsMarginTop, t.spacingTop), this.marginRight = n(this.optionsMarginRight, i), this.marginBottom = n(this.optionsMarginBottom, r), this.plotLeft = n(this.optionsMarginLeft, u), this.axisOffset = [0, 0, 0, 0], this.clipOffset = [0, 0, 0, 0]
        }, drawChartBox: function () {
            var n = this.options.chart, r = this.renderer, a = this.chartWidth, v = this.chartHeight, t = this.chartBackground, y = this.plotBackground, h = this.plotBorder, p = this.plotBGImage, u = n.borderWidth || 0, w = n.backgroundColor, b = n.plotBackgroundColor, k = n.plotBackgroundImage, c = n.plotBorderWidth || 0, i, f = this.plotLeft, e = this.plotTop, o = this.plotWidth, s = this.plotHeight, d = this.plotBox, g = this.clipRect, l = this.clipBox;
            i = u + (n.shadow ? 8 : 0), (u || w) && (t ? t.animate(t.crisp(null, null, null, a - i, v - i)) : (t = {fill: w || rt}, u && (t.stroke = n.borderColor, t["stroke-width"] = u), this.chartBackground = r.rect(i / 2, i / 2, a - i, v - i, n.borderRadius, u).attr(t).add().shadow(n.shadow))), b && (y ? y.animate(d) : this.plotBackground = r.rect(f, e, o, s, 0).attr({fill: b}).add().shadow(n.plotShadow)), k && (p ? p.animate(d) : this.plotBGImage = r.image(k, f, e, o, s).add()), g ? g.animate({
                width: l.width,
                height: l.height
            }) : this.clipRect = r.clipRect(l), c && (h ? h.animate(h.crisp(null, f, e, o, s)) : this.plotBorder = r.rect(f, e, o, s, 0, -c).attr({
                stroke: n.plotBorderColor,
                "stroke-width": c,
                zIndex: 1
            }).add()), this.isDirtyBox = !1
        }, propFromSeries: function () {
            var i = this, u = i.options.chart, n, f = i.options.series, e, r;
            t(["inverted", "angular", "polar"], function (t) {
                for (n = lt[u.type || u.defaultSeriesType], r = i[t] || u[t] || n && n.prototype[t], e = f && f.length; !r && e--;)(n = lt[f[e].type]) && n.prototype[t] && (r = !0);
                i[t] = r
            })
        }, linkSeries: function () {
            var n = this, i = n.series;
            t(i, function (n) {
                n.linkedSeries.length = 0
            }), t(i, function (t) {
                var i = t.options.linkedTo;
                yt(i) && (i = i === ":previous" ? n.series[t.index - 1] : n.get(i)) && (i.linkedSeries.push(t), t.linkedParent = i)
            })
        }, render: function () {
            var n = this, r = n.axes, u = n.renderer, f = n.options, o = f.labels, i = f.credits, s;
            n.setTitle(), n.legend = new au(n, f.legend), n.getStacks(), t(r, function (n) {
                n.setScale()
            }), n.getMargins(), n.maxTicks = null, t(r, function (n) {
                n.setTickPositions(!0), n.setMaxTicks()
            }), n.adjustTickAmounts(), n.getMargins(), n.drawChartBox(), n.hasCartesianSeries && t(r, function (n) {
                n.render()
            }), n.seriesGroup || (n.seriesGroup = u.g("series-group").attr({zIndex: 3}).add()), t(n.series, function (n) {
                n.translate(), n.setTooltipPoints(), n.render()
            }), o.items && t(o.items, function (t) {
                var i = e(o.style, t.style), r = h(i.left) + n.plotLeft, f = h(i.top) + n.plotTop + 12;
                delete i.left, delete i.top, u.text(t.html, r, f).attr({zIndex: 2}).css(i).add()
            }), i.enabled && !n.credits && (s = i.href, n.credits = u.text(i.text, 0, 0).on("click", function () {
                s && (location.href = s)
            }).attr({align: i.position.align, zIndex: 8}).css(i.style).add().align(i.position)), n.hasRendered = !0
        }, destroy: function () {
            var n = this, u = n.axes, e = n.series, r = n.container, i, o = r && r.parentNode;
            for (v(n, "destroy"), di[n.index] = f, n.renderTo.removeAttribute("data-highcharts-chart"), at(n), i = u.length; i--;)u[i] = u[i].destroy();
            for (i = e.length; i--;)e[i] = e[i].destroy();
            t("title,subtitle,chartBackground,plotBackground,plotBGImage,plotBorder,seriesGroup,clipRect,credits,pointer,scroller,rangeSelector,legend,resetZoomButton,tooltip,renderer".split(","), function (t) {
                var i = n[t];
                i && i.destroy && (n[t] = i.destroy())
            }), r && (r.innerHTML = "", at(r), o && sr(r));
            for (i in n)delete n[i]
        }, isReadyToRender: function () {
            var n = this;
            return !ht && d == d.top && c.readyState !== "complete" || ct && !d.canvg ? (ct ? ne.push(function () {
                n.firstRender()
            }, n.options.global.canvasToolsURL) : c.attachEvent("onreadystatechange", function () {
                c.detachEvent("onreadystatechange", n.firstRender), c.readyState === "complete" && n.firstRender()
            }), !1) : !0
        }, firstRender: function () {
            var n = this, i = n.options, r = n.callback;
            n.isReadyToRender() && (n.getContainer(), v(n, "init"), n.resetMargins(), n.setChartSize(), n.propFromSeries(), n.getAxes(), t(i.series || [], function (t) {
                n.initSeries(t)
            }), n.linkSeries(), v(n, "beforeRender"), n.pointer = new lu(n, i), n.render(), n.renderer.draw(), r && r.apply(n, [n]), t(n.callbacks, function (t) {
                t.apply(n, [n])
            }), n.cloneRenderTo(!0), v(n, "load"))
        }
    }, vu.prototype.callbacks = [], nr = function () {
    }, nr.prototype = {
        init: function (n, t, i) {
            return this.series = n, this.applyOptions(t, i), this.pointAttr = {}, n.options.colorByPoint && (t = n.options.colors || n.chart.options.colors, this.color = this.color || t[n.colorCounter++], n.colorCounter === t.length) && (n.colorCounter = 0), n.chart.pointCount++, this
        }, applyOptions: function (n, t) {
            var i = this.series, r = i.pointValKey, n = nr.prototype.optionsToObject.call(this, n);
            return e(this, n), this.options = this.options ? e(this.options, n) : n, r && (this.y = this[r]), this.x === f && i && (this.x = t === f ? i.autoIncrement() : t), this
        }, optionsToObject: function (n) {
            var t, i = this.series, r = i.pointArrayMap || ["y"], u = r.length, f = 0, e = 0;
            if (typeof n == "number" || n === null)t = {y: n}; else if (tr(n))for (t = {}, n.length > u && (i = typeof n[0], i === "string" ? t.name = n[0] : i === "number" && (t.x = n[0]), f++); e < u;)t[r[e++]] = n[f++]; else typeof n == "object" && (t = n, n.dataLabels && (i._hasPointLabels = !0), n.marker && (i._hasPointMarkers = !0));
            return t
        }, destroy: function () {
            var n = this.series.chart, t = n.hoverPoints, i;
            n.pointCount--, t && (this.setState(), wt(t, this), !t.length) && (n.hoverPoints = null), this === n.hoverPoint && this.onMouseOut(), (this.graphic || this.dataLabel) && (at(this), this.destroyElements()), this.legendItem && n.legend.destroyItem(this);
            for (i in this)this[i] = null
        }, destroyElements: function () {
            for (var i = "graphic,dataLabel,dataLabelUpper,group,connector,shadowGroup".split(","), n, t = 6; t--;)n = i[t], this[n] && (this[n] = this[n].destroy())
        }, getLabelConfig: function () {
            return {
                x: this.category,
                y: this.y,
                key: this.name || this.category,
                series: this.series,
                point: this,
                percentage: this.percentage,
                total: this.total || this.stackTotal
            }
        }, select: function (i, r) {
            var u = this, f = u.series, e = f.chart, i = n(i, !u.selected);
            u.firePointEvent(i ? "select" : "unselect", {accumulate: r}, function () {
                u.selected = u.options.selected = i, f.options.data[ri(u, f.data)] = u.options, u.setState(i && "select"), r || t(e.getSelectedPoints(), function (n) {
                    n.selected && n !== u && (n.selected = n.options.selected = !1, f.options.data[ri(n, f.data)] = n.options, n.setState(""), n.firePointEvent("unselect"))
                })
            })
        }, onMouseOver: function (n) {
            var u = this.series, t = u.chart, i = t.tooltip, r = t.hoverPoint;
            r && r !== this && r.onMouseOut(), this.firePointEvent("mouseOver"), i && (!i.shared || u.noSharedTooltip) && i.refresh(this, n), this.setState("hover"), t.hoverPoint = this
        }, onMouseOut: function () {
            var n = this.series.chart, t = n.hoverPoints;
            t && ri(this, t) !== -1 || (this.firePointEvent("mouseOut"), this.setState(), n.hoverPoint = null)
        }, tooltipFormatter: function (i) {
            var u = this.series, r = u.tooltipOptions, o = n(r.valueDecimals, ""), f = r.valuePrefix || "", e = r.valueSuffix || "";
            return t(u.pointArrayMap || ["y"], function (n) {
                n = "{point." + n, (f || e) && (i = i.replace(n + "}", f + n + "}" + e)), i = i.replace(n + "}", n + ":,." + o + "f}")
            }), wi(i, {point: this, series: this.series})
        }, update: function (t, i, r) {
            var u = this, f = u.series, o = u.graphic, e, c = f.data, s = f.chart, h = f.options, i = n(i, !0);
            u.firePointEvent("update", {options: t}, function () {
                u.applyOptions(t), ft(t) && (f.getAttribs(), o) && (t.marker && t.marker.symbol ? u.graphic = o.destroy() : o.attr(u.pointAttr[f.state])), e = ri(u, c), f.xData[e] = u.x, f.yData[e] = f.toYData ? f.toYData(u) : u.y, f.zData[e] = u.z, h.data[e] = u.options, f.isDirty = f.isDirtyData = s.isDirtyBox = !0, h.legendType === "point" && s.legend.destroyItem(u), i && s.redraw(r)
            })
        }, remove: function (t, i) {
            var f = this, r = f.series, e = r.chart, u, o = r.data;
            ur(i, e), t = n(t, !0), f.firePointEvent("remove", null, function () {
                u = ri(f, o), o.splice(u, 1), r.options.data.splice(u, 1), r.xData.splice(u, 1), r.yData.splice(u, 1), r.zData.splice(u, 1), f.destroy(), r.isDirty = !0, r.isDirtyData = !0, t && e.redraw()
            })
        }, firePointEvent: function (n, t, i) {
            var r = this, u = this.series.options;
            (u.point.events[n] || r.options && r.options.events && r.options.events[n]) && this.importEvents(), n === "click" && u.allowPointSelect && (i = function (n) {
                r.select(null, n.ctrlKey || n.metaKey || n.shiftKey)
            }), v(this, n, t, i)
        }, importEvents: function () {
            if (!this.hasImportedEvents) {
                var n = o(this.series.options.point, this.options).events, t;
                this.events = n;
                for (t in n)b(this, t, n[t]);
                this.hasImportedEvents = !0
            }
        }, setState: function (n) {
            var s = this.plotX, h = this.plotY, r = this.series, t = r.options.states, u = ot[r.type].marker && r.options.marker, a = u && !u.enabled, f = u && u.states[n], v = f && f.enabled === !1, i = r.stateMarkerGraphic, e = this.marker || {}, l = r.chart, c = this.pointAttr, n = n || "";
            n === this.state || this.selected && n !== "select" || t[n] && t[n].enabled === !1 || n && (v || a && !f.enabled) || (this.graphic ? (t = u && this.graphic.symbolName && c[n].r, this.graphic.attr(o(c[n], t ? {
                x: s - t,
                y: h - t,
                width: 2 * t,
                height: 2 * t
            } : {}))) : (n && f && (t = f.radius, e = e.symbol || r.symbol, i && i.currentSymbol !== e && (i = i.destroy()), i ? i.attr({
                x: s - t,
                y: h - t
            }) : (r.stateMarkerGraphic = i = l.renderer.symbol(e, s - t, h - t, 2 * t, 2 * t).attr(c[n]).add(r.markerGroup), i.currentSymbol = e)), i && i[n && l.isInsidePlot(s, h) ? "show" : "hide"]()), this.state = n)
        }
    }, g = function () {
    }, g.prototype = {
        isCartesian: !0,
        type: "line",
        pointClass: nr,
        sorted: !0,
        requireSorting: !0,
        pointAttrToOptions: {stroke: "lineColor", "stroke-width": "lineWidth", fill: "fillColor", r: "radius"},
        colorCounter: 0,
        init: function (i, r) {
            var o, u, f = i.series;
            this.chart = i, this.options = r = this.setOptions(r), this.linkedSeries = [], this.bindAxes(), e(this, {
                name: r.name,
                state: "",
                pointAttr: {},
                visible: r.visible !== !1,
                selected: r.selected === !0
            }), ct && (r.animation = !1), u = r.events;
            for (o in u)b(this, o, u[o]);
            (u && u.click || r.point && r.point.events && r.point.events.click || r.allowPointSelect) && (i.runTrackerClick = !0), this.getColor(), this.getSymbol(), this.setData(r.data, !1), this.isCartesian && (i.hasCartesianSeries = !0), f.push(this), this._i = f.length - 1, of(f, function (t, i) {
                return n(t.options.index, t._i) - n(i.options.index, t._i)
            }), t(f, function (n, t) {
                n.index = t, n.name = n.name || "Series " + (t + 1)
            })
        },
        bindAxes: function () {
            var n = this, i = n.options, u = n.chart, r;
            n.isCartesian && t(["xAxis", "yAxis"], function (e) {
                t(u[e], function (t) {
                    r = t.options, (i[e] === r.index || i[e] !== f && i[e] === r.id || i[e] === f && r.index === 0) && (t.series.push(n), n[e] = t, t.isDirty = !0)
                }), n[e] || gt(18, !0)
            })
        },
        autoIncrement: function () {
            var i = this.options, t = this.xIncrement, t = n(t, i.pointStart, 0);
            return this.pointInterval = n(this.pointInterval, i.pointInterval, 1), this.xIncrement = t + this.pointInterval, t
        },
        getSegments: function () {
            var i = -1, r = [], u, n = this.points, f = n.length;
            if (f)if (this.options.connectNulls) {
                for (u = f; u--;)n[u].y === null && n.splice(u, 1);
                n.length && (r = [n])
            } else t(n, function (t, u) {
                t.y === null ? (u > i + 1 && r.push(n.slice(i + 1, u)), i = u) : u === f - 1 && r.push(n.slice(i + 1, u + 1))
            });
            this.segments = r
        },
        setOptions: function (n) {
            var t = this.chart.options, i = t.plotOptions, r = i[this.type];
            return this.userOptions = n, n = o(r, i.series, n), this.tooltipOptions = o(t.tooltip, n.tooltip), r.marker === null && delete n.marker, n
        },
        getColor: function () {
            var n = this.options, r = this.userOptions, f = this.chart.options.colors, u = this.chart.counters, t;
            t = n.color || ot[this.type].color, t || n.colorByPoint || (i(r._colorIndex) ? n = r._colorIndex : (r._colorIndex = u.color, n = u.color++), t = f[n]), this.color = t, u.wrapColor(f.length)
        },
        getSymbol: function () {
            var n = this.userOptions, r = this.options.marker, t = this.chart, u = t.options.symbols, t = t.counters;
            this.symbol = r.symbol, this.symbol || (i(n._symbolIndex) ? n = n._symbolIndex : (n._symbolIndex = t.symbol, n = t.symbol++), this.symbol = u[n]), /^url/.test(this.symbol) && (r.radius = 0), t.wrapSymbol(u.length)
        },
        drawLegendSymbol: function (n) {
            var t = this.options, f = t.marker, i = n.options, r = i.symbolWidth;
            var e = this.chart.renderer, o = this.legendGroup, n = n.baseline - u(e.fontMetrics(i.itemStyle.fontSize).b * .3);
            t.lineWidth && (i = {"stroke-width": t.lineWidth}, t.dashStyle && (i.dashstyle = t.dashStyle), this.legendLine = e.path(["M", 0, n, "L", r, n]).attr(i).add(o)), f && f.enabled && (t = f.radius, this.legendSymbol = r = e.symbol(this.symbol, r / 2 - t, n - t, 2 * t, 2 * t).add(o), r.isMarker = !0)
        },
        addPoint: function (i, r, u, f) {
            var h = this.options, e = this.data, o = this.graph, s = this.area, c = this.chart, l = this.xData, a = this.yData, v = this.zData, y = this.names, w = o && o.shift || 0, p = h.data;
            ur(f, c), u && t([o, s, this.graphNeg, this.areaNeg], function (n) {
                n && (n.shift = w + 1)
            }), s && (s.isArea = !0), r = n(r, !0), f = {series: this}, this.pointClass.prototype.applyOptions.apply(f, [i]), l.push(f.x), a.push(this.toYData ? this.toYData(f) : f.y), v.push(f.z), y && (y[f.x] = f.name), p.push(i), h.legendType === "point" && this.generatePoints(), u && (e[0] && e[0].remove ? e[0].remove(!1) : (e.shift(), l.shift(), a.shift(), v.shift(), p.shift())), this.isDirtyData = this.isDirty = !0, r && (this.getAttribs(), c.redraw())
        },
        setData: function (t, i) {
            var c = this.points, u = this.options, y = this.chart, e = null, o = this.xAxis, v = o && o.categories && !o.categories.length ? [] : null, r;
            this.xIncrement = null, this.pointRange = o && o.categories ? 1 : u.pointRange, this.colorCounter = 0;
            var l = [], s = [], p = [], h = t ? t.length : [];
            r = n(u.turboThreshold, 1e3);
            var a = this.pointArrayMap, a = a && a.length, w = !!this.toYData;
            if (r && h > r) {
                for (r = 0; e === null && r < h;)e = t[r], r++;
                if (ui(e)) {
                    for (e = n(u.pointStart, 0), u = n(u.pointInterval, 1), r = 0; r < h; r++)l[r] = e, s[r] = t[r], e += u;
                    this.xIncrement = e
                } else if (tr(e))if (a)for (r = 0; r < h; r++)u = t[r], l[r] = u[0], s[r] = u.slice(1, a + 1); else for (r = 0; r < h; r++)u = t[r], l[r] = u[0], s[r] = u[1]; else gt(12)
            } else for (r = 0; r < h; r++)t[r] !== f && (u = {series: this}, this.pointClass.prototype.applyOptions.apply(u, [t[r]]), l[r] = u.x, s[r] = w ? this.toYData(u) : u.y, p[r] = u.z, v && u.name) && (v[u.x] = u.name);
            for (yt(s[0]) && gt(14, !0), this.data = [], this.options.data = t, this.xData = l, this.yData = s, this.zData = p, this.names = v, r = c && c.length || 0; r--;)c[r] && c[r].destroy && c[r].destroy();
            o && (o.minRange = o.userMinRange), this.isDirty = this.isDirtyData = y.isDirtyBox = !0, n(i, !0) && y.redraw(!1)
        },
        remove: function (t, i) {
            var r = this, u = r.chart, t = n(t, !0);
            r.isRemoving || (r.isRemoving = !0, v(r, "remove", null, function () {
                r.destroy(), u.isDirtyLegend = u.isDirtyBox = !0, u.linkSeries(), t && u.redraw(i)
            })), r.isRemoving = !1
        },
        processData: function (n) {
            var i = this.xData, o = this.yData, r = i.length, u = 0;
            var s, e, t = this.xAxis, h = this.options, c = h.cropThreshold, l = this.isCartesian;
            if (l && !this.isDirty && !t.isDirty && !this.yAxis.isDirty && !n)return !1;
            for (l && this.sorted && (!c || r > c || this.forceCrop) && ((n = t.min, t = t.max, i[r - 1] < n || i[0] > t) ? (i = [], o = []) : (i[0] < n || i[r - 1] > t) && (u = this.cropData(this.xData, this.yData, n, t), i = u.xData, o = u.yData, u = u.start, s = !0)), t = i.length - 1; t >= 0; t--)r = i[t] - i[t - 1], r > 0 && (e === f || r < e) ? e = r : r < 0 && this.requireSorting && gt(15);
            this.cropped = s, this.cropStart = u, this.processedXData = i, this.processedYData = o, h.pointRange === null && (this.pointRange = e || 1), this.closestPointRange = e
        },
        cropData: function (n, t, i, u) {
            for (var s = n.length, e = 0, o = s, f = 0; f < s; f++)if (n[f] >= i) {
                e = r(0, f - 1);
                break
            }
            for (; f < s; f++)if (n[f] > u) {
                o = f + 1;
                break
            }
            return {xData: n.slice(e, o), yData: t.slice(e, o), start: e, end: o}
        },
        generatePoints: function () {
            var u = this.options.data, t = this.data, c, e = this.processedXData, v = this.processedYData, l = this.pointClass, o = e.length, a = this.cropStart || 0, i, r = this.hasGroupedData, s, h = [], n;
            for (t || r || (t = [], t.length = u.length, t = this.data = t), n = 0; n < o; n++)i = a + n, r ? h[n] = (new l).init(this, [e[n]].concat(dt(v[n]))) : (t[i] ? s = t[i] : u[i] !== f && (t[i] = s = (new l).init(this, u[i], e[n])), h[n] = s);
            if (t && (o !== (c = t.length) || r))for (n = 0; n < c; n++)(n === a && !r && (n += o), t[n]) && (t[n].destroyElements(), t[n].plotX = f);
            this.data = t, this.points = h
        },
        setStackedPoints: function () {
            if (this.options.stacking && !(this.visible !== !0 && this.chart.options.chart.ignoreHiddenSeries !== !1)) {
                for (var y = this.processedXData, v = this.processedYData, p = v.length, s = this.options, w = s.threshold, b = s.stack, s = s.stacking, u = this.stackKey, k = "-" + u, e = this.yAxis, f = e.stacks, a = e.oldStacks, o = e.stackExtremes, h, n, i, t, c = 0; c < p; c++)i = y[c], t = v[c], n = (h = this.negStacks && t < w) ? k : u, typeof t != "number" || o[u] || (o[u] = {
                    dataMin: t,
                    dataMax: t
                }), f[n] || (f[n] = {}), f[n][i] || (a[n] && a[n][i] ? (f[n][i] = a[n][i], f[n][i].total = null) : f[n][i] = new hf(e, e.options.stackLabels, h, i, b, s)), n = f[n][i], h = n.total, n.addValue(t || 0), n.cacheExtremes(this, [h, h + (t || 0)]), typeof t == "number" && (o[u].dataMin = l(o[u].dataMin, n.total, t), o[u].dataMax = r(o[u].dataMax, n.total, t));
                e.oldStacks = {}
            }
        },
        getExtremes: function () {
            var v = this.yAxis, e = this.stackKey, t, o, s = this.options, u = v.isLog ? null : s.threshold, y = this.processedXData, p = this.processedYData, b = p.length, c = [], w = 0, a = this.xAxis.getExtremes(), k = a.min, a = a.max, h;
            if (s.stacking && (t = v.stackExtremes[e], o = t.dataMin, t = t.dataMax, o = l(o, n(u, o)), t = r(t, n(u, t))), !i(o) || !i(t)) {
                for (e = 0; e < b; e++)if (h = y[e], u = p[e], s = u !== null && u !== f && (!v.isLog || u.length || u > 0), h = this.getExtremesFromAll || this.cropped || (y[e + 1] || h) >= k && (y[e - 1] || h) <= a, s && h)if (s = u.length)for (; s--;)u[s] !== null && (c[w++] = u[s]); else c[w++] = u;
                o = n(o, ir(c)), t = n(t, fi(c))
            }
            this.dataMin = o, this.dataMax = t
        },
        translate: function () {
            this.processedXData || this.processData(), this.generatePoints();
            for (var s = this.options, p = s.stacking, l = this.xAxis, a = l.categories, h = this.yAxis, w = this.points, b = w.length, k = !!this.modifyValue, v = s.pointPlacement, d = v === "between" || ui(v), y = s.threshold, s = 0; s < b; s++) {
                var t = w[s], c = t.x, r = t.y, u = t.low, e = h.stacks[(this.negStacks && r < y ? "-" : "") + this.stackKey], o;
                h.isLog && r <= 0 && (t.y = r = null), t.plotX = l.translate(c, 0, 0, 0, 1, v), p && this.visible && e && e[c] && (e = e[c], o = e.total, e.cum = u = e.cum - r, r = u + r, e.cum === 0 && (u = n(y, h.min)), h.isLog && u <= 0 && (u = null), p === "percent" && (u = o ? u * 100 / o : 0, r = o ? r * 100 / o : 0), t.percentage = o ? t.y * 100 / o : 0, t.total = t.stackTotal = o, t.stackY = r, e.setOffset(this.pointXOffset || 0, this.barW || 0)), t.yBottom = i(u) ? h.translate(u, 0, 1, 0, 1) : null, k && (r = this.modifyValue(r, t)), t.plotY = typeof r == "number" && r !== Infinity ? h.translate(r, 0, 1, 0, 1) : f, t.clientX = d ? l.translate(c, 0, 0, 0, 1) : t.plotX, t.negative = t.y < (y || 0), t.category = a && a[t.x] !== f ? a[t.x] : t.x
            }
            this.getSegments()
        },
        setTooltipPoints: function (n) {
            var i = [], u, o, s = (u = this.xAxis) ? u.tooltipLen || u.len : this.chart.plotSizeX, h, e, f, c = [];
            if (this.options.enableMouseTracking !== !1) {
                for (n && (this.tooltipPoints = null), t(this.segments || this.points, function (n) {
                    i = i.concat(n)
                }), u && u.reversed && (i = i.reverse()), this.orderTooltipPoints && this.orderTooltipPoints(i), n = i.length, f = 0; f < n; f++)for (h = i[f], e = i[f + 1], u = i[f - 1] ? o + 1 : 0, o = i[f + 1] ? l(r(0, nt((h.clientX + (e ? e.wrappedClientX || e.clientX : s)) / 2)), s) : s; u >= 0 && u <= o;)c[u++] = h;
                this.tooltipPoints = c
            }
        },
        tooltipHeaderFormatter: function (n) {
            var t = this.tooltipOptions, r = t.xDateFormat, f = t.dateTimeLabelFormats, i = this.xAxis, e = i && i.options.type === "datetime", t = t.headerFormat, i = i && i.closestPointRange, u;
            if (e && !r)if (i) {
                for (u in a)if (a[u] >= i) {
                    r = f[u];
                    break
                }
            } else r = f.day;
            return e && r && ui(n.key) && (t = t.replace("{point.key}", "{point.key:" + r + "}")), wi(t, {
                point: n,
                series: this
            })
        },
        onMouseOver: function () {
            var t = this.chart, n = t.hoverSeries;
            n && n !== this && n.onMouseOut(), this.options.events.mouseOver && v(this, "mouseOver"), this.setState("hover"), t.hoverSeries = this
        },
        onMouseOut: function () {
            var i = this.options, n = this.chart, t = n.tooltip, r = n.hoverPoint;
            r && r.onMouseOut(), this && i.events.mouseOut && v(this, "mouseOut"), t && !i.stickyTracking && (!t.shared || this.noSharedTooltip) && t.hide(), this.setState(), n.hoverSeries = null
        },
        animate: function (n) {
            var r = this, t = r.chart, o = t.renderer, i, s, f, u;
            i = r.options.animation, s = t.clipBox, f = t.inverted, i && !ft(i) && (i = ot[r.type].animation), u = "_sharedClip" + i.duration + i.easing, n ? (n = t[u], i = t[u + "m"], n || (t[u] = n = o.clipRect(e(s, {width: 0})), t[u + "m"] = i = o.clipRect(-99, f ? -t.plotLeft : -t.plotTop, 99, f ? t.chartWidth : t.chartHeight)), r.group.clip(n), r.markerGroup.clip(i), r.sharedClipKey = u) : ((n = t[u]) && (n.animate({width: t.plotSizeX}, i), t[u + "m"].animate({width: t.plotSizeX + 99}, i)), r.animate = null, r.animationTimeout = setTimeout(function () {
                r.afterAnimate()
            }, i.duration))
        },
        afterAnimate: function () {
            var n = this.chart, t = this.sharedClipKey, i = this.group;
            i && this.options.clip !== !1 && (i.clip(n.clipRect), this.markerGroup.clip()), setTimeout(function () {
                t && n[t] && (n[t] = n[t].destroy(), n[t + "m"] = n[t + "m"].destroy())
            }, 100)
        },
        drawPoints: function () {
            var h, y = this.points, l = this.chart, c, o, a, t, i, r, p, s, w = this.options.marker, v, b = this.markerGroup;
            if (w.enabled || this._hasPointMarkers)for (a = y.length; a--;)(t = y[a], c = nt(t.plotX), o = t.plotY, s = t.graphic, r = t.marker || {}, h = w.enabled && r.enabled === f || r.enabled, v = l.isInsidePlot(u(c), o, l.inverted), h && o !== f && !isNaN(o) && t.y !== null) ? (h = t.pointAttr[t.selected ? "select" : ""], i = h.r, r = n(r.symbol, this.symbol), p = r.indexOf("url") === 0, s) ? s.attr({visibility: v ? ht ? "inherit" : "visible" : "hidden"}).animate(e({
                x: c - i,
                y: o - i
            }, s.symbolName ? {
                width: 2 * i,
                height: 2 * i
            } : {})) : v && (i > 0 || p) && (t.graphic = l.renderer.symbol(r, c - i, o - i, 2 * i, 2 * i).attr(h).add(b)) : s && (t.graphic = s.destroy())
        },
        convertAttribs: function (t, i, r, u) {
            var e = this.pointAttrToOptions, f, o, s = {}, t = t || {}, i = i || {}, r = r || {}, u = u || {};
            for (f in e)o = e[f], s[f] = n(t[o], i[f], r[f], u[f]);
            return s
        },
        getAttribs: function () {
            var r = this, h = r.options, u = ot[r.type].marker ? h.marker : h, c = u.states, o = c.hover, l, a = r.color, n = {
                stroke: a,
                fill: a
            }, y = r.points || [], s = [], f, p = r.pointAttrToOptions, v = h.negativeColor, w;
            for (h.marker ? (o.radius = o.radius || u.radius + 2, o.lineWidth = o.lineWidth || u.lineWidth + 1) : o.color = o.color || ti(o.color || a).brighten(o.brightness).get(), s[""] = r.convertAttribs(u, n), t(["hover", "select"], function (n) {
                s[n] = r.convertAttribs(c[n], s[""])
            }), r.pointAttr = s, a = y.length; a--;) {
                if (n = y[a], (u = n.options && n.options.marker || n.options) && u.enabled === !1 && (u.radius = 0), n.negative && v && (n.color = n.fillColor = v), l = h.colorByPoint || n.color, n.options)for (w in p)i(u[p[w]]) && (l = !0);
                l ? (u = u || {}, f = [], c = u.states || {}, l = c.hover = c.hover || {}, h.marker || (l.color = ti(l.color || n.color).brighten(l.brightness || o.brightness).get()), f[""] = r.convertAttribs(e({color: n.color}, u), s[""]), f.hover = r.convertAttribs(c.hover, s.hover, f[""]), f.select = r.convertAttribs(c.select, s.select, f[""]), n.negative && h.marker && v && (f[""].fill = f.hover.fill = f.select.fill = r.convertAttribs({fillColor: v}).fill)) : f = s, n.pointAttr = f
            }
        },
        update: function (t, i) {
            var r = this.chart, u = this.type, t = o(this.userOptions, {
                animation: !1,
                index: this.index,
                pointStart: this.xData[0]
            }, {data: this.options.data}, t);
            this.remove(!1), e(this, lt[t.type || u].prototype), this.init(r, t), n(i, !0) && r.redraw(!1)
        },
        destroy: function () {
            var n = this, r = n.chart, h = /AppleWebKit\/533/.test(bi), e, u, o = n.data || [], f, s, i;
            for (v(n, "destroy"), at(n), t(["xAxis", "yAxis"], function (t) {
                (i = n[t]) && (wt(i.series, n), i.isDirty = i.forceRedraw = !0)
            }), n.legendItem && n.chart.legend.destroyItem(n), u = o.length; u--;)(f = o[u]) && f.destroy && f.destroy();
            n.points = null, clearTimeout(n.animationTimeout), t("area,graph,dataLabelsGroup,group,markerGroup,tracker,graphNeg,areaNeg,posClip,negClip".split(","), function (t) {
                n[t] && (e = h && t === "group" ? "hide" : "destroy", n[t][e]())
            }), r.hoverSeries === n && (r.hoverSeries = null), wt(r.series, n);
            for (s in n)delete n[s]
        },
        drawDataLabels: function () {
            var u = this, r = u.options.dataLabels, l = u.points, s, h, e, c;
            (r.enabled || u._hasPointLabels) && (u.dlProcessOptions && u.dlProcessOptions(r), c = u.plotGroup("dataLabelsGroup", "data-labels", u.visible ? "visible" : "hidden", r.zIndex || 6), h = r, t(l, function (t) {
                var a, l = t.dataLabel, v, y, p = t.connector, w = !0;
                if (s = t.options && t.options.dataLabels, a = h.enabled || s && s.enabled, l && !a)t.dataLabel = l.destroy(); else if (a) {
                    if (r = o(h, s), a = r.rotation, v = t.getLabelConfig(), e = r.format ? wi(r.format, v) : r.formatter.call(v, r), r.style.color = n(r.color, r.style.color, u.color, "black"), l)i(e) ? (l.attr({text: e}), w = !1) : (t.dataLabel = l = l.destroy(), p) && (t.connector = p.destroy()); else if (i(e)) {
                        l = {
                            fill: r.backgroundColor,
                            stroke: r.borderColor,
                            "stroke-width": r.borderWidth,
                            r: r.borderRadius || 0,
                            rotation: a,
                            padding: r.padding,
                            zIndex: 1
                        };
                        for (y in l)l[y] === f && delete l[y];
                        l = t.dataLabel = u.chart.renderer[a ? "text" : "label"](e, 0, -999, null, null, null, r.useHTML).attr(l).css(r.style).add(c).shadow(r.shadow)
                    }
                    l && u.alignDataLabel(t, l, r, null, w)
                }
            }))
        },
        alignDataLabel: function (t, i, r, f, o) {
            var s = this.chart, h = s.inverted, c = n(t.plotX, -999), l = n(t.plotY, -999), t = i.getBBox(), f = e({
                x: h ? s.plotWidth - l : c,
                y: u(h ? s.plotHeight - c : l),
                width: 0,
                height: 0
            }, f);
            e(r, {width: t.width, height: t.height}), r.rotation ? (f = {
                align: r.align,
                x: f.x + r.x + f.width / 2,
                y: f.y + r.y + f.height / 2
            }, i[o ? "attr" : "animate"](f)) : (i.align(r, null, f), f = i.alignAttr), i.attr({visibility: r.crop === !1 || s.isInsidePlot(f.x, f.y) && s.isInsidePlot(f.x + t.width, f.y + t.height) ? s.renderer.isSVG ? "inherit" : "visible" : "hidden"})
        },
        getSegmentPath: function (n) {
            var r = this, i = [], u = r.options.step;
            return t(n, function (t, f) {
                var o = t.plotX, s = t.plotY, e;
                r.getPointSpline ? i.push.apply(i, r.getPointSpline(n, t, f)) : (i.push(f ? "L" : "M"), u && f && (e = n[f - 1], u === "right" ? i.push(e.plotX, s) : u === "center" ? i.push((e.plotX + o) / 2, e.plotY, (e.plotX + o) / 2, s) : i.push(o, e.plotY)), i.push(t.plotX, t.plotY))
            }), i
        },
        getGraphPath: function () {
            var n = this, i = [], r, u = [];
            return t(n.segments, function (t) {
                r = n.getSegmentPath(t), t.length > 1 ? i = i.concat(r) : u.push(t[0])
            }), n.singlePoints = u, n.graphPath = i
        },
        drawGraph: function () {
            var i = this, n = this.options, u = [["graph", n.lineColor || this.color]], f = n.lineWidth, e = n.dashStyle, r = this.getGraphPath(), o = n.negativeColor;
            o && u.push(["graphNeg", o]), t(u, function (t, u) {
                var s = t[0], o = i[s];
                o ? (yr(o), o.animate({d: r})) : f && r.length && (o = {
                    stroke: t[1],
                    "stroke-width": f,
                    zIndex: 1
                }, e && (o.dashstyle = e), i[s] = i.chart.renderer.path(r).attr(o).add(i.group).shadow(!u && n.shadow))
            })
        },
        clipNeg: function () {
            var i = this.options, n = this.chart, h = n.renderer, f = i.negativeColor || i.negativeFillColor, t, c = this.graph, l = this.area, o = this.posClip, s = this.negClip;
            t = n.chartWidth;
            var a = n.chartHeight, e = r(t, a), v = this.yAxis;
            f && (c || l) && (f = u(v.toPixels(i.threshold || 0, !0)), i = {x: 0, y: 0, width: e, height: f}, e = {
                x: 0,
                y: f,
                width: e,
                height: e
            }, n.inverted && (i.height = e.y = n.plotWidth - f, h.isVML && (i = {
                x: n.plotWidth - f - n.plotLeft,
                y: 0,
                width: t,
                height: a
            }, e = {
                x: f + n.plotLeft - t,
                y: 0,
                width: n.plotLeft + f,
                height: t
            })), v.reversed ? (n = e, t = i) : (n = i, t = e), o ? (o.animate(n), s.animate(t)) : (this.posClip = o = h.clipRect(n), this.negClip = s = h.clipRect(t), c && this.graphNeg && (c.clip(o), this.graphNeg.clip(s)), l && (l.clip(o), this.areaNeg.clip(s))))
        },
        invertGroups: function () {
            function i() {
                var i = {width: n.yAxis.len, height: n.xAxis.len};
                t(["group", "markerGroup"], function (t) {
                    n[t] && n[t].attr(i).invert()
                })
            }

            var n = this, r = n.chart;
            n.xAxis && (b(r, "resize", i), b(n, "destroy", function () {
                at(r, "resize", i)
            }), i(), n.invertGroups = i)
        },
        plotGroup: function (n, t, i, r, u) {
            var f = this[n], e = !f;
            return e && (this[n] = f = this.chart.renderer.g(t).attr({
                visibility: i,
                zIndex: r || .1
            }).add(u)), f[e ? "attr" : "animate"](this.getPlotBox()), f
        },
        getPlotBox: function () {
            return {
                translateX: this.xAxis ? this.xAxis.left : this.chart.plotLeft,
                translateY: this.yAxis ? this.yAxis.top : this.chart.plotTop,
                scaleX: 1,
                scaleY: 1
            }
        },
        render: function () {
            var n = this.chart, t, i = this.options, r = i.animation && !!this.animate && n.renderer.isSVG, u = this.visible ? "visible" : "hidden", f = i.zIndex, e = this.hasRendered, o = n.seriesGroup;
            t = this.plotGroup("group", "series", u, f, o), this.markerGroup = this.plotGroup("markerGroup", "markers", u, f, o), r && this.animate(!0), this.getAttribs(), t.inverted = this.isCartesian ? n.inverted : !1, this.drawGraph && (this.drawGraph(), this.clipNeg()), this.drawDataLabels(), this.drawPoints(), this.options.enableMouseTracking !== !1 && this.drawTracker(), n.inverted && this.invertGroups(), i.clip === !1 || this.sharedClipKey || e || t.clip(n.clipRect), r ? this.animate() : e || this.afterAnimate(), this.isDirty = this.isDirtyData = !1, this.hasRendered = !0
        },
        redraw: function () {
            var t = this.chart, f = this.isDirtyData, i = this.group, r = this.xAxis, u = this.yAxis;
            i && (t.inverted && i.attr({
                width: t.plotWidth,
                height: t.plotHeight
            }), i.animate({
                translateX: n(r && r.left, t.plotLeft),
                translateY: n(u && u.top, t.plotTop)
            })), this.translate(), this.setTooltipPoints(!0), this.render(), f && v(this, "updatedData")
        },
        setState: function (n) {
            var t = this.options, i = this.graph, u = this.graphNeg, r = t.states, t = t.lineWidth, n = n || "";
            this.state !== n && (this.state = n, r[n] && r[n].enabled === !1 || (n && (t = r[n].lineWidth || t + 1), i && !i.dashstyle && (n = {"stroke-width": t}, i.attr(n), u && u.attr(n))))
        },
        setVisible: function (n, i) {
            var r = this, u = r.chart, o = r.legendItem, e, s = u.options.chart.ignoreHiddenSeries, h = r.visible;
            e = (r.visible = n = r.userOptions.visible = n === f ? !h : n) ? "show" : "hide", t(["group", "dataLabelsGroup", "markerGroup", "tracker"], function (n) {
                r[n] && r[n][e]()
            }), u.hoverSeries === r && r.onMouseOut(), o && u.legend.colorizeItem(r, n), r.isDirty = !0, r.options.stacking && t(u.series, function (n) {
                n.options.stacking && n.visible && (n.isDirty = !0)
            }), t(r.linkedSeries, function (t) {
                t.setVisible(n, !1)
            }), s && (u.isDirtyBox = !0), i !== !1 && u.redraw(), v(r, e)
        },
        show: function () {
            this.setVisible(!0)
        },
        hide: function () {
            this.setVisible(!1)
        },
        select: function (n) {
            this.selected = n = n === f ? !this.selected : n, this.checkbox && (this.checkbox.checked = n), v(this, n ? "select" : "unselect")
        },
        drawTracker: function () {
            var i = this, h = i.options, o = h.trackByArea, r = [].concat(o ? i.areaPath : i.graphPath), u = r.length, s = i.chart, a = s.pointer, v = s.renderer, f = s.options.tooltip.snap, c = i.tracker, e = h.cursor, y = e && {cursor: e}, e = i.singlePoints, n, l = function () {
                s.hoverSeries !== i && i.onMouseOver()
            };
            if (u && !o)for (n = u + 1; n--;)r[n] === "M" && r.splice(n + 1, 0, r[n + 1] - f, r[n + 2], "L"), (n && r[n] === "M" || n === u) && r.splice(n, 0, "L", r[n - 2] + f, r[n - 1]);
            for (n = 0; n < e.length; n++)u = e[n], r.push("M", u.plotX - f, u.plotY, "L", u.plotX + f, u.plotY);
            c ? c.attr({d: r}) : (i.tracker = v.path(r).attr({
                "stroke-linejoin": "round",
                visibility: i.visible ? "visible" : "hidden",
                stroke: vf,
                fill: o ? vf : rt,
                "stroke-width": h.lineWidth + (o ? 0 : 2 * f),
                zIndex: 2
            }).add(i.group), t([i.tracker, i.markerGroup], function (n) {
                if (n.addClass("highcharts-tracker").on("mouseover", l).on("mouseout", function (n) {
                        a.onTrackerMouseOut(n)
                    }).css(y), dr)n.on("touchstart", l)
            }))
        }
    }, y = bt(g), lt.line = y, ot.area = o(ut, {threshold: 0}), y = bt(g, {
        type: "area", getSegments: function () {
            var u = [], r = [], f = [], v = this.xAxis, c = this.yAxis, n = c.stacks[this.stackKey], e = {}, o, s, h = this.points, l, i, a;
            if (this.options.stacking && !this.cropped) {
                for (i = 0; i < h.length; i++)e[h[i].x] = h[i];
                for (a in n)f.push(+a);
                f.sort(function (n, t) {
                    return n - t
                }), t(f, function (t) {
                    e[t] ? r.push(e[t]) : (o = v.translate(t), l = n[t].percent ? n[t].total ? n[t].cum * 100 / n[t].total : 0 : n[t].cum, s = c.toPixels(l, !0), r.push({
                        y: null,
                        plotX: o,
                        clientX: o,
                        plotY: s,
                        yBottom: s,
                        onMouseOver: ci
                    }))
                }), r.length && u.push(r)
            } else g.prototype.getSegments.call(this), u = this.segments;
            this.segments = u
        }, getSegmentPath: function (n) {
            var i = g.prototype.getSegmentPath.call(this, n), r = [].concat(i), t, u = this.options;
            if (i.length === 3 && r.push("L", i[1], i[2]), u.stacking && !this.closedStacks)for (t = n.length - 1; t >= 0; t--)t < n.length - 1 && u.step && r.push(n[t + 1].plotX, n[t].yBottom), r.push(n[t].plotX, n[t].yBottom); else this.closeSegment(r, n);
            return this.areaPath = this.areaPath.concat(r), i
        }, closeSegment: function (n, t) {
            var i = this.yAxis.getThreshold(this.options.threshold);
            n.push("L", t[t.length - 1].plotX, i, "L", t[0].plotX, i)
        }, drawGraph: function () {
            this.areaPath = [], g.prototype.drawGraph.apply(this);
            var i = this, u = this.areaPath, r = this.options, f = r.negativeColor, e = r.negativeFillColor, o = [["area", this.color, r.fillColor]];
            (f || e) && o.push(["areaNeg", f, e]), t(o, function (t) {
                var f = t[0], e = i[f];
                e ? e.animate({d: u}) : i[f] = i.chart.renderer.path(u).attr({
                    fill: n(t[2], ti(t[1]).setOpacity(n(r.fillOpacity, .75)).get()),
                    zIndex: 0
                }).add(i.group)
            })
        }, drawLegendSymbol: function (n, t) {
            t.legendSymbol = this.chart.renderer.rect(0, n.baseline - 11, n.options.symbolWidth, 12, 2).attr({zIndex: 3}).add(t.legendGroup)
        }
    }), lt.area = y, ot.spline = o(ut), k = bt(g, {
        type: "spline", getPointSpline: function (n, t, i) {
            var h = t.plotX, u = t.plotY, s = n[i - 1], o = n[i + 1], a, e, c, f, v;
            return s && o && (n = s.plotY, c = o.plotX, o = o.plotY, a = (1.5 * h + s.plotX) / 2.5, e = (1.5 * u + n) / 2.5, c = (1.5 * h + c) / 2.5, f = (1.5 * u + o) / 2.5, v = (f - e) * (c - h) / (c - a) + u - f, e += v, f += v, e > n && e > u ? (e = r(n, u), f = 2 * u - e) : e < n && e < u && (e = l(n, u), f = 2 * u - e), f > o && f > u ? (f = r(o, u), e = 2 * u - f) : f < o && f < u && (f = l(o, u), e = 2 * u - f), t.rightContX = c, t.rightContY = f), i ? (t = ["C", s.rightContX || s.plotX, s.rightContY || s.plotY, a || h, e || u, h, u], s.rightContX = s.rightContY = null) : t = ["M", h, u], t
        }
    }), lt.spline = k, ot.areaspline = o(ot.area), kt = y.prototype, k = bt(k, {
        type: "areaspline",
        closedStacks: !0,
        getSegmentPath: kt.getSegmentPath,
        closeSegment: kt.closeSegment,
        drawGraph: kt.drawGraph,
        drawLegendSymbol: kt.drawLegendSymbol
    }), lt.areaspline = k, ot.column = o(ut, {
        borderColor: "#FFFFFF",
        borderWidth: 1,
        borderRadius: 0,
        groupPadding: .2,
        marker: null,
        pointPadding: .1,
        minPointLength: 0,
        cropThreshold: 50,
        pointRange: null,
        states: {hover: {brightness: .1, shadow: !1}, select: {color: "#C0C0C0", borderColor: "#000000", shadow: !1}},
        dataLabels: {align: null, verticalAlign: null, y: null},
        stickyTracking: !1,
        threshold: 0
    }), k = bt(g, {
        type: "column",
        pointAttrToOptions: {stroke: "borderColor", "stroke-width": "borderWidth", fill: "color", r: "borderRadius"},
        trackerGroups: ["group", "dataLabelsGroup"],
        negStacks: !0,
        init: function () {
            g.prototype.init.apply(this, arguments);
            var n = this, i = n.chart;
            i.hasRendered && t(i.series, function (t) {
                t.type === n.type && (t.isDirty = !0)
            })
        },
        getColumnMetrics: function () {
            var u = this, e = u.options, r = u.xAxis, y = u.yAxis, p = r.reversed, h, a = {}, v, o = 0;
            e.grouping === !1 ? o = 1 : t(u.chart.series, function (n) {
                var t = n.options, i = n.yAxis;
                n.type === u.type && n.visible && y.len === i.len && y.pos === i.pos && (t.stacking ? (h = n.stackKey, a[h] === f && (a[h] = o++), v = a[h]) : t.grouping !== !1 && (v = o++), n.columnIndex = v)
            });
            var r = l(w(r.transA) * (r.ordinalSlope || e.pointRange || r.closestPointRange || 1), r.len), b = r * e.groupPadding, c = (r - 2 * b) / o, s = e.pointWidth, e = i(s) ? (c - s) / 2 : c * e.pointPadding, s = n(s, c - 2 * e);
            return u.columnMetrics = {
                width: s,
                offset: e + (b + ((p ? o - (u.columnIndex || 0) : u.columnIndex) || 0) * c - r / 2) * (p ? -1 : 1)
            }
        },
        translate: function () {
            var c = this.chart, i = this.options, o = i.borderWidth, s = this.yAxis, e = this.translatedThreshold = s.getThreshold(i.threshold), f = n(i.minPointLength, 5), i = this.getColumnMetrics(), a = i.width, y = this.barW = oi(r(a, 1 + 2 * o)), p = this.pointXOffset = i.offset, v = -(o % 2 ? .5 : 0), h = o % 2 ? .5 : 1;
            c.renderer.isVML && c.inverted && (h += 1), g.prototype.translate.apply(this), t(this.points, function (t) {
                var i = l(r(-999, t.plotY), s.len + 999), b = n(t.yBottom, e), c = t.plotX + p, k = y, o = l(i, b), d, i = r(i, b) - o;
                w(i) < f && f && (i = f, o = u(w(o - e) > f ? b - f : e - (s.translate(t.y, 0, 1, 0, 1) <= e ? f : 0))), t.barX = c, t.pointWidth = a, b = w(c) < .5, k = u(c + k) + v, c = u(c) + v, k -= c, d = w(o) < .5, i = u(o + i) + h, o = u(o) + h, i -= o, b && (c += 1, k -= 1), d && (o -= 1, i += 1), t.shapeType = "rect", t.shapeArgs = {
                    x: c,
                    y: o,
                    width: k,
                    height: i
                }
            })
        },
        getSymbol: ci,
        drawLegendSymbol: y.prototype.drawLegendSymbol,
        drawGraph: ci,
        drawPoints: function () {
            var n = this, i = n.options, u = n.chart.renderer, r;
            t(n.points, function (t) {
                var s = t.plotY, e = t.graphic;
                s === f || isNaN(s) || t.y === null ? e && (t.graphic = e.destroy()) : (r = t.shapeArgs, e ? (yr(e), e.animate(o(r))) : t.graphic = u[t.shapeType](r).attr(t.pointAttr[t.selected ? "select" : ""]).add(n.group).shadow(i.shadow, null, i.stacking && !i.borderRadius))
            })
        },
        drawTracker: function () {
            var n = this, i = n.chart, e = i.pointer, r = n.options.cursor, o = r && {cursor: r}, u = function (t) {
                var u = t.target, r;
                for (i.hoverSeries !== n && n.onMouseOver(); u && !r;)r = u.point, u = u.parentNode;
                if (r !== f && r !== i.hoverPoint)r.onMouseOver(t)
            };
            t(n.points, function (n) {
                n.graphic && (n.graphic.element.point = n), n.dataLabel && (n.dataLabel.element.point = n)
            }), n._hasTracking || (t(n.trackerGroups, function (t) {
                if (n[t] && (n[t].addClass("highcharts-tracker").on("mouseover", u).on("mouseout", function (n) {
                        e.onTrackerMouseOut(n)
                    }).css(o), dr))n[t].on("touchstart", u)
            }), n._hasTracking = !0)
        },
        alignDataLabel: function (t, i, r, u, f) {
            var e = this.chart, s = e.inverted, l = t.dlBox || t.shapeArgs, h = t.below || t.plotY > n(this.translatedThreshold, e.plotSizeY), c = n(r.inside, !!this.options.stacking);
            l && (u = o(l), s && (u = {
                x: e.plotWidth - u.y - u.height,
                y: e.plotHeight - u.x - u.width,
                width: u.height,
                height: u.width
            }), !c) && (s ? (u.x += h ? 0 : u.width, u.width = 0) : (u.y += h ? u.height : 0, u.height = 0)), r.align = n(r.align, !s || c ? "center" : h ? "right" : "left"), r.verticalAlign = n(r.verticalAlign, s || c ? "middle" : h ? "top" : "bottom"), g.prototype.alignDataLabel.call(this, t, i, r, u, f)
        },
        animate: function (n) {
            var i = this.yAxis, f = this.options, u = this.chart.inverted, t = {};
            ht && (n ? (t.scaleY = .001, n = l(i.pos + i.len, r(i.pos, i.toPixels(f.threshold))), u ? t.translateX = n - i.len : t.translateY = n, this.group.attr(t)) : (t.scaleY = 1, t[u ? "translateX" : "translateY"] = i.pos, this.group.animate(t, this.options.animation), this.animate = null))
        },
        remove: function () {
            var n = this, i = n.chart;
            i.hasRendered && t(i.series, function (t) {
                t.type === n.type && (t.isDirty = !0)
            }), g.prototype.remove.apply(n, arguments)
        }
    }), lt.column = k, ot.bar = o(ot.column), kt = bt(k, {
        type: "bar",
        inverted: !0
    }), lt.bar = kt, ot.scatter = o(ut, {
        lineWidth: 0,
        tooltip: {
            headerFormat: '<span style="font-size: 10px; color:{series.color}">{series.name}<\/span><br/>',
            pointFormat: "x: <b>{point.x}<\/b><br/>y: <b>{point.y}<\/b><br/>",
            followPointer: !0
        },
        stickyTracking: !1
    }), kt = bt(g, {
        type: "scatter",
        sorted: !1,
        requireSorting: !1,
        noSharedTooltip: !0,
        trackerGroups: ["markerGroup"],
        drawTracker: k.prototype.drawTracker,
        setTooltipPoints: ci
    }), lt.scatter = kt, ot.pie = o(ut, {
        borderColor: "#FFFFFF",
        borderWidth: 1,
        center: [null, null],
        clip: !1,
        colorByPoint: !0,
        dataLabels: {
            distance: 30, enabled: !0, formatter: function () {
                return this.point.name
            }
        },
        ignoreHiddenPoint: !0,
        legendType: "point",
        marker: null,
        size: null,
        showInLegend: !1,
        slicedOffset: 10,
        states: {hover: {brightness: .1, shadow: !1}},
        stickyTracking: !1,
        tooltip: {followPointer: !0}
    }), ut = {
        type: "pie",
        isCartesian: !1,
        pointClass: bt(nr, {
            init: function () {
                nr.prototype.init.apply(this, arguments);
                var t = this, i;
                return t.y < 0 && (t.y = null), e(t, {
                    visible: t.visible !== !1,
                    name: n(t.name, "Slice")
                }), i = function (n) {
                    t.slice(n.type === "select")
                }, b(t, "select", i), b(t, "unselect", i), t
            }, setVisible: function (n) {
                var i = this, r = i.series, u = r.chart, e;
                i.visible = i.options.visible = n = n === f ? !i.visible : n, r.options.data[ri(i, r.data)] = i.options, e = n ? "show" : "hide", t(["graphic", "dataLabel", "connector", "shadowGroup"], function (n) {
                    i[n] && i[n][e]()
                }), i.legendItem && u.legend.colorizeItem(i, n), !r.isDirty && r.options.ignoreHiddenPoint && (r.isDirty = !0, u.redraw())
            }, slice: function (t, r, u) {
                var f = this.series;
                ur(u, f.chart), n(r, !0), this.sliced = this.options.sliced = t = i(t) ? t : !this.sliced, f.options.data[ri(this, f.data)] = this.options, t = t ? this.slicedTranslation : {
                    translateX: 0,
                    translateY: 0
                }, this.graphic.animate(t), this.shadowGroup && this.shadowGroup.animate(t)
            }
        }),
        requireSorting: !1,
        noSharedTooltip: !0,
        trackerGroups: ["group", "dataLabelsGroup"],
        pointAttrToOptions: {stroke: "borderColor", "stroke-width": "borderWidth", fill: "color"},
        getColor: ci,
        animate: function (n) {
            var i = this, u = i.points, r = i.startAngleRad;
            n || (t(u, function (n) {
                var t = n.graphic, n = n.shapeArgs;
                t && (t.attr({r: i.center[3] / 2, start: r, end: r}), t.animate({
                    r: n.r,
                    start: n.start,
                    end: n.end
                }, i.options.animation))
            }), i.animate = null)
        },
        setData: function (t, i) {
            g.prototype.setData.call(this, t, !1), this.processData(), this.generatePoints(), n(i, !0) && this.chart.redraw()
        },
        generatePoints: function () {
            var n, i = 0, r, u, t, f = this.options.ignoreHiddenPoint;
            for (g.prototype.generatePoints.call(this), r = this.points, u = r.length, n = 0; n < u; n++)t = r[n], i += f && !t.visible ? 0 : t.y;
            for (this.total = i, n = 0; n < u; n++)t = r[n], t.percentage = i > 0 ? t.y / i * 100 : 0, t.total = i
        },
        getCenter: function () {
            var t = this.options, i = this.chart, r = 2 * (t.slicedOffset || 0), f, e = i.plotWidth - 2 * r, o = i.plotHeight - 2 * r, i = t.center, t = [n(i[0], "50%"), n(i[1], "50%"), t.size || "100%", t.innerSize || 0], s = l(e, o), u;
            return or(t, function (n, t) {
                return u = /%$/.test(n), f = t < 2 || t === 2 && u, (u ? [e, o, s, s][t] * h(n) / 100 : n) + (f ? r : 0)
            })
        },
        translate: function (n) {
            this.generatePoints();
            var a = 0, e = this.options, v = e.slicedOffset, s = v + e.borderWidth, r, f, t, y = this.startAngleRad = er / 180 * ((e.startAngle || 0) % 360 - 90), p = this.points, h = 2 * er, o = e.dataLabels.distance, e = e.ignoreHiddenPoint, c, w = p.length, i;
            for (n || (this.center = n = this.getCenter()), this.getX = function (i, r) {
                return t = it.asin((i - n[1]) / (n[2] / 2 + o)), n[0] + (r ? -1 : 1) * st(t) * (n[2] / 2 + o)
            }, c = 0; c < w; c++)i = p[c], r = u((y + a * h) * 1e3) / 1e3, (!e || i.visible) && (a += i.percentage / 100), f = u((y + a * h) * 1e3) / 1e3, i.shapeType = "arc", i.shapeArgs = {
                x: n[0],
                y: n[1],
                r: n[2] / 2,
                innerR: n[3] / 2,
                start: r,
                end: f
            }, t = (f + r) / 2, t > .75 * h && (t -= 2 * er), i.slicedTranslation = {
                translateX: u(st(t) * v),
                translateY: u(vt(t) * v)
            }, r = st(t) * n[2] / 2, f = vt(t) * n[2] / 2, i.tooltipPos = [n[0] + r * .7, n[1] + f * .7], i.half = t < h / 4 ? 0 : 1, i.angle = t, s = l(s, o / 2), i.labelPos = [n[0] + r + st(t) * o, n[1] + f + vt(t) * o, n[0] + r + st(t) * s, n[1] + f + vt(t) * s, n[0] + r, n[1] + f, o < 0 ? "center" : i.half ? "right" : "left", t];
            this.setTooltipPoints()
        },
        drawGraph: null,
        drawPoints: function () {
            var n = this, f = n.chart.renderer, r, u, o = n.options.shadow, i, s;
            o && !n.shadowGroup && (n.shadowGroup = f.g("shadow").add(n.group)), t(n.points, function (t) {
                u = t.graphic, s = t.shapeArgs, i = t.shadowGroup, o && !i && (i = t.shadowGroup = f.g("shadow").add(n.shadowGroup)), r = t.sliced ? t.slicedTranslation : {
                    translateX: 0,
                    translateY: 0
                }, i && i.attr(r), u ? u.animate(e(s, r)) : t.graphic = u = f.arc(s).setRadialReference(n.center).attr(t.pointAttr[t.selected ? "select" : ""]).attr({"stroke-linejoin": "round"}).attr(r).add(n.group).shadow(o, i), t.visible === !1 && t.setVisible(!1)
            })
        },
        drawDataLabels: function () {
            var y = this, o = y.data, e, ut = y.chart, b = y.options.dataLabels, it = n(b.connectorPadding, 10), at = n(b.connectorWidth, 1), vt = ut.plotWidth, ut = ut.plotHeight, nt, ot, bt = n(b.softConnector, !0), rt = b.distance, st = y.center, ht = st[2] / 2, yt = st[1], kt = rt > 0, a, c, f, tt, pt = [[], []], v, s, ft, l, i, p = [0, 0, 0, 0], wt = function (n, t) {
                return t.y - n.y
            }, dt = function (n, t) {
                n.sort(function (n, i) {
                    return n.angle !== void 0 && (i.angle - n.angle) * t
                })
            }, lt, et;
            if (y.visible && (b.enabled || y._hasPointLabels)) {
                for (g.prototype.drawDataLabels.apply(y), t(o, function (n) {
                    n.dataLabel && pt[n.half].push(n)
                }), l = 0; !tt && o[l];)tt = o[l] && o[l].dataLabel && (o[l].dataLabel.getBBox().height || 21), l++;
                for (l = 2; l--;) {
                    var o = [], ct = [], k = pt[l], d = k.length, h;
                    if (dt(k, l - .5), rt > 0) {
                        for (i = yt - ht - rt; i <= yt + ht + rt; i += tt)o.push(i);
                        if (c = o.length, d > c) {
                            for (e = [].concat(k), e.sort(wt), i = d; i--;)e[i].rank = i;
                            for (i = d; i--;)k[i].rank >= c && k.splice(i, 1);
                            d = k.length
                        }
                        for (i = 0; i < d; i++) {
                            for (e = k[i], f = e.labelPos, e = 9999, et = 0; et < c; et++)lt = w(o[et] - f[1]), lt < e && (e = lt, h = et);
                            if (h < i && o[i] !== null)h = i; else for (c < d - i + h && o[i] !== null && (h = c - d + i); o[h] === null;)h++;
                            ct.push({i: h, y: o[h]}), o[h] = null
                        }
                        ct.sort(wt)
                    }
                    for (i = 0; i < d; i++)e = k[i], f = e.labelPos, a = e.dataLabel, ft = e.visible === !1 ? "hidden" : "visible", e = f[1], rt > 0 ? (c = ct.pop(), h = c.i, s = c.y, e > s && o[h + 1] !== null || e < s && o[h - 1] !== null) && (s = e) : s = e, v = b.justify ? st[0] + (l ? -1 : 1) * (ht + rt) : y.getX(h === 0 || h === o.length - 1 ? e : s, l), a._attr = {
                        visibility: ft,
                        align: f[6]
                    }, a._pos = {
                        x: v + b.x + ({left: it, right: -it}[f[6]] || 0),
                        y: s + b.y - 10
                    }, a.connX = v, a.connY = s, this.options.size === null && (c = a.width, v - c < it ? p[3] = r(u(c - v + it), p[3]) : v + c > vt - it && (p[1] = r(u(v + c - vt + it), p[1])), s - tt / 2 < 0 ? p[0] = r(u(-s + tt / 2), p[0]) : s + tt / 2 > ut && (p[2] = r(u(s + tt / 2 - ut), p[2])))
                }
                (fi(p) === 0 || this.verifyDataLabelOverflow(p)) && (this.placeDataLabels(), kt && at && t(this.points, function (n) {
                    nt = n.connector, f = n.labelPos, (a = n.dataLabel) && a._pos ? (ft = a._attr.visibility, v = a.connX, s = a.connY, ot = bt ? ["M", v + (f[6] === "left" ? 5 : -5), s, "C", v, s, 2 * f[2] - f[4], 2 * f[3] - f[5], f[2], f[3], "L", f[4], f[5]] : ["M", v + (f[6] === "left" ? 5 : -5), s, "L", f[2], f[3], "L", f[4], f[5]], nt ? (nt.animate({d: ot}), nt.attr("visibility", ft)) : n.connector = nt = y.chart.renderer.path(ot).attr({
                        "stroke-width": at,
                        stroke: b.connectorColor || n.color || "#606060",
                        visibility: ft
                    }).add(y.group)) : nt && (n.connector = nt.destroy())
                }))
            }
        },
        verifyDataLabelOverflow: function (n) {
            var i = this.center, f = this.options, e = f.center, u = f = f.minSize || 80, o;
            return e[0] !== null ? u = r(i[2] - r(n[1], n[3]), f) : (u = r(i[2] - n[1] - n[3], f), i[0] += (n[3] - n[1]) / 2), e[1] !== null ? u = r(l(u, i[2] - r(n[0], n[2])), f) : (u = r(l(u, i[2] - n[0] - n[2]), f), i[1] += (n[0] - n[2]) / 2), u < i[2] ? (i[2] = u, this.translate(i), t(this.points, function (n) {
                n.dataLabel && (n.dataLabel._pos = null)
            }), this.drawDataLabels()) : o = !0, o
        },
        placeDataLabels: function () {
            t(this.points, function (n) {
                var n = n.dataLabel, t;
                n && ((t = n._pos) ? (n.attr(n._attr), n[n.moved ? "animate" : "attr"](t), n.moved = !0) : n && n.attr({y: -999}))
            })
        },
        alignDataLabel: ci,
        drawTracker: k.prototype.drawTracker,
        drawLegendSymbol: y.prototype.drawLegendSymbol,
        getSymbol: ci
    }, ut = bt(g, ut), lt.pie = ut, e(Highcharts, {
        Axis: pr,
        Chart: vu,
        Color: ti,
        Legend: au,
        Pointer: lu,
        Point: nr,
        Tick: fr,
        Tooltip: cu,
        Renderer: cr,
        Series: g,
        SVGElement: ei,
        SVGRenderer: vi,
        arrayMin: ir,
        arrayMax: fi,
        charts: di,
        dateFormat: nu,
        format: wi,
        pathAnim: pu,
        getOptions: function () {
            return tt
        },
        hasBidiBug: te,
        isTouchDevice: lf,
        numberFormat: yi,
        seriesTypes: lt,
        setOptions: function (n) {
            return tt = o(tt, n), sf(), tt
        },
        addEvent: b,
        removeEvent: at,
        createElement: et,
        discardElement: sr,
        css: p,
        each: t,
        extend: e,
        map: or,
        merge: o,
        pick: n,
        splat: dt,
        extendClass: bt,
        pInt: h,
        wrap: rf,
        svg: ht,
        canvas: ct,
        vml: !ht && !ct,
        product: "Highcharts",
        version: "3.0.5"
    })
})()