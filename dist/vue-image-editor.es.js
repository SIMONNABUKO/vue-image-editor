import { withScopeId as At, pushScopeId as It, popScopeId as Lt, withDirectives as re, openBlock as y, createBlock as P, withKeys as Bt, createVNode as we, Transition as ct, mergeProps as Re, createCommentVNode as W, withModifiers as Pe, renderSlot as jt, Fragment as le, renderList as J, vShow as vt, shallowReactive as mt, ref as d, reactive as Vt, computed as X, watch as H, onMounted as _t, onBeforeUnmount as Rt, nextTick as ke, resolveDynamicComponent as yt, toHandlers as gt, createSlots as Pt, withCtx as Ot, createElementBlock as S, createElementVNode as b, vModelText as xe, toDisplayString as je, resolveComponent as ht, normalizeClass as Ft, normalizeStyle as be, createTextVNode as Nt } from "vue";
function Ee(o) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ee = function(e) {
    return typeof e;
  } : Ee = function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ee(o);
}
function pt(o, e, n, t, a, f, l) {
  try {
    var c = o[f](l), r = c.value;
  } catch (v) {
    n(v);
    return;
  }
  c.done ? e(r) : Promise.resolve(r).then(t, a);
}
function Ut(o) {
  return function() {
    var e = this, n = arguments;
    return new Promise(function(t, a) {
      var f = o.apply(e, n);
      function l(r) {
        pt(f, t, a, l, c, "next", r);
      }
      function c(r) {
        pt(f, t, a, l, c, "throw", r);
      }
      l(void 0);
    });
  };
}
function Ht(o, e) {
  if (!(o instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function bt(o, e) {
  for (var n = 0; n < e.length; n++) {
    var t = e[n];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(o, t.key, t);
  }
}
function Yt(o, e, n) {
  return e && bt(o.prototype, e), n && bt(o, n), o;
}
function ve(o, e, n) {
  return e in o ? Object.defineProperty(o, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : o[e] = n, o;
}
function wt(o, e) {
  var n = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(o);
    e && (t = t.filter(function(a) {
      return Object.getOwnPropertyDescriptor(o, a).enumerable;
    })), n.push.apply(n, t);
  }
  return n;
}
function D(o) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? wt(Object(n), !0).forEach(function(t) {
      ve(o, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(n)) : wt(Object(n)).forEach(function(t) {
      Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return o;
}
function ie(o) {
  return Kt(o) || qt(o) || Xt(o) || Wt();
}
function Kt(o) {
  if (Array.isArray(o))
    return ut(o);
}
function qt(o) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(o))
    return Array.from(o);
}
function Xt(o, e) {
  if (o) {
    if (typeof o == "string")
      return ut(o, e);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return ut(o, e);
  }
}
function ut(o, e) {
  (e == null || e > o.length) && (e = o.length);
  for (var n = 0, t = new Array(e); n < e; n++)
    t[n] = o[n];
  return t;
}
function Wt() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Gt = 'button:not([disabled]), select:not([disabled]), a[href]:not([disabled]), area[href]:not([disabled]), [contentEditable=""]:not([disabled]), [contentEditable="true"]:not([disabled]), [contentEditable="TRUE"]:not([disabled]), textarea:not([disabled]), iframe:not([disabled]), input:not([disabled]), summary:not([disabled]), [tabindex]:not([tabindex="-1"])', Zt = function(e) {
  return e.key === "Tab" || e.keyCode === 9;
}, Qt = function(e, n) {
  return ie(e.querySelectorAll(n) || []);
}, Jt = function(e) {
  return Qt(e, Gt);
}, xt = function(e) {
  return e == document.activeElement;
}, $t = function() {
  return !document.activeElement;
}, en = /* @__PURE__ */ function() {
  function o() {
    Ht(this, o), this.root = null, this.elements = [], this.onKeyDown = this.onKeyDown.bind(this), this.enable = this.enable.bind(this), this.disable = this.disable.bind(this), this.firstElement = this.firstElement.bind(this), this.lastElement = this.lastElement.bind(this);
  }
  return Yt(o, [{
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
      if (Zt(n)) {
        if (n.shiftKey) {
          xt(this.firstElement()) && (this.lastElement().focus(), n.preventDefault());
          return;
        }
        if ($t() || xt(this.lastElement())) {
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
      n && (this.root = n, this.elements = Jt(this.root), this.root.addEventListener("keydown", this.onKeyDown));
    }
  }, {
    key: "disable",
    value: function() {
      this.root.removeEventListener("keydown", this.onKeyDown), this.root = null;
    }
  }]), o;
}(), tn = function(e, n, t) {
  var a = e.style[n];
  return e.style[n] = t, function() {
    e.style[n] = a;
  };
}, Et = function(e) {
  var n = e.targetTouches ? e.targetTouches[0] : e, t = n.clientX, a = n.clientY;
  return {
    x: t,
    y: a
  };
}, nn = function(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Ae = function(e, n, t) {
  return typeof e != "number" && (e = Math.min(n, t) || n), typeof t != "number" && (t = Math.max(n, e)), Math.min(Math.max(n, e), t);
}, Tt = function(e) {
  return e && Number(e.replace(/px$/, "")) || 0;
}, on = function(e, n, t) {
  if (t === "")
    return !0;
  var a = ie(n.querySelectorAll(t));
  return a.includes(e.target);
}, Fe = {
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
}, Ie = function(e, n, t) {
  n && n.addEventListener(Fe[e].pc, t), n && n.addEventListener(Fe[e].m, t, {
    passive: !1
  });
}, Le = function(e, n, t) {
  n && n.removeEventListener(Fe[e].pc, t), n && n.removeEventListener(Fe[e].m, t);
}, st = !1;
if (typeof window < "u") {
  var St = {
    get passive() {
      st = !0;
    }
  };
  window.addEventListener("testPassive", null, St), window.removeEventListener("testPassive", null, St);
}
var Ct = typeof window < "u" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1), $ = [], Ne = !1, Ve = 0, Mt = -1, Te, Se, an = function(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  var n = window.getComputedStyle(e);
  return ["auto", "scroll"].includes(n.overflowY) && e.scrollHeight > e.clientHeight;
}, rn = function(e, n) {
  return !(e.scrollTop === 0 && n < 0 || e.scrollTop + e.clientHeight + n >= e.scrollHeight && n > 0);
}, ln = function(e) {
  for (var n = []; e; ) {
    if (n.push(e), e.classList.contains("vfm"))
      return n;
    e = e.parentElement;
  }
  return n;
}, un = function(e, n) {
  var t = !1, a = ln(e);
  return a.forEach(function(f) {
    an(f) && rn(f, n) && (t = !0);
  }), t;
}, Dt = function(e) {
  return $.some(function() {
    return un(e, -Ve);
  });
}, Ue = function(e) {
  var n = e || window.event;
  return Dt(n.target) || n.touches.length > 1 ? !0 : (n.preventDefault && n.preventDefault(), !1);
}, sn = function(e) {
  if (Se === void 0) {
    var n = !!e && e.reserveScrollBarGap === !0, t = window.innerWidth - document.documentElement.clientWidth;
    if (n && t > 0) {
      var a = parseInt(getComputedStyle(document.body).getPropertyValue("padding-right"), 10);
      Se = document.body.style.paddingRight, document.body.style.paddingRight = "".concat(a + t, "px");
    }
  }
  Te === void 0 && (Te = document.body.style.overflow, document.body.style.overflow = "hidden");
}, fn = function() {
  Se !== void 0 && (document.body.style.paddingRight = Se, Se = void 0), Te !== void 0 && (document.body.style.overflow = Te, Te = void 0);
}, dn = function(e) {
  return e ? e.scrollHeight - e.scrollTop <= e.clientHeight : !1;
}, cn = function(e, n) {
  return Ve = e.targetTouches[0].clientY - Mt, Dt(e.target) ? !1 : n && n.scrollTop === 0 && Ve > 0 || dn(n) && Ve < 0 ? Ue(e) : (e.stopPropagation(), !0);
}, vn = function(e, n) {
  if (!e) {
    console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
    return;
  }
  if (!$.some(function(a) {
    return a.targetElement === e;
  })) {
    var t = {
      targetElement: e,
      options: n || {}
    };
    $ = [].concat(ie($), [t]), Ct ? (e.ontouchstart = function(a) {
      a.targetTouches.length === 1 && (Mt = a.targetTouches[0].clientY);
    }, e.ontouchmove = function(a) {
      a.targetTouches.length === 1 && cn(a, e);
    }, Ne || (document.addEventListener("touchmove", Ue, st ? {
      passive: !1
    } : void 0), Ne = !0)) : sn(n);
  }
}, lt = function(e) {
  if (!e) {
    console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");
    return;
  }
  $ = $.filter(function(n) {
    return n.targetElement !== e;
  }), Ct ? (e.ontouchstart = null, e.ontouchmove = null, Ne && $.length === 0 && (document.removeEventListener("touchmove", Ue, st ? {
    passive: !1
  } : void 0), Ne = !1)) : $.length || fn();
}, Be = function() {
}, U = {
  Enter: "enter",
  Entering: "entering",
  Leave: "leave",
  Leaving: "leavng"
}, mn = {
  t: "ns-resize",
  tr: "nesw-resize",
  r: "ew-resize",
  br: "nwse-resize",
  b: "ns-resize",
  bl: "nesw-resize",
  l: "ew-resize",
  tl: "nwse-resize"
}, He = {
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
        var n = Ee(e);
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
    var t = n.emit, a = Symbol("vfm"), f = d(null), l = d(null), c = d(null), r = d(null), v = d(null), h = d(null), z = d(null), k = new en(), _ = d(!1), O = Vt({
      modal: !1,
      overlay: !1,
      resize: !1
    }), Y = d(null), K = d(null), ee = d(!1), T = d({}), x = d({}), G = d(null), B = d(null), j = Be, ue = Be, Ye = X(function() {
      return typeof e.overlayTransition == "string" ? {
        name: e.overlayTransition
      } : D({}, e.overlayTransition);
    }), Ke = X(function() {
      return typeof e.transition == "string" ? {
        name: e.transition
      } : D({}, e.transition);
    }), qe = X(function() {
      return (e.hideOverlay || Y.value === U.Leave) && K.value === U.Leave;
    }), me = X(function() {
      return e.zIndex === !1 ? e.zIndexAuto ? +e.zIndexBase + 2 * (z.value || 0) : !1 : e.zIndex;
    }), se = X(function() {
      return D({}, me.value !== !1 && {
        zIndex: me.value
      });
    }), Xe = X(function() {
      var u = [x.value];
      return Array.isArray(e.contentStyle) ? u.push.apply(u, ie(e.contentStyle)) : u.push(e.contentStyle), u;
    });
    H(function() {
      return e.modelValue;
    }, function(u) {
      if (ee.value) {
        ee.value = !1;
        return;
      }
      if (te(), !u) {
        if (Ce("before-close", !0)) {
          ue("hide");
          return;
        }
        _e();
      }
    }), H(function() {
      return e.lockScroll;
    }, ge), H(function() {
      return e.hideOverlay;
    }, function(u) {
      e.modelValue && !u && (O.overlay = !0);
    }), H(function() {
      return e.attach;
    }, te), H(qe, function(u) {
      u && (_.value = !1, l.value.style.display = "none");
    }, {
      flush: "post"
    }), H(function() {
      return e.drag;
    }, function(u) {
      _.value && (u ? i() : s());
    }), H(function() {
      return e.resize;
    }, function(u) {
      _.value && (u ? w() : ce());
    }), H(function() {
      return e.keepChangedStyle;
    }, function(u) {
      u || (x.value = {});
    }), _t(function() {
      e.api.modals.push(ye()), te();
    }), Rt(function() {
      var u;
      _e(), e.lockScroll && l.value && lt(l.value), f == null || (u = f.value) === null || u === void 0 || u.remove();
      var m = e.api.modals.findIndex(function(g) {
        return g.uid === a;
      });
      e.api.modals.splice(m, 1);
    });
    function ye() {
      return {
        uid: a,
        props: e,
        emit: t,
        vfmContainer: l,
        vfmContent: c,
        vfmResize: r,
        vfmOverlayTransition: v,
        vfmTransition: h,
        getAttachElement: Oe,
        modalStackIndex: z,
        visibility: O,
        handleLockScroll: ge,
        $focusTrap: k,
        toggle: Me,
        params: T
      };
    }
    function te() {
      if (e.modelValue) {
        if (t("_before-open", ne({
          type: "_before-open"
        })), Ce("before-open", !1)) {
          ue("show");
          return;
        }
        var u = Oe();
        if (u || e.attach === !1) {
          if (e.attach !== !1)
            if (f.value)
              u.appendChild(f.value);
            else {
              _.value = !0, ke(function() {
                te();
              });
              return;
            }
          var m = e.api.openedModals.findIndex(function(g) {
            return g.uid === a;
          });
          m !== -1 && e.api.openedModals.splice(m, 1), e.api.openedModals.push(ye()), z.value = e.api.openedModals.length - 1, ge(), e.api.openedModals.filter(function(g) {
            return g.uid !== a;
          }).forEach(function(g, C) {
            g.getAttachElement() === u && (g.modalStackIndex.value = C, !g.props.keepOverlay && (g.visibility.overlay = !1));
          }), _.value = !0, We();
        } else
          u !== !1 && console.warn("Unable to locate target ".concat(e.attach));
      }
    }
    function _e() {
      var u = e.api.openedModals.findIndex(function(g) {
        return g.uid === a;
      });
      if (u !== -1 && e.api.openedModals.splice(u, 1), e.api.openedModals.length > 0) {
        var m = e.api.openedModals[e.api.openedModals.length - 1];
        m.props.focusTrap && m.$focusTrap.firstElement().focus(), (m.props.focusRetain || m.props.focusTrap) && m.vfmContainer.value.focus(), !m.props.hideOverlay && (m.visibility.overlay = !0);
      }
      e.drag && s(), e.resize && ce(), G.value = null, Ge();
    }
    function ge() {
      e.modelValue && ke(function() {
        e.lockScroll ? vn(l.value, {
          reserveScrollBarGap: !0
        }) : lt(l.value);
      });
    }
    function Oe() {
      var u;
      return e.attach === !1 ? u = !1 : typeof e.attach == "string" ? window ? u = window.document.querySelector(e.attach) : u = !1 : u = e.attach, u;
    }
    function We() {
      O.overlay = !0, O.modal = !0;
    }
    function Ge() {
      O.overlay = !1, O.modal = !1;
    }
    function Ze() {
      Y.value = U.Entering;
    }
    function Qe() {
      Y.value = U.Enter;
    }
    function fe() {
      Y.value = U.Leaving;
    }
    function Je() {
      Y.value = U.Leave;
    }
    function $e() {
      K.value = U.Entering;
    }
    function et() {
      K.value = U.Enter, (e.focusRetain || e.focusTrap) && l.value.focus(), e.focusTrap && k.enable(l.value), e.drag && i(), e.resize && w(), t("_opened"), t("opened", ne({
        type: "opened"
      })), j("show");
    }
    function tt() {
      K.value = U.Leaving, k.enabled() && k.disable();
    }
    function nt() {
      K.value = U.Leave, z.value = null, e.lockScroll && lt(l.value), e.keepChangedStyle || (x.value = {});
      var u = !1, m = ne({
        type: "closed",
        stop: function() {
          u = !0;
        }
      });
      t("_closed"), t("closed", m), j("hide"), !u && (T.value = {});
    }
    function ot(u) {
      B.value = u == null ? void 0 : u.target;
    }
    function at() {
      B.value === l.value && G.value !== "resize:move" && (t("click-outside", ne({
        type: "click-outside"
      })), e.clickToClose && t("update:modelValue", !1));
    }
    function rt() {
      _.value && e.escToClose && t("update:modelValue", !1);
    }
    function ne() {
      var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return D({
        ref: ye()
      }, u);
    }
    function Ce(u, m) {
      var g = !1, C = ne({
        type: u,
        stop: function() {
          g = !0;
        }
      });
      return t(u, C), g ? (ee.value = !0, ke(function() {
        t("update:modelValue", m);
      }), !0) : !1;
    }
    function he(u, m, g) {
      G.value = "".concat(m, ":").concat(g), t(G.value, u);
    }
    function Me(u, m) {
      var g = arguments;
      return new Promise(function(C, M) {
        j = function(E) {
          C(E), j = Be;
        }, ue = function(E) {
          M(E), ue = Be;
        };
        var oe = typeof u == "boolean" ? u : !e.modelValue;
        oe && g.length === 2 && (T.value = m), t("update:modelValue", oe);
      });
    }
    function de(u) {
      u.stopPropagation();
      var m = "resize", g = "drag", C = u.target.getAttribute("direction"), M;
      if (C)
        M = m;
      else if (on(u, c.value, e.dragSelector))
        M = g;
      else
        return;
      he(u, M, "start");
      var oe = Et(u), A = l.value.getBoundingClientRect(), E = c.value.getBoundingClientRect(), Z = window.getComputedStyle(c.value).position === "absolute", F = {
        top: Tt(x.value.top),
        left: Tt(x.value.left)
      }, p = function() {
        if (e.fitParent) {
          var Q = {
            absolute: function() {
              return {
                minTop: 0,
                minLeft: 0,
                maxTop: A.height - E.height,
                maxLeft: A.width - E.width
              };
            },
            relative: function() {
              return {
                minTop: F.top + A.top - E.top,
                minLeft: F.left + A.left - E.left,
                maxTop: F.top + A.bottom - E.bottom,
                maxLeft: F.left + A.right - E.right
              };
            }
          };
          return Z ? Q.absolute() : Q.relative();
        } else
          return {};
      }(), I = M === m && tn(document.body, "cursor", mn[C]), V = function(R) {
        R.stopPropagation(), he(R, M, "move");
        var pe = Et(R), L = {
          x: pe.x - oe.x,
          y: pe.y - oe.y
        };
        M === m && (L = De(C, L, A, E, Z));
        var q, ae;
        Z ? (q = E.top - A.top + L.y, ae = E.left - A.left + L.x) : (q = F.top + L.y, ae = F.left + L.x), M === g && e.fitParent && (q = Ae(p.minTop, q, p.maxTop), ae = Ae(p.minLeft, ae, p.maxLeft));
        var ze = D(D(D({
          position: "relative",
          top: q + "px",
          left: ae + "px",
          margin: "unset",
          touchAction: "none"
        }, Z && {
          position: "absolute",
          transform: "unset",
          width: E.width + "px",
          height: E.height + "px"
        }), L.width && {
          width: L.width + "px"
        }), L.height && {
          height: L.height + "px"
        });
        x.value = D(D({}, x.value), ze);
      }, N = function Q(R) {
        R.stopPropagation(), M === m && I && I(), setTimeout(function() {
          he(R, M, "end");
        }), Le("move", document, V), Le("up", document, Q);
      };
      Ie("move", document, V), Ie("up", document, N);
    }
    function i() {
      Ie("down", c.value, de), x.value.touchAction = "none";
    }
    function s() {
      Le("down", c.value, de);
    }
    function w() {
      O.resize = !0, ke(function() {
        Ie("down", r.value, de);
      });
    }
    function ce() {
      Le("down", r.value, de), O.resize = !1;
    }
    function De(u, m, g, C, M) {
      var oe = function(p) {
        var I, V = m[p.axis];
        V = e.fitParent ? Ae(p.min, V, p.max) : V;
        var N = Ae(p.minEdge, p.getEdge(V), p.maxEdge);
        return V = p.getOffsetAxis(N, M), I = {}, ve(I, p.edgeName, N), ve(I, p.axis, V), I;
      }, A = function(p, I, V, N) {
        var Q = C[I], R = g[p] - C[p], pe = nn(I);
        return {
          axis: V,
          edgeName: I,
          min: N ? R : -Q,
          max: N ? Q : R,
          minEdge: e["min".concat(pe)],
          maxEdge: e["max".concat(pe)],
          getEdge: function(q) {
            return C[I] - q * (N ? 1 : -1);
          },
          getOffsetAxis: function(q, ae) {
            var ze = C[I] - q;
            return ae ? N ? ze : 0 : (N ? 1 : -1) * ze / 2;
          }
        };
      }, E = {
        t: ["top", "height", "y", !0],
        b: ["bottom", "height", "y", !1],
        l: ["left", "width", "x", !0],
        r: ["right", "width", "x", !1]
      }, Z = {
        x: 0,
        y: 0
      };
      return u.split("").forEach(function(F) {
        var p = A.apply(void 0, ie(E[F]));
        Z = D(D({}, Z), oe(p));
      }), Z;
    }
    return {
      root: f,
      vfmContainer: l,
      vfmContent: c,
      vfmResize: r,
      vfmOverlayTransition: v,
      vfmTransition: h,
      computedOverlayTransition: Ye,
      computedTransition: Ke,
      visible: _,
      visibility: O,
      params: T,
      calculateZIndex: me,
      bindStyle: se,
      bindContentStyle: Xe,
      beforeOverlayEnter: Ze,
      afterOverlayEnter: Qe,
      beforeOverlayLeave: fe,
      afterOverlayLeave: Je,
      beforeModalEnter: $e,
      afterModalEnter: et,
      beforeModalLeave: tt,
      afterModalLeave: nt,
      onMousedown: ot,
      onMouseupContainer: at,
      onEsc: rt
    };
  }
}, it = At("data-v-2836fdb5");
It("data-v-2836fdb5");
var yn = {
  key: 0,
  ref: "vfmResize",
  class: "vfm__resize vfm--absolute vfm--inset vfm--prevent-none vfm--select-none vfm--touch-none"
};
Lt();
var gn = it(function(o, e, n, t, a, f) {
  return n.ssr || t.visible ? re((y(), P("div", {
    key: 0,
    ref: "root",
    style: t.bindStyle,
    class: ["vfm vfm--inset", [n.attach === !1 ? "vfm--fixed" : "vfm--absolute", {
      "vfm--prevent-none": n.preventClick
    }]],
    onKeydown: e[4] || (e[4] = Bt(function() {
      return t.onEsc && t.onEsc.apply(t, arguments);
    }, ["esc"]))
  }, [we(ct, Re(t.computedOverlayTransition, {
    onBeforeEnter: t.beforeOverlayEnter,
    onAfterEnter: t.afterOverlayEnter,
    onBeforeLeave: t.beforeOverlayLeave,
    onAfterLeave: t.afterOverlayLeave
  }), {
    default: it(function() {
      return [!n.hideOverlay && t.visibility.overlay ? (y(), P("div", {
        key: 0,
        class: ["vfm__overlay vfm--overlay vfm--absolute vfm--inset", n.overlayClass],
        style: n.overlayStyle
      }, null, 6)) : W("v-if", !0)];
    }),
    _: 1
  }, 16, ["onBeforeEnter", "onAfterEnter", "onBeforeLeave", "onAfterLeave"]), we(ct, Re(t.computedTransition, {
    onBeforeEnter: t.beforeModalEnter,
    onAfterEnter: t.afterModalEnter,
    onBeforeLeave: t.beforeModalLeave,
    onAfterLeave: t.afterModalLeave
  }), {
    default: it(function() {
      return [re(we("div", {
        ref: "vfmContainer",
        class: ["vfm__container vfm--absolute vfm--inset vfm--outline-none", n.classes],
        style: n.styles,
        "aria-expanded": t.visibility.modal.toString(),
        role: "dialog",
        "aria-modal": "true",
        tabindex: "-1",
        onMouseup: e[2] || (e[2] = Pe(function() {
          return t.onMouseupContainer && t.onMouseupContainer.apply(t, arguments);
        }, ["self"])),
        onMousedown: e[3] || (e[3] = Pe(function() {
          return t.onMousedown && t.onMousedown.apply(t, arguments);
        }, ["self"]))
      }, [we("div", {
        ref: "vfmContent",
        class: ["vfm__content", [n.contentClass, {
          "vfm--prevent-auto": n.preventClick
        }]],
        style: t.bindContentStyle,
        onMousedown: e[1] || (e[1] = function(l) {
          return t.onMousedown(null);
        })
      }, [jt(o.$slots, "default", {
        params: t.params,
        close: function() {
          return o.$emit("update:modelValue", !1);
        }
      }), t.visibility.resize && t.visibility.modal ? (y(), P("div", yn, [(y(!0), P(le, null, J(n.resizeDirections, function(l) {
        return y(), P("div", {
          key: l,
          direction: l,
          class: ["vfm--resize-".concat(l), "vfm--absolute vfm--prevent-auto"]
        }, null, 10, ["direction"]);
      }), 128))], 512)) : W("v-if", !0)], 38)], 46, ["aria-expanded"]), [[vt, t.visibility.modal]])];
    }),
    _: 3
  }, 16, ["onBeforeEnter", "onAfterEnter", "onBeforeLeave", "onAfterLeave"])], 38)), [[vt, !n.ssr || t.visible]]) : W("v-if", !0);
});
function hn(o, e) {
  e === void 0 && (e = {});
  var n = e.insertAt;
  if (!(!o || typeof document > "u")) {
    var t = document.head || document.getElementsByTagName("head")[0], a = document.createElement("style");
    a.type = "text/css", n === "top" && t.firstChild ? t.insertBefore(a, t.firstChild) : t.appendChild(a), a.styleSheet ? a.styleSheet.cssText = o : a.appendChild(document.createTextNode(o));
  }
}
var pn = `
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
hn(pn);
He.render = gn;
He.__scopeId = "data-v-2836fdb5";
He.__file = "lib/VueFinalModal.vue";
var ft = {
  props: {},
  methods: {
    slice: function(e) {
      this.api.dynamicModals.splice(e, 1);
    },
    beforeOpen: function(e, n, t) {
      var a = this;
      return Ut(function* () {
        e.ref.params.value = n.params, yield a.$nextTick(), yield a.$nextTick(), n.value || (a.slice(t), n.reject("show"));
      })();
    },
    isString: function(e) {
      return typeof e == "string";
    }
  }
}, bn = {
  class: "modals-container"
};
function wn(o, e, n, t, a, f) {
  return y(), P("div", bn, [(y(!0), P(le, null, J(o.api.dynamicModals, function(l, c) {
    return y(), P(yt(l.component), Re({
      key: l.id
    }, l.bind, {
      modelValue: l.value,
      "onUpdate:modelValue": function(v) {
        return l.value = v;
      }
    }, gt(l.on), {
      on_closed: function(v) {
        return f.slice(c);
      },
      on_beforeOpen: function(v) {
        return f.beforeOpen(v, l);
      },
      on_opened: l.opened
    }), Pt({
      _: 2
    }, [J(l.slots, function(r, v) {
      return {
        name: v,
        fn: Ot(function() {
          return [W(" eslint-disable vue/no-v-html "), f.isString(r) ? (y(), P("div", {
            key: 0,
            innerHTML: r
          }, null, 8, ["innerHTML"])) : (y(), P(yt(r.component), Re({
            key: 1
          }, r.bind, gt(r.on || {})), null, 16))];
        })
      };
    })]), 1040, ["modelValue", "onUpdate:modelValue", "on_closed", "on_beforeOpen", "on_opened"]);
  }), 128))]);
}
ft.render = wn;
ft.__file = "lib/ModalsContainer.vue";
function xn() {
  var o = null;
  return {
    show: function(n) {
      for (var t = this, a = arguments.length, f = new Array(a > 1 ? a - 1 : 0), l = 1; l < a; l++)
        f[l - 1] = arguments[l];
      switch (Ee(n)) {
        case "string":
          return this.toggle.apply(this, [n, !0].concat(f));
        case "object":
          return Promise.allSettled([new Promise(function(c, r) {
            var v = {
              value: !0,
              id: Symbol("dynamicModal"),
              component: o,
              bind: {},
              slots: {},
              on: {},
              params: f[0],
              reject: r,
              opened: function() {
                c("show");
              }
            };
            t.dynamicModals.push(mt(Object.assign(v, n)));
          })]);
      }
    },
    hide: function() {
      for (var n = arguments.length, t = new Array(n), a = 0; a < n; a++)
        t[a] = arguments[a];
      return this.toggle(t, !1);
    },
    hideAll: function() {
      return this.hide.apply(this, ie(this.openedModals.map(function(n) {
        return n.props.name;
      })));
    },
    toggle: function(n) {
      for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), f = 1; f < t; f++)
        a[f - 1] = arguments[f];
      var l = Array.isArray(n) ? this.get.apply(this, ie(n)) : this.get(n);
      return Promise.allSettled(l.map(function(c) {
        return c.toggle.apply(c, a);
      }));
    },
    get: function() {
      for (var n = arguments.length, t = new Array(n), a = 0; a < n; a++)
        t[a] = arguments[a];
      return this.modals.filter(function(f) {
        return t.includes(f.props.name);
      });
    },
    dynamicModals: mt([]),
    openedModals: [],
    modals: [],
    _setDefaultModal: function(n) {
      o = n;
    }
  };
}
function zt(o, e) {
  var n = D(D({}, o), {}, {
    props: D({}, o.props)
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
function En(o) {
  var e = zt(He, o);
  return o._setDefaultModal(e), e;
}
function Tn(o) {
  return zt(ft, o);
}
var Sn = "$vfm", _n = "VueFinalModal", On = "ModalsContainer", Cn = function() {
  var e, n = xn();
  return e = {}, ve(e, Sn, n), ve(e, _n, En(n)), ve(e, On, Tn(n)), e;
}, dt = Cn();
dt.$vfm;
var Mn = dt.VueFinalModal;
dt.ModalsContainer;
const kt = (o, e) => {
  const n = o.__vccOpts || o;
  for (const [t, a] of e)
    n[t] = a;
  return n;
}, Dn = {
  name: "EmojiPicker",
  emits: ["select"],
  setup(o, { emit: e }) {
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
    ], t = d(""), a = X(() => t.value ? n.filter((l) => l.includes(t.value)) : n);
    return {
      search: t,
      filteredEmojis: a,
      selectEmoji: (l) => {
        e("select", { i: l });
      }
    };
  }
}, zn = { class: "emoji-picker" }, kn = { class: "emoji-list" }, An = ["onClick"];
function In(o, e, n, t, a, f) {
  return y(), S("div", zn, [
    re(b("input", {
      "onUpdate:modelValue": e[0] || (e[0] = (l) => t.search = l),
      type: "text",
      placeholder: "Search emoji...",
      class: "w-full px-2 py-1 mb-2 bg-[#1a1b1f] text-white rounded border border-white/10"
    }, null, 512), [
      [xe, t.search]
    ]),
    b("div", kn, [
      (y(!0), S(le, null, J(t.filteredEmojis, (l) => (y(), S("button", {
        key: l,
        onClick: (c) => t.selectEmoji(l),
        class: "emoji-button"
      }, je(l), 9, An))), 128))
    ])
  ]);
}
const Ln = /* @__PURE__ */ kt(Dn, [["render", In], ["__scopeId", "data-v-c9042253"]]);
function Bn(o, e, n, t, a) {
  o.filter = `blur(${a}px)`, o.drawImage(
    e,
    n.x,
    n.y,
    t.width,
    t.height,
    n.x,
    n.y,
    t.width,
    t.height
  ), o.filter = "none";
}
function jn(o, e, n, t) {
  const a = o.getImageData(
    e.x,
    e.y,
    n.width,
    n.height
  );
  for (let f = 0; f < n.height; f += t)
    for (let l = 0; l < n.width; l += t) {
      const c = (f * n.width + l) * 4, r = a.data[c], v = a.data[c + 1], h = a.data[c + 2];
      for (let z = 0; z < t; z++)
        for (let k = 0; k < t; k++)
          if (l + k < n.width && f + z < n.height) {
            const _ = ((f + z) * n.width + (l + k)) * 4;
            a.data[_] = r, a.data[_ + 1] = v, a.data[_ + 2] = h;
          }
    }
  o.putImageData(a, e.x, e.y);
}
function Vn() {
  return [
    { position: "nw", style: { top: "-5px", left: "-5px", cursor: "nwse-resize" } },
    { position: "ne", style: { top: "-5px", right: "-5px", cursor: "nesw-resize" } },
    { position: "sw", style: { bottom: "-5px", left: "-5px", cursor: "nesw-resize" } },
    { position: "se", style: { bottom: "-5px", right: "-5px", cursor: "nwse-resize" } }
  ];
}
function Rn(o, e, n, t, a) {
  switch (o) {
    case "nw":
      n.width += e.x - t, n.height += e.y - a, e.x = t, e.y = a;
      break;
    case "ne":
      n.width = t - e.x, n.height += e.y - a, e.y = a;
      break;
    case "sw":
      n.width += e.x - t, n.height = a - e.y, e.x = t;
      break;
    case "se":
      n.width = t - e.x, n.height = a - e.y;
      break;
  }
  return { framePosition: e, frameSize: n };
}
const Pn = {
  name: "VueImageEditor",
  components: {
    VueFinalModal: Mn,
    EmojiPicker: Ln
  },
  props: {
    isOpen: {
      type: Boolean,
      required: !0
    },
    imageUrl: {
      type: String,
      required: !0
    },
    tools: {
      type: Array,
      default: () => ["blur", "pixelate", "text", "emoji"]
    }
  },
  emits: ["update:isOpen", "save"],
  setup(o, { emit: e }) {
    const n = d(null), t = d(null), a = d(null), f = d(null), l = d(null), c = d("blur"), r = d(!1), v = d(!1), h = d(!1), z = d(!1), k = d(!1), _ = d(null), O = d(""), Y = d("#ffffff"), K = d(24), ee = d(5), T = d({ x: 0, y: 0 }), x = d({ width: 100, height: 100 }), G = d({ x: 0, y: 0 }), B = d([]), j = d([]), ue = X(() => [
      { name: "blur", label: "Blur" },
      { name: "pixelate", label: "Pixelate" },
      { name: "text", label: "Text" },
      { name: "emoji", label: "Emoji" }
    ].filter((s) => o.tools.includes(s.name))), Ye = Vn(), Ke = X(() => ({
      left: `${T.value.x}px`,
      top: `${T.value.y}px`,
      width: `${x.value.width}px`,
      height: `${x.value.height}px`
    })), qe = (i) => ({
      left: `${i.x}px`,
      top: `${i.y}px`
    }), me = (i) => ({
      left: `${i.x}px`,
      top: `${i.y}px`,
      fontSize: `${i.size}px`
    }), se = async () => {
      t.value = await se(n.value, a.value, o.imageUrl), l.value = await new Promise((i) => {
        const s = new Image();
        s.onload = () => i(s), s.src = o.imageUrl;
      });
    }, Xe = (i) => {
      c.value = i, r.value = !0, i === "blur" || i === "pixelate" ? v.value = !0 : v.value = !1;
    }, ye = (i) => {
      h.value = !0, te(i);
    }, te = (i) => {
      if (!h.value)
        return;
      const s = n.value.getBoundingClientRect(), w = i.clientX - s.left, ce = i.clientY - s.top;
      (c.value === "blur" || c.value === "pixelate") && (T.value = { x: w, y: ce }, x.value = { width: 100, height: 100 });
    }, _e = () => {
      h.value = !1, (c.value === "blur" || c.value === "pixelate") && fe();
    }, ge = (i) => {
      z.value = !0;
      const s = n.value.getBoundingClientRect();
      G.value = {
        x: i.clientX - s.left - T.value.x,
        y: i.clientY - s.top - T.value.y
      };
    }, Oe = (i) => {
      if (!z.value)
        return;
      const s = n.value.getBoundingClientRect();
      T.value = {
        x: i.clientX - s.left - G.value.x,
        y: i.clientY - s.top - G.value.y
      };
    }, We = () => {
      z.value = !1, fe();
    }, Ge = (i) => {
      k.value = !0, _.value = i;
    }, Ze = (i) => {
      if (!k.value)
        return;
      const s = n.value.getBoundingClientRect(), w = i.clientX - s.left, ce = i.clientY - s.top, De = Rn(_.value, T.value, x.value, w, ce);
      T.value = De.framePosition, x.value = De.frameSize;
    }, Qe = () => {
      k.value = !1, _.value = null, fe();
    }, fe = () => {
      t.value.drawImage(l.value, 0, 0, n.value.width, n.value.height), c.value === "blur" ? Bn(t.value, n.value, T.value, x.value, ee.value) : c.value === "pixelate" && jn(t.value, n.value, T.value, x.value, ee.value);
    }, Je = () => {
      O.value && (B.value.push({
        text: O.value,
        x: 50,
        y: 50,
        color: Y.value,
        size: K.value,
        isDragging: !1
      }), O.value = "");
    }, $e = (i, s) => {
      const w = B.value[i];
      w.isDragging = !0, w.dragStartX = s.clientX - w.x, w.dragStartY = s.clientY - w.y;
    }, et = (i) => {
      B.value.forEach((s) => {
        s.isDragging && (s.x = i.clientX - s.dragStartX, s.y = i.clientY - s.dragStartY);
      });
    }, tt = () => {
      B.value.forEach((i) => {
        i.isDragging = !1;
      });
    }, nt = (i) => {
      const s = B.value[i];
      O.value = s.text, Y.value = s.color, K.value = s.size, B.value.splice(i, 1);
    }, ot = (i) => {
      B.value.splice(i, 1);
    }, at = (i) => {
      j.value.push({
        emoji: i.i,
        x: 50,
        y: 50,
        size: 24,
        isDragging: !1
      });
    }, rt = (i, s) => {
      const w = j.value[i];
      w.isDragging = !0, w.dragStartX = s.clientX - w.x, w.dragStartY = s.clientY - w.y;
    }, ne = (i) => {
      j.value.forEach((s) => {
        s.isDragging && (s.x = i.clientX - s.dragStartX, s.y = i.clientY - s.dragStartY);
      });
    }, Ce = () => {
      j.value.forEach((i) => {
        i.isDragging = !1;
      });
    }, he = (i) => {
      j.value.splice(i, 1);
    }, Me = () => {
      e("update:isOpen", !1);
    }, de = () => {
      const i = n.value.toDataURL();
      e("save", i), Me();
    };
    return _t(async () => {
      o.isOpen && await se();
    }), H(() => o.isOpen, async (i) => {
      i && await se();
    }), H(() => o.imageUrl, async () => {
      o.isOpen && await se();
    }), {
      canvas: n,
      canvasContainer: a,
      blurFrame: f,
      currentTool: c,
      showToolOptions: r,
      showBlurFrame: v,
      textInput: O,
      textColor: Y,
      textSize: K,
      effectIntensity: ee,
      framePosition: T,
      frameSize: x,
      textItems: B,
      emojiItems: j,
      availableTools: ue,
      resizeHandles: Ye,
      blurFrameStyle: Ke,
      getTextItemStyle: qe,
      getEmojiItemStyle: me,
      selectTool: Xe,
      startDrawing: ye,
      draw: te,
      stopDrawing: _e,
      startFrameDrag: ge,
      dragFrame: Oe,
      stopFrameDrag: We,
      startResize: Ge,
      resize: Ze,
      stopResize: Qe,
      applyEffect: fe,
      addText: Je,
      startTextDrag: $e,
      dragText: et,
      stopTextDrag: tt,
      editText: nt,
      deleteText: ot,
      addEmoji: at,
      startEmojiDrag: rt,
      dragEmoji: ne,
      stopEmojiDrag: Ce,
      deleteEmoji: he,
      handleClose: Me,
      handleSave: de
    };
  }
}, Fn = { class: "vue-image-editor" }, Nn = { class: "editor-container" }, Un = { class: "toolbar" }, Hn = ["onClick"], Yn = {
  class: "canvas-container",
  ref: "canvasContainer"
}, Kn = ["onMousedown", "onTouchstart"], qn = ["onMousedown", "onTouchstart"], Xn = ["onClick"], Wn = ["onClick"], Gn = ["onMousedown", "onTouchstart"], Zn = ["onClick"], Qn = {
  key: 0,
  class: "tool-options"
}, Jn = { key: 0 }, $n = { key: 1 }, eo = { key: 2 }, to = ["min", "max"], no = { class: "actions" };
function oo(o, e, n, t, a, f) {
  const l = ht("EmojiPicker"), c = ht("vue-final-modal");
  return y(), P(c, {
    modelValue: n.isOpen,
    "onUpdate:modelValue": e[17] || (e[17] = (r) => o.$emit("update:isOpen", r)),
    classes: "modal-container",
    "content-class": "modal-content"
  }, {
    default: Ot(() => [
      b("div", Fn, [
        b("div", Nn, [
          b("div", Un, [
            (y(!0), S(le, null, J(t.availableTools, (r) => (y(), S("button", {
              key: r.name,
              onClick: (v) => t.selectTool(r.name),
              class: Ft({ active: t.currentTool === r.name })
            }, je(r.label), 11, Hn))), 128))
          ]),
          b("div", Yn, [
            b("canvas", {
              ref: "canvas",
              onMousedown: e[0] || (e[0] = (...r) => t.startDrawing && t.startDrawing(...r)),
              onMousemove: e[1] || (e[1] = (...r) => t.draw && t.draw(...r)),
              onMouseup: e[2] || (e[2] = (...r) => t.stopDrawing && t.stopDrawing(...r)),
              onMouseleave: e[3] || (e[3] = (...r) => t.stopDrawing && t.stopDrawing(...r)),
              onTouchstart: e[4] || (e[4] = (...r) => t.startDrawing && t.startDrawing(...r)),
              onTouchmove: e[5] || (e[5] = (...r) => t.draw && t.draw(...r)),
              onTouchend: e[6] || (e[6] = (...r) => t.stopDrawing && t.stopDrawing(...r))
            }, null, 544),
            t.showBlurFrame ? (y(), S("div", {
              key: 0,
              ref: "blurFrame",
              class: "blur-frame",
              style: be(t.blurFrameStyle),
              onMousedown: e[7] || (e[7] = (...r) => t.startFrameDrag && t.startFrameDrag(...r)),
              onTouchstart: e[8] || (e[8] = (...r) => t.startFrameDrag && t.startFrameDrag(...r))
            }, [
              (y(!0), S(le, null, J(t.resizeHandles, (r) => (y(), S("div", {
                key: r.position,
                class: "resize-handle",
                style: be(r.style),
                onMousedown: Pe((v) => t.startResize(r.position), ["stop"]),
                onTouchstart: Pe((v) => t.startResize(r.position), ["stop"])
              }, null, 44, Kn))), 128))
            ], 36)) : W("", !0),
            (y(!0), S(le, null, J(t.textItems, (r, v) => (y(), S("div", {
              key: v,
              class: "text-item",
              style: be(t.getTextItemStyle(r)),
              onMousedown: (h) => t.startTextDrag(v, h),
              onTouchstart: (h) => t.startTextDrag(v, h)
            }, [
              b("div", {
                style: be({ color: r.color, fontSize: `${r.size}px` })
              }, je(r.text), 5),
              b("button", {
                onClick: (h) => t.editText(v),
                class: "edit-button"
              }, "Edit", 8, Xn),
              b("button", {
                onClick: (h) => t.deleteText(v),
                class: "delete-button"
              }, "Delete", 8, Wn)
            ], 44, qn))), 128)),
            (y(!0), S(le, null, J(t.emojiItems, (r, v) => (y(), S("div", {
              key: v,
              class: "emoji-item",
              style: be(t.getEmojiItemStyle(r)),
              onMousedown: (h) => t.startEmojiDrag(v, h),
              onTouchstart: (h) => t.startEmojiDrag(v, h)
            }, [
              Nt(je(r.emoji) + " ", 1),
              b("button", {
                onClick: (h) => t.deleteEmoji(v),
                class: "delete-button"
              }, "Delete", 8, Zn)
            ], 44, Gn))), 128))
          ], 512),
          t.showToolOptions ? (y(), S("div", Qn, [
            t.currentTool === "text" ? (y(), S("div", Jn, [
              re(b("input", {
                "onUpdate:modelValue": e[9] || (e[9] = (r) => t.textInput = r),
                placeholder: "Enter text"
              }, null, 512), [
                [xe, t.textInput]
              ]),
              re(b("input", {
                "onUpdate:modelValue": e[10] || (e[10] = (r) => t.textColor = r),
                type: "color"
              }, null, 512), [
                [xe, t.textColor]
              ]),
              re(b("input", {
                "onUpdate:modelValue": e[11] || (e[11] = (r) => t.textSize = r),
                type: "range",
                min: "12",
                max: "72"
              }, null, 512), [
                [xe, t.textSize]
              ]),
              b("button", {
                onClick: e[12] || (e[12] = (...r) => t.addText && t.addText(...r))
              }, "Add Text")
            ])) : W("", !0),
            t.currentTool === "emoji" ? (y(), S("div", $n, [
              we(l, { onSelect: t.addEmoji }, null, 8, ["onSelect"])
            ])) : W("", !0),
            t.currentTool === "blur" || t.currentTool === "pixelate" ? (y(), S("div", eo, [
              re(b("input", {
                "onUpdate:modelValue": e[13] || (e[13] = (r) => t.effectIntensity = r),
                type: "range",
                min: (t.currentTool === "pixelate", 1),
                max: (t.currentTool === "pixelate", 20),
                onInput: e[14] || (e[14] = (...r) => t.applyEffect && t.applyEffect(...r))
              }, null, 40, to), [
                [xe, t.effectIntensity]
              ])
            ])) : W("", !0)
          ])) : W("", !0),
          b("div", no, [
            b("button", {
              onClick: e[15] || (e[15] = (...r) => t.handleClose && t.handleClose(...r))
            }, "Cancel"),
            b("button", {
              onClick: e[16] || (e[16] = (...r) => t.handleSave && t.handleSave(...r))
            }, "Save")
          ])
        ])
      ])
    ]),
    _: 1
  }, 8, ["modelValue"]);
}
const ao = /* @__PURE__ */ kt(Pn, [["render", oo], ["__scopeId", "data-v-30c2a382"]]), lo = {
  install: (o) => {
    o.component("VueImageEditor", ao);
  }
};
export {
  ao as VueImageEditor,
  lo as default
};
