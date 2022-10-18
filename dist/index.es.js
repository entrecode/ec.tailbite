import * as L from "react";
import je, { useState as T, useEffect as G, Fragment as me, forwardRef as Ce, useRef as Re, useCallback as Ke, createContext as Pr, useContext as qt, useMemo as Ie, useId as Fn, useLayoutEffect as Jt } from "react";
import de from "dayjs";
import J from "tailwind-styled-components";
import { Switch as Tt, Disclosure as St, Transition as be, Dialog as ze, Popover as at, Listbox as yt, Menu as it, Tab as pt, Combobox as ht } from "@headlessui/react";
import { Controller as Ae, useForm as st } from "react-hook-form";
import An from "react-hot-toast";
import { Accounts as Ln, PublicAPI as On, Session as Tn, DataManager as jn } from "ec.sdk";
import { useLocation as Pn, useParams as Br, useNavigate as Zt } from "react-router-dom";
import He from "swr";
import { useDrop as zr, useDrag as Bn } from "react-dnd";
import { NativeTypes as zn } from "react-dnd-html5-backend";
import { usePopper as Hn } from "react-popper";
import { SketchPicker as Yn } from "react-color";
import { interpolateSinebow as Vn } from "d3-scale-chromatic";
import Un from "react-input-mask";
import Wn from "@monaco-editor/react";
import Gn from "medium-editor";
import * as qn from "jsoneditor";
import Jn from "react-simplemde-editor";
var lt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, $t = { exports: {} }, mt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nr;
function Zn() {
  if (Nr)
    return mt;
  Nr = 1;
  var e = je, r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(c, h, d) {
    var y, g = {}, v = null, w = null;
    d !== void 0 && (v = "" + d), h.key !== void 0 && (v = "" + h.key), h.ref !== void 0 && (w = h.ref);
    for (y in h)
      a.call(h, y) && !i.hasOwnProperty(y) && (g[y] = h[y]);
    if (c && c.defaultProps)
      for (y in h = c.defaultProps, h)
        g[y] === void 0 && (g[y] = h[y]);
    return { $$typeof: r, type: c, key: v, ref: w, props: g, _owner: o.current };
  }
  return mt.Fragment = n, mt.jsx = s, mt.jsxs = s, mt;
}
var gt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cr;
function Xn() {
  return Cr || (Cr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = je, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), C = Symbol.iterator, x = "@@iterator";
    function N(m) {
      if (m === null || typeof m != "object")
        return null;
      var S = C && m[C] || m[x];
      return typeof S == "function" ? S : null;
    }
    var b = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function D(m) {
      {
        for (var S = arguments.length, M = new Array(S > 1 ? S - 1 : 0), j = 1; j < S; j++)
          M[j - 1] = arguments[j];
        H("error", m, M);
      }
    }
    function H(m, S, M) {
      {
        var j = b.ReactDebugCurrentFrame, te = j.getStackAddendum();
        te !== "" && (S += "%s", M = M.concat([te]));
        var ie = M.map(function(Z) {
          return String(Z);
        });
        ie.unshift("Warning: " + S), Function.prototype.apply.call(console[m], console, ie);
      }
    }
    var Y = !1, O = !1, F = !1, R = !1, E = !1, P;
    P = Symbol.for("react.module.reference");
    function B(m) {
      return !!(typeof m == "string" || typeof m == "function" || m === a || m === i || E || m === o || m === d || m === y || R || m === w || Y || O || F || typeof m == "object" && m !== null && (m.$$typeof === v || m.$$typeof === g || m.$$typeof === s || m.$$typeof === c || m.$$typeof === h || m.$$typeof === P || m.getModuleId !== void 0));
    }
    function X(m, S, M) {
      var j = m.displayName;
      if (j)
        return j;
      var te = S.displayName || S.name || "";
      return te !== "" ? M + "(" + te + ")" : M;
    }
    function Q(m) {
      return m.displayName || "Context";
    }
    function ee(m) {
      if (m == null)
        return null;
      if (typeof m.tag == "number" && D("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof m == "function")
        return m.displayName || m.name || null;
      if (typeof m == "string")
        return m;
      switch (m) {
        case a:
          return "Fragment";
        case n:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case d:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof m == "object")
        switch (m.$$typeof) {
          case c:
            var S = m;
            return Q(S) + ".Consumer";
          case s:
            var M = m;
            return Q(M._context) + ".Provider";
          case h:
            return X(m, m.render, "ForwardRef");
          case g:
            var j = m.displayName || null;
            return j !== null ? j : ee(m.type) || "Memo";
          case v: {
            var te = m, ie = te._payload, Z = te._init;
            try {
              return ee(Z(ie));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var oe = Object.assign, q = 0, fe, ne, $e, ae, V, _e, pe;
    function tt() {
    }
    tt.__reactDisabledLog = !0;
    function ut() {
      {
        if (q === 0) {
          fe = console.log, ne = console.info, $e = console.warn, ae = console.error, V = console.group, _e = console.groupCollapsed, pe = console.groupEnd;
          var m = {
            configurable: !0,
            enumerable: !0,
            value: tt,
            writable: !0
          };
          Object.defineProperties(console, {
            info: m,
            log: m,
            warn: m,
            error: m,
            group: m,
            groupCollapsed: m,
            groupEnd: m
          });
        }
        q++;
      }
    }
    function we() {
      {
        if (q--, q === 0) {
          var m = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: oe({}, m, {
              value: fe
            }),
            info: oe({}, m, {
              value: ne
            }),
            warn: oe({}, m, {
              value: $e
            }),
            error: oe({}, m, {
              value: ae
            }),
            group: oe({}, m, {
              value: V
            }),
            groupCollapsed: oe({}, m, {
              value: _e
            }),
            groupEnd: oe({}, m, {
              value: pe
            })
          });
        }
        q < 0 && D("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Le = b.ReactCurrentDispatcher, Ye;
    function Oe(m, S, M) {
      {
        if (Ye === void 0)
          try {
            throw Error();
          } catch (te) {
            var j = te.stack.trim().match(/\n( *(at )?)/);
            Ye = j && j[1] || "";
          }
        return `
` + Ye + m;
      }
    }
    var ge = !1, ve;
    {
      var Ge = typeof WeakMap == "function" ? WeakMap : Map;
      ve = new Ge();
    }
    function qe(m, S) {
      if (!m || ge)
        return "";
      {
        var M = ve.get(m);
        if (M !== void 0)
          return M;
      }
      var j;
      ge = !0;
      var te = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ie;
      ie = Le.current, Le.current = null, ut();
      try {
        if (S) {
          var Z = function() {
            throw Error();
          };
          if (Object.defineProperty(Z.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Z, []);
            } catch (Ve) {
              j = Ve;
            }
            Reflect.construct(m, [], Z);
          } else {
            try {
              Z.call();
            } catch (Ve) {
              j = Ve;
            }
            m.call(Z.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ve) {
            j = Ve;
          }
          m();
        }
      } catch (Ve) {
        if (Ve && j && typeof Ve.stack == "string") {
          for (var W = Ve.stack.split(`
`), ke = j.stack.split(`
`), ue = W.length - 1, he = ke.length - 1; ue >= 1 && he >= 0 && W[ue] !== ke[he]; )
            he--;
          for (; ue >= 1 && he >= 0; ue--, he--)
            if (W[ue] !== ke[he]) {
              if (ue !== 1 || he !== 1)
                do
                  if (ue--, he--, he < 0 || W[ue] !== ke[he]) {
                    var Fe = `
` + W[ue].replace(" at new ", " at ");
                    return m.displayName && Fe.includes("<anonymous>") && (Fe = Fe.replace("<anonymous>", m.displayName)), typeof m == "function" && ve.set(m, Fe), Fe;
                  }
                while (ue >= 1 && he >= 0);
              break;
            }
        }
      } finally {
        ge = !1, Le.current = ie, we(), Error.prepareStackTrace = te;
      }
      var nt = m ? m.displayName || m.name : "", kr = nt ? Oe(nt) : "";
      return typeof m == "function" && ve.set(m, kr), kr;
    }
    function u(m, S, M) {
      return qe(m, !1);
    }
    function p(m) {
      var S = m.prototype;
      return !!(S && S.isReactComponent);
    }
    function f(m, S, M) {
      if (m == null)
        return "";
      if (typeof m == "function")
        return qe(m, p(m));
      if (typeof m == "string")
        return Oe(m);
      switch (m) {
        case d:
          return Oe("Suspense");
        case y:
          return Oe("SuspenseList");
      }
      if (typeof m == "object")
        switch (m.$$typeof) {
          case h:
            return u(m.render);
          case g:
            return f(m.type, S, M);
          case v: {
            var j = m, te = j._payload, ie = j._init;
            try {
              return f(ie(te), S, M);
            } catch {
            }
          }
        }
      return "";
    }
    var $ = Object.prototype.hasOwnProperty, _ = {}, I = b.ReactDebugCurrentFrame;
    function U(m) {
      if (m) {
        var S = m._owner, M = f(m.type, m._source, S ? S.type : null);
        I.setExtraStackFrame(M);
      } else
        I.setExtraStackFrame(null);
    }
    function se(m, S, M, j, te) {
      {
        var ie = Function.call.bind($);
        for (var Z in m)
          if (ie(m, Z)) {
            var W = void 0;
            try {
              if (typeof m[Z] != "function") {
                var ke = Error((j || "React class") + ": " + M + " type `" + Z + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof m[Z] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ke.name = "Invariant Violation", ke;
              }
              W = m[Z](S, Z, j, M, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ue) {
              W = ue;
            }
            W && !(W instanceof Error) && (U(te), D("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", j || "React class", M, Z, typeof W), U(null)), W instanceof Error && !(W.message in _) && (_[W.message] = !0, U(te), D("Failed %s type: %s", M, W.message), U(null));
          }
      }
    }
    var ce = Array.isArray;
    function xe(m) {
      return ce(m);
    }
    function Je(m) {
      {
        var S = typeof Symbol == "function" && Symbol.toStringTag, M = S && m[Symbol.toStringTag] || m.constructor.name || "Object";
        return M;
      }
    }
    function Me(m) {
      try {
        return fr(m), !1;
      } catch {
        return !0;
      }
    }
    function fr(m) {
      return "" + m;
    }
    function hr(m) {
      if (Me(m))
        return D("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Je(m)), fr(m);
    }
    var ft = b.ReactCurrentOwner, vn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, mr, gr, Ft;
    Ft = {};
    function yn(m) {
      if ($.call(m, "ref")) {
        var S = Object.getOwnPropertyDescriptor(m, "ref").get;
        if (S && S.isReactWarning)
          return !1;
      }
      return m.ref !== void 0;
    }
    function bn(m) {
      if ($.call(m, "key")) {
        var S = Object.getOwnPropertyDescriptor(m, "key").get;
        if (S && S.isReactWarning)
          return !1;
      }
      return m.key !== void 0;
    }
    function xn(m, S) {
      if (typeof m.ref == "string" && ft.current && S && ft.current.stateNode !== S) {
        var M = ee(ft.current.type);
        Ft[M] || (D('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ee(ft.current.type), m.ref), Ft[M] = !0);
      }
    }
    function wn(m, S) {
      {
        var M = function() {
          mr || (mr = !0, D("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", S));
        };
        M.isReactWarning = !0, Object.defineProperty(m, "key", {
          get: M,
          configurable: !0
        });
      }
    }
    function kn(m, S) {
      {
        var M = function() {
          gr || (gr = !0, D("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", S));
        };
        M.isReactWarning = !0, Object.defineProperty(m, "ref", {
          get: M,
          configurable: !0
        });
      }
    }
    var Nn = function(m, S, M, j, te, ie, Z) {
      var W = {
        $$typeof: r,
        type: m,
        key: S,
        ref: M,
        props: Z,
        _owner: ie
      };
      return W._store = {}, Object.defineProperty(W._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(W, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: j
      }), Object.defineProperty(W, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: te
      }), Object.freeze && (Object.freeze(W.props), Object.freeze(W)), W;
    };
    function Cn(m, S, M, j, te) {
      {
        var ie, Z = {}, W = null, ke = null;
        M !== void 0 && (hr(M), W = "" + M), bn(S) && (hr(S.key), W = "" + S.key), yn(S) && (ke = S.ref, xn(S, te));
        for (ie in S)
          $.call(S, ie) && !vn.hasOwnProperty(ie) && (Z[ie] = S[ie]);
        if (m && m.defaultProps) {
          var ue = m.defaultProps;
          for (ie in ue)
            Z[ie] === void 0 && (Z[ie] = ue[ie]);
        }
        if (W || ke) {
          var he = typeof m == "function" ? m.displayName || m.name || "Unknown" : m;
          W && wn(Z, he), ke && kn(Z, he);
        }
        return Nn(m, W, ke, te, j, ft.current, Z);
      }
    }
    var At = b.ReactCurrentOwner, pr = b.ReactDebugCurrentFrame;
    function rt(m) {
      if (m) {
        var S = m._owner, M = f(m.type, m._source, S ? S.type : null);
        pr.setExtraStackFrame(M);
      } else
        pr.setExtraStackFrame(null);
    }
    var Lt;
    Lt = !1;
    function Ot(m) {
      return typeof m == "object" && m !== null && m.$$typeof === r;
    }
    function vr() {
      {
        if (At.current) {
          var m = ee(At.current.type);
          if (m)
            return `

Check the render method of \`` + m + "`.";
        }
        return "";
      }
    }
    function Sn(m) {
      {
        if (m !== void 0) {
          var S = m.fileName.replace(/^.*[\\\/]/, ""), M = m.lineNumber;
          return `

Check your code at ` + S + ":" + M + ".";
        }
        return "";
      }
    }
    var yr = {};
    function $n(m) {
      {
        var S = vr();
        if (!S) {
          var M = typeof m == "string" ? m : m.displayName || m.name;
          M && (S = `

Check the top-level render call using <` + M + ">.");
        }
        return S;
      }
    }
    function br(m, S) {
      {
        if (!m._store || m._store.validated || m.key != null)
          return;
        m._store.validated = !0;
        var M = $n(S);
        if (yr[M])
          return;
        yr[M] = !0;
        var j = "";
        m && m._owner && m._owner !== At.current && (j = " It was passed a child from " + ee(m._owner.type) + "."), rt(m), D('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', M, j), rt(null);
      }
    }
    function xr(m, S) {
      {
        if (typeof m != "object")
          return;
        if (xe(m))
          for (var M = 0; M < m.length; M++) {
            var j = m[M];
            Ot(j) && br(j, S);
          }
        else if (Ot(m))
          m._store && (m._store.validated = !0);
        else if (m) {
          var te = N(m);
          if (typeof te == "function" && te !== m.entries)
            for (var ie = te.call(m), Z; !(Z = ie.next()).done; )
              Ot(Z.value) && br(Z.value, S);
        }
      }
    }
    function Dn(m) {
      {
        var S = m.type;
        if (S == null || typeof S == "string")
          return;
        var M;
        if (typeof S == "function")
          M = S.propTypes;
        else if (typeof S == "object" && (S.$$typeof === h || S.$$typeof === g))
          M = S.propTypes;
        else
          return;
        if (M) {
          var j = ee(S);
          se(M, m.props, "prop", j, m);
        } else if (S.PropTypes !== void 0 && !Lt) {
          Lt = !0;
          var te = ee(S);
          D("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", te || "Unknown");
        }
        typeof S.getDefaultProps == "function" && !S.getDefaultProps.isReactClassApproved && D("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Rn(m) {
      {
        for (var S = Object.keys(m.props), M = 0; M < S.length; M++) {
          var j = S[M];
          if (j !== "children" && j !== "key") {
            rt(m), D("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", j), rt(null);
            break;
          }
        }
        m.ref !== null && (rt(m), D("Invalid attribute `ref` supplied to `React.Fragment`."), rt(null));
      }
    }
    function wr(m, S, M, j, te, ie) {
      {
        var Z = B(m);
        if (!Z) {
          var W = "";
          (m === void 0 || typeof m == "object" && m !== null && Object.keys(m).length === 0) && (W += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ke = Sn(te);
          ke ? W += ke : W += vr();
          var ue;
          m === null ? ue = "null" : xe(m) ? ue = "array" : m !== void 0 && m.$$typeof === r ? (ue = "<" + (ee(m.type) || "Unknown") + " />", W = " Did you accidentally export a JSX literal instead of a component?") : ue = typeof m, D("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ue, W);
        }
        var he = Cn(m, S, M, te, ie);
        if (he == null)
          return he;
        if (Z) {
          var Fe = S.children;
          if (Fe !== void 0)
            if (j)
              if (xe(Fe)) {
                for (var nt = 0; nt < Fe.length; nt++)
                  xr(Fe[nt], m);
                Object.freeze && Object.freeze(Fe);
              } else
                D("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              xr(Fe, m);
        }
        return m === a ? Rn(he) : Dn(he), he;
      }
    }
    function En(m, S, M) {
      return wr(m, S, M, !0);
    }
    function Mn(m, S, M) {
      return wr(m, S, M, !1);
    }
    var In = Mn, _n = En;
    gt.Fragment = a, gt.jsx = In, gt.jsxs = _n;
  }()), gt;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Zn() : e.exports = Xn();
})($t);
const re = $t.exports.Fragment, t = $t.exports.jsx, l = $t.exports.jsxs;
function Qn({
  title: e,
  titleId: r,
  ...n
}, a) {
  return /* @__PURE__ */ l("svg", {
    ...Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      "aria-hidden": "true",
      ref: a,
      "aria-labelledby": r
    }, n),
    children: [e ? /* @__PURE__ */ t("title", {
      id: r,
      children: e
    }) : null, /* @__PURE__ */ t("path", {
      fillRule: "evenodd",
      d: "M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z",
      clipRule: "evenodd"
    })]
  });
}
const Kn = L.forwardRef(Qn), ea = Kn;
function ta({
  title: e,
  titleId: r,
  ...n
}, a) {
  return /* @__PURE__ */ l("svg", {
    ...Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      "aria-hidden": "true",
      ref: a,
      "aria-labelledby": r
    }, n),
    children: [e ? /* @__PURE__ */ t("title", {
      id: r,
      children: e
    }) : null, /* @__PURE__ */ t("path", {
      fillRule: "evenodd",
      d: "M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z",
      clipRule: "evenodd"
    })]
  });
}
const ra = L.forwardRef(ta), na = ra;
function aa({
  title: e,
  titleId: r,
  ...n
}, a) {
  return /* @__PURE__ */ l("svg", {
    ...Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      "aria-hidden": "true",
      ref: a,
      "aria-labelledby": r
    }, n),
    children: [e ? /* @__PURE__ */ t("title", {
      id: r,
      children: e
    }) : null, /* @__PURE__ */ t("path", {
      fillRule: "evenodd",
      d: "M3 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 5.25zm0 4.5A.75.75 0 013.75 9h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z",
      clipRule: "evenodd"
    })]
  });
}
const ia = L.forwardRef(aa), oa = ia;
function sa({
  title: e,
  titleId: r,
  ...n
}, a) {
  return /* @__PURE__ */ l("svg", {
    ...Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      "aria-hidden": "true",
      ref: a,
      "aria-labelledby": r
    }, n),
    children: [e ? /* @__PURE__ */ t("title", {
      id: r,
      children: e
    }) : null, /* @__PURE__ */ t("path", {
      fillRule: "evenodd",
      d: "M2.25 4.5A.75.75 0 013 3.75h14.25a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75zm14.47 3.97a.75.75 0 011.06 0l3.75 3.75a.75.75 0 11-1.06 1.06L18 10.81V21a.75.75 0 01-1.5 0V10.81l-2.47 2.47a.75.75 0 11-1.06-1.06l3.75-3.75zM2.25 9A.75.75 0 013 8.25h9.75a.75.75 0 010 1.5H3A.75.75 0 012.25 9zm0 4.5a.75.75 0 01.75-.75h5.25a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75z",
      clipRule: "evenodd"
    })]
  });
}
const la = L.forwardRef(sa), ca = la;
function da({
  title: e,
  titleId: r,
  ...n
}, a) {
  return /* @__PURE__ */ l("svg", {
    ...Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      "aria-hidden": "true",
      ref: a,
      "aria-labelledby": r
    }, n),
    children: [e ? /* @__PURE__ */ t("title", {
      id: r,
      children: e
    }) : null, /* @__PURE__ */ t("path", {
      fillRule: "evenodd",
      d: "M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z",
      clipRule: "evenodd"
    })]
  });
}
const ua = L.forwardRef(da), Hr = ua;
function fa({
  title: e,
  titleId: r,
  ...n
}, a) {
  return /* @__PURE__ */ l("svg", {
    ...Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      "aria-hidden": "true",
      ref: a,
      "aria-labelledby": r
    }, n),
    children: [e ? /* @__PURE__ */ t("title", {
      id: r,
      children: e
    }) : null, /* @__PURE__ */ t("path", {
      fillRule: "evenodd",
      d: "M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z",
      clipRule: "evenodd"
    })]
  });
}
const ha = L.forwardRef(fa), Yr = ha;
function ma({
  title: e,
  titleId: r,
  ...n
}, a) {
  return /* @__PURE__ */ l("svg", {
    ...Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      "aria-hidden": "true",
      ref: a,
      "aria-labelledby": r
    }, n),
    children: [e ? /* @__PURE__ */ t("title", {
      id: r,
      children: e
    }) : null, /* @__PURE__ */ t("path", {
      fillRule: "evenodd",
      d: "M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z",
      clipRule: "evenodd"
    })]
  });
}
const ga = L.forwardRef(ma), pa = ga;
function va({
  title: e,
  titleId: r,
  ...n
}, a) {
  return /* @__PURE__ */ l("svg", {
    ...Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      "aria-hidden": "true",
      ref: a,
      "aria-labelledby": r
    }, n),
    children: [e ? /* @__PURE__ */ t("title", {
      id: r,
      children: e
    }) : null, /* @__PURE__ */ t("path", {
      fillRule: "evenodd",
      d: "M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z",
      clipRule: "evenodd"
    })]
  });
}
const ya = L.forwardRef(va), ba = ya;
function xa({
  title: e,
  titleId: r,
  ...n
}, a) {
  return /* @__PURE__ */ l("svg", {
    ...Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      "aria-hidden": "true",
      ref: a,
      "aria-labelledby": r
    }, n),
    children: [e ? /* @__PURE__ */ t("title", {
      id: r,
      children: e
    }) : null, /* @__PURE__ */ t("path", {
      fillRule: "evenodd",
      d: "M11.47 4.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 01-1.06 1.06L12 6.31 8.78 9.53a.75.75 0 01-1.06-1.06l3.75-3.75zm-3.75 9.75a.75.75 0 011.06 0L12 17.69l3.22-3.22a.75.75 0 111.06 1.06l-3.75 3.75a.75.75 0 01-1.06 0l-3.75-3.75a.75.75 0 010-1.06z",
      clipRule: "evenodd"
    })]
  });
}
const wa = L.forwardRef(xa), ka = wa;
function Na({
  title: e,
  titleId: r,
  ...n
}, a) {
  return /* @__PURE__ */ l("svg", {
    ...Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      "aria-hidden": "true",
      ref: a,
      "aria-labelledby": r
    }, n),
    children: [e ? /* @__PURE__ */ t("title", {
      id: r,
      children: e
    }) : null, /* @__PURE__ */ t("path", {
      fillRule: "evenodd",
      d: "M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z",
      clipRule: "evenodd"
    })]
  });
}
const Ca = L.forwardRef(Na), Xt = Ca;
function Sa({
  title: e,
  titleId: r,
  ...n
}, a) {
  return /* @__PURE__ */ l("svg", {
    ...Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      "aria-hidden": "true",
      ref: a,
      "aria-labelledby": r
    }, n),
    children: [e ? /* @__PURE__ */ t("title", {
      id: r,
      children: e
    }) : null, /* @__PURE__ */ t("path", {
      fillRule: "evenodd",
      d: "M17.663 3.118c.225.015.45.032.673.05C19.876 3.298 21 4.604 21 6.109v9.642a3 3 0 01-3 3V16.5c0-5.922-4.576-10.775-10.384-11.217.324-1.132 1.3-2.01 2.548-2.114.224-.019.448-.036.673-.051A3 3 0 0113.5 1.5H15a3 3 0 012.663 1.618zM12 4.5A1.5 1.5 0 0113.5 3H15a1.5 1.5 0 011.5 1.5H12z",
      clipRule: "evenodd"
    }), /* @__PURE__ */ t("path", {
      d: "M3 8.625c0-1.036.84-1.875 1.875-1.875h.375A3.75 3.75 0 019 10.5v1.875c0 1.036.84 1.875 1.875 1.875h1.875A3.75 3.75 0 0116.5 18v2.625c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625v-12z"
    }), /* @__PURE__ */ t("path", {
      d: "M10.5 10.5a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963 5.23 5.23 0 00-3.434-1.279h-1.875a.375.375 0 01-.375-.375V10.5z"
    })]
  });
}
const $a = L.forwardRef(Sa), Vr = $a;
function Da({
  title: e,
  titleId: r,
  ...n
}, a) {
  return /* @__PURE__ */ l("svg", {
    ...Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      "aria-hidden": "true",
      ref: a,
      "aria-labelledby": r
    }, n),
    children: [e ? /* @__PURE__ */ t("title", {
      id: r,
      children: e
    }) : null, /* @__PURE__ */ t("path", {
      fillRule: "evenodd",
      d: "M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z",
      clipRule: "evenodd"
    })]
  });
}
const Ra = L.forwardRef(Da), Ea = Ra;
function Ma({
  title: e,
  titleId: r,
  ...n
}, a) {
  return /* @__PURE__ */ l("svg", {
    ...Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      "aria-hidden": "true",
      ref: a,
      "aria-labelledby": r
    }, n),
    children: [e ? /* @__PURE__ */ t("title", {
      id: r,
      children: e
    }) : null, /* @__PURE__ */ t("path", {
      fillRule: "evenodd",
      d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd"
    })]
  });
}
const Ia = L.forwardRef(Ma), _a = Ia;
function Fa({
  title: e,
  titleId: r,
  ...n
}, a) {
  return /* @__PURE__ */ l("svg", {
    ...Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      "aria-hidden": "true",
      ref: a,
      "aria-labelledby": r
    }, n),
    children: [e ? /* @__PURE__ */ t("title", {
      id: r,
      children: e
    }) : null, /* @__PURE__ */ t("path", {
      fillRule: "evenodd",
      d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd"
    })]
  });
}
const Aa = L.forwardRef(Fa), La = Aa;
function Oa({
  title: e,
  titleId: r,
  ...n
}, a) {
  return /* @__PURE__ */ l("svg", {
    ...Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      "aria-hidden": "true",
      ref: a,
      "aria-labelledby": r
    }, n),
    children: [e ? /* @__PURE__ */ t("title", {
      id: r,
      children: e
    }) : null, /* @__PURE__ */ t("path", {
      fillRule: "evenodd",
      d: "M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z",
      clipRule: "evenodd"
    })]
  });
}
const Ta = L.forwardRef(Oa), Ur = Ta;
function ja({
  title: e,
  titleId: r,
  ...n
}, a) {
  return /* @__PURE__ */ l("svg", {
    ...Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      "aria-hidden": "true",
      ref: a,
      "aria-labelledby": r
    }, n),
    children: [e ? /* @__PURE__ */ t("title", {
      id: r,
      children: e
    }) : null, /* @__PURE__ */ t("path", {
      d: "M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"
    })]
  });
}
const Pa = L.forwardRef(ja), Qt = Pa;
function Ba({
  title: e,
  titleId: r,
  ...n
}, a) {
  return /* @__PURE__ */ l("svg", {
    ...Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      "aria-hidden": "true",
      ref: a,
      "aria-labelledby": r
    }, n),
    children: [e ? /* @__PURE__ */ t("title", {
      id: r,
      children: e
    }) : null, /* @__PURE__ */ t("path", {
      fillRule: "evenodd",
      d: "M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z",
      clipRule: "evenodd"
    })]
  });
}
const za = L.forwardRef(Ba), Wr = za;
function Ha({
  title: e,
  titleId: r,
  ...n
}, a) {
  return /* @__PURE__ */ l("svg", {
    ...Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      "aria-hidden": "true",
      ref: a,
      "aria-labelledby": r
    }, n),
    children: [e ? /* @__PURE__ */ t("title", {
      id: r,
      children: e
    }) : null, /* @__PURE__ */ t("path", {
      fillRule: "evenodd",
      d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd"
    })]
  });
}
const Ya = L.forwardRef(Ha), Va = Ya;
function Ua({
  title: e,
  titleId: r,
  ...n
}, a) {
  return /* @__PURE__ */ l("svg", {
    ...Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      "aria-hidden": "true",
      ref: a,
      "aria-labelledby": r
    }, n),
    children: [e ? /* @__PURE__ */ t("title", {
      id: r,
      children: e
    }) : null, /* @__PURE__ */ t("path", {
      fillRule: "evenodd",
      d: "M3 6a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm9.75 0a3 3 0 013-3H18a3 3 0 013 3v2.25a3 3 0 01-3 3h-2.25a3 3 0 01-3-3V6zM3 15.75a3 3 0 013-3h2.25a3 3 0 013 3V18a3 3 0 01-3 3H6a3 3 0 01-3-3v-2.25zm9.75 0a3 3 0 013-3H18a3 3 0 013 3V18a3 3 0 01-3 3h-2.25a3 3 0 01-3-3v-2.25z",
      clipRule: "evenodd"
    })]
  });
}
const Wa = L.forwardRef(Ua), Ga = Wa;
function qa({
  title: e,
  titleId: r,
  ...n
}, a) {
  return /* @__PURE__ */ l("svg", {
    ...Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      "aria-hidden": "true",
      ref: a,
      "aria-labelledby": r
    }, n),
    children: [e ? /* @__PURE__ */ t("title", {
      id: r,
      children: e
    }) : null, /* @__PURE__ */ t("path", {
      fillRule: "evenodd",
      d: "M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z",
      clipRule: "evenodd"
    })]
  });
}
const Ja = L.forwardRef(qa), Dt = Ja;
function Za({
  title: e,
  titleId: r,
  ...n
}, a) {
  return /* @__PURE__ */ l("svg", {
    ...Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      "aria-hidden": "true",
      ref: a,
      "aria-labelledby": r
    }, n),
    children: [e ? /* @__PURE__ */ t("title", {
      id: r,
      children: e
    }) : null, /* @__PURE__ */ t("path", {
      fillRule: "evenodd",
      d: "M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z",
      clipRule: "evenodd"
    })]
  });
}
const Xa = L.forwardRef(Za), Qa = Xa;
function A(...e) {
  return e.filter(Boolean).join(" ");
}
function Ka(e) {
  const {
    value: r = "",
    onChange: n,
    placeholder: a = "Suchen...",
    onSearchClick: o,
    inputClassName: i,
    autoFocus: s
  } = e;
  return /* @__PURE__ */ l("div", {
    className: "relative rounded-md shadow-sm",
    children: [/* @__PURE__ */ t("div", {
      className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
      children: /* @__PURE__ */ t(Ur, {
        className: "h-5 w-5 text-gray-400",
        "aria-hidden": "true",
        onClick: () => o?.()
      })
    }), o && r !== "" && /* @__PURE__ */ t("div", {
      className: "absolute right-0 pr-3 inset-y-0 top-1 flex items-center",
      children: /* @__PURE__ */ t("div", {
        onClick: o,
        className: "text-xs font-extralight text-gray-400 dark:text-gray-900",
        children: "\u21A9"
      })
    }), /* @__PURE__ */ t("input", {
      type: "text",
      value: r,
      ref: (c) => setTimeout(() => s && c?.focus(), 0),
      onKeyDown: (c) => o && c.code === "Enter" && o(),
      onChange: (c) => n(c.target.value),
      className: A("focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-gray-300", i),
      placeholder: a
    })]
  });
}
function ei({
  title: e,
  titleId: r,
  ...n
}, a) {
  return /* @__PURE__ */ l("svg", {
    ...Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      "aria-hidden": "true",
      ref: a,
      "aria-labelledby": r
    }, n),
    children: [e ? /* @__PURE__ */ t("title", {
      id: r,
      children: e
    }) : null, /* @__PURE__ */ t("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
    })]
  });
}
const ti = L.forwardRef(ei), ri = ti;
function ni({
  title: e,
  titleId: r,
  ...n
}, a) {
  return /* @__PURE__ */ l("svg", {
    ...Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      "aria-hidden": "true",
      ref: a,
      "aria-labelledby": r
    }, n),
    children: [e ? /* @__PURE__ */ t("title", {
      id: r,
      children: e
    }) : null, /* @__PURE__ */ t("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
    })]
  });
}
const ai = L.forwardRef(ni), ii = ai;
function oi({
  title: e,
  titleId: r,
  ...n
}, a) {
  return /* @__PURE__ */ l("svg", {
    ...Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      "aria-hidden": "true",
      ref: a,
      "aria-labelledby": r
    }, n),
    children: [e ? /* @__PURE__ */ t("title", {
      id: r,
      children: e
    }) : null, /* @__PURE__ */ t("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
    })]
  });
}
const si = L.forwardRef(oi), li = si;
function ci({
  title: e,
  titleId: r,
  ...n
}, a) {
  return /* @__PURE__ */ l("svg", {
    ...Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      "aria-hidden": "true",
      ref: a,
      "aria-labelledby": r
    }, n),
    children: [e ? /* @__PURE__ */ t("title", {
      id: r,
      children: e
    }) : null, /* @__PURE__ */ t("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M4.5 12.75l6 6 9-13.5"
    })]
  });
}
const di = L.forwardRef(ci), xt = di;
function ui({
  title: e,
  titleId: r,
  ...n
}, a) {
  return /* @__PURE__ */ l("svg", {
    ...Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      "aria-hidden": "true",
      ref: a,
      "aria-labelledby": r
    }, n),
    children: [e ? /* @__PURE__ */ t("title", {
      id: r,
      children: e
    }) : null, /* @__PURE__ */ t("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M15.75 19.5L8.25 12l7.5-7.5"
    })]
  });
}
const fi = L.forwardRef(ui), Gr = fi;
function hi({
  title: e,
  titleId: r,
  ...n
}, a) {
  return /* @__PURE__ */ l("svg", {
    ...Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      "aria-hidden": "true",
      ref: a,
      "aria-labelledby": r
    }, n),
    children: [e ? /* @__PURE__ */ t("title", {
      id: r,
      children: e
    }) : null, /* @__PURE__ */ t("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M8.25 4.5l7.5 7.5-7.5 7.5"
    })]
  });
}
const mi = L.forwardRef(hi), gi = mi;
function pi({
  title: e,
  titleId: r,
  ...n
}, a) {
  return /* @__PURE__ */ l("svg", {
    ...Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      "aria-hidden": "true",
      ref: a,
      "aria-labelledby": r
    }, n),
    children: [e ? /* @__PURE__ */ t("title", {
      id: r,
      children: e
    }) : null, /* @__PURE__ */ t("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M4.5 15.75l7.5-7.5 7.5 7.5"
    })]
  });
}
const vi = L.forwardRef(pi), yi = vi;
function bi({
  title: e,
  titleId: r,
  ...n
}, a) {
  return /* @__PURE__ */ l("svg", {
    ...Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      "aria-hidden": "true",
      ref: a,
      "aria-labelledby": r
    }, n),
    children: [e ? /* @__PURE__ */ t("title", {
      id: r,
      children: e
    }) : null, /* @__PURE__ */ t("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
    })]
  });
}
const xi = L.forwardRef(bi), wi = xi;
function ki({
  title: e,
  titleId: r,
  ...n
}, a) {
  return /* @__PURE__ */ l("svg", {
    ...Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      "aria-hidden": "true",
      ref: a,
      "aria-labelledby": r
    }, n),
    children: [e ? /* @__PURE__ */ t("title", {
      id: r,
      children: e
    }) : null, /* @__PURE__ */ t("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
    })]
  });
}
const Ni = L.forwardRef(ki), Ci = Ni;
function Si({
  title: e,
  titleId: r,
  ...n
}, a) {
  return /* @__PURE__ */ l("svg", {
    ...Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      "aria-hidden": "true",
      ref: a,
      "aria-labelledby": r
    }, n),
    children: [e ? /* @__PURE__ */ t("title", {
      id: r,
      children: e
    }) : null, /* @__PURE__ */ t("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
    })]
  });
}
const $i = L.forwardRef(Si), Di = $i;
function Ri({
  title: e,
  titleId: r,
  ...n
}, a) {
  return /* @__PURE__ */ l("svg", {
    ...Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      "aria-hidden": "true",
      ref: a,
      "aria-labelledby": r
    }, n),
    children: [e ? /* @__PURE__ */ t("title", {
      id: r,
      children: e
    }) : null, /* @__PURE__ */ t("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
    })]
  });
}
const Ei = L.forwardRef(Ri), Sr = Ei;
function Mi({
  title: e,
  titleId: r,
  ...n
}, a) {
  return /* @__PURE__ */ l("svg", {
    ...Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      "aria-hidden": "true",
      ref: a,
      "aria-labelledby": r
    }, n),
    children: [e ? /* @__PURE__ */ t("title", {
      id: r,
      children: e
    }) : null, /* @__PURE__ */ t("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
    })]
  });
}
const Ii = L.forwardRef(Mi), _i = Ii;
function Fi({
  title: e,
  titleId: r,
  ...n
}, a) {
  return /* @__PURE__ */ l("svg", {
    ...Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      "aria-hidden": "true",
      ref: a,
      "aria-labelledby": r
    }, n),
    children: [e ? /* @__PURE__ */ t("title", {
      id: r,
      children: e
    }) : null, /* @__PURE__ */ t("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
    })]
  });
}
const Ai = L.forwardRef(Fi), $r = Ai;
function Li({
  title: e,
  titleId: r,
  ...n
}, a) {
  return /* @__PURE__ */ l("svg", {
    ...Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      "aria-hidden": "true",
      ref: a,
      "aria-labelledby": r
    }, n),
    children: [e ? /* @__PURE__ */ t("title", {
      id: r,
      children: e
    }) : null, /* @__PURE__ */ t("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
    })]
  });
}
const Oi = L.forwardRef(Li), qr = Oi;
function Ti({
  title: e,
  titleId: r,
  ...n
}, a) {
  return /* @__PURE__ */ l("svg", {
    ...Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      "aria-hidden": "true",
      ref: a,
      "aria-labelledby": r
    }, n),
    children: [e ? /* @__PURE__ */ t("title", {
      id: r,
      children: e
    }) : null, /* @__PURE__ */ t("path", {
      strokeLinecap: "round",
      d: "M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
    })]
  });
}
const ji = L.forwardRef(Ti), Pi = ji;
function Bi({
  title: e,
  titleId: r,
  ...n
}, a) {
  return /* @__PURE__ */ l("svg", {
    ...Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      "aria-hidden": "true",
      ref: a,
      "aria-labelledby": r
    }, n),
    children: [e ? /* @__PURE__ */ t("title", {
      id: r,
      children: e
    }) : null, /* @__PURE__ */ t("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M6 18L18 6M6 6l12 12"
    })]
  });
}
const zi = L.forwardRef(Bi), Kt = zi;
var Hi = { exports: {} };
(function(e, r) {
  (function(n, a) {
    e.exports = a(de);
  })(lt, function(n) {
    function a(h) {
      return h && typeof h == "object" && "default" in h ? h : { default: h };
    }
    var o = a(n), i = { s: "ein paar Sekunden", m: ["eine Minute", "einer Minute"], mm: "%d Minuten", h: ["eine Stunde", "einer Stunde"], hh: "%d Stunden", d: ["ein Tag", "einem Tag"], dd: ["%d Tage", "%d Tagen"], M: ["ein Monat", "einem Monat"], MM: ["%d Monate", "%d Monaten"], y: ["ein Jahr", "einem Jahr"], yy: ["%d Jahre", "%d Jahren"] };
    function s(h, d, y) {
      var g = i[y];
      return Array.isArray(g) && (g = g[d ? 0 : 1]), g.replace("%d", h);
    }
    var c = { name: "de", weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), months: "Januar_Februar_M\xE4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Feb._M\xE4rz_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"), ordinal: function(h) {
      return h + ".";
    }, weekStart: 1, yearStart: 4, formats: { LTS: "HH:mm:ss", LT: "HH:mm", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, relativeTime: { future: "in %s", past: "vor %s", s, m: s, mm: s, h: s, hh: s, d: s, dd: s, M: s, MM: s, y: s, yy: s } };
    return o.default.locale(c, null, !0), c;
  });
})(Hi);
var Jr = { exports: {} };
(function(e, r) {
  (function(n, a) {
    e.exports = a();
  })(lt, function() {
    var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, a = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, o = /\d\d/, i = /\d\d?/, s = /\d*[^-_:/,()\s\d]+/, c = {}, h = function(x) {
      return (x = +x) + (x > 68 ? 1900 : 2e3);
    }, d = function(x) {
      return function(N) {
        this[x] = +N;
      };
    }, y = [/[+-]\d\d:?(\d\d)?|Z/, function(x) {
      (this.zone || (this.zone = {})).offset = function(N) {
        if (!N || N === "Z")
          return 0;
        var b = N.match(/([+-]|\d\d)/g), D = 60 * b[1] + (+b[2] || 0);
        return D === 0 ? 0 : b[0] === "+" ? -D : D;
      }(x);
    }], g = function(x) {
      var N = c[x];
      return N && (N.indexOf ? N : N.s.concat(N.f));
    }, v = function(x, N) {
      var b, D = c.meridiem;
      if (D) {
        for (var H = 1; H <= 24; H += 1)
          if (x.indexOf(D(H, 0, N)) > -1) {
            b = H > 12;
            break;
          }
      } else
        b = x === (N ? "pm" : "PM");
      return b;
    }, w = { A: [s, function(x) {
      this.afternoon = v(x, !1);
    }], a: [s, function(x) {
      this.afternoon = v(x, !0);
    }], S: [/\d/, function(x) {
      this.milliseconds = 100 * +x;
    }], SS: [o, function(x) {
      this.milliseconds = 10 * +x;
    }], SSS: [/\d{3}/, function(x) {
      this.milliseconds = +x;
    }], s: [i, d("seconds")], ss: [i, d("seconds")], m: [i, d("minutes")], mm: [i, d("minutes")], H: [i, d("hours")], h: [i, d("hours")], HH: [i, d("hours")], hh: [i, d("hours")], D: [i, d("day")], DD: [o, d("day")], Do: [s, function(x) {
      var N = c.ordinal, b = x.match(/\d+/);
      if (this.day = b[0], N)
        for (var D = 1; D <= 31; D += 1)
          N(D).replace(/\[|\]/g, "") === x && (this.day = D);
    }], M: [i, d("month")], MM: [o, d("month")], MMM: [s, function(x) {
      var N = g("months"), b = (g("monthsShort") || N.map(function(D) {
        return D.slice(0, 3);
      })).indexOf(x) + 1;
      if (b < 1)
        throw new Error();
      this.month = b % 12 || b;
    }], MMMM: [s, function(x) {
      var N = g("months").indexOf(x) + 1;
      if (N < 1)
        throw new Error();
      this.month = N % 12 || N;
    }], Y: [/[+-]?\d+/, d("year")], YY: [o, function(x) {
      this.year = h(x);
    }], YYYY: [/\d{4}/, d("year")], Z: y, ZZ: y };
    function C(x) {
      var N, b;
      N = x, b = c && c.formats;
      for (var D = (x = N.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(P, B, X) {
        var Q = X && X.toUpperCase();
        return B || b[X] || n[X] || b[Q].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(ee, oe, q) {
          return oe || q.slice(1);
        });
      })).match(a), H = D.length, Y = 0; Y < H; Y += 1) {
        var O = D[Y], F = w[O], R = F && F[0], E = F && F[1];
        D[Y] = E ? { regex: R, parser: E } : O.replace(/^\[|\]$/g, "");
      }
      return function(P) {
        for (var B = {}, X = 0, Q = 0; X < H; X += 1) {
          var ee = D[X];
          if (typeof ee == "string")
            Q += ee.length;
          else {
            var oe = ee.regex, q = ee.parser, fe = P.slice(Q), ne = oe.exec(fe)[0];
            q.call(B, ne), P = P.replace(ne, "");
          }
        }
        return function($e) {
          var ae = $e.afternoon;
          if (ae !== void 0) {
            var V = $e.hours;
            ae ? V < 12 && ($e.hours += 12) : V === 12 && ($e.hours = 0), delete $e.afternoon;
          }
        }(B), B;
      };
    }
    return function(x, N, b) {
      b.p.customParseFormat = !0, x && x.parseTwoDigitYear && (h = x.parseTwoDigitYear);
      var D = N.prototype, H = D.parse;
      D.parse = function(Y) {
        var O = Y.date, F = Y.utc, R = Y.args;
        this.$u = F;
        var E = R[1];
        if (typeof E == "string") {
          var P = R[2] === !0, B = R[3] === !0, X = P || B, Q = R[2];
          B && (Q = R[2]), c = this.$locale(), !P && Q && (c = b.Ls[Q]), this.$d = function(fe, ne, $e) {
            try {
              if (["x", "X"].indexOf(ne) > -1)
                return new Date((ne === "X" ? 1e3 : 1) * fe);
              var ae = C(ne)(fe), V = ae.year, _e = ae.month, pe = ae.day, tt = ae.hours, ut = ae.minutes, we = ae.seconds, Le = ae.milliseconds, Ye = ae.zone, Oe = new Date(), ge = pe || (V || _e ? 1 : Oe.getDate()), ve = V || Oe.getFullYear(), Ge = 0;
              V && !_e || (Ge = _e > 0 ? _e - 1 : Oe.getMonth());
              var qe = tt || 0, u = ut || 0, p = we || 0, f = Le || 0;
              return Ye ? new Date(Date.UTC(ve, Ge, ge, qe, u, p, f + 60 * Ye.offset * 1e3)) : $e ? new Date(Date.UTC(ve, Ge, ge, qe, u, p, f)) : new Date(ve, Ge, ge, qe, u, p, f);
            } catch {
              return new Date("");
            }
          }(O, E, F), this.init(), Q && Q !== !0 && (this.$L = this.locale(Q).$L), X && O != this.format(E) && (this.$d = new Date("")), c = {};
        } else if (E instanceof Array)
          for (var ee = E.length, oe = 1; oe <= ee; oe += 1) {
            R[1] = E[oe - 1];
            var q = b.apply(this, R);
            if (q.isValid()) {
              this.$d = q.$d, this.$L = q.$L, this.init();
              break;
            }
            oe === ee && (this.$d = new Date(""));
          }
        else
          H.call(this, Y);
      };
    };
  });
})(Jr);
const Yi = Jr.exports;
var Zr = { exports: {} };
(function(e, r) {
  (function(n, a) {
    e.exports = a();
  })(lt, function() {
    var n, a, o = 1e3, i = 6e4, s = 36e5, c = 864e5, h = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, d = 31536e6, y = 2592e6, g = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, v = { years: d, months: y, days: c, hours: s, minutes: i, seconds: o, milliseconds: 1, weeks: 6048e5 }, w = function(O) {
      return O instanceof Y;
    }, C = function(O, F, R) {
      return new Y(O, R, F.$l);
    }, x = function(O) {
      return a.p(O) + "s";
    }, N = function(O) {
      return O < 0;
    }, b = function(O) {
      return N(O) ? Math.ceil(O) : Math.floor(O);
    }, D = function(O) {
      return Math.abs(O);
    }, H = function(O, F) {
      return O ? N(O) ? { negative: !0, format: "" + D(O) + F } : { negative: !1, format: "" + O + F } : { negative: !1, format: "" };
    }, Y = function() {
      function O(R, E, P) {
        var B = this;
        if (this.$d = {}, this.$l = P, R === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), E)
          return C(R * v[x(E)], this);
        if (typeof R == "number")
          return this.$ms = R, this.parseFromMilliseconds(), this;
        if (typeof R == "object")
          return Object.keys(R).forEach(function(ee) {
            B.$d[x(ee)] = R[ee];
          }), this.calMilliseconds(), this;
        if (typeof R == "string") {
          var X = R.match(g);
          if (X) {
            var Q = X.slice(2).map(function(ee) {
              return ee != null ? Number(ee) : 0;
            });
            return this.$d.years = Q[0], this.$d.months = Q[1], this.$d.weeks = Q[2], this.$d.days = Q[3], this.$d.hours = Q[4], this.$d.minutes = Q[5], this.$d.seconds = Q[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var F = O.prototype;
      return F.calMilliseconds = function() {
        var R = this;
        this.$ms = Object.keys(this.$d).reduce(function(E, P) {
          return E + (R.$d[P] || 0) * v[P];
        }, 0);
      }, F.parseFromMilliseconds = function() {
        var R = this.$ms;
        this.$d.years = b(R / d), R %= d, this.$d.months = b(R / y), R %= y, this.$d.days = b(R / c), R %= c, this.$d.hours = b(R / s), R %= s, this.$d.minutes = b(R / i), R %= i, this.$d.seconds = b(R / o), R %= o, this.$d.milliseconds = R;
      }, F.toISOString = function() {
        var R = H(this.$d.years, "Y"), E = H(this.$d.months, "M"), P = +this.$d.days || 0;
        this.$d.weeks && (P += 7 * this.$d.weeks);
        var B = H(P, "D"), X = H(this.$d.hours, "H"), Q = H(this.$d.minutes, "M"), ee = this.$d.seconds || 0;
        this.$d.milliseconds && (ee += this.$d.milliseconds / 1e3);
        var oe = H(ee, "S"), q = R.negative || E.negative || B.negative || X.negative || Q.negative || oe.negative, fe = X.format || Q.format || oe.format ? "T" : "", ne = (q ? "-" : "") + "P" + R.format + E.format + B.format + fe + X.format + Q.format + oe.format;
        return ne === "P" || ne === "-P" ? "P0D" : ne;
      }, F.toJSON = function() {
        return this.toISOString();
      }, F.format = function(R) {
        var E = R || "YYYY-MM-DDTHH:mm:ss", P = { Y: this.$d.years, YY: a.s(this.$d.years, 2, "0"), YYYY: a.s(this.$d.years, 4, "0"), M: this.$d.months, MM: a.s(this.$d.months, 2, "0"), D: this.$d.days, DD: a.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: a.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: a.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: a.s(this.$d.seconds, 2, "0"), SSS: a.s(this.$d.milliseconds, 3, "0") };
        return E.replace(h, function(B, X) {
          return X || String(P[B]);
        });
      }, F.as = function(R) {
        return this.$ms / v[x(R)];
      }, F.get = function(R) {
        var E = this.$ms, P = x(R);
        return P === "milliseconds" ? E %= 1e3 : E = P === "weeks" ? b(E / v[P]) : this.$d[P], E === 0 ? 0 : E;
      }, F.add = function(R, E, P) {
        var B;
        return B = E ? R * v[x(E)] : w(R) ? R.$ms : C(R, this).$ms, C(this.$ms + B * (P ? -1 : 1), this);
      }, F.subtract = function(R, E) {
        return this.add(R, E, !0);
      }, F.locale = function(R) {
        var E = this.clone();
        return E.$l = R, E;
      }, F.clone = function() {
        return C(this.$ms, this);
      }, F.humanize = function(R) {
        return n().add(this.$ms, "ms").locale(this.$l).fromNow(!R);
      }, F.milliseconds = function() {
        return this.get("milliseconds");
      }, F.asMilliseconds = function() {
        return this.as("milliseconds");
      }, F.seconds = function() {
        return this.get("seconds");
      }, F.asSeconds = function() {
        return this.as("seconds");
      }, F.minutes = function() {
        return this.get("minutes");
      }, F.asMinutes = function() {
        return this.as("minutes");
      }, F.hours = function() {
        return this.get("hours");
      }, F.asHours = function() {
        return this.as("hours");
      }, F.days = function() {
        return this.get("days");
      }, F.asDays = function() {
        return this.as("days");
      }, F.weeks = function() {
        return this.get("weeks");
      }, F.asWeeks = function() {
        return this.as("weeks");
      }, F.months = function() {
        return this.get("months");
      }, F.asMonths = function() {
        return this.as("months");
      }, F.years = function() {
        return this.get("years");
      }, F.asYears = function() {
        return this.as("years");
      }, O;
    }();
    return function(O, F, R) {
      n = R, a = R().$utils(), R.duration = function(B, X) {
        var Q = R.locale();
        return C(B, { $l: Q }, X);
      }, R.isDuration = w;
      var E = F.prototype.add, P = F.prototype.subtract;
      F.prototype.add = function(B, X) {
        return w(B) && (B = B.asMilliseconds()), E.bind(this)(B, X);
      }, F.prototype.subtract = function(B, X) {
        return w(B) && (B = B.asMilliseconds()), P.bind(this)(B, X);
      };
    };
  });
})(Zr);
const Vi = Zr.exports;
var Xr = { exports: {} };
(function(e, r) {
  (function(n, a) {
    e.exports = a();
  })(lt, function() {
    return function(n, a, o) {
      a.prototype.isBetween = function(i, s, c, h) {
        var d = o(i), y = o(s), g = (h = h || "()")[0] === "(", v = h[1] === ")";
        return (g ? this.isAfter(d, c) : !this.isBefore(d, c)) && (v ? this.isBefore(y, c) : !this.isAfter(y, c)) || (g ? this.isBefore(d, c) : !this.isAfter(d, c)) && (v ? this.isAfter(y, c) : !this.isBefore(y, c));
      };
    };
  });
})(Xr);
const Ui = Xr.exports;
var Qr = { exports: {} };
(function(e, r) {
  (function(n, a) {
    e.exports = a();
  })(lt, function() {
    return function(n, a, o) {
      var i = function(s, c) {
        if (!c || !c.length || !c[0] || c.length === 1 && !c[0].length)
          return null;
        var h;
        c.length === 1 && c[0].length > 0 && (c = c[0]), h = c[0];
        for (var d = 1; d < c.length; d += 1)
          c[d].isValid() && !c[d][s](h) || (h = c[d]);
        return h;
      };
      o.max = function() {
        var s = [].slice.call(arguments, 0);
        return i("isAfter", s);
      }, o.min = function() {
        var s = [].slice.call(arguments, 0);
        return i("isBefore", s);
      };
    };
  });
})(Qr);
const Wi = Qr.exports;
var Kr = { exports: {} };
(function(e, r) {
  (function(n, a) {
    e.exports = a();
  })(lt, function() {
    return function(n, a, o) {
      n = n || {};
      var i = a.prototype, s = { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" };
      function c(d, y, g, v) {
        return i.fromToBase(d, y, g, v);
      }
      o.en.relativeTime = s, i.fromToBase = function(d, y, g, v, w) {
        for (var C, x, N, b = g.$locale().relativeTime || s, D = n.thresholds || [{ l: "s", r: 44, d: "second" }, { l: "m", r: 89 }, { l: "mm", r: 44, d: "minute" }, { l: "h", r: 89 }, { l: "hh", r: 21, d: "hour" }, { l: "d", r: 35 }, { l: "dd", r: 25, d: "day" }, { l: "M", r: 45 }, { l: "MM", r: 10, d: "month" }, { l: "y", r: 17 }, { l: "yy", d: "year" }], H = D.length, Y = 0; Y < H; Y += 1) {
          var O = D[Y];
          O.d && (C = v ? o(d).diff(g, O.d, !0) : g.diff(d, O.d, !0));
          var F = (n.rounding || Math.round)(Math.abs(C));
          if (N = C > 0, F <= O.r || !O.r) {
            F <= 1 && Y > 0 && (O = D[Y - 1]);
            var R = b[O.l];
            w && (F = w("" + F)), x = typeof R == "string" ? R.replace("%d", F) : R(F, y, O.l, N);
            break;
          }
        }
        if (y)
          return x;
        var E = N ? b.future : b.past;
        return typeof E == "function" ? E(x) : E.replace("%s", x);
      }, i.to = function(d, y) {
        return c(d, y, this, !0);
      }, i.from = function(d, y) {
        return c(d, y, this);
      };
      var h = function(d) {
        return d.$u ? o.utc() : o();
      };
      i.toNow = function(d) {
        return this.to(h(this), d);
      }, i.fromNow = function(d) {
        return this.from(h(this), d);
      };
    };
  });
})(Kr);
const Gi = Kr.exports;
de.locale("de");
de.extend(Yi);
de.extend(Ui);
de.extend(Wi);
de.extend(Gi);
de.extend(Vi);
const Ue = J.div`
shadow-md
relative text-sm
sm:rounded-md
bg-white dark:bg-gray-600
`, qi = J.div`
sm:rounded-t-md 
px-4 ${(e) => e.$inner ? "" : "py-4"}`;
Ue.Body = qi;
const Ji = J.div`
py-3
px-4 sm:px-6
sm:rounded-b-md
bg-gray-50 dark:bg-gray-800
`;
Ue.Footer = Ji;
const Zi = J.div`shadow-md sm:rounded-md bg-gray-100 dark:bg-gray-800`;
Ue.Nested = Zi;
const Dr = "D. MMMM YYYY";
function Xi(e) {
  const {
    step: r = "month",
    from: n = de().subtract(1, r).add(1, "day").format("YYYY-MM-DD"),
    to: a = de().format("YYYY-MM-DD"),
    min: o,
    max: i,
    format: s,
    onChange: c
  } = e, [h, d] = T(de(n, "YYYY-MM-DD")), [y, g] = T(de(a, "YYYY-MM-DD")), v = !o || h.clone().subtract(1, r).add(1, "day").isAfter(de(o, "YYYY-MM-DD")), w = !i || y.clone().add(1, r).subtract(1, "day").isBefore(de(i, "YYYY-MM-DD")), C = (x, N) => {
    d(x), g(N), c?.([x, N].map((b) => b.startOf("day").format("YYYY-MM-DD")));
  };
  return /* @__PURE__ */ l("div", {
    className: `flex items-center justify-between select-none space-x-2 shadow-sm px-2
focus:ring-indigo-500 focus:border-indigo-500 py-2
sm:text-sm  border border-gray-300 dark:border-gray-600 rounded-md  bg-white
dark:bg-gray-700`,
    children: [/* @__PURE__ */ t("div", {
      className: v ? "cursor-pointer" : "cursor-not-allowed",
      children: /* @__PURE__ */ t(Gr, {
        className: "w-5 h-5",
        onClick: () => v && C(h.subtract(1, r), y.subtract(1, r))
      })
    }), /* @__PURE__ */ t("span", {
      children: s?.(h, y) || `${h.format(Dr)} - ${y.format(Dr)}`
    }), /* @__PURE__ */ t("div", {
      className: w ? "cursor-pointer" : "cursor-not-allowed",
      children: /* @__PURE__ */ t(gi, {
        className: "w-5 h-5",
        onClick: () => w && C(h.add(1, r), y.add(1, r))
      })
    })]
  });
}
function en(e) {
  const {
    label: r,
    secondaryLabel: n,
    onChange: a,
    value: o
  } = e, [i, s] = T(!1), c = (h) => {
    s(h), a?.(h);
  };
  return G(() => {
    s(o);
  }, [o]), /* @__PURE__ */ l(Tt.Group, {
    as: "div",
    className: "flex items-center",
    children: [/* @__PURE__ */ t(Tt, {
      checked: i,
      onChange: c,
      className: A(i ? "bg-indigo-600" : "bg-gray-200 dark:bg-gray-500", "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"),
      children: /* @__PURE__ */ t("span", {
        "aria-hidden": "true",
        className: A(i ? "translate-x-5" : "translate-x-0", "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200")
      })
    }), !!(r || n) && /* @__PURE__ */ l(Tt.Label, {
      as: "span",
      className: "ml-3",
      children: [/* @__PURE__ */ t("span", {
        className: "text-sm font-medium text-gray-900 dark:text-white",
        children: r
      }), !!n && /* @__PURE__ */ l(re, {
        children: [/* @__PURE__ */ t("br", {}), /* @__PURE__ */ t("span", {
          className: "text-xs text-gray-500 dark:text-white-500",
          children: n
        })]
      })]
    })]
  });
}
function tn(e) {
  const {
    control: r,
    label: n,
    secondaryLabel: a,
    name: o,
    defaultValue: i,
    rules: s
  } = e;
  return /* @__PURE__ */ t(Ae, {
    render: ({
      field: c
    }) => /* @__PURE__ */ t(en, {
      label: n,
      secondaryLabel: a,
      value: c.value,
      onChange: c.onChange
    }),
    control: r,
    name: o,
    defaultValue: i,
    rules: s
  });
}
const Ee = {
  Light: J.span`text-gray-400 dark:text-gray-500`,
  Primary: J.span`text-indigo-600 dark:text-indigo-300 hover:text-indigo-900`,
  Secondary: J.span`dark:text-gray-300 leading-2 text-gray-700`,
  Error: J.span`dark:text-red-300 text-red-700`
};
function ct({
  className: e
}) {
  return /* @__PURE__ */ l("svg", {
    className: A("animate-spin h-5 w-5", e),
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    children: [/* @__PURE__ */ t("circle", {
      className: "opacity-25",
      cx: "12",
      cy: "12",
      r: "10",
      stroke: "currentColor",
      strokeWidth: "4"
    }), /* @__PURE__ */ t("path", {
      className: "opacity-75",
      fill: "currentColor",
      d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    })]
  });
}
function Rt({
  children: e,
  label: r,
  placement: n = "top",
  transformMode: a = !0
}) {
  const [o, i] = T(!1);
  let s;
  return a ? s = {
    top: "-translate-y-full -top-1",
    left: "-translate-x-full -left-1",
    right: "translate-x-full -right-1",
    bottom: "translate-y-full -bottom-1"
  } : s = {
    top: "bottom-full z-10",
    left: "right-full z-10",
    right: "left-full z-10",
    bottom: "top-full z-10"
  }, r ? /* @__PURE__ */ l("div", {
    className: "relative inline-flex items-center justify-center",
    children: [/* @__PURE__ */ t("div", {
      className: "inline-block group",
      onMouseEnter: () => i(!0),
      onMouseLeave: () => i(!1),
      children: e
    }), /* @__PURE__ */ t("div", {
      role: "tooltip",
      className: A("absolute transition-opacity bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-200 py-1 px-2 text-xs rounded-md pointer-events-none whitespace-nowrap z-[64] shadow-xl", o ? "opacity-1" : "opacity-0", s[n]),
      children: r
    })]
  }) : /* @__PURE__ */ t(re, {
    children: e
  });
}
const Qi = J.button`
inline-flex justify-center items-center
font-medium 
px-4 py-2
border
rounded-md
text-sm
${({
  $primary: e,
  $secondary: r,
  $danger: n
}) => (e || r || n) && "shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"}
${({
  $primary: e
}) => e && "border-transparent text-white bg-indigo-600 dark:bg-indigo-700 hover:bg-indigo-700 focus:ring-indigo-500"}
${({
  $secondary: e
}) => e && "`border-gray-300 dark:border-gray-800 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:ring-indigo-500"}
${({
  $danger: e
}) => e && "border-transparent text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"}
${({
  $empty: e
}) => e && "border-transparent dark:text-white hover:bg-gray-200 dark:hover:bg-gray-500"}
${({
  $disabled: e
}) => e && "cursor-not-allowed opacity-90 grayscale"}`, z = ({
  $disabled: e = !1,
  onClick: r,
  loading: n = !1,
  children: a = null,
  ...o
}) => /* @__PURE__ */ l(Qi, {
  $disabled: e,
  onClick: e ? () => {
  } : r,
  ...o,
  children: [a, " ", n && /* @__PURE__ */ t(ct, {
    className: "ml-3"
  })]
});
z.Action = function({
  $disabled: r = !1,
  children: n,
  onClick: a,
  tooltip: o,
  placement: i,
  className: s
}) {
  return /* @__PURE__ */ t(Ee.Secondary, {
    className: s,
    children: /* @__PURE__ */ t(Rt, {
      label: o,
      placement: i,
      children: /* @__PURE__ */ t(z, {
        $disabled: r,
        $empty: !0,
        onClick: a,
        className: "!px-2 text-gray-500 dark:text-gray-400",
        children: n
      })
    })
  });
};
z.Tooly = function({
  children: r,
  onClick: n,
  tooltip: a,
  placement: o,
  className: i,
  disabled: s
}) {
  return /* @__PURE__ */ t(Ee.Primary, {
    className: i,
    children: a?.length ? /* @__PURE__ */ t(Rt, {
      label: a,
      placement: o,
      children: s ? /* @__PURE__ */ t("div", {
        className: "cursor-not-allowed",
        children: /* @__PURE__ */ t("div", {
          className: "pointer-events-none",
          children: /* @__PURE__ */ t(z, {
            $empty: !0,
            onClick: n,
            className: "!px-2",
            children: r
          })
        })
      }) : /* @__PURE__ */ t(z, {
        $empty: !0,
        onClick: n,
        className: "!px-2",
        children: r
      })
    }) : /* @__PURE__ */ t(z, {
      $disabled: s,
      $empty: !0,
      onClick: n,
      className: "!px-2",
      children: r
    })
  });
};
z.Expander = (e) => {
  const {
    onClick: r,
    active: n,
    tooltip: a = ["Ausklappen", "Einklappen"],
    placement: o = "right"
  } = e, [i, s] = a;
  return /* @__PURE__ */ t(z.Action, {
    onClick: r,
    tooltip: n ? s : i,
    placement: o,
    children: n ? /* @__PURE__ */ t(Xt, {
      className: "h-5 w-5",
      "aria-hidden": "true"
    }) : /* @__PURE__ */ t(Yr, {
      className: "h-5 w-5",
      "aria-hidden": "true"
    })
  });
};
z.ToggleHeader = ({
  children: e,
  onClick: r,
  open: n,
  $last: a,
  $first: o,
  className: i
}) => /* @__PURE__ */ l("div", {
  onClick: r,
  className: A("flex justify-between items-center w-full px-4 py-3 text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider whitespace-nowrap text-left bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-600", "border-gray-200 dark:border-gray-600 cursor-pointer", n ? "border-b" : "", o ? "rounded-t-md" : "border-t", a && !n ? "rounded-b-md" : "", i),
  children: [/* @__PURE__ */ t("div", {
    className: "grow",
    children: e
  }), /* @__PURE__ */ t(Xt, {
    className: `${n ? "transform rotate-180" : ""} w-5 h-5 text-gray-900 dark:text-gray-200`
  })]
});
z.Disclosure = ({
  children: e,
  open: r,
  $last: n,
  $first: a
}) => /* @__PURE__ */ l(St.Button, {
  className: A("flex justify-between items-center w-full px-4 py-3 text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider whitespace-nowrap text-left bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-600", "border-gray-200 dark:border-gray-600", r ? "border-b" : "", a ? "rounded-t-md" : "border-t", n && !r ? "rounded-b-md" : ""),
  children: [/* @__PURE__ */ t("div", {
    className: "grow",
    children: e
  }), /* @__PURE__ */ t(Xt, {
    className: `${r ? "transform rotate-180" : ""} w-5 h-5 text-gray-900 dark:text-gray-200`
  })]
});
function Et({
  children: e,
  open: r,
  onClose: n = () => {
  },
  className: a = void 0
}) {
  return /* @__PURE__ */ t(be.Root, {
    show: r,
    as: me,
    children: /* @__PURE__ */ t(ze, {
      as: "div",
      className: "fixed inset-0 overflow-y-auto",
      style: {
        zIndex: 1999
      },
      onClose: n,
      children: /* @__PURE__ */ l("div", {
        className: "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",
        children: [/* @__PURE__ */ t(be.Child, {
          as: me,
          enter: "ease-out duration-300",
          enterFrom: "opacity-0",
          enterTo: "opacity-100",
          leave: "ease-in duration-200",
          leaveFrom: "opacity-100",
          leaveTo: "opacity-0",
          children: /* @__PURE__ */ t(ze.Overlay, {
            className: "fixed inset-0 bg-gray-500  bg-opacity-75 transition-opacity"
          })
        }), /* @__PURE__ */ t("span", {
          className: "hidden sm:inline-block sm:align-middle sm:h-screen",
          "aria-hidden": "true",
          children: "\u200B"
        }), /* @__PURE__ */ t(be.Child, {
          as: me,
          enter: "ease-out duration-300",
          enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
          enterTo: "opacity-100 translate-y-0 sm:scale-100",
          leave: "ease-in duration-200",
          leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
          leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
          children: /* @__PURE__ */ t("div", {
            className: A("inline-block align-bottom bg-white dark:bg-gray-700 rounded-lg px-4 pt-5 pb-4 text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:p-6", a),
            children: e
          })
        })]
      })
    })
  });
}
Et.Buttons = J.div`flex justify-end space-x-2`;
function Fl() {
  const [e, r] = je.useState(""), [n, a] = je.useState(""), [o, i] = je.useState(!1);
  return G(() => {
    const s = (c) => {
      i(!!c.detail), c.detail?.question && r(c.detail.question), c.detail?.headline && a(c.detail.headline);
    };
    return document.addEventListener("open-confirm-modal", s), () => {
      document.removeEventListener("open-confirm-modal", s);
    };
  }, []), /* @__PURE__ */ l(Et, {
    open: o,
    className: "!p-0",
    children: [/* @__PURE__ */ l("div", {
      className: "sm:flex sm:items-start p-8",
      children: [/* @__PURE__ */ t("div", {
        className: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 sm:mx-0 sm:h-10 sm:w-10",
        children: /* @__PURE__ */ t(Va, {
          className: "h-5 w-5 text-gray-600",
          "aria-hidden": "true"
        })
      }), /* @__PURE__ */ l("div", {
        className: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left",
        children: [/* @__PURE__ */ t("h3", {
          className: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-300",
          children: n
        }), /* @__PURE__ */ t("div", {
          className: "mt-2",
          children: /* @__PURE__ */ t("p", {
            className: "text-sm text-gray-500 dark:text-gray-400",
            children: e
          })
        })]
      })]
    }), /* @__PURE__ */ l("div", {
      className: "bg-gray-50 dark:bg-gray-900 px-4 py-3 sm:px-6 flex justify-end space-x-4 items-center rounded-b-lg",
      children: [/* @__PURE__ */ t(z, {
        $secondary: !0,
        onClick: () => {
          const s = new CustomEvent("action-confirm-modal", {
            detail: !1
          });
          document.dispatchEvent(s);
        },
        children: "Abbrechen"
      }), /* @__PURE__ */ t(z, {
        $primary: !0,
        onClick: () => {
          const s = new CustomEvent("action-confirm-modal", {
            detail: !0
          });
          document.dispatchEvent(s);
        },
        children: "Best\xE4tigen"
      })]
    })]
  });
}
function Ki(e, r) {
  const n = new CustomEvent("open-confirm-modal", {
    detail: {
      question: r,
      headline: e
    }
  });
  document.dispatchEvent(n);
}
function eo() {
  const e = new CustomEvent("open-confirm-modal", {
    detail: !1
  });
  document.dispatchEvent(e);
}
function wt(e, r) {
  return new Promise((n) => {
    Ki(e, r);
    function a(o) {
      n(o.detail), document.removeEventListener("action-confirm-modal", a), eo();
    }
    document.addEventListener("action-confirm-modal", a);
  });
}
function to(e) {
  const {
    children: r,
    onSave: n,
    showSaveButton: a
  } = e, [o, i] = T(!1);
  async function s() {
    o || (i(!0), await n?.(), i(!1));
  }
  return /* @__PURE__ */ l("div", {
    className: "flex",
    children: [r, a && /* @__PURE__ */ l("div", {
      className: "p-1 cursor-pointer border border-gray-400 rounded-r-md hover:bg-gray-500",
      onClick: s,
      children: [!o && /* @__PURE__ */ t(xt, {
        className: "block h-7 w-7"
      }), o && /* @__PURE__ */ t(ii, {
        className: A("block h-7 w-7", o ? "animate-spin" : "")
      })]
    })]
  });
}
const K = Ce((e, r) => {
  const {
    className: n = ""
  } = e;
  return /* @__PURE__ */ t("input", {
    ref: r,
    ...e,
    className: A(`block shadow-sm 
        focus:ring-indigo-500 focus:border-indigo-500 
        sm:text-sm
        disabled:bg-gray-200 
        disabled:dark:bg-gray-900 
        border-gray-300 dark:border-gray-500 rounded-md 
        dark:bg-gray-700`, !["radio", "checkbox"].includes(e.type) && "w-full", n)
  });
});
K.Textarea = Ce((e, r) => /* @__PURE__ */ t("textarea", {
  ref: r,
  ...e,
  className: `block w-full shadow-sm 
      focus:ring-indigo-500 focus:border-indigo-500 
      sm:text-sm 
      border-gray-300 dark:border-gray-500 rounded-md 
      dark:bg-gray-700`
}));
K.Copy = Ce((e, r) => {
  const {
    children: n,
    className: a,
    ...o
  } = e, i = Re(), [s, c] = T(!1);
  return /* @__PURE__ */ l("div", {
    className: "flex items-center",
    children: [/* @__PURE__ */ t(K, {
      ref: (h) => {
        i.current = h, typeof r == "function" && r(h);
      },
      className: A("flex-1", a, "rounded-r-none"),
      ...o
    }), /* @__PURE__ */ t(z, {
      className: "rounded-l-none",
      $secondary: !0,
      onClick: () => {
        navigator.clipboard.writeText(i.current?.value), c(!0);
      },
      children: /* @__PURE__ */ t(Vr, {
        className: A("w-5 h-5", s && "text-green-500")
      })
    })]
  });
});
K.Radio = Ce((e, r) => {
  const {
    children: n,
    ...a
  } = e;
  return /* @__PURE__ */ l("label", {
    className: "flex space-x-2 items-center cursor-pointer py-2 px-1",
    children: [/* @__PURE__ */ t(K, {
      ref: r,
      type: "radio",
      className: "aspect-1",
      ...a
    }), /* @__PURE__ */ t("div", {
      children: n
    })]
  });
});
K.Select = Ce((e, r) => /* @__PURE__ */ t("select", {
  ...e,
  ref: r,
  className: A("bg-white dark:bg-gray-700 relative w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm", e.className),
  children: e.children
}));
K.InlineLabel = Ce((e, r) => {
  const {
    className: n,
    label: a,
    $right: o,
    ...i
  } = e, s = /* @__PURE__ */ t("span", {
    className: A("inline-flex items-center px-3 border border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-600 text-gray-500 dark:text-gray-100 sm:text-sm", o ? "rounded-r-md  border-l-0" : "rounded-l-md  border-r-0"),
    children: a
  });
  return /* @__PURE__ */ l("div", {
    className: A("max-w-lg flex rounded-md shadow-sm", n),
    children: [!o && s, /* @__PURE__ */ t("input", {
      ref: r,
      className: A("flex-1 block w-full min-w-0 rounded-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 dark:border-gray-500 dark:bg-gray-700", o ? "rounded-l-md" : "rounded-r-md"),
      ...i
    }), o && s]
  });
});
K.Color = Ce((e, r) => /* @__PURE__ */ t("input", {
  type: "color",
  ref: r,
  ...e
}));
K.WithIcon = J.div`relative rounded-md shadow-sm`;
K.Icon = J.div`absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none`;
K.Editable = Ce(({
  value: e,
  onSave: r,
  placeholder: n
}, a) => {
  const [o, i] = T(""), s = o !== e;
  return G(() => {
    i(e);
  }, [e]), /* @__PURE__ */ t(to, {
    showSaveButton: s,
    onSave: () => r?.(o),
    children: /* @__PURE__ */ t(K, {
      ref: a,
      type: "text",
      value: o || "",
      onChange: (c) => i(c.target.value),
      className: A(s ? "rounded-none rounded-l-md" : "rounded-md"),
      placeholder: n
    })
  });
});
function We() {
  return /* @__PURE__ */ t("div", {
    className: "w-screen fixed top-0 left-0 h-screen flex justify-center items-center z-[50]",
    children: /* @__PURE__ */ t(ct, {
      className: "w-16 h-16"
    })
  });
}
function ro(e) {
  const {
    value: r,
    total: n = 0,
    count: a = 25,
    onChange: o,
    hideTextInfo: i
  } = e, s = Math.ceil(n / a), [c, h] = T(r || 1);
  G(() => {
    r && r !== c && h(r || 1);
  }, [r]);
  const d = 2, y = (x, N) => Array.from({
    length: Math.max(N - x, 0)
  }, (b, D) => D + 1 + x).filter((b) => b > 0 && b <= s), g = [...y(c - d - 1, c - 1), c, ...y(c, c + d)], v = (x) => {
    h(x), o?.(x);
  }, w = (x) => x === c, C = ({
    page: x
  }) => /* @__PURE__ */ t("a", {
    onClick: () => v(x),
    className: `${w(x) ? "z-10 bg-indigo-50 dark:bg-indigo-900 border-indigo-500 text-indigo-600 dark:text-indigo-200 dark:border-indigo-200" : "bg-white dark:bg-gray-700 border-gray-300 text-gray-500 dark:text-gray-300 hover:bg-gray-50"} relative inline-flex items-center px-4 py-2 border text-sm font-medium cursor-pointer select-none`,
    children: x
  });
  return s < 2 ? null : /* @__PURE__ */ l("div", {
    className: "flex items-center justify-between",
    children: [/* @__PURE__ */ l("div", {
      className: "flex-1 flex justify-between sm:hidden",
      children: [/* @__PURE__ */ t(z, {
        $secondary: !0,
        onClick: () => v(Math.max(c - 1, 1)),
        children: "Zur\xFCck"
      }), /* @__PURE__ */ t(z, {
        $secondary: !0,
        onClick: () => v(Math.min(c + 1, s)),
        children: "Weiter"
      })]
    }), /* @__PURE__ */ l("div", {
      className: "hidden sm:flex-1 sm:flex sm:items-center sm:justify-between",
      children: [!i && /* @__PURE__ */ t("div", {
        children: /* @__PURE__ */ l("p", {
          className: "text-sm text-gray-700 dark:text-gray-200 mb-0",
          children: [/* @__PURE__ */ l("span", {
            className: "font-medium",
            children: ["Zeige ", (r - 1) * a + 1]
          }), " bis", " ", /* @__PURE__ */ t("span", {
            className: "font-medium",
            children: Math.min(r * a, n)
          }), " von", " ", /* @__PURE__ */ t("span", {
            className: "font-medium",
            children: n
          })]
        })
      }), /* @__PURE__ */ t("div", {
        children: /* @__PURE__ */ l("nav", {
          className: "relative z-0 inline-flex rounded-md shadow-sm -space-x-px",
          "aria-label": "Pagination",
          children: [/* @__PURE__ */ l("a", {
            onClick: () => v(Math.max(c - 1, 1)),
            className: "relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white dark:bg-gray-700 text-sm font-medium text-gray-500 dark:text-gray-200  hover:bg-gray-50",
            children: [/* @__PURE__ */ t("span", {
              className: "sr-only",
              children: "Previous"
            }), /* @__PURE__ */ t(pa, {
              className: "h-5 w-5",
              "aria-hidden": "true"
            })]
          }), g[0] > 1 && /* @__PURE__ */ t(C, {
            page: 1
          }), g[0] > 2 && /* @__PURE__ */ t(Rr, {}), g.map((x, N) => /* @__PURE__ */ t(C, {
            page: x
          }, N)), g[g.length - 1] < s - 1 && /* @__PURE__ */ t(Rr, {}), g[g.length - 1] < s && /* @__PURE__ */ t(C, {
            page: s
          }), /* @__PURE__ */ l("a", {
            onClick: () => v(Math.min(c + 1, s)),
            className: "relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white dark:bg-gray-700 text-sm font-medium text-gray-500 dark:text-gray-200 hover:bg-gray-50",
            children: [/* @__PURE__ */ t("span", {
              className: "sr-only",
              children: "Next"
            }), /* @__PURE__ */ t(ba, {
              className: "h-5 w-5",
              "aria-hidden": "true"
            })]
          })]
        })
      })]
    })]
  });
}
function Rr() {
  return /* @__PURE__ */ t("span", {
    className: "relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 select-none",
    children: "..."
  });
}
const Al = ({
  value: e
}) => e ? /* @__PURE__ */ t(Hr, {
  className: "w-4 h-4 text-green-700 text-opacity-85"
}) : /* @__PURE__ */ t(Qa, {
  className: "w-4 h-4 text-red-700 text-opacity-85"
}), le = ({
  children: e,
  className: r
}) => /* @__PURE__ */ t("div", {
  className: A("overflow-x-auto sm:-mx-6 lg:-mx-8", r),
  children: /* @__PURE__ */ t("div", {
    className: "py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8",
    children: /* @__PURE__ */ t("div", {
      className: "shadow overflow-hidden border-b border-gray-200 dark:border-gray-800 sm:rounded-lg",
      children: /* @__PURE__ */ t("table", {
        className: "min-w-full divide-y divide-gray-200 dark:divide-gray-800",
        children: e
      })
    })
  })
}), no = ({
  children: e,
  className: r
}) => /* @__PURE__ */ t("div", {
  className: A("overflow-x-auto py-2 align-middle inline-block min-w-full", r),
  children: /* @__PURE__ */ t("div", {
    className: "shadow overflow-hidden border-b border-gray-200 dark:border-gray-800 sm:rounded-lg relative min-h-16",
    children: /* @__PURE__ */ t("table", {
      className: "min-w-full divide-y divide-gray-200 dark:divide-gray-800",
      children: e
    })
  })
});
le.Dense = no;
const ao = ({
  children: e,
  className: r
}) => /* @__PURE__ */ t("div", {
  className: A("py-2 align-middle inline-block min-w-full lg:p1-8 overflow-x-auto", r),
  children: /* @__PURE__ */ t("div", {
    className: "shadow border-b border-gray-200 dark:border-gray-800 relative min-h-16",
    children: /* @__PURE__ */ t("table", {
      className: "min-w-full divide-y divide-gray-200 dark:divide-gray-800",
      children: e
    })
  })
});
le.Fast = ao;
const io = ({
  children: e
}) => /* @__PURE__ */ t("thead", {
  className: "bg-gray-50 dark:bg-gray-800 ",
  children: /* @__PURE__ */ t("tr", {
    children: e
  })
});
le.Head = io;
const oo = J.th`px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider`;
le.Header = oo;
const so = Ce(({
  children: e
}, r) => /* @__PURE__ */ t("tbody", {
  className: "bg-white divide-y divide-gray-200 dark:bg-gray-700 dark:divide-gray-800",
  ref: r,
  children: e
}));
le.Body = so;
const lo = "hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer", co = J.tr``;
le.Row = co;
const uo = J.td` text-gray-900 dark:text-gray-200 px-4 py-4 text-sm whitespace-nowrap`;
le.Cell = uo;
le.Cell.Expander = ({
  id: e,
  set: r,
  tooltip: n = ["ausklappen!!", "einklappen"]
}) => /* @__PURE__ */ t(le.Cell, {
  className: "w-12 !p-2",
  children: /* @__PURE__ */ t(z.Expander, {
    tooltip: n,
    onClick: (a) => {
      a.stopPropagation(), r.toggle(e);
    },
    active: r.has(e),
    placement: "right"
  })
});
Array(12).fill({
  name: "Jane Cooper",
  title: "Regional Paradigm Technician",
  department: "Optimization",
  role: "Admin",
  email: "jane.cooper@example.com",
  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
});
function et() {
  return {
    emit: ({
      type: e = "success",
      message: r,
      title: n
    }) => {
      An[e]([n, r]);
    }
  };
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var kt = function() {
  return kt = Object.assign || function(r) {
    for (var n, a = 1, o = arguments.length; a < o; a++) {
      n = arguments[a];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
    }
    return r;
  }, kt.apply(this, arguments);
}, fo = function(e) {
  return typeof e == "function";
}, ho = function(e) {
  return fo(e[1]) ? [e[0], e[1], e[2] || {}] : [e[0], null, (e[1] === null ? e[2] : e[1]) || {}];
}, mo = function(e, r) {
  return function() {
    for (var n = [], a = 0; a < arguments.length; a++)
      n[a] = arguments[a];
    var o = ho(n), i = o[0], s = o[1], c = o[2], h = (c.use || []).concat(r);
    return e(i, s, kt(kt({}, c), { use: h }));
  };
}, go = function(e) {
  return function(r, n, a) {
    return a.revalidateOnFocus = !1, a.revalidateIfStale = !1, a.revalidateOnReconnect = !1, e(r, n, a);
  };
}, dt = mo(He, go);
const Pe = Object.fromEntries(
  Object.entries({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 }).filter(([e]) => e.startsWith("VITE_")).map(([e, r]) => [e.replace("VITE_", ""), r])
);
function po() {
  return dt(["Accounts", Pe.env], () => new Ln(Pe.env));
}
function vo(e) {
  const {
    shortID: r,
    env: n,
    swrOptions: a
  } = e, o = dt(r ? [r, n] : null, () => new On(r, n, !0).resolve(), a);
  return G(() => {
    o.error && console.error("error resolving PublicAPI", o.error);
  }, [o.error]), o;
}
function yo() {
  const e = dt(["Session", Pe.env], () => {
    const n = new Tn(Pe.env);
    return n.setClientID("rest"), n;
  }), r = e.data?.getToken();
  return {
    ...e,
    token: r
  };
}
function Be() {
  const {
    pathname: e
  } = Pn(), r = e?.split("/")?.[1]?.match(/^[a-f0-9]{8}$/i) ? e.split("/")[1] : "", {
    data: n,
    error: a
  } = vo({
    shortID: r,
    env: Pe.env,
    swrOptions: {
      retryOnError: !1,
      onError: (y) => {
        console.warn(`error loading public api with shortID "${r}"`, y);
      }
    }
  }), o = !!n, {
    data: i
  } = po(), {
    data: s,
    mutate: c,
    token: h
  } = yo(), d = Ke(() => async () => {
    s && await c();
  }, [s]);
  return {
    api: n,
    token: h,
    apiResolved: o,
    accounts: i,
    session: s,
    updateSession: d
  };
}
const bo = {
  preserveFilenames: !0,
  includeAssetIDInPath: !0,
  ignoreDuplicates: !1,
  deduplicate: !1,
  fileName: []
};
async function Mt(e, r, n, a = bo) {
  if (!n.length)
    throw new Error("no files");
  const o = n[0].url ? n.map((i) => i.url) : xo(n, a);
  return e.createDMAssets(r, o, a).then((i) => i.getAllItems());
}
function xo(e, r) {
  const n = new FormData();
  return e.forEach((a, o) => {
    const i = r?.fileName?.[o] || a.name, s = r?.preserveFilenames && r?.fieldName ? r.fieldName : "file";
    n.append(s, a, i);
  }), r && ["preserveFilenames", "includeAssetIDInPath", "ignoreDuplicates", "deduplicate"].forEach((a) => {
    a in r && n.append(a, `${r[a]}`);
  }), n;
}
function rn(e, r = 65) {
  return e?.length <= r ? e : `${e?.slice(0, r)}...`;
}
function nn({
  children: e,
  onDrop: r
}) {
  const [{
    canDrop: n,
    isOver: a
  }, o] = zr(() => ({
    accept: [zn.FILE],
    drop(s) {
      r?.(s);
    },
    collect: (s) => ({
      isOver: s.isOver(),
      canDrop: s.canDrop()
    })
  }), [r]);
  return e({
    isActive: n && a,
    drop: o
  });
}
const wo = "border border border-gray-600 dark:border-gray-500 p-4 rounded-md flex justify-center items-center";
function It({
  children: e,
  onDrop: r
}) {
  return /* @__PURE__ */ t(nn, {
    onDrop: r,
    children: ({
      drop: n,
      isActive: a
    }) => /* @__PURE__ */ l("div", {
      className: "relative",
      ref: n,
      children: [typeof e == "function" ? e({
        isActive: a
      }) : e, a && /* @__PURE__ */ t("div", {
        className: A(wo, "absolute top-0 left-0 w-full h-full bg-indigo-600 bg-opacity-50"),
        children: "Loslassen zum Hochladen!"
      })]
    })
  });
}
function ko({
  onDrop: e
}) {
  return /* @__PURE__ */ t(It, {
    onDrop: e,
    children: /* @__PURE__ */ l("div", {
      className: "bg-white dark:bg-gray-600 border border-dashed border-gray-400 dark:border-gray-400 flex flex-col space-y-4 items-center py-4 rounded-md text-gray-500 dark:text-gray-300",
      children: [/* @__PURE__ */ t(wi, {
        className: "w-8 h-8"
      }), /* @__PURE__ */ l("div", {
        className: "flex flex-col space-y-1 text-center",
        children: [/* @__PURE__ */ t("strong", {
          children: "Klick um eine neue Datei hochzuladen"
        }), /* @__PURE__ */ t("span", {
          children: "oder lege eine Datei auf dieser Fl\xE4che ab"
        })]
      })]
    })
  });
}
function No(e = 1e3) {
  const [r, n] = T(void 0), a = Re(null);
  return G(() => clearTimeout(a.current), []), [r, () => {
    n(!0), a.current = setTimeout(() => {
      n(!1);
    }, e);
  }];
}
function Co(e) {
  const {
    className: r,
    children: n,
    value: a,
    fallback: o = ""
  } = e, [i, s] = No(2e3);
  return a ? /* @__PURE__ */ l("a", {
    className: A("inline-flex items-center group text-indigo-600 dark:text-indigo-300 cursor-pointer whitespace-nowrap", r),
    title: a,
    onClick: (c) => {
      c.stopPropagation(), s(), navigator.clipboard.writeText(a);
    },
    children: [n, /* @__PURE__ */ t(Vr, {
      className: A("w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-all", i ? "animate-bounce text-green-400" : "")
    }), /* @__PURE__ */ t("span", {
      className: "text-green-400 ml-1 opacity-0 group-hover:opacity-100 transition-opacity",
      children: i ? "kopiert!" : ""
    })]
  }) : /* @__PURE__ */ t(re, {
    children: o
  });
}
function jt(e) {
  const {
    href: r,
    className: n,
    children: a,
    fallback: o = "",
    target: i = "_blank"
  } = e;
  return r ? /* @__PURE__ */ l("a", {
    className: `inline-flex items-center group text-indigo-600 dark:text-indigo-300 whitespace-nowrap ${n || ""}`,
    href: r,
    target: i,
    onClick: (s) => s.stopPropagation(),
    children: [/* @__PURE__ */ t(na, {
      className: "w-4 h-4 block opacity-0 group-hover:opacity-100"
    }), /* @__PURE__ */ t("div", {
      className: "flex items-center",
      children: a
    })]
  }) : /* @__PURE__ */ t(re, {
    children: o
  });
}
const So = (e, r, n) => (a, o) => {
  const { getValues: i, setValue: s } = r, c = i(e);
  [c[a], c[o]] = [c[o], c[a]], s(e, [...c], { shouldDirty: !0 }), n?.(a, o);
}, $o = (e, r, n) => {
  const { getValues: a, setValue: o } = r, i = a(e) || [];
  i.splice(n, 1), o(e, [...i], { shouldDirty: !0 });
};
function Do(e) {
  const r = Re(null), n = Re(null), {
    index: a,
    type: o = "dnd",
    children: i,
    onDrop: s,
    disabled: c = !1,
    onDragHover: h
  } = e, [{
    isDragging: d
  }, y, g] = Bn(() => ({
    type: o,
    item: {
      index: a
    },
    collect: (C) => ({
      isDragging: C.isDragging()
    }),
    canDrag: () => !c
  }), [a, c]), [v, w] = zr(() => ({
    accept: o,
    drop: (C) => s(C.index, a),
    hover: (C, x) => {
      if (!h)
        return;
      const N = C.index, b = a;
      if (N === b)
        return;
      const D = n.current?.getBoundingClientRect(), H = (D.bottom - D.top) / 2, O = x.getClientOffset().y - D.top;
      N < b && O < H || N > b && O > H || (C.index = b, h?.(N, b));
    },
    canDrop: () => !c
  }), [a, c]);
  return y(r), w(n), /* @__PURE__ */ t("div", {
    ref: w,
    style: v,
    className: "relative",
    children: /* @__PURE__ */ l("div", {
      ref: g,
      className: "relative",
      children: [d && /* @__PURE__ */ t("div", {
        className: "absolute h-full w-full border-2 border-dashed border-gray-200"
      }), /* @__PURE__ */ t("div", {
        style: d ? {
          opacity: 0
        } : {},
        children: i(r, n)
      })]
    })
  });
}
const Ro = (e, r) => e.split(".").reduce((n, a) => n?.[a], r), Ze = ({
  errors: e,
  name: r,
  type: n,
  className: a,
  children: o
}) => {
  const i = Ro(r, e);
  return !i || n && i.type !== n ? null : /* @__PURE__ */ t("span", {
    className: A("text-red-600", a),
    children: i.message || o
  });
}, Eo = "/assets/IXO.svg";
function ot(e) {
  const {
    icon: r,
    className: n,
    children: a,
    iconClass: o
  } = e;
  return /* @__PURE__ */ l("div", {
    className: A("inline-flex", a ? "inline-flex space-x-1 items-center" : "", n),
    children: [/* @__PURE__ */ t(ot.Icon, {
      icon: r,
      className: o
    }), a && /* @__PURE__ */ t("div", {
      children: a
    })]
  });
}
ot.Toggle = ({
  icon: e,
  tooltip: r,
  placement: n,
  value: a,
  onClick: o
}) => {
  const i = /* @__PURE__ */ t(Rt, {
    label: r || "",
    placement: n,
    children: /* @__PURE__ */ t(ot.Icon, {
      icon: e,
      className: "w-6 h-6"
    })
  });
  return a ? /* @__PURE__ */ t(Ee.Primary, {
    className: "cursor-pointer",
    onClick: o,
    children: i
  }) : /* @__PURE__ */ t(Ee.Light, {
    className: "cursor-pointer",
    onClick: o,
    children: i
  });
};
ot.Icon = (e) => {
  const {
    icon: r,
    className: n
  } = e;
  return /* @__PURE__ */ t("div", {
    className: A("w-4 h-4", n),
    children: /* @__PURE__ */ t("svg", {
      className: "w-full h-full fill-current",
      children: /* @__PURE__ */ t("use", {
        xlinkHref: `${Eo}#${r}`
      })
    })
  });
};
const k = J.div`space-y-6 sm:space-y-5`, Mo = (e) => /* @__PURE__ */ t("div", {
  className: A(!e.$first && "sm:border-t sm:border-gray-200 dark:sm:border-gray-600 sm:pt-5", e.$dense ? "flex flex-col space-y-2" : "sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start ", e.className),
  children: e.children
});
k.Item = Mo;
k.Item.Label = J.label`
block text-sm font-medium text-gray-700 dark:text-gray-300
`;
k.Item.Body = J.div`
mt-1 sm:mt-0 sm:col-span-2
`;
k.Item.Caption = J.p`text-xs text-gray-500 dark:text-gray-400`;
k.Textarea = Ce((e, r) => /* @__PURE__ */ t("textarea", {
  ref: r,
  ...e,
  className: `block w-full shadow-sm 
      focus:ring-indigo-500 focus:border-indigo-500 
      sm:text-sm 
      border-gray-300 dark:border-gray-500 rounded-md 
      dark:bg-gray-700`
}));
k.Checkbox = Ce((e, r) => /* @__PURE__ */ t("input", {
  ref: r,
  ...e,
  type: "checkbox",
  className: A("border-gray-300 dark:border-gray-500 rounded text-indigo-600 focus:ring-indigo-500 dark:bg-gray-700", e.className)
}));
k.Item.Checkbox = Ce((e, r) => {
  const {
    children: n,
    label: a,
    caption: o = ""
  } = e;
  return /* @__PURE__ */ l("label", {
    className: "relative flex items-start cursor-pointer",
    children: [/* @__PURE__ */ t("div", {
      className: "flex items-center h-5",
      children: n
    }), /* @__PURE__ */ l("div", {
      className: "ml-3 text-sm",
      children: [/* @__PURE__ */ t("div", {
        className: "font-medium text-gray-700 dark:text-gray-300",
        children: a
      }), o && /* @__PURE__ */ t("p", {
        className: "text-gray-500 dark:text-gray-400",
        children: o
      })]
    })]
  });
});
k.Item.Draggable = ({
  children: e,
  name: r,
  form: n,
  index: a,
  onSwap: o,
  removable: i = !0
}) => /* @__PURE__ */ t(Ue.Nested, {
  children: /* @__PURE__ */ t(Do, {
    type: "benefit",
    index: a,
    onDrop: So(r, n, o),
    children: (s) => /* @__PURE__ */ l(Ue.Nested, {
      className: "flex justify-between",
      children: [/* @__PURE__ */ t("div", {
        className: "p-2 w-full",
        children: e
      }), /* @__PURE__ */ l("div", {
        className: i ? "" : "flex items-center",
        children: [/* @__PURE__ */ t("div", {
          ref: s,
          className: "cursor-move p-2",
          children: /* @__PURE__ */ t(ot, {
            icon: "drag-handle"
          })
        }), i && /* @__PURE__ */ t("button", {
          onClick: () => $o(r, n, a),
          className: "p-2",
          children: /* @__PURE__ */ t(Rt, {
            label: "entfernen",
            placement: "left",
            children: /* @__PURE__ */ t(ot, {
              icon: "close"
            })
          })
        })]
      })]
    })
  })
});
k.Checkbox.Label = J.label`flex space-x-2 items-center`;
k.Radio = Ce((e, r) => /* @__PURE__ */ t("input", {
  ref: r,
  ...e,
  type: "radio",
  className: A("border-gray-300 dark:border-gray-500 rounded-full text-indigo-600 focus:ring-indigo-500 dark:bg-gray-700", e.className)
}));
k.Item.text = `
block w-full shadow-sm 
focus:ring-indigo-500 focus:border-indigo-500 
sm:text-sm 
border-gray-300 dark:border-gray-500 rounded-md 
dark:bg-gray-700
`;
k.Item.checkbox = `
border-gray-300 dark:border-gray-500 rounded text-indigo-600 focus:ring-indigo-500 dark:bg-gray-700
`;
k.Sections = ({
  children: e
}) => /* @__PURE__ */ t("div", {
  className: "space-y-6 pt-6 mb-6",
  children: e
});
k.Section = ({
  children: e
}) => /* @__PURE__ */ t("div", {
  className: "bg-slate-50 dark:bg-slate-600 shadow px-4 py-5 sm:rounded-lg sm:p-6",
  children: /* @__PURE__ */ t("div", {
    className: "md:grid md:grid-cols-3 md:gap-6",
    children: e
  })
});
k.Section.Left = ({
  children: e
}) => /* @__PURE__ */ t("div", {
  className: "md:col-span-1",
  children: e
});
k.Section.Right = ({
  children: e
}) => /* @__PURE__ */ t("div", {
  className: "mt-5 md:mt-0 md:col-span-2",
  children: /* @__PURE__ */ t("div", {
    className: "grid grid-cols-6 gap-6",
    children: e
  })
});
k.Error = Ze;
const an = Pr(null);
function De({
  children: e,
  open: r,
  onClose: n,
  backdrop: a,
  className: o
}) {
  return /* @__PURE__ */ t(an.Provider, {
    value: {
      open: r,
      onClose: n
    },
    children: /* @__PURE__ */ t(be.Root, {
      show: r,
      as: me,
      children: /* @__PURE__ */ t(ze, {
        as: "div",
        className: "fixed inset-0 overflow-hidden z-[999]",
        onClose: n,
        children: /* @__PURE__ */ l("div", {
          className: A("absolute inset-0 overflow-hidden", a ? "bg-gray-500 bg-opacity-50 transition-opacity" : ""),
          children: [/* @__PURE__ */ t(ze.Overlay, {
            className: "absolute inset-0"
          }), /* @__PURE__ */ t("div", {
            className: "fixed inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16",
            children: /* @__PURE__ */ t(be.Child, {
              as: me,
              enter: "transform transition ease-in-out duration-500 sm:duration-700",
              enterFrom: "translate-x-full",
              enterTo: "translate-x-0",
              leave: "transform transition ease-in-out duration-500 sm:duration-700",
              leaveFrom: "translate-x-0",
              leaveTo: "translate-x-full",
              children: /* @__PURE__ */ t("div", {
                className: A("w-screen max-w-2xl", o),
                children: /* @__PURE__ */ t("div", {
                  className: "h-full flex flex-col bg-white dark:bg-gray-700 shadow-xl overflow-y-scroll",
                  children: e
                })
              })
            })
          })]
        })
      })
    })
  });
}
De.Head = ({
  children: e
}) => /* @__PURE__ */ t("div", {
  className: "pt-6 px-4 sm:px-6",
  children: /* @__PURE__ */ t("div", {
    className: "flex items-start justify-between",
    children: e
  })
});
De.Heading = ({
  children: e
}) => /* @__PURE__ */ t(ze.Title, {
  className: "overflow-hidden text-lg font-medium text-gray-900 dark:text-gray-200",
  children: e
});
De.X = ({
  onClose: e
}) => {
  const {
    onClose: r
  } = qt(an);
  return /* @__PURE__ */ t("div", {
    className: "ml-3 h-7 flex items-center",
    children: /* @__PURE__ */ l("button", {
      type: "button",
      className: "rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",
      onClick: e || r,
      children: [/* @__PURE__ */ t("span", {
        className: "sr-only",
        children: "Close panel"
      }), /* @__PURE__ */ t(Kt, {
        className: "h-5 w-5",
        "aria-hidden": "true"
      })]
    })
  });
};
De.Body = ({
  children: e
}) => /* @__PURE__ */ t("div", {
  className: "pb-6 relative flex-1 px-4 sm:px-6",
  children: e
});
function Io() {
  return `_${Math.random().toString(36).substr(2, 9)}`;
}
function Ne({
  children: e,
  label: r,
  className: n,
  showIcon: a = !0
}) {
  return /* @__PURE__ */ l(at, {
    as: "div",
    className: `inline-block text-left ${n || ""}`,
    children: [/* @__PURE__ */ t("div", {
      children: /* @__PURE__ */ l(at.Button, {
        className: "group inline-flex items-center justify-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900",
        children: [/* @__PURE__ */ t("span", {
          children: r
        }), a && /* @__PURE__ */ t(Yr, {
          className: "flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500",
          "aria-hidden": "true"
        })]
      })
    }), /* @__PURE__ */ t("div", {
      className: "relative z-[64]",
      children: /* @__PURE__ */ t(be, {
        as: me,
        enter: "transition ease-out duration-100",
        enterFrom: "transform opacity-0 scale-95",
        enterTo: "transform opacity-100 scale-100",
        leave: "transition ease-in duration-75",
        leaveFrom: "transform opacity-100 scale-100",
        leaveTo: "transform opacity-0 scale-95",
        children: /* @__PURE__ */ t(at.Panel, {
          children: e
        })
      })
    })]
  });
}
const _o = ({
  children: e,
  $right: r
}) => /* @__PURE__ */ t("div", {
  className: `
${r ? "origin-top-right right-0" : "origin-top-left left-0"} absolute mt-2 bg-white dark:bg-gray-800 rounded-md shadow-2xl p-4 ring-1 ring-black ring-opacity-5 focus:outline-none z-[64]
`,
  children: e
});
Ne.Panel = _o;
const Fo = ({
  checked: e,
  onChange: r,
  children: n,
  className: a
}) => {
  const o = Io();
  return /* @__PURE__ */ l("div", {
    className: A("flex items-center", a),
    children: [/* @__PURE__ */ t("input", {
      id: o,
      name: o,
      checked: e || !1,
      onChange: r,
      type: "checkbox",
      className: `h-4 w-4 ${k.Item.checkbox}`
    }), /* @__PURE__ */ t("label", {
      htmlFor: o,
      className: "ml-3 pr-6 text-sm font-medium text-gray-900 dark:text-gray-300 whitespace-nowrap select-none",
      children: n
    })]
  });
};
Ne.Checkbox = Fo;
const Ao = ({
  items: e = [],
  value: r,
  onChange: n,
  getLabel: a,
  $right: o
}) => /* @__PURE__ */ t(Ne, {
  label: a(e.filter((i) => i.value && r?.includes(i.value)), r),
  children: /* @__PURE__ */ t(Ne.Panel, {
    $right: o,
    children: /* @__PURE__ */ t("form", {
      className: "space-y-4",
      children: e?.map((i, s) => /* @__PURE__ */ t(Ne.Checkbox, {
        checked: !!i.value && r?.includes(i.value),
        onChange: (c) => {
          n(c.target.checked ? (r || []).concat(i.value ? [i.value] : []) : (r || []).filter((h) => h !== i.value));
        },
        children: i.label
      }, s))
    })
  })
});
Ne.Checker = Ao;
const Lo = ({
  name: e,
  rules: r,
  control: n,
  items: a,
  getLabel: o
}) => /* @__PURE__ */ t(Ae, {
  render: ({
    field: i
  }) => /* @__PURE__ */ t(Ne.Checker, {
    items: a,
    value: i.value,
    onChange: i.onChange,
    getLabel: o
  }),
  control: n,
  name: e,
  rules: r
});
Ne.CheckerInput = Lo;
const Oo = J.div`border border-gray-300 dark:border-gray-100`;
Ne.Divider = Oo;
function To({
  name: e,
  rules: r,
  control: n
}) {
  return /* @__PURE__ */ t(Ae, {
    render: ({
      field: a
    }) => /* @__PURE__ */ t(jo, {
      value: a.value,
      onChange: a.onChange
    }),
    control: n,
    name: e,
    rules: r
  });
}
function jo({
  value: e,
  onChange: r
}) {
  const [n, a] = T(""), o = () => {
    n && !e.includes(n) && (r(e.concat([n])), a(""));
  };
  return /* @__PURE__ */ l("div", {
    className: "flex-col",
    children: [/* @__PURE__ */ t("div", {
      className: "flex items-center flex-wrap",
      children: (e || []).map((i) => typeof i != "object" ? {
        value: i,
        label: i
      } : i).map((i) => /* @__PURE__ */ t(Po, {
        hasX: !0,
        theme: "gray",
        onX: () => r(e.filter((s) => s !== i.value)),
        className: "mr-2 mb-2",
        children: i.label
      }, i.value))
    }), /* @__PURE__ */ l("div", {
      className: "flex items-center",
      children: [/* @__PURE__ */ t(K, {
        type: "text",
        placeholder: "Tag eingeben..",
        value: n,
        onChange: (i) => a(i.target.value),
        onKeyPress: (i) => {
          i.key === "Enter" && o();
        }
      }), /* @__PURE__ */ t(z.Action, {
        $primary: !0,
        onClick: () => o(),
        children: /* @__PURE__ */ t(Wr, {
          className: "w-4 h-4"
        })
      })]
    })]
  });
}
function Po({
  children: e,
  theme: r = "gray",
  showDot: n = !1,
  hasX: a = !1,
  onX: o,
  className: i
}) {
  return /* @__PURE__ */ l("span", {
    className: `inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium dark:bg-${r}-600 dark:text-${r}-200 bg-${r}-100 text-${r}-800 ${i}`,
    children: [n && /* @__PURE__ */ t("svg", {
      className: `-ml-0.5 mr-1.5 h-2 w-2 text-${r}-400`,
      fill: "currentColor",
      viewBox: "0 0 8 8",
      children: /* @__PURE__ */ t("circle", {
        cx: 4,
        cy: 4,
        r: 3
      })
    }), e, a && /* @__PURE__ */ l("button", {
      type: "button",
      onClick: o,
      className: `-mr-0.5 flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-${r}-400 hover:bg-${r}-200 hover:text-${r}-500 focus:outline-none focus:bg-${r}-500 focus:text-white`,
      children: [/* @__PURE__ */ t("span", {
        className: "sr-only",
        children: "Remove large option"
      }), /* @__PURE__ */ t("svg", {
        className: "h-2 w-2",
        stroke: "currentColor",
        fill: "none",
        viewBox: "0 0 8 8",
        children: /* @__PURE__ */ t("path", {
          strokeLinecap: "round",
          strokeWidth: "1.5",
          d: "M1 1l6 6m0-6L1 7"
        })
      })]
    })]
  });
}
function Bo() {
  return dt(["DataManager", Pe.env], () => new jn(Pe.env));
}
function er() {
  const {
    api: e
  } = Be(), {
    data: r
  } = Bo();
  return dt(e && r ? ["DataManager", e.dataManagerID] : null, () => r.dataManager(e.dataManagerID));
}
function Nt(e) {
  return e.split("/")[0];
}
function on(e, r, n = !1) {
  const a = n ? "thumbSizes" : "imageSizes", o = r.settings?.[a], i = e.config?.assetSettings?.[a];
  return (o || i || [256, 512, 1024, 2048, 4096]).sort((c, h) => c - h);
}
function Ht(e, r = !1, n, a) {
  if (Nt(e.mimetype) !== "image" || e.mimetype === "image/svg")
    return [];
  const o = r ? "thumbnails" : "fileVariants", i = r ? "t" : "f", s = r ? (g) => g.dimension : (g) => Math.max(g.resolution.width, g.resolution.height), h = `https://datamanager${a[Symbol.for("environment")] === "stage" ? ".cachena" : ""}.entrecode.de`, d = Math.max(e.file.resolution.width, e.file.resolution.height);
  return on(a, n, r).filter((g) => g < d).map((g) => {
    const v = e[o].find((x) => g === s(x)), w = `${h}/${i}/${a.shortID}/${e.assetID}/${g}`, C = v ? v.url : w;
    return { size: g, url: C, generated: v };
  });
}
function zo(e, r, n = !1, a, o) {
  if (Nt(e.mimetype) !== "image" || e.mimetype === "image/svg")
    return e.file.url;
  const i = n ? (y) => y.dimension : (y) => Math.max(y.resolution.width, y.resolution.height), c = on(o, a, n).find((y) => y >= r);
  if (c > i(e.file))
    return e.file.url;
  const d = Ht(e, n, a, o).find((y) => y.size === c);
  return d ? d.url : e.file.url;
}
async function Ho({ api: e, group: r, ids: n, perBulk: a = 2, onProgress: o }) {
  for (; n.length; ) {
    const i = await e.dmAssetList(r.assetGroupID, {
      assetID: { any: n.slice(0, a) }
    });
    n = n.slice(a), await Promise.all(i.items.map((s) => s.del())), o();
  }
}
const Yo = (e) => {
  const [r, n] = e.split("/"), a = {
    video: Pi,
    text: Sr
  }[r];
  if (a)
    return a;
  const o = {
    pdf: Sr,
    svg: qr
  }[n];
  if (o)
    return o;
};
function Yt({
  asset: e,
  group: r,
  size: n = 200,
  onClick: a,
  className: o,
  label: i = rn(e.title, 20),
  selected: s
}) {
  const {
    data: c
  } = er(), h = Ie(() => e && !e.upload && r && c ? zo(e, n, !1, r, c) : null, [e, r, c]), d = "aspect-w-1 aspect-h-1 bg-white dark:bg-gray-600  shadow-lg rounded-lg overflow-hidden";
  if (e.upload) {
    const v = Nt(e.upload.type), w = URL.createObjectURL(e.upload);
    return /* @__PURE__ */ l("div", {
      children: [/* @__PURE__ */ l("div", {
        className: d + " relative",
        children: [v === "image" ? /* @__PURE__ */ t("img", {
          className: "object-cover",
          src: w
        }) : /* @__PURE__ */ t("div", {
          className: "flex justify-center items-center",
          children: "upload"
        }), /* @__PURE__ */ t("div", {
          className: "flex items-center justify-center w-full h-full",
          children: /* @__PURE__ */ t(ct, {
            className: "w-16 h-16"
          })
        })]
      }), i && /* @__PURE__ */ t(Ee.Light, {
        className: "text-sm mt-2 block",
        title: e.title,
        children: i
      })]
    });
  }
  const y = Nt(e.mimetype), g = Yo(e.mimetype);
  return /* @__PURE__ */ l("div", {
    className: A(o, a ? "group cursor-pointer" : ""),
    onClick: () => a?.(e),
    children: [/* @__PURE__ */ t("div", {
      className: A(d, a && "group-hover:opacity-50", s && "outline outline-offset-2 outline-4 outline-indigo-800 dark:outline-indigo-400"),
      children: y === "image" ? /* @__PURE__ */ t("img", {
        className: "object-cover",
        src: h
      }) : /* @__PURE__ */ t("div", {
        className: "flex justify-center items-center",
        children: g ? /* @__PURE__ */ t(g, {
          className: "w-12 h-12"
        }) : /* @__PURE__ */ t(re, {
          children: e.mimetype
        })
      })
    }), i && /* @__PURE__ */ t(Ee.Light, {
      className: "text-sm mt-2 block",
      title: e.title,
      children: i
    })]
  });
}
function Ll({
  asset: e,
  group: r,
  onClose: n,
  onSubmit: a
}) {
  const {
    reset: o,
    register: i,
    control: s,
    handleSubmit: c,
    formState: {
      isSubmitting: h
    }
  } = st();
  G(() => {
    if (e) {
      let {
        title: v,
        tags: w,
        caption: C
      } = e;
      o({
        title: v,
        caption: C,
        tags: w
      });
    }
  }, [e]);
  const {
    data: d
  } = er(), {
    fileVariants: y,
    thumbnails: g
  } = Ie(() => !e || !r || !d ? {} : {
    fileVariants: Ht(e, !1, r, d),
    thumbnails: Ht(e, !0, r, d)
  }, [e, r, d]);
  return /* @__PURE__ */ t(De, {
    open: !!e,
    onClose: () => n?.(null),
    children: e && /* @__PURE__ */ l(re, {
      children: [/* @__PURE__ */ l(De.Head, {
        children: [/* @__PURE__ */ t(De.Heading, {
          children: e?.title
        }), /* @__PURE__ */ t(De.X, {})]
      }), /* @__PURE__ */ l(De.Body, {
        children: [/* @__PURE__ */ l("div", {
          className: "grid grid-cols-2 gap-4",
          children: [/* @__PURE__ */ t(Yt, {
            asset: e,
            size: 600,
            label: "",
            group: r
          }), /* @__PURE__ */ l("div", {
            className: "flex flex-col space-y-1",
            children: [g?.map((v, w) => /* @__PURE__ */ l(jt, {
              href: v.url,
              children: ["Thumbnail ", v.size, v.generated && /* @__PURE__ */ t(xt, {
                className: "w-5 h-5"
              })]
            }, w)), y?.map((v, w) => /* @__PURE__ */ l(jt, {
              href: v.url,
              children: ["Variante ", v.size, v.generated && /* @__PURE__ */ t(xt, {
                className: "w-5 h-5"
              })]
            }, w)), /* @__PURE__ */ l(jt, {
              href: e.file.url,
              children: ["Original", " ", e.file.resolution ? Math.max(e.file.resolution.width, e.file.resolution.height) : "", " ", /* @__PURE__ */ t(xt, {
                className: "w-5 h-5"
              })]
            })]
          })]
        }), /* @__PURE__ */ t("div", {
          className: "my-4",
          children: /* @__PURE__ */ l(Ee.Secondary, {
            children: [sn(e.file.size), " | Typ: ", e.mimetype.split("/")?.[1], " | Duplikate: ", e.duplicates, " ", "| ID: ", /* @__PURE__ */ t(Co, {
              value: e.assetID,
              children: e.assetID
            })]
          })
        }), /* @__PURE__ */ l(k, {
          $dense: !0,
          children: [/* @__PURE__ */ l(k.Item, {
            children: [/* @__PURE__ */ t(k.Item.Label, {
              children: "Titel"
            }), /* @__PURE__ */ t(k.Item.Body, {
              children: /* @__PURE__ */ t(K, {
                type: "text",
                ...i("title")
              })
            })]
          }), /* @__PURE__ */ l(k.Item, {
            children: [/* @__PURE__ */ t(k.Item.Label, {
              children: "Alt"
            }), /* @__PURE__ */ t(k.Item.Body, {
              children: /* @__PURE__ */ t(K, {
                type: "text",
                ...i("caption")
              })
            })]
          }), /* @__PURE__ */ l(k.Item, {
            children: [/* @__PURE__ */ t(k.Item.Label, {
              children: "Tags ausw\xE4hlen"
            }), /* @__PURE__ */ t(k.Item.Body, {
              children: /* @__PURE__ */ t(To, {
                control: s,
                name: "tags"
              })
            })]
          }), /* @__PURE__ */ l("div", {
            className: "flex space-x-2 justify-end",
            children: [/* @__PURE__ */ t(z, {
              $secondary: !0,
              onClick: () => n?.(),
              children: "Abbrechen"
            }), /* @__PURE__ */ l(z, {
              $primary: !0,
              onClick: c(async (v) => {
                if (!h)
                  try {
                    Object.assign(e, v), await e.save(), n?.(), a?.(e);
                  } catch (w) {
                    console.error(w);
                  }
              }),
              children: ["Speichern ", h && /* @__PURE__ */ t(ct, {
                className: "ml-2 w-5 h-5"
              })]
            })]
          })]
        })]
      })]
    })
  });
}
function sn(e) {
  const r = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  let n = 0;
  for (; e >= 1024; )
    e /= 1024, n++;
  return `${e.toFixed(1)} ${r[n]}`;
}
function Vo({
  onClickAsset: e,
  manager: r
}) {
  const {
    selection: n,
    group: a,
    query: o,
    type: i,
    view: s,
    page: c,
    setPage: h
  } = r, d = et(), {
    api: y
  } = Be(), [g, v] = T(!1);
  G(() => {
    h(1);
  }, [a, i, o]);
  const w = 12, {
    list: {
      items: C,
      data: x,
      error: N,
      mutate: b
    }
  } = r, D = !x && !N, H = !N && x && C?.length === 0, Y = async ({
    files: E
  }) => {
    b((P) => ({
      ...P,
      items: [...E.map((B) => ({
        upload: B
      })), ...P.items].slice(0, w)
    }), !1);
    try {
      await Mt(y, a.assetGroupID, E, {
        ignoreDuplicates: !0
      }), d.emit({
        type: "success",
        title: "Erfolgreich hochgeladen."
      });
    } catch (P) {
      d.emit({
        type: "error",
        title: "Fehler beim Hochladen",
        message: P.message
      }), console.log("alram", P);
    }
    await b();
  }, O = async () => {
    if (!(g || !await wt("Wirklich l\xF6schen?", "Das kann nicht r\xFCckg\xE4ngig gemacht werden."))) {
      v(!0);
      try {
        await Ho({
          api: y,
          group: a,
          ids: n.toArray(),
          onProgress: () => b()
        }), d.emit({
          type: "success",
          title: `${n.size} Dateien erfolgreich gel\xF6scht.`
        }), n.clear();
      } catch (E) {
        d.emit({
          type: "error",
          title: "Fehler beim L\xF6schen",
          message: E.message
        });
      }
      v(!1);
    }
  }, F = () => {
    r.onBulkSelect?.(n.toArray());
  }, R = (E) => async (P) => {
    if (P.stopPropagation(), !!await wt("Wirklich l\xF6schen?", "Das kann nicht r\xFCckg\xE4ngig gemacht werden."))
      try {
        b((B) => ({
          ...B,
          items: B.items.filter((X) => X.assetID !== E.assetID)
        }), !1), await E.del(), d.emit({
          type: "success",
          title: "Erfolgreich gel\xF6scht"
        }), await b(), n.include(E.assetID, !1);
      } catch (B) {
        d.emit({
          type: "error",
          title: "Fehler beim L\xF6schen",
          message: B.message
        });
      }
  };
  return /* @__PURE__ */ l("div", {
    children: [/* @__PURE__ */ t("section", {
      className: "mt-6",
      children: /* @__PURE__ */ t(ko, {
        onDrop: Y
      })
    }), /* @__PURE__ */ l("section", {
      className: "mt-6",
      children: [D && /* @__PURE__ */ t(We, {}), N && /* @__PURE__ */ t("p", {
        children: "Fehler beim Laden der Medien"
      }), H && /* @__PURE__ */ t("p", {
        children: "Keine Medien vorhanden"
      }), !n.isEmpty && /* @__PURE__ */ l("div", {
        className: "mb-6 flex items-center",
        children: [/* @__PURE__ */ l(z, {
          className: "rounded-none rounded-l-md",
          $secondary: !0,
          onClick: () => n.clear(),
          children: [/* @__PURE__ */ t(K, {
            type: "checkbox",
            defaultChecked: !0,
            className: "mr-2"
          }), /* @__PURE__ */ l("span", {
            children: [n.size, " ausgew\xE4hlt"]
          })]
        }), r.mode === "bulkDelete" && /* @__PURE__ */ l(z, {
          className: "rounded-none rounded-r-md",
          $secondary: !0,
          onClick: O,
          children: ["Dateien l\xF6schen", g && /* @__PURE__ */ t(ct, {
            className: "ml-2"
          })]
        }), r.mode === "bulkSelect" && /* @__PURE__ */ t(z, {
          className: "rounded-none rounded-r-md",
          $primary: !0,
          onClick: F,
          children: "Fertig"
        })]
      }), s === "tiles" && /* @__PURE__ */ t("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6 mb-6",
        children: C.map((E, P) => /* @__PURE__ */ t(Yt, {
          selected: n?.has(E.assetID),
          asset: E,
          onClick: () => e?.(E),
          group: a,
          size: 400,
          label: rn(E.upload?.name || E.title, 10)
        }, E.assetID || P))
      }), s === "list" && !!C?.length && /* @__PURE__ */ t(re, {
        children: /* @__PURE__ */ l(le, {
          className: "mb-4",
          children: [/* @__PURE__ */ l(le.Head, {
            children: [/* @__PURE__ */ t(le.Header, {}), /* @__PURE__ */ t(le.Header, {}), /* @__PURE__ */ t(le.Header, {
              children: "Dateiname"
            }), /* @__PURE__ */ t(le.Header, {
              children: "Typ"
            }), /* @__PURE__ */ t(le.Header, {
              children: "Gr\xF6\xDFe"
            }), /* @__PURE__ */ t(le.Header, {})]
          }), /* @__PURE__ */ t(le.Body, {
            children: C.map((E, P) => /* @__PURE__ */ l(le.Row, {
              onClick: () => !g && n.toggle(E.assetID),
              className: A("group cursor-pointer", lo),
              children: [/* @__PURE__ */ t(le.Cell, {
                className: "w-12",
                children: /* @__PURE__ */ t(K, {
                  type: "checkbox",
                  checked: n.has(E.assetID),
                  onChange: () => {
                  }
                })
              }), /* @__PURE__ */ t(le.Cell, {
                className: "w-12 h-16 p-0",
                children: /* @__PURE__ */ t(Yt, {
                  asset: E,
                  group: a,
                  size: 100,
                  className: "h-10 w-10",
                  label: " "
                })
              }), /* @__PURE__ */ t(le.Cell, {
                children: E.upload?.name || E.title
              }), /* @__PURE__ */ t(le.Cell, {
                children: E.mimetype
              }), /* @__PURE__ */ t(le.Cell, {
                children: E.file && sn(E.file.size)
              }), /* @__PURE__ */ t(le.Cell, {
                className: "w-12",
                children: /* @__PURE__ */ l("div", {
                  className: "opacity-0 group-hover:opacity-100",
                  children: [/* @__PURE__ */ t(z.Action, {
                    onClick: (B) => {
                      B.stopPropagation(), e?.(E);
                    },
                    tooltip: "Bearbeiten",
                    children: /* @__PURE__ */ t(Qt, {
                      className: "w-5 h-5"
                    })
                  }), /* @__PURE__ */ t(z.Action, {
                    onClick: R(E),
                    tooltip: "L\xF6schen",
                    children: /* @__PURE__ */ t(Dt, {
                      className: "w-5 h-5"
                    })
                  })]
                })
              })]
            }, E.assetID))
          })]
        })
      }), x && /* @__PURE__ */ t(ro, {
        total: x?.total,
        value: c,
        onChange: h,
        count: 12,
        hideTextInfo: !1
      })]
    })]
  });
}
function tr(e) {
  const {
    items: r,
    onChange: n,
    value: a,
    placeholder: o,
    className: i
  } = e, s = (g) => r?.find(({
    value: v
  }) => v === g), [c, h] = T(s(a)), d = (g) => {
    h(g), n?.(g.value);
  };
  G(() => {
    h(s(a));
  }, [a, r]);
  const y = Re();
  return /* @__PURE__ */ t(yt, {
    value: c,
    onChange: d,
    children: ({
      open: g
    }) => /* @__PURE__ */ l("div", {
      className: A("relative min-w-[200px]", i),
      children: [/* @__PURE__ */ l(yt.Button, {
        ref: y,
        className: "bg-white dark:bg-gray-700 relative w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
        children: [/* @__PURE__ */ t("span", {
          className: "block truncate",
          children: c?.label || c?.value || o || "-"
        }), /* @__PURE__ */ t("span", {
          className: "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",
          children: /* @__PURE__ */ t(ka, {
            className: "h-5 w-5 text-gray-400",
            "aria-hidden": "true"
          })
        })]
      }), /* @__PURE__ */ t(be, {
        show: g,
        as: me,
        leave: "transition ease-in duration-100",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0",
        children: /* @__PURE__ */ t(yt.Options, {
          style: {
            width: y?.current?.clientWidth
          },
          className: "absolute z-[1200] mt-1 w-full bg-white dark:bg-gray-700 shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm",
          children: r?.map((v, w) => /* @__PURE__ */ l(me, {
            children: [/* @__PURE__ */ t(yt.Option, {
              className: ({
                active: C
              }) => A(v.hidden && "hidden", C ? "text-white dark:text-gray-300 bg-indigo-600" : "text-gray-900 dark:text-gray-400 ", "cursor-default select-none relative py-2 pl-3 pr-9"),
              value: v,
              children: ({
                selected: C,
                active: x
              }) => /* @__PURE__ */ l(re, {
                children: [/* @__PURE__ */ t("span", {
                  className: A(C ? "font-semibold" : "font-normal", "block truncate"),
                  children: v.label || v.value
                }), C ? /* @__PURE__ */ t("span", {
                  className: A(x ? "text-white" : "text-indigo-600 dark:text-indigo-300", "absolute inset-y-0 right-0 flex items-center pr-4"),
                  children: /* @__PURE__ */ t(Hr, {
                    className: "h-5 w-5",
                    "aria-hidden": "true"
                  })
                }) : null]
              })
            }), v.divider ? /* @__PURE__ */ t("div", {
              className: "my-2 border-b border-gray-500"
            }) : null]
          }, w))
        })
      })]
    })
  });
}
function Uo({
  value: e,
  onChange: r
}) {
  return /* @__PURE__ */ t(tr, {
    className: "!min-w-100px",
    items: [{
      label: "Alle",
      value: ""
    }, {
      label: "Bild",
      value: "image"
    }, {
      label: "Video",
      value: "video"
    }, {
      label: "Audio",
      value: "audio"
    }, {
      label: "Plain",
      value: "plain"
    }, {
      label: "Document",
      value: "document"
    }, {
      label: "Spreadsheet",
      value: "spreadsheet"
    }, {
      label: "Other",
      value: "other"
    }],
    value: e,
    onChange: r,
    placeholder: "Typ"
  });
}
const Vt = ({
  children: e,
  $right: r,
  button: n,
  dropdownClasses: a = ""
}) => /* @__PURE__ */ l(it, {
  as: "div",
  className: "relative inline-block text-left",
  children: [/* @__PURE__ */ t("div", {
    children: /* @__PURE__ */ t(it.Button, {
      as: "div",
      children: n || /* @__PURE__ */ t("div", {
        className: "flex items-center focus:outline-none px-2 py-1",
        children: /* @__PURE__ */ l(Ee.Primary, {
          children: [/* @__PURE__ */ t("span", {
            className: "sr-only",
            children: "Open options"
          }), /* @__PURE__ */ t(Ea, {
            className: "h-5 w-5",
            "aria-hidden": "true"
          })]
        })
      })
    })
  }), /* @__PURE__ */ t(be, {
    as: me,
    enter: "transition ease-out duration-100",
    enterFrom: "transform opacity-0 scale-95",
    enterTo: "transform opacity-100 scale-100",
    leave: "transition ease-in duration-75",
    leaveFrom: "transform opacity-100 scale-100",
    leaveTo: "transform opacity-0 scale-95",
    children: /* @__PURE__ */ t(it.Items, {
      className: A(r ? "origin-top-right right-0" : "origin-top-left left-0", "z-[31] absolute mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none", a),
      children: /* @__PURE__ */ t("div", {
        className: "py-1",
        children: e
      })
    })
  })]
}), Wo = ({
  children: e,
  onClick: r,
  className: n
}) => /* @__PURE__ */ t(it.Item, {
  children: ({
    active: a
  }) => /* @__PURE__ */ t("a", {
    onClick: r,
    className: A("block px-4 py-2 text-sm text-gray-800 dark:text-gray-100", a ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100" : "", n),
    children: e
  })
});
Vt.Item = Wo;
function Go({
  value: e,
  onChange: r,
  options: n,
  children: a
}) {
  const o = Ie(() => "radio-" + window.crypto.getRandomValues(new Uint32Array(1))[0], []);
  return /* @__PURE__ */ t(Vt, {
    $right: !0,
    button: a,
    dropdownClasses: "!w-72",
    children: Object.entries(n).map(([i, s]) => /* @__PURE__ */ t(Vt.Item, {
      className: "!py-0",
      children: /* @__PURE__ */ t(K.Radio, {
        name: o,
        value: i,
        checked: e === i,
        onChange: () => r(i),
        children: s
      })
    }, i))
  });
}
function qo({
  value: e,
  onChange: r
}) {
  return /* @__PURE__ */ t(Go, {
    value: e,
    onChange: r,
    options: {
      "-created": "Hinzugef\xFCgt am (neueste zuerst)",
      created: "Hinzugef\xFCgt am (\xE4lteste zuerst)",
      title: "Dateiname (A-Z)",
      "-title": "Dateiname (Z-A)"
    },
    children: /* @__PURE__ */ l(z, {
      className: "flex items-center space-x-2",
      $secondary: !0,
      children: [/* @__PURE__ */ t(ca, {
        className: "w-5 h-5 pt-0.5"
      }), /* @__PURE__ */ t("span", {
        children: {
          created: "neueste zuerst",
          "-created": "\xE4lteste zuerst",
          title: "A-Z",
          "-title": "Z-A",
          "-size": "gr\xF6\xDFte zuerst",
          size: "kleinste zuerst"
        }[e] || "Sortieren"
      })]
    })
  });
}
function Jo({
  value: e,
  onChange: r
}) {
  return /* @__PURE__ */ l("div", {
    className: "flex",
    children: [/* @__PURE__ */ t(z, {
      $secondary: e !== "tiles",
      $primary: e === "tiles",
      onClick: () => r("tiles"),
      className: "rounded-none rounded-l-md focus:ring-0",
      children: /* @__PURE__ */ t(Ga, {
        className: "w-5 h-5"
      })
    }), /* @__PURE__ */ t(z, {
      $secondary: e !== "list",
      $primary: e === "list",
      onClick: () => r("list"),
      className: "rounded-none rounded-r-md focus:ring-0",
      children: /* @__PURE__ */ t(oa, {
        className: "w-5 h-5"
      })
    })]
  });
}
function Zo({
  manager: e,
  onClickAsset: r
}) {
  return /* @__PURE__ */ l(re, {
    children: [/* @__PURE__ */ l("nav", {
      className: "flex mt-2 justify-between items-center",
      children: [/* @__PURE__ */ l("div", {
        className: "flex space-x-4 items-center",
        children: [/* @__PURE__ */ t(Ka, {
          value: e.query,
          onChange: e.setQuery,
          placeholder: "Dateiname oder Tag"
        }), /* @__PURE__ */ t(Xi, {
          value: e.range,
          onChange: e.setRange
        }), /* @__PURE__ */ t(Uo, {
          value: e.type,
          onChange: e.setType
        }), /* @__PURE__ */ t(en, {
          label: "Duplikate",
          value: e.duplicates,
          onChange: e.setDuplicates
        })]
      }), /* @__PURE__ */ l("div", {
        className: "flex space-x-4 items-center",
        children: [/* @__PURE__ */ t(qo, {
          value: e.sort[0],
          onChange: (n) => e.setSort([n])
        }), /* @__PURE__ */ t(Jo, {
          value: e.view,
          onChange: e.setView
        })]
      })]
    }), /* @__PURE__ */ t(Vo, {
      manager: e,
      onClickAsset: (n) => r?.(n)
    })]
  });
}
function Xo({
  assetGroupID: e,
  swrOptions: r
}) {
  const {
    data: n
  } = er();
  return He(n && e ? ["datamanager.assetGroup", n.dataManagerID, e] : null, () => n.assetGroup(e), r);
}
function Qo(e, r, n) {
  const [a, o] = T(e);
  return G(() => {
    const i = setTimeout(() => {
      o(e), n?.(e);
    }, r);
    return () => {
      clearTimeout(i);
    };
  }, [e, r, n]), a;
}
function Ko(e, r) {
  const [n, a] = T(new Set(e)), o = Re(!0), i = () => new Set(Array.from(n)), s = (N) => a((b) => (b.add(N), i())), c = (N) => a((b) => (b.delete(N), i()));
  G(() => {
    o.current ? o.current = !1 : r?.(Array.from(n));
  }, [n]);
  const h = (N) => n.has(N), d = (N) => h(N) ? c(N) : s(N), y = (N, b) => b ? s(N) : c(N), g = (N) => a(new Set(N)), v = (N) => a((b) => /* @__PURE__ */ new Set([...b, ...N])), w = (N) => Array.from(n).every((b) => N.includes(b)), C = () => a(/* @__PURE__ */ new Set());
  return {
    toArray: () => Array.from(n),
    has: h,
    add: s,
    delete: c,
    toggle: d,
    size: n.size,
    isEmpty: n.size === 0,
    include: y,
    replace: g,
    concat: v,
    includesAll: w,
    clear: C
  };
}
function es(e) {
  return (r, n, a) => {
    const o = Re(), i = e(r, n, a);
    G(() => {
      i.data !== void 0 && (o.current = i.data);
    }, [i.data]);
    const s = Ke(() => {
      o.current = void 0;
    }, []), c = i.data === void 0 ? o.current : i.data, h = i.data === void 0 && o.current !== void 0;
    return { ...i, data: c, isLagging: h, resetLaggy: s };
  };
}
function ts({
  group: e,
  page: r = 1,
  count: n = 12,
  laggy: a = !0,
  filterOptions: o = {},
  sort: i
}) {
  const { api: s } = Be(), { data: c, ...h } = He(
    e ? [`asset/${e}`, r, o, i] : null,
    () => s.dmAssetList(e, { page: r, ...i ? { sort: i } : {}, _count: n, ...o }).catch((d) => {
      throw console.error(d), d;
    }),
    {
      use: a ? [es] : [],
      revalidateOnFocus: !1
    }
  );
  return {
    items: c?.items || [],
    data: c,
    ...h
  };
}
function rs({
  initialGroup: e = null,
  mode: r = "bulkDelete",
  onBulkSelect: n,
  selectedAssetIDs: a
}) {
  const o = Ko(a || []);
  G(() => {
    o.replace(a || []);
  }, [a]);
  const [i, s] = T(e), [c, h] = T(["-created"]), [d, y] = T(""), [g, v] = T(""), [w, C] = T(1), [x, N] = T("tiles"), b = 12, [D, H] = T(!1), [Y, O] = T(), F = Qo(d?.length > 1 ? d : "", 1e3), R = ts({
    group: i?.assetGroupID,
    page: w,
    count: b,
    laggy: !1,
    sort: c,
    filterOptions: {
      ...F ? {
        title: {
          search: F
        }
      } : {},
      ...g ? {
        type: g
      } : {},
      ...D ? {
        duplicates: {
          from: 1
        }
      } : {},
      ...Y ? {
        created: {
          from: new Date(Y[0]),
          to: new Date(Y[1])
        }
      } : {}
    }
  });
  return {
    mode: r,
    list: R,
    group: i,
    selection: o,
    setGroup: s,
    sort: c,
    setSort: h,
    query: d,
    setQuery: y,
    type: g,
    setType: v,
    page: w,
    setPage: C,
    duplicates: D,
    setDuplicates: H,
    range: Y,
    setRange: O,
    view: x,
    setView: N,
    onBulkSelect: n
  };
}
function ln({
  assetGroupID: e,
  open: r,
  onClose: n,
  onChange: a,
  value: o,
  solo: i
}) {
  const s = rs({
    mode: "bulkSelect",
    selectedAssetIDs: o,
    onBulkSelect: (h) => {
      a(h), n();
    }
  }), {
    data: c
  } = Xo({
    assetGroupID: e
  });
  return G(() => {
    c && s.setGroup(c);
  }, [c]), /* @__PURE__ */ t(Et, {
    open: r,
    onClose: () => n(),
    children: /* @__PURE__ */ l("div", {
      className: "w-full 2xl:w-[1300px]",
      children: [/* @__PURE__ */ l("div", {
        className: "flex justify-between items-center mb-4",
        children: [/* @__PURE__ */ l("span", {
          className: "m-0 text-2xl",
          children: ["Bild", !i && "er", " ausw\xE4hlen"]
        }), /* @__PURE__ */ t(z.Action, {
          onClick: () => n(),
          children: /* @__PURE__ */ t(Kt, {
            className: "w-5 h-5"
          })
        })]
      }), /* @__PURE__ */ t(Zo, {
        manager: s,
        onClickAsset: (h) => {
          i ? (a([h.assetID]), n()) : s.selection.toggle(h.assetID);
        }
      })]
    })
  });
}
const rr = Pr(void 0), Te = ({
  children: e,
  className: r
}) => (Array.isArray(e) ? e = e.map(({
  props: n,
  ...a
}, o) => ({
  props: {
    ...n,
    $first: !o,
    $last: o === e.length - 1
  },
  ...a
})) : typeof e == "object" && (e = {
  ...e,
  props: {
    ...e.props,
    $first: !0,
    $last: !0
  }
}), /* @__PURE__ */ t("div", {
  className: A("flex flex-col", r),
  children: /* @__PURE__ */ t("div", {
    className: "-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",
    children: /* @__PURE__ */ t("div", {
      className: "py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8",
      children: /* @__PURE__ */ t("div", {
        className: "shadow border-b border-gray-200 dark:border-gray-800 sm:rounded-lg",
        children: e
      })
    })
  })
})), ns = ({
  children: e,
  $first: r,
  $last: n
}) => /* @__PURE__ */ t(St, {
  children: (a) => /* @__PURE__ */ t(rr.Provider, {
    value: {
      ctx: a,
      $first: r,
      $last: n
    },
    children: e
  })
});
Te.Item = ns;
const as = ({
  children: e
}) => {
  const {
    ctx: {
      open: r
    },
    $first: n,
    $last: a
  } = qt(rr);
  return /* @__PURE__ */ l(St.Button, {
    className: A("border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-700 flex w-full justify-between px-4 py-4 text-left text-sm font-medium whitespace-nowrap text-gray-900 dark:text-gray-200 focus-visible:ring-indigo-500 focus-visible:ring-opacity-75", n ? "rounded-t-md" : "", a && !r ? "rounded-b-md" : ""),
    children: [/* @__PURE__ */ t("span", {
      children: e
    }), /* @__PURE__ */ t(yi, {
      className: `${r ? "rotate-180 transform" : ""} h-4 w-4`
    })]
  });
};
Te.Head = as;
const is = ({
  children: e,
  className: r
}) => {
  const {
    $last: n
  } = qt(rr);
  return /* @__PURE__ */ t(be, {
    enter: "transition duration-100 ease-out",
    enterFrom: "transform scale-95 opacity-0",
    enterTo: "transform scale-100 opacity-100",
    leave: "transition duration-75 ease-out",
    leaveFrom: "transform scale-100 opacity-100",
    leaveTo: "transform scale-95 opacity-0",
    children: /* @__PURE__ */ t(St.Panel, {
      className: A("bg-white dark:bg-gray-800  text-gray-900 dark:text-gray-200 px-4 py-4 overflow-hidden", r, n ? "rounded-b-md" : ""),
      children: e
    })
  });
};
Te.Body = is;
Te.Example = () => /* @__PURE__ */ l(Te, {
  children: [/* @__PURE__ */ l(Te.Item, {
    children: [/* @__PURE__ */ t(Te.Head, {
      children: "Logo"
    }), /* @__PURE__ */ t(Te.Body, {
      children: "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked."
    })]
  }), /* @__PURE__ */ l(Te.Item, {
    children: [/* @__PURE__ */ t(Te.Head, {
      children: "Farben"
    }), /* @__PURE__ */ t(Te.Body, {
      children: "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked."
    })]
  })]
});
function Ol({
  children: e,
  onClick: r,
  action: n
}) {
  return /* @__PURE__ */ t("div", {
    className: "rounded-md bg-blue-100 p-4",
    children: /* @__PURE__ */ l("div", {
      className: "flex",
      children: [/* @__PURE__ */ t("div", {
        className: "flex-shrink-0 mr-4",
        children: /* @__PURE__ */ t(La, {
          className: "h-5 w-5 text-blue-400",
          "aria-hidden": "true"
        })
      }), /* @__PURE__ */ t("div", {
        className: "text-sm text-blue-700 w-full",
        children: e
      })]
    })
  });
}
function nr(e, r) {
  const { best: n } = e?.fileVariants?.reduce((a, o) => {
    const {
      resolution: { width: i, height: s }
    } = o, c = Math.abs(Math.max(i, s) - r);
    return !a || c < a.diff ? { diff: c, best: o } : a;
  }, null) || {};
  return n?.url || e?.file?.url;
}
const Ct = (e) => {
  const {
    src: r,
    style: n = {},
    title: a,
    className: o = "",
    clickable: i = !1
  } = e, [s, c] = T(!r);
  G(() => {
  }, []);
  const h = Ie(() => /* @__PURE__ */ t("img", {
    src: r,
    alt: a,
    loading: "lazy",
    className: A("max-w-full max-h-full object-center object-contain", i ? "group-hover:opacity-75 cursor-pointer" : "", s ? "opacity-25" : ""),
    onLoad: () => c(!1)
  }), [r, a]);
  return /* @__PURE__ */ l("div", {
    className: A("group overflow-hidden relative flex bg-gray-200 dark:bg-gray-600 justify-center items-center", o),
    style: n,
    children: [h, s && /* @__PURE__ */ t(We, {})]
  });
};
Ct.Asset = ({
  asset: e,
  size: r = 64,
  width: n = r,
  height: a = r,
  onClick: o
}) => {
  const i = {
    width: n,
    height: a
  };
  return /* @__PURE__ */ t("div", {
    className: o ? "cursor-pointer" : "",
    onClick: (s) => o?.(s),
    children: e ? /* @__PURE__ */ t(Ct, {
      src: nr(e, r),
      className: "rounded-lg",
      style: i,
      clickable: !!o
    }) : /* @__PURE__ */ t("div", {
      style: i,
      className: A("flex justify-center items-center", o ? "hover:opacity-75" : ""),
      children: o ? /* @__PURE__ */ t(li, {
        className: "w-8 h-8"
      }) : /* @__PURE__ */ t(qr, {
        className: "w-8 h-8"
      })
    })
  });
};
function os(e) {
  const {
    value: r,
    group: n,
    onChange: a,
    children: o
  } = e, {
    api: i
  } = Be(), [s, c] = T(!1), [h, d] = T([]), {
    data: y,
    isValidating: g
  } = He(r?.length && n ? `assets/${n}/${r.join(",")}` : null, () => i.dmAssetList(n, {
    assetID: {
      any: r
    }
  }), {
    revalidateOnFocus: !1
  });
  return /* @__PURE__ */ l(re, {
    children: [/* @__PURE__ */ t(It, {
      onDrop: async ({
        files: v
      }) => {
        d(v);
        const w = await Mt(i, n, v);
        a?.([...r || [], ...w.map((C) => C.assetID)]), d([]);
      },
      children: o && typeof o == "function" ? o({
        selectedAssets: y,
        currentlyUploadedFiles: h,
        setOpen: c,
        value: r
      }) : /* @__PURE__ */ l("div", {
        className: "grid grid-cols-2 gap-4",
        children: [h?.map((v, w) => /* @__PURE__ */ t("div", {
          className: "bg-gray-500 rounded-md p-0 aspect-[4/3] overflow-hidden relative group",
          children: /* @__PURE__ */ l("div", {
            className: "overflow-hidden relative p-4 text-sm",
            children: ["Upload: ", v.name]
          })
        }, w)), y?.items?.map((v) => /* @__PURE__ */ l("div", {
          className: "bg-gray-500 rounded-md p-0 aspect-[4/3] overflow-hidden relative group",
          children: [/* @__PURE__ */ t(Ct, {
            src: nr(v, 400),
            className: "h-full"
          }), /* @__PURE__ */ t("div", {
            className: "absolute top-2 right-2 space-y-2 group-hover:opacity-100 opacity-0",
            children: /* @__PURE__ */ t(Ee.Error, {
              onClick: () => a(null),
              className: "cursor-pointer",
              children: /* @__PURE__ */ t(Dt, {
                className: "w-6 h-6 bg-gray-800 p-1 rounded-md"
              })
            })
          })]
        }, v.assetID)), !h.length && /* @__PURE__ */ t("div", {
          className: "bg-gray-500 rounded-md p-0 aspect-[4/3] overflow-hidden relative",
          children: /* @__PURE__ */ t("div", {
            className: "flex h-full justify-center items-center cursor-pointer",
            onClick: () => c(!0),
            children: /* @__PURE__ */ l("div", {
              className: "flex gap-2",
              children: [/* @__PURE__ */ t(Qt, {
                className: "w-4 h-4"
              }), /* @__PURE__ */ t("span", {
                className: "text-sm",
                children: "Bilder bearbeiten"
              })]
            })
          })
        })]
      })
    }), g && /* @__PURE__ */ t(We, {}), /* @__PURE__ */ t(ln, {
      assetGroupID: n,
      open: s,
      onClose: () => c(!1),
      onChange: (v) => a?.(v),
      value: r
    })]
  });
}
function ss(e) {
  const {
    value: r,
    group: n,
    onChange: a,
    children: o
  } = e, {
    api: i
  } = Be(), [s, c] = T(!1), [h, d] = T(), y = et(), {
    data: g
  } = He(n && r ? `asset/${n}/${r}` : null, () => i.dmAsset(n, r), {
    revalidateOnFocus: !1
  }), v = Ke(() => c(!0), []), w = Ke((b) => {
    b.stopPropagation(), a?.(null);
  }, [a]), C = Ie(() => g ? nr(g, 400) : void 0, [g]), x = Ie(() => /* @__PURE__ */ t(Ct, {
    src: C,
    className: "h-full"
  }), [C, g?.title, v, w, g?.file, h]), N = /* @__PURE__ */ t("div", {
    className: "max-w-[200px]",
    children: /* @__PURE__ */ l("div", {
      className: "bg-gray-500 rounded-md p-0 aspect-[4/3] overflow-hidden relative group",
      children: [!!g?.file && !h && /* @__PURE__ */ l(re, {
        children: [x, /* @__PURE__ */ l("div", {
          className: "absolute top-2 right-2 space-y-2 group-hover:opacity-100 opacity-0",
          children: [/* @__PURE__ */ t(Ee.Primary, {
            onClick: () => c(!0),
            className: "cursor-pointer",
            children: /* @__PURE__ */ t(Qt, {
              className: "w-6 h-6 bg-gray-800 p-1 rounded-md"
            })
          }), /* @__PURE__ */ t(Ee.Error, {
            onClick: () => a(null),
            className: "cursor-pointer",
            children: /* @__PURE__ */ t(Dt, {
              className: "mt-1 w-6 h-6 bg-gray-800 p-1 rounded-md"
            })
          })]
        })]
      }), !r?.length && !h && /* @__PURE__ */ t("div", {
        className: "flex h-full justify-center items-center cursor-pointer",
        onClick: () => c(!0),
        children: /* @__PURE__ */ l("div", {
          className: "flex gap-2",
          children: [/* @__PURE__ */ t(Wr, {
            className: "w-5 h-5"
          }), /* @__PURE__ */ t("span", {
            className: "text-sm",
            children: "Bild hinzuf\xFCgen"
          })]
        })
      }), h && /* @__PURE__ */ l("div", {
        className: "overflow-hidden relative p-4 text-sm",
        children: ["Upload: ", h?.name]
      })]
    })
  });
  return /* @__PURE__ */ l(re, {
    children: [/* @__PURE__ */ t(It, {
      onDrop: async ({
        files: b
      }) => {
        if (b.length > 1) {
          alert("Bitte nur eine Datei");
          return;
        }
        try {
          d(b[0]);
          const D = await Mt(i, n, b, {
            ignoreDuplicates: !0
          });
          a?.(D?.[0]?.assetID), d(null), y.emit({
            type: "success",
            title: "Datei hochgeladen!"
          });
        } catch {
          y.emit({
            type: "error",
            title: "Fehler beim Hochladen"
          });
        }
      },
      children: o && typeof o == "function" ? o({
        selectedAsset: g,
        currentlyUploadedFile: h,
        setOpen: c,
        value: r,
        Selection: N
      }) : N
    }), /* @__PURE__ */ t(ln, {
      assetGroupID: n,
      open: s,
      onClose: () => c(!1),
      onChange: (b) => a?.(b[0]),
      value: [r],
      solo: !0
    })]
  });
}
function Er(e) {
  const {
    control: r,
    name: n,
    rules: a,
    solo: o,
    ...i
  } = e;
  return /* @__PURE__ */ t(Ae, {
    render: ({
      field: s
    }) => o ? /* @__PURE__ */ t(ss, {
      value: s.value,
      onChange: s.onChange,
      ...i
    }) : /* @__PURE__ */ t(os, {
      value: s.value,
      onChange: s.onChange,
      ...i
    }),
    control: r,
    name: n,
    rules: a
  });
}
const ls = ({
  isActive: e,
  currentlyUploading: r,
  file: n,
  onChange: a
}) => /* @__PURE__ */ t("div", {
  className: "flex justify-center items-center w-full",
  children: /* @__PURE__ */ l("label", {
    htmlFor: "dropzone-file",
    style: n && {
      backgroundImage: `url(${n.file.url})`
    },
    className: "flex flex-col justify-center items-center bg-cover w-full h-56 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600",
    children: [/* @__PURE__ */ l("div", {
      className: "flex flex-col justify-center items-center pt-5 pb-6 bg-gray-50/75 p-2 rounded-xl",
      children: [/* @__PURE__ */ t("svg", {
        className: "mb-3 w-10 h-10 text-gray-400",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        children: /* @__PURE__ */ t("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "2",
          d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
        })
      }), r?.length ? /* @__PURE__ */ l(re, {
        children: [/* @__PURE__ */ t(ct, {}), r.map((o) => /* @__PURE__ */ t("p", {
          children: o?.name
        }, o.name))]
      }) : /* @__PURE__ */ t(re, {
        children: e ? "Drop files here" : /* @__PURE__ */ l("div", {
          children: [/* @__PURE__ */ l("p", {
            className: "mb-2 text-sm text-gray-500 dark:text-gray-400",
            children: [/* @__PURE__ */ t("span", {
              className: "font-semibold",
              children: "Click to upload"
            }), " or drag and drop"]
          }), /* @__PURE__ */ t("p", {
            className: "text-xs text-gray-500 dark:text-gray-400",
            children: "SVG, PNG, JPG or GIF (MAX. 800x400px)"
          })]
        })
      })]
    }), /* @__PURE__ */ t("input", {
      id: "dropzone-file",
      type: "file",
      className: "!hidden",
      onChange: (o) => a(o.target.files)
    })]
  })
});
function Tl(e) {
  const r = et(), {
    value: n,
    group: a,
    onChange: o
  } = e, [i, s] = T([]), {
    api: c
  } = Be(), {
    data: h,
    mutate: d
  } = He(a && n ? `asset/${a}/${n}` : null, () => c.dmAsset(a, n.assetID), {
    revalidateOnFocus: !1
  });
  G(() => {
    d();
  }, [n]);
  async function y({
    files: g
  }) {
    if (g.length > 1) {
      r.emit({
        type: "error",
        title: "Bitte nur eine Datei"
      });
      return;
    }
    s(g);
    try {
      const v = await Mt(c, a, g, {
        deduplicate: !0
      });
      o(v[0]), r.emit({
        type: "success",
        title: "Bild erfolgreich hochgeladen."
      });
    } catch (v) {
      r.emit({
        type: "error",
        title: "Fehler beim hochladen der Datei",
        message: v.message
      });
    }
    s([]);
  }
  return /* @__PURE__ */ t(It, {
    onDrop: y,
    children: ({
      isActive: g
    }) => /* @__PURE__ */ t(re, {
      children: /* @__PURE__ */ t(ls, {
        onChange: (v) => {
          y({
            files: [v.item(0)]
          });
        },
        isActive: g,
        file: h,
        currentlyUploading: i
      })
    })
  });
}
function jl(e) {
  const {
    items: r = [],
    value: n,
    onChange: a,
    filter: o = !0,
    renderInput: i,
    onSelect: s,
    placeholder: c = "",
    autoFocus: h
  } = e, d = o ? r.filter(typeof o == "function" ? (g) => o(g, n) : (g) => g.label.toLowerCase().includes(n.toLowerCase())) : r, y = Fn();
  return /* @__PURE__ */ l("div", {
    className: "relative",
    children: [/* @__PURE__ */ t(K, {
      type: "text",
      autoFocus: h,
      value: n,
      onChange: (g) => a?.(g.target.value),
      placeholder: c,
      list: y
    }), /* @__PURE__ */ t("datalist", {
      id: y,
      children: d.map((g) => /* @__PURE__ */ t("option", {
        value: g.label
      }, g.label))
    })]
  });
}
const cs = (e, r = "get", n, a = {}) => fetch(e, {
  method: r,
  headers: { "content-type": "application/json", ...a },
  ...n ? { body: JSON.stringify(n) } : {}
}).then(async (o) => {
  if (!o.ok) {
    const i = new Error("An error occurred while fetching the data.");
    throw i.info = await o.json(), i.status = o.status, i;
  }
  return o.status === 204 ? o : o.json();
});
function ar(e = {
  revalidateOnFocus: !1,
  dedupingInterval: 3e4
}) {
  const {
    api: r
  } = Be();
  return He(r ? ["resource/settings", r?.shortID] : null, () => ds(r), e);
}
async function ds(e) {
  return (await e.entryList("settings", {
    _count: 1,
    sort: ["_created"]
  })).items[0];
}
function ir(e) {
  const {
    route: r = "",
    swrOptions: n = {
      revalidateOnFocus: !1
    },
    sortBy: a
  } = e, {
    data: o
  } = ar(), {
    data: i,
    ...s
  } = He(o?.appsiteUrl && r !== null ? `${o?.appsiteUrl}/${r}` : null, cs, n);
  return {
    data: Ie(() => typeof a == "function" ? i?.sort(a) : typeof a == "string" ? i?.sort((h, d) => h[a]?.localeCompare(d[a])) : i, [i, a]),
    ...s
  };
}
const us = () => ir({
  route: "config/userRoles",
  swrOptions: {
    revalidateOnFocus: !1
  },
  sortBy: (e, r) => e.localeCompare(r)
}), fs = () => ir({
  route: "config/addons?type=all",
  swrOptions: {
    revalidateOnFocus: !1
  },
  sortBy: "name"
});
function or(e, r = !0) {
  const [n, a] = T(e), {
    data: o,
    error: i
  } = ir({
    route: ""
  }), s = o?.config?.names;
  G(() => {
    s && r && a(Object.keys(s)?.[0]);
  }, [s]);
  const c = (v) => o?.config?.apiUrls?.[v]?.replace(/^((\w+:)?\/\/[^/]+\/?).*$/, "$1"), h = c(n), d = (v, w = n) => v && c(w) ? `${c(w)}${v}` : null;
  return {
    backends: s,
    backend: n,
    setBackend: a,
    useHectorAPI: (v, w = {
      revalidateOnFocus: !1
    }) => He(
      d(v),
      (C) => fetch(C).then((x) => x.json()),
      w
    ),
    appsiteRoot: o,
    apiRoot: h,
    error: i,
    apiRoute: d,
    renderRoute: (v, w, C = n) => d(`render/#/login?accessToken=${w}&returnUrl=/${v}`, C)
  };
}
function hs(e) {
  const {
    defaultLabel: r = "Alle Backends",
    prefix: n = "",
    value: a,
    onChange: o,
    className: i,
    excludeEmpty: s,
    placeholder: c = "Backend w\xE4hlen..."
  } = e, {
    backends: h
  } = or(), d = [...s ? [] : [{
    label: r,
    value: null
  }], ...Object.entries(h || {}).map(([y, g]) => ({
    label: `${n}${g}`,
    value: y
  }))];
  return Object.keys(h || {}).length < 2 ? /* @__PURE__ */ t(re, {}) : /* @__PURE__ */ t(tr, {
    items: d,
    placeholder: c,
    value: a,
    onChange: o,
    className: i
  });
}
const ms = je.memo(hs);
function Pl(e) {
  const {
    control: r,
    rules: n,
    name: a,
    ...o
  } = e;
  return /* @__PURE__ */ t(Ae, {
    render: ({
      field: i
    }) => /* @__PURE__ */ t(ms, {
      ...o,
      value: i.value,
      onChange: i.onChange
    }),
    control: r,
    name: a,
    rules: n
  });
}
function Bl({
  children: e,
  theme: r = "gray",
  showDot: n = !1,
  hasX: a = !1,
  onX: o,
  onClick: i,
  dotColor: s,
  className: c
}) {
  return /* @__PURE__ */ l("span", {
    onClick: i,
    className: A(r === "gray" && "dark:!text-gray-600", `inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-${r}-200 text-${r}-800 dark:bg-${r}-300 dark:text-${r}-600`, i && "cursor-pointer", c),
    children: [n && /* @__PURE__ */ t("svg", {
      className: "-ml-0.5 mr-1.5 h-2 w-2 text-${theme}-400",
      style: {
        color: s || "black"
      },
      fill: "currentColor",
      viewBox: "0 0 8 8",
      children: /* @__PURE__ */ t("circle", {
        cx: 4,
        cy: 4,
        r: 3
      })
    }), e, a && /* @__PURE__ */ l("button", {
      type: "button",
      onClick: o,
      className: `-mr-0.5 flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-${r}-400 hover:bg-${r}-200 hover:text-${r}-500 focus:outline-none focus:bg-${r}-500 focus:text-white`,
      children: [/* @__PURE__ */ t("span", {
        className: "sr-only",
        children: "Remove option"
      }), /* @__PURE__ */ t("svg", {
        className: "h-2 w-2",
        stroke: "currentColor",
        fill: "none",
        viewBox: "0 0 8 8",
        children: /* @__PURE__ */ t("path", {
          strokeLinecap: "round",
          strokeWidth: "1.5",
          d: "M1 1l6 6m0-6L1 7"
        })
      })]
    })]
  });
}
de.locale("de");
function gs({
  value: e,
  onChange: r
}) {
  const [n, a] = T(de().startOf("month")), [o, i] = T(de().startOf("day"));
  G(() => {
    const h = de(e);
    h.isValid() && (i(h.clone().startOf("day")), a(h.clone().startOf("month")));
  }, [e]);
  const s = (h) => {
    i(h), r?.(h);
  }, c = Array(5).fill(0).map((h, d) => n.startOf("week").startOf("day").clone().add(d, "week"));
  return /* @__PURE__ */ t("div", {
    className: "flex items-center justify-center select-none",
    children: /* @__PURE__ */ l("div", {
      className: "w-full rounded-xl shadow-lg md:p-6 p-3 bg-white dark:bg-gray-800",
      children: [/* @__PURE__ */ l("div", {
        className: "px-2 flex items-center justify-between leading-8",
        children: [/* @__PURE__ */ t("h1", {
          className: "text-xl font-medium text-gray-800 dark:text-gray-100",
          children: n.format("MMMM YYYY")
        }), /* @__PURE__ */ l("div", {
          className: "flex items-center text-gray-800 dark:text-gray-100",
          children: [/* @__PURE__ */ t("a", {
            className: "cursor-pointer",
            children: /* @__PURE__ */ l("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className: "icon icon-tabler icon-tabler-chevron-left",
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              strokeWidth: "1.5",
              stroke: "currentColor",
              fill: "none",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              onClick: () => {
                a(n.subtract(1, "month").startOf("month"));
              },
              children: [/* @__PURE__ */ t("path", {
                stroke: "none",
                d: "M0 0h24v24H0z",
                fill: "none"
              }), /* @__PURE__ */ t("polyline", {
                points: "15 6 9 12 15 18"
              })]
            })
          }), /* @__PURE__ */ t("a", {
            className: "cursor-pointer",
            children: /* @__PURE__ */ l("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className: "icon icon-tabler ml-3 icon-tabler-chevron-right",
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              strokeWidth: "1.5",
              stroke: "currentColor",
              fill: "none",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              onClick: () => {
                a(n.add(1, "month").startOf("month"));
              },
              children: [/* @__PURE__ */ t("path", {
                stroke: "none",
                d: "M0 0h24v24H0z",
                fill: "none"
              }), /* @__PURE__ */ t("polyline", {
                points: "9 6 15 12 9 18"
              })]
            })
          })]
        })]
      }), /* @__PURE__ */ t("div", {
        className: "flex items-center justify-between pt-6 overflow-x-auto ",
        children: /* @__PURE__ */ l("table", {
          className: "w-full",
          children: [/* @__PURE__ */ t("thead", {
            children: /* @__PURE__ */ t("tr", {
              children: Array(7).fill(0).map((h, d) => de().startOf("week").add(d, "days").format("dd")).map((h) => /* @__PURE__ */ t("th", {
                children: /* @__PURE__ */ t("div", {
                  className: "w-full flex justify-center",
                  children: /* @__PURE__ */ t("p", {
                    className: "text-md mb-0 font-medium text-center text-gray-800 dark:text-gray-100",
                    children: h
                  })
                })
              }, h))
            })
          }), /* @__PURE__ */ t("tbody", {
            children: c.map((h, d) => /* @__PURE__ */ t("tr", {
              children: Array(7).fill(0).map((y, g) => {
                const v = h.clone().add(g, "days").startOf("day");
                return o.isSame(v, "day") ? /* @__PURE__ */ t("td", {
                  className: d === 0 ? "pt-3" : "",
                  children: /* @__PURE__ */ t("div", {
                    className: "w-full h-full",
                    children: /* @__PURE__ */ t("div", {
                      className: "flex items-center justify-center w-full rounded-full cursor-pointer",
                      children: /* @__PURE__ */ t("p", {
                        className: "text-md mb-0 w-8 h-8 flex items-center justify-center font-medium text-white bg-indigo-700 rounded-full",
                        children: v.format("D")
                      })
                    })
                  })
                }, g) : /* @__PURE__ */ t("td", {
                  className: d === 0 ? "pt-3" : "",
                  onClick: () => s(v),
                  children: /* @__PURE__ */ t("div", {
                    className: "px-2 py-4 cursor-pointer flex w-full justify-center",
                    children: v.isSame(n, "month") && /* @__PURE__ */ t("p", {
                      className: "text-md mb-0 text-gray-500 dark:text-gray-100",
                      children: v.format("D")
                    })
                  })
                }, g);
              })
            }, d))
          })]
        })
      })]
    })
  });
}
const ps = (e) => {
  Jt(() => (document.addEventListener("click", e, {
    capture: !0
  }), () => document.removeEventListener("click", e, {
    capture: !0
  })), [e]);
}, Pt = "DD.MM.YYYY", vs = ["DD.MM.YYYY", "D.M.YYYY", "MM-DD-YYYY"];
function ys({
  value: e,
  onChange: r,
  placeholder: n
}) {
  const [a, o] = T(), i = Re(), [s, c] = T(null), {
    styles: h,
    attributes: d
  } = Hn(a, s, {
    placement: "bottom-start"
  }), [y, g] = T(e ? de(e).format(Pt) : ""), [v, w] = T(e ? de(e).toISOString() : null), [C, x] = T(!1);
  G(() => {
    const b = de(y, vs);
    if (b.isValid() || [null, ""].includes(y)) {
      const D = b.isValid() ? b.toISOString() : null;
      w(D), r?.(D);
    } else
      console.warn("input date not valid", b);
  }, [y]), G(() => {
    g(e ? de(e).format(Pt) : null);
  }, [e]);
  const N = Ke((b) => {
    C && b.target !== i.current && !s?.contains(b.target) && x(!1);
  }, [C, s]);
  return ps(N), /* @__PURE__ */ l(re, {
    children: [/* @__PURE__ */ t("div", {
      ref: o,
      children: /* @__PURE__ */ t("input", {
        type: "text",
        value: y || "",
        placeholder: n,
        ref: i,
        onClick: (b) => {
          b.preventDefault(), x(!0);
        },
        onChange: (b) => g(b.target.value),
        className: k.Item.text
      })
    }), C && /* @__PURE__ */ t("div", {
      ref: c,
      ...d.popper,
      style: h.popper,
      className: "w-96 pt-2 z-50",
      children: /* @__PURE__ */ t(gs, {
        value: v,
        onChange: (b) => {
          b.isValid() || v === "" ? (g(b.isValid() ? b.format(Pt) : null), i.current?.focus()) : console.log("calendar date is not valid..", b);
        }
      })
    })]
  });
}
function Mr(e) {
  const {
    placeholder: r,
    control: n,
    name: a,
    rules: o
  } = e;
  return /* @__PURE__ */ t(Ae, {
    render: ({
      field: i
    }) => /* @__PURE__ */ t(ys, {
      placeholder: r,
      value: i.value,
      onChange: i.onChange
    }),
    control: n,
    name: a,
    rules: o
  });
}
function zl({
  onX: e,
  children: r
}) {
  return /* @__PURE__ */ l("span", {
    className: "inline-flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-gray-600 bg-gray-200 border border-gray-600",
    children: [/* @__PURE__ */ t("span", {
      className: "text-xs font-normal items-center leading-none",
      children: r
    }), !!e && /* @__PURE__ */ t("span", {
      onClick: e,
      children: /* @__PURE__ */ l("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "100%",
        height: "100%",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "feather feather-x cursor-pointer hover:text-indigo-400 rounded-full w-4 h-4 ml-2",
        children: [/* @__PURE__ */ t("line", {
          x1: "18",
          y1: "6",
          x2: "6",
          y2: "18"
        }), /* @__PURE__ */ t("line", {
          x1: "6",
          y1: "6",
          x2: "18",
          y2: "18"
        })]
      })
    })]
  });
}
function Hl({
  value: e,
  onChange: r,
  presetColors: n,
  className: a,
  buttonClass: o
}) {
  const [i, s] = T(e);
  return G(() => {
    s(e || "#ffffff");
  }, [e]), /* @__PURE__ */ l(at, {
    as: "div",
    className: A("relative inline-block text-left", a),
    children: [/* @__PURE__ */ t("div", {
      className: "rounded-full overflow-hidden border border-gray-300 dark:border-gray-600",
      children: /* @__PURE__ */ t(at.Button, {
        className: A("w-16 h-16 p-8 text-white flex items-center justify-center", o),
        style: {
          backgroundColor: i
        }
      })
    }), /* @__PURE__ */ t(be, {
      as: me,
      enter: "transition ease-out duration-100",
      enterFrom: "transform opacity-0 scale-95",
      enterTo: "transform opacity-100 scale-100",
      leave: "transition ease-in duration-75",
      leaveFrom: "transform opacity-100 scale-100",
      leaveTo: "transform opacity-0 scale-95",
      children: /* @__PURE__ */ t(at.Panel, {
        className: "z-20 origin-bottom-left absolute left-0 mt-2",
        children: /* @__PURE__ */ t(Yn, {
          presetColors: n || [],
          color: i,
          onChangeComplete: (c) => r(c?.hex || null),
          onChange: (c) => s(c?.hex || null)
        })
      })
    })]
  });
}
var cn = { exports: {} };
(function(e) {
  (function(r) {
    var n = /^\s+/, a = /\s+$/, o = 0, i = r.round, s = r.min, c = r.max, h = r.random;
    function d(u, p) {
      if (u = u || "", p = p || {}, u instanceof d)
        return u;
      if (!(this instanceof d))
        return new d(u, p);
      var f = y(u);
      this._originalInput = u, this._r = f.r, this._g = f.g, this._b = f.b, this._a = f.a, this._roundA = i(100 * this._a) / 100, this._format = p.format || f.format, this._gradientType = p.gradientType, this._r < 1 && (this._r = i(this._r)), this._g < 1 && (this._g = i(this._g)), this._b < 1 && (this._b = i(this._b)), this._ok = f.ok, this._tc_id = o++;
    }
    d.prototype = {
      isDark: function() {
        return this.getBrightness() < 128;
      },
      isLight: function() {
        return !this.isDark();
      },
      isValid: function() {
        return this._ok;
      },
      getOriginalInput: function() {
        return this._originalInput;
      },
      getFormat: function() {
        return this._format;
      },
      getAlpha: function() {
        return this._a;
      },
      getBrightness: function() {
        var u = this.toRgb();
        return (u.r * 299 + u.g * 587 + u.b * 114) / 1e3;
      },
      getLuminance: function() {
        var u = this.toRgb(), p, f, $, _, I, U;
        return p = u.r / 255, f = u.g / 255, $ = u.b / 255, p <= 0.03928 ? _ = p / 12.92 : _ = r.pow((p + 0.055) / 1.055, 2.4), f <= 0.03928 ? I = f / 12.92 : I = r.pow((f + 0.055) / 1.055, 2.4), $ <= 0.03928 ? U = $ / 12.92 : U = r.pow(($ + 0.055) / 1.055, 2.4), 0.2126 * _ + 0.7152 * I + 0.0722 * U;
      },
      setAlpha: function(u) {
        return this._a = ae(u), this._roundA = i(100 * this._a) / 100, this;
      },
      toHsv: function() {
        var u = C(this._r, this._g, this._b);
        return { h: u.h * 360, s: u.s, v: u.v, a: this._a };
      },
      toHsvString: function() {
        var u = C(this._r, this._g, this._b), p = i(u.h * 360), f = i(u.s * 100), $ = i(u.v * 100);
        return this._a == 1 ? "hsv(" + p + ", " + f + "%, " + $ + "%)" : "hsva(" + p + ", " + f + "%, " + $ + "%, " + this._roundA + ")";
      },
      toHsl: function() {
        var u = v(this._r, this._g, this._b);
        return { h: u.h * 360, s: u.s, l: u.l, a: this._a };
      },
      toHslString: function() {
        var u = v(this._r, this._g, this._b), p = i(u.h * 360), f = i(u.s * 100), $ = i(u.l * 100);
        return this._a == 1 ? "hsl(" + p + ", " + f + "%, " + $ + "%)" : "hsla(" + p + ", " + f + "%, " + $ + "%, " + this._roundA + ")";
      },
      toHex: function(u) {
        return N(this._r, this._g, this._b, u);
      },
      toHexString: function(u) {
        return "#" + this.toHex(u);
      },
      toHex8: function(u) {
        return b(this._r, this._g, this._b, this._a, u);
      },
      toHex8String: function(u) {
        return "#" + this.toHex8(u);
      },
      toRgb: function() {
        return { r: i(this._r), g: i(this._g), b: i(this._b), a: this._a };
      },
      toRgbString: function() {
        return this._a == 1 ? "rgb(" + i(this._r) + ", " + i(this._g) + ", " + i(this._b) + ")" : "rgba(" + i(this._r) + ", " + i(this._g) + ", " + i(this._b) + ", " + this._roundA + ")";
      },
      toPercentageRgb: function() {
        return { r: i(V(this._r, 255) * 100) + "%", g: i(V(this._g, 255) * 100) + "%", b: i(V(this._b, 255) * 100) + "%", a: this._a };
      },
      toPercentageRgbString: function() {
        return this._a == 1 ? "rgb(" + i(V(this._r, 255) * 100) + "%, " + i(V(this._g, 255) * 100) + "%, " + i(V(this._b, 255) * 100) + "%)" : "rgba(" + i(V(this._r, 255) * 100) + "%, " + i(V(this._g, 255) * 100) + "%, " + i(V(this._b, 255) * 100) + "%, " + this._roundA + ")";
      },
      toName: function() {
        return this._a === 0 ? "transparent" : this._a < 1 ? !1 : ne[N(this._r, this._g, this._b, !0)] || !1;
      },
      toFilter: function(u) {
        var p = "#" + D(this._r, this._g, this._b, this._a), f = p, $ = this._gradientType ? "GradientType = 1, " : "";
        if (u) {
          var _ = d(u);
          f = "#" + D(_._r, _._g, _._b, _._a);
        }
        return "progid:DXImageTransform.Microsoft.gradient(" + $ + "startColorstr=" + p + ",endColorstr=" + f + ")";
      },
      toString: function(u) {
        var p = !!u;
        u = u || this._format;
        var f = !1, $ = this._a < 1 && this._a >= 0, _ = !p && $ && (u === "hex" || u === "hex6" || u === "hex3" || u === "hex4" || u === "hex8" || u === "name");
        return _ ? u === "name" && this._a === 0 ? this.toName() : this.toRgbString() : (u === "rgb" && (f = this.toRgbString()), u === "prgb" && (f = this.toPercentageRgbString()), (u === "hex" || u === "hex6") && (f = this.toHexString()), u === "hex3" && (f = this.toHexString(!0)), u === "hex4" && (f = this.toHex8String(!0)), u === "hex8" && (f = this.toHex8String()), u === "name" && (f = this.toName()), u === "hsl" && (f = this.toHslString()), u === "hsv" && (f = this.toHsvString()), f || this.toHexString());
      },
      clone: function() {
        return d(this.toString());
      },
      _applyModification: function(u, p) {
        var f = u.apply(null, [this].concat([].slice.call(p)));
        return this._r = f._r, this._g = f._g, this._b = f._b, this.setAlpha(f._a), this;
      },
      lighten: function() {
        return this._applyModification(F, arguments);
      },
      brighten: function() {
        return this._applyModification(R, arguments);
      },
      darken: function() {
        return this._applyModification(E, arguments);
      },
      desaturate: function() {
        return this._applyModification(H, arguments);
      },
      saturate: function() {
        return this._applyModification(Y, arguments);
      },
      greyscale: function() {
        return this._applyModification(O, arguments);
      },
      spin: function() {
        return this._applyModification(P, arguments);
      },
      _applyCombination: function(u, p) {
        return u.apply(null, [this].concat([].slice.call(p)));
      },
      analogous: function() {
        return this._applyCombination(oe, arguments);
      },
      complement: function() {
        return this._applyCombination(B, arguments);
      },
      monochromatic: function() {
        return this._applyCombination(q, arguments);
      },
      splitcomplement: function() {
        return this._applyCombination(ee, arguments);
      },
      triad: function() {
        return this._applyCombination(X, arguments);
      },
      tetrad: function() {
        return this._applyCombination(Q, arguments);
      }
    }, d.fromRatio = function(u, p) {
      if (typeof u == "object") {
        var f = {};
        for (var $ in u)
          u.hasOwnProperty($) && ($ === "a" ? f[$] = u[$] : f[$] = Le(u[$]));
        u = f;
      }
      return d(u, p);
    };
    function y(u) {
      var p = { r: 0, g: 0, b: 0 }, f = 1, $ = null, _ = null, I = null, U = !1, se = !1;
      return typeof u == "string" && (u = Ge(u)), typeof u == "object" && (ve(u.r) && ve(u.g) && ve(u.b) ? (p = g(u.r, u.g, u.b), U = !0, se = String(u.r).substr(-1) === "%" ? "prgb" : "rgb") : ve(u.h) && ve(u.s) && ve(u.v) ? ($ = Le(u.s), _ = Le(u.v), p = x(u.h, $, _), U = !0, se = "hsv") : ve(u.h) && ve(u.s) && ve(u.l) && ($ = Le(u.s), I = Le(u.l), p = w(u.h, $, I), U = !0, se = "hsl"), u.hasOwnProperty("a") && (f = u.a)), f = ae(f), {
        ok: U,
        format: u.format || se,
        r: s(255, c(p.r, 0)),
        g: s(255, c(p.g, 0)),
        b: s(255, c(p.b, 0)),
        a: f
      };
    }
    function g(u, p, f) {
      return {
        r: V(u, 255) * 255,
        g: V(p, 255) * 255,
        b: V(f, 255) * 255
      };
    }
    function v(u, p, f) {
      u = V(u, 255), p = V(p, 255), f = V(f, 255);
      var $ = c(u, p, f), _ = s(u, p, f), I, U, se = ($ + _) / 2;
      if ($ == _)
        I = U = 0;
      else {
        var ce = $ - _;
        switch (U = se > 0.5 ? ce / (2 - $ - _) : ce / ($ + _), $) {
          case u:
            I = (p - f) / ce + (p < f ? 6 : 0);
            break;
          case p:
            I = (f - u) / ce + 2;
            break;
          case f:
            I = (u - p) / ce + 4;
            break;
        }
        I /= 6;
      }
      return { h: I, s: U, l: se };
    }
    function w(u, p, f) {
      var $, _, I;
      u = V(u, 360), p = V(p, 100), f = V(f, 100);
      function U(xe, Je, Me) {
        return Me < 0 && (Me += 1), Me > 1 && (Me -= 1), Me < 1 / 6 ? xe + (Je - xe) * 6 * Me : Me < 1 / 2 ? Je : Me < 2 / 3 ? xe + (Je - xe) * (2 / 3 - Me) * 6 : xe;
      }
      if (p === 0)
        $ = _ = I = f;
      else {
        var se = f < 0.5 ? f * (1 + p) : f + p - f * p, ce = 2 * f - se;
        $ = U(ce, se, u + 1 / 3), _ = U(ce, se, u), I = U(ce, se, u - 1 / 3);
      }
      return { r: $ * 255, g: _ * 255, b: I * 255 };
    }
    function C(u, p, f) {
      u = V(u, 255), p = V(p, 255), f = V(f, 255);
      var $ = c(u, p, f), _ = s(u, p, f), I, U, se = $, ce = $ - _;
      if (U = $ === 0 ? 0 : ce / $, $ == _)
        I = 0;
      else {
        switch ($) {
          case u:
            I = (p - f) / ce + (p < f ? 6 : 0);
            break;
          case p:
            I = (f - u) / ce + 2;
            break;
          case f:
            I = (u - p) / ce + 4;
            break;
        }
        I /= 6;
      }
      return { h: I, s: U, v: se };
    }
    function x(u, p, f) {
      u = V(u, 360) * 6, p = V(p, 100), f = V(f, 100);
      var $ = r.floor(u), _ = u - $, I = f * (1 - p), U = f * (1 - _ * p), se = f * (1 - (1 - _) * p), ce = $ % 6, xe = [f, U, I, I, se, f][ce], Je = [se, f, f, U, I, I][ce], Me = [I, I, se, f, f, U][ce];
      return { r: xe * 255, g: Je * 255, b: Me * 255 };
    }
    function N(u, p, f, $) {
      var _ = [
        we(i(u).toString(16)),
        we(i(p).toString(16)),
        we(i(f).toString(16))
      ];
      return $ && _[0].charAt(0) == _[0].charAt(1) && _[1].charAt(0) == _[1].charAt(1) && _[2].charAt(0) == _[2].charAt(1) ? _[0].charAt(0) + _[1].charAt(0) + _[2].charAt(0) : _.join("");
    }
    function b(u, p, f, $, _) {
      var I = [
        we(i(u).toString(16)),
        we(i(p).toString(16)),
        we(i(f).toString(16)),
        we(Ye($))
      ];
      return _ && I[0].charAt(0) == I[0].charAt(1) && I[1].charAt(0) == I[1].charAt(1) && I[2].charAt(0) == I[2].charAt(1) && I[3].charAt(0) == I[3].charAt(1) ? I[0].charAt(0) + I[1].charAt(0) + I[2].charAt(0) + I[3].charAt(0) : I.join("");
    }
    function D(u, p, f, $) {
      var _ = [
        we(Ye($)),
        we(i(u).toString(16)),
        we(i(p).toString(16)),
        we(i(f).toString(16))
      ];
      return _.join("");
    }
    d.equals = function(u, p) {
      return !u || !p ? !1 : d(u).toRgbString() == d(p).toRgbString();
    }, d.random = function() {
      return d.fromRatio({
        r: h(),
        g: h(),
        b: h()
      });
    };
    function H(u, p) {
      p = p === 0 ? 0 : p || 10;
      var f = d(u).toHsl();
      return f.s -= p / 100, f.s = _e(f.s), d(f);
    }
    function Y(u, p) {
      p = p === 0 ? 0 : p || 10;
      var f = d(u).toHsl();
      return f.s += p / 100, f.s = _e(f.s), d(f);
    }
    function O(u) {
      return d(u).desaturate(100);
    }
    function F(u, p) {
      p = p === 0 ? 0 : p || 10;
      var f = d(u).toHsl();
      return f.l += p / 100, f.l = _e(f.l), d(f);
    }
    function R(u, p) {
      p = p === 0 ? 0 : p || 10;
      var f = d(u).toRgb();
      return f.r = c(0, s(255, f.r - i(255 * -(p / 100)))), f.g = c(0, s(255, f.g - i(255 * -(p / 100)))), f.b = c(0, s(255, f.b - i(255 * -(p / 100)))), d(f);
    }
    function E(u, p) {
      p = p === 0 ? 0 : p || 10;
      var f = d(u).toHsl();
      return f.l -= p / 100, f.l = _e(f.l), d(f);
    }
    function P(u, p) {
      var f = d(u).toHsl(), $ = (f.h + p) % 360;
      return f.h = $ < 0 ? 360 + $ : $, d(f);
    }
    function B(u) {
      var p = d(u).toHsl();
      return p.h = (p.h + 180) % 360, d(p);
    }
    function X(u) {
      var p = d(u).toHsl(), f = p.h;
      return [
        d(u),
        d({ h: (f + 120) % 360, s: p.s, l: p.l }),
        d({ h: (f + 240) % 360, s: p.s, l: p.l })
      ];
    }
    function Q(u) {
      var p = d(u).toHsl(), f = p.h;
      return [
        d(u),
        d({ h: (f + 90) % 360, s: p.s, l: p.l }),
        d({ h: (f + 180) % 360, s: p.s, l: p.l }),
        d({ h: (f + 270) % 360, s: p.s, l: p.l })
      ];
    }
    function ee(u) {
      var p = d(u).toHsl(), f = p.h;
      return [
        d(u),
        d({ h: (f + 72) % 360, s: p.s, l: p.l }),
        d({ h: (f + 216) % 360, s: p.s, l: p.l })
      ];
    }
    function oe(u, p, f) {
      p = p || 6, f = f || 30;
      var $ = d(u).toHsl(), _ = 360 / f, I = [d(u)];
      for ($.h = ($.h - (_ * p >> 1) + 720) % 360; --p; )
        $.h = ($.h + _) % 360, I.push(d($));
      return I;
    }
    function q(u, p) {
      p = p || 6;
      for (var f = d(u).toHsv(), $ = f.h, _ = f.s, I = f.v, U = [], se = 1 / p; p--; )
        U.push(d({ h: $, s: _, v: I })), I = (I + se) % 1;
      return U;
    }
    d.mix = function(u, p, f) {
      f = f === 0 ? 0 : f || 50;
      var $ = d(u).toRgb(), _ = d(p).toRgb(), I = f / 100, U = {
        r: (_.r - $.r) * I + $.r,
        g: (_.g - $.g) * I + $.g,
        b: (_.b - $.b) * I + $.b,
        a: (_.a - $.a) * I + $.a
      };
      return d(U);
    }, d.readability = function(u, p) {
      var f = d(u), $ = d(p);
      return (r.max(f.getLuminance(), $.getLuminance()) + 0.05) / (r.min(f.getLuminance(), $.getLuminance()) + 0.05);
    }, d.isReadable = function(u, p, f) {
      var $ = d.readability(u, p), _, I;
      switch (I = !1, _ = qe(f), _.level + _.size) {
        case "AAsmall":
        case "AAAlarge":
          I = $ >= 4.5;
          break;
        case "AAlarge":
          I = $ >= 3;
          break;
        case "AAAsmall":
          I = $ >= 7;
          break;
      }
      return I;
    }, d.mostReadable = function(u, p, f) {
      var $ = null, _ = 0, I, U, se, ce;
      f = f || {}, U = f.includeFallbackColors, se = f.level, ce = f.size;
      for (var xe = 0; xe < p.length; xe++)
        I = d.readability(u, p[xe]), I > _ && (_ = I, $ = d(p[xe]));
      return d.isReadable(u, $, { level: se, size: ce }) || !U ? $ : (f.includeFallbackColors = !1, d.mostReadable(u, ["#fff", "#000"], f));
    };
    var fe = d.names = {
      aliceblue: "f0f8ff",
      antiquewhite: "faebd7",
      aqua: "0ff",
      aquamarine: "7fffd4",
      azure: "f0ffff",
      beige: "f5f5dc",
      bisque: "ffe4c4",
      black: "000",
      blanchedalmond: "ffebcd",
      blue: "00f",
      blueviolet: "8a2be2",
      brown: "a52a2a",
      burlywood: "deb887",
      burntsienna: "ea7e5d",
      cadetblue: "5f9ea0",
      chartreuse: "7fff00",
      chocolate: "d2691e",
      coral: "ff7f50",
      cornflowerblue: "6495ed",
      cornsilk: "fff8dc",
      crimson: "dc143c",
      cyan: "0ff",
      darkblue: "00008b",
      darkcyan: "008b8b",
      darkgoldenrod: "b8860b",
      darkgray: "a9a9a9",
      darkgreen: "006400",
      darkgrey: "a9a9a9",
      darkkhaki: "bdb76b",
      darkmagenta: "8b008b",
      darkolivegreen: "556b2f",
      darkorange: "ff8c00",
      darkorchid: "9932cc",
      darkred: "8b0000",
      darksalmon: "e9967a",
      darkseagreen: "8fbc8f",
      darkslateblue: "483d8b",
      darkslategray: "2f4f4f",
      darkslategrey: "2f4f4f",
      darkturquoise: "00ced1",
      darkviolet: "9400d3",
      deeppink: "ff1493",
      deepskyblue: "00bfff",
      dimgray: "696969",
      dimgrey: "696969",
      dodgerblue: "1e90ff",
      firebrick: "b22222",
      floralwhite: "fffaf0",
      forestgreen: "228b22",
      fuchsia: "f0f",
      gainsboro: "dcdcdc",
      ghostwhite: "f8f8ff",
      gold: "ffd700",
      goldenrod: "daa520",
      gray: "808080",
      green: "008000",
      greenyellow: "adff2f",
      grey: "808080",
      honeydew: "f0fff0",
      hotpink: "ff69b4",
      indianred: "cd5c5c",
      indigo: "4b0082",
      ivory: "fffff0",
      khaki: "f0e68c",
      lavender: "e6e6fa",
      lavenderblush: "fff0f5",
      lawngreen: "7cfc00",
      lemonchiffon: "fffacd",
      lightblue: "add8e6",
      lightcoral: "f08080",
      lightcyan: "e0ffff",
      lightgoldenrodyellow: "fafad2",
      lightgray: "d3d3d3",
      lightgreen: "90ee90",
      lightgrey: "d3d3d3",
      lightpink: "ffb6c1",
      lightsalmon: "ffa07a",
      lightseagreen: "20b2aa",
      lightskyblue: "87cefa",
      lightslategray: "789",
      lightslategrey: "789",
      lightsteelblue: "b0c4de",
      lightyellow: "ffffe0",
      lime: "0f0",
      limegreen: "32cd32",
      linen: "faf0e6",
      magenta: "f0f",
      maroon: "800000",
      mediumaquamarine: "66cdaa",
      mediumblue: "0000cd",
      mediumorchid: "ba55d3",
      mediumpurple: "9370db",
      mediumseagreen: "3cb371",
      mediumslateblue: "7b68ee",
      mediumspringgreen: "00fa9a",
      mediumturquoise: "48d1cc",
      mediumvioletred: "c71585",
      midnightblue: "191970",
      mintcream: "f5fffa",
      mistyrose: "ffe4e1",
      moccasin: "ffe4b5",
      navajowhite: "ffdead",
      navy: "000080",
      oldlace: "fdf5e6",
      olive: "808000",
      olivedrab: "6b8e23",
      orange: "ffa500",
      orangered: "ff4500",
      orchid: "da70d6",
      palegoldenrod: "eee8aa",
      palegreen: "98fb98",
      paleturquoise: "afeeee",
      palevioletred: "db7093",
      papayawhip: "ffefd5",
      peachpuff: "ffdab9",
      peru: "cd853f",
      pink: "ffc0cb",
      plum: "dda0dd",
      powderblue: "b0e0e6",
      purple: "800080",
      rebeccapurple: "663399",
      red: "f00",
      rosybrown: "bc8f8f",
      royalblue: "4169e1",
      saddlebrown: "8b4513",
      salmon: "fa8072",
      sandybrown: "f4a460",
      seagreen: "2e8b57",
      seashell: "fff5ee",
      sienna: "a0522d",
      silver: "c0c0c0",
      skyblue: "87ceeb",
      slateblue: "6a5acd",
      slategray: "708090",
      slategrey: "708090",
      snow: "fffafa",
      springgreen: "00ff7f",
      steelblue: "4682b4",
      tan: "d2b48c",
      teal: "008080",
      thistle: "d8bfd8",
      tomato: "ff6347",
      turquoise: "40e0d0",
      violet: "ee82ee",
      wheat: "f5deb3",
      white: "fff",
      whitesmoke: "f5f5f5",
      yellow: "ff0",
      yellowgreen: "9acd32"
    }, ne = d.hexNames = $e(fe);
    function $e(u) {
      var p = {};
      for (var f in u)
        u.hasOwnProperty(f) && (p[u[f]] = f);
      return p;
    }
    function ae(u) {
      return u = parseFloat(u), (isNaN(u) || u < 0 || u > 1) && (u = 1), u;
    }
    function V(u, p) {
      tt(u) && (u = "100%");
      var f = ut(u);
      return u = s(p, c(0, parseFloat(u))), f && (u = parseInt(u * p, 10) / 100), r.abs(u - p) < 1e-6 ? 1 : u % p / parseFloat(p);
    }
    function _e(u) {
      return s(1, c(0, u));
    }
    function pe(u) {
      return parseInt(u, 16);
    }
    function tt(u) {
      return typeof u == "string" && u.indexOf(".") != -1 && parseFloat(u) === 1;
    }
    function ut(u) {
      return typeof u == "string" && u.indexOf("%") != -1;
    }
    function we(u) {
      return u.length == 1 ? "0" + u : "" + u;
    }
    function Le(u) {
      return u <= 1 && (u = u * 100 + "%"), u;
    }
    function Ye(u) {
      return r.round(parseFloat(u) * 255).toString(16);
    }
    function Oe(u) {
      return pe(u) / 255;
    }
    var ge = function() {
      var u = "[-\\+]?\\d+%?", p = "[-\\+]?\\d*\\.\\d+%?", f = "(?:" + p + ")|(?:" + u + ")", $ = "[\\s|\\(]+(" + f + ")[,|\\s]+(" + f + ")[,|\\s]+(" + f + ")\\s*\\)?", _ = "[\\s|\\(]+(" + f + ")[,|\\s]+(" + f + ")[,|\\s]+(" + f + ")[,|\\s]+(" + f + ")\\s*\\)?";
      return {
        CSS_UNIT: new RegExp(f),
        rgb: new RegExp("rgb" + $),
        rgba: new RegExp("rgba" + _),
        hsl: new RegExp("hsl" + $),
        hsla: new RegExp("hsla" + _),
        hsv: new RegExp("hsv" + $),
        hsva: new RegExp("hsva" + _),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
      };
    }();
    function ve(u) {
      return !!ge.CSS_UNIT.exec(u);
    }
    function Ge(u) {
      u = u.replace(n, "").replace(a, "").toLowerCase();
      var p = !1;
      if (fe[u])
        u = fe[u], p = !0;
      else if (u == "transparent")
        return { r: 0, g: 0, b: 0, a: 0, format: "name" };
      var f;
      return (f = ge.rgb.exec(u)) ? { r: f[1], g: f[2], b: f[3] } : (f = ge.rgba.exec(u)) ? { r: f[1], g: f[2], b: f[3], a: f[4] } : (f = ge.hsl.exec(u)) ? { h: f[1], s: f[2], l: f[3] } : (f = ge.hsla.exec(u)) ? { h: f[1], s: f[2], l: f[3], a: f[4] } : (f = ge.hsv.exec(u)) ? { h: f[1], s: f[2], v: f[3] } : (f = ge.hsva.exec(u)) ? { h: f[1], s: f[2], v: f[3], a: f[4] } : (f = ge.hex8.exec(u)) ? {
        r: pe(f[1]),
        g: pe(f[2]),
        b: pe(f[3]),
        a: Oe(f[4]),
        format: p ? "name" : "hex8"
      } : (f = ge.hex6.exec(u)) ? {
        r: pe(f[1]),
        g: pe(f[2]),
        b: pe(f[3]),
        format: p ? "name" : "hex"
      } : (f = ge.hex4.exec(u)) ? {
        r: pe(f[1] + "" + f[1]),
        g: pe(f[2] + "" + f[2]),
        b: pe(f[3] + "" + f[3]),
        a: Oe(f[4] + "" + f[4]),
        format: p ? "name" : "hex8"
      } : (f = ge.hex3.exec(u)) ? {
        r: pe(f[1] + "" + f[1]),
        g: pe(f[2] + "" + f[2]),
        b: pe(f[3] + "" + f[3]),
        format: p ? "name" : "hex"
      } : !1;
    }
    function qe(u) {
      var p, f;
      return u = u || { level: "AA", size: "small" }, p = (u.level || "AA").toUpperCase(), f = (u.size || "small").toLowerCase(), p !== "AA" && p !== "AAA" && (p = "AA"), f !== "small" && f !== "large" && (f = "small"), { level: p, size: f };
    }
    e.exports ? e.exports = d : window.tinycolor = d;
  })(Math);
})(cn);
const bs = cn.exports, xs = (e) => bs(Vn(e)).lighten(25).toHexString(), ws = Array(16).fill(0).map((e, r) => xs(r / 16));
function Yl({
  value: e,
  onChange: r,
  colors: n = ws
}) {
  return /* @__PURE__ */ l(it, {
    as: "div",
    className: "relative inline-block text-left",
    children: [/* @__PURE__ */ t("div", {
      children: /* @__PURE__ */ t(it.Button, {
        className: "cursor-pointer",
        children: /* @__PURE__ */ t("div", {
          className: "w-12 h-12 rounded-md border border-gray-700 dark:border-gray-500",
          style: {
            backgroundColor: e || "white"
          }
        })
      })
    }), /* @__PURE__ */ t(be, {
      as: me,
      enter: "transition ease-out duration-100",
      enterFrom: "transform opacity-0 scale-95",
      enterTo: "transform opacity-100 scale-100",
      leave: "transition ease-in duration-75",
      leaveFrom: "transform opacity-100 scale-100",
      leaveTo: "transform opacity-0 scale-95",
      children: /* @__PURE__ */ t("div", {
        className: "z-[101] origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-700",
        children: /* @__PURE__ */ t("div", {
          className: "grid grid-cols-4 gap-4 p-4",
          children: n?.map((a) => /* @__PURE__ */ t("div", {
            onClick: (o) => {
              o.stopPropagation(), r?.(a);
            },
            className: A("w-12 h-12 rounded-md border border-gray-700 dark:border-gray-500 flex justify-center items-center cursor-pointer", e === a ? "border-white" : ""),
            style: {
              backgroundColor: a
            },
            children: e === a && /* @__PURE__ */ t(Kt, {
              className: "w-8 h-8"
            })
          }, a))
        })
      })
    })]
  });
}
function dn(e) {
  const {
    title: r,
    open: n,
    onClose: a,
    onDelete: o,
    description: i,
    secureDelete: s = "",
    cancelLabel: c = "Abbrechen",
    deleteLabel: h = "L\xF6schen",
    isPending: d = !1,
    children: y
  } = e, [g, v] = T(""), w = Re(null), C = Re(null), [x, N] = T(!1), b = g === s, D = async () => {
    if (!(g !== s || d)) {
      N(!0);
      try {
        await o?.();
      } catch (H) {
        console.error(H);
      }
      N(!1), v("");
    }
  };
  return /* @__PURE__ */ t(be.Root, {
    show: n,
    as: me,
    children: /* @__PURE__ */ t(ze, {
      as: "div",
      className: "fixed inset-0 overflow-y-auto",
      initialFocus: C || w,
      onClose: () => a?.(),
      style: {
        zIndex: 2147483647
      },
      children: /* @__PURE__ */ l("div", {
        className: "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",
        children: [/* @__PURE__ */ t(be.Child, {
          as: me,
          enter: "ease-out duration-0",
          enterFrom: "opacity-0",
          enterTo: "opacity-100",
          leave: "ease-in duration-0",
          leaveFrom: "opacity-100",
          leaveTo: "opacity-0",
          children: /* @__PURE__ */ t(ze.Overlay, {
            className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          })
        }), /* @__PURE__ */ t("span", {
          className: "hidden sm:inline-block sm:align-middle sm:h-screen",
          "aria-hidden": "true",
          children: "\u200B"
        }), /* @__PURE__ */ t(be.Child, {
          as: me,
          enter: "ease-out duration-0",
          enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
          enterTo: "opacity-100 translate-y-0 sm:scale-100",
          leave: "ease-in duration-0",
          leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
          leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
          children: /* @__PURE__ */ l("div", {
            className: "inline-block align-bottom bg-white dark:bg-gray-700 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",
            children: [/* @__PURE__ */ t("div", {
              className: "px-4 pt-5 pb-4 sm:p-6 sm:pb-4",
              children: /* @__PURE__ */ l("div", {
                className: "sm:flex sm:items-start",
                children: [/* @__PURE__ */ t("div", {
                  className: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10",
                  children: /* @__PURE__ */ t(_i, {
                    className: "h-5 w-5 text-red-600",
                    "aria-hidden": "true"
                  })
                }), /* @__PURE__ */ l("div", {
                  className: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left",
                  children: [/* @__PURE__ */ t(ze.Title, {
                    as: "h3",
                    className: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-300",
                    children: r
                  }), /* @__PURE__ */ t("div", {
                    className: "mt-2",
                    children: /* @__PURE__ */ t("p", {
                      className: "text-sm text-gray-500 dark:text-gray-400",
                      children: i
                    })
                  }), y || "", s && /* @__PURE__ */ t("div", {
                    children: /* @__PURE__ */ t("input", {
                      className: k.Item.text,
                      type: "text",
                      value: g,
                      onChange: (H) => v(H.target.value),
                      ref: C
                    })
                  })]
                })]
              })
            }), /* @__PURE__ */ l("div", {
              className: "bg-gray-50 dark:bg-gray-900 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse justify-between items-center",
              children: [/* @__PURE__ */ t(z, {
                type: "button",
                $disabled: !b,
                $danger: b,
                className: "w-full",
                onClick: () => D(),
                children: d || x ? /* @__PURE__ */ t(We, {}) : h
              }), /* @__PURE__ */ l(z, {
                $secondary: !0,
                type: "button",
                className: "w-full m-2",
                onClick: () => a?.(),
                children: [c, " "]
              })]
            })]
          })
        })]
      })
    })
  });
}
function Vl({
  form: e,
  id: r = ""
}) {
  const n = (a) => e.register(`${r ? `config.tracking.${r}.` : ""}${a}`);
  return /* @__PURE__ */ l(k, {
    children: [/* @__PURE__ */ l(k.Item, {
      $first: !0,
      children: [/* @__PURE__ */ l(k.Item.Label, {
        children: [r ? "" : "Globale ", "Google Ads ID"]
      }), /* @__PURE__ */ t(k.Item.Body, {
        children: /* @__PURE__ */ t(K, {
          type: "text",
          ...n("googleAdsID")
        })
      })]
    }), /* @__PURE__ */ l(k.Item, {
      children: [/* @__PURE__ */ l(k.Item.Label, {
        children: [r ? "" : "Globale ", "Google Conversion-ID f\xFCr ", /* @__PURE__ */ t("em", {
          children: "Mitglied werden"
        })]
      }), /* @__PURE__ */ t(k.Item.Body, {
        children: /* @__PURE__ */ t(K, {
          type: "text",
          ...n("googleConversionIDs.membership")
        })
      })]
    }), /* @__PURE__ */ l(k.Item, {
      children: [/* @__PURE__ */ l(k.Item.Label, {
        children: [r ? "" : "Globale ", "Google Tag ID"]
      }), /* @__PURE__ */ t(k.Item.Body, {
        children: /* @__PURE__ */ t(K, {
          type: "text",
          ...n("googleTagID")
        })
      })]
    }), /* @__PURE__ */ l(k.Item, {
      children: [/* @__PURE__ */ l(k.Item.Label, {
        children: [r ? "" : "Globale ", "Facebook Marketing ID"]
      }), /* @__PURE__ */ t(k.Item.Body, {
        children: /* @__PURE__ */ t(K, {
          type: "text",
          ...n("facebookMarketingID")
        })
      })]
    })]
  });
}
function ye({
  children: e,
  cols: r = 2
}) {
  return /* @__PURE__ */ t("dl", {
    className: `grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-${r}`,
    children: e
  });
}
const ks = ({
  children: e
}) => /* @__PURE__ */ t("div", {
  className: "sm:col-span-1",
  children: e
});
ye.Item = ks;
const Ns = ({
  children: e
}) => /* @__PURE__ */ t("dt", {
  className: "text-sm font-medium text-gray-500 dark:text-gray-300",
  children: e
});
ye.Header = Ns;
const Cs = ({
  children: e
}) => /* @__PURE__ */ t("dd", {
  className: "mt-1 text-sm text-gray-900 dark:text-gray-400",
  children: e
});
ye.Body = Cs;
function Ut(e) {
  const {
    control: r,
    name: n,
    rules: a,
    mask: o,
    placeholder: i
  } = e, {
    children: s = (c) => /* @__PURE__ */ t(K, {
      ...c,
      type: "text"
    })
  } = e;
  return /* @__PURE__ */ t(Ae, {
    render: ({
      field: c
    }) => /* @__PURE__ */ t(Un, {
      mask: o,
      value: c.value || "",
      onChange: (h) => c.onChange(h.target.value),
      placeholder: i,
      children: s
    }),
    control: r,
    name: n,
    rules: a
  });
}
function Ul({
  control: e,
  rules: r,
  name: n,
  placeholder: a
}) {
  return /* @__PURE__ */ t(Ut, {
    mask: "99.99.99",
    control: e,
    name: n,
    placeholder: a || "DD.MM.YY",
    rules: r
  });
}
const Ir = ["\u{1F683}", "\u{1F68B}"], Ss = () => Ir[Math.floor(Math.random() * Ir.length)], $s = (e) => "\u{1F682}" + Array.from({
  length: e
}, Ss).join(""), vt = ({
  children: e
}) => /* @__PURE__ */ l("marquee", {
  children: [$s(4), e]
});
function Ds(e, r) {
  return Array.from({
    length: Math.ceil(e.length / r)
  }, (n, a) => e.slice(a * r, a * r + r));
}
function _t(e) {
  const {
    model: r,
    filterOptions: n = {},
    swrOptions: a = {
      revalidateOnFocus: !1
    },
    filter: o,
    edit: i
  } = e, {
    api: s
  } = Be(), c = He(r && s ? [s.shortID, "sdk.entryList", r, n] : null, async () => {
    let g;
    return n?.remoteID?.any?.length > 120 && (g = {
      items: (await Promise.all(Ds(n.remoteID.any, 120).map((v) => s?.entryList(r, {
        remoteID: {
          any: v
        },
        _count: v.length
      }).then(({
        items: w
      }) => w)))).flat()
    }), g = await s?.entryList(r, n), i ? i(g) : g;
  }, a), h = Ie(() => {
    const g = c?.data?.items;
    return o ? g?.filter(o) : g;
  }, [c?.data, o]), {
    count: d,
    total: y
  } = c.data || {};
  return c.error && console.error("error in useEntryList", c.error), {
    count: d,
    items: h,
    total: y,
    ...c
  };
}
function Rs(e) {
  const {
    field: r,
    form: {
      register: n
    },
    schema: a,
    filterOptions: o = {
      _count: 50
    },
    swrOptions: i,
    filter: s,
    labelProperty: c = "_entryTitle"
  } = e, [h, d] = sr(a?.title || "");
  if (h !== "entries")
    return /* @__PURE__ */ t(vt, {
      children: 'EntriesChecker can only be used with fields of type "entries".'
    });
  if (!d)
    return /* @__PURE__ */ l(vt, {
      children: ['no model set for field "', r, '". Make sure field has validation set to target model name.']
    });
  const {
    items: y,
    data: g
  } = _t({
    model: d,
    filterOptions: o,
    filter: s,
    swrOptions: i
  });
  return G(() => {
    g && g.total > g.count && console.warn(`EntriesChecker: more than ${g.count} entries found for field "${r}", model "${d}". Consider using a different field type.`);
  }, [g]), /* @__PURE__ */ t(re, {
    children: y ? y.map((v, w) => /* @__PURE__ */ t(me, {
      children: /* @__PURE__ */ l("label", {
        className: "flex cursor-pointer items-center",
        children: [/* @__PURE__ */ t(k.Checkbox, {
          className: "mr-2",
          ...n(r),
          value: v.id
        }), v[c]]
      }, w)
    }, w)) : "Laden..."
  });
}
function Wt(e) {
  const {
    items: r,
    placeholder: n,
    control: a,
    name: o,
    rules: i,
    renderPlaceholder: s,
    className: c
  } = e;
  return /* @__PURE__ */ t(Ae, {
    render: ({
      field: h
    }) => /* @__PURE__ */ t(tr, {
      className: c,
      placeholder: s?.(h.value) ?? n,
      items: r,
      value: h.value,
      onChange: h.onChange
    }),
    control: a,
    name: o,
    rules: i
  });
}
function Es(e) {
  const {
    filterOptions: r = {
      _count: 25
    },
    field: n,
    schema: a,
    labelProperty: o = "_entryTitle",
    form: {
      control: i
    },
    renderPlaceholder: s,
    placeholder: c,
    staticItems: h = [],
    model: d
  } = e, [y, g] = a ? sr(a?.title) || [] : [];
  if (y && y !== "entry")
    return /* @__PURE__ */ t(vt, {
      children: 'EntrySelect can only be used with fields of type "entry".'
    });
  const v = g || d;
  if (!v)
    return /* @__PURE__ */ l(vt, {
      children: ['no model set for field "', n, '". Make sure field has validation set to target model name.']
    });
  const {
    items: w,
    data: C
  } = _t({
    model: v,
    filterOptions: r
  });
  return G(() => {
    C && C?.total > C?.count && console.warn(`EntrySelect: more than ${C.count} entries found for field "${n}", model "${v}". Either adjust "count" prop or consider using a different field type.`);
  }, [C]), /* @__PURE__ */ t(re, {
    children: w ? /* @__PURE__ */ t(Wt, {
      items: h.concat(w?.map(({
        [o]: x,
        id: N
      }) => ({
        label: x,
        value: N
      }))),
      control: i,
      name: n,
      renderPlaceholder: s,
      placeholder: c || "Bitte w\xE4hlen..."
    }) : /* @__PURE__ */ t(re, {
      children: "..."
    })
  });
}
const sr = (e) => e?.split("<").map((r, n) => n ? r.slice(0, -1) : r) || [];
function Ms(e) {
  const {
    field: r,
    schema: n,
    form: a,
    rules: o,
    placeholder: i = "",
    entry: s
  } = e, [c, h] = n?.title.split("<") || [];
  let d;
  const y = s?.id && n?.readOnly, g = () => a.register(r, o);
  switch (c) {
    case "text":
      return /* @__PURE__ */ t(K, {
        type: "text",
        placeholder: i,
        ...g(),
        readOnly: y
      });
    case "number":
      return /* @__PURE__ */ t(K, {
        type: "number",
        ...g(),
        readOnly: y
      });
    case "decimal":
      return /* @__PURE__ */ t(K, {
        type: "number",
        ...g(),
        readOnly: y
      });
    case "datetime":
      return /* @__PURE__ */ t(Mr, {
        name: r,
        control: a.control,
        rules: o
      });
    case "url":
      return /* @__PURE__ */ t(K, {
        type: "url",
        ...g(),
        readOnly: y
      });
    case "boolean":
      return /* @__PURE__ */ t(K, {
        type: "checkbox",
        ...g(),
        readOnly: y
      });
    case "formattedText":
      return /* @__PURE__ */ t(K.Textarea, {
        ...g(),
        readOnly: y,
        rows: 3
      });
    case "entry":
      return /* @__PURE__ */ t(Es, {
        ...e
      });
    case "entries":
      return /* @__PURE__ */ t(Rs, {
        ...e
      });
    case "assets":
      return d = h?.split(":")[1].slice(0, -1), /* @__PURE__ */ t(Er, {
        name: r,
        control: a.control,
        group: d
      });
    case "asset":
      return d = h?.split(":")[1].slice(0, -1), /* @__PURE__ */ t(Er, {
        solo: !0,
        name: r,
        control: a.control,
        group: d
      });
    case "json":
      return /* @__PURE__ */ t(Ae, {
        control: a.control,
        name: r,
        render: ({
          field: v
        }) => /* @__PURE__ */ t(Wn, {
          className: "h-96",
          defaultLanguage: "json",
          value: JSON.stringify(v.value, null, 2),
          onChange: (w) => v.onChange(JSON.parse(w)),
          theme: localStorage.getItem("theme") === "dark" ? "vs-dark" : "vs-light",
          options: {
            wordWrap: "on",
            autoIndent: "full",
            formatOnPaste: !0,
            autoClosingBrackets: "always",
            automaticLayout: !0,
            scrollBeyondLastLine: !1,
            smoothScrolling: !0,
            formatOnType: !0
          }
        })
      });
    case "date":
      return /* @__PURE__ */ t(Mr, {
        name: r,
        control: a.control
      });
    case void 0:
      return null;
    default:
      return /* @__PURE__ */ l(vt, {
        children: ['Field type "', n?.title, '" not implemented!']
      });
  }
}
function lr(e) {
  const {
    dev: r,
    usedFields: n,
    fields: a,
    entryField: o,
    hideButtons: i
  } = e;
  return G(() => {
    r && n?.length && Fs(e);
  }, [r, n?.length]), /* @__PURE__ */ t(re, {
    children: /* @__PURE__ */ l(k, {
      children: [/* @__PURE__ */ t(Is, {
        ...e
      }), !i && /* @__PURE__ */ t(_s, {
        ...e
      })]
    })
  });
}
function Is(e) {
  const {
    usedFields: r,
    fields: n,
    entryField: a
  } = e;
  return /* @__PURE__ */ t(re, {
    children: r.map(([o], i) => /* @__PURE__ */ t(me, {
      children: n?.[o]?.renderItem?.(a(o)) || /* @__PURE__ */ l(k.Item, {
        $first: !i,
        children: [/* @__PURE__ */ t(k.Item.Label, {
          children: n?.[o]?.label || o
        }), /* @__PURE__ */ t(k.Item.Body, {
          children: n?.[o]?.render?.(a(o)) || /* @__PURE__ */ t(Ms, {
            ...a(o)
          })
        })]
      }, o)
    }, i))
  });
}
function _s(e) {
  const [r, n] = T(!1), {
    canDelete: a,
    canSubmit: o,
    isSubmitting: i,
    onSubmit: s,
    cancel: c,
    onDelete: h,
    entry: d
  } = e;
  return /* @__PURE__ */ l(re, {
    children: [/* @__PURE__ */ l("div", {
      className: A("flex", a ? "justify-between" : "justify-end"),
      children: [a && /* @__PURE__ */ t(z, {
        $secondary: !0,
        onClick: () => n(!0),
        children: /* @__PURE__ */ t(Ee.Error, {
          children: "L\xF6schen"
        })
      }), /* @__PURE__ */ l("div", {
        className: "flex space-x-2",
        children: [/* @__PURE__ */ t(z, {
          $secondary: !0,
          onClick: () => c(),
          children: "Abbrechen"
        }), /* @__PURE__ */ l(z, {
          $primary: o,
          $disabled: !o,
          onClick: s,
          children: ["Speichern ", i && /* @__PURE__ */ t(We, {})]
        })]
      })]
    }), /* @__PURE__ */ t(dn, {
      title: "Wirklich l\xF6schen?",
      deleteLabel: "L\xF6schen",
      description: "L\xF6schen kann nicht r\xFCckg\xE4ngig gemacht werden.",
      open: r,
      onClose: () => n(!1),
      onDelete: async () => {
        await d.delete(), n(!1), h?.();
      }
    })]
  });
}
function Fs(e) {
  const {
    usedFields: r,
    fields: n,
    model: a
  } = e, o = a?.charAt(0).toUpperCase() + (a || "").slice(1) + "Form", i = `// if you want to fully customize the form, copy the following code and paste it into src/react/routes/${o}.tsx
import React from 'react';
import Button from '../components/Button';
import EntryField from '../components/EntryField';
import Form from '../components/Form';
import LocalLoader from '../components/LocalLoader';
import useEntryForm from '../hooks/useEntryForm';

export default function ${o}() {
  const { form, entryField, canSubmit, onSubmit, cancel } = useEntryForm({ model: '${a}' });
  // form is a react-hook-form instance
  return (
    <Form>${r.map(([s], c) => `
      <Form.Item${c ? "" : " $first"}>
        <Form.Item.Label>${n?.[s]?.label || s}</Form.Item.Label>
        <Form.Item.Body>
          <EntryField {...entryField('${s}')} />
        </Form.Item.Body>
      </Form.Item>`).join("")}
      <div className="flex justify-end space-x-2">
        <Button $secondary onClick={() => cancel()}>
          Abbrechen
        </Button>
        <Button $primary={canSubmit} $disabled={!canSubmit} onClick={onSubmit}>
          Speichern {form.formState.isSubmitting && <LocalLoader />}
        </Button>
      </div>
    </Form>
  );
}`;
  console.log(i);
}
function Wl({
  onClick: e,
  className: r,
  children: n
}) {
  const a = async () => {
    await wt("Wirklich l\xF6schen?", "Das kann nicht r\xFCckg\xE4ngig gemacht werden.") && e?.();
  };
  return /* @__PURE__ */ l("a", {
    className: A("inline-flex items-center group text-red-600 dark:text-red-300 cursor-pointer", r),
    onClick: a,
    children: [/* @__PURE__ */ t(Dt, {
      className: "w-4 h-4 block opacity-0 group-hover:opacity-100"
    }), /* @__PURE__ */ t("div", {
      className: "flex items-center",
      children: n
    })]
  });
}
function Gl(e) {
  const {
    className: r,
    ...n
  } = e;
  return /* @__PURE__ */ t("div", {
    ...n,
    children: /* @__PURE__ */ t("svg", {
      className: e.className,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ t("path", {
        d: "M11 18C11 19.1 10.1 20 9 20C7.9 20 7 19.1 7 18C7 16.9 7.9 16 9 16C10.1 16 11 16.9 11 18ZM9 10C7.9 10 7 10.9 7 12C7 13.1 7.9 14 9 14C10.1 14 11 13.1 11 12C11 10.9 10.1 10 9 10ZM9 4C7.9 4 7 4.9 7 6C7 7.1 7.9 8 9 8C10.1 8 11 7.1 11 6C11 4.9 10.1 4 9 4ZM15 8C16.1 8 17 7.1 17 6C17 4.9 16.1 4 15 4C13.9 4 13 4.9 13 6C13 7.1 13.9 8 15 8ZM15 10C13.9 10 13 10.9 13 12C13 13.1 13.9 14 15 14C16.1 14 17 13.1 17 12C17 10.9 16.1 10 15 10ZM15 16C13.9 16 13 16.9 13 18C13 19.1 13.9 20 15 20C16.1 20 17 19.1 17 18C17 16.9 16.1 16 15 16Z",
        fill: "currentColor"
      })
    })
  });
}
function ql({
  onChange: e,
  children: r
}) {
  return /* @__PURE__ */ t(nn, {
    onDrop: async (n) => {
      const a = await n.files[0].text();
      e?.(a);
    },
    children: ({
      isActive: n,
      drop: a
    }) => /* @__PURE__ */ l("div", {
      ref: a,
      className: A("relative"),
      children: [r, n && /* @__PURE__ */ t("div", {
        className: "absolute top-0 w-full h-full bg-green-500 bg-opacity-50 p-2",
        children: /* @__PURE__ */ t("div", {
          className: "border-2 border-dashed border-white w-full h-full rounded-lg flex justify-center items-center text-lg",
          children: /* @__PURE__ */ l("span", {
            className: "bg-gray-300 dark:bg-gray-800 p-4 rounded-full text flex space-x-2 items-center",
            children: [/* @__PURE__ */ t(ri, {
              className: "w-5 h-5"
            }), /* @__PURE__ */ t("span", {
              children: "Loslassen zum Einf\xFCgen"
            })]
          })
        })
      })]
    })
  });
}
function Jl(e) {
  const {
    field: r,
    form: {
      control: n
    },
    rules: a,
    placeholder: o = "Bitte w\xE4hlen...",
    items: i,
    renderSelectedLabel: s
  } = e, c = Ie(() => i?.filter((h) => h.hidden)?.map((h) => h.value) || [], [i]);
  return /* @__PURE__ */ t(Ae, {
    render: ({
      field: h
    }) => /* @__PURE__ */ t(Ne, {
      label: `${h.value?.length ? s?.(h.value, i) || `${h.value?.filter((d) => !c.includes(d))?.length} ausgew\xE4hlt` : o}`,
      children: /* @__PURE__ */ t(Ne.Panel, {
        children: /* @__PURE__ */ t("form", {
          className: "space-y-4",
          children: i?.map((d, y) => /* @__PURE__ */ t(Ne.Checkbox, {
            className: d.hidden ? "hidden" : "",
            checked: h.value?.includes(d.value),
            onChange: (g) => h.onChange(g.target.checked ? (h.value || []).concat([d.value]) : (h.value || []).filter((v) => v !== d.value)),
            children: d.label
          }, y))
        })
      })
    }),
    control: n,
    name: r,
    rules: a
  });
}
function Zl({
  abort: e = !1
}) {
  const r = et(), [n, a] = je.useState(""), {
    jwt: o
  } = Br(), i = Zt();
  return G(() => {
    o || (console.warn("navigate login"), i("/login"));
  }, [o]), G(() => {
    try {
      if (o) {
        if (e) {
          console.log("abort"), fetch(`${Pe.accountServerUrl}/auth/email-verification/abort/${o}`, {
            method: "GET"
          }).then((s) => {
            s.ok ? (a("E-Mail erfolgreich zur\xFCckgesetzt"), r.emit({
              type: "success",
              title: "E-Mail erfolgreich zur\xFCckgesetzt"
            })) : (a("E-Mail konnte nicht zur\xFCckgesetzt werden"), r.emit({
              type: "error",
              title: "Etwas ist schiefgelaufen"
            }));
          });
          return;
        }
        fetch(`${Pe.accountServerUrl}/auth/email-verification/${o}`, {
          method: "GET"
        }).then((s) => {
          s.ok ? (a("E-Mail erfolgreich best\xE4tigt"), r.emit({
            type: "success",
            title: "E-Mail erfolgreich verifiziert"
          })) : (a("E-Mail konnte nicht verifiziert werden"), r.emit({
            type: "error",
            title: "Etwas ist schiefgelaufen"
          }));
        });
      }
    } catch (s) {
      console.log(s), r.emit({
        type: "error",
        title: "Etwas ist schiefgelaufen"
      });
    }
  }, [e, o]), /* @__PURE__ */ t("div", {
    className: "flex gap-4 h-screen items-center justify-center",
    children: n ? /* @__PURE__ */ l("div", {
      className: "flex flex-col justify-center items-center gap-3",
      children: [/* @__PURE__ */ t("h2", {
        children: n
      }), /* @__PURE__ */ t(z, {
        $primary: !0,
        onClick: () => i("/login"),
        children: "Zur\xFCck zum Login"
      })]
    }) : /* @__PURE__ */ l(re, {
      children: [/* @__PURE__ */ t("h2", {
        children: e ? "Best\xE4tigung der Email Adresse wird Abgebrochen" : "Email Adresse wird best\xE4tigt"
      }), /* @__PURE__ */ t(We, {})]
    })
  });
}
const As = "https://admin-dev.appsite.de";
function Xl({
  route: e
}) {
  const {
    token: r,
    api: n
  } = Be(), a = localStorage.getItem("theme"), [o, i] = je.useState(!0), s = r && n?.shortID && e ? `${As}/embed?theme=${a}&redirect=/${e}&token=${r}` : "";
  return /* @__PURE__ */ l(re, {
    children: [o && /* @__PURE__ */ t(We, {}), /* @__PURE__ */ t("div", {
      className: o ? "hidden" : "",
      children: s && /* @__PURE__ */ t("iframe", {
        ref: (c) => {
          c && (c.onload = function() {
            i(!1);
          });
        },
        src: decodeURIComponent(s),
        className: "w-screen h-screen"
      })
    })]
  });
}
function Ql({
  label: e = "Webhook",
  action: r
}) {
  return /* @__PURE__ */ t("div", {
    className: "py-16 px-8",
    children: /* @__PURE__ */ l("button", {
      onClick: r,
      type: "button",
      className: "relative block w-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
      children: [/* @__PURE__ */ t("svg", {
        className: "mx-auto h-12 w-12 text-gray-400",
        xmlns: "http://www.w3.org/2000/svg",
        stroke: "currentColor",
        fill: "none",
        viewBox: "0 0 48 48",
        "aria-hidden": "true",
        children: /* @__PURE__ */ t("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6"
        })
      }), /* @__PURE__ */ l("span", {
        className: "mt-2 block text-sm font-medium text-gray-900 dark:text-gray-300",
        children: [e, " erstellen"]
      })]
    })
  });
}
function Kl(e) {
  const {
    field: r,
    form: {
      control: n
    },
    rules: a,
    placeholder: o = "Bitte w\xE4hlen...",
    filterOptions: i,
    swrOptions: s,
    filter: c,
    labelProperty: h = "_entryTitle",
    renderSelectedLabel: d,
    schema: y,
    model: g = e.model || y && sr(y?.title)[1]
  } = e, {
    items: v
  } = _t({
    model: g || null,
    filterOptions: i,
    swrOptions: s,
    filter: c
  });
  return /* @__PURE__ */ t(Ae, {
    render: ({
      field: w
    }) => /* @__PURE__ */ t(Ne, {
      label: `${w.value?.length ? d?.(w.value, v || []) || `${w.value?.length} ausgew\xE4hlt` : o}`,
      children: /* @__PURE__ */ t(Ne.Panel, {
        children: /* @__PURE__ */ t("form", {
          className: "space-y-4",
          children: v?.map((C) => /* @__PURE__ */ t(Ne.Checkbox, {
            checked: w.value?.includes(C.id),
            onChange: (x) => w.onChange(x.target.checked ? w.value?.concat([C.id]) || [] : w.value?.filter((N) => N !== C.id) || []),
            children: C[h]
          }, C.id))
        })
      })
    }),
    control: n,
    name: r,
    rules: a
  });
}
const ec = Ce((e, r) => {
  const {
    items: n
  } = _t(e), {
    name: a,
    onChange: o,
    onBlur: i
  } = e;
  return /* @__PURE__ */ t("select", {
    className: "input bg-white dark:bg-gray-700 relative w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
    multiple: !0,
    ref: r,
    name: a,
    onChange: o,
    onBlur: i,
    children: n?.map((s, c) => /* @__PURE__ */ t("option", {
      value: s.id,
      children: s._entryTitle
    }, c))
  });
});
function Ls(e) {
  const {
    model: r,
    type: n = "post",
    fields: a,
    dynamicFields: o = !1
  } = e, {
    api: i
  } = Be(), s = dt(i && r ? ["api.getSchema", r] : null, () => i?.getSchema(r, n)), {
    data: c
  } = s, h = c?.allOf?.[1]?.properties;
  let d = Ie(() => a, []);
  o && (d = a);
  const y = Ie(() => {
    if (!h)
      return [];
    const g = Object.entries(h || {}).filter(([v]) => !v.startsWith("_") && !["id", "private", "created", "creator", "modified"].includes(v));
    if (d) {
      const v = g.map(([C]) => C).concat(["id", "created", "creator", "modified"]), w = (C) => [C, h[C]];
      return Object.entries(d).reduce((C, [x]) => v.includes(x) ? C.concat([w(x)]) : (v.includes(x) || console.warn(`useSchema: given field "${x}" not found in schema for model "${r}". It will be omitted. 
        Must be one of: ${v.join(", ")}`), C), []);
    }
    return g;
  }, [h, d]);
  return {
    schema: h,
    usedFields: y,
    fields: d,
    swrResponse: s
  };
}
function cr(e) {
  const {
    model: r,
    fields: n,
    formProps: a,
    ...o
  } = e, {
    entry: i,
    onSubmit: s,
    onCancel: c,
    onDelete: h,
    dev: d = !1,
    getDefaultValues: y,
    formToEntry: g,
    entryToForm: v
  } = e, {
    api: w
  } = Be(), C = et(), [x, N] = T(), {
    schema: b,
    usedFields: D,
    fields: H
  } = Ls({
    model: r,
    type: i?.id ? "put" : "post",
    fields: n,
    ...o
  }), Y = st(a), {
    handleSubmit: O,
    reset: F,
    formState: {
      isDirty: R,
      isSubmitting: E
    }
  } = Y, P = () => {
    let q = y?.(D, i) || Object.fromEntries(D?.map(([fe, ne]) => {
      const [$e] = ne.title.split("<");
      let ae = i?.[fe] ?? ne.default;
      switch ($e) {
        case "assets":
          ae = ae?.map((V) => V.assetID) || [];
          break;
        case "asset":
          ae = ae?.assetID;
          break;
        case "entry":
          ae = ae?.id;
          break;
        case "entries":
          ae = ae?.map((V) => V.id) || [];
      }
      return [fe, ae];
    }));
    v ? (async () => N(await v(q, Y)))() : N(q);
  };
  G(() => {
    P();
  }, [D, i]), G(() => {
    F(x);
  }, [x]);
  const B = O(async (q) => {
    let fe;
    try {
      q = JSON.parse(JSON.stringify(q)), q = await g?.(q, i) || q, Object.keys(q).forEach((ne) => {
        b?.[ne]?.type === "number" && (q[ne] = Number(q[ne])), i && (i[ne] = q[ne]);
      }), i?.id && i.save ? fe = await i.save() : fe = await w.createEntry(r, q), C.emit({
        type: "success",
        title: "Erfolgreich gespeichert."
      }), await s?.(fe, !!i?.id), P();
    } catch (ne) {
      console.error("Fehler beim Speichern", q, D), console.dir(ne), C.emit({
        type: "error",
        title: "Fehler beim Speichern",
        message: ne?.message || "Unbekannter Fehler"
      });
    }
  }), X = async () => !R || await wt("\xC4nderungen verwerfen?", "Die \xC4nderungen gehen verloren.") ? (F(x), c?.(), !0) : !1, Q = !i?.id || R && !E, ee = !!h && !!i?.id, oe = (q) => ({
    field: q,
    schema: b?.[q],
    form: Y,
    entry: i,
    entryField: oe
  });
  return {
    model: r,
    schema: b,
    entry: i,
    usedFields: D,
    form: Y,
    onCancel: c,
    cancel: X,
    canSubmit: Q,
    canDelete: ee,
    isDirty: R,
    isSubmitting: E,
    onSubmit: B,
    onDelete: h,
    fields: H,
    entryField: oe,
    dev: d
  };
}
function tc(e) {
  const {
    children: r,
    hideButtons: n,
    ...a
  } = e, o = cr(a);
  return typeof r == "function" ? r(o) : /* @__PURE__ */ t(lr, {
    ...o,
    hideButtons: n
  });
}
function rc(e) {
  const {
    onSubmit: r,
    onDelete: n,
    onClose: a,
    open: o,
    disableClose: i,
    heading: s,
    children: c,
    ...h
  } = e, {
    fields: d,
    entry: y
  } = e, g = cr({
    entry: y,
    fields: d,
    onDelete: n ? async () => {
      await n(), a?.();
    } : void 0,
    onSubmit: async (v, w) => {
      await r?.(v, w), a?.();
    },
    onCancel: a,
    ...h
  });
  return /* @__PURE__ */ l(Et, {
    open: o,
    onClose: async () => !i && await g.cancel() && a?.(),
    className: "min-w-full sm:min-w-[640px] max-w-[900px]",
    children: [s && /* @__PURE__ */ t("h3", {
      className: "text-2xl",
      children: s
    }), typeof c == "function" ? c(g) : /* @__PURE__ */ t(lr, {
      ...g
    })]
  });
}
function nc(e) {
  const {
    onSubmit: r,
    onDelete: n,
    onClose: a,
    open: o,
    disableClose: i,
    heading: s,
    children: c,
    ...h
  } = e, {
    fields: d,
    entry: y
  } = e, g = cr({
    entry: y,
    fields: d,
    onDelete: n ? async () => {
      await n(), a?.();
    } : void 0,
    onSubmit: async (v, w) => {
      await r?.(v, w), a?.();
    },
    onCancel: a,
    ...h
  });
  return /* @__PURE__ */ l(De, {
    open: o,
    className: e.className,
    onClose: async () => !i && await g.cancel() && a?.(),
    children: [/* @__PURE__ */ l(De.Head, {
      children: [/* @__PURE__ */ t(De.Heading, {
        children: s || ""
      }), /* @__PURE__ */ t(De.X, {})]
    }), /* @__PURE__ */ t(De.Body, {
      children: typeof c == "function" ? c(g) : /* @__PURE__ */ t(lr, {
        ...g
      })
    })]
  });
}
function Os(e) {
  const {
    className: r,
    value: n,
    onChange: a,
    options: o,
    onBlur: i
  } = e, s = Re(null), c = Re(null), [h, d] = je.useState(!0), y = Ke(() => a?.(c.current.innerHTML), [a]);
  return G(() => {
    s.current?.saveSelection(), s.current?.setContent(n, 0), s.current?.restoreSelection();
  }, [n]), Jt(() => {
    const g = c.current, v = new Gn(g, o);
    return v.subscribe("editableInput", y), s.current = v, d(!1), () => {
      s.current.unsubscribe("editableInput", y), s.current?.destroy(), s.current = null;
    };
  }, [o]), /* @__PURE__ */ l(re, {
    children: [h && /* @__PURE__ */ t(We, {}), /* @__PURE__ */ t("div", {
      className: A(r, "prose dark:prose-invert"),
      onBlur: () => i?.(),
      ref: c
    })]
  });
}
function ac({
  value: e,
  onChange: r,
  options: n = {
    toolbar: {
      buttons: ["bold", "italic", "underline", "h1", "h2", "h3"]
    }
  },
  placeholder: a = "Dein Text\u2026",
  className: o = void 0
}) {
  const i = Ie(() => ({
    ...n,
    placeholder: {
      text: a,
      hideOnClick: !0
    }
  }), [n, a]);
  return /* @__PURE__ */ t("div", {
    children: /* @__PURE__ */ t(Os, {
      value: e,
      onChange: r,
      options: i,
      className: A(`block w-full shadow-sm border border-gray-300 dark:border-gray-500 rounded-md 
        focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 p-2`, o)
    })
  });
}
function ic(e) {
  const {
    data: r
  } = us(), {
    backends: n
  } = or(), {
    field: a,
    form: {
      register: o
    }
  } = e, i = Ie(() => r?.reduce((s, c) => {
    const [h, d] = c.split("$");
    return {
      ...s,
      [h]: (s[h] || []).concat([d])
    };
  }, {}), [r]);
  return /* @__PURE__ */ t(k.Item, {
    children: !n || !r ? "Lade Gruppen..." : Object.entries(i).map(([s, c]) => /* @__PURE__ */ l(me, {
      children: [/* @__PURE__ */ l(k.Item.Label, {
        children: [n[s], " Gruppen"]
      }), /* @__PURE__ */ t(k.Item.Body, {
        className: "space-y-1",
        children: c.map((h, d) => /* @__PURE__ */ l("label", {
          className: "flex cursor-pointer dark:text-gray-300 text-sm",
          children: [/* @__PURE__ */ t(k.Checkbox, {
            className: "mr-2",
            ...o(a),
            value: `${s}$${h}`
          }), h]
        }, d))
      })]
    }, s))
  });
}
function Ts(e, r, n, a, o) {
  for (r = r.split ? r.split(".") : r, a = 0; a < r.length; a++)
    e = e ? e[r[a]] : o;
  return e === o ? n : e;
}
function js(e) {
  return typeof e == "string" ? e : typeof e.message == "string" ? e.message : "Unknown error";
}
function Ps() {
  const [e, r] = T(!1), n = et();
  return {
    notifications: n,
    withFeedback: async (i, {
      success: s,
      error: c,
      getErrorMessage: h = js
    }) => {
      try {
        r(!0), await i(), n.emit({
          type: "success",
          title: s
        });
      } catch (d) {
        const y = h(d);
        console.error(y), console.dir(d), n.emit({
          type: "error",
          title: c,
          message: y
        });
      }
      r(!1);
    },
    withPending: async (i) => {
      r(!0), await i(), r(!1);
    },
    pending: e
  };
}
function Bs({
  type: e,
  depends: r
}) {
  const {
    data: n,
    mutate: a
  } = ar(), {
    handleSubmit: o,
    reset: i,
    watch: s,
    setValue: c,
    formState: {
      isValidating: h,
      isDirty: d
    }
  } = st();
  G(() => {
    i({
      ...n
    });
  }, [n]);
  const y = s("moduleSettings"), {
    withFeedback: g,
    pending: v
  } = Ps(), w = (b) => {
    g(async () => {
      const D = {
        visibility: b.moduleSettings.visibility,
        visibilityApp: b.moduleSettings.visibilityApp
      };
      Object.assign(n.moduleSettings, D), await n.save(!0), a();
    }, {
      success: "Einstellungen gespeichert",
      error: "Fehler beim Speichern"
    });
  };
  function C(b) {
    return b = b.split(".").slice(1).join("."), Ts(y, b);
  }
  function x(b) {
    return () => {
      c(b, !C(b), {
        shouldDirty: !0
      }), w(s());
    };
  }
  function N(b) {
    return C(b) ? "text-blue-500" : "text-slate-400";
  }
  return /* @__PURE__ */ l("div", {
    className: "ml-2 gap-2 inline-block text-sm",
    children: [/* @__PURE__ */ t(z.Action, {
      onClick: x("moduleSettings.visibility." + e),
      $disabled: r ? !s("moduleSettings.visibility." + r) : !1,
      tooltip: "f\xFCr Web aktiv",
      placement: "bottom",
      children: /* @__PURE__ */ t(Ci, {
        className: `w-5 h-5 ${N("moduleSettings.visibility." + e)}`
      })
    }), /* @__PURE__ */ t(z.Action, {
      onClick: x("moduleSettings.visibilityApp." + e),
      $disabled: r ? !s("moduleSettings.visibilityApp." + r) : !1,
      tooltip: "f\xFCr App aktiv",
      placement: "bottom",
      children: /* @__PURE__ */ t(Di, {
        className: `w-5 h-5 ${N("moduleSettings.visibilityApp." + e)}`
      })
    })]
  });
}
const un = ({
  label: e,
  name: r,
  placeholder: n,
  value: a,
  onChange: o,
  dropdown: i
}) => {
  const [s, c] = T(i.value), [h, d] = T(a);
  return G(() => {
    d(a), c(i.value);
  }, [a, i]), G(() => {
    o(h, s);
  }, [h, s]), /* @__PURE__ */ l(k.Item, {
    children: [/* @__PURE__ */ t(k.Item.Label, {
      htmlFor: r,
      children: e
    }), /* @__PURE__ */ t(k.Item.Body, {
      children: /* @__PURE__ */ l("div", {
        className: "mt-1 relative rounded-md shadow-sm",
        children: [/* @__PURE__ */ t("input", {
          type: "text",
          name: r,
          id: r,
          value: h,
          onChange: (y) => d(y.target.value),
          className: "focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md",
          placeholder: n
        }), /* @__PURE__ */ t("div", {
          className: "absolute inset-y-0 right-0 flex items-center",
          children: /* @__PURE__ */ t(un.Dropdown, {
            ...i,
            value: s,
            onSelect: (y) => c(y)
          })
        })]
      })
    })]
  });
};
un.Dropdown = ({
  label: e,
  name: r,
  items: n,
  value: a,
  onSelect: o
}) => /* @__PURE__ */ l(re, {
  children: [/* @__PURE__ */ t("label", {
    htmlFor: r,
    className: "sr-only",
    children: e
  }), /* @__PURE__ */ t("select", {
    id: r,
    name: r,
    value: a,
    onChange: (i) => o(i.target.value),
    className: "focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md",
    children: n.map((i, s) => /* @__PURE__ */ t("option", {
      value: i.value,
      children: i.label
    }, s))
  })]
});
const zs = [{
  value: "false",
  label: "einmalig",
  singular: "-",
  plural: "-"
}, {
  value: "P1D",
  label: "t\xE4glich",
  singular: "Tag",
  plural: "Tage"
}, {
  value: "P1W",
  label: "w\xF6chentlich",
  singular: "Woche",
  plural: "Wochen"
}, {
  value: "P1M",
  label: "monatlich",
  singular: "Monat",
  plural: "Monate"
}, {
  value: "P3M",
  label: "pro Quartal",
  singular: "Quartal",
  plural: "Quartale"
}, {
  value: "P6M",
  label: "halbj\xE4hrlich",
  singular: "Halbjahr",
  plural: "Halbjahre"
}, {
  value: "P1Y",
  label: "j\xE4hrlich",
  singular: "Jahr",
  plural: "Jahre"
}], oc = Ce((e, r) => /* @__PURE__ */ t(K.Select, {
  ...e,
  ref: r,
  children: zs.map(({
    value: n,
    label: a
  }, o) => /* @__PURE__ */ t("option", {
    value: n,
    children: a
  }, o))
}));
function sc({
  value: e,
  onChange: r
}) {
  const n = Re(), a = Re(), o = {
    mode: "text",
    search: !1,
    enableSort: !1,
    enableTransform: !1,
    statusBar: !1,
    mainMenuBar: !1,
    onChange: () => {
      try {
        const i = a.current.get();
        r?.(i);
      } catch {
      }
    }
  };
  return Jt(() => {
    (!a.current || JSON.stringify(e) !== JSON.stringify(a.current.get())) && (n.current.textContent = "", a.current = new qn(n.current, o), a.current.update(e || ""));
  }, [e]), /* @__PURE__ */ t("div", {
    ref: n
  });
}
function lc({
  max: e,
  name: r,
  watch: n
}) {
  const a = n(r);
  return /* @__PURE__ */ l("span", {
    className: "text-xs",
    children: [e - (a?.length || 0), " / ", e]
  });
}
const Hs = {
  spellChecker: !1,
  toolbar: ["bold", "italic", "strikethrough", "|", "heading", "heading-smaller", "heading-bigger", "|", "unordered-list", "ordered-list", "|", "preview", "clean-block"]
};
function cc(e) {
  const {
    control: r,
    name: n,
    rules: a,
    ...o
  } = e;
  return /* @__PURE__ */ t(Ae, {
    render: ({
      field: i
    }) => /* @__PURE__ */ t("div", {
      className: "dark:bg-white rounded-md text-black",
      children: /* @__PURE__ */ t(Jn, {
        ...o,
        options: Hs,
        value: i.value,
        onChange: (s) => i.onChange(s)
      })
    }),
    control: r,
    name: n,
    rules: a
  });
}
function dc(e) {
  const {
    field: r,
    form: {
      watch: n,
      register: a,
      setValue: o,
      control: i
    }
  } = e, s = n(`${r}.openingHours`);
  return /* @__PURE__ */ l("div", {
    children: [s?.map((c, h) => /* @__PURE__ */ l("div", {
      className: "mb-2",
      children: [/* @__PURE__ */ l(k.Item, {
        $dense: !0,
        $first: !h,
        children: [/* @__PURE__ */ l(k.Item.Label, {
          className: "flex justify-between items-center",
          children: [/* @__PURE__ */ t("span", {
            children: "Titel"
          }), /* @__PURE__ */ t("button", {
            onClick: () => {
              s.splice(h, 1), o(`${r}.openingHours`, s, {
                shouldDirty: !0
              });
            },
            children: "Gruppe l\xF6schen"
          })]
        }), /* @__PURE__ */ l(k.Item.Body, {
          children: [/* @__PURE__ */ t(K, {
            type: "text",
            ...a(`${r}.openingHours.${h}.title`)
          }), /* @__PURE__ */ t("br", {}), /* @__PURE__ */ l("label", {
            className: "flex items-center space-x-2",
            children: [/* @__PURE__ */ t(k.Checkbox, {
              onChange: (d) => {
                d.target.checked ? o(`${r}.openingHours`, s.map(({
                  ["default"]: y,
                  ...g
                }, v) => ({
                  ...g,
                  ...h === v ? {
                    default: !0
                  } : {}
                })), {
                  shouldDirty: !0
                }) : console.log("uncheck??");
              },
              checked: !!c.default
            }), /* @__PURE__ */ t("span", {
              children: "Wird verwendet f\xFCr 'ge\xF6ffnet bis'-Anzeige"
            })]
          })]
        })]
      }), c.hours?.map(({
        daysOfWeek: d
      }, y) => /* @__PURE__ */ t(Ue, {
        className: "mt-2 flex",
        children: /* @__PURE__ */ t(Ue.Body, {
          children: /* @__PURE__ */ l("div", {
            className: "flex items-center space-x-4 justify-between",
            children: [/* @__PURE__ */ l("div", {
              className: "w-full relative",
              children: [/* @__PURE__ */ l("div", {
                className: "grow flex space-x-2 items-center",
                children: [/* @__PURE__ */ l(k.Item, {
                  $dense: !0,
                  $first: !0,
                  children: [/* @__PURE__ */ t(k.Item.Label, {
                    children: "ge\xF6ffnet von"
                  }), /* @__PURE__ */ t(k.Item.Body, {
                    children: /* @__PURE__ */ t(Ut, {
                      mask: "99:99",
                      control: i,
                      name: `${r}.openingHours.${h}.hours.${y}.opens`,
                      placeholder: "__:__",
                      rules: {
                        required: "Pflichtfeld"
                      }
                    })
                  })]
                }), /* @__PURE__ */ l(k.Item, {
                  $dense: !0,
                  $first: !0,
                  children: [/* @__PURE__ */ t(k.Item.Label, {
                    children: "bis"
                  }), /* @__PURE__ */ l(k.Item.Body, {
                    children: [" ", /* @__PURE__ */ t(Ut, {
                      mask: "99:99",
                      control: i,
                      name: `${r}.openingHours.${h}.hours.${y}.closes`,
                      placeholder: "__:__",
                      rules: {
                        required: "Pflichtfeld"
                      }
                    })]
                  })]
                })]
              }), /* @__PURE__ */ l(k.Item, {
                $dense: !0,
                $first: !0,
                children: [/* @__PURE__ */ t(k.Item.Label, {
                  children: "an folgenden Tagen"
                }), /* @__PURE__ */ t(k.Item.Body, {
                  children: /* @__PURE__ */ t("div", {
                    className: "flex space-x-3",
                    children: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"].map((g) => /* @__PURE__ */ l("label", {
                      className: "flex space-x-2",
                      children: [/* @__PURE__ */ t(k.Checkbox, {
                        checked: d?.includes(g),
                        onChange: (v) => {
                          o(`${r}.openingHours.${h}.hours.${y}.daysOfWeek`, v.target.checked ? d.concat([g]) : d.filter((w) => w !== g), {
                            shouldDirty: !0
                          });
                        }
                      }), /* @__PURE__ */ t("span", {
                        children: g
                      })]
                    }, g))
                  })
                })]
              })]
            }), /* @__PURE__ */ t("div", {
              className: "absolute top-2 right-2",
              children: /* @__PURE__ */ t("button", {
                onClick: () => {
                  o(`${r}.openingHours.${h}.hours`, s[h].hours.filter((g, v) => v !== y), {
                    shouldDirty: !0
                  });
                },
                children: "- entfernen"
              })
            })]
          })
        })
      }, y)), /* @__PURE__ */ t("div", {
        className: "pt-2 text-right",
        children: /* @__PURE__ */ t("button", {
          onClick: () => {
            c.hours.push({
              opens: "",
              closes: "",
              daysOfWeek: []
            }), o(`${r}.openingHours`, s);
          },
          children: "+ Neuer Timeslot"
        })
      })]
    }, h)), /* @__PURE__ */ t(z, {
      onClick: () => {
        (s || []).push({
          label: "",
          hours: []
        }), o(`${r}.openingHours`, s);
      },
      children: "Neue Gruppe anlegen"
    })]
  });
}
const uc = (e) => /* @__PURE__ */ l("div", {
  children: ["Error ", `${e?.message}` || "unknown"]
});
function fc({
  abort: e = !1
}) {
  const r = et(), {
    jwt: n
  } = Br(), a = Zt();
  G(() => {
    n || (console.warn("navigate login"), a("/login"));
  }, [n]);
  const o = Ke(() => fetch(`${Pe.accountServerUrl}/auth/password-reset/abort/${n}`, {
    method: "GET"
  }).then((w) => {
    if (w.ok)
      w.json();
    else
      throw new Error("Something went wrong");
  }).then((w) => {
    r.emit({
      type: "success",
      title: "Passwort Reset Abgebrochen"
    }), window.open("/login", "_self");
  }).catch(() => {
    r.emit({
      type: "error",
      title: "Etwas ist schiefgelaufen"
    }), window.open("/login", "_self");
  }), [n, r]);
  G(() => {
    e && o();
  }, [e]);
  const {
    register: i,
    handleSubmit: s,
    formState: {
      isSubmitting: c,
      isValid: h,
      errors: d
    }
  } = st({
    defaultValues: {
      password: ""
    },
    mode: "onChange"
  }), [y, g] = je.useState(!1);
  async function v({
    password: w
  }) {
    try {
      let C = await fetch(`${Pe.accountServerUrl}/auth/password-reset/callback/${n}`, {
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded"
        },
        body: "password=" + w
      });
      r.emit({
        type: "success",
        title: "Passwort wurde ge\xE4ndert",
        message: "Du kannst dich nun einloggen"
      }), a("/");
    } catch (C) {
      r.emit({
        type: "error",
        title: "Passwort konnte nicht ge\xE4ndert werden",
        message: C.message
      });
    }
  }
  return /* @__PURE__ */ t("div", {
    className: "h-screen bg-white dark:bg-gray-700",
    children: /* @__PURE__ */ l("div", {
      className: "min-h-full flex",
      children: [/* @__PURE__ */ t("div", {
        className: "flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24",
        children: /* @__PURE__ */ l("div", {
          className: "mx-auto w-full max-w-sm lg:w-96",
          children: [/* @__PURE__ */ l("div", {
            children: [/* @__PURE__ */ t("svg", {
              className: "h-12 w-12",
              children: /* @__PURE__ */ t("use", {
                xlinkHref: "#ca-logo",
                className: "fill-current text-gray-900 dark:text-gray-100"
              })
            }), /* @__PURE__ */ t("h2", {
              className: "mt-6 text-3xl font-extrabold text-gray-900 dark:text-gray-100",
              children: "Setzte dein Password zur\xFCck"
            })]
          }), /* @__PURE__ */ t("div", {
            className: "mt-8",
            children: /* @__PURE__ */ t("div", {
              children: /* @__PURE__ */ l("form", {
                onSubmit: s(v),
                className: "space-y-6",
                children: [!y && /* @__PURE__ */ l("div", {
                  className: "space-y-1",
                  children: [/* @__PURE__ */ t("label", {
                    htmlFor: "password",
                    className: "block text-sm font-medium text-gray-700 dark:text-gray-100",
                    children: "Neues Passwort"
                  }), /* @__PURE__ */ l("div", {
                    className: "mt-1",
                    children: [/* @__PURE__ */ t("input", {
                      id: "password",
                      type: "password",
                      autoComplete: "current-password",
                      ...i("password", {
                        required: !0,
                        minLength: {
                          value: 3,
                          message: "Das Passwort ist zu kurz"
                        }
                      }),
                      className: "appearance-none block w-full px-3 py-2 border text-gray-900 border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    }), d.password && /* @__PURE__ */ t("p", {
                      className: "mt-2 text-sm text-red-600 dark:text-red-400",
                      children: d.password.message
                    })]
                  })]
                }), /* @__PURE__ */ t("div", {
                  className: "flex items-end",
                  children: /* @__PURE__ */ t("div", {
                    className: "text-sm",
                    children: /* @__PURE__ */ t("a", {
                      onClick: () => o(),
                      className: "font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-500 dark:hover:text-indigo-400",
                      children: "Passwort Reset abbrechen"
                    })
                  })
                }), /* @__PURE__ */ t("div", {
                  children: /* @__PURE__ */ t("button", {
                    type: "submit",
                    disabled: c || !h,
                    className: "disabled:opacity-75 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                    children: "Passwort zur\xFCcksetzen"
                  })
                })]
              })
            })
          })]
        })
      }), /* @__PURE__ */ t("div", {
        className: "hidden lg:block relative w-0 flex-1",
        children: /* @__PURE__ */ t("img", {
          className: "absolute inset-0 h-full w-full object-cover object-top mix-blend-exclusion",
          src: "/img/admin-bg.jpeg"
        })
      })]
    })
  });
}
function hc({
  max: e,
  value: r
}) {
  return /* @__PURE__ */ t("div", {
    className: "w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700",
    children: /* @__PURE__ */ t("div", {
      className: "bg-indigo-500 h-2.5 rounded-full",
      style: {
        width: r / e * 100 + "%"
      }
    })
  });
}
function mc({
  prop: e,
  onSubmit: r,
  onReset: n
}) {
  const {
    data: a
  } = ar(), {
    reset: o,
    handleSubmit: i,
    control: s,
    formState: {
      isDirty: c
    }
  } = st(), [h, d] = e.split("$");
  let y = "global";
  h && h !== "global" && (y = d ? "club" : "backend");
  const g = e === "global" || a.moduleSettings.seca.enabled[e] !== void 0;
  return G(() => {
    if (a) {
      a.moduleSettings.seca.enabled || (a.moduleSettings.seca.enabled = {
        global: a?.moduleSettings?.visibility?.seca || a?.moduleSettings?.visibilityApp?.seca
      });
      const [v] = e.split("$");
      let w = !1;
      a.moduleSettings.seca.enabled[e] !== void 0 ? w = a.moduleSettings.seca.enabled[e] : a.moduleSettings.seca.enabled[v] !== void 0 ? w = a.moduleSettings.seca.enabled[v] : w = a.moduleSettings.seca.enabled.global, o({
        enabled: w
      });
    }
  }, [a]), /* @__PURE__ */ l(k, {
    children: [/* @__PURE__ */ t(k.Item, {
      $dense: !0,
      $first: !0,
      children: /* @__PURE__ */ t(k.Item.Body, {
        children: /* @__PURE__ */ t(tn, {
          control: s,
          name: "enabled",
          label: "Modul aktiv",
          secondaryLabel: "Wird diese Option aktiviert, wird dem Mitglied die SECA K\xF6rperanalyse angeboten."
        })
      })
    }), /* @__PURE__ */ l("div", {
      className: "flex justify-end space-x-2",
      children: [e !== "global" && g && /* @__PURE__ */ t(z, {
        $secondary: !0,
        onClick: n,
        children: "Zur\xFCcksetzen"
      }), /* @__PURE__ */ t(z, {
        $primary: !0,
        onClick: i(r),
        $disabled: g && !c,
        children: y !== "global" && !g ? "Einstellung hinzuf\xFCgen" : "Speichern"
      })]
    })]
  });
}
const Se = J.section``;
Se.Header = ({
  children: e
}) => (console.warn("Section.Header has been renamed to Section.Head for consistency"), /* @__PURE__ */ t("div", {
  className: "py-5 px-8 border-b border-gray-200 dark:border-gray-600 flex items-center sm:justify-between sticky top-0 bg-gray-100 dark:bg-gray-900 z-[30]",
  children: e
}));
Se.Simple = J.div`py-5 px-8 border-b border-gray-200`;
Se.Caption = J.div`mt-2 max-w-4xl text-sm text-gray-500 p-0`;
Se.Head = J.div`py-5 px-8 border-b border-gray-200 dark:border-gray-600 flex items-center sm:justify-between sticky top-0 bg-gray-100 dark:bg-gray-900 z-[30]`;
Se.HeadWhite = J.div`py-5 px-8 border-b border-gray-200 dark:border-gray-600 flex items-center sm:justify-between sticky top-0 bg-white dark:bg-gray-900 z-[30]`;
Se.Heading = J.h2`m-0 text-lg leading-6 font-medium text-gray-900 dark:text-gray-200`;
Se.Center = J.div`flex justify-center`;
Se.HeadingToggle = ({
  children: e,
  settingsType: r,
  depends: n
}) => /* @__PURE__ */ l("h2", {
  className: "m-0 text-lg leading-6 font-medium text-gray-900 dark:text-gray-200 flex items-center",
  children: [e, /* @__PURE__ */ t(Bs, {
    type: r,
    depends: n
  })]
});
Se.Body = J.div`px-6 py-3`;
Se.Container = J.div`py-5 px-6 w-full`;
Se.Divider = J.div`border-b border-gray-200 dark:border-gray-600`;
Se.Sticky = J.div`sticky top-0 bg-gray-100 dark:bg-gray-900 z-[30]`;
Se.Menu = J.div`flex`;
Se.BackButton = () => {
  const e = Zt();
  return /* @__PURE__ */ l("div", {
    className: "flex",
    children: [/* @__PURE__ */ l("div", {
      className: "flex cursor-pointer items-center gap-3 p-3 hover:bg-slate-200 rounded-lg",
      onClick: () => e(-1),
      children: [/* @__PURE__ */ t(Gr, {
        className: "w-4 h-4"
      }), " Zur\xFCck"]
    }), /* @__PURE__ */ t("div", {
      className: "border-r -my-5 border-gray-200 ml-8 mr-8 "
    })]
  });
};
Se.Sub = J.h3`text-lg leading-6 font-medium text-gray-900 dark:text-gray-200 !m-0 !mb-0`;
function gc({
  className: e
}) {
  return /* @__PURE__ */ t("div", {
    className: `pointer-events-none absolute top-0 left-0 w-full h-full ${e || ""}`,
    children: /* @__PURE__ */ t("div", {
      className: "absolute p-2 top-0 left-0",
      children: /* @__PURE__ */ t(We, {})
    })
  });
}
function bt({
  value: e
}) {
  const [r, n] = T(!1);
  return /* @__PURE__ */ l("div", {
    className: "group cursor-pointer relative",
    onClick: () => {
      navigator.clipboard.writeText(e), n(!0);
    },
    onMouseEnter: () => n(!1),
    children: [/* @__PURE__ */ t("span", {
      className: "hidden group-hover:block absolute text-xs bg-gray-200 p-2 rounded-full",
      children: r ? "kopiert!" : "klicken zum kopieren"
    }), /* @__PURE__ */ t("pre", {
      className: "overflow-auto",
      children: e
    })]
  });
}
function Xe({
  children: e
}) {
  return /* @__PURE__ */ t(pt, {
    className: ({
      selected: r
    }) => A(r ? "border-indigo-500 text-indigo-600 dark:text-indigo-300 dark:border-indigo-200" : "border-transparent text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-400 hover:border-gray-300 dark:hover:border-gray-200", "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"),
    children: e
  });
}
Xe.List = ({
  children: e,
  className: r
}) => /* @__PURE__ */ t(pt.List, {
  children: /* @__PURE__ */ t("div", {
    className: A("border-b border-gray-200 dark:border-gray-600", r),
    children: /* @__PURE__ */ t("nav", {
      className: "-mb-px flex space-x-8 items-center",
      "aria-label": "Tabs",
      children: e
    })
  })
});
Xe.Panel = J(pt.Panel)`py-4`;
const dr = ({
  children: e,
  className: r
}) => /* @__PURE__ */ t(Ue, {
  className: A("w-full", r),
  children: e
});
dr.Head = ({
  children: e
}) => /* @__PURE__ */ t("div", {
  className: "text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700",
  children: /* @__PURE__ */ t("ul", {
    className: "flex flex-wrap",
    children: e
  })
});
dr.Content = ({
  children: e
}) => /* @__PURE__ */ t(Ue.Body, {
  children: /* @__PURE__ */ t("div", {
    className: "mt-4",
    children: e
  })
});
dr.Header = ({
  title: e,
  active: r,
  onClick: n,
  icon: a
}) => {
  const o = {
    default: "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300",
    active: "text-blue-600 border-blue-600 active dark:text-blue-500 dark:border-blue-500 border-b-2"
  };
  return /* @__PURE__ */ t("li", {
    className: "mr-2",
    children: /* @__PURE__ */ l("div", {
      onClick: n,
      className: `inline-flex items-center gap-2 p-4 cursor-pointer rounded-t-lg whitespace-nowrap ${r ? o.active : o.default}`,
      children: [a, " ", e]
    })
  });
};
/**
 * @remix-run/router v1.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Gt() {
  return Gt = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Gt.apply(this, arguments);
}
var _r;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(_r || (_r = {}));
function fn(e) {
  let r = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && (r.hash = e.substr(n), e = e.substr(0, n));
    let a = e.indexOf("?");
    a >= 0 && (r.search = e.substr(a), e = e.substr(0, a)), e && (r.pathname = e);
  }
  return r;
}
var Fr;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(Fr || (Fr = {}));
function Qe(e, r) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(r);
}
function Ys(e, r) {
  if (!e) {
    typeof console < "u" && console.warn(r);
    try {
      throw new Error(r);
    } catch {
    }
  }
}
function Vs(e, r) {
  r === void 0 && (r = "/");
  let {
    pathname: n,
    search: a = "",
    hash: o = ""
  } = typeof e == "string" ? fn(e) : e;
  return {
    pathname: n ? n.startsWith("/") ? n : Us(n, r) : r,
    search: qs(a),
    hash: Js(o)
  };
}
function Us(e, r) {
  let n = r.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((o) => {
    o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
  }), n.length > 1 ? n.join("/") : "/";
}
function Bt(e, r, n, a) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + r + "` field [" + JSON.stringify(a) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function Ws(e, r, n, a) {
  a === void 0 && (a = !1);
  let o;
  typeof e == "string" ? o = fn(e) : (o = Gt({}, e), Qe(!o.pathname || !o.pathname.includes("?"), Bt("?", "pathname", "search", o)), Qe(!o.pathname || !o.pathname.includes("#"), Bt("#", "pathname", "hash", o)), Qe(!o.search || !o.search.includes("#"), Bt("#", "search", "hash", o)));
  let i = e === "" || o.pathname === "", s = i ? "/" : o.pathname, c;
  if (a || s == null)
    c = n;
  else {
    let g = r.length - 1;
    if (s.startsWith("..")) {
      let v = s.split("/");
      for (; v[0] === ".."; )
        v.shift(), g -= 1;
      o.pathname = v.join("/");
    }
    c = g >= 0 ? r[g] : "/";
  }
  let h = Vs(o, c), d = s && s !== "/" && s.endsWith("/"), y = (i || s === ".") && n.endsWith("/");
  return !h.pathname.endsWith("/") && (d || y) && (h.pathname += "/"), h;
}
const Gs = (e) => e.join("/").replace(/\/\/+/g, "/"), qs = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, Js = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
/**
 * React Router v6.4.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Zs(e, r) {
  return e === r && (e !== 0 || 1 / e === 1 / r) || e !== e && r !== r;
}
const hn = typeof Object.is == "function" ? Object.is : Zs, {
  useState: Xs,
  useEffect: Qs,
  useLayoutEffect: Ks,
  useDebugValue: el
} = L;
let Ar = !1, Lr = !1;
function tl(e, r, n) {
  process.env.NODE_ENV !== "production" && (Ar || "startTransition" in L && (Ar = !0, console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release.")));
  const a = r();
  if (process.env.NODE_ENV !== "production" && !Lr) {
    const s = r();
    hn(a, s) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), Lr = !0);
  }
  const [{
    inst: o
  }, i] = Xs({
    inst: {
      value: a,
      getSnapshot: r
    }
  });
  return Ks(() => {
    o.value = a, o.getSnapshot = r, zt(o) && i({
      inst: o
    });
  }, [e, a, r]), Qs(() => (zt(o) && i({
    inst: o
  }), e(() => {
    zt(o) && i({
      inst: o
    });
  })), [e]), el(a), a;
}
function zt(e) {
  const r = e.getSnapshot, n = e.value;
  try {
    const a = r();
    return !hn(n, a);
  } catch {
    return !0;
  }
}
function rl(e, r, n) {
  return r();
}
const nl = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", al = !nl, il = al ? rl : tl;
"useSyncExternalStore" in L && ((e) => e.useSyncExternalStore)(L);
const ol = /* @__PURE__ */ L.createContext(null);
process.env.NODE_ENV !== "production" && (ol.displayName = "DataStaticRouterContext");
const sl = /* @__PURE__ */ L.createContext(null);
process.env.NODE_ENV !== "production" && (sl.displayName = "DataRouter");
const ll = /* @__PURE__ */ L.createContext(null);
process.env.NODE_ENV !== "production" && (ll.displayName = "DataRouterState");
const cl = /* @__PURE__ */ L.createContext(null);
process.env.NODE_ENV !== "production" && (cl.displayName = "Await");
const mn = /* @__PURE__ */ L.createContext(null);
process.env.NODE_ENV !== "production" && (mn.displayName = "Navigation");
const ur = /* @__PURE__ */ L.createContext(null);
process.env.NODE_ENV !== "production" && (ur.displayName = "Location");
const gn = /* @__PURE__ */ L.createContext({
  outlet: null,
  matches: []
});
process.env.NODE_ENV !== "production" && (gn.displayName = "Route");
const dl = /* @__PURE__ */ L.createContext(null);
process.env.NODE_ENV !== "production" && (dl.displayName = "RouteError");
function pn() {
  return L.useContext(ur) != null;
}
function ul() {
  return pn() || (process.env.NODE_ENV !== "production" ? Qe(
    !1,
    "useLocation() may be used only in the context of a <Router> component."
  ) : Qe(!1)), L.useContext(ur).location;
}
function fl(e) {
  return e.filter((r, n) => n === 0 || !r.route.index && r.pathnameBase !== e[n - 1].pathnameBase);
}
function hl() {
  pn() || (process.env.NODE_ENV !== "production" ? Qe(
    !1,
    "useNavigate() may be used only in the context of a <Router> component."
  ) : Qe(!1));
  let {
    basename: e,
    navigator: r
  } = L.useContext(mn), {
    matches: n
  } = L.useContext(gn), {
    pathname: a
  } = ul(), o = JSON.stringify(fl(n).map((c) => c.pathnameBase)), i = L.useRef(!1);
  return L.useEffect(() => {
    i.current = !0;
  }), L.useCallback(function(c, h) {
    if (h === void 0 && (h = {}), process.env.NODE_ENV !== "production" && Ys(i.current, "You should call navigate() in a React.useEffect(), not when your component is first rendered."), !i.current)
      return;
    if (typeof c == "number") {
      r.go(c);
      return;
    }
    let d = Ws(c, JSON.parse(o), a, h.relative === "path");
    e !== "/" && (d.pathname = d.pathname === "/" ? e : Gs([e, d.pathname])), (h.replace ? r.replace : r.push)(d, h.state, h);
  }, [e, r, o, a]);
}
var Or;
(function(e) {
  e.UseRevalidator = "useRevalidator";
})(Or || (Or = {}));
var Tr;
(function(e) {
  e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator";
})(Tr || (Tr = {}));
var jr;
(function(e) {
  e[e.pending = 0] = "pending", e[e.success = 1] = "success", e[e.error = 2] = "error";
})(jr || (jr = {}));
new Promise(() => {
});
function ml(e, r) {
  const [n, a] = T(() => {
    try {
      const i = window.localStorage.getItem(e);
      return i ? JSON.parse(i) : r;
    } catch (i) {
      return console.log(i), r;
    }
  });
  return [n, (i) => {
    try {
      const s = i instanceof Function ? i(n) : i;
      a(s), window.localStorage.setItem(e, JSON.stringify(s));
    } catch (s) {
      console.log(s);
    }
  }];
}
function pc({
  appsites: e,
  api: r,
  open: n,
  setOpen: a
}) {
  const [o, i] = T(""), s = hl(), c = o.toLowerCase().replace(/^[#>]/, ""), h = c ? e.filter((g) => g.title.toLowerCase().includes(c) || (g.alias || "").toLowerCase().includes(c)) : e, [d, y] = ml("recentlyUsedSites", []);
  return G(() => {
    d?.includes(r.shortID) || y([r.shortID, ...d].slice(0, 3));
  }, [r.shortID, d, y]), /* @__PURE__ */ t(be.Root, {
    show: n,
    as: me,
    afterLeave: () => i(""),
    appear: !0,
    children: /* @__PURE__ */ l(ze, {
      as: "div",
      className: "relative z-30",
      onClose: a,
      children: [/* @__PURE__ */ t(be.Child, {
        as: me,
        enter: "ease-out duration-300",
        enterFrom: "opacity-0",
        enterTo: "opacity-100",
        leave: "ease-in duration-200",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0",
        children: /* @__PURE__ */ t("div", {
          className: "fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity"
        })
      }), /* @__PURE__ */ t("div", {
        className: "fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20",
        children: /* @__PURE__ */ t(be.Child, {
          as: me,
          enter: "ease-out duration-300",
          enterFrom: "opacity-0 scale-95",
          enterTo: "opacity-100 scale-100",
          leave: "ease-in duration-200",
          leaveFrom: "opacity-100 scale-100",
          leaveTo: "opacity-0 scale-95",
          children: /* @__PURE__ */ t(ze.Panel, {
            className: "mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all",
            children: /* @__PURE__ */ l(ht, {
              onChange: (g) => s(`/${g?.shortID}`),
              children: [/* @__PURE__ */ l("div", {
                className: "relative",
                children: [/* @__PURE__ */ t(Ur, {
                  className: "pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400",
                  "aria-hidden": "true"
                }), /* @__PURE__ */ t(ht.Input, {
                  className: "h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm",
                  placeholder: "Search...",
                  onChange: (g) => i(g.target.value)
                })]
              }), /* @__PURE__ */ l(ht.Options, {
                static: !0,
                className: "max-h-80 scroll-py-10 scroll-py-10 scroll-pb-2 scroll-pb-2 space-y-4 overflow-y-auto p-4 pb-2",
                children: [d?.length > 0 && (c.length === 0 || h.length === 0) && /* @__PURE__ */ l("li", {
                  children: [/* @__PURE__ */ t("h2", {
                    className: "text-xs font-semibold text-gray-900",
                    children: "Zuletzt verwendet"
                  }), /* @__PURE__ */ t("ul", {
                    className: "-mx-4 mt-2 text-sm text-gray-700",
                    children: d.map((g) => e.find((v) => v.shortID === g)).map((g) => /* @__PURE__ */ t(ht.Option, {
                      value: g,
                      className: ({
                        active: v
                      }) => A("flex cursor-default select-none items-center px-4 py-2", v && "bg-indigo-600 text-white"),
                      children: ({
                        active: v
                      }) => /* @__PURE__ */ l(re, {
                        children: [/* @__PURE__ */ t($r, {
                          className: A("h-6 w-6 flex-none", v ? "text-white" : "text-gray-400"),
                          "aria-hidden": "true"
                        }), /* @__PURE__ */ l("span", {
                          className: "ml-3 flex-auto truncate",
                          children: [g.title, g.isEVA && /* @__PURE__ */ t("span", {
                            className: "ml-2 py-0.5 px-1.5 text-black bg-yellow-100 dark:bg-yellow-200 text-xs dark:text-gray-800 rounded text-center",
                            children: "EVA"
                          })]
                        })]
                      })
                    }, "aa" + g?.shortID))
                  })]
                }), h?.length > 0 && /* @__PURE__ */ l("li", {
                  children: [/* @__PURE__ */ t("h2", {
                    className: "text-xs font-semibold text-gray-900",
                    children: "Appsites"
                  }), /* @__PURE__ */ t("ul", {
                    className: "-mx-4 mt-2 text-sm text-gray-700",
                    children: h.map((g) => /* @__PURE__ */ t(ht.Option, {
                      value: g,
                      className: ({
                        active: v
                      }) => A("flex cursor-default select-none items-center px-4 py-2", v && "bg-indigo-600 text-white"),
                      children: ({
                        active: v
                      }) => /* @__PURE__ */ l(re, {
                        children: [/* @__PURE__ */ t($r, {
                          className: A("h-6 w-6 flex-none", v ? "text-white" : "text-gray-400"),
                          "aria-hidden": "true"
                        }), /* @__PURE__ */ l("span", {
                          className: "ml-3 flex-auto truncate",
                          children: [g.title, g.isEVA && /* @__PURE__ */ t("span", {
                            className: "ml-2 py-0.5 px-1.5 text-black bg-yellow-100 dark:bg-yellow-200 text-xs dark:text-gray-800 rounded text-center",
                            children: "EVA"
                          })]
                        })]
                      })
                    }, g.shortID))
                  })]
                })]
              })]
            })
          })
        })
      })]
    })
  });
}
function vc({
  purchases: e,
  onSubmit: r,
  onDelete: n,
  defaultValues: a
}) {
  const [o, i] = je.useState(!1), {
    backends: s
  } = or(), {
    data: c
  } = fs(), {
    register: h,
    control: d,
    watch: y,
    handleSubmit: g,
    formState: {
      errors: v,
      isSubmitting: w,
      isValid: C,
      isDirty: x
    }
  } = st({
    defaultValues: {
      type: "hector",
      ...a || {}
    },
    mode: "onChange"
  }), N = !w && C && x, b = y("type");
  return /* @__PURE__ */ l(re, {
    children: [/* @__PURE__ */ l(k, {
      children: [/* @__PURE__ */ l(k.Item, {
        $first: !0,
        children: [/* @__PURE__ */ t(k.Item.Label, {
          htmlFor: "title",
          children: "Titel"
        }), /* @__PURE__ */ l(k.Item.Body, {
          children: [/* @__PURE__ */ t("input", {
            className: k.Item.text,
            type: "text",
            ...h("title", {
              required: "Pflichtfeld"
            })
          }), /* @__PURE__ */ t(Ze, {
            errors: v,
            name: "title"
          })]
        })]
      }), /* @__PURE__ */ l(k.Item, {
        children: [/* @__PURE__ */ t(k.Item.Label, {
          htmlFor: "bookable",
          children: "Buchbar"
        }), /* @__PURE__ */ l(k.Item.Body, {
          children: [/* @__PURE__ */ t(tn, {
            control: d,
            rules: {
              validate: (D) => D && e?.find((H) => H.bookable && (!a.id || a.id !== H.id)) ? "Es gibt bereits eine buchbare Option!" : !0
            },
            name: "bookable"
          }), /* @__PURE__ */ t("div", {
            className: "mb-2"
          }), /* @__PURE__ */ t(Ze, {
            errors: v,
            name: "bookable"
          })]
        })]
      }), /* @__PURE__ */ l(k.Item, {
        children: [/* @__PURE__ */ t(k.Item.Label, {
          htmlFor: "title",
          children: "Typ"
        }), /* @__PURE__ */ l(k.Item.Body, {
          children: [/* @__PURE__ */ t(Wt, {
            placeholder: "Upselling-Typ w\xE4hlen",
            items: [{
              value: "inapp",
              label: "In-App Purchase"
            }, {
              value: "hector",
              label: "Hector Abo"
            }],
            control: d,
            name: "type",
            rules: {
              required: "Pflichtfeld"
            }
          }), /* @__PURE__ */ t(Ze, {
            errors: v,
            name: "type"
          })]
        })]
      }), b === "hector" && c && s && /* @__PURE__ */ l(k.Item, {
        children: [/* @__PURE__ */ l(k.Item.Label, {
          className: "break-word",
          children: ["Aboauswahl", /* @__PURE__ */ t("br", {}), /* @__PURE__ */ t(Ee.Light, {
            children: "Bitte w\xE4hle f\xFCr jedes Backend ein Abo aus"
          })]
        }), /* @__PURE__ */ t(k.Item.Body, {
          children: Object.entries(s).map(([D, H]) => /* @__PURE__ */ l(k.Item, {
            $dense: !0,
            $first: !0,
            className: "mb-4",
            children: [/* @__PURE__ */ t(k.Item.Label, {
              htmlFor: "title",
              children: H
            }), /* @__PURE__ */ l(k.Item.Body, {
              children: [/* @__PURE__ */ t(Wt, {
                placeholder: "Abo w\xE4hlen",
                items: c.filter((Y) => Y.backendId === D).map(({
                  name: Y,
                  id: O
                }) => ({
                  label: Y,
                  value: O
                })),
                control: d,
                name: `config.${D}`,
                rules: {
                  required: "Pflichtfeld",
                  shouldUnregister: !1
                }
              }), /* @__PURE__ */ t(Ze, {
                errors: v,
                name: `config.${D}`
              })]
            })]
          }, H))
        })]
      }), b === "inapp" && /* @__PURE__ */ l(k.Item, {
        children: [/* @__PURE__ */ t(k.Item.Label, {
          children: "App Config"
        }), /* @__PURE__ */ l(k.Item.Body, {
          children: [/* @__PURE__ */ l(k.Item, {
            $dense: !0,
            $first: !0,
            children: [/* @__PURE__ */ t(k.Item.Label, {
              htmlFor: "title",
              children: "iOS"
            }), /* @__PURE__ */ l(k.Item.Body, {
              children: [/* @__PURE__ */ t("input", {
                className: k.Item.text,
                type: "text",
                ...h("config.ios", {
                  required: "Pflichtfeld",
                  shouldUnregister: !1
                }),
                placeholder: "iOS Product ID"
              }), /* @__PURE__ */ t(Ze, {
                errors: v,
                name: "config.ios"
              })]
            })]
          }), /* @__PURE__ */ l(k.Item, {
            $dense: !0,
            children: [/* @__PURE__ */ t(k.Item.Label, {
              htmlFor: "title",
              children: "Android"
            }), /* @__PURE__ */ l(k.Item.Body, {
              children: [/* @__PURE__ */ t("input", {
                className: k.Item.text,
                type: "text",
                ...h("config.android", {
                  required: "Pflichtfeld",
                  shouldUnregister: !1
                }),
                placeholder: "Android Product ID"
              }), /* @__PURE__ */ t(Ze, {
                errors: v,
                name: "config.android"
              })]
            })]
          })]
        })]
      }), /* @__PURE__ */ l("div", {
        className: "flex justify-between",
        children: [n && /* @__PURE__ */ t(z, {
          $secondary: !0,
          onClick: () => i(!0),
          children: /* @__PURE__ */ t(Ee.Error, {
            children: "L\xF6schen"
          })
        }), /* @__PURE__ */ t(z, {
          $primary: N,
          $secondary: !N,
          onClick: g(r),
          children: "Speichern"
        })]
      })]
    }), n && /* @__PURE__ */ t(dn, {
      title: "Wirklich l\xF6schen?",
      deleteLabel: "L\xF6schen",
      description: "Soll der eintrag wirklich gel\xF6scht werden?",
      open: o,
      onClose: () => i(!1),
      onDelete: async () => {
        n(), i(!1);
      }
    })]
  });
}
function yc({
  label: e,
  children: r
}) {
  return /* @__PURE__ */ t("div", {
    className: "rounded-md bg-yellow-50 p-4",
    children: /* @__PURE__ */ l("div", {
      className: "flex",
      children: [/* @__PURE__ */ t("div", {
        className: "flex-shrink-0",
        children: /* @__PURE__ */ t(_a, {
          className: "h-5 w-5 text-yellow-400",
          "aria-hidden": "true"
        })
      }), /* @__PURE__ */ l("div", {
        className: "ml-3 text-left",
        children: [e && /* @__PURE__ */ t("h3", {
          className: "text-sm mb-1 font-medium text-yellow-800",
          children: e
        }), /* @__PURE__ */ t("div", {
          className: `${e && "mt-2"} text-sm text-yellow-700`,
          children: r
        })]
      })]
    })
  });
}
function bc({
  event: e,
  onRerun: r
}) {
  return /* @__PURE__ */ l("div", {
    className: "relative",
    children: [/* @__PURE__ */ l(pt.Group, {
      children: [/* @__PURE__ */ l(Xe.List, {
        children: [/* @__PURE__ */ t(Xe, {
          children: "Request"
        }), /* @__PURE__ */ t(Xe, {
          children: "Response"
        })]
      }), /* @__PURE__ */ l(pt.Panels, {
        children: [/* @__PURE__ */ t(Xe.Panel, {
          children: /* @__PURE__ */ l(ye, {
            children: [/* @__PURE__ */ l(ye.Item, {
              children: [/* @__PURE__ */ t(ye.Header, {
                children: "Body"
              }), /* @__PURE__ */ t(ye.Body, {
                children: /* @__PURE__ */ t(bt, {
                  value: JSON.stringify(e.request?.body, null, 2)
                })
              })]
            }), /* @__PURE__ */ l(ye.Item, {
              children: [/* @__PURE__ */ t(ye.Header, {
                children: "Header"
              }), /* @__PURE__ */ t(ye.Body, {
                children: /* @__PURE__ */ t(bt, {
                  value: JSON.stringify(e.request?.header, null, 2)
                })
              })]
            })]
          })
        }), /* @__PURE__ */ t(Xe.Panel, {
          children: /* @__PURE__ */ l(ye, {
            children: [/* @__PURE__ */ l(ye.Item, {
              children: [/* @__PURE__ */ t(ye.Header, {
                children: "Preview"
              }), /* @__PURE__ */ t(ye.Body, {
                children: /* @__PURE__ */ t(bt, {
                  value: JSON.stringify(e.response, null, 2)
                })
              })]
            }), /* @__PURE__ */ l(ye.Item, {
              children: [/* @__PURE__ */ t(ye.Header, {
                children: "Header"
              }), /* @__PURE__ */ t(ye.Body, {
                children: /* @__PURE__ */ t(bt, {
                  value: JSON.stringify(e.responseHeader, null, 2)
                })
              })]
            })]
          })
        })]
      })]
    }), /* @__PURE__ */ l(z, {
      $primary: !0,
      type: "button",
      onClick: r,
      className: "absolute right-0 top-3",
      children: [/* @__PURE__ */ t(ea, {
        className: "-ml-0.5 h-4 w-4",
        "aria-hidden": "true"
      }), "rerun"]
    })]
  });
}
export {
  Te as Accordion,
  Ol as Alert,
  It as AssetDropzone,
  Zo as AssetGroupManager,
  ko as AssetManagerDropzone,
  Vo as AssetManagerGallery,
  Er as AssetPickerInput,
  ln as AssetPickerModal,
  os as AssetPickerMulti,
  ss as AssetPickerSingle,
  Ll as AssetSidebar,
  Tl as AssetSingle,
  Yt as AssetTile,
  Uo as AssetTypeSelect,
  jl as Autofill,
  ms as BackendSelect,
  Pl as BackendSelectInput,
  Bl as Badge,
  Al as BooleanIcon,
  z as Button,
  gs as Calendar,
  ys as CalendarInput,
  Ue as Card,
  zl as Chip,
  Hl as ColorPicker,
  Yl as ColorSelect,
  dn as ConfirmDelete,
  Fl as ConfirmModal,
  Vl as ConversionForm,
  Co as CopyLink,
  ye as DataList,
  Ul as DateMask,
  lr as DefaultEntryForm,
  Wl as DeleteLink,
  vt as DevNote,
  Gl as DragIcon,
  Do as Draggable,
  ql as DropText,
  Ne as Dropdown,
  Jl as DropdownChecker,
  nn as Dropzone,
  to as Editable,
  Zl as EmailVerification,
  Xl as EmbedOldAmin,
  Ql as EmptyList,
  Rs as EntriesChecker,
  Kl as EntriesDropdown,
  ec as EntriesSelect,
  Ms as EntryField,
  tc as EntryForm,
  rc as EntryModal,
  Es as EntrySelect,
  nc as EntrySidebar,
  jt as ExternalLink,
  Ze as FieldErrorMessage,
  ls as FileUpload,
  k as Form,
  ac as FormattedInput,
  ic as GroupsInputHector,
  Bs as HeaderSettingsToggle,
  Ct as Img,
  Ee as Ink,
  K as Input,
  Ut as InputMaskController,
  un as InputWithDropdown,
  oc as IntervalSelect,
  ot as Ixo,
  sc as JSONInput,
  lc as LengthCheck,
  We as LocalLoader,
  cc as MarkdownEditor,
  Os as MediumEditor,
  Et as Modal,
  dc as OpeningHours,
  Vt as OptionsMenu,
  uc as PageError,
  ro as Pagination,
  fc as PasswordReset,
  hc as Progress,
  Go as RadioDropdown,
  Ka as Searchbar,
  mc as SecaSettingsForm,
  Se as Section,
  gc as SectionLoader,
  Wt as SelectInput,
  De as Sidebar,
  tr as SimpleSelect,
  bt as Snippet,
  qo as SortDropdown,
  ct as Spinner,
  Xe as StyledTab,
  le as Table,
  dr as Tabs,
  jo as TagsPicker,
  Jo as TileListSwitch,
  Xi as TimePagination,
  en as Toggle,
  Rt as Tooly,
  pc as TopMenuSearch,
  vc as UpsellingForm,
  yc as Warning,
  bc as WebhookEvent,
  Ho as bulkDeleteAssets,
  Ht as getAllVariants,
  on as getPossibleSizes,
  Nt as getType,
  zo as getVariant,
  ts as useAssetList,
  rs as useAssetManager
};
