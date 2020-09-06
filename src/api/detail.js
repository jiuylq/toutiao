;
_bpack_define(function(o, r, d) {
  o.oPtHi41h = function(r, t, i, e) {
    var o = r("bDkyfONj"),
      n = r("_CEiHGOE")("iterator"),
      a = r("EM3ulcvi");
    t.exports = r("_ScmT_yv").isIterable = function(r) {
      var t = Object(r);
      return void 0 !== t[n] || "@@iterator" in t || a.hasOwnProperty(o(t))
    }
  };
  o.HuYKNQJJ = function(e, o, i, t) {
    e("geDeueJE"), e("_OmCVihe"), o.exports = e("oPtHi41h")
  };
  o.C_JkiC1Z = function(e, o, u, t) {
    o.exports = {
      default: e("HuYKNQJJ"),
      __esModule: !0
    }
  };
  o.ldm3ZK61 = function(r, t, o, e) {
    var n = r("_OG34KXY"),
      i = r("_oir8Ee7");
    t.exports = r("_ScmT_yv").getIterator = function(r) {
      var t = i(r);
      if ("function" != typeof t) throw TypeError(r + " is not iterable!");
      return n(t.call(r))
    }
  };
  o.tLgN9jwm = function(e, o, i, m) {
    e("geDeueJE"), e("_OmCVihe"), o.exports = e("ldm3ZK61")
  };
  o.cCAO4Eai = function(e, o, t, u) {
    o.exports = {
      default: e("tLgN9jwm"),
      __esModule: !0
    }
  };
  o.e_bhjJnu = function(r, t, e, n) {
    "use strict";
    e.__esModule = !0;
    var u = n(r("C_JkiC1Z")),
      a = n(r("cCAO4Eai"));
    e.default = function() {
      return function(r, t) {
        if (Array.isArray(r)) return r;
        if ((0, u.default)(Object(r))) return function(r, t) {
          var e = [],
            n = !0,
            u = !1,
            i = void 0;
          try {
            for (var o, f = (0, a.default)(r); !(n = (o = f.next()).done) && (e.push(o.value), !t || e.length !==
                t); n = !0);
          } catch (r) {
            u = !0, i = r
          } finally {
            try {
              !n && f.return && f.return()
            } finally {
              if (u) throw i
            }
          }
          return e
        }(r, t);
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
      }
    }()
  };
  o.lgLPKmWO = function(n, o, t, a) {
    "use strict";
    t.__esModule = !0, t.default = function(n, o) {
      if (!(n instanceof o)) throw new TypeError("Cannot call a class as a function")
    }
  };
  o.kOty1ryv = function(e, n, a, f) {
    var i = e("_bnaDFW7");
    i(i.S + i.F * !e("i2HNAyWa"), "Object", {
      defineProperty: e("_xgVu3Hq").f
    })
  };
  o.I7seYzUp = function(r, t, e, n) {
    r("kOty1ryv");
    var o = r("_ScmT_yv").Object;
    t.exports = function(r, t, e) {
      return o.defineProperty(r, t, e)
    }
  };
  o._TKuLVn3 = function(e, o, s, t) {
    o.exports = {
      default: e("I7seYzUp"),
      __esModule: !0
    }
  };
  o.LFxswB00 = function(e, n, u, r) {
    "use strict";
    u.__esModule = !0;
    var t = r(e("_TKuLVn3"));
    u.default = function() {
      function e(e, n) {
        for (var u = 0; u < n.length; u++) {
          var r = n[u];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0, t.default)
            (e, r.key, r)
        }
      }
      return function(n, u, r) {
        return u && e(n.prototype, u), r && e(n, r), n
      }
    }()
  };
  o._3k8jqSq = function(e, n, t, i) {
    "use strict";
    t.__esModule = !0;
    var o = i(e("_YselYzt"));
    t.default = function(e, n) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !n || "object" !== (void 0 === n ? "undefined" : (0, o.default)(n)) && "function" != typeof n ? e :
        n
    }
  };
  o.M3w4muPm = function(t, o, r, n) {
    var e = t("_UmqaYCS"),
      _ = t("_OG34KXY"),
      c = function(t, o) {
        if (_(t), !e(o) && null !== o) throw TypeError(o + ": can't set as prototype!")
      };
    o.exports = {
      set: Object.setPrototypeOf || ("__proto__" in {} ? function(o, r, n) {
        try {
          (n = t("_4WfZsn_")(Function.call, t("MJuIewua").f(Object.prototype, "__proto__").set, 2))(o, []),
          r = !(o instanceof Array)
        } catch (t) {
          r = !0
        }
        return function(t, o) {
          return c(t, o), r ? t.__proto__ = o : n(t, o), t
        }
      }({}, !1) : void 0),
      check: c
    }
  };
  o.Fe_KlsRY = function(t, e, o, n) {
    var a = t("_bnaDFW7");
    a(a.S, "Object", {
      setPrototypeOf: t("M3w4muPm").set
    })
  };
  o.B9sSe6KL = function(t, e, o, c) {
    t("Fe_KlsRY"), e.exports = t("_ScmT_yv").Object.setPrototypeOf
  };
  o.aTcJE_x5 = function(e, o, s, t) {
    o.exports = {
      default: e("B9sSe6KL"),
      __esModule: !0
    }
  };
  o.KVmguajV = function(a, c, e, n) {
    var r = a("_bnaDFW7");
    r(r.S, "Object", {
      create: a("LVpLr_1d")
    })
  };
  o.ALPyDrPf = function(t, c, e, n) {
    t("KVmguajV");
    var r = t("_ScmT_yv").Object;
    c.exports = function(t, c) {
      return r.create(t, c)
    }
  };
  o.dAbh41uH = function(e, o, f, t) {
    o.exports = {
      default: e("ALPyDrPf"),
      __esModule: !0
    }
  };
  o.C_TrCxPr = function(e, t, o, u) {
    "use strict";
    o.__esModule = !0;
    var n = u(e("aTcJE_x5")),
      r = u(e("dAbh41uH")),
      l = u(e("_YselYzt"));
    o.default = function(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError(
        "Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : (0, l.default)
          (t)));
      e.prototype = (0, r.default)(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (n.default ? (0, n.default)(e, t) : e.__proto__ = t)
    }
  };
  o.lT_XwWMZ = function(r, t, e, o) {
    "use strict";
    e.__esModule = !0;
    var a = o(r("rCvC6Owx"));
    e.default = a.default || function(r) {
      for (var t = 1; t < arguments.length; t++) {
        var e = arguments[t];
        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (r[o] = e[o])
      }
      return r
    }
  };
  o.xFkyq_lj = function(n, o, t, i) {
    "use strict";
    var u = n("_xgVu3Hq"),
      c = n("UYbOKPox");
    o.exports = function(n, o, t) {
      o in n ? u.f(n, o, c(0, t)) : n[o] = t
    }
  };
  o._SuCJSt9 = function(r, t, n, o) {
    var u = r("_CEiHGOE")("iterator"),
      c = !1;
    try {
      var e = [7][u]();
      e.return = function() {
        c = !0
      }, Array.from(e, function() {
        throw 2
      })
    } catch (r) {}
    t.exports = function(r, t) {
      if (!t && !c) return !1;
      var n = !1;
      try {
        var o = [7],
          e = o[u]();
        e.next = function() {
          return {
            done: n = !0
          }
        }, o[u] = function() {
          return e
        }, r(o)
      } catch (r) {}
      return n
    }
  };
  o.POSxUEhw = function(r, n, e, o) {
    "use strict";
    var t = r("_4WfZsn_"),
      i = r("_bnaDFW7"),
      f = r("cwzdDSxN"),
      a = r("_PtWurQh"),
      l = r("SelmFTEQ"),
      u = r("N7qDMPXQ"),
      v = r("xFkyq_lj"),
      c = r("_oir8Ee7");
    i(i.S + i.F * !r("_SuCJSt9")(function(r) {
      Array.from(r)
    }), "Array", {
      from: function(r) {
        var n, e, o, i, _ = f(r),
          d = "function" == typeof this ? this : Array,
          h = arguments.length,
          s = h > 1 ? arguments[1] : void 0,
          y = void 0 !== s,
          S = 0,
          A = c(_);
        if (y && (s = t(s, h > 2 ? arguments[2] : void 0, 2)), void 0 == A || d == Array && l(A))
          for (e = new d(n = u(_.length)); n > S; S++) v(e, S, y ? s(_[S], S) : _[S]);
        else
          for (i = A.call(_), e = new d; !(o = i.next()).done; S++) v(e, S, y ? a(i, s, [o.value, S], !0) :
            o.value);
        return e.length = S, e
      }
    })
  };
  o.dzY3_8JB = function(o, r, m, _) {
    o("_OmCVihe"), o("POSxUEhw"), r.exports = o("_ScmT_yv").Array.from
  };
  o.C1A9_Inc = function(e, o, d, t) {
    o.exports = {
      default: e("dzY3_8JB"),
      __esModule: !0
    }
  };
  o._TSbqAE1 = function(_, E, S, O, T) {
    E.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  };
  o.qs4g6UpW = function(e, n, r, t, a) {
    var o = t(e("_YselYzt")),
      i = function() {},
      c = e("_TSbqAE1"),
      s = {};
    i = function(e) {
      var n = "Warning: " + e;
      "undefined" != typeof console && console.error(n);
      try {
        throw new Error(n)
      } catch (e) {}
    }, n.exports = function(e, n, r, t, a) {
      for (var f in e)
        if (e.hasOwnProperty(f)) {
          var u;
          try {
            if ("function" != typeof e[f]) {
              var l = Error((t || "React class") + ": " + r + " type `" + f +
                "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
                (0, o.default)(e[f]) + "`.");
              throw l.name = "Invariant Violation", l
            }
            u = e[f](n, f, t, r, null, c)
          } catch (e) {
            u = e
          }
          if (!u || u instanceof Error || i((t || "React class") + ": type specification of " + r + " `" + f +
              "` is invalid; the type checker function must return `null` or an `Error` but returned a " + (
                void 0 === u ? "undefined" : (0, o.default)(u)) +
              ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
            ), u instanceof Error && !(u.message in s)) {
            s[u.message] = !0;
            var p = a ? a() : "";
            i("Failed " + r + " type: " + u.message + (null != p ? p : ""))
          }
        }
    }
  };
  o.YtTg_npU = function(e, n, r, t, o) {
    function a() {
      return null
    }
    var i = t(e("_YselYzt")),
      u = t(e("_l59FVJy")),
      f = t(e("qUYrYx_P")),
      l = t(e("V4Ce3JJs")),
      c = t(e("IUH_e8R9")),
      p = e("DejruqZc"),
      s = e("_TSbqAE1"),
      d = e("qs4g6UpW"),
      y = function() {};
    y = function(e) {
      var n = "Warning: " + e;
      "undefined" != typeof console && console.error(n);
      try {
        throw new Error(n)
      } catch (e) {}
    }, n.exports = function(e, n) {
      function r(e, n) {
        return e === n ? 0 !== e || 1 / e == 1 / n : e != e && n != n
      }

      function t(e) {
        this.message = e, this.stack = ""
      }

      function o(e) {
        function r(r, i, u, f, l, c, p) {
          if (f = f || j, c = c || u, p !== s) {
            if (n) {
              var d = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw d.name = "Invariant Violation", d
            }
            if ("undefined" != typeof console) {
              var v = f + ":" + u;
              !o[v] && a < 3 && (y("You are manually calling a React.PropTypes validation function for the `" +
                c + "` prop on `" + f +
                "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
              ), o[v] = !0, a++)
            }
          }
          return null == i[u] ? r ? new t(null === i[u] ? "The " + l + " `" + c +
            "` is marked as required in `" + f + "`, but its value is `null`." : "The " + l + " `" + c +
            "` is marked as required in `" + f + "`, but its value is `undefined`.") : null : e(i, u, f, l, c)
        }
        var o = {},
          a = 0,
          i = r.bind(null, !1);
        return i.isRequired = r.bind(null, !0), i
      }

      function v(e) {
        return o(function(n, r, o, a, i, u) {
          var f = n[r];
          if (g(f) !== e) return new t("Invalid " + a + " `" + i + "` of type `" + w(f) + "` supplied to `" +
            o + "`, expected `" + e + "`.");
          return null
        })
      }

      function b(e) {
        function n(n, r, o, a, i) {
          if (!(n[r] instanceof e)) {
            var u = e.name || j;
            return new t("Invalid " + a + " `" + i + "` of type `" + function(e) {
              if (!e.constructor || !e.constructor.name) return j;
              return e.constructor.name
            }(n[r]) + "` supplied to `" + o + "`, expected instance of `" + u + "`.")
          }
          return null
        }
        return o(n)
      }

      function h(e) {
        if (!Array.isArray(e)) return y(
          "Invalid argument supplied to oneOfType, expected an instance of array."), a;
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          if ("function" != typeof r) return y(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " +
            function(e) {
              var n = w(e);
              switch (n) {
                case "array":
                case "object":
                  return "an " + n;
                case "boolean":
                case "date":
                case "regexp":
                  return "a " + n;
                default:
                  return n
              }
            }(r) + " at index " + n + "."), a
        }
        return o(function(n, r, o, a, i) {
          for (var u = 0; u < e.length; u++)
            if (null == (0, e[u])(n, r, o, a, i, s)) return null;
          return new t("Invalid " + a + " `" + i + "` supplied to `" + o + "`.")
        })
      }

      function m(n) {
        switch (void 0 === n ? "undefined" : (0, i.default)(n)) {
          case "number":
          case "string":
          case "undefined":
            return !0;
          case "boolean":
            return !n;
          case "object":
            if (Array.isArray(n)) return n.every(m);
            if (null === n || e(n)) return !0;
            var r = function(e) {
              var n = e && (x && e[x] || e[T]);
              if ("function" == typeof n) return n
            }(n);
            if (!r) return !1;
            var t, o = r.call(n);
            if (r !== n.entries) {
              for (; !(t = o.next()).done;)
                if (!m(t.value)) return !1
            } else
              for (; !(t = o.next()).done;) {
                var a = t.value;
                if (a && !m(a[1])) return !1
              }
            return !0;
          default:
            return !1
        }
      }

      function g(e) {
        var n = void 0 === e ? "undefined" : (0, i.default)(e);
        return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : function(e, n) {
          return "symbol" === e || "Symbol" === n["@@toStringTag"] || "function" == typeof c.default && n instanceof c
            .default
        }(n, e) ? "symbol" : n
      }

      function w(e) {
        if (void 0 === e || null === e) return "" + e;
        var n = g(e);
        if ("object" === n) {
          if (e instanceof Date) return "date";
          if (e instanceof RegExp) return "regexp"
        }
        return n
      }
      var x = "function" == typeof c.default && l.default,
        T = "@@iterator",
        j = "<<anonymous>>",
        I = {
          array: v("array"),
          bool: v("boolean"),
          func: v("function"),
          number: v("number"),
          object: v("object"),
          string: v("string"),
          symbol: v("symbol"),
          any: o(a),
          arrayOf: function(e) {
            return o(function(n, r, o, a, i) {
              if ("function" != typeof e) return new t("Property `" + i + "` of component `" + o +
                "` has invalid PropType notation inside arrayOf.");
              var u = n[r];
              if (!Array.isArray(u)) return new t("Invalid " + a + " `" + i + "` of type `" + g(u) +
                "` supplied to `" + o + "`, expected an array.");
              for (var f = 0; f < u.length; f++) {
                var l = e(u, f, o, a, i + "[" + f + "]", s);
                if (l instanceof Error) return l
              }
              return null
            })
          },
          element: o(function(n, r, o, a, i) {
            var u = n[r];
            return e(u) ? null : new t("Invalid " + a + " `" + i + "` of type `" + g(u) + "` supplied to `" +
              o + "`, expected a single ReactElement.")
          }),
          instanceOf: b,
          node: o(function(e, n, r, o, a) {
            return m(e[n]) ? null : new t("Invalid " + o + " `" + a + "` supplied to `" + r +
              "`, expected a ReactNode.")
          }),
          objectOf: function(e) {
            return o(function(n, r, o, a, i) {
              if ("function" != typeof e) return new t("Property `" + i + "` of component `" + o +
                "` has invalid PropType notation inside objectOf.");
              var u = n[r],
                f = g(u);
              if ("object" !== f) return new t("Invalid " + a + " `" + i + "` of type `" + f +
                "` supplied to `" + o + "`, expected an object.");
              for (var l in u)
                if (u.hasOwnProperty(l)) {
                  var c = e(u, l, o, a, i + "." + l, s);
                  if (c instanceof Error) return c
                } return null
            })
          },
          oneOf: function(e) {
            return Array.isArray(e) ? o(function(n, o, a, i, u) {
              for (var l = n[o], c = 0; c < e.length; c++)
                if (r(l, e[c])) return null;
              return new t("Invalid " + i + " `" + u + "` of value `" + l + "` supplied to `" + a +
                "`, expected one of " + (0, f.default)(e) + ".")
            }) : (y("Invalid argument supplied to oneOf, expected an instance of array."), a)
          },
          oneOfType: h,
          shape: function(e) {
            return o(function(n, r, o, a, i) {
              var u = n[r],
                f = g(u);
              if ("object" !== f) return new t("Invalid " + a + " `" + i + "` of type `" + f +
                "` supplied to `" + o + "`, expected `object`.");
              for (var l in e) {
                var c = e[l];
                if (c) {
                  var p = c(u, l, o, a, i + "." + l, s);
                  if (p) return p
                }
              }
              return null
            })
          },
          exact: function(e) {
            return o(function(n, r, o, a, i) {
              var l = n[r],
                c = g(l);
              if ("object" !== c) return new t("Invalid " + a + " `" + i + "` of type `" + c +
                "` supplied to `" + o + "`, expected `object`.");
              var d = p({}, n[r], e);
              for (var y in d) {
                var v = e[y];
                if (!v) return new t("Invalid " + a + " `" + i + "` key `" + y + "` supplied to `" + o +
                  "`.\nBad object: " + (0, f.default)(n[r], null, "  ") + "\nValid keys: " + (0, f.default)
                  ((0, u.default)(e), null, "  "));
                var b = v(l, y, o, a, i + "." + y, s);
                if (b) return b
              }
              return null
            })
          }
        };
      return t.prototype = Error.prototype, I.checkPropTypes = d, I.PropTypes = I, I
    }
  };
  o.B61_0gra = function(e, r, o, n, t) {
    function a() {}
    var p = e("_TSbqAE1");
    r.exports = function() {
      function e(e, r, o, n, t, a) {
        if (a !== p) {
          var c = new Error(
            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
          );
          throw c.name = "Invariant Violation", c
        }
      }

      function r() {
        return e
      }
      e.isRequired = e;
      var o = {
        array: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: r,
        element: e,
        instanceOf: r,
        node: e,
        objectOf: r,
        oneOf: r,
        oneOfType: r,
        shape: r,
        exact: r
      };
      return o.checkPropTypes = a, o.PropTypes = o, o
    }
  };
  o.A8iu4fIz = function(o, S, _, c) {
    o("_SRUSSU_"), S.exports = o("_ScmT_yv").Symbol.for
  };
  o.uDAb44WB = function(e, o, u, f) {
    o.exports = {
      default: e("A8iu4fIz"),
      __esModule: !0
    }
  };
  o.CcFRdAGK = function(e, t, n, u, f) {
    var o = u(e("_YselYzt")),
      d = u(e("uDAb44WB")),
      l = "function" == typeof u(e("IUH_e8R9")).default && d.default && (0, d.default)("react.element") || 60103;
    t.exports = e("YtTg_npU")(function(e) {
      return "object" === (void 0 === e ? "undefined" : (0, o.default)(e)) && null !== e && e.$$typeof === l
    }, !0)
  };
  o.KO60hBy0 = function(t, e, n, r, o) {
    ! function(t, n) {
      e.exports = n()
    }(0, function() {
      function t(t) {
        return "function" == typeof t
      }

      function e() {
        var t = setTimeout;
        return function() {
          return t(n, 1)
        }
      }

      function n() {
        for (var t = 0; t < m; t += 2) {
          (0, O[t])(O[t + 1]), O[t] = void 0, O[t + 1] = void 0
        }
        m = 0
      }

      function r() {
        try {
          var t = Function("return this")().require("vertx");
          return void 0 !== (b = t.runOnLoop || t.runOnContext) ? function() {
            b(n)
          } : e()
        } catch (t) {
          return e()
        }
      }

      function o(t, e) {
        var n = this,
          r = new this.constructor(s);
        void 0 === r[P] && d(r);
        var o = n._state;
        if (o) {
          var i = arguments[o - 1];
          A(function() {
            return _(o, r, i, n._result)
          })
        } else v(n, r, t, e);
        return r
      }

      function i(t) {
        if (t && "object" == typeof t && t.constructor === this) return t;
        var e = new this(s);
        return a(e, t), e
      }

      function s() {}

      function u(t) {
        try {
          return t.then
        } catch (t) {
          return k.error = t, k
        }
      }

      function c(e, n, r) {
        n.constructor === e.constructor && r === o && n.constructor.resolve === i ? function(t, e) {
          e._state === F ? l(t, e._result) : e._state === Y ? h(t, e._result) : v(e, void 0, function(e) {
            return a(t, e)
          }, function(e) {
            return h(t, e)
          })
        }(e, n) : r === k ? (h(e, k.error), k.error = null) : void 0 === r ? l(e, n) : t(r) ? function(t, e,
          n) {
          A(function(t) {
            var r = !1,
              o = function(t, e, n, r) {
                try {
                  t.call(e, n, r)
                } catch (t) {
                  return t
                }
              }(n, e, function(n) {
                r || (r = !0, e !== n ? a(t, n) : l(t, n))
              }, function(e) {
                r || (r = !0, h(t, e))
              }, t._label);
            !r && o && (r = !0, h(t, o))
          }, t)
        }(e, n, r) : l(e, n)
      }

      function a(t, e) {
        t === e ? h(t, new TypeError("You cannot resolve a promise with itself")) : ! function(t) {
          var e = typeof t;
          return null !== t && ("object" === e || "function" === e)
        }(e) ? l(t, e) : c(t, e, u(e))
      }

      function f(t) {
        t._onerror && t._onerror(t._result), p(t)
      }

      function l(t, e) {
        t._state === x && (t._result = e, t._state = F, 0 !== t._subscribers.length && A(p, t))
      }

      function h(t, e) {
        t._state === x && (t._state = Y, t._result = e, A(f, t))
      }

      function v(t, e, n, r) {
        var o = t._subscribers,
          i = o.length;
        t._onerror = null, o[i] = e, o[i + F] = n, o[i + Y] = r, 0 === i && t._state && A(p, t)
      }

      function p(t) {
        var e = t._subscribers,
          n = t._state;
        if (0 !== e.length) {
          for (var r = void 0, o = void 0, i = t._result, s = 0; s < e.length; s += 3) r = e[s], o = e[s + n],
            r ? _(n, r, o, i) : o(i);
          t._subscribers.length = 0
        }
      }

      function _(e, n, r, o) {
        var i = t(r),
          s = void 0,
          u = void 0,
          c = void 0,
          f = void 0;
        if (i) {
          if ((s = function(t, e) {
              try {
                return t(e)
              } catch (t) {
                return k.error = t, k
              }
            }(r, o)) === k ? (f = !0, u = s.error, s.error = null) : c = !0, n === s) return void h(n, new TypeError(
            "A promises callback cannot return that same promise."))
        } else s = o, c = !0;
        n._state !== x || (i && c ? a(n, s) : f ? h(n, u) : e === F ? l(n, s) : e === Y && h(n, s))
      }

      function d(t) {
        t[P] = K++, t._state = void 0, t._result = void 0, t._subscribers = []
      }
      var y = void 0,
        w = y = Array.isArray ? Array.isArray : function(t) {
          return "[object Array]" === Object.prototype.toString.call(t)
        },
        m = 0,
        b = void 0,
        g = void 0,
        A = function(t, e) {
          O[m] = t, O[m + 1] = e, 2 === (m += 2) && (g ? g(n) : C())
        },
        j = "undefined" != typeof window ? window : void 0,
        S = j || {},
        E = S.MutationObserver || S.WebKitMutationObserver,
        T = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(
          process),
        M = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" !=
        typeof MessageChannel,
        O = new Array(1e3),
        C = void 0;
      C = T ? function() {
        return process.nextTick(n)
      } : E ? function() {
        var t = 0,
          e = new E(n),
          r = document.createTextNode("");
        return e.observe(r, {
            characterData: !0
          }),
          function() {
            r.data = t = ++t % 2
          }
      }() : M ? function() {
        var t = new MessageChannel;
        return t.port1.onmessage = n,
          function() {
            return t.port2.postMessage(0)
          }
      }() : void 0 === j ? r() : e();
      var P = Math.random().toString(36).substring(2),
        x = void 0,
        F = 1,
        Y = 2,
        k = {
          error: null
        },
        K = 0,
        q = function() {
          function t(t, e) {
            this._instanceConstructor = t, this.promise = new t(s), this.promise[P] || d(this.promise), w(e) ?
              (this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 0 ===
                this.length ? l(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(
                  e), 0 === this._remaining && l(this.promise, this._result))) : h(this.promise, new Error(
                "Array Methods must be provided an Array"))
          }
          return t.prototype._enumerate = function(t) {
            for (var e = 0; this._state === x && e < t.length; e++) this._eachEntry(t[e], e)
          }, t.prototype._eachEntry = function(t, e) {
            var n = this._instanceConstructor,
              r = n.resolve;
            if (r === i) {
              var a = u(t);
              if (a === o && t._state !== x) this._settledAt(t._state, e, t._result);
              else if ("function" != typeof a) this._remaining--, this._result[e] = t;
              else if (n === B) {
                var f = new n(s);
                c(f, t, a), this._willSettleAt(f, e)
              } else this._willSettleAt(new n(function(e) {
                return e(t)
              }), e)
            } else this._willSettleAt(r(t), e)
          }, t.prototype._settledAt = function(t, e, n) {
            var r = this.promise;
            r._state === x && (this._remaining--, t === Y ? h(r, n) : this._result[e] = n), 0 === this._remaining &&
              l(r, this._result)
          }, t.prototype._willSettleAt = function(t, e) {
            var n = this;
            v(t, void 0, function(t) {
              return n._settledAt(F, e, t)
            }, function(t) {
              return n._settledAt(Y, e, t)
            })
          }, t
        }(),
        B = function() {
          function t(e) {
            this[P] = K++, this._result = this._state = void 0, this._subscribers = [], s !== e && ("function" !=
              typeof e && function() {
                throw new TypeError(
                  "You must pass a resolver function as the first argument to the promise constructor")
              }(), this instanceof t ? function(t, e) {
                try {
                  e(function(e) {
                    a(t, e)
                  }, function(e) {
                    h(t, e)
                  })
                } catch (e) {
                  h(t, e)
                }
              }(this, e) : function() {
                throw new TypeError(
                  "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
                )
              }())
          }
          return t.prototype.catch = function(t) {
            return this.then(null, t)
          }, t.prototype.finally = function(t) {
            var e = this.constructor;
            return this.then(function(n) {
              return e.resolve(t()).then(function() {
                return n
              })
            }, function(n) {
              return e.resolve(t()).then(function() {
                throw n
              })
            })
          }, t
        }();
      return B.prototype.then = o, B.all = function(t) {
        return new q(this, t).promise
      }, B.race = function(t) {
        var e = this;
        return new e(w(t) ? function(n, r) {
          for (var o = t.length, i = 0; i < o; i++) e.resolve(t[i]).then(n, r)
        } : function(t, e) {
          return e(new TypeError("You must pass an array to race."))
        })
      }, B.resolve = i, B.reject = function(t) {
        var e = new this(s);
        return h(e, t), e
      }, B._setScheduler = function(t) {
        g = t
      }, B._setAsap = function(t) {
        A = t
      }, B._asap = A, B.polyfill = function() {
        var t = void 0;
        if ("undefined" != typeof window) t = window;
        else if ("undefined" != typeof self) t = self;
        else try {
          t = Function("return this")()
        } catch (t) {
          throw new Error("polyfill failed because global object is unavailable in this environment")
        }
        var e = t.Promise;
        if (e) {
          var n = null;
          try {
            n = Object.prototype.toString.call(e.resolve())
          } catch (t) {}
          if ("[object Promise]" === n && !e.cast) return
        }
        t.Promise = B
      }, B.Promise = B, B
    })
  };
  o.E7MLSnqQ = function(e, r, t, n, o) {
    var i = n(e("qUYrYx_P")),
      a = n(e("_l59FVJy")),
      s = n(e("_YselYzt")),
      u = {
        vendor: function() {
          for (var e = ["O", "ms", "Moz", "Khtml", "Webkit", "webkit", ""], r = document.createElement("div"),
              t = e.length; t--;) {
            var n = e[t];
            if ((n ? n + "Transform" : "transform") in r.style) return n
          }
          return null
        },
        prefix: function(e, r) {
          if (null !== u.vendor()) {
            var t = u.vendor() ? "-" + u.vendor().toLowerCase() + "-" : "",
              n = u.vendor() || "";
            if (r) {
              return t + e.replace(/([A-Z])/g, function(e, r) {
                return "-" + e.toLowerCase()
              })
            }
            return n + ("" !== u.vendor() ? e.charAt(0).toUpperCase() + e.substr(1) : e).replace(/(-[a-z])/g,
              function(e, r) {
                return e.charAt(1).toUpperCase()
              })
          }
        },
        canRun2d: function() {
          return null !== u.vendor()
        },
        canRun3d: function() {
          var e = document.createElement("div");
          if (!u.canRun2d() || !window.getComputedStyle) return !1;
          var r = u.prefix("transform");
          document.body.appendChild(e), e.style[r] = "translate3d(1px,1px,1px)";
          var t = window.getComputedStyle(e)[r] || "";
          return document.body.removeChild(e), !!/^matrix3d\((.*)\)$/.exec(t)
        },
        canRunCanvas: function() {
          try {
            return document.createElement("canvas").getContext("2d"), !0
          } catch (e) {
            return !1
          }
        },
        canRunWebgl: function() {
          var e, r;
          try {
            return e = document.createElement("canvas"), r = e.getContext("webgl") || e.getContext(
              "experimental-webgl"), r.getSupportedExtensions(), !0
          } catch (e) {
            return !1
          }
        },
        canUsePageVisibility: function() {
          return null !== u.vendor() && void 0 !== document[u.prefix("hidden")]
        }
      };
    r.exports = {
      cookie: function(e, r, t) {
        if (void 0 === r) {
          var n = null;
          if (document.cookie && "" !== document.cookie)
            for (var o = document.cookie.split(";"), i = 0; i < o.length; i++) {
              var a = o[i].trim();
              if (a.substring(0, e.length + 1) === e + "=") {
                n = decodeURIComponent(a.substring(e.length + 1));
                break
              }
            }
          return n
        }
        t = t || {}, null === r && (r = "", t.expires = -1);
        var s = "";
        if (t.expires && ("number" == typeof t.expires || t.expires.toUTCString)) {
          var u;
          "number" == typeof t.expires ? (u = new Date).setTime(u.getTime() + t.expires) : u = t.expires, s =
            "; expires=" + u.toUTCString()
        }
        var c = t.path ? "; path=" + t.path : "",
          l = t.domain ? "; domain=" + t.domain : "",
          d = t.secure ? "; secure" : "";
        document.cookie = [e, "=", encodeURIComponent(r), s, c, l, d].join("")
      },
      support: u,
      pageVisible: function() {
        return u.canUsePageVisibility() ? document[u.prefix("hidden")] ? "hidden" : "visible" : "unknown"
      },
      localStorageEnabled: function() {
        try {
          return localStorage.setItem("test", "test"), localStorage.removeItem("test"), !0
        } catch (e) {
          return !1
        }
      },
      getCookieForLocal: function(e) {
        for (var r in localStorage) {
          var t = r.split("___");
          if (3 === t.length && t[0] === e) {
            var n = parseInt(t[1]),
              o = parseInt(t[2]);
            if (Date.now() - n < o) return localStorage[r]
          }
        }
        return null
      },
      setCookieForLocal: function(e, r, t) {
        for (var n in localStorage) n.split("__")[0] === e && localStorage.removeItem(n);
        localStorage[e + "___" + Date.now() + "___" + t] = r
      },
      appendQuery: function(e, r) {
        if (!r) return e;
        var t, n = document.createElement("a");
        return n.href = e, t = n.search ? n.search + "&" + r : "?" + r, n.protocol + "//" + n.host + n.pathname +
          t + n.hash
      },
      request: function(e) {
        for (var r = location.search.substring(1).split("&"), t = {}, n = 0, o = r.length; n < o; n++) {
          var i = r[n];
          i && (t[i.substring(0, i.indexOf("=")).toLowerCase()] = i.substring(i.indexOf("=") + 1, i.length))
        }
        if (!e) return t;
        var a = t[e.toLowerCase()];
        return a ? a.trim() : ""
      },
      hash: function() {
        var e = location.hash.substr(1),
          r = {};
        if (e)
          for (var t = e.split("&"), n = 0; n < t.length; n++) {
            var o = t[n].split("=");
            r[o[0]] = o[1]
          }
        if ("string" == typeof arguments[0]) return r[arguments[0]];
        if ("object" === (0, s.default)(arguments[0])) {
          for (var i in arguments[0]) r[i] = arguments[0][i];
          var u = (0, a.default)(r).map(function(e) {
            return "h=" + r[e]
          }).join("&");
          location.href = "#" + u.substring(0, u.length - 1)
        }
      },
      getBrowserName: function() {
        var e = "Other",
          r = window.navigator.userAgent,
          t = {
            Wechat: /micromessenger/,
            QQBrowser: /qqbrowser/,
            UC: /ubrowser|ucbrowser|ucweb/,
            Shoujibaidu: /baiduboxapp|baiduhd|bidubrowser|baidubrowser/,
            SamsungBrowser: /samsungbrowser/,
            MiuiBrowser: /miuibrowser/,
            Sogou: /sogoumobilebrowser|sogousearch/,
            Explorer2345: /2345explorer|2345chrome|mb2345browser/,
            Liebao: /lbbrowser/,
            Weibo: /__weibo__/,
            OPPO: /oppobrowser/,
            toutiao: /newsarticle/,
            MobileQQ: /mobile.*qq/,
            Firefox: /firefox/,
            Maxthon: /maxthon/,
            Se360: /360se/,
            Ee360: /360ee/,
            Safari: /(iphone|ipad).*version.*mobile.*safari/,
            Chrome: /chrome|crios/,
            AndroidBrowser: /android.*safari|android.*release.*browser/
          };
        for (var n in t)
          if (t[n].exec(r.toLowerCase())) {
            e = n;
            break
          } return e
      },
      toQuery: function(e) {
        return (0, a.default)(e).map(function(r) {
          return [r, e[r]].join("=")
        }).join("&")
      },
      sessionStorageEnabled: function() {
        try {
          return sessionStorage.setItem("test", "test"), sessionStorage.removeItem("test"), !0
        } catch (e) {
          return !1
        }
      },
      capitalizeFirstLetter: function(e) {
        return e ? (e = e.toString()).charAt(0).toUpperCase() + e.slice(1) : e
      },
      cloneDeep: function(e) {
        return JSON.parse((0, i.default)(e))
      }
    }
  };
  o.WhWroRjY = function(t, e, s, i, r) {
    function n(t) {
      if (t) return function(t) {
        for (var e in n.prototype) t[e] = n.prototype[e];
        return t
      }(t)
    }
    e.exports = n, n.prototype.on = n.prototype.addEventListener = function(t, e) {
        return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || [])
          .push(e), this
      }, n.prototype.once = function(t, e) {
        function s() {
          this.off(t, s), e.apply(this, arguments)
        }
        return s.fn = e, this.on(t, s), this
      }, n.prototype.off = n.prototype.removeListener = n.prototype.removeAllListeners = n.prototype.removeEventListener =
      function(t, e) {
        if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
        var s = this._callbacks["$" + t];
        if (!s) return this;
        if (1 == arguments.length) return delete this._callbacks["$" + t], this;
        for (var i, r = 0; r < s.length; r++)
          if ((i = s[r]) === e || i.fn === e) {
            s.splice(r, 1);
            break
          } return this
      }, n.prototype.emit = function(t) {
        this._callbacks = this._callbacks || {};
        var e = [].slice.call(arguments, 1),
          s = this._callbacks["$" + t];
        if (s)
          for (var i = 0, r = (s = s.slice(0)).length; i < r; ++i) s[i].apply(this, e);
        return this
      }, n.prototype.listeners = function(t) {
        return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || []
      }, n.prototype.hasListeners = function(t) {
        return !!this.listeners(t).length
      }
  };
  o._VnPJuvk = function(n, e, t, u, o) {
    var d = u(n("_YselYzt"));
    e.exports = function(n) {
      return null !== n && "object" === (void 0 === n ? "undefined" : (0, d.default)(n))
    }
  };
  o._mPfQU57 = function(o, r, i, n) {
    var t = o("_OG34KXY"),
      c = o("IAwRqMbk"),
      e = o("_CEiHGOE")("species");
    r.exports = function(o, r) {
      var i, n = t(o).constructor;
      return void 0 === n || void 0 == (i = t(n)[e]) ? r : c(i)
    }
  };
  o.WhuKNsdL = function(r, c, e, a) {
    c.exports = function(r, c, e) {
      var a = void 0 === e;
      switch (c.length) {
        case 0:
          return a ? r() : r.call(e);
        case 1:
          return a ? r(c[0]) : r.call(e, c[0]);
        case 2:
          return a ? r(c[0], c[1]) : r.call(e, c[0], c[1]);
        case 3:
          return a ? r(c[0], c[1], c[2]) : r.call(e, c[0], c[1], c[2]);
        case 4:
          return a ? r(c[0], c[1], c[2], c[3]) : r.call(e, c[0], c[1], c[2], c[3])
      }
      return r.apply(e, c)
    }
  };
  o.__xnHe5X = function(n, e, t, o) {
    var i, s, a, c = n("_4WfZsn_"),
      d = n("WhuKNsdL"),
      r = n("dtuOqF__"),
      w = n("EHbJXBwN"),
      u = (n("QU4_tjki"), window.process),
      f = window.setImmediate,
      p = window.clearImmediate,
      h = window.MessageChannel,
      l = window.Dispatch,
      g = 0,
      m = {},
      v = function() {
        var n = +this;
        if (m.hasOwnProperty(n)) {
          var e = m[n];
          delete m[n], e()
        }
      },
      y = function(n) {
        v.call(n.data)
      };
    f && p || (f = function(n) {
        for (var e = [], t = 1; arguments.length > t;) e.push(arguments[t++]);
        return m[++g] = function() {
          d("function" == typeof n ? n : Function(n), e)
        }, i(g), g
      }, p = function(n) {
        delete m[n]
      }, "process" == n("Rh0w5Bkq")(u) ? i = function(n) {
        u.nextTick(c(v, n, 1))
      } : l && l.now ? i = function(n) {
        l.now(c(v, n, 1))
      } : h ? (a = (s = new h).port2, s.port1.onmessage = y, i = c(a.postMessage, a, 1)) : window.addEventListener &&
      "function" == typeof postMessage && !window.importScripts ? (i = function(n) {
        window.postMessage(n + "", "*")
      }, window.addEventListener("message", y, !1)) : i = "onreadystatechange" in w("script") ? function(n) {
        r.appendChild(w("script")).onreadystatechange = function() {
          r.removeChild(this), v.call(n)
        }
      } : function(n) {
        setTimeout(c(v, n, 1), 0)
      }), e.exports = {
      set: f,
      clear: p
    }
  };
  o.DNegKAm3 = function(e, n, t, o) {
    e("QU4_tjki");
    var i = e("__xnHe5X").set,
      r = window.MutationObserver || window.WebKitMutationObserver,
      a = window.process,
      c = window.Promise,
      s = "process" == e("Rh0w5Bkq")(a);
    n.exports = function() {
      var e, n, t, o = function() {
        var o, i;
        for (s && (o = a.domain) && o.exit(); e;) {
          i = e.fn, e = e.next;
          try {
            i()
          } catch (o) {
            throw e ? t() : n = void 0, o
          }
        }
        n = void 0, o && o.enter()
      };
      if (s) t = function() {
        a.nextTick(o)
      };
      else if (r) {
        var f = !0,
          v = document.createTextNode("");
        new r(o).observe(v, {
          characterData: !0
        }), t = function() {
          v.data = f = !f
        }
      } else if (c && c.resolve) {
        var w = c.resolve();
        t = function() {
          w.then(o)
        }
      } else t = function() {
        i.call(window, o)
      };
      return function(o) {
        var i = {
          fn: o,
          next: void 0
        };
        n && (n.next = i), e || (e = i, t()), n = i
      }
    }
  };
  o.Vb0sDKda = function(r, o, t, i) {
    "use strict";
    var e = r("IAwRqMbk");
    o.exports.f = function(r) {
      return new function(r) {
        var o, t;
        this.promise = new r(function(r, i) {
          if (void 0 !== o || void 0 !== t) throw TypeError("Bad Promise constructor");
          o = r, t = i
        }), this.resolve = e(o), this.reject = e(t)
      }(r)
    }
  };
  o.WXp_qUTb = function(t, n, r, e) {
    n.exports = function(t) {
      try {
        return {
          e: !1,
          v: t()
        }
      } catch (t) {
        return {
          e: !0,
          v: t
        }
      }
    }
  };
  o.X7CsyoBj = function(r, o, n, t) {
    var e = r("_OG34KXY"),
      s = r("_UmqaYCS"),
      u = r("Vb0sDKda");
    o.exports = function(r, o) {
      if (e(r), s(o) && o.constructor === r) return o;
      var n = u.f(r);
      return (0, n.resolve)(o), n.promise
    }
  };
  o.Sj3KzRgN = function(n, t, i, e) {
    "use strict";
    var o, r, c, s, a = n("_tdiAiEL"),
      h = (n("QU4_tjki"), n("_4WfZsn_")),
      _ = n("bDkyfONj"),
      f = n("_bnaDFW7"),
      u = n("_UmqaYCS"),
      v = n("IAwRqMbk"),
      l = n("VdMzodwe"),
      d = n("ZYy6hWME"),
      m = n("_mPfQU57"),
      p = n("__xnHe5X").set,
      w = n("DNegKAm3")(),
      y = n("Vb0sDKda"),
      j = n("WXp_qUTb"),
      P = n("X7CsyoBj"),
      S = window.TypeError,
      b = window.process,
      k = window.Promise,
      E = "process" == _(b),
      U = function() {},
      W = r = y.f,
      C = !! function() {
        try {
          var t = k.resolve(1),
            i = (t.constructor = {})[n("_CEiHGOE")("species")] = function(n) {
              n(U, U)
            };
          return (E || "function" == typeof PromiseRejectionEvent) && t.then(U) instanceof i
        } catch (n) {}
      }(),
      F = function(n) {
        var t;
        return !(!u(n) || "function" != typeof(t = n.then)) && t
      },
      g = function(n, t) {
        if (!n._n) {
          n._n = !0;
          var i = n._c;
          w(function() {
            for (var e = n._v, o = 1 == n._s, r = 0, c = function(t) {
                var i, r, c = o ? t.ok : t.fail,
                  s = t.resolve,
                  a = t.reject,
                  h = t.domain;
                try {
                  c ? (o || (2 == n._h && R(n), n._h = 1), !0 === c ? i = e : (h && h.enter(), i = c(e), h &&
                    h.exit()), i === t.promise ? a(S("Promise-chain cycle")) : (r = F(i)) ? r.call(i, s,
                    a) : s(i)) : a(e)
                } catch (n) {
                  a(n)
                }
              }; i.length > r;) c(i[r++]);
            n._c = [], n._n = !1, t && !n._h && D(n)
          })
        }
      },
      D = function(n) {
        p.call(window, function() {
          var t, i, e, o = n._v,
            r = H(n);
          if (r && (t = j(function() {
              E ? b.emit("unhandledRejection", o, n) : (i = window.onunhandledrejection) ? i({
                promise: n,
                reason: o
              }) : (e = window.console) && e.error && e.error("Unhandled promise rejection", o)
            }), n._h = E || H(n) ? 2 : 1), n._a = void 0, r && t.e) throw t.v
        })
      },
      H = function(n) {
        if (1 == n._h) return !1;
        for (var t, i = n._a || n._c, e = 0; i.length > e;)
          if ((t = i[e++]).fail || !H(t.promise)) return !1;
        return !0
      },
      R = function(n) {
        p.call(window, function() {
          var t;
          E ? b.emit("rejectionHandled", n) : (t = window.onrejectionhandled) && t({
            promise: n,
            reason: n._v
          })
        })
      },
      q = function(n) {
        var t = this;
        t._d || (t._d = !0, (t = t._w || t)._v = n, t._s = 2, t._a || (t._a = t._c.slice()), g(t, !0))
      },
      A = function(n) {
        var t, i = this;
        if (!i._d) {
          i._d = !0, i = i._w || i;
          try {
            if (i === n) throw S("Promise can't be resolved itself");
            (t = F(n)) ? w(function() {
              var e = {
                _w: i,
                _d: !1
              };
              try {
                t.call(n, h(A, e, 1), h(q, e, 1))
              } catch (n) {
                q.call(e, n)
              }
            }): (i._v = n, i._s = 1, g(i, !1))
          } catch (n) {
            q.call({
              _w: i,
              _d: !1
            }, n)
          }
        }
      };
    C || (k = function(n) {
      l(this, k, "Promise", "_h"), v(n), o.call(this);
      try {
        n(h(A, this, 1), h(q, this, 1))
      } catch (n) {
        q.call(this, n)
      }
    }, (o = function(n) {
      this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !
        1
    }).prototype = n("_He9RSVo")(k.prototype, {
      then: function(n, t) {
        var i = W(m(this, k));
        return i.ok = "function" != typeof n || n, i.fail = "function" == typeof t && t, i.domain = E ? b
          .domain : void 0, this._c.push(i), this._a && this._a.push(i), this._s && g(this, !1), i.promise
      },
      catch: function(n) {
        return this.then(void 0, n)
      }
    }), c = function() {
      var n = new o;
      this.promise = n, this.resolve = h(A, n, 1), this.reject = h(q, n, 1)
    }, y.f = W = function(n) {
      return n === k || n === s ? new c(n) : r(n)
    }), f(f.G + f.W + f.F * !C, {
      Promise: k
    }), n("oBWtkPlC")(k, "Promise"), n("spr9zUPg")("Promise"), s = n("_ScmT_yv").Promise, f(f.S + f.F * !C,
      "Promise", {
        reject: function(n) {
          var t = W(this);
          return (0, t.reject)(n), t.promise
        }
      }), f(f.S + f.F * (a || !C), "Promise", {
      resolve: function(n) {
        return P(a && this === s ? k : this, n)
      }
    }), f(f.S + f.F * !(C && n("_SuCJSt9")(function(n) {
      k.all(n).catch(U)
    })), "Promise", {
      all: function(n) {
        var t = this,
          i = W(t),
          e = i.resolve,
          o = i.reject,
          r = j(function() {
            var i = [],
              r = 0,
              c = 1;
            d(n, !1, function(n) {
              var s = r++,
                a = !1;
              i.push(void 0), c++, t.resolve(n).then(function(n) {
                a || (a = !0, i[s] = n, --c || e(i))
              }, o)
            }), --c || e(i)
          });
        return r.e && o(r.v), i.promise
      },
      race: function(n) {
        var t = this,
          i = W(t),
          e = i.reject,
          o = j(function() {
            d(n, !1, function(n) {
              t.resolve(n).then(i.resolve, e)
            })
          });
        return o.e && e(o.v), i.promise
      }
    })
  };
  o.FrdAm9AV = function(n, t, i, o) {
    "use strict";
    var r = n("_bnaDFW7"),
      e = n("_ScmT_yv"),
      u = (n("QU4_tjki"), n("_mPfQU57")),
      f = n("X7CsyoBj");
    r(r.P + r.R, "Promise", {
      finally: function(n) {
        var t = u(this, e.Promise || window.Promise),
          i = "function" == typeof n;
        return this.then(i ? function(i) {
          return f(t, n()).then(function() {
            return i
          })
        } : n, i ? function(i) {
          return f(t, n()).then(function() {
            throw i
          })
        } : n)
      }
    })
  };
  o.usBwEfhX = function(r, e, t, s) {
    "use strict";
    var i = r("_bnaDFW7"),
      n = r("Vb0sDKda"),
      o = r("WXp_qUTb");
    i(i.S, "Promise", {
      try: function(r) {
        var e = n.f(this),
          t = o(r);
        return (t.e ? e.reject : e.resolve)(t.v), e.promise
      }
    })
  };
  o.JegZQoGs = function(e, m, o, r) {
    e("A731R_rP"), e("_OmCVihe"), e("geDeueJE"), e("Sj3KzRgN"), e("FrdAm9AV"), e("usBwEfhX"), m.exports = e(
      "_ScmT_yv").Promise
  };
  o.XbxgipO3 = function(e, o, s, t) {
    o.exports = {
      default: e("JegZQoGs"),
      __esModule: !0
    }
  };
  o.K9byGaRD = function(t, e, r, i, s) {
    function o(t) {
      if (t) return function(t) {
        for (var e in o.prototype) t[e] = o.prototype[e];
        return t
      }(t)
    }
    var n = i(t("XbxgipO3")),
      a = i(t("_YselYzt")),
      h = t("_VnPJuvk");
    e.exports = o, o.prototype.clearTimeout = function() {
      return clearTimeout(this._timer), clearTimeout(this._responseTimeoutTimer), delete this._timer, delete this
        ._responseTimeoutTimer, this
    }, o.prototype.parse = function(t) {
      return this._parser = t, this
    }, o.prototype.responseType = function(t) {
      return this._responseType = t, this
    }, o.prototype.serialize = function(t) {
      return this._serializer = t, this
    }, o.prototype.timeout = function(t) {
      if (!t || "object" !== (void 0 === t ? "undefined" : (0, a.default)(t))) return this._timeout = t, this._responseTimeout =
        0, this;
      for (var e in t) switch (e) {
        case "deadline":
          this._timeout = t.deadline;
          break;
        case "response":
          this._responseTimeout = t.response;
          break;
        default:
          console.warn("Unknown timeout option", e)
      }
      return this
    }, o.prototype.retry = function(t, e) {
      return 0 !== arguments.length && !0 !== t || (t = 1), t <= 0 && (t = 0), this._maxRetries = t, this._retries =
        0, this._retryCallback = e, this
    };
    var u = ["ECONNRESET", "ETIMEDOUT", "EADDRINFO", "ESOCKETTIMEDOUT"];
    o.prototype._shouldRetry = function(t, e) {
      if (!this._maxRetries || this._retries++ >= this._maxRetries) return !1;
      if (this._retryCallback) try {
        var r = this._retryCallback(t, e);
        if (!0 === r) return !0;
        if (!1 === r) return !1
      } catch (t) {
        console.error(t)
      }
      if (e && e.status && e.status >= 500 && 501 != e.status) return !0;
      if (t) {
        if (t.code && ~u.indexOf(t.code)) return !0;
        if (t.timeout && "ECONNABORTED" == t.code) return !0;
        if (t.crossDomain) return !0
      }
      return !1
    }, o.prototype._retry = function() {
      return this.clearTimeout(), this.req && (this.req = null, this.req = this.request()), this._aborted = !1,
        this.timedout = !1, this._end()
    }, o.prototype.then = function(t, e) {
      if (!this._fullfilledPromise) {
        var r = this;
        this._endCalled && console.warn(
          "Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"
        ), this._fullfilledPromise = new n.default(function(t, e) {
          r.end(function(r, i) {
            r ? e(r) : t(i)
          })
        })
      }
      return this._fullfilledPromise.then(t, e)
    }, o.prototype.catch = function(t) {
      return this.then(void 0, t)
    }, o.prototype.use = function(t) {
      return t(this), this
    }, o.prototype.ok = function(t) {
      if ("function" != typeof t) throw Error("Callback required");
      return this._okCallback = t, this
    }, o.prototype._isResponseOK = function(t) {
      return !!t && (this._okCallback ? this._okCallback(t) : t.status >= 200 && t.status < 300)
    }, o.prototype.get = function(t) {
      return this._header[t.toLowerCase()]
    }, o.prototype.getHeader = o.prototype.get, o.prototype.set = function(t, e) {
      if (h(t)) {
        for (var r in t) this.set(r, t[r]);
        return this
      }
      return this._header[t.toLowerCase()] = e, this.header[t] = e, this
    }, o.prototype.unset = function(t) {
      return delete this._header[t.toLowerCase()], delete this.header[t], this
    }, o.prototype.field = function(t, e) {
      if (null === t || void 0 === t) throw new Error(".field(name, val) name can not be empty");
      if (this._data && console.error(
          ".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()"), h(
          t)) {
        for (var r in t) this.field(r, t[r]);
        return this
      }
      if (Array.isArray(e)) {
        for (var i in e) this.field(t, e[i]);
        return this
      }
      if (null === e || void 0 === e) throw new Error(".field(name, val) val can not be empty");
      return "boolean" == typeof e && (e = "" + e), this._getFormData().append(t, e), this
    }, o.prototype.abort = function() {
      return this._aborted ? this : (this._aborted = !0, this.xhr && this.xhr.abort(), this.req && this.req.abort(),
        this.clearTimeout(), this.emit("abort"), this)
    }, o.prototype._auth = function(t, e, r, i) {
      switch (r.type) {
        case "basic":
          this.set("Authorization", "Basic " + i(t + ":" + e));
          break;
        case "auto":
          this.username = t, this.password = e;
          break;
        case "bearer":
          this.set("Authorization", "Bearer " + t)
      }
      return this
    }, o.prototype.withCredentials = function(t) {
      return void 0 == t && (t = !0), this._withCredentials = t, this
    }, o.prototype.redirects = function(t) {
      return this._maxRedirects = t, this
    }, o.prototype.maxResponseSize = function(t) {
      if ("number" != typeof t) throw TypeError("Invalid argument");
      return this._maxResponseSize = t, this
    }, o.prototype.toJSON = function() {
      return {
        method: this.method,
        url: this.url,
        data: this._data,
        headers: this._header
      }
    }, o.prototype.send = function(t) {
      var e = h(t),
        r = this._header["content-type"];
      if (this._formData && console.error(
          ".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()"
        ), e && !this._data) Array.isArray(t) ? this._data = [] : this._isHost(t) || (this._data = {});
      else if (t && this._data && this._isHost(this._data)) throw Error("Can't merge these send calls");
      if (e && h(this._data))
        for (var i in t) this._data[i] = t[i];
      else "string" == typeof t ? (r || this.type("form"), r = this._header["content-type"], this._data =
        "application/x-www-form-urlencoded" == r ? this._data ? this._data + "&" + t : t : (this._data || "") +
        t) : this._data = t;
      return !e || this._isHost(t) ? this : (r || this.type("json"), this)
    }, o.prototype.sortQuery = function(t) {
      return this._sort = void 0 === t || t, this
    }, o.prototype._finalizeQueryString = function() {
      var t = this._query.join("&");
      if (t && (this.url += (this.url.indexOf("?") >= 0 ? "&" : "?") + t), this._query.length = 0, this._sort) {
        var e = this.url.indexOf("?");
        if (e >= 0) {
          var r = this.url.substring(e + 1).split("&");
          "function" == typeof this._sort ? r.sort(this._sort) : r.sort(), this.url = this.url.substring(0, e) +
            "?" + r.join("&")
        }
      }
    }, o.prototype._appendQueryString = function() {
      console.trace("Unsupported")
    }, o.prototype._timeoutError = function(t, e, r) {
      if (!this._aborted) {
        var i = new Error(t + e + "ms exceeded");
        i.timeout = e, i.code = "ECONNABORTED", i.errno = r, this.timedout = !0, this.abort(), this.callback(i)
      }
    }, o.prototype._setTimeouts = function() {
      var t = this;
      this._timeout && !this._timer && (this._timer = setTimeout(function() {
        t._timeoutError("Timeout of ", t._timeout, "ETIME")
      }, this._timeout)), this._responseTimeout && !this._responseTimeoutTimer && (this._responseTimeoutTimer =
        setTimeout(function() {
          t._timeoutError("Response timeout of ", t._responseTimeout, "ETIMEDOUT")
        }, this._responseTimeout))
    }
  };
  o.p_cFeSYE = function(e, t, n, i, r) {
    n.type = function(e) {
      return e.split(/ *; */).shift()
    }, n.params = function(e) {
      return e.split(/ *; */).reduce(function(e, t) {
        var n = t.split(/ *= */),
          i = n.shift(),
          r = n.shift();
        return i && r && (e[i] = r), e
      }, {})
    }, n.parseLinks = function(e) {
      return e.split(/ *, */).reduce(function(e, t) {
        var n = t.split(/ *; */),
          i = n[0].slice(1, -1);
        return e[n[1].split(/ *= */)[1].slice(1, -1)] = i, e
      }, {})
    }, n.cleanHeader = function(e, t) {
      return delete e["content-type"], delete e["content-length"], delete e["transfer-encoding"], delete e.host,
        t && (delete e.authorization, delete e.cookie), e
    }
  };
  o.fHizszIr = function(t, r, e, i, s) {
    function o(t) {
      if (t) return function(t) {
        for (var r in o.prototype) t[r] = o.prototype[r];
        return t
      }(t)
    }
    var n = t("p_cFeSYE");
    r.exports = o, o.prototype.get = function(t) {
      return this.header[t.toLowerCase()]
    }, o.prototype._setHeaderProperties = function(t) {
      var r = t["content-type"] || "";
      this.type = n.type(r);
      var e = n.params(r);
      for (var i in e) this[i] = e[i];
      this.links = {};
      try {
        t.link && (this.links = n.parseLinks(t.link))
      } catch (t) {}
    }, o.prototype._setStatusProperties = function(t) {
      var r = t / 100 | 0;
      this.status = this.statusCode = t, this.statusType = r, this.info = 1 == r, this.ok = 2 == r, this.redirect =
        3 == r, this.clientError = 4 == r, this.serverError = 5 == r, this.error = (4 == r || 5 == r) && this.toError(),
        this.created = 201 == t, this.accepted = 202 == t, this.noContent = 204 == t, this.badRequest = 400 ==
        t, this.unauthorized = 401 == t, this.notAcceptable = 406 == t, this.forbidden = 403 == t, this.notFound =
        404 == t, this.unprocessableEntity = 422 == t
    }
  };
  o.yCvS6PuM = function(t, e, r, u, n) {
    function s() {
      this._defaults = []
    } ["use", "on", "once", "set", "query", "type", "accept", "auth", "withCredentials", "sortQuery", "retry",
      "ok", "redirects", "timeout", "buffer", "serialize", "parse", "ca", "key", "pfx", "cert"
    ].forEach(function(t) {
      s.prototype[t] = function() {
        return this._defaults.push({
          fn: t,
          arguments: arguments
        }), this
      }
    }), s.prototype._setDefaults = function(t) {
      this._defaults.forEach(function(e) {
        t[e.fn].apply(t, e.arguments)
      })
    }, e.exports = s
  };
  o.LjRpg0Vj = function(t, e, r, n, o) {
    function s(t) {
      if (!w(t)) return t;
      var e = [];
      for (var r in t) i(e, r, t[r]);
      return e.join("&")
    }

    function i(t, e, r) {
      if (null != r)
        if (Array.isArray(r)) r.forEach(function(r) {
          i(t, e, r)
        });
        else if (w(r))
        for (var n in r) i(t, e + "[" + n + "]", r[n]);
      else t.push(encodeURIComponent(e) + "=" + encodeURIComponent(r));
      else null === r && t.push(encodeURIComponent(e))
    }

    function a(t) {
      for (var e, r, n = {}, o = t.split("&"), s = 0, i = o.length; s < i; ++s) - 1 == (r = (e = o[s]).indexOf(
        "=")) ? n[decodeURIComponent(e)] = "" : n[decodeURIComponent(e.slice(0, r))] = decodeURIComponent(e.slice(
        r + 1));
      return n
    }

    function u(t) {
      return /[\/+]json($|[^-\w])/.test(t)
    }

    function p(t) {
      this.req = t, this.xhr = this.req.xhr, this.text = "HEAD" != this.req.method && ("" === this.xhr.responseType ||
          "text" === this.xhr.responseType) || void 0 === this.xhr.responseType ? this.xhr.responseText : null,
        this.statusText = this.req.xhr.statusText;
      var e = this.xhr.status;
      1223 === e && (e = 204), this._setStatusProperties(e), this.header = this.headers = function(t) {
          for (var e, r, n, o, s = t.split(/\r?\n/), i = {}, a = 0, u = s.length; a < u; ++a) - 1 !== (e = (r = s[
            a]).indexOf(":")) && (n = r.slice(0, e).toLowerCase(), o = x(r.slice(e + 1)), i[n] = o);
          return i
        }(this.xhr.getAllResponseHeaders()), this.header["content-type"] = this.xhr.getResponseHeader(
          "content-type"), this._setHeaderProperties(this.header), null === this.text && t._responseType ? this.body =
        this.xhr.response : this.body = "HEAD" != this.req.method ? this._parseBody(this.text ? this.text : this.xhr
          .response) : null
    }

    function h(t, e) {
      var r = this;
      this._query = this._query || [], this.method = t, this.url = e, this.header = {}, this._header = {}, this.on(
        "end",
        function() {
          var t = null,
            e = null;
          try {
            e = new p(r)
          } catch (e) {
            return t = new Error("Parser is unable to parse the response"), t.parse = !0, t.original = e, r.xhr ?
              (t.rawResponse = void 0 === r.xhr.responseType ? r.xhr.responseText : r.xhr.response, t.status =
                r.xhr.status ? r.xhr.status : null, t.statusCode = t.status) : (t.rawResponse = null, t.status =
                null), r.callback(t)
          }
          r.emit("response", e);
          var n;
          try {
            r._isResponseOK(e) || (n = new Error(e.statusText || "Unsuccessful HTTP response"))
          } catch (t) {
            n = t
          }
          n ? (n.original = t, n.response = e, n.status = e.status, r.callback(n, e)) : r.callback(null, e)
        })
    }

    function c(t, e, r) {
      var n = _("DELETE", t);
      return "function" == typeof e && (r = e, e = null), e && n.send(e), r && n.end(r), n
    }
    var l, d = n(t("_YselYzt")),
      f = n(t("qUYrYx_P"));
    "undefined" != typeof window ? l = window : "undefined" != typeof self ? l = self : (console.warn(
      "Using browser-only version of superagent in non-browser environment"), l = void 0);
    var y = t("WhWroRjY"),
      m = t("K9byGaRD"),
      w = t("_VnPJuvk"),
      v = t("fHizszIr"),
      T = t("yCvS6PuM"),
      _ = r = e.exports = function(t, e) {
        return "function" == typeof e ? new r.Request("GET", t).end(e) : 1 == arguments.length ? new r.Request(
          "GET", t) : new r.Request(t, e)
      };
    r.Request = h, _.getXHR = function() {
      if (!(!l.XMLHttpRequest || l.location && "file:" == l.location.protocol && l.ActiveXObject)) return new XMLHttpRequest;
      try {
        return new ActiveXObject("Microsoft.XMLHTTP")
      } catch (t) {}
      try {
        return new ActiveXObject("Msxml2.XMLHTTP.6.0")
      } catch (t) {}
      try {
        return new ActiveXObject("Msxml2.XMLHTTP.3.0")
      } catch (t) {}
      try {
        return new ActiveXObject("Msxml2.XMLHTTP")
      } catch (t) {}
      throw Error("Browser-only version of superagent could not find XHR")
    };
    var x = "".trim ? function(t) {
      return t.trim()
    } : function(t) {
      return t.replace(/(^\s*|\s*$)/g, "")
    };
    _.serializeObject = s, _.parseString = a, _.types = {
      html: "text/html",
      json: "application/json",
      xml: "text/xml",
      urlencoded: "application/x-www-form-urlencoded",
      form: "application/x-www-form-urlencoded",
      "form-data": "application/x-www-form-urlencoded"
    }, _.serialize = {
      "application/x-www-form-urlencoded": s,
      "application/json": f.default
    }, _.parse = {
      "application/x-www-form-urlencoded": a,
      "application/json": JSON.parse
    }, v(p.prototype), p.prototype._parseBody = function(t) {
      var e = _.parse[this.type];
      return this.req._parser ? this.req._parser(this, t) : (!e && u(this.type) && (e = _.parse[
        "application/json"]), e && t && (t.length || t instanceof Object) ? e(t) : null)
    }, p.prototype.toError = function() {
      var t = this.req,
        e = t.method,
        r = t.url,
        n = "cannot " + e + " " + r + " (" + this.status + ")",
        o = new Error(n);
      return o.status = this.status, o.method = e, o.url = r, o
    }, _.Response = p, y(h.prototype), m(h.prototype), h.prototype.type = function(t) {
      return this.set("Content-Type", _.types[t] || t), this
    }, h.prototype.accept = function(t) {
      return this.set("Accept", _.types[t] || t), this
    }, h.prototype.auth = function(t, e, r) {
      1 === arguments.length && (e = ""), "object" === (void 0 === e ? "undefined" : (0, d.default)(e)) && null !==
        e && (r = e, e = ""), r || (r = {
          type: "function" == typeof btoa ? "basic" : "auto"
        });
      return this._auth(t, e, r, function(t) {
        if ("function" == typeof btoa) return btoa(t);
        throw new Error("Cannot use basic auth, btoa is not a function")
      })
    }, h.prototype.query = function(t) {
      return "string" != typeof t && (t = s(t)), t && this._query.push(t), this
    }, h.prototype.attach = function(t, e, r) {
      if (e) {
        if (this._data) throw Error("superagent can't mix .send() and .attach()");
        this._getFormData().append(t, e, r || e.name)
      }
      return this
    }, h.prototype._getFormData = function() {
      return this._formData || (this._formData = new l.FormData), this._formData
    }, h.prototype.callback = function(t, e) {
      if (this._shouldRetry(t, e)) return this._retry();
      var r = this._callback;
      this.clearTimeout(), t && (this._maxRetries && (t.retries = this._retries - 1), this.emit("error", t)), r(
        t, e)
    }, h.prototype.crossDomainError = function() {
      var t = new Error(
        "Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc."
      );
      t.crossDomain = !0, t.status = this.status, t.method = this.method, t.url = this.url, this.callback(t)
    }, h.prototype.buffer = h.prototype.ca = h.prototype.agent = function() {
      return console.warn("This is not supported in browser version of superagent"), this
    }, h.prototype.pipe = h.prototype.write = function() {
      throw Error("Streaming is not supported in browser version of superagent")
    }, h.prototype._isHost = function(t) {
      return t && "object" === (void 0 === t ? "undefined" : (0, d.default)(t)) && !Array.isArray(t) &&
        "[object Object]" !== Object.prototype.toString.call(t)
    }, h.prototype.end = function(t) {
      return this._endCalled && console.warn(
          "Warning: .end() was called twice. This is not supported in superagent"), this._endCalled = !0, this._callback =
        t || function() {}, this._finalizeQueryString(), this._end()
    }, h.prototype._end = function() {
      var t = this,
        e = this.xhr = _.getXHR(),
        r = this._formData || this._data;
      this._setTimeouts(), e.onreadystatechange = function() {
        var r = e.readyState;
        if (r >= 2 && t._responseTimeoutTimer && clearTimeout(t._responseTimeoutTimer), 4 == r) {
          var n;
          try {
            n = e.status
          } catch (t) {
            n = 0
          }
          if (!n) {
            if (t.timedout || t._aborted) return;
            return t.crossDomainError()
          }
          t.emit("end")
        }
      };
      var n = function(e, r) {
        r.total > 0 && (r.percent = r.loaded / r.total * 100), r.direction = e, t.emit("progress", r)
      };
      if (this.hasListeners("progress")) try {
        e.onprogress = n.bind(null, "download"), e.upload && (e.upload.onprogress = n.bind(null, "upload"))
      } catch (t) {}
      try {
        this.username && this.password ? e.open(this.method, this.url, !0, this.username, this.password) : e.open(
          this.method, this.url, !0)
      } catch (t) {
        return this.callback(t)
      }
      if (this._withCredentials && (e.withCredentials = !0), !this._formData && "GET" != this.method && "HEAD" !=
        this.method && "string" != typeof r && !this._isHost(r)) {
        var o = this._header["content-type"],
          s = this._serializer || _.serialize[o ? o.split(";")[0] : ""];
        !s && u(o) && (s = _.serialize["application/json"]), s && (r = s(r))
      }
      for (var i in this.header) null != this.header[i] && this.header.hasOwnProperty(i) && e.setRequestHeader(
        i, this.header[i]);
      return this._responseType && (e.responseType = this._responseType), this.emit("request", this), e.send(
        void 0 !== r ? r : null), this
    }, _.agent = function() {
      return new T
    }, ["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"].forEach(function(t) {
      T.prototype[t.toLowerCase()] = function(e, r) {
        var n = new _.Request(t, e);
        return this._setDefaults(n), r && n.end(r), n
      }
    }), T.prototype.del = T.prototype.delete, _.get = function(t, e, r) {
      var n = _("GET", t);
      return "function" == typeof e && (r = e, e = null), e && n.query(e), r && n.end(r), n
    }, _.head = function(t, e, r) {
      var n = _("HEAD", t);
      return "function" == typeof e && (r = e, e = null), e && n.query(e), r && n.end(r), n
    }, _.options = function(t, e, r) {
      var n = _("OPTIONS", t);
      return "function" == typeof e && (r = e, e = null), e && n.send(e), r && n.end(r), n
    }, _.del = c, _.delete = c, _.patch = function(t, e, r) {
      var n = _("PATCH", t);
      return "function" == typeof e && (r = e, e = null), e && n.send(e), r && n.end(r), n
    }, _.post = function(t, e, r) {
      var n = _("POST", t);
      return "function" == typeof e && (r = e, e = null), e && n.send(e), r && n.end(r), n
    }, _.put = function(t, e, r) {
      var n = _("PUT", t);
      return "function" == typeof e && (r = e, e = null), e && n.send(e), r && n.end(r), n
    }
  };
  o.vQV8GkWk = function(t, e, r, o) {
    ! function(t) {
      "use strict";

      function e(t) {
        if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t)) throw new TypeError(
          "Invalid character in header field name");
        return t.toLowerCase()
      }

      function r(t) {
        return "string" != typeof t && (t = String(t)), t
      }

      function o(t) {
        var e = {
          next: function() {
            var e = t.shift();
            return {
              done: void 0 === e,
              value: e
            }
          }
        };
        return l.iterable && (e[Symbol.iterator] = function() {
          return e
        }), e
      }

      function n(t) {
        this.map = {}, t instanceof n ? t.forEach(function(t, e) {
          this.append(e, t)
        }, this) : Array.isArray(t) ? t.forEach(function(t) {
          this.append(t[0], t[1])
        }, this) : t && Object.getOwnPropertyNames(t).forEach(function(e) {
          this.append(e, t[e])
        }, this)
      }

      function i(t) {
        if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
        t.bodyUsed = !0
      }

      function s(t) {
        return new Promise(function(e, r) {
          t.onload = function() {
            e(t.result)
          }, t.onerror = function() {
            r(t.error)
          }
        })
      }

      function a(t) {
        var e = new FileReader,
          r = s(e);
        return e.readAsArrayBuffer(t), r
      }

      function u(t) {
        if (t.slice) return t.slice(0);
        var e = new Uint8Array(t.byteLength);
        return e.set(new Uint8Array(t)), e.buffer
      }

      function h() {
        return this.bodyUsed = !1, this._initBody = function(t) {
          if (this._bodyInit = t, t)
            if ("string" == typeof t) this._bodyText = t;
            else if (l.blob && Blob.prototype.isPrototypeOf(t)) this._bodyBlob = t;
          else if (l.formData && FormData.prototype.isPrototypeOf(t)) this._bodyFormData = t;
          else if (l.searchParams && URLSearchParams.prototype.isPrototypeOf(t)) this._bodyText = t.toString();
          else if (l.arrayBuffer && l.blob && p(t)) this._bodyArrayBuffer = u(t.buffer), this._bodyInit = new Blob(
            [this._bodyArrayBuffer]);
          else {
            if (!l.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(t) && !b(t)) throw new Error(
              "unsupported BodyInit type");
            this._bodyArrayBuffer = u(t)
          } else this._bodyText = "";
          this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type",
            "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set(
            "content-type", this._bodyBlob.type) : l.searchParams && URLSearchParams.prototype.isPrototypeOf(
            t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
        }, l.blob && (this.blob = function() {
          var t = i(this);
          if (t) return t;
          if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
          if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
          if (this._bodyFormData) throw new Error("could not read FormData body as blob");
          return Promise.resolve(new Blob([this._bodyText]))
        }, this.arrayBuffer = function() {
          return this._bodyArrayBuffer ? i(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(
            a)
        }), this.text = function() {
          var t = i(this);
          if (t) return t;
          if (this._bodyBlob) return function(t) {
            var e = new FileReader,
              r = s(e);
            return e.readAsText(t), r
          }(this._bodyBlob);
          if (this._bodyArrayBuffer) return Promise.resolve(function(t) {
            for (var e = new Uint8Array(t), r = new Array(e.length), o = 0; o < e.length; o++) r[o] =
              String.fromCharCode(e[o]);
            return r.join("")
          }(this._bodyArrayBuffer));
          if (this._bodyFormData) throw new Error("could not read FormData body as text");
          return Promise.resolve(this._bodyText)
        }, l.formData && (this.formData = function() {
          return this.text().then(d)
        }), this.json = function() {
          return this.text().then(JSON.parse)
        }, this
      }

      function f(t, e) {
        var r = (e = e || {}).body;
        if (t instanceof f) {
          if (t.bodyUsed) throw new TypeError("Already read");
          this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new n(t.headers)),
            this.method = t.method, this.mode = t.mode, r || null == t._bodyInit || (r = t._bodyInit, t.bodyUsed = !
              0)
        } else this.url = String(t);
        if (this.credentials = e.credentials || this.credentials || "omit", !e.headers && this.headers || (this.headers =
            new n(e.headers)), this.method = function(t) {
            var e = t.toUpperCase();
            return m.indexOf(e) > -1 ? e : t
          }(e.method || this.method || "GET"), this.mode = e.mode || this.mode || null, this.referrer = null, (
            "GET" === this.method || "HEAD" === this.method) && r) throw new TypeError(
          "Body not allowed for GET or HEAD requests");
        this._initBody(r)
      }

      function d(t) {
        var e = new FormData;
        return t.trim().split("&").forEach(function(t) {
          if (t) {
            var r = t.split("="),
              o = r.shift().replace(/\+/g, " "),
              n = r.join("=").replace(/\+/g, " ");
            e.append(decodeURIComponent(o), decodeURIComponent(n))
          }
        }), e
      }

      function y(t, e) {
        e || (e = {}), this.type = "default", this.status = "status" in e ? e.status : 200, this.ok = this.status >=
          200 && this.status < 300, this.statusText = "statusText" in e ? e.statusText : "OK", this.headers = new n(
            e.headers), this.url = e.url || "", this._initBody(t)
      }
      if (!t.fetch) {
        var l = {
          searchParams: "URLSearchParams" in t,
          iterable: "Symbol" in t && "iterator" in Symbol,
          blob: "FileReader" in t && "Blob" in t && function() {
            try {
              return new Blob, !0
            } catch (t) {
              return !1
            }
          }(),
          formData: "FormData" in t,
          arrayBuffer: "ArrayBuffer" in t
        };
        if (l.arrayBuffer) var c = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]",
            "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]",
            "[object Float32Array]", "[object Float64Array]"
          ],
          p = function(t) {
            return t && DataView.prototype.isPrototypeOf(t)
          },
          b = ArrayBuffer.isView || function(t) {
            return t && c.indexOf(Object.prototype.toString.call(t)) > -1
          };
        n.prototype.append = function(t, o) {
          t = e(t), o = r(o);
          var n = this.map[t];
          this.map[t] = n ? n + "," + o : o
        }, n.prototype.delete = function(t) {
          delete this.map[e(t)]
        }, n.prototype.get = function(t) {
          return t = e(t), this.has(t) ? this.map[t] : null
        }, n.prototype.has = function(t) {
          return this.map.hasOwnProperty(e(t))
        }, n.prototype.set = function(t, o) {
          this.map[e(t)] = r(o)
        }, n.prototype.forEach = function(t, e) {
          for (var r in this.map) this.map.hasOwnProperty(r) && t.call(e, this.map[r], r, this)
        }, n.prototype.keys = function() {
          var t = [];
          return this.forEach(function(e, r) {
            t.push(r)
          }), o(t)
        }, n.prototype.values = function() {
          var t = [];
          return this.forEach(function(e) {
            t.push(e)
          }), o(t)
        }, n.prototype.entries = function() {
          var t = [];
          return this.forEach(function(e, r) {
            t.push([r, e])
          }), o(t)
        }, l.iterable && (n.prototype[Symbol.iterator] = n.prototype.entries);
        var m = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
        f.prototype.clone = function() {
          return new f(this, {
            body: this._bodyInit
          })
        }, h.call(f.prototype), h.call(y.prototype), y.prototype.clone = function() {
          return new y(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new n(this.headers),
            url: this.url
          })
        }, y.error = function() {
          var t = new y(null, {
            status: 0,
            statusText: ""
          });
          return t.type = "error", t
        };
        var w = [301, 302, 303, 307, 308];
        y.redirect = function(t, e) {
          if (-1 === w.indexOf(e)) throw new RangeError("Invalid status code");
          return new y(null, {
            status: e,
            headers: {
              location: t
            }
          })
        }, t.Headers = n, t.Request = f, t.Response = y, t.fetch = function(t, e) {
          return new Promise(function(r, o) {
            var i = new f(t, e),
              s = new XMLHttpRequest;
            s.onload = function() {
                var t = {
                  status: s.status,
                  statusText: s.statusText,
                  headers: function(t) {
                    var e = new n;
                    return t.split(/\r?\n/).forEach(function(t) {
                      var r = t.split(":"),
                        o = r.shift().trim();
                      if (o) {
                        var n = r.join(":").trim();
                        e.append(o, n)
                      }
                    }), e
                  }(s.getAllResponseHeaders() || "")
                };
                t.url = "responseURL" in s ? s.responseURL : t.headers.get("X-Request-URL");
                var e = "response" in s ? s.response : s.responseText;
                r(new y(e, t))
              }, s.onerror = function() {
                o(new TypeError("Network request failed"))
              }, s.ontimeout = function() {
                o(new TypeError("Network request failed"))
              }, s.open(i.method, i.url, !0), "include" === i.credentials && (s.withCredentials = !0),
              "responseType" in s && l.blob && (s.responseType = "blob"), i.headers.forEach(function(t, e) {
                s.setRequestHeader(e, t)
              }), s.send(void 0 === i._bodyInit ? null : i._bodyInit)
          })
        }, t.fetch.polyfill = !0
      }
    }("undefined" != typeof self ? self : this)
  };
  o.b732DUMY = function(e, t, r, a, n) {
    Object.defineProperty(r, "__esModule", {
      value: !0
    });
    var o = function() {
      try {
        return JSON.parse(window.abtest_parameters || "{}").modal || {}
      } catch (e) {
        return {}
      }
    }();
    r.default = o
  };
  o.oYLqwKZ3 = function(e, t, o, n, i) {
    function r() {
      return p.default.browser.liteh5 || p.default.browser.toutiao
    }

    function a(e) {
      var t = void 0,
        o = e.schemaStart || "snssdk",
        n = e.app || w.default.request("app") || "news_article",
        i = {
          news_weather: 1261,
          news_calendar: 1221,
          news_article: {
            ios: 141,
            android: 143
          },
          video_article: 32,
          hotsoon: 1112,
          news_article_lite: 35,
          f100: 1370
        };
      return t = i[n] instanceof Object ? i[n][p.default.os.ios ? "ios" : "android"] : i[n], "" + o + t + "://"
    }

    function d(e) {
      return e || (e = "click_weixin_rf_home"), "cpm" === w.default.request("utm_medium") && "weibo_tt" === w.default
        .request("utm_source") && (e = "click_wap_rf_weibo_tt"), "wap_search" === w.default.request("utm_medium") &&
        "hupu" === w.default.request("utm_source") && (e = "click_wap_search_" + w.default.request("utm_source")),
        "ug_sms" === w.default.request("utm_source") && (e = "click_wap_" + w.default.request("utm_source") + "_" +
          w.default.request("utm_medium")), e
    }

    function u(e) {
      var t = function(e) {
          return {
            __type__: "wap",
            position: e.code_id,
            iid: w.default.request("iid") || void 0,
            wxshare_count: w.default.request("wxshare_count") || void 0,
            parent_group_id: window.group_id,
            parent_rid: window.request_id,
            site_id: window.site_id,
            group_id: e.id,
            share_app_name: b.share_app_name || void 0,
            traffic_type: p.default.browser.weixin ? "weixin" : "wap",
            page_type: window.isNewVideoPage ? "video" : "article",
            distance: e.distance || void 0
          }
        }(e),
        o = d(e.gdLabel),
        n = {
          comment: "comment",
          mediaProfile: "pgc_profile",
          home: "home",
          videoProfile: "profile",
          profile: "profile",
          add_friend: "add_friend"
        } [e.type || "home"];
      return (0, _.default)(t, {
        event: n,
        label: o
      }), t
    }

    function s(e) {
      function t(e, t) {
        var o = null;
        return t && t.isNewVideo && (o = 64), o && (e += "&flags=" + o), e
      }
      if (e.nativeLink) return e.nativeLink;
      var o = e.scheme || a(e),
        n = d(e.gdLabel),
        i = e.type || "home",
        r = e.id || window.group_id,
        l = "",
        c = (0, f.default)(u(e));
      switch (i) {
        case "detail":
          l = t(l = o + "detail?" + w.default.toQuery({
            groupid: r,
            gd_label: n,
            gd_ext_json: encodeURIComponent(c)
          }), e);
          break;
        case "comment":
          l = t(l = o + "detail?" + w.default.toQuery({
            groupid: r,
            showcomment: 1,
            gd_label: n,
            gd_ext_json: encodeURIComponent(c)
          }), e);
          break;
        case "mediaProfile":
          l = o + "media_account?" + w.default.toQuery({
            media_id: r,
            growth_from: n,
            gd_ext_json: encodeURIComponent(c)
          });
          break;
        case "videoProfile":
          l = o + "pgcprofile?" + w.default.toQuery({
            user_id: r,
            growth_from: n,
            gd_ext_json: encodeURIComponent(c)
          });
          break;
        case "home":
          l = o + "home/news?" + w.default.toQuery({
            growth_from: n,
            gd_ext_json: encodeURIComponent(c)
          });
          break;
        case "joke":
          l = o + "essay_detail?" + w.default.toQuery({
            groupid: r
          });
          break;
        case "profile":
          l = o + "profile?" + w.default.toQuery({
            uid: r,
            source: e.source,
            from_page: e.from_page,
            gd_ext_json: encodeURIComponent(c)
          });
          break;
        case "add_friend":
          l = o + "add_friend?" + w.default.toQuery({
            profile_user_id: r,
            from_page: e.from_page,
            gd_ext_json: encodeURIComponent(c)
          });
          break;
        case "search":
          l = o + "search?" + w.default.toQuery({
            keyword: encodeURIComponent(e.keyword || "")
          });
          break;
        case "webview":
          l = o + "webview?" + w.default.toQuery(e.webviewUrlParams || {})
      }
      return "hotsoon" === e.app && (l = o + "item?" + w.default.toQuery({
          id: r,
          gd_label: n,
          gd_ext_json: c
        })), e.item_id && (l += "&aggr_type=2&item_id=" + e.item_id), l += "&needlaunchlog=1", "profile" === i &&
        (l = l + "&" + w.default.toQuery({
          redirect: function(e) {
            var t = s((0, _.default)({}, e, {
              type: "add_friend"
            }));
            return p.default.os.android && (t = encodeURIComponent(t)), t
          }(e)
        })), l
    }

    function l(e) {
      return w.default.cookie(e) || w.default.request(e) || ""
    }
    var c = n(e("_l59FVJy")),
      f = n(e("qUYrYx_P")),
      _ = n(e("rCvC6Owx")),
      p = n(e("k65Ijy_9")),
      w = n(e("E7MLSnqQ")),
      m = n(e("LjRpg0Vj"));
    e("vQV8GkWk");
    var g = e("b732DUMY");
    e("KO60hBy0").polyfill(), window.loadimg = function() {}, window.errorimg = function() {};
    var h = ["m.toutiaocdn.cn", "m.toutiaocdn.com", "m.toutiaolite.com"],
      v = function() {
        return {
          setItem: function(e, t) {
            if (!w.default.sessionStorageEnabled()) return null;
            try {
              sessionStorage.setItem(e, t)
            } catch (e) {}
          },
          getItem: function(e) {
            return w.default.sessionStorageEnabled() ? sessionStorage.getItem(e) : null
          }
        }
      }(),
      b = {
        share_iid: w.default.request("iid"),
        share_app_name: w.default.request("app"),
        wx_share_count: parseInt(w.default.request("wxshare_count")) || 0
      },
      y = function() {
        var e = w.default.cookie("tt_webid");
        if (!e) return null;
        var t = void 0;
        return t = parseInt(e).toString() === e ? e : parseInt(e / Math.pow(2, 32)).toString(), console.log(t), t
      }(),
      x = "1" === w.default.request("from_wxapp"),
      k = "3" === window.mediaType,
      q = function() {
        var e = !1,
          t = !1,
          o = !1,
          n = !1,
          i = !1;
        return window.abtest_version_name && (window.abtest_version_name.indexOf("631369") > -1 && (e = !0),
          window.abtest_version_name.indexOf("631370") > -1 && (t = !0), window.abtest_version_name.indexOf(
            "631371") > -1 && (o = !0), window.abtest_version_name.indexOf("748531") > -1 && (i = !0), window.abtest_version_name
          .indexOf("748532") > -1 && (n = !0)), {
          hotCardControl: e,
          hotCardTest1: t,
          hotCardTest2: o,
          brandsTest1: n,
          brandsControl: i
        }
      }(),
      I = {
        scrollTop: function() {
          window.scrollTo(0, 0)
        },
        isAppInstalled: r,
        getScheme: a,
        getNativeLink: s,
        getUTMValue: l,
        getAppTrackData: function() {
          return {
            __type__: "app_track",
            resolution: window.screen.availWidth * window.devicePixelRatio + "*" + window.screen.availHeight *
              window.devicePixelRatio,
            webid: w.default.cookie("tt_webid") || "",
            utm_source: l("utm_source")
          }
        },
        confused: function(e) {
          var t = function(e) {
              for (var t = [], o = 0; o < e; o++) {
                var n = String.fromCharCode(Math.floor(26 * Math.random()) + 65);
                Math.ceil(10 * Math.random()) % 2 == 1 && (n = n.toLowerCase()), t.push(n)
              }
              return t.join("")
            },
            o = function() {
              return Math.ceil(15 * Math.random())
            },
            n = {};
          return e.forEach(function(e) {
            var i = t(o()) + t(o());
            n[e] = i
          }), {
            map: n
          }
        },
        formatDate: function(e, t) {
          var o = {
            "M+": e.getMonth() + 1,
            "d+": e.getDate(),
            "h+": e.getHours(),
            "m+": e.getMinutes(),
            "s+": e.getSeconds(),
            "q+": Math.floor((e.getMonth() + 3) / 3),
            S: e.getMilliseconds()
          };
          /(y+)/.test(t) && (t = t.replace(RegExp.$1, (e.getFullYear() + "").substr(4 - RegExp.$1.length)));
          for (var n in o) new RegExp("(" + n + ")").test(t) && (t = t.replace(RegExp.$1, 1 === RegExp.$1.length ?
            o[n] : ("00" + o[n]).substr(("" + o[n]).length)));
          return t
        },
        getAppName: function() {
          var t = {
            video_article: function() {
              return e("_6BrwHiQ").os.ios ? "今日头条" : "头条视频"
            }
          } [e("_6BrwHiQ").request("app")] || "今日头条";
          return e("_6BrwHiQ").isFunction(t) && (t = t()), t
        },
        throttle: function(e, t) {
          var o = void 0,
            n = void 0,
            i = void 0,
            r = void 0;
          return function() {
            var a = [].slice.call(arguments),
              d = this;
            i = Date.now();
            var u = function() {
              n = Date.now(), o = null, e.apply(d, a)
            };
            clearTimeout(o), void 0 !== n ? (r = i - n) >= t ? u() : o = setTimeout(u, t) : u()
          }
        },
        sendActionLog: function(e) {
          var t = {
            code_id: e.code_id,
            group_id: e.group_id,
            distance: parseInt(e.distance || 0),
            position: e.position || ""
          };
          window.ttReport && window.ttReport.sendClickLog(t)
        },
        getOpenUrl: function(e) {
          var t = "sslocal://",
            o = e.type || "home",
            n = e.id || window.group_id,
            i = "";
          switch (o) {
            case "detail":
              i = t + "detail?groupid=" + n;
              break;
            case "comment":
              i = t + "detail?groupid=" + n + "&showcomment=1";
              break;
            case "mediaProfile":
              i = t + "media_account?media_id=" + n;
              break;
            case "home":
              i = t + "home";
              break;
            case "profile":
              i = t + "profile?uid" + n + "&source=weixin_friend_card&from_page=weixin_friend_card";
              break;
            case "add_friend":
              i = t + "add_friend?profile_user_id" + n + "&from_page=weixin_friend_card"
          }
          return i
        },
        initAD: function() {
          m.default.get("/i" + window.item_id + "/ad/" + location.search).end(function(t, o) {
            if (t) return !1;
            var n = null,
              i = null,
              r = JSON.parse(o.text).ad;
            r && r.length && (n = !!r[0] && r[0], i = !!r[1] && r[1]);
            var a = void 0;
            if (n && "undefined" != typeof registerAd && "function" == typeof registerAd) {
              if (a = p.default.browser.weixin ? "backflowAd" : "detailAd", e("_6BrwHiQ")("#" + a).find(
                  ".detail-ad").length) return;
              window.registerAd(a, n, "first")
            }
            if (i && !i.app && "undefined" != typeof registerAd && "function" == typeof registerAd) {
              if (a = p.default.browser.weixin ? "backflowAd2" : "detailAd2", e("_6BrwHiQ")("#" + a).find(
                  ".detail-ad").length) return;
              window.registerAd(a, i, "last")
            }
            if (n || i) {
              var d = [];
              n && d.push(1), i && d.push(2)
            }
          })
        },
        initScrollEvents: function() {
          var t = void 0,
            o = 100 * (window.responsive || {
              dpr: 1
            }).dpr;
          e("_6BrwHiQ")(window).on("scroll load afterflow", function(n) {
            var i = document.body.scrollHeight;
            (window.scrollY || window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop) >=
            i - window.innerHeight - o && e("_6BrwHiQ")(window).trigger("scrollBottom", n.type), "scroll" ===
              n.type && (t && clearTimeout(t), t = setTimeout(function() {
                e("_6BrwHiQ")(window).trigger("scrollEnd")
              }, 300))
          })
        },
        unshiftListPage: function() {
          var e = location.href,
            t = location.search.slice(1),
            o = "weixinlist",
            n = 0,
            i = "//" + location.hostname;
          if (window.violateWeixinPolicy || x || !p.default.browser.weixin || r() || -1 === ["news_article",
              "news_article_lite"
            ].indexOf(w.default.request("app"))) return !1;
          w.default.sessionStorageEnabled() && (n = sessionStorage.getItem("back_count")), h.indexOf(location.hostname) >
            -1 && (o = "goback", i += "/tpage/goback/", i = w.default.appendQuery(i, "weixin_goback=1")), i = w
            .default.appendQuery(i, "W2atIF=1"), i = w.default.appendQuery(i, "weixin_list=0"), i = w.default.appendQuery(
              i, t), n || (w.default.sessionStorageEnabled() && (n = sessionStorage.setItem("back_count", 1)),
              history.replaceState({
                page: o,
                href: i
              }, null, i), history.pushState({
                page: "weixindetail"
              }, null, e)), window.onpopstate = function(e) {
              var t = e.state;
              t && ["weixinlist", "goback"].indexOf(t.page) > -1 && location.reload()
            }
        },
        gotoSurlDownload: function(e) {
          setTimeout(function() {
            location.href = e
          }, 100)
        },
        controlBanner: function() {
          var e = y,
            t = null !== e ? parseInt(e) % 100 : void 0;
          return !isNaN(t) && t <= 29 && t >= 0
        },
        countFormat: function(e) {
          return (e -= 0) >= 1e4 && (-1 !== (e = (e /= 1e4).toFixed(1)).indexOf(".0") && (e = e.replace(".0",
            "")), e += "万"), e
        },
        needDownloadApp: function(e) {
          return e = e || {}, !r() && !1 !== e.downloadWhenClickRelateNews
        },
        getTTWebID: y,
        getDownloadOSInfo: function() {
          return {
            os: p.default.os.android ? "android" : p.default.os.ios ? "ios" : "",
            traffic_type: p.default.browser.weixin ? "weixin" : "wap"
          }
        },
        handleFirstInViewDebounce: function(e) {
          var t = e.type && e.type.toLocaleLowerCase() || "apponly",
            o = Number(e.index) + 1 || 0;
          if (!w.default.request("ad_surl")) {
            var n = {
              distance: parseInt(e.distance || 0),
              group_id: e.group_id,
              code_id: e.code_id
            };
            window.ttReport && window.ttReport.sendImpressionLog(n), window.maevent(t, "pv", o.toString())
          }
        },
        shortLinkPrefix: "http://d.toutiao.com",
        formatDuration: function(e) {
          if (!e) return "";
          var t = Math.floor(e / 60),
            o = e % 60;
          return t < 10 && (t = "0" + t), o < 10 && (o = "0" + o), t + ":" + o
        },
        ttSessionStorage: v,
        getExtraData: function(e) {
          var t = e.code_id,
            o = void 0 === t ? 0 : t,
            n = e.group_id,
            i = void 0 === n ? 0 : n,
            r = e.type,
            a = void 0 === r ? "" : r,
            d = e.position,
            u = void 0 === d ? "" : d;
          return window.ttReport ? window.ttReport.getExtraData({
            params: {
              group_id: i,
              code_id: o,
              city: encodeURIComponent(window.city),
              abtest_version_name: window.abtest_version_name || "",
              position: u && {
                topBanner: "top_banner",
                relationCard: "friend_card",
                bottomBanner: "bottom_banner",
                commentBtn: "media_user",
                articleBtn: "main_content"
              } [u] || "",
              ip: window.ip || ""
            },
            type: a
          }) : {}
        },
        getShareInfo: b,
        isFromWxapp: x,
        notShowRecommendation: k,
        formatQueryParmas: function(e, t) {
          var o = [],
            n = "";
          return "from" === e && (o = ["singlemessage", "groupmessage", "timeline", "qrcode", "qrcode1",
            "qrcode7", "qrcode8", "qrcode_sysshare_pyq", "mobile_qq qzone"
          ]), "app" === e && (o = ["news_article", "news_article_lite", "f100", "video_article"]), o.forEach(
            function(e) {
              (t || "").indexOf(e) > -1 && (n = e)
            }), n
        },
        getTestDownloadUrl: function(e) {
          var t = (0, c.default)(q).filter(function(e) {
            return !0 === q[e]
          });
          if (0 === t.length) return "";
          var o = t[0],
            n = g.TEST_URL_CONFIG[o];
          if (n) {
            var i = n[e] || n.default;
            return i = q.brandsTest1 && i instanceof Object ? i[window.articleType] ||
              "https://d.toutiao.com/MQwc/" : i instanceof Object ? i[p.default.os.ios ? "ios" : "android"] : i
          }
          return ""
        },
        abTest: q
      };
    t.exports = I
  };
  o.tlEcX8gd = function(r, t, e, n, o) {
    var u = n(r("_l59FVJy")),
      a = n(r("_YselYzt")),
      c = n(r("dAbh41uH")),
      f = Object.prototype.hasOwnProperty,
      i = function() {
        for (var r = [], t = 0; t < 256; ++t) r.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
        return r
      }(),
      l = function(r, t) {
        for (var e = t && t.plainObjects ? (0, c.default)(null) : {}, n = 0; n < r.length; ++n) void 0 !== r[n] &&
          (e[n] = r[n]);
        return e
      };
    t.exports = {
      arrayToObject: l,
      assign: function(r, t) {
        return (0, u.default)(t).reduce(function(r, e) {
          return r[e] = t[e], r
        }, r)
      },
      compact: function(r) {
        for (var t = [{
            obj: {
              o: r
            },
            prop: "o"
          }], e = [], n = 0; n < t.length; ++n)
          for (var o = t[n], c = o.obj[o.prop], f = (0, u.default)(c), i = 0; i < f.length; ++i) {
            var l = f[i],
              p = c[l];
            "object" === (void 0 === p ? "undefined" : (0, a.default)(p)) && null !== p && -1 === e.indexOf(p) &&
              (t.push({
                obj: c,
                prop: l
              }), e.push(p))
          }
        return function(r) {
          for (var t; r.length;) {
            var e = r.pop();
            if (t = e.obj[e.prop], Array.isArray(t)) {
              for (var n = [], o = 0; o < t.length; ++o) void 0 !== t[o] && n.push(t[o]);
              e.obj[e.prop] = n
            }
          }
          return t
        }(t)
      },
      decode: function(r) {
        try {
          return decodeURIComponent(r.replace(/\+/g, " "))
        } catch (t) {
          return r
        }
      },
      encode: function(r) {
        if (0 === r.length) return r;
        for (var t = "string" == typeof r ? r : String(r), e = "", n = 0; n < t.length; ++n) {
          var o = t.charCodeAt(n);
          45 === o || 46 === o || 95 === o || 126 === o || o >= 48 && o <= 57 || o >= 65 && o <= 90 || o >=
            97 && o <= 122 ? e += t.charAt(n) : o < 128 ? e += i[o] : o < 2048 ? e += i[192 | o >> 6] + i[128 |
              63 & o] : o < 55296 || o >= 57344 ? e += i[224 | o >> 12] + i[128 | o >> 6 & 63] + i[128 | 63 &
              o] : (n += 1, o = 65536 + ((1023 & o) << 10 | 1023 & t.charCodeAt(n)), e += i[240 | o >> 18] +
              i[128 | o >> 12 & 63] + i[128 | o >> 6 & 63] + i[128 | 63 & o])
        }
        return e
      },
      isBuffer: function(r) {
        return null !== r && void 0 !== r && !!(r.constructor && r.constructor.isBuffer && r.constructor.isBuffer(
          r))
      },
      isRegExp: function(r) {
        return "[object RegExp]" === Object.prototype.toString.call(r)
      },
      merge: function r(t, e, n) {
        if (!e) return t;
        if ("object" !== (void 0 === e ? "undefined" : (0, a.default)(e))) {
          if (Array.isArray(t)) t.push(e);
          else {
            if ("object" !== (void 0 === t ? "undefined" : (0, a.default)(t))) return [t, e];
            (n.plainObjects || n.allowPrototypes || !f.call(Object.prototype, e)) && (t[e] = !0)
          }
          return t
        }
        if ("object" !== (void 0 === t ? "undefined" : (0, a.default)(t))) return [t].concat(e);
        var o = t;
        return Array.isArray(t) && !Array.isArray(e) && (o = l(t, n)), Array.isArray(t) && Array.isArray(e) ?
          (e.forEach(function(e, o) {
            f.call(t, o) ? t[o] && "object" === (0, a.default)(t[o]) ? t[o] = r(t[o], e, n) : t.push(e) :
              t[o] = e
          }), t) : (0, u.default)(e).reduce(function(t, o) {
            var u = e[o];
            return f.call(t, o) ? t[o] = r(t[o], u, n) : t[o] = u, t
          }, o)
      }
    }
  };
  o.ujC4svem = function(t, r, e, n, o) {
    var C = String.prototype.replace;
    r.exports = {
      default: "RFC3986",
      formatters: {
        RFC1738: function(t) {
          return C.call(t, /%20/g, "+")
        },
        RFC3986: function(t) {
          return t
        }
      },
      RFC1738: "RFC1738",
      RFC3986: "RFC3986"
    }
  };
  o.PZmk1zk3 = function(e, r, n, t, o) {
    var i = t(e("_YselYzt")),
      l = t(e("_l59FVJy")),
      a = e("tlEcX8gd"),
      f = e("ujC4svem"),
      c = {
        brackets: function(e) {
          return e + "[]"
        },
        indices: function(e, r) {
          return e + "[" + r + "]"
        },
        repeat: function(e) {
          return e
        }
      },
      u = Date.prototype.toISOString,
      s = {
        delimiter: "&",
        encode: !0,
        encoder: a.encode,
        encodeValuesOnly: !1,
        serializeDate: function(e) {
          return u.call(e)
        },
        skipNulls: !1,
        strictNullHandling: !1
      },
      d = function e(r, n, t, o, i, f, c, u, d, y, p, v) {
        var m = r;
        if ("function" == typeof c) m = c(n, m);
        else if (m instanceof Date) m = y(m);
        else if (null === m) {
          if (o) return f && !v ? f(n, s.encoder) : n;
          m = ""
        }
        if ("string" == typeof m || "number" == typeof m || "boolean" == typeof m || a.isBuffer(m)) {
          if (f) {
            return [p(v ? n : f(n, s.encoder)) + "=" + p(f(m, s.encoder))]
          }
          return [p(n) + "=" + p(String(m))]
        }
        var g = [];
        if (void 0 === m) return g;
        var b;
        if (Array.isArray(c)) b = c;
        else {
          var k = (0, l.default)(m);
          b = u ? k.sort(u) : k
        }
        for (var w = 0; w < b.length; ++w) {
          var D = b[w];
          i && null === m[D] || (g = Array.isArray(m) ? g.concat(e(m[D], t(n, D), t, o, i, f, c, u, d, y, p, v)) :
            g.concat(e(m[D], n + (d ? "." + D : "[" + D + "]"), t, o, i, f, c, u, d, y, p, v)))
        }
        return g
      };
    r.exports = function(e, r) {
      var n = e,
        t = r ? a.assign({}, r) : {};
      if (null !== t.encoder && void 0 !== t.encoder && "function" != typeof t.encoder) throw new TypeError(
        "Encoder has to be a function.");
      var o = void 0 === t.delimiter ? s.delimiter : t.delimiter,
        u = "boolean" == typeof t.strictNullHandling ? t.strictNullHandling : s.strictNullHandling,
        y = "boolean" == typeof t.skipNulls ? t.skipNulls : s.skipNulls,
        p = "boolean" == typeof t.encode ? t.encode : s.encode,
        v = "function" == typeof t.encoder ? t.encoder : s.encoder,
        m = "function" == typeof t.sort ? t.sort : null,
        g = void 0 !== t.allowDots && t.allowDots,
        b = "function" == typeof t.serializeDate ? t.serializeDate : s.serializeDate,
        k = "boolean" == typeof t.encodeValuesOnly ? t.encodeValuesOnly : s.encodeValuesOnly;
      if (void 0 === t.format) t.format = f.default;
      else if (!Object.prototype.hasOwnProperty.call(f.formatters, t.format)) throw new TypeError(
        "Unknown format option provided.");
      var w, D, N = f.formatters[t.format];
      "function" == typeof t.filter ? n = (D = t.filter)("", n) : Array.isArray(t.filter) && (w = D = t.filter);
      var h = [];
      if ("object" !== (void 0 === n ? "undefined" : (0, i.default)(n)) || null === n) return "";
      var O;
      O = t.arrayFormat in c ? t.arrayFormat : "indices" in t ? t.indices ? "indices" : "repeat" : "indices";
      var z = c[O];
      w || (w = (0, l.default)(n)), m && w.sort(m);
      for (var A = 0; A < w.length; ++A) {
        var V = w[A];
        y && null === n[V] || (h = h.concat(d(n[V], V, z, u, y, p ? v : null, D, m, g, b, N, k)))
      }
      var j = h.join(o),
        E = !0 === t.addQueryPrefix ? "?" : "";
      return j.length > 0 ? E + j : ""
    }
  };
  o.VTd_GRvo = function(e, t, r, l, i) {
    var o = l(e("_l59FVJy")),
      a = l(e("dAbh41uH")),
      n = e("tlEcX8gd"),
      c = Object.prototype.hasOwnProperty,
      d = {
        allowDots: !1,
        allowPrototypes: !1,
        arrayLimit: 20,
        decoder: n.decode,
        delimiter: "&",
        depth: 5,
        parameterLimit: 1e3,
        plainObjects: !1,
        strictNullHandling: !1
      },
      p = function(e, t, r) {
        if (e) {
          var l = r.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
            i = /(\[[^[\]]*])/g,
            o = /(\[[^[\]]*])/.exec(l),
            n = o ? l.slice(0, o.index) : l,
            d = [];
          if (n) {
            if (!r.plainObjects && c.call(Object.prototype, n) && !r.allowPrototypes) return;
            d.push(n)
          }
          for (var p = 0; null !== (o = i.exec(l)) && p < r.depth;) {
            if (p += 1, !r.plainObjects && c.call(Object.prototype, o[1].slice(1, -1)) && !r.allowPrototypes)
              return;
            d.push(o[1])
          }
          return o && d.push("[" + l.slice(o.index) + "]"),
            function(e, t, r) {
              for (var l = t, i = e.length - 1; i >= 0; --i) {
                var o, n = e[i];
                if ("[]" === n) o = (o = []).concat(l);
                else {
                  o = r.plainObjects ? (0, a.default)(null) : {};
                  var c = "[" === n.charAt(0) && "]" === n.charAt(n.length - 1) ? n.slice(1, -1) : n,
                    d = parseInt(c, 10);
                  !isNaN(d) && n !== c && String(d) === c && d >= 0 && r.parseArrays && d <= r.arrayLimit ? (o = [])[
                    d] = l : o[c] = l
                }
                l = o
              }
              return l
            }(d, t, r)
        }
      };
    t.exports = function(e, t) {
      var r = t ? n.assign({}, t) : {};
      if (null !== r.decoder && void 0 !== r.decoder && "function" != typeof r.decoder) throw new TypeError(
        "Decoder has to be a function.");
      if (r.ignoreQueryPrefix = !0 === r.ignoreQueryPrefix, r.delimiter = "string" == typeof r.delimiter || n.isRegExp(
          r.delimiter) ? r.delimiter : d.delimiter, r.depth = "number" == typeof r.depth ? r.depth : d.depth, r
        .arrayLimit = "number" == typeof r.arrayLimit ? r.arrayLimit : d.arrayLimit, r.parseArrays = !1 !== r.parseArrays,
        r.decoder = "function" == typeof r.decoder ? r.decoder : d.decoder, r.allowDots = "boolean" == typeof r
        .allowDots ? r.allowDots : d.allowDots, r.plainObjects = "boolean" == typeof r.plainObjects ? r.plainObjects :
        d.plainObjects, r.allowPrototypes = "boolean" == typeof r.allowPrototypes ? r.allowPrototypes : d.allowPrototypes,
        r.parameterLimit = "number" == typeof r.parameterLimit ? r.parameterLimit : d.parameterLimit, r.strictNullHandling =
        "boolean" == typeof r.strictNullHandling ? r.strictNullHandling : d.strictNullHandling, "" === e ||
        null === e || void 0 === e) return r.plainObjects ? (0, a.default)(null) : {};
      for (var l = "string" == typeof e ? function(e, t) {
          for (var r = {}, l = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, i = t.parameterLimit === 1 / 0 ?
              void 0 : t.parameterLimit, o = l.split(t.delimiter, i), a = 0; a < o.length; ++a) {
            var n, p, s = o[a],
              u = s.indexOf("]="),
              f = -1 === u ? s.indexOf("=") : u + 1; - 1 === f ? (n = t.decoder(s, d.decoder), p = t.strictNullHandling ?
                null : "") : (n = t.decoder(s.slice(0, f), d.decoder), p = t.decoder(s.slice(f + 1), d.decoder)),
              c.call(r, n) ? r[n] = [].concat(r[n]).concat(p) : r[n] = p
          }
          return r
        }(e, r) : e, i = r.plainObjects ? (0, a.default)(null) : {}, s = (0, o.default)(l), u = 0; u < s.length; ++
        u) {
        var f = s[u],
          y = p(f, l[f], r);
        i = n.merge(i, y, r)
      }
      return n.compact(i)
    }
  };
  o.qopIkZBp = function(o, r, s, p, t) {
    var a = o("PZmk1zk3"),
      e = o("VTd_GRvo"),
      f = o("ujC4svem");
    r.exports = {
      formats: f,
      parse: e,
      stringify: a
    }
  };
  o.XuoRHdPA = function(o, a, e, n, d) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.appDownloadWithIos = e.appDownloadWithAdr = e.appDownloadWithYYB = void 0;
    var t = n(o("qUYrYx_P")),
      i = n(o("rCvC6Owx")),
      l = n(o("k65Ijy_9")),
      p = n(o("oYLqwKZ3")),
      r = n(o("qopIkZBp")),
      f = n(o("E7MLSnqQ"));
    e.appDownloadWithYYB = function(o) {
      if (o.preventAppDownload) return !1;
      var a = l.default.os.android ? "android_scheme" : "ios_scheme",
        e = f.default.appendQuery(o.downloadLink, a + "=" + encodeURIComponent(o.nativeLink));
      (r.default.parse(o.downloadLink.split("?")[1]) || {})[a] && (e = o.downloadLink), location.href = e
    }, e.appDownloadWithAdr = function(a) {
      var e = a.downloadLink;
      window.GTMValue && !window.GTMValue.preventDongTaiDaBao && (e = function(o) {
        var a = o.downloadLink,
          e = {
            openurl: o.openUrl || p.default.getOpenUrl(o),
            postdata: [].concat(o.postdata || [], p.default.getAppTrackData()).concat((0, i.default)(p.default
              .getDownloadOSInfo(), o.extraData))
          },
          n = f.default.appendQuery(a, "append=" + encodeURIComponent((0, t.default)(e))),
          d = document.createElement("a");
        return d.href = a, r.default.parse(d.search.slice(1)).append && (n = a), n
      }(a)), a.isNeedDownloadFromYYB ? function(a) {
        setTimeout(function() {
          o("_6BrwHiQ")("body").append("<iframe id='app_dl_iframe' src='" + a.yybHref +
            "' style='display:none'></iframe>"), setTimeout(function() {
            o("_6BrwHiQ")("iframe#app_dl_iframe").remove(), location.href = a.fallback
          }, 1500)
        }, 100)
      }({
        yybHref: a.yybLink,
        fallback: e
      }) : location.href = e
    }, e.appDownloadWithIos = function(o) {
      location.href = o.downloadLink
    }
  };
  o._bS5TFau = function(e, i, n, o, a) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.wap2AppWithAdr = n.wap2AppWithIos = void 0;
    var r = o(e("k65Ijy_9")),
      t = o(e("E7MLSnqQ"));
    n.wap2AppWithIos = function(e) {
      if (e.preventWap2App) return !1;
      if (r.default.os.version >= 9 && !r.default.browser.qqbrowser && e.universalLink) {
        var i = e.universalLink,
          n = "click_" + (r.default.browser.weixin ? "weixin" : "wap") + "_rf_ios_deeplink",
          o = e.nativeLink; - 1 === o.indexOf("gd_label") && -1 === o.indexOf("gd_ext_json") && (o +=
          "&gd_label=" + n);
        var a = {
          group_id: "",
          item_id: "",
          scheme: encodeURIComponent(o),
          next: encodeURIComponent(e.downloadLink)
        };
        i += t.default.toQuery(a), location.href = i, r.default.browser.safari && !window.isNewVideoPage && [
          "news_article", "news_article_lite"
        ].indexOf(e.app) > -1 && setTimeout(function() {
          location.href = "//m.toutiao.com/wap2app_prompt/?utm_source=rolldown"
        }, 2e3)
      } else location.href = e.nativeLink
    }, n.wap2AppWithAdr = function(i) {
      if (i.preventWap2App) return !1;
      ! function(i) {
        e("_6BrwHiQ")("#app_iframe").remove(), e("_6BrwHiQ")("body").append("<iframe id='app_iframe' src='" + i +
          "' style='display:none'></iframe>")
      }(i.nativeLink)
    }
  };
  d("PBdR7_FU", "//s1.pstatp.com/growth/mobile_detail/image/banner_toutiao_icon.6NgPGihF.png");
  o.SkIUwqzZ = function(o, a, n, d, i) {
    var t = {
      app: "news_article",
      appName: "今日头条",
      supportClientArr: ["ios", "android"],
      logo: o("PBdR7_FU"),
      downloadLink: "https://d.toutiao.com/MWSG/",
      topBanner: {
        show: !0,
        slogan: "",
        downloadLink: ""
      },
      article: {
        shouldUnfoldArticle: !1,
        downloadLink: ""
      },
      recommendation: [{
        name: "热门推荐",
        num: 5,
        codeId: "14798012085000246",
        downloadLink: ""
      }, {
        name: "猜你喜欢",
        num: 15,
        codeId: "14799599715000246",
        downloadLink: ""
      }],
      hotCard: !0,
      bottomBanner: {
        show: !0,
        slogan: "",
        downloadLink: ""
      },
      relationCard: {
        show: !1,
        downloadLink: ""
      },
      ad: {
        show: !0
      },
      tea: {
        appId: 1286
      },
      slardar: {
        bid: "",
        pid: ""
      },
      activate: {
        isOnTheYYB: !0,
        activateFailUrl: "",
        iosInfo: {
          universalLink: "//www.toutiao.com/m/detail/?"
        }
      }
    };
    a.exports = t
  };
  o.BbeKaKql = function(o, a, n, d, i) {
    var t = {
      app: "news_article",
      appName: "今日头条",
      supportClientArr: ["ios", "android"],
      logo: o("PBdR7_FU"),
      downloadLink: "https://d.toutiao.com/MWSG/",
      topBanner: {
        show: !0,
        slogan: "",
        downloadLink: ""
      },
      article: {
        shouldUnfoldArticle: !1,
        downloadLink: ""
      },
      recommendation: [{
        name: "热门推荐",
        num: 5,
        codeId: "14798012085000246",
        downloadLink: ""
      }, {
        name: "猜你喜欢",
        num: 15,
        codeId: "14799599715000246",
        downloadLink: ""
      }],
      hotCard: !0,
      bottomBanner: {
        show: !0,
        slogan: "",
        downloadLink: ""
      },
      relationCard: {
        show: !1,
        downloadLink: ""
      },
      ad: {
        show: !0
      },
      tea: {
        appId: 1286
      },
      slardar: {
        bid: "",
        pid: ""
      },
      activate: {
        isOnTheYYB: !0,
        activateFailUrl: "",
        iosInfo: {
          universalLink: "//www.toutiao.com/m/detail/?"
        }
      }
    };
    a.exports = t
  };
  o.ytlyZ6cT = function(o, n, a, d, t) {
    n.exports = {
      app: "f100",
      appName: "幸福里",
      supportClientArr: ["ios", "android"],
      logo: "https://sf6-ttcdn-tos.pstatp.com/obj/ttfe/fproject/logo/xingfulilogo.png",
      downloadLink: "https://d.haoduofangs.com/ywHF/",
      topBanner: {
        show: !0,
        slogan: "好房就在幸福里",
        downloadLink: ""
      },
      article: {
        shouldUnfoldArticle: !1,
        downloadLink: ""
      },
      recommendation: [{
        name: "热门推荐",
        num: 5,
        codeId: "14798012085000246",
        downloadLink: ""
      }, {
        name: "猜你喜欢",
        num: 15,
        codeId: "14799599715000246",
        downloadLink: ""
      }],
      bottomBanner: {
        show: !0,
        slogan: "好房就在幸福里",
        downloadLink: ""
      },
      relationCard: {
        show: !1,
        downloadLink: ""
      },
      ad: {
        show: !0
      },
      tea: {
        appId: 1286
      },
      slardar: {
        bid: "",
        pid: ""
      },
      activate: {
        isOnTheYYB: !0,
        activateFailUrl: "",
        iosInfo: {
          universalLink: "//i.haoduofangs.com/f100/download.html?"
        }
      }
    }
  };
  d("qOjryOyM", "//s1.pstatp.com/growth/mobile_detail/image/xigua_logo.gN4cnAFa.png");
  o.o5KgCq3F = function(o, n, a, d, i) {
    var e = {
      app: "video_article",
      appName: "西瓜视频",
      supportClientArr: ["ios", "android"],
      logo: o("qOjryOyM"),
      downloadLink: "",
      topBanner: {
        show: !0,
        slogan: "",
        downloadLink: ""
      },
      article: {
        shouldUnfoldArticle: !1,
        downloadLink: ""
      },
      recommendation: [{
        name: "热门推荐",
        num: 5,
        codeId: "14798012085000246",
        downloadLink: ""
      }, {
        name: "猜你喜欢",
        num: 15,
        codeId: "14799599715000246",
        downloadLink: ""
      }],
      bottomBanner: {
        show: !0,
        slogan: "",
        downloadLink: ""
      },
      relationCard: {
        show: !0,
        downloadLink: ""
      },
      ad: {
        show: !0
      },
      tea: {
        appId: 1286
      },
      slardar: {
        bid: "",
        pid: ""
      },
      activate: {
        isOnTheYYB: !0,
        activateFailUrl: "",
        iosInfo: {
          universalLink: "//www.365yg.com/m/video_detail/?"
        }
      }
    };
    n.exports = e
  };
  o.JKQGrVxs = function(e, a, t, l, s) {
    var r = l(e("E7MLSnqQ")),
      i = l(e("k65Ijy_9")),
      c = l(e("SkIUwqzZ")),
      d = l(e("BbeKaKql")),
      u = l(e("ytlyZ6cT")),
      f = l(e("o5KgCq3F")),
      n = r.default.request("app") || "news_article";
    i.default.os.ios && "news_article_lite" === n && (n = "news_article");
    var w = void 0;
    switch (n) {
      case "news_article":
        w = c.default;
        break;
      case "news_article_lite":
        w = d.default;
        break;
      case "f100":
        w = u.default;
        break;
      case "video_article":
        w = f.default;
        break;
      default:
        w = c.default
    }
    "news_article" === n && "news_house" === window.tag && (w = u.default), a.exports = w
  };
  o.fjpkKDAo = function(o, a, i, n, t) {
    function e(o) {
      var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      o.app = a.app || v.default.app, window.GTMValue && window.GTMValue.app && (o.app = window.GTMValue.app),
        window.isNewVideoPage && (o.app = "video_article"), o.downloadLink = function(o) {
          var a = o.position,
            i = {
              topBanner: "topbannerSurl",
              article: "unfoldSurl",
              recommendation: "relatedSurl",
              relationcard: "relationSurl",
              bottomBanner: "detailbottombannerSurl",
              imageDownloadBanner: "unfoldSurl",
              articleHeader: "commentSurl"
            } [a],
            n = v.default.downloadLink;
          v.default[a] && v.default[a].downloadLink && (n = v.default[a].downloadLink), n instanceof Object && (n =
            n[s.default.os.ios ? "ios" : "android"]);
          return window.GTMValue && i && window.GTMValue[i] && (n = window.GTMValue[i]), n || (n = o.downloadLink),
            n
        }(o);
      var i = {
        yybLink: "tmast://appdetails?r=0.27985643851570785&pname=com.ss.android.article.news&oplist=1%3B2&via=ANDROIDWXZ.YYB.OTHERBROWSER&channelid=000116083232363434363139&appid=213141",
        nativeLink: w.default.getNativeLink(o),
        universalLink: o.universalLink || "",
        openUrl: w.default.getOpenUrl(o)
      };
      if (window.GTMValue && window.GTMValue.yybSurl && Array.isArray(window.GTMValue.yybSurl) && (i.yybLink =
          window.GTMValue.yybSurl[0], i.downloadLink = window.GTMValue.yybSurl[1]), o = (0, r.default)({}, o, i),
        w.default.getTestDownloadUrl(o.position) && (o.downloadLink = w.default.getTestDownloadUrl(o.position)),
        o.downloadLink = function(o) {
          var a = o.downloadLink,
            i = o.extraData,
            n = a.split("?")[1] || "";
          return c.default.parse(n).extra ? a : (i || (i = w.default.getExtraData({
            group_id: o.id || window.group_id,
            code_id: o.code_id || 0,
            type: "recommendation" === o.position ? "wap_activation" : "wap_no_recommend_activation",
            position: o.position || ""
          })), a = f.default.appendQuery(a, "extra=" + encodeURIComponent((0, l.default)(i))))
        }(o), o.isNeedDownloadFromYYB = a.isNeedDownloadFromYYB || !1, o.universalLink = a.universalLink || "",
        "sms_share" === f.default.request("utm_source")) {
        var n = f.default.request("vid");
        n && (n.indexOf("762233") > -1 && (o.downloadLink = "https://d.toutiao.com/htwg/"), n.indexOf("762234") >
          -1 && (o.downloadLink = "https://d.toutiao.com/y8xp/"), n.indexOf("762235") > -1 && (o.downloadLink =
            "https://d.toutiao.com/d2Vq/"), n.indexOf("762236") > -1 && (o.downloadLink =
            "https://d.toutiao.com/Ymkb/"), n.indexOf("762237") > -1 && (o.downloadLink =
            "https://d.toutiao.com/SKr6/"), n.indexOf("762238") > -1 && (o.downloadLink =
            "https://d.toutiao.com/JX1f/"))
      }
      return o
    }

    function d(o) {
      var a = s.default.os.ios ? p.wap2AppWithIos : p.wap2AppWithAdr,
        i = s.default.os.ios ? u.appDownloadWithIos : u.appDownloadWithAdr;
      s.default.os.android && o.supportClientArr.indexOf("android") > -1 || s.default.os.ios && o.supportClientArr
        .indexOf("ios") > -1 ? (o.preventWap2App || a(o), setTimeout(function() {
          document.hidden || i(o)
        }, 1e3)) : location.href = o.isOnTheYYB ? o.downloadLink : o.activateFailUrl
    }
    var r = n(o("rCvC6Owx")),
      l = n(o("qUYrYx_P")),
      u = o("XuoRHdPA"),
      p = o("_bS5TFau"),
      s = n(o("k65Ijy_9")),
      w = n(o("oYLqwKZ3")),
      f = n(o("E7MLSnqQ")),
      c = n(o("qopIkZBp")),
      v = n(o("JKQGrVxs")),
      m = {
        topBanner: "top_banner",
        relationCard: "friend_card",
        bottomBanner: "bottom_banner",
        articleHeader: "media_user",
        articleBtn: "main_content"
      };
    a.exports = function(o) {
      var a = v.default.supportClientArr,
        i = void 0 === a ? [] : a,
        n = v.default.activate,
        t = void 0 === n ? {} : n,
        r = t.activateFailUrl,
        l = t.isOnTheYYB,
        f = t.iosInfo,
        c = void 0 === f ? {} : f,
        k = t.androidInfo,
        L = void 0 === k ? {} : k;
      o.supportClientArr = i || ["ios", "android"], o.activateFailUrl = r || "", o.isOnTheYYB = l;
      var h = s.default.os.ios ? c : L,
        _ = e(o, h);
      s.default.browser.lark && s.default.os.android && (o.preventAppDownload = !0), window.ttReport && o.position &&
        m[o.position] && w.default.sendActionLog({
          code_id: "",
          group_id: window.group_id,
          position: m[o.position]
        }), s.default.browser.weixin ? o.isOnTheYYB ? (0, u.appDownloadWithYYB)(_) : location.href = o.activateFailUrl :
        (s.default.os.android && d(_), s.default.os.ios && (!h.universalLink || s.default.os.version < 9 ? d(_) :
          (0, p.wap2AppWithIos)(_)))
    }
  };
  o._EVDu_Cd = function(e, n, t, o, i) {
    function u() {
      h.forEach(function(e) {
        !e.visible && function(e) {
          var n = s.default.findDOMNode(e).getBoundingClientRect();
          return n.top >= 0 && n.top <= (window.innerHeight || document.documentElement.clientHeight) || n.bottom >=
            0 && n.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        }(e) && (m.push(e), e.visible = !0, e.props.onFirstInView(e))
      }), m.forEach(function(e, n) {
        var t = h.indexOf(e);
        t > -1 && h.splice(t, 1)
      })
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var d = o(e("__gK4WbX")),
      l = o(e("lgLPKmWO")),
      r = o(e("LFxswB00")),
      c = o(e("_3k8jqSq")),
      f = o(e("C_TrCxPr")),
      a = e("zNszyAds"),
      s = o(e("dLqIczAI")),
      p = o(e("CcFRdAGK")),
      h = [],
      m = [],
      v = function(e) {
        function n() {
          return (0, l.default)(this, n), (0, c.default)(this, (n.__proto__ || (0, d.default)(n)).apply(this,
            arguments))
        }
        return (0, f.default)(n, e), (0, r.default)(n, [{
          key: "componentDidMount",
          value: function() {
            0 === h.length && window.addEventListener("scroll", u), h.push(this), u()
          }
        }, {
          key: "componentWillUnmount",
          value: function() {
            var e = h.indexOf(this); - 1 !== e && h.splice(e, 1), 0 === h.length && window.removeEventListener(
              "scroll", u)
          }
        }, {
          key: "render",
          value: function() {
            return this.props.children
          }
        }]), n
      }(a.Component);
    v.propTypes = {
      children: p.default.oneOfType([p.default.arrayOf(p.default.node), p.default.node])
    }, t.default = v
  };
  o.BqNd7zgW = function(t, e, n, a, r) {
    var i = a(t("lT_XwWMZ")),
      o = a(t("__gK4WbX")),
      s = a(t("lgLPKmWO")),
      l = a(t("LFxswB00")),
      u = a(t("_3k8jqSq")),
      c = a(t("C_TrCxPr")),
      d = t("zNszyAds"),
      f = a(d),
      h = a(t("CcFRdAGK")),
      p = a(t("_EVDu_Cd")),
      y = function(t) {
        function e(t) {
          (0, s.default)(this, e);
          var n = (0, u.default)(this, (e.__proto__ || (0, o.default)(e)).call(this, t));
          return n.state = {
            inView: !1,
            opacity: 0
          }, n
        }
        return (0, c.default)(e, t), (0, l.default)(e, [{
          key: "hanleError",
          value: function(t) {
            Math.floor(100 * Math.random()) || window.gaeventTest("image", "error", t)
          }
        }, {
          key: "hanleLoad",
          value: function() {
            this.setState({
              opacity: 1
            })
          }
        }, {
          key: "handleFirstInView",
          value: function() {
            this.setState({
              inView: !0
            })
          }
        }, {
          key: "render",
          value: function() {
            var t = this;
            return this.props.src ? f.default.createElement(p.default, {
              onFirstInView: function() {
                t.handleFirstInView()
              }
            }, this.state.inView ? f.default.createElement("img", (0, i.default)({
              style: {
                transition: "opacity 200ms ease",
                opacity: this.state.opacity
              },
              onError: function() {
                return t.hanleError(t.props.src)
              },
              onLoad: function() {
                return t.hanleLoad()
              }
            }, this.props)) : f.default.createElement("img", null)) : null
          }
        }]), e
      }(d.Component);
    y.propTypes = {
      src: h.default.string
    }, e.exports = y
  };
  o.kJOR0kg0 = function(a, e, t, r, s) {
    var n = r(a("__gK4WbX")),
      l = r(a("lgLPKmWO")),
      u = r(a("LFxswB00")),
      c = r(a("_3k8jqSq")),
      d = r(a("C_TrCxPr")),
      f = a("zNszyAds"),
      i = r(f),
      m = r(a("CcFRdAGK")),
      o = r(a("BqNd7zgW")),
      p = function(a) {
        function e() {
          return (0, l.default)(this, e), (0, c.default)(this, (e.__proto__ || (0, n.default)(e)).apply(this,
            arguments))
        }
        return (0, d.default)(e, a), (0, u.default)(e, [{
          key: "render",
          value: function() {
            var a = this.props.imagesrc;
            return i.default.createElement("span", {
              className: "avatar"
            }, i.default.createElement(o.default, {
              src: a,
              className: "avatar__image"
            }), i.default.createElement("span", {
              className: "avatar__mask"
            }))
          }
        }]), e
      }(f.Component);
    p.propTypes = {
      imagesrc: m.default.string
    }, e.exports = p
  };
  o.blKUJY8C = function(e, t, r, s, n) {
    Date.prototype.format = function(e) {
      var t = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        S: this.getMilliseconds()
      };
      /(y+)/.test(e) && (e = e.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (var r in t) new RegExp("(" + r + ")").test(e) && (e = e.replace(RegExp.$1, 1 === RegExp.$1.length ?
        t[r] : ("00" + t[r]).substr(("" + t[r]).length)));
      return e
    };
    var o = {
      settings: {
        relative: !1,
        strings: {
          suffixAgo: "前",
          seconds: "刚刚",
          minute: "1分钟",
          minutes: "%d分钟",
          hour: "1小时",
          hours: "%d小时",
          days: "%d天",
          months: "%d个月",
          years: "%d年",
          numbers: []
        },
        yearsAgoFormat: "yyyy-MM-dd",
        daysAgoFormat: "MM-dd hh:mm"
      },
      inWords: function(t) {
        function r(t, r) {
          var s = e("_6BrwHiQ").isFunction(t) ? t(r, n) : t,
            a = o.numbers && o.numbers[r] || r;
          return s.replace(/%d/i, a)
        }
        var s, n = function(e) {
            return (new Date).getTime() - e.getTime()
          }(t),
          o = this.settings.strings,
          a = o.suffixAgo,
          i = Math.abs(n) / 1e3,
          u = i / 60,
          h = u / 60,
          d = h / 24,
          g = d / 30,
          l = d / 365;
        return "刚刚" === (s = i < 60 ? r(o.seconds, Math.floor(i)) : u < 60 ? r(o.minutes, Math.floor(u)) : h <
          24 ? r(o.hours, Math.floor(h)) : d < 30 ? r(o.days, Math.floor(d)) : d < 365 ? r(o.months, Math.floor(
            g)) : r(o.years, Math.floor(l))) ? s : s + a
      },
      parse: function(t) {
        if ("number" == typeof t) return new Date(t);
        var r = e("_6BrwHiQ").trim(t);
        return r = r.replace(/\.\d+/, ""), r = r.replace(/-/, "/").replace(/-/, "/"), r = r.replace(/T/, " ")
          .replace(/Z/, " UTC"), r = r.replace(/([+-]\d\d):?(\d\d)/, " $1$2"), new Date(r)
      },
      datetime: function(e) {
        return o.parse(e)
      }
    };
    t.exports = function(e, t) {
      return o.inWords(o.datetime(e))
    }
  };
  o.qBRplOQ7 = function(e, a, t, l, n) {
    var r = l(e("__gK4WbX")),
      i = l(e("lgLPKmWO")),
      s = l(e("LFxswB00")),
      u = l(e("_3k8jqSq")),
      c = l(e("C_TrCxPr")),
      m = e("zNszyAds"),
      d = l(m),
      o = l(e("CcFRdAGK")),
      f = l(e("k65Ijy_9")),
      _ = l(e("fjpkKDAo")),
      p = l(e("kJOR0kg0")),
      h = l(e("blKUJY8C")),
      N = function(e) {
        function a() {
          return (0, i.default)(this, a), (0, u.default)(this, (a.__proto__ || (0, r.default)(a)).apply(this,
            arguments))
        }
        return (0, c.default)(a, e), (0, s.default)(a, [{
          key: "handleClickComment",
          value: function(e) {
            e.preventDefault(), e.stopPropagation();
            var a = {
              position: "articleHeader",
              id: window.group_id,
              gdLabel: f.default.browser.weixin ? "click_weixin_rf_detail_guanzhu" : "click_wap_rf_detail_guanzhu",
              type: "comment",
              isNewVideo: window.isNewVideoPage
            };
            (0, _.default)(a)
          }
        }, {
          key: "render",
          value: function() {
            var e = this,
              a = this.props.data;
            if (!a.title) return null;
            window.title = a.title, a.media_user ? window.mediaName = a.media_user.screen_name : window.mediaName =
              a.source;
            var t = "";
            a.publish_time && (t = (0, h.default)(1e3 * a.publish_time));
            var l = a && a.media_user || {},
              n = l.id,
              r = l.avatar_url,
              i = l.screen_name;
            return d.default.createElement("div", {
              className: "article__header"
            }, d.default.createElement("h1", {
              className: "article__title"
            }, a.title), n ? d.default.createElement("div", {
              className: "article__author"
            }, d.default.createElement(p.default, {
              imagesrc: r
            }), d.default.createElement("span", {
              className: "author-name"
            }, i), d.default.createElement("span", {
              className: "article-info"
            }, d.default.createElement("span", {
              className: "new-style-test-article-publish-time"
            }, t), a.comment_count > 0 && [d.default.createElement("span", {
              key: "1",
              className: "dot"
            }), d.default.createElement("span", {
              key: "2",
              className: "new-style-test-article-comment",
              onClick: function(a) {
                return e.handleClickComment(a)
              }
            }, function(e) {
              return Number(e) > 1e4 ? (Number(e) / 1e4).toFixed(1) + "万" : e
            }(a.comment_count), "评论")])) : d.default.createElement("div", {
              className: "article__author--notpgc"
            }, d.default.createElement("p", {
              className: "media-name"
            }, a.detail_source || a.source), d.default.createElement("a", {
              href: a.url,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "publish-detail"
            }, d.default.createElement("span", {
              className: "publish-time"
            }, t), d.default.createElement("span", {
              className: "separator"
            }, "/"), d.default.createElement("span", {
              className: "publish-link"
            }, "查看原文"))))
          }
        }]), a
      }(m.Component);
    N.propTypes = {
      GTMValue: o.default.object,
      data: o.default.object
    }, a.exports = N
  };
  o.b_8MIaea = function(e, n, t, a, o) {
    n.exports = function() {
      var e = document.getSelection();
      if (!e.rangeCount) return function() {};
      for (var n = document.activeElement, t = [], a = 0; a < e.rangeCount; a++) t.push(e.getRangeAt(a));
      switch (n.tagName.toUpperCase()) {
        case "INPUT":
        case "TEXTAREA":
          n.blur();
          break;
        default:
          n = null
      }
      return e.removeAllRanges(),
        function() {
          "Caret" === e.type && e.removeAllRanges(), e.rangeCount || t.forEach(function(n) {
            e.addRange(n)
          }), n && n.focus()
        }
    }
  };
  o.UQm_3kFn = function(e, t, o, n, r) {
    function c(e, t) {
      var o, n, r, c, l, i, d = !1;
      t || (t = {}), o = t.debug || !1;
      try {
        r = a(), c = document.createRange(), l = document.getSelection(), (i = document.createElement("span")).textContent =
          e, i.style.all = "unset", i.style.position = "fixed", i.style.top = 0, i.style.clip =
          "rect(0, 0, 0, 0)", i.style.whiteSpace = "pre", i.style.webkitUserSelect = "text", i.style.MozUserSelect =
          "text", i.style.msUserSelect = "text", i.style.userSelect = "text", document.body.appendChild(i), c.selectNode(
            i), l.addRange(c);
        if (!document.execCommand("copy")) throw new Error("copy command was unsuccessful");
        d = !0
      } catch (r) {
        o && console.error("unable to copy using execCommand: ", r), o && console.warn("trying IE specific stuff");
        try {
          window.clipboardData.setData("text", e), d = !0
        } catch (r) {
          o && console.error("unable to copy using clipboardData: ", r), o && console.error(
            "falling back to prompt"), n = function(e) {
            var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
            return e.replace(/#{\s*key\s*}/g, t)
          }("message" in t ? t.message : s), window.prompt(n, e)
        }
      } finally {
        l && ("function" == typeof l.removeRange ? l.removeRange(c) : l.removeAllRanges()), i && document.body.removeChild(
          i), r()
      }
      return d
    }
    var a = e("b_8MIaea"),
      s = "Copy to clipboard: #{key}, Enter";
    t.exports = c
  };
  o.Rp5Cbofz = function(n, e, o, t, r) {
    function i(n, e) {
      if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" !== (void 0 === e ? "undefined" : (0, f.default)(e)) && "function" != typeof e ? n :
        e
    }
    var l = t(n("__gK4WbX")),
      a = t(n("aTcJE_x5")),
      u = t(n("dAbh41uH")),
      f = t(n("_YselYzt")),
      p = t(n("_TKuLVn3")),
      c = t(n("rCvC6Owx"));
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), o.CopyToClipboard = void 0;
    var d = c.default || function(n) {
        for (var e = 1; e < arguments.length; e++) {
          var o = arguments[e];
          for (var t in o) Object.prototype.hasOwnProperty.call(o, t) && (n[t] = o[t])
        }
        return n
      },
      s = function() {
        function n(n, e) {
          for (var o = 0; o < e.length; o++) {
            var t = e[o];
            t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), (0, p.default)
              (n, t.key, t)
          }
        }
        return function(e, o, t) {
          return o && n(e.prototype, o), t && n(e, t), e
        }
      }(),
      y = t(n("zNszyAds")),
      h = t(n("UQm_3kFn"));
    (o.CopyToClipboard = function(n) {
      function e() {
        var n, o, t, r;
        ! function(n, e) {
          if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e);
        for (var a = arguments.length, u = Array(a), f = 0; f < a; f++) u[f] = arguments[f];
        return o = t = i(this, (n = e.__proto__ || (0, l.default)(e)).call.apply(n, [this].concat(u))), t.onClick =
          function(n) {
            var e = t.props,
              o = e.text,
              r = e.onCopy,
              i = e.children,
              l = e.options,
              a = y.default.Children.only(i),
              u = (0, h.default)(o, l);
            r && r(o, u), a && a.props && "function" == typeof a.props.onClick && a.props.onClick(n)
          }, r = o, i(t, r)
      }
      return function(n, e) {
        if ("function" != typeof e && null !== e) throw new TypeError(
          "Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : (0,
            f.default)(e)));
        n.prototype = (0, u.default)(e && e.prototype, {
          constructor: {
            value: n,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), e && (a.default ? (0, a.default)(n, e) : n.__proto__ = e)
      }(e, y.default.PureComponent), s(e, [{
        key: "render",
        value: function() {
          var n = this.props,
            e = (n.text, n.onCopy, n.options, n.children),
            o = function(n, e) {
              var o = {};
              for (var t in n) e.indexOf(t) >= 0 || Object.prototype.hasOwnProperty.call(n, t) && (o[t] =
                n[t]);
              return o
            }(n, ["text", "onCopy", "options", "children"]),
            t = y.default.Children.only(e);
          return y.default.cloneElement(t, d({}, o, {
            onClick: this.onClick
          }))
        }
      }]), e
    }()).defaultProps = {
      onCopy: void 0,
      options: void 0
    }
  };
  o.WREvxMJj = function(o, p, C, r, a) {
    var b = o("Rp5Cbofz").CopyToClipboard;
    b.CopyToClipboard = b, p.exports = b
  };
  o.IJQXgVIj = function(e, t, r, u, d) {
    Object.defineProperty(r, "__esModule", {
      value: !0
    });
    var a = u(e("__gK4WbX")),
      l = u(e("lgLPKmWO")),
      n = u(e("LFxswB00")),
      o = u(e("_3k8jqSq")),
      f = u(e("C_TrCxPr")),
      i = e("zNszyAds"),
      s = u(i),
      p = u(e("CcFRdAGK")),
      _ = e("WREvxMJj"),
      c = u(e("k65Ijy_9")),
      g = u(e("E7MLSnqQ")),
      h = g.default.request("utm_medium") || "",
      y = function(e) {
        function t() {
          return (0, l.default)(this, t), (0, o.default)(this, (t.__proto__ || (0, a.default)(t)).apply(this,
            arguments))
        }
        return (0, f.default)(t, e), (0, n.default)(t, [{
          key: "render",
          value: function() {
            if (!c.default.browser.weixin && "ug_sms" === g.default.request("utm_source")) {
              var e = "BTMS" + btoa(this.props.gdLabel + "+" + h);
              return s.default.createElement(_.CopyToClipboard, {
                text: e
              }, this.props.children)
            }
            return this.props.children
          }
        }]), t
      }(i.Component);
    y.propTypes = {
      children: p.default.oneOfType([p.default.arrayOf(p.default.node), p.default.node]),
      gdLabel: p.default.string,
      position: p.default.string
    }, y.defaultProps = {
      gdLabel: "",
      position: ""
    }, r.default = y
  };
  o.xyJ0J1_Z = function(e, t, n, l, a) {
    var o = l(e("__gK4WbX")),
      u = l(e("lgLPKmWO")),
      d = l(e("LFxswB00")),
      f = l(e("_3k8jqSq")),
      r = l(e("C_TrCxPr")),
      i = e("zNszyAds"),
      c = l(i),
      s = l(e("CcFRdAGK")),
      p = l(e("IJQXgVIj"));
    l(e("oYLqwKZ3")), l(e("E7MLSnqQ"));
    ((function(e) {
      function t() {
        return (0, u.default)(this, t), (0, f.default)(this, (t.__proto__ || (0, o.default)(t)).apply(this,
          arguments))
      }
      return (0, r.default)(t, e), (0, d.default)(t, [{
        key: "unfoldArticle",
        value: function() {
          this.props.unfoldArticle()
        }
      }, {
        key: "render",
        value: function() {
          var e = this;
          return c.default.createElement("div", {
            className: "unfold-field",
            ref: function(t) {
              e.props.unflod(t)
            },
            onClick: function() {
              e.unfoldArticle()
            }
          }, c.default.createElement("div", {
            className: "unflod-field__mask"
          }), c.default.createElement("a", {
            href: "javascript:void(0)",
            className: "new-style-test-unfold-text"
          }, "展开阅读全文"))
        }
      }]), t
    })(i.Component)).propTypes = {
      unflod: s.default.func,
      unfoldArticle: s.default.func
    };
    var m = function(e) {
      function t(e) {
        return (0, u.default)(this, t), (0, f.default)(this, (t.__proto__ || (0, o.default)(t)).call(this, e))
      }
      return (0, r.default)(t, e), (0, d.default)(t, [{
        key: "onUnfoldClick",
        value: function() {
          this.props.unfoldArticle()
        }
      }, {
        key: "onChooseClick",
        value: function() {
          this.props.downloadApp()
        }
      }, {
        key: "getBtnText",
        value: function() {
          var e = "打开APP阅读全文";
          return "high" === window.articleType && (e = "打开“今日头条”APP阅读全文"), e
        }
      }, {
        key: "render",
        value: function() {
          var e = this,
            t = this.getBtnText();
          return c.default.createElement(p.default, {
            gdLabel: "click_wap_rf_more_btn",
            position: "articleBtn"
          }, c.default.createElement("div", {
            className: "unfold-field unfold-field-download"
          }, c.default.createElement("div", {
            className: "btn-wrapper"
          }, c.default.createElement("div", {
            className: "unflod-field__mask",
            onClick: function() {
              return e.onUnfoldClick()
            }
          }), c.default.createElement("a", {
            href: "javascript:void(0)",
            className: "download-text",
            onClick: function() {
              return e.onChooseClick()
            }
          }, t))))
        }
      }]), t
    }(i.Component);
    m.propTypes = {
      unfoldArticle: s.default.func,
      downloadApp: s.default.func
    };
    var v = function(e) {
      function t() {
        return (0, u.default)(this, t), (0, f.default)(this, (t.__proto__ || (0, o.default)(t)).apply(this,
          arguments))
      }
      return (0, r.default)(t, e), (0, d.default)(t, [{
        key: "unfoldArticle",
        value: function() {
          this.props.unfoldArticle()
        }
      }, {
        key: "downloadApp",
        value: function() {
          this.props.downloadApp()
        }
      }, {
        key: "render",
        value: function() {
          var e = this;
          return c.default.createElement("div", {
            className: "unfold-field unfold-field-abreast",
            ref: function(t) {
              e.props.unflod(t)
            }
          }, c.default.createElement("div", {
            className: "unflod-field__mask"
          }), c.default.createElement("a", {
            href: "javascript:void(0)",
            className: "unfold",
            onClick: function() {
              e.unfoldArticle()
            }
          }, "点击展开"), c.default.createElement("a", {
            href: "javascript:void(0)",
            className: "download",
            onClick: function() {
              e.downloadApp()
            }
          }, "打开APP阅读全文"))
        }
      }]), t
    }(i.Component);
    v.propTypes = {
      unflod: s.default.func,
      unfoldArticle: s.default.func,
      downloadApp: s.default.func
    }, t.exports = {
      DownloadBtn: m,
      AbreastBtn: v
    }
  };
  o.LcVv0zvE = function(e, t, n, r, o) {
    var a = r(e("qUYrYx_P")),
      i = r(e("rCvC6Owx")),
      l = r(e("_l59FVJy")),
      c = r(e("__gK4WbX")),
      u = r(e("aTcJE_x5")),
      s = r(e("dAbh41uH")),
      d = r(e("XbxgipO3")),
      f = r(e("uDAb44WB")),
      p = r(e("IUH_e8R9")),
      m = r(e("_YselYzt")),
      h = r(e("_TKuLVn3"));
    ! function(e) {
      function t(r) {
        if (n[r]) return n[r].exports;
        var o = n[r] = {
          i: r,
          l: !1,
          exports: {}
        };
        return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
      }
      var n = {};
      t.m = e, t.c = n, t.i = function(e) {
        return e
      }, t.d = function(e, n, r) {
        t.o(e, n) || (0, h.default)(e, n, {
          configurable: !1,
          enumerable: !0,
          get: r
        })
      }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
          return e.default
        } : function() {
          return e
        };
        return t.d(n, "a", n), n
      }, t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }, t.p = "https://s3.pstatp.com/pgc/v2/resource/card_wap/", t(t.s = 31)
    }([function(e, t, n) {
      Object.defineProperty(t, "__esModule", {
          value: !0
        }),
        function(e) {
          function r() {
            return null
          }

          function o(e, t, r) {
            var o = t && t._preactCompatRendered && t._preactCompatRendered.base;
            o && o.parentNode !== t && (o = null), !o && t && (o = t.firstElementChild);
            for (var a = t.childNodes.length; a--;) t.childNodes[a] !== o && t.removeChild(t.childNodes[a]);
            var i = n.i(I.c)(e, t, o);
            return t && (t._preactCompatRendered = i && (i._component || {
              base: i
            })), "function" == typeof r && r(), i && i._component || i
          }

          function a(e, t, r, a) {
            var i = o(n.i(I.a)(z, {
                context: e.context
              }, t), r),
              l = i._component || i.base;
            return a && a.call(l, i), l
          }

          function i(e) {
            var t = e._preactCompatRendered && e._preactCompatRendered.base;
            return !(!t || t.parentNode !== e || (n.i(I.c)(n.i(I.a)(r), e, t), 0))
          }

          function l(e) {
            return s.bind(null, e)
          }

          function c(e, t) {
            for (var n = t || 0; n < e.length; n++) {
              var r = e[n];
              Array.isArray(r) ? c(r) : r && "object" == (void 0 === r ? "undefined" : (0, m.default)(r)) &&
                !_(r) && (r.props && r.type || r.attributes && r.nodeName || r.children) && (e[n] = s(r.type ||
                  r.nodeName, r.props || r.attributes, r.children))
            }
          }

          function u(e) {
            var t = e[M];
            return t ? !0 === t ? e : t : (t = function(e) {
                return E({
                  displayName: e.displayName || e.name,
                  render: function() {
                    return e(this.props, this.context)
                  }
                })
              }(e), (0, h.default)(t, M, {
                configurable: !0,
                value: !0
              }), t.displayName = e.displayName, t.propTypes = e.propTypes, t.defaultProps = e.defaultProps,
              (0, h.default)(e, M, {
                configurable: !0,
                value: t
              }), t)
          }

          function s() {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            return c(e, 2), d(I.a.apply(void 0, e))
          }

          function d(e) {
            e.preactCompatNormalized = !0,
              function(e) {
                var t = e.attributes || (e.attributes = {});
                X.enumerable = "className" in t, t.className && (t.class = t.className), Object.defineProperty(
                  t, "className", X)
              }(e),
              function(e) {
                return "function" == typeof e && !(e.prototype && e.prototype.render)
              }(e.nodeName) && (e.nodeName = u(e.nodeName));
            var t = e.attributes.ref,
              n = t && (void 0 === t ? "undefined" : (0, m.default)(t));
            return !H || "string" !== n && "number" !== n || (e.attributes.ref = function(e, t) {
                return t._refProxies[e] || (t._refProxies[e] = function(n) {
                  t && t.refs && (t.refs[e] = n, null === n && (delete t._refProxies[e], t = null))
                })
              }(t, H)),
              function(e) {
                var t = e.nodeName,
                  n = e.attributes;
                if (n && "string" == typeof t) {
                  var r = {};
                  for (var o in n) r[o.toLowerCase()] = o;
                  if (r.ondoubleclick && (n.ondblclick = n[r.ondoubleclick], delete n[r.ondoubleclick]), r.onchange &&
                    ("textarea" === t || "input" === t.toLowerCase() && !/^fil|che|rad/i.test(n.type))) {
                    var a = r.oninput || "oninput";
                    n[a] || (n[a] = N([n[a], n[r.onchange]]), delete n[r.onchange])
                  }
                }
              }(e), e
          }

          function v(e, t) {
            for (var r = [], o = arguments.length - 2; o-- > 0;) r[o] = arguments[o + 2];
            if (!_(e)) return e;
            var a = e.attributes || e.props,
              i = [n.i(I.a)(e.nodeName || e.type, g({}, a), e.children || a && a.children), t];
            return r && r.length ? i.push(r) : t && t.children && i.push(t.children), d(I.d.apply(void 0, i))
          }

          function _(e) {
            return e && (e instanceof J || e.$$typeof === O)
          }

          function g(e, t) {
            for (var n = arguments, r = 1, o = void 0; r < arguments.length; r++)
              if (o = n[r])
                for (var a in o) o.hasOwnProperty(a) && (e[a] = o[a]);
            return e
          }

          function y(e, t) {
            for (var n in e)
              if (!(n in t)) return !0;
            for (var r in t)
              if (e[r] !== t[r]) return !0;
            return !1
          }

          function b(e) {
            return e && e.base || e
          }

          function w() {}

          function E(e) {
            function t(e, t) {
              (function(e) {
                for (var t in e) {
                  var n = e[t];
                  "function" != typeof n || n.__bound || B.hasOwnProperty(t) || ((e[t] = n.bind(e)).__bound = !
                    0)
                }
              })(this), P.call(this, e, t, L), C.call(this, e, t)
            }
            return (e = g({
                constructor: t
              }, e)).mixins && function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = N(t[n].concat(e[n] || Y), "getDefaultProps" ===
                  n || "getInitialState" === n || "getChildContext" === n))
              }(e, function(e) {
                for (var t = {}, n = 0; n < e.length; n++) {
                  var r = e[n];
                  for (var o in r) r.hasOwnProperty(o) && "function" == typeof r[o] && (t[o] || (t[o] = []))
                    .push(r[o])
                }
                return t
              }(e.mixins)), e.statics && g(t, e.statics), e.propTypes && (t.propTypes = e.propTypes), e.defaultProps &&
              (t.defaultProps = e.defaultProps), e.getDefaultProps && (t.defaultProps = e.getDefaultProps.call(
                t)), w.prototype = P.prototype, t.prototype = g(new w, e), t.displayName = e.displayName ||
              "Component", t
          }

          function k(e, t, n) {
            if ("string" == typeof t && (t = e.constructor.prototype[t]), "function" == typeof t) return t.apply(
              e, n)
          }

          function N(e, t) {
            return function() {
              for (var n, r = arguments, o = 0; o < e.length; o++) {
                var a = k(this, e[o], r);
                if (t && null != a) {
                  n || (n = {});
                  for (var i in a) a.hasOwnProperty(i) && (n[i] = a[i])
                } else void 0 !== a && (n = a)
              }
              return n
            }
          }

          function C(e, t) {
            T.call(this, e, t), this.componentWillReceiveProps = N([T, this.componentWillReceiveProps ||
              "componentWillReceiveProps"
            ]), this.render = N([T, U, this.render || "render", x])
          }

          function T(e, t) {
            if (e) {
              var n = e.children;
              if (n && Array.isArray(n) && 1 === n.length && ("string" == typeof n[0] || "function" == typeof n[
                  0] || n[0] instanceof J) && (e.children = n[0], e.children && "object" == (0, m.default)(e.children) &&
                  (e.children.length = 1, e.children[0] = e.children)), D) {
                var r = "function" == typeof this ? this : this.constructor,
                  o = this.propTypes || r.propTypes,
                  a = this.displayName || r.name;
                o && j.a.checkPropTypes(o, e, "prop", a)
              }
            }
          }

          function U(e) {
            H = this
          }

          function x() {
            H === this && (H = null)
          }

          function P(e, t, n) {
            I.e.call(this, e, t), this.state = this.getInitialState ? this.getInitialState() : {}, this.refs = {},
              this._refProxies = {}, n !== L && C.call(this, e, t)
          }

          function A(e, t) {
            P.call(this, e, t)
          }
          n.d(t, "version", function() {
            return R
          }), n.d(t, "DOM", function() {
            return q
          }), n.d(t, "Children", function() {
            return G
          }), n.d(t, "render", function() {
            return o
          }), n.d(t, "createClass", function() {
            return E
          }), n.d(t, "createFactory", function() {
            return l
          }), n.d(t, "createElement", function() {
            return s
          }), n.d(t, "cloneElement", function() {
            return v
          }), n.d(t, "isValidElement", function() {
            return _
          }), n.d(t, "findDOMNode", function() {
            return b
          }), n.d(t, "unmountComponentAtNode", function() {
            return i
          }), n.d(t, "Component", function() {
            return P
          }), n.d(t, "PureComponent", function() {
            return A
          }), n.d(t, "unstable_renderSubtreeIntoContainer", function() {
            return a
          }), n.d(t, "__spread", function() {
            return g
          });
          var S = n(27),
            j = n.n(S),
            I = n(24);
          n.d(t, "PropTypes", function() {
            return j.a
          });
          var R = "15.1.0",
            W =
            "a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan"
            .split(" "),
            O = void 0 !== p.default && f.default && (0, f.default)("react.element") || 60103,
            M = void 0 !== p.default && f.default ? (0, f.default)("__preactCompatWrapper") :
            "__preactCompatWrapper",
            B = {
              constructor: 1,
              render: 1,
              shouldComponentUpdate: 1,
              componentWillReceiveProps: 1,
              componentWillUpdate: 1,
              componentDidUpdate: 1,
              componentWillMount: 1,
              componentDidMount: 1,
              componentWillUnmount: 1,
              componentDidUnmount: 1
            },
            Q =
            /^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vector|vert|word|writing|x)[A-Z]/,
            L = {},
            D = void 0 === e || !n.i({
              NODE_ENV: "production"
            }) || !1,
            J = n.i(I.a)("a", null).constructor;
          J.prototype.$$typeof = O, J.prototype.preactCompatUpgraded = !1, J.prototype.preactCompatNormalized = !
            1, Object.defineProperty(J.prototype, "type", {
              get: function() {
                return this.nodeName
              },
              set: function(e) {
                this.nodeName = e
              },
              configurable: !0
            }), Object.defineProperty(J.prototype, "props", {
              get: function() {
                return this.attributes
              },
              set: function(e) {
                this.attributes = e
              },
              configurable: !0
            });
          var F = I.b.event;
          I.b.event = function(e) {
            return F && (e = F(e)), e.persist = Object, e.nativeEvent = e, e
          };
          var V = I.b.vnode;
          I.b.vnode = function(e) {
            if (!e.preactCompatUpgraded) {
              e.preactCompatUpgraded = !0;
              var t = e.nodeName,
                n = e.attributes = g({}, e.attributes);
              "function" == typeof t ? (!0 === t[M] || t.prototype && "isReactComponent" in t.prototype) &&
                (e.children && "" === String(e.children) && (e.children = void 0), e.children && (n.children =
                  e.children), e.preactCompatNormalized || d(e), function(e) {
                  var t = e.nodeName,
                    n = e.attributes;
                  e.attributes = {}, t.defaultProps && g(e.attributes, t.defaultProps), n && g(e.attributes,
                    n)
                }(e)) : (e.children && "" === String(e.children) && (e.children = void 0), e.children && (n
                  .children = e.children), n.defaultValue && (n.value || 0 === n.value || (n.value = n.defaultValue),
                  delete n.defaultValue), function(e, t) {
                  var n, r, o;
                  if (t) {
                    for (o in t)
                      if (n = Q.test(o)) break;
                    if (n) {
                      r = e.attributes = {};
                      for (o in t) t.hasOwnProperty(o) && (r[Q.test(o) ? o.replace(/([A-Z0-9])/, "-$1").toLowerCase() :
                        o] = t[o])
                    }
                  }
                }(e, n))
            }
            V && V(e)
          };
          var z = function() {};
          z.prototype.getChildContext = function() {
            return this.props.context
          }, z.prototype.render = function(e) {
            return e.children[0]
          };
          for (var H, Y = [], G = {
              map: function(e, t, n) {
                return null == e ? null : (e = G.toArray(e), n && n !== e && (t = t.bind(n)), e.map(t))
              },
              forEach: function(e, t, n) {
                if (null == e) return null;
                e = G.toArray(e), n && n !== e && (t = t.bind(n)), e.forEach(t)
              },
              count: function(e) {
                return e && e.length || 0
              },
              only: function(e) {
                if (1 !== (e = G.toArray(e)).length) throw new Error(
                  "Children.only() expects only one child.");
                return e[0]
              },
              toArray: function(e) {
                return null == e ? [] : Y.concat(e)
              }
            }, q = {}, K = W.length; K--;) q[W[K]] = l(W[K]);
          var X = {
            configurable: !0,
            get: function() {
              return this.class
            },
            set: function(e) {
              this.class = e
            }
          };
          g(P.prototype = new I.e, {
              constructor: P,
              isReactComponent: {},
              replaceState: function(e, t) {
                this.setState(e, t);
                for (var n in this.state) n in e || delete this.state[n]
              },
              getDOMNode: function() {
                return this.base
              },
              isMounted: function() {
                return !!this.base
              }
            }), w.prototype = P.prototype, (A.prototype = new w).isPureReactComponent = !0, A.prototype.shouldComponentUpdate =
            function(e, t) {
              return y(this.props, e) || y(this.state, t)
            };
          var $ = {
            version: R,
            DOM: q,
            PropTypes: j.a,
            Children: G,
            render: o,
            createClass: E,
            createFactory: l,
            createElement: s,
            cloneElement: v,
            isValidElement: _,
            findDOMNode: b,
            unmountComponentAtNode: i,
            Component: P,
            PureComponent: A,
            unstable_renderSubtreeIntoContainer: a,
            __spread: g
          };
          t.default = $
        }.call(t, n(5))
    }, function(e, t) {}, function(e, t, n) {
      function r(e, t) {
        if (t(e), e.firstChild) {
          var n = e.firstChild;
          if (n)
            do {
              r(n, t)
            } while (n = n.nextSibling)
        }
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = {
        map: r,
        attr: function(e) {
          for (var t = {}, n = 0, r = e.length; n < r; n++) t[e[n].name] = e[n].value;
          return t
        },
        buildAttrs: function(e) {
          for (var t = {}, n = e.attributes, r = e.dataset, o = 0, a = n.length; o < a; o++) "class" !==
            n[o].name && (t[n[o].name] = n[o].value);
          for (var o in r) t[o] = r[o];
          return t
        },
        firstUpper: function(e) {
          return (e = e.toLowerCase()).replace(/\b(\w)|\s(\w)/g, function(e) {
            return e.toUpperCase()
          })
        },
        formatTime: function(e) {
          var t = parseInt(e % 60);
          return parseInt(e / 60) + ":" + (t < 10 ? "0" + t : t)
        }
      }
    }, function(e, t) {
      var n = {
        utf8: {
          stringToBytes: function(e) {
            return n.bin.stringToBytes(unescape(encodeURIComponent(e)))
          },
          bytesToString: function(e) {
            return decodeURIComponent(escape(n.bin.bytesToString(e)))
          }
        },
        bin: {
          stringToBytes: function(e) {
            for (var t = [], n = 0; n < e.length; n++) t.push(255 & e.charCodeAt(n));
            return t
          },
          bytesToString: function(e) {
            for (var t = [], n = 0; n < e.length; n++) t.push(String.fromCharCode(e[n]));
            return t.join("")
          }
        }
      };
      e.exports = n
    }, function(e, t, n) {
      var r, o, a;
      o = [t, e], r = function(e, t) {
        function n(e) {
          try {
            delete window[e]
          } catch (t) {
            window[e] = void 0
          }
        }

        function r(e) {
          var t = document.getElementById(e);
          t && document.getElementsByTagName("head")[0].removeChild(t)
        }

        function o(e) {
          var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
            o = e,
            i = t.timeout || a.timeout,
            l = t.jsonpCallback || a.jsonpCallback,
            c = void 0;
          return new d.default(function(a, u) {
            var s = t.jsonpCallbackFunction || "jsonp_" + Date.now() + "_" + Math.ceil(1e5 * Math.random()),
              f = l + "_" + s;
            window[s] = function(e) {
              a({
                ok: !0,
                json: function() {
                  return d.default.resolve(e)
                }
              }), c && clearTimeout(c), r(f), n(s)
            }, o += -1 === o.indexOf("?") ? "?" : "&";
            var p = document.createElement("script");
            p.setAttribute("src", "" + o + l + "=" + s), t.charset && p.setAttribute("charset", t.charset),
              p.id = f, document.getElementsByTagName("head")[0].appendChild(p), c = setTimeout(
                function() {
                  u(new Error("JSONP request to " + e + " timed out")), n(s), r(f), window[s] =
                    function() {
                      n(s)
                    }
                }, i), p.onerror = function() {
                u(new Error("JSONP request to " + e + " failed")), n(s), r(f), c && clearTimeout(c)
              }
          })
        }
        var a = {
          timeout: 5e3,
          jsonpCallback: "callback",
          jsonpCallbackFunction: null
        };
        t.exports = o
      }, void 0 !== (a = "function" == typeof r ? r.apply(t, o) : r) && (e.exports = a)
    }, function(e, t) {
      function n() {
        throw new Error("setTimeout has not been defined")
      }

      function r() {
        throw new Error("clearTimeout has not been defined")
      }

      function o(e) {
        if (u === setTimeout) return setTimeout(e, 0);
        if ((u === n || !u) && setTimeout) return u = setTimeout, setTimeout(e, 0);
        try {
          return u(e, 0)
        } catch (t) {
          try {
            return u.call(null, e, 0)
          } catch (t) {
            return u.call(this, e, 0)
          }
        }
      }

      function a() {
        m && f && (m = !1, f.length ? p = f.concat(p) : h = -1, p.length && i())
      }

      function i() {
        if (!m) {
          var e = o(a);
          m = !0;
          for (var t = p.length; t;) {
            for (f = p, p = []; ++h < t;) f && f[h].run();
            h = -1, t = p.length
          }
          f = null, m = !1,
            function(e) {
              if (s === clearTimeout) return clearTimeout(e);
              if ((s === r || !s) && clearTimeout) return s = clearTimeout, clearTimeout(e);
              try {
                s(e)
              } catch (t) {
                try {
                  return s.call(null, e)
                } catch (t) {
                  return s.call(this, e)
                }
              }
            }(e)
        }
      }

      function l(e, t) {
        this.fun = e, this.array = t
      }

      function c() {}
      var u, s, d = e.exports = {};
      ! function() {
        try {
          u = "function" == typeof setTimeout ? setTimeout : n
        } catch (e) {
          u = n
        }
        try {
          s = "function" == typeof clearTimeout ? clearTimeout : r
        } catch (e) {
          s = r
        }
      }();
      var f, p = [],
        m = !1,
        h = -1;
      d.nextTick = function(e) {
          var t = new Array(arguments.length - 1);
          if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          p.push(new l(e, t)), 1 !== p.length || m || o(i)
        }, l.prototype.run = function() {
          this.fun.apply(null, this.array)
        }, d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.version = "", d.versions = {}, d.on =
        c, d.addListener = c, d.once = c, d.off = c, d.removeListener = c, d.removeAllListeners = c, d.emit =
        c, d.prependListener = c, d.prependOnceListener = c, d.listeners = function(e) {
          return []
        }, d.binding = function(e) {
          throw new Error("process.binding is not supported")
        }, d.cwd = function() {
          return "/"
        }, d.chdir = function(e) {
          throw new Error("process.chdir is not supported")
        }, d.umask = function() {
          return 0
        }
    }, function(e, t) {
      var n;
      n = function() {
        return this
      }();
      try {
        n = n || Function("return this")() || (0, eval)("this")
      } catch (e) {
        "object" == ("undefined" == typeof window ? "undefined" : (0, m.default)(window)) && (n = window)
      }
      e.exports = n
    }, function(e, t, n) {
      function r(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var o = r(n(20)),
        a = r(n(25));
      ! function() {
        window.Promise || (window.Promise = a.default), window.send_umeng_event = window.send_umeng_event ||
          function() {}, window.client = window.client || {}, window.client.isNewsArticleVersionNoLessThan =
          function() {}, window.pgcEvent = window.pgcEvent || {}, window.Page = window.Page || {
            statistics: {
              item_id: 0
            }
          }, window.ToutiaoJSBridge = window.ToutiaoJSBridge || function() {};
        var e = document.querySelector("body");
        o.default.init({
          match: /^(tt-|pre)/i,
          selector: ".novel-card, .pgc-commodit, .tt-column-card, .tt-distribution-card, pre[lang]",
          context: {
            platform: "wap"
          }
        }).render(e)
      }()
    }, function(e, t, n) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0,
                h.default)(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        }(),
        o = n(0),
        a = function(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }(o),
        i = function(e) {
          function t(e) {
            ! function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var n = function(e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !t || "object" != (void 0 === t ? "undefined" : (0, m.default)(t)) && "function" !=
                typeof t ? e : t
            }(this, (t.__proto__ || (0, c.default)(t)).call(this, e));
            return n.state = {
              show: !0
            }, n.show = function() {
              n.setState({
                show: !0
              })
            }, n.cancel = function(e) {
              e.preventDefault(), (0, n.props.onCancel)(), n.setState({
                show: !1
              })
            }, n
          }
          return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError(
              "Super expression must either be null or a function, not " + (void 0 === t ? "undefined" :
                (0, m.default)(t)));
            e.prototype = (0, s.default)(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), t && (u.default ? (0, u.default)(e, t) : e.__proto__ = t)
          }(t, o.Component), r(t, [{
            key: "render",
            value: function() {
              var e = this,
                t = this.state.show,
                n = this.props.phone;
              return t ? a.default.createElement("div", {
                className: "phone-confirm"
              }, a.default.createElement("div", {
                className: "main"
              }, a.default.createElement("div", null, "联系电话"), a.default.createElement("div",
                null, n)), a.default.createElement("div", {
                className: "footer"
              }, a.default.createElement("div", {
                className: "btn-group"
              }, a.default.createElement("a", {
                className: "btn",
                onClick: function(t) {
                  return e.cancel(t)
                }
              }, "取消"), a.default.createElement("a", {
                className: "btn",
                href: "tel:" + n
              }, "呼叫")))) : null
            }
          }]), t
        }();
      t.default = i
    }, function(e, t, n) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0,
                h.default)(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        }(),
        o = n(0),
        a = function(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }(o),
        i = function(e) {
          function t(e) {
            ! function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var n = function(e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !t || "object" != (void 0 === t ? "undefined" : (0, m.default)(t)) && "function" !=
                typeof t ? e : t
            }(this, (t.__proto__ || (0, c.default)(t)).call(this, e));
            return n.play.bind(n), n.pause.bind(n), n
          }
          return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError(
              "Super expression must either be null or a function, not " + (void 0 === t ? "undefined" :
                (0, m.default)(t)));
            e.prototype = (0, s.default)(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), t && (u.default ? (0, u.default)(e, t) : e.__proto__ = t)
          }(t, o.Component), r(t, [{
            key: "play",
            value: function() {
              this.audio.play()
            }
          }, {
            key: "pause",
            value: function() {
              this.audio.pause()
            }
          }, {
            key: "render",
            value: function() {
              var e = this;
              return a.default.createElement("audio", {
                autoPlay: this.props.autoPlay,
                className: "audio-player " + this.props.className,
                controls: this.props.controls,
                loop: this.props.loop,
                muted: this.props.muted,
                onPlay: this.props.onPlay,
                preload: this.props.preload,
                ref: function(t) {
                  e.audio = t
                },
                src: this.props.src,
                style: this.props.style
              })
            }
          }, {
            key: "componentDidMount",
            value: function() {
              var e = this,
                t = this.audio;
              t.addEventListener("error", function(t) {
                e.props.onError(t)
              }), t.addEventListener("canplay", function(t) {
                e.props.onCanPlay(t)
              }), t.addEventListener("canplaythrough", function(t) {
                e.props.onCanPlayThrough(t)
              }), t.addEventListener("play", function(t) {
                e.setListenTrack(), e.props.onPlay(t)
              }), t.addEventListener("abort", function(t) {
                e.clearListenTrack(), e.props.onAbort(t)
              }), t.addEventListener("ended", function(t) {
                e.clearListenTrack(), e.props.onEnded(t)
              }), t.addEventListener("pause", function(t) {
                e.clearListenTrack(), e.props.onPause(t)
              }), t.addEventListener("seeked", function(t) {
                e.clearListenTrack(), e.props.onSeeked(t)
              })
            }
          }, {
            key: "setListenTrack",
            value: function() {
              var e = this;
              if (!this.listenTracker) {
                var t = this.props.listenInterval;
                this.listenTracker = setInterval(function() {
                  e.props.onListen(e.audio.currentTime)
                }, t)
              }
            }
          }, {
            key: "clearListenTrack",
            value: function() {
              this.listenTracker && (clearInterval(this.listenTracker), this.listenTracker = null)
            }
          }]), t
        }();
      i.defaultProps = {
        autoPlay: !1,
        children: null,
        className: "",
        controls: !1,
        listenInterval: 3e3,
        loop: !1,
        muted: !1,
        onAbort: function() {},
        onCanPlay: function() {},
        onCanPlayThrough: function() {},
        onEnded: function() {},
        onError: function() {},
        onListen: function() {},
        onPause: function() {},
        onPlay: function() {},
        onSeeked: function() {},
        preload: "auto",
        src: null
      }, t.default = i
    }, function(e, t, n) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0,
                h.default)(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        }(),
        o = n(0),
        a = function(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }(o);
      n(1);
      var i =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAANklEQVRIS2P88vXbfwYaAsZRCwiF7mgQEQohhtEgGg0igiFAUMFoKhoNIoIhQFDBaCoaAUEEAEIFXOkvlipRAAAAAElFTkSuQmCC",
        l = function(e) {
          function t(e) {
            ! function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var n = function(e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !t || "object" != (void 0 === t ? "undefined" : (0, m.default)(t)) && "function" !=
                typeof t ? e : t
            }(this, (t.__proto__ || (0, c.default)(t)).call(this, e));
            return n.summaryRef = null, n.setTextContentTimer = null, n.state = {
              styleType: window.Page.h5_settings.pgc_card_info.tma_style,
              styleExperiment: n.ifInStyleExperiment()
            }, n
          }
          return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError(
              "Super expression must either be null or a function, not " + (void 0 === t ? "undefined" :
                (0, m.default)(t)));
            e.prototype = (0, s.default)(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), t && (u.default ? (0, u.default)(e, t) : e.__proto__ = t)
          }(t, o.Component), r(t, [{
            key: "ifInStyleExperiment",
            value: function() {
              var e = {};
              try {
                e = JSON.parse(this.props.content) || {}
              } catch (e) {
                return !1
              }
              return !(!e || !e.styleExperiment) || !(!e || !e.styleexperiment)
            }
          }, {
            key: "componentDidMount",
            value: function() {
              this.checkWindowSize()
            }
          }, {
            key: "checkWindowSize",
            value: function() {
              var e = this;
              window.iH = window.innerHeight, window.aW = window.innerWidth - 30, window.aw <= 0 ||
                window.iH <= 0 ? this.setTextContentTimer = setTimeout(function() {
                  e.checkWindowSize()
                }, 250) : this.setTextContent()
            }
          }, {
            key: "componentWillUnmount",
            value: function() {
              clearTimeout(this.setTextContentTimer), this.setTextContentTimer = null
            }
          }, {
            key: "setTextContent",
            value: function() {
              var e = this.summaryRef;
              if (e && e.offsetHeight > 20) {
                var t = e.offsetWidth,
                  n = Math.floor(t / 16);
                Math.ceil(e.textContent.replace(/[^\x00-\xff]/g, "**").length / 2) > 2 * n - 4 && (e.innerText =
                  e.textContent.substr(0, 2 * n - 5) + "...")
              }
              var r = {};
              try {
                r = JSON.parse(this.props.content) || {}
              } catch (e) {
                console.error(e)
              }
              var o = this.cardRef;
              setTimeout(function() {
                o && o.className && !/card-hidden/.test(o.className) && window.sendUmengWhenTargetShown(
                  o, "mp_show", "", {
                    group_id: window.Page.statistics.group_id,
                    mp_id: r.app_id,
                    mp_gid: r.app_group_id,
                    position: "article_detail",
                    _param_for_special: 1 == r.type ? ["m", "i", "c", "r", "o", "_", "a", "p",
                      "p"
                    ].join("") : ["m", "i", "c", "r", "o", "_", "g", "a", "m", "e"].join("")
                  }, !0, {
                    version: 3
                  })
              }, 1e3)
            }
          }, {
            key: "sendEventParams",
            value: function(e) {
              return {
                group_id: window.Page.statistics.group_id,
                mp_id: e.app_id,
                mp_gid: e.app_group_id,
                position: "article_detail",
                _param_for_special: 1 == e.type ? ["m", "i", "c", "r", "o", "_", "a", "p", "p"].join(
                  "") : ["m", "i", "c", "r", "o", "_", "g", "a", "m", "e"].join("")
              }
            }
          }, {
            key: "renderStyleCard",
            value: function(e, t) {
              switch (e) {
                case 1:
                  return a.default.createElement("div", {
                    className: "content-test"
                  }, a.default.createElement("div", {
                    className: "cover-test"
                  }, a.default.createElement("div", {
                    className: "cover-test-img-container"
                  })), a.default.createElement("div", {
                    className: "introduce"
                  }, a.default.createElement("div", {
                    className: "text"
                  }, "周星驰携手王宝强回归，邀你观看新喜剧之王！"), a.default.createElement("div", {
                    className: "btn"
                  }, a.default.createElement("button", null, "点击购票"))));
                case 2:
                  return a.default.createElement("div", {
                    className: "content-test"
                  }, a.default.createElement("div", {
                    className: "cover-test"
                  }, a.default.createElement("div", {
                    className: "cover-test-img-container"
                  })), a.default.createElement("div", {
                    className: "introduce"
                  }, a.default.createElement("div", {
                    className: "text"
                  }, "周星驰携手王宝强回归，邀你观看新喜剧之王！"), a.default.createElement("div", {
                    className: "btn"
                  }, a.default.createElement("button", null, "去看看"))));
                case 3:
                  return a.default.createElement("div", {
                    className: "content-test"
                  }, a.default.createElement("div", {
                    className: "cover-test"
                  }, a.default.createElement("div", {
                    className: "cover-test-img-container"
                  })), a.default.createElement("div", {
                    className: "introduce-multiple"
                  }, a.default.createElement("div", {
                    className: "text"
                  }, a.default.createElement("div", {
                    className: "movie-name"
                  }, "新喜剧之王"), a.default.createElement("div", {
                    className: "movie-actor"
                  }, "主演：王宝强/鄂靖文/张全蛋"), a.default.createElement("div", {
                    className: "movie-intro"
                  }, "周星驰导演作品，不一样的喜剧")), a.default.createElement("div", {
                    className: "btn"
                  }, a.default.createElement("button", {
                    className: "btn-2"
                  }, "购票"))));
                case 4:
                  var n = (new Date).getTime(),
                    r = new Date("2019-02-05T08:00:00").getTime();
                  return a.default.createElement("div", {
                    className: "content-test"
                  }, a.default.createElement("div", {
                    className: "cover-test"
                  }, a.default.createElement("div", {
                    className: "cover-test-img-container"
                  })), a.default.createElement("div", {
                    className: "introduce-multiple"
                  }, a.default.createElement("div", {
                    className: "text"
                  }, a.default.createElement("div", {
                    className: "movie-name"
                  }, "新喜剧之王"), n < r ? a.default.createElement("div", {
                    className: "movie-book"
                  }, a.default.createElement("img", {
                    src: "http://sf1-ttcdn-tos.pstatp.com/obj/ttfe/booking.png"
                  })) : a.default.createElement("div", {
                    className: "movie-show"
                  }, a.default.createElement("img", {
                    src: "http://sf1-ttcdn-tos.pstatp.com/obj/ttfe/show.png"
                  })), a.default.createElement("div", {
                    className: "movie-intro"
                  }, "主演：王宝强/鄂靖文/张全蛋")), a.default.createElement("div", {
                    className: "btn"
                  }, a.default.createElement("button", {
                    className: "btn-2"
                  }, "购票"))));
                case 5:
                  return a.default.createElement("div", {
                    className: "content-test"
                  }, a.default.createElement("div", {
                    className: "introduce-pic"
                  }, a.default.createElement("div", {
                    className: "introduce-pic-container-2"
                  }, a.default.createElement("img", {
                    src: "http://sf1-ttcdn-tos.pstatp.com/obj/ttfe/move2.jpg"
                  })), a.default.createElement("div", {
                    className: "more"
                  }, "点击查看更多新喜剧之王相关信息")));
                case 6:
                  return a.default.createElement("div", {
                    className: "content-test"
                  }, a.default.createElement("div", {
                    className: "introduce-pic"
                  }, a.default.createElement("div", {
                    className: "introduce-pic-container-3"
                  }, a.default.createElement("img", {
                    src: "http://sf1-ttcdn-tos.pstatp.com/obj/ttfe/move3.png"
                  })), a.default.createElement("div", {
                    className: "more"
                  }, "点击查看更多新喜剧之王相关信息")));
                default:
                  return null
              }
            }
          }, {
            key: "render",
            value: function() {
              var e = this,
                t = navigator.userAgent,
                n = t.indexOf("Android") > -1 || t.indexOf("Adr") > -1,
                r = {};
              try {
                r = JSON.parse(this.props.content) || {}
              } catch (e) {
                return null
              }
              var o = this.state,
                l = o.styleType,
                c = o.styleExperiment;
              if (l && c) {
                var u = r.schema;
                return 6 === l && (u = u.replace("%2Fmovie%3F", "%2Fpreview%3F")), a.default.createElement(
                  "div", {
                    id: "" + r.app_id,
                    className: "applet-card surface-4 applet-card-test",
                    onClick: function() {
                      window.location.href = u + "&launch_from=article_detail", window.sendUmengEventV3(
                        "mp_click", e.sendEventParams(r))
                    },
                    ref: function(t) {
                      return e.cardRef = t
                    }
                  }, a.default.createElement("div", {
                    className: "container container-test"
                  }, a.default.createElement("div", {
                    className: "header"
                  }, a.default.createElement("span", {
                    className: "check-box"
                  }, a.default.createElement("img", {
                    src: r.icon,
                    onError: function(e) {
                      e.target.src = "" + i
                    }
                  })), a.default.createElement("span", {
                    className: "applet-name"
                  }, r.name), a.default.createElement("span", {
                    className: "divider"
                  }), a.default.createElement("span", {
                    className: "applet-title"
                  }, "小程序")), this.renderStyleCard(l, r)))
              }
              return a.default.createElement("div", {
                id: "" + r.app_id,
                className: "applet-card surface-4 line-1 " + (r.cover_img ? "multiple" : "single"),
                onClick: function() {
                  window.location.href = r.schema + "&launch_from=article_detail", window.sendUmengEventV3(
                    "mp_click", e.sendEventParams(r))
                },
                ref: function(t) {
                  return e.cardRef = t
                }
              }, r.cover_img ? a.default.createElement("div", {
                className: "container"
              }, a.default.createElement("div", {
                className: "cover surface-3 line-1"
              }, a.default.createElement("img", {
                src: r.cover_img,
                alt: "",
                onError: function(e) {
                  e.target.src =
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAABM0lEQVR4Xu3UwQnAMAwEQbv/dp18E3AP2teogYXh0D7P+y03LrBBjxvfAOjGGXTkDBp0JRB1/GjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCUsWjQkUCU+QErR1x29UyRGwAAAABJRU5ErkJggg=="
                }
              })), a.default.createElement("div", {
                className: "content"
              }, a.default.createElement("div", {
                className: "title font-1"
              }, a.default.createElement("img", {
                src: r.icon,
                onError: function(e) {
                  e.target.src = "" + i
                }
              }), a.default.createElement("span", {
                className: n ? "androidName" : "name"
              }, r.name), a.default.createElement("span", {
                className: "divider"
              }), a.default.createElement("span", {
                className: "applet"
              }, ["小", "程", "序"].join(""))), a.default.createElement("div", {
                className: (n ? "authorName" : "author") + " font-2",
                ref: function(t) {
                  return e.summaryRef = t
                }
              }, r.summary))) : a.default.createElement("div", {
                className: "container containerWithIcon"
              }, a.default.createElement("div", {
                className: "coverWithIcon"
              }, a.default.createElement("img", {
                src: r.icon,
                onError: function(e) {
                  e.target.src =
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAlklEQVRoQ+3SQQrAIBTEUL3/da1bvUMgICXd/wHzOte3z/jBN3vIY4qJPAYyEklEKtCvJYXFs4ngdNJhIlJYPJsITicdJiKFxbOJ4HTSYSJSWDybCE4nHSYihcWzieB00mEiUlg8mwhOJx0mIoXFs4ngdNJhIlJYPJsITicdJiKFxbOJ4HTSYSJSWDybCE4nHSYihcWzF2QVwY8BPOpxAAAAAElFTkSuQmCC"
                }
              })), a.default.createElement("div", {
                className: "contentWithIcon"
              }, a.default.createElement("div", {
                className: "title"
              }, a.default.createElement("span", {
                className: n ? "androidName" : "name"
              }, r.name), a.default.createElement("span", {
                className: "divider"
              }), a.default.createElement("span", {
                className: "applet"
              }, ["小", "程", "序"].join(""))), a.default.createElement("div", {
                className: "captionWithIcon"
              }, r.summary)), a.default.createElement("div", {
                className: "btn-container"
              }, a.default.createElement("button", null, "进入"))))
            }
          }]), t
        }();
      t.default = l
    }, function(e, t, n) {
      function r(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var o = function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0,
                h.default)(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        }(),
        a = n(0),
        i = r(a),
        l = r(n(9)),
        d = r(n(4));
      n(1);
      var f = r(n(2)),
        p = function(e) {
          function t(e) {
            ! function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var n = function(e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !t || "object" != (void 0 === t ? "undefined" : (0, m.default)(t)) && "function" !=
                typeof t ? e : t
            }(this, (t.__proto__ || (0, c.default)(t)).call(this, e));
            return n.state = {
              playing: !1,
              progress: 0,
              audioSrc: "",
              duration: 0
            }, n
          }
          return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError(
              "Super expression must either be null or a function, not " + (void 0 === t ? "undefined" :
                (0, m.default)(t)));
            e.prototype = (0, s.default)(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), t && (u.default ? (0, u.default)(e, t) : e.__proto__ = t)
          }(t, a.Component), o(t, [{
            key: "control",
            value: function() {
              this.state.playing ? this.refs.player.pause() : this.refs.player.play()
            }
          }, {
            key: "progress",
            value: function(e) {
              var t = this.props.time;
              0 == parseInt(t) && (t = this.state.duration);
              var n = Math.ceil(100 * e / t) + "%";
              this.setState({
                progress: n
              })
            }
          }, {
            key: "onPlay",
            value: function() {
              this.setState({
                playing: !0,
                duration: this.refs.player.audio.duration
              });
              for (var e in t.audioList) e !== this.props.id && t.audioList[e].pause();
              send_umeng_event && send_umeng_event("sound", "detail_play", {
                value: Page.statistics.item_id,
                extra: {
                  sound_id: this.props.id
                }
              })
            }
          }, {
            key: "onPause",
            value: function() {
              this.setState({
                playing: !1
              })
            }
          }, {
            key: "onEnded",
            value: function() {
              this.setState({
                playing: !1,
                progress: 0
              }), this.refs.player.audio.currentTime = 0
            }
          }, {
            key: "onError",
            value: function() {}
          }, {
            key: "render",
            value: function() {
              var e = this,
                t = this.props,
                n = t.title,
                r = t.time,
                o = t.content,
                a = (t.id, this.state),
                c = a.playing,
                u = a.progress,
                s = a.audioSrc;
              return i.default.createElement("div", {
                className: c ? "musicplayer playing" : "musicplayer not-playing",
                onClick: function() {
                  return e.control()
                }
              }, i.default.createElement("div", {
                className: "music-state"
              }, i.default.createElement("div", {
                className: "music-info"
              }, i.default.createElement("span", {
                className: "music-name"
              }, n), i.default.createElement("span", {
                className: "music-time"
              }, f.default.formatTime(r))), i.default.createElement("div", {
                className: "music-musician"
              }, o)), i.default.createElement("div", {
                className: "progressbar",
                style: {
                  width: u
                }
              }), i.default.createElement(l.default, {
                ref: "player",
                src: s,
                onError: function(t) {
                  return e.onError()
                },
                onListen: function(t) {
                  return e.progress(t)
                },
                onPause: function() {
                  return e.onPause()
                },
                onPlay: function(t) {
                  return e.onPlay(t)
                },
                onEnded: function(t) {
                  return e.onEnded(t)
                }
              }))
            }
          }, {
            key: "getAudioSourceById",
            value: function(e) {
              var t = this;
              (0, d.default)("http://i.snssdk.com/audio/play/1/toutiao/mp4/" + e).then(function(e) {
                return e.status >= 400 && ToutiaoJSBridge.call("toast", {
                  text: "音频获取失败，请重试",
                  icon_type: "icon_error"
                }), e.json()
              }).then(function(e) {
                return e.data && e.data.audio_list && e.data.audio_list.audio_1 ? atob(e.data.audio_list
                  .audio_1.main_url.replace(/\n/gi, "")) : ""
              }).then(function(e) {
                t.setState({
                  audioSrc: e
                })
              })
            }
          }, {
            key: "componentDidMount",
            value: function() {
              this.getAudioSourceById(this.props.id), t.audioList[this.props.id] = this.refs.player
            }
          }, {
            key: "componentWillUnmount",
            value: function() {
              t.audioList = null
            }
          }]), t
        }();
      p.audioList = {}, t.default = p
    }, function(e, t, n) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0,
                h.default)(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        }(),
        o = n(0),
        a = function(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }(o);
      n(1);
      var i = function(e) {
        function t(e) {
          ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, t);
          var n = function(e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !t || "object" != (void 0 === t ? "undefined" : (0, m.default)(t)) && "function" !=
                typeof t ? e : t
            }(this, (t.__proto__ || (0, c.default)(t)).call(this, e)),
            r = navigator.userAgent;
          return n.android = r.indexOf("Android") > -1 || r.indexOf("Linux") > -1, n.isToutiao =
            "http://nativeapp.toutiao.com" === document.referrer ||
            /(News|NewsSocial|Explore|NewsArticle|News_?Article)( |\/)(\d.\d.\d)/i.test(r), n
        }
        return function(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError(
            "Super expression must either be null or a function, not " + (void 0 === t ? "undefined" :
              (0, m.default)(t)));
          e.prototype = (0, s.default)(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), t && (u.default ? (0, u.default)(e, t) : e.__proto__ = t)
        }(t, o.Component), r(t, [{
          key: "componentDidMount",
          value: function() {
            if (this.isToutiao) {
              var e = {};
              try {
                e = JSON.parse(this.props.content) || {}
              } catch (e) {
                console.error(e)
              }
              window.sendUmengEventV3("show_column_card", {
                group_id: window.Page.statistics.group_id,
                column_id: e && e.column_id,
                fee: 100 * e.price,
                bookshelf_type: "column",
                is_column: 1
              }), window.__columnStatistic || (window.__columnStatistic = !0, window.sendUmengEventV3(
                "enter_column_link", {
                  group_id: window.Page.statistics.group_id,
                  is_column: 1
                }))
            }
          }
        }, {
          key: "toQuery",
          value: function(e) {
            return (0, l.default)(e).map(function(t) {
              return [t, e[t]].join("=")
            }).join("&")
          }
        }, {
          key: "render",
          value: function() {
            var e = this,
              t = {};
            try {
              t = JSON.parse(this.props.content) || {}
            } catch (e) {
              console.error(e)
            }
            var n = t,
              r = (n.prefixCls, n.title),
              o = n.author_description,
              i = n.thumb_url,
              l = n.sold,
              c = n.column_id,
              u = n.price,
              s = n.share_price,
              d = n.distribution_user_id;
            if (u) return null;
            var f = {
                column_id: c,
                share_price: s,
                enter_from: "click_article_recommend",
                distribution_source: window.Page.statistics.group_id,
                distribution_user_id: d
              },
              p = o.replace(/-.*$/, ""),
              m = "https://ic.snssdk.com/feoffline/column/v3/page/column.html?" + this.toQuery(f),
              h = {
                title: " ",
                url: encodeURIComponent(m),
                hide_more: 1,
                hide_bar: 1,
                hide_status_bar: 1,
                status_bar_color: "white",
                back_button_color: "white",
                disable_web_progressView: 1,
                should_append_common_param: 1
              };
            return a.default.createElement("div", {
              id: "column-card",
              className: "surface-4 line-1",
              onClick: function() {
                if (e.isToutiao && window.ToutiaoJSBridge) {
                  window.sendUmengEventV3("click_column_link", {
                    group_id: window.Page.statistics.group_id,
                    column_id: t && t.column_id,
                    fee: 100 * t.price,
                    bookshelf_type: "column",
                    is_column: 1
                  });
                  var n = "sslocal://webview?" + e.toQuery(h);
                  setTimeout(function() {
                    window.location.href = n
                  }, 200)
                } else window.location.href =
                  "https://ic.snssdk.com/column/v2/index/column/landing/?column_id=" + c
              }
            }, a.default.createElement("div", {
              className: "container"
            }, a.default.createElement("div", {
              className: "cover surface-3 line-1"
            }, a.default.createElement("img", {
              src: i,
              alt: ""
            }), a.default.createElement("i", {
              className: "column"
            })), a.default.createElement("div", {
              className: "content"
            }, a.default.createElement("div", {
              className: "title font-1"
            }, r), a.default.createElement("div", {
              className: "author font-2"
            }, "作者：", p), a.default.createElement("div", {
              className: "info " + (this.android ? "android" : "")
            }, a.default.createElement("span", {
              className: "price font-4"
            }, u ? u + "元" : "免费"), a.default.createElement("span", {
              className: "count font-3 line-1"
            }, l, "人已购")), a.default.createElement("div", {
              className: "button font-12 surface-7 " + (this.android ? "android" : "")
            }, "免费试读"))))
          }
        }]), t
      }();
      i.defaultProps = {
        prefixCls: "pgc-column-card",
        url: "",
        title: "",
        author_description: "",
        price: 0,
        sold: 0,
        column_id: ""
      }, t.default = i
    }, function(e, t, n) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0,
                h.default)(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        }(),
        o = n(0),
        a = function(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }(o);
      n(1);
      var i = function(e) {
        function t(e) {
          ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, t);
          var n = function(e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !t || "object" != (void 0 === t ? "undefined" : (0, m.default)(t)) && "function" !=
                typeof t ? e : t
            }(this, (t.__proto__ || (0, c.default)(t)).call(this, e)),
            r = navigator.userAgent;
          return n.android = r.indexOf("Android") > -1 || r.indexOf("Linux") > -1, n.isToutiao =
            "http://nativeapp.toutiao.com" === document.referrer ||
            /(News|NewsSocial|Explore|NewsArticle|News_?Article)( |\/)(\d.\d.\d)/i.test(r), n
        }
        return function(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError(
            "Super expression must either be null or a function, not " + (void 0 === t ? "undefined" :
              (0, m.default)(t)));
          e.prototype = (0, s.default)(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), t && (u.default ? (0, u.default)(e, t) : e.__proto__ = t)
        }(t, o.Component), r(t, [{
          key: "componentDidMount",
          value: function() {
            if (this.isToutiao) {
              var e = {};
              try {
                e = JSON.parse(this.props.content) || {}
              } catch (e) {
                console.error(e)
              }
              window.sendUmengEventV3("show_community_card", {
                group_id: window.Page.statistics.group_id,
                community_id: e && e.community_id,
                fee: 100 * e.price,
                bookshelf_type: "community",
                is_community: 1
              }), window.__communityStatistic || (window.__communityStatistic = !0, window.sendUmengEventV3(
                "enter_community_link", {
                  group_id: window.Page.statistics.group_id,
                  is_community: 1
                }))
            }
          }
        }, {
          key: "toQuery",
          value: function(e) {
            return (0, l.default)(e).map(function(t) {
              return [t, e[t]].join("=")
            }).join("&")
          }
        }, {
          key: "parseNumber",
          value: function(e) {
            return e > 1e4 ? (e / 1e4).toFixed(1) + "万" : e
          }
        }, {
          key: "render",
          value: function() {
            var e = this,
              t = {};
            try {
              t = JSON.parse(this.props.content) || {}
            } catch (e) {
              console.error(e)
            }
            var n = t,
              r = n.title,
              o = n.community_id,
              i = n.square_cover,
              l = n.member_count,
              c = n.price,
              u = n.media_name,
              s = {
                community_id: o,
                enter_from: "click_article_recommend"
              },
              d = "https://ic.snssdk.com/feoffline/market/v1/tpl/community/community.html?" + this.toQuery(
                s),
              f = {
                url: encodeURIComponent(d),
                title: " ",
                hide_more: 1,
                hide_bar: 1,
                hide_status_bar: 1,
                show_load_anim: 1,
                waiting_hide_anim: 1,
                bounce_disable: 1,
                use_offline: 1,
                status_bar_color: "white",
                back_button_color: "white",
                disable_web_progressView: 1,
                should_append_common_param: 1
              };
            return a.default.createElement("div", {
              id: "community-card",
              className: "surface-4 line-1",
              onClick: function() {
                if (e.isToutiao && window.ToutiaoJSBridge) {
                  window.sendUmengEventV3("click_community_link", {
                    group_id: window.Page.statistics.group_id,
                    community_id: t && t.community_id,
                    fee: 100 * c,
                    bookshelf_type: "community",
                    is_community: 1
                  });
                  var n = "sslocal://webview?" + e.toQuery(f);
                  setTimeout(function() {
                    window.location.href = n
                  }, 200)
                } else window.location.href =
                  "https://ic.snssdk.com/market/v1/tpl/landing/community/community.html?community_id=" +
                  val.community_id
              }
            }, a.default.createElement("div", {
              className: "container"
            }, a.default.createElement("div", {
              className: "cover surface-3 line-1"
            }, a.default.createElement("img", {
              src: "https://p3.pstatp.com/large/" + i,
              alt: "圈子封面"
            }), a.default.createElement("i", {
              className: "community"
            })), a.default.createElement("div", {
              className: "content"
            }, a.default.createElement("div", {
              className: "title font-1"
            }, r), a.default.createElement("div", {
              className: "author font-2"
            }, "圈主：", u), a.default.createElement("div", {
              className: "info " + (this.android ? "android" : "")
            }, a.default.createElement("span", {
              className: "count font-3 line-1"
            }, this.parseNumber(l), "成员")), a.default.createElement("div", {
              className: "button font-12 surface-7 " + (this.android ? "android" : "")
            }, "进入圈子"))))
          }
        }]), t
      }();
      i.defaultProps = {
        prefixCls: "pgc-community-card",
        content: {}
      }, t.default = i
    }, function(e, t, n) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = i.default || function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        },
        o = function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0,
                h.default)(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        }(),
        d = n(0),
        f = function(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }(d);
      n(1);
      var p = {
          BOOK_PAGE: "https://ic.snssdk.com/feoffline/novel/book/page/v1/index.html",
          CHANNEL_PAGE: "https://ic.snssdk.com/feoffline/novel/channel/index.html",
          READER_V2: "https://ic.snssdk.com/feoffline/novel_reader/novel/book/reader/v2/page/index.html",
          READER_V3: "https://ic.snssdk.com/feoffline/novel_reader/novel/book/reader/v3/page/index.html"
        },
        v = function(e) {
          function t(e) {
            ! function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var n = function(e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !t || "object" != (void 0 === t ? "undefined" : (0, m.default)(t)) && "function" !=
                typeof t ? e : t
            }(this, (t.__proto__ || (0, c.default)(t)).call(this, e));
            n.enterChannel = function() {
              location.href = n.card.channelUrl
            }, n.enterPage = function() {
              location.href = n.card.pageUrl
            }, n.enterReader = function() {
              location.href = n.card.readerUrl
            };
            var r = {};
            try {
              r = JSON.parse(n.props.content) || {}
            } catch (e) {
              console.error(e)
            }
            return n.recUrlParams = {}, n.card = {}, n.navigateFrom = "distribution_card", n.state = {
              content: r
            }, n
          }
          return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError(
              "Super expression must either be null or a function, not " + (void 0 === t ? "undefined" :
                (0, m.default)(t)));
            e.prototype = (0, s.default)(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), t && (u.default ? (0, u.default)(e, t) : e.__proto__ = t)
          }(t, d.Component), o(t, [{
            key: "componentDidMount",
            value: function() {
              this.item_id = window.Page.statistics.item_id, this.initRecParams(), this.initUrl()
            }
          }, {
            key: "initRecParams",
            value: function() {
              var e = window.Page,
                t = e.category_name,
                n = void 0 === t ? "" : t,
                o = e.enter_from,
                i = void 0 === o ? "" : o,
                l = e.statistics,
                c = void 0 === l ? {} : l,
                u = e.log_pb,
                s = void 0 === u ? "" : u;
              this.recUrlParams = r({}, this.recUrlParams, {
                category_name: n,
                rec_enter: i,
                group_id: c.group_id,
                log_pb: "string" != typeof s ? (0, a.default)(s) : s
              })
            }
          }, {
            key: "initUrl",
            value: function() {
              var e = this,
                t = this.state.content,
                n = t.book_id,
                o = t.item_id,
                a = t.group_id,
                i = (window.Page || {}).statistics,
                c = void 0 === i ? {} : i,
                u = {};
              (0, l.default)(this.recUrlParams).forEach(function(t) {
                u.e = encodeURIComponent(e.recUrlParams[t])
              });
              var s = p.BOOK_PAGE + "?" + this.toQuery(r({
                book_id: n,
                enter_from: this.navigateFrom,
                from_item_id: c.group_id
              }, u));
              this.card.pageUrl = this.getWebviewUrl(s);
              var d = window.client.isAndroid && window.client.isNewsArticleVersionNoLessThan("6.9.5"),
                f = d ? p.READER_V3 : p.READER_V2;
              this.card.readerUrl = this.getNovelReaderUrl(d, f + "?" + this.toQuery(r({
                groupid: a,
                item_id: o,
                book_id: n,
                detail_item_id: c.group_id,
                group_id: c.item_id,
                from_type: 3,
                enter_from: this.navigateFrom,
                parent_enterfrom: "novel_sale_card"
              }, u)));
              var m = p.CHANNEL_PAGE + "?" + this.toQuery(r({
                enter_from: this.navigateFrom,
                from_item_id: c.group_id
              }, u));
              this.card.channelUrl = this.getWebviewUrl(m, {
                title: "小说频道",
                hide_bar: 0
              })
            }
          }, {
            key: "toQuery",
            value: function(e) {
              return (0, l.default)(e).map(function(t) {
                return [t, e[t]].join("=")
              }).join("&")
            }
          }, {
            key: "getWebviewUrl",
            value: function(e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = r({
                  url: encodeURIComponent(e),
                  hide_more: 1,
                  hide_bar: 1,
                  disable_web_progressView: 1,
                  should_append_common_param: 1,
                  bounce_disable: 1,
                  use_offline: 1
                }, t);
              return "sslocal://webview?" + this.toQuery(n)
            }
          }, {
            key: "getNovelReaderUrl",
            value: function(e, t) {
              var n = e ? "sslocal://novel_reader" : "sslocal://novel",
                r = {
                  url: encodeURIComponent(t),
                  should_append_common_param: 1,
                  bounce_disable: 1,
                  hide_more: 1,
                  hide_bar: 1,
                  style_canvas: 1,
                  hide_back_buttonView: 1,
                  use_offline: 1
                };
              return n + "?" + this.toQuery(r)
            }
          }, {
            key: "render",
            value: function() {
              var e = this.state.content,
                t = e.thumb_url,
                n = e.title,
                r = e.author,
                o = (e.price, e.novel_id, e.read_count, e.word_count),
                a = e.category,
                i = e.creation_status;
              return f.default.createElement("div", {
                class: "distribution-card",
                onClick: this.enterReader
              }, f.default.createElement("div", {
                class: "pcard-clearfix"
              }, f.default.createElement("div", {
                class: "fiction-left"
              }, f.default.createElement("img", {
                class: "fiction-image",
                src: t
              })), f.default.createElement("div", {
                class: "fiction-right"
              }, f.default.createElement("div", {
                class: "pcard-button"
              }, "免费试读"), f.default.createElement("div", {
                class: "right-info"
              }, f.default.createElement("div", {
                class: "pcard-title"
              }, n), f.default.createElement("div", {
                class: "pcard-author"
              }, r), f.default.createElement("div", {
                class: "pcard-other"
              }, a, " ", 0 == i ? "已完结" : "连载中", " ", o, "字")))))
            }
          }]), t
        }();
      t.default = v
    }, function(e, t, n) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0,
                h.default)(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        }(),
        o = n(0),
        a = function(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }(o);
      n(1);
      var i = function(e) {
        function t(e) {
          ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, t);
          var n = function(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != (void 0 === t ? "undefined" : (0, m.default)(t)) && "function" !=
              typeof t ? e : t
          }(this, (t.__proto__ || (0, c.default)(t)).call(this, e));
          return n.state = {
            status: "idle",
            installed: 0,
            progress: 0
          }, n
        }
        return function(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError(
            "Super expression must either be null or a function, not " + (void 0 === t ? "undefined" :
              (0, m.default)(t)));
          e.prototype = (0, s.default)(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), t && (u.default ? (0, u.default)(e, t) : e.__proto__ = t)
        }(t, o.Component), r(t, [{
          key: "hasDownloader",
          value: function() {
            return client.isNewsArticleVersionNoLessThan("6.1.4")
          }
        }, {
          key: "setInstalledState",
          value: function(e) {
            this.setState({
              installed: e
            })
          }
        }, {
          key: "isInstalled",
          value: function() {
            var e = this;
            ToutiaoJSBridge.call("isAppInstalled", {
              pkg_name: this.props.pkg_name
            }, function(t) {
              e.setInstalledState(1 == t.installed ? 1 : 0)
            })
          }
        }, {
          key: "renderProgress",
          value: function() {
            var e = void 0,
              t = this.state.progress;
            return t <= 50 ? (e = "rotate(" + (180 + 3.6 * t) + "deg)", a.default.createElement(
              "div", {
                className: "progress-ring"
              }, a.default.createElement("i", {
                className: "left"
              }, a.default.createElement("i", {
                style: {
                  WebkitTransform: e,
                  transform: e
                }
              })))) : (e = "rotate(" + (3.6 * t - 360) + "deg)", a.default.createElement("div", {
              className: "progress-ring"
            }, a.default.createElement("i", {
              className: "left"
            }, a.default.createElement("i", null)), a.default.createElement("i", {
              className: "right"
            }, a.default.createElement("i", {
              style: {
                WebkitTransform: e,
                transform: e
              }
            }))))
          }
        }, {
          key: "renderIcon",
          value: function(e) {
            return "download_active" === e ? a.default.Children.only(a.default.createElement("div",
                null, this.renderProgress(), "暂停")) : "download_paused" === e ? a.default.Children.only(
                a.default.createElement("div", null, this.renderProgress(), "继续")) :
              "download_finished" === e ? a.default.Children.only(a.default.createElement("div",
                null, "安装")) : a.default.Children.only(a.default.createElement("div", null, a.default
                .createElement("i", null, ""), "下载"))
          }
        }, {
          key: "renderButton",
          value: function(e, t) {
            var n = this,
              r = 1 == e ? "gd-button gd1-btn iconfont" : "gd-button gd2-btn iconfont";
            return 1 == this.state.installed ? a.default.createElement("div", {
              className: r,
              onClick: function(e) {
                return n.handleButton(e)
              }
            }, a.default.createElement("i", null, ""), "打开") : a.default.createElement("div", {
              className: r,
              onClick: function(e) {
                return n.handleButton(e)
              }
            }, this.renderIcon(t))
          }
        }, {
          key: "render",
          value: function() {
            var e = this,
              t = this.props,
              n = t.logo,
              r = t.banner,
              o = t.name,
              i = t.game_type,
              l = t.size,
              c = t.desc,
              u = t.detail,
              s = t.download_url_for_ios,
              d = (t.pkg_name, t.download_url_for_android),
              f = this.state.status,
              p = void 0;
            if (n && (p = 1), r && (p = 2), client.isIOS && s) u = s, setTimeout(function() {
              return e.setInstalledState(0)
            }, 0);
            else {
              if (!client.isAndroid || !d) return null;
              u = u ? "sslocal://webview?url=" + encodeURIComponent(u) : d
            }
            return 1 == p ? a.default.createElement("a", {
              className: "game-downloader gd1",
              onClick: function() {
                return e.log("detail")
              },
              href: u
            }, a.default.createElement("img", {
              className: "gd-icon",
              src: n
            }), " ", this.renderButton(p, f), a.default.createElement("div", {
              className: "gd1-cont"
            }, a.default.createElement("div", {
              className: "gd1-cont-name"
            }, o), a.default.createElement("div", {
              className: "gd1-cont-text"
            }, i, " ", i ? a.default.createElement("span", {
              className: "gd1-cont-split"
            }) : "", l), a.default.createElement("div", {
              className: "gd1-cont-text"
            }, c))) : 2 == p ? a.default.createElement("a", {
              className: "game-downloader gd2",
              onClick: function() {
                return e.log("detail")
              },
              href: u
            }, a.default.createElement("img", {
              className: "gd2-cover",
              src: r
            }), a.default.createElement("div", {
              className: "gd2-info"
            }, this.renderButton(p, f), a.default.createElement("div", {
              className: "gd2-cont"
            }, a.default.createElement("div", {
              className: "gd2-cont-name"
            }, o), a.default.createElement("div", {
              className: "gd2-cont-text"
            }, i, " ", i ? a.default.createElement("span", {
              className: "gd2-cont-split"
            }) : "", l)))) : null
          }
        }, {
          key: "subscribe",
          value: function() {
            t.eventList[this.appad.id] = this.handler.bind(this), ToutiaoJSBridge.call(
              "subscribe_app_ad", {
                data: this.state.appad
              })
          }
        }, {
          key: "unsubscribe",
          value: function() {
            delete t.eventList[this.appad.id], ToutiaoJSBridge.call("unsubscribe_app_ad", {
              data: this.appad
            })
          }
        }, {
          key: "handler",
          value: function(e) {
            e.current_bytes = e.current_bytes >= 0 ? e.current_bytes : 0;
            var t = e.current_bytes / e.total_bytes;
            t = isNaN(t) ? 0 : Math.floor(100 * t), "download_failed" === e.status &&
              ToutiaoJSBridge.call("toast", {
                text: "应用下载失败"
              }), this.setState({
                status: e.status,
                progress: t
              })
          }
        }, {
          key: "log",
          value: function(e) {
            send_umeng_event(this.appad.tag, e, this.statisticsData)
          }
        }, {
          key: "handleButton",
          value: function(e) {
            1 == this.state.installed ? (e.stopPropagation(), e.preventDefault(), this.log(
              "click_open"), ToutiaoJSBridge.call("openThirdApp", {
              pkg_name: this.props.pkg_name
            }, function(e) {
              0 == e.code && ToutiaoJSBridge.call("toast", {
                text: "打开应用失败，请稍后尝试"
              })
            })) : client.isAndroid && this.hasDownloader() ? (e.stopPropagation(), e.preventDefault(),
              ToutiaoJSBridge.call("download_app_ad", {
                data: this.appad
              })) : client.isAndroid && (e.stopPropagation(), e.preventDefault(), location.href =
              this.appad.download_url_for_android, this.log("click_download"))
          }
        }, {
          key: "componentDidMount",
          value: function() {
            var e = function(e, t) {
              var n = {};
              for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) &&
                (n[r] = e[r]);
              return n
            }(this.props, []);
            e.type = "app", e.source = "pgc", e.tag = "article_card_app_ad", e.item_id = Page.statistics
              .item_id, e.media_id = Page.author.mediaId, e.log_extra =
              '{"rit":3,"item_id":0,"convert_id":0}', client.isIOS && e.download_url_for_ios ? e.detail =
              e.download_url_for_ios : client.isAndroid && e.download_url_for_android && (e.detail ?
                e.detail = "sslocal://webview?url=" + encodeURIComponent(e.detail) : e.detail = e.download_url_for_android,
                e.download_url = e.download_url_for_android), e.download_url = e.download_url_for_android,
              this.appad = e, this.hasDownloader() && this.subscribe(), this.isInstalled(), t.startListen ||
              (ToutiaoJSBridge.on("app_ad_event", function(e) {
                var n = (e = e || {}).appad || {};
                t.eventList[n.id](e)
              }), t.startListen = !0), this.statisticsData = {
                value: Page.statistics.item_id,
                extra: {
                  card_type: e.card_type,
                  app_name: encodeURIComponent(e.name),
                  pkg_name: e.pkg_name,
                  app_id: e.app_id,
                  app_category: encodeURIComponent(e.game_type),
                  media_id: Page.author.mediaId,
                  item_id: Page.statistics.item_id
                }
              }, this.log("show"), ToutiaoJSBridge.call("subscribe_app_ad", {
                data: this.appad
              })
          }
        }, {
          key: "componentWillUnmount",
          value: function() {
            ToutiaoJSBridge.call("unsubscribe_app_ad", {
              data: this.appad
            }), t.eventList = null
          }
        }]), t
      }();
      i.defaultProps = {
        card_type: 0,
        card_id: 0,
        type: "game",
        logo: "http://p3.pstatp.com/large/22d30005ec3a6f01ff6a",
        banner: "http://p3.pstatp.com/large/22d30005ec3a6f01ff6a",
        name: "游戏",
        game_type: "游戏类型",
        size: "0",
        desc: "游戏描述",
        detail: "",
        pkg_name: "",
        download_url_for_android: "",
        download_url_for_ios: ""
      }, i.startListen = !1, i.eventList = {}, t.default = i
    }, function(e, t, n) {
      function r(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var o = r(n(11)),
        a = r(n(15)),
        i = r(n(17)),
        l = r(n(19)),
        c = r(n(18)),
        u = r(n(12)),
        s = r(n(13)),
        d = r(n(14)),
        f = r(n(10));
      t.default = {
        Audio: o.default,
        Game: a.default,
        Novel: i.default,
        Temai: l.default,
        PhoneGroup: c.default,
        ColumnCard: u.default,
        CommunityCard: s.default,
        DistributionCard: d.default,
        AppletCard: f.default
      }
    }, function(e, t, n) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0,
                h.default)(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        }(),
        o = n(0),
        a = function(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }(o);
      n(1);
      var i = function(e) {
        function t() {
          return function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t),
            function(e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !t || "object" != (void 0 === t ? "undefined" : (0, m.default)(t)) && "function" !=
                typeof t ? e : t
            }(this, (t.__proto__ || (0, c.default)(t)).apply(this, arguments))
        }
        return function(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError(
            "Super expression must either be null or a function, not " + (void 0 === t ? "undefined" :
              (0, m.default)(t)));
          e.prototype = (0, s.default)(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), t && (u.default ? (0, u.default)(e, t) : e.__proto__ = t)
        }(t, o.Component), r(t, [{
          key: "render",
          value: function() {
            var e = this.props,
              t = e.thumb_url,
              n = e.book_name,
              r = e.schema_url,
              o = e.abstract,
              i = e.author,
              l = e.category;
            return a.default.createElement("div", {
              className: "novel-card"
            }, a.default.createElement("a", {
              href: r,
              target: "_blank",
              className: "novel-card-link"
            }, a.default.createElement("div", {
              className: "novel-card-cover"
            }, a.default.createElement("img", {
              className: "movie-image",
              src: t,
              alt: n
            })), a.default.createElement("div", {
              className: "novel-card-content"
            }, a.default.createElement("p", {
              className: "novel-card-title"
            }, n), a.default.createElement("p", {
              className: "novel-card-abstract"
            }, o), a.default.createElement("div", {
              className: "novel-card-detail"
            }, a.default.createElement("span", {
              className: "novel-card-detail-item novel-card-author"
            }, i), a.default.createElement("span", {
              className: "novel-card-detail-item novel-card-category"
            }, l), a.default.createElement("i", {
              className: "novel-card-icon"
            }), a.default.createElement("span", {
              className: "novel-card-more"
            }, "查看更多")))))
          }
        }]), t
      }();
      t.default = i
    }, function(t, n, r) {
      function o(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function a(e) {
        return e ? e.replace(/&amp;/g, "&") : ""
      }
      Object.defineProperty(n, "__esModule", {
        value: !0
      });
      var i = function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0,
                h.default)(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        }(),
        l = r(0),
        d = o(l);
      r(1);
      var f = o(r(8)),
        p = o(r(4)),
        v = o(r(23)),
        _ = function(t) {
          function n(t) {
            ! function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, n);
            var r = function(e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !t || "object" != (void 0 === t ? "undefined" : (0, m.default)(t)) && "function" !=
                typeof t ? e : t
            }(this, (n.__proto__ || (0, c.default)(n)).call(this, t));
            return r.state = {
              phone: null
            }, r.setConfirm = function(e) {
              r.confirm = e
            }, r.contactDial = function(e) {
              var t = r.props["contact-phone"],
                n = r.props.ai_type,
                o = r.props.is_smart || 0,
                a = r.props.custom_data;
              r.log("call", "click", t, {
                actualPhone: t,
                ai_type: n,
                is_smart: o,
                custom_data: a
              })
            }, r.dial = function(e) {
              e.preventDefault();
              var t = r.props["contact-phone"],
                n = r.props.ai_type,
                o = r.props.is_smart || 0,
                a = r.props.custom_data;
              r.getPhone(function(e, i) {
                r.log("call", "click", t, {
                  actualPhone: i,
                  ai_type: n,
                  is_smart: o,
                  custom_data: a
                })
              }), r.confirm && r.confirm.show()
            }, r.smartDial = function(e) {
              e.preventDefault();
              var t = r.props["contact-phone"],
                n = r.props.ai_type,
                o = r.props.is_smart || 0,
                a = r.props.custom_data;
              r.getVirtualPhone(function(e, i) {
                r.log("call", "click", t, {
                  actualPhone: i,
                  ai_type: n,
                  is_smart: o,
                  custom_data: a
                }), location.href = "tel:" + i
              })
            }, r.log = function(e, t, n, r) {
              t = t || "click";
              var o = {
                value: Page.statistics.item_id,
                extra: {
                  action_type: e,
                  button_value: n,
                  action_time: (new Date).getTime()
                }
              };
              "call" === e && (o.extra.button_value_show = r.actualPhone, o.extra.ai_type = r.ai_type, o.extra
                .is_smart = r.is_smart, o.extra.custom_data = r.custom_data), send_umeng_event(
                "embeded_button_ad", t, o)
            }, r.logWhenShow = function(t, n) {
              var o = r.props.ai_type,
                a = r.props.is_smart || 0,
                i = r.props.custom_data;
              sendUmengWhenTargetShown(t, "embeded_button_ad", "show", e("_6BrwHiQ").extend({}, {
                value: Page.statistics.item_id,
                extra: {
                  action_type: "show",
                  button_value: n,
                  ai_type: o,
                  is_smart: a,
                  custom_data: i,
                  action_time: (new Date).getTime()
                }
              }, !0))
            }, r.getVirtualPhone = function(t) {
              var n = r.props["contact-phone"],
                o = r.props.custom_data,
                a = r.props.call_back_url,
                i = r.props.ai_type;
              ToutiaoJSBridge && ToutiaoJSBridge.call("TTNetwork.commonParams", {}, function(r) {
                var l = r.data || r;
                l && l.device_id && e("_6BrwHiQ").ajax({
                  url: "http://i.snssdk.com/pgcui/get_smart_phone_dynamic_number/",
                  data: {
                    item_id: Page.statistics.item_id,
                    device_id: l.device_id,
                    user_uid: Page.author.userId,
                    ai_type: i,
                    custom_data: o,
                    callback_url: a,
                    phone_number: n
                  },
                  success: function(e) {
                    "success" === e.message && e.data.virtual_number ? t(1, e.data.virtual_number) :
                      t(0, n)
                  },
                  error: function(e) {
                    t(0, n)
                  }
                })
              })
            }, r.getPhone = function(e) {
              var t = r,
                n = r.props,
                o = n.hid,
                a = n.city,
                i = r.props["contact-phone"];
              if (i) {
                var l = i.split(",");
                if (l.length <= 1) return void r.setState({
                  phone: i
                });
                var c = {
                    hid: o,
                    fzz: l[0],
                    ext: l[1],
                    city: a,
                    cstr: (0, v.default)("" + a + o + "callcenter")
                  },
                  u = [];
                for (var s in c) u.push(s + "=" + c[s]);
                var d = u.join("&");
                (0, p.default)("http://m.leju.com/?site=api&ctl=callcenter&act=calling&" + d).then(function(
                  e) {
                  return e.status >= 400 && ToutiaoJSBridge.call("toast", {
                    text: "电话拨打失败",
                    icon_type: "icon_error"
                  }), e.json()
                }).then(function(e) {
                  return 1 == e.status ? e.info.fzz : null
                }).then(function(t) {
                  e(1, t), r.setState({
                    phone: t
                  })
                }).catch(function(n) {
                  e(0, t.props["contact-phone"])
                })
              }
            }, r.cancelPhone = function() {
              var e = r.state.phone,
                t = {
                  fzz: e,
                  cstr: (0, v.default)(e + "callcenter")
                },
                n = [];
              for (var o in t) n.push(o + "=" + t[o]);
              var a = n.join("&");
              (0, p.default)("http://m.leju.com/?site=api&ctl=callcenter&act=cancel&" + a).then(function(e) {
                return e.json()
              }).then(function(e) {
                return 1 == e.status && this.setState({
                  phone: null
                }), null
              })
            }, r
          }
          return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError(
              "Super expression must either be null or a function, not " + (void 0 === t ? "undefined" :
                (0, m.default)(t)));
            e.prototype = (0, s.default)(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), t && (u.default ? (0, u.default)(e, t) : e.__proto__ = t)
          }(n, l.Component), i(n, [{
            key: "render",
            value: function() {
              var e = this,
                t = this.props["contact-phone"],
                n = this.props["contact-name"],
                r = this.props["book-url"],
                o = this.props["book-name"],
                i = this.props.city,
                l = this.props.hid,
                c = (this.props.house_type, this.props.agent_phone, this.props.is_smart || 0),
                u = (this.props.ai_type, this.props.context),
                s = this.state.phone,
                p = 0,
                m = 0,
                h = 0;
              return n && t && (p++, m = 1), r && o && (p++, h = 1), "pc" == u.platform ? null : 2 ==
                c || i && l ? /iPhone|XiaoMi/.test(window.navigator.userAgent) || /MI/.test(window.navigator
                  .userAgent.split("/")[1]) ? d.default.createElement("div", {
                  className: "cpg-container",
                  "button-count": p
                }, m ? d.default.createElement("a", {
                  ref: function(t) {
                    return e.phoneRef = t
                  },
                  className: "cpg-button cpg-call",
                  onClick: this.contactDial,
                  href: "tel:" + t
                }, n) : null, h ? d.default.createElement("a", {
                  className: "cpg-button cpg-link",
                  onClick: function() {
                    return e.log("url", "click", r)
                  },
                  href: "sslocal://webview?url=" + encodeURIComponent(a(r))
                }, o) : null) : d.default.createElement("div", {
                  className: "cpg-container",
                  "button-count": p
                }, m ? d.default.createElement("a", {
                  ref: function(t) {
                    return e.phoneRef = t
                  },
                  className: "cpg-button cpg-call",
                  onClick: this.dial,
                  href: "tel:" + t
                }, n) : null, h ? d.default.createElement("a", {
                  className: "cpg-button cpg-link",
                  onClick: function() {
                    return e.log("url", "click", r)
                  },
                  href: "sslocal://webview?url=" + encodeURIComponent(a(r))
                }, o) : null, s ? d.default.createElement(f.default, {
                  phone: s,
                  onCancel: this.cancelPhone,
                  city: i,
                  hid: l,
                  ref: this.setConfirm
                }) : null) : 1 == c ? d.default.createElement("div", {
                  className: "cpg-container",
                  "button-count": p
                }, m ? d.default.createElement("a", {
                  ref: function(t) {
                    return e.phoneRef = t
                  },
                  className: "cpg-button cpg-call",
                  onClick: this.smartDial,
                  href: "tel:" + t
                }, n) : null, h ? d.default.createElement("a", {
                  ref: function(t) {
                    return e.urlRef = t
                  },
                  className: "cpg-button cpg-link",
                  onClick: function() {
                    return e.log("url", "click", r)
                  },
                  href: "sslocal://webview?url=" + encodeURIComponent(a(r))
                }, o) : null) : d.default.createElement("div", {
                  className: "cpg-container",
                  "button-count": p
                }, m ? d.default.createElement("a", {
                  ref: function(t) {
                    return e.phoneRef = t
                  },
                  className: "cpg-button cpg-call",
                  onClick: this.contactDial,
                  href: "tel:" + t
                }, n) : null, h ? d.default.createElement("a", {
                  ref: function(t) {
                    return e.urlRef = t
                  },
                  className: "cpg-button cpg-link",
                  onClick: function() {
                    return e.log("url", "click", r)
                  },
                  href: "sslocal://webview?url=" + encodeURIComponent(a(r))
                }, o) : null)
            }
          }, {
            key: "componentDidMount",
            value: function() {
              var e = this.props["contact-phone"];
              this.phoneRef && this.logWhenShow(this.phoneRef, e)
            }
          }, {
            key: "componentWillUnmount",
            value: function() {
              this.state.phone && this.cancelPhone()
            }
          }]), n
        }();
      n.default = _
    }, function(e, t, n) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0,
                h.default)(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        }(),
        o = n(0),
        a = function(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }(o);
      n(1);
      var i = function(e) {
        function t() {
          return function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t),
            function(e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !t || "object" != (void 0 === t ? "undefined" : (0, m.default)(t)) && "function" !=
                typeof t ? e : t
            }(this, (t.__proto__ || (0, c.default)(t)).apply(this, arguments))
        }
        return function(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError(
            "Super expression must either be null or a function, not " + (void 0 === t ? "undefined" :
              (0, m.default)(t)));
          e.prototype = (0, s.default)(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), t && (u.default ? (0, u.default)(e, t) : e.__proto__ = t)
        }(t, o.Component), r(t, [{
          key: "render",
          value: function() {
            var e = this.props,
              t = e.charge_url,
              n = (e.commodity_id, e.img_url),
              r = e.price,
              o = (e.slave_commodity_id, e.source),
              i = e.title;
            return a.default.createElement("div", {
              className: "pgc-commodity"
            }, a.default.createElement("a", {
              className: "pgc-commodity-link",
              href: t
            }, a.default.createElement("div", {
              className: "pgc-commodity-box"
            }, a.default.createElement("div", {
              className: "pgc-commodity-img-box"
            }, a.default.createElement("div", {
              className: "pgc-commodity-img-square"
            }, a.default.createElement("img", {
              src: n,
              alt: "特卖"
            }))), a.default.createElement("div", {
              className: "pgc-commodity-info"
            }, a.default.createElement("h3", {
              className: "pgc-commodity-title"
            }, i), a.default.createElement("div", {
              className: "pgc-commodity-bar"
            }, a.default.createElement("span", {
              className: "pgc-commodity-price"
            }, "￥", r), a.default.createElement("span", {
              className: "pgc-commodity-from"
            }, o), a.default.createElement("span", {
              className: "pgc-commodity-buy"
            }, "购买"))))))
          }
        }]), t
      }();
      t.default = i
    }, function(e, t, n) {
      function r(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var o = i.default || function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        },
        a = function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0,
                h.default)(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        }(),
        l = r(n(0)),
        c = r(n(0)),
        u = r(n(2)),
        s = r(n(16)),
        d = {},
        f = function() {
          function e() {
            (function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            })(this, e), this.init({
              match: /^(tt-|pre)/i,
              selector: ["tt-column-card", "tt-applet-card", "tt-distribution-card", "tt-community-card"],
              context: {
                platform: "client"
              }
            })
          }
          return a(e, null, [{
            key: "getInstance",
            value: function() {
              return e.instance || (e.instance = new e), e.instance
            }
          }]), a(e, [{
            key: "init",
            value: function(e) {
              return this.config = o({}, this.config, e), this
            }
          }, {
            key: "registerCard",
            value: function(e) {
              var t = e.tag,
                n = e.selector,
                r = e.component;
              return t && (d[t] = r), n && (d[n] = r), this
            }
          }, {
            key: "getComponent",
            value: function(e) {
              return e = e.toLowerCase(), d[e]
            }
          }, {
            key: "isCard",
            value: function(e) {
              return void 0 !== d[e]
            }
          }, {
            key: "checkCardTag",
            value: function(e) {
              if (e && e.nodeName) {
                var t = this.config,
                  n = t.match,
                  r = t.selector;
                if (n.test(e.nodeName)) return !0;
                if (-1 !== r.indexOf(e.className)) return !0
              }
              return !1
            }
          }, {
            key: "resolveTagToComponent",
            value: function(e) {
              if (e) {
                var t = e.toLowerCase().split("-");
                t.length > 1 && t.shift();
                for (var n = "", r = 0, o = t.length; r < o; r++) n += u.default.firstUpper(t[r]);
                return n
              }
            }
          }, {
            key: "render",
            value: function(e) {
              var t = this,
                n = void 0;
              u.default.map(e, function(e) {
                if (t.checkCardTag(e)) {
                  var r = u.default.buildAttrs(e),
                    a = o({}, t.config, r);
                  t.getComponent(e.nodeName) ? (n = c.default.createElement(t.getComponent(e.nodeName),
                    a), l.default.render(n, e)) : t.getComponent(e.className) && (n = c.default
                    .createElement(t.getComponent(e.className), a), l.default.render(n, e))
                }
              })
            }
          }, {
            key: "componentWillUnmount",
            value: function() {
              this.config = null
            }
          }]), e
        }().getInstance(),
        p = navigator.userAgent;
      ("http://nativeapp.toutiao.com" === document.referrer ||
        /(News|NewsSocial|Explore|NewsArticle|News_?Article)( |\/)(\d.\d.\d)/i.test(p)) && f.registerCard({
        tag: "tt-audio",
        component: s.default.Audio
      }), f.registerCard({
        tag: "tt-game",
        component: s.default.Game
      }), f.registerCard({
        tag: "tt-novel",
        component: s.default.Novel
      }), f.registerCard({
        tag: "tt-temai",
        component: s.default.Temai
      }), ("http://nativeapp.toutiao.com" === document.referrer ||
        /(News|NewsSocial|Explore|NewsArticle|News_?Article)( |\/)(\d.\d.\d)/i.test(p)) && f.registerCard({
        tag: "tt-phone-group",
        component: s.default.PhoneGroup
      }), f.registerCard({
        selector: "tt-column-card",
        component: s.default.ColumnCard
      }), f.registerCard({
        selector: "tt-community-card",
        component: s.default.CommunityCard
      }), f.registerCard({
        selector: "tt-applet-card",
        component: s.default.AppletCard
      }), f.registerCard({
        selector: "tt-distribution-card",
        component: s.default.DistributionCard
      }), t.default = f
    }, function(e, t) {
      ! function() {
        var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          n = {
            rotl: function(e, t) {
              return e << t | e >>> 32 - t
            },
            rotr: function(e, t) {
              return e << 32 - t | e >>> t
            },
            endian: function(e) {
              if (e.constructor == Number) return 16711935 & n.rotl(e, 8) | 4278255360 & n.rotl(e, 24);
              for (var t = 0; t < e.length; t++) e[t] = n.endian(e[t]);
              return e
            },
            randomBytes: function(e) {
              for (var t = []; e > 0; e--) t.push(Math.floor(256 * Math.random()));
              return t
            },
            bytesToWords: function(e) {
              for (var t = [], n = 0, r = 0; n < e.length; n++, r += 8) t[r >>> 5] |= e[n] << 24 - r % 32;
              return t
            },
            wordsToBytes: function(e) {
              for (var t = [], n = 0; n < 32 * e.length; n += 8) t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
              return t
            },
            bytesToHex: function(e) {
              for (var t = [], n = 0; n < e.length; n++) t.push((e[n] >>> 4).toString(16)), t.push((15 & e[
                n]).toString(16));
              return t.join("")
            },
            hexToBytes: function(e) {
              for (var t = [], n = 0; n < e.length; n += 2) t.push(parseInt(e.substr(n, 2), 16));
              return t
            },
            bytesToBase64: function(e) {
              for (var n = [], r = 0; r < e.length; r += 3)
                for (var o = e[r] << 16 | e[r + 1] << 8 | e[r + 2], a = 0; a < 4; a++) 8 * r + 6 * a <= 8 *
                  e.length ? n.push(t.charAt(o >>> 6 * (3 - a) & 63)) : n.push("=");
              return n.join("")
            },
            base64ToBytes: function(e) {
              e = e.replace(/[^A-Z0-9+\/]/gi, "");
              for (var n = [], r = 0, o = 0; r < e.length; o = ++r % 4) 0 != o && n.push((t.indexOf(e.charAt(
                r - 1)) & Math.pow(2, -2 * o + 8) - 1) << 2 * o | t.indexOf(e.charAt(r)) >>> 6 - 2 * o);
              return n
            }
          };
        e.exports = n
      }()
    }, function(e, t) {
      function n(e) {
        return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
      }
      e.exports = function(e) {
        return null != e && (n(e) || function(e) {
          return "function" == typeof e.readFloatLE && "function" == typeof e.slice && n(e.slice(0, 0))
        }(e) || !!e._isBuffer)
      }
    }, function(e, t, n) {
      ! function() {
        var t = n(21),
          r = n(3).utf8,
          o = n(22),
          a = n(3).bin,
          i = function e(n, i) {
            n.constructor == String ? n = i && "binary" === i.encoding ? a.stringToBytes(n) : r.stringToBytes(
              n) : o(n) ? n = Array.prototype.slice.call(n, 0) : Array.isArray(n) || (n = n.toString());
            for (var l = t.bytesToWords(n), c = 8 * n.length, u = 1732584193, s = -271733879, d = -1732584194,
                f = 271733878, p = 0; p < l.length; p++) l[p] = 16711935 & (l[p] << 8 | l[p] >>> 24) |
              4278255360 & (l[p] << 24 | l[p] >>> 8);
            l[c >>> 5] |= 128 << c % 32, l[14 + (c + 64 >>> 9 << 4)] = c;
            for (var m = e._ff, h = e._gg, v = e._hh, _ = e._ii, p = 0; p < l.length; p += 16) {
              var g = u,
                y = s,
                b = d,
                w = f;
              s = _(s = _(s = _(s = _(s = v(s = v(s = v(s = v(s = h(s = h(s = h(s = h(s = m(s = m(s = m(s = m(
                            s, d = m(d, f = m(f, u = m(u, s, d, f, l[p + 0], 7, -
                              680876936), s, d, l[p + 1], 12, -389564586), u, s, l[p +
                              2], 17, 606105819), f, u, l[p + 3], 22, -1044525330), d = m(
                            d, f = m(f, u = m(u, s, d, f, l[p + 4], 7, -176418897), s, d,
                              l[p + 5], 12, 1200080426), u, s, l[p + 6], 17, -1473231341),
                          f, u, l[p + 7], 22, -45705983), d = m(d, f = m(f, u = m(u, s, d,
                            f, l[p + 8], 7, 1770035416), s, d, l[p + 9], 12, -
                          1958414417), u, s, l[p + 10], 17, -42063), f, u, l[p + 11], 22,
                        -1990404162), d = m(d, f = m(f, u = m(u, s, d, f, l[p + 12], 7,
                          1804603682), s, d, l[p + 13], 12, -40341101), u, s, l[p + 14],
                        17, -1502002290), f, u, l[p + 15], 22, 1236535329), d = h(d, f = h(
                        f, u = h(u, s, d, f, l[p + 1], 5, -165796510), s, d, l[p + 6], 9,
                        -1069501632), u, s, l[p + 11], 14, 643717713), f, u, l[p + 0], 20,
                      -373897302), d = h(d, f = h(f, u = h(u, s, d, f, l[p + 5], 5, -
                        701558691), s, d, l[p + 10], 9, 38016083), u, s, l[p + 15], 14, -
                      660478335), f, u, l[p + 4], 20, -405537848), d = h(d, f = h(f, u = h(u,
                        s, d, f, l[p + 9], 5, 568446438), s, d, l[p + 14], 9, -1019803690), u,
                      s, l[p + 3], 14, -187363961), f, u, l[p + 8], 20, 1163531501), d = h(d, f =
                      h(f, u = h(u, s, d, f, l[p + 13], 5, -1444681467), s, d, l[p + 2], 9, -
                        51403784), u, s, l[p + 7], 14, 1735328473), f, u, l[p + 12], 20, -
                    1926607734), d = v(d, f = v(f, u = v(u, s, d, f, l[p + 5], 4, -378558), s,
                    d, l[p + 8], 11, -2022574463), u, s, l[p + 11], 16, 1839030562), f, u, l[p +
                    14], 23, -35309556), d = v(d, f = v(f, u = v(u, s, d, f, l[p + 1], 4, -
                      1530992060), s, d, l[p + 4], 11, 1272893353), u, s, l[p + 7], 16, -
                    155497632), f, u, l[p + 10], 23, -1094730640), d = v(d, f = v(f, u = v(u, s, d,
                      f, l[p + 13], 4, 681279174), s, d, l[p + 0], 11, -358537222), u, s, l[p + 3],
                    16, -722521979), f, u, l[p + 6], 23, 76029189), d = v(d, f = v(f, u = v(u, s, d,
                      f, l[p + 9], 4, -640364487), s, d, l[p + 12], 11, -421815835), u, s, l[p + 15],
                    16, 530742520), f, u, l[p + 2], 23, -995338651), d = _(d, f = _(f, u = _(u, s, d, f,
                      l[p + 0], 6, -198630844), s, d, l[p + 7], 10, 1126891415), u, s, l[p + 14], 15, -
                    1416354905), f, u, l[p + 5], 21, -57434055), d = _(d, f = _(f, u = _(u, s, d, f, l[p +
                      12], 6, 1700485571), s, d, l[p + 3], 10, -1894986606), u, s, l[p + 10], 15, -
                    1051523), f, u, l[p + 1], 21, -2054922799), d = _(d, f = _(f, u = _(u, s, d, f, l[p + 8],
                    6, 1873313359), s, d, l[p + 15], 10, -30611744), u, s, l[p + 6], 15, -1560198380), f, u,
                  l[p + 13], 21, 1309151649), d = _(d, f = _(f, u = _(u, s, d, f, l[p + 4], 6, -145523070),
                  s, d, l[p + 11], 10, -1120210379), u, s, l[p + 2], 15, 718787259), f, u, l[p + 9], 21, -
                343485551), u = u + g >>> 0, s = s + y >>> 0, d = d + b >>> 0, f = f + w >>> 0
            }
            return t.endian([u, s, d, f])
          };
        i._ff = function(e, t, n, r, o, a, i) {
          var l = e + (t & n | ~t & r) + (o >>> 0) + i;
          return (l << a | l >>> 32 - a) + t
        }, i._gg = function(e, t, n, r, o, a, i) {
          var l = e + (t & r | n & ~r) + (o >>> 0) + i;
          return (l << a | l >>> 32 - a) + t
        }, i._hh = function(e, t, n, r, o, a, i) {
          var l = e + (t ^ n ^ r) + (o >>> 0) + i;
          return (l << a | l >>> 32 - a) + t
        }, i._ii = function(e, t, n, r, o, a, i) {
          var l = e + (n ^ (t | ~r)) + (o >>> 0) + i;
          return (l << a | l >>> 32 - a) + t
        }, i._blocksize = 16, i._digestsize = 16, e.exports = function(e, n) {
          if (void 0 === e || null === e) throw new Error("Illegal argument " + e);
          var r = t.wordsToBytes(i(e, n));
          return n && n.asBytes ? r : n && n.asString ? a.bytesToString(r) : t.bytesToHex(r)
        }
      }()
    }, function(e, t, n) {
      function r(e, t) {
        var n, r, o, a, i = I;
        for (a = arguments.length; a-- > 2;) j.push(arguments[a]);
        for (t && null != t.children && (j.length || j.push(t.children), delete t.children); j.length;)
          if ((r = j.pop()) && void 0 !== r.pop)
            for (a = r.length; a--;) j.push(r[a]);
          else "boolean" == typeof r && (r = null), (o = "function" != typeof e) && (null == r ? r = "" :
            "number" == typeof r ? r = String(r) : "string" != typeof r && (o = !1)), o && n ? i[i.length -
            1] += r : i === I ? i = [r] : i.push(r), n = o;
        var l = new function() {};
        return l.nodeName = e, l.children = i, l.attributes = null == t ? void 0 : t, l.key = null == t ?
          void 0 : t.key, void 0 !== S.vnode && S.vnode(l), l
      }

      function o(e, t) {
        for (var n in t) e[n] = t[n];
        return e
      }

      function a(e, t) {
        return r(e.nodeName, o(o({}, e.attributes), t), arguments.length > 2 ? [].slice.call(arguments, 2) :
          e.children)
      }

      function i(e) {
        !e._dirty && (e._dirty = !0) && 1 == O.push(e) && (S.debounceRendering || R)(l)
      }

      function l() {
        var e, t = O;
        for (O = []; e = t.pop();) e._dirty && T(e)
      }

      function c(e, t, n) {
        return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ?
          !e._componentConstructor && u(e, t.nodeName) : n || e._componentConstructor === t.nodeName
      }

      function u(e, t) {
        return e.normalizedNodeName === t || e.nodeName.toLowerCase() === t.toLowerCase()
      }

      function s(e) {
        var t = o({}, e.attributes);
        t.children = e.children;
        var n = e.nodeName.defaultProps;
        if (void 0 !== n)
          for (var r in n) void 0 === t[r] && (t[r] = n[r]);
        return t
      }

      function f(e) {
        var t = e.parentNode;
        t && t.removeChild(e)
      }

      function p(e, t, n, r, o) {
        if ("className" === t && (t = "class"), "key" === t);
        else if ("ref" === t) n && n(null), r && r(e);
        else if ("class" !== t || o)
          if ("style" === t) {
            if (r && "string" != typeof r && "string" != typeof n || (e.style.cssText = r || ""), r &&
              "object" == (void 0 === r ? "undefined" : (0, m.default)(r))) {
              if ("string" != typeof n)
                for (var a in n) a in r || (e.style[a] = "");
              for (var a in r) e.style[a] = "number" == typeof r[a] && !1 === W.test(a) ? r[a] + "px" : r[a]
            }
          } else if ("dangerouslySetInnerHTML" === t) r && (e.innerHTML = r.__html || "");
        else if ("o" == t[0] && "n" == t[1]) {
          var i = t !== (t = t.replace(/Capture$/, ""));
          t = t.toLowerCase().substring(2), r ? n || e.addEventListener(t, h, i) : e.removeEventListener(t, h,
            i), (e._listeners || (e._listeners = {}))[t] = r
        } else if ("list" !== t && "type" !== t && !o && t in e)(function(e, t, n) {
          try {
            e[t] = n
          } catch (e) {}
        })(e, t, null == r ? "" : r), null != r && !1 !== r || e.removeAttribute(t);
        else {
          var l = o && t !== (t = t.replace(/^xlink:?/, ""));
          null == r || !1 === r ? l ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) :
            e.removeAttribute(t) : "function" != typeof r && (l ? e.setAttributeNS(
              "http://www.w3.org/1999/xlink", t.toLowerCase(), r) : e.setAttribute(t, r))
        } else e.className = r || ""
      }

      function h(e) {
        return this._listeners[e.type](S.event && S.event(e) || e)
      }

      function v() {
        for (var e; e = M.pop();) S.afterMount && S.afterMount(e), e.componentDidMount && e.componentDidMount()
      }

      function _(e, t, n, r, o, a) {
        B++ || (Q = null != o && void 0 !== o.ownerSVGElement, L = null != e && !("__preactattr_" in e));
        var i = g(e, t, n, r, a);
        return o && i.parentNode !== o && o.appendChild(i), --B || (L = !1, a || v()), i
      }

      function g(e, t, n, r, o) {
        var a = e,
          i = Q;
        if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t)
          return e && void 0 !== e.splitText && e.parentNode && (!e._component || o) ? e.nodeValue != t && (e
            .nodeValue = t) : (a = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(
            a, e), b(e, !0))), a.__preactattr_ = !0, a;
        var l = t.nodeName;
        if ("function" == typeof l) return U(e, t, n, r);
        if (Q = "svg" === l || "foreignObject" !== l && Q, l = String(l), (!e || !u(e, l)) && (a = function(e,
            t) {
            var n = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(
              e);
            return n.normalizedNodeName = e, n
          }(l, Q), e)) {
          for (; e.firstChild;) a.appendChild(e.firstChild);
          e.parentNode && e.parentNode.replaceChild(a, e), b(e, !0)
        }
        var c = a.firstChild,
          s = a.__preactattr_,
          d = t.children;
        if (null == s) {
          s = a.__preactattr_ = {};
          for (var f = a.attributes, p = f.length; p--;) s[f[p].name] = f[p].value
        }
        return !L && d && 1 === d.length && "string" == typeof d[0] && null != c && void 0 !== c.splitText &&
          null == c.nextSibling ? c.nodeValue != d[0] && (c.nodeValue = d[0]) : (d && d.length || null != c) &&
          y(a, d, n, r, L || null != s.dangerouslySetInnerHTML), E(a, t.attributes, s), Q = i, a
      }

      function y(e, t, n, r, o) {
        var a, i, l, u, s, d = e.childNodes,
          p = [],
          m = {},
          h = 0,
          v = 0,
          _ = d.length,
          y = 0,
          w = t ? t.length : 0;
        if (0 !== _)
          for (C = 0; C < _; C++) {
            var E = d[C],
              k = E.__preactattr_;
            null != (N = w && k ? E._component ? E._component.__key : k.key : null) ? (h++, m[N] = E) : (k ||
              (void 0 !== E.splitText ? !o || E.nodeValue.trim() : o)) && (p[y++] = E)
          }
        if (0 !== w)
          for (C = 0; C < w; C++) {
            s = null;
            var N = (u = t[C]).key;
            if (null != N) h && void 0 !== m[N] && (s = m[N], m[N] = void 0, h--);
            else if (!s && v < y)
              for (a = v; a < y; a++)
                if (void 0 !== p[a] && c(i = p[a], u, o)) {
                  s = i, p[a] = void 0, a === y - 1 && y--, a === v && v++;
                  break
                } s = g(s, u, n, r), l = d[C], s && s !== e && s !== l && (null == l ? e.appendChild(s) : s ===
              l.nextSibling ? f(l) : e.insertBefore(s, l))
          }
        if (h)
          for (var C in m) void 0 !== m[C] && b(m[C], !1);
        for (; v <= y;) void 0 !== (s = p[y--]) && b(s, !1)
      }

      function b(e, t) {
        var n = e._component;
        n ? x(n) : (null != e.__preactattr_ && e.__preactattr_.ref && e.__preactattr_.ref(null), !1 !== t &&
          null != e.__preactattr_ || f(e), w(e))
      }

      function w(e) {
        for (e = e.lastChild; e;) {
          var t = e.previousSibling;
          b(e, !0), e = t
        }
      }

      function E(e, t, n) {
        var r;
        for (r in n) t && null != t[r] || null == n[r] || p(e, r, n[r], n[r] = void 0, Q);
        for (r in t) "children" === r || "innerHTML" === r || r in n && t[r] === ("value" === r || "checked" ===
          r ? e[r] : n[r]) || p(e, r, n[r], n[r] = t[r], Q)
      }

      function k(e, t, n) {
        var r, o = D[e.name];
        if (e.prototype && e.prototype.render ? (r = new e(t, n), P.call(r, t, n)) : (r = new P(t, n), r.constructor =
            e, r.render = N), o)
          for (var a = o.length; a--;)
            if (o[a].constructor === e) {
              r.nextBase = o[a].nextBase, o.splice(a, 1);
              break
            } return r
      }

      function N(e, t, n) {
        return this.constructor(e, n)
      }

      function C(e, t, n, r, o) {
        e._disable || (e._disable = !0, (e.__ref = t.ref) && delete t.ref, (e.__key = t.key) && delete t.key,
          !e.base || o ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(
            t, r), r && r !== e.context && (e.prevContext || (e.prevContext = e.context), e.context = r), e
          .prevProps || (e.prevProps = e.props), e.props = t, e._disable = !1, 0 !== n && (1 !== n && !1 ===
            S.syncComponentUpdates && e.base ? i(e) : T(e, 1, o)), e.__ref && e.__ref(e))
      }

      function T(e, t, n, r) {
        if (!e._disable) {
          var a, i, l, c = e.props,
            u = e.state,
            d = e.context,
            f = e.prevProps || c,
            p = e.prevState || u,
            m = e.prevContext || d,
            h = e.base,
            g = e.nextBase,
            y = h || g,
            w = e._component,
            E = !1;
          if (h && (e.props = f, e.state = p, e.context = m, 2 !== t && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(
                c, u, d) ? E = !0 : e.componentWillUpdate && e.componentWillUpdate(c, u, d), e.props = c, e.state =
              u, e.context = d), e.prevProps = e.prevState = e.prevContext = e.nextBase = null, e._dirty = !1,
            !E) {
            a = e.render(c, u, d), e.getChildContext && (d = o(o({}, d), e.getChildContext()));
            var N, U, P = a && a.nodeName;
            if ("function" == typeof P) {
              var A = s(a);
              (i = w) && i.constructor === P && A.key == i.__key ? C(i, A, 1, d, !1) : (N = i, e._component =
                i = k(P, A, d), i.nextBase = i.nextBase || g, i._parentComponent = e, C(i, A, 0, d, !1), T(
                  i, 1, n, !0)), U = i.base
            } else l = y, (N = w) && (l = e._component = null), (y || 1 === t) && (l && (l._component = null),
              U = _(l, a, d, n || !h, y && y.parentNode, !0));
            if (y && U !== y && i !== w) {
              var j = y.parentNode;
              j && U !== j && (j.replaceChild(U, y), N || (y._component = null, b(y, !1)))
            }
            if (N && x(N), e.base = U, U && !r) {
              for (var I = e, R = e; R = R._parentComponent;)(I = R).base = U;
              U._component = I, U._componentConstructor = I.constructor
            }
          }
          if (!h || n ? M.unshift(e) : E || (e.componentDidUpdate && e.componentDidUpdate(f, p, m), S.afterUpdate &&
              S.afterUpdate(e)), null != e._renderCallbacks)
            for (; e._renderCallbacks.length;) e._renderCallbacks.pop().call(e);
          B || r || v()
        }
      }

      function U(e, t, n, r) {
        for (var o = e && e._component, a = o, i = e, l = o && e._componentConstructor === t.nodeName, c = l,
            u = s(t); o && !c && (o = o._parentComponent);) c = o.constructor === t.nodeName;
        return o && c && (!r || o._component) ? (C(o, u, 3, n, r), e = o.base) : (a && !l && (x(a), e = i =
            null), o = k(t.nodeName, u, n), e && !o.nextBase && (o.nextBase = e, i = null), C(o, u, 1, n, r),
          e = o.base, i && e !== i && (i._component = null, b(i, !1))), e
      }

      function x(e) {
        S.beforeUnmount && S.beforeUnmount(e);
        var t = e.base;
        e._disable = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;
        var n = e._component;
        n ? x(n) : t && (t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null), e.nextBase = t,
          f(t),
          function(e) {
            var t = e.constructor.name;
            (D[t] || (D[t] = [])).push(e)
          }(e), w(t)), e.__ref && e.__ref(null)
      }

      function P(e, t) {
        this._dirty = !0, this.context = t, this.props = e, this.state = this.state || {}
      }

      function A(e, t, n) {
        return _(n, e, {}, !1, t, !1)
      }
      n.d(t, "a", function() {
        return r
      }), n.d(t, "d", function() {
        return a
      }), n.d(t, "e", function() {
        return P
      }), n.d(t, "c", function() {
        return A
      }), n.d(t, "b", function() {
        return S
      });
      var S = {},
        j = [],
        I = [],
        R = "function" == typeof d.default ? d.default.resolve().then.bind(d.default.resolve()) : setTimeout,
        W = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
        O = [],
        M = [],
        B = 0,
        Q = !1,
        L = !1,
        D = {};
      o(P.prototype, {
        setState: function(e, t) {
          var n = this.state;
          this.prevState || (this.prevState = o({}, n)), o(n, "function" == typeof e ? e(n, this.props) :
            e), t && (this._renderCallbacks = this._renderCallbacks || []).push(t), i(this)
        },
        forceUpdate: function(e) {
          e && (this._renderCallbacks = this._renderCallbacks || []).push(e), T(this, 2)
        },
        render: function() {}
      })
    }, function(e, t, n) {
      (function(t) {
        ! function(n) {
          function r() {}

          function o(e) {
            if (!(this instanceof o)) throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof e) throw new TypeError("not a function");
            this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], u(e, this)
          }

          function a(e, t) {
            for (; 3 === e._state;) e = e._value;
            0 !== e._state ? (e._handled = !0, o._immediateFn(function() {
              var n = 1 === e._state ? t.onFulfilled : t.onRejected;
              if (null !== n) {
                var r;
                try {
                  r = n(e._value)
                } catch (e) {
                  return void l(t.promise, e)
                }
                i(t.promise, r)
              } else(1 === e._state ? i : l)(t.promise, e._value)
            })) : e._deferreds.push(t)
          }

          function i(e, t) {
            try {
              if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
              if (t && ("object" == (void 0 === t ? "undefined" : (0, m.default)(t)) || "function" ==
                  typeof t)) {
                var n = t.then;
                if (t instanceof o) return e._state = 3, e._value = t, void c(e);
                if ("function" == typeof n) return void u(function(e, t) {
                  return function() {
                    e.apply(t, arguments)
                  }
                }(n, t), e)
              }
              e._state = 1, e._value = t, c(e)
            } catch (t) {
              l(e, t)
            }
          }

          function l(e, t) {
            e._state = 2, e._value = t, c(e)
          }

          function c(e) {
            2 === e._state && 0 === e._deferreds.length && o._immediateFn(function() {
              e._handled || o._unhandledRejectionFn(e._value)
            });
            for (var t = 0, n = e._deferreds.length; t < n; t++) a(e, e._deferreds[t]);
            e._deferreds = null
          }

          function u(e, t) {
            var n = !1;
            try {
              e(function(e) {
                n || (n = !0, i(t, e))
              }, function(e) {
                n || (n = !0, l(t, e))
              })
            } catch (e) {
              if (n) return;
              n = !0, l(t, e)
            }
          }
          var s = setTimeout;
          o.prototype.catch = function(e) {
            return this.then(null, e)
          }, o.prototype.then = function(e, t) {
            var n = new this.constructor(r);
            return a(this, new function(e, t, n) {
              this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" ==
                typeof t ? t : null, this.promise = n
            }(e, t, n)), n
          }, o.all = function(e) {
            return new o(function(t, n) {
              function r(e, i) {
                try {
                  if (i && ("object" == (void 0 === i ? "undefined" : (0, m.default)(i)) ||
                      "function" == typeof i)) {
                    var l = i.then;
                    if ("function" == typeof l) return void l.call(i, function(t) {
                      r(e, t)
                    }, n)
                  }
                  o[e] = i, 0 == --a && t(o)
                } catch (e) {
                  n(e)
                }
              }
              if (!e || void 0 === e.length) throw new TypeError("Promise.all accepts an array");
              var o = Array.prototype.slice.call(e);
              if (0 === o.length) return t([]);
              for (var a = o.length, i = 0; i < o.length; i++) r(i, o[i])
            })
          }, o.resolve = function(e) {
            return e && "object" == (void 0 === e ? "undefined" : (0, m.default)(e)) && e.constructor ===
              o ? e : new o(function(t) {
                t(e)
              })
          }, o.reject = function(e) {
            return new o(function(t, n) {
              n(e)
            })
          }, o.race = function(e) {
            return new o(function(t, n) {
              for (var r = 0, o = e.length; r < o; r++) e[r].then(t, n)
            })
          }, o._immediateFn = "function" == typeof t && function(e) {
            t(e)
          } || function(e) {
            s(e, 0)
          }, o._unhandledRejectionFn = function(e) {
            "undefined" != typeof console && console && console.warn(
              "Possible Unhandled Promise Rejection:", e)
          }, o._setImmediateFn = function(e) {
            o._immediateFn = e
          }, o._setUnhandledRejectionFn = function(e) {
            o._unhandledRejectionFn = e
          }, void 0 !== e && e.exports ? e.exports = o : n.Promise || (n.Promise = o)
        }(this)
      }).call(t, n(30).setImmediate)
    }, function(e, t, n) {
      function r() {}
      var o = n(28);
      e.exports = function() {
        function e(e, t, n, r, a, i) {
          if (i !== o) {
            var l = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw l.name = "Invariant Violation", l
          }
        }

        function t() {
          return e
        }
        e.isRequired = e;
        var n = {
          array: e,
          bool: e,
          func: e,
          number: e,
          object: e,
          string: e,
          symbol: e,
          any: e,
          arrayOf: t,
          element: e,
          instanceOf: t,
          node: e,
          objectOf: t,
          oneOf: t,
          oneOfType: t,
          shape: t,
          exact: t
        };
        return n.checkPropTypes = r, n.PropTypes = n, n
      }
    }, function(e, t, n) {
      e.exports = n(26)()
    }, function(e, t, n) {
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    }, function(e, t, n) {
      (function(e, t) {
        ! function(e, n) {
          function r(e) {
            delete l[e]
          }

          function o(e) {
            if (u) setTimeout(o, 0, e);
            else {
              var t = l[e];
              if (t) {
                u = !0;
                try {
                  ! function(e) {
                    var t = e.callback,
                      r = e.args;
                    switch (r.length) {
                      case 0:
                        t();
                        break;
                      case 1:
                        t(r[0]);
                        break;
                      case 2:
                        t(r[0], r[1]);
                        break;
                      case 3:
                        t(r[0], r[1], r[2]);
                        break;
                      default:
                        t.apply(n, r)
                    }
                  }(t)
                } finally {
                  r(e), u = !1
                }
              }
            }
          }
          if (!e.setImmediate) {
            var a, i = 1,
              l = {},
              u = !1,
              s = e.document,
              d = c.default && (0, c.default)(e);
            d = d && d.setTimeout ? d : e, "[object process]" === {}.toString.call(e.process) ? a =
              function(e) {
                t.nextTick(function() {
                  o(e)
                })
              } : function() {
                if (e.postMessage && !e.importScripts) {
                  var t = !0,
                    n = e.onmessage;
                  return e.onmessage = function() {
                    t = !1
                  }, e.postMessage("", "*"), e.onmessage = n, t
                }
              }() ? function() {
                var t = "setImmediate$" + Math.random() + "$",
                  n = function(n) {
                    n.source === e && "string" == typeof n.data && 0 === n.data.indexOf(t) && o(+n.data.slice(
                      t.length))
                  };
                e.addEventListener ? e.addEventListener("message", n, !1) : e.attachEvent("onmessage", n),
                  a = function(n) {
                    e.postMessage(t + n, "*")
                  }
              }() : e.MessageChannel ? function() {
                var e = new MessageChannel;
                e.port1.onmessage = function(e) {
                  o(e.data)
                }, a = function(t) {
                  e.port2.postMessage(t)
                }
              }() : s && "onreadystatechange" in s.createElement("script") ? function() {
                var e = s.documentElement;
                a = function(t) {
                  var n = s.createElement("script");
                  n.onreadystatechange = function() {
                    o(t), n.onreadystatechange = null, e.removeChild(n), n = null
                  }, e.appendChild(n)
                }
              }() : a = function(e) {
                setTimeout(o, 0, e)
              }, d.setImmediate = function(e) {
                "function" != typeof e && (e = new Function("" + e));
                for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n +
                  1];
                var r = {
                  callback: e,
                  args: t
                };
                return l[i] = r, a(i), i++
              }, d.clearImmediate = r
          }
        }("undefined" == typeof self ? void 0 === e ? this : e : self)
      }).call(t, n(6), n(5))
    }, function(e, t, n) {
      (function(e) {
        function r(e, t) {
          this._id = e, this._clearFn = t
        }
        var o = void 0 !== e && e || "undefined" != typeof self && self || window,
          a = Function.prototype.apply;
        t.setTimeout = function() {
            return new r(a.call(setTimeout, o, arguments), clearTimeout)
          }, t.setInterval = function() {
            return new r(a.call(setInterval, o, arguments), clearInterval)
          }, t.clearTimeout = t.clearInterval = function(e) {
            e && e.close()
          }, r.prototype.unref = r.prototype.ref = function() {}, r.prototype.close = function() {
            this._clearFn.call(o, this._id)
          }, t.enroll = function(e, t) {
            clearTimeout(e._idleTimeoutId), e._idleTimeout = t
          }, t.unenroll = function(e) {
            clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
          }, t._unrefActive = t.active = function(e) {
            clearTimeout(e._idleTimeoutId);
            var t = e._idleTimeout;
            t >= 0 && (e._idleTimeoutId = setTimeout(function() {
              e._onTimeout && e._onTimeout()
            }, t))
          }, n(29), t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate ||
          this && this.setImmediate, t.clearImmediate = "undefined" != typeof self && self.clearImmediate ||
          void 0 !== e && e.clearImmediate || this && this.clearImmediate
      }).call(t, n(6))
    }, function(e, t, n) {
      e.exports = n(7)
    }])
  };
  o.Bv_CB0pX = function(e, t, i, n, a) {
    t.exports = function(e, t) {
      var i = e.document,
        n = i.documentElement,
        a = i.querySelector("meta[name='viewport']"),
        r = i.querySelector("meta[name='responsive']"),
        s = Math.floor(e.devicePixelRatio) || 1,
        o = [1, 2, 3],
        c = 1,
        l = 0,
        d = !1;
      if (t.init = function(i) {
          return window.noScaling = i, t.isScalable = d = function() {
            if (i) return !1;
            var t = e.navigator.appVersion.match(/iphone/gi),
              n = e.navigator.appVersion.match(/android/gi),
              a = !!e.chrome,
              r = e.navigator.userAgent,
              s = r.match(/MicroMessenger\/([\d\.]+)/i);
            if (t) {
              var o = r.match(/(iPhone\sOS)\s([\d_]+)/);
              return !(parseFloat(o[2]) < 7)
            }
            if (n) {
              var c = r.match(/AppleWebKit\/([\d\.]+)/i),
                l = r.match(/UCBrowser\/([\d\.]+)/i),
                d = (r.match(/MQQBrowser\/([\d\.]+)/i), r.match(/Chrome\/([\d\.]+)/i)),
                h = r.match(/MiuiBrowser/i);
              return !!(c && parseFloat(c[1]) >= 537.36 && (h || s && parseFloat(s[1]) >= 6.1)) || (!!(l &&
                parseFloat(l[1]) >= 9.6) || !!(d && parseFloat(d[1]) >= 30 && a))
            }
            return !1
          }(), t.changeScale(), this
        }, r && d && (content = r.getAttribute("content"), content)) {
        var h = content.match(/initial\-dpr=([\d\.]+)/);
        h && (c = Math.floor(h[1]))
      }
      return t.scaleLock = !1, t.changeScale = function(r, c) {
        if (!this.scaleLock) {
          if (this.isScalable) {
            r = Math.floor(r) || s;
            this.dpr = o.indexOf(r) > -1 ? r : 3
          } else this.dpr = 1;
          this.scale = 1 / this.dpr, a && (a.parentNode.removeChild(a), a = null),
            function() {
              if (!a) {
                var e = 1 == t.scale ? "width=device-width, " : "";
                if ((a = i.createElement("meta")).setAttribute("name", "viewport"), a.setAttribute("content",
                    e + "initial-scale=" + t.scale + ", maximum-scale=" + t.scale + ", minimum-scale=" + t.scale +
                    ", user-scalable=no"), n.firstElementChild) n.firstElementChild.appendChild(a);
                else {
                  var r = i.createElement("div");
                  r.appendChild(a), i.write(r.innerHTML)
                }
              }
            }()
        }
        if (c && (this.scaleLock = c), n.getBoundingClientRect().width > e.innerWidth) {
          var l = 1 == this.scale ? "device-width" : e.innerWidth;
          a.setAttribute("content", "width=" + l + ",initial-scale=" + this.scale + ", maximum-scale=" + this
            .scale + ", minimum-scale=" + this.scale + ", user-scalable=no")
        }
        this.baseFontSize = n.getBoundingClientRect().width / 10, this.baseFontSize = Math.max(this.baseFontSize,
          32), n.style.fontSize = this.baseFontSize + "px", n.setAttribute("data-dpr", this.dpr)
      }, i.addEventListener("DOMContentLoaded", function(e) {
        i.body.style.fontSize = 12 * c + "px"
      }, !1), e.addEventListener("orientationchange", function(e) {
        clearTimeout(l), l = setTimeout(t.changeScale.bind(t), 300)
      }, !1), e.addEventListener("pageshow", function(e) {
        e.persisted && (clearTimeout(l), window.noScaling || (l = setTimeout(t.changeScale.bind(t), 300)))
      }, !1), t.rem2px = function(e) {
        var t = parseFloat(e) * this.dpr * this.baseFontSize;
        return "string" == typeof e && e.match(/rem$/) && (t += "px"), t
      }, t.px2rem = function(e) {
        var t = parseFloat(e) * this.dpr / this.baseFontSize;
        return "string" == typeof e && e.match(/px$/) && (t += "rem"), t
      }, t.px2px = function(e) {
        var t = parseFloat(e) * this.dpr;
        return "string" == typeof e && e.match(/px$/) && (t += "px"), t
      }, t
    }(window, window.responsive || (window.responsive = {
      dpr: 1
    }))
  };
  o._zeyjz8w = function(e, t, r, o, n) {
    var i = o(e("E7MLSnqQ"));
    ! function(e, r) {
      "function" == typeof define && define.amd ? define([], r) : t.exports = r()
    }(0, function() {
      window.videojs;
      var e = {};
      e.indexOf = function(e, t) {
        for (var r = 0; r < e.length; r++)
          if (e[r] == t) return r;
        return -1
      }, e.isFunction = function(e) {
        return "[object Function]" == Object.prototype.toString.call(e)
      }, e.isIE = function() {
        var e = navigator.userAgent.toLowerCase();
        return -1 != e.indexOf("msie") && parseInt(e.split("msie")[1])
      }, e.extend = function(e, t) {
        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
      }, e.getName = function(e) {
        return e + Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5)
      }, e.createScript = function(e, t) {
        var r = document.createElement("script");
        return r.setAttribute("type", "text/javascript"), t && r.setAttribute("charset", t), r.setAttribute(
          "src", e), r.async = !0, r
      }, e.jsonp = function(t, r, o, n) {
        var i = e.getName("tt_player");
        window[i] = function() {
          r && e.isFunction(r) && r(arguments[0])
        };
        var a = e.createScript(t + "&callback=" + i, n);
        a.onload = a.onreadystatechange = function() {
          a.readyState && !/loaded|complete/.test(a.readyState) || (a.onload = a.onreadystatechange = null,
            a.parentNode && a.parentNode.removeChild(a), window[i] = null)
        }, a.onerror = function() {
          o && e.isFunction(o) && o()
        }, document.getElementsByTagName("head")[0].appendChild(a)
      }, e.crc32 = function(e) {
        var t = document.createElement("a");
        t.href = e;
        var r = function() {
            for (var e = 0, t = new Array(256), r = 0; 256 != r; ++r) e = 1 & (e = 1 & (e = 1 & (e = 1 & (e =
                1 & (e = 1 & (e = 1 & (e = 1 & (e = r) ? -306674912 ^ e >>> 1 : e >>> 1) ? -306674912 ^
                  e >>> 1 : e >>> 1) ? -306674912 ^ e >>> 1 : e >>> 1) ? -306674912 ^ e >>> 1 : e >>>
                1) ? -306674912 ^ e >>> 1 : e >>> 1) ? -306674912 ^ e >>> 1 : e >>> 1) ? -306674912 ^ e >>>
              1 : e >>> 1) ? -306674912 ^ e >>> 1 : e >>> 1, t[r] = e;
            return "undefined" != typeof Int32Array ? new Int32Array(t) : t
          }(),
          o = t.pathname + "?r=" + Math.random().toString(10).substring(2);
        "/" != o[0] && (o = "/" + o);
        var n = function(e) {
          for (var t, o, n = -1, i = 0, a = e.length; i < a;)(t = e.charCodeAt(i++)) < 128 ? n = n >>> 8 ^
            r[255 & (n ^ t)] : t < 2048 ? n = (n = n >>> 8 ^ r[255 & (n ^ (192 | t >> 6 & 31))]) >>> 8 ^ r[
              255 & (n ^ (128 | 63 & t))] : t >= 55296 && t < 57344 ? (t = 64 + (1023 & t), o = 1023 & e.charCodeAt(
              i++), n = (n = (n = (n = n >>> 8 ^ r[255 & (n ^ (240 | t >> 8 & 7))]) >>> 8 ^ r[255 & (n ^
              (128 | t >> 2 & 63))]) >>> 8 ^ r[255 & (n ^ (128 | o >> 6 & 15 | (3 & t) << 4))]) >>> 8 ^ r[
              255 & (n ^ (128 | 63 & o))]) : n = (n = (n = n >>> 8 ^ r[255 & (n ^ (224 | t >> 12 & 15))]) >>>
              8 ^ r[255 & (n ^ (128 | t >> 6 & 63))]) >>> 8 ^ r[255 & (n ^ (128 | 63 & t))];
          return -1 ^ n
        }(o) >>> 0;
        return [t.protocol, t.hostname].join("//") + o + "&s=" + n
      };
      var t = {};
      t.base64encode = function(e) {
        var t, r, o, n, i, a, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        for (o = e.length, r = 0, t = ""; r < o;) {
          if (n = 255 & e.charCodeAt(r++), r == o) {
            t += c.charAt(n >> 2), t += c.charAt((3 & n) << 4), t += "==";
            break
          }
          if (i = e.charCodeAt(r++), r == o) {
            t += c.charAt(n >> 2), t += c.charAt((3 & n) << 4 | (240 & i) >> 4), t += c.charAt((15 & i) << 2),
              t += "=";
            break
          }
          a = e.charCodeAt(r++), t += c.charAt(n >> 2), t += c.charAt((3 & n) << 4 | (240 & i) >> 4), t += c.charAt(
            (15 & i) << 2 | (192 & a) >> 6), t += c.charAt(63 & a)
        }
        return t
      }, t.base64decode = function(e) {
        var t, r, o, n, i, a, c, s = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
          -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -
          1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1,
          2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -
          1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46,
          47, 48, 49, 50, 51, -1, -1, -1, -1, -1
        ];
        for (a = e.length, i = 0, c = ""; i < a;) {
          do {
            t = s[255 & e.charCodeAt(i++)]
          } while (i < a && -1 == t);
          if (-1 == t) break;
          do {
            r = s[255 & e.charCodeAt(i++)]
          } while (i < a && -1 == r);
          if (-1 == r) break;
          c += String.fromCharCode(t << 2 | (48 & r) >> 4);
          do {
            if (61 == (o = 255 & e.charCodeAt(i++))) return c;
            o = s[o]
          } while (i < a && -1 == o);
          if (-1 == o) break;
          c += String.fromCharCode((15 & r) << 4 | (60 & o) >> 2);
          do {
            if (61 == (n = 255 & e.charCodeAt(i++))) return c;
            n = s[n]
          } while (i < a && -1 == n);
          if (-1 == n) break;
          c += String.fromCharCode((3 & o) << 6 | n)
        }
        return c
      }, t.utf16to8 = function(e) {
        var t, r, o, n;
        for (t = "", o = e.length, r = 0; r < o; r++)(n = e.charCodeAt(r)) >= 1 && n <= 127 ? t += e.charAt(r) :
          n > 2047 ? (t += String.fromCharCode(224 | n >> 12 & 15), t += String.fromCharCode(128 | n >> 6 &
            63), t += String.fromCharCode(128 | n >> 0 & 63)) : (t += String.fromCharCode(192 | n >> 6 & 31),
            t += String.fromCharCode(128 | n >> 0 & 63));
        return t
      }, t.utf8to16 = function(e) {
        var t, r, o, n, i, a;
        for (t = "", o = e.length, r = 0; r < o;) switch ((n = e.charCodeAt(r++)) >> 4) {
          case 0:
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
            t += e.charAt(r - 1);
            break;
          case 12:
          case 13:
            i = e.charCodeAt(r++), t += String.fromCharCode((31 & n) << 6 | 63 & i);
            break;
          case 14:
            i = e.charCodeAt(r++), a = e.charCodeAt(r++), t += String.fromCharCode((15 & n) << 12 | (63 & i) <<
              6 | (63 & a) << 0)
        }
        return t
      };
      var r = function(e) {
        this.config = {
          preload: "auto",
          controls: !0,
          controlBar: {},
          poster: "",
          autoplay: !1,
          loop: !1,
          width: 640,
          height: 320,
          pluginSwitcher: !0,
          id: "",
          remoteURL: "//i.snssdk.com/video/urls/v/1/toutiao/mp4/",
          videoID: "",
          type: "video_2,video_1,video_3"
        }, this.util.extend(this.config, e)
      };
      return r.prototype.util = e, r.prototype.encoder = t, r.prototype.createVideo = function(e) {
        var t = document.createElement("video"),
          r = document.createElement("source");
        return r.setAttribute("type", "video/mp4"), r.setAttribute("src", e), t.appendChild(r), this.video =
          t
      }, r.prototype.createOriginalVideo = function(e) {
        var t = document.createElement("video");
        return t.src = this.videoList[this.videoList.length - 1].src, t.poster = e.poster, t.controls =
          "controls", t.width = e.width, t.height = e.height, t.preload = e.preload, t.setAttribute(
            "webkit-playsinline", "webkit-playsinline"), t.setAttribute("playsinline", "playsinline"), t.id =
          e.id, t.className = e.class, t.autoplay = e.autoplay, this.video = t
      }, r.prototype.insertVideo = function(e, t) {
        var r = this.config.insertElement;
        r && (r.innerHTML = "", r.appendChild(e), t && this.util.isFunction(t) && t.call(this, e))
      }, r.prototype.reporter = function(e, t) {
        var r = [];
        r.push("account=toutiao_pc"), r.push("pathname=video_monitor"), r.push("event=" + t), r.push(
            "reffer=" + location.href), e && r.push(e), r.push("r=" + Math.random()), (new Image).src =
          "//toutiao.com/__utm.gif?" + r.join("&")
      }, r.prototype.getVideos = function(e) {
        var t, r, o = this,
          n = o.util,
          i = [];
        o.config.videoID && (r = n.crc32(o.config.remoteURL + o.config.videoID), n.jsonp(r, function(r) {
          var n = r.data.status;
          if (0 == r.code && 10 == n) {
            var a = r.data.video_list;
            for (var c in a) t = a[c], i.push({
              src: o.encoder.base64decode(t.main_url),
              type: "video/" + t.vtype,
              label: t.definition.replace("360p", "极速").replace("480p", "高清").replace("720p", "超清"),
              res: t.vheight
            });
            o.videoList = i, e && e instanceof Function && e.call(o)
          } else {
            var s = {
              20: "转码失败",
              30: "转码进行中",
              40: "视频id不存在",
              0: "unknown",
              1: "上传中",
              2: "上传失败",
              3: "等待上传",
              101: "视频被屏蔽",
              102: "视频被删除",
              103: "视频永久删除"
            } [n + ""] || r.message || "视频转码处理中";
            o.reporter(s + "=" + location.href, "video_error");
            var d = o.config.insertElement;
            d && (d.innerHTML = '<p class="video-fail">' + s + "</p>")
          }
        }))
      }, r.prototype.definition = function(e) {
        if (!i.default.sessionStorageEnabled()) return "low";
        if (e) sessionStorage.setItem("definition", e);
        else {
          for (var t, r = sessionStorage.getItem("definition"), o = this.videoList, n = 0, a = o.length; n <
            a; n++)
            if (o[n].label == r) return t = o[n].res;
          if (!t) return "high"
        }
      }, r.prototype.play = function() {
        var e, t = this,
          r = t.config;
        t.definition();
        e = t.createOriginalVideo(t.config), t.insertVideo(e), r.callback && r.callback()
      }, r.prototype.start = function() {
        this.getVideos(this.play)
      }, r
    })
  };
  o._FcfWIYI = function(t, e, i, n, r) {
    function a(e) {
      e.each(function() {
        var e = t("_6BrwHiQ")(this).html(),
          i = e.replace(/&nbsp;/g, " ");
        i = i.trim(), e.length !== i.length && t("_6BrwHiQ")(this).html(i)
      })
    }

    function o(e, i) {
      var n = +new Date,
        r = e.find(".online-video-wrapper"),
        o = null,
        d = null;
      r.length && (o = r.html(), d = r.attr("style")), window.group_id && !window.item_id && e.find("[style]").each(
          function(t) {
            this.style.color ? this.style.cssText = "color:" + this.style.color : this.style.cssText = ""
          }), r.length && (r.html(o), r.attr("style", d)), e.find("h2, h3, h4, h5, h6").each(function() {
          t("_6BrwHiQ")(this).wrapInner("<strong></strong>").find("strong").unwrap()
        }), e.find("table").each(function() {
          var e = t("_6BrwHiQ")(this);
          e.parents("p").length || e.wrap("<p></p>"),
            function(e) {
              var i = t("_6BrwHiQ")("<div></div>");
              if (e.find("tr").each(function(e, n) {
                  var r = t("_6BrwHiQ")(n).children();
                  if (1 !== r.length) return i = null, !1;
                  t("_6BrwHiQ")("<p></p>").html(r.html()).appendTo(i)
                }), i) {
                var n = i.html().replace(/<p><\/p>/gi, "").replace(/<p><p>/gi, "<p>").replace(/<\/p><\/p>/gi,
                  "</p>");
                return e.after(n), e.remove(), !0
              }
              return !1
            }(e) || e.text().length > 20 && (e.addClass("border"), e.find("th,td").each(function(e, i) {
              t("_6BrwHiQ")(i).html(t("_6BrwHiQ")(i).text())
            }))
        }), a(e.find("strong,span,a,td,th")), a(e.find("p,li")), e.find("span:empty").remove(), e.find("p:empty")
        .remove(),
        function(e) {
          e.find(".text-link").each(function() {
            var e = t("_6BrwHiQ")(this),
              i = e.text().trim();
            e.attr("is-label") || e.attr("href", "/search/?from=content&keyword=" + i).removeAttr("pro-href")
          })
        }(e);
      var s = +new Date;
      console.log("article purify time:%sms", s - n)
    }

    function d(e) {
      var i = e.find(".tt-video-box");
      ! function(e) {
        var i = e.find(".tt-video-box");
        if (i.length && 0 === i.find("video").length) {
          var n = i.attr("tt-poster"),
            r = t("_6BrwHiQ")("<img>", {
              src: n
            });
          i.empty().append(r)
        }
      }(e);
      new v.default({
        videoID: i.attr("tt-videoid"),
        id: "tt-video",
        class: "tt-video",
        insertElement: i[0],
        controls: !0,
        preload: !0,
        poster: i.attr("tt-poster"),
        nativeControlsForTouch: !0,
        autoplay: !1,
        callback: function() {
          var t = document.querySelector(".tt-video");
          t && t.addEventListener("error", function(t) {
            console.log("error in article video", (0, p.default)(t))
          })
        }
      }).start()
    }

    function s(t) {
      if (t && !w.default.browser.toutiao && !w.default.browser.xigua && !w.default.browser.feiliao) {
        var e = document.createElement("div");
        e.className = "img-download-banner", e.innerHTML = "打开" + ("hide" !== window.articleType ? g.default.appName :
          "APP") + "，查看更多图片";
        e.addEventListener("click", function() {
          return void(0, h.default)({
            position: "imageDownloadBanner",
            type: "detail",
            id: window.group_id,
            item_id: window.item_id,
            isNewVideo: window.isNewVideoPage
          })
        });
        var i = t.querySelector(".img-wrapper-embedded"),
          n = window.getComputedStyle(i) && window.getComputedStyle(i).height || 110;
        i && parseInt(n) > 110 && i.parentNode.insertBefore(e, i.nextSibling)
      }
    }

    function l(e) {
      if (e) {
        var i = t("_6BrwHiQ")(e);
        ! function(e) {
          e.find("tt-audio").each(function() {
            var e = t("_6BrwHiQ")(this).attr("time"),
              i = parseInt(e / 60),
              n = e % 60,
              r =
              '<a data-position="detailAudio" class="audio" href="javascript: void(0)"><div class="audio-container"><div class="audio-top"><span class="audio-title">' +
              t("_6BrwHiQ")(this).attr("title") + '</span><span class="audio-time">' + i + ":" + n +
              '</span></div><div class="audio-content">' + t("_6BrwHiQ")(this).attr("content") +
              '</div></div><div class="btn_download"><span>打开今日头条，体验完整音频内容</span></div></a>';
            t("_6BrwHiQ")(this).append(r)
          }), e.on("click", ".audio", function() {
            window.maevent("AudioBanner", "download");
            var t = w.default.browser.weixin ? "click_weixin_rf_detail_audio" : "click_wap_rf_detail_audio";
            (0, h.default)({
              position: "article_image",
              downloadLink: f.default.shortLinkPrefix + "/LhXY/",
              type: "detail",
              id: window.group_id,
              item_id: window.item_id,
              gdLabel: t,
              isNewVideo: window.isNewVideoPage
            })
          })
        }(i),
        function(e) {
          e.find("strong").each(function() {
            var e = this,
              i = !0;
            ["h1", "h2", "h3", "h4", "h5", "h6", "p"].forEach(function(n) {
              t("_6BrwHiQ")(e).parents(n).length && (i = !1)
            }), i && t("_6BrwHiQ")(this).wrap("<p></p>")
          }), e.find("img").each(function(i) {
            var n = t("_6BrwHiQ")(this),
              r = n.attr("img_width"),
              a = u.default.px2px(r),
              o = n.attr("img_height"),
              d = u.default.px2px(o),
              s = e.width() - 28;
            if (1 !== r && 1 !== o && this.getAttribute("src")) {
              n.attr("data-index", i);
              var l = t("_6BrwHiQ")(this).parents("p"),
                c = l.contents().length > 1;
              if (!c) {
                var p = "img-wrapper-embedded";
                0 === i ? l.length ? l.addClass(p) : n.wrap("<p class=" + p + "></p>") : l.length ? l.addClass(
                  p) : n.parent().hasClass("list-gallery-holder") || n.wrap("<p class=" + p + "></p>")
              }
              if (a > .5 * s) n.parent("p").css({
                width: "100%",
                "min-height": d * s / a
              });
              else {
                var f = n;
                c || (f = n.parent("p")), f.css({
                  width: a,
                  "min-height": d
                })
              }
              n.parent("p").prev("p").children("img").length && n.addClass("mt12"), this.nextSibling && n.addClass(
                "next20"), this.previousSibling && n.addClass("pre20")
            } else t("_6BrwHiQ")(this).remove()
          })
        }(i), o(i), d(i),
          function(t) {
            function e() {
              if (0 !== i.length)
                for (var t = 0; t < i.length; t++) {
                  var n = i[t];
                  m(n) && !n.getAttribute("src") && (n.setAttribute("src", n.getAttribute("data-src")), i.splice(
                    t, 1), t--)
                } else window.removeEventListener("scroll", e)
            }
            if (t) {
              var i = (0, c.default)(t.getElementsByTagName("img"));
              i.forEach(function(t) {
                t.setAttribute("data-src", t.getAttribute("src")), t.onload = function() {
                  t.style.opacity = 1
                }, t.src = ""
              }), e(), window.addEventListener("scroll", e)
            }
          }(e),
          function(t) {
            var e = t.querySelector(".mp-vote-submit");
            e && (e.setAttribute("disabled", "disabled"), e.innerHTML = "请在APP内进行投票", e.style.backgroundColor =
              "#d4d4d4", e.style.fontSize = "12px", e.style.color = "#525252")
          }(e), s(e),
          function(e) {
            window.isInAwemePage && (e.find("img").each(function(e) {
              t("_6BrwHiQ")(this).addClass("aweme-border")
            }), e.find("*").each(function(e, i) {
              var n = t("_6BrwHiQ")(i);
              /^(\d)+\.[\s\S]+/.test(n.text()) && 0 !== n.find("a").length && n.css({
                color: "#face15"
              })
            }))
          }(i), t("LcVv0zvE")
      }
    }
    Object.defineProperty(i, "__esModule", {
      value: !0
    });
    var c = n(t("C1A9_Inc")),
      p = n(t("qUYrYx_P")),
      u = n(t("Bv_CB0pX")),
      f = n(t("oYLqwKZ3")),
      h = n(t("fjpkKDAo")),
      w = n(t("k65Ijy_9")),
      v = n(t("_zeyjz8w")),
      g = n(t("JKQGrVxs")),
      m = function(t) {
        if (!t) return !1;
        var e = t.getBoundingClientRect(),
          i = window.innerHeight || document.documentElement.clientHeight;
        return e.top <= 1.5 * i && e.bottom >= 0
      };
    i.default = l
  };
  o.OWcl4fDl = function(e, i, n, _, g) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = function(e) {
      var i = RegExp(/(\[[^\]]+[\]])+?/g.source);
      return e && i.test(e) ? e.replace(/(\[[^\]]+[\]])+?/g, function(e) {
        return m[e] ?
          '<i class="emoji" style="background-image:url(//s3.pstatp.com/toutiao/tt_tps/static/images/ttemoji_v2/' +
          m[e].image + ')"></i>' : e
      }) : e
    };
    var m = {
      "[微笑]": {
        index: 1,
        name: "[微笑]",
        image: "emoji_1_smile@3x.png",
        key: "emoji_1_smile@3x.png",
        width: 96,
        height: 96
      },
      "[爱慕]": {
        index: 2,
        name: "[爱慕]",
        image: "emoji_2_kiss@3x.png",
        key: "emoji_2_kiss@3x.png",
        width: 96,
        height: 96
      },
      "[惊呆]": {
        index: 3,
        name: "[惊呆]",
        image: "emoji_3_daze@3x.png",
        key: "emoji_3_daze@3x.png",
        width: 96,
        height: 96
      },
      "[酷拽]": {
        index: 4,
        name: "[酷拽]",
        image: "emoji_4_smoke@3x.png",
        key: "emoji_4_smoke@3x.png",
        width: 96,
        height: 96
      },
      "[抠鼻]": {
        index: 5,
        name: "[抠鼻]",
        image: "emoji_5_pick_nose@3x.png",
        key: "emoji_5_pick_nose@3x.png",
        width: 96,
        height: 96
      },
      "[流泪]": {
        index: 6,
        name: "[流泪]",
        image: "emoji_6_cry@3x.png",
        key: "emoji_6_cry@3x.png",
        width: 96,
        height: 96
      },
      "[发怒]": {
        index: 7,
        name: "[发怒]",
        image: "emoji_7_anger@3x.png",
        key: "emoji_7_anger@3x.png",
        width: 96,
        height: 96
      },
      "[呲牙]": {
        index: 8,
        name: "[呲牙]",
        image: "emoji_8_laugh@3x.png",
        key: "emoji_8_laugh@3x.png",
        width: 96,
        height: 96
      },
      "[鼾睡]": {
        index: 9,
        name: "[鼾睡]",
        image: "emoji_9_sleep@3x.png",
        key: "emoji_9_sleep@3x.png",
        width: 96,
        height: 96
      },
      "[害羞]": {
        index: 10,
        name: "[害羞]",
        image: "emoji_10_shy@3x.png",
        key: "emoji_10_shy@3x.png",
        width: 96,
        height: 96
      },
      "[可爱]": {
        index: 11,
        name: "[可爱]",
        image: "emoji_11_naughty@3x.png",
        key: "emoji_11_naughty@3x.png",
        width: 102,
        height: 96
      },
      "[晕]": {
        index: 12,
        name: "[晕]",
        image: "emoji_12_dizzy@3x.png",
        key: "emoji_12_dizzy@3x.png",
        width: 96,
        height: 96
      },
      "[衰]": {
        index: 13,
        name: "[衰]",
        image: "emoji_13_stunned@3x.png",
        key: "emoji_13_stunned@3x.png",
        width: 96,
        height: 96
      },
      "[闭嘴]": {
        index: 14,
        name: "[闭嘴]",
        image: "emoji_14_shut_up@3x.png",
        key: "emoji_14_shut_up@3x.png",
        width: 96,
        height: 96
      },
      "[机智]": {
        index: 15,
        name: "[机智]",
        image: "emoji_15_wit@3x.png",
        key: "emoji_15_wit@3x.png",
        width: 96,
        height: 96
      },
      "[来看我]": {
        index: 16,
        name: "[来看我]",
        image: "emoji_16_attention@3x.png",
        key: "emoji_16_attention@3x.png",
        width: 108,
        height: 96
      },
      "[灵光一闪]": {
        index: 17,
        name: "[灵光一闪]",
        image: "emoji_17_hand_sample@3x.png",
        key: "emoji_17_hand_sample@3x.png",
        width: 102,
        height: 96
      },
      "[耶]": {
        index: 18,
        name: "[耶]",
        image: "emoji_18_ye@3x.png",
        key: "emoji_18_ye@3x.png",
        width: 99,
        height: 96
      },
      "[捂脸]": {
        index: 19,
        name: "[捂脸]",
        image: "emoji_19_distress_situation@3x.png",
        key: "emoji_19_distress_situation@3x.png",
        width: 96,
        height: 96
      },
      "[打脸]": {
        index: 20,
        name: "[打脸]",
        image: "emoji_20_play_face@3x.png",
        key: "emoji_20_play_face@3x.png",
        width: 102,
        height: 96
      },
      "[大笑]": {
        index: 21,
        name: "[大笑]",
        image: "emoji_21_smile@3x.png",
        key: "emoji_21_smile@3x.png",
        width: 96,
        height: 96
      },
      "[哈欠]": {
        index: 22,
        name: "[哈欠]",
        image: "emoji_22_yawn@3x.png",
        key: "emoji_22_yawn@3x.png",
        width: 96,
        height: 96
      },
      "[震惊]": {
        index: 23,
        name: "[震惊]",
        image: "emoji_23_surprise@3x.png",
        key: "emoji_23_surprise@3x.png",
        width: 96,
        height: 96
      },
      "[送心]": {
        index: 24,
        name: "[送心]",
        image: "emoji_24_take_heart@3x.png",
        key: "emoji_24_take_heart@3x.png",
        width: 96,
        height: 96
      },
      "[困]": {
        index: 25,
        name: "[困]",
        image: "emoji_25_sleepy@3x.png",
        key: "emoji_25_sleepy@3x.png",
        width: 96,
        height: 96
      },
      "[what]": {
        index: 26,
        name: "[what]",
        image: "emoji_26_what@3x.png",
        key: "emoji_26_what@3x.png",
        width: 105,
        height: 96
      },
      "[泣不成声]": {
        index: 27,
        name: "[泣不成声]",
        image: "emoji_27_sobbing@3x.png",
        key: "emoji_27_sobbing@3x.png",
        width: 96,
        height: 96
      },
      "[小鼓掌]": {
        index: 28,
        name: "[小鼓掌]",
        image: "emoji_28_handclap@3x.png",
        key: "emoji_28_handclap@3x.png",
        width: 96,
        height: 96
      },
      "[酷]": {
        index: 29,
        name: "[酷]",
        image: "emoji_29_cool@3x.png",
        key: "emoji_29_cool@3x.png",
        width: 96,
        height: 96
      },
      "[大金牙]": {
        index: 29,
        name: "[大金牙]",
        image: "emoji_29_cool@3x.png",
        key: "emoji_29_cool@3x.png",
        width: 96,
        height: 96
      },
      "[偷笑]": {
        index: 30,
        name: "[偷笑]",
        image: "emoji_30_titter@3x.png",
        key: "emoji_30_titter@3x.png",
        width: 96,
        height: 96
      },
      "[石化]": {
        index: 31,
        name: "[石化]",
        image: "emoji_31_lightning_strike@3x.png",
        key: "emoji_31_lightning_strike@3x.png",
        width: 96,
        height: 96
      },
      "[思考]": {
        index: 32,
        name: "[思考]",
        image: "emoji_32_meditation@3x.png",
        key: "emoji_32_meditation@3x.png",
        width: 96,
        height: 96
      },
      "[吐血]": {
        index: 33,
        name: "[吐血]",
        image: "emoji_33_vomiting_blood@3x.png",
        key: "emoji_33_vomiting_blood@3x.png",
        width: 96,
        height: 96
      },
      "[可怜]": {
        index: 34,
        name: "[可怜]",
        image: "emoji_34_acting_cute@3x.png",
        key: "emoji_34_acting_cute@3x.png",
        width: 96,
        height: 96
      },
      "[嘘]": {
        index: 35,
        name: "[嘘]",
        image: "emoji_35_quietly@3x.png",
        key: "emoji_35_quietly@3x.png",
        width: 96,
        height: 96
      },
      "[撇嘴]": {
        index: 36,
        name: "[撇嘴]",
        image: "emoji_36_hum@3x.png",
        key: "emoji_36_hum@3x.png",
        width: 96,
        height: 96
      },
      "[黑线]": {
        index: 37,
        name: "[黑线]",
        image: "emoji_37_khan@3x.png",
        key: "emoji_37_khan@3x.png",
        width: 96,
        height: 96
      },
      "[笑哭]": {
        index: 38,
        name: "[笑哭]",
        image: "emoji_38_forced_smile@3x.png",
        key: "emoji_38_forced_smile@3x.png",
        width: 111,
        height: 96
      },
      "[雾霾]": {
        index: 39,
        name: "[雾霾]",
        image: "emoji_39_haze@3x.png",
        key: "emoji_39_haze@3x.png",
        width: 96,
        height: 96
      },
      "[奸笑]": {
        index: 40,
        name: "[奸笑]",
        image: "emoji_40_smirk@3x.png",
        key: "emoji_40_smirk@3x.png",
        width: 96,
        height: 96
      },
      "[得意]": {
        index: 41,
        name: "[得意]",
        image: "emoji_41_cool@3x.png",
        key: "emoji_41_cool@3x.png",
        width: 96,
        height: 96
      },
      "[憨笑]": {
        index: 42,
        name: "[憨笑]",
        image: "emoji_42_bad_smile@3x.png",
        key: "emoji_42_bad_smile@3x.png",
        width: 96,
        height: 96
      },
      "[抓狂]": {
        index: 43,
        name: "[抓狂]",
        image: "emoji_43_crazy@3x.png",
        key: "emoji_43_crazy@3x.png",
        width: 96,
        height: 96
      },
      "[泪奔]": {
        index: 44,
        name: "[泪奔]",
        image: "emoji_44_tears@3x.png",
        key: "emoji_44_tears@3x.png",
        width: 96,
        height: 96
      },
      "[钱]": {
        index: 45,
        name: "[钱]",
        image: "emoji_45_money@3x.png",
        key: "emoji_45_money@3x.png",
        width: 96,
        height: 96
      },
      "[吻]": {
        index: 46,
        name: "[吻]",
        image: "emoji_46_kiss@3x.png",
        key: "emoji_46_kiss@3x.png",
        width: 96,
        height: 96
      },
      "[恐惧]": {
        index: 47,
        name: "[恐惧]",
        image: "emoji_47_fear@3x.png",
        key: "emoji_47_fear@3x.png",
        width: 96,
        height: 96
      },
      "[笑]": {
        index: 48,
        name: "[笑]",
        image: "emoji_48_smile@3x.png",
        key: "emoji_48_smile@3x.png",
        width: 96,
        height: 96
      },
      "[快哭了]": {
        index: 49,
        name: "[快哭了]",
        image: "emoji_49_injustice@3x.png",
        key: "emoji_49_injustice@3x.png",
        width: 96,
        height: 96
      },
      "[翻白眼]": {
        index: 50,
        name: "[翻白眼]",
        image: "emoji_50_their@3x.png",
        key: "emoji_50_their@3x.png",
        width: 96,
        height: 96
      },
      "[互粉]": {
        index: 51,
        name: "[互粉]",
        image: "emoji_51_focus@3x.png",
        key: "emoji_51_focus@3x.png",
        width: 96,
        height: 96
      },
      "[赞]": {
        index: 52,
        name: "[赞]",
        image: "emoji_52_like@3x.png",
        key: "emoji_52_like@3x.png",
        width: 96,
        height: 96
      },
      "[鼓掌]": {
        index: 53,
        name: "[鼓掌]",
        image: "emoji_53_handclap@3x.png",
        key: "emoji_53_handclap@3x.png",
        width: 96,
        height: 96
      },
      "[谢谢]": {
        index: 54,
        name: "[谢谢]",
        image: "emoji_54_3Q@3x.png",
        key: "emoji_54_3Q@3x.png",
        width: 96,
        height: 96
      },
      "[祈祷]": {
        index: 54,
        name: "[祈祷]",
        image: "emoji_54_3Q@3x.png",
        key: "emoji_54_3Q@3x.png",
        width: 96,
        height: 96
      },
      "[kiss]": {
        index: 55,
        name: "[kiss]",
        image: "emoji_55_kiss@3x.png",
        key: "emoji_55_kiss@3x.png",
        width: 96,
        height: 96
      },
      "[去污粉]": {
        index: 56,
        name: "[去污粉]",
        image: "emoji_56_household_cleanser@3x.png",
        key: "emoji_56_household_cleanser@3x.png",
        width: 96,
        height: 96
      },
      "[666]": {
        index: 57,
        name: "[666]",
        image: "emoji_57_666@3x.png",
        key: "emoji_57_666@3x.png",
        width: 96,
        height: 96
      },
      "[玫瑰]": {
        index: 58,
        name: "[玫瑰]",
        image: "emoji_58_rose@3x.png",
        key: "emoji_58_rose@3x.png",
        width: 96,
        height: 96
      },
      "[胡瓜]": {
        index: 59,
        name: "[胡瓜]",
        image: "emoji_59_cucumber@3x.png",
        key: "emoji_59_cucumber@3x.png",
        width: 96,
        height: 96
      },
      "[啤酒]": {
        index: 60,
        name: "[啤酒]",
        image: "emoji_60_beer@3x.png",
        key: "emoji_60_beer@3x.png",
        width: 96,
        height: 96
      },
      "[我想静静]": {
        index: 61,
        name: "[我想静静]",
        image: "emoji_61_distress_situation@3x.png",
        key: "emoji_61_distress_situation@3x.png",
        width: 105,
        height: 96
      },
      "[委屈]": {
        index: 62,
        name: "[委屈]",
        image: "emoji_62_injustice@3x.png",
        key: "emoji_62_injustice@3x.png",
        width: 96,
        height: 96
      },
      "[舔屏]": {
        index: 63,
        name: "[舔屏]",
        image: "emoji_63_lick_screen@3x.png",
        key: "emoji_63_lick_screen@3x.png",
        width: 96,
        height: 96
      },
      "[鄙视]": {
        index: 64,
        name: "[鄙视]",
        image: "emoji_64_despise@3x.png",
        key: "emoji_64_despise@3x.png",
        width: 96,
        height: 96
      },
      "[飞吻]": {
        index: 65,
        name: "[飞吻]",
        image: "emoji_65_kiss@3x.png",
        key: "emoji_65_kiss@3x.png",
        width: 96,
        height: 96
      },
      "[再见]": {
        index: 66,
        name: "[再见]",
        image: "emoji_66_bye@3x.png",
        key: "emoji_66_bye@3x.png",
        width: 96,
        height: 96
      },
      "[紫薇别走]": {
        index: 67,
        name: "[紫薇别走]",
        image: "emoji_67_erkang@3x.png",
        key: "emoji_67_erkang@3x.png",
        width: 108,
        height: 96
      },
      "[求抱抱]": {
        index: 68,
        name: "[求抱抱]",
        image: "emoji_68_hug@3x.png",
        key: "emoji_68_hug@3x.png",
        width: 108,
        height: 96
      },
      "[听歌]": {
        index: 69,
        name: "[听歌]",
        image: "emoji_69_hitler@3x.png",
        key: "emoji_69_hitler@3x.png",
        width: 96,
        height: 96
      },
      "[周冬雨的凝视]": {
        index: 70,
        name: "[周冬雨的凝视]",
        image: "emoji_70_zhoudongyu_gaze@3x.png",
        key: "emoji_70_zhoudongyu_gaze@3x.png",
        width: 96,
        height: 96
      },
      "[马思纯的微笑]": {
        index: 71,
        name: "[马思纯的微笑]",
        image: "emoji_71_masichun_smile@3x.png",
        key: "emoji_71_masichun_smile@3x.png",
        width: 96,
        height: 96
      },
      "[吐舌]": {
        index: 72,
        name: "[吐舌]",
        image: "emoji_72_dogo@3x.png",
        key: "emoji_72_dogo@3x.png",
        width: 96,
        height: 96
      },
      "[呆无辜]": {
        index: 73,
        name: "[呆无辜]",
        image: "emoji_73_cat@3x.png",
        key: "emoji_73_cat@3x.png",
        width: 96,
        height: 96
      },
      "[看]": {
        index: 74,
        name: "[看]",
        image: "emoji_74_2ha@3x.png",
        key: "emoji_74_2ha@3x.png",
        width: 96,
        height: 96
      },
      "[白眼]": {
        index: 75,
        name: "[白眼]",
        image: "emoji_75_dogo@3x.png",
        key: "emoji_75_dogo@3x.png",
        width: 96,
        height: 96
      },
      "[熊吉]": {
        index: 76,
        name: "[熊吉]",
        image: "emoji_76_bear@3x.png",
        key: "emoji_76_bear@3x.png",
        width: 96,
        height: 96
      },
      "[骷髅]": {
        index: 77,
        name: "[骷髅]",
        image: "emoji_77_skeleton@3x.png",
        key: "emoji_77_skeleton@3x.png",
        width: 96,
        height: 96
      },
      "[黑脸]": {
        index: 78,
        name: "[黑脸]",
        image: "emoji_78_black_face@3x.png",
        key: "emoji_78_black_face@3x.png",
        width: 96,
        height: 96
      },
      "[吃瓜群众]": {
        index: 79,
        name: "[吃瓜群众]",
        image: "emoji_79_eat_melon@3x.png",
        key: "emoji_79_eat_melon@3x.png",
        width: 96,
        height: 96
      },
      "[绿帽子]": {
        index: 80,
        name: "[绿帽子]",
        image: "emoji_80_green_hat@3x.png",
        key: "emoji_80_green_hat@3x.png",
        width: 96,
        height: 96
      },
      "[汗]": {
        index: 81,
        name: "[汗]",
        image: "emoji_81_sweat@3x.png",
        key: "emoji_81_sweat@3x.png",
        width: 96,
        height: 96
      },
      "[摸头]": {
        index: 82,
        name: "[摸头]",
        image: "emoji_82_lear_ropes@3x.png",
        key: "emoji_82_lear_ropes@3x.png",
        width: 96,
        height: 96
      },
      "[皱眉]": {
        index: 83,
        name: "[皱眉]",
        image: "emoji_83_frown@3x.png",
        key: "emoji_83_frown@3x.png",
        width: 96,
        height: 96
      },
      "[擦汗]": {
        index: 84,
        name: "[擦汗]",
        image: "emoji_84_wipe_sweat@3x.png",
        key: "emoji_84_wipe_sweat@3x.png",
        width: 96,
        height: 96
      },
      "[红脸]": {
        index: 85,
        name: "[红脸]",
        image: "emoji_85_redface@3x.png",
        key: "emoji_85_redface@3x.png",
        width: 96,
        height: 96
      },
      "[尬笑]": {
        index: 86,
        name: "[尬笑]",
        image: "emoji_86_orz@3x.png",
        key: "emoji_86_orz@3x.png",
        width: 96,
        height: 96
      },
      "[做鬼脸]": {
        index: 87,
        name: "[做鬼脸]",
        image: "emoji_87_makeface@3x.png",
        key: "emoji_87_makeface@3x.png",
        width: 96,
        height: 96
      },
      "[强]": {
        index: 88,
        name: "[强]",
        image: "emoji_88_intensity@3x.png",
        key: "emoji_88_intensity@3x.png",
        width: 96,
        height: 96
      },
      "[如花]": {
        index: 89,
        name: "[如花]",
        image: "emoji_89_ruhua@3x.png",
        key: "emoji_89_ruhua@3x.png",
        width: 96,
        height: 96
      },
      "[吐]": {
        index: 90,
        name: "[吐]",
        image: "emoji_90_spit@3x.png",
        key: "emoji_90_spit@3x.png",
        width: 96,
        height: 96
      },
      "[惊喜]": {
        index: 91,
        name: "[惊喜]",
        image: "emoji_91_surprise@3x.png",
        key: "emoji_91_surprise@3x.png",
        width: 96,
        height: 96
      },
      "[敲打]": {
        index: 92,
        name: "[敲打]",
        image: "emoji_92_knock@3x.png",
        key: "emoji_92_knock@3x.png",
        width: 96,
        height: 96
      },
      "[奋斗]": {
        index: 93,
        name: "[奋斗]",
        image: "emoji_93_refuel@3x.png",
        key: "emoji_93_refuel@3x.png",
        width: 96,
        height: 96
      },
      "[吐彩虹]": {
        index: 94,
        name: "[吐彩虹]",
        image: "emoji_94_rainbow@3x.png",
        key: "emoji_94_rainbow@3x.png",
        width: 96,
        height: 96
      },
      "[大哭]": {
        index: 95,
        name: "[大哭]",
        image: "emoji_95_bigcry@3x.png",
        key: "emoji_95_bigcry@3x.png",
        width: 96,
        height: 96
      },
      "[比心]": {
        index: 96,
        name: "[比心]",
        image: "emoji_96_fingerheart@3x.png",
        key: "emoji_96_fingerheart@3x.png",
        width: 96,
        height: 96
      },
      "[加油]": {
        index: 97,
        name: "[加油]",
        image: "emoji_97_refuel@3x.png",
        key: "emoji_97_refuel@3x.png",
        width: 96,
        height: 96
      },
      "[碰拳]": {
        index: 98,
        name: "[碰拳]",
        image: "emoji_98_fist@3x.png",
        key: "emoji_98_fist@3x.png",
        width: 96,
        height: 96
      },
      "[ok]": {
        index: 99,
        name: "[ok]",
        image: "emoji_99_OK@3x.png",
        key: "emoji_99_OK@3x.png",
        width: 96,
        height: 96
      },
      "[击掌]": {
        index: 100,
        name: "[击掌]",
        image: "emoji_100_highfive@3x.png",
        key: "emoji_100_highfive@3x.png",
        width: 96,
        height: 96
      },
      "[左上]": {
        index: 101,
        name: "[左上]",
        image: "emoji_101_left@3x.png",
        key: "emoji_101_left@3x.png",
        width: 96,
        height: 96
      },
      "[握手]": {
        index: 102,
        name: "[握手]",
        image: "emoji_102_shakehand@3x.png",
        key: "emoji_102_shakehand@3x.png",
        width: 96,
        height: 96
      },
      "[18禁]": {
        index: 103,
        name: "[18禁]",
        image: "emoji_103_18@3x.png",
        key: "emoji_103_18@3x.png",
        width: 96,
        height: 96
      },
      "[刀]": {
        index: 104,
        name: "[刀]",
        image: "emoji_104_knife@3x.png",
        key: "emoji_104_knife@3x.png",
        width: 96,
        height: 96
      },
      "[V5]": {
        index: 105,
        name: "[V5]",
        image: "emoji_105_V5@3x.png",
        key: "emoji_105_V5@3x.png",
        width: 96,
        height: 96
      },
      "[给力]": {
        index: 106,
        name: "[给力]",
        image: "emoji_106_awesome@3x.png",
        key: "emoji_106_awesome@3x.png",
        width: 96,
        height: 96
      },
      "[心]": {
        index: 107,
        name: "[心]",
        image: "emoji_107_heart@3x.png",
        key: "emoji_107_heart@3x.png",
        width: 96,
        height: 96
      },
      "[伤心]": {
        index: 108,
        name: "[伤心]",
        image: "emoji_108_broken_heart@3x.png",
        key: "emoji_108_broken_heart@3x.png",
        width: 96,
        height: 96
      },
      "[屎]": {
        index: 109,
        name: "[屎]",
        image: "emoji_109_shit@3x.png",
        key: "emoji_109_shit@3x.png",
        width: 96,
        height: 96
      },
      "[礼物]": {
        index: 110,
        name: "[礼物]",
        image: "emoji_110_gifts@3x.png",
        key: "emoji_110_gifts@3x.png",
        width: 96,
        height: 96
      },
      "[蛋糕]": {
        index: 111,
        name: "[蛋糕]",
        image: "emoji_111_cake@3x.png",
        key: "emoji_111_cake@3x.png",
        width: 96,
        height: 96
      },
      "[撒花]": {
        index: 112,
        name: "[撒花]",
        image: "emoji_112_flower@3x.png",
        key: "emoji_112_flower@3x.png",
        width: 96,
        height: 96
      },
      "[不看]": {
        index: 113,
        name: "[不看]",
        image: "emoji_113_lookat@3x.png",
        key: "emoji_113_lookat@3x.png",
        width: 96,
        height: 96
      },
      "[炸弹]": {
        index: 114,
        name: "[炸弹]",
        image: "emoji_114_bomb@3x.png",
        key: "emoji_114_bomb@3x.png",
        width: 96,
        height: 96
      }
    }
  };
  o.nVKhrOF7 = function(t, o, d, a, i) {
    Object.defineProperty(d, "__esModule", {
      value: !0
    }), d.TEST_URL_CONFIG = d.url_config = void 0;
    a(t("E7MLSnqQ"));
    var s = a(t("k65Ijy_9")),
      u = {
        ios: {
          aweme: "https://d.toutiao.com/Mwp2/",
          default: "https://d.toutiao.com/DSt8/"
        },
        android: {
          aweme: "https://d.toutiao.com/eFTn/",
          default: "https://d.toutiao.com/YNPe/"
        }
      };
    d.url_config = s.default.os.ios ? u.ios : u.android, d.TEST_URL_CONFIG = {
      hotCardControl: {
        recommendation: {
          android: "https://d.toutiao.com/UXEp/",
          ios: "https://d.toutiao.com/P2A5/"
        },
        default: {
          android: "https://d.toutiao.com/YJbb/",
          ios: "https://d.toutiao.com/dD7U/"
        }
      },
      hotCardTest1: {
        hotCard: {
          android: "https://d.toutiao.com/R8Pg/",
          ios: "https://d.toutiao.com/AXYG/"
        },
        recommendation: {
          android: "https://d.toutiao.com/DEyE/",
          ios: "https://d.toutiao.com/LJdQ/"
        },
        default: {
          android: "https://d.toutiao.com/y9R6/",
          ios: "https://d.toutiao.com/MVmD/"
        }
      },
      hotCardTest2: {
        hotCard: {
          android: "https://d.toutiao.com/Aver/",
          ios: "https://d.toutiao.com/rSUs/"
        },
        recommendation: {
          android: "https://d.toutiao.com/rVGK/",
          ios: "https://d.toutiao.com/JStG/"
        },
        default: {
          android: "https://d.toutiao.com/Ywn2/",
          ios: "https://d.toutiao.com/LTW5/"
        }
      },
      brandsControl: {
        default: "https://d.toutiao.com/hsRX/"
      },
      brandsTest1: {
        default: {
          high: "https://d.toutiao.com/MdJm/",
          hide: "https://d.toutiao.com/8oHn/",
          normal: "https://d.toutiao.com/MQwc/"
        }
      }
    }
  };
  o.zkk8d9NK = function(e, t, o, n, l) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var u = n(e("__gK4WbX")),
      d = n(e("lgLPKmWO")),
      r = n(e("LFxswB00")),
      a = n(e("_3k8jqSq")),
      c = n(e("C_TrCxPr")),
      i = e("zNszyAds"),
      f = n(i),
      p = n(e("dLqIczAI")),
      s = n(e("CcFRdAGK")),
      h = function(e) {
        function t(e) {
          (0, d.default)(this, t);
          var o = (0, a.default)(this, (t.__proto__ || (0, u.default)(t)).call(this, e));
          return o.state = {
            isShowActivatePop: !1
          }, o
        }
        return (0, c.default)(t, e), (0, r.default)(t, [{
          key: "componentDidUpdate",
          value: function(e) {
            var t = document.querySelector(".pop-box-container");
            this.props.isShowPopBox && t && t.addEventListener("touchmove", function(e) {
              e.preventDefault()
            }, !1)
          }
        }, {
          key: "render",
          value: function() {
            var e = this.props,
              t = e.PopBoxContent,
              o = e.children,
              n = e.handleClick,
              l = e.isShowPopBox;
            return [f.default.cloneElement(o, {
              onClick: function() {
                return n()
              }
            }), l && p.default.createPortal(f.default.createElement(t, this.props), document.body)]
          }
        }]), t
      }(i.Component);
    h.propTypes = {
      isShowPopBox: s.default.bool,
      handleClick: s.default.func,
      PopBoxContent: s.default.node,
      children: s.default.node
    }, o.default = h
  };
  o.aiZPfnp6 = function(t, r, e, n) {
    ! function(t) {
      "use strict";

      function e(t, r, e, i) {
        var a = r && r.prototype instanceof o ? r : o,
          c = Object.create(a.prototype),
          u = new l(i || []);
        return c._invoke = function(t, r, e) {
          var o = _;
          return function(i, a) {
            if (o === O) throw new Error("Generator is already running");
            if (o === k) {
              if ("throw" === i) throw a;
              return y()
            }
            for (e.method = i, e.arg = a;;) {
              var c = e.delegate;
              if (c) {
                var u = h(c, e);
                if (u) {
                  if (u === G) continue;
                  return u
                }
              }
              if ("next" === e.method) e.sent = e._sent = e.arg;
              else if ("throw" === e.method) {
                if (o === _) throw o = k, e.arg;
                e.dispatchException(e.arg)
              } else "return" === e.method && e.abrupt("return", e.arg);
              o = O;
              var f = n(t, r, e);
              if ("normal" === f.type) {
                if (o = e.done ? k : j, f.arg === G) continue;
                return {
                  value: f.arg,
                  done: e.done
                }
              }
              "throw" === f.type && (o = k, e.method = "throw", e.arg = f.arg)
            }
          }
        }(t, e, u), c
      }

      function n(t, r, e) {
        try {
          return {
            type: "normal",
            arg: t.call(r, e)
          }
        } catch (t) {
          return {
            type: "throw",
            arg: t
          }
        }
      }

      function o() {}

      function i() {}

      function a() {}

      function c(t) {
        ["next", "throw", "return"].forEach(function(r) {
          t[r] = function(t) {
            return this._invoke(r, t)
          }
        })
      }

      function u(t) {
        function r(e, o, i, a) {
          var c = n(t[e], t, o);
          if ("throw" !== c.type) {
            var u = c.arg,
              h = u.value;
            return h && "object" == typeof h && g.call(h, "__await") ? Promise.resolve(h.__await).then(function(t) {
              r("next", t, i, a)
            }, function(t) {
              r("throw", t, i, a)
            }) : Promise.resolve(h).then(function(t) {
              u.value = t, i(u)
            }, a)
          }
          a(c.arg)
        }
        var e;
        this._invoke = function(t, n) {
          function o() {
            return new Promise(function(e, o) {
              r(t, n, e, o)
            })
          }
          return e = e ? e.then(o, o) : o()
        }
      }

      function h(t, r) {
        var e = t.iterator[r.method];
        if (e === v) {
          if (r.delegate = null, "throw" === r.method) {
            if (t.iterator.return && (r.method = "return", r.arg = v, h(t, r), "throw" === r.method)) return G;
            r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method")
          }
          return G
        }
        var o = n(e, t.iterator, r.arg);
        if ("throw" === o.type) return r.method = "throw", r.arg = o.arg, r.delegate = null, G;
        var i = o.arg;
        return i ? i.done ? (r[t.resultName] = i.value, r.next = t.nextLoc, "return" !== r.method && (r.method =
          "next", r.arg = v), r.delegate = null, G) : i : (r.method = "throw", r.arg = new TypeError(
          "iterator result is not an object"), r.delegate = null, G)
      }

      function f(t) {
        var r = {
          tryLoc: t[0]
        };
        1 in t && (r.catchLoc = t[1]), 2 in t && (r.finallyLoc = t[2], r.afterLoc = t[3]), this.tryEntries.push(r)
      }

      function s(t) {
        var r = t.completion || {};
        r.type = "normal", delete r.arg, t.completion = r
      }

      function l(t) {
        this.tryEntries = [{
          tryLoc: "root"
        }], t.forEach(f, this), this.reset(!0)
      }

      function p(t) {
        if (t) {
          var r = t[w];
          if (r) return r.call(t);
          if ("function" == typeof t.next) return t;
          if (!isNaN(t.length)) {
            var e = -1,
              n = function r() {
                for (; ++e < t.length;)
                  if (g.call(t, e)) return r.value = t[e], r.done = !1, r;
                return r.value = v, r.done = !0, r
              };
            return n.next = n
          }
        }
        return {
          next: y
        }
      }

      function y() {
        return {
          value: v,
          done: !0
        }
      }
      var v, d = Object.prototype,
        g = d.hasOwnProperty,
        m = "function" == typeof Symbol ? Symbol : {},
        w = m.iterator || "@@iterator",
        L = m.asyncIterator || "@@asyncIterator",
        x = m.toStringTag || "@@toStringTag",
        E = "object" == typeof r,
        b = window.regeneratorRuntime;
      if (b) E && (r.exports = b);
      else {
        (b = window.regeneratorRuntime = E ? r.exports : {}).wrap = e;
        var _ = "suspendedStart",
          j = "suspendedYield",
          O = "executing",
          k = "completed",
          G = {},
          N = {};
        N[w] = function() {
          return this
        };
        var P = Object.getPrototypeOf,
          F = P && P(P(p([])));
        F && F !== d && g.call(F, w) && (N = F);
        var S = a.prototype = o.prototype = Object.create(N);
        i.prototype = S.constructor = a, a.constructor = i, a[x] = i.displayName = "GeneratorFunction", b.isGeneratorFunction =
          function(t) {
            var r = "function" == typeof t && t.constructor;
            return !!r && (r === i || "GeneratorFunction" === (r.displayName || r.name))
          }, b.mark = function(t) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t, a) : (t.__proto__ = a, x in t || (t[x] =
              "GeneratorFunction")), t.prototype = Object.create(S), t
          }, b.awrap = function(t) {
            return {
              __await: t
            }
          }, c(u.prototype), u.prototype[L] = function() {
            return this
          }, b.AsyncIterator = u, b.async = function(t, r, n, o) {
            var i = new u(e(t, r, n, o));
            return b.isGeneratorFunction(r) ? i : i.next().then(function(t) {
              return t.done ? t.value : i.next()
            })
          }, c(S), S[x] = "Generator", S[w] = function() {
            return this
          }, S.toString = function() {
            return "[object Generator]"
          }, b.keys = function(t) {
            var r = [];
            for (var e in t) r.push(e);
            return r.reverse(),
              function e() {
                for (; r.length;) {
                  var n = r.pop();
                  if (n in t) return e.value = n, e.done = !1, e
                }
                return e.done = !0, e
              }
          }, b.values = p, l.prototype = {
            constructor: l,
            reset: function(t) {
              if (this.prev = 0, this.next = 0, this.sent = this._sent = v, this.done = !1, this.delegate =
                null, this.method = "next", this.arg = v, this.tryEntries.forEach(s), !t)
                for (var r in this) "t" === r.charAt(0) && g.call(this, r) && !isNaN(+r.slice(1)) && (this[r] =
                  v)
            },
            stop: function() {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval
            },
            dispatchException: function(t) {
              function r(r, n) {
                return i.type = "throw", i.arg = t, e.next = r, n && (e.method = "next", e.arg = v), !!n
              }
              if (this.done) throw t;
              for (var e = this, n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n],
                  i = o.completion;
                if ("root" === o.tryLoc) return r("end");
                if (o.tryLoc <= this.prev) {
                  var a = g.call(o, "catchLoc"),
                    c = g.call(o, "finallyLoc");
                  if (a && c) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                  } else if (a) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0)
                  } else {
                    if (!c) throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                  }
                }
              }
            },
            abrupt: function(t, r) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc <= this.prev && g.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                  var o = n;
                  break
                }
              }
              o && ("break" === t || "continue" === t) && o.tryLoc <= r && r <= o.finallyLoc && (o = null);
              var i = o ? o.completion : {};
              return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o.finallyLoc, G) : this.complete(
                i)
            },
            complete: function(t, r) {
              if ("throw" === t.type) throw t.arg;
              return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (
                  this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type &&
                r && (this.next = r), G
            },
            finish: function(t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var e = this.tryEntries[r];
                if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), s(e), G
              }
            },
            catch: function(t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var e = this.tryEntries[r];
                if (e.tryLoc === t) {
                  var n = e.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    s(e)
                  }
                  return o
                }
              }
              throw new Error("illegal catch attempt")
            },
            delegateYield: function(t, r, e) {
              return this.delegate = {
                iterator: p(t),
                resultName: r,
                nextLoc: e
              }, "next" === this.method && (this.arg = v), G
            }
          }
      }
    }(function() {
      return this
    }() || Function("return this")())
  };
  o.kwJIKkEn = function(e, r, t, n) {
    var i = function() {
        return this
      }() || Function("return this")(),
      o = i.regeneratorRuntime && Object.getOwnPropertyNames(i).indexOf("regeneratorRuntime") >= 0,
      u = o && i.regeneratorRuntime;
    if (i.regeneratorRuntime = void 0, r.exports = e("aiZPfnp6"), o) i.regeneratorRuntime = u;
    else try {
      delete i.regeneratorRuntime
    } catch (e) {
      i.regeneratorRuntime = void 0
    }
  };
  o.kvaO6mJX = function(n, t, e, u) {
    "use strict";
    e.__esModule = !0;
    var r = u(n("XbxgipO3"));
    e.default = function(n) {
      return function() {
        var t = n.apply(this, arguments);
        return new r.default(function(n, e) {
          function u(o, i) {
            try {
              var f = t[o](i),
                c = f.value
            } catch (n) {
              return void e(n)
            }
            if (!f.done) return r.default.resolve(c).then(function(n) {
              u("next", n)
            }, function(n) {
              u("throw", n)
            });
            n(c)
          }
          return u("next")
        })
      }
    }
  };
  o.XrucwMhA = function(e, t, a, n, r) {
    Object.defineProperty(a, "__esModule", {
      value: !0
    });
    var o = n(e("XbxgipO3")),
      i = n(e("kwJIKkEn")),
      l = n(e("kvaO6mJX")),
      s = n(e("__gK4WbX")),
      u = n(e("lgLPKmWO")),
      d = n(e("LFxswB00")),
      c = n(e("_3k8jqSq")),
      p = n(e("C_TrCxPr")),
      f = e("XuoRHdPA"),
      w = e("_bS5TFau"),
      h = e("nVKhrOF7"),
      v = e("zNszyAds"),
      k = n(v),
      m = n(e("CcFRdAGK")),
      _ = n(e("k65Ijy_9")),
      b = n(e("oYLqwKZ3")),
      x = function(e) {
        function t(e) {
          (0, u.default)(this, t);
          var a = (0, c.default)(this, (t.__proto__ || (0, s.default)(t)).call(this, e));
          return a.state = {
            title: "",
            btn_words: ""
          }, a
        }
        return (0, p.default)(t, e), (0, d.default)(t, [{
          key: "componentDidMount",
          value: function() {
            var e = (0, l.default)(i.default.mark(function e() {
              var t, a, n, r, o;
              return i.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, this.getActivateParams();
                  case 2:
                    t = e.sent, a = t.title, n = void 0 === a ? "" : a, r = t.btn_words, o =
                      void 0 === r ? "" : r, this.setState({
                        title: n,
                        btn_words: o
                      });
                  case 8:
                  case "end":
                    return e.stop()
                }
              }, e, this)
            }));
            return function() {
              return e.apply(this, arguments)
            }
          }()
        }, {
          key: "getAppInstalled",
          value: function(e) {
            return new o.default(function(t, a) {
              window.ToutiaoJSBridge || t(-1), window.ToutiaoJSBridge && window.ToutiaoJSBridge.call(
                "isAppInstalled", {
                  pkg_name: e
                },
                function(e) {
                  -1 === e.code && t(-1), t(1 === e.installed)
                })
            })
          }
        }, {
          key: "getActivateParams",
          value: function() {
            var e = (0, l.default)(i.default.mark(function e() {
              var t, a, n, r, o, l, s, u;
              return i.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (t = {
                        open: "即将离开抖音，打开“今日头条”",
                        download: "下载“今日头条”APP查看更多内容",
                        openOrDownload: "即将打开或下载“今日头条”APP"
                      }, a = {
                        open: "立刻前往",
                        download: "立即下载",
                        openOrDownload: "允许"
                      }, n = t.open, r = !1, o = !1, l = !1, s = a.open, !_.default.os.ios) {
                      e.next = 5;
                      break
                    }
                    return e.abrupt("return", {
                      title: n,
                      btn_words: a.openOrDownload
                    });
                  case 5:
                    return e.next = 7, this.getAppInstalled("com.ss.android.article.news");
                  case 7:
                    if (-1 === (u = e.sent)) {
                      e.next = 16;
                      break
                    }
                    return r = u, e.next = 12, this.getAppInstalled(
                      "com.ss.android.article.lite");
                  case 12:
                    o = e.sent, r || o || (n = t.download, s = a.download), e.next = 18;
                    break;
                  case 16:
                    n = t.openOrDownload, l = !0;
                  case 18:
                    return e.abrupt("return", {
                      title: n,
                      isToutiaoInstalled: r,
                      isLiteInstalled: o,
                      isFailInBridge: l,
                      btn_words: s
                    });
                  case 19:
                  case "end":
                    return e.stop()
                }
              }, e, this)
            }));
            return function() {
              return e.apply(this, arguments)
            }
          }()
        }, {
          key: "onChooseClick",
          value: function() {
            var e = (0, l.default)(i.default.mark(function e(t) {
              var a, n, r, o, l;
              return i.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (a = {
                        downloadLink: h.url_config.aweme,
                        id: window.group_id,
                        type: "detail",
                        isNewVideo: window.isNewVideoPage,
                        extraData: b.default.getExtraData({
                          type: "wap_no_recommend_activation"
                        })
                      }, this.props.changeShowPopBox(!1), "cancel" === t) {
                      e.next = 19;
                      break
                    }
                    return e.next = 5, this.getActivateParams();
                  case 5:
                    if (n = e.sent, r = n.isToutiaoInstalled, o = n.isLiteInstalled, !(l = n.isFailInBridge) &&
                      !_.default.os.ios) {
                      e.next = 12;
                      break
                    }
                    return this.props.activateClick(), e.abrupt("return");
                  case 12:
                    if (a.app = r ? "news_article" : "news_article_lite", a.nativeLink = b.default
                      .getNativeLink(a), this.props.handleMaevent(), !r && !o) {
                      e.next = 18;
                      break
                    }
                    return (0, w.wap2AppWithAdr)(a), e.abrupt("return");
                  case 18:
                    (0, f.appDownloadWithAdr)(a);
                  case 19:
                  case "end":
                    return e.stop()
                }
              }, e, this)
            }));
            return function(t) {
              return e.apply(this, arguments)
            }
          }()
        }, {
          key: "render",
          value: function() {
            var e = this,
              t = this.state,
              a = t.title,
              n = t.btn_words;
            return k.default.createElement("div", {
              className: "pop-box-container"
            }, k.default.createElement("div", {
              className: "pop-box"
            }, k.default.createElement("div", {
              className: "pop-title"
            }, k.default.createElement("span", null, a)), k.default.createElement("div", {
              className: "box-choose"
            }, k.default.createElement("div", {
              className: "choose-all cancel",
              onClick: function() {
                return e.onChooseClick("cancel")
              }
            }, "取消"), k.default.createElement("div", {
              className: "choose-all sure",
              onClick: function() {
                return e.onChooseClick("sure")
              }
            }, n))))
          }
        }]), t
      }(v.Component);
    x.propTypes = {
      activateClick: m.default.func,
      changeShowPopBox: m.default.func,
      handleMaevent: m.default.func
    }, a.default = x
  };
  o.aR_71ts1 = function(e, t, a, n, l) {
    Object.defineProperty(a, "__esModule", {
      value: !0
    });
    var i = n(e("__gK4WbX")),
      o = n(e("lgLPKmWO")),
      d = n(e("LFxswB00")),
      r = n(e("_3k8jqSq")),
      c = n(e("C_TrCxPr")),
      u = n(e("zNszyAds")),
      s = n(e("CcFRdAGK")),
      f = n(e("blKUJY8C")),
      h = n(e("E7MLSnqQ")),
      p = n(e("fjpkKDAo")),
      m = n(e("oYLqwKZ3")),
      _ = e("nVKhrOF7"),
      v = n(e("zkk8d9NK")),
      w = n(e("XrucwMhA")),
      k = n(e("k65Ijy_9")),
      g = function(e) {
        function t(e) {
          (0, o.default)(this, t);
          var a = (0, r.default)(this, (t.__proto__ || (0, i.default)(t)).call(this, e));
          return a.state = {
            isShowPopBox: !1
          }, a
        }
        return (0, c.default)(t, e), (0, d.default)(t, [{
          key: "handleMaevent",
          value: function(e, t) {
            window.maevent("enter_article", "personal_detail", 0, 0, {
              enter_method: t,
              group_id: window.group_id,
              search_keyword: decodeURIComponent(h.default.request("search_keyword") || ""),
              author_id: e || ""
            })
          }
        }, {
          key: "handleAvatarClick",
          value: function(e, t) {
            this.handleMaevent(e, t);
            var a = {
              downloadLink: this.props.GTMValue.pgcSurl || _.url_config.aweme,
              id: window.group_id,
              type: "detail",
              isNewVideo: window.isNewVideoPage,
              extraData: m.default.getExtraData({
                type: "wap_activation"
              })
            };
            (0, p.default)(a)
          }
        }, {
          key: "onBtnClick",
          value: function() {
            this.props.isShowArticleEvaluted || this.changeShowPopBox(!0)
          }
        }, {
          key: "componentDidMount",
          value: function() {
            var e = this.props.data.title,
              t = void 0 === e ? "" : e;
            window.__title__ = t
          }
        }, {
          key: "handleClickComment",
          value: function(e) {
            e.preventDefault(), e.stopPropagation();
            var t = "",
              a = {
                downloadLink: t = this.props.GTMValue.pgcSurl || t,
                id: window.group_id,
                gdLabel: k.default.browser.weixin ? "click_weixin_rf_detail_guanzhu" : "click_wap_rf_detail_guanzhu",
                type: "comment",
                isNewVideo: window.isNewVideoPage,
                extraData: m.default.getExtraData({
                  type: "wap_activation"
                })
              };
            (0, p.default)(a)
          }
        }, {
          key: "changeShowPopBox",
          value: function(e) {
            this.setState({
              isShowPopBox: !!e
            }, function() {
              if (e) {
                document.querySelector(".pop-box-container").addEventListener("touchmove", function(e) {
                  e.preventDefault()
                }, !1)
              }
            })
          }
        }, {
          key: "render",
          value: function() {
            var e = this,
              t = this.state.isShowPopBox,
              a = this.props,
              n = a.isShowArticleEvaluted,
              l = a.data,
              i = a.containStyle,
              o = l.title,
              d = l.media_user,
              r = l.impression_count,
              c = l.is_original,
              s = l.comment_count,
              h = d || {},
              p = h.id,
              m = h.avatar_url,
              _ = h.user_auth_info,
              k = void 0 === _ ? {} : _,
              g = l.publish_time,
              E = void 0 === g ? "" : g;
            E && (E = (0, f.default)(1e3 * E));
            var y = u.default.createElement("p", null, "内容来自今日头条·", E),
              x = u.default.createElement("span", {
                className: "header-comment"
              }, r, "人阅读");
            if (n) {
              var C = k && k.auth_info && k.auth_info.split(" ")[0],
                S = k.other_auth && k.other_auth.interest || C;
              y = u.default.createElement("div", {
                className: "tag"
              }, c && u.default.createElement("span", {
                className: "original-tag"
              }, "原创"), S && u.default.createElement("span", {
                className: "creator-tag"
              }, S)), x = u.default.createElement("div", {
                className: "header-comment"
              }, u.default.createElement("span", null, E), l.comment_count > 0 && [u.default.createElement(
                "span", {
                  key: "1",
                  className: "dot"
                }), u.default.createElement("span", {
                key: "2",
                onClick: function(t) {
                  return e.handleClickComment(t)
                }
              }, function(e) {
                return Number(e) > 1e4 ? (Number(e) / 1e4).toFixed(1) + "万" : e
              }(s), "评论")])
            }
            return u.default.createElement("div", {
              className: "article-header-wrapper " + (n ? i : "")
            }, u.default.createElement("div", {
              className: "header-title"
            }, o), u.default.createElement("div", {
              className: "avatar-wrapper"
            }, u.default.createElement(v.default, {
              isShowPopBox: t,
              changeShowPopBox: function(t) {
                return e.changeShowPopBox(t)
              },
              PopBoxContent: w.default,
              handleClick: function() {
                return e.onBtnClick()
              },
              activateClick: this.handleAvatarClick.bind(this, p, "click_head"),
              handleMaevent: this.handleMaevent.bind(this, p, "click_head")
            }, u.default.createElement("div", {
              className: "img-wrapper"
            }, u.default.createElement("img", {
              src: m
            }), n && u.default.createElement("span", {
              className: "vip-icon"
            }))), u.default.createElement("div", {
              style: {
                display: "flex",
                flexGrow: 1
              }
            }, u.default.createElement(v.default, {
              isShowPopBox: t,
              changeShowPopBox: function(t) {
                return e.changeShowPopBox(t)
              },
              PopBoxContent: w.default,
              handleClick: function() {
                return e.onBtnClick()
              },
              activateClick: this.handleAvatarClick.bind(this, d.id, "click_name"),
              handleMaevent: this.handleMaevent.bind(this, d.id, "click_name")
            }, u.default.createElement("div", {
              className: "avatar-desc"
            }, u.default.createElement("p", {
              className: "avatar-name"
            }, d.screen_name), u.default.createElement("div", {
              style: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }
            }, y, x))))))
          }
        }]), t
      }(u.default.Component);
    g.propTypes = {
      data: s.default.object,
      GTMValue: s.default.object,
      isShowArticleEvaluted: s.default.bool,
      containStyle: s.default.string
    }, a.default = g
  };
  o.fM8Yx_5U = function(e, t, n, i, o) {
    ! function(e, n) {
      "function" == typeof define && define.amd ? define(n) : t.exports = n()
    }(0, function() {
      return function(e, t, n, i) {
        var o = {
          features: null,
          bind: function(e, t, n, i) {
            var o = (i ? "remove" : "add") + "EventListener";
            t = t.split(" ");
            for (var a = 0; a < t.length; a++) t[a] && e[o](t[a], n, !1)
          },
          isArray: function(e) {
            return e instanceof Array
          },
          createEl: function(e, t) {
            var n = document.createElement(t || "div");
            return e && (n.className = e), n
          },
          getScrollY: function() {
            var e = window.pageYOffset;
            return void 0 !== e ? e : document.documentElement.scrollTop
          },
          unbind: function(e, t, n) {
            o.bind(e, t, n, !0)
          },
          removeClass: function(e, t) {
            var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
            e.className = e.className.replace(n, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
          },
          addClass: function(e, t) {
            o.hasClass(e, t) || (e.className += (e.className ? " " : "") + t)
          },
          hasClass: function(e, t) {
            return e.className && new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className)
          },
          getChildByClass: function(e, t) {
            for (var n = e.firstChild; n;) {
              if (o.hasClass(n, t)) return n;
              n = n.nextSibling
            }
          },
          arraySearch: function(e, t, n) {
            for (var i = e.length; i--;)
              if (e[i][n] === t) return i;
            return -1
          },
          extend: function(e, t, n) {
            for (var i in t)
              if (t.hasOwnProperty(i)) {
                if (n && e.hasOwnProperty(i)) continue;
                e[i] = t[i]
              }
          },
          easing: {
            sine: {
              out: function(e) {
                return Math.sin(e * (Math.PI / 2))
              },
              inOut: function(e) {
                return -(Math.cos(Math.PI * e) - 1) / 2
              }
            },
            cubic: {
              out: function(e) {
                return --e * e * e + 1
              }
            }
          },
          detectFeatures: function() {
            if (o.features) return o.features;
            var e = o.createEl().style,
              t = "",
              n = {};
            if (n.oldIE = document.all && !document.addEventListener, n.touch = "ontouchstart" in window,
              window.requestAnimationFrame && (n.raf = window.requestAnimationFrame, n.caf = window.cancelAnimationFrame),
              n.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !n.pointerEvent) {
              var i = navigator.userAgent;
              if (/iP(hone|od)/.test(navigator.platform)) {
                var a = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                a && a.length > 0 && (a = parseInt(a[1], 10)) >= 1 && a < 8 && (n.isOldIOSPhone = !0)
              }
              var r = i.match(/Android\s([0-9\.]*)/),
                l = r ? r[1] : 0;
              (l = parseFloat(l)) >= 1 && (l < 4.4 && (n.isOldAndroid = !0), n.androidVersion = l), n.isMobileOpera =
                /opera mini|opera mobi/i.test(i)
            }
            for (var s, u, c = ["transform", "perspective", "animationName"], d = ["", "webkit", "Moz",
                "ms", "O"
              ], p = 0; p < 4; p++) {
              t = d[p];
              for (var m = 0; m < 3; m++) s = c[m], u = t + (t ? s.charAt(0).toUpperCase() + s.slice(1) :
                s), !n[s] && u in e && (n[s] = u);
              t && !n.raf && (t = t.toLowerCase(), n.raf = window[t + "RequestAnimationFrame"], n.raf &&
                (n.caf = window[t + "CancelAnimationFrame"] || window[t + "CancelRequestAnimationFrame"])
              )
            }
            if (!n.raf) {
              var f = 0;
              n.raf = function(e) {
                var t = (new Date).getTime(),
                  n = Math.max(0, 16 - (t - f)),
                  i = window.setTimeout(function() {
                    e(t + n)
                  }, n);
                return f = t + n, i
              }, n.caf = function(e) {
                clearTimeout(e)
              }
            }
            return n.svg = !!document.createElementNS && !!document.createElementNS(
              "http://www.w3.org/2000/svg", "svg").createSVGRect, o.features = n, n
          }
        };
        o.detectFeatures(), o.features.oldIE && (o.bind = function(e, t, n, i) {
          t = t.split(" ");
          for (var o, a = (i ? "detach" : "attach") + "Event", r = function() {
              n.handleEvent.call(n)
            }, l = 0; l < t.length; l++)
            if (o = t[l])
              if ("object" == typeof n && n.handleEvent) {
                if (i) {
                  if (!n["oldIE" + o]) return !1
                } else n["oldIE" + o] = r;
                e[a]("on" + o, n["oldIE" + o])
              } else e[a]("on" + o, n)
        });
        var a = this,
          r = {
            allowPanToNext: !0,
            spacing: .12,
            bgOpacity: 1,
            mouseUsed: !1,
            loop: !0,
            pinchToClose: !0,
            closeOnScroll: !0,
            closeOnVerticalDrag: !0,
            verticalDragRange: .75,
            hideAnimationDuration: 333,
            showAnimationDuration: 333,
            showHideOpacity: !1,
            focus: !0,
            escKey: !0,
            arrowKeys: !0,
            mainScrollEndFriction: .35,
            panEndFriction: .35,
            isClickableElement: function(e) {
              return "A" === e.tagName
            },
            getDoubleTapZoom: function(e, t) {
              return e ? 1 : t.initialZoomLevel < .7 ? 1 : 1.33
            },
            maxSpreadZoom: 1.33,
            modal: !0,
            scaleMode: "fit"
          };
        o.extend(r, i);
        var l, s, u, c, d, p, m, f, h, y, x, v, g, w, b, I, C, D, T, M, S, A, E, O, k, R, Z, P, F, L, _, z, N,
          U, Y, H, W, B, G, X, V, K, q, $, j, J, Q, ee, te, ne, ie, oe, ae, re, le, se, ue, ce = {
            x: 0,
            y: 0
          },
          de = {
            x: 0,
            y: 0
          },
          pe = {
            x: 0,
            y: 0
          },
          me = {},
          fe = 0,
          he = {},
          ye = {
            x: 0,
            y: 0
          },
          xe = 0,
          ve = !0,
          ge = [],
          we = {},
          be = !1,
          Ie = function(e, t) {
            o.extend(a, t.publicMethods), ge.push(e)
          },
          Ce = function(e) {
            var t = Ht();
            return e > t - 1 ? e - t : e < 0 ? t + e : e
          },
          De = {},
          Te = function(e, t) {
            return De[e] || (De[e] = []), De[e].push(t)
          },
          Me = function(e) {
            var t = De[e];
            if (t) {
              var n = Array.prototype.slice.call(arguments);
              n.shift();
              for (var i = 0; i < t.length; i++) t[i].apply(a, n)
            }
          },
          Se = function() {
            return (new Date).getTime()
          },
          Ae = function(e) {
            le = e, a.bg.style.opacity = e * r.bgOpacity
          },
          Ee = function(e, t, n, i, o) {
            (!be || o && o !== a.currItem) && (i /= o ? o.fitRatio : a.currItem.fitRatio), e[A] = v + t +
              "px, " + n + "px" + g + " scale(" + i + ")"
          },
          Oe = function(e) {
            ne && (e && (y > a.currItem.fitRatio ? be || (Jt(a.currItem, !1, !0), be = !0) : be && (Jt(a.currItem),
              be = !1)), Ee(ne, pe.x, pe.y, y))
          },
          ke = function(e) {
            e.container && Ee(e.container.style, e.initialPosition.x, e.initialPosition.y, e.initialZoomLevel,
              e)
          },
          Re = function(e, t) {
            t[A] = v + e + "px, 0px" + g
          },
          Ze = function(e, t) {
            if (!r.loop && t) {
              var n = c + (ye.x * fe - e) / ye.x,
                i = Math.round(e - dt.x);
              (n < 0 && i > 0 || n >= Ht() - 1 && i < 0) && (e = dt.x + i * r.mainScrollEndFriction)
            }
            dt.x = e, Re(e, d)
          },
          Pe = function(e, t) {
            var n = pt[e] - he[e];
            return de[e] + ce[e] + n - n * (t / x)
          },
          Fe = function(e, t) {
            e.x = t.x, e.y = t.y, t.id && (e.id = t.id)
          },
          Le = function(e) {
            e.x = Math.round(e.x), e.y = Math.round(e.y)
          },
          _e = null,
          ze = function() {
            _e && (o.unbind(document, "mousemove", ze), o.addClass(e, "pswp--has_mouse"), r.mouseUsed = !0,
              Me("mouseUsed")), _e = setTimeout(function() {
              _e = null
            }, 100)
          },
          Ne = function(e, t) {
            var n = Kt(a.currItem, me, e);
            return t && (te = n), n
          },
          Ue = function(e) {
            return e || (e = a.currItem), e.initialZoomLevel
          },
          Ye = function(e) {
            return e || (e = a.currItem), e.w > 0 ? r.maxSpreadZoom : 1
          },
          He = function(e, t, n, i) {
            return i === a.currItem.initialZoomLevel ? (n[e] = a.currItem.initialPosition[e], !0) : (n[e] =
              Pe(e, i), n[e] > t.min[e] ? (n[e] = t.min[e], !0) : n[e] < t.max[e] && (n[e] = t.max[e], !0))
          },
          We = function(e) {
            var t = "";
            r.escKey && 27 === e.keyCode ? t = "close" : r.arrowKeys && (37 === e.keyCode ? t = "prev" : 39 ===
              e.keyCode && (t = "next")), t && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || (e.preventDefault ?
              e.preventDefault() : e.returnValue = !1, a[t]()))
          },
          Be = function(e) {
            e && (K || V || ie || W) && (e.preventDefault(), e.stopPropagation())
          },
          Ge = function() {
            a.setScrollOffset(0, o.getScrollY())
          },
          Xe = {},
          Ve = 0,
          Ke = function(e) {
            Xe[e] && (Xe[e].raf && R(Xe[e].raf), Ve--, delete Xe[e])
          },
          qe = function(e) {
            Xe[e] && Ke(e), Xe[e] || (Ve++, Xe[e] = {})
          },
          $e = function() {
            for (var e in Xe) Xe.hasOwnProperty(e) && Ke(e)
          },
          je = function(e, t, n, i, o, a, r) {
            var l, s = Se();
            qe(e);
            var u = function() {
              if (Xe[e]) {
                if ((l = Se() - s) >= i) return Ke(e), a(n), void(r && r());
                a((n - t) * o(l / i) + t), Xe[e].raf = k(u)
              }
            };
            u()
          },
          Je = {
            shout: Me,
            listen: Te,
            viewportSize: me,
            options: r,
            isMainScrollAnimating: function() {
              return ie
            },
            getZoomLevel: function() {
              return y
            },
            getCurrentIndex: function() {
              return c
            },
            isDragging: function() {
              return G
            },
            isZooming: function() {
              return J
            },
            setScrollOffset: function(e, t) {
              he.x = e, L = he.y = t, Me("updateScrollOffset", he)
            },
            applyZoomPan: function(e, t, n, i) {
              pe.x = t, pe.y = n, y = e, Oe(i)
            },
            init: function() {
              if (!l && !s) {
                var n;
                a.framework = o, a.template = e, a.bg = o.getChildByClass(e, "pswp__bg"), Z = e.className,
                  l = !0, _ = o.detectFeatures(), k = _.raf, R = _.caf, A = _.transform, F = _.oldIE, a.scrollWrap =
                  o.getChildByClass(e, "pswp__scroll-wrap"), a.container = o.getChildByClass(a.scrollWrap,
                    "pswp__container"), d = a.container.style, a.itemHolders = I = [{
                    el: a.container.children[0],
                    wrap: 0,
                    index: -1
                  }, {
                    el: a.container.children[1],
                    wrap: 0,
                    index: -1
                  }, {
                    el: a.container.children[2],
                    wrap: 0,
                    index: -1
                  }], I[0].el.style.display = I[2].el.style.display = "none",
                  function() {
                    if (A) {
                      var t = _.perspective && !O;
                      return v = "translate" + (t ? "3d(" : "("), void(g = _.perspective ? ", 0px)" : ")")
                    }
                    A = "left", o.addClass(e, "pswp--ie"), Re = function(e, t) {
                      t.left = e + "px"
                    }, ke = function(e) {
                      var t = e.fitRatio > 1 ? 1 : e.fitRatio,
                        n = e.container.style,
                        i = t * e.w,
                        o = t * e.h;
                      n.width = i + "px", n.height = o + "px", n.left = e.initialPosition.x + "px", n.top =
                        e.initialPosition.y + "px"
                    }, Oe = function() {
                      if (ne) {
                        var e = ne,
                          t = a.currItem,
                          n = t.fitRatio > 1 ? 1 : t.fitRatio,
                          i = n * t.w,
                          o = n * t.h;
                        e.width = i + "px", e.height = o + "px", e.left = pe.x + "px", e.top = pe.y +
                          "px"
                      }
                    }
                  }(), h = {
                    resize: a.updateSize,
                    orientationchange: function() {
                      clearTimeout(z), z = setTimeout(function() {
                        me.x !== a.scrollWrap.clientWidth && a.updateSize()
                      }, 500)
                    },
                    scroll: Ge,
                    keydown: We,
                    click: Be
                  };
                var i = _.isOldIOSPhone || _.isOldAndroid || _.isMobileOpera;
                for (_.animationName && _.transform && !i || (r.showAnimationDuration = r.hideAnimationDuration =
                    0), n = 0; n < ge.length; n++) a["init" + ge[n]]();
                t && (a.ui = new t(a, o)).init(), Me("firstUpdate"), c = c || r.index || 0, (isNaN(c) || c <
                    0 || c >= Ht()) && (c = 0), a.currItem = Yt(c), (_.isOldIOSPhone || _.isOldAndroid) &&
                  (ve = !1), e.setAttribute("aria-hidden", "false"), r.modal && (ve ? e.style.position =
                    "fixed" : (e.style.position = "absolute", e.style.top = o.getScrollY() + "px")), void 0 ===
                  L && (Me("initialLayout"), L = P = o.getScrollY());
                var u = "pswp--open ";
                for (r.mainClass && (u += r.mainClass + " "), r.showHideOpacity && (u +=
                    "pswp--animate_opacity "), u += O ? "pswp--touch" : "pswp--notouch", u += _.animationName ?
                  " pswp--css_animation" : "", u += _.svg ? " pswp--svg" : "", o.addClass(e, u), a.updateSize(),
                  p = -1, xe = null, n = 0; n < 3; n++) Re((n + p) * ye.x, I[n].el.style);
                F || o.bind(a.scrollWrap, f, a), Te("initialZoomInEnd", function() {
                  a.setContent(I[0], c - 1), a.setContent(I[2], c + 1), I[0].el.style.display = I[2].el
                    .style.display = "block", r.focus && e.focus(), o.bind(document, "keydown", a), _.transform &&
                    o.bind(a.scrollWrap, "click", a), r.mouseUsed || o.bind(document, "mousemove", ze),
                    o.bind(window, "resize scroll orientationchange", a), Me("bindEvents")
                }), a.setContent(I[1], c), a.updateCurrItem(), Me("afterInit"), ve || (w = setInterval(
                  function() {
                    Ve || G || J || y !== a.currItem.initialZoomLevel || a.updateSize()
                  }, 1e3)), o.addClass(e, "pswp--visible")
              }
            },
            close: function() {
              l && (l = !1, s = !0, Me("close"), o.unbind(window, "resize scroll orientationchange", a), o.unbind(
                window, "scroll", h.scroll), o.unbind(document, "keydown", a), o.unbind(document,
                "mousemove", ze), _.transform && o.unbind(a.scrollWrap, "click", a), G && o.unbind(
                window, m, a), clearTimeout(z), Me("unbindEvents"), Bt(a.currItem, null, !0, a.destroy))
            },
            destroy: function() {
              Me("destroy"), _t && clearTimeout(_t), e.setAttribute("aria-hidden", "true"), e.className = Z,
                w && clearInterval(w), o.unbind(a.scrollWrap, f, a), o.unbind(window, "scroll", a), ht(),
                $e(), De = null
            },
            panTo: function(e, t, n) {
              n || (e > te.min.x ? e = te.min.x : e < te.max.x && (e = te.max.x), t > te.min.y ? t = te.min
                .y : t < te.max.y && (t = te.max.y)), pe.x = e, pe.y = t, Oe()
            },
            handleEvent: function(e) {
              e = e || window.event, h[e.type] && h[e.type](e)
            },
            goTo: function(e) {
              var t = (e = Ce(e)) - c;
              xe = t, c = e, a.currItem = Yt(c), fe -= t, Ze(ye.x * fe), $e(), ie = !1, a.updateCurrItem()
            },
            next: function() {
              a.goTo(c + 1)
            },
            prev: function() {
              a.goTo(c - 1)
            },
            updateCurrZoomItem: function(e) {
              if (e && Me("beforeChange", 0), I[1].el.children.length) {
                var t = I[1].el.children[0];
                ne = o.hasClass(t, "pswp__zoom-wrap") ? t.style : null
              } else ne = null;
              te = a.currItem.bounds, x = y = a.currItem.initialZoomLevel, pe.x = te.center.x, pe.y = te.center
                .y, e && Me("afterChange")
            },
            invalidateCurrItems: function() {
              b = !0;
              for (var e = 0; e < 3; e++) I[e].item && (I[e].item.needsUpdate = !0)
            },
            updateCurrItem: function(e) {
              if (0 !== xe) {
                var t, n = Math.abs(xe);
                if (!(e && n < 2)) {
                  a.currItem = Yt(c), be = !1, Me("beforeChange", xe), n >= 3 && (p += xe + (xe > 0 ? -3 :
                    3), n = 3);
                  for (var i = 0; i < n; i++) xe > 0 ? (t = I.shift(), I[2] = t, Re((++p + 2) * ye.x, t.el.style),
                    a.setContent(t, c - n + i + 1 + 1)) : (t = I.pop(), I.unshift(t), Re(--p * ye.x, t.el
                    .style), a.setContent(t, c + n - i - 1 - 1));
                  if (ne && 1 === Math.abs(xe)) {
                    var o = Yt(C);
                    o.initialZoomLevel !== y && (Kt(o, me), Jt(o), ke(o))
                  }
                  xe = 0, a.updateCurrZoomItem(), C = c, Me("afterChange")
                }
              }
            },
            updateSize: function(t) {
              if (!ve && r.modal) {
                var n = o.getScrollY();
                if (L !== n && (e.style.top = n + "px", L = n), !t && we.x === window.innerWidth && we.y ===
                  window.innerHeight) return;
                we.x = window.innerWidth, we.y = window.innerHeight, e.style.height = we.y + "px"
              }
              if (me.x = a.scrollWrap.clientWidth, me.y = a.scrollWrap.clientHeight, Ge(), ye.x = me.x +
                Math.round(me.x * r.spacing), ye.y = me.y, Ze(ye.x * fe), Me("beforeResize"), void 0 !== p) {
                for (var i, l, s, u = 0; u < 3; u++) i = I[u], Re((u + p) * ye.x, i.el.style), s = c + u -
                  1, r.loop && Ht() > 2 && (s = Ce(s)), (l = Yt(s)) && (b || l.needsUpdate || !l.bounds) ?
                  (a.cleanSlide(l), a.setContent(i, s), 1 === u && (a.currItem = l, a.updateCurrZoomItem(!0)),
                    l.needsUpdate = !1) : -1 === i.index && s >= 0 && a.setContent(i, s), l && l.container &&
                  (Kt(l, me), Jt(l), ke(l));
                b = !1
              }
              x = y = a.currItem.initialZoomLevel, (te = a.currItem.bounds) && (pe.x = te.center.x, pe.y =
                te.center.y, Oe(!0)), Me("resize")
            },
            zoomTo: function(e, t, n, i, a) {
              t && (x = y, pt.x = Math.abs(t.x) - pe.x, pt.y = Math.abs(t.y) - pe.y, Fe(de, pe));
              var r = Ne(e, !1),
                l = {};
              He("x", r, l, e), He("y", r, l, e);
              var s = y,
                u = {
                  x: pe.x,
                  y: pe.y
                };
              Le(l);
              var c = function(t) {
                1 === t ? (y = e, pe.x = l.x, pe.y = l.y) : (y = (e - s) * t + s, pe.x = (l.x - u.x) * t +
                  u.x, pe.y = (l.y - u.y) * t + u.y), a && a(t), Oe(1 === t)
              };
              n ? je("customZoomTo", 0, 1, n, i || o.easing.sine.inOut, c) : c(1)
            }
          },
          Qe = {},
          et = {},
          tt = {},
          nt = {},
          it = {},
          ot = [],
          at = {},
          rt = [],
          lt = {},
          st = 0,
          ut = {
            x: 0,
            y: 0
          },
          ct = 0,
          dt = {
            x: 0,
            y: 0
          },
          pt = {
            x: 0,
            y: 0
          },
          mt = {
            x: 0,
            y: 0
          },
          ft = function(e, t) {
            return lt.x = Math.abs(e.x - t.x), lt.y = Math.abs(e.y - t.y), Math.sqrt(lt.x * lt.x + lt.y * lt.y)
          },
          ht = function() {
            q && (R(q), q = null)
          },
          yt = function() {
            G && (q = k(yt), Ot())
          },
          xt = function(e, t) {
            return !(!e || e === document) && !(e.getAttribute("class") && e.getAttribute("class").indexOf(
              "pswp__scroll-wrap") > -1) && (t(e) ? e : xt(e.parentNode, t))
          },
          vt = {},
          gt = function(e, t) {
            return vt.prevent = !xt(e.target, r.isClickableElement), Me("preventDragEvent", e, t, vt), vt.prevent
          },
          wt = function(e, t) {
            return t.x = e.pageX, t.y = e.pageY, t.id = e.identifier, t
          },
          bt = function(e, t, n) {
            n.x = .5 * (e.x + t.x), n.y = .5 * (e.y + t.y)
          },
          It = function() {
            var e = pe.y - a.currItem.initialPosition.y;
            return 1 - Math.abs(e / (me.y / 2))
          },
          Ct = {},
          Dt = {},
          Tt = [],
          Mt = function(e) {
            for (; Tt.length > 0;) Tt.pop();
            return E ? (ue = 0, ot.forEach(function(e) {
              0 === ue ? Tt[0] = e : 1 === ue && (Tt[1] = e), ue++
            })) : e.type.indexOf("touch") > -1 ? e.touches && e.touches.length > 0 && (Tt[0] = wt(e.touches[
              0], Ct), e.touches.length > 1 && (Tt[1] = wt(e.touches[1], Dt))) : (Ct.x = e.pageX, Ct.y = e.pageY,
              Ct.id = "", Tt[0] = Ct), Tt
          },
          St = function(e, t) {
            var n, i, o, l, s = pe[e] + t[e],
              u = t[e] > 0,
              c = dt.x + t.x,
              d = dt.x - at.x;
            if (n = s > te.min[e] || s < te.max[e] ? r.panEndFriction : 1, s = pe[e] + t[e] * n, (r.allowPanToNext ||
                y === a.currItem.initialZoomLevel) && (ne ? "h" !== oe || "x" !== e || V || (u ? (s > te.min[
                    e] && (n = r.panEndFriction, te.min[e], i = te.min[e] - de[e]), (i <= 0 || d < 0) && Ht() >
                  1 ? (l = c, d < 0 && c > at.x && (l = at.x)) : te.min.x !== te.max.x && (o = s)) : (s <
                  te.max[e] && (n = r.panEndFriction, te.max[e], i = de[e] - te.max[e]), (i <= 0 || d > 0) &&
                  Ht() > 1 ? (l = c, d > 0 && c < at.x && (l = at.x)) : te.min.x !== te.max.x && (o = s))) :
                l = c, "x" === e)) return void 0 !== l && (Ze(l, !0), $ = l !== at.x), te.min.x !== te.max.x &&
              (void 0 !== o ? pe.x = o : $ || (pe.x += t.x * n)), void 0 !== l;
            ie || $ || y > a.currItem.fitRatio && (pe[e] += t[e] * n)
          },
          At = function(e) {
            if (!("mousedown" === e.type && e.button > 0))
              if (Ut) e.preventDefault();
              else if (!B || "mousedown" !== e.type) {
              if (gt(e, !0) && e.preventDefault(), Me("pointerDown"), E) {
                var t = o.arraySearch(ot, e.pointerId, "id");
                t < 0 && (t = ot.length), ot[t] = {
                  x: e.pageX,
                  y: e.pageY,
                  id: e.pointerId
                }
              }
              var n = Mt(e),
                i = n.length;
              j = null, $e(), G && 1 !== i || (G = ae = !0, o.bind(window, m, a), H = se = re = W = $ = K = X =
                V = !1, oe = null, Me("firstTouchStart", n), Fe(de, pe), ce.x = ce.y = 0, Fe(nt, n[0]), Fe(
                  it, nt), at.x = ye.x * fe, rt = [{
                  x: nt.x,
                  y: nt.y
                }], U = N = Se(), Ne(y, !0), ht(), yt()), !J && i > 1 && !ie && !$ && (x = y, V = !1, J = X = !
                0, ce.y = ce.x = 0, Fe(de, pe), Fe(Qe, n[0]), Fe(et, n[1]), bt(Qe, et, mt), pt.x = Math.abs(
                  mt.x) - pe.x, pt.y = Math.abs(mt.y) - pe.y, Q = ee = ft(Qe, et))
            }
          },
          Et = function(e) {
            if (e.preventDefault(), E) {
              var t = o.arraySearch(ot, e.pointerId, "id");
              if (t > -1) {
                var n = ot[t];
                n.x = e.pageX, n.y = e.pageY
              }
            }
            if (G) {
              var i = Mt(e);
              if (oe || K || J) j = i;
              else if (dt.x !== ye.x * fe) oe = "h";
              else {
                var a = Math.abs(i[0].x - nt.x) - Math.abs(i[0].y - nt.y);
                Math.abs(a) >= 10 && (oe = a > 0 ? "h" : "v", j = i)
              }
            }
          },
          Ot = function() {
            if (j) {
              var e = j.length;
              if (0 !== e)
                if (Fe(Qe, j[0]), tt.x = Qe.x - nt.x, tt.y = Qe.y - nt.y, J && e > 1) {
                  if (nt.x = Qe.x, nt.y = Qe.y, !tt.x && !tt.y && function(e, t) {
                      return e.x === t.x && e.y === t.y
                    }(j[1], et)) return;
                  Fe(et, j[1]), V || (V = !0, Me("zoomGestureStarted"));
                  var t = ft(Qe, et),
                    n = Ft(t);
                  n > a.currItem.initialZoomLevel + a.currItem.initialZoomLevel / 15 && (se = !0);
                  var i = 1,
                    o = Ue(),
                    l = Ye();
                  if (n < o)
                    if (r.pinchToClose && !se && x <= a.currItem.initialZoomLevel) {
                      var s = 1 - (o - n) / (o / 1.2);
                      Ae(s), Me("onPinchClose", s), re = !0
                    } else(i = (o - n) / o) > 1 && (i = 1), n = o - i * (o / 3);
                  else n > l && ((i = (n - l) / (6 * o)) > 1 && (i = 1), n = l + i * o);
                  i < 0 && (i = 0), Q = t, bt(Qe, et, ut), ce.x += ut.x - mt.x, ce.y += ut.y - mt.y, Fe(mt,
                    ut), pe.x = Pe("x", n), pe.y = Pe("y", n), H = n > y, y = n, Oe()
                } else {
                  if (!oe) return;
                  if (ae && (ae = !1, Math.abs(tt.x) >= 10 && (tt.x -= j[0].x - it.x), Math.abs(tt.y) >= 10 &&
                      (tt.y -= j[0].y - it.y)), nt.x = Qe.x, nt.y = Qe.y, 0 === tt.x && 0 === tt.y) return;
                  if ("v" === oe && r.closeOnVerticalDrag && "fit" === r.scaleMode && y === a.currItem.initialZoomLevel) {
                    ce.y += tt.y, pe.y += tt.y;
                    var u = It();
                    return W = !0, Me("onVerticalDrag", u), Ae(u), void Oe()
                  }! function(e, t, n) {
                    if (e - U > 50) {
                      var i = rt.length > 2 ? rt.shift() : {};
                      i.x = t, i.y = n, rt.push(i), U = e
                    }
                  }(Se(), Qe.x, Qe.y), K = !0, te = a.currItem.bounds, St("x", tt) || (St("y", tt), Le(pe),
                    Oe())
                }
            }
          },
          kt = function(e) {
            if (_.isOldAndroid) {
              if (B && "mouseup" === e.type) return;
              e.type.indexOf("touch") > -1 && (clearTimeout(B), B = setTimeout(function() {
                B = 0
              }, 600))
            }
            Me("pointerUp"), gt(e, !1) && e.preventDefault();
            var t;
            if (E) {
              var n = o.arraySearch(ot, e.pointerId, "id");
              n > -1 && (t = ot.splice(n, 1)[0], navigator.pointerEnabled ? t.type = e.pointerType || "mouse" :
                (t.type = {
                  4: "mouse",
                  2: "touch",
                  3: "pen"
                } [e.pointerType], t.type || (t.type = e.pointerType || "mouse")))
            }
            var i, l = Mt(e),
              s = l.length;
            if ("mouseup" === e.type && (s = 0), 2 === s) return j = null, !0;
            1 === s && Fe(it, l[0]), 0 !== s || oe || ie || (t || ("mouseup" === e.type ? t = {
              x: e.pageX,
              y: e.pageY,
              type: "mouse"
            } : e.changedTouches && e.changedTouches[0] && (t = {
              x: e.changedTouches[0].pageX,
              y: e.changedTouches[0].pageY,
              type: "touch"
            })), Me("touchRelease", e, t));
            var u = -1;
            if (0 === s && (G = !1, o.unbind(window, m, a), ht(), J ? u = 0 : -1 !== ct && (u = Se() - ct)),
              ct = 1 === s ? Se() : -1, i = -1 !== u && u < 150 ? "zoom" : "swipe", J && s < 2 && (J = !1, 1 ===
                s && (i = "zoomPointerUp"), Me("zoomGestureEnded")), j = null, K || V || ie || W)
              if ($e(), Y || (Y = Rt()), Y.calculateSwipeSpeed("x"), W)
                if (It() < r.verticalDragRange) a.close();
                else {
                  var c = pe.y,
                    d = le;
                  je("verticalDrag", 0, 1, 300, o.easing.cubic.out, function(e) {
                    pe.y = (a.currItem.initialPosition.y - c) * e + c, Ae((1 - d) * e + d), Oe()
                  }), Me("onVerticalDrag", 1)
                }
            else {
              if (($ || ie) && 0 === s) {
                if (Pt(i, Y)) return;
                i = "zoomPointerUp"
              }
              ie || ("swipe" === i ? !$ && y > a.currItem.fitRatio && Zt(Y) : Lt())
            }
          },
          Rt = function() {
            var e, t, n = {
              lastFlickOffset: {},
              lastFlickDist: {},
              lastFlickSpeed: {},
              slowDownRatio: {},
              slowDownRatioReverse: {},
              speedDecelerationRatio: {},
              speedDecelerationRatioAbs: {},
              distanceOffset: {},
              backAnimDestination: {},
              backAnimStarted: {},
              calculateSwipeSpeed: function(i) {
                rt.length > 1 ? (e = Se() - U + 50, t = rt[rt.length - 2][i]) : (e = Se() - N, t = it[i]),
                  n.lastFlickOffset[i] = nt[i] - t, n.lastFlickDist[i] = Math.abs(n.lastFlickOffset[i]),
                  n.lastFlickDist[i] > 20 ? n.lastFlickSpeed[i] = n.lastFlickOffset[i] / e : n.lastFlickSpeed[
                    i] = 0, Math.abs(n.lastFlickSpeed[i]) < .1 && (n.lastFlickSpeed[i] = 0), n.slowDownRatio[
                    i] = .95, n.slowDownRatioReverse[i] = 1 - n.slowDownRatio[i], n.speedDecelerationRatio[
                    i] = 1
              },
              calculateOverBoundsAnimOffset: function(e, t) {
                n.backAnimStarted[e] || (pe[e] > te.min[e] ? n.backAnimDestination[e] = te.min[e] : pe[e] <
                  te.max[e] && (n.backAnimDestination[e] = te.max[e]), void 0 !== n.backAnimDestination[
                    e] && (n.slowDownRatio[e] = .7, n.slowDownRatioReverse[e] = 1 - n.slowDownRatio[e],
                    n.speedDecelerationRatioAbs[e] < .05 && (n.lastFlickSpeed[e] = 0, n.backAnimStarted[
                      e] = !0, je("bounceZoomPan" + e, pe[e], n.backAnimDestination[e], t || 300, o.easing
                      .sine.out,
                      function(t) {
                        pe[e] = t, Oe()
                      }))))
              },
              calculateAnimOffset: function(e) {
                n.backAnimStarted[e] || (n.speedDecelerationRatio[e] = n.speedDecelerationRatio[e] * (n.slowDownRatio[
                  e] + n.slowDownRatioReverse[e] - n.slowDownRatioReverse[e] * n.timeDiff / 10), n.speedDecelerationRatioAbs[
                  e] = Math.abs(n.lastFlickSpeed[e] * n.speedDecelerationRatio[e]), n.distanceOffset[
                  e] = n.lastFlickSpeed[e] * n.speedDecelerationRatio[e] * n.timeDiff, pe[e] += n.distanceOffset[
                  e])
              },
              panAnimLoop: function() {
                if (Xe.zoomPan && (Xe.zoomPan.raf = k(n.panAnimLoop), n.now = Se(), n.timeDiff = n.now -
                    n.lastNow, n.lastNow = n.now, n.calculateAnimOffset("x"), n.calculateAnimOffset("y"),
                    Oe(), n.calculateOverBoundsAnimOffset("x"), n.calculateOverBoundsAnimOffset("y"), n.speedDecelerationRatioAbs
                    .x < .05 && n.speedDecelerationRatioAbs.y < .05)) return pe.x = Math.round(pe.x), pe.y =
                  Math.round(pe.y), Oe(), void Ke("zoomPan")
              }
            };
            return n
          },
          Zt = function(e) {
            if (e.calculateSwipeSpeed("y"), te = a.currItem.bounds, e.backAnimDestination = {}, e.backAnimStarted = {},
              Math.abs(e.lastFlickSpeed.x) <= .05 && Math.abs(e.lastFlickSpeed.y) <= .05) return e.speedDecelerationRatioAbs
              .x = e.speedDecelerationRatioAbs.y = 0, e.calculateOverBoundsAnimOffset("x"), e.calculateOverBoundsAnimOffset(
                "y"), !0;
            qe("zoomPan"), e.lastNow = Se(), e.panAnimLoop()
          },
          Pt = function(e, t) {
            var n;
            ie || (st = c);
            var i;
            if ("swipe" === e) {
              var l = nt.x - it.x,
                s = t.lastFlickDist.x < 10;
              l > 30 && (s || t.lastFlickOffset.x > 20) ? i = -1 : l < -30 && (s || t.lastFlickOffset.x < -20) &&
                (i = 1)
            }
            var u;
            i && ((c += i) < 0 ? (c = r.loop ? Ht() - 1 : 0, u = !0) : c >= Ht() && (c = r.loop ? 0 : Ht() -
              1, u = !0), u && !r.loop || (xe += i, fe -= i, n = !0));
            var d, p = ye.x * fe,
              m = Math.abs(p - dt.x);
            return n || p > dt.x == t.lastFlickSpeed.x > 0 ? (d = Math.abs(t.lastFlickSpeed.x) > 0 ? m / Math
                .abs(t.lastFlickSpeed.x) : 333, d = Math.min(d, 400), d = Math.max(d, 250)) : d = 333, st ===
              c && (n = !1), ie = !0, Me("mainScrollAnimStart"), je("mainScroll", dt.x, p, d, o.easing.cubic.out,
                Ze,
                function() {
                  $e(), ie = !1, st = -1, (n || st !== c) && a.updateCurrItem(), Me("mainScrollAnimComplete")
                }), n && a.updateCurrItem(!0), n
          },
          Ft = function(e) {
            return 1 / ee * e * x
          },
          Lt = function() {
            var e = y,
              t = Ue(),
              n = Ye();
            y < t ? e = t : y > n && (e = n);
            var i, r = le;
            return re && !H && !se && y < t ? (a.close(), !0) : (re && (i = function(e) {
              Ae((1 - r) * e + r)
            }), a.zoomTo(e, 0, 200, o.easing.cubic.out, i), !0)
          };
        Ie("Gestures", {
          publicMethods: {
            initGestures: function() {
              var e = function(e, t, n, i, o) {
                D = e + t, T = e + n, M = e + i, S = o ? e + o : ""
              };
              (E = _.pointerEvent) && _.touch && (_.touch = !1), E ? navigator.pointerEnabled ? e(
                  "pointer", "down", "move", "up", "cancel") : e("MSPointer", "Down", "Move", "Up",
                  "Cancel") : _.touch ? (e("touch", "start", "move", "end", "cancel"), O = !0) : e(
                  "mouse", "down", "move", "up"), m = T + " " + M + " " + S, f = D, E && !O && (O =
                  navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1), a.likelyTouchDevice =
                O, h[D] = At, h[T] = Et, h[M] = kt, S && (h[S] = h[M]), _.touch && (f += " mousedown",
                  m += " mousemove mouseup", h.mousedown = h[D], h.mousemove = h[T], h.mouseup = h[M]),
                O || (r.allowPanToNext = !1)
            }
          }
        });
        var _t, zt, Nt, Ut, Yt, Ht, Wt, Bt = function(t, n, i, l) {
            _t && clearTimeout(_t), Ut = !0, Nt = !0;
            var s;
            t.initialLayout ? (s = t.initialLayout, t.initialLayout = null) : s = r.getThumbBoundsFn && r.getThumbBoundsFn(
              c);
            var d = i ? r.hideAnimationDuration : r.showAnimationDuration,
              p = function() {
                Ke("initialZoom"), i ? (a.template.removeAttribute("style"), a.bg.removeAttribute("style")) :
                  (Ae(1), n && (n.style.display = "block"), o.addClass(e, "pswp--animated-in"), Me(
                    "initialZoom" + (i ? "OutEnd" : "InEnd"))), l && l(), Ut = !1
              };
            if (!d || !s || void 0 === s.x) return Me("initialZoom" + (i ? "Out" : "In")), y = t.initialZoomLevel,
              Fe(pe, t.initialPosition), Oe(), e.style.opacity = i ? 0 : 1, Ae(1), void(d ? setTimeout(
                function() {
                  p()
                }, d) : p());
            ! function() {
              var n = u,
                l = !a.currItem.src || a.currItem.loadError || r.showHideOpacity;
              t.miniImg && (t.miniImg.style.webkitBackfaceVisibility = "hidden"), i || (y = s.w / t.w, pe.x =
                  s.x, pe.y = s.y - P, a[l ? "template" : "bg"].style.opacity = .001, Oe()), qe("initialZoom"),
                i && !n && o.removeClass(e, "pswp--animated-in"), l && (i ? o[(n ? "remove" : "add") +
                  "Class"](e, "pswp--animate_opacity") : setTimeout(function() {
                  o.addClass(e, "pswp--animate_opacity")
                }, 30)), _t = setTimeout(function() {
                  if (Me("initialZoom" + (i ? "Out" : "In")), i) {
                    var a = s.w / t.w,
                      r = {
                        x: pe.x,
                        y: pe.y
                      },
                      u = y,
                      c = le,
                      m = function(t) {
                        1 === t ? (y = a, pe.x = s.x, pe.y = s.y - L) : (y = (a - u) * t + u, pe.x = (s.x -
                            r.x) * t + r.x, pe.y = (s.y - L - r.y) * t + r.y), Oe(), l ? e.style.opacity =
                          1 - t : Ae(c - t * c)
                      };
                    n ? je("initialZoom", 0, 1, d, o.easing.cubic.out, m, p) : (m(1), _t = setTimeout(p, d +
                      20))
                  } else y = t.initialZoomLevel, Fe(pe, t.initialPosition), Oe(), Ae(1), l ? e.style.opacity =
                    1 : Ae(1), _t = setTimeout(p, d + 20)
                }, i ? 25 : 90)
            }()
          },
          Gt = {},
          Xt = [],
          Vt = {
            index: 0,
            errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
            forceProgressiveLoading: !1,
            preload: [1, 1],
            getNumItemsFn: function() {
              return zt.length
            }
          },
          Kt = function(e, t, n) {
            if (e.src && !e.loadError) {
              var i = !n;
              if (i && (e.vGap || (e.vGap = {
                  top: 0,
                  bottom: 0
                }), Me("parseVerticalMargin", e)), Gt.x = t.x, Gt.y = t.y - e.vGap.top - e.vGap.bottom, i) {
                var o = Gt.x / e.w,
                  a = Gt.y / e.h;
                e.fitRatio = o < a ? o : a;
                var l = r.scaleMode;
                "orig" === l ? n = 1 : "fit" === l && (n = e.fitRatio), n > 1 && (n = 1), e.initialZoomLevel =
                  n, e.bounds || (e.bounds = {
                    center: {
                      x: 0,
                      y: 0
                    },
                    max: {
                      x: 0,
                      y: 0
                    },
                    min: {
                      x: 0,
                      y: 0
                    }
                  })
              }
              if (!n) return;
              return function(e, t, n) {
                  var i = e.bounds;
                  i.center.x = Math.round((Gt.x - t) / 2), i.center.y = Math.round((Gt.y - n) / 2) + e.vGap.top,
                    i.max.x = t > Gt.x ? Math.round(Gt.x - t) : i.center.x, i.max.y = n > Gt.y ? Math.round(
                      Gt.y - n) + e.vGap.top : i.center.y, i.min.x = t > Gt.x ? 0 : i.center.x, i.min.y = n >
                    Gt.y ? e.vGap.top : i.center.y
                }(e, e.w * n, e.h * n), i && n === e.initialZoomLevel && (e.initialPosition = e.bounds.center),
                e.bounds
            }
            return e.w = e.h = 0, e.initialZoomLevel = e.fitRatio = 1, e.bounds = {
              center: {
                x: 0,
                y: 0
              },
              max: {
                x: 0,
                y: 0
              },
              min: {
                x: 0,
                y: 0
              }
            }, e.initialPosition = e.bounds.center, e.bounds
          },
          qt = function(e, t, n, i, o, r) {
            t.loadError || i && (t.imageAppended = !0, Jt(t, i, t === a.currItem && be), n.appendChild(i), r &&
              setTimeout(function() {
                t && t.loaded && t.placeholder && (t.placeholder.style.display = "none", t.placeholder =
                  null)
              }, 500))
          },
          $t = function(e) {
            e.loading = !0, e.loaded = !1;
            var t = e.img = o.createEl("pswp__img", "img"),
              n = function() {
                e.loading = !1, e.loaded = !0, e.loadComplete ? e.loadComplete(e) : e.img = null, t.onload =
                  t.onerror = null, t = null
              };
            return t.onload = n, t.onerror = function() {
              e.loadError = !0, n()
            }, t.src = e.src, t
          },
          jt = function(e, t) {
            if (e.src && e.loadError && e.container) return t && (e.container.innerHTML = ""), e.container.innerHTML =
              r.errorMsg.replace("%url%", e.src), !0
          },
          Jt = function(e, t, n) {
            if (e.src) {
              t || (t = e.container.lastChild);
              var i = n ? e.w : Math.round(e.w * e.fitRatio),
                o = n ? e.h : Math.round(e.h * e.fitRatio);
              e.placeholder && !e.loaded && (e.placeholder.style.width = i + "px", e.placeholder.style.height =
                o + "px"), t.style.width = i + "px", t.style.height = o + "px"
            }
          },
          Qt = function() {
            if (Xt.length) {
              for (var e, t = 0; t < Xt.length; t++)(e = Xt[t]).holder.index === e.index && qt(e.index, e.item,
                e.baseDiv, e.img, 0, e.clearPlaceholder);
              Xt = []
            }
          };
        Ie("Controller", {
          publicMethods: {
            lazyLoadItem: function(e) {
              e = Ce(e);
              var t = Yt(e);
              t && (!t.loaded && !t.loading || b) && (Me("gettingData", e, t), t.src && $t(t))
            },
            initController: function() {
              o.extend(r, Vt, !0), a.items = zt = n, Yt = a.getItemAt, Ht = r.getNumItemsFn, Wt = r.loop,
                Ht() < 3 && (r.loop = !1), Te("beforeChange", function(e) {
                  var t, n = r.preload,
                    i = null === e || e >= 0,
                    o = Math.min(n[0], Ht()),
                    l = Math.min(n[1], Ht());
                  for (t = 1; t <= (i ? l : o); t++) a.lazyLoadItem(c + t);
                  for (t = 1; t <= (i ? o : l); t++) a.lazyLoadItem(c - t)
                }), Te("initialLayout", function() {
                  a.currItem.initialLayout = r.getThumbBoundsFn && r.getThumbBoundsFn(c)
                }), Te("mainScrollAnimComplete", Qt), Te("initialZoomInEnd", Qt), Te("destroy",
                  function() {
                    for (var e, t = 0; t < zt.length; t++)(e = zt[t]).container && (e.container = null),
                      e.placeholder && (e.placeholder = null), e.img && (e.img = null), e.preloader &&
                      (e.preloader = null), e.loadError && (e.loaded = e.loadError = !1);
                    Xt = null
                  })
            },
            getItemAt: function(e) {
              return e >= 0 && void 0 !== zt[e] && zt[e]
            },
            allowProgressiveImg: function() {
              return r.forceProgressiveLoading || !O || r.mouseUsed || screen.width > 1200
            },
            setContent: function(e, t) {
              r.loop && (t = Ce(t));
              var n = a.getItemAt(e.index);
              n && (n.container = null);
              var i, s = a.getItemAt(t);
              if (s) {
                Me("gettingData", t, s), e.index = t, e.item = s;
                var u = s.container = o.createEl("pswp__zoom-wrap");
                if (!s.src && s.html && (s.html.tagName ? u.appendChild(s.html) : u.innerHTML = s.html),
                  jt(s), Kt(s, me), !s.src || s.loadError || s.loaded) s.src && !s.loadError && ((i = o
                  .createEl("pswp__img", "img")).style.opacity = 1, i.src = s.src, Jt(s, i), qt(0,
                  s, u, i));
                else {
                  if (s.loadComplete = function(n) {
                      if (l) {
                        if (e && e.index === t) {
                          if (jt(n, !0)) return n.loadComplete = n.img = null, Kt(n, me), ke(n), void(e
                            .index === c && a.updateCurrZoomItem());
                          n.imageAppended ? !Ut && n.placeholder && (n.placeholder.style.display =
                            "none", n.placeholder = null) : _.transform && (ie || Ut) ? Xt.push({
                            item: n,
                            baseDiv: u,
                            img: n.img,
                            index: t,
                            holder: e,
                            clearPlaceholder: !0
                          }) : qt(0, n, u, n.img, 0, !0)
                        }
                        n.loadComplete = null, n.img = null, Me("imageLoadComplete", t, n)
                      }
                    }, o.features.transform) {
                    var d = "pswp__img pswp__img--placeholder";
                    d += s.msrc ? "" : " pswp__img--placeholder--blank";
                    var p = o.createEl(d, s.msrc ? "img" : "");
                    s.msrc && (p.src = s.msrc), Jt(s, p), u.appendChild(p), s.placeholder = p
                  }
                  s.loading || $t(s), a.allowProgressiveImg() && (!Nt && _.transform ? Xt.push({
                    item: s,
                    baseDiv: u,
                    img: s.img,
                    index: t,
                    holder: e
                  }) : qt(0, s, u, s.img, 0, !0))
                }
                Nt || t !== c ? ke(s) : (ne = u.style, Bt(s, i || s.img)), e.el.innerHTML = "", e.el.appendChild(
                  u)
              } else e.el.innerHTML = ""
            },
            cleanSlide: function(e) {
              e.img && (e.img.onload = e.img.onerror = null), e.loaded = e.loading = e.img = e.imageAppended = !
                1
            }
          }
        });
        var en, tn = {},
          nn = function(e, t, n) {
            var i = document.createEvent("CustomEvent"),
              o = {
                origEvent: e,
                target: e.target,
                releasePoint: t,
                pointerType: n || "touch"
              };
            i.initCustomEvent("pswpTap", !0, !0, o), e.target.dispatchEvent(i)
          };
        Ie("Tap", {
          publicMethods: {
            initTap: function() {
              Te("firstTouchStart", a.onTapStart), Te("touchRelease", a.onTapRelease), Te("destroy",
                function() {
                  tn = {}, en = null
                })
            },
            onTapStart: function(e) {
              e.length > 1 && (clearTimeout(en), en = null)
            },
            onTapRelease: function(e, t) {
              if (t && !K && !X && !Ve) {
                var n = t;
                if (en && (clearTimeout(en), en = null, function(e, t) {
                    return Math.abs(e.x - t.x) < 25 && Math.abs(e.y - t.y) < 25
                  }(n, tn))) return void Me("doubleTap", n);
                if ("mouse" === t.type) return void nn(e, t, "mouse");
                if ("BUTTON" === e.target.tagName.toUpperCase() || o.hasClass(e.target,
                    "pswp__single-tap")) return void nn(e, t);
                Fe(tn, n), en = setTimeout(function() {
                  nn(e, t), en = null
                }, 300)
              }
            }
          }
        });
        var on;
        Ie("DesktopZoom", {
          publicMethods: {
            initDesktopZoom: function() {
              F || (O ? Te("mouseUsed", function() {
                a.setupDesktopZoom()
              }) : a.setupDesktopZoom(!0))
            },
            setupDesktopZoom: function(t) {
              on = {};
              var n = "wheel mousewheel DOMMouseScroll";
              Te("bindEvents", function() {
                o.bind(e, n, a.handleMouseWheel)
              }), Te("unbindEvents", function() {
                on && o.unbind(e, n, a.handleMouseWheel)
              }), a.mouseZoomedIn = !1;
              var i, r = function() {
                  a.mouseZoomedIn && (o.removeClass(e, "pswp--zoomed-in"), a.mouseZoomedIn = !1), y < 1 ?
                    o.addClass(e, "pswp--zoom-allowed") : o.removeClass(e, "pswp--zoom-allowed"), l()
                },
                l = function() {
                  i && (o.removeClass(e, "pswp--dragging"), i = !1)
                };
              Te("resize", r), Te("afterChange", r), Te("pointerDown", function() {
                a.mouseZoomedIn && (i = !0, o.addClass(e, "pswp--dragging"))
              }), Te("pointerUp", l), t || r()
            },
            handleMouseWheel: function(e) {
              if (y <= a.currItem.fitRatio) return r.modal && (!r.closeOnScroll || Ve || G ? e.preventDefault() :
                A && Math.abs(e.deltaY) > 2 && (u = !0, a.close())), !0;
              if (e.stopPropagation(), on.x = 0, "deltaX" in e) 1 === e.deltaMode ? (on.x = 18 * e.deltaX,
                on.y = 18 * e.deltaY) : (on.x = e.deltaX, on.y = e.deltaY);
              else if ("wheelDelta" in e) e.wheelDeltaX && (on.x = -.16 * e.wheelDeltaX), e.wheelDeltaY ?
                on.y = -.16 * e.wheelDeltaY : on.y = -.16 * e.wheelDelta;
              else {
                if (!("detail" in e)) return;
                on.y = e.detail
              }
              Ne(y, !0);
              var t = pe.x - on.x,
                n = pe.y - on.y;
              (r.modal || t <= te.min.x && t >= te.max.x && n <= te.min.y && n >= te.max.y) && e.preventDefault(),
                a.panTo(t, n)
            },
            toggleDesktopZoom: function(t) {
              t = t || {
                x: me.x / 2 + he.x,
                y: me.y / 2 + he.y
              };
              var n = r.getDoubleTapZoom(!0, a.currItem),
                i = y === n;
              a.mouseZoomedIn = !i, a.zoomTo(i ? a.currItem.initialZoomLevel : n, t, 333), o[(i ?
                "remove" : "add") + "Class"](e, "pswp--zoomed-in")
            }
          }
        });
        var an, rn, ln, sn, un, cn, dn, pn, mn, fn, hn, yn, xn = {
            history: !0,
            galleryUID: 1
          },
          vn = function() {
            return hn.hash.substring(1)
          },
          gn = function() {
            an && clearTimeout(an), ln && clearTimeout(ln)
          },
          wn = function() {
            var e = vn(),
              t = {};
            if (e.length < 5) return t;
            var n, i = e.split("&");
            for (n = 0; n < i.length; n++)
              if (i[n]) {
                var o = i[n].split("=");
                o.length < 2 || (t[o[0]] = o[1])
              } if (r.galleryPIDs) {
              var a = t.pid;
              for (t.pid = 0, n = 0; n < zt.length; n++)
                if (zt[n].pid === a) {
                  t.pid = n;
                  break
                }
            } else t.pid = parseInt(t.pid, 10) - 1;
            return t.pid < 0 && (t.pid = 0), t
          },
          bn = function() {
            if (ln && clearTimeout(ln), Ve || G) ln = setTimeout(bn, 500);
            else {
              sn ? clearTimeout(rn) : sn = !0;
              var e = c + 1,
                t = Yt(c);
              t.hasOwnProperty("pid") && (e = t.pid);
              var n = dn + "&gid=" + r.galleryUID + "&pid=" + e;
              pn || -1 === hn.hash.indexOf(n) && (fn = !0);
              var i = hn.href.split("#")[0] + "#" + n;
              yn ? "#" + n !== window.location.hash && history[pn ? "replaceState" : "pushState"]("",
                document.title, i) : pn ? hn.replace(i) : hn.hash = n, pn = !0, rn = setTimeout(function() {
                sn = !1
              }, 60)
            }
          };
        Ie("History", {
          publicMethods: {
            initHistory: function() {
              if (o.extend(r, xn, !0), r.history) {
                hn = window.location, fn = !1, mn = !1, pn = !1, dn = vn(), yn = "pushState" in history,
                  dn.indexOf("gid=") > -1 && (dn = dn.split("&gid=")[0], dn = dn.split("?gid=")[0]), Te(
                    "afterChange", a.updateURL), Te("unbindEvents", function() {
                    o.unbind(window, "hashchange", a.onHashChange)
                  });
                var e = function() {
                  cn = !0, mn || (fn ? history.back() : dn ? hn.hash = dn : yn ? history.pushState("",
                    document.title, hn.pathname + hn.search) : hn.hash = ""), gn()
                };
                Te("unbindEvents", function() {
                  u && e()
                }), Te("destroy", function() {
                  cn || e()
                }), Te("firstUpdate", function() {
                  c = wn().pid
                });
                var t = dn.indexOf("pid=");
                t > -1 && "&" === (dn = dn.substring(0, t)).slice(-1) && (dn = dn.slice(0, -1)),
                  setTimeout(function() {
                    l && o.bind(window, "hashchange", a.onHashChange)
                  }, 40)
              }
            },
            onHashChange: function() {
              if (vn() === dn) return mn = !0, void a.close();
              sn || (un = !0, a.goTo(wn().pid), un = !1)
            },
            updateURL: function() {
              gn(), un || (pn ? an = setTimeout(bn, 800) : bn())
            }
          }
        }), o.extend(a, Je)
      }
    })
  };
  o.SoqAA0Mw = function(e, t, n, o, l) {
    ! function(e, n) {
      "function" == typeof define && define.amd ? define(n) : t.exports = n()
    }(0, function() {
      return function(e, t) {
        var n, o, l, r, i, s, a, u, c, d, p, m, f, h, w, g, v, b, _, C = this,
          T = !1,
          I = !0,
          E = !0,
          F = {
            barsSize: {
              top: 44,
              bottom: "auto"
            },
            closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
            timeToIdle: 4e3,
            timeToIdleOutside: 1e3,
            loadingIndicatorDelay: 1e3,
            addCaptionHTMLFn: function(e, t) {
              return e.title ? (t.children[0].innerHTML = e.title, !0) : (t.children[0].innerHTML = "", !1)
            },
            closeEl: !0,
            captionEl: !0,
            fullscreenEl: !0,
            zoomEl: !0,
            shareEl: !0,
            counterEl: !0,
            arrowEl: !0,
            preloaderEl: !0,
            tapToClose: !1,
            tapToToggleControls: !0,
            clickToCloseNonZoomable: !0,
            shareButtons: [{
              id: "facebook",
              label: "Share on Facebook",
              url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
            }, {
              id: "twitter",
              label: "Tweet",
              url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
            }, {
              id: "pinterest",
              label: "Pin it",
              url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
            }, {
              id: "download",
              label: "Download image",
              url: "{{raw_image_url}}",
              download: !0
            }],
            getImageURLForShare: function() {
              return e.currItem.src || ""
            },
            getPageURLForShare: function() {
              return window.location.href
            },
            getTextForShare: function() {
              return e.currItem.title || ""
            },
            indexIndicatorSep: " / ",
            fitControlsWidth: 1200
          },
          x = function(e) {
            if (g) return !0;
            e = e || window.event, w.timeToIdle && w.mouseUsed && !c && A();
            for (var n, o, l = (e.target || e.srcElement).getAttribute("class") || "", r = 0; r < U.length; r++)
              (n = U[r]).onTap && l.indexOf("pswp__" + n.name) > -1 && (n.onTap(), o = !0);
            if (o) {
              e.stopPropagation && e.stopPropagation(), g = !0;
              var i = t.features.isOldAndroid ? 600 : 30;
              v = setTimeout(function() {
                g = !1
              }, i)
            }
          },
          S = function(e, n, o) {
            t[(o ? "add" : "remove") + "Class"](e, "pswp__" + n)
          },
          k = function() {
            var e = 1 === w.getNumItemsFn();
            e !== h && (S(o, "ui--one-slide", e), h = e)
          },
          K = function() {
            S(a, "share-modal--hidden", E)
          },
          L = function() {
            return (E = !E) ? (t.removeClass(a, "pswp__share-modal--fade-in"), setTimeout(function() {
              E && K()
            }, 300)) : (K(), setTimeout(function() {
              E || t.addClass(a, "pswp__share-modal--fade-in")
            }, 30)), E || M(), !1
          },
          O = function(t) {
            var n = (t = t || window.event).target || t.srcElement;
            return e.shout("shareLinkClick", t, n), !(!n.href || !n.hasAttribute("download") && (window.open(
              n.href, "pswp_share",
              "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" +
              (window.screen ? Math.round(screen.width / 2 - 275) : 100)), E || L(), 1))
          },
          M = function() {
            for (var e, t, n, o, l = "", r = 0; r < w.shareButtons.length; r++) e = w.shareButtons[r], t = w.getImageURLForShare(
                e), n = w.getPageURLForShare(e), o = w.getTextForShare(e), l += '<a href="' + e.url.replace(
                "{{url}}", encodeURIComponent(n)).replace("{{image_url}}", encodeURIComponent(t)).replace(
                "{{raw_image_url}}", t).replace("{{text}}", encodeURIComponent(o)) +
              '" target="_blank" class="pswp__share--' + e.id + '"' + (e.download ? "download" : "") + ">" +
              e.label + "</a>", w.parseShareButtonOut && (l = w.parseShareButtonOut(e, l));
            a.children[0].innerHTML = l, a.children[0].onclick = O
          },
          R = function(e) {
            for (var n = 0; n < w.closeElClasses.length; n++)
              if (t.hasClass(e, "pswp__" + w.closeElClasses[n])) return !0
          },
          z = 0,
          A = function() {
            clearTimeout(_), z = 0, c && C.setIdle(!1)
          },
          y = function(e) {
            var t = (e = e || window.event).relatedTarget || e.toElement;
            t && "HTML" !== t.nodeName || (clearTimeout(_), _ = setTimeout(function() {
              C.setIdle(!0)
            }, w.timeToIdleOutside))
          },
          D = function(e) {
            m !== e && (S(p, "preloader--active", !e), m = e)
          },
          P = function(n) {
            var i = n.vGap;
            if (!e.likelyTouchDevice || w.mouseUsed || screen.width > w.fitControlsWidth) {
              var s = w.barsSize;
              if (w.captionEl && "auto" === s.bottom)
                if (r || ((r = t.createEl("pswp__caption pswp__caption--fake")).appendChild(t.createEl(
                    "pswp__caption__center")), o.insertBefore(r, l), t.addClass(o, "pswp__ui--fit")), w.addCaptionHTMLFn(
                    n, r, !0)) {
                  var a = r.clientHeight;
                  i.bottom = parseInt(a, 10) || 44
                } else i.bottom = s.top;
              else i.bottom = "auto" === s.bottom ? 0 : s.bottom;
              i.top = s.top
            } else i.top = i.bottom = 0
          },
          U = [{
            name: "caption",
            option: "captionEl",
            onInit: function(e) {
              l = e
            }
          }, {
            name: "share-modal",
            option: "shareEl",
            onInit: function(e) {
              a = e
            },
            onTap: function() {
              L()
            }
          }, {
            name: "button--share",
            option: "shareEl",
            onInit: function(e) {
              s = e
            },
            onTap: function() {
              L()
            }
          }, {
            name: "button--zoom",
            option: "zoomEl",
            onTap: e.toggleDesktopZoom
          }, {
            name: "counter",
            option: "counterEl",
            onInit: function(e) {
              i = e
            }
          }, {
            name: "button--close",
            option: "closeEl",
            onTap: e.close
          }, {
            name: "button--arrow--left",
            option: "arrowEl",
            onTap: e.prev
          }, {
            name: "button--arrow--right",
            option: "arrowEl",
            onTap: e.next
          }, {
            name: "button--fs",
            option: "fullscreenEl",
            onTap: function() {
              n.isFullscreen() ? n.exit() : n.enter()
            }
          }, {
            name: "preloader",
            option: "preloaderEl",
            onInit: function(e) {
              p = e
            }
          }];
        C.init = function() {
          t.extend(e.options, F, !0), w = e.options, o = t.getChildByClass(e.scrollWrap, "pswp__ui"), d = e
            .listen,
            function() {
              d("onVerticalDrag", function(e) {
                I && e < .95 ? C.hideControls() : !I && e >= .95 && C.showControls()
              });
              var e;
              d("onPinchClose", function(t) {
                I && t < .9 ? (C.hideControls(), e = !0) : e && !I && t > .9 && C.showControls()
              }), d("zoomGestureEnded", function() {
                (e = !1) && !I && C.showControls()
              })
            }(), d("beforeChange", C.update), d("doubleTap", function(t) {
              var n = e.currItem.initialZoomLevel;
              e.getZoomLevel() !== n ? e.zoomTo(n, t, 333) : e.zoomTo(w.getDoubleTapZoom(!1, e.currItem),
                t, 333)
            }), d("preventDragEvent", function(e, t, n) {
              var o = e.target || e.srcElement;
              o && o.getAttribute("class") && e.type.indexOf("mouse") > -1 && (o.getAttribute("class").indexOf(
                "__caption") > 0 || /(SMALL|STRONG|EM)/i.test(o.tagName)) && (n.prevent = !1)
            }), d("bindEvents", function() {
              t.bind(o, "pswpTap click", x), t.bind(e.scrollWrap, "pswpTap", C.onGlobalTap), e.likelyTouchDevice ||
                t.bind(e.scrollWrap, "mouseover", C.onMouseOver)
            }), d("unbindEvents", function() {
              E || L(), b && clearInterval(b), t.unbind(document, "mouseout", y), t.unbind(document,
                  "mousemove", A), t.unbind(o, "pswpTap click", x), t.unbind(e.scrollWrap, "pswpTap", C.onGlobalTap),
                t.unbind(e.scrollWrap, "mouseover", C.onMouseOver), n && (t.unbind(document, n.eventK, C.updateFullscreen),
                  n.isFullscreen() && (w.hideAnimationDuration = 0, n.exit()), n = null)
            }), d("destroy", function() {
              w.captionEl && (r && o.removeChild(r), t.removeClass(l, "pswp__caption--empty")), a && (a.children[
                0].onclick = null), t.removeClass(o, "pswp__ui--over-close"), t.addClass(o,
                "pswp__ui--hidden"), C.setIdle(!1)
            }), w.showAnimationDuration || t.removeClass(o, "pswp__ui--hidden"), d("initialZoomIn",
              function() {
                w.showAnimationDuration && t.removeClass(o, "pswp__ui--hidden")
              }), d("initialZoomOut", function() {
              t.addClass(o, "pswp__ui--hidden")
            }), d("parseVerticalMargin", P),
            function() {
              var e, n, l, r = function(o) {
                if (o)
                  for (var r = o.length, i = 0; i < r; i++) {
                    e = o[i], n = e.className;
                    for (var s = 0; s < U.length; s++) l = U[s], n.indexOf("pswp__" + l.name) > -1 && (w[
                      l.option] ? (t.removeClass(e, "pswp__element--disabled"), l.onInit && l.onInit(
                      e)) : t.addClass(e, "pswp__element--disabled"))
                  }
              };
              r(o.children);
              var i = t.getChildByClass(o, "pswp__top-bar");
              i && r(i.children)
            }(), w.shareEl && s && a && (E = !0), k(), w.timeToIdle && d("mouseUsed", function() {
              t.bind(document, "mousemove", A), t.bind(document, "mouseout", y), b = setInterval(function() {
                2 == ++z && C.setIdle(!0)
              }, w.timeToIdle / 2)
            }), w.fullscreenEl && !t.features.isOldAndroid && (n || (n = C.getFullscreenAPI()), n ? (t.bind(
              document, n.eventK, C.updateFullscreen), C.updateFullscreen(), t.addClass(e.template,
              "pswp--supports-fs")) : t.removeClass(e.template, "pswp--supports-fs")), w.preloaderEl && (D(
              !0), d("beforeChange", function() {
              clearTimeout(f), f = setTimeout(function() {
                e.currItem && e.currItem.loading ? (!e.allowProgressiveImg() || e.currItem.img && !
                  e.currItem.img.naturalWidth) && D(!1) : D(!0)
              }, w.loadingIndicatorDelay)
            }), d("imageLoadComplete", function(t, n) {
              e.currItem === n && D(!0)
            }))
        }, C.setIdle = function(e) {
          c = e, S(o, "ui--idle", e)
        }, C.update = function() {
          I && e.currItem ? (C.updateIndexIndicator(), w.captionEl && (w.addCaptionHTMLFn(e.currItem, l), S(
            l, "caption--empty", !e.currItem.title)), T = !0) : T = !1, E || L(), k()
        }, C.updateFullscreen = function(o) {
          o && setTimeout(function() {
            e.setScrollOffset(0, t.getScrollY())
          }, 50), t[(n.isFullscreen() ? "add" : "remove") + "Class"](e.template, "pswp--fs")
        }, C.updateIndexIndicator = function() {
          w.counterEl && (i.innerHTML = e.getCurrentIndex() + 1 + w.indexIndicatorSep + w.getNumItemsFn())
        }, C.onGlobalTap = function(n) {
          var o = (n = n || window.event).target || n.srcElement;
          if (!g)
            if (n.detail && "mouse" === n.detail.pointerType) {
              if (R(o)) return void e.close();
              t.hasClass(o, "pswp__img") && (1 === e.getZoomLevel() && e.getZoomLevel() <= e.currItem.fitRatio ?
                w.clickToCloseNonZoomable && e.close() : e.toggleDesktopZoom(n.detail.releasePoint))
            } else if (w.tapToToggleControls && (I ? C.hideControls() : C.showControls()), w.tapToClose &&
            (t.hasClass(o, "pswp__img") || R(o))) return void e.close()
        }, C.onMouseOver = function(e) {
          var t = (e = e || window.event).target || e.srcElement;
          S(o, "ui--over-close", R(t))
        }, C.hideControls = function() {
          t.addClass(o, "pswp__ui--hidden"), I = !1
        }, C.showControls = function() {
          I = !0, T || C.update(), t.removeClass(o, "pswp__ui--hidden")
        }, C.supportsFullscreen = function() {
          var e = document;
          return !!(e.exitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen || e.msExitFullscreen)
        }, C.getFullscreenAPI = function() {
          var t, n = document.documentElement,
            o = "fullscreenchange";
          return n.requestFullscreen ? t = {
            enterK: "requestFullscreen",
            exitK: "exitFullscreen",
            elementK: "fullscreenElement",
            eventK: o
          } : n.mozRequestFullScreen ? t = {
            enterK: "mozRequestFullScreen",
            exitK: "mozCancelFullScreen",
            elementK: "mozFullScreenElement",
            eventK: "moz" + o
          } : n.webkitRequestFullscreen ? t = {
            enterK: "webkitRequestFullscreen",
            exitK: "webkitExitFullscreen",
            elementK: "webkitFullscreenElement",
            eventK: "webkit" + o
          } : n.msRequestFullscreen && (t = {
            enterK: "msRequestFullscreen",
            exitK: "msExitFullscreen",
            elementK: "msFullscreenElement",
            eventK: "MSFullscreenChange"
          }), t && (t.enter = function() {
            if (u = w.closeOnScroll, w.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK)
              return e.template[this.enterK]();
            e.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
          }, t.exit = function() {
            return w.closeOnScroll = u, document[this.exitK]()
          }, t.isFullscreen = function() {
            return document[this.elementK]
          }), t
        }
      }
    })
  };
  o.qMbCvxcG = function(e, n, r, a, f) {
    var i = a(e("_YselYzt"));
    ! function() {
      function e() {
        for (var n = [], a = 0; a < arguments.length; a++) {
          var f = arguments[a];
          if (f) {
            var t = void 0 === f ? "undefined" : (0, i.default)(f);
            if ("string" === t || "number" === t) n.push(f);
            else if (Array.isArray(f) && f.length) {
              var o = e.apply(null, f);
              o && n.push(o)
            } else if ("object" === t)
              for (var s in f) r.call(f, s) && f[s] && n.push(s)
          }
        }
        return n.join(" ")
      }
      var r = {}.hasOwnProperty;
      n.exports ? (e.default = e, n.exports = e) : "function" == typeof define && "object" === (0, i.default)(
        define.amd) && define.amd ? define("classnames", [], function() {
        return e
      }) : window.classNames = e
    }()
  };
  o._iJytb3P = function(e, t, i, n, a) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.default = ["beforeChange", "afterChange", "imageLoadComplete", "resize", "gettingData", "mouseUsed",
      "initialZoomIn", "initialZoomInEnd", "initialZoomOut", "initialZoomOutEnd", "parseVerticalMargin",
      "close", "unbindEvents", "destroy", "updateScrollOffset", "preventDragEvent", "shareLinkClick"
    ], t.exports = i.default
  };
  o.q4yjVM_5 = function(e, t, o, n, a) {
    function s(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" !== (void 0 === t ? "undefined" : i(t)) && "function" != typeof t ? e : t
    }
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
    } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" :
        typeof e
    };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var l = function() {
        function e(e, t) {
          for (var o = 0; o < t.length; o++) {
            var n = t[o];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(
              e, n.key, n)
          }
        }
        return function(t, o, n) {
          return o && e(t.prototype, o), n && e(t, n), t
        }
      }(),
      p = n(e("zNszyAds")),
      r = n(e("CcFRdAGK")),
      u = n(e("fM8Yx_5U")),
      c = n(e("SoqAA0Mw")),
      f = n(e("qMbCvxcG")),
      d = n(e("_iJytb3P")),
      m = function(e) {
        function t() {
          var e, o, n, a;
          ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, t);
          for (var i = arguments.length, l = Array(i), p = 0; p < i; p++) l[p] = arguments[p];
          return o = n = s(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(l))),
            _.call(n), a = o, s(n, a)
        }
        return function(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError(
            "Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : i(t))
          );
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, p.default.Component), l(t, [{
          key: "render",
          value: function() {
            var e = this,
              t = this.props.id,
              o = this.props.className;
            return o = (0, f.default)(["pswp", o]).trim(), p.default.createElement("div", {
              id: t,
              className: o,
              tabIndex: "-1",
              role: "dialog",
              "aria-hidden": "true",
              ref: function(t) {
                e.pswpElement = t
              }
            }, p.default.createElement("div", {
              className: "pswp__bg"
            }), p.default.createElement("div", {
              className: "pswp__scroll-wrap"
            }, p.default.createElement("div", {
              className: "pswp__container"
            }, p.default.createElement("div", {
              className: "pswp__item"
            }), p.default.createElement("div", {
              className: "pswp__item"
            }), p.default.createElement("div", {
              className: "pswp__item"
            })), p.default.createElement("div", {
              className: "pswp__ui pswp__ui--hidden"
            }, p.default.createElement("div", {
              className: "pswp__top-bar"
            }, p.default.createElement("div", {
              className: "pswp__counter"
            }), p.default.createElement("button", {
              className: "pswp__button pswp__button--close",
              title: "Close (Esc)"
            }), p.default.createElement("button", {
              className: "pswp__button pswp__button--share",
              title: "Share"
            }), p.default.createElement("button", {
              className: "pswp__button pswp__button--fs",
              title: "Toggle fullscreen"
            }), p.default.createElement("button", {
              className: "pswp__button pswp__button--zoom",
              title: "Zoom in/out"
            }), p.default.createElement("div", {
              className: "pswp__preloader"
            }, p.default.createElement("div", {
              className: "pswp__preloader__icn"
            }, p.default.createElement("div", {
              className: "pswp__preloader__cut"
            }, p.default.createElement("div", {
              className: "pswp__preloader__donut"
            }))))), p.default.createElement("div", {
              className: "pswp__share-modal pswp__share-modal--hidden pswp__single-tap"
            }, p.default.createElement("div", {
              className: "pswp__share-tooltip"
            })), p.default.createElement("button", {
              className: "pswp__button pswp__button--arrow--left",
              title: "Previous (arrow left)"
            }), p.default.createElement("button", {
              className: "pswp__button pswp__button--arrow--right",
              title: "Next (arrow right)"
            }), p.default.createElement("div", {
              className: "pswp__caption"
            }, p.default.createElement("div", {
              className: "pswp__caption__center"
            })))))
          }
        }]), t
      }();
    m.propTypes = {
      isOpen: r.default.bool.isRequired,
      items: r.default.array.isRequired,
      options: r.default.object,
      onClose: r.default.func,
      id: r.default.string,
      className: r.default.string
    }, m.defaultProps = {
      options: {},
      onClose: function() {},
      id: "",
      className: ""
    };
    var _ = function() {
      var e = this;
      this.state = {
        isOpen: this.props.isOpen
      }, this.componentDidMount = function() {
        e.state.isOpen && e.openPhotoSwipe(e.props)
      }, this.componentWillReceiveProps = function(t) {
        var o = e.state.isOpen;
        t.isOpen ? o ? e.updateItems(t.items) : e.openPhotoSwipe(t) : o && e.closePhotoSwipe()
      }, this.componentWillUnmount = function() {
        e.closePhotoSwipe()
      }, this.openPhotoSwipe = function(t) {
        var o = t.items,
          n = t.options,
          a = e.pswpElement;
        e.photoSwipe = new u.default(a, c.default, o, n), d.default.forEach(function(o) {
          var n = t[o];
          if (n || "destroy" === o) {
            var a = e;
            e.photoSwipe.listen(o, function() {
              if (n) {
                for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
                t.unshift(this), n.apply(void 0, t)
              }
              "destroy" === o && a.handleClose()
            })
          }
        }), e.setState({
          isOpen: !0
        }, function() {
          e.photoSwipe.init()
        })
      }, this.updateItems = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        e.photoSwipe.items.length = 0, t.forEach(function(t) {
          e.photoSwipe.items.push(t)
        }), e.photoSwipe.invalidateCurrItems(), e.photoSwipe.updateSize(!0)
      }, this.closePhotoSwipe = function() {
        e.photoSwipe && e.photoSwipe.close()
      }, this.handleClose = function() {
        var t = e.props.onClose;
        e.setState({
          isOpen: !1
        }, function() {
          t && t()
        })
      }
    };
    o.default = m, t.exports = o.default
  };
  o.jpLEYqpV = function(n, t, e, r, u) {
    function o(n, t) {
      for (var e = -1, r = t.length, u = n.length; ++e < r;) n[u + e] = t[e];
      return n
    }

    function c(n, t, e, r, u) {
      var i = -1,
        f = n.length;
      for (e || (e = l), u || (u = []); ++i < f;) {
        var a = n[i];
        t > 0 && e(a) ? t > 1 ? c(a, t - 1, e, r, u) : o(u, a) : r || (u[u.length] = a)
      }
      return u
    }

    function l(n) {
      return x(n) || function(n) {
        return function(n) {
          return f(n) && function(n) {
            return null != n && function(n) {
              return "number" == typeof n && n > -1 && n % 1 == 0 && n <= s
            }(n.length) && ! function(n) {
              var t = function(n) {
                var t = void 0 === n ? "undefined" : (0, a.default)(n);
                return !!n && ("object" == t || "function" == t)
              }(n) ? O.call(n) : "";
              return t == v || t == y
            }(n)
          }(n)
        }(n) && m.call(n, "callee") && (!S.call(n, "callee") || O.call(n) == b)
      }(n) || !!(F && n && n[F])
    }

    function i(n) {
      if ("string" == typeof n || function(n) {
          return "symbol" == (void 0 === n ? "undefined" : (0, a.default)(n)) || f(n) && O.call(n) == h
        }(n)) return n;
      var t = n + "";
      return "0" == t && 1 / n == -d ? "-0" : t
    }

    function f(n) {
      return !!n && "object" == (void 0 === n ? "undefined" : (0, a.default)(n))
    }
    var a = r(n("_YselYzt")),
      d = 1 / 0,
      s = 9007199254740991,
      b = "[object Arguments]",
      v = "[object Function]",
      y = "[object GeneratorFunction]",
      h = "[object Symbol]",
      j = "object" == ("undefined" == typeof window ? "undefined" : (0, a.default)(window)) && window && window.Object ===
      Object && window,
      p = "object" == ("undefined" == typeof self ? "undefined" : (0, a.default)(self)) && self && self.Object ===
      Object && self,
      g = j || p || Function("return this")(),
      w = Object.prototype,
      m = w.hasOwnProperty,
      O = w.toString,
      A = g.Symbol,
      S = w.propertyIsEnumerable,
      F = A ? A.isConcatSpreadable : void 0,
      Y = Math.max,
      x = Array.isArray,
      E = function(n, t) {
        return t = Y(void 0 === t ? n.length - 1 : t, 0),
          function() {
            for (var e = arguments, r = -1, u = Y(e.length - t, 0), o = Array(u); ++r < u;) o[r] = e[t + r];
            r = -1;
            for (var c = Array(t + 1); ++r < t;) c[r] = e[r];
            return c[t] = o,
              function(n, t, e) {
                switch (e.length) {
                  case 0:
                    return n.call(t);
                  case 1:
                    return n.call(t, e[0]);
                  case 2:
                    return n.call(t, e[0], e[1]);
                  case 3:
                    return n.call(t, e[0], e[1], e[2])
                }
                return n.apply(t, e)
              }(n, this, c)
          }
      }(function(n, t) {
        return null == n ? {} : function(n, t) {
          return n = Object(n),
            function(n, t, e) {
              for (var r = -1, u = t.length, o = {}; ++r < u;) {
                var c = t[r],
                  l = n[c];
                e(l, c) && (o[c] = l)
              }
              return o
            }(n, t, function(t, e) {
              return e in n
            })
        }(n, function(n, t) {
          for (var e = -1, r = n ? n.length : 0, u = Array(r); ++e < r;) u[e] = t(n[e], e, n);
          return u
        }(c(t, 1), i))
      });
    t.exports = E
  };
  o.tDNY8c3E = function(e, t, n, o, r) {
    function i(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" !== (void 0 === t ? "undefined" : a(t)) && "function" != typeof t ? e : t
    }
    var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
    } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" :
        typeof e
    };
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var s = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
        }
        return e
      },
      u = function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(
              e, o.key, o)
          }
        }
        return function(t, n, o) {
          return n && e(t.prototype, n), o && e(t, o), t
        }
      }(),
      l = o(e("zNszyAds")),
      p = o(e("CcFRdAGK")),
      f = o(e("qMbCvxcG")),
      c = o(e("jpLEYqpV")),
      d = o(e("q4yjVM_5")),
      m = o(e("_iJytb3P")),
      b = function(e) {
        function t() {
          var e, n, o, r;
          ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, t);
          for (var a = arguments.length, s = Array(a), u = 0; u < a; u++) s[u] = arguments[u];
          return n = o = i(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(s))),
            o.state = {
              isOpen: o.props.isOpen,
              options: o.props.options
            }, o.componentWillReceiveProps = function(e) {
              var t = o.state.isOpen;
              e.isOpen ? t || o.setState({
                isOpen: !0
              }) : t && o.setState({
                isOpen: !1
              })
            }, o.showPhotoSwipe = function(e) {
              return function(t) {
                t.preventDefault();
                var n = o.state.options;
                n.index = e, n.getThumbBoundsFn = n.getThumbBoundsFn || function(e) {
                  var t = o.thumbnails[e].getElementsByTagName("img")[0],
                    n = window.pageYOffset || document.documentElement.scrollTop,
                    r = t.getBoundingClientRect();
                  return {
                    x: r.left,
                    y: r.top + n,
                    w: r.width
                  }
                }, o.setState({
                  isOpen: !0,
                  options: n
                })
              }
            }, o.handleClose = function() {
              o.setState({
                isOpen: !1
              }), o.props.onClose()
            }, r = n, i(o, r)
        }
        return function(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError(
            "Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : a(t))
          );
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, l.default.Component), u(t, [{
          key: "render",
          value: function() {
            var e = this,
              t = this.props,
              n = t.id,
              o = t.items,
              r = t.thumbnailContent,
              i = function(e, t) {
                var n = {};
                for (var o in e) t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (n[o] =
                  e[o]);
                return n
              }(t, ["id", "items", "thumbnailContent"]),
              a = this.props.className;
            a = (0, f.default)(["pswp-gallery", a]).trim();
            var u = (0, c.default)(i, m.default),
              p = this.state,
              b = p.isOpen,
              h = p.options;
            return l.default.createElement("div", {
              id: n,
              className: a
            }, l.default.createElement("div", {
              className: "pswp-thumbnails"
            }, o.map(function(t, n) {
              return l.default.createElement("div", {
                key: n,
                ref: function(t) {
                  e.thumbnails = e.thumbnails || [], e.thumbnails[n] = t
                },
                className: "pswp-thumbnail",
                onClick: e.showPhotoSwipe(n)
              }, r(t))
            })), l.default.createElement(d.default, s({}, u, {
              isOpen: b,
              items: o,
              options: h,
              onClose: this.handleClose
            })))
          }
        }]), t
      }();
    b.propTypes = {
      items: p.default.array.isRequired,
      options: p.default.object,
      thumbnailContent: p.default.func,
      id: p.default.string,
      className: p.default.string,
      isOpen: p.default.bool,
      onClose: p.default.func
    }, b.defaultProps = {
      options: {},
      thumbnailContent: function(e) {
        return l.default.createElement("img", {
          src: e.src,
          width: "100",
          height: "100",
          alt: ""
        })
      },
      id: "",
      className: "",
      isOpen: !1,
      onClose: function() {}
    }, n.default = b, t.exports = n.default
  };
  o.iO0f3wHZ = function(e, o, t, l, a) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.PhotoSwipeGallery = t.PhotoSwipe = void 0;
    var i = l(e("q4yjVM_5")),
      d = l(e("tDNY8c3E"));
    t.default = i.default, t.PhotoSwipe = i.default, t.PhotoSwipeGallery = d.default
  };
  o._s_dMCak = function(e, t, n, a, i) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var l = a(e("__gK4WbX")),
      r = a(e("lgLPKmWO")),
      o = a(e("LFxswB00")),
      c = a(e("_3k8jqSq")),
      m = a(e("C_TrCxPr")),
      s = e("zNszyAds"),
      u = a(s),
      d = a(e("CcFRdAGK")),
      h = a(e("oYLqwKZ3")),
      f = a(e("fjpkKDAo")),
      p = a(e("k65Ijy_9")),
      v = function(e) {
        function t(e) {
          (0, r.default)(this, t);
          var n = (0, c.default)(this, (t.__proto__ || (0, l.default)(t)).call(this, e));
          return n.minWidth = 50, n.touchStart = {}, n.state = {
            commentList: [],
            showAnimation: {},
            currentIndex: 0
          }, n
        }
        return (0, m.default)(t, e), (0, o.default)(t, [{
          key: "handleFormatCommentList",
          value: function() {
            var e = this.props.commentList,
              t = [],
              n = [];
            (void 0 === e ? [] : e).forEach(function(e, a) {
              if (e.content.length > 120) {
                var i = [e];
                t.push(i)
              } else n.length < 2 && (n.push(e), 2 === n.length && (t.push(n), n = []))
            }), this.setState({
              commentList: t.slice(0, 3)
            })
          }
        }, {
          key: "componentDidMount",
          value: function() {
            this.handleFormatCommentList()
          }
        }, {
          key: "componentWillReceiveProps",
          value: function(e) {
            e.commentList.length > 0 && this.handleFormatCommentList()
          }
        }, {
          key: "handleBtnRemarkClick",
          value: function() {
            var e = h.default.shortLinkPrefix + "/Cuj/",
              t = "click_" + (p.default.browser.weixin ? "weixin" : "wap") + "_rf_comment";
            (0, f.default)({
              downloadLink: e,
              id: window.group_id,
              item_id: window.item_id,
              gdLabel: t,
              type: "detail",
              position: "comment",
              isNewVideo: window.isNewVideoPage
            })
          }
        }, {
          key: "handleTouchStart",
          value: function(e) {
            this.touchStart = e.changedTouches[0], this.setState({
              showAnimation: !1
            })
          }
        }, {
          key: "handleTouchEnd",
          value: function(e) {
            var t = this.state,
              n = t.currentIndex,
              a = t.commentList,
              i = e.changedTouches[0].clientX - this.touchStart.clientX,
              l = void 0;
            l = Math.abs(i) < this.minWidth || n >= a.length ? n : i < 0 ? n < a.length - 1 ? n + 1 : n :
              n > 0 ? n - 1 : 0, this.setState({
                currentIndex: l,
                showAnimation: !0
              })
          }
        }, {
          key: "formatTime",
          value: function(e) {
            return h.default.formatDate(new Date(Number(1e3 * e)), "yyyy年MM月dd日")
          }
        }, {
          key: "render",
          value: function() {
            var e = this,
              t = this.state,
              n = t.commentList,
              a = t.showAnimation,
              i = t.currentIndex;
            return 0 === n.length ? null : u.default.createElement("div", {
              className: "comment-wrapper"
            }, u.default.createElement("p", {
              className: "comment-title"
            }, "热门评论"), u.default.createElement("div", {
              className: "comment-scroll " + (1 === n.length ? "comment-item-single" : "")
            }, u.default.createElement("div", {
              style: {
                width: "auto",
                transform: "translate3d(-" + 90.6 * i + "vw, 0px, 0px)",
                transition: a ? "all .5s ease" : ""
              },
              onClick: function() {
                return e.handleBtnRemarkClick()
              }
            }, n.map(function(t, n) {
              return u.default.createElement("div", {
                className: "comment-item-wrapper",
                key: n,
                onTouchStart: function(t) {
                  return e.handleTouchStart(t)
                },
                onTouchEnd: function(t) {
                  return e.handleTouchEnd(t)
                }
              }, t.map(function(n, a) {
                var i = n.icon,
                  l = n.name,
                  r = n.digg_count,
                  o = n.content,
                  c = n.time,
                  m = e.formatTime(c);
                return u.default.createElement("div", {
                  key: a,
                  className: "comment-item " + (t.length > 1 ? "comment-duplicate" :
                    "")
                }, u.default.createElement("img", {
                  className: "user-avatar",
                  src: i
                }), u.default.createElement("div", {
                  className: "remark-right"
                }, u.default.createElement("p", {
                  className: "user-desc-wrapper"
                }, u.default.createElement("span", {
                  className: "user-name"
                }, l), u.default.createElement("span", null, r, "赞")), u.default.createElement(
                  "p", {
                    className: "user-remark",
                    dangerouslySetInnerHTML: {
                      __html: o
                    }
                  }), u.default.createElement("div", {
                  className: "user-date"
                }, m)))
              }))
            }))), u.default.createElement("div", {
              className: "comment-desc"
            }, u.default.createElement("span", {
              className: "tip-content",
              onClick: function() {
                return e.handleBtnRemarkClick()
              }
            }, "打开“今日头条”查看更多评论")))
          }
        }]), t
      }(s.Component);
    v.propTypes = {
      openUrl: d.default.string,
      isLiteVersion: d.default.bool,
      commentList: d.default.array
    }, n.default = v
  };
  o.vfmltKrV = function(e, t, i, n, l) {
    var o = n(e("lT_XwWMZ")),
      a = n(e("rCvC6Owx")),
      r = n(e("C1A9_Inc")),
      c = n(e("__gK4WbX")),
      d = n(e("lgLPKmWO")),
      s = n(e("LFxswB00")),
      u = n(e("_3k8jqSq")),
      f = n(e("C_TrCxPr")),
      p = e("zNszyAds"),
      h = n(p),
      w = n(e("CcFRdAGK")),
      m = n(e("qBRplOQ7")),
      _ = e("xyJ0J1_Z"),
      g = n(e("_FcfWIYI")),
      v = (n(e("oYLqwKZ3")), n(e("E7MLSnqQ")), n(e("k65Ijy_9"))),
      A = n(e("fjpkKDAo")),
      y = n(e("OWcl4fDl")),
      S = n(e("aR_71ts1")),
      C = e("iO0f3wHZ"),
      b = n(e("_s_dMCak")),
      E = {
        history: !1,
        focus: !1,
        closeEl: !1,
        captionEl: !1,
        fullscreenEl: !1,
        shareEl: !1,
        counterEl: !0,
        bgOpacity: .85,
        tapToClose: !0,
        tapToToggleControls: !1,
        loop: !1,
        barsSize: {
          top: 0,
          bottom: 0
        }
      },
      k = function(e) {
        function t(e) {
          (0, d.default)(this, t);
          var i = (0, u.default)(this, (t.__proto__ || (0, c.default)(t)).call(this, e));
          return i.state = {
            isPhotoSwipeOpen: !1,
            photoSwipeKey: null,
            articleHeight: 0
          }, i
        }
        return (0, f.default)(t, e), (0, s.default)(t, [{
          key: "componentDidMount",
          value: function() {
            (0, g.default)(this.articleContent), this.bindClickEvent(), this.handleFoldArticle(this.articleContent),
              this.executeScript(this.props.articleData.content)
          }
        }, {
          key: "bindClickEvent",
          value: function() {
            var e = this;
            if (this.articleContent) {
              var t = (0, r.default)(this.articleContent.querySelectorAll(".img-wrapper-embedded img"));
              t.length > 0 && t.forEach(function(t, i) {
                t.addEventListener("click", function() {
                  e.setState({
                    isPhotoSwipeOpen: !0,
                    photoSwipeKey: i
                  })
                })
              })
            }
          }
        }, {
          key: "executeScript",
          value: function(e) {
            for (var t = /<script>([\s\S]*?)<\/script>/gm, i = void 0; i = t.exec(e);) {
              var n = document.createElement("script"),
                l = i[1];
              l && l.indexOf("mp_vote_file.js") > -1 && (l = ""), n.type = "text/javascript", n.innerHTML =
                l, document.body.appendChild(n)
            }
          }
        }, {
          key: "handleFoldArticle",
          value: function(e) {
            if (this.props.isUnfoldArticle) return !1;
            var t = window.screen.height || window.innerHeight,
              i = e.offsetHeight,
              n = 1.2 * t - (e.offsetTop || 0) + 60;
            if (i < n) return !1;
            this.setState({
              foldArticle: !0,
              articleHeight: n
            })
          }
        }, {
          key: "componentWillReceiveProps",
          value: function(e) {
            e.isUnfoldArticle !== this.props.isUnfoldArticle && e.isUnfoldArticle && this.handleUnfoldArticle()
          }
        }, {
          key: "handleUnfoldArticle",
          value: function() {
            this.setState({
              foldArticle: !1,
              articleHeight: ""
            }), window.maevent("article", "unfold")
          }
        }, {
          key: "downloadApp",
          value: function() {
            (0, A.default)({
              position: "article",
              type: "detail",
              id: window.group_id,
              item_id: window.item_id,
              gdLabel: v.default.browser.weixin ? "click_weixin_rf_more_btn" : "click_wap_rf_more_btn",
              isNewVideo: window.isNewVideoPage
            }), window.maevent("article_open", "click")
          }
        }, {
          key: "render",
          value: function() {
            var e = this,
              t = this.props,
              i = t.articleData,
              n = t.commentList,
              l = this.state,
              c = l.articleHeight,
              d = l.isPhotoSwipeOpen;
            return i.content ? h.default.createElement("article", {
              className: "article"
            }, h.default.createElement("div", {
              style: {
                height: c || "auto"
              }
            }, window.isInAwemePage ? h.default.createElement(S.default, {
              data: i,
              GTMValue: this.props.GTMValue,
              containStyle: "article-evalute-style"
            }) : h.default.createElement(m.default, (0, o.default)({
              data: i
            }, this.props)), h.default.createElement("div", {
              className: window.isInAwemePage ? "article_content_aweme" : "article__content",
              ref: function(t) {
                e.articleContent = t
              },
              dangerouslySetInnerHTML: {
                __html: (0, y.default)(i.content)
              },
              id: "article_content"
            }), n && n.length > 0 && h.default.createElement(b.default, {
              commentList: n
            })), this.state.foldArticle && h.default.createElement(_.DownloadBtn, {
              unflod: function(t) {
                e._unfold = t
              },
              downloadApp: function(t) {
                e.downloadApp(t)
              },
              unfoldArticle: function() {
                return e.handleUnfoldArticle()
              }
            }), h.default.createElement(C.PhotoSwipe, {
              isOpen: d,
              items: function() {
                if (e.articleContent) return (0, r.default)(e.articleContent.querySelectorAll(
                  ".img-wrapper-embedded img")).map(function(e) {
                  return {
                    src: e.getAttribute("src") || e.getAttribute("data-src"),
                    w: +e.getAttribute("img_width"),
                    h: +e.getAttribute("img_height")
                  }
                });
                return []
              }(),
              options: function() {
                var t = e.state.photoSwipeKey;
                return (0, a.default)({}, E, {
                  index: t
                })
              }(),
              onClose: function() {
                return e.setState({
                  isPhotoSwipeOpen: !1
                })
              }
            })) : null
          }
        }]), t
      }(p.Component);
    k.propTypes = {
      GTMValue: w.default.object,
      articleData: w.default.object,
      isUnfoldArticle: w.default.bool,
      commentList: w.default.array
    }, t.exports = k
  };
  o.NyBUEg8f = function(e, t, a, n, l) {
    Object.defineProperty(a, "__esModule", {
      value: !0
    });
    var d = n(e("__gK4WbX")),
      o = n(e("lgLPKmWO")),
      i = n(e("LFxswB00")),
      r = n(e("_3k8jqSq")),
      u = n(e("C_TrCxPr")),
      f = e("zNszyAds"),
      c = n(f),
      p = n(e("fjpkKDAo")),
      s = n(e("k65Ijy_9")),
      _ = n(e("IJQXgVIj")),
      m = n(e("JKQGrVxs")),
      w = m.default.appName,
      g = m.default.topBanner.slogan,
      v = m.default.logo,
      b = (m.default.app, function(e) {
        function t(e) {
          return (0, o.default)(this, t), (0, r.default)(this, (t.__proto__ || (0, d.default)(t)).call(this, e))
        }
        return (0, u.default)(t, e), (0, i.default)(t, [{
          key: "handleOpen",
          value: function() {
            (0, p.default)({
              position: "topBanner",
              type: "detail",
              id: window.group_id,
              item_id: window.item_id,
              gdLabel: "click_" + (s.default.browser.weixin ? "weixin" : "wap") + "_rf_detail_top"
            }), window.maevent("top_banner", "download")
          }
        }, {
          key: "render",
          value: function() {
            var e = this,
              t = g ? w + "·" + g : w;
            return c.default.createElement("div", {
              className: "top-banner-container"
            }, c.default.createElement("div", {
              className: "high" === window.articleType ? "top-banner" : ""
            }, c.default.createElement("img", {
              src: v,
              className: "logo"
            }), c.default.createElement("span", {
              className: "slogan"
            }, t), c.default.createElement(_.default, {
              gdLabel: "click_wap_rf_detail_top",
              position: "topBanner"
            }, c.default.createElement("div", {
              className: "open",
              onClick: function() {
                return e.handleOpen()
              }
            }, "打开"))))
          }
        }]), t
      }(f.Component));
    a.default = b
  };
  d("_zPtV3vU", "//s1.pstatp.com/growth/mobile_detail/image/user_icon@3x.0aworU0U.png");
  d("GA4JUv1H", "//s1.pstatp.com/growth/mobile_detail/image/popup_banner_close.0ZpwPxjs.png");
  o.Dr3CQh1j = function(e, u, n, t) {
    "use strict";
    n.__esModule = !0;
    var a = t(e("_TKuLVn3"));
    n.default = function(e, u, n) {
      return u in e ? (0, a.default)(e, u, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[u] = n, e
    }
  };
  o.qC9lolSD = function(e, n, t, o, r) {
    var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" :
          typeof e
      },
      i = function(e) {
        var n = function(n) {
          return "undefined" == typeof window ? n : (n.end = l.bind(n)(e), n)
        };
        return "function" == typeof e.end ? n(e) : n
      };
    i.callbackWrapper = function(e) {
      var n = {
        body: e
      };
      clearTimeout(this._jsonp.timeout), this._jsonp.callback.call(this, null, n)
    }, i.errorWrapper = function() {
      var e = new Error("404 NotFound");
      this._jsonp.callback.call(this, e, null)
    };
    var l = function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
        timeout: 1e3
      };
      return function(n) {
        var t = setTimeout(i.errorWrapper.bind(this), e.timeout);
        this._jsonp = {
          callbackParam: e.callbackParam || "callback",
          callbackName: e.callbackName || "superagentCallback" + (new Date).valueOf() + parseInt(1e3 * Math
            .random()),
          callback: n,
          timeout: t
        }, window[this._jsonp.callbackName] = i.callbackWrapper.bind(this);
        var o = function(e, n, t) {
          return n in e ? Object.defineProperty(e, n, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[n] = t, e
        }({}, this._jsonp.callbackParam, this._jsonp.callbackName);
        this._query.push(function(e) {
          if ("object" != (void 0 === e ? "undefined" : a(e))) return e;
          var n = [];
          for (var t in e) null != e[t] && n.push(encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));
          return n.join("&")
        }(o));
        var r = this._query.join("&"),
          l = document.createElement("script"),
          c = this.url.indexOf("?") > -1 ? "&" : "?",
          u = this.url + c + r;
        return l.src = u, document.getElementsByTagName("head")[0].appendChild(l), this
      }
    };
    void 0 !== n.exports ? n.exports = i : "function" == typeof define && define.amd ? define([], function() {
      return {
        jsonp: i
      }
    }) : "undefined" != typeof window && (window.superagentJSONP = i)
  };
  o.R_7U6sko = function(l, e, r, t, s) {
    Function(function(l) {
      return 'e(e,a,r){(b[e]||(b[e]=t("x,y","x "+e+" y")(r,a)}a(e,a,r){(k[r]||(k[r]=t("x,y","new x[y]("+Array(r+1).join(",x[y]")(1)+")")(e,a)}r(e,a,r){n,t,s={},b=s.d=r?r.d+1:0;for(s["$"+b]=s,t=0;t<b;t)s[n="$"+t]=r[n];for(t=0,b=s=a;t<b;t)s[t]=a[t];c(e,0,s)}c(t,b,k){u(e){v[x]=e}f{g=,ting(bg)}l{try{y=c(t,b,k)}catch(e){h=e,y=l}}for(h,y,d,g,v=[],x=0;;)switch(g=){case 1:u(!)4:f5:u((e){a=0,r=e;{c=a<r;c&&u(e[a]),c}}(6:y=,u((y8:if(g=,lg,g=,y===c)b+=g;else if(y!==l)y9:c10:u(s(11:y=,u(+y)12:for(y=f,d=[],g=0;g<y;g)d[g]=y.charCodeAt(g)^g+y;u(String.fromCharCode.apply(null,d13:y=,h=delete [y]14:59:u((g=)?(y=x,v.slice(x-=g,y:[])61:u([])62:g=,k[0]=65599*k[0]+k[1].charCodeAt(g)>>>065:h=,y=,[y]=h66:u(e(t[b],,67:y=,d=,u((g=).x===c?r(g.y,y,k):g.apply(d,y68:u(e((g=t[b])<"<"?(b--,f):g+g,,70:u(!1)71:n72:+f73:u(parseInt(f,3675:if(){bcase 74:g=<<16>>16g76:u(k[])77:y=,u([y])78:g=,u(a(v,x-=g+1,g79:g=,u(k["$"+g])81:h=,[f]=h82:u([f])83:h=,k[]=h84:!085:void 086:u(v[x-1])88:h=,y=,h,y89:u({e{r(e.y,arguments,k)}e.y=f,e.x=c,e})90:null91:h93:h=0:;default:u((g<<16>>16)-16)}}n=this,t=n.Function,s=Object.keys||(e){a={},r=0;for(c in e)a[r]=c;a=r,a},b={},k={};r'
        .replace(/[-]/g, function(e) {
          return l[15 & e.charCodeAt(0)]
        })
    }(
      "v[x++]=v[--x]t.charCodeAt(b++)-32function return ))++.substrvar .length(),b+=;break;case ;break}"
      .split("")))()(
      'gr$Daten Иb/s!l y͒yĹg,(lfi~ah`{mv,-n|jqewVxp{rvmmx,&effkx[!cs"l".Pq%widthl"@q&heightl"vr*getContextx$"2d[!cs#l#,*;?|u.|uc{uq$fontl#vr(fillTextx$$龘ฑภ경2<[#c}l#2q*shadowBlurl#1q-shadowOffsetXl#$$limeq+shadowColorl#vr#arcx88802[%c}l#vr&strokex[ c}l"v,)}eOmyoZB]mx[ cs!0s$l$Pb<k7l l!r&lengthb%^l$1+s$jl  s#i$1ek1s$gr#tack4)zgr#tac$! +0o![#cj?o ]!l$b%s"o ]!l"l$b*b^0d#>>>s!0s%yA0s"l"l!r&lengthb<k+l"^l"1+s"jl  s&l&z0l!$ +["cs\'(0l#i\'1ps9wxb&s() &{s)/s(gr&Stringr,fromCharCodes)0s*yWl ._b&s o!])l l Jb<k$.aj;l .Tb<k$.gj/l .^b<k&i"-4j!+& s+yPo!]+s!l!l Hd>&l!l Bd>&+l!l <d>&+l!l 6d>&+l!l &+ s,y=o!o!]/q"13o!l q"10o!],l 2d>& s.{s-yMo!o!]0q"13o!]*Ld<l 4d#>>>b|s!o!l q"10o!],l!& s/yIo!o!].q"13o!],o!]*Jd<l 6d#>>>b|&o!]+l &+ s0l-l!&l-l!i\'1z141z4b/@d<l"b|&+l-l(l!b^&+l-l&zl\'g,)gk}ejo{cm,)|yn~Lij~em["cl$b%@d<l&zl\'l $ +["cl$b%b|&+l-l%8d<@b|l!b^&+ q$sign ',
      [Object.defineProperty(r, "__esModule", {
        value: !0
      })])
  };
  o.rOR5taG0 = function(e, t, a, d, o) {
    Object.defineProperty(a, "__esModule", {
      value: !0
    });
    var i = d(e("_l59FVJy")),
      r = d(e("Dr3CQh1j"));
    a.fetchArticleData = function(e) {
      return n.default.get("/i" + e + "/info/?_signature=" + (0, c.sign)(e) + "&i=" + e)
    }, a.fetchVideoData = function(e) {
      return n.default.get("/i" + e + "/info/?_signature=" + (0, c.sign)(e) + "&i=" + e)
    }, a.fetchCommonData = function(e, t, a) {
      if (s.default.notShowRecommendation) return !1;
      t.tt_running = 0;
      var d = window.relatedOnly && window.relatedOnly.group_id || [],
        o = window.relatedOnly && window.relatedOnly.media_id || [];
      d.indexOf(window.group_id) > -1 && (t.only_related_rec = 1), o.indexOf(window.mediaUserId) > -1 && (t.only_related_rec =
          1), t.enable_mix = 1, t.web_id = l.default.cookie("tt_webid") || "", t.utm_source = l.default.cookie(
          "utm_source") || l.default.request("utm_source") || "", t.utm_medium = l.default.cookie("utm_source") ||
        l.default.request("utm_source") || "", t.utm_campaign = l.default.cookie("utm_source") || l.default.request(
          "utm_source") || "";
      var u = "//m.toutiao.com/related/open/" + e + "/?" + f.default.stringify(t, {
        indices: !1
      });
      n.default.get(u).end(function(e, d) {
        if (!e) try {
          var o = JSON.parse(d.text);
          if (o.data && "success" === o.message) {
            if (Array.isArray(o.data)) {
              var n = Array.isArray(t.code_id) ? t.code_id[0] : t.code_id;
              o.data = (0, r.default)({}, n, o.data)
            }(0, i.default)(o.data).map(function(e) {
              o.data[e] = o.data[e] || [], o.data[e].map(function(e) {
                e.group_id = e.id
              })
            })
          } else o.data = null, window.maevent("pageview", "recommended", 0);
          a(o)
        } catch (e) {
          throw a({
            data: null,
            message: "error"
          }), new Error("error in /related/open/ api, err : " + e)
        }
      })
    }, a.fetchCommentsData = function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          offset: 0,
          count: 0
        },
        t = arguments[1],
        a = s.default.getUTMValue("show_comments_num") - 0;
      a = a > 50 ? 50 : a || 2, e.count > 0 && (a = e.count);
      var d = {
        group_id: window.group_id,
        tab_index: 0,
        count: a,
        offset: e.offset || 0
      };
      n.default.get("//ib.snssdk.com/article/v1/tab_comments/?" + f.default.stringify(d)).use((0, u.default)({
        timeout: 2e3
      })).end(function(e, a) {
        e || a.body && t(a.body)
      })
    }, a.getRelationship = function(e) {
      var t = {
          iid: e
        },
        a = "/relation/friends/?" + f.default.stringify(t);
      return n.default.get(a)
    }, a.getHotCardInfo = function() {
      var e = "/related/hotspot/?group_id=" + window.group_id;
      return n.default.get(e)
    }, a.reportPageView = function() {
      var e = {
          mid: l.default.request("mid") || "",
          share_did: l.default.request("device_id") || "",
          share_ucode: l.default.request("u_code") || "",
          share_ts: +l.default.request("share_ts"),
          group_id: window.group_id,
          aid: 35
        },
        t = "//i.snssdk.com/score_task/v1/task/share_tribute/?" + f.default.stringify(e);
      n.default.get(t).end(function(e, t) {
        e && console.log(e)
      })
    };
    var n = d(e("LjRpg0Vj")),
      u = d(e("qC9lolSD")),
      f = d(e("qopIkZBp")),
      s = d(e("oYLqwKZ3")),
      l = d(e("E7MLSnqQ")),
      c = e("R_7U6sko")
  };
  o.jpURqdak = function(e, t, a, i, n) {
    Object.defineProperty(a, "__esModule", {
      value: !0
    });
    var r = i(e("__gK4WbX")),
      s = i(e("lgLPKmWO")),
      l = i(e("LFxswB00")),
      o = i(e("_3k8jqSq")),
      c = i(e("C_TrCxPr")),
      d = i(e("zNszyAds")),
      p = (i(e("CcFRdAGK")), i(e("E7MLSnqQ"))),
      u = i(e("fjpkKDAo")),
      m = e("rOR5taG0"),
      h = i(e("IJQXgVIj")),
      f = i(e("JKQGrVxs")),
      v = ["http://p0.pstatp.com/origin/3791/5035712059", "http://p0.pstatp.com/origin/3795/3033762272",
        "http://p0.pstatp.com/origin/3792/5112637127", "http://p0.pstatp.com/origin/3791/5070639578",
        "http://p0.pstatp.com/origin/3797/2889309425", "http://p0.pstatp.com/origin/3793/3114521287",
        "http://p0.pstatp.com/origin/3796/2975850990", "http://p0.pstatp.com/origin/3795/3044413937",
        "http://p0.pstatp.com/origin/3795/3047680722", "http://p0.pstatp.com/origin/3793/3131589739"
      ],
      w = function(t) {
        function a(e) {
          (0, s.default)(this, a);
          var t = (0, o.default)(this, (a.__proto__ || (0, r.default)(a)).call(this, e));
          return t.state = {
            show: !1,
            name: "",
            avatar: "",
            upe: !1,
            closed: !1
          }, t
        }
        return (0, c.default)(a, t), (0, l.default)(a, [{
          key: "componentDidMount",
          value: function() {
            var e = this;
            this.initCard(), window.addEventListener("scroll", function() {
              var t = document.querySelector(".top-banner-container") || document.querySelector(
                ".article-author-new") || document.querySelector(".article__title");
              if (t) {
                var a = t.getBoundingClientRect().top;
                a > -50 && e.state.show && e.setState({
                  show: !1
                }), a < -50 && !e.state.show && e.setState({
                  show: !0
                })
              }
            })
          }
        }, {
          key: "initCard",
          value: function() {
            var e = this,
              t = p.default.request("iid") || 0,
              a = p.default.request("wxshare_count"),
              i = "你的好友",
              n = v[t % 10];
            t && 1 === Number(a) ? (0, m.getRelationship)(t).end(function(t, a) {
              if (!t) {
                var r = a.body,
                  s = r.data;
                "upe" !== r.message ? (s && Array.isArray(s) && (i = s[0].name, n = s[0].avatar_url,
                  e.id = s[0].id), i && n && e.setState({
                  name: i,
                  avatar: n
                })) : e.setState({
                  upe: !0
                })
              }
            }) : this.setState({
              name: i,
              avatar: n
            })
          }
        }, {
          key: "handleClickOpen",
          value: function() {
            var e = {
              position: "relationcard",
              id: window.group_id,
              item_id: window.item_id,
              isNewVideo: window.isNewVideoPage,
              from_page: "weixin_friend_card",
              source: "weixin_friend_card",
              type: "detail"
            };
            this.id && (e.id = this.id, e.type = "profile"), (0, u.default)(e), window.maevent(
              "relationship", "click")
          }
        }, {
          key: "handleClickClose",
          value: function(e) {
            e.preventDefault(), e.stopPropagation(), this.setState({
              closed: !0
            })
          }
        }, {
          key: "render",
          value: function() {
            var t = this;
            if (this.state.upe || window.violateWeixinPolicy || this.state.closed) return null;
            var a = this.state,
              i = a.avatar,
              n = a.name,
              r = f.default.appName,
              s = this.id ? "关注 ta" : "打开";
            return d.default.createElement("div", {
              className: "share-card-container share-card-container-" + this.state.show,
              onClick: function() {
                return t.handleClickOpen()
              }
            }, d.default.createElement(h.default, {
              gdLabel: "click_wap_rf_relation",
              position: "relationCard"
            }, d.default.createElement("div", null, d.default.createElement("span", {
              className: "share-card-avatar-container"
            }, d.default.createElement("img", {
              className: "share-card-avatar",
              src: i
            }), d.default.createElement("img", {
              className: "share-card-icon",
              src: e("_zPtV3vU")
            })), d.default.createElement("span", {
              className: "share-card-text"
            }, d.default.createElement("p", {
              className: "share-card-name"
            }, n), "hide" !== window.articleType ? d.default.createElement("span", null, "在用",
              d.default.createElement("span", {
                className: "share-card-toutiao"
              }, r), "邀你一起") : d.default.createElement("span", null, "邀你一起看精彩内容")), d.default.createElement(
              "span", {
                className: "share-card-btn"
              }, s), d.default.createElement("img", {
              className: "share-card-close-btn",
              src: e("GA4JUv1H"),
              onClick: function(e) {
                return t.handleClickClose(e)
              }
            }))))
          }
        }]), a
      }(d.default.Component);
    a.default = w
  };
  o.a8KMJgx8 = function(t, e, n, a, o) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = a(t("__gK4WbX")),
      r = a(t("lgLPKmWO")),
      u = a(t("LFxswB00")),
      s = a(t("_3k8jqSq")),
      d = a(t("C_TrCxPr")),
      l = t("zNszyAds"),
      w = a(t("k65Ijy_9")),
      f = a(t("CcFRdAGK")),
      c = a(t("E7MLSnqQ")),
      m = function(t) {
        function e(t) {
          return (0, r.default)(this, e), (0, s.default)(this, (e.__proto__ || (0, i.default)(e)).call(this, t))
        }
        return (0, d.default)(e, t), (0, u.default)(e, [{
          key: "componentWillMount",
          value: function() {
            var t = this;
            window.ttGTM = {};
            var e = {},
              n = w.default.browser.weixin ? "GTM-K9DDWQ" : "GTM-NRPFDC";
            ! function(n, a, o, i, r) {
              n[i] = n[i] || [], n[i].push({
                "gtm.start": (new Date).getTime(),
                event: "gtm.js"
              });
              var u = a.getElementsByTagName(o)[0],
                s = a.createElement(o);
              s.async = !0, s.dataset ? s.dataset.from = "toutiao" : s.setAttribute("data-from",
                  "toutiao"), "1" === c.default.request("_gtm") ? s.src =
                "//www.googletagmanager.com/gtm.js?id=" + r : s.src =
                "//s3a.pstatp.com/growth/fe_sdk/gtmsdk/" + r + ".js?v=" + window.gtmExpireTime, s.onload =
                function() {
                  var n = 10;
                  ! function a() {
                    (e = window.isListPage ? window.ttGTM.list : w.default.browser.weixin ? window.ttGTM.weixin :
                      window.ttGTM.detail) ? (window.GTMValue = e, t.props.setGTMValue(e)) : --n &&
                      setTimeout(a, 10)
                  }()
                }, u.parentNode.insertBefore(s, u)
            }(window, document, "script", "dataLayer", n)
          }
        }, {
          key: "render",
          value: function() {
            return null
          }
        }]), e
      }(l.Component);
    m.propTypes = {
      setGTMValue: f.default.func
    }, n.default = m
  };
  o.gWvDBmZa = function(e, t, a, l, n) {
    Object.defineProperty(a, "__esModule", {
      value: !0
    });
    var c = l(e("__gK4WbX")),
      s = l(e("lgLPKmWO")),
      u = l(e("LFxswB00")),
      i = l(e("_3k8jqSq")),
      d = l(e("C_TrCxPr")),
      m = e("zNszyAds"),
      r = l(m),
      o = l(e("CcFRdAGK")),
      f = l(e("BqNd7zgW")),
      p = l(e("oYLqwKZ3")),
      _ = l(e("E7MLSnqQ")),
      E = l(e("k65Ijy_9")),
      v = l(e("IJQXgVIj")),
      N = function(e) {
        function t() {
          return (0, s.default)(this, t), (0, i.default)(this, (t.__proto__ || (0, c.default)(t)).apply(this,
            arguments))
        }
        return (0, d.default)(t, e), (0, u.default)(t, [{
          key: "handleClick",
          value: function(e, t, a) {
            _.default.request("audit_mode") || this.props.handleClick(e, t, a)
          }
        }, {
          key: "render",
          value: function() {
            var e = this,
              t = this.props,
              a = t.datum,
              l = t.index,
              n = t.GTMValue,
              c = t.imgSrc,
              s = t.imgSrcList,
              u = t.feedlistType,
              i = this.props.type,
              d = p.default.needDownloadApp(n) && !E.default.browser.feiliao,
              m = a.open_label || "打开APP",
              o = function() {
                if (a.title) return a.title;
                switch (a.feed_type) {
                  case 4:
                    return "这有一只好看的抖音短视频";
                  case 3:
                    return "这有一条好看的段子";
                  case 2:
                    return "这有一只好看的火山小视频";
                  default:
                    return "暂无标题"
                }
              },
              _ = r.default.createElement("section", {
                "data-group-id": a.group_id,
                className: "feed-item " + i + "-container",
                key: a.index,
                ref: function(t) {
                  e._section = t
                }
              }, r.default.createElement("a", {
                href: a.url,
                rel: "nofollow",
                title: o(),
                onClick: function(t) {
                  return e.handleClick(t, a, l)
                }
              }, "no-img" === i && r.default.createElement("div", null, r.default.createElement(
                "span", {
                  className: "title line2"
                }, o()), r.default.createElement("div", {
                  className: "info"
                }, d && r.default.createElement("span", {
                  className: "open-label"
                }, m), r.default.createElement("span", null, a.author.name), a.video_play_count > 0 ?
                r.default.createElement("span", {
                  className: "play-count",
                  title: a.video_play_count
                }, p.default.countFormat(a.video_play_count), "次播放") : r.default.createElement(
                  "span", {
                    className: "time-ago",
                    title: a.stats.create_time
                  }, a.stats.comment_count || 0, "条评论"))), "two-columns" === i && r.default.createElement(
                "div", null, r.default.createElement("div", {
                  className: "img-container"
                }, r.default.createElement(f.default, {
                  className: "img",
                  src: c
                }), 0 === l && r.default.createElement("span", {
                  className: "hot-tag"
                }, "热门"), a.has_video && r.default.createElement("div", {
                  className: "video-time"
                }, r.default.createElement("span", {
                  title: a.video_duration
                }, p.default.formatDuration(a.video_duration)))), r.default.createElement("div", {
                  className: "info"
                }, d && r.default.createElement("span", {
                  className: "open-label"
                }, m), a.video_play_count > 0 ? r.default.createElement("span", {
                  className: "play-count",
                  title: a.video_play_count
                }, p.default.countFormat(a.video_play_count), "次播放") : r.default.createElement(
                  "span", {
                    className: "time-ago",
                    title: a.stats.create_time
                  }, a.stats.comment_count || 0, "条评论")), r.default.createElement("p", {
                  className: "title line2"
                }, a.title)), "left-img" === i && "" !== c && r.default.createElement("div", {
                className: "flex-container"
              }, r.default.createElement("div", {
                className: "left"
              }, r.default.createElement(f.default, {
                className: "img",
                src: c
              })), r.default.createElement("div", {
                className: "right"
              }, r.default.createElement("span", {
                className: "title line2"
              }, o()), r.default.createElement("div", {
                  className: "info"
                }, d && r.default.createElement("span", {
                  className: "open-label"
                }, m), r.default.createElement("span", null, a.author.name), a.video_play_count >
                0 ? r.default.createElement("span", {
                  className: "play-count",
                  title: a.video_play_count
                }, p.default.countFormat(a.video_play_count), "次播放") : r.default.createElement(
                  "span", {
                    className: "time-ago",
                    title: a.stats.create_time
                  }, a.stats.comment_count || 0, "条评论")))), "three-img" === i && r.default.createElement(
                "div", null, r.default.createElement("span", {
                  className: "title line2"
                }, o()), r.default.createElement("div", {
                  className: "img-container"
                }, s.slice(0, 3).map(function(e, t) {
                  return r.default.createElement(f.default, {
                    className: "img",
                    key: t,
                    src: e
                  })
                })), r.default.createElement("div", {
                    className: "info"
                  }, d && r.default.createElement("span", {
                    className: "open-label"
                  }, m), r.default.createElement("span", null, a.author.name), a.video_play_count > 0 ?
                  r.default.createElement("span", {
                    className: "play-count",
                    title: a.video_play_count
                  }, p.default.countFormat(a.video_play_count), "次播放") : r.default.createElement(
                    "span", {
                      className: "time-ago",
                      title: a.stats.create_time
                    }, a.stats.comment_count || 0, "条评论"))), "big-img" === i && r.default.createElement(
                "div", null, r.default.createElement("span", {
                  className: "title line2"
                }, o()), r.default.createElement("div", {
                  className: "img-container"
                }, r.default.createElement(f.default, {
                  className: "img",
                  src: c
                })), r.default.createElement("div", {
                    className: "info"
                  }, d && r.default.createElement("span", {
                    className: "open-label"
                  }, m), r.default.createElement("span", null, a.author.name), a.video_play_count > 0 ?
                  r.default.createElement("span", {
                    className: "play-count",
                    title: a.video_play_count
                  }, p.default.countFormat(a.video_play_count), "次播放") : r.default.createElement(
                    "span", {
                      className: "time-ago",
                      title: a.stats.create_time
                    }, a.stats.comment_count || 0, "条评论")))));
            return r.default.createElement(v.default, {
              gdLabel: "click_wap_rf_detail_" + ("appOnly" === u ? "apponly" : "related"),
              position: "recommendation"
            }, _)
          }
        }]), t
      }(m.Component);
    N.propTypes = {
      datum: o.default.object,
      type: o.default.string,
      handleClick: o.default.func,
      GTMValue: o.default.object,
      index: o.default.number,
      imgSrc: o.default.string,
      feedlistType: o.default.string,
      imgSrcList: o.default.arrayOf(o.default.string)
    }, a.default = N
  };
  o.AZhaX9o4 = function(e, t, a, i, n) {
    var l = i(e("lT_XwWMZ")),
      d = i(e("__gK4WbX")),
      r = i(e("lgLPKmWO")),
      o = i(e("LFxswB00")),
      s = i(e("_3k8jqSq")),
      p = i(e("C_TrCxPr")),
      u = e("zNszyAds"),
      c = i(u),
      f = i(e("CcFRdAGK")),
      _ = i(e("oYLqwKZ3")),
      h = i(e("fjpkKDAo")),
      w = i(e("k65Ijy_9")),
      g = i(e("E7MLSnqQ")),
      m = i(e("qopIkZBp")),
      y = i(e("_EVDu_Cd")),
      v = i(e("gWvDBmZa")),
      k = function(e) {
        function t(e) {
          (0, r.default)(this, t);
          var a = (0, s.default)(this, (t.__proto__ || (0, d.default)(t)).call(this, e));
          return a.handleClick = a.handleClick.bind(a), a.cachedRecObj = {}, a
        }
        return (0, p.default)(t, e), (0, o.default)(t, [{
          key: "getExtraData",
          value: function(e, t) {
            return -1 !== ["appOnly", "relatedNews"].indexOf(this.props.type) && _.default.getExtraData({
              code_id: t,
              group_id: e,
              type: "wap_activation"
            })
          }
        }, {
          key: "handleClick",
          value: function(e, t, a) {
            e.preventDefault();
            var i = t.has_video,
              n = t.open_url,
              d = t.code_id,
              r = t.group_id,
              o = void 0,
              s = void 0;
            switch (this.props.type) {
              case "appOnly":
                o = "apponly", s = w.default.browser.weixin ? "click_weixin_rf_detail_apponly" :
                  "click_wap_rf_detail_apponly";
                break;
              case "relatedNews":
                o = "relatednews", s = w.default.browser.weixin ? "click_weixin_rf_detail_related" :
                  "click_wap_rf_detail_related"
            }
            var p = _.default.needDownloadApp(this.props.GTMValue);
            if (window.maevent(o, p ? "download" : "click", t.index + 1), w.default.browser.feiliao && t.url)
              location.href = t.url;
            else {
              var u = w.default.os.android ? _.default.shortLinkPrefix + "/6smb/" : _.default.shortLinkPrefix +
                "/Cuj/";
              switch (this.props.type) {
                case "appOnly":
                  this.props.GTMValue.apponlySurl && (u = this.props.GTMValue.apponlySurl || u);
                  var c = {
                    showid: window.group_id,
                    groupid: r,
                    position: "apponly"
                  };
                  u = g.default.appendQuery(u, m.default.stringify(c));
                  break;
                case "relatedNews":
                  this.props.GTMValue.relatedSurl && (u = this.props.GTMValue.relatedSurl);
                  var f = {
                    showid: window.group_id,
                    groupid: r,
                    position: "relatednews"
                  };
                  u = g.default.appendQuery(u, m.default.stringify(f))
              }
              if (t.download_app_id) switch (t.download_app_id) {
                case 13:
                  u = "https://d.toutiao.com/knnc/";
                  break;
                case 32:
                  u = "https://d.ixigua.com/WJ6/"
              }
              _.default.sendActionLog((0, l.default)({}, t, {
                distance: this.getNewDistance(a)
              })), window.is404Page && (u = "https://d.toutiao.com/DSt8/");
              var y = {
                downloadLink: u,
                type: "detail",
                id: r,
                gdLabel: s,
                isNewVideo: i,
                code_id: d,
                position: "recommendation",
                distance: t.distance
              };
              this.getExtraData(r, d) && (y.extraData = this.getExtraData(r, d)), this.props.isWeixinSharePage &&
                (y.position = "shareRecommendation"), n && (y.nativeLink = n), (0, h.default)(y)
            }
          }
        }, {
          key: "getNewDistance",
          value: function(e) {
            var t = void 0;
            switch (this.props.type) {
              case "appOnly":
                t = e + 1;
                break;
              case "relatedNews":
                t = this.props.appOnlyLength + e + 1
            }
            return t
          }
        }, {
          key: "handleFirstInView",
          value: function(e, t) {
            e.distance = this.getNewDistance(t), _.default.handleFirstInViewDebounce(e, 1e3)
          }
        }, {
          key: "handleFeedItemClick",
          value: function(e, t, a) {
            e.preventDefault(), this.handleClick(e, t, a)
          }
        }, {
          key: "render",
          value: function() {
            var e = this.props,
              t = e.data,
              a = e.type,
              i = e.GTMValue,
              n = [].concat(t.data),
              l = this;
            return c.default.createElement("div", {
              className: "feed-list-container-new-article " + a + "-container"
            }, c.default.createElement("div", {
              className: "list-content"
            }, n.map(function(e, t) {
              switch (a) {
                case "appOnly":
                  e.enter_from = "wap_app_special", e.code_id = "14798012085000246";
                  break;
                case "relatedNews":
                  e.enter_from = "wap_related_article", e.code_id = "14799599715000246"
              }
              e.type = a, e.index = t;
              var n = "",
                d = [],
                r = "";
              return e.image_list ? (d = e.image_list.map(function(e) {
                return e.url
              }), e.image_list.length >= 3 ? r = "three-img" : (n = e.image_list[0].url, r =
                "left-img")) : e.video && e.video.cover_image_url ? (n = e.video.cover_image_url,
                r = "left-img") : r = "no-img", c.default.createElement(y.default, {
                key: t,
                onFirstInView: function() {
                  return l.handleFirstInView(e, t)
                }
              }, c.default.createElement(v.default, {
                ref: function(e) {
                  l[a + "-feed-list-" + t] = e
                },
                datum: e,
                handleClick: function(e, t, a) {
                  return l.handleFeedItemClick(e, t, a)
                },
                type: r,
                GTMValue: i,
                index: t,
                imgSrc: n,
                imgSrcList: d,
                feedlistType: a
              }))
            })))
          }
        }]), t
      }(u.Component);
    k.propTypes = {
      GTMValue: f.default.object,
      data: f.default.object,
      type: f.default.string,
      appOnlyLength: f.default.number,
      isWeixinSharePage: f.default.bool
    }, t.exports = k
  };
  o.pYXmtpgj = function(e, a, t, d, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var l = d(e("__gK4WbX")),
      o = d(e("lgLPKmWO")),
      i = d(e("LFxswB00")),
      s = d(e("_3k8jqSq")),
      n = d(e("C_TrCxPr")),
      c = e("zNszyAds"),
      u = d(c),
      m = d(e("CcFRdAGK")),
      f = d(e("fjpkKDAo")),
      p = d(e("k65Ijy_9")),
      _ = d(e("oYLqwKZ3")),
      w = d(e("JKQGrVxs")).default.appName,
      v = function(e) {
        function a(e) {
          return (0, o.default)(this, a), (0, s.default)(this, (a.__proto__ || (0, l.default)(a)).call(this, e))
        }
        return (0, n.default)(a, e), (0, i.default)(a, [{
          key: "handleHotCardClick",
          value: function() {
            var e = this.props.hotCardData.topic_id,
              a = p.default.os.android ? _.default.shortLinkPrefix + "/6smb/" : _.default.shortLinkPrefix +
              "/Cuj/",
              t = p.default.os.ios ? "i.snssdk.com" : "a3.pstatp.com",
              d = {
                hide_more: 1,
                url: encodeURIComponent("https://" + t + "/ugc/hotspot/subject/web/" + e + "?" + (p.default
                  .os.ios ? "is_preview=1" : ""))
              };
            p.default.os.android ? d.style_canvas = 1 : (d.hide_status_bar = 1, d.hide_bar = 1, d.use_wk =
              1, d.bounce_disable = 1);
            var r = {
              downloadLink: a,
              webviewUrlParams: d,
              app: "news_article",
              gdLabel: "click_" + (p.default.browser.weixin ? "weixin" : "wap") + "_rf_hot_search",
              position: "hotCard",
              type: "webview",
              isNewVideo: window.isNewVideoPage,
              extraData: _.default.getExtraData({
                type: "wap_no_recommend_activation"
              })
            };
            (0, f.default)(r)
          }
        }, {
          key: "render",
          value: function() {
            var e = this,
              a = this.props,
              t = a.containStyle,
              d = a.hotCardData,
              r = d.image_url,
              l = d.name,
              o = d.view_count;
            return u.default.createElement("div", {
              className: "hot-card-wrapper",
              onClick: function() {
                return e.handleHotCardClick()
              },
              style: t
            }, u.default.createElement("div", {
              className: "card-wrapper-linear"
            }), u.default.createElement("div", {
              className: "card-content-wrapper",
              style: {
                backgroundImage: "url(" + r[0] + ")"
              }
            }, u.default.createElement("div", {
              className: "card-desc"
            }, u.default.createElement("div", {
              className: "card-img"
            }), u.default.createElement("div", {
              className: "card-title"
            }, l), u.default.createElement("div", {
              className: "card-number"
            }, o, "人围观"))), u.default.createElement("div", {
              className: "card-bottom"
            }, u.default.createElement("div", {
              className: "bottom-title"
            }, "打开“", w, "”查看专题"), u.default.createElement("div", {
              className: "bottom-desc"
            }, "查看详情")))
          }
        }]), a
      }(c.Component);
    v.propTypes = {
      hotCardData: m.default.object,
      containStyle: m.default.object
    }, t.default = v
  };
  d("Wf5jcF4D", "//s1.pstatp.com/growth/mobile_detail/image/like-icon-click.rWKQ83jN.png");
  d("rM25wHey", "//s1.pstatp.com/growth/mobile_detail/image/dislike-icon-click.uJpZBVPo.png");
  d("XsweTGDc", "//s1.pstatp.com/growth/mobile_detail/image/icon-close.nwfbemoz.png");
  o._yL7CEUu = function(o, e, l, t, p) {
    Object.defineProperty(l, "__esModule", {
      value: !0
    });
    var n = t(o("__gK4WbX")),
      s = t(o("lgLPKmWO")),
      r = t(o("LFxswB00")),
      c = t(o("_3k8jqSq")),
      d = t(o("C_TrCxPr")),
      u = o("zNszyAds"),
      a = t(u),
      i = t(o("CcFRdAGK")),
      h = t(o("dLqIczAI")),
      f = function(o) {
        function e(o) {
          (0, s.default)(this, e);
          var l = (0, c.default)(this, (e.__proto__ || (0, n.default)(e)).call(this, o));
          return l.scrollTop = 0, l
        }
        return (0, d.default)(e, o), (0, r.default)(e, [{
          key: "componentWillReceiveProps",
          value: function(o) {
            o.isShowPopBox && !this.props.isShowPopBox && (this.scrollTop = document.body.scrollTop ||
              document.documentElement.scrollTop, document.body.classList.add("modal-open"), document.body
              .style.top = -this.scrollTop + "px"), this.props.isShowPopBox && !o.isShowPopBox && (
              document.body.classList.remove("modal-open"), document.body.style.top = "0px", document.body
              .scrollTop = document.documentElement.scrollTop = this.scrollTop, this.scrollTop = 0)
          }
        }, {
          key: "handlePopBoxWrapperClick",
          value: function(o) {
            o.target.className.indexOf("pop-box-wrapper") > -1 && this.props.onCancelClick()
          }
        }, {
          key: "render",
          value: function() {
            var o = this;
            return this.props.isShowPopBox ? h.default.createPortal(a.default.createElement("div", {
              className: "pop-box-wrapper",
              onClick: function(e) {
                return o.handlePopBoxWrapperClick(e)
              }
            }, this.props.children), document.body) : null
          }
        }]), e
      }(u.Component);
    f.propTypes = {
      isShowPopBox: i.default.bool,
      children: i.default.node,
      onCancelClick: i.default.func
    }, f.defaultProps = {
      isShowPopBox: !1
    }, l.default = f
  };
  o._P_oOVqN = function(e, t, n, o, a) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var s = o(e("_l59FVJy")),
      l = o(e("__gK4WbX")),
      r = o(e("lgLPKmWO")),
      i = o(e("LFxswB00")),
      u = o(e("_3k8jqSq")),
      c = o(e("C_TrCxPr")),
      d = o(e("zNszyAds")),
      p = o(e("CcFRdAGK")),
      f = o(e("_yL7CEUu")),
      m = o(e("E7MLSnqQ")),
      w = (o(e("oYLqwKZ3")), {
        popContentObj: {
          inital: {
            question: d.default.createElement("span", null, "您对页面推荐内容是否满意？"),
            answer1: "满意",
            answer2: "不满意",
            btnStatus1: "good",
            btnStatus2: "bad",
            questionType: "gtm"
          },
          question2: {
            question: d.default.createElement("span", null, "您觉得页面", d.default.createElement("span", {
              className: "title-red"
            }, "内容模块"), d.default.createElement("br", null), "是否丰富？"),
            answer1: "丰富",
            answer2: "不丰富",
            btnStatus1: "good",
            btnStatus2: "bad",
            questionType: "rich",
            show: []
          },
          question3: {
            question: d.default.createElement("span", null, "您在", d.default.createElement("span", {
              className: "title-red"
            }, "阅读全文过程中"), d.default.createElement("br", null), "不会收到干扰"),
            answer1: "同意",
            answer2: "不同意",
            btnStatus1: "good",
            btnStatus2: "bad",
            questionType: "read",
            show: ["unfoldArticleTest1", "unfoldArticleTest2", "unfoldArticleTest5", "unfoldArticleTest6"]
          },
          question4: {
            question: d.default.createElement("span", null, "您对", d.default.createElement("span", {
              className: "title-red"
            }, "今日头条分享页面"), d.default.createElement("br", null), "是否满意"),
            answer1: "满意",
            answer2: "不满意",
            btnStatus1: "good",
            btnStatus2: "bad",
            questionType: "share",
            show: ["unfoldArticleControl", "unfoldArticleTest1", "unfoldArticleTest2", "unfoldArticleTest3",
              "unfoldArticleTest4", "unfoldArticleTest5", "unfoldArticleTest6", "reflowSimpleTest1",
              "reflowSimpleTest2", "reflowSimpleTest3", "reflowSimpleControl"
            ]
          }
        },
        popBoxTypeObj: {
          onePopOneQues: ["gtmRec", "unfoldArticleControl", "unfoldArticleTest3", "unfoldArticleTest2",
            "unfoldArticleTest4", "unfoldArticleTest6", "reflowSimpleTest1", "reflowSimpleTest2",
            "reflowSimpleTest3", "reflowSimpleControl"
          ],
          TwoPopTwoQues: ["unfoldArticleTest1", "unfoldArticleTest5"],
          onePopTwoQues: []
        },
        popBtnStatus: {
          random: ["gtmRec", "reflowSimpleTest1", "reflowSimpleTest2", "reflowSimpleTest3",
            "reflowSimpleControl"
          ],
          normal: [],
          reverse: ["unfoldArticleTest6", "unfoldArticleTest5", "unfoldArticleTest4", "unfoldArticleTest3",
            "unfoldArticleTest2", "unfoldArticleTest1", "unfoldArticleControl"
          ]
        }
      }),
      h = w.popBtnStatus,
      S = w.popBoxTypeObj,
      T = w.popContentObj,
      v = function(t) {
        function n(e) {
          (0, r.default)(this, n);
          var t = (0, u.default)(this, (n.__proto__ || (0, l.default)(n)).call(this, e)),
            o = m.default.cookie("tt_webid") || "",
            a = t.getCurrentPopConfigInfo(),
            s = a.btnStatus;
          return a && "random" === a.btnStatus && (s = o.substring(o.length - 1) % 2 ? "normal" : "reverse"), t.state = {
            btnStatus: s,
            popContentInfo: {},
            currentQuestStats: 0,
            choosedBtnStatsArr: [],
            popBoxType: a.popBoxType
          }, t.questionType = null, t
        }
        return (0, c.default)(n, t), (0, i.default)(n, [{
          key: "getCurrentPopConfigInfo",
          value: function() {
            var e = this,
              t = "normal",
              n = "onePopOneQues";
            return (0, s.default)(h).forEach(function(n) {
              h[n].indexOf(e.props.showRecPopInitStats) > -1 && (t = n)
            }), (0, s.default)(S).forEach(function(t) {
              S[t].indexOf(e.props.showRecPopInitStats) > -1 && (n = t)
            }), {
              btnStatus: t,
              popBoxType: n
            }
          }
        }, {
          key: "componentDidMount",
          value: function() {
            if (this.getPopContentInfo(), window.maevent("rec_evaluated", "pop_show"), m.default.localStorageEnabled()) {
              var e = window.localStorage.getItem(window.group_id + "_insert_pop") || 0;
              window.localStorage.setItem(window.group_id + "_insert_pop", Number(e) + 1)
            }
          }
        }, {
          key: "componentWillReceiveProps",
          value: function(e) {
            if (this.props.showPopPosition !== e.showPopPosition && m.default.sessionStorageEnabled()) {
              var t = sessionStorage.getItem("prev_pop_type") || "";
              sessionStorage.setItem("prev_pop_type", (t ? t + "_" : "") + e.showPopPosition)
            }
          }
        }, {
          key: "handleEvalutedClick",
          value: function(e, t) {
            var n = this;
            if (this.questionType === t) return null;
            var o = this.state,
              a = o.btnStatus,
              s = o.currentQuestStats,
              l = o.choosedBtnStatsArr,
              r = o.popBoxType,
              i = this.props.showRecPopInitStats,
              u = "good" === e ? 1 : 0,
              c = i + "_" + a + "_" + t;
            window.maevent("rec", "evaluted", 0, 0, {
              experScore: u,
              abtestParams: c,
              questionOrder: m.default.sessionStorageEnabled() && sessionStorage.getItem(
                "prev_pop_type")
            }), this.setState({
              choosedBtnStatsArr: l.concat(e + "_" + t),
              currentQuestStats: s < 1 ? s + 1 : s
            });
            var d = ["TwoPopTwoQues", "onePopTwoQues"].indexOf(r) > -1;
            (!d || d && 1 === s) && setTimeout(function() {
              n.props.onCancelClick()
            }, 300), this.questionType = t
          }
        }, {
          key: "getPopContentInfo",
          value: function() {
            var e = this.props,
              t = e.surveyGTMData,
              n = void 0 === t ? {} : t,
              o = e.showRecPopInitStats,
              a = "";
            "reverse" === this.state.btnStatus && (0, s.default)(T).forEach(function(e) {
                var t = T[e].answer1;
                T[e].answer1 = "不" + t, T[e].answer2 = t, T[e].btnStatus1 = "bad", T[e].btnStatus2 =
                  "good"
              }), (0, s.default)(T).forEach(function(e) {
                T[e].show && T[e].show.indexOf(o) > -1 && (a ? a && -1 === Object.prototype.toString.call(
                  a).indexOf("Array") && (a = [a, T[e]]) : a = T[e])
              }), a || (a = T.inital), ["m.toutiaocdn.cn"].indexOf(location.hostname) > -1 && n.question &&
              (a.question = n.question), this.setState({
                popContentInfo: a
              })
          }
        }, {
          key: "render",
          value: function() {
            var t = this,
              n = this.props,
              o = n.isShowPopBox,
              a = n.onCancelClick,
              s = n.showRecPopInitStats,
              l = n.showPopPosition,
              r = this.state,
              i = r.currentQuestStats,
              u = r.choosedBtnStatsArr,
              c = r.popBoxType,
              p = this.state.popContentInfo;
            "onePopOneQues" === c && p instanceof Array && (p = "article" === l ? p[0] : p[1]),
              "TwoPopTwoQues" === c && p instanceof Array && (p = p[i]);
            var m = p,
              w = m.question,
              h = m.answer1,
              S = m.answer2,
              T = m.btnStatus1,
              v = m.btnStatus2,
              b = m.questionType;
            return d.default.createElement(f.default, {
              isShowPopBox: o,
              onCancelClick: function() {
                return a()
              }
            }, d.default.createElement("div", {
              className: "pop-score-container"
            }, p.length ? d.default.createElement("div", {
              className: "two-question"
            }, p.map(function(e, n) {
              var o = e.question,
                a = e.answer1,
                s = e.answer2,
                l = e.btnStatus1,
                r = e.btnStatus2,
                i = e.questionType,
                c = l + "_" + i,
                p = r + "_" + i;
              return d.default.createElement("div", {
                key: e,
                className: "two-question-item  " + (0 === n ? "btn-first-child" : "")
              }, d.default.createElement("div", {
                className: "item-title"
              }, o), d.default.createElement("div", {
                className: "two-question-btn"
              }, d.default.createElement("div", {
                className: "evaluated " + c + " " + (u.indexOf(l + "_" + i) > -1 ?
                  "choosed" : ""),
                onClick: function() {
                  return t.handleEvalutedClick(l, i)
                }
              }, d.default.createElement("span", {
                className: "btn-icon " + (u.indexOf(l + "_" + i) > -1 ? "btn-choosed" :
                  "")
              }), d.default.createElement("span", {
                className: "desc"
              }, a)), d.default.createElement("div", {
                className: "evaluated  " + p + " " + (u.indexOf(r + "_" + i) > -1 ?
                  "choosed" : ""),
                onClick: function() {
                  return t.handleEvalutedClick(r, i)
                }
              }, d.default.createElement("span", {
                className: "btn-icon " + (u.indexOf(r + "_" + i) > -1 ? "btn-choosed" :
                  "")
              }), d.default.createElement("span", {
                className: "desc"
              }, s))))
            })) : d.default.createElement("div", null, "TwoPopTwoQues" === c && d.default.createElement(
              "div", {
                className: "question-count"
              }, "第", i + 1, "题/共2题"), d.default.createElement("div", {
              className: "score-title",
              style: {
                maxWidth: s.indexOf("gtmRec") > -1 ? 145 : ""
              }
            }, w), d.default.createElement("div", {
              className: "btn-wrapper"
            }, d.default.createElement("div", {
              className: "evaluated",
              onClick: function() {
                return t.handleEvalutedClick(T, b)
              }
            }, d.default.createElement("span", {
              className: "icon " + (u.indexOf(T + "_" + b) > -1 ? "choosed" : "")
            }, d.default.createElement("img", {
              src: e("good" === T ? "Wf5jcF4D" : "rM25wHey"),
              style: "bad" === T ? {
                position: "relative",
                top: 4
              } : {}
            })), d.default.createElement("span", {
              className: "desc"
            }, h)), d.default.createElement("div", {
              className: "evaluated",
              onClick: function() {
                return t.handleEvalutedClick(v, b)
              }
            }, d.default.createElement("span", {
              className: "icon " + (u.indexOf(v + "_" + b) > -1 ? "choosed" : "")
            }, d.default.createElement("img", {
              src: e("good" === v ? "Wf5jcF4D" : "rM25wHey"),
              style: "bad" === v ? {
                position: "relative",
                top: 4
              } : {}
            })), d.default.createElement("span", {
              className: "desc"
            }, S)))), d.default.createElement("div", {
              className: "btn-closed",
              onClick: function() {
                return a()
              }
            }, d.default.createElement("img", {
              src: e("XsweTGDc")
            }))))
          }
        }]), n
      }(d.default.Component);
    v.propTypes = {
      isShowPopBox: p.default.bool,
      onCancelClick: p.default.func,
      surveyGTMData: p.default.object,
      showRecPopInitStats: p.default.string,
      showPopPosition: p.default.string
    }, n.default = v
  };
  o.VOdmENRv = function(t, e, r, n, a) {
    Object.defineProperty(r, "__esModule", {
      value: !0
    });
    var o = n(t("_l59FVJy")),
      i = function() {
        var t = {
            hotCardControl: !1,
            hotCardTest1: !1,
            hotCardTest2: !1
          },
          e = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            if (!t) return [];
            var e = {},
              r = [];
            try {
              e = JSON.parse(t)
            } catch (t) {
              throw new Error("ERROR IN PARSE ABTEST_PARAMS" + t)
            }
            return (0, o.default)(e).forEach(function(t) {
              if (e[t] instanceof Object) {
                var n = (0, o.default)(e[t])[0];
                r.push(e[t][n])
              }
            }), r
          }(window.abtest_parameters),
          r = (0, o.default)(t).filter(function(t) {
            return e.indexOf(t) > -1
          });
        if (r.length > 0 && window.isXiguaVideoPage) {
          t[r[0]] = !0
        }
        return t
      }();
    r.default = i
  };
  o.VcstVxxX = function(e, t, a, o, n) {
    Object.defineProperty(a, "__esModule", {
      value: !0
    });
    var d = o(e("lT_XwWMZ")),
      l = o(e("_l59FVJy")),
      i = o(e("__gK4WbX")),
      r = o(e("lgLPKmWO")),
      s = o(e("LFxswB00")),
      u = o(e("_3k8jqSq")),
      h = o(e("C_TrCxPr")),
      c = e("zNszyAds"),
      f = o(c),
      p = o(e("CcFRdAGK")),
      m = o(e("AZhaX9o4")),
      w = o(e("pYXmtpgj")),
      v = o(e("_P_oOVqN")),
      S = o(e("k65Ijy_9")),
      g = o(e("oYLqwKZ3")),
      P = o(e("E7MLSnqQ")),
      y = o(e("VOdmENRv"));
    g.default.initScrollEvents();
    var _ = !!g.default.isFromWxapp,
      E = function(e) {
        function t(e) {
          (0, r.default)(this, t);
          var a = (0, u.default)(this, (t.__proto__ || (0, i.default)(t)).call(this, e));
          a.state = {
            isShowPopBox: !1,
            showRecPopInitStats: !1,
            showPopPosition: ""
          };
          var o = g.default.getTTWebID || "";
          return a.random = o.substring(o.length - 3) / 1e3 || 0, a.hasShowPopEvaluated = P.default.localStorageEnabled() &&
            "1" === window.localStorage.getItem(window.group_id + "_insert_pop"), a.currenrHasShowPopEvaluated = !
            1, a
        }
        return (0, h.default)(t, e), (0, s.default)(t, [{
          key: "componentDidMount",
          value: function() {
            var e = this.props,
              t = e.GTMValue,
              a = void 0 === t ? {} : t,
              o = e.hideAd;
            if (!a.hideAd && !o) {
              if (_) return !1;
              var n = document.querySelector("#backflowAd") || document.querySelector("#detailAd");
              if (n) {
                var d = g.default.throttle(function() {
                  n.getBoundingClientRect().top <= (window.innerHeight || document.documentElement.clientHeight) &&
                    (g.default.initAD(), window.removeEventListener("scroll", d))
                }, 200);
                window.addEventListener("scroll", d, !1)
              }
            }
          }
        }, {
          key: "handleShowPopBox",
          value: function() {
            var e = document.querySelector(".relatedNews-container section:nth-child(5)");
            if (e && !this.currenrHasShowPopEvaluated) {
              var t = e.getBoundingClientRect();
              t.top >= 0 && t.top <= (window.innerHeight || document.documentElement.clientHeight) && (
                this.setState({
                  isShowPopBox: !0,
                  showPopPosition: "recommendation"
                }), this.currenrHasShowPopEvaluated = !0)
            }
          }
        }, {
          key: "componentWillReceiveProps",
          value: function(e) {
            if ((0, l.default)(e.GTMValue).length > 0 && e.GTMValue.survey) {
              var t = e.GTMValue.survey,
                a = t.questionRate,
                o = t.forbidShowSurvey,
                n = ["m.toutiaocdn.cn"].indexOf(location.hostname) > -1 && ["news_article",
                  "news_article_lite"
                ].indexOf(P.default.request("app")) > -1 && this.random < a && !o ? "gtmRec" : "";
              if (n || this.state.showRecPopInitStats) {
                this.setState({
                  showRecPopInitStats: n || this.state.showRecPopInitStats
                });
                var d = g.default.throttle(this.handleShowPopBox.bind(this), 200);
                window.addEventListener("scroll", d.bind(this), !1)
              }
            }
          }
        }, {
          key: "render",
          value: function() {
            var e = this,
              t = this.props,
              a = t.GTMValue,
              o = t.relatedNewsData,
              n = t.appOnlyData,
              i = t.hotCardData,
              r = void 0 === i ? {} : i,
              s = n.data.length,
              u = a.hideAd || this.props.hideAd || "1" === P.default.request("ft"),
              h = u || !n.data.length || a.hideRecommendation,
              c = u || !o.data.length || a.hideRelateNews,
              p = this.state,
              _ = p.isShowPopBox,
              E = p.showRecPopInitStats,
              b = p.showPopPosition;
            return f.default.createElement("div", {
              className: "recommendation-container"
            }, (0, l.default)(r).length > 0 && y.default.hotCardTest1 && f.default.createElement(w.default, {
              hotCardData: r
            }), !a.hideRecommendation && n.data.length > 0 ? f.default.createElement("div", {
              className: "recommendation-item"
            }, f.default.createElement("h2", {
              className: "container__header",
              key: "appOnly-title"
            }, "热门推荐"), f.default.createElement(m.default, (0, d.default)({
              data: n,
              type: "appOnly"
            }, this.props, {
              appOnlyLength: s
            }))) : null, (0, l.default)(r).length > 0 && g.default.abTest.hotCardTest2 && f.default.createElement(
              w.default, {
                hotCardData: r,
                containStyle: {
                  marginTop: "14px"
                }
              }), f.default.createElement("div", {
              className: "recommendation-item " + (h ? "hide_ad" : ""),
              id: S.default.browser.weixin ? "backflowAd" : "detailAd",
              dangerouslySetInnerHTML: {
                __html: "<div></div>"
              }
            }), !this.hasShowPopEvaluated && E && f.default.createElement(v.default, {
              isShowPopBox: _,
              onCancelClick: function() {
                return e.setState({
                  isShowPopBox: !1
                })
              },
              surveyGTMData: a.survey,
              showRecPopInitStats: E,
              showPopPosition: b
            }), !a.hideRelateNews && o.data.length > 0 ? f.default.createElement("div", {
              className: "recommendation-item"
            }, f.default.createElement("h2", {
              className: "container__header",
              key: "relatedNews-title"
            }, "猜你喜欢"), f.default.createElement(m.default, (0, d.default)({
              data: o,
              type: "relatedNews"
            }, this.props, {
              appOnlyLength: s
            }))) : null, f.default.createElement("div", {
              className: "recommendation-item " + (c ? "hide_ad" : ""),
              id: S.default.browser.weixin ? "backflowAd2" : "detailAd2",
              dangerouslySetInnerHTML: {
                __html: "<div></div>"
              }
            }))
          }
        }]), t
      }(c.Component);
    E.propTypes = {
      GTMValue: p.default.object,
      appOnlyData: p.default.object,
      relatedNewsData: p.default.object,
      hideAd: p.default.bool,
      hotCardData: p.default.string,
      hotSearchList: p.default.array
    }, E.defaultProps = {
      hotCardData: {}
    }, a.default = E
  };
  o.dlyl6Mdw = function(e, t, n, a, o) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = a(e("__gK4WbX")),
      l = a(e("lgLPKmWO")),
      d = a(e("LFxswB00")),
      s = a(e("_3k8jqSq")),
      r = a(e("C_TrCxPr")),
      p = e("zNszyAds"),
      u = a(p),
      c = a(e("CcFRdAGK")),
      h = a(e("fjpkKDAo")),
      f = a(e("k65Ijy_9")),
      w = a(e("IJQXgVIj")),
      m = a(e("zkk8d9NK")),
      g = a(e("XrucwMhA")),
      v = a(e("JKQGrVxs")),
      b = function(e) {
        function t(e) {
          (0, l.default)(this, t);
          var n = (0, s.default)(this, (t.__proto__ || (0, i.default)(t)).call(this, e));
          return n.state = {
              isShowPopBox: !1
            }, n.appName = v.default.appName, n.appDesc = v.default.bottomBanner.slogan, n.appIcon = v.default.bottomBanner
            .logo, n
        }
        return (0, r.default)(t, e), (0, d.default)(t, [{
          key: "handleMaevent",
          value: function(e) {
            var t = e.groupId,
              n = e.uid;
            window.maevent("open_top", "article", 0, 0, {
              group_id: t || "",
              author_id: n || ""
            })
          }
        }, {
          key: "handleOpen",
          value: function() {
            (0, h.default)({
              position: "bottomBanner",
              id: window.group_id,
              item_id: window.item_id,
              gdLabel: "click_" + (f.default.browser.weixin ? "weixin" : "wap") + "_rf_hongbao",
              type: "detail",
              isNewVideo: window.isNewVideoPage
            }), this.props.isInAwemePage ? this.handleMaevent(this.props) : window.maevent(
              "bottom_banner", "click")
          }
        }, {
          key: "onBtnClick",
          value: function() {
            window.isInAwemePage ? this.changeShowPopBox(!0) : this.handleOpen()
          }
        }, {
          key: "changeShowPopBox",
          value: function(e) {
            this.setState({
              isShowPopBox: !!e
            }, function() {
              if (e) {
                document.querySelector(".pop-box-container").addEventListener("touchmove", function(e) {
                  e.preventDefault()
                }, !1)
              }
            })
          }
        }, {
          key: "render",
          value: function() {
            var e = this,
              t = this.props,
              n = t.isInAwemePage,
              a = t.openBtnText,
              o = this.state.isShowPopBox,
              i = n ? f.default.browser.iphoneX ? "banner-suit-iphonex" : "banner-suit-default" : "",
              l = this.appDesc ? this.appName + "·" + this.appDesc : this.appName;
            return "hide" === window.articleType ? u.default.createElement("div", {
              style: {
                height: 64,
                width: "100%"
              }
            }) : u.default.createElement(w.default, {
              gdLabel: "click_wap_rf_hongbao",
              position: "bottomBanner"
            }, u.default.createElement("div", {
              className: "bottom-banner-container show-banner-" + this.props.showBanner + " " + i
            }, u.default.createElement("div", {
              className: "slogan-wrapper"
            }, u.default.createElement("img", {
              src: v.default.logo,
              className: "logo"
            }), u.default.createElement("div", {
              className: "desc-wrapper"
            }, u.default.createElement("span", {
              className: "slogan"
            }, l))), u.default.createElement(m.default, {
              isShowPopBox: o,
              changeShowPopBox: function(t) {
                return e.changeShowPopBox(t)
              },
              PopBoxContent: g.default,
              handleClick: function() {
                return e.onBtnClick()
              },
              activateClick: this.handleOpen.bind(this),
              handleMaevent: this.handleMaevent.bind(this, this.props)
            }, u.default.createElement("div", {
              className: "open"
            }, a))))
          }
        }]), t
      }(p.Component);
    b.propTypes = {
      groupId: c.default.string.isRequired,
      uid: c.default.string,
      isInAwemePage: c.default.bool.isRequired,
      showBanner: c.default.bool,
      openBtnText: c.default.string
    }, b.defaultProps = {
      openBtnText: "打开"
    }, n.default = b
  };
  o.M587MaKa = function(e, i, n, o, t) {
    var r = o(e("qUYrYx_P"));
    ! function(e, n) {
      "function" == typeof define && (define.amd || define.cmd) ? define(function() {
        return n(e)
      }) : i.exports = n(e, !0)
    }(window, function(e, i) {
      function n(i, n, o) {
        e.WeixinJSBridge ? WeixinJSBridge.invoke(i, t(n), function(e) {
          c(i, e, o)
        }) : a(i, o)
      }

      function o(i, n, o) {
        e.WeixinJSBridge ? WeixinJSBridge.on(i, function(e) {
          o && o.trigger && o.trigger(e), c(i, e, n)
        }) : o ? a(i, o) : a(i, n)
      }

      function t(e) {
        return e = e || {}, e.appId = v.appId, e.verifyAppId = v.appId, e.verifySignType = "sha1", e.verifyTimestamp =
          v.timestamp + "", e.verifyNonceStr = v.nonceStr, e.verifySignature = v.signature, e
      }

      function c(e, i, n) {
        var o, t;
        switch (delete i.err_code, delete i.err_desc, delete i.err_detail, (o = i.errMsg) || (o = i.err_msg,
            delete i.err_msg, o = function(e, i) {
              var n, o, t, r;
              if (i) {
                switch (n = i.indexOf(":"), e) {
                  case l.config:
                    o = "config";
                    break;
                  case l.openProductSpecificView:
                    o = "openProductSpecificView";
                    break;
                  default:
                    o = i.substring(0, n), o = o.replace(/_/g, " "), o = o.replace(/\b\w+\b/g, function(e) {
                        return e.substring(0, 1).toUpperCase() + e.substring(1)
                      }), o = o.substring(0, 1).toLowerCase() + o.substring(1), -1 != (o = o.replace(/ /g, ""))
                      .indexOf("Wcpay") && (o = o.replace("Wcpay", "WCPay")), (t = f[o]) && (o = t)
                }
                "confirm" == (r = i.substring(n + 1)) && (r = "ok"), "failed" == r && (r = "fail"), -1 != r.indexOf(
                    "failed_") && (r = r.substring(7)), -1 != r.indexOf("fail_") && (r = r.substring(5)), r = r
                  .replace(/_/g, " "), ("access denied" == (r = r.toLowerCase()) || "no permission to execute" ==
                    r) && (r = "permission denied"), "config" == o && "function not exist" == r && (r = "ok"),
                  i = o + ":" + r
              }
              return i
            }(e, o), i.errMsg = o), (n = n || {})._complete && (n._complete(i), delete n._complete), o = i.errMsg ||
          "", v.debug && !n.isInnerInvoke && alert((0, r.default)(i)), t = o.indexOf(":"), o.substring(t + 1)) {
          case "ok":
            n.success && n.success(i);
            break;
          case "cancel":
            n.cancel && n.cancel(i);
            break;
          default:
            n.fail && n.fail(i)
        }
        n.complete && n.complete(i)
      }

      function s(e) {
        var i, n, o, t;
        if (e) {
          for (i = 0, n = e.length; n > i; ++i) o = e[i], (t = l[o]) && (e[i] = t);
          return e
        }
      }

      function a(e, i) {
        if (v.debug && !i.isInnerInvoke) {
          var n = f[e];
          n && (e = n), i && i._complete && delete i._complete, console.log('"' + e + '",', i || "")
        }
      }

      function d() {
        return (new Date).getTime()
      }

      function u(i) {
        y && (e.WeixinJSBridge ? i() : m.addEventListener && m.addEventListener("WeixinJSBridgeReady", i, !1))
      }

      function p() {
        M.invoke || (M.invoke = function(i, n, o) {
          e.WeixinJSBridge && WeixinJSBridge.invoke(i, t(n), o)
        }, M.on = function(i, n) {
          e.WeixinJSBridge && WeixinJSBridge.on(i, n)
        })
      }
      var l, f, m, g, h, y, _, w, S, I, T, v, k, V, M;
      if (!e.jWeixin) return l = {
        config: "preVerifyJSAPI",
        onMenuShareTimeline: "menu:share:timeline",
        onMenuShareAppMessage: "menu:share:appmessage",
        onMenuShareQQ: "menu:share:qq",
        onMenuShareWeibo: "menu:share:weiboApp",
        previewImage: "imagePreview",
        getLocation: "geoLocation",
        openProductSpecificView: "openProductViewWithPid",
        addCard: "batchAddCard",
        openCard: "batchViewCard",
        chooseWXPay: "getBrandWCPayRequest"
      }, f = function() {
        var e, i = {};
        for (e in l) i[l[e]] = e;
        return i
      }(), m = e.document, g = m.title, h = navigator.userAgent.toLowerCase(), y = -1 != h.indexOf(
        "micromessenger"), _ = -1 != h.indexOf("android"), w = -1 != h.indexOf("iphone") || -1 != h.indexOf(
        "ipad"), S = function() {
        var e = h.match(/micromessenger\/(\d+\.\d+\.\d+)/) || h.match(/micromessenger\/(\d+\.\d+)/);
        return e ? e[1] : ""
      }(), I = {
        initStartTime: d(),
        initEndTime: 0,
        preVerifyStartTime: 0,
        preVerifyEndTime: 0
      }, T = {
        version: 1,
        appId: "",
        initTime: 0,
        preVerifyTime: 0,
        networkType: "",
        isPreVerifyOk: 1,
        systemType: w ? 1 : _ ? 2 : -1,
        clientVersion: S,
        url: encodeURIComponent(location.href)
      }, v = {}, k = {
        _completes: []
      }, V = {
        state: 0,
        res: {}
      }, u(function() {
        I.initEndTime = d()
      }), M = {
        config: function(e) {
          v = e, a("config", e), u(function() {
            n(l.config, {
              verifyJsApiList: s(v.jsApiList)
            }, function() {
              k._complete = function(e) {
                I.preVerifyEndTime = d(), V.state = 1, V.res = e
              }, k.success = function() {
                T.isPreVerifyOk = 0
              }, k.fail = function(e) {
                k._fail ? k._fail(e) : V.state = -1
              };
              var e = k._completes;
              return e.push(function() {
                v.debug || function() {
                  if (!("6.0.2" > S || T.systemType < 0)) {
                    var e = new Image;
                    T.appId = v.appId, T.initTime = I.initEndTime - I.initStartTime, T.preVerifyTime =
                      I.preVerifyEndTime - I.preVerifyStartTime, M.getNetworkType({
                        isInnerInvoke: !0,
                        success: function(i) {
                          T.networkType = i.networkType;
                          var n = "https://open.weixin.qq.com/sdk/report?v=" + T.version +
                            "&o=" + T.isPreVerifyOk + "&s=" + T.systemType + "&c=" + T.clientVersion +
                            "&a=" + T.appId + "&n=" + T.networkType + "&i=" + T.initTime +
                            "&p=" + T.preVerifyTime + "&u=" + T.url;
                          e.src = n
                        }
                      })
                  }
                }()
              }), k.complete = function(i) {
                for (var n = 0, o = e.length; o > n; ++n) e[n](i);
                k._completes = []
              }, k
            }()), I.preVerifyStartTime = d()
          }), v.beta && p()
        },
        ready: function(e) {
          0 != V.state ? e() : (k._completes.push(e), !y && v.debug && e())
        },
        error: function(e) {
          "6.0.2" > S || (-1 == V.state ? e(V.res) : k._fail = e)
        },
        checkJsApi: function(e) {
          n("checkJsApi", {
            jsApiList: s(e.jsApiList)
          }, (e._complete = function(e) {
            if (_) {
              var i = e.checkResult;
              i && (e.checkResult = JSON.parse(i))
            }
            e = function(e) {
              var i, n, o = e.checkResult;
              for (i in o)(n = f[i]) && (o[n] = o[i], delete o[i]);
              return e
            }(e)
          }, e))
        },
        onMenuShareTimeline: function(e) {
          o(l.onMenuShareTimeline, {
            complete: function() {
              n("shareTimeline", {
                title: e.title || g,
                desc: e.title || g,
                img_url: e.imgUrl,
                link: e.link || location.href
              }, e)
            }
          }, e)
        },
        onMenuShareAppMessage: function(e) {
          o(l.onMenuShareAppMessage, {
            complete: function() {
              n("sendAppMessage", {
                title: e.title || g,
                desc: e.desc || "",
                link: e.link || location.href,
                img_url: e.imgUrl,
                type: e.type || "link",
                data_url: e.dataUrl || ""
              }, e)
            }
          }, e)
        },
        onMenuShareQQ: function(e) {
          o(l.onMenuShareQQ, {
            complete: function() {
              n("shareQQ", {
                title: e.title || g,
                desc: e.desc || "",
                img_url: e.imgUrl,
                link: e.link || location.href
              }, e)
            }
          }, e)
        },
        onMenuShareWeibo: function(e) {
          o(l.onMenuShareWeibo, {
            complete: function() {
              n("shareWeiboApp", {
                title: e.title || g,
                desc: e.desc || "",
                img_url: e.imgUrl,
                link: e.link || location.href
              }, e)
            }
          }, e)
        },
        startRecord: function(e) {
          n("startRecord", {}, e)
        },
        stopRecord: function(e) {
          n("stopRecord", {}, e)
        },
        onVoiceRecordEnd: function(e) {
          o("onVoiceRecordEnd", e)
        },
        playVoice: function(e) {
          n("playVoice", {
            localId: e.localId
          }, e)
        },
        pauseVoice: function(e) {
          n("pauseVoice", {
            localId: e.localId
          }, e)
        },
        stopVoice: function(e) {
          n("stopVoice", {
            localId: e.localId
          }, e)
        },
        onVoicePlayEnd: function(e) {
          o("onVoicePlayEnd", e)
        },
        uploadVoice: function(e) {
          n("uploadVoice", {
            localId: e.localId,
            isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
          }, e)
        },
        downloadVoice: function(e) {
          n("downloadVoice", {
            serverId: e.serverId,
            isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
          }, e)
        },
        translateVoice: function(e) {
          n("translateVoice", {
            localId: e.localId,
            isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
          }, e)
        },
        chooseImage: function(e) {
          n("chooseImage", {
            scene: "1|2",
            count: e.count || 9,
            sizeType: e.sizeType || ["original", "compressed"]
          }, (e._complete = function(e) {
            if (_) {
              var i = e.localIds;
              i && (e.localIds = JSON.parse(i))
            }
          }, e))
        },
        previewImage: function(e) {
          n(l.previewImage, {
            current: e.current,
            urls: e.urls
          }, e)
        },
        uploadImage: function(e) {
          n("uploadImage", {
            localId: e.localId,
            isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
          }, e)
        },
        downloadImage: function(e) {
          n("downloadImage", {
            serverId: e.serverId,
            isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
          }, e)
        },
        getNetworkType: function(e) {
          n("getNetworkType", {}, (e._complete = function(e) {
            e = function(e) {
              var i, n, o, t = e.errMsg;
              if (e.errMsg = "getNetworkType:ok", i = e.subtype, delete e.subtype, i) e.networkType =
                i;
              else switch (n = t.indexOf(":"), o = t.substring(n + 1)) {
                case "wifi":
                case "edge":
                case "wwan":
                  e.networkType = o;
                  break;
                default:
                  e.errMsg = "getNetworkType:fail"
              }
              return e
            }(e)
          }, e))
        },
        openLocation: function(e) {
          n("openLocation", {
            latitude: e.latitude,
            longitude: e.longitude,
            name: e.name || "",
            address: e.address || "",
            scale: e.scale || 28,
            infoUrl: e.infoUrl || ""
          }, e)
        },
        getLocation: function(e) {
          e = e || {}, n(l.getLocation, {
            type: e.type || "wgs84"
          }, (e._complete = function(e) {
            delete e.type
          }, e))
        },
        hideOptionMenu: function(e) {
          n("hideOptionMenu", {}, e)
        },
        showOptionMenu: function(e) {
          n("showOptionMenu", {}, e)
        },
        closeWindow: function(e) {
          n("closeWindow", {
            immediate_close: (e = e || {}).immediateClose || 0
          }, e)
        },
        hideMenuItems: function(e) {
          n("hideMenuItems", {
            menuList: e.menuList
          }, e)
        },
        showMenuItems: function(e) {
          n("showMenuItems", {
            menuList: e.menuList
          }, e)
        },
        hideAllNonBaseMenuItem: function(e) {
          n("hideAllNonBaseMenuItem", {}, e)
        },
        showAllNonBaseMenuItem: function(e) {
          n("showAllNonBaseMenuItem", {}, e)
        },
        scanQRCode: function(e) {
          n("scanQRCode", {
            needResult: (e = e || {}).needResult || 0,
            scanType: e.scanType || ["qrCode", "barCode"]
          }, (e._complete = function(e) {
            var i, n;
            w && (i = e.resultStr) && (n = JSON.parse(i), e.resultStr = n && n.scan_code && n.scan_code
              .scan_result)
          }, e))
        },
        openProductSpecificView: function(e) {
          n(l.openProductSpecificView, {
            pid: e.productId,
            view_type: e.viewType || 0
          }, e)
        },
        addCard: function(e) {
          var i, o, t, r, c = e.cardList,
            s = [];
          for (i = 0, o = c.length; o > i; ++i) r = {
            card_id: (t = c[i]).cardId,
            card_ext: t.cardExt
          }, s.push(r);
          n(l.addCard, {
            card_list: s
          }, (e._complete = function(e) {
            var i, n, o, t = e.card_list;
            if (t) {
              for (i = 0, n = (t = JSON.parse(t)).length; n > i; ++i)(o = t[i]).cardId = o.card_id,
                o.cardExt = o.card_ext, o.isSuccess = !!o.is_succ, delete o.card_id, delete o.card_ext,
                delete o.is_succ;
              e.cardList = t, delete e.card_list
            }
          }, e))
        },
        chooseCard: function(e) {
          n("chooseCard", {
            app_id: v.appId,
            location_id: e.shopId || "",
            sign_type: e.signType || "SHA1",
            card_id: e.cardId || "",
            card_type: e.cardType || "",
            card_sign: e.cardSign,
            time_stamp: e.timestamp + "",
            nonce_str: e.nonceStr
          }, (e._complete = function(e) {
            e.cardList = e.choose_card_info, delete e.choose_card_info
          }, e))
        },
        openCard: function(e) {
          var i, o, t, r, c = e.cardList,
            s = [];
          for (i = 0, o = c.length; o > i; ++i) r = {
            card_id: (t = c[i]).cardId,
            code: t.code
          }, s.push(r);
          n(l.openCard, {
            card_list: s
          }, e)
        },
        chooseWXPay: function(e) {
          n(l.chooseWXPay, function(e) {
            return {
              timeStamp: e.timestamp + "",
              nonceStr: e.nonceStr,
              package: e.package,
              paySign: e.paySign,
              signType: e.signType || "SHA1"
            }
          }(e), e)
        }
      }, i && (e.wx = e.jWeixin = M), M
    })
  };
  o._K8cjoRe = function(e, n, o, a, t) {
    var c = a(e("M587MaKa"));
    window.weixin = "undefined" == typeof weixin ? {} : weixin, window.wx = void 0 === c.default ? {} : c.default,
      wx.onReady = weixin.onReady = function(n, o) {
        var a = (o = e("_6BrwHiQ").extend({}, o, {
            debug: !1
          })).nonceStr || "Wm3WZYTPz0wzccnW",
          t = Date.now(),
          c = o.appId || function() {
            var e = "wxe8b89be1715734a6";
            return {
              "m.toutiao.com": e,
              "m.zjurl.cn": "wx53fcf3395bc0fe5e",
              "m.365yg.com": "wx53fcf3395bc0fe5e",
              "m.pstatp.com": e,
              "m.toutiaocdn.cn": "wx0830be3d2916edb9",
              "m.toutiaocdn.com": "wx0830be3d2916edb9",
              "m.toutiaocdn.net": "wxb790c4f1d0f9ce85",
              "m.toutiaoimg.cn": "wxb790c4f1d0f9ce85",
              "m.toutiao11.com": "wxb790c4f1d0f9ce85",
              "m.toutiaolite.com": "wxbfa5d32ab7a07e44"
            } [location.host] || e
          }() || "wxe8b89be1715734a6",
          i = o.debug || !1;
        e("_6BrwHiQ").ajax({
          type: "GET",
          dataType: "jsonp",
          jsonp: "callback",
          data: {
            appid: c,
            noncestr: a,
            timestamp: t,
            url: window.location.href
          },
          url: "//open.snssdk.com/jssdk_signature/",
          success: function(e) {
            1 == e.code && wx.config({
              debug: i,
              appId: c,
              timestamp: t,
              nonceStr: a,
              signature: e.signature,
              jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage"]
            }), wx.ready(function() {
              n && n.apply(wx, arguments)
            }), wx.error(function(e) {}), o.always && o.always(e)
          }
        })
      }
  };
  o.MSxRryrO = function(a, t, o, e, l) {
    var r = e(a("qUYrYx_P"));
    t.exports = {
      actionLog: function(t) {
        var o = {
          label: t.label,
          value: t.value,
          tag: t.tag || "go_detail",
          extra_data: (0, r.default)(t.extra_data || {})
        };
        a("_6BrwHiQ").post("/log/action/", o)
      }
    }
  };
  o.bbi_lWRG = function(a, e, p, _, l) {
    e.exports = {
      CODEID: {
        wap_app_special: "14798012085000246",
        wap_related_article: "14799599715000246",
        wap_slide_banner: "14818696195000246"
      },
      COMMONNUM: {
        wap_app_special: 5,
        wap_related_article: 15,
        wap_slide_banner: 3
      }
    }
  };
  o.H_B8zgh4 = function(e, t, a, n, o) {
    Object.defineProperty(a, "__esModule", {
      value: !0
    }), a.WeixinShare = void 0;
    var l = n(e("lT_XwWMZ")),
      i = n(e("__gK4WbX")),
      d = n(e("lgLPKmWO")),
      r = n(e("LFxswB00")),
      s = n(e("_3k8jqSq")),
      c = n(e("C_TrCxPr")),
      u = n(e("zNszyAds")),
      m = n(e("dLqIczAI")),
      p = n(e("AZhaX9o4")),
      h = e("bbi_lWRG"),
      _ = n(e("E7MLSnqQ")),
      f = e("rOR5taG0"),
      w = n(e("w_0l9lJZ")),
      g = n(e("fjpkKDAo")),
      v = n(e("k65Ijy_9"));
    a.WeixinShare = function(e) {
      function t(e) {
        (0, d.default)(this, t);
        var a = (0, s.default)(this, (t.__proto__ || (0, i.default)(t)).call(this, e));
        return (0, w.default)(), a.state = {
          feedList: []
        }, a.shareScrollTop = 0, a
      }
      return (0, c.default)(t, e), (0, r.default)(t, [{
        key: "componentDidMount",
        value: function() {
          this.fetchRecommendation()
        }
      }, {
        key: "fetchRecommendation",
        value: function() {
          var e = this,
            t = {
              parent_rid: window.parent_rid || "",
              page_type: "article",
              share_iid: _.default.request("iid") || "",
              share_app_name: _.default.request("app") || "",
              wx_share_count: 2,
              site_id: 5000251,
              num: [3],
              code_id: [h.CODEID.wap_app_special],
              only_related_rec: 0,
              except_page: ""
            };
          (0, f.fetchCommonData)(window.group_id, t, function(t) {
            var a = [];
            t.data && (a = (a = t.data[h.CODEID.wap_app_special] || []).map(function(e) {
                return e.image_list && e.image_list.length >= 3 && (e.image_list = e.image_list.slice(
                  0, 1)), e
              })), window.maevent("weixin_share", "recommend", a.length.toString()), 0 !== a.length &&
              (window.maevent("pageview", "weixin_share"), e.shareScrollTop = document.body.scrollTop ||
                document.documentElement.scrollTop, document.body.classList.add("modal-open"), e.setState({
                  feedList: a
                }))
          })
        }
      }, {
        key: "handleReadAgainClick",
        value: function() {
          var e = document.querySelector(".weixin-share-portal");
          e && (document.body.classList.remove("modal-open"), document.body.style.top = "0px", document
            .body.scrollTop = document.documentElement.scrollTop = this.shareScrollTop, m.default.unmountComponentAtNode(
              e))
        }
      }, {
        key: "handleDownload",
        value: function() {
          var e = {
            downloadLink: v.default.os.android ? "https://d.toutiao.com/F54a/" : "https://d.toutiao.com/5dwY/",
            gdLabel: "click_rf_weixin_share_again",
            type: "home",
            position: "shareBottomBanner",
            isNewVideo: !1
          };
          (0, g.default)(e)
        }
      }, {
        key: "render",
        value: function() {
          var e = this,
            t = this.state.feedList;
          return 0 === t.length ? null : u.default.createElement("div", {
            className: "share-container"
          }, u.default.createElement("div", {
            className: "share-top"
          }, u.default.createElement("span", {
            className: "share-success"
          }, "分享成功"), u.default.createElement("span", {
            className: "share-continue",
            onClick: function() {
              return e.handleReadAgainClick()
            }
          }, "继续阅读")), u.default.createElement("div", {
            className: "share-recommend"
          }, u.default.createElement(p.default, (0, l.default)({
            data: {
              data: t
            },
            type: "appOnly"
          }, this.props, {
            appOnlyLength: t.length,
            GTMValue: {},
            isWeixinSharePage: !0
          }))), u.default.createElement("div", {
            className: "share-more-btn",
            onClick: function() {
              return e.handleDownload()
            }
          }, "下载APP查看更多"))
        }
      }]), t
    }(u.default.Component)
  };
  o._y4VAr79 = function(e, t, n, a, i) {
    function r() {
      var e = location.host,
        t = location.pathname,
        n = [location.protocol, "//", e, t, location.search, location.hash].join("");
      if (location.search)
        if (-1 === (location.search || "").indexOf("wxshare_count=")) n = n.replace(location.search, location.search +
          "&wxshare_count=2");
        else {
          var a = s.default.request("wxshare_count") || "0";
          a = a ? parseInt(a) + 1 : 0, n = n.replace("wxshare_count=" + s.default.request("wxshare_count"),
            "wxshare_count=" + a)
        }
      else n += "?wxshare_count=2";
      n = n.replace("__tt_rbl=1&", "").replace("__tt_rbl=1", "");
      var i = p;
      return -1 === n.indexOf("pbid=") ? n += "&pbid=" + i : n = n.replace(/pbid=(\d+)/gi, "pbid=" + i), n
    }

    function o() {
      return window.title
    }

    function c() {
      var t = document.querySelector("article .article__content img"),
        n = document.querySelector(".tt-video"),
        a = n ? e("_6BrwHiQ")(n).attr("data-tt-poster") : null;
      return a || (a = t ? t.getAttribute("data-src") || t.src :
        "https://p3.pstatp.com/large/113f2000647359d21b305"), a
    }

    function l() {
      u.default.browser.weixin && "weixin" in window && window.weixin.onReady(function() {
        var t = o(),
          n = c(),
          a = r(),
          i = function() {
            var t = e("_6BrwHiQ")("meta[name=description]").attr("content");
            return (t || "").indexOf("(TouTiao.com)") > -1 ? "来今日头条，看更多精彩新闻" : t
          }();
        window.wx.onMenuShareTimeline && window.wx.onMenuShareTimeline({
          title: t,
          desc: i,
          link: a,
          imgUrl: n,
          success: function() {
            window.gaevent("share_success", "share", location.hostname + location.pathname), window.maevent(
              "article", "share_again", "moments"), ["news_article", "news_article_lite"].indexOf(s.default
              .request("app")) > -1 && (0, h.render)(w.default.createElement(_.WeixinShare, null),
              document.querySelector(".weixin-share-portal"))
          },
          cancel: function() {}
        }), window.wx.onMenuShareAppMessage && window.wx.onMenuShareAppMessage({
          title: t,
          desc: i,
          link: a,
          imgUrl: n,
          success: function() {
            window.gaevent("share_success", "share", location.hostname + location.pathname), window.maevent(
              "article", "share_again", "person"), ["news_article", "news_article_lite"].indexOf(s.default
              .request("app")) > -1 && (0, h.render)(w.default.createElement(_.WeixinShare, null),
              document.querySelector(".weixin-share-portal"))
          }
        })
      }, {
        always: function() {}
      })
    }
    var s = a(e("E7MLSnqQ")),
      u = a(e("k65Ijy_9")),
      d = e("MSxRryrO"),
      w = a(e("zNszyAds")),
      h = e("dLqIczAI"),
      _ = e("H_B8zgh4");
    e("_K8cjoRe");
    var p = s.default.cookie("tt_webid") || "0";
    window.getShareLink = r, window.getShareTitle = o, window.getShareImage = c, e("_6BrwHiQ")(function() {
      ! function() {
        var e = s.default.request("iid") || "0",
          t = s.default.request("pbid") || "0",
          n = p;
        ("0" !== e || "0" !== t) && (0, d.actionLog)({
          label: "growth_wx_share_depth",
          value: n,
          extra_data: {
            iid: e,
            pbid: t,
            bid: n,
            wxshare_count: s.default.request("wxshare_count") || 1,
            item_id: window.item_id || 0,
            group_id: window.group_id || 0
          }
        })
      }()
    }), t.exports = {
      init: l
    }
  };
  o.XAGz6_bG = function(e, t, n, a, i) {
    function o() {}

    function s() {
      return !window.isListPage && g.default.browser.weixin
    }

    function d(e, t, n, a, i) {
      console.log("ga:" + e + "," + t + "," + n), window.ga("send", "event", e, t, n, void 0 !== a ? a : 1, i)
    }

    function r(e) {
      window.ga("send", "pageview", location.pathname + location.search + location.hash), console.log(
        "ga:pageview", location.pathname + location.search + location.hash)
    }

    function w() {
      ! function() {
        if (!/micromessenger/i.test(navigator.userAgent)) return !1;
        var e = f.default.ttSessionStorage.getItem("weixinlist_query"),
          t = f.default.ttSessionStorage.getItem("weixinlist_count");
        if (t) {
          var n = m.default.request(),
            a = location.hash,
            i = n;
          if (f.default.ttSessionStorage.setItem("weixinlist_count", Number(t || 0) + 1), e) {
            var o = location.pathname + "?" + e;
            history.replaceState(null, null, o);
            var s = m.default.request();
            i = (0, u.default)({}, n, s)
          }
          i = (0, u.default)({}, i, {
            weixin_list: 1
          });
          var d = (0, l.default)(i).map(function(e) {
              return e + "=" + i[e]
            }).join("&"),
            r = location.pathname + "?" + d + a;
          history.replaceState(null, null, r)
        }
      }(),
      function(e, t, n, a, i, o, s) {
        e.GoogleAnalyticsObject = i, e.ga = e.ga || function() {
            (e.ga.q = e.ga.q || []).push(arguments)
          }, e.ga.l = 1 * new Date, o = t.createElement(n), s = t.getElementsByTagName(n)[0], o.async = 1, o.src =
          "//www.google-analytics.com/analytics.js", o.dataset.from = "toutiao", s.parentNode.insertBefore(o, s)
      }(window, document, "script", 0, "ga"), window.ga("create", "UA-28423340-36", "auto", "testTracker", {
          siteSpeedSampleRate: 100
        }), window.gaeventTest = function(e, t, n, a, i) {
          console.log("gaTest:" + e + "," + t + "," + n), "event" !== e && window.ga("testTracker.send", "event",
            e, t, n, void 0 !== a ? a : 1, i)
        },
        function() {
          var e = 20;
          s() && (e = 1);
          var t = f.default.getTTWebID,
            n = null !== t ? parseInt(Math.floor(t / 10)) % 1e3 : void 0;
          return !isNaN(n) && n >= 1 && n <= e
        }() && (! function() {
          var e = 17;
          s() && (e = 16);
          var t = "UA-28423340-" + e;
          navigator.userAgent.indexOf("ArticleStreamSdk") > -1 && (t = "UA-28423340-11"), window.ga("create", t,
            "auto", {
              siteSpeedSampleRate: 100
            })
        }(), function() {
          var e = m.default.request("wxshare_count");
          !isNaN(e) && e > 0 && window.ga("set", "dimension1", e);
          var t = m.default.request("wxshare_banner");
          !isNaN(t) && t > 0 && window.ga("set", "dimension10", t);
          var n = m.default.request("readmore");
          if (!isNaN(n) && n > 0 && window.ga("set", "dimension2", n), window.tag && window.ga("set",
              "dimension4", window.tag), window.ga("set", "dimension5", window.isNewVideoPage ? 1 : 0), s()) {
            var a = m.default.request("app");
            a && window.ga("set", "dimension6", a);
            var i = m.default.request("utm_medium");
            i && window.ga("set", "dimension7", i);
            var o = m.default.request("isappinstalled");
            !isNaN(o) && o >= 0 && window.ga("set", "dimension8", o - 0 ? 1 : 0), window.ga("set",
              "dimension13", location.protocol.slice(0, -1)), window.ga("set", "dimension14", m.default.request(
              "from")), window.ga("set", "dimension17", m.default.request("share_type"))
          } else window.ga(function(e) {
            var t = e.get("clientId");
            window.ga("set", "dimension7", t)
          }), window.ga("set", "dimension6", m.default.getBrowserName()), window.ga("set", "dimension8",
            navigator.userAgent), window.ga("set", "dimension9", window.city || ""), window.ga("set",
            "dimension11", location.protocol.slice(0, -1));
          var d = location.pathname;
          d && -1 !== d.indexOf("/sem/") && m.default.request("atdl") && window.ga("set", "dimension5", m.default
            .request("atdl")), "1" === m.default.request("ly") && window.ga("set", "dimension20", "open_feed");
          var r = m.default.request("timestamp");
          if (r) {
            var w = f.default.formatDate(new Date(Number(1e3 * r)), "yyyyMMddhh");
            window.ga("set", "dimension19", w)
          }
        }(), function() {
          var e = location.pathname;
          e && -1 !== e.indexOf("/sem/") ? (m.default.request("atdl") && window.ga("set", "dimension5", m.default
            .request("atdl")), window.ga("send", "pageview", {
            page: e
          })) : ("1" === (f.default.ttSessionStorage.getItem("weixinlist_count") || "1") && window.ga("set",
            "dimension12", "first"), window.ga("send", "pageview", location.pathname + location.search +
            location.hash))
        }(), s() || function() {
          var e = document.createElement("script");
          e.src = "//hm.baidu.com/hm.js?23e756494636a870d09e32c92e64fdd6";
          var t = document.getElementsByTagName("script")[0];
          t.parentNode.insertBefore(e, t)
        }(), function() {
          var t = new Image;
          t.src = location.protocol + "//" + location.hostname + "/__utm.gif?utmp=" + encodeURIComponent(
            location.href), t.onload = function(t) {
            e("_6BrwHiQ")(this).remove()
          }, e("_6BrwHiQ")(function() {
            e("_6BrwHiQ")("body").append(t)
          }), window.addEventListener("error", function(e, t, n) {
            var a = e,
              i = t,
              o = n;
            "object" === (void 0 === e ? "undefined" : (0, c.default)(e)) && (a = e.message, i = e.fileName,
              o = e.lineNumber);
            var s = "[" + i + " (" + o + ")]" + a;
            Math.floor(100 * Math.random()) < 10 && window.ga("send", "exception", {
              exDescription: s,
              exFatal: !1
            })
          })
        }(), window.gaevent = d, window.resendGA = r)
    }
    var l = a(e("_l59FVJy")),
      u = a(e("rCvC6Owx")),
      c = a(e("_YselYzt")),
      g = a(e("k65Ijy_9")),
      m = a(e("E7MLSnqQ")),
      f = a(e("oYLqwKZ3"));
    window.gaevent = o, window.gaqpush = o, window.resendGA = o, window.gaeventTest = o, window._taq = window._taq ||
      [], t.exports = {
        init: w
      }
  };
  o.V176ShfY = function(e, t, n, r, i) {
    function o(e, t) {
      var n = e.exec(t);
      return n && n[1] ? n[1] : ""
    }

    function a(e) {
      return e ? (e ^ 16 * Math.random() >> e / 4).toString(10) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(
        /[018]/g, a)
    }
    var s = r(e("V4Ce3JJs")),
      u = r(e("IUH_e8R9")),
      c = r(e("qUYrYx_P")),
      d = r(e("cCAO4Eai")),
      l = r(e("_l59FVJy")),
      f = r(e("rCvC6Owx")),
      _ = r(e("aTcJE_x5")),
      p = r(e("dAbh41uH")),
      h = r(e("_YselYzt"));
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var v = f.default || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
      },
      g = void 0,
      m = function e() {
        var t = this;
        (function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        })(this, e), this.set = function(e, n) {
          var r = e,
            i = n;
          if (null === i) return !1;
          var o = "";
          if (r.indexOf(".") > -1) {
            var a = r.split(".");
            o = a[0], r = a[1]
          }
          "os_version" === r && (i = "" + i), o ? "user" === o || "header" === o ? t.envInfo[o][r] = i :
            "headers" === o ? t.envInfo.header.headers[r] = i : t.envInfo.header.headers.custom[r] = i : t.envInfo
            .user.hasOwnProperty(r) ? ["user_type", "device_id", "ip_addr_id"].indexOf(r) > -1 ? t.envInfo.user[
              r] = Number(i) : ["user_id", "web_id", "user_unique_id", "ssid"].indexOf(r) > -1 ? t.envInfo.user[
              r] = String(i) : ["user_is_auth", "user_is_login"].indexOf(r) > -1 && (t.envInfo.user[r] =
              Boolean(i)) : t.envInfo.header.hasOwnProperty(r) ? t.envInfo.header[r] = i : t.envInfo.header.headers
            .hasOwnProperty(r) ? t.envInfo.header.headers[r] = i : t.envInfo.header.headers.custom[r] = i
        }, this.get = function() {
          for (var e = {
              user: {},
              header: {
                headers: {
                  custom: {}
                }
              }
            }, n = t.envInfo, r = n.user, i = (0, l.default)(r), o = Array.isArray(i), a = 0, i = o ? i : (0,
              d.default)(i);;) {
            var s;
            if (o) {
              if (a >= i.length) break;
              s = i[a++]
            } else {
              if ((a = i.next()).done) break;
              s = a.value
            }
            var u = s;
            r[u] !== g && (e.user[u] = r[u])
          }
          for (var c = n.header, f = (0, l.default)(c), _ = Array.isArray(f), p = 0, f = _ ? f : (0, d.default)
              (f);;) {
            var h;
            if (_) {
              if (p >= f.length) break;
              h = f[p++]
            } else {
              if ((p = f.next()).done) break;
              h = p.value
            }
            var m = h;
            c[m] !== g && "headers" !== m && (e.header[m] = c[m])
          }
          for (var y = n.header.headers, b = (0, l.default)(y), w = Array.isArray(b), k = 0, b = w ? b : (0, d.default)
              (b);;) {
            var S;
            if (w) {
              if (k >= b.length) break;
              S = b[k++]
            } else {
              if ((k = b.next()).done) break;
              S = k.value
            }
            var C = S;
            "custom" !== C && y[C] !== g && (e.header.headers[C] = y[C])
          }
          var E = n.header.headers.custom,
            z = (0, l.default)(E);
          if (z.length)
            for (var I = z, O = Array.isArray(I), T = 0, I = O ? I : (0, d.default)(I);;) {
              var R;
              if (O) {
                if (T >= I.length) break;
                R = I[T++]
              } else {
                if ((T = I.next()).done) break;
                R = T.value
              }
              var x = R;
              e.header.headers.custom[x] = E[x]
            }
          return {
            user: e.user,
            header: v({}, e.header, {
              headers: e.header.headers
            })
          }
        }, this.envInfo = {
          user: {
            user_unique_id: g,
            user_type: g,
            user_id: g,
            user_is_auth: g,
            user_is_login: g,
            device_id: g,
            web_id: g,
            ip_addr_id: g,
            ssid: g
          },
          header: {
            app_id: g,
            app_name: g,
            app_install_id: g,
            app_package: g,
            app_channel: g,
            app_version: g,
            os_name: g,
            os_version: g,
            device_model: g,
            ab_client: g,
            ab_version: g,
            traffic_type: g,
            utm_source: g,
            utm_medium: g,
            utm_campaign: g,
            client_ip: g,
            device_brand: g,
            os_api: g,
            access: g,
            language: g,
            region: g,
            app_language: g,
            app_region: g,
            creative_id: g,
            ad_id: g,
            campaign_id: g,
            log_type: g,
            rnd: g,
            platform: g,
            sdk_version: g,
            province: g,
            city: g,
            timezone: g,
            tz_offset: g,
            tz_name: g,
            sim_region: g,
            carrier: g,
            resolution: g,
            browser: g,
            browser_version: g,
            referrer: g,
            referrer_host: g,
            headers: {
              utm_term: g,
              utm_content: g,
              custom: {}
            }
          }
        }
      },
      y = function(e) {
        var t = document.createElement("a");
        return t.href = e, t
      },
      b = screen.width || 0,
      w = screen.height || 0,
      k = b + " x " + w,
      S = navigator.appVersion,
      C = navigator.userAgent,
      E = navigator.language,
      z = document.referrer,
      I = y(z).hostname,
      O = function(e) {
        var t = y(e).search,
          n = {};
        return (t = t.slice(1)).split("&").forEach(function(e) {
          var t = e.split("="),
            r = t[0],
            i = t[1];
          n[r] = decodeURIComponent(void 0 === i ? "" : i)
        }), n
      }(location.href),
      T = "",
      R = "",
      x = "",
      q = "" + parseFloat(S),
      D = void 0,
      A = void 0; - 1 !== (D = C.indexOf("Opera")) && (x = "Opera", q = C.substring(D + 6), -1 !== (D = C.indexOf(
        "Version")) && (q = C.substring(D + 8))), -1 !== (D = C.indexOf("Edge")) ? (x = "Microsoft Edge", q = C.substring(
        D + 5)) : -1 !== (D = C.indexOf("MSIE")) ? (x = "Microsoft Internet Explorer", q = C.substring(D + 5)) :
      -1 !== (D = C.indexOf("Chrome")) ? (x = "Chrome", q = C.substring(D + 7)) : -1 !== (D = C.indexOf("Safari")) ?
      (x = "Safari", q = C.substring(D + 7), -1 !== (D = C.indexOf("Version")) && (q = C.substring(D + 8))) : -1 !==
      (D = C.indexOf("Firefox")) && (x = "Firefox", q = C.substring(D + 8)), -1 !== (A = q.indexOf(";")) && (q =
        q.substring(0, A)), -1 !== (A = q.indexOf(" ")) && (q = q.substring(0, A)), -1 !== (A = q.indexOf(")")) &&
      (q = q.substring(0, A));
    for (var P = /Mobile|htc|mini|Android|iP(ad|od|hone)/.test(S) ? "wap" : "web", M = [{
        s: "Windows 10",
        r: /(Windows 10.0|Windows NT 10.0)/
      }, {
        s: "Windows 8.1",
        r: /(Windows 8.1|Windows NT 6.3)/
      }, {
        s: "Windows 8",
        r: /(Windows 8|Windows NT 6.2)/
      }, {
        s: "Windows 7",
        r: /(Windows 7|Windows NT 6.1)/
      }, {
        s: "Android",
        r: /Android/
      }, {
        s: "Sun OS",
        r: /SunOS/
      }, {
        s: "Linux",
        r: /(Linux|X11)/
      }, {
        s: "iOS",
        r: /(iPhone|iPad|iPod)/
      }, {
        s: "Mac OS X",
        r: /Mac OS X/
      }, {
        s: "Mac OS",
        r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
      }], U = 0; U < M.length; U++) {
      var N = M[U];
      if (N.r.test(C)) {
        T = N.s;
        break
      }
    }
    switch (/Windows/.test(T) && (R = o(/Windows (.*)/, T), T = "windows"), T) {
      case "Mac OS X":
        R = o(/Mac OS X (10[\.\_\d]+)/, C), T = "mac";
        break;
      case "Android":
        R = function(e) {
          var t = o(/Android ([\.\_\d]+)/, e);
          return t || (t = o(/Android\/([\.\_\d]+)/, e)), t
        }(C), T = "android";
        break;
      case "iOS":
        R = (R = /OS (\d+)_(\d+)_?(\d+)?/.exec(S)) ? R[1] + "." + R[2] + "." + (0 | R[3]) : "", T = "ios"
    }
    var j = {
        screen_size: k,
        browser: x,
        browser_version: q,
        platform: P,
        os_name: T,
        os_version: R,
        userAgent: C,
        screen_width: b,
        screen_height: w,
        device_model: T,
        language: E,
        referrer: z,
        referrer_host: I,
        utm_source: O.utm_source,
        utm_medium: O.utm_medium,
        utm_campaign: O.utm_campaign,
        utm_term: O.utm_term,
        utm_content: O.utm_content
      },
      L = function e() {
        var t = this;
        (function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        })(this, e), this.setItem = function(e, n) {
          t.cache[e] = n
        }, this.getItem = function(e) {
          return t.cache[e]
        }, this.removeItem = function(e) {
          t.cache[e] = void 0
        }, this.clear = function() {
          t.cache = {}
        }, this.cache = {}
      };
    new L;
    var K = {
        getItem: function(e) {
          try {
            var t = localStorage.getItem(e),
              n = t;
            try {
              t && "string" == typeof t && (n = JSON.parse(t))
            } catch (e) {}
            return n || void 0
          } catch (e) {}
        },
        setItem: function(e, t) {
          try {
            var n = "string" == typeof t ? t : (0, c.default)(t);
            localStorage.setItem(e, n)
          } catch (e) {}
        },
        removeItem: function(e) {
          try {
            localStorage.removeItem(e)
          } catch (e) {}
        },
        clear: function() {
          try {
            localStorage.clear()
          } catch (e) {}
        },
        isSupportLS: function() {
          try {
            return localStorage.setItem("_____tea-sdk-test-key", "hi"), localStorage.getItem(
              "_____tea-sdk-test-key"), localStorage.removeItem("_____tea-sdk-test-key"), !0
          } catch (e) {
            return !1
          }
        }()
      },
      F = function() {
        function e() {
          var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e);
          var n = !t && K.isSupportLS;
          this._storage = n ? K : new L
        }
        return e.prototype.getItem = function(e) {
          return this._storage.getItem(e)
        }, e.prototype.setItem = function(e, t) {
          this._storage.setItem(e, t)
        }, e.prototype.removeItem = function(e) {
          this._storage.removeItem(e)
        }, e.prototype.clear = function() {
          this._storage.clear()
        }, e
      }(),
      W = "__tea_cache_",
      V = {
        NO_URL_PREFIX: 4001,
        IMG_ON_ERROR: 4e3,
        IMG_CATCH_ERROR: 4002,
        BEACON_STATUS_FALSE: 4003,
        XHR_ON_ERROR: 500,
        RESPONSE_DATA_ERROR: 5001
      },
      X = "function" == typeof u.default && "symbol" == (0, h.default)(s.default) ? function(e) {
        return void 0 === e ? "undefined" : (0, h.default)(e)
      } : function(e) {
        return e && "function" == typeof u.default && e.constructor === u.default && e !== u.default.prototype ?
          "symbol" : void 0 === e ? "undefined" : (0, h.default)(e)
      },
      H = function e() {
        var t = this,
          n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        (function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        })(this, e), this.init = function(e) {
          t.isLog = e
        }, this.info = function(e) {
          for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[
            i];
          if (t.isLog) {
            var o;
            (o = console).log.apply(o, [t.prefix + e].concat(r))
          }
        }, this.warn = function(e) {
          for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[
            i];
          if (t.isLog) {
            var o;
            (o = console).warn.apply(o, [t.prefix + e].concat(r))
          }
        }, this.error = function(e) {
          for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[
            i];
          if (t.isLog) {
            var o;
            (o = console).error.apply(o, [t.prefix + e].concat(r))
          }
        }, this.dir = function() {
          if (t.isLog) {
            var e;
            (e = console).dir.apply(e, arguments)
          }
        }, this.table = function(e) {
          t.isLog && console.table(e)
        }, this.logJSON = function(e) {
          "object" === (void 0 === e ? "undefined" : X(e)) && t.isLog && t.info("", (0, c.default)(e, null, 2))
        }, this.deprecated = function(e) {
          for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[
            i];
          t.warn.apply(t, ["[DEPRECATED]" + e].concat(r))
        }, this.throw = function(e) {
          throw t.error(t.prefix), new Error(e)
        };
        var r = n ? "[" + n + "]" : "";
        this.prefix = "[tea-sdk]" + r
      },
      B = new H,
      Q = function(e, t, n, r) {
        var i = t.app_key;
        delete t.app_key;
        var o = new XMLHttpRequest;
        o.open("POST", e, !0), o.setRequestHeader("Content-Type", "application/json; charset=utf-8"), i && o.setRequestHeader(
          "X-MCS-AppKey", "" + i), o.onload = function() {
          try {
            var e = JSON.parse(o.responseText);
            n && n(e)
          } catch (e) {
            r && r()
          }
        }, o.onerror = function() {
          r && r()
        }, o.send((0, c.default)(t))
      },
      J = (new Date).getTimezoneOffset(),
      Y = parseInt(-J / 60, 10),
      G = 60 * J,
      $ = void 0;
    try {
      $ = "3.2.14"
    } catch (e) {
      $ = "2.x"
    }
    var Z = new(function(e) {
        function t() {
          ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, t);
          var n = function(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != (void 0 === t ? "undefined" : (0, h.default)(t)) && "function" != typeof t ?
              e : t
          }(this, e.call(this));
          return n.initClientEnv = function() {
            n.set("os_name", j.os_name), n.set("os_version", j.os_version), n.set("device_model", j.device_model),
              n.set("platform", j.platform), n.set("sdk_version", $), n.set("browser", j.browser), n.set(
                "browser_version", j.browser_version), n.set("language", j.language), n.set("timezone", Y), n
              .set("tz_offset", G), n.set("resolution", j.screen_width + "x" + j.screen_height), n.set(
                "screen_width", j.screen_width), n.set("screen_height", j.screen_height), n.set("referrer", j
                .referrer), n.set("referrer_host", j.referrer_host), n.set("utm_source", j.utm_source), n.set(
                "utm_medium", j.utm_medium), n.set("utm_campaign", j.utm_campaign), n.set("utm_term", j.utm_term),
              n.set("utm_content", j.utm_content)
          }, n.initClientEnv(), n
        }
        return function(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError(
            "Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : (0,
              h.default)(t)));
          e.prototype = (0, p.default)(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), t && (_.default ? (0, _.default)(e, t) : e.__proto__ = t)
        }(t, e), t
      }(m)),
      ee = new(function() {
        function e() {
          ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e)
        }
        return e.prototype.isString = function(e) {
          return "String" === Object.prototype.toString.call(e).slice(8, -1)
        }, e.prototype.isNumber = function(e) {
          return "Number" === Object.prototype.toString.call(e).slice(8, -1)
        }, e.prototype.isBoolean = function(e) {
          return "Boolean" === Object.prototype.toString.call(e).slice(8, -1)
        }, e.prototype.isFunction = function(e) {
          return "Function" === Object.prototype.toString.call(e).slice(8, -1)
        }, e.prototype.isNull = function(e) {
          return "Null" === Object.prototype.toString.call(e).slice(8, -1)
        }, e.prototype.isUndefined = function(e) {
          return "Undefined" === Object.prototype.toString.call(e).slice(8, -1)
        }, e.prototype.isObj = function(e) {
          return "Object" === Object.prototype.toString.call(e).slice(8, -1)
        }, e.prototype.isArray = function(e) {
          return "Array" === Object.prototype.toString.call(e).slice(8, -1)
        }, e.prototype.isFalse = function(e) {
          return "" === e || void 0 === e || null === e || "null" === e || "undefined" === e || 0 === e || !1 ===
            e || NaN === e
        }, e.prototype.isTrue = function(e) {
          return !this.isFalse(e)
        }, e.prototype.isLowIE = function() {
          return window.XDomainRequest
        }, e
      }()),
      te = function(e) {
        return function(e, t, n) {
          if ("string" == typeof e && "number" == typeof t && "number" == typeof n) {
            var r = [],
              i = [];
            n = n <= 25 ? n : n % 25;
            var o = String.fromCharCode(n + 97);
            r = e.split(o);
            for (var a = 0; a < r.length; a++) {
              var s = parseInt(r[a], n);
              s = 1 * s ^ t;
              var u = String.fromCharCode(s);
              i.push(u)
            }
            return i.join("")
          }
        }(e, 64, 25)
      },
      ne = function() {
        return a().replace(/-/g, "").slice(0, 19)
      },
      re = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
            return e
          },
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5,
          r = [],
          i = 0,
          o = void 0;
        return e.forEach(function(e) {
          var a = t(e);
          void 0 === o ? o = a : (a !== o || r[i].length >= n) && (i += 1, o = a), r[i] = r[i] || [], r[i].push(
            e)
        }), r
      },
      ie = f.default || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
      },
      oe = {
        cn: "1fz22z22z1nz21z4mz4bz4bz1kz1az21z4az21z1lz21z21z1bz1iz4az1az1mz1k",
        sg: "1fz22z22z1nz21z4mz4bz4bz21z1ez18z1jz1gz49z1kz1az21z4az19z27z22z1cz1mz24z1cz20z21z1cz18z4az1az1mz1k",
        va: "1fz22z22z1nz21z4mz4bz4bz1kz18z1jz1gz24z18z49z1kz1az21z4az19z27z22z1cz1mz24z1cz20z21z1cz18z4az1az1mz1k"
      },
      ae = function(e) {
        try {
          var t = document.cookie.match(new RegExp("(?:^|;)\\s*" + e + "=([^;]+)"));
          return decodeURIComponent(t ? t[1] : "")
        } catch (e) {
          return ""
        }
      },
      se = function(e) {
        function t() {
          ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, t);
          var n = function(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != (void 0 === t ? "undefined" : (0, h.default)(t)) && "function" != typeof t ?
              e : t
          }(this, e.call(this));
          return n.init = function(e) {
              var t = e.app_key,
                r = e.app_id,
                i = e.channel,
                o = e.log,
                a = e.channel_domain,
                s = e.name;
              if (!t && !r) throw new Error("没有传入 app_key 或 app_id ");
              if (r && "number" != typeof r) throw new Error("app_id 必须是一个数字，注意检查是否是以`string`的方式传入的？");
              if (t && "string" != typeof t) throw new Error("app_key 必须是字符串类型。");
              n.app_id = r, n.app_key = t, n.appIdentification = t || r, n.logger = new H(s), n.logger.init(o), n
                .initConfigs(e), n.initUrls(i, a), n.checkUserToken(), n.setEnv("app_id", r)
            }, n.initConfigs = function(e) {
              var t = e.disable_ssid,
                r = e.disable_webid,
                i = e.disable_sdk_monitor;
              n.evtDataCacheKey = W + "events_" + n.appIdentification, t && (n.logger.info(
                "ssid已禁用，设置user_unique_id不会请求ssid接口。"), n.isSsidDisabled = !0), r && (n.logger.info(
                "webid服务已禁用，ssid同时被禁用。将本地生成webid。"), n.isWebidDisabled = !0, n.isSsidDisabled = !0), i && (n.logger
                .info("SDK监控已禁用。"), n.isSdkMonitorDisabled = !0)
            }, n.initUrls = function(e, t) {
              if ("internal" === e && (n.logger.warn("channel 的值 internal 已被废弃，已自动改为 cn。"), e = "cn"), !t && !oe[
                  e]) throw new Error("channel 变量只能是 `cn`, `sg`,`va`");
              var r = t || te(oe[e]);
              r = r.replace(/\/+$/, ""), n.reportUrl = r + "/v1/list", n.userTokensPrefix = "" + r
            }, n.setEnv = function(e, t) {
              if ("user_unique_id" === e) {
                if (n.blackUuid.some(function(e) {
                    return e === String(t)
                  })) return void n.logger.warn('设置了无效的值 {user_unique_id："%s"}。该操作已忽略。', t);
                n.verifyTokens(t)
              }
              if ("web_id" === e) {
                if (!t) return;
                (!n.envInfo.user.user_unique_id || n.envInfo.user.user_unique_id && n.envInfo.user.user_unique_id ===
                  n.envInfo.user.web_id) && n.set("user_unique_id", t)
              }
              n.set(e, t)
            }, n.transferFromCookie = function() {
              var e = n.tokensCacheKey,
                t = ae("tt_webid"),
                r = ae("__tea_sdk__ssid"),
                i = ae("__tea_sdk__user_unique_id");
              if (ee.isLowIE()) {
                if (t) {
                  var o = {
                    web_id: t,
                    ssid: t,
                    user_unique_id: t
                  };
                  n.storageClient.setItem(e, o)
                }
                return !1
              }
              if (t && r && i) {
                var a = {
                  web_id: t,
                  ssid: r,
                  user_unique_id: i
                };
                n.storageClient.setItem(e, a)
              }
            }, n.purifyBlackUuid = function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              if (n.blackUuid.some(function(t) {
                  return t === e.user_unique_id
                })) {
                var t = {};
                return n.setUserTokens(t), n.logger.warn('检测到无效的用户标识，已重置用户状态。{user_unique_id: "%s"}', e.user_unique_id),
                  t
              }
              return e
            }, n.getUserTokens = function() {
              return n.storageClient.getItem(n.tokensCacheKey) || {}
            }, n.setUserTokens = function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              return n.storageClient.setItem(n.tokensCacheKey, e)
            }, n.checkUserToken = function() {
              var e = W + "tokens_" + n.appIdentification;
              n.tokensCacheKey = e, n.transferFromCookie();
              var t = n.purifyBlackUuid(n.getUserTokens());
              t.user_unique_id && t.web_id ? (n.envInfo.user.user_unique_id = t.user_unique_id, n.envInfo.user.web_id =
                t.web_id, n.envInfo.user.ssid = t.ssid || "", n.logger.info(
                  "初始化已经检测到了 webid user_unique_id，一般情况下不需要再次验证 id 了"), n.unlock()) : n.requestWebId()
            }, n.saveTokenToStorage = function(e) {
              var t = e.web_id,
                r = e.ssid,
                i = e.user_unique_id;
              n.setUserTokens({
                web_id: t,
                ssid: r,
                user_unique_id: i
              })
            }, n.requestWebId = function() {
              n.isRequestWebId = !0;
              var e = function(e) {
                var t = n.envInfo.user.web_id || e.web_id,
                  r = e.ssid;
                n.isRequestWebId = !1, n.envInfo.user.ssid = r, n.envInfo.user.web_id = t, n.envInfo.user.user_unique_id =
                  t, n.saveTokenToStorage({
                    web_id: t,
                    ssid: r,
                    user_unique_id: t
                  }), n.waitForVerifyTokens ? (n.lock(), n.verifyTokens(n.realUuid)) : (n.unlock(), n.callback &&
                    n.callback())
              };
              n.isWebidDisabled ? e({
                web_id: ne(),
                ssid: ""
              }) : function() {
                var t = n.userTokensPrefix + "/v1/user/webid";
                Q(t, {
                  app_key: n.app_key,
                  app_id: n.app_id,
                  url: location.href,
                  user_agent: j.userAgent,
                  referer: j.referrer,
                  user_unique_id: ""
                }, function(t) {
                  0 !== t.e ? n.logger.error("请求 webid 失败。请联系管理员。") : e(t)
                }, function() {
                  n.isRequestWebId = !1, n.logger.error("获取 webid 失败，数据将不会被上报")
                })
              }()
            }, n.verifyTokens = function(e) {
              var t = n.tokensCacheKey;
              if (n.waitForVerifyTokens = !1, n.realUuid = "" + e, n.isRequestWebId) return n.waitForVerifyTokens = !
                0, n.logger.info("正在请求 webid，requestSsid 将会在前者请求完毕之后被调用"), !1;
              var r = n.getUserTokens();
              if (r.user_unique_id === n.realUuid && r.ssid && r.web_id) n.logger.info(
                "传入的 user_id/user_unique_id 与 缓存中的完全一致，无需再次请求"), n.unlock();
              else {
                n.lock(), n.envInfo.user.user_unique_id = n.realUuid;
                var i = ie({}, n.getUserTokens(), {
                  user_unique_id: n.realUuid
                });
                if (n.storageClient.setItem(t, i), ee.isLowIE()) return n.unlock(), !1;
                n.isSsidDisabled ? (n.unlock(), n.callback && n.callback()) : n.requestSsid()
              }
            }, n.requestSsid = function() {
              var e = n.getUserTokens(),
                t = n.userTokensPrefix + "/v1/user/ssid";
              Q(t, {
                app_key: n.app_key,
                app_id: n.app_id,
                web_id: e.web_id,
                user_unique_id: "" + e.user_unique_id
              }, function(t) {
                if (0 !== t.e) n.logger.error("请求 ssid 失败~"), n.unlock();
                else {
                  n.envInfo.user.ssid = t.ssid;
                  var r = ie({}, e, {
                    ssid: t.ssid
                  });
                  n.setUserTokens(r), n.logger.info("根据 user_unique_id 更新 ssid 成功！注意：在这之前不应该有数据被发出去"), n.unlock(),
                    n.callback && n.callback()
                }
              }, function() {
                n.unlock(), n.logger.error("根据 user_unique_id 获取新 ssid 失败")
              })
            }, n.setEvtParams = function(e) {
              var t = ie({}, e);
              (0, l.default)(t).forEach(function(e) {
                n.evtParams[e] = t[e]
              })
            }, n.mergeEnvToEvents = function(e) {
              var t = n.mergeEnv();
              return re(e, function(e) {
                return !!e.params.__disable_storage__
              }).map(function(e) {
                return {
                  events: e.map(function(e) {
                    var t = ie({}, n.evtParams, e.params);
                    return delete t.__disable_storage__, ie({}, e, {
                      params: (0, c.default)(t)
                    })
                  }),
                  user: t.user,
                  header: t.header,
                  verbose: n.debugMode ? 1 : void 0,
                  __disable_storage__: e[0].params.__disable_storage__
                }
              })
            }, n.mergeEnv = function() {
              var e = n.get(),
                t = Z.get(),
                r = ie({}, e.user),
                i = ie({}, t.header.headers.custom, e.header.headers.custom),
                o = ie({}, t.header.headers, e.header.headers, {
                  custom: i
                }),
                a = ie({}, t.header, e.header);
              return {
                user: r,
                header: ie({}, a, {
                  headers: (0, c.default)(o)
                })
              }
            }, n.evtParams = {}, n.reportUrl = "", n.userTokensPrefix = "", n.isSsidDisabled = !1, n.isWebidDisabled = !
            1, n.isSdkMonitorDisabled = !1, n.debugMode = !1, n.blackUuid = ["null", "undefined", "0", "", "None"],
            n.logger = function() {}, n.storageClient = new F, n
        }
        return function(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError(
            "Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : (0,
              h.default)(t)));
          e.prototype = (0, p.default)(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), t && (_.default ? (0, _.default)(e, t) : e.__proto__ = t)
        }(t, e), t.prototype.lock = function() {
          this.isUserTokensReady = !1
        }, t.prototype.unlock = function() {
          this.isUserTokensReady = !0
        }, t.prototype.enableDebugMode = function(e) {
          this.debugMode = e
        }, t
      }(m),
      ue = function() {
        function e(t) {
          var n = t.disable_storage,
            r = void 0 !== n && n;
          (function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          })(this, e), this._storage = new F(r), this._storageKey = "", this._data = void 0
        }
        return e.prototype.setStorageKey = function(e) {
          this._storageKey = e
        }, e.prototype.getAllEvents = function() {
          var e = this.getData();
          (0, l.default)(e).reduce(function(t, n) {
            return t.concat(e[n] || [])
          }, [])
        }, e.prototype.getData = function() {
          return this._checkIsDataInit(), this._data
        }, e.prototype.add = function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          this._checkIsDataInit(), 0 !== t.length && (this._data[e] = t, this._save())
        }, e.prototype.delete = function(e) {
          this._checkIsDataInit(), this._data[e] && (delete this._data[e], this._save())
        }, e.prototype._checkIsDataInit = function() {
          if (void 0 === this._data) try {
            var e = this._getDataFromStorage();
            if (ee.isArray(e)) {
              var t;
              this._data = (t = {}, t[ne()] = e, t), this._save()
            } else this._data = e
          } catch (e) {
            this._data = {}
          }
        }, e.prototype._checkStorageKey = function() {
          if (!this._storageKey) throw new Error("must call setStorageKey('xxx') first")
        }, e.prototype._getDataFromStorage = function() {
          return this._checkStorageKey(), this._storage.getItem(this._storageKey) || {}
        }, e.prototype._save = function() {
          this._checkStorageKey(), this._storage.setItem(this._storageKey, this._data)
        }, e
      }(),
      ce = function(e) {
        var t = e.url,
          n = e.data;
        if (window.XDomainRequest) return function(e, t) {
          try {
            var n = e.split("v1")[0];
            t.forEach(function(e) {
              var t = function(e) {
                  var t = "";
                  for (var n in e) e.hasOwnProperty(n) && (t += "&" + n + "=" + encodeURIComponent((0, c.default)
                    (e[n])));
                  return t = "&" === t[0] ? t.slice(1) : t
                }(e),
                r = new Image(1, 1);
              r.onload = function() {
                r = null
              }, r.onerror = function() {
                r = null
              }, r.src = n + "/v1/gif?" + t
            })
          } catch (e) {}
        }(t, n);
        var r = new XMLHttpRequest;
        r.open("POST", t + "?rdn=" + Math.random(), !0), r.setRequestHeader("X-MCS-AppKey", "566f58151b0ed37e"),
          r.onload = function() {}, r.onerror = function() {
            r.abort()
          }, r.send((0, c.default)(n))
      },
      de = function(e, t, n, r) {
        try {
          var i = e.split("v1")[0];
          if (!i) return void r(e, t, V.NO_URL_PREFIX);
          t.forEach(function(o) {
            var a = function(e) {
                var t = "";
                for (var n in e) e.hasOwnProperty(n) && (t += "&" + n + "=" + encodeURIComponent((0, c.default)
                  (e[n])));
                return t = "&" === t[0] ? t.slice(1) : t
              }(o),
              s = new Image(1, 1);
            s.onload = function() {
              s = null, n()
            }, s.onerror = function() {
              s = null, r(e, t, V.IMG_ON_ERROR)
            }, s.src = i + "/v1/gif?" + a
          })
        } catch (n) {
          r(e, t, V.IMG_CATCH_ERROR, n.message)
        }
      },
      le = function e(t) {
        var n = this;
        (function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        })(this, e), this.send = function(e) {
          var t = e.url,
            r = e.data,
            i = e.success,
            o = e.fail,
            a = e.eventError,
            s = e.notSure,
            u = e.isUnload;
          if (function(e) {
              var t = e.app_key,
                n = e.url,
                r = e.data,
                i = e.success,
                o = e.fail,
                a = e.notSure,
                s = e.isUnload,
                u = !!t,
                d = r;
              if (u || !window.XDomainRequest) {
                if (!u && s) return "ios" === T && "safari" === x || !window.navigator || !window.navigator.sendBeacon ?
                  void de(n, d, i, o) : (a(), void(window.navigator.sendBeacon(n, (0, c.default)(d)) ? i() :
                    o(n, r, V.BEACON_STATUS_FALSE)));
                var l = new XMLHttpRequest;
                l.open("POST", n + "?rdn=" + Math.random(), !0), l.setRequestHeader("Content-Type",
                    "application/json; charset=utf-8"), t && l.setRequestHeader("X-MCS-AppKey", "" + t), l.onload =
                  function() {
                    i(n, d, l.responseText)
                  }, l.onerror = function() {
                    l.abort(), o(n, d, V.XHR_ON_ERROR)
                  }, l.send((0, c.default)(d))
              } else de(n, d, i, o)
            }({
              app_key: n.app_key,
              url: t,
              data: r,
              success: function(e, t, r) {
                i();
                try {
                  var o = JSON.parse(r).e;
                  if (0 !== o) {
                    var s = "未知错误"; - 2 === o && (s = "事件格式错误！请检查字段类型是否正确。"), n.logger.error("数据上报失败！",
                      "错误码：" + o + "。错误信息：" + s), a(t, o), _e({
                      app_key: n.app_key,
                      url: e,
                      eventData: t,
                      errorCode: o
                    })
                  }
                } catch (r) {
                  _e({
                    app_key: n.app_key,
                    url: e,
                    eventData: t,
                    errorCode: V.RESPONSE_DATA_ERROR
                  })
                }
              },
              fail: function(e, t, r) {
                n.logger.error("数据上报失败！", "错误码：" + r), o(t, r), _e({
                  app_key: n.app_key,
                  url: e,
                  eventData: t,
                  errorCode: r
                })
              },
              notSure: s,
              isUnload: u
            }), !n.isSdkMonitorDisabled && !n.isSdkOnLoadEventReady) {
            n.isSdkOnLoadEventReady = !0;
            try {
              fe({
                app_key: n.app_key,
                url: t,
                data: r
              })
            } catch (e) {}
          }
        };
        var r = t.logger,
          i = t.app_key;
        this.app_key = i, this.logger = r || B, this.isSdkOnLoadEventReady = !1, this.isSdkMonitorDisabled = !1
      },
      fe = function(e) {
        var t = e.app_key,
          n = e.url,
          r = e.data;
        try {
          var i = r[0],
            o = i.header,
            a = i.user,
            s = o.app_id,
            u = o.app_name,
            d = o.sdk_version,
            l = a.web_id,
            f = {
              events: [{
                event: "onload",
                params: (0, c.default)({
                  app_key: t,
                  app_id: s,
                  app_name: u || "",
                  sdk_version: d
                }),
                local_time_ms: Date.now()
              }],
              user: {
                user_unique_id: l
              },
              header: {}
            };
          setTimeout(function() {
            ce({
              url: n,
              data: [f]
            })
          }, 16)
        } catch (e) {}
      },
      _e = function(e) {
        var t = e.app_key,
          n = e.url,
          r = e.eventData,
          i = e.errorCode;
        try {
          var o = r[0],
            a = o.user,
            s = o.header,
            u = [];
          r.forEach(function(e) {
            e.events.forEach(function(e) {
              u.push(e)
            })
          });
          var d = {
            events: u.map(function(e) {
              return {
                event: "on_error",
                params: (0, c.default)({
                  error_code: i,
                  app_key: t,
                  app_id: s.app_id,
                  app_name: s.app_name || "",
                  error_event: e.event,
                  local_time_ms: e.local_time_ms,
                  tea_event_index: Date.now(),
                  params: e.params,
                  header: (0, c.default)(s),
                  user: (0, c.default)(a)
                }),
                local_time_ms: Date.now()
              }
            }),
            user: {
              user_unique_id: a.user_unique_id
            },
            header: {}
          };
          setTimeout(function() {
            ce({
              url: n,
              data: [d]
            })
          }, 16)
        } catch (e) {}
      },
      pe = function(e) {
        function t(n) {
          ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, t);
          var r = function(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != (void 0 === t ? "undefined" : (0, h.default)(t)) && "function" != typeof t ?
              e : t
          }(this, e.call(this));
          r.eventReportTimer = null, r.addListener = function() {
            window.addEventListener("unload", function() {
              r.report(!0)
            }, !1), window.addEventListener("beforeunload", function() {
              r.report(!0)
            }, !1), document.addEventListener("visibilitychange", function() {
              "hidden" === document.visibilityState && r.report(!0)
            }, !1)
          }, r.setReady = function(e) {
            r.isReady = e, r.eventSender.isSdkMonitorDisabled = r.isSdkMonitorDisabled, r.checkAndSendCachedStorageEvents(),
              r.report()
          }, r.event = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
              t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              n = r.memoryCacheManager.getItem(r.evtDataCacheKey) || [],
              i = t ? [].concat(e, n) : [].concat(n, e);
            r.memoryCacheManager.setItem(r.evtDataCacheKey, i), i.length >= 5 ? r.report() : (r.eventReportTimer &&
              clearTimeout(r.eventReportTimer), r.eventReportTimer = setTimeout(function() {
                r.report(), r.eventReportTimer = null
              }, r.waitForBatchTime))
          }, r.report = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!r.isUserTokensReady) return !1;
            if (!r.isReady) return !1;
            var t = r.memoryCacheManager.getItem(r.evtDataCacheKey) || [];
            r.memoryCacheManager.removeItem(r.evtDataCacheKey);
            var n = r.mergeEnvToEvents(t);
            r.sendData(n, e)
          }, r.sendData = function(e, t) {
            re(e, function(e) {
              return !!e.__disable_storage__
            }).forEach(function(e) {
              var n = ne();
              e[0].__disable_storage__ || r.eventStorage.add(n, e), r._sendData(n, e, t)
            })
          }, r.checkAndSendCachedStorageEvents = function() {
            var e = r.eventStorage.getData(),
              t = (0, l.default)(e);
            t.length > 0 && t.forEach(function(t) {
              r._sendData(t, e[t])
            })
          }, r._sendData = function(e, t, n) {
            r.isReporting = !0;
            var i = function() {
              r.isReporting = !1
            };
            r.eventSender.send({
              url: r.reportUrl,
              data: t,
              success: function() {
                i(), r.sendDataSuccess(e)
              },
              fail: function(e, t) {
                i(), r.reportErrorCallback(e, t), setTimeout(function() {
                  r.report()
                }, 3e3)
              },
              eventError: function(e, t) {
                r.reportErrorCallback(e, t)
              },
              notSure: i,
              isUnload: n
            })
          }, r.sendDataSuccess = function(e) {
            r.eventStorage.delete(e), r.report()
          };
          var i = n.app_key,
            o = n.log,
            a = n.disable_storage,
            s = n.max_batch_num,
            u = void 0 === s ? 5 : s,
            c = n.batch_time,
            d = void 0 === c ? 30 : c;
          return r.init(n), r.maxBatchNum = u, r.waitForBatchTime = d, r.isReady = !1, r.addListener(), r.enableDebugMode(
            !!o), r.memoryCacheManager = new F(!0), r.eventStorage = new ue({
            disable_storage: a
          }), r.eventStorage.setStorageKey(r.evtDataCacheKey), r.eventSender = new le({
            logger: r.logger,
            app_key: i
          }), r.reportErrorCallback = function() {}, r
        }
        return function(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError(
            "Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : (0,
              h.default)(t)));
          e.prototype = (0, p.default)(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), t && (_.default ? (0, _.default)(e, t) : e.__proto__ = t)
        }(t, e), t.prototype.unlock = function() {
          e.prototype.unlock.call(this), this.report()
        }, t
      }(se),
      he = f.default || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
      },
      ve = function() {
        var e = +Date.now() + Number(("" + Math.random()).slice(2, 8));
        return function() {
          return e += 1
        }
      }(),
      ge = function e(t) {
        var n = this;
        (function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        })(this, e), this.init = function(e) {
          if (!ee.isObj(e)) throw new Error("init 的参数必须是Object类型");
          n.logger.init(e.log), n.channel = new pe(he({}, e, {
            name: n.name
          })), n.channel.callback = function() {
            n.callbackSend && n.start()
          }
        }, this.config = function(e) {
          ee.isObj(e) || n.logger.throw("config 参数必须是 {} 的格式"), e.log && (n.logger.init(!0), n.channel.enableDebugMode(
            !0), e.log = null);
          var t = (0, l.default)(e);
          if (!t.length) return !1;
          for (var r = t, i = Array.isArray(r), o = 0, r = i ? r : (0, d.default)(r);;) {
            var a;
            if (i) {
              if (o >= r.length) break;
              a = r[o++]
            } else {
              if ((o = r.next()).done) break;
              a = o.value
            }
            var s = a,
              u = e[s];
            switch (s) {
              case "evtParams":
                n.channel.setEvtParams(u);
                break;
              case "disable_ssid":
                n.logger.deprecated("(disable_ssid)请通过init函数来设置。"), u && (n.logger.info(
                  "ssid已禁用，设置user_unique_id不会请求ssid接口。"), n.channel.isSsidDisabled = u);
                break;
              case "disable_auto_pv":
                u && (n.logger.info("已禁止默认上报predefine_pageview事件，需手动上报。"), n._autoSendPV = !1);
                break;
              case "_staging_flag":
                "" + u == "1" && n.logger.info("根据_staging_flag设置，数据将会上报到stag 表。"), n.channel.setEvtParams({
                  _staging_flag: Number(u)
                });
                break;
              case "reportErrorCallback":
                "function" == typeof u && (n.channel.reportErrorCallback = u);
                break;
              default:
                n.channel.setEnv(s, u)
            }
          }
        }, this.send = function() {
          n.start()
        }, this.start = function() {
          if (n.channel.isUserTokensReady) {
            if (n._isSendFuncCalled) return;
            n._isSendFuncCalled = !0, n.logger.info("看到本提示，意味着用户信息已完全就绪，上报通道打开。用户标识如下："), n.logger.logJSON(n.channel
              .get().user), n._autoSendPV && n.predefinePageView(), n.channel.setReady(!0)
          } else n.callbackSend = !0
        }, this.predefinePageView = function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = {
              title: document.title || location.pathname,
              url: location.href,
              url_path: location.pathname
            },
            r = he({}, t, e);
          n.event("predefine_pageview", r, !0)
        }, this.event = function() {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
          var i = ee.isBoolean(t[t.length - 1]),
            o = !!i && t[t.length - 1],
            a = i ? t.slice(0, t.length - 1) : t,
            s = a[0],
            u = [];
          ee.isArray(s) ? u = a : u[0] = a, u = u.map(function(e) {
            return function(e, t) {
              var n = e;
              /^event\./.test(e) && (n = e.slice(6));
              var r = t;
              return ee.isObj(r) || (r = {}), r.event_index = ve(), {
                event: n,
                params: r,
                local_time_ms: +new Date
              }
            }.apply(void 0, e)
          }), n.channel.event(u, o)
        }, this._isSendFuncCalled = !1, this._autoSendPV = !0, this.name = t, this.logger = new H(t)
      };
    ge.exportMethods = ["init", "config", "send", "start", "predefinePageView"];
    var me = function e(t) {
        var n = this;
        return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), this._exportCollect = function() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            n._isQueueProcessed ? n._executeCmd.apply(n, t) : (n.cmdQueue.push(t), n._processCmdQueue())
          }, this._processCmdQueue = function() {
            if (0 !== n.cmdQueue.length) {
              var e = function(e, t, n) {
                var r = -1;
                return e.forEach(function(e, t) {
                  "init" === e[0] && (r = t)
                }), r
              }(n.cmdQueue); - 1 !== e && (n._isQueueProcessed = !0, n._executeCmd.apply(n, n.cmdQueue[e]), n.cmdQueue
                .forEach(function(t, r) {
                  r !== e && n._executeCmd.apply(n, t)
                }), n.cmdQueue = [])
            }
          }, this._executeCmd = function() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            var i = t[0];
            if (ge.exportMethods.indexOf(i) > -1) {
              var o;
              (o = n.colloctor)[i].apply(o, t.slice(1))
            } else {
              var a;
              (a = n.colloctor).event.apply(a, t)
            }
          }, this.name = t || "Collector" + +new Date, this.cmdQueue = [], this.colloctor = new ge(this.name),
          this._isQueueProcessed = !1, this._processCmdQueue(), this._exportCollect.init = this._exportCollect.bind(
            this, "init"), this._exportCollect.config = this._exportCollect.bind(this, "config"), this._exportCollect
          .send = this._exportCollect.bind(this, "send"), this._exportCollect.start = this._exportCollect.bind(
            this, "start"), this._exportCollect.predefinePageView = this._exportCollect.bind(this,
            "predefinePageView"), this._exportCollect
      },
      ye = {},
      be = {},
      we = function(e) {
        return be[e] || (be[e] = []), be[e]
      },
      ke = function(e) {
        var t = e[0],
          n = e[1],
          r = t.split(".");
        if (1 === r.length) we("default").push([t, n]);
        else if (2 === r.length) "event" === r[0] ? we("default").push([t, n]) : we(r[0]).push([r[1], n]);
        else if (3 === r.length) {
          var i = r[0],
            o = [r[1], r[2]].join(".");
          we(i).push([o, n])
        }
      },
      Se = function() {
        Ce.q.forEach(function(e) {
          var t = [].slice.call(e);
          ee.isArray(t[0]) ? t.forEach(function(e) {
            ke(e)
          }) : ke(t)
        }), (0, l.default)(be).forEach(function(e) {
          (function(e, t) {
            t.forEach(function(t) {
              (function(e) {
                return ye[e] || (ye[e] = new me(e)), ye[e]
              })(e).apply(void 0, t)
            })
          })(e, be[e]), be[e] = []
        }), Ce.q = []
      },
      Ce = function e() {
        for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        e.q.push(n), Se()
      };
    Ce.q = [], Ce.l = +new Date, Ce._instanceMap = ye, Ce._instanceCmdMap = be, Ce.init = Ce.bind(null, "init"),
      Ce.config = Ce.bind(null, "config"), Ce.send = Ce.bind(null, "send"), Ce.start = Ce.bind(null, "start"), Ce
      .predefinePageView = Ce.bind(null, "predefinePageView"),
      function(e) {
        var t = window.TeaAnalyticsObject;
        if (t) {
          if (!window[t]) throw new Error("async setup code error!");
          var n = window[t];
          e.q = n.q || [], e.l = n.l || +new Date, window[t] = e
        }
      }(Ce), Se();
    var Ee = me;
    n.Collector = Ee, n.default = Ce
  };
  o._mkWzy8v = function(e, i, t, a, o) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.collector = void 0;
    var d = a(e("E7MLSnqQ")),
      n = a(e("k65Ijy_9")),
      u = a(e("V176ShfY")),
      r = {
        mobile_detail_web: {
          appId: 1286,
          appName: "mobile_detail_web"
        },
        aweme: {
          appId: 1243,
          appName: "douyin_reflow"
        }
      };
    t.collector = {
      init: function(e) {
        var i = (window.isInAwemePage ? r.aweme : r.mobile_detail_web).appId;
        u.default.init({
          app_id: i,
          channel: "cn"
        });
        var t = {};
        window.isInAwemePage && (t = {
          impr_id: d.default.request("impr_id") || ""
        }), u.default.config({
          evtParams: {
            app_name: d.default.request("app"),
            os_name: n.default.os.android ? "android" : n.default.os.ios ? "ios" : "unknown",
            os_version: n.default.os.version + "",
            traffic_type: n.default.browser.weixin ? "weixin" : "wap",
            utm_source: d.default.request("utm_source"),
            utm_medium: d.default.request("utm_medium"),
            utm_campaign: d.default.request("utm_campaign"),
            href: location.href,
            host: location.host,
            pathname: location.pathname,
            protocol: location.protocol,
            country: window.country,
            province: window.province,
            city: window.city,
            user_agent: navigator.userAgent,
            screen_resolution: window.screen.width + "*" + window.screen.height,
            request_id: window.request_id,
            group_id: window.group_id,
            item_id: window.item_id,
            share_iid: d.default.request("iid"),
            wx_share_count: parseInt(d.default.request("wxshare_count") || 0),
            log_pb: t
          }
        }), u.default.send(), window.Tea = u.default, (0, u.default)("pageview", {
          path: location.pathname,
          friend_type: d.default.request("friend_type"),
          vid: d.default.request("vid"),
          aid: d.default.request("aid")
        })
      }
    }
  };
  o.w_0l9lJZ = function(e, t, a, i, o) {
    function n(e, t, a, i, o) {
      window.gaevent && window.gaevent(e, t, a, i, o), window.Tea(e + "_" + t, (0, _.default)({
        category: e,
        label: a,
        value: i
      }, function() {
        var e = p.default.ttSessionStorage.getItem("weixinlist_count") || "1",
          t = p.default.formatQueryParmas("app", h.default.request("app")),
          a = p.default.formatQueryParmas("from", h.default.request("from"));
        return {
          weixin_share_count: +h.default.request("wxshare_count") || 1,
          tag: window.tag || "",
          is_video_page: window.isNewVideoPage ? 1 : 0,
          app_name: t,
          group_id: window.group_id,
          utm_medium: h.default.request("utm_medium") || "",
          utm_source: h.default.request("utm_source") || "",
          list_go_detail: "1" === e ? "first" : "",
          protocol: location.protocol.slice(0, -1),
          from: a,
          share_type: h.default.request("share_type"),
          traffic_type: g.default.browser.weixin ? "weixin" : "wap",
          page_type: window.isArticlePage ? "article" : "video",
          abtest_version_name: window.abtest_version_name || "",
          city: window.city || "",
          articleType: window.articleType || "normal"
        }
      }(), o))
    }

    function r() {
      window.resendGA && window.resendGA(), window.resendBA && window.resendBA()
    }

    function d(e) {
      var t = document.createElement("a");
      return t.href = e, t
    }

    function u(e) {
      return -1 === ["s3.bytecdn.cn", "s2.pstatp.com", "s3b.pstatp.com", "s3a.pstatp.com", "s3.pstatp.com",
        "ib.snssdk.com", "www.google-analytics.com", "m.toutiao.com", "s0.pstatp.com",
        "www.googletagmanager.com", "hm.baidu.com"
      ].indexOf(e)
    }

    function s(e) {
      return u(e) && -1 === ["x.jd.com"].indexOf(e)
    }

    function c(e) {
      return !(e.indexOf("ttGTM") > -1)
    }

    function m(e, t, a) {
      0 === Math.floor(100 * Math.random()) && window.gaeventTest(e, t, a, 1, {
        nonInteraction: !0
      })
    }

    function w() {
      var t = h.default.request("from");
      window.violateWeixinPolicy = !("singlemessage" === t || "groupmessage" === t), v.collector.init({}), l.default
        .init(), window.maevent = n, window.resendMA = r, f.default.init(!0), p.default.unshiftListPage(), window
        .onload = function() {
          setTimeout(function() {
            for (var e = document.getElementsByTagName("script"), t = 0; t < e.length; t++) {
              var a = e[t];
              "toutiao" !== a.getAttribute("data-from") && (a.src ? u(d(a.src).hostname) && m("hijack", d(a.src)
                .protocol + "//" + d(a.src).hostname, a.src) : c(a.innerHTML) && m("hijack",
                "unknown_domain", a.innerHTML))
            }
            for (var i = document.getElementsByTagName("iframe"), o = 0, n = i.length; o < n; o++) {
              var r = i[o],
                w = r.src,
                _ = "about:blank";
              if (w && w !== _) {
                var l = d(w);
                0 === l.protocol.indexOf("http") && l.hostname && s(l.hostname) && m("hijack-iframe", l.protocol +
                  "//" + l.hostname, w)
              } else if (w === _) {
                var p = "";
                try {
                  p = r.contentDocument.body.innerHTML
                } catch (e) {
                  console.log(e)
                }!!p && m("hijack-iframe", _, p)
              }
            }
          }, 2e3)
        },
        function() {
          var e = {
            parent_group_id: window.group_id,
            parent_rid: window.request_id,
            site_id: window.site_id,
            share_app_name: h.default.request("app"),
            traffic_type: g.default.browser.weixin ? "weixin" : "wap",
            page_type: window.isArticlePage ? "article" : "video"
          };
          window.screen && (e.screen_resolution = window.screen.height + "*" + window.screen.width), h.default.request(
            "iid") && (e.share_iid = h.default.request("iid")), h.default.request("utm_source") && (e.utm_source =
            h.default.request("utm_source")), h.default.request("utm_medium") && (e.utm_medium = h.default.request(
            "utm_medium")), h.default.request("utm_campaign") && (e.utm_campaign = h.default.request(
            "utm_campaign")), h.default.request("wxshare_count") && (e.wx_share_count = parseInt(h.default.request(
            "wxshare_count"))), window.abtest_version_name && (e.version_name = window.abtest_version_name);
          var t = window.ReportSdk;
          t && (window.ttReport = new t({
            header: e,
            user: {
              user_type: 13
            },
            host: "m.toutiao.com"
          }))
        }(),
        function() {
          var e = window["toutiao.growth.mobile_detail_web/page_config/all_config"] || {};
          window.nothing = {
            group_id: e.article_page && e.article_page.hide_recommendation && e.article_page.hide_recommendation
              .group_id || [],
            media_id: e.article_page && e.article_page.hide_recommendation && e.article_page.hide_recommendation
              .media_id || []
          }
        }(),
        function() {
          var e = window["toutiao.growth.mobile_detail_web/page_config/all_config"] || {};
          window.relatedOnly = {
            group_id: e.article_page && e.article_page.related_recommendation && e.article_page.related_recommendation
              .group_id || [],
            media_id: e.article_page && e.article_page.related_recommendation && e.article_page.related_recommendation
              .media_id || []
          }
        }(), "sms_share" === h.default.request("utm_source") && (0, y.reportPageView)(), g.default.browser.weixin &&
        e("_y4VAr79").init()
    }
    var _ = i(e("rCvC6Owx")),
      l = i(e("XAGz6_bG")),
      p = i(e("oYLqwKZ3")),
      f = i(e("Bv_CB0pX")),
      g = i(e("k65Ijy_9")),
      h = i(e("E7MLSnqQ"));
    e("yccuHFUt");
    var v = e("_mkWzy8v"),
      y = e("rOR5taG0");
    t.exports = w
  };
  o._4Clm2bs = function(e, t, a, i, n) {
    var d = i(e("qUYrYx_P")),
      r = i(e("e_bhjJnu")),
      l = i(e("__gK4WbX")),
      o = i(e("lgLPKmWO")),
      u = i(e("LFxswB00")),
      c = i(e("_3k8jqSq")),
      s = i(e("C_TrCxPr")),
      f = e("zNszyAds"),
      m = i(f),
      _ = e("dLqIczAI"),
      h = i(e("vfmltKrV")),
      p = i(e("NyBUEg8f")),
      w = i(e("jpURqdak")),
      v = i(e("a8KMJgx8")),
      g = i(e("VcstVxxX")),
      C = i(e("dlyl6Mdw")),
      D = i(e("w_0l9lJZ")),
      M = i(e("oYLqwKZ3")),
      V = e("rOR5taG0"),
      y = e("bbi_lWRG"),
      E = i(e("JKQGrVxs")),
      O = i(e("VOdmENRv")),
      G = function(e) {
        function t(e) {
          (0, o.default)(this, t);
          var a = (0, c.default)(this, (t.__proto__ || (0, l.default)(t)).call(this, e));
          (0, D.default)();
          var i = (window.bit_state || "").split(",").map(function(e) {
              return "1" === e
            }),
            n = (0, r.default)(i, 4),
            d = n[0],
            u = void 0 !== d && d,
            s = n[1],
            f = void 0 !== s && s,
            m = n[2],
            _ = void 0 !== m && m,
            h = n[3],
            p = void 0 !== h && h,
            w = window.nothing.group_id.indexOf(window.group_id) > -1 || window.nothing.media_id.indexOf(window.mediaUserId) >
            -1;
          return u = u || w || E.default.article.shouldUnfoldArticle || M.default.isAppInstalled(), f = f || w ||
            !E.default.topBanner.show, _ = _ || w, p = p || w || !E.default.relationCard.show, a.state = {
              articleData: null,
              app_special: [],
              relatedVideo: [],
              related_article: [],
              GTMValue: {},
              hotCardData: {},
              unfoldArticle: u,
              hideBanner: f,
              hideRecommanded: _,
              hideRelationCard: p,
              isInMediaList: w,
              isChangeIconStatus: !1,
              isShowQuestionnaireIcon: !1,
              commentList: []
            }, a.hasRetry = !1, a.timer = null, a
        }
        return (0, s.default)(t, e), (0, u.default)(t, [{
          key: "componentDidMount",
          value: function() {
            var e = this.state.hideRecommanded;
            this.fetctArticle(), e || this.fetchCommon(), E.default.hotCard && this.fetchHotCardData()
          }
        }, {
          key: "fetchComments",
          value: function() {
            var e = this;
            (0, V.fetchCommentsData)({
              offset: 0,
              count: 10,
              append: !0
            }, function(t) {
              var a = t.message,
                i = t.data,
                n = t.total_number;
              if ("success" === a && n > 10) {
                var d = i.map(function(e) {
                  var t = e.comment,
                    a = void 0 === t ? {} : t;
                  return {
                    icon: a.user_profile_image_url,
                    content: a.text,
                    name: a.user_name,
                    time: a.create_time,
                    digg_count: a.digg_count
                  }
                });
                e.setState({
                  commentList: d
                })
              }
            })
          }
        }, {
          key: "fetctArticle",
          value: function() {
            var e = this;
            (0, V.fetchArticleData)(window.item_id).end(function(t, a) {
              if (t) {
                if (a && 400 === a.status && !e.hasRetry) return e.hasRetry = !0, void e.fetctArticle();
                throw window.maevent("article_content", "get_data_failed"), new Error(t)
              }
              var i = JSON.parse(a.text);
              if (!i.success) throw window.maevent("article_content", "get_data_failed"), new Error((
                0, d.default)(i));
              e.setState({
                articleData: i.data
              })
            })
          }
        }, {
          key: "getCommonOption",
          value: function() {
            var e = y.COMMONNUM.wap_related_article;
            return {
              parent_rid: window.request_id,
              city: window.city || "",
              province: window.province || "",
              page_type: window.isNewVideoPage ? "video" : "article",
              share_iid: M.default.getShareInfo.share_iid,
              share_app_name: M.default.getShareInfo.share_app_name,
              wx_share_count: M.default.getShareInfo.wx_share_count,
              site_id: window.site_id,
              num: [y.COMMONNUM.wap_app_special, e],
              code_id: [y.CODEID.wap_app_special, y.CODEID.wap_related_article],
              except_page: "",
              test_params: (0, d.default)({})
            }
          }
        }, {
          key: "fetchHotCardData",
          value: function() {
            var e = this;
            (O.default.hotCardTest1 || O.default.hotCardTest2) && (0, V.getHotCardInfo)().end(function(t,
              a) {
              if (t) throw new Error(t);
              var i = void 0;
              try {
                "success" === (i = JSON.parse(a.text)).message && e.setState({
                  hotCardData: i.data
                })
              } catch (e) {
                throw new Error((0, d.default)(e))
              }
            })
          }
        }, {
          key: "fetchCommon",
          value: function() {
            var e = this;
            (0, V.fetchCommonData)(window.group_id, this.getCommonOption(), function(t) {
              if (t.data) {
                window.maevent("pageview", "recommended", 1);
                var a = t.data[y.CODEID.wap_app_special] || [],
                  i = t.data[y.CODEID.wap_related_article] || [];
                e.setState({
                  app_special: a,
                  related_article: i
                })
              } else window.maevent("pageview", "recommended", 0)
            })
          }
        }, {
          key: "setGTMValue",
          value: function(e) {
            this.setState({
              GTMValue: e
            })
          }
        }, {
          key: "render",
          value: function() {
            var e = this,
              t = this.state,
              a = t.hideBanner,
              i = t.unfoldArticle,
              n = t.hideRelationCard,
              d = t.GTMValue,
              r = void 0 === d ? {} : d,
              l = t.articleData,
              o = t.app_special,
              u = t.related_article,
              c = t.hotCardData,
              s = this.state.GTMValue && this.state.GTMValue.hideAllRec ? [] : o,
              f = this.state.GTMValue && this.state.GTMValue.hideAllRec ? [] : u;
            return i = i || r.unfoldArticle, m.default.createElement("div", {
              className: "app-container",
              id: E.default.app
            }, m.default.createElement("div", {
              className: "weixin-share-portal"
            }), !a && m.default.createElement(p.default, null), l && m.default.createElement(h.default, {
              GTMValue: r,
              articleData: l,
              isUnfoldArticle: i
            }), m.default.createElement(g.default, {
              appOnlyData: {
                data: s
              },
              relatedNewsData: {
                data: f
              },
              GTMValue: r,
              hotCardData: c
            }), l && m.default.createElement(C.default, {
              GTMValue: r
            }), !n && m.default.createElement(w.default, {
              GTMValue: r
            }), m.default.createElement(v.default, {
              setGTMValue: function(t) {
                e.setGTMValue(t)
              }
            }))
          }
        }]), t
      }(f.Component);
    (0, _.render)(m.default.createElement(G, null), document.getElementById("main"))
  };
  return r("_4Clm2bs")
});
//# sourceMappingURL=weixin.lPxr0oCb.js.map
