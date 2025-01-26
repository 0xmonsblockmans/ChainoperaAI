import {
    as as e,
    bR as l,
    r as a,
    at as i,
    bw as t,
    au as o,
    av as n,
    bl as r,
    aC as c,
    bN as s,
    a as p,
    d6 as k,
    bo as b,
    ax as d,
    aw as x,
    aB as u,
    aA as m,
    bp as y
} from "./index-CD-_LMey.js";
import {
    C as g
} from "./providerSetting-Cpco8HXt.js";
const f = "/resource/img/chainopera/logo-with-brand.png",
    v = {
        "bg-black": "",
        "px-140px": "",
        "lt-lg": "px-4"
    },
    h = {
        grid: "",
        "grid-cols-7": "",
        "text-white": "",
        "py-113px": "",
        "lt-lg": "py-8"
    },
    A = {
        "grid-col-span-3": "",
        flex: "~ flex-col gap-20 wrap",
        "lt-md": "grid-col-span-7 gap-8 flex-row items-end",
        relative: ""
    },
    _ = r("div", {
        flex: "~ flex-col gap-20 "
    }, [r("img", {
        class: "max-w-2/3",
        "object-contain": "",
        "object-top": "",
        src: f,
        alt: "logo"
    })], -1),
    w = {
        flex: "~ gap-8",
        "mt-4": "",
        text: "#D0D0D0"
    },
    C = ["href"],
    j = {
        "grid-col-span-4": "",
        relative: "",
        "text-22px": "",
        "lt-md": "grid-col-span-7 text-lg relative"
    },
    P = ["src"],
    z = {
        flex: "~ justify-evenly",
        "mt-6": "",
        "lt-md": "justify-between flex-wrap gap-xl",
        "z-2": "",
        relative: ""
    },
    B = {
        "font-500": "",
        "text-3xl": "",
        "mb-8": "",
        "lt-md": "text-xl mb-4"
    },
    D = {
        "ml-0": "",
        "pl-0": "",
        "space-y-4": "",
        "lt-md": "space-y-2",
        text: "#A2A2A2"
    },
    M = ["onClick"],
    R = ["href", "target"],
    T = {
        relative: "",
        "z-4": "",
        "m-0": "",
        "px-0": "",
        "py-4": "",
        flex: "~ justify-between",
        text: "#A2A2A2",
        "text-22px": "",
        "lt-md": "text-lg"
    },
    E = ["href"],
    S = e({
        __name: "FooterBar",
        setup(e) {
            const {
                push: f
            } = l(), S = "/resource/img/chainopera/home/global.png", U = a([{
                icon: "i-icon:co-x",
                link: g.X
            }, {
                icon: "i-icon:co-telegram",
                link: g.TelegramMain
            }]), W = a([ {
                label: "Resources",
                children: [{
                    label: "Whitepaper",
                    key: "Whitepaper",
                    link: "https://docs.chainoperaai.vip/chainopera-ai-os/ai-agent-society"
                }]
            }]), F = i([]);
            return (e, l) => {
                const a = y,
                    i = t("RouterLink");
                return o(), n("footer", v, [r("div", h, [r("div", A, [_, r("div", w, [(o(!0), n(c, null, s(p(U), (e => (o(), n(c, {
                    key: e.icon
                }, [p(k)(e.link) ? (o(), n("a", {
                    key: 1,
                    href: e.link,
                    class: "text-#A2A2A2"
                }, [x(a, {
                    icon: e.icon,
                    size: 34,
                    "cursor-pointer": "",
                    hover: "!text-primary"
                }, null, 8, ["icon"])], 8, C)) : (o(), b(i, {
                    key: 0,
                    to: e.link,
                    class: "text-#A2A2A2"
                }, {
                    default: d((() => [x(a, {
                        icon: e.icon,
                        size: 34,
                        "cursor-pointer": "",
                        hover: "!text-primary"
                    }, null, 8, ["icon"])])),
                    _: 2
                }, 1032, ["to"]))], 64)))), 128))])]), r("div", j, [r("img", {
                    src: S,
                    "object-cover": "",
                    absolute: "",
                    "left-0": "",
                    "top-0": "",
                    "lt-lg": "w-full h-full",
                    "z-1": ""
                }, null, 8, P), r("div", z, [(o(!0), n(c, null, s(p(W), (e => (o(), n("div", {
                    key: e.label
                }, [r("div", B, u(e.label), 1), r("ul", D, [(o(!0), n(c, null, s(e.children, (e => (o(), n("li", {
                    key: e.label,
                    hover: "scale-101 text-primary cursor-pointer transition-colors",
                    onClick: l => {
                        return a = e.link, void(k(a) ? window.open(a, "_blank") : f(a));
                        var a
                    }
                }, [p(k)(e.link) ? (o(), n("a", {
                    key: 1,
                    href: e.link,
                    target: "Blog" === e.label ? "_blank" : "_self",
                    class: "text-#A2A2A2"
                }, u(e.label), 9, R)) : (o(), b(i, {
                    key: 0,
                    to: e.link,
                    class: "text-#A2A2A2"
                }, {
                    default: d((() => [m(u(e.label), 1)])),
                    _: 2
                }, 1032, ["to"]))], 8, M)))), 128))])])))), 128))])])]), r("ul", T, [(o(!0), n(c, null, s(p(F), (e => (o(), n("li", {
                    key: e.label,
                    hover: "scale-101 text-primary cursor-pointer transition-colors"
                }, [p(k)(e.link) ? (o(), n("a", {
                    key: 1,
                    href: e.link,
                    class: "text-#A2A2A2"
                }, u(e.label), 9, E)) : (o(), b(i, {
                    key: 0,
                    to: e.link,
                    class: "text-#A2A2A2"
                }, {
                    default: d((() => [m(u(e.label), 1)])),
                    _: 2
                }, 1032, ["to"]))])))), 128))])])
            }
        }
    });
export {
    S as _, f as a
};
