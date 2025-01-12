import { withScopeId as It, pushScopeId as Lt, popScopeId as Bt, withDirectives as oe, openBlock as h, createBlock as V, withKeys as jt, createVNode as ge, Transition as ct, mergeProps as Be, createCommentVNode as G, withModifiers as je, renderSlot as Pt, Fragment as re, renderList as $, vShow as vt, shallowReactive as mt, ref as c, reactive as Vt, computed as W, watch as Y, onMounted as zt, onBeforeUnmount as Rt, nextTick as he, resolveDynamicComponent as yt, toHandlers as gt, createSlots as Ft, withCtx as _t, createElementBlock as T, createElementVNode as w, vModelText as pe, toDisplayString as Ie, onUnmounted as Nt, resolveComponent as ht, normalizeClass as Ut, normalizeStyle as ye, createTextVNode as Yt } from "vue";
function be(a) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? be = function(e) {
    return typeof e;
  } : be = function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, be(a);
}
function pt(a, e, n, t, i, d, s) {
  try {
    var y = a[d](s), l = y.value;
  } catch (v) {
    n(v);
    return;
  }
  y.done ? e(l) : Promise.resolve(l).then(t, i);
}
function Ht(a) {
  return function() {
    var e = this, n = arguments;
    return new Promise(function(t, i) {
      var d = a.apply(e, n);
      function s(l) {
        pt(d, t, i, s, y, "next", l);
      }
      function y(l) {
        pt(d, t, i, s, y, "throw", l);
      }
      s(void 0);
    });
  };
}
function Xt(a, e) {
  if (!(a instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function bt(a, e) {
  for (var n = 0; n < e.length; n++) {
    var t = e[n];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(a, t.key, t);
  }
}
function Kt(a, e, n) {
  return e && bt(a.prototype, e), n && bt(a, n), a;
}
function fe(a, e, n) {
  return e in a ? Object.defineProperty(a, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : a[e] = n, a;
}
function wt(a, e) {
  var n = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(a);
    e && (t = t.filter(function(i) {
      return Object.getOwnPropertyDescriptor(a, i).enumerable;
    })), n.push.apply(n, t);
  }
  return n;
}
function C(a) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? wt(Object(n), !0).forEach(function(t) {
      fe(a, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(n)) : wt(Object(n)).forEach(function(t) {
      Object.defineProperty(a, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return a;
}
function le(a) {
  return qt(a) || Wt(a) || Gt(a) || Zt();
}
function qt(a) {
  if (Array.isArray(a))
    return ut(a);
}
function Wt(a) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(a))
    return Array.from(a);
}
function Gt(a, e) {
  if (a) {
    if (typeof a == "string")
      return ut(a, e);
    var n = Object.prototype.toString.call(a).slice(8, -1);
    if (n === "Object" && a.constructor && (n = a.constructor.name), n === "Map" || n === "Set")
      return Array.from(a);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return ut(a, e);
  }
}
function ut(a, e) {
  (e == null || e > a.length) && (e = a.length);
  for (var n = 0, t = new Array(e); n < e; n++)
    t[n] = a[n];
  return t;
}
function Zt() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Qt = 'button:not([disabled]), select:not([disabled]), a[href]:not([disabled]), area[href]:not([disabled]), [contentEditable=""]:not([disabled]), [contentEditable="true"]:not([disabled]), [contentEditable="TRUE"]:not([disabled]), textarea:not([disabled]), iframe:not([disabled]), input:not([disabled]), summary:not([disabled]), [tabindex]:not([tabindex="-1"])', Jt = function(e) {
  return e.key === "Tab" || e.keyCode === 9;
}, $t = function(e, n) {
  return le(e.querySelectorAll(n) || []);
}, en = function(e) {
  return $t(e, Qt);
}, xt = function(e) {
  return e == document.activeElement;
}, tn = function() {
  return !document.activeElement;
}, nn = /* @__PURE__ */ function() {
  function a() {
    Xt(this, a), this.root = null, this.elements = [], this.onKeyDown = this.onKeyDown.bind(this), this.enable = this.enable.bind(this), this.disable = this.disable.bind(this), this.firstElement = this.firstElement.bind(this), this.lastElement = this.lastElement.bind(this);
  }
  return Kt(a, [{
    key: "lastElement",
    value: function() {
      return this.elements[this.elements.length - 1] || null;
    }
  }, {
    key: "firstElement",
    value: function() {
      return this.elements[0] || null;
    }
  }, {
    key: "onKeyDown",
    value: function(n) {
      if (Jt(n)) {
        if (n.shiftKey) {
          xt(this.firstElement()) && (this.lastElement().focus(), n.preventDefault());
          return;
        }
        if (tn() || xt(this.lastElement())) {
          this.firstElement().focus(), n.preventDefault();
          return;
        }
      }
    }
  }, {
    key: "enabled",
    value: function() {
      return !!this.root;
    }
  }, {
    key: "enable",
    value: function(n) {
      n && (this.root = n, this.elements = en(this.root), this.root.addEventListener("keydown", this.onKeyDown));
    }
  }, {
    key: "disable",
    value: function() {
      this.root.removeEventListener("keydown", this.onKeyDown), this.root = null;
    }
  }]), a;
}(), an = function(e, n, t) {
  var i = e.style[n];
  return e.style[n] = t, function() {
    e.style[n] = i;
  };
}, Et = function(e) {
  var n = e.targetTouches ? e.targetTouches[0] : e, t = n.clientX, i = n.clientY;
  return {
    x: t,
    y: i
  };
}, on = function(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Me = function(e, n, t) {
  return typeof e != "number" && (e = Math.min(n, t) || n), typeof t != "number" && (t = Math.max(n, e)), Math.min(Math.max(n, e), t);
}, St = function(e) {
  return e && Number(e.replace(/px$/, "")) || 0;
}, rn = function(e, n, t) {
  if (t === "")
    return !0;
  var i = le(n.querySelectorAll(t));
  return i.includes(e.target);
}, Pe = {
  down: {
    pc: "mousedown",
    m: "touchstart"
  },
  move: {
    pc: "mousemove",
    m: "touchmove"
  },
  up: {
    pc: "mouseup",
    m: "touchend"
  }
}, De = function(e, n, t) {
  n && n.addEventListener(Pe[e].pc, t), n && n.addEventListener(Pe[e].m, t, {
    passive: !1
  });
}, ke = function(e, n, t) {
  n && n.removeEventListener(Pe[e].pc, t), n && n.removeEventListener(Pe[e].m, t);
}, st = !1;
if (typeof window < "u") {
  var Tt = {
    get passive() {
      st = !0;
    }
  };
  window.addEventListener("testPassive", null, Tt), window.removeEventListener("testPassive", null, Tt);
}
var Ot = typeof window < "u" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1), ee = [], Ve = !1, Le = 0, Ct = -1, we, xe, ln = function(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  var n = window.getComputedStyle(e);
  return ["auto", "scroll"].includes(n.overflowY) && e.scrollHeight > e.clientHeight;
}, un = function(e, n) {
  return !(e.scrollTop === 0 && n < 0 || e.scrollTop + e.clientHeight + n >= e.scrollHeight && n > 0);
}, sn = function(e) {
  for (var n = []; e; ) {
    if (n.push(e), e.classList.contains("vfm"))
      return n;
    e = e.parentElement;
  }
  return n;
}, fn = function(e, n) {
  var t = !1, i = sn(e);
  return i.forEach(function(d) {
    ln(d) && un(d, n) && (t = !0);
  }), t;
}, Mt = function(e) {
  return ee.some(function() {
    return fn(e, -Le);
  });
}, Re = function(e) {
  var n = e || window.event;
  return Mt(n.target) || n.touches.length > 1 ? !0 : (n.preventDefault && n.preventDefault(), !1);
}, dn = function(e) {
  if (xe === void 0) {
    var n = !!e && e.reserveScrollBarGap === !0, t = window.innerWidth - document.documentElement.clientWidth;
    if (n && t > 0) {
      var i = parseInt(getComputedStyle(document.body).getPropertyValue("padding-right"), 10);
      xe = document.body.style.paddingRight, document.body.style.paddingRight = "".concat(i + t, "px");
    }
  }
  we === void 0 && (we = document.body.style.overflow, document.body.style.overflow = "hidden");
}, cn = function() {
  xe !== void 0 && (document.body.style.paddingRight = xe, xe = void 0), we !== void 0 && (document.body.style.overflow = we, we = void 0);
}, vn = function(e) {
  return e ? e.scrollHeight - e.scrollTop <= e.clientHeight : !1;
}, mn = function(e, n) {
  return Le = e.targetTouches[0].clientY - Ct, Mt(e.target) ? !1 : n && n.scrollTop === 0 && Le > 0 || vn(n) && Le < 0 ? Re(e) : (e.stopPropagation(), !0);
}, yn = function(e, n) {
  if (!e) {
    console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
    return;
  }
  if (!ee.some(function(i) {
    return i.targetElement === e;
  })) {
    var t = {
      targetElement: e,
      options: n || {}
    };
    ee = [].concat(le(ee), [t]), Ot ? (e.ontouchstart = function(i) {
      i.targetTouches.length === 1 && (Ct = i.targetTouches[0].clientY);
    }, e.ontouchmove = function(i) {
      i.targetTouches.length === 1 && mn(i, e);
    }, Ve || (document.addEventListener("touchmove", Re, st ? {
      passive: !1
    } : void 0), Ve = !0)) : dn(n);
  }
}, lt = function(e) {
  if (!e) {
    console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");
    return;
  }
  ee = ee.filter(function(n) {
    return n.targetElement !== e;
  }), Ot ? (e.ontouchstart = null, e.ontouchmove = null, Ve && ee.length === 0 && (document.removeEventListener("touchmove", Re, st ? {
    passive: !1
  } : void 0), Ve = !1)) : ee.length || cn();
}, Ae = function() {
}, U = {
  Enter: "enter",
  Entering: "entering",
  Leave: "leave",
  Leaving: "leavng"
}, gn = {
  t: "ns-resize",
  tr: "nesw-resize",
  r: "ew-resize",
  br: "nwse-resize",
  b: "ns-resize",
  bl: "nesw-resize",
  l: "ew-resize",
  tl: "nwse-resize"
}, Fe = {
  props: {
    name: {
      type: String,
      default: null
    },
    modelValue: {
      type: Boolean,
      default: !1
    },
    ssr: {
      type: Boolean,
      default: !0
    },
    classes: {
      type: [String, Object, Array],
      default: ""
    },
    overlayClass: {
      type: [String, Object, Array],
      default: ""
    },
    contentClass: {
      type: [String, Object, Array],
      default: ""
    },
    styles: {
      type: [Object, Array],
      default: function() {
        return {};
      }
    },
    overlayStyle: {
      type: [Object, Array],
      default: function() {
        return {};
      }
    },
    contentStyle: {
      type: [Object, Array],
      default: function() {
        return {};
      }
    },
    lockScroll: {
      type: Boolean,
      default: !0
    },
    hideOverlay: {
      type: Boolean,
      default: !1
    },
    clickToClose: {
      type: Boolean,
      default: !0
    },
    escToClose: {
      type: Boolean,
      default: !1
    },
    preventClick: {
      type: Boolean,
      default: !1
    },
    attach: {
      type: null,
      default: !1,
      validator: function(e) {
        var n = be(e);
        return n === "boolean" || n === "string" ? !0 : e.nodeType === Node.ELEMENT_NODE;
      }
    },
    transition: {
      type: [String, Object],
      default: "vfm"
    },
    overlayTransition: {
      type: [String, Object],
      default: "vfm"
    },
    keepOverlay: {
      type: Boolean,
      default: !1
    },
    zIndexAuto: {
      type: Boolean,
      default: !0
    },
    zIndexBase: {
      type: [String, Number],
      default: 1e3
    },
    zIndex: {
      type: [Boolean, String, Number],
      default: !1
    },
    focusRetain: {
      type: Boolean,
      default: !0
    },
    focusTrap: {
      type: Boolean,
      default: !1
    },
    fitParent: {
      type: Boolean,
      default: !0
    },
    drag: {
      type: Boolean,
      default: !1
    },
    dragSelector: {
      type: String,
      default: ""
    },
    keepChangedStyle: {
      type: Boolean,
      default: !1
    },
    resize: {
      type: Boolean,
      default: !1
    },
    resizeDirections: {
      type: Array,
      default: function() {
        return ["t", "tr", "r", "br", "b", "bl", "l", "tl"];
      },
      validator: function(e) {
        return ["t", "tr", "r", "br", "b", "bl", "l", "tl"].filter(function(n) {
          return e.indexOf(n) !== -1;
        }).length === e.length;
      }
    },
    minWidth: {
      type: Number,
      default: 0
    },
    minHeight: {
      type: Number,
      default: 0
    },
    maxWidth: {
      type: Number,
      default: 1 / 0
    },
    maxHeight: {
      type: Number,
      default: 1 / 0
    }
  },
  emits: ["update:modelValue", "click-outside", "before-open", "opened", "before-close", "closed", "_before-open", "_opened", "_closed", "drag:start", "drag:move", "drag:end", "resize:start", "resize:move", "resize:end"],
  setup: function(e, n) {
    var t = n.emit, i = Symbol("vfm"), d = c(null), s = c(null), y = c(null), l = c(null), v = c(null), x = c(null), Z = c(null), Q = new nn(), R = c(!1), M = Vt({
      modal: !1,
      overlay: !1,
      resize: !1
    }), H = c(null), X = c(null), m = c(!1), g = c({}), A = c({}), _ = c(null), F = c(null), L = Ae, B = Ae, Ne = W(function() {
      return typeof e.overlayTransition == "string" ? {
        name: e.overlayTransition
      } : C({}, e.overlayTransition);
    }), Ue = W(function() {
      return typeof e.transition == "string" ? {
        name: e.transition
      } : C({}, e.transition);
    }), Ye = W(function() {
      return (e.hideOverlay || H.value === U.Leave) && X.value === U.Leave;
    }), de = W(function() {
      return e.zIndex === !1 ? e.zIndexAuto ? +e.zIndexBase + 2 * (Z.value || 0) : !1 : e.zIndex;
    }), He = W(function() {
      return C({}, de.value !== !1 && {
        zIndex: de.value
      });
    }), Xe = W(function() {
      var o = [A.value];
      return Array.isArray(e.contentStyle) ? o.push.apply(o, le(e.contentStyle)) : o.push(e.contentStyle), o;
    });
    Y(function() {
      return e.modelValue;
    }, function(o) {
      if (m.value) {
        m.value = !1;
        return;
      }
      if (ie(), !o) {
        if (Te("before-close", !0)) {
          B("hide");
          return;
        }
        Ee();
      }
    }), Y(function() {
      return e.lockScroll;
    }, ue), Y(function() {
      return e.hideOverlay;
    }, function(o) {
      e.modelValue && !o && (M.overlay = !0);
    }), Y(function() {
      return e.attach;
    }, ie), Y(Ye, function(o) {
      o && (R.value = !1, s.value.style.display = "none");
    }, {
      flush: "post"
    }), Y(function() {
      return e.drag;
    }, function(o) {
      R.value && (o ? ze() : _e());
    }), Y(function() {
      return e.resize;
    }, function(o) {
      R.value && (o ? ve() : Oe());
    }), Y(function() {
      return e.keepChangedStyle;
    }, function(o) {
      o || (A.value = {});
    }), zt(function() {
      e.api.modals.push(te()), ie();
    }), Rt(function() {
      var o;
      Ee(), e.lockScroll && s.value && lt(s.value), d == null || (o = d.value) === null || o === void 0 || o.remove();
      var u = e.api.modals.findIndex(function(f) {
        return f.uid === i;
      });
      e.api.modals.splice(u, 1);
    });
    function te() {
      return {
        uid: i,
        props: e,
        emit: t,
        vfmContainer: s,
        vfmContent: y,
        vfmResize: l,
        vfmOverlayTransition: v,
        vfmTransition: x,
        getAttachElement: Se,
        modalStackIndex: Z,
        visibility: M,
        handleLockScroll: ue,
        $focusTrap: Q,
        toggle: rt,
        params: g
      };
    }
    function ie() {
      if (e.modelValue) {
        if (t("_before-open", ne({
          type: "_before-open"
        })), Te("before-open", !1)) {
          B("show");
          return;
        }
        var o = Se();
        if (o || e.attach === !1) {
          if (e.attach !== !1)
            if (d.value)
              o.appendChild(d.value);
            else {
              R.value = !0, he(function() {
                ie();
              });
              return;
            }
          var u = e.api.openedModals.findIndex(function(f) {
            return f.uid === i;
          });
          u !== -1 && e.api.openedModals.splice(u, 1), e.api.openedModals.push(te()), Z.value = e.api.openedModals.length - 1, ue(), e.api.openedModals.filter(function(f) {
            return f.uid !== i;
          }).forEach(function(f, E) {
            f.getAttachElement() === o && (f.modalStackIndex.value = E, !f.props.keepOverlay && (f.visibility.overlay = !1));
          }), R.value = !0, Ke();
        } else
          o !== !1 && console.warn("Unable to locate target ".concat(e.attach));
      }
    }
    function Ee() {
      var o = e.api.openedModals.findIndex(function(f) {
        return f.uid === i;
      });
      if (o !== -1 && e.api.openedModals.splice(o, 1), e.api.openedModals.length > 0) {
        var u = e.api.openedModals[e.api.openedModals.length - 1];
        u.props.focusTrap && u.$focusTrap.firstElement().focus(), (u.props.focusRetain || u.props.focusTrap) && u.vfmContainer.value.focus(), !u.props.hideOverlay && (u.visibility.overlay = !0);
      }
      e.drag && _e(), e.resize && Oe(), _.value = null, qe();
    }
    function ue() {
      e.modelValue && he(function() {
        e.lockScroll ? yn(s.value, {
          reserveScrollBarGap: !0
        }) : lt(s.value);
      });
    }
    function Se() {
      var o;
      return e.attach === !1 ? o = !1 : typeof e.attach == "string" ? window ? o = window.document.querySelector(e.attach) : o = !1 : o = e.attach, o;
    }
    function Ke() {
      M.overlay = !0, M.modal = !0;
    }
    function qe() {
      M.overlay = !1, M.modal = !1;
    }
    function We() {
      H.value = U.Entering;
    }
    function Ge() {
      H.value = U.Enter;
    }
    function Ze() {
      H.value = U.Leaving;
    }
    function Qe() {
      H.value = U.Leave;
    }
    function Je() {
      X.value = U.Entering;
    }
    function $e() {
      X.value = U.Enter, (e.focusRetain || e.focusTrap) && s.value.focus(), e.focusTrap && Q.enable(s.value), e.drag && ze(), e.resize && ve(), t("_opened"), t("opened", ne({
        type: "opened"
      })), L("show");
    }
    function et() {
      X.value = U.Leaving, Q.enabled() && Q.disable();
    }
    function tt() {
      X.value = U.Leave, Z.value = null, e.lockScroll && lt(s.value), e.keepChangedStyle || (A.value = {});
      var o = !1, u = ne({
        type: "closed",
        stop: function() {
          o = !0;
        }
      });
      t("_closed"), t("closed", u), L("hide"), !o && (g.value = {});
    }
    function nt(o) {
      F.value = o == null ? void 0 : o.target;
    }
    function at() {
      F.value === s.value && _.value !== "resize:move" && (t("click-outside", ne({
        type: "click-outside"
      })), e.clickToClose && t("update:modelValue", !1));
    }
    function ot() {
      R.value && e.escToClose && t("update:modelValue", !1);
    }
    function ne() {
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return C({
        ref: te()
      }, o);
    }
    function Te(o, u) {
      var f = !1, E = ne({
        type: o,
        stop: function() {
          f = !0;
        }
      });
      return t(o, E), f ? (m.value = !0, he(function() {
        t("update:modelValue", u);
      }), !0) : !1;
    }
    function ce(o, u, f) {
      _.value = "".concat(u, ":").concat(f), t(_.value, o);
    }
    function rt(o, u) {
      var f = arguments;
      return new Promise(function(E, S) {
        L = function(p) {
          E(p), L = Ae;
        }, B = function(p) {
          S(p), B = Ae;
        };
        var K = typeof o == "boolean" ? o : !e.modelValue;
        K && f.length === 2 && (g.value = u), t("update:modelValue", K);
      });
    }
    function se(o) {
      o.stopPropagation();
      var u = "resize", f = "drag", E = o.target.getAttribute("direction"), S;
      if (E)
        S = u;
      else if (rn(o, y.value, e.dragSelector))
        S = f;
      else
        return;
      ce(o, S, "start");
      var K = Et(o), z = s.value.getBoundingClientRect(), p = y.value.getBoundingClientRect(), D = window.getComputedStyle(y.value).position === "absolute", O = {
        top: St(A.value.top),
        left: St(A.value.left)
      }, b = function() {
        if (e.fitParent) {
          var J = {
            absolute: function() {
              return {
                minTop: 0,
                minLeft: 0,
                maxTop: z.height - p.height,
                maxLeft: z.width - p.width
              };
            },
            relative: function() {
              return {
                minTop: O.top + z.top - p.top,
                minLeft: O.left + z.left - p.left,
                maxTop: O.top + z.bottom - p.bottom,
                maxLeft: O.left + z.right - p.right
              };
            }
          };
          return D ? J.absolute() : J.relative();
        } else
          return {};
      }(), k = S === u && an(document.body, "cursor", gn[E]), j = function(P) {
        P.stopPropagation(), ce(P, S, "move");
        var me = Et(P), I = {
          x: me.x - K.x,
          y: me.y - K.y
        };
        S === u && (I = r(E, I, z, p, D));
        var q, ae;
        D ? (q = p.top - z.top + I.y, ae = p.left - z.left + I.x) : (q = O.top + I.y, ae = O.left + I.x), S === f && e.fitParent && (q = Me(b.minTop, q, b.maxTop), ae = Me(b.minLeft, ae, b.maxLeft));
        var Ce = C(C(C({
          position: "relative",
          top: q + "px",
          left: ae + "px",
          margin: "unset",
          touchAction: "none"
        }, D && {
          position: "absolute",
          transform: "unset",
          width: p.width + "px",
          height: p.height + "px"
        }), I.width && {
          width: I.width + "px"
        }), I.height && {
          height: I.height + "px"
        });
        A.value = C(C({}, A.value), Ce);
      }, N = function J(P) {
        P.stopPropagation(), S === u && k && k(), setTimeout(function() {
          ce(P, S, "end");
        }), ke("move", document, j), ke("up", document, J);
      };
      De("move", document, j), De("up", document, N);
    }
    function ze() {
      De("down", y.value, se), A.value.touchAction = "none";
    }
    function _e() {
      ke("down", y.value, se);
    }
    function ve() {
      M.resize = !0, he(function() {
        De("down", l.value, se);
      });
    }
    function Oe() {
      ke("down", l.value, se), M.resize = !1;
    }
    function r(o, u, f, E, S) {
      var K = function(b) {
        var k, j = u[b.axis];
        j = e.fitParent ? Me(b.min, j, b.max) : j;
        var N = Me(b.minEdge, b.getEdge(j), b.maxEdge);
        return j = b.getOffsetAxis(N, S), k = {}, fe(k, b.edgeName, N), fe(k, b.axis, j), k;
      }, z = function(b, k, j, N) {
        var J = E[k], P = f[b] - E[b], me = on(k);
        return {
          axis: j,
          edgeName: k,
          min: N ? P : -J,
          max: N ? J : P,
          minEdge: e["min".concat(me)],
          maxEdge: e["max".concat(me)],
          getEdge: function(q) {
            return E[k] - q * (N ? 1 : -1);
          },
          getOffsetAxis: function(q, ae) {
            var Ce = E[k] - q;
            return ae ? N ? Ce : 0 : (N ? 1 : -1) * Ce / 2;
          }
        };
      }, p = {
        t: ["top", "height", "y", !0],
        b: ["bottom", "height", "y", !1],
        l: ["left", "width", "x", !0],
        r: ["right", "width", "x", !1]
      }, D = {
        x: 0,
        y: 0
      };
      return o.split("").forEach(function(O) {
        var b = z.apply(void 0, le(p[O]));
        D = C(C({}, D), K(b));
      }), D;
    }
    return {
      root: d,
      vfmContainer: s,
      vfmContent: y,
      vfmResize: l,
      vfmOverlayTransition: v,
      vfmTransition: x,
      computedOverlayTransition: Ne,
      computedTransition: Ue,
      visible: R,
      visibility: M,
      params: g,
      calculateZIndex: de,
      bindStyle: He,
      bindContentStyle: Xe,
      beforeOverlayEnter: We,
      afterOverlayEnter: Ge,
      beforeOverlayLeave: Ze,
      afterOverlayLeave: Qe,
      beforeModalEnter: Je,
      afterModalEnter: $e,
      beforeModalLeave: et,
      afterModalLeave: tt,
      onMousedown: nt,
      onMouseupContainer: at,
      onEsc: ot
    };
  }
}, it = It("data-v-2836fdb5");
Lt("data-v-2836fdb5");
var hn = {
  key: 0,
  ref: "vfmResize",
  class: "vfm__resize vfm--absolute vfm--inset vfm--prevent-none vfm--select-none vfm--touch-none"
};
Bt();
var pn = it(function(a, e, n, t, i, d) {
  return n.ssr || t.visible ? oe((h(), V("div", {
    key: 0,
    ref: "root",
    style: t.bindStyle,
    class: ["vfm vfm--inset", [n.attach === !1 ? "vfm--fixed" : "vfm--absolute", {
      "vfm--prevent-none": n.preventClick
    }]],
    onKeydown: e[4] || (e[4] = jt(function() {
      return t.onEsc && t.onEsc.apply(t, arguments);
    }, ["esc"]))
  }, [ge(ct, Be(t.computedOverlayTransition, {
    onBeforeEnter: t.beforeOverlayEnter,
    onAfterEnter: t.afterOverlayEnter,
    onBeforeLeave: t.beforeOverlayLeave,
    onAfterLeave: t.afterOverlayLeave
  }), {
    default: it(function() {
      return [!n.hideOverlay && t.visibility.overlay ? (h(), V("div", {
        key: 0,
        class: ["vfm__overlay vfm--overlay vfm--absolute vfm--inset", n.overlayClass],
        style: n.overlayStyle
      }, null, 6)) : G("v-if", !0)];
    }),
    _: 1
  }, 16, ["onBeforeEnter", "onAfterEnter", "onBeforeLeave", "onAfterLeave"]), ge(ct, Be(t.computedTransition, {
    onBeforeEnter: t.beforeModalEnter,
    onAfterEnter: t.afterModalEnter,
    onBeforeLeave: t.beforeModalLeave,
    onAfterLeave: t.afterModalLeave
  }), {
    default: it(function() {
      return [oe(ge("div", {
        ref: "vfmContainer",
        class: ["vfm__container vfm--absolute vfm--inset vfm--outline-none", n.classes],
        style: n.styles,
        "aria-expanded": t.visibility.modal.toString(),
        role: "dialog",
        "aria-modal": "true",
        tabindex: "-1",
        onMouseup: e[2] || (e[2] = je(function() {
          return t.onMouseupContainer && t.onMouseupContainer.apply(t, arguments);
        }, ["self"])),
        onMousedown: e[3] || (e[3] = je(function() {
          return t.onMousedown && t.onMousedown.apply(t, arguments);
        }, ["self"]))
      }, [ge("div", {
        ref: "vfmContent",
        class: ["vfm__content", [n.contentClass, {
          "vfm--prevent-auto": n.preventClick
        }]],
        style: t.bindContentStyle,
        onMousedown: e[1] || (e[1] = function(s) {
          return t.onMousedown(null);
        })
      }, [Pt(a.$slots, "default", {
        params: t.params,
        close: function() {
          return a.$emit("update:modelValue", !1);
        }
      }), t.visibility.resize && t.visibility.modal ? (h(), V("div", hn, [(h(!0), V(re, null, $(n.resizeDirections, function(s) {
        return h(), V("div", {
          key: s,
          direction: s,
          class: ["vfm--resize-".concat(s), "vfm--absolute vfm--prevent-auto"]
        }, null, 10, ["direction"]);
      }), 128))], 512)) : G("v-if", !0)], 38)], 46, ["aria-expanded"]), [[vt, t.visibility.modal]])];
    }),
    _: 3
  }, 16, ["onBeforeEnter", "onAfterEnter", "onBeforeLeave", "onAfterLeave"])], 38)), [[vt, !n.ssr || t.visible]]) : G("v-if", !0);
});
function bn(a, e) {
  e === void 0 && (e = {});
  var n = e.insertAt;
  if (!(!a || typeof document > "u")) {
    var t = document.head || document.getElementsByTagName("head")[0], i = document.createElement("style");
    i.type = "text/css", n === "top" && t.firstChild ? t.insertBefore(i, t.firstChild) : t.appendChild(i), i.styleSheet ? i.styleSheet.cssText = a : i.appendChild(document.createTextNode(a));
  }
}
var wn = `
.vfm--fixed[data-v-2836fdb5] {
  position: fixed;
}
.vfm--absolute[data-v-2836fdb5] {
  position: absolute;
}
.vfm--inset[data-v-2836fdb5] {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.vfm--overlay[data-v-2836fdb5] {
  background-color: rgba(0, 0, 0, 0.5);
}
.vfm--prevent-none[data-v-2836fdb5] {
  pointer-events: none;
}
.vfm--prevent-auto[data-v-2836fdb5] {
  pointer-events: auto;
}
.vfm--outline-none[data-v-2836fdb5]:focus {
  outline: none;
}
.vfm-enter-active[data-v-2836fdb5],
.vfm-leave-active[data-v-2836fdb5] {
  transition: opacity 0.2s;
}
.vfm-enter-from[data-v-2836fdb5],
.vfm-leave-to[data-v-2836fdb5] {
  opacity: 0;
}
.vfm--touch-none[data-v-2836fdb5] {
  touch-action: none;
}
.vfm--select-none[data-v-2836fdb5] {
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}
.vfm--resize-tr[data-v-2836fdb5],
.vfm--resize-br[data-v-2836fdb5],
.vfm--resize-bl[data-v-2836fdb5],
.vfm--resize-tl[data-v-2836fdb5] {
  width: 12px;
  height: 12px;
  z-index: 10;
}
.vfm--resize-t[data-v-2836fdb5] {
  top: -6px;
  left: 0;
  width: 100%;
  height: 12px;
  cursor: ns-resize;
}
.vfm--resize-tr[data-v-2836fdb5] {
  top: -6px;
  right: -6px;
  cursor: nesw-resize;
}
.vfm--resize-r[data-v-2836fdb5] {
  top: 0;
  right: -6px;
  width: 12px;
  height: 100%;
  cursor: ew-resize;
}
.vfm--resize-br[data-v-2836fdb5] {
  bottom: -6px;
  right: -6px;
  cursor: nwse-resize;
}
.vfm--resize-b[data-v-2836fdb5] {
  bottom: -6px;
  left: 0;
  width: 100%;
  height: 12px;
  cursor: ns-resize;
}
.vfm--resize-bl[data-v-2836fdb5] {
  bottom: -6px;
  left: -6px;
  cursor: nesw-resize;
}
.vfm--resize-l[data-v-2836fdb5] {
  top: 0;
  left: -6px;
  width: 12px;
  height: 100%;
  cursor: ew-resize;
}
.vfm--resize-tl[data-v-2836fdb5] {
  top: -6px;
  left: -6px;
  cursor: nwse-resize;
}
`;
bn(wn);
Fe.render = pn;
Fe.__scopeId = "data-v-2836fdb5";
Fe.__file = "lib/VueFinalModal.vue";
var ft = {
  props: {},
  methods: {
    slice: function(e) {
      this.api.dynamicModals.splice(e, 1);
    },
    beforeOpen: function(e, n, t) {
      var i = this;
      return Ht(function* () {
        e.ref.params.value = n.params, yield i.$nextTick(), yield i.$nextTick(), n.value || (i.slice(t), n.reject("show"));
      })();
    },
    isString: function(e) {
      return typeof e == "string";
    }
  }
}, xn = {
  class: "modals-container"
};
function En(a, e, n, t, i, d) {
  return h(), V("div", xn, [(h(!0), V(re, null, $(a.api.dynamicModals, function(s, y) {
    return h(), V(yt(s.component), Be({
      key: s.id
    }, s.bind, {
      modelValue: s.value,
      "onUpdate:modelValue": function(v) {
        return s.value = v;
      }
    }, gt(s.on), {
      on_closed: function(v) {
        return d.slice(y);
      },
      on_beforeOpen: function(v) {
        return d.beforeOpen(v, s);
      },
      on_opened: s.opened
    }), Ft({
      _: 2
    }, [$(s.slots, function(l, v) {
      return {
        name: v,
        fn: _t(function() {
          return [G(" eslint-disable vue/no-v-html "), d.isString(l) ? (h(), V("div", {
            key: 0,
            innerHTML: l
          }, null, 8, ["innerHTML"])) : (h(), V(yt(l.component), Be({
            key: 1
          }, l.bind, gt(l.on || {})), null, 16))];
        })
      };
    })]), 1040, ["modelValue", "onUpdate:modelValue", "on_closed", "on_beforeOpen", "on_opened"]);
  }), 128))]);
}
ft.render = En;
ft.__file = "lib/ModalsContainer.vue";
function Sn() {
  var a = null;
  return {
    show: function(n) {
      for (var t = this, i = arguments.length, d = new Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++)
        d[s - 1] = arguments[s];
      switch (be(n)) {
        case "string":
          return this.toggle.apply(this, [n, !0].concat(d));
        case "object":
          return Promise.allSettled([new Promise(function(y, l) {
            var v = {
              value: !0,
              id: Symbol("dynamicModal"),
              component: a,
              bind: {},
              slots: {},
              on: {},
              params: d[0],
              reject: l,
              opened: function() {
                y("show");
              }
            };
            t.dynamicModals.push(mt(Object.assign(v, n)));
          })]);
      }
    },
    hide: function() {
      for (var n = arguments.length, t = new Array(n), i = 0; i < n; i++)
        t[i] = arguments[i];
      return this.toggle(t, !1);
    },
    hideAll: function() {
      return this.hide.apply(this, le(this.openedModals.map(function(n) {
        return n.props.name;
      })));
    },
    toggle: function(n) {
      for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), d = 1; d < t; d++)
        i[d - 1] = arguments[d];
      var s = Array.isArray(n) ? this.get.apply(this, le(n)) : this.get(n);
      return Promise.allSettled(s.map(function(y) {
        return y.toggle.apply(y, i);
      }));
    },
    get: function() {
      for (var n = arguments.length, t = new Array(n), i = 0; i < n; i++)
        t[i] = arguments[i];
      return this.modals.filter(function(d) {
        return t.includes(d.props.name);
      });
    },
    dynamicModals: mt([]),
    openedModals: [],
    modals: [],
    _setDefaultModal: function(n) {
      a = n;
    }
  };
}
function Dt(a, e) {
  var n = C(C({}, a), {}, {
    props: C({}, a.props)
  });
  return Object.assign(n.props, {
    api: {
      type: Object,
      default: function() {
        return e;
      }
    }
  }), n;
}
function Tn(a) {
  var e = Dt(Fe, a);
  return a._setDefaultModal(e), e;
}
function zn(a) {
  return Dt(ft, a);
}
var _n = "$vfm", On = "VueFinalModal", Cn = "ModalsContainer", Mn = function() {
  var e, n = Sn();
  return e = {}, fe(e, _n, n), fe(e, On, Tn(n)), fe(e, Cn, zn(n)), e;
}, dt = Mn();
dt.$vfm;
var kt = dt.VueFinalModal;
dt.ModalsContainer;
const At = (a, e) => {
  const n = a.__vccOpts || a;
  for (const [t, i] of e)
    n[t] = i;
  return n;
}, Dn = {
  name: "EmojiPicker",
  emits: ["select"],
  setup(a, { emit: e }) {
    const n = [
      "😀",
      "😃",
      "😄",
      "😁",
      "😆",
      "😅",
      "😂",
      "🤣",
      "😊",
      "😇",
      "🙂",
      "🙃",
      "😉",
      "😌",
      "😍",
      "🥰",
      "😘",
      "😗",
      "😙",
      "😚",
      "😋",
      "😛",
      "😝",
      "😜",
      "🤪",
      "🤨",
      "🧐",
      "🤓",
      "😎",
      "🤩",
      "🥳",
      "😏",
      "😒",
      "😞",
      "😔",
      "😟",
      "😕",
      "🙁",
      "☹️",
      "😣",
      "😖",
      "😫",
      "😩",
      "🥺",
      "😢",
      "😭",
      "😤",
      "😠",
      "😡",
      "🤬",
      "🤯",
      "😳",
      "🥵",
      "🥶",
      "😱",
      "😨",
      "😰",
      "😥",
      "😓",
      "🤗",
      "🤔",
      "🤭",
      "🤫",
      "🤥",
      "😶",
      "😐",
      "😑",
      "😬",
      "🙄",
      "😯",
      "😦",
      "😧",
      "😮",
      "😲",
      "🥱",
      "😴",
      "🤤",
      "😪",
      "😵",
      "🤐",
      "🥴",
      "🤢",
      "🤮",
      "🤧",
      "😷",
      "🤒",
      "🤕",
      "🤑",
      "🤠",
      "😈",
      "👿",
      "👹",
      "👺",
      "🤡",
      "💩",
      "👻",
      "💀",
      "☠️",
      "👽",
      "👾"
    ], t = c(""), i = W(() => t.value ? n.filter((s) => s.includes(t.value)) : n);
    return {
      search: t,
      filteredEmojis: i,
      selectEmoji: (s) => {
        e("select", { i: s });
      }
    };
  }
}, kn = { class: "emoji-picker" }, An = { class: "emoji-list" }, In = ["onClick"];
function Ln(a, e, n, t, i, d) {
  return h(), T("div", kn, [
    oe(w("input", {
      "onUpdate:modelValue": e[0] || (e[0] = (s) => t.search = s),
      type: "text",
      placeholder: "Search emoji...",
      class: "w-full px-2 py-1 mb-2 bg-[#1a1b1f] text-white rounded border border-white/10"
    }, null, 512), [
      [pe, t.search]
    ]),
    w("div", An, [
      (h(!0), T(re, null, $(t.filteredEmojis, (s) => (h(), T("button", {
        key: s,
        onClick: (y) => t.selectEmoji(s),
        class: "emoji-button"
      }, Ie(s), 9, In))), 128))
    ])
  ]);
}
const Bn = /* @__PURE__ */ At(Dn, [["render", Ln], ["__scopeId", "data-v-c9042253"]]);
const jn = {
  name: "VueImageEditor",
  components: {
    VueFinalModal: kt,
    EmojiPicker: Bn
  },
  props: {
    isOpen: {
      type: Boolean,
      required: !0
    },
    imageUrl: {
      type: String,
      required: !0
    }
  },
  emits: ["update:isOpen", "save"],
  setup(a, { emit: e }) {
    const n = c(null), t = c(null), i = c(null), d = c(null), s = c(!1), y = c("blur"), l = c(!1), v = c(""), x = c("#ffffff"), Z = c(24), Q = c(5), R = c(!1), M = c(!1), H = c(!1), X = c(null), m = c({ x: 0, y: 0 }), g = c({ width: 100, height: 100 }), A = c({ x: 0, y: 0 }), _ = c([]), F = c([]), L = c(!1), B = c(!1), Ne = W({
      get: () => a.isOpen,
      set: (r) => e("update:isOpen", r)
    }), Ue = [
      { name: "blur", label: "Blur" },
      { name: "pixelate", label: "Pixelate" },
      { name: "text", label: "Text" },
      { name: "emoji", label: "Emoji" }
    ], Ye = [
      { position: "nw", style: { top: "-5px", left: "-5px", cursor: "nwse-resize" } },
      { position: "ne", style: { top: "-5px", right: "-5px", cursor: "nesw-resize" } },
      { position: "sw", style: { bottom: "-5px", left: "-5px", cursor: "nesw-resize" } },
      { position: "se", style: { bottom: "-5px", right: "-5px", cursor: "nwse-resize" } }
    ], de = W(() => ({
      left: `${m.value.x}px`,
      top: `${m.value.y}px`,
      width: `${g.value.width}px`,
      height: `${g.value.height}px`
    })), He = (r) => ({
      left: `${r.x}px`,
      top: `${r.y}px`
    }), Xe = (r) => ({
      left: `${r.x}px`,
      top: `${r.y}px`,
      fontSize: `${r.size}px`
    }), te = async () => {
      if (!(!n.value || !a.imageUrl || B.value || L.value)) {
        B.value = !0;
        try {
          const r = new Image();
          await new Promise((o, u) => {
            r.onload = () => {
              try {
                if (!n.value)
                  return u(new Error("Canvas not found"));
                if (n.value.width = r.width, n.value.height = r.height, t.value = n.value.getContext("2d"), !t.value)
                  return u(new Error("Could not get canvas context"));
                t.value.drawImage(r, 0, 0, r.width, r.height), d.value = r, L.value = !0, o();
              } catch (f) {
                u(f);
              }
            }, r.onerror = () => u(new Error("Failed to load image")), r.src = a.imageUrl;
          });
        } catch (r) {
          console.error("Failed to initialize canvas:", r);
        } finally {
          B.value = !1;
        }
      }
    }, ie = (r) => {
      y.value = r, l.value = !0, R.value = r === "blur" || r === "pixelate";
    }, Ee = (r) => {
      s.value = !0, ue(r);
    }, ue = (r) => {
      if (!s.value)
        return;
      const o = n.value.getBoundingClientRect(), u = r.clientX - o.left, f = r.clientY - o.top;
      (y.value === "blur" || y.value === "pixelate") && (m.value = { x: u, y: f }, g.value = { width: 100, height: 100 });
    }, Se = () => {
      s.value = !1;
    }, Ke = (r) => {
      M.value = !0;
      const o = n.value.getBoundingClientRect();
      A.value = {
        x: r.clientX - o.left - m.value.x,
        y: r.clientY - o.top - m.value.y
      };
    }, qe = (r) => {
      if (!M.value)
        return;
      const o = n.value.getBoundingClientRect();
      m.value = {
        x: r.clientX - o.left - A.value.x,
        y: r.clientY - o.top - A.value.y
      };
    }, We = () => {
      M.value = !1;
    }, Ge = (r) => {
      H.value = !0, X.value = r;
    }, Ze = (r) => {
      if (!H.value)
        return;
      const o = n.value.getBoundingClientRect(), u = r.clientX - o.left, f = r.clientY - o.top;
      switch (X.value) {
        case "nw":
          g.value.width += m.value.x - u, g.value.height += m.value.y - f, m.value.x = u, m.value.y = f;
          break;
        case "ne":
          g.value.width = u - m.value.x, g.value.height += m.value.y - f, m.value.y = f;
          break;
        case "sw":
          g.value.width += m.value.x - u, g.value.height = f - m.value.y, m.value.x = u;
          break;
        case "se":
          g.value.width = u - m.value.x, g.value.height = f - m.value.y;
          break;
      }
    }, Qe = () => {
      H.value = !1, X.value = null;
    }, Je = () => {
      if (!(!t.value || !d.value || !n.value)) {
        if (t.value.drawImage(d.value, 0, 0, n.value.width, n.value.height), y.value === "blur") {
          const r = Q.value || 5;
          t.value.filter = `blur(${r}px)`, t.value.drawImage(
            n.value,
            m.value.x,
            m.value.y,
            g.value.width,
            g.value.height,
            m.value.x,
            m.value.y,
            g.value.width,
            g.value.height
          ), t.value.filter = "none";
        } else if (y.value === "pixelate") {
          const r = Q.value || 5, o = t.value.getImageData(
            m.value.x,
            m.value.y,
            g.value.width,
            g.value.height
          );
          for (let u = 0; u < g.value.height; u += r)
            for (let f = 0; f < g.value.width; f += r) {
              const E = (u * g.value.width + f) * 4, S = o.data[E], K = o.data[E + 1], z = o.data[E + 2];
              for (let p = 0; p < r && u + p < g.value.height; p++)
                for (let D = 0; D < r && f + D < g.value.width; D++) {
                  const O = ((u + p) * g.value.width + (f + D)) * 4;
                  o.data[O] = S, o.data[O + 1] = K, o.data[O + 2] = z;
                }
            }
          t.value.putImageData(o, m.value.x, m.value.y);
        }
        ze(), _e();
      }
    }, $e = () => {
      v.value && (_.value.push({
        text: v.value,
        x: 50,
        y: 50,
        color: x.value,
        size: Z.value
      }), v.value = "");
    }, et = (r, o) => {
      const u = _.value[r];
      u.isDragging = !0, u.dragStartX = o.clientX - u.x, u.dragStartY = o.clientY - u.y;
    }, tt = (r) => {
      _.value.forEach((o) => {
        o.isDragging && (o.x = r.clientX - o.dragStartX, o.y = r.clientY - o.dragStartY);
      });
    }, nt = () => {
      _.value.forEach((r) => {
        r.isDragging = !1;
      });
    }, at = (r) => {
      const o = _.value[r];
      v.value = o.text, x.value = o.color, Z.value = o.size, _.value.splice(r, 1);
    }, ot = (r) => {
      _.value.splice(r, 1);
    }, ne = (r) => {
      F.value.push({
        emoji: r.i,
        x: 50,
        y: 50,
        size: 24
      });
    }, Te = (r, o) => {
      const u = F.value[r];
      u.isDragging = !0, u.dragStartX = o.clientX - u.x, u.dragStartY = o.clientY - u.y;
    }, ce = (r) => {
      F.value.forEach((o) => {
        o.isDragging && (o.x = r.clientX - o.dragStartX, o.y = r.clientY - o.dragStartY);
      });
    }, rt = () => {
      F.value.forEach((r) => {
        r.isDragging = !1;
      });
    }, se = (r) => {
      F.value.splice(r, 1);
    }, ze = () => {
      t.value && _.value.forEach((r) => {
        t.value.font = `${r.size}px sans-serif`, t.value.fillStyle = r.color, t.value.fillText(r.text, r.x, r.y);
      });
    }, _e = () => {
      t.value && F.value.forEach((r) => {
        t.value.font = `${r.size}px sans-serif`, t.value.textBaseline = "middle", t.value.textAlign = "center", t.value.fillText(r.emoji, r.x + r.size / 2, r.y + r.size / 2);
      });
    }, ve = () => {
      e("update:isOpen", !1);
    }, Oe = () => {
      const r = n.value.toDataURL();
      e("save", r), ve();
    };
    return zt(async () => {
      a.isOpen && await te();
    }), Y(() => a.isOpen, async (r, o) => {
      r && !L.value && !B.value ? (await he(), await te()) : r || (L.value = !1);
    }, { immediate: !0 }), Y(() => a.imageUrl, async (r, o) => {
      r !== o && a.isOpen && !B.value && (L.value = !1, await te());
    }), Nt(() => {
      d.value && (d.value.src = "", d.value = null), t.value && (t.value = null);
    }), {
      canvas: n,
      canvasContainer: i,
      currentTool: y,
      showToolOptions: l,
      showBlurFrame: R,
      textInput: v,
      textColor: x,
      textSize: Z,
      effectIntensity: Q,
      framePosition: m,
      frameSize: g,
      textItems: _,
      emojiItems: F,
      tools: Ue,
      resizeHandles: Ye,
      blurFrameStyle: de,
      getTextItemStyle: He,
      getEmojiItemStyle: Xe,
      isOpenLocal: Ne,
      selectTool: ie,
      startDrawing: Ee,
      draw: ue,
      stopDrawing: Se,
      startFrameDrag: Ke,
      dragFrame: qe,
      stopFrameDrag: We,
      startResize: Ge,
      resize: Ze,
      stopResize: Qe,
      applyEffect: Je,
      addText: $e,
      startTextDrag: et,
      dragText: tt,
      stopTextDrag: nt,
      editText: at,
      deleteText: ot,
      addEmoji: ne,
      startEmojiDrag: Te,
      dragEmoji: ce,
      stopEmojiDrag: rt,
      deleteEmoji: se,
      handleClose: ve,
      handleSave: Oe,
      isLoading: B,
      isInitialized: L
    };
  }
}, Pn = { class: "vue-image-editor" }, Vn = { class: "editor-container" }, Rn = { class: "toolbar" }, Fn = ["onClick"], Nn = {
  class: "canvas-container",
  ref: "canvasContainer"
}, Un = ["onMousedown", "onTouchstart"], Yn = ["onMousedown", "onTouchstart"], Hn = ["onClick"], Xn = ["onClick"], Kn = ["onMousedown", "onTouchstart"], qn = ["onClick"], Wn = {
  key: 0,
  class: "tool-options"
}, Gn = { key: 0 }, Zn = { key: 1 }, Qn = { key: 2 }, Jn = ["min", "max"], $n = { class: "actions" };
function ea(a, e, n, t, i, d) {
  const s = ht("EmojiPicker"), y = ht("VueFinalModal");
  return h(), V(y, {
    modelValue: t.isOpenLocal,
    "onUpdate:modelValue": e[17] || (e[17] = (l) => t.isOpenLocal = l),
    classes: "modal-container",
    "content-class": "modal-content",
    "esc-to-close": !0,
    "click-to-close": !1,
    "lock-scroll": !0,
    "hide-overlay": !1,
    "overlay-transition": "vfm-fade",
    transition: "vfm-fade"
  }, {
    default: _t(() => [
      w("div", Pn, [
        w("div", Vn, [
          w("div", Rn, [
            (h(!0), T(re, null, $(t.tools, (l) => (h(), T("button", {
              key: l.name,
              onClick: (v) => t.selectTool(l.name),
              class: Ut({ active: t.currentTool === l.name })
            }, Ie(l.label), 11, Fn))), 128))
          ]),
          w("div", Nn, [
            w("canvas", {
              ref: "canvas",
              onMousedown: e[0] || (e[0] = (...l) => t.startDrawing && t.startDrawing(...l)),
              onMousemove: e[1] || (e[1] = (...l) => t.draw && t.draw(...l)),
              onMouseup: e[2] || (e[2] = (...l) => t.stopDrawing && t.stopDrawing(...l)),
              onMouseleave: e[3] || (e[3] = (...l) => t.stopDrawing && t.stopDrawing(...l)),
              onTouchstart: e[4] || (e[4] = (...l) => t.startDrawing && t.startDrawing(...l)),
              onTouchmove: e[5] || (e[5] = (...l) => t.draw && t.draw(...l)),
              onTouchend: e[6] || (e[6] = (...l) => t.stopDrawing && t.stopDrawing(...l))
            }, null, 544),
            t.showBlurFrame ? (h(), T("div", {
              key: 0,
              ref: "blurFrame",
              class: "blur-frame",
              style: ye(t.blurFrameStyle),
              onMousedown: e[7] || (e[7] = (...l) => t.startFrameDrag && t.startFrameDrag(...l)),
              onTouchstart: e[8] || (e[8] = (...l) => t.startFrameDrag && t.startFrameDrag(...l))
            }, [
              (h(!0), T(re, null, $(t.resizeHandles, (l) => (h(), T("div", {
                key: l.position,
                class: "resize-handle",
                style: ye(l.style),
                onMousedown: je((v) => t.startResize(l.position), ["stop"]),
                onTouchstart: je((v) => t.startResize(l.position), ["stop"])
              }, null, 44, Un))), 128))
            ], 36)) : G("", !0),
            (h(!0), T(re, null, $(t.textItems, (l, v) => (h(), T("div", {
              key: v,
              class: "text-item",
              style: ye(t.getTextItemStyle(l)),
              onMousedown: (x) => t.startTextDrag(v, x),
              onTouchstart: (x) => t.startTextDrag(v, x)
            }, [
              w("div", {
                style: ye({ color: l.color, fontSize: `${l.size}px` })
              }, Ie(l.text), 5),
              w("button", {
                onClick: (x) => t.editText(v),
                class: "edit-button"
              }, "Edit", 8, Hn),
              w("button", {
                onClick: (x) => t.deleteText(v),
                class: "delete-button"
              }, "Delete", 8, Xn)
            ], 44, Yn))), 128)),
            (h(!0), T(re, null, $(t.emojiItems, (l, v) => (h(), T("div", {
              key: v,
              class: "emoji-item",
              style: ye(t.getEmojiItemStyle(l)),
              onMousedown: (x) => t.startEmojiDrag(v, x),
              onTouchstart: (x) => t.startEmojiDrag(v, x)
            }, [
              Yt(Ie(l.emoji) + " ", 1),
              w("button", {
                onClick: (x) => t.deleteEmoji(v),
                class: "delete-button"
              }, "Delete", 8, qn)
            ], 44, Kn))), 128))
          ], 512),
          t.showToolOptions ? (h(), T("div", Wn, [
            t.currentTool === "text" ? (h(), T("div", Gn, [
              oe(w("input", {
                "onUpdate:modelValue": e[9] || (e[9] = (l) => t.textInput = l),
                placeholder: "Enter text"
              }, null, 512), [
                [pe, t.textInput]
              ]),
              oe(w("input", {
                "onUpdate:modelValue": e[10] || (e[10] = (l) => t.textColor = l),
                type: "color"
              }, null, 512), [
                [pe, t.textColor]
              ]),
              oe(w("input", {
                "onUpdate:modelValue": e[11] || (e[11] = (l) => t.textSize = l),
                type: "range",
                min: "12",
                max: "72"
              }, null, 512), [
                [pe, t.textSize]
              ]),
              w("button", {
                onClick: e[12] || (e[12] = (...l) => t.addText && t.addText(...l))
              }, "Add Text")
            ])) : G("", !0),
            t.currentTool === "emoji" ? (h(), T("div", Zn, [
              ge(s, { onSelect: t.addEmoji }, null, 8, ["onSelect"])
            ])) : G("", !0),
            t.currentTool === "blur" || t.currentTool === "pixelate" ? (h(), T("div", Qn, [
              oe(w("input", {
                "onUpdate:modelValue": e[13] || (e[13] = (l) => t.effectIntensity = l),
                type: "range",
                min: (t.currentTool === "pixelate", 1),
                max: (t.currentTool === "pixelate", 20),
                onInput: e[14] || (e[14] = (...l) => t.applyEffect && t.applyEffect(...l))
              }, null, 40, Jn), [
                [pe, t.effectIntensity]
              ])
            ])) : G("", !0)
          ])) : G("", !0),
          w("div", $n, [
            w("button", {
              onClick: e[15] || (e[15] = (...l) => t.handleClose && t.handleClose(...l))
            }, "Cancel"),
            w("button", {
              onClick: e[16] || (e[16] = (...l) => t.handleSave && t.handleSave(...l))
            }, "Save")
          ])
        ])
      ])
    ]),
    _: 1
  }, 8, ["modelValue"]);
}
const ta = /* @__PURE__ */ At(jn, [["render", ea], ["__scopeId", "data-v-aa8ca220"]]), aa = {
  install: (a) => {
    a.component("VueFinalModal", kt), a.component("VueImageEditor", ta);
  }
};
export {
  ta as VueImageEditor,
  aa as default
};
