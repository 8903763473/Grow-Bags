var mn = Object.defineProperty,
    yn = Object.defineProperties,
    gn = Object.getOwnPropertyDescriptors,
    xt = Object.getOwnPropertySymbols,
    bn = Object.prototype.hasOwnProperty,
    vn = Object.prototype.propertyIsEnumerable,
    Dt = (t, e) => {
        if (e = Symbol[t]) return e;
        throw Error("Symbol." + t + " is not defined")
    },
    rt = (t, e, n) => e in t ? mn(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : t[e] = n,
    _ = (t, e) => {
        for (var n in e || (e = {})) bn.call(e, n) && rt(t, n, e[n]);
        if (xt)
            for (var n of xt(e)) vn.call(e, n) && rt(t, n, e[n]);
        return t
    },
    x = (t, e) => yn(t, gn(e)),
    w = (t, e, n) => (rt(t, typeof e != "symbol" ? e + "" : e, n), n),
    nt = (t, e, n) => {
        if (!e.has(t)) throw TypeError("Cannot " + n)
    },
    q = (t, e, n) => (nt(t, e, "read from private field"), n ? n.call(t) : e.get(t)),
    Y = (t, e, n) => {
        if (e.has(t)) throw TypeError("Cannot add the same private member more than once");
        e instanceof WeakSet ? e.add(t) : e.set(t, n)
    },
    kt = (t, e, n, r) => (nt(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n),
    Ne = (t, e, n) => (nt(t, e, "access private method"), n),
    B = function(t, e) {
        this[0] = t, this[1] = e
    },
    Z = (t, e, n) => {
        var r = (i, s, c, l) => {
                try {
                    var h = n[i](s),
                        m = (s = h.value) instanceof B,
                        b = h.done;
                    Promise.resolve(m ? s[0] : s).then(p => m ? r(i === "return" ? i : "next", s[1] ? {
                        done: p.done,
                        value: p.value
                    } : p, c, l) : c({
                        value: p,
                        done: b
                    })).catch(p => r("throw", p, c, l))
                } catch (p) {
                    l(p)
                }
            },
            o = i => a[i] = s => new Promise((c, l) => r(i, s, c, l)),
            a = {};
        return n = n.apply(t, e), a[Symbol.asyncIterator] = () => a, o("next"), o("throw"), o("return"), a
    },
    ae = (t, e, n) => (e = t[Dt("asyncIterator")]) ? e.call(t) : (t = t[Dt("iterator")](), e = {}, n = (r, o) => (o = t[r]) && (e[r] = a => new Promise((i, s, c) => (a = o.call(t, a), c = a.done, Promise.resolve(a.value).then(l => i({
        value: l,
        done: c
    }), s)))), n("next"), n("return"), e),
    hr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function wn(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}

function _n(t) {
    if (t.__esModule) return t;
    var e = t.default;
    if (typeof e == "function") {
        var n = function r() {
            return this instanceof r ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments)
        };
        n.prototype = e.prototype
    } else n = {};
    return Object.defineProperty(n, "__esModule", {
        value: !0
    }), Object.keys(t).forEach(function(r) {
        var o = Object.getOwnPropertyDescriptor(t, r);
        Object.defineProperty(n, r, o.get ? o : {
            enumerable: !0,
            get: function() {
                return t[r]
            }
        })
    }), n
}
var mr = {
        exports: {}
    },
    at = {
        exports: {}
    },
    Bt;

function En() {
    return Bt || (Bt = 1, function(t, e) {
        (function(n, r) {
            t.exports = r()
        })(hr, function() {
            function n(u) {
                return !isNaN(parseFloat(u)) && isFinite(u)
            }

            function r(u) {
                return u.charAt(0).toUpperCase() + u.substring(1)
            }

            function o(u) {
                return function() {
                    return this[u]
                }
            }
            var a = ["isConstructor", "isEval", "isNative", "isToplevel"],
                i = ["columnNumber", "lineNumber"],
                s = ["fileName", "functionName", "source"],
                c = ["args"],
                l = ["evalOrigin"],
                h = a.concat(i, s, c, l);

            function m(u) {
                if (u)
                    for (var d = 0; d < h.length; d++) u[h[d]] !== void 0 && this["set" + r(h[d])](u[h[d]])
            }
            m.prototype = {
                getArgs: function() {
                    return this.args
                },
                setArgs: function(u) {
                    if (Object.prototype.toString.call(u) !== "[object Array]") throw new TypeError("Args must be an Array");
                    this.args = u
                },
                getEvalOrigin: function() {
                    return this.evalOrigin
                },
                setEvalOrigin: function(u) {
                    if (u instanceof m) this.evalOrigin = u;
                    else if (u instanceof Object) this.evalOrigin = new m(u);
                    else throw new TypeError("Eval Origin must be an Object or StackFrame")
                },
                toString: function() {
                    var u = this.getFileName() || "",
                        d = this.getLineNumber() || "",
                        f = this.getColumnNumber() || "",
                        y = this.getFunctionName() || "";
                    return this.getIsEval() ? u ? "[eval] (" + u + ":" + d + ":" + f + ")" : "[eval]:" + d + ":" + f : y ? y + " (" + u + ":" + d + ":" + f + ")" : u + ":" + d + ":" + f
                }
            }, m.fromString = function(u) {
                var d = u.indexOf("("),
                    f = u.lastIndexOf(")"),
                    y = u.substring(0, d),
                    v = u.substring(d + 1, f).split(","),
                    P = u.substring(f + 1);
                if (P.indexOf("@") === 0) var E = /@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(P, ""),
                    O = E[1],
                    k = E[2],
                    R = E[3];
                return new m({
                    functionName: y,
                    args: v || void 0,
                    fileName: O,
                    lineNumber: k || void 0,
                    columnNumber: R || void 0
                })
            };
            for (var b = 0; b < a.length; b++) m.prototype["get" + r(a[b])] = o(a[b]), m.prototype["set" + r(a[b])] = function(u) {
                return function(d) {
                    this[u] = !!d
                }
            }(a[b]);
            for (var p = 0; p < i.length; p++) m.prototype["get" + r(i[p])] = o(i[p]), m.prototype["set" + r(i[p])] = function(u) {
                return function(d) {
                    if (!n(d)) throw new TypeError(u + " must be a Number");
                    this[u] = Number(d)
                }
            }(i[p]);
            for (var g = 0; g < s.length; g++) m.prototype["get" + r(s[g])] = o(s[g]), m.prototype["set" + r(s[g])] = function(u) {
                return function(d) {
                    this[u] = String(d)
                }
            }(s[g]);
            return m
        })
    }(at)), at.exports
}(function(t, e) {
    (function(n, r) {
        t.exports = r(En())
    })(hr, function(n) {
        var r = /(^|@)\S+:\d+/,
            o = /^\s*at .*(\S+:\d+|\(native\))/m,
            a = /^(eval@)?(\[native code])?$/;
        return {
            parse: function(i) {
                if (typeof i.stacktrace < "u" || typeof i["opera#sourceloc"] < "u") return this.parseOpera(i);
                if (i.stack && i.stack.match(o)) return this.parseV8OrIE(i);
                if (i.stack) return this.parseFFOrSafari(i);
                throw new Error("Cannot parse given Error object")
            },
            extractLocation: function(i) {
                if (i.indexOf(":") === -1) return [i];
                var s = /(.+?)(?::(\d+))?(?::(\d+))?$/,
                    c = s.exec(i.replace(/[()]/g, ""));
                return [c[1], c[2] || void 0, c[3] || void 0]
            },
            parseV8OrIE: function(i) {
                var s = i.stack.split("\n").filter(function(c) {
                    return !!c.match(o)
                }, this);
                return s.map(function(c) {
                    c.indexOf("(eval ") > -1 && (c = c.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(,.*$)/g, ""));
                    var l = c.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/^.*?\s+/, ""),
                        h = l.match(/ (\(.+\)$)/);
                    l = h ? l.replace(h[0], "") : l;
                    var m = this.extractLocation(h ? h[1] : l),
                        b = h && l || void 0,
                        p = ["eval", "<anonymous>"].indexOf(m[0]) > -1 ? void 0 : m[0];
                    return new n({
                        functionName: b,
                        fileName: p,
                        lineNumber: m[1],
                        columnNumber: m[2],
                        source: c
                    })
                }, this)
            },
            parseFFOrSafari: function(i) {
                var s = i.stack.split("\n").filter(function(c) {
                    return !c.match(a)
                }, this);
                return s.map(function(c) {
                    if (c.indexOf(" > eval") > -1 && (c = c.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")), c.indexOf("@") === -1 && c.indexOf(":") === -1) return new n({
                        functionName: c
                    });
                    var l = /((.*".+"[^@]*)?[^@]*)(?:@)/,
                        h = c.match(l),
                        m = h && h[1] ? h[1] : void 0,
                        b = this.extractLocation(c.replace(l, ""));
                    return new n({
                        functionName: m,
                        fileName: b[0],
                        lineNumber: b[1],
                        columnNumber: b[2],
                        source: c
                    })
                }, this)
            },
            parseOpera: function(i) {
                return !i.stacktrace || i.message.indexOf("\n") > -1 && i.message.split("\n").length > i.stacktrace.split("\n").length ? this.parseOpera9(i) : i.stack ? this.parseOpera11(i) : this.parseOpera10(i)
            },
            parseOpera9: function(i) {
                for (var s = /Line (\d+).*script (?:in )?(\S+)/i, c = i.message.split("\n"), l = [], h = 2, m = c.length; h < m; h += 2) {
                    var b = s.exec(c[h]);
                    b && l.push(new n({
                        fileName: b[2],
                        lineNumber: b[1],
                        source: c[h]
                    }))
                }
                return l
            },
            parseOpera10: function(i) {
                for (var s = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i, c = i.stacktrace.split("\n"), l = [], h = 0, m = c.length; h < m; h += 2) {
                    var b = s.exec(c[h]);
                    b && l.push(new n({
                        functionName: b[3] || void 0,
                        fileName: b[2],
                        lineNumber: b[1],
                        source: c[h]
                    }))
                }
                return l
            },
            parseOpera11: function(i) {
                var s = i.stack.split("\n").filter(function(c) {
                    return !!c.match(r) && !c.match(/^Error created at/)
                }, this);
                return s.map(function(c) {
                    var l = c.split("@"),
                        h = this.extractLocation(l.pop()),
                        m = l.shift() || "",
                        b = m.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^)]*\)/g, "") || void 0,
                        p;
                    m.match(/\(([^)]*)\)/) && (p = m.replace(/^[^(]+\(([^)]*)\)$/, "$1"));
                    var g = p === void 0 || p === "[arguments not available]" ? void 0 : p.split(",");
                    return new n({
                        functionName: b,
                        args: g,
                        fileName: h[0],
                        lineNumber: h[1],
                        columnNumber: h[2],
                        source: c
                    })
                }, this)
            }
        }
    })
})(mr);
var Sn = mr.exports;
const Pn = wn(Sn);
var Lt = "5",
    On = ["Load failed", "Failed to fetch", "when attempting to fetch resource"],
    Tn = ["Chrome-Lighthouse"],
    An = "_shopify_y";

function Mn(t) {
    try {
        let e = new RegExp("(".concat(t, ")=([^;]+)")).exec(document.cookie);
        return e ? e[2] : null
    } catch (e) {
        return null
    }
}

function In(t, e) {
    return !!(e != null && e.includes(t))
}

function Nn() {
    let t = navigator.userAgent;
    return Tn.some(e => t.includes(e))
}

function Ut(t, e) {
    try {
        return Pn.parse(e).map(n => {
            var r, o, a;
            return {
                method: (r = n.functionName) != null ? r : "",
                file: (o = n.fileName) != null ? o : "",
                lineNumber: (a = n.lineNumber) != null ? a : 0,
                columnNumber: n.columnNumber,
                inProject: In(t, n.fileName)
            }
        })
    } catch (n) {
        return []
    }
}

function Rn(t, e, n) {
    return Nn() || e === "OTLPExporterError" && (n === "Request Timeout" || n === "Failed to export with XHR (status: 0)") || On.some(r => {
        var o;
        return (o = n == null ? void 0 : n.includes(r)) != null ? o : !1
    }) || t.some(r => {
        var o;
        return (o = r.file) == null ? void 0 : o.includes("spin.dev")
    }) ? !1 : t.some(r => !!(r != null && r.inProject))
}
var xn = class {
        constructor(t) {
            w(this, "apiKey"), w(this, "appId"), w(this, "appVersion"), w(this, "releaseStage"), w(this, "startTime"), w(this, "breadcrumbs", []), w(this, "userAgent"), w(this, "metadata"), this.apiKey = t.apiKey, this.appId = t.appId, this.appVersion = t.appVersion, this.startTime = new Date, this.releaseStage = t.releaseStage, this.initWindowErrorHandler(), this.leaveBreadcrumb("Bugsnag started", "state"), this.userAgent = t.userAgent, this.metadata = t.metadata
        }
        leaveBreadcrumb(t, e, n) {
            this.breadcrumbs.push({
                name: t,
                metaData: n,
                type: e,
                timestamp: new Date().toISOString()
            })
        }
        notify(t, {
            severity: e = "error",
            type: n = "handledException",
            handled: r = !0,
            metadata: o = {}
        } = {}) {
            var a;
            let i = e,
                s = Ut(this.appId, t),
                c = x(_(_({}, this.metadata), o), {
                    app: x(_({}, o.app), {
                        bundleType: document.currentScript ? "iife" : "es"
                    })
                });
            if (s.length > 0 && (a = s[0]) != null && a.inProject || (i = "warning"), this.releaseStage === "development") {
                this.logToConsole({
                    error: t,
                    type: n,
                    handled: r,
                    severity: i,
                    metadata: c
                });
                return
            }
            Rn(s, t.name, t.message) && this.sendToBugsnag({
                error: t,
                type: n,
                handled: r,
                severity: i,
                metadata: c
            })
        }
        initWindowErrorHandler() {
            let t = window.onerror;
            window.onerror = (e, n, r, o, a) => {
                a && this.notify(a, {
                    type: "unhandledException",
                    handled: !1
                }), typeof t == "function" && t.apply(this, [e, n, r, o, a])
            }, window.addEventListener("unhandledrejection", ({
                reason: e
            }) => {
                e && this.notify(e, {
                    type: "unhandledPromiseRejection",
                    handled: !1
                })
            })
        }
        logToConsole({
            error: t,
            severity: e,
            type: n,
            handled: r,
            metadata: o
        }) {
            let a = e === "warning" ? "warn" : "error";
            console[a]("[bugsnag-light][".concat(this.appId, "] event logged"), {
                severity: e,
                type: n,
                handled: r,
                metadata: o,
                breadcrumbs: this.breadcrumbs
            }), console[a](t)
        }
        sendToBugsnag({
            error: t,
            severity: e,
            type: n,
            handled: r,
            metadata: o
        }) {
            var a, i;
            let s = new Date,
                c = s.toISOString(),
                {
                    breadcrumbs: l,
                    appId: h,
                    apiKey: m,
                    appVersion: b,
                    releaseStage: p,
                    userAgent: g
                } = this,
                u = new XMLHttpRequest;
            u.open("POST", "https://notify.bugsnag.com/"), u.setRequestHeader("Content-Type", "application/json"), u.setRequestHeader("Bugsnag-Api-Key", m), u.setRequestHeader("Bugsnag-Payload-Version", Lt), u.setRequestHeader("Bugsnag-Sent-At", c);
            let d = {
                apiKey: m,
                notifier: {
                    name: "Bugsnag JavaScript",
                    version: "7.22.2",
                    url: "https://github.com/bugsnag/bugsnag-js"
                },
                events: [{
                    payloadVersion: Lt,
                    exceptions: [{
                        errorClass: t.name,
                        type: "browserjs",
                        stacktrace: Ut(h, t),
                        message: t.message
                    }],
                    severity: e,
                    severityReason: {
                        type: n
                    },
                    unhandled: !r,
                    app: {
                        id: h,
                        version: b,
                        releaseStage: p,
                        type: "browser",
                        duration: this.startTime.getTime() - s.getTime()
                    },
                    device: {
                        locale: navigator.language,
                        time: c,
                        orientation: (i = (a = window.screen) == null ? void 0 : a.orientation) == null ? void 0 : i.type,
                        userAgent: g
                    },
                    request: {
                        url: window.location.href
                    },
                    breadcrumbs: l,
                    context: window.location.pathname,
                    metaData: o,
                    user: {
                        id: Mn(An)
                    }
                }]
            };
            u.send(JSON.stringify(d))
        }
    },
    Q, Dn = {
        start: t => {
            if (Q) {
                console.warn("Bugsnag.start() has already been called. Ignoring.");
                return
            }
            Q = new xn(t)
        },
        leaveBreadcrumb: (t, e, n) => {
            if (!Q) {
                console.warn("Bugsnag.leaveBreadcrumb() called before start().");
                return
            }
            Q.leaveBreadcrumb(t, e, n)
        },
        notify: (t, {
            severity: e = "error",
            type: n = "handledException",
            handled: r = !0,
            metadata: o = {}
        } = {}) => {
            if (!Q) {
                console.error("Bugsnag.notify() called before start().", t);
                return
            }
            Q.notify(t, {
                severity: e,
                type: n,
                handled: r,
                metadata: o
            })
        }
    },
    S = Dn;
const kn = ":host{display:flex;align-items:center;justify-content:center}\n";
class Bn extends HTMLElement {
    constructor() {
        var e, n;
        super(), w(this, "size"), w(this, "color"), this.size = (e = this.getAttribute("size")) != null ? e : "1.5rem", this.color = (n = this.getAttribute("color")) != null ? n : "gray", this.attachShadow({
            mode: "open"
        })
    }
    connectedCallback() {
        this.render();
        const e = document.createElement("style");
        e.textContent = kn, this.shadowRoot.appendChild(e)
    }
    render() {
        const e = this.shadowRoot,
            n = '\n      width="'.concat(this.size, '"\n      height="').concat(this.size, '"\n      xmlns="http://www.w3.org/2000/svg"\n      aria-hidden="true"\n    ');
        switch (this.getAttribute("name")) {
            case "warning":
                e.innerHTML = "\n          <svg ".concat(n, ' viewBox="0 0 16 14" fill="').concat(this.color, '">\n            <path d="M5.925 2.344c1.146-1.889 3.002-1.893 4.149 0l4.994 8.235c1.146 1.889.288 3.421-1.916 3.421h-10.305c-2.204 0-3.063-1.529-1.916-3.421l4.994-8.235zm1.075 1.656v5h2v-5h-2zm0 6v2h2v-2h-2z"/>\n          </svg>\n        ');
                break;
            case "close":
                e.innerHTML = "\n          <svg ".concat(n, ' viewBox="0 0 20 20" fill="').concat(this.color, '">\n            <path d="M17.1 4.3l-1.4-1.4-5.7 5.7-5.7-5.7-1.4 1.4 5.7 5.7-5.7 5.7 1.4 1.4 5.7-5.7 5.7 5.7 1.4-1.4-5.7-5.7z"/>\n          </svg>\n        ');
                break;
            default:
                e.innerHTML = "";
                break
        }
    }
}
const Ln = "#overlay{position:fixed;width:100%;height:100%;background:rgba(0,0,0,.4);top:0;left:0;z-index:2147483647;animation:modalPop .3s ease-out}#modal{position:fixed;top:1em;left:50%;width:100%;max-width:460px;transform:translate(-50%,-100%);background:#fff;border:1px solid #d0d0d0;border-radius:4px;animation:modalSlideInFromTop .3s forwards}@keyframes modalPop{0%{opacity:0}to{opacity:1}}@keyframes modalSlideInFromTop{0%{transform:translate(-50%,-100%)}to{transform:translate(-50%)}}@keyframes modalSlideInFromBottom{0%{transform:translate(-50%,100%)}to{transform:translate(-50%)}}@media only screen and (max-width: 640px){#modal{top:auto;bottom:0;animation:modalSlideInFromBottom .3s forwards}}#modal header,#modal footer{padding:1em}#modal header{display:flex;margin-bottom:2em;text-align:center;border-bottom:1px solid #d0d0d0}#title{flex-grow:2;display:flex;justify-content:center}#title svg-icon{margin-right:.25em}#content{text-align:left;padding:0 1em}#modal #content p{margin:0}#close-icon,#close-button{cursor:pointer}#close-icon{background:transparent;padding:0;border:none}#close-button{width:100%;padding:1em;color:#fff;background-color:#1773b0;border:none;border-radius:4px}#close-button:hover,#close-button:active{background:#136f99}#close-button:active,#close-button:focus{box-shadow:0 0 0 4px #1990c640}\n";
var yr = {
    en: {
        instruments_copy: {
            checkout: {
                buy_now: "Buy it now"
            }
        },
        error_dialogs: {
            checkout: {
                title: "Checkout unavailable",
                generic_error: "Checkout is currently unavailable due to technical problems. Please try again in a few minutes.",
                button_text: "Close"
            },
            wallet: {
                title: "%{wallet} unavailable",
                generic_error: "There was an issue with %{wallet}. Try again or use a different payment method."
            }
        },
        more_payment_options: "More payment options",
        order_summary: {
            total: "Total",
            subtotal: "Subtotal",
            duties: "Duties",
            taxes: "Taxes",
            shipping: "Shipping",
            discount: "Discount"
        },
        brand: {
            apple_pay: "Apple Pay"
        }
    }
};
yr.en;
async function gt() {
    return new ut(yr)
}
class $t extends Error {
    constructor(e, n) {
        const r = "i18n: Missing or invalid translation '".concat(e, "' in '").concat(n, "'");
        super(r)
    }
}
class Un extends Error {
    constructor(e, n, r) {
        const o = "i18n: Missing translation template key '".concat(e, "' for '").concat(n, "' in '").concat(r, "'");
        super(o)
    }
}
class $n extends Error {
    constructor(e, n, r) {
        const o = "i18n: Invalid pluralization for '".concat(e, "':'").concat(n, "' in '").concat(r, "'");
        super(o)
    }
}
var Pe, j, je, gr, qe, br, Fe, vr;
const Tt = class Ie {
    constructor(e) {
        Y(this, je), Y(this, qe), Y(this, Fe), Y(this, Pe, void 0), Y(this, j, Ie.getDefaultLanguage()), kt(this, Pe, e)
    }
    static getDefaultLanguage() {
        return "en"
    }
    get locale() {
        return q(this, j)
    }
    translate(e, n = {}) {
        var r;
        const o = e.split(".");
        let a = q(this, Pe)[q(this, j)];
        try {
            for (const i of o) switch (typeof a) {
                case "object":
                    a = a[i];
                    break;
                case "string":
                case "undefined":
                    throw new $t(e, q(this, j))
            }
            if (Ne(this, je, gr).call(this, a, n)) {
                if (typeof a == "string") throw new $n(e, a, q(this, j));
                a = a[Ne(this, qe, br).call(this, a, n.count)]
            }
            if (typeof a != "string") throw new $t(e, q(this, j));
            return Ne(this, Fe, vr).call(this, a, n)
        } catch (i) {
            return S.notify(i), (r = n.defaultValue) != null ? r : e
        }
    }
};
Pe = new WeakMap, j = new WeakMap, je = new WeakSet, gr = function(t, e) {
    return typeof t != "string" && e.count !== "undefined"
}, qe = new WeakSet, br = function(t, e) {
    let n = e === 1 ? "one" : "other";
    return e === 0 && typeof t != "string" && t.zero !== "undefined" && (n = "zero"), n
}, Fe = new WeakSet, vr = function(t, e = {}) {
    const n = t.match(/%\{.+?\}/g);
    return n ? n.reduce((r, o) => {
        const a = o.replace(/%\{(.*)\}/, "$1");
        return e[a] ? r.replace(o, e[a]) : (S.notify(new Un(a, t, q(this, j))), r)
    }, t) : t
};
let ut = Tt;
var z = (t => (t.CartPage = "cart_page", t.CartAjax = "cart_ajax", t.ProductPage = "product", t.Unknown = "unknown", t))(z || {}),
    V = (t => (t.Af = "AF", t.Ax = "AX", t.Al = "AL", t.Dz = "DZ", t.Ad = "AD", t.Ao = "AO", t.Ai = "AI", t.Ag = "AG", t.Ar = "AR", t.Am = "AM", t.Aw = "AW", t.Ac = "AC", t.Au = "AU", t.At = "AT", t.Az = "AZ", t.Bs = "BS", t.Bh = "BH", t.Bd = "BD", t.Bb = "BB", t.By = "BY", t.Be = "BE", t.Bz = "BZ", t.Bj = "BJ", t.Bm = "BM", t.Bt = "BT", t.Bo = "BO", t.Ba = "BA", t.Bw = "BW", t.Bv = "BV", t.Br = "BR", t.Io = "IO", t.Bn = "BN", t.Bg = "BG", t.Bf = "BF", t.Bi = "BI", t.Kh = "KH", t.Ca = "CA", t.Cv = "CV", t.Bq = "BQ", t.Ky = "KY", t.Cf = "CF", t.Td = "TD", t.Cl = "CL", t.Cn = "CN", t.Cx = "CX", t.Cc = "CC", t.Co = "CO", t.Km = "KM", t.Cg = "CG", t.Cd = "CD", t.Ck = "CK", t.Cr = "CR", t.Hr = "HR", t.Cu = "CU", t.Cw = "CW", t.Cy = "CY", t.Cz = "CZ", t.Ci = "CI", t.Dk = "DK", t.Dj = "DJ", t.Dm = "DM", t.Do = "DO", t.Ec = "EC", t.Eg = "EG", t.Sv = "SV", t.Gq = "GQ", t.Er = "ER", t.Ee = "EE", t.Sz = "SZ", t.Et = "ET", t.Fk = "FK", t.Fo = "FO", t.Fj = "FJ", t.Fi = "FI", t.Fr = "FR", t.Gf = "GF", t.Pf = "PF", t.Tf = "TF", t.Ga = "GA", t.Gm = "GM", t.Ge = "GE", t.De = "DE", t.Gh = "GH", t.Gi = "GI", t.Gr = "GR", t.Gl = "GL", t.Gd = "GD", t.Gp = "GP", t.Gt = "GT", t.Gg = "GG", t.Gn = "GN", t.Gw = "GW", t.Gy = "GY", t.Ht = "HT", t.Hm = "HM", t.Va = "VA", t.Hn = "HN", t.Hk = "HK", t.Hu = "HU", t.Is = "IS", t.In = "IN", t.Id = "ID", t.Ir = "IR", t.Iq = "IQ", t.Ie = "IE", t.Im = "IM", t.Il = "IL", t.It = "IT", t.Jm = "JM", t.Jp = "JP", t.Je = "JE", t.Jo = "JO", t.Kz = "KZ", t.Ke = "KE", t.Ki = "KI", t.Kp = "KP", t.Xk = "XK", t.Kw = "KW", t.Kg = "KG", t.La = "LA", t.Lv = "LV", t.Lb = "LB", t.Ls = "LS", t.Lr = "LR", t.Ly = "LY", t.Li = "LI", t.Lt = "LT", t.Lu = "LU", t.Mo = "MO", t.Mg = "MG", t.Mw = "MW", t.My = "MY", t.Mv = "MV", t.Ml = "ML", t.Mt = "MT", t.Mq = "MQ", t.Mr = "MR", t.Mu = "MU", t.Yt = "YT", t.Mx = "MX", t.Md = "MD", t.Mc = "MC", t.Mn = "MN", t.Me = "ME", t.Ms = "MS", t.Ma = "MA", t.Mz = "MZ", t.Mm = "MM", t.Na = "NA", t.Nr = "NR", t.Np = "NP", t.Nl = "NL", t.An = "AN", t.Nc = "NC", t.Nz = "NZ", t.Ni = "NI", t.Ne = "NE", t.Ng = "NG", t.Nu = "NU", t.Nf = "NF", t.Mk = "MK", t.No = "NO", t.Om = "OM", t.Pk = "PK", t.Ps = "PS", t.Pa = "PA", t.Pg = "PG", t.Py = "PY", t.Pe = "PE", t.Ph = "PH", t.Pn = "PN", t.Pl = "PL", t.Pt = "PT", t.Qa = "QA", t.Cm = "CM", t.Re = "RE", t.Ro = "RO", t.Ru = "RU", t.Rw = "RW", t.Bl = "BL", t.Sh = "SH", t.Kn = "KN", t.Lc = "LC", t.Mf = "MF", t.Pm = "PM", t.Ws = "WS", t.Sm = "SM", t.St = "ST", t.Sa = "SA", t.Sn = "SN", t.Rs = "RS", t.Sc = "SC", t.Sl = "SL", t.Sg = "SG", t.Sx = "SX", t.Sk = "SK", t.Si = "SI", t.Sb = "SB", t.So = "SO", t.Za = "ZA", t.Gs = "GS", t.Kr = "KR", t.Ss = "SS", t.Es = "ES", t.Lk = "LK", t.Vc = "VC", t.Sd = "SD", t.Sr = "SR", t.Sj = "SJ", t.Se = "SE", t.Ch = "CH", t.Sy = "SY", t.Tw = "TW", t.Tj = "TJ", t.Tz = "TZ", t.Th = "TH", t.Tl = "TL", t.Tg = "TG", t.Tk = "TK", t.To = "TO", t.Tt = "TT", t.Ta = "TA", t.Tn = "TN", t.Tr = "TR", t.Tm = "TM", t.Tc = "TC", t.Tv = "TV", t.Ug = "UG", t.Ua = "UA", t.Ae = "AE", t.Gb = "GB", t.Us = "US", t.Um = "UM", t.Uy = "UY", t.Uz = "UZ", t.Vu = "VU", t.Ve = "VE", t.Vn = "VN", t.Vg = "VG", t.Wf = "WF", t.Eh = "EH", t.Ye = "YE", t.Zm = "ZM", t.Zw = "ZW", t.Zz = "ZZ", t))(V || {});
const Ee = [];

function X(t, e, n) {
    window.customElements != null && (window.customElements.get(t) || (window.customElements.define(t, e), n != null && n.shouldAddToWindow && Ee.push(t)))
}

function wr() {
    var t, e;
    const n = new URLSearchParams(window.location.search);
    return ((e = (t = n.get("shopify-debug")) != null ? t : n.get("shopifydebug")) != null ? e : "") !== ""
}

function jn() {
    return new URLSearchParams(window.location.search).get("show") || null
}

function qn() {
    var t;
    const e = (t = window.Shopify) == null ? void 0 : t.CartType;
    let n = z.ProductPage;
    return window.Shopify ? e === z.CartAjax ? n = z.CartAjax : e === z.CartPage && (n = z.CartPage) : n = z.Unknown, n
}

function lt(t) {
    return Number(t).toFixed(2)
}
class Fn extends HTMLElement {
    constructor() {
        super(), w(this, "overflow"), this.attachShadow({
            mode: "open"
        }), this.overflow = ""
    }
    async connectedCallback() {
        const e = await gt();
        this.render(e);
        const n = this.shadowRoot,
            r = n.getElementById("modal");
        n.querySelectorAll("button").forEach(a => a.addEventListener("click", this.closeModal.bind(this))), n.getElementById("overlay").addEventListener("click", a => this.handleOutsideClick(a, r)), document.addEventListener("keydown", this.handleEscapeKey.bind(this));
        const o = document.createElement("style");
        o.textContent = Ln, n.appendChild(o), this.overflow = document.body.style.overflow, document.body.style.overflow = "hidden", this.trapFocus(r, n), X("svg-icon", Bn)
    }
    trapFocus(e, n) {
        const r = e.querySelectorAll("a[href], button"),
            o = Array.from(r),
            a = o[0],
            i = o[o.length - 1];
        e.addEventListener("keydown", s => {
            s.key === "Tab" && !s.shiftKey && n.activeElement === i && (s.preventDefault(), a.focus()), s.key === "Tab" && s.shiftKey && n.activeElement === a && (s.preventDefault(), i.focus())
        }), a.focus()
    }
    handleOutsideClick(e, n) {
        n.contains(e.target) || this.closeModal()
    }
    handleEscapeKey(e) {
        e.key === "Escape" && this.closeModal()
    }
    closeModal() {
        document.body.style.overflow = this.overflow, this.remove()
    }
    render(e) {
        const n = this.getAttribute("title"),
            r = e.translate("error_dialogs.checkout.button_text");
        this.shadowRoot.innerHTML = '\n      <div id="overlay">\n        <div id="modal">\n          <header>\n            <span id="title">\n              <svg-icon name="warning" color="red"></svg-icon>\n              '.concat(n, '\n            </span>\n            <button type="button" id="close-icon" aria-label=').concat(r, '>\n              <svg-icon name="close" color="gray"></svg-icon>\n            </button>\n          </header>\n          <div id="content">\n            <p><slot></slot></p>\n          </div>\n          <footer>\n            <button type="button" id="close-button">').concat(r, "</button>\n          </footer>\n        </div>\n      </div>\n    ")
    }
}

function bt(t) {
    const e = document.createElement("top-level-modal");
    e.setAttribute("data-testid", "top-level-modal"), e.setAttribute("title", t.translate("error_dialogs.checkout.title")), e.textContent = t.translate("error_dialogs.checkout.generic_error"), document.body.appendChild(e)
}
async function Hn(t, e) {
    const n = t.translate("brand.".concat(e));
    if (e === null || n.includes("brand")) {
        bt(t);
        return
    }
    const r = document.createElement("top-level-modal");
    r.setAttribute("data-testid", "top-level-modal"), r.setAttribute("title", t.translate("error_dialogs.wallet.title", {
        wallet: n
    })), r.textContent = t.translate("error_dialogs.wallet.generic_error", {
        wallet: n
    }), document.body.appendChild(r)
}
X("top-level-modal", Fn);
class _r extends HTMLElement {
    get buyerCountry() {
        return this.getAttribute("buyer-country")
    }
    get accessToken() {
        return this.getAttribute("access-token")
    }
    get disabled() {
        const e = this.getAttribute("disabled");
        return e === "true" || e === ""
    }
    set disabled(e) {
        e ? this.setAttribute("disabled", "true") : this.removeAttribute("disabled")
    }
}
class We extends _r {
    constructor() {
        super(), w(this, "onRendered"), w(this, "_dataSource"), w(this, "_apiClient"), w(this, "_i18n"), this.onRendered = () => {}
    }
    get dataSource() {
        return this._dataSource
    }
    set dataSource(e) {
        this._dataSource = e
    }
    get apiClient() {
        return this._apiClient
    }
    set apiClient(e) {
        this._apiClient = e
    }
    get i18n() {
        return this._i18n
    }
    set i18n(e) {
        this._i18n = e
    }
}
const vt = {
        BRANDED_BUTTON: "shopify-payment-button__button shopify-payment-button__button--branded",
        UNBRANDED_BUTTON: "shopify-payment-button__button shopify-payment-button__button--unbranded",
        MORE_PAYMENT_OPTION_BUTTON: "shopify-payment-button__more-options",
        HIDDEN: "shopify-payment-button__button--hidden"
    },
    Er = {
        apiKey: "cb577dc231be1c7494db8a63441ef66b",
        appId: "portable-wallets",
        appVersion: "0.0.0-ba1a689f9329354dbe6c5576eae0b2b4df99db01",
        releaseStage: "production",
        userAgent: navigator.userAgent
    };
var Se = {},
    Ve = {},
    dt = function(t, e) {
        return dt = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(n, r) {
            n.__proto__ = r
        } || function(n, r) {
            for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (n[o] = r[o])
        }, dt(t, e)
    };

function Sr(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
    dt(t, e);

    function n() {
        this.constructor = t
    }
    t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n)
}
var Be = function() {
    return Be = Object.assign || function(t) {
        for (var e, n = 1, r = arguments.length; n < r; n++) {
            e = arguments[n];
            for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
        }
        return t
    }, Be.apply(this, arguments)
};

function Pr(t, e) {
    var n = {};
    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(t); o < r.length; o++) e.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (n[r[o]] = t[r[o]]);
    return n
}

function Or(t, e, n, r) {
    var o = arguments.length,
        a = o < 3 ? e : r === null ? r = Object.getOwnPropertyDescriptor(e, n) : r,
        i;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(t, e, n, r);
    else
        for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(e, n, a) : i(e, n)) || a);
    return o > 3 && a && Object.defineProperty(e, n, a), a
}

function Tr(t, e) {
    return function(n, r) {
        e(n, r, t)
    }
}

function Gn(t, e, n, r, o, a) {
    function i(f) {
        if (f !== void 0 && typeof f != "function") throw new TypeError("Function expected");
        return f
    }
    for (var s = r.kind, c = s === "getter" ? "get" : s === "setter" ? "set" : "value", l = !e && t ? r.static ? t : t.prototype : null, h = e || (l ? Object.getOwnPropertyDescriptor(l, r.name) : {}), m, b = !1, p = n.length - 1; p >= 0; p--) {
        var g = {};
        for (var u in r) g[u] = u === "access" ? {} : r[u];
        for (var u in r.access) g.access[u] = r.access[u];
        g.addInitializer = function(f) {
            if (b) throw new TypeError("Cannot add initializers after decoration has completed");
            a.push(i(f || null))
        };
        var d = (0, n[p])(s === "accessor" ? {
            get: h.get,
            set: h.set
        } : h[c], g);
        if (s === "accessor") {
            if (d === void 0) continue;
            if (d === null || typeof d != "object") throw new TypeError("Object expected");
            (m = i(d.get)) && (h.get = m), (m = i(d.set)) && (h.set = m), (m = i(d.init)) && o.unshift(m)
        } else(m = i(d)) && (s === "field" ? o.unshift(m) : h[c] = m)
    }
    l && Object.defineProperty(l, r.name, h), b = !0
}

function Wn(t, e, n) {
    for (var r = arguments.length > 2, o = 0; o < e.length; o++) n = r ? e[o].call(t, n) : e[o].call(t);
    return r ? n : void 0
}

function Vn(t) {
    return typeof t == "symbol" ? t : "".concat(t)
}

function Kn(t, e, n) {
    return typeof e == "symbol" && (e = e.description ? "[".concat(e.description, "]") : ""), Object.defineProperty(t, "name", {
        configurable: !0,
        value: n ? "".concat(n, " ", e) : e
    })
}

function Ar(t, e) {
    if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(t, e)
}

function Mr(t, e, n, r) {
    function o(a) {
        return a instanceof n ? a : new n(function(i) {
            i(a)
        })
    }
    return new(n || (n = Promise))(function(a, i) {
        function s(h) {
            try {
                l(r.next(h))
            } catch (m) {
                i(m)
            }
        }

        function c(h) {
            try {
                l(r.throw(h))
            } catch (m) {
                i(m)
            }
        }

        function l(h) {
            h.done ? a(h.value) : o(h.value).then(s, c)
        }
        l((r = r.apply(t, e || [])).next())
    })
}

function Ir(t, e) {
    var n = {
            label: 0,
            sent: function() {
                if (a[0] & 1) throw a[1];
                return a[1]
            },
            trys: [],
            ops: []
        },
        r, o, a, i;
    return i = {
        next: s(0),
        throw: s(1),
        return: s(2)
    }, typeof Symbol == "function" && (i[Symbol.iterator] = function() {
        return this
    }), i;

    function s(l) {
        return function(h) {
            return c([l, h])
        }
    }

    function c(l) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; i && (i = 0, l[0] && (n = 0)), n;) try {
            if (r = 1, o && (a = l[0] & 2 ? o.return : l[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, l[1])).done) return a;
            switch (o = 0, a && (l = [l[0] & 2, a.value]), l[0]) {
                case 0:
                case 1:
                    a = l;
                    break;
                case 4:
                    return n.label++, {
                        value: l[1],
                        done: !1
                    };
                case 5:
                    n.label++, o = l[1], l = [0];
                    continue;
                case 7:
                    l = n.ops.pop(), n.trys.pop();
                    continue;
                default:
                    if (a = n.trys, !(a = a.length > 0 && a[a.length - 1]) && (l[0] === 6 || l[0] === 2)) {
                        n = 0;
                        continue
                    }
                    if (l[0] === 3 && (!a || l[1] > a[0] && l[1] < a[3])) {
                        n.label = l[1];
                        break
                    }
                    if (l[0] === 6 && n.label < a[1]) {
                        n.label = a[1], a = l;
                        break
                    }
                    if (a && n.label < a[2]) {
                        n.label = a[2], n.ops.push(l);
                        break
                    }
                    a[2] && n.ops.pop(), n.trys.pop();
                    continue
            }
            l = e.call(t, n)
        } catch (h) {
            l = [6, h], o = 0
        } finally {
            r = a = 0
        }
        if (l[0] & 5) throw l[1];
        return {
            value: l[0] ? l[1] : void 0,
            done: !0
        }
    }
}
var Ke = Object.create ? function(t, e, n, r) {
    r === void 0 && (r = n);
    var o = Object.getOwnPropertyDescriptor(e, n);
    (!o || ("get" in o ? !e.__esModule : o.writable || o.configurable)) && (o = {
        enumerable: !0,
        get: function() {
            return e[n]
        }
    }), Object.defineProperty(t, r, o)
} : function(t, e, n, r) {
    r === void 0 && (r = n), t[r] = e[n]
};

function Nr(t, e) {
    for (var n in t) n !== "default" && !Object.prototype.hasOwnProperty.call(e, n) && Ke(e, t, n)
}

function Le(t) {
    var e = typeof Symbol == "function" && Symbol.iterator,
        n = e && t[e],
        r = 0;
    if (n) return n.call(t);
    if (t && typeof t.length == "number") return {
        next: function() {
            return t && r >= t.length && (t = void 0), {
                value: t && t[r++],
                done: !t
            }
        }
    };
    throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
}

function wt(t, e) {
    var n = typeof Symbol == "function" && t[Symbol.iterator];
    if (!n) return t;
    var r = n.call(t),
        o, a = [],
        i;
    try {
        for (;
            (e === void 0 || e-- > 0) && !(o = r.next()).done;) a.push(o.value)
    } catch (s) {
        i = {
            error: s
        }
    } finally {
        try {
            o && !o.done && (n = r.return) && n.call(r)
        } finally {
            if (i) throw i.error
        }
    }
    return a
}

function Rr() {
    for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(wt(arguments[e]));
    return t
}

function xr() {
    for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
    for (var r = Array(t), o = 0, e = 0; e < n; e++)
        for (var a = arguments[e], i = 0, s = a.length; i < s; i++, o++) r[o] = a[i];
    return r
}

function Dr(t, e, n) {
    if (n || arguments.length === 2)
        for (var r = 0, o = e.length, a; r < o; r++)(a || !(r in e)) && (a || (a = Array.prototype.slice.call(e, 0, r)), a[r] = e[r]);
    return t.concat(a || Array.prototype.slice.call(e))
}

function re(t) {
    return this instanceof re ? (this.v = t, this) : new re(t)
}

function kr(t, e, n) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var r = n.apply(t, e || []),
        o, a = [];
    return o = {}, i("next"), i("throw"), i("return"), o[Symbol.asyncIterator] = function() {
        return this
    }, o;

    function i(b) {
        r[b] && (o[b] = function(p) {
            return new Promise(function(g, u) {
                a.push([b, p, g, u]) > 1 || s(b, p)
            })
        })
    }

    function s(b, p) {
        try {
            c(r[b](p))
        } catch (g) {
            m(a[0][3], g)
        }
    }

    function c(b) {
        b.value instanceof re ? Promise.resolve(b.value.v).then(l, h) : m(a[0][2], b)
    }

    function l(b) {
        s("next", b)
    }

    function h(b) {
        s("throw", b)
    }

    function m(b, p) {
        b(p), a.shift(), a.length && s(a[0][0], a[0][1])
    }
}

function Br(t) {
    var e, n;
    return e = {}, r("next"), r("throw", function(o) {
        throw o
    }), r("return"), e[Symbol.iterator] = function() {
        return this
    }, e;

    function r(o, a) {
        e[o] = t[o] ? function(i) {
            return (n = !n) ? {
                value: re(t[o](i)),
                done: !1
            } : a ? a(i) : i
        } : a
    }
}

function Lr(t) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var e = t[Symbol.asyncIterator],
        n;
    return e ? e.call(t) : (t = typeof Le == "function" ? Le(t) : t[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
        return this
    }, n);

    function r(a) {
        n[a] = t[a] && function(i) {
            return new Promise(function(s, c) {
                i = t[a](i), o(s, c, i.done, i.value)
            })
        }
    }

    function o(a, i, s, c) {
        Promise.resolve(c).then(function(l) {
            a({
                value: l,
                done: s
            })
        }, i)
    }
}

function Ur(t, e) {
    return Object.defineProperty ? Object.defineProperty(t, "raw", {
        value: e
    }) : t.raw = e, t
}
var zn = Object.create ? function(t, e) {
    Object.defineProperty(t, "default", {
        enumerable: !0,
        value: e
    })
} : function(t, e) {
    t.default = e
};

function $r(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (t != null)
        for (var n in t) n !== "default" && Object.prototype.hasOwnProperty.call(t, n) && Ke(e, t, n);
    return zn(e, t), e
}

function jr(t) {
    return t && t.__esModule ? t : {
        default: t
    }
}

function qr(t, e, n, r) {
    if (n === "a" && !r) throw new TypeError("Private accessor was defined without a getter");
    if (typeof e == "function" ? t !== e || !r : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return n === "m" ? r : n === "a" ? r.call(t) : r ? r.value : e.get(t)
}

function Fr(t, e, n, r, o) {
    if (r === "m") throw new TypeError("Private method is not writable");
    if (r === "a" && !o) throw new TypeError("Private accessor was defined without a setter");
    if (typeof e == "function" ? t !== e || !o : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return r === "a" ? o.call(t, n) : o ? o.value = n : e.set(t, n), n
}

function Hr(t, e) {
    if (e === null || typeof e != "object" && typeof e != "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof t == "function" ? e === t : t.has(e)
}

function Gr(t, e, n) {
    if (e != null) {
        if (typeof e != "object" && typeof e != "function") throw new TypeError("Object expected.");
        var r;
        if (n) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            r = e[Symbol.asyncDispose]
        }
        if (r === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            r = e[Symbol.dispose]
        }
        if (typeof r != "function") throw new TypeError("Object not disposable.");
        t.stack.push({
            value: e,
            dispose: r,
            async: n
        })
    } else n && t.stack.push({
        async: !0
    });
    return e
}
var Jn = typeof SuppressedError == "function" ? SuppressedError : function(t, e, n) {
    var r = new Error(n);
    return r.name = "SuppressedError", r.error = t, r.suppressed = e, r
};

function Wr(t) {
    function e(r) {
        t.error = t.hasError ? new Jn(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0
    }

    function n() {
        for (; t.stack.length;) {
            var r = t.stack.pop();
            try {
                var o = r.dispose && r.dispose.call(r.value);
                if (r.async) return Promise.resolve(o).then(n, function(a) {
                    return e(a), n()
                })
            } catch (a) {
                e(a)
            }
        }
        if (t.hasError) throw t.error
    }
    return n()
}
const Xn = {
        __extends: Sr,
        __assign: Be,
        __rest: Pr,
        __decorate: Or,
        __param: Tr,
        __metadata: Ar,
        __awaiter: Mr,
        __generator: Ir,
        __createBinding: Ke,
        __exportStar: Nr,
        __values: Le,
        __read: wt,
        __spread: Rr,
        __spreadArrays: xr,
        __spreadArray: Dr,
        __await: re,
        __asyncGenerator: kr,
        __asyncDelegator: Br,
        __asyncValues: Lr,
        __makeTemplateObject: Ur,
        __importStar: $r,
        __importDefault: jr,
        __classPrivateFieldGet: qr,
        __classPrivateFieldSet: Fr,
        __classPrivateFieldIn: Hr,
        __addDisposableResource: Gr,
        __disposeResources: Wr
    },
    Yn = Object.freeze(Object.defineProperty({
        __proto__: null,
        __addDisposableResource: Gr,
        get __assign() {
            return Be
        },
        __asyncDelegator: Br,
        __asyncGenerator: kr,
        __asyncValues: Lr,
        __await: re,
        __awaiter: Mr,
        __classPrivateFieldGet: qr,
        __classPrivateFieldIn: Hr,
        __classPrivateFieldSet: Fr,
        __createBinding: Ke,
        __decorate: Or,
        __disposeResources: Wr,
        __esDecorate: Gn,
        __exportStar: Nr,
        __extends: Sr,
        __generator: Ir,
        __importDefault: jr,
        __importStar: $r,
        __makeTemplateObject: Ur,
        __metadata: Ar,
        __param: Tr,
        __propKey: Vn,
        __read: wt,
        __rest: Pr,
        __runInitializers: Wn,
        __setFunctionName: Kn,
        __spread: Rr,
        __spreadArray: Dr,
        __spreadArrays: xr,
        __values: Le,
        default: Xn
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Oe = _n(Yn);
var M = {};
Object.defineProperty(M, "__esModule", {
    value: !0
}), M.extractDomain = M.PRODUCTION_CANADA_ENDPOINT = M.PRODUCE_ENDPOINT = M.PRODUCE_BATCH_ENDPOINT = M.PRODUCTION_DOMAIN = M.DEVELOPMENT_DOMAIN = void 0, M.DEVELOPMENT_DOMAIN = "http://localhost:8082", M.PRODUCTION_DOMAIN = "https://monorail-edge.shopifysvc.com", M.PRODUCE_BATCH_ENDPOINT = "/unstable/produce_batch", M.PRODUCE_ENDPOINT = "/v1/produce", M.PRODUCTION_CANADA_ENDPOINT = "https://monorail-edge-ca.shopifycloud.com/v1/produce";

function Zn(t) {
    return "https://".concat(new URL(t).hostname)
}
M.extractDomain = Zn;
var ze = {},
    Je = {};
Object.defineProperty(Je, "__esModule", {
    value: !0
}), Je.isCompositeMonorailEvent = void 0;

function Qn(t) {
    return t.schemaId !== void 0
}
Je.isCompositeMonorailEvent = Qn, Object.defineProperty(ze, "__esModule", {
    value: !0
}), ze.ProducerMiddleware = void 0;
var Cn = Je,
    ea = function() {
        function t(e) {
            this.producer = e
        }
        return t.prototype.do = function(e, n) {
            return (0, Cn.isCompositeMonorailEvent)(e) ? this.producer.produce(e) : this.producer.produceBatch(e)
        }, t
    }();
ze.ProducerMiddleware = ea;
var Te = {},
    ot = {},
    oe = {},
    Re = {},
    jt;

function Vr() {
    if (jt) return Re;
    jt = 1, Object.defineProperty(Re, "__esModule", {
        value: !0
    }), Re.default = n;
    let t;
    const e = new Uint8Array(16);

    function n() {
        if (!t && (t = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !t)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return t(e)
    }
    return Re
}
var C = {},
    ie = {},
    se = {},
    qt;

function ta() {
    if (qt) return se;
    qt = 1, Object.defineProperty(se, "__esModule", {
        value: !0
    }), se.default = void 0;
    var t = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
    return se.default = t, se
}
var Ft;

function Xe() {
    if (Ft) return ie;
    Ft = 1, Object.defineProperty(ie, "__esModule", {
        value: !0
    }), ie.default = void 0;
    var t = e(ta());

    function e(o) {
        return o && o.__esModule ? o : {
            default: o
        }
    }

    function n(o) {
        return typeof o == "string" && t.default.test(o)
    }
    var r = n;
    return ie.default = r, ie
}
var Ht;

function Ye() {
    if (Ht) return C;
    Ht = 1, Object.defineProperty(C, "__esModule", {
        value: !0
    }), C.default = void 0, C.unsafeStringify = r;
    var t = e(Xe());

    function e(i) {
        return i && i.__esModule ? i : {
            default: i
        }
    }
    const n = [];
    for (let i = 0; i < 256; ++i) n.push((i + 256).toString(16).slice(1));

    function r(i, s = 0) {
        return (n[i[s + 0]] + n[i[s + 1]] + n[i[s + 2]] + n[i[s + 3]] + "-" + n[i[s + 4]] + n[i[s + 5]] + "-" + n[i[s + 6]] + n[i[s + 7]] + "-" + n[i[s + 8]] + n[i[s + 9]] + "-" + n[i[s + 10]] + n[i[s + 11]] + n[i[s + 12]] + n[i[s + 13]] + n[i[s + 14]] + n[i[s + 15]]).toLowerCase()
    }

    function o(i, s = 0) {
        const c = r(i, s);
        if (!(0, t.default)(c)) throw TypeError("Stringified UUID is invalid");
        return c
    }
    var a = o;
    return C.default = a, C
}
var Gt;

function ra() {
    if (Gt) return oe;
    Gt = 1, Object.defineProperty(oe, "__esModule", {
        value: !0
    }), oe.default = void 0;
    var t = n(Vr()),
        e = Ye();

    function n(l) {
        return l && l.__esModule ? l : {
            default: l
        }
    }
    let r, o, a = 0,
        i = 0;

    function s(l, h, m) {
        let b = h && m || 0;
        const p = h || new Array(16);
        l = l || {};
        let g = l.node || r,
            u = l.clockseq !== void 0 ? l.clockseq : o;
        if (g == null || u == null) {
            const E = l.random || (l.rng || t.default)();
            g == null && (g = r = [E[0] | 1, E[1], E[2], E[3], E[4], E[5]]), u == null && (u = o = (E[6] << 8 | E[7]) & 16383)
        }
        let d = l.msecs !== void 0 ? l.msecs : Date.now(),
            f = l.nsecs !== void 0 ? l.nsecs : i + 1;
        const y = d - a + (f - i) / 1e4;
        if (y < 0 && l.clockseq === void 0 && (u = u + 1 & 16383), (y < 0 || d > a) && l.nsecs === void 0 && (f = 0), f >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        a = d, i = f, o = u, d += 122192928e5;
        const v = ((d & 268435455) * 1e4 + f) % 4294967296;
        p[b++] = v >>> 24 & 255, p[b++] = v >>> 16 & 255, p[b++] = v >>> 8 & 255, p[b++] = v & 255;
        const P = d / 4294967296 * 1e4 & 268435455;
        p[b++] = P >>> 8 & 255, p[b++] = P & 255, p[b++] = P >>> 24 & 15 | 16, p[b++] = P >>> 16 & 255, p[b++] = u >>> 8 | 128, p[b++] = u & 255;
        for (let E = 0; E < 6; ++E) p[b + E] = g[E];
        return h || (0, e.unsafeStringify)(p)
    }
    var c = s;
    return oe.default = c, oe
}
var ce = {},
    F = {},
    ue = {},
    Wt;

function Kr() {
    if (Wt) return ue;
    Wt = 1, Object.defineProperty(ue, "__esModule", {
        value: !0
    }), ue.default = void 0;
    var t = e(Xe());

    function e(o) {
        return o && o.__esModule ? o : {
            default: o
        }
    }

    function n(o) {
        if (!(0, t.default)(o)) throw TypeError("Invalid UUID");
        let a;
        const i = new Uint8Array(16);
        return i[0] = (a = parseInt(o.slice(0, 8), 16)) >>> 24, i[1] = a >>> 16 & 255, i[2] = a >>> 8 & 255, i[3] = a & 255, i[4] = (a = parseInt(o.slice(9, 13), 16)) >>> 8, i[5] = a & 255, i[6] = (a = parseInt(o.slice(14, 18), 16)) >>> 8, i[7] = a & 255, i[8] = (a = parseInt(o.slice(19, 23), 16)) >>> 8, i[9] = a & 255, i[10] = (a = parseInt(o.slice(24, 36), 16)) / 1099511627776 & 255, i[11] = a / 4294967296 & 255, i[12] = a >>> 24 & 255, i[13] = a >>> 16 & 255, i[14] = a >>> 8 & 255, i[15] = a & 255, i
    }
    var r = n;
    return ue.default = r, ue
}
var Vt;

function zr() {
    if (Vt) return F;
    Vt = 1, Object.defineProperty(F, "__esModule", {
        value: !0
    }), F.URL = F.DNS = void 0, F.default = i;
    var t = Ye(),
        e = n(Kr());

    function n(s) {
        return s && s.__esModule ? s : {
            default: s
        }
    }

    function r(s) {
        s = unescape(encodeURIComponent(s));
        const c = [];
        for (let l = 0; l < s.length; ++l) c.push(s.charCodeAt(l));
        return c
    }
    const o = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
    F.DNS = o;
    const a = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
    F.URL = a;

    function i(s, c, l) {
        function h(m, b, p, g) {
            var u;
            if (typeof m == "string" && (m = r(m)), typeof b == "string" && (b = (0, e.default)(b)), ((u = b) === null || u === void 0 ? void 0 : u.length) !== 16) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
            let d = new Uint8Array(16 + m.length);
            if (d.set(b), d.set(m, b.length), d = l(d), d[6] = d[6] & 15 | c, d[8] = d[8] & 63 | 128, p) {
                g = g || 0;
                for (let f = 0; f < 16; ++f) p[g + f] = d[f];
                return p
            }
            return (0, t.unsafeStringify)(d)
        }
        try {
            h.name = s
        } catch (m) {}
        return h.DNS = o, h.URL = a, h
    }
    return F
}
var le = {},
    Kt;

function na() {
    if (Kt) return le;
    Kt = 1, Object.defineProperty(le, "__esModule", {
        value: !0
    }), le.default = void 0;

    function t(p) {
        if (typeof p == "string") {
            const g = unescape(encodeURIComponent(p));
            p = new Uint8Array(g.length);
            for (let u = 0; u < g.length; ++u) p[u] = g.charCodeAt(u)
        }
        return e(r(o(p), p.length * 8))
    }

    function e(p) {
        const g = [],
            u = p.length * 32,
            d = "0123456789abcdef";
        for (let f = 0; f < u; f += 8) {
            const y = p[f >> 5] >>> f % 32 & 255,
                v = parseInt(d.charAt(y >>> 4 & 15) + d.charAt(y & 15), 16);
            g.push(v)
        }
        return g
    }

    function n(p) {
        return (p + 64 >>> 9 << 4) + 14 + 1
    }

    function r(p, g) {
        p[g >> 5] |= 128 << g % 32, p[n(g) - 1] = g;
        let u = 1732584193,
            d = -271733879,
            f = -1732584194,
            y = 271733878;
        for (let v = 0; v < p.length; v += 16) {
            const P = u,
                E = d,
                O = f,
                k = y;
            u = c(u, d, f, y, p[v], 7, -680876936), y = c(y, u, d, f, p[v + 1], 12, -389564586), f = c(f, y, u, d, p[v + 2], 17, 606105819), d = c(d, f, y, u, p[v + 3], 22, -1044525330), u = c(u, d, f, y, p[v + 4], 7, -176418897), y = c(y, u, d, f, p[v + 5], 12, 1200080426), f = c(f, y, u, d, p[v + 6], 17, -1473231341), d = c(d, f, y, u, p[v + 7], 22, -45705983), u = c(u, d, f, y, p[v + 8], 7, 1770035416), y = c(y, u, d, f, p[v + 9], 12, -1958414417), f = c(f, y, u, d, p[v + 10], 17, -42063), d = c(d, f, y, u, p[v + 11], 22, -1990404162), u = c(u, d, f, y, p[v + 12], 7, 1804603682), y = c(y, u, d, f, p[v + 13], 12, -40341101), f = c(f, y, u, d, p[v + 14], 17, -1502002290), d = c(d, f, y, u, p[v + 15], 22, 1236535329), u = l(u, d, f, y, p[v + 1], 5, -165796510), y = l(y, u, d, f, p[v + 6], 9, -1069501632), f = l(f, y, u, d, p[v + 11], 14, 643717713), d = l(d, f, y, u, p[v], 20, -373897302), u = l(u, d, f, y, p[v + 5], 5, -701558691), y = l(y, u, d, f, p[v + 10], 9, 38016083), f = l(f, y, u, d, p[v + 15], 14, -660478335), d = l(d, f, y, u, p[v + 4], 20, -405537848), u = l(u, d, f, y, p[v + 9], 5, 568446438), y = l(y, u, d, f, p[v + 14], 9, -1019803690), f = l(f, y, u, d, p[v + 3], 14, -187363961), d = l(d, f, y, u, p[v + 8], 20, 1163531501), u = l(u, d, f, y, p[v + 13], 5, -1444681467), y = l(y, u, d, f, p[v + 2], 9, -51403784), f = l(f, y, u, d, p[v + 7], 14, 1735328473), d = l(d, f, y, u, p[v + 12], 20, -1926607734), u = h(u, d, f, y, p[v + 5], 4, -378558), y = h(y, u, d, f, p[v + 8], 11, -2022574463), f = h(f, y, u, d, p[v + 11], 16, 1839030562), d = h(d, f, y, u, p[v + 14], 23, -35309556), u = h(u, d, f, y, p[v + 1], 4, -1530992060), y = h(y, u, d, f, p[v + 4], 11, 1272893353), f = h(f, y, u, d, p[v + 7], 16, -155497632), d = h(d, f, y, u, p[v + 10], 23, -1094730640), u = h(u, d, f, y, p[v + 13], 4, 681279174), y = h(y, u, d, f, p[v], 11, -358537222), f = h(f, y, u, d, p[v + 3], 16, -722521979), d = h(d, f, y, u, p[v + 6], 23, 76029189), u = h(u, d, f, y, p[v + 9], 4, -640364487), y = h(y, u, d, f, p[v + 12], 11, -421815835), f = h(f, y, u, d, p[v + 15], 16, 530742520), d = h(d, f, y, u, p[v + 2], 23, -995338651), u = m(u, d, f, y, p[v], 6, -198630844), y = m(y, u, d, f, p[v + 7], 10, 1126891415), f = m(f, y, u, d, p[v + 14], 15, -1416354905), d = m(d, f, y, u, p[v + 5], 21, -57434055), u = m(u, d, f, y, p[v + 12], 6, 1700485571), y = m(y, u, d, f, p[v + 3], 10, -1894986606), f = m(f, y, u, d, p[v + 10], 15, -1051523), d = m(d, f, y, u, p[v + 1], 21, -2054922799), u = m(u, d, f, y, p[v + 8], 6, 1873313359), y = m(y, u, d, f, p[v + 15], 10, -30611744), f = m(f, y, u, d, p[v + 6], 15, -1560198380), d = m(d, f, y, u, p[v + 13], 21, 1309151649), u = m(u, d, f, y, p[v + 4], 6, -145523070), y = m(y, u, d, f, p[v + 11], 10, -1120210379), f = m(f, y, u, d, p[v + 2], 15, 718787259), d = m(d, f, y, u, p[v + 9], 21, -343485551), u = a(u, P), d = a(d, E), f = a(f, O), y = a(y, k)
        }
        return [u, d, f, y]
    }

    function o(p) {
        if (p.length === 0) return [];
        const g = p.length * 8,
            u = new Uint32Array(n(g));
        for (let d = 0; d < g; d += 8) u[d >> 5] |= (p[d / 8] & 255) << d % 32;
        return u
    }

    function a(p, g) {
        const u = (p & 65535) + (g & 65535);
        return (p >> 16) + (g >> 16) + (u >> 16) << 16 | u & 65535
    }

    function i(p, g) {
        return p << g | p >>> 32 - g
    }

    function s(p, g, u, d, f, y) {
        return a(i(a(a(g, p), a(d, y)), f), u)
    }

    function c(p, g, u, d, f, y, v) {
        return s(g & u | ~g & d, p, g, f, y, v)
    }

    function l(p, g, u, d, f, y, v) {
        return s(g & d | u & ~d, p, g, f, y, v)
    }

    function h(p, g, u, d, f, y, v) {
        return s(g ^ u ^ d, p, g, f, y, v)
    }

    function m(p, g, u, d, f, y, v) {
        return s(u ^ (g | ~d), p, g, f, y, v)
    }
    var b = t;
    return le.default = b, le
}
var zt;

function aa() {
    if (zt) return ce;
    zt = 1, Object.defineProperty(ce, "__esModule", {
        value: !0
    }), ce.default = void 0;
    var t = n(zr()),
        e = n(na());

    function n(o) {
        return o && o.__esModule ? o : {
            default: o
        }
    }
    var r = (0, t.default)("v3", 48, e.default);
    return ce.default = r, ce
}
var de = {},
    fe = {},
    Jt;

function oa() {
    if (Jt) return fe;
    Jt = 1, Object.defineProperty(fe, "__esModule", {
        value: !0
    }), fe.default = void 0;
    var t = {
        randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto)
    };
    return fe.default = t, fe
}
var Xt;

function ia() {
    if (Xt) return de;
    Xt = 1, Object.defineProperty(de, "__esModule", {
        value: !0
    }), de.default = void 0;
    var t = r(oa()),
        e = r(Vr()),
        n = Ye();

    function r(i) {
        return i && i.__esModule ? i : {
            default: i
        }
    }

    function o(i, s, c) {
        if (t.default.randomUUID && !s && !i) return t.default.randomUUID();
        i = i || {};
        const l = i.random || (i.rng || e.default)();
        if (l[6] = l[6] & 15 | 64, l[8] = l[8] & 63 | 128, s) {
            c = c || 0;
            for (let h = 0; h < 16; ++h) s[c + h] = l[h];
            return s
        }
        return (0, n.unsafeStringify)(l)
    }
    var a = o;
    return de.default = a, de
}
var pe = {},
    he = {},
    Yt;

function sa() {
    if (Yt) return he;
    Yt = 1, Object.defineProperty(he, "__esModule", {
        value: !0
    }), he.default = void 0;

    function t(o, a, i, s) {
        switch (o) {
            case 0:
                return a & i ^ ~a & s;
            case 1:
                return a ^ i ^ s;
            case 2:
                return a & i ^ a & s ^ i & s;
            case 3:
                return a ^ i ^ s
        }
    }

    function e(o, a) {
        return o << a | o >>> 32 - a
    }

    function n(o) {
        const a = [1518500249, 1859775393, 2400959708, 3395469782],
            i = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
        if (typeof o == "string") {
            const h = unescape(encodeURIComponent(o));
            o = [];
            for (let m = 0; m < h.length; ++m) o.push(h.charCodeAt(m))
        } else Array.isArray(o) || (o = Array.prototype.slice.call(o));
        o.push(128);
        const s = o.length / 4 + 2,
            c = Math.ceil(s / 16),
            l = new Array(c);
        for (let h = 0; h < c; ++h) {
            const m = new Uint32Array(16);
            for (let b = 0; b < 16; ++b) m[b] = o[h * 64 + b * 4] << 24 | o[h * 64 + b * 4 + 1] << 16 | o[h * 64 + b * 4 + 2] << 8 | o[h * 64 + b * 4 + 3];
            l[h] = m
        }
        l[c - 1][14] = (o.length - 1) * 8 / Math.pow(2, 32), l[c - 1][14] = Math.floor(l[c - 1][14]), l[c - 1][15] = (o.length - 1) * 8 & 4294967295;
        for (let h = 0; h < c; ++h) {
            const m = new Uint32Array(80);
            for (let f = 0; f < 16; ++f) m[f] = l[h][f];
            for (let f = 16; f < 80; ++f) m[f] = e(m[f - 3] ^ m[f - 8] ^ m[f - 14] ^ m[f - 16], 1);
            let b = i[0],
                p = i[1],
                g = i[2],
                u = i[3],
                d = i[4];
            for (let f = 0; f < 80; ++f) {
                const y = Math.floor(f / 20),
                    v = e(b, 5) + t(y, p, g, u) + d + a[y] + m[f] >>> 0;
                d = u, u = g, g = e(p, 30) >>> 0, p = b, b = v
            }
            i[0] = i[0] + b >>> 0, i[1] = i[1] + p >>> 0, i[2] = i[2] + g >>> 0, i[3] = i[3] + u >>> 0, i[4] = i[4] + d >>> 0
        }
        return [i[0] >> 24 & 255, i[0] >> 16 & 255, i[0] >> 8 & 255, i[0] & 255, i[1] >> 24 & 255, i[1] >> 16 & 255, i[1] >> 8 & 255, i[1] & 255, i[2] >> 24 & 255, i[2] >> 16 & 255, i[2] >> 8 & 255, i[2] & 255, i[3] >> 24 & 255, i[3] >> 16 & 255, i[3] >> 8 & 255, i[3] & 255, i[4] >> 24 & 255, i[4] >> 16 & 255, i[4] >> 8 & 255, i[4] & 255]
    }
    var r = n;
    return he.default = r, he
}
var Zt;

function ca() {
    if (Zt) return pe;
    Zt = 1, Object.defineProperty(pe, "__esModule", {
        value: !0
    }), pe.default = void 0;
    var t = n(zr()),
        e = n(sa());

    function n(o) {
        return o && o.__esModule ? o : {
            default: o
        }
    }
    var r = (0, t.default)("v5", 80, e.default);
    return pe.default = r, pe
}
var me = {},
    Qt;

function ua() {
    if (Qt) return me;
    Qt = 1, Object.defineProperty(me, "__esModule", {
        value: !0
    }), me.default = void 0;
    var t = "00000000-0000-0000-0000-000000000000";
    return me.default = t, me
}
var ye = {},
    Ct;

function la() {
    if (Ct) return ye;
    Ct = 1, Object.defineProperty(ye, "__esModule", {
        value: !0
    }), ye.default = void 0;
    var t = e(Xe());

    function e(o) {
        return o && o.__esModule ? o : {
            default: o
        }
    }

    function n(o) {
        if (!(0, t.default)(o)) throw TypeError("Invalid UUID");
        return parseInt(o.slice(14, 15), 16)
    }
    var r = n;
    return ye.default = r, ye
}
var er;

function da() {
    return er || (er = 1, function(t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), Object.defineProperty(t, "NIL", {
            enumerable: !0,
            get: function() {
                return a.default
            }
        }), Object.defineProperty(t, "parse", {
            enumerable: !0,
            get: function() {
                return l.default
            }
        }), Object.defineProperty(t, "stringify", {
            enumerable: !0,
            get: function() {
                return c.default
            }
        }), Object.defineProperty(t, "v1", {
            enumerable: !0,
            get: function() {
                return e.default
            }
        }), Object.defineProperty(t, "v3", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        }), Object.defineProperty(t, "v4", {
            enumerable: !0,
            get: function() {
                return r.default
            }
        }), Object.defineProperty(t, "v5", {
            enumerable: !0,
            get: function() {
                return o.default
            }
        }), Object.defineProperty(t, "validate", {
            enumerable: !0,
            get: function() {
                return s.default
            }
        }), Object.defineProperty(t, "version", {
            enumerable: !0,
            get: function() {
                return i.default
            }
        });
        var e = h(ra()),
            n = h(aa()),
            r = h(ia()),
            o = h(ca()),
            a = h(ua()),
            i = h(la()),
            s = h(Xe()),
            c = h(Ye()),
            l = h(Kr());

        function h(m) {
            return m && m.__esModule ? m : {
                default: m
            }
        }
    }(ot)), ot
}
Object.defineProperty(Te, "__esModule", {
    value: !0
}), Te.v4 = void 0;

function fa() {
    return typeof crypto == "object" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : da().v4()
}
Te.v4 = fa;
var Ze = {},
    G = {};
Object.defineProperty(G, "__esModule", {
    value: !0
}), G.toUnderscoreCase = G.convertAllEventsToUnderscoreCase = G.convertStringToUnderscoreCase = void 0;
var tr = Oe;

function ft(t, e) {
    return e === void 0 && (e = !0), t && Object.keys(t).length && e ? Object.keys(t).map(function(n) {
        var r;
        return r = {}, r[Jr(n)] = t[n], r
    }).reduce(function(n, r) {
        return tr.__assign(tr.__assign({}, n), r)
    }) : t
}
G.toUnderscoreCase = ft;

function Jr(t) {
    return t.split(/(?=[A-Z])/).join("_").toLowerCase()
}
G.convertStringToUnderscoreCase = Jr;

function pa(t) {
    return t.events.map(function(e) {
        var n = !0,
            r = !0;
        return e && e.options && Object.prototype.hasOwnProperty.call(e.options, "convertEventCase") && (n = !!e.options.convertEventCase), e && e.options && Object.prototype.hasOwnProperty.call(e.options, "convertMetaDataCase") && (r = !!e.options.convertMetaDataCase), {
            schema_id: e.schemaId,
            payload: ft(e.payload, n),
            metadata: ft(e.metadata, r)
        }
    })
}
G.convertAllEventsToUnderscoreCase = pa;
var N = {};
Object.defineProperty(N, "__esModule", {
    value: !0
}), N.MonorailRetriesExceededError = N.MonorailRequestError = N.MonorailBatchProduceError = N.MonorailUnableToProduceError = void 0;
var Qe = Oe,
    ha = function(t) {
        Qe.__extends(e, t);

        function e(n) {
            var r = t.call(this, "Error producing to the Monorail Edge. Response received: ".concat(JSON.stringify(n))) || this;
            return r.response = n, Object.setPrototypeOf(r, e.prototype), r
        }
        return e
    }(Error);
N.MonorailUnableToProduceError = ha;
var ma = function(t) {
    Qe.__extends(e, t);

    function e(n) {
        var r = t.call(this, "Error producing to the Monorail Edge. Response received: ".concat(JSON.stringify(n))) || this;
        return Object.setPrototypeOf(r, e.prototype), r.response = n, r
    }
    return e
}(Error);
N.MonorailBatchProduceError = ma;
var ya = function(t) {
    Qe.__extends(e, t);

    function e(n) {
        var r = t.call(this, "Error completing request. A network failure may have prevented the request from completing. Error: ".concat(n)) || this;
        return Object.setPrototypeOf(r, e.prototype), r
    }
    return e
}(Error);
N.MonorailRequestError = ya;
var ga = function(t) {
    Qe.__extends(e, t);

    function e(n) {
        var r = t.call(this, "".concat(n)) || this;
        return Object.setPrototypeOf(r, e.prototype), r
    }
    return e
}(Error);
N.MonorailRetriesExceededError = ga, Object.defineProperty(Ze, "__esModule", {
    value: !0
}), Ze.HttpProducer = void 0;
var xe = Oe,
    De = M,
    it = G,
    ba = Te,
    H = N,
    va = function() {
        function t(e, n) {
            e === void 0 && (e = De.DEVELOPMENT_DOMAIN), n === void 0 && (n = !1), this.edgeDomain = e, this.keepalive = n
        }
        return t.withEndpoint = function(e) {
            return new t(De.extractDomain(e))
        }, t.getHeadersFromMetadata = function(e) {
            var n = {
                "Content-Type": "application/json; charset=utf-8",
                "X-Monorail-Edge-Event-Created-At-Ms": (e && e.eventCreatedAtMs || Date.now()).toString(),
                "X-Monorail-Edge-Event-Sent-At-Ms": Date.now().toString(),
                "X-Monorail-Edge-Client-Message-Id": (e && e.clientMessageId || (0, ba.v4)()).toString()
            };
            return e && e.userAgent && (n["User-Agent"] = e.userAgent), e && e.remoteIp && (n["X-Forwarded-For"] = e.remoteIp), n
        }, t.prototype.produceBatch = function(e) {
            return xe.__awaiter(this, void 0, void 0, function() {
                var n, r, o, a, i, s;
                return xe.__generator(this, function(c) {
                    switch (c.label) {
                        case 0:
                            n = {
                                events: (0, it.convertAllEventsToUnderscoreCase)(e),
                                metadata: (0, it.toUnderscoreCase)(e.metadata)
                            }, c.label = 1;
                        case 1:
                            return c.trys.push([1, 3, , 4]), [4, fetch(this.produceBatchEndpoint(), {
                                method: "post",
                                headers: t.getHeadersFromMetadata(e.metadata),
                                body: JSON.stringify(n),
                                keepalive: this.keepalive
                            })];
                        case 2:
                            return r = c.sent(), [3, 4];
                        case 3:
                            throw o = c.sent(), new H.MonorailRequestError(o);
                        case 4:
                            return r.status !== 207 ? [3, 6] : [4, r.json()];
                        case 5:
                            throw a = c.sent(), new H.MonorailBatchProduceError(a);
                        case 6:
                            return r.ok ? [3, 8] : (i = H.MonorailUnableToProduceError.bind, s = {
                                status: r.status
                            }, [4, r.text()]);
                        case 7:
                            throw new(i.apply(H.MonorailUnableToProduceError, [void 0, (s.message = c.sent(), s)]));
                        case 8:
                            return [2, {
                                status: r.status
                            }]
                    }
                })
            })
        }, t.prototype.produce = function(e) {
            return xe.__awaiter(this, void 0, void 0, function() {
                var n, r, o, a, i, s;
                return xe.__generator(this, function(c) {
                    switch (c.label) {
                        case 0:
                            n = !0, e && e.options && Object.prototype.hasOwnProperty.call(e.options, "convertEventCase") && (n = !!e.options.convertEventCase), r = {
                                schema_id: e.schemaId,
                                payload: (0, it.toUnderscoreCase)(e.payload, n)
                            }, c.label = 1;
                        case 1:
                            return c.trys.push([1, 3, , 4]), [4, fetch(this.produceEndpoint(), {
                                method: "post",
                                headers: t.getHeadersFromMetadata(e.metadata),
                                body: JSON.stringify(r),
                                keepalive: this.keepalive
                            })];
                        case 2:
                            return o = c.sent(), [3, 4];
                        case 3:
                            throw a = c.sent(), new H.MonorailRequestError(a);
                        case 4:
                            if (!o) throw new H.MonorailUnableToProduceError({
                                message: "No response from edge"
                            });
                            return o.ok ? [3, 6] : (i = H.MonorailUnableToProduceError.bind, s = {
                                status: o.status
                            }, [4, o.text()]);
                        case 5:
                            throw new(i.apply(H.MonorailUnableToProduceError, [void 0, (s.message = c.sent(), s)]));
                        case 6:
                            return [2, {
                                status: o.status
                            }]
                    }
                })
            })
        }, t.prototype.produceBatchEndpoint = function() {
            return this.edgeDomain + De.PRODUCE_BATCH_ENDPOINT
        }, t.prototype.produceEndpoint = function() {
            return this.edgeDomain + De.PRODUCE_ENDPOINT
        }, t
    }();
Ze.HttpProducer = va;
var Ce = {};
Object.defineProperty(Ce, "__esModule", {
    value: !0
}), Ce.LogProducer = void 0;
var wa = function() {
    function t(e) {
        this.sendToConsole = e, e && t.printWelcomeMessage(e)
    }
    return t.printWelcomeMessage = function(e) {
        console.log("%c\u{1F44B} from Monorail%c\n\n" + "We've noticed that you're".concat(e ? "" : " not", " ") + "running in debug mode. " + "As such, we will ".concat(e ? "produce" : "not produce", " ") + "Monorail events to the console. " + "\n\nIf you want Monorail events to ".concat(e ? "stop" : "start", " ") + "appearing here, %cset debugMode=".concat((!e).toString(), "%c, ") + "for the Monorail Log Producer in your code.", "font-size: large;", "font-size: normal;", "font-weight: bold;", "font-weight: normal;")
    }, t.prototype.produce = function(e) {
        return this.sendToConsole && console.log("Monorail event produced", e), new Promise(function(n) {
            n(e)
        })
    }, t.prototype.produceBatch = function(e) {
        return this.sendToConsole && console.log("Monorail Batch event produced", e), new Promise(function(n) {
            n(e)
        })
    }, t
}();
Ce.LogProducer = wa, Object.defineProperty(Ve, "__esModule", {
    value: !0
}), Ve.Monorail = void 0;
var _a = Oe,
    rr = M,
    Ea = ze,
    Sa = Te,
    st = Ze,
    Pa = Ce,
    Oa = function() {
        function t(e, n) {
            this.producer = e, this.middleware = n, this.executeChain = t.buildMiddlewareChain(this.middleware.concat(new Ea.ProducerMiddleware(e)))
        }
        return t.createLogProducer = function(e) {
            return new t(new Pa.LogProducer(e.debugMode), e.middleware || [])
        }, t.createHttpProducerWithEndpoint = function(e, n) {
            return n === void 0 && (n = []), new t(st.HttpProducer.withEndpoint(e), n)
        }, t.createHttpProducer = function(e) {
            var n = e.options && e.options.keepalive;
            return new t(e.production ? new st.HttpProducer(rr.PRODUCTION_DOMAIN, n) : new st.HttpProducer(rr.DEVELOPMENT_DOMAIN, n), e.middleware || [])
        }, t.buildMiddlewareChain = function(e, n) {
            var r = this;
            return n === void 0 && (n = 0), n === e.length ? this.identityFn : function(o) {
                return e[n].do(o, r.buildMiddlewareChain(e, n + 1))
            }
        }, t.prototype.produce = function(e) {
            return e.metadata = _a.__assign({
                eventCreatedAtMs: Date.now(),
                clientMessageId: (0, Sa.v4)()
            }, e.metadata), this.executeChain(e)
        }, t.prototype.produceBatch = function(e) {
            return this.executeChain(e)
        }, t
    }();
Ve.Monorail = Oa;
var et = {};
Object.defineProperty(et, "__esModule", {
    value: !0
}), et.RetryMiddleware = void 0;
var nr = Oe,
    ar = N,
    Ta = function() {
        function t(e, n) {
            e === void 0 && (e = 3), n === void 0 && (n = 150), this.maxRetries = e, this.delayMs = n
        }
        return t.prototype.do = function(e, n) {
            return nr.__awaiter(this, void 0, void 0, function() {
                var r, o, a, i, s;
                return nr.__generator(this, function(c) {
                    switch (c.label) {
                        case 0:
                            r = 0, c.label = 1;
                        case 1:
                            if (!(r < this.maxRetries)) return [3, 7];
                            a = void 0, c.label = 2;
                        case 2:
                            return c.trys.push([2, 4, , 6]), [4, n(e)];
                        case 3:
                            return a = c.sent(), [3, 6];
                        case 4:
                            if (i = c.sent(), o = o || new Error, o = new Error("".concat(o.message, " Retry count:").concat(r + 1, " Error msg:").concat(i.message, "\n")), i instanceof ar.MonorailUnableToProduceError && (s = i.response.status, s && s >= 400 && s < 500)) throw i;
                            return [4, this.delay(this.delayMs * Math.pow(2, r))];
                        case 5:
                            return c.sent(), r++, [3, 1];
                        case 6:
                            return [2, a];
                        case 7:
                            throw o ? o.message = "Retry count of ".concat(this.maxRetries, " exceeded. Failed with error: \n").concat(o.message, " Aborting request for ").concat(JSON.stringify(e)) : o = new Error, new ar.MonorailRetriesExceededError(o)
                    }
                })
            })
        }, t.prototype.delay = function(e) {
            return new Promise(function(n) {
                return setTimeout(n, e)
            })
        }, t
    }();
et.RetryMiddleware = Ta,
    function(t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.RetryMiddleware = t.MonorailRetriesExceededError = t.MonorailUnableToProduceError = t.MonorailRequestError = t.Monorail = void 0;
        var e = Ve;
        Object.defineProperty(t, "Monorail", {
            enumerable: !0,
            get: function() {
                return e.Monorail
            }
        });
        var n = N;
        Object.defineProperty(t, "MonorailRequestError", {
            enumerable: !0,
            get: function() {
                return n.MonorailRequestError
            }
        }), Object.defineProperty(t, "MonorailUnableToProduceError", {
            enumerable: !0,
            get: function() {
                return n.MonorailUnableToProduceError
            }
        }), Object.defineProperty(t, "MonorailRetriesExceededError", {
            enumerable: !0,
            get: function() {
                return n.MonorailRetriesExceededError
            }
        });
        var r = et;
        Object.defineProperty(t, "RetryMiddleware", {
            enumerable: !0,
            get: function() {
                return r.RetryMiddleware
            }
        })
    }(Se);
const Aa = ["Chrome-Lighthouse"];

function Ma() {
    const t = navigator.userAgent;
    return Aa.some(e => t.includes(e))
}
class Ia extends Error {
    constructor(e) {
        super(e), w(this, "name", "MonorailProducerError"), w(this, "code", "monorail_producer_error")
    }
}

function* Na() {
    yield Se.Monorail.createHttpProducer({
        production: !0
    }), wr() && (yield Se.Monorail.createLogProducer({
        debugMode: !0
    }))
}
const Ra = [...Na()];

function xa(t) {
    var e;
    return !(t instanceof Se.MonorailRequestError) && !((e = t == null ? void 0 : t.message) != null && e.includes("Invalid agent:"))
}
async function Da(t, e) {
    if (Ma()) return;
    S.leaveBreadcrumb("monorail event produced to ".concat(t.schemaId), "manual", t);
    const n = [];
    if (await Promise.all(Ra.map(async o => {
            try {
                await o.produce(t)
            } catch (a) {
                n.push(a)
            }
        })), n.length === 0) return;
    const r = n.sort(o => o instanceof Se.MonorailRequestError ? 1 : -1)[0];
    if (e == null || e(r), xa(r)) {
        const o = r instanceof Error ? r : new Ia(ka(r));
        S.notify(o)
    }
}

function ka(t) {
    try {
        return JSON.stringify(t)
    } catch (e) {
        return t.toString()
    }
}
const or = "shopify_wallet_checkout_track/6.1";
async function J(t, e) {
    var n, r, o, a, i, s, c, l, h, m, b, p;
    (r = (n = window == null ? void 0 : window.ShopifyAnalytics) == null ? void 0 : n.lib) != null && r.trekkie || await new Promise(It => {
        const Rt = setInterval(() => {
                var Ae, Me;
                (Me = (Ae = window == null ? void 0 : window.ShopifyAnalytics) == null ? void 0 : Ae.lib) != null && Me.trekkie && (clearInterval(Rt), It())
            }, 100),
            ci = setTimeout(() => {
                clearInterval(Rt), clearTimeout(ci), It()
            }, 7e3)
    });
    const g = (i = (a = (o = window.ShopifyAnalytics) == null ? void 0 : o.lib) == null ? void 0 : a.trekkie) == null ? void 0 : i.defaultAttributes,
        u = {
            uniqToken: (s = g == null ? void 0 : g.uniqToken) != null ? s : "",
            visitToken: (c = g == null ? void 0 : g.visitToken) != null ? c : "",
            microSessionId: (l = g == null ? void 0 : g.microSessionId) != null ? l : "",
            microSessionCount: (h = g == null ? void 0 : g.microSessionCount) != null ? h : 0,
            shopId: (m = g == null ? void 0 : g.shopId) != null ? m : 0,
            themeId: g == null ? void 0 : g.themeId,
            themeCityHash: (b = g == null ? void 0 : g.themeCityHash) != null ? b : "",
            contentLanguage: (p = g == null ? void 0 : g.contentLanguage) != null ? p : "",
            referer: g == null ? void 0 : g.referer
        },
        {
            uniqToken: d,
            visitToken: f,
            microSessionId: y,
            microSessionCount: v,
            shopId: P,
            themeId: E,
            themeCityHash: O,
            contentLanguage: k,
            referer: R
        } = u,
        {
            event: K,
            eventSubtype: At,
            instrumentId: Mt,
            ttl: si
        } = t,
        Nt = {
            schemaId: or,
            payload: {
                event: K,
                eventSubtype: At,
                appName: "storefront",
                pageType: qn(),
                instrumentId: Mt,
                ttl: si,
                uniqToken: d,
                visitToken: f,
                microSessionId: y,
                microSessionCount: v,
                shopId: P,
                themeId: E,
                themeCityHash: O,
                contentLanguage: k,
                referer: R,
                checkoutOne: !0
            }
        };
    if (!K) {
        S.notify(new Error("Event is required"), {
            metadata: {
                request: {
                    monorail: {
                        schemaId: or,
                        payload: JSON.stringify(Nt)
                    }
                }
            }
        });
        return
    }
    await Da(Nt, e)
}
var A = (t => (t.BuyItNow = "BuyItNow", t.MoreOptions = "MoreOptions", t.ApplePay = "ApplePay", t.PayPal = "PayPalV5", t.Venmo = "Venmo", t.GooglePay = "GooglePay", t.ShopPay = "ShopifyPay", t.MetaPay = "FacebookPay", t))(A || {}),
    L = (t => (t.CartInitCalled = "portable_wallets_cart_init_called", t.ClickSheetCancelled = "portable_wallets_instrument_click_sheet_cancelled", t.ClickSheetFailed = "portable_wallets_instrument_click_sheet_failure", t.ClickSheetSuccess = "portable_wallets_instrument_click_sheet_success", t.InitCalled = "portable_wallets_init_called", t.InitFailed = "portable_wallets_init_failed", t.InitSuccess = "portable_wallets_init_success", t.UpdateFailed = "portable_wallets_instrument_update_failed", t.InstrumentLoaded = "portable_wallets_instrument_loaded", t))(L || {});

function Ba(t) {
    const e = n => {
        n.persisted && (t(), window.removeEventListener("pageshow", e))
    };
    window.addEventListener("pageshow", e)
}
async function _t({
    element: t,
    attribute: e,
    instrumentName: n,
    onError: r,
    dataSource: o
}) {
    t.setAttribute(e, "true");
    try {
        const a = await o.getCart(n);
        if (Ba(() => {
                t && t.removeAttribute(e)
            }), !a || !a.id) throw new Error("[".concat(n, "] received invalid cart"));
        if (!a.checkoutUrl) throw new Error("[".concat(n, "] Created cart with no checkout URL"));
        return a
    } catch (a) {
        return S.notify(a), t.removeAttribute(e), r == null || r(), null
    }
}
class Xr extends We {
    constructor() {
        super(...arguments), w(this, "anchor")
    }
    static get observedAttributes() {
        return ["disabled"]
    }
    async connectedCallback() {
        this.render()
    }
    attributeChangedCallback(e, n, r) {
        n !== r && e === "disabled" && this.anchor && (r ? this.anchor.setAttribute("disabled", "true") : this.anchor.removeAttribute("disabled"))
    }
    async handleClick(e) {
        if (e.preventDefault(), this.disabled || !this.anchor || this.anchor.getAttribute("disabled")) return;
        const n = await _t({
            element: this.anchor,
            attribute: "disabled",
            instrumentName: A.MoreOptions,
            onError: () => bt(this.i18n),
            dataSource: this.dataSource
        });
        n && window.location.assign(n.checkoutUrl)
    }
    render() {
        this.anchor = document.createElement("a"), this.anchor.href = "", this.anchor.textContent = this.i18n.translate("more_payment_options"), this.anchor.className = vt.MORE_PAYMENT_OPTION_BUTTON, this.disabled && this.anchor.setAttribute("disabled", "true"), this.anchor.onclick = e => this.handleClick(e), this.appendChild(this.anchor)
    }
}
X("more-payment-options-link", Xr);
class Yr extends _r {
    clearExistingButtons({
        expectedSkeleton: e
    } = {}) {
        if (!e && this.innerHTML.length > 0) {
            this.innerHTML = "";
            return
        }
        e && !this.innerHTML.includes(e) && (this.innerHTML = "")
    }
    get shopId() {
        return this.getAttribute("shop-id")
    }
    get cartId() {
        return this.getAttribute("cart-id")
    }
    get walletConfigs() {
        return this.getAttribute("wallet-configs")
    }
}
const ge = Element.prototype;

function La(t) {
    const e = Qr(t);
    return Zr(e)
}

function Zr(t) {
    var e;
    const n = t == null ? void 0 : t.elements;
    if (!n) return null;
    const r = ct(n, "id");
    if (!r || isNaN(Number(r))) return null;
    const o = Number((e = ct(n, "quantity")) != null ? e : "1"),
        a = "gid://shopify/ProductVariant/".concat(r),
        i = ct(n, "selling_plan"),
        s = i ? "gid://shopify/SellingPlan/".concat(i) : void 0,
        c = Ua(t);
    return {
        quantity: o,
        merchandiseId: a,
        sellingPlanId: s,
        lineItemProperties: c
    }
}

function Qr(t) {
    const e = ir(t, "[data-shopify='payment-button']") || document.querySelector("[data-shopify='payment-button']");
    return ir(e, "form")
}

function Ua(t) {
    if (!t) return {};
    const e = document.querySelectorAll('[name^="properties"][form^="'.concat(t.getAttribute("id"), '"]')),
        n = t.querySelectorAll('[name^="properties"]'),
        r = [...e, ...n],
        o = {};
    return r.forEach(a => {
        const i = $a(a),
            s = ja(a);
        i && typeof s < "u" && (o[i] = s)
    }), o
}

function $a(t) {
    const e = t.getAttribute("name");
    if (e === null) return null;
    const n = e.indexOf("["),
        r = e.lastIndexOf("]");
    return n === -1 || r === -1 ? null : e.substring(n + 1, r)
}

function ja(t) {
    if (!(["radio", "checkbox"].includes(t.type) && !t.checked) && !(t.value === "" || typeof t.value > "u")) return t.value
}

function ct(t, e) {
    var n;
    const r = t.namedItem(e);
    return r && "value" in r && (n = r.value) != null ? n : null
}

function ir(t, e) {
    if (ge.matches = ge.matches || ge.webkitMatchesSelector || ge.msMatchesSelector || ge.mozMatchesSelector, !t || t.matches(e)) return t;
    let n = t;
    for (; n && n !== document.body;)
        if (n = n.parentElement, n && n.matches(e)) return n;
    return null
}
class qa {
    constructor(e, n) {
        w(this, "addToCartMutationObserver"), w(this, "addToCartForm"), w(this, "addToCartButtons"), this.element = e, this.setComponentDisabled = n, this.addToCartMutationObserver = null, this.addToCartForm = null, this.addToCartButtons = []
    }
    setupMutationObservers() {
        if (this.findAndSetAddToCartButtons(), !this.addToCartForm) return;
        this.syncComponentStateWithForm();
        const e = new MutationObserver(() => this.reobserveOnFormChanges());
        this.addToCartMutationObserver = new MutationObserver(() => this.syncComponentStateWithForm()), e.observe(this.addToCartForm, {
            childList: !0
        }), this.observeAddToCartButtons()
    }
    syncComponentStateWithForm() {
        if (!this.addToCartForm) {
            this.setComponentDisabled(!0);
            return
        }
        const e = Zr(this.addToCartForm),
            n = !!(this.addToCartButtons.length > 0 && this.addToCartButtons.every(r => r.disabled));
        this.setComponentDisabled(n || e === null)
    }
    observeAddToCartButtons() {
        this.addToCartButtons.forEach(e => {
            this.addToCartMutationObserver.observe(e, {
                attributes: !0
            })
        })
    }
    reobserveOnFormChanges() {
        var e;
        (e = this.addToCartMutationObserver) == null || e.disconnect(), this.findAndSetAddToCartButtons(), this.observeAddToCartButtons(), this.syncComponentStateWithForm()
    }
    findAndSetAddToCartButtons() {
        this.addToCartForm = Qr(this.element), this.addToCartForm && (this.addToCartButtons = [...this.addToCartForm.querySelectorAll("[type=submit]")])
    }
}
var Fa = 0;

function ne(t) {
    return "__private_" + Fa++ + "_" + t
}

function T(t, e) {
    if (!Object.prototype.hasOwnProperty.call(t, e)) throw new TypeError("attempted to use private field on non-instance");
    return t
}

function Et(t) {
    return Object.entries(t).map(([e, n]) => ({
        key: e,
        value: {
            stringValue: String(n)
        }
    }))
}
const Cr = 1,
    Ha = Ga(5, 2, 12);

function Ga(t, e, n) {
    const r = [0];
    for (let o = 0; o < n; o++) {
        const a = Math.floor(t * e ** o);
        r.push(a)
    }
    return r
}
var be = ne("exporter"),
    U = ne("attributes"),
    $ = ne("metrics");
class Wa {
    constructor({
        exporter: e,
        attributes: n
    }) {
        Object.defineProperty(this, be, {
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, U, {
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, $, {
            writable: !0,
            value: []
        }), T(this, be)[be] = e, T(this, U)[U] = n != null ? n : {}
    }
    addAttributes(e) {
        T(this, U)[U] = _(_({}, T(this, U)[U]), e)
    }
    histogram({
        name: e,
        value: n,
        unit: r,
        bounds: o,
        attributes: a
    }) {
        const i = Date.now() * 1e6;
        T(this, $)[$].push({
            name: e,
            type: "histogram",
            value: n,
            unit: r,
            timeUnixNano: i,
            attributes: a,
            bounds: o
        })
    }
    counter({
        name: e,
        value: n,
        unit: r,
        attributes: o
    }) {
        const a = Date.now() * 1e6;
        T(this, $)[$].push({
            name: e,
            type: "counter",
            value: n,
            unit: r,
            timeUnixNano: a,
            attributes: o
        })
    }
    gauge({
        name: e,
        value: n,
        unit: r,
        attributes: o
    }) {
        const a = Date.now() * 1e6;
        T(this, $)[$].push({
            name: e,
            type: "gauge",
            value: n,
            unit: r,
            timeUnixNano: a,
            attributes: o
        })
    }
    async exportMetrics() {
        const e = {};
        T(this, $)[$].forEach(r => {
            switch (r.attributes = _(_({}, T(this, U)[U]), r.attributes), r.type) {
                case "histogram":
                    Va(e, r);
                    break;
                case "counter":
                    Ka(e, r);
                    break;
                case "gauge":
                    za(e, r);
                    break
            }
        });
        const n = Object.values(e);
        n.length !== 0 && await T(this, be)[be].exportMetrics(n)
    }
}

function Va(t, e) {
    var n;
    const {
        name: r,
        value: o,
        unit: a,
        timeUnixNano: i,
        attributes: s
    } = e, c = (n = e.bounds) !== null && n !== void 0 ? n : Ha, l = new Array(c.length + 1).fill(0);
    t[r] || (t[r] = {
        name: r,
        unit: a || "1",
        histogram: {
            aggregationTemporality: Cr,
            dataPoints: []
        }
    });
    for (let h = 0; h < l.length; h++) {
        const m = c[h];
        if (m === void 0) l[h] = 1;
        else if (o <= m) {
            l[h] = 1;
            break
        }
    }
    t[r].histogram.dataPoints.push({
        startTimeUnixNano: i,
        timeUnixNano: i,
        count: 1,
        sum: o,
        min: o,
        max: o,
        bucketCounts: l,
        explicitBounds: c,
        attributes: Et(s != null ? s : {})
    })
}

function Ka(t, e) {
    const {
        name: n,
        value: r,
        unit: o,
        timeUnixNano: a,
        attributes: i
    } = e;
    t[n] || (t[n] = {
        name: n,
        unit: o || "1",
        sum: {
            aggregationTemporality: Cr,
            isMonotonic: !0,
            dataPoints: []
        }
    }), t[n].sum.dataPoints.push({
        startTimeUnixNano: a,
        timeUnixNano: a,
        asDouble: r,
        attributes: Et(i != null ? i : {})
    })
}

function za(t, e) {
    const {
        name: n,
        value: r,
        unit: o,
        timeUnixNano: a,
        attributes: i
    } = e;
    t[n] || (t[n] = {
        name: n,
        unit: o || "1",
        gauge: {
            dataPoints: []
        }
    }), t[n].gauge.dataPoints.push({
        startTimeUnixNano: a,
        timeUnixNano: a,
        asDouble: r,
        attributes: Et(i != null ? i : {})
    })
}
var ve = ne("url"),
    we = ne("serviceName"),
    _e = ne("logger");
class Ja {
    constructor(e, n, r) {
        Object.defineProperty(this, ve, {
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, we, {
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, _e, {
            writable: !0,
            value: void 0
        }), T(this, ve)[ve] = e, T(this, we)[we] = n, T(this, _e)[_e] = r == null ? void 0 : r.logger
    }
    async exportMetrics(e) {
        var n;
        const r = {
                resourceMetrics: [{
                    resource: {
                        attributes: [{
                            key: "service.name",
                            value: {
                                stringValue: T(this, we)[we]
                            }
                        }]
                    },
                    scopeMetrics: [{
                        scope: {
                            name: "open-telemetry-mini-client",
                            version: "0.3.3",
                            attributes: []
                        },
                        metrics: e
                    }]
                }]
            },
            o = await fetch(T(this, ve)[ve], {
                method: "POST",
                keepalive: !0,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(r)
            });
        if ((n = T(this, _e)[_e]) === null || n === void 0 || n.log({
                status: o.status
            }), !o.ok) {
            if (o.status === 400) {
                const a = await o.text();
                throw new ke("Invalid OpenTelemetry Metrics: ".concat(a))
            }
            if (o.status === 429 || o.status === 503) {
                const a = await o.json(),
                    i = o.headers.get("Retry-After"),
                    s = i ? {
                        seconds: Number(i)
                    } : void 0;
                throw new ke("Server did not accept metrics", {
                    errorData: a,
                    retryAfter: s,
                    metrics: e
                })
            }
            throw new ke("Server responded with ".concat(o.status))
        }
    }
}
class ke extends Error {
    constructor(e, n) {
        super(e), this.metadata = void 0, this.name = "OpenTelemetryClientError", this.metadata = n
    }
}
const Xa = "https://otlp-http-production.shopifysvc.com/v1/metrics",
    Ya = "portable_wallets";
class Za {
    constructor(e) {
        this.exporter = e
    }
    async exportMetrics(e) {
        var n;
        try {
            await this.exporter.exportMetrics(e)
        } catch (r) {
            if (r instanceof ke) {
                const o = (n = r.metadata) == null ? void 0 : n.retryAfter;
                if (o) {
                    await new Promise(a => {
                        setTimeout(() => {
                            this.exportMetrics(e), a()
                        }, o.seconds * 1e3)
                    });
                    return
                }
            }
            throw r
        }
    }
}
const Qa = new Ja(Xa, Ya),
    Ca = new Za(Qa),
    Ue = new Wa({
        exporter: Ca
    });

function eo() {
    J({
        event: L.InitCalled
    })
}

function to(t) {
    J({
        event: t === "success" ? L.InitSuccess : L.InitFailed
    })
}

function ro({
    instrument: t,
    measurement: e
}) {
    e != null && (Ue.histogram({
        name: "portable_wallets_instrument_load_time",
        value: e,
        attributes: {
            instrument: t
        },
        unit: "ms"
    }), Ue.exportMetrics()), J({
        event: L.InstrumentLoaded,
        instrumentId: t,
        ttl: e
    })
}

function no({
    instrument: t,
    result: e
}) {
    Ue.counter({
        name: "portable_wallets_sheet_clicked",
        value: 1,
        attributes: {
            instrument: t,
            result: e
        }
    }), Ue.exportMetrics(), J({
        event: e === "success" ? L.ClickSheetSuccess : L.ClickSheetFailed,
        instrumentId: t
    })
}

function ao(t, e) {
    J({
        event: "".concat(L.UpdateFailed, "-").concat(e),
        instrumentId: t
    })
}
const D = {
    initStarted: eo,
    initCompleted: to,
    instrumentLoaded: ro,
    sheetClicked: no,
    updateFailed: ao
};
class oo extends We {
    constructor() {
        super(...arguments), w(this, "button"), w(this, "buyNowText", "")
    }
    static get observedAttributes() {
        return ["disabled"]
    }
    async connectedCallback() {
        try {
            this.buyNowText = this.i18n.translate("instruments_copy.checkout.buy_now")
        } catch (e) {
            if (this.i18n === void 0) {
                S.leaveBreadcrumb("BuyItNowButton: tried to render without i18n", "error");
                return
            } else S.notify(e)
        }
        this.render()
    }
    attributeChangedCallback(e, n, r) {
        n !== r && e === "disabled" && this.button && (r ? this.button.setAttribute("aria-disabled", "true") : this.button.removeAttribute("aria-disabled"))
    }
    async handleClick() {
        if (!(this.disabled || !this.button || this.button.getAttribute("aria-disabled"))) try {
            const e = await _t({
                element: this.button,
                attribute: "aria-disabled",
                instrumentName: A.BuyItNow,
                onError: () => bt(this.i18n),
                dataSource: this.dataSource
            });
            if (!e) throw new Error("[".concat(A.BuyItNow, "] received invalid cart"));
            D.sheetClicked({
                instrument: A.BuyItNow,
                result: "success"
            }), window.location.assign(e.checkoutUrl)
        } catch (e) {
            S.notify(e), D.sheetClicked({
                instrument: A.BuyItNow,
                result: "failed"
            })
        }
    }
    render() {
        var e;
        this.button || (this.button = document.createElement("button"), this.button.type = "button"), this.button.textContent = this.buyNowText, this.button.className = vt.UNBRANDED_BUTTON, this.disabled && this.button.setAttribute("aria-disabled", "true"), this.button.onclick = () => this.handleClick(), this.appendChild(this.button), (e = this.onRendered) == null || e.call(this)
    }
}
class St {
    static walletName() {
        throw new Error("Must define walletName for WalletInstrument subclass")
    }
    constructor(e) {}
    createWebComponent({
        accessToken: e,
        country: n,
        disabled: r = "false",
        walletParams: o,
        dataSource: a,
        i18n: i,
        apiClient: s
    }) {
        const c = this.getWebComponentName();
        X(c, this.getWebComponentClass(), {
            shouldAddToWindow: !0
        });
        const l = document.createElement(c),
            h = _({
                "access-token": e,
                "buyer-country": n,
                disabled: r
            }, o);
        for (const [m, b] of Object.entries(h)) m && l.setAttribute(m, b || "");
        return l.dataSource = a, l.apiClient = s, l.i18n = i, l
    }
    getWalletParams() {
        return {}
    }
    loadWalletSDK() {
        return Promise.resolve()
    }
    shouldLoadWallet() {
        return !0
    }
    isPartnerSDKEligible() {
        return !0
    }
}
class io extends St {
    static walletName() {
        return "buy_it_now"
    }
    getWebComponentName() {
        return "shopify-buy-it-now-button"
    }
    getInstrumentName() {
        return A.BuyItNow
    }
    getWebComponentClass() {
        return oo
    }
}
class so extends We {
    constructor() {
        super(...arguments), w(this, "sdkButtonsComponent")
    }
    async connectedCallback() {
        var e, n;
        this.sdkButtonsComponent = (n = (e = window.paypal).Buttons) == null ? void 0 : n.call(e, {
            fundingSource: "paypal",
            style: {
                color: "gold",
                label: "paypal",
                height: 54
            }
        }), this.render()
    }
    disconnectedCallback() {
        this.sdkButtonsComponent && this.sdkButtonsComponent.close()
    }
    render() {
        var e;
        const n = document.createElement("div");
        (e = this.sdkButtonsComponent) == null || e.render(n), this.appendChild(n)
    }
}
const co = "https://www.paypal.com/sdk/js",
    uo = "AftTXN0blRv0ltUpXOXhTWgUgyoMXw83iV54WUwm2VFXevA-_z4oWajYoxeWwZ-Y_mK1kxIBBXG0HqQ1";
class lo extends St {
    constructor(e) {
        super(e), w(this, "merchantId");
        const n = e == null ? void 0 : e.wallet_params;
        this.merchantId = n.merchantId
    }
    static walletName() {
        return "paypal"
    }
    getWebComponentName() {
        return "shopify-paypal-button"
    }
    getInstrumentName() {
        return A.PayPal
    }
    getWebComponentClass() {
        return so
    }
    loadWalletSDK() {
        const e = document.createElement("script"),
            n = new URL(co);
        return n.searchParams.set("client-id", uo), n.searchParams.set("merchant-id", this.merchantId), e.setAttribute("src", n.toString()), new Promise((r, o) => {
            e.onload = () => r(), e.onerror = a => {
                document.body.removeChild(e), o(a)
            }, document.body.appendChild(e)
        })
    }
    shouldLoadWallet() {
        return !0
    }
    isPartnerSDKEligible() {
        var e, n;
        return !!((n = (e = window == null ? void 0 : window.paypal) == null ? void 0 : e.Buttons) != null && n.call(e).isEligible())
    }
}
const fo = ".apple-pay-button{background-size:100% 60%;background-repeat:no-repeat;background-position:50% 50%}@supports (-webkit-appearance: -apple-pay-button){.apple-pay-button{background-size:auto;background-repeat:repeat;background-position:0;-webkit-appearance:-apple-pay-button!important;-moz-appearance:-apple-pay-button!important;appearance:-apple-pay-button!important;-apple-pay-button-type:plain;height:44px}}\n",
    pt = {
        UK: V.Gb,
        JA: V.Jp
    },
    en = ["AS", "GU", "MP", "PR", "VI"];
en.forEach(t => {
    pt[t] = V.Us
});

function po(t) {
    var e, n;
    const r = t.countryCode,
        o = {
            firstName: t.givenName || void 0,
            lastName: t.familyName || void 0,
            address1: (e = t == null ? void 0 : t.addressLines) == null ? void 0 : e[0],
            address2: ((n = t == null ? void 0 : t.addressLines) == null ? void 0 : n[1]) || void 0,
            city: t.locality || void 0,
            postalCode: t.postalCode || void 0,
            zoneCode: t.administrativeArea || t.subLocality || void 0,
            countryCode: mo(t.countryCode),
            phone: t.phoneNumber || void 0
        };
    return o.countryCode === V.Hk && (o.postalCode = void 0, o.zoneCode = t.postalCode), r && en.includes(r) && (o.zoneCode = r), o.lastName || (o.lastName = o.firstName), o
}

function ho(t) {
    return Object.values(V).includes(t)
}

function mo(t) {
    if (!t) return V.Zz;
    const e = t.toUpperCase();
    return ho(e) ? e : Object.keys(pt).includes(e) ? pt[e] : V.Zz
}

function sr(t, e) {
    return ee(t, [e])[0]
}

function cr({
    subtotal: t,
    selectedDeliveryOptions: e,
    duties: n,
    taxes: r,
    discountAllocations: o,
    i18n: a
}) {
    const i = ee(a.translate("order_summary.subtotal"), [t]),
        s = ee(a.translate("order_summary.shipping"), e.map(m => ({
            amount: m.estimatedCost.amount
        }))),
        c = ee(a.translate("order_summary.duties"), [n]),
        l = ee(a.translate("order_summary.taxes"), [r]),
        h = o.flatMap(m => ee(a.translate("order_summary.discount"), [m.discountedAmount], !0));
    return [...i, ...s, ...c, ...l, ...h]
}

function ee(t, e, n = !1) {
    return e.filter(r => (r == null ? void 0 : r.amount) && (r == null ? void 0 : r.amount) !== 0).map(r => ({
        label: t,
        amount: n ? "-".concat(lt(r.amount)) : lt(r.amount)
    }))
}

function yo(t) {
    return t.map(e => {
        var n;
        return {
            label: e.title,
            amount: lt(e.estimatedCost.amount),
            identifier: e.handle,
            detail: (n = e.description) != null ? n : ""
        }
    })
}
async function go({
    cartId: t,
    partialStreetAddress: e,
    cartClient: n,
    instrumentName: r,
    onError: o
}) {
    try {
        if (!t) throw new Error("[".concat(r, "] provided no cart ID when updating buyer identity"));
        if (!e) throw new Error("[".concat(r, "] provided no address when updating buyer identity"));
        if (!n) throw new Error("[".concat(r, "] provided invalid cart client when updating buyer identity"));
        return await n.updateCartBuyerIdentity({
            cartId: t,
            partialStreetAddress: e
        })
    } catch (a) {
        return D.updateFailed(r, "updateBuyerIdentity"), S.notify(a), o(), null
    }
}
async function bo({
    cartId: t,
    cartClient: e,
    instrumentName: n,
    onError: r,
    selectedDeliveryOptions: o
}) {
    try {
        if (!t) throw new Error("[".concat(n, "] provided no cart ID when updating shipping method"));
        if (!e) throw new Error("[".concat(n, "] provided invalid cart client when updating shipping method"));
        return await e.updateSelectedDeliveryOptions(t, o)
    } catch (a) {
        return D.updateFailed(n, "updateSelectedDeliveryOptions"), S.notify(a), r(), null
    }
}
const $e = "GraphQL Client",
    ur = 0,
    lr = 3,
    tn = "An error occurred while fetching from the API. Review 'graphQLErrors' for details.",
    rn = "Response returned unexpected Content-Type:",
    nn = "An unknown error has occurred. The API did not return a data object or any errors in its response.",
    ht = {
        json: "application/json",
        multipart: "multipart/mixed"
    },
    vo = 1e3,
    wo = [429, 503],
    an = /@(defer)\b/i,
    dr = "\r\n",
    _o = /boundary="?([^=";]+)"?/i,
    fr = dr + dr;

function W(t) {
    return t.startsWith("".concat($e)) ? t : "".concat($e, ": ").concat(t)
}

function te(t) {
    return t instanceof Error ? t.message : JSON.stringify(t)
}

function pr(t) {
    return t instanceof Error && t.cause ? t.cause : void 0
}

function on({
    client: t,
    retries: e
}) {
    if (e !== void 0 && (typeof e != "number" || e < ur || e > lr)) throw new Error("".concat(t, ': The provided "retries" value (').concat(e, ") is invalid - it cannot be less than ").concat(ur, " or greater than ").concat(lr))
}

function I(t, e) {
    return e && (typeof e != "object" || Array.isArray(e) || typeof e == "object" && Object.keys(e).length > 0) ? {
        [t]: e
    } : {}
}

function sn(t, e) {
    if (t.length === 0) return e;
    const n = {
        [t.pop()]: e
    };
    return t.length === 0 ? n : sn(t, n)
}

function cn(t, e) {
    return Object.keys(e || {}).reduce((n, r) => (typeof e[r] == "object" || Array.isArray(e[r])) && t[r] ? (n[r] = cn(t[r], e[r]), n) : (n[r] = e[r], n), Array.isArray(t) ? [...t] : _({}, t))
}

function Eo(t) {
    return t.reduce((e, n, r) => r === 0 ? _({}, n) : cn(e, n), {})
}

function So({
    headers: t,
    url: e,
    fetchApi: n = fetch,
    retries: r = 0,
    logger: o
}) {
    on({
        client: $e,
        retries: r
    });
    const a = {
            headers: t,
            url: e,
            retries: r
        },
        i = Oo(o),
        s = To(n, i),
        c = Ao(s, a),
        l = Mo(c),
        h = Ro(c);
    return {
        config: a,
        fetch: c,
        request: l,
        requestStream: h
    }
}
async function Po(t) {
    return new Promise(e => setTimeout(e, t))
}

function Oo(t) {
    return e => {
        t && t(e)
    }
}
async function un(t) {
    const {
        errors: e,
        data: n,
        extensions: r
    } = await t.json();
    return _(_(_({}, I("data", n)), I("extensions", r)), e || !n ? {
        errors: x(_({
            networkStatusCode: t.status,
            message: W(e ? tn : nn)
        }, I("graphQLErrors", e)), {
            response: t
        })
    } : {})
}

function To(t, e) {
    const n = async (r, o, a) => {
        const i = o + 1,
            s = a + 1;
        let c;
        try {
            if (c = await t(...r), e({
                    type: "HTTP-Response",
                    content: {
                        requestParams: r,
                        response: c
                    }
                }), !c.ok && wo.includes(c.status) && i <= s) throw new Error;
            return c
        } catch (l) {
            if (i <= s) return await Po(vo), e({
                type: "HTTP-Retry",
                content: {
                    requestParams: r,
                    lastResponse: c,
                    retryAttempt: o,
                    maxRetries: a
                }
            }), n(r, i, a);
            throw new Error(W("".concat(a > 0 ? "Attempted maximum number of ".concat(a, " network retries. Last message - ") : "").concat(te(l))))
        }
    };
    return n
}

function Ao(t, {
    url: e,
    headers: n,
    retries: r
}) {
    return async (o, a = {}) => {
        const {
            variables: i,
            headers: s,
            url: c,
            retries: l
        } = a, h = JSON.stringify({
            query: o,
            variables: i
        });
        on({
            client: $e,
            retries: l
        });
        const m = [c != null ? c : e, {
            method: "POST",
            headers: _(_({}, n), s),
            body: h
        }];
        return t(m, 1, l != null ? l : r)
    }
}

function Mo(t) {
    return async (...e) => {
        if (an.test(e[0])) throw new Error(W("This operation will result in a streamable response - use requestStream() instead."));
        try {
            const n = await t(...e),
                {
                    status: r,
                    statusText: o
                } = n,
                a = n.headers.get("content-type") || "";
            return n.ok ? a.includes(ht.json) ? un(n) : {
                errors: {
                    networkStatusCode: r,
                    message: W("".concat(rn, " ").concat(a)),
                    response: n
                }
            } : {
                errors: {
                    networkStatusCode: r,
                    message: W(o),
                    response: n
                }
            }
        } catch (n) {
            return {
                errors: {
                    message: te(n)
                }
            }
        }
    }
}

function Io(t) {
    return Z(this, null, function*() {
        if (t.body[Symbol.asyncIterator]) try {
            for (var e = ae(t.body), n, r, o; n = !(r = yield new B(e.next())).done; n = !1) yield r.value.toString()
        } catch (a) {
            o = [a]
        } finally {
            try {
                n && (r = e.return) && (yield new B(r.call(e)))
            } finally {
                if (o) throw o[0]
            }
        } else {
            const a = t.body.getReader(),
                i = new TextDecoder;
            let s;
            try {
                for (; !(s = yield new B(a.read())).done;) yield i.decode(s.value)
            } finally {
                a.cancel()
            }
        }
    })
}

function No(t, e) {
    return {
        [Symbol.asyncIterator]() {
            return Z(this, null, function*() {
                try {
                    let i = "";
                    try {
                        for (var n = ae(t), r, o, a; r = !(o = yield new B(n.next())).done; r = !1) {
                            const s = o.value;
                            if (i += s, i.indexOf(e) > -1) {
                                const c = i.lastIndexOf(e),
                                    l = i.slice(0, c).split(e).filter(h => h.trim().length > 0).map(h => h.slice(h.indexOf(fr) + fr.length).trim());
                                l.length > 0 && (yield l), i = i.slice(c + e.length), i.trim() === "--" && (i = "")
                            }
                        }
                    } catch (s) {
                        a = [s]
                    } finally {
                        try {
                            r && (o = n.return) && (yield new B(o.call(n)))
                        } finally {
                            if (a) throw a[0]
                        }
                    }
                } catch (i) {
                    throw new Error("Error occured while processing stream payload - ".concat(te(i)))
                }
            })
        }
    }
}

function Ro(t) {
    return async (...e) => {
        var n;
        if (!an.test(e[0])) throw new Error(W("This operation does not result in a streamable response - use request() instead."));
        try {
            const r = await t(...e),
                {
                    status: o,
                    statusText: a
                } = r;
            if (!r.ok) throw new Error(a, {
                cause: r
            });
            const i = r.headers.get("content-type") || "";
            if (Object.values(ht).every(b => !i.includes(b))) throw new Error("".concat(rn, " ").concat(i), {
                cause: r
            });
            if (i.includes(ht.json)) return {
                [Symbol.asyncIterator]() {
                    return Z(this, null, function*() {
                        const b = yield new B(un(r));
                        yield x(_({}, b), {
                            hasNext: !1
                        })
                    })
                }
            };
            const s = (i != null ? i : "").match(_o),
                c = "--".concat(s ? s[1] : "-");
            if (!((n = r.body) != null && n.getReader) && !r.body[Symbol.asyncIterator]) throw new Error("API multipart response did not return an iterable body", {
                cause: r
            });
            const l = Io(r);
            let h = {},
                m;
            return {
                [Symbol.asyncIterator]() {
                    return Z(this, null, function*() {
                        var b, p;
                        try {
                            let y = !0;
                            try {
                                for (var g = ae(No(l, c)), u, d, f; u = !(d = yield new B(g.next())).done; u = !1) {
                                    const P = d.value.map(O => {
                                        try {
                                            return JSON.parse(O)
                                        } catch (k) {
                                            throw new Error("Error in parsing multipart response - ".concat(te(k)))
                                        }
                                    }).map(O => {
                                        const {
                                            data: k,
                                            path: R,
                                            hasNext: K,
                                            extensions: At,
                                            errors: Mt
                                        } = O;
                                        return x(_(_({
                                            data: k && R ? sn(R, k) : k || {}
                                        }, I("errors", Mt)), I("extensions", At)), {
                                            hasNext: K
                                        })
                                    });
                                    m = (p = (b = P.find(O => O.extensions)) == null ? void 0 : b.extensions) != null ? p : m;
                                    const E = P.map(({
                                        errors: O
                                    }) => O).filter(O => O && O.length > 0).flat();
                                    if (h = Eo([h, ...P.map(({
                                            data: O
                                        }) => O)]), y = P.slice(-1)[0].hasNext, E.length > 0) throw new Error(tn, {
                                        cause: {
                                            graphQLErrors: E
                                        }
                                    });
                                    if (Object.keys(h).length === 0) throw new Error(nn);
                                    yield x(_(_({}, I("data", h)), I("extensions", m)), {
                                        hasNext: y
                                    })
                                }
                            } catch (v) {
                                f = [v]
                            } finally {
                                try {
                                    u && (d = g.return) && (yield new B(d.call(g)))
                                } finally {
                                    if (f) throw f[0]
                                }
                            }
                            if (y) throw new Error("Response stream terminated unexpectedly")
                        } catch (y) {
                            const v = pr(y);
                            yield x(_(_({}, I("data", h)), I("extensions", m)), {
                                errors: x(_({
                                    message: W(te(y)),
                                    networkStatusCode: o
                                }, I("graphQLErrors", v == null ? void 0 : v.graphQLErrors)), {
                                    response: r
                                }),
                                hasNext: !1
                            })
                        }
                    })
                }
            }
        } catch (r) {
            return {
                [Symbol.asyncIterator]() {
                    return Z(this, null, function*() {
                        const o = pr(r);
                        yield {
                            errors: _(_({
                                message: W(te(r))
                            }, I("networkStatusCode", o == null ? void 0 : o.status)), I("response", o)),
                            hasNext: !1
                        }
                    })
                }
            }
        }
    }
}
const xo = "mutation cartCreate($input:CartInput!$country:CountryCode$language:LanguageCode)@inContext(country:$country language:$language){cartCreate(input:$input){cart{id checkoutUrl cost{totalAmount{amount}}lines(first:10){edges{node{quantity cost{totalAmount{amount currencyCode}}}}}deliveryGroups(first:10){edges{node{id selectedDeliveryOption{estimatedCost{amount currencyCode}}deliveryOptions{code title description estimatedCost{amount currencyCode}handle}}}}}errors:userErrors{...on CartUserError{message field code}}}}",
    Do = "mutation cartBuyerIdentityUpdate($cartId:ID!$buyerIdentity:CartBuyerIdentityInput!$country:CountryCode$language:LanguageCode)@inContext(country:$country language:$language){cartBuyerIdentityUpdate(cartId:$cartId buyerIdentity:$buyerIdentity){cart{id buyerIdentity{deliveryAddressPreferences{...on MailingAddress{address1 address2 city zip province phone country firstName lastName}}}deliveryGroups(first:10){edges{node{id selectedDeliveryOption{code title description estimatedCost{amount currencyCode}}deliveryOptions{code title description estimatedCost{amount currencyCode}handle}}}}cost{subtotalAmount{amount currencyCode}totalAmount{amount currencyCode}totalTaxAmount{amount currencyCode}totalDutyAmount{amount currencyCode}}discountAllocations{discountedAmount{amount currencyCode}}lines(first:10){edges{node{quantity cost{totalAmount{amount currencyCode}}}}}}errors:userErrors{...on CartUserError{message field code}}}}",
    ko = "mutation cartSelectedDeliveryOptionsUpdate($cartId:ID!$selectedDeliveryOptions:[CartSelectedDeliveryOptionInput!]!$country:CountryCode=CA$language:LanguageCode=EN)@inContext(country:$country language:$language){cartSelectedDeliveryOptionsUpdate(cartId:$cartId selectedDeliveryOptions:$selectedDeliveryOptions){cart{id buyerIdentity{deliveryAddressPreferences{...on MailingAddress{address1 address2 city zip province phone country firstName lastName}}}deliveryGroups(first:10){edges{node{id selectedDeliveryOption{estimatedCost{amount currencyCode}handle}deliveryOptions{code title description estimatedCost{amount currencyCode}handle}}}}cost{subtotalAmount{amount currencyCode}totalAmount{amount}totalTaxAmount{amount currencyCode}totalDutyAmount{amount currencyCode}}discountAllocations{discountedAmount{amount currencyCode}}lines(first:10){edges{node{quantity cost{totalAmount{amount currencyCode}}}}}}errors:userErrors{...on CartUserError{message field code}}}}",
    Bo = "mutation applePaySessionCreate{applePaySessionCreate{...@defer{applePaySession{body}}}}",
    Lo = "2023-07";
class Pt {
    constructor({
        accessToken: e,
        country: n,
        locale: r,
        apiVersion: o = Lo
    }) {
        if (w(this, "client"), w(this, "country"), w(this, "locale"), !e) throw new Error("StorefrontApiClient constructed with no access token");
        if (!n) throw new Error("StorefrontApiClient constructed with no buyer country");
        if (!r) throw new Error("StorefrontApiClient constructed with no locale");
        this.country = n, this.locale = r;
        const a = "/api/".concat(o, "/graphql.json");
        this.client = So({
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "X-Shopify-Storefront-Access-Token": e,
                "X-SDK-Variant": "portable-wallets"
            },
            url: a,
            retries: 0,
            logger: i => {
                if (i.type === "HTTP-Response") {
                    const [s, c] = i.content.requestParams;
                    S.leaveBreadcrumb("POST: ".concat(s), "request", {
                        statusCode: i.content.response.status,
                        statusText: i.content.response.statusText,
                        url: s,
                        method: c == null ? void 0 : c.method,
                        headers: c == null ? void 0 : c.headers,
                        body: c == null ? void 0 : c.body
                    })
                }
            }
        })
    }
    async createCart(e) {
        var n;
        const r = this.formatLanguage(this.locale),
            {
                errors: o,
                data: a
            } = await this.client.request(xo, {
                variables: {
                    input: {
                        lines: {
                            merchandiseId: e.merchandiseId,
                            quantity: e.quantity,
                            sellingPlanId: e.sellingPlanId,
                            attributes: Object.entries((n = e.lineItemProperties) != null ? n : {}).map(([i, s]) => ({
                                key: i,
                                value: s
                            }))
                        }
                    },
                    country: this.country,
                    language: r
                }
            });
        if (o && this.onError(o), a) return this.parseCartResponse(a.cartCreate.cart);
        throw new Error("createCart query returned nothing")
    }
    async updateCartBuyerIdentity(e) {
        const {
            cartId: n,
            partialStreetAddress: r
        } = e, o = this.formatLanguage(this.locale), {
            data: a,
            errors: i
        } = await this.client.request(Do, {
            variables: {
                cartId: n,
                country: this.country,
                language: o,
                buyerIdentity: {
                    countryCode: r.countryCode,
                    phone: r.phone,
                    deliveryAddressPreferences: [{
                        deliveryAddress: {
                            address1: r.address1,
                            address2: r.address2,
                            city: r.city,
                            zip: r.postalCode,
                            province: r.zoneCode,
                            phone: r.phone,
                            country: r.countryCode,
                            firstName: r.firstName,
                            lastName: r.lastName
                        }
                    }]
                }
            }
        });
        if (i && this.onError(i), a) return this.parseCartResponse(a.cartBuyerIdentityUpdate.cart);
        throw new Error("updateCartBuyerIdentity query returned nothing")
    }
    async updateSelectedDeliveryOptions(e, n) {
        const r = this.formatLanguage(this.locale),
            {
                data: o,
                errors: a
            } = await this.client.request(ko, {
                variables: {
                    cartId: e,
                    selectedDeliveryOptions: [{
                        deliveryGroupId: n.deliveryGroupId,
                        deliveryOptionHandle: n.deliveryOptionHandle
                    }],
                    country: this.country,
                    language: r
                }
            });
        if (a && this.onError(a), o) return this.parseCartResponse(o.cartSelectedDeliveryOptionsUpdate.cart);
        throw new Error("cartSelectedDeliveryOptionUpdate mutation returned nothing")
    }
    async applePaySessionCreate() {
        var e, n, r;
        const o = await this.client.requestStream(Bo);
        try {
            for (var a = ae(o), i, s, c; i = !(s = await a.next()).done; i = !1) {
                const l = s.value;
                l.errors && this.onError(l.errors);
                const h = (r = (n = (e = l.data) == null ? void 0 : e.applePaySessionCreate) == null ? void 0 : n.applePaySession) == null ? void 0 : r.body;
                if (h) return h
            }
        } catch (l) {
            c = [l]
        } finally {
            try {
                i && (s = a.return) && await s.call(a)
            } finally {
                if (c) throw c[0]
            }
        }
        throw new Error("No response")
    }
    onError(e) {
        if (!e) return;
        S.leaveBreadcrumb("GraphQL errors", "error", e);
        const n = e != null && e.networkStatusCode ? "HTTP status ".concat(e.networkStatusCode) : e.message;
        throw new Error("GraphQL query failed: ".concat(n))
    }
    formatLanguage(e) {
        return e.includes("-") ? e.split("-")[0].toUpperCase() : e.toUpperCase()
    }
    parseCartResponse(e) {
        const n = e.lines.edges.map(a => {
                const i = a.node;
                return {
                    quantity: i.quantity,
                    totalAmount: {
                        amount: i.cost.totalAmount.amount,
                        currencyCode: i.cost.totalAmount.currencyCode
                    }
                }
            }),
            r = [],
            o = [];
        return e.deliveryGroups.edges.forEach(a => {
            const i = a.node.selectedDeliveryOption;
            o.push(this.buildDeliveryOption(i, a.node.id)), a.node.deliveryOptions.forEach(s => {
                r.push(this.buildDeliveryOption(s, a.node.id))
            })
        }), {
            id: e.id,
            totalAmount: e.cost.totalAmount,
            subtotalAmount: e.cost.subtotalAmount,
            totalTaxAmount: e.cost.totalTaxAmount,
            totalDutyAmount: e.cost.totalDutyAmount,
            discountAllocations: e.discountAllocations,
            lineItems: n,
            deliveryOptions: r,
            selectedDeliveryOptions: o,
            checkoutUrl: e.checkoutUrl
        }
    }
    buildDeliveryOption(e, n) {
        return {
            title: e.title,
            estimatedCost: {
                amount: e.estimatedCost.amount,
                currencyCode: e.estimatedCost.currencyCode
            },
            handle: e.handle,
            deliveryGroupId: n,
            description: e.description
        }
    }
}
const Uo = 6;
class $o {
    constructor({
        accessToken: e,
        buyerCountry: n,
        button: r,
        i18n: o,
        merchantName: a,
        paymentRequest: i,
        dataSource: s,
        apiClient: c
    }) {
        w(this, "name", A.ApplePay), w(this, "accessToken"), w(this, "button"), w(this, "buyerCountry"), w(this, "cart"), w(this, "apiClient"), w(this, "dataSource"), w(this, "i18n"), w(this, "merchantName"), w(this, "session"), w(this, "begin", () => {
            this.session.begin()
        }), w(this, "onvalidatemerchant", async () => {
            try {
                const l = this.getMerchantSession(),
                    h = await _t({
                        element: this.button,
                        attribute: "aria-disabled",
                        instrumentName: A.ApplePay,
                        onError: () => this.terminateSession(),
                        dataSource: this.dataSource
                    });
                this.cart = h, this.session.completeMerchantValidation(await l)
            } catch (l) {
                S.notify(l), this.terminateSession()
            }
        }), w(this, "onshippingcontactselected", async l => {
            try {
                const h = po(l.shippingContact),
                    m = await go({
                        cartId: this.cart.id,
                        partialStreetAddress: h,
                        cartClient: this.apiClient,
                        instrumentName: this.name,
                        onError: this.terminateSession
                    });
                if (!m) throw new Error("[".concat(A.ApplePay, "] unable to update buyer identity"));
                this.cart = m, this.completeShippingContactSelection()
            } catch (h) {
                S.notify(h), this.terminateSession()
            }
        }), w(this, "onshippingmethodselected", async l => {
            var h;
            try {
                const m = await bo({
                    cartId: this.cart.id,
                    cartClient: this.apiClient,
                    instrumentName: this.name,
                    onError: this.terminateSession,
                    selectedDeliveryOptions: {
                        deliveryGroupId: (h = this.cart.selectedDeliveryOptions[0]) == null ? void 0 : h.deliveryGroupId,
                        deliveryOptionHandle: l.shippingMethod.identifier
                    }
                });
                if (!m) throw new Error("[".concat(A.ApplePay, "] unable to update shipping method"));
                this.cart = m, this.completeShippingMethodSelection()
            } catch (m) {
                S.notify(m), this.terminateSession()
            }
        }), w(this, "terminateSession", () => {
            this.session.abort(), Hn(this.i18n, "apple_pay"), this.button.removeAttribute("aria-disabled")
        }), w(this, "completeShippingContactSelection", () => {
            this.session.completeShippingContactSelection({
                errors: [],
                newTotal: sr(this.merchantName, this.cart.totalAmount),
                newLineItems: cr({
                    subtotal: this.cart.subtotalAmount,
                    selectedDeliveryOptions: this.cart.selectedDeliveryOptions,
                    duties: this.cart.totalDutyAmount,
                    taxes: this.cart.totalTaxAmount,
                    discountAllocations: this.cart.discountAllocations,
                    i18n: this.i18n
                }),
                newShippingMethods: yo(this.cart.deliveryOptions)
            })
        }), w(this, "completeShippingMethodSelection", () => {
            this.session.completeShippingMethodSelection({
                newTotal: sr(this.merchantName, this.cart.totalAmount),
                newLineItems: cr({
                    subtotal: this.cart.subtotalAmount,
                    selectedDeliveryOptions: this.cart.selectedDeliveryOptions,
                    duties: this.cart.totalDutyAmount,
                    taxes: this.cart.totalTaxAmount,
                    discountAllocations: this.cart.discountAllocations,
                    i18n: this.i18n
                })
            })
        }), this.session = new ApplePaySession(Uo, i), this.accessToken = e, this.buyerCountry = n, this.button = r, this.cart = null, this.apiClient = c, this.dataSource = s, this.i18n = o, this.merchantName = a, this.session.onvalidatemerchant = this.onvalidatemerchant, this.session.onshippingcontactselected = this.onshippingcontactselected, this.session.onshippingmethodselected = this.onshippingmethodselected
    }
    async getMerchantSession() {
        const e = await new Pt({
            accessToken: this.accessToken,
            country: this.buyerCountry,
            locale: this.i18n.locale,
            apiVersion: "unstable"
        }).applePaySessionCreate();
        return JSON.parse(e)
    }
}
class jo extends We {
    constructor() {
        super(...arguments), w(this, "fragment", null), w(this, "button", null), w(this, "cart", null)
    }
    static get observedAttributes() {
        return ["disabled"]
    }
    get merchantName() {
        var e;
        return (e = this.getAttribute("merchant-name")) != null ? e : ""
    }
    async connectedCallback() {
        this.render()
    }
    attributeChangedCallback(e, n, r) {
        n !== r && e === "disabled" && this.button && this.button.setAttribute("aria-disabled", r)
    }
    async handleClick(e) {
        var n, r;
        if (e.preventDefault(), !(this.disabled || !this.button || this.button.hasAttribute("aria-disabled"))) try {
            const o = JSON.parse((r = (n = document.querySelector("script#apple-pay-shop-capabilities")) == null ? void 0 : n.textContent) != null ? r : "null");
            if (!o) throw new Error("missing payment request");
            const a = new $o({
                accessToken: this.accessToken,
                buyerCountry: this.buyerCountry,
                button: this.button,
                i18n: this.i18n,
                merchantName: this.merchantName,
                paymentRequest: o,
                dataSource: this.dataSource,
                apiClient: this.apiClient
            });
            if (!a) throw new Error("missing ApplePaySession");
            a.begin(), D.sheetClicked({
                instrument: A.ApplePay,
                result: "success"
            })
        } catch (o) {
            S.notify(o), D.sheetClicked({
                instrument: A.ApplePay,
                result: "failed"
            })
        }
    }
    render() {
        var e;
        if (this.button || (this.button = document.createElement("button"), this.button.setAttribute("aria-label", this.i18n.translate("brand.apple_pay")), this.button.onclick = n => this.handleClick(n), this.button.className = "apple-pay-button ".concat(vt.BRANDED_BUTTON)), this.disabled && this.button.setAttribute("aria-disabled", "true"), !this.fragment) {
            this.fragment = document.createDocumentFragment();
            const n = document.createElement("style");
            n.innerHTML = fo, this.fragment.append(n, this.button), this.appendChild(this.fragment), (e = this.onRendered) == null || e.call(this)
        }
    }
}
class qo extends St {
    constructor(e, n) {
        var r, o;
        super(e), w(this, "buyerCountry"), w(this, "companyFieldRequired"), w(this, "merchantName"), this.buyerCountry = n.country;
        const a = e == null ? void 0 : e.wallet_params;
        this.companyFieldRequired = (r = a.companyRequired) != null ? r : !1, this.merchantName = (o = a.merchantName) != null ? o : ""
    }
    static walletName() {
        return "apple_pay"
    }
    getWebComponentName() {
        return "shopify-apple-pay-button"
    }
    getWebComponentClass() {
        return jo
    }
    getInstrumentName() {
        return A.ApplePay
    }
    getWalletParams() {
        var e;
        return {
            "merchant-name": (e = this.merchantName) != null ? e : ""
        }
    }
    applePayInIframe() {
        return typeof window > "u" || window.self !== window.top
    }
    getIsUserEligibleForApplePayInChina() {
        const e = navigator.userAgent.match(/(\((iPhone|iPad); CPU (iPhone )?OS ((\d+(_?)){1,3}))/g);
        if (!e) return !1;
        const n = e[0].match(/(\d+(_?)){1,3}/);
        if (!n) return !1;
        const [r, o] = n[0].split("_").map(a => Number(a));
        return r > 11 || r === 11 && o >= 2
    }
    isPartnerSDKEligible() {
        return window.ApplePaySession && Object.prototype.hasOwnProperty.call(window.ApplePaySession, "canMakePayments") && window.ApplePaySession.canMakePayments()
    }
    shouldLoadWallet() {
        return this.applePayInIframe() || this.companyFieldRequired || this.buyerCountry === "CN" && !this.getIsUserEligibleForApplePayInChina() ? !1 : !!window.ApplePaySession
    }
}
const Fo = [io, lo, qo],
    Ho = new Map(Fo.map(t => [t.walletName(), (e, n) => new t(e, n)]));

function ln(t, e) {
    const n = Ho.get(t.name);
    if (!n) throw new Error("Can't build wallet with name ".concat(t.name));
    return n(t, e)
}

function Go(t, e) {
    return t.map(n => ln(n, e))
}
var tt = (t => (t.ButtonDisplay = "buttonDisplay", t.LoadInstrument = "loadInstrument", t))(tt || {});

function dn() {
    var t, e;
    return !!((t = window.performance) != null && t.mark) && !!((e = window.performance) != null && e.measure)
}

function Ot(t, e) {
    return Wo(t, e), () => Vo(t, e)
}

function Wo(t, e) {
    dn() && window.performance.mark("".concat(t, "-").concat(e, "-start"))
}

function Vo(t, e) {
    var n, r;
    if (dn()) try {
        const o = "".concat(t, "-").concat(e, "-start"),
            a = "".concat(t, "-").concat(e, "-end"),
            i = "".concat(t, "-").concat(e, "-duration");
        window.performance.mark(a);
        const s = (r = window.performance.measure(i, o, a)) != null ? r : (n = window.performance.getEntriesByName(i, "measure")) == null ? void 0 : n[0],
            c = s == null ? void 0 : s.duration;
        if (c == null) {
            S.notify(new Error("Could not measure performance of ".concat(t, " ").concat(e)), {
                severity: "warning"
            });
            return
        }
        return c
    } catch (o) {
        S.notify(o);
        return
    }
}
const fn = "dynamic-checkout .wallet-button-fade-in,cart-wallet-buttons .wallet-button-fade-in{animation:animation-fade-in .3s cubic-bezier(.1,.79,1,1)}@keyframes animation-fade-in{0%{opacity:0}to{opacity:1}}button[aria-disabled=true]{opacity:.5;cursor:not-allowed}\n",
    Ko = ".shopify-payment-button__button--hidden{visibility:hidden}.shopify-payment-button__button{border-radius:4px;border:none;box-shadow:0 0 0 0 transparent;color:#fff;cursor:pointer;display:block;font-size:1em;font-weight:500;line-height:1;text-align:center;width:100%;transition:background .2s ease-in-out}.shopify-payment-button__button[disabled]{opacity:.6;cursor:default}.shopify-payment-button__button--unbranded{background-color:#1990c6;padding:1em 2em}.shopify-payment-button__button--unbranded:hover:not([disabled]){background-color:#136f99}.shopify-payment-button__more-options{background:transparent;border:0 none;cursor:pointer;display:block;font-size:1em;margin-top:1em;text-align:center;width:100%}.shopify-payment-button__more-options:hover:not([disabled]){text-decoration:underline}.shopify-payment-button__more-options[disabled]{opacity:.6;cursor:not-allowed}.shopify-payment-button__button--branded{display:flex;flex-direction:column;min-height:44px;position:relative;z-index:1}.shopify-payment-button__button--branded .shopify-cleanslate{flex:1!important;display:flex!important;flex-direction:column!important}.shopify-payment-button__button.button.loading{position:relative;color:transparent}.shopify-payment-button__button.button.loading>.loading-overlay__spinner{top:50%;left:50%;transform:translate(-50%,-50%);position:absolute;height:100%;display:flex;align-items:center}.shopify-payment-button__button.button.loading>.loading-overlay__spinner .spinner{width:-moz-fit-content;width:-webkit-fit-content;width:fit-content}.button.loading>.loading-overlay__spinner .path{stroke:#fff}.shopify-payment-button__button .loading-overlay__spinner{width:1.8rem;display:inline-block}.shopify-payment-button__button .spinner{animation:shopify-rotator 1.4s linear infinite}@keyframes shopify-rotator{0%{transform:rotate(0)}to{transform:rotate(270deg)}}.shopify-payment-button__button .path{stroke-dasharray:280;stroke-dashoffset:0;transform-origin:center;stroke:#121212;animation:shopify-dash 1.4s ease-in-out infinite}@media screen and (forced-colors: active){.shopify-payment-button__button .path{stroke:CanvasText}}@keyframes shopify-dash{0%{stroke-dashoffset:280}50%{stroke-dashoffset:75;transform:rotate(135deg)}to{stroke-dashoffset:280;transform:rotate(450deg)}}@keyframes walletsLoadingSkeleton{50%{opacity:1}75%{opacity:.5}to{opacity:1}}.shopify-payment-button__skeleton{animation:walletsLoadingSkeleton 4s ease infinite;animation-delay:-.168s;background-color:#dedede;box-sizing:border-box}\n";

function pn(t, e, n) {
    if (Ee != null && Ee.length) {
        const r = Ee.join(",");
        t.querySelectorAll(r).forEach(o => {
            n === null ? o.removeAttribute(e) : o.setAttribute(e, n)
        })
    }
}

function zo(t, e) {
    try {
        return JSON.parse(t)
    } catch (n) {
        throw new Error("[".concat(e, "] Error while parsing walletConfigs JSON: ").concat(n))
    }
}

function Jo(t) {
    return t.filter(e => e.shouldLoadWallet())
}
class Xo {
    constructor(e, n) {
        w(this, "element"), this.apiClient = n, this.element = e()
    }
    async getCart(e) {
        const n = La(this.element);
        return n ? this.apiClient.createCart(n) : Promise.reject(new Error("[".concat(e, "] unable to find product form")))
    }
}
const He = class hn extends Yr {
    constructor() {
        super(), w(this, "instanceNumber", ++hn.instanceCount), w(this, "formObserver"), w(this, "wrapper"), w(this, "i18n"), w(this, "dataSource"), this.formObserver = new qa(this, e => this.disabled = e), this.instanceNumber === 1 && (S.start(x(_({}, Er), {
            metadata: {
                shop: {
                    shopId: this.shopId
                }
            }
        })), ei())
    }
    static get observedAttributes() {
        return ["access-token", "disabled"]
    }
    async connectedCallback() {
        try {
            super.clearExistingButtons({
                expectedSkeleton: "shopify-payment-button__skeleton"
            }), this.instanceNumber === 1 && D.initStarted();
            const e = Ot(tt.ButtonDisplay, "dc:".concat(this.instanceNumber)),
                n = gt(),
                r = this.buildWalletConfigs();
            if (!(r instanceof Array)) throw new Error("[DynamicCheckout] invalid walletConfigs found");
            const o = await Zo(r, {
                country: this.buyerCountry
            });
            this.i18n = await n;
            const a = new Pt({
                    accessToken: this.accessToken,
                    country: this.buyerCountry,
                    locale: this.i18n.locale
                }),
                i = () => (this.wrapper || (this.wrapper = document.createElement("div")), this.wrapper);
            this.dataSource = new Xo(i, a);
            const s = o.createWebComponent({
                accessToken: this.accessToken,
                country: this.buyerCountry,
                disabled: String(this.disabled),
                walletParams: o.getWalletParams(),
                dataSource: this.dataSource,
                i18n: this.i18n,
                apiClient: a
            });
            if (!s) throw new Error("[DynamicCheckout] No web component found");
            const c = o.getInstrumentName();
            s.onRendered = () => {
                D.instrumentLoaded({
                    instrument: c,
                    measurement: e()
                })
            }, this.innerHTML = "", this.render(s, c), D.initCompleted("success"), this.instanceNumber === 1 && ni()
        } catch (e) {
            this.innerHTML = "", D.initCompleted("failed"), S.notify(e)
        }
    }
    attributeChangedCallback(e, n, r) {
        n !== r && pn(this, e, r)
    }
    buildWalletConfigs() {
        const e = this.walletConfigs;
        if (!e) throw new Error("[DynamicCheckout] Created dynamic checkout button with no wallet configs");
        try {
            return JSON.parse(e)
        } catch (n) {
            throw new Error("[DynamicCheckout] Error while parsing walletConfigs JSON: ".concat(n))
        }
    }
    render(e, n) {
        var r, o;
        if (!this.wrapper) throw new Error("[DynamicCheckout] tried to render with no wrapper element");
        this.formObserver.setupMutationObservers();
        const a = document.createElement("style");
        if (a.innerHTML = fn, this.wrapper.className = "wallet-button-fade-in", this.wrapper.appendChild(e), n !== A.BuyItNow) {
            const s = document.createElement("more-payment-options-link");
            s.setAttribute("buyer-country", (r = this.buyerCountry) != null ? r : ""), s.setAttribute("access-token", (o = this.accessToken) != null ? o : ""), s.dataSource = this.dataSource, s.i18n = this.i18n, s.setAttribute("disabled", String(this.disabled)), this.wrapper.appendChild(s)
        }
        const i = new DocumentFragment;
        i.appendChild(a), i.appendChild(this.wrapper), this.appendChild(i)
    }
};
w(He, "instanceCount", 0);
let mt = He;

function Yo(t) {
    var e;
    if (!wr()) return null;
    const n = (e = jn()) == null ? void 0 : e.toLowerCase();
    return n ? t.find(r => r.getInstrumentName().toLowerCase().includes(n)) : null
}
async function Zo(t, e) {
    var n;
    t.push({
        name: "buy_it_now",
        wallet_params: {}
    });
    const r = Co(Qo(t, e)),
        o = (n = Yo(r)) != null ? n : r[0];
    if (await o.loadWalletSDK(), !o.isPartnerSDKEligible()) throw new Error("Selected wallet SDK ineligible");
    return o
}

function Qo(t, e) {
    return t.map(n => ln(n, e))
}

function Co(t) {
    return t.filter(e => e.shouldLoadWallet())
}

function ei() {
    var t, e;
    (e = (t = window.Shopify) == null ? void 0 : t.PaymentButton) != null && e.isStorefrontPortableWallets && (ri() || ti())
}

function ti() {
    const t = document.createElement("style");
    t.id = "shopify-dynamic-checkout", t.innerHTML = Ko, document.head.appendChild(t)
}

function ri() {
    return !!document.querySelector("style#shopify-dynamic-checkout")
}

function ni() {
    document.dispatchEvent(new Event("shopify:payment_button:loaded", {
        bubbles: !0,
        cancelable: !0
    }))
}
X("dynamic-checkout", mt), X("more-payment-options-link", Xr);
class ai {
    async getCart(e) {
        throw new Error("Not implemented")
    }
}
const Ge = class ii extends Yr {
    constructor() {
        super(), w(this, "instanceNumber", ++ii.instanceCount), S.start(x(_({}, Er), {
            metadata: {
                shop: {
                    shopId: this.shopId,
                    cartId: this.cartId
                }
            }
        }))
    }
    static get observedAttributes() {
        return ["access-token"]
    }
    async connectedCallback() {
        try {
            super.clearExistingButtons(), J({
                event: L.CartInitCalled
            });
            const e = Ot(tt.ButtonDisplay, "cart:".concat(this.instanceNumber));
            if (!this.walletConfigs) throw new Error("[CartWalletButtons] walletConfigs does not exist");
            const n = zo(this.walletConfigs, "CartWalletButtons");
            if (!(n instanceof Array)) throw new Error("[CartWalletButtons] invalid walletConfigs found");
            const r = gt(),
                o = await oi(n, {
                    country: this.buyerCountry
                }, this.instanceNumber),
                a = await r,
                i = new Pt({
                    accessToken: this.accessToken,
                    country: this.buyerCountry,
                    locale: a.locale
                }),
                s = new ai,
                c = o.map(l => l.createWebComponent({
                    accessToken: this.accessToken,
                    country: this.buyerCountry,
                    dataSource: s,
                    i18n: a,
                    apiClient: i
                }));
            if (c.length === 0) {
                this.innerHTML = "";
                return
            }
            this.innerHTML = "", this.render(c), J({
                event: L.InstrumentLoaded,
                instrumentId: "CartWalletButtons",
                ttl: e()
            })
        } catch (e) {
            this.innerHTML = "", S.notify(e)
        }
    }
    attributeChangedCallback(e, n, r) {
        n !== r && pn(this, e, r)
    }
    render(e) {
        const n = document.createElement("style");
        n.innerHTML = fn;
        const r = document.createElement("div");
        r.className = "wallet-button-fade-in", e.forEach(a => {
            r.appendChild(a)
        });
        const o = new DocumentFragment;
        o.appendChild(n), o.appendChild(r), this.appendChild(o)
    }
};
w(Ge, "instanceCount", 0);
let yt = Ge;
async function oi(t, e, n) {
    const r = Jo(Go(t, e));
    return await Promise.all(r.map(async o => {
        try {
            const a = o.getInstrumentName(),
                i = Ot(tt.LoadInstrument, "".concat(a, ":").concat(n));
            await o.loadWalletSDK(), D.instrumentLoaded({
                instrument: a,
                measurement: i()
            })
        } catch (a) {
            S.notify(a)
        }
    })), r.filter(o => o.isPartnerSDKEligible())
}
X("cart-wallet-buttons", yt);