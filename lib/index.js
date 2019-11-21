module.exports = function (e) {
    var t = {};

    function r(n) {
        if (t[n]) return t[n].exports;
        var o = t[n] = {i: n, l: !1, exports: {}};
        return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
    }

    return r.m = e, r.c = t, r.d = function (e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
    }, r.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, r.t = function (e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var o in e) r.d(n, o, function (t) {
            return e[t]
        }.bind(null, o));
        return n
    }, r.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r(r.s = 1)
}([function (e, t) {
    e.exports = require("react")
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var n = s(r(0)), o = s(r(2)), i = s(r(5));

    function s(e) {
        return e && e.__esModule ? e : {default: e}
    }

    var a = function (e) {
        return n.default.createElement(o.default, e)
    };
    a.propTypes = {
        minLabel: i.default.string,
        maxLabel: i.default.string,
        barColor: i.default.string,
        loadColor: i.default.string.isRequired,
        pinColor: i.default.string.isRequired,
        percentages: i.default.number,
        sliderSize: i.default.number.isRequired,
        getPercentages: i.default.func.isRequired
    }, a.defaultProps = {barColor: "transparent"}, t.default = a
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var n = function () {
        function e(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t
        }
    }(), o = a(r(0));
    r(8);
    var i = a(r(3)), s = a(r(4));

    function a(e) {
        return e && e.__esModule ? e : {default: e}
    }

    var u = function (e) {
        function t(e) {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var r = function (e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return r.moveSlider = function (e) {
                var t = r.props.sliderSize / 2, n = e.nativeEvent.layerX - t, o = null;
                n >= r.state.minPos && n <= r.state.maxPos && (void 0 !== r.props.percentages && (o = Math.trunc((n + t) / r.slider.current.offsetWidth * 100)), r.pin.current.style.transform = "translateX(" + n + "px)", r.slider.current.style.background = "linear-gradient(to right, " + r.props.loadColor + " " + (n + t) + "px, " + r.props.barColor + " 0, " + r.props.barColor + ")", r.setState({
                    position: n + t,
                    percentages: o
                }), r.props.getPercentages(o))
            }, r.sliderMouseMove = function (e) {
                e.persist(), r.state.isClicked && r.moveSlider(e)
            }, r.slider = o.default.createRef(), r.pin = o.default.createRef(), r.state = {
                isClicked: !1,
                percentages: r.props.percentages,
                initPosition: 0,
                maxPos: 0,
                minPos: -r.props.sliderSize / 2,
                sliderSize: r.props.sliderSize
            }, r
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, e), n(t, [{
            key: "componentDidMount", value: function () {
                this.setState({
                    maxPos: this.slider.current.offsetWidth - this.props.sliderSize / 2,
                    initPosition: this.slider.current.offsetWidth * this.state.percentages / 100 - this.props.sliderSize / 2
                })
            }
        }, {
            key: "render", value: function () {
                var e = this;
                return o.default.createElement("div", {id: "setupSlider"}, o.default.createElement("div", {className: "sliderLabels"}, o.default.createElement("p", {className: "sliderLabel"}, this.props.minLabel), o.default.createElement("p", {className: "sliderLabel"}, this.state.percentages), o.default.createElement("p", {className: "sliderLabel"}, this.props.maxLabel)), o.default.createElement("div", {
                    onMouseLeave: function () {
                        return e.setState({isClicked: !1})
                    },
                    onMouseUp: function () {
                        return e.setState({isClicked: !1})
                    },
                    onMouseMove: this.sliderMouseMove,
                    className: "container",
                    style: {"--slider-height": this.state.sliderSize + "px"}
                }, o.default.createElement(i.default, {
                    style: {background: "linear-gradient(to right, " + this.props.loadColor + " " + this.state.initPosition + "px, " + this.props.barColor + " 0, " + this.props.barColor + ")"},
                    refLink: this.slider,
                    click: this.moveSlider
                }, o.default.createElement(s.default, {
                    style: {
                        background: this.props.pinColor,
                        transform: "translateX(" + this.state.initPosition + "px)"
                    }, refLink: this.pin, click: function () {
                        return e.setState({isClicked: !0})
                    }
                }))))
            }
        }]), t
    }(o.default.Component);
    t.default = u
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var n, o = function () {
        function e(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t
        }
    }(), i = r(0), s = (n = i) && n.__esModule ? n : {default: n};
    var a = function (e) {
        function t() {
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), function (e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, e), o(t, [{
            key: "shouldComponentUpdate", value: function (e) {
                return e.style.background !== this.props.style.background
            }
        }, {
            key: "render", value: function () {
                var e = this.props, t = e.children, r = e.refLink, n = e.click, o = e.style;
                return s.default.createElement("div", {style: o, ref: r, onMouseDown: n, className: "slider"}, t)
            }
        }]), t
    }(s.default.Component);t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(0),i=(n=o)&&n.__esModule?n:{default:n};t.default=function(e){var t=e.refLink,r=e.click,n=e.style;return i.default.createElement("div",{style:n,ref:t,onMouseDown:r,className:"pin"})}},function(e,t,r){e.exports=r(6)()},function(e,t,r){"use strict";var n=r(7);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,i,s){if(s!==n){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t){}]);