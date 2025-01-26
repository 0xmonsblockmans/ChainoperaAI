import { u as e, M as a } from "./useDevice-Be2_Ffvg.js";
import { h as i } from "./header-CCyWHX47.js";
import { u as t } from "./index-Bwg3cq0P.js";
import {
  as as o,
  r as l,
  ef as n,
  au as s,
  av as r,
  bl as c,
  aB as p,
  cV as d,
  a as m,
  eg as k,
  bm as u,
  aC as b,
  bN as x,
  bo as y,
  aD as f,
  bp as g,
  bR as h,
  aw as v,
  ax as w,
  bO as I,
  d6 as _,
  bh as C,
  c as j,
  aL as A,
  u as O,
  d0 as D,
  by as P,
  cR as z,
  dS as B,
  bA as S,
} from "./index-CD-_LMey.js";
import { C as M } from "./providerSetting-Cpco8HXt.js";
import { _ as L } from "./index-Dm6PLCKU.js";
import { D as R } from "./index-CbJghgD8.js";
import { A as T } from "./PageWrapper-C1AFMCuy.js";
import "./propTypes-BC7VambV.js";
import "./useTimeout-BLGhBY5o.js";
import "./useAttrs--cAViymp.js";
import "./tsxHelper-Df7xpk8O.js";
import "./index-CFK4MrIO.js";
import "./BasicTitle-fJl6kVxu.js";
import "./Scrollbar-Rbj_Wbff.js";
import "./index-n0aIOsji.js";
import "./List-D03MP5jn.js";
import "./index-CEgJ759D.js";
import "./debounce-CpAotpg8.js";
import "./isNumeric-DFkNItwV.js";
import "./DownOutlined-Bf58SkgE.js";
import "./useBreakpoint-A6M3sc9i.js";
import "./responsiveObserve-DSQD3s2u.js";
import "./useFlexGapSupport-BbXPfDOZ.js";
const $ = { "px-4": "", class: "group", "cursor-pointer": "", relative: "" },
  G = { "text-lg": "" },
  N = ["onClick"],
  U = ["onClick"],
  E = o({
    __name: "CoDropMenuItem",
    props: { item: {}, dark: { type: Boolean } },
    emits: ["click"],
    setup(e) {
      const a = e,
        i = l(),
        t = n(i);
      return (e, o) => {
        const l = g;
        return (
          s(),
          r("div", $, [
            c(
              "span",
              {
                ref_key: "triggerRef",
                ref: i,
                style: d({ height: `${m(k)}px`, lineHeight: `${m(k)}px` }),
                class: u([
                  "menu-item text-20px opacity-70",
                  a.dark ? "text-white" : "text-black",
                ]),
                "group-hover": "opacity-100 scale-101",
                onClick: o[0] || (o[0] = (a) => e.$emit("click", e.item)),
              },
              p(e.item.label),
              7
            ),
            e.item.subItems && e.item.subItems.length > 0
              ? (s(),
                r(
                  "div",
                  {
                    key: 0,
                    class: u([
                      "hidden backdrop-blur-5px opacity-0 transition-opacity fixed",
                      a.dark ? "bg-codark" : "bg-white",
                    ]),
                    "group-hover": "z-1000  opacity-100 block",
                    "border-t": "1px solid primary",
                    fixed: "",
                    "w-full": "",
                    "p-10": "",
                    "left-0": "",
                    style: d({
                      paddingLeft: `${m(t).elementPositionX.value}px`,
                      top: `${m(k)}px`,
                    }),
                  },
                  [
                    e.item.subItems &&
                    e.item.subItems.some((e) => e.subItems?.length)
                      ? (s(),
                        r(
                          "div",
                          {
                            key: 0,
                            class: u([
                              "flex gap-8",
                              a.dark ? "text-white" : "text-black",
                            ]),
                            "text-lg": "",
                          },
                          [
                            (s(!0),
                            r(
                              b,
                              null,
                              x(
                                e.item.subItems,
                                (i) => (
                                  s(),
                                  r("div", { key: i.label }, [
                                    c("span", G, p(i.label), 1),
                                    i.subItems
                                      ? (s(!0),
                                        r(
                                          b,
                                          { key: 0 },
                                          x(
                                            i.subItems,
                                            (i) => (
                                              s(),
                                              r(
                                                "div",
                                                {
                                                  key: i.label,
                                                  flex: "~ items-center gap-4",
                                                  class:
                                                    "p-2 rounded-md hover-text-primary",
                                                  onClick: (a) =>
                                                    e.$emit("click", i),
                                                },
                                                [
                                                  i.icon
                                                    ? (s(),
                                                      y(
                                                        l,
                                                        {
                                                          key: 0,
                                                          icon: i.icon,
                                                          size: 33,
                                                          color: a.dark
                                                            ? "#fff"
                                                            : "#000",
                                                        },
                                                        null,
                                                        8,
                                                        ["icon", "color"]
                                                      ))
                                                    : f("", !0),
                                                  c(
                                                    "span",
                                                    null,
                                                    p(i.label),
                                                    1
                                                  ),
                                                ],
                                                8,
                                                N
                                              )
                                            )
                                          ),
                                          128
                                        ))
                                      : f("", !0),
                                  ])
                                )
                              ),
                              128
                            )),
                          ],
                          2
                        ))
                      : (s(),
                        r(
                          "div",
                          {
                            key: 1,
                            class: u([
                              "flex flex-col",
                              a.dark ? "text-white" : "text-black",
                            ]),
                            "text-lg": "",
                          },
                          [
                            (s(!0),
                            r(
                              b,
                              null,
                              x(
                                e.item.subItems,
                                (i) => (
                                  s(),
                                  r(
                                    "div",
                                    {
                                      key: i.label,
                                      "w-50": "",
                                      flex: "~ items-center gap-4",
                                      class:
                                        "p-2 rounded-md hover-text-primary",
                                      onClick: (a) => e.$emit("click", i),
                                    },
                                    [
                                      i.icon
                                        ? (s(),
                                          y(
                                            l,
                                            {
                                              key: 0,
                                              size: 33,
                                              color: a.dark ? "#fff" : "#000",
                                              icon: i.icon,
                                            },
                                            null,
                                            8,
                                            ["color", "icon"]
                                          ))
                                        : f("", !0),
                                      c("span", null, p(i.label), 1),
                                    ],
                                    8,
                                    U
                                  )
                                )
                              ),
                              128
                            )),
                          ],
                          2
                        )),
                  ],
                  6
                ))
              : f("", !0),
          ])
        );
      };
    },
  }),
  V = { key: 0, flex: "~ center text-xl" },
  W = { flex: "~ gap-4 center", "mx-16": "" },
  F = { flex: "~ cols gap-4 center", "mb-8": "" },
  H = { class: "flex flex-col py-2" },
  X = ["onClick"],
  Q = { text: "base" },
  Y = o({
    __name: "CoDropMenu",
    props: { dark: { type: Boolean } },
    setup(a) {
      const i = a,
        { push: t } = h(),
        { isSmallDesktop: o } = e(),
        n = l([
          
          {
            label: "Whitepaper",
            key: "Whitepaper",
            link: "https://paper.chainopera.ai",
          },
          
        ]),
        d = l([
          { icon: "i-icon:co-x", link: M.X },
          { icon: "i-icon:co-telegram", link: M.TelegramMain },
        ]),
        k = l(!1);
      function C(e = "") {
        _(e) ? window.open(e, "_blank") : t(e), (k.value = !1);
      }
      return (e, a) => {
        const t = g,
          l = L,
          h = R;
        return m(o)
          ? (s(),
            r(
              b,
              { key: 1 },
              [
                v(t, {
                  size: "24",
                  icon: "i-ant-design:menu-outlined",
                  class: "!text-primary",
                  "cursor-pointer": "",
                  onClick: a[0] || (a[0] = (e) => (k.value = !m(k))),
                }),
                v(
                  h,
                  {
                    open: m(k),
                    "onUpdate:open":
                      a[1] || (a[1] = (e) => (I(k) ? (k.value = e) : null)),
                    width: "max(90vw,300px)",
                    class: u([
                      "border-l-1 border-l-dashed border-primary shadow-2xl",
                      [i.dark ? "bg-codark" : ""],
                    ]),
                  },
                  {
                    closeIcon: w(() => [
                      v(
                        t,
                        {
                          icon: "i-ant-design:close-outlined",
                          color: i.dark ? "#fff" : "#000",
                          size: "32",
                          class:
                            "!hover:text-primary !hover-rotate-180deg transition-all",
                        },
                        null,
                        8,
                        ["color"]
                      ),
                    ]),
                    default: w(() => [
                      c("div", F, [
                        (s(!0),
                        r(
                          b,
                          null,
                          x(
                            m(d),
                            (e) => (
                              s(),
                              y(
                                t,
                                {
                                  key: e.icon,
                                  icon: e.icon,
                                  size: 32,
                                  "cursor-pointer": "",
                                  hover: "!text-primary",
                                  onClick: (a) => C(e.link),
                                },
                                null,
                                8,
                                ["icon", "onClick"]
                              )
                            )
                          ),
                          128
                        )),
                      ]),
                      v(
                        l,
                        {
                          "tree-data": m(n),
                          "auto-expand-parent": "",
                          "default-expand-all": "",
                          class: u([i.dark ? "bg-codark" : ""]),
                          "field-names": {
                            children: "subItems",
                            title: "label",
                            key: "label",
                          },
                        },
                        {
                          title: w(({ label: e, key: a, icon: o, link: l }) => [
                            c("div", H, [
                              (s(),
                              r(
                                "div",
                                {
                                  key: a,
                                  flex: "~ items-center gap-4",
                                  class: "px-2 rounded-md",
                                  onClick: (e) => C(l),
                                },
                                [
                                  o
                                    ? (s(),
                                      y(
                                        t,
                                        {
                                          key: 0,
                                          size: "33px",
                                          color: i.dark ? "#fff" : "#000",
                                          icon: o,
                                        },
                                        null,
                                        8,
                                        ["color", "icon"]
                                      ))
                                    : f("", !0),
                                  c("span", Q, p(e), 1),
                                ],
                                8,
                                X
                              )),
                            ]),
                          ]),
                          _: 1,
                        },
                        8,
                        ["tree-data", "class"]
                      ),
                    ]),
                    _: 1,
                  },
                  8,
                  ["open", "class"]
                ),
              ],
              64
            ))
          : (s(),
            r("div", V, [
              (s(!0),
              r(
                b,
                null,
                x(
                  m(n),
                  (e) => (
                    s(),
                    y(
                      E,
                      {
                        key: e.label,
                        dark: i.dark,
                        item: e,
                        onClick: (e) => C(e.link),
                      },
                      null,
                      8,
                      ["dark", "item", "onClick"]
                    )
                  )
                ),
                128
              )),
              c("div", W, [
                (s(!0),
                r(
                  b,
                  null,
                  x(
                    m(d),
                    (e) => (
                      s(),
                      y(
                        t,
                        {
                          key: e.icon,
                          icon: e.icon,
                          color: i.dark ? "#fff" : "#000",
                          hover: "!text-primary",
                          "cursor-pointer": "",
                          onClick: (a) => C(e.link),
                        },
                        null,
                        8,
                        ["icon", "color", "onClick"]
                      )
                    )
                  ),
                  128
                )),
              ]),
            ]));
      };
    },
  }),
  Z = { class: "flex gap-8 items-center", "lt-md": "gap-2" },
  q = { key: 1, class: "flex items-center gap-1" },
  J = ["title"],
  K = o({
    __name: "co-index",
    props: { dark: { type: Boolean }, theme: {} },
    setup(o) {
      const n = o,
        { isSmallDesktop: d } = e(),
        { t: k } = O(),
        b = C();
      l("");
      const { replace: x, push: g } = h(),
        I = j(() => b.getToken && b.getUserInfo);
      const _ = j(() => {
          const {
            realName: e = "",
            avatar: a,
            desc: t,
            account: o,
            id: l,
          } = b.getUserInfo || {};
          return { realName: e, avatar: a || i, desc: t, account: o, id: l };
        }),
        [M, { openModal: L }] = t();
      function R(e) {
        switch (e.key) {
          case "billing":
            g({ name: P.BILLING });
            break;
          case "logout":
            b.confirmLoginOut(!1);
            break;
          case "version":
            g({ name: P.VERSION_INFO });
            break;
          case "Documentation":
          case "Doc":
            window.open(D);
            break;
          case "lock":
            L(!0);
            break;
          case "profile":
            x({ name: P.SYS_PROFILE });
            break;
          case "Discord":
            window.open("https://discord.com/invite/9xkW8ae6RV");
            break;
          case "aboutus":
            g({ name: P.CO_HOME_ABOUTUS });
            break;
          case "career":
            g({ path: "/careers" });
            break;
          case "linkedin":
            window.open("https://www.linkedin.com/company/tensoropera/");
            break;
          case "twitter":
            window.open("https://twitter.com/TensorOpera");
        }
      }
      return (
        A(async () => {}),
        (e, i) => {
          const t = T,
            o = z,
            l = B,
            b = S;
          return (
            s(),
            r("div", Z, [
              v(Y, { dark: n.dark }, null, 8, ["dark"]),
              m(I) && !e.$route.meta.hideLogin
                ? (s(),
                  y(
                    b,
                    {
                      key: 0,
                      mode: "horizontal",
                      class: u(`my-menu--${n.theme}`),
                      "disabled-overflow": "",
                      onClick: i[0] || (i[0] = (e) => R(e)),
                    },
                    {
                      default: w(() => [
                        v(
                          l,
                          { key: "Account", "px-0": "" },
                          {
                            title: w(() => [
                              m(d)
                                ? (s(),
                                  y(
                                    o,
                                    { key: 0, title: m(_).account },
                                    {
                                      default: w(() => [
                                        v(
                                          t,
                                          { src: m(_).avatar, size: 32 },
                                          null,
                                          8,
                                          ["src"]
                                        ),
                                      ]),
                                      _: 1,
                                    },
                                    8,
                                    ["title"]
                                  ))
                                : (s(),
                                  r("span", q, [
                                    v(
                                      t,
                                      { src: m(_).avatar, size: 32 },
                                      null,
                                      8,
                                      ["src"]
                                    ),
                                    c(
                                      "div",
                                      {
                                        class: "w-20 text-truncate",
                                        title: m(_).account,
                                      },
                                      p(m(_).account),
                                      9,
                                      J
                                    ),
                                  ])),
                            ]),
                            default: w(() => [
                              m(d)
                                ? (s(),
                                  y(
                                    a,
                                    { key: 0, text: m(_).account },
                                    null,
                                    8,
                                    ["text"]
                                  ))
                                : f("", !0),
                              v(a, {
                                "item-index": "profile",
                                text: "Profile",
                                icon: "i-ion:ios-contact",
                              }),
                              v(a, {
                                "item-index": "billing",
                                text: "Billing",
                                icon: "i-ph:coin",
                              }),
                              v(
                                a,
                                {
                                  "item-index": "logout",
                                  text: m(k)(
                                    "layout.header.dropdownItemLoginOut"
                                  ),
                                  icon: "i-ion:power-outline",
                                },
                                null,
                                8,
                                ["text"]
                              ),
                            ]),
                            _: 1,
                          }
                        ),
                      ]),
                      _: 1,
                    },
                    8,
                    ["class"]
                  ))
                : f("", !0),
            ])
          );
        }
      );
    },
  });
export { K as default };
