/*! jQuery UI - v1.9.2 - 2018-07-18
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.menu.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js, jquery.ui.effect.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function (t, e) {
    function i(e, i) {
        var n, o, a, r = e.nodeName.toLowerCase();
        return "area" === r ? (n = e.parentNode, o = n.name, e.href && o && "map" === n.nodeName.toLowerCase() ? (a = t("img[usemap=#" + o + "]")[0], !!a && s(a)) : !1) : (/input|select|textarea|button|object/.test(r) ? !e.disabled : "a" === r ? e.href || i : i) && s(e)
    }

    function s(e) {
        return t.expr.filters.visible(e) && !t(e).parents().andSelf().filter(function () {
            return "hidden" === t.css(this, "visibility")
        }).length
    }

    var n = 0, o = /^ui-id-\d+$/;
    t.ui = t.ui || {}, t.ui.version || (t.extend(t.ui, {
        version: "1.9.2",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), t.fn.extend({
        _focus: t.fn.focus, focus: function (e, i) {
            return "number" == typeof e ? this.each(function () {
                var s = this;
                setTimeout(function () {
                    t(s).focus(), i && i.call(s)
                }, e)
            }) : this._focus.apply(this, arguments)
        }, scrollParent: function () {
            var e;
            return e = t.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () {
                return /(relative|absolute|fixed)/.test(t.css(this, "position")) && /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"))
            }).eq(0) : this.parents().filter(function () {
                return /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"))
            }).eq(0), /fixed/.test(this.css("position")) || !e.length ? t(document) : e
        }, zIndex: function (i) {
            if (i !== e) return this.css("zIndex", i);
            if (this.length) for (var s, n, o = t(this[0]); o.length && o[0] !== document;) {
                if (s = o.css("position"), ("absolute" === s || "relative" === s || "fixed" === s) && (n = parseInt(o.css("zIndex"), 10), !isNaN(n) && 0 !== n)) return n;
                o = o.parent()
            }
            return 0
        }, uniqueId: function () {
            return this.each(function () {
                this.id || (this.id = "ui-id-" + ++n)
            })
        }, removeUniqueId: function () {
            return this.each(function () {
                o.test(this.id) && t(this).removeAttr("id")
            })
        }
    }), t.extend(t.expr[":"], {
        data: t.expr.createPseudo ? t.expr.createPseudo(function (e) {
            return function (i) {
                return !!t.data(i, e)
            }
        }) : function (e, i, s) {
            return !!t.data(e, s[3])
        }, focusable: function (e) {
            return i(e, !isNaN(t.attr(e, "tabindex")))
        }, tabbable: function (e) {
            var s = t.attr(e, "tabindex"), n = isNaN(s);
            return (n || s >= 0) && i(e, !n)
        }
    }), t(function () {
        var e = document.body, i = e.appendChild(i = document.createElement("div"));
        i.offsetHeight, t.extend(i.style, {
            minHeight: "100px",
            height: "auto",
            padding: 0,
            borderWidth: 0
        }), t.support.minHeight = 100 === i.offsetHeight, t.support.selectstart = "onselectstart" in i, e.removeChild(i).style.display = "none"
    }), t("<a>").outerWidth(1).jquery || t.each(["Width", "Height"], function (i, s) {
        function n(e, i, s, n) {
            return t.each(o, function () {
                i -= parseFloat(t.css(e, "padding" + this)) || 0, s && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), n && (i -= parseFloat(t.css(e, "margin" + this)) || 0)
            }), i
        }

        var o = "Width" === s ? ["Left", "Right"] : ["Top", "Bottom"], a = s.toLowerCase(), r = {
            innerWidth: t.fn.innerWidth,
            innerHeight: t.fn.innerHeight,
            outerWidth: t.fn.outerWidth,
            outerHeight: t.fn.outerHeight
        };
        t.fn["inner" + s] = function (i) {
            return i === e ? r["inner" + s].call(this) : this.each(function () {
                t(this).css(a, n(this, i) + "px")
            })
        }, t.fn["outer" + s] = function (e, i) {
            return "number" != typeof e ? r["outer" + s].call(this, e) : this.each(function () {
                t(this).css(a, n(this, e, !0, i) + "px")
            })
        }
    }), t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = function (e) {
        return function (i) {
            return arguments.length ? e.call(this, t.camelCase(i)) : e.call(this)
        }
    }(t.fn.removeData)), function () {
        var e = /msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase()) || [];
        t.ui.ie = e.length ? !0 : !1, t.ui.ie6 = 6 === parseFloat(e[1], 10)
    }(), t.fn.extend({
        disableSelection: function () {
            return this.bind((t.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (t) {
                t.preventDefault()
            })
        }, enableSelection: function () {
            return this.unbind(".ui-disableSelection")
        }
    }), t.extend(t.ui, {
        plugin: {
            add: function (e, i, s) {
                var n, o = t.ui[e].prototype;
                for (n in s) o.plugins[n] = o.plugins[n] || [], o.plugins[n].push([i, s[n]])
            }, call: function (t, e, i) {
                var s, n = t.plugins[e];
                if (n && t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType) for (s = 0; n.length > s; s++) t.options[n[s][0]] && n[s][1].apply(t.element, i)
            }
        }, contains: t.contains, hasScroll: function (e, i) {
            if ("hidden" === t(e).css("overflow")) return !1;
            var s = i && "left" === i ? "scrollLeft" : "scrollTop", n = !1;
            return e[s] > 0 ? !0 : (e[s] = 1, n = e[s] > 0, e[s] = 0, n)
        }, isOverAxis: function (t, e, i) {
            return t > e && e + i > t
        }, isOver: function (e, i, s, n, o, a) {
            return t.ui.isOverAxis(e, s, o) && t.ui.isOverAxis(i, n, a)
        }
    }))
})(jQuery);
(function (t, e) {
    var i = 0, s = Array.prototype.slice, n = t.cleanData;
    t.cleanData = function (e) {
        for (var i, s = 0; null != (i = e[s]); s++) try {
            t(i).triggerHandler("remove")
        } catch (o) {
        }
        n(e)
    }, t.widget = function (i, s, n) {
        var o, a, r, h, l = i.split(".")[0];
        i = i.split(".")[1], o = l + "-" + i, n || (n = s, s = t.Widget), t.expr[":"][o.toLowerCase()] = function (e) {
            return !!t.data(e, o)
        }, t[l] = t[l] || {}, a = t[l][i], r = t[l][i] = function (t, i) {
            return this._createWidget ? (arguments.length && this._createWidget(t, i), e) : new r(t, i)
        }, t.extend(r, a, {
            version: n.version,
            _proto: t.extend({}, n),
            _childConstructors: []
        }), h = new s, h.options = t.widget.extend({}, h.options), t.each(n, function (e, i) {
            t.isFunction(i) && (n[e] = function () {
                var t = function () {
                    return s.prototype[e].apply(this, arguments)
                }, n = function (t) {
                    return s.prototype[e].apply(this, t)
                };
                return function () {
                    var e, s = this._super, o = this._superApply;
                    return this._super = t, this._superApply = n, e = i.apply(this, arguments), this._super = s, this._superApply = o, e
                }
            }())
        }), r.prototype = t.widget.extend(h, {widgetEventPrefix: a ? h.widgetEventPrefix : i}, n, {
            constructor: r,
            namespace: l,
            widgetName: i,
            widgetBaseClass: o,
            widgetFullName: o
        }), a ? (t.each(a._childConstructors, function (e, i) {
            var s = i.prototype;
            t.widget(s.namespace + "." + s.widgetName, r, i._proto)
        }), delete a._childConstructors) : s._childConstructors.push(r), t.widget.bridge(i, r)
    }, t.widget.extend = function (i) {
        for (var n, o, a = s.call(arguments, 1), r = 0, h = a.length; h > r; r++) for (n in a[r]) o = a[r][n], a[r].hasOwnProperty(n) && o !== e && (i[n] = t.isPlainObject(o) ? t.isPlainObject(i[n]) ? t.widget.extend({}, i[n], o) : t.widget.extend({}, o) : o);
        return i
    }, t.widget.bridge = function (i, n) {
        var o = n.prototype.widgetFullName || i;
        t.fn[i] = function (a) {
            var r = "string" == typeof a, h = s.call(arguments, 1), l = this;
            return a = !r && h.length ? t.widget.extend.apply(null, [a].concat(h)) : a, r ? this.each(function () {
                var s, n = t.data(this, o);
                return n ? t.isFunction(n[a]) && "_" !== a.charAt(0) ? (s = n[a].apply(n, h), s !== n && s !== e ? (l = s && s.jquery ? l.pushStack(s.get()) : s, !1) : e) : t.error("no such method '" + a + "' for " + i + " widget instance") : t.error("cannot call methods on " + i + " prior to initialization; " + "attempted to call method '" + a + "'")
            }) : this.each(function () {
                var e = t.data(this, o);
                e ? e.option(a || {})._init() : t.data(this, o, new n(a, this))
            }), l
        }
    }, t.Widget = function () {
    }, t.Widget._childConstructors = [], t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {disabled: !1, create: null},
        _createWidget: function (e, s) {
            s = t(s || this.defaultElement || this)[0], this.element = t(s), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this.bindings = t(), this.hoverable = t(), this.focusable = t(), s !== this && (t.data(s, this.widgetName, this), t.data(s, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function (t) {
                    t.target === s && this.destroy()
                }
            }), this.document = t(s.style ? s.ownerDocument : s.document || s), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: t.noop,
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function () {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: t.noop,
        widget: function () {
            return this.element
        },
        option: function (i, s) {
            var n, o, a, r = i;
            if (0 === arguments.length) return t.widget.extend({}, this.options);
            if ("string" == typeof i) if (r = {}, n = i.split("."), i = n.shift(), n.length) {
                for (o = r[i] = t.widget.extend({}, this.options[i]), a = 0; n.length - 1 > a; a++) o[n[a]] = o[n[a]] || {}, o = o[n[a]];
                if (i = n.pop(), s === e) return o[i] === e ? null : o[i];
                o[i] = s
            } else {
                if (s === e) return this.options[i] === e ? null : this.options[i];
                r[i] = s
            }
            return this._setOptions(r), this
        },
        _setOptions: function (t) {
            var e;
            for (e in t) this._setOption(e, t[e]);
            return this
        },
        _setOption: function (t, e) {
            return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!e).attr("aria-disabled", e), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
        },
        enable: function () {
            return this._setOption("disabled", !1)
        },
        disable: function () {
            return this._setOption("disabled", !0)
        },
        _on: function (i, s, n) {
            var o, a = this;
            "boolean" != typeof i && (n = s, s = i, i = !1), n ? (s = o = t(s), this.bindings = this.bindings.add(s)) : (n = s, s = this.element, o = this.widget()), t.each(n, function (n, r) {
                function h() {
                    return i || a.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? a[r] : r).apply(a, arguments) : e
                }

                "string" != typeof r && (h.guid = r.guid = r.guid || h.guid || t.guid++);
                var l = n.match(/^(\w+)\s*(.*)$/), c = l[1] + a.eventNamespace, u = l[2];
                u ? o.delegate(u, c, h) : s.bind(c, h)
            })
        },
        _off: function (t, e) {
            e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(e).undelegate(e)
        },
        _delay: function (t, e) {
            function i() {
                return ("string" == typeof t ? s[t] : t).apply(s, arguments)
            }

            var s = this;
            return setTimeout(i, e || 0)
        },
        _hoverable: function (e) {
            this.hoverable = this.hoverable.add(e), this._on(e, {
                mouseenter: function (e) {
                    t(e.currentTarget).addClass("ui-state-hover")
                }, mouseleave: function (e) {
                    t(e.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function (e) {
            this.focusable = this.focusable.add(e), this._on(e, {
                focusin: function (e) {
                    t(e.currentTarget).addClass("ui-state-focus")
                }, focusout: function (e) {
                    t(e.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function (e, i, s) {
            var n, o, a = this.options[e];
            if (s = s || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent) for (n in o) n in i || (i[n] = o[n]);
            return this.element.trigger(i, s), !(t.isFunction(a) && a.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
        }
    }, t.each({show: "fadeIn", hide: "fadeOut"}, function (e, i) {
        t.Widget.prototype["_" + e] = function (s, n, o) {
            "string" == typeof n && (n = {effect: n});
            var a, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : e;
            n = n || {}, "number" == typeof n && (n = {duration: n}), a = !t.isEmptyObject(n), n.complete = o, n.delay && s.delay(n.delay), a && t.effects && (t.effects.effect[r] || t.uiBackCompat !== !1 && t.effects[r]) ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, o) : s.queue(function (i) {
                t(this)[e](), o && o.call(s[0]), i()
            })
        }
    }), t.uiBackCompat !== !1 && (t.Widget.prototype._getCreateOptions = function () {
        return t.metadata && t.metadata.get(this.element[0])[this.widgetName]
    })
})(jQuery);
(function (t) {
    var e = !1;
    t(document).mouseup(function () {
        e = !1
    }), t.widget("ui.mouse", {
        version: "1.9.2",
        options: {cancel: "input,textarea,button,select,option", distance: 1, delay: 0},
        _mouseInit: function () {
            var e = this;
            this.element.bind("mousedown." + this.widgetName, function (t) {
                return e._mouseDown(t)
            }).bind("click." + this.widgetName, function (i) {
                return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : undefined
            }), this.started = !1
        },
        _mouseDestroy: function () {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function (i) {
            if (!e) {
                this._mouseStarted && this._mouseUp(i), this._mouseDownEvent = i;
                var s = this, n = 1 === i.which,
                    o = "string" == typeof this.options.cancel && i.target.nodeName ? t(i.target).closest(this.options.cancel).length : !1;
                return n && !o && this._mouseCapture(i) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                    s.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, !this._mouseStarted) ? (i.preventDefault(), !0) : (!0 === t.data(i.target, this.widgetName + ".preventClickEvent") && t.removeData(i.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (t) {
                    return s._mouseMove(t)
                }, this._mouseUpDelegate = function (t) {
                    return s._mouseUp(t)
                }, t(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), i.preventDefault(), e = !0, !0)) : !0
            }
        },
        _mouseMove: function (e) {
            return !t.ui.ie || document.documentMode >= 9 || e.button ? this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted) : this._mouseUp(e)
        },
        _mouseUp: function (e) {
            return t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), !1
        },
        _mouseDistanceMet: function (t) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function () {
            return this.mouseDelayMet
        },
        _mouseStart: function () {
        },
        _mouseDrag: function () {
        },
        _mouseStop: function () {
        },
        _mouseCapture: function () {
            return !0
        }
    })
})(jQuery);
(function (t, e) {
    function i(t, e, i) {
        return [parseInt(t[0], 10) * (d.test(t[0]) ? e / 100 : 1), parseInt(t[1], 10) * (d.test(t[1]) ? i / 100 : 1)]
    }

    function s(e, i) {
        return parseInt(t.css(e, i), 10) || 0
    }

    t.ui = t.ui || {};
    var n, o = Math.max, a = Math.abs, r = Math.round, l = /left|center|right/, h = /top|center|bottom/,
        c = /[\+\-]\d+%?/, u = /^\w+/, d = /%$/, p = t.fn.position;
    t.position = {
        scrollbarWidth: function () {
            if (n !== e) return n;
            var i, s,
                o = t("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                a = o.children()[0];
            return t("body").append(o), i = a.offsetWidth, o.css("overflow", "scroll"), s = a.offsetWidth, i === s && (s = o[0].clientWidth), o.remove(), n = i - s
        }, getScrollInfo: function (e) {
            var i = e.isWindow ? "" : e.element.css("overflow-x"), s = e.isWindow ? "" : e.element.css("overflow-y"),
                n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth,
                o = "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight;
            return {width: n ? t.position.scrollbarWidth() : 0, height: o ? t.position.scrollbarWidth() : 0}
        }, getWithinInfo: function (e) {
            var i = t(e || window), s = t.isWindow(i[0]);
            return {
                element: i,
                isWindow: s,
                offset: i.offset() || {left: 0, top: 0},
                scrollLeft: i.scrollLeft(),
                scrollTop: i.scrollTop(),
                width: s ? i.width() : i.outerWidth(),
                height: s ? i.height() : i.outerHeight()
            }
        }
    }, t.fn.position = function (e) {
        if (!e || !e.of) return p.apply(this, arguments);
        e = t.extend({}, e);
        var n, d, f, g, m, v = t(e.of), _ = t.position.getWithinInfo(e.within), b = t.position.getScrollInfo(_),
            y = v[0], w = (e.collision || "flip").split(" "), k = {};
        return 9 === y.nodeType ? (d = v.width(), f = v.height(), g = {
            top: 0,
            left: 0
        }) : t.isWindow(y) ? (d = v.width(), f = v.height(), g = {
            top: v.scrollTop(),
            left: v.scrollLeft()
        }) : y.preventDefault ? (e.at = "left top", d = f = 0, g = {
            top: y.pageY,
            left: y.pageX
        }) : (d = v.outerWidth(), f = v.outerHeight(), g = v.offset()), m = t.extend({}, g), t.each(["my", "at"], function () {
            var t, i, s = (e[this] || "").split(" ");
            1 === s.length && (s = l.test(s[0]) ? s.concat(["center"]) : h.test(s[0]) ? ["center"].concat(s) : ["center", "center"]), s[0] = l.test(s[0]) ? s[0] : "center", s[1] = h.test(s[1]) ? s[1] : "center", t = c.exec(s[0]), i = c.exec(s[1]), k[this] = [t ? t[0] : 0, i ? i[0] : 0], e[this] = [u.exec(s[0])[0], u.exec(s[1])[0]]
        }), 1 === w.length && (w[1] = w[0]), "right" === e.at[0] ? m.left += d : "center" === e.at[0] && (m.left += d / 2), "bottom" === e.at[1] ? m.top += f : "center" === e.at[1] && (m.top += f / 2), n = i(k.at, d, f), m.left += n[0], m.top += n[1], this.each(function () {
            var l, h, c = t(this), u = c.outerWidth(), p = c.outerHeight(), y = s(this, "marginLeft"),
                x = s(this, "marginTop"), C = u + y + s(this, "marginRight") + b.width,
                D = p + x + s(this, "marginBottom") + b.height, I = t.extend({}, m),
                T = i(k.my, c.outerWidth(), c.outerHeight());
            "right" === e.my[0] ? I.left -= u : "center" === e.my[0] && (I.left -= u / 2), "bottom" === e.my[1] ? I.top -= p : "center" === e.my[1] && (I.top -= p / 2), I.left += T[0], I.top += T[1], t.support.offsetFractions || (I.left = r(I.left), I.top = r(I.top)), l = {
                marginLeft: y,
                marginTop: x
            }, t.each(["left", "top"], function (i, s) {
                t.ui.position[w[i]] && t.ui.position[w[i]][s](I, {
                    targetWidth: d,
                    targetHeight: f,
                    elemWidth: u,
                    elemHeight: p,
                    collisionPosition: l,
                    collisionWidth: C,
                    collisionHeight: D,
                    offset: [n[0] + T[0], n[1] + T[1]],
                    my: e.my,
                    at: e.at,
                    within: _,
                    elem: c
                })
            }), t.fn.bgiframe && c.bgiframe(), e.using && (h = function (t) {
                var i = g.left - I.left, s = i + d - u, n = g.top - I.top, r = n + f - p, l = {
                    target: {element: v, left: g.left, top: g.top, width: d, height: f},
                    element: {element: c, left: I.left, top: I.top, width: u, height: p},
                    horizontal: 0 > s ? "left" : i > 0 ? "right" : "center",
                    vertical: 0 > r ? "top" : n > 0 ? "bottom" : "middle"
                };
                u > d && d > a(i + s) && (l.horizontal = "center"), p > f && f > a(n + r) && (l.vertical = "middle"), l.important = o(a(i), a(s)) > o(a(n), a(r)) ? "horizontal" : "vertical", e.using.call(this, t, l)
            }), c.offset(t.extend(I, {using: h}))
        })
    }, t.ui.position = {
        fit: {
            left: function (t, e) {
                var i, s = e.within, n = s.isWindow ? s.scrollLeft : s.offset.left, a = s.width,
                    r = t.left - e.collisionPosition.marginLeft, l = n - r, h = r + e.collisionWidth - a - n;
                e.collisionWidth > a ? l > 0 && 0 >= h ? (i = t.left + l + e.collisionWidth - a - n, t.left += l - i) : t.left = h > 0 && 0 >= l ? n : l > h ? n + a - e.collisionWidth : n : l > 0 ? t.left += l : h > 0 ? t.left -= h : t.left = o(t.left - r, t.left)
            }, top: function (t, e) {
                var i, s = e.within, n = s.isWindow ? s.scrollTop : s.offset.top, a = e.within.height,
                    r = t.top - e.collisionPosition.marginTop, l = n - r, h = r + e.collisionHeight - a - n;
                e.collisionHeight > a ? l > 0 && 0 >= h ? (i = t.top + l + e.collisionHeight - a - n, t.top += l - i) : t.top = h > 0 && 0 >= l ? n : l > h ? n + a - e.collisionHeight : n : l > 0 ? t.top += l : h > 0 ? t.top -= h : t.top = o(t.top - r, t.top)
            }
        }, flip: {
            left: function (t, e) {
                var i, s, n = e.within, o = n.offset.left + n.scrollLeft, r = n.width,
                    l = n.isWindow ? n.scrollLeft : n.offset.left, h = t.left - e.collisionPosition.marginLeft,
                    c = h - l, u = h + e.collisionWidth - r - l,
                    d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                    p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                    f = -2 * e.offset[0];
                0 > c ? (i = t.left + d + p + f + e.collisionWidth - r - o, (0 > i || a(c) > i) && (t.left += d + p + f)) : u > 0 && (s = t.left - e.collisionPosition.marginLeft + d + p + f - l, (s > 0 || u > a(s)) && (t.left += d + p + f))
            }, top: function (t, e) {
                var i, s, n = e.within, o = n.offset.top + n.scrollTop, r = n.height,
                    l = n.isWindow ? n.scrollTop : n.offset.top, h = t.top - e.collisionPosition.marginTop, c = h - l,
                    u = h + e.collisionHeight - r - l, d = "top" === e.my[1],
                    p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                    f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                    g = -2 * e.offset[1];
                0 > c ? (s = t.top + p + f + g + e.collisionHeight - r - o, t.top + p + f + g > c && (0 > s || a(c) > s) && (t.top += p + f + g)) : u > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + g - l, t.top + p + f + g > u && (i > 0 || u > a(i)) && (t.top += p + f + g))
            }
        }, flipfit: {
            left: function () {
                t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
            }, top: function () {
                t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
            }
        }
    }, function () {
        var e, i, s, n, o, a = document.getElementsByTagName("body")[0], r = document.createElement("div");
        e = document.createElement(a ? "div" : "body"), s = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        }, a && t.extend(s, {position: "absolute", left: "-1000px", top: "-1000px"});
        for (o in s) e.style[o] = s[o];
        e.appendChild(r), i = a || document.documentElement, i.insertBefore(e, i.firstChild), r.style.cssText = "position: absolute; left: 10.7432222px;", n = t(r).offset().left, t.support.offsetFractions = n > 10 && 11 > n, e.innerHTML = "", i.removeChild(e)
    }(), t.uiBackCompat !== !1 && function (t) {
        var i = t.fn.position;
        t.fn.position = function (s) {
            if (!s || !s.offset) return i.call(this, s);
            var n = s.offset.split(" "), o = s.at.split(" ");
            return 1 === n.length && (n[1] = n[0]), /^\d/.test(n[0]) && (n[0] = "+" + n[0]), /^\d/.test(n[1]) && (n[1] = "+" + n[1]), 1 === o.length && (/left|center|right/.test(o[0]) ? o[1] = "center" : (o[1] = o[0], o[0] = "center")), i.call(this, t.extend(s, {
                at: o[0] + n[0] + " " + o[1] + n[1],
                offset: e
            }))
        }
    }(jQuery)
})(jQuery);
(function (t) {
    t.widget("ui.draggable", t.ui.mouse, {
        version: "1.9.2",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1
        },
        _create: function () {
            "original" != this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
        },
        _destroy: function () {
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy()
        },
        _mouseCapture: function (e) {
            var i = this.options;
            return this.helper || i.disabled || t(e.target).is(".ui-resizable-handle") ? !1 : (this.handle = this._getHandle(e), this.handle ? (t(i.iframeFix === !0 ? "iframe" : i.iframeFix).each(function () {
                t('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(t(this).offset()).appendTo("body")
            }), !0) : !1)
        },
        _mouseStart: function (e) {
            var i = this.options;
            return this.helper = this._createHelper(e), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, t.extend(this.offset, {
                click: {left: e.pageX - this.offset.left, top: e.pageY - this.offset.top},
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.originalPosition = this.position = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), i.containment && this._setContainment(), this._trigger("start", e) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
        },
        _mouseDrag: function (e, i) {
            if (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                var s = this._uiHash();
                if (this._trigger("drag", e, s) === !1) return this._mouseUp({}), !1;
                this.position = s.position
            }
            return this.options.axis && "y" == this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" == this.options.axis || (this.helper[0].style.top = this.position.top + "px"), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1
        },
        _mouseStop: function (e) {
            var i = !1;
            t.ui.ddmanager && !this.options.dropBehaviour && (i = t.ui.ddmanager.drop(this, e)), this.dropped && (i = this.dropped, this.dropped = !1);
            for (var s = this.element[0], n = !1; s && (s = s.parentNode);) s == document && (n = !0);
            if (!n && "original" === this.options.helper) return !1;
            if ("invalid" == this.options.revert && !i || "valid" == this.options.revert && i || this.options.revert === !0 || t.isFunction(this.options.revert) && this.options.revert.call(this.element, i)) {
                var o = this;
                t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                    o._trigger("stop", e) !== !1 && o._clear()
                })
            } else this._trigger("stop", e) !== !1 && this._clear();
            return !1
        },
        _mouseUp: function (e) {
            return t("div.ui-draggable-iframeFix").each(function () {
                this.parentNode.removeChild(this)
            }), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), t.ui.mouse.prototype._mouseUp.call(this, e)
        },
        cancel: function () {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
        },
        _getHandle: function (e) {
            var i = this.options.handle && t(this.options.handle, this.element).length ? !1 : !0;
            return t(this.options.handle, this.element).find("*").andSelf().each(function () {
                this == e.target && (i = !0)
            }), i
        },
        _createHelper: function (e) {
            var i = this.options,
                s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e])) : "clone" == i.helper ? this.element.clone().removeAttr("id") : this.element;
            return s.parents("body").length || s.appendTo("parent" == i.appendTo ? this.element[0].parentNode : i.appendTo), s[0] == this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"), s
        },
        _adjustOffsetFromHelper: function (e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _getParentOffset: function () {
            this.offsetParent = this.helper.offsetParent();
            var e = this.offsetParent.offset();
            return "absolute" == this.cssPosition && this.scrollParent[0] != document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && "html" == this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                top: 0,
                left: 0
            }), {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if ("relative" == this.cssPosition) {
                var t = this.element.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {top: 0, left: 0}
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()}
        },
        _setContainment: function () {
            var e = this.options;
            if ("parent" == e.containment && (e.containment = this.helper[0].parentNode), ("document" == e.containment || "window" == e.containment) && (this.containment = ["document" == e.containment ? 0 : t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, "document" == e.containment ? 0 : t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, ("document" == e.containment ? 0 : t(window).scrollLeft()) + t("document" == e.containment ? document : window).width() - this.helperProportions.width - this.margins.left, ("document" == e.containment ? 0 : t(window).scrollTop()) + (t("document" == e.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(e.containment) || e.containment.constructor == Array) e.containment.constructor == Array && (this.containment = e.containment); else {
                var i = t(e.containment), s = i[0];
                if (!s) return;
                i.offset();
                var n = "hidden" != t(s).css("overflow");
                this.containment = [(parseInt(t(s).css("borderLeftWidth"), 10) || 0) + (parseInt(t(s).css("paddingLeft"), 10) || 0), (parseInt(t(s).css("borderTopWidth"), 10) || 0) + (parseInt(t(s).css("paddingTop"), 10) || 0), (n ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(t(s).css("borderLeftWidth"), 10) || 0) - (parseInt(t(s).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (n ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(t(s).css("borderTopWidth"), 10) || 0) - (parseInt(t(s).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = i
            }
        },
        _convertPositionTo: function (e, i) {
            i || (i = this.position);
            var s = "absolute" == e ? 1 : -1,
                n = (this.options, "absolute" != this.cssPosition || this.scrollParent[0] != document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent),
                o = /(html|body)/i.test(n[0].tagName);
            return {
                top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : n.scrollTop()) * s,
                left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : n.scrollLeft()) * s
            }
        },
        _generatePosition: function (e) {
            var i = this.options,
                s = "absolute" != this.cssPosition || this.scrollParent[0] != document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                n = /(html|body)/i.test(s[0].tagName), o = e.pageX, a = e.pageY;
            if (this.originalPosition) {
                var r;
                if (this.containment) {
                    if (this.relative_container) {
                        var l = this.relative_container.offset();
                        r = [this.containment[0] + l.left, this.containment[1] + l.top, this.containment[2] + l.left, this.containment[3] + l.top]
                    } else r = this.containment;
                    e.pageX - this.offset.click.left < r[0] && (o = r[0] + this.offset.click.left), e.pageY - this.offset.click.top < r[1] && (a = r[1] + this.offset.click.top), e.pageX - this.offset.click.left > r[2] && (o = r[2] + this.offset.click.left), e.pageY - this.offset.click.top > r[3] && (a = r[3] + this.offset.click.top)
                }
                if (i.grid) {
                    var h = i.grid[1] ? this.originalPageY + Math.round((a - this.originalPageY) / i.grid[1]) * i.grid[1] : this.originalPageY;
                    a = r ? h - this.offset.click.top < r[1] || h - this.offset.click.top > r[3] ? h - this.offset.click.top < r[1] ? h + i.grid[1] : h - i.grid[1] : h : h;
                    var c = i.grid[0] ? this.originalPageX + Math.round((o - this.originalPageX) / i.grid[0]) * i.grid[0] : this.originalPageX;
                    o = r ? c - this.offset.click.left < r[0] || c - this.offset.click.left > r[2] ? c - this.offset.click.left < r[0] ? c + i.grid[0] : c - i.grid[0] : c : c
                }
            }
            return {
                top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : n ? 0 : s.scrollTop()),
                left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : n ? 0 : s.scrollLeft())
            }
        },
        _clear: function () {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] == this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
        },
        _trigger: function (e, i, s) {
            return s = s || this._uiHash(), t.ui.plugin.call(this, e, [i, s]), "drag" == e && (this.positionAbs = this._convertPositionTo("absolute")), t.Widget.prototype._trigger.call(this, e, i, s)
        },
        plugins: {},
        _uiHash: function () {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }), t.ui.plugin.add("draggable", "connectToSortable", {
        start: function (e, i) {
            var s = t(this).data("draggable"), n = s.options, o = t.extend({}, i, {item: s.element});
            s.sortables = [], t(n.connectToSortable).each(function () {
                var i = t.data(this, "sortable");
                i && !i.options.disabled && (s.sortables.push({
                    instance: i,
                    shouldRevert: i.options.revert
                }), i.refreshPositions(), i._trigger("activate", e, o))
            })
        }, stop: function (e, i) {
            var s = t(this).data("draggable"), n = t.extend({}, i, {item: s.element});
            t.each(s.sortables, function () {
                this.instance.isOver ? (this.instance.isOver = 0, s.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = !0), this.instance._mouseStop(e), this.instance.options.helper = this.instance.options._helper, "original" == s.options.helper && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", e, n))
            })
        }, drag: function (e, i) {
            var s = t(this).data("draggable"), n = this;
            t.each(s.sortables, function () {
                var o = !1, a = this;
                this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (o = !0, t.each(s.sortables, function () {
                    return this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this != a && this.instance._intersectsWith(this.instance.containerCache) && t.ui.contains(a.instance.element[0], this.instance.element[0]) && (o = !1), o
                })), o ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = t(n).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function () {
                    return i.helper[0]
                }, e.target = this.instance.currentItem[0], this.instance._mouseCapture(e, !0), this.instance._mouseStart(e, !0, !0), this.instance.offset.click.top = s.offset.click.top, this.instance.offset.click.left = s.offset.click.left, this.instance.offset.parent.left -= s.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= s.offset.parent.top - this.instance.offset.parent.top, s._trigger("toSortable", e), s.dropped = this.instance.element, s.currentItem = s.element, this.instance.fromOutside = s), this.instance.currentItem && this.instance._mouseDrag(e)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", e, this.instance._uiHash(this.instance)), this.instance._mouseStop(e, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), s._trigger("fromSortable", e), s.dropped = !1)
            })
        }
    }), t.ui.plugin.add("draggable", "cursor", {
        start: function () {
            var e = t("body"), i = t(this).data("draggable").options;
            e.css("cursor") && (i._cursor = e.css("cursor")), e.css("cursor", i.cursor)
        }, stop: function () {
            var e = t(this).data("draggable").options;
            e._cursor && t("body").css("cursor", e._cursor)
        }
    }), t.ui.plugin.add("draggable", "opacity", {
        start: function (e, i) {
            var s = t(i.helper), n = t(this).data("draggable").options;
            s.css("opacity") && (n._opacity = s.css("opacity")), s.css("opacity", n.opacity)
        }, stop: function (e, i) {
            var s = t(this).data("draggable").options;
            s._opacity && t(i.helper).css("opacity", s._opacity)
        }
    }), t.ui.plugin.add("draggable", "scroll", {
        start: function () {
            var e = t(this).data("draggable");
            e.scrollParent[0] != document && "HTML" != e.scrollParent[0].tagName && (e.overflowOffset = e.scrollParent.offset())
        }, drag: function (e) {
            var i = t(this).data("draggable"), s = i.options, n = !1;
            i.scrollParent[0] != document && "HTML" != i.scrollParent[0].tagName ? (s.axis && "x" == s.axis || (i.overflowOffset.top + i.scrollParent[0].offsetHeight - e.pageY < s.scrollSensitivity ? i.scrollParent[0].scrollTop = n = i.scrollParent[0].scrollTop + s.scrollSpeed : e.pageY - i.overflowOffset.top < s.scrollSensitivity && (i.scrollParent[0].scrollTop = n = i.scrollParent[0].scrollTop - s.scrollSpeed)), s.axis && "y" == s.axis || (i.overflowOffset.left + i.scrollParent[0].offsetWidth - e.pageX < s.scrollSensitivity ? i.scrollParent[0].scrollLeft = n = i.scrollParent[0].scrollLeft + s.scrollSpeed : e.pageX - i.overflowOffset.left < s.scrollSensitivity && (i.scrollParent[0].scrollLeft = n = i.scrollParent[0].scrollLeft - s.scrollSpeed))) : (s.axis && "x" == s.axis || (e.pageY - t(document).scrollTop() < s.scrollSensitivity ? n = t(document).scrollTop(t(document).scrollTop() - s.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < s.scrollSensitivity && (n = t(document).scrollTop(t(document).scrollTop() + s.scrollSpeed))), s.axis && "y" == s.axis || (e.pageX - t(document).scrollLeft() < s.scrollSensitivity ? n = t(document).scrollLeft(t(document).scrollLeft() - s.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < s.scrollSensitivity && (n = t(document).scrollLeft(t(document).scrollLeft() + s.scrollSpeed)))), n !== !1 && t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(i, e)
        }
    }), t.ui.plugin.add("draggable", "snap", {
        start: function () {
            var e = t(this).data("draggable"), i = e.options;
            e.snapElements = [], t(i.snap.constructor != String ? i.snap.items || ":data(draggable)" : i.snap).each(function () {
                var i = t(this), s = i.offset();
                this != e.element[0] && e.snapElements.push({
                    item: this,
                    width: i.outerWidth(),
                    height: i.outerHeight(),
                    top: s.top,
                    left: s.left
                })
            })
        }, drag: function (e, i) {
            for (var s = t(this).data("draggable"), n = s.options, o = n.snapTolerance, a = i.offset.left, r = a + s.helperProportions.width, l = i.offset.top, h = l + s.helperProportions.height, c = s.snapElements.length - 1; c >= 0; c--) {
                var u = s.snapElements[c].left, d = u + s.snapElements[c].width, p = s.snapElements[c].top,
                    f = p + s.snapElements[c].height;
                if (a > u - o && d + o > a && l > p - o && f + o > l || a > u - o && d + o > a && h > p - o && f + o > h || r > u - o && d + o > r && l > p - o && f + o > l || r > u - o && d + o > r && h > p - o && f + o > h) {
                    if ("inner" != n.snapMode) {
                        var g = o >= Math.abs(p - h), m = o >= Math.abs(f - l), _ = o >= Math.abs(u - r),
                            v = o >= Math.abs(d - a);
                        g && (i.position.top = s._convertPositionTo("relative", {
                            top: p - s.helperProportions.height,
                            left: 0
                        }).top - s.margins.top), m && (i.position.top = s._convertPositionTo("relative", {
                            top: f,
                            left: 0
                        }).top - s.margins.top), _ && (i.position.left = s._convertPositionTo("relative", {
                            top: 0,
                            left: u - s.helperProportions.width
                        }).left - s.margins.left), v && (i.position.left = s._convertPositionTo("relative", {
                            top: 0,
                            left: d
                        }).left - s.margins.left)
                    }
                    var b = g || m || _ || v;
                    if ("outer" != n.snapMode) {
                        var g = o >= Math.abs(p - l), m = o >= Math.abs(f - h), _ = o >= Math.abs(u - a),
                            v = o >= Math.abs(d - r);
                        g && (i.position.top = s._convertPositionTo("relative", {
                            top: p,
                            left: 0
                        }).top - s.margins.top), m && (i.position.top = s._convertPositionTo("relative", {
                            top: f - s.helperProportions.height,
                            left: 0
                        }).top - s.margins.top), _ && (i.position.left = s._convertPositionTo("relative", {
                            top: 0,
                            left: u
                        }).left - s.margins.left), v && (i.position.left = s._convertPositionTo("relative", {
                            top: 0,
                            left: d - s.helperProportions.width
                        }).left - s.margins.left)
                    }
                    !s.snapElements[c].snapping && (g || m || _ || v || b) && s.options.snap.snap && s.options.snap.snap.call(s.element, e, t.extend(s._uiHash(), {snapItem: s.snapElements[c].item})), s.snapElements[c].snapping = g || m || _ || v || b
                } else s.snapElements[c].snapping && s.options.snap.release && s.options.snap.release.call(s.element, e, t.extend(s._uiHash(), {snapItem: s.snapElements[c].item})), s.snapElements[c].snapping = !1
            }
        }
    }), t.ui.plugin.add("draggable", "stack", {
        start: function () {
            var e = t(this).data("draggable").options, i = t.makeArray(t(e.stack)).sort(function (e, i) {
                return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
            });
            if (i.length) {
                var s = parseInt(i[0].style.zIndex) || 0;
                t(i).each(function (t) {
                    this.style.zIndex = s + t
                }), this[0].style.zIndex = s + i.length
            }
        }
    }), t.ui.plugin.add("draggable", "zIndex", {
        start: function (e, i) {
            var s = t(i.helper), n = t(this).data("draggable").options;
            s.css("zIndex") && (n._zIndex = s.css("zIndex")), s.css("zIndex", n.zIndex)
        }, stop: function (e, i) {
            var s = t(this).data("draggable").options;
            s._zIndex && t(i.helper).css("zIndex", s._zIndex)
        }
    })
})(jQuery);
(function (t) {
    t.widget("ui.droppable", {
        version: "1.9.2",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect"
        },
        _create: function () {
            var e = this.options, i = e.accept;
            this.isover = 0, this.isout = 1, this.accept = t.isFunction(i) ? i : function (t) {
                return t.is(i)
            }, this.proportions = {
                width: this.element[0].offsetWidth,
                height: this.element[0].offsetHeight
            }, t.ui.ddmanager.droppables[e.scope] = t.ui.ddmanager.droppables[e.scope] || [], t.ui.ddmanager.droppables[e.scope].push(this), e.addClasses && this.element.addClass("ui-droppable")
        },
        _destroy: function () {
            for (var e = t.ui.ddmanager.droppables[this.options.scope], i = 0; e.length > i; i++) e[i] == this && e.splice(i, 1);
            this.element.removeClass("ui-droppable ui-droppable-disabled")
        },
        _setOption: function (e, i) {
            "accept" == e && (this.accept = t.isFunction(i) ? i : function (t) {
                return t.is(i)
            }), t.Widget.prototype._setOption.apply(this, arguments)
        },
        _activate: function (e) {
            var i = t.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass), i && this._trigger("activate", e, this.ui(i))
        },
        _deactivate: function (e) {
            var i = t.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass), i && this._trigger("deactivate", e, this.ui(i))
        },
        _over: function (e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] != this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", e, this.ui(i)))
        },
        _out: function (e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] != this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", e, this.ui(i)))
        },
        _drop: function (e, i) {
            var s = i || t.ui.ddmanager.current;
            if (!s || (s.currentItem || s.element)[0] == this.element[0]) return !1;
            var n = !1;
            return this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function () {
                var e = t.data(this, "droppable");
                return e.options.greedy && !e.options.disabled && e.options.scope == s.options.scope && e.accept.call(e.element[0], s.currentItem || s.element) && t.ui.intersect(s, t.extend(e, {offset: e.element.offset()}), e.options.tolerance) ? (n = !0, !1) : undefined
            }), n ? !1 : this.accept.call(this.element[0], s.currentItem || s.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", e, this.ui(s)), this.element) : !1
        },
        ui: function (t) {
            return {
                draggable: t.currentItem || t.element,
                helper: t.helper,
                position: t.position,
                offset: t.positionAbs
            }
        }
    }), t.ui.intersect = function (e, i, s) {
        if (!i.offset) return !1;
        var n = (e.positionAbs || e.position.absolute).left, o = n + e.helperProportions.width,
            a = (e.positionAbs || e.position.absolute).top, r = a + e.helperProportions.height, l = i.offset.left,
            h = l + i.proportions.width, c = i.offset.top, u = c + i.proportions.height;
        switch (s) {
            case"fit":
                return n >= l && h >= o && a >= c && u >= r;
            case"intersect":
                return n + e.helperProportions.width / 2 > l && h > o - e.helperProportions.width / 2 && a + e.helperProportions.height / 2 > c && u > r - e.helperProportions.height / 2;
            case"pointer":
                var d = (e.positionAbs || e.position.absolute).left + (e.clickOffset || e.offset.click).left,
                    p = (e.positionAbs || e.position.absolute).top + (e.clickOffset || e.offset.click).top,
                    f = t.ui.isOver(p, d, c, l, i.proportions.height, i.proportions.width);
                return f;
            case"touch":
                return (a >= c && u >= a || r >= c && u >= r || c > a && r > u) && (n >= l && h >= n || o >= l && h >= o || l > n && o > h);
            default:
                return !1
        }
    }, t.ui.ddmanager = {
        current: null, droppables: {"default": []}, prepareOffsets: function (e, i) {
            var s = t.ui.ddmanager.droppables[e.options.scope] || [], n = i ? i.type : null,
                o = (e.currentItem || e.element).find(":data(droppable)").andSelf();
            t:for (var a = 0; s.length > a; a++) if (!(s[a].options.disabled || e && !s[a].accept.call(s[a].element[0], e.currentItem || e.element))) {
                for (var r = 0; o.length > r; r++) if (o[r] == s[a].element[0]) {
                    s[a].proportions.height = 0;
                    continue t
                }
                s[a].visible = "none" != s[a].element.css("display"), s[a].visible && ("mousedown" == n && s[a]._activate.call(s[a], i), s[a].offset = s[a].element.offset(), s[a].proportions = {
                    width: s[a].element[0].offsetWidth,
                    height: s[a].element[0].offsetHeight
                })
            }
        }, drop: function (e, i) {
            var s = !1;
            return t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function () {
                this.options && (!this.options.disabled && this.visible && t.ui.intersect(e, this, this.options.tolerance) && (s = this._drop.call(this, i) || s), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = 1, this.isover = 0, this._deactivate.call(this, i)))
            }), s
        }, dragStart: function (e, i) {
            e.element.parentsUntil("body").bind("scroll.droppable", function () {
                e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
            })
        }, drag: function (e, i) {
            e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function () {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var s = t.ui.intersect(e, this, this.options.tolerance),
                        n = s || 1 != this.isover ? s && 0 == this.isover ? "isover" : null : "isout";
                    if (n) {
                        var o;
                        if (this.options.greedy) {
                            var a = this.options.scope,
                                r = this.element.parents(":data(droppable)").filter(function () {
                                    return t.data(this, "droppable").options.scope === a
                                });
                            r.length && (o = t.data(r[0], "droppable"), o.greedyChild = "isover" == n ? 1 : 0)
                        }
                        o && "isover" == n && (o.isover = 0, o.isout = 1, o._out.call(o, i)), this[n] = 1, this["isout" == n ? "isover" : "isout"] = 0, this["isover" == n ? "_over" : "_out"].call(this, i), o && "isout" == n && (o.isout = 0, o.isover = 1, o._over.call(o, i))
                    }
                }
            })
        }, dragStop: function (e, i) {
            e.element.parentsUntil("body").unbind("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
        }
    }
})(jQuery);
(function (t) {
    t.widget("ui.resizable", t.ui.mouse, {
        version: "1.9.2",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 1e3
        },
        _create: function () {
            var e = this, i = this.options;
            if (this.element.addClass("ui-resizable"), t.extend(this, {
                _aspectRatio: !!i.aspectRatio,
                aspectRatio: i.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null
            }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(t('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })), this.element = this.element.parent().data("resizable", this.element.data("resizable")), this.elementIsWrapper = !0, this.element.css({
                marginLeft: this.originalElement.css("marginLeft"),
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom")
            }), this.originalElement.css({
                marginLeft: 0,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0
            }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })), this.originalElement.css({margin: this.originalElement.css("margin")}), this._proportionallyResize()), this.handles = i.handles || (t(".ui-resizable-handle", this.element).length ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            } : "e,s,se"), this.handles.constructor == String) {
                "all" == this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw");
                var s = this.handles.split(",");
                this.handles = {};
                for (var n = 0; s.length > n; n++) {
                    var o = t.trim(s[n]), a = "ui-resizable-" + o,
                        r = t('<div class="ui-resizable-handle ' + a + '"></div>');
                    r.css({zIndex: i.zIndex}), "se" == o && r.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[o] = ".ui-resizable-" + o, this.element.append(r)
                }
            }
            this._renderAxis = function (e) {
                e = e || this.element;
                for (var i in this.handles) {
                    if (this.handles[i].constructor == String && (this.handles[i] = t(this.handles[i], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {
                        var s = t(this.handles[i], this.element), n = 0;
                        n = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth();
                        var o = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join("");
                        e.css(o, n), this._proportionallyResize()
                    }
                    t(this.handles[i]).length
                }
            }, this._renderAxis(this.element), this._handles = t(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function () {
                if (!e.resizing) {
                    if (this.className) var t = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
                    e.axis = t && t[1] ? t[1] : "se"
                }
            }), i.autoHide && (this._handles.hide(), t(this.element).addClass("ui-resizable-autohide").mouseenter(function () {
                i.disabled || (t(this).removeClass("ui-resizable-autohide"), e._handles.show())
            }).mouseleave(function () {
                i.disabled || e.resizing || (t(this).addClass("ui-resizable-autohide"), e._handles.hide())
            })), this._mouseInit()
        },
        _destroy: function () {
            this._mouseDestroy();
            var e = function (e) {
                t(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            if (this.elementIsWrapper) {
                e(this.element);
                var i = this.element;
                this.originalElement.css({
                    position: i.css("position"),
                    width: i.outerWidth(),
                    height: i.outerHeight(),
                    top: i.css("top"),
                    left: i.css("left")
                }).insertAfter(i), i.remove()
            }
            return this.originalElement.css("resize", this.originalResizeStyle), e(this.originalElement), this
        },
        _mouseCapture: function (e) {
            var i = !1;
            for (var s in this.handles) t(this.handles[s])[0] == e.target && (i = !0);
            return !this.options.disabled && i
        },
        _mouseStart: function (i) {
            var s = this.options, n = this.element.position(), o = this.element;
            this.resizing = !0, this.documentScroll = {
                top: t(document).scrollTop(),
                left: t(document).scrollLeft()
            }, (o.is(".ui-draggable") || /absolute/.test(o.css("position"))) && o.css({
                position: "absolute",
                top: n.top,
                left: n.left
            }), this._renderProxy();
            var a = e(this.helper.css("left")), r = e(this.helper.css("top"));
            s.containment && (a += t(s.containment).scrollLeft() || 0, r += t(s.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: a,
                top: r
            }, this.size = this._helper ? {width: o.outerWidth(), height: o.outerHeight()} : {
                width: o.width(),
                height: o.height()
            }, this.originalSize = this._helper ? {width: o.outerWidth(), height: o.outerHeight()} : {
                width: o.width(),
                height: o.height()
            }, this.originalPosition = {left: a, top: r}, this.sizeDiff = {
                width: o.outerWidth() - o.width(),
                height: o.outerHeight() - o.height()
            }, this.originalMousePosition = {
                left: i.pageX,
                top: i.pageY
            }, this.aspectRatio = "number" == typeof s.aspectRatio ? s.aspectRatio : this.originalSize.width / this.originalSize.height || 1;
            var l = t(".ui-resizable-" + this.axis).css("cursor");
            return t("body").css("cursor", "auto" == l ? this.axis + "-resize" : l), o.addClass("ui-resizable-resizing"), this._propagate("start", i), !0
        },
        _mouseDrag: function (t) {
            var e = this.helper, i = (this.options, this.originalMousePosition), s = this.axis,
                n = t.pageX - i.left || 0, o = t.pageY - i.top || 0, a = this._change[s];
            if (!a) return !1;
            var r = a.apply(this, [t, n, o]);
            return this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (r = this._updateRatio(r, t)), r = this._respectSize(r, t), this._propagate("resize", t), e.css({
                top: this.position.top + "px",
                left: this.position.left + "px",
                width: this.size.width + "px",
                height: this.size.height + "px"
            }), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), this._updateCache(r), this._trigger("resize", t, this.ui()), !1
        },
        _mouseStop: function (e) {
            this.resizing = !1;
            var i = this.options, s = this;
            if (this._helper) {
                var n = this._proportionallyResizeElements, o = n.length && /textarea/i.test(n[0].nodeName),
                    a = o && t.ui.hasScroll(n[0], "left") ? 0 : s.sizeDiff.height, r = o ? 0 : s.sizeDiff.width,
                    l = {width: s.helper.width() - r, height: s.helper.height() - a},
                    h = parseInt(s.element.css("left"), 10) + (s.position.left - s.originalPosition.left) || null,
                    c = parseInt(s.element.css("top"), 10) + (s.position.top - s.originalPosition.top) || null;
                i.animate || this.element.css(t.extend(l, {
                    top: c,
                    left: h
                })), s.helper.height(s.size.height), s.helper.width(s.size.width), this._helper && !i.animate && this._proportionallyResize()
            }
            return t("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1
        },
        _updateVirtualBoundaries: function (t) {
            var e, s, n, o, a, r = this.options;
            a = {
                minWidth: i(r.minWidth) ? r.minWidth : 0,
                maxWidth: i(r.maxWidth) ? r.maxWidth : 1 / 0,
                minHeight: i(r.minHeight) ? r.minHeight : 0,
                maxHeight: i(r.maxHeight) ? r.maxHeight : 1 / 0
            }, (this._aspectRatio || t) && (e = a.minHeight * this.aspectRatio, n = a.minWidth / this.aspectRatio, s = a.maxHeight * this.aspectRatio, o = a.maxWidth / this.aspectRatio, e > a.minWidth && (a.minWidth = e), n > a.minHeight && (a.minHeight = n), a.maxWidth > s && (a.maxWidth = s), a.maxHeight > o && (a.maxHeight = o)), this._vBoundaries = a
        },
        _updateCache: function (t) {
            this.options, this.offset = this.helper.offset(), i(t.left) && (this.position.left = t.left), i(t.top) && (this.position.top = t.top), i(t.height) && (this.size.height = t.height), i(t.width) && (this.size.width = t.width)
        },
        _updateRatio: function (t) {
            var e = (this.options, this.position), s = this.size, n = this.axis;
            return i(t.height) ? t.width = t.height * this.aspectRatio : i(t.width) && (t.height = t.width / this.aspectRatio), "sw" == n && (t.left = e.left + (s.width - t.width), t.top = null), "nw" == n && (t.top = e.top + (s.height - t.height), t.left = e.left + (s.width - t.width)), t
        },
        _respectSize: function (t, e) {
            var s = (this.helper, this._vBoundaries), n = (this._aspectRatio || e.shiftKey, this.axis),
                o = i(t.width) && s.maxWidth && s.maxWidth < t.width,
                a = i(t.height) && s.maxHeight && s.maxHeight < t.height,
                r = i(t.width) && s.minWidth && s.minWidth > t.width,
                l = i(t.height) && s.minHeight && s.minHeight > t.height;
            r && (t.width = s.minWidth), l && (t.height = s.minHeight), o && (t.width = s.maxWidth), a && (t.height = s.maxHeight);
            var h = this.originalPosition.left + this.originalSize.width, c = this.position.top + this.size.height,
                u = /sw|nw|w/.test(n), d = /nw|ne|n/.test(n);
            r && u && (t.left = h - s.minWidth), o && u && (t.left = h - s.maxWidth), l && d && (t.top = c - s.minHeight), a && d && (t.top = c - s.maxHeight);
            var p = !t.width && !t.height;
            return p && !t.left && t.top ? t.top = null : p && !t.top && t.left && (t.left = null), t
        },
        _proportionallyResize: function () {
            if (this.options, this._proportionallyResizeElements.length) for (var e = this.helper || this.element, i = 0; this._proportionallyResizeElements.length > i; i++) {
                var s = this._proportionallyResizeElements[i];
                if (!this.borderDif) {
                    var n = [s.css("borderTopWidth"), s.css("borderRightWidth"), s.css("borderBottomWidth"), s.css("borderLeftWidth")],
                        o = [s.css("paddingTop"), s.css("paddingRight"), s.css("paddingBottom"), s.css("paddingLeft")];
                    this.borderDif = t.map(n, function (t, e) {
                        var i = parseInt(t, 10) || 0, s = parseInt(o[e], 10) || 0;
                        return i + s
                    })
                }
                s.css({
                    height: e.height() - this.borderDif[0] - this.borderDif[2] || 0,
                    width: e.width() - this.borderDif[1] - this.borderDif[3] || 0
                })
            }
        },
        _renderProxy: function () {
            var e = this.element, i = this.options;
            if (this.elementOffset = e.offset(), this._helper) {
                this.helper = this.helper || t('<div style="overflow:hidden;"></div>');
                var s = t.ui.ie6 ? 1 : 0, n = t.ui.ie6 ? 2 : -1;
                this.helper.addClass(this._helper).css({
                    width: this.element.outerWidth() + n,
                    height: this.element.outerHeight() + n,
                    position: "absolute",
                    left: this.elementOffset.left - s + "px",
                    top: this.elementOffset.top - s + "px",
                    zIndex: ++i.zIndex
                }), this.helper.appendTo("body").disableSelection()
            } else this.helper = this.element
        },
        _change: {
            e: function (t, e) {
                return {width: this.originalSize.width + e}
            }, w: function (t, e) {
                var i = (this.options, this.originalSize), s = this.originalPosition;
                return {left: s.left + e, width: i.width - e}
            }, n: function (t, e, i) {
                var s = (this.options, this.originalSize), n = this.originalPosition;
                return {top: n.top + i, height: s.height - i}
            }, s: function (t, e, i) {
                return {height: this.originalSize.height + i}
            }, se: function (e, i, s) {
                return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
            }, sw: function (e, i, s) {
                return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
            }, ne: function (e, i, s) {
                return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
            }, nw: function (e, i, s) {
                return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
            }
        },
        _propagate: function (e, i) {
            t.ui.plugin.call(this, e, [i, this.ui()]), "resize" != e && this._trigger(e, i, this.ui())
        },
        plugins: {},
        ui: function () {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }), t.ui.plugin.add("resizable", "alsoResize", {
        start: function () {
            var e = t(this).data("resizable"), i = e.options, s = function (e) {
                t(e).each(function () {
                    var e = t(this);
                    e.data("resizable-alsoresize", {
                        width: parseInt(e.width(), 10),
                        height: parseInt(e.height(), 10),
                        left: parseInt(e.css("left"), 10),
                        top: parseInt(e.css("top"), 10)
                    })
                })
            };
            "object" != typeof i.alsoResize || i.alsoResize.parentNode ? s(i.alsoResize) : i.alsoResize.length ? (i.alsoResize = i.alsoResize[0], s(i.alsoResize)) : t.each(i.alsoResize, function (t) {
                s(t)
            })
        }, resize: function (e, i) {
            var s = t(this).data("resizable"), n = s.options, o = s.originalSize, a = s.originalPosition, r = {
                height: s.size.height - o.height || 0,
                width: s.size.width - o.width || 0,
                top: s.position.top - a.top || 0,
                left: s.position.left - a.left || 0
            }, l = function (e, s) {
                t(e).each(function () {
                    var e = t(this), n = t(this).data("resizable-alsoresize"), o = {},
                        a = s && s.length ? s : e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                    t.each(a, function (t, e) {
                        var i = (n[e] || 0) + (r[e] || 0);
                        i && i >= 0 && (o[e] = i || null)
                    }), e.css(o)
                })
            };
            "object" != typeof n.alsoResize || n.alsoResize.nodeType ? l(n.alsoResize) : t.each(n.alsoResize, function (t, e) {
                l(t, e)
            })
        }, stop: function () {
            t(this).removeData("resizable-alsoresize")
        }
    }), t.ui.plugin.add("resizable", "animate", {
        stop: function (e) {
            var i = t(this).data("resizable"), s = i.options, n = i._proportionallyResizeElements,
                o = n.length && /textarea/i.test(n[0].nodeName),
                a = o && t.ui.hasScroll(n[0], "left") ? 0 : i.sizeDiff.height, r = o ? 0 : i.sizeDiff.width,
                l = {width: i.size.width - r, height: i.size.height - a},
                h = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
                c = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(t.extend(l, c && h ? {top: c, left: h} : {}), {
                duration: s.animateDuration,
                easing: s.animateEasing,
                step: function () {
                    var s = {
                        width: parseInt(i.element.css("width"), 10),
                        height: parseInt(i.element.css("height"), 10),
                        top: parseInt(i.element.css("top"), 10),
                        left: parseInt(i.element.css("left"), 10)
                    };
                    n && n.length && t(n[0]).css({
                        width: s.width,
                        height: s.height
                    }), i._updateCache(s), i._propagate("resize", e)
                }
            })
        }
    }), t.ui.plugin.add("resizable", "containment", {
        start: function () {
            var i = t(this).data("resizable"), s = i.options, n = i.element, o = s.containment,
                a = o instanceof t ? o.get(0) : /parent/.test(o) ? n.parent().get(0) : o;
            if (a) if (i.containerElement = t(a), /document/.test(o) || o == document) i.containerOffset = {
                left: 0,
                top: 0
            }, i.containerPosition = {left: 0, top: 0}, i.parentData = {
                element: t(document),
                left: 0,
                top: 0,
                width: t(document).width(),
                height: t(document).height() || document.body.parentNode.scrollHeight
            }; else {
                var r = t(a), l = [];
                t(["Top", "Right", "Left", "Bottom"]).each(function (t, i) {
                    l[t] = e(r.css("padding" + i))
                }), i.containerOffset = r.offset(), i.containerPosition = r.position(), i.containerSize = {
                    height: r.innerHeight() - l[3],
                    width: r.innerWidth() - l[1]
                };
                var h = i.containerOffset, c = i.containerSize.height, u = i.containerSize.width,
                    d = t.ui.hasScroll(a, "left") ? a.scrollWidth : u, p = t.ui.hasScroll(a) ? a.scrollHeight : c;
                i.parentData = {element: a, left: h.left, top: h.top, width: d, height: p}
            }
        }, resize: function (e) {
            var i = t(this).data("resizable"), s = i.options, n = (i.containerSize, i.containerOffset),
                o = (i.size, i.position), a = i._aspectRatio || e.shiftKey, r = {top: 0, left: 0},
                l = i.containerElement;
            l[0] != document && /static/.test(l.css("position")) && (r = n), o.left < (i._helper ? n.left : 0) && (i.size.width = i.size.width + (i._helper ? i.position.left - n.left : i.position.left - r.left), a && (i.size.height = i.size.width / i.aspectRatio), i.position.left = s.helper ? n.left : 0), o.top < (i._helper ? n.top : 0) && (i.size.height = i.size.height + (i._helper ? i.position.top - n.top : i.position.top), a && (i.size.width = i.size.height * i.aspectRatio), i.position.top = i._helper ? n.top : 0), i.offset.left = i.parentData.left + i.position.left, i.offset.top = i.parentData.top + i.position.top;
            var h = Math.abs((i._helper ? i.offset.left - r.left : i.offset.left - r.left) + i.sizeDiff.width),
                c = Math.abs((i._helper ? i.offset.top - r.top : i.offset.top - n.top) + i.sizeDiff.height),
                u = i.containerElement.get(0) == i.element.parent().get(0),
                d = /relative|absolute/.test(i.containerElement.css("position"));
            u && d && (h -= i.parentData.left), h + i.size.width >= i.parentData.width && (i.size.width = i.parentData.width - h, a && (i.size.height = i.size.width / i.aspectRatio)), c + i.size.height >= i.parentData.height && (i.size.height = i.parentData.height - c, a && (i.size.width = i.size.height * i.aspectRatio))
        }, stop: function () {
            var e = t(this).data("resizable"), i = e.options, s = (e.position, e.containerOffset),
                n = e.containerPosition, o = e.containerElement, a = t(e.helper), r = a.offset(),
                l = a.outerWidth() - e.sizeDiff.width, h = a.outerHeight() - e.sizeDiff.height;
            e._helper && !i.animate && /relative/.test(o.css("position")) && t(this).css({
                left: r.left - n.left - s.left,
                width: l,
                height: h
            }), e._helper && !i.animate && /static/.test(o.css("position")) && t(this).css({
                left: r.left - n.left - s.left,
                width: l,
                height: h
            })
        }
    }), t.ui.plugin.add("resizable", "ghost", {
        start: function () {
            var e = t(this).data("resizable"), i = e.options, s = e.size;
            e.ghost = e.originalElement.clone(), e.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: s.height,
                width: s.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""), e.ghost.appendTo(e.helper)
        }, resize: function () {
            var e = t(this).data("resizable");
            e.options, e.ghost && e.ghost.css({position: "relative", height: e.size.height, width: e.size.width})
        }, stop: function () {
            var e = t(this).data("resizable");
            e.options, e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
        }
    }), t.ui.plugin.add("resizable", "grid", {
        resize: function (e) {
            var i = t(this).data("resizable"), s = i.options, n = i.size, o = i.originalSize, a = i.originalPosition,
                r = i.axis;
            s._aspectRatio || e.shiftKey, s.grid = "number" == typeof s.grid ? [s.grid, s.grid] : s.grid;
            var l = Math.round((n.width - o.width) / (s.grid[0] || 1)) * (s.grid[0] || 1),
                h = Math.round((n.height - o.height) / (s.grid[1] || 1)) * (s.grid[1] || 1);
            /^(se|s|e)$/.test(r) ? (i.size.width = o.width + l, i.size.height = o.height + h) : /^(ne)$/.test(r) ? (i.size.width = o.width + l, i.size.height = o.height + h, i.position.top = a.top - h) : /^(sw)$/.test(r) ? (i.size.width = o.width + l, i.size.height = o.height + h, i.position.left = a.left - l) : (i.size.width = o.width + l, i.size.height = o.height + h, i.position.top = a.top - h, i.position.left = a.left - l)
        }
    });
    var e = function (t) {
        return parseInt(t, 10) || 0
    }, i = function (t) {
        return !isNaN(parseInt(t, 10))
    }
})(jQuery);
(function (t) {
    t.widget("ui.selectable", t.ui.mouse, {
        version: "1.9.2",
        options: {appendTo: "body", autoRefresh: !0, distance: 0, filter: "*", tolerance: "touch"},
        _create: function () {
            var e = this;
            this.element.addClass("ui-selectable"), this.dragged = !1;
            var i;
            this.refresh = function () {
                i = t(e.options.filter, e.element[0]), i.addClass("ui-selectee"), i.each(function () {
                    var e = t(this), i = e.offset();
                    t.data(this, "selectable-item", {
                        element: this,
                        $element: e,
                        left: i.left,
                        top: i.top,
                        right: i.left + e.outerWidth(),
                        bottom: i.top + e.outerHeight(),
                        startselected: !1,
                        selected: e.hasClass("ui-selected"),
                        selecting: e.hasClass("ui-selecting"),
                        unselecting: e.hasClass("ui-unselecting")
                    })
                })
            }, this.refresh(), this.selectees = i.addClass("ui-selectee"), this._mouseInit(), this.helper = t("<div class='ui-selectable-helper'></div>")
        },
        _destroy: function () {
            this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
        },
        _mouseStart: function (e) {
            var i = this;
            if (this.opos = [e.pageX, e.pageY], !this.options.disabled) {
                var s = this.options;
                this.selectees = t(s.filter, this.element[0]), this._trigger("start", e), t(s.appendTo).append(this.helper), this.helper.css({
                    left: e.clientX,
                    top: e.clientY,
                    width: 0,
                    height: 0
                }), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
                    var s = t.data(this, "selectable-item");
                    s.startselected = !0, e.metaKey || e.ctrlKey || (s.$element.removeClass("ui-selected"), s.selected = !1, s.$element.addClass("ui-unselecting"), s.unselecting = !0, i._trigger("unselecting", e, {unselecting: s.element}))
                }), t(e.target).parents().andSelf().each(function () {
                    var s = t.data(this, "selectable-item");
                    if (s) {
                        var n = !e.metaKey && !e.ctrlKey || !s.$element.hasClass("ui-selected");
                        return s.$element.removeClass(n ? "ui-unselecting" : "ui-selected").addClass(n ? "ui-selecting" : "ui-unselecting"), s.unselecting = !n, s.selecting = n, s.selected = n, n ? i._trigger("selecting", e, {selecting: s.element}) : i._trigger("unselecting", e, {unselecting: s.element}), !1
                    }
                })
            }
        },
        _mouseDrag: function (e) {
            var i = this;
            if (this.dragged = !0, !this.options.disabled) {
                var s = this.options, n = this.opos[0], o = this.opos[1], a = e.pageX, r = e.pageY;
                if (n > a) {
                    var l = a;
                    a = n, n = l
                }
                if (o > r) {
                    var l = r;
                    r = o, o = l
                }
                return this.helper.css({
                    left: n,
                    top: o,
                    width: a - n,
                    height: r - o
                }), this.selectees.each(function () {
                    var l = t.data(this, "selectable-item");
                    if (l && l.element != i.element[0]) {
                        var h = !1;
                        "touch" == s.tolerance ? h = !(l.left > a || n > l.right || l.top > r || o > l.bottom) : "fit" == s.tolerance && (h = l.left > n && a > l.right && l.top > o && r > l.bottom), h ? (l.selected && (l.$element.removeClass("ui-selected"), l.selected = !1), l.unselecting && (l.$element.removeClass("ui-unselecting"), l.unselecting = !1), l.selecting || (l.$element.addClass("ui-selecting"), l.selecting = !0, i._trigger("selecting", e, {selecting: l.element}))) : (l.selecting && ((e.metaKey || e.ctrlKey) && l.startselected ? (l.$element.removeClass("ui-selecting"), l.selecting = !1, l.$element.addClass("ui-selected"), l.selected = !0) : (l.$element.removeClass("ui-selecting"), l.selecting = !1, l.startselected && (l.$element.addClass("ui-unselecting"), l.unselecting = !0), i._trigger("unselecting", e, {unselecting: l.element}))), l.selected && (e.metaKey || e.ctrlKey || l.startselected || (l.$element.removeClass("ui-selected"), l.selected = !1, l.$element.addClass("ui-unselecting"), l.unselecting = !0, i._trigger("unselecting", e, {unselecting: l.element}))))
                    }
                }), !1
            }
        },
        _mouseStop: function (e) {
            var i = this;
            return this.dragged = !1, this.options, t(".ui-unselecting", this.element[0]).each(function () {
                var s = t.data(this, "selectable-item");
                s.$element.removeClass("ui-unselecting"), s.unselecting = !1, s.startselected = !1, i._trigger("unselected", e, {unselected: s.element})
            }), t(".ui-selecting", this.element[0]).each(function () {
                var s = t.data(this, "selectable-item");
                s.$element.removeClass("ui-selecting").addClass("ui-selected"), s.selecting = !1, s.selected = !0, s.startselected = !0, i._trigger("selected", e, {selected: s.element})
            }), this._trigger("stop", e), this.helper.remove(), !1
        }
    })
})(jQuery);
(function (t) {
    t.widget("ui.sortable", t.ui.mouse, {
        version: "1.9.2",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3
        },
        _create: function () {
            var t = this.options;
            this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === t.axis || /left|right/.test(this.items[0].item.css("float")) || /inline|table-cell/.test(this.items[0].item.css("display")) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
        },
        _destroy: function () {
            this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
            for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
            return this
        },
        _setOption: function (e, i) {
            "disabled" === e ? (this.options[e] = i, this.widget().toggleClass("ui-sortable-disabled", !!i)) : t.Widget.prototype._setOption.apply(this, arguments)
        },
        _mouseCapture: function (e, i) {
            var s = this;
            if (this.reverting) return !1;
            if (this.options.disabled || "static" == this.options.type) return !1;
            this._refreshItems(e);
            var n = null;
            if (t(e.target).parents().each(function () {
                return t.data(this, s.widgetName + "-item") == s ? (n = t(this), !1) : undefined
            }), t.data(e.target, s.widgetName + "-item") == s && (n = t(e.target)), !n) return !1;
            if (this.options.handle && !i) {
                var o = !1;
                if (t(this.options.handle, n).find("*").andSelf().each(function () {
                    this == e.target && (o = !0)
                }), !o) return !1
            }
            return this.currentItem = n, this._removeCurrentsFromItems(), !0
        },
        _mouseStart: function (e, i, s) {
            var n = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, t.extend(this.offset, {
                click: {left: e.pageX - this.offset.left, top: e.pageY - this.offset.top},
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, n.cursorAt && this._adjustOffsetFromHelper(n.cursorAt), this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            }, this.helper[0] != this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), n.containment && this._setContainment(), n.cursor && (t("body").css("cursor") && (this._storedCursor = t("body").css("cursor")), t("body").css("cursor", n.cursor)), n.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", n.opacity)), n.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", n.zIndex)), this.scrollParent[0] != document && "HTML" != this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s) for (var o = this.containers.length - 1; o >= 0; o--) this.containers[o]._trigger("activate", e, this._uiHash(this));
            return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !n.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(e), !0
        },
        _mouseDrag: function (e) {
            if (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll) {
                var i = this.options, s = !1;
                this.scrollParent[0] != document && "HTML" != this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < i.scrollSensitivity ? this.scrollParent[0].scrollTop = s = this.scrollParent[0].scrollTop + i.scrollSpeed : e.pageY - this.overflowOffset.top < i.scrollSensitivity && (this.scrollParent[0].scrollTop = s = this.scrollParent[0].scrollTop - i.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < i.scrollSensitivity ? this.scrollParent[0].scrollLeft = s = this.scrollParent[0].scrollLeft + i.scrollSpeed : e.pageX - this.overflowOffset.left < i.scrollSensitivity && (this.scrollParent[0].scrollLeft = s = this.scrollParent[0].scrollLeft - i.scrollSpeed)) : (e.pageY - t(document).scrollTop() < i.scrollSensitivity ? s = t(document).scrollTop(t(document).scrollTop() - i.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < i.scrollSensitivity && (s = t(document).scrollTop(t(document).scrollTop() + i.scrollSpeed)), e.pageX - t(document).scrollLeft() < i.scrollSensitivity ? s = t(document).scrollLeft(t(document).scrollLeft() - i.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < i.scrollSensitivity && (s = t(document).scrollLeft(t(document).scrollLeft() + i.scrollSpeed))), s !== !1 && t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)
            }
            this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" == this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" == this.options.axis || (this.helper[0].style.top = this.position.top + "px");
            for (var n = this.items.length - 1; n >= 0; n--) {
                var o = this.items[n], a = o.item[0], r = this._intersectsWithPointer(o);
                if (r && o.instance === this.currentContainer && a != this.currentItem[0] && this.placeholder[1 == r ? "next" : "prev"]()[0] != a && !t.contains(this.placeholder[0], a) && ("semi-dynamic" == this.options.type ? !t.contains(this.element[0], a) : !0)) {
                    if (this.direction = 1 == r ? "down" : "up", "pointer" != this.options.tolerance && !this._intersectsWithSides(o)) break;
                    this._rearrange(e, o), this._trigger("change", e, this._uiHash());
                    break
                }
            }
            return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function (e, i) {
            if (e) {
                if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                    var s = this, n = this.placeholder.offset();
                    this.reverting = !0, t(this.helper).animate({
                        left: n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft),
                        top: n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)
                    }, parseInt(this.options.revert, 10) || 500, function () {
                        s._clear(e)
                    })
                } else this._clear(e, i);
                return !1
            }
        },
        cancel: function () {
            if (this.dragging) {
                this._mouseUp({target: null}), "original" == this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" != this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function (e) {
            var i = this._getItemsAsjQuery(e && e.connected), s = [];
            return e = e || {}, t(i).each(function () {
                var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[-=_](.+)/);
                i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
            }), !s.length && e.key && s.push(e.key + "="), s.join("&")
        },
        toArray: function (e) {
            var i = this._getItemsAsjQuery(e && e.connected), s = [];
            return e = e || {}, i.each(function () {
                s.push(t(e.item || this).attr(e.attribute || "id") || "")
            }), s
        },
        _intersectsWith: function (t) {
            var e = this.positionAbs.left, i = e + this.helperProportions.width, s = this.positionAbs.top,
                n = s + this.helperProportions.height, o = t.left, a = o + t.width, r = t.top, h = r + t.height,
                l = this.offset.click.top, c = this.offset.click.left,
                u = s + l > r && h > s + l && e + c > o && a > e + c;
            return "pointer" == this.options.tolerance || this.options.forcePointerForContainers || "pointer" != this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? u : e + this.helperProportions.width / 2 > o && a > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && h > n - this.helperProportions.height / 2
        },
        _intersectsWithPointer: function (e) {
            var i = "x" === this.options.axis || t.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, e.top, e.height),
                s = "y" === this.options.axis || t.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, e.left, e.width),
                n = i && s, o = this._getDragVerticalDirection(), a = this._getDragHorizontalDirection();
            return n ? this.floating ? a && "right" == a || "down" == o ? 2 : 1 : o && ("down" == o ? 2 : 1) : !1
        },
        _intersectsWithSides: function (e) {
            var i = t.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, e.top + e.height / 2, e.height),
                s = t.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width),
                n = this._getDragVerticalDirection(), o = this._getDragHorizontalDirection();
            return this.floating && o ? "right" == o && s || "left" == o && !s : n && ("down" == n && i || "up" == n && !i)
        },
        _getDragVerticalDirection: function () {
            var t = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 != t && (t > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function () {
            var t = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 != t && (t > 0 ? "right" : "left")
        },
        refresh: function (t) {
            return this._refreshItems(t), this.refreshPositions(), this
        },
        _connectWith: function () {
            var t = this.options;
            return t.connectWith.constructor == String ? [t.connectWith] : t.connectWith
        },
        _getItemsAsjQuery: function (e) {
            var i = [], s = [], n = this._connectWith();
            if (n && e) for (var o = n.length - 1; o >= 0; o--) for (var a = t(n[o]), r = a.length - 1; r >= 0; r--) {
                var h = t.data(a[r], this.widgetName);
                h && h != this && !h.options.disabled && s.push([t.isFunction(h.options.items) ? h.options.items.call(h.element) : t(h.options.items, h.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), h])
            }
            s.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
            for (var o = s.length - 1; o >= 0; o--) s[o][0].each(function () {
                i.push(this)
            });
            return t(i)
        },
        _removeCurrentsFromItems: function () {
            var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = t.grep(this.items, function (t) {
                for (var i = 0; e.length > i; i++) if (e[i] == t.item[0]) return !1;
                return !0
            })
        },
        _refreshItems: function (e) {
            this.items = [], this.containers = [this];
            var i = this.items,
                s = [[t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {item: this.currentItem}) : t(this.options.items, this.element), this]],
                n = this._connectWith();
            if (n && this.ready) for (var o = n.length - 1; o >= 0; o--) for (var a = t(n[o]), r = a.length - 1; r >= 0; r--) {
                var h = t.data(a[r], this.widgetName);
                h && h != this && !h.options.disabled && (s.push([t.isFunction(h.options.items) ? h.options.items.call(h.element[0], e, {item: this.currentItem}) : t(h.options.items, h.element), h]), this.containers.push(h))
            }
            for (var o = s.length - 1; o >= 0; o--) for (var l = s[o][1], c = s[o][0], r = 0, u = c.length; u > r; r++) {
                var d = t(c[r]);
                d.data(this.widgetName + "-item", l), i.push({
                    item: d,
                    instance: l,
                    width: 0,
                    height: 0,
                    left: 0,
                    top: 0
                })
            }
        },
        refreshPositions: function (e) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            for (var i = this.items.length - 1; i >= 0; i--) {
                var s = this.items[i];
                if (s.instance == this.currentContainer || !this.currentContainer || s.item[0] == this.currentItem[0]) {
                    var n = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item;
                    e || (s.width = n.outerWidth(), s.height = n.outerHeight());
                    var o = n.offset();
                    s.left = o.left, s.top = o.top
                }
            }
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this); else for (var i = this.containers.length - 1; i >= 0; i--) {
                var o = this.containers[i].element.offset();
                this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight()
            }
            return this
        },
        _createPlaceholder: function (e) {
            e = e || this;
            var i = e.options;
            if (!i.placeholder || i.placeholder.constructor == String) {
                var s = i.placeholder;
                i.placeholder = {
                    element: function () {
                        var i = t(document.createElement(e.currentItem[0].nodeName)).addClass(s || e.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
                        return s || (i.style.visibility = "hidden"), i
                    }, update: function (t, n) {
                        (!s || i.forcePlaceholderSize) && (n.height() || n.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
                    }
                }
            }
            e.placeholder = t(i.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), i.placeholder.update(e, e.placeholder)
        },
        _contactContainers: function (e) {
            for (var i = null, s = null, n = this.containers.length - 1; n >= 0; n--) if (!t.contains(this.currentItem[0], this.containers[n].element[0])) if (this._intersectsWith(this.containers[n].containerCache)) {
                if (i && t.contains(this.containers[n].element[0], i.element[0])) continue;
                i = this.containers[n], s = n
            } else this.containers[n].containerCache.over && (this.containers[n]._trigger("out", e, this._uiHash(this)), this.containers[n].containerCache.over = 0);
            if (i) if (1 === this.containers.length) this.containers[s]._trigger("over", e, this._uiHash(this)), this.containers[s].containerCache.over = 1; else {
                for (var o = 1e4, a = null, r = this.containers[s].floating ? "left" : "top", h = this.containers[s].floating ? "width" : "height", l = this.positionAbs[r] + this.offset.click[r], c = this.items.length - 1; c >= 0; c--) if (t.contains(this.containers[s].element[0], this.items[c].item[0]) && this.items[c].item[0] != this.currentItem[0]) {
                    var u = this.items[c].item.offset()[r], d = !1;
                    Math.abs(u - l) > Math.abs(u + this.items[c][h] - l) && (d = !0, u += this.items[c][h]), o > Math.abs(u - l) && (o = Math.abs(u - l), a = this.items[c], this.direction = d ? "up" : "down")
                }
                if (!a && !this.options.dropOnEmpty) return;
                this.currentContainer = this.containers[s], a ? this._rearrange(e, a, null, !0) : this._rearrange(e, null, this.containers[s].element, !0), this._trigger("change", e, this._uiHash()), this.containers[s]._trigger("change", e, this._uiHash(this)), this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[s]._trigger("over", e, this._uiHash(this)), this.containers[s].containerCache.over = 1
            }
        },
        _createHelper: function (e) {
            var i = this.options,
                s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" == i.helper ? this.currentItem.clone() : this.currentItem;
            return s.parents("body").length || t("parent" != i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] == this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), ("" == s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), ("" == s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s
        },
        _adjustOffsetFromHelper: function (e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _getParentOffset: function () {
            this.offsetParent = this.helper.offsetParent();
            var e = this.offsetParent.offset();
            return "absolute" == this.cssPosition && this.scrollParent[0] != document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && "html" == this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                top: 0,
                left: 0
            }), {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if ("relative" == this.cssPosition) {
                var t = this.currentItem.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {top: 0, left: 0}
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()}
        },
        _setContainment: function () {
            var e = this.options;
            if ("parent" == e.containment && (e.containment = this.helper[0].parentNode), ("document" == e.containment || "window" == e.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, t("document" == e.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (t("document" == e.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), !/^(document|window|parent)$/.test(e.containment)) {
                var i = t(e.containment)[0], s = t(e.containment).offset(), n = "hidden" != t(i).css("overflow");
                this.containment = [s.left + (parseInt(t(i).css("borderLeftWidth"), 10) || 0) + (parseInt(t(i).css("paddingLeft"), 10) || 0) - this.margins.left, s.top + (parseInt(t(i).css("borderTopWidth"), 10) || 0) + (parseInt(t(i).css("paddingTop"), 10) || 0) - this.margins.top, s.left + (n ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(t(i).css("borderLeftWidth"), 10) || 0) - (parseInt(t(i).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, s.top + (n ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(t(i).css("borderTopWidth"), 10) || 0) - (parseInt(t(i).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
            }
        },
        _convertPositionTo: function (e, i) {
            i || (i = this.position);
            var s = "absolute" == e ? 1 : -1,
                n = (this.options, "absolute" != this.cssPosition || this.scrollParent[0] != document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent),
                o = /(html|body)/i.test(n[0].tagName);
            return {
                top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : n.scrollTop()) * s,
                left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : n.scrollLeft()) * s
            }
        },
        _generatePosition: function (e) {
            var i = this.options,
                s = "absolute" != this.cssPosition || this.scrollParent[0] != document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                n = /(html|body)/i.test(s[0].tagName);
            "relative" != this.cssPosition || this.scrollParent[0] != document && this.scrollParent[0] != this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset());
            var o = e.pageX, a = e.pageY;
            if (this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)), i.grid)) {
                var r = this.originalPageY + Math.round((a - this.originalPageY) / i.grid[1]) * i.grid[1];
                a = this.containment ? r - this.offset.click.top < this.containment[1] || r - this.offset.click.top > this.containment[3] ? r - this.offset.click.top < this.containment[1] ? r + i.grid[1] : r - i.grid[1] : r : r;
                var h = this.originalPageX + Math.round((o - this.originalPageX) / i.grid[0]) * i.grid[0];
                o = this.containment ? h - this.offset.click.left < this.containment[0] || h - this.offset.click.left > this.containment[2] ? h - this.offset.click.left < this.containment[0] ? h + i.grid[0] : h - i.grid[0] : h : h
            }
            return {
                top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : n ? 0 : s.scrollTop()),
                left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : n ? 0 : s.scrollLeft())
            }
        },
        _rearrange: function (t, e, i, s) {
            i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" == this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var n = this.counter;
            this._delay(function () {
                n == this.counter && this.refreshPositions(!s)
            })
        },
        _clear: function (e, i) {
            this.reverting = !1;
            var s = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] == this.currentItem[0]) {
                for (var n in this._storedCSS) ("auto" == this._storedCSS[n] || "static" == this._storedCSS[n]) && (this._storedCSS[n] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();
            this.fromOutside && !i && s.push(function (t) {
                this._trigger("receive", t, this._uiHash(this.fromOutside))
            }), !this.fromOutside && this.domPosition.prev == this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent == this.currentItem.parent()[0] || i || s.push(function (t) {
                this._trigger("update", t, this._uiHash())
            }), this !== this.currentContainer && (i || (s.push(function (t) {
                this._trigger("remove", t, this._uiHash())
            }), s.push(function (t) {
                return function (e) {
                    t._trigger("receive", e, this._uiHash(this))
                }
            }.call(this, this.currentContainer)), s.push(function (t) {
                return function (e) {
                    t._trigger("update", e, this._uiHash(this))
                }
            }.call(this, this.currentContainer))));
            for (var n = this.containers.length - 1; n >= 0; n--) i || s.push(function (t) {
                return function (e) {
                    t._trigger("deactivate", e, this._uiHash(this))
                }
            }.call(this, this.containers[n])), this.containers[n].containerCache.over && (s.push(function (t) {
                return function (e) {
                    t._trigger("out", e, this._uiHash(this))
                }
            }.call(this, this.containers[n])), this.containers[n].containerCache.over = 0);
            if (this._storedCursor && t("body").css("cursor", this._storedCursor), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" == this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
                if (!i) {
                    this._trigger("beforeStop", e, this._uiHash());
                    for (var n = 0; s.length > n; n++) s[n].call(this, e);
                    this._trigger("stop", e, this._uiHash())
                }
                return this.fromOutside = !1, !1
            }
            if (i || this._trigger("beforeStop", e, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] != this.currentItem[0] && this.helper.remove(), this.helper = null, !i) {
                for (var n = 0; s.length > n; n++) s[n].call(this, e);
                this._trigger("stop", e, this._uiHash())
            }
            return this.fromOutside = !1, !0
        },
        _trigger: function () {
            t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function (e) {
            var i = e || this;
            return {
                helper: i.helper,
                placeholder: i.placeholder || t([]),
                position: i.position,
                originalPosition: i.originalPosition,
                offset: i.positionAbs,
                item: i.currentItem,
                sender: e ? e.element : null
            }
        }
    })
})(jQuery);
(function (t) {
    var e = 0, i = {}, s = {};
    i.height = i.paddingTop = i.paddingBottom = i.borderTopWidth = i.borderBottomWidth = "hide", s.height = s.paddingTop = s.paddingBottom = s.borderTopWidth = s.borderBottomWidth = "show", t.widget("ui.accordion", {
        version: "1.9.2",
        options: {
            active: 0,
            animate: {},
            collapsible: !1,
            event: "click",
            header: "> li > :first-child,> :not(li):even",
            heightStyle: "auto",
            icons: {activeHeader: "ui-icon-triangle-1-s", header: "ui-icon-triangle-1-e"},
            activate: null,
            beforeActivate: null
        },
        _create: function () {
            var i = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++e), s = this.options;
            this.prevShow = this.prevHide = t(), this.element.addClass("ui-accordion ui-widget ui-helper-reset"), this.headers = this.element.find(s.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"), this._hoverable(this.headers), this._focusable(this.headers), this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").hide(), s.collapsible || s.active !== !1 && null != s.active || (s.active = 0), 0 > s.active && (s.active += this.headers.length), this.active = this._findActive(s.active).addClass("ui-accordion-header-active ui-state-active").toggleClass("ui-corner-all ui-corner-top"), this.active.next().addClass("ui-accordion-content-active").show(), this._createIcons(), this.refresh(), this.element.attr("role", "tablist"), this.headers.attr("role", "tab").each(function (e) {
                var s = t(this), n = s.attr("id"), o = s.next(), a = o.attr("id");
                n || (n = i + "-header-" + e, s.attr("id", n)), a || (a = i + "-panel-" + e, o.attr("id", a)), s.attr("aria-controls", a), o.attr("aria-labelledby", n)
            }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                "aria-selected": "false",
                tabIndex: -1
            }).next().attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }).hide(), this.active.length ? this.active.attr({
                "aria-selected": "true",
                tabIndex: 0
            }).next().attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }) : this.headers.eq(0).attr("tabIndex", 0), this._on(this.headers, {keydown: "_keydown"}), this._on(this.headers.next(), {keydown: "_panelKeyDown"}), this._setupEvents(s.event)
        },
        _getCreateEventData: function () {
            return {header: this.active, content: this.active.length ? this.active.next() : t()}
        },
        _createIcons: function () {
            var e = this.options.icons;
            e && (t("<span>").addClass("ui-accordion-header-icon ui-icon " + e.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(e.header).addClass(e.activeHeader), this.headers.addClass("ui-accordion-icons"))
        },
        _destroyIcons: function () {
            this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
        },
        _destroy: function () {
            var t;
            this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function () {
                /^ui-accordion/.test(this.id) && this.removeAttribute("id")
            }), this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function () {
                /^ui-accordion/.test(this.id) && this.removeAttribute("id")
            }), "content" !== this.options.heightStyle && t.css("height", "")
        },
        _setOption: function (t, e) {
            return "active" === t ? (this._activate(e), undefined) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || this.options.active !== !1 || this._activate(0), "icons" === t && (this._destroyIcons(), e && this._createIcons()), "disabled" === t && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!e), undefined)
        },
        _keydown: function (e) {
            if (!e.altKey && !e.ctrlKey) {
                var i = t.ui.keyCode, s = this.headers.length, n = this.headers.index(e.target), o = !1;
                switch (e.keyCode) {
                    case i.RIGHT:
                    case i.DOWN:
                        o = this.headers[(n + 1) % s];
                        break;
                    case i.LEFT:
                    case i.UP:
                        o = this.headers[(n - 1 + s) % s];
                        break;
                    case i.SPACE:
                    case i.ENTER:
                        this._eventHandler(e);
                        break;
                    case i.HOME:
                        o = this.headers[0];
                        break;
                    case i.END:
                        o = this.headers[s - 1]
                }
                o && (t(e.target).attr("tabIndex", -1), t(o).attr("tabIndex", 0), o.focus(), e.preventDefault())
            }
        },
        _panelKeyDown: function (e) {
            e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().focus()
        },
        refresh: function () {
            var e, i, s = this.options.heightStyle, n = this.element.parent();
            "fill" === s ? (t.support.minHeight || (i = n.css("overflow"), n.css("overflow", "hidden")), e = n.height(), this.element.siblings(":visible").each(function () {
                var i = t(this), s = i.css("position");
                "absolute" !== s && "fixed" !== s && (e -= i.outerHeight(!0))
            }), i && n.css("overflow", i), this.headers.each(function () {
                e -= t(this).outerHeight(!0)
            }), this.headers.next().each(function () {
                t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height()))
            }).css("overflow", "auto")) : "auto" === s && (e = 0, this.headers.next().each(function () {
                e = Math.max(e, t(this).css("height", "").height())
            }).height(e))
        },
        _activate: function (e) {
            var i = this._findActive(e)[0];
            i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: t.noop
            }))
        },
        _findActive: function (e) {
            return "number" == typeof e ? this.headers.eq(e) : t()
        },
        _setupEvents: function (e) {
            var i = {};
            e && (t.each(e.split(" "), function (t, e) {
                i[e] = "_eventHandler"
            }), this._on(this.headers, i))
        },
        _eventHandler: function (e) {
            var i = this.options, s = this.active, n = t(e.currentTarget), o = n[0] === s[0], a = o && i.collapsible,
                r = a ? t() : n.next(), h = s.next(),
                l = {oldHeader: s, oldPanel: h, newHeader: a ? t() : n, newPanel: r};
            e.preventDefault(), o && !i.collapsible || this._trigger("beforeActivate", e, l) === !1 || (i.active = a ? !1 : this.headers.index(n), this.active = o ? t() : n, this._toggle(l), s.removeClass("ui-accordion-header-active ui-state-active"), i.icons && s.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header), o || (n.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), i.icons && n.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader), n.next().addClass("ui-accordion-content-active")))
        },
        _toggle: function (e) {
            var i = e.newPanel, s = this.prevShow.length ? this.prevShow : e.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = s, this.options.animate ? this._animate(i, s, e) : (s.hide(), i.show(), this._toggleComplete(e)), s.attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }), s.prev().attr("aria-selected", "false"), i.length && s.length ? s.prev().attr("tabIndex", -1) : i.length && this.headers.filter(function () {
                return 0 === t(this).attr("tabIndex")
            }).attr("tabIndex", -1), i.attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }).prev().attr({"aria-selected": "true", tabIndex: 0})
        },
        _animate: function (t, e, n) {
            var o, a, r, h = this, l = 0, c = t.length && (!e.length || t.index() < e.index()),
                u = this.options.animate || {}, d = c && u.down || u, p = function () {
                    h._toggleComplete(n)
                };
            return "number" == typeof d && (r = d), "string" == typeof d && (a = d), a = a || d.easing || u.easing, r = r || d.duration || u.duration, e.length ? t.length ? (o = t.show().outerHeight(), e.animate(i, {
                duration: r,
                easing: a,
                step: function (t, e) {
                    e.now = Math.round(t)
                }
            }), t.hide().animate(s, {
                duration: r, easing: a, complete: p, step: function (t, i) {
                    i.now = Math.round(t), "height" !== i.prop ? l += i.now : "content" !== h.options.heightStyle && (i.now = Math.round(o - e.outerHeight() - l), l = 0)
                }
            }), undefined) : e.animate(i, r, a, p) : t.animate(s, r, a, p)
        },
        _toggleComplete: function (t) {
            var e = t.oldPanel;
            e.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t)
        }
    }), t.uiBackCompat !== !1 && (function (t, e) {
        t.extend(e.options, {
            navigation: !1, navigationFilter: function () {
                return this.href.toLowerCase() === location.href.toLowerCase()
            }
        });
        var i = e._create;
        e._create = function () {
            if (this.options.navigation) {
                var e = this, s = this.element.find(this.options.header), n = s.next(),
                    o = s.add(n).find("a").filter(this.options.navigationFilter)[0];
                o && s.add(n).each(function (i) {
                    return t.contains(this, o) ? (e.options.active = Math.floor(i / 2), !1) : undefined
                })
            }
            i.call(this)
        }
    }(jQuery, jQuery.ui.accordion.prototype), function (t, e) {
        t.extend(e.options, {heightStyle: null, autoHeight: !0, clearStyle: !1, fillSpace: !1});
        var i = e._create, s = e._setOption;
        t.extend(e, {
            _create: function () {
                this.options.heightStyle = this.options.heightStyle || this._mergeHeightStyle(), i.call(this)
            }, _setOption: function (t) {
                ("autoHeight" === t || "clearStyle" === t || "fillSpace" === t) && (this.options.heightStyle = this._mergeHeightStyle()), s.apply(this, arguments)
            }, _mergeHeightStyle: function () {
                var t = this.options;
                return t.fillSpace ? "fill" : t.clearStyle ? "content" : t.autoHeight ? "auto" : undefined
            }
        })
    }(jQuery, jQuery.ui.accordion.prototype), function (t, e) {
        t.extend(e.options.icons, {activeHeader: null, headerSelected: "ui-icon-triangle-1-s"});
        var i = e._createIcons;
        e._createIcons = function () {
            this.options.icons && (this.options.icons.activeHeader = this.options.icons.activeHeader || this.options.icons.headerSelected), i.call(this)
        }
    }(jQuery, jQuery.ui.accordion.prototype), function (t, e) {
        e.activate = e._activate;
        var i = e._findActive;
        e._findActive = function (t) {
            return -1 === t && (t = !1), t && "number" != typeof t && (t = this.headers.index(this.headers.filter(t)), -1 === t && (t = !1)), i.call(this, t)
        }
    }(jQuery, jQuery.ui.accordion.prototype), jQuery.ui.accordion.prototype.resize = jQuery.ui.accordion.prototype.refresh, function (t, e) {
        t.extend(e.options, {change: null, changestart: null});
        var i = e._trigger;
        e._trigger = function (t, e, s) {
            var n = i.apply(this, arguments);
            return n ? ("beforeActivate" === t ? n = i.call(this, "changestart", e, {
                oldHeader: s.oldHeader,
                oldContent: s.oldPanel,
                newHeader: s.newHeader,
                newContent: s.newPanel
            }) : "activate" === t && (n = i.call(this, "change", e, {
                oldHeader: s.oldHeader,
                oldContent: s.oldPanel,
                newHeader: s.newHeader,
                newContent: s.newPanel
            })), n) : !1
        }
    }(jQuery, jQuery.ui.accordion.prototype), function (t, e) {
        t.extend(e.options, {animate: null, animated: "slide"});
        var i = e._create;
        e._create = function () {
            var t = this.options;
            null === t.animate && (t.animate = t.animated ? "slide" === t.animated ? 300 : "bounceslide" === t.animated ? {
                duration: 200,
                down: {easing: "easeOutBounce", duration: 1e3}
            } : t.animated : !1), i.call(this)
        }
    }(jQuery, jQuery.ui.accordion.prototype))
})(jQuery);
(function (t) {
    var e = 0;
    t.widget("ui.autocomplete", {
        version: "1.9.2",
        defaultElement: "<input>",
        options: {
            appendTo: "body",
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {my: "left top", at: "left bottom", collision: "none"},
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        pending: 0,
        _create: function () {
            var e, i, s;
            this.isMultiLine = this._isMultiLine(), this.valueMethod = this.element[this.element.is("input,textarea") ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
                keydown: function (n) {
                    if (this.element.prop("readOnly")) return e = !0, s = !0, i = !0, undefined;
                    e = !1, s = !1, i = !1;
                    var o = t.ui.keyCode;
                    switch (n.keyCode) {
                        case o.PAGE_UP:
                            e = !0, this._move("previousPage", n);
                            break;
                        case o.PAGE_DOWN:
                            e = !0, this._move("nextPage", n);
                            break;
                        case o.UP:
                            e = !0, this._keyEvent("previous", n);
                            break;
                        case o.DOWN:
                            e = !0, this._keyEvent("next", n);
                            break;
                        case o.ENTER:
                        case o.NUMPAD_ENTER:
                            this.menu.active && (e = !0, n.preventDefault(), this.menu.select(n));
                            break;
                        case o.TAB:
                            this.menu.active && this.menu.select(n);
                            break;
                        case o.ESCAPE:
                            this.menu.element.is(":visible") && (this._value(this.term), this.close(n), n.preventDefault());
                            break;
                        default:
                            i = !0, this._searchTimeout(n)
                    }
                }, keypress: function (s) {
                    if (e) return e = !1, s.preventDefault(), undefined;
                    if (!i) {
                        var n = t.ui.keyCode;
                        switch (s.keyCode) {
                            case n.PAGE_UP:
                                this._move("previousPage", s);
                                break;
                            case n.PAGE_DOWN:
                                this._move("nextPage", s);
                                break;
                            case n.UP:
                                this._keyEvent("previous", s);
                                break;
                            case n.DOWN:
                                this._keyEvent("next", s)
                        }
                    }
                }, input: function (t) {
                    return s ? (s = !1, t.preventDefault(), undefined) : (this._searchTimeout(t), undefined)
                }, focus: function () {
                    this.selectedItem = null, this.previous = this._value()
                }, blur: function (t) {
                    return this.cancelBlur ? (delete this.cancelBlur, undefined) : (clearTimeout(this.searching), this.close(t), this._change(t), undefined)
                }
            }), this._initSource(), this.menu = t("<ul>").addClass("ui-autocomplete").appendTo(this.document.find(this.options.appendTo || "body")[0]).menu({
                input: t(),
                role: null
            }).zIndex(this.element.zIndex() + 1).hide().data("menu"), this._on(this.menu.element, {
                mousedown: function (e) {
                    e.preventDefault(), this.cancelBlur = !0, this._delay(function () {
                        delete this.cancelBlur
                    });
                    var i = this.menu.element[0];
                    t(e.target).closest(".ui-menu-item").length || this._delay(function () {
                        var e = this;
                        this.document.one("mousedown", function (s) {
                            s.target === e.element[0] || s.target === i || t.contains(i, s.target) || e.close()
                        })
                    })
                }, menufocus: function (e, i) {
                    if (this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type))) return this.menu.blur(), this.document.one("mousemove", function () {
                        t(e.target).trigger(e.originalEvent)
                    }), undefined;
                    var s = i.item.data("ui-autocomplete-item") || i.item.data("item.autocomplete");
                    !1 !== this._trigger("focus", e, {item: s}) ? e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(s.value) : this.liveRegion.text(s.value)
                }, menuselect: function (t, e) {
                    var i = e.item.data("ui-autocomplete-item") || e.item.data("item.autocomplete"), s = this.previous;
                    this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = s, this._delay(function () {
                        this.previous = s, this.selectedItem = i
                    })), !1 !== this._trigger("select", t, {item: i}) && this._value(i.value), this.term = this._value(), this.close(t), this.selectedItem = i
                }
            }), this.liveRegion = t("<span>", {
                role: "status",
                "aria-live": "polite"
            }).addClass("ui-helper-hidden-accessible").insertAfter(this.element), t.fn.bgiframe && this.menu.element.bgiframe(), this._on(this.window, {
                beforeunload: function () {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function () {
            clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
        },
        _setOption: function (t, e) {
            this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this.document.find(e || "body")[0]), "disabled" === t && e && this.xhr && this.xhr.abort()
        },
        _isMultiLine: function () {
            return this.element.is("textarea") ? !0 : this.element.is("input") ? !1 : this.element.prop("isContentEditable")
        },
        _initSource: function () {
            var e, i, s = this;
            t.isArray(this.options.source) ? (e = this.options.source, this.source = function (i, s) {
                s(t.ui.autocomplete.filter(e, i.term))
            }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function (e, n) {
                s.xhr && s.xhr.abort(), s.xhr = t.ajax({
                    url: i, data: e, dataType: "json", success: function (t) {
                        n(t)
                    }, error: function () {
                        n([])
                    }
                })
            }) : this.source = this.options.source
        },
        _searchTimeout: function (t) {
            clearTimeout(this.searching), this.searching = this._delay(function () {
                this.term !== this._value() && (this.selectedItem = null, this.search(null, t))
            }, this.options.delay)
        },
        search: function (t, e) {
            return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : this._trigger("search", e) !== !1 ? this._search(t) : undefined
        },
        _search: function (t) {
            this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({term: t}, this._response())
        },
        _response: function () {
            var t = this, i = ++e;
            return function (s) {
                i === e && t.__response(s), t.pending--, t.pending || t.element.removeClass("ui-autocomplete-loading")
            }
        },
        __response: function (t) {
            t && (t = this._normalize(t)), this._trigger("response", null, {content: t}), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close()
        },
        close: function (t) {
            this.cancelSearch = !0, this._close(t)
        },
        _close: function (t) {
            this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t))
        },
        _change: function (t) {
            this.previous !== this._value() && this._trigger("change", t, {item: this.selectedItem})
        },
        _normalize: function (e) {
            return e.length && e[0].label && e[0].value ? e : t.map(e, function (e) {
                return "string" == typeof e ? {label: e, value: e} : t.extend({
                    label: e.label || e.value,
                    value: e.value || e.label
                }, e)
            })
        },
        _suggest: function (e) {
            var i = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
            this._renderMenu(i, e), this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({of: this.element}, this.options.position)), this.options.autoFocus && this.menu.next()
        },
        _resizeMenu: function () {
            var t = this.menu.element;
            t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function (e, i) {
            var s = this;
            t.each(i, function (t, i) {
                s._renderItemData(e, i)
            })
        },
        _renderItemData: function (t, e) {
            return this._renderItem(t, e).data("ui-autocomplete-item", e)
        },
        _renderItem: function (e, i) {
            return t("<li>").append(t("<a>").text(i.label)).appendTo(e)
        },
        _move: function (t, e) {
            return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this._value(this.term), this.menu.blur(), undefined) : (this.menu[t](e), undefined) : (this.search(null, e), undefined)
        },
        widget: function () {
            return this.menu.element
        },
        _value: function () {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function (t, e) {
            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault())
        }
    }), t.extend(t.ui.autocomplete, {
        escapeRegex: function (t) {
            return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        }, filter: function (e, i) {
            var s = RegExp(t.ui.autocomplete.escapeRegex(i), "i");
            return t.grep(e, function (t) {
                return s.test(t.label || t.value || t)
            })
        }
    }), t.widget("ui.autocomplete", t.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function (t) {
                    return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        }, __response: function (t) {
            var e;
            this._superApply(arguments), this.options.disabled || this.cancelSearch || (e = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, this.liveRegion.text(e))
        }
    })
})(jQuery);
(function (t) {
    var e, i, s, n, o = "ui-button ui-widget ui-state-default ui-corner-all", a = "ui-state-hover ui-state-active ",
        r = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
        l = function () {
            var e = t(this).find(":ui-button");
            setTimeout(function () {
                e.button("refresh")
            }, 1)
        }, h = function (e) {
            var i = e.name, s = e.form, n = t([]);
            return i && (n = s ? t(s).find("[name='" + i + "']") : t("[name='" + i + "']", e.ownerDocument).filter(function () {
                return !this.form
            })), n
        };
    t.widget("ui.button", {
        version: "1.9.2",
        defaultElement: "<button>",
        options: {disabled: null, text: !0, label: null, icons: {primary: null, secondary: null}},
        _create: function () {
            this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, l), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
            var a = this, r = this.options, c = "checkbox" === this.type || "radio" === this.type,
                u = c ? "" : "ui-state-active", d = "ui-state-focus";
            null === r.label && (r.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(o).attr("role", "button").bind("mouseenter" + this.eventNamespace, function () {
                r.disabled || this === e && t(this).addClass("ui-state-active")
            }).bind("mouseleave" + this.eventNamespace, function () {
                r.disabled || t(this).removeClass(u)
            }).bind("click" + this.eventNamespace, function (t) {
                r.disabled && (t.preventDefault(), t.stopImmediatePropagation())
            }), this.element.bind("focus" + this.eventNamespace, function () {
                a.buttonElement.addClass(d)
            }).bind("blur" + this.eventNamespace, function () {
                a.buttonElement.removeClass(d)
            }), c && (this.element.bind("change" + this.eventNamespace, function () {
                n || a.refresh()
            }), this.buttonElement.bind("mousedown" + this.eventNamespace, function (t) {
                r.disabled || (n = !1, i = t.pageX, s = t.pageY)
            }).bind("mouseup" + this.eventNamespace, function (t) {
                r.disabled || (i !== t.pageX || s !== t.pageY) && (n = !0)
            })), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
                return r.disabled || n ? !1 : (t(this).toggleClass("ui-state-active"), a.buttonElement.attr("aria-pressed", a.element[0].checked), undefined)
            }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
                if (r.disabled || n) return !1;
                t(this).addClass("ui-state-active"), a.buttonElement.attr("aria-pressed", "true");
                var e = a.element[0];
                h(e).not(e).map(function () {
                    return t(this).button("widget")[0]
                }).removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function () {
                return r.disabled ? !1 : (t(this).addClass("ui-state-active"), e = this, a.document.one("mouseup", function () {
                    e = null
                }), undefined)
            }).bind("mouseup" + this.eventNamespace, function () {
                return r.disabled ? !1 : (t(this).removeClass("ui-state-active"), undefined)
            }).bind("keydown" + this.eventNamespace, function (e) {
                return r.disabled ? !1 : ((e.keyCode === t.ui.keyCode.SPACE || e.keyCode === t.ui.keyCode.ENTER) && t(this).addClass("ui-state-active"), undefined)
            }).bind("keyup" + this.eventNamespace, function () {
                t(this).removeClass("ui-state-active")
            }), this.buttonElement.is("a") && this.buttonElement.keyup(function (e) {
                e.keyCode === t.ui.keyCode.SPACE && t(this).click()
            })), this._setOption("disabled", r.disabled), this._resetButton()
        },
        _determineButtonType: function () {
            var t, e, i;
            this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button", "checkbox" === this.type || "radio" === this.type ? (t = this.element.parents().last(), e = "label[for='" + this.element.attr("id") + "']", this.buttonElement = t.find(e), this.buttonElement.length || (t = t.length ? t.siblings() : this.element.siblings(), this.buttonElement = t.filter(e), this.buttonElement.length || (this.buttonElement = t.find(e))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
        },
        widget: function () {
            return this.buttonElement
        },
        _destroy: function () {
            this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(o + " " + a + " " + r).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
        },
        _setOption: function (t, e) {
            return this._super(t, e), "disabled" === t ? (e ? this.element.prop("disabled", !0) : this.element.prop("disabled", !1), undefined) : (this._resetButton(), undefined)
        },
        refresh: function () {
            var e = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
            e !== this.options.disabled && this._setOption("disabled", e), "radio" === this.type ? h(this.element[0]).each(function () {
                t(this).is(":checked") ? t(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : t(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
        },
        _resetButton: function () {
            if ("input" === this.type) return this.options.label && this.element.val(this.options.label), undefined;
            var e = this.buttonElement.removeClass(r),
                i = t("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(e.empty()).text(),
                s = this.options.icons, n = s.primary && s.secondary, o = [];
            s.primary || s.secondary ? (this.options.text && o.push("ui-button-text-icon" + (n ? "s" : s.primary ? "-primary" : "-secondary")), s.primary && e.prepend("<span class='ui-button-icon-primary ui-icon " + s.primary + "'></span>"), s.secondary && e.append("<span class='ui-button-icon-secondary ui-icon " + s.secondary + "'></span>"), this.options.text || (o.push(n ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || e.attr("title", t.trim(i)))) : o.push("ui-button-text-only"), e.addClass(o.join(" "))
        }
    }), t.widget("ui.buttonset", {
        version: "1.9.2",
        options: {items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(button)"},
        _create: function () {
            this.element.addClass("ui-buttonset")
        },
        _init: function () {
            this.refresh()
        },
        _setOption: function (t, e) {
            "disabled" === t && this.buttons.button("option", t, e), this._super(t, e)
        },
        refresh: function () {
            var e = "rtl" === this.element.css("direction");
            this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function () {
                return t(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(e ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(e ? "ui-corner-left" : "ui-corner-right").end().end()
        },
        _destroy: function () {
            this.element.removeClass("ui-buttonset"), this.buttons.map(function () {
                return t(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
        }
    })
})(jQuery);
(function ($, undefined) {
    function Datepicker() {
        this.debug = !1, this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, $.extend(this._defaults, this.regional[""]), this.dpDiv = bindHover($('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))
    }

    function bindHover(t) {
        var e = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return t.delegate(e, "mouseout", function () {
            $(this).removeClass("ui-state-hover"), -1 != this.className.indexOf("ui-datepicker-prev") && $(this).removeClass("ui-datepicker-prev-hover"), -1 != this.className.indexOf("ui-datepicker-next") && $(this).removeClass("ui-datepicker-next-hover")
        }).delegate(e, "mouseover", function () {
            $.datepicker._isDisabledDatepicker(instActive.inline ? t.parent()[0] : instActive.input[0]) || ($(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), $(this).addClass("ui-state-hover"), -1 != this.className.indexOf("ui-datepicker-prev") && $(this).addClass("ui-datepicker-prev-hover"), -1 != this.className.indexOf("ui-datepicker-next") && $(this).addClass("ui-datepicker-next-hover"))
        })
    }

    function extendRemove(t, e) {
        $.extend(t, e);
        for (var i in e) (null == e[i] || e[i] == undefined) && (t[i] = e[i]);
        return t
    }

    $.extend($.ui, {datepicker: {version: "1.9.2"}});
    var PROP_NAME = "datepicker", dpuuid = (new Date).getTime(), instActive;
    $.extend(Datepicker.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        log: function () {
            this.debug && console.log.apply("", arguments)
        },
        _widgetDatepicker: function () {
            return this.dpDiv
        },
        setDefaults: function (t) {
            return extendRemove(this._defaults, t || {}), this
        },
        _attachDatepicker: function (target, settings) {
            var inlineSettings = null;
            for (var attrName in this._defaults) {
                var attrValue = target.getAttribute("date:" + attrName);
                if (attrValue) {
                    inlineSettings = inlineSettings || {};
                    try {
                        inlineSettings[attrName] = eval(attrValue)
                    } catch (err) {
                        inlineSettings[attrName] = attrValue
                    }
                }
            }
            var nodeName = target.nodeName.toLowerCase(), inline = "div" == nodeName || "span" == nodeName;
            target.id || (this.uuid += 1, target.id = "dp" + this.uuid);
            var inst = this._newInst($(target), inline);
            inst.settings = $.extend({}, settings || {}, inlineSettings || {}), "input" == nodeName ? this._connectDatepicker(target, inst) : inline && this._inlineDatepicker(target, inst)
        },
        _newInst: function (t, e) {
            var i = t[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1");
            return {
                id: i,
                input: t,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: e,
                dpDiv: e ? bindHover($('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')) : this.dpDiv
            }
        },
        _connectDatepicker: function (t, e) {
            var i = $(t);
            e.append = $([]), e.trigger = $([]), i.hasClass(this.markerClassName) || (this._attachments(i, e), i.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker", function (t, i, s) {
                e.settings[i] = s
            }).bind("getData.datepicker", function (t, i) {
                return this._get(e, i)
            }), this._autoSize(e), $.data(t, PROP_NAME, e), e.settings.disabled && this._disableDatepicker(t))
        },
        _attachments: function (t, e) {
            var i = this._get(e, "appendText"), s = this._get(e, "isRTL");
            e.append && e.append.remove(), i && (e.append = $('<span class="' + this._appendClass + '">' + i + "</span>"), t[s ? "before" : "after"](e.append)), t.unbind("focus", this._showDatepicker), e.trigger && e.trigger.remove();
            var n = this._get(e, "showOn");
            if (("focus" == n || "both" == n) && t.focus(this._showDatepicker), "button" == n || "both" == n) {
                var o = this._get(e, "buttonText"), a = this._get(e, "buttonImage");
                e.trigger = $(this._get(e, "buttonImageOnly") ? $("<img/>").addClass(this._triggerClass).attr({
                    src: a,
                    alt: o,
                    title: o
                }) : $('<button type="button"></button>').addClass(this._triggerClass).html("" == a ? o : $("<img/>").attr({
                    src: a,
                    alt: o,
                    title: o
                }))), t[s ? "before" : "after"](e.trigger), e.trigger.click(function () {
                    return $.datepicker._datepickerShowing && $.datepicker._lastInput == t[0] ? $.datepicker._hideDatepicker() : $.datepicker._datepickerShowing && $.datepicker._lastInput != t[0] ? ($.datepicker._hideDatepicker(), $.datepicker._showDatepicker(t[0])) : $.datepicker._showDatepicker(t[0]), !1
                })
            }
        },
        _autoSize: function (t) {
            if (this._get(t, "autoSize") && !t.inline) {
                var e = new Date(2009, 11, 20), i = this._get(t, "dateFormat");
                if (i.match(/[DM]/)) {
                    var s = function (t) {
                        for (var e = 0, i = 0, s = 0; t.length > s; s++) t[s].length > e && (e = t[s].length, i = s);
                        return i
                    };
                    e.setMonth(s(this._get(t, i.match(/MM/) ? "monthNames" : "monthNamesShort"))), e.setDate(s(this._get(t, i.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - e.getDay())
                }
                t.input.attr("size", this._formatDate(t, e).length)
            }
        },
        _inlineDatepicker: function (t, e) {
            var i = $(t);
            i.hasClass(this.markerClassName) || (i.addClass(this.markerClassName).append(e.dpDiv).bind("setData.datepicker", function (t, i, s) {
                e.settings[i] = s
            }).bind("getData.datepicker", function (t, i) {
                return this._get(e, i)
            }), $.data(t, PROP_NAME, e), this._setDate(e, this._getDefaultDate(e), !0), this._updateDatepicker(e), this._updateAlternate(e), e.settings.disabled && this._disableDatepicker(t), e.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function (t, e, i, s, n) {
            var o = this._dialogInst;
            if (!o) {
                this.uuid += 1;
                var a = "dp" + this.uuid;
                this._dialogInput = $('<input type="text" id="' + a + '" style="position: absolute; top: -100px; width: 0px;"/>'), this._dialogInput.keydown(this._doKeyDown), $("body").append(this._dialogInput), o = this._dialogInst = this._newInst(this._dialogInput, !1), o.settings = {}, $.data(this._dialogInput[0], PROP_NAME, o)
            }
            if (extendRemove(o.settings, s || {}), e = e && e.constructor == Date ? this._formatDate(o, e) : e, this._dialogInput.val(e), this._pos = n ? n.length ? n : [n.pageX, n.pageY] : null, !this._pos) {
                var r = document.documentElement.clientWidth, l = document.documentElement.clientHeight,
                    h = document.documentElement.scrollLeft || document.body.scrollLeft,
                    c = document.documentElement.scrollTop || document.body.scrollTop;
                this._pos = [r / 2 - 100 + h, l / 2 - 150 + c]
            }
            return this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), o.settings.onSelect = i, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), $.blockUI && $.blockUI(this.dpDiv), $.data(this._dialogInput[0], PROP_NAME, o), this
        },
        _destroyDatepicker: function (t) {
            var e = $(t), i = $.data(t, PROP_NAME);
            if (e.hasClass(this.markerClassName)) {
                var s = t.nodeName.toLowerCase();
                $.removeData(t, PROP_NAME), "input" == s ? (i.append.remove(), i.trigger.remove(), e.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" == s || "span" == s) && e.removeClass(this.markerClassName).empty()
            }
        },
        _enableDatepicker: function (t) {
            var e = $(t), i = $.data(t, PROP_NAME);
            if (e.hasClass(this.markerClassName)) {
                var s = t.nodeName.toLowerCase();
                if ("input" == s) t.disabled = !1, i.trigger.filter("button").each(function () {
                    this.disabled = !1
                }).end().filter("img").css({opacity: "1.0", cursor: ""}); else if ("div" == s || "span" == s) {
                    var n = e.children("." + this._inlineClass);
                    n.children().removeClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)
                }
                this._disabledInputs = $.map(this._disabledInputs, function (e) {
                    return e == t ? null : e
                })
            }
        },
        _disableDatepicker: function (t) {
            var e = $(t), i = $.data(t, PROP_NAME);
            if (e.hasClass(this.markerClassName)) {
                var s = t.nodeName.toLowerCase();
                if ("input" == s) t.disabled = !0, i.trigger.filter("button").each(function () {
                    this.disabled = !0
                }).end().filter("img").css({opacity: "0.5", cursor: "default"}); else if ("div" == s || "span" == s) {
                    var n = e.children("." + this._inlineClass);
                    n.children().addClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)
                }
                this._disabledInputs = $.map(this._disabledInputs, function (e) {
                    return e == t ? null : e
                }), this._disabledInputs[this._disabledInputs.length] = t
            }
        },
        _isDisabledDatepicker: function (t) {
            if (!t) return !1;
            for (var e = 0; this._disabledInputs.length > e; e++) if (this._disabledInputs[e] == t) return !0;
            return !1
        },
        _getInst: function (t) {
            try {
                return $.data(t, PROP_NAME)
            } catch (e) {
                throw"Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function (t, e, i) {
            var s = this._getInst(t);
            if (2 == arguments.length && "string" == typeof e) return "defaults" == e ? $.extend({}, $.datepicker._defaults) : s ? "all" == e ? $.extend({}, s.settings) : this._get(s, e) : null;
            var n = e || {};
            if ("string" == typeof e && (n = {}, n[e] = i), s) {
                this._curInst == s && this._hideDatepicker();
                var o = this._getDateDatepicker(t, !0), a = this._getMinMaxDate(s, "min"),
                    r = this._getMinMaxDate(s, "max");
                extendRemove(s.settings, n), null !== a && n.dateFormat !== undefined && n.minDate === undefined && (s.settings.minDate = this._formatDate(s, a)), null !== r && n.dateFormat !== undefined && n.maxDate === undefined && (s.settings.maxDate = this._formatDate(s, r)), this._attachments($(t), s), this._autoSize(s), this._setDate(s, o), this._updateAlternate(s), this._updateDatepicker(s)
            }
        },
        _changeDatepicker: function (t, e, i) {
            this._optionDatepicker(t, e, i)
        },
        _refreshDatepicker: function (t) {
            var e = this._getInst(t);
            e && this._updateDatepicker(e)
        },
        _setDateDatepicker: function (t, e) {
            var i = this._getInst(t);
            i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
        },
        _getDateDatepicker: function (t, e) {
            var i = this._getInst(t);
            return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null
        },
        _doKeyDown: function (t) {
            var e = $.datepicker._getInst(t.target), i = !0, s = e.dpDiv.is(".ui-datepicker-rtl");
            if (e._keyEvent = !0, $.datepicker._datepickerShowing) switch (t.keyCode) {
                case 9:
                    $.datepicker._hideDatepicker(), i = !1;
                    break;
                case 13:
                    var n = $("td." + $.datepicker._dayOverClass + ":not(." + $.datepicker._currentClass + ")", e.dpDiv);
                    n[0] && $.datepicker._selectDay(t.target, e.selectedMonth, e.selectedYear, n[0]);
                    var o = $.datepicker._get(e, "onSelect");
                    if (o) {
                        var a = $.datepicker._formatDate(e);
                        o.apply(e.input ? e.input[0] : null, [a, e])
                    } else $.datepicker._hideDatepicker();
                    return !1;
                case 27:
                    $.datepicker._hideDatepicker();
                    break;
                case 33:
                    $.datepicker._adjustDate(t.target, t.ctrlKey ? -$.datepicker._get(e, "stepBigMonths") : -$.datepicker._get(e, "stepMonths"), "M");
                    break;
                case 34:
                    $.datepicker._adjustDate(t.target, t.ctrlKey ? +$.datepicker._get(e, "stepBigMonths") : +$.datepicker._get(e, "stepMonths"), "M");
                    break;
                case 35:
                    (t.ctrlKey || t.metaKey) && $.datepicker._clearDate(t.target), i = t.ctrlKey || t.metaKey;
                    break;
                case 36:
                    (t.ctrlKey || t.metaKey) && $.datepicker._gotoToday(t.target), i = t.ctrlKey || t.metaKey;
                    break;
                case 37:
                    (t.ctrlKey || t.metaKey) && $.datepicker._adjustDate(t.target, s ? 1 : -1, "D"), i = t.ctrlKey || t.metaKey, t.originalEvent.altKey && $.datepicker._adjustDate(t.target, t.ctrlKey ? -$.datepicker._get(e, "stepBigMonths") : -$.datepicker._get(e, "stepMonths"), "M");
                    break;
                case 38:
                    (t.ctrlKey || t.metaKey) && $.datepicker._adjustDate(t.target, -7, "D"), i = t.ctrlKey || t.metaKey;
                    break;
                case 39:
                    (t.ctrlKey || t.metaKey) && $.datepicker._adjustDate(t.target, s ? -1 : 1, "D"), i = t.ctrlKey || t.metaKey, t.originalEvent.altKey && $.datepicker._adjustDate(t.target, t.ctrlKey ? +$.datepicker._get(e, "stepBigMonths") : +$.datepicker._get(e, "stepMonths"), "M");
                    break;
                case 40:
                    (t.ctrlKey || t.metaKey) && $.datepicker._adjustDate(t.target, 7, "D"), i = t.ctrlKey || t.metaKey;
                    break;
                default:
                    i = !1
            } else 36 == t.keyCode && t.ctrlKey ? $.datepicker._showDatepicker(this) : i = !1;
            i && (t.preventDefault(), t.stopPropagation())
        },
        _doKeyPress: function (t) {
            var e = $.datepicker._getInst(t.target);
            if ($.datepicker._get(e, "constrainInput")) {
                var i = $.datepicker._possibleChars($.datepicker._get(e, "dateFormat")),
                    s = String.fromCharCode(t.charCode == undefined ? t.keyCode : t.charCode);
                return t.ctrlKey || t.metaKey || " " > s || !i || i.indexOf(s) > -1
            }
        },
        _doKeyUp: function (t) {
            var e = $.datepicker._getInst(t.target);
            if (e.input.val() != e.lastVal) try {
                var i = $.datepicker.parseDate($.datepicker._get(e, "dateFormat"), e.input ? e.input.val() : null, $.datepicker._getFormatConfig(e));
                i && ($.datepicker._setDateFromField(e), $.datepicker._updateAlternate(e), $.datepicker._updateDatepicker(e))
            } catch (s) {
                $.datepicker.log(s)
            }
            return !0
        },
        _showDatepicker: function (t) {
            if (t = t.target || t, "input" != t.nodeName.toLowerCase() && (t = $("input", t.parentNode)[0]), !$.datepicker._isDisabledDatepicker(t) && $.datepicker._lastInput != t) {
                var e = $.datepicker._getInst(t);
                $.datepicker._curInst && $.datepicker._curInst != e && ($.datepicker._curInst.dpDiv.stop(!0, !0), e && $.datepicker._datepickerShowing && $.datepicker._hideDatepicker($.datepicker._curInst.input[0]));
                var i = $.datepicker._get(e, "beforeShow"), s = i ? i.apply(t, [t, e]) : {};
                if (s !== !1) {
                    extendRemove(e.settings, s), e.lastVal = null, $.datepicker._lastInput = t, $.datepicker._setDateFromField(e), $.datepicker._inDialog && (t.value = ""), $.datepicker._pos || ($.datepicker._pos = $.datepicker._findPos(t), $.datepicker._pos[1] += t.offsetHeight);
                    var n = !1;
                    $(t).parents().each(function () {
                        return n |= "fixed" == $(this).css("position"), !n
                    });
                    var o = {left: $.datepicker._pos[0], top: $.datepicker._pos[1]};
                    if ($.datepicker._pos = null, e.dpDiv.empty(), e.dpDiv.css({
                        position: "absolute",
                        display: "block",
                        top: "-1000px"
                    }), $.datepicker._updateDatepicker(e), o = $.datepicker._checkOffset(e, o, n), e.dpDiv.css({
                        position: $.datepicker._inDialog && $.blockUI ? "static" : n ? "fixed" : "absolute",
                        display: "none",
                        left: o.left + "px",
                        top: o.top + "px"
                    }), !e.inline) {
                        var a = $.datepicker._get(e, "showAnim"), r = $.datepicker._get(e, "duration"),
                            l = function () {
                                var t = e.dpDiv.find("iframe.ui-datepicker-cover");
                                if (t.length) {
                                    var i = $.datepicker._getBorders(e.dpDiv);
                                    t.css({
                                        left: -i[0],
                                        top: -i[1],
                                        width: e.dpDiv.outerWidth(),
                                        height: e.dpDiv.outerHeight()
                                    })
                                }
                            };
                        e.dpDiv.zIndex($(t).zIndex() + 1), $.datepicker._datepickerShowing = !0, $.effects && ($.effects.effect[a] || $.effects[a]) ? e.dpDiv.show(a, $.datepicker._get(e, "showOptions"), r, l) : e.dpDiv[a || "show"](a ? r : null, l), a && r || l(), e.input.is(":visible") && !e.input.is(":disabled") && e.input.focus(), $.datepicker._curInst = e
                    }
                }
            }
        },
        _updateDatepicker: function (t) {
            this.maxRows = 4;
            var e = $.datepicker._getBorders(t.dpDiv);
            instActive = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t);
            var i = t.dpDiv.find("iframe.ui-datepicker-cover");
            i.length && i.css({
                left: -e[0],
                top: -e[1],
                width: t.dpDiv.outerWidth(),
                height: t.dpDiv.outerHeight()
            }), t.dpDiv.find("." + this._dayOverClass + " a").mouseover();
            var s = this._getNumberOfMonths(t), n = s[1], o = 17;
            if (t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), n > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", o * n + "em"), t.dpDiv[(1 != s[0] || 1 != s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t == $.datepicker._curInst && $.datepicker._datepickerShowing && t.input && t.input.is(":visible") && !t.input.is(":disabled") && t.input[0] != document.activeElement && t.input.focus(), t.yearshtml) {
                var a = t.yearshtml;
                setTimeout(function () {
                    a === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), a = t.yearshtml = null
                }, 0)
            }
        },
        _getBorders: function (t) {
            var e = function (t) {
                return {thin: 1, medium: 2, thick: 3}[t] || t
            };
            return [parseFloat(e(t.css("border-left-width"))), parseFloat(e(t.css("border-top-width")))]
        },
        _checkOffset: function (t, e, i) {
            var s = t.dpDiv.outerWidth(), n = t.dpDiv.outerHeight(), o = t.input ? t.input.outerWidth() : 0,
                a = t.input ? t.input.outerHeight() : 0,
                r = document.documentElement.clientWidth + (i ? 0 : $(document).scrollLeft()),
                l = document.documentElement.clientHeight + (i ? 0 : $(document).scrollTop());
            return e.left -= this._get(t, "isRTL") ? s - o : 0, e.left -= i && e.left == t.input.offset().left ? $(document).scrollLeft() : 0, e.top -= i && e.top == t.input.offset().top + a ? $(document).scrollTop() : 0, e.left -= Math.min(e.left, e.left + s > r && r > s ? Math.abs(e.left + s - r) : 0), e.top -= Math.min(e.top, e.top + n > l && l > n ? Math.abs(n + a) : 0), e
        },
        _findPos: function (t) {
            for (var e = this._getInst(t), i = this._get(e, "isRTL"); t && ("hidden" == t.type || 1 != t.nodeType || $.expr.filters.hidden(t));) t = t[i ? "previousSibling" : "nextSibling"];
            var s = $(t).offset();
            return [s.left, s.top]
        },
        _hideDatepicker: function (t) {
            var e = this._curInst;
            if (e && (!t || e == $.data(t, PROP_NAME)) && this._datepickerShowing) {
                var i = this._get(e, "showAnim"), s = this._get(e, "duration"), n = function () {
                    $.datepicker._tidyDialog(e)
                };
                $.effects && ($.effects.effect[i] || $.effects[i]) ? e.dpDiv.hide(i, $.datepicker._get(e, "showOptions"), s, n) : e.dpDiv["slideDown" == i ? "slideUp" : "fadeIn" == i ? "fadeOut" : "hide"](i ? s : null, n), i || n(), this._datepickerShowing = !1;
                var o = this._get(e, "onClose");
                o && o.apply(e.input ? e.input[0] : null, [e.input ? e.input.val() : "", e]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                    position: "absolute",
                    left: "0",
                    top: "-100px"
                }), $.blockUI && ($.unblockUI(), $("body").append(this.dpDiv))), this._inDialog = !1
            }
        },
        _tidyDialog: function (t) {
            t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function (t) {
            if ($.datepicker._curInst) {
                var e = $(t.target), i = $.datepicker._getInst(e[0]);
                (e[0].id != $.datepicker._mainDivId && 0 == e.parents("#" + $.datepicker._mainDivId).length && !e.hasClass($.datepicker.markerClassName) && !e.closest("." + $.datepicker._triggerClass).length && $.datepicker._datepickerShowing && (!$.datepicker._inDialog || !$.blockUI) || e.hasClass($.datepicker.markerClassName) && $.datepicker._curInst != i) && $.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function (t, e, i) {
            var s = $(t), n = this._getInst(s[0]);
            this._isDisabledDatepicker(s[0]) || (this._adjustInstDate(n, e + ("M" == i ? this._get(n, "showCurrentAtPos") : 0), i), this._updateDatepicker(n))
        },
        _gotoToday: function (t) {
            var e = $(t), i = this._getInst(e[0]);
            if (this._get(i, "gotoCurrent") && i.currentDay) i.selectedDay = i.currentDay, i.drawMonth = i.selectedMonth = i.currentMonth, i.drawYear = i.selectedYear = i.currentYear; else {
                var s = new Date;
                i.selectedDay = s.getDate(), i.drawMonth = i.selectedMonth = s.getMonth(), i.drawYear = i.selectedYear = s.getFullYear()
            }
            this._notifyChange(i), this._adjustDate(e)
        },
        _selectMonthYear: function (t, e, i) {
            var s = $(t), n = this._getInst(s[0]);
            n["selected" + ("M" == i ? "Month" : "Year")] = n["draw" + ("M" == i ? "Month" : "Year")] = parseInt(e.options[e.selectedIndex].value, 10), this._notifyChange(n), this._adjustDate(s)
        },
        _selectDay: function (t, e, i, s) {
            var n = $(t);
            if (!$(s).hasClass(this._unselectableClass) && !this._isDisabledDatepicker(n[0])) {
                var o = this._getInst(n[0]);
                o.selectedDay = o.currentDay = $("a", s).html(), o.selectedMonth = o.currentMonth = e, o.selectedYear = o.currentYear = i, this._selectDate(t, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear))
            }
        },
        _clearDate: function (t) {
            var e = $(t);
            this._getInst(e[0]), this._selectDate(e, "")
        },
        _selectDate: function (t, e) {
            var i = $(t), s = this._getInst(i[0]);
            e = null != e ? e : this._formatDate(s), s.input && s.input.val(e), this._updateAlternate(s);
            var n = this._get(s, "onSelect");
            n ? n.apply(s.input ? s.input[0] : null, [e, s]) : s.input && s.input.trigger("change"), s.inline ? this._updateDatepicker(s) : (this._hideDatepicker(), this._lastInput = s.input[0], "object" != typeof s.input[0] && s.input.focus(), this._lastInput = null)
        },
        _updateAlternate: function (t) {
            var e = this._get(t, "altField");
            if (e) {
                var i = this._get(t, "altFormat") || this._get(t, "dateFormat"), s = this._getDate(t),
                    n = this.formatDate(i, s, this._getFormatConfig(t));
                $(e).each(function () {
                    $(this).val(n)
                })
            }
        },
        noWeekends: function (t) {
            var e = t.getDay();
            return [e > 0 && 6 > e, ""]
        },
        iso8601Week: function (t) {
            var e = new Date(t.getTime());
            e.setDate(e.getDate() + 4 - (e.getDay() || 7));
            var i = e.getTime();
            return e.setMonth(0), e.setDate(1), Math.floor(Math.round((i - e) / 864e5) / 7) + 1
        },
        parseDate: function (t, e, i) {
            if (null == t || null == e) throw"Invalid arguments";
            if (e = "object" == typeof e ? "" + e : e + "", "" == e) return null;
            var s = (i ? i.shortYearCutoff : null) || this._defaults.shortYearCutoff;
            s = "string" != typeof s ? s : (new Date).getFullYear() % 100 + parseInt(s, 10);
            for (var n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort, o = (i ? i.dayNames : null) || this._defaults.dayNames, a = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort, r = (i ? i.monthNames : null) || this._defaults.monthNames, l = -1, h = -1, c = -1, u = -1, d = !1, p = function (e) {
                var i = t.length > v + 1 && t.charAt(v + 1) == e;
                return i && v++, i
            }, f = function (t) {
                var i = p(t), s = "@" == t ? 14 : "!" == t ? 20 : "y" == t && i ? 4 : "o" == t ? 3 : 2,
                    n = RegExp("^\\d{1," + s + "}"), o = e.substring(_).match(n);
                if (!o) throw"Missing number at position " + _;
                return _ += o[0].length, parseInt(o[0], 10)
            }, g = function (t, i, s) {
                var n = $.map(p(t) ? s : i, function (t, e) {
                    return [[e, t]]
                }).sort(function (t, e) {
                    return -(t[1].length - e[1].length)
                }), o = -1;
                if ($.each(n, function (t, i) {
                    var s = i[1];
                    return e.substr(_, s.length).toLowerCase() == s.toLowerCase() ? (o = i[0], _ += s.length, !1) : undefined
                }), -1 != o) return o + 1;
                throw"Unknown name at position " + _
            }, m = function () {
                if (e.charAt(_) != t.charAt(v)) throw"Unexpected literal at position " + _;
                _++
            }, _ = 0, v = 0; t.length > v; v++) if (d) "'" != t.charAt(v) || p("'") ? m() : d = !1; else switch (t.charAt(v)) {
                case"d":
                    c = f("d");
                    break;
                case"D":
                    g("D", n, o);
                    break;
                case"o":
                    u = f("o");
                    break;
                case"m":
                    h = f("m");
                    break;
                case"M":
                    h = g("M", a, r);
                    break;
                case"y":
                    l = f("y");
                    break;
                case"@":
                    var b = new Date(f("@"));
                    l = b.getFullYear(), h = b.getMonth() + 1, c = b.getDate();
                    break;
                case"!":
                    var b = new Date((f("!") - this._ticksTo1970) / 1e4);
                    l = b.getFullYear(), h = b.getMonth() + 1, c = b.getDate();
                    break;
                case"'":
                    p("'") ? m() : d = !0;
                    break;
                default:
                    m()
            }
            if (e.length > _) {
                var y = e.substr(_);
                if (!/^\s+/.test(y)) throw"Extra/unparsed characters found in date: " + y
            }
            if (-1 == l ? l = (new Date).getFullYear() : 100 > l && (l += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (s >= l ? 0 : -100)), u > -1) for (h = 1, c = u; ;) {
                var w = this._getDaysInMonth(l, h - 1);
                if (w >= c) break;
                h++, c -= w
            }
            var b = this._daylightSavingAdjust(new Date(l, h - 1, c));
            if (b.getFullYear() != l || b.getMonth() + 1 != h || b.getDate() != c) throw"Invalid date";
            return b
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function (t, e, i) {
            if (!e) return "";
            var s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                n = (i ? i.dayNames : null) || this._defaults.dayNames,
                o = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                a = (i ? i.monthNames : null) || this._defaults.monthNames, r = function (e) {
                    var i = t.length > d + 1 && t.charAt(d + 1) == e;
                    return i && d++, i
                }, l = function (t, e, i) {
                    var s = "" + e;
                    if (r(t)) for (; i > s.length;) s = "0" + s;
                    return s
                }, h = function (t, e, i, s) {
                    return r(t) ? s[e] : i[e]
                }, c = "", u = !1;
            if (e) for (var d = 0; t.length > d; d++) if (u) "'" != t.charAt(d) || r("'") ? c += t.charAt(d) : u = !1; else switch (t.charAt(d)) {
                case"d":
                    c += l("d", e.getDate(), 2);
                    break;
                case"D":
                    c += h("D", e.getDay(), s, n);
                    break;
                case"o":
                    c += l("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                    break;
                case"m":
                    c += l("m", e.getMonth() + 1, 2);
                    break;
                case"M":
                    c += h("M", e.getMonth(), o, a);
                    break;
                case"y":
                    c += r("y") ? e.getFullYear() : (10 > e.getYear() % 100 ? "0" : "") + e.getYear() % 100;
                    break;
                case"@":
                    c += e.getTime();
                    break;
                case"!":
                    c += 1e4 * e.getTime() + this._ticksTo1970;
                    break;
                case"'":
                    r("'") ? c += "'" : u = !0;
                    break;
                default:
                    c += t.charAt(d)
            }
            return c
        },
        _possibleChars: function (t) {
            for (var e = "", i = !1, s = function (e) {
                var i = t.length > n + 1 && t.charAt(n + 1) == e;
                return i && n++, i
            }, n = 0; t.length > n; n++) if (i) "'" != t.charAt(n) || s("'") ? e += t.charAt(n) : i = !1; else switch (t.charAt(n)) {
                case"d":
                case"m":
                case"y":
                case"@":
                    e += "0123456789";
                    break;
                case"D":
                case"M":
                    return null;
                case"'":
                    s("'") ? e += "'" : i = !0;
                    break;
                default:
                    e += t.charAt(n)
            }
            return e
        },
        _get: function (t, e) {
            return t.settings[e] !== undefined ? t.settings[e] : this._defaults[e]
        },
        _setDateFromField: function (t, e) {
            if (t.input.val() != t.lastVal) {
                var i, s, n = this._get(t, "dateFormat"), o = t.lastVal = t.input ? t.input.val() : null;
                i = s = this._getDefaultDate(t);
                var a = this._getFormatConfig(t);
                try {
                    i = this.parseDate(n, o, a) || s
                } catch (r) {
                    this.log(r), o = e ? "" : o
                }
                t.selectedDay = i.getDate(), t.drawMonth = t.selectedMonth = i.getMonth(), t.drawYear = t.selectedYear = i.getFullYear(), t.currentDay = o ? i.getDate() : 0, t.currentMonth = o ? i.getMonth() : 0, t.currentYear = o ? i.getFullYear() : 0, this._adjustInstDate(t)
            }
        },
        _getDefaultDate: function (t) {
            return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
        },
        _determineDate: function (t, e, i) {
            var s = function (t) {
                    var e = new Date;
                    return e.setDate(e.getDate() + t), e
                }, n = function (e) {
                    try {
                        return $.datepicker.parseDate($.datepicker._get(t, "dateFormat"), e, $.datepicker._getFormatConfig(t))
                    } catch (i) {
                    }
                    for (var s = (e.toLowerCase().match(/^c/) ? $.datepicker._getDate(t) : null) || new Date, n = s.getFullYear(), o = s.getMonth(), a = s.getDate(), r = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = r.exec(e); l;) {
                        switch (l[2] || "d") {
                            case"d":
                            case"D":
                                a += parseInt(l[1], 10);
                                break;
                            case"w":
                            case"W":
                                a += 7 * parseInt(l[1], 10);
                                break;
                            case"m":
                            case"M":
                                o += parseInt(l[1], 10), a = Math.min(a, $.datepicker._getDaysInMonth(n, o));
                                break;
                            case"y":
                            case"Y":
                                n += parseInt(l[1], 10), a = Math.min(a, $.datepicker._getDaysInMonth(n, o))
                        }
                        l = r.exec(e)
                    }
                    return new Date(n, o, a)
                },
                o = null == e || "" === e ? i : "string" == typeof e ? n(e) : "number" == typeof e ? isNaN(e) ? i : s(e) : new Date(e.getTime());
            return o = o && "Invalid Date" == "" + o ? i : o, o && (o.setHours(0), o.setMinutes(0), o.setSeconds(0), o.setMilliseconds(0)), this._daylightSavingAdjust(o)
        },
        _daylightSavingAdjust: function (t) {
            return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
        },
        _setDate: function (t, e, i) {
            var s = !e, n = t.selectedMonth, o = t.selectedYear,
                a = this._restrictMinMax(t, this._determineDate(t, e, new Date));
            t.selectedDay = t.currentDay = a.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = a.getMonth(), t.drawYear = t.selectedYear = t.currentYear = a.getFullYear(), n == t.selectedMonth && o == t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(s ? "" : this._formatDate(t))
        },
        _getDate: function (t) {
            var e = !t.currentYear || t.input && "" == t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
            return e
        },
        _attachHandlers: function (t) {
            var e = this._get(t, "stepMonths"), i = "#" + t.id.replace(/\\\\/g, "\\");
            t.dpDiv.find("[data-handler]").map(function () {
                var t = {
                    prev: function () {
                        window["DP_jQuery_" + dpuuid].datepicker._adjustDate(i, -e, "M")
                    }, next: function () {
                        window["DP_jQuery_" + dpuuid].datepicker._adjustDate(i, +e, "M")
                    }, hide: function () {
                        window["DP_jQuery_" + dpuuid].datepicker._hideDatepicker()
                    }, today: function () {
                        window["DP_jQuery_" + dpuuid].datepicker._gotoToday(i)
                    }, selectDay: function () {
                        return window["DP_jQuery_" + dpuuid].datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                    }, selectMonth: function () {
                        return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(i, this, "M"), !1
                    }, selectYear: function () {
                        return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(i, this, "Y"), !1
                    }
                };
                $(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function (t) {
            var e = new Date;
            e = this._daylightSavingAdjust(new Date(e.getFullYear(), e.getMonth(), e.getDate()));
            var i = this._get(t, "isRTL"), s = this._get(t, "showButtonPanel"), n = this._get(t, "hideIfNoPrevNext"),
                o = this._get(t, "navigationAsDateFormat"), a = this._getNumberOfMonths(t),
                r = this._get(t, "showCurrentAtPos"), l = this._get(t, "stepMonths"), h = 1 != a[0] || 1 != a[1],
                c = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
                u = this._getMinMaxDate(t, "min"), d = this._getMinMaxDate(t, "max"), p = t.drawMonth - r,
                f = t.drawYear;
            if (0 > p && (p += 12, f--), d) {
                var g = this._daylightSavingAdjust(new Date(d.getFullYear(), d.getMonth() - a[0] * a[1] + 1, d.getDate()));
                for (g = u && u > g ? u : g; this._daylightSavingAdjust(new Date(f, p, 1)) > g;) p--, 0 > p && (p = 11, f--)
            }
            t.drawMonth = p, t.drawYear = f;
            var m = this._get(t, "prevText");
            m = o ? this.formatDate(m, this._daylightSavingAdjust(new Date(f, p - l, 1)), this._getFormatConfig(t)) : m;
            var _ = this._canAdjustMonth(t, -1, f, p) ? '<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="' + m + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "e" : "w") + '">' + m + "</span></a>" : n ? "" : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + m + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "e" : "w") + '">' + m + "</span></a>",
                v = this._get(t, "nextText");
            v = o ? this.formatDate(v, this._daylightSavingAdjust(new Date(f, p + l, 1)), this._getFormatConfig(t)) : v;
            var b = this._canAdjustMonth(t, 1, f, p) ? '<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="' + v + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "w" : "e") + '">' + v + "</span></a>" : n ? "" : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + v + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "w" : "e") + '">' + v + "</span></a>",
                y = this._get(t, "currentText"), w = this._get(t, "gotoCurrent") && t.currentDay ? c : e;
            y = o ? this.formatDate(y, w, this._getFormatConfig(t)) : y;
            var k = t.inline ? "" : '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">' + this._get(t, "closeText") + "</button>",
                x = s ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (i ? k : "") + (this._isInRange(t, w) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">' + y + "</button>" : "") + (i ? "" : k) + "</div>" : "",
                C = parseInt(this._get(t, "firstDay"), 10);
            C = isNaN(C) ? 0 : C;
            var D = this._get(t, "showWeek"), I = this._get(t, "dayNames");
            this._get(t, "dayNamesShort");
            var T = this._get(t, "dayNamesMin"), P = this._get(t, "monthNames"), M = this._get(t, "monthNamesShort"),
                S = this._get(t, "beforeShowDay"), H = this._get(t, "showOtherMonths"),
                A = this._get(t, "selectOtherMonths");
            this._get(t, "calculateWeek") || this.iso8601Week;
            for (var O = this._getDefaultDate(t), N = "", z = 0; a[0] > z; z++) {
                var E = "";
                this.maxRows = 4;
                for (var W = 0; a[1] > W; W++) {
                    var F = this._daylightSavingAdjust(new Date(f, p, t.selectedDay)), R = " ui-corner-all", L = "";
                    if (h) {
                        if (L += '<div class="ui-datepicker-group', a[1] > 1) switch (W) {
                            case 0:
                                L += " ui-datepicker-group-first", R = " ui-corner-" + (i ? "right" : "left");
                                break;
                            case a[1] - 1:
                                L += " ui-datepicker-group-last", R = " ui-corner-" + (i ? "left" : "right");
                                break;
                            default:
                                L += " ui-datepicker-group-middle", R = ""
                        }
                        L += '">'
                    }
                    L += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + R + '">' + (/all|left/.test(R) && 0 == z ? i ? b : _ : "") + (/all|right/.test(R) && 0 == z ? i ? _ : b : "") + this._generateMonthYearHeader(t, p, f, u, d, z > 0 || W > 0, P, M) + '</div><table class="ui-datepicker-calendar"><thead>' + "<tr>";
                    for (var Y = D ? '<th class="ui-datepicker-week-col">' + this._get(t, "weekHeader") + "</th>" : "", B = 0; 7 > B; B++) {
                        var j = (B + C) % 7;
                        Y += "<th" + ((B + C + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : "") + ">" + '<span title="' + I[j] + '">' + T[j] + "</span></th>"
                    }
                    L += Y + "</tr></thead><tbody>";
                    var q = this._getDaysInMonth(f, p);
                    f == t.selectedYear && p == t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, q));
                    var K = (this._getFirstDayOfMonth(f, p) - C + 7) % 7, U = Math.ceil((K + q) / 7),
                        V = h ? this.maxRows > U ? this.maxRows : U : U;
                    this.maxRows = V;
                    for (var X = this._daylightSavingAdjust(new Date(f, p, 1 - K)), G = 0; V > G; G++) {
                        L += "<tr>";
                        for (var Q = D ? '<td class="ui-datepicker-week-col">' + this._get(t, "calculateWeek")(X) + "</td>" : "", B = 0; 7 > B; B++) {
                            var J = S ? S.apply(t.input ? t.input[0] : null, [X]) : [!0, ""], Z = X.getMonth() != p,
                                te = Z && !A || !J[0] || u && u > X || d && X > d;
                            Q += '<td class="' + ((B + C + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (Z ? " ui-datepicker-other-month" : "") + (X.getTime() == F.getTime() && p == t.selectedMonth && t._keyEvent || O.getTime() == X.getTime() && O.getTime() == F.getTime() ? " " + this._dayOverClass : "") + (te ? " " + this._unselectableClass + " ui-state-disabled" : "") + (Z && !H ? "" : " " + J[1] + (X.getTime() == c.getTime() ? " " + this._currentClass : "") + (X.getTime() == e.getTime() ? " ui-datepicker-today" : "")) + '"' + (Z && !H || !J[2] ? "" : ' title="' + J[2] + '"') + (te ? "" : ' data-handler="selectDay" data-event="click" data-month="' + X.getMonth() + '" data-year="' + X.getFullYear() + '"') + ">" + (Z && !H ? "&#xa0;" : te ? '<span class="ui-state-default">' + X.getDate() + "</span>" : '<a class="ui-state-default' + (X.getTime() == e.getTime() ? " ui-state-highlight" : "") + (X.getTime() == c.getTime() ? " ui-state-active" : "") + (Z ? " ui-priority-secondary" : "") + '" href="#">' + X.getDate() + "</a>") + "</td>", X.setDate(X.getDate() + 1), X = this._daylightSavingAdjust(X)
                        }
                        L += Q + "</tr>"
                    }
                    p++, p > 11 && (p = 0, f++), L += "</tbody></table>" + (h ? "</div>" + (a[0] > 0 && W == a[1] - 1 ? '<div class="ui-datepicker-row-break"></div>' : "") : ""), E += L
                }
                N += E
            }
            return N += x + ($.ui.ie6 && !t.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : ""), t._keyEvent = !1, N
        },
        _generateMonthYearHeader: function (t, e, i, s, n, o, a, r) {
            var l = this._get(t, "changeMonth"), h = this._get(t, "changeYear"), c = this._get(t, "showMonthAfterYear"),
                u = '<div class="ui-datepicker-title">', d = "";
            if (o || !l) d += '<span class="ui-datepicker-month">' + a[e] + "</span>"; else {
                var p = s && s.getFullYear() == i, f = n && n.getFullYear() == i;
                d += '<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';
                for (var g = 0; 12 > g; g++) (!p || g >= s.getMonth()) && (!f || n.getMonth() >= g) && (d += '<option value="' + g + '"' + (g == e ? ' selected="selected"' : "") + ">" + r[g] + "</option>");
                d += "</select>"
            }
            if (c || (u += d + (!o && l && h ? "" : "&#xa0;")), !t.yearshtml) if (t.yearshtml = "", o || !h) u += '<span class="ui-datepicker-year">' + i + "</span>"; else {
                var m = this._get(t, "yearRange").split(":"), _ = (new Date).getFullYear(), v = function (t) {
                    var e = t.match(/c[+-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+-].*/) ? _ + parseInt(t, 10) : parseInt(t, 10);
                    return isNaN(e) ? _ : e
                }, b = v(m[0]), y = Math.max(b, v(m[1] || ""));
                for (b = s ? Math.max(b, s.getFullYear()) : b, y = n ? Math.min(y, n.getFullYear()) : y, t.yearshtml += '<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">'; y >= b; b++) t.yearshtml += '<option value="' + b + '"' + (b == i ? ' selected="selected"' : "") + ">" + b + "</option>";
                t.yearshtml += "</select>", u += t.yearshtml, t.yearshtml = null
            }
            return u += this._get(t, "yearSuffix"), c && (u += (!o && l && h ? "" : "&#xa0;") + d), u += "</div>"
        },
        _adjustInstDate: function (t, e, i) {
            var s = t.drawYear + ("Y" == i ? e : 0), n = t.drawMonth + ("M" == i ? e : 0),
                o = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" == i ? e : 0),
                a = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s, n, o)));
            t.selectedDay = a.getDate(), t.drawMonth = t.selectedMonth = a.getMonth(), t.drawYear = t.selectedYear = a.getFullYear(), ("M" == i || "Y" == i) && this._notifyChange(t)
        },
        _restrictMinMax: function (t, e) {
            var i = this._getMinMaxDate(t, "min"), s = this._getMinMaxDate(t, "max"), n = i && i > e ? i : e;
            return n = s && n > s ? s : n
        },
        _notifyChange: function (t) {
            var e = this._get(t, "onChangeMonthYear");
            e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
        },
        _getNumberOfMonths: function (t) {
            var e = this._get(t, "numberOfMonths");
            return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
        },
        _getMinMaxDate: function (t, e) {
            return this._determineDate(t, this._get(t, e + "Date"), null)
        },
        _getDaysInMonth: function (t, e) {
            return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
        },
        _getFirstDayOfMonth: function (t, e) {
            return new Date(t, e, 1).getDay()
        },
        _canAdjustMonth: function (t, e, i, s) {
            var n = this._getNumberOfMonths(t),
                o = this._daylightSavingAdjust(new Date(i, s + (0 > e ? e : n[0] * n[1]), 1));
            return 0 > e && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(t, o)
        },
        _isInRange: function (t, e) {
            var i = this._getMinMaxDate(t, "min"), s = this._getMinMaxDate(t, "max");
            return (!i || e.getTime() >= i.getTime()) && (!s || e.getTime() <= s.getTime())
        },
        _getFormatConfig: function (t) {
            var e = this._get(t, "shortYearCutoff");
            return e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10), {
                shortYearCutoff: e,
                dayNamesShort: this._get(t, "dayNamesShort"),
                dayNames: this._get(t, "dayNames"),
                monthNamesShort: this._get(t, "monthNamesShort"),
                monthNames: this._get(t, "monthNames")
            }
        },
        _formatDate: function (t, e, i, s) {
            e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
            var n = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(s, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
            return this.formatDate(this._get(t, "dateFormat"), n, this._getFormatConfig(t))
        }
    }), $.fn.datepicker = function (t) {
        if (!this.length) return this;
        $.datepicker.initialized || ($(document).mousedown($.datepicker._checkExternalClick).find(document.body).append($.datepicker.dpDiv), $.datepicker.initialized = !0);
        var e = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof t || "isDisabled" != t && "getDate" != t && "widget" != t ? "option" == t && 2 == arguments.length && "string" == typeof arguments[1] ? $.datepicker["_" + t + "Datepicker"].apply($.datepicker, [this[0]].concat(e)) : this.each(function () {
            "string" == typeof t ? $.datepicker["_" + t + "Datepicker"].apply($.datepicker, [this].concat(e)) : $.datepicker._attachDatepicker(this, t)
        }) : $.datepicker["_" + t + "Datepicker"].apply($.datepicker, [this[0]].concat(e))
    }, $.datepicker = new Datepicker, $.datepicker.initialized = !1, $.datepicker.uuid = (new Date).getTime(), $.datepicker.version = "1.9.2", window["DP_jQuery_" + dpuuid] = $
})(jQuery);
(function (t, e) {
    var i = "ui-dialog ui-widget ui-widget-content ui-corner-all ",
        s = {buttons: !0, height: !0, maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0, width: !0},
        n = {maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0};
    t.widget("ui.dialog", {
        version: "1.9.2",
        options: {
            autoOpen: !0,
            buttons: {},
            closeOnEscape: !0,
            closeText: "close",
            dialogClass: "",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: !1,
            maxWidth: !1,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center", at: "center", of: window, collision: "fit", using: function (e) {
                    var i = t(this).css(e).offset().top;
                    0 > i && t(this).css("top", e.top - i)
                }
            },
            resizable: !0,
            show: null,
            stack: !0,
            title: "",
            width: 300,
            zIndex: 1e3
        },
        _create: function () {
            this.originalTitle = this.element.attr("title"), "string" != typeof this.originalTitle && (this.originalTitle = ""), this.oldPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            }, this.options.title = this.options.title || this.originalTitle;
            var s, n, o, a, r, l = this, h = this.options, c = h.title || "&#160;";
            s = (this.uiDialog = t("<div>")).addClass(i + h.dialogClass).css({
                display: "none",
                outline: 0,
                zIndex: h.zIndex
            }).attr("tabIndex", -1).keydown(function (e) {
                h.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE && (l.close(e), e.preventDefault())
            }).mousedown(function (t) {
                l.moveToTop(!1, t)
            }).appendTo("body"), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(s), n = (this.uiDialogTitlebar = t("<div>")).addClass("ui-dialog-titlebar  ui-widget-header  ui-corner-all  ui-helper-clearfix").bind("mousedown", function () {
                s.focus()
            }).prependTo(s), o = t("<a href='#'></a>").addClass("ui-dialog-titlebar-close  ui-corner-all").attr("role", "button").click(function (t) {
                t.preventDefault(), l.close(t)
            }).appendTo(n), (this.uiDialogTitlebarCloseText = t("<span>")).addClass("ui-icon ui-icon-closethick").text(h.closeText).appendTo(o), a = t("<span>").uniqueId().addClass("ui-dialog-title").html(c).prependTo(n), r = (this.uiDialogButtonPane = t("<div>")).addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), (this.uiButtonSet = t("<div>")).addClass("ui-dialog-buttonset").appendTo(r), s.attr({
                role: "dialog",
                "aria-labelledby": a.attr("id")
            }), n.find("*").add(n).disableSelection(), this._hoverable(o), this._focusable(o), h.draggable && t.fn.draggable && this._makeDraggable(), h.resizable && t.fn.resizable && this._makeResizable(), this._createButtons(h.buttons), this._isOpen = !1, t.fn.bgiframe && s.bgiframe(), this._on(s, {
                keydown: function (i) {
                    if (h.modal && i.keyCode === t.ui.keyCode.TAB) {
                        var n = t(":tabbable", s), o = n.filter(":first"), a = n.filter(":last");
                        return i.target !== a[0] || i.shiftKey ? i.target === o[0] && i.shiftKey ? (a.focus(1), !1) : e : (o.focus(1), !1)
                    }
                }
            })
        },
        _init: function () {
            this.options.autoOpen && this.open()
        },
        _destroy: function () {
            var t, e = this.oldPosition;
            this.overlay && this.overlay.destroy(), this.uiDialog.hide(), this.element.removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), t = e.parent.children().eq(e.index), t.length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
        },
        widget: function () {
            return this.uiDialog
        },
        close: function (e) {
            var i, s, n = this;
            if (this._isOpen && !1 !== this._trigger("beforeClose", e)) return this._isOpen = !1, this.overlay && this.overlay.destroy(), this.options.hide ? this._hide(this.uiDialog, this.options.hide, function () {
                n._trigger("close", e)
            }) : (this.uiDialog.hide(), this._trigger("close", e)), t.ui.dialog.overlay.resize(), this.options.modal && (i = 0, t(".ui-dialog").each(function () {
                this !== n.uiDialog[0] && (s = t(this).css("z-index"), isNaN(s) || (i = Math.max(i, s)))
            }), t.ui.dialog.maxZ = i), this
        },
        isOpen: function () {
            return this._isOpen
        },
        moveToTop: function (e, i) {
            var s, n = this.options;
            return n.modal && !e || !n.stack && !n.modal ? this._trigger("focus", i) : (n.zIndex > t.ui.dialog.maxZ && (t.ui.dialog.maxZ = n.zIndex), this.overlay && (t.ui.dialog.maxZ += 1, t.ui.dialog.overlay.maxZ = t.ui.dialog.maxZ, this.overlay.$el.css("z-index", t.ui.dialog.overlay.maxZ)), s = {
                scrollTop: this.element.scrollTop(),
                scrollLeft: this.element.scrollLeft()
            }, t.ui.dialog.maxZ += 1, this.uiDialog.css("z-index", t.ui.dialog.maxZ), this.element.attr(s), this._trigger("focus", i), this)
        },
        open: function () {
            if (!this._isOpen) {
                var e, i = this.options, s = this.uiDialog;
                return this._size(), this._position(i.position), s.show(i.show), this.overlay = i.modal ? new t.ui.dialog.overlay(this) : null, this.moveToTop(!0), e = this.element.find(":tabbable"), e.length || (e = this.uiDialogButtonPane.find(":tabbable"), e.length || (e = s)), e.eq(0).focus(), this._isOpen = !0, this._trigger("open"), this
            }
        },
        _createButtons: function (e) {
            var i = this, s = !1;
            this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), "object" == typeof e && null !== e && t.each(e, function () {
                return !(s = !0)
            }), s ? (t.each(e, function (e, s) {
                var n, o;
                s = t.isFunction(s) ? {
                    click: s,
                    text: e
                } : s, s = t.extend({type: "button"}, s), o = s.click, s.click = function () {
                    o.apply(i.element[0], arguments)
                }, n = t("<button></button>", s).appendTo(i.uiButtonSet), t.fn.button && n.button()
            }), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog)) : this.uiDialog.removeClass("ui-dialog-buttons")
        },
        _makeDraggable: function () {
            function e(t) {
                return {position: t.position, offset: t.offset}
            }

            var i = this, s = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function (s, n) {
                    t(this).addClass("ui-dialog-dragging"), i._trigger("dragStart", s, e(n))
                },
                drag: function (t, s) {
                    i._trigger("drag", t, e(s))
                },
                stop: function (n, o) {
                    s.position = [o.position.left - i.document.scrollLeft(), o.position.top - i.document.scrollTop()], t(this).removeClass("ui-dialog-dragging"), i._trigger("dragStop", n, e(o)), t.ui.dialog.overlay.resize()
                }
            })
        },
        _makeResizable: function (i) {
            function s(t) {
                return {
                    originalPosition: t.originalPosition,
                    originalSize: t.originalSize,
                    position: t.position,
                    size: t.size
                }
            }

            i = i === e ? this.options.resizable : i;
            var n = this, o = this.options, a = this.uiDialog.css("position"),
                r = "string" == typeof i ? i : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: o.maxWidth,
                maxHeight: o.maxHeight,
                minWidth: o.minWidth,
                minHeight: this._minHeight(),
                handles: r,
                start: function (e, i) {
                    t(this).addClass("ui-dialog-resizing"), n._trigger("resizeStart", e, s(i))
                },
                resize: function (t, e) {
                    n._trigger("resize", t, s(e))
                },
                stop: function (e, i) {
                    t(this).removeClass("ui-dialog-resizing"), o.height = t(this).height(), o.width = t(this).width(), n._trigger("resizeStop", e, s(i)), t.ui.dialog.overlay.resize()
                }
            }).css("position", a).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")
        },
        _minHeight: function () {
            var t = this.options;
            return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
        },
        _position: function (e) {
            var i, s = [], n = [0, 0];
            e ? (("string" == typeof e || "object" == typeof e && "0" in e) && (s = e.split ? e.split(" ") : [e[0], e[1]], 1 === s.length && (s[1] = s[0]), t.each(["left", "top"], function (t, e) {
                +s[t] === s[t] && (n[t] = s[t], s[t] = e)
            }), e = {
                my: s[0] + (0 > n[0] ? n[0] : "+" + n[0]) + " " + s[1] + (0 > n[1] ? n[1] : "+" + n[1]),
                at: s.join(" ")
            }), e = t.extend({}, t.ui.dialog.prototype.options.position, e)) : e = t.ui.dialog.prototype.options.position, i = this.uiDialog.is(":visible"), i || this.uiDialog.show(), this.uiDialog.position(e), i || this.uiDialog.hide()
        },
        _setOptions: function (e) {
            var i = this, o = {}, a = !1;
            t.each(e, function (t, e) {
                i._setOption(t, e), t in s && (a = !0), t in n && (o[t] = e)
            }), a && this._size(), this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", o)
        },
        _setOption: function (e, s) {
            var n, o, a = this.uiDialog;
            switch (e) {
                case"buttons":
                    this._createButtons(s);
                    break;
                case"closeText":
                    this.uiDialogTitlebarCloseText.text("" + s);
                    break;
                case"dialogClass":
                    a.removeClass(this.options.dialogClass).addClass(i + s);
                    break;
                case"disabled":
                    s ? a.addClass("ui-dialog-disabled") : a.removeClass("ui-dialog-disabled");
                    break;
                case"draggable":
                    n = a.is(":data(draggable)"), n && !s && a.draggable("destroy"), !n && s && this._makeDraggable();
                    break;
                case"position":
                    this._position(s);
                    break;
                case"resizable":
                    o = a.is(":data(resizable)"), o && !s && a.resizable("destroy"), o && "string" == typeof s && a.resizable("option", "handles", s), o || s === !1 || this._makeResizable(s);
                    break;
                case"title":
                    t(".ui-dialog-title", this.uiDialogTitlebar).html("" + (s || "&#160;"))
            }
            this._super(e, s)
        },
        _size: function () {
            var e, i, s, n = this.options, o = this.uiDialog.is(":visible");
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                height: 0
            }), n.minWidth > n.width && (n.width = n.minWidth), e = this.uiDialog.css({
                height: "auto",
                width: n.width
            }).outerHeight(), i = Math.max(0, n.minHeight - e), "auto" === n.height ? t.support.minHeight ? this.element.css({
                minHeight: i,
                height: "auto"
            }) : (this.uiDialog.show(), s = this.element.css("height", "auto").height(), o || this.uiDialog.hide(), this.element.height(Math.max(s, i))) : this.element.height(Math.max(n.height - e, 0)), this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        }
    }), t.extend(t.ui.dialog, {
        uuid: 0, maxZ: 0, getTitleId: function (t) {
            var e = t.attr("id");
            return e || (this.uuid += 1, e = this.uuid), "ui-dialog-title-" + e
        }, overlay: function (e) {
            this.$el = t.ui.dialog.overlay.create(e)
        }
    }), t.extend(t.ui.dialog.overlay, {
        instances: [],
        oldInstances: [],
        maxZ: 0,
        events: t.map("focus,mousedown,mouseup,keydown,keypress,click".split(","), function (t) {
            return t + ".dialog-overlay"
        }).join(" "),
        create: function (i) {
            0 === this.instances.length && (setTimeout(function () {
                t.ui.dialog.overlay.instances.length && t(document).bind(t.ui.dialog.overlay.events, function (i) {
                    return t(i.target).zIndex() < t.ui.dialog.overlay.maxZ ? !1 : e
                })
            }, 1), t(window).bind("resize.dialog-overlay", t.ui.dialog.overlay.resize));
            var s = this.oldInstances.pop() || t("<div>").addClass("ui-widget-overlay");
            return t(document).bind("keydown.dialog-overlay", function (e) {
                var n = t.ui.dialog.overlay.instances;
                0 !== n.length && n[n.length - 1] === s && i.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE && (i.close(e), e.preventDefault())
            }), s.appendTo(document.body).css({
                width: this.width(),
                height: this.height()
            }), t.fn.bgiframe && s.bgiframe(), this.instances.push(s), s
        },
        destroy: function (e) {
            var i = t.inArray(e, this.instances), s = 0;
            -1 !== i && this.oldInstances.push(this.instances.splice(i, 1)[0]), 0 === this.instances.length && t([document, window]).unbind(".dialog-overlay"), e.height(0).width(0).remove(), t.each(this.instances, function () {
                s = Math.max(s, this.css("z-index"))
            }), this.maxZ = s
        },
        height: function () {
            var e, i;
            return t.ui.ie ? (e = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight), i = Math.max(document.documentElement.offsetHeight, document.body.offsetHeight), i > e ? t(window).height() + "px" : e + "px") : t(document).height() + "px"
        },
        width: function () {
            var e, i;
            return t.ui.ie ? (e = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth), i = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth), i > e ? t(window).width() + "px" : e + "px") : t(document).width() + "px"
        },
        resize: function () {
            var e = t([]);
            t.each(t.ui.dialog.overlay.instances, function () {
                e = e.add(this)
            }), e.css({width: 0, height: 0}).css({
                width: t.ui.dialog.overlay.width(),
                height: t.ui.dialog.overlay.height()
            })
        }
    }), t.extend(t.ui.dialog.overlay.prototype, {
        destroy: function () {
            t.ui.dialog.overlay.destroy(this.$el)
        }
    })
})(jQuery);
(function (t) {
    var e = !1;
    t.widget("ui.menu", {
        version: "1.9.2",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {submenu: "ui-icon-carat-1-e"},
            menus: "ul",
            position: {my: "left top", at: "right top"},
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function () {
            this.activeMenu = this.element, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                role: this.options.role,
                tabIndex: 0
            }).bind("click" + this.eventNamespace, t.proxy(function (t) {
                this.options.disabled && t.preventDefault()
            }, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                "mousedown .ui-menu-item > a": function (t) {
                    t.preventDefault()
                }, "click .ui-state-disabled > a": function (t) {
                    t.preventDefault()
                }, "click .ui-menu-item:has(a)": function (i) {
                    var s = t(i.target).closest(".ui-menu-item");
                    !e && s.not(".ui-state-disabled").length && (e = !0, this.select(i), s.has(".ui-menu").length ? this.expand(i) : this.element.is(":focus") || (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                }, "mouseenter .ui-menu-item": function (e) {
                    var i = t(e.currentTarget);
                    i.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(e, i)
                }, mouseleave: "collapseAll", "mouseleave .ui-menu": "collapseAll", focus: function (t, e) {
                    var i = this.active || this.element.children(".ui-menu-item").eq(0);
                    e || this.focus(t, i)
                }, blur: function (e) {
                    this._delay(function () {
                        t.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(e)
                    })
                }, keydown: "_keydown"
            }), this.refresh(), this._on(this.document, {
                click: function (i) {
                    t(i.target).closest(".ui-menu").length || this.collapseAll(i), e = !1
                }
            })
        },
        _destroy: function () {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").andSelf().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function () {
                var e = t(this);
                e.data("ui-menu-submenu-carat") && e.remove()
            }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
        },
        _keydown: function (e) {
            function i(t) {
                return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            }

            var s, n, o, a, r, l = !0;
            switch (e.keyCode) {
                case t.ui.keyCode.PAGE_UP:
                    this.previousPage(e);
                    break;
                case t.ui.keyCode.PAGE_DOWN:
                    this.nextPage(e);
                    break;
                case t.ui.keyCode.HOME:
                    this._move("first", "first", e);
                    break;
                case t.ui.keyCode.END:
                    this._move("last", "last", e);
                    break;
                case t.ui.keyCode.UP:
                    this.previous(e);
                    break;
                case t.ui.keyCode.DOWN:
                    this.next(e);
                    break;
                case t.ui.keyCode.LEFT:
                    this.collapse(e);
                    break;
                case t.ui.keyCode.RIGHT:
                    this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                    break;
                case t.ui.keyCode.ENTER:
                case t.ui.keyCode.SPACE:
                    this._activate(e);
                    break;
                case t.ui.keyCode.ESCAPE:
                    this.collapse(e);
                    break;
                default:
                    l = !1, n = this.previousFilter || "", o = String.fromCharCode(e.keyCode), a = !1, clearTimeout(this.filterTimer), o === n ? a = !0 : o = n + o, r = RegExp("^" + i(o), "i"), s = this.activeMenu.children(".ui-menu-item").filter(function () {
                        return r.test(t(this).children("a").text())
                    }), s = a && -1 !== s.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : s, s.length || (o = String.fromCharCode(e.keyCode), r = RegExp("^" + i(o), "i"), s = this.activeMenu.children(".ui-menu-item").filter(function () {
                        return r.test(t(this).children("a").text())
                    })), s.length ? (this.focus(e, s), s.length > 1 ? (this.previousFilter = o, this.filterTimer = this._delay(function () {
                        delete this.previousFilter
                    }, 1e3)) : delete this.previousFilter) : delete this.previousFilter
            }
            l && e.preventDefault()
        },
        _activate: function (t) {
            this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
        },
        refresh: function () {
            var e, i = this.options.icons.submenu, s = this.element.find(this.options.menus);
            s.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function () {
                var e = t(this), s = e.prev("a"),
                    n = t("<span>").addClass("ui-menu-icon ui-icon " + i).data("ui-menu-submenu-carat", !0);
                s.attr("aria-haspopup", "true").prepend(n), e.attr("aria-labelledby", s.attr("id"))
            }), e = s.add(this.element), e.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
                tabIndex: -1,
                role: this._itemRole()
            }), e.children(":not(.ui-menu-item)").each(function () {
                var e = t(this);
                /[^\-—–\s]/.test(e.text()) || e.addClass("ui-widget-content ui-menu-divider")
            }), e.children(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function () {
            return {menu: "menuitem", listbox: "option"}[this.options.role]
        },
        focus: function (t, e) {
            var i, s;
            this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), s = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function () {
                this._close()
            }, this.delay), i = e.children(".ui-menu"), i.length && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {item: e})
        },
        _scrollIntoView: function (e) {
            var i, s, n, o, a, r;
            this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, n = e.offset().top - this.activeMenu.offset().top - i - s, o = this.activeMenu.scrollTop(), a = this.activeMenu.height(), r = e.height(), 0 > n ? this.activeMenu.scrollTop(o + n) : n + r > a && this.activeMenu.scrollTop(o + n - a + r))
        },
        blur: function (t, e) {
            e || clearTimeout(this.timer), this.active && (this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", t, {item: this.active}))
        },
        _startOpening: function (t) {
            clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function () {
                this._close(), this._open(t)
            }, this.delay))
        },
        _open: function (e) {
            var i = t.extend({of: this.active}, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
        },
        collapseAll: function (e, i) {
            clearTimeout(this.timer), this.timer = this._delay(function () {
                var s = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                s.length || (s = this.element), this._close(s), this.blur(e), this.activeMenu = s
            }, this.delay)
        },
        _close: function (t) {
            t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
        },
        collapse: function (t) {
            var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            e && e.length && (this._close(), this.focus(t, e))
        },
        expand: function (t) {
            var e = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
            e && e.length && (this._open(e.parent()), this._delay(function () {
                this.focus(t, e)
            }))
        },
        next: function (t) {
            this._move("next", "first", t)
        },
        previous: function (t) {
            this._move("prev", "last", t)
        },
        isFirstItem: function () {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function () {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function (t, e, i) {
            var s;
            this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.children(".ui-menu-item")[e]()), this.focus(i, s)
        },
        nextPage: function (e) {
            var i, s, n;
            return this.active ? (this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
                return i = t(this), 0 > i.offset().top - s - n
            }), this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]())), undefined) : (this.next(e), undefined)
        },
        previousPage: function (e) {
            var i, s, n;
            return this.active ? (this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
                return i = t(this), i.offset().top - s + n > 0
            }), this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item").first())), undefined) : (this.next(e), undefined)
        },
        _hasScroll: function () {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function (e) {
            this.active = this.active || t(e.target).closest(".ui-menu-item");
            var i = {item: this.active};
            this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i)
        }
    })
})(jQuery);
(function (t, e) {
    t.widget("ui.progressbar", {
        version: "1.9.2", options: {value: 0, max: 100}, min: 0, _create: function () {
            this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                role: "progressbar",
                "aria-valuemin": this.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._value()
            }), this.valueDiv = t("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this.oldValue = this._value(), this._refreshValue()
        }, _destroy: function () {
            this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove()
        }, value: function (t) {
            return t === e ? this._value() : (this._setOption("value", t), this)
        }, _setOption: function (t, e) {
            "value" === t && (this.options.value = e, this._refreshValue(), this._value() === this.options.max && this._trigger("complete")), this._super(t, e)
        }, _value: function () {
            var t = this.options.value;
            return "number" != typeof t && (t = 0), Math.min(this.options.max, Math.max(this.min, t))
        }, _percentage: function () {
            return 100 * this._value() / this.options.max
        }, _refreshValue: function () {
            var t = this.value(), e = this._percentage();
            this.oldValue !== t && (this.oldValue = t, this._trigger("change")), this.valueDiv.toggle(t > this.min).toggleClass("ui-corner-right", t === this.options.max).width(e.toFixed(0) + "%"), this.element.attr("aria-valuenow", t)
        }
    })
})(jQuery);
(function (t) {
    var e = 5;
    t.widget("ui.slider", t.ui.mouse, {
        version: "1.9.2",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null
        },
        _create: function () {
            var i, s, n = this.options,
                o = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                a = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>", r = [];
            for (this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all" + (n.disabled ? " ui-slider-disabled ui-disabled" : "")), this.range = t([]), n.range && (n.range === !0 && (n.values || (n.values = [this._valueMin(), this._valueMin()]), n.values.length && 2 !== n.values.length && (n.values = [n.values[0], n.values[0]])), this.range = t("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header" + ("min" === n.range || "max" === n.range ? " ui-slider-range-" + n.range : ""))), s = n.values && n.values.length || 1, i = o.length; s > i; i++) r.push(a);
            this.handles = o.add(t(r.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.add(this.range).filter("a").click(function (t) {
                t.preventDefault()
            }).mouseenter(function () {
                n.disabled || t(this).addClass("ui-state-hover")
            }).mouseleave(function () {
                t(this).removeClass("ui-state-hover")
            }).focus(function () {
                n.disabled ? t(this).blur() : (t(".ui-slider .ui-state-focus").removeClass("ui-state-focus"), t(this).addClass("ui-state-focus"))
            }).blur(function () {
                t(this).removeClass("ui-state-focus")
            }), this.handles.each(function (e) {
                t(this).data("ui-slider-handle-index", e)
            }), this._on(this.handles, {
                keydown: function (i) {
                    var s, n, o, a, r = t(i.target).data("ui-slider-handle-index");
                    switch (i.keyCode) {
                        case t.ui.keyCode.HOME:
                        case t.ui.keyCode.END:
                        case t.ui.keyCode.PAGE_UP:
                        case t.ui.keyCode.PAGE_DOWN:
                        case t.ui.keyCode.UP:
                        case t.ui.keyCode.RIGHT:
                        case t.ui.keyCode.DOWN:
                        case t.ui.keyCode.LEFT:
                            if (i.preventDefault(), !this._keySliding && (this._keySliding = !0, t(i.target).addClass("ui-state-active"), s = this._start(i, r), s === !1)) return
                    }
                    switch (a = this.options.step, n = o = this.options.values && this.options.values.length ? this.values(r) : this.value(), i.keyCode) {
                        case t.ui.keyCode.HOME:
                            o = this._valueMin();
                            break;
                        case t.ui.keyCode.END:
                            o = this._valueMax();
                            break;
                        case t.ui.keyCode.PAGE_UP:
                            o = this._trimAlignValue(n + (this._valueMax() - this._valueMin()) / e);
                            break;
                        case t.ui.keyCode.PAGE_DOWN:
                            o = this._trimAlignValue(n - (this._valueMax() - this._valueMin()) / e);
                            break;
                        case t.ui.keyCode.UP:
                        case t.ui.keyCode.RIGHT:
                            if (n === this._valueMax()) return;
                            o = this._trimAlignValue(n + a);
                            break;
                        case t.ui.keyCode.DOWN:
                        case t.ui.keyCode.LEFT:
                            if (n === this._valueMin()) return;
                            o = this._trimAlignValue(n - a)
                    }
                    this._slide(i, r, o)
                }, keyup: function (e) {
                    var i = t(e.target).data("ui-slider-handle-index");
                    this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), t(e.target).removeClass("ui-state-active"))
                }
            }), this._refreshValue(), this._animateOff = !1
        },
        _destroy: function () {
            this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
        },
        _mouseCapture: function (e) {
            var i, s, n, o, a, r, l, h, c = this, u = this.options;
            return u.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), i = {
                x: e.pageX,
                y: e.pageY
            }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function (e) {
                var i = Math.abs(s - c.values(e));
                n > i && (n = i, o = t(this), a = e)
            }), u.range === !0 && this.values(1) === u.min && (a += 1, o = t(this.handles[a])), r = this._start(e, a), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = a, o.addClass("ui-state-active").focus(), l = o.offset(), h = !t(e.target).parents().andSelf().is(".ui-slider-handle"), this._clickOffset = h ? {
                left: 0,
                top: 0
            } : {
                left: e.pageX - l.left - o.width() / 2,
                top: e.pageY - l.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(e, a, s), this._animateOff = !0, !0))
        },
        _mouseStart: function () {
            return !0
        },
        _mouseDrag: function (t) {
            var e = {x: t.pageX, y: t.pageY}, i = this._normValueFromMouse(e);
            return this._slide(t, this._handleIndex, i), !1
        },
        _mouseStop: function (t) {
            return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
        },
        _detectOrientation: function () {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function (t) {
            var e, i, s, n, o;
            return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / e, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), o = this._valueMin() + s * n, this._trimAlignValue(o)
        },
        _start: function (t, e) {
            var i = {handle: this.handles[e], value: this.value()};
            return this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("start", t, i)
        },
        _slide: function (t, e, i) {
            var s, n, o;
            this.options.values && this.options.values.length ? (s = this.values(e ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === e && i > s || 1 === e && s > i) && (i = s), i !== this.values(e) && (n = this.values(), n[e] = i, o = this._trigger("slide", t, {
                handle: this.handles[e],
                value: i,
                values: n
            }), s = this.values(e ? 0 : 1), o !== !1 && this.values(e, i, !0))) : i !== this.value() && (o = this._trigger("slide", t, {
                handle: this.handles[e],
                value: i
            }), o !== !1 && this.value(i))
        },
        _stop: function (t, e) {
            var i = {handle: this.handles[e], value: this.value()};
            this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("stop", t, i)
        },
        _change: function (t, e) {
            if (!this._keySliding && !this._mouseSliding) {
                var i = {handle: this.handles[e], value: this.value()};
                this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("change", t, i)
            }
        },
        value: function (t) {
            return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), this._change(null, 0), undefined) : this._value()
        },
        values: function (e, i) {
            var s, n, o;
            if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), this._change(null, e), undefined;
            if (!arguments.length) return this._values();
            if (!t.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(e) : this.value();
            for (s = this.options.values, n = arguments[0], o = 0; s.length > o; o += 1) s[o] = this._trimAlignValue(n[o]), this._change(null, o);
            this._refreshValue()
        },
        _setOption: function (e, i) {
            var s, n = 0;
            switch (t.isArray(this.options.values) && (n = this.options.values.length), t.Widget.prototype._setOption.apply(this, arguments), e) {
                case"disabled":
                    i ? (this.handles.filter(".ui-state-focus").blur(), this.handles.removeClass("ui-state-hover"), this.handles.prop("disabled", !0), this.element.addClass("ui-disabled")) : (this.handles.prop("disabled", !1), this.element.removeClass("ui-disabled"));
                    break;
                case"orientation":
                    this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                    break;
                case"value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;
                case"values":
                    for (this._animateOff = !0, this._refreshValue(), s = 0; n > s; s += 1) this._change(null, s);
                    this._animateOff = !1;
                    break;
                case"min":
                case"max":
                    this._animateOff = !0, this._refreshValue(), this._animateOff = !1
            }
        },
        _value: function () {
            var t = this.options.value;
            return t = this._trimAlignValue(t)
        },
        _values: function (t) {
            var e, i, s;
            if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);
            for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(i[s]);
            return i
        },
        _trimAlignValue: function (t) {
            if (this._valueMin() >= t) return this._valueMin();
            if (t >= this._valueMax()) return this._valueMax();
            var e = this.options.step > 0 ? this.options.step : 1, i = (t - this._valueMin()) % e, s = t - i;
            return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e), parseFloat(s.toFixed(5))
        },
        _valueMin: function () {
            return this.options.min
        },
        _valueMax: function () {
            return this.options.max
        },
        _refreshValue: function () {
            var e, i, s, n, o, a = this.options.range, r = this.options, l = this,
                h = this._animateOff ? !1 : r.animate, c = {};
            this.options.values && this.options.values.length ? this.handles.each(function (s) {
                i = 100 * ((l.values(s) - l._valueMin()) / (l._valueMax() - l._valueMin())), c["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[h ? "animate" : "css"](c, r.animate), l.options.range === !0 && ("horizontal" === l.orientation ? (0 === s && l.range.stop(1, 1)[h ? "animate" : "css"]({left: i + "%"}, r.animate), 1 === s && l.range[h ? "animate" : "css"]({width: i - e + "%"}, {
                    queue: !1,
                    duration: r.animate
                })) : (0 === s && l.range.stop(1, 1)[h ? "animate" : "css"]({bottom: i + "%"}, r.animate), 1 === s && l.range[h ? "animate" : "css"]({height: i - e + "%"}, {
                    queue: !1,
                    duration: r.animate
                }))), e = i
            }) : (s = this.value(), n = this._valueMin(), o = this._valueMax(), i = o !== n ? 100 * ((s - n) / (o - n)) : 0, c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[h ? "animate" : "css"](c, r.animate), "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({width: i + "%"}, r.animate), "max" === a && "horizontal" === this.orientation && this.range[h ? "animate" : "css"]({width: 100 - i + "%"}, {
                queue: !1,
                duration: r.animate
            }), "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({height: i + "%"}, r.animate), "max" === a && "vertical" === this.orientation && this.range[h ? "animate" : "css"]({height: 100 - i + "%"}, {
                queue: !1,
                duration: r.animate
            }))
        }
    })
})(jQuery);
(function (t) {
    function e(t) {
        return function () {
            var e = this.element.val();
            t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change")
        }
    }

    t.widget("ui.spinner", {
        version: "1.9.2",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            culture: null,
            icons: {down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n"},
            incremental: !0,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function () {
            this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                beforeunload: function () {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _getCreateOptions: function () {
            var e = {}, i = this.element;
            return t.each(["min", "max", "step"], function (t, s) {
                var n = i.attr(s);
                void 0 !== n && n.length && (e[s] = n)
            }), e
        },
        _events: {
            keydown: function (t) {
                this._start(t) && this._keydown(t) && t.preventDefault()
            }, keyup: "_stop", focus: function () {
                this.previous = this.element.val()
            }, blur: function (t) {
                return this.cancelBlur ? (delete this.cancelBlur, void 0) : (this._refresh(), this.previous !== this.element.val() && this._trigger("change", t), void 0)
            }, mousewheel: function (t, e) {
                if (e) {
                    if (!this.spinning && !this._start(t)) return !1;
                    this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function () {
                        this.spinning && this._stop(t)
                    }, 100), t.preventDefault()
                }
            }, "mousedown .ui-spinner-button": function (e) {
                function i() {
                    var t = this.element[0] === this.document[0].activeElement;
                    t || (this.element.focus(), this.previous = s, this._delay(function () {
                        this.previous = s
                    }))
                }

                var s;
                s = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), e.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function () {
                    delete this.cancelBlur, i.call(this)
                }), this._start(e) !== !1 && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
            }, "mouseup .ui-spinner-button": "_stop", "mouseenter .ui-spinner-button": function (e) {
                return t(e.currentTarget).hasClass("ui-state-active") ? this._start(e) === !1 ? !1 : (this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e), void 0) : void 0
            }, "mouseleave .ui-spinner-button": "_stop"
        },
        _draw: function () {
            var t = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
            this.element.attr("role", "spinbutton"), this.buttons = t.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(.5 * t.height()) && t.height() > 0 && t.height(t.height()), this.options.disabled && this.disable()
        },
        _keydown: function (e) {
            var i = this.options, s = t.ui.keyCode;
            switch (e.keyCode) {
                case s.UP:
                    return this._repeat(null, 1, e), !0;
                case s.DOWN:
                    return this._repeat(null, -1, e), !0;
                case s.PAGE_UP:
                    return this._repeat(null, i.page, e), !0;
                case s.PAGE_DOWN:
                    return this._repeat(null, -i.page, e), !0
            }
            return !1
        },
        _uiSpinnerHtml: function () {
            return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
        },
        _buttonHtml: function () {
            return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span>" + "</a>" + "<a class='ui-spinner-button ui-spinner-down ui-corner-br'>" + "<span class='ui-icon " + this.options.icons.down + "'>&#9660;</span>" + "</a>"
        },
        _start: function (t) {
            return this.spinning || this._trigger("start", t) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1
        },
        _repeat: function (t, e, i) {
            t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function () {
                this._repeat(40, e, i)
            }, t), this._spin(e * this.options.step, i)
        },
        _spin: function (t, e) {
            var i = this.value() || 0;
            this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && this._trigger("spin", e, {value: i}) === !1 || (this._value(i), this.counter++)
        },
        _increment: function (e) {
            var i = this.options.incremental;
            return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1
        },
        _precision: function () {
            var t = this._precisionOf(this.options.step);
            return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
        },
        _precisionOf: function (t) {
            var e = "" + t, i = e.indexOf(".");
            return -1 === i ? 0 : e.length - i - 1
        },
        _adjustValue: function (t) {
            var e, i, s = this.options;
            return e = null !== s.min ? s.min : 0, i = t - e, i = Math.round(i / s.step) * s.step, t = e + i, t = parseFloat(t.toFixed(this._precision())), null !== s.max && t > s.max ? s.max : null !== s.min && s.min > t ? s.min : t
        },
        _stop: function (t) {
            this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t))
        },
        _setOption: function (t, e) {
            if ("culture" === t || "numberFormat" === t) {
                var i = this._parse(this.element.val());
                return this.options[t] = e, this.element.val(this._format(i)), void 0
            }
            ("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)), this._super(t, e), "disabled" === t && (e ? (this.element.prop("disabled", !0), this.buttons.button("disable")) : (this.element.prop("disabled", !1), this.buttons.button("enable")))
        },
        _setOptions: e(function (t) {
            this._super(t), this._value(this.element.val())
        }),
        _parse: function (t) {
            return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t
        },
        _format: function (t) {
            return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
        },
        _refresh: function () {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            })
        },
        _value: function (t, e) {
            var i;
            "" !== t && (i = this._parse(t), null !== i && (e || (i = this._adjustValue(i)), t = this._format(i))), this.element.val(t), this._refresh()
        },
        _destroy: function () {
            this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element)
        },
        stepUp: e(function (t) {
            this._stepUp(t)
        }),
        _stepUp: function (t) {
            this._spin((t || 1) * this.options.step)
        },
        stepDown: e(function (t) {
            this._stepDown(t)
        }),
        _stepDown: function (t) {
            this._spin((t || 1) * -this.options.step)
        },
        pageUp: e(function (t) {
            this._stepUp((t || 1) * this.options.page)
        }),
        pageDown: e(function (t) {
            this._stepDown((t || 1) * this.options.page)
        }),
        value: function (t) {
            return arguments.length ? (e(this._value).call(this, t), void 0) : this._parse(this.element.val())
        },
        widget: function () {
            return this.uiSpinner
        }
    })
})(jQuery);
(function (t, e) {
    function i() {
        return ++n
    }

    function s(t) {
        return t.hash.length > 1 && t.href.replace(o, "") === location.href.replace(o, "").replace(/\s/g, "%20")
    }

    var n = 0, o = /#.*$/;
    t.widget("ui.tabs", {
        version: "1.9.2",
        delay: 300,
        options: {
            active: null,
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _create: function () {
            var i = this, s = this.options, n = s.active, o = location.hash.substring(1);
            this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", s.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function (e) {
                t(this).is(".ui-state-disabled") && e.preventDefault()
            }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function () {
                t(this).closest("li").is(".ui-state-disabled") && this.blur()
            }), this._processTabs(), null === n && (o && this.tabs.each(function (i, s) {
                return t(s).attr("aria-controls") === o ? (n = i, !1) : e
            }), null === n && (n = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === n || -1 === n) && (n = this.tabs.length ? 0 : !1)), n !== !1 && (n = this.tabs.index(this.tabs.eq(n)), -1 === n && (n = s.collapsible ? !1 : 0)), s.active = n, !s.collapsible && s.active === !1 && this.anchors.length && (s.active = 0), t.isArray(s.disabled) && (s.disabled = t.unique(s.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function (t) {
                return i.tabs.index(t)
            }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(this.options.active) : t(), this._refresh(), this.active.length && this.load(s.active)
        },
        _getCreateEventData: function () {
            return {tab: this.active, panel: this.active.length ? this._getPanelForTab(this.active) : t()}
        },
        _tabKeydown: function (i) {
            var s = t(this.document[0].activeElement).closest("li"), n = this.tabs.index(s), o = !0;
            if (!this._handlePageNav(i)) {
                switch (i.keyCode) {
                    case t.ui.keyCode.RIGHT:
                    case t.ui.keyCode.DOWN:
                        n++;
                        break;
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.LEFT:
                        o = !1, n--;
                        break;
                    case t.ui.keyCode.END:
                        n = this.anchors.length - 1;
                        break;
                    case t.ui.keyCode.HOME:
                        n = 0;
                        break;
                    case t.ui.keyCode.SPACE:
                        return i.preventDefault(), clearTimeout(this.activating), this._activate(n), e;
                    case t.ui.keyCode.ENTER:
                        return i.preventDefault(), clearTimeout(this.activating), this._activate(n === this.options.active ? !1 : n), e;
                    default:
                        return
                }
                i.preventDefault(), clearTimeout(this.activating), n = this._focusNextTab(n, o), i.ctrlKey || (s.attr("aria-selected", "false"), this.tabs.eq(n).attr("aria-selected", "true"), this.activating = this._delay(function () {
                    this.option("active", n)
                }, this.delay))
            }
        },
        _panelKeydown: function (e) {
            this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.focus())
        },
        _handlePageNav: function (i) {
            return i.altKey && i.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : i.altKey && i.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : e
        },
        _findNextTab: function (e, i) {
            function s() {
                return e > n && (e = 0), 0 > e && (e = n), e
            }

            for (var n = this.tabs.length - 1; -1 !== t.inArray(s(), this.options.disabled);) e = i ? e + 1 : e - 1;
            return e
        },
        _focusNextTab: function (t, e) {
            return t = this._findNextTab(t, e), this.tabs.eq(t).focus(), t
        },
        _setOption: function (t, i) {
            return "active" === t ? (this._activate(i), e) : "disabled" === t ? (this._setupDisabled(i), e) : (this._super(t, i), "collapsible" === t && (this.element.toggleClass("ui-tabs-collapsible", i), i || this.options.active !== !1 || this._activate(0)), "event" === t && this._setupEvents(i), "heightStyle" === t && this._setupHeightStyle(i), e)
        },
        _tabId: function (t) {
            return t.attr("aria-controls") || "ui-tabs-" + i()
        },
        _sanitizeSelector: function (t) {
            return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function () {
            var e = this.options, i = this.tablist.children(":has(a[href])");
            e.disabled = t.map(i.filter(".ui-state-disabled"), function (t) {
                return i.index(t)
            }), this._processTabs(), e.active !== !1 && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh()
        },
        _refresh: function () {
            this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                "aria-selected": "false",
                tabIndex: -1
            }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                "aria-selected": "true",
                tabIndex: 0
            }), this._getPanelForTab(this.active).show().attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function () {
            var e = this;
            this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist"), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                role: "tab",
                tabIndex: -1
            }), this.anchors = this.tabs.map(function () {
                return t("a", this)[0]
            }).addClass("ui-tabs-anchor").attr({
                role: "presentation",
                tabIndex: -1
            }), this.panels = t(), this.anchors.each(function (i, n) {
                var o, a, r, h = t(n).uniqueId().attr("id"), l = t(n).closest("li"), c = l.attr("aria-controls");
                s(n) ? (o = n.hash, a = e.element.find(e._sanitizeSelector(o))) : (r = e._tabId(l), o = "#" + r, a = e.element.find(o), a.length || (a = e._createPanel(r), a.insertAfter(e.panels[i - 1] || e.tablist)), a.attr("aria-live", "polite")), a.length && (e.panels = e.panels.add(a)), c && l.data("ui-tabs-aria-controls", c), l.attr({
                    "aria-controls": o.substring(1),
                    "aria-labelledby": h
                }), a.attr("aria-labelledby", h)
            }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
        },
        _getList: function () {
            return this.element.find("ol,ul").eq(0)
        },
        _createPanel: function (e) {
            return t("<div>").attr("id", e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
        },
        _setupDisabled: function (e) {
            t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1);
            for (var i, s = 0; i = this.tabs[s]; s++) e === !0 || -1 !== t.inArray(s, e) ? t(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : t(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
            this.options.disabled = e
        },
        _setupEvents: function (e) {
            var i = {
                click: function (t) {
                    t.preventDefault()
                }
            };
            e && t.each(e.split(" "), function (t, e) {
                i[e] = "_eventHandler"
            }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(this.anchors, i), this._on(this.tabs, {keydown: "_tabKeydown"}), this._on(this.panels, {keydown: "_panelKeydown"}), this._focusable(this.tabs), this._hoverable(this.tabs)
        },
        _setupHeightStyle: function (e) {
            var i, s, n = this.element.parent();
            "fill" === e ? (t.support.minHeight || (s = n.css("overflow"), n.css("overflow", "hidden")), i = n.height(), this.element.siblings(":visible").each(function () {
                var e = t(this), s = e.css("position");
                "absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0))
            }), s && n.css("overflow", s), this.element.children().not(this.panels).each(function () {
                i -= t(this).outerHeight(!0)
            }), this.panels.each(function () {
                t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
            }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function () {
                i = Math.max(i, t(this).height("").height())
            }).height(i))
        },
        _eventHandler: function (e) {
            var i = this.options, s = this.active, n = t(e.currentTarget), o = n.closest("li"), a = o[0] === s[0],
                r = a && i.collapsible, h = r ? t() : this._getPanelForTab(o),
                l = s.length ? this._getPanelForTab(s) : t(),
                c = {oldTab: s, oldPanel: l, newTab: r ? t() : o, newPanel: h};
            e.preventDefault(), o.hasClass("ui-state-disabled") || o.hasClass("ui-tabs-loading") || this.running || a && !i.collapsible || this._trigger("beforeActivate", e, c) === !1 || (i.active = r ? !1 : this.tabs.index(o), this.active = a ? t() : o, this.xhr && this.xhr.abort(), l.length || h.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), h.length && this.load(this.tabs.index(o), e), this._toggle(e, c))
        },
        _toggle: function (e, i) {
            function s() {
                o.running = !1, o._trigger("activate", e, i)
            }

            function n() {
                i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), a.length && o.options.show ? o._show(a, o.options.show, s) : (a.show(), s())
            }

            var o = this, a = i.newPanel, r = i.oldPanel;
            this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function () {
                i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), n()
            }) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), r.hide(), n()), r.attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }), i.oldTab.attr("aria-selected", "false"), a.length && r.length ? i.oldTab.attr("tabIndex", -1) : a.length && this.tabs.filter(function () {
                return 0 === t(this).attr("tabIndex")
            }).attr("tabIndex", -1), a.attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }), i.newTab.attr({"aria-selected": "true", tabIndex: 0})
        },
        _activate: function (e) {
            var i, s = this._findActive(e);
            s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: t.noop
            }))
        },
        _findActive: function (e) {
            return e === !1 ? t() : this.tabs.eq(e)
        },
        _getIndex: function (t) {
            return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + t + "']"))), t
        },
        _destroy: function () {
            this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeData("href.tabs").removeData("load.tabs").removeUniqueId(), this.tabs.add(this.panels).each(function () {
                t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
            }), this.tabs.each(function () {
                var e = t(this), i = e.data("ui-tabs-aria-controls");
                i ? e.attr("aria-controls", i) : e.removeAttr("aria-controls")
            }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
        },
        enable: function (i) {
            var s = this.options.disabled;
            s !== !1 && (i === e ? s = !1 : (i = this._getIndex(i), s = t.isArray(s) ? t.map(s, function (t) {
                return t !== i ? t : null
            }) : t.map(this.tabs, function (t, e) {
                return e !== i ? e : null
            })), this._setupDisabled(s))
        },
        disable: function (i) {
            var s = this.options.disabled;
            if (s !== !0) {
                if (i === e) s = !0; else {
                    if (i = this._getIndex(i), -1 !== t.inArray(i, s)) return;
                    s = t.isArray(s) ? t.merge([i], s).sort() : [i]
                }
                this._setupDisabled(s)
            }
        },
        load: function (e, i) {
            e = this._getIndex(e);
            var n = this, o = this.tabs.eq(e), a = o.find(".ui-tabs-anchor"), r = this._getPanelForTab(o),
                h = {tab: o, panel: r};
            s(a[0]) || (this.xhr = t.ajax(this._ajaxSettings(a, i, h)), this.xhr && "canceled" !== this.xhr.statusText && (o.addClass("ui-tabs-loading"), r.attr("aria-busy", "true"), this.xhr.success(function (t) {
                setTimeout(function () {
                    r.html(t), n._trigger("load", i, h)
                }, 1)
            }).complete(function (t, e) {
                setTimeout(function () {
                    "abort" === e && n.panels.stop(!1, !0), o.removeClass("ui-tabs-loading"), r.removeAttr("aria-busy"), t === n.xhr && delete n.xhr
                }, 1)
            })))
        },
        _ajaxSettings: function (e, i, s) {
            var n = this;
            return {
                url: e.attr("href"), beforeSend: function (e, o) {
                    return n._trigger("beforeLoad", i, t.extend({jqXHR: e, ajaxSettings: o}, s))
                }
            }
        },
        _getPanelForTab: function (e) {
            var i = t(e).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + i))
        }
    }), t.uiBackCompat !== !1 && (t.ui.tabs.prototype._ui = function (t, e) {
        return {tab: t, panel: e, index: this.anchors.index(t)}
    }, t.widget("ui.tabs", t.ui.tabs, {
        url: function (t, e) {
            this.anchors.eq(t).attr("href", e)
        }
    }), t.widget("ui.tabs", t.ui.tabs, {
        options: {ajaxOptions: null, cache: !1}, _create: function () {
            this._super();
            var i = this;
            this._on({
                tabsbeforeload: function (s, n) {
                    return t.data(n.tab[0], "cache.tabs") ? (s.preventDefault(), e) : (n.jqXHR.success(function () {
                        i.options.cache && t.data(n.tab[0], "cache.tabs", !0)
                    }), e)
                }
            })
        }, _ajaxSettings: function (e, i, s) {
            var n = this.options.ajaxOptions;
            return t.extend({}, n, {
                error: function (t, e) {
                    try {
                        n.error(t, e, s.tab.closest("li").index(), s.tab[0])
                    } catch (i) {
                    }
                }
            }, this._superApply(arguments))
        }, _setOption: function (t, e) {
            "cache" === t && e === !1 && this.anchors.removeData("cache.tabs"), this._super(t, e)
        }, _destroy: function () {
            this.anchors.removeData("cache.tabs"), this._super()
        }, url: function (t) {
            this.anchors.eq(t).removeData("cache.tabs"), this._superApply(arguments)
        }
    }), t.widget("ui.tabs", t.ui.tabs, {
        abort: function () {
            this.xhr && this.xhr.abort()
        }
    }), t.widget("ui.tabs", t.ui.tabs, {
        options: {spinner: "<em>Loading&#8230;</em>"}, _create: function () {
            this._super(), this._on({
                tabsbeforeload: function (t, e) {
                    if (t.target === this.element[0] && this.options.spinner) {
                        var i = e.tab.find("span"), s = i.html();
                        i.html(this.options.spinner), e.jqXHR.complete(function () {
                            i.html(s)
                        })
                    }
                }
            })
        }
    }), t.widget("ui.tabs", t.ui.tabs, {
        options: {enable: null, disable: null}, enable: function (e) {
            var i, s = this.options;
            (e && s.disabled === !0 || t.isArray(s.disabled) && -1 !== t.inArray(e, s.disabled)) && (i = !0), this._superApply(arguments), i && this._trigger("enable", null, this._ui(this.anchors[e], this.panels[e]))
        }, disable: function (e) {
            var i, s = this.options;
            (e && s.disabled === !1 || t.isArray(s.disabled) && -1 === t.inArray(e, s.disabled)) && (i = !0), this._superApply(arguments), i && this._trigger("disable", null, this._ui(this.anchors[e], this.panels[e]))
        }
    }), t.widget("ui.tabs", t.ui.tabs, {
        options: {
            add: null,
            remove: null,
            tabTemplate: "<li><a href='#{href}'><span>#{label}</span></a></li>"
        }, add: function (i, s, n) {
            n === e && (n = this.anchors.length);
            var o, a, r = this.options, h = t(r.tabTemplate.replace(/#\{href\}/g, i).replace(/#\{label\}/g, s)),
                l = i.indexOf("#") ? this._tabId(h) : i.replace("#", "");
            return h.addClass("ui-state-default ui-corner-top").data("ui-tabs-destroy", !0), h.attr("aria-controls", l), o = n >= this.tabs.length, a = this.element.find("#" + l), a.length || (a = this._createPanel(l), o ? n > 0 ? a.insertAfter(this.panels.eq(-1)) : a.appendTo(this.element) : a.insertBefore(this.panels[n])), a.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").hide(), o ? h.appendTo(this.tablist) : h.insertBefore(this.tabs[n]), r.disabled = t.map(r.disabled, function (t) {
                return t >= n ? ++t : t
            }), this.refresh(), 1 === this.tabs.length && r.active === !1 && this.option("active", 0), this._trigger("add", null, this._ui(this.anchors[n], this.panels[n])), this
        }, remove: function (e) {
            e = this._getIndex(e);
            var i = this.options, s = this.tabs.eq(e).remove(), n = this._getPanelForTab(s).remove();
            return s.hasClass("ui-tabs-active") && this.anchors.length > 2 && this._activate(e + (this.anchors.length > e + 1 ? 1 : -1)), i.disabled = t.map(t.grep(i.disabled, function (t) {
                return t !== e
            }), function (t) {
                return t >= e ? --t : t
            }), this.refresh(), this._trigger("remove", null, this._ui(s.find("a")[0], n[0])), this
        }
    }), t.widget("ui.tabs", t.ui.tabs, {
        length: function () {
            return this.anchors.length
        }
    }), t.widget("ui.tabs", t.ui.tabs, {
        options: {idPrefix: "ui-tabs-"}, _tabId: function (e) {
            var s = e.is("li") ? e.find("a[href]") : e;
            return s = s[0], t(s).closest("li").attr("aria-controls") || s.title && s.title.replace(/\s/g, "_").replace(/[^\w\u00c0-\uFFFF\-]/g, "") || this.options.idPrefix + i()
        }
    }), t.widget("ui.tabs", t.ui.tabs, {
        options: {panelTemplate: "<div></div>"}, _createPanel: function (e) {
            return t(this.options.panelTemplate).attr("id", e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
        }
    }), t.widget("ui.tabs", t.ui.tabs, {
        _create: function () {
            var t = this.options;
            null === t.active && t.selected !== e && (t.active = -1 === t.selected ? !1 : t.selected), this._super(), t.selected = t.active, t.selected === !1 && (t.selected = -1)
        }, _setOption: function (t, e) {
            if ("selected" !== t) return this._super(t, e);
            var i = this.options;
            this._super("active", -1 === e ? !1 : e), i.selected = i.active, i.selected === !1 && (i.selected = -1)
        }, _eventHandler: function () {
            this._superApply(arguments), this.options.selected = this.options.active, this.options.selected === !1 && (this.options.selected = -1)
        }
    }), t.widget("ui.tabs", t.ui.tabs, {
        options: {show: null, select: null}, _create: function () {
            this._super(), this.options.active !== !1 && this._trigger("show", null, this._ui(this.active.find(".ui-tabs-anchor")[0], this._getPanelForTab(this.active)[0]))
        }, _trigger: function (t, e, i) {
            var s, n, o = this._superApply(arguments);
            return o ? ("beforeActivate" === t ? (s = i.newTab.length ? i.newTab : i.oldTab, n = i.newPanel.length ? i.newPanel : i.oldPanel, o = this._super("select", e, {
                tab: s.find(".ui-tabs-anchor")[0],
                panel: n[0],
                index: s.closest("li").index()
            })) : "activate" === t && i.newTab.length && (o = this._super("show", e, {
                tab: i.newTab.find(".ui-tabs-anchor")[0],
                panel: i.newPanel[0],
                index: i.newTab.closest("li").index()
            })), o) : !1
        }
    }), t.widget("ui.tabs", t.ui.tabs, {
        select: function (t) {
            if (t = this._getIndex(t), -1 === t) {
                if (!this.options.collapsible || -1 === this.options.selected) return;
                t = this.options.selected
            }
            this.anchors.eq(t).trigger(this.options.event + this.eventNamespace)
        }
    }), function () {
        var e = 0;
        t.widget("ui.tabs", t.ui.tabs, {
            options: {cookie: null}, _create: function () {
                var t, e = this.options;
                null == e.active && e.cookie && (t = parseInt(this._cookie(), 10), -1 === t && (t = !1), e.active = t), this._super()
            }, _cookie: function (i) {
                var s = [this.cookie || (this.cookie = this.options.cookie.name || "ui-tabs-" + ++e)];
                return arguments.length && (s.push(i === !1 ? -1 : i), s.push(this.options.cookie)), t.cookie.apply(null, s)
            }, _refresh: function () {
                this._super(), this.options.cookie && this._cookie(this.options.active, this.options.cookie)
            }, _eventHandler: function () {
                this._superApply(arguments), this.options.cookie && this._cookie(this.options.active, this.options.cookie)
            }, _destroy: function () {
                this._super(), this.options.cookie && this._cookie(null, this.options.cookie)
            }
        })
    }(), t.widget("ui.tabs", t.ui.tabs, {
        _trigger: function (e, i, s) {
            var n = t.extend({}, s);
            return "load" === e && (n.panel = n.panel[0], n.tab = n.tab.find(".ui-tabs-anchor")[0]), this._super(e, i, n)
        }
    }), t.widget("ui.tabs", t.ui.tabs, {
        options: {fx: null}, _getFx: function () {
            var e, i, s = this.options.fx;
            return s && (t.isArray(s) ? (e = s[0], i = s[1]) : e = i = s), s ? {show: i, hide: e} : null
        }, _toggle: function (t, i) {
            function s() {
                o.running = !1, o._trigger("activate", t, i)
            }

            function n() {
                i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), a.length && h.show ? a.animate(h.show, h.show.duration, function () {
                    s()
                }) : (a.show(), s())
            }

            var o = this, a = i.newPanel, r = i.oldPanel, h = this._getFx();
            return h ? (o.running = !0, r.length && h.hide ? r.animate(h.hide, h.hide.duration, function () {
                i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), n()
            }) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), r.hide(), n()), e) : this._super(t, i)
        }
    }))
})(jQuery);
(function (t) {
    function e(e, i) {
        var s = (e.attr("aria-describedby") || "").split(/\s+/);
        s.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(s.join(" ")))
    }

    function i(e) {
        var i = e.data("ui-tooltip-id"), s = (e.attr("aria-describedby") || "").split(/\s+/), n = t.inArray(i, s);
        -1 !== n && s.splice(n, 1), e.removeData("ui-tooltip-id"), s = t.trim(s.join(" ")), s ? e.attr("aria-describedby", s) : e.removeAttr("aria-describedby")
    }

    var s = 0;
    t.widget("ui.tooltip", {
        version: "1.9.2", options: {
            content: function () {
                return t(this).attr("title")
            },
            hide: !0,
            items: "[title]:not([disabled])",
            position: {my: "left top+15", at: "left bottom", collision: "flipfit flip"},
            show: !0,
            tooltipClass: null,
            track: !1,
            close: null,
            open: null
        }, _create: function () {
            this._on({
                mouseover: "open",
                focusin: "open"
            }), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable()
        }, _setOption: function (e, i) {
            var s = this;
            return "disabled" === e ? (this[i ? "_disable" : "_enable"](), this.options[e] = i, void 0) : (this._super(e, i), "content" === e && t.each(this.tooltips, function (t, e) {
                s._updateContent(e)
            }), void 0)
        }, _disable: function () {
            var e = this;
            t.each(this.tooltips, function (i, s) {
                var n = t.Event("blur");
                n.target = n.currentTarget = s[0], e.close(n, !0)
            }), this.element.find(this.options.items).andSelf().each(function () {
                var e = t(this);
                e.is("[title]") && e.data("ui-tooltip-title", e.attr("title")).attr("title", "")
            })
        }, _enable: function () {
            this.element.find(this.options.items).andSelf().each(function () {
                var e = t(this);
                e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
            })
        }, open: function (e) {
            var i = this, s = t(e ? e.target : this.element).closest(this.options.items);
            s.length && !s.data("ui-tooltip-id") && (s.attr("title") && s.data("ui-tooltip-title", s.attr("title")), s.data("ui-tooltip-open", !0), e && "mouseover" === e.type && s.parents().each(function () {
                var e, s = t(this);
                s.data("ui-tooltip-open") && (e = t.Event("blur"), e.target = e.currentTarget = this, i.close(e, !0)), s.attr("title") && (s.uniqueId(), i.parents[this.id] = {
                    element: this,
                    title: s.attr("title")
                }, s.attr("title", ""))
            }), this._updateContent(s, e))
        }, _updateContent: function (t, e) {
            var i, s = this.options.content, n = this, o = e ? e.type : null;
            return "string" == typeof s ? this._open(e, t, s) : (i = s.call(t[0], function (i) {
                t.data("ui-tooltip-open") && n._delay(function () {
                    e && (e.type = o), this._open(e, t, i)
                })
            }), i && this._open(e, t, i), void 0)
        }, _open: function (i, s, n) {
            function o(t) {
                l.of = t, a.is(":hidden") || a.position(l)
            }

            var a, r, h, l = t.extend({}, this.options.position);
            if (n) {
                if (a = this._find(s), a.length) return a.find(".ui-tooltip-content").html(n), void 0;
                s.is("[title]") && (i && "mouseover" === i.type ? s.attr("title", "") : s.removeAttr("title")), a = this._tooltip(s), e(s, a.attr("id")), a.find(".ui-tooltip-content").html(n), this.options.track && i && /^mouse/.test(i.type) ? (this._on(this.document, {mousemove: o}), o(i)) : a.position(t.extend({of: s}, this.options.position)), a.hide(), this._show(a, this.options.show), this.options.show && this.options.show.delay && (h = setInterval(function () {
                    a.is(":visible") && (o(l.of), clearInterval(h))
                }, t.fx.interval)), this._trigger("open", i, {tooltip: a}), r = {
                    keyup: function (e) {
                        if (e.keyCode === t.ui.keyCode.ESCAPE) {
                            var i = t.Event(e);
                            i.currentTarget = s[0], this.close(i, !0)
                        }
                    }, remove: function () {
                        this._removeTooltip(a)
                    }
                }, i && "mouseover" !== i.type || (r.mouseleave = "close"), i && "focusin" !== i.type || (r.focusout = "close"), this._on(!0, s, r)
            }
        }, close: function (e) {
            var s = this, n = t(e ? e.currentTarget : this.element), o = this._find(n);
            this.closing || (n.data("ui-tooltip-title") && n.attr("title", n.data("ui-tooltip-title")), i(n), o.stop(!0), this._hide(o, this.options.hide, function () {
                s._removeTooltip(t(this))
            }), n.removeData("ui-tooltip-open"), this._off(n, "mouseleave focusout keyup"), n[0] !== this.element[0] && this._off(n, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents, function (e, i) {
                t(i.element).attr("title", i.title), delete s.parents[e]
            }), this.closing = !0, this._trigger("close", e, {tooltip: o}), this.closing = !1)
        }, _tooltip: function (e) {
            var i = "ui-tooltip-" + s++, n = t("<div>").attr({
                id: i,
                role: "tooltip"
            }).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
            return t("<div>").addClass("ui-tooltip-content").appendTo(n), n.appendTo(this.document[0].body), t.fn.bgiframe && n.bgiframe(), this.tooltips[i] = e, n
        }, _find: function (e) {
            var i = e.data("ui-tooltip-id");
            return i ? t("#" + i) : t()
        }, _removeTooltip: function (t) {
            t.remove(), delete this.tooltips[t.attr("id")]
        }, _destroy: function () {
            var e = this;
            t.each(this.tooltips, function (i, s) {
                var n = t.Event("blur");
                n.target = n.currentTarget = s[0], e.close(n, !0), t("#" + i).remove(), s.data("ui-tooltip-title") && (s.attr("title", s.data("ui-tooltip-title")), s.removeData("ui-tooltip-title"))
            })
        }
    })
})(jQuery);
jQuery.effects || function (t, e) {
    var i = t.uiBackCompat !== !1, s = "ui-effects-";
    t.effects = {effect: {}}, function (e, i) {
        function s(t, e, i) {
            var s = d[e.type] || {};
            return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : t > s.max ? s.max : t)
        }

        function n(t) {
            var s = c(), n = s._rgba = [];
            return t = t.toLowerCase(), g(h, function (e, o) {
                var a, r = o.re.exec(t), l = r && o.parse(r), h = o.space || "rgba";
                return l ? (a = s[h](l), s[u[h].cache] = a[u[h].cache], n = s._rgba = a._rgba, !1) : i
            }), n.length ? ("0,0,0,0" === n.join() && e.extend(n, a.transparent), s) : a[t]
        }

        function o(t, e, i) {
            return i = (i + 1) % 1, 1 > 6 * i ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t
        }

        var a,
            r = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "),
            l = /^([\-+])=\s*(\d+\.?\d*)/, h = [{
                re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                parse: function (t) {
                    return [t[1], t[2], t[3], t[4]]
                }
            }, {
                re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                parse: function (t) {
                    return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
                }
            }, {
                re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function (t) {
                    return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
                }
            }, {
                re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function (t) {
                    return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
                }
            }, {
                re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                space: "hsla",
                parse: function (t) {
                    return [t[1], t[2] / 100, t[3] / 100, t[4]]
                }
            }], c = e.Color = function (t, i, s, n) {
                return new e.Color.fn.parse(t, i, s, n)
            }, u = {
                rgba: {
                    props: {
                        red: {idx: 0, type: "byte"},
                        green: {idx: 1, type: "byte"},
                        blue: {idx: 2, type: "byte"}
                    }
                },
                hsla: {
                    props: {
                        hue: {idx: 0, type: "degrees"},
                        saturation: {idx: 1, type: "percent"},
                        lightness: {idx: 2, type: "percent"}
                    }
                }
            }, d = {"byte": {floor: !0, max: 255}, percent: {max: 1}, degrees: {mod: 360, floor: !0}}, p = c.support = {},
            f = e("<p>")[0], g = e.each;
        f.style.cssText = "background-color:rgba(1,1,1,.5)", p.rgba = f.style.backgroundColor.indexOf("rgba") > -1, g(u, function (t, e) {
            e.cache = "_" + t, e.props.alpha = {idx: 3, type: "percent", def: 1}
        }), c.fn = e.extend(c.prototype, {
            parse: function (o, r, l, h) {
                if (o === i) return this._rgba = [null, null, null, null], this;
                (o.jquery || o.nodeType) && (o = e(o).css(r), r = i);
                var d = this, p = e.type(o), f = this._rgba = [];
                return r !== i && (o = [o, r, l, h], p = "array"), "string" === p ? this.parse(n(o) || a._default) : "array" === p ? (g(u.rgba.props, function (t, e) {
                    f[e.idx] = s(o[e.idx], e)
                }), this) : "object" === p ? (o instanceof c ? g(u, function (t, e) {
                    o[e.cache] && (d[e.cache] = o[e.cache].slice())
                }) : g(u, function (e, i) {
                    var n = i.cache;
                    g(i.props, function (t, e) {
                        if (!d[n] && i.to) {
                            if ("alpha" === t || null == o[t]) return;
                            d[n] = i.to(d._rgba)
                        }
                        d[n][e.idx] = s(o[t], e, !0)
                    }), d[n] && 0 > t.inArray(null, d[n].slice(0, 3)) && (d[n][3] = 1, i.from && (d._rgba = i.from(d[n])))
                }), this) : i
            }, is: function (t) {
                var e = c(t), s = !0, n = this;
                return g(u, function (t, o) {
                    var a, r = e[o.cache];
                    return r && (a = n[o.cache] || o.to && o.to(n._rgba) || [], g(o.props, function (t, e) {
                        return null != r[e.idx] ? s = r[e.idx] === a[e.idx] : i
                    })), s
                }), s
            }, _space: function () {
                var t = [], e = this;
                return g(u, function (i, s) {
                    e[s.cache] && t.push(i)
                }), t.pop()
            }, transition: function (t, e) {
                var i = c(t), n = i._space(), o = u[n], a = 0 === this.alpha() ? c("transparent") : this,
                    r = a[o.cache] || o.to(a._rgba), l = r.slice();
                return i = i[o.cache], g(o.props, function (t, n) {
                    var o = n.idx, a = r[o], h = i[o], c = d[n.type] || {};
                    null !== h && (null === a ? l[o] = h : (c.mod && (h - a > c.mod / 2 ? a += c.mod : a - h > c.mod / 2 && (a -= c.mod)), l[o] = s((h - a) * e + a, n)))
                }), this[n](l)
            }, blend: function (t) {
                if (1 === this._rgba[3]) return this;
                var i = this._rgba.slice(), s = i.pop(), n = c(t)._rgba;
                return c(e.map(i, function (t, e) {
                    return (1 - s) * n[e] + s * t
                }))
            }, toRgbaString: function () {
                var t = "rgba(", i = e.map(this._rgba, function (t, e) {
                    return null == t ? e > 2 ? 1 : 0 : t
                });
                return 1 === i[3] && (i.pop(), t = "rgb("), t + i.join() + ")"
            }, toHslaString: function () {
                var t = "hsla(", i = e.map(this.hsla(), function (t, e) {
                    return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t
                });
                return 1 === i[3] && (i.pop(), t = "hsl("), t + i.join() + ")"
            }, toHexString: function (t) {
                var i = this._rgba.slice(), s = i.pop();
                return t && i.push(~~(255 * s)), "#" + e.map(i, function (t) {
                    return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t
                }).join("")
            }, toString: function () {
                return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
            }
        }), c.fn.parse.prototype = c.fn, u.hsla.to = function (t) {
            if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
            var e, i, s = t[0] / 255, n = t[1] / 255, o = t[2] / 255, a = t[3], r = Math.max(s, n, o),
                l = Math.min(s, n, o), h = r - l, c = r + l, u = .5 * c;
            return e = l === r ? 0 : s === r ? 60 * (n - o) / h + 360 : n === r ? 60 * (o - s) / h + 120 : 60 * (s - n) / h + 240, i = 0 === u || 1 === u ? u : .5 >= u ? h / c : h / (2 - c), [Math.round(e) % 360, i, u, null == a ? 1 : a]
        }, u.hsla.from = function (t) {
            if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
            var e = t[0] / 360, i = t[1], s = t[2], n = t[3], a = .5 >= s ? s * (1 + i) : s + i - s * i, r = 2 * s - a;
            return [Math.round(255 * o(r, a, e + 1 / 3)), Math.round(255 * o(r, a, e)), Math.round(255 * o(r, a, e - 1 / 3)), n]
        }, g(u, function (t, n) {
            var o = n.props, a = n.cache, r = n.to, h = n.from;
            c.fn[t] = function (t) {
                if (r && !this[a] && (this[a] = r(this._rgba)), t === i) return this[a].slice();
                var n, l = e.type(t), u = "array" === l || "object" === l ? t : arguments, d = this[a].slice();
                return g(o, function (t, e) {
                    var i = u["object" === l ? t : e.idx];
                    null == i && (i = d[e.idx]), d[e.idx] = s(i, e)
                }), h ? (n = c(h(d)), n[a] = d, n) : c(d)
            }, g(o, function (i, s) {
                c.fn[i] || (c.fn[i] = function (n) {
                    var o, a = e.type(n), r = "alpha" === i ? this._hsla ? "hsla" : "rgba" : t, h = this[r](),
                        c = h[s.idx];
                    return "undefined" === a ? c : ("function" === a && (n = n.call(this, c), a = e.type(n)), null == n && s.empty ? this : ("string" === a && (o = l.exec(n), o && (n = c + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))), h[s.idx] = n, this[r](h)))
                })
            })
        }), g(r, function (t, i) {
            e.cssHooks[i] = {
                set: function (t, s) {
                    var o, a, r = "";
                    if ("string" !== e.type(s) || (o = n(s))) {
                        if (s = c(o || s), !p.rgba && 1 !== s._rgba[3]) {
                            for (a = "backgroundColor" === i ? t.parentNode : t; ("" === r || "transparent" === r) && a && a.style;) try {
                                r = e.css(a, "backgroundColor"), a = a.parentNode
                            } catch (l) {
                            }
                            s = s.blend(r && "transparent" !== r ? r : "_default")
                        }
                        s = s.toRgbaString()
                    }
                    try {
                        t.style[i] = s
                    } catch (h) {
                    }
                }
            }, e.fx.step[i] = function (t) {
                t.colorInit || (t.start = c(t.elem, i), t.end = c(t.end), t.colorInit = !0), e.cssHooks[i].set(t.elem, t.start.transition(t.end, t.pos))
            }
        }), e.cssHooks.borderColor = {
            expand: function (t) {
                var e = {};
                return g(["Top", "Right", "Bottom", "Left"], function (i, s) {
                    e["border" + s + "Color"] = t
                }), e
            }
        }, a = e.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff"
        }
    }(jQuery), function () {
        function i() {
            var e, i,
                s = this.ownerDocument.defaultView ? this.ownerDocument.defaultView.getComputedStyle(this, null) : this.currentStyle,
                n = {};
            if (s && s.length && s[0] && s[s[0]]) for (i = s.length; i--;) e = s[i], "string" == typeof s[e] && (n[t.camelCase(e)] = s[e]); else for (e in s) "string" == typeof s[e] && (n[e] = s[e]);
            return n
        }

        function s(e, i) {
            var s, n, a = {};
            for (s in i) n = i[s], e[s] !== n && (o[s] || (t.fx.step[s] || !isNaN(parseFloat(n))) && (a[s] = n));
            return a
        }

        var n = ["add", "remove", "toggle"], o = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
        t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (e, i) {
            t.fx.step[i] = function (t) {
                ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (jQuery.style(t.elem, i, t.end), t.setAttr = !0)
            }
        }), t.effects.animateClass = function (e, o, a, r) {
            var l = t.speed(o, a, r);
            return this.queue(function () {
                var o, a = t(this), r = a.attr("class") || "", h = l.children ? a.find("*").andSelf() : a;
                h = h.map(function () {
                    var e = t(this);
                    return {el: e, start: i.call(this)}
                }), o = function () {
                    t.each(n, function (t, i) {
                        e[i] && a[i + "Class"](e[i])
                    })
                }, o(), h = h.map(function () {
                    return this.end = i.call(this.el[0]), this.diff = s(this.start, this.end), this
                }), a.attr("class", r), h = h.map(function () {
                    var e = this, i = t.Deferred(), s = jQuery.extend({}, l, {
                        queue: !1, complete: function () {
                            i.resolve(e)
                        }
                    });
                    return this.el.animate(this.diff, s), i.promise()
                }), t.when.apply(t, h.get()).done(function () {
                    o(), t.each(arguments, function () {
                        var e = this.el;
                        t.each(this.diff, function (t) {
                            e.css(t, "")
                        })
                    }), l.complete.call(a[0])
                })
            })
        }, t.fn.extend({
            _addClass: t.fn.addClass, addClass: function (e, i, s, n) {
                return i ? t.effects.animateClass.call(this, {add: e}, i, s, n) : this._addClass(e)
            }, _removeClass: t.fn.removeClass, removeClass: function (e, i, s, n) {
                return i ? t.effects.animateClass.call(this, {remove: e}, i, s, n) : this._removeClass(e)
            }, _toggleClass: t.fn.toggleClass, toggleClass: function (i, s, n, o, a) {
                return "boolean" == typeof s || s === e ? n ? t.effects.animateClass.call(this, s ? {add: i} : {remove: i}, n, o, a) : this._toggleClass(i, s) : t.effects.animateClass.call(this, {toggle: i}, s, n, o)
            }, switchClass: function (e, i, s, n, o) {
                return t.effects.animateClass.call(this, {add: i, remove: e}, s, n, o)
            }
        })
    }(), function () {
        function n(e, i, s, n) {
            return t.isPlainObject(e) && (i = e, e = e.effect), e = {effect: e}, null == i && (i = {}), t.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (n = s, s = i, i = {}), t.isFunction(s) && (n = s, s = null), i && t.extend(e, i), s = s || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default, e.complete = n || i.complete, e
        }

        function o(e) {
            return !e || "number" == typeof e || t.fx.speeds[e] ? !0 : "string" != typeof e || t.effects.effect[e] ? !1 : i && t.effects[e] ? !1 : !0
        }

        t.extend(t.effects, {
            version: "1.9.2", save: function (t, e) {
                for (var i = 0; e.length > i; i++) null !== e[i] && t.data(s + e[i], t[0].style[e[i]])
            }, restore: function (t, i) {
                var n, o;
                for (o = 0; i.length > o; o++) null !== i[o] && (n = t.data(s + i[o]), n === e && (n = ""), t.css(i[o], n))
            }, setMode: function (t, e) {
                return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
            }, getBaseline: function (t, e) {
                var i, s;
                switch (t[0]) {
                    case"top":
                        i = 0;
                        break;
                    case"middle":
                        i = .5;
                        break;
                    case"bottom":
                        i = 1;
                        break;
                    default:
                        i = t[0] / e.height
                }
                switch (t[1]) {
                    case"left":
                        s = 0;
                        break;
                    case"center":
                        s = .5;
                        break;
                    case"right":
                        s = 1;
                        break;
                    default:
                        s = t[1] / e.width
                }
                return {x: s, y: i}
            }, createWrapper: function (e) {
                if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                var i = {width: e.outerWidth(!0), height: e.outerHeight(!0), "float": e.css("float")},
                    s = t("<div></div>").addClass("ui-effects-wrapper").css({
                        fontSize: "100%",
                        background: "transparent",
                        border: "none",
                        margin: 0,
                        padding: 0
                    }), n = {width: e.width(), height: e.height()}, o = document.activeElement;
                try {
                    o.id
                } catch (a) {
                    o = document.body
                }
                return e.wrap(s), (e[0] === o || t.contains(e[0], o)) && t(o).focus(), s = e.parent(), "static" === e.css("position") ? (s.css({position: "relative"}), e.css({position: "relative"})) : (t.extend(i, {
                    position: e.css("position"),
                    zIndex: e.css("z-index")
                }), t.each(["top", "left", "bottom", "right"], function (t, s) {
                    i[s] = e.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto")
                }), e.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })), e.css(n), s.css(i).show()
            }, removeWrapper: function (e) {
                var i = document.activeElement;
                return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).focus()), e
            }, setTransition: function (e, i, s, n) {
                return n = n || {}, t.each(i, function (t, i) {
                    var o = e.cssUnit(i);
                    o[0] > 0 && (n[i] = o[0] * s + o[1])
                }), n
            }
        }), t.fn.extend({
            effect: function () {
                function e(e) {
                    function i() {
                        t.isFunction(o) && o.call(n[0]), t.isFunction(e) && e()
                    }

                    var n = t(this), o = s.complete, a = s.mode;
                    (n.is(":hidden") ? "hide" === a : "show" === a) ? i() : r.call(n[0], s, i)
                }

                var s = n.apply(this, arguments), o = s.mode, a = s.queue, r = t.effects.effect[s.effect],
                    l = !r && i && t.effects[s.effect];
                return t.fx.off || !r && !l ? o ? this[o](s.duration, s.complete) : this.each(function () {
                    s.complete && s.complete.call(this)
                }) : r ? a === !1 ? this.each(e) : this.queue(a || "fx", e) : l.call(this, {
                    options: s,
                    duration: s.duration,
                    callback: s.complete,
                    mode: s.mode
                })
            }, _show: t.fn.show, show: function (t) {
                if (o(t)) return this._show.apply(this, arguments);
                var e = n.apply(this, arguments);
                return e.mode = "show", this.effect.call(this, e)
            }, _hide: t.fn.hide, hide: function (t) {
                if (o(t)) return this._hide.apply(this, arguments);
                var e = n.apply(this, arguments);
                return e.mode = "hide", this.effect.call(this, e)
            }, __toggle: t.fn.toggle, toggle: function (e) {
                if (o(e) || "boolean" == typeof e || t.isFunction(e)) return this.__toggle.apply(this, arguments);
                var i = n.apply(this, arguments);
                return i.mode = "toggle", this.effect.call(this, i)
            }, cssUnit: function (e) {
                var i = this.css(e), s = [];
                return t.each(["em", "px", "%", "pt"], function (t, e) {
                    i.indexOf(e) > 0 && (s = [parseFloat(i), e])
                }), s
            }
        })
    }(), function () {
        var e = {};
        t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (t, i) {
            e[i] = function (e) {
                return Math.pow(e, t + 2)
            }
        }), t.extend(e, {
            Sine: function (t) {
                return 1 - Math.cos(t * Math.PI / 2)
            }, Circ: function (t) {
                return 1 - Math.sqrt(1 - t * t)
            }, Elastic: function (t) {
                return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
            }, Back: function (t) {
                return t * t * (3 * t - 2)
            }, Bounce: function (t) {
                for (var e, i = 4; ((e = Math.pow(2, --i)) - 1) / 11 > t;) ;
                return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
            }
        }), t.each(e, function (e, i) {
            t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function (t) {
                return 1 - i(1 - t)
            }, t.easing["easeInOut" + e] = function (t) {
                return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
            }
        })
    }()
}(jQuery);
(function (t) {
    var e = /up|down|vertical/, i = /up|left|vertical|horizontal/;
    t.effects.effect.blind = function (s, n) {
        var o, a, r, l = t(this), h = ["position", "top", "bottom", "left", "right", "height", "width"],
            c = t.effects.setMode(l, s.mode || "hide"), u = s.direction || "up", d = e.test(u),
            p = d ? "height" : "width", f = d ? "top" : "left", g = i.test(u), m = {}, _ = "show" === c;
        l.parent().is(".ui-effects-wrapper") ? t.effects.save(l.parent(), h) : t.effects.save(l, h), l.show(), o = t.effects.createWrapper(l).css({overflow: "hidden"}), a = o[p](), r = parseFloat(o.css(f)) || 0, m[p] = _ ? a : 0, g || (l.css(d ? "bottom" : "right", 0).css(d ? "top" : "left", "auto").css({position: "absolute"}), m[f] = _ ? r : a + r), _ && (o.css(p, 0), g || o.css(f, r + a)), o.animate(m, {
            duration: s.duration,
            easing: s.easing,
            queue: !1,
            complete: function () {
                "hide" === c && l.hide(), t.effects.restore(l, h), t.effects.removeWrapper(l), n()
            }
        })
    }
})(jQuery);
(function (t) {
    t.effects.effect.bounce = function (e, i) {
        var s, n, o, a = t(this), r = ["position", "top", "bottom", "left", "right", "height", "width"],
            l = t.effects.setMode(a, e.mode || "effect"), h = "hide" === l, c = "show" === l, u = e.direction || "up",
            d = e.distance, p = e.times || 5, f = 2 * p + (c || h ? 1 : 0), g = e.duration / f, m = e.easing,
            _ = "up" === u || "down" === u ? "top" : "left", v = "up" === u || "left" === u, b = a.queue(),
            y = b.length;
        for ((c || h) && r.push("opacity"), t.effects.save(a, r), a.show(), t.effects.createWrapper(a), d || (d = a["top" === _ ? "outerHeight" : "outerWidth"]() / 3), c && (o = {opacity: 1}, o[_] = 0, a.css("opacity", 0).css(_, v ? 2 * -d : 2 * d).animate(o, g, m)), h && (d /= Math.pow(2, p - 1)), o = {}, o[_] = 0, s = 0; p > s; s++) n = {}, n[_] = (v ? "-=" : "+=") + d, a.animate(n, g, m).animate(o, g, m), d = h ? 2 * d : d / 2;
        h && (n = {opacity: 0}, n[_] = (v ? "-=" : "+=") + d, a.animate(n, g, m)), a.queue(function () {
            h && a.hide(), t.effects.restore(a, r), t.effects.removeWrapper(a), i()
        }), y > 1 && b.splice.apply(b, [1, 0].concat(b.splice(y, f + 1))), a.dequeue()
    }
})(jQuery);
(function (t) {
    t.effects.effect.clip = function (e, i) {
        var s, n, o, a = t(this), r = ["position", "top", "bottom", "left", "right", "height", "width"],
            l = t.effects.setMode(a, e.mode || "hide"), h = "show" === l, c = e.direction || "vertical",
            u = "vertical" === c, d = u ? "height" : "width", p = u ? "top" : "left", f = {};
        t.effects.save(a, r), a.show(), s = t.effects.createWrapper(a).css({overflow: "hidden"}), n = "IMG" === a[0].tagName ? s : a, o = n[d](), h && (n.css(d, 0), n.css(p, o / 2)), f[d] = h ? o : 0, f[p] = h ? 0 : o / 2, n.animate(f, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function () {
                h || a.hide(), t.effects.restore(a, r), t.effects.removeWrapper(a), i()
            }
        })
    }
})(jQuery);
(function (t) {
    t.effects.effect.drop = function (e, i) {
        var s, n = t(this), o = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
            a = t.effects.setMode(n, e.mode || "hide"), r = "show" === a, l = e.direction || "left",
            h = "up" === l || "down" === l ? "top" : "left", c = "up" === l || "left" === l ? "pos" : "neg",
            u = {opacity: r ? 1 : 0};
        t.effects.save(n, o), n.show(), t.effects.createWrapper(n), s = e.distance || n["top" === h ? "outerHeight" : "outerWidth"](!0) / 2, r && n.css("opacity", 0).css(h, "pos" === c ? -s : s), u[h] = (r ? "pos" === c ? "+=" : "-=" : "pos" === c ? "-=" : "+=") + s, n.animate(u, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function () {
                "hide" === a && n.hide(), t.effects.restore(n, o), t.effects.removeWrapper(n), i()
            }
        })
    }
})(jQuery);
(function (t) {
    t.effects.effect.explode = function (e, i) {
        function s() {
            b.push(this), b.length === u * d && n()
        }

        function n() {
            p.css({visibility: "visible"}), t(b).remove(), g || p.hide(), i()
        }

        var o, a, r, l, h, c, u = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3, d = u, p = t(this),
            f = t.effects.setMode(p, e.mode || "hide"), g = "show" === f,
            m = p.show().css("visibility", "hidden").offset(), _ = Math.ceil(p.outerWidth() / d),
            v = Math.ceil(p.outerHeight() / u), b = [];
        for (o = 0; u > o; o++) for (l = m.top + o * v, c = o - (u - 1) / 2, a = 0; d > a; a++) r = m.left + a * _, h = a - (d - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({
            position: "absolute",
            visibility: "visible",
            left: -a * _,
            top: -o * v
        }).parent().addClass("ui-effects-explode").css({
            position: "absolute",
            overflow: "hidden",
            width: _,
            height: v,
            left: r + (g ? h * _ : 0),
            top: l + (g ? c * v : 0),
            opacity: g ? 0 : 1
        }).animate({
            left: r + (g ? 0 : h * _),
            top: l + (g ? 0 : c * v),
            opacity: g ? 1 : 0
        }, e.duration || 500, e.easing, s)
    }
})(jQuery);
(function (t) {
    t.effects.effect.fade = function (e, i) {
        var s = t(this), n = t.effects.setMode(s, e.mode || "toggle");
        s.animate({opacity: n}, {queue: !1, duration: e.duration, easing: e.easing, complete: i})
    }
})(jQuery);
(function (t) {
    t.effects.effect.fold = function (e, i) {
        var s, n, o = t(this), a = ["position", "top", "bottom", "left", "right", "height", "width"],
            r = t.effects.setMode(o, e.mode || "hide"), l = "show" === r, h = "hide" === r, c = e.size || 15,
            u = /([0-9]+)%/.exec(c), d = !!e.horizFirst, p = l !== d, f = p ? ["width", "height"] : ["height", "width"],
            g = e.duration / 2, m = {}, _ = {};
        t.effects.save(o, a), o.show(), s = t.effects.createWrapper(o).css({overflow: "hidden"}), n = p ? [s.width(), s.height()] : [s.height(), s.width()], u && (c = parseInt(u[1], 10) / 100 * n[h ? 0 : 1]), l && s.css(d ? {
            height: 0,
            width: c
        } : {
            height: c,
            width: 0
        }), m[f[0]] = l ? n[0] : c, _[f[1]] = l ? n[1] : 0, s.animate(m, g, e.easing).animate(_, g, e.easing, function () {
            h && o.hide(), t.effects.restore(o, a), t.effects.removeWrapper(o), i()
        })
    }
})(jQuery);
(function (t) {
    t.effects.effect.highlight = function (e, i) {
        var s = t(this), n = ["backgroundImage", "backgroundColor", "opacity"],
            o = t.effects.setMode(s, e.mode || "show"), a = {backgroundColor: s.css("backgroundColor")};
        "hide" === o && (a.opacity = 0), t.effects.save(s, n), s.show().css({
            backgroundImage: "none",
            backgroundColor: e.color || "#ffff99"
        }).animate(a, {
            queue: !1, duration: e.duration, easing: e.easing, complete: function () {
                "hide" === o && s.hide(), t.effects.restore(s, n), i()
            }
        })
    }
})(jQuery);
(function (t) {
    t.effects.effect.pulsate = function (e, i) {
        var s, n = t(this), o = t.effects.setMode(n, e.mode || "show"), a = "show" === o, r = "hide" === o,
            l = a || "hide" === o, h = 2 * (e.times || 5) + (l ? 1 : 0), c = e.duration / h, u = 0, d = n.queue(),
            p = d.length;
        for ((a || !n.is(":visible")) && (n.css("opacity", 0).show(), u = 1), s = 1; h > s; s++) n.animate({opacity: u}, c, e.easing), u = 1 - u;
        n.animate({opacity: u}, c, e.easing), n.queue(function () {
            r && n.hide(), i()
        }), p > 1 && d.splice.apply(d, [1, 0].concat(d.splice(p, h + 1))), n.dequeue()
    }
})(jQuery);
(function (t) {
    t.effects.effect.puff = function (e, i) {
        var s = t(this), n = t.effects.setMode(s, e.mode || "hide"), o = "hide" === n,
            a = parseInt(e.percent, 10) || 150, r = a / 100,
            l = {height: s.height(), width: s.width(), outerHeight: s.outerHeight(), outerWidth: s.outerWidth()};
        t.extend(e, {
            effect: "scale",
            queue: !1,
            fade: !0,
            mode: n,
            complete: i,
            percent: o ? a : 100,
            from: o ? l : {
                height: l.height * r,
                width: l.width * r,
                outerHeight: l.outerHeight * r,
                outerWidth: l.outerWidth * r
            }
        }), s.effect(e)
    }, t.effects.effect.scale = function (e, i) {
        var s = t(this), n = t.extend(!0, {}, e), o = t.effects.setMode(s, e.mode || "effect"),
            a = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "hide" === o ? 0 : 100),
            r = e.direction || "both", l = e.origin,
            h = {height: s.height(), width: s.width(), outerHeight: s.outerHeight(), outerWidth: s.outerWidth()},
            c = {y: "horizontal" !== r ? a / 100 : 1, x: "vertical" !== r ? a / 100 : 1};
        n.effect = "size", n.queue = !1, n.complete = i, "effect" !== o && (n.origin = l || ["middle", "center"], n.restore = !0), n.from = e.from || ("show" === o ? {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
        } : h), n.to = {
            height: h.height * c.y,
            width: h.width * c.x,
            outerHeight: h.outerHeight * c.y,
            outerWidth: h.outerWidth * c.x
        }, n.fade && ("show" === o && (n.from.opacity = 0, n.to.opacity = 1), "hide" === o && (n.from.opacity = 1, n.to.opacity = 0)), s.effect(n)
    }, t.effects.effect.size = function (e, i) {
        var s, n, o, a = t(this),
            r = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
            l = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
            h = ["width", "height", "overflow"], c = ["fontSize"],
            u = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
            d = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
            p = t.effects.setMode(a, e.mode || "effect"), f = e.restore || "effect" !== p, g = e.scale || "both",
            m = e.origin || ["middle", "center"], v = a.css("position"), _ = f ? r : l,
            b = {height: 0, width: 0, outerHeight: 0, outerWidth: 0};
        "show" === p && a.show(), s = {
            height: a.height(),
            width: a.width(),
            outerHeight: a.outerHeight(),
            outerWidth: a.outerWidth()
        }, "toggle" === e.mode && "show" === p ? (a.from = e.to || b, a.to = e.from || s) : (a.from = e.from || ("show" === p ? b : s), a.to = e.to || ("hide" === p ? b : s)), o = {
            from: {
                y: a.from.height / s.height,
                x: a.from.width / s.width
            }, to: {y: a.to.height / s.height, x: a.to.width / s.width}
        }, ("box" === g || "both" === g) && (o.from.y !== o.to.y && (_ = _.concat(u), a.from = t.effects.setTransition(a, u, o.from.y, a.from), a.to = t.effects.setTransition(a, u, o.to.y, a.to)), o.from.x !== o.to.x && (_ = _.concat(d), a.from = t.effects.setTransition(a, d, o.from.x, a.from), a.to = t.effects.setTransition(a, d, o.to.x, a.to))), ("content" === g || "both" === g) && o.from.y !== o.to.y && (_ = _.concat(c).concat(h), a.from = t.effects.setTransition(a, c, o.from.y, a.from), a.to = t.effects.setTransition(a, c, o.to.y, a.to)), t.effects.save(a, _), a.show(), t.effects.createWrapper(a), a.css("overflow", "hidden").css(a.from), m && (n = t.effects.getBaseline(m, s), a.from.top = (s.outerHeight - a.outerHeight()) * n.y, a.from.left = (s.outerWidth - a.outerWidth()) * n.x, a.to.top = (s.outerHeight - a.to.outerHeight) * n.y, a.to.left = (s.outerWidth - a.to.outerWidth) * n.x), a.css(a.from), ("content" === g || "both" === g) && (u = u.concat(["marginTop", "marginBottom"]).concat(c), d = d.concat(["marginLeft", "marginRight"]), h = r.concat(u).concat(d), a.find("*[width]").each(function () {
            var i = t(this),
                s = {height: i.height(), width: i.width(), outerHeight: i.outerHeight(), outerWidth: i.outerWidth()};
            f && t.effects.save(i, h), i.from = {
                height: s.height * o.from.y,
                width: s.width * o.from.x,
                outerHeight: s.outerHeight * o.from.y,
                outerWidth: s.outerWidth * o.from.x
            }, i.to = {
                height: s.height * o.to.y,
                width: s.width * o.to.x,
                outerHeight: s.height * o.to.y,
                outerWidth: s.width * o.to.x
            }, o.from.y !== o.to.y && (i.from = t.effects.setTransition(i, u, o.from.y, i.from), i.to = t.effects.setTransition(i, u, o.to.y, i.to)), o.from.x !== o.to.x && (i.from = t.effects.setTransition(i, d, o.from.x, i.from), i.to = t.effects.setTransition(i, d, o.to.x, i.to)), i.css(i.from), i.animate(i.to, e.duration, e.easing, function () {
                f && t.effects.restore(i, h)
            })
        })), a.animate(a.to, {
            queue: !1, duration: e.duration, easing: e.easing, complete: function () {
                0 === a.to.opacity && a.css("opacity", a.from.opacity), "hide" === p && a.hide(), t.effects.restore(a, _), f || ("static" === v ? a.css({
                    position: "relative",
                    top: a.to.top,
                    left: a.to.left
                }) : t.each(["top", "left"], function (t, e) {
                    a.css(e, function (e, i) {
                        var s = parseInt(i, 10), n = t ? a.to.left : a.to.top;
                        return "auto" === i ? n + "px" : s + n + "px"
                    })
                })), t.effects.removeWrapper(a), i()
            }
        })
    }
})(jQuery);
(function (t) {
    t.effects.effect.shake = function (e, i) {
        var s, n = t(this), o = ["position", "top", "bottom", "left", "right", "height", "width"],
            a = t.effects.setMode(n, e.mode || "effect"), r = e.direction || "left", l = e.distance || 20,
            h = e.times || 3, c = 2 * h + 1, u = Math.round(e.duration / c),
            d = "up" === r || "down" === r ? "top" : "left", p = "up" === r || "left" === r, f = {}, g = {}, m = {},
            v = n.queue(), _ = v.length;
        for (t.effects.save(n, o), n.show(), t.effects.createWrapper(n), f[d] = (p ? "-=" : "+=") + l, g[d] = (p ? "+=" : "-=") + 2 * l, m[d] = (p ? "-=" : "+=") + 2 * l, n.animate(f, u, e.easing), s = 1; h > s; s++) n.animate(g, u, e.easing).animate(m, u, e.easing);
        n.animate(g, u, e.easing).animate(f, u / 2, e.easing).queue(function () {
            "hide" === a && n.hide(), t.effects.restore(n, o), t.effects.removeWrapper(n), i()
        }), _ > 1 && v.splice.apply(v, [1, 0].concat(v.splice(_, c + 1))), n.dequeue()
    }
})(jQuery);
(function (t) {
    t.effects.effect.slide = function (e, i) {
        var s, n = t(this), o = ["position", "top", "bottom", "left", "right", "width", "height"],
            a = t.effects.setMode(n, e.mode || "show"), r = "show" === a, l = e.direction || "left",
            h = "up" === l || "down" === l ? "top" : "left", c = "up" === l || "left" === l, u = {};
        t.effects.save(n, o), n.show(), s = e.distance || n["top" === h ? "outerHeight" : "outerWidth"](!0), t.effects.createWrapper(n).css({overflow: "hidden"}), r && n.css(h, c ? isNaN(s) ? "-" + s : -s : s), u[h] = (r ? c ? "+=" : "-=" : c ? "-=" : "+=") + s, n.animate(u, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function () {
                "hide" === a && n.hide(), t.effects.restore(n, o), t.effects.removeWrapper(n), i()
            }
        })
    }
})(jQuery);
(function (t) {
    t.effects.effect.transfer = function (e, i) {
        var s = t(this), n = t(e.to), o = "fixed" === n.css("position"), a = t("body"), r = o ? a.scrollTop() : 0,
            l = o ? a.scrollLeft() : 0, h = n.offset(),
            c = {top: h.top - r, left: h.left - l, height: n.innerHeight(), width: n.innerWidth()}, u = s.offset(),
            d = t('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(e.className).css({
                top: u.top - r,
                left: u.left - l,
                height: s.innerHeight(),
                width: s.innerWidth(),
                position: o ? "fixed" : "absolute"
            }).animate(c, e.duration, e.easing, function () {
                d.remove(), i()
            })
    }
})(jQuery);