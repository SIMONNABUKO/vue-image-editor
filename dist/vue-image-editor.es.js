import { ref as i, computed as X, openBlock as v, createElementBlock as g, withDirectives as C, createElementVNode as d, vModelText as I, Fragment as F, renderList as M, toDisplayString as V, onMounted as pt, watch as N, resolveComponent as mt, normalizeClass as bt, normalizeStyle as j, withModifiers as q, createCommentVNode as D, createTextVNode as Tt, createVNode as _t } from "vue";
const A = (r, e) => {
  const l = r.__vccOpts || r;
  for (const [t, s] of e)
    l[t] = s;
  return l;
}, Dt = {
  name: "EmojiPicker",
  emits: ["select"],
  setup(r, { emit: e }) {
    const l = [
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
    ], t = i(""), s = X(() => t.value ? l.filter((c) => c.includes(t.value)) : l);
    return {
      search: t,
      filteredEmojis: s,
      selectEmoji: (c) => {
        e("select", { i: c });
      }
    };
  }
}, Et = { class: "emoji-picker" }, kt = { class: "emoji-list" }, jt = ["onClick"];
function Ct(r, e, l, t, s, w) {
  return v(), g("div", Et, [
    C(d("input", {
      "onUpdate:modelValue": e[0] || (e[0] = (c) => t.search = c),
      type: "text",
      placeholder: "Search emoji...",
      class: "w-full px-2 py-1 mb-2 bg-[#1a1b1f] text-white rounded border border-white/10"
    }, null, 512), [
      [I, t.search]
    ]),
    d("div", kt, [
      (v(!0), g(F, null, M(t.filteredEmojis, (c) => (v(), g("button", {
        key: c,
        onClick: (o) => t.selectEmoji(c),
        class: "emoji-button"
      }, V(c), 9, jt))), 128))
    ])
  ]);
}
const It = /* @__PURE__ */ A(Dt, [["render", Ct], ["__scopeId", "data-v-c9042253"]]);
function Ft(r, e, l, t, s) {
  r.filter = `blur(${s}px)`, r.drawImage(
    e,
    l.x,
    l.y,
    t.width,
    t.height,
    l.x,
    l.y,
    t.width,
    t.height
  ), r.filter = "none";
}
function Mt(r, e, l, t) {
  const s = r.getImageData(
    e.x,
    e.y,
    l.width,
    l.height
  );
  for (let w = 0; w < l.height; w += t)
    for (let c = 0; c < l.width; c += t) {
      const o = (w * l.width + c) * 4, u = s.data[o], x = s.data[o + 1], E = s.data[o + 2];
      for (let f = 0; f < t; f++)
        for (let p = 0; p < t; p++)
          if (c + p < l.width && w + f < l.height) {
            const T = ((w + f) * l.width + (c + p)) * 4;
            s.data[T] = u, s.data[T + 1] = x, s.data[T + 2] = E;
          }
    }
  r.putImageData(s, e.x, e.y);
}
function Rt() {
  return [
    { position: "nw", style: { top: "-5px", left: "-5px", cursor: "nwse-resize" } },
    { position: "ne", style: { top: "-5px", right: "-5px", cursor: "nesw-resize" } },
    { position: "sw", style: { bottom: "-5px", left: "-5px", cursor: "nesw-resize" } },
    { position: "se", style: { bottom: "-5px", right: "-5px", cursor: "nwse-resize" } }
  ];
}
function Vt(r, e, l, t, s) {
  switch (r) {
    case "nw":
      l.width += e.x - t, l.height += e.y - s, e.x = t, e.y = s;
      break;
    case "ne":
      l.width = t - e.x, l.height += e.y - s, e.y = s;
      break;
    case "sw":
      l.width += e.x - t, l.height = s - e.y, e.x = t;
      break;
    case "se":
      l.width = t - e.x, l.height = s - e.y;
      break;
  }
  return { framePosition: e, frameSize: l };
}
const Bt = {
  name: "VueImageEditor",
  components: {
    EmojiPicker: It
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
  emits: ["close", "save"],
  setup(r, { emit: e }) {
    const l = i(null), t = i(null), s = i(null), w = i(null), c = i(null), o = i("blur"), u = i(!1), x = i(!1), E = i(!1), f = i(!1), p = i(!1), T = i(null), k = i(""), B = i("#ffffff"), S = i(24), z = i(5), h = i({ x: 0, y: 0 }), m = i({ width: 100, height: 100 }), U = i({ x: 0, y: 0 }), b = i([]), _ = i([]), L = X(() => [
      { name: "blur", label: "Blur" },
      { name: "pixelate", label: "Pixelate" },
      { name: "text", label: "Text" },
      { name: "emoji", label: "Emoji" }
    ].filter((a) => r.tools.includes(a.name))), G = Rt(), J = X(() => ({
      left: `${h.value.x}px`,
      top: `${h.value.y}px`,
      width: `${m.value.width}px`,
      height: `${m.value.height}px`
    })), K = (n) => ({
      left: `${n.x}px`,
      top: `${n.y}px`
    }), Q = (n) => ({
      left: `${n.x}px`,
      top: `${n.y}px`,
      fontSize: `${n.size}px`
    }), R = async () => {
      t.value = await R(l.value, s.value, r.imageUrl);
    }, W = (n) => {
      o.value = n, u.value = !0, n === "blur" || n === "pixelate" ? x.value = !0 : x.value = !1;
    }, Z = (n) => {
      E.value = !0, Y(n);
    }, Y = (n) => {
      if (!E.value)
        return;
      const a = l.value.getBoundingClientRect(), y = n.clientX - a.left, O = n.clientY - a.top;
      (o.value === "blur" || o.value === "pixelate") && (h.value = { x: y, y: O }, m.value = { width: 100, height: 100 });
    }, P = () => {
      E.value = !1;
    }, $ = (n) => {
      f.value = !0;
      const a = l.value.getBoundingClientRect();
      U.value = {
        x: n.clientX - a.left - h.value.x,
        y: n.clientY - a.top - h.value.y
      };
    }, tt = (n) => {
      if (!f.value)
        return;
      const a = l.value.getBoundingClientRect();
      h.value = {
        x: n.clientX - a.left - U.value.x,
        y: n.clientY - a.top - U.value.y
      };
    }, et = () => {
      f.value = !1;
    }, ot = (n) => {
      p.value = !0, T.value = n;
    }, nt = (n) => {
      if (!p.value)
        return;
      const a = l.value.getBoundingClientRect(), y = n.clientX - a.left, O = n.clientY - a.top, H = Vt(T.value, h.value, m.value, y, O);
      h.value = H.framePosition, m.value = H.frameSize;
    }, lt = () => {
      p.value = !1, T.value = null;
    }, at = () => {
      t.value.drawImage(c.value, 0, 0, l.value.width, l.value.height), o.value === "blur" ? Ft(t.value, l.value, h.value, m.value, z.value) : o.value === "pixelate" && Mt(t.value, h.value, m.value, z.value);
    }, st = () => {
      k.value && (b.value.push({
        text: k.value,
        x: 50,
        y: 50,
        color: B.value,
        size: S.value
      }), k.value = "");
    }, rt = (n, a) => {
      const y = b.value[n];
      y.isDragging = !0, y.dragStartX = a.clientX - y.x, y.dragStartY = a.clientY - y.y;
    }, it = (n) => {
      b.value.forEach((a) => {
        a.isDragging && (a.x = n.clientX - a.dragStartX, a.y = n.clientY - a.dragStartY);
      });
    }, ct = () => {
      b.value.forEach((n) => {
        n.isDragging = !1;
      });
    }, ut = (n) => {
      const a = b.value[n];
      k.value = a.text, B.value = a.color, S.value = a.size, b.value.splice(n, 1);
    }, dt = (n) => {
      b.value.splice(n, 1);
    }, vt = (n) => {
      _.value.push({
        emoji: n.i,
        x: 50,
        y: 50,
        size: 24
      });
    }, gt = (n, a) => {
      const y = _.value[n];
      y.isDragging = !0, y.dragStartX = a.clientX - y.x, y.dragStartY = a.clientY - y.y;
    }, xt = (n) => {
      _.value.forEach((a) => {
        a.isDragging && (a.x = n.clientX - a.dragStartX, a.y = n.clientY - a.dragStartY);
      });
    }, yt = () => {
      _.value.forEach((n) => {
        n.isDragging = !1;
      });
    }, ht = (n) => {
      _.value.splice(n, 1);
    }, wt = () => {
      e("close");
    }, ft = () => {
      const n = l.value.toDataURL();
      e("save", n);
    };
    return pt(async () => {
      r.isOpen && await R();
    }), N(() => r.isOpen, async (n) => {
      n && await R();
    }), N(() => r.imageUrl, async () => {
      r.isOpen && await R();
    }), {
      canvas: l,
      canvasContainer: s,
      blurFrame: w,
      currentTool: o,
      showToolOptions: u,
      showBlurFrame: x,
      textInput: k,
      textColor: B,
      textSize: S,
      effectIntensity: z,
      framePosition: h,
      frameSize: m,
      textItems: b,
      emojiItems: _,
      availableTools: L,
      resizeHandles: G,
      blurFrameStyle: J,
      getTextItemStyle: K,
      getEmojiItemStyle: Q,
      selectTool: W,
      startDrawing: Z,
      draw: Y,
      stopDrawing: P,
      startFrameDrag: $,
      dragFrame: tt,
      stopFrameDrag: et,
      startResize: ot,
      resize: nt,
      stopResize: lt,
      applyEffect: at,
      addText: st,
      startTextDrag: rt,
      dragText: it,
      stopTextDrag: ct,
      editText: ut,
      deleteText: dt,
      addEmoji: vt,
      startEmojiDrag: gt,
      dragEmoji: xt,
      stopEmojiDrag: yt,
      deleteEmoji: ht,
      handleClose: wt,
      handleSave: ft
    };
  }
}, St = {
  key: 0,
  class: "vue-image-editor"
}, zt = { class: "editor-container" }, Ut = { class: "toolbar" }, Ot = ["onClick"], Xt = {
  class: "canvas-container",
  ref: "canvasContainer"
}, Yt = ["onMousedown", "onTouchstart"], Ht = ["onMousedown", "onTouchstart"], Nt = ["onClick"], qt = ["onClick"], At = ["onMousedown", "onTouchstart"], Lt = ["onClick"], Gt = {
  key: 0,
  class: "tool-options"
}, Jt = { key: 0 }, Kt = { key: 1 }, Qt = { key: 2 }, Wt = ["min", "max"], Zt = { class: "actions" };
function Pt(r, e, l, t, s, w) {
  const c = mt("EmojiPicker");
  return l.isOpen ? (v(), g("div", St, [
    d("div", zt, [
      d("div", Ut, [
        (v(!0), g(F, null, M(t.availableTools, (o) => (v(), g("button", {
          key: o.name,
          onClick: (u) => t.selectTool(o.name),
          class: bt({ active: t.currentTool === o.name })
        }, V(o.label), 11, Ot))), 128))
      ]),
      d("div", Xt, [
        d("canvas", {
          ref: "canvas",
          onMousedown: e[0] || (e[0] = (...o) => t.startDrawing && t.startDrawing(...o)),
          onMousemove: e[1] || (e[1] = (...o) => t.draw && t.draw(...o)),
          onMouseup: e[2] || (e[2] = (...o) => t.stopDrawing && t.stopDrawing(...o)),
          onMouseleave: e[3] || (e[3] = (...o) => t.stopDrawing && t.stopDrawing(...o)),
          onTouchstart: e[4] || (e[4] = (...o) => t.startDrawing && t.startDrawing(...o)),
          onTouchmove: e[5] || (e[5] = (...o) => t.draw && t.draw(...o)),
          onTouchend: e[6] || (e[6] = (...o) => t.stopDrawing && t.stopDrawing(...o))
        }, null, 544),
        t.showBlurFrame ? (v(), g("div", {
          key: 0,
          ref: "blurFrame",
          class: "blur-frame",
          style: j(t.blurFrameStyle),
          onMousedown: e[7] || (e[7] = (...o) => t.startFrameDrag && t.startFrameDrag(...o)),
          onTouchstart: e[8] || (e[8] = (...o) => t.startFrameDrag && t.startFrameDrag(...o))
        }, [
          (v(!0), g(F, null, M(t.resizeHandles, (o) => (v(), g("div", {
            key: o.position,
            class: "resize-handle",
            style: j(o.style),
            onMousedown: q((u) => t.startResize(o.position), ["stop"]),
            onTouchstart: q((u) => t.startResize(o.position), ["stop"])
          }, null, 44, Yt))), 128))
        ], 36)) : D("", !0),
        (v(!0), g(F, null, M(t.textItems, (o, u) => (v(), g("div", {
          key: u,
          class: "text-item",
          style: j(t.getTextItemStyle(o)),
          onMousedown: (x) => t.startTextDrag(u, x),
          onTouchstart: (x) => t.startTextDrag(u, x)
        }, [
          d("div", {
            style: j({ color: o.color, fontSize: `${o.size}px` })
          }, V(o.text), 5),
          d("button", {
            onClick: (x) => t.editText(u),
            class: "edit-button"
          }, "Edit", 8, Nt),
          d("button", {
            onClick: (x) => t.deleteText(u),
            class: "delete-button"
          }, "Delete", 8, qt)
        ], 44, Ht))), 128)),
        (v(!0), g(F, null, M(t.emojiItems, (o, u) => (v(), g("div", {
          key: u,
          class: "emoji-item",
          style: j(t.getEmojiItemStyle(o)),
          onMousedown: (x) => t.startEmojiDrag(u, x),
          onTouchstart: (x) => t.startEmojiDrag(u, x)
        }, [
          Tt(V(o.emoji) + " ", 1),
          d("button", {
            onClick: (x) => t.deleteEmoji(u),
            class: "delete-button"
          }, "Delete", 8, Lt)
        ], 44, At))), 128))
      ], 512),
      t.showToolOptions ? (v(), g("div", Gt, [
        t.currentTool === "text" ? (v(), g("div", Jt, [
          C(d("input", {
            "onUpdate:modelValue": e[9] || (e[9] = (o) => t.textInput = o),
            placeholder: "Enter text"
          }, null, 512), [
            [I, t.textInput]
          ]),
          C(d("input", {
            "onUpdate:modelValue": e[10] || (e[10] = (o) => t.textColor = o),
            type: "color"
          }, null, 512), [
            [I, t.textColor]
          ]),
          C(d("input", {
            "onUpdate:modelValue": e[11] || (e[11] = (o) => t.textSize = o),
            type: "range",
            min: "12",
            max: "72"
          }, null, 512), [
            [I, t.textSize]
          ]),
          d("button", {
            onClick: e[12] || (e[12] = (...o) => t.addText && t.addText(...o))
          }, "Add Text")
        ])) : D("", !0),
        t.currentTool === "emoji" ? (v(), g("div", Kt, [
          _t(c, { onSelect: t.addEmoji }, null, 8, ["onSelect"])
        ])) : D("", !0),
        t.currentTool === "blur" || t.currentTool === "pixelate" ? (v(), g("div", Qt, [
          C(d("input", {
            "onUpdate:modelValue": e[13] || (e[13] = (o) => t.effectIntensity = o),
            type: "range",
            min: (t.currentTool === "pixelate", 1),
            max: (t.currentTool === "pixelate", 20),
            onInput: e[14] || (e[14] = (...o) => t.applyEffect && t.applyEffect(...o))
          }, null, 40, Wt), [
            [I, t.effectIntensity]
          ])
        ])) : D("", !0)
      ])) : D("", !0),
      d("div", Zt, [
        d("button", {
          onClick: e[15] || (e[15] = (...o) => t.handleClose && t.handleClose(...o))
        }, "Cancel"),
        d("button", {
          onClick: e[16] || (e[16] = (...o) => t.handleSave && t.handleSave(...o))
        }, "Save")
      ])
    ])
  ])) : D("", !0);
}
const $t = /* @__PURE__ */ A(Bt, [["render", Pt], ["__scopeId", "data-v-dfac2ae7"]]), ee = {
  install: (r) => {
    r.component("VueImageEditor", $t);
  }
};
export {
  $t as VueImageEditor,
  ee as default
};
