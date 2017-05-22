(function(a, b) {
    function G(a) {
        var b = F[a] = {};
        return p.each(a.split(s),
            function(a, c) {
                b[c] = !0
            }),
            b
    }
    function J(a, c, d) {
        if (d === b && a.nodeType === 1) {
            var e = "data-" + c.replace(I, "-$1").toLowerCase();
            d = a.getAttribute(e);
            if (typeof d == "string") {
                try {
                    d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null: +d + "" === d ? +d: H.test(d) ? p.parseJSON(d) : d
                } catch(f) {}
                p.data(a, c, d)
            } else d = b
        }
        return d
    }
    function K(a) {
        var b;
        for (b in a) {
            if (b === "data" && p.isEmptyObject(a[b])) continue;
            if (b !== "toJSON") return ! 1
        }
        return ! 0
    }
    function ba() {
        return ! 1
    }
    function bb() {
        return ! 0
    }
    function bh(a) {
        return ! a || !a.parentNode || a.parentNode.nodeType === 11
    }
    function bi(a, b) {
        do a = a[b];
        while (a && a.nodeType !== 1);
        return a
    }
    function bj(a, b, c) {
        b = b || 0;
        if (p.isFunction(b)) return p.grep(a,
            function(a, d) {
                var e = !!b.call(a, d, a);
                return e === c
            });
        if (b.nodeType) return p.grep(a,
            function(a, d) {
                return a === b === c
            });
        if (typeof b == "string") {
            var d = p.grep(a,
                function(a) {
                    return a.nodeType === 1
                });
            if (be.test(b)) return p.filter(b, d, !c);
            b = p.filter(b, d)
        }
        return p.grep(a,
            function(a, d) {
                return p.inArray(a, b) >= 0 === c
            })
    }
    function bk(a) {
        var b = bl.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement) while (b.length) c.createElement(b.pop());
        return c
    }
    function bC(a, b) {
        return a.getElementsByTagName(b)[0] || a.appendChild(a.ownerDocument.createElement(b))
    }
    function bD(a, b) {
        if (b.nodeType !== 1 || !p.hasData(a)) return;
        var c, d, e, f = p._data(a),
            g = p._data(b, f),
            h = f.events;
        if (h) {
            delete g.handle,
                g.events = {};
            for (c in h) for (d = 0, e = h[c].length; d < e; d++) p.event.add(b, c, h[c][d])
        }
        g.data && (g.data = p.extend({},
            g.data))
    }
    function bE(a, b) {
        var c;
        if (b.nodeType !== 1) return;
        b.clearAttributes && b.clearAttributes(),
        b.mergeAttributes && b.mergeAttributes(a),
            c = b.nodeName.toLowerCase(),
            c === "object" ? (b.parentNode && (b.outerHTML = a.outerHTML), p.support.html5Clone && a.innerHTML && !p.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : c === "input" && bv.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : c === "option" ? b.selected = a.defaultSelected: c === "input" || c === "textarea" ? b.defaultValue = a.defaultValue: c === "script" && b.text !== a.text && (b.text = a.text),
            b.removeAttribute(p.expando)
    }
    function bF(a) {
        return typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : typeof a.querySelectorAll != "undefined" ? a.querySelectorAll("*") : []
    }
    function bG(a) {
        bv.test(a.type) && (a.defaultChecked = a.checked)
    }
    function bY(a, b) {
        if (b in a) return b;
        var c = b.charAt(0).toUpperCase() + b.slice(1),
            d = b,
            e = bW.length;
        while (e--) {
            b = bW[e] + c;
            if (b in a) return b
        }
        return d
    }
    function bZ(a, b) {
        return a = b || a,
        p.css(a, "display") === "none" || !p.contains(a.ownerDocument, a)
    }
    function b$(a, b) {
        var c, d, e = [],
            f = 0,
            g = a.length;
        for (; f < g; f++) {
            c = a[f];
            if (!c.style) continue;
            e[f] = p._data(c, "olddisplay"),
                b ? (!e[f] && c.style.display === "none" && (c.style.display = ""), c.style.display === "" && bZ(c) && (e[f] = p._data(c, "olddisplay", cc(c.nodeName)))) : (d = bH(c, "display"), !e[f] && d !== "none" && p._data(c, "olddisplay", d))
        }
        for (f = 0; f < g; f++) {
            c = a[f];
            if (!c.style) continue;
            if (!b || c.style.display === "none" || c.style.display === "") c.style.display = b ? e[f] || "": "none"
        }
        return a
    }
    function b_(a, b, c) {
        var d = bP.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }
    function ca(a, b, c, d) {
        var e = c === (d ? "border": "content") ? 4 : b === "width" ? 1 : 0,
            f = 0;
        for (; e < 4; e += 2) c === "margin" && (f += p.css(a, c + bV[e], !0)),
            d ? (c === "content" && (f -= parseFloat(bH(a, "padding" + bV[e])) || 0), c !== "margin" && (f -= parseFloat(bH(a, "border" + bV[e] + "Width")) || 0)) : (f += parseFloat(bH(a, "padding" + bV[e])) || 0, c !== "padding" && (f += parseFloat(bH(a, "border" + bV[e] + "Width")) || 0));
        return f
    }
    function cb(a, b, c) {
        var d = b === "width" ? a.offsetWidth: a.offsetHeight,
            e = !0,
            f = p.support.boxSizing && p.css(a, "boxSizing") === "border-box";
        if (d <= 0 || d == null) {
            d = bH(a, b);
            if (d < 0 || d == null) d = a.style[b];
            if (bQ.test(d)) return d;
            e = f && (p.support.boxSizingReliable || d === a.style[b]),
                d = parseFloat(d) || 0
        }
        return d + ca(a, b, c || (f ? "border": "content"), e) + "px"
    }
    function cc(a) {
        if (bS[a]) return bS[a];
        var b = p("<" + a + ">").appendTo(e.body),
            c = b.css("display");
        b.remove();
        if (c === "none" || c === "") {
            bI = e.body.appendChild(bI || p.extend(e.createElement("iframe"), {
                frameBorder: 0,
                width: 0,
                height: 0
            }));
            if (!bJ || !bI.createElement) bJ = (bI.contentWindow || bI.contentDocument).document,
                bJ.write("<!doctype html><html><body>"),
                bJ.close();
            b = bJ.body.appendChild(bJ.createElement(a)),
                c = bH(b, "display"),
                e.body.removeChild(bI)
        }
        return bS[a] = c,
            c
    }
    function ci(a, b, c, d) {
        var e;
        if (p.isArray(b)) p.each(b,
            function(b, e) {
                c || ce.test(a) ? d(a, e) : ci(a + "[" + (typeof e == "object" ? b: "") + "]", e, c, d)
            });
        else if (!c && p.type(b) === "object") for (e in b) ci(a + "[" + e + "]", b[e], c, d);
        else d(a, b)
    }
    function cz(a) {
        return function(b, c) {
            typeof b != "string" && (c = b, b = "*");
            var d, e, f, g = b.toLowerCase().split(s),
                h = 0,
                i = g.length;
            if (p.isFunction(c)) for (; h < i; h++) d = g[h],
                f = /^\+/.test(d),
            f && (d = d.substr(1) || "*"),
                e = a[d] = a[d] || [],
                e[f ? "unshift": "push"](c)
        }
    }
    function cA(a, c, d, e, f, g) {
        f = f || c.dataTypes[0],
            g = g || {},
            g[f] = !0;
        var h, i = a[f],
            j = 0,
            k = i ? i.length: 0,
            l = a === cv;
        for (; j < k && (l || !h); j++) h = i[j](c, d, e),
        typeof h == "string" && (!l || g[h] ? h = b: (c.dataTypes.unshift(h), h = cA(a, c, d, e, h, g)));
        return (l || !h) && !g["*"] && (h = cA(a, c, d, e, "*", g)),
            h
    }
    function cB(a, c) {
        var d, e, f = p.ajaxSettings.flatOptions || {};
        for (d in c) c[d] !== b && ((f[d] ? a: e || (e = {}))[d] = c[d]);
        e && p.extend(!0, a, e)
    }
    function cC(a, c, d) {
        var e, f, g, h, i = a.contents,
            j = a.dataTypes,
            k = a.responseFields;
        for (f in k) f in d && (c[k[f]] = d[f]);
        while (j[0] === "*") j.shift(),
        e === b && (e = a.mimeType || c.getResponseHeader("content-type"));
        if (e) for (f in i) if (i[f] && i[f].test(e)) {
            j.unshift(f);
            break
        }
        if (j[0] in d) g = j[0];
        else {
            for (f in d) {
                if (!j[0] || a.converters[f + " " + j[0]]) {
                    g = f;
                    break
                }
                h || (h = f)
            }
            g = g || h
        }
        if (g) return g !== j[0] && j.unshift(g),
            d[g]
    }
    function cD(a, b) {
        var c, d, e, f, g = a.dataTypes.slice(),
            h = g[0],
            i = {},
            j = 0;
        a.dataFilter && (b = a.dataFilter(b, a.dataType));
        if (g[1]) for (c in a.converters) i[c.toLowerCase()] = a.converters[c];
        for (; e = g[++j];) if (e !== "*") {
            if (h !== "*" && h !== e) {
                c = i[h + " " + e] || i["* " + e];
                if (!c) for (d in i) {
                    f = d.split(" ");
                    if (f[1] === e) {
                        c = i[h + " " + f[0]] || i["* " + f[0]];
                        if (c) {
                            c === !0 ? c = i[d] : i[d] !== !0 && (e = f[0], g.splice(j--, 0, e));
                            break
                        }
                    }
                }
                if (c !== !0) if (c && a["throws"]) b = c(b);
                else try {
                        b = c(b)
                    } catch(k) {
                        return {
                            state: "parsererror",
                            error: c ? k: "No conversion from " + h + " to " + e
                        }
                    }
            }
            h = e
        }
        return {
            state: "success",
            data: b
        }
    }
    function cL() {
        try {
            return new a.XMLHttpRequest
        } catch(b) {}
    }
    function cM() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch(b) {}
    }
    function cU() {
        return setTimeout(function() {
                cN = b
            },
            0),
            cN = p.now()
    }
    function cV(a, b) {
        p.each(b,
            function(b, c) {
                var d = (cT[b] || []).concat(cT["*"]),
                    e = 0,
                    f = d.length;
                for (; e < f; e++) if (d[e].call(a, b, c)) return
            })
    }
    function cW(a, b, c) {
        var d, e = 0,
            f = 0,
            g = cS.length,
            h = p.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                var b = cN || cU(),
                    c = Math.max(0, j.startTime + j.duration - b),
                    d = 1 - (c / j.duration || 0),
                    e = 0,
                    f = j.tweens.length;
                for (; e < f; e++) j.tweens[e].run(d);
                return h.notifyWith(a, [j, d, c]),
                    d < 1 && f ? c: (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: p.extend({},
                    b),
                opts: p.extend(!0, {
                        specialEasing: {}
                    },
                    c),
                originalProperties: b,
                originalOptions: c,
                startTime: cN || cU(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c, d) {
                    var e = p.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(e),
                        e
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length: 0;
                    for (; c < d; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]),
                        this
                }
            }),
            k = j.props;
        cX(k, j.opts.specialEasing);
        for (; e < g; e++) {
            d = cS[e].call(j, a, k, j.opts);
            if (d) return d
        }
        return cV(j, k),
        p.isFunction(j.opts.start) && j.opts.start.call(a, j),
            p.fx.timer(p.extend(i, {
                anim: j,
                queue: j.opts.queue,
                elem: a
            })),
            j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    function cX(a, b) {
        var c, d, e, f, g;
        for (c in a) {
            d = p.camelCase(c),
                e = b[d],
                f = a[c],
            p.isArray(f) && (e = f[1], f = a[c] = f[0]),
            c !== d && (a[d] = f, delete a[c]),
                g = p.cssHooks[d];
            if (g && "expand" in g) {
                f = g.expand(f),
                    delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
        }
    }
    function cY(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this,
            m = a.style,
            n = {},
            o = [],
            q = a.nodeType && bZ(a);
        c.queue || (j = p._queueHooks(a, "fx"), j.unqueued == null && (j.unqueued = 0, k = j.empty.fire, j.empty.fire = function() {
            j.unqueued || k()
        }), j.unqueued++, l.always(function() {
            l.always(function() {
                j.unqueued--,
                p.queue(a, "fx").length || j.empty.fire()
            })
        })),
        a.nodeType === 1 && ("height" in b || "width" in b) && (c.overflow = [m.overflow, m.overflowX, m.overflowY], p.css(a, "display") === "inline" && p.css(a, "float") === "none" && (!p.support.inlineBlockNeedsLayout || cc(a.nodeName) === "inline" ? m.display = "inline-block": m.zoom = 1)),
        c.overflow && (m.overflow = "hidden", p.support.shrinkWrapBlocks || l.done(function() {
            m.overflow = c.overflow[0],
                m.overflowX = c.overflow[1],
                m.overflowY = c.overflow[2]
        }));
        for (d in b) {
            f = b[d];
            if (cP.exec(f)) {
                delete b[d];
                if (f === (q ? "hide": "show")) continue;
                o.push(d)
            }
        }
        g = o.length;
        if (g) {
            h = p._data(a, "fxshow") || p._data(a, "fxshow", {}),
                q ? p(a).show() : l.done(function() {
                    p(a).hide()
                }),
                l.done(function() {
                    var b;
                    p.removeData(a, "fxshow", !0);
                    for (b in n) p.style(a, b, n[b])
                });
            for (d = 0; d < g; d++) e = o[d],
                i = l.createTween(e, q ? h[e] : 0),
                n[e] = h[e] || p.style(a, e),
            e in h || (h[e] = i.start, q && (i.end = i.start, i.start = e === "width" || e === "height" ? 1 : 0))
        }
    }
    function cZ(a, b, c, d, e) {
        return new cZ.prototype.init(a, b, c, d, e)
    }
    function c$(a, b) {
        var c, d = {
                height: a
            },
            e = 0;
        b = b ? 1 : 0;
        for (; e < 4; e += 2 - b) c = bV[e],
            d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a),
            d
    }
    function da(a) {
        return p.isWindow(a) ? a: a.nodeType === 9 ? a.defaultView || a.parentWindow: !1
    }
    var c, d, e = a.document,
        f = a.location,
        g = a.navigator,
        h = a.jQuery,
        i = a.$,
        j = Array.prototype.push,
        k = Array.prototype.slice,
        l = Array.prototype.indexOf,
        m = Object.prototype.toString,
        n = Object.prototype.hasOwnProperty,
        o = String.prototype.trim,
        p = function(a, b) {
            return new p.fn.init(a, b, c)
        },
        q = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
        r = /\S/,
        s = /\s+/,
        t = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        u = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        w = /^[\],:{}\s]*$/,
        x = /(?:^|:|,)(?:\s*\[)+/g,
        y = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        z = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
        A = /^-ms-/,
        B = /-([\da-z])/gi,
        C = function(a, b) {
            return (b + "").toUpperCase()
        },
        D = function() {
            e.addEventListener ? (e.removeEventListener("DOMContentLoaded", D, !1), p.ready()) : e.readyState === "complete" && (e.detachEvent("onreadystatechange", D), p.ready())
        },
        E = {};
    p.fn = p.prototype = {
        constructor: p,
        init: function(a, c, d) {
            var f, g, h, i;
            if (!a) return this;
            if (a.nodeType) return this.context = this[0] = a,
                this.length = 1,
                this;
            if (typeof a == "string") {
                a.charAt(0) === "<" && a.charAt(a.length - 1) === ">" && a.length >= 3 ? f = [null, a, null] : f = u.exec(a);
                if (f && (f[1] || !c)) {
                    if (f[1]) return c = c instanceof p ? c[0] : c,
                        i = c && c.nodeType ? c.ownerDocument || c: e,
                        a = p.parseHTML(f[1], i, !0),
                    v.test(f[1]) && p.isPlainObject(c) && this.attr.call(a, c, !0),
                        p.merge(this, a);
                    g = e.getElementById(f[2]);
                    if (g && g.parentNode) {
                        if (g.id !== f[2]) return d.find(a);
                        this.length = 1,
                            this[0] = g
                    }
                    return this.context = e,
                        this.selector = a,
                        this
                }
                return ! c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a)
            }
            return p.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), p.makeArray(a, this))
        },
        selector: "",
        jquery: "1.8.2",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return k.call(this)
        },
        get: function(a) {
            return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
        },
        pushStack: function(a, b, c) {
            var d = p.merge(this.constructor(), a);
            return d.prevObject = this,
                d.context = this.context,
                b === "find" ? d.selector = this.selector + (this.selector ? " ": "") + c: b && (d.selector = this.selector + "." + b + "(" + c + ")"),
                d
        },
        each: function(a, b) {
            return p.each(this, a, b)
        },
        ready: function(a) {
            return p.ready.promise().done(a),
                this
        },
        eq: function(a) {
            return a = +a,
                a === -1 ? this.slice(a) : this.slice(a, a + 1)
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        slice: function() {
            return this.pushStack(k.apply(this, arguments), "slice", k.call(arguments).join(","))
        },
        map: function(a) {
            return this.pushStack(p.map(this,
                function(b, c) {
                    return a.call(b, c, b)
                }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: j,
        sort: [].sort,
        splice: [].splice
    },
        p.fn.init.prototype = p.fn,
        p.extend = p.fn.extend = function() {
            var a, c, d, e, f, g, h = arguments[0] || {},
                i = 1,
                j = arguments.length,
                k = !1;
            typeof h == "boolean" && (k = h, h = arguments[1] || {},
                i = 2),
            typeof h != "object" && !p.isFunction(h) && (h = {}),
            j === i && (h = this, --i);
            for (; i < j; i++) if ((a = arguments[i]) != null) for (c in a) {
                d = h[c],
                    e = a[c];
                if (h === e) continue;
                k && e && (p.isPlainObject(e) || (f = p.isArray(e))) ? (f ? (f = !1, g = d && p.isArray(d) ? d: []) : g = d && p.isPlainObject(d) ? d: {},
                    h[c] = p.extend(k, g, e)) : e !== b && (h[c] = e)
            }
            return h
        },
        p.extend({
            noConflict: function(b) {
                return a.$ === p && (a.$ = i),
                b && a.jQuery === p && (a.jQuery = h),
                    p
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(a) {
                a ? p.readyWait++:p.ready(!0)
            },
            ready: function(a) {
                if (a === !0 ? --p.readyWait: p.isReady) return;
                if (!e.body) return setTimeout(p.ready, 1);
                p.isReady = !0;
                if (a !== !0 && --p.readyWait > 0) return;
                d.resolveWith(e, [p]),
                p.fn.trigger && p(e).trigger("ready").off("ready")
            },
            isFunction: function(a) {
                return p.type(a) === "function"
            },
            isArray: Array.isArray ||
            function(a) {
                return p.type(a) === "array"
            },
            isWindow: function(a) {
                return a != null && a == a.window
            },
            isNumeric: function(a) {
                return ! isNaN(parseFloat(a)) && isFinite(a)
            },
            type: function(a) {
                return a == null ? String(a) : E[m.call(a)] || "object"
            },
            isPlainObject: function(a) {
                if (!a || p.type(a) !== "object" || a.nodeType || p.isWindow(a)) return ! 1;
                try {
                    if (a.constructor && !n.call(a, "constructor") && !n.call(a.constructor.prototype, "isPrototypeOf")) return ! 1
                } catch(c) {
                    return ! 1
                }
                var d;
                for (d in a);
                return d === b || n.call(a, d)
            },
            isEmptyObject: function(a) {
                var b;
                for (b in a) return ! 1;
                return ! 0
            },
            error: function(a) {
                throw new Error(a)
            },
            parseHTML: function(a, b, c) {
                var d;
                return ! a || typeof a != "string" ? null: (typeof b == "boolean" && (c = b, b = 0), b = b || e, (d = v.exec(a)) ? [b.createElement(d[1])] : (d = p.buildFragment([a], b, c ? null: []), p.merge([], (d.cacheable ? p.clone(d.fragment) : d.fragment).childNodes)))
            },
            parseJSON: function(b) {
                if (!b || typeof b != "string") return null;
                b = p.trim(b);
                if (a.JSON && a.JSON.parse) return a.JSON.parse(b);
                if (w.test(b.replace(y, "@").replace(z, "]").replace(x, ""))) return (new Function("return " + b))();
                p.error("Invalid JSON: " + b)
            },
            parseXML: function(c) {
                var d, e;
                if (!c || typeof c != "string") return null;
                try {
                    a.DOMParser ? (e = new DOMParser, d = e.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
                } catch(f) {
                    d = b
                }
                return (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && p.error("Invalid XML: " + c),
                    d
            },
            noop: function() {},
            globalEval: function(b) {
                b && r.test(b) && (a.execScript ||
                function(b) {
                    a.eval.call(a, b)
                })(b)
            },
            camelCase: function(a) {
                return a.replace(A, "ms-").replace(B, C)
            },
            nodeName: function(a, b) {
                return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
            },
            each: function(a, c, d) {
                var e, f = 0,
                    g = a.length,
                    h = g === b || p.isFunction(a);
                if (d) {
                    if (h) {
                        for (e in a) if (c.apply(a[e], d) === !1) break
                    } else for (; f < g;) if (c.apply(a[f++], d) === !1) break
                } else if (h) {
                    for (e in a) if (c.call(a[e], e, a[e]) === !1) break
                } else for (; f < g;) if (c.call(a[f], f, a[f++]) === !1) break;
                return a
            },
            trim: o && !o.call("﻿�?") ?
                function(a) {
                    return a == null ? "": o.call(a)
                }: function(a) {
                return a == null ? "": (a + "").replace(t, "")
            },
            makeArray: function(a, b) {
                var c, d = b || [];
                return a != null && (c = p.type(a), a.length == null || c === "string" || c === "function" || c === "regexp" || p.isWindow(a) ? j.call(d, a) : p.merge(d, a)),
                    d
            },
            inArray: function(a, b, c) {
                var d;
                if (b) {
                    if (l) return l.call(b, a, c);
                    d = b.length,
                        c = c ? c < 0 ? Math.max(0, d + c) : c: 0;
                    for (; c < d; c++) if (c in b && b[c] === a) return c
                }
                return - 1
            },
            merge: function(a, c) {
                var d = c.length,
                    e = a.length,
                    f = 0;
                if (typeof d == "number") for (; f < d; f++) a[e++] = c[f];
                else while (c[f] !== b) a[e++] = c[f++];
                return a.length = e,
                    a
            },
            grep: function(a, b, c) {
                var d, e = [],
                    f = 0,
                    g = a.length;
                c = !!c;
                for (; f < g; f++) d = !!b(a[f], f),
                c !== d && e.push(a[f]);
                return e
            },
            map: function(a, c, d) {
                var e, f, g = [],
                    h = 0,
                    i = a.length,
                    j = a instanceof p || i !== b && typeof i == "number" && (i > 0 && a[0] && a[i - 1] || i === 0 || p.isArray(a));
                if (j) for (; h < i; h++) e = c(a[h], h, d),
                e != null && (g[g.length] = e);
                else for (f in a) e = c(a[f], f, d),
                e != null && (g[g.length] = e);
                return g.concat.apply([], g)
            },
            guid: 1,
            proxy: function(a, c) {
                var d, e, f;
                return typeof c == "string" && (d = a[c], c = a, a = d),
                    p.isFunction(a) ? (e = k.call(arguments, 2), f = function() {
                        return a.apply(c, e.concat(k.call(arguments)))
                    },
                        f.guid = a.guid = a.guid || p.guid++, f) : b
            },
            access: function(a, c, d, e, f, g, h) {
                var i, j = d == null,
                    k = 0,
                    l = a.length;
                if (d && typeof d == "object") {
                    for (k in d) p.access(a, c, k, d[k], 1, g, e);
                    f = 1
                } else if (e !== b) {
                    i = h === b && p.isFunction(e),
                    j && (i ? (i = c, c = function(a, b, c) {
                        return i.call(p(a), c)
                    }) : (c.call(a, e), c = null));
                    if (c) for (; k < l; k++) c(a[k], d, i ? e.call(a[k], k, c(a[k], d)) : e, h);
                    f = 1
                }
                return f ? a: j ? c.call(a) : l ? c(a[0], d) : g
            },
            now: function() {
                return (new Date).getTime()
            }
        }),
        p.ready.promise = function(b) {
            if (!d) {
                d = p.Deferred();
                if (e.readyState === "complete") setTimeout(p.ready, 1);
                else if (e.addEventListener) e.addEventListener("DOMContentLoaded", D, !1),
                    a.addEventListener("load", p.ready, !1);
                else {
                    e.attachEvent("onreadystatechange", D),
                        a.attachEvent("onload", p.ready);
                    var c = !1;
                    try {
                        c = a.frameElement == null && e.documentElement
                    } catch(f) {}
                    c && c.doScroll &&
                    function g() {
                        if (!p.isReady) {
                            try {
                                c.doScroll("left")
                            } catch(a) {
                                return setTimeout(g, 50)
                            }
                            p.ready()
                        }
                    } ()
                }
            }
            return d.promise(b)
        },
        p.each("Boolean Number String Function Array Date RegExp Object".split(" "),
            function(a, b) {
                E["[object " + b + "]"] = b.toLowerCase()
            }),
        c = p(e);
    var F = {};
    p.Callbacks = function(a) {
        a = typeof a == "string" ? F[a] || G(a) : p.extend({},
            a);
        var c, d, e, f, g, h, i = [],
            j = !a.once && [],
            k = function(b) {
                c = a.memory && b,
                    d = !0,
                    h = f || 0,
                    f = 0,
                    g = i.length,
                    e = !0;
                for (; i && h < g; h++) if (i[h].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
                    c = !1;
                    break
                }
                e = !1,
                i && (j ? j.length && k(j.shift()) : c ? i = [] : l.disable())
            },
            l = {
                add: function() {
                    if (i) {
                        var b = i.length; (function d(b) {
                            p.each(b,
                                function(b, c) {
                                    var e = p.type(c);
                                    e === "function" && (!a.unique || !l.has(c)) ? i.push(c) : c && c.length && e !== "string" && d(c)
                                })
                        })(arguments),
                            e ? g = i.length: c && (f = b, k(c))
                    }
                    return this
                },
                remove: function() {
                    return i && p.each(arguments,
                        function(a, b) {
                            var c;
                            while ((c = p.inArray(b, i, c)) > -1) i.splice(c, 1),
                            e && (c <= g && g--, c <= h && h--)
                        }),
                        this
                },
                has: function(a) {
                    return p.inArray(a, i) > -1
                },
                empty: function() {
                    return i = [],
                        this
                },
                disable: function() {
                    return i = j = c = b,
                        this
                },
                disabled: function() {
                    return ! i
                },
                lock: function() {
                    return j = b,
                    c || l.disable(),
                        this
                },
                locked: function() {
                    return ! j
                },
                fireWith: function(a, b) {
                    return b = b || [],
                        b = [a, b.slice ? b.slice() : b],
                    i && (!d || j) && (e ? j.push(b) : k(b)),
                        this
                },
                fire: function() {
                    return l.fireWith(this, arguments),
                        this
                },
                fired: function() {
                    return !! d
                }
            };
        return l
    },
        p.extend({
            Deferred: function(a) {
                var b = [["resolve", "done", p.Callbacks("once memory"), "resolved"], ["reject", "fail", p.Callbacks("once memory"), "rejected"], ["notify", "progress", p.Callbacks("memory")]],
                    c = "pending",
                    d = {
                        state: function() {
                            return c
                        },
                        always: function() {
                            return e.done(arguments).fail(arguments),
                                this
                        },
                        then: function() {
                            var a = arguments;
                            return p.Deferred(function(c) {
                                p.each(b,
                                    function(b, d) {
                                        var f = d[0],
                                            g = a[b];
                                        e[d[1]](p.isFunction(g) ?
                                            function() {
                                                var a = g.apply(this, arguments);
                                                a && p.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f + "With"](this === e ? c: this, [a])
                                            }: c[f])
                                    }),
                                    a = null
                            }).promise()
                        },
                        promise: function(a) {
                            return a != null ? p.extend(a, d) : d
                        }
                    },
                    e = {};
                return d.pipe = d.then,
                    p.each(b,
                        function(a, f) {
                            var g = f[2],
                                h = f[3];
                            d[f[1]] = g.add,
                            h && g.add(function() {
                                    c = h
                                },
                                b[a ^ 1][2].disable, b[2][2].lock),
                                e[f[0]] = g.fire,
                                e[f[0] + "With"] = g.fireWith
                        }),
                    d.promise(e),
                a && a.call(e, e),
                    e
            },
            when: function(a) {
                var b = 0,
                    c = k.call(arguments),
                    d = c.length,
                    e = d !== 1 || a && p.isFunction(a.promise) ? d: 0,
                    f = e === 1 ? a: p.Deferred(),
                    g = function(a, b, c) {
                        return function(d) {
                            b[a] = this,
                                c[a] = arguments.length > 1 ? k.call(arguments) : d,
                                c === h ? f.notifyWith(b, c) : --e || f.resolveWith(b, c)
                        }
                    },
                    h,
                    i,
                    j;
                if (d > 1) {
                    h = new Array(d),
                        i = new Array(d),
                        j = new Array(d);
                    for (; b < d; b++) c[b] && p.isFunction(c[b].promise) ? c[b].promise().done(g(b, j, c)).fail(f.reject).progress(g(b, i, h)) : --e
                }
                return e || f.resolveWith(j, c),
                    f.promise()
            }
        }),
        p.support = function() {
            var b, c, d, f, g, h, i, j, k, l, m, n = e.createElement("div");
            n.setAttribute("className", "t"),
                n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
                c = n.getElementsByTagName("*"),
                d = n.getElementsByTagName("a")[0],
                d.style.cssText = "top:1px;float:left;opacity:.5";
            if (!c || !c.length) return {};
            f = e.createElement("select"),
                g = f.appendChild(e.createElement("option")),
                h = n.getElementsByTagName("input")[0],
                b = {
                    leadingWhitespace: n.firstChild.nodeType === 3,
                    tbody: !n.getElementsByTagName("tbody").length,
                    htmlSerialize: !!n.getElementsByTagName("link").length,
                    style: /top/.test(d.getAttribute("style")),
                    hrefNormalized: d.getAttribute("href") === "/a",
                    opacity: /^0.5/.test(d.style.opacity),
                    cssFloat: !!d.style.cssFloat,
                    checkOn: h.value === "on",
                    optSelected: g.selected,
                    getSetAttribute: n.className !== "t",
                    enctype: !!e.createElement("form").enctype,
                    html5Clone: e.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
                    boxModel: e.compatMode === "CSS1Compat",
                    submitBubbles: !0,
                    changeBubbles: !0,
                    focusinBubbles: !1,
                    deleteExpando: !0,
                    noCloneEvent: !0,
                    inlineBlockNeedsLayout: !1,
                    shrinkWrapBlocks: !1,
                    reliableMarginRight: !0,
                    boxSizingReliable: !0,
                    pixelPosition: !1
                },
                h.checked = !0,
                b.noCloneChecked = h.cloneNode(!0).checked,
                f.disabled = !0,
                b.optDisabled = !g.disabled;
            try {
                delete n.test
            } catch(o) {
                b.deleteExpando = !1
            } ! n.addEventListener && n.attachEvent && n.fireEvent && (n.attachEvent("onclick", m = function() {
                b.noCloneEvent = !1
            }), n.cloneNode(!0).fireEvent("onclick"), n.detachEvent("onclick", m)),
                h = e.createElement("input"),
                h.value = "t",
                h.setAttribute("type", "radio"),
                b.radioValue = h.value === "t",
                h.setAttribute("checked", "checked"),
                h.setAttribute("name", "t"),
                n.appendChild(h),
                i = e.createDocumentFragment(),
                i.appendChild(n.lastChild),
                b.checkClone = i.cloneNode(!0).cloneNode(!0).lastChild.checked,
                b.appendChecked = h.checked,
                i.removeChild(h),
                i.appendChild(n);
            if (n.attachEvent) for (k in {
                submit: !0,
                change: !0,
                focusin: !0
            }) j = "on" + k,
                l = j in n,
            l || (n.setAttribute(j, "return;"), l = typeof n[j] == "function"),
                b[k + "Bubbles"] = l;
            return p(function() {
                var c, d, f, g, h = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
                    i = e.getElementsByTagName("body")[0];
                if (!i) return;
                c = e.createElement("div"),
                    c.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",
                    i.insertBefore(c, i.firstChild),
                    d = e.createElement("div"),
                    c.appendChild(d),
                    d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
                    f = d.getElementsByTagName("td"),
                    f[0].style.cssText = "padding:0;margin:0;border:0;display:none",
                    l = f[0].offsetHeight === 0,
                    f[0].style.display = "",
                    f[1].style.display = "none",
                    b.reliableHiddenOffsets = l && f[0].offsetHeight === 0,
                    d.innerHTML = "",
                    d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",
                    b.boxSizing = d.offsetWidth === 4,
                    b.doesNotIncludeMarginInBodyOffset = i.offsetTop !== 1,
                a.getComputedStyle && (b.pixelPosition = (a.getComputedStyle(d, null) || {}).top !== "1%", b.boxSizingReliable = (a.getComputedStyle(d, null) || {
                    width: "4px"
                }).width === "4px", g = e.createElement("div"), g.style.cssText = d.style.cssText = h, g.style.marginRight = g.style.width = "0", d.style.width = "1px", d.appendChild(g), b.reliableMarginRight = !parseFloat((a.getComputedStyle(g, null) || {}).marginRight)),
                typeof d.style.zoom != "undefined" && (d.innerHTML = "", d.style.cssText = h + "width:1px;padding:1px;display:inline;zoom:1", b.inlineBlockNeedsLayout = d.offsetWidth === 3, d.style.display = "block", d.style.overflow = "visible", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", b.shrinkWrapBlocks = d.offsetWidth !== 3, c.style.zoom = 1),
                    i.removeChild(c),
                    c = d = f = g = null
            }),
                i.removeChild(n),
                c = d = f = g = h = i = n = null,
                b
        } ();
    var H = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        I = /([A-Z])/g;
    p.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (p.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(a) {
            return a = a.nodeType ? p.cache[a[p.expando]] : a[p.expando],
            !!a && !K(a)
        },
        data: function(a, c, d, e) {
            if (!p.acceptData(a)) return;
            var f, g, h = p.expando,
                i = typeof c == "string",
                j = a.nodeType,
                k = j ? p.cache: a,
                l = j ? a[h] : a[h] && h;
            if ((!l || !k[l] || !e && !k[l].data) && i && d === b) return;
            l || (j ? a[h] = l = p.deletedIds.pop() || p.guid++:l = h),
            k[l] || (k[l] = {},
            j || (k[l].toJSON = p.noop));
            if (typeof c == "object" || typeof c == "function") e ? k[l] = p.extend(k[l], c) : k[l].data = p.extend(k[l].data, c);
            return f = k[l],
            e || (f.data || (f.data = {}), f = f.data),
            d !== b && (f[p.camelCase(c)] = d),
                i ? (g = f[c], g == null && (g = f[p.camelCase(c)])) : g = f,
                g
        },
        removeData: function(a, b, c) {
            if (!p.acceptData(a)) return;
            var d, e, f, g = a.nodeType,
                h = g ? p.cache: a,
                i = g ? a[p.expando] : p.expando;
            if (!h[i]) return;
            if (b) {
                d = c ? h[i] : h[i].data;
                if (d) {
                    p.isArray(b) || (b in d ? b = [b] : (b = p.camelCase(b), b in d ? b = [b] : b = b.split(" ")));
                    for (e = 0, f = b.length; e < f; e++) delete d[b[e]];
                    if (! (c ? K: p.isEmptyObject)(d)) return
                }
            }
            if (!c) {
                delete h[i].data;
                if (!K(h[i])) return
            }
            g ? p.cleanData([a], !0) : p.support.deleteExpando || h != h.window ? delete h[i] : h[i] = null
        },
        _data: function(a, b, c) {
            return p.data(a, b, c, !0)
        },
        acceptData: function(a) {
            var b = a.nodeName && p.noData[a.nodeName.toLowerCase()];
            return ! b || b !== !0 && a.getAttribute("classid") === b
        }
    }),
        p.fn.extend({
            data: function(a, c) {
                var d, e, f, g, h, i = this[0],
                    j = 0,
                    k = null;
                if (a === b) {
                    if (this.length) {
                        k = p.data(i);
                        if (i.nodeType === 1 && !p._data(i, "parsedAttrs")) {
                            f = i.attributes;
                            for (h = f.length; j < h; j++) g = f[j].name,
                            g.indexOf("data-") || (g = p.camelCase(g.substring(5)), J(i, g, k[g]));
                            p._data(i, "parsedAttrs", !0)
                        }
                    }
                    return k
                }
                return typeof a == "object" ? this.each(function() {
                    p.data(this, a)
                }) : (d = a.split(".", 2), d[1] = d[1] ? "." + d[1] : "", e = d[1] + "!", p.access(this,
                    function(c) {
                        if (c === b) return k = this.triggerHandler("getData" + e, [d[0]]),
                        k === b && i && (k = p.data(i, a), k = J(i, a, k)),
                            k === b && d[1] ? this.data(d[0]) : k;
                        d[1] = c,
                            this.each(function() {
                                var b = p(this);
                                b.triggerHandler("setData" + e, d),
                                    p.data(this, a, c),
                                    b.triggerHandler("changeData" + e, d)
                            })
                    },
                    null, c, arguments.length > 1, null, !1))
            },
            removeData: function(a) {
                return this.each(function() {
                    p.removeData(this, a)
                })
            }
        }),
        p.extend({
            queue: function(a, b, c) {
                var d;
                if (a) return b = (b || "fx") + "queue",
                    d = p._data(a, b),
                c && (!d || p.isArray(c) ? d = p._data(a, b, p.makeArray(c)) : d.push(c)),
                d || []
            },
            dequeue: function(a, b) {
                b = b || "fx";
                var c = p.queue(a, b),
                    d = c.length,
                    e = c.shift(),
                    f = p._queueHooks(a, b),
                    g = function() {
                        p.dequeue(a, b)
                    };
                e === "inprogress" && (e = c.shift(), d--),
                e && (b === "fx" && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)),
                !d && f && f.empty.fire()
            },
            _queueHooks: function(a, b) {
                var c = b + "queueHooks";
                return p._data(a, c) || p._data(a, c, {
                        empty: p.Callbacks("once memory").add(function() {
                            p.removeData(a, b + "queue", !0),
                                p.removeData(a, c, !0)
                        })
                    })
            }
        }),
        p.fn.extend({
            queue: function(a, c) {
                var d = 2;
                return typeof a != "string" && (c = a, a = "fx", d--),
                    arguments.length < d ? p.queue(this[0], a) : c === b ? this: this.each(function() {
                        var b = p.queue(this, a, c);
                        p._queueHooks(this, a),
                        a === "fx" && b[0] !== "inprogress" && p.dequeue(this, a)
                    })
            },
            dequeue: function(a) {
                return this.each(function() {
                    p.dequeue(this, a)
                })
            },
            delay: function(a, b) {
                return a = p.fx ? p.fx.speeds[a] || a: a,
                    b = b || "fx",
                    this.queue(b,
                        function(b, c) {
                            var d = setTimeout(b, a);
                            c.stop = function() {
                                clearTimeout(d)
                            }
                        })
            },
            clearQueue: function(a) {
                return this.queue(a || "fx", [])
            },
            promise: function(a, c) {
                var d, e = 1,
                    f = p.Deferred(),
                    g = this,
                    h = this.length,
                    i = function() {--e || f.resolveWith(g, [g])
                    };
                typeof a != "string" && (c = a, a = b),
                    a = a || "fx";
                while (h--) d = p._data(g[h], a + "queueHooks"),
                d && d.empty && (e++, d.empty.add(i));
                return i(),
                    f.promise(c)
            }
        });
    var L, M, N, O = /[\t\r\n]/g,
        P = /\r/g,
        Q = /^(?:button|input)$/i,
        R = /^(?:button|input|object|select|textarea)$/i,
        S = /^a(?:rea|)$/i,
        T = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        U = p.support.getSetAttribute;
    p.fn.extend({
        attr: function(a, b) {
            return p.access(this, p.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                p.removeAttr(this, a)
            })
        },
        prop: function(a, b) {
            return p.access(this, p.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = p.propFix[a] || a,
                this.each(function() {
                    try {
                        this[a] = b,
                            delete this[a]
                    } catch(c) {}
                })
        },
        addClass: function(a) {
            var b, c, d, e, f, g, h;
            if (p.isFunction(a)) return this.each(function(b) {
                p(this).addClass(a.call(this, b, this.className))
            });
            if (a && typeof a == "string") {
                b = a.split(s);
                for (c = 0, d = this.length; c < d; c++) {
                    e = this[c];
                    if (e.nodeType === 1) if (!e.className && b.length === 1) e.className = a;
                    else {
                        f = " " + e.className + " ";
                        for (g = 0, h = b.length; g < h; g++) f.indexOf(" " + b[g] + " ") < 0 && (f += b[g] + " ");
                        e.className = p.trim(f)
                    }
                }
            }
            return this
        },
        removeClass: function(a) {
            var c, d, e, f, g, h, i;
            if (p.isFunction(a)) return this.each(function(b) {
                p(this).removeClass(a.call(this, b, this.className))
            });
            if (a && typeof a == "string" || a === b) {
                c = (a || "").split(s);
                for (h = 0, i = this.length; h < i; h++) {
                    e = this[h];
                    if (e.nodeType === 1 && e.className) {
                        d = (" " + e.className + " ").replace(O, " ");
                        for (f = 0, g = c.length; f < g; f++) while (d.indexOf(" " + c[f] + " ") >= 0) d = d.replace(" " + c[f] + " ", " ");
                        e.className = a ? p.trim(d) : ""
                    }
                }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a,
                d = typeof b == "boolean";
            return p.isFunction(a) ? this.each(function(c) {
                p(this).toggleClass(a.call(this, c, this.className, b), b)
            }) : this.each(function() {
                if (c === "string") {
                    var e, f = 0,
                        g = p(this),
                        h = b,
                        i = a.split(s);
                    while (e = i[f++]) h = d ? h: !g.hasClass(e),
                        g[h ? "addClass": "removeClass"](e)
                } else if (c === "undefined" || c === "boolean") this.className && p._data(this, "__className__", this.className),
                    this.className = this.className || a === !1 ? "": p._data(this, "__className__") || ""
            })
        },
        hasClass: function(a) {
            var b = " " + a + " ",
                c = 0,
                d = this.length;
            for (; c < d; c++) if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(O, " ").indexOf(b) >= 0) return ! 0;
            return ! 1
        },
        val: function(a) {
            var c, d, e, f = this[0];
            if (!arguments.length) {
                if (f) return c = p.valHooks[f.type] || p.valHooks[f.nodeName.toLowerCase()],
                    c && "get" in c && (d = c.get(f, "value")) !== b ? d: (d = f.value, typeof d == "string" ? d.replace(P, "") : d == null ? "": d);
                return
            }
            return e = p.isFunction(a),
                this.each(function(d) {
                    var f, g = p(this);
                    if (this.nodeType !== 1) return;
                    e ? f = a.call(this, d, g.val()) : f = a,
                        f == null ? f = "": typeof f == "number" ? f += "": p.isArray(f) && (f = p.map(f,
                            function(a) {
                                return a == null ? "": a + ""
                            })),
                        c = p.valHooks[this.type] || p.valHooks[this.nodeName.toLowerCase()];
                    if (!c || !("set" in c) || c.set(this, f, "value") === b) this.value = f
                })
        }
    }),
        p.extend({
            valHooks: {
                option: {
                    get: function(a) {
                        var b = a.attributes.value;
                        return ! b || b.specified ? a.value: a.text
                    }
                },
                select: {
                    get: function(a) {
                        var b, c, d, e, f = a.selectedIndex,
                            g = [],
                            h = a.options,
                            i = a.type === "select-one";
                        if (f < 0) return null;
                        c = i ? f: 0,
                            d = i ? f + 1 : h.length;
                        for (; c < d; c++) {
                            e = h[c];
                            if (e.selected && (p.support.optDisabled ? !e.disabled: e.getAttribute("disabled") === null) && (!e.parentNode.disabled || !p.nodeName(e.parentNode, "optgroup"))) {
                                b = p(e).val();
                                if (i) return b;
                                g.push(b)
                            }
                        }
                        return i && !g.length && h.length ? p(h[f]).val() : g
                    },
                    set: function(a, b) {
                        var c = p.makeArray(b);
                        return p(a).find("option").each(function() {
                            this.selected = p.inArray(p(this).val(), c) >= 0
                        }),
                        c.length || (a.selectedIndex = -1),
                            c
                    }
                }
            },
            attrFn: {},
            attr: function(a, c, d, e) {
                var f, g, h, i = a.nodeType;
                if (!a || i === 3 || i === 8 || i === 2) return;
                if (e && p.isFunction(p.fn[c])) return p(a)[c](d);
                if (typeof a.getAttribute == "undefined") return p.prop(a, c, d);
                h = i !== 1 || !p.isXMLDoc(a),
                h && (c = c.toLowerCase(), g = p.attrHooks[c] || (T.test(c) ? M: L));
                if (d !== b) {
                    if (d === null) {
                        p.removeAttr(a, c);
                        return
                    }
                    return g && "set" in g && h && (f = g.set(a, d, c)) !== b ? f: (a.setAttribute(c, d + ""), d)
                }
                return g && "get" in g && h && (f = g.get(a, c)) !== null ? f: (f = a.getAttribute(c), f === null ? b: f)
            },
            removeAttr: function(a, b) {
                var c, d, e, f, g = 0;
                if (b && a.nodeType === 1) {
                    d = b.split(s);
                    for (; g < d.length; g++) e = d[g],
                    e && (c = p.propFix[e] || e, f = T.test(e), f || p.attr(a, e, ""), a.removeAttribute(U ? e: c), f && c in a && (a[c] = !1))
                }
            },
            attrHooks: {
                type: {
                    set: function(a, b) {
                        if (Q.test(a.nodeName) && a.parentNode) p.error("type property can't be changed");
                        else if (!p.support.radioValue && b === "radio" && p.nodeName(a, "input")) {
                            var c = a.value;
                            return a.setAttribute("type", b),
                            c && (a.value = c),
                                b
                        }
                    }
                },
                value: {
                    get: function(a, b) {
                        return L && p.nodeName(a, "button") ? L.get(a, b) : b in a ? a.value: null
                    },
                    set: function(a, b, c) {
                        if (L && p.nodeName(a, "button")) return L.set(a, b, c);
                        a.value = b
                    }
                }
            },
            propFix: {
                tabindex: "tabIndex",
                readonly: "readOnly",
                "for": "htmlFor",
                "class": "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            },
            prop: function(a, c, d) {
                var e, f, g, h = a.nodeType;
                if (!a || h === 3 || h === 8 || h === 2) return;
                return g = h !== 1 || !p.isXMLDoc(a),
                g && (c = p.propFix[c] || c, f = p.propHooks[c]),
                    d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e: a[c] = d: f && "get" in f && (e = f.get(a, c)) !== null ? e: a[c]
            },
            propHooks: {
                tabIndex: {
                    get: function(a) {
                        var c = a.getAttributeNode("tabindex");
                        return c && c.specified ? parseInt(c.value, 10) : R.test(a.nodeName) || S.test(a.nodeName) && a.href ? 0 : b
                    }
                }
            }
        }),
        M = {
            get: function(a, c) {
                var d, e = p.prop(a, c);
                return e === !0 || typeof e != "boolean" && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
            },
            set: function(a, b, c) {
                var d;
                return b === !1 ? p.removeAttr(a, c) : (d = p.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase())),
                    c
            }
        },
    U || (N = {
        name: !0,
        id: !0,
        coords: !0
    },
        L = p.valHooks.button = {
            get: function(a, c) {
                var d;
                return d = a.getAttributeNode(c),
                    d && (N[c] ? d.value !== "": d.specified) ? d.value: b
            },
            set: function(a, b, c) {
                var d = a.getAttributeNode(c);
                return d || (d = e.createAttribute(c), a.setAttributeNode(d)),
                    d.value = b + ""
            }
        },
        p.each(["width", "height"],
            function(a, b) {
                p.attrHooks[b] = p.extend(p.attrHooks[b], {
                    set: function(a, c) {
                        if (c === "") return a.setAttribute(b, "auto"),
                            c
                    }
                })
            }), p.attrHooks.contenteditable = {
        get: L.get,
        set: function(a, b, c) {
            b === "" && (b = "false"),
                L.set(a, b, c)
        }
    }),
    p.support.hrefNormalized || p.each(["href", "src", "width", "height"],
        function(a, c) {
            p.attrHooks[c] = p.extend(p.attrHooks[c], {
                get: function(a) {
                    var d = a.getAttribute(c, 2);
                    return d === null ? b: d
                }
            })
        }),
    p.support.style || (p.attrHooks.style = {
        get: function(a) {
            return a.style.cssText.toLowerCase() || b
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    }),
    p.support.optSelected || (p.propHooks.selected = p.extend(p.propHooks.selected, {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex),
                null
        }
    })),
    p.support.enctype || (p.propFix.enctype = "encoding"),
    p.support.checkOn || p.each(["radio", "checkbox"],
        function() {
            p.valHooks[this] = {
                get: function(a) {
                    return a.getAttribute("value") === null ? "on": a.value
                }
            }
        }),
        p.each(["radio", "checkbox"],
            function() {
                p.valHooks[this] = p.extend(p.valHooks[this], {
                    set: function(a, b) {
                        if (p.isArray(b)) return a.checked = p.inArray(p(a).val(), b) >= 0
                    }
                })
            });
    var V = /^(?:textarea|input|select)$/i,
        W = /^([^\.]*|)(?:\.(.+)|)$/,
        X = /(?:^|\s)hover(\.\S+|)\b/,
        Y = /^key/,
        Z = /^(?:mouse|contextmenu)|click/,
        $ = /^(?:focusinfocus|focusoutblur)$/,
        _ = function(a) {
            return p.event.special.hover ? a: a.replace(X, "mouseenter$1 mouseleave$1")
        };
    p.event = {
        add: function(a, c, d, e, f) {
            var g, h, i, j, k, l, m, n, o, q, r;
            if (a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(g = p._data(a))) return;
            d.handler && (o = d, d = o.handler, f = o.selector),
            d.guid || (d.guid = p.guid++),
                i = g.events,
            i || (g.events = i = {}),
                h = g.handle,
            h || (g.handle = h = function(a) {
                return typeof p != "undefined" && (!a || p.event.triggered !== a.type) ? p.event.dispatch.apply(h.elem, arguments) : b
            },
                h.elem = a),
                c = p.trim(_(c)).split(" ");
            for (j = 0; j < c.length; j++) {
                k = W.exec(c[j]) || [],
                    l = k[1],
                    m = (k[2] || "").split(".").sort(),
                    r = p.event.special[l] || {},
                    l = (f ? r.delegateType: r.bindType) || l,
                    r = p.event.special[l] || {},
                    n = p.extend({
                            type: l,
                            origType: k[1],
                            data: e,
                            handler: d,
                            guid: d.guid,
                            selector: f,
                            needsContext: f && p.expr.match.needsContext.test(f),
                            namespace: m.join(".")
                        },
                        o),
                    q = i[l];
                if (!q) {
                    q = i[l] = [],
                        q.delegateCount = 0;
                    if (!r.setup || r.setup.call(a, e, m, h) === !1) a.addEventListener ? a.addEventListener(l, h, !1) : a.attachEvent && a.attachEvent("on" + l, h)
                }
                r.add && (r.add.call(a, n), n.handler.guid || (n.handler.guid = d.guid)),
                    f ? q.splice(q.delegateCount++, 0, n) : q.push(n),
                    p.event.global[l] = !0
            }
            a = null
        },
        global: {},
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, q, r = p.hasData(a) && p._data(a);
            if (!r || !(m = r.events)) return;
            b = p.trim(_(b || "")).split(" ");
            for (f = 0; f < b.length; f++) {
                g = W.exec(b[f]) || [],
                    h = i = g[1],
                    j = g[2];
                if (!h) {
                    for (h in m) p.event.remove(a, h + b[f], c, d, !0);
                    continue
                }
                n = p.event.special[h] || {},
                    h = (d ? n.delegateType: n.bindType) || h,
                    o = m[h] || [],
                    k = o.length,
                    j = j ? new RegExp("(^|\\.)" + j.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                for (l = 0; l < o.length; l++) q = o[l],
                (e || i === q.origType) && (!c || c.guid === q.guid) && (!j || j.test(q.namespace)) && (!d || d === q.selector || d === "**" && q.selector) && (o.splice(l--, 1), q.selector && o.delegateCount--, n.remove && n.remove.call(a, q));
                o.length === 0 && k !== o.length && ((!n.teardown || n.teardown.call(a, j, r.handle) === !1) && p.removeEvent(a, h, r.handle), delete m[h])
            }
            p.isEmptyObject(m) && (delete r.handle, p.removeData(a, "events", !0))
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(c, d, f, g) {
            if (!f || f.nodeType !== 3 && f.nodeType !== 8) {
                var h, i, j, k, l, m, n, o, q, r, s = c.type || c,
                    t = [];
                if ($.test(s + p.event.triggered)) return;
                s.indexOf("!") >= 0 && (s = s.slice(0, -1), i = !0),
                s.indexOf(".") >= 0 && (t = s.split("."), s = t.shift(), t.sort());
                if ((!f || p.event.customEvent[s]) && !p.event.global[s]) return;
                c = typeof c == "object" ? c[p.expando] ? c: new p.Event(s, c) : new p.Event(s),
                    c.type = s,
                    c.isTrigger = !0,
                    c.exclusive = i,
                    c.namespace = t.join("."),
                    c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + t.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                    m = s.indexOf(":") < 0 ? "on" + s: "";
                if (!f) {
                    h = p.cache;
                    for (j in h) h[j].events && h[j].events[s] && p.event.trigger(c, d, h[j].handle.elem, !0);
                    return
                }
                c.result = b,
                c.target || (c.target = f),
                    d = d != null ? p.makeArray(d) : [],
                    d.unshift(c),
                    n = p.event.special[s] || {};
                if (n.trigger && n.trigger.apply(f, d) === !1) return;
                q = [[f, n.bindType || s]];
                if (!g && !n.noBubble && !p.isWindow(f)) {
                    r = n.delegateType || s,
                        k = $.test(r + s) ? f: f.parentNode;
                    for (l = f; k; k = k.parentNode) q.push([k, r]),
                        l = k;
                    l === (f.ownerDocument || e) && q.push([l.defaultView || l.parentWindow || a, r])
                }
                for (j = 0; j < q.length && !c.isPropagationStopped(); j++) k = q[j][0],
                    c.type = q[j][1],
                    o = (p._data(k, "events") || {})[c.type] && p._data(k, "handle"),
                o && o.apply(k, d),
                    o = m && k[m],
                o && p.acceptData(k) && o.apply && o.apply(k, d) === !1 && c.preventDefault();
                return c.type = s,
                !g && !c.isDefaultPrevented() && (!n._default || n._default.apply(f.ownerDocument, d) === !1) && (s !== "click" || !p.nodeName(f, "a")) && p.acceptData(f) && m && f[s] && (s !== "focus" && s !== "blur" || c.target.offsetWidth !== 0) && !p.isWindow(f) && (l = f[m], l && (f[m] = null), p.event.triggered = s, f[s](), p.event.triggered = b, l && (f[m] = l)),
                    c.result
            }
            return
        },
        dispatch: function(c) {
            c = p.event.fix(c || a.event);
            var d, e, f, g, h, i, j, l, m, n, o = (p._data(this, "events") || {})[c.type] || [],
                q = o.delegateCount,
                r = k.call(arguments),
                s = !c.exclusive && !c.namespace,
                t = p.event.special[c.type] || {},
                u = [];
            r[0] = c,
                c.delegateTarget = this;
            if (t.preDispatch && t.preDispatch.call(this, c) === !1) return;
            if (q && (!c.button || c.type !== "click")) for (f = c.target; f != this; f = f.parentNode || this) if (f.disabled !== !0 || c.type !== "click") {
                h = {},
                    j = [];
                for (d = 0; d < q; d++) l = o[d],
                    m = l.selector,
                h[m] === b && (h[m] = l.needsContext ? p(m, this).index(f) >= 0 : p.find(m, this, null, [f]).length),
                h[m] && j.push(l);
                j.length && u.push({
                    elem: f,
                    matches: j
                })
            }
            o.length > q && u.push({
                elem: this,
                matches: o.slice(q)
            });
            for (d = 0; d < u.length && !c.isPropagationStopped(); d++) {
                i = u[d],
                    c.currentTarget = i.elem;
                for (e = 0; e < i.matches.length && !c.isImmediatePropagationStopped(); e++) {
                    l = i.matches[e];
                    if (s || !c.namespace && !l.namespace || c.namespace_re && c.namespace_re.test(l.namespace)) c.data = l.data,
                        c.handleObj = l,
                        g = ((p.event.special[l.origType] || {}).handle || l.handler).apply(i.elem, r),
                    g !== b && (c.result = g, g === !1 && (c.preventDefault(), c.stopPropagation()))
                }
            }
            return t.postDispatch && t.postDispatch.call(this, c),
                c.result
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return a.which == null && (a.which = b.charCode != null ? b.charCode: b.keyCode),
                    a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, c) {
                var d, f, g, h = c.button,
                    i = c.fromElement;
                return a.pageX == null && c.clientX != null && (d = a.target.ownerDocument || e, f = d.documentElement, g = d.body, a.pageX = c.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0), a.pageY = c.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)),
                !a.relatedTarget && i && (a.relatedTarget = i === a.target ? c.toElement: i),
                !a.which && h !== b && (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0),
                    a
            }
        },
        fix: function(a) {
            if (a[p.expando]) return a;
            var b, c, d = a,
                f = p.event.fixHooks[a.type] || {},
                g = f.props ? this.props.concat(f.props) : this.props;
            a = p.Event(d);
            for (b = g.length; b;) c = g[--b],
                a[c] = d[c];
            return a.target || (a.target = d.srcElement || e),
            a.target.nodeType === 3 && (a.target = a.target.parentNode),
                a.metaKey = !!a.metaKey,
                f.filter ? f.filter(a, d) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function(a, b, c) {
                    p.isWindow(this) && (this.onbeforeunload = c)
                },
                teardown: function(a, b) {
                    this.onbeforeunload === b && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = p.extend(new p.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? p.event.trigger(e, null, b) : p.event.dispatch.call(b, e),
            e.isDefaultPrevented() && c.preventDefault()
        }
    },
        p.event.handle = p.event.dispatch,
        p.removeEvent = e.removeEventListener ?
            function(a, b, c) {
                a.removeEventListener && a.removeEventListener(b, c, !1)
            }: function(a, b, c) {
            var d = "on" + b;
            a.detachEvent && (typeof a[d] == "undefined" && (a[d] = null), a.detachEvent(d, c))
        },
        p.Event = function(a, b) {
            if (this instanceof p.Event) a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? bb: ba) : this.type = a,
            b && p.extend(this, b),
                this.timeStamp = a && a.timeStamp || p.now(),
                this[p.expando] = !0;
            else return new p.Event(a, b)
        },
        p.Event.prototype = {
            preventDefault: function() {
                this.isDefaultPrevented = bb;
                var a = this.originalEvent;
                if (!a) return;
                a.preventDefault ? a.preventDefault() : a.returnValue = !1
            },
            stopPropagation: function() {
                this.isPropagationStopped = bb;
                var a = this.originalEvent;
                if (!a) return;
                a.stopPropagation && a.stopPropagation(),
                    a.cancelBubble = !0
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = bb,
                    this.stopPropagation()
            },
            isDefaultPrevented: ba,
            isPropagationStopped: ba,
            isImmediatePropagationStopped: ba
        },
        p.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            },
            function(a, b) {
                p.event.special[a] = {
                    delegateType: b,
                    bindType: b,
                    handle: function(a) {
                        var c, d = this,
                            e = a.relatedTarget,
                            f = a.handleObj,
                            g = f.selector;
                        if (!e || e !== d && !p.contains(d, e)) a.type = f.origType,
                            c = f.handler.apply(this, arguments),
                            a.type = b;
                        return c
                    }
                }
            }),
    p.support.submitBubbles || (p.event.special.submit = {
        setup: function() {
            if (p.nodeName(this, "form")) return ! 1;
            p.event.add(this, "click._submit keypress._submit",
                function(a) {
                    var c = a.target,
                        d = p.nodeName(c, "input") || p.nodeName(c, "button") ? c.form: b;
                    d && !p._data(d, "_submit_attached") && (p.event.add(d, "submit._submit",
                        function(a) {
                            a._submit_bubble = !0
                        }), p._data(d, "_submit_attached", !0))
                })
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && p.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function() {
            if (p.nodeName(this, "form")) return ! 1;
            p.event.remove(this, "._submit")
        }
    }),
    p.support.changeBubbles || (p.event.special.change = {
        setup: function() {
            if (V.test(this.nodeName)) {
                if (this.type === "checkbox" || this.type === "radio") p.event.add(this, "propertychange._change",
                    function(a) {
                        a.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                    }),
                    p.event.add(this, "click._change",
                        function(a) {
                            this._just_changed && !a.isTrigger && (this._just_changed = !1),
                                p.event.simulate("change", this, a, !0)
                        });
                return ! 1
            }
            p.event.add(this, "beforeactivate._change",
                function(a) {
                    var b = a.target;
                    V.test(b.nodeName) && !p._data(b, "_change_attached") && (p.event.add(b, "change._change",
                        function(a) {
                            this.parentNode && !a.isSimulated && !a.isTrigger && p.event.simulate("change", this.parentNode, a, !0)
                        }), p._data(b, "_change_attached", !0))
                })
        },
        handle: function(a) {
            var b = a.target;
            if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox") return a.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return p.event.remove(this, "._change"),
                !V.test(this.nodeName)
        }
    }),
    p.support.focusinBubbles || p.each({
            focus: "focusin",
            blur: "focusout"
        },
        function(a, b) {
            var c = 0,
                d = function(a) {
                    p.event.simulate(b, a.target, p.event.fix(a), !0)
                };
            p.event.special[b] = {
                setup: function() {
                    c++===0 && e.addEventListener(a, d, !0)
                },
                teardown: function() {--c === 0 && e.removeEventListener(a, d, !0)
                }
            }
        }),
        p.fn.extend({
            on: function(a, c, d, e, f) {
                var g, h;
                if (typeof a == "object") {
                    typeof c != "string" && (d = d || c, c = b);
                    for (h in a) this.on(h, c, d, a[h], f);
                    return this
                }
                d == null && e == null ? (e = c, d = c = b) : e == null && (typeof c == "string" ? (e = d, d = b) : (e = d, d = c, c = b));
                if (e === !1) e = ba;
                else if (!e) return this;
                return f === 1 && (g = e, e = function(a) {
                    return p().off(a),
                        g.apply(this, arguments)
                },
                    e.guid = g.guid || (g.guid = p.guid++)),
                    this.each(function() {
                        p.event.add(this, a, e, d, c)
                    })
            },
            one: function(a, b, c, d) {
                return this.on(a, b, c, d, 1)
            },
            off: function(a, c, d) {
                var e, f;
                if (a && a.preventDefault && a.handleObj) return e = a.handleObj,
                    p(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace: e.origType, e.selector, e.handler),
                    this;
                if (typeof a == "object") {
                    for (f in a) this.off(f, c, a[f]);
                    return this
                }
                if (c === !1 || typeof c == "function") d = c,
                    c = b;
                return d === !1 && (d = ba),
                    this.each(function() {
                        p.event.remove(this, a, d, c)
                    })
            },
            bind: function(a, b, c) {
                return this.on(a, null, b, c)
            },
            unbind: function(a, b) {
                return this.off(a, null, b)
            },
            live: function(a, b, c) {
                return p(this.context).on(a, this.selector, b, c),
                    this
            },
            die: function(a, b) {
                return p(this.context).off(a, this.selector || "**", b),
                    this
            },
            delegate: function(a, b, c, d) {
                return this.on(b, a, c, d)
            },
            undelegate: function(a, b, c) {
                return arguments.length === 1 ? this.off(a, "**") : this.off(b, a || "**", c)
            },
            trigger: function(a, b) {
                return this.each(function() {
                    p.event.trigger(a, b, this)
                })
            },
            triggerHandler: function(a, b) {
                if (this[0]) return p.event.trigger(a, b, this[0], !0)
            },
            toggle: function(a) {
                var b = arguments,
                    c = a.guid || p.guid++,
                    d = 0,
                    e = function(c) {
                        var e = (p._data(this, "lastToggle" + a.guid) || 0) % d;
                        return p._data(this, "lastToggle" + a.guid, e + 1),
                            c.preventDefault(),
                        b[e].apply(this, arguments) || !1
                    };
                e.guid = c;
                while (d < b.length) b[d++].guid = c;
                return this.click(e)
            },
            hover: function(a, b) {
                return this.mouseenter(a).mouseleave(b || a)
            }
        }),
        p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
            function(a, b) {
                p.fn[b] = function(a, c) {
                    return c == null && (c = a, a = null),
                        arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
                },
                Y.test(b) && (p.event.fixHooks[b] = p.event.keyHooks),
                Z.test(b) && (p.event.fixHooks[b] = p.event.mouseHooks)
            }),
        function(a, b) {
            function bc(a, b, c, d) {
                c = c || [],
                    b = b || r;
                var e, f, i, j, k = b.nodeType;
                if (!a || typeof a != "string") return c;
                if (k !== 1 && k !== 9) return [];
                i = g(b);
                if (!i && !d) if (e = P.exec(a)) if (j = e[1]) {
                    if (k === 9) {
                        f = b.getElementById(j);
                        if (!f || !f.parentNode) return c;
                        if (f.id === j) return c.push(f),
                            c
                    } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(j)) && h(b, f) && f.id === j) return c.push(f),
                        c
                } else {
                    if (e[2]) return w.apply(c, x.call(b.getElementsByTagName(a), 0)),
                        c;
                    if ((j = e[3]) && _ && b.getElementsByClassName) return w.apply(c, x.call(b.getElementsByClassName(j), 0)),
                        c
                }
                return bp(a.replace(L, "$1"), b, c, d, i)
            }
            function bd(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return c === "input" && b.type === a
                }
            }
            function be(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return (c === "input" || c === "button") && b.type === a
                }
            }
            function bf(a) {
                return z(function(b) {
                    return b = +b,
                        z(function(c, d) {
                            var e, f = a([], c.length, b),
                                g = f.length;
                            while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                        })
                })
            }
            function bg(a, b, c) {
                if (a === b) return c;
                var d = a.nextSibling;
                while (d) {
                    if (d === b) return - 1;
                    d = d.nextSibling
                }
                return 1
            }
            function bh(a, b) {
                var c, d, f, g, h, i, j, k = C[o][a];
                if (k) return b ? 0 : k.slice(0);
                h = a,
                    i = [],
                    j = e.preFilter;
                while (h) {
                    if (!c || (d = M.exec(h))) d && (h = h.slice(d[0].length)),
                        i.push(f = []);
                    c = !1;
                    if (d = N.exec(h)) f.push(c = new q(d.shift())),
                        h = h.slice(c.length),
                        c.type = d[0].replace(L, " ");
                    for (g in e.filter)(d = W[g].exec(h)) && (!j[g] || (d = j[g](d, r, !0))) && (f.push(c = new q(d.shift())), h = h.slice(c.length), c.type = g, c.matches = d);
                    if (!c) break
                }
                return b ? h.length: h ? bc.error(a) : C(a, i).slice(0)
            }
            function bi(a, b, d) {
                var e = b.dir,
                    f = d && b.dir === "parentNode",
                    g = u++;
                return b.first ?
                    function(b, c, d) {
                        while (b = b[e]) if (f || b.nodeType === 1) return a(b, c, d)
                    }: function(b, d, h) {
                    if (!h) {
                        var i, j = t + " " + g + " ",
                            k = j + c;
                        while (b = b[e]) if (f || b.nodeType === 1) {
                            if ((i = b[o]) === k) return b.sizset;
                            if (typeof i == "string" && i.indexOf(j) === 0) {
                                if (b.sizset) return b
                            } else {
                                b[o] = k;
                                if (a(b, d, h)) return b.sizset = !0,
                                    b;
                                b.sizset = !1
                            }
                        }
                    } else while (b = b[e]) if (f || b.nodeType === 1) if (a(b, d, h)) return b
                }
            }
            function bj(a) {
                return a.length > 1 ?
                    function(b, c, d) {
                        var e = a.length;
                        while (e--) if (!a[e](b, c, d)) return ! 1;
                        return ! 0
                    }: a[0]
            }
            function bk(a, b, c, d, e) {
                var f, g = [],
                    h = 0,
                    i = a.length,
                    j = b != null;
                for (; h < i; h++) if (f = a[h]) if (!c || c(f, d, e)) g.push(f),
                j && b.push(h);
                return g
            }
            function bl(a, b, c, d, e, f) {
                return d && !d[o] && (d = bl(d)),
                e && !e[o] && (e = bl(e, f)),
                    z(function(f, g, h, i) {
                        if (f && e) return;
                        var j, k, l, m = [],
                            n = [],
                            o = g.length,
                            p = f || bo(b || "*", h.nodeType ? [h] : h, [], f),
                            q = a && (f || !b) ? bk(p, m, a, h, i) : p,
                            r = c ? e || (f ? a: o || d) ? [] : g: q;
                        c && c(q, r, h, i);
                        if (d) {
                            l = bk(r, n),
                                d(l, [], h, i),
                                j = l.length;
                            while (j--) if (k = l[j]) r[n[j]] = !(q[n[j]] = k)
                        }
                        if (f) {
                            j = a && r.length;
                            while (j--) if (k = r[j]) f[m[j]] = !(g[m[j]] = k)
                        } else r = bk(r === g ? r.splice(o, r.length) : r),
                            e ? e(null, g, r, i) : w.apply(g, r)
                    })
            }
            function bm(a) {
                var b, c, d, f = a.length,
                    g = e.relative[a[0].type],
                    h = g || e.relative[" "],
                    i = g ? 1 : 0,
                    j = bi(function(a) {
                            return a === b
                        },
                        h, !0),
                    k = bi(function(a) {
                            return y.call(b, a) > -1
                        },
                        h, !0),
                    m = [function(a, c, d) {
                        return ! g && (d || c !== l) || ((b = c).nodeType ? j(a, c, d) : k(a, c, d))
                    }];
                for (; i < f; i++) if (c = e.relative[a[i].type]) m = [bi(bj(m), c)];
                else {
                    c = e.filter[a[i].type].apply(null, a[i].matches);
                    if (c[o]) {
                        d = ++i;
                        for (; d < f; d++) if (e.relative[a[d].type]) break;
                        return bl(i > 1 && bj(m), i > 1 && a.slice(0, i - 1).join("").replace(L, "$1"), c, i < d && bm(a.slice(i, d)), d < f && bm(a = a.slice(d)), d < f && a.join(""))
                    }
                    m.push(c)
                }
                return bj(m)
            }
            function bn(a, b) {
                var d = b.length > 0,
                    f = a.length > 0,
                    g = function(h, i, j, k, m) {
                        var n, o, p, q = [],
                            s = 0,
                            u = "0",
                            x = h && [],
                            y = m != null,
                            z = l,
                            A = h || f && e.find.TAG("*", m && i.parentNode || i),
                            B = t += z == null ? 1 : Math.E;
                        y && (l = i !== r && i, c = g.el);
                        for (; (n = A[u]) != null; u++) {
                            if (f && n) {
                                for (o = 0; p = a[o]; o++) if (p(n, i, j)) {
                                    k.push(n);
                                    break
                                }
                                y && (t = B, c = ++g.el)
                            }
                            d && ((n = !p && n) && s--, h && x.push(n))
                        }
                        s += u;
                        if (d && u !== s) {
                            for (o = 0; p = b[o]; o++) p(x, q, i, j);
                            if (h) {
                                if (s > 0) while (u--) ! x[u] && !q[u] && (q[u] = v.call(k));
                                q = bk(q)
                            }
                            w.apply(k, q),
                            y && !h && q.length > 0 && s + b.length > 1 && bc.uniqueSort(k)
                        }
                        return y && (t = B, l = z),
                            x
                    };
                return g.el = 0,
                    d ? z(g) : g
            }
            function bo(a, b, c, d) {
                var e = 0,
                    f = b.length;
                for (; e < f; e++) bc(a, b[e], c, d);
                return c
            }
            function bp(a, b, c, d, f) {
                var g, h, j, k, l, m = bh(a),
                    n = m.length;
                if (!d && m.length === 1) {
                    h = m[0] = m[0].slice(0);
                    if (h.length > 2 && (j = h[0]).type === "ID" && b.nodeType === 9 && !f && e.relative[h[1].type]) {
                        b = e.find.ID(j.matches[0].replace(V, ""), b, f)[0];
                        if (!b) return c;
                        a = a.slice(h.shift().length)
                    }
                    for (g = W.POS.test(a) ? -1 : h.length - 1; g >= 0; g--) {
                        j = h[g];
                        if (e.relative[k = j.type]) break;
                        if (l = e.find[k]) if (d = l(j.matches[0].replace(V, ""), R.test(h[0].type) && b.parentNode || b, f)) {
                            h.splice(g, 1),
                                a = d.length && h.join("");
                            if (!a) return w.apply(c, x.call(d, 0)),
                                c;
                            break
                        }
                    }
                }
                return i(a, m)(d, b, f, c, R.test(a)),
                    c
            }
            function bq() {}
            var c, d, e, f, g, h, i, j, k, l, m = !0,
                n = "undefined",
                o = ("sizcache" + Math.random()).replace(".", ""),
                q = String,
                r = a.document,
                s = r.documentElement,
                t = 0,
                u = 0,
                v = [].pop,
                w = [].push,
                x = [].slice,
                y = [].indexOf ||
                    function(a) {
                        var b = 0,
                            c = this.length;
                        for (; b < c; b++) if (this[b] === a) return b;
                        return - 1
                    },
                z = function(a, b) {
                    return a[o] = b == null || b,
                        a
                },
                A = function() {
                    var a = {},
                        b = [];
                    return z(function(c, d) {
                            return b.push(c) > e.cacheLength && delete a[b.shift()],
                                a[c] = d
                        },
                        a)
                },
                B = A(),
                C = A(),
                D = A(),
                E = "[\\x20\\t\\r\\n\\f]",
                F = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
                G = F.replace("w", "w#"),
                H = "([*^$|!~]?=)",
                I = "\\[" + E + "*(" + F + ")" + E + "*(?:" + H + E + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + G + ")|)|)" + E + "*\\]",
                J = ":(" + F + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + I + ")|[^:]|\\\\.)*|.*))\\)|)",
                K = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + E + "*((?:-\\d)?\\d*)" + E + "*\\)|)(?=[^-]|$)",
                L = new RegExp("^" + E + "+|((?:^|[^\\\\])(?:\\\\.)*)" + E + "+$", "g"),
                M = new RegExp("^" + E + "*," + E + "*"),
                N = new RegExp("^" + E + "*([\\x20\\t\\r\\n\\f>+~])" + E + "*"),
                O = new RegExp(J),
                P = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
                Q = /^:not/,
                R = /[\x20\t\r\n\f]*[+~]/,
                S = /:not\($/,
                T = /h\d/i,
                U = /input|select|textarea|button/i,
                V = /\\(?!\\)/g,
                W = {
                    ID: new RegExp("^#(" + F + ")"),
                    CLASS: new RegExp("^\\.(" + F + ")"),
                    NAME: new RegExp("^\\[name=['\"]?(" + F + ")['\"]?\\]"),
                    TAG: new RegExp("^(" + F.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + I),
                    PSEUDO: new RegExp("^" + J),
                    POS: new RegExp(K, "i"),
                    CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + E + "*(even|odd|(([+-]|)(\\d*)n|)" + E + "*(?:([+-]|)" + E + "*(\\d+)|))" + E + "*\\)|)", "i"),
                    needsContext: new RegExp("^" + E + "*[>+~]|" + K, "i")
                },
                X = function(a) {
                    var b = r.createElement("div");
                    try {
                        return a(b)
                    } catch(c) {
                        return ! 1
                    } finally {
                        b = null
                    }
                },
                Y = X(function(a) {
                    return a.appendChild(r.createComment("")),
                        !a.getElementsByTagName("*").length
                }),
                Z = X(function(a) {
                    return a.innerHTML = "<a href='#'></a>",
                    a.firstChild && typeof a.firstChild.getAttribute !== n && a.firstChild.getAttribute("href") === "#"
                }),
                $ = X(function(a) {
                    a.innerHTML = "<select></select>";
                    var b = typeof a.lastChild.getAttribute("multiple");
                    return b !== "boolean" && b !== "string"
                }),
                _ = X(function(a) {
                    return a.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>",
                        !a.getElementsByClassName || !a.getElementsByClassName("e").length ? !1 : (a.lastChild.className = "e", a.getElementsByClassName("e").length === 2)
                }),
                ba = X(function(a) {
                    a.id = o + 0,
                        a.innerHTML = "<a name='" + o + "'></a><div name='" + o + "'></div>",
                        s.insertBefore(a, s.firstChild);
                    var b = r.getElementsByName && r.getElementsByName(o).length === 2 + r.getElementsByName(o + 0).length;
                    return d = !r.getElementById(o),
                        s.removeChild(a),
                        b
                });
            try {
                x.call(s.childNodes, 0)[0].nodeType
            } catch(bb) {
                x = function(a) {
                    var b, c = [];
                    for (; b = this[a]; a++) c.push(b);
                    return c
                }
            }
            bc.matches = function(a, b) {
                return bc(a, null, null, b)
            },
                bc.matchesSelector = function(a, b) {
                    return bc(b, null, null, [a]).length > 0
                },
                f = bc.getText = function(a) {
                    var b, c = "",
                        d = 0,
                        e = a.nodeType;
                    if (e) {
                        if (e === 1 || e === 9 || e === 11) {
                            if (typeof a.textContent == "string") return a.textContent;
                            for (a = a.firstChild; a; a = a.nextSibling) c += f(a)
                        } else if (e === 3 || e === 4) return a.nodeValue
                    } else for (; b = a[d]; d++) c += f(b);
                    return c
                },
                g = bc.isXML = function(a) {
                    var b = a && (a.ownerDocument || a).documentElement;
                    return b ? b.nodeName !== "HTML": !1
                },
                h = bc.contains = s.contains ?
                    function(a, b) {
                        var c = a.nodeType === 9 ? a.documentElement: a,
                            d = b && b.parentNode;
                        return a === d || !!(d && d.nodeType === 1 && c.contains && c.contains(d))
                    }: s.compareDocumentPosition ?
                    function(a, b) {
                        return b && !!(a.compareDocumentPosition(b) & 16)
                    }: function(a, b) {
                    while (b = b.parentNode) if (b === a) return ! 0;
                    return ! 1
                },
                bc.attr = function(a, b) {
                    var c, d = g(a);
                    return d || (b = b.toLowerCase()),
                        (c = e.attrHandle[b]) ? c(a) : d || $ ? a.getAttribute(b) : (c = a.getAttributeNode(b), c ? typeof a[b] == "boolean" ? a[b] ? b: null: c.specified ? c.value: null: null)
                },
                e = bc.selectors = {
                    cacheLength: 50,
                    createPseudo: z,
                    match: W,
                    attrHandle: Z ? {}: {
                        href: function(a) {
                            return a.getAttribute("href", 2)
                        },
                        type: function(a) {
                            return a.getAttribute("type")
                        }
                    },
                    find: {
                        ID: d ?
                            function(a, b, c) {
                                if (typeof b.getElementById !== n && !c) {
                                    var d = b.getElementById(a);
                                    return d && d.parentNode ? [d] : []
                                }
                            }: function(a, c, d) {
                            if (typeof c.getElementById !== n && !d) {
                                var e = c.getElementById(a);
                                return e ? e.id === a || typeof e.getAttributeNode !== n && e.getAttributeNode("id").value === a ? [e] : b: []
                            }
                        },
                        TAG: Y ?
                            function(a, b) {
                                if (typeof b.getElementsByTagName !== n) return b.getElementsByTagName(a)
                            }: function(a, b) {
                            var c = b.getElementsByTagName(a);
                            if (a === "*") {
                                var d, e = [],
                                    f = 0;
                                for (; d = c[f]; f++) d.nodeType === 1 && e.push(d);
                                return e
                            }
                            return c
                        },
                        NAME: ba &&
                        function(a, b) {
                            if (typeof b.getElementsByName !== n) return b.getElementsByName(name)
                        },
                        CLASS: _ &&
                        function(a, b, c) {
                            if (typeof b.getElementsByClassName !== n && !c) return b.getElementsByClassName(a)
                        }
                    },
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(a) {
                            return a[1] = a[1].replace(V, ""),
                                a[3] = (a[4] || a[5] || "").replace(V, ""),
                            a[2] === "~=" && (a[3] = " " + a[3] + " "),
                                a.slice(0, 4)
                        },
                        CHILD: function(a) {
                            return a[1] = a[1].toLowerCase(),
                                a[1] === "nth" ? (a[2] || bc.error(a[0]), a[3] = +(a[3] ? a[4] + (a[5] || 1) : 2 * (a[2] === "even" || a[2] === "odd")), a[4] = +(a[6] + a[7] || a[2] === "odd")) : a[2] && bc.error(a[0]),
                                a
                        },
                        PSEUDO: function(a) {
                            var b, c;
                            if (W.CHILD.test(a[0])) return null;
                            if (a[3]) a[2] = a[3];
                            else if (b = a[4]) O.test(b) && (c = bh(b, !0)) && (c = b.indexOf(")", b.length - c) - b.length) && (b = b.slice(0, c), a[0] = a[0].slice(0, c)),
                                a[2] = b;
                            return a.slice(0, 3)
                        }
                    },
                    filter: {
                        ID: d ?
                            function(a) {
                                return a = a.replace(V, ""),
                                    function(b) {
                                        return b.getAttribute("id") === a
                                    }
                            }: function(a) {
                            return a = a.replace(V, ""),
                                function(b) {
                                    var c = typeof b.getAttributeNode !== n && b.getAttributeNode("id");
                                    return c && c.value === a
                                }
                        },
                        TAG: function(a) {
                            return a === "*" ?
                                function() {
                                    return ! 0
                                }: (a = a.replace(V, "").toLowerCase(),
                                function(b) {
                                    return b.nodeName && b.nodeName.toLowerCase() === a
                                })
                        },
                        CLASS: function(a) {
                            var b = B[o][a];
                            return b || (b = B(a, new RegExp("(^|" + E + ")" + a + "(" + E + "|$)"))),
                                function(a) {
                                    return b.test(a.className || typeof a.getAttribute !== n && a.getAttribute("class") || "")
                                }
                        },
                        ATTR: function(a, b, c) {
                            return function(d, e) {
                                var f = bc.attr(d, a);
                                return f == null ? b === "!=": b ? (f += "", b === "=" ? f === c: b === "!=" ? f !== c: b === "^=" ? c && f.indexOf(c) === 0 : b === "*=" ? c && f.indexOf(c) > -1 : b === "$=" ? c && f.substr(f.length - c.length) === c: b === "~=" ? (" " + f + " ").indexOf(c) > -1 : b === "|=" ? f === c || f.substr(0, c.length + 1) === c + "-": !1) : !0
                            }
                        },
                        CHILD: function(a, b, c, d) {
                            return a === "nth" ?
                                function(a) {
                                    var b, e, f = a.parentNode;
                                    if (c === 1 && d === 0) return ! 0;
                                    if (f) {
                                        e = 0;
                                        for (b = f.firstChild; b; b = b.nextSibling) if (b.nodeType === 1) {
                                            e++;
                                            if (a === b) break
                                        }
                                    }
                                    return e -= d,
                                    e === c || e % c === 0 && e / c >= 0
                                }: function(b) {
                                var c = b;
                                switch (a) {
                                    case "only":
                                    case "first":
                                        while (c = c.previousSibling) if (c.nodeType === 1) return ! 1;
                                        if (a === "first") return ! 0;
                                        c = b;
                                    case "last":
                                        while (c = c.nextSibling) if (c.nodeType === 1) return ! 1;
                                        return ! 0
                                }
                            }
                        },
                        PSEUDO: function(a, b) {
                            var c, d = e.pseudos[a] || e.setFilters[a.toLowerCase()] || bc.error("unsupported pseudo: " + a);
                            return d[o] ? d(b) : d.length > 1 ? (c = [a, a, "", b], e.setFilters.hasOwnProperty(a.toLowerCase()) ? z(function(a, c) {
                                var e, f = d(a, b),
                                    g = f.length;
                                while (g--) e = y.call(a, f[g]),
                                    a[e] = !(c[e] = f[g])
                            }) : function(a) {
                                return d(a, 0, c)
                            }) : d
                        }
                    },
                    pseudos: {
                        not: z(function(a) {
                            var b = [],
                                c = [],
                                d = i(a.replace(L, "$1"));
                            return d[o] ? z(function(a, b, c, e) {
                                var f, g = d(a, null, e, []),
                                    h = a.length;
                                while (h--) if (f = g[h]) a[h] = !(b[h] = f)
                            }) : function(a, e, f) {
                                return b[0] = a,
                                    d(b, null, f, c),
                                    !c.pop()
                            }
                        }),
                        has: z(function(a) {
                            return function(b) {
                                return bc(a, b).length > 0
                            }
                        }),
                        contains: z(function(a) {
                            return function(b) {
                                return (b.textContent || b.innerText || f(b)).indexOf(a) > -1
                            }
                        }),
                        enabled: function(a) {
                            return a.disabled === !1
                        },
                        disabled: function(a) {
                            return a.disabled === !0
                        },
                        checked: function(a) {
                            var b = a.nodeName.toLowerCase();
                            return b === "input" && !!a.checked || b === "option" && !!a.selected
                        },
                        selected: function(a) {
                            return a.parentNode && a.parentNode.selectedIndex,
                            a.selected === !0
                        },
                        parent: function(a) {
                            return ! e.pseudos.empty(a)
                        },
                        empty: function(a) {
                            var b;
                            a = a.firstChild;
                            while (a) {
                                if (a.nodeName > "@" || (b = a.nodeType) === 3 || b === 4) return ! 1;
                                a = a.nextSibling
                            }
                            return ! 0
                        },
                        header: function(a) {
                            return T.test(a.nodeName)
                        },
                        text: function(a) {
                            var b, c;
                            return a.nodeName.toLowerCase() === "input" && (b = a.type) === "text" && ((c = a.getAttribute("type")) == null || c.toLowerCase() === b)
                        },
                        radio: bd("radio"),
                        checkbox: bd("checkbox"),
                        file: bd("file"),
                        password: bd("password"),
                        image: bd("image"),
                        submit: be("submit"),
                        reset: be("reset"),
                        button: function(a) {
                            var b = a.nodeName.toLowerCase();
                            return b === "input" && a.type === "button" || b === "button"
                        },
                        input: function(a) {
                            return U.test(a.nodeName)
                        },
                        focus: function(a) {
                            var b = a.ownerDocument;
                            return a === b.activeElement && (!b.hasFocus || b.hasFocus()) && ( !! a.type || !!a.href)
                        },
                        active: function(a) {
                            return a === a.ownerDocument.activeElement
                        },
                        first: bf(function(a, b, c) {
                            return [0]
                        }),
                        last: bf(function(a, b, c) {
                            return [b - 1]
                        }),
                        eq: bf(function(a, b, c) {
                            return [c < 0 ? c + b: c]
                        }),
                        even: bf(function(a, b, c) {
                            for (var d = 0; d < b; d += 2) a.push(d);
                            return a
                        }),
                        odd: bf(function(a, b, c) {
                            for (var d = 1; d < b; d += 2) a.push(d);
                            return a
                        }),
                        lt: bf(function(a, b, c) {
                            for (var d = c < 0 ? c + b: c; --d >= 0;) a.push(d);
                            return a
                        }),
                        gt: bf(function(a, b, c) {
                            for (var d = c < 0 ? c + b: c; ++d < b;) a.push(d);
                            return a
                        })
                    }
                },
                j = s.compareDocumentPosition ?
                    function(a, b) {
                        return a === b ? (k = !0, 0) : (!a.compareDocumentPosition || !b.compareDocumentPosition ? a.compareDocumentPosition: a.compareDocumentPosition(b) & 4) ? -1 : 1
                    }: function(a, b) {
                    if (a === b) return k = !0,
                        0;
                    if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
                    var c, d, e = [],
                        f = [],
                        g = a.parentNode,
                        h = b.parentNode,
                        i = g;
                    if (g === h) return bg(a, b);
                    if (!g) return - 1;
                    if (!h) return 1;
                    while (i) e.unshift(i),
                        i = i.parentNode;
                    i = h;
                    while (i) f.unshift(i),
                        i = i.parentNode;
                    c = e.length,
                        d = f.length;
                    for (var j = 0; j < c && j < d; j++) if (e[j] !== f[j]) return bg(e[j], f[j]);
                    return j === c ? bg(a, f[j], -1) : bg(e[j], b, 1)
                },
                [0, 0].sort(j),
                m = !k,
                bc.uniqueSort = function(a) {
                    var b, c = 1;
                    k = m,
                        a.sort(j);
                    if (k) for (; b = a[c]; c++) b === a[c - 1] && a.splice(c--, 1);
                    return a
                },
                bc.error = function(a) {
                    throw new Error("Syntax error, unrecognized expression: " + a)
                },
                i = bc.compile = function(a, b) {
                    var c, d = [],
                        e = [],
                        f = D[o][a];
                    if (!f) {
                        b || (b = bh(a)),
                            c = b.length;
                        while (c--) f = bm(b[c]),
                            f[o] ? d.push(f) : e.push(f);
                        f = D(a, bn(e, d))
                    }
                    return f
                },
            r.querySelectorAll &&
            function() {
                var a, b = bp,
                    c = /'|\\/g,
                    d = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                    e = [":focus"],
                    f = [":active", ":focus"],
                    h = s.matchesSelector || s.mozMatchesSelector || s.webkitMatchesSelector || s.oMatchesSelector || s.msMatchesSelector;
                X(function(a) {
                    a.innerHTML = "<select><option selected=''></option></select>",
                    a.querySelectorAll("[selected]").length || e.push("\\[" + E + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),
                    a.querySelectorAll(":checked").length || e.push(":checked")
                }),
                    X(function(a) {
                        a.innerHTML = "<p test=''></p>",
                        a.querySelectorAll("[test^='']").length && e.push("[*^$]=" + E + "*(?:\"\"|'')"),
                            a.innerHTML = "<input type='hidden'/>",
                        a.querySelectorAll(":enabled").length || e.push(":enabled", ":disabled")
                    }),
                    e = new RegExp(e.join("|")),
                    bp = function(a, d, f, g, h) {
                        if (!g && !h && (!e || !e.test(a))) {
                            var i, j, k = !0,
                                l = o,
                                m = d,
                                n = d.nodeType === 9 && a;
                            if (d.nodeType === 1 && d.nodeName.toLowerCase() !== "object") {
                                i = bh(a),
                                    (k = d.getAttribute("id")) ? l = k.replace(c, "\\$&") : d.setAttribute("id", l),
                                    l = "[id='" + l + "'] ",
                                    j = i.length;
                                while (j--) i[j] = l + i[j].join("");
                                m = R.test(a) && d.parentNode || d,
                                    n = i.join(",")
                            }
                            if (n) try {
                                return w.apply(f, x.call(m.querySelectorAll(n), 0)),
                                    f
                            } catch(p) {} finally {
                                k || d.removeAttribute("id")
                            }
                        }
                        return b(a, d, f, g, h)
                    },
                h && (X(function(b) {
                    a = h.call(b, "div");
                    try {
                        h.call(b, "[test!='']:sizzle"),
                            f.push("!=", J)
                    } catch(c) {}
                }), f = new RegExp(f.join("|")), bc.matchesSelector = function(b, c) {
                    c = c.replace(d, "='$1']");
                    if (!g(b) && !f.test(c) && (!e || !e.test(c))) try {
                        var i = h.call(b, c);
                        if (i || a || b.document && b.document.nodeType !== 11) return i
                    } catch(j) {}
                    return bc(c, null, null, [b]).length > 0
                })
            } (),
                e.pseudos.nth = e.pseudos.eq,
                e.filters = bq.prototype = e.pseudos,
                e.setFilters = new bq,
                bc.attr = p.attr,
                p.find = bc,
                p.expr = bc.selectors,
                p.expr[":"] = p.expr.pseudos,
                p.unique = bc.uniqueSort,
                p.text = bc.getText,
                p.isXMLDoc = bc.isXML,
                p.contains = bc.contains
        } (a);
    var bc = /Until$/,
        bd = /^(?:parents|prev(?:Until|All))/,
        be = /^.[^:#\[\.,]*$/,
        bf = p.expr.match.needsContext,
        bg = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    p.fn.extend({
        find: function(a) {
            var b, c, d, e, f, g, h = this;
            if (typeof a != "string") return p(a).filter(function() {
                for (b = 0, c = h.length; b < c; b++) if (p.contains(h[b], this)) return ! 0
            });
            g = this.pushStack("", "find", a);
            for (b = 0, c = this.length; b < c; b++) {
                d = g.length,
                    p.find(a, this[b], g);
                if (b > 0) for (e = d; e < g.length; e++) for (f = 0; f < d; f++) if (g[f] === g[e]) {
                    g.splice(e--, 1);
                    break
                }
            }
            return g
        },
        has: function(a) {
            var b, c = p(a, this),
                d = c.length;
            return this.filter(function() {
                for (b = 0; b < d; b++) if (p.contains(this, c[b])) return ! 0
            })
        },
        not: function(a) {
            return this.pushStack(bj(this, a, !1), "not", a)
        },
        filter: function(a) {
            return this.pushStack(bj(this, a, !0), "filter", a)
        },
        is: function(a) {
            return !! a && (typeof a == "string" ? bf.test(a) ? p(a, this.context).index(this[0]) >= 0 : p.filter(a, this).length > 0 : this.filter(a).length > 0)
        },
        closest: function(a, b) {
            var c, d = 0,
                e = this.length,
                f = [],
                g = bf.test(a) || typeof a != "string" ? p(a, b || this.context) : 0;
            for (; d < e; d++) {
                c = this[d];
                while (c && c.ownerDocument && c !== b && c.nodeType !== 11) {
                    if (g ? g.index(c) > -1 : p.find.matchesSelector(c, a)) {
                        f.push(c);
                        break
                    }
                    c = c.parentNode
                }
            }
            return f = f.length > 1 ? p.unique(f) : f,
                this.pushStack(f, "closest", a)
        },
        index: function(a) {
            return a ? typeof a == "string" ? p.inArray(this[0], p(a)) : p.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.prevAll().length: -1
        },
        add: function(a, b) {
            var c = typeof a == "string" ? p(a, b) : p.makeArray(a && a.nodeType ? [a] : a),
                d = p.merge(this.get(), c);
            return this.pushStack(bh(c[0]) || bh(d[0]) ? d: p.unique(d))
        },
        addBack: function(a) {
            return this.add(a == null ? this.prevObject: this.prevObject.filter(a))
        }
    }),
        p.fn.andSelf = p.fn.addBack,
        p.each({
                parent: function(a) {
                    var b = a.parentNode;
                    return b && b.nodeType !== 11 ? b: null
                },
                parents: function(a) {
                    return p.dir(a, "parentNode")
                },
                parentsUntil: function(a, b, c) {
                    return p.dir(a, "parentNode", c)
                },
                next: function(a) {
                    return bi(a, "nextSibling")
                },
                prev: function(a) {
                    return bi(a, "previousSibling")
                },
                nextAll: function(a) {
                    return p.dir(a, "nextSibling")
                },
                prevAll: function(a) {
                    return p.dir(a, "previousSibling")
                },
                nextUntil: function(a, b, c) {
                    return p.dir(a, "nextSibling", c)
                },
                prevUntil: function(a, b, c) {
                    return p.dir(a, "previousSibling", c)
                },
                siblings: function(a) {
                    return p.sibling((a.parentNode || {}).firstChild, a)
                },
                children: function(a) {
                    return p.sibling(a.firstChild)
                },
                contents: function(a) {
                    return p.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document: p.merge([], a.childNodes)
                }
            },
            function(a, b) {
                p.fn[a] = function(c, d) {
                    var e = p.map(this, b, c);
                    return bc.test(a) || (d = c),
                    d && typeof d == "string" && (e = p.filter(d, e)),
                        e = this.length > 1 && !bg[a] ? p.unique(e) : e,
                    this.length > 1 && bd.test(a) && (e = e.reverse()),
                        this.pushStack(e, a, k.call(arguments).join(","))
                }
            }),
        p.extend({
            filter: function(a, b, c) {
                return c && (a = ":not(" + a + ")"),
                    b.length === 1 ? p.find.matchesSelector(b[0], a) ? [b[0]] : [] : p.find.matches(a, b)
            },
            dir: function(a, c, d) {
                var e = [],
                    f = a[c];
                while (f && f.nodeType !== 9 && (d === b || f.nodeType !== 1 || !p(f).is(d))) f.nodeType === 1 && e.push(f),
                    f = f[c];
                return e
            },
            sibling: function(a, b) {
                var c = [];
                for (; a; a = a.nextSibling) a.nodeType === 1 && a !== b && c.push(a);
                return c
            }
        });
    var bl = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        bm = / jQuery\d+="(?:null|\d+)"/g,
        bn = /^\s+/,
        bo = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        bp = /<([\w:]+)/,
        bq = /<tbody/i,
        br = /<|&#?\w+;/,
        bs = /<(?:script|style|link)/i,
        bt = /<(?:script|object|embed|option|style)/i,
        bu = new RegExp("<(?:" + bl + ")[\\s/>]", "i"),
        bv = /^(?:checkbox|radio)$/,
        bw = /checked\s*(?:[^=]|=\s*.checked.)/i,
        bx = /\/(java|ecma)script/i,
        by = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
        bz = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        },
        bA = bk(e),
        bB = bA.appendChild(e.createElement("div"));
    bz.optgroup = bz.option,
        bz.tbody = bz.tfoot = bz.colgroup = bz.caption = bz.thead,
        bz.th = bz.td,
    p.support.htmlSerialize || (bz._default = [1, "X<div>", "</div>"]),
        p.fn.extend({
            text: function(a) {
                return p.access(this,
                    function(a) {
                        return a === b ? p.text(this) : this.empty().append((this[0] && this[0].ownerDocument || e).createTextNode(a))
                    },
                    null, a, arguments.length)
            },
            wrapAll: function(a) {
                if (p.isFunction(a)) return this.each(function(b) {
                    p(this).wrapAll(a.call(this, b))
                });
                if (this[0]) {
                    var b = p(a, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && b.insertBefore(this[0]),
                        b.map(function() {
                            var a = this;
                            while (a.firstChild && a.firstChild.nodeType === 1) a = a.firstChild;
                            return a
                        }).append(this)
                }
                return this
            },
            wrapInner: function(a) {
                return p.isFunction(a) ? this.each(function(b) {
                    p(this).wrapInner(a.call(this, b))
                }) : this.each(function() {
                    var b = p(this),
                        c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a)
                })
            },
            wrap: function(a) {
                var b = p.isFunction(a);
                return this.each(function(c) {
                    p(this).wrapAll(b ? a.call(this, c) : a)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    p.nodeName(this, "body") || p(this).replaceWith(this.childNodes)
                }).end()
            },
            append: function() {
                return this.domManip(arguments, !0,
                    function(a) { (this.nodeType === 1 || this.nodeType === 11) && this.appendChild(a)
                    })
            },
            prepend: function() {
                return this.domManip(arguments, !0,
                    function(a) { (this.nodeType === 1 || this.nodeType === 11) && this.insertBefore(a, this.firstChild)
                    })
            },
            before: function() {
                if (!bh(this[0])) return this.domManip(arguments, !1,
                    function(a) {
                        this.parentNode.insertBefore(a, this)
                    });
                if (arguments.length) {
                    var a = p.clean(arguments);
                    return this.pushStack(p.merge(a, this), "before", this.selector)
                }
            },
            after: function() {
                if (!bh(this[0])) return this.domManip(arguments, !1,
                    function(a) {
                        this.parentNode.insertBefore(a, this.nextSibling)
                    });
                if (arguments.length) {
                    var a = p.clean(arguments);
                    return this.pushStack(p.merge(this, a), "after", this.selector)
                }
            },
            remove: function(a, b) {
                var c, d = 0;
                for (; (c = this[d]) != null; d++) if (!a || p.filter(a, [c]).length) ! b && c.nodeType === 1 && (p.cleanData(c.getElementsByTagName("*")), p.cleanData([c])),
                c.parentNode && c.parentNode.removeChild(c);
                return this
            },
            empty: function() {
                var a, b = 0;
                for (; (a = this[b]) != null; b++) {
                    a.nodeType === 1 && p.cleanData(a.getElementsByTagName("*"));
                    while (a.firstChild) a.removeChild(a.firstChild)
                }
                return this
            },
            clone: function(a, b) {
                return a = a == null ? !1 : a,
                    b = b == null ? a: b,
                    this.map(function() {
                        return p.clone(this, a, b)
                    })
            },
            html: function(a) {
                return p.access(this,
                    function(a) {
                        var c = this[0] || {},
                            d = 0,
                            e = this.length;
                        if (a === b) return c.nodeType === 1 ? c.innerHTML.replace(bm, "") : b;
                        if (typeof a == "string" && !bs.test(a) && (p.support.htmlSerialize || !bu.test(a)) && (p.support.leadingWhitespace || !bn.test(a)) && !bz[(bp.exec(a) || ["", ""])[1].toLowerCase()]) {
                            a = a.replace(bo, "<$1></$2>");
                            try {
                                for (; d < e; d++) c = this[d] || {},
                                c.nodeType === 1 && (p.cleanData(c.getElementsByTagName("*")), c.innerHTML = a);
                                c = 0
                            } catch(f) {}
                        }
                        c && this.empty().append(a)
                    },
                    null, a, arguments.length)
            },
            replaceWith: function(a) {
                return bh(this[0]) ? this.length ? this.pushStack(p(p.isFunction(a) ? a() : a), "replaceWith", a) : this: p.isFunction(a) ? this.each(function(b) {
                    var c = p(this),
                        d = c.html();
                    c.replaceWith(a.call(this, b, d))
                }) : (typeof a != "string" && (a = p(a).detach()), this.each(function() {
                    var b = this.nextSibling,
                        c = this.parentNode;
                    p(this).remove(),
                        b ? p(b).before(a) : p(c).append(a)
                }))
            },
            detach: function(a) {
                return this.remove(a, !0)
            },
            domManip: function(a, c, d) {
                a = [].concat.apply([], a);
                var e, f, g, h, i = 0,
                    j = a[0],
                    k = [],
                    l = this.length;
                if (!p.support.checkClone && l > 1 && typeof j == "string" && bw.test(j)) return this.each(function() {
                    p(this).domManip(a, c, d)
                });
                if (p.isFunction(j)) return this.each(function(e) {
                    var f = p(this);
                    a[0] = j.call(this, e, c ? f.html() : b),
                        f.domManip(a, c, d)
                });
                if (this[0]) {
                    e = p.buildFragment(a, this, k),
                        g = e.fragment,
                        f = g.firstChild,
                    g.childNodes.length === 1 && (g = f);
                    if (f) {
                        c = c && p.nodeName(f, "tr");
                        for (h = e.cacheable || l - 1; i < l; i++) d.call(c && p.nodeName(this[i], "table") ? bC(this[i], "tbody") : this[i], i === h ? g: p.clone(g, !0, !0))
                    }
                    g = f = null,
                    k.length && p.each(k,
                        function(a, b) {
                            b.src ? p.ajax ? p.ajax({
                                url: b.src,
                                type: "GET",
                                dataType: "script",
                                async: !1,
                                global: !1,
                                "throws": !0
                            }) : p.error("no ajax") : p.globalEval((b.text || b.textContent || b.innerHTML || "").replace(by, "")),
                            b.parentNode && b.parentNode.removeChild(b)
                        })
                }
                return this
            }
        }),
        p.buildFragment = function(a, c, d) {
            var f, g, h, i = a[0];
            return c = c || e,
                c = !c.nodeType && c[0] || c,
                c = c.ownerDocument || c,
            a.length === 1 && typeof i == "string" && i.length < 512 && c === e && i.charAt(0) === "<" && !bt.test(i) && (p.support.checkClone || !bw.test(i)) && (p.support.html5Clone || !bu.test(i)) && (g = !0, f = p.fragments[i], h = f !== b),
            f || (f = c.createDocumentFragment(), p.clean(a, c, f, d), g && (p.fragments[i] = h && f)),
            {
                fragment: f,
                cacheable: g
            }
        },
        p.fragments = {},
        p.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            },
            function(a, b) {
                p.fn[a] = function(c) {
                    var d, e = 0,
                        f = [],
                        g = p(c),
                        h = g.length,
                        i = this.length === 1 && this[0].parentNode;
                    if ((i == null || i && i.nodeType === 11 && i.childNodes.length === 1) && h === 1) return g[b](this[0]),
                        this;
                    for (; e < h; e++) d = (e > 0 ? this.clone(!0) : this).get(),
                        p(g[e])[b](d),
                        f = f.concat(d);
                    return this.pushStack(f, a, g.selector)
                }
            }),
        p.extend({
            clone: function(a, b, c) {
                var d, e, f, g;
                p.support.html5Clone || p.isXMLDoc(a) || !bu.test("<" + a.nodeName + ">") ? g = a.cloneNode(!0) : (bB.innerHTML = a.outerHTML, bB.removeChild(g = bB.firstChild));
                if ((!p.support.noCloneEvent || !p.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !p.isXMLDoc(a)) {
                    bE(a, g),
                        d = bF(a),
                        e = bF(g);
                    for (f = 0; d[f]; ++f) e[f] && bE(d[f], e[f])
                }
                if (b) {
                    bD(a, g);
                    if (c) {
                        d = bF(a),
                            e = bF(g);
                        for (f = 0; d[f]; ++f) bD(d[f], e[f])
                    }
                }
                return d = e = null,
                    g
            },
            clean: function(a, b, c, d) {
                var f, g, h, i, j, k, l, m, n, o, q, r, s = b === e && bA,
                    t = [];
                if (!b || typeof b.createDocumentFragment == "undefined") b = e;
                for (f = 0; (h = a[f]) != null; f++) {
                    typeof h == "number" && (h += "");
                    if (!h) continue;
                    if (typeof h == "string") if (!br.test(h)) h = b.createTextNode(h);
                    else {
                        s = s || bk(b),
                            l = b.createElement("div"),
                            s.appendChild(l),
                            h = h.replace(bo, "<$1></$2>"),
                            i = (bp.exec(h) || ["", ""])[1].toLowerCase(),
                            j = bz[i] || bz._default,
                            k = j[0],
                            l.innerHTML = j[1] + h + j[2];
                        while (k--) l = l.lastChild;
                        if (!p.support.tbody) {
                            m = bq.test(h),
                                n = i === "table" && !m ? l.firstChild && l.firstChild.childNodes: j[1] === "<table>" && !m ? l.childNodes: [];
                            for (g = n.length - 1; g >= 0; --g) p.nodeName(n[g], "tbody") && !n[g].childNodes.length && n[g].parentNode.removeChild(n[g])
                        } ! p.support.leadingWhitespace && bn.test(h) && l.insertBefore(b.createTextNode(bn.exec(h)[0]), l.firstChild),
                            h = l.childNodes,
                            l.parentNode.removeChild(l)
                    }
                    h.nodeType ? t.push(h) : p.merge(t, h)
                }
                l && (h = l = s = null);
                if (!p.support.appendChecked) for (f = 0; (h = t[f]) != null; f++) p.nodeName(h, "input") ? bG(h) : typeof h.getElementsByTagName != "undefined" && p.grep(h.getElementsByTagName("input"), bG);
                if (c) {
                    q = function(a) {
                        if (!a.type || bx.test(a.type)) return d ? d.push(a.parentNode ? a.parentNode.removeChild(a) : a) : c.appendChild(a)
                    };
                    for (f = 0; (h = t[f]) != null; f++) if (!p.nodeName(h, "script") || !q(h)) c.appendChild(h),
                    typeof h.getElementsByTagName != "undefined" && (r = p.grep(p.merge([], h.getElementsByTagName("script")), q), t.splice.apply(t, [f + 1, 0].concat(r)), f += r.length)
                }
                return t
            },
            cleanData: function(a, b) {
                var c, d, e, f, g = 0,
                    h = p.expando,
                    i = p.cache,
                    j = p.support.deleteExpando,
                    k = p.event.special;
                for (; (e = a[g]) != null; g++) if (b || p.acceptData(e)) {
                    d = e[h],
                        c = d && i[d];
                    if (c) {
                        if (c.events) for (f in c.events) k[f] ? p.event.remove(e, f) : p.removeEvent(e, f, c.handle);
                        i[d] && (delete i[d], j ? delete e[h] : e.removeAttribute ? e.removeAttribute(h) : e[h] = null, p.deletedIds.push(d))
                    }
                }
            }
        }),
        function() {
            var a, b;
            p.uaMatch = function(a) {
                a = a.toLowerCase();
                var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
                return {
                    browser: b[1] || "",
                    version: b[2] || "0"
                }
            },
                a = p.uaMatch(g.userAgent),
                b = {},
            a.browser && (b[a.browser] = !0, b.version = a.version),
                b.chrome ? b.webkit = !0 : b.webkit && (b.safari = !0),
                p.browser = b,
                p.sub = function() {
                    function a(b, c) {
                        return new a.fn.init(b, c)
                    }
                    p.extend(!0, a, this),
                        a.superclass = this,
                        a.fn = a.prototype = this(),
                        a.fn.constructor = a,
                        a.sub = this.sub,
                        a.fn.init = function c(c, d) {
                            return d && d instanceof p && !(d instanceof a) && (d = a(d)),
                                p.fn.init.call(this, c, d, b)
                        },
                        a.fn.init.prototype = a.fn;
                    var b = a(e);
                    return a
                }
        } ();
    var bH, bI, bJ, bK = /alpha\([^)]*\)/i,
        bL = /opacity=([^)]*)/,
        bM = /^(top|right|bottom|left)$/,
        bN = /^(none|table(?!-c[ea]).+)/,
        bO = /^margin/,
        bP = new RegExp("^(" + q + ")(.*)$", "i"),
        bQ = new RegExp("^(" + q + ")(?!px)[a-z%]+$", "i"),
        bR = new RegExp("^([-+])=(" + q + ")", "i"),
        bS = {},
        bT = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        bU = {
            letterSpacing: 0,
            fontWeight: 400
        },
        bV = ["Top", "Right", "Bottom", "Left"],
        bW = ["Webkit", "O", "Moz", "ms"],
        bX = p.fn.toggle;
    p.fn.extend({
        css: function(a, c) {
            return p.access(this,
                function(a, c, d) {
                    return d !== b ? p.style(a, c, d) : p.css(a, c)
                },
                a, c, arguments.length > 1)
        },
        show: function() {
            return b$(this, !0)
        },
        hide: function() {
            return b$(this)
        },
        toggle: function(a, b) {
            var c = typeof a == "boolean";
            return p.isFunction(a) && p.isFunction(b) ? bX.apply(this, arguments) : this.each(function() { (c ? a: bZ(this)) ? p(this).show() : p(this).hide()
            })
        }
    }),
        p.extend({
            cssHooks: {
                opacity: {
                    get: function(a, b) {
                        if (b) {
                            var c = bH(a, "opacity");
                            return c === "" ? "1": c
                        }
                    }
                }
            },
            cssNumber: {
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": p.support.cssFloat ? "cssFloat": "styleFloat"
            },
            style: function(a, c, d, e) {
                if (!a || a.nodeType === 3 || a.nodeType === 8 || !a.style) return;
                var f, g, h, i = p.camelCase(c),
                    j = a.style;
                c = p.cssProps[i] || (p.cssProps[i] = bY(j, i)),
                    h = p.cssHooks[c] || p.cssHooks[i];
                if (d === b) return h && "get" in h && (f = h.get(a, !1, e)) !== b ? f: j[c];
                g = typeof d,
                g === "string" && (f = bR.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat(p.css(a, c)), g = "number");
                if (d == null || g === "number" && isNaN(d)) return;
                g === "number" && !p.cssNumber[i] && (d += "px");
                if (!h || !("set" in h) || (d = h.set(a, d, e)) !== b) try {
                    j[c] = d
                } catch(k) {}
            },
            css: function(a, c, d, e) {
                var f, g, h, i = p.camelCase(c);
                return c = p.cssProps[i] || (p.cssProps[i] = bY(a.style, i)),
                    h = p.cssHooks[c] || p.cssHooks[i],
                h && "get" in h && (f = h.get(a, !0, e)),
                f === b && (f = bH(a, c)),
                f === "normal" && c in bU && (f = bU[c]),
                    d || e !== b ? (g = parseFloat(f), d || p.isNumeric(g) ? g || 0 : f) : f
            },
            swap: function(a, b, c) {
                var d, e, f = {};
                for (e in b) f[e] = a.style[e],
                    a.style[e] = b[e];
                d = c.call(a);
                for (e in b) a.style[e] = f[e];
                return d
            }
        }),
        a.getComputedStyle ? bH = function(b, c) {
            var d, e, f, g, h = a.getComputedStyle(b, null),
                i = b.style;
            return h && (d = h[c], d === "" && !p.contains(b.ownerDocument, b) && (d = p.style(b, c)), bQ.test(d) && bO.test(c) && (e = i.width, f = i.minWidth, g = i.maxWidth, i.minWidth = i.maxWidth = i.width = d, d = h.width, i.width = e, i.minWidth = f, i.maxWidth = g)),
                d
        }: e.documentElement.currentStyle && (bH = function(a, b) {
            var c, d, e = a.currentStyle && a.currentStyle[b],
                f = a.style;
            return e == null && f && f[b] && (e = f[b]),
            bQ.test(e) && !bM.test(b) && (c = f.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), f.left = b === "fontSize" ? "1em": e, e = f.pixelLeft + "px", f.left = c, d && (a.runtimeStyle.left = d)),
                e === "" ? "auto": e
        }),
        p.each(["height", "width"],
            function(a, b) {
                p.cssHooks[b] = {
                    get: function(a, c, d) {
                        if (c) return a.offsetWidth === 0 && bN.test(bH(a, "display")) ? p.swap(a, bT,
                            function() {
                                return cb(a, b, d)
                            }) : cb(a, b, d)
                    },
                    set: function(a, c, d) {
                        return b_(a, c, d ? ca(a, b, d, p.support.boxSizing && p.css(a, "boxSizing") === "border-box") : 0)
                    }
                }
            }),
    p.support.opacity || (p.cssHooks.opacity = {
        get: function(a, b) {
            return bL.test((b && a.currentStyle ? a.currentStyle.filter: a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "": b ? "1": ""
        },
        set: function(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = p.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")": "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1;
            if (b >= 1 && p.trim(f.replace(bK, "")) === "" && c.removeAttribute) {
                c.removeAttribute("filter");
                if (d && !d.filter) return
            }
            c.filter = bK.test(f) ? f.replace(bK, e) : f + " " + e
        }
    }),
        p(function() {
            p.support.reliableMarginRight || (p.cssHooks.marginRight = {
                get: function(a, b) {
                    return p.swap(a, {
                            display: "inline-block"
                        },
                        function() {
                            if (b) return bH(a, "marginRight")
                        })
                }
            }),
            !p.support.pixelPosition && p.fn.position && p.each(["top", "left"],
                function(a, b) {
                    p.cssHooks[b] = {
                        get: function(a, c) {
                            if (c) {
                                var d = bH(a, b);
                                return bQ.test(d) ? p(a).position()[b] + "px": d
                            }
                        }
                    }
                })
        }),
    p.expr && p.expr.filters && (p.expr.filters.hidden = function(a) {
        return a.offsetWidth === 0 && a.offsetHeight === 0 || !p.support.reliableHiddenOffsets && (a.style && a.style.display || bH(a, "display")) === "none"
    },
        p.expr.filters.visible = function(a) {
            return ! p.expr.filters.hidden(a)
        }),
        p.each({
                margin: "",
                padding: "",
                border: "Width"
            },
            function(a, b) {
                p.cssHooks[a + b] = {
                    expand: function(c) {
                        var d, e = typeof c == "string" ? c.split(" ") : [c],
                            f = {};
                        for (d = 0; d < 4; d++) f[a + bV[d] + b] = e[d] || e[d - 2] || e[0];
                        return f
                    }
                },
                bO.test(a) || (p.cssHooks[a + b].set = b_)
            });
    var cd = /%20/g,
        ce = /\[\]$/,
        cf = /\r?\n/g,
        cg = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        ch = /^(?:select|textarea)/i;
    p.fn.extend({
        serialize: function() {
            return p.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? p.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || ch.test(this.nodeName) || cg.test(this.type))
            }).map(function(a, b) {
                var c = p(this).val();
                return c == null ? null: p.isArray(c) ? p.map(c,
                    function(a, c) {
                        return {
                            name: b.name,
                            value: a.replace(cf, "\r\n")
                        }
                    }) : {
                    name: b.name,
                    value: c.replace(cf, "\r\n")
                }
            }).get()
        }
    }),
        p.param = function(a, c) {
            var d, e = [],
                f = function(a, b) {
                    b = p.isFunction(b) ? b() : b == null ? "": b,
                        e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                };
            c === b && (c = p.ajaxSettings && p.ajaxSettings.traditional);
            if (p.isArray(a) || a.jquery && !p.isPlainObject(a)) p.each(a,
                function() {
                    f(this.name, this.value)
                });
            else for (d in a) ci(d, a[d], c, f);
            return e.join("&").replace(cd, "+")
        };
    var cj, ck, cl = /#.*$/,
        cm = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        cn = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        co = /^(?:GET|HEAD)$/,
        cp = /^\/\//,
        cq = /\?/,
        cr = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        cs = /([?&])_=[^&]*/,
        ct = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        cu = p.fn.load,
        cv = {},
        cw = {},
        cx = ["*/"] + ["*"];
    try {
        ck = f.href
    } catch(cy) {
        ck = e.createElement("a"),
            ck.href = "",
            ck = ck.href
    }
    cj = ct.exec(ck.toLowerCase()) || [],
        p.fn.load = function(a, c, d) {
            if (typeof a != "string" && cu) return cu.apply(this, arguments);
            if (!this.length) return this;
            var e, f, g, h = this,
                i = a.indexOf(" ");
            return i >= 0 && (e = a.slice(i, a.length), a = a.slice(0, i)),
                p.isFunction(c) ? (d = c, c = b) : c && typeof c == "object" && (f = "POST"),
                p.ajax({
                    url: a,
                    type: f,
                    dataType: "html",
                    data: c,
                    complete: function(a, b) {
                        d && h.each(d, g || [a.responseText, b, a])
                    }
                }).done(function(a) {
                    g = arguments,
                        h.html(e ? p("<div>").append(a.replace(cr, "")).find(e) : a)
                }),
                this
        },
        p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
            function(a, b) {
                p.fn[b] = function(a) {
                    return this.on(b, a)
                }
            }),
        p.each(["get", "post"],
            function(a, c) {
                p[c] = function(a, d, e, f) {
                    return p.isFunction(d) && (f = f || e, e = d, d = b),
                        p.ajax({
                            type: c,
                            url: a,
                            data: d,
                            success: e,
                            dataType: f
                        })
                }
            }),
        p.extend({
            getScript: function(a, c) {
                return p.get(a, b, c, "script")
            },
            getJSON: function(a, b, c) {
                return p.get(a, b, c, "json")
            },
            ajaxSetup: function(a, b) {
                return b ? cB(a, p.ajaxSettings) : (b = a, a = p.ajaxSettings),
                    cB(a, b),
                    a
            },
            ajaxSettings: {
                url: ck,
                isLocal: cn.test(cj[1]),
                global: !0,
                type: "GET",
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                processData: !0,
                async: !0,
                accepts: {
                    xml: "application/xml, text/xml",
                    html: "text/html",
                    text: "text/plain",
                    json: "application/json, text/javascript",
                    "*": cx
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText"
                },
                converters: {
                    "* text": a.String,
                    "text html": !0,
                    "text json": p.parseJSON,
                    "text xml": p.parseXML
                },
                flatOptions: {
                    context: !0,
                    url: !0
                }
            },
            ajaxPrefilter: cz(cv),
            ajaxTransport: cz(cw),
            ajax: function(a, c) {
                function y(a, c, f, i) {
                    var k, s, t, u, w, y = c;
                    if (v === 2) return;
                    v = 2,
                    h && clearTimeout(h),
                        g = b,
                        e = i || "",
                        x.readyState = a > 0 ? 4 : 0,
                    f && (u = cC(l, x, f));
                    if (a >= 200 && a < 300 || a === 304) l.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (p.lastModified[d] = w), w = x.getResponseHeader("Etag"), w && (p.etag[d] = w)),
                        a === 304 ? (y = "notmodified", k = !0) : (k = cD(l, u), y = k.state, s = k.data, t = k.error, k = !t);
                    else {
                        t = y;
                        if (!y || a) y = "error",
                        a < 0 && (a = 0)
                    }
                    x.status = a,
                        x.statusText = (c || y) + "",
                        k ? o.resolveWith(m, [s, y, x]) : o.rejectWith(m, [x, y, t]),
                        x.statusCode(r),
                        r = b,
                    j && n.trigger("ajax" + (k ? "Success": "Error"), [x, l, k ? s: t]),
                        q.fireWith(m, [x, y]),
                    j && (n.trigger("ajaxComplete", [x, l]), --p.active || p.event.trigger("ajaxStop"))
                }
                typeof a == "object" && (c = a, a = b),
                    c = c || {};
                var d, e, f, g, h, i, j, k, l = p.ajaxSetup({},
                        c),
                    m = l.context || l,
                    n = m !== l && (m.nodeType || m instanceof p) ? p(m) : p.event,
                    o = p.Deferred(),
                    q = p.Callbacks("once memory"),
                    r = l.statusCode || {},
                    t = {},
                    u = {},
                    v = 0,
                    w = "canceled",
                    x = {
                        readyState: 0,
                        setRequestHeader: function(a, b) {
                            if (!v) {
                                var c = a.toLowerCase();
                                a = u[c] = u[c] || a,
                                    t[a] = b
                            }
                            return this
                        },
                        getAllResponseHeaders: function() {
                            return v === 2 ? e: null
                        },
                        getResponseHeader: function(a) {
                            var c;
                            if (v === 2) {
                                if (!f) {
                                    f = {};
                                    while (c = cm.exec(e)) f[c[1].toLowerCase()] = c[2]
                                }
                                c = f[a.toLowerCase()]
                            }
                            return c === b ? null: c
                        },
                        overrideMimeType: function(a) {
                            return v || (l.mimeType = a),
                                this
                        },
                        abort: function(a) {
                            return a = a || w,
                            g && g.abort(a),
                                y(0, a),
                                this
                        }
                    };
                o.promise(x),
                    x.success = x.done,
                    x.error = x.fail,
                    x.complete = q.add,
                    x.statusCode = function(a) {
                        if (a) {
                            var b;
                            if (v < 2) for (b in a) r[b] = [r[b], a[b]];
                            else b = a[x.status],
                                x.always(b)
                        }
                        return this
                    },
                    l.url = ((a || l.url) + "").replace(cl, "").replace(cp, cj[1] + "//"),
                    l.dataTypes = p.trim(l.dataType || "*").toLowerCase().split(s),
                l.crossDomain == null && (i = ct.exec(l.url.toLowerCase()) || !1, l.crossDomain = i && i.join(":") + (i[3] ? "": i[1] === "http:" ? 80 : 443) !== cj.join(":") + (cj[3] ? "": cj[1] === "http:" ? 80 : 443)),
                l.data && l.processData && typeof l.data != "string" && (l.data = p.param(l.data, l.traditional)),
                    cA(cv, l, c, x);
                if (v === 2) return x;
                j = l.global,
                    l.type = l.type.toUpperCase(),
                    l.hasContent = !co.test(l.type),
                j && p.active++===0 && p.event.trigger("ajaxStart");
                if (!l.hasContent) {
                    l.data && (l.url += (cq.test(l.url) ? "&": "?") + l.data, delete l.data),
                        d = l.url;
                    if (l.cache === !1) {
                        var z = p.now(),
                            A = l.url.replace(cs, "$1_=" + z);
                        l.url = A + (A === l.url ? (cq.test(l.url) ? "&": "?") + "_=" + z: "")
                    }
                } (l.data && l.hasContent && l.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", l.contentType),
                l.ifModified && (d = d || l.url, p.lastModified[d] && x.setRequestHeader("If-Modified-Since", p.lastModified[d]), p.etag[d] && x.setRequestHeader("If-None-Match", p.etag[d])),
                    x.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + (l.dataTypes[0] !== "*" ? ", " + cx + "; q=0.01": "") : l.accepts["*"]);
                for (k in l.headers) x.setRequestHeader(k, l.headers[k]);
                if (!l.beforeSend || l.beforeSend.call(m, x, l) !== !1 && v !== 2) {
                    w = "abort";
                    for (k in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) x[k](l[k]);
                    g = cA(cw, l, c, x);
                    if (!g) y( - 1, "No Transport");
                    else {
                        x.readyState = 1,
                        j && n.trigger("ajaxSend", [x, l]),
                        l.async && l.timeout > 0 && (h = setTimeout(function() {
                                x.abort("timeout")
                            },
                            l.timeout));
                        try {
                            v = 1,
                                g.send(t, y)
                        } catch(B) {
                            if (v < 2) y( - 1, B);
                            else throw B
                        }
                    }
                    return x
                }
                return x.abort()
            },
            active: 0,
            lastModified: {},
            etag: {}
        });
    var cE = [],
        cF = /\?/,
        cG = /(=)\?(?=&|$)|\?\?/,
        cH = p.now();
    p.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = cE.pop() || p.expando + "_" + cH++;
            return this[a] = !0,
                a
        }
    }),
        p.ajaxPrefilter("json jsonp",
            function(c, d, e) {
                var f, g, h, i = c.data,
                    j = c.url,
                    k = c.jsonp !== !1,
                    l = k && cG.test(j),
                    m = k && !l && typeof i == "string" && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && cG.test(i);
                if (c.dataTypes[0] === "jsonp" || l || m) return f = c.jsonpCallback = p.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback,
                    g = a[f],
                    l ? c.url = j.replace(cG, "$1" + f) : m ? c.data = i.replace(cG, "$1" + f) : k && (c.url += (cF.test(j) ? "&": "?") + c.jsonp + "=" + f),
                    c.converters["script json"] = function() {
                        return h || p.error(f + " was not called"),
                            h[0]
                    },
                    c.dataTypes[0] = "json",
                    a[f] = function() {
                        h = arguments
                    },
                    e.always(function() {
                        a[f] = g,
                        c[f] && (c.jsonpCallback = d.jsonpCallback, cE.push(f)),
                        h && p.isFunction(g) && g(h[0]),
                            h = g = b
                    }),
                    "script"
            }),
        p.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /javascript|ecmascript/
            },
            converters: {
                "text script": function(a) {
                    return p.globalEval(a),
                        a
                }
            }
        }),
        p.ajaxPrefilter("script",
            function(a) {
                a.cache === b && (a.cache = !1),
                a.crossDomain && (a.type = "GET", a.global = !1)
            }),
        p.ajaxTransport("script",
            function(a) {
                if (a.crossDomain) {
                    var c, d = e.head || e.getElementsByTagName("head")[0] || e.documentElement;
                    return {
                        send: function(f, g) {
                            c = e.createElement("script"),
                                c.async = "async",
                            a.scriptCharset && (c.charset = a.scriptCharset),
                                c.src = a.url,
                                c.onload = c.onreadystatechange = function(a, e) {
                                    if (e || !c.readyState || /loaded|complete/.test(c.readyState)) c.onload = c.onreadystatechange = null,
                                    d && c.parentNode && d.removeChild(c),
                                        c = b,
                                    e || g(200, "success")
                                },
                                d.insertBefore(c, d.firstChild)
                        },
                        abort: function() {
                            c && c.onload(0, 1)
                        }
                    }
                }
            });
    var cI, cJ = a.ActiveXObject ?
            function() {
                for (var a in cI) cI[a](0, 1)
            }: !1,
        cK = 0;
    p.ajaxSettings.xhr = a.ActiveXObject ?
        function() {
            return ! this.isLocal && cL() || cM()
        }: cL,
        function(a) {
            p.extend(p.support, {
                ajax: !!a,
                cors: !!a && "withCredentials" in a
            })
        } (p.ajaxSettings.xhr()),
    p.support.ajax && p.ajaxTransport(function(c) {
        if (!c.crossDomain || p.support.cors) {
            var d;
            return {
                send: function(e, f) {
                    var g, h, i = c.xhr();
                    c.username ? i.open(c.type, c.url, c.async, c.username, c.password) : i.open(c.type, c.url, c.async);
                    if (c.xhrFields) for (h in c.xhrFields) i[h] = c.xhrFields[h];
                    c.mimeType && i.overrideMimeType && i.overrideMimeType(c.mimeType),
                    !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (h in e) i.setRequestHeader(h, e[h])
                    } catch(j) {}
                    i.send(c.hasContent && c.data || null),
                        d = function(a, e) {
                            var h, j, k, l, m;
                            try {
                                if (d && (e || i.readyState === 4)) {
                                    d = b,
                                    g && (i.onreadystatechange = p.noop, cJ && delete cI[g]);
                                    if (e) i.readyState !== 4 && i.abort();
                                    else {
                                        h = i.status,
                                            k = i.getAllResponseHeaders(),
                                            l = {},
                                            m = i.responseXML,
                                        m && m.documentElement && (l.xml = m);
                                        try {
                                            l.text = i.responseText
                                        } catch(a) {}
                                        try {
                                            j = i.statusText
                                        } catch(n) {
                                            j = ""
                                        } ! h && c.isLocal && !c.crossDomain ? h = l.text ? 200 : 404 : h === 1223 && (h = 204)
                                    }
                                }
                            } catch(o) {
                                e || f( - 1, o)
                            }
                            l && f(h, j, l, k)
                        },
                        c.async ? i.readyState === 4 ? setTimeout(d, 0) : (g = ++cK, cJ && (cI || (cI = {},
                            p(a).unload(cJ)), cI[g] = d), i.onreadystatechange = d) : d()
                },
                abort: function() {
                    d && d(0, 1)
                }
            }
        }
    });
    var cN, cO, cP = /^(?:toggle|show|hide)$/,
        cQ = new RegExp("^(?:([-+])=|)(" + q + ")([a-z%]*)$", "i"),
        cR = /queueHooks$/,
        cS = [cY],
        cT = {
            "*": [function(a, b) {
                var c, d, e = this.createTween(a, b),
                    f = cQ.exec(b),
                    g = e.cur(),
                    h = +g || 0,
                    i = 1,
                    j = 20;
                if (f) {
                    c = +f[2],
                        d = f[3] || (p.cssNumber[a] ? "": "px");
                    if (d !== "px" && h) {
                        h = p.css(e.elem, a, !0) || c || 1;
                        do i = i || ".5",
                            h = h / i,
                            p.style(e.elem, a, h + d);
                        while (i !== (i = e.cur() / g) && i !== 1 && --j)
                    }
                    e.unit = d,
                        e.start = h,
                        e.end = f[1] ? h + (f[1] + 1) * c: c
                }
                return e
            }]
        };
    p.Animation = p.extend(cW, {
        tweener: function(a, b) {
            p.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            var c, d = 0,
                e = a.length;
            for (; d < e; d++) c = a[d],
                cT[c] = cT[c] || [],
                cT[c].unshift(b)
        },
        prefilter: function(a, b) {
            b ? cS.unshift(a) : cS.push(a)
        }
    }),
        p.Tween = cZ,
        cZ.prototype = {
            constructor: cZ,
            init: function(a, b, c, d, e, f) {
                this.elem = a,
                    this.prop = c,
                    this.easing = e || "swing",
                    this.options = b,
                    this.start = this.now = this.cur(),
                    this.end = d,
                    this.unit = f || (p.cssNumber[c] ? "": "px")
            },
            cur: function() {
                var a = cZ.propHooks[this.prop];
                return a && a.get ? a.get(this) : cZ.propHooks._default.get(this)
            },
            run: function(a) {
                var b, c = cZ.propHooks[this.prop];
                return this.options.duration ? this.pos = b = p.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a,
                    this.now = (this.end - this.start) * b + this.start,
                this.options.step && this.options.step.call(this.elem, this.now, this),
                    c && c.set ? c.set(this) : cZ.propHooks._default.set(this),
                    this
            }
        },
        cZ.prototype.init.prototype = cZ.prototype,
        cZ.propHooks = {
            _default: {
                get: function(a) {
                    var b;
                    return a.elem[a.prop] == null || !!a.elem.style && a.elem.style[a.prop] != null ? (b = p.css(a.elem, a.prop, !1, ""), !b || b === "auto" ? 0 : b) : a.elem[a.prop]
                },
                set: function(a) {
                    p.fx.step[a.prop] ? p.fx.step[a.prop](a) : a.elem.style && (a.elem.style[p.cssProps[a.prop]] != null || p.cssHooks[a.prop]) ? p.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
                }
            }
        },
        cZ.propHooks.scrollTop = cZ.propHooks.scrollLeft = {
            set: function(a) {
                a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
            }
        },
        p.each(["toggle", "show", "hide"],
            function(a, b) {
                var c = p.fn[b];
                p.fn[b] = function(d, e, f) {
                    return d == null || typeof d == "boolean" || !a && p.isFunction(d) && p.isFunction(e) ? c.apply(this, arguments) : this.animate(c$(b, !0), d, e, f)
                }
            }),
        p.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(bZ).css("opacity", 0).show().end().animate({
                        opacity: b
                    },
                    a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = p.isEmptyObject(a),
                    f = p.speed(b, c, d),
                    g = function() {
                        var b = cW(this, p.extend({},
                            a), f);
                        e && b.stop(!0)
                    };
                return e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, c, d) {
                var e = function(a) {
                    var b = a.stop;
                    delete a.stop,
                        b(d)
                };
                return typeof a != "string" && (d = c, c = a, a = b),
                c && a !== !1 && this.queue(a || "fx", []),
                    this.each(function() {
                        var b = !0,
                            c = a != null && a + "queueHooks",
                            f = p.timers,
                            g = p._data(this);
                        if (c) g[c] && g[c].stop && e(g[c]);
                        else for (c in g) g[c] && g[c].stop && cR.test(c) && e(g[c]);
                        for (c = f.length; c--;) f[c].elem === this && (a == null || f[c].queue === a) && (f[c].anim.stop(d), b = !1, f.splice(c, 1)); (b || !d) && p.dequeue(this, a)
                    })
            }
        }),
        p.each({
                slideDown: c$("show"),
                slideUp: c$("hide"),
                slideToggle: c$("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            },
            function(a, b) {
                p.fn[a] = function(a, c, d) {
                    return this.animate(b, a, c, d)
                }
            }),
        p.speed = function(a, b, c) {
            var d = a && typeof a == "object" ? p.extend({},
                a) : {
                complete: c || !c && b || p.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !p.isFunction(b) && b
            };
            d.duration = p.fx.off ? 0 : typeof d.duration == "number" ? d.duration: d.duration in p.fx.speeds ? p.fx.speeds[d.duration] : p.fx.speeds._default;
            if (d.queue == null || d.queue === !0) d.queue = "fx";
            return d.old = d.complete,
                d.complete = function() {
                    p.isFunction(d.old) && d.old.call(this),
                    d.queue && p.dequeue(this, d.queue)
                },
                d
        },
        p.easing = {
            linear: function(a) {
                return a
            },
            swing: function(a) {
                return.5 - Math.cos(a * Math.PI) / 2
            }
        },
        p.timers = [],
        p.fx = cZ.prototype.init,
        p.fx.tick = function() {
            var a, b = p.timers,
                c = 0;
            for (; c < b.length; c++) a = b[c],
            !a() && b[c] === a && b.splice(c--, 1);
            b.length || p.fx.stop()
        },
        p.fx.timer = function(a) {
            a() && p.timers.push(a) && !cO && (cO = setInterval(p.fx.tick, p.fx.interval))
        },
        p.fx.interval = 13,
        p.fx.stop = function() {
            clearInterval(cO),
                cO = null
        },
        p.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        p.fx.step = {},
    p.expr && p.expr.filters && (p.expr.filters.animated = function(a) {
        return p.grep(p.timers,
            function(b) {
                return a === b.elem
            }).length
    });
    var c_ = /^(?:body|html)$/i;
    p.fn.offset = function(a) {
        if (arguments.length) return a === b ? this: this.each(function(b) {
            p.offset.setOffset(this, a, b)
        });
        var c, d, e, f, g, h, i, j = {
                top: 0,
                left: 0
            },
            k = this[0],
            l = k && k.ownerDocument;
        if (!l) return;
        return (d = l.body) === k ? p.offset.bodyOffset(k) : (c = l.documentElement, p.contains(c, k) ? (typeof k.getBoundingClientRect != "undefined" && (j = k.getBoundingClientRect()), e = da(l), f = c.clientTop || d.clientTop || 0, g = c.clientLeft || d.clientLeft || 0, h = e.pageYOffset || c.scrollTop, i = e.pageXOffset || c.scrollLeft, {
            top: j.top + h - f,
            left: j.left + i - g
        }) : j)
    },
        p.offset = {
            bodyOffset: function(a) {
                var b = a.offsetTop,
                    c = a.offsetLeft;
                return p.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(p.css(a, "marginTop")) || 0, c += parseFloat(p.css(a, "marginLeft")) || 0),
                {
                    top: b,
                    left: c
                }
            },
            setOffset: function(a, b, c) {
                var d = p.css(a, "position");
                d === "static" && (a.style.position = "relative");
                var e = p(a),
                    f = e.offset(),
                    g = p.css(a, "top"),
                    h = p.css(a, "left"),
                    i = (d === "absolute" || d === "fixed") && p.inArray("auto", [g, h]) > -1,
                    j = {},
                    k = {},
                    l,
                    m;
                i ? (k = e.position(), l = k.top, m = k.left) : (l = parseFloat(g) || 0, m = parseFloat(h) || 0),
                p.isFunction(b) && (b = b.call(a, c, f)),
                b.top != null && (j.top = b.top - f.top + l),
                b.left != null && (j.left = b.left - f.left + m),
                    "using" in b ? b.using.call(a, j) : e.css(j)
            }
        },
        p.fn.extend({
            position: function() {
                if (!this[0]) return;
                var a = this[0],
                    b = this.offsetParent(),
                    c = this.offset(),
                    d = c_.test(b[0].nodeName) ? {
                        top: 0,
                        left: 0
                    }: b.offset();
                return c.top -= parseFloat(p.css(a, "marginTop")) || 0,
                    c.left -= parseFloat(p.css(a, "marginLeft")) || 0,
                    d.top += parseFloat(p.css(b[0], "borderTopWidth")) || 0,
                    d.left += parseFloat(p.css(b[0], "borderLeftWidth")) || 0,
                {
                    top: c.top - d.top,
                    left: c.left - d.left
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    var a = this.offsetParent || e.body;
                    while (a && !c_.test(a.nodeName) && p.css(a, "position") === "static") a = a.offsetParent;
                    return a || e.body
                })
            }
        }),
        p.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            },
            function(a, c) {
                var d = /Y/.test(c);
                p.fn[a] = function(e) {
                    return p.access(this,
                        function(a, e, f) {
                            var g = da(a);
                            if (f === b) return g ? c in g ? g[c] : g.document.documentElement[e] : a[e];
                            g ? g.scrollTo(d ? p(g).scrollLeft() : f, d ? f: p(g).scrollTop()) : a[e] = f
                        },
                        a, e, arguments.length, null)
                }
            }),
        p.each({
                Height: "height",
                Width: "width"
            },
            function(a, c) {
                p.each({
                        padding: "inner" + a,
                        content: c,
                        "": "outer" + a
                    },
                    function(d, e) {
                        p.fn[e] = function(e, f) {
                            var g = arguments.length && (d || typeof e != "boolean"),
                                h = d || (e === !0 || f === !0 ? "margin": "border");
                            return p.access(this,
                                function(c, d, e) {
                                    var f;
                                    return p.isWindow(c) ? c.document.documentElement["client" + a] : c.nodeType === 9 ? (f = c.documentElement, Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? p.css(c, d, e, h) : p.style(c, d, e, h)
                                },
                                c, g ? e: b, g, null)
                        }
                    })
            }),
        a.jQuery = a.$ = p,
    typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [],
        function() {
            return p
        })
})(window);
function AdaptiveImage() {
    var self = this;
    $.extend(self, {
        loaded: false,
        VISIBILITY_PADDING: Math.max(1024, $(window).height()),
        init: function() {
            self.registerEvents();
        },
        registerEvents: function() {
            $(document).ready(function() {
                self.loaded = true;
                $(window).scroll(self.loadVisibleImages);
                $(window).resize(self.loadVisibleImages);
                $('div').scroll(self.loadVisibleImages);
                self.loadVisibleImages();
            });
        },
        lazyLoad: function(image) {
            if ($(image).attr('data-ai-loaded')) {
                return;
            }
            $(image).on('appear', self.loadImage);
            if (self.loaded) {
                if (self.isVisible.apply(image)) {
                    $(image).trigger('appear');
                } else {
                    $(image).css({
                        visibility: 'hidden'
                    });
                }
            }
        },
        loadVisibleImages: function() {
            $('img[data-aura-image]:not([data-ai-loaded])').each(function() {
                if (self.isVisible.apply(this)) {
                    $(this).trigger('appear');
                }
            });
        },
        isVisible: function() {
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();
            var imgTop = $(this).offset().top - self.VISIBILITY_PADDING;
            if (viewportBottom >= imgTop && viewportTop < imgTop) {
                return true;
            }
            var imgBottom = $(this).offset().top + $(this).height() + self.VISIBILITY_PADDING;
            if (viewportTop >= imgTop && viewportBottom <= imgBottom) {
                return true;
            }
            return (viewportBottom >= imgBottom && viewportTop < imgBottom);
        },
        loadImage: function() {
            $(this).attr('data-ai-loaded', 1);
            var isX2 = self.isHighRes();
            var a = document.createElement('a');
            a.href = $(this).attr('data-src');
            if (!/\/ai\//.test(a.href)) {
                var width = self.getWidth($(this));
                var height = self.getHeight($(this));
                var size = (width == height || (width > 0 && height == 0)) ? width: width + '_' + height;
                a.href = '//' + a.hostname + '/ai/' + size + (/^\//.test(a.pathname) ? '': '/') + a.pathname + a.search;
            }
            if (isX2) {
                a.href += (a.search.length > 0 ? '&x2=1': '?x2=1');
            }
            $(this).load(self.fadeInImage).attr('src', a.href);
        },
        fadeInImage: function() {
            if ($(this).is(':visible') && $(this).css('visibility') != 'hidden') {
                return;
            }
            $(this).css({
                visibility: 'visible',
                display: 'none'
            });
            $(this).fadeIn(200);
        },
        getWidth: function($elem) {
            var attr = $elem.attr('width');
            if (parseInt(attr) > 0) {
                return parseFloat(attr);
            }
            return 0;
        },
        getHeight: function($elem) {
            var attr = $elem.attr('height');
            if (parseInt(attr) > 0) {
                return parseFloat(attr);
            }
            return 0;
        },
        isHighRes: function() {
            var pixelRatio = 1;
            if (typeof window.devicePixelRatio != 'undefined') {
                pixelRatio = window.devicePixelRatio;
            }
            return pixelRatio >= 1.5;
        },
        bindAndLoadVisible: function() {
            return;
        },
        bindAppear: function() {
            return;
        }
    });
    self.init();
}
if (typeof aura === 'undefined') {
    var aura = {};
}
aura.adaptiveImage = new AdaptiveImage();
window.__ai = aura.adaptiveImage;
var JSON;
if (!JSON) {
    JSON = {};
} (function() {
    "use strict";
    function f(n) {
        return n < 10 ? '0' + n: n;
    }
    if (typeof Date.prototype.toJSON !== 'function') {
        Date.prototype.toJSON = function(key) {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + '-' + f(this.getUTCMonth() + 1) + '-' + f(this.getUTCDate()) + 'T' + f(this.getUTCHours()) + ':' + f(this.getUTCMinutes()) + ':' + f(this.getUTCSeconds()) + 'Z': null;
        };
        String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(key) {
            return this.valueOf();
        };
    }
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap, indent, meta = {
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"': '\\"',
            '\\': '\\\\'
        },
        rep;
    function quote(string) {
        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable,
            function(a) {
                var c = meta[a];
                return typeof c === 'string' ? c: '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice( - 4);
            }) + '"': '"' + string + '"';
    }
    function str(key, holder) {
        var i, k, v, length, mind = gap,
            partial, value = holder[key];
        if (value && typeof value === 'object' && typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }
        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }
        switch (typeof value) {
            case 'string':
                return quote(value);
            case 'number':
                return isFinite(value) ? String(value) : 'null';
            case 'boolean':
            case 'null':
                return String(value);
            case 'object':
                if (!value) {
                    return 'null';
                }
                gap += indent;
                partial = [];
                if (Object.prototype.toString.apply(value) === '[object Array]') {
                    length = value.length;
                    for (i = 0; i < length; i += 1) {
                        partial[i] = str(i, value) || 'null';
                    }
                    v = partial.length === 0 ? '[]': gap ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']': '[' + partial.join(',') + ']';
                    gap = mind;
                    return v;
                }
                if (rep && typeof rep === 'object') {
                    length = rep.length;
                    for (i = 0; i < length; i += 1) {
                        if (typeof rep[i] === 'string') {
                            k = rep[i];
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (gap ? ': ': ':') + v);
                            }
                        }
                    }
                } else {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (gap ? ': ': ':') + v);
                            }
                        }
                    }
                }
                v = partial.length === 0 ? '{}': gap ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}': '{' + partial.join(',') + '}';
                gap = mind;
                return v;
        }
    }
    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function(value, replacer, space) {
            var i;
            gap = '';
            indent = '';
            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }
            } else if (typeof space === 'string') {
                indent = space;
            }
            rep = replacer;
            if (replacer && typeof replacer !== 'function' && (typeof replacer !== 'object' || typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }
            return str('', {
                '': value
            });
        };
    }
    if (typeof JSON.parse !== 'function') {
        JSON.parse = function(text, reviver) {
            var j;
            function walk(holder, key) {
                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }
            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx,
                    function(a) {
                        return '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice( - 4);
                    });
            }
            if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
                j = eval('(' + text + ')');
                return typeof reviver === 'function' ? walk({
                        '': j
                    },
                    '') : j;
            }
            throw new SyntaxError('JSON.parse');
        };
    }
} ()); (function(window, undefined) {
    "use strict";
    var History = window.History = window.History || {},
        jQuery = window.jQuery;
    if (typeof History.Adapter !== 'undefined') {
        throw new Error('History.js Adapter has already been loaded...');
    }
    History.Adapter = {
        bind: function(el, event, callback) {
            jQuery(el).bind(event, callback);
        },
        trigger: function(el, event, extra) {
            jQuery(el).trigger(event, extra);
        },
        extractEventData: function(key, event, extra) {
            var result = (event && event.originalEvent && event.originalEvent[key]) || (extra && extra[key]) || undefined;
            return result;
        },
        onDomLoad: function(callback) {
            jQuery(callback);
        }
    };
    if (typeof History.init !== 'undefined') {
        History.init();
    }
})(window); (function(window, undefined) {
    "use strict";
    var console = window.console || undefined,
        document = window.document,
        navigator = window.navigator,
        sessionStorage = false,
        setTimeout = window.setTimeout,
        clearTimeout = window.clearTimeout,
        setInterval = window.setInterval,
        clearInterval = window.clearInterval,
        JSON = window.JSON,
        alert = window.alert,
        History = window.History = window.History || {},
        history = window.history;
    try {
        sessionStorage = window.sessionStorage;
        sessionStorage.setItem('TEST', '1');
        sessionStorage.removeItem('TEST');
    } catch(e) {
        sessionStorage = false;
    }
    JSON.stringify = JSON.stringify || JSON.encode;
    JSON.parse = JSON.parse || JSON.decode;
    if (typeof History.init !== 'undefined') {
        throw new Error('History.js Core has already been loaded...');
    }
    History.init = function(options) {
        if (typeof History.Adapter === 'undefined') {
            return false;
        }
        if (typeof History.initCore !== 'undefined') {
            History.initCore();
        }
        if (typeof History.initHtml4 !== 'undefined') {
            History.initHtml4();
        }
        return true;
    };
    History.initCore = function(options) {
        if (typeof History.initCore.initialized !== 'undefined') {
            return false;
        } else {
            History.initCore.initialized = true;
        }
        History.options = History.options || {};
        History.options.hashChangeInterval = History.options.hashChangeInterval || 100;
        History.options.safariPollInterval = History.options.safariPollInterval || 500;
        History.options.doubleCheckInterval = History.options.doubleCheckInterval || 500;
        History.options.disableSuid = History.options.disableSuid || false;
        History.options.storeInterval = History.options.storeInterval || 1000;
        History.options.busyDelay = History.options.busyDelay || 250;
        History.options.debug = History.options.debug || false;
        History.options.initialTitle = History.options.initialTitle || document.title;
        History.options.html4Mode = History.options.html4Mode || false;
        History.options.delayInit = History.options.delayInit || false;
        History.intervalList = [];
        History.clearAllIntervals = function() {
            var i, il = History.intervalList;
            if (typeof il !== "undefined" && il !== null) {
                for (i = 0; i < il.length; i++) {
                    clearInterval(il[i]);
                }
                History.intervalList = null;
            }
        };
        History.debug = function() {
            if ((History.options.debug || false)) {
                History.log.apply(History, arguments);
            }
        };
        History.log = function() {
            var consoleExists = !(typeof console === 'undefined' || typeof console.log === 'undefined' || typeof console.log.apply === 'undefined'),
                textarea = document.getElementById('log'),
                message,
                i,
                n,
                args,
                arg;
            if (consoleExists) {
                args = Array.prototype.slice.call(arguments);
                message = args.shift();
                if (typeof console.debug !== 'undefined') {
                    console.debug.apply(console, [message, args]);
                } else {
                    console.log.apply(console, [message, args]);
                }
            } else {
                message = ("\n" + arguments[0] + "\n");
            }
            for (i = 1, n = arguments.length; i < n; ++i) {
                arg = arguments[i];
                if (typeof arg === 'object' && typeof JSON !== 'undefined') {
                    try {
                        arg = JSON.stringify(arg);
                    } catch(Exception) {}
                }
                message += "\n" + arg + "\n";
            }
            if (textarea) {
                textarea.value += message + "\n-----\n";
                textarea.scrollTop = textarea.scrollHeight - textarea.clientHeight;
            } else if (!consoleExists) {
                alert(message);
            }
            return true;
        };
        History.getInternetExplorerMajorVersion = function() {
            var result = History.getInternetExplorerMajorVersion.cached = (typeof History.getInternetExplorerMajorVersion.cached !== 'undefined') ? History.getInternetExplorerMajorVersion.cached: (function() {
                var v = 3,
                    div = document.createElement('div'),
                    all = div.getElementsByTagName('i');
                while ((div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->') && all[0]) {}
                return (v > 4) ? v: false;
            })();
            return result;
        };
        History.isInternetExplorer = function() {
            var result = History.isInternetExplorer.cached = (typeof History.isInternetExplorer.cached !== 'undefined') ? History.isInternetExplorer.cached: Boolean(History.getInternetExplorerMajorVersion());
            return result;
        };
        if (History.options.html4Mode) {
            History.emulated = {
                pushState: true,
                hashChange: true
            };
        } else {
            History.emulated = {
                pushState: !Boolean(window.history && window.history.pushState && window.history.replaceState && !((/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i).test(navigator.userAgent) || (/AppleWebKit\/5([0-2]|3[0-2])/i).test(navigator.userAgent))),
                hashChange: Boolean(!(('onhashchange' in window) || ('onhashchange' in document)) || (History.isInternetExplorer() && History.getInternetExplorerMajorVersion() < 8))
            };
        }
        History.enabled = !History.emulated.pushState;
        History.bugs = {
            setHash: Boolean(!History.emulated.pushState && navigator.vendor === 'Apple Computer, Inc.' && /AppleWebKit\/5([0-2]|3[0-3])/.test(navigator.userAgent)),
            safariPoll: Boolean(!History.emulated.pushState && navigator.vendor === 'Apple Computer, Inc.' && /AppleWebKit\/5([0-2]|3[0-3])/.test(navigator.userAgent)),
            ieDoubleCheck: Boolean(History.isInternetExplorer() && History.getInternetExplorerMajorVersion() < 8),
            hashEscape: Boolean(History.isInternetExplorer() && History.getInternetExplorerMajorVersion() < 7)
        };
        History.isEmptyObject = function(obj) {
            for (var name in obj) {
                if (obj.hasOwnProperty(name)) {
                    return false;
                }
            }
            return true;
        };
        History.cloneObject = function(obj) {
            var hash, newObj;
            if (obj) {
                hash = JSON.stringify(obj);
                newObj = JSON.parse(hash);
            } else {
                newObj = {};
            }
            return newObj;
        };
        History.getRootUrl = function() {
            var rootUrl = document.location.protocol + '//' + (document.location.hostname || document.location.host);
            if (document.location.port || false) {
                rootUrl += ':' + document.location.port;
            }
            rootUrl += '/';
            return rootUrl;
        };
        History.getBaseHref = function() {
            var baseElements = document.getElementsByTagName('base'),
                baseElement = null,
                baseHref = '';
            if (baseElements.length === 1) {
                baseElement = baseElements[0];
                baseHref = baseElement.href.replace(/[^\/]+$/, '');
            }
            baseHref = baseHref.replace(/\/+$/, '');
            if (baseHref) baseHref += '/';
            return baseHref;
        };
        History.getBaseUrl = function() {
            var baseUrl = History.getBaseHref() || History.getBasePageUrl() || History.getRootUrl();
            return baseUrl;
        };
        History.getPageUrl = function() {
            var State = History.getState(false, false),
                stateUrl = (State || {}).url || History.getLocationHref(),
                pageUrl;
            pageUrl = stateUrl.replace(/\/+$/, '').replace(/[^\/]+$/,
                function(part, index, string) {
                    return (/\./).test(part) ? part: part + '/';
                });
            return pageUrl;
        };
        History.getBasePageUrl = function() {
            var basePageUrl = (History.getLocationHref()).replace(/[#\?].*/, '').replace(/[^\/]+$/,
                    function(part, index, string) {
                        return (/[^\/]$/).test(part) ? '': part;
                    }).replace(/\/+$/, '') + '/';
            return basePageUrl;
        };
        History.getFullUrl = function(url, allowBaseHref) {
            var fullUrl = url,
                firstChar = url.substring(0, 1);
            allowBaseHref = (typeof allowBaseHref === 'undefined') ? true: allowBaseHref;
            if (/[a-z]+\:\/\//.test(url)) {} else if (firstChar === '/') {
                fullUrl = History.getRootUrl() + url.replace(/^\/+/, '');
            } else if (firstChar === '#') {
                fullUrl = History.getPageUrl().replace(/#.*/, '') + url;
            } else if (firstChar === '?') {
                fullUrl = History.getPageUrl().replace(/[\?#].*/, '') + url;
            } else {
                if (allowBaseHref) {
                    fullUrl = History.getBaseUrl() + url.replace(/^(\.\/)+/, '');
                } else {
                    fullUrl = History.getBasePageUrl() + url.replace(/^(\.\/)+/, '');
                }
            }
            return fullUrl.replace(/\#$/, '');
        };
        History.getShortUrl = function(url) {
            var shortUrl = url,
                baseUrl = History.getBaseUrl(),
                rootUrl = History.getRootUrl();
            if (History.emulated.pushState) {
                shortUrl = shortUrl.replace(baseUrl, '');
            }
            shortUrl = shortUrl.replace(rootUrl, '/');
            if (History.isTraditionalAnchor(shortUrl)) {
                shortUrl = './' + shortUrl;
            }
            shortUrl = shortUrl.replace(/^(\.\/)+/g, './').replace(/\#$/, '');
            return shortUrl;
        };
        History.getLocationHref = function(doc) {
            doc = doc || document;
            if (doc.URL === doc.location.href) return doc.location.href;
            if (doc.location.href === decodeURIComponent(doc.URL)) return doc.URL;
            if (doc.location.hash && decodeURIComponent(doc.location.href.replace(/^[^#]+/, "")) === doc.location.hash) return doc.location.href;
            if (doc.URL.indexOf('#') == -1 && doc.location.href.indexOf('#') != -1) return doc.location.href;
            return doc.URL || doc.location.href;
        };
        History.store = {};
        History.idToState = History.idToState || {};
        History.stateToId = History.stateToId || {};
        History.urlToId = History.urlToId || {};
        History.storedStates = History.storedStates || [];
        History.savedStates = History.savedStates || [];
        History.normalizeStore = function() {
            History.store.idToState = History.store.idToState || {};
            History.store.urlToId = History.store.urlToId || {};
            History.store.stateToId = History.store.stateToId || {};
        };
        History.getState = function(friendly, create) {
            if (typeof friendly === 'undefined') {
                friendly = true;
            }
            if (typeof create === 'undefined') {
                create = true;
            }
            var State = History.getLastSavedState();
            if (!State && create) {
                State = History.createStateObject();
            }
            if (friendly) {
                State = History.cloneObject(State);
                State.url = State.cleanUrl || State.url;
            }
            return State;
        };
        History.getIdByState = function(newState) {
            var id = History.extractId(newState.url),
                str;
            if (!id) {
                str = History.getStateString(newState);
                if (typeof History.stateToId[str] !== 'undefined') {
                    id = History.stateToId[str];
                } else if (typeof History.store.stateToId[str] !== 'undefined') {
                    id = History.store.stateToId[str];
                } else {
                    while (true) {
                        id = (new Date()).getTime() + String(Math.random()).replace(/\D/g, '');
                        if (typeof History.idToState[id] === 'undefined' && typeof History.store.idToState[id] === 'undefined') {
                            break;
                        }
                    }
                    History.stateToId[str] = id;
                    History.idToState[id] = newState;
                }
            }
            return id;
        };
        History.normalizeState = function(oldState) {
            var newState, dataNotEmpty;
            if (!oldState || (typeof oldState !== 'object')) {
                oldState = {};
            }
            if (typeof oldState.normalized !== 'undefined') {
                return oldState;
            }
            if (!oldState.data || (typeof oldState.data !== 'object')) {
                oldState.data = {};
            }
            newState = {};
            newState.normalized = true;
            newState.title = oldState.title || '';
            newState.url = History.getFullUrl(oldState.url ? oldState.url: (History.getLocationHref()));
            newState.hash = History.getShortUrl(newState.url);
            newState.data = History.cloneObject(oldState.data);
            newState.id = History.getIdByState(newState);
            newState.cleanUrl = newState.url.replace(/\??\&_suid.*/, '');
            newState.url = newState.cleanUrl;
            dataNotEmpty = !History.isEmptyObject(newState.data);
            if ((newState.title || dataNotEmpty) && History.options.disableSuid !== true) {
                newState.hash = History.getShortUrl(newState.url).replace(/\??\&_suid.*/, '');
                if (!/\?/.test(newState.hash)) {
                    newState.hash += '?';
                }
                newState.hash += '&_suid=' + newState.id;
            }
            newState.hashedUrl = History.getFullUrl(newState.hash);
            if ((History.emulated.pushState || History.bugs.safariPoll) && History.hasUrlDuplicate(newState)) {
                newState.url = newState.hashedUrl;
            }
            return newState;
        };
        History.createStateObject = function(data, title, url) {
            var State = {
                'data': data,
                'title': title,
                'url': url
            };
            State = History.normalizeState(State);
            return State;
        };
        History.getStateById = function(id) {
            id = String(id);
            var State = History.idToState[id] || History.store.idToState[id] || undefined;
            return State;
        };
        History.getStateString = function(passedState) {
            var State, cleanedState, str;
            State = History.normalizeState(passedState);
            cleanedState = {
                data: State.data,
                title: passedState.title,
                url: passedState.url
            };
            str = JSON.stringify(cleanedState);
            return str;
        };
        History.getStateId = function(passedState) {
            var State, id;
            State = History.normalizeState(passedState);
            id = State.id;
            return id;
        };
        History.getHashByState = function(passedState) {
            var State, hash;
            State = History.normalizeState(passedState);
            hash = State.hash;
            return hash;
        };
        History.extractId = function(url_or_hash) {
            var id, parts, url, tmp;
            if (url_or_hash.indexOf('#') != -1) {
                tmp = url_or_hash.split("#")[0];
            } else {
                tmp = url_or_hash;
            }
            parts = /(.*)\&_suid=([0-9]+)$/.exec(tmp);
            url = parts ? (parts[1] || url_or_hash) : url_or_hash;
            id = parts ? String(parts[2] || '') : '';
            return id || false;
        };
        History.isTraditionalAnchor = function(url_or_hash) {
            var isTraditional = !(/[\/\?\.]/.test(url_or_hash));
            return isTraditional;
        };
        History.extractState = function(url_or_hash, create) {
            var State = null,
                id, url;
            create = create || false;
            id = History.extractId(url_or_hash);
            if (id) {
                State = History.getStateById(id);
            }
            if (!State) {
                url = History.getFullUrl(url_or_hash);
                id = History.getIdByUrl(url) || false;
                if (id) {
                    State = History.getStateById(id);
                }
                if (!State && create && !History.isTraditionalAnchor(url_or_hash)) {
                    State = History.createStateObject(null, null, url);
                }
            }
            return State;
        };
        History.getIdByUrl = function(url) {
            var id = History.urlToId[url] || History.store.urlToId[url] || undefined;
            return id;
        };
        History.getLastSavedState = function() {
            return History.savedStates[History.savedStates.length - 1] || undefined;
        };
        History.getLastStoredState = function() {
            return History.storedStates[History.storedStates.length - 1] || undefined;
        };
        History.hasUrlDuplicate = function(newState) {
            var hasDuplicate = false,
                oldState;
            oldState = History.extractState(newState.url);
            hasDuplicate = oldState && oldState.id !== newState.id;
            return hasDuplicate;
        };
        History.storeState = function(newState) {
            History.urlToId[newState.url] = newState.id;
            History.storedStates.push(History.cloneObject(newState));
            return newState;
        };
        History.isLastSavedState = function(newState) {
            var isLast = false,
                newId, oldState, oldId;
            if (History.savedStates.length) {
                newId = newState.id;
                oldState = History.getLastSavedState();
                oldId = oldState.id;
                isLast = (newId === oldId);
            }
            return isLast;
        };
        History.saveState = function(newState) {
            if (History.isLastSavedState(newState)) {
                return false;
            }
            History.savedStates.push(History.cloneObject(newState));
            return true;
        };
        History.getStateByIndex = function(index) {
            var State = null;
            if (typeof index === 'undefined') {
                State = History.savedStates[History.savedStates.length - 1];
            } else if (index < 0) {
                State = History.savedStates[History.savedStates.length + index];
            } else {
                State = History.savedStates[index];
            }
            return State;
        };
        History.getCurrentIndex = function() {
            var index = null;
            if (History.savedStates.length < 1) {
                index = 0;
            } else {
                index = History.savedStates.length - 1;
            }
            return index;
        };
        History.getHash = function(doc) {
            var url = History.getLocationHref(doc),
                hash;
            hash = History.getHashByUrl(url);
            return hash;
        };
        History.unescapeHash = function(hash) {
            var result = History.normalizeHash(hash);
            result = decodeURIComponent(result);
            return result;
        };
        History.normalizeHash = function(hash) {
            var result = hash.replace(/[^#]*#/, '').replace(/#.*/, '');
            return result;
        };
        History.setHash = function(hash, queue) {
            var State, pageUrl;
            if (queue !== false && History.busy()) {
                History.pushQueue({
                    scope: History,
                    callback: History.setHash,
                    args: arguments,
                    queue: queue
                });
                return false;
            }
            History.busy(true);
            State = History.extractState(hash, true);
            if (State && !History.emulated.pushState) {
                History.pushState(State.data, State.title, State.url, false);
            } else if (History.getHash() !== hash) {
                if (History.bugs.setHash) {
                    pageUrl = History.getPageUrl();
                    History.pushState(null, null, pageUrl + '#' + hash, false);
                } else {
                    document.location.hash = hash;
                }
            }
            return History;
        };
        History.escapeHash = function(hash) {
            var result = History.normalizeHash(hash);
            result = window.encodeURIComponent(result);
            if (!History.bugs.hashEscape) {
                result = result.replace(/\%21/g, '!').replace(/\%26/g, '&').replace(/\%3D/g, '=').replace(/\%3F/g, '?');
            }
            return result;
        };
        History.getHashByUrl = function(url) {
            var hash = String(url).replace(/([^#]*)#?([^#]*)#?(.*)/, '$2');
            hash = History.unescapeHash(hash);
            return hash;
        };
        History.setTitle = function(newState) {
            var title = newState.title,
                firstState;
            if (!title) {
                firstState = History.getStateByIndex(0);
                if (firstState && firstState.url === newState.url) {
                    title = firstState.title || History.options.initialTitle;
                }
            }
            try {
                document.getElementsByTagName('title')[0].innerHTML = title.replace('<', '&lt;').replace('>', '&gt;').replace(' & ', ' &amp; ');
            } catch(Exception) {}
            document.title = title;
            return History;
        };
        History.queues = [];
        History.busy = function(value) {
            if (typeof value !== 'undefined') {
                History.busy.flag = value;
            } else if (typeof History.busy.flag === 'undefined') {
                History.busy.flag = false;
            }
            if (!History.busy.flag) {
                clearTimeout(History.busy.timeout);
                var fireNext = function() {
                    var i, queue, item;
                    if (History.busy.flag) return;
                    for (i = History.queues.length - 1; i >= 0; --i) {
                        queue = History.queues[i];
                        if (queue.length === 0) continue;
                        item = queue.shift();
                        History.fireQueueItem(item);
                        History.busy.timeout = setTimeout(fireNext, History.options.busyDelay);
                    }
                };
                History.busy.timeout = setTimeout(fireNext, History.options.busyDelay);
            }
            return History.busy.flag;
        };
        History.busy.flag = false;
        History.fireQueueItem = function(item) {
            return item.callback.apply(item.scope || History, item.args || []);
        };
        History.pushQueue = function(item) {
            History.queues[item.queue || 0] = History.queues[item.queue || 0] || [];
            History.queues[item.queue || 0].push(item);
            return History;
        };
        History.queue = function(item, queue) {
            if (typeof item === 'function') {
                item = {
                    callback: item
                };
            }
            if (typeof queue !== 'undefined') {
                item.queue = queue;
            }
            if (History.busy()) {
                History.pushQueue(item);
            } else {
                History.fireQueueItem(item);
            }
            return History;
        };
        History.clearQueue = function() {
            History.busy.flag = false;
            History.queues = [];
            return History;
        };
        History.stateChanged = false;
        History.doubleChecker = false;
        History.doubleCheckComplete = function() {
            History.stateChanged = true;
            History.doubleCheckClear();
            return History;
        };
        History.doubleCheckClear = function() {
            if (History.doubleChecker) {
                clearTimeout(History.doubleChecker);
                History.doubleChecker = false;
            }
            return History;
        };
        History.doubleCheck = function(tryAgain) {
            History.stateChanged = false;
            History.doubleCheckClear();
            if (History.bugs.ieDoubleCheck) {
                History.doubleChecker = setTimeout(function() {
                        History.doubleCheckClear();
                        if (!History.stateChanged) {
                            tryAgain();
                        }
                        return true;
                    },
                    History.options.doubleCheckInterval);
            }
            return History;
        };
        History.safariStatePoll = function() {
            var urlState = History.extractState(History.getLocationHref()),
                newState;
            if (!History.isLastSavedState(urlState)) {
                newState = urlState;
            } else {
                return;
            }
            if (!newState) {
                newState = History.createStateObject();
            }
            History.Adapter.trigger(window, 'popstate');
            return History;
        };
        History.back = function(queue) {
            if (queue !== false && History.busy()) {
                History.pushQueue({
                    scope: History,
                    callback: History.back,
                    args: arguments,
                    queue: queue
                });
                return false;
            }
            History.busy(true);
            History.doubleCheck(function() {
                History.back(false);
            });
            history.go( - 1);
            return true;
        };
        History.forward = function(queue) {
            if (queue !== false && History.busy()) {
                History.pushQueue({
                    scope: History,
                    callback: History.forward,
                    args: arguments,
                    queue: queue
                });
                return false;
            }
            History.busy(true);
            History.doubleCheck(function() {
                History.forward(false);
            });
            history.go(1);
            return true;
        };
        History.go = function(index, queue) {
            var i;
            if (index > 0) {
                for (i = 1; i <= index; ++i) {
                    History.forward(queue);
                }
            } else if (index < 0) {
                for (i = -1; i >= index; --i) {
                    History.back(queue);
                }
            } else {
                throw new Error('History.go: History.go requires a positive or negative integer passed.');
            }
            return History;
        };
        if (History.emulated.pushState) {
            var emptyFunction = function() {};
            History.pushState = History.pushState || emptyFunction;
            History.replaceState = History.replaceState || emptyFunction;
        } else {
            History.onPopState = function(event, extra) {
                var stateId = false,
                    newState = false,
                    currentHash, currentState;
                History.doubleCheckComplete();
                currentHash = History.getHash();
                if (currentHash) {
                    currentState = History.extractState(currentHash || History.getLocationHref(), true);
                    if (currentState) {
                        History.replaceState(currentState.data, currentState.title, currentState.url, false);
                    } else {
                        History.Adapter.trigger(window, 'anchorchange');
                        History.busy(false);
                    }
                    History.expectedStateId = false;
                    return false;
                }
                stateId = History.Adapter.extractEventData('state', event, extra) || false;
                if (stateId) {
                    newState = History.getStateById(stateId);
                } else if (History.expectedStateId) {
                    newState = History.getStateById(History.expectedStateId);
                } else {
                    newState = History.extractState(History.getLocationHref());
                }
                if (!newState) {
                    newState = History.createStateObject(null, null, History.getLocationHref());
                }
                History.expectedStateId = false;
                if (History.isLastSavedState(newState)) {
                    History.busy(false);
                    return false;
                }
                History.storeState(newState);
                History.saveState(newState);
                History.setTitle(newState);
                History.Adapter.trigger(window, 'statechange');
                History.busy(false);
                return true;
            };
            History.Adapter.bind(window, 'popstate', History.onPopState);
            History.pushState = function(data, title, url, queue) {
                if (History.getHashByUrl(url) && History.emulated.pushState) {
                    throw new Error('History.js does not support states with fragement-identifiers (hashes/anchors).');
                }
                if (queue !== false && History.busy()) {
                    History.pushQueue({
                        scope: History,
                        callback: History.pushState,
                        args: arguments,
                        queue: queue
                    });
                    return false;
                }
                History.busy(true);
                var newState = History.createStateObject(data, title, url);
                if (History.isLastSavedState(newState)) {
                    History.busy(false);
                } else {
                    History.storeState(newState);
                    History.expectedStateId = newState.id;
                    history.pushState(newState.id, newState.title, newState.url);
                    History.Adapter.trigger(window, 'popstate');
                }
                return true;
            };
            History.replaceState = function(data, title, url, queue) {
                if (History.getHashByUrl(url) && History.emulated.pushState) {
                    throw new Error('History.js does not support states with fragement-identifiers (hashes/anchors).');
                }
                if (queue !== false && History.busy()) {
                    History.pushQueue({
                        scope: History,
                        callback: History.replaceState,
                        args: arguments,
                        queue: queue
                    });
                    return false;
                }
                History.busy(true);
                var newState = History.createStateObject(data, title, url);
                if (History.isLastSavedState(newState)) {
                    History.busy(false);
                } else {
                    History.storeState(newState);
                    History.expectedStateId = newState.id;
                    history.replaceState(newState.id, newState.title, newState.url);
                    History.Adapter.trigger(window, 'popstate');
                }
                return true;
            };
        }
        if (sessionStorage) {
            try {
                History.store = JSON.parse(sessionStorage.getItem('History.store')) || {};
            } catch(err) {
                History.store = {};
            }
            History.normalizeStore();
        } else {
            History.store = {};
            History.normalizeStore();
        }
        History.Adapter.bind(window, "unload", History.clearAllIntervals);
        History.saveState(History.storeState(History.extractState(History.getLocationHref(), true)));
        if (sessionStorage) {
            History.onUnload = function() {
                var currentStore, item, currentStoreString;
                try {
                    currentStore = JSON.parse(sessionStorage.getItem('History.store')) || {};
                } catch(err) {
                    currentStore = {};
                }
                currentStore.idToState = currentStore.idToState || {};
                currentStore.urlToId = currentStore.urlToId || {};
                currentStore.stateToId = currentStore.stateToId || {};
                for (item in History.idToState) {
                    if (!History.idToState.hasOwnProperty(item)) {
                        continue;
                    }
                    currentStore.idToState[item] = History.idToState[item];
                }
                for (item in History.urlToId) {
                    if (!History.urlToId.hasOwnProperty(item)) {
                        continue;
                    }
                    currentStore.urlToId[item] = History.urlToId[item];
                }
                for (item in History.stateToId) {
                    if (!History.stateToId.hasOwnProperty(item)) {
                        continue;
                    }
                    currentStore.stateToId[item] = History.stateToId[item];
                }
                History.store = currentStore;
                History.normalizeStore();
                currentStoreString = JSON.stringify(currentStore);
                try {
                    sessionStorage.setItem('History.store', currentStoreString);
                } catch(e) {
                    if (e.code === DOMException.QUOTA_EXCEEDED_ERR) {
                        if (sessionStorage.length) {
                            sessionStorage.removeItem('History.store');
                            sessionStorage.setItem('History.store', currentStoreString);
                        } else {}
                    } else {
                        throw e;
                    }
                }
            };
            History.intervalList.push(setInterval(History.onUnload, History.options.storeInterval));
            History.Adapter.bind(window, 'beforeunload', History.onUnload);
            History.Adapter.bind(window, 'unload', History.onUnload);
        }
        if (!History.emulated.pushState) {
            if (History.bugs.safariPoll) {
                History.intervalList.push(setInterval(History.safariStatePoll, History.options.safariPollInterval));
            }
            if (navigator.vendor === 'Apple Computer, Inc.' || (navigator.appCodeName || '') === 'Mozilla') {
                History.Adapter.bind(window, 'hashchange',
                    function() {
                        History.Adapter.trigger(window, 'popstate');
                    });
                if (History.getHash()) {
                    History.Adapter.onDomLoad(function() {
                        History.Adapter.trigger(window, 'hashchange');
                    });
                }
            }
        }
    };
    if (!History.options || !History.options.delayInit) {
        History.init();
    }
})(window);; (function($) {
    "use strict";
    var feature = {};
    feature.fileapi = $("<input type='file'/>").get(0).files !== undefined;
    feature.formdata = window.FormData !== undefined;
    $.fn.ajaxSubmit = function(options) {
        if (!this.length) {
            log('ajaxSubmit: skipping submit process - no element selected');
            return this;
        }
        var method, action, url, $form = this;
        if (typeof options == 'function') {
            options = {
                success: options
            };
        }
        method = this.attr('method');
        action = this.attr('action');
        url = (typeof action === 'string') ? $.trim(action) : '';
        url = url || window.location.href || '';
        if (url) {
            url = (url.match(/^([^#]+)/) || [])[1];
        }
        options = $.extend(true, {
                url: url,
                success: $.ajaxSettings.success,
                type: method || 'GET',
                iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false': 'about:blank'
            },
            options);
        var veto = {};
        this.trigger('form-pre-serialize', [this, options, veto]);
        if (veto.veto) {
            log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');
            return this;
        }
        if (options.beforeSerialize && options.beforeSerialize(this, options) === false) {
            log('ajaxSubmit: submit aborted via beforeSerialize callback');
            return this;
        }
        var traditional = options.traditional;
        if (traditional === undefined) {
            traditional = $.ajaxSettings.traditional;
        }
        var elements = [];
        var qx, a = this.formToArray(options.semantic, elements);
        if (options.data) {
            options.extraData = options.data;
            qx = $.param(options.data, traditional);
        }
        if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) {
            log('ajaxSubmit: submit aborted via beforeSubmit callback');
            return this;
        }
        this.trigger('form-submit-validate', [a, this, options, veto]);
        if (veto.veto) {
            log('ajaxSubmit: submit vetoed via form-submit-validate trigger');
            return this;
        }
        var q = $.param(a, traditional);
        if (qx) {
            q = (q ? (q + '&' + qx) : qx);
        }
        if (options.type.toUpperCase() == 'GET') {
            options.url += (options.url.indexOf('?') >= 0 ? '&': '?') + q;
            options.data = null;
        } else {
            options.data = q;
        }
        var callbacks = [];
        if (options.resetForm) {
            callbacks.push(function() {
                $form.resetForm();
            });
        }
        if (options.clearForm) {
            callbacks.push(function() {
                $form.clearForm(options.includeHidden);
            });
        }
        if (!options.dataType && options.target) {
            var oldSuccess = options.success ||
                function() {};
            callbacks.push(function(data) {
                var fn = options.replaceTarget ? 'replaceWith': 'html';
                $(options.target)[fn](data).each(oldSuccess, arguments);
            });
        } else if (options.success) {
            callbacks.push(options.success);
        }
        options.success = function(data, status, xhr) {
            var context = options.context || this;
            for (var i = 0,
                     max = callbacks.length; i < max; i++) {
                callbacks[i].apply(context, [data, status, xhr || $form, $form]);
            }
        };
        var fileInputs = $('input:file:enabled[value]', this);
        var hasFileInputs = fileInputs.length > 0;
        var mp = 'multipart/form-data';
        var multipart = ($form.attr('enctype') == mp || $form.attr('encoding') == mp);
        var fileAPI = feature.fileapi && feature.formdata;
        log("fileAPI :" + fileAPI);
        var shouldUseFrame = (hasFileInputs || multipart) && !fileAPI;
        var jqxhr;
        if (options.iframe !== false && (options.iframe || shouldUseFrame)) {
            if (options.closeKeepAlive) {
                $.get(options.closeKeepAlive,
                    function() {
                        jqxhr = fileUploadIframe(a);
                    });
            } else {
                jqxhr = fileUploadIframe(a);
            }
        } else if ((hasFileInputs || multipart) && fileAPI) {
            jqxhr = fileUploadXhr(a);
        } else {
            jqxhr = $.ajax(options);
        }
        $form.removeData('jqxhr').data('jqxhr', jqxhr);
        for (var k = 0; k < elements.length; k++) elements[k] = null;
        this.trigger('form-submit-notify', [this, options]);
        return this;
        function deepSerialize(extraData) {
            var serialized = $.param(extraData).split('&');
            var len = serialized.length;
            var result = {};
            var i, part;
            for (i = 0; i < len; i++) {
                part = serialized[i].split('=');
                result[decodeURIComponent(part[0])] = decodeURIComponent(part[1]);
            }
            return result;
        }
        function fileUploadXhr(a) {
            var formdata = new FormData();
            for (var i = 0; i < a.length; i++) {
                formdata.append(a[i].name, a[i].value);
            }
            if (options.extraData) {
                var serializedData = deepSerialize(options.extraData);
                for (var p in serializedData) if (serializedData.hasOwnProperty(p)) formdata.append(p, serializedData[p]);
            }
            options.data = null;
            var s = $.extend(true, {},
                $.ajaxSettings, options, {
                    contentType: false,
                    processData: false,
                    cache: false,
                    type: method || 'POST'
                });
            if (options.uploadProgress) {
                s.xhr = function() {
                    var xhr = jQuery.ajaxSettings.xhr();
                    if (xhr.upload) {
                        xhr.upload.onprogress = function(event) {
                            var percent = 0;
                            var position = event.loaded || event.position;
                            var total = event.total;
                            if (event.lengthComputable) {
                                percent = Math.ceil(position / total * 100);
                            }
                            options.uploadProgress(event, position, total, percent);
                        };
                    }
                    return xhr;
                };
            }
            s.data = null;
            var beforeSend = s.beforeSend;
            s.beforeSend = function(xhr, o) {
                o.data = formdata;
                if (beforeSend) beforeSend.call(this, xhr, o);
            };
            return $.ajax(s);
        }
        function fileUploadIframe(a) {
            var form = $form[0],
                el,
                i,
                s,
                g,
                id,
                $io,
                io,
                xhr,
                sub,
                n,
                timedOut,
                timeoutHandle;
            var useProp = !!$.fn.prop;
            var deferred = $.Deferred();
            if ($(':input[name=submit],:input[id=submit]', form).length) {
                alert('Error: Form elements must not have name or id of "submit".');
                deferred.reject();
                return deferred;
            }
            if (a) {
                for (i = 0; i < elements.length; i++) {
                    el = $(elements[i]);
                    if (useProp) el.prop('disabled', false);
                    else el.removeAttr('disabled');
                }
            }
            s = $.extend(true, {},
                $.ajaxSettings, options);
            s.context = s.context || s;
            id = 'jqFormIO' + (new Date().getTime());
            if (s.iframeTarget) {
                $io = $(s.iframeTarget);
                n = $io.attr('name');
                if (!n) $io.attr('name', id);
                else id = n;
            } else {
                $io = $('<iframe name="' + id + '" src="' + s.iframeSrc + '" />');
                $io.css({
                    position: 'absolute',
                    top: '-1000px',
                    left: '-1000px'
                });
            }
            io = $io[0];
            xhr = {
                aborted: 0,
                responseText: null,
                responseXML: null,
                status: 0,
                statusText: 'n/a',
                getAllResponseHeaders: function() {},
                getResponseHeader: function() {},
                setRequestHeader: function() {},
                abort: function(status) {
                    var e = (status === 'timeout' ? 'timeout': 'aborted');
                    log('aborting upload... ' + e);
                    this.aborted = 1;
                    if (io.contentWindow.document.execCommand) {
                        try {
                            io.contentWindow.document.execCommand('Stop');
                        } catch(ignore) {}
                    }
                    $io.attr('src', s.iframeSrc);
                    xhr.error = e;
                    if (s.error) s.error.call(s.context, xhr, e, status);
                    if (g) $.event.trigger("ajaxError", [xhr, s, e]);
                    if (s.complete) s.complete.call(s.context, xhr, e);
                }
            };
            g = s.global;
            if (g && 0 === $.active++) {
                $.event.trigger("ajaxStart");
            }
            if (g) {
                $.event.trigger("ajaxSend", [xhr, s]);
            }
            if (s.beforeSend && s.beforeSend.call(s.context, xhr, s) === false) {
                if (s.global) {
                    $.active--;
                }
                deferred.reject();
                return deferred;
            }
            if (xhr.aborted) {
                deferred.reject();
                return deferred;
            }
            sub = form.clk;
            if (sub) {
                n = sub.name;
                if (n && !sub.disabled) {
                    s.extraData = s.extraData || {};
                    s.extraData[n] = sub.value;
                    if (sub.type == "image") {
                        s.extraData[n + '.x'] = form.clk_x;
                        s.extraData[n + '.y'] = form.clk_y;
                    }
                }
            }
            var CLIENT_TIMEOUT_ABORT = 1;
            var SERVER_ABORT = 2;
            function getDoc(frame) {
                var doc = frame.contentWindow ? frame.contentWindow.document: frame.contentDocument ? frame.contentDocument: frame.document;
                return doc;
            }
            var csrf_token = $('meta[name=csrf-token]').attr('content');
            var csrf_param = $('meta[name=csrf-param]').attr('content');
            if (csrf_param && csrf_token) {
                s.extraData = s.extraData || {};
                s.extraData[csrf_param] = csrf_token;
            }
            function doSubmit() {
                var t = $form.attr('target'),
                    a = $form.attr('action');
                form.setAttribute('target', id);
                if (!method) {
                    form.setAttribute('method', 'POST');
                }
                if (a != s.url) {
                    form.setAttribute('action', s.url);
                }
                if (!s.skipEncodingOverride && (!method || /post/i.test(method))) {
                    $form.attr({
                        encoding: 'multipart/form-data',
                        enctype: 'multipart/form-data'
                    });
                }
                if (s.timeout) {
                    timeoutHandle = setTimeout(function() {
                            timedOut = true;
                            cb(CLIENT_TIMEOUT_ABORT);
                        },
                        s.timeout);
                }
                function checkState() {
                    try {
                        var state = getDoc(io).readyState;
                        log('state = ' + state);
                        if (state && state.toLowerCase() == 'uninitialized') setTimeout(checkState, 50);
                    } catch(e) {
                        log('Server abort: ', e, ' (', e.name, ')');
                        cb(SERVER_ABORT);
                        if (timeoutHandle) clearTimeout(timeoutHandle);
                        timeoutHandle = undefined;
                    }
                }
                var extraInputs = [];
                try {
                    if (s.extraData) {
                        for (var n in s.extraData) {
                            if (s.extraData.hasOwnProperty(n)) {
                                if ($.isPlainObject(s.extraData[n]) && s.extraData[n].hasOwnProperty('name') && s.extraData[n].hasOwnProperty('value')) {
                                    extraInputs.push($('<input type="hidden" name="' + s.extraData[n].name + '">').attr('value', s.extraData[n].value).appendTo(form)[0]);
                                } else {
                                    extraInputs.push($('<input type="hidden" name="' + n + '">').attr('value', s.extraData[n]).appendTo(form)[0]);
                                }
                            }
                        }
                    }
                    if (!s.iframeTarget) {
                        $io.appendTo('body');
                        if (io.attachEvent) io.attachEvent('onload', cb);
                        else io.addEventListener('load', cb, false);
                    }
                    setTimeout(checkState, 15);
                    form.submit();
                } finally {
                    form.setAttribute('action', a);
                    if (t) {
                        form.setAttribute('target', t);
                    } else {
                        $form.removeAttr('target');
                    }
                    $(extraInputs).remove();
                }
            }
            if (s.forceSync) {
                doSubmit();
            } else {
                setTimeout(doSubmit, 10);
            }
            var data, doc, domCheckCount = 50,
                callbackProcessed;
            function cb(e) {
                if (xhr.aborted || callbackProcessed) {
                    return;
                }
                try {
                    doc = getDoc(io);
                } catch(ex) {
                    log('cannot access response document: ', ex);
                    e = SERVER_ABORT;
                }
                if (e === CLIENT_TIMEOUT_ABORT && xhr) {
                    xhr.abort('timeout');
                    deferred.reject(xhr, 'timeout');
                    return;
                } else if (e == SERVER_ABORT && xhr) {
                    xhr.abort('server abort');
                    deferred.reject(xhr, 'error', 'server abort');
                    return;
                }
                if (!doc || doc.location.href == s.iframeSrc) {
                    if (!timedOut) return;
                }
                if (io.detachEvent) io.detachEvent('onload', cb);
                else io.removeEventListener('load', cb, false);
                var status = 'success',
                    errMsg;
                try {
                    if (timedOut) {
                        throw 'timeout';
                    }
                    var isXml = s.dataType == 'xml' || doc.XMLDocument || $.isXMLDoc(doc);
                    log('isXml=' + isXml);
                    if (!isXml && window.opera && (doc.body === null || !doc.body.innerHTML)) {
                        if (--domCheckCount) {
                            log('requeing onLoad callback, DOM not available');
                            setTimeout(cb, 250);
                            return;
                        }
                    }
                    var docRoot = doc.body ? doc.body: doc.documentElement;
                    xhr.responseText = docRoot ? docRoot.innerHTML: null;
                    xhr.responseXML = doc.XMLDocument ? doc.XMLDocument: doc;
                    if (isXml) s.dataType = 'xml';
                    xhr.getResponseHeader = function(header) {
                        var headers = {
                            'content-type': s.dataType
                        };
                        return headers[header];
                    };
                    if (docRoot) {
                        xhr.status = Number(docRoot.getAttribute('status')) || xhr.status;
                        xhr.statusText = docRoot.getAttribute('statusText') || xhr.statusText;
                    }
                    var dt = (s.dataType || '').toLowerCase();
                    var scr = /(json|script|text)/.test(dt);
                    if (scr || s.textarea) {
                        var ta = doc.getElementsByTagName('textarea')[0];
                        if (ta) {
                            xhr.responseText = ta.value;
                            xhr.status = Number(ta.getAttribute('status')) || xhr.status;
                            xhr.statusText = ta.getAttribute('statusText') || xhr.statusText;
                        } else if (scr) {
                            var pre = doc.getElementsByTagName('pre')[0];
                            var b = doc.getElementsByTagName('body')[0];
                            if (pre) {
                                xhr.responseText = pre.textContent ? pre.textContent: pre.innerText;
                            } else if (b) {
                                xhr.responseText = b.textContent ? b.textContent: b.innerText;
                            }
                        }
                    } else if (dt == 'xml' && !xhr.responseXML && xhr.responseText) {
                        xhr.responseXML = toXml(xhr.responseText);
                    }
                    try {
                        data = httpData(xhr, dt, s);
                    } catch(e) {
                        status = 'parsererror';
                        xhr.error = errMsg = (e || status);
                    }
                } catch(e) {
                    log('error caught: ', e);
                    status = 'error';
                    xhr.error = errMsg = (e || status);
                }
                if (xhr.aborted) {
                    log('upload aborted');
                    status = null;
                }
                if (xhr.status) {
                    status = (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) ? 'success': 'error';
                }
                if (status === 'success') {
                    if (s.success) s.success.call(s.context, data, 'success', xhr);
                    deferred.resolve(xhr.responseText, 'success', xhr);
                    if (g) $.event.trigger("ajaxSuccess", [xhr, s]);
                } else if (status) {
                    if (errMsg === undefined) errMsg = xhr.statusText;
                    if (s.error) s.error.call(s.context, xhr, status, errMsg);
                    deferred.reject(xhr, 'error', errMsg);
                    if (g) $.event.trigger("ajaxError", [xhr, s, errMsg]);
                }
                if (g) $.event.trigger("ajaxComplete", [xhr, s]);
                if (g && !--$.active) {
                    $.event.trigger("ajaxStop");
                }
                if (s.complete) s.complete.call(s.context, xhr, status);
                callbackProcessed = true;
                if (s.timeout) clearTimeout(timeoutHandle);
                setTimeout(function() {
                        if (!s.iframeTarget) $io.remove();
                        xhr.responseXML = null;
                    },
                    100);
            }
            var toXml = $.parseXML ||
                function(s, doc) {
                    if (window.ActiveXObject) {
                        doc = new ActiveXObject('Microsoft.XMLDOM');
                        doc.async = 'false';
                        doc.loadXML(s);
                    } else {
                        doc = (new DOMParser()).parseFromString(s, 'text/xml');
                    }
                    return (doc && doc.documentElement && doc.documentElement.nodeName != 'parsererror') ? doc: null;
                };
            var parseJSON = $.parseJSON ||
                function(s) {
                    return window['eval']('(' + s + ')');
                };
            var httpData = function(xhr, type, s) {
                var ct = xhr.getResponseHeader('content-type') || '',
                    xml = type === 'xml' || !type && ct.indexOf('xml') >= 0,
                    data = xml ? xhr.responseXML: xhr.responseText;
                if (xml && data.documentElement.nodeName === 'parsererror') {
                    if ($.error) $.error('parsererror');
                }
                if (s && s.dataFilter) {
                    data = s.dataFilter(data, type);
                }
                if (typeof data === 'string') {
                    if (type === 'json' || !type && ct.indexOf('json') >= 0) {
                        data = parseJSON(data);
                    } else if (type === "script" || !type && ct.indexOf("javascript") >= 0) {
                        $.globalEval(data);
                    }
                }
                return data;
            };
            return deferred;
        }
    };
    $.fn.ajaxForm = function(options) {
        options = options || {};
        options.delegation = options.delegation && $.isFunction($.fn.on);
        if (!options.delegation && this.length === 0) {
            var o = {
                s: this.selector,
                c: this.context
            };
            if (!$.isReady && o.s) {
                log('DOM not ready, queuing ajaxForm');
                $(function() {
                    $(o.s, o.c).ajaxForm(options);
                });
                return this;
            }
            log('terminating; zero elements found by selector' + ($.isReady ? '': ' (DOM not ready)'));
            return this;
        }
        if (options.delegation) {
            $(document).off('submit.form-plugin', this.selector, doAjaxSubmit).off('click.form-plugin', this.selector, captureSubmittingElement).on('submit.form-plugin', this.selector, options, doAjaxSubmit).on('click.form-plugin', this.selector, options, captureSubmittingElement);
            return this;
        }
        return this.ajaxFormUnbind().bind('submit.form-plugin', options, doAjaxSubmit).bind('click.form-plugin', options, captureSubmittingElement);
    };
    function doAjaxSubmit(e) {
        var options = e.data;
        if (!e.isDefaultPrevented()) {
            e.preventDefault();
            $(this).ajaxSubmit(options);
        }
    }
    function captureSubmittingElement(e) {
        var target = e.target;
        var $el = $(target);
        if (! ($el.is(":submit,input:image"))) {
            var t = $el.closest(':submit');
            if (t.length === 0) {
                return;
            }
            target = t[0];
        }
        var form = this;
        form.clk = target;
        if (target.type == 'image') {
            if (e.offsetX !== undefined) {
                form.clk_x = e.offsetX;
                form.clk_y = e.offsetY;
            } else if (typeof $.fn.offset == 'function') {
                var offset = $el.offset();
                form.clk_x = e.pageX - offset.left;
                form.clk_y = e.pageY - offset.top;
            } else {
                form.clk_x = e.pageX - target.offsetLeft;
                form.clk_y = e.pageY - target.offsetTop;
            }
        }
        setTimeout(function() {
                form.clk = form.clk_x = form.clk_y = null;
            },
            100);
    }
    $.fn.ajaxFormUnbind = function() {
        return this.unbind('submit.form-plugin click.form-plugin');
    };
    $.fn.formToArray = function(semantic, elements) {
        var a = [];
        if (this.length === 0) {
            return a;
        }
        var form = this[0];
        var els = semantic ? form.getElementsByTagName('*') : form.elements;
        if (!els) {
            return a;
        }
        var i, j, n, v, el, max, jmax;
        for (i = 0, max = els.length; i < max; i++) {
            el = els[i];
            n = el.name;
            if (!n) {
                continue;
            }
            if (semantic && form.clk && el.type == "image") {
                if (!el.disabled && form.clk == el) {
                    a.push({
                        name: n,
                        value: $(el).val(),
                        type: el.type
                    });
                    a.push({
                            name: n + '.x',
                            value: form.clk_x
                        },
                        {
                            name: n + '.y',
                            value: form.clk_y
                        });
                }
                continue;
            }
            v = $.fieldValue(el, true);
            if (v && v.constructor == Array) {
                if (elements) elements.push(el);
                for (j = 0, jmax = v.length; j < jmax; j++) {
                    a.push({
                        name: n,
                        value: v[j]
                    });
                }
            } else if (feature.fileapi && el.type == 'file' && !el.disabled) {
                if (elements) elements.push(el);
                var files = el.files;
                if (files.length) {
                    for (j = 0; j < files.length; j++) {
                        a.push({
                            name: n,
                            value: files[j],
                            type: el.type
                        });
                    }
                } else {
                    a.push({
                        name: n,
                        value: '',
                        type: el.type
                    });
                }
            } else if (v !== null && typeof v != 'undefined') {
                if (elements) elements.push(el);
                a.push({
                    name: n,
                    value: v,
                    type: el.type,
                    required: el.required
                });
            }
        }
        if (!semantic && form.clk) {
            var $input = $(form.clk),
                input = $input[0];
            n = input.name;
            if (n && !input.disabled && input.type == 'image') {
                a.push({
                    name: n,
                    value: $input.val()
                });
                a.push({
                        name: n + '.x',
                        value: form.clk_x
                    },
                    {
                        name: n + '.y',
                        value: form.clk_y
                    });
            }
        }
        return a;
    };
    $.fn.formSerialize = function(semantic) {
        return $.param(this.formToArray(semantic));
    };
    $.fn.fieldSerialize = function(successful) {
        var a = [];
        this.each(function() {
            var n = this.name;
            if (!n) {
                return;
            }
            var v = $.fieldValue(this, successful);
            if (v && v.constructor == Array) {
                for (var i = 0,
                         max = v.length; i < max; i++) {
                    a.push({
                        name: n,
                        value: v[i]
                    });
                }
            } else if (v !== null && typeof v != 'undefined') {
                a.push({
                    name: this.name,
                    value: v
                });
            }
        });
        return $.param(a);
    };
    $.fn.fieldValue = function(successful) {
        for (var val = [], i = 0, max = this.length; i < max; i++) {
            var el = this[i];
            var v = $.fieldValue(el, successful);
            if (v === null || typeof v == 'undefined' || (v.constructor == Array && !v.length)) {
                continue;
            }
            if (v.constructor == Array) $.merge(val, v);
            else val.push(v);
        }
        return val;
    };
    $.fieldValue = function(el, successful) {
        var n = el.name,
            t = el.type,
            tag = el.tagName.toLowerCase();
        if (successful === undefined) {
            successful = true;
        }
        if (successful && (!n || el.disabled || t == 'reset' || t == 'button' || (t == 'checkbox' || t == 'radio') && !el.checked || (t == 'submit' || t == 'image') && el.form && el.form.clk != el || tag == 'select' && el.selectedIndex == -1)) {
            return null;
        }
        if (tag == 'select') {
            var index = el.selectedIndex;
            if (index < 0) {
                return null;
            }
            var a = [],
                ops = el.options;
            var one = (t == 'select-one');
            var max = (one ? index + 1 : ops.length);
            for (var i = (one ? index: 0); i < max; i++) {
                var op = ops[i];
                if (op.selected) {
                    var v = op.value;
                    if (!v) {
                        v = (op.attributes && op.attributes['value'] && !(op.attributes['value'].specified)) ? op.text: op.value;
                    }
                    if (one) {
                        return v;
                    }
                    a.push(v);
                }
            }
            return a;
        }
        return $(el).val();
    };
    $.fn.clearForm = function(includeHidden) {
        return this.each(function() {
            $('input,select,textarea', this).clearFields(includeHidden);
        });
    };
    $.fn.clearFields = $.fn.clearInputs = function(includeHidden) {
        var re = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function() {
            var t = this.type,
                tag = this.tagName.toLowerCase();
            if (re.test(t) || tag == 'textarea') {
                this.value = '';
            } else if (t == 'checkbox' || t == 'radio') {
                this.checked = false;
            } else if (tag == 'select') {
                this.selectedIndex = -1;
            } else if (includeHidden) {
                if ((includeHidden === true && /hidden/.test(t)) || (typeof includeHidden == 'string' && $(this).is(includeHidden))) this.value = '';
            }
        });
    };
    $.fn.resetForm = function() {
        return this.each(function() {
            if (typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType)) {
                this.reset();
            }
        });
    };
    $.fn.enable = function(b) {
        if (b === undefined) {
            b = true;
        }
        return this.each(function() {
            this.disabled = !b;
        });
    };
    $.fn.selected = function(select) {
        if (select === undefined) {
            select = true;
        }
        return this.each(function() {
            var t = this.type;
            if (t == 'checkbox' || t == 'radio') {
                this.checked = select;
            } else if (this.tagName.toLowerCase() == 'option') {
                var $sel = $(this).parent('select');
                if (select && $sel[0] && $sel[0].type == 'select-one') {
                    $sel.find('option').selected(false);
                }
                this.selected = select;
            }
        });
    };
    $.fn.ajaxSubmit.debug = false;
    function log() {
        if (!$.fn.ajaxSubmit.debug) return;
        var msg = '[jquery.form] ' + Array.prototype.join.call(arguments, '');
        if (window.console && window.console.log) {
            window.console.log(msg);
        } else if (window.opera && window.opera.postError) {
            window.opera.postError(msg);
        }
    }
})(jQuery);
function DPFacebook() {
    var self = this;
    $.extend(self, {
        permissions: 'public_profile, email, user_status, user_likes, user_birthday, user_friends',
        FB_LOGIN_SUCCESS: 1,
        FB_LOGIN_ERROR: 2,
        FB_SIGNUP_REQUIRED: 3,
        login: function(callback) {
            FB.getLoginStatus(function(response) {
                if (response.status !== 'connected' || (!response.authResponse || !response.authResponse.userID)) {
                    FB.login(function(response) {
                            if (response.status === 'connected') {
                                self.loginUser(response.authResponse.userID, response.authResponse.accessToken, callback);
                            } else {
                                callback(false);
                            }
                        },
                        {
                            scope: self.permissions
                        });
                } else {
                    self.loginUser(response.authResponse.userID, response.authResponse.accessToken, callback);
                }
            });
        },
        loginUser: function(fbId, token, callback) {
            $.post('/User/loginFB', {
                    fbId: fbId,
                    token: token
                },
                function(res) {
                    var code = res.error ? self.FB_LOGIN_ERROR: (res.data && res.data.length > 0 ? self.FB_SIGNUP_REQUIRED: self.FB_LOGIN_SUCCESS);
                    callback(code, {
                        email: res.data,
                        id: fbId,
                        token: token
                    });
                });
        },
        isConnected: function(callback) {
            FB.getLoginStatus(function(response) {
                callback(response.status === 'connected', response.authResponse ? response.authResponse.accessToken: '');
            });
        }
    });
}
window.fb = new DPFacebook();
function Footer() {
    var self = this;
    $.extend(self, {
        init: function() {
            self.registerEvents();
        },
        registerEvents: function() {
            $('.moreInfoTab').click(self.expandFooter);
        },
        expandFooter: function() {
            if ($('.moreInfoTab').hasClass('visible')) {
                $('.moreInfoTab').removeClass('visible').parents('#footer').animate({
                        height: '44px'
                    },
                    200);
                $('.expandArrow').removeClass('icon-down-arrow').addClass('icon-up-arrow');
            } else {
                $('.moreInfoTab').addClass('visible').parents('#footer').animate({
                        height: '266px'
                    },
                    200);
                $('.expandArrow').removeClass('icon-up-arrow').addClass('icon-down-arrow');
            }
        }
    });
    self.init();
}
$(document).ready(function() {
    var footer = new Footer();
});
function FluidItems(container, scrollingEnabled, singleRow) {
    var self = this;
    if (typeof scrollingEnabled === 'undefined') {
        scrollingEnabled = false;
    }
    if (typeof singleRow === 'undefined') {
        singleRow = false;
    }
    $.extend(self, {
        loadInProgress: false,
        page: 1,
        container: $(container),
        masonry: null,
        init: function() {
            self.setupWaterfall();
        },
        setupWaterfall: function() {
            self.setImageSize(self.container);
            self.container.masonry({
                isFitWidth: !scrollingEnabled,
                gutter: '.gutter-sizer',
                itemSelector: '.item',
                columnWidth: '.grid-sizer',
                stamp: '.stamp',
                isResizeBound: false
            });
            self.masonry = self.container.data('masonry');
            self.container.attr('data-masonry', '');
            var firstItem = self.container.find('.item:first');
            if (scrollingEnabled) {
                var count = self.container.find('.item').length;
                var width = firstItem.width() * count + (10 * (count));
                self.container.width(width);
            }
            if (singleRow) {
                function resizeSingleRow() {
                    var height = firstItem.outerHeight(true);
                    self.container.parent().height(height);
                }
                $(window).resize(resizeSingleRow);
                setTimeout(resizeSingleRow, 0);
            }
            self.container.masonry('stamp', $('.stamp'));
            self.container.fadeIn();
            self.masonry.layout();
            if (singleRow) {
                resizeSingleRow();
            }
            $('body').on('updateMasonry',
                function() {
                    self.masonry.layout();
                    if (singleRow) {
                        resizeSingleRow();
                    }
                }).on('imgLoaded',
                function(e, img) {
                    $(img).parent().height('');
                });
            self.container.on('appendItems',
                function(e, items) {
                    self.setImageSize(items);
                    self.container.append(items);
                    self.masonry.appended(items);
                }).on('prependItems',
                function(e, items) {
                    self.setImageSize(items);
                    self.container.prepend(items);
                    self.masonry.prepended(items);
                });
            $(window).resize(function() {
                self.setImageSize(self.container);
                self.container.masonry({
                    itemSelector: '.item',
                    columnWidth: '.grid-sizer'
                });
                self.masonry.layout();
                self.masonry.layout();
            });
        },
        setImageSize: function(items) {
            $(items).find('a[data-height]').each(function() {
                var height = $(this).attr('data-height');
                var smallHeight = $(this).attr('data-small-height');
                if (height && !smallHeight) {
                    $(this).height(height);
                } else if (height && smallHeight) {
                    if ($(document).width() <= 483) {
                        $(this).height(smallHeight);
                        $(this).find('img').attr('height', smallHeight);
                    } else {
                        $(this).height(height);
                        $(this).find('img').attr('height', height);
                    }
                }
            })
        }
    });
    self.init();
} !
    function(a) {
        function b() {}
        function c(a) {
            function c(b) {
                b.prototype.option || (b.prototype.option = function(b) {
                    a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b))
                })
            }
            function e(b, c) {
                a.fn[b] = function(e) {
                    if ("string" == typeof e) {
                        for (var g = d.call(arguments, 1), h = 0, i = this.length; i > h; h++) {
                            var j = this[h],
                                k = a.data(j, b);
                            if (k) if (a.isFunction(k[e]) && "_" !== e.charAt(0)) {
                                var l = k[e].apply(k, g);
                                if (void 0 !== l) return l
                            } else f("no such method '" + e + "' for " + b + " instance");
                            else f("cannot call methods on " + b + " prior to initialization; attempted to call '" + e + "'")
                        }
                        return this
                    }
                    return this.each(function() {
                        var d = a.data(this, b);
                        d ? (d.option(e), d._init()) : (d = new c(this, e), a.data(this, b, d))
                    })
                }
            }
            if (a) {
                var f = "undefined" == typeof console ? b: function(a) {
                    console.error(a)
                };
                return a.bridget = function(a, b) {
                    c(b),
                        e(a, b)
                },
                    a.bridget
            }
        }
        var d = Array.prototype.slice;
        "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], c) : c(a.jQuery)
    } (window),
    function(a) {
        function b(b) {
            var c = a.event;
            return c.target = c.target || c.srcElement || b,
                c
        }
        var c = document.documentElement,
            d = function() {};
        c.addEventListener ? d = function(a, b, c) {
            a.addEventListener(b, c, !1)
        }: c.attachEvent && (d = function(a, c, d) {
            a[c + d] = d.handleEvent ?
                function() {
                    var c = b(a);
                    d.handleEvent.call(d, c)
                }: function() {
                var c = b(a);
                d.call(a, c)
            },
                a.attachEvent("on" + c, a[c + d])
        });
        var e = function() {};
        c.removeEventListener ? e = function(a, b, c) {
            a.removeEventListener(b, c, !1)
        }: c.detachEvent && (e = function(a, b, c) {
            a.detachEvent("on" + b, a[b + c]);
            try {
                delete a[b + c]
            } catch(d) {
                a[b + c] = void 0
            }
        });
        var f = {
            bind: d,
            unbind: e
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", f) : "object" == typeof exports ? module.exports = f: a.eventie = f
    } (this),
    function(a) {
        function b(a) {
            "function" == typeof a && (b.isReady ? a() : f.push(a))
        }
        function c(a) {
            var c = "readystatechange" === a.type && "complete" !== e.readyState;
            if (!b.isReady && !c) {
                b.isReady = !0;
                for (var d = 0,
                         g = f.length; g > d; d++) {
                    var h = f[d];
                    h()
                }
            }
        }
        function d(d) {
            return d.bind(e, "DOMContentLoaded", c),
                d.bind(e, "readystatechange", c),
                d.bind(a, "load", c),
                b
        }
        var e = a.document,
            f = [];
        b.isReady = !1,
            "function" == typeof define && define.amd ? (b.isReady = "function" == typeof requirejs, define("doc-ready/doc-ready", ["eventie/eventie"], d)) : a.docReady = d(a.eventie)
    } (this),
    function() {
        function a() {}
        function b(a, b) {
            for (var c = a.length; c--;) if (a[c].listener === b) return c;
            return - 1
        }
        function c(a) {
            return function() {
                return this[a].apply(this, arguments)
            }
        }
        var d = a.prototype,
            e = this,
            f = e.EventEmitter;
        d.getListeners = function(a) {
            var b, c, d = this._getEvents();
            if (a instanceof RegExp) {
                b = {};
                for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
            } else b = d[a] || (d[a] = []);
            return b
        },
            d.flattenListeners = function(a) {
                var b, c = [];
                for (b = 0; b < a.length; b += 1) c.push(a[b].listener);
                return c
            },
            d.getListenersAsObject = function(a) {
                var b, c = this.getListeners(a);
                return c instanceof Array && (b = {},
                    b[a] = c),
                b || c
            },
            d.addListener = function(a, c) {
                var d, e = this.getListenersAsObject(a),
                    f = "object" == typeof c;
                for (d in e) e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c: {
                    listener: c,
                    once: !1
                });
                return this
            },
            d.on = c("addListener"),
            d.addOnceListener = function(a, b) {
                return this.addListener(a, {
                    listener: b,
                    once: !0
                })
            },
            d.once = c("addOnceListener"),
            d.defineEvent = function(a) {
                return this.getListeners(a),
                    this
            },
            d.defineEvents = function(a) {
                for (var b = 0; b < a.length; b += 1) this.defineEvent(a[b]);
                return this
            },
            d.removeListener = function(a, c) {
                var d, e, f = this.getListenersAsObject(a);
                for (e in f) f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1));
                return this
            },
            d.off = c("removeListener"),
            d.addListeners = function(a, b) {
                return this.manipulateListeners(!1, a, b)
            },
            d.removeListeners = function(a, b) {
                return this.manipulateListeners(!0, a, b)
            },
            d.manipulateListeners = function(a, b, c) {
                var d, e, f = a ? this.removeListener: this.addListener,
                    g = a ? this.removeListeners: this.addListeners;
                if ("object" != typeof b || b instanceof RegExp) for (d = c.length; d--;) f.call(this, b, c[d]);
                else for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
                return this
            },
            d.removeEvent = function(a) {
                var b, c = typeof a,
                    d = this._getEvents();
                if ("string" === c) delete d[a];
                else if (a instanceof RegExp) for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b];
                else delete this._events;
                return this
            },
            d.removeAllListeners = c("removeEvent"),
            d.emitEvent = function(a, b) {
                var c, d, e, f, g = this.getListenersAsObject(a);
                for (e in g) if (g.hasOwnProperty(e)) for (d = g[e].length; d--;) c = g[e][d],
                c.once === !0 && this.removeListener(a, c.listener),
                    f = c.listener.apply(this, b || []),
                f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
                return this
            },
            d.trigger = c("emitEvent"),
            d.emit = function(a) {
                var b = Array.prototype.slice.call(arguments, 1);
                return this.emitEvent(a, b)
            },
            d.setOnceReturnValue = function(a) {
                return this._onceReturnValue = a,
                    this
            },
            d._getOnceReturnValue = function() {
                return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue: !0
            },
            d._getEvents = function() {
                return this._events || (this._events = {})
            },
            a.noConflict = function() {
                return e.EventEmitter = f,
                    a
            },
            "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [],
                function() {
                    return a
                }) : "object" == typeof module && module.exports ? module.exports = a: this.EventEmitter = a
    }.call(this),
    function(a) {
        function b(a) {
            if (a) {
                if ("string" == typeof d[a]) return a;
                a = a.charAt(0).toUpperCase() + a.slice(1);
                for (var b, e = 0,
                         f = c.length; f > e; e++) if (b = c[e] + a, "string" == typeof d[b]) return b
            }
        }
        var c = "Webkit Moz ms Ms O".split(" "),
            d = document.documentElement.style;
        "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [],
            function() {
                return b
            }) : "object" == typeof exports ? module.exports = b: a.getStyleProperty = b
    } (window),
    function(a) {
        function b(a) {
            var b = parseFloat(a),
                c = -1 === a.indexOf("%") && !isNaN(b);
            return c && b
        }
        function c() {
            for (var a = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                },
                     b = 0, c = g.length; c > b; b++) {
                var d = g[b];
                a[d] = 0
            }
            return a
        }
        function d(a) {
            function d(a) {
                if ("string" == typeof a && (a = document.querySelector(a)), a && "object" == typeof a && a.nodeType) {
                    var d = f(a);
                    if ("none" === d.display) return c();
                    var e = {};
                    e.width = a.offsetWidth,
                        e.height = a.offsetHeight;
                    for (var k = e.isBorderBox = !(!j || !d[j] || "border-box" !== d[j]), l = 0, m = g.length; m > l; l++) {
                        var n = g[l],
                            o = d[n];
                        o = h(a, o);
                        var p = parseFloat(o);
                        e[n] = isNaN(p) ? 0 : p
                    }
                    var q = e.paddingLeft + e.paddingRight,
                        r = e.paddingTop + e.paddingBottom,
                        s = e.marginLeft + e.marginRight,
                        t = e.marginTop + e.marginBottom,
                        u = e.borderLeftWidth + e.borderRightWidth,
                        v = e.borderTopWidth + e.borderBottomWidth,
                        w = k && i,
                        x = b(d.width);
                    x !== !1 && (e.width = x + (w ? 0 : q + u));
                    var y = b(d.height);
                    return y !== !1 && (e.height = y + (w ? 0 : r + v)),
                        e.innerWidth = e.width - (q + u),
                        e.innerHeight = e.height - (r + v),
                        e.outerWidth = e.width + s,
                        e.outerHeight = e.height + t,
                        e
                }
            }
            function h(a, b) {
                if (e || -1 === b.indexOf("%")) return b;
                var c = a.style,
                    d = c.left,
                    f = a.runtimeStyle,
                    g = f && f.left;
                return g && (f.left = a.currentStyle.left),
                    c.left = b,
                    b = c.pixelLeft,
                    c.left = d,
                g && (f.left = g),
                    b
            }
            var i, j = a("boxSizing");
            return function() {
                if (j) {
                    var a = document.createElement("div");
                    a.style.width = "200px",
                        a.style.padding = "1px 2px 3px 4px",
                        a.style.borderStyle = "solid",
                        a.style.borderWidth = "1px 2px 3px 4px",
                        a.style[j] = "border-box";
                    var c = document.body || document.documentElement;
                    c.appendChild(a);
                    var d = f(a);
                    i = 200 === b(d.width),
                        c.removeChild(a)
                }
            } (),
                d
        }
        var e = a.getComputedStyle,
            f = e ?
                function(a) {
                    return e(a, null)
                }: function(a) {
                return a.currentStyle
            },
            g = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], d) : "object" == typeof exports ? module.exports = d(require("get-style-property")) : a.getSize = d(a.getStyleProperty)
    } (window),
    function(a, b) {
        function c(a, b) {
            return a[h](b)
        }
        function d(a) {
            if (!a.parentNode) {
                var b = document.createDocumentFragment();
                b.appendChild(a)
            }
        }
        function e(a, b) {
            d(a);
            for (var c = a.parentNode.querySelectorAll(b), e = 0, f = c.length; f > e; e++) if (c[e] === a) return ! 0;
            return ! 1
        }
        function f(a, b) {
            return d(a),
                c(a, b)
        }
        var g, h = function() {
            if (b.matchesSelector) return "matchesSelector";
            for (var a = ["webkit", "moz", "ms", "o"], c = 0, d = a.length; d > c; c++) {
                var e = a[c],
                    f = e + "MatchesSelector";
                if (b[f]) return f
            }
        } ();
        if (h) {
            var i = document.createElement("div"),
                j = c(i, "div");
            g = j ? c: f
        } else g = e;
        "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [],
            function() {
                return g
            }) : window.matchesSelector = g
    } (this, Element.prototype),
    function(a) {
        function b(a, b) {
            for (var c in b) a[c] = b[c];
            return a
        }
        function c(a) {
            for (var b in a) return ! 1;
            return b = null,
                !0
        }
        function d(a) {
            return a.replace(/([A-Z])/g,
                function(a) {
                    return "-" + a.toLowerCase()
                })
        }
        function e(a, e, f) {
            function h(a, b) {
                a && (this.element = a, this.layout = b, this.position = {
                    x: 0,
                    y: 0
                },
                    this._create())
            }
            var i = f("transition"),
                j = f("transform"),
                k = i && j,
                l = !!f("perspective"),
                m = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "otransitionend",
                    transition: "transitionend"
                } [i],
                n = ["transform", "transition", "transitionDuration", "transitionProperty"],
                o = function() {
                    for (var a = {},
                             b = 0,
                             c = n.length; c > b; b++) {
                        var d = n[b],
                            e = f(d);
                        e && e !== d && (a[d] = e)
                    }
                    return a
                } ();
            b(h.prototype, a.prototype),
                h.prototype._create = function() {
                    this._transn = {
                        ingProperties: {},
                        clean: {},
                        onEnd: {}
                    },
                        this.css({
                            position: "absolute"
                        })
                },
                h.prototype.handleEvent = function(a) {
                    var b = "on" + a.type;
                    this[b] && this[b](a)
                },
                h.prototype.getSize = function() {
                    this.size = e(this.element)
                },
                h.prototype.css = function(a) {
                    var b = this.element.style;
                    for (var c in a) {
                        var d = o[c] || c;
                        b[d] = a[c]
                    }
                },
                h.prototype.getPosition = function() {
                    var a = g(this.element),
                        b = this.layout.options,
                        c = b.isOriginLeft,
                        d = b.isOriginTop,
                        e = parseInt(a[c ? "left": "right"], 10),
                        f = parseInt(a[d ? "top": "bottom"], 10);
                    e = isNaN(e) ? 0 : e,
                        f = isNaN(f) ? 0 : f;
                    var h = this.layout.size;
                    e -= c ? h.paddingLeft: h.paddingRight,
                        f -= d ? h.paddingTop: h.paddingBottom,
                        this.position.x = e,
                        this.position.y = f
                },
                h.prototype.layoutPosition = function() {
                    var a = this.layout.size,
                        b = this.layout.options,
                        c = {};
                    b.isOriginLeft ? (c.left = this.position.x + a.paddingLeft + "px", c.right = "") : (c.right = this.position.x + a.paddingRight + "px", c.left = ""),
                        b.isOriginTop ? (c.top = this.position.y + a.paddingTop + "px", c.bottom = "") : (c.bottom = this.position.y + a.paddingBottom + "px", c.top = ""),
                        this.css(c),
                        this.emitEvent("layout", [this])
                };
            var p = l ?
                function(a, b) {
                    return "translate3d(" + a + "px, " + b + "px, 0)"
                }: function(a, b) {
                return "translate(" + a + "px, " + b + "px)"
            };
            h.prototype._transitionTo = function(a, b) {
                this.getPosition();
                var c = this.position.x,
                    d = this.position.y,
                    e = parseInt(a, 10),
                    f = parseInt(b, 10),
                    g = e === this.position.x && f === this.position.y;
                if (this.setPosition(a, b), g && !this.isTransitioning) return void this.layoutPosition();
                var h = a - c,
                    i = b - d,
                    j = {},
                    k = this.layout.options;
                h = k.isOriginLeft ? h: -h,
                    i = k.isOriginTop ? i: -i,
                    j.transform = p(h, i),
                    this.transition({
                        to: j,
                        onTransitionEnd: {
                            transform: this.layoutPosition
                        },
                        isCleaning: !0
                    })
            },
                h.prototype.goTo = function(a, b) {
                    this.setPosition(a, b),
                        this.layoutPosition()
                },
                h.prototype.moveTo = k ? h.prototype._transitionTo: h.prototype.goTo,
                h.prototype.setPosition = function(a, b) {
                    this.position.x = parseInt(a, 10),
                        this.position.y = parseInt(b, 10)
                },
                h.prototype._nonTransition = function(a) {
                    this.css(a.to),
                    a.isCleaning && this._removeStyles(a.to);
                    for (var b in a.onTransitionEnd) a.onTransitionEnd[b].call(this)
                },
                h.prototype._transition = function(a) {
                    if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(a);
                    var b = this._transn;
                    for (var c in a.onTransitionEnd) b.onEnd[c] = a.onTransitionEnd[c];
                    for (c in a.to) b.ingProperties[c] = !0,
                    a.isCleaning && (b.clean[c] = !0);
                    if (a.from) {
                        this.css(a.from);
                        var d = this.element.offsetHeight;
                        d = null
                    }
                    this.enableTransition(a.to),
                        this.css(a.to),
                        this.isTransitioning = !0
                };
            var q = j && d(j) + ",opacity";
            h.prototype.enableTransition = function() {
                this.isTransitioning || (this.css({
                    transitionProperty: q,
                    transitionDuration: this.layout.options.transitionDuration
                }), this.element.addEventListener(m, this, !1))
            },
                h.prototype.transition = h.prototype[i ? "_transition": "_nonTransition"],
                h.prototype.onwebkitTransitionEnd = function(a) {
                    this.ontransitionend(a)
                },
                h.prototype.onotransitionend = function(a) {
                    this.ontransitionend(a)
                };
            var r = {
                "-webkit-transform": "transform",
                "-moz-transform": "transform",
                "-o-transform": "transform"
            };
            h.prototype.ontransitionend = function(a) {
                if (a.target === this.element) {
                    var b = this._transn,
                        d = r[a.propertyName] || a.propertyName;
                    if (delete b.ingProperties[d], c(b.ingProperties) && this.disableTransition(), d in b.clean && (this.element.style[a.propertyName] = "", delete b.clean[d]), d in b.onEnd) {
                        var e = b.onEnd[d];
                        e.call(this),
                            delete b.onEnd[d]
                    }
                    this.emitEvent("transitionEnd", [this])
                }
            },
                h.prototype.disableTransition = function() {
                    this.removeTransitionStyles(),
                        this.element.removeEventListener(m, this, !1),
                        this.isTransitioning = !1
                },
                h.prototype._removeStyles = function(a) {
                    var b = {};
                    for (var c in a) b[c] = "";
                    this.css(b)
                };
            var s = {
                transitionProperty: "",
                transitionDuration: ""
            };
            return h.prototype.removeTransitionStyles = function() {
                this.css(s)
            },
                h.prototype.removeElem = function() {
                    this.element.parentNode.removeChild(this.element),
                        this.emitEvent("remove", [this])
                },
                h.prototype.remove = function() {
                    if (!i || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
                    var a = this;
                    this.on("transitionEnd",
                        function() {
                            return a.removeElem(),
                                !0
                        }),
                        this.hide()
                },
                h.prototype.reveal = function() {
                    delete this.isHidden,
                        this.css({
                            display: ""
                        });
                    var a = this.layout.options;
                    this.transition({
                        from: a.hiddenStyle,
                        to: a.visibleStyle,
                        isCleaning: !0
                    })
                },
                h.prototype.hide = function() {
                    this.isHidden = !0,
                        this.css({
                            display: ""
                        });
                    var a = this.layout.options;
                    this.transition({
                        from: a.visibleStyle,
                        to: a.hiddenStyle,
                        isCleaning: !0,
                        onTransitionEnd: {
                            opacity: function() {
                                this.isHidden && this.css({
                                    display: "none"
                                })
                            }
                        }
                    })
                },
                h.prototype.destroy = function() {
                    this.css({
                        position: "",
                        left: "",
                        right: "",
                        top: "",
                        bottom: "",
                        transition: "",
                        transform: ""
                    })
                },
                h
        }
        var f = a.getComputedStyle,
            g = f ?
                function(a) {
                    return f(a, null)
                }: function(a) {
                return a.currentStyle
            };
        "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], e) : (a.Outlayer = {},
            a.Outlayer.Item = e(a.EventEmitter, a.getSize, a.getStyleProperty))
    } (window),
    function(a) {
        function b(a, b) {
            for (var c in b) a[c] = b[c];
            return a
        }
        function c(a) {
            return "[object Array]" === l.call(a)
        }
        function d(a) {
            var b = [];
            if (c(a)) b = a;
            else if (a && "number" == typeof a.length) for (var d = 0,
                                                                e = a.length; e > d; d++) b.push(a[d]);
            else b.push(a);
            return b
        }
        function e(a, b) {
            var c = n(b, a); - 1 !== c && b.splice(c, 1)
        }
        function f(a) {
            return a.replace(/(.)([A-Z])/g,
                function(a, b, c) {
                    return b + "-" + c
                }).toLowerCase()
        }
        function g(c, g, l, n, o, p) {
            function q(a, c) {
                if ("string" == typeof a && (a = h.querySelector(a)), !a || !m(a)) return void(i && i.error("Bad " + this.constructor.namespace + " element: " + a));
                this.element = a,
                    this.options = b({},
                        this.constructor.defaults),
                    this.option(c);
                var d = ++r;
                this.element.outlayerGUID = d,
                    s[d] = this,
                    this._create(),
                this.options.isInitLayout && this.layout()
            }
            var r = 0,
                s = {};
            return q.namespace = "outlayer",
                q.Item = p,
                q.defaults = {
                    containerStyle: {
                        position: "relative"
                    },
                    isInitLayout: !0,
                    isOriginLeft: !0,
                    isOriginTop: !0,
                    isResizeBound: !0,
                    isResizingContainer: !0,
                    transitionDuration: "0.4s",
                    hiddenStyle: {
                        opacity: 0,
                        transform: "scale(0.001)"
                    },
                    visibleStyle: {
                        opacity: 1,
                        transform: "scale(1)"
                    }
                },
                b(q.prototype, l.prototype),
                q.prototype.option = function(a) {
                    b(this.options, a)
                },
                q.prototype._create = function() {
                    this.reloadItems(),
                        this.stamps = [],
                        this.stamp(this.options.stamp),
                        b(this.element.style, this.options.containerStyle),
                    this.options.isResizeBound && this.bindResize()
                },
                q.prototype.reloadItems = function() {
                    this.items = this._itemize(this.element.children)
                },
                q.prototype._itemize = function(a) {
                    for (var b = this._filterFindItemElements(a), c = this.constructor.Item, d = [], e = 0, f = b.length; f > e; e++) {
                        var g = b[e],
                            h = new c(g, this);
                        d.push(h)
                    }
                    return d
                },
                q.prototype._filterFindItemElements = function(a) {
                    a = d(a);
                    for (var b = this.options.itemSelector,
                             c = [], e = 0, f = a.length; f > e; e++) {
                        var g = a[e];
                        if (m(g)) if (b) {
                            o(g, b) && c.push(g);
                            for (var h = g.querySelectorAll(b), i = 0, j = h.length; j > i; i++) c.push(h[i])
                        } else c.push(g)
                    }
                    return c
                },
                q.prototype.getItemElements = function() {
                    for (var a = [], b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].element);
                    return a
                },
                q.prototype.layout = function() {
                    this._resetLayout(),
                        this._manageStamps();
                    var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant: !this._isLayoutInited;
                    this.layoutItems(this.items, a),
                        this._isLayoutInited = !0
                },
                q.prototype._init = q.prototype.layout,
                q.prototype._resetLayout = function() {
                    this.getSize()
                },
                q.prototype.getSize = function() {
                    this.size = n(this.element)
                },
                q.prototype._getMeasurement = function(a, b) {
                    var c, d = this.options[a];
                    d ? ("string" == typeof d ? c = this.element.querySelector(d) : m(d) && (c = d), this[a] = c ? n(c)[b] : d) : this[a] = 0
                },
                q.prototype.layoutItems = function(a, b) {
                    a = this._getItemsForLayout(a),
                        this._layoutItems(a, b),
                        this._postLayout()
                },
                q.prototype._getItemsForLayout = function(a) {
                    for (var b = [], c = 0, d = a.length; d > c; c++) {
                        var e = a[c];
                        e.isIgnored || b.push(e)
                    }
                    return b
                },
                q.prototype._layoutItems = function(a, b) {
                    function c() {
                        d.emitEvent("layoutComplete", [d, a])
                    }
                    var d = this;
                    if (!a || !a.length) return void c();
                    this._itemsOn(a, "layout", c);
                    for (var e = [], f = 0, g = a.length; g > f; f++) {
                        var h = a[f],
                            i = this._getItemLayoutPosition(h);
                        i.item = h,
                            i.isInstant = b || h.isLayoutInstant,
                            e.push(i)
                    }
                    this._processLayoutQueue(e)
                },
                q.prototype._getItemLayoutPosition = function() {
                    return {
                        x: 0,
                        y: 0
                    }
                },
                q.prototype._processLayoutQueue = function(a) {
                    for (var b = 0,
                             c = a.length; c > b; b++) {
                        var d = a[b];
                        this._positionItem(d.item, d.x, d.y, d.isInstant)
                    }
                },
                q.prototype._positionItem = function(a, b, c, d) {
                    d ? a.goTo(b, c) : a.moveTo(b, c)
                },
                q.prototype._postLayout = function() {
                    this.resizeContainer()
                },
                q.prototype.resizeContainer = function() {
                    if (this.options.isResizingContainer) {
                        var a = this._getContainerSize();
                        a && (this._setContainerMeasure(a.width, !0), this._setContainerMeasure(a.height, !1))
                    }
                },
                q.prototype._getContainerSize = k,
                q.prototype._setContainerMeasure = function(a, b) {
                    if (void 0 !== a) {
                        var c = this.size;
                        c.isBorderBox && (a += b ? c.paddingLeft + c.paddingRight + c.borderLeftWidth + c.borderRightWidth: c.paddingBottom + c.paddingTop + c.borderTopWidth + c.borderBottomWidth),
                            a = Math.max(a, 0),
                            this.element.style[b ? "width": "height"] = a + "px"
                    }
                },
                q.prototype._itemsOn = function(a, b, c) {
                    function d() {
                        return e++,
                        e === f && c.call(g),
                            !0
                    }
                    for (var e = 0,
                             f = a.length,
                             g = this,
                             h = 0,
                             i = a.length; i > h; h++) {
                        var j = a[h];
                        j.on(b, d)
                    }
                },
                q.prototype.ignore = function(a) {
                    var b = this.getItem(a);
                    b && (b.isIgnored = !0)
                },
                q.prototype.unignore = function(a) {
                    var b = this.getItem(a);
                    b && delete b.isIgnored
                },
                q.prototype.stamp = function(a) {
                    if (a = this._find(a)) {
                        this.stamps = this.stamps.concat(a);
                        for (var b = 0,
                                 c = a.length; c > b; b++) {
                            var d = a[b];
                            this.ignore(d)
                        }
                    }
                },
                q.prototype.unstamp = function(a) {
                    if (a = this._find(a)) for (var b = 0,
                                                    c = a.length; c > b; b++) {
                        var d = a[b];
                        e(d, this.stamps),
                            this.unignore(d)
                    }
                },
                q.prototype._find = function(a) {
                    return a ? ("string" == typeof a && (a = this.element.querySelectorAll(a)), a = d(a)) : void 0
                },
                q.prototype._manageStamps = function() {
                    if (this.stamps && this.stamps.length) {
                        this._getBoundingRect();
                        for (var a = 0,
                                 b = this.stamps.length; b > a; a++) {
                            var c = this.stamps[a];
                            this._manageStamp(c)
                        }
                    }
                },
                q.prototype._getBoundingRect = function() {
                    var a = this.element.getBoundingClientRect(),
                        b = this.size;
                    this._boundingRect = {
                        left: a.left + b.paddingLeft + b.borderLeftWidth,
                        top: a.top + b.paddingTop + b.borderTopWidth,
                        right: a.right - (b.paddingRight + b.borderRightWidth),
                        bottom: a.bottom - (b.paddingBottom + b.borderBottomWidth)
                    }
                },
                q.prototype._manageStamp = k,
                q.prototype._getElementOffset = function(a) {
                    var b = a.getBoundingClientRect(),
                        c = this._boundingRect,
                        d = n(a),
                        e = {
                            left: b.left - c.left - d.marginLeft,
                            top: b.top - c.top - d.marginTop,
                            right: c.right - b.right - d.marginRight,
                            bottom: c.bottom - b.bottom - d.marginBottom
                        };
                    return e
                },
                q.prototype.handleEvent = function(a) {
                    var b = "on" + a.type;
                    this[b] && this[b](a)
                },
                q.prototype.bindResize = function() {
                    this.isResizeBound || (c.bind(a, "resize", this), this.isResizeBound = !0)
                },
                q.prototype.unbindResize = function() {
                    this.isResizeBound && c.unbind(a, "resize", this),
                        this.isResizeBound = !1
                },
                q.prototype.onresize = function() {
                    function a() {
                        b.resize(),
                            delete b.resizeTimeout
                    }
                    this.resizeTimeout && clearTimeout(this.resizeTimeout);
                    var b = this;
                    this.resizeTimeout = setTimeout(a, 100)
                },
                q.prototype.resize = function() {
                    this.isResizeBound && this.needsResizeLayout() && this.layout()
                },
                q.prototype.needsResizeLayout = function() {
                    var a = n(this.element),
                        b = this.size && a;
                    return b && a.innerWidth !== this.size.innerWidth
                },
                q.prototype.addItems = function(a) {
                    var b = this._itemize(a);
                    return b.length && (this.items = this.items.concat(b)),
                        b
                },
                q.prototype.appended = function(a) {
                    var b = this.addItems(a);
                    b.length && (this.layoutItems(b, !0), this.reveal(b))
                },
                q.prototype.prepended = function(a) {
                    var b = this._itemize(a);
                    if (b.length) {
                        var c = this.items.slice(0);
                        this.items = b.concat(c),
                            this._resetLayout(),
                            this._manageStamps(),
                            this.layoutItems(b, !0),
                            this.reveal(b),
                            this.layoutItems(c)
                    }
                },
                q.prototype.reveal = function(a) {
                    var b = a && a.length;
                    if (b) for (var c = 0; b > c; c++) {
                        var d = a[c];
                        d.reveal()
                    }
                },
                q.prototype.hide = function(a) {
                    var b = a && a.length;
                    if (b) for (var c = 0; b > c; c++) {
                        var d = a[c];
                        d.hide()
                    }
                },
                q.prototype.getItem = function(a) {
                    for (var b = 0,
                             c = this.items.length; c > b; b++) {
                        var d = this.items[b];
                        if (d.element === a) return d
                    }
                },
                q.prototype.getItems = function(a) {
                    if (a && a.length) {
                        for (var b = [], c = 0, d = a.length; d > c; c++) {
                            var e = a[c],
                                f = this.getItem(e);
                            f && b.push(f)
                        }
                        return b
                    }
                },
                q.prototype.remove = function(a) {
                    a = d(a);
                    var b = this.getItems(a);
                    if (b && b.length) {
                        this._itemsOn(b, "remove",
                            function() {
                                this.emitEvent("removeComplete", [this, b])
                            });
                        for (var c = 0,
                                 f = b.length; f > c; c++) {
                            var g = b[c];
                            g.remove(),
                                e(g, this.items)
                        }
                    }
                },
                q.prototype.destroy = function() {
                    var a = this.element.style;
                    a.height = "",
                        a.position = "",
                        a.width = "";
                    for (var b = 0,
                             c = this.items.length; c > b; b++) {
                        var d = this.items[b];
                        d.destroy()
                    }
                    this.unbindResize(),
                        delete this.element.outlayerGUID,
                    j && j.removeData(this.element, this.constructor.namespace)
                },
                q.data = function(a) {
                    var b = a && a.outlayerGUID;
                    return b && s[b]
                },
                q.create = function(a, c) {
                    function d() {
                        q.apply(this, arguments)
                    }
                    return Object.create ? d.prototype = Object.create(q.prototype) : b(d.prototype, q.prototype),
                        d.prototype.constructor = d,
                        d.defaults = b({},
                            q.defaults),
                        b(d.defaults, c),
                        d.prototype.settings = {},
                        d.namespace = a,
                        d.data = q.data,
                        d.Item = function() {
                            p.apply(this, arguments)
                        },
                        d.Item.prototype = new p,
                        g(function() {
                            for (var b = f(a), c = h.querySelectorAll(".js-" + b), e = "data-" + b + "-options", g = 0, k = c.length; k > g; g++) {
                                var l, m = c[g],
                                    n = m.getAttribute(e);
                                try {
                                    l = n && JSON.parse(n)
                                } catch(o) {
                                    i && i.error("Error parsing " + e + " on " + m.nodeName.toLowerCase() + (m.id ? "#" + m.id: "") + ": " + o);
                                    continue
                                }
                                var p = new d(m, l);
                                j && j.data(m, a, p)
                            }
                        }),
                    j && j.bridget && j.bridget(a, d),
                        d
                },
                q.Item = p,
                q
        }
        var h = a.document,
            i = a.console,
            j = a.jQuery,
            k = function() {},
            l = Object.prototype.toString,
            m = "object" == typeof HTMLElement ?
                function(a) {
                    return a instanceof HTMLElement
                }: function(a) {
                return a && "object" == typeof a && 1 === a.nodeType && "string" == typeof a.nodeName
            },
            n = Array.prototype.indexOf ?
                function(a, b) {
                    return a.indexOf(b)
                }: function(a, b) {
                for (var c = 0,
                         d = a.length; d > c; c++) if (a[c] === b) return c;
                return - 1
            };
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], g) : a.Outlayer = g(a.eventie, a.docReady, a.EventEmitter, a.getSize, a.matchesSelector, a.Outlayer.Item)
    } (window),
    function(a) {
        function b(a, b) {
            var d = a.create("masonry");
            return d.prototype._resetLayout = function() {
                this.getSize(),
                    this._getMeasurement("columnWidth", "outerWidth"),
                    this._getMeasurement("gutter", "outerWidth"),
                    this.measureColumns();
                var a = this.cols;
                for (this.colYs = []; a--;) this.colYs.push(0);
                this.maxY = 0
            },
                d.prototype.measureColumns = function() {
                    if (this.getContainerWidth(), !this.columnWidth) {
                        var a = this.items[0],
                            c = a && a.element;
                        this.columnWidth = c && b(c).outerWidth || this.containerWidth
                    }
                    this.columnWidth += this.gutter,
                        this.cols = Math.floor((this.containerWidth + this.gutter) / this.columnWidth),
                        this.cols = Math.max(this.cols, 1)
                },
                d.prototype.getContainerWidth = function() {
                    var a = this.options.isFitWidth ? this.element.parentNode: this.element,
                        c = b(a);
                    this.containerWidth = c && c.innerWidth
                },
                d.prototype._getItemLayoutPosition = function(a) {
                    a.getSize();
                    var b = a.size.outerWidth % this.columnWidth,
                        d = b && 1 > b ? "round": "ceil",
                        e = Math[d](a.size.outerWidth / this.columnWidth);
                    e = Math.min(e, this.cols);
                    for (var f = this._getColGroup(e), g = Math.min.apply(Math, f), h = c(f, g), i = {
                            x: this.columnWidth * h,
                            y: g
                        },
                             j = g + a.size.outerHeight, k = this.cols + 1 - f.length, l = 0; k > l; l++) this.colYs[h + l] = j;
                    return i
                },
                d.prototype._getColGroup = function(a) {
                    if (2 > a) return this.colYs;
                    for (var b = [], c = this.cols + 1 - a, d = 0; c > d; d++) {
                        var e = this.colYs.slice(d, d + a);
                        b[d] = Math.max.apply(Math, e)
                    }
                    return b
                },
                d.prototype._manageStamp = function(a) {
                    var c = b(a),
                        d = this._getElementOffset(a),
                        e = this.options.isOriginLeft ? d.left: d.right,
                        f = e + c.outerWidth,
                        g = Math.floor(e / this.columnWidth);
                    g = Math.max(0, g);
                    var h = Math.floor(f / this.columnWidth);
                    h -= f % this.columnWidth ? 0 : 1,
                        h = Math.min(this.cols - 1, h);
                    for (var i = (this.options.isOriginTop ? d.top: d.bottom) + c.outerHeight, j = g; h >= j; j++) this.colYs[j] = Math.max(i, this.colYs[j])
                },
                d.prototype._getContainerSize = function() {
                    this.maxY = Math.max.apply(Math, this.colYs);
                    var a = {
                        height: this.maxY
                    };
                    return this.options.isFitWidth && (a.width = this._getContainerFitWidth()),
                        a
                },
                d.prototype._getContainerFitWidth = function() {
                    for (var a = 0,
                             b = this.cols; --b && 0 === this.colYs[b];) a++;
                    return (this.cols - a) * this.columnWidth - this.gutter
                },
                d.prototype.needsResizeLayout = function() {
                    var a = this.containerWidth;
                    return this.getContainerWidth(),
                    a !== this.containerWidth
                },
                d
        }
        var c = Array.prototype.indexOf ?
            function(a, b) {
                return a.indexOf(b)
            }: function(a, b) {
            for (var c = 0,
                     d = a.length; d > c; c++) {
                var e = a[c];
                if (e === b) return c
            }
            return - 1
        };
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], b) : a.Masonry = b(a.Outlayer, a.getSize)
    } (window);
function PopUp() {
    var self = this,
        History = window.History;
    if (!History.enabled) {
        return;
    }
    $.extend(self, {
        init: function() {
            self.registerEvents();
        },
        registerEvents: function() {
            $('body').on('click', 'a[popup="true"]', self.loadPopUp);
            window.addEventListener("popstate",
                function(e) {
                    var path = $('html').attr('data-path');
                    self.closeZoom(false, path && path != window.location.pathname);
                });
        },
        loadPopUp: function(e) {
            e.stopImmediatePropagation();
            e.stopPropagation();
            e.preventDefault();
            self.createPage.apply(this);
            self.fetchPage.apply(this);
            return false;
        },
        getLoader: function() {
            return '<div style="text-align: center; padding: 50px; background: #fff; ">' + '<img src = "https://img.dealspluscdn.com/images/v4/plusLoader.gif" class="mainLoaderImage" alt = "loader">' + '</div>'
        },
        getZoomContent: function() {
            return '<div class="zoomContent fourColumns">' + self.getLoader() + '</div>';
        },
        createPage: function() {
            if ($('#zoomScroll').length) {
                self.addPage();
                return;
            }
            $('body').append($('<div id="zoomScroll">' + '<div id="zoomWrapper">' + '<a href="javascript:void(0);" id="zoomClose"><span class="icon-font-close"></span></a>' + self.getZoomContent() + '</div>' + '</div>'));
            $('html').addClass('noScroll');
            $('#zoomClose').click(function() {
                self.closeZoom();
            });
            $("#zoomScroll").click(function(e) {
                if (typeof $(e.target).attr('id') !== 'undefined' && $(e.target).attr('id') === 'zoomScroll') {
                    self.closeZoom();
                }
            });
            if ($(this).attr('hasrightside') === 'true') {
                $('#zoomWrapper').addClass('withRightSide');
            }
        },
        addPage: function() {
            $('.zoomContent').hide();
            $('#zoomWrapper').append(self.getZoomContent());
        },
        closeZoom: function(popState, force) {
            var zoomScroll = $('#zoomScroll');
            if (typeof popState === 'undefined') {
                popState = true;
            }
            if (typeof force === 'undefined') {
                force = false;
            }
            if (!zoomScroll.length) {
                if (force) {
                    window.location.reload();
                }
                return;
            }
            var pages = zoomScroll.find('.zoomContent').length;
            if (pages <= 1 || popState) {
                zoomScroll.fadeOut(300,
                    function() {
                        $(this).remove();
                    });
                $('html').removeClass('noScroll');
                if (popState) {
                    history.go( - 1 * pages);
                }
            } else {
                zoomScroll.find('.zoomContent:last').fadeOut(300,
                    function() {
                        $(this).remove();
                    });
                var container = zoomScroll.find('.zoomContent:hidden:last');
                container.fadeIn(300);
                container.find('[data-masonry]').each(function() {
                    $(this).data('masonry').layout();
                });
                zoomScroll.scrollTop(0);
            }
        },
        fetchPage: function() {
            var href = $(this).attr('href');
            if (!href) {
                return;
            }
            $.ajax({
                type: 'GET',
                url: href,
                dataType: 'json',
                success: function(resp) {
                    $('.zoomContent:last').html(resp.html);
                    document.title = resp.title;
                    var relativeUrl = href.replace(window.location.protocol + '//' + window.location.hostname, '');
                    History.replaceState({
                            url: href
                        },
                        resp.title, relativeUrl);
                    if (typeof window._gaq !== 'undefined') {
                        window._gaq.push(['_trackPageview', relativeUrl]);
                    }
                }
            });
            History.pushState({
                    url: href
                },
                null, href);
        }
    });
    $(document).ready(function() {
        self.init();
    });
}
new PopUp();
function Buttons() {
    var self = this;
    $.extend(self, {
        init: function() {
            self.registerEvents();
            self.viewTypeButton();
            self.saveButton();
            self.followButton();
            self.checkLoginAction();
        },
        registerEvents: function() {
            var body = $('body');
            if (! ("ontouchstart" in document.documentElement)) {
                body.on('mouseover', '.icon-plus-sign-button-large',
                    function() {
                        $(this).addClass('icon-plus-sign-button-large-filled');
                    }).on('mouseout', '.icon-plus-sign-button-large',
                    function() {
                        $(this).removeClass('icon-plus-sign-button-large-filled');
                    }).on('mouseover', '.icon-plus-sign-button',
                    function() {
                        $(this).addClass('icon-plus-sign-button-filled');
                    }).on('mouseout', '.icon-plus-sign-button',
                    function() {
                        $(this).removeClass('icon-plus-sign-button-filled');
                    }).on('mouseover', '.icon-vote-up-button',
                    function() {
                        $(this).addClass('icon-vote-up-button-filled');
                    }).on('mouseout', '.icon-vote-up-button',
                    function() {
                        $(this).removeClass('icon-vote-up-button-filled');
                    }).on('mouseover', '.followCollectionButton', self.fillHeart).on('mouseout', '.followCollectionButton', self.hollowHeart).on('mouseover', '.followAllCollectionButton', self.fillHeart).on('mouseout', '.followAllCollectionButton', self.hollowHeart).on('mouseover', '.followStoreButton', self.fillHeart).on('mouseout', '.followStoreButton', self.hollowHeart).on('mouseover', '.followCategoryButton', self.fillHeart).on('mouseout', '.followCategoryButton', self.hollowHeart);
            }
            if (! (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
                body.on('mouseenter', '.itemTile', self.showTileButtons).on('mouseleave', '.itemTile', self.hideTileButtons).on('click', '.shareButtonSmall', self.toggleShareButtons);
            }
            body.on('click', '.voteItemUp', true, self.voteItemUp).on('click', '.voteItemTile', self.voteItemTile).on('click', '.tileFeedbackSubmit', self.submitFeedback).on('click', '.skipFeedbackSubmit', self.skipFeedback).on('click', '.followCollectionButton', self.toggleFollowCollection).on('click', '.followAllCollectionButton', self.toggleAllCollection).on('click', '.followStoreButton', self.toggleFollowStore).on('click', '.followCategoryButton', self.toggleFollowCategory);
        },
        skipFeedback: function() {
            $(this).closest('div.voteFeedback').slideUp();
        },
        voteItemTile: function() {
            if (!window.isLoggedIn) {
                new LoginDialog("You need to login or register before you can vote.");
                $(this).blur();
                return;
            }
            var container = $(this).closest('.itemButtonHolder');
            var active = $(this).hasClass('active');
            var oldVote = container.data('vote-count');
            var itemTile = $(this).closest('div.itemTile');
            var id = itemTile.data('id');
            var type = itemTile.data('type');
            var feedbackBoxUp = container.find('div.voteUpFeedback');
            var feedbackBoxDown = container.find('div.voteDownFeedback');
            var vote = 0;
            if ($(this).hasClass('icon-font-upvote')) {
                if (active) {
                    $(this).removeClass('active');
                    feedbackBoxUp.slideUp();
                    itemTile.find('.extraInfo .likesCount').html(--oldVote + " like" + (oldVote > 1 ? 's': ''));
                } else {
                    $(this).addClass('active');
                    if (container.find('a.icon-font-downvote').hasClass('active')) {
                        container.find('a.icon-font-downvote').removeClass('active');
                    }
                    itemTile.find('.extraInfo .likesCount').html(++oldVote + " like" + (oldVote > 1 ? 's': ''));
                    vote = 1;
                    feedbackBoxUp.slideDown();
                    feedbackBoxDown.hide();
                }
            } else {
                if (active) {
                    $(this).removeClass('active');
                    feedbackBoxDown.slideUp();
                } else {
                    $(this).addClass('active');
                    if (container.find('a.icon-font-upvote').hasClass('active')) {
                        container.find('a.icon-font-upvote').removeClass('active');
                        itemTile.find('.extraInfo .likesCount').html(--oldVote + " like" + (oldVote > 1 ? 's': ''));
                    }
                    vote = -1;
                    feedbackBoxDown.slideDown();
                    feedbackBoxUp.hide();
                }
            }
            container.data('vote-count', oldVote);
            if (type == 1) {
                $.post('/Deal/vote', {
                    dealId: id,
                    vote: vote
                });
            } else if (type == 2) {
                $.post('/Coupon/vote', {
                    couponId: id,
                    vote: vote
                });
            } else if (type == 5) {
                $.post('/Post/votePost', {
                    postId: id,
                    postType: 5,
                    vote: active ? 0 : 1,
                    unVote: active ? 1 : 0
                });
            }
        },
        submitFeedback: function() {
            var wrapper = $(this).closest('div.itemTile');
            var postId = wrapper.attr('data-id');
            var postType = wrapper.data('type');
            var container, feedback, flagValue;
            if (postType == 1) {
                if ($(this).hasClass('voteUpFeedbackSubmit')) {
                    container = $(this).closest('.voteUpFeedback');
                    feedback = (container.find('textarea').val()).trim();
                    if (feedback) {
                        $.ajax({
                            url: "/Post/comment",
                            data: {
                                postId: postId,
                                postType: 1,
                                content: feedback,
                                quickComment: true
                            },
                            type: "POST",
                            success: function(res) {
                                if (wrapper.hasClass('gallery-cell') || res.error) {
                                    return;
                                }
                                if (wrapper.find('.tileCommentBox').length > 0) {
                                    wrapper.find('.tileCommentBox').before(res.html);
                                } else {
                                    wrapper.find('.itemContent').append(res.html);
                                }
                                container.find('textarea').val('');
                                var masonryItems = wrapper.closest('div.itemPage').data('masonry');
                                masonryItems.layout();
                            }
                        })
                    } else {
                        alert("Your feedback cannot be empty!");
                    }
                } else {
                    container = $(this).closest('.voteDownFeedback');
                    flagValue = $(this).data('flag-value');
                    $.ajax({
                        url: "/flag_deal.php",
                        type: "POST",
                        data: {
                            dealid: postId,
                            flag_value: flagValue
                        }
                    })
                }
            } else if (postType == 2) {
                var data = {};
                var cCode2;
                if ($(this).hasClass('voteUpFeedbackSubmit')) {
                    container = $(this).closest('.voteUpFeedback');
                    cCode2 = container.find('input').val();
                    feedback = (container.find('textarea').val()).trim();
                    data = {
                        couponId: postId,
                        c_code2: cCode2,
                        comment: feedback
                    }
                } else {
                    container = $(this).closest('.voteDownFeedback');
                    cCode2 = container.find('input').val();
                    feedback = $(this).data('reason');
                    data = {
                        couponId: postId,
                        c_code2: cCode2,
                        reason: feedback
                    }
                }
                $.ajax({
                    url: "/Coupon/postComment",
                    type: "POST",
                    data: data
                })
            }
            container.slideUp();
        },
        toggleShareButtons: function() {
            var shareButtons = $(this).next('.shareButtons');
            shareButtons.slideToggle(200);
            var searchInput = shareButtons.find('.shareSearchInput');
            if (!searchInput.hasClass('tt-query')) {
                self.setUpShareSearch.call(searchInput, window.fbAccessToken);
            }
            setTimeout(function() {
                    searchInput.focus()
                },
                0);
        },
        setUpShareSearch: function(token) {
            var $this = $(this);
            $this.typeahead([{
                name: 'friends',
                limit: 10,
                engine: {
                    compile: function(template) {
                        return {
                            render: function(context) {
                                console.log(context);
                                var t = template.replace(/\{\{(\w+)\}\}/g,
                                    function(match, p1) {
                                        return $('<div/>').html(context[p1] || '').html();
                                    });
                                if (context.type == 'email') {
                                    var $t = $(t);
                                    $t.addClass('email');
                                    $t.find(".userImage").remove();
                                    $t.find('.userDescription').remove();
                                    t = $t[0].outerHTML;
                                }
                                return t;
                            }
                        }
                    }
                },
                template: '<div class="autoCompleteRow">    <div class="autoCompleteLeft">        <img class="userImage" src="{{img}}" alt="{{name}}">        <div class="userInfo">            <div>{{name}}</div>            <div class="userDescription">                <img src="{{typeImage}}"> {{typeText}}            </div>        </div>    </div></div>',
                remote: '/User/getInviteFriends?e=1&q=%QUERY&token=' + token
            }]).on('typeahead:selected',
                function(e, data) {
                    $this.typeahead('setQuery', '');
                    var itemId = $this.attr('data-id');
                    var itemType = $this.attr('data-type');
                    $.post('/Index/shareItem', {
                            id: data.id,
                            type: data.type,
                            email: data.email,
                            itemId: itemId,
                            itemType: itemType
                        },
                        function(res) {
                            if (res.data == 'fb') {
                                FB.ui({
                                        method: 'send',
                                        link: res.link,
                                        to: data.id,
                                        app_id: '297671523608705'
                                    },
                                    function(response) {});
                            } else if (res.error) {
                                alert('Something went wrong. Please try to share again later.');
                            } else if (res.userMessage) {
                                alert(res.userMessage);
                            }
                        });
                    setTimeout(function() {
                            $this.focus()
                        },
                        0);
                });
        },
        showTileButtons: function() {
            if ($(this).hasClass('wiggle')) {
                return;
            }
            $(this).find('.itemHover').fadeIn(200);
            $(this).find('.itemButtonHolder').fadeIn(200);
            $(this).css('z-index', 10);
        },
        hideTileButtons: function() {
            $(this).find('.itemHover').hide();
            $(this).find('.itemButtonHolder').hide();
            $(this).css('z-index', 2);
        },
        checkLoginAction: function() {
            if (window.sessionStorage) {
                try {
                    var action = sessionStorage.getItem('loginAction');
                    if (action) {
                        action = action.split('|');
                        if (action.length == 2) {
                            if (action[0] == 'voteUp') {
                                var item = action[1].split(':');
                                if (item.length == 2) {
                                    var voteUpElem = $('.voteItemUp[data-value="' + item[1] + '"][data-type="' + item[0] + '"]');
                                    if (voteUpElem.length) {
                                        self.voteItemUp.apply(voteUpElem);
                                    }
                                    sessionStorage.removeItem('loginAction');
                                }
                            } else if (action[0] == 'followCollection') {
                                var collectionId = action[1];
                                var followCollectionElem = $('.followCollectionButton[data-id="' + collectionId + '"]');
                                if (followCollectionElem.length) {
                                    self.toggleFollowCollection.apply(followCollectionElem, [null, true]);
                                }
                                sessionStorage.removeItem('loginAction');
                            } else if (action[0] == 'followAllCollections') {
                                var userId = action[1];
                                var followAllCollectionsElem = $('.followAllCollectionButton[data-id="' + userId + '"]');
                                if (followAllCollectionsElem.length) {
                                    self.toggleAllCollection.apply(followAllCollectionsElem, [null, true]);
                                }
                                sessionStorage.removeItem('loginAction');
                            } else if (action[0] == 'followStore') {
                                var storeId = action[1];
                                var followStoreElem = $('.followStoreButton[data-id="' + storeId + '"]');
                                if (followStoreElem.length) {
                                    self.toggleFollowStore.apply(followStoreElem, [null, true]);
                                }
                                sessionStorage.removeItem('loginAction');
                            } else if (action[0] == 'followCategory') {
                                var categoryId = action[1];
                                var followCategoryElem = $('.followCategoryButton[data-id="' + categoryId + '"]');
                                if (followCategoryElem.length) {
                                    self.toggleFollowStore.apply(followCategoryElem, [null, true]);
                                }
                                sessionStorage.removeItem('loginAction');
                            }
                        }
                    }
                } catch(e) {}
            }
        },
        fillHeart: function() {
            if ($(this).find('img').hasClass('icon-heart-dark')) {
                $(this).find('img').addClass('icon-heart-dark-filled');
            } else {
                $(this).find('img').addClass('icon-heart-light-filled');
            }
        },
        hollowHeart: function() {
            if ($(this).find('img').hasClass('icon-heart-dark')) {
                $(this).find('img').removeClass('icon-heart-dark-filled');
            } else {
                $(this).find('img').removeClass('icon-heart-light-filled');
            }
        },
        voteItemUp: function(e, performVote) {
            if (typeof performVote == 'undefined') {
                performVote = true;
            }
            var img = $(this).find('img');
            var active = img.hasClass('filled');
            var id = $(this).attr('data-value');
            var type = $(this).attr('data-type');
            if ($(this).attr('data-login') !== undefined) {
                new LoginDialog('You need to login or register before you can vote.', 'voteUp|' + type + ':' + id);
                return;
            }
            var voteCount = $(this).parent().find('.voteCount');
            var voteAmount = parseInt($(this).attr('data-vote'));
            var current = parseInt(voteCount.text());
            var newVote = current + ((active ? -1 : 1) * voteAmount);
            if (newVote < 0) {
                newVote = 0;
            }
            voteCount.text(newVote);
            if (active) {
                img.removeClass('filled');
            } else {
                img.addClass('filled');
            }
            if (performVote) {
                if (type == 1) {
                    $.post('/Deal/vote', {
                        dealId: id,
                        vote: active ? 0 : 1
                    });
                } else if (type == 2) {
                    $.post('/Coupon/vote', {
                        couponId: id,
                        vote: active ? 0 : 1
                    });
                } else if (type == 5) {
                    $.post('/Post/votePost', {
                        postId: id,
                        postType: 5,
                        vote: active ? 0 : 1,
                        unVote: active ? 1 : 0
                    });
                }
            }
        },
        viewTypeButton: function setUpViewTypeButton() {
            $('.viewType').click(function clickedViewType() {
                var container = $($(this).attr('data-container'));
                if ($(this).hasClass('icon-row')) {
                    container.addClass('row').removeClass('grid');
                    $(this).addClass('icon-grid').removeClass('icon-row');
                    saveViewType('row');
                } else {
                    container.addClass('grid').removeClass('row');
                    $(this).addClass('icon-row').removeClass('icon-grid');
                    saveViewType('grid');
                }
            });
            function saveViewType(type) {
                var date = new Date();
                date.setDate(date.getDate() + 365);
                var value = type + ";path=/; expires=" + date.toUTCString();
                document.cookie = "viewType=" + value;
            }
        },
        saveButton: function setUpSaveButton() {
            var button = $('.saveButton');
            button.click(function clickedSaveButton() {
                if (!window.isLoggedIn) {
                    if ($(this).attr('data-login-required')) {
                        return;
                    } else {
                        alert('You must be logged in to save.');
                        return;
                    }
                }
                var saving = !$(this).hasClass('saved') ? 1 : 0;
                var type = $(this).attr('data-save-type');
                var id = $(this).attr('data-save-id');
                var saveText = $(this).attr('data-save-text');
                var savedText = $(this).attr('data-saved-text');
                function toggleButton() {
                    if (saving) {
                        $(this).addClass('saved');
                        $(this).text(savedText);
                    } else {
                        $(this).removeClass('saved');
                        $(this).text(saveText);
                    }
                }
                toggleButton.apply(this);
                var self = this;
                $.post('/User.json/savePost', {
                        saving: saving,
                        type: type,
                        id: id
                    },
                    function(res) {
                        if (res.error) {
                            if (res.url) {
                                window.location = res.url;
                                return;
                            }
                            alert(res.userMessage);
                            saving = !saving;
                            toggleButton.apply(self);
                        } else {
                            if (res.level) {
                                var el = $(self).next('.saveAmount');
                                var text, score;
                                if (el.length) {
                                    text = el.text();
                                    score = parseInt(text) + (res.level * (saving ? 1 : -1));
                                    el.text(score + ' Saved');
                                } else {
                                    el = $(self).parents('.itemContent').find('.itemSaved > span');
                                    text = el.text();
                                    score = parseInt(text) + (res.level * (saving ? 1 : -1));
                                    el.text(score);
                                }
                            }
                        }
                    });
            });
        },
        followButton: function setUpFollowButton() {
            var button = $('.followButton');
            button.click(function clickedFollowButton() {
                var following = !$(this).hasClass('following') ? 1 : 0;
                var id = $(this).attr('data-follow-id');
                var followText = $(this).attr('data-follow-text');
                var followingText = $(this).attr('data-following-text');
                var followType = $(this).attr('data-follow-type') || 'store';
                if (!id) {
                    return;
                }
                function toggleButton() {
                    if (following) {
                        $(this).addClass('following');
                        $(this).text(followingText);
                    } else {
                        $(this).removeClass('following');
                        $(this).text(followText);
                    }
                }
                toggleButton.apply(this);
                var self = this;
                $.post('/User.json/follow' + (followType.charAt(0).toUpperCase() + followType.slice(1)), {
                        following: following,
                        id: id
                    },
                    function(res) {
                        if (res.error) {
                            if (res.url) {
                                window.location = res.url;
                                return;
                            }
                            alert(res.userMessage);
                            following = !following;
                            toggleButton.apply(self);
                        }
                    });
            });
        },
        toggleFollowCollection: function(e, follow) {
            var activeText = $(this).attr('data-active-text');
            var defaultText = $(this).attr('data-default-text');
            var collectionId = $(this).attr('data-id');
            if ($(this).attr('data-login') !== undefined) {
                new LoginDialog('You need to login or register before you can ' + defaultText + '.', 'followCollection|' + collectionId);
                return;
            }
            var img = $(this).find('img');
            var span = $(this).find('span');
            var isActive = img.hasClass('filled');
            if (follow === true && isActive) {
                return;
            }
            function toggleButton() {
                span.text(isActive ? defaultText: activeText);
                if (isActive) {
                    img.removeClass('filled');
                } else {
                    img.addClass('filled');
                }
            }
            toggleButton();
            isActive = !isActive;
            $.post('/Collection/follow', {
                    collectionId: collectionId
                },
                function(res) {
                    if (res.error) {
                        alert(res.errorMessage);
                        toggleButton();
                    }
                });
        },
        toggleAllCollection: function(e, follow) {
            var activeText = $(this).attr('data-active-text');
            var defaultText = $(this).attr('data-default-text');
            var userId = $(this).attr('data-id');
            if ($(this).attr('data-login') !== undefined) {
                new LoginDialog('You need to login or register before you can ' + defaultText + '.', 'followAllCollections|' + userId);
                return;
            }
            var img = $(this).find('img');
            var span = $(this).find('span');
            var isActive = img.hasClass('filled');
            if (follow === true && isActive) {
                return;
            }
            function toggleButton() {
                span.text(isActive ? defaultText: activeText);
                if (isActive) {
                    img.removeClass('filled');
                } else {
                    img.addClass('filled');
                }
            }
            toggleButton();
            isActive = !isActive;
            $.post('/User/followUser', {
                    id: userId,
                    following: isActive ? 1 : 0
                },
                function(res) {
                    if (res.error) {
                        alert(res.errorMessage);
                        toggleButton();
                    }
                });
        },
        toggleFollowStore: function(e, followOnly) {
            var activeText = $(this).attr('data-active-text');
            var defaultText = $(this).attr('data-default-text');
            var storeId = $(this).attr('data-id');
            if ($(this).attr('data-login') !== undefined) {
                new LoginDialog('You need to login /register before you can subscribe', 'followStore|' + storeId);
                return;
            }
            if (typeof followOnly === 'undefined') {
                followOnly = false;
            }
            var spanText = $(this).find('span.followStoreText');
            var spanCheck = $(this).find('span.icon-font-check');
            var isActive = $(this).hasClass('active');
            if (followOnly && isActive) {
                return;
            }
            spanText.html(isActive ? defaultText: activeText);
            if (isActive) {
                spanCheck.hide();
                $(this).removeClass('active');
            } else {
                spanCheck.show();
                $(this).addClass('active');
            }
            isActive = !isActive;
            $.post('/User/followStore', {
                    id: storeId,
                    following: isActive ? 1 : 0
                },
                function(res) {
                    if (res.error) {
                        alert(res.errorMessage);
                        spanText.html(isActive ? defaultText: activeText);
                        if (isActive) {
                            spanCheck.hide();
                            $(this).removeClass('active');
                        } else {
                            spanCheck.show();
                            $(this).addClass('active');
                        }
                    }
                });
        },
        toggleFollowCategory: function(e, followOnly) {
            var activeText = $(this).attr('data-active-text');
            var defaultText = $(this).attr('data-default-text');
            var categoryId = $(this).attr('data-id');
            if ($(this).attr('data-login') !== undefined) {
                new LoginDialog('You need to login /register before you can follow', 'followCategory|' + categoryId);
                return;
            }
            if (typeof followOnly === 'undefined') {
                followOnly = false;
            }
            var button = $(this);
            var imgSpan = $(this).find('span.icon-font-heart');
            var textSpan = $(this).find('span:not(.icon-font-heart)');
            var isActive = imgSpan.hasClass('filled');
            if (followOnly && isActive) {
                return;
            }
            function toggleButton() {
                textSpan.text(isActive ? defaultText: activeText);
                if (isActive) {
                    imgSpan.removeClass('filled');
                    button.removeClass('followed');
                } else {
                    imgSpan.addClass('filled');
                    button.addClass('followed');
                }
            }
            toggleButton();
            isActive = !isActive;
            $.post('/User/followCategory', {
                    id: categoryId,
                    following: isActive ? 1 : 0
                },
                function(res) {
                    if (res.error) {
                        alert(res.errorMessage);
                        toggleButton();
                    }
                });
        }
    });
    self.init();
}
$(document).ready(function() {
    new Buttons();
});
function Util() {
    var self = this;
    $.extend(self, {
        init: function() {
            self.registerDomReady();
        },
        registerDomReady: function() {
            $(document).ready(function() {
                $('body').on('click', '[data-alert]', self.checkAgain);
            });
        },
        checkAgain: function(e) {
            var message = $(this).attr('data-alert') || "Are you sure you want to do this?";
            if (!confirm(message)) {
                e.preventDefault();
                e.stopImmediatePropagation();
                e.stopPropagation();
                return false;
            }
            return true;
        }
    });
    self.init();
}
var util = new Util();
function uPV(rId, rType, userId) {
    $.ajax({
        url: '/ajax/ajax.increasePageView.php',
        type: 'post',
        data: {
            rId: rId,
            rType: rType,
            userId: userId
        }
    });
}
function SimpleDialog(id, modal, allowClose) {
    var self = this;
    if (typeof allowClose === 'undefined') {
        allowClose = true;
    }
    $.extend(self, {
        content: null,
        dialog: null,
        init: function() {
            self.createDialog();
            $(window).resize(self.centerDialog);
            $(window).on('scrolledToItem', self.centerDialog);
            $('body', '#scrollingDiv').on('scrolledToItem', self.centerDialog)
        },
        showLoader: function() {
            self.content.html('<div class="dialogBody" style="text-align: center;"><img src = "https://img.dealspluscdn.com/images/v4/plusLoader.gif" class="mainLoaderImage" alt = "loader"></div>');
            self.addCloseButton();
        },
        addCloseButton: function() {
            self.content.prepend('<a href="javascript:void(0);" class="close"><span class="icon-font-close" style="font-size:18px; color: #4f234e;"></span></a>');
            self.content.find('.close').on('click', self.hide);
        },
        createDialog: function() {
            if ($('#' + id).length) {
                $('#' + id).remove();
            }
            if (typeof modal === 'undefined') {
                modal = false;
            }
            var modalHTML = '<div class="modalOverlay' + (modal ? '': ' transparent') + '"></div>';
            self.dialog = $('<div id="' + id + '" class="dialogHolder">' + modalHTML + '</div>');
            self.content = $('<div class="dialogContent"></div>');
            self.dialog.append(self.content);
            var body = $('body');
            body.append(self.dialog);
            resizeDialogHolder();
            self.centerDialog();
            var elem = self.dialog.find('.modalOverlay');
            if (allowClose) {
                elem.on('click',
                    function() {
                        self.hide();
                    });
            }
        },
        centerDialog: function() {
            centerDialog(self.content);
        },
        show: function() {
            self.dialog.fadeIn();
            self.centerDialog();
        },
        hide: function() {
            self.dialog.fadeOut();
        },
        html: function(html) {
            self.content.html(html);
            if (allowClose) {
                self.addCloseButton();
            }
            self.centerDialog();
        },
        load: function(url, show) {
            if (typeof show === 'undefined') {
                show = true;
            }
            if (show) {
                self.showLoader();
                self.show();
            }
            $.get(url,
                function(html) {
                    self.html(html);
                });
        }
    });
    self.init();
}
function resizeDialogHolder() {
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    var pos = {
        width: maskWidth,
        height: maskHeight
    };
}
$(window).resize(resizeDialogHolder);
window.center = function() {
    var hWnd = (arguments[0] != null) ? arguments[0] : {
        width: 0,
        height: 0
    };
    var offsetX = 0;
    var offsetY = 0;
    var offset = typeof hWnd.offset === 'boolean' ? hWnd.offset: true;
    if (offset) {
        if (!window.pageYOffset) {
            if (! (document.documentElement.scrollTop == 0)) {
                offsetY = document.documentElement.scrollTop;
                offsetX = document.documentElement.scrollLeft;
            } else {
                offsetY = document.body.scrollTop;
                offsetX = document.body.scrollLeft;
            }
        } else {
            offsetX = window.pageXOffset;
            offsetY = window.pageYOffset;
        }
    }
    var _x = (($(window).width() - hWnd.width) / 2) + offsetX;
    var _y = (($(window).height() - hWnd.height) / 2) + offsetY;
    return {
        x: _x,
        y: _y
    };
};
function centerDialog(dialog) {
    var width = dialog.outerWidth(true);
    var height = dialog.height();
    var center = window.center({
        width: width,
        height: height,
        offset: false
    });
    dialog.css({
        top: Math.min(Math.max(center.y, 0), 100),
        left: Math.max(center.x, 0)
    });
}
$(document).ready(function() {
    function centerAllDialogs() {
        $('.dialogHolder.show').each(function() {
            var dialog = $(this).find('.dialogContent');
            if (dialog.length) {
                $(this).fadeIn();
                centerDialog(dialog);
            }
        });
    }
    centerAllDialogs();
    $(window).resize(centerAllDialogs);
});
function Collection() {
    var self = this;
    $.extend(self, {
        addDialog: null,
        addToDPDialog: null,
        newCollectionId: -1,
        editMode: false,
        init: function() {
            self.registerEvents();
            self.checkLoginAction();
        },
        registerEvents: function() {
            $('body').on('click', '.addToCollection', self.toggleCollection).on('click', '.addToDPButton, #addToDPUserButton', self.showAddToDPDialog).on('click', '#addAnItem', self.showAddToDPDialog).on('click', '.editCollection', self.editCollection).on('click', '.leaveCollection', self.leaveCollection).on('click', '.saveCollection', self.saveCollection).on('click', '.deleteItem', self.deleteItem).on('click', '.editItem', self.toggleCollection).on('click', '.deleteCollection', self.deleteCollection).on('click', '.editCollectorsLinks', self.showEditCollectors).on('click', '.inviteUserIgnore', self.ignoreInvite).on('click', '.inviteUserAccept', self.acceptInvite).on('click', '.removeUserFromCollection', self.removeUserFromCollection).on('itemsAdded', self.checkMode);
        },
        checkLoginAction: function() {
            if (window.sessionStorage) {
                try {
                    var action = sessionStorage.getItem('loginAction');
                    if (action) {
                        if (action == 'addTo') {
                            self.showAddToDPDialog();
                            sessionStorage.removeItem('loginAction');
                        } else {
                            action = action.split('|');
                            if (action.length == 2) {
                                if (action[0] == 'add') {
                                    var collection = action[1].split(':');
                                    if (collection.length == 2) {
                                        self.showAddToCollection(collection[1], collection[0]);
                                        sessionStorage.removeItem('loginAction');
                                    }
                                }
                            }
                        }
                    }
                } catch(e) {}
            }
        },
        checkMode: function() {
            if ($(".dealsContainer").hasClass('editMode')) {
                self.turnOnWiggle();
            }
        },
        toggleCollection: function() {
            var id = $(this).attr('data-id');
            var type = $(this).attr('data-type');
            if ($(this).hasClass('active')) {
                self.removeCollection.apply(this, [id, type]);
            } else {
                self.showAddToCollection.apply(this, [id, type]);
            }
        },
        removeCollection: function(id, type) {},
        showAddToCollection: function(id, type) {
            if (!self.addDialog) {
                self.createAddDialog();
            }
            self.addDialog.showLoader();
            self.addDialog.show();
            var $this = $(this),
                move = $this.attr ? ($this.attr('data-move') ? 1 : 0) : 0,
                itemId = $this.attr('data-type') + '-' + $this.attr('data-id');
            $.get('/Collection/addDialog', {
                    id: id,
                    type: type,
                    url: window.location.href,
                    move: move ? 1 : 0
                },
                function(html) {
                    self.addDialog.html(html);
                    self.addDialog.content.find('.addIt').on('click',
                        function() {
                            self.addToCollection.apply(this, [id, type, itemId]);
                        }).focus();
                    self.addDialog.content.find('.cancel').on('click',
                        function() {
                            self.addDialog.hide();
                        });
                    var newCollection = self.addDialog.content.find('.newCollection');
                    var collectionSelect = self.addDialog.content.find('.collection');
                    $('.select2-input, .select2-focusser').on("focus",
                        function(event) {
                            event.stopPropagation();
                            event.preventDefault();
                        });
                    newCollection.on('keydown',
                        function(e) {
                            if (parseInt(e.which) === 13) {
                                self.addDialog.content.find('.addIt').click();
                            }
                        });
                });
        },
        addToCollection: function(id, type, itemId) {
            var errorBox = self.addDialog.content.find('.error');
            var collection = self.addDialog.content.find('.collectionSelect2');
            var newCollection = self.addDialog.content.find('.newCollection');
            var commentElem = self.addDialog.content.find('textarea[name="comment"]');
            var collectionId = parseInt(collection.select2('val'));
            var collectionName = collection.select2('val');
            errorBox.hide();
            var comment = commentElem.length ? commentElem.val() : '';
            if ((isNaN(collectionId) || collectionId == 0) && collectionName.length == 0) {
                errorBox.html('Collection name is required.').show();
                return;
            }
            var html = self.addDialog.content.find('.dialog').detach();
            self.addDialog.showLoader();
            var $this = $(this),
                move = $this.attr ? ($this.attr('data-move') ? 1 : 0) : 0;
            $.post('/Collection/' + (move ? 'moveItem': 'addItem'), {
                    id: id,
                    type: type,
                    collectionId: collectionId,
                    name: collectionName,
                    comment: comment,
                    origCollectionId: $('.dealsContainer').attr('data-collectionId') || 0
                },
                function(res) {
                    if (res.error) {
                        self.addDialog.html(html);
                        errorBox.html(res.errorMessage).show();
                        return;
                    }
                    self.addDialog.html(res.html);
                    self.addDialog.content.find('.cancel').on('click',
                        function() {
                            self.addDialog.hide();
                        });
                    if (move && itemId && !res.movedToSelf) {
                        self.removeItem.call($('.item[data-id=' + itemId + '] .editItem').get(0));
                    } else {
                        var counter = $('.addToCollection[data-id="' + id + '"]').next('.collectionCount');
                        if (counter.length) {
                            var count = parseInt(counter.html().replace(/,/, ''));
                            counter.html(count + 1);
                        }
                        if (res.editCollectors) {
                            FB.getLoginStatus(function(response) {
                                console.log(response);
                                var token = response.status === 'connected' && response.authResponse ? response.authResponse.accessToken: '';
                                self.setupInviteCollectorAutoSuggest(token);
                            });
                        }
                    }
                });
        },
        createAddDialog: function() {
            self.addDialog = new SimpleDialog('addCollectionDialog', true);
        },
        showAddToDPDialog: function(e) {
            if (e && $(this).attr('data-login') !== undefined) {
                new LoginDialog('You need to login / sign up to add to DealsPlus.', 'addTo');
                return;
            }
            if ($(this).attr('data-interest-id')) {
                if ($(this).hasClass('reviewing')) {
                    alert("Cannot post to this Interest! It is still being reviewed!");
                    return;
                }
                var interestId = $(this).attr('data-interest-id');
                var addToDPUrl = '/Submit/addToDPDialog?interestId=' + interestId;
            } else {
                var addToDPUrl = '/Submit/addToDPDialog';
            }
            if (!self.addToDPDialog) {
                self.appendCollectionIdToUrl.call(this);
                self.addToDPDialog = new SimpleDialog('addToDPDialog', true);
                self.addToDPDialog.load(addToDPUrl);
            } else {
                self.addToDPDialog.load(addToDPUrl);
            }
        },
        appendCollectionIdToUrl: function() {
            var collectionId = parseInt($(this).attr('data-collectionId') || 0);
            if (collectionId) {
                $('#addDealLink, #addCouponLink, #addLinkLink').each(function(idx, link) {
                    if (!endsWith(link.href, collectionId.toString())) {
                        $(link).attr('href', link.href + '&clid=' + collectionId)
                    }
                });
            }
            function endsWith(str, endsWith) {
                return str.indexOf(endsWith, str.length - endsWith.length) !== -1
            }
        },
        closeAddToDPDialog: function() {
            if (!self.addToDPDialog) {
                return;
            }
            self.addToDPDialog.fadeOut();
        },
        turnOnWiggle: function() {
            $('.itemTile:not(#addAnItem)').addClass('wiggle');
        },
        turnOffWiggle: function() {
            $('.itemTile:not(#addAnItem)').removeClass('wiggle');
        },
        editCollection: function() {
            $('.dealsContainer').addClass('editMode');
            $(this).hide();
            $(this).next().show();
            $('.deleteCollection').show();
            self.editMode = true;
            self.turnOnWiggle();
            var collectionName = $('.collectionName');
            var span = collectionName.find('span');
            var input = collectionName.find('input');
            span.hide();
            input.show();
        },
        saveCollection: function() {
            $('.dealsContainer').removeClass('editMode');
            $(this).hide();
            $(this).prev().show();
            $('.deleteCollection').hide();
            self.editMode = false;
            self.turnOffWiggle();
            var collectionId = $(this).attr('data-id');
            var collectionName = $('.collectionName');
            var span = collectionName.find('span');
            var input = collectionName.find('input');
            var newName = input.val();
            var oldName = span.text();
            if (newName != oldName) {
                span.text(newName);
                $.post('/Collection/save', {
                        id: collectionId,
                        name: newName
                    },
                    function(res) {
                        if (res.error) {
                            span.text(oldName);
                            alert(res.errorMessage);
                        }
                    });
            }
            span.show();
            input.hide();
        },
        deleteItem: function() {
            self.removeItem.call(this);
            var collectionId = $('.dealsContainer').attr('data-collectionId');
            if (!collectionId) {
                return;
            }
            var itemId = $(this).attr('data-id');
            var type = $(this).attr('data-type');
            $.get('/Collection/deleteItem', {
                id: itemId,
                type: type,
                collectionId: collectionId
            });
        },
        removeItem: function() {
            var item = $(this).parents('.item:first');
            var masonry = $(this).parents('.itemPage').data('masonry');
            item.remove();
            var collectionItemCount = $('#collectionItemCount'),
                count = parseInt(collectionItemCount.text().split(' ')[0]);
            collectionItemCount.text((count - 1) + ' Items');
            self.turnOffWiggle();
            masonry.on('layoutComplete',
                function() {
                    if (self.editMode) {
                        self.turnOnWiggle();
                    }
                });
            masonry.layout();
        },
        deleteCollection: function() {
            var collectionId = $(this).attr('data-id');
            var $this = $(this);
            if (confirm('Are you sure you want to permanently delete this collection?')) {
                $this.attr('disabled', 'disabled').text('Deleting...');
                $.get('/Collection/deleteCollection', {
                        id: collectionId
                    },
                    function(res) {
                        if (res.error) {
                            $this.removeAttr('disabled').text('Delete Collection');
                            alert(res.errorMessage);
                        } else {
                            window.location = res.data;
                        }
                    });
            }
        },
        addSelect2: function(selectBox, data, selectedOption) {
            if (!selectBox.length) {
                return;
            }
            selectBox.addClass('converted');
            selectBox.select2({
                placeholder: data.length ? 'Choose a collection...': 'Create a collection',
                multiple: false,
                data: data,
                openOnEnter: false,
                formatNoMatches: 'No Collections',
                selectOnBlur: true,
                createSearchChoice: function(term, data) {
                    if ($(data).filter(function() {
                            return this.text.toLowerCase().localeCompare(term.toLocaleLowerCase()) === 0;
                        }).length === 0) {
                        return {
                            id: term,
                            text: term + ' (Create)'
                        };
                    }
                },
                createSearchChoicePosition: function(list, item) {
                    list.splice(1, 0, item);
                },
                initSelection: function(element, callback) {
                    if (selectedOption) {
                        callback(selectedOption);
                    }
                }
            });
            selectBox.on('select2-close',
                function() {
                    console.log('here');
                });
            selectBox.on('select2-removing',
                function(val) {
                    console.log(val);
                });
            if (selectedOption) {
                selectBox.select2('val', selectedOption);
                setTimeout(function() {
                        selectBox.select2('focus');
                    },
                    100);
            }
        },
        showEditCollectors: function() {
            var collectionId = $(this).attr('data-id');
            var dialog = new SimpleDialog('editCollectors', true);
            dialog.showLoader();
            dialog.show();
            $.get('/Collection/editCollectorsView', {
                    collectionId: collectionId
                },
                function(html) {
                    dialog.html(html);
                    FB.getLoginStatus(function(response) {
                        console.log(response);
                        var token = response.status === 'connected' && response.authResponse ? response.authResponse.accessToken: '';
                        self.setupInviteCollectorAutoSuggest(token);
                    });
                    $('#inviteCollectorInput').focus();
                });
        },
        setupInviteCollectorAutoSuggest: function(token) {
            $('#inviteCollectorInput').typeahead([{
                name: 'collectors',
                limit: 10,
                engine: {
                    compile: function(template) {
                        return {
                            render: function(context) {
                                return template.replace(/\{\{(\w+)\}\}/g,
                                    function(match, p1) {
                                        return jQuery('<div/>').html(context[p1] || '').html();
                                    });
                            }
                        }
                    }
                },
                template: '<div class="autoCompleteRow">    <div class="autoCompleteLeft">        <img class="userImage" src="{{img}}" alt="{{name}}">        <div class="userInfo">            <div>{{name}}</div>            <div class="userDescription">                <img src="{{typeImage}}"> {{typeText}}            </div>        </div>    </div></div>',
                remote: '/User/getInviteFriends?q=%QUERY&token=' + token
            }]).on('typeahead:selected',
                function(e, data) {
                    $('#inviteCollectorInput').typeahead('setQuery', '');
                    var collectionId = $(this).attr('data-id');
                    $.post('/Collection/invite', {
                            id: data.id,
                            type: data.type,
                            collectionId: collectionId
                        },
                        function(res) {
                            if (res.error) {} else {
                                if (res.data == 'fb') {
                                    FB.ui({
                                            method: 'send',
                                            link: res.link,
                                            to: data.id,
                                            app_id: '297671523608705'
                                        },
                                        function(response) {
                                            if (response && response.success) {
                                                $('.currentCollectors').append(res.html);
                                            }
                                        });
                                } else if (res.html) {
                                    $('.currentCollectors').append(res.html);
                                }
                            }
                        });
                });
        },
        ignoreInvite: function() {
            var collectionId = $(this).attr('data-id');
            $.post('/Collection/ignoreInvite', {
                collectionId: collectionId
            });
            $(this).parents('.inviteUserBox:first').fadeOut();
            $(this).parents('.notificationButtonsRight').fadeOut();
        },
        acceptInvite: function() {
            var collectionId = $(this).attr('data-id');
            var inviteBox = $(this).parents('.inviteUserBox:first');
            var buttonBox = $(this).parents('.notificationButtonsRight');
            $.post('/Collection/acceptInvite', {
                    collectionId: collectionId
                },
                function(res) {
                    if (res.error) {
                        alert(res.errorMessage);
                        return;
                    }
                    inviteBox.html('You can now add items to this collection.').fadeIn();
                });
            inviteBox.fadeOut();
            buttonBox.fadeOut();
        },
        removeUserFromCollection: function() {
            var collectionId = $(this).attr('data-id');
            var userId = $(this).attr('data-user-id');
            var row = $(this).parents('.userRow:first');
            if (confirm('Are you sure you want to remove this user from this Collection?')) {
                $.post('/Collection/ignoreInvite', {
                        collectionId: collectionId,
                        userId: userId
                    },
                    function(res) {
                        if (res.error) {
                            alert(res.errorMessage);
                        } else {
                            row.fadeOut();
                        }
                    });
            }
        },
        leaveCollection: function() {
            var collectionId = $(this).attr('data-id');
            if (confirm('Are you sure you want to leave this Collection, and remove it from your profile?')) {
                $.post('/Collection/ignoreInvite', {
                        collectionId: collectionId
                    },
                    function(res) {
                        if (res.error) {
                            alert(res.errorMessage);
                        } else {
                            window.location.reload();
                        }
                    });
            }
        }
    });
    $(document).ready(function() {
        self.init();
    });
}
var collection = new Collection();
function LoginDialog(message, action, autoShow) {
    var self = this;
    if (typeof autoShow === 'undefined') {
        autoShow = true;
    }
    $.extend(self, {
        message: message,
        action: action,
        dialog: new SimpleDialog('loginDialog', true),
        show: function(callback) {
            self.dialog.show();
            self.dialog.showLoader();
            $.get('/User/showLogin', {
                action: self.action,
                message: self.message,
                url: window.location.href
            }, function(html) {
                self.dialog.html(html);
                if (typeof callback === 'function') {
                    callback();
                }
            });
        }
    });
    if (autoShow) {
        self.show();
    }
}
function PagedScrolling(containerId, prevDataUrl, nextDataUrl, trackUrl, group, inInterest) {
    var self = this;
    var isLoadingNext = false;
    var isLoadingPrev = false;
    var nextDataCache = null;
    var prevDataCache = null;
    var lastScroll = 0;
    var unixTime = parseInt(new Date().getTime().toString().substring(0, 10));
    if (typeof trackUrl === 'undefined') {
        trackUrl = true;
    }
    trackUrl = (trackUrl === 'true' || trackUrl === true);
    group = group || false;
    inInterest = (typeof inInterest === "undefined") ? false: inInterest;
    var unloading = false;
    var loadedUrls = [];
    var container = $(containerId);
    var isPopUp = container.parents('#zoomScroll').length;
    var scrollWindow = isPopUp ? '#zoomScroll': window;
    $.extend(self, {
        shouldCheckScroll: true,
        init: function() {
            if (!self.supportsHistory()) {
                $('.filler').hide();
                $(scrollWindow).scrollTop(0);
                return;
            }
            self.registerEvents();
            self.preCache();
        },
        loadFirstPage: function() {
            if (!nextDataUrl) {
                return;
            }
            $(document).ready(function() {
                container.prepend(self.getLoader('next'));
            });
            $.get(nextDataUrl, {
                    createdBy: unixTime
                },
                function(data) {
                    nextDataUrl = data.nextPageUrl;
                    if (!prevDataUrl) {
                        prevDataUrl = data.prevPageUrl;
                    }
                    $(document).ready(function() {
                        $('.mainLoader.next').remove();
                        var temp = $(data.html);
                        if (group) {
                            $('.itemTile', temp).each(function() {
                                var self, neighbor;
                                self = $(this);
                                neighbor = self.next('.itemTile');
                                if (self.attr('data-group') != neighbor.attr('data-group')) {
                                    neighbor.before('<h1 class="item pageTitle"><span>' + neighbor.attr('data-group') + '</span></h1>');
                                }
                            });
                        }
                        container.append(temp);
                        $('body').trigger('itemsAdded');
                        if (container.height() < $(scrollWindow).height()) {
                            container.height($(scrollWindow).height() + 100);
                        }
                        if (self.supportsHistory()) {
                            container.find('.pagination').remove();
                        }
                        setTimeout(self.scrollToItem, 100);
                        setTimeout(self.init, 200);
                    });
                },
                'json');
        },
        getLoader: function(className) {
            return '<div class="mainLoader ' + className + '">' + '<img src = "https://img.dealspluscdn.com/images/v4/plusLoader.gif" class="mainLoaderImage" alt = "loader">' + '</div>';
        },
        supportsHistory: function() {
            return 'history' in window && 'replaceState' in history;
        },
        scrollToItem: function() {
            self.shouldCheckScroll = false;
            var i = self.getURLParameter('i');
            var element = $('.item[data-id="' + i + '"]');
            var filler = $(scrollWindow).find('.filler:first');
            var headerHeight = $('#header').height();
            if ($(element).length) {
                $(scrollWindow).scrollTop($(element).offset().top - (headerHeight + 10));
            } else if (filler.length) {
                $(scrollWindow).scrollTop(filler.offset().top + filler.height() - headerHeight);
            }
            $(scrollWindow).trigger('scrolledToItem');
            self.shouldCheckScroll = true;
        },
        registerEvents: function() {
            $(scrollWindow).scroll(self.checkScroll);
            $(scrollWindow).resize(self.checkScroll);
            if (isPopUp && window.__ai) {
                $(scrollWindow).scroll(window.__ai.loadVisibleImages);
            }
            $('body').on('click', 'a',
                function() {
                    if (/^javascript:/.test($(this).attr('href'))) {
                        $(window).unbind('beforeunload');
                        setTimeout(function() {
                                $(window).on('beforeunload', self.unload);
                            },
                            0);
                    }
                });
            $(window).on('beforeunload', self.unload);
        },
        unload: function(e) {
            if ($('.dialogHolder:visible').length) {
                return;
            }
            unloading = true;
            $(scrollWindow).scrollTop(0);
            $('body').html('');
        },
        checkScroll: function(e) {
            if (unloading || !self.shouldCheckScroll) {
                return;
            }
            if (container.is(':hidden') || (!isPopUp && $('#zoomScroll:visible').length)) {
                return;
            }
            var scrollPos = $(scrollWindow).scrollTop();
            var fold = scrollPos + $(scrollWindow).height();
            var remainderOfPage = (scrollWindow == window ? $(document).height() : $(scrollWindow)[0].scrollHeight) - fold;
            if (remainderOfPage <= 2048) {
                self.loadNextPage();
            } else if (scrollPos <= container.offset().top) {
                self.loadPrevPage();
            }
            if (trackUrl && Math.abs(scrollPos - lastScroll) > $(scrollWindow).height() * 0.1) {
                lastScroll = scrollPos;
                self.topMostVisibleItem(function() {
                    var strippedQuery = window.location.search.replace(/\?/g, '');
                    var query = strippedQuery.length ? strippedQuery.split('&') : [];
                    var newQuery = $(this).attr("data-url").replace('?', '').split('&');
                    var parsedQuery = {};
                    $.each(query,
                        function(index, val) {
                            var s = val.split('=');
                            parsedQuery[s[0]] = s[1];
                        });
                    $.each(newQuery,
                        function(index, val) {
                            var s = val.split('=');
                            parsedQuery[s[0]] = s[1];
                        });
                    query = [];
                    $.each(parsedQuery,
                        function(key, val) {
                            query.push(key + '=' + val);
                        });
                    query = '?' + query.join('&');
                    history.replaceState(null, null, window.location.pathname + query + window.location.hash);
                    return false;
                });
            }
        },
        getURLParameter: function(name) {
            return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null;
        },
        topMostVisibleItem: function(callback) {
            $(containerId + " .item[data-url]").each(function() {
                if (self.mostlyVisible(this)) {
                    callback.apply(this);
                    return false;
                }
            });
        },
        mostlyVisible: function(element) {
            var docViewTop = $(scrollWindow).scrollTop() + $('#header').height();
            var docViewBottom = docViewTop + $(scrollWindow).height();
            var elemTop = $(element).offset().top;
            return elemTop > docViewTop && elemTop < docViewBottom;
        },
        loadNextPage: function() {
            if (!nextDataUrl || isLoadingNext) {
                return;
            }
            isLoadingNext = true;
            if (nextDataCache) {
                self.showNextPage(nextDataCache);
                isLoadingNext = false;
            } else {
                if (typeof loadedUrls[nextDataUrl] !== 'undefined') {
                    isLoadingNext = false;
                    return;
                }
                loadedUrls[nextDataUrl] = 1;
                container.append(self.getLoader('next'));
                $.get(nextDataUrl, {
                        createdBy: unixTime
                    },
                    function(data) {
                        self.showNextPage(data);
                        isLoadingNext = false;
                    },
                    'json');
            }
        },
        showNextPage: function(data) {
            var itemPage = $(data.html);
            var page = itemPage.find('.item:first-child').attr('data-page');
            if (page && $(containerId + '[data-page="' + page + '"]').length) {
                return;
            }
            container.height('');
            $(containerId + ' .mainLoader.next').remove();
            nextDataUrl = data.nextPageUrl;
            nextDataCache = null;
            if (self.supportsHistory()) {
                $('.pagination').hide();
            }
            self.injectTiles(itemPage);
        },
        loadPrevPage: function() {
            if (!prevDataUrl || isLoadingPrev) {
                return;
            }
            isLoadingPrev = true;
            if (prevDataCache) {
                self.showPrevPage(prevDataCache);
                isLoadingPrev = false;
            } else {
                if (typeof loadedUrls[prevDataUrl] !== 'undefined') {
                    isLoadingPrev = false;
                    return;
                }
                loadedUrls[prevDataUrl] = 1;
                container.prepend(self.getLoader('prev'));
                $.get(prevDataUrl, {
                        createdBy: unixTime
                    },
                    function(data) {
                        self.showPrevPage(data);
                        isLoadingPrev = false;
                    },
                    'json');
            }
        },
        showPrevPage: function(data) {
            var pageContainer = $(containerId + ' .itemPage');
            var items = $(data.html);
            var currentHeight = pageContainer.height();
            self.shouldCheckScroll = false;
            self.injectTiles(items, true);
            var newHeight = pageContainer.height();
            $(scrollWindow).scrollTop($(scrollWindow).scrollTop() + (newHeight - currentHeight));
            self.shouldCheckScroll = true;
            $(containerId + ' .mainLoader.prev').remove();
            prevDataUrl = data.prevPageUrl;
            prevDataCache = null;
            var filler = $('.filler');
            filler.hide();
        },
        preCache: function() {
            if (nextDataUrl) {
                if (isLoadingNext) {
                    return;
                }
                if (typeof loadedUrls[nextDataUrl] !== 'undefined') {
                    return;
                }
                loadedUrls[nextDataUrl] = 1;
                $.get(nextDataUrl, {
                        createdBy: unixTime
                    },
                    function(data) {
                        nextDataCache = data;
                        self.checkScroll();
                    },
                    'json');
            }
            if (prevDataUrl) {
                if (isLoadingPrev) {
                    return;
                }
                if (typeof loadedUrls[prevDataUrl] !== 'undefined') {
                    return;
                }
                loadedUrls[prevDataUrl] = 1;
                $.get(prevDataUrl, {
                        createdBy: unixTime
                    },
                    function(data) {
                        prevDataCache = data;
                        self.checkScroll();
                    },
                    'json');
            }
        },
        injectTiles: function(nodes, prepend) {
            prepend = prepend || false;
            var temp = $('<div class="newPage"></div>');
            temp.append(nodes);
            if (group) {
                $('.itemTile', temp).each(function() {
                    var self, neighbor;
                    self = $(this);
                    neighbor = self.next('.itemTile');
                    if (!neighbor.length) {
                        if (prepend) {
                            neighbor = $('.itemTile:first');
                        } else {
                            self = $('.itemTile:last');
                            neighbor = $('.itemTile:first', temp);
                        }
                    }
                    if (self.attr('data-group') != neighbor.attr('data-group')) {
                        neighbor.before('<h1 class="item pageTitle"><span>' + neighbor.attr('data-group') + '</span></h1>');
                    }
                });
            }
            var pageContainer = $(containerId + ' .itemPage');
            pageContainer.trigger((prepend ? 'prependItems': 'appendItems'), [temp.children()]);
            $('body').trigger('itemsAdded');
        }
    });
    self.loadFirstPage();
}
function Main() {
    var self = this;
    var body = $('body');
    var hasNoScroll = false;
    $.extend(self, {
        init: function() {
            self.registerEvents();
            setInterval(self.monitorDialogs, 50);
        },
        registerEvents: function() {
            self.setupLoginBox();
            $('#subscribeWithFacebook').click(self.loginFB);
        },
        loginFB: function() {
            var id = $(this).attr('data-id'); (new LoginDialog('', 'followStore|' + id, false)).show(self.fbLogin);
        },
        monitorDialogs: function() {
            var dialogs = $('.dialogHolder:visible');
            if (dialogs.length) {
                body.addClass('noScroll');
                hasNoScroll = true;
            } else if (hasNoScroll) {
                body.removeClass('noScroll');
            }
        },
        setupLoginBox: function() {
            var body = $('body');
            body.on('keypress', '.loginEmail',
                function(e) {
                    if (e.keyCode == 13) {
                        self.loginCheckEmail.apply(this);
                    }
                });
            body.on('click', '.loginStep1Button', self.loginCheckEmail);
            body.on('click', '.loginStep2Button', self.loginUser);
            body.on('keypress', '.loginPassword',
                function(e) {
                    if (e.keyCode == 13) {
                        self.loginUser.apply(this);
                    }
                });
            body.on('click', '.registerStep2Button', self.registerUser);
            body.on('keypress', '.registerPassword, .registerUsername',
                function(e) {
                    if (e.keyCode == 13) {
                        self.registerUser.apply(this);
                    }
                });
            body.on('click', '.fbButton',
                function(e) {
                    if (window.sessionStorage) {
                        try {
                            var dialog = $(this).parents('.loginDialog');
                            if (!dialog.length) {
                                return;
                            }
                            var actionElem = dialog.find('.loginAction');
                            if (actionElem.length) {
                                sessionStorage.setItem('loginAction', actionElem.val());
                            }
                        } catch(e) {}
                    }
                });
        },
        loginCheckEmail: function() {
            var mainDialog = $(this).parents('.loginDialog');
            var dialog = $(this).parents('.loginStep1');
            var emailElem = dialog.find('.loginEmail');
            var errorElem = dialog.find('.error');
            var resendElem = dialog.find('.resendConfirmation');
            if (!emailElem.val()) {
                errorElem.html('Please enter your email.').show();
                return;
            }
            var loginEmail = dialog.find('.loginEmail');
            var button = dialog.find('.loginStep1Button');
            loginEmail.attr('disabled', 'disabled');
            button.attr('disabled', 'disabled');
            errorElem.hide();
            $('.existingEmail').text(emailElem.val());
            $.get('/User/checkEmailStep', {
                    email: emailElem.val()
                },
                function(res) {
                    if (res.data == 'resetPassword') {
                        window.location.href = "/forgotPassword?case=expired";
                        return;
                    }
                    button.removeAttr('disabled');
                    loginEmail.removeAttr('disabled');
                    if (res.error) {
                        errorElem.html(res.errorMessage).show();
                        if (res.data) {
                            resendElem.show();
                            dialog.find('.resendMessage').html('');
                            dialog.find('.resendEmailButton').click(function() {
                                $.post('/User/resendConfirmEmail', {
                                        username: res.data
                                    },
                                    function(response) {
                                        if (response.error) {
                                            errorElem.html(response.errorMessage).show();
                                            resendElem.hide();
                                        } else {
                                            dialog.find('.resendMessage').html("Still Didn't Get It? ");
                                            errorElem.hide();
                                        }
                                    });
                            });
                        } else {
                            resendElem.hide();
                        }
                    } else {
                        if (res.data) {
                            self.showLoginStep(mainDialog);
                        } else {
                            self.showRegisterStep(mainDialog);
                        }
                    }
                });
        },
        showLoginStep1: function(dialog) {
            dialog.find('.loginLoader').hide();
            dialog.find('.loginStep:visible').hide();
            dialog.find('.loginStep1').fadeIn();
            if (! (/iPhone|iPad|iPod/i.test(navigator.userAgent))) {
                dialog.find('.loginEmail').focus();
            }
        },
        showLoginStep: function(dialog) {
            dialog.find('.loginLoader').hide();
            dialog.find('.loginStep:visible').hide();
            dialog.find('.loginStep2').fadeIn().find('.loginBack').one('click',
                function() {
                    self.showLoginStep1(dialog);
                });
            if (! (/iPhone|iPad|iPod/i.test(navigator.userAgent))) {
                dialog.find('.loginPassword').focus();
            }
        },
        showRegisterStep: function(dialog) {
            dialog.find('.loginLoader').hide();
            dialog.find('.loginStep:visible').hide();
            dialog.find('.registerStep2').fadeIn().find('.loginBack').one('click',
                function() {
                    self.showLoginStep1(dialog);
                });
            if (! (/iPhone|iPad|iPod/i.test(navigator.userAgent))) {
                dialog.find('.registerUsername').focus();
            }
        },
        showLoader: function(dialog) {
            dialog.find('.loginStep').hide();
            dialog.find('.loginLoader').show();
        },
        loginUser: function() {
            var dialog = $(this).parents('.loginDialog');
            var emailElem = dialog.find('.loginEmail');
            var passwordElem = dialog.find('.loginPassword');
            var errorElem = dialog.find('.error');
            var email = emailElem.val();
            var password = passwordElem.val();
            if (!password.length) {
                errorElem.html('Please enter your password.').show();
                return;
            }
            errorElem.hide();
            var button = dialog.find('.loginStep2Button');
            passwordElem.attr('disabled', 'disabled');
            button.attr('disabled', 'disabled');
            $.post('/User/loginUser', {
                    email: email,
                    password: password
                },
                function(res) {
                    if (res.data == 'resetPassword') {
                        window.location.href = "/forgotPassword?case=expired";
                        return;
                    }
                    button.removeAttr('disabled');
                    passwordElem.removeAttr('disabled');
                    if (res.error) {
                        errorElem.html(res.errorMessage).show();
                        passwordElem.focus().select();
                    } else {
                        self.markAction(dialog);
                        window.location.reload();
                    }
                });
        },
        markAction: function(dialog) {
            if (window.sessionStorage) {
                try {
                    var actionElem = dialog.find('.loginAction');
                    if (actionElem.length) {
                        sessionStorage.setItem('loginAction', actionElem.val());
                    }
                } catch(e) {}
            }
        },
        registerUser: function() {
            var dialog = $(this).parents('.loginDialog');
            var emailElem = dialog.find('.loginEmail');
            var passwordElem = dialog.find('.registerPassword');
            var usernameElem = dialog.find('.registerUsername');
            var fbTokenElem = dialog.find('#fbToken');
            var errorElem = dialog.find('.error');
            var email = emailElem.val();
            var password = passwordElem.val();
            var username = usernameElem.val();
            var fbToken = fbTokenElem.length ? fbTokenElem.val() : 0;
            if (!password.length) {
                errorElem.html('Please enter your password.').show();
                return;
            }
            if (!username.length) {
                errorElem.html('Please enter your username.').show();
                return;
            }
            errorElem.hide();
            var button = dialog.find('.registerStep2Button');
            passwordElem.attr('disabled', 'disabled');
            usernameElem.attr('disabled', 'disabled');
            button.attr('disabled', 'disabled');
            var actionElem = dialog.find('.loginAction');
            var action = actionElem.length ? actionElem.val() : '';
            $.post('/User/registerUser', {
                    email: email,
                    password: password,
                    username: username,
                    action: action,
                    fbToken: fbToken
                },
                function(res) {
                    button.removeAttr('disabled');
                    passwordElem.removeAttr('disabled');
                    usernameElem.removeAttr('disabled');
                    if (res.error) {
                        if (res.errorMessage == 'newUserLanding') {
                            window.location.assign("/User/newUserLanding?step=1");
                        } else {
                            errorElem.html(res.errorMessage).show();
                        }
                    } else {
                        dialog.html('<div class="dialogHeader">Registration Successful</div>' + '<div class="dialogBody">' + '<p style="font-size: 16px; padding: 0 20px 0 20px; text-align: center;">Please confirm your email to continue.</p>' + '<div class="resendMessage" style="font-size: 16px; padding: 0 20px 20px 20px; text-align: center;">Didn\'t Get It? <a href="javascript:void(0);" class="resendEmailButton">Resend Email</a></div>' + '<div style="text-align: center;">' + '<a href="javascript:void(0);" class="closeDialog">Close</a>' + '</div>' + '</div>');
                        dialog.find('.resendEmailButton').click(function() {
                            $.post('/User/resendConfirmEmail', {
                                    username: username
                                },
                                function(res) {
                                    if (res.error) {
                                        errorElem.html(res.errorMessage).show();
                                    } else {
                                        dialog.find('.resendMessage').html('Still Didn\'t Get It? <a href="javascript:void(0);" class="resendEmailButton">Resend Email</a>');
                                    }
                                });
                        });
                        dialog.find('.closeDialog').click(function() {
                            $(this).parents('.dialogHolder').fadeOut();
                        });
                    }
                });
        },
        fbLogin: function() {
            var dialog = $('.loginDialog');
            self.showLoader(dialog);
            fb.login(function(code, meta) {
                if (code == fb.FB_SIGNUP_REQUIRED) {
                    dialog.find('#fbToken').val(meta.token);
                    dialog.find('.facebookSignupMessage').show();
                    dialog.find('.loginEmail').val(meta.email);
                    dialog.find('.existingEmail').text(meta.email);
                    self.showRegisterStep(dialog);
                } else if (code == fb.FB_LOGIN_SUCCESS) {
                    self.markAction(dialog);
                    window.location.reload();
                } else {
                    dialog.find('.error').text('Failed to login with Facebook.  Please try again later.').show();
                    self.showLoginStep1(dialog);
                }
            });
        }
    });
    $(document).ready(function() {
        self.init();
    });
}
var dpMain = new Main();
function Deal() {
    var self = this;
    $.extend(self, {
        init: function() {
            self.registerEvents();
            self.checkLoginAction();
        },
        registerEvents: function() {
            $('body').on('click', '.flagDealToggle', self.showFlagForm).on('change', '#flagDeal', self.flagDeal).on('click', '.editDealToggle', self.showEditForm).on('click', '.editInterestToggle', self.showEditInterestDialog).on('click', '.replyCommentLink, .cancelReply', self.toggleReplyBox).on('click', '.dealCommentBox, .commentSubmitButton', self.clickCommentBox).on('click', '.didDealWorkButton', self.voteDeal).on('click', '.commentVote > a', self.voteComment);
            $('.postDealCommentForm').ajaxForm({
                delegation: true,
                clearForm: true,
                beforeSubmit: function(formData, $form) {
                    if ($form.data('submitting')) {
                        return false;
                    }
                    $form.data('submitting', true);
                    return true;
                },
                success: function(response, status, xhr, $form) {
                    $form.removeData('submitting');
                    if (!response.error && response.html) {
                        if (response.parentId) {
                            $('div[data-comment-id="' + response.parentId + '"] > .commentContent > .replyComments').show().append(response.html);
                            $('div[data-comment-id="' + response.parentId + '"] .commentFormContainer').hide();
                        } else {
                            $('.commentsContainer .comments').prepend(response.html);
                        }
                        $('.commentsContainer').show();
                        $('html, body').animate({
                                scrollTop: $form.parent().parent().offset().top - $('#header').height() - 10
                            },
                            300);
                    }
                }
            });
        },
        toggleReplyBox: function() {
            var container = $(this).parents('.replyComment:first').length ? $(this).parents('.replyComment:first').find('.commentFormContainer:first') : $(this).parents('.dealComment:first').find('.commentFormContainer:first');
            if ($(this).hasClass('cancelReply')) {
                container.slideUp(300);
            } else {
                var userCopy = $(this).parents('.userRow:first').find('a:first').attr('title');
                if (userCopy.length > 0) {
                    userCopy = '@' + userCopy + ' ';
                }
                container.slideDown(300);
                if (window.isLoggedIn) {
                    var ta = container.find('textarea');
                    var current = ta.val();
                    if (current.length == 0) {
                        ta.val(userCopy);
                    }
                    ta.focus();
                }
            }
        },
        checkLoginAction: function() {
            if (window.sessionStorage) {
                try {
                    var action = sessionStorage.getItem('loginAction');
                    if (action) {
                        action = action.split('|');
                        if (action.length == 2) {
                            if (action[0] == 'voteDeal') {
                                var item = action[1].split(':');
                                if (item.length == 2) {
                                    var elem = $('.didDealWorkButton[data-value="' + item[0] + '"][data-vote="' + item[1] + '"]');
                                    if (elem.length) {
                                        self.voteDeal.apply(elem);
                                    }
                                    sessionStorage.removeItem('loginAction');
                                }
                            }
                        }
                    }
                } catch(e) {}
            }
        },
        voteComment: function() {
            var parent = $(this).parents('.commentVote');
            var currentActive = parent.find('.active');
            if ($(this).hasClass('active') || $(this).hasClass('disabled')) {
                return;
            }
            if (currentActive.length) {
                currentActive.removeClass('active');
            } else {
                currentActive = null;
            }
            $(this).addClass('active');
            var text = parent.find('.commentVoteScore');
            var voteAmount = $(this).hasClass('voteCommentDown') ? -1 : 1;
            var current = parseInt(text.text());
            text.text(current + (voteAmount * (currentActive ? 2 : 1)));
            var commentId = $(this).attr('data-value');
            var vote = voteAmount > 0 ? 'RECOMMENDED': 'DISCOMMENDED';
            $.post('/Deal/voteComment', {
                commentId: commentId,
                vote: vote
            });
        },
        voteDeal: function() {
            var dealId = $(this).attr('data-value');
            var vote = $(this).parent().hasClass('didItWorkUp') ? 1 : -1;
            if ($(this).attr('data-login') !== undefined) {
                new LoginDialog('You need to login or register before you can vote.', 'voteDeal|' + dealId + ':' + vote);
                return;
            }
            var currentActive = $(this).parents('.didItWork').find('.active');
            var isActive = $(this).hasClass('active');
            if (isActive) {
                $(this).removeClass('active');
            } else {
                $(this).addClass('active');
            }
            if (currentActive.attr('data-vote') == $(this).attr('data-vote')) {
                currentActive = null;
            }
            if (currentActive && currentActive.length) {
                currentActive.removeClass('active');
            }
            var voteAmount = Math.abs(parseInt($(this).attr('data-vote')));
            if (voteAmount > 0) {
                $('.voteItemUp[data-value="' + dealId + '"] img').trigger('click', [false]);
            }
            var current = parseInt($(this).next().text());
            var newVote = current + ((isActive ? -1 : 1) * voteAmount);
            if (newVote < 0) {
                newVote = 0;
            }
            $(this).next().text(newVote);
            if (currentActive) {
                console.log(currentActive);
                voteAmount = Math.abs(parseInt(currentActive.attr('data-vote')));
                current = parseInt(currentActive.next().text());
                var newVote = current - voteAmount;
                if (newVote < 0) {
                    newVote = 0;
                }
                currentActive.next().text(newVote);
            }
            $.post('/Deal/vote', {
                dealId: dealId,
                vote: isActive ? 0 : vote
            });
            $('.thanksVote').show();
        },
        flagDeal: function() {
            var dealId = $(this).attr('data-value');
            var flagContent = '';
            var errorMsg;
            var value = $(this).val();
            var subOption = $(this).next();
            subOption.show();
            if (value == 'DUPLICATE') {
                subOption.html("<div>Original deal link:<br/><input class='flagContent' type='text'><button class='flagContentBtn purpleButton' style='margin-top: 5px;'>Submit</button></div>");
                errorMsg = '*Input original deal link';
            } else {
                subOption.html("<br/>What's wrong with this deal?<br/><textarea class='flagContent'></textarea><button class='flagContentBtn purpleButton' style='margin-top: 5px;'>Submit</button>");
                errorMsg = '*Write a problem';
            }
            $(".flagContentBtn").click(function() {
                flagContent = $(".flagContent").val();
                if (value == 'DUPLICATE' || value == 'INCORRECT') {
                    if (!flagContent) {
                        subOption.append("<div class='oriDealLinkErrorMsg' style='color: red'>" + errorMsg + "</div>");
                        return false;
                    }
                }
                var $self = $(this);
                $.ajax({
                    url: '/flag_deal.php',
                    type: 'post',
                    data: {
                        dealid: dealId,
                        flag_value: value,
                        content: flagContent
                    },
                    success: function(html) {
                        $(".oriDealLinkErrorMsg").hide();
                        subOption.hide();
                        var success = $("<div style='color: green; padding: 5px 0;'>Successfully Submitted!</div>");
                        subOption.after(success);
                        success.delay(1100).hide(100);
                    }
                });
            });
        },
        showEditForm: function() {
            if (!window.isLoggedIn) {
                new LoginDialog();
                return;
            }
            var elem = $(this).parent().find("#editDealForm");
            if (!elem.html()) {
                elem.html('Loading...');
                $.ajax({
                    url: '/ajax/ajax.update_price_form.php',
                    type: 'get',
                    data: {
                        div_id: 'editDealForm',
                        dealid: $(this).attr('data-value')
                    },
                    success: function(html) {
                        elem.slideUp(0);
                        elem.html(html);
                        elem.slideDown(300);
                        self.setupInterests('#interests');
                    }
                });
            } else {
                elem.slideToggle(300);
            }
        },
        showEditInterestDialog: function() {
            if (!window.isLoggedIn) {
                var message = $(this).attr('data-login-required');
                new LoginDialog(message);
                return;
            }
            var postId = $(this).attr('data-post-id');
            var type = $(this).attr('data-type');
            if (postId && type) {
                new EditInterestDialog(postId, type);
                self.setupInterests('#addedInterests');
            }
        },
        setupInterests: function(id) {
            $(id).select2({
                placeholder: 'Select one or more interests',
                maximumSelectionSize: 5,
                maximumUserSelectionSize: 3,
                multiple: true,
                ajax: {
                    url: '/Interest/autoComplete',
                    data: function(term) {
                        return {
                            q: term
                        }
                    },
                    results: function(data) {
                        return {
                            results: data
                        }
                    }
                },
                initSelection: function(element, callback) {
                    try {
                        var data = JSON.parse(element.val());
                        console.log(data);
                        element.val('');
                        callback(data);
                    } catch(err) {}
                }
            });
        },
        showFlagForm: function() {
            if (!window.isLoggedIn) {
                new LoginDialog();
                return;
            }
            $(this).next('.flagDealForm').slideToggle(200);
        },
        clickCommentBox: function() {
            if (!window.isLoggedIn) {
                new LoginDialog();
            }
        }
    });
    self.init();
}
$(document).ready(function() {
    new Deal();
});
function change_exp_display(exp_display) {
    if (exp_display.selectedIndex == 1) {
        document.getElementById('expiring_date').style.display = 'inline';
    } else {
        document.getElementById('expiring_date').style.display = 'none';
    }
}
function loadUpdatePriceForm(divId, dealid) {
    var elem = $("#" + divId);
    if (!elem.html()) {
        elem.html('<div class="ta-center mart20"><img src="/images/dp1/loading.gif"><br><span class="font10 lt_grey">Loading...</span></div>');
        $.ajax({
            url: '/ajax/ajax.update_price_form.php',
            type: 'get',
            data: {
                div_id: divId,
                dealid: dealid
            },
            success: function(html) {
                elem.html(html);
                $("#OptionContentUpdate").slideDown({
                    duration: 300
                });
            }
        });
    } else {
        $("#OptionContentUpdate").slideToggle({
            duration: 300
        });
    }
}
function EditInterestDialog(postId, type, autoShow) {
    var self = this;
    if (typeof autoShow === 'undefined') {
        autoShow = true;
    }
    $.extend(self, {
        postId: postId,
        type: type,
        dialog: new SimpleDialog('EditInterestDialog', true),
        show: function(callback) {
            self.dialog.show();
            self.dialog.showLoader();
            $.ajax({
                url: '/Interest/showEditInterest',
                data: {
                    postId: self.postId,
                    type: self.type
                },
                type: "GET",
                success: function(response) {
                    if (response.error) {
                        return;
                    }
                    self.dialog.html(response.html);
                    setupInterestsButton('#addedInterests');
                    $('#interestSubmit').click(function() {
                        var interests = $('#addedInterests').val();
                        var postId = $('#postId').val();
                        var type = $('#type').val();
                        $.ajax({
                            url: "/Interest/updateInterest",
                            type: 'POST',
                            data: {
                                interests: interests,
                                type: type,
                                postId: postId
                            },
                            success: function(res) {
                                if (res.error) {
                                    alert(res.errorMessage);
                                }
                                $('#interestList').remove();
                                $('.actions').after(res.html);
                                self.dialog.hide();
                                return;
                            },
                            error: function() {
                                alert("Something went wrong, failed to update Interest!");
                            }
                        })
                    });
                },
                error: function() {
                    alert("Sorry, Something went wrong! Cannot edit Interest at the moment, Please check back later.");
                }
            })
        }
    });
    if (autoShow) {
        self.show();
    }
}
function setupInterestsButton(id) {
    $(id).select2({
        placeholder: 'Select one or more interests',
        maximumSelectionSize: 5,
        maximumUserSelectionSize: 3,
        multiple: true,
        ajax: {
            url: '/Interest/autoComplete',
            data: function(term) {
                return {
                    q: term
                }
            },
            results: function(data) {
                return {
                    results: data
                }
            }
        },
        initSelection: function(element, callback) {
            try {
                var data = JSON.parse(element.val());
                console.log(data);
                element.val('');
                callback(data);
            } catch(err) {}
        }
    });
}
function Store() {
    var self = this;
    $.extend(self, {
        filterAnimationTime: 300,
        init: function() {
            self.registerEvents();
            if ($('.filterMenu').length) {
                self.setupFilters();
            }
            self.setupDialog();
            self.checkLoginAction();
            if (typeof window.openCoupon !== 'undefined') {
                var coupon = $('.singleCouponContainer[data-coupon-id="' + window.openCoupon + '"]');
                if (coupon.length) {
                    self.showCodeDialog.apply(coupon);
                }
            }
        },
        registerEvents: function() {
            var addToFavoritesForm = $('#addToFavoritesForm');
            if (addToFavoritesForm.length) {
                addToFavoritesForm.on('submit',
                    function(e) {
                        return this.email.value.length > 0;
                    });
            }
            $('body').on('click', '.readMoreButton', self.showStoreInfoDialog).on('click', 'div.showAllCouponsButton a', self.showAllCoupons).on('click', '.shopSiteNowButton', self.goToUrl);
            function showShareThis() {
                if (typeof stButtons !== 'undefined') {
                    stButtons.locateElements();
                } else if (typeof loadShareThis === 'function') {
                    loadShareThis();
                }
            }
            $('.shareButton').on('click',
                function() {
                    var container = $(this).parents('.coupon:first').find('.shareContainer');
                    if (container.attr('data-share-this-url')) {
                        var url = container.attr('data-share-this-url');
                        var title = $(this).parents('.coupon:first').find('.title').text();
                        container.removeAttr('data-share-this-url');
                        $.get('/Store/getCouponShareThis', {
                                title: encodeURIComponent(title.trim()),
                                url: encodeURIComponent(url)
                            },
                            function(html) {
                                container.find('.shareThis').html(html);
                                showShareThis();
                            });
                    }
                    container.slideToggle(self.animationTime);
                });
            $('#shareStoreButton').on('click',
                function() {
                    $('#shareStoreContainer').slideToggle(function() {
                        if (!$(this).data('loaded')) {
                            showShareThis();
                            $(this).data('loaded', 1);
                        }
                    });
                });
        },
        aboutStoreDialog: false,
        showStoreInfoDialog: function() {
            if (self.aboutStoreDialog == false) {
                self.aboutStoreDialog = new SimpleDialog("AboutStoreDialog", true);
                self.aboutStoreDialog.show();
                self.aboutStoreDialog.showLoader();
                var html = $('div.aboutStoreInfo').html();
                self.aboutStoreDialog.html(html);
            } else {
                self.aboutStoreDialog.show();
            }
        },
        showAllCoupons: function() {
            if ($(this).hasClass('disabled')) {
                return false;
            }
            var associateId = $('div.topStoreInfo').data('associate-id');
            var couponContainer = $('div.coupons');
            var buttonContainer = $(this).closest('div.showAllCouponsButton');
            var countUpdateContainer = $('.coupon-store-updated-time span');
            var button = $(this);
            button.html("LOADING ...");
            button.addClass('disabled');
            $.ajax({
                url: '/Store/showAllCoupons',
                type: 'GET',
                data: {
                    associateId: associateId
                },
                dataType: 'json',
                success: function(res) {
                    if (res.error) {
                        button.html("SEE ALL COUPONS");
                        button.removeClass('disabled');
                        alert(res.errorMessage);
                        return;
                    }
                    buttonContainer.hide();
                    couponContainer.html(res.html);
                    countUpdateContainer.html(res.countAll + (res.count > 1 ? ' coupons': ' coupon'));
                    $('li.all a strong').html(res.countAll);
                    $('li.coupon-code a strong').html(res.countCodes);
                    $('li.sale a strong').html(res.countSales);
                    $('li.printable a strong').html(res.countPrintable);
                    if (window.isLoggedIn && couponContainer.data('admin') == 1) {
                        showAdminCouponPanel();
                    }
                },
                error: function() {
                    button.html("SEE ALL COUPONS");
                    button.removeClass('disabled');
                    alert("Something went wrong, please try again!");
                }
            });
        },
        checkLoginAction: function() {
            if (window.sessionStorage) {
                try {
                    var action = sessionStorage.getItem('loginAction');
                    if (action) {
                        action = action.split('|');
                        if (action.length == 2) {
                            if (action[0] == 'vote') {
                                var item = action[1].split(':');
                                if (item.length == 2) {
                                    var elem = $('.didCouponWorkButton[data-value="' + item[0] + '"][data-vote="' + item[1] + '"]');
                                    if (elem.length) {
                                        self.voteCoupon.apply(elem);
                                    }
                                    sessionStorage.removeItem('loginAction');
                                }
                            }
                        }
                    }
                } catch(e) {}
            }
        },
        setupFilters: function() {
            $('a[data-filter]').on('click', self.toggleFilters);
            var hash = window.location.hash;
            if (!hash) {
                hash = '#popular';
            }
            if (hash) {
                var filter = hash.replace('#', '').toLowerCase();
                $('a[data-filter="' + filter + '"]').click();
            }
        },
        toggleFilters: function() {
            var filter = $(this).attr('data-filter');
            if (filter == 'all') {
                self.showFilters();
            } else if (filter == 'popular') {
                self.showFilters('popular');
                self.hideFilters('popular', true);
            } else {
                if (filter != 'app-coupon') {
                    self.hideFilters([filter, (filter + ' app-coupon')], true);
                    self.showFilters([filter, (filter + ' app-coupon')]);
                } else {
                    self.hideFilters(['sale app-coupon', 'coupon-code app-coupon', 'printable app-coupon', 'weekly-ads app-coupon'], true);
                    self.showFilters(['sale app-coupon', 'coupon-code app-coupon', 'printable app-coupon', 'weekly-ads app-coupon']);
                }
            }
            $('.filterMenu').find('.active').removeClass('active');
            $(this).parent().addClass('active');
        },
        showFilters: function(filters) {
            var selectors = self.getFilterSelectors(filters, false);
            $.each(selectors,
                function(index, selector) {
                    $(self.getSectionSelectors()).each(function() {
                        $(selector).show();
                        if ($(this).find(selector).length) {}
                    });
                });
        },
        hideFilters: function(filters, inverse) {
            var selectors = self.getFilterSelectors(filters, inverse);
            $.each(selectors,
                function(index, selector) {
                    $(self.getSectionSelectors()).each(function() {
                        if ($(this).find('.singleCouponContainer[data-filter-type]').length == $(this).find(selector).length) {}
                    });
                    $(selector).each(function() {
                        var attr = $(this).attr('data-filter-type');
                        if (typeof attr === 'undefined' || attr === false) {
                            return true;
                        }
                        $(this).hide();
                    })
                });
        },
        toggleCouponBorders: function() {
            var parent = $(this).parent();
            parent.find('.first').removeClass('first');
            parent.find(':visible:first').addClass('first');
        },
        getSectionSelectors: function() {
            return '.coupons > .couponsHolder';
        },
        getFilterSelectors: function(filters, inverse) {
            if (typeof inverse === 'undefined') {
                inverse = false;
            }
            var selectors = [];
            if (typeof filters === 'undefined' || filters.length == 0) {
                selectors = [".singleCouponContainer[data-filter-type]"];
            } else {
                if (filters == 'popular') {
                    selectors = ['.singleCouponContainer[data-filter-type]:' + (inverse ? 'gt': 'lt') + '(9)'];
                } else {
                    for (var i = 0; i < filters.length; i++) {
                        selectors.push('.singleCouponContainer[data-filter-type' + (inverse ? '!': '') + '="' + filters[i] + '"]');
                    }
                }
            }
            return selectors;
        },
        voteCoupon: function() {
            var couponId = $(this).attr('data-value');
            var voteAmount = parseInt($(this).attr('data-vote'));
            if ($(this).attr('data-login') !== undefined) {
                new LoginDialog('You need to login or register before you can vote.', 'vote|' + couponId + ':' + voteAmount);
                return;
            }
            var currentActive = $(this).parents('.didItWork').find('.active');
            var isActive = $(this).hasClass('active');
            if (isActive) {
                $(this).removeClass('active');
            } else {
                $(this).addClass('active');
            }
            if (currentActive.attr('data-vote') == $(this).attr('data-vote')) {
                currentActive = null;
            }
            if (currentActive && currentActive.length) {
                currentActive.removeClass('active');
            } else {
                currentActive = null;
            }
            if (voteAmount > 0) {
                $('.voteItemUp[data-value="' + couponId + '"] img').trigger('click', [false]);
            }
            var vote = voteAmount;
            var current = parseInt($(this).next().text());
            $(this).next().text(current + ((isActive ? -1 : 1) * Math.abs(voteAmount)));
            if (currentActive) {
                voteAmount = parseInt(currentActive.attr('data-vote'));
                current = parseInt(currentActive.next().text());
                var newVote = current - Math.abs(voteAmount);
                if (newVote < 0) {
                    newVote = 0;
                }
                currentActive.next().text(newVote);
            }
            $.post('/Coupon/vote', {
                couponId: couponId,
                vote: isActive ? 0 : vote
            });
            var coupon = $(this).parents('.coupon:first');
            if (!$(this).parents('.coupon:first').length) {
                coupon = $('.coupon[data-id="' + couponId + '"]');
                var didItWork = coupon.find('.didItWork');
                if (didItWork.length) {
                    didItWork.find('.didItWorkUp > a').addClass(voteAmount > 0 ? 'active': 'disabled');
                    didItWork.find('.didItWorkDown > a').addClass(voteAmount < 0 ? 'active': 'disabled');
                    didItWork.find('.active').next().text(current + (Math.abs(voteAmount)));
                }
            }
            if (self.coupons && self.coupons[couponId]) {
                if (voteAmount > 0) {
                    self.coupons[couponId].numRecommend += Math.abs(voteAmount);
                } else {
                    self.coupons[couponId].numDiscommend += Math.abs(voteAmount);
                }
            }
            coupon.find('.thanksVote').show();
            if (coupon.find('.commentsContainer:hidden').length) {
                coupon.find('.numCommentsLink').click();
            }
        },
        setupComments: function() {
            var body = $('body');
            body.on('click', '.numCommentsLink',
                function() {
                    $(this).parents('.coupon:first').find('.commentsContainer').slideToggle(self.animationTime);
                });
            body.on('click', '.viewAllComments',
                function() {
                    var couponId = $(this).attr('data-value');
                    var $comments = $(this).parents('.comments');
                    $comments.text('Fetching comments...');
                    $.get('/Coupon/getAllComments', {
                            couponId: couponId,
                            limit: 100
                        },
                        function(res) {
                            if (!res.error && res.html) {
                                $comments.html(res.html);
                            } else {
                                $comments.text('Failed to load comments');
                            }
                        });
                });
            $('.postCommentForm').ajaxForm({
                delegation: true,
                clearForm: true,
                beforeSubmit: function(formData, $form) {
                    if ($form.data('submitting')) {
                        return false;
                    }
                    $form.data('submitting', true);
                    return true;
                },
                success: function(response, status, xhr, $form) {
                    $form.removeData('submitting');
                    if (!response.error && response.html) {
                        var comments = $form.parent().next('.comments');
                        comments.find('.commentsList').prepend(response.html);
                        comments.show();
                        $('html, body').animate({
                                scrollTop: $form.parent().parent().offset().top - $('#header').height() - 10
                            },
                            300);
                    }
                }
            });
        },
        dialogTemplate: null,
        coupons: [],
        store: [],
        dialogContent: null,
        dialog: null,
        userShareParams: '',
        setupDialog: function() {
            self.dialog = $('.dialogHolder');
            if (typeof window.coupons !== 'undefined') {
                self.coupons = window.coupons;
                window.coupons = {};
                $('.couponsScript').remove();
            }
            $('body').on('click', '.couponCodeButton, .couponCodeLink', self.openDialog);
            self.dialog.find('.modalOverlay').on('click', self.closeDialog);
            self.dialog.find('.close').on('click', self.closeDialog);
            self.dialog.find('.permCouponUrl').on('click',
                function() {
                    $(this).focus();
                    $(this)[0].setSelectionRange(0, this.value.length);
                });
        },
        goToUrl: function() {
            var permUrl = $(this).attr('data-coupon-href');
            if ($(this).hasClass('newTab')) {
                window.open(permUrl);
            } else {
                window.location = permUrl;
            }
        },
        openDialog: function(e) {
            e.stopPropagation();
            e.stopImmediatePropagation();
            e.preventDefault();
            var parent = $(this).parents('.singleCouponContainer:first');
            var couponId = parent.attr('data-coupon-id');
            var permUrl = $(this).attr('data-coupon-href');
            if (!permUrl) {
                permUrl = $(this).attr('href');
            }
            if (!permUrl) {
                permUrl = 'https://' + window.location.host + window.location.pathname + '?code=' + couponId + window.location.hash;
            }
            var url = $(this).attr('data-href');
            document.cookie = 'viewedCoupon' + couponId + '=1;path=/';
            var newWindow = window.open(permUrl);
            if (typeof window.sessionStorage !== 'undefined' && typeof window.history !== 'undefined' && url) {
                setTimeout(function() {
                        window.location = url;
                    },
                    0);
            } else if (url) {
                window.location = url;
            }
            return false;
        },
        showCodeDialog: function() {
            var couponId = $(this).attr('data-coupon-id');
            var coupon = self.coupons[couponId] || {};
            var didItWork = $(this).find('.didItWork').find('.active');
            var voted = 0;
            if (didItWork.length) {
                voted = didItWork.parent().hasClass('didItWorkUp') ? 1 : -1;
            }
            var shareUrl = 'http://' + window.location.host + self.store.couponUrl + '/' + coupon.id;
            var options = {
                store: self.store,
                coupon: coupon,
                votedDownClass: voted < 0 ? 'active': (voted > 0 ? 'disabled': 'didCouponWorkButton'),
                votedUpClass: voted > 0 ? 'active': (voted < 0 ? 'disabled': 'didCouponWorkButton'),
                shareUrl: shareUrl,
                fullShareUrl: shareUrl + self.userShareParams
            };
            self.dialogContent.html(self.dialogTemplate.render(options));
            self.dialogContent.find('.didCouponWorkButton').on('click', self.voteCoupon);
            if (typeof stButtons !== 'undefined') {
                stButtons.locateElements();
            }
            self.dialog.fadeIn();
        },
        closeDialog: function() {
            self.dialog.fadeOut();
            self.dialog.removeClass('show');
            var newUrl = (window.location.href).replace(/\?.*?$/, '');
            history.replaceState(null, null, newUrl);
        }
    });
    self.init();
}
var store = null;
$(document).ready(function() {
    store = new Store();
});
function updateCouponsFilter() {
    if (store) {}
}
function switchCouponTypeMain(printable, size) {
    if (printable == 1) {
        $('#submit-coupon-code-' + size).css('display', 'none');
    } else {
        $('#submit-coupon-code-' + size).css('display', 'block');
    }
}
function switchCouponType(printable) {
    if ((printable == 1) || (printable == 2)) {
        $('#submit-coupon-code').css('display', 'none');
    } else {
        $('#submit-coupon-code').css('display', 'block');
    }
}
function switchCouponTypeSubmit(printable) {
    if (printable == 1) {
        $('#submit-coupon-code').css('display', 'none');
    } else {
        $('#submit-coupon-code').css('display', 'block');
    }
}
function focusSubscribe(obj) {
    obj.style.background = '#e6e6e6';
    if (obj.value == 'Your email address') {
        obj.value = '';
    }
    obj.style.color = '#333';
}
function blurSubscribe(obj) {
    obj.style.background = '#fff';
    if (obj.value == '') {
        obj.style.color = '#aaa';
        obj.value = 'Your email address';
    }
}
function showCouponComments(id) {
    if ($('#coupon_comment' + id).is(':hidden')) {
        $('#coupon_comment' + id).slideDown(600);
        $('#toggle_arrow' + id).attr('class', 'arrow-down');
    } else {
        $('#coupon_comment' + id).slideUp(600);
        $('#toggle_arrow' + id).attr('class', 'arrow-up');
    }
}
function check_submit_coupon(form) {
    if (form.printable.value == 2) {
        form.online_url.value = form.online_url2.value;
    }
    if (form.store.value == '') {
        alert('Enter store.');
        form.store.focus();
        return false;
    }
    if (form.title.value == '') {
        alert('Enter description.');
        form.title.focus();
        return false;
    }
    $('#formSubmit').val("Processing..").attr("disabled", "disabled");
}
function attach_coupon_file() {
    toggleDisplay("dis_coupon_attachment");
}
function toggleElem(style, selector) {
    if (style == 'slide') {
        $(selector).slideToggle(300);
    } else if (style == 'appear') {
        $(selector).fadeToggle(300);
    }
}
function shareCoupon(couponId, associateId) {
    var shareLinks = $('.coupon-like-' + couponId);
    var shareBoxes = $('.coupon-share-' + couponId);
    $.each(shareLinks,
        function(key, link) {
            $(link).removeAttr('onclick').click(function() {
                toggleElem('slide', '.coupon-share-' + couponId)
            });
        });
    if (!$.browser.msie) {
        $.each(shareBoxes,
            function(key, box) {
                $(box).slideDown(300);
            });
    }
    $.ajax({
        url: '/share.php',
        type: 'post',
        data: {
            couponId: couponId,
            associateId: associateId
        },
        success: function(html) {
            $.each(shareBoxes,
                function(key, box) {
                    $(box).html(html);
                });
        }
    });
    return false;
}
function switchManageCategory(categoryId, categoryIdStr) {
    var categoryIdArray = categoryIdStr.split(',');
    for (var i = 0; i < categoryIdArray.length; i++) {
        $('#stores-cat-' + categoryIdArray[i]).css('display', 'none');
        $('#stores-tab-' + categoryIdArray[i]).attr('class', '');
    }
    $('#stores-tab-' + categoryId).attr('class', 'selected');
    $('#stores-cat-' + categoryId).css('display', 'block');
}
function changeCouponType(printable) {
    if (printable == 1 || printable == 4) {
        var type = 'printable';
    } else if (printable == 2) {
        var type = 'instore';
    } else {
        var type = 'online';
    }
    var divId = 'coupon_' + type + '_form';
    var tabId = 'submit-' + type + '-tab';
    $('#coupon_online_form').css('display', 'none');
    $('#coupon_printable_form').css('display', 'none');
    $('#coupon_instore_form').css('display', 'none');
    $('#' + divId).css('display', 'block');
}
function changeUploadType(type) {
    var divId = 'printable-' + type;
    var tabId = 'printable-' + type + '-tab';
    $('#printable-url').css('display', 'none');
    $('#printable-upload').css('display', 'none');
    $('#printable-url-tab').removeAttr('class');
    $('#printable-upload-tab').removeAttr('class');
    $('#' + divId).css('display', 'block');
    $('#' + tabId).attr('class', 'selected');
}
function couponClicked(e) {
    var isMobile = $('html.mobile').length;
    if (!isMobile) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
    }
    var url = $(this).attr('href');
    var matches = url.match(/cid=(\d+)|(?:\/(\d+)p(?:\?.*)?$)/);
    var couponId = null;
    if (matches[1]) {
        couponId = matches[1];
    } else if (matches[2]) {
        couponId = matches[2];
    }
    if (couponId == null || parseInt(couponId) < 1) {
        return;
    }
    window.open('/couponPopup.php?cid=' + couponId, "couponpopup", "location=0,status=0,scrollbars=1,width=300,height=500");
    if (!isMobile) {
        setTimeout(function() {
                window.location = url;
            },
            500);
    }
}
function RecStores() {
    var self = this;
    $.extend(self, {
        page: 1,
        maxPage: 5,
        init: function() {
            self.registerEvents();
        },
        registerEvents: function() {
            $('#viewMoreRecStores').click(self.fetchStores);
            setupInterestsButton("#addedInterests");
        },
        fetchStores: function() {
            var $this = $(this);
            if ($(this).hasClass('loading')) {
                return;
            }
            var id = $(this).attr('data-id');
            $(this).addClass('loading');
            $(this).text('Loading...');
            $.get('/ajax/ajax.recStores.php', {
                    page: ++self.page,
                    id: id
                },
                function(html) {
                    $this.text('Explore Similar Stores');
                    $this.removeClass('loading');
                    if (self.page >= self.maxPage) {
                        $this.hide();
                    }
                    if (html) {
                        var $div = $('<div style="display: none;"></div>');
                        $div.append(html);
                        $this.before($div);
                        $div.slideDown(1000);
                    }
                })
        }
    });
    self.init();
}
function selectTermRangeStats(couponId, term) {
    var dataString = 'couponId=' + couponId + '&term=' + term;
    $.ajax({
        type: "POST",
        url: "/ajax_admin/ajax.showCouponDetailStats.php",
        data: dataString,
        success: function(data) {
            var divs = $('.couponDetailStats' + couponId);
            $.each(divs,
                function(key, div) {
                    $(div).html(data).load();
                });
        }
    });
}
$(document).ready(function() {
    $('.popupCoupon').click(couponClicked);
    new RecStores();
});
function AjaxView(containerId, url, callback) {
    var self = this;
    var container = $(containerId);
    $.extend(self, {
        init: function() {
            if (!container.length) {
                return;
            }
            self.fetchView();
        },
        fetchView: function() {
            $.ajax({
                url: url,
                headers: {
                    'x-ajax': 1
                },
                success: function(html) {
                    container.html(html);
                    callback();
                }
            })
        }
    });
    self.init();
} (function($) {
    if (typeof $.fn.each2 == "undefined") {
        $.extend($.fn, {
            each2: function(c) {
                var j = $([0]),
                    i = -1,
                    l = this.length;
                while (++i < l && (j.context = j[0] = this[i]) && c.call(j[0], i, j) !== false);
                return this;
            }
        });
    }
})(jQuery); (function($, undefined) {
    "use strict";
    if (window.Select2 !== undefined) {
        return;
    }
    var KEY, AbstractSelect2, SingleSelect2, MultiSelect2, nextUid, sizer, lastMousePosition = {
            x: 0,
            y: 0
        },
        $document,
        scrollBarDimensions,
        KEY = {
            TAB: 9,
            ENTER: 13,
            ESC: 27,
            SPACE: 32,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            SHIFT: 16,
            CTRL: 17,
            ALT: 18,
            PAGE_UP: 33,
            PAGE_DOWN: 34,
            HOME: 36,
            END: 35,
            BACKSPACE: 8,
            DELETE: 46,
            isArrow: function(k) {
                k = k.which ? k.which: k;
                switch (k) {
                    case KEY.LEFT:
                    case KEY.RIGHT:
                    case KEY.UP:
                    case KEY.DOWN:
                        return true;
                }
                return false;
            },
            isControl: function(e) {
                var k = e.which;
                switch (k) {
                    case KEY.SHIFT:
                    case KEY.CTRL:
                    case KEY.ALT:
                        return true;
                }
                if (e.metaKey) return true;
                return false;
            },
            isFunctionKey: function(k) {
                k = k.which ? k.which: k;
                return k >= 112 && k <= 123;
            }
        },
        MEASURE_SCROLLBAR_TEMPLATE = "<div class='select2-measure-scrollbar'></div>",
        DIACRITICS = {
            "\u24B6": "A",
            "\uFF21": "A",
            "\u00C0": "A",
            "\u00C1": "A",
            "\u00C2": "A",
            "\u1EA6": "A",
            "\u1EA4": "A",
            "\u1EAA": "A",
            "\u1EA8": "A",
            "\u00C3": "A",
            "\u0100": "A",
            "\u0102": "A",
            "\u1EB0": "A",
            "\u1EAE": "A",
            "\u1EB4": "A",
            "\u1EB2": "A",
            "\u0226": "A",
            "\u01E0": "A",
            "\u00C4": "A",
            "\u01DE": "A",
            "\u1EA2": "A",
            "\u00C5": "A",
            "\u01FA": "A",
            "\u01CD": "A",
            "\u0200": "A",
            "\u0202": "A",
            "\u1EA0": "A",
            "\u1EAC": "A",
            "\u1EB6": "A",
            "\u1E00": "A",
            "\u0104": "A",
            "\u023A": "A",
            "\u2C6F": "A",
            "\uA732": "AA",
            "\u00C6": "AE",
            "\u01FC": "AE",
            "\u01E2": "AE",
            "\uA734": "AO",
            "\uA736": "AU",
            "\uA738": "AV",
            "\uA73A": "AV",
            "\uA73C": "AY",
            "\u24B7": "B",
            "\uFF22": "B",
            "\u1E02": "B",
            "\u1E04": "B",
            "\u1E06": "B",
            "\u0243": "B",
            "\u0182": "B",
            "\u0181": "B",
            "\u24B8": "C",
            "\uFF23": "C",
            "\u0106": "C",
            "\u0108": "C",
            "\u010A": "C",
            "\u010C": "C",
            "\u00C7": "C",
            "\u1E08": "C",
            "\u0187": "C",
            "\u023B": "C",
            "\uA73E": "C",
            "\u24B9": "D",
            "\uFF24": "D",
            "\u1E0A": "D",
            "\u010E": "D",
            "\u1E0C": "D",
            "\u1E10": "D",
            "\u1E12": "D",
            "\u1E0E": "D",
            "\u0110": "D",
            "\u018B": "D",
            "\u018A": "D",
            "\u0189": "D",
            "\uA779": "D",
            "\u01F1": "DZ",
            "\u01C4": "DZ",
            "\u01F2": "Dz",
            "\u01C5": "Dz",
            "\u24BA": "E",
            "\uFF25": "E",
            "\u00C8": "E",
            "\u00C9": "E",
            "\u00CA": "E",
            "\u1EC0": "E",
            "\u1EBE": "E",
            "\u1EC4": "E",
            "\u1EC2": "E",
            "\u1EBC": "E",
            "\u0112": "E",
            "\u1E14": "E",
            "\u1E16": "E",
            "\u0114": "E",
            "\u0116": "E",
            "\u00CB": "E",
            "\u1EBA": "E",
            "\u011A": "E",
            "\u0204": "E",
            "\u0206": "E",
            "\u1EB8": "E",
            "\u1EC6": "E",
            "\u0228": "E",
            "\u1E1C": "E",
            "\u0118": "E",
            "\u1E18": "E",
            "\u1E1A": "E",
            "\u0190": "E",
            "\u018E": "E",
            "\u24BB": "F",
            "\uFF26": "F",
            "\u1E1E": "F",
            "\u0191": "F",
            "\uA77B": "F",
            "\u24BC": "G",
            "\uFF27": "G",
            "\u01F4": "G",
            "\u011C": "G",
            "\u1E20": "G",
            "\u011E": "G",
            "\u0120": "G",
            "\u01E6": "G",
            "\u0122": "G",
            "\u01E4": "G",
            "\u0193": "G",
            "\uA7A0": "G",
            "\uA77D": "G",
            "\uA77E": "G",
            "\u24BD": "H",
            "\uFF28": "H",
            "\u0124": "H",
            "\u1E22": "H",
            "\u1E26": "H",
            "\u021E": "H",
            "\u1E24": "H",
            "\u1E28": "H",
            "\u1E2A": "H",
            "\u0126": "H",
            "\u2C67": "H",
            "\u2C75": "H",
            "\uA78D": "H",
            "\u24BE": "I",
            "\uFF29": "I",
            "\u00CC": "I",
            "\u00CD": "I",
            "\u00CE": "I",
            "\u0128": "I",
            "\u012A": "I",
            "\u012C": "I",
            "\u0130": "I",
            "\u00CF": "I",
            "\u1E2E": "I",
            "\u1EC8": "I",
            "\u01CF": "I",
            "\u0208": "I",
            "\u020A": "I",
            "\u1ECA": "I",
            "\u012E": "I",
            "\u1E2C": "I",
            "\u0197": "I",
            "\u24BF": "J",
            "\uFF2A": "J",
            "\u0134": "J",
            "\u0248": "J",
            "\u24C0": "K",
            "\uFF2B": "K",
            "\u1E30": "K",
            "\u01E8": "K",
            "\u1E32": "K",
            "\u0136": "K",
            "\u1E34": "K",
            "\u0198": "K",
            "\u2C69": "K",
            "\uA740": "K",
            "\uA742": "K",
            "\uA744": "K",
            "\uA7A2": "K",
            "\u24C1": "L",
            "\uFF2C": "L",
            "\u013F": "L",
            "\u0139": "L",
            "\u013D": "L",
            "\u1E36": "L",
            "\u1E38": "L",
            "\u013B": "L",
            "\u1E3C": "L",
            "\u1E3A": "L",
            "\u0141": "L",
            "\u023D": "L",
            "\u2C62": "L",
            "\u2C60": "L",
            "\uA748": "L",
            "\uA746": "L",
            "\uA780": "L",
            "\u01C7": "LJ",
            "\u01C8": "Lj",
            "\u24C2": "M",
            "\uFF2D": "M",
            "\u1E3E": "M",
            "\u1E40": "M",
            "\u1E42": "M",
            "\u2C6E": "M",
            "\u019C": "M",
            "\u24C3": "N",
            "\uFF2E": "N",
            "\u01F8": "N",
            "\u0143": "N",
            "\u00D1": "N",
            "\u1E44": "N",
            "\u0147": "N",
            "\u1E46": "N",
            "\u0145": "N",
            "\u1E4A": "N",
            "\u1E48": "N",
            "\u0220": "N",
            "\u019D": "N",
            "\uA790": "N",
            "\uA7A4": "N",
            "\u01CA": "NJ",
            "\u01CB": "Nj",
            "\u24C4": "O",
            "\uFF2F": "O",
            "\u00D2": "O",
            "\u00D3": "O",
            "\u00D4": "O",
            "\u1ED2": "O",
            "\u1ED0": "O",
            "\u1ED6": "O",
            "\u1ED4": "O",
            "\u00D5": "O",
            "\u1E4C": "O",
            "\u022C": "O",
            "\u1E4E": "O",
            "\u014C": "O",
            "\u1E50": "O",
            "\u1E52": "O",
            "\u014E": "O",
            "\u022E": "O",
            "\u0230": "O",
            "\u00D6": "O",
            "\u022A": "O",
            "\u1ECE": "O",
            "\u0150": "O",
            "\u01D1": "O",
            "\u020C": "O",
            "\u020E": "O",
            "\u01A0": "O",
            "\u1EDC": "O",
            "\u1EDA": "O",
            "\u1EE0": "O",
            "\u1EDE": "O",
            "\u1EE2": "O",
            "\u1ECC": "O",
            "\u1ED8": "O",
            "\u01EA": "O",
            "\u01EC": "O",
            "\u00D8": "O",
            "\u01FE": "O",
            "\u0186": "O",
            "\u019F": "O",
            "\uA74A": "O",
            "\uA74C": "O",
            "\u01A2": "OI",
            "\uA74E": "OO",
            "\u0222": "OU",
            "\u24C5": "P",
            "\uFF30": "P",
            "\u1E54": "P",
            "\u1E56": "P",
            "\u01A4": "P",
            "\u2C63": "P",
            "\uA750": "P",
            "\uA752": "P",
            "\uA754": "P",
            "\u24C6": "Q",
            "\uFF31": "Q",
            "\uA756": "Q",
            "\uA758": "Q",
            "\u024A": "Q",
            "\u24C7": "R",
            "\uFF32": "R",
            "\u0154": "R",
            "\u1E58": "R",
            "\u0158": "R",
            "\u0210": "R",
            "\u0212": "R",
            "\u1E5A": "R",
            "\u1E5C": "R",
            "\u0156": "R",
            "\u1E5E": "R",
            "\u024C": "R",
            "\u2C64": "R",
            "\uA75A": "R",
            "\uA7A6": "R",
            "\uA782": "R",
            "\u24C8": "S",
            "\uFF33": "S",
            "\u1E9E": "S",
            "\u015A": "S",
            "\u1E64": "S",
            "\u015C": "S",
            "\u1E60": "S",
            "\u0160": "S",
            "\u1E66": "S",
            "\u1E62": "S",
            "\u1E68": "S",
            "\u0218": "S",
            "\u015E": "S",
            "\u2C7E": "S",
            "\uA7A8": "S",
            "\uA784": "S",
            "\u24C9": "T",
            "\uFF34": "T",
            "\u1E6A": "T",
            "\u0164": "T",
            "\u1E6C": "T",
            "\u021A": "T",
            "\u0162": "T",
            "\u1E70": "T",
            "\u1E6E": "T",
            "\u0166": "T",
            "\u01AC": "T",
            "\u01AE": "T",
            "\u023E": "T",
            "\uA786": "T",
            "\uA728": "TZ",
            "\u24CA": "U",
            "\uFF35": "U",
            "\u00D9": "U",
            "\u00DA": "U",
            "\u00DB": "U",
            "\u0168": "U",
            "\u1E78": "U",
            "\u016A": "U",
            "\u1E7A": "U",
            "\u016C": "U",
            "\u00DC": "U",
            "\u01DB": "U",
            "\u01D7": "U",
            "\u01D5": "U",
            "\u01D9": "U",
            "\u1EE6": "U",
            "\u016E": "U",
            "\u0170": "U",
            "\u01D3": "U",
            "\u0214": "U",
            "\u0216": "U",
            "\u01AF": "U",
            "\u1EEA": "U",
            "\u1EE8": "U",
            "\u1EEE": "U",
            "\u1EEC": "U",
            "\u1EF0": "U",
            "\u1EE4": "U",
            "\u1E72": "U",
            "\u0172": "U",
            "\u1E76": "U",
            "\u1E74": "U",
            "\u0244": "U",
            "\u24CB": "V",
            "\uFF36": "V",
            "\u1E7C": "V",
            "\u1E7E": "V",
            "\u01B2": "V",
            "\uA75E": "V",
            "\u0245": "V",
            "\uA760": "VY",
            "\u24CC": "W",
            "\uFF37": "W",
            "\u1E80": "W",
            "\u1E82": "W",
            "\u0174": "W",
            "\u1E86": "W",
            "\u1E84": "W",
            "\u1E88": "W",
            "\u2C72": "W",
            "\u24CD": "X",
            "\uFF38": "X",
            "\u1E8A": "X",
            "\u1E8C": "X",
            "\u24CE": "Y",
            "\uFF39": "Y",
            "\u1EF2": "Y",
            "\u00DD": "Y",
            "\u0176": "Y",
            "\u1EF8": "Y",
            "\u0232": "Y",
            "\u1E8E": "Y",
            "\u0178": "Y",
            "\u1EF6": "Y",
            "\u1EF4": "Y",
            "\u01B3": "Y",
            "\u024E": "Y",
            "\u1EFE": "Y",
            "\u24CF": "Z",
            "\uFF3A": "Z",
            "\u0179": "Z",
            "\u1E90": "Z",
            "\u017B": "Z",
            "\u017D": "Z",
            "\u1E92": "Z",
            "\u1E94": "Z",
            "\u01B5": "Z",
            "\u0224": "Z",
            "\u2C7F": "Z",
            "\u2C6B": "Z",
            "\uA762": "Z",
            "\u24D0": "a",
            "\uFF41": "a",
            "\u1E9A": "a",
            "\u00E0": "a",
            "\u00E1": "a",
            "\u00E2": "a",
            "\u1EA7": "a",
            "\u1EA5": "a",
            "\u1EAB": "a",
            "\u1EA9": "a",
            "\u00E3": "a",
            "\u0101": "a",
            "\u0103": "a",
            "\u1EB1": "a",
            "\u1EAF": "a",
            "\u1EB5": "a",
            "\u1EB3": "a",
            "\u0227": "a",
            "\u01E1": "a",
            "\u00E4": "a",
            "\u01DF": "a",
            "\u1EA3": "a",
            "\u00E5": "a",
            "\u01FB": "a",
            "\u01CE": "a",
            "\u0201": "a",
            "\u0203": "a",
            "\u1EA1": "a",
            "\u1EAD": "a",
            "\u1EB7": "a",
            "\u1E01": "a",
            "\u0105": "a",
            "\u2C65": "a",
            "\u0250": "a",
            "\uA733": "aa",
            "\u00E6": "ae",
            "\u01FD": "ae",
            "\u01E3": "ae",
            "\uA735": "ao",
            "\uA737": "au",
            "\uA739": "av",
            "\uA73B": "av",
            "\uA73D": "ay",
            "\u24D1": "b",
            "\uFF42": "b",
            "\u1E03": "b",
            "\u1E05": "b",
            "\u1E07": "b",
            "\u0180": "b",
            "\u0183": "b",
            "\u0253": "b",
            "\u24D2": "c",
            "\uFF43": "c",
            "\u0107": "c",
            "\u0109": "c",
            "\u010B": "c",
            "\u010D": "c",
            "\u00E7": "c",
            "\u1E09": "c",
            "\u0188": "c",
            "\u023C": "c",
            "\uA73F": "c",
            "\u2184": "c",
            "\u24D3": "d",
            "\uFF44": "d",
            "\u1E0B": "d",
            "\u010F": "d",
            "\u1E0D": "d",
            "\u1E11": "d",
            "\u1E13": "d",
            "\u1E0F": "d",
            "\u0111": "d",
            "\u018C": "d",
            "\u0256": "d",
            "\u0257": "d",
            "\uA77A": "d",
            "\u01F3": "dz",
            "\u01C6": "dz",
            "\u24D4": "e",
            "\uFF45": "e",
            "\u00E8": "e",
            "\u00E9": "e",
            "\u00EA": "e",
            "\u1EC1": "e",
            "\u1EBF": "e",
            "\u1EC5": "e",
            "\u1EC3": "e",
            "\u1EBD": "e",
            "\u0113": "e",
            "\u1E15": "e",
            "\u1E17": "e",
            "\u0115": "e",
            "\u0117": "e",
            "\u00EB": "e",
            "\u1EBB": "e",
            "\u011B": "e",
            "\u0205": "e",
            "\u0207": "e",
            "\u1EB9": "e",
            "\u1EC7": "e",
            "\u0229": "e",
            "\u1E1D": "e",
            "\u0119": "e",
            "\u1E19": "e",
            "\u1E1B": "e",
            "\u0247": "e",
            "\u025B": "e",
            "\u01DD": "e",
            "\u24D5": "f",
            "\uFF46": "f",
            "\u1E1F": "f",
            "\u0192": "f",
            "\uA77C": "f",
            "\u24D6": "g",
            "\uFF47": "g",
            "\u01F5": "g",
            "\u011D": "g",
            "\u1E21": "g",
            "\u011F": "g",
            "\u0121": "g",
            "\u01E7": "g",
            "\u0123": "g",
            "\u01E5": "g",
            "\u0260": "g",
            "\uA7A1": "g",
            "\u1D79": "g",
            "\uA77F": "g",
            "\u24D7": "h",
            "\uFF48": "h",
            "\u0125": "h",
            "\u1E23": "h",
            "\u1E27": "h",
            "\u021F": "h",
            "\u1E25": "h",
            "\u1E29": "h",
            "\u1E2B": "h",
            "\u1E96": "h",
            "\u0127": "h",
            "\u2C68": "h",
            "\u2C76": "h",
            "\u0265": "h",
            "\u0195": "hv",
            "\u24D8": "i",
            "\uFF49": "i",
            "\u00EC": "i",
            "\u00ED": "i",
            "\u00EE": "i",
            "\u0129": "i",
            "\u012B": "i",
            "\u012D": "i",
            "\u00EF": "i",
            "\u1E2F": "i",
            "\u1EC9": "i",
            "\u01D0": "i",
            "\u0209": "i",
            "\u020B": "i",
            "\u1ECB": "i",
            "\u012F": "i",
            "\u1E2D": "i",
            "\u0268": "i",
            "\u0131": "i",
            "\u24D9": "j",
            "\uFF4A": "j",
            "\u0135": "j",
            "\u01F0": "j",
            "\u0249": "j",
            "\u24DA": "k",
            "\uFF4B": "k",
            "\u1E31": "k",
            "\u01E9": "k",
            "\u1E33": "k",
            "\u0137": "k",
            "\u1E35": "k",
            "\u0199": "k",
            "\u2C6A": "k",
            "\uA741": "k",
            "\uA743": "k",
            "\uA745": "k",
            "\uA7A3": "k",
            "\u24DB": "l",
            "\uFF4C": "l",
            "\u0140": "l",
            "\u013A": "l",
            "\u013E": "l",
            "\u1E37": "l",
            "\u1E39": "l",
            "\u013C": "l",
            "\u1E3D": "l",
            "\u1E3B": "l",
            "\u017F": "l",
            "\u0142": "l",
            "\u019A": "l",
            "\u026B": "l",
            "\u2C61": "l",
            "\uA749": "l",
            "\uA781": "l",
            "\uA747": "l",
            "\u01C9": "lj",
            "\u24DC": "m",
            "\uFF4D": "m",
            "\u1E3F": "m",
            "\u1E41": "m",
            "\u1E43": "m",
            "\u0271": "m",
            "\u026F": "m",
            "\u24DD": "n",
            "\uFF4E": "n",
            "\u01F9": "n",
            "\u0144": "n",
            "\u00F1": "n",
            "\u1E45": "n",
            "\u0148": "n",
            "\u1E47": "n",
            "\u0146": "n",
            "\u1E4B": "n",
            "\u1E49": "n",
            "\u019E": "n",
            "\u0272": "n",
            "\u0149": "n",
            "\uA791": "n",
            "\uA7A5": "n",
            "\u01CC": "nj",
            "\u24DE": "o",
            "\uFF4F": "o",
            "\u00F2": "o",
            "\u00F3": "o",
            "\u00F4": "o",
            "\u1ED3": "o",
            "\u1ED1": "o",
            "\u1ED7": "o",
            "\u1ED5": "o",
            "\u00F5": "o",
            "\u1E4D": "o",
            "\u022D": "o",
            "\u1E4F": "o",
            "\u014D": "o",
            "\u1E51": "o",
            "\u1E53": "o",
            "\u014F": "o",
            "\u022F": "o",
            "\u0231": "o",
            "\u00F6": "o",
            "\u022B": "o",
            "\u1ECF": "o",
            "\u0151": "o",
            "\u01D2": "o",
            "\u020D": "o",
            "\u020F": "o",
            "\u01A1": "o",
            "\u1EDD": "o",
            "\u1EDB": "o",
            "\u1EE1": "o",
            "\u1EDF": "o",
            "\u1EE3": "o",
            "\u1ECD": "o",
            "\u1ED9": "o",
            "\u01EB": "o",
            "\u01ED": "o",
            "\u00F8": "o",
            "\u01FF": "o",
            "\u0254": "o",
            "\uA74B": "o",
            "\uA74D": "o",
            "\u0275": "o",
            "\u01A3": "oi",
            "\u0223": "ou",
            "\uA74F": "oo",
            "\u24DF": "p",
            "\uFF50": "p",
            "\u1E55": "p",
            "\u1E57": "p",
            "\u01A5": "p",
            "\u1D7D": "p",
            "\uA751": "p",
            "\uA753": "p",
            "\uA755": "p",
            "\u24E0": "q",
            "\uFF51": "q",
            "\u024B": "q",
            "\uA757": "q",
            "\uA759": "q",
            "\u24E1": "r",
            "\uFF52": "r",
            "\u0155": "r",
            "\u1E59": "r",
            "\u0159": "r",
            "\u0211": "r",
            "\u0213": "r",
            "\u1E5B": "r",
            "\u1E5D": "r",
            "\u0157": "r",
            "\u1E5F": "r",
            "\u024D": "r",
            "\u027D": "r",
            "\uA75B": "r",
            "\uA7A7": "r",
            "\uA783": "r",
            "\u24E2": "s",
            "\uFF53": "s",
            "\u00DF": "s",
            "\u015B": "s",
            "\u1E65": "s",
            "\u015D": "s",
            "\u1E61": "s",
            "\u0161": "s",
            "\u1E67": "s",
            "\u1E63": "s",
            "\u1E69": "s",
            "\u0219": "s",
            "\u015F": "s",
            "\u023F": "s",
            "\uA7A9": "s",
            "\uA785": "s",
            "\u1E9B": "s",
            "\u24E3": "t",
            "\uFF54": "t",
            "\u1E6B": "t",
            "\u1E97": "t",
            "\u0165": "t",
            "\u1E6D": "t",
            "\u021B": "t",
            "\u0163": "t",
            "\u1E71": "t",
            "\u1E6F": "t",
            "\u0167": "t",
            "\u01AD": "t",
            "\u0288": "t",
            "\u2C66": "t",
            "\uA787": "t",
            "\uA729": "tz",
            "\u24E4": "u",
            "\uFF55": "u",
            "\u00F9": "u",
            "\u00FA": "u",
            "\u00FB": "u",
            "\u0169": "u",
            "\u1E79": "u",
            "\u016B": "u",
            "\u1E7B": "u",
            "\u016D": "u",
            "\u00FC": "u",
            "\u01DC": "u",
            "\u01D8": "u",
            "\u01D6": "u",
            "\u01DA": "u",
            "\u1EE7": "u",
            "\u016F": "u",
            "\u0171": "u",
            "\u01D4": "u",
            "\u0215": "u",
            "\u0217": "u",
            "\u01B0": "u",
            "\u1EEB": "u",
            "\u1EE9": "u",
            "\u1EEF": "u",
            "\u1EED": "u",
            "\u1EF1": "u",
            "\u1EE5": "u",
            "\u1E73": "u",
            "\u0173": "u",
            "\u1E77": "u",
            "\u1E75": "u",
            "\u0289": "u",
            "\u24E5": "v",
            "\uFF56": "v",
            "\u1E7D": "v",
            "\u1E7F": "v",
            "\u028B": "v",
            "\uA75F": "v",
            "\u028C": "v",
            "\uA761": "vy",
            "\u24E6": "w",
            "\uFF57": "w",
            "\u1E81": "w",
            "\u1E83": "w",
            "\u0175": "w",
            "\u1E87": "w",
            "\u1E85": "w",
            "\u1E98": "w",
            "\u1E89": "w",
            "\u2C73": "w",
            "\u24E7": "x",
            "\uFF58": "x",
            "\u1E8B": "x",
            "\u1E8D": "x",
            "\u24E8": "y",
            "\uFF59": "y",
            "\u1EF3": "y",
            "\u00FD": "y",
            "\u0177": "y",
            "\u1EF9": "y",
            "\u0233": "y",
            "\u1E8F": "y",
            "\u00FF": "y",
            "\u1EF7": "y",
            "\u1E99": "y",
            "\u1EF5": "y",
            "\u01B4": "y",
            "\u024F": "y",
            "\u1EFF": "y",
            "\u24E9": "z",
            "\uFF5A": "z",
            "\u017A": "z",
            "\u1E91": "z",
            "\u017C": "z",
            "\u017E": "z",
            "\u1E93": "z",
            "\u1E95": "z",
            "\u01B6": "z",
            "\u0225": "z",
            "\u0240": "z",
            "\u2C6C": "z",
            "\uA763": "z",
            "\u0386": "\u0391",
            "\u0388": "\u0395",
            "\u0389": "\u0397",
            "\u038A": "\u0399",
            "\u03AA": "\u0399",
            "\u038C": "\u039F",
            "\u038E": "\u03A5",
            "\u03AB": "\u03A5",
            "\u038F": "\u03A9",
            "\u03AC": "\u03B1",
            "\u03AD": "\u03B5",
            "\u03AE": "\u03B7",
            "\u03AF": "\u03B9",
            "\u03CA": "\u03B9",
            "\u0390": "\u03B9",
            "\u03CC": "\u03BF",
            "\u03CD": "\u03C5",
            "\u03CB": "\u03C5",
            "\u03B0": "\u03C5",
            "\u03C9": "\u03C9",
            "\u03C2": "\u03C3"
        };
    $document = $(document);
    nextUid = (function() {
        var counter = 1;
        return function() {
            return counter++;
        };
    } ());
    function reinsertElement(element) {
        var placeholder = $(document.createTextNode(''));
        element.before(placeholder);
        placeholder.before(element);
        placeholder.remove();
    }
    function stripDiacritics(str) {
        function match(a) {
            return DIACRITICS[a] || a;
        }
        return str.replace(/[^\u0000-\u007E]/g, match);
    }
    function indexOf(value, array) {
        var i = 0,
            l = array.length;
        for (; i < l; i = i + 1) {
            if (equal(value, array[i])) return i;
        }
        return - 1;
    }
    function measureScrollbar() {
        var $template = $(MEASURE_SCROLLBAR_TEMPLATE);
        $template.appendTo('body');
        var dim = {
            width: $template.width() - $template[0].clientWidth,
            height: $template.height() - $template[0].clientHeight
        };
        $template.remove();
        return dim;
    }
    function equal(a, b) {
        if (a === b) return true;
        if (a === undefined || b === undefined) return false;
        if (a === null || b === null) return false;
        if (a.constructor === String) return a + '' === b + '';
        if (b.constructor === String) return b + '' === a + '';
        return false;
    }
    function splitVal(string, separator) {
        var val, i, l;
        if (string === null || string.length < 1) return [];
        val = string.split(separator);
        for (i = 0, l = val.length; i < l; i = i + 1) val[i] = $.trim(val[i]);
        return val;
    }
    function getSideBorderPadding(element) {
        return element.outerWidth(false) - element.width();
    }
    function installKeyUpChangeEvent(element) {
        var key = "keyup-change-value";
        element.on("keydown",
            function() {
                if ($.data(element, key) === undefined) {
                    $.data(element, key, element.val());
                }
            });
        element.on("keyup",
            function() {
                var val = $.data(element, key);
                if (val !== undefined && element.val() !== val) {
                    $.removeData(element, key);
                    element.trigger("keyup-change");
                }
            });
    }
    function installFilteredMouseMove(element) {
        element.on("mousemove",
            function(e) {
                var lastpos = lastMousePosition;
                if (lastpos === undefined || lastpos.x !== e.pageX || lastpos.y !== e.pageY) {
                    $(e.target).trigger("mousemove-filtered", e);
                }
            });
    }
    function debounce(quietMillis, fn, ctx) {
        ctx = ctx || undefined;
        var timeout;
        return function() {
            var args = arguments;
            window.clearTimeout(timeout);
            timeout = window.setTimeout(function() {
                    fn.apply(ctx, args);
                },
                quietMillis);
        };
    }
    function installDebouncedScroll(threshold, element) {
        var notify = debounce(threshold,
            function(e) {
                element.trigger("scroll-debounced", e);
            });
        element.on("scroll",
            function(e) {
                if (indexOf(e.target, element.get()) >= 0) notify(e);
            });
    }
    function focus($el) {
        if ($el[0] === document.activeElement) return;
        window.setTimeout(function() {
                var el = $el[0],
                    pos = $el.val().length,
                    range;
                $el.focus();
                var isVisible = (el.offsetWidth > 0 || el.offsetHeight > 0);
                if (isVisible && el === document.activeElement) {
                    if (el.setSelectionRange) {
                        el.setSelectionRange(pos, pos);
                    } else if (el.createTextRange) {
                        range = el.createTextRange();
                        range.collapse(false);
                        range.select();
                    }
                }
            },
            0);
    }
    function getCursorInfo(el) {
        el = $(el)[0];
        var offset = 0;
        var length = 0;
        if ('selectionStart' in el) {
            offset = el.selectionStart;
            length = el.selectionEnd - offset;
        } else if ('selection' in document) {
            el.focus();
            var sel = document.selection.createRange();
            length = document.selection.createRange().text.length;
            sel.moveStart('character', -el.value.length);
            offset = sel.text.length - length;
        }
        return {
            offset: offset,
            length: length
        };
    }
    function killEvent(event) {
        event.preventDefault();
        event.stopPropagation();
    }
    function killEventImmediately(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
    }
    function measureTextWidth(e) {
        if (!sizer) {
            var style = e[0].currentStyle || window.getComputedStyle(e[0], null);
            sizer = $(document.createElement("div")).css({
                position: "absolute",
                left: "-10000px",
                top: "-10000px",
                display: "none",
                fontSize: style.fontSize,
                fontFamily: style.fontFamily,
                fontStyle: style.fontStyle,
                fontWeight: style.fontWeight,
                letterSpacing: style.letterSpacing,
                textTransform: style.textTransform,
                whiteSpace: "nowrap"
            });
            sizer.attr("class", "select2-sizer");
            $("body").append(sizer);
        }
        sizer.text(e.val());
        return sizer.width();
    }
    function syncCssClasses(dest, src, adapter) {
        var classes, replacements = [],
            adapted;
        classes = $.trim(dest.attr("class"));
        if (classes) {
            classes = '' + classes;
            $(classes.split(/\s+/)).each2(function() {
                if (this.indexOf("select2-") === 0) {
                    replacements.push(this);
                }
            });
        }
        classes = $.trim(src.attr("class"));
        if (classes) {
            classes = '' + classes;
            $(classes.split(/\s+/)).each2(function() {
                if (this.indexOf("select2-") !== 0) {
                    adapted = adapter(this);
                    if (adapted) {
                        replacements.push(adapted);
                    }
                }
            });
        }
        dest.attr("class", replacements.join(" "));
    }
    function markMatch(text, term, markup, escapeMarkup) {
        var match = stripDiacritics(text.toUpperCase()).indexOf(stripDiacritics(term.toUpperCase())),
            tl = term.length;
        if (match < 0) {
            markup.push(escapeMarkup(text));
            return;
        }
        markup.push(escapeMarkup(text.substring(0, match)));
        markup.push("<span class='select2-match'>");
        markup.push(escapeMarkup(text.substring(match, match + tl)));
        markup.push("</span>");
        markup.push(escapeMarkup(text.substring(match + tl, text.length)));
    }
    function defaultEscapeMarkup(markup) {
        var replace_map = {
            '\\': '&#92;',
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;',
            "/": '&#47;'
        };
        return String(markup).replace(/[&<>"'\/\\]/g,
            function(match) {
                return replace_map[match];
            });
    }
    function ajax(options) {
        var timeout, handler = null,
            quietMillis = options.quietMillis || 100,
            ajaxUrl = options.url,
            self = this;
        return function(query) {
            window.clearTimeout(timeout);
            timeout = window.setTimeout(function() {
                    var data = options.data,
                        url = ajaxUrl,
                        transport = options.transport || $.fn.select2.ajaxDefaults.transport,
                        deprecated = {
                            type: options.type || 'GET',
                            cache: options.cache || false,
                            jsonpCallback: options.jsonpCallback || undefined,
                            dataType: options.dataType || "json"
                        },
                        params = $.extend({},
                            $.fn.select2.ajaxDefaults.params, deprecated);
                    data = data ? data.call(self, query.term, query.page, query.context) : null;
                    url = (typeof url === 'function') ? url.call(self, query.term, query.page, query.context) : url;
                    if (handler && typeof handler.abort === "function") {
                        handler.abort();
                    }
                    if (options.params) {
                        if ($.isFunction(options.params)) {
                            $.extend(params, options.params.call(self));
                        } else {
                            $.extend(params, options.params);
                        }
                    }
                    $.extend(params, {
                        url: url,
                        dataType: options.dataType,
                        data: data,
                        success: function(data) {
                            var results = options.results(data, query.page, query);
                            query.callback(results);
                        }
                    });
                    handler = transport.call(self, params);
                },
                quietMillis);
        };
    }
    function local(options) {
        var data = options,
            dataText, tmp, text = function(item) {
                return "" + item.text;
            };
        if ($.isArray(data)) {
            tmp = data;
            data = {
                results: tmp
            };
        }
        if ($.isFunction(data) === false) {
            tmp = data;
            data = function() {
                return tmp;
            };
        }
        var dataItem = data();
        if (dataItem.text) {
            text = dataItem.text;
            if (!$.isFunction(text)) {
                dataText = dataItem.text;
                text = function(item) {
                    return item[dataText];
                };
            }
        }
        return function(query) {
            var t = query.term,
                filtered = {
                    results: []
                },
                process;
            if (t === "") {
                query.callback(data());
                return;
            }
            process = function(datum, collection) {
                var group, attr;
                datum = datum[0];
                if (datum.children) {
                    group = {};
                    for (attr in datum) {
                        if (datum.hasOwnProperty(attr)) group[attr] = datum[attr];
                    }
                    group.children = [];
                    $(datum.children).each2(function(i, childDatum) {
                        process(childDatum, group.children);
                    });
                    if (group.children.length || query.matcher(t, text(group), datum)) {
                        collection.push(group);
                    }
                } else {
                    if (query.matcher(t, text(datum), datum)) {
                        collection.push(datum);
                    }
                }
            };
            $(data().results).each2(function(i, datum) {
                process(datum, filtered.results);
            });
            query.callback(filtered);
        };
    }
    function tags(data) {
        var isFunc = $.isFunction(data);
        return function(query) {
            var t = query.term,
                filtered = {
                    results: []
                };
            var result = isFunc ? data(query) : data;
            if ($.isArray(result)) {
                $(result).each(function() {
                    var isObject = this.text !== undefined,
                        text = isObject ? this.text: this;
                    if (t === "" || query.matcher(t, text)) {
                        filtered.results.push(isObject ? this: {
                            id: this,
                            text: this
                        });
                    }
                });
                query.callback(filtered);
            }
        };
    }
    function checkFormatter(formatter, formatterName) {
        if ($.isFunction(formatter)) return true;
        if (!formatter) return false;
        if (typeof(formatter) === 'string') return true;
        throw new Error(formatterName + " must be a string, function, or falsy value");
    }
    function evaluate(val, context) {
        if ($.isFunction(val)) {
            var args = Array.prototype.slice.call(arguments, 2);
            return val.apply(context, args);
        }
        return val;
    }
    function countResults(results) {
        var count = 0;
        $.each(results,
            function(i, item) {
                if (item.children) {
                    count += countResults(item.children);
                } else {
                    count++;
                }
            });
        return count;
    }
    function defaultTokenizer(input, selection, selectCallback, opts) {
        var original = input,
            dupe = false,
            token, index, i, l, separator;
        if (!opts.createSearchChoice || !opts.tokenSeparators || opts.tokenSeparators.length < 1) return undefined;
        while (true) {
            index = -1;
            for (i = 0, l = opts.tokenSeparators.length; i < l; i++) {
                separator = opts.tokenSeparators[i];
                index = input.indexOf(separator);
                if (index >= 0) break;
            }
            if (index < 0) break;
            token = input.substring(0, index);
            input = input.substring(index + separator.length);
            if (token.length > 0) {
                token = opts.createSearchChoice.call(this, token, selection);
                if (token !== undefined && token !== null && opts.id(token) !== undefined && opts.id(token) !== null) {
                    dupe = false;
                    for (i = 0, l = selection.length; i < l; i++) {
                        if (equal(opts.id(token), opts.id(selection[i]))) {
                            dupe = true;
                            break;
                        }
                    }
                    if (!dupe) selectCallback(token);
                }
            }
        }
        if (original !== input) return input;
    }
    function cleanupJQueryElements() {
        var self = this;
        $.each(arguments,
            function(i, element) {
                self[element].remove();
                self[element] = null;
            });
    }
    function clazz(SuperClass, methods) {
        var constructor = function() {};
        constructor.prototype = new SuperClass;
        constructor.prototype.constructor = constructor;
        constructor.prototype.parent = SuperClass.prototype;
        constructor.prototype = $.extend(constructor.prototype, methods);
        return constructor;
    }
    AbstractSelect2 = clazz(Object, {
        bind: function(func) {
            var self = this;
            return function() {
                func.apply(self, arguments);
            };
        },
        init: function(opts) {
            var results, search, resultsSelector = ".select2-results";
            this.opts = opts = this.prepareOpts(opts);
            this.id = opts.id;
            if (opts.element.data("select2") !== undefined && opts.element.data("select2") !== null) {
                opts.element.data("select2").destroy();
            }
            this.container = this.createContainer();
            this.liveRegion = $("<span>", {
                role: "status",
                "aria-live": "polite"
            }).addClass("select2-hidden-accessible").appendTo(document.body);
            this.containerId = "s2id_" + (opts.element.attr("id") || "autogen" + nextUid());
            this.containerEventName = this.containerId.replace(/([.])/g, '_').replace(/([;&,\-\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, '\\$1');
            this.container.attr("id", this.containerId);
            this.container.attr("title", opts.element.attr("title"));
            this.body = $("body");
            syncCssClasses(this.container, this.opts.element, this.opts.adaptContainerCssClass);
            this.container.attr("style", opts.element.attr("style"));
            this.container.css(evaluate(opts.containerCss, this.opts.element));
            this.container.addClass(evaluate(opts.containerCssClass, this.opts.element));
            this.elementTabIndex = this.opts.element.attr("tabindex");
            this.opts.element.data("select2", this).attr("tabindex", "-1").before(this.container).on("click.select2", killEvent);
            this.container.data("select2", this);
            this.dropdown = this.container.find(".select2-drop");
            syncCssClasses(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass);
            this.dropdown.addClass(evaluate(opts.dropdownCssClass, this.opts.element));
            this.dropdown.data("select2", this);
            this.dropdown.on("click", killEvent);
            this.results = results = this.container.find(resultsSelector);
            this.search = search = this.container.find("input.select2-input");
            this.queryCount = 0;
            this.resultsPage = 0;
            this.context = null;
            this.initContainer();
            this.container.on("click", killEvent);
            installFilteredMouseMove(this.results);
            this.dropdown.on("mousemove-filtered", resultsSelector, this.bind(this.highlightUnderEvent));
            this.dropdown.on("touchstart touchmove touchend", resultsSelector, this.bind(function(event) {
                this._touchEvent = true;
                this.highlightUnderEvent(event);
            }));
            this.dropdown.on("touchmove", resultsSelector, this.bind(this.touchMoved));
            this.dropdown.on("touchstart touchend", resultsSelector, this.bind(this.clearTouchMoved));
            this.dropdown.on('click', this.bind(function(event) {
                if (this._touchEvent) {
                    this._touchEvent = false;
                    this.selectHighlighted();
                }
            }));
            installDebouncedScroll(80, this.results);
            this.dropdown.on("scroll-debounced", resultsSelector, this.bind(this.loadMoreIfNeeded));
            $(this.container).on("change", ".select2-input",
                function(e) {
                    e.stopPropagation();
                });
            $(this.dropdown).on("change", ".select2-input",
                function(e) {
                    e.stopPropagation();
                });
            if ($.fn.mousewheel) {
                results.mousewheel(function(e, delta, deltaX, deltaY) {
                    var top = results.scrollTop();
                    if (deltaY > 0 && top - deltaY <= 0) {
                        results.scrollTop(0);
                        killEvent(e);
                    } else if (deltaY < 0 && results.get(0).scrollHeight - results.scrollTop() + deltaY <= results.height()) {
                        results.scrollTop(results.get(0).scrollHeight - results.height());
                        killEvent(e);
                    }
                });
            }
            installKeyUpChangeEvent(search);
            search.on("keyup-change input paste", this.bind(this.updateResults));
            search.on("focus",
                function() {
                    search.addClass("select2-focused");
                });
            search.on("blur",
                function() {
                    search.removeClass("select2-focused");
                });
            this.dropdown.on("mouseup", resultsSelector, this.bind(function(e) {
                if ($(e.target).closest(".select2-result-selectable").length > 0) {
                    this.highlightUnderEvent(e);
                    this.selectHighlighted(e);
                }
            }));
            this.dropdown.on("click mouseup mousedown touchstart touchend focusin",
                function(e) {
                    e.stopPropagation();
                });
            this.nextSearchTerm = undefined;
            if ($.isFunction(this.opts.initSelection)) {
                this.initSelection();
                this.monitorSource();
            }
            if (opts.maximumInputLength !== null) {
                this.search.attr("maxlength", opts.maximumInputLength);
            }
            var disabled = opts.element.prop("disabled");
            if (disabled === undefined) disabled = false;
            this.enable(!disabled);
            var readonly = opts.element.prop("readonly");
            if (readonly === undefined) readonly = false;
            this.readonly(readonly);
            scrollBarDimensions = scrollBarDimensions || measureScrollbar();
            this.autofocus = opts.element.prop("autofocus");
            opts.element.prop("autofocus", false);
            if (this.autofocus) this.focus();
            this.search.attr("placeholder", opts.searchInputPlaceholder);
        },
        destroy: function() {
            var element = this.opts.element,
                select2 = element.data("select2");
            this.close();
            if (element.length && element[0].detachEvent) {
                element.each(function() {
                    this.detachEvent("onpropertychange", this._sync);
                });
            }
            if (this.propertyObserver) {
                this.propertyObserver.disconnect();
                this.propertyObserver = null;
            }
            this._sync = null;
            if (select2 !== undefined) {
                select2.container.remove();
                select2.liveRegion.remove();
                select2.dropdown.remove();
                element.removeClass("select2-offscreen").removeData("select2").off(".select2").prop("autofocus", this.autofocus || false);
                if (this.elementTabIndex) {
                    element.attr({
                        tabindex: this.elementTabIndex
                    });
                } else {
                    element.removeAttr("tabindex");
                }
                element.show();
            }
            cleanupJQueryElements.call(this, "container", "liveRegion", "dropdown", "results", "search");
        },
        optionToData: function(element) {
            if (element.is("option")) {
                return {
                    id: element.prop("value"),
                    text: element.text(),
                    element: element.get(),
                    css: element.attr("class"),
                    disabled: element.prop("disabled"),
                    locked: equal(element.attr("locked"), "locked") || equal(element.data("locked"), true)
                };
            } else if (element.is("optgroup")) {
                return {
                    text: element.attr("label"),
                    children: [],
                    element: element.get(),
                    css: element.attr("class")
                };
            }
        },
        prepareOpts: function(opts) {
            var element, select, idKey, ajaxUrl, self = this;
            element = opts.element;
            if (element.get(0).tagName.toLowerCase() === "select") {
                this.select = select = opts.element;
            }
            if (select) {
                $.each(["id", "multiple", "ajax", "query", "createSearchChoice", "initSelection", "data", "tags"],
                    function() {
                        if (this in opts) {
                            throw new Error("Option '" + this + "' is not allowed for Select2 when attached to a <select> element.");
                        }
                    });
            }
            opts = $.extend({},
                {
                    populateResults: function(container, results, query) {
                        var populate, id = this.opts.id,
                            liveRegion = this.liveRegion;
                        populate = function(results, container, depth) {
                            var i, l, result, selectable, disabled, compound, node, label, innerContainer, formatted;
                            results = opts.sortResults(results, container, query);
                            var nodes = [];
                            for (i = 0, l = results.length; i < l; i = i + 1) {
                                result = results[i];
                                disabled = (result.disabled === true);
                                selectable = (!disabled) && (id(result) !== undefined);
                                compound = result.children && result.children.length > 0;
                                node = $("<li></li>");
                                node.addClass("select2-results-dept-" + depth);
                                node.addClass("select2-result");
                                node.addClass(selectable ? "select2-result-selectable": "select2-result-unselectable");
                                if (disabled) {
                                    node.addClass("select2-disabled");
                                }
                                if (compound) {
                                    node.addClass("select2-result-with-children");
                                }
                                node.addClass(self.opts.formatResultCssClass(result));
                                node.attr("role", "presentation");
                                label = $(document.createElement("div"));
                                label.addClass("select2-result-label");
                                label.attr("id", "select2-result-label-" + nextUid());
                                label.attr("role", "option");
                                formatted = opts.formatResult(result, label, query, self.opts.escapeMarkup);
                                if (formatted !== undefined) {
                                    label.html(formatted);
                                    node.append(label);
                                }
                                if (compound) {
                                    innerContainer = $("<ul></ul>");
                                    innerContainer.addClass("select2-result-sub");
                                    populate(result.children, innerContainer, depth + 1);
                                    node.append(innerContainer);
                                }
                                node.data("select2-data", result);
                                nodes.push(node[0]);
                            }
                            container.append(nodes);
                            liveRegion.text(opts.formatMatches(results.length));
                        };
                        populate(results, container, 0);
                    }
                },
                $.fn.select2.defaults, opts);
            if (typeof(opts.id) !== "function") {
                idKey = opts.id;
                opts.id = function(e) {
                    return e[idKey];
                };
            }
            if ($.isArray(opts.element.data("select2Tags"))) {
                if ("tags" in opts) {
                    throw "tags specified as both an attribute 'data-select2-tags' and in options of Select2 " + opts.element.attr("id");
                }
                opts.tags = opts.element.data("select2Tags");
            }
            if (select) {
                opts.query = this.bind(function(query) {
                    var data = {
                            results: [],
                            more: false
                        },
                        term = query.term,
                        children,
                        placeholderOption,
                        process;
                    process = function(element, collection) {
                        var group;
                        if (element.is("option")) {
                            if (query.matcher(term, element.text(), element)) {
                                collection.push(self.optionToData(element));
                            }
                        } else if (element.is("optgroup")) {
                            group = self.optionToData(element);
                            element.children().each2(function(i, elm) {
                                process(elm, group.children);
                            });
                            if (group.children.length > 0) {
                                collection.push(group);
                            }
                        }
                    };
                    children = element.children();
                    if (this.getPlaceholder() !== undefined && children.length > 0) {
                        placeholderOption = this.getPlaceholderOption();
                        if (placeholderOption) {
                            children = children.not(placeholderOption);
                        }
                    }
                    children.each2(function(i, elm) {
                        process(elm, data.results);
                    });
                    query.callback(data);
                });
                opts.id = function(e) {
                    return e.id;
                };
            } else {
                if (! ("query" in opts)) {
                    if ("ajax" in opts) {
                        ajaxUrl = opts.element.data("ajax-url");
                        if (ajaxUrl && ajaxUrl.length > 0) {
                            opts.ajax.url = ajaxUrl;
                        }
                        opts.query = ajax.call(opts.element, opts.ajax);
                    } else if ("data" in opts) {
                        opts.query = local(opts.data);
                    } else if ("tags" in opts) {
                        opts.query = tags(opts.tags);
                        if (opts.createSearchChoice === undefined) {
                            opts.createSearchChoice = function(term) {
                                return {
                                    id: $.trim(term),
                                    text: $.trim(term)
                                };
                            };
                        }
                        if (opts.initSelection === undefined) {
                            opts.initSelection = function(element, callback) {
                                var data = [];
                                $(splitVal(element.val(), opts.separator)).each(function() {
                                    var obj = {
                                            id: this,
                                            text: this
                                        },
                                        tags = opts.tags;
                                    if ($.isFunction(tags)) tags = tags();
                                    $(tags).each(function() {
                                        if (equal(this.id, obj.id)) {
                                            obj = this;
                                            return false;
                                        }
                                    });
                                    data.push(obj);
                                });
                                callback(data);
                            };
                        }
                    }
                }
            }
            if (typeof(opts.query) !== "function") {
                throw "query function not defined for Select2 " + opts.element.attr("id");
            }
            if (opts.createSearchChoicePosition === 'top') {
                opts.createSearchChoicePosition = function(list, item) {
                    list.unshift(item);
                };
            } else if (opts.createSearchChoicePosition === 'bottom') {
                opts.createSearchChoicePosition = function(list, item) {
                    list.push(item);
                };
            } else if (typeof(opts.createSearchChoicePosition) !== "function") {
                throw "invalid createSearchChoicePosition option must be 'top', 'bottom' or a custom function";
            }
            return opts;
        },
        monitorSource: function() {
            var el = this.opts.element,
                observer, self = this;
            el.on("change.select2", this.bind(function(e) {
                if (this.opts.element.data("select2-change-triggered") !== true) {
                    this.initSelection();
                }
            }));
            this._sync = this.bind(function() {
                var disabled = el.prop("disabled");
                if (disabled === undefined) disabled = false;
                this.enable(!disabled);
                var readonly = el.prop("readonly");
                if (readonly === undefined) readonly = false;
                this.readonly(readonly);
                syncCssClasses(this.container, this.opts.element, this.opts.adaptContainerCssClass);
                this.container.addClass(evaluate(this.opts.containerCssClass, this.opts.element));
                syncCssClasses(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass);
                this.dropdown.addClass(evaluate(this.opts.dropdownCssClass, this.opts.element));
            });
            if (el.length && el[0].attachEvent) {
                el.each(function() {
                    this.attachEvent("onpropertychange", self._sync);
                });
            }
            observer = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
            if (observer !== undefined) {
                if (this.propertyObserver) {
                    delete this.propertyObserver;
                    this.propertyObserver = null;
                }
                this.propertyObserver = new observer(function(mutations) {
                    $.each(mutations, self._sync);
                });
                this.propertyObserver.observe(el.get(0), {
                    attributes: true,
                    subtree: false
                });
            }
        },
        triggerSelect: function(data) {
            var evt = $.Event("select2-selecting", {
                val: this.id(data),
                object: data,
                choice: data
            });
            this.opts.element.trigger(evt);
            return ! evt.isDefaultPrevented();
        },
        triggerChange: function(details) {
            details = details || {};
            details = $.extend({},
                details, {
                    type: "change",
                    val: this.val()
                });
            this.opts.element.data("select2-change-triggered", true);
            this.opts.element.trigger(details);
            this.opts.element.data("select2-change-triggered", false);
            this.opts.element.click();
            if (this.opts.blurOnChange) this.opts.element.blur();
        },
        isInterfaceEnabled: function() {
            return this.enabledInterface === true;
        },
        enableInterface: function() {
            var enabled = this._enabled && !this._readonly,
                disabled = !enabled;
            if (enabled === this.enabledInterface) return false;
            this.container.toggleClass("select2-container-disabled", disabled);
            this.close();
            this.enabledInterface = enabled;
            return true;
        },
        enable: function(enabled) {
            if (enabled === undefined) enabled = true;
            if (this._enabled === enabled) return;
            this._enabled = enabled;
            this.opts.element.prop("disabled", !enabled);
            this.enableInterface();
        },
        disable: function() {
            this.enable(false);
        },
        readonly: function(enabled) {
            if (enabled === undefined) enabled = false;
            if (this._readonly === enabled) return;
            this._readonly = enabled;
            this.opts.element.prop("readonly", enabled);
            this.enableInterface();
        },
        opened: function() {
            return (this.container) ? this.container.hasClass("select2-dropdown-open") : false;
        },
        positionDropdown: function() {
            var $dropdown = this.dropdown,
                offset = this.container.offset(),
                height = this.container.outerHeight(false),
                width = this.container.outerWidth(false),
                dropHeight = $dropdown.outerHeight(false),
                $window = $(window),
                windowWidth = $window.width(),
                windowHeight = $window.height(),
                viewPortRight = $window.scrollLeft() + windowWidth,
                viewportBottom = $window.scrollTop() + windowHeight,
                dropTop = offset.top + height,
                dropLeft = offset.left,
                enoughRoomBelow = dropTop + dropHeight <= viewportBottom,
                enoughRoomAbove = (offset.top - dropHeight) >= $window.scrollTop(),
                dropWidth = $dropdown.outerWidth(false),
                enoughRoomOnRight = dropLeft + dropWidth <= viewPortRight,
                aboveNow = $dropdown.hasClass("select2-drop-above"),
                bodyOffset,
                above,
                changeDirection,
                css,
                resultsListNode;
            if (aboveNow) {
                above = true;
                if (!enoughRoomAbove && enoughRoomBelow) {
                    changeDirection = true;
                    above = false;
                }
            } else {
                above = false;
                if (!enoughRoomBelow && enoughRoomAbove) {
                    changeDirection = true;
                    above = true;
                }
            }
            if (changeDirection) {
                $dropdown.hide();
                offset = this.container.offset();
                height = this.container.outerHeight(false);
                width = this.container.outerWidth(false);
                dropHeight = $dropdown.outerHeight(false);
                viewPortRight = $window.scrollLeft() + windowWidth;
                viewportBottom = $window.scrollTop() + windowHeight;
                dropTop = offset.top + height;
                dropLeft = offset.left;
                dropWidth = $dropdown.outerWidth(false);
                enoughRoomOnRight = dropLeft + dropWidth <= viewPortRight;
                $dropdown.show();
                this.focusSearch();
            }
            if (this.opts.dropdownAutoWidth) {
                resultsListNode = $('.select2-results', $dropdown)[0];
                $dropdown.addClass('select2-drop-auto-width');
                $dropdown.css('width', '');
                dropWidth = $dropdown.outerWidth(false) + (resultsListNode.scrollHeight === resultsListNode.clientHeight ? 0 : scrollBarDimensions.width);
                dropWidth > width ? width = dropWidth: dropWidth = width;
                dropHeight = $dropdown.outerHeight(false);
                enoughRoomOnRight = dropLeft + dropWidth <= viewPortRight;
            } else {
                this.container.removeClass('select2-drop-auto-width');
            }
            if (this.body.css('position') !== 'static') {
                bodyOffset = this.body.offset();
                dropTop -= bodyOffset.top;
                dropLeft -= bodyOffset.left;
            }
            if (!enoughRoomOnRight) {
                dropLeft = offset.left + this.container.outerWidth(false) - dropWidth;
            }
            css = {
                left: dropLeft,
                width: width
            };
            if (above) {
                css.top = offset.top - dropHeight;
                css.bottom = 'auto';
                this.container.addClass("select2-drop-above");
                $dropdown.addClass("select2-drop-above");
            } else {
                css.top = dropTop;
                css.bottom = 'auto';
                this.container.removeClass("select2-drop-above");
                $dropdown.removeClass("select2-drop-above");
            }
            css = $.extend(css, evaluate(this.opts.dropdownCss, this.opts.element));
            $dropdown.css(css);
        },
        shouldOpen: function() {
            var event;
            if (this.opened()) return false;
            if (this._enabled === false || this._readonly === true) return false;
            event = $.Event("select2-opening");
            this.opts.element.trigger(event);
            return ! event.isDefaultPrevented();
        },
        clearDropdownAlignmentPreference: function() {
            this.container.removeClass("select2-drop-above");
            this.dropdown.removeClass("select2-drop-above");
        },
        open: function() {
            if (!this.shouldOpen()) return false;
            this.opening();
            $document.on("mousemove.select2Event",
                function(e) {
                    lastMousePosition.x = e.pageX;
                    lastMousePosition.y = e.pageY;
                });
            return true;
        },
        opening: function() {
            var cid = this.containerEventName,
                scroll = "scroll." + cid,
                resize = "resize." + cid,
                orient = "orientationchange." + cid,
                mask;
            this.container.addClass("select2-dropdown-open").addClass("select2-container-active");
            this.clearDropdownAlignmentPreference();
            if (this.dropdown[0] !== this.body.children().last()[0]) {
                this.dropdown.detach().appendTo(this.body);
            }
            mask = $("#select2-drop-mask");
            if (mask.length == 0) {
                mask = $(document.createElement("div"));
                mask.attr("id", "select2-drop-mask").attr("class", "select2-drop-mask");
                mask.hide();
                mask.appendTo(this.body);
                mask.on("mousedown touchstart click",
                    function(e) {
                        reinsertElement(mask);
                        var dropdown = $("#select2-drop"),
                            self;
                        if (dropdown.length > 0) {
                            self = dropdown.data("select2");
                            if (self.opts.selectOnBlur) {
                                self.selectHighlighted({
                                    noFocus: true
                                });
                            }
                            self.close();
                            e.preventDefault();
                            e.stopPropagation();
                        }
                    });
            }
            if (this.dropdown.prev()[0] !== mask[0]) {
                this.dropdown.before(mask);
            }
            $("#select2-drop").removeAttr("id");
            this.dropdown.attr("id", "select2-drop");
            mask.show();
            this.positionDropdown();
            this.dropdown.show();
            this.positionDropdown();
            this.dropdown.addClass("select2-drop-active");
            var that = this;
            this.container.parents().add(window).each(function() {
                $(this).on(resize + " " + scroll + " " + orient,
                    function(e) {
                        if (that.opened()) that.positionDropdown();
                    });
            });
        },
        close: function() {
            if (!this.opened()) return;
            var cid = this.containerEventName,
                scroll = "scroll." + cid,
                resize = "resize." + cid,
                orient = "orientationchange." + cid;
            this.container.parents().add(window).each(function() {
                $(this).off(scroll).off(resize).off(orient);
            });
            this.clearDropdownAlignmentPreference();
            $("#select2-drop-mask").hide();
            this.dropdown.removeAttr("id");
            this.dropdown.hide();
            this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active");
            this.results.empty();
            $document.off("mousemove.select2Event");
            this.clearSearch();
            this.search.removeClass("select2-active");
            this.opts.element.trigger($.Event("select2-close"));
        },
        externalSearch: function(term) {
            this.open();
            this.search.val(term);
            this.updateResults(false);
        },
        clearSearch: function() {},
        getMaximumSelectionSize: function() {
            return evaluate(this.opts.maximumSelectionSize, this.opts.element);
        },
        ensureHighlightVisible: function() {
            var results = this.results,
                children, index, child, hb, rb, y, more, topOffset;
            index = this.highlight();
            if (index < 0) return;
            if (index == 0) {
                results.scrollTop(0);
                return;
            }
            children = this.findHighlightableChoices().find('.select2-result-label');
            child = $(children[index]);
            topOffset = (child.offset() || {}).top || 0;
            hb = topOffset + child.outerHeight(true);
            if (index === children.length - 1) {
                more = results.find("li.select2-more-results");
                if (more.length > 0) {
                    hb = more.offset().top + more.outerHeight(true);
                }
            }
            rb = results.offset().top + results.outerHeight(true);
            if (hb > rb) {
                results.scrollTop(results.scrollTop() + (hb - rb));
            }
            y = topOffset - results.offset().top;
            if (y < 0 && child.css('display') != 'none') {
                results.scrollTop(results.scrollTop() + y);
            }
        },
        findHighlightableChoices: function() {
            return this.results.find(".select2-result-selectable:not(.select2-disabled):not(.select2-selected)");
        },
        moveHighlight: function(delta) {
            var choices = this.findHighlightableChoices(),
                index = this.highlight();
            while (index > -1 && index < choices.length) {
                index += delta;
                var choice = $(choices[index]);
                if (choice.hasClass("select2-result-selectable") && !choice.hasClass("select2-disabled") && !choice.hasClass("select2-selected")) {
                    this.highlight(index);
                    break;
                }
            }
        },
        highlight: function(index) {
            var choices = this.findHighlightableChoices(),
                choice,
                data;
            if (arguments.length === 0) {
                return indexOf(choices.filter(".select2-highlighted")[0], choices.get());
            }
            if (index >= choices.length) index = choices.length - 1;
            if (index < 0) index = 0;
            this.removeHighlight();
            choice = $(choices[index]);
            choice.addClass("select2-highlighted");
            this.search.attr("aria-activedescendant", choice.find(".select2-result-label").attr("id"));
            this.ensureHighlightVisible();
            this.liveRegion.text(choice.text());
            data = choice.data("select2-data");
            if (data) {
                this.opts.element.trigger({
                    type: "select2-highlight",
                    val: this.id(data),
                    choice: data
                });
            }
        },
        removeHighlight: function() {
            this.results.find(".select2-highlighted").removeClass("select2-highlighted");
        },
        touchMoved: function() {
            this._touchMoved = true;
        },
        clearTouchMoved: function() {
            this._touchMoved = false;
        },
        countSelectableResults: function() {
            return this.findHighlightableChoices().length;
        },
        highlightUnderEvent: function(event) {
            var el = $(event.target).closest(".select2-result-selectable");
            if (el.length > 0 && !el.is(".select2-highlighted")) {
                var choices = this.findHighlightableChoices();
                this.highlight(choices.index(el));
            } else if (el.length == 0) {
                this.removeHighlight();
            }
        },
        loadMoreIfNeeded: function() {
            var results = this.results,
                more = results.find("li.select2-more-results"),
                below,
                page = this.resultsPage + 1,
                self = this,
                term = this.search.val(),
                context = this.context;
            if (more.length === 0) return;
            below = more.offset().top - results.offset().top - results.height();
            if (below <= this.opts.loadMorePadding) {
                more.addClass("select2-active");
                this.opts.query({
                    element: this.opts.element,
                    term: term,
                    page: page,
                    context: context,
                    matcher: this.opts.matcher,
                    callback: this.bind(function(data) {
                        if (!self.opened()) return;
                        self.opts.populateResults.call(this, results, data.results, {
                            term: term,
                            page: page,
                            context: context
                        });
                        self.postprocessResults(data, false, false);
                        if (data.more === true) {
                            more.detach().appendTo(results).text(evaluate(self.opts.formatLoadMore, self.opts.element, page + 1));
                            window.setTimeout(function() {
                                    self.loadMoreIfNeeded();
                                },
                                10);
                        } else {
                            more.remove();
                        }
                        self.positionDropdown();
                        self.resultsPage = page;
                        self.context = data.context;
                        this.opts.element.trigger({
                            type: "select2-loaded",
                            items: data
                        });
                    })
                });
            }
        },
        tokenize: function() {},
        updateResults: function(initial) {
            var search = this.search,
                results = this.results,
                opts = this.opts,
                data, self = this,
                input, term = search.val(),
                lastTerm = $.data(this.container, "select2-last-term"),
                queryNumber;
            if (initial !== true && lastTerm && equal(term, lastTerm)) return;
            $.data(this.container, "select2-last-term", term);
            if (initial !== true && (this.showSearchInput === false || !this.opened())) {
                return;
            }
            function postRender() {
                search.removeClass("select2-active");
                self.positionDropdown();
                if (results.find('.select2-no-results,.select2-selection-limit,.select2-searching').length) {
                    self.liveRegion.text(results.text());
                } else {
                    self.liveRegion.text(self.opts.formatMatches(results.find('.select2-result-selectable').length));
                }
            }
            function render(html) {
                results.html(html);
                postRender();
            }
            queryNumber = ++this.queryCount;
            var maxSelSize = this.getMaximumSelectionSize();
            if (maxSelSize >= 1) {
                data = this.data();
                if ($.isArray(data) && data.length >= maxSelSize && checkFormatter(opts.formatSelectionTooBig, "formatSelectionTooBig")) {
                    render("<li class='select2-selection-limit'>" + evaluate(opts.formatSelectionTooBig, opts.element, maxSelSize) + "</li>");
                    return;
                }
            }
            if (opts.maximumUserSelectionSize >= 1) {
                data = this.data();
                var username = $("ul#userNav a#userNavLink span").first().text();
                var interestCount = 0;
                for (var i = 0; i < data.length; i++) {
                    if (data[i].username == username.trim()) {
                        interestCount++;
                    }
                }
                if ($.isArray(data) && interestCount >= opts.maximumUserSelectionSize && checkFormatter(opts.formatUserSelectionTooBig, "formatUserSelectionTooBig")) {
                    render("<li class='select2-selection-limit'>" + evaluate(opts.formatUserSelectionTooBig, opts.element, opts.maximumUserSelectionSize) + "</li>");
                    return;
                }
            }
            if (search.val().length < opts.minimumInputLength) {
                if (checkFormatter(opts.formatInputTooShort, "formatInputTooShort")) {
                    render("<li class='select2-no-results'>" + evaluate(opts.formatInputTooShort, opts.element, search.val(), opts.minimumInputLength) + "</li>");
                } else {
                    render("");
                }
                if (initial && this.showSearch) this.showSearch(true);
                return;
            }
            if (opts.maximumInputLength && search.val().length > opts.maximumInputLength) {
                if (checkFormatter(opts.formatInputTooLong, "formatInputTooLong")) {
                    render("<li class='select2-no-results'>" + evaluate(opts.formatInputTooLong, opts.element, search.val(), opts.maximumInputLength) + "</li>");
                } else {
                    render("");
                }
                return;
            }
            if (opts.formatSearching && this.findHighlightableChoices().length === 0) {
                render("<li class='select2-searching'>" + evaluate(opts.formatSearching, opts.element) + "</li>");
            }
            search.addClass("select2-active");
            this.removeHighlight();
            input = this.tokenize();
            if (input != undefined && input != null) {
                search.val(input);
            }
            this.resultsPage = 1;
            opts.query({
                element: opts.element,
                term: search.val(),
                page: this.resultsPage,
                context: null,
                matcher: opts.matcher,
                callback: this.bind(function(data) {
                    var def;
                    if (queryNumber != this.queryCount) {
                        return;
                    }
                    if (!this.opened()) {
                        this.search.removeClass("select2-active");
                        return;
                    }
                    this.context = (data.context === undefined) ? null: data.context;
                    if (this.opts.createSearchChoice && search.val() !== "") {
                        def = this.opts.createSearchChoice.call(self, search.val(), data.results);
                        if (def !== undefined && def !== null && self.id(def) !== undefined && self.id(def) !== null) {
                            if ($(data.results).filter(function() {
                                    return equal(self.id(this), self.id(def));
                                }).length === 0) {
                                this.opts.createSearchChoicePosition(data.results, def);
                            }
                        }
                    }
                    if (data.results.length === 0 && checkFormatter(opts.formatNoMatches, "formatNoMatches")) {
                        render("<li class='select2-no-results'>" + evaluate(opts.formatNoMatches, opts.element, search.val()) + "</li>");
                        return;
                    }
                    results.empty();
                    self.opts.populateResults.call(this, results, data.results, {
                        term: search.val(),
                        page: this.resultsPage,
                        context: null
                    });
                    if (data.more === true && checkFormatter(opts.formatLoadMore, "formatLoadMore")) {
                        results.append("<li class='select2-more-results'>" + opts.escapeMarkup(evaluate(opts.formatLoadMore, opts.element, this.resultsPage)) + "</li>");
                        window.setTimeout(function() {
                                self.loadMoreIfNeeded();
                            },
                            10);
                    }
                    this.postprocessResults(data, initial);
                    postRender();
                    this.opts.element.trigger({
                        type: "select2-loaded",
                        items: data
                    });
                })
            });
        },
        cancel: function() {
            this.close();
        },
        blur: function() {
            if (this.opts.selectOnBlur) this.selectHighlighted({
                noFocus: true
            });
            this.close();
            this.container.removeClass("select2-container-active");
            if (this.search[0] === document.activeElement) {
                this.search.blur();
            }
            this.clearSearch();
            this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus");
        },
        focusSearch: function() {
            focus(this.search);
        },
        selectHighlighted: function(options) {
            if (this._touchMoved) {
                this.clearTouchMoved();
                return;
            }
            var index = this.highlight(),
                highlighted = this.results.find(".select2-highlighted"),
                data = highlighted.closest('.select2-result').data("select2-data");
            if (data) {
                this.highlight(index);
                this.onSelect(data, options);
            } else if (options && options.noFocus) {
                this.close();
            }
        },
        getPlaceholder: function() {
            var placeholderOption;
            return this.opts.element.attr("placeholder") || this.opts.element.attr("data-placeholder") || this.opts.element.data("placeholder") || this.opts.placeholder || ((placeholderOption = this.getPlaceholderOption()) !== undefined ? placeholderOption.text() : undefined);
        },
        getPlaceholderOption: function() {
            if (this.select) {
                var firstOption = this.select.children('option').first();
                if (this.opts.placeholderOption !== undefined) {
                    return (this.opts.placeholderOption === "first" && firstOption) || (typeof this.opts.placeholderOption === "function" && this.opts.placeholderOption(this.select));
                } else if ($.trim(firstOption.text()) === "" && firstOption.val() === "") {
                    return firstOption;
                }
            }
        },
        initContainerWidth: function() {
            function resolveContainerWidth() {
                var style, attrs, matches, i, l, attr;
                if (this.opts.width === "off") {
                    return null;
                } else if (this.opts.width === "element") {
                    return this.opts.element.outerWidth(false) === 0 ? 'auto': this.opts.element.outerWidth(false) + 'px';
                } else if (this.opts.width === "copy" || this.opts.width === "resolve") {
                    style = this.opts.element.attr('style');
                    if (style !== undefined) {
                        attrs = style.split(';');
                        for (i = 0, l = attrs.length; i < l; i = i + 1) {
                            attr = attrs[i].replace(/\s/g, '');
                            matches = attr.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i);
                            if (matches !== null && matches.length >= 1) return matches[1];
                        }
                    }
                    if (this.opts.width === "resolve") {
                        style = this.opts.element.css('width');
                        if (style.indexOf("%") > 0) return style;
                        return (this.opts.element.outerWidth(false) === 0 ? 'auto': this.opts.element.outerWidth(false) + 'px');
                    }
                    return null;
                } else if ($.isFunction(this.opts.width)) {
                    return this.opts.width();
                } else {
                    return this.opts.width;
                }
            };
            var width = resolveContainerWidth.call(this);
            if (width !== null) {
                this.container.css("width", width);
            }
        }
    });
    SingleSelect2 = clazz(AbstractSelect2, {
        createContainer: function() {
            var container = $(document.createElement("div")).attr({
                "class": "select2-container"
            }).html(["<a href='javascript:void(0)' class='select2-choice' tabindex='-1'>", "   <span class='select2-chosen'>&#160;</span><abbr class='select2-search-choice-close'></abbr>", "   <span class='select2-arrow' role='presentation'><b role='presentation'></b></span>", "</a>", "<label for='' class='select2-offscreen'></label>", "<input class='select2-focusser select2-offscreen' type='text' aria-haspopup='true' role='button' />", "<div class='select2-drop select2-display-none'>", "   <div class='select2-search'>", "       <label for='' class='select2-offscreen'></label>", "       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input' role='combobox' aria-expanded='true'", "       aria-autocomplete='list' />", "   </div>", "   <ul class='select2-results' role='listbox'>", "   </ul>", "</div>"].join(""));
            return container;
        },
        enableInterface: function() {
            if (this.parent.enableInterface.apply(this, arguments)) {
                this.focusser.prop("disabled", !this.isInterfaceEnabled());
            }
        },
        opening: function() {
            var el, range, len;
            if (this.opts.minimumResultsForSearch >= 0) {
                this.showSearch(true);
            }
            this.parent.opening.apply(this, arguments);
            if (this.showSearchInput !== false) {
                this.search.val(this.focusser.val());
            }
            if (this.opts.shouldFocusInput(this)) {
                this.search.focus();
                el = this.search.get(0);
                if (el.createTextRange) {
                    range = el.createTextRange();
                    range.collapse(false);
                    range.select();
                } else if (el.setSelectionRange) {
                    len = this.search.val().length;
                    el.setSelectionRange(len, len);
                }
            }
            if (this.search.val() === "") {
                if (this.nextSearchTerm != undefined) {
                    this.search.val(this.nextSearchTerm);
                    this.search.select();
                }
            }
            this.focusser.prop("disabled", true).val("");
            this.updateResults(true);
            this.opts.element.trigger($.Event("select2-open"));
        },
        close: function() {
            if (!this.opened()) return;
            this.parent.close.apply(this, arguments);
            this.focusser.prop("disabled", false);
            if (this.opts.shouldFocusInput(this)) {
                this.focusser.focus();
            }
        },
        focus: function() {
            if (this.opened()) {
                this.close();
            } else {
                this.focusser.prop("disabled", false);
                if (this.opts.shouldFocusInput(this)) {
                    this.focusser.focus();
                }
            }
        },
        isFocused: function() {
            return this.container.hasClass("select2-container-active");
        },
        cancel: function() {
            this.parent.cancel.apply(this, arguments);
            this.focusser.prop("disabled", false);
            if (this.opts.shouldFocusInput(this)) {
                this.focusser.focus();
            }
        },
        destroy: function() {
            $("label[for='" + this.focusser.attr('id') + "']").attr('for', this.opts.element.attr("id"));
            this.parent.destroy.apply(this, arguments);
            cleanupJQueryElements.call(this, "selection", "focusser");
        },
        initContainer: function() {
            var selection, container = this.container,
                dropdown = this.dropdown,
                idSuffix = nextUid(),
                elementLabel;
            if (this.opts.minimumResultsForSearch < 0) {
                this.showSearch(false);
            } else {
                this.showSearch(true);
            }
            this.selection = selection = container.find(".select2-choice");
            this.focusser = container.find(".select2-focusser");
            selection.find(".select2-chosen").attr("id", "select2-chosen-" + idSuffix);
            this.focusser.attr("aria-labelledby", "select2-chosen-" + idSuffix);
            this.results.attr("id", "select2-results-" + idSuffix);
            this.search.attr("aria-owns", "select2-results-" + idSuffix);
            this.focusser.attr("id", "s2id_autogen" + idSuffix);
            elementLabel = $("label[for='" + this.opts.element.attr("id") + "']");
            this.focusser.prev().text(elementLabel.text()).attr('for', this.focusser.attr('id'));
            var originalTitle = this.opts.element.attr("title");
            this.opts.element.attr("title", (originalTitle || elementLabel.text()));
            this.focusser.attr("tabindex", this.elementTabIndex);
            this.search.attr("id", this.focusser.attr('id') + '_search');
            this.search.prev().text($("label[for='" + this.focusser.attr('id') + "']").text()).attr('for', this.search.attr('id'));
            this.search.on("keydown", this.bind(function(e) {
                if (!this.isInterfaceEnabled()) return;
                if (e.which === KEY.PAGE_UP || e.which === KEY.PAGE_DOWN) {
                    killEvent(e);
                    return;
                }
                switch (e.which) {
                    case KEY.UP:
                    case KEY.DOWN:
                        this.moveHighlight((e.which === KEY.UP) ? -1 : 1);
                        killEvent(e);
                        return;
                    case KEY.ENTER:
                        this.selectHighlighted();
                        killEvent(e);
                        return;
                    case KEY.TAB:
                        this.selectHighlighted({
                            noFocus:
                                true
                        });
                        return;
                    case KEY.ESC:
                        this.cancel(e);
                        killEvent(e);
                        return;
                }
            }));
            this.search.on("blur", this.bind(function(e) {
                if (document.activeElement === this.body.get(0)) {
                    window.setTimeout(this.bind(function() {
                        if (this.opened()) {
                            this.search.focus();
                        }
                    }), 0);
                }
            }));
            this.focusser.on("keydown", this.bind(function(e) {
                if (!this.isInterfaceEnabled()) return;
                if (e.which === KEY.TAB || KEY.isControl(e) || KEY.isFunctionKey(e) || e.which === KEY.ESC) {
                    return;
                }
                if (this.opts.openOnEnter === false && e.which === KEY.ENTER) {
                    killEvent(e);
                    return;
                }
                if (e.which == KEY.DOWN || e.which == KEY.UP || (e.which == KEY.ENTER && this.opts.openOnEnter)) {
                    if (e.altKey || e.ctrlKey || e.shiftKey || e.metaKey) return;
                    this.open();
                    killEvent(e);
                    return;
                }
                if (e.which == KEY.DELETE || e.which == KEY.BACKSPACE) {
                    if (this.opts.allowClear) {
                        this.clear();
                    }
                    killEvent(e);
                    return;
                }
            }));
            installKeyUpChangeEvent(this.focusser);
            this.focusser.on("keyup-change input", this.bind(function(e) {
                if (this.opts.minimumResultsForSearch >= 0) {
                    e.stopPropagation();
                    if (this.opened()) return;
                    this.open();
                }
            }));
            selection.on("mousedown touchstart", "abbr", this.bind(function(e) {
                if (!this.isInterfaceEnabled()) return;
                this.clear();
                killEventImmediately(e);
                this.close();
                this.selection.focus();
            }));
            selection.on("mousedown touchstart", this.bind(function(e) {
                reinsertElement(selection);
                if (!this.container.hasClass("select2-container-active")) {
                    this.opts.element.trigger($.Event("select2-focus"));
                }
                if (this.opened()) {
                    this.close();
                } else if (this.isInterfaceEnabled()) {
                    this.open();
                }
                killEvent(e);
            }));
            dropdown.on("mousedown touchstart", this.bind(function() {
                if (this.opts.shouldFocusInput(this)) {
                    this.search.focus();
                }
            }));
            selection.on("focus", this.bind(function(e) {
                killEvent(e);
            }));
            this.focusser.on("focus", this.bind(function() {
                if (!this.container.hasClass("select2-container-active")) {
                    this.opts.element.trigger($.Event("select2-focus"));
                }
                this.container.addClass("select2-container-active");
            })).on("blur", this.bind(function() {
                if (!this.opened()) {
                    this.container.removeClass("select2-container-active");
                    this.opts.element.trigger($.Event("select2-blur"));
                }
            }));
            this.search.on("focus", this.bind(function() {
                if (!this.container.hasClass("select2-container-active")) {
                    this.opts.element.trigger($.Event("select2-focus"));
                }
                this.container.addClass("select2-container-active");
            }));
            this.initContainerWidth();
            this.opts.element.addClass("select2-offscreen");
            this.setPlaceholder();
        },
        clear: function(triggerChange) {
            var data = this.selection.data("select2-data");
            if (data) {
                var evt = $.Event("select2-clearing");
                this.opts.element.trigger(evt);
                if (evt.isDefaultPrevented()) {
                    return;
                }
                var placeholderOption = this.getPlaceholderOption();
                this.opts.element.val(placeholderOption ? placeholderOption.val() : "");
                this.selection.find(".select2-chosen").empty();
                this.selection.removeData("select2-data");
                this.setPlaceholder();
                if (triggerChange !== false) {
                    this.opts.element.trigger({
                        type: "select2-removed",
                        val: this.id(data),
                        choice: data
                    });
                    this.triggerChange({
                        removed: data
                    });
                }
            }
        },
        initSelection: function() {
            var selected;
            if (this.isPlaceholderOptionSelected()) {
                this.updateSelection(null);
                this.close();
                this.setPlaceholder();
            } else {
                var self = this;
                this.opts.initSelection.call(null, this.opts.element,
                    function(selected) {
                        if (selected !== undefined && selected !== null) {
                            self.updateSelection(selected);
                            self.close();
                            self.setPlaceholder();
                            self.nextSearchTerm = self.opts.nextSearchTerm(selected, self.search.val());
                        }
                    });
            }
        },
        isPlaceholderOptionSelected: function() {
            var placeholderOption;
            if (this.getPlaceholder() === undefined) return false;
            return ((placeholderOption = this.getPlaceholderOption()) !== undefined && placeholderOption.prop("selected")) || (this.opts.element.val() === "") || (this.opts.element.val() === undefined) || (this.opts.element.val() === null);
        },
        prepareOpts: function() {
            var opts = this.parent.prepareOpts.apply(this, arguments),
                self = this;
            if (opts.element.get(0).tagName.toLowerCase() === "select") {
                opts.initSelection = function(element, callback) {
                    var selected = element.find("option").filter(function() {
                        return this.selected && !this.disabled
                    });
                    callback(self.optionToData(selected));
                };
            } else if ("data" in opts) {
                opts.initSelection = opts.initSelection ||
                function(element, callback) {
                    var id = element.val();
                    var match = null;
                    opts.query({
                        matcher: function(term, text, el) {
                            var is_match = equal(id, opts.id(el));
                            if (is_match) {
                                match = el;
                            }
                            return is_match;
                        },
                        callback: !$.isFunction(callback) ? $.noop: function() {
                            callback(match);
                        }
                    });
                };
            }
            return opts;
        },
        getPlaceholder: function() {
            if (this.select) {
                if (this.getPlaceholderOption() === undefined) {
                    return undefined;
                }
            }
            return this.parent.getPlaceholder.apply(this, arguments);
        },
        setPlaceholder: function() {
            var placeholder = this.getPlaceholder();
            if (this.isPlaceholderOptionSelected() && placeholder !== undefined) {
                if (this.select && this.getPlaceholderOption() === undefined) return;
                this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(placeholder));
                this.selection.addClass("select2-default");
                this.container.removeClass("select2-allowclear");
            }
        },
        postprocessResults: function(data, initial, noHighlightUpdate) {
            var selected = 0,
                self = this,
                showSearchInput = true;
            this.findHighlightableChoices().each2(function(i, elm) {
                if (equal(self.id(elm.data("select2-data")), self.opts.element.val())) {
                    selected = i;
                    return false;
                }
            });
            if (noHighlightUpdate !== false) {
                if (initial === true && selected >= 0) {
                    this.highlight(selected);
                } else {
                    this.highlight(0);
                }
            }
            if (initial === true) {
                var min = this.opts.minimumResultsForSearch;
                if (min >= 0) {
                    this.showSearch(countResults(data.results) >= min);
                }
            }
        },
        showSearch: function(showSearchInput) {
            if (this.showSearchInput === showSearchInput) return;
            this.showSearchInput = showSearchInput;
            this.dropdown.find(".select2-search").toggleClass("select2-search-hidden", !showSearchInput);
            this.dropdown.find(".select2-search").toggleClass("select2-offscreen", !showSearchInput);
            $(this.dropdown, this.container).toggleClass("select2-with-searchbox", showSearchInput);
        },
        onSelect: function(data, options) {
            if (!this.triggerSelect(data)) {
                return;
            }
            var old = this.opts.element.val(),
                oldData = this.data();
            this.opts.element.val(this.id(data));
            this.updateSelection(data);
            this.opts.element.trigger({
                type: "select2-selected",
                val: this.id(data),
                choice: data
            });
            this.nextSearchTerm = this.opts.nextSearchTerm(data, this.search.val());
            this.close();
            if ((!options || !options.noFocus) && this.opts.shouldFocusInput(this)) {
                this.focusser.focus();
            }
            if (!equal(old, this.id(data))) {
                this.triggerChange({
                    added: data,
                    removed: oldData
                });
            }
        },
        updateSelection: function(data) {
            var container = this.selection.find(".select2-chosen"),
                formatted,
                cssClass;
            this.selection.data("select2-data", data);
            container.empty();
            if (data !== null) {
                formatted = this.opts.formatSelection(data, container, this.opts.escapeMarkup);
            }
            if (formatted !== undefined) {
                container.append(formatted);
            }
            cssClass = this.opts.formatSelectionCssClass(data, container);
            if (cssClass !== undefined) {
                container.addClass(cssClass);
            }
            this.selection.removeClass("select2-default");
            if (this.opts.allowClear && this.getPlaceholder() !== undefined) {
                this.container.addClass("select2-allowclear");
            }
        },
        val: function() {
            var val, triggerChange = false,
                data = null,
                self = this,
                oldData = this.data();
            if (arguments.length === 0) {
                return this.opts.element.val();
            }
            val = arguments[0];
            if (arguments.length > 1) {
                triggerChange = arguments[1];
            }
            if (this.select) {
                this.select.val(val).find("option").filter(function() {
                    return this.selected
                }).each2(function(i, elm) {
                    data = self.optionToData(elm);
                    return false;
                });
                this.updateSelection(data);
                this.setPlaceholder();
                if (triggerChange) {
                    this.triggerChange({
                        added: data,
                        removed: oldData
                    });
                }
            } else {
                if (!val && val !== 0) {
                    this.clear(triggerChange);
                    return;
                }
                if (this.opts.initSelection === undefined) {
                    throw new Error("cannot call val() if initSelection() is not defined");
                }
                this.opts.element.val(val);
                this.opts.initSelection(this.opts.element,
                    function(data) {
                        self.opts.element.val(!data ? "": self.id(data));
                        self.updateSelection(data);
                        self.setPlaceholder();
                        if (triggerChange) {
                            self.triggerChange({
                                added: data,
                                removed: oldData
                            });
                        }
                    });
            }
        },
        clearSearch: function() {
            this.search.val("");
            this.focusser.val("");
        },
        data: function(value) {
            var data, triggerChange = false;
            if (arguments.length === 0) {
                data = this.selection.data("select2-data");
                if (data == undefined) data = null;
                return data;
            } else {
                if (arguments.length > 1) {
                    triggerChange = arguments[1];
                }
                if (!value) {
                    this.clear(triggerChange);
                } else {
                    data = this.data();
                    this.opts.element.val(!value ? "": this.id(value));
                    this.updateSelection(value);
                    if (triggerChange) {
                        this.triggerChange({
                            added: value,
                            removed: data
                        });
                    }
                }
            }
        }
    });
    MultiSelect2 = clazz(AbstractSelect2, {
        createContainer: function() {
            var container = $(document.createElement("div")).attr({
                "class": "select2-container select2-container-multi"
            }).html(["<ul class='select2-choices'>", "  <li class='select2-search-field'>", "    <label for='' class='select2-offscreen'></label>", "    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'>", "  </li>", "</ul>", "<div class='select2-drop select2-drop-multi select2-display-none'>", "   <ul class='select2-results'>", "   </ul>", "</div>"].join(""));
            return container;
        },
        prepareOpts: function() {
            var opts = this.parent.prepareOpts.apply(this, arguments),
                self = this;
            if (opts.element.get(0).tagName.toLowerCase() === "select") {
                opts.initSelection = function(element, callback) {
                    var data = [];
                    element.find("option").filter(function() {
                        return this.selected && !this.disabled
                    }).each2(function(i, elm) {
                        data.push(self.optionToData(elm));
                    });
                    callback(data);
                };
            } else if ("data" in opts) {
                opts.initSelection = opts.initSelection ||
                function(element, callback) {
                    var ids = splitVal(element.val(), opts.separator);
                    var matches = [];
                    opts.query({
                        matcher: function(term, text, el) {
                            var is_match = $.grep(ids,
                                function(id) {
                                    return equal(id, opts.id(el));
                                }).length;
                            if (is_match) {
                                matches.push(el);
                            }
                            return is_match;
                        },
                        callback: !$.isFunction(callback) ? $.noop: function() {
                            var ordered = [];
                            for (var i = 0; i < ids.length; i++) {
                                var id = ids[i];
                                for (var j = 0; j < matches.length; j++) {
                                    var match = matches[j];
                                    if (equal(id, opts.id(match))) {
                                        ordered.push(match);
                                        matches.splice(j, 1);
                                        break;
                                    }
                                }
                            }
                            callback(ordered);
                        }
                    });
                };
            }
            return opts;
        },
        selectChoice: function(choice) {
            var selected = this.container.find(".select2-search-choice-focus");
            if (selected.length && choice && choice[0] == selected[0]) {} else {
                if (selected.length) {
                    this.opts.element.trigger("choice-deselected", selected);
                }
                selected.removeClass("select2-search-choice-focus");
                if (choice && choice.length) {
                    this.close();
                    choice.addClass("select2-search-choice-focus");
                    this.opts.element.trigger("choice-selected", choice);
                }
            }
        },
        destroy: function() {
            $("label[for='" + this.search.attr('id') + "']").attr('for', this.opts.element.attr("id"));
            this.parent.destroy.apply(this, arguments);
            cleanupJQueryElements.call(this, "searchContainer", "selection");
        },
        initContainer: function() {
            var selector = ".select2-choices",
                selection;
            this.searchContainer = this.container.find(".select2-search-field");
            this.selection = selection = this.container.find(selector);
            var _this = this;
            this.selection.on("click", ".select2-search-choice:not(.select2-locked)",
                function(e) {
                    _this.search[0].focus();
                    _this.selectChoice($(this));
                });
            this.search.attr("id", "s2id_autogen" + nextUid());
            this.search.prev().text($("label[for='" + this.opts.element.attr("id") + "']").text()).attr('for', this.search.attr('id'));
            this.search.on("input paste", this.bind(function() {
                if (this.search.attr('placeholder') && this.search.val().length == 0) return;
                if (!this.isInterfaceEnabled()) return;
                if (!this.opened()) {
                    this.open();
                }
            }));
            this.search.attr("tabindex", this.elementTabIndex);
            this.keydowns = 0;
            this.search.on("keydown", this.bind(function(e) {
                if (!this.isInterfaceEnabled()) return; ++this.keydowns;
                var selected = selection.find(".select2-search-choice-focus");
                var prev = selected.prev(".select2-search-choice:not(.select2-locked)");
                var next = selected.next(".select2-search-choice:not(.select2-locked)");
                var pos = getCursorInfo(this.search);
                if (selected.length && (e.which == KEY.LEFT || e.which == KEY.RIGHT || e.which == KEY.BACKSPACE || e.which == KEY.DELETE || e.which == KEY.ENTER)) {
                    var selectedChoice = selected;
                    if (e.which == KEY.LEFT && prev.length) {
                        selectedChoice = prev;
                    } else if (e.which == KEY.RIGHT) {
                        selectedChoice = next.length ? next: null;
                    } else if (e.which === KEY.BACKSPACE) {
                        if (this.unselect(selected.first())) {
                            this.search.width(10);
                            selectedChoice = prev.length ? prev: next;
                        }
                    } else if (e.which == KEY.DELETE) {
                        if (this.unselect(selected.first())) {
                            this.search.width(10);
                            selectedChoice = next.length ? next: null;
                        }
                    } else if (e.which == KEY.ENTER) {
                        selectedChoice = null;
                    }
                    this.selectChoice(selectedChoice);
                    killEvent(e);
                    if (!selectedChoice || !selectedChoice.length) {
                        this.open();
                    }
                    return;
                } else if (((e.which === KEY.BACKSPACE && this.keydowns == 1) || e.which == KEY.LEFT) && (pos.offset == 0 && !pos.length)) {
                    this.selectChoice(selection.find(".select2-search-choice:not(.select2-locked)").last());
                    killEvent(e);
                    return;
                } else {
                    this.selectChoice(null);
                }
                if (this.opened()) {
                    switch (e.which) {
                        case KEY.UP:
                        case KEY.DOWN:
                            this.moveHighlight((e.which === KEY.UP) ? -1 : 1);
                            killEvent(e);
                            return;
                        case KEY.ENTER:
                            this.selectHighlighted();
                            killEvent(e);
                            return;
                        case KEY.TAB:
                            this.selectHighlighted({
                                noFocus:
                                    true
                            });
                            this.close();
                            return;
                        case KEY.ESC:
                            this.cancel(e);
                            killEvent(e);
                            return;
                    }
                }
                if (e.which === KEY.TAB || KEY.isControl(e) || KEY.isFunctionKey(e) || e.which === KEY.BACKSPACE || e.which === KEY.ESC) {
                    return;
                }
                if (e.which === KEY.ENTER) {
                    if (this.opts.openOnEnter === false) {
                        return;
                    } else if (e.altKey || e.ctrlKey || e.shiftKey || e.metaKey) {
                        return;
                    }
                }
                this.open();
                if (e.which === KEY.PAGE_UP || e.which === KEY.PAGE_DOWN) {
                    killEvent(e);
                }
                if (e.which === KEY.ENTER) {
                    killEvent(e);
                }
            }));
            this.search.on("keyup", this.bind(function(e) {
                this.keydowns = 0;
                this.resizeSearch();
            }));
            this.search.on("blur", this.bind(function(e) {
                this.container.removeClass("select2-container-active");
                this.search.removeClass("select2-focused");
                this.selectChoice(null);
                if (!this.opened()) this.clearSearch();
                e.stopImmediatePropagation();
                this.opts.element.trigger($.Event("select2-blur"));
            }));
            this.container.on("click", selector, this.bind(function(e) {
                if (!this.isInterfaceEnabled()) return;
                if ($(e.target).closest(".select2-search-choice").length > 0) {
                    return;
                }
                this.selectChoice(null);
                this.clearPlaceholder();
                if (!this.container.hasClass("select2-container-active")) {
                    this.opts.element.trigger($.Event("select2-focus"));
                }
                this.open();
                this.focusSearch();
                e.preventDefault();
            }));
            this.container.on("focus", selector, this.bind(function() {
                if (!this.isInterfaceEnabled()) return;
                if (!this.container.hasClass("select2-container-active")) {
                    this.opts.element.trigger($.Event("select2-focus"));
                }
                this.container.addClass("select2-container-active");
                this.dropdown.addClass("select2-drop-active");
                this.clearPlaceholder();
            }));
            this.initContainerWidth();
            this.opts.element.addClass("select2-offscreen");
            this.clearSearch();
        },
        enableInterface: function() {
            if (this.parent.enableInterface.apply(this, arguments)) {
                this.search.prop("disabled", !this.isInterfaceEnabled());
            }
        },
        initSelection: function() {
            var data;
            if (this.opts.element.val() === "" && this.opts.element.text() === "") {
                this.updateSelection([]);
                this.close();
                this.clearSearch();
            }
            if (this.select || this.opts.element.val() !== "") {
                var self = this;
                this.opts.initSelection.call(null, this.opts.element,
                    function(data) {
                        if (data !== undefined && data !== null) {
                            self.updateSelection(data);
                            self.close();
                            self.clearSearch();
                        }
                    });
            }
        },
        clearSearch: function() {
            var placeholder = this.getPlaceholder(),
                maxWidth = this.getMaxSearchWidth();
            if (placeholder !== undefined && this.getVal().length === 0 && this.search.hasClass("select2-focused") === false) {
                this.search.val(placeholder).addClass("select2-default");
                this.search.width(maxWidth > 0 ? maxWidth: this.container.css("width"));
            } else {
                this.search.val("").width(10);
            }
        },
        clearPlaceholder: function() {
            if (this.search.hasClass("select2-default")) {
                this.search.val("").removeClass("select2-default");
            }
        },
        opening: function() {
            this.clearPlaceholder();
            this.resizeSearch();
            this.parent.opening.apply(this, arguments);
            this.focusSearch();
            if (this.search.val() === "") {
                if (this.nextSearchTerm != undefined) {
                    this.search.val(this.nextSearchTerm);
                    this.search.select();
                }
            }
            this.updateResults(true);
            if (this.opts.shouldFocusInput(this)) {
                this.search.focus();
            }
            this.opts.element.trigger($.Event("select2-open"));
        },
        close: function() {
            if (!this.opened()) return;
            this.parent.close.apply(this, arguments);
        },
        focus: function() {
            this.close();
            this.search.focus();
        },
        isFocused: function() {
            return this.search.hasClass("select2-focused");
        },
        updateSelection: function(data) {
            var ids = [],
                filtered = [],
                self = this;
            $(data).each(function() {
                if (indexOf(self.id(this), ids) < 0) {
                    ids.push(self.id(this));
                    filtered.push(this);
                }
            });
            data = filtered;
            this.selection.find(".select2-search-choice").remove();
            $(data).each(function() {
                self.addSelectedChoice(this);
            });
            self.postprocessResults();
        },
        tokenize: function() {
            var input = this.search.val();
            input = this.opts.tokenizer.call(this, input, this.data(), this.bind(this.onSelect), this.opts);
            if (input != null && input != undefined) {
                this.search.val(input);
                if (input.length > 0) {
                    this.open();
                }
            }
        },
        onSelect: function(data, options) {
            if (!this.triggerSelect(data)) {
                return;
            }
            this.addSelectedChoice(data);
            this.opts.element.trigger({
                type: "selected",
                val: this.id(data),
                choice: data
            });
            this.nextSearchTerm = this.opts.nextSearchTerm(data, this.search.val());
            this.clearSearch();
            this.updateResults();
            if (this.select || !this.opts.closeOnSelect) this.postprocessResults(data, false, this.opts.closeOnSelect === true);
            if (this.opts.closeOnSelect) {
                this.close();
                this.search.width(10);
            } else {
                if (this.countSelectableResults() > 0) {
                    this.search.width(10);
                    this.resizeSearch();
                    if (this.getMaximumSelectionSize() > 0 && this.val().length >= this.getMaximumSelectionSize()) {
                        this.updateResults(true);
                    } else {
                        if (this.nextSearchTerm != undefined) {
                            this.search.val(this.nextSearchTerm);
                            this.updateResults();
                            this.search.select();
                        }
                    }
                    this.positionDropdown();
                } else {
                    this.close();
                    this.search.width(10);
                }
            }
            this.triggerChange({
                added: data
            });
            if (!options || !options.noFocus) this.focusSearch();
        },
        cancel: function() {
            this.close();
            this.focusSearch();
        },
        addSelectedChoice: function(data) {
            var enableChoice = !data.locked,
                enabledItem = $("<li class='select2-search-choice'>" + "    <div></div>" + "    <a href='#' class='select2-search-choice-close' tabindex='-1'></a>" + "</li>"),
                disabledItem = $("<li class='select2-search-choice select2-locked'>" + "<div></div>" + "</li>");
            var choice = enableChoice ? enabledItem: disabledItem,
                id = this.id(data),
                val = this.getVal(),
                formatted,
                cssClass;
            formatted = this.opts.formatSelection(data, choice.find("div"), this.opts.escapeMarkup);
            if (formatted != undefined) {
                choice.find("div").replaceWith("<div>" + formatted + "</div>");
            }
            cssClass = this.opts.formatSelectionCssClass(data, choice.find("div"));
            if (cssClass != undefined) {
                choice.addClass(cssClass);
            }
            if (enableChoice) {
                choice.find(".select2-search-choice-close").on("mousedown", killEvent).on("click dblclick", this.bind(function(e) {
                    if (!this.isInterfaceEnabled()) return;
                    this.unselect($(e.target));
                    this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus");
                    killEvent(e);
                    this.close();
                    this.focusSearch();
                })).on("focus", this.bind(function() {
                    if (!this.isInterfaceEnabled()) return;
                    this.container.addClass("select2-container-active");
                    this.dropdown.addClass("select2-drop-active");
                }));
            }
            choice.data("select2-data", data);
            choice.insertBefore(this.searchContainer);
            val.push(id);
            this.setVal(val);
        },
        unselect: function(selected) {
            var val = this.getVal(),
                data,
                index;
            selected = selected.closest(".select2-search-choice");
            if (selected.length === 0) {
                throw "Invalid argument: " + selected + ". Must be .select2-search-choice";
            }
            data = selected.data("select2-data");
            if (!data) {
                return;
            }
            var evt = $.Event("select2-removing");
            evt.val = this.id(data);
            evt.choice = data;
            this.opts.element.trigger(evt);
            if (evt.isDefaultPrevented()) {
                return false;
            }
            while ((index = indexOf(this.id(data), val)) >= 0) {
                val.splice(index, 1);
                this.setVal(val);
                if (this.select) this.postprocessResults();
            }
            selected.remove();
            this.opts.element.trigger({
                type: "select2-removed",
                val: this.id(data),
                choice: data
            });
            this.triggerChange({
                removed: data
            });
            return true;
        },
        postprocessResults: function(data, initial, noHighlightUpdate) {
            var val = this.getVal(),
                choices = this.results.find(".select2-result"),
                compound = this.results.find(".select2-result-with-children"),
                self = this;
            choices.each2(function(i, choice) {
                var id = self.id(choice.data("select2-data"));
                if (indexOf(id, val) >= 0) {
                    choice.addClass("select2-selected");
                    choice.find(".select2-result-selectable").addClass("select2-selected");
                }
            });
            compound.each2(function(i, choice) {
                if (!choice.is('.select2-result-selectable') && choice.find(".select2-result-selectable:not(.select2-selected)").length === 0) {
                    choice.addClass("select2-selected");
                }
            });
            if (this.highlight() == -1 && noHighlightUpdate !== false) {
                self.highlight(0);
            }
            if (!this.opts.createSearchChoice && !choices.filter('.select2-result:not(.select2-selected)').length > 0) {
                if (!data || data && !data.more && this.results.find(".select2-no-results").length === 0) {
                    if (checkFormatter(self.opts.formatNoMatches, "formatNoMatches")) {
                        this.results.append("<li class='select2-no-results'>" + evaluate(self.opts.formatNoMatches, self.opts.element, self.search.val()) + "</li>");
                    }
                }
            }
        },
        getMaxSearchWidth: function() {
            return this.selection.width() - getSideBorderPadding(this.search);
        },
        resizeSearch: function() {
            var minimumWidth, left, maxWidth, containerLeft, searchWidth, sideBorderPadding = getSideBorderPadding(this.search);
            minimumWidth = measureTextWidth(this.search) + 10;
            left = this.search.offset().left;
            maxWidth = this.selection.width();
            containerLeft = this.selection.offset().left;
            searchWidth = maxWidth - (left - containerLeft) - sideBorderPadding;
            if (searchWidth < minimumWidth) {
                searchWidth = maxWidth - sideBorderPadding;
            }
            if (searchWidth < 40) {
                searchWidth = maxWidth - sideBorderPadding;
            }
            if (searchWidth <= 0) {
                searchWidth = minimumWidth;
            }
            this.search.width(Math.floor(searchWidth));
        },
        getVal: function() {
            var val;
            if (this.select) {
                val = this.select.val();
                return val === null ? [] : val;
            } else {
                val = this.opts.element.val();
                return splitVal(val, this.opts.separator);
            }
        },
        setVal: function(val) {
            var unique;
            if (this.select) {
                this.select.val(val);
            } else {
                unique = [];
                $(val).each(function() {
                    if (indexOf(this, unique) < 0) unique.push(this);
                });
                this.opts.element.val(unique.length === 0 ? "": unique.join(this.opts.separator));
            }
        },
        buildChangeDetails: function(old, current) {
            var current = current.slice(0),
                old = old.slice(0);
            for (var i = 0; i < current.length; i++) {
                for (var j = 0; j < old.length; j++) {
                    if (equal(this.opts.id(current[i]), this.opts.id(old[j]))) {
                        current.splice(i, 1);
                        if (i > 0) {
                            i--;
                        }
                        old.splice(j, 1);
                        j--;
                    }
                }
            }
            return {
                added: current,
                removed: old
            };
        },
        val: function(val, triggerChange) {
            var oldData, self = this;
            if (arguments.length === 0) {
                return this.getVal();
            }
            oldData = this.data();
            if (!oldData.length) oldData = [];
            if (!val && val !== 0) {
                this.opts.element.val("");
                this.updateSelection([]);
                this.clearSearch();
                if (triggerChange) {
                    this.triggerChange({
                        added: this.data(),
                        removed: oldData
                    });
                }
                return;
            }
            this.setVal(val);
            if (this.select) {
                this.opts.initSelection(this.select, this.bind(this.updateSelection));
                if (triggerChange) {
                    this.triggerChange(this.buildChangeDetails(oldData, this.data()));
                }
            } else {
                if (this.opts.initSelection === undefined) {
                    throw new Error("val() cannot be called if initSelection() is not defined");
                }
                this.opts.initSelection(this.opts.element,
                    function(data) {
                        var ids = $.map(data, self.id);
                        self.setVal(ids);
                        self.updateSelection(data);
                        self.clearSearch();
                        if (triggerChange) {
                            self.triggerChange(self.buildChangeDetails(oldData, self.data()));
                        }
                    });
            }
            this.clearSearch();
        },
        onSortStart: function() {
            if (this.select) {
                throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");
            }
            this.search.width(0);
            this.searchContainer.hide();
        },
        onSortEnd: function() {
            var val = [],
                self = this;
            this.searchContainer.show();
            this.searchContainer.appendTo(this.searchContainer.parent());
            this.resizeSearch();
            this.selection.find(".select2-search-choice").each(function() {
                val.push(self.opts.id($(this).data("select2-data")));
            });
            this.setVal(val);
            this.triggerChange();
        },
        data: function(values, triggerChange) {
            var self = this,
                ids, old;
            if (arguments.length === 0) {
                return this.selection.children(".select2-search-choice").map(function() {
                    return $(this).data("select2-data");
                }).get();
            } else {
                old = this.data();
                if (!values) {
                    values = [];
                }
                ids = $.map(values,
                    function(e) {
                        return self.opts.id(e);
                    });
                this.setVal(ids);
                this.updateSelection(values);
                this.clearSearch();
                if (triggerChange) {
                    this.triggerChange(this.buildChangeDetails(old, this.data()));
                }
            }
        }
    });
    $.fn.select2 = function() {
        var args = Array.prototype.slice.call(arguments, 0),
            opts,
            select2,
            method,
            value,
            multiple,
            allowedMethods = ["val", "destroy", "opened", "open", "close", "focus", "isFocused", "container", "dropdown", "onSortStart", "onSortEnd", "enable", "disable", "readonly", "positionDropdown", "data", "search"],
            valueMethods = ["opened", "isFocused", "container", "dropdown"],
            propertyMethods = ["val", "data"],
            methodsMap = {
                search: "externalSearch"
            };
        this.each(function() {
            if (args.length === 0 || typeof(args[0]) === "object") {
                opts = args.length === 0 ? {}: $.extend({},
                    args[0]);
                opts.element = $(this);
                if (opts.element.get(0).tagName.toLowerCase() === "select") {
                    multiple = opts.element.prop("multiple");
                } else {
                    multiple = opts.multiple || false;
                    if ("tags" in opts) {
                        opts.multiple = multiple = true;
                    }
                }
                select2 = multiple ? new window.Select2["class"].multi() : new window.Select2["class"].single();
                select2.init(opts);
            } else if (typeof(args[0]) === "string") {
                if (indexOf(args[0], allowedMethods) < 0) {
                    throw "Unknown method: " + args[0];
                }
                value = undefined;
                select2 = $(this).data("select2");
                if (select2 === undefined) return;
                method = args[0];
                if (method === "container") {
                    value = select2.container;
                } else if (method === "dropdown") {
                    value = select2.dropdown;
                } else {
                    if (methodsMap[method]) method = methodsMap[method];
                    value = select2[method].apply(select2, args.slice(1));
                }
                if (indexOf(args[0], valueMethods) >= 0 || (indexOf(args[0], propertyMethods) >= 0 && args.length == 1)) {
                    return false;
                }
            } else {
                throw "Invalid arguments to select2 plugin: " + args;
            }
        });
        return (value === undefined) ? this: value;
    };
    $.fn.select2.defaults = {
        width: "copy",
        loadMorePadding: 0,
        closeOnSelect: true,
        openOnEnter: true,
        containerCss: {},
        dropdownCss: {},
        containerCssClass: "",
        dropdownCssClass: "",
        formatResult: function(result, container, query, escapeMarkup) {
            var markup = [];
            markMatch(result.text, query.term, markup, escapeMarkup);
            return markup.join("");
        },
        formatSelection: function(data, container, escapeMarkup) {
            return data ? escapeMarkup(data.text) : undefined;
        },
        sortResults: function(results, container, query) {
            return results;
        },
        formatResultCssClass: function(data) {
            return data.css;
        },
        formatSelectionCssClass: function(data, container) {
            return undefined;
        },
        formatMatches: function(matches) {
            if (matches === 1) {
                return "One result is available, press enter to select it.";
            }
            return matches + " results are available, use up and down arrow keys to navigate.";
        },
        formatNoMatches: function() {
            return "No matches found";
        },
        formatInputTooShort: function(input, min) {
            var n = min - input.length;
            return "Please enter " + n + " or more character" + (n == 1 ? "": "s");
        },
        formatInputTooLong: function(input, max) {
            var n = input.length - max;
            return "Please delete " + n + " character" + (n == 1 ? "": "s");
        },
        formatSelectionTooBig: function(limit) {
            return "Only a maximum of " + limit + " selection" + (limit == 1 ? "": "s" + " are allowed!");
        },
        formatUserSelectionTooBig: function(limit) {
            return "You can only select " + limit + " Interest" + (limit == 1 ? "": "s" + " per Post");
        },
        formatLoadMore: function(pageNumber) {
            return "Loading more results�?";
        },
        formatSearching: function() {
            return "Searching�?";
        },
        minimumResultsForSearch: 0,
        minimumInputLength: 0,
        maximumInputLength: null,
        maximumSelectionSize: 0,
        maximumUserSelectionSize: 0,
        id: function(e) {
            return e == undefined ? null: e.id;
        },
        matcher: function(term, text) {
            return stripDiacritics('' + text).toUpperCase().indexOf(stripDiacritics('' + term).toUpperCase()) >= 0;
        },
        separator: ",",
        tokenSeparators: [],
        tokenizer: defaultTokenizer,
        escapeMarkup: defaultEscapeMarkup,
        blurOnChange: false,
        selectOnBlur: false,
        adaptContainerCssClass: function(c) {
            return c;
        },
        adaptDropdownCssClass: function(c) {
            return null;
        },
        nextSearchTerm: function(selectedObject, currentSearchTerm) {
            return undefined;
        },
        searchInputPlaceholder: '',
        createSearchChoicePosition: 'top',
        shouldFocusInput: function(instance) {
            var supportsTouchEvents = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));
            if (!supportsTouchEvents) {
                return true;
            }
            if (instance.opts.minimumResultsForSearch < 0) {
                return false;
            }
            return true;
        }
    };
    $.fn.select2.ajaxDefaults = {
        transport: $.ajax,
        params: {
            type: "GET",
            cache: false,
            dataType: "json"
        }
    };
    window.Select2 = {
        query: {
            ajax: ajax,
            local: local,
            tags: tags
        },
        util: {
            debounce: debounce,
            markMatch: markMatch,
            escapeMarkup: defaultEscapeMarkup,
            stripDiacritics: stripDiacritics
        },
        "class": {
            "abstract": AbstractSelect2,
            "single": SingleSelect2,
            "multi": MultiSelect2
        }
    };
} (jQuery));
function GettingStarted() {
    var self = this;
    $.extend(self, {
        dialog: new SimpleDialog('gettingStartedDialog', true, false),
        imageTimer: null,
        init: function() {
            self.show();
        },
        show: function() {
            self.dialog.show();
            self.dialog.showLoader();
            $.get('/User/gettingStarted', {
                    action: self.action,
                    message: self.message,
                    url: window.location.href
                },
                function(html) {
                    self.dialog.html(html);
                    self.toggleImages();
                    self.addEvents();
                });
        },
        addEvents: function() {
            $('.goToStep2').click(self.goToStep2);
            $('.goToStep1').click(self.goToStep1);
            $('.goToStep3').click(self.goToStep3);
            $('.categoryItem').click(self.toggleCategory);
            $('.goToCollections').click(self.goToCollections);
            $('.cancel').click(function() {
                self.dialog.hide();
            });
        },
        toggleCategory: function() {
            $(this).toggleClass('active').find('img').toggleClass('active');
        },
        toggleImages: function() {
            var step = self.dialog.content.find('.step:visible');
            var imageHolder = step.find('.imagesToggle');
            var currentIndex = 0;
            self.showNextImage.call(imageHolder, currentIndex);
            self.imageTimer = setInterval(function() {
                    if (currentIndex >= imageHolder.find('> img').length - 1) {
                        currentIndex = -1;
                    }
                    self.showNextImage.call(imageHolder, ++currentIndex);
                },
                3000);
        },
        cancelTimer: function() {
            if (self.imageTimer) {
                clearInterval(self.imageTimer);
                self.imageTimer = null;
            }
        },
        showNextImage: function(index) {
            var currentImage = $(this).find(':visible');
            var nextImage = $(this).find('img:eq(' + index + ')');
            if (currentImage.index() != index) {
                currentImage.fadeOut(300);
            }
            nextImage.fadeIn(300);
        },
        goToStep2: function() {
            self.cancelTimer();
            $('.step:visible').css('zIndex', 2).fadeOut(300,
                function() {
                    self.toggleImages();
                });
            $('.step2').css('zIndex', 1).show();
        },
        goToStep1: function() {
            self.cancelTimer();
            $('.step1').css('zIndex', 1).show();
            $('.step2').css('zIndex', 2).fadeOut(300,
                function() {
                    self.toggleImages();
                });
        },
        goToStep3: function() {
            self.cancelTimer();
            $('.step3').css('zIndex', 1).show();
            $('.step2').css('zIndex', 2).fadeOut(300);
        },
        goToCollections: function() {
            var categoryIds = [];
            $('.categoryItem.active').each(function() {
                var categoryId = $(this).attr('data-categoryIds');
                if (categoryId) {
                    categoryIds.push(categoryId);
                }
            });
            categoryIds = categoryIds.join(',');
            if (categoryIds.length == 0) {
                $('.categoryError').text('Please select at least 1 category to continue.').show();
                return;
            }
            window.location = '/collections?gs&categoryIds=' + categoryIds;
        }
    });
    self.init();
}
function Actions() {
    var self = this;
    $.extend(self, {
        init: function() {
            self.registerEvents();
        },
        registerEvents: function() {
            $('body').on('click', 'article.post .actions .votePost a.voteDeal', self.votePost).on('click', '.sharePost', self.updateShareCount).on('click', 'a.feedbackSubmit', self.submitFeedback);
        },
        updateShareCount: function() {
            var wrapper = $(this).closest('article.post');
            var postId = wrapper.attr('data-post-id');
            var postType = wrapper.attr('data-post-type');
            var link = document.URL.replace("local.dealsplus", "dealsplus");
            var type = '';
            if ($(this).hasClass('icon-pinterest-share2')) type = "pinterest";
            else if ($(this).hasClass('icon-facebook-share2')) type = "facebook";
            else if ($(this).hasClass('icon-twitter-share2')) type = "twitter";
            $.ajax({
                url: "/Post/share",
                data: {
                    postId: postId,
                    postType: postType,
                    link: link,
                    type: type
                },
                type: "POST",
                success: function(response) {
                    $(this).children('span.' + type + 'Count').first().html(response.html);
                }
            })
        },
        votePost: function() {
            if (!window.isLoggedIn) {
                new LoginDialog("You need to be logged in to vote on a deal");
                $(this).blur();
                return;
            }
            var wrapper = $(this).closest('article.post');
            var postId = wrapper.attr('data-post-id');
            var container = $(this).closest('.votePost');
            var vote = 0;
            var voteUpCount = container.find('.voteUpCount');
            var currentCount = voteUpCount.data('vote-up-count');
            var feedbackBoxUp = container.find('div.voteUpFeedback');
            var feedbackBoxDown = container.find('div.voteDownFeedback');
            container.find('div.feedbackMsg').hide();
            if ($(this).hasClass('voteUpDeal')) {
                if ($(this).hasClass('active')) {
                    vote = 0;
                    $(this).removeClass('active');
                    voteUpCount.data('vote-up-count', --currentCount);
                    voteUpCount.html(currentCount + " like" + (currentCount > 1 ? 's': ''));
                    feedbackBoxUp.slideUp();
                } else {
                    vote = 1;
                    container.find('.voteDownDeal.active').removeClass('active');
                    $(this).addClass('active');
                    voteUpCount.data('vote-up-count', ++currentCount);
                    voteUpCount.html(currentCount + " like" + (currentCount > 1 ? 's': ''));
                    feedbackBoxUp.slideDown();
                    feedbackBoxDown.hide();
                }
            } else {
                if ($(this).hasClass('active')) {
                    vote = 0;
                    $(this).removeClass('active');
                    feedbackBoxDown.slideUp();
                } else {
                    vote = -1;
                    if (container.find('.voteUpDeal').hasClass('active')) {
                        container.find('.voteUpDeal').removeClass('active');
                        voteUpCount.data('vote-up-count', --currentCount);
                        voteUpCount.html(currentCount + " like" + (currentCount > 1 ? 's': ''))
                    }
                    $(this).addClass('active');
                    feedbackBoxDown.slideDown();
                    feedbackBoxUp.hide();
                }
            }
            $.ajax({
                url: '/Deal/vote',
                type: 'POST',
                data: {
                    dealId: postId,
                    vote: vote
                },
                success: function(response) {
                    if (response.error) {
                        alert('Something went wrong! Please try again.');
                    }
                },
                error: function() {
                    alert('Something went wrong! Please try again.');
                }
            });
        },
        submitFeedback: function() {
            var wrapper = $(this).closest('article.post');
            var postId = wrapper.attr('data-post-id');
            var button = $(this);
            if ($(this).hasClass('voteUpFeedbackSubmit')) {
                var container = $(this).closest('.voteUpFeedback');
                var feedback = (container.find('textarea').val()).trim();
                if (feedback) {
                    $.ajax({
                        url: "/Post/comment",
                        data: {
                            postId: postId,
                            postType: 1,
                            content: feedback
                        },
                        type: "POST",
                        success: function(response) {
                            if (response.error) {
                                return;
                            }
                            var formWrapper = wrapper.find('section.comments');
                            var commentWrapper = wrapper.find('section.comments > div');
                            if (commentWrapper.length <= 0) {
                                formWrapper.closest('section.comments').append('<div><div>' + response.html + '</div></div>')
                            } else {
                                commentWrapper.prepend("<div>" + response.html + "</div>");
                            }
                        }
                    });
                    container.find('textarea').val('');
                    button.closest('div.votePost').find('div.feedbackMsg').show().html("Thanks! Your comment has been posted!");
                } else {
                    alert("Your feedback cannot be empty!");
                }
            } else {
                var container = $(this).closest('.voteDownFeedback');
                var flagValue = $(this).data('flag-value');
                $.ajax({
                    url: "/flag_deal.php",
                    type: "POST",
                    data: {
                        dealid: postId,
                        flag_value: flagValue
                    }
                });
                button.closest('div.votePost').find('div.feedbackMsg').show().html("Thank you for your feedback!")
            }
            container.slideUp();
        }
    });
    self.init();
}
$(document).ready(function() {
    new Actions();
});
function Comments() {
    var self = this;
    $.extend(self, {
        init: function() {
            self.registerEvents();
        },
        registerEvents: function() {
            $('body').on('click', 'article.post .comments .replyLink', self.showReply).on('submit', 'article.post .comments form', self.postComment).on('click', 'article.post .comments .voteComment a', self.voteComment);
        },
        showReply: function() {
            $('.reply form').hide();
            var closest = $(this).closest('div').children('form');
            closest.show();
            $('textarea', closest).focus();
        },
        postComment: function() {
            var wrapper = $(this).closest('article.post');
            var postId = wrapper.attr('data-post-id');
            var postType = wrapper.attr('data-post-type');
            var formWrapper = $(this);
            var replyTo = $('.replyTo', $(this)).val();
            var content = $('textarea', $(this)).val();
            if (!content || formWrapper.prop("disabled")) {
                return false;
            }
            formWrapper.prop("disabled", true);
            $.ajax({
                url: '/Post/comment',
                type: 'POST',
                data: {
                    postId: postId,
                    postType: postType,
                    replyTo: replyTo,
                    content: content
                },
                success: function(response) {
                    formWrapper.removeProp("disabled");
                    if (response.error) {
                        alert('Something went wrong! Please try again.');
                        return;
                    }
                    if (typeof replyTo === 'undefined') {
                        var commentWrapper = formWrapper.closest('section.comments').children('div');
                        if (commentWrapper.length <= 0) {
                            console.log(formWrapper.closest('section.comments'));
                            formWrapper.closest('section.comments').append('<div><div>' + response.html + '</div></div>')
                        } else {
                            commentWrapper.prepend("<div>" + response.html + "</div>");
                        }
                        formWrapper.children('textarea').first().val('');
                    } else {
                        if (formWrapper.parents('.replies').length) {
                            formWrapper.closest('div.replies').append(response.html);
                        } else {
                            var replyCommentWrapper = formWrapper.closest('div.comment');
                            if (replyCommentWrapper.next('.replies').length) {
                                replyCommentWrapper.next('.replies').append(response.html);
                            } else {
                                replyCommentWrapper.after("<div class=\"replies\">" + response.html + "</div>");
                            }
                        }
                        formWrapper.children('textarea').first().val('');
                        formWrapper.hide();
                    }
                    formWrapper.find('.lightPurpleButton').trigger('blur');
                },
                error: function() {
                    $("form").removeProp("disabled");
                    alert('Something went wrong! Please try again.');
                }
            });
            return false;
        },
        voteComment: function() {
            var loginUserId = $(this).attr('data-visitor-id');
            if (loginUserId == '0') {
                new LoginDialog("You need to be logged in to like a comment");
                $(this).blur();
                return;
            }
            var wrapper = $(this).closest('article.post');
            var postId = wrapper.attr('data-post-id');
            var postType = wrapper.attr('data-post-type');
            var commentId = $(this).closest('.comment').attr('data-comment-id');
            var container = $(this).closest('.voteComment');
            var vote = ($(this).hasClass('voteCommentUp') ? 1 : 0);
            var unVote = ($(this).hasClass('active') ? 1 : 0);
            $.ajax({
                url: '/Post/voteComment',
                type: 'POST',
                data: {
                    postId: postId,
                    postType: postType,
                    commentId: commentId,
                    vote: vote,
                    unVote: unVote
                },
                success: function(response) {
                    if (response.error) {
                        alert('Something went wrong! Please try again.');
                        return;
                    }
                    container.replaceWith(response.html);
                },
                error: function() {
                    alert('Something went wrong! Please try again.');
                }
            });
        }
    });
    self.init();
}
$(document).ready(function() {
    new Comments();
});
function RemoveInterest() {
    var self = this;
    $.extend(self, {
        init: function() {
            self.registerEvents();
        },
        registerEvents: function() {
            $('body').on('click', 'article.post a.removeTopicFromInterest', self.removeinterest);
        },
        removeinterest: function() {
            if (!confirm("Are you sure?")) {
                return false;
            }
            var removeButtonWrapper = $(this).parent();
            var interestLocation = $(".interestLocation");
            var interestList = $("#interestList");
            var topicId = $(this).attr('data-topic-id');
            var interestId = interestLocation.attr('data-interest-id');
            var topicName = $(this).attr('data-topic-name');
            var topicTileSelector = '[href="/topic/' + topicId + '/' + topicName + '"]';
            var topicTileWrapper = $(topicTileSelector).parents('div.item:first');
            $.ajax({
                url: '/Topic/removeTopicFromInterest',
                type: 'POST',
                data: {
                    topicId: topicId,
                    interestId: interestId
                },
                success: function(response) {
                    if (response.error) {
                        alert('Something went wrong! 1 Please try again.');
                        return;
                    }
                    if (response.data) {
                        removeButtonWrapper.remove();
                        interestLocation.remove();
                        interestList.remove();
                        topicTileWrapper.remove();
                    } else {
                        window.location.href = response.userMessage;
                    }
                },
                error: function() {
                    alert('Something went wrong! 2 Please try again.');
                }
            });
        }
    });
    self.init();
}
$(document).ready(function() {
    new RemoveInterest();
});
function QuickComment() {
    var self = this;
    $.extend(self, {
        init: function() {
            self.registerEvents();
        },
        registerEvents: function() {
            $('body').on('keydown', 'div.quickCommentBox textarea', self.submitQuickComment).on('click', 'a.deleteQuickComment', self.deleteQuickComment);
        },
        deleteQuickComment: function(e) {
            e.preventDefault();
            if (confirm("Are you sure to delete this comment?") == false) {
                return false;
            }
            var deleteUrl = $(this).attr('href');
            var itemWrapper = $(this).closest('.tileComment');
            $.ajax({
                url: deleteUrl,
                type: 'GET',
                success: function(res) {
                    itemWrapper.hide();
                    var masonryItems = itemWrapper.closest('div.itemPage').data('masonry');
                    masonryItems.layout();
                }
            });
        },
        submitQuickComment: function(e) {
            var key = e.charCode ? e.charCode: e.keyCode ? e.keyCode: 0;
            if (key == 13) {
                e.preventDefault();
                var itemWrapper = $(this).closest('.item');
                var inputWrapper = $(this);
                inputWrapper.attr('disabled', true);
                if ((inputWrapper.val().trim()) != '') {
                    $.ajax({
                        url: '/Post/comment',
                        type: 'POST',
                        data: {
                            postId: itemWrapper.data('id'),
                            postType: itemWrapper.data('type'),
                            content: $(this).val(),
                            quickComment: true
                        },
                        success: function(res) {
                            itemWrapper.find('.tileCommentBox').first().before(res.html);
                            inputWrapper.val('');
                            inputWrapper.attr('disabled', false);
                            var masonryItems = itemWrapper.closest('div.itemPage').data('masonry');
                            masonryItems.layout();
                        }
                    })
                }
            }
        }
    });
    self.init();
}
$(document).ready(function() {
    new QuickComment();
});
function QuickTalkCreate(masonryItems) {
    var self = this;
    $.extend(self, {
        init: function() {
            self.registerEvents();
            self.setupInterest();
        },
        registerEvents: function() {
            $('body').on('click', 'div.itemTile.stamp div a.quickTalkSubmit', self.createNewTalk).on('keyup', 'div.itemTile.stamp div textarea#quickTalkBox', self.titleCount);
        },
        titleCount: function() {
            var countWrapper = $('#characterCount');
            countWrapper.show();
            countWrapper.html((128 - $(this).val().length) + " Remaining");
            masonryItems.masonry.layout();
        },
        createNewTalk: function() {
            var itemTileWrapper = $(this).closest('.itemPage');
            var interestId = $(this).closest('.stamp').data('interest-id');
            var inputWrapper = $('div.itemTile.stamp div textarea#quickTalkBox');
            var content = inputWrapper.val();
            var countWrapper = $('#characterCount');
            var hideInterest = 1;
            if (typeof interestId == 'undefined') {
                interestId = inputWrapper.closest('div.itemTile.stamp').find('input#interest').first().val();
                if (!interestId) {
                    alert('Please select an Interest for this Talk!');
                    return false;
                }
                hideInterest = 0;
            }
            if (content.trim() != '') {
                $.ajax({
                    url: '/Talk/saveTalk',
                    type: 'POST',
                    dataType: 'json',
                    data: {
                        talkTitle: content,
                        interestId: interestId,
                        hideInterest: hideInterest
                    },
                    success: function(res) {
                        inputWrapper.val('');
                        countWrapper.html("128 Remaining");
                        itemTileWrapper.prepend(res.html);
                        masonryItems.container.masonry('prepended', itemTileWrapper.find('.itemTile').first());
                    }
                })
            }
        },
        setupInterest: function() {
            $('div.itemTile.stamp input#interest').select2({
                placeholder: 'Please Select One Interest.',
                maximumSelectionSize: 3,
                multiple: false,
                ajax: {
                    url: '/Interest/autoComplete',
                    data: function(term) {
                        return {
                            q: term
                        }
                    },
                    results: function(data) {
                        return {
                            results: data
                        }
                    }
                },
                initSelection: function(element, callback) {
                    try {
                        var data = JSON.parse(element.val());
                        console.log(data);
                        element.val(data['id']);
                        callback(data);
                    } catch(err) {
                        console.log(err);
                    }
                }
            });
            masonryItems.masonry.layout();
        }
    });
    self.init();
}
function LoadMoreComment() {
    var self = this;
    var page = 2;
    var newCommentHtml = '';
    var unixTime = parseInt(new Date().getTime().toString().substring(0, 10));
    $.extend(self, {
        init: function() {
            self.preLoadComments();
            self.registerEvents();
        },
        registerEvents: function() {
            $('body').on('click', 'div#loadCommentButton a', self.loadComments);
        },
        loadComments: function() {
            var buttonWrapper = $('div#loadCommentButton');
            if (newCommentHtml) {
                buttonWrapper.before(newCommentHtml);
                self.preLoadComments();
            } else {
                alert("loading Comments..Nothing");
                buttonWrapper.hide();
            }
        },
        preLoadComments: function() {
            var postWrapper = $('article.post');
            var postId = postWrapper.data('post-id');
            var postType = postWrapper.data('post-type');
            var buttonWrapper = $('div#loadCommentButton');
            $.ajax({
                url: "/Post/loadMoreComments",
                type: "GET",
                data: {
                    postId: postId,
                    postType: postType,
                    page: page,
                    time: unixTime
                },
                success: function(res) {
                    if (res.error) {
                        buttonWrapper.hide();
                        return;
                    }
                    buttonWrapper.show();
                    newCommentHtml = res.html;
                    page = res.data;
                }
            })
        }
    });
    self.init();
}
$(document).ready(function() {
    new LoadMoreComment();
});
function CouponRow() {
    var self = this;
    $.extend(self, {
        init: function() {
            self.registerEvents();
        },
        registerEvents: function() {
            $('body').on('click', '.voteUpCouponButton', self.voteUpCoupon).on('click', '.voteDownCouponButton', self.voteDownCoupon).on('click', '.saveCouponButton', self.saveCoupon).on('click', '.couponCommentButton', self.couponComment).on('click', '.shareCouponButton', self.shareCoupon).on('click', '.viewAllComments', self.viewAllComments).on('click', '.commentInfo', self.expandCommentBox).on('click', '.voteCount', self.expandCommentBox);
            $('.postCommentForm').ajaxForm(self.commentFormOptions);
        },
        expandCommentBox: function() {
            var parent = $(this).closest('.singleCouponContainer');
            var commentIcon = parent.find('div.couponDetail div.iconSection span span.couponCommentButton');
            if (commentIcon.hasClass('active')) {
                commentIcon.removeClass('active');
            } else {
                parent.find('div.couponDetail div.iconSection span span.active').removeClass('active');
                commentIcon.addClass('active');
            }
            var targetBox = parent.find('.arrow_box.commentsContainer');
            console.log(parent.children('.arrow_box.active'));
            if (targetBox.hasClass('active')) {
                targetBox.removeClass('active').slideUp();
            } else {
                parent.children('.arrow_box.active').hide().removeClass('active');
                targetBox.slideDown().addClass('active');
            }
        },
        voteUpCoupon: function() {
            if (!window.isLoggedIn) {
                new LoginDialog('You need to be logged in to vote');
                this.blur();
                return false;
            }
            var parent = $(this).closest('.singleCouponContainer');
            var couponId = parent.attr('data-coupon-id');
            var voteUpCount = parent.data('vote-up');
            var voteDownCount = parent.data('vote-down');
            var saveCount = parent.data('total-save');
            var commentCount = parent.data('total-comment');
            var text;
            var totalVotes;
            if (parent.hasClass('popUpCoupon')) {
                var listedCoupon = $('div.coupons').find('div.singleCouponContainer.coupon' + couponId + ':not(.popUpCoupon)');
                var actionButton = listedCoupon.find('.voteUpCouponButton');
            }
            var vote = 1;
            if ($(this).hasClass('selected')) {
                $(this).removeClass('selected');
                if (actionButton != undefined && actionButton.length > 0) {
                    actionButton.removeClass('selected');
                }
                vote = 0;
                voteUpCount--;
            } else {
                voteUpCount++;
                if (parent.find('div.couponDetail div.iconSection span span.voteDownCouponButton').hasClass('selected')) {
                    voteDownCount--;
                }
                parent.find('div.couponDetail div.iconSection span span.active').removeClass('active');
                parent.find('div.couponDetail div.iconSection span span.selected').removeClass('selected');
                $(this).addClass('selected');
                if (actionButton != undefined && actionButton.length > 0) {
                    actionButton.addClass('selected');
                }
            }
            totalVotes = voteUpCount + voteDownCount;
            parent.data('vote-up', voteUpCount);
            parent.data('vote-down', voteDownCount);
            text = voteUpCount > 0 ? Math.round(voteUpCount / totalVotes * 100) + "% success " + "<span class='voteCount'>(" + totalVotes + (totalVotes > 1 ? " votes)": "vote)") + "</span>" + (saveCount > 0 || commentCount > 0 ? " - ": "") : '';
            parent.find('.voteInfo').html(text);
            if (listedCoupon != undefined) {
                listedCoupon.data('vote-up', voteUpCount);
                listedCoupon.find('.voteInfo').html(text);
            }
            var targetBox = parent.find('.arrow_box.voteUpCoupon');
            if (targetBox.hasClass('active')) {
                targetBox.removeClass('active').slideUp();
            } else if ($(this).hasClass('selected')) {
                parent.children('.arrow_box.active').hide().removeClass('active');
                targetBox.slideDown().addClass('active');
            }
            $.ajax({
                url: "/Coupon/vote",
                type: "POST",
                data: {
                    couponId: couponId,
                    vote: vote
                }
            })
        },
        voteDownCoupon: function() {
            if (!window.isLoggedIn) {
                new LoginDialog('You need to be logged in to vote');
                this.blur();
                return false;
            }
            var parent = $(this).closest('.singleCouponContainer');
            var couponId = parent.attr('data-coupon-id');
            var voteUpCount = parent.data('vote-up');
            var voteDownCount = parent.data('vote-down');
            var saveCount = parent.data('total-save');
            var commentCount = parent.data('total-comment');
            var text;
            var totalVotes;
            if (parent.hasClass('popUpCoupon')) {
                var listedCoupon = $('div.coupons').find('div.singleCouponContainer.coupon' + couponId + ':not(.popUpCoupon)');
                var actionButton = listedCoupon.find('.voteDownCouponButton');
            }
            var vote = -1;
            if ($(this).hasClass('selected')) {
                $(this).removeClass('selected');
                if (actionButton != undefined && actionButton.length > 0) {
                    actionButton.removeClass('selected');
                }
                vote = 0;
                voteDownCount--;
            } else {
                voteDownCount++;
                if (parent.find('div.couponDetail div.iconSection span span.voteUpCouponButton').hasClass('selected')) {
                    voteUpCount--;
                }
                parent.find('div.couponDetail div.iconSection span span.active').removeClass('active');
                parent.find('div.couponDetail div.iconSection span span.selected').removeClass('selected');
                $(this).addClass('selected');
                if (actionButton != undefined && actionButton.length > 0) {
                    actionButton.addClass('selected');
                }
            }
            totalVotes = voteUpCount + voteDownCount;
            parent.data('vote-down', voteDownCount);
            parent.data('vote-up', voteUpCount);
            text = voteUpCount > 0 ? Math.round(voteUpCount / totalVotes * 100) + "% success " + "<span class='voteCount'>(" + totalVotes + (totalVotes > 1 ? " votes)": "vote)") + (saveCount > 0 || commentCount > 0 ? " - ": "") : '';
            parent.find('.voteInfo').html(text);
            if (listedCoupon != undefined) {
                listedCoupon.data('vote-down', voteDownCount);
                listedCoupon.find('.voteInfo').html(text);
            }
            var targetBox = parent.find('.arrow_box.voteDownCoupon');
            if (targetBox.hasClass('active')) {
                targetBox.removeClass('active').slideUp();
            } else if ($(this).hasClass('selected')) {
                parent.children('.arrow_box.active').hide().removeClass('active');
                targetBox.slideDown().addClass('active');
            }
            $.ajax({
                url: "/Coupon/vote",
                type: "POST",
                data: {
                    couponId: couponId,
                    vote: vote
                }
            })
        },
        saveCoupon: function() {
            if (!window.isLoggedIn) {
                new LoginDialog('You need to be logged in to save this coupon');
                this.blur();
                return false;
            }
            var parent = $(this).closest('.singleCouponContainer');
            var couponId = parent.attr('data-coupon-id');
            var saveCount = parent.data('total-save');
            var commentCount = parent.data('total-comment');
            var text;
            if (parent.hasClass('popUpCoupon')) {
                var listedCoupon = $('div.coupons').find('div.singleCouponContainer.coupon' + couponId + ':not(.popUpCoupon)');
                var actionButton = listedCoupon.find('.saveCouponButton');
            }
            var save = 1;
            if ($(this).hasClass('saved')) {
                $(this).removeClass('saved');
                if (actionButton != undefined && actionButton.length > 0) {
                    actionButton.removeClass('saved');
                }
                save = 0;
                saveCount--;
            } else {
                $(this).addClass('saved');
                if (actionButton != undefined && actionButton.length > 0) {
                    actionButton.addClass('saved');
                }
                saveCount++;
            }
            parent.data('total-save', saveCount);
            text = saveCount > 0 ? saveCount + (saveCount > 1 ? " saves": " save") + (commentCount > 0 ? " - ": "") : '';
            if (!parent.find('.saveInfo').html().trim()) {
                if (parent.find('.voteInfo').html().trim()) {
                    text = " - " + text;
                }
            }
            parent.find('.saveInfo').html(text);
            if (listedCoupon != undefined) {
                listedCoupon.data('total-save', saveCount);
                listedCoupon.find('.saveInfo').html(text);
            }
            $.ajax({
                url: "/Coupon/saveCoupon",
                type: "POST",
                data: {
                    couponId: couponId,
                    save: save
                },
                success: function(res) {}
            })
        },
        couponComment: function() {
            var parent = $(this).closest('.singleCouponContainer');
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
            } else {
                parent.find('div.couponDetail div.iconSection span span.active').removeClass('active');
                $(this).addClass('active');
            }
            var targetBox = parent.find('.arrow_box.commentsContainer');
            if (targetBox.hasClass('active')) {
                targetBox.removeClass('active').slideUp();
            } else {
                parent.children('.arrow_box.active').hide().removeClass('active');
                targetBox.slideDown().addClass('active');
            }
        },
        shareCoupon: function() {
            var parent = $(this).closest('.singleCouponContainer');
            var couponURI = parent.data('coupon-uri');
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
            } else {
                parent.find('div.couponDetail div.iconSection span span.active').removeClass('active');
                $(this).addClass('active');
            }
            var targetBox = parent.find('.arrow_box.shareCoupon');
            if (targetBox.hasClass('active')) {
                targetBox.removeClass('active').slideUp();
            } else {
                parent.children('.arrow_box.active').hide().removeClass('active');
                targetBox.slideDown().addClass('active');
            }
            parent.find('div.shareCoupon a.facebookCouponShare').click(function() {
                FB.ui({
                        display: 'popup',
                        method: 'feed',
                        link: couponURI
                    },
                    function(response) {});
            });
            FB.api("/", {
                    "id": couponURI
                },
                function(response) {
                    if (response && !response.error) {
                        if (response.share.share_count > 0) {
                            parent.find("a.facebookCouponShare span.shareCount").html(response.share.share_count);
                        }
                    }
                });
            $.ajax({
                type: 'GET',
                url: 'https://cdn.api.twitter.com/1/urls/count.json',
                data: {
                    url: couponURI
                },
                dataType: 'jsonp'
            }).done(function(response) {
                if (response.count > 0) {
                    parent.find("a.twitterCouponShare span.shareCount").html(response.count);
                }
            });
            $.ajax({
                type: 'GET',
                url: 'https://api.pinterest.com/v1/urls/count.json',
                data: {
                    url: couponURI
                },
                dataType: 'jsonp'
            }).done(function(response) {
                if (response.count > 0) {
                    parent.find("a.pinterestCouponShare span.shareCount").html(response.count);
                }
            });
        },
        viewAllComments: function() {
            var couponId = $(this).attr('data-value');
            var $comments = $(this).parents('.comments');
            $comments.text('Fetching comments...');
            $.get('/Coupon/getAllComments', {
                    couponId: couponId,
                    limit: 100
                },
                function(res) {
                    if (!res.error && res.html) {
                        $comments.html(res.html);
                    } else {
                        $comments.text('Failed to load comments');
                    }
                });
        },
        commentFormOptions: {
            delegation: true,
            clearForm: true,
            beforeSubmit: function(formData, $form) {
                $form.find('.postCommentButton').trigger('blur');
                if ($form.data('submitting')) {
                    return false;
                }
                $form.data('submitting', true);
                return true;
            },
            success: function(response, status, xhr, $form) {
                $form.removeData('submitting');
                if (!response.error && response.html) {
                    if ($form.closest('div.arrow_box.commentsContainer').length) {
                        var comments = $form.parent().next('.comments');
                        comments.find('.commentsList').prepend(response.html);
                        comments.show();
                    } else {
                        $form.closest('div.arrow_box').slideUp().removeClass('active');
                    }
                    var parent = $form.closest('.singleCouponContainer');
                    var couponId = parent.attr('data-coupon-id');
                    var commentCount = parent.data('total-comment');
                    var text;
                    if (parent.hasClass('popUpCoupon')) {
                        var listedCoupon = $('div.coupons').find('div.singleCouponContainer.coupon' + couponId + ':not(.popUpCoupon)');
                    }
                    commentCount++;
                    parent.data('total-comment', commentCount);
                    text = commentCount > 0 ? commentCount + (commentCount > 1 ? " comments": " comment") : '';
                    if (!parent.find('.commentInfo').html().trim()) {
                        if (parent.find('.saveInfo').html().trim() || parent.find('.voteInfo').html().trim()) {
                            text = " - " + text;
                        }
                    }
                    parent.find('.commentInfo').html(text);
                    if (listedCoupon != undefined) {
                        listedCoupon.data('total-comment', commentCount);
                        listedCoupon.find('.commentInfo').html(text);
                    }
                }
            }
        }
    });
    self.init();
}
$(document).ready(function() {
    new CouponRow();
});
function ExpandMenu() {
    var self = this;
    $.extend(self, {
        init: function() {
            self.registerEvents();
        },
        registerEvents: function() {
            $('body').on('click', '.expandMenuBar a', self.toggleMenu);
        },
        toggleMenu: function(e) {
            var parentLiWrapper = $(this).parent('li');
            if (parentLiWrapper.hasClass('active') && !parentLiWrapper.hasClass('enabled')) {
                if ($(window).width() <= 770) {
                    e.preventDefault();
                    if (parentLiWrapper.hasClass('canReturn')) {
                        parentLiWrapper.addClass("enabled");
                    }
                } else {
                    if (!parentLiWrapper.hasClass('canReturn')) {
                        e.preventDefault();
                    }
                }
            }
            var menuBar = $(this).closest('.expandMenuBar');
            if ($('.openMenuItem').length > 0) {
                $('.openMenuItem').removeClass('openMenuItem');
            } else {
                $(menuBar).find('li:hidden').addClass('openMenuItem');
            }
        }
    });
    self.init();
}
$(document).ready(function() {
    var expandMenu = new ExpandMenu();
});