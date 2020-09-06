_bpack_define(function (o, r, d) {
  o.lgLPKmWO = function (n, o, t, a) {
    "use strict";
    t.__esModule = !0,
      t.default = function (n, o) {
        if (!(n instanceof o))
          throw new TypeError("Cannot call a class as a function")
      }
  };
  o.kOty1ryv = function (e, n, a, f) {
    var i = e("_bnaDFW7");
    i(i.S + i.F * !e("i2HNAyWa"), "Object", {
      defineProperty: e("_xgVu3Hq").f
    })
  };
  o.I7seYzUp = function (r, t, e, n) {
    r("kOty1ryv");
    var o = r("_ScmT_yv").Object;
    t.exports = function (r, t, e) {
      return o.defineProperty(r, t, e)
    }
  };
  o._TKuLVn3 = function (e, o, s, t) {
    o.exports = {
      default: e("I7seYzUp"),
      __esModule: !0
    }
  };
  o.LFxswB00 = function (e, n, u, r) {
    "use strict";
    u.__esModule = !0;
    var t = r(e("_TKuLVn3"));
    u.default = function () {
      function e(e, n) {
        for (var u = 0; u < n.length; u++) {
          var r = n[u];
          r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value" in r && (r.writable = !0),
            (0,
              t.default)(e, r.key, r)
        }
      }
      return function (n, u, r) {
        return u && e(n.prototype, u),
          r && e(n, r),
          n
      }
    }()
  };
  o._3k8jqSq = function (e, n, t, i) {
    "use strict";
    t.__esModule = !0;
    var o = i(e("_YselYzt"));
    t.default = function (e, n) {
      if (!e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !n || "object" !== (void 0 === n ? "undefined" : (0,
        o.default)(n)) && "function" != typeof n ? e : n
    }
  };
  o.M3w4muPm = function (t, o, r, n) {
    var e = t("_UmqaYCS"),
      _ = t("_OG34KXY"),
      c = function (t, o) {
        if (_(t),
          !e(o) && null !== o)
          throw TypeError(o + ": can't set as prototype!")
      };
    o.exports = {
      set: Object.setPrototypeOf || ("__proto__" in {} ? function (o, r, n) {
        try {
          (n = t("_4WfZsn_")(Function.call, t("MJuIewua").f(Object.prototype, "__proto__").set, 2))(o, []),
          r = !(o instanceof Array)
        } catch (t) {
          r = !0
        }
        return function (t, o) {
          return c(t, o),
            r ? t.__proto__ = o : n(t, o),
            t
        }
      }({}, !1) : void 0),
      check: c
    }
  };
  o.Fe_KlsRY = function (t, e, o, n) {
    var a = t("_bnaDFW7");
    a(a.S, "Object", {
      setPrototypeOf: t("M3w4muPm").set
    })
  };
  o.B9sSe6KL = function (t, e, o, c) {
    t("Fe_KlsRY"),
      e.exports = t("_ScmT_yv").Object.setPrototypeOf
  };
  o.aTcJE_x5 = function (e, o, s, t) {
    o.exports = {
      default: e("B9sSe6KL"),
      __esModule: !0
    }
  };
  o.KVmguajV = function (a, c, e, n) {
    var r = a("_bnaDFW7");
    r(r.S, "Object", {
      create: a("LVpLr_1d")
    })
  };
  o.ALPyDrPf = function (t, c, e, n) {
    t("KVmguajV");
    var r = t("_ScmT_yv").Object;
    c.exports = function (t, c) {
      return r.create(t, c)
    }
  };
  o.dAbh41uH = function (e, o, f, t) {
    o.exports = {
      default: e("ALPyDrPf"),
      __esModule: !0
    }
  };
  o.C_TrCxPr = function (e, t, o, u) {
    "use strict";
    o.__esModule = !0;
    var n = u(e("aTcJE_x5")),
      r = u(e("dAbh41uH")),
      l = u(e("_YselYzt"));
    o.default = function (e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : (0,
          l.default)(t)));
      e.prototype = (0,
          r.default)(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }),
        t && (n.default ? (0,
          n.default)(e, t) : e.__proto__ = t)
    }
  };
  o.OQWxznWL = function (n, r, t, u) {
    var c = n("cwzdDSxN"),
      e = n("_aIQXgBa");
    n("CdXvOVUe")("keys", function () {
      return function (n) {
        return e(c(n))
      }
    })
  };
  o.PuKRU1Y9 = function (c, e, n, o) {
    c("OQWxznWL"),
      e.exports = c("_ScmT_yv").Object.keys
  };
  o._l59FVJy = function (e, o, u, t) {
    o.exports = {
      default: e("PuKRU1Y9"),
      __esModule: !0
    }
  };
  o.xFryiHX9 = function (e, r, t, n, o) {
    var i = n(e("qUYrYx_P")),
      a = n(e("_l59FVJy")),
      s = n(e("_YselYzt")),
      u = {
        vendor: function () {
          for (var e = ["O", "ms", "Moz", "Khtml", "Webkit", "webkit", ""], r = document.createElement("div"), t = e.length; t--;) {
            var n = e[t];
            if ((n ? n + "Transform" : "transform") in r.style)
              return n
          }
          return null
        },
        prefix: function (e, r) {
          if (null !== u.vendor()) {
            var t = u.vendor() ? "-" + u.vendor().toLowerCase() + "-" : "",
              n = u.vendor() || "";
            if (r) {
              return t + e.replace(/([A-Z])/g, function (e, r) {
                return "-" + e.toLowerCase()
              })
            }
            return n + ("" !== u.vendor() ? e.charAt(0).toUpperCase() + e.substr(1) : e).replace(/(-[a-z])/g, function (e, r) {
              return e.charAt(1).toUpperCase()
            })
          }
        },
        canRun2d: function () {
          return null !== u.vendor()
        },
        canRun3d: function () {
          var e = document.createElement("div");
          if (!canRun2d() || !window.getComputedStyle)
            return !1;
          var r = u.prefix("transform");
          document.body.appendChild(e),
            e.style[r] = "translate3d(1px,1px,1px)";
          var t = window.getComputedStyle(e)[r] || "";
          return document.body.removeChild(e),
            !!/^matrix3d\((.*)\)$/.exec(t)
        },
        canRunCanvas: function () {
          try {
            return document.createElement("canvas").getContext("2d"),
              !0
          } catch (e) {
            return !1
          }
        },
        canRunWebgl: function () {
          var e, r;
          try {
            return e = document.createElement("canvas"),
              r = e.getContext("webgl") || e.getContext("experimental-webgl"),
              r.getSupportedExtensions(),
              !0
          } catch (e) {
            return !1
          }
        },
        canUsePageVisibility: function () {
          return null !== u.vendor() && void 0 !== document[u.prefix("hidden")]
        }
      };
    r.exports = {
      cookie: function (e, r, t) {
        if (void 0 === r) {
          var n = null;
          if (document.cookie && "" != document.cookie)
            for (var o = document.cookie.split(";"), i = 0; i < o.length; i++) {
              var a = o[i].trim();
              if (a.substring(0, e.length + 1) == e + "=") {
                n = decodeURIComponent(a.substring(e.length + 1));
                break
              }
            }
          return n
        }
        t = t || {},
          null === r && (r = "",
            t.expires = -1);
        var s = "";
        if (t.expires && ("number" == typeof t.expires || t.expires.toUTCString)) {
          var u;
          "number" == typeof t.expires ? (u = new Date).setTime(u.getTime() + t.expires) : u = t.expires,
            s = "; expires=" + u.toUTCString()
        }
        var c = t.path ? "; path=" + t.path : "",
          l = t.domain ? "; domain=" + t.domain : "",
          d = t.secure ? "; secure" : "";
        document.cookie = [e, "=", encodeURIComponent(r), s, c, l, d].join("")
      },
      support: u,
      pageVisible: function () {
        return u.canUsePageVisibility() ? document[u.prefix("hidden")] ? "hidden" : "visible" : "unknown"
      },
      localStorageEnabled: function () {
        try {
          return localStorage.setItem("test", "test"),
            localStorage.removeItem("test"),
            !0
        } catch (e) {
          return !1
        }
      },
      getCookieForLocal: function (e) {
        for (var r in localStorage) {
          var t = r.split("___");
          if (3 == t.length && t[0] == e) {
            var n = parseInt(t[1]),
              o = parseInt(t[2]);
            if (Date.now() - n < o)
              return localStorage[r]
          }
        }
        return null
      },
      setCookieForLocal: function (e, r, t) {
        for (var n in localStorage)
          n.split("__")[0] == e && localStorage.removeItem(n);
        localStorage[e + "___" + Date.now() + "___" + t] = r
      },
      appendQuery: function (e, r) {
        if (!r)
          return e;
        var t, n = document.createElement("a");
        return n.href = e,
          t = n.search ? n.search + "&" + r : "?" + r,
          n.protocol + "//" + n.host + n.pathname + t + n.hash
      },
      request: function (e) {
        for (var r = location.search.substring(1).split("&"), t = {}, n = 0, o = r.length; n < o; n++) {
          var i = r[n];
          i && (t[i.substring(0, i.indexOf("=")).toLowerCase()] = i.substring(i.indexOf("=") + 1, i.length))
        }
        if (!e)
          return t;
        var a = t[e.toLowerCase()];
        return a ? a.trim() : ""
      },
      hash: function () {
        var e = location.hash.substr(1),
          r = {};
        if (e)
          for (var t = e.split("&"), n = 0; n < t.length; n++) {
            var o = t[n].split("=");
            r[o[0]] = o[1]
          }
        if ("string" == typeof arguments[0])
          return r[arguments[0]];
        if ("object" == (0,
            s.default)(arguments[0])) {
          for (var i in arguments[0])
            r[i] = arguments[0][i];
          var u = (0,
            a.default)(r).map(function (e) {
            return "h=" + r[e]
          }).join("&");
          location.href = "#" + u.substring(0, u.length - 1)
        }
      },
      getBrowserName: function () {
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
          }
        return e
      },
      toQuery: function (e) {
        return (0,
          a.default)(e).map(function (r) {
          return [r, e[r]].join("=")
        }).join("&")
      },
      sessionStorageEnabled: function () {
        try {
          return sessionStorage.setItem("test", "test"),
            sessionStorage.removeItem("test"),
            !0
        } catch (e) {
          return !1
        }
      },
      capitalizeFirstLetter: function (e) {
        return e ? (e = e.toString()).charAt(0).toUpperCase() + e.slice(1) : e
      },
      cloneDeep: function (e) {
        return JSON.parse((0,
          i.default)(e))
      }
    }
  };
  o._9S022jS = function (t, e, a, n, o) {
    Object.defineProperty(a, "__esModule", {
      value: !0
    });
    var i = n(t("__gK4WbX")),
      u = n(t("lgLPKmWO")),
      r = n(t("LFxswB00")),
      s = n(t("_3k8jqSq")),
      d = n(t("C_TrCxPr")),
      w = t("zNszyAds"),
      l = n(t("VcwWJehO")),
      f = n(t("RiX6bfLf")),
      g = n(t("xFryiHX9")),
      c = function (t) {
        function e(t) {
          return (0,
              u.default)(this, e),
            (0,
              s.default)(this, (e.__proto__ || (0,
              i.default)(e)).call(this, t))
        }
        return (0,
            d.default)(e, t),
          (0,
            r.default)(e, [{
            key: "componentDidMount",
            value: function () {
              var t = this;
              window.ttGTM = {};
              var e = {},
                a = l.default.browser.weixin ? "GTM-K9DDWQ" : "GTM-NRPFDC";
              ! function (a, n, o, i, u) {
                a[i] = a[i] || [],
                  a[i].push({
                    "gtm.start": (new Date).getTime(),
                    event: "gtm.js"
                  });
                var r = n.getElementsByTagName(o)[0],
                  s = n.createElement(o);
                s.async = !0,
                  s.dataset ? window.isGuagualongVideoPage || (s.dataset.from = "toutiao") : window.isGuagualongVideoPage || s.setAttribute("data-from", "toutiao"),
                  "1" === g.default.request("_gtm") ? s.src = "//www.googletagmanager.com/gtm.js?id=" + u : s.src = "//s1.pstatp.com/growth/fe_sdk/gtmsdk/" + u + ".js?v=" + window.gtmExpireTime,
                  s.onload = function () {
                    var a = 10;
                    ! function n() {
                      (e = window.isListPage ? window.ttGTM.list : l.default.browser.weixin ? window.ttGTM.weixin : window.ttGTM.detail) ? (window.GTMValue = e,
                        t.props.setGTMValue(e)) : --a && setTimeout(n, 10)
                    }()
                  },
                  r.parentNode.insertBefore(s, r)
              }(window, document, "script", "dataLayer", a)
            }
          }, {
            key: "render",
            value: function () {
              return null
            }
          }]),
          e
      }(w.Component);
    c.propTypes = {
        setGTMValue: f.default.func
      },
      a.default = c
  };
  o.z8cO4mWP = function (e, i, n, o, t) {
    var r = o(e("qUYrYx_P"));
    ! function (e, n) {
      "function" == typeof define && (define.amd || define.cmd) ? define(function () {
        return n(e)
      }) : i.exports = n(e, !0)
    }(window, function (e, i) {
      function n(i, n, o) {
        e.WeixinJSBridge ? WeixinJSBridge.invoke(i, t(n), function (e) {
          c(i, e, o)
        }) : a(i, o)
      }

      function o(i, n, o) {
        e.WeixinJSBridge ? WeixinJSBridge.on(i, function (e) {
          o && o.trigger && o.trigger(e),
            c(i, e, n)
        }) : o ? a(i, o) : a(i, n)
      }

      function t(e) {
        return e = e || {},
          e.appId = v.appId,
          e.verifyAppId = v.appId,
          e.verifySignType = "sha1",
          e.verifyTimestamp = v.timestamp + "",
          e.verifyNonceStr = v.nonceStr,
          e.verifySignature = v.signature,
          e
      }

      function c(e, i, n) {
        var o, t;
        switch (delete i.err_code,
          delete i.err_desc,
          delete i.err_detail,
          (o = i.errMsg) || (o = i.err_msg,
            delete i.err_msg,
            o = function (e, i) {
              var n, o, t, r;
              if (i) {
                switch (n = i.indexOf(":"),
                  e) {
                  case l.config:
                    o = "config";
                    break;
                  case l.openProductSpecificView:
                    o = "openProductSpecificView";
                    break;
                  default:
                    o = i.substring(0, n),
                      o = o.replace(/_/g, " "),
                      o = o.replace(/\b\w+\b/g, function (e) {
                        return e.substring(0, 1).toUpperCase() + e.substring(1)
                      }),
                      o = o.substring(0, 1).toLowerCase() + o.substring(1),
                      -1 != (o = o.replace(/ /g, "")).indexOf("Wcpay") && (o = o.replace("Wcpay", "WCPay")),
                      (t = f[o]) && (o = t)
                }
                "confirm" == (r = i.substring(n + 1)) && (r = "ok"),
                "failed" == r && (r = "fail"),
                  -1 != r.indexOf("failed_") && (r = r.substring(7)),
                  -1 != r.indexOf("fail_") && (r = r.substring(5)),
                  r = r.replace(/_/g, " "),
                  ("access denied" == (r = r.toLowerCase()) || "no permission to execute" == r) && (r = "permission denied"),
                  "config" == o && "function not exist" == r && (r = "ok"),
                  i = o + ":" + r
              }
              return i
            }(e, o),
            i.errMsg = o),
          (n = n || {})._complete && (n._complete(i),
            delete n._complete),
          o = i.errMsg || "",
          v.debug && !n.isInnerInvoke && alert((0,
            r.default)(i)),
          t = o.indexOf(":"),
          o.substring(t + 1)) {
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
          for (i = 0,
            n = e.length; n > i; ++i)
            o = e[i],
            (t = l[o]) && (e[i] = t);
          return e
        }
      }

      function a(e, i) {
        if (v.debug && !i.isInnerInvoke) {
          var n = f[e];
          n && (e = n),
            i && i._complete && delete i._complete,
            console.log('"' + e + '",', i || "")
        }
      }

      function d() {
        return (new Date).getTime()
      }

      function u(i) {
        y && (e.WeixinJSBridge ? i() : m.addEventListener && m.addEventListener("WeixinJSBridgeReady", i, !1))
      }

      function p() {
        M.invoke || (M.invoke = function (i, n, o) {
            e.WeixinJSBridge && WeixinJSBridge.invoke(i, t(n), o)
          },
          M.on = function (i, n) {
            e.WeixinJSBridge && WeixinJSBridge.on(i, n)
          }
        )
      }
      var l, f, m, g, h, y, _, w, S, I, T, v, k, V, M;
      if (!e.jWeixin)
        return l = {
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
          },
          f = function () {
            var e, i = {};
            for (e in l)
              i[l[e]] = e;
            return i
          }(),
          m = e.document,
          g = m.title,
          h = navigator.userAgent.toLowerCase(),
          y = -1 != h.indexOf("micromessenger"),
          _ = -1 != h.indexOf("android"),
          w = -1 != h.indexOf("iphone") || -1 != h.indexOf("ipad"),
          S = function () {
            var e = h.match(/micromessenger\/(\d+\.\d+\.\d+)/) || h.match(/micromessenger\/(\d+\.\d+)/);
            return e ? e[1] : ""
          }(),
          I = {
            initStartTime: d(),
            initEndTime: 0,
            preVerifyStartTime: 0,
            preVerifyEndTime: 0
          },
          T = {
            version: 1,
            appId: "",
            initTime: 0,
            preVerifyTime: 0,
            networkType: "",
            isPreVerifyOk: 1,
            systemType: w ? 1 : _ ? 2 : -1,
            clientVersion: S,
            url: encodeURIComponent(location.href)
          },
          v = {},
          k = {
            _completes: []
          },
          V = {
            state: 0,
            res: {}
          },
          u(function () {
            I.initEndTime = d()
          }),
          M = {
            config: function (e) {
              v = e,
                a("config", e),
                u(function () {
                  n(l.config, {
                      verifyJsApiList: s(v.jsApiList)
                    }, function () {
                      k._complete = function (e) {
                          I.preVerifyEndTime = d(),
                            V.state = 1,
                            V.res = e
                        },
                        k.success = function () {
                          T.isPreVerifyOk = 0
                        },
                        k.fail = function (e) {
                          k._fail ? k._fail(e) : V.state = -1
                        };
                      var e = k._completes;
                      return e.push(function () {
                          v.debug || function () {
                            if (!("6.0.2" > S || T.systemType < 0)) {
                              var e = new Image;
                              T.appId = v.appId,
                                T.initTime = I.initEndTime - I.initStartTime,
                                T.preVerifyTime = I.preVerifyEndTime - I.preVerifyStartTime,
                                M.getNetworkType({
                                  isInnerInvoke: !0,
                                  success: function (i) {
                                    T.networkType = i.networkType;
                                    var n = "https://open.weixin.qq.com/sdk/report?v=" + T.version + "&o=" + T.isPreVerifyOk + "&s=" + T.systemType + "&c=" + T.clientVersion + "&a=" + T.appId + "&n=" + T.networkType + "&i=" + T.initTime + "&p=" + T.preVerifyTime + "&u=" + T.url;
                                    e.src = n
                                  }
                                })
                            }
                          }()
                        }),
                        k.complete = function (i) {
                          for (var n = 0, o = e.length; o > n; ++n)
                            e[n](i);
                          k._completes = []
                        },
                        k
                    }()),
                    I.preVerifyStartTime = d()
                }),
                v.beta && p()
            },
            ready: function (e) {
              0 != V.state ? e() : (k._completes.push(e),
                !y && v.debug && e())
            },
            error: function (e) {
              "6.0.2" > S || (-1 == V.state ? e(V.res) : k._fail = e)
            },
            checkJsApi: function (e) {
              n("checkJsApi", {
                jsApiList: s(e.jsApiList)
              }, (e._complete = function (e) {
                  if (_) {
                    var i = e.checkResult;
                    i && (e.checkResult = JSON.parse(i))
                  }
                  e = function (e) {
                    var i, n, o = e.checkResult;
                    for (i in o)
                      (n = f[i]) && (o[n] = o[i],
                        delete o[i]);
                    return e
                  }(e)
                },
                e))
            },
            onMenuShareTimeline: function (e) {
              o(l.onMenuShareTimeline, {
                complete: function () {
                  n("shareTimeline", {
                    title: e.title || g,
                    desc: e.title || g,
                    img_url: e.imgUrl,
                    link: e.link || location.href
                  }, e)
                }
              }, e)
            },
            onMenuShareAppMessage: function (e) {
              o(l.onMenuShareAppMessage, {
                complete: function () {
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
            onMenuShareQQ: function (e) {
              o(l.onMenuShareQQ, {
                complete: function () {
                  n("shareQQ", {
                    title: e.title || g,
                    desc: e.desc || "",
                    img_url: e.imgUrl,
                    link: e.link || location.href
                  }, e)
                }
              }, e)
            },
            onMenuShareWeibo: function (e) {
              o(l.onMenuShareWeibo, {
                complete: function () {
                  n("shareWeiboApp", {
                    title: e.title || g,
                    desc: e.desc || "",
                    img_url: e.imgUrl,
                    link: e.link || location.href
                  }, e)
                }
              }, e)
            },
            startRecord: function (e) {
              n("startRecord", {}, e)
            },
            stopRecord: function (e) {
              n("stopRecord", {}, e)
            },
            onVoiceRecordEnd: function (e) {
              o("onVoiceRecordEnd", e)
            },
            playVoice: function (e) {
              n("playVoice", {
                localId: e.localId
              }, e)
            },
            pauseVoice: function (e) {
              n("pauseVoice", {
                localId: e.localId
              }, e)
            },
            stopVoice: function (e) {
              n("stopVoice", {
                localId: e.localId
              }, e)
            },
            onVoicePlayEnd: function (e) {
              o("onVoicePlayEnd", e)
            },
            uploadVoice: function (e) {
              n("uploadVoice", {
                localId: e.localId,
                isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
              }, e)
            },
            downloadVoice: function (e) {
              n("downloadVoice", {
                serverId: e.serverId,
                isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
              }, e)
            },
            translateVoice: function (e) {
              n("translateVoice", {
                localId: e.localId,
                isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
              }, e)
            },
            chooseImage: function (e) {
              n("chooseImage", {
                scene: "1|2",
                count: e.count || 9,
                sizeType: e.sizeType || ["original", "compressed"]
              }, (e._complete = function (e) {
                  if (_) {
                    var i = e.localIds;
                    i && (e.localIds = JSON.parse(i))
                  }
                },
                e))
            },
            previewImage: function (e) {
              n(l.previewImage, {
                current: e.current,
                urls: e.urls
              }, e)
            },
            uploadImage: function (e) {
              n("uploadImage", {
                localId: e.localId,
                isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
              }, e)
            },
            downloadImage: function (e) {
              n("downloadImage", {
                serverId: e.serverId,
                isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
              }, e)
            },
            getNetworkType: function (e) {
              n("getNetworkType", {}, (e._complete = function (e) {
                  e = function (e) {
                    var i, n, o, t = e.errMsg;
                    if (e.errMsg = "getNetworkType:ok",
                      i = e.subtype,
                      delete e.subtype,
                      i)
                      e.networkType = i;
                    else
                      switch (n = t.indexOf(":"),
                        o = t.substring(n + 1)) {
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
                },
                e))
            },
            openLocation: function (e) {
              n("openLocation", {
                latitude: e.latitude,
                longitude: e.longitude,
                name: e.name || "",
                address: e.address || "",
                scale: e.scale || 28,
                infoUrl: e.infoUrl || ""
              }, e)
            },
            getLocation: function (e) {
              e = e || {},
                n(l.getLocation, {
                  type: e.type || "wgs84"
                }, (e._complete = function (e) {
                    delete e.type
                  },
                  e))
            },
            hideOptionMenu: function (e) {
              n("hideOptionMenu", {}, e)
            },
            showOptionMenu: function (e) {
              n("showOptionMenu", {}, e)
            },
            closeWindow: function (e) {
              n("closeWindow", {
                immediate_close: (e = e || {}).immediateClose || 0
              }, e)
            },
            hideMenuItems: function (e) {
              n("hideMenuItems", {
                menuList: e.menuList
              }, e)
            },
            showMenuItems: function (e) {
              n("showMenuItems", {
                menuList: e.menuList
              }, e)
            },
            hideAllNonBaseMenuItem: function (e) {
              n("hideAllNonBaseMenuItem", {}, e)
            },
            showAllNonBaseMenuItem: function (e) {
              n("showAllNonBaseMenuItem", {}, e)
            },
            scanQRCode: function (e) {
              n("scanQRCode", {
                needResult: (e = e || {}).needResult || 0,
                scanType: e.scanType || ["qrCode", "barCode"]
              }, (e._complete = function (e) {
                  var i, n;
                  w && (i = e.resultStr) && (n = JSON.parse(i),
                    e.resultStr = n && n.scan_code && n.scan_code.scan_result)
                },
                e))
            },
            openProductSpecificView: function (e) {
              n(l.openProductSpecificView, {
                pid: e.productId,
                view_type: e.viewType || 0
              }, e)
            },
            addCard: function (e) {
              var i, o, t, r, c = e.cardList,
                s = [];
              for (i = 0,
                o = c.length; o > i; ++i)
                r = {
                  card_id: (t = c[i]).cardId,
                  card_ext: t.cardExt
                },
                s.push(r);
              n(l.addCard, {
                card_list: s
              }, (e._complete = function (e) {
                  var i, n, o, t = e.card_list;
                  if (t) {
                    for (i = 0,
                      n = (t = JSON.parse(t)).length; n > i; ++i)
                      (o = t[i]).cardId = o.card_id,
                      o.cardExt = o.card_ext,
                      o.isSuccess = !!o.is_succ,
                      delete o.card_id,
                      delete o.card_ext,
                      delete o.is_succ;
                    e.cardList = t,
                      delete e.card_list
                  }
                },
                e))
            },
            chooseCard: function (e) {
              n("chooseCard", {
                app_id: v.appId,
                location_id: e.shopId || "",
                sign_type: e.signType || "SHA1",
                card_id: e.cardId || "",
                card_type: e.cardType || "",
                card_sign: e.cardSign,
                time_stamp: e.timestamp + "",
                nonce_str: e.nonceStr
              }, (e._complete = function (e) {
                  e.cardList = e.choose_card_info,
                    delete e.choose_card_info
                },
                e))
            },
            openCard: function (e) {
              var i, o, t, r, c = e.cardList,
                s = [];
              for (i = 0,
                o = c.length; o > i; ++i)
                r = {
                  card_id: (t = c[i]).cardId,
                  code: t.code
                },
                s.push(r);
              n(l.openCard, {
                card_list: s
              }, e)
            },
            chooseWXPay: function (e) {
              n(l.chooseWXPay, function (e) {
                return {
                  timeStamp: e.timestamp + "",
                  nonceStr: e.nonceStr,
                  package: e.package,
                  paySign: e.paySign,
                  signType: e.signType || "SHA1"
                }
              }(e), e)
            }
          },
          i && (e.wx = e.jWeixin = M),
          M
    })
  };
  o._8ukH2ys = function (e, a, n, i, o) {
    var c = i(e("z8cO4mWP"));
    window.weixin = "undefined" == typeof weixin ? {} : weixin,
      window.wx = void 0 === c.default ? {} : c.default,
      wx.onReady = weixin.onReady = function (a, n) {
        var i = (n = e("_DQ3wKWt").extend({}, n, {
            debug: !1
          })).nonceStr || "Wm3WZYTPz0wzccnW",
          o = Date.now(),
          c = n.appId || {
            "m.toutiao.com": "wxe8b89be1715734a6",
            "m.zjurl.cn": "wx53fcf3395bc0fe5e",
            "m.365yg.com": "wx53fcf3395bc0fe5e",
            "m.ixigua.com": "wx53fcf3395bc0fe5e",
            "m.xiguavideo.net": "wxbfa5d32ab7a07e44",
            "m.xiguavideo.cn": "wxbfa5d32ab7a07e44",
            "m.xiguashipin.net": "wxbfa5d32ab7a07e44",
            "m.xiguashipin.cn": "wxe6f9a168790e9ab1",
            "m.xiguaapp.cn": "wxe6f9a168790e9ab1",
            "m.xiguaapp.com": "wxe6f9a168790e9ab1",
            "m.toutiao13.com": "wx0830be3d2916edb9",
            "m.toutiaoimg.cn": "wxb790c4f1d0f9ce85"
          } [location.hostname] || "wxe8b89be1715734a6" || "wxe8b89be1715734a6",
          t = n.debug || !1;
        e("_DQ3wKWt").ajax({
          type: "GET",
          dataType: "jsonp",
          jsonp: "callback",
          data: {
            appid: c,
            noncestr: i,
            timestamp: o,
            url: window.location.href
          },
          url: "//open.snssdk.com/jssdk_signature/",
          success: function (e) {
            1 == e.code && wx.config({
                debug: t,
                appId: c,
                timestamp: o,
                nonceStr: i,
                signature: e.signature,
                jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage"]
              }),
              wx.ready(function () {
                a && a.apply(wx, arguments)
              }),
              wx.error(function (e) {}),
              n.always && n.always(e)
          }
        })
      }
  };
  o.K79iRpbJ = function (n, t, c, o) {
    "use strict";
    var r = n("_aIQXgBa"),
      a = n("_Po9wdNM"),
      e = n("cYF3HIp8"),
      f = n("cwzdDSxN"),
      i = n("_dF2LOcz"),
      s = Object.assign;
    t.exports = !s || n("XV26NvV0")(function () {
        var n = {},
          t = {},
          c = Symbol(),
          o = "abcdefghijklmnopqrst";
        return n[c] = 7,
          o.split("").forEach(function (n) {
            t[n] = n
          }),
          7 != s({}, n)[c] || Object.keys(s({}, t)).join("") != o
      }) ? function (n, t) {
        for (var c = f(n), o = arguments.length, s = 1, l = a.f, u = e.f; o > s;)
          for (var g, v = i(arguments[s++]), b = l ? r(v).concat(l(v)) : r(v), d = b.length, h = 0; d > h;)
            u.call(v, g = b[h++]) && (c[g] = v[g]);
        return c
      } :
      s
  };
  o.WQFxMeXa = function (n, a, b, i) {
    var c = n("_bnaDFW7");
    c(c.S + c.F, "Object", {
      assign: n("K79iRpbJ")
    })
  };
  o.AMs0t2ki = function (c, e, n, o) {
    c("WQFxMeXa"),
      e.exports = c("_ScmT_yv").Object.assign
  };
  o.rCvC6Owx = function (e, o, t, s) {
    o.exports = {
      default: e("AMs0t2ki"),
      __esModule: !0
    }
  };
  o.lT_XwWMZ = function (r, t, e, o) {
    "use strict";
    e.__esModule = !0;
    var a = o(r("rCvC6Owx"));
    e.default = a.default || function (r) {
      for (var t = 1; t < arguments.length; t++) {
        var e = arguments[t];
        for (var o in e)
          Object.prototype.hasOwnProperty.call(e, o) && (r[o] = e[o])
      }
      return r
    }
  };
  o.aiZPfnp6 = function (t, r, e, n) {
    ! function (t) {
      "use strict";

      function e(t, r, e, i) {
        var a = r && r.prototype instanceof o ? r : o,
          c = Object.create(a.prototype),
          u = new l(i || []);
        return c._invoke = function (t, r, e) {
            var o = _;
            return function (i, a) {
              if (o === O)
                throw new Error("Generator is already running");
              if (o === k) {
                if ("throw" === i)
                  throw a;
                return y()
              }
              for (e.method = i,
                e.arg = a;;) {
                var c = e.delegate;
                if (c) {
                  var u = h(c, e);
                  if (u) {
                    if (u === G)
                      continue;
                    return u
                  }
                }
                if ("next" === e.method)
                  e.sent = e._sent = e.arg;
                else if ("throw" === e.method) {
                  if (o === _)
                    throw o = k,
                      e.arg;
                  e.dispatchException(e.arg)
                } else
                  "return" === e.method && e.abrupt("return", e.arg);
                o = O;
                var f = n(t, r, e);
                if ("normal" === f.type) {
                  if (o = e.done ? k : j,
                    f.arg === G)
                    continue;
                  return {
                    value: f.arg,
                    done: e.done
                  }
                }
                "throw" === f.type && (o = k,
                  e.method = "throw",
                  e.arg = f.arg)
              }
            }
          }(t, e, u),
          c
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
        ["next", "throw", "return"].forEach(function (r) {
          t[r] = function (t) {
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
            return h && "object" == typeof h && g.call(h, "__await") ? Promise.resolve(h.__await).then(function (t) {
              r("next", t, i, a)
            }, function (t) {
              r("throw", t, i, a)
            }) : Promise.resolve(h).then(function (t) {
              u.value = t,
                i(u)
            }, a)
          }
          a(c.arg)
        }
        var e;
        this._invoke = function (t, n) {
          function o() {
            return new Promise(function (e, o) {
              r(t, n, e, o)
            })
          }
          return e = e ? e.then(o, o) : o()
        }
      }

      function h(t, r) {
        var e = t.iterator[r.method];
        if (e === v) {
          if (r.delegate = null,
            "throw" === r.method) {
            if (t.iterator.return && (r.method = "return",
                r.arg = v,
                h(t, r),
                "throw" === r.method))
              return G;
            r.method = "throw",
              r.arg = new TypeError("The iterator does not provide a 'throw' method")
          }
          return G
        }
        var o = n(e, t.iterator, r.arg);
        if ("throw" === o.type)
          return r.method = "throw",
            r.arg = o.arg,
            r.delegate = null,
            G;
        var i = o.arg;
        return i ? i.done ? (r[t.resultName] = i.value,
          r.next = t.nextLoc,
          "return" !== r.method && (r.method = "next",
            r.arg = v),
          r.delegate = null,
          G) : i : (r.method = "throw",
          r.arg = new TypeError("iterator result is not an object"),
          r.delegate = null,
          G)
      }

      function f(t) {
        var r = {
          tryLoc: t[0]
        };
        1 in t && (r.catchLoc = t[1]),
          2 in t && (r.finallyLoc = t[2],
            r.afterLoc = t[3]),
          this.tryEntries.push(r)
      }

      function s(t) {
        var r = t.completion || {};
        r.type = "normal",
          delete r.arg,
          t.completion = r
      }

      function l(t) {
        this.tryEntries = [{
            tryLoc: "root"
          }],
          t.forEach(f, this),
          this.reset(!0)
      }

      function p(t) {
        if (t) {
          var r = t[w];
          if (r)
            return r.call(t);
          if ("function" == typeof t.next)
            return t;
          if (!isNaN(t.length)) {
            var e = -1,
              n = function r() {
                for (; ++e < t.length;)
                  if (g.call(t, e))
                    return r.value = t[e],
                      r.done = !1,
                      r;
                return r.value = v,
                  r.done = !0,
                  r
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
      if (b)
        E && (r.exports = b);
      else {
        (b = window.regeneratorRuntime = E ? r.exports : {}).wrap = e;
        var _ = "suspendedStart",
          j = "suspendedYield",
          O = "executing",
          k = "completed",
          G = {},
          N = {};
        N[w] = function () {
          return this
        };
        var P = Object.getPrototypeOf,
          F = P && P(P(p([])));
        F && F !== d && g.call(F, w) && (N = F);
        var S = a.prototype = o.prototype = Object.create(N);
        i.prototype = S.constructor = a,
          a.constructor = i,
          a[x] = i.displayName = "GeneratorFunction",
          b.isGeneratorFunction = function (t) {
            var r = "function" == typeof t && t.constructor;
            return !!r && (r === i || "GeneratorFunction" === (r.displayName || r.name))
          },
          b.mark = function (t) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t, a) : (t.__proto__ = a,
                x in t || (t[x] = "GeneratorFunction")),
              t.prototype = Object.create(S),
              t
          },
          b.awrap = function (t) {
            return {
              __await: t
            }
          },
          c(u.prototype),
          u.prototype[L] = function () {
            return this
          },
          b.AsyncIterator = u,
          b.async = function (t, r, n, o) {
            var i = new u(e(t, r, n, o));
            return b.isGeneratorFunction(r) ? i : i.next().then(function (t) {
              return t.done ? t.value : i.next()
            })
          },
          c(S),
          S[x] = "Generator",
          S[w] = function () {
            return this
          },
          S.toString = function () {
            return "[object Generator]"
          },
          b.keys = function (t) {
            var r = [];
            for (var e in t)
              r.push(e);
            return r.reverse(),
              function e() {
                for (; r.length;) {
                  var n = r.pop();
                  if (n in t)
                    return e.value = n,
                      e.done = !1,
                      e
                }
                return e.done = !0,
                  e
              }
          },
          b.values = p,
          l.prototype = {
            constructor: l,
            reset: function (t) {
              if (this.prev = 0,
                this.next = 0,
                this.sent = this._sent = v,
                this.done = !1,
                this.delegate = null,
                this.method = "next",
                this.arg = v,
                this.tryEntries.forEach(s),
                !t)
                for (var r in this)
                  "t" === r.charAt(0) && g.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = v)
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type)
                throw t.arg;
              return this.rval
            },
            dispatchException: function (t) {
              function r(r, n) {
                return i.type = "throw",
                  i.arg = t,
                  e.next = r,
                  n && (e.method = "next",
                    e.arg = v),
                  !!n
              }
              if (this.done)
                throw t;
              for (var e = this, n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n],
                  i = o.completion;
                if ("root" === o.tryLoc)
                  return r("end");
                if (o.tryLoc <= this.prev) {
                  var a = g.call(o, "catchLoc"),
                    c = g.call(o, "finallyLoc");
                  if (a && c) {
                    if (this.prev < o.catchLoc)
                      return r(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc)
                      return r(o.finallyLoc)
                  } else if (a) {
                    if (this.prev < o.catchLoc)
                      return r(o.catchLoc, !0)
                  } else {
                    if (!c)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc)
                      return r(o.finallyLoc)
                  }
                }
              }
            },
            abrupt: function (t, r) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc <= this.prev && g.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                  var o = n;
                  break
                }
              }
              o && ("break" === t || "continue" === t) && o.tryLoc <= r && r <= o.finallyLoc && (o = null);
              var i = o ? o.completion : {};
              return i.type = t,
                i.arg = r,
                o ? (this.method = "next",
                  this.next = o.finallyLoc,
                  G) : this.complete(i)
            },
            complete: function (t, r) {
              if ("throw" === t.type)
                throw t.arg;
              return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                  this.method = "return",
                  this.next = "end") : "normal" === t.type && r && (this.next = r),
                G
            },
            finish: function (t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var e = this.tryEntries[r];
                if (e.finallyLoc === t)
                  return this.complete(e.completion, e.afterLoc),
                    s(e),
                    G
              }
            },
            catch: function (t) {
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
            delegateYield: function (t, r, e) {
              return this.delegate = {
                  iterator: p(t),
                  resultName: r,
                  nextLoc: e
                },
                "next" === this.method && (this.arg = v),
                G
            }
          }
      }
    }(function () {
      return this
    }() || Function("return this")())
  };
  o.kwJIKkEn = function (e, r, t, n) {
    var i = function () {
        return this
      }() || Function("return this")(),
      o = i.regeneratorRuntime && Object.getOwnPropertyNames(i).indexOf("regeneratorRuntime") >= 0,
      u = o && i.regeneratorRuntime;
    if (i.regeneratorRuntime = void 0,
      r.exports = e("aiZPfnp6"),
      o)
      i.regeneratorRuntime = u;
    else
      try {
        delete i.regeneratorRuntime
      } catch (e) {
        i.regeneratorRuntime = void 0
      }
  };
  o._mPfQU57 = function (o, r, i, n) {
    var t = o("_OG34KXY"),
      c = o("IAwRqMbk"),
      e = o("_CEiHGOE")("species");
    r.exports = function (o, r) {
      var i, n = t(o).constructor;
      return void 0 === n || void 0 == (i = t(n)[e]) ? r : c(i)
    }
  };
  o.WhuKNsdL = function (r, c, e, a) {
    c.exports = function (r, c, e) {
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
  o.__xnHe5X = function (n, e, t, o) {
    var i, s, a, c = n("_4WfZsn_"),
      d = n("WhuKNsdL"),
      r = n("dtuOqF__"),
      w = n("EHbJXBwN"),
      u = (n("QU4_tjki"),
        window.process),
      f = window.setImmediate,
      p = window.clearImmediate,
      h = window.MessageChannel,
      l = window.Dispatch,
      g = 0,
      m = {},
      v = function () {
        var n = +this;
        if (m.hasOwnProperty(n)) {
          var e = m[n];
          delete m[n],
            e()
        }
      },
      y = function (n) {
        v.call(n.data)
      };
    f && p || (f = function (n) {
          for (var e = [], t = 1; arguments.length > t;)
            e.push(arguments[t++]);
          return m[++g] = function () {
              d("function" == typeof n ? n : Function(n), e)
            },
            i(g),
            g
        },
        p = function (n) {
          delete m[n]
        },
        "process" == n("Rh0w5Bkq")(u) ? i = function (n) {
          u.nextTick(c(v, n, 1))
        } :
        l && l.now ? i = function (n) {
          l.now(c(v, n, 1))
        } :
        h ? (a = (s = new h).port2,
          s.port1.onmessage = y,
          i = c(a.postMessage, a, 1)) : window.addEventListener && "function" == typeof postMessage && !window.importScripts ? (i = function (n) {
            window.postMessage(n + "", "*")
          },
          window.addEventListener("message", y, !1)) : i = "onreadystatechange" in w("script") ? function (n) {
          r.appendChild(w("script")).onreadystatechange = function () {
            r.removeChild(this),
              v.call(n)
          }
        } :
        function (n) {
          setTimeout(c(v, n, 1), 0)
        }
      ),
      e.exports = {
        set: f,
        clear: p
      }
  };
  o.DNegKAm3 = function (e, n, t, o) {
    e("QU4_tjki");
    var i = e("__xnHe5X").set,
      r = window.MutationObserver || window.WebKitMutationObserver,
      a = window.process,
      c = window.Promise,
      s = "process" == e("Rh0w5Bkq")(a);
    n.exports = function () {
      var e, n, t, o = function () {
        var o, i;
        for (s && (o = a.domain) && o.exit(); e;) {
          i = e.fn,
            e = e.next;
          try {
            i()
          } catch (o) {
            throw e ? t() : n = void 0,
              o
          }
        }
        n = void 0,
          o && o.enter()
      };
      if (s)
        t = function () {
          a.nextTick(o)
        };
      else if (r) {
        var f = !0,
          v = document.createTextNode("");
        new r(o).observe(v, {
            characterData: !0
          }),
          t = function () {
            v.data = f = !f
          }
      } else if (c && c.resolve) {
        var w = c.resolve();
        t = function () {
          w.then(o)
        }
      } else
        t = function () {
          i.call(window, o)
        };
      return function (o) {
        var i = {
          fn: o,
          next: void 0
        };
        n && (n.next = i),
          e || (e = i,
            t()),
          n = i
      }
    }
  };
  o.Vb0sDKda = function (r, o, t, i) {
    "use strict";
    var e = r("IAwRqMbk");
    o.exports.f = function (r) {
      return new function (r) {
          var o, t;
          this.promise = new r(function (r, i) {
              if (void 0 !== o || void 0 !== t)
                throw TypeError("Bad Promise constructor");
              o = r,
                t = i
            }),
            this.resolve = e(o),
            this.reject = e(t)
        }
        (r)
    }
  };
  o.WXp_qUTb = function (t, n, r, e) {
    n.exports = function (t) {
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
  o.X7CsyoBj = function (r, o, n, t) {
    var e = r("_OG34KXY"),
      s = r("_UmqaYCS"),
      u = r("Vb0sDKda");
    o.exports = function (r, o) {
      if (e(r),
        s(o) && o.constructor === r)
        return o;
      var n = u.f(r);
      return (0,
          n.resolve)(o),
        n.promise
    }
  };
  o._SuCJSt9 = function (r, t, n, o) {
    var u = r("_CEiHGOE")("iterator"),
      c = !1;
    try {
      var e = [7][u]();
      e.return = function () {
          c = !0
        },
        Array.from(e, function () {
          throw 2
        })
    } catch (r) {}
    t.exports = function (r, t) {
      if (!t && !c)
        return !1;
      var n = !1;
      try {
        var o = [7],
          e = o[u]();
        e.next = function () {
            return {
              done: n = !0
            }
          },
          o[u] = function () {
            return e
          },
          r(o)
      } catch (r) {}
      return n
    }
  };
  o.Sj3KzRgN = function (n, t, i, e) {
    "use strict";
    var o, r, c, s, a = n("_tdiAiEL"),
      h = (n("QU4_tjki"),
        n("_4WfZsn_")),
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
      U = function () {},
      W = r = y.f,
      C = !! function () {
        try {
          var t = k.resolve(1),
            i = (t.constructor = {})[n("_CEiHGOE")("species")] = function (n) {
              n(U, U)
            };
          return (E || "function" == typeof PromiseRejectionEvent) && t.then(U) instanceof i
        } catch (n) {}
      }(),
      F = function (n) {
        var t;
        return !(!u(n) || "function" != typeof (t = n.then)) && t
      },
      g = function (n, t) {
        if (!n._n) {
          n._n = !0;
          var i = n._c;
          w(function () {
            for (var e = n._v, o = 1 == n._s, r = 0, c = function (t) {
                var i, r, c = o ? t.ok : t.fail,
                  s = t.resolve,
                  a = t.reject,
                  h = t.domain;
                try {
                  c ? (o || (2 == n._h && R(n),
                      n._h = 1),
                    !0 === c ? i = e : (h && h.enter(),
                      i = c(e),
                      h && h.exit()),
                    i === t.promise ? a(S("Promise-chain cycle")) : (r = F(i)) ? r.call(i, s, a) : s(i)) : a(e)
                } catch (n) {
                  a(n)
                }
              }; i.length > r;)
              c(i[r++]);
            n._c = [],
              n._n = !1,
              t && !n._h && D(n)
          })
        }
      },
      D = function (n) {
        p.call(window, function () {
          var t, i, e, o = n._v,
            r = H(n);
          if (r && (t = j(function () {
                E ? b.emit("unhandledRejection", o, n) : (i = window.onunhandledrejection) ? i({
                  promise: n,
                  reason: o
                }) : (e = window.console) && e.error && e.error("Unhandled promise rejection", o)
              }),
              n._h = E || H(n) ? 2 : 1),
            n._a = void 0,
            r && t.e)
            throw t.v
        })
      },
      H = function (n) {
        if (1 == n._h)
          return !1;
        for (var t, i = n._a || n._c, e = 0; i.length > e;)
          if ((t = i[e++]).fail || !H(t.promise))
            return !1;
        return !0
      },
      R = function (n) {
        p.call(window, function () {
          var t;
          E ? b.emit("rejectionHandled", n) : (t = window.onrejectionhandled) && t({
            promise: n,
            reason: n._v
          })
        })
      },
      q = function (n) {
        var t = this;
        t._d || (t._d = !0,
          (t = t._w || t)._v = n,
          t._s = 2,
          t._a || (t._a = t._c.slice()),
          g(t, !0))
      },
      A = function (n) {
        var t, i = this;
        if (!i._d) {
          i._d = !0,
            i = i._w || i;
          try {
            if (i === n)
              throw S("Promise can't be resolved itself");
            (t = F(n)) ? w(function () {
              var e = {
                _w: i,
                _d: !1
              };
              try {
                t.call(n, h(A, e, 1), h(q, e, 1))
              } catch (n) {
                q.call(e, n)
              }
            }): (i._v = n,
              i._s = 1,
              g(i, !1))
          } catch (n) {
            q.call({
              _w: i,
              _d: !1
            }, n)
          }
        }
      };
    C || (k = function (n) {
          l(this, k, "Promise", "_h"),
            v(n),
            o.call(this);
          try {
            n(h(A, this, 1), h(q, this, 1))
          } catch (n) {
            q.call(this, n)
          }
        },
        (o = function (n) {
          this._c = [],
            this._a = void 0,
            this._s = 0,
            this._d = !1,
            this._v = void 0,
            this._h = 0,
            this._n = !1
        }).prototype = n("_He9RSVo")(k.prototype, {
          then: function (n, t) {
            var i = W(m(this, k));
            return i.ok = "function" != typeof n || n,
              i.fail = "function" == typeof t && t,
              i.domain = E ? b.domain : void 0,
              this._c.push(i),
              this._a && this._a.push(i),
              this._s && g(this, !1),
              i.promise
          },
          catch: function (n) {
            return this.then(void 0, n)
          }
        }),
        c = function () {
          var n = new o;
          this.promise = n,
            this.resolve = h(A, n, 1),
            this.reject = h(q, n, 1)
        },
        y.f = W = function (n) {
          return n === k || n === s ? new c(n) : r(n)
        }
      ),
      f(f.G + f.W + f.F * !C, {
        Promise: k
      }),
      n("oBWtkPlC")(k, "Promise"),
      n("spr9zUPg")("Promise"),
      s = n("_ScmT_yv").Promise,
      f(f.S + f.F * !C, "Promise", {
        reject: function (n) {
          var t = W(this);
          return (0,
              t.reject)(n),
            t.promise
        }
      }),
      f(f.S + f.F * (a || !C), "Promise", {
        resolve: function (n) {
          return P(a && this === s ? k : this, n)
        }
      }),
      f(f.S + f.F * !(C && n("_SuCJSt9")(function (n) {
        k.all(n).catch(U)
      })), "Promise", {
        all: function (n) {
          var t = this,
            i = W(t),
            e = i.resolve,
            o = i.reject,
            r = j(function () {
              var i = [],
                r = 0,
                c = 1;
              d(n, !1, function (n) {
                  var s = r++,
                    a = !1;
                  i.push(void 0),
                    c++,
                    t.resolve(n).then(function (n) {
                      a || (a = !0,
                        i[s] = n,
                        --c || e(i))
                    }, o)
                }),
                --c || e(i)
            });
          return r.e && o(r.v),
            i.promise
        },
        race: function (n) {
          var t = this,
            i = W(t),
            e = i.reject,
            o = j(function () {
              d(n, !1, function (n) {
                t.resolve(n).then(i.resolve, e)
              })
            });
          return o.e && e(o.v),
            i.promise
        }
      })
  };
  o.FrdAm9AV = function (n, t, i, o) {
    "use strict";
    var r = n("_bnaDFW7"),
      e = n("_ScmT_yv"),
      u = (n("QU4_tjki"),
        n("_mPfQU57")),
      f = n("X7CsyoBj");
    r(r.P + r.R, "Promise", {
      finally: function (n) {
        var t = u(this, e.Promise || window.Promise),
          i = "function" == typeof n;
        return this.then(i ? function (i) {
            return f(t, n()).then(function () {
              return i
            })
          } :
          n, i ? function (i) {
            return f(t, n()).then(function () {
              throw i
            })
          } :
          n)
      }
    })
  };
  o.usBwEfhX = function (r, e, t, s) {
    "use strict";
    var i = r("_bnaDFW7"),
      n = r("Vb0sDKda"),
      o = r("WXp_qUTb");
    i(i.S, "Promise", {
      try: function (r) {
        var e = n.f(this),
          t = o(r);
        return (t.e ? e.reject : e.resolve)(t.v),
          e.promise
      }
    })
  };
  o.JegZQoGs = function (e, m, o, r) {
    e("A731R_rP"),
      e("_OmCVihe"),
      e("geDeueJE"),
      e("Sj3KzRgN"),
      e("FrdAm9AV"),
      e("usBwEfhX"),
      m.exports = e("_ScmT_yv").Promise
  };
  o.XbxgipO3 = function (e, o, s, t) {
    o.exports = {
      default: e("JegZQoGs"),
      __esModule: !0
    }
  };
  o.kvaO6mJX = function (n, t, e, u) {
    "use strict";
    e.__esModule = !0;
    var r = u(n("XbxgipO3"));
    e.default = function (n) {
      return function () {
        var t = n.apply(this, arguments);
        return new r.default(function (n, e) {
          function u(o, i) {
            try {
              var f = t[o](i),
                c = f.value
            } catch (n) {
              return void e(n)
            }
            if (!f.done)
              return r.default.resolve(c).then(function (n) {
                u("next", n)
              }, function (n) {
                u("throw", n)
              });
            n(c)
          }
          return u("next")
        })
      }
    }
  };
  o.d0638NDt = function (t, e, n, r, o) {
    ! function (t, n) {
      e.exports = n()
    }(0, function () {
      function t(t) {
        return "function" == typeof t
      }

      function e() {
        var t = setTimeout;
        return function () {
          return t(n, 1)
        }
      }

      function n() {
        for (var t = 0; t < A; t += 2) {
          (0,
            x[t])(x[t + 1]),
          x[t] = void 0,
            x[t + 1] = void 0
        }
        A = 0
      }

      function r() {
        try {
          var t = require("vertx");
          return void 0 !== (j = t.runOnLoop || t.runOnContext) ? function () {
              j(n)
            } :
            e()
        } catch (t) {
          return e()
        }
      }

      function o(t, e) {
        var n = arguments,
          r = this,
          o = new this.constructor(s);
        void 0 === o[k] && y(o);
        var i = r._state;
        return i ? function () {
            var t = n[i - 1];
            E(function () {
              return d(i, o, t, r._result)
            })
          }() : v(r, o, t, e),
          o
      }

      function i(t) {
        if (t && "object" == typeof t && t.constructor === this)
          return t;
        var e = new this(s);
        return a(e, t),
          e
      }

      function s() {}

      function u(t) {
        try {
          return t.then
        } catch (t) {
          return q.error = t,
            q
        }
      }

      function c(e, n, r) {
        n.constructor === e.constructor && r === o && n.constructor.resolve === i ? function (t, e) {
          e._state === F ? l(t, e._result) : e._state === N ? h(t, e._result) : v(e, void 0, function (e) {
            return a(t, e)
          }, function (e) {
            return h(t, e)
          })
        }(e, n) : r === q ? (h(e, q.error),
          q.error = null) : void 0 === r ? l(e, n) : t(r) ? function (t, e, n) {
          E(function (t) {
            var r = !1,
              o = function (t, e, n, r) {
                try {
                  t.call(e, n, r)
                } catch (t) {
                  return t
                }
              }(n, e, function (n) {
                r || (r = !0,
                  e !== n ? a(t, n) : l(t, n))
              }, function (e) {
                r || (r = !0,
                  h(t, e))
              }, t._label);
            !r && o && (r = !0,
              h(t, o))
          }, t)
        }(e, n, r) : l(e, n)
      }

      function a(t, e) {
        t === e ? h(t, new TypeError("You cannot resolve a promise with itself")) : ! function (t) {
          var e = typeof t;
          return null !== t && ("object" === e || "function" === e)
        }(e) ? l(t, e) : c(t, e, u(e))
      }

      function f(t) {
        t._onerror && t._onerror(t._result),
          p(t)
      }

      function l(t, e) {
        t._state === D && (t._result = e,
          t._state = F,
          0 !== t._subscribers.length && E(p, t))
      }

      function h(t, e) {
        t._state === D && (t._state = N,
          t._result = e,
          E(f, t))
      }

      function v(t, e, n, r) {
        var o = t._subscribers,
          i = o.length;
        t._onerror = null,
          o[i] = e,
          o[i + F] = n,
          o[i + N] = r,
          0 === i && t._state && E(p, t)
      }

      function p(t) {
        var e = t._subscribers,
          n = t._state;
        if (0 !== e.length) {
          for (var r = void 0, o = void 0, i = t._result, s = 0; s < e.length; s += 3)
            r = e[s],
            o = e[s + n],
            r ? d(n, r, o, i) : o(i);
          t._subscribers.length = 0
        }
      }

      function _() {
        this.error = null
      }

      function d(e, n, r, o) {
        var i = t(r),
          s = void 0,
          u = void 0,
          c = void 0,
          f = void 0;
        if (i) {
          if ((s = function (t, e) {
              try {
                return t(e)
              } catch (t) {
                return K.error = t,
                  K
              }
            }(r, o)) === K ? (f = !0,
              u = s.error,
              s.error = null) : c = !0,
            n === s)
            return void h(n, new TypeError("A promises callback cannot return that same promise."))
        } else
          s = o,
          c = !0;
        n._state !== D || (i && c ? a(n, s) : f ? h(n, u) : e === F ? l(n, s) : e === N && h(n, s))
      }

      function y(t) {
        t[k] = L++,
          t._state = void 0,
          t._result = void 0,
          t._subscribers = []
      }

      function w(t, e) {
        this._instanceConstructor = t,
          this.promise = new t(s),
          this.promise[k] || y(this.promise),
          g(e) ? (this.length = e.length,
            this._remaining = e.length,
            this._result = new Array(this.length),
            0 === this.length ? l(this.promise, this._result) : (this.length = this.length || 0,
              this._enumerate(e),
              0 === this._remaining && l(this.promise, this._result))) : h(this.promise, new Error("Array Methods must be provided an Array"))
      }

      function m(t) {
        this[k] = L++,
          this._result = this._state = void 0,
          this._subscribers = [],
          s !== t && ("function" != typeof t && function () {
              throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
            }(),
            this instanceof m ? function (t, e) {
              try {
                e(function (e) {
                  a(t, e)
                }, function (e) {
                  h(t, e)
                })
              } catch (e) {
                h(t, e)
              }
            }(this, t) : function () {
              throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
            }())
      }
      var b = void 0,
        g = b = Array.isArray ? Array.isArray : function (t) {
          return "[object Array]" === Object.prototype.toString.call(t)
        },
        A = 0,
        j = void 0,
        S = void 0,
        E = function (t, e) {
          x[A] = t,
            x[A + 1] = e,
            2 === (A += 2) && (S ? S(n) : Y())
        },
        T = "undefined" != typeof window ? window : void 0,
        M = T || {},
        C = M.MutationObserver || M.WebKitMutationObserver,
        O = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process),
        P = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
        x = new Array(1e3),
        Y = void 0;
      Y = O ? function () {
          return process.nextTick(n)
        } :
        C ? function () {
          var t = 0,
            e = new C(n),
            r = document.createTextNode("");
          return e.observe(r, {
              characterData: !0
            }),
            function () {
              r.data = t = ++t % 2
            }
        }() : P ? function () {
          var t = new MessageChannel;
          return t.port1.onmessage = n,
            function () {
              return t.port2.postMessage(0)
            }
        }() : void 0 === T ? r() : e();
      var k = Math.random().toString(36).substring(16),
        D = void 0,
        F = 1,
        N = 2,
        q = new _,
        K = new _,
        L = 0;
      return w.prototype._enumerate = function (t) {
          for (var e = 0; this._state === D && e < t.length; e++)
            this._eachEntry(t[e], e)
        },
        w.prototype._eachEntry = function (t, e) {
          var n = this._instanceConstructor,
            r = n.resolve;
          if (r === i) {
            var a = u(t);
            if (a === o && t._state !== D)
              this._settledAt(t._state, e, t._result);
            else if ("function" != typeof a)
              this._remaining--,
              this._result[e] = t;
            else if (n === m) {
              var f = new n(s);
              c(f, t, a),
                this._willSettleAt(f, e)
            } else
              this._willSettleAt(new n(function (e) {
                return e(t)
              }), e)
          } else
            this._willSettleAt(r(t), e)
        },
        w.prototype._settledAt = function (t, e, n) {
          var r = this.promise;
          r._state === D && (this._remaining--,
              t === N ? h(r, n) : this._result[e] = n),
            0 === this._remaining && l(r, this._result)
        },
        w.prototype._willSettleAt = function (t, e) {
          var n = this;
          v(t, void 0, function (t) {
            return n._settledAt(F, e, t)
          }, function (t) {
            return n._settledAt(N, e, t)
          })
        },
        m.all = function (t) {
          return new w(this, t).promise
        },
        m.race = function (t) {
          var e = this;
          return new e(g(t) ? function (n, r) {
              for (var o = t.length, i = 0; i < o; i++)
                e.resolve(t[i]).then(n, r)
            } :
            function (t, e) {
              return e(new TypeError("You must pass an array to race."))
            }
          )
        },
        m.resolve = i,
        m.reject = function (t) {
          var e = new this(s);
          return h(e, t),
            e
        },
        m._setScheduler = function (t) {
          S = t
        },
        m._setAsap = function (t) {
          E = t
        },
        m._asap = E,
        m.prototype = {
          constructor: m,
          then: o,
          catch: function (t) {
            return this.then(null, t)
          }
        },
        m.polyfill = function () {
          var t = void 0;
          if ("undefined" != typeof window)
            t = window;
          else if ("undefined" != typeof self)
            t = self;
          else
            try {
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
            if ("[object Promise]" === n && !e.cast)
              return
          }
          t.Promise = m
        },
        m.Promise = m,
        m
    })
  };
  o._6Y3w2Bd = function (t, e, s, i, r) {
    function n(t) {
      if (t)
        return function (t) {
          for (var e in n.prototype)
            t[e] = n.prototype[e];
          return t
        }(t)
    }
    e.exports = n,
      n.prototype.on = n.prototype.addEventListener = function (t, e) {
        return this._callbacks = this._callbacks || {},
          (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e),
          this
      },
      n.prototype.once = function (t, e) {
        function s() {
          this.off(t, s),
            e.apply(this, arguments)
        }
        return s.fn = e,
          this.on(t, s),
          this
      },
      n.prototype.off = n.prototype.removeListener = n.prototype.removeAllListeners = n.prototype.removeEventListener = function (t, e) {
        if (this._callbacks = this._callbacks || {},
          0 == arguments.length)
          return this._callbacks = {},
            this;
        var s = this._callbacks["$" + t];
        if (!s)
          return this;
        if (1 == arguments.length)
          return delete this._callbacks["$" + t],
            this;
        for (var i, r = 0; r < s.length; r++)
          if ((i = s[r]) === e || i.fn === e) {
            s.splice(r, 1);
            break
          }
        return this
      },
      n.prototype.emit = function (t) {
        this._callbacks = this._callbacks || {};
        var e = [].slice.call(arguments, 1),
          s = this._callbacks["$" + t];
        if (s)
          for (var i = 0, r = (s = s.slice(0)).length; i < r; ++i)
            s[i].apply(this, e);
        return this
      },
      n.prototype.listeners = function (t) {
        return this._callbacks = this._callbacks || {},
          this._callbacks["$" + t] || []
      },
      n.prototype.hasListeners = function (t) {
        return !!this.listeners(t).length
      }
  };
  o._OGLNqj4 = function (n, e, t, o, u) {
    var d = o(n("_YselYzt"));
    e.exports = function (n) {
      return null !== n && "object" === (void 0 === n ? "undefined" : (0,
        d.default)(n))
    }
  };
  o.WYhUk9X6 = function (t, e, r, i, s) {
    function o(t) {
      if (t)
        return function (t) {
          for (var e in o.prototype)
            t[e] = o.prototype[e];
          return t
        }(t)
    }
    var n = i(t("XbxgipO3")),
      a = i(t("_YselYzt")),
      h = t("_OGLNqj4");
    e.exports = o,
      o.prototype.clearTimeout = function () {
        return clearTimeout(this._timer),
          clearTimeout(this._responseTimeoutTimer),
          delete this._timer,
          delete this._responseTimeoutTimer,
          this
      },
      o.prototype.parse = function (t) {
        return this._parser = t,
          this
      },
      o.prototype.responseType = function (t) {
        return this._responseType = t,
          this
      },
      o.prototype.serialize = function (t) {
        return this._serializer = t,
          this
      },
      o.prototype.timeout = function (t) {
        if (!t || "object" !== (void 0 === t ? "undefined" : (0,
            a.default)(t)))
          return this._timeout = t,
            this._responseTimeout = 0,
            this;
        for (var e in t)
          switch (e) {
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
      },
      o.prototype.retry = function (t, e) {
        return 0 !== arguments.length && !0 !== t || (t = 1),
          t <= 0 && (t = 0),
          this._maxRetries = t,
          this._retries = 0,
          this._retryCallback = e,
          this
      };
    var u = ["ECONNRESET", "ETIMEDOUT", "EADDRINFO", "ESOCKETTIMEDOUT"];
    o.prototype._shouldRetry = function (t, e) {
        if (!this._maxRetries || this._retries++ >= this._maxRetries)
          return !1;
        if (this._retryCallback)
          try {
            var r = this._retryCallback(t, e);
            if (!0 === r)
              return !0;
            if (!1 === r)
              return !1
          } catch (t) {
            console.error(t)
          }
        if (e && e.status && e.status >= 500 && 501 != e.status)
          return !0;
        if (t) {
          if (t.code && ~u.indexOf(t.code))
            return !0;
          if (t.timeout && "ECONNABORTED" == t.code)
            return !0;
          if (t.crossDomain)
            return !0
        }
        return !1
      },
      o.prototype._retry = function () {
        return this.clearTimeout(),
          this.req && (this.req = null,
            this.req = this.request()),
          this._aborted = !1,
          this.timedout = !1,
          this._end()
      },
      o.prototype.then = function (t, e) {
        if (!this._fullfilledPromise) {
          var r = this;
          this._endCalled && console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"),
            this._fullfilledPromise = new n.default(function (t, e) {
              r.end(function (r, i) {
                r ? e(r) : t(i)
              })
            })
        }
        return this._fullfilledPromise.then(t, e)
      },
      o.prototype.catch = function (t) {
        return this.then(void 0, t)
      },
      o.prototype.use = function (t) {
        return t(this),
          this
      },
      o.prototype.ok = function (t) {
        if ("function" != typeof t)
          throw Error("Callback required");
        return this._okCallback = t,
          this
      },
      o.prototype._isResponseOK = function (t) {
        return !!t && (this._okCallback ? this._okCallback(t) : t.status >= 200 && t.status < 300)
      },
      o.prototype.get = function (t) {
        return this._header[t.toLowerCase()]
      },
      o.prototype.getHeader = o.prototype.get,
      o.prototype.set = function (t, e) {
        if (h(t)) {
          for (var r in t)
            this.set(r, t[r]);
          return this
        }
        return this._header[t.toLowerCase()] = e,
          this.header[t] = e,
          this
      },
      o.prototype.unset = function (t) {
        return delete this._header[t.toLowerCase()],
          delete this.header[t],
          this
      },
      o.prototype.field = function (t, e) {
        if (null === t || void 0 === t)
          throw new Error(".field(name, val) name can not be empty");
        if (this._data && console.error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()"),
          h(t)) {
          for (var r in t)
            this.field(r, t[r]);
          return this
        }
        if (Array.isArray(e)) {
          for (var i in e)
            this.field(t, e[i]);
          return this
        }
        if (null === e || void 0 === e)
          throw new Error(".field(name, val) val can not be empty");
        return "boolean" == typeof e && (e = "" + e),
          this._getFormData().append(t, e),
          this
      },
      o.prototype.abort = function () {
        return this._aborted ? this : (this._aborted = !0,
          this.xhr && this.xhr.abort(),
          this.req && this.req.abort(),
          this.clearTimeout(),
          this.emit("abort"),
          this)
      },
      o.prototype._auth = function (t, e, r, i) {
        switch (r.type) {
          case "basic":
            this.set("Authorization", "Basic " + i(t + ":" + e));
            break;
          case "auto":
            this.username = t,
              this.password = e;
            break;
          case "bearer":
            this.set("Authorization", "Bearer " + t)
        }
        return this
      },
      o.prototype.withCredentials = function (t) {
        return void 0 == t && (t = !0),
          this._withCredentials = t,
          this
      },
      o.prototype.redirects = function (t) {
        return this._maxRedirects = t,
          this
      },
      o.prototype.maxResponseSize = function (t) {
        if ("number" != typeof t)
          throw TypeError("Invalid argument");
        return this._maxResponseSize = t,
          this
      },
      o.prototype.toJSON = function () {
        return {
          method: this.method,
          url: this.url,
          data: this._data,
          headers: this._header
        }
      },
      o.prototype.send = function (t) {
        var e = h(t),
          r = this._header["content-type"];
        if (this._formData && console.error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()"),
          e && !this._data)
          Array.isArray(t) ? this._data = [] : this._isHost(t) || (this._data = {});
        else if (t && this._data && this._isHost(this._data))
          throw Error("Can't merge these send calls");
        if (e && h(this._data))
          for (var i in t)
            this._data[i] = t[i];
        else
          "string" == typeof t ? (r || this.type("form"),
            r = this._header["content-type"],
            this._data = "application/x-www-form-urlencoded" == r ? this._data ? this._data + "&" + t : t : (this._data || "") + t) : this._data = t;
        return !e || this._isHost(t) ? this : (r || this.type("json"),
          this)
      },
      o.prototype.sortQuery = function (t) {
        return this._sort = void 0 === t || t,
          this
      },
      o.prototype._finalizeQueryString = function () {
        var t = this._query.join("&");
        if (t && (this.url += (this.url.indexOf("?") >= 0 ? "&" : "?") + t),
          this._query.length = 0,
          this._sort) {
          var e = this.url.indexOf("?");
          if (e >= 0) {
            var r = this.url.substring(e + 1).split("&");
            "function" == typeof this._sort ? r.sort(this._sort) : r.sort(),
              this.url = this.url.substring(0, e) + "?" + r.join("&")
          }
        }
      },
      o.prototype._appendQueryString = function () {
        console.trace("Unsupported")
      },
      o.prototype._timeoutError = function (t, e, r) {
        if (!this._aborted) {
          var i = new Error(t + e + "ms exceeded");
          i.timeout = e,
            i.code = "ECONNABORTED",
            i.errno = r,
            this.timedout = !0,
            this.abort(),
            this.callback(i)
        }
      },
      o.prototype._setTimeouts = function () {
        var t = this;
        this._timeout && !this._timer && (this._timer = setTimeout(function () {
            t._timeoutError("Timeout of ", t._timeout, "ETIME")
          }, this._timeout)),
          this._responseTimeout && !this._responseTimeoutTimer && (this._responseTimeoutTimer = setTimeout(function () {
            t._timeoutError("Response timeout of ", t._responseTimeout, "ETIMEDOUT")
          }, this._responseTimeout))
      }
  };
  o._YOekh_F = function (e, t, n, i, r) {
    n.type = function (e) {
        return e.split(/ *; */).shift()
      },
      n.params = function (e) {
        return e.split(/ *; */).reduce(function (e, t) {
          var n = t.split(/ *= */),
            i = n.shift(),
            r = n.shift();
          return i && r && (e[i] = r),
            e
        }, {})
      },
      n.parseLinks = function (e) {
        return e.split(/ *, */).reduce(function (e, t) {
          var n = t.split(/ *; */),
            i = n[0].slice(1, -1);
          return e[n[1].split(/ *= */)[1].slice(1, -1)] = i,
            e
        }, {})
      },
      n.cleanHeader = function (e, t) {
        return delete e["content-type"],
          delete e["content-length"],
          delete e["transfer-encoding"],
          delete e.host,
          t && (delete e.authorization,
            delete e.cookie),
          e
      }
  };
  o.S6lTIu4s = function (t, r, e, i, s) {
    function o(t) {
      if (t)
        return function (t) {
          for (var r in o.prototype)
            t[r] = o.prototype[r];
          return t
        }(t)
    }
    var n = t("_YOekh_F");
    r.exports = o,
      o.prototype.get = function (t) {
        return this.header[t.toLowerCase()]
      },
      o.prototype._setHeaderProperties = function (t) {
        var r = t["content-type"] || "";
        this.type = n.type(r);
        var e = n.params(r);
        for (var i in e)
          this[i] = e[i];
        this.links = {};
        try {
          t.link && (this.links = n.parseLinks(t.link))
        } catch (t) {}
      },
      o.prototype._setStatusProperties = function (t) {
        var r = t / 100 | 0;
        this.status = this.statusCode = t,
          this.statusType = r,
          this.info = 1 == r,
          this.ok = 2 == r,
          this.redirect = 3 == r,
          this.clientError = 4 == r,
          this.serverError = 5 == r,
          this.error = (4 == r || 5 == r) && this.toError(),
          this.accepted = 202 == t,
          this.noContent = 204 == t,
          this.badRequest = 400 == t,
          this.unauthorized = 401 == t,
          this.notAcceptable = 406 == t,
          this.forbidden = 403 == t,
          this.notFound = 404 == t
      }
  };
  o._52LnwaJ = function (t, e, n, r, s) {
    function u() {
      this._defaults = []
    }
    ["use", "on", "once", "set", "query", "type", "accept", "auth", "withCredentials", "sortQuery", "retry", "ok", "redirects", "timeout", "buffer", "serialize", "parse", "ca", "key", "pfx", "cert"].forEach(function (t) {
        u.prototype[t] = function () {
          return this._defaults.push({
              fn: t,
              arguments: arguments
            }),
            this
        }
      }),
      u.prototype._setDefaults = function (t) {
        this._defaults.forEach(function (e) {
          t[e.fn].apply(t, e.arguments)
        })
      },
      e.exports = u
  };
  o.A33e_8Sy = function (t, e, r, n, s) {
    function o(t) {
      if (!m(t))
        return t;
      var e = [];
      for (var r in t)
        i(e, r, t[r]);
      return e.join("&")
    }

    function i(t, e, r) {
      if (null != r)
        if (Array.isArray(r))
          r.forEach(function (r) {
            i(t, e, r)
          });
        else if (m(r))
        for (var n in r)
          i(t, e + "[" + n + "]", r[n]);
      else
        t.push(encodeURIComponent(e) + "=" + encodeURIComponent(r));
      else
        null === r && t.push(encodeURIComponent(e))
    }

    function a(t) {
      for (var e, r, n = {}, s = t.split("&"), o = 0, i = s.length; o < i; ++o)
        -
        1 == (r = (e = s[o]).indexOf("=")) ? n[decodeURIComponent(e)] = "" : n[decodeURIComponent(e.slice(0, r))] = decodeURIComponent(e.slice(r + 1));
      return n
    }

    function u(t) {
      return /[\/+]json\b/.test(t)
    }

    function p(t) {
      this.req = t,
        this.xhr = this.req.xhr,
        this.text = "HEAD" != this.req.method && ("" === this.xhr.responseType || "text" === this.xhr.responseType) || void 0 === this.xhr.responseType ? this.xhr.responseText : null,
        this.statusText = this.req.xhr.statusText;
      var e = this.xhr.status;
      1223 === e && (e = 204),
        this._setStatusProperties(e),
        this.header = this.headers = function (t) {
          for (var e, r, n, s, o = t.split(/\r?\n/), i = {}, a = 0, u = o.length; a < u; ++a)
            -
            1 !== (e = (r = o[a]).indexOf(":")) && (n = r.slice(0, e).toLowerCase(),
              s = v(r.slice(e + 1)),
              i[n] = s);
          return i
        }(this.xhr.getAllResponseHeaders()),
        this.header["content-type"] = this.xhr.getResponseHeader("content-type"),
        this._setHeaderProperties(this.header),
        null === this.text && t._responseType ? this.body = this.xhr.response : this.body = "HEAD" != this.req.method ? this._parseBody(this.text ? this.text : this.xhr.response) : null
    }

    function h(t, e) {
      var r = this;
      this._query = this._query || [],
        this.method = t,
        this.url = e,
        this.header = {},
        this._header = {},
        this.on("end", function () {
          var t = null,
            e = null;
          try {
            e = new p(r)
          } catch (e) {
            return t = new Error("Parser is unable to parse the response"),
              t.parse = !0,
              t.original = e,
              r.xhr ? (t.rawResponse = void 0 === r.xhr.responseType ? r.xhr.responseText : r.xhr.response,
                t.status = r.xhr.status ? r.xhr.status : null,
                t.statusCode = t.status) : (t.rawResponse = null,
                t.status = null),
              r.callback(t)
          }
          r.emit("response", e);
          var n;
          try {
            r._isResponseOK(e) || (n = new Error(e.statusText || "Unsuccessful HTTP response"))
          } catch (t) {
            n = t
          }
          n ? (n.original = t,
            n.response = e,
            n.status = e.status,
            r.callback(n, e)) : r.callback(null, e)
        })
    }

    function c(t, e, r) {
      var n = x("DELETE", t);
      return "function" == typeof e && (r = e,
          e = null),
        e && n.send(e),
        r && n.end(r),
        n
    }
    var l, d = n(t("_YselYzt")),
      f = n(t("qUYrYx_P"));
    "undefined" != typeof window ? l = window : "undefined" != typeof self ? l = self : (console.warn("Using browser-only version of superagent in non-browser environment"),
      l = void 0);
    var y = t("_6Y3w2Bd"),
      w = t("WYhUk9X6"),
      m = t("_OGLNqj4"),
      _ = t("S6lTIu4s"),
      T = t("_52LnwaJ"),
      x = r = e.exports = function (t, e) {
        return "function" == typeof e ? new r.Request("GET", t).end(e) : 1 == arguments.length ? new r.Request("GET", t) : new r.Request(t, e)
      };
    r.Request = h,
      x.getXHR = function () {
        if (!(!l.XMLHttpRequest || l.location && "file:" == l.location.protocol && l.ActiveXObject))
          return new XMLHttpRequest;
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
    var v = "".trim ? function (t) {
        return t.trim()
      } :
      function (t) {
        return t.replace(/(^\s*|\s*$)/g, "")
      };
    x.serializeObject = o,
      x.parseString = a,
      x.types = {
        html: "text/html",
        json: "application/json",
        xml: "text/xml",
        urlencoded: "application/x-www-form-urlencoded",
        form: "application/x-www-form-urlencoded",
        "form-data": "application/x-www-form-urlencoded"
      },
      x.serialize = {
        "application/x-www-form-urlencoded": o,
        "application/json": f.default
      },
      x.parse = {
        "application/x-www-form-urlencoded": a,
        "application/json": JSON.parse
      },
      _(p.prototype),
      p.prototype._parseBody = function (t) {
        var e = x.parse[this.type];
        return this.req._parser ? this.req._parser(this, t) : (!e && u(this.type) && (e = x.parse["application/json"]),
          e && t && (t.length || t instanceof Object) ? e(t) : null)
      },
      p.prototype.toError = function () {
        var t = this.req,
          e = t.method,
          r = t.url,
          n = "cannot " + e + " " + r + " (" + this.status + ")",
          s = new Error(n);
        return s.status = this.status,
          s.method = e,
          s.url = r,
          s
      },
      x.Response = p,
      y(h.prototype),
      w(h.prototype),
      h.prototype.type = function (t) {
        return this.set("Content-Type", x.types[t] || t),
          this
      },
      h.prototype.accept = function (t) {
        return this.set("Accept", x.types[t] || t),
          this
      },
      h.prototype.auth = function (t, e, r) {
        1 === arguments.length && (e = ""),
          "object" === (void 0 === e ? "undefined" : (0,
            d.default)(e)) && null !== e && (r = e,
            e = ""),
          r || (r = {
            type: "function" == typeof btoa ? "basic" : "auto"
          });
        return this._auth(t, e, r, function (t) {
          if ("function" == typeof btoa)
            return btoa(t);
          throw new Error("Cannot use basic auth, btoa is not a function")
        })
      },
      h.prototype.query = function (t) {
        return "string" != typeof t && (t = o(t)),
          t && this._query.push(t),
          this
      },
      h.prototype.attach = function (t, e, r) {
        if (e) {
          if (this._data)
            throw Error("superagent can't mix .send() and .attach()");
          this._getFormData().append(t, e, r || e.name)
        }
        return this
      },
      h.prototype._getFormData = function () {
        return this._formData || (this._formData = new l.FormData),
          this._formData
      },
      h.prototype.callback = function (t, e) {
        if (this._shouldRetry(t, e))
          return this._retry();
        var r = this._callback;
        this.clearTimeout(),
          t && (this._maxRetries && (t.retries = this._retries - 1),
            this.emit("error", t)),
          r(t, e)
      },
      h.prototype.crossDomainError = function () {
        var t = new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");
        t.crossDomain = !0,
          t.status = this.status,
          t.method = this.method,
          t.url = this.url,
          this.callback(t)
      },
      h.prototype.buffer = h.prototype.ca = h.prototype.agent = function () {
        return console.warn("This is not supported in browser version of superagent"),
          this
      },
      h.prototype.pipe = h.prototype.write = function () {
        throw Error("Streaming is not supported in browser version of superagent")
      },
      h.prototype._isHost = function (t) {
        return t && "object" === (void 0 === t ? "undefined" : (0,
          d.default)(t)) && !Array.isArray(t) && "[object Object]" !== Object.prototype.toString.call(t)
      },
      h.prototype.end = function (t) {
        return this._endCalled && console.warn("Warning: .end() was called twice. This is not supported in superagent"),
          this._endCalled = !0,
          this._callback = t || function () {},
          this._finalizeQueryString(),
          this._end()
      },
      h.prototype._end = function () {
        var t = this,
          e = this.xhr = x.getXHR(),
          r = this._formData || this._data;
        this._setTimeouts(),
          e.onreadystatechange = function () {
            var r = e.readyState;
            if (r >= 2 && t._responseTimeoutTimer && clearTimeout(t._responseTimeoutTimer),
              4 == r) {
              var n;
              try {
                n = e.status
              } catch (t) {
                n = 0
              }
              if (!n) {
                if (t.timedout || t._aborted)
                  return;
                return t.crossDomainError()
              }
              t.emit("end")
            }
          };
        var n = function (e, r) {
          r.total > 0 && (r.percent = r.loaded / r.total * 100),
            r.direction = e,
            t.emit("progress", r)
        };
        if (this.hasListeners("progress"))
          try {
            e.onprogress = n.bind(null, "download"),
              e.upload && (e.upload.onprogress = n.bind(null, "upload"))
          } catch (t) {}
        try {
          this.username && this.password ? e.open(this.method, this.url, !0, this.username, this.password) : e.open(this.method, this.url, !0)
        } catch (t) {
          return this.callback(t)
        }
        if (this._withCredentials && (e.withCredentials = !0),
          !this._formData && "GET" != this.method && "HEAD" != this.method && "string" != typeof r && !this._isHost(r)) {
          var s = this._header["content-type"],
            o = this._serializer || x.serialize[s ? s.split(";")[0] : ""];
          !o && u(s) && (o = x.serialize["application/json"]),
            o && (r = o(r))
        }
        for (var i in this.header)
          null != this.header[i] && this.header.hasOwnProperty(i) && e.setRequestHeader(i, this.header[i]);
        return this._responseType && (e.responseType = this._responseType),
          this.emit("request", this),
          e.send(void 0 !== r ? r : null),
          this
      },
      x.agent = function () {
        return new T
      },
      ["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"].forEach(function (t) {
        T.prototype[t.toLowerCase()] = function (e, r) {
          var n = new x.Request(t, e);
          return this._setDefaults(n),
            r && n.end(r),
            n
        }
      }),
      T.prototype.del = T.prototype.delete,
      x.get = function (t, e, r) {
        var n = x("GET", t);
        return "function" == typeof e && (r = e,
            e = null),
          e && n.query(e),
          r && n.end(r),
          n
      },
      x.head = function (t, e, r) {
        var n = x("HEAD", t);
        return "function" == typeof e && (r = e,
            e = null),
          e && n.query(e),
          r && n.end(r),
          n
      },
      x.options = function (t, e, r) {
        var n = x("OPTIONS", t);
        return "function" == typeof e && (r = e,
            e = null),
          e && n.send(e),
          r && n.end(r),
          n
      },
      x.del = c,
      x.delete = c,
      x.patch = function (t, e, r) {
        var n = x("PATCH", t);
        return "function" == typeof e && (r = e,
            e = null),
          e && n.send(e),
          r && n.end(r),
          n
      },
      x.post = function (t, e, r) {
        var n = x("POST", t);
        return "function" == typeof e && (r = e,
            e = null),
          e && n.send(e),
          r && n.end(r),
          n
      },
      x.put = function (t, e, r) {
        var n = x("PUT", t);
        return "function" == typeof e && (r = e,
            e = null),
          e && n.send(e),
          r && n.end(r),
          n
      }
  };
  o._dwFel5y = function (n, e, t, o) {
    n("CdXvOVUe")("getOwnPropertyNames", function () {
      return n("VMTU855i").f
    })
  };
  o.wRMOr56F = function (e, t, n, r) {
    e("_dwFel5y");
    var o = e("_ScmT_yv").Object;
    t.exports = function (e) {
      return o.getOwnPropertyNames(e)
    }
  };
  o.RmnacSQC = function (e, o, t, u) {
    o.exports = {
      default: e("wRMOr56F"),
      __esModule: !0
    }
  };
  o.bRnKAODq = function (t, e, r, o, n) {
    var i = o(t("XbxgipO3")),
      s = o(t("RmnacSQC")),
      a = o(t("V4Ce3JJs")),
      u = o(t("IUH_e8R9"));
    ! function (t) {
      function e(t) {
        if ("string" != typeof t && (t = String(t)),
          /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))
          throw new TypeError("Invalid character in header field name");
        return t.toLowerCase()
      }

      function r(t) {
        return "string" != typeof t && (t = String(t)),
          t
      }

      function o(t) {
        var e = {
          next: function () {
            var e = t.shift();
            return {
              done: void 0 === e,
              value: e
            }
          }
        };
        return m.iterable && (e[a.default] = function () {
            return e
          }),
          e
      }

      function n(t) {
        this.map = {},
          t instanceof n ? t.forEach(function (t, e) {
            this.append(e, t)
          }, this) : Array.isArray(t) ? t.forEach(function (t) {
            this.append(t[0], t[1])
          }, this) : t && (0,
            s.default)(t).forEach(function (e) {
            this.append(e, t[e])
          }, this)
      }

      function f(t) {
        if (t.bodyUsed)
          return i.default.reject(new TypeError("Already read"));
        t.bodyUsed = !0
      }

      function h(t) {
        return new i.default(function (e, r) {
          t.onload = function () {
              e(t.result)
            },
            t.onerror = function () {
              r(t.error)
            }
        })
      }

      function d(t) {
        var e = new FileReader,
          r = h(e);
        return e.readAsArrayBuffer(t),
          r
      }

      function l(t) {
        if (t.slice)
          return t.slice(0);
        var e = new Uint8Array(t.byteLength);
        return e.set(new Uint8Array(t)),
          e.buffer
      }

      function y() {
        return this.bodyUsed = !1,
          this._initBody = function (t) {
            if (this._bodyInit = t,
              t)
              if ("string" == typeof t)
                this._bodyText = t;
              else if (m.blob && Blob.prototype.isPrototypeOf(t))
              this._bodyBlob = t;
            else if (m.formData && FormData.prototype.isPrototypeOf(t))
              this._bodyFormData = t;
            else if (m.searchParams && URLSearchParams.prototype.isPrototypeOf(t))
              this._bodyText = t.toString();
            else if (m.arrayBuffer && m.blob && v(t))
              this._bodyArrayBuffer = l(t.buffer),
              this._bodyInit = new Blob([this._bodyArrayBuffer]);
            else {
              if (!m.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(t) && !_(t))
                throw new Error("unsupported BodyInit type");
              this._bodyArrayBuffer = l(t)
            } else
              this._bodyText = "";
            this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : m.searchParams && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
          },
          m.blob && (this.blob = function () {
              var t = f(this);
              if (t)
                return t;
              if (this._bodyBlob)
                return i.default.resolve(this._bodyBlob);
              if (this._bodyArrayBuffer)
                return i.default.resolve(new Blob([this._bodyArrayBuffer]));
              if (this._bodyFormData)
                throw new Error("could not read FormData body as blob");
              return i.default.resolve(new Blob([this._bodyText]))
            },
            this.arrayBuffer = function () {
              return this._bodyArrayBuffer ? f(this) || i.default.resolve(this._bodyArrayBuffer) : this.blob().then(d)
            }
          ),
          this.text = function () {
            var t = f(this);
            if (t)
              return t;
            if (this._bodyBlob)
              return function (t) {
                var e = new FileReader,
                  r = h(e);
                return e.readAsText(t),
                  r
              }(this._bodyBlob);
            if (this._bodyArrayBuffer)
              return i.default.resolve(function (t) {
                for (var e = new Uint8Array(t), r = new Array(e.length), o = 0; o < e.length; o++)
                  r[o] = String.fromCharCode(e[o]);
                return r.join("")
              }(this._bodyArrayBuffer));
            if (this._bodyFormData)
              throw new Error("could not read FormData body as text");
            return i.default.resolve(this._bodyText)
          },
          m.formData && (this.formData = function () {
            return this.text().then(c)
          }),
          this.json = function () {
            return this.text().then(JSON.parse)
          },
          this
      }

      function p(t, e) {
        var r = (e = e || {}).body;
        if (t instanceof p) {
          if (t.bodyUsed)
            throw new TypeError("Already read");
          this.url = t.url,
            this.credentials = t.credentials,
            e.headers || (this.headers = new n(t.headers)),
            this.method = t.method,
            this.mode = t.mode,
            r || null == t._bodyInit || (r = t._bodyInit,
              t.bodyUsed = !0)
        } else
          this.url = String(t);
        if (this.credentials = e.credentials || this.credentials || "omit",
          !e.headers && this.headers || (this.headers = new n(e.headers)),
          this.method = function (t) {
            var e = t.toUpperCase();
            return A.indexOf(e) > -1 ? e : t
          }(e.method || this.method || "GET"),
          this.mode = e.mode || this.mode || null,
          this.referrer = null,
          ("GET" === this.method || "HEAD" === this.method) && r)
          throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(r)
      }

      function c(t) {
        var e = new FormData;
        return t.trim().split("&").forEach(function (t) {
            if (t) {
              var r = t.split("="),
                o = r.shift().replace(/\+/g, " "),
                n = r.join("=").replace(/\+/g, " ");
              e.append(decodeURIComponent(o), decodeURIComponent(n))
            }
          }),
          e
      }

      function b(t, e) {
        e || (e = {}),
          this.type = "default",
          this.status = "status" in e ? e.status : 200,
          this.ok = this.status >= 200 && this.status < 300,
          this.statusText = "statusText" in e ? e.statusText : "OK",
          this.headers = new n(e.headers),
          this.url = e.url || "",
          this._initBody(t)
      }
      if (!t.fetch) {
        var m = {
          searchParams: "URLSearchParams" in t,
          iterable: "Symbol" in t && "iterator" in u.default,
          blob: "FileReader" in t && "Blob" in t && function () {
            try {
              return new Blob,
                !0
            } catch (t) {
              return !1
            }
          }(),
          formData: "FormData" in t,
          arrayBuffer: "ArrayBuffer" in t
        };
        if (m.arrayBuffer)
          var w = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
            v = function (t) {
              return t && DataView.prototype.isPrototypeOf(t)
            },
            _ = ArrayBuffer.isView || function (t) {
              return t && w.indexOf(Object.prototype.toString.call(t)) > -1
            };
        n.prototype.append = function (t, o) {
            t = e(t),
              o = r(o);
            var n = this.map[t];
            this.map[t] = n ? n + "," + o : o
          },
          n.prototype.delete = function (t) {
            delete this.map[e(t)]
          },
          n.prototype.get = function (t) {
            return t = e(t),
              this.has(t) ? this.map[t] : null
          },
          n.prototype.has = function (t) {
            return this.map.hasOwnProperty(e(t))
          },
          n.prototype.set = function (t, o) {
            this.map[e(t)] = r(o)
          },
          n.prototype.forEach = function (t, e) {
            for (var r in this.map)
              this.map.hasOwnProperty(r) && t.call(e, this.map[r], r, this)
          },
          n.prototype.keys = function () {
            var t = [];
            return this.forEach(function (e, r) {
                t.push(r)
              }),
              o(t)
          },
          n.prototype.values = function () {
            var t = [];
            return this.forEach(function (e) {
                t.push(e)
              }),
              o(t)
          },
          n.prototype.entries = function () {
            var t = [];
            return this.forEach(function (e, r) {
                t.push([r, e])
              }),
              o(t)
          },
          m.iterable && (n.prototype[a.default] = n.prototype.entries);
        var A = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
        p.prototype.clone = function () {
            return new p(this, {
              body: this._bodyInit
            })
          },
          y.call(p.prototype),
          y.call(b.prototype),
          b.prototype.clone = function () {
            return new b(this._bodyInit, {
              status: this.status,
              statusText: this.statusText,
              headers: new n(this.headers),
              url: this.url
            })
          },
          b.error = function () {
            var t = new b(null, {
              status: 0,
              statusText: ""
            });
            return t.type = "error",
              t
          };
        var B = [301, 302, 303, 307, 308];
        b.redirect = function (t, e) {
            if (-1 === B.indexOf(e))
              throw new RangeError("Invalid status code");
            return new b(null, {
              status: e,
              headers: {
                location: t
              }
            })
          },
          t.Headers = n,
          t.Request = p,
          t.Response = b,
          t.fetch = function (t, e) {
            return new i.default(function (r, o) {
              var i = new p(t, e),
                s = new XMLHttpRequest;
              s.onload = function () {
                  var t = {
                    status: s.status,
                    statusText: s.statusText,
                    headers: function (t) {
                      var e = new n;
                      return t.split(/\r?\n/).forEach(function (t) {
                          var r = t.split(":"),
                            o = r.shift().trim();
                          if (o) {
                            var n = r.join(":").trim();
                            e.append(o, n)
                          }
                        }),
                        e
                    }(s.getAllResponseHeaders() || "")
                  };
                  t.url = "responseURL" in s ? s.responseURL : t.headers.get("X-Request-URL");
                  var e = "response" in s ? s.response : s.responseText;
                  r(new b(e, t))
                },
                s.onerror = function () {
                  o(new TypeError("Network request failed"))
                },
                s.ontimeout = function () {
                  o(new TypeError("Network request failed"))
                },
                s.open(i.method, i.url, !0),
                "include" === i.credentials && (s.withCredentials = !0),
                "responseType" in s && m.blob && (s.responseType = "blob"),
                i.headers.forEach(function (t, e) {
                  s.setRequestHeader(e, t)
                }),
                s.send(void 0 === i._bodyInit ? null : i._bodyInit)
            })
          },
          t.fetch.polyfill = !0
      }
    }("undefined" != typeof self ? self : void 0)
  };
  o.pz3Ku2B4 = function (t, a, o, e, i) {
    Object.defineProperty(o, "__esModule", {
        value: !0
      }),
      o.TEST_URL_CONFIG = o.CONFIG = void 0,
      o.getConfig = function () {
        var t = p.default.request("app") || (d.default.os.android && !d.default.browser.weixin ? "video_article" : "news_article");
        return (window.isDownloadTest || window.isToutiaoVideo) && (t = "news_article"),
          "ecom_huimai" === p.default.request("app") && (t = "ecom_huimai"),
          "guagualongkids" === p.default.request("app") && (t = "guagualongkids"),
          "f100" === p.default.request("app") && (t = "f100"),
          "news_calendar" === p.default.request("app") && (t = "news_calendar"),
          "news_weather" === p.default.request("app") && (t = "news_weather"),
          d.default.os.ios && "news_article_lite" === t && (t = "news_article"),
          window.isXiguaLongVideoPage && "search" === p.default.request("from") && (t = "video_article"),
          r[t] || r.news_article
      };
    var p = e(t("xFryiHX9")),
      d = e(t("VcwWJehO")),
      n = "//s1.pstatp.com/growth/video_mobile_detail/image/banner_toutiao_icon.6NgPGihF.png",
      s = "//s1.pstatp.com/growth/video_mobile_detail/image/little_watermelon.Rax5qgGy.png",
      c = "//s1.pstatp.com/growth/video_mobile_detail/image/toutiaologo@3x.6yNCaqkN.png",
      r = o.CONFIG = {
        news_article: {
          app_name: "今日头条",
          app: "news_article",
          app_icon: n,
          app_icon_banner: c,
          watermark_class: "toutiao-watermark",
          universalLink: "//www.toutiao.com/m/detail/?"
        },
        news_article_lite: {
          app_name: "今日头条",
          app: "news_article_lite",
          app_icon: n,
          app_icon_banner: c,
          watermark_class: "toutiao-watermark",
          universalLink: "//www.toutiao.com/m/detail/?"
        },
        ecom_huimai: {
          app_name: "值点",
          app: "ecom_huimai",
          app_desc: "1元包邮，货到付款",
          app_icon: "//s1.pstatp.com/growth/video_mobile_detail/image/banner_huimai_icon.iQugIqMu.png",
          watermark_class: "huimai-watermark",
          app_icon_banner: "//s1.pstatp.com/growth/video_mobile_detail/image/ecom_huimai_icon_banner.yubVxgEh.png"
        },
        video_article: {
          app_name: "西瓜视频",
          app: "video_article",
          app_icon: "//s1.pstatp.com/growth/video_mobile_detail/image/xigua_logo_new.OResBpHG.png",
          app_icon_banner: "//s1.pstatp.com/growth/video_mobile_detail/image/xigualogo_new.mLdtyHzN.png",
          universalLink: "//www.365yg.com/m/video_detail/?"
        },
        guagualongkids: {
          app: "guagualongkids",
          app_name: "瓜瓜龙动画屋",
          app_card_desc: "海量动画 少儿专用",
          app_icon: s,
          relationcard_info: {
            avatar: s,
            name: "瓜瓜龙动画屋",
            desc: "海量动画 少儿专用"
          },
          watermark_class: "guagualong-watermark"
        },
        f100: {
          app_name: "幸福里",
          app: "f100",
          app_icon: "https://sf6-ttcdn-tos.pstatp.com/obj/ttfe/fproject/logo/xingfulilogo.png",
          app_desc: "好房就在幸福里"
        },
        news_calendar: {
          app_name: "好运万年历",
          app_icon: "//s1.pstatp.com/growth/video_mobile_detail/image/calendar_icon.hPAXHxEk.png",
          app: "news_calendar"
        },
        news_weather: {
          app_name: "好运天气",
          app_icon: "//s1.pstatp.com/growth/video_mobile_detail/image/weather_icon.K8OdLSfj.png",
          app: "news_weather"
        },
        video_lite: {
          app_name: "逗刷视频",
          app_icon: "//s1.pstatp.com/growth/video_mobile_detail/image/doushua_logo.ycGxQBAL.png",
          app: "video_lite"
        }
      };
    o.TEST_URL_CONFIG = {
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
      videoActivateTest: {
        default: "https://d.toutiao.com/6D1P/"
      },
      videoActivateControl: {
        default: "https://d.toutiao.com/edmT/"
      },
      liteVideoActivateTest: {
        default: "https://d.toutiao.com/SV45/"
      },
      liteVideoActivateControl: {
        default: "https://d.toutiao.com/FDNw/"
      },
      miniVideoActivateTest: {
        default: "https://d.toutiao.com/PEha/"
      },
      miniVideoActivateControl: {
        default: "https://d.toutiao.com/yeey/"
      },
      liteMiniVideoActivateTest: {
        default: "https://d.toutiao.com/A6s/"
      },
      liteMiniVideoActivateControl: {
        default: "https://d.toutiao.com/52AT/"
      }
    }
  };
  o.NpbYakKP = function (e, t, o, i, n) {
    function r() {
      return !(!g.default.browser.liteh5 && !g.default.browser.toutiao)
    }

    function a(e) {
      var t = e.app || m.default.request("app") || "news_article";
      if ("news_weather" === t)
        return "snssdk1261://";
      if ("news_calendar" === t)
        return "snssdk1221://";
      if ("video_lite" === t)
        return "snssdk1631://";
      if ("f100" === t)
        return "snssdk1370://";
      var o = void 0,
        i = 1;
      return g.default.os.android && (i = 3),
        "video_article" !== t && "news_article_lite" !== t || (i = ""),
        t.length ? (21 !== (o = {
            joke_essay: 5,
            news_article: 14,
            news_article_social: 20,
            joke_essay_social: 21,
            saying_essay_social: 22,
            explore_article: 25,
            joke_zone: 27,
            video_article: 32,
            news_article_lite: 35
          } [t]) && 24 !== o || (o = 5),
          22 === o && (o = 9),
          20 === o && 3 === i && (o = 14),
          "snssdk" + o + i + "://") : ""
    }

    function d(e) {
      e || (e = "click_weixin_rf_home"),
        "cpm" === m.default.request("utm_medium") && "weibo_tt" === m.default.request("utm_source") && (e = "click_wap_weibo_tt"),
        "wap_search" === m.default.request("utm_medium") && (e = "click_wap_search_" + m.default.request("utm_source")),
        "ug_sms" === m.default.request("utm_source") && (e = "click_wap_" + m.default.request("utm_source") + "_" + m.default.request("utm_medium"));
      var t = void 0;
      return (0,
          _.default)(I).forEach(function (e) {
          I[e] && ["videoActivateTest", "videoActivateControl", "liteVideoActivateTest", "liteVideoActivateControl", "miniVideoActivateTest", "miniVideoActivateControl", "liteMiniVideoActivateTest", "liteMiniVideoActivateControl"].indexOf(e) > -1 && (t = e)
        }),
        t && (e = "click_weixin_rf_" + t),
        e
    }

    function u(e) {
      return {
        __type__: "wap",
        position: e.code_id || void 0,
        iid: m.default.request("iid") || void 0,
        wxshare_count: m.default.request("wxshare_count") || void 0,
        parent_group_id: window.group_id,
        parent_rid: window.request_id,
        site_id: window.site_id,
        group_id: e.id,
        share_app_name: m.default.request("app") || void 0,
        traffic_type: g.default.browser.weixin ? "weixin" : "wap",
        page_type: window.isNewVideoPage ? "video" : "article",
        distance: e.distance || void 0
      }
    }

    function s(e) {
      if (e.nativeLink)
        return e.nativeLink;
      var t = e.scheme || a(e),
        o = d(e.gdLabel),
        i = e.type || "home",
        n = e.id || window.group_id,
        r = "",
        l = encodeURIComponent((0,
          w.default)(function (e) {
          var t = u(e),
            o = d(e.gdLabel);
          switch (e.type || "home") {
            case "detail":
              break;
            case "comment":
              (0,
                p.default)(t, {
                enter_comment: o
              });
              break;
            case "mediaProfile":
              (0,
                p.default)(t, {
                event: "pgc_profile",
                label: o
              });
              break;
            case "videoProfile":
              (0,
                p.default)(t, {
                event: "profile",
                label: o
              });
              break;
            case "home":
              (0,
                p.default)(t, {
                event: "home",
                label: o
              });
              break;
            case "xigua_live":
              (0,
                p.default)(t, {
                event: "xigua_live",
                label: o
              });
              break;
            case "xigua_series":
              (0,
                p.default)(t, {
                event: "xigua_series",
                label: o
              })
          }
          return t
        }(e))),
        c = {
          groupid: n,
          gd_label: o,
          gd_ext_json: l
        };
      switch (i) {
        case "detail":
          "news_article_lite" === e.app && (c = (0,
              p.default)({}, c, {
              item_id: n
            })),
            r = t + "detail?" + m.default.toQuery(c);
          break;
        case "comment":
          r = function (e, t) {
            var o = null;
            return t && t.isNewVideo && (o = 64),
              o && (e += "&flags=" + o),
              e
          }(r = t + "detail?" + m.default.toQuery({
            groupid: n,
            showcomment: 1,
            gd_label: o,
            gd_ext_json: l
          }), e);
          break;
        case "mediaProfile":
          r = t + "media_account?" + m.default.toQuery({
            media_id: n,
            gd_ext_json: l
          });
          break;
        case "videoProfile":
          r = t + "pgcprofile?" + m.default.toQuery({
            user_id: n,
            gd_ext_json: l
          });
          break;
        case "home":
          r = t + "home/news?" + m.default.toQuery({
            gd_ext_json: l
          });
          break;
        case "xigua_live":
          r = t + "xigua_live?" + m.default.toQuery({
            room_id: n,
            orientation: window._orientation
          });
          break;
        case "xigua_series":
          r = t + "video_series?" + m.default.toQuery({
            groupid: n,
            gd_label: o,
            gd_ext_json: l
          });
          break;
        case "awemevideo":
          r = t + "awemevideo?" + m.default.toQuery({
            group_id: n,
            item_id: n,
            group_source: e.group_source,
            gd_label: o,
            gd_ext_json: l
          });
          break;
        case "profile":
          r = t + "profile?" + m.default.toQuery({
            uid: n,
            source: e.source,
            from_page: e.from_page,
            gd_ext_json: encodeURIComponent(l)
          });
          break;
        case "add_friend":
          r = t + "add_friend?" + m.default.toQuery({
            profile_user_id: n,
            from_page: e.from_page,
            gd_ext_json: encodeURIComponent(l)
          });
          break;
        case "fantasy":
          r = t + "fantasy?" + m.default.toQuery({
            gd_label: "click_weixin_rf_share_fantasy"
          });
          break;
        case "long_video":
          r = t + "lvideo_detail?" + m.default.toQuery({
            episode_id: window.episode_id || "",
            album_id: e.album_id || window.album_id || ""
          });
          break;
        case "webview":
          r = t + "webview?" + m.default.toQuery(e.webviewUrlParams || {})
      }
      return e.item_id && (r += "&aggr_type=2&item_id=" + e.item_id),
        r += "&needlaunchlog=1",
        "profile" !== i || e.noRedirect || (r = r + "&" + m.default.toQuery({
          redirect: function (e) {
            var t = s((0,
              p.default)({}, e, {
              type: "add_friend"
            }));
            return g.default.os.android && (t = encodeURIComponent(t)),
              t
          }(e)
        })),
        r
    }

    function l(e) {
      return m.default.cookie(e) || m.default.request(e) || ""
    }

    function c() {
      var e = function () {
          var e = Number(window.custom_proportion2) - Number(window.custom_proportion1) + 1;
          return {
            start: Number(window.custom_proportion1),
            end: Number(window.custom_proportion1) + Math.floor(e / 2) - 1
          }
        }(),
        t = e.start,
        o = e.end,
        i = k,
        n = null !== i ? parseInt(i) % 100 : void 0;
      return !isNaN(n) && n <= o && n >= t
    }

    function f() {
      var e = function () {
          var e = Number(window.custom_proportion2) - Number(window.custom_proportion1) + 1;
          return {
            start: Number(window.custom_proportion2) - Math.floor(e / 2) + 1,
            end: Number(window.custom_proportion2)
          }
        }(),
        t = e.start,
        o = e.end,
        i = k,
        n = null !== i ? parseInt(i) % 100 : void 0;
      return !isNaN(n) && n <= o && n >= t
    }
    var w = i(e("qUYrYx_P")),
      p = i(e("rCvC6Owx")),
      _ = i(e("_l59FVJy")),
      g = i(e("VcwWJehO")),
      m = i(e("xFryiHX9")),
      v = i(e("A33e_8Sy"));
    e("bRnKAODq");
    var h = e("pz3Ku2B4");
    e("d0638NDt").polyfill(),
      window.loadimg = function () {},
      window.errorimg = function () {};
    var b = ["m.toutiaoimg.cn", "m.toutiaocdn.cn", "m.toutiaocdn.com", "m.toutiaolite.com"],
      x = function () {
        return {
          setItem: function (e, t) {
            if (!m.default.sessionStorageEnabled())
              return null;
            try {
              sessionStorage.setItem(e, t)
            } catch (e) {}
          },
          getItem: function (e) {
            return m.default.sessionStorageEnabled() ? sessionStorage.getItem(e) : null
          }
        }
      }(),
      y = {
        share_iid: m.default.request("iid"),
        share_app_name: m.default.request("app"),
        wx_share_count: parseInt(m.default.request("wxshare_count")) || 0
      },
      k = function () {
        var e = m.default.cookie("tt_webid");
        if (!e)
          return null;
        return parseInt(e).toString() === e ? e : parseInt(e / Math.pow(2, 32)).toString()
      }(),
      A = "1" === m.default.request("from_wxapp"),
      S = function () {
        function e(e, t, n) {
          n = n || 0,
            e(o),
            i || (i = setTimeout(function () {
              t(o),
                i = null,
                o = []
            }, n))
        }
        var t = void 0,
          o = [],
          i = void 0;
        return {
          getInstance: function () {
            return t || (t = {
                debounce: e
              }),
              t
          }
        }
      }(),
      q = "3" === window.mediaType;
    window.isDownloadTest = !!g.default.browser.weixin && ("news_article" === m.default.request("app") || "news_article_lite" === m.default.request("app"));
    var I = function () {
        var e = {
            hotCardControl: !1,
            hotCardTest1: !1,
            hotCardTest2: !1,
            liteMiniVideoActivateTest: !1,
            liteMiniVideoActivateControl: !1,
            miniVideoActivateTest: !1,
            miniVideoActivateControl: !1,
            liteVideoActivateTest: !1,
            liteVideoActivateControl: !1,
            videoActivateTest: !1,
            videoActivateControl: !1
          },
          t = function () {
            var e = {},
              t = [];
            try {
              e = JSON.parse(window.abtest_parameters)
            } catch (e) {
              throw new Error("ERROR IN PARSE ABTEST_PARAMS" + e)
            }
            return (0,
                _.default)(e).forEach(function (o) {
                if (e[o] instanceof Object) {
                  var i = (0,
                    _.default)(e[o])[0];
                  t.push(e[o][i])
                }
              }),
              t
          }(),
          o = (0,
            _.default)(e).filter(function (e) {
            return t.indexOf(e) > -1
          });
        if (o.length > 0 && window.isXiguaVideoPage) {
          e[o[0]] = !0
        }
        return e
      }(),
      T = {
        scrollTop: function () {
          window.scrollTo(0, 0)
        },
        isAppInstalled: r,
        getScheme: a,
        getNativeLink: s,
        getUTMValue: l,
        getAppTrackData: function () {
          return {
            __type__: "app_track",
            resolution: window.screen.availWidth * window.devicePixelRatio + "*" + window.screen.availHeight * window.devicePixelRatio,
            webid: m.default.cookie("tt_webid") || "",
            utm_source: l("utm_source")
          }
        },
        confused: function (e) {
          var t = function (e) {
              for (var t = [], o = 0; o < e; o++) {
                var i = String.fromCharCode(Math.floor(26 * Math.random()) + 65);
                Math.ceil(10 * Math.random()) % 2 == 1 && (i = i.toLowerCase()),
                  t.push(i)
              }
              return t.join("")
            },
            o = function () {
              return Math.ceil(15 * Math.random())
            },
            i = {};
          return e.forEach(function (e) {
            var n = t(o()) + t(o());
            i[e] = n
          }), {
            map: i
          }
        },
        formatDate: function (e, t) {
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
          for (var i in o)
            new RegExp("(" + i + ")").test(t) && (t = t.replace(RegExp.$1, 1 === RegExp.$1.length ? o[i] : ("00" + o[i]).substr(("" + o[i]).length)));
          return t
        },
        sendActionLog: function (e) {
          var t = {
            distance: parseInt(e.distance || 0),
            code_id: e.code_id,
            group_id: e.group_id,
            position: e.position || ""
          };
          window.ttReport && window.ttReport.sendClickLog(t)
        },
        getOpenUrl: function (e) {
          var t = "sslocal://",
            o = e.type || "home",
            i = e.id || window.group_id,
            n = "";
          switch (o) {
            case "detail":
              n = t + "detail?groupid=" + i;
              break;
            case "comment":
              n = t + "detail?groupid=" + i + "&showcomment=1";
              break;
            case "mediaProfile":
              n = t + "media_account?media_id=" + i;
              break;
            case "home":
              n = t + "home";
              break;
            case "xigua_live":
              n = t + "xigua_live?room_id=" + i + "&orientation=" + window.orientation;
              break;
            case "long_video":
              n = t + "xigua_live?episode_id=" + window.episode_id + "&album_id=" + window.album_id
          }
          return n
        },
        initAD: function () {
          v.default.get("/i" + window.item_id + "/ad/" + location.search).end(function (t, o) {
            if (t)
              return !1;
            var i = null,
              n = null,
              r = JSON.parse(o.text).ad;
            r && r.length && (i = !!r[0] && r[0],
              n = !!r[1] && r[1]);
            var a = void 0;
            if (i && "undefined" != typeof registerAd && "function" == typeof registerAd) {
              if (a = g.default.browser.weixin ? "backflowAd" : "detailAd",
                e("_DQ3wKWt")("#" + a).find(".detail-ad").length)
                return;
              window.registerAd(a, i, "first")
            }
            if (n && !n.app && "undefined" != typeof registerAd && "function" == typeof registerAd) {
              if (a = g.default.browser.weixin ? "backflowAd2" : "detailAd2",
                e("_DQ3wKWt")("#" + a).find(".detail-ad").length)
                return;
              window.registerAd(a, n, "last")
            }
            if (i || n) {
              var d = [];
              i && d.push(1),
                n && d.push(2)
            }
          })
        },
        initScrollEvents: function () {
          var t = void 0,
            o = 100 * (window.responsive || {
              dpr: 1
            }).dpr;
          e("_DQ3wKWt")(window).on("scroll load afterflow", function (i) {
            var n = document.body.scrollHeight;
            (window.scrollY || window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop) >= n - window.innerHeight - o && e("_DQ3wKWt")(window).trigger("scrollBottom", i.type),
              "scroll" === i.type && (t && clearTimeout(t),
                t = setTimeout(function () {
                  e("_DQ3wKWt")(window).trigger("scrollEnd")
                }, 300))
          })
        },
        unshiftListPage: function () {
          var e = location.href,
            t = "/tpage/goback/?weixin_goback=1",
            o = 0;
          if (window.violateWeixinPolicy || A || !g.default.browser.weixin || r() || -1 === b.indexOf(location.hostname) || -1 === ["news_article", "news_article_lite"].indexOf(m.default.request("app")))
            return !1;
          m.default.sessionStorageEnabled() && (o = sessionStorage.getItem("back_count")),
            o || (m.default.sessionStorageEnabled() && (o = sessionStorage.setItem("back_count", 1)),
              history.replaceState({
                page: "goback",
                href: t
              }, null, t),
              history.pushState({
                page: "weixindetail"
              }, null, e)),
            window.onpopstate = function (e) {
              var t = e.state;
              t && ["goback"].indexOf(t.page) > -1 && location.reload()
            }
        },
        gotoSurlDownload: function (e) {
          setTimeout(function () {
            location.href = e
          }, 100)
        },
        testRelatedNews: c,
        controlRelatedNews: f,
        initBannerScrollEvents: function (t) {
          var o = t,
            i = 100 * (window.responsive || {
              dpr: 1
            }).dpr,
            n = 0,
            r = !0;
          e("_DQ3wKWt")(window).on("scroll", function (e) {
            var t = window.scrollY || window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
            r && t > i && t > n ? (r = !1,
                o.find(".show-top-pannel").length && o.find(".show-top-pannel").removeClass("show-top-pannel").addClass("hide-top-pannel")) : !r && t <= n && (r = !0,
                o.find(".hide-top-pannel").length && o.find(".hide-top-pannel").removeClass("hide-top-pannel").addClass("show-top-pannel")),
              n = t
          })
        },
        controlBanner: function () {
          var e = k,
            t = null !== e ? parseInt(e) % 100 : void 0;
          return !isNaN(t) && t <= 29 && t >= 0
        },
        countFormat: function (e) {
          return (e -= 0) >= 1e4 && (-1 !== (e = (e /= 1e4).toFixed(1)).indexOf(".0") && (e = e.replace(".0", "")),
              e += "万"),
            e
        },
        needDownloadApp: function (e) {
          e = e || {};
          var t = !r() && !1 !== e.downloadWhenClickRelateNews;
          return !!window.isXiguaLongVideoPage || t
        },
        invokeToutiaoVideoApp: function () {
          return window.isNewVideoPage
        },
        getTTWebID: k,
        getDownloadOSInfo: function () {
          return {
            os: g.default.os.android ? "android" : g.default.os.ios ? "ios" : "",
            traffic_type: g.default.browser.weixin ? "weixin" : "wap"
          }
        },
        debounceImporessionLog: S,
        handleFirstInViewDebounce: function (e) {
          if (!m.default.request("ad_surl")) {
            var t = {
              distance: parseInt(e.distance || 0),
              group_id: e.group_id || e.id,
              code_id: e.code_id
            };
            window.ttReport && window.ttReport.sendImpressionLog(t);
            var o = Number(e.index) + 1 || 0,
              i = e.type && e.type.toLowerCase() || "apponly";
            window.maevent(i, "pv", 0, o.toString())
          }
        },
        getIIDinfo: u,
        shortLinkPrefix: "http://d.toutiao.com",
        hideBonus: function (e, t, o) {
          return !(!("CN" !== e || ["北京", "深圳", "广州"].indexOf(t) > -1) || !g.default.browser.weixin) || !(!o || !o.hideBonus) || !(!m.default.sessionStorageEnabled() || !sessionStorage.getItem("hideBonus"))
        },
        formatDuration: function (e) {
          if (!e)
            return "";
          var t = Math.floor(e / 60),
            o = parseInt(e % 60);
          return t < 10 && (t = "0" + t),
            o < 10 && (o = "0" + o),
            t + ":" + o
        },
        isXiguaVideoPage: function () {
          return !!window.isXiguaVideoPage
        },
        getExtraData: function (e) {
          var t = e.code_id,
            o = void 0 === t ? 0 : t,
            i = e.group_id,
            n = void 0 === i ? 0 : i,
            r = e.type,
            a = void 0 === r ? "wap_activation" : r,
            d = e.position,
            u = void 0 === d ? "" : d;
          return window.ttReport ? window.ttReport.getExtraData({
            params: {
              group_id: n,
              code_id: o,
              city: window.city,
              position: u && {
                relationCard: "friend_card",
                bottomBtn: "bottom_banner",
                favorBtn: "media_user",
                playVideo: "main_content"
              } [u] || ""
            },
            type: a
          }) : {}
        },
        getShareInfo: y,
        ttSessionStorage: x,
        isFromWxapp: A,
        notShowRecommendation: q,
        formatQueryParmas: function (e, t) {
          var o = [],
            i = "";
          return "from" === e && (o = ["singlemessage", "groupmessage", "timeline", "qrcode", "qrcode1", "qrcode7", "qrcode8", "qrcode_sysshare_pyq", "mobile_qq qzone", "search"]),
            "app" === e && (o = (0,
              _.default)(h.CONFIG)),
            o.forEach(function (e) {
              (t || "").indexOf(e) > -1 && (i = e)
            }),
            i
        },
        getTestDownloadUrl: function (e) {
          var t = (0,
            _.default)(I).filter(function (e) {
            return !0 === I[e]
          });
          if (0 === t.length)
            return "";
          var o = t[0],
            i = h.TEST_URL_CONFIG[o];
          if (i) {
            var n = i[e] || i.default;
            return n = n instanceof Object ? n[g.default.os.ios ? "ios" : "android"] : n
          }
          return ""
        },
        abTest: I
      };
    t.exports = T
  };
  o._QgMsJFc = function (r, e, t, n, o) {
    var u = n(r("_l59FVJy")),
      a = n(r("_YselYzt")),
      c = n(r("dAbh41uH")),
      f = Object.prototype.hasOwnProperty,
      i = function () {
        for (var r = [], e = 0; e < 256; ++e)
          r.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
        return r
      }();
    t.arrayToObject = function (r, e) {
        for (var t = e && e.plainObjects ? (0,
            c.default)(null) : {}, n = 0; n < r.length; ++n)
          void 0 !== r[n] && (t[n] = r[n]);
        return t
      },
      t.merge = function (r, e, n) {
        if (!e)
          return r;
        if ("object" !== (void 0 === e ? "undefined" : (0,
            a.default)(e))) {
          if (Array.isArray(r))
            r.push(e);
          else {
            if ("object" !== (void 0 === r ? "undefined" : (0,
                a.default)(r)))
              return [r, e];
            (n.plainObjects || n.allowPrototypes || !f.call(Object.prototype, e)) && (r[e] = !0)
          }
          return r
        }
        if ("object" !== (void 0 === r ? "undefined" : (0,
            a.default)(r)))
          return [r].concat(e);
        var o = r;
        return Array.isArray(r) && !Array.isArray(e) && (o = t.arrayToObject(r, n)),
          Array.isArray(r) && Array.isArray(e) ? (e.forEach(function (e, o) {
              f.call(r, o) ? r[o] && "object" === (0,
                a.default)(r[o]) ? r[o] = t.merge(r[o], e, n) : r.push(e) : r[o] = e
            }),
            r) : (0,
            u.default)(e).reduce(function (r, o) {
            var u = e[o];
            return f.call(r, o) ? r[o] = t.merge(r[o], u, n) : r[o] = u,
              r
          }, o)
      },
      t.assign = function (r, e) {
        return (0,
          u.default)(e).reduce(function (r, t) {
          return r[t] = e[t],
            r
        }, r)
      },
      t.decode = function (r) {
        try {
          return decodeURIComponent(r.replace(/\+/g, " "))
        } catch (e) {
          return r
        }
      },
      t.encode = function (r) {
        if (0 === r.length)
          return r;
        for (var e = "string" == typeof r ? r : String(r), t = "", n = 0; n < e.length; ++n) {
          var o = e.charCodeAt(n);
          45 === o || 46 === o || 95 === o || 126 === o || o >= 48 && o <= 57 || o >= 65 && o <= 90 || o >= 97 && o <= 122 ? t += e.charAt(n) : o < 128 ? t += i[o] : o < 2048 ? t += i[192 | o >> 6] + i[128 | 63 & o] : o < 55296 || o >= 57344 ? t += i[224 | o >> 12] + i[128 | o >> 6 & 63] + i[128 | 63 & o] : (n += 1,
            o = 65536 + ((1023 & o) << 10 | 1023 & e.charCodeAt(n)),
            t += i[240 | o >> 18] + i[128 | o >> 12 & 63] + i[128 | o >> 6 & 63] + i[128 | 63 & o])
        }
        return t
      },
      t.compact = function (r) {
        for (var e = [{
            obj: {
              o: r
            },
            prop: "o"
          }], t = [], n = 0; n < e.length; ++n)
          for (var o = e[n], c = o.obj[o.prop], f = (0,
              u.default)(c), i = 0; i < f.length; ++i) {
            var l = f[i],
              p = c[l];
            "object" === (void 0 === p ? "undefined" : (0,
              a.default)(p)) && null !== p && -1 === t.indexOf(p) && (e.push({
                obj: c,
                prop: l
              }),
              t.push(p))
          }
        return function (r) {
          for (var e; r.length;) {
            var t = r.pop();
            if (e = t.obj[t.prop],
              Array.isArray(e)) {
              for (var n = [], o = 0; o < e.length; ++o)
                void 0 !== e[o] && n.push(e[o]);
              t.obj[t.prop] = n
            }
          }
          return e
        }(e)
      },
      t.isRegExp = function (r) {
        return "[object RegExp]" === Object.prototype.toString.call(r)
      },
      t.isBuffer = function (r) {
        return null !== r && void 0 !== r && !!(r.constructor && r.constructor.isBuffer && r.constructor.isBuffer(r))
      }
  };
  o.bgiCpzMj = function (t, r, n, e, o) {
    var C = String.prototype.replace;
    r.exports = {
      default: "RFC3986",
      formatters: {
        RFC1738: function (t) {
          return C.call(t, /%20/g, "+")
        },
        RFC3986: function (t) {
          return t
        }
      },
      RFC1738: "RFC1738",
      RFC3986: "RFC3986"
    }
  };
  o.Os9JB4T7 = function (e, r, n, t, o) {
    var i = t(e("_YselYzt")),
      l = t(e("_l59FVJy")),
      a = e("_QgMsJFc"),
      f = e("bgiCpzMj"),
      c = {
        brackets: function (e) {
          return e + "[]"
        },
        indices: function (e, r) {
          return e + "[" + r + "]"
        },
        repeat: function (e) {
          return e
        }
      },
      s = Date.prototype.toISOString,
      u = {
        delimiter: "&",
        encode: !0,
        encoder: a.encode,
        encodeValuesOnly: !1,
        serializeDate: function (e) {
          return s.call(e)
        },
        skipNulls: !1,
        strictNullHandling: !1
      },
      d = function e(r, n, t, o, i, f, c, s, d, y, p, v) {
        var m = r;
        if ("function" == typeof c)
          m = c(n, m);
        else if (m instanceof Date)
          m = y(m);
        else if (null === m) {
          if (o)
            return f && !v ? f(n, u.encoder) : n;
          m = ""
        }
        if ("string" == typeof m || "number" == typeof m || "boolean" == typeof m || a.isBuffer(m)) {
          if (f) {
            return [p(v ? n : f(n, u.encoder)) + "=" + p(f(m, u.encoder))]
          }
          return [p(n) + "=" + p(String(m))]
        }
        var g = [];
        if (void 0 === m)
          return g;
        var b;
        if (Array.isArray(c))
          b = c;
        else {
          var w = (0,
            l.default)(m);
          b = s ? w.sort(s) : w
        }
        for (var D = 0; D < b.length; ++D) {
          var N = b[D];
          i && null === m[N] || (g = Array.isArray(m) ? g.concat(e(m[N], t(n, N), t, o, i, f, c, s, d, y, p, v)) : g.concat(e(m[N], n + (d ? "." + N : "[" + N + "]"), t, o, i, f, c, s, d, y, p, v)))
        }
        return g
      };
    r.exports = function (e, r) {
      var n = e,
        t = r ? a.assign({}, r) : {};
      if (null !== t.encoder && void 0 !== t.encoder && "function" != typeof t.encoder)
        throw new TypeError("Encoder has to be a function.");
      var o = void 0 === t.delimiter ? u.delimiter : t.delimiter,
        s = "boolean" == typeof t.strictNullHandling ? t.strictNullHandling : u.strictNullHandling,
        y = "boolean" == typeof t.skipNulls ? t.skipNulls : u.skipNulls,
        p = "boolean" == typeof t.encode ? t.encode : u.encode,
        v = "function" == typeof t.encoder ? t.encoder : u.encoder,
        m = "function" == typeof t.sort ? t.sort : null,
        g = void 0 !== t.allowDots && t.allowDots,
        b = "function" == typeof t.serializeDate ? t.serializeDate : u.serializeDate,
        w = "boolean" == typeof t.encodeValuesOnly ? t.encodeValuesOnly : u.encodeValuesOnly;
      if (void 0 === t.format)
        t.format = f.default;
      else if (!Object.prototype.hasOwnProperty.call(f.formatters, t.format))
        throw new TypeError("Unknown format option provided.");
      var D, N, O = f.formatters[t.format];
      "function" == typeof t.filter ? n = (N = t.filter)("", n) : Array.isArray(t.filter) && (D = N = t.filter);
      var h = [];
      if ("object" !== (void 0 === n ? "undefined" : (0,
          i.default)(n)) || null === n)
        return "";
      var k;
      k = t.arrayFormat in c ? t.arrayFormat : "indices" in t ? t.indices ? "indices" : "repeat" : "indices";
      var z = c[k];
      D || (D = (0,
          l.default)(n)),
        m && D.sort(m);
      for (var A = 0; A < D.length; ++A) {
        var V = D[A];
        y && null === n[V] || (h = h.concat(d(n[V], V, z, s, y, p ? v : null, N, m, g, b, O, w)))
      }
      var j = h.join(o),
        F = !0 === t.addQueryPrefix ? "?" : "";
      return j.length > 0 ? F + j : ""
    }
  };
  o._m7KhycJ = function (e, t, r, l, i) {
    var o = l(e("_l59FVJy")),
      a = l(e("dAbh41uH")),
      n = e("_QgMsJFc"),
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
      p = function (e, t, r) {
        if (e) {
          var l = r.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
            i = /(\[[^[\]]*])/g,
            o = /(\[[^[\]]*])/.exec(l),
            n = o ? l.slice(0, o.index) : l,
            d = [];
          if (n) {
            if (!r.plainObjects && c.call(Object.prototype, n) && !r.allowPrototypes)
              return;
            d.push(n)
          }
          for (var p = 0; null !== (o = i.exec(l)) && p < r.depth;) {
            if (p += 1,
              !r.plainObjects && c.call(Object.prototype, o[1].slice(1, -1)) && !r.allowPrototypes)
              return;
            d.push(o[1])
          }
          return o && d.push("[" + l.slice(o.index) + "]"),
            function (e, t, r) {
              for (var l = t, i = e.length - 1; i >= 0; --i) {
                var o, n = e[i];
                if ("[]" === n)
                  o = (o = []).concat(l);
                else {
                  o = r.plainObjects ? (0,
                    a.default)(null) : {};
                  var c = "[" === n.charAt(0) && "]" === n.charAt(n.length - 1) ? n.slice(1, -1) : n,
                    d = parseInt(c, 10);
                  !isNaN(d) && n !== c && String(d) === c && d >= 0 && r.parseArrays && d <= r.arrayLimit ? (o = [])[d] = l : o[c] = l
                }
                l = o
              }
              return l
            }(d, t, r)
        }
      };
    t.exports = function (e, t) {
      var r = t ? n.assign({}, t) : {};
      if (null !== r.decoder && void 0 !== r.decoder && "function" != typeof r.decoder)
        throw new TypeError("Decoder has to be a function.");
      if (r.ignoreQueryPrefix = !0 === r.ignoreQueryPrefix,
        r.delimiter = "string" == typeof r.delimiter || n.isRegExp(r.delimiter) ? r.delimiter : d.delimiter,
        r.depth = "number" == typeof r.depth ? r.depth : d.depth,
        r.arrayLimit = "number" == typeof r.arrayLimit ? r.arrayLimit : d.arrayLimit,
        r.parseArrays = !1 !== r.parseArrays,
        r.decoder = "function" == typeof r.decoder ? r.decoder : d.decoder,
        r.allowDots = "boolean" == typeof r.allowDots ? r.allowDots : d.allowDots,
        r.plainObjects = "boolean" == typeof r.plainObjects ? r.plainObjects : d.plainObjects,
        r.allowPrototypes = "boolean" == typeof r.allowPrototypes ? r.allowPrototypes : d.allowPrototypes,
        r.parameterLimit = "number" == typeof r.parameterLimit ? r.parameterLimit : d.parameterLimit,
        r.strictNullHandling = "boolean" == typeof r.strictNullHandling ? r.strictNullHandling : d.strictNullHandling,
        "" === e || null === e || void 0 === e)
        return r.plainObjects ? (0,
          a.default)(null) : {};
      for (var l = "string" == typeof e ? function (e, t) {
          for (var r = {}, l = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, i = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit, o = l.split(t.delimiter, i), a = 0; a < o.length; ++a) {
            var n, p, s = o[a],
              u = s.indexOf("]="),
              f = -1 === u ? s.indexOf("=") : u + 1; -
            1 === f ? (n = t.decoder(s, d.decoder),
                p = t.strictNullHandling ? null : "") : (n = t.decoder(s.slice(0, f), d.decoder),
                p = t.decoder(s.slice(f + 1), d.decoder)),
              c.call(r, n) ? r[n] = [].concat(r[n]).concat(p) : r[n] = p
          }
          return r
        }(e, r) : e, i = r.plainObjects ? (0,
          a.default)(null) : {}, s = (0,
          o.default)(l), u = 0; u < s.length; ++u) {
        var f = s[u],
          y = p(f, l[f], r);
        i = n.merge(i, y, r)
      }
      return n.compact(i)
    }
  };
  o.LPgXarRS = function (r, s, a, i, o) {
    var t = r("Os9JB4T7"),
      f = r("_m7KhycJ"),
      g = r("bgiCpzMj");
    s.exports = {
      formats: g,
      parse: f,
      stringify: t
    }
  };
  o.fgrAqpf7 = function (a, o, e, n, d) {
    function i(a) {
      var o = a.extraData,
        e = a.downloadLink,
        n = e.split("?")[1] || "";
      return s.default.parse(n).extra ? e : (o || (o = w.default.getExtraData({
          group_id: a.id || window.group_id,
          code_id: a.code_id || 0,
          type: "recommendation" === a.position ? "wap_activation" : "wap_no_recommend_activation",
          position: a.position || ""
        })),
        e = f.default.appendQuery(e, "extra=" + encodeURIComponent((0,
          u.default)(o))))
    }

    function t(o) {
      o = o || {};
      var e = {
        downloadLink: w.default.shortLinkPrefix + "/e6jY/",
        yybLink: "tmast://appdetails?r=0.27985643851570785&pname=com.ss.android.article.news&oplist=1%3B2&via=ANDROIDWXZ.YYB.OTHERBROWSER&channelid=000116083232363434363139&appid=213141",
        nativeLink: w.default.getNativeLink(o),
        universalLink: "",
        openUrl: w.default.getOpenUrl(o)
      };
      return window.GTMValue && window.GTMValue.yybSurl && Array.isArray(window.GTMValue.yybSurl) && (o.yybLink = window.GTMValue.yybSurl[0],
          o.downloadLink = window.GTMValue.yybSurl[1]),
        "xiaomi_sp_api" === f.default.request("utm_source") && "wap_search" === f.default.request("utm_medium") && (o.downloadLink = "https://d.toutiao.com/8cU2/"),
        w.default.getTestDownloadUrl(o.position) && !o.isGame && (o.downloadLink = w.default.getTestDownloadUrl(o.position)),
        o.isGame && (o.downloadLink = "https://d.toutiao.com/Dtm6/"),
        window.backend_downloadlink && (o.downloadLink = window.backend_downloadlink),
        "1" === f.default.request("from_weixinlist") && (o.downloadLink = "https://d.toutiao.com/PjNu/"),
        window.isXiguaLongVideoPage && p.default.browser.toutiao && "search" === f.default.request("from") && (o.downloadLink = "https://d.ixigua.com/P6Bq/"),
        a("_DQ3wKWt").extend(!0, {}, e, o)
    }

    function r(a) {
      var o = a.downloadLink;
      if (window.GTMValue && window.GTMValue.preventDongTaiDaBao || a.isGame)
        return o;
      var e = {
          openurl: a.openUrl,
          postdata: [].concat(a.postdata || [], w.default.getAppTrackData()).concat((0,
            l.default)(w.default.getDownloadOSInfo(), a.extraData))
        },
        n = f.default.appendQuery(o, "append=" + encodeURIComponent((0,
          u.default)(e))),
        d = document.createElement("a");
      d.href = o;
      return s.default.parse(d.search.slice(1)).append && (n = o),
        n
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
      }),
      e.appDownloadWithYYB = e.appDownloadWithAndroid = e.appDownloadWithIos = void 0;
    var l = n(a("rCvC6Owx")),
      u = n(a("qUYrYx_P")),
      p = n(a("VcwWJehO")),
      w = n(a("NpbYakKP")),
      f = n(a("xFryiHX9")),
      s = n(a("LPgXarRS"));
    e.appDownloadWithIos = function (a) {
        if (a.preventAppDownload)
          return !1;
        var o = t(a);
        o.downloadLink = i(o),
          location.href = o.downloadLink
      },
      e.appDownloadWithAndroid = function (o) {
        if (o.preventAppDownload)
          return !1;
        var e = t(o);
        e.downloadLink = i(e),
          window.GTMValue && window.GTMValue.direct_download || window.isGuagualongVideoPage || o.isGame ? location.href = r(e) : function (o) {
            setTimeout(function () {
              a("_DQ3wKWt")("body").append("<iframe id='app_dl_iframe' src='" + o.yybHref + "' style='display:none'></iframe>"),
                setTimeout(function () {
                  a("_DQ3wKWt")("iframe#app_dl_iframe").remove(),
                    location.href = o.fallback
                }, 1500)
            }, 100)
          }({
            yybHref: e.yybLink,
            fallback: r(e)
          })
      },
      e.appDownloadWithYYB = function (a) {
        if (a.preventAppDownload)
          return !1;
        var o = t(a);
        o.downloadLink = i(o);
        var e = p.default.os.android ? "android_scheme" : "ios_scheme",
          n = f.default.appendQuery(o.downloadLink, e + "=" + encodeURIComponent(o.nativeLink));
        (s.default.parse(o.downloadLink.split("?")[1]) || {})[e] && (n = o.downloadLink),
        location.href = n
      }
  };
  o._mSXgokU = function (e, i, o, a, n) {
    function t(i) {
      i = i || {};
      var o = {
        downloadLink: p.default.shortLinkPrefix + "/e6jY/",
        yybLink: "tmast://appdetails?r=0.27985643851570785&pname=com.ss.android.article.news&oplist=1%3B2&via=ANDROIDWXZ.YYB.OTHERBROWSER&channelid=000116083232363434363139&appid=213141",
        nativeLink: p.default.getNativeLink(i),
        universalLink: "",
        openUrl: p.default.getOpenUrl(i)
      };
      return p.default.getTestDownloadUrl(i.position) && !i.isGame && (i.downloadLink = p.default.getTestDownloadUrl(i.position)),
        i.isGame && (i.downloadLink = "https://d.toutiao.com/Dtm6/"),
        window.backend_downloadlink && (i.downloadLink = window.backend_downloadlink),
        window.isXiguaLongVideoPage && r.default.browser.toutiao && "search" === l.default.request("from") && (i.downloadLink = "https://d.ixigua.com/P6Bq/"),
        e("_DQ3wKWt").extend(!0, {}, o, i)
    }
    Object.defineProperty(o, "__esModule", {
        value: !0
      }),
      o.wap2AppWithAdr = o.wap2AppWithIos = void 0;
    var d = a(e("qUYrYx_P")),
      r = a(e("VcwWJehO")),
      l = a(e("xFryiHX9")),
      p = a(e("NpbYakKP")),
      s = a(e("LPgXarRS")),
      w = function (i) {
        e("_DQ3wKWt")("#app_iframe").remove(),
          e("_DQ3wKWt")("body").append("<iframe id='app_iframe' src='" + i + "' style='display:none'></iframe>")
      };
    o.wap2AppWithIos = function (e) {
        if (e.preventWap2App)
          return !1;
        var i = location.href,
          o = t(e);
        if (o.downloadLink = function (e) {
            var i = e.extraData,
              o = e.downloadLink,
              a = o.split("?")[1] || "";
            return s.default.parse(a).extra ? o : (i || (i = p.default.getExtraData({
                group_id: e.id || window.group_id,
                code_id: e.code_id || 0,
                type: "recommendation" === e.position ? "wap_activation" : "wap_no_recommend_activation",
                position: e.position || ""
              })),
              o = l.default.appendQuery(o, "extra=" + encodeURIComponent((0,
                d.default)(i))))
          }(o),
          r.default.os.version >= 9 && !r.default.browser.qqbrowser && window.APP_CONFIG.universalLink) {
          var a = "//www.toutiao.com/m/detail/?";
          "video_article" === o.app && (a = "//www.365yg.com/m/video_detail/?");
          var n = "click_" + (r.default.browser.weixin ? "weixin" : "wap") + "_ios_deeplink",
            u = o.nativeLink; -
          1 === u.indexOf("gd_label") && -1 === u.indexOf("gd_ext_json") && (u += "&gd_label=" + n);
          var f = {
            group_id: "",
            item_id: "",
            scheme: encodeURIComponent(u),
            next: encodeURIComponent(o.downloadLink)
          };
          a += l.default.toQuery(f),
            location.href = o.universalLink || a,
            r.default.browser.safari && !window.isNewVideoPage && setTimeout(function () {
              location.href = "//m.toutiao.com/wap2app_prompt/?utm_source=rolldown"
            }, 2e3)
        } else if (r.default.os.version >= 9 && r.default.browser.qqbrowser) {
          var c = r.default.browser.safari ? 2e3 : 1300;
          location.href = o.nativeLink,
            setTimeout(function () {
              "hidden" === l.default.pageVisible() && (location.href = i)
            }, c)
        } else
          w(o.nativeLink)
      },
      o.wap2AppWithAdr = function (e) {
        var i = t(e);
        w(i.nativeLink)
      }
  };
  o._2MpYYf8 = function (o, i, a, e, n) {
    Object.defineProperty(a, "__esModule", {
      value: !0
    });
    var p = o("fgrAqpf7"),
      t = o("_mSXgokU"),
      d = o("pz3Ku2B4"),
      r = e(o("xFryiHX9")),
      s = o("VcwWJehO"),
      w = o("NpbYakKP");
    a.default = function (i) {
      var a = (0,
        d.getConfig)();
      if (a && a.app && !i.app && (i.app = a.app),
        window.GTMValue && window.GTMValue.app && (i.app = window.GTMValue.app),
        a && "video_lite" === a.app && s.os.ios)
        location.href = "/doushua/ios_landingpage/";
      else if (s.browser.lark && s.os.android)
        (0,
          t.wap2AppWithAdr)(i);
      else {
        w.isFromWxapp && (i.downloadLink = "https://d.toutiao.com/Ym2c/"),
          window.isToutiaoVideoPage && (i.downloadLink = window.GTMValue && window.GTMValue.shortVideoAllSurl || "https://d.toutiao.com/NAvA/"),
          i.isGame && (i.app = "news_article"),
          window.isXiguaLongVideoPage && s.browser.toutiao && "search" === r.default.request("from") && (i.app = "video_article");
        var e = {
          relationCard: "friend_card",
          bottomBtn: "bottom_banner",
          favorBtn: "media_user",
          playVideo: "main_content"
        };
        if (window.ttReport && i.position && e[i.position] && w.sendActionLog({
            code_id: "",
            group_id: window.group_id,
            position: e[i.position]
          }),
          s.browser.weixin)
          (0,
            p.appDownloadWithYYB)(i);
        else if (s.os.ios && (s.os.version >= 9 && !s.browser.qqbrowser && a.universalLink ? (0,
            t.wap2AppWithIos)(i) : ((0,
              p.appDownloadWithIos)(i),
            setTimeout(function () {
              (0,
                t.wap2AppWithIos)(i)
            }, 900))),
          s.os.android) {
          if (window.isGuagualongVideoPage)
            return (0,
                p.appDownloadWithAndroid)(i),
              !1;
          (0,
            t.wap2AppWithAdr)(i),
          setTimeout(function () {
            (i.forceDownload || "hidden" !== o("_DQ3wKWt").pageVisible()) && (0,
              p.appDownloadWithAndroid)(i)
          }, 1e3)
        }
      }
    }
  };
  o.YTR4OOyD = function (n, t, e, i, o) {
    function r() {
      h.forEach(function (n) {
          !n.visible && function (n) {
            var t = a.default.findDOMNode(n).getBoundingClientRect();
            if (t.top >= 0 && t.top <= (window.innerHeight || document.documentElement.clientHeight))
              return !0;
            if (t.bottom >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight))
              return !0;
            return !1
          }(n) && (p.push(n),
            n.visible = !0,
            n.props.onFirstInView(n))
        }),
        p.forEach(function (n, t) {
          var e = h.indexOf(n);
          e > -1 && h.splice(e, 1)
        })
    }
    var u = i(n("__gK4WbX")),
      l = i(n("lgLPKmWO")),
      c = i(n("LFxswB00")),
      d = i(n("_3k8jqSq")),
      f = i(n("C_TrCxPr")),
      s = n("zNszyAds"),
      a = (i(s),
        i(n("dLqIczAI"))),
      h = [],
      p = [];
    t.exports = function (n) {
      function t() {
        return (0,
            l.default)(this, t),
          (0,
            d.default)(this, (t.__proto__ || (0,
            u.default)(t)).apply(this, arguments))
      }
      return (0,
          f.default)(t, n),
        (0,
          c.default)(t, [{
          key: "componentDidMount",
          value: function () {
            0 === h.length && window.addEventListener("scroll", r),
              h.push(this),
              r()
          }
        }, {
          key: "componentWillUnmount",
          value: function () {
            var n = h.indexOf(this); -
            1 !== n && h.splice(n, 1),
              0 === h.length && window.removeEventListener("scroll", r)
          }
        }, {
          key: "render",
          value: function () {
            return this.props.children
          }
        }]),
        t
    }(s.Component)
  };
  o._EuEK26F = function (e, n, r, i, a) {
    var f = i(e("_YselYzt"));
    ! function () {
      function e() {
        for (var n = [], i = 0; i < arguments.length; i++) {
          var a = arguments[i];
          if (a) {
            var t = void 0 === a ? "undefined" : (0,
              f.default)(a);
            if ("string" === t || "number" === t)
              n.push(a);
            else if (Array.isArray(a))
              n.push(e.apply(null, a));
            else if ("object" === t)
              for (var o in a)
                r.call(a, o) && a[o] && n.push(o)
          }
        }
        return n.join(" ")
      }
      var r = {}.hasOwnProperty;
      n.exports ? n.exports = e : "function" == typeof define && "object" === (0,
        f.default)(define.amd) && define.amd ? define("classnames", [], function () {
        return e
      }) : window.classNames = e
    }()
  };
  o.DjbOufn3 = function (e, t, n, r, a) {
    var i = r(e("lT_XwWMZ")),
      l = r(e("__gK4WbX")),
      o = r(e("lgLPKmWO")),
      u = r(e("LFxswB00")),
      s = r(e("_3k8jqSq")),
      f = r(e("C_TrCxPr")),
      d = e("zNszyAds"),
      c = r(d),
      h = r(e("YTR4OOyD")),
      m = function (e) {
        function t(e) {
          (0,
            o.default)(this, t);
          var n = (0,
            s.default)(this, (t.__proto__ || (0,
            l.default)(t)).call(this, e));
          return n.state = {
              inView: !1
            },
            n
        }
        return (0,
            f.default)(t, e),
          (0,
            u.default)(t, [{
            key: "hanleError",
            value: function (e) {
              Math.floor(100 * Math.random()) || gaeventTest("image", "error", e)
            }
          }, {
            key: "hanleLoad",
            value: function () {}
          }, {
            key: "handleFirstInView",
            value: function () {
              this.setState({
                inView: !0
              })
            }
          }, {
            key: "render",
            value: function () {
              var e = this;
              return this.props.src ? c.default.createElement(h.default, {
                onFirstInView: function () {
                  e.handleFirstInView()
                }
              }, this.state.inView ? c.default.createElement("img", (0,
                i.default)({}, this.props, {
                onError: function () {
                  return e.hanleError(e.props.src)
                },
                onLoad: function () {
                  return e.hanleLoad()
                }
              })) : c.default.createElement("img", null)) : null
            }
          }]),
          t
      }(d.Component);
    t.exports = m
  };
  o.EwYmbR1Y = function (e, t, u, a, d) {
    Object.defineProperty(u, "__esModule", {
        value: !0
      }),
      u.default = void 0;
    var n = a(e("__gK4WbX")),
      o = a(e("lgLPKmWO")),
      l = a(e("LFxswB00")),
      r = a(e("_3k8jqSq")),
      f = a(e("C_TrCxPr")),
      i = e("zNszyAds"),
      _ = a(i),
      s = function (e) {
        function t() {
          return (0,
              o.default)(this, t),
            (0,
              r.default)(this, (t.__proto__ || (0,
              n.default)(t)).apply(this, arguments))
        }
        return (0,
            f.default)(t, e),
          (0,
            l.default)(t, [{
            key: "render",
            value: function () {
              return _.default.createElement("div", {
                className: "feed-list__hot-tag " + (window.isGuagualongVideoPage ? "hot-border" : "")
              }, "热门")
            }
          }]),
          t
      }(i.Component);
    u.default = s
  };
  o._75hluCc = function (e, t, a, l, i) {
    Object.defineProperty(a, "__esModule", {
      value: !0
    });
    var d = l(e("__gK4WbX")),
      r = l(e("lgLPKmWO")),
      u = l(e("LFxswB00")),
      n = l(e("_3k8jqSq")),
      o = l(e("C_TrCxPr")),
      s = e("zNszyAds"),
      m = l(s),
      c = l(e("_EuEK26F")),
      f = l(e("NpbYakKP")),
      _ = l(e("xFryiHX9")),
      p = l(e("DjbOufn3")),
      g = l(e("EwYmbR1Y")),
      h = l(e("RiX6bfLf")),
      v = function (e) {
        function t() {
          return (0,
              r.default)(this, t),
            (0,
              n.default)(this, (t.__proto__ || (0,
              d.default)(t)).apply(this, arguments))
        }
        return (0,
            o.default)(t, e),
          (0,
            u.default)(t, [{
            key: "handleClick",
            value: function (e, t, a) {
              e.preventDefault(),
                _.default.request("audit_mode") || this.props.handleClick(e, t, a)
            }
          }, {
            key: "render",
            value: function () {
              var e = this,
                t = this.props,
                a = t.datum,
                l = t.index,
                i = t.GTMValue,
                d = (0,
                  c.default)("feed-list feed-list--image-left", a.type, {
                  app_special: "appOnly" === a.type,
                  related_news: "relatedNews" === a.type
                }),
                r = (0,
                  c.default)("article_link", "clearfix", {
                  app_promotion_download: a.app_promotion_download
                }),
                u = f.default.needDownloadApp(i),
                n = "appOnly" === this.props.type && 0 === this.props.index,
                o = void 0;
              a.large_image_list && a.large_image_list.length ? o = a.large_image_list[0].url : a.image_detail && a.image_detail.length ? o = a.image_detail.reduce(function (e, t) {
                  return t.height > e.height ? t : e
                }).url : a.middle_image ? o = a.middle_image.url ? a.middle_image.url : a.middle_image : a.image_list && a.image_list.length && (o = a.image_list[0].url),
                a.video && a.video.cover_image_url && (o = a.video.cover_image_url),
                o && (o = o.replace(/^http:/, "https:"));
              var s = a.source;
              a.author && a.author.name && (s = a.author.name);
              var h = 0;
              a.has_video && a.video_duration && (h = a.video_duration),
                a.video && a.video.duration && (h = a.video.duration);
              var v = window.APP_CONFIG && window.APP_CONFIG.watermark_class || "default-watermark";
              return m.default.createElement("section", {
                "data-group-id": a.group_id,
                className: d,
                key: l,
                ref: this.props.sectionRef
              }, m.default.createElement("a", {
                href: a.source_url,
                rel: "nofollow",
                className: r,
                title: a.title,
                onClick: function (t) {
                  return e.handleClick(t, l, a)
                }
              }, m.default.createElement("div", {
                className: "list_img_holder " + v
              }, m.default.createElement(p.default, {
                src: o
              }), h && m.default.createElement("div", {
                className: "video-time"
              }, m.default.createElement("span", {
                title: h
              }, f.default.formatDuration(h))), n && !window.isXiguaLongVideoPage && m.default.createElement(g.default, null)), m.default.createElement("div", {
                className: "list_text_holder"
              }, m.default.createElement("p", {
                className: "dotdot line2"
              }, a.title), m.default.createElement("div", {
                className: "item_info"
              }, u && "wap_search" !== _.default.request("utm_medium") && m.default.createElement("span", {
                className: "app_special space"
              }, "打开APP"), m.default.createElement("span", {
                className: "src space"
              }, s)))))
            }
          }]),
          t
      }(s.Component);
    v.propTypes = {
        handleClick: h.default.func,
        datum: h.default.object,
        GTMValue: h.default.object,
        type: h.default.string,
        index: h.default.number,
        sectionRef: h.default.func
      },
      a.default = v
  };
  o.fEFvPac5 = function (e, t, a, i, l) {
    Object.defineProperty(a, "__esModule", {
      value: !0
    });
    var d = i(e("__gK4WbX")),
      r = i(e("lgLPKmWO")),
      o = i(e("LFxswB00")),
      u = i(e("_3k8jqSq")),
      n = i(e("C_TrCxPr")),
      s = e("zNszyAds"),
      m = i(s),
      _ = i(e("_EuEK26F")),
      f = i(e("NpbYakKP")),
      c = i(e("xFryiHX9")),
      p = i(e("DjbOufn3")),
      g = i(e("RiX6bfLf")),
      h = function (e) {
        function t() {
          return (0,
              r.default)(this, t),
            (0,
              u.default)(this, (t.__proto__ || (0,
              d.default)(t)).apply(this, arguments))
        }
        return (0,
            n.default)(t, e),
          (0,
            o.default)(t, [{
            key: "handleClick",
            value: function (e, t, a) {
              e.preventDefault(),
                c.default.request("audit_mode") || this.props.handleClick(e, t, a)
            }
          }, {
            key: "getImgSrc",
            value: function (e) {
              var t = void 0;
              return e.large_image_list && e.large_image_list.length ? t = e.large_image_list[0].url : e.image_detail && e.image_detail.length ? t = e.image_detail.reduce(function (e, t) {
                  return t.height > e.height ? t : e
                }).url : e.middle_image ? t = e.middle_image.url ? e.middle_image.url : e.middle_image : e.image_list && e.image_list.length && (t = e.image_list[0].url),
                e.video && e.video.cover_image_url && (t = e.video.cover_image_url),
                e && e.cover_list && e.cover_list.length > 0 && (t = e.cover_list[0].url.replace(".webp", ".image")),
                t && (t = t.replace(/^http:/, "https:")),
                t
            }
          }, {
            key: "getVideoDuration",
            value: function (e) {
              var t = 0;
              return e.has_video && e.video_duration && (t = e.video_duration),
                e.video && e.video.duration && (t = e.video.duration),
                e.video_info && e.video_info.duration && (t = e.video_info.duration),
                t
            }
          }, {
            key: "render",
            value: function () {
              var e = this,
                t = this.props,
                a = t.datum,
                i = t.index,
                l = t.GTMValue,
                d = a.more_mode || a.middle_mode,
                r = (0,
                  _.default)("feed-list", a.type, "feed-list--two", {
                  middle_mode: d,
                  app_special: "appOnly" === a.type,
                  related_news: "relatedNews" === a.type,
                  "feed-item--right": this.props.right,
                  "feed-list--left": !this.props.right
                }),
                o = (0,
                  _.default)("article_link", "clearfix", {
                  app_promotion_download: a.app_promotion_download
                }),
                u = f.default.needDownloadApp(l),
                n = a.open_label || "打开APP",
                s = "appOnly" === this.props.type && 0 === this.props.index,
                g = this.getImgSrc(a),
                h = this.getVideoDuration(a),
                v = window.APP_CONFIG && window.APP_CONFIG.watermark_class || "default-watermark",
                w = a && a.author && a.author.name || "",
                y = a && a.title || w;
              return m.default.createElement("section", {
                "data-group-id": a.group_id,
                className: r,
                key: i,
                ref: this.props.sectionRef
              }, m.default.createElement("a", {
                href: a.source_url,
                rel: "nofollow",
                className: o,
                title: a.title,
                onClick: function (t) {
                  return e.handleClick(t, i, a)
                }
              }, m.default.createElement("div", {
                className: "list_img_holder " + v
              }, m.default.createElement(p.default, {
                src: g
              }), h && m.default.createElement("div", {
                className: "video-time"
              }, m.default.createElement("span", {
                title: h
              }, f.default.formatDuration(h))), s && !window.isXiguaVideoPage && m.default.createElement("div", {
                className: "feed-list__hot-tag " + (window.isGuagualongVideoPage ? "hot-border" : "")
              }, "热门")), m.default.createElement("div", {
                className: "list_text_holder"
              }, m.default.createElement("div", {
                className: "item_info"
              }, u && "wap_search" !== c.default.request("utm_medium") && m.default.createElement("span", {
                className: "app_special space"
              }, n)), m.default.createElement("p", {
                className: "dotdot line2"
              }, y))))
            }
          }]),
          t
      }(s.Component);
    h.propTypes = {
        handleClick: g.default.func,
        GTMValue: g.default.object,
        datum: g.default.object,
        type: g.default.string,
        index: g.default.number,
        right: g.default.number,
        sectionRef: g.default.func
      },
      a.default = h
  };
  o.m354h8HA = function (e, t, a, n, l) {
    Object.defineProperty(a, "__esModule", {
      value: !0
    });
    var u = n(e("__gK4WbX")),
      o = n(e("lgLPKmWO")),
      i = n(e("LFxswB00")),
      r = n(e("_3k8jqSq")),
      s = n(e("C_TrCxPr")),
      d = e("zNszyAds"),
      c = n(d),
      f = n(e("RiX6bfLf")),
      m = function (e) {
        function t() {
          return (0,
              o.default)(this, t),
            (0,
              r.default)(this, (t.__proto__ || (0,
              u.default)(t)).apply(this, arguments))
        }
        return (0,
            s.default)(t, e),
          (0,
            i.default)(t, [{
            key: "handleClick",
            value: function (e, t, a) {
              e.preventDefault(),
                this.props.handleClick(e, t, a)
            }
          }, {
            key: "render",
            value: function () {
              var e = this,
                t = this.props,
                a = t.datum,
                n = t.index,
                l = a.video.cover_image_url;
              return c.default.createElement("section", {
                "data-group-id": a.group_id,
                className: "xigua-live-online-room-container",
                key: n,
                ref: this.props.sectionRef,
                onClick: function (t) {
                  return e.handleClick(t, n, a)
                }
              }, c.default.createElement("img", {
                src: l,
                className: "online-room-poster"
              }), c.default.createElement("span", {
                className: "user-info-name"
              }, a.author.name), c.default.createElement("span", {
                className: "online-num"
              }, a.stats.play_count), c.default.createElement("span", {
                className: "dotdot line2 online-room-title"
              }, a.title))
            }
          }]),
          t
      }(d.Component);
    m.propTypes = {
        handleClick: f.default.func,
        datum: f.default.object,
        GTMValue: f.default.object,
        type: f.default.string,
        index: f.default.number,
        sectionRef: f.default.func
      },
      a.default = m
  };
  o.NBwGRHec = function (e, t, a, i, n) {
    var r = i(e("lT_XwWMZ")),
      d = i(e("kwJIKkEn")),
      o = i(e("kvaO6mJX")),
      u = i(e("__gK4WbX")),
      l = i(e("lgLPKmWO")),
      p = i(e("LFxswB00")),
      s = i(e("_3k8jqSq")),
      c = i(e("C_TrCxPr")),
      f = e("zNszyAds"),
      _ = i(f),
      w = i(e("NpbYakKP")),
      h = i(e("_2MpYYf8")),
      g = i(e("VcwWJehO")),
      y = i(e("xFryiHX9")),
      k = i(e("LPgXarRS")),
      v = i(e("YTR4OOyD")),
      m = i(e("_75hluCc")),
      b = i(e("fEFvPac5")),
      x = i(e("m354h8HA")),
      D = i(e("RiX6bfLf")),
      L = function (t) {
        function a(e) {
          (0,
            l.default)(this, a);
          var t = (0,
            s.default)(this, (a.__proto__ || (0,
            u.default)(a)).call(this, e));
          return t.handleClick = t.handleClick.bind(t),
            t
        }
        return (0,
            c.default)(a, t),
          (0,
            p.default)(a, [{
            key: "getExtraData",
            value: function (e, t) {
              return -1 !== ["appOnly", "relatedNews"].indexOf(this.props.type) && w.default.getExtraData({
                code_id: t,
                group_id: e,
                type: "wap_activation"
              })
            }
          }, {
            key: "handleClick",
            value: function () {
              var e = (0,
                o.default)(d.default.mark(function e(t, a, i) {
                var n, r, o, u, l, p, s, c, f, _, v, m, b, x, D;
                return d.default.wrap(function (e) {
                  for (;;)
                    switch (e.prev = e.next) {
                      case 0:
                        if (!i.open_source_url) {
                          e.next = 3;
                          break
                        }
                        return window.gaeventTestSample5(i.ga_category, "click"),
                          e.abrupt("return", !1);
                      case 3:
                        n = this,
                          r = i.group_id,
                          o = i.has_video,
                          u = i.open_url,
                          l = i.code_id,
                          p = i.id,
                          s = void 0,
                          c = void 0,
                          f = w.default.shortLinkPrefix + "/Mxf8/",
                          e.t0 = this.props.type,
                          e.next = "appOnly" === e.t0 ? 11 : "relatedNews" === e.t0 ? 15 : 19;
                        break;
                      case 11:
                        return this.props.GTMValue.apponlySurl && (f = this.props.GTMValue.apponlySurl),
                          _ = {
                            showid: window.group_id,
                            groupid: r,
                            position: "apponly"
                          },
                          f = y.default.appendQuery(f, k.default.stringify(_)),
                          e.abrupt("break", 19);
                      case 15:
                        return this.props.GTMValue.relatedSurl && (f = this.props.GTMValue.relatedSurl),
                          v = {
                            showid: window.group_id,
                            groupid: r,
                            position: "relatednews"
                          },
                          f = y.default.appendQuery(f, k.default.stringify(v)),
                          e.abrupt("break", 19);
                      case 19:
                        e.t1 = this.props.type,
                          e.next = "appOnly" === e.t1 ? 22 : "relatedNews" === e.t1 ? 25 : 28;
                        break;
                      case 22:
                        return s = "apponly",
                          c = g.default.browser.weixin ? "click_weixin_rf_detail_apponly" : "click_wap_rf_detail_apponly",
                          e.abrupt("break", 28);
                      case 25:
                        return s = "related_news",
                          c = g.default.browser.weixin ? "click_weixin_rf_detail_related" : "click_wap_rf_detail_related",
                          e.abrupt("break", 28);
                      case 28:
                        if (m = w.default.needDownloadApp(this.props.GTMValue),
                          b = s + "_" + (m ? "download" : "click"),
                          window.maevent("pageview", b, 0, a + 1),
                          l && (r || p) && w.default.sendActionLog({
                            distance: parseInt(n.getNewDistance(a)),
                            code_id: l,
                            group_id: r
                          }),
                          t.preventDefault(),
                          !window.is404Page) {
                          e.next = 38;
                          break
                        }
                        return x = {
                            downloadLink: "https://d.toutiao.com/DSt8/"
                          },
                          "video_article" === y.default.request("app") && (x.downloadLink = "https://d.toutiao.com/fDt7/"),
                          (0,
                            h.default)(x),
                          e.abrupt("return");
                      case 38:
                        if (!("wap_search" === y.default.request("utm_medium") && a < 2) || g.default.browser.weixin) {
                          e.next = 41;
                          break
                        }
                        return location.href = "/i" + i.group_id + "/" + location.search,
                          e.abrupt("return");
                      case 41:
                        D = {
                            position: "recommendation",
                            downloadLink: f,
                            type: window.isXiguaLive ? "xigua_live" : "detail",
                            id: window.isXiguaLive ? i.id : r,
                            gdLabel: c,
                            isNewVideo: o,
                            postdata: w.default.getIIDinfo(s),
                            distance: i.distance,
                            code_id: i.code_id
                          },
                          window.isXiguaLongVideoPage && (D.type = "long_video",
                            D.album_id = i.id),
                          this.getExtraData(r, l) && (D.extraData = this.getExtraData(r, l)),
                          u && (D.nativeLink = u),
                          (0,
                            h.default)(D);
                      case 46:
                      case "end":
                        return e.stop()
                    }
                }, e, this)
              }));
              return function (t, a, i) {
                return e.apply(this, arguments)
              }
            }()
          }, {
            key: "getDistance",
            value: function (t) {
              var a = 0;
              if (this[t.type + "-feed-list-" + t.index]) {
                var i = e("_DQ3wKWt")(".tt-video")[0] && e("_DQ3wKWt")(".tt-video")[0].getBoundingClientRect().bottom || 0;
                a = this[t.type + "-feed-list-" + t.index]._section.getBoundingClientRect().bottom - i
              }
              return a
            }
          }, {
            key: "getNewDistance",
            value: function (e) {
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
            value: function (e, t) {
              e.distance = this.getNewDistance(t),
                e.group_id && w.default.handleFirstInViewDebounce(e, 1e3)
            }
          }, {
            key: "render",
            value: function () {
              var e = this.props,
                t = e.data,
                a = e.type,
                i = e.GTMValue,
                n = this;
              return _.default.createElement("div", {
                className: "feed-list-container-new-video " + a.toLowerCase() + "-container"
              }, _.default.createElement("div", {
                className: "list-content"
              }, t.data.map(function (e, t) {
                switch (a) {
                  case "appOnly":
                    e.enter_from = "wap_app_special",
                      e.code_id = "14798012085000246",
                      window.isXiguaLongVideoPage && (e.code_id = "900247002");
                    break;
                  case "relatedNews":
                    e.enter_from = "wap_related_article",
                      e.code_id = "14799599715000246"
                }
                return e.type = a,
                  e.index = t,
                  _.default.createElement(v.default, {
                    key: e.group_id,
                    onFirstInView: function () {
                      return n.handleFirstInView(e, t)
                    }
                  }, _.default.createElement(V, {
                    datum: e,
                    index: t,
                    handleClick: n.handleClick,
                    type: a,
                    right: t % 2,
                    GTMValue: i,
                    ref: function (e) {
                      n[a + "-feed-list-" + t] = e
                    }
                  }))
              })))
            }
          }]),
          a
      }(f.Component);
    L.propTypes = {
      GTMValue: D.default.object,
      type: D.default.string,
      data: D.default.object,
      appOnlyLength: D.default.number
    };
    var V = function (e) {
      function t() {
        return (0,
            l.default)(this, t),
          (0,
            s.default)(this, (t.__proto__ || (0,
            u.default)(t)).apply(this, arguments))
      }
      return (0,
          c.default)(t, e),
        (0,
          p.default)(t, [{
          key: "componentDidMount",
          value: function () {
            this.props.datum.promt && window.gaeventTestSample5(this.props.datum.ga_category, "show")
          }
        }, {
          key: "render",
          value: function () {
            var e = this,
              t = "appOnly" === this.props.type ? b.default : m.default;
            return 9 === this.props.datum.feed_type && (t = x.default),
              _.default.createElement(t, (0,
                r.default)({}, this.props, {
                sectionRef: function (t) {
                  e._section = t
                }
              }))
          }
        }]),
        t
    }(f.Component);
    V.propTypes = {
        type: D.default.string,
        datum: D.default.object
      },
      t.exports = L
  };
  o.Dr3CQh1j = function (e, u, n, t) {
    "use strict";
    n.__esModule = !0;
    var a = t(e("_TKuLVn3"));
    n.default = function (e, u, n) {
      return u in e ? (0,
          a.default)(e, u, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[u] = n,
        e
    }
  };
  o.Vpkz4S9Z = function (e, n, t, o, r) {
    var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } :
      function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      },
      i = function (e) {
        var n = function (n) {
          return "undefined" == typeof window ? n : (n.end = c.bind(n)(e),
            n)
        };
        return "function" == typeof e.end ? n(e) : n
      };
    i.callbackWrapper = function (e) {
        var n = {
          body: e
        };
        clearTimeout(this._jsonp.timeout),
          this._jsonp.callback.call(this, null, n)
      },
      i.errorWrapper = function () {
        var e = new Error("404 NotFound");
        this._jsonp.callback.call(this, e, null)
      };
    var c = function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
        timeout: 1e3
      };
      return function (n) {
        var t = setTimeout(i.errorWrapper.bind(this), e.timeout);
        this._jsonp = {
            callbackParam: e.callbackParam || "callback",
            callbackName: e.callbackName || "superagentCallback" + (new Date).valueOf() + parseInt(1e3 * Math.random()),
            callback: n,
            timeout: t
          },
          window[this._jsonp.callbackName] = i.callbackWrapper.bind(this);
        var o = function (e, n, t) {
          return n in e ? Object.defineProperty(e, n, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[n] = t,
            e
        }({}, this._jsonp.callbackParam, this._jsonp.callbackName);
        this._query.push(function (e) {
          if ("object" != (void 0 === e ? "undefined" : a(e)))
            return e;
          var n = [];
          for (var t in e)
            null != e[t] && n.push(encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));
          return n.join("&")
        }(o));
        var r = this._query.join("&"),
          c = document.createElement("script"),
          l = this.url.indexOf("?") > -1 ? "&" : "?",
          u = this.url + l + r;
        return c.src = u,
          document.getElementsByTagName("head")[0].appendChild(c),
          this
      }
    };
    void 0 !== n.exports ? n.exports = i : "function" == typeof define && define.amd ? define([], function () {
      return {
        jsonp: i
      }
    }) : "undefined" != typeof window && (window.superagentJSONP = i)
  };
  o.tU6m5zgF = function (l, e, r, t, s) {
    Function(function (l) {
      return 'e(e,a,r){(b[e]||(b[e]=t("x,y","x "+e+" y")(r,a)}a(e,a,r){(k[r]||(k[r]=t("x,y","new x[y]("+Array(r+1).join(",x[y]")(1)+")")(e,a)}r(e,a,r){n,t,s={},b=s.d=r?r.d+1:0;for(s["$"+b]=s,t=0;t<b;t)s[n="$"+t]=r[n];for(t=0,b=s=a;t<b;t)s[t]=a[t];c(e,0,s)}c(t,b,k){u(e){v[x]=e}f{g=,ting(bg)}l{try{y=c(t,b,k)}catch(e){h=e,y=l}}for(h,y,d,g,v=[],x=0;;)switch(g=){case 1:u(!)4:f5:u((e){a=0,r=e;{c=a<r;c&&u(e[a]),c}}(6:y=,u((y8:if(g=,lg,g=,y===c)b+=g;else if(y!==l)y9:c10:u(s(11:y=,u(+y)12:for(y=f,d=[],g=0;g<y;g)d[g]=y.charCodeAt(g)^g+y;u(String.fromCharCode.apply(null,d13:y=,h=delete [y]14:59:u((g=)?(y=x,v.slice(x-=g,y:[])61:u([])62:g=,k[0]=65599*k[0]+k[1].charCodeAt(g)>>>065:h=,y=,[y]=h66:u(e(t[b],,67:y=,d=,u((g=).x===c?r(g.y,y,k):g.apply(d,y68:u(e((g=t[b])<"<"?(b--,f):g+g,,70:u(!1)71:n72:+f73:u(parseInt(f,3675:if(){bcase 74:g=<<16>>16g76:u(k[])77:y=,u([y])78:g=,u(a(v,x-=g+1,g79:g=,u(k["$"+g])81:h=,[f]=h82:u([f])83:h=,k[]=h84:!085:void 086:u(v[x-1])88:h=,y=,h,y89:u({e{r(e.y,arguments,k)}e.y=f,e.x=c,e})90:null91:h93:h=0:;default:u((g<<16>>16)-16)}}n=this,t=n.Function,s=Object.keys||(e){a={},r=0;for(c in e)a[r]=c;a=r,a},b={},k={};r'.replace(/[-]/g, function (e) {
        return l[15 & e.charCodeAt(0)]
      })
    }("v[x++]=v[--x]t.charCodeAt(b++)-32function return ))++.substrvar .length(),b+=;break;case ;break}".split("")))()('gr$Daten Иb/s!l y͒yĹg,(lfi~ah`{mv,-n|jqewVxp{rvmmx,&effkx[!cs"l".Pq%widthl"@q&heightl"vr*getContextx$"2d[!cs#l#,*;?|u.|uc{uq$fontl#vr(fillTextx$$龘ฑภ경2<[#c}l#2q*shadowBlurl#1q-shadowOffsetXl#$$limeq+shadowColorl#vr#arcx88802[%c}l#vr&strokex[ c}l"v,)}eOmyoZB]mx[ cs!0s$l$Pb<k7l l!r&lengthb%^l$1+s$jl  s#i$1ek1s$gr#tack4)zgr#tac$! +0o![#cj?o ]!l$b%s"o ]!l"l$b*b^0d#>>>s!0s%yA0s"l"l!r&lengthb<k+l"^l"1+s"jl  s&l&z0l!$ +["cs\'(0l#i\'1ps9wxb&s() &{s)/s(gr&Stringr,fromCharCodes)0s*yWl ._b&s o!])l l Jb<k$.aj;l .Tb<k$.gj/l .^b<k&i"-4j!+& s+yPo!]+s!l!l Hd>&l!l Bd>&+l!l <d>&+l!l 6d>&+l!l &+ s,y=o!o!]/q"13o!l q"10o!],l 2d>& s.{s-yMo!o!]0q"13o!]*Ld<l 4d#>>>b|s!o!l q"10o!],l!& s/yIo!o!].q"13o!],o!]*Jd<l 6d#>>>b|&o!]+l &+ s0l-l!&l-l!i\'1z141z4b/@d<l"b|&+l-l(l!b^&+l-l&zl\'g,)gk}ejo{cm,)|yn~Lij~em["cl$b%@d<l&zl\'l $ +["cl$b%b|&+l-l%8d<@b|l!b^&+ q$sign ', [Object.defineProperty(r, "__esModule", {
      value: !0
    })])
  };
  o._k9Qceab = function (e, t, n, d, a) {
    Object.defineProperty(n, "__esModule", {
        value: !0
      }),
      n.getRecAid = void 0;
    var i = d(e("XbxgipO3")),
      o = d(e("_l59FVJy")),
      r = d(e("Dr3CQh1j"));
    n.fetchVideoData = function (e) {
        return u.default.get("//" + _ + "/i" + e + "/info/?_signature=" + (0,
          s.sign)(e) + "&i=" + e)
      },
      n.fetchCommonData = function (e, t, n) {
        if (c.default.notShowRecommendation)
          return !1;
        t.xigua_running = 0;
        var d = window.relatedOnly && window.relatedOnly.group_id || [],
          a = window.relatedOnly && window.relatedOnly.media_id || [];
        d.indexOf(window.group_id) > -1 && (t.only_related_rec = 1),
          a.indexOf(window.mediaUserId) > -1 && (t.only_related_rec = 1),
          "video_article" === m.default.request("app") && (t.only_video = 1),
          t.web_id = m.default.cookie("tt_webid") || "",
          t.utm_source = m.default.cookie("utm_source") || m.default.request("utm_source") || "",
          t.utm_medium = m.default.cookie("utm_source") || m.default.request("utm_source") || "",
          t.utm_campaign = m.default.cookie("utm_source") || m.default.request("utm_source") || "",
          t.image_type = window.isXiguaLive ? "obj" : "video1609";
        var i = "//" + _ + "/related/open/" + e + "/?" + l.default.stringify(t, {
          indices: !1
        });
        u.default.get(i).end(function (e, d) {
          if (e)
            window.maevent("video_content", "recommended_failed");
          else
            try {
              var a = JSON.parse(d.text);
              if (a.data && "success" === a.message)
                if (Array.isArray(a.data)) {
                  var i = Array.isArray(t.code_id) ? t.code_id[0] : t.code_id,
                    u = (0,
                      r.default)({}, i, a.data);
                  a.data = u
                } else
                  (0,
                    o.default)(a.data).map(function (e) {
                    a.data[e] = a.data[e] || [],
                      a.data[e].map(function (e) {
                        e.group_id = e.id
                      })
                  });
              else
                a.data = null,
                window.maevent("video_content", "recommended_failed");
              n(a)
            } catch (e) {
              throw n({
                  data: null,
                  message: "error"
                }),
                window.maevent("video_content", "recommended_failed"),
                new Error("ERROR IN RECOMMEDNDATION" + e)
            }
        })
      },
      n.fetchOpenData = function (e, t, n) {
        var d = "/related/open/" + e + "/?" + l.default.stringify(t, {
          indices: !1
        });
        u.default.get(d).end(function (e, t) {
          if (e)
            window.maevent("video_content", "recommended_failed");
          else
            try {
              var d = JSON.parse(t.text);
              n(d)
            } catch (e) {
              window.maevent("video_content", "recommended_failed")
            }
        })
      },
      n.fetchRelatedVideoData = function (e, t, n) {
        var d = "/related/video/" + e + "/?" + l.default.stringify(t);
        u.default.get(d).end(function (e, t) {
          if (!e) {
            var d = JSON.parse(t.text);
            n(d)
          }
        })
      },
      n.fetchCommentsData = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            offset: 0,
            count: 0
          },
          t = arguments[1],
          n = c.default.getUTMValue("show_comments_num") - 0;
        n = n > 50 ? 50 : n || 2,
          e.count > 0 && (n = e.count);
        var d = {
          group_id: window.group_id,
          tab_index: 0,
          count: n,
          offset: e.offset || 0
        };
        u.default.get("//ib.snssdk.com/article/v1/tab_comments/?" + l.default.stringify(d)).use((0,
          f.default)({
          timeout: 2e3
        })).end(function (e, n) {
          e || n.body && t(n.body)
        })
      },
      n.fetchBulletsData = function (e, t) {
        u.default.get(e.url + l.default.stringify(e.params)).use((0,
          f.default)({
          timeout: 2e3
        })).end(function (e, n) {
          if (e)
            return null;
          var d = n.body;
          d.count && (d.data.sort(function (e, t) {
              return e.offset_time - t.offset_time
            }),
            t(d))
        })
      },
      n.getRelationship = function (e) {
        var t = {
            iid: e
          },
          n = "/relation/friends/?" + l.default.stringify(t);
        return u.default.get(n)
      },
      n.getHotCardInfo = function () {
        var e = "/related/hotspot/?group_id=" + window.group_id;
        return u.default.get(e)
      };
    var u = d(e("A33e_8Sy")),
      f = d(e("Vpkz4S9Z")),
      l = d(e("LPgXarRS")),
      c = d(e("NpbYakKP")),
      s = e("tU6m5zgF"),
      m = d(e("xFryiHX9")),
      _ = ["m.365yg.com", "m.ixigua.com"].indexOf(location.hostname) > -1 ? "m.365yg.com" : location.hostname;
    n.getRecAid = function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return window.is404Page ? null : new i.default(function (n, d) {
        t.tt_running = 0;
        var a = window.relatedOnly && window.relatedOnly.group_id || [],
          i = window.relatedOnly && window.relatedOnly.media_id || [];
        a.indexOf(window.group_id) > -1 && (t.only_related_rec = 1),
          i.indexOf(window.mediaUserId) > -1 && (t.only_related_rec = 1),
          t.enable_mix = 1;
        var o = "/related/rec_app/" + e + "/?" + l.default.stringify(t, {
          indices: !1
        });
        u.default.get(o).timeout(60).end(function (e, t) {
          if (e)
            return n(!1);
          var d = JSON.parse(t.text);
          if (!d.data)
            return n(!1);
          var a = d.data.rec_aid;
          if (!(a && a.length > 0))
            return n(!1);
          n(a[0])
        })
      })
    }
  };
  o.M42056_9 = function (e, t, a, n, o) {
    Object.defineProperty(a, "__esModule", {
        value: !0
      }),
      a.default = void 0;
    var l = n(e("lT_XwWMZ")),
      d = n(e("__gK4WbX")),
      i = n(e("lgLPKmWO")),
      s = n(e("LFxswB00")),
      r = n(e("_3k8jqSq")),
      c = n(e("C_TrCxPr")),
      u = n(e("zNszyAds")),
      m = n(e("dLqIczAI")),
      p = n(e("NBwGRHec")),
      h = n(e("xFryiHX9")),
      _ = e("_k9Qceab"),
      f = n(e("_h2weDsU")),
      w = n(e("_2MpYYf8")),
      g = n(e("VcwWJehO")),
      v = {
        wap_app_special: "14798012085000246"
      },
      y = function (e) {
        function t(e) {
          (0,
            i.default)(this, t);
          var a = (0,
            r.default)(this, (t.__proto__ || (0,
            d.default)(t)).call(this, e));
          return (0,
              f.default)(),
            a.state = {
              feedList: []
            },
            a.shareScrollTop = 0,
            a
        }
        return (0,
            c.default)(t, e),
          (0,
            s.default)(t, [{
            key: "componentDidMount",
            value: function () {
              this.fetchRecommendation()
            }
          }, {
            key: "fetchRecommendation",
            value: function () {
              var e = this,
                t = {
                  parent_rid: window.parent_rid || "",
                  page_type: "article",
                  share_iid: h.default.request("iid") || "",
                  share_app_name: h.default.request("app") || "",
                  wx_share_count: 2,
                  site_id: 5000251,
                  num: [3],
                  code_id: [v.wap_app_special],
                  only_related_rec: 0,
                  except_page: ""
                };
              (0,
                _.fetchCommonData)(window.group_id, t, function (t) {
                var a = [];
                t.data && (a = (a = t.data[v.wap_app_special] || []).map(function (e) {
                    return e.image_list && e.image_list.length >= 3 && (e.image_list = e.image_list.slice(0, 1)),
                      e
                  })),
                  window.maevent("weixin_share", "recommend", a.length.toString()),
                  0 !== a.length && (window.maevent("pageview", "weixin_share"),
                    e.shareScrollTop = document.body.scrollTop || document.documentElement.scrollTop,
                    document.body.classList.add("modal-open"),
                    e.setState({
                      feedList: a
                    }))
              })
            }
          }, {
            key: "handleReadAgainClick",
            value: function () {
              var e = document.querySelector(".weixin-share-portal");
              e && (document.body.classList.remove("modal-open"),
                document.body.style.top = "0px",
                document.body.scrollTop = document.documentElement.scrollTop = this.shareScrollTop,
                m.default.unmountComponentAtNode(e))
            }
          }, {
            key: "handleDownload",
            value: function () {
              var e = {
                downloadLink: g.default.os.android ? "https://d.toutiao.com/F54a/" : "https://d.toutiao.com/5dwY/",
                gdLabel: "click_rf_weixin_share_again",
                type: "home",
                position: "shareBottomBanner",
                isNewVideo: !1
              };
              (0,
                w.default)(e)
            }
          }, {
            key: "render",
            value: function () {
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
                onClick: function () {
                  return e.handleReadAgainClick()
                }
              }, "继续阅读")), u.default.createElement("div", {
                className: "share-recommend"
              }, u.default.createElement(p.default, (0,
                l.default)({
                data: {
                  data: t
                },
                type: "relatedNews"
              }, this.props, {
                appOnlyLength: t.length,
                GTMValue: {},
                isWeixinSharePage: !0
              }))), u.default.createElement("div", {
                className: "share-more-btn",
                onClick: function () {
                  return e.handleDownload()
                }
              }, "下载APP查看更多"))
            }
          }]),
          t
      }(u.default.Component);
    a.default = y
  };
  o.L8RHSSuT = function (e, t, n, a, i) {
    function o() {
      var e = location.host,
        t = location.pathname,
        n = [location.protocol, "//", e, t, location.search, location.hash].join("");
      if (location.search)
        if (-1 === location.search.indexOf("wxshare_count="))
          n = n.replace(location.search, location.search + "&wxshare_count=2");
        else {
          var a = s.default.request("wxshare_count") || "0";
          a = a ? parseInt(a) + 1 : 0,
            n = n.replace("wxshare_count=" + s.default.request("wxshare_count"), "wxshare_count=" + a)
        }
      else
        n += "?wxshare_count=2";
      n = n.replace("__tt_rbl=1&", "").replace("__tt_rbl=1", "");
      var i = p;
      return -1 === n.indexOf("pbid=") ? n += "&pbid=" + i : n = n.replace(/pbid=(\d+)/gi, "pbid=" + i),
        n
    }

    function r() {
      return window.title
    }

    function c() {
      var t = document.querySelector("article .article__content img"),
        n = document.querySelector(".tt-video"),
        a = document.querySelector(".noplay-poster"),
        i = n ? e("_DQ3wKWt")(n).find("video").attr("poster") : null;
      return a && (i = a.getAttribute("src")),
        i || (i = t ? t.src : "https://p3.pstatp.com/large/113f2000647359d21b305"),
        i
    }

    function l() {
      u.default.browser.weixin && "weixin" in window && window.weixin.onReady(function () {
        var t = r(),
          n = c(),
          a = o(),
          i = function () {
            var t = e("_DQ3wKWt")("meta[name=description]").attr("content");
            return (t || "").indexOf("(ixigua.com)给你新鲜好看") > -1 ? "打开APP，看更多精彩小视频" : t
          }();
        window.wx.onMenuShareTimeline && window.wx.onMenuShareTimeline({
            title: t,
            desc: i,
            link: a,
            imgUrl: n,
            success: function () {
              window.gaevent("share_success", "share", location.hostname + location.pathname),
                ["news_article", "news_article_lite"].indexOf(s.default.request("app") > -1) && (0,
                  w.render)(d.default.createElement(h.default, null), document.querySelector(".weixin-share-portal"))
            },
            cancel: function () {}
          }),
          window.wx.onMenuShareAppMessage && window.wx.onMenuShareAppMessage({
            title: t,
            desc: i,
            link: a,
            imgUrl: n,
            success: function () {
              window.gaevent("share_success", "share", location.hostname + location.pathname),
                ["news_article", "news_article_lite"].indexOf(s.default.request("app") > -1) && (0,
                  w.render)(d.default.createElement(h.default, null), document.querySelector(".weixin-share-portal"))
            }
          })
      }, {
        always: function () {}
      })
    }
    var s = a(e("xFryiHX9")),
      u = a(e("VcwWJehO")),
      d = a(e("zNszyAds")),
      w = e("dLqIczAI"),
      h = a(e("M42056_9"));
    e("_8ukH2ys");
    var p = s.default.cookie("tt_webid") || "0";
    window.getShareLink = o,
      window.getShareTitle = r,
      window.getShareImage = c,
      t.exports = {
        init: l
      }
  };
  o.BwW7yiKX = function (e, t, n, a, i) {
    function o() {}

    function s() {
      return !window.isListPage && q.default.browser.weixin
    }

    function d() {
      return "/item/activity/rename/" === location.pathname || "rename" === _.default.request("activity")
    }

    function r() {
      ! function (e, t, n, a, i, o, s) {
        e.GoogleAnalyticsObject = i,
          e.ga = e.ga || function () {
            (e.ga.q = e.ga.q || []).push(arguments)
          },
          e.ga.l = 1 * new Date,
          o = t.createElement(n),
          s = t.getElementsByTagName(n)[0],
          o.async = 1,
          o.src = "//www.google-analytics.com/analytics.js",
          o.dataset.from = "toutiao",
          s.parentNode.insertBefore(o, s)
      }(window, document, "script", 0, "ga")
    }

    function w(e) {
      if (window.is_landing_page)
        return 1 === Math.floor(1e3 * Math.random());
      var t = 20;
      s() && (t = 1),
        t = e || t;
      var n = N.default.getTTWebID,
        a = null !== n ? Math.floor(parseInt(n) / 10) % 1e3 : void 0;
      return !isNaN(a) && a >= 1 && a <= t
    }

    function l() {
      window.ga("create", "UA-28423340-36", "auto", "testTracker", {
          siteSpeedSampleRate: 100
        }),
        window.gaeventTest = function (e, t, n, a, i) {
          console.log("gaTest:" + e + "," + t + "," + n),
            "event" !== e && window.ga("testTracker.send", "event", e, t, n, void 0 !== a ? a : 1, i)
        },
        window.gaeventTestSample5 = function (e, t, n, a, i) {
          w(50) && (console.log("gaTest:" + e + "," + t + "," + n),
            "event" !== e && window.ga("testTracker.send", "event", e, t, n, void 0 !== a ? a : 1, i))
        }
    }

    function c() {
      var e = 17;
      s() && (e = 16);
      var t = "UA-28423340-" + e;
      navigator.userAgent.indexOf("ArticleStreamSdk") > -1 && (t = "UA-28423340-11"),
        d() && (t = "UA-100002932-1"),
        window.ga("create", t, "auto", {
          siteSpeedSampleRate: 100
        })
    }

    function u() {
      var e = location.pathname;
      e && -1 !== e.indexOf("/sem/") ? (_.default.request("atdl") && window.ga("set", "dimension5", _.default.request("atdl")),
        window.ga("send", "pageview", {
          page: e
        })) : ("1" === (N.default.ttSessionStorage.getItem("weixinlist_count") || "1") && window.ga("set", "dimension12", "first"),
        window.ga("send", "pageview", location.pathname + location.search + location.hash))
    }

    function g() {
      var t = new Image;
      t.src = location.protocol + "//" + location.hostname + "/__utm.gif?utmp=" + encodeURIComponent(location.href),
        t.onload = function (t) {
          e("_DQ3wKWt")(this).remove()
        },
        e("_DQ3wKWt")(function () {
          e("_DQ3wKWt")("body").append(t)
        });
      window.addEventListener("error", function (e, t, n) {
        var a = e,
          i = t,
          o = n;
        "object" === (void 0 === e ? "undefined" : (0,
          y.default)(e)) && (a = e.message,
          i = e.fileName,
          o = e.lineNumber);
        var s = "[" + i + " (" + o + ")]" + a;
        Math.floor(100 * Math.random()) < 10 && window.ga("send", "exception", {
          exDescription: s,
          exFatal: !1
        })
      })
    }

    function m(e, t, n, a, i) {
      window.ga("send", "event", e, t, n, void 0 !== a ? a : 1, i)
    }

    function f(e) {
      window.ga("send", "pageview", location.pathname + location.search + location.hash),
        console.log("ga:pageview", location.pathname + location.search + location.hash)
    }

    function p() {
      ! function () {
        if (!/micromessenger/i.test(navigator.userAgent))
          return !1;
        var e = N.default.ttSessionStorage.getItem("weixinlist_query"),
          t = N.default.ttSessionStorage.getItem("weixinlist_count");
        if (t) {
          var n = _.default.request(),
            a = location.hash,
            i = n;
          if (N.default.ttSessionStorage.setItem("weixinlist_count", Number(t || 0) + 1),
            e) {
            var o = location.pathname + "?" + e;
            history.replaceState(null, null, o);
            var s = _.default.request();
            i = (0,
              h.default)({}, n, s)
          }
          i = (0,
            h.default)({}, i, {
            weixin_list: 1
          });
          var d = (0,
              v.default)(i).map(function (e) {
              return e + "=" + i[e]
            }).join("&"),
            r = location.pathname + "?" + d + a;
          history.replaceState(null, null, r)
        }
      }(),
      w() ? (r(),
        l(),
        c(),
        function () {
          var e = _.default.request("wxshare_count");
          !isNaN(e) && e > 0 && window.ga("set", "dimension1", e);
          var t = _.default.request("wxshare_banner");
          !isNaN(t) && t > 0 && window.ga("set", "dimension10", t);
          var n = _.default.request("readmore");
          if (!isNaN(n) && n > 0 && window.ga("set", "dimension2", n),
            window.tag && window.ga("set", "dimension4", window.tag),
            window.ga("set", "dimension5", window.isNewVideoPage ? 1 : 0),
            s()) {
            var a = _.default.request("app");
            a && window.ga("set", "dimension6", a);
            var i = _.default.request("utm_medium");
            i && window.ga("set", "dimension7", i);
            var o = _.default.request("isappinstalled");
            !isNaN(o) && o >= 0 && window.ga("set", "dimension8", o - 0 ? 1 : 0),
              window.ga("set", "dimension13", location.protocol.slice(0, -1)),
              window.ga("set", "dimension14", _.default.request("from")),
              window.ga("set", "dimension17", _.default.request("share_type"))
          } else
            window.ga(function (e) {
              var t = e.get("clientId");
              window.ga("set", "dimension7", t)
            }),
            window.ga("set", "dimension6", _.default.getBrowserName()),
            window.ga("set", "dimension8", navigator.userAgent),
            window.ga("set", "dimension9", window.city || ""),
            window.ga("set", "dimension11", location.protocol.slice(0, -1));
          var d = location.pathname;
          d && -1 !== d.indexOf("/sem/") && _.default.request("atdl") && window.ga("set", "dimension5", _.default.request("atdl")),
            "1" === _.default.request("ly") && window.ga("set", "dimension20", "open_feed");
          var r = _.default.request("timestamp");
          if (r) {
            var w = N.default.formatDate(new Date(Number(1e3 * r)), "yyyyMMddhh");
            window.ga("set", "dimension19", w)
          }
        }(),
        u(),
        s() || function () {
          var e = document.createElement("script");
          e.src = "//hm.baidu.com/hm.js?23e756494636a870d09e32c92e64fdd6";
          var t = document.getElementsByTagName("script")[0];
          t.parentNode.insertBefore(e, t)
        }(),
        window._taq.push(["create", "TT-growth-01", "m.toutiao.com"]),
        window._taq.push(["trackinit", "mobile", "wap", 1]),
        function () {
          var e = document.createElement("script");
          e.type = "text/javascript",
            e.async = !0,
            e.src = document.location.protocol + "//s3.pstatp.com/adstatic/resource/landing_log/dist/1.0.13/static/js/toutiao-analytics.js";
          var t = document.getElementsByTagName("script")[0];
          t.parentNode.insertBefore(e, t)
        }(),
        g(),
        window.gaevent = m,
        window.resendGA = f) : d() && (r(),
        l(),
        c(),
        u(),
        g(),
        window.gaevent = m,
        window.resendGA = f)
    }
    var v = a(e("_l59FVJy")),
      h = a(e("rCvC6Owx")),
      y = a(e("_YselYzt")),
      q = a(e("VcwWJehO")),
      _ = a(e("xFryiHX9")),
      N = a(e("NpbYakKP"));
    window.gaevent = o,
      window.gaqpush = o,
      window.resendGA = o,
      window.gaeventTest = o,
      window._taq = window._taq || [],
      t.exports = {
        init: p
      }
  };
  o.ioN_z9qp = function (e, t, a, n, o) {
    function i() {}

    function s() {
      return !window.isListPage && _.default.browser.weixin
    }

    function r() {
      return "/item/activity/rename/" === location.pathname || "rename" === y.default.request("activity")
    }

    function u() {
      return !!location.pathname.match("/item/activity/danmu")
    }

    function c() {
      return "ttvideo" === y.default.request("activity")
    }

    function d() {
      var e = "UA-28423340-51";
      (navigator.userAgent.indexOf("ArticleStreamSdk") > -1 || "open" == y.default.request("utm_campaign")) && (e = "UA-28423340-11"),
      r() && (e = "UA-100002932-1"),
        u() && (e = "UA-100002932-2"),
        c() && (e = "UA-102589932-1"),
        ga("create", e, "auto", {
          siteSpeedSampleRate: 100
        })
    }

    function l() {
      var e = location.pathname;
      e && -1 != e.indexOf("/sem/") ? (y.default.request("atdl") && ga("set", "dimension5", y.default.request("atdl")),
        ga("send", "pageview", {
          page: e
        })) : ("1" === (x.default.ttSessionStorage.getItem("weixinlist_count") || "1") && window.ga("set", "dimension12", "first"),
        ga("send", "pageview", location.pathname + location.search + location.hash))
    }

    function g(e) {
      var t = 5;
      s() && (t = 5),
        t = e || t;
      var a = x.default.getTTWebID,
        n = null !== a ? parseInt(a) % 1e3 : void 0;
      return !isNaN(n) && n >= 1 && n <= t
    }

    function m() {
      var t = new Image;
      t.src = location.protocol + "//" + location.hostname + "/__utm.gif?utmp=" + encodeURIComponent(location.href),
        t.onload = function (t) {
          e("_DQ3wKWt")(this).remove()
        },
        e("_DQ3wKWt")(function () {
          e("_DQ3wKWt")("body").append(t)
        });
      window.addEventListener("error", function (e, t, a) {
        var n = e,
          o = t,
          i = a;
        "object" === (void 0 === e ? "undefined" : (0,
          q.default)(e)) && (n = e.message,
          o = e.fileName,
          i = e.lineNumber);
        var s = "[" + o + " (" + i + ")]" + n;
        Math.floor(100 * Math.random()) < 10 && ga("send", "exception", {
          exDescription: s,
          exFatal: !1
        })
      })
    }

    function w(e, t, a, n, o) {
      console.log("ga:" + e + "," + t + "," + a),
        ga("send", "event", e, t, a, void 0 !== n ? n : 1, o)
    }

    function f(e) {
      ga("send", "pageview", location.pathname + location.search + location.hash),
        console.log("ga:pageview", location.pathname + location.search + location.hash)
    }

    function p() {
      ! function () {
        if (!/micromessenger/i.test(navigator.userAgent))
          return !1;
        var e = x.default.ttSessionStorage.getItem("weixinlist_query"),
          t = x.default.ttSessionStorage.getItem("weixinlist_count");
        if (t) {
          var a = y.default.request(),
            n = location.hash,
            o = a;
          if (x.default.ttSessionStorage.setItem("weixinlist_count", Number(t || 0) + 1),
            e) {
            var i = location.pathname + "?" + e;
            history.replaceState(null, null, i);
            var s = y.default.request();
            o = (0,
              h.default)({}, a, s)
          }
          o = (0,
            h.default)({}, o, {
            weixin_list: 1
          });
          var r = (0,
              v.default)(o).map(function (e) {
              return e + "=" + o[e]
            }).join("&"),
            u = location.pathname + "?" + r + n;
          history.replaceState(null, null, u)
        }
      }(),
      function (e, t, a, n, o, i, s) {
        e.GoogleAnalyticsObject = o,
          e.ga = e.ga || function () {
            (e.ga.q = e.ga.q || []).push(arguments)
          },
          e.ga.l = 1 * new Date,
          i = t.createElement(a),
          s = t.getElementsByTagName(a)[0],
          i.async = 1,
          i.src = "//www.google-analytics.com/analytics.js",
          i.dataset.from = "toutiao",
          s.parentNode.insertBefore(i, s)
      }(window, document, "script", 0, "ga"),
      ga("create", "UA-28423340-36", "auto", "testTracker", {
          siteSpeedSampleRate: 100
        }),
        window.gaeventTest = function (e, t, a, n, o) {
          console.log("gaTest:" + e + "," + t + "," + a),
            "event" != e && ga("testTracker.send", "event", e, t, a, void 0 !== n ? n : 1, o)
        },
        window.gaeventTestSample5 = function (e, t, a, n, o) {
          g(5) && (console.log("gaTest:" + e + "," + t + "," + a),
            "event" != e && ga("testTracker.send", "event", e, t, a, void 0 !== n ? n : 1, o))
        },
        r() ? (d(),
          l(),
          m(),
          window.gaevent = w,
          window.resendGA = f,
          window.gaqpush = gaqpush) : u() ? (d(),
          l(),
          m(),
          window.gaevent = w,
          window.resendGA = f,
          window.gaqpush = gaqpush) : c() ? (d(),
          l(),
          m(),
          window.gaevent = w,
          window.resendGA = f,
          window.gaqpush = gaqpush) : g() && (d(),
          function () {
            ga("set", "dimension1", "detail"),
              _.default.browser.weixin ? ga("set", "dimension2", "weixin") : ga("set", "dimension2", "wap");
            var e = y.default.request("wxshare_count");
            !isNaN(e) && e > 0 && ga("set", "dimension3", e);
            var t = y.default.request("isappinstalled");
            !isNaN(t) && t >= 0 && ga("set", "dimension4", t - 0 ? 1 : 0);
            var a = y.default.request("app");
            a && ga("set", "dimension5", a);
            var n = location.host;
            ga("set", "dimension6", n);
            var o = y.default.request("utm_source") || "",
              i = o + "_" + (y.default.request("from") || "");
            (o || y.default.request("from")) && ga("set", "dimension7", i);
            var s = y.default.request("share_type");
            s && ga("set", "dimension8", s)
          }(),
          l(),
          s() || function () {
            var e = document.createElement("script");
            e.src = "//hm.baidu.com/hm.js?23e756494636a870d09e32c92e64fdd6";
            var t = document.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e, t)
          }(),
          _taq.push(["create", "TT-growth-01", "m.toutiao.com"]),
          _taq.push(["trackinit", "mobile", "wap", 1]),
          function () {
            var e = document.createElement("script");
            e.type = "text/javascript",
              e.async = !0,
              e.src = document.location.protocol + "//s3.pstatp.com/adstatic/resource/landing_log/dist/1.0.13/static/js/toutiao-analytics.js";
            var t = document.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e, t)
          }(),
          m(),
          window.gaevent = w,
          window.resendGA = f,
          window.gaqpush = gaqpush)
    }
    var v = n(e("_l59FVJy")),
      h = n(e("rCvC6Owx")),
      q = n(e("_YselYzt")),
      _ = n(e("VcwWJehO")),
      y = n(e("xFryiHX9")),
      x = n(e("NpbYakKP"));
    window.gaevent = i,
      window.gaqpush = i,
      window.resendGA = i,
      window.gaeventTest = i,
      window._taq = window._taq || [],
      t.exports = {
        init: p
      }
  };
  o.ou6E6JlL = function (e, t, i, n, a) {
    t.exports = function (e, t) {
      var i = e.document,
        n = i.documentElement,
        a = i.querySelector("meta[name='viewport']"),
        r = i.querySelector("meta[name='responsive']"),
        s = Math.floor(e.devicePixelRatio) || 1,
        o = [1, 2, 3],
        c = 1,
        l = 0,
        d = !1;
      if (t.init = function (i) {
          return window.noScaling = i,
            t.isScalable = d = function () {
              if (i)
                return !1;
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
                  d = (r.match(/MQQBrowser\/([\d\.]+)/i),
                    r.match(/Chrome\/([\d\.]+)/i)),
                  h = r.match(/MiuiBrowser/i);
                return !!(c && parseFloat(c[1]) >= 537.36 && (h || s && parseFloat(s[1]) >= 6.1)) || (!!(l && parseFloat(l[1]) >= 9.6) || !!(d && parseFloat(d[1]) >= 30 && a))
              }
              return !1
            }(),
            t.changeScale(),
            this
        },
        r && d && (content = r.getAttribute("content"),
          content)) {
        var h = content.match(/initial\-dpr=([\d\.]+)/);
        h && (c = Math.floor(h[1]))
      }
      return t.scaleLock = !1,
        t.changeScale = function (r, c) {
          if (!this.scaleLock) {
            if (this.isScalable) {
              r = Math.floor(r) || s;
              this.dpr = o.indexOf(r) > -1 ? r : 3
            } else
              this.dpr = 1;
            this.scale = 1 / this.dpr,
              a && (a.parentNode.removeChild(a),
                a = null),
              function () {
                if (!a) {
                  var e = 1 == t.scale ? "width=device-width, " : "";
                  if ((a = i.createElement("meta")).setAttribute("name", "viewport"),
                    a.setAttribute("content", e + "initial-scale=" + t.scale + ", maximum-scale=" + t.scale + ", minimum-scale=" + t.scale + ", user-scalable=no"),
                    n.firstElementChild)
                    n.firstElementChild.appendChild(a);
                  else {
                    var r = i.createElement("div");
                    r.appendChild(a),
                      i.write(r.innerHTML)
                  }
                }
              }()
          }
          if (c && (this.scaleLock = c),
            n.getBoundingClientRect().width > e.innerWidth) {
            var l = 1 == this.scale ? "device-width" : e.innerWidth;
            a.setAttribute("content", "width=" + l + ",initial-scale=" + this.scale + ", maximum-scale=" + this.scale + ", minimum-scale=" + this.scale + ", user-scalable=no")
          }
          this.baseFontSize = n.getBoundingClientRect().width / 10,
            this.baseFontSize = Math.max(this.baseFontSize, 32),
            n.style.fontSize = this.baseFontSize + "px",
            n.setAttribute("data-dpr", this.dpr)
        },
        i.addEventListener("DOMContentLoaded", function (e) {
          i.body.style.fontSize = 12 * c + "px"
        }, !1),
        e.addEventListener("orientationchange", function (e) {
          clearTimeout(l),
            l = setTimeout(t.changeScale.bind(t), 300)
        }, !1),
        e.addEventListener("pageshow", function (e) {
          e.persisted && (clearTimeout(l),
            window.noScaling || (l = setTimeout(t.changeScale.bind(t), 300)))
        }, !1),
        t.rem2px = function (e) {
          var t = parseFloat(e) * this.dpr * this.baseFontSize;
          return "string" == typeof e && e.match(/rem$/) && (t += "px"),
            t
        },
        t.px2rem = function (e) {
          var t = parseFloat(e) * this.dpr / this.baseFontSize;
          return "string" == typeof e && e.match(/px$/) && (t += "rem"),
            t
        },
        t.px2px = function (e) {
          var t = parseFloat(e) * this.dpr;
          return "string" == typeof e && e.match(/px$/) && (t += "px"),
            t
        },
        t
    }(window, window.responsive || (window.responsive = {
      dpr: 1
    }))
  };
  o.enGsLehG = function (e, t, n, i, o) {
    ! function (e, t, n) {
      function i(e) {
        var n = function (e) {
          var n, i = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
          return (n = t.cookie.match(i)) ? unescape(n[2]) : null
        }("__tasessionId");
        return n ? n && e && (s("__tasessionId", n, {
              expires: 1800
            }),
            c = !1) : (u = (new Date).getTime(),
            s("__tasessionId", n = "" + function (e) {
              for (var t = ""; t.length < e; t += Math.random().toString(36).substr(2))
              ;
              return t.substr(0, e)
            }(9) + (new Date).getTime(), {
              expires: 1800
            }),
            c = !0),
          n
      }

      function o(e) {
        for (var t, n, i = 1, o = arguments.length; i < o; i++) {
          t = arguments[i];
          for (n in t)
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        return e
      }

      function s(e, n, i) {
        var s, a = {
          path: "/"
        };
        o(a, i),
          a.expires && (s = new Date).setTime(s.getTime() + 1e3 * i.expires),
          t.cookie = [e, "=", escape(n), a.expires ? "; expires=" + s.toUTCString() : "", a.path ? "; path=" + a.path : "", a.domain ? "; domain=" + a.domain : "", a.secure ? "; secure" : ""].join("")
      }
      var a = {},
        r = {},
        u = (new Date).getTime(),
        c = !1;
      a.setup = function (e) {
          o(r, e)
        },
        a.send = function (t, n) {
          var s = [],
            a = {};
          if (o(a, r, n, {
              sid: i("event" === t),
              type: t
            }),
            "close" !== t || (a.st = (new Date).getTime() - u,
              !c)) {
            for (var p in a)
              s.push(p + "=" + a[p]);
            s.push("t=" + (new Date).getTime()),
              s.push("source=wap"),
              e._ta_log_img_ = new Image,
              e._ta_log_img_.src = "//m.toutiao.com/user_log/?" + s.join("&")
          }
        },
        e.onpagehide = function (e) {
          a.send("close", {})
        },
        e.taAnalysis = a
    }(window, document)
  };
  o.xah411cG = function (e, t, n, r, o) {
    var i = r(e("_YselYzt"));
    ! function (e) {
      t.hasOwnProperty("exports") ? t.exports = e() : "function" == typeof define && define.amd ? define(e) : window[window.MarioJSSDKObject] = e()
    }(function () {
      function e(e, t, n, r) {
        if ("object" !== (void 0 === n ? "undefined" : (0,
            i.default)(n)))
          throw "objValue 必须是个对象。";
        (r = void 0 === r || r) ? (e[t] || (e[t] = {}),
          u(e[t], n)) : e[t] = n
      }

      function t(e, t) {
        if (!f(e)) {
          if (void 0 === t && (t = {}),
            "object" !== (void 0 === t ? "undefined" : (0,
              i.default)(t)))
            throw "params的类型不正确！";
          e = [
            [e, t]
          ]
        }
        var r, o = [];
        for (r = 0; r < e.length; r++) {
          var a = e[r][1] || {},
            s = {};
          u(s, b, a),
            o.push({
              event: e[r][0],
              params: s
            })
        }
        if (j)
          n(y.user, y.header, o);
        else
          for (r = 0; r < o.length; r++)
            M.push(o[r])
      }

      function n(e, t, n) {
        f(n) || (n = [n]);
        for (var r = 0; r < n.length; r++)
          n[r].params = c.stringify(n[r].params);
        var i;
        t.headers && (i = c.stringify(t.headers));
        var s = {};
        u(s, t),
          s.headers = i;
        var d = {
          user: e,
          header: s,
          events: n
        };
        1 === y.verbose && (d.verbose = 1),
          y.caller && (d.caller = y.caller),
          function (e) {
            ! function (e, t, n) {
              try {
                var r = new(XMLHttpRequest || window.ActiveXObject("Microsoft.XMLHTTP"));
                r.onreadystatechange = function () {
                    4 !== this.readyState || this.status >= 200 && this.status < 300 ? 4 === this.readyState && "function" == typeof n && n() : (O && console.log(this.status),
                      a(t, n))
                  },
                  r.open("post", e),
                  r.setRequestHeader("Content-Type", "application/json"),
                  r.send(c.stringify(t))
              } catch (e) {
                if (a(t, n),
                  O)
                  throw e
              }
            }(o()[0], e)
          }(d)
      }

      function r() {
        var e = null;
        ! function t() {
          if (e && clearTimeout(e),
            function () {
              var e = 0;
              for (var t in S)
                if (S.hasOwnProperty(t)) {
                  var n = S[t];
                  if (n.length > 0)
                    for (var r = 0; r < n.length; r++) {
                      var o = n[r],
                        i = "eventCommonParams" === t ? b : y[t];
                      i && (void 0 !== i[o] && "" !== i[o] || e++)
                    }
                }
              return 0 === e
            }() && M.length > 0) {
            j = !0;
            for (var r = 0; r < M.length; r++) {
              var o = {};
              u(o, b, M[r].params),
                M[r].params = o
            }
            n(y.user, y.header, M),
              M = []
          } else
            e = setTimeout(t, 100)
        }()
      }

      function o() {
        var e = p,
          t = v;
        return O ? (e = g,
            t = m) : (h || (e = l,
              t = w),
            d && (e = e.replace(/^https:\/\//, "http://"),
              t = t.replace(/^https:\/\//, "http://"))),
          [e, t]
      }

      function a(e, t) {
        var n = o()[1],
          r = function (e) {
            var t = "";
            for (var n in e)
              e.hasOwnProperty(n) && (t += "&" + n + "=" + c.stringify(e[n]));
            return t = "&" === t[0] ? t.slice(1) : t
          }(e),
          i = new Image(1, 1);
        i.onerror = function () {},
          i.onload = function () {
            "function" == typeof t && t()
          },
          i.src = n + "?" + r
      }

      function s() {
        ! function () {
          var e, t = {},
            n = {},
            r = navigator.userAgent.toLowerCase();
          navigator.appVersion.match(/MSIE 6./i) ? (t.type = "IE",
            t.version = 6) : ((e = r.match(/msie ([\d.]+)/)) ? n.ie = e[1] : (e = r.match(/firefox\/([\d.]+)/)) ? n.firefox = e[1] : (e = r.match(/chrome\/([\d.]+)/)) ? n.chrome = e[1] : (e = r.match(/opera.([\d.]+)/)) ? n.opera = e[1] : (e = r.match(/version\/([\d.]+).*safari/)) && (n.safari = e[1]),
            n.ie ? (t.type = "IE",
              t.version = n.ie) : n.firefox ? (t.type = "Firefox",
              t.version = n.firefox) : n.chrome ? (t.type = "Chrome",
              t.version = n.chrome) : n.opera ? (t.type = "Opera",
              t.version = n.opera) : n.safari && (t.type = "Safari",
              t.version = n.safari))
        }();
        u(y.header, {})
      }

      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
      }

      function f(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
      }
      var c = window.JSON || function () {
          return {
            parse: function (e) {
              return new Function("return (" + e + ")")()
            },
            stringify: function () {
              function e(e) {
                return e < 10 ? "0" + e : e
              }
              var t = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
              };
              return function (n) {
                switch (void 0 === n ? "undefined" : (0,
                  i.default)(n)) {
                  case "undefined":
                    return "undefined";
                  case "number":
                    return isFinite(n) ? String(n) : "null";
                  case "string":
                    return function (e) {
                      return /["\\\x00-\x1f]/.test(e) && (e = e.replace(/["\\\x00-\x1f]/g, function (e) {
                          var n = t[e];
                          return n || (n = e.charCodeAt(),
                            "\\u00" + Math.floor(n / 16).toString(16) + (n % 16).toString(16))
                        })),
                        '"' + e + '"'
                    }(n);
                  case "boolean":
                    return String(n);
                  default:
                    if (null === n)
                      return "null";
                    if (n instanceof Array)
                      return function (e) {
                        var t, n, r, o = ["["],
                          a = e.length;
                        for (n = 0; n < a; n++)
                          switch (void 0 === (r = e[n]) ? "undefined" : (0,
                            i.default)(r)) {
                            case "undefined":
                            case "function":
                            case "unknown":
                              break;
                            default:
                              t && o.push(","),
                                o.push(c.stringify(r)),
                                t = 1
                          }
                        return o.push("]"),
                          o.join("")
                      }(n);
                    if (n instanceof Date)
                      return function (t) {
                        return '"' + t.getFullYear() + "-" + e(t.getMonth() + 1) + "-" + e(t.getTodayDate()) + "T" + e(t.getHours()) + ":" + e(t.getMinutes()) + ":" + e(t.getSeconds()) + '"'
                      }(n);
                    var r, o, a = ["{"],
                      s = c.stringify;
                    for (var u in n)
                      if (Object.prototype.hasOwnProperty.call(n, u))
                        switch (void 0 === (o = n[u]) ? "undefined" : (0,
                          i.default)(o)) {
                          case "undefined":
                          case "unknown":
                          case "function":
                            break;
                          default:
                            r && a.push(","),
                              r = 1,
                              a.push(s(u) + ":" + s(o))
                        }
                    return a.push("}"),
                      a.join("")
                }
              }
            }()
          }
        }(),
        d = !1,
        h = !0,
        p = "https://mcs.byted.org/v1/json",
        v = "https://mcs.byted.org/v1/gif",
        l = "https://mcs.snssdk.com/v1/json",
        w = "https://mcs.snssdk.com/v1/gif",
        g = "http://10.8.131.217:9908/v1/json",
        m = "http://10.8.131.217:9908/v1/gif",
        y = {
          user: {},
          header: {},
          events: [],
          verbose: 0,
          caller: ""
        },
        b = {},
        S = {
          user: ["user_unique_id"],
          header: ["app_id"],
          eventCommonParams: [],
          customHeaders: []
        },
        j = !1,
        O = !1,
        M = [];
      if (t.send = t,
        t.setUser = function (t, n) {
          e(y, "user", t, n)
        },
        t.setHeader = function (t, n) {
          e(y, "header", t, n)
        },
        t.setAppId = function (e) {
          y.header.app_id = e
        },
        t.setDebug = function (e) {
          O = e = void 0 !== e && e,
            y.verbose = e ? 1 : 0
        },
        t.setCaller = function (e) {
          y.caller = e
        },
        t.setRequiredKeys = function (e) {
          u(S, e)
        },
        t.setEventCommonParams = function (e) {
          u(b, e)
        },
        t.setHeaderHeaders = function (t, n) {
          e(y.header, "headers", t, n)
        },
        t.setCustomHeader = function (t, n) {
          y.header.headers = y.header.headers || {},
            e(y.header.headers, "custom", t, n)
        },
        t.disableHttps = function (e) {
          d = !1 !== e
        },
        t.setIntranetMode = function (e) {
          h = e
        },
        window.MarioJSSDKObject = window.MarioJSSDKObject || "collectEvent",
        window[window.MarioJSSDKObject]) {
        s(),
          S = window[window.MarioJSSDKObject].r || S,
          y.header.app_id = window[window.MarioJSSDKObject].id;
        var x = window[window.MarioJSSDKObject].ready;
        "function" == typeof x && x(t);
        var D = window[window.MarioJSSDKObject].q;
        if (D)
          for (var H = 0; H < D.length; H++)
            M.push({
              event: D[H][0],
              params: D[H][1]
            })
      }
      return r(),
        t
    })
  };
  o.fmtG8LFR = function (e, t, o, i, r) {
    Object.defineProperty(o, "__esModule", {
        value: !0
      }),
      o.collector = void 0;
    var d = i(e("xah411cG")),
      u = i(e("xFryiHX9")),
      n = i(e("VcwWJehO")),
      a = window.collectEvent || d.default;
    o.collector = {
      init: function (e) {
        a.setAppId(1217),
          a.setCaller("toutiao.growth.video_mobile_detail_web"),
          a.setRequiredKeys({
            user: ["user_id", "user_unique_id"],
            header: ["app_id"]
          }),
          a.setHeader({
            app_name: "video_mobile_detail_web",
            os_name: n.default.os.android ? "android" : n.default.os.ios ? "ios" : "unknown",
            os_version: n.default.os.version + "",
            traffic_type: n.default.browser.weixin ? "weixin" : "wap",
            utm_source: u.default.request("utm_source"),
            utm_medium: u.default.request("utm_medium"),
            utm_campaign: u.default.request("utm_campaign")
          }),
          a.setHeaderHeaders({
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
            share_iid: u.default.request("iid"),
            wx_share_count: parseInt(u.default.request("wxshare_count") || 0)
          }),
          a.setEventCommonParams({}),
          a.setUser({
            user_unique_id: "13_" + u.default.cookie("tt_webid"),
            user_type: 13,
            user_id: u.default.cookie("tt_webid")
          }),
          a.setIntranetMode(!1)
      }
    };
    o.default = a
  };
  o._h2weDsU = function (e, o, i, t, a) {
    function n(e, o, i, t, a) {}

    function d() {
      window.resendGA && window.resendGA(),
        window.resendBA && window.resendBA()
    }

    function r(e) {
      var o = document.createElement("a");
      return o.href = e,
        o
    }

    function u(e) {
      return -1 === ["s3.bytecdn.cn", "s2.pstatp.com", "s3b.pstatp.com", "s3a.pstatp.com", "s3.pstatp.com", "ib.snssdk.com", "www.google-analytics.com", "m.toutiao.com", "s0.pstatp.com", "www.googletagmanager.com", "hm.baidu.com"].indexOf(e)
    }

    function s(e) {
      return u(e) && -1 === ["x.jd.com"].indexOf(e)
    }

    function m(e) {
      return !(e.indexOf("ttGTM") > -1)
    }

    function w(e, o, i) {
      0 === Math.floor(100 * Math.random()) && window.gaeventTest(e, o, i, 1, {
        nonInteraction: !0
      })
    }

    function _() {
      var o = h.default.request("from");
      window.APP_CONFIG = (0,
          b.getConfig)(),
        window.violateWeixinPolicy = !("singlemessage" === o || "groupmessage" === o),
        document.title = window.APP_CONFIG.app_name,
        (0,
          q.default)("pageview", (0,
          c.default)({
          url_path: location.pathname
        }, function () {
          var e = p.default.ttSessionStorage.getItem("weixinlist_count") || "1",
            o = "video";
          "21" === window.groupSource && (o = "toutiao_video"),
            "19" === window.groupSource && (o = "aweme_video"),
            "16" === window.groupSource && (o = "huoshan_video"),
            window.isArticlePage && (o = "article"),
            window.isXiguaLongVideoPage && (o = "long_video"),
            window.isXiguaLive && (o = "live"),
            window.isGuagualongVideoPage && (o = "guagualongkids");
          var i = p.default.formatQueryParmas("app", h.default.request("app")),
            t = p.default.formatQueryParmas("from", h.default.request("from"));
          return {
            weixin_share_count: h.default.request("wxshare_count") || 1,
            tag: window.tag || "",
            is_video_page: window.isNewVideoPage ? 1 : 0,
            app_name: i,
            utm_medium: h.default.request("utm_medium") || "",
            utm_source: h.default.request("utm_source") || "",
            is_appinstalled: h.default.request("isappinstalled") || "",
            list_go_detail: "1" === e ? "first" : "",
            protocol: location.protocol.slice(0, -1),
            from: t,
            share_type: h.default.request("share_type"),
            traffic_type: v.default.browser.weixin ? "weixin" : "wap",
            page_type: o,
            group_id: window.group_id,
            host: location.hostname,
            abtest_version_name: window.abtest_version_name || "",
            city: window.city || "",
            game_id: h.default.request("game_id") || "",
            game_type: h.default.request("game_type") || ""
          }
        }())),
        "m.ixigua.com" === location.host || "ttvideo" === h.default.request("activity") ? g.default.init() : l.default.init(),
        window.maevent = n,
        window.resendMA = d,
        f.default.init(!0),
        window.isToutiaoVideoPage || p.default.unshiftListPage(),
        window.onload = function () {
          setTimeout(function () {
            for (var e = document.getElementsByTagName("script"), o = 0; o < e.length; o++) {
              var i = e[o];
              "toutiao" !== i.getAttribute("data-from") && (i.src ? u(r(i.src).hostname) && w("hijack", r(i.src).protocol + "//" + r(i.src).hostname, i.src) : m(i.innerHTML) && w("hijack", "unknown_domain", i.innerHTML))
            }
            for (var t = document.getElementsByTagName("iframe"), a = 0, n = t.length; a < n; a++) {
              var d = t[a],
                _ = d.src,
                c = "about:blank";
              if (_ && _ !== c) {
                var l = r(_);
                0 === l.protocol.indexOf("http") && l.hostname && s(l.hostname) && w("hijack-iframe", l.protocol + "//" + l.hostname, _)
              } else if (_ === c) {
                var g = "";
                try {
                  g = d.contentDocument.body.innerHTML
                } catch (e) {
                  console.log(e)
                }!!g && w("hijack-iframe", c, g)
              }
            }
          }, 2e3)
        },
        function () {
          var e = {
            parent_group_id: window.group_id || window.album_id,
            parent_rid: window.request_id,
            site_id: window.site_id,
            share_app_name: h.default.request("app"),
            traffic_type: v.default.browser.weixin ? "weixin" : "wap",
            page_type: window.isToutiaoVideoPage ? "short_video" : window.isArticlePage ? "article" : "video"
          };
          window.screen && (e.screen_resolution = window.screen.height + "*" + window.screen.width),
            h.default.request("iid") && (e.share_iid = h.default.request("iid")),
            h.default.request("utm_source") && (e.utm_source = h.default.request("utm_source")),
            h.default.request("utm_medium") && (e.utm_medium = h.default.request("utm_medium")),
            h.default.request("utm_campaign") && (e.utm_campaign = h.default.request("utm_campaign")),
            h.default.request("wxshare_count") && (e.wx_share_count = parseInt(h.default.request("wxshare_count"))),
            window.abtest_version_name && (e.version_name = window.abtest_version_name);
          var o = window.ReportSdk,
            i = ["m.365yg.com", "m.ixigua.com"].indexOf(location.hostname) > -1 ? "m.365yg.com" : location.hostname;
          o && (window.ttReport = new o({
            header: e,
            user: {
              user_type: 13
            },
            host: i
          }))
        }(),
        function () {
          var e = window["toutiao.growth.mobile_detail_web/page_config/all_config"] || {};
          window.nothing = {
            group_id: e.video_page && e.video_page.hide_recommendation && e.video_page.hide_recommendation.group_id || [],
            media_id: e.video_page && e.video_page.hide_recommendation && e.video_page.hide_recommendation.media_id || []
          }
        }(),
        function () {
          var e = window["toutiao.growth.mobile_detail_web/page_config/all_config"] || {};
          window.relatedOnly = {
            group_id: e.video_page && e.video_page.related_recommendation && e.video_page.related_recommendation.group_id || [],
            media_id: e.video_page && e.video_page.related_recommendation && e.video_page.related_recommendation.media_id || []
          }
        }(),
        function () {
          var e = window["toutiao.growth.mobile_detail_web/page_config/all_config"] || {};
          window.noPlayVideo = {
            media_id: e.video_page && e.video_page.no_play && e.video_page.no_play.media_id || []
          }
        }(),
        v.default.browser.weixin && e("L8RHSSuT").init()
    }
    var c = t(e("rCvC6Owx")),
      l = t(e("BwW7yiKX")),
      g = t(e("ioN_z9qp")),
      p = t(e("NpbYakKP")),
      f = t(e("ou6E6JlL")),
      v = t(e("VcwWJehO"));
    e("enGsLehG");
    var h = t(e("xFryiHX9")),
      y = e("fmtG8LFR"),
      q = t(y);
    e("_0O8kjAs");
    var b = e("pz3Ku2B4");
    o.exports = _
  };
  o.PO9OOCG6 = function (e, t, o, n, l) {
    var r = n(e("__gK4WbX")),
      d = n(e("lgLPKmWO")),
      c = n(e("LFxswB00")),
      a = n(e("_3k8jqSq")),
      i = n(e("C_TrCxPr")),
      h = e("zNszyAds"),
      s = n(h),
      u = n(e("RiX6bfLf")),
      v = function (e) {
        function t() {
          (0,
            d.default)(this, t);
          var e = (0,
            a.default)(this, (t.__proto__ || (0,
            r.default)(t)).call(this));
          return e.state = {
              scrollY: 0,
              touchStartY: 0,
              lastScrollY: 0
            },
            e.handleScroll = e.handleScroll.bind(e),
            e.handleTouchStart = e.handleTouchStart.bind(e),
            e.handleTouchMove = e.handleTouchMove.bind(e),
            e.scrollTimeId = -1,
            e
        }
        return (0,
            i.default)(t, e),
          (0,
            c.default)(t, [{
            key: "componentDidMount",
            value: function () {
              window.addEventListener("scroll", this.handleScroll),
                window.addEventListener("touchstart", this.handleTouchStart),
                window.addEventListener("touchmove", this.handleTouchMove)
            }
          }, {
            key: "componentWillUnmount",
            value: function () {
              window.removeEventListener("scroll", this.handleScroll),
                window.removeEventListener("touchstart", this.handleTouchStart),
                window.removeEventListener("touchmove", this.handleTouchMove)
            }
          }, {
            key: "handleScroll",
            value: function (e) {
              clearTimeout(this.scrollTimeId),
                setTimeout(function (e) {
                    var t = 100 * (window.responsive || {
                        dpr: 1
                      }).dpr,
                      o = document.body.scrollHeight;
                    (window.scrollY || window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop) >= o - window.innerHeight - t && this.props.handleScroll("append")
                  }
                  .bind(this), 300)
            }
          }, {
            key: "handleTouchStart",
            value: function (e) {
              var t = e.changedTouches[0].clientY;
              this.setState({
                touchStartY: t
              });
              var o = window.scrollY || window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
              this.setState({
                scrollY: o
              })
            }
          }, {
            key: "handleTouchMove",
            value: function (e) {
              var t = e.changedTouches[0].clientY;
              if (this.state.scrollY <= 0) {
                t - this.state.touchStartY >= 0 && (e.preventDefault(),
                  this.props.handleScroll("prepend"))
              }
            }
          }, {
            key: "render",
            value: function () {
              return s.default.createElement("div", null, this.props.children)
            }
          }]),
          t
      }(h.Component);
    v.propTypes = {
        handleScroll: u.default.func,
        children: u.default.node
      },
      v.defaultProps = {
        handleScroll: function () {}
      },
      t.exports = v
  };
  o.rNiiLzG9 = function (e, a, t, d, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var l = d(e("__gK4WbX")),
      i = d(e("lgLPKmWO")),
      o = d(e("LFxswB00")),
      s = d(e("_3k8jqSq")),
      n = d(e("C_TrCxPr")),
      c = e("zNszyAds"),
      u = d(c),
      f = d(e("RiX6bfLf")),
      m = d(e("_2MpYYf8")),
      p = d(e("VcwWJehO")),
      _ = d(e("NpbYakKP")),
      w = function (e) {
        function a(e) {
          return (0,
              i.default)(this, a),
            (0,
              s.default)(this, (a.__proto__ || (0,
              l.default)(a)).call(this, e))
        }
        return (0,
            n.default)(a, e),
          (0,
            o.default)(a, [{
            key: "handleHotCardClick",
            value: function () {
              var e = this.props.hotCardData.topic_id,
                a = p.default.os.android ? _.default.shortLinkPrefix + "/6smb/" : _.default.shortLinkPrefix + "/Cuj/",
                t = p.default.os.ios ? "i.snssdk.com" : "a3.pstatp.com",
                d = {
                  hide_more: 1,
                  url: encodeURIComponent("https://" + t + "/ugc/hotspot/subject/web/" + e + "?" + (p.default.os.ios ? "is_preview=1" : ""))
                };
              p.default.os.android ? d.style_canvas = 1 : (d.hide_status_bar = 1,
                d.hide_bar = 1,
                d.use_wk = 1,
                d.bounce_disable = 1);
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
              (0,
                m.default)(r)
            }
          }, {
            key: "render",
            value: function () {
              var e = this,
                a = this.props,
                t = a.containStyle,
                d = a.hotCardData,
                r = d.image_url,
                l = d.name,
                i = d.view_count;
              return u.default.createElement("div", {
                className: "hot-card-wrapper",
                onClick: function () {
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
              }, i, "人围观"))), u.default.createElement("div", {
                className: "card-bottom"
              }, u.default.createElement("div", {
                className: "bottom-title"
              }, "打开“", window.APP_CONFIG.app_name, "”查看专题"), u.default.createElement("div", {
                className: "bottom-desc"
              }, "查看详情")))
            }
          }]),
          a
      }(c.Component);
    w.propTypes = {
        hotCardData: f.default.object,
        containStyle: f.default.object
      },
      t.default = w
  };
  o.DUm84Z0n = function (e, t, a, l, d) {
    var n = l(e("lT_XwWMZ")),
      i = l(e("_l59FVJy")),
      o = l(e("rCvC6Owx")),
      r = l(e("__gK4WbX")),
      u = l(e("lgLPKmWO")),
      s = l(e("LFxswB00")),
      c = l(e("_3k8jqSq")),
      f = l(e("C_TrCxPr")),
      p = e("zNszyAds"),
      m = l(p),
      h = l(e("NBwGRHec")),
      g = l(e("PO9OOCG6")),
      w = l(e("rNiiLzG9")),
      v = l(e("VcwWJehO")),
      _ = l(e("NpbYakKP")),
      y = l(e("xFryiHX9")),
      N = l(e("RiX6bfLf"));
    _.default.initScrollEvents();
    var E = !!_.default.isFromWxapp,
      P = function (e) {
        function t(e) {
          return (0,
              u.default)(this, t),
            (0,
              c.default)(this, (t.__proto__ || (0,
              r.default)(t)).call(this, e))
        }
        return (0,
            f.default)(t, e),
          (0,
            s.default)(t, [{
            key: "componentDidMount",
            value: function () {
              if (!this.props.GTMValue.hideAd && !this.props.hideAd && !window.isGuagualongVideoPage) {
                if (E)
                  return !1;
                var e = document.querySelector("#backflowAd") || document.querySelector("#detailAd");
                if (e) {
                  window.addEventListener("scroll", function t() {
                    e.getBoundingClientRect().top <= (window.innerHeight || document.documentElement.clientHeight) && (_.default.initAD(),
                      window.removeEventListener("scroll", t))
                  })
                }
              }
            }
          }, {
            key: "handleScrollAppOnly",
            value: function () {}
          }, {
            key: "handleScrollRelatedNews",
            value: function () {}
          }, {
            key: "preProcessData",
            value: function (e, t) {
              var a = e.data.map(function (e) {
                  return e.group_id
                }),
                l = e.data.map(function (e) {
                  return e.list_sim_id
                });
              t.data = t.data.filter(function (e) {
                return !e.list_sim_id || !(l.indexOf(e.list_sim_id) > -1) && !(a.indexOf(e.group_id) > -1)
              })
            }
          }, {
            key: "render",
            value: function () {
              var e = this,
                t = this.props,
                a = t.appOnlyData,
                l = t.relatedNewsData,
                d = t.GTMValue,
                r = t.hotCardData,
                u = void 0 === r ? {} : r,
                s = (t.hotCardPosition,
                  y.default.cloneDeep(a)),
                c = y.default.cloneDeep(l);
              if (this.preProcessData(s, c),
                s.data.length && d.appOnlyPromt) {
                if (d.appOnlyPromt.position > s.data.length)
                  return !1;
                var f = d.appOnlyPromt;
                s.data.splice(f.position - 1, 1, (0,
                  o.default)({}, f, {
                  promt: !0,
                  open_source_url: !0,
                  datetime: "",
                  group_id: "0"
                }))
              }
              if (c.data.length && d.relatedNewsPromt) {
                if (d.relatedNewsPromt.position > c.data.length)
                  return !1;
                var p = d.relatedNewsPromt;
                c.data.splice(p.position - 1, 1, (0,
                  o.default)({}, p, {
                  promt: !0,
                  open_source_url: !0,
                  datetime: "",
                  group_id: "0"
                }))
              }
              var N = s.data.length,
                E = d.hideAd || this.props.hideAd || "1" === y.default.request("ft"),
                P = E || !s.data.length || d.hideRecommendation,
                O = E || !c.data.length || d.hideRelateNews;
              return m.default.createElement("div", {
                className: "recommendation-container"
              }, (0,
                i.default)(u).length > 0 && _.default.abTest.hotCardTest1 && m.default.createElement(w.default, {
                hotCardData: u,
                containStyle: {
                  marginTop: 14,
                  paddingBottom: 30
                }
              }), !d.hideRecommendation && s.data.length ? m.default.createElement("div", {
                className: "appOnly-container"
              }, !window.isXiguaLongVideoPage && m.default.createElement("h2", {
                className: "list-header " + (window.isGuagualongVideoPage ? "list-header-mini" : "")
              }, "热门推荐"), m.default.createElement(g.default, {
                handleScroll: function () {
                  return e.handleScrollAppOnly()
                }
              }, m.default.createElement(h.default, (0,
                n.default)({
                data: s,
                type: "appOnly"
              }, this.props, {
                appOnlyLength: N
              })))) : null, (0,
                i.default)(u).length > 0 && _.default.abTest.hotCardTest2 && m.default.createElement(w.default, {
                hotCardData: u,
                containStyle: {
                  marginTop: 25,
                  marginBottom: 30
                }
              }), m.default.createElement("div", {
                className: P ? "hide_ad" : "",
                id: v.default.browser.weixin ? "backflowAd" : "detailAd",
                dangerouslySetInnerHTML: {
                  __html: "<div></div>"
                }
              }), d.hideRelateNews || this.props.hideRelateNews || !c.data.length ? null : m.default.createElement("div", {
                className: "relatedNews-container"
              }, window.isXiguaLive ? m.default.createElement("div", {
                className: "list-header-xigua-live"
              }, "更多精彩直播") : m.default.createElement("h2", {
                className: "list-header " + (window.isGuagualongVideoPage ? "list-header-mini" : "")
              }, "猜你喜欢"), m.default.createElement(g.default, {
                handleScroll: function () {
                  return e.handleScrollRelatedNews()
                }
              }, m.default.createElement(h.default, (0,
                n.default)({
                data: c,
                type: "relatedNews"
              }, this.props, {
                appOnlyLength: N
              })), m.default.createElement("div", {
                className: "list_bottom"
              }, m.default.createElement("section", {
                className: "loadmoretip"
              }, m.default.createElement("a", {
                href: "#"
              }, l.loadMoreText))))), m.default.createElement("div", {
                className: O ? "hide_ad" : "",
                id: v.default.browser.weixin ? "backflowAd2" : "detailAd2",
                dangerouslySetInnerHTML: {
                  __html: "<div></div>"
                }
              }))
            }
          }]),
          t
      }(p.Component);
    P.propTypes = {
        hideAd: N.default.bool,
        GTMValue: N.default.object,
        appOnlyData: N.default.object,
        relatedNewsData: N.default.object,
        hideHotVideo: N.default.bool,
        hideRelateNews: N.default.bool,
        hotCardData: N.default.object,
        hotCardPosition: N.default.string
      },
      P.defaultProps = {
        hotCardData: {},
        hotCardPosition: ""
      },
      t.exports = P
  };
  o.Pu3YCUiu = function (e, t, a, i, n) {
    var o = i(e("__gK4WbX")),
      d = i(e("lgLPKmWO")),
      l = i(e("LFxswB00")),
      r = i(e("_3k8jqSq")),
      s = i(e("C_TrCxPr")),
      u = e("zNszyAds"),
      f = i(u),
      c = i(e("VcwWJehO")),
      w = i(e("_2MpYYf8")),
      p = i(e("NpbYakKP")),
      m = (i(e("DjbOufn3")),
        i(e("RiX6bfLf"))),
      _ = (i(e("xFryiHX9")),
        function (e) {
          function t() {
            return (0,
                d.default)(this, t),
              (0,
                r.default)(this, (t.__proto__ || (0,
                o.default)(t)).apply(this, arguments))
          }
          return (0,
              s.default)(t, e),
            (0,
              l.default)(t, [{
              key: "getLink",
              value: function () {
                var e = void 0;
                return e = c.default.browser.weixin ? window.isNewVideoPage ? p.default.shortLinkPrefix + "/AXYG/" : p.default.shortLinkPrefix + "/yxVm/" : c.default.os.ipad ? p.default.shortLinkPrefix + "/6N9d/" : window.isNewVideoPage ? p.default.shortLinkPrefix + "/J795/" : p.default.shortLinkPrefix + "/AYnr/",
                  e = p.default.shortLinkPrefix + "/NrtR/",
                  e = this.props.GTMValue.detailbottombannerSurl || e
              }
            }, {
              key: "handleClickDownload",
              value: function () {
                window.maevent("bottom_banner", "click");
                var e = c.default.browser.weixin ? "click_weixin_rf_detail_bottom" : "click_wap_rf_detail_bottom",
                  t = this.getLink(),
                  a = "detail";
                window.isXiguaLongVideoPage && (a = "long_video"),
                  window.isXiguaLive && (a = "xigua_live"),
                  ["16", "19", "21"].indexOf(window.groupSource) > -1 && (a = "awemevideo"),
                  (0,
                    w.default)({
                    downloadLink: t,
                    position: "bottomBtn",
                    type: a,
                    id: window.group_id,
                    item_id: window.item_id,
                    gdLabel: e,
                    isNewVideo: window.isNewVideoPage
                  })
              }
            }, {
              key: "render",
              value: function () {
                var e = this,
                  t = !1;
                if (p.default.hideBonus(window.country_code, window.city, this.props.GTMValue) && (t = !0),
                  this.props.GTMValue.hideBottomBanner)
                  return null;
                var a = window.APP_CONFIG,
                  i = a.app_name,
                  n = a.app_icon,
                  o = a.app_card_desc,
                  d = void 0 === o ? "" : o,
                  l = a.app,
                  r = window.APP_CONFIG.app_desc,
                  s = void 0 === r ? "" : r,
                  u = window.isXiguaLive ? "#ffffff" : "",
                  c = this.props.bannerClass || "bottom-banner-content";
                window.isXiguaLongVideoPage && "video_article" === l && (s = "看影视免广告");
                var w = s ? i + "·" + s : i,
                  m = "f100" === l && "desc-font" || "";
                return f.default.createElement("div", {
                  className: "bottom-banner-container-new"
                }, f.default.createElement("div", {
                  className: c + "  " + (t && "noBonus")
                }, f.default.createElement("div", {
                  style: {
                    display: "flex",
                    alignItems: "center"
                  }
                }, f.default.createElement("span", {
                  className: "logo"
                }, f.default.createElement("img", {
                  src: n
                })), f.default.createElement("span", {
                  className: "text"
                }, f.default.createElement("b", {
                  style: {
                    color: u
                  },
                  className: m
                }, w), d && f.default.createElement("span", {
                  className: "banner-desc"
                }, d))), f.default.createElement("span", {
                  className: "btn",
                  onClick: function () {
                    return e.handleClickDownload()
                  }
                }, "打开")))
              }
            }]),
            t
        }(u.Component));
    _.propTypes = {
        relatedNewsData: m.default.object,
        GTMValue: m.default.object,
        bannerClass: m.default.string
      },
      t.exports = _
  };
  o.ftflzyBZ = function (e, d, i, t, o) {
    var l = t(e("__gK4WbX")),
      a = t(e("lgLPKmWO")),
      n = t(e("LFxswB00")),
      u = t(e("_3k8jqSq")),
      r = t(e("C_TrCxPr")),
      w = e("zNszyAds"),
      f = t(e("_2MpYYf8")),
      p = t(e("RiX6bfLf")),
      s = t(e("xFryiHX9")),
      c = t(e("NpbYakKP")),
      _ = function (e) {
        function d() {
          return (0,
              a.default)(this, d),
            (0,
              u.default)(this, (d.__proto__ || (0,
              l.default)(d)).apply(this, arguments))
        }
        return (0,
            r.default)(d, e),
          (0,
            n.default)(d, [{
            key: "componentDidUpdate",
            value: function () {
              var e = this,
                d = s.default.request("ad_surl");
              this.props.GTMValue.allDownload && document.body.addEventListener("click", function (d) {
                  d.stopPropagation(),
                    d.preventDefault(),
                    window.maevent("detail_alldownload", "click"),
                    (0,
                      f.default)({
                      type: "detail",
                      downloadLink: e.props.GTMValue.allDownloadSurl || c.default.shortLinkPrefix + "/e6jY/",
                      id: window.group_id,
                      item_id: window.item_id,
                      gdLabel: "click_wap_rf_alldownload",
                      isNewVideo: window.isNewVideoPage
                    })
                }, !0),
                d && document.body.addEventListener("click", function (e) {
                  e.stopPropagation(),
                    e.preventDefault(),
                    window.maevent("detail_alldownload", "click"),
                    (0,
                      f.default)({
                      type: "detail",
                      downloadLink: c.default.shortLinkPrefix + "/" + d + "/",
                      id: window.group_id,
                      item_id: window.item_id,
                      gdLabel: "click_alldownload",
                      isNewVideo: window.isNewVideoPage
                    })
                }, !0)
            }
          }, {
            key: "render",
            value: function () {
              return null
            }
          }]),
          d
      }(w.Component);
    _.propTypes = {
        GTMValue: p.default.object
      },
      d.exports = _
  };
  o.rwEnzBE6 = function (t, e, n, u, a) {
    var o, r, l = u(t("__gK4WbX")),
      f = u(t("lgLPKmWO")),
      i = u(t("LFxswB00")),
      s = u(t("_3k8jqSq")),
      c = u(t("C_TrCxPr")),
      p = t("zNszyAds"),
      d = u(p),
      h = u(t("RiX6bfLf")),
      _ = (u(t("NpbYakKP")),
        r = o = function (t) {
          function e() {
            return (0,
                f.default)(this, e),
              (0,
                s.default)(this, (e.__proto__ || (0,
                l.default)(e)).apply(this, arguments))
          }
          return (0,
              c.default)(e, t),
            (0,
              i.default)(e, [{
              key: "render",
              value: function () {
                var t = this;
                return this.props.GTMValue.hideGuanzhu ? null : d.default.createElement("a", {
                  href: "javascript: void(0)",
                  className: "favor-btn",
                  onClick: function (e) {
                    t.props.onClick(e)
                  }
                }, "关注作者")
              }
            }]),
            e
        }(p.Component),
        o.defaultProps = {
          onClick: function () {}
        },
        r);
    _.propTypes = {
        GTMValue: h.default.object,
        onClick: h.default.func
      },
      e.exports = _
  };
  o.ApYeNLH9 = function (e, a, t, i, r) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = i(e("_l59FVJy")),
      s = i(e("__gK4WbX")),
      o = i(e("lgLPKmWO")),
      l = i(e("LFxswB00")),
      d = i(e("_3k8jqSq")),
      p = i(e("C_TrCxPr")),
      u = i(e("zNszyAds")),
      c = i(e("RiX6bfLf")),
      m = i(e("xFryiHX9")),
      f = i(e("NpbYakKP")),
      h = i(e("_2MpYYf8")),
      v = i(e("VcwWJehO")),
      w = e("_k9Qceab"),
      g = ["http://p0.pstatp.com/origin/3791/5035712059", "http://p0.pstatp.com/origin/3795/3033762272", "http://p0.pstatp.com/origin/3792/5112637127", "http://p0.pstatp.com/origin/3791/5070639578", "http://p0.pstatp.com/origin/3797/2889309425", "http://p0.pstatp.com/origin/3793/3114521287", "http://p0.pstatp.com/origin/3796/2975850990", "http://p0.pstatp.com/origin/3795/3044413937", "http://p0.pstatp.com/origin/3795/3047680722", "http://p0.pstatp.com/origin/3793/3131589739"],
      _ = function (e) {
        function a(e) {
          (0,
            o.default)(this, a);
          var t = (0,
            d.default)(this, (a.__proto__ || (0,
            s.default)(a)).call(this, e));
          return t.state = {
              name: "",
              avatar: "",
              upe: !1
            },
            t
        }
        return (0,
            p.default)(a, e),
          (0,
            l.default)(a, [{
            key: "componentDidMount",
            value: function () {
              var e = this,
                a = m.default.request("iid"),
                t = m.default.request("wxshare_count"),
                i = "你的好友",
                r = g[f.default.getTTWebID % 10];
              a && (r = g[a % 10]),
                a && 1 === Number(t) && !window.isGuagualongVideoPage ? (0,
                  w.getRelationship)(a).end(function (a, t) {
                  if (!a) {
                    var n = t.body,
                      s = n.data;
                    "upe" !== n.message ? (s && Array.isArray(s) && (i = s[0].name,
                        r = s[0].avatar_url),
                      e.setState({
                        name: i,
                        avatar: r
                      })) : e.setState({
                      upe: !0
                    })
                  }
                }) : this.setState({
                  name: i,
                  avatar: r
                })
            }
          }, {
            key: "handleClickOpen",
            value: function () {
              var e = f.default.shortLinkPrefix + "/UsNA/";
              e = this.props.GTMValue.relationSurl || e;
              var a = "click_" + (v.default.browser.weixin ? "weixin" : "wap") + "_relation",
                t = "detail",
                i = window.group_id;
              window.isXiguaLive && (t = "xigua_live",
                  i = window.room_id),
                ["19", "16", "21"].indexOf(window.groupSource) > -1 && (t = "awemevideo"),
                (0,
                  h.default)({
                  downloadLink: e,
                  id: i,
                  item_id: window.item_id,
                  type: t,
                  gdLabel: a,
                  position: "relationCard",
                  isNewVideo: window.isNewVideoPage
                }),
                window.maevent("relationship", "click")
            }
          }, {
            key: "render",
            value: function () {
              var e = this;
              if (!this.state.name || this.state.upe || window.violateWeixinPolicy)
                return null;
              var a = window.APP_CONFIG,
                t = a.app_name,
                i = a.relationcard_info,
                r = u.default.createElement("div", null, "在用", u.default.createElement("span", {
                  className: "share-card-toutiao"
                }, t), "邀你一起"),
                s = this.props.relationCardClass || "share-card-container",
                o = this.state.name,
                l = this.state.avatar;
              return i && (0,
                  n.default)(i).length > 0 && (r = i.desc,
                  o = i.name,
                  l = i.avatar),
                u.default.createElement("div", {
                  className: s,
                  onClick: function () {
                    return e.handleClickOpen()
                  }
                }, u.default.createElement("div", {
                  className: "share-card-text"
                }, u.default.createElement("div", {
                  className: "share-card-avatar-container"
                }, this.state.avatar && u.default.createElement("img", {
                  className: "share-card-avatar",
                  src: l
                })), u.default.createElement("div", {
                  className: "share-card-desc"
                }, u.default.createElement("p", {
                  className: "share-card-name"
                }, o), r)), u.default.createElement("span", {
                  className: "share-card-btn"
                }, "打开"))
            }
          }]),
          a
      }(u.default.Component);
    _.propTypes = {
        GTMValue: c.default.object,
        relationCardClass: c.default.string
      },
      t.default = _
  };
  o.Xi_TropQ = function (e, a, t, r, s) {
    var n = r(e("__gK4WbX")),
      l = r(e("lgLPKmWO")),
      u = r(e("LFxswB00")),
      f = r(e("_3k8jqSq")),
      p = r(e("C_TrCxPr")),
      c = e("zNszyAds"),
      i = r(c),
      o = r(e("DjbOufn3")),
      _ = r(e("RiX6bfLf")),
      d = function (e) {
        function a() {
          return (0,
              l.default)(this, a),
            (0,
              f.default)(this, (a.__proto__ || (0,
              n.default)(a)).apply(this, arguments))
        }
        return (0,
            p.default)(a, e),
          (0,
            u.default)(a, [{
            key: "render",
            value: function () {
              var e = this.props.imagesrc;
              return i.default.createElement("span", {
                className: "avatar"
              }, i.default.createElement(o.default, {
                src: e.replace(/^http:/, "https:"),
                className: "avatar__image"
              }), i.default.createElement("span", {
                className: "avatar__mask"
              }))
            }
          }]),
          a
      }(c.Component);
    d.propTypes = {
        imagesrc: _.default.string
      },
      a.exports = d
  };
  o.IjYCDgV2 = function (A, o, Q, n, a) {
    o.exports = function (A) {
      ! function (A, o) {
        var Q = new Image;
        Q.onload = function () {
            var A = Q.width > 0 && Q.height > 0;
            o(A)
          },
          Q.onerror = function () {
            o(!1)
          },
          Q.src = "data:image/webp;base64," + {
            lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
            lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
            alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
            animation: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
          } [A]
      }("animation", A)
    }
  };
  o.VqsoHVG3 = function (e, t, a, i, o) {
    function n(e) {
      v.default.localStorageEnabled() && localStorage.setItem(N, e)
    }
    var d = i(e("lT_XwWMZ")),
      l = i(e("__gK4WbX")),
      r = i(e("lgLPKmWO")),
      s = i(e("LFxswB00")),
      u = i(e("_3k8jqSq")),
      c = i(e("C_TrCxPr")),
      f = e("zNszyAds"),
      p = i(f),
      w = i(e("NpbYakKP")),
      h = i(e("_2MpYYf8")),
      v = i(e("xFryiHX9")),
      m = i(e("rwEnzBE6")),
      _ = i(e("ApYeNLH9")),
      g = i(e("DjbOufn3")),
      C = i(e("VcwWJehO")),
      k = i(e("Xi_TropQ")),
      b = i(e("RiX6bfLf")),
      x = i(e("IjYCDgV2")),
      N = "WEBP_ANIMATION_SUPPORT",
      I = function (e) {
        function t(e) {
          (0,
            r.default)(this, t);
          var a = (0,
              u.default)(this, (t.__proto__ || (0,
              l.default)(t)).call(this, e)),
            i = e.showVideoInfo || !1;
          return window.nothing.group_id.indexOf(window.group_id) > -1 && (i = !0),
            window.nothing.media_id.indexOf(window.mediaUserId) > -1 && (i = !0),
            C.default.browser.toutiao && (i = !0),
            a.state = {
              showVideoInfo: i,
              descTextContent: ""
            },
            a.hasGetDescTextContent = !1,
            a
        }
        return (0,
            c.default)(t, e),
          (0,
            s.default)(t, [{
            key: "handleClickVideoHeader",
            value: function (e, t) {
              window.maevent("toutiaohao", "click"),
                !1 !== this.props.invokeApp && (0,
                  h.default)({
                  app: this.props.app || null,
                  id: t,
                  gdLabel: C.default.browser.weixin ? "click_weixin_rf_detail_pgc" : "click_wap_rf_detail_pgc",
                  type: window.APP_CONFIG && "video_article" === window.APP_CONFIG.app ? "videoProfile" : "profile",
                  preventAppDownload: !0,
                  noRedirect: !0
                }),
                e.preventDefault()
            }
          }, {
            key: "handleShowVideoInfo",
            value: function () {
              if (!window.isXiguaLive) {
                var e = this.state.showVideoInfo;
                this.setState({
                  showVideoInfo: !e
                })
              }
            }
          }, {
            key: "handleClickFavorBtn",
            value: function (e, t) {
              event.preventDefault(),
                event.stopPropagation();
              var a = C.default.browser.weixin ? w.default.shortLinkPrefix + "/EFd/" : w.default.shortLinkPrefix + "/P217/";
              a = this.props.GTMValue.guanzhuSurl || this.props.downloadLink || a;
              var i = C.default.browser.weixin ? "click_weixin_rf_detail_guanzhu" : "click_wap_rf_detail_guanzhu",
                o = {
                  app: this.props.app || null,
                  downloadLink: a,
                  id: t,
                  position: "favorBtn",
                  gdLabel: i,
                  type: window.APP_CONFIG && "video_article" === window.APP_CONFIG.app ? "videoProfile" : "profile",
                  noRedirect: !0
                };
              (0,
                h.default)(o),
              window.maevent("follow", "click")
            }
          }, {
            key: "getVipIconClass",
            value: function (e) {
              var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              return "author-vip " + ("0" === e ? "vip-certified" : "1" === e ? t ? "vip-outstanding-webp" : "vip-outstanding-png" : "vip-none")
            }
          }, {
            key: "getDescTextContent",
            value: function () {
              var e = this.props.videoData;
              if (e.content && !this.hasGetDescTextContent) {
                var t = document.createElement("div");
                t.innerHTML = e.content;
                var a = t.querySelector("p:last-child") && t.querySelector("p:last-child").textContent;
                this.setState({
                    descTextContent: a
                  }),
                  this.hasGetDescTextContent = !0
              }
            }
          }, {
            key: "render",
            value: function () {
              var e = this,
                t = this.props,
                a = t.videoData,
                i = t.hideFavorBtn,
                o = t.forbidShowRelationCard,
                l = t.forbidShowAutherInfo,
                r = this.state,
                s = r.showVideoInfo,
                u = r.descTextContent,
                c = window.user_id || a.media_user && a.media_user.id || 0,
                f = a.media_user && a.media_user.user_auth_info && a.media_user.user_auth_info.auth_type,
                h = function () {
                  var e = void 0;
                  try {
                    e = localStorage.getItem(N)
                  } catch (e) {
                    (0,
                      x.default)(n)
                  }
                  return void 0 !== e && null !== e || (0,
                      x.default)(n),
                    "true" === e
                }(),
                C = this.getVipIconClass(f, h);
              window.mediaName = a.media_user ? a.media_user.screen_name : "";
              var b = window.video_content && window.video_content.length > 0 && window.video_content[0].title || "";
              return window.title = a.title || b,
                ["16", "19", "21"].indexOf(window.groupSource) > -1 && !a.title && !b && (b = window.mediaName + "的小视频，邀你观看"),
                this.getDescTextContent(),
                p.default.createElement("div", {
                  className: "video-header-container"
                }, p.default.createElement("div", {
                  className: "video-info"
                }, p.default.createElement("div", {
                  className: "info-title"
                }, p.default.createElement("h1", {
                  className: s ? "" : "line1",
                  onClick: function () {
                    return e.handleShowVideoInfo()
                  }
                }, a.title || b), !window.isXiguaLive && p.default.createElement(g.default, {
                  src: "//s1.pstatp.com/growth/video_mobile_detail/image/vwap-triangle@3x.zd9Tmgqu.png",
                  className: s ? "rotate-triangle" : "",
                  onClick: function () {
                    return e.handleShowVideoInfo()
                  }
                })), s && !l && p.default.createElement("div", {
                  className: "info-detail"
                }, p.default.createElement("div", {
                  className: "video-content-desc"
                }, u), p.default.createElement("span", {
                  className: "info-item watched-times"
                }, w.default.countFormat(a.video_play_count || 0), "次观看"))), s && !l && p.default.createElement("div", {
                  className: "video-author"
                }, p.default.createElement("a", {
                  href: "javascript: void(0)",
                  className: "screen-name",
                  onClick: function (t) {
                    return e.handleClickVideoHeader(t, c)
                  }
                }, a.media_user && a.media_user.id && p.default.createElement("span", {
                  className: "author-avatar"
                }, p.default.createElement(k.default, {
                  imagesrc: a.media_user.avatar_url
                }), p.default.createElement("div", {
                  className: C
                })), p.default.createElement("span", {
                  className: "media-name"
                }, a.media_user ? a.media_user.screen_name : "")), i || "video_lite" === v.default.request("app") ? null : p.default.createElement(m.default, (0,
                  d.default)({
                  onClick: function (t) {
                    return e.handleClickFavorBtn(t, c)
                  }
                }, this.props))), !this.props.GTMValue.hideRelationCard && !o && p.default.createElement(_.default, {
                  GTMValue: this.props.GTMValue,
                  relationCardClass: this.props.relationCardClass
                }))
            }
          }]),
          t
      }(f.Component);
    I.propTypes = {
        hideFavorBtn: b.default.bool,
        invokeApp: b.default.bool,
        videoData: b.default.object,
        downloadLink: b.default.string,
        GTMValue: b.default.object,
        forbidShowRelationCard: b.default.bool,
        relationCardClass: b.default.string,
        forbidShowAutherInfo: b.default.bool,
        showVideoInfo: b.default.bool,
        app: b.default.string
      },
      t.exports = I
  };
  o.Ze2Nlef5 = function (e, t, i, a, l) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    });
    var o = a(e("lT_XwWMZ")),
      n = a(e("__gK4WbX")),
      d = a(e("lgLPKmWO")),
      r = a(e("LFxswB00")),
      s = a(e("_3k8jqSq")),
      u = a(e("C_TrCxPr")),
      c = a(e("zNszyAds")),
      p = a(e("RiX6bfLf")),
      f = a(e("NpbYakKP")),
      m = a(e("_2MpYYf8")),
      w = a(e("VcwWJehO")),
      g = function (e) {
        function t(e) {
          return (0,
              d.default)(this, t),
            (0,
              s.default)(this, (t.__proto__ || (0,
              n.default)(t)).call(this, e))
        }
        return (0,
            u.default)(t, e),
          (0,
            r.default)(t, [{
            key: "handleClick",
            value: function () {
              var e = {
                position: "playVideo",
                downloadLink: this.props.GTMValue && this.props.GTMValue.playbtnSurl || f.default.shortLinkPrefix + "/AcdL/",
                type: "detail",
                id: window.group_id,
                item_id: window.item_id,
                isGame: this.props.isGame,
                gdLabel: w.default.browser.weixin ? "click_weixin_rf_no_play" : "click_wap_rf_no_play",
                isNewVideo: window.isNewVideoPage
              };
              (window.isToutiaoVideoPage || ["19", "16", "21"].indexOf(window.groupSource) > -1) && (e.type = "awemevideo"),
              (0,
                m.default)(e),
              window.maevent("video_play", "click")
            }
          }, {
            key: "render",
            value: function () {
              var e = this,
                t = this.props.videoData && this.props.videoData.poster_url || "",
                i = (0,
                  o.default)({
                  position: "relative"
                }, this.props.style);
              return c.default.createElement("div", {
                className: this.props.className + " cover-all",
                style: i
              }, window.isToutiaoVideoPage ? c.default.createElement("div", {
                className: "noplay-poster",
                onClick: function () {
                  return e.handleClick()
                },
                style: {
                  width: "100%",
                  position: "absolute",
                  height: "北京" === window.city ? "100vh" : window.innerWidth,
                  backgroundImage: "url(" + t + ")",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover"
                }
              }) : c.default.createElement("div", null, c.default.createElement("img", {
                className: "coverbg-blur",
                src: t
              }), c.default.createElement("img", {
                className: "noplay-poster",
                onClick: function () {
                  return e.handleClick()
                },
                src: t
              })), c.default.createElement("img", {
                src: "//s1.pstatp.com/growth/video_mobile_detail/image/vwap-play@3x.gn3Tc4CH.png",
                onClick: function () {
                  return e.handleClick()
                },
                style: {
                  width: "2.2em",
                  height: "2.2em",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  marginLeft: "-1.1em",
                  marginTop: "-1.1em",
                  fontSize: "20px"
                }
              }), this.props.isGame && c.default.createElement("div", {
                className: "game-icon-gif",
                onClick: function () {
                  return e.handleClick()
                }
              }))
            }
          }]),
          t
      }(c.default.Component);
    g.propTypes = {
        plugins: p.default.object,
        style: p.default.object,
        GTMValue: p.default.object,
        className: p.default.string,
        isGame: p.default.bool,
        videoData: p.default.object
      },
      g.defaultProps = {
        videoData: {}
      },
      i.default = g
  };
  o.jf80GuUJ = function (__resolved_require, module, exports, _interopRequireDefault, _setEsModule) {
    ! function (e, t) {
      module.exports = t()
    }(window, function () {
      return function (e) {
        function t(r) {
          if (n[r])
            return n[r].exports;
          var o = n[r] = {
            i: r,
            l: !1,
            exports: {}
          };
          return e[r].call(o.exports, o, o.exports, t),
            o.l = !0,
            o.exports
        }
        var n = {};
        return t.m = e,
          t.c = n,
          t.d = function (e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {
              enumerable: !0,
              get: r
            })
          },
          t.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
              }),
              Object.defineProperty(e, "__esModule", {
                value: !0
              })
          },
          t.t = function (e, n) {
            if (1 & n && (e = t(e)),
              8 & n)
              return e;
            if (4 & n && "object" == typeof e && e && e.__esModule)
              return e;
            var r = Object.create(null);
            if (t.r(r),
              Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
              }),
              2 & n && "string" != typeof e)
              for (var o in e)
                t.d(r, o, function (t) {
                    return e[t]
                  }
                  .bind(null, o));
            return r
          },
          t.n = function (e) {
            var n = e && e.__esModule ? function () {
                return e.default
              } :
              function () {
                return e
              };
            return t.d(n, "a", n),
              n
          },
          t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
          },
          t.p = "",
          t(t.s = 8)
      }([function (e, t, n) {
        function r(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }

        function o(e, t) {
          if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var i = function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                  r.configurable = !0,
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r)
              }
            }
            return function (t, n, r) {
              return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
          }(),
          a = r(n(10)),
          s = r(n(3)),
          l = r(n(27)),
          u = r(n(6)),
          c = r(n(4)),
          d = n(5),
          p = function (e) {
            function t(e) {
              ! function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function")
              }(this, t);
              var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
              if (n.config = s.default.deepCopy({
                  width: 600,
                  height: 337.5,
                  ignores: [],
                  whitelist: [],
                  lang: (document.documentElement.getAttribute("lang") || navigator.language || "zh-cn").toLocaleLowerCase(),
                  inactive: 3e3,
                  volume: .6,
                  controls: !0,
                  controlsList: ["nodownload"]
                }, e),
                n.version = d.version,
                n.userTimer = null,
                n.waitTimer = null,
                n.database = new l.default,
                n.history = [],
                n.isProgressMoving = !1,
                n.root = s.default.findDom(document, "#" + n.config.id),
                n.controls = s.default.createDom("xg-controls", "", {
                  unselectable: "on",
                  onselectstart: "return false"
                }, "xgplayer-controls"),
                !n.root) {
                var r = n.config.el;
                if (!r || 1 !== r.nodeType)
                  return n.emit("error", new c.default("use", n.config.vid, {
                      line: 32,
                      handle: "Constructor",
                      msg: "container id can't be empty"
                    })),
                    o(n, !1);
                n.root = r
              }
              if (s.default.addClass(n.root, "xgplayer xgplayer-" + u.default.device + " xgplayer-nostart " + (n.config.controls ? "" : "no-controls")),
                n.root.appendChild(n.controls),
                n.config.fluid ? (n.root.style["max-width"] = "100%",
                  n.root.style.width = "100%",
                  n.root.style.height = "0",
                  n.root.style["padding-top"] = 100 * n.config.height / n.config.width + "%",
                  n.video.style.position = "absolute",
                  n.video.style.top = "0",
                  n.video.style.left = "0") : (n.root.style.width = n.config.width + "px",
                  n.root.style.height = n.config.height + "px"),
                n.config.controlStyle && "String" === s.default.typeOf(n.config.controlStyle)) {
                var i = n;
                fetch(i.config.controlStyle, {
                  method: "GET",
                  headers: {
                    Accept: "application/json"
                  }
                }).then(function (e) {
                  e.ok && e.json().then(function (e) {
                    for (var t in e)
                      e.hasOwnProperty(t) && (i.config[t] = e[t]);
                    i.pluginsCall()
                  })
                }).catch(function (e) {
                  console.log("Fetch错误:" + e)
                })
              } else
                n.pluginsCall();
              n.ev.forEach(function (e) {
                  var t = Object.keys(e)[0],
                    r = n[e[t]];
                  r && n.on(t, r)
                }),
                ["focus", "blur"].forEach(function (e) {
                  n.on(e, n["on" + e.charAt(0).toUpperCase() + e.slice(1)])
                });
              var a = n;
              return n.mousemoveFunc = function () {
                  a.emit("focus"),
                    a.video.focus()
                },
                n.root.addEventListener("mousemove", n.mousemoveFunc),
                a.once("play", function () {
                  a.emit("focus"),
                    a.video.focus()
                }),
                setTimeout(function () {
                  n.emit("ready")
                }, 0),
                n.config.keyShortcut && "on" !== n.config.keyShortcut || ["video", "controls"].forEach(function (e) {
                  a[e].addEventListener("keydown", a.onKeydown)
                }),
                n
            }
            return function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0
                    }
                  }),
                  t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
              }(t, a.default),
              i(t, [{
                key: "start",
                value: function () {
                  var e = this,
                    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.config.url,
                    r = this.root,
                    o = this;
                  n && "" !== n || this.emit("urlNull"),
                    this.logParams.playSrc = n,
                    this.playFunc = function () {
                      var e = o.video.play();
                      void 0 !== e && e && e.then(function () {
                          o.emit("autoplay started")
                        }).catch(function () {
                          o.emit("autoplay was prevented"),
                            t.util.addClass(o.root, "xgplayer-is-autoplay")
                        }),
                        o.off("canplay", o.playFunc)
                    },
                    "String" === s.default.typeOf(n) ? this.video.src = n : n.forEach(function (t) {
                      e.video.appendChild(s.default.createDom("source", "", {
                        src: "" + t.src,
                        type: "" + (t.type || "")
                      }))
                    }),
                    this.logParams.pt = (new Date).getTime(),
                    this.logParams.vt = this.logParams.pt,
                    this.loadeddataFunc = function () {
                      o.logParams.vt = (new Date).getTime(),
                        o.logParams.pt > o.logParams.vt && (o.logParams.pt = o.logParams.vt),
                        o.logParams.vd = o.video.duration
                    },
                    this.once("loadeddata", this.loadeddataFunc),
                    this.config.autoplay && this.on("canplay", this.playFunc),
                    r.insertBefore(this.video, r.firstChild),
                    setTimeout(function () {
                      e.emit("complete")
                    }, 1)
                }
              }, {
                key: "reload",
                value: function () {
                  this.video.load(),
                    this.reloadFunc = function () {
                      this.play()
                    },
                    this.once("loadeddata", this.reloadFunc)
                }
              }, {
                key: "destroy",
                value: function () {
                  function e() {
                    for (var t in this.emit("destroy"),
                        this.video.removeAttribute("src"),
                        this.video.load(),
                        r && o.removeChild(this.root),
                        this)
                      "config" !== t && delete this[t];
                    this.off("pause", e)
                  }
                  var n = this,
                    r = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                    o = this.root.parentNode;
                  for (var i in clearInterval(this.bulletResizeTimer),
                      this._interval)
                    clearInterval(this._interval[i]),
                    this._interval[i] = null;
                  this.ev.forEach(function (e) {
                      var t = Object.keys(e)[0],
                        r = n[e[t]];
                      r && n.off(t, r)
                    }),
                    ["focus", "blur"].forEach(function (e) {
                      n.off(e, n["on" + e.charAt(0).toUpperCase() + e.slice(1)])
                    }),
                    this.config.keyShortcut && "on" !== this.config.keyShortcut || ["video", "controls"].forEach(function (e) {
                      n[e] && n[e].removeEventListener("keydown", n.onKeydown)
                    }),
                    this.paused ? e.call(this) : (this.pause(),
                      this.once("pause", e)),
                    function e(t, n, r) {
                      null === t && (t = Function.prototype);
                      var o = Object.getOwnPropertyDescriptor(t, n);
                      if (void 0 === o) {
                        var i = Object.getPrototypeOf(t);
                        return null === i ? void 0 : e(i, n, r)
                      }
                      if ("value" in o)
                        return o.value;
                      var a = o.get;
                      return void 0 !== a ? a.call(r) : void 0
                    }(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this)
                }
              }, {
                key: "replay",
                value: function () {
                  var e = this,
                    t = this._replay;
                  s.default.removeClass(this.root, "xgplayer-ended"),
                    this.logParams = {
                      bc: 0,
                      bu_acu_t: 0,
                      played: [],
                      pt: (new Date).getTime(),
                      vt: (new Date).getTime(),
                      vd: 0
                    },
                    this.logParams.pt = (new Date).getTime(),
                    this.logParams.vt = this.logParams.pt,
                    this.replayFunc = function () {
                      e.logParams.vt = (new Date).getTime(),
                        e.logParams.pt > e.logParams.vt && (e.logParams.pt = e.logParams.vt),
                        e.logParams.vd = e.video.duration
                    },
                    this.once("play", this.replayFunc),
                    this.logParams.playSrc = this.video.currentSrc,
                    t && t instanceof Function ? t() : (this.currentTime = 0,
                      this.play())
                }
              }, {
                key: "pluginsCall",
                value: function () {
                  var e = this;
                  if (t.plugins) {
                    var n = this.config.ignores;
                    Object.keys(t.plugins).forEach(function (r) {
                      var o = t.plugins[r];
                      n.some(function (e) {
                        return r === e
                      }) || (["pc", "tablet", "mobile"].some(function (e) {
                        return e === r
                      }) ? r === u.default.device && o.call(e, e) : o.call(e, e))
                    })
                  }
                }
              }, {
                key: "onFocus",
                value: function () {
                  var e = this;
                  s.default.removeClass(this.root, "xgplayer-inactive"),
                    e.userTimer && clearTimeout(e.userTimer),
                    e.userTimer = setTimeout(function () {
                      e.emit("blur")
                    }, e.config.inactive)
                }
              }, {
                key: "onBlur",
                value: function () {
                  this.paused || this.ended || s.default.addClass(this.root, "xgplayer-inactive")
                }
              }, {
                key: "onPlay",
                value: function () {
                  s.default.addClass(this.root, "xgplayer-playing"),
                    s.default.removeClass(this.root, "xgplayer-pause")
                }
              }, {
                key: "onPause",
                value: function () {
                  s.default.addClass(this.root, "xgplayer-pause"),
                    this.userTimer && clearTimeout(this.userTimer),
                    this.emit("focus")
                }
              }, {
                key: "onEnded",
                value: function () {
                  s.default.addClass(this.root, "xgplayer-ended"),
                    s.default.removeClass(this.root, "xgplayer-playing")
                }
              }, {
                key: "onSeeking",
                value: function () {}
              }, {
                key: "onSeeked",
                value: function () {
                  this.waitTimer && clearTimeout(this.waitTimer),
                    s.default.removeClass(this.root, "xgplayer-isloading")
                }
              }, {
                key: "onWaiting",
                value: function () {
                  var e = this;
                  e.waitTimer && clearTimeout(e.waitTimer),
                    e.waitTimer = setTimeout(function () {
                      s.default.addClass(e.root, "xgplayer-isloading")
                    }, 500)
                }
              }, {
                key: "onPlaying",
                value: function () {
                  this.waitTimer && clearTimeout(this.waitTimer),
                    s.default.removeClass(this.root, "xgplayer-isloading xgplayer-nostart xgplayer-pause xgplayer-ended xgplayer-is-error xgplayer-replay"),
                    s.default.addClass(this.root, "xgplayer-playing")
                }
              }, {
                key: "onKeydown",
                value: function (e) {
                  var t = e || window.event;
                  if (!t || 37 !== t.keyCode && 38 !== t.keyCode && 39 !== t.keyCode && 40 !== t.keyCode && 32 !== t.keyCode || this.emit("focus"),
                    !t || 40 !== t.keyCode && 38 !== t.keyCode)
                    t && 39 === t.keyCode ? this.currentTime + 10 <= this.duration ? this.currentTime += 10 : this.currentTime = this.duration - 1 : t && 37 === t.keyCode ? this.currentTime - 10 >= 0 ? this.currentTime -= 10 : this.currentTime = 0 : t && 32 === t.keyCode && (this.paused ? this.play() : this.pause());
                  else {
                    if (this.controls) {
                      var n = this.controls.querySelector(".xgplayer-slider");
                      n && (s.default.hasClass(n, "xgplayer-none") && s.default.removeClass(n, "xgplayer-none"),
                        this.sliderTimer && clearTimeout(this.sliderTimer),
                        this.sliderTimer = setTimeout(function () {
                          s.default.addClass(n, "xgplayer-none")
                        }, this.config.inactive))
                    }
                    t && 40 === t.keyCode ? this.volume - .1 >= 0 ? this.volume -= .1 : this.volume = 0 : t && 38 === t.keyCode && (this.volume + .1 <= 1 ? this.volume += .1 : this.volume = 1)
                  }
                }
              }], [{
                key: "install",
                value: function (e, n) {
                  t.plugins || (t.plugins = {}),
                    t.plugins[e] = n
                }
              }]),
              t
          }();
        p.util = s.default,
          p.sniffer = u.default,
          p.Errors = c.default,
          t.default = p,
          e.exports = t.default
      }, function (e, t, n) {
        var r = n(19)();
        e.exports = function (e) {
          return e !== r && null !== e
        }
      }, function (e, t, n) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var r, o = function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                  r.configurable = !0,
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r)
              }
            }
            return function (t, n, r) {
              return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
          }(),
          i = (r = n(29)) && r.__esModule ? r : {
            default: r
          };
        n(30);
        var a = function () {
          function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            ! function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.from = t.from,
              this.to = t.to,
              this.easing = t.easing || function (e) {
                return e * e
              },
              this.duration = t.duration || 150,
              this.curPath = "",
              this.progress = t.progress,
              this.state = 0
          }
          return o(e, [{
              key: "animate",
              value: function () {
                var e = this,
                  t = new Date,
                  n = e.duration,
                  r = null,
                  o = e.path2shapes(e.from),
                  i = e.path2shapes(e.to),
                  a = e._preprocessing(o, i);
                e.state = 1,
                  function o() {
                    var s = new Date - t;
                    if (s >= n || 2 === e.state)
                      return r = i,
                        e.progress(r, 1),
                        window.cancelAnimationFrame(e.tickId),
                        void(e.state = 0);
                    var l = e.easing(s / n);
                    r = e._lerp(a[0], a[1], l),
                      e.progress(r, l),
                      e.tickId = window.requestAnimationFrame(o)
                  }()
              }
            }, {
              key: "toSVGString",
              value: function (e) {
                return e.map(function (e) {
                  return e.forEach(function (e, t) {
                      t ? e.splice(0, 2, "C") : (e.splice(2, 0, "C"),
                        e.unshift("M"))
                    }),
                    e.map(function (e) {
                      return e.join(" ")
                    }).join("")
                }).join("")
              }
            }, {
              key: "start",
              value: function () {
                this.animate()
              }
            }, {
              key: "stop",
              value: function () {
                0 !== this.state && (this.state = 2),
                  window.cancelAnimationFrame(self.tickId),
                  this.state = 0
              }
            }, {
              key: "reverse",
              value: function () {
                0 !== this.state && this.stop();
                var e = this.from;
                this.from = this.to,
                  this.to = e,
                  this.animate()
              }
            }, {
              key: "reset",
              value: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.from;
                0 !== this.state && this.stop(),
                  this.from = t,
                  this.to = e,
                  this.animate()
              }
            }]),
            e
        }();
        for (var s in i.default)
          i.default[s] instanceof Function && !a.prototype[s] && (a.prototype[s] = i.default[s]);
        t.default = a,
          e.exports = t.default
      }, function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, "__esModule", {
          value: !0
        });
        var util = {
          createDom: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "div",
              t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
              n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
              r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
              o = document.createElement(e);
            return o.className = r,
              o.innerHTML = t,
              Object.keys(n).forEach(function (t) {
                var r = t,
                  i = n[t];
                "video" === e || "audio" === e ? i && o.setAttribute(r, i) : o.setAttribute(r, i)
              }),
              o
          },
          hasClass: function (e, t) {
            return e.classList ? Array.prototype.some.call(e.classList, function (e) {
              return e === t
            }) : !!e.className.match(new RegExp("(\\s|^)" + t + "(\\s|$)"))
          },
          addClass: function (e, t) {
            e.classList ? t.replace(/(^\s+|\s+$)/g, "").split(/\s+/g).forEach(function (t) {
              t && e.classList.add(t)
            }) : util.hasClass(e, t) || (e.className += " " + t)
          },
          removeClass: function (e, t) {
            e.classList ? t.split(/\s+/g).forEach(function (t) {
              e.classList.remove(t)
            }) : util.hasClass(e, t) && t.split(/\s+/g).forEach(function (t) {
              var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
              e.className = e.className.replace(n, " ")
            })
          },
          toggleClass: function (e, t) {
            t.split(/\s+/g).forEach(function (t) {
              util.hasClass(e, t) ? util.removeClass(e, t) : util.addClass(e, t)
            })
          },
          findDom: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
              t = arguments[1],
              n = void 0;
            try {
              n = e.querySelector(t)
            } catch (r) {
              t.startsWith("#") && (n = e.getElementById(t.slice(1)))
            }
            return n
          },
          padStart: function (e, t, n) {
            for (var r = String(n), o = t >> 0, i = Math.ceil(o / r.length), a = [], s = String(e); i--;)
              a.push(r);
            return a.join("").substring(0, o - s.length) + s
          },
          format: function (e) {
            if (window.isNaN(e))
              return "";
            var t = util.padStart(Math.floor(e / 3600), 2, 0),
              n = util.padStart(Math.floor((e - 3600 * t) / 60), 2, 0),
              r = util.padStart(Math.floor(e - 3600 * t - 60 * n), 2, 0);
            return ("00" === t ? [n, r] : [t, n, r]).join(":")
          },
          event: function (e) {
            if (e.touches) {
              var t = e.touches[0] || e.changedTouches[0];
              e.clientX = t.clientX || 0,
                e.clientY = t.clientY || 0,
                e.offsetX = t.pageX - t.target.offsetLeft,
                e.offsetY = t.pageY - t.target.offsetTop
            }
            e._target = e.target || e.srcElement
          },
          typeOf: function (e) {
            return Object.prototype.toString.call(e).match(/([^\s.*]+)(?=]$)/g)[0]
          },
          deepCopy: function (e, t) {
            if ("Object" === util.typeOf(t) && "Object" === util.typeOf(e))
              return Object.keys(t).forEach(function (n) {
                  "Object" !== util.typeOf(t[n]) || t[n] instanceof Node ? "Array" === util.typeOf(t[n]) ? e[n] = "Array" === util.typeOf(e[n]) ? e[n].concat(t[n]) : t[n] : e[n] = t[n] : e[n] ? util.deepCopy(e[n], t[n]) : e[n] = t[n]
                }),
                e
          },
          getBgImage: function (e) {
            var t = (e.currentStyle || window.getComputedStyle(e, null)).backgroundImage;
            if (!t || "none" === t)
              return "";
            var n = document.createElement("a");
            return n.href = t.replace(/url\("|"\)/g, ""),
              n.href
          },
          copyDom: function (e) {
            if (e && 1 === e.nodeType) {
              var t = document.createElement(e.tagName);
              return Array.prototype.forEach.call(e.attributes, function (e) {
                  t.setAttribute(e.name, e.value)
                }),
                e.innerHTML && (t.innerHTML = e.innerHTML),
                t
            }
            return ""
          },
          setInterval: function (e, t, n, r) {
            e._interval[t] || (e._interval[t] = setInterval(n.bind(e), r))
          },
          clearInterval: function (e, t) {
            clearInterval(e._interval[t]),
              e._interval[t] = null
          },
          createImgBtn: function (e, t, n, r) {
            var o = util.createDom("xg-" + e, "", {}, "xgplayer-" + e + "-img");
            if (o.style.backgroundImage = 'url("' + t + '")',
              n && r) {
              var i = void 0,
                a = void 0,
                s = void 0;
              ["px", "rem", "em", "pt", "dp", "vw", "vh", "vm", "%"].every(function (e) {
                  return !(n.indexOf(e) > -1 && r.indexOf(e) > -1 && (i = parseFloat(n.slice(0, n.indexOf(e)).trim()),
                    a = parseFloat(r.slice(0, r.indexOf(e)).trim()),
                    s = e,
                    1))
                }),
                o.style.width = "" + i + s,
                o.style.height = "" + a + s,
                o.style.backgroundSize = "" + i + s + " " + a + s,
                o.style.margin = "start" === e ? "-" + a / 2 + s + " auto auto -" + i / 2 + s : "auto 5px auto 5px"
            }
            return o
          },
          Hex2RGBA: function (hex, alpha) {
            var rgb = [];
            if (/^\#[0-9A-F]{3}$/i.test(hex)) {
              var sixHex = "#";
              hex.replace(/[0-9A-F]/gi, function (e) {
                  sixHex += e + e
                }),
                hex = sixHex
            }
            return /^#[0-9A-F]{6}$/i.test(hex) ? (hex.replace(/[0-9A-F]{2}/gi, function (kw) {
                rgb.push(eval("0x" + kw))
              }),
              "rgba(" + rgb.join(",") + ", " + alpha + ")") : "rgba(255, 255, 255, 0.1)"
          }
        };
        exports.default = util,
          module.exports = exports.default
      }, function (e, t, n) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var r = n(5),
          o = {
            network: {
              code: 1,
              msg: "视频下载错误",
              remark: "只要视频下载错误就使用此类型，无论是video本身的超时还是xhr的分段请求超时或者资源不存在"
            },
            mse: {
              code: 2,
              msg: "流追加错误",
              remark: "追加流的时候如果类型不对、无法被正确解码则会触发此类错误"
            },
            parse: {
              code: 3,
              msg: "解析错误",
              remark: "mp4、hls、flv我们都是使用js进行格式解析，如果解析失败则会触发此类错误"
            },
            format: {
              code: 4,
              msg: "格式错误",
              remark: "如果浏览器不支持的格式导致播放错误"
            },
            decoder: {
              code: 5,
              msg: "解码错误",
              remark: "浏览器解码异常会抛出此类型错误"
            },
            runtime: {
              code: 6,
              msg: "语法错误",
              remark: "播放器语法错误"
            },
            timeout: {
              code: 7,
              msg: "播放超时",
              remark: "播放过程中无法正常请求下一个分段导致播放中断"
            },
            other: {
              code: 8,
              msg: "其他错误",
              remark: "不可知的错误或被忽略的错误类型"
            }
          };
        t.default = function e(t, n, i, a, s, l, u, c) {
            var d = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : {
              line: "",
              handle: "",
              msg: "",
              version: ""
            };
            ! function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var p = {};
            return p.playerVersion = r.version,
              p.errorType = t,
              p.domain = document.domain,
              p.duration = i,
              p.currentTime = n,
              p.networkState = a,
              p.readyState = s,
              p.currentSrc = u,
              p.src = l,
              p.ended = c,
              p.errd = d,
              p.ex = (o[t] || {}).msg,
              p
          },
          e.exports = t.default
      }, function (e) {
        e.exports = {
          name: "xgplayer",
          version: "1.1.4-beta.56",
          description: "video player",
          main: "./dist/index.js",
          scripts: {
            prepare: "npm run build",
            build: "webpack --progress --display-chunks -p",
            watch: "webpack --progress --display-chunks -p --watch --mode development",
            test: "karma start --single-run",
            "test:watch": "karma start"
          },
          keywords: ["video", "player"],
          babel: {
            presets: ["es2015"],
            plugins: ["add-module-exports", "babel-plugin-bulk-import"]
          },
          repository: {
            type: "git",
            url: "git+https://github.com/bytedance/xgplayer.git"
          },
          author: "yinguohui@bytedance.com",
          license: "MIT",
          dependencies: {
            "danmu.js": "^0.0.2",
            deepmerge: "^1.5.0",
            draggabilly: "^2.2.0",
            "event-emitter": "^0.3.5",
            pasition: "^1.0.1",
            "request-frame": "^1.5.3",
            downloadjs: "1.4.7"
          },
          browserslist: ["> 5%", "IE 9", "iOS 7", "Firefox > 20"],
          devDependencies: {
            autoprefixer: "^9.1.5",
            "babel-loader": "^7.1.4",
            "babel-plugin-add-module-exports": "^0.2.1",
            "babel-plugin-bulk-import": "^1.0.2",
            "babel-plugin-transform-object-rest-spread": "^6.26.0",
            "babel-plugin-transform-runtime": "^6.23.0",
            "babel-preset-es2015": "^6.24.1",
            chai: "^4.1.2",
            "core-js": "^2.5.4",
            "css-loader": "^0.28.11",
            "json-loader": "^0.5.7",
            karma: "^3.0.0",
            "karma-chrome-launcher": "^2.2.0",
            "karma-mocha": "^1.3.0",
            "karma-sourcemap-loader": "^0.3.7",
            "karma-spec-reporter": "0.0.32",
            "karma-webpack": "^4.0.0-rc.1",
            mocha: "^5.2.0",
            "node-sass": "^4.8.3",
            "postcss-cssnext": "^3.1.0",
            "postcss-loader": "^2.1.5",
            "sass-loader": "^6.0.7",
            "style-loader": "^0.20.3",
            sugarss: "^1.0.1",
            webpack: "^4.11.0",
            "webpack-cli": "^3.0.2",
            zlib: "^1.0.5"
          }
        }
      }, function (e, t, n) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var r = {
          get device() {
            return r.os.isPc ? "pc" : "mobile"
          },
          get browser() {
            var e = navigator.userAgent.toLowerCase(),
              t = {
                ie: /rv:([\d.]+)\) like gecko/,
                firfox: /firefox\/([\d.]+)/,
                chrome: /chrome\/([\d.]+)/,
                opera: /opera.([\d.]+)/,
                safari: /version\/([\d.]+).*safari/
              };
            return [].concat(Object.keys(t).filter(function (n) {
              return t[n].test(e)
            }))[0]
          },
          get os() {
            var e = navigator.userAgent,
              t = /(?:Windows Phone)/.test(e),
              n = /(?:SymbianOS)/.test(e) || t,
              r = /(?:Android)/.test(e),
              o = /(?:Firefox)/.test(e),
              i = /(?:iPad|PlayBook)/.test(e) || r && !/(?:Mobile)/.test(e) || o && /(?:Tablet)/.test(e),
              a = /(?:iPhone)/.test(e) && !i;
            return {
              isTablet: i,
              isPhone: a,
              isAndroid: r,
              isPc: !(a || r || n || i),
              isSymbian: n,
              isWindowsPhone: t,
              isFireFox: o
            }
          }
        };
        t.default = r,
          e.exports = t.default
      }, function (e, t, n) {
        function r(e, t) {
          var n = e.exec(t);
          return n && n[1] ? n[1] : ""
        }

        function o(e) {
          return e ? (e ^ 16 * Math.random() >> e / 4).toString(10) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, o)
        }
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
          } :
          function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          },
          a = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          },
          s = void 0,
          l = function e() {
            var t = this;
            ! function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.set = function (e, n) {
                var r = e,
                  o = n;
                if (null === o)
                  return !1;
                var i = "";
                if (r.indexOf(".") > -1) {
                  var a = r.split(".");
                  i = a[0],
                    r = a[1]
                }
                "os_version" === r && (o = "" + o),
                  i ? "user" === i || "header" === i ? t.envInfo[i][r] = o : "headers" === i ? t.envInfo.header.headers[r] = o : t.envInfo.header.headers.custom[r] = o : t.envInfo.user.hasOwnProperty(r) ? ["user_type", "device_id", "ip_addr_id"].indexOf(r) > -1 ? t.envInfo.user[r] = Number(o) : ["user_id", "web_id", "user_unique_id", "ssid"].indexOf(r) > -1 ? t.envInfo.user[r] = String(o) : ["user_is_auth", "user_is_login"].indexOf(r) > -1 && (t.envInfo.user[r] = Boolean(o)) : t.envInfo.header.hasOwnProperty(r) ? t.envInfo.header[r] = o : t.envInfo.header.headers.hasOwnProperty(r) ? t.envInfo.header.headers[r] = o : t.envInfo.header.headers.custom[r] = o
              },
              this.get = function () {
                var e = {
                    user: {},
                    header: {
                      headers: {
                        custom: {}
                      }
                    }
                  },
                  n = t.envInfo,
                  r = n.user,
                  o = Object.keys(r),
                  i = Array.isArray(o),
                  l = 0;
                for (o = i ? o : o[Symbol.iterator]();;) {
                  var u;
                  if (i) {
                    if (l >= o.length)
                      break;
                    u = o[l++]
                  } else {
                    if ((l = o.next()).done)
                      break;
                    u = l.value
                  }
                  var c = u;
                  r[c] !== s && (e.user[c] = r[c])
                }
                var d = n.header,
                  p = Object.keys(d),
                  f = Array.isArray(p),
                  g = 0;
                for (p = f ? p : p[Symbol.iterator]();;) {
                  var h;
                  if (f) {
                    if (g >= p.length)
                      break;
                    h = p[g++]
                  } else {
                    if ((g = p.next()).done)
                      break;
                    h = g.value
                  }
                  var v = h;
                  d[v] !== s && "headers" !== v && (e.header[v] = d[v])
                }
                var y = n.header.headers,
                  m = Object.keys(y),
                  b = Array.isArray(m),
                  x = 0;
                for (m = b ? m : m[Symbol.iterator]();;) {
                  var w;
                  if (b) {
                    if (x >= m.length)
                      break;
                    w = m[x++]
                  } else {
                    if ((x = m.next()).done)
                      break;
                    w = x.value
                  }
                  var _ = w;
                  "custom" !== _ && y[_] !== s && (e.header.headers[_] = y[_])
                }
                var k = n.header.headers.custom,
                  E = Object.keys(k);
                if (E.length) {
                  var C = E,
                    S = Array.isArray(C),
                    T = 0;
                  for (C = S ? C : C[Symbol.iterator]();;) {
                    var P;
                    if (S) {
                      if (T >= C.length)
                        break;
                      P = C[T++]
                    } else {
                      if ((T = C.next()).done)
                        break;
                      P = T.value
                    }
                    var O = P;
                    e.header.headers.custom[O] = k[O]
                  }
                }
                return {
                  user: e.user,
                  header: a({}, e.header, {
                    headers: e.header.headers
                  })
                }
              },
              this.envInfo = {
                user: {
                  user_unique_id: s,
                  user_type: s,
                  user_id: s,
                  user_is_auth: s,
                  user_is_login: s,
                  device_id: s,
                  web_id: s,
                  ip_addr_id: s,
                  ssid: s
                },
                header: {
                  app_id: s,
                  app_name: s,
                  app_install_id: s,
                  app_package: s,
                  app_channel: s,
                  app_version: s,
                  os_name: s,
                  os_version: s,
                  device_model: s,
                  ab_client: s,
                  ab_version: s,
                  traffic_type: s,
                  utm_source: s,
                  utm_medium: s,
                  utm_campaign: s,
                  client_ip: s,
                  device_brand: s,
                  os_api: s,
                  access: s,
                  language: s,
                  region: s,
                  app_language: s,
                  app_region: s,
                  creative_id: s,
                  ad_id: s,
                  campaign_id: s,
                  log_type: s,
                  rnd: s,
                  platform: s,
                  sdk_version: s,
                  province: s,
                  city: s,
                  timezone: s,
                  tz_offset: s,
                  tz_name: s,
                  sim_region: s,
                  carrier: s,
                  resolution: s,
                  browser: s,
                  browser_version: s,
                  referrer: s,
                  referrer_host: s,
                  headers: {
                    utm_term: s,
                    utm_content: s,
                    custom: {}
                  }
                }
              }
          },
          u = function (e) {
            var t = document.createElement("a");
            return t.href = e,
              t
          },
          c = screen.width || 0,
          d = screen.height || 0,
          p = c + " x " + d,
          f = navigator.appVersion,
          g = navigator.userAgent,
          h = navigator.language,
          v = document.referrer,
          y = u(v).hostname,
          m = function (e) {
            var t = u(e).search,
              n = {};
            return (t = t.slice(1)).split("&").forEach(function (e) {
                var t = e.split("="),
                  r = t[0],
                  o = t[1];
                n[r] = decodeURIComponent(void 0 === o ? "" : o)
              }),
              n
          }(location.href),
          b = "",
          x = "",
          w = "",
          _ = "" + parseFloat(f),
          k = void 0,
          E = void 0; -
        1 !== (k = g.indexOf("Opera")) && (w = "Opera",
            _ = g.substring(k + 6),
            -1 !== (k = g.indexOf("Version")) && (_ = g.substring(k + 8))),
          -1 !== (k = g.indexOf("Edge")) ? (w = "Microsoft Edge",
            _ = g.substring(k + 5)) : -1 !== (k = g.indexOf("MSIE")) ? (w = "Microsoft Internet Explorer",
            _ = g.substring(k + 5)) : -1 !== (k = g.indexOf("Chrome")) ? (w = "Chrome",
            _ = g.substring(k + 7)) : -1 !== (k = g.indexOf("Safari")) ? (w = "Safari",
            _ = g.substring(k + 7),
            -1 !== (k = g.indexOf("Version")) && (_ = g.substring(k + 8))) : -1 !== (k = g.indexOf("Firefox")) && (w = "Firefox",
            _ = g.substring(k + 8)),
          -1 !== (E = _.indexOf(";")) && (_ = _.substring(0, E)),
          -1 !== (E = _.indexOf(" ")) && (_ = _.substring(0, E)),
          -1 !== (E = _.indexOf(")")) && (_ = _.substring(0, E));
        for (var C, S, T = /Mobile|htc|mini|Android|iP(ad|od|hone)/.test(f) ? "wap" : "web", P = [{
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
          }], O = 0; O < P.length; O++) {
          var M = P[O];
          if (M.r.test(g)) {
            b = M.s;
            break
          }
        }
        switch (/Windows/.test(b) && (x = r(/Windows (.*)/, b),
            b = "windows"),
          b) {
          case "Mac OS X":
            x = r(/Mac OS X (10[\.\_\d]+)/, g),
              b = "mac";
            break;
          case "Android":
            (S = r(/Android ([\.\_\d]+)/, C = g)) || (S = r(/Android\/([\.\_\d]+)/, C)),
            x = S,
              b = "android";
            break;
          case "iOS":
            x = (x = /OS (\d+)_(\d+)_?(\d+)?/.exec(f)) ? x[1] + "." + x[2] + "." + (0 | x[3]) : "",
              b = "ios"
        }
        var D = {
            screen_size: p,
            browser: w,
            browser_version: _,
            platform: T,
            os_name: b,
            os_version: x,
            userAgent: g,
            screen_width: c,
            screen_height: d,
            device_model: b,
            language: h,
            referrer: v,
            referrer_host: y,
            utm_source: m.utm_source,
            utm_medium: m.utm_medium,
            utm_campaign: m.utm_campaign,
            utm_term: m.utm_term,
            utm_content: m.utm_content
          },
          L = {
            get: function (e) {
              var t = localStorage.getItem(e),
                n = t;
              try {
                t && "string" == typeof t && (n = JSON.parse(t))
              } catch (e) {}
              return n
            },
            set: function (e, t) {
              try {
                var n = "string" == typeof t ? t : JSON.stringify(t);
                localStorage.setItem(e, n)
              } catch (e) {}
            }
          },
          R = "__tea_cache_",
          A = "function" == typeof Symbol && "symbol" === i(Symbol.iterator) ? function (e) {
            return void 0 === e ? "undefined" : i(e)
          } :
          function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : i(e)
          },
          z = function e() {
            var t = this,
              n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            ! function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.init = function (e) {
                t.isLog = e
              },
              this.info = function (e) {
                for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
                  r[o - 1] = arguments[o];
                var i;
                t.isLog && (i = console).log.apply(i, [t.prefix + e].concat(r))
              },
              this.warn = function (e) {
                for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
                  r[o - 1] = arguments[o];
                var i;
                t.isLog && (i = console).warn.apply(i, [t.prefix + e].concat(r))
              },
              this.error = function (e) {
                for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
                  r[o - 1] = arguments[o];
                var i;
                t.isLog && (i = console).error.apply(i, [t.prefix + e].concat(r))
              },
              this.dir = function () {
                var e;
                t.isLog && (e = console).dir.apply(e, arguments)
              },
              this.table = function (e) {
                t.isLog && console.table(e)
              },
              this.logJSON = function (e) {
                "object" === (void 0 === e ? "undefined" : A(e)) && t.isLog && t.info("", JSON.stringify(e, null, 2))
              },
              this.deprecated = function (e) {
                for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
                  r[o - 1] = arguments[o];
                t.warn.apply(t, ["[DEPRECATED]" + e].concat(r))
              },
              this.throw = function (e) {
                throw t.error(t.prefix),
                  new Error(e)
              };
            var r = n ? "[" + n + "]" : "";
            this.prefix = "[tea-sdk]" + r
          },
          j = new z,
          I = function (e, t, n, r) {
            var o = new XMLHttpRequest;
            o.open("POST", e, !0),
              o.setRequestHeader("Content-Type", "application/json; charset=utf-8"),
              o.onload = function () {
                try {
                  var e = JSON.parse(o.responseText);
                  n && n(e)
                } catch (e) {
                  r && r()
                }
              },
              o.onerror = function () {
                r && r()
              },
              o.send(JSON.stringify(t))
          },
          B = (new Date).getTimezoneOffset(),
          q = parseInt(-B / 60, 10),
          N = 60 * B,
          U = void 0;
        try {
          U = "3.2.7"
        } catch (C) {
          U = "2.x"
        }
        var F = new(function (e) {
            function t() {
              ! function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function")
              }(this, t);
              var n = function (e, t) {
                if (!e)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" !== (void 0 === t ? "undefined" : i(t)) && "function" != typeof t ? e : t
              }(this, e.call(this));
              return n.initClientEnv = function () {
                  n.set("os_name", D.os_name),
                    n.set("os_version", D.os_version),
                    n.set("device_model", D.device_model),
                    n.set("platform", D.platform),
                    n.set("sdk_version", U),
                    n.set("browser", D.browser),
                    n.set("browser_version", D.browser_version),
                    n.set("language", D.language),
                    n.set("timezone", q),
                    n.set("tz_offset", N),
                    n.set("resolution", D.screen_width + "x" + D.screen_height),
                    n.set("screen_width", D.screen_width),
                    n.set("screen_height", D.screen_height),
                    n.set("referrer", D.referrer),
                    n.set("referrer_host", D.referrer_host),
                    n.set("utm_source", D.utm_source),
                    n.set("utm_medium", D.utm_medium),
                    n.set("utm_campaign", D.utm_campaign),
                    n.set("utm_term", D.utm_term),
                    n.set("utm_content", D.utm_content)
                },
                n.initClientEnv(),
                n
            }
            return function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : i(t)));
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0
                    }
                  }),
                  t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
              }(t, e),
              t
          }(l)),
          H = new(function () {
            function e() {
              ! function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function")
              }(this, e)
            }
            return e.prototype.isString = function (e) {
                return "String" === Object.prototype.toString.call(e).slice(8, -1)
              },
              e.prototype.isNumber = function (e) {
                return "Number" === Object.prototype.toString.call(e).slice(8, -1)
              },
              e.prototype.isBoolean = function (e) {
                return "Boolean" === Object.prototype.toString.call(e).slice(8, -1)
              },
              e.prototype.isFunction = function (e) {
                return "Function" === Object.prototype.toString.call(e).slice(8, -1)
              },
              e.prototype.isNull = function (e) {
                return "Null" === Object.prototype.toString.call(e).slice(8, -1)
              },
              e.prototype.isUndefined = function (e) {
                return "Undefined" === Object.prototype.toString.call(e).slice(8, -1)
              },
              e.prototype.isObj = function (e) {
                return "Object" === Object.prototype.toString.call(e).slice(8, -1)
              },
              e.prototype.isArray = function (e) {
                return "Array" === Object.prototype.toString.call(e).slice(8, -1)
              },
              e.prototype.isFalse = function (e) {
                return "" === e || null == e || "null" === e || "undefined" === e || 0 === e || !1 === e || NaN === e
              },
              e.prototype.isTrue = function (e) {
                return !this.isFalse(e)
              },
              e.prototype.isLowIE = function () {
                return window.XDomainRequest
              },
              e
          }()),
          W = function (e) {
            return function (e, t, n) {
              if ("string" == typeof e && "number" == typeof n) {
                var r, o = [];
                n = n <= 25 ? n : n % 25;
                var i = String.fromCharCode(n + 97);
                r = e.split(i);
                for (var a = 0; a < r.length; a++) {
                  var s = parseInt(r[a], n);
                  s = 1 * s ^ 64;
                  var l = String.fromCharCode(s);
                  o.push(l)
                }
                return o.join("")
              }
            }(e, 0, 25)
          },
          V = function () {
            return o().replace(/-/g, "").slice(0, 19)
          },
          K = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          },
          J = {
            cn: "1fz22z22z1nz21z4mz4bz4bz1kz1az21z4az21z1lz21z21z1bz1iz4az1az1mz1k",
            sg: "1fz22z22z1nz21z4mz4bz4bz21z1ez18z1jz1gz49z1kz1az21z4az19z27z22z1cz1mz24z1cz20z21z1cz18z4az1az1mz1k",
            va: "1fz22z22z1nz21z4mz4bz4bz1kz18z1jz1gz24z18z49z1kz1az21z4az19z27z22z1cz1mz24z1cz20z21z1cz18z4az1az1mz1k"
          },
          X = function (e) {
            try {
              var t = document.cookie.match(new RegExp("(?:^|;)\\s*" + e + "=([^;]+)"));
              return decodeURIComponent(t ? t[1] : "")
            } catch (e) {
              return ""
            }
          },
          Q = function (e) {
            function t() {
              ! function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function")
              }(this, t);
              var n = function (e, t) {
                if (!e)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" !== (void 0 === t ? "undefined" : i(t)) && "function" != typeof t ? e : t
              }(this, e.call(this));
              return n.init = function (e) {
                  var t = e.app_id,
                    r = e.channel,
                    o = e.log,
                    i = e.channel_domain,
                    a = e.name;
                  if ("number" != typeof t)
                    throw new Error("app_id 必须是一个数字，注意检查是否是以`string`的方式传入的？");
                  n.logger = new z(a),
                    n.logger.init(o),
                    n.initConfigs(e),
                    n.initUrls(r, i),
                    n.setEnv("app_id", t)
                },
                n.initConfigs = function (e) {
                  var t = e.app_id,
                    r = e.disable_ssid,
                    o = e.disable_webid,
                    i = e.disable_sdk_monitor;
                  n.app_id = t,
                    n.evtDataCacheKey = R + "events_" + t,
                    r && (n.logger.info("ssid已禁用，设置user_unique_id不会请求ssid接口。"),
                      n.isSsidDisabled = !0),
                    o && (n.logger.info("webid服务已禁用，ssid同时被禁用。将本地生成webid。"),
                      n.isWebidDisabled = !0,
                      n.isSsidDisabled = !0),
                    i && (n.logger.info("SDK监控已禁用。"),
                      n.isSdkMonitorDisabled = !0)
                },
                n.initUrls = function (e, t) {
                  if ("internal" === e && (n.logger.warn("channel 的值 internal 已被废弃，已自动改为 cn。"),
                      e = "cn"),
                    !t && !J[e])
                    throw new Error("channel 变量只能是 `cn`, `sg`,`va`");
                  var r = t || W(J[e]);
                  r = r.replace(/\/+$/, ""),
                    n.reportUrl = r + "/v1/list",
                    n.userTokensPrefix = "" + r
                },
                n.setEnv = function (e, t) {
                  if ("app_id" === e && n.checkUserToken(t),
                    "user_unique_id" === e) {
                    if (n.blackUuid.some(function (e) {
                        return e === String(t)
                      }))
                      return void n.logger.warn('设置了无效的值 {user_unique_id："%s"}。该操作已忽略。', t);
                    n.verifyTokens(t)
                  }
                  if ("web_id" === e) {
                    if (!t)
                      return;
                    (!n.envInfo.user.user_unique_id || n.envInfo.user.user_unique_id && n.envInfo.user.user_unique_id === n.envInfo.user.web_id) && n.set("user_unique_id", t)
                  }
                  n.set(e, t)
                },
                n.transferFromCookie = function () {
                  var e = n.tokensCacheKey,
                    t = X("tt_webid"),
                    r = X("__tea_sdk__ssid"),
                    o = X("__tea_sdk__user_unique_id");
                  if (H.isLowIE()) {
                    if (t) {
                      var i = {
                        web_id: t,
                        ssid: t,
                        user_unique_id: t
                      };
                      L.set(e, JSON.stringify(i))
                    }
                    return !1
                  }
                  if (t && r && o) {
                    var a = {
                      web_id: t,
                      ssid: r,
                      user_unique_id: o
                    };
                    L.set(e, JSON.stringify(a))
                  }
                },
                n.purifyBlackUuid = function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  if (n.blackUuid.some(function (t) {
                      return t === e.user_unique_id
                    })) {
                    var t = {};
                    return n.setUserTokens(t),
                      n.logger.warn('检测到无效的用户标识，已重置用户状态。{user_unique_id: "%s"}', e.user_unique_id),
                      t
                  }
                  return e
                },
                n.getUserTokens = function () {
                  return L.get(n.tokensCacheKey) || {}
                },
                n.setUserTokens = function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  return L.set(n.tokensCacheKey, e)
                },
                n.checkUserToken = function (e) {
                  var t = R + "tokens_" + e;
                  n.tokensCacheKey = t,
                    n.transferFromCookie();
                  var r = n.purifyBlackUuid(n.getUserTokens());
                  r.user_unique_id && r.web_id ? (n.envInfo.user.user_unique_id = r.user_unique_id,
                    n.envInfo.user.web_id = r.web_id,
                    n.envInfo.user.ssid = r.ssid || "",
                    n.logger.info("初始化已经检测到了 webid user_unique_id，一般情况下不需要再次验证 id 了"),
                    n.unlock()) : n.requestWebId(e)
                },
                n.saveTokenToStorage = function (e) {
                  var t = e.web_id,
                    r = e.ssid,
                    o = e.user_unique_id;
                  n.setUserTokens({
                    web_id: t,
                    ssid: r,
                    user_unique_id: o
                  })
                },
                n.requestWebId = function () {
                  n.isRequestWebId = !0;
                  var e = function (e) {
                    var t = n.envInfo.user.web_id || e.web_id,
                      r = e.ssid;
                    n.isRequestWebId = !1,
                      n.envInfo.user.ssid = r,
                      n.envInfo.user.web_id = t,
                      n.envInfo.user.user_unique_id = t,
                      n.saveTokenToStorage({
                        web_id: t,
                        ssid: r,
                        user_unique_id: t
                      }),
                      n.waitForVerifyTokens ? (n.lock(),
                        n.verifyTokens(n.realUuid)) : (n.unlock(),
                        n.callback && n.callback())
                  };
                  n.isWebidDisabled ? e({
                    web_id: V(),
                    ssid: ""
                  }) : function () {
                    var t = n.userTokensPrefix + "/v1/user/webid";
                    I(t, {
                      app_id: n.app_id,
                      url: location.href,
                      user_agent: D.userAgent,
                      referer: D.referrer,
                      user_unique_id: ""
                    }, function (t) {
                      0 !== t.e ? n.logger.error("请求 webid 失败。请联系管理员。") : e(t)
                    }, function () {
                      n.isRequestWebId = !1,
                        n.logger.error("获取 webid 失败，数据将不会被上报")
                    })
                  }()
                },
                n.verifyTokens = function (e) {
                  var t = n.tokensCacheKey;
                  if (n.waitForVerifyTokens = !1,
                    n.realUuid = "" + e,
                    n.isRequestWebId)
                    return n.waitForVerifyTokens = !0,
                      n.logger.info("正在请求 webid，requestSsid 将会在前者请求完毕之后被调用"),
                      !1;
                  var r = n.getUserTokens();
                  if (r.user_unique_id === n.realUuid && r.ssid && r.web_id)
                    n.logger.info("传入的 user_id/user_unique_id 与 缓存中的完全一致，无需再次请求"),
                    n.unlock();
                  else {
                    n.lock(),
                      n.envInfo.user.user_unique_id = n.realUuid;
                    var o = K({}, n.getUserTokens(), {
                      user_unique_id: n.realUuid
                    });
                    if (L.set(t, JSON.stringify(o)),
                      H.isLowIE())
                      return n.unlock(),
                        !1;
                    n.isSsidDisabled ? (n.unlock(),
                      n.callback && n.callback()) : n.requestSsid()
                  }
                },
                n.requestSsid = function () {
                  var e = n.getUserTokens(),
                    t = n.userTokensPrefix + "/v1/user/ssid";
                  I(t, {
                    app_id: n.app_id,
                    web_id: e.web_id,
                    user_unique_id: "" + e.user_unique_id
                  }, function (t) {
                    if (n.unlock(),
                      0 !== t.e)
                      n.logger.error("请求 ssid 失败~");
                    else {
                      n.envInfo.user.ssid = t.ssid;
                      var r = K({}, e, {
                        ssid: t.ssid
                      });
                      n.setUserTokens(r),
                        n.logger.info("根据 user_unique_id 更新 ssid 成功！注意：在这之前不应该有数据被发出去"),
                        n.callback && n.callback()
                    }
                  }, function () {
                    n.unlock(),
                      n.logger.error("根据 user_unique_id 获取新 ssid 失败")
                  })
                },
                n.setEvtParams = function (e) {
                  var t = K({}, e);
                  Object.keys(t).forEach(function (e) {
                    n.evtParams[e] = t[e]
                  })
                },
                n.mergeEnvToEvents = function (e) {
                  var t = n.mergeEnv(),
                    r = [],
                    o = 0,
                    i = void 0;
                  return e.forEach(function (e) {
                      var t = !!e.params.__disable_storage__;
                      void 0 === i ? i = t : (t !== i || r[o].length >= 5) && (o += 1,
                          i = !i),
                        r[o] = r[o] || [],
                        r[o].push(e)
                    }),
                    r.map(function (e) {
                      return {
                        events: e.map(function (e) {
                          var t = K({}, n.evtParams, e.params);
                          return delete t.__disable_storage__,
                            K({}, e, {
                              params: JSON.stringify(t)
                            })
                        }),
                        user: t.user,
                        header: t.header,
                        verbose: n.debugMode ? 1 : void 0,
                        __disable_storage__: e[0].params.__disable_storage__
                      }
                    })
                },
                n.mergeEnv = function () {
                  var e = n.get(),
                    t = F.get(),
                    r = K({}, e.user),
                    o = K({}, t.header.headers.custom, e.header.headers.custom),
                    i = K({}, t.header.headers, e.header.headers, {
                      custom: o
                    }),
                    a = K({}, t.header, e.header);
                  return {
                    user: r,
                    header: K({}, a, {
                      headers: JSON.stringify(i)
                    })
                  }
                },
                n.evtParams = {},
                n.reportUrl = "",
                n.userTokensPrefix = "",
                n.isSsidDisabled = !1,
                n.isWebidDisabled = !1,
                n.isSdkMonitorDisabled = !1,
                n.debugMode = !1,
                n.blackUuid = ["null", "undefined", "0", "", "None"],
                n.logger = function () {},
                n
            }
            return function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : i(t)));
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0
                    }
                  }),
                  t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
              }(t, e),
              t.prototype.lock = function () {
                this.isUserTokensReady = !1
              },
              t.prototype.unlock = function () {
                this.isUserTokensReady = !0
              },
              t.prototype.enableDebugMode = function (e) {
                this.debugMode = e
              },
              t
          }(l),
          $ = function e() {
            var t = this;
            ! function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.set = function (e, n) {
                t.cache[e] = n
              },
              this.get = function (e) {
                return t.cache[e]
              },
              this.clean = function (e) {
                t.cache[e] = void 0
              },
              this.cache = {}
          },
          G = new $,
          Y = function () {
            function e(t) {
              var n = t.disable_storage,
                r = void 0 !== n && n;
              ! function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function")
              }(this, e),
              this._isPersistent = !r,
                this._storage = this._isPersistent ? L : new $,
                this._storageKey = "",
                this._data = void 0
            }
            return e.prototype.setStorageKey = function (e) {
                this._storageKey = e
              },
              e.prototype.getAllEvents = function () {
                var e = this.getData();
                Object.keys(e).reduce(function (t, n) {
                  return t.concat(e[n] || [])
                }, [])
              },
              e.prototype.getData = function () {
                return this._checkIsDataInit(),
                  this._data
              },
              e.prototype.add = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                this._checkIsDataInit(),
                  0 !== t.length && (this._data[e] = t,
                    this._save())
              },
              e.prototype.delete = function (e) {
                this._checkIsDataInit(),
                  this._data[e] && (delete this._data[e],
                    this._save())
              },
              e.prototype._checkIsDataInit = function () {
                if (void 0 === this._data)
                  try {
                    var e, t = this._getDataFromStorage();
                    H.isArray(t) ? (this._data = ((e = {})[V()] = t,
                        e),
                      this._save()) : this._data = t
                  } catch (e) {
                    this._data = {}
                  }
              },
              e.prototype._checkStorageKey = function () {
                if (!this._storageKey)
                  throw new Error("must call setStorageKey('xxx') first")
              },
              e.prototype._getDataFromStorage = function () {
                return this._checkStorageKey(),
                  this._storage.get(this._storageKey) || {}
              },
              e.prototype._save = function () {
                this._checkStorageKey(),
                  this._storage.set(this._storageKey, this._data)
              },
              e
          }(),
          Z = function (e, t) {
            if (window.XDomainRequest)
              return function (e, t) {
                try {
                  var n = e.split("v1")[0];
                  t.forEach(function (e) {
                    var t = function (e) {
                        var t = "";
                        for (var n in e)
                          e.hasOwnProperty(n) && (t += "&" + n + "=" + encodeURIComponent(JSON.stringify(e[n])));
                        return t = "&" === t[0] ? t.slice(1) : t
                      }(e),
                      r = new Image(1, 1);
                    r.onload = function () {
                        r = null
                      },
                      r.onerror = function () {
                        r = null
                      },
                      r.src = n + "/v1/gif?" + t
                  })
                } catch (e) {}
              }(e, t);
            var n = new XMLHttpRequest;
            n.open("POST", e + "?rdn=" + Math.random(), !0),
              n.onload = function () {},
              n.onerror = function () {
                n.abort()
              },
              n.send(JSON.stringify(t))
          },
          ee = function (e, t, n, r) {
            try {
              var o = e.split("v1")[0];
              if (!o)
                return void r(e, t, 4001);
              t.forEach(function (i) {
                var a = function (e) {
                    var t = "";
                    for (var n in e)
                      e.hasOwnProperty(n) && (t += "&" + n + "=" + encodeURIComponent(JSON.stringify(e[n])));
                    return t = "&" === t[0] ? t.slice(1) : t
                  }(i),
                  s = new Image(1, 1);
                s.onload = function () {
                    s = null,
                      n()
                  },
                  s.onerror = function () {
                    s = null,
                      r(e, t, 4e3)
                  },
                  s.src = o + "/v1/gif?" + a
              })
            } catch (n) {
              r(e, t, 4002, n.message)
            }
          },
          te = function e(t) {
            var n = this;
            ! function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.send = function (e) {
                var t = e.url,
                  r = e.data,
                  o = e.success,
                  i = e.fail,
                  a = e.eventError;
                if (function (e) {
                    var t = e.url,
                      n = e.data,
                      r = e.success,
                      o = e.fail,
                      i = e.notSure,
                      a = e.isUnload,
                      s = n;
                    if (window.XDomainRequest)
                      ee(t, s, r, o);
                    else {
                      if (a)
                        return window.navigator && window.navigator.sendBeacon ? (i(),
                          void(window.navigator.sendBeacon(t, JSON.stringify(s)) ? r() : o(t, n, 4003))) : void ee(t, s, r, o);
                      var l = new XMLHttpRequest;
                      l.open("POST", t + "?rdn=" + Math.random(), !0),
                        l.onload = function () {
                          r(t, s, l.responseText)
                        },
                        l.onerror = function () {
                          l.abort(),
                            o(t, s, 500)
                        },
                        l.send(JSON.stringify(s))
                    }
                  }({
                    url: t,
                    data: r,
                    success: function (e, t, r) {
                      o();
                      try {
                        var i = JSON.parse(r).e;
                        if (0 !== i) {
                          var s = "未知错误"; -
                          2 === i && (s = "事件格式错误！请检查字段类型是否正确。"),
                            n.logger.error("数据上报失败！", "错误码：" + i + "。错误信息：" + s),
                            a(t, i),
                            re(e, t, i)
                        }
                      } catch (n) {
                        re(e, t, 5001)
                      }
                    },
                    fail: function (e, t, r) {
                      n.logger.error("数据上报失败！", "错误码：" + r),
                        i(t, r),
                        re(e, t, r)
                    },
                    notSure: e.notSure,
                    isUnload: e.isUnload
                  }),
                  !n.isSdkMonitorDisabled && !n.isSdkOnLoadEventReady) {
                  n.isSdkOnLoadEventReady = !0;
                  try {
                    var s = r[0].header,
                      l = r[0].user;
                    ne(t, {
                      app_id: s.app_id,
                      app_name: s.app_name,
                      sdk_version: s.sdk_version,
                      web_id: l.web_id
                    })
                  } catch (e) {}
                }
              },
              this.logger = t.logger || j,
              this.isSdkOnLoadEventReady = !1,
              this.isSdkMonitorDisabled = !1
          },
          ne = function (e, t) {
            try {
              var n = {
                events: [{
                  event: "onload",
                  params: JSON.stringify({
                    app_id: t.app_id,
                    app_name: t.app_name || "",
                    sdk_version: t.sdk_version
                  }),
                  local_time_ms: Date.now()
                }],
                user: {
                  user_unique_id: t.web_id
                },
                header: {
                  app_id: 1338
                }
              };
              setTimeout(function () {
                Z(e, [n])
              }, 16)
            } catch (e) {}
          },
          re = function (e, t, n) {
            try {
              var r = t[0].user,
                o = t[0].header,
                i = [];
              t.forEach(function (e) {
                e.events.forEach(function (e) {
                  i.push(e)
                })
              });
              var a = {
                events: i.map(function (e) {
                  return {
                    event: "on_error",
                    params: JSON.stringify({
                      error_code: n,
                      app_id: o.app_id,
                      app_name: o.app_name || "",
                      error_event: e.event,
                      local_time_ms: e.local_time_ms,
                      tea_event_index: Date.now(),
                      params: e.params,
                      header: JSON.stringify(o),
                      user: JSON.stringify(r)
                    }),
                    local_time_ms: Date.now()
                  }
                }),
                user: {
                  user_unique_id: r.user_unique_id
                },
                header: {
                  app_id: 1338
                }
              };
              setTimeout(function () {
                Z(e, [a])
              }, 16)
            } catch (e) {}
          },
          oe = function (e) {
            function t(n) {
              ! function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function")
              }(this, t);
              var r = function (e, t) {
                if (!e)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" !== (void 0 === t ? "undefined" : i(t)) && "function" != typeof t ? e : t
              }(this, e.call(this));
              r.addListener = function () {
                  window.addEventListener("unload", function () {
                      r.report(!0)
                    }, !1),
                    window.addEventListener("beforeunload", function () {
                      r.report(!0)
                    }, !1),
                    document.addEventListener("visibilitychange", function () {
                      "hidden" === document.visibilityState && r.report(!0)
                    }, !1)
                },
                r.setReady = function (e) {
                  r.isReady = e,
                    r.eventSender.isSdkMonitorDisabled = r.isSdkMonitorDisabled,
                    r.checkAndSendCachedStorageEvents(),
                    r.report()
                },
                r.eventReportTimer = null,
                r.event = function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = G.get(r.evtDataCacheKey) || [],
                    o = t ? [].concat(e, n) : [].concat(n, e);
                  G.set(r.evtDataCacheKey, o),
                    o.length >= 5 ? r.report() : (r.eventReportTimer && clearTimeout(r.eventReportTimer),
                      r.eventReportTimer = setTimeout(function () {
                        r.report(),
                          r.eventReportTimer = null
                      }, r.waitForBatchTime))
                },
                r.report = function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                  if (!r.isUserTokensReady)
                    return !1;
                  if (!r.isReady)
                    return !1;
                  var t = G.get(r.evtDataCacheKey) || [];
                  G.clean(r.evtDataCacheKey);
                  var n = r.mergeEnvToEvents(t);
                  r.sendData(n, e)
                },
                r.sendData = function (e, t) {
                  var n = [],
                    o = 0,
                    i = void 0;
                  e.forEach(function (e) {
                      var t = !!e.__disable_storage__;
                      void 0 === i ? i = t : (t !== i || n[o].length >= 5) && (o += 1,
                          i = !i),
                        n[o] = n[o] || [],
                        n[o].push(e)
                    }),
                    n.forEach(function (e) {
                      var n = V();
                      e[0].__disable_storage__ || r.eventStorage.add(n, e),
                        r._sendData(n, e, t)
                    })
                },
                r.checkAndSendCachedStorageEvents = function () {
                  var e = r.eventStorage.getData(),
                    t = Object.keys(e);
                  t.length > 0 && t.forEach(function (t) {
                    r._sendData(t, e[t])
                  })
                },
                r._sendData = function (e, t, n) {
                  r.isReporting = !0;
                  var o = function () {
                    r.isReporting = !1
                  };
                  r.eventSender.send({
                    url: r.reportUrl,
                    data: t,
                    success: function () {
                      o(),
                        r.sendDataSuccess(e)
                    },
                    fail: function (e, t) {
                      o(),
                        r.reportErrorCallback(e, t),
                        setTimeout(function () {
                          r.report()
                        }, 3e3)
                    },
                    eventError: function (e, t) {
                      r.reportErrorCallback(e, t)
                    },
                    notSure: o,
                    isUnload: n
                  })
                },
                r.sendDataSuccess = function (e) {
                  r.eventStorage.delete(e),
                    r.report()
                };
              var o = n.log,
                a = n.disable_storage,
                s = n.max_batch_num,
                l = void 0 === s ? 5 : s,
                u = n.batch_time,
                c = void 0 === u ? 30 : u;
              return r.init(n),
                r.maxBatchNum = l,
                r.waitForBatchTime = c,
                r.isReady = !1,
                r.addListener(),
                r.enableDebugMode(!!o),
                r.eventStorage = new Y({
                  disable_storage: a
                }),
                r.eventStorage.setStorageKey(r.evtDataCacheKey),
                r.eventSender = new te({
                  logger: r.logger
                }),
                r.reportErrorCallback = function () {},
                r
            }
            return function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : i(t)));
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0
                    }
                  }),
                  t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
              }(t, e),
              t
          }(Q),
          ie = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          },
          ae = function () {
            var e = +Date.now() + Number(("" + Math.random()).slice(2, 8));
            return function () {
              return e += 1
            }
          }(),
          se = function e(t) {
            var n = this;
            ! function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.init = function (e) {
                if (!H.isObj(e))
                  throw new Error("init 的参数必须是Object类型");
                n.logger.init(e.log),
                  n.channel = new oe(ie({}, e, {
                    name: n.name
                  })),
                  n.channel.callback = function () {
                    n.callbackSend && n.start()
                  }
              },
              this.config = function (e) {
                H.isObj(e) || n.logger.throw("config 参数必须是 {} 的格式"),
                  e.log && (n.logger.init(!0),
                    n.channel.enableDebugMode(!0),
                    e.log = null);
                var t = Object.keys(e);
                if (!t.length)
                  return !1;
                var r = t,
                  o = Array.isArray(r),
                  i = 0;
                for (r = o ? r : r[Symbol.iterator]();;) {
                  var a;
                  if (o) {
                    if (i >= r.length)
                      break;
                    a = r[i++]
                  } else {
                    if ((i = r.next()).done)
                      break;
                    a = i.value
                  }
                  var s = a,
                    l = e[s];
                  switch (s) {
                    case "evtParams":
                      n.channel.setEvtParams(l);
                      break;
                    case "disable_ssid":
                      n.logger.deprecated("(disable_ssid)请通过init函数来设置。"),
                        l && (n.logger.info("ssid已禁用，设置user_unique_id不会请求ssid接口。"),
                          n.channel.isSsidDisabled = l);
                      break;
                    case "disable_auto_pv":
                      l && (n.logger.info("已禁止默认上报predefine_pageview事件，需手动上报。"),
                        n._autoSendPV = !1);
                      break;
                    case "_staging_flag":
                      "" + l == "1" && n.logger.info("根据_staging_flag设置，数据将会上报到stag 表。"),
                        n.channel.setEvtParams({
                          _staging_flag: Number(l)
                        });
                      break;
                    case "reportErrorCallback":
                      "function" == typeof l && (n.channel.reportErrorCallback = l);
                      break;
                    default:
                      n.channel.setEnv(s, l)
                  }
                }
              },
              this.send = function () {
                n.start()
              },
              this.start = function () {
                if (n.channel.isUserTokensReady) {
                  if (n._isSendFuncCalled)
                    return;
                  n._isSendFuncCalled = !0,
                    n.logger.info("看到本提示，意味着用户信息已完全就绪，上报通道打开。用户标识如下："),
                    n.logger.logJSON(n.channel.get().user),
                    n._autoSendPV && n.predefinePageView(),
                    n.channel.setReady(!0)
                } else
                  n.callbackSend = !0
              },
              this.predefinePageView = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  t = {
                    title: document.title || location.pathname,
                    url: location.href,
                    url_path: location.pathname
                  },
                  r = ie({}, t, e);
                n.event("predefine_pageview", r, !0)
              },
              this.event = function () {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                  t[r] = arguments[r];
                var o = H.isBoolean(t[t.length - 1]),
                  i = !!o && t[t.length - 1],
                  a = o ? t.slice(0, t.length - 1) : t,
                  s = a[0],
                  l = [];
                H.isArray(s) ? l = a : l[0] = a,
                  l = l.map(function (e) {
                    return function (e, t) {
                        var n = e;
                        /^event\./.test(e) && (n = e.slice(6));
                        var r = t;
                        return H.isObj(r) || (r = {}),
                          r.event_index = ae(), {
                            event: n,
                            params: r,
                            local_time_ms: +new Date
                          }
                      }
                      .apply(void 0, e)
                  }),
                  n.channel.event(l, i)
              },
              this._isSendFuncCalled = !1,
              this._autoSendPV = !0,
              this.name = t,
              this.logger = new z(t)
          };
        se.exportMethods = ["init", "config", "send", "start", "predefinePageView"],
          t.default = function e(t) {
            var n = this;
            return function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function")
              }(this, e),
              this._exportCollect = function () {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                  t[r] = arguments[r];
                n._isQueueProcessed ? n._executeCmd.apply(n, t) : (n.cmdQueue.push(t),
                  n._processCmdQueue())
              },
              this._processCmdQueue = function () {
                if (0 !== n.cmdQueue.length) {
                  var e, t, r, o, i = (e = n.cmdQueue,
                    t = "init",
                    r = "0",
                    o = -1,
                    e.forEach(function (e, n) {
                      e[0] === t && (o = n)
                    }),
                    o); -
                  1 !== i && (n._isQueueProcessed = !0,
                    n._executeCmd.apply(n, n.cmdQueue[i]),
                    n.cmdQueue.forEach(function (e, t) {
                      t !== i && n._executeCmd.apply(n, e)
                    }),
                    n.cmdQueue = [])
                }
              },
              this._executeCmd = function () {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                  t[r] = arguments[r];
                var o, i, a = t[0];
                se.exportMethods.indexOf(a) > -1 ? (o = n.colloctor)[a].apply(o, t.slice(1)) : (i = n.colloctor).event.apply(i, t)
              },
              this.name = t || "Collector" + +new Date,
              this.cmdQueue = [],
              this.colloctor = new se(this.name),
              this._isQueueProcessed = !1,
              this._processCmdQueue(),
              this._exportCollect.init = this._exportCollect.bind(this, "init"),
              this._exportCollect.config = this._exportCollect.bind(this, "config"),
              this._exportCollect.send = this._exportCollect.bind(this, "send"),
              this._exportCollect.start = this._exportCollect.bind(this, "start"),
              this._exportCollect.predefinePageView = this._exportCollect.bind(this, "predefinePageView"),
              this._exportCollect
          },
          e.exports = t.default
      }, function (e, t, n) {
        e.exports = n(9)
      }, function (e, t, n) {
        function r(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }

        function o(e, t, n) {
          var r = e;
          t.map(function (e, o) {
            r[e] = o == t.length - 1 ? n : r[e] || {},
              r = r[e]
          })
        }
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var i = r(n(0)),
          a = r(n(28)),
          s = r(n(31)),
          l = r(n(32)),
          u = r(n(33)),
          c = r(n(34)),
          d = r(n(35)),
          p = r(n(36)),
          f = r(n(37)),
          g = r(n(38)),
          h = r(n(39)),
          v = r(n(40)),
          y = r(n(46)),
          m = r(n(47)),
          b = r(n(48)),
          x = r(n(49)),
          w = r(n(50)),
          _ = r(n(51)),
          k = r(n(52)),
          E = r(n(53)),
          C = r(n(54)),
          S = r(n(55)),
          T = r(n(58)),
          P = r(n(59)),
          O = r(n(7));
        n(62);
        var M = {};
        o(M, ["control", "collect"], O.default),
          o(M, ["control", "danmu"], P.default),
          o(M, ["control", "definition"], T.default),
          o(M, ["control", "download"], S.default),
          o(M, ["control", "error"], C.default),
          o(M, ["control", "flex"], E.default),
          o(M, ["control", "fullscreen"], k.default),
          o(M, ["control", "i18n"], _.default),
          o(M, ["control", "loading"], w.default),
          o(M, ["control", "localPreview"], x.default),
          o(M, ["control", "logger"], b.default),
          o(M, ["control", "mobile"], m.default),
          o(M, ["control", "pc"], y.default),
          o(M, ["control", "pip"], v.default),
          o(M, ["control", "play"], h.default),
          o(M, ["control", "playbackRate"], g.default),
          o(M, ["control", "poster"], f.default),
          o(M, ["control", "progress"], p.default),
          o(M, ["control", "replay"], d.default),
          o(M, ["control", "rotate"], c.default),
          o(M, ["control", "screenShot"], u.default),
          o(M, ["control", "textTrack"], l.default),
          o(M, ["control", "time"], s.default),
          o(M, ["control", "volume"], a.default),
          t.default = i.default,
          e.exports = t.default
      }, function (e, t, n) {
        function r(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var o = function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                  r.configurable = !0,
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r)
              }
            }
            return function (t, n, r) {
              return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
          }(),
          i = r(n(11)),
          a = r(n(3)),
          s = r(n(4)),
          l = function () {
            function e(t) {
              ! function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function")
              }(this, e),
              this.logParams = {
                  bc: 0,
                  bu_acu_t: 0,
                  played: []
                },
                this._hasStart = !1,
                this.videoConfig = {
                  controls: !1,
                  autoplay: t.autoplay,
                  playsinline: t.playsinline,
                  "webkit-playsinline": t.playsinline,
                  "x5-playsinline": t.playsinline,
                  "x5-video-player-type": t["x5-video-player-type"],
                  "x5-video-player-fullscreen": t["x5-video-player-fullscreen"],
                  "x5-video-orientation": t["x5-video-orientation"],
                  airplay: t.airplay,
                  "webkit-airplay": t.airplay,
                  tabindex: 2,
                  mediaType: t.mediaType || "video"
                },
                t.loop && (this.videoConfig.loop = "loop");
              var n = "";
              if (t.textTrack && Array.isArray(t.textTrack) && (navigator.userAgent.indexOf("Chrome") > -1 || navigator.userAgent.indexOf("Firefox") > -1) && (t.textTrack.some(function (e) {
                    if (e.src && e.label && e.default)
                      return n += '<track src="' + e.src + '" ',
                        e.kind && (n += 'kind="' + e.kind + '" '),
                        n += 'label="' + e.label + '" ',
                        e.srclang && (n += 'srclang="' + e.srclang + '" '),
                        n += (e.default ? "default" : "") + ">",
                        !0
                  }),
                  this.videoConfig.crossorigin = "anonymous"),
                t.textTrackStyle) {
                var r = document.createElement("style");
                this.textTrackStyle = r,
                  document.head.appendChild(r);
                var o = "";
                for (var l in t.textTrackStyle)
                  o += l + ": " + t.textTrackStyle[l] + ";";
                var u = t.id ? "#" + t.id : t.el.id ? "#" + t.el.id : "." + t.el.className;
                r.sheet.insertRule ? r.sheet.insertRule(u + " video::cue { " + o + " }", 0) : r.sheet.addRule && r.sheet.addRule(u + " video::cue", o)
              }
              this.video = a.default.createDom(this.videoConfig.mediaType, n, this.videoConfig, ""),
                t.autoplay && (this.video.autoplay = !0,
                  t.autoplayMuted && (this.video.muted = !0)),
                this.ev = ["play", "playing", "pause", "ended", "error", "seeking", "seeked", "timeupdate", "waiting", "canplay", "canplaythrough", "durationchange", "volumechange", "loadeddata"].map(function (e) {
                  return t = {},
                    n = e,
                    r = "on" + e.charAt(0).toUpperCase() + e.slice(1),
                    n in t ? Object.defineProperty(t, n, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                    }) : t[n] = r,
                    t;
                  var t, n, r
                }),
                (0,
                  i.default)(this),
                this._interval = {};
              var c = "0,0",
                d = this;
              this.ev.forEach(function (e) {
                d.evItem = Object.keys(e)[0];
                var t = Object.keys(e)[0];
                d.video.addEventListener(Object.keys(e)[0], function () {
                  d.logParams && ("play" === t ? d.hasStart = !0 : "waiting" === t ? (d.logParams.bc++,
                      d.inWaitingStart = (new Date).getTime()) : "playing" === t ? d.inWaitingStart && (d.logParams.bu_acu_t += (new Date).getTime() - d.inWaitingStart,
                      d.inWaitingStart = void 0) : "loadeddata" === t ? d.logParams.played.push({
                      begin: 0,
                      end: -1
                    }) : "seeking" === t ? d.logParams.played.push({
                      begin: d.video.currentTime,
                      end: -1
                    }) : "timeupdate" === t && (d.logParams.played.length < 1 && d.logParams.played.push({
                        begin: d.video.currentTime,
                        end: -1
                      }),
                      d.logParams.played[d.logParams.played.length - 1].end = d.video.currentTime),
                    "error" === t ? d.video.error && d.emit(t, new s.default("other", d.currentTime, d.duration, d.networkState, d.readyState, d.currentSrc, d.src, d.ended, {
                      line: 41,
                      msg: d.error,
                      handle: "Constructor"
                    })) : d.emit(t, d),
                    d.hasOwnProperty("_interval") && (["ended", "error", "timeupdate"].indexOf(t) < 0 ? (clearInterval(d._interval.bufferedChange),
                      a.default.setInterval(d, "bufferedChange", function () {
                        for (var e = [], t = 0, n = d.video.buffered.length; t < n; t++)
                          e.push([d.video.buffered.start(t), d.video.buffered.end(t)]);
                        e.toString() !== c && (c = e.toString(),
                          d.emit("bufferedChange", e))
                      }, 200)) : "timeupdate" !== t && a.default.clearInterval(d, "bufferedChange")))
                }, !1)
              })
            }
            return o(e, [{
                key: "destroy",
                value: function () {
                  this.textTrackStyle && this.textTrackStyle.parentNode.removeChild(this.textTrackStyle)
                }
              }, {
                key: "play",
                value: function () {
                  this.video.play()
                }
              }, {
                key: "pause",
                value: function () {
                  this.video.pause()
                }
              }, {
                key: "canPlayType",
                value: function () {
                  this.video.canPlayType()
                }
              }, {
                key: "getBufferedRange",
                value: function () {
                  var e = [0, 0],
                    t = this.video,
                    n = t.buffered,
                    r = t.currentTime;
                  if (n)
                    for (var o = 0, i = n.length; o < i && (e[0] = n.start(o),
                        e[1] = n.end(o),
                        !(e[0] <= r && r <= e[1])); o++)
                  ;
                  return e[0] - r <= 0 && r - e[1] <= 0 ? e : [0, 0]
                }
              }, {
                key: "hasStart",
                get: function () {
                  return this._hasStart
                },
                set: function (e) {
                  "boolean" != typeof e || !0 !== e || this._hasStart || (this._hasStart = !0,
                    this.emit("hasstart"))
                }
              }, {
                key: "autoplay",
                set: function (e) {
                  this.video.autoplay = e
                },
                get: function () {
                  return this.video.autoplay
                }
              }, {
                key: "buffered",
                get: function () {
                  return this.video.buffered
                }
              }, {
                key: "crossOrigin",
                get: function () {
                  return this.video.crossOrigin
                },
                set: function (e) {
                  this.video.crossOrigin = e
                }
              }, {
                key: "currentSrc",
                get: function () {
                  return this.video.currentSrc
                },
                set: function (e) {
                  this.video.currentSrc = e
                }
              }, {
                key: "currentTime",
                get: function () {
                  return this.video.currentTime
                },
                set: function (e) {
                  this.video.currentTime = e
                }
              }, {
                key: "defaultMuted",
                get: function () {
                  return this.video.defaultMuted
                },
                set: function (e) {
                  this.video.defaultMuted = e
                }
              }, {
                key: "duration",
                get: function () {
                  return this.video.duration
                }
              }, {
                key: "ended",
                get: function () {
                  return this.video.ended
                }
              }, {
                key: "error",
                get: function () {
                  var e = this.video.error;
                  if (!e)
                    return null;
                  var t = [{
                    en: "MEDIA_ERR_ABORTED",
                    cn: "取回过程被用户中止"
                  }, {
                    en: "MEDIA_ERR_NETWORK",
                    cn: "当下载时发生错误"
                  }, {
                    en: "MEDIA_ERR_DECODE",
                    cn: "当解码时发生错误"
                  }, {
                    en: "MEDIA_ERR_SRC_NOT_SUPPORTED",
                    cn: "不支持音频/视频"
                  }];
                  return this.lang ? this.lang[t[e.code - 1].en] : t[e.code - 1].en
                }
              }, {
                key: "loop",
                get: function () {
                  return this.video.loop
                },
                set: function (e) {
                  this.video.loop = e
                }
              }, {
                key: "muted",
                get: function () {
                  return this.video.muted
                },
                set: function (e) {
                  this.video.muted = e
                }
              }, {
                key: "networkState",
                get: function () {
                  var e = [{
                    en: "NETWORK_EMPTY",
                    cn: "音频/视频尚未初始化"
                  }, {
                    en: "NETWORK_IDLE",
                    cn: "音频/视频是活动的且已选取资源，但并未使用网络"
                  }, {
                    en: "NETWORK_LOADING",
                    cn: "浏览器正在下载数据"
                  }, {
                    en: "NETWORK_NO_SOURCE",
                    cn: "未找到音频/视频来源"
                  }];
                  return this.lang ? this.lang[e[this.video.networkState].en] : e[this.video.networkState].en
                }
              }, {
                key: "paused",
                get: function () {
                  return this.video.paused
                }
              }, {
                key: "playbackRate",
                get: function () {
                  return this.video.playbackRate
                },
                set: function (e) {
                  this.video.playbackRate = e
                }
              }, {
                key: "played",
                get: function () {
                  return this.video.played
                }
              }, {
                key: "preload",
                get: function () {
                  return this.video.preload
                },
                set: function (e) {
                  this.video.preload = e
                }
              }, {
                key: "readyState",
                get: function () {
                  var e = [{
                    en: "HAVE_NOTHING",
                    cn: "没有关于音频/视频是否就绪的信息"
                  }, {
                    en: "HAVE_METADATA",
                    cn: "关于音频/视频就绪的元数据"
                  }, {
                    en: "HAVE_CURRENT_DATA",
                    cn: "关于当前播放位置的数据是可用的，但没有足够的数据来播放下一帧/毫秒"
                  }, {
                    en: "HAVE_FUTURE_DATA",
                    cn: "当前及至少下一帧的数据是可用的"
                  }, {
                    en: "HAVE_ENOUGH_DATA",
                    cn: "可用数据足以开始播放"
                  }];
                  return this.lang ? this.lang[e[this.video.readyState].en] : e[this.video.readyState]
                }
              }, {
                key: "seekable",
                get: function () {
                  return this.video.seekable
                }
              }, {
                key: "seeking",
                get: function () {
                  return this.video.seeking
                }
              }, {
                key: "src",
                get: function () {
                  return this.video.src
                },
                set: function (e) {
                  var t = this;
                  a.default.hasClass(this.root, "xgplayer-ended") || this.emit("urlchange", JSON.parse(JSON.stringify(t.logParams))),
                    this.logParams = {
                      bc: 0,
                      bu_acu_t: 0,
                      played: [],
                      pt: (new Date).getTime(),
                      vt: (new Date).getTime(),
                      vd: 0
                    },
                    this.video.pause(),
                    this.video.src = e,
                    this.logParams.playSrc = e,
                    this.logParams.pt = (new Date).getTime(),
                    this.logParams.vt = this.logParams.pt,
                    t.once("loadeddata", function () {
                      t.logParams.vt = (new Date).getTime(),
                        t.logParams.pt > t.logParams.vt && (t.logParams.pt = t.logParams.vt),
                        t.logParams.vd = t.video.duration
                    })
                }
              }, {
                key: "volume",
                get: function () {
                  return this.video.volume
                },
                set: function (e) {
                  this.video.volume = e
                }
              }, {
                key: "fullscreen",
                get: function () {
                  return a.default.hasClass(this.root, "xgplayer-is-fullscreen") || a.default.hasClass(this.root, "xgplayer-fullscreen-active")
                }
              }, {
                key: "bullet",
                get: function () {
                  return !!a.default.findDom(this.root, "xg-bullet") && a.default.hasClass(a.default.findDom(this.root, "xg-bullet"), "xgplayer-has-bullet")
                }
              }, {
                key: "textTrack",
                get: function () {
                  return a.default.hasClass(this.root, "xgplayer-is-textTrack")
                }
              }, {
                key: "pip",
                get: function () {
                  return a.default.hasClass(this.root, "xgplayer-pip-active")
                }
              }]),
              e
          }();
        t.default = l,
          e.exports = t.default
      }, function (e, t, n) {
        var r, o, i, a, s, l, u, c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
          } :
          function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          },
          d = n(12),
          p = n(26),
          f = Function.prototype.apply,
          g = Function.prototype.call,
          h = Object.create,
          v = Object.defineProperty,
          y = Object.defineProperties,
          m = Object.prototype.hasOwnProperty,
          b = {
            configurable: !0,
            enumerable: !1,
            writable: !0
          };
        o = function (e, t) {
            var n, o;
            return p(t),
              o = this,
              r.call(this, e, n = function () {
                i.call(o, e, n),
                  f.call(t, this, arguments)
              }),
              n.__eeOnceListener__ = t,
              this
          },
          s = {
            on: r = function (e, t) {
              var n;
              return p(t),
                m.call(this, "__ee__") ? n = this.__ee__ : (n = b.value = h(null),
                  v(this, "__ee__", b),
                  b.value = null),
                n[e] ? "object" === c(n[e]) ? n[e].push(t) : n[e] = [n[e], t] : n[e] = t,
                this
            },
            once: o,
            off: i = function (e, t) {
              var n, r, o, i;
              if (p(t),
                !m.call(this, "__ee__"))
                return this;
              if (!(n = this.__ee__)[e])
                return this;
              if ("object" === (void 0 === (r = n[e]) ? "undefined" : c(r)))
                for (i = 0; o = r[i]; ++i)
                  o !== t && o.__eeOnceListener__ !== t || (2 === r.length ? n[e] = r[i ? 0 : 1] : r.splice(i, 1));
              else
                r !== t && r.__eeOnceListener__ !== t || delete n[e];
              return this
            },
            emit: a = function (e) {
              var t, n, r, o, i;
              if (m.call(this, "__ee__") && (o = this.__ee__[e]))
                if ("object" === (void 0 === o ? "undefined" : c(o))) {
                  for (n = arguments.length,
                    i = new Array(n - 1),
                    t = 1; t < n; ++t)
                    i[t - 1] = arguments[t];
                  for (o = o.slice(),
                    t = 0; r = o[t]; ++t)
                    f.call(r, this, i)
                } else
                  switch (arguments.length) {
                    case 1:
                      g.call(o, this);
                      break;
                    case 2:
                      g.call(o, this, arguments[1]);
                      break;
                    case 3:
                      g.call(o, this, arguments[1], arguments[2]);
                      break;
                    default:
                      for (n = arguments.length,
                        i = new Array(n - 1),
                        t = 1; t < n; ++t)
                        i[t - 1] = arguments[t];
                      f.call(o, this, i)
                  }
            }
          },
          l = {
            on: d(r),
            once: d(o),
            off: d(i),
            emit: d(a)
          },
          u = y({}, l),
          e.exports = t = function (e) {
            return null == e ? h(u) : y(Object(e), l)
          },
          t.methods = s
      }, function (e, t, n) {
        var r = n(13),
          o = n(21),
          i = n(22),
          a = n(23);
        (e.exports = function (e, t) {
          var n, i, s, l, u;
          return arguments.length < 2 || "string" != typeof e ? (l = t,
              t = e,
              e = null) : l = arguments[2],
            null == e ? (n = s = !0,
              i = !1) : (n = a.call(e, "c"),
              i = a.call(e, "e"),
              s = a.call(e, "w")),
            u = {
              value: t,
              configurable: n,
              enumerable: i,
              writable: s
            },
            l ? r(o(l), u) : u
        }).gs = function (e, t, n) {
          var s, l, u, c;
          return "string" != typeof e ? (u = n,
              n = t,
              t = e,
              e = null) : u = arguments[3],
            null == t ? t = void 0 : i(t) ? null == n ? n = void 0 : i(n) || (u = n,
              n = void 0) : (u = t,
              t = n = void 0),
            null == e ? (s = !0,
              l = !1) : (s = a.call(e, "c"),
              l = a.call(e, "e")),
            c = {
              get: t,
              set: n,
              configurable: s,
              enumerable: l
            },
            u ? r(o(u), c) : c
        }
      }, function (e, t, n) {
        e.exports = n(14)() ? Object.assign : n(15)
      }, function (e, t, n) {
        e.exports = function () {
          var e, t = Object.assign;
          return "function" == typeof t && (t(e = {
              foo: "raz"
            }, {
              bar: "dwa"
            }, {
              trzy: "trzy"
            }),
            e.foo + e.bar + e.trzy === "razdwatrzy")
        }
      }, function (e, t, n) {
        var r = n(16),
          o = n(20),
          i = Math.max;
        e.exports = function (e, t) {
          var n, a, s, l = i(arguments.length, 2);
          for (e = Object(o(e)),
            s = function (r) {
              try {
                e[r] = t[r]
              } catch (e) {
                n || (n = e)
              }
            },
            a = 1; a < l; ++a)
            t = arguments[a],
            r(t).forEach(s);
          if (void 0 !== n)
            throw n;
          return e
        }
      }, function (e, t, n) {
        e.exports = n(17)() ? Object.keys : n(18)
      }, function (e, t, n) {
        e.exports = function () {
          try {
            return Object.keys("primitive"),
              !0
          } catch (e) {
            return !1
          }
        }
      }, function (e, t, n) {
        var r = n(1),
          o = Object.keys;
        e.exports = function (e) {
          return o(r(e) ? Object(e) : e)
        }
      }, function (e, t, n) {
        e.exports = function () {}
      }, function (e, t, n) {
        var r = n(1);
        e.exports = function (e) {
          if (!r(e))
            throw new TypeError("Cannot use null or undefined");
          return e
        }
      }, function (e, t, n) {
        var r = n(1),
          o = Array.prototype.forEach,
          i = Object.create;
        e.exports = function (e) {
          var t = i(null);
          return o.call(arguments, function (e) {
              r(e) && function (e, t) {
                var n;
                for (n in e)
                  t[n] = e[n]
              }(Object(e), t)
            }),
            t
        }
      }, function (e, t, n) {
        e.exports = function (e) {
          return "function" == typeof e
        }
      }, function (e, t, n) {
        e.exports = n(24)() ? String.prototype.contains : n(25)
      }, function (e, t, n) {
        var r = "razdwatrzy";
        e.exports = function () {
          return "function" == typeof r.contains && !0 === r.contains("dwa") && !1 === r.contains("foo")
        }
      }, function (e, t, n) {
        var r = String.prototype.indexOf;
        e.exports = function (e) {
          return r.call(this, e, arguments[1]) > -1
        }
      }, function (e, t, n) {
        e.exports = function (e) {
          if ("function" != typeof e)
            throw new TypeError(e + " is not a function");
          return e
        }
      }, function (e, t, n) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var r = function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                  r.configurable = !0,
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r)
              }
            }
            return function (t, n, r) {
              return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
          }(),
          o = function () {
            function e() {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                name: "xgplayer",
                version: 1,
                db: null,
                ojstore: {
                  name: "xg-m4a",
                  keypath: "vid"
                }
              };
              ! function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function")
              }(this, e),
              this.indexedDB = window.indexedDB || window.webkitindexedDB,
                this.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange,
                this.myDB = t
            }
            return r(e, [{
                key: "openDB",
                value: function (e) {
                  var t = this,
                    n = this,
                    r = this.myDB.version || 1,
                    o = n.indexedDB.open(n.myDB.name, r);
                  o.onerror = function (e) {},
                    o.onsuccess = function (r) {
                      t.myDB.db = r.target.result,
                        e.call(n)
                    },
                    o.onupgradeneeded = function (e) {
                      var t = e.target.result;
                      e.target.transaction,
                        t.objectStoreNames.contains(n.myDB.ojstore.name) || t.createObjectStore(n.myDB.ojstore.name, {
                          keyPath: n.myDB.ojstore.keypath
                        })
                    }
                }
              }, {
                key: "deletedb",
                value: function () {
                  this.indexedDB.deleteDatabase(this.myDB.name)
                }
              }, {
                key: "closeDB",
                value: function () {
                  this.myDB.db.close()
                }
              }, {
                key: "addData",
                value: function (e, t) {
                  for (var n = this.myDB.db.transaction(e, "readwrite").objectStore(e), r = void 0, o = 0; o < t.length; o++)
                    (r = n.add(t[o])).onerror = function () {},
                    r.onsuccess = function () {}
                }
              }, {
                key: "putData",
                value: function (e, t) {
                  for (var n = this.myDB.db.transaction(e, "readwrite").objectStore(e), r = void 0, o = 0; o < t.length; o++)
                    (r = n.put(t[o])).onerror = function () {},
                    r.onsuccess = function () {}
                }
              }, {
                key: "getDataByKey",
                value: function (e, t, n) {
                  var r = this,
                    o = this.myDB.db.transaction(e, "readwrite").objectStore(e).get(t);
                  o.onerror = function () {
                      n.call(r, null)
                    },
                    o.onsuccess = function (e) {
                      var t = e.target.result;
                      n.call(r, t)
                    }
                }
              }, {
                key: "deleteData",
                value: function (e, t) {
                  this.myDB.db.transaction(e, "readwrite").objectStore(e).delete(t)
                }
              }, {
                key: "clearData",
                value: function (e) {
                  this.myDB.db.transaction(e, "readwrite").objectStore(e).clear()
                }
              }]),
              e
          }();
        t.default = o,
          e.exports = t.default
      }, function (e, t, n) {
        function r(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }
        var o = r(n(0)),
          i = r(n(2));
        o.default.install("volume", function () {
          var e = this,
            t = o.default.util,
            n = o.default.sniffer;
          e.config.autoplayMuted && (e.config.volume = e.config.autoplay ? 0 : e.config.volume),
            e.once("canplay", function () {
              e.config.autoplay && e.config.autoplayMuted ? e.volume = 0 : e.volume = e.config.volume
            });
          var r = e.config.volume;
          if ("mobile" !== n.device) {
            var a = {
                muted: "M920.4 439.808l-108.544-109.056-72.704 72.704 109.568 108.544-109.056 108.544 72.704 72.704 108.032-109.568 108.544 109.056 72.704-72.704-109.568-108.032 109.056-108.544-72.704-72.704-108.032 109.568z",
                small: "M795.648 693.248l-72.704-72.704c27.756-27.789 44.921-66.162 44.921-108.544s-17.165-80.755-44.922-108.546l0.002 0.002 72.704-72.704c46.713 46.235 75.639 110.363 75.639 181.248s-28.926 135.013-75.617 181.227l-0.021 0.021zM795.648 693.248l-72.704-72.704c27.756-27.789 44.921-66.162 44.921-108.544s-17.165-80.755-44.922-108.546l0.002 0.002 72.704-72.704c46.713 46.235 75.639 110.363 75.639 181.248s-28.926 135.013-75.617 181.227l-0.021 0.021z",
                large: "M940.632 837.632l-72.192-72.192c65.114-64.745 105.412-154.386 105.412-253.44s-40.299-188.695-105.396-253.424l-0.016-0.016 72.192-72.192c83.639 83.197 135.401 198.37 135.401 325.632s-51.762 242.434-135.381 325.612l-0.020 0.020zM795.648 693.248l-72.704-72.704c27.756-27.789 44.921-66.162 44.921-108.544s-17.165-80.755-44.922-108.546l0.002 0.002 72.704-72.704c46.713 46.235 75.639 110.363 75.639 181.248s-28.926 135.013-75.617 181.227l-0.021 0.021z"
              },
              s = function (e) {
                return 0 === e ? "muted" : e < .5 ? "small" : "large"
              },
              l = a[s(r)],
              u = a[s(r)],
              c = t.createDom("xg-volume", '<xg-icon class="xgplayer-icon">\n                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">\n                                                        <path transform="scale(0.0220625 0.0220625)" d="M358.4 358.4h-204.8v307.2h204.8l256 256v-819.2l-256 256z"></path>\n                                                        <path transform="scale(0.0220625 0.0220625)" d="' + u + '"></path>\n                                                    </svg>\n                                                </xg-icon>\n                                                <xg-slider class="xgplayer-slider" tabindex="2">\n                                                    <xg-bar class="xgplayer-bar">\n                                                        <xg-drag class="xgplayer-drag"></xg-drag>\n                                                    </xg-bar>\n                                                </xg-slider>', {}, "xgplayer-volume");
            e.controls.appendChild(c);
            var d = void 0,
              p = c.querySelector(".xgplayer-slider"),
              f = c.querySelector(".xgplayer-bar"),
              g = c.querySelector(".xgplayer-drag"),
              h = c.querySelector(".xgplayer-icon");
            g.style.height = 100 * e.config.volume + "%";
            var v = c.querySelectorAll("path")[1],
              y = new i.default({
                progress: function (e, t) {
                  var n = y.toSVGString(e);
                  v.setAttribute("d", n),
                    l = n
                },
                from: l,
                to: a.large
              }),
              m = null;
            p.volume = e.config.volume,
              ["touchstart", "mousedown"].forEach(function (n) {
                f.addEventListener(n, function (n) {
                  n.preventDefault(),
                    n.stopPropagation(),
                    e.video.muted = !1,
                    p.focus(),
                    t.event(n),
                    d = f.getBoundingClientRect().height,
                    n.clientX;
                  var r = n.clientY,
                    o = g.getBoundingClientRect().height,
                    i = !1,
                    a = function (n) {
                      n.preventDefault(),
                        n.stopPropagation(),
                        t.event(n),
                        i = !0;
                      var a = o - n.clientY + r,
                        s = a / d;
                      g.style.height = a + "px",
                        e.volume = Math.max(Math.min(s, 1), .01)
                    },
                    s = function n(r) {
                      if (r.preventDefault(),
                        r.stopPropagation(),
                        t.event(r),
                        window.removeEventListener("mousemove", a),
                        window.removeEventListener("touchmove", a),
                        window.removeEventListener("mouseup", n),
                        window.removeEventListener("touchend", n),
                        m || (m = f.getBoundingClientRect()),
                        !i) {
                        var o = m.height - (r.clientY - m.top),
                          s = o / m.height;
                        g.style.height = o + "px",
                          s <= 0 && (e.volume > 0 ? g.volume = e.video.volume : s = g.volume),
                          e.volume = Math.max(Math.min(s, 1), .01)
                      }
                      p.volume = e.volume,
                        i = !1
                    };
                  return window.addEventListener("mousemove", a),
                    window.addEventListener("touchmove", a),
                    window.addEventListener("mouseup", s),
                    window.addEventListener("touchend", s),
                    !1
                })
              }),
              ["touchstart", "mousedown"].forEach(function (t) {
                h.addEventListener(t, function (t) {
                  t.preventDefault(),
                    t.stopPropagation(),
                    e.video.muted = !1,
                    0 === e.volume ? e.volume = p.volume : e.volume = 0
                })
              }),
              h.addEventListener("mouseenter", function (n) {
                n.preventDefault(),
                  n.stopPropagation(),
                  t.addClass(e.root, "xgplayer-volume-active"),
                  c.focus()
              }),
              c.addEventListener("blur", function (n) {
                n.preventDefault(),
                  n.stopPropagation(),
                  t.removeClass(e.root, "xgplayer-volume-active")
              }),
              c.addEventListener("mouseleave", function (n) {
                n.preventDefault(),
                  n.stopPropagation(),
                  t.removeClass(e.root, "xgplayer-volume-active")
              });
            var b = null;
            e.on("volumechange", function () {
              b && clearTimeout(b),
                b = setTimeout(function () {
                  y.reset(a[s(e.volume)], l),
                    l = a[s[e.volume]],
                    d || (d = f.getBoundingClientRect().height || 76),
                    g.style.height = e.volume * d + "px"
                }, 50)
            })
          } else {
            var x = {
                muted: "M920.4 439.808l-108.544-109.056-72.704 72.704 109.568 108.544-109.056 108.544 72.704 72.704 108.032-109.568 108.544 109.056 72.704-72.704-109.568-108.032 109.056-108.544-72.704-72.704-108.032 109.568z",
                large: "M940.632 837.632l-72.192-72.192c65.114-64.745 105.412-154.386 105.412-253.44s-40.299-188.695-105.396-253.424l-0.016-0.016 72.192-72.192c83.639 83.197 135.401 198.37 135.401 325.632s-51.762 242.434-135.381 325.612l-0.020 0.020zM795.648 693.248l-72.704-72.704c27.756-27.789 44.921-66.162 44.921-108.544s-17.165-80.755-44.922-108.546l0.002 0.002 72.704-72.704c46.713 46.235 75.639 110.363 75.639 181.248s-28.926 135.013-75.617 181.227l-0.021 0.021z"
              },
              w = function (e) {
                return 0 === e ? "muted" : "large"
              },
              _ = x[w(r)],
              k = x[w(r)],
              E = t.createDom("xg-volume", '<xg-icon class="xgplayer-icon">\n                                                      <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">\n                                                          <path transform="scale(0.0220625 0.0220625)" d="M358.4 358.4h-204.8v307.2h204.8l256 256v-819.2l-256 256z"></path>\n                                                          <path transform="scale(0.0220625 0.0220625)" d="' + k + '"></path>\n                                                      </svg>\n                                                  </xg-icon>', {}, "xgplayer-volume");
            e.controls.appendChild(E);
            var C = E.querySelector(".xgplayer-icon"),
              S = E.querySelectorAll("path")[1],
              T = new i.default({
                progress: function (e, t) {
                  var n = T.toSVGString(e);
                  S.setAttribute("d", n),
                    _ = n
                },
                from: _,
                to: x.large
              });
            ["touchend", "mousedown"].forEach(function (t) {
              C.addEventListener(t, function (t) {
                t.preventDefault(),
                  t.stopPropagation(),
                  e.video.muted ? (e.video.muted = !1,
                    e.volume = 1,
                    T.reset(x.large, x.muted),
                    _ = x.large) : (e.volume = 0,
                    e.video.muted = !0,
                    T.reset(x.muted, x.large),
                    _ = x.muted)
              })
            })
          }
        })
      }, function (e, t, n) {
        var r, o, i;
        i = function () {
            function e(e) {
              var t = e[0][0],
                n = e[0][1],
                r = t,
                o = n;
              return e.forEach(function (e) {
                  var i = e[0],
                    a = e[2],
                    s = e[4],
                    l = e[6],
                    u = e[1],
                    c = e[3],
                    d = e[5],
                    p = e[7];
                  t = Math.min(t, i, a, s, l),
                    n = Math.min(n, u, c, d, p),
                    r = Math.max(r, i, a, s, l),
                    o = Math.max(o, u, c, d, p)
                }),
                [t, n, r, o]
            }

            function t(e, t, n, r, o, i, a, s, l, u) {
              var c = (n - e) * l + e,
                d = (r - t) * l + t,
                p = (o - n) * l + n,
                f = (i - r) * l + r,
                g = (p - c) * l + c,
                h = (f - d) * l + d,
                v = (((a - o) * l + o - p) * l + p - g) * l + g,
                y = (((s - i) * l + i - f) * l + f - h) * l + h;
              return u ? [v, y, g, h, c, d, e, t] : [e, t, c, d, g, h, v, y]
            }
            var n = function (e, t) {
                if (Array.isArray(e))
                  return e;
                if (Symbol.iterator in Object(e))
                  return function (e, t) {
                    var n = [],
                      r = !0,
                      o = !1,
                      i = void 0;
                    try {
                      for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value),
                          !t || n.length !== t); r = !0)
                      ;
                    } catch (e) {
                      o = !0,
                        i = e
                    } finally {
                      try {
                        !r && s.return && s.return()
                      } finally {
                        if (o)
                          throw i
                      }
                    }
                    return n
                  }(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
              },
              r = 2 * Math.PI,
              o = function (e, t, n, r, o, i, a) {
                var s = e.x,
                  l = e.y;
                return {
                  x: r * (s *= t) - o * (l *= n) + i,
                  y: o * s + r * l + a
                }
              },
              i = function (e, t) {
                var n = 4 / 3 * Math.tan(t / 4),
                  r = Math.cos(e),
                  o = Math.sin(e),
                  i = Math.cos(e + t),
                  a = Math.sin(e + t);
                return [{
                  x: r - o * n,
                  y: o + r * n
                }, {
                  x: i + a * n,
                  y: a - i * n
                }, {
                  x: i,
                  y: a
                }]
              },
              a = function (e, t, n, r) {
                var o = e * r - t * n < 0 ? -1 : 1,
                  i = (e * n + t * r) / (Math.sqrt(e * e + t * t) * Math.sqrt(e * e + t * t));
                return i > 1 && (i = 1),
                  i < -1 && (i = -1),
                  o * Math.acos(i)
              },
              s = function (e) {
                var t = e.px,
                  s = e.py,
                  l = e.cx,
                  u = e.cy,
                  c = e.rx,
                  d = e.ry,
                  p = e.xAxisRotation,
                  f = void 0 === p ? 0 : p,
                  g = e.largeArcFlag,
                  h = void 0 === g ? 0 : g,
                  v = e.sweepFlag,
                  y = void 0 === v ? 0 : v,
                  m = [];
                if (0 === c || 0 === d)
                  return [];
                var b = Math.sin(f * r / 360),
                  x = Math.cos(f * r / 360),
                  w = x * (t - l) / 2 + b * (s - u) / 2,
                  _ = -b * (t - l) / 2 + x * (s - u) / 2;
                if (0 === w && 0 === _)
                  return [];
                c = Math.abs(c),
                  d = Math.abs(d);
                var k = Math.pow(w, 2) / Math.pow(c, 2) + Math.pow(_, 2) / Math.pow(d, 2);
                k > 1 && (c *= Math.sqrt(k),
                  d *= Math.sqrt(k));
                var E = function (e, t, n, o, i, s, l, u, c, d, p, f) {
                    var g = Math.pow(i, 2),
                      h = Math.pow(s, 2),
                      v = Math.pow(p, 2),
                      y = Math.pow(f, 2),
                      m = g * h - g * y - h * v;
                    m < 0 && (m = 0),
                      m /= g * y + h * v;
                    var b = (m = Math.sqrt(m) * (l === u ? -1 : 1)) * i / s * f,
                      x = m * -s / i * p,
                      w = d * b - c * x + (e + n) / 2,
                      _ = c * b + d * x + (t + o) / 2,
                      k = (p - b) / i,
                      E = (f - x) / s,
                      C = (-p - b) / i,
                      S = (-f - x) / s,
                      T = a(1, 0, k, E),
                      P = a(k, E, C, S);
                    return 0 === u && P > 0 && (P -= r),
                      1 === u && P < 0 && (P += r),
                      [w, _, T, P]
                  }(t, s, l, u, c, d, h, y, b, x, w, _),
                  C = n(E, 4),
                  S = C[0],
                  T = C[1],
                  P = C[2],
                  O = C[3],
                  M = Math.max(Math.ceil(Math.abs(O) / (r / 4)), 1);
                O /= M;
                for (var D = 0; D < M; D++)
                  m.push(i(P, O)),
                  P += O;
                return m.map(function (e) {
                  var t = o(e[0], c, d, x, b, S, T),
                    n = t.x,
                    r = t.y,
                    i = o(e[1], c, d, x, b, S, T),
                    a = i.x,
                    s = i.y,
                    l = o(e[2], c, d, x, b, S, T);
                  return {
                    x1: n,
                    y1: r,
                    x2: a,
                    y2: s,
                    x: l.x,
                    y: l.y
                  }
                })
              },
              l = {
                a: 7,
                c: 6,
                h: 1,
                l: 2,
                m: 2,
                q: 4,
                s: 4,
                t: 2,
                v: 1,
                z: 0
              },
              u = {};
            return u.parser = function (e) {
                var t = [];
                return e.replace(/([astvzqmhlc])([^astvzqmhlc]*)/gi, function (e, n, r) {
                    var o = n.toLowerCase();
                    for (r = function (e) {
                        var t = r.match(/-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi);
                        return t ? t.map(Number) : []
                      }(),
                      "m" == o && r.length > 2 && (t.push([n].concat(r.splice(0, 2))),
                        o = "l",
                        n = "m" == n ? "l" : "L");;) {
                      if (r.length == l[o])
                        return r.unshift(n),
                          t.push(r);
                      if (r.length < l[o])
                        throw new Error("malformed path data");
                      t.push([n].concat(r.splice(0, l[o])))
                    }
                  }),
                  t
              },
              u.lerpCurve = function (e, t, n) {
                return u.lerpPoints(e[0], e[1], t[0], t[1], n).concat(u.lerpPoints(e[2], e[3], t[2], t[3], n)).concat(u.lerpPoints(e[4], e[5], t[4], t[5], n)).concat(u.lerpPoints(e[6], e[7], t[6], t[7], n))
              },
              u.lerpPoints = function (e, t, n, r, o) {
                return [e + (n - e) * o, t + (r - t) * o]
              },
              u.q2b = function (e, t, n, r, o, i) {
                return [e, t, (e + 2 * n) / 3, (t + 2 * r) / 3, (o + 2 * n) / 3, (i + 2 * r) / 3, o, i]
              },
              u.path2shapes = function (e) {
                for (var t = u.parser(e), n = 0, r = 0, o = 0, i = t.length, a = [], l = null, c = void 0, d = void 0, p = void 0, f = void 0, g = void 0, h = void 0, v = void 0; o < i; o++) {
                  var y = t[o],
                    m = y[0],
                    b = t[o - 1];
                  switch (m) {
                    case "m":
                      a[g = a.length] = [],
                        l = a[g],
                        n += y[1],
                        r += y[2];
                      break;
                    case "M":
                      a[g = a.length] = [],
                        l = a[g],
                        n = y[1],
                        r = y[2];
                      break;
                    case "l":
                      l.push([n, r, n, r, n, r, n + y[1], r + y[2]]),
                        n += y[1],
                        r += y[2];
                      break;
                    case "L":
                      l.push([n, r, y[1], y[2], y[1], y[2], y[1], y[2]]),
                        n = y[1],
                        r = y[2];
                      break;
                    case "h":
                      l.push([n, r, n, r, n, r, n + y[1], r]),
                        n += y[1];
                      break;
                    case "H":
                      l.push([n, r, y[1], r, y[1], r, y[1], r]),
                        n = y[1];
                      break;
                    case "v":
                      l.push([n, r, n, r, n, r, n, r + y[1]]),
                        r += y[1];
                      break;
                    case "V":
                      l.push([n, r, n, y[1], n, y[1], n, y[1]]),
                        r = y[1];
                      break;
                    case "C":
                      l.push([n, r, y[1], y[2], y[3], y[4], y[5], y[6]]),
                        n = y[5],
                        r = y[6];
                      break;
                    case "S":
                      "C" === b[0] || "c" === b[0] ? l.push([n, r, n + b[5] - b[3], r + b[6] - b[4], y[1], y[2], y[3], y[4]]) : "S" !== b[0] && "s" !== b[0] || l.push([n, r, n + b[3] - b[1], r + b[4] - b[2], y[1], y[2], y[3], y[4]]),
                        n = y[3],
                        r = y[4];
                      break;
                    case "c":
                      l.push([n, r, n + y[1], r + y[2], n + y[3], r + y[4], n + y[5], r + y[6]]),
                        n += y[5],
                        r += y[6];
                      break;
                    case "s":
                      "C" === b[0] || "c" === b[0] ? l.push([n, r, n + b[5] - b[3], r + b[6] - b[4], n + y[1], r + y[2], n + y[3], r + y[4]]) : "S" !== b[0] && "s" !== b[0] || l.push([n, r, n + b[3] - b[1], r + b[4] - b[2], n + y[1], r + y[2], n + y[3], r + y[4]]),
                        n += y[3],
                        r += y[4];
                      break;
                    case "a":
                      v = (h = s({
                          rx: y[1],
                          ry: y[2],
                          px: n,
                          py: r,
                          xAxisRotation: y[3],
                          largeArcFlag: y[4],
                          sweepFlag: y[5],
                          cx: n + y[6],
                          cy: n + y[7]
                        }))[h.length - 1],
                        h.forEach(function (e, t) {
                          0 === t ? l.push([n, r, e.x1, e.y1, e.x2, e.y2, e.x, e.y]) : l.push([h[t - 1].x, h[t - 1].y, e.x1, e.y1, e.x2, e.y2, e.x, e.y])
                        }),
                        n = v.x,
                        r = v.y;
                      break;
                    case "A":
                      v = (h = s({
                          rx: y[1],
                          ry: y[2],
                          px: n,
                          py: r,
                          xAxisRotation: y[3],
                          largeArcFlag: y[4],
                          sweepFlag: y[5],
                          cx: y[6],
                          cy: y[7]
                        }))[h.length - 1],
                        h.forEach(function (e, t) {
                          0 === t ? l.push([n, r, e.x1, e.y1, e.x2, e.y2, e.x, e.y]) : l.push([h[t - 1].x, h[t - 1].y, e.x1, e.y1, e.x2, e.y2, e.x, e.y])
                        }),
                        n = v.x,
                        r = v.y;
                      break;
                    case "Q":
                      l.push(u.q2b(n, r, y[1], y[2], y[3], y[4])),
                        n = y[3],
                        r = y[4];
                      break;
                    case "q":
                      l.push(u.q2b(n, r, n + y[1], r + y[2], y[3] + n, y[4] + r)),
                        n += y[3],
                        r += y[4];
                      break;
                    case "T":
                      "Q" === b[0] || "q" === b[0] ? (p = n + b[3] - b[1],
                          f = r + b[4] - b[2],
                          l.push(u.q2b(n, r, p, f, y[1], y[2]))) : "T" !== b[0] && "t" !== b[0] || (l.push(u.q2b(n, r, n + n - p, r + r - f, y[1], y[2])),
                          p = n + n - p,
                          f = r + r - f),
                        n = y[1],
                        r = y[2];
                      break;
                    case "t":
                      "Q" === b[0] || "q" === b[0] ? (p = n + b[3] - b[1],
                          f = r + b[4] - b[2],
                          l.push(u.q2b(n, r, p, f, n + y[1], r + y[2]))) : "T" !== b[0] && "t" !== b[0] || (l.push(u.q2b(n, r, n + n - p, r + r - f, n + y[1], r + y[2])),
                          p = n + n - p,
                          f = r + r - f),
                        n += y[1],
                        r += y[2];
                      break;
                    case "Z":
                    case "z":
                      c = l[0][0],
                        d = l[0][1],
                        l.push([n, r, c, d, c, d, c, d])
                  }
                }
                return a
              },
              u._upCurves = function (e, t) {
                for (var n = 0, r = 0, o = e.length; n < t; n++)
                  e.push(e[r].slice(0)),
                  ++r > o - 1 && (r -= o)
              },
              u._splitCurves = function (e, n) {
                for (var r, o, i, a, s, l, u, c, d, p = 0, f = 0; p < n; p++) {
                  var g = e[f],
                    h = (r = g[0],
                      o = g[1],
                      i = g[2],
                      a = g[3],
                      s = g[4],
                      l = g[5],
                      u = g[6],
                      c = g[7], {
                        left: t(r, o, i, a, s, l, u, c, d = .5),
                        right: t(u, c, s, l, i, a, r, o, 1 - d, !0)
                      });
                  e.splice(f, 1),
                    e.splice(f, 0, h.left, h.right),
                    (f += 2) >= e.length - 1 && (f = 0)
                }
              },
              u._upShapes = function (e, t) {
                for (var n = function (t) {
                    var n = [];
                    e[e.length - 1].forEach(function (e) {
                        n.push(e.slice(0))
                      }),
                      e.push(n)
                  }, r = 0; r < t; r++)
                  n()
              },
              u._subShapes = function (e, t, n) {
                for (var r = function (e) {
                    var n = t[t.length - 1],
                      r = [],
                      o = n[0][0],
                      i = n[0][1];
                    n.forEach(function () {
                        r.push([o, i, o, i, o, i, o, i])
                      }),
                      t.push(r)
                  }, o = 0; o < n; o++)
                  r()
              },
              u.lerp = function (e, t, n) {
                return u._lerp(u.path2shapes(e), u.path2shapes(t), n)
              },
              u.MIM_CURVES_COUNT = 100,
              u._preprocessing = function (t, n) {
                var r = t.length,
                  o = n.length,
                  i = JSON.parse(JSON.stringify(t)),
                  a = JSON.parse(JSON.stringify(n));
                return r > o ? u._subShapes(i, a, r - o) : r < o && u._upShapes(i, o - r),
                  (i = function (t, n) {
                    var r = function (e) {
                        for (var t = [], n = 0; n < e; n++)
                          t.push(n);
                        return function (e) {
                          var t = [],
                            n = [];
                          return function e(r) {
                            var o, i;
                            for (o = 0; o < r.length; o++)
                              i = r.splice(o, 1)[0],
                              n.push(i),
                              0 == r.length && t.push(n.slice()),
                              e(r),
                              r.splice(o, 0, i),
                              n.pop();
                            return t
                          }(e)
                        }(t)
                      }(t.length),
                      o = [];
                    r.forEach(function (r) {
                        var i = 0;
                        r.forEach(function (r) {
                            var o, a;
                            i += (o = e(t[r]),
                              a = e(n[r]),
                              Math.sqrt(Math.pow(o[0] - a[0], 2) + Math.pow(o[1] - a[1], 2)) + Math.sqrt(Math.pow(o[2] - a[2], 2) + Math.pow(o[3] - a[3], 2)))
                          }),
                          o.push({
                            index: r,
                            distance: i
                          })
                      }),
                      o.sort(function (e, t) {
                        return e.distance - t.distance
                      });
                    var i = [];
                    return o[0].index.forEach(function (e) {
                        i.push(t[e])
                      }),
                      i
                  }(i, a)).forEach(function (e, t) {
                    var n = e.length,
                      r = a[t].length;
                    n > r ? n < u.MIM_CURVES_COUNT ? (u._splitCurves(e, u.MIM_CURVES_COUNT - n),
                      u._splitCurves(a[t], u.MIM_CURVES_COUNT - r)) : u._splitCurves(a[t], n - r) : n < r && (r < u.MIM_CURVES_COUNT ? (u._splitCurves(e, u.MIM_CURVES_COUNT - n),
                      u._splitCurves(a[t], u.MIM_CURVES_COUNT - r)) : u._splitCurves(e, r - n))
                  }),
                  i.forEach(function (e, t) {
                    i[t] = function (e, t) {
                      var n = function (e) {
                          for (var t = [], n = 0; n < e; n++) {
                            for (var r = [], o = 0; o < e; o++) {
                              var i = o + n;
                              i > e - 1 && (i -= e),
                                r[i] = o
                            }
                            t.push(r)
                          }
                          return t
                        }(e.length),
                        r = [];
                      n.forEach(function (n) {
                          var o = 0,
                            i = 0;
                          n.forEach(function (n) {
                              var r, a, s, l, u, c, d, p, f, g, h, v, y, m, b, x, w, _;
                              o += (r = e[n],
                                a = t[i++],
                                s = r[0],
                                l = r[2],
                                u = r[4],
                                c = r[6],
                                d = r[1],
                                p = r[3],
                                f = r[5],
                                g = r[7],
                                h = a[0],
                                v = a[2],
                                y = a[4],
                                m = a[6],
                                b = a[1],
                                x = a[3],
                                w = a[5],
                                _ = a[7],
                                Math.sqrt(Math.pow(h - s, 2) + Math.pow(b - d, 2)) + Math.sqrt(Math.pow(v - l, 2) + Math.pow(x - p, 2)) + Math.sqrt(Math.pow(y - u, 2) + Math.pow(w - f, 2)) + Math.sqrt(Math.pow(m - c, 2) + Math.pow(_ - g, 2)))
                            }),
                            r.push({
                              index: n,
                              distance: o
                            })
                        }),
                        r.sort(function (e, t) {
                          return e.distance - t.distance
                        });
                      var o = [];
                      return r[0].index.forEach(function (t) {
                          o.push(e[t])
                        }),
                        o
                    }(e, a[t])
                  }),
                  [i, a]
              },
              u._lerp = function (e, t, n) {
                var r = [];
                return e.forEach(function (e, o) {
                    var i = [];
                    e.forEach(function (e, r) {
                        i.push(u.lerpCurve(e, t[o][r], n))
                      }),
                      r.push(i)
                  }),
                  r
              },
              u.animate = function (e) {
                var t = u.path2shapes(e.from),
                  n = u.path2shapes(e.to),
                  r = u._preprocessing(t, n),
                  o = new Date,
                  i = e.end || function () {},
                  a = e.progress || function () {},
                  s = e.begin || function () {},
                  l = e.easing || function (e) {
                    return e
                  },
                  c = null,
                  d = null,
                  p = e.time;
                s(t),
                  function e() {
                    var t = new Date - o;
                    if (t >= p)
                      return a(d = n, 1),
                        i(d),
                        void cancelAnimationFrame(c);
                    var s = l(t / p);
                    d = u._lerp(r[0], r[1], s),
                      a(d, s),
                      c = requestAnimationFrame(e)
                  }()
              },
              u
          },
          "object" === ("function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
              return typeof e
            } :
            function (e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
          )(t) && void 0 !== e ? e.exports = i() : void 0 === (o = "function" == typeof (r = i) ? r.call(t, n, t, e) : r) || (e.exports = o)
      }, function (e, t, n) {
        ! function () {
          for (var e = 0, t = ["webkit", "moz"], n = 0; n < t.length && !window.requestAnimationFrame; ++n)
            window.requestAnimationFrame = window[t[n] + "RequestAnimationFrame"],
            window.cancelAnimationFrame = window[t[n] + "CancelAnimationFrame"] || window[t[n] + "CancelRequestAnimationFrame"];
          window.requestAnimationFrame || (window.requestAnimationFrame = function (t, n) {
              var r = (new Date).getTime(),
                o = Math.max(0, 16 - (r - e)),
                i = window.setTimeout(function () {
                  t(r + o)
                }, o);
              return e = r + o,
                i
            }),
            window.cancelAnimationFrame || (window.cancelAnimationFrame = function (e) {
              clearTimeout(e)
            })
        }()
      }, function (e, t, n) {
        var r, o = (r = n(0)) && r.__esModule ? r : {
          default: r
        };
        o.default.install("time", function () {
          var e = this,
            t = o.default.util,
            n = t.format,
            r = t.createDom("xg-time", "<span>" + (e.currentTime || n(0)) + "</span><em>" + (e.duration || n(0)) + "</em>", {}, "xgplayer-time");
          e.controls.appendChild(r);
          var i = function () {
            "audio" === e.videoConfig.mediaType && e.isProgressMoving && e.dash || (r.innerHTML = "<span>" + n(e.currentTime || 0) + "</span><em>" + n(e.duration))
          };
          e.on("durationchange", i),
            e.on("timeupdate", i)
        })
      }, function (e, t, n) {
        var r, o = (r = n(0)) && r.__esModule ? r : {
          default: r
        };
        o.default.install("textTrack", function () {
          if (-1 !== navigator.userAgent.indexOf("Chrome")) {
            var e = this,
              t = o.default.util,
              n = (o.default.sniffer,
                t.createDom("xg-textTrack", "", {
                  tabindex: 7
                }, "xgplayer-textTrack")),
              r = e.controls,
              i = e.config.textTrack;
            i && Array.isArray(i) && i.length > 1 && (t.addClass(e.root, "xgplayer-is-textTrack"),
                e.on("canplay", function () {
                  var o = ["<ul>"];
                  o.push("<li class=''}'>关闭</li>"),
                    i.forEach(function (e) {
                      o.push("<li class='" + (e.default ? "textTrack" : "") + "'>" + e.label + "</li>")
                    });
                  var a = e.config.lang && "zh-cn" === e.config.lang ? "字幕" : "Caption";
                  o.push('</ul><p class="name"><em>' + a + "</em></p>");
                  var s = r.querySelector(".xgplayer-textTrack");
                  s ? (s.innerHTML = o.join(""),
                    s.querySelector(".name").addEventListener("mouseenter", function (n) {
                      n.preventDefault(),
                        n.stopPropagation(),
                        t.addClass(e.root, "xgplayer-textTrack-active"),
                        s.focus()
                    })) : (n.innerHTML = o.join(""),
                    n.querySelector(".name").addEventListener("mouseenter", function (r) {
                      r.preventDefault(),
                        r.stopPropagation(),
                        t.addClass(e.root, "xgplayer-textTrack-active"),
                        n.focus()
                    }),
                    r.appendChild(n))
                })),
              ["touchend", "click"].forEach(function (r) {
                n.addEventListener(r, function (n) {
                  n.preventDefault(),
                    n.stopPropagation();
                  var r = n.target || n.srcElement;
                  if (r && "li" === r.tagName.toLocaleLowerCase()) {
                    Array.prototype.forEach.call(r.parentNode.childNodes, function (e) {
                        t.removeClass(e, "textTrack")
                      }),
                      t.addClass(r, "textTrack");
                    var o = e.root.getElementsByTagName("Track");
                    "关闭" === r.innerHTML ? (o[0].track.mode = "hidden",
                      t.removeClass(e.root, "xgplayer-textTrack-active")) : (t.hasClass(e.root, "xgplayer-textTrack-active") || t.addClass(e.root, "xgplayer-textTrack-active"),
                      o[0].track.mode = "showing",
                      i.some(function (e) {
                        if (e.label === r.innerHTML)
                          return o[0].src = e.src,
                            e.kind && (o[0].kind = e.kind),
                            o[0].label = e.label,
                            e.srclang && (o[0].srclang = e.srclang),
                            !0
                      }),
                      e.emit("textTrackChange", r.innerHTML))
                  }
                }, !1)
              }),
              n.addEventListener("mouseleave", function (n) {
                n.preventDefault(),
                  n.stopPropagation(),
                  t.removeClass(e.root, "xgplayer-textTrack-active")
              })
          }
        })
      }, function (e, t, n) {
        var r, o = (r = n(0)) && r.__esModule ? r : {
          default: r
        };
        o.default.install("screenShot", function () {
          var e = this,
            t = o.default.util;
          if (e.config.screenShot) {
            var n = t.createDom("xg-screenShot", '<p class="name"><span>截图</span></p>', {
                tabindex: 11
              }, "xgplayer-screenShot"),
              r = document.createElement("canvas"),
              i = r.getContext("2d"),
              a = new Image;
            r.width = this.config.width || 600,
              r.height = this.config.height || 337.5,
              e.controls.appendChild(n),
              ["click", "touchstart"].forEach(function (t) {
                n.addEventListener(t, function (t) {
                  t.preventDefault(),
                    t.stopPropagation(),
                    a.onload = (i.drawImage(e.video, 0, 0, r.width, r.height),
                      a.setAttribute("crossOrigin", "anonymous"),
                      a.src = r.toDataURL("image/png").replace("image/png", "image/octet-stream"),
                      void
                      function (e, t) {
                        var n = document.createElement("a");
                        n.href = e,
                          n.download = "截图.png";
                        var r = document.createEvent("MouseEvents");
                        r.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null),
                          n.dispatchEvent(r)
                      }(a.src.replace(/^data:image\/[^;]+/, "data:application/octet-stream")))
                })
              })
          }
        })
      }, function (e, t, n) {
        var r, o = (r = n(0)) && r.__esModule ? r : {
          default: r
        };
        o.default.install("rotate", function () {
          var e = this;
          if (this.config.rotate) {
            !0 === this.config.rotate && (this.config.rotate = {});
            var t = o.default.util,
              n = t.createDom("xg-rotate", '<xg-icon class="xgplayer-icon xgplayer-rotate-img"></xg-icon>', {}, "xgplayer-rotate"),
              r = e.config.lang && "zh-cn" === e.config.lang ? "旋转" : "Rotate",
              i = t.createDom("xg-tips", r, {}, "xgplayer-tips");
            n.appendChild(i),
              e.controls.appendChild(n);
            var a = 0;
            e.rotate = function () {
                var t = e.root.offsetWidth,
                  n = e.root.offsetHeight;
                e.config.rotate.innerRotate || (e.root.style.width = n + "px",
                  e.root.style.height = t + "px");
                var r = e.config.rotate.clockwise ? 1 : -1,
                  o = void 0;
                o = .25 == (a = (a + 1 + .25 * r) % 1) || .75 === a ? e.config.rotate.innerRotate ? t >= n ? (n / t).toFixed(2) : (t / n).toFixed(2) : t >= n ? (t / n).toFixed(2) : (n / t).toFixed(2) : 1,
                  e.video.style.transformOrigin = "center center",
                  e.video.style.transform = "rotate(" + a + "turn) scale(" + o + ")",
                  e.video.style.webKitTransform = "rotate(" + a + "turn) scale(" + o + ")",
                  e.emit("rotate", 360 * a)
              },
              n.addEventListener("mouseenter", function (t) {
                t.preventDefault(),
                  t.stopPropagation(),
                  i.style.left = "50%";
                var n = i.getBoundingClientRect(),
                  r = e.root.getBoundingClientRect();
                n.right > r.right && (i.style.left = -n.right + r.right + 16 + "px")
              }),
              n.addEventListener("click", e.rotate)
          }
        })
      }, function (e, t, n) {
        var r, o = (r = n(0)) && r.__esModule ? r : {
          default: r
        };
        o.default.install("replay", function () {
          var e = this,
            t = o.default.util,
            n = e.config.centerBtn ? e.config.centerBtn : {},
            r = void 0,
            i = void 0,
            a = void 0,
            s = void 0;
          if (!(navigator.userAgent.indexOf("iPhone OS 9") > -1)) {
            if ("img" === n.type) {
              if (i = t.createDom("xg-replay", '<div class="xgplayer-replay-img"></div>', {}, "xgplayer-replay"),
                (a = i.querySelector(".xgplayer-replay-img")).style.backgroundImage = 'url("' + n.url.replay + '")',
                n.width && n.height) {
                var l = void 0,
                  u = void 0,
                  c = void 0;
                ["px", "rem", "em", "pt", "dp", "vw", "vh", "vm", "%"].every(function (e) {
                    return !(n.width.indexOf(e) > -1 && n.height.indexOf(e) > -1 && (l = parseFloat(n.width.slice(0, n.width.indexOf(e)).trim()),
                      u = parseFloat(n.height.slice(0, n.height.indexOf(e)).trim()),
                      c = e,
                      1))
                  }),
                  a.style.width = "" + l + c,
                  a.style.height = "" + u + c,
                  a.style.backgroundSize = "" + l + c + " " + u + c,
                  a.style.margin = "-" + u / 2 + c + " auto auto -" + l / 2 + c
              }
            } else
              r = {
                replay: n.replayPath ? n.replayPath : "M8.22708362,13.8757234 L11.2677371,12.6472196 C11.7798067,12.4403301 12.3626381,12.6877273 12.5695276,13.1997969 L12.9441342,14.1269807 C13.1510237,14.6390502 12.9036264,15.2218816 12.3915569,15.4287712 L6.8284538,17.6764107 L5.90126995,18.0510173 C5.38920044,18.2579068 4.80636901,18.0105096 4.5994795,17.49844 L1.97723335,11.0081531 C1.77034384,10.4960836 2.0177411,9.91325213 2.52981061,9.70636262 L3.45699446,9.33175602 C3.96906396,9.12486652 4.5518954,9.37226378 4.75878491,9.88433329 L5.67885163,12.1615783 C7.99551726,6.6766934 13.3983951,3 19.5,3 C27.7842712,3 34.5,9.71572875 34.5,18 C34.5,26.2842712 27.7842712,33 19.5,33 C15.4573596,33 11.6658607,31.3912946 8.87004692,28.5831991 C8.28554571,27.9961303 8.28762719,27.0463851 8.87469603,26.4618839 C9.46176488,25.8773827 10.4115101,25.8794641 10.9960113,26.466533 C13.2344327,28.7147875 16.263503,30 19.5,30 C26.127417,30 31.5,24.627417 31.5,18 C31.5,11.372583 26.127417,6 19.5,6 C14.4183772,6 9.94214483,9.18783811 8.22708362,13.8757234 Z"
              },
              s = (i = t.createDom("xg-replay", '\n          <svg class="xgplayer-replay-svg" xmlns="http://www.w3.org/2000/svg" width="78" height="78" viewbox="0 0 78 78">\n            <path d="' + r.replay + '"></path>\n          </svg>\n          <xg-replay-txt class="xgplayer-replay-txt">重播</xg-replay-txt>\n          ', {}, "xgplayer-replay")).querySelector(".xgplayer-replay-svg");
            var d = e.root;
            d.appendChild(i),
              e.on("ended", function () {
                if ("img" === n.type)
                  a.style.backgroundImage = 'url("' + n.url.replay + '")';
                else {
                  i.querySelector(".xgplayer-replay-txt").textContent = e.lang.REPLAY;
                  var r = i.querySelector("path"),
                    o = window.getComputedStyle(r).getPropertyValue("transform");
                  "none" !== o && r.setAttribute("transform", o)
                }
                e.config.loop || t.addClass(d, "replay")
              }),
              (s || a).addEventListener("click", function (n) {
                n.preventDefault(),
                  t.removeClass(d, "replay"),
                  e.replay()
              })
          }
        })
      }, function (e, t, n) {
        var r, o, i = (r = n(0)) && r.__esModule ? r : {
          default: r
        };
        o = function () {
            var e = this,
              t = i.default.util,
              n = t.createDom("xg-progress", '<xg-outer class="xgplayer-progress-outer"><xg-cache class="xgplayer-progress-cache"></xg-cache><xg-played class="xgplayer-progress-played"></xgplayer-played><xg-progress-btn class="xgplayer-progress-btn"></xg-progress-btn><xg-point class="xgplayer-progress-point xgplayer-tips"></xg-point><xg-thumbnail class="xgplayer-progress-thumbnail xgplayer-tips"></xg-thumbnail></xg-outer>', {
                tabindex: 1
              }, "xgplayer-progress"),
              r = e.controls,
              o = void 0;
            r.appendChild(n);
            var a = n.querySelector(".xgplayer-progress-played"),
              s = n.querySelector(".xgplayer-progress-btn"),
              l = n.querySelector(".xgplayer-progress-outer"),
              u = n.querySelector(".xgplayer-progress-cache"),
              c = n.querySelector(".xgplayer-progress-point"),
              d = n.querySelector(".xgplayer-progress-thumbnail");
            e.dotArr = {},
              e.once("canplay", function () {
                e.config.progressDot && "Array" === t.typeOf(e.config.progressDot) && e.config.progressDot.forEach(function (r) {
                  if (r.time >= 0 && r.time <= e.duration) {
                    var o = t.createDom("xg-progress-dot", r.text ? '<span class="xgplayer-progress-tip">' + r.text + "</span>" : "", {}, "xgplayer-progress-dot");
                    o.style.left = r.time / e.duration * 100 + "%",
                      l.appendChild(o),
                      e.dotArr[r.time] = o,
                      o.addEventListener("mouseenter", function (e) {
                        r.text && t.addClass(n, "xgplayer-progress-dot-active")
                      }),
                      o.addEventListener("mouseleave", function (e) {
                        r.text && t.removeClass(n, "xgplayer-progress-dot-active")
                      })
                  }
                })
              }),
              e.addProgressDot = function (n) {
                if (!e.dotArr[n] && n >= 0 && n <= e.duration) {
                  var r = t.createDom("xg-progress-dot", "", {}, "xgplayer-progress-dot");
                  r.style.left = n / e.duration * 100 + "%",
                    l.appendChild(r),
                    e.dotArr[n] = r
                }
              },
              e.removeProgressDot = function (t) {
                if (t >= 0 && t <= e.duration && e.dotArr[t]) {
                  var n = e.dotArr[t];
                  n.parentNode.removeChild(n),
                    n = null,
                    e.dotArr[t] = null
                }
              },
              e.removeAllProgressDot = function () {
                Object.keys(e.dotArr).forEach(function (t) {
                  if (e.dotArr[t]) {
                    var n = e.dotArr[t];
                    n.parentNode.removeChild(n),
                      n = null,
                      e.dotArr[t] = null
                  }
                })
              };
            var p = 0,
              f = 0,
              g = 0,
              h = 0,
              v = 0,
              y = 0,
              m = [];
            e.config.thumbnail && (p = e.config.thumbnail.pic_num,
                f = e.config.thumbnail.width,
                g = e.config.thumbnail.height,
                h = e.config.thumbnail.col,
                v = e.config.thumbnail.row,
                m = e.config.thumbnail.urls,
                d.style.width = f + "px",
                d.style.height = g + "px"),
              ["touchstart", "mousedown"].forEach(function (i) {
                n.addEventListener(i, function (i) {
                  if (i.preventDefault(),
                    i.stopPropagation(),
                    t.event(i),
                    i._target === c || e.ended)
                    return !1;
                  n.focus(),
                    o = n.getBoundingClientRect().width;
                  var l = a.getBoundingClientRect().left,
                    u = function (n) {
                      n.preventDefault(),
                        n.stopPropagation(),
                        t.event(n),
                        e.isProgressMoving = !0;
                      var i = n.clientX - l > o ? o : n.clientX - l,
                        u = i / o * e.duration;
                      if (a.style.width = 100 * i / o + "%",
                        s.style.left = i - 7 < 0 ? "0px" : i + 7 > o ? o - 14 + "px" : i - 7 + "px",
                        "video" !== e.videoConfig.mediaType || e.dash) {
                        var c = t.findDom(r, ".xgplayer-time");
                        c && (c.innerHTML = "<span>" + t.format(u || 0) + "</span><em>" + t.format(e.duration))
                      } else
                        e.currentTime = Number(u).toFixed(1);
                      e.emit("focus")
                    },
                    d = function r(i) {
                      if (i.preventDefault(),
                        i.stopPropagation(),
                        t.event(i),
                        window.removeEventListener("mousemove", u),
                        window.removeEventListener("touchmove", u),
                        window.removeEventListener("mouseup", r),
                        window.removeEventListener("touchend", r),
                        n.blur(),
                        !e.isProgressMoving || "audio" === e.videoConfig.mediaType || e.dash) {
                        var c = i.clientX - l,
                          d = c / o * e.duration;
                        a.style.width = 100 * c / o + "%",
                          s.style.left = c - 7 < 0 ? "0px" : c + 7 > o ? o - 14 + "px" : c - 7 + "px",
                          e.currentTime = Number(d).toFixed(1)
                      }
                      e.emit("focus"),
                        e.isProgressMoving = !1
                    };
                  return window.addEventListener("mousemove", u),
                    window.addEventListener("touchmove", u),
                    window.addEventListener("mouseup", d),
                    window.addEventListener("touchend", d),
                    !1
                })
              }),
              n.addEventListener("mouseenter", function (r) {
                if (e.ended)
                  return !1;
                var o = n.getBoundingClientRect().left,
                  i = n.getBoundingClientRect().width,
                  a = function (r) {
                    var a = (r.clientX - o) / i * e.duration;
                    a = a < 0 ? 0 : a,
                      c.textContent = t.format(a);
                    var s = c.getBoundingClientRect().width;
                    if (e.config.thumbnail) {
                      y = e.duration / p;
                      var l = Math.floor(a / y);
                      d.style.backgroundImage = "url(" + m[Math.ceil((l + 1) / (h * v)) - 1] + ")";
                      var u = l + 1 - h * v * (Math.ceil((l + 1) / (h * v)) - 1),
                        b = Math.ceil(u / v) - 1,
                        x = u - b * v - 1;
                      d.style["background-position"] = "-" + x * f + "px -" + b * g + "px";
                      var w = r.clientX - o - f / 2;
                      w = (w = w > 0 ? w : 0) < i - f ? w : i - f,
                        d.style.left = w + "px",
                        d.style.top = -10 - g + "px",
                        d.style.display = "block",
                        c.style.left = w + f / 2 - s / 2 + "px"
                    } else {
                      var _ = r.clientX - o - s / 2;
                      _ = (_ = _ > 0 ? _ : 0) > i - s ? i - s : _,
                        c.style.left = _ + "px"
                    }
                    t.hasClass(n, "xgplayer-progress-dot-active") ? c.style.display = "none" : c.style.display = "block"
                  },
                  s = function (e) {
                    a(e)
                  };
                n.addEventListener("mousemove", s, !1),
                  n.addEventListener("mouseleave", function e(t) {
                    n.removeEventListener("mousemove", s, !1),
                      n.removeEventListener("mouseleave", e, !1),
                      a(t),
                      c.style.display = "none",
                      d.style.display = "none"
                  }, !1),
                  a(r)
              }, !1),
              e.on("timeupdate", function () {
                if (!o && n && (o = n.getBoundingClientRect().width),
                  "audio" !== e.videoConfig.mediaType || !e.isProgressMoving || !e.dash) {
                  a.style.width = 100 * e.currentTime / e.duration + "%";
                  var t = e.currentTime / e.duration * o - 7;
                  s.style.left = t < 0 ? "0px" : t + 14 > o ? o - 14 + "px" : t + "px"
                }
              });
            var b = function () {
              var t = e.buffered;
              if (t && t.length > 0) {
                for (var n = t.end(t.length - 1), r = 0, o = t.length; r < o; r++)
                  if (e.currentTime >= t.start(r) && e.currentTime <= t.end(r)) {
                    n = t.end(r);
                    for (var i = r + 1; i < t.length; i++)
                      if (t.start(i) - t.end(i - 1) >= 2) {
                        n = t.end(i - 1);
                        break
                      }
                    break
                  }
                u.style.width = n / e.duration * 100 + "%"
              }
            };
            ["bufferedChange", "cacheupdate", "ended", "timeupdate"].forEach(function (t) {
                e.on(t, b)
              }),
              e.once("destroy", function () {
                e.removeAllProgressDot()
              })
          },
          i.default.install("progress", o)
      }, function (e, t, n) {
        var r, o = (r = n(0)) && r.__esModule ? r : {
          default: r
        };
        o.default.install("poster", function () {
          var e = o.default.util.createDom("xg-poster", "", {}, "xgplayer-poster"),
            t = this.root;
          this.config.poster && (e.style.backgroundImage = "url(" + this.config.poster + ")",
              t.appendChild(e)),
            this.on("play", function () {
              e.style.display = "none"
            })
        })
      }, function (e, t, n) {
        var r, o = (r = n(0)) && r.__esModule ? r : {
          default: r
        };
        o.default.install("playbackRate", function () {
          var e = this,
            t = o.default.util,
            n = 0,
            r = [];
          if (!e.config.playbackRate)
            return !1;
          e.config.playbackRate.sort(function (e, t) {
              return e - t
            }),
            e.config.playbackRate.forEach(function (e, t) {
              1 !== e && "1" !== e || (n = t),
                r.push(e + "x")
            });
          var i = e.config.lang && "zh-cn" === e.config.lang ? "倍速" : "Speed",
            a = t.createDom("xg-playback", "<p class='name'><span>1x</span></p>", {}, "xgplayer-playback"),
            s = e.controls,
            l = t.createDom("xg-tips", i, {}, "xgplayer-tips");
          a.appendChild(l),
            s.appendChild(a),
            ["touchstart", "click"].forEach(function (t) {
              a.addEventListener(t, function (t) {
                t.preventDefault(),
                  t.stopPropagation();
                var o = t.target || t.srcElement;
                !o || "p" !== o.tagName.toLocaleLowerCase() && "span" !== o.tagName.toLocaleLowerCase() || (n = n + 1 === r.length ? 0 : n + 1,
                  a.querySelector("p").innerHTML = "<span>" + r[n] + "</span>",
                  e.video.playbackRate = 1 * r[n].replace(/x$/g, ""))
              }, !1)
            }),
            a.addEventListener("mouseenter", function (t) {
              t.preventDefault(),
                t.stopPropagation(),
                l.style.left = "50%";
              var n = l.getBoundingClientRect(),
                r = e.root.getBoundingClientRect();
              n.right > r.right && (l.style.left = -n.right + r.right + 16 + "px")
            })
        })
      }, function (e, t, n) {
        function r(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }
        var o = r(n(0)),
          i = r(n(2));
        o.default.install("play", function () {
          var e = this,
            t = e.controls,
            n = o.default.util,
            r = e.config.iconScale || .0320625,
            a = "M576,363L810,512L576,661zM342,214L576,363L576,661L342,810z",
            s = "M598,214h170v596h-170v-596zM256 810v-596h170v596h-170z",
            l = e.config.playBtn ? e.config.playBtn : {},
            u = void 0,
            c = void 0,
            d = void 0;
          "img" === l.type ? u = o.default.util.createImgBtn("play", l.url.play, l.width, l.height) : (u = n.createDom("xg-play", '<xg-icon class="xgplayer-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">\n              <path transform="scale(' + r + " " + r + ')" d="' + a + '"></path>\n          </svg></xg-icon>', {}, "xgplayer-play"),
            c = u.querySelector("path"),
            d = new i.default({
              progress: function (e, t) {
                c.setAttribute("d", d.toSVGString(e))
              },
              from: s,
              to: a,
              duration: 50
            }));
          var p = e.config.lang && "zh-cn" === e.config.lang ? "播放" : "Play",
            f = e.config.lang && "zh-cn" === e.config.lang ? "暂停" : "Pause",
            g = n.createDom("xg-tips", p, {}, "xgplayer-tips");
          u.appendChild(g),
            t.appendChild(u),
            ["click", "touchstart"].forEach(function (t) {
              u.addEventListener(t, function (t) {
                t.preventDefault(),
                  t.stopPropagation(),
                  e.ended || (e.paused ? e.play() : e.pause())
              }, !1)
            }),
            e.on("play", function () {
              "img" === l.type ? u.style.backgroundImage = 'url("' + l.url.pause + '")' : setTimeout(function () {
                g.textContent = f,
                  d.to !== s && d.reset(s, a)
              }, 80)
            }),
            e.on("pause", function () {
              "img" === l.type ? u.style.backgroundImage = 'url("' + l.url.play + '")' : setTimeout(function () {
                g.textContent = p,
                  d.to !== a && d.reset(a, s)
              }, 80)
            })
        })
      }, function (e, t, n) {
        function r(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }
        var o = r(n(0)),
          i = r(n(41));
        o.default.install("pip", function () {
          var e = this,
            t = o.default.util;
          if (e.config.pip) {
            var n = t.createDom("xg-pip", '<p class="name"><span>画中画</span></p>', {
                tabindex: 9
              }, "xgplayer-pip"),
              r = t.createDom("xg-pip-lay", "<div></div>", {}, "xgplayer-pip-lay"),
              a = t.createDom("xg-pip-drag", '<div class="drag-handle"><span>点击按住可拖动视频</span></div>', {
                tabindex: 9
              }, "xgplayer-pip-drag"),
              s = e.controls,
              l = e.root;
            s.appendChild(n),
              l.appendChild(a),
              l.appendChild(r),
              new i.default(".xgplayer", {
                handle: ".drag-handle"
              });
            var u = function (n) {
              t.removeClass(n, "xgplayer-pip-active"),
                e.config.fluid && (e.root.style["padding-top"] = 100 * e.config.height / e.config.width + "%")
            };
            ["click", "touchstart"].forEach(function (o) {
              n.addEventListener(o, function (n) {
                var o, i, a, s;
                n.preventDefault(),
                  n.stopPropagation(),
                  t.hasClass(l, "xgplayer-pip-active") ? u(l) : (o = l,
                    i = e.root.getBoundingClientRect(),
                    a = i.top,
                    s = i.left,
                    t.addClass(o, "xgplayer-pip-active"),
                    e.root.style.right = 0,
                    e.root.style.bottom = "200px",
                    e.root.style.top = "",
                    e.root.style.left = "",
                    e.config.fluid && (e.root.style["padding-top"] = ""),
                    ["click", "touchstart"].forEach(function (t) {
                      r.addEventListener(t, function (t) {
                        t.preventDefault(),
                          t.stopPropagation(),
                          u(l),
                          e.root.style.top = a + "px",
                          e.root.style.left = s + "px"
                      })
                    }))
              })
            })
          }
        })
      }, function (e, t, n) {
        var r, o;
        "function" == typeof Symbol && Symbol.iterator,
          function (i, a) {
            r = [n(42), n(43)],
              void 0 === (o = function (e, t) {
                  return function (e, t, n) {
                    function r(e, t) {
                      for (var n in t)
                        e[n] = t[n];
                      return e
                    }

                    function o(e, t) {
                      this.element = "string" == typeof e ? document.querySelector(e) : e,
                        a && (this.$element = a(this.element)),
                        this.options = r({}, this.constructor.defaults),
                        this.option(t),
                        this._create()
                    }

                    function i(e, t, n) {
                      return n = n || "round",
                        t ? Math[n](e / t) * t : e
                    }
                    var a = e.jQuery,
                      s = o.prototype = Object.create(n.prototype);
                    o.defaults = {},
                      s.option = function (e) {
                        r(this.options, e)
                      };
                    var l = {
                      relative: !0,
                      absolute: !0,
                      fixed: !0
                    };
                    return s._create = function () {
                        this.position = {},
                          this._getPosition(),
                          this.startPoint = {
                            x: 0,
                            y: 0
                          },
                          this.dragPoint = {
                            x: 0,
                            y: 0
                          },
                          this.startPosition = r({}, this.position);
                        var e = getComputedStyle(this.element);
                        l[e.position] || (this.element.style.position = "relative"),
                          this.on("pointerDown", this.onPointerDown),
                          this.on("pointerMove", this.onPointerMove),
                          this.on("pointerUp", this.onPointerUp),
                          this.enable(),
                          this.setHandles()
                      },
                      s.setHandles = function () {
                        this.handles = this.options.handle ? this.element.querySelectorAll(this.options.handle) : [this.element],
                          this.bindHandles()
                      },
                      s.dispatchEvent = function (e, t, n) {
                        var r = [t].concat(n);
                        this.emitEvent(e, r),
                          this.dispatchJQueryEvent(e, t, n)
                      },
                      s.dispatchJQueryEvent = function (t, n, r) {
                        var o = e.jQuery;
                        if (o && this.$element) {
                          var i = o.Event(n);
                          i.type = t,
                            this.$element.trigger(i, r)
                        }
                      },
                      s._getPosition = function () {
                        var e = getComputedStyle(this.element),
                          t = this._getPositionCoord(e.left, "width"),
                          n = this._getPositionCoord(e.top, "height");
                        this.position.x = isNaN(t) ? 0 : t,
                          this.position.y = isNaN(n) ? 0 : n,
                          this._addTransformPosition(e)
                      },
                      s._getPositionCoord = function (e, n) {
                        if (-1 != e.indexOf("%")) {
                          var r = t(this.element.parentNode);
                          return r ? parseFloat(e) / 100 * r[n] : 0
                        }
                        return parseInt(e, 10)
                      },
                      s._addTransformPosition = function (e) {
                        var t = e.transform;
                        if (0 === t.indexOf("matrix")) {
                          var n = t.split(","),
                            r = 0 === t.indexOf("matrix3d") ? 12 : 4,
                            o = parseInt(n[r], 10),
                            i = parseInt(n[r + 1], 10);
                          this.position.x += o,
                            this.position.y += i
                        }
                      },
                      s.onPointerDown = function (e, t) {
                        this.element.classList.add("is-pointer-down"),
                          this.dispatchJQueryEvent("pointerDown", e, [t])
                      },
                      s.dragStart = function (e, t) {
                        this.isEnabled && (this._getPosition(),
                          this.measureContainment(),
                          this.startPosition.x = this.position.x,
                          this.startPosition.y = this.position.y,
                          this.setLeftTop(),
                          this.dragPoint.x = 0,
                          this.dragPoint.y = 0,
                          this.element.classList.add("is-dragging"),
                          this.dispatchEvent("dragStart", e, [t]),
                          this.animate())
                      },
                      s.measureContainment = function () {
                        var e = this.getContainer();
                        if (e) {
                          var n = t(this.element),
                            r = t(e),
                            o = this.element.getBoundingClientRect(),
                            i = e.getBoundingClientRect(),
                            a = r.borderLeftWidth + r.borderRightWidth,
                            s = r.borderTopWidth + r.borderBottomWidth,
                            l = this.relativeStartPosition = {
                              x: o.left - (i.left + r.borderLeftWidth),
                              y: o.top - (i.top + r.borderTopWidth)
                            };
                          this.containSize = {
                            width: r.width - a - l.x - n.width,
                            height: r.height - s - l.y - n.height
                          }
                        }
                      },
                      s.getContainer = function () {
                        var e = this.options.containment;
                        if (e)
                          return e instanceof HTMLElement ? e : "string" == typeof e ? document.querySelector(e) : this.element.parentNode
                      },
                      s.onPointerMove = function (e, t, n) {
                        this.dispatchJQueryEvent("pointerMove", e, [t, n])
                      },
                      s.dragMove = function (e, t, n) {
                        if (this.isEnabled) {
                          var r = n.x,
                            o = n.y,
                            a = this.options.grid,
                            s = a && a[0],
                            l = a && a[1];
                          r = i(r, s),
                            o = i(o, l),
                            r = this.containDrag("x", r, s),
                            o = this.containDrag("y", o, l),
                            r = "y" == this.options.axis ? 0 : r,
                            o = "x" == this.options.axis ? 0 : o,
                            this.position.x = this.startPosition.x + r,
                            this.position.y = this.startPosition.y + o,
                            this.dragPoint.x = r,
                            this.dragPoint.y = o,
                            this.dispatchEvent("dragMove", e, [t, n])
                        }
                      },
                      s.containDrag = function (e, t, n) {
                        if (!this.options.containment)
                          return t;
                        var r = "x" == e ? "width" : "height",
                          o = i(-this.relativeStartPosition[e], n, "ceil"),
                          a = this.containSize[r];
                        return a = i(a, n, "floor"),
                          Math.max(o, Math.min(a, t))
                      },
                      s.onPointerUp = function (e, t) {
                        this.element.classList.remove("is-pointer-down"),
                          this.dispatchJQueryEvent("pointerUp", e, [t])
                      },
                      s.dragEnd = function (e, t) {
                        this.isEnabled && (this.element.style.transform = "",
                          this.setLeftTop(),
                          this.element.classList.remove("is-dragging"),
                          this.dispatchEvent("dragEnd", e, [t]))
                      },
                      s.animate = function () {
                        if (this.isDragging) {
                          this.positionDrag();
                          var e = this;
                          requestAnimationFrame(function () {
                            e.animate()
                          })
                        }
                      },
                      s.setLeftTop = function () {
                        this.element.style.left = this.position.x + "px",
                          this.element.style.top = this.position.y + "px"
                      },
                      s.positionDrag = function () {
                        this.element.style.transform = "translate3d( " + this.dragPoint.x + "px, " + this.dragPoint.y + "px, 0)"
                      },
                      s.staticClick = function (e, t) {
                        this.dispatchEvent("staticClick", e, [t])
                      },
                      s.setPosition = function (e, t) {
                        this.position.x = e,
                          this.position.y = t,
                          this.setLeftTop()
                      },
                      s.enable = function () {
                        this.isEnabled = !0
                      },
                      s.disable = function () {
                        this.isEnabled = !1,
                          this.isDragging && this.dragEnd()
                      },
                      s.destroy = function () {
                        this.disable(),
                          this.element.style.transform = "",
                          this.element.style.left = "",
                          this.element.style.top = "",
                          this.element.style.position = "",
                          this.unbindHandles(),
                          this.$element && this.$element.removeData("draggabilly")
                      },
                      s._init = function () {},
                      a && a.bridget && a.bridget("draggabilly", o),
                      o
                  }(i, e, t)
                }
                .apply(t, r)) || (e.exports = o)
          }(window)
      }, function (e, t, n) {
        var r, o, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
          } :
          function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          };
        window,
        void 0 === (o = "function" == typeof (r = function () {
          function e(e) {
            var t = parseFloat(e);
            return -1 == e.indexOf("%") && !isNaN(t) && t
          }

          function t(e) {
            var t = getComputedStyle(e);
            return t || o("Style returned " + t + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),
              t
          }

          function n(o) {
            if (function () {
                if (!l) {
                  l = !0;
                  var o = document.createElement("div");
                  o.style.width = "200px",
                    o.style.padding = "1px 2px 3px 4px",
                    o.style.borderStyle = "solid",
                    o.style.borderWidth = "1px 2px 3px 4px",
                    o.style.boxSizing = "border-box";
                  var i = document.body || document.documentElement;
                  i.appendChild(o);
                  var a = t(o);
                  r = 200 == Math.round(e(a.width)),
                    n.isBoxSizeOuter = r,
                    i.removeChild(o)
                }
              }(),
              "string" == typeof o && (o = document.querySelector(o)),
              o && "object" == (void 0 === o ? "undefined" : i(o)) && o.nodeType) {
              var u = t(o);
              if ("none" == u.display)
                return function () {
                  for (var e = {
                      width: 0,
                      height: 0,
                      innerWidth: 0,
                      innerHeight: 0,
                      outerWidth: 0,
                      outerHeight: 0
                    }, t = 0; t < s; t++) {
                    e[a[t]] = 0
                  }
                  return e
                }();
              var c = {};
              c.width = o.offsetWidth,
                c.height = o.offsetHeight;
              for (var d = c.isBorderBox = "border-box" == u.boxSizing, p = 0; p < s; p++) {
                var f = a[p],
                  g = u[f],
                  h = parseFloat(g);
                c[f] = isNaN(h) ? 0 : h
              }
              var v = c.paddingLeft + c.paddingRight,
                y = c.paddingTop + c.paddingBottom,
                m = c.marginLeft + c.marginRight,
                b = c.marginTop + c.marginBottom,
                x = c.borderLeftWidth + c.borderRightWidth,
                w = c.borderTopWidth + c.borderBottomWidth,
                _ = d && r,
                k = e(u.width);
              !1 !== k && (c.width = k + (_ ? 0 : v + x));
              var E = e(u.height);
              return !1 !== E && (c.height = E + (_ ? 0 : y + w)),
                c.innerWidth = c.width - (v + x),
                c.innerHeight = c.height - (y + w),
                c.outerWidth = c.width + m,
                c.outerHeight = c.height + b,
                c
            }
          }
          var r, o = "undefined" == typeof console ? function () {} :
            function (e) {
              console.error(e)
            },
            a = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
            s = a.length,
            l = !1;
          return n
        }) ? r.call(t, n, t, e) : r) || (e.exports = o)
      }, function (e, t, n) {
        var r, o;
        "function" == typeof Symbol && Symbol.iterator,
          function (i, a) {
            r = [n(44)],
              void 0 === (o = function (e) {
                  return function (e, t) {
                    function n() {}
                    var r = n.prototype = Object.create(t.prototype);
                    r.bindHandles = function () {
                        this._bindHandles(!0)
                      },
                      r.unbindHandles = function () {
                        this._bindHandles(!1)
                      },
                      r._bindHandles = function (t) {
                        for (var n = (t = void 0 === t || t) ? "addEventListener" : "removeEventListener", r = t ? this._touchActionValue : "", o = 0; o < this.handles.length; o++) {
                          var i = this.handles[o];
                          this._bindStartEvent(i, t),
                            i[n]("click", this),
                            e.PointerEvent && (i.style.touchAction = r)
                        }
                      },
                      r._touchActionValue = "none",
                      r.pointerDown = function (e, t) {
                        this.okayPointerDown(e) && (this.pointerDownPointer = t,
                          e.preventDefault(),
                          this.pointerDownBlur(),
                          this._bindPostStartEvents(e),
                          this.emitEvent("pointerDown", [e, t]))
                      };
                    var o = {
                        TEXTAREA: !0,
                        INPUT: !0,
                        SELECT: !0,
                        OPTION: !0
                      },
                      i = {
                        radio: !0,
                        checkbox: !0,
                        button: !0,
                        submit: !0,
                        image: !0,
                        file: !0
                      };
                    return r.okayPointerDown = function (e) {
                        var t = o[e.target.nodeName],
                          n = i[e.target.type],
                          r = !t || n;
                        return r || this._pointerReset(),
                          r
                      },
                      r.pointerDownBlur = function () {
                        var e = document.activeElement;
                        e && e.blur && e != document.body && e.blur()
                      },
                      r.pointerMove = function (e, t) {
                        var n = this._dragPointerMove(e, t);
                        this.emitEvent("pointerMove", [e, t, n]),
                          this._dragMove(e, t, n)
                      },
                      r._dragPointerMove = function (e, t) {
                        var n = {
                          x: t.pageX - this.pointerDownPointer.pageX,
                          y: t.pageY - this.pointerDownPointer.pageY
                        };
                        return !this.isDragging && this.hasDragStarted(n) && this._dragStart(e, t),
                          n
                      },
                      r.hasDragStarted = function (e) {
                        return Math.abs(e.x) > 3 || Math.abs(e.y) > 3
                      },
                      r.pointerUp = function (e, t) {
                        this.emitEvent("pointerUp", [e, t]),
                          this._dragPointerUp(e, t)
                      },
                      r._dragPointerUp = function (e, t) {
                        this.isDragging ? this._dragEnd(e, t) : this._staticClick(e, t)
                      },
                      r._dragStart = function (e, t) {
                        this.isDragging = !0,
                          this.isPreventingClicks = !0,
                          this.dragStart(e, t)
                      },
                      r.dragStart = function (e, t) {
                        this.emitEvent("dragStart", [e, t])
                      },
                      r._dragMove = function (e, t, n) {
                        this.isDragging && this.dragMove(e, t, n)
                      },
                      r.dragMove = function (e, t, n) {
                        e.preventDefault(),
                          this.emitEvent("dragMove", [e, t, n])
                      },
                      r._dragEnd = function (e, t) {
                        this.isDragging = !1,
                          setTimeout(function () {
                              delete this.isPreventingClicks
                            }
                            .bind(this)),
                          this.dragEnd(e, t)
                      },
                      r.dragEnd = function (e, t) {
                        this.emitEvent("dragEnd", [e, t])
                      },
                      r.onclick = function (e) {
                        this.isPreventingClicks && e.preventDefault()
                      },
                      r._staticClick = function (e, t) {
                        this.isIgnoringMouseUp && "mouseup" == e.type || (this.staticClick(e, t),
                          "mouseup" != e.type && (this.isIgnoringMouseUp = !0,
                            setTimeout(function () {
                                delete this.isIgnoringMouseUp
                              }
                              .bind(this), 400)))
                      },
                      r.staticClick = function (e, t) {
                        this.emitEvent("staticClick", [e, t])
                      },
                      n.getPointerPoint = t.getPointerPoint,
                      n
                  }(i, e)
                }
                .apply(t, r)) || (e.exports = o)
          }(window)
      }, function (e, t, n) {
        var r, o;
        "function" == typeof Symbol && Symbol.iterator,
          function (i, a) {
            r = [n(45)],
              void 0 === (o = function (e) {
                  return function (e, t) {
                    function n() {}
                    var r = n.prototype = Object.create(t.prototype);
                    r.bindStartEvent = function (e) {
                        this._bindStartEvent(e, !0)
                      },
                      r.unbindStartEvent = function (e) {
                        this._bindStartEvent(e, !1)
                      },
                      r._bindStartEvent = function (t, n) {
                        var r = (n = void 0 === n || n) ? "addEventListener" : "removeEventListener",
                          o = "mousedown";
                        e.PointerEvent ? o = "pointerdown" : "ontouchstart" in e && (o = "touchstart"),
                          t[r](o, this)
                      },
                      r.handleEvent = function (e) {
                        var t = "on" + e.type;
                        this[t] && this[t](e)
                      },
                      r.getTouch = function (e) {
                        for (var t = 0; t < e.length; t++) {
                          var n = e[t];
                          if (n.identifier == this.pointerIdentifier)
                            return n
                        }
                      },
                      r.onmousedown = function (e) {
                        var t = e.button;
                        t && 0 !== t && 1 !== t || this._pointerDown(e, e)
                      },
                      r.ontouchstart = function (e) {
                        this._pointerDown(e, e.changedTouches[0])
                      },
                      r.onpointerdown = function (e) {
                        this._pointerDown(e, e)
                      },
                      r._pointerDown = function (e, t) {
                        e.button || this.isPointerDown || (this.isPointerDown = !0,
                          this.pointerIdentifier = void 0 !== t.pointerId ? t.pointerId : t.identifier,
                          this.pointerDown(e, t))
                      },
                      r.pointerDown = function (e, t) {
                        this._bindPostStartEvents(e),
                          this.emitEvent("pointerDown", [e, t])
                      };
                    var o = {
                      mousedown: ["mousemove", "mouseup"],
                      touchstart: ["touchmove", "touchend", "touchcancel"],
                      pointerdown: ["pointermove", "pointerup", "pointercancel"]
                    };
                    return r._bindPostStartEvents = function (t) {
                        if (t) {
                          var n = o[t.type];
                          n.forEach(function (t) {
                              e.addEventListener(t, this)
                            }, this),
                            this._boundPointerEvents = n
                        }
                      },
                      r._unbindPostStartEvents = function () {
                        this._boundPointerEvents && (this._boundPointerEvents.forEach(function (t) {
                            e.removeEventListener(t, this)
                          }, this),
                          delete this._boundPointerEvents)
                      },
                      r.onmousemove = function (e) {
                        this._pointerMove(e, e)
                      },
                      r.onpointermove = function (e) {
                        e.pointerId == this.pointerIdentifier && this._pointerMove(e, e)
                      },
                      r.ontouchmove = function (e) {
                        var t = this.getTouch(e.changedTouches);
                        t && this._pointerMove(e, t)
                      },
                      r._pointerMove = function (e, t) {
                        this.pointerMove(e, t)
                      },
                      r.pointerMove = function (e, t) {
                        this.emitEvent("pointerMove", [e, t])
                      },
                      r.onmouseup = function (e) {
                        this._pointerUp(e, e)
                      },
                      r.onpointerup = function (e) {
                        e.pointerId == this.pointerIdentifier && this._pointerUp(e, e)
                      },
                      r.ontouchend = function (e) {
                        var t = this.getTouch(e.changedTouches);
                        t && this._pointerUp(e, t)
                      },
                      r._pointerUp = function (e, t) {
                        this._pointerDone(),
                          this.pointerUp(e, t)
                      },
                      r.pointerUp = function (e, t) {
                        this.emitEvent("pointerUp", [e, t])
                      },
                      r._pointerDone = function () {
                        this._pointerReset(),
                          this._unbindPostStartEvents(),
                          this.pointerDone()
                      },
                      r._pointerReset = function () {
                        this.isPointerDown = !1,
                          delete this.pointerIdentifier
                      },
                      r.pointerDone = function () {},
                      r.onpointercancel = function (e) {
                        e.pointerId == this.pointerIdentifier && this._pointerCancel(e, e)
                      },
                      r.ontouchcancel = function (e) {
                        var t = this.getTouch(e.changedTouches);
                        t && this._pointerCancel(e, t)
                      },
                      r._pointerCancel = function (e, t) {
                        this._pointerDone(),
                          this.pointerCancel(e, t)
                      },
                      r.pointerCancel = function (e, t) {
                        this.emitEvent("pointerCancel", [e, t])
                      },
                      n.getPointerPoint = function (e) {
                        return {
                          x: e.pageX,
                          y: e.pageY
                        }
                      },
                      n
                  }(i, e)
                }
                .apply(t, r)) || (e.exports = o)
          }(window)
      }, function (e, t, n) {
        var r, o;
        "function" == typeof Symbol && Symbol.iterator,
          "undefined" != typeof window && window,
          void 0 === (o = "function" == typeof (r = function () {
            function e() {}
            var t = e.prototype;
            return t.on = function (e, t) {
                if (e && t) {
                  var n = this._events = this._events || {},
                    r = n[e] = n[e] || [];
                  return -1 == r.indexOf(t) && r.push(t),
                    this
                }
              },
              t.once = function (e, t) {
                if (e && t) {
                  this.on(e, t);
                  var n = this._onceEvents = this._onceEvents || {};
                  return (n[e] = n[e] || {})[t] = !0,
                    this
                }
              },
              t.off = function (e, t) {
                var n = this._events && this._events[e];
                if (n && n.length) {
                  var r = n.indexOf(t);
                  return -1 != r && n.splice(r, 1),
                    this
                }
              },
              t.emitEvent = function (e, t) {
                var n = this._events && this._events[e];
                if (n && n.length) {
                  n = n.slice(0),
                    t = t || [];
                  for (var r = this._onceEvents && this._onceEvents[e], o = 0; o < n.length; o++) {
                    var i = n[o];
                    r && r[i] && (this.off(e, i),
                        delete r[i]),
                      i.apply(this, t)
                  }
                  return this
                }
              },
              t.allOff = function () {
                delete this._events,
                  delete this._onceEvents
              },
              e
          }) ? r.call(t, n, t, e) : r) || (e.exports = o)
      }, function (e, t, n) {
        var r, o = (r = n(0)) && r.__esModule ? r : {
          default: r
        };
        o.default.install("pc", function () {
          function e() {
            r.removeClass(a, "xgplayer-is-enter")
          }

          function t() {
            r.removeClass(a, "xgplayer-is-enter")
          }
          var n = this,
            r = o.default.util,
            i = n.controls,
            a = n.root,
            s = 0,
            l = void 0,
            u = n.config.centerBtn ? n.config.centerBtn : {},
            c = void 0,
            d = void 0,
            p = void 0;
          "img" === u.type ? d = o.default.util.createImgBtn("start", u.url.play, u.width, u.height) : (c = {
              pause: u.pausePath ? u.pausePath : "M576,363L810,512L576,661zM342,214L576,363L576,661L342,810z",
              play: u.playPath ? u.playPath : "M598,214h170v596h-170v-596zM256 810v-596h170v596h-170z"
            },
            d = r.createDom("xg-start", '\n          <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">\n              <path transform="scale(0.04,0.04)" d="' + c.pause + '"></path>\n          </svg>', {}, "xgplayer-start"),
            p = d.querySelector("path"));
          var f = r.createDom("xg-enter", '<xg-enter-logo class="xgplayer-enter-logo"></xg-enter-logo><xg-enter-tips class="xgplayer-enter-tips"></xg-player-tips>', {}, "xgplayer-enter"),
            g = f.querySelector(".xgplayer-enter-logo");
          a.appendChild(d),
            a.appendChild(f);
          var h = f.querySelector(".xgplayer-enter-tips"),
            v = new Image;
          v.onload = function () {
              h.style.display = "block"
            },
            n.config.enterLogo && n.config.enterLogo.url && n.config.enterLogo.width && n.config.enterLogo.height ? (v.src = n.config.enterLogo.url,
              g.style.backgroundImage = 'url("' + n.config.enterLogo.url + '")',
              g.style.width = n.config.enterLogo.width + "px",
              g.style.height = n.config.enterLogo.height + "px",
              g.style.backgroundSize = n.config.enterLogo.width + "px " + n.config.enterLogo.height + "px",
              g.style.margin = "-" + n.config.enterLogo.height / 2 + "px auto auto -" + n.config.enterLogo.width / 2 + "px",
              h.style.margin = n.config.enterLogo.height - 6 + "px auto auto -62px") : v.src = r.getBgImage(g),
            n.config.enterTips && n.config.enterTips.background && (h.style.background = "" + n.config.enterTips.background),
            n.config.enterBg && (n.config.enterBg.url ? f.style.backgroundImage = 'url("' + n.config.enterBg.url + '")' : n.config.enterBg.color && (f.style.background = n.config.enterBg.color)),
            ["click", "touchend"].forEach(function (o) {
              d.addEventListener(o, function (o) {
                ! function (o) {
                  o.preventDefault(),
                    o.stopPropagation(),
                    r.hasClass(a, "xgplayer-nostart") ? (r.removeClass(a, "xgplayer-nostart"),
                      r.addClass(a, "xgplayer-is-enter"),
                      n.on("canplay", e),
                      n.once("playing", t),
                      a.querySelector("video") || n.start(),
                      n.play()) : n.paused && (r.removeClass(a, "xgplayer-nostart xgplayer-isloading"),
                      setTimeout(function () {
                        n.play()
                      }, 10))
                }(o)
              }, !1)
            }),
            d.addEventListener("animationend", function (e) {
              ! function (e) {
                e.preventDefault(),
                  r.removeClass(d, "xgplayer-start-interact"),
                  d.style.display = "none"
              }(e)
            }),
            n.on("play", function () {
              "img" === u.type ? d.style.backgroundImage = 'url("' + u.url.pause + '")' : p.setAttribute("d", c.pause),
                d.style.display = "inline-block",
                r.addClass(d, "xgplayer-start-interact")
            }),
            n.on("pause", function () {
              "img" === u.type ? d.style.backgroundImage = 'url("' + u.url.play + '")' : p.setAttribute("d", c.play),
                d.style.display = "inline-block",
                r.addClass(d, "xgplayer-start-interact")
            }),
            n.video.addEventListener("click", function (e) {
              ! function (e) {
                e.preventDefault(),
                  e.stopPropagation(),
                  document.activeElement === n.video ? n.config.closeVideoClick || (s++,
                    l && clearTimeout(l),
                    1 === s ? l = setTimeout(function () {
                      if (r.hasClass(n.root, "xgplayer-nostart"))
                        return !1;
                      n.ended || (n.paused ? n.play() : n.pause()),
                        s = 0
                    }, 200) : s = 0) : n.video.focus()
              }(e)
            }, !1),
            n.video.addEventListener("dblclick", function (e) {
              ! function (e) {
                if (e.preventDefault(),
                  e.stopPropagation(),
                  document.activeElement === n.video) {
                  if (!n.config.closeVideoDblclick) {
                    var t = i.querySelector(".xgplayer-fullscreen");
                    if (t) {
                      var r = void 0;
                      document.createEvent ? (r = document.createEvent("Event")).initEvent("click", !0, !0) : r = new Event("click"),
                        t.dispatchEvent(r)
                    }
                  }
                } else
                  n.video.focus()
              }(e)
            }, !1),
            a.addEventListener("mouseenter", function () {
              n.emit("focus", n)
            }, !1),
            a.addEventListener("mouseleave", function () {
              n.emit("blur", n)
            }, !1),
            i.addEventListener("mouseenter", function (e) {
              n.userTimer && clearTimeout(n.userTimer)
            }, !1),
            i.addEventListener("mouseleave", function (e) {
              n.emit("focus", n)
            }, !1),
            n.once("ready", function (e) {
              n.config.autoplay && n.start()
            })
        })
      }, function (e, t, n) {
        function r(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }
        var o = r(n(0)),
          i = r(n(2));
        o.default.install("mobile", function () {
          var e = this,
            t = o.default.util,
            n = e.root,
            r = function (e) {
              var t = o.default.util;
              return e.some(function (e) {
                return "Function" === t.typeOf(e) ? e.call(void 0, navigator.userAgent) : "RegExp" === t.typeOf(e) ? e.test(navigator.userAgent) : "String" === t.typeOf(e) && navigator.userAgent.indexOf(e) > -1
              })
            }(e.config.whitelist);
          e.mobilePass = r;
          var a = e.config.centerBtn ? e.config.centerBtn : {},
            s = void 0,
            l = void 0,
            u = void 0,
            c = void 0;
          "img" === a.type ? l = o.default.util.createImgBtn("start", a.url.play, a.width, a.height) : (s = {
              pause: a.pausePath ? a.pausePath : "M576,363L810,512L576,661zM342,214L576,363L576,661L342,810z",
              play: a.playPath ? a.playPath : "M598,214h170v596h-170v-596zM256 810v-596h170v596h-170z"
            },
            l = t.createDom("xg-start", '\n          <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">\n              <path transform="scale(0.04,0.04)" d="' + s.pause + '"></path>\n          </svg>', {}, "xgplayer-start"),
            u = l.querySelector("path"),
            c = new i.default({
              from: s.play,
              to: s.pause,
              progress: function (e, t) {
                u.setAttribute("d", c.toSVGString(e))
              }
            }));
          var d = t.createDom("xg-enter", '<xg-enter-logo class="xgplayer-enter-logo"></xg-enter-logo><xg-enter-tips class="xgplayer-enter-tips"></xg-player-tips>', {}, "xgplayer-enter"),
            p = d.querySelector(".xgplayer-enter-logo");
          n.appendChild(l),
            n.appendChild(d);
          var f = d.querySelector(".xgplayer-enter-tips"),
            g = new Image;
          g.onload = function () {
              f.style.display = "block"
            },
            e.config.enterLogo && e.config.enterLogo.url && e.config.enterLogo.width && e.config.enterLogo.height ? (g.src = e.config.enterLogo.url,
              p.style.backgroundImage = 'url("' + e.config.enterLogo.url + '")',
              p.style.width = e.config.enterLogo.width + "px",
              p.style.height = e.config.enterLogo.height + "px",
              p.style.backgroundSize = e.config.enterLogo.width + "px " + e.config.enterLogo.height + "px",
              p.style.margin = "-" + e.config.enterLogo.height / 2 + "px auto auto -" + e.config.enterLogo.width / 2 + "px",
              f.style.margin = e.config.enterLogo.height - 6 + "px auto auto -62px") : g.src = t.getBgImage(p),
            e.config.enterTips && e.config.enterTips.background && (f.style.background = "" + e.config.enterTips.background),
            e.config.enterBg && (e.config.enterBg.url ? d.style.backgroundImage = 'url("' + e.config.enterBg.url + '")' : e.config.enterBg.color && (d.style.background = e.config.enterBg.color)),
            e.start(),
            r ? (e.video.addEventListener("touchend", function (r) {
                r.preventDefault(),
                  t.hasClass(n, "xgplayer-inactive") ? e.emit("focus") : e.emit("blur"),
                  e.config.closeVideoTouch || e.ended || (e.paused ? e.play() : e.pause())
              }, !1),
              l.addEventListener("touchend", function (r) {
                r.preventDefault(),
                  t.hasClass(n, "xgplayer-nostart") ? (t.removeClass(n, "xgplayer-nostart"),
                    t.addClass(n, "xgplayer-is-enter"),
                    e.on("canplay", function () {
                      t.removeClass(n, "xgplayer-is-enter")
                    }),
                    e.once("playing", function () {
                      t.removeClass(n, "xgplayer-is-enter")
                    }),
                    e.play()) : e.paused ? e.play() : e.pause()
              }),
              e.on("play", function () {
                "img" === a.type ? l.style.backgroundImage = 'url("' + a.url.pause + '")' : c.reset(s.play, s.pause)
              }),
              e.on("pause", function () {
                "img" === a.type ? l.style.backgroundImage = 'url("' + a.url.play + '")' : c.reset(s.pause, s.play)
              })) : (t.addClass(n, "xgplayer-mobile-npassed"),
              e.once("ready", function () {
                e.video.controls = e.config.controls,
                  e.video.controlsList = e.config.controlsList.join(" "),
                  e.config.poster && (e.video.poster = e.config.poster)
              })),
            e.config.debug && function (e) {
              var t = {};
              Object.assign(t, {
                host: "127.0.0.1",
                port: 9090
              }, e);
              var n = document.createElement("script"),
                r = document.createElement("h4");
              r.style.cssText = "position:fixed;bottom:0;padding:10px;width:100%;background-color:#fff;text-align:center",
                r.textContent = "weinre --boundHost " + t.host + " --httpPort " + t.port + "\r\n 启动服务后，刷新页面",
                n.anonymous = !0,
                n.async = !0,
                n.src = "http://" + t.host + ":" + t.port + "/target/target-script-min.js#anonymous",
                n.onload = function () {
                  r.parentNode.removeChild(r)
                },
                document.body.appendChild(n),
                document.body.appendChild(r)
            }(e.config.debug)
        })
      }, function (e, t, n) {
        function r(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }
        var o = r(n(0)),
          i = r(n(6)),
          a = r(n(7));
        o.default.install("logger", function () {
          var e = this,
            t = o.default.util;
          if (!0 !== e.config.noLog) {
            window.__xigua_log_sdk__ || (window.__xigua_log_sdk__ = new a.default("tracker"),
                window.__xigua_log_sdk__.init({
                  app_id: 1300,
                  channel: "cn",
                  log: !1,
                  disable_sdk_monitor: !0
                }),
                window.__xigua_log_sdk__("config", {
                  evtParams: {
                    log_type: "logger",
                    page_url: document.URL,
                    domain: window.location.host,
                    pver: e.version,
                    ua: navigator.userAgent.toLowerCase()
                  },
                  disable_auto_pv: !0
                }),
                window.__xigua_log_sdk__.start()),
              e.config.uid && window.__xigua_log_sdk__("config", {
                user_unique_id: e.config.uid
              });
            var n = function () {
                for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = [], n = 0; n < e.length; n++)
                  if (!(!e[n].end || e[n].begin < 0 || e[n].end < 0 || e[n].end < e[n].begin))
                    if (t.length < 1)
                      t.push({
                        begin: e[n].begin,
                        end: e[n].end
                      });
                    else
                      for (var r = 0; r < t.length; r++) {
                        var o = e[n].begin,
                          i = e[n].end;
                        if (i < t[r].begin) {
                          t.splice(r, 0, {
                            begin: o,
                            end: i
                          });
                          break
                        }
                        if (!(o > t[r].end)) {
                          var a = t[r].begin,
                            s = t[r].end;
                          t[r].begin = Math.min(o, a),
                            t[r].end = Math.max(i, s);
                          break
                        }
                        if (r > t.length - 2) {
                          t.push({
                            begin: o,
                            end: i
                          });
                          break
                        }
                      }
                for (var l = 0, u = 0; u < t.length; u++)
                  l += t[u].end - t[u].begin;
                return l
              },
              r = function () {
                e.logParams.pt && e.logParams.vt || (e.logParams.pt = (new Date).getTime(),
                    e.logParams.vt = e.logParams.pt),
                  e.logParams.pt > e.logParams.vt && (e.logParams.pt = e.logParams.vt)
              },
              s = function (o) {
                if (t.hasClass(e.root, "xgplayer-is-enter")) {
                  var i = (new Date).getTime(),
                    a = {
                      url: e.logParams.pluginSrc ? e.logParams.pluginSrc : e.logParams.playSrc,
                      vid: e.config.vid,
                      pt: e.logParams.pt,
                      lt: i
                    };
                  window.__xigua_log_sdk__("b", a)
                } else if (t.hasClass(e.root, "xgplayer-playing")) {
                  var s = n(e.logParams.played),
                    l = (new Date).getTime();
                  r();
                  var u = {
                    url: e.logParams.pluginSrc ? e.logParams.pluginSrc : e.logParams.playSrc,
                    vid: e.config.vid,
                    bc: e.logParams.bc - 1 > 0 ? e.logParams.bc - 1 : 0,
                    bb: e.logParams.bc - 1 > 0 ? 1 : 0,
                    bu_acu_t: e.logParams.bu_acu_t,
                    pt: e.logParams.pt,
                    vt: e.logParams.vt,
                    vd: 1e3 * e.logParams.vd,
                    watch_dur: parseFloat((1e3 * s).toFixed(3)),
                    cur_play_pos: parseFloat((1e3 * e.currentTime).toFixed(3)),
                    lt: l
                  };
                  window.__xigua_log_sdk__("d", u)
                }
              };
            "pc" === i.default.device ? window.addEventListener("beforeunload", s, !1) : "mobile" === i.default.device && window.addEventListener("pagehide", s, !1),
              e.on("routechange", s),
              e.on("destroy", function () {
                "pc" === i.default.device ? window.removeEventListener("beforeunload", s) : "mobile" === i.default.device && window.removeEventListener("pagehide", s)
              }),
              e.on("ended", function () {
                e.video.played;
                var t = n(e.logParams.played),
                  o = (new Date).getTime();
                r();
                var i = {
                  url: e.logParams.pluginSrc ? e.logParams.pluginSrc : e.logParams.playSrc,
                  vid: e.config.vid,
                  bc: e.logParams.bc - 1 > 0 ? e.logParams.bc - 1 : 0,
                  bb: e.logParams.bc - 1 > 0 ? 1 : 0,
                  bu_acu_t: e.logParams.bu_acu_t,
                  pt: e.logParams.pt,
                  vt: e.logParams.vt,
                  vd: 1e3 * e.logParams.vd,
                  watch_dur: parseFloat((1e3 * t).toFixed(3)),
                  cur_play_pos: parseFloat((1e3 * e.currentTime).toFixed(3)),
                  et: o
                };
                window.__xigua_log_sdk__("c", i)
              }),
              e.on("urlchange", function () {
                e.video.played;
                var t = n(e.logParams.played),
                  o = (new Date).getTime();
                r();
                var i = {
                  url: e.logParams.pluginSrc ? e.logParams.pluginSrc : e.logParams.playSrc,
                  vid: e.config.vid,
                  bc: e.logParams.bc - 1 > 0 ? e.logParams.bc - 1 : 0,
                  bb: e.logParams.bc - 1 > 0 ? 1 : 0,
                  bu_acu_t: e.logParams.bu_acu_t,
                  pt: e.logParams.pt,
                  vt: e.logParams.vt,
                  vd: 1e3 * e.logParams.vd,
                  watch_dur: parseFloat((1e3 * t).toFixed(3)),
                  cur_play_pos: parseFloat((1e3 * e.currentTime).toFixed(3)),
                  lt: o
                };
                window.__xigua_log_sdk__("d", i)
              }),
              e.on("error", function (t) {
                e.video.played;
                var o = n(e.logParams.played);
                r();
                var i = (new Date).getTime();
                if (!(e.logParams.lastErrLog && i - e.logParams.lastErrLog <= 3e3)) {
                  e.logParams.lastErrLog = i;
                  var a = {
                    url: e.logParams.pluginSrc ? e.logParams.pluginSrc : e.logParams.playSrc,
                    vid: e.config.vid,
                    bc: e.logParams.bc - 1 > 0 ? e.logParams.bc - 1 : 0,
                    bb: e.logParams.bc - 1 > 0 ? 1 : 0,
                    bu_acu_t: e.logParams.bu_acu_t,
                    pt: e.logParams.pt,
                    vt: e.logParams.vt,
                    vd: 1e3 * e.logParams.vd,
                    watch_dur: parseFloat((1e3 * o).toFixed(3)),
                    err_msg: t.errd.msg,
                    line: t.errd.line,
                    et: i,
                    cur_play_pos: parseFloat((1e3 * e.currentTime).toFixed(3))
                  };
                  if (e.logParams.nologFunc && e.logParams.nologFunc(e))
                    return !0;
                  window.__xigua_log_sdk__("e", a)
                }
              })
          }
        })
      }, function (e, t, n) {
        var r, o = (r = n(0)) && r.__esModule ? r : {
          default: r
        };
        o.default.install("localPreview", function () {
          var e = this,
            t = o.default.util,
            n = t.createDom("xg-preview", '<input type="file">', {}, "xgplayer-preview"),
            r = n.querySelector("input");
          e.config.preview && e.config.preview.uploadEl && (e.config.preview.uploadEl.appendChild(n),
            r.onchange = function () {
              e.uploadFile = r.files[0];
              var n = URL.createObjectURL(e.uploadFile);
              t.hasClass(e.root, "xgplayer-nostart") ? (e.config.url = n,
                e.start()) : (e.src = n,
                e.play())
            }
          )
        })
      }, function (e, t, n) {
        var r, o = (r = n(0)) && r.__esModule ? r : {
          default: r
        };
        o.default.install("loading", function () {
          var e = o.default.util.createDom("xg-loading", '\n    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewbox="0 0 100 100">\n      <path d="M100,50A50,50,0,1,1,50,0"></path>\n    </svg>\n    ', {}, "xgplayer-loading");
          this.root.appendChild(e)
        })
      }, function (e, t, n) {
        var r;
        ((r = n(0)) && r.__esModule ? r : {
          default: r
        }).default.install("i18n", function () {
          var e = this,
            t = {},
            n = e.constructor.util;
          t.en = {
              HAVE_NOTHING: "There is no information on whether audio/video is ready",
              HAVE_METADATA: "audio/video metadata is ready ",
              HAVE_CURRENT_DATA: "Data about the current play location is available, but there is not enough data to play the next frame/millisecond",
              HAVE_FUTURE_DATA: "Current and at least one frame of data is available",
              HAVE_ENOUGH_DATA: "The available data is sufficient to start playing",
              NETWORK_EMPTY: "Audio/video has not been initialized",
              NETWORK_IDLE: "Audio/video is active and has been selected for resources, but no network is used",
              NETWORK_LOADING: "The browser is downloading the data",
              NETWORK_NO_SOURCE: "No audio/video source was found",
              MEDIA_ERR_ABORTED: "The fetch process is aborted by the user",
              MEDIA_ERR_NETWORK: "An error occurred while downloading",
              MEDIA_ERR_DECODE: "An error occurred while decoding",
              MEDIA_ERR_SRC_NOT_SUPPORTED: "Audio/video is not supported",
              REPLAY: "Replay",
              ERROR: "network is offline"
            },
            t["zh-cn"] = {
              HAVE_NOTHING: "没有关于音频/视频是否就绪的信息",
              HAVE_METADATA: "音频/视频的元数据已就绪",
              HAVE_CURRENT_DATA: "关于当前播放位置的数据是可用的，但没有足够的数据来播放下一帧/毫秒",
              HAVE_FUTURE_DATA: "当前及至少下一帧的数据是可用的",
              HAVE_ENOUGH_DATA: "可用数据足以开始播放",
              NETWORK_EMPTY: "音频/视频尚未初始化",
              NETWORK_IDLE: "音频/视频是活动的且已选取资源，但并未使用网络",
              NETWORK_LOADING: "浏览器正在下载数据",
              NETWORK_NO_SOURCE: "未找到音频/视频来源",
              MEDIA_ERR_ABORTED: "取回过程被用户中止",
              MEDIA_ERR_NETWORK: "当下载时发生错误",
              MEDIA_ERR_DECODE: "当解码时发生错误",
              MEDIA_ERR_SRC_NOT_SUPPORTED: "不支持的音频/视频格式",
              REPLAY: "重播",
              ERROR: "网络连接似乎出现了问题"
            },
            Object.defineProperty(e, "lang", {
              get: function () {
                return t[e.config.lang] || t.en
              },
              set: function (e) {
                "Object" === n.typeOf(e) && Object.keys(e).forEach(function (n) {
                  t[n] = e[n]
                })
              }
            })
        })
      }, function (e, t, n) {
        var r, o = (r = n(0)) && r.__esModule ? r : {
          default: r
        };
        o.default.install("fullscreen", function () {
          var e = this,
            t = o.default.util,
            n = "M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z",
            r = "M598 214h212v212h-84v-128h-128v-84zM726 726v-128h84v212h-212v-84h128zM214 426v-212h212v84h-128v128h-84zM298 598v128h128v84h-212v-212h84z",
            i = t.createDom("xg-fullscreen", '<xg-icon class="xgplayer-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">\n            <path transform="scale(0.03 0.03)" d="' + r + '"></path>\n        </svg></xg-icon>', {}, "xgplayer-fullscreen"),
            a = e.config.lang && "zh-cn" === e.config.lang ? "全屏" : "Full screen",
            s = e.config.lang && "zh-cn" === e.config.lang ? "退出全屏" : "Exit full screen",
            l = e.controls,
            u = e.root,
            c = t.createDom("xg-tips", a, {}, "xgplayer-tips"),
            d = i.querySelector("path");
          i.appendChild(c),
            l.appendChild(i),
            ["click", "touchend"].forEach(function (o) {
              i.addEventListener(o, function (o) {
                var i;
                o.preventDefault(),
                  o.stopPropagation(),
                  t.hasClass(u, "xgplayer-fullscreen-active") || t.hasClass(u, "xgplayer-is-fullscreen") ? (i = u,
                    d.setAttribute("d", r),
                    c.textContent = a,
                    document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen ? document.msExitFullscreen() : t.removeClass(i, "xgplayer-fullscreen-active")) : function (r) {
                    d.setAttribute("d", n),
                      c.textContent = s,
                      r.requestFullscreen ? r.requestFullscreen() : r.mozRequestFullScreen ? r.mozRequestFullScreen() : r.webkitRequestFullscreen ? r.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT) : e.video.webkitSupportsFullscreen ? e.video.webkitEnterFullscreen() : r.msRequestFullscreen ? r.msRequestFullscreen() : t.addClass(r, "xgplayer-fullscreen-active")
                  }(u)
              })
            }),
            e.video.addEventListener("webkitendfullscreen", function () {
              e.emit("exitFullscreen"),
                d.setAttribute("d", r)
            });
          var p = function (o) {
            var i = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
            i && i === u ? (t.addClass(u, "xgplayer-is-fullscreen"),
              d.setAttribute("d", n),
              c.textContent = s,
              e.emit("requestFullscreen")) : (t.removeClass(u, "xgplayer-is-fullscreen"),
              d.setAttribute("d", r),
              c.textContent = a,
              e.emit("exitFullscreen"))
          };
          i.addEventListener("mouseenter", function (e) {
              e.preventDefault(),
                e.stopPropagation(),
                c.style.left = "50%";
              var t = c.getBoundingClientRect(),
                n = u.getBoundingClientRect();
              t.right > n.right && (c.style.left = -t.right + n.right + 16 + "px")
            }),
            ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"].forEach(function (e) {
              document.addEventListener(e, p)
            }),
            e.once("destroy", function () {
              ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"].forEach(function (e) {
                document.removeEventListener(e, p)
              })
            })
        })
      }, function (e, t, n) {
        var r, o = (r = n(0)) && r.__esModule ? r : {
          default: r
        };
        o.default.install("__flex__", function () {
          var e = o.default.util.createDom("xg-placeholder", "", {}, "xgplayer-placeholder");
          this.controls.appendChild(e)
        })
      }, function (e, t, n) {
        var r, o = (r = n(0)) && r.__esModule ? r : {
          default: r
        };
        o.default.install("error", function () {
          var e = this,
            t = o.default.util,
            n = t.createDom("xg-error", '<em class="xgplayer-error-text">请<span class="xgplayer-error-refresh">刷新</span>试试</em>', {}, "xgplayer-error");
          e.root.appendChild(n);
          var r = n.querySelector(".xgplayer-error-text"),
            i = null;
          e.on("error", function () {
            e.controls.style.display = "none",
              e.error ? r.innerHTML = e.error : e.config.lang && "zh-cn" === e.config.lang ? r.innerHTML = e.lang.ERROR + '，请<span class="xgplayer-error-refresh">刷新</span>试试' : r.innerHTML = e.lang.ERROR + '，please try to <span class="xgplayer-error-refresh">refresh</span>',
              t.addClass(e.root, "xgplayer-is-error"),
              (i = n.querySelector(".xgplayer-error-refresh")) && ["touchend", "click"].forEach(function (t) {
                i.addEventListener(t, function (t) {
                  t.preventDefault(),
                    t.stopPropagation();
                  var n = t.target || t.srcElement;
                  n && "span" === n.tagName.toLocaleLowerCase() && (e.controls.style.display = "flex",
                    e.reload())
                })
              })
          })
        })
      }, function (e, t, n) {
        function r(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }
        var o = r(n(0)),
          i = n(56),
          a = r(n(57));
        o.default.install("download", function () {
          var e = this;
          if (this.config.download) {
            var t = e.root,
              n = o.default.util,
              r = n.createDom("xgplayer-download", '<xg-icon class="xgplayer-download-img"></xg-icon>', {}, "xgplayer-download");
            e.controls.appendChild(r);
            var s = e.config.lang && "zh-cn" === e.config.lang ? "下载" : "Download",
              l = n.createDom("xg-tips", s, {}, "xgplayer-tips");
            r.appendChild(l),
              e.download = function () {
                var t = (0,
                  i.getAbsoluteURL)(e.config.url);
                (0,
                  a.default)(t)
              },
              r.addEventListener("click", function (t) {
                t.stopPropagation(),
                  e.download()
              }),
              r.addEventListener("mouseenter", function (e) {
                e.preventDefault(),
                  e.stopPropagation(),
                  l.style.left = "50%";
                var n = l.getBoundingClientRect(),
                  r = t.getBoundingClientRect();
                n.right > r.right && (l.style.left = -n.right + r.right + 16 + "px")
              })
          }
        })
      }, function (e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
          }),
          t.getAbsoluteURL = function (e) {
            if (!e.match(/^https?:\/\//)) {
              var t = document.createElement("div");
              t.innerHTML = '<a href="' + e + '">x</a>',
                e = t.firstChild.href
            }
            return e
          }
      }, function (e, t, n) {
        var r, o, i;
        "function" == typeof Symbol && Symbol.iterator,
          o = [],
          void 0 === (i = "function" == typeof (r = function () {
            return function e(t, n, r) {
              function o(e) {
                for (var t = e.split(/[:;,]/), n = t[1], r = ("base64" == t[2] ? atob : decodeURIComponent)(t.pop()), o = r.length, i = 0, a = new Uint8Array(o); i < o; ++i)
                  a[i] = r.charCodeAt(i);
                return new h([a], {
                  type: n
                })
              }

              function i(e, t) {
                if ("download" in f)
                  return f.href = e,
                    f.setAttribute("download", v),
                    f.className = "download-js-link",
                    f.innerHTML = "downloading...",
                    f.style.display = "none",
                    document.body.appendChild(f),
                    setTimeout(function () {
                      f.click(),
                        document.body.removeChild(f),
                        !0 === t && setTimeout(function () {
                          l.URL.revokeObjectURL(f.href)
                        }, 250)
                    }, 66),
                    !0;
                if (/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent))
                  return /^data:/.test(e) && (e = "data:" + e.replace(/^data:([\w\/\-\+]+)/, u)),
                    window.open(e) || confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.") && (location.href = e),
                    !0;
                var n = document.createElement("iframe");
                document.body.appendChild(n),
                  !t && /^data:/.test(e) && (e = "data:" + e.replace(/^data:([\w\/\-\+]+)/, u)),
                  n.src = e,
                  setTimeout(function () {
                    document.body.removeChild(n)
                  }, 333)
              }
              var a, s, l = window,
                u = "application/octet-stream",
                c = r || u,
                d = t,
                p = !n && !r && d,
                f = document.createElement("a"),
                g = function (e) {
                  return String(e)
                },
                h = l.Blob || l.MozBlob || l.WebKitBlob || g,
                v = n || "download";
              if (h = h.call ? h.bind(l) : Blob,
                "true" === String(this) && (c = (d = [d, c])[0],
                  d = d[1]),
                p && p.length < 2048 && (v = p.split("/").pop().split("?")[0],
                  f.href = p,
                  -1 !== f.href.indexOf(p))) {
                var y = new XMLHttpRequest;
                return y.open("GET", p, !0),
                  y.responseType = "blob",
                  y.onload = function (t) {
                    e(t.target.response, v, u)
                  },
                  setTimeout(function () {
                    y.send()
                  }, 0),
                  y
              }
              if (/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(d)) {
                if (!(d.length > 2096103.424 && h !== g))
                  return navigator.msSaveBlob ? navigator.msSaveBlob(o(d), v) : i(d);
                d = o(d),
                  c = d.type || u
              } else if (/([\x80-\xff])/.test(d)) {
                for (var m = 0, b = new Uint8Array(d.length), x = b.length; m < x; ++m)
                  b[m] = d.charCodeAt(m);
                d = new h([b], {
                  type: c
                })
              }
              if (a = d instanceof h ? d : new h([d], {
                  type: c
                }),
                navigator.msSaveBlob)
                return navigator.msSaveBlob(a, v);
              if (l.URL)
                i(l.URL.createObjectURL(a), !0);
              else {
                if ("string" == typeof a || a.constructor === g)
                  try {
                    return i("data:" + c + ";base64," + l.btoa(a))
                  } catch (e) {
                    return i("data:" + c + "," + encodeURIComponent(a))
                  }
                  (s = new FileReader).onload = function (e) {
                    i(this.result)
                  },
                  s.readAsDataURL(a)
              }
              return !0
            }
          }) ? r.apply(t, o) : r) || (e.exports = i)
      }, function (e, t, n) {
        var r, o = (r = n(0)) && r.__esModule ? r : {
          default: r
        };
        o.default.install("definition", function () {
          var e = this,
            t = o.default.util,
            n = o.default.sniffer,
            r = t.createDom("xg-definition", "", {
              tabindex: 3
            }, "xgplayer-definition"),
            i = e.controls;
          if ("mobile" !== n.device) {
            var a = [];
            e.on("resourceReady", function (n) {
                (a = n) && a instanceof Array && a.length > 1 && (t.addClass(e.root, "xgplayer-is-definition"),
                  e.on("canplay", function () {
                    var n = ["<ul>"],
                      o = e.config.url,
                      s = document.createElement("a");
                    e.switchURL ? ["mp4", "hls", "flv", "dash"].every(function (t) {
                        return !e[t] || (s.href = e[t].url,
                          o = s.href,
                          !1)
                      }) : o = e.currentSrc || e.src,
                      a.forEach(function (t) {
                        s.href = t.url,
                          e.dash ? n.push("<li url='" + t.url + "' cname='" + t.name + "' class='" + (t.selected ? "definition" : "") + "'>" + t.name + "</li>") : n.push("<li url='" + t.url + "' cname='" + t.name + "' class='" + (s.href === o ? "definition" : "") + "'>" + t.name + "</li>")
                      });
                    var l = a.filter(function (t) {
                      return s.href = t.url,
                        e.dash ? !0 === t.selected : s.href === o
                    });
                    n.push("</ul><p class='name'>" + (l[0] || {
                      name: ""
                    }).name + "</p>");
                    var u = i.querySelector(".xgplayer-definition");
                    if (u) {
                      u.innerHTML = n.join("");
                      var c = u.querySelector(".name");
                      e.config.definitionActive && "hover" !== e.config.definitionActive || c.addEventListener("mouseenter", function (n) {
                        n.preventDefault(),
                          n.stopPropagation(),
                          t.addClass(e.root, "xgplayer-definition-active"),
                          u.focus()
                      })
                    } else {
                      r.innerHTML = n.join("");
                      var d = r.querySelector(".name");
                      e.config.definitionActive && "hover" !== e.config.definitionActive || d.addEventListener("mouseenter", function (n) {
                          n.preventDefault(),
                            n.stopPropagation(),
                            t.addClass(e.root, "xgplayer-definition-active"),
                            r.focus()
                        }),
                        i.appendChild(r)
                    }
                  }))
              }),
              ["touchend", "click"].forEach(function (n) {
                r.addEventListener(n, function (n) {
                  n.preventDefault(),
                    n.stopPropagation();
                  var o = n.target || n.srcElement,
                    i = document.createElement("a");
                  if (o && "li" === o.tagName.toLocaleLowerCase()) {
                    if (e.emit("beforeDefinitionChange", i.href),
                      Array.prototype.forEach.call(o.parentNode.childNodes, function (e) {
                        t.removeClass(e, "definition")
                      }),
                      e.dash && a.forEach(function (e) {
                        e.selected = !1,
                          e.name === o.innerHTML && (e.selected = !0)
                      }),
                      t.addClass(o, "definition"),
                      o.parentNode.nextSibling.innerHTML = "" + o.getAttribute("cname"),
                      i.href = o.getAttribute("url"),
                      e.switchURL) {
                      var s = document.createElement("a");
                      ["mp4", "hls", "flv", "dash"].every(function (t) {
                          return !e[t] || (s = e[t].url,
                            !1)
                        }),
                        s.href === i.href || e.ended || e.switchURL(i.href)
                    } else if (i.href !== e.currentSrc) {
                      var l = e.currentTime,
                        u = e.paused;
                      e.ended || (e.src = i.href,
                        e.once("canplay", function () {
                          e.currentTime = l,
                            u || e.play()
                        }))
                    }
                    e.emit("definitionChange", i.href)
                  } else
                    "click" !== e.config.definitionActive || !o || "p" !== o.tagName.toLocaleLowerCase() && "em" !== o.tagName.toLocaleLowerCase() || (t.addClass(e.root, "xgplayer-definition-active"),
                      r.focus())
                }, !1)
              }),
              r.addEventListener("mouseleave", function (n) {
                n.preventDefault(),
                  n.stopPropagation(),
                  t.removeClass(e.root, "xgplayer-definition-active")
              })
          }
        })
      }, function (e, t, n) {
        function r(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }
        var o = r(n(0)),
          i = r(n(60));
        o.default.install("danmu", function () {
          var e = this;
          if (e.config.danmu) {
            var t = o.default.util.createDom("xg-bullet", "", {}, "xgplayer-bullet");
            e.root.appendChild(t),
              t.style.height = "100%";
            var n = o.default.util.deepCopy({
              container: t,
              player: e.video,
              comments: [],
              area: {
                start: 0,
                end: 1
              }
            }, e.config.danmu);
            e.once("complete", function () {
              var r = new i.default(n);
              o.default.util.addClass(t, "xgplayer-has-bullet"),
                e.config.danmu.closeDefaultBtn || (e.bulletBtn = o.default.util.copyDom(r.bulletBtn.createSwitch(!0)),
                  e.controls.appendChild(e.bulletBtn),
                  ["click", "touchend"].forEach(function (n) {
                    e.bulletBtn.addEventListener(n, function (n) {
                      n.preventDefault(),
                        n.stopPropagation(),
                        o.default.util.toggleClass(e.bulletBtn, "danmu-switch-active"),
                        o.default.util.hasClass(e.bulletBtn, "danmu-switch-active") ? (o.default.util.addClass(t, "xgplayer-has-bullet"),
                          e.once("timeupdate", function () {
                            r.start()
                          })) : (o.default.util.removeClass(t, "xgplayer-has-bullet"),
                          r.stop())
                    }, !1)
                  }),
                  e.on("pause", function () {
                    o.default.util.hasClass(e.bulletBtn, "danmu-switch-active") && r.pause()
                  }),
                  e.on("play", function () {
                    o.default.util.hasClass(e.bulletBtn, "danmu-switch-active") && r.play()
                  }),
                  e.on("seeked", function () {
                    o.default.util.hasClass(e.bulletBtn, "danmu-switch-active") && (r.stop(),
                      r.start())
                  })),
                e.danmu = r
            })
          }
        })
      }, function (e, t, n) {
        (function (e) {
          var n, r, o, i, a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
              return typeof e
            } :
            function (e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
          window,
          i = function () {
              return function (e) {
                function t(r) {
                  if (n[r])
                    return n[r].exports;
                  var o = n[r] = {
                    i: r,
                    l: !1,
                    exports: {}
                  };
                  return e[r].call(o.exports, o, o.exports, t),
                    o.l = !0,
                    o.exports
                }
                var n = {};
                return t.m = e,
                  t.c = n,
                  t.d = function (e, n, r) {
                    t.o(e, n) || Object.defineProperty(e, n, {
                      configurable: !1,
                      enumerable: !0,
                      get: r
                    })
                  },
                  t.r = function (e) {
                    Object.defineProperty(e, "__esModule", {
                      value: !0
                    })
                  },
                  t.n = function (e) {
                    var n = e && e.__esModule ? function () {
                        return e.default
                      } :
                      function () {
                        return e
                      };
                    return t.d(n, "a", n),
                      n
                  },
                  t.o = function (e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                  },
                  t.p = "",
                  t(t.s = 29)
              }([function (e, t, n) {
                Object.defineProperty(t, "__esModule", {
                  value: !0
                });
                var r = {
                  createDom: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "div",
                      t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                      r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
                      o = document.createElement(e);
                    return o.className = r,
                      o.innerHTML = t,
                      Object.keys(n).forEach(function (t) {
                        var r = t,
                          i = n[t];
                        "video" === e || "audio" === e ? i && o.setAttribute(r, i) : o.setAttribute(r, i)
                      }),
                      o
                  },
                  hasClass: function (e, t) {
                    return e.classList ? Array.prototype.some.call(e.classList, function (e) {
                      return e === t
                    }) : !!e.className.match(new RegExp("(\\s|^)" + t + "(\\s|$)"))
                  },
                  addClass: function (e, t) {
                    e.classList ? t.replace(/(^\s+|\s+$)/g, "").split(/\s+/g).forEach(function (t) {
                      t && e.classList.add(t)
                    }) : r.hasClass(e, t) || (e.className += " " + t)
                  },
                  removeClass: function (e, t) {
                    e.classList ? t.split(/\s+/g).forEach(function (t) {
                      e.classList.remove(t)
                    }) : r.hasClass(e, t) && t.split(/\s+/g).forEach(function (t) {
                      var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
                      e.className = e.className.replace(n, " ")
                    })
                  },
                  toggleClass: function (e, t) {
                    t.split(/\s+/g).forEach(function (t) {
                      r.hasClass(e, t) ? r.removeClass(e, t) : r.addClass(e, t)
                    })
                  },
                  findDom: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
                      t = arguments[1],
                      n = void 0;
                    try {
                      n = e.querySelector(t)
                    } catch (r) {
                      t.startsWith("#") && (n = e.getElementById(t.slice(1)))
                    }
                    return n
                  },
                  deepCopy: function (e, t) {
                    if ("Object" === r.typeOf(t) && "Object" === r.typeOf(e))
                      return Object.keys(t).forEach(function (n) {
                          "Object" !== r.typeOf(t[n]) || t[n] instanceof Node ? "Array" === r.typeOf(t[n]) ? e[n] = "Array" === r.typeOf(e[n]) ? e[n].concat(t[n]) : t[n] : e[n] = t[n] : e[n] ? r.deepCopy(e[n], t[n]) : e[n] = t[n]
                        }),
                        e
                  },
                  typeOf: function (e) {
                    return Object.prototype.toString.call(e).match(/([^\s.*]+)(?=]$)/g)[0]
                  },
                  copyDom: function (e) {
                    if (e && 1 === e.nodeType) {
                      var t = document.createElement(e.tagName);
                      return Array.prototype.forEach.call(e.attributes, function (e) {
                          t.setAttribute(e.name, e.value)
                        }),
                        e.innerHTML && (t.innerHTML = e.innerHTML),
                        t
                    }
                    return ""
                  },
                  formatTime: function (e) {
                    var t = Math.floor(e);
                    return 1e3 * t + (e - t)
                  }
                };
                t.default = r,
                  e.exports = t.default
              }, function (e, t, n) {
                var r = n(18)();
                e.exports = function (e) {
                  return e !== r && null !== e
                }
              }, function (e, t) {
                e.exports = function (e) {
                  var t = "undefined" != typeof window && window.location;
                  if (!t)
                    throw new Error("fixUrls requires window.location");
                  if (!e || "string" != typeof e)
                    return e;
                  var n = t.protocol + "//" + t.host,
                    r = n + t.pathname.replace(/\/[^\/]*$/, "/");
                  return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (e, t) {
                    var o, i = t.trim().replace(/^"(.*)"$/, function (e, t) {
                      return t
                    }).replace(/^'(.*)'$/, function (e, t) {
                      return t
                    });
                    return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? e : (o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : r + i.replace(/^\.\//, ""),
                      "url(" + JSON.stringify(o) + ")")
                  })
                }
              }, function (e, t, n) {
                function r(e, t) {
                  for (var n = 0; n < e.length; n++) {
                    var r = e[n],
                      o = g[r.id];
                    if (o) {
                      o.refs++;
                      for (var i = 0; i < o.parts.length; i++)
                        o.parts[i](r.parts[i]);
                      for (; i < r.parts.length; i++)
                        o.parts.push(c(r.parts[i], t))
                    } else {
                      var a = [];
                      for (i = 0; i < r.parts.length; i++)
                        a.push(c(r.parts[i], t));
                      g[r.id] = {
                        id: r.id,
                        refs: 1,
                        parts: a
                      }
                    }
                  }
                }

                function o(e, t) {
                  for (var n = [], r = {}, o = 0; o < e.length; o++) {
                    var i = e[o],
                      a = t.base ? i[0] + t.base : i[0],
                      s = {
                        css: i[1],
                        media: i[2],
                        sourceMap: i[3]
                      };
                    r[a] ? r[a].parts.push(s) : n.push(r[a] = {
                      id: a,
                      parts: [s]
                    })
                  }
                  return n
                }

                function i(e, t) {
                  var n = v(e.insertInto);
                  if (!n)
                    throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
                  var r = b[b.length - 1];
                  if ("top" === e.insertAt)
                    r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild),
                    b.push(t);
                  else if ("bottom" === e.insertAt)
                    n.appendChild(t);
                  else {
                    if ("object" != a(e.insertAt) || !e.insertAt.before)
                      throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                    var o = v(e.insertInto + " " + e.insertAt.before);
                    n.insertBefore(t, o)
                  }
                }

                function s(e) {
                  if (null === e.parentNode)
                    return !1;
                  e.parentNode.removeChild(e);
                  var t = b.indexOf(e);
                  t >= 0 && b.splice(t, 1)
                }

                function l(e) {
                  var t = document.createElement("style");
                  return void 0 === e.attrs.type && (e.attrs.type = "text/css"),
                    u(t, e.attrs),
                    i(e, t),
                    t
                }

                function u(e, t) {
                  Object.keys(t).forEach(function (n) {
                    e.setAttribute(n, t[n])
                  })
                }

                function c(e, t) {
                  var n, r, o, a;
                  if (t.transform && e.css) {
                    if (!(a = t.transform(e.css)))
                      return function () {};
                    e.css = a
                  }
                  if (t.singleton) {
                    var c = m++;
                    n = y || (y = l(t)),
                      r = d.bind(null, n, c, !1),
                      o = d.bind(null, n, c, !0)
                  } else
                    e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function (e) {
                        var t = document.createElement("link");
                        return void 0 === e.attrs.type && (e.attrs.type = "text/css"),
                          e.attrs.rel = "stylesheet",
                          u(t, e.attrs),
                          i(e, t),
                          t
                      }(t),
                      r = function (e, t, n) {
                        var r = n.css,
                          o = n.sourceMap,
                          i = void 0 === t.convertToAbsoluteUrls && o;
                        (t.convertToAbsoluteUrls || i) && (r = x(r)),
                        o && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
                        var a = new Blob([r], {
                            type: "text/css"
                          }),
                          s = e.href;
                        e.href = URL.createObjectURL(a),
                          s && URL.revokeObjectURL(s)
                      }
                      .bind(null, n, t),
                      o = function () {
                        s(n),
                          n.href && URL.revokeObjectURL(n.href)
                      }
                    ) : (n = l(t),
                      r = function (e, t) {
                        var n = t.css,
                          r = t.media;
                        if (r && e.setAttribute("media", r),
                          e.styleSheet)
                          e.styleSheet.cssText = n;
                        else {
                          for (; e.firstChild;)
                            e.removeChild(e.firstChild);
                          e.appendChild(document.createTextNode(n))
                        }
                      }
                      .bind(null, n),
                      o = function () {
                        s(n)
                      }
                    );
                  return r(e),
                    function (t) {
                      if (t) {
                        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap)
                          return;
                        r(e = t)
                      } else
                        o()
                    }
                }

                function d(e, t, n, r) {
                  var o = n ? "" : r.css;
                  if (e.styleSheet)
                    e.styleSheet.cssText = _(t, o);
                  else {
                    var i = document.createTextNode(o),
                      a = e.childNodes;
                    a[t] && e.removeChild(a[t]),
                      a.length ? e.insertBefore(i, a[t]) : e.appendChild(i)
                  }
                }
                var p, f, g = {},
                  h = (p = function () {
                      return window && document && document.all && !window.atob
                    },
                    function () {
                      return void 0 === f && (f = p.apply(this, arguments)),
                        f
                    }
                  ),
                  v = function (e) {
                    var t = {};
                    return function (e) {
                      if ("function" == typeof e)
                        return e();
                      if (void 0 === t[e]) {
                        var n = function (e) {
                            return document.querySelector(e)
                          }
                          .call(this, e);
                        if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                          try {
                            n = n.contentDocument.head
                          } catch (e) {
                            n = null
                          }
                        t[e] = n
                      }
                      return t[e]
                    }
                  }(),
                  y = null,
                  m = 0,
                  b = [],
                  x = n(2);
                e.exports = function (e, t) {
                  if ("undefined" != typeof DEBUG && DEBUG && "object" != ("undefined" == typeof document ? "undefined" : a(document)))
                    throw new Error("The style-loader cannot be used in a non-browser environment");
                  (t = t || {}).attrs = "object" == a(t.attrs) ? t.attrs : {},
                    t.singleton || "boolean" == typeof t.singleton || (t.singleton = h()),
                    t.insertInto || (t.insertInto = "head"),
                    t.insertAt || (t.insertAt = "bottom");
                  var n = o(e, t);
                  return r(n, t),
                    function (e) {
                      for (var i = [], a = 0; a < n.length; a++) {
                        var s = n[a];
                        (l = g[s.id]).refs--,
                        i.push(l)
                      }
                      for (e && r(o(e, t), t),
                        a = 0; a < i.length; a++) {
                        var l;
                        if (0 === (l = i[a]).refs) {
                          for (var u = 0; u < l.parts.length; u++)
                            l.parts[u]();
                          delete g[l.id]
                        }
                      }
                    }
                };
                var w, _ = (w = [],
                  function (e, t) {
                    return w[e] = t,
                      w.filter(Boolean).join("\n")
                  }
                )
              }, function (e, t) {
                e.exports = function (e) {
                  var t = [];
                  return t.toString = function () {
                      return this.map(function (t) {
                        var n = function (e, t) {
                          var n, r = e[1] || "",
                            o = e[3];
                          if (!o)
                            return r;
                          if (t && "function" == typeof btoa) {
                            var i = (n = o,
                                "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */"),
                              a = o.sources.map(function (e) {
                                return "/*# sourceURL=" + o.sourceRoot + e + " */"
                              });
                            return [r].concat(a).concat([i]).join("\n")
                          }
                          return [r].join("\n")
                        }(t, e);
                        return t[2] ? "@media " + t[2] + "{" + n + "}" : n
                      }).join("")
                    },
                    t.i = function (e, n) {
                      "string" == typeof e && (e = [
                        [null, e, ""]
                      ]);
                      for (var r = {}, o = 0; o < this.length; o++) {
                        var i = this[o][0];
                        "number" == typeof i && (r[i] = !0)
                      }
                      for (o = 0; o < e.length; o++) {
                        var a = e[o];
                        "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"),
                          t.push(a))
                      }
                    },
                    t
                }
              }, function (e, t, n) {
                (e.exports = n(4)(!1)).push([e.i, ".danmu{overflow:hidden;-webkit-user-select:none;-moz-user-select:none;user-select:none;-ms-user-select:none}.danmu>*{position:absolute;white-space:nowrap}.danmu-switch{width:32px;height:20px;border-radius:100px;background-color:#ccc;-webkit-box-sizing:border-box;box-sizing:border-box;outline:none;cursor:pointer;position:relative;text-align:center;margin:10px auto}.danmu-switch.danmu-switch-active{padding-left:12px;background-color:#f85959}.danmu-switch span.txt{width:20px;height:20px;line-height:20px;text-align:center;display:block;border-radius:100px;background-color:#ffffff;-webkit-box-shadow:-2px 0 0 0 rgba(0, 0, 0, .04);box-shadow:-2px 0 0 0 rgba(0, 0, 0, .04);font-family:PingFangSC;font-size:10px;font-weight:500;color:#f44336}\n", ""])
              }, function (e, t, n) {
                var r = n(5);
                "string" == typeof r && (r = [
                    [e.i, r, ""]
                  ]),
                  n(3)(r, {
                    hmr: !0,
                    transform: void 0,
                    insertInto: void 0
                  }),
                  r.locals && (e.exports = r.locals)
              }, function (e, t, n) {
                Object.defineProperty(t, "__esModule", {
                  value: !0
                });
                var r, o = function () {
                    function e(e, t) {
                      for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1,
                          r.configurable = !0,
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(e, r.key, r)
                      }
                    }
                    return function (t, n, r) {
                      return n && e(t.prototype, n),
                        r && e(t, r),
                        t
                    }
                  }(),
                  i = (r = n(0)) && r.__esModule ? r : {
                    default: r
                  },
                  a = function () {
                    function e(t, n) {
                      ! function (e, t) {
                        if (!(e instanceof t))
                          throw new TypeError("Cannot call a class as a function")
                      }(this, e),
                      this.danmu = t,
                        this.duration = n.duration,
                        this.id = n.id,
                        this.container = t.container,
                        this.start = n.start,
                        this.prior = n.prior,
                        this.color = n.color,
                        this.bookChannelId = n.bookChannelId;
                      var r = void 0;
                      if (n.el && 1 === n.el.nodeType)
                        r = i.default.copyDom(n.el);
                      else if ((r = document.createElement("div")).textContent = n.txt,
                        n.style) {
                        var o = n.style;
                        Object.keys(o).forEach(function (e) {
                          r.style[e] = o[e]
                        })
                      }
                      "top" === n.mode || "bottom" === n.mode ? this.mode = n.mode : this.mode = "scroll",
                        this.el = r,
                        this.status = "waiting";
                      var a = this.container.getBoundingClientRect();
                      this.el.style.left = a.width + "px"
                    }
                    return o(e, [{
                        key: "attach",
                        value: function () {
                          this.container.appendChild(this.el),
                            this.elPos = this.el.getBoundingClientRect(),
                            this.width = this.elPos.width,
                            this.height = this.elPos.height
                        }
                      }, {
                        key: "detach",
                        value: function () {
                          this.container && this.el && this.container.removeChild(this.el),
                            this.el = null
                        }
                      }, {
                        key: "topInit",
                        value: function () {
                          this.el.style.top = this.top + "px"
                        }
                      }, {
                        key: "pauseMove",
                        value: function (e) {
                          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                          if ("paused" !== this.status && (this.status = "paused",
                              clearTimeout(this.removeTimer),
                              this.el))
                            if ("scroll" === this.mode) {
                              if (t) {
                                var n, r = ((new Date).getTime() - this.moveTime) / 1e3 * this.moveV;
                                n = this.moveMoreS - r >= 0 ? (this.moveMoreS - r) / this.moveContainerWidth * e.width : this.moveMoreS - r,
                                  this.el.style.left = n + "px"
                              } else
                                this.el.style.left = this.el.getBoundingClientRect().left - e.left + "px";
                              this.el.style.transform = "translateX(0px) translateY(0px) translateZ(0px)",
                                this.el.style.transition = "transform 0s linear 0s"
                            } else
                              this.pastDuration && this.startTime ? this.pastDuration = this.pastDuration + (new Date).getTime() - this.startTime : this.pastDuration = 1
                        }
                      }, {
                        key: "startMove",
                        value: function (e) {
                          function t() {
                            if (n.el)
                              if ("scroll" === n.mode) {
                                var e = n.danmu.container.getBoundingClientRect(),
                                  t = n.el.getBoundingClientRect();
                                t && t.right <= e.left + 100 ? (n.status = "end",
                                  n.remove()) : (n.pauseMove(e),
                                  n.startMove(e))
                              } else
                                n.status = "end",
                                n.remove()
                          }
                          var n = this;
                          if (this.el && "start" !== this.status)
                            if (this.status = "start",
                              "scroll" === this.mode) {
                              this.moveV = (e.width + this.width) / this.duration * 1e3;
                              var r = (n.el.getBoundingClientRect().right - e.left) / this.moveV;
                              this.el.style.transition = "transform " + r + "s linear 0s",
                                setTimeout(function () {
                                  n.el && (n.el.style.transform = "translateX(-" + (n.el.getBoundingClientRect().right - e.left) + "px) translateY(0px) translateZ(0px)",
                                    n.moveTime = (new Date).getTime(),
                                    n.moveMoreS = n.el.getBoundingClientRect().left - e.left,
                                    n.moveContainerWidth = e.width,
                                    n.removeTimer = setTimeout(t, 1e3 * r))
                                }, 20)
                            } else {
                              this.el.style.left = "50%",
                                this.el.style.margin = "0 0 0 -" + this.width / 2 + "px",
                                this.pastDuration || (this.pastDuration = 1);
                              var o = this.duration >= this.pastDuration ? this.duration - this.pastDuration : 0;
                              this.removeTimer = setTimeout(t, o),
                                this.startTime = (new Date).getTime()
                            }
                        }
                      }, {
                        key: "remove",
                        value: function () {
                          this.removeTimer && clearTimeout(this.removeTimer),
                            this.el && this.el.parentNode && (this.el.parentNode.removeChild(this.el),
                              this.el = null,
                              this.danmu.emit("bullet_remove", {
                                bullet: this
                              }))
                        }
                      }]),
                      e
                  }();
                t.default = a,
                  e.exports = t.default
              }, function (e, t, n) {
                Object.defineProperty(t, "__esModule", {
                  value: !0
                });
                var r = function () {
                    function e(e, t) {
                      for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1,
                          r.configurable = !0,
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(e, r.key, r)
                      }
                    }
                    return function (t, n, r) {
                      return n && e(t.prototype, n),
                        r && e(t, r),
                        t
                    }
                  }(),
                  o = function () {
                    function e(t) {
                      ! function (e, t) {
                        if (!(e instanceof t))
                          throw new TypeError("Cannot call a class as a function")
                      }(this, e),
                      this.danmu = t,
                        this.reset();
                      var n = this;
                      this.danmu.on("bullet_remove", function (e) {
                          n.removeBullet(e.bullet)
                        }),
                        this.containerPos = this.danmu.container.getBoundingClientRect(),
                        this.containerWidth = this.containerPos.width,
                        this.containerHeight = this.containerPos.height,
                        this.containerLeft = this.containerPos.left,
                        this.containerRight = this.containerPos.right,
                        this.danmu.bulletResizeTimer = setInterval(function () {
                          n.containerPos = n.danmu.container.getBoundingClientRect(),
                            (Math.abs(n.containerPos.width - n.containerWidth) >= 2 || Math.abs(n.containerPos.height - n.containerHeight) >= 2 || Math.abs(n.containerPos.left - n.containerLeft) >= 2 || Math.abs(n.containerPos.right - n.containerRight) >= 2) && (n.containerWidth = n.containerPos.width,
                              n.containerHeight = n.containerPos.height,
                              n.containerLeft = n.containerPos.left,
                              n.containerRight = n.containerPos.right,
                              n.resize(!0))
                        }, 50)
                    }
                    return r(e, [{
                        key: "resize",
                        value: function () {
                          var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            t = this.danmu.container,
                            n = this;
                          setTimeout(function () {
                            n.danmu.bulletBtn.main.data && n.danmu.bulletBtn.main.data.forEach(function (e) {
                              e.bookChannelId && delete e.bookChannelId
                            });
                            var r = t.getBoundingClientRect();
                            n.width = r.width,
                              n.height = r.height,
                              n.danmu.config.area && n.danmu.config.area.start >= 0 && n.danmu.config.area.end >= n.danmu.config.area.start && (n.height = n.height * (n.danmu.config.area.end - n.danmu.config.area.start)),
                              n.container = t;
                            for (var o = /mobile/gi.test(navigator.userAgent) ? 10 : 12, i = Math.floor(n.height / o), a = [], s = 0; s < i; s++)
                              a[s] = {
                                id: s,
                                queue: {
                                  scroll: [],
                                  top: [],
                                  bottom: []
                                },
                                operating: {
                                  scroll: !1,
                                  top: !1,
                                  bottom: !1
                                },
                                bookId: {}
                              };
                            if (n.channels && n.channels.length <= a.length) {
                              for (var l = function (t) {
                                  a[t] = {
                                      id: t,
                                      queue: {
                                        scroll: [],
                                        top: [],
                                        bottom: []
                                      },
                                      operating: {
                                        scroll: !1,
                                        top: !1,
                                        bottom: !1
                                      },
                                      bookId: {}
                                    },
                                    ["scroll", "top"].forEach(function (r) {
                                      n.channels[t].queue[r].forEach(function (o) {
                                        o.el && (a[t].queue[r].push(o),
                                          o.resized || (o.pauseMove(n.containerPos, e),
                                            o.startMove(n.containerPos),
                                            o.resized = !0))
                                      })
                                    }),
                                    n.channels[t].queue.bottom.forEach(function (r) {
                                      if (r.el) {
                                        if (a[t + a.length - n.channels.length].queue.bottom.push(r),
                                          r.channel_id[0] + r.channel_id[1] - 1 === t) {
                                          var i = [].concat(r.channel_id);
                                          r.channel_id = [i[0] - n.channels.length + a.length, i[1]],
                                            r.top = r.channel_id[0] * o,
                                            n.danmu.config.area && n.danmu.config.area.start && (r.top += n.containerHeight * n.danmu.config.area.start),
                                            r.topInit()
                                        }
                                        r.resized || (r.pauseMove(n.containerPos, e),
                                          r.startMove(n.containerPos),
                                          r.resized = !0)
                                      }
                                    })
                                }, u = 0; u < n.channels.length; u++)
                                l(u);
                              for (var c = function (e) {
                                  ["scroll", "top", "bottom"].forEach(function (t) {
                                    a[e].queue[t].forEach(function (e) {
                                      e.resized = !1
                                    })
                                  })
                                }, d = 0; d < a.length; d++)
                                c(d);
                              n.channels = a,
                                n.channelHeight = o
                            } else if (n.channels && n.channels.length > a.length) {
                              for (var p = function (t) {
                                  a[t] = {
                                      id: t,
                                      queue: {
                                        scroll: [],
                                        top: [],
                                        bottom: []
                                      },
                                      operating: {
                                        scroll: !1,
                                        top: !1,
                                        bottom: !1
                                      },
                                      bookId: {}
                                    },
                                    ["scroll", "top", "bottom"].forEach(function (r) {
                                      if ("top" === r && t > Math.floor(a.length / 2))
                                      ;
                                      else if ("bottom" === r && t <= Math.floor(a.length / 2))
                                      ;
                                      else {
                                        var i = "bottom" === r ? t - a.length + n.channels.length : t;
                                        n.channels[i].queue[r].forEach(function (s, l) {
                                          if (s.el) {
                                            if (a[t].queue[r].push(s),
                                              "bottom" === r && s.channel_id[0] + s.channel_id[1] - 1 === i) {
                                              var u = [].concat(s.channel_id);
                                              s.channel_id = [u[0] - n.channels.length + a.length, u[1]],
                                                s.top = s.channel_id[0] * o,
                                                n.danmu.config.area && n.danmu.config.area.start && (s.top += n.containerHeight * n.danmu.config.area.start),
                                                s.topInit()
                                            }
                                            s.resized || (s.pauseMove(n.containerPos, e),
                                              s.startMove(n.containerPos),
                                              s.resized = !0)
                                          }
                                          n.channels[i].queue[r].splice(l, 1)
                                        })
                                      }
                                    })
                                }, f = 0; f < a.length; f++)
                                p(f);
                              for (var g = function (e) {
                                  ["scroll", "top", "bottom"].forEach(function (t) {
                                    n.channels[e].queue[t].forEach(function (e) {
                                      e.pauseMove(n.containerPos),
                                        e.remove()
                                    })
                                  })
                                }, h = a.length; h < n.channels.length; h++)
                                g(h);
                              for (var v = function (e) {
                                  ["scroll", "top", "bottom"].forEach(function (t) {
                                    a[e].queue[t].forEach(function (e) {
                                      e.resized = !1
                                    })
                                  })
                                }, y = 0; y < a.length; y++)
                                v(y);
                              n.channels = a,
                                n.channelHeight = o
                            }
                          }, 10)
                        }
                      }, {
                        key: "addBullet",
                        value: function (e) {
                          var t = this.danmu,
                            n = this.channels,
                            r = this.channelHeight,
                            o = Math.ceil(e.height / r);
                          if (o > n.length)
                            return {
                              result: !1,
                              message: "exceed channels.length, occupy=" + o + ",channelsSize=" + n.length
                            };
                          for (var i = !0, a = void 0, s = -1, l = 0, u = n.length; l < u; l++)
                            if (n[l].queue[e.mode].some(function (t) {
                                return t.id === e.id
                              }))
                              return {
                                result: !1,
                                message: "exsited, channelOrder=" + l + ",danmu_id=" + e.id
                              };
                          if ("scroll" === e.mode)
                            for (var c = 0, d = n.length - o; c <= d; c++) {
                              i = !0;
                              for (var p = c; p < c + o; p++) {
                                if ((a = n[p]).operating.scroll) {
                                  i = !1;
                                  break
                                }
                                if ((a.bookId.scroll || e.prior) && a.bookId.scroll !== e.id) {
                                  i = !1;
                                  break
                                }
                                a.operating.scroll = !0;
                                var f = a.queue.scroll[0];
                                if (f) {
                                  var g = f.el.getBoundingClientRect();
                                  if (g.right > this.containerPos.right) {
                                    i = !1,
                                      a.operating.scroll = !1;
                                    break
                                  }
                                  var h = g.left - this.containerPos.left + g.width,
                                    v = (this.containerPos.width + g.width) / f.duration,
                                    y = h / v,
                                    m = this.containerPos.width,
                                    b = (this.containerPos.width + e.width) / e.duration,
                                    x = m / b;
                                  if (t.config.bOffset || (t.config.bOffset = 0),
                                    v < b && y + t.config.bOffset > x) {
                                    i = !1,
                                      a.operating.scroll = !1;
                                    break
                                  }
                                }
                                a.operating.scroll = !1
                              }
                              if (i) {
                                s = c;
                                break
                              }
                            }
                          else if ("top" === e.mode)
                            for (var w = 0, _ = n.length - o; w <= _; w++) {
                              i = !0;
                              for (var k = w; k < w + o; k++) {
                                if (k > Math.floor(n.length / 2)) {
                                  i = !1;
                                  break
                                }
                                if ((a = n[k]).operating[e.mode]) {
                                  i = !1;
                                  break
                                }
                                if ((a.bookId[e.mode] || e.prior) && a.bookId[e.mode] !== e.id) {
                                  i = !1;
                                  break
                                }
                                if (a.operating[e.mode] = !0,
                                  a.queue[e.mode].length > 0) {
                                  i = !1,
                                    a.operating[e.mode] = !1;
                                  break
                                }
                                a.operating[e.mode] = !1
                              }
                              if (i) {
                                s = w;
                                break
                              }
                            }
                          else if ("bottom" === e.mode)
                            for (var E = n.length - o; E >= 0; E--) {
                              i = !0;
                              for (var C = E; C < E + o; C++) {
                                if (C <= Math.floor(n.length / 2)) {
                                  i = !1;
                                  break
                                }
                                if ((a = n[C]).operating[e.mode]) {
                                  i = !1;
                                  break
                                }
                                if ((a.bookId[e.mode] || e.prior) && a.bookId[e.mode] !== e.id) {
                                  i = !1;
                                  break
                                }
                                if (a.operating[e.mode] = !0,
                                  a.queue[e.mode].length > 0) {
                                  i = !1,
                                    a.operating[e.mode] = !1;
                                  break
                                }
                                a.operating[e.mode] = !1
                              }
                              if (i) {
                                s = E;
                                break
                              }
                            }
                          if (-1 !== s) {
                            for (var S = s, T = s + o; S < T; S++)
                              (a = n[S]).operating[e.mode] = !0,
                              a.queue[e.mode].unshift(e),
                              e.prior && delete a.bookId[e.mode],
                              a.operating[e.mode] = !1;
                            return e.prior && (delete e.bookChannelId,
                                t.bulletBtn.main.data.some(function (t) {
                                  return t.id === e.id && (delete t.bookChannelId,
                                    !0)
                                })),
                              e.channel_id = [s, o],
                              e.top = s * r,
                              this.danmu.config.area && this.danmu.config.area.start && (e.top += this.containerHeight * this.danmu.config.area.start), {
                                result: e,
                                message: "success"
                              }
                          }
                          if (e.prior)
                            if (e.bookChannelId)
                              t.bulletBtn.main.data.some(function (t) {
                                return t.id === e.id && (t.start += 2e3,
                                  !0)
                              });
                            else {
                              s = -1;
                              for (var P = 0, O = n.length - o; P <= O; P++) {
                                i = !0;
                                for (var M = P; M < P + o; M++)
                                  if (n[M].bookId[e.mode]) {
                                    i = !1;
                                    break
                                  }
                                if (i) {
                                  s = P;
                                  break
                                }
                              }
                              if (-1 !== s) {
                                for (var D = s; D < s + o; D++)
                                  n[D].bookId[e.mode] = e.id;
                                t.bulletBtn.main.data.some(function (t) {
                                  return t.id === e.id && (t.start += 2e3,
                                    t.bookChannelId = [s, o],
                                    !0)
                                })
                              }
                            }
                          return {
                            result: !1,
                            message: "no surplus will right"
                          }
                        }
                      }, {
                        key: "removeBullet",
                        value: function (e) {
                          for (var t = this.channels, n = e.channel_id, r = void 0, o = n[0], i = n[0] + n[1]; o < i; o++)
                            if (r = t[o]) {
                              r.operating[e.mode] = !0;
                              var a = -1;
                              r.queue[e.mode].some(function (t, n) {
                                  return t.id === e.id && (a = n,
                                    !0)
                                }),
                                a > -1 && r.queue[e.mode].splice(a, 1),
                                r.operating[e.mode] = !1
                            }
                        }
                      }, {
                        key: "reset",
                        value: function () {
                          var e = this.danmu.container,
                            t = this;
                          t.channels && t.channels.length > 0 && ["scroll", "top", "bottom"].forEach(function (e) {
                              for (var n = 0; n < t.channels.length; n++)
                                t.channels[n].queue[e].forEach(function (e) {
                                  e.pauseMove(t.containerPos),
                                    e.remove()
                                })
                            }),
                            setTimeout(function () {
                              var n = e.getBoundingClientRect();
                              t.width = n.width,
                                t.height = n.height,
                                t.danmu.config.area && t.danmu.config.area.start >= 0 && t.danmu.config.area.end >= t.danmu.config.area.start && (t.height = t.height * (t.danmu.config.area.end - t.danmu.config.area.start)),
                                t.container = e;
                              for (var r = /mobile/gi.test(navigator.userAgent) ? 10 : 12, o = Math.floor(t.height / r), i = [], a = 0; a < o; a++)
                                i[a] = {
                                  id: a,
                                  queue: {
                                    scroll: [],
                                    top: [],
                                    bottom: []
                                  },
                                  operating: {
                                    scroll: !1,
                                    top: !1,
                                    bottom: !1
                                  },
                                  bookId: {}
                                };
                              t.channels = i,
                                t.channelHeight = r
                            }, 200)
                        }
                      }, {
                        key: "resetWithCb",
                        value: function (e, t) {
                          var n = this.danmu.container,
                            r = this;
                          r.channels && r.channels.length > 0 && ["scroll", "top", "bottom"].forEach(function (e) {
                            for (var t = 0; t < r.channels.length; t++)
                              r.channels[t].queue[e].forEach(function (e) {
                                e.pauseMove(r.containerPos),
                                  e.remove()
                              })
                          });
                          var o = n.getBoundingClientRect();
                          r.width = o.width,
                            r.height = o.height,
                            r.danmu.config.area && r.danmu.config.area.start >= 0 && r.danmu.config.area.end >= r.danmu.config.area.start && (r.height = r.height * (r.danmu.config.area.end - r.danmu.config.area.start)),
                            r.container = n;
                          for (var i = /mobile/gi.test(navigator.userAgent) ? 10 : 12, a = Math.floor(r.height / i), s = [], l = 0; l < a; l++)
                            s[l] = {
                              id: l,
                              queue: {
                                scroll: [],
                                top: [],
                                bottom: []
                              },
                              operating: {
                                scroll: !1,
                                top: !1,
                                bottom: !1
                              },
                              bookId: {}
                            };
                          r.channels = s,
                            r.channelHeight = i,
                            e && e(!0, t)
                        }
                      }]),
                      e
                  }();
                t.default = o,
                  e.exports = t.default
              }, function (e, t, n) {
                function r(e) {
                  return e && e.__esModule ? e : {
                    default: e
                  }
                }
                Object.defineProperty(t, "__esModule", {
                  value: !0
                });
                var o = function () {
                    function e(e, t) {
                      for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1,
                          r.configurable = !0,
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(e, r.key, r)
                      }
                    }
                    return function (t, n, r) {
                      return n && e(t.prototype, n),
                        r && e(t, r),
                        t
                    }
                  }(),
                  i = r(n(8)),
                  a = r(n(7)),
                  s = r(n(0)),
                  l = function () {
                    function e(t) {
                      ! function (e, t) {
                        if (!(e instanceof t))
                          throw new TypeError("Cannot call a class as a function")
                      }(this, e),
                      this.danmu = t,
                        this.container = t.container,
                        this.channel = new i.default(t),
                        this.data = [].concat(t.config.comments),
                        this.queue = [],
                        this.timer = null,
                        this.retryTimer = null,
                        this.interval = 2e3,
                        this.status = "idle",
                        t.on("bullet_remove", this.updateQueue.bind(this))
                    }
                    return o(e, [{
                        key: "updateQueue",
                        value: function (e) {
                          var t = this;
                          t.queue.some(function (n, r) {
                            return n.id === e.bullet.id && (t.queue.splice(r, 1),
                              !0)
                          })
                        }
                      }, {
                        key: "init",
                        value: function (e, t) {
                          t || (t = this),
                            t.data.sort(function (e, t) {
                              return e.start - t.start
                            }),
                            t.retryTimer || (t.retryTimer = setInterval(function () {
                              t.readData(),
                                t.dataHandle()
                            }, t.interval - 1e3))
                        }
                      }, {
                        key: "start",
                        value: function () {
                          this.status = "playing",
                            this.queue = [],
                            this.container.innerHTML = "",
                            this.channel.resetWithCb(this.init, this)
                        }
                      }, {
                        key: "stop",
                        value: function () {
                          this.status = "closed",
                            clearInterval(this.retryTimer),
                            this.retryTimer = null,
                            this.channel.reset(),
                            this.queue = [],
                            this.container.innerHTML = ""
                        }
                      }, {
                        key: "play",
                        value: function () {
                          this.status = "playing";
                          var e = this.channel.channels,
                            t = this.danmu.container.getBoundingClientRect();
                          e && e.length > 0 && ["scroll", "top", "bottom"].forEach(function (n) {
                            for (var r = 0; r < e.length; r++)
                              e[r].queue[n].forEach(function (e) {
                                e.resized || (e.startMove(t),
                                  e.resized = !0)
                              });
                            for (var o = 0; o < e.length; o++)
                              e[o].queue[n].forEach(function (e) {
                                e.resized = !1
                              })
                          })
                        }
                      }, {
                        key: "pause",
                        value: function () {
                          this.status = "paused";
                          var e = this.channel.channels,
                            t = this.danmu.container.getBoundingClientRect();
                          e && e.length > 0 && ["scroll", "top", "bottom"].forEach(function (n) {
                            for (var r = 0; r < e.length; r++)
                              e[r].queue[n].forEach(function (e) {
                                e.pauseMove(t)
                              })
                          })
                        }
                      }, {
                        key: "dataHandle",
                        value: function () {
                          var e = this;
                          "paused" !== this.status && "closed" !== this.status && e.queue.length && e.queue.forEach(function (t) {
                            "waiting" !== t.status && "paused" !== t.status || t.startMove(e.channel.containerPos)
                          })
                        }
                      }, {
                        key: "readData",
                        value: function () {
                          var e = this,
                            t = this.danmu,
                            n = 0;
                          t.player && t.player.currentTime && (n = s.default.formatTime(t.player.currentTime));
                          var r = void 0,
                            o = e.interval,
                            i = e.channel,
                            l = void 0;
                          (l = t.player ? e.data.filter(function (t) {
                            return !t.start && e.danmu.hideArr.indexOf(t.mode) < 0 && (!t.color || e.danmu.hideArr.indexOf("color") < 0) && (t.start = n),
                              e.danmu.hideArr.indexOf(t.mode) < 0 && (!t.color || e.danmu.hideArr.indexOf("color") < 0) && t.start - o <= n && n <= t.start + o
                          }) : e.data.filter(function (t) {
                            return e.danmu.hideArr.indexOf(t.mode) < 0 && (!t.color || e.danmu.hideArr.indexOf("color") < 0)
                          })).length > 0 && l.forEach(function (n) {
                            (r = new a.default(t, n)).attach(),
                              i.addBullet(r).result ? (e.queue.push(r),
                                r.topInit()) : r.detach()
                          })
                        }
                      }]),
                      e
                  }();
                t.default = l,
                  e.exports = t.default
              }, function (e, t, n) {
                function r(e) {
                  return e && e.__esModule ? e : {
                    default: e
                  }
                }
                Object.defineProperty(t, "__esModule", {
                  value: !0
                });
                var o = function () {
                    function e(e, t) {
                      for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1,
                          r.configurable = !0,
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(e, r.key, r)
                      }
                    }
                    return function (t, n, r) {
                      return n && e(t.prototype, n),
                        r && e(t, r),
                        t
                    }
                  }(),
                  i = r(n(0)),
                  a = r(n(9)),
                  s = function () {
                    function e(t) {
                      ! function (e, t) {
                        if (!(e instanceof t))
                          throw new TypeError("Cannot call a class as a function")
                      }(this, e),
                      this.danmu = t,
                        this.main = new a.default(t),
                        t.config.defaultOff || this.main.start()
                    }
                    return o(e, [{
                        key: "createSwitch",
                        value: function () {
                          var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                          return this.switchBtn = i.default.createDom("dk-switch", '<span class="txt">弹</span>', {}, "danmu-switch " + (e ? "danmu-switch-active" : "")),
                            this.switchBtn
                        }
                      }]),
                      e
                  }();
                t.default = s,
                  e.exports = t.default
              }, function (e, t, n) {
                e.exports = function (e) {
                  if ("function" != typeof e)
                    throw new TypeError(e + " is not a function");
                  return e
                }
              }, function (e, t, n) {
                var r = String.prototype.indexOf;
                e.exports = function (e) {
                  return r.call(this, e, arguments[1]) > -1
                }
              }, function (e, t, n) {
                var r = "razdwatrzy";
                e.exports = function () {
                  return "function" == typeof r.contains && !0 === r.contains("dwa") && !1 === r.contains("foo")
                }
              }, function (e, t, n) {
                e.exports = n(13)() ? String.prototype.contains : n(12)
              }, function (e, t, n) {
                e.exports = function (e) {
                  return "function" == typeof e
                }
              }, function (e, t, n) {
                var r = n(1),
                  o = Array.prototype.forEach,
                  i = Object.create;
                e.exports = function (e) {
                  var t = i(null);
                  return o.call(arguments, function (e) {
                      r(e) && function (e, t) {
                        var n;
                        for (n in e)
                          t[n] = e[n]
                      }(Object(e), t)
                    }),
                    t
                }
              }, function (e, t, n) {
                var r = n(1);
                e.exports = function (e) {
                  if (!r(e))
                    throw new TypeError("Cannot use null or undefined");
                  return e
                }
              }, function (e, t, n) {
                e.exports = function () {}
              }, function (e, t, n) {
                var r = n(1),
                  o = Object.keys;
                e.exports = function (e) {
                  return o(r(e) ? Object(e) : e)
                }
              }, function (e, t, n) {
                e.exports = function () {
                  try {
                    return Object.keys("primitive"),
                      !0
                  } catch (e) {
                    return !1
                  }
                }
              }, function (e, t, n) {
                e.exports = n(20)() ? Object.keys : n(19)
              }, function (e, t, n) {
                var r = n(21),
                  o = n(17),
                  i = Math.max;
                e.exports = function (e, t) {
                  var n, a, s, l = i(arguments.length, 2);
                  for (e = Object(o(e)),
                    s = function (r) {
                      try {
                        e[r] = t[r]
                      } catch (e) {
                        n || (n = e)
                      }
                    },
                    a = 1; a < l; ++a)
                    t = arguments[a],
                    r(t).forEach(s);
                  if (void 0 !== n)
                    throw n;
                  return e
                }
              }, function (e, t, n) {
                e.exports = function () {
                  var e, t = Object.assign;
                  return "function" == typeof t && (t(e = {
                      foo: "raz"
                    }, {
                      bar: "dwa"
                    }, {
                      trzy: "trzy"
                    }),
                    e.foo + e.bar + e.trzy === "razdwatrzy")
                }
              }, function (e, t, n) {
                e.exports = n(23)() ? Object.assign : n(22)
              }, function (e, t, n) {
                var r = n(24),
                  o = n(16),
                  i = n(15),
                  a = n(14);
                (e.exports = function (e, t) {
                  var n, i, s, l, u;
                  return arguments.length < 2 || "string" != typeof e ? (l = t,
                      t = e,
                      e = null) : l = arguments[2],
                    null == e ? (n = s = !0,
                      i = !1) : (n = a.call(e, "c"),
                      i = a.call(e, "e"),
                      s = a.call(e, "w")),
                    u = {
                      value: t,
                      configurable: n,
                      enumerable: i,
                      writable: s
                    },
                    l ? r(o(l), u) : u
                }).gs = function (e, t, n) {
                  var s, l, u, c;
                  return "string" != typeof e ? (u = n,
                      n = t,
                      t = e,
                      e = null) : u = arguments[3],
                    null == t ? t = void 0 : i(t) ? null == n ? n = void 0 : i(n) || (u = n,
                      n = void 0) : (u = t,
                      t = n = void 0),
                    null == e ? (s = !0,
                      l = !1) : (s = a.call(e, "c"),
                      l = a.call(e, "e")),
                    c = {
                      get: t,
                      set: n,
                      configurable: s,
                      enumerable: l
                    },
                    u ? r(o(u), c) : c
                }
              }, function (e, t, n) {
                var r, o, i, s, l, u, c, d = n(25),
                  p = n(11),
                  f = Function.prototype.apply,
                  g = Function.prototype.call,
                  h = Object.create,
                  v = Object.defineProperty,
                  y = Object.defineProperties,
                  m = Object.prototype.hasOwnProperty,
                  b = {
                    configurable: !0,
                    enumerable: !1,
                    writable: !0
                  };
                l = {
                    on: r = function (e, t) {
                      var n;
                      return p(t),
                        m.call(this, "__ee__") ? n = this.__ee__ : (n = b.value = h(null),
                          v(this, "__ee__", b),
                          b.value = null),
                        n[e] ? "object" == a(n[e]) ? n[e].push(t) : n[e] = [n[e], t] : n[e] = t,
                        this
                    },
                    once: o = function (e, t) {
                      var n, o;
                      return p(t),
                        o = this,
                        r.call(this, e, n = function () {
                          i.call(o, e, n),
                            f.call(t, this, arguments)
                        }),
                        n.__eeOnceListener__ = t,
                        this
                    },
                    off: i = function (e, t) {
                      var n, r, o, i;
                      if (p(t),
                        !m.call(this, "__ee__"))
                        return this;
                      if (!(n = this.__ee__)[e])
                        return this;
                      if ("object" == a(r = n[e]))
                        for (i = 0; o = r[i]; ++i)
                          o !== t && o.__eeOnceListener__ !== t || (2 === r.length ? n[e] = r[i ? 0 : 1] : r.splice(i, 1));
                      else
                        r !== t && r.__eeOnceListener__ !== t || delete n[e];
                      return this
                    },
                    emit: s = function (e) {
                      var t, n, r, o, i;
                      if (m.call(this, "__ee__") && (o = this.__ee__[e]))
                        if ("object" == (void 0 === o ? "undefined" : a(o))) {
                          for (n = arguments.length,
                            i = new Array(n - 1),
                            t = 1; t < n; ++t)
                            i[t - 1] = arguments[t];
                          for (o = o.slice(),
                            t = 0; r = o[t]; ++t)
                            f.call(r, this, i)
                        } else
                          switch (arguments.length) {
                            case 1:
                              g.call(o, this);
                              break;
                            case 2:
                              g.call(o, this, arguments[1]);
                              break;
                            case 3:
                              g.call(o, this, arguments[1], arguments[2]);
                              break;
                            default:
                              for (n = arguments.length,
                                i = new Array(n - 1),
                                t = 1; t < n; ++t)
                                i[t - 1] = arguments[t];
                              f.call(o, this, i)
                          }
                    }
                  },
                  u = {
                    on: d(r),
                    once: d(o),
                    off: d(i),
                    emit: d(s)
                  },
                  c = y({}, u),
                  e.exports = t = function (e) {
                    return null == e ? h(c) : y(Object(e), u)
                  },
                  t.methods = l
              }, function (e, t, n) {
                function r(e) {
                  return e && e.__esModule ? e : {
                    default: e
                  }
                }
                Object.defineProperty(t, "__esModule", {
                  value: !0
                });
                var o = function () {
                    function e(e, t) {
                      for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1,
                          r.configurable = !0,
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(e, r.key, r)
                      }
                    }
                    return function (t, n, r) {
                      return n && e(t.prototype, n),
                        r && e(t, r),
                        t
                    }
                  }(),
                  i = r(n(26)),
                  a = r(n(10)),
                  s = r(n(0)),
                  l = function () {
                    function e(t) {
                      var n = this;
                      ! function (e, t) {
                        if (!(e instanceof t))
                          throw new TypeError("Cannot call a class as a function")
                      }(this, e),
                      this.config = s.default.deepCopy({
                          overlap: !1,
                          area: {
                            start: 0,
                            end: 1
                          },
                          comments: []
                        }, t),
                        this.hideArr = [],
                        (0,
                          i.default)(this);
                      var r = this;
                      if (this.config.comments.forEach(function (e) {
                          e.duration = e.duration < 5e3 ? 5e3 : e.duration,
                            e.mode || (e.mode = "scroll")
                        }),
                        !this.config.container || 1 !== this.config.container.nodeType)
                        return this.emit("error", "container id can't be empty"),
                          !1;
                      if (this.container = this.config.container,
                        this.config.containerStyle) {
                        var o = this.config.containerStyle;
                        Object.keys(o).forEach(function (e) {
                          r.container.style[e] = o[e]
                        })
                      }
                      this.player = this.config.player,
                        s.default.addClass(this.container, "danmu"),
                        this.bulletBtn = new a.default(this),
                        ["touchend", "click", "dblclick"].forEach(function (e) {
                          n.container.addEventListener(e, function () {
                            if (r.player) {
                              r.player.focus();
                              var t = void 0;
                              document.createEvent ? (t = document.createEvent("Event")).initEvent(e, !0, !0) : t = new Event(e),
                                r.player.dispatchEvent(t)
                            }
                          }, !1)
                        }),
                        this.emit("ready")
                    }
                    return o(e, [{
                        key: "start",
                        value: function () {
                          this.bulletBtn.main.start()
                        }
                      }, {
                        key: "pause",
                        value: function () {
                          this.bulletBtn.main.pause()
                        }
                      }, {
                        key: "play",
                        value: function () {
                          this.bulletBtn.main.play()
                        }
                      }, {
                        key: "stop",
                        value: function () {
                          this.bulletBtn.main.stop()
                        }
                      }, {
                        key: "sendComment",
                        value: function (e) {
                          e && e.id && e.duration && (e.el || e.txt) && (e.duration = e.duration < 5e3 ? 5e3 : e.duration,
                            this.bulletBtn.main.data.push(e))
                        }
                      }, {
                        key: "setCommentID",
                        value: function (e, t) {
                          var n = this.container.getBoundingClientRect();
                          e && t && (this.bulletBtn.main.data.some(function (n) {
                              return n.id === e && (n.id = t,
                                !0)
                            }),
                            this.bulletBtn.main.queue.some(function (r) {
                              return r.id === e && (r.id = t,
                                r.pauseMove(n),
                                r.startMove(n),
                                !0)
                            }))
                        }
                      }, {
                        key: "setCommentDuration",
                        value: function (e, t) {
                          var n = this.container.getBoundingClientRect();
                          e && t && (t = t < 5e3 ? 5e3 : t,
                            this.bulletBtn.main.data.some(function (n) {
                              return n.id === e && (n.duration = t,
                                !0)
                            }),
                            this.bulletBtn.main.queue.some(function (r) {
                              return r.id === e && (r.duration = t,
                                r.pauseMove(n),
                                r.startMove(n),
                                !0)
                            }))
                        }
                      }, {
                        key: "setAllDuration",
                        value: function () {
                          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "scroll",
                            t = arguments[1],
                            n = this.container.getBoundingClientRect();
                          t && (t = t < 5e3 ? 5e3 : t,
                            this.bulletBtn.main.data.forEach(function (n) {
                              e === n.mode && (n.duration = t)
                            }),
                            this.bulletBtn.main.queue.forEach(function (r) {
                              e === r.mode && (r.duration = t,
                                r.pauseMove(n),
                                r.startMove(n))
                            }))
                        }
                      }, {
                        key: "hide",
                        value: function () {
                          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "scroll";
                          this.hideArr.indexOf(e) < 0 && this.hideArr.push(e),
                            this.bulletBtn.main.queue.filter(function (t) {
                              return e === t.mode || "color" === e && t.color
                            }).forEach(function (e) {
                              return e.remove()
                            })
                        }
                      }, {
                        key: "show",
                        value: function () {
                          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "scroll",
                            t = this.hideArr.indexOf(e);
                          t > -1 && this.hideArr.splice(t, 1)
                        }
                      }]),
                      e
                  }();
                t.default = l,
                  e.exports = t.default
              }, function (e, t, n) {
                Object.defineProperty(t, "__esModule", {
                  value: !0
                });
                var r, o = (r = n(27)) && r.__esModule ? r : {
                  default: r
                };
                n(6),
                  t.default = o.default,
                  e.exports = t.default
              }, function (e, t, n) {
                e.exports = n(28)
              }])
            },
            "object" == a(t) && "object" == a(e) ? e.exports = i() : (r = [],
              void 0 === (o = "function" == typeof (n = i) ? n.apply(t, r) : n) || (e.exports = o))
        }).call(this, n(61)(e))
      }, function (e, t, n) {
        e.exports = function (e) {
          return e.webpackPolyfill || (e.deprecate = function () {},
              e.paths = [],
              e.children || (e.children = []),
              Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function () {
                  return e.l
                }
              }),
              Object.defineProperty(e, "id", {
                enumerable: !0,
                get: function () {
                  return e.i
                }
              }),
              e.webpackPolyfill = 1),
            e
        }
      }, function (e, t, n) {
        var r = n(63);
        "string" == typeof r && (r = [
          [e.i, r, ""]
        ]);
        n(65)(r, {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
          }),
          r.locals && (e.exports = r.locals)
      }, function (e, t, n) {
        (e.exports = n(64)(!1)).push([e.i, "@-webkit-keyframes playPause{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}99%{-webkit-transform:scale(1.3);transform:scale(1.3);opacity:0}to{-webkit-transform:scale(0);transform:scale(0);opacity:0}}@-webkit-keyframes loadingRotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes loadingDashOffset{0%{stroke-dashoffset:236}to{stroke-dashoffset:0}}@-webkit-keyframes enterTips{0%{opacity:0;left:0;width:3px}50%{opacity:1;left:50%;width:5px}to{opacity:0;left:100%;width:3px}}.xgplayer-download{position:relative;width:36px;height:40px;-webkit-order:8;-moz-box-ordinal-group:9;order:8;cursor:pointer}.xgplayer-inactive .xgplayer-download,.xgplayer-nostart .xgplayer-download{display:none}.xgplayer-download:hover .xgplayer-tips{display:block}.xgplayer-download-img{display:inline-block;width:24px;height:24px;margin-top:7px!important;margin-left:4px!important;background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFF' fill-rule='evenodd'%3E%3Crect x='11' y='4' width='2' height='12' rx='1'/%3E%3Crect x='3' y='18' width='18' height='2' rx='1'/%3E%3Crect transform='rotate(90 4 17.5)' x='1.5' y='16.5' width='5' height='2' rx='1'/%3E%3Crect transform='rotate(90 20 17.5)' x='17.5' y='16.5' width='5' height='2' rx='1'/%3E%3Cpath d='M11.988 14.3l-4.243-4.242a1 1 0 0 0-1.414 1.414l4.95 4.95a1 1 0 0 0 1.414 0l4.95-4.95a1 1 0 1 0-1.414-1.414L11.988 14.3z'/%3E%3C/g%3E%3C/svg%3E\") no-repeat 50%/100% 100%}.xgplayer-rotate{-webkit-order:9;-moz-box-ordinal-group:10;order:9;position:relative;display:inline-block;cursor:pointer;margin:0 4px}.xgplayer-rotate:hover .xgplayer-tips{display:block}.xgplayer-rotate-img{width:20px;height:20px;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cg clip-path='url(%23a)' fill='%23fff'%3E%3Cpath d='M11.666 9.167h-7.5a2.5 2.5 0 0 0-2.5 2.5v4.166a2.5 2.5 0 0 0 2.5 2.5h7.5a2.5 2.5 0 0 0 2.5-2.5v-4.166a2.5 2.5 0 0 0-2.5-2.5z'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M3.881 4.063a.83.83 0 0 0 .105 1.193L6.99 8.06A.833.833 0 1 0 8.128 6.84L6.62 5.435l3.199-.013a6.667 6.667 0 0 1 6.374 9.322.833.833 0 0 0 1.528.665A8.334 8.334 0 0 0 9.8 3.756l-3.367.013 1.53-1.64A.833.833 0 1 0 6.743.992L3.903 4.04a.83.83 0 0 0-.021.023z'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath fill='%23fff' d='M0 0h20v20H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:10px 10px}.xgplayer{background:rgba(0,0,0,.26);width:100%;height:100%;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;-ms-user-select:none}.xgplayer *{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}.xgplayer.xgplayer-is-fullscreen{width:100%!important;height:100%!important;padding-top:0!important;z-index:9999}.xgplayer.xgplayer-is-fullscreen.xgplayer-inactive{cursor:none}.xgplayer video{width:100%;height:100%;outline:none}.xgplayer-icon{display:block;width:40px;height:40px;overflow:hidden;fill:#fff}.xgplayer-controls{display:-webkit-flex;display:-moz-box;display:flex;position:absolute;bottom:0;left:0;right:0;height:40px;background-image:linear-gradient(-1deg,rgba(0,0,0,.3),transparent);z-index:10}.xgplayer-nostart .xgplayer-controls{display:none}.no-controls .xgplayer-controls{display:none!important}.xgplayer-inactive .xgplayer-controls,.xgplayer-is-live .xgplayer-controls>*{display:none}.xgplayer-is-live .xgplayer-controls .xgplayer-fullscreen,.xgplayer-is-live .xgplayer-controls .xgplayer-live,.xgplayer-is-live .xgplayer-controls .xgplayer-placeholder,.xgplayer-is-live .xgplayer-controls .xgplayer-play,.xgplayer-is-live .xgplayer-controls .xgplayer-play-img,.xgplayer-is-live .xgplayer-controls .xgplayer-volume{display:block}.xgplayer-progress{display:block;position:absolute;height:20px;line-height:20px;left:0;right:0;outline:none;top:-10px;z-index:35}.xgplayer.xgplayer-definition-active .xgplayer-progress,.xgplayer.xgplayer-textTrack-active .xgplayer-progress,.xgplayer.xgplayer-volume-active .xgplayer-progress{z-index:15}.xgplayer-progress-outer{background:hsla(0,0%,100%,.3);display:block;height:3px;line-height:3px;margin-top:8.5px;width:100%;position:relative;cursor:pointer}.xgplayer-progress-cache,.xgplayer-progress-played{display:block;height:100%;line-height:1;position:absolute;left:0;top:0}.xgplayer-progress-cache{width:0;background:hsla(0,0%,100%,.5)}.xgplayer-progress-played{display:block;width:0;background-image:linear-gradient(-90deg,#fa1f41,#e31106);border-radius:0 1.5px 1.5px 0}.xgplayer-progress-btn{display:none;position:absolute;left:0;top:-6px;width:14px;height:16px;border-radius:6px;background:#fff;box-shadow:0 0 2px 0 rgba(0,0,0,.26)}.xgplayer-progress-point{position:absolute}.xgplayer-progress-point.xgplayer-tips{margin-left:0;top:-25px;display:none;z-index:100}.xgplayer-progress-dot{display:inline-block;position:absolute;height:3px;width:5px;top:0;background:#fff;border-radius:6px;z-index:16}.xgplayer-progress-dot .xgplayer-progress-tip{position:absolute;left:0;top:-40px;height:auto;line-height:30px;width:auto;-webkit-transform:scale(.8);-ms-transform:scale(.8);transform:scale(.8);background:rgba(0,0,0,.3);border-radius:6px;border:1px solid rgba(0,0,0,.8);cursor:default;white-space:nowrap;display:none}.xgplayer-progress-dot:hover .xgplayer-progress-tip{display:block}.xgplayer-progress-thumbnail{position:absolute;-moz-box-sizing:border-box;box-sizing:border-box}.xgplayer-progress-thumbnail.xgplayer-tips{margin-left:0;display:none;z-index:99}.xgplayer-progress:focus .xgplayer-progress-outer,.xgplayer-progress:hover .xgplayer-progress-outer{height:6px;margin-top:7px}.xgplayer-progress:focus .xgplayer-progress-dot,.xgplayer-progress:hover .xgplayer-progress-dot{height:6px}.xgplayer-progress:focus .xgplayer-progress-btn,.xgplayer-progress:hover .xgplayer-progress-btn{display:block}.xgplayer-play,.xgplayer-play-img{position:relative;-webkit-order:0;-moz-box-ordinal-group:1;order:0;display:block;cursor:pointer}.xgplayer-play-img .xgplayer-icon,.xgplayer-play .xgplayer-icon{margin-top:3px}.xgplayer-play-img:hover,.xgplayer-play:hover{opacity:.85}.xgplayer-play-img:hover .xgplayer-tips,.xgplayer-play:hover .xgplayer-tips{display:block}.xgplayer-time{-webkit-order:2;-moz-box-ordinal-group:3;order:2;font-family:ArialMT;font-size:13px;color:#fff;line-height:40px;display:inline-block}.xgplayer-time span:after{content:\"/\";display:inline-block;padding:0 3px}.xgplayer-time em{color:hsla(0,0%,100%,.5)}.xgplayer-tips{background:rgba(0,0,0,.54);border-radius:1px;display:none;position:absolute;font-family:PingFangSC-Regular;font-size:11px;color:#fff;padding:2px 4px;text-align:center;top:-30px;left:50%;margin-left:-16px;width:auto;white-space:nowrap}.xgplayer-volume{outline:none;-webkit-order:4;-moz-box-ordinal-group:5;order:4;width:28px;height:140px;display:inline-block;position:relative;margin-top:-100px;z-index:18}.xgplayer-volume .xgplayer-icon{margin-top:8px;cursor:pointer;position:absolute;bottom:-9px}.xgplayer-slider{display:none;position:absolute;width:28px;height:88px;background:rgba(0,0,0,.54);border-radius:1px;bottom:50px;outline:none;left:0}.xgplayer.xgplayer-volume-active .xgplayer-slider{display:block}.xgplayer-slider:after{content:\" \";display:block;height:15px;width:28px;position:absolute;bottom:-15px;left:0;z-index:20}.xgplayer-bar,.xgplayer-drag{display:block;position:absolute;bottom:6px;left:12px;background:hsla(0,0%,100%,.3);border-radius:100px;width:4px;height:76px;outline:none;cursor:pointer}.xgplayer-drag{bottom:0;left:0;background:#fa1f41;max-height:76px}.xgplayer-drag:after{content:\" \";display:inline-block;width:8px;height:8px;background:#fff;box-shadow:0 0 5px 0 rgba(0,0,0,.26);position:absolute;border-radius:50%;left:-2px;top:-6px}.xgplayer-placeholder{-webkit-flex:1;-moz-box-flex:1;flex:1;-webkit-order:3;-moz-box-ordinal-group:4;order:3;display:block}.xgplayer-start{border-radius:50%;display:inline-block;width:70px;height:70px;background:hsla(0,0%,100%,.3);overflow:hidden;text-align:center;line-height:70px;vertical-align:middle;position:absolute;left:50%;top:50%;z-index:1000;margin:-55px auto auto -35px;cursor:pointer}.xgplayer-inactive .xgplayer-start,.xgplayer-nostart .xgplayer-start{margin:-35px auto auto -35px}.xgplayer-start svg{fill:hsla(0,0%,100%,.7);margin:14px}.xgplayer-start.xgplayer-start-interact{-webkit-animation:playPause .4s ease-out forwards;animation:playPause .4s ease-out forwards}.xgplayer-start:hover{background:hsla(0,0%,100%,.5)}.xgplayer-start:hover svg{fill:hsla(0,0%,100%,.6)}.xgplayer-start-img{display:none;position:absolute;left:50%;top:50%;z-index:1000;cursor:pointer}.xgplayer-nostart .xgplayer-start-img{display:block}.xgplayer-start-img.xgplayer-start-interact{-webkit-animation:playPause .4s ease-out forwards;animation:playPause .4s ease-out forwards}.xgplayer-start-img:hover{opacity:.85}.xgplayer-textTrack{-webkit-order:7;-moz-box-ordinal-group:8;order:7;width:60px;height:150px;z-index:18;position:relative;outline:none;display:none;cursor:default;margin-left:10px;margin-top:-119px;margin-bottom:11px}.xgplayer-textTrack ul{display:none;list-style:none;width:78px;background:rgba(0,0,0,.54);border-radius:1px;position:absolute;bottom:30px;left:0;text-align:center;white-space:nowrap;margin-left:-10px;z-index:26;cursor:pointer}.xgplayer.xgplayer-textTrack-active .xgplayer-textTrack ul{display:block}.xgplayer-textTrack ul li{opacity:.7;font-family:PingFangSC-Regular;font-size:11px;color:hsla(0,0%,100%,.8);padding:6px 13px}.xgplayer-textTrack ul li.textTrack,.xgplayer-textTrack ul li:hover{color:#fff;opacity:1}.xgplayer-textTrack .name{text-align:center;font-family:PingFangSC-Regular;font-size:13px;cursor:pointer;color:hsla(0,0%,100%,.8);position:absolute;bottom:0;width:60px;height:20px;line-height:20px;background:rgba(0,0,0,.38);border-radius:10px;display:inline-block;vertical-align:middle}.xgplayer-is-textTrack .xgplayer-textTrack{display:block}.xgplayer-definition{-webkit-order:5;-moz-box-ordinal-group:6;order:5;width:60px;height:150px;z-index:18;position:relative;outline:none;display:none;cursor:default;margin-left:10px;margin-top:-119px;margin-bottom:11px}.xgplayer-definition ul{display:none;list-style:none;width:78px;background:rgba(0,0,0,.54);border-radius:1px;position:absolute;bottom:30px;left:0;text-align:center;white-space:nowrap;margin-left:-10px;z-index:26;cursor:pointer}.xgplayer.xgplayer-definition-active .xgplayer-definition ul{display:block}.xgplayer-definition ul li{opacity:.7;font-family:PingFangSC-Regular;font-size:11px;color:hsla(0,0%,100%,.8);padding:6px 13px}.xgplayer-definition ul li.definition,.xgplayer-definition ul li:hover{color:#fff;opacity:1}.xgplayer-definition .name{text-align:center;font-family:PingFangSC-Regular;font-size:13px;cursor:pointer;color:hsla(0,0%,100%,.8);position:absolute;bottom:0;width:60px;height:20px;line-height:20px;background:rgba(0,0,0,.38);border-radius:10px;display:inline-block;vertical-align:middle}.xgplayer-is-definition .xgplayer-definition{display:block}.xgplayer-playback{-webkit-order:8;-moz-box-ordinal-group:9;order:8;position:relative;outline:none;display:block;cursor:pointer;margin:10px;height:20px}.xgplayer-playback .name{text-align:center;font-family:PingFangSC-Regular;font-size:13px;line-height:20px;height:20px;color:hsla(0,0%,100%,.8)}.xgplayer-playback .name span{width:40px;height:20px;line-height:20px;background:rgba(0,0,0,.38);border-radius:10px;display:inline-block;vertical-align:middle}.xgplayer-playback:hover .xgplayer-tips{display:block;top:-40px}.xgplayer-pip{-webkit-order:9;-moz-box-ordinal-group:10;order:9;position:relative;outline:none;display:block;cursor:pointer;margin-left:10px;margin-top:9px;margin-bottom:11px;height:20px}.xgplayer-pip .name{text-align:center;font-family:PingFangSC-Regular;font-size:13px;line-height:20px;height:20px;color:hsla(0,0%,100%,.8)}.xgplayer-pip .name span{width:60px;height:20px;line-height:20px;background:rgba(0,0,0,.38);border-radius:10px;display:inline-block;vertical-align:middle}.xgplayer.xgplayer-pip-active{position:fixed!important;right:0;bottom:200px;width:320px!important;height:180px!important;z-index:999!important}.xgplayer.xgplayer-pip-active .xgplayer-controls,.xgplayer.xgplayer-pip-active xg-bullet{display:none}.xgplayer.xgplayer-pip-active .xgplayer-pip-lay{display:block}.xgplayer-pip-lay{position:absolute;top:26px;left:0;z-index:1450;cursor:pointer;background-color:transparent;display:none}.xgplayer-pip-lay,.xgplayer-pip-lay div{width:100%;height:100%}.xgplayer-pip-drag{cursor:move;position:absolute;top:0;left:0;width:100%;height:26px;line-height:26px;background-image:linear-gradient(rgba(0,0,0,.3),transparent);z-index:1500;display:none}.xgplayer.xgplayer-pip-active .xgplayer-pip-drag{display:-webkit-flex;display:-moz-box;display:flex}.xgplayer.xgplayer-inactive .xgplayer-pip-drag{display:none}.xgplayer-fullscreen{-webkit-order:11;-moz-box-ordinal-group:12;order:11;position:relative;display:inline-block;cursor:pointer}.xgplayer-fullscreen .xgplayer-icon{margin:4px -4px 0 0}.xgplayer-fullscreen:hover .xgplayer-tips{display:block}.xgplayer.xgplayer-fullscreen-active{position:fixed!important;left:0!important;top:0!important;width:100%!important;height:100%!important;z-index:99999!important}.danmu-switch{-webkit-order:6;-moz-box-ordinal-group:7;order:6;z-index:26;margin:10px auto}.xgplayer-bullet{display:none;position:absolute;top:0;left:0;right:0;height:100%;overflow:hidden;z-index:9;outline:none}.xgplayer-bullet>*{position:absolute;white-space:nowrap;z-index:9}.xgplayer-has-bullet{display:block}.xgplayer-loading{display:none;width:100px;height:100px;overflow:hidden;-webkit-transform:scale(.7);-ms-transform:scale(.7);transform:scale(.7);position:absolute;left:50%;top:50%;margin:-70px auto auto -50px}.xgplayer-loading svg{border-radius:50%;-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-animation:loadingRotate 1s linear infinite;animation:loadingRotate 1s linear infinite}.xgplayer-loading svg path{stroke:#ddd;stroke-dasharray:236;-webkit-animation:loadingDashOffset 2s linear infinite;animation:loadingDashOffset 2s linear infinite;animation-direction:alternate-reverse;fill:none;stroke-width:12px}.xgplayer-nostart .xgplayer-loading{display:none}.xgplayer-isloading .xgplayer-loading{display:block}.xgplayer-replay{position:absolute;left:0;top:0;width:100%;height:100%;z-index:500;display:none;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;background:rgba(0,0,0,.54);-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;flex-direction:column;cursor:pointer}.xgplayer-replay svg{background:rgba(0,0,0,.58);border-radius:100%;cursor:pointer}.xgplayer-replay svg path{-webkit-transform:translate(20px,21px);-ms-transform:translate(20px,21px);transform:translate(20px,21px);fill:#ddd}.xgplayer-replay svg:hover{background:rgba(0,0,0,.38)}.xgplayer-replay svg:hover path{fill:#fff}.xgplayer-replay .xgplayer-replay-img{position:absolute;left:50%;top:50%;cursor:pointer}.xgplayer-replay .xgplayer-replay-img:hover{opacity:.85}.xgplayer-replay .xgplayer-replay-txt{display:inline-block;font-family:PingFangSC-Regular;font-size:14px;color:#fff;line-height:34px;cursor:pointer}.xgplayer.xgplayer-ended .xgplayer-controls{display:none}.xgplayer.xgplayer-ended .xgplayer-replay{display:-webkit-flex;display:-moz-box;display:flex}.xgplayer-replay-img{display:none;position:absolute;left:50%;top:50%;z-index:500;cursor:pointer}.xgplayer-replay-img:hover{opacity:.85}.xgplayer.xgplayer-ended .xgplayer-replay-img{display:block}@keyframes playPause{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}99%{-webkit-transform:scale(1.3);transform:scale(1.3);opacity:0}to{-webkit-transform:scale(0);transform:scale(0);opacity:0}}@keyframes loadingRotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loadingDashOffset{0%{stroke-dashoffset:236}to{stroke-dashoffset:0}}@keyframes enterTips{0%{opacity:0;left:0;width:3px}50%{opacity:1;left:50%;width:5px}to{opacity:0;left:100%;width:3px}}.xgplayer-enter{display:none;position:absolute;left:0;top:0;width:100%;height:100%;background:url(\"//s2.pstatp.com/cdn/expire-1-M/byted-player-images/1.0.2/bg.svg\") no-repeat 50%/cover;z-index:1100}.xgplayer-enter .xgplayer-enter-logo{display:block;position:absolute;left:50%;top:50%;width:130px;height:44px;margin:-22px auto auto -65px;background-size:130px 44px;background-image:url(\"//s3.pstatp.com/cdn/expire-1-M/byted-player-images/1.0.1/xg-logo-new.png\")}.xgplayer-enter .xgplayer-enter-tips{display:none;position:absolute;left:50%;top:50%;width:120px;height:1px;background:linear-gradient(90deg,#000,red,red,red,#000);margin:32px auto auto -62px}.xgplayer-enter .xgplayer-enter-tips:before{content:\" \";display:block;width:5px;height:1px;border-radius:50%;position:absolute;left:0;top:0;-webkit-animation:enterTips 1.6s linear infinite;animation:enterTips 1.6s linear infinite;background:#fff}.xgplayer-is-enter .xgplayer-enter,.xgplayer-is-enter .xgplayer-enter .xgplayer-enter-tips{display:block}.xgplayer-screenShot{-webkit-order:10;-moz-box-ordinal-group:11;order:10;position:relative;outline:none;display:block;cursor:pointer;margin-left:10px;margin-top:9px;margin-bottom:11px;height:20px}.xgplayer-screenShot .name{text-align:center;font-family:PingFangSC-Regular;font-size:13px;line-height:20px;height:20px;color:hsla(0,0%,100%,.8)}.xgplayer-screenShot .name span{width:60px;height:20px;line-height:20px;background:rgba(0,0,0,.38);border-radius:10px;display:inline-block;vertical-align:middle}.xgplayer-poster{position:absolute;left:0;top:0;width:100%;height:100%;z-index:100;background-size:cover;background-position:50%}.xgplayer-live{display:block;font-size:12px;color:#fff;line-height:40px;-webkit-order:1;-moz-box-ordinal-group:2;order:1}.xgplayer .xgplayer-none{display:none}.xgplayer-error{background:#000;display:none;position:absolute;left:0;top:0;width:100%;height:100%;z-index:1200;font-family:PingFangSC-Regular;font-size:14px;color:#fff;text-align:center;line-height:100%;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;-webkit-align-items:center;-moz-box-align:center;align-items:center}.xgplayer-error .xgplayer-error-refresh{color:#fa1f41;padding:0 3px;cursor:pointer}.xgplayer-is-error .xgplayer-error{display:-webkit-flex;display:-moz-box;display:flex}.xgplayer-error .xgplayer-error-text{line-height:18px;margin:auto 6px}.xgplayer-mobile .xgplayer-progress-btn{display:block}.xgplayer-mobile .xgplayer-progress:focus .xgplayer-progress-outer,.xgplayer-mobile .xgplayer-progress:hover .xgplayer-progress-outer{height:3px;margin-top:8.5px}.xgplayer-mobile .xgplayer-progress:focus .xgplayer-progress-dot,.xgplayer-mobile .xgplayer-progress:hover .xgplayer-progress-dot{height:3px}.xgplayer-mobile.xgplayer-ended .xgplayer-start,.xgplayer-mobile.xgplayer-ended .xgplayer-start-img,.xgplayer-mobile.xgplayer-inactive .xgplayer-start,.xgplayer-mobile.xgplayer-inactive .xgplayer-start-img{display:none}.xgplayer-mobile .xgplayer-start{width:60px;height:60px;line-height:60px;display:none;margin:-50px auto auto -30px}.xgplayer-mobile .xgplayer-start svg{margin:10px}.xgplayer-mobile .xgplayer-start-img{display:none}.xgplayer-mobile .xgplayer-tips{display:none!important}.xgplayer-mobile.xgplayer-nostart .xgplayer-start{margin:-30px auto auto -30px;display:block}.xgplayer-mobile.xgplayer-nostart .xgplayer-start-img{display:block}.xgplayer-mobile .xgplayer-loading{-webkit-transform:scale(.5);-ms-transform:scale(.5);transform:scale(.5)}.xgplayer-mobile.xgplayer-mobile-npassed .xgplayer-controls,.xgplayer-mobile.xgplayer-mobile-npassed .xgplayer-poster,.xgplayer-mobile.xgplayer-mobile-npassed .xgplayer-start,.xgplayer-mobile.xgplayer-mobile-npassed .xgplayer-start-img{display:none}", ""])
      }, function (e, t, n) {
        e.exports = function (e) {
          var t = [];
          return t.toString = function () {
              return this.map(function (t) {
                var n = function (e, t) {
                  var n = e[1] || "",
                    r = e[3];
                  if (!r)
                    return n;
                  if (t && "function" == typeof btoa) {
                    var o = (a = r,
                        "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"),
                      i = r.sources.map(function (e) {
                        return "/*# sourceURL=" + r.sourceRoot + e + " */"
                      });
                    return [n].concat(i).concat([o]).join("\n")
                  }
                  var a;
                  return [n].join("\n")
                }(t, e);
                return t[2] ? "@media " + t[2] + "{" + n + "}" : n
              }).join("")
            },
            t.i = function (e, n) {
              "string" == typeof e && (e = [
                [null, e, ""]
              ]);
              for (var r = {}, o = 0; o < this.length; o++) {
                var i = this[o][0];
                "number" == typeof i && (r[i] = !0)
              }
              for (o = 0; o < e.length; o++) {
                var a = e[o];
                "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"),
                  t.push(a))
              }
            },
            t
        }
      }, function (e, t, n) {
        function r(e, t) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              o = f[r.id];
            if (o) {
              o.refs++;
              for (var i = 0; i < o.parts.length; i++)
                o.parts[i](r.parts[i]);
              for (; i < r.parts.length; i++)
                o.parts.push(u(r.parts[i], t))
            } else {
              var a = [];
              for (i = 0; i < r.parts.length; i++)
                a.push(u(r.parts[i], t));
              f[r.id] = {
                id: r.id,
                refs: 1,
                parts: a
              }
            }
          }
        }

        function o(e, t) {
          for (var n = [], r = {}, o = 0; o < e.length; o++) {
            var i = e[o],
              a = t.base ? i[0] + t.base : i[0],
              s = {
                css: i[1],
                media: i[2],
                sourceMap: i[3]
              };
            r[a] ? r[a].parts.push(s) : n.push(r[a] = {
              id: a,
              parts: [s]
            })
          }
          return n
        }

        function i(e, t) {
          var n = h(e.insertInto);
          if (!n)
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
          var r = m[m.length - 1];
          if ("top" === e.insertAt)
            r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild),
            m.push(t);
          else if ("bottom" === e.insertAt)
            n.appendChild(t);
          else {
            if ("object" != typeof e.insertAt || !e.insertAt.before)
              throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var o = h(e.insertInto + " " + e.insertAt.before);
            n.insertBefore(t, o)
          }
        }

        function a(e) {
          if (null === e.parentNode)
            return !1;
          e.parentNode.removeChild(e);
          var t = m.indexOf(e);
          t >= 0 && m.splice(t, 1)
        }

        function s(e) {
          var t = document.createElement("style");
          return e.attrs.type = "text/css",
            l(t, e.attrs),
            i(e, t),
            t
        }

        function l(e, t) {
          Object.keys(t).forEach(function (n) {
            e.setAttribute(n, t[n])
          })
        }

        function u(e, t) {
          var n, r, o, u;
          if (t.transform && e.css) {
            if (!(u = t.transform(e.css)))
              return function () {};
            e.css = u
          }
          if (t.singleton) {
            var d = y++;
            n = v || (v = s(t)),
              r = c.bind(null, n, d, !1),
              o = c.bind(null, n, d, !0)
          } else
            e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function (e) {
                var t = document.createElement("link");
                return e.attrs.type = "text/css",
                  e.attrs.rel = "stylesheet",
                  l(t, e.attrs),
                  i(e, t),
                  t
              }(t),
              r = function (e, t, n) {
                var r = n.css,
                  o = n.sourceMap,
                  i = void 0 === t.convertToAbsoluteUrls && o;
                (t.convertToAbsoluteUrls || i) && (r = b(r)),
                o && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
                var a = new Blob([r], {
                    type: "text/css"
                  }),
                  s = e.href;
                e.href = URL.createObjectURL(a),
                  s && URL.revokeObjectURL(s)
              }
              .bind(null, n, t),
              o = function () {
                a(n),
                  n.href && URL.revokeObjectURL(n.href)
              }
            ) : (n = s(t),
              r = function (e, t) {
                var n = t.css,
                  r = t.media;
                if (r && e.setAttribute("media", r),
                  e.styleSheet)
                  e.styleSheet.cssText = n;
                else {
                  for (; e.firstChild;)
                    e.removeChild(e.firstChild);
                  e.appendChild(document.createTextNode(n))
                }
              }
              .bind(null, n),
              o = function () {
                a(n)
              }
            );
          return r(e),
            function (t) {
              if (t) {
                if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap)
                  return;
                r(e = t)
              } else
                o()
            }
        }

        function c(e, t, n, r) {
          var o = n ? "" : r.css;
          if (e.styleSheet)
            e.styleSheet.cssText = w(t, o);
          else {
            var i = document.createTextNode(o),
              a = e.childNodes;
            a[t] && e.removeChild(a[t]),
              a.length ? e.insertBefore(i, a[t]) : e.appendChild(i)
          }
        }
        var d, p, f = {},
          g = (d = function () {
              return window && document && document.all && !window.atob
            },
            function () {
              return void 0 === p && (p = d.apply(this, arguments)),
                p
            }
          ),
          h = function (e) {
            var t = {};
            return function (e) {
              if ("function" == typeof e)
                return e();
              if (void 0 === t[e]) {
                var n = function (e) {
                    return document.querySelector(e)
                  }
                  .call(this, e);
                if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                  try {
                    n = n.contentDocument.head
                  } catch (e) {
                    n = null
                  }
                t[e] = n
              }
              return t[e]
            }
          }(),
          v = null,
          y = 0,
          m = [],
          b = n(66);
        e.exports = function (e, t) {
          if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
            throw new Error("The style-loader cannot be used in a non-browser environment");
          (t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {},
            t.singleton || "boolean" == typeof t.singleton || (t.singleton = g()),
            t.insertInto || (t.insertInto = "head"),
            t.insertAt || (t.insertAt = "bottom");
          var n = o(e, t);
          return r(n, t),
            function (e) {
              for (var i = [], a = 0; a < n.length; a++) {
                var s = n[a];
                (l = f[s.id]).refs--,
                i.push(l)
              }
              for (e && r(o(e, t), t),
                a = 0; a < i.length; a++) {
                var l;
                if (0 === (l = i[a]).refs) {
                  for (var u = 0; u < l.parts.length; u++)
                    l.parts[u]();
                  delete f[l.id]
                }
              }
            }
        };
        var x, w = (x = [],
          function (e, t) {
            return x[e] = t,
              x.filter(Boolean).join("\n")
          }
        )
      }, function (e, t, n) {
        e.exports = function (e) {
          var t = "undefined" != typeof window && window.location;
          if (!t)
            throw new Error("fixUrls requires window.location");
          if (!e || "string" != typeof e)
            return e;
          var n = t.protocol + "//" + t.host,
            r = n + t.pathname.replace(/\/[^\/]*$/, "/");
          return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (e, t) {
            var o, i = t.trim().replace(/^"(.*)"$/, function (e, t) {
              return t
            }).replace(/^'(.*)'$/, function (e, t) {
              return t
            });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? e : (o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : r + i.replace(/^\.\//, ""),
              "url(" + JSON.stringify(o) + ")")
          })
        }
      }])
    })
  };
  o.hPH_bcHo = function (e, t, n, r, o) {
    ! function (e, n) {
      t.exports = n()
    }(window, function () {
      return function (e) {
        function t(r) {
          if (n[r])
            return n[r].exports;
          var o = n[r] = {
            i: r,
            l: !1,
            exports: {}
          };
          return e[r].call(o.exports, o, o.exports, t),
            o.l = !0,
            o.exports
        }
        var n = {};
        return t.m = e,
          t.c = n,
          t.d = function (e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {
              enumerable: !0,
              get: r
            })
          },
          t.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
              }),
              Object.defineProperty(e, "__esModule", {
                value: !0
              })
          },
          t.t = function (e, n) {
            if (1 & n && (e = t(e)),
              8 & n)
              return e;
            if (4 & n && "object" == typeof e && e && e.__esModule)
              return e;
            var r = Object.create(null);
            if (t.r(r),
              Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
              }),
              2 & n && "string" != typeof e)
              for (var o in e)
                t.d(r, o, function (t) {
                    return e[t]
                  }
                  .bind(null, o));
            return r
          },
          t.n = function (e) {
            var n = e && e.__esModule ? function () {
                return e.default
              } :
              function () {
                return e
              };
            return t.d(n, "a", n),
              n
          },
          t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
          },
          t.p = "",
          t(t.s = 36)
      }([function (e, t, n) {
        function r(e) {
          return "[object Array]" === f.call(e)
        }

        function o(e) {
          return null !== e && "object" === (void 0 === e ? "undefined" : u(e))
        }

        function i(e) {
          return "[object Function]" === f.call(e)
        }

        function a(e, t) {
          if (null != e)
            if ("object" !== (void 0 === e ? "undefined" : u(e)) && (e = [e]),
              r(e))
              for (var n = 0, o = e.length; n < o; n++)
                t.call(null, e[n], n, e);
            else
              for (var i in e)
                Object.prototype.hasOwnProperty.call(e, i) && t.call(null, e[i], i, e)
        }
        var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
          } :
          function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          },
          c = n(29),
          s = n(66),
          f = Object.prototype.toString;
        e.exports = {
          isArray: r,
          isArrayBuffer: function (e) {
            return "[object ArrayBuffer]" === f.call(e)
          },
          isBuffer: s,
          isFormData: function (e) {
            return "undefined" != typeof FormData && e instanceof FormData
          },
          isArrayBufferView: function (e) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
          },
          isString: function (e) {
            return "string" == typeof e
          },
          isNumber: function (e) {
            return "number" == typeof e
          },
          isObject: o,
          isUndefined: function (e) {
            return void 0 === e
          },
          isDate: function (e) {
            return "[object Date]" === f.call(e)
          },
          isFile: function (e) {
            return "[object File]" === f.call(e)
          },
          isBlob: function (e) {
            return "[object Blob]" === f.call(e)
          },
          isFunction: i,
          isStream: function (e) {
            return o(e) && i(e.pipe)
          },
          isURLSearchParams: function (e) {
            return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
          },
          isStandardBrowserEnv: function () {
            return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document
          },
          forEach: a,
          merge: function e() {
            function t(t, r) {
              "object" === u(n[r]) && "object" === (void 0 === t ? "undefined" : u(t)) ? n[r] = e(n[r], t) : n[r] = t
            }
            for (var n = {}, r = 0, o = arguments.length; r < o; r++)
              a(arguments[r], t);
            return n
          },
          extend: function (e, t, n) {
            return a(t, function (t, r) {
                e[r] = n && "function" == typeof t ? c(t, n) : t
              }),
              e
          },
          trim: function (e) {
            return e.replace(/^\s*/, "").replace(/\s*$/, "")
          }
        }
      }, function (e, t, n) {
        var r = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = r)
      }, function (e, t, n) {
        var r = n(15)("wks"),
          o = n(16),
          i = n(1).Symbol,
          a = "function" == typeof i;
        (e.exports = function (e) {
          return r[e] || (r[e] = a && i[e] || (a ? i : o)("Symbol." + e))
        }).store = r
      }, function (e, t, n) {
        var r = e.exports = {
          version: "2.6.5"
        };
        "number" == typeof __e && (__e = r)
      }, function (e, t, n) {
        var r = n(5);
        e.exports = function (e) {
          if (!r(e))
            throw TypeError(e + " is not an object!");
          return e
        }
      }, function (e, t, n) {
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
          } :
          function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          };
        e.exports = function (e) {
          return "object" === (void 0 === e ? "undefined" : r(e)) ? null !== e : "function" == typeof e
        }
      }, function (e, t, n) {
        var r = n(7);
        e.exports = function (e, t, n) {
          if (r(e),
            void 0 === t)
            return e;
          switch (n) {
            case 1:
              return function (n) {
                return e.call(t, n)
              };
            case 2:
              return function (n, r) {
                return e.call(t, n, r)
              };
            case 3:
              return function (n, r, o) {
                return e.call(t, n, r, o)
              }
          }
          return function () {
            return e.apply(t, arguments)
          }
        }
      }, function (e, t, n) {
        e.exports = function (e) {
          if ("function" != typeof e)
            throw TypeError(e + " is not a function!");
          return e
        }
      }, function (e, t, n) {
        e.exports = !n(18)(function () {
          return 7 != Object.defineProperty({}, "a", {
            get: function () {
              return 7
            }
          }).a
        })
      }, function (e, t, n) {
        (function (e) {
          Object.defineProperty(t, "__esModule", {
              value: !0
            }),
            t.default = function () {
              return void 0 === u && (u = !n && !r && void 0 !== e),
                u
            },
            t.hasProto = "__proto__" in {};
          var n = t.inBrowser = "undefined" != typeof window,
            r = t.inWeex = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform,
            o = t.weexPlatform = r && WXEnvironment.platform.toLowerCase(),
            i = t.UA = n && window.navigator.userAgent.toLowerCase(),
            a = (t.isIE = i && /msie|trident/.test(i),
              t.isIE9 = i && i.indexOf("msie 9.0") > 0,
              t.isEdge = i && i.indexOf("edge/") > 0),
            u = (t.isAndroid = i && i.indexOf("android") > 0 || "android" === o,
              t.isIOS = i && /iphone|ipad|ipod|ios/.test(i) || "ios" === o,
              void(t.isChrome = i && /chrome\/\d+/.test(i) && !a))
        }).call(this, n(26))
      }, function (e, t, n) {
        var r = {}.toString;
        e.exports = function (e) {
          return r.call(e).slice(8, -1)
        }
      }, function (e, t, n) {
        var r = n(4),
          o = n(40),
          i = n(41),
          a = Object.defineProperty;
        t.f = n(8) ? Object.defineProperty : function (e, t, n) {
          if (r(e),
            t = i(t, !0),
            r(n),
            o)
            try {
              return a(e, t, n)
            } catch (e) {}
          if ("get" in n || "set" in n)
            throw TypeError("Accessors not supported!");
          return "value" in n && (e[t] = n.value),
            e
        }
      }, function (e, t, n) {
        (function (t) {
          function r(e, t) {
            !i.isUndefined(e) && i.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
          }
          var o, i = n(0),
            a = n(68),
            u = {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            c = {
              adapter: ("undefined" != typeof XMLHttpRequest ? o = n(31) : void 0 !== t && (o = n(31)),
                o),
              transformRequest: [function (e, t) {
                return a(t, "Content-Type"),
                  i.isFormData(e) || i.isArrayBuffer(e) || i.isBuffer(e) || i.isStream(e) || i.isFile(e) || i.isBlob(e) ? e : i.isArrayBufferView(e) ? e.buffer : i.isURLSearchParams(e) ? (r(t, "application/x-www-form-urlencoded;charset=utf-8"),
                    e.toString()) : i.isObject(e) ? (r(t, "application/json;charset=utf-8"),
                    JSON.stringify(e)) : e
              }],
              transformResponse: [function (e) {
                if ("string" == typeof e)
                  try {
                    e = JSON.parse(e)
                  } catch (e) {}
                return e
              }],
              timeout: 0,
              xsrfCookieName: "XSRF-TOKEN",
              xsrfHeaderName: "X-XSRF-TOKEN",
              maxContentLength: -1,
              validateStatus: function (e) {
                return e >= 200 && e < 300
              }
            };
          c.headers = {
              common: {
                Accept: "application/json, text/plain, */*"
              }
            },
            i.forEach(["delete", "get", "head"], function (e) {
              c.headers[e] = {}
            }),
            i.forEach(["post", "put", "patch"], function (e) {
              c.headers[e] = i.merge(u)
            }),
            e.exports = c
        }).call(this, n(30))
      }, function (e, t, n) {
        e.exports = !1
      }, function (e, t, n) {
        var r = n(10),
          o = n(2)("toStringTag"),
          i = "Arguments" == r(function () {
            return arguments
          }());
        e.exports = function (e) {
          var t, n, a;
          return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function (e, t) {
            try {
              return e[t]
            } catch (e) {}
          }(t = Object(e), o)) ? n : i ? r(t) : "Object" == (a = r(t)) && "function" == typeof t.callee ? "Arguments" : a
        }
      }, function (e, t, n) {
        var r = n(3),
          o = n(1),
          i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
        (e.exports = function (e, t) {
          return i[e] || (i[e] = void 0 !== t ? t : {})
        })("versions", []).push({
          version: r.version,
          mode: n(13) ? "pure" : "global",
          copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        })
      }, function (e, t, n) {
        var r = 0,
          o = Math.random();
        e.exports = function (e) {
          return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++r + o).toString(36))
        }
      }, function (e, t, n) {
        var r = n(11),
          o = n(42);
        e.exports = n(8) ? function (e, t, n) {
            return r.f(e, t, o(1, n))
          } :
          function (e, t, n) {
            return e[t] = n,
              e
          }
      }, function (e, t, n) {
        e.exports = function (e) {
          try {
            return !!e()
          } catch (e) {
            return !0
          }
        }
      }, function (e, t, n) {
        var r = n(5),
          o = n(1).document,
          i = r(o) && r(o.createElement);
        e.exports = function (e) {
          return i ? o.createElement(e) : {}
        }
      }, function (e, t, n) {
        var r = n(1),
          o = n(17),
          i = n(21),
          a = n(16)("src"),
          u = n(43),
          c = ("" + u).split("toString");
        n(3).inspectSource = function (e) {
            return u.call(e)
          },
          (e.exports = function (e, t, n, u) {
            var s = "function" == typeof n;
            s && (i(n, "name") || o(n, "name", t)),
              e[t] !== n && (s && (i(n, a) || o(n, a, e[t] ? "" + e[t] : c.join(String(t)))),
                e === r ? e[t] = n : u ? e[t] ? e[t] = n : o(e, t, n) : (delete e[t],
                  o(e, t, n)))
          })(Function.prototype, "toString", function () {
            return "function" == typeof this && this[a] || u.call(this)
          })
      }, function (e, t, n) {
        var r = {}.hasOwnProperty;
        e.exports = function (e, t) {
          return r.call(e, t)
        }
      }, function (e, t, n) {
        e.exports = {}
      }, function (e, t, n) {
        var r, o, i, a = n(6),
          u = n(52),
          c = n(53),
          s = n(19),
          f = n(1),
          l = f.process,
          p = f.setImmediate,
          d = f.clearImmediate,
          h = f.MessageChannel,
          v = f.Dispatch,
          m = 0,
          y = {},
          g = function () {
            var e = +this;
            if (y.hasOwnProperty(e)) {
              var t = y[e];
              delete y[e],
                t()
            }
          },
          w = function (e) {
            g.call(e.data)
          };
        p && d || (p = function (e) {
              for (var t = [], n = 1; arguments.length > n;)
                t.push(arguments[n++]);
              return y[++m] = function () {
                  u("function" == typeof e ? e : Function(e), t)
                },
                r(m),
                m
            },
            d = function (e) {
              delete y[e]
            },
            "process" == n(10)(l) ? r = function (e) {
              l.nextTick(a(g, e, 1))
            } :
            v && v.now ? r = function (e) {
              v.now(a(g, e, 1))
            } :
            h ? (i = (o = new h).port2,
              o.port1.onmessage = w,
              r = a(i.postMessage, i, 1)) : f.addEventListener && "function" == typeof postMessage && !f.importScripts ? (r = function (e) {
                f.postMessage(e + "", "*")
              },
              f.addEventListener("message", w, !1)) : r = "onreadystatechange" in s("script") ? function (e) {
              c.appendChild(s("script")).onreadystatechange = function () {
                c.removeChild(this),
                  g.call(e)
              }
            } :
            function (e) {
              setTimeout(a(g, e, 1), 0)
            }
          ),
          e.exports = {
            set: p,
            clear: d
          }
      }, function (e, t, n) {
        var r = n(7);
        e.exports.f = function (e) {
          return new function (e) {
              var t, n;
              this.promise = new e(function (e, r) {
                  if (void 0 !== t || void 0 !== n)
                    throw TypeError("Bad Promise constructor");
                  t = e,
                    n = r
                }),
                this.resolve = r(t),
                this.reject = r(n)
            }
            (e)
        }
      }, function (e, t, n) {
        function r(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
          }),
          t.default = function (e) {
            var t = new o.default(e),
              n = function () {
                for (var e = 0, t = new Array(256), n = 0; 256 !== n; ++n)
                  e = 1 & (e = 1 & (e = 1 & (e = 1 & (e = 1 & (e = 1 & (e = 1 & (e = 1 & (e = n) ? -306674912 ^ e >>> 1 : e >>> 1) ? -306674912 ^ e >>> 1 : e >>> 1) ? -306674912 ^ e >>> 1 : e >>> 1) ? -306674912 ^ e >>> 1 : e >>> 1) ? -306674912 ^ e >>> 1 : e >>> 1) ? -306674912 ^ e >>> 1 : e >>> 1) ? -306674912 ^ e >>> 1 : e >>> 1) ? -306674912 ^ e >>> 1 : e >>> 1,
                  t[n] = e;
                return "undefined" != typeof Int32Array ? new Int32Array(t) : t
              }(),
              r = t.pathname + "?r=" + Math.random().toString(10).substring(2);
            "/" !== r[0] && (r = "/" + r);
            var a = function (e) {
              for (var t, r, o = -1, i = 0, a = e.length; i < a;)
                (t = e.charCodeAt(i++)) < 128 ? o = o >>> 8 ^ n[255 & (o ^ t)] : t < 2048 ? o = (o = o >>> 8 ^ n[255 & (o ^ (192 | t >> 6 & 31))]) >>> 8 ^ n[255 & (o ^ (128 | 63 & t))] : t >= 55296 && t < 57344 ? (t = 64 + (1023 & t),
                  r = 1023 & e.charCodeAt(i++),
                  o = (o = (o = (o = o >>> 8 ^ n[255 & (o ^ (240 | t >> 8 & 7))]) >>> 8 ^ n[255 & (o ^ (128 | t >> 2 & 63))]) >>> 8 ^ n[255 & (o ^ (128 | r >> 6 & 15 | (3 & t) << 4))]) >>> 8 ^ n[255 & (o ^ (128 | 63 & r))]) : o = (o = (o = o >>> 8 ^ n[255 & (o ^ (224 | t >> 12 & 15))]) >>> 8 ^ n[255 & (o ^ (128 | t >> 6 & 63))]) >>> 8 ^ n[255 & (o ^ (128 | 63 & t))];
              return -1 ^ o
            }(r) >>> 0;
            return (!(0,
              i.default)() && document && location.protocol.indexOf("http") > -1 ? [location.protocol, t.hostname] : ["http:", t.hostname]).join("//") + r + "&s=" + a
          };
        var o = r(n(62)),
          i = r(n(9));
        e.exports = t.default
      }, function (e, t, n) {
        var r, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
          } :
          function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          };
        r = function () {
          return this
        }();
        try {
          r = r || new Function("return this")()
        } catch (e) {
          "object" === ("undefined" == typeof window ? "undefined" : o(window)) && (r = window)
        }
        e.exports = r
      }, function (e, t, n) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var r = {
          base64encode: function (e) {
            var t, n, r, o, i, a, u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            for (r = e.length,
              n = 0,
              t = ""; n < r;) {
              if (o = 255 & e.charCodeAt(n++),
                n === r) {
                t += u.charAt(o >> 2),
                  t += u.charAt((3 & o) << 4),
                  t += "==";
                break
              }
              if (i = e.charCodeAt(n++),
                n === r) {
                t += u.charAt(o >> 2),
                  t += u.charAt((3 & o) << 4 | (240 & i) >> 4),
                  t += u.charAt((15 & i) << 2),
                  t += "=";
                break
              }
              a = e.charCodeAt(n++),
                t += u.charAt(o >> 2),
                t += u.charAt((3 & o) << 4 | (240 & i) >> 4),
                t += u.charAt((15 & i) << 2 | (192 & a) >> 6),
                t += u.charAt(63 & a)
            }
            return t
          },
          base64decode: function (e) {
            var t, n, r, o, i, a, u, c = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1];
            for (a = e.length,
              i = 0,
              u = ""; i < a;) {
              do {
                t = c[255 & e.charCodeAt(i++)]
              } while (i < a && -1 === t);
              if (-1 === t)
                break;
              do {
                n = c[255 & e.charCodeAt(i++)]
              } while (i < a && -1 === n);
              if (-1 === n)
                break;
              u += String.fromCharCode(t << 2 | (48 & n) >> 4);
              do {
                if (61 == (r = 255 & e.charCodeAt(i++)))
                  return u;
                r = c[r]
              } while (i < a && -1 === r);
              if (-1 === r)
                break;
              u += String.fromCharCode((15 & n) << 4 | (60 & r) >> 2);
              do {
                if (61 == (o = 255 & e.charCodeAt(i++)))
                  return u;
                o = c[o]
              } while (i < a && -1 === o);
              if (-1 === o)
                break;
              u += String.fromCharCode((3 & r) << 6 | o)
            }
            return u
          },
          utf16to8: function (e) {
            var t, n, r, o;
            for (t = "",
              r = e.length,
              n = 0; n < r; n++)
              (o = e.charCodeAt(n)) >= 1 && o <= 127 ? t += e.charAt(n) : o > 2047 ? (t += String.fromCharCode(224 | o >> 12 & 15),
                t += String.fromCharCode(128 | o >> 6 & 63),
                t += String.fromCharCode(128 | o >> 0 & 63)) : (t += String.fromCharCode(192 | o >> 6 & 31),
                t += String.fromCharCode(128 | o >> 0 & 63));
            return t
          },
          utf8to16: function (e) {
            var t, n, r, o, i, a;
            for (t = "",
              r = e.length,
              n = 0; n < r;)
              switch ((o = e.charCodeAt(n++)) >> 4) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                  t += e.charAt(n - 1);
                  break;
                case 12:
                case 13:
                  i = e.charCodeAt(n++),
                    t += String.fromCharCode((31 & o) << 6 | 63 & i);
                  break;
                case 14:
                  i = e.charCodeAt(n++),
                    a = e.charCodeAt(n++),
                    t += String.fromCharCode((15 & o) << 12 | (63 & i) << 6 | (63 & a) << 0)
              }
            return t
          }
        };
        t.default = r,
          e.exports = t.default
      }, function (e, t, n) {
        function r(e) {
          var t = new a(e),
            n = i(a.prototype.request, t);
          return o.extend(n, a.prototype, t),
            o.extend(n, t),
            n
        }
        var o = n(0),
          i = n(29),
          a = n(67),
          u = n(12),
          c = r(u);
        c.Axios = a,
          c.create = function (e) {
            return r(o.merge(u, e))
          },
          c.Cancel = n(34),
          c.CancelToken = n(81),
          c.isCancel = n(33),
          c.all = function (e) {
            return Promise.all(e)
          },
          c.spread = n(82),
          e.exports = c,
          e.exports.default = c
      }, function (e, t, n) {
        e.exports = function (e, t) {
          return function () {
            for (var n = new Array(arguments.length), r = 0; r < n.length; r++)
              n[r] = arguments[r];
            return e.apply(t, n)
          }
        }
      }, function (e, t, n) {
        function r() {
          throw new Error("setTimeout has not been defined")
        }

        function o() {
          throw new Error("clearTimeout has not been defined")
        }

        function i(e) {
          if (f === setTimeout)
            return setTimeout(e, 0);
          if ((f === r || !f) && setTimeout)
            return f = setTimeout,
              setTimeout(e, 0);
          try {
            return f(e, 0)
          } catch (t) {
            try {
              return f.call(null, e, 0)
            } catch (t) {
              return f.call(this, e, 0)
            }
          }
        }

        function a() {
          v && d && (v = !1,
            d.length ? h = d.concat(h) : m = -1,
            h.length && u())
        }

        function u() {
          if (!v) {
            var e = i(a);
            v = !0;
            for (var t = h.length; t;) {
              for (d = h,
                h = []; ++m < t;)
                d && d[m].run();
              m = -1,
                t = h.length
            }
            d = null,
              v = !1,
              function (e) {
                if (l === clearTimeout)
                  return clearTimeout(e);
                if ((l === o || !l) && clearTimeout)
                  return l = clearTimeout,
                    clearTimeout(e);
                try {
                  l(e)
                } catch (t) {
                  try {
                    return l.call(null, e)
                  } catch (t) {
                    return l.call(this, e)
                  }
                }
              }(e)
          }
        }

        function c(e, t) {
          this.fun = e,
            this.array = t
        }

        function s() {}
        var f, l, p = e.exports = {};
        ! function () {
          try {
            f = "function" == typeof setTimeout ? setTimeout : r
          } catch (e) {
            f = r
          }
          try {
            l = "function" == typeof clearTimeout ? clearTimeout : o
          } catch (e) {
            l = o
          }
        }();
        var d, h = [],
          v = !1,
          m = -1;
        p.nextTick = function (e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
              for (var n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
            h.push(new c(e, t)),
              1 !== h.length || v || i(u)
          },
          c.prototype.run = function () {
            this.fun.apply(null, this.array)
          },
          p.title = "browser",
          p.browser = !0,
          p.env = {},
          p.argv = [],
          p.version = "",
          p.versions = {},
          p.on = s,
          p.addListener = s,
          p.once = s,
          p.off = s,
          p.removeListener = s,
          p.removeAllListeners = s,
          p.emit = s,
          p.prependListener = s,
          p.prependOnceListener = s,
          p.listeners = function (e) {
            return []
          },
          p.binding = function (e) {
            throw new Error("process.binding is not supported")
          },
          p.cwd = function () {
            return "/"
          },
          p.chdir = function (e) {
            throw new Error("process.chdir is not supported")
          },
          p.umask = function () {
            return 0
          }
      }, function (e, t, n) {
        var r = n(0),
          o = n(69),
          i = n(71),
          a = n(72),
          u = n(73),
          c = n(32),
          s = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || n(74);
        e.exports = function (e) {
          return new Promise(function (t, f) {
            var l = e.data,
              p = e.headers;
            r.isFormData(l) && delete p["Content-Type"];
            var d = new XMLHttpRequest,
              h = "onreadystatechange",
              v = !1;
            if ("undefined" == typeof window || !window.XDomainRequest || "withCredentials" in d || u(e.url) || (d = new window.XDomainRequest,
                h = "onload",
                v = !0,
                d.onprogress = function () {},
                d.ontimeout = function () {}
              ),
              e.auth) {
              var m = e.auth.username || "",
                y = e.auth.password || "";
              p.Authorization = "Basic " + s(m + ":" + y)
            }
            if (d.open(e.method.toUpperCase(), i(e.url, e.params, e.paramsSerializer), !0),
              d.timeout = e.timeout,
              d[h] = function () {
                if (d && (4 === d.readyState || v) && (0 !== d.status || d.responseURL && 0 === d.responseURL.indexOf("file:"))) {
                  var n = "getAllResponseHeaders" in d ? a(d.getAllResponseHeaders()) : null,
                    r = {
                      data: e.responseType && "text" !== e.responseType ? d.response : d.responseText,
                      status: 1223 === d.status ? 204 : d.status,
                      statusText: 1223 === d.status ? "No Content" : d.statusText,
                      headers: n,
                      config: e,
                      request: d
                    };
                  o(t, f, r),
                    d = null
                }
              },
              d.onerror = function () {
                f(c("Network Error", e, null, d)),
                  d = null
              },
              d.ontimeout = function () {
                f(c("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", d)),
                  d = null
              },
              r.isStandardBrowserEnv()) {
              var g = n(75),
                w = (e.withCredentials || u(e.url)) && e.xsrfCookieName ? g.read(e.xsrfCookieName) : void 0;
              w && (p[e.xsrfHeaderName] = w)
            }
            if ("setRequestHeader" in d && r.forEach(p, function (e, t) {
                void 0 === l && "content-type" === t.toLowerCase() ? delete p[t] : d.setRequestHeader(t, e)
              }),
              e.withCredentials && (d.withCredentials = !0),
              e.responseType)
              try {
                d.responseType = e.responseType
              } catch (t) {
                if ("json" !== e.responseType)
                  throw t
              }
            "function" == typeof e.onDownloadProgress && d.addEventListener("progress", e.onDownloadProgress),
              "function" == typeof e.onUploadProgress && d.upload && d.upload.addEventListener("progress", e.onUploadProgress),
              e.cancelToken && e.cancelToken.promise.then(function (e) {
                d && (d.abort(),
                  f(e),
                  d = null)
              }),
              void 0 === l && (l = null),
              d.send(l)
          })
        }
      }, function (e, t, n) {
        var r = n(70);
        e.exports = function (e, t, n, o, i) {
          var a = new Error(e);
          return r(a, t, n, o, i)
        }
      }, function (e, t, n) {
        e.exports = function (e) {
          return !(!e || !e.__CANCEL__)
        }
      }, function (e, t, n) {
        function r(e) {
          this.message = e
        }
        r.prototype.toString = function () {
            return "Cancel" + (this.message ? ": " + this.message : "")
          },
          r.prototype.__CANCEL__ = !0,
          e.exports = r
      }, function (e, t, n) {
        (function (e, n) {
          var r, o, i, a, u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
              return typeof e
            } :
            function (e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
          a = function () {
              return function (e) {
                function t(r) {
                  if (n[r])
                    return n[r].exports;
                  var o = n[r] = {
                    exports: {},
                    id: r,
                    loaded: !1
                  };
                  return e[r].call(o.exports, o, o.exports, t),
                    o.loaded = !0,
                    o.exports
                }
                var n = {};
                return t.m = e,
                  t.c = n,
                  t.p = "",
                  t(0)
              }([function (e, t, n) {
                e.exports = n(1)
              }, function (e, t, n) {
                function r(e) {
                  var t = new a(e),
                    n = i(a.prototype.request, t);
                  return o.extend(n, a.prototype, t),
                    o.extend(n, t),
                    n
                }
                var o = n(2),
                  i = n(3),
                  a = n(5),
                  u = n(6),
                  c = r(u);
                c.Axios = a,
                  c.create = function (e) {
                    return r(o.merge(u, e))
                  },
                  c.Cancel = n(23),
                  c.CancelToken = n(24),
                  c.isCancel = n(20),
                  c.all = function (e) {
                    return Promise.all(e)
                  },
                  c.spread = n(25),
                  e.exports = c,
                  e.exports.default = c
              }, function (e, t, n) {
                function r(e) {
                  return "[object Array]" === f.call(e)
                }

                function o(e) {
                  return null !== e && "object" === (void 0 === e ? "undefined" : u(e))
                }

                function i(e) {
                  return "[object Function]" === f.call(e)
                }

                function a(e, t) {
                  if (null != e)
                    if ("object" !== (void 0 === e ? "undefined" : u(e)) && (e = [e]),
                      r(e))
                      for (var n = 0, o = e.length; n < o; n++)
                        t.call(null, e[n], n, e);
                    else
                      for (var i in e)
                        Object.prototype.hasOwnProperty.call(e, i) && t.call(null, e[i], i, e)
                }
                var c = n(3),
                  s = n(4),
                  f = Object.prototype.toString;
                e.exports = {
                  isArray: r,
                  isArrayBuffer: function (e) {
                    return "[object ArrayBuffer]" === f.call(e)
                  },
                  isBuffer: s,
                  isFormData: function (e) {
                    return "undefined" != typeof FormData && e instanceof FormData
                  },
                  isArrayBufferView: function (e) {
                    return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
                  },
                  isString: function (e) {
                    return "string" == typeof e
                  },
                  isNumber: function (e) {
                    return "number" == typeof e
                  },
                  isObject: o,
                  isUndefined: function (e) {
                    return void 0 === e
                  },
                  isDate: function (e) {
                    return "[object Date]" === f.call(e)
                  },
                  isFile: function (e) {
                    return "[object File]" === f.call(e)
                  },
                  isBlob: function (e) {
                    return "[object Blob]" === f.call(e)
                  },
                  isFunction: i,
                  isStream: function (e) {
                    return o(e) && i(e.pipe)
                  },
                  isURLSearchParams: function (e) {
                    return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
                  },
                  isStandardBrowserEnv: function () {
                    return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document
                  },
                  forEach: a,
                  merge: function e() {
                    function t(t, r) {
                      "object" === u(n[r]) && "object" === (void 0 === t ? "undefined" : u(t)) ? n[r] = e(n[r], t) : n[r] = t
                    }
                    for (var n = {}, r = 0, o = arguments.length; r < o; r++)
                      a(arguments[r], t);
                    return n
                  },
                  extend: function (e, t, n) {
                    return a(t, function (t, r) {
                        e[r] = n && "function" == typeof t ? c(t, n) : t
                      }),
                      e
                  },
                  trim: function (e) {
                    return e.replace(/^\s*/, "").replace(/\s*$/, "")
                  }
                }
              }, function (e, t) {
                e.exports = function (e, t) {
                  return function () {
                    for (var n = new Array(arguments.length), r = 0; r < n.length; r++)
                      n[r] = arguments[r];
                    return e.apply(t, n)
                  }
                }
              }, function (e, t) {
                function n(e) {
                  return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
                }
                e.exports = function (e) {
                  return null != e && (n(e) || function (e) {
                    return "function" == typeof e.readFloatLE && "function" == typeof e.slice && n(e.slice(0, 0))
                  }(e) || !!e._isBuffer)
                }
              }, function (e, t, n) {
                function r(e) {
                  this.defaults = e,
                    this.interceptors = {
                      request: new a,
                      response: new a
                    }
                }
                var o = n(6),
                  i = n(2),
                  a = n(17),
                  u = n(18);
                r.prototype.request = function (e) {
                    "string" == typeof e && (e = i.merge({
                        url: arguments[0]
                      }, arguments[1])),
                      (e = i.merge(o, {
                        method: "get"
                      }, this.defaults, e)).method = e.method.toLowerCase();
                    var t = [u, void 0],
                      n = Promise.resolve(e);
                    for (this.interceptors.request.forEach(function (e) {
                        t.unshift(e.fulfilled, e.rejected)
                      }),
                      this.interceptors.response.forEach(function (e) {
                        t.push(e.fulfilled, e.rejected)
                      }); t.length;)
                      n = n.then(t.shift(), t.shift());
                    return n
                  },
                  i.forEach(["delete", "get", "head", "options"], function (e) {
                    r.prototype[e] = function (t, n) {
                      return this.request(i.merge(n || {}, {
                        method: e,
                        url: t
                      }))
                    }
                  }),
                  i.forEach(["post", "put", "patch"], function (e) {
                    r.prototype[e] = function (t, n, r) {
                      return this.request(i.merge(r || {}, {
                        method: e,
                        url: t,
                        data: n
                      }))
                    }
                  }),
                  e.exports = r
              }, function (t, n, r) {
                function o(e, t) {
                  !a.isUndefined(e) && a.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
                }
                var i, a = r(2),
                  u = r(7),
                  c = {
                    "Content-Type": "application/x-www-form-urlencoded"
                  },
                  s = {
                    adapter: ("undefined" != typeof XMLHttpRequest ? i = r(8) : void 0 !== e && (i = r(8)),
                      i),
                    transformRequest: [function (e, t) {
                      return u(t, "Content-Type"),
                        a.isFormData(e) || a.isArrayBuffer(e) || a.isBuffer(e) || a.isStream(e) || a.isFile(e) || a.isBlob(e) ? e : a.isArrayBufferView(e) ? e.buffer : a.isURLSearchParams(e) ? (o(t, "application/x-www-form-urlencoded;charset=utf-8"),
                          e.toString()) : a.isObject(e) ? (o(t, "application/json;charset=utf-8"),
                          JSON.stringify(e)) : e
                    }],
                    transformResponse: [function (e) {
                      if ("string" == typeof e)
                        try {
                          e = JSON.parse(e)
                        } catch (e) {}
                      return e
                    }],
                    timeout: 0,
                    xsrfCookieName: "XSRF-TOKEN",
                    xsrfHeaderName: "X-XSRF-TOKEN",
                    maxContentLength: -1,
                    validateStatus: function (e) {
                      return e >= 200 && e < 300
                    }
                  };
                s.headers = {
                    common: {
                      Accept: "application/json, text/plain, */*"
                    }
                  },
                  a.forEach(["delete", "get", "head"], function (e) {
                    s.headers[e] = {}
                  }),
                  a.forEach(["post", "put", "patch"], function (e) {
                    s.headers[e] = a.merge(c)
                  }),
                  t.exports = s
              }, function (e, t, n) {
                var r = n(2);
                e.exports = function (e, t) {
                  r.forEach(e, function (n, r) {
                    r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n,
                      delete e[r])
                  })
                }
              }, function (e, t, n) {
                var r = n(2),
                  o = n(9),
                  i = n(12),
                  a = n(13),
                  u = n(14),
                  c = n(10),
                  s = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || n(15);
                e.exports = function (e) {
                  return new Promise(function (t, f) {
                    var l = e.data,
                      p = e.headers;
                    r.isFormData(l) && delete p["Content-Type"];
                    var d = new XMLHttpRequest,
                      h = "onreadystatechange",
                      v = !1;
                    if ("undefined" == typeof window || !window.XDomainRequest || "withCredentials" in d || u(e.url) || (d = new window.XDomainRequest,
                        h = "onload",
                        v = !0,
                        d.onprogress = function () {},
                        d.ontimeout = function () {}
                      ),
                      e.auth) {
                      var m = e.auth.username || "",
                        y = e.auth.password || "";
                      p.Authorization = "Basic " + s(m + ":" + y)
                    }
                    if (d.open(e.method.toUpperCase(), i(e.url, e.params, e.paramsSerializer), !0),
                      d.timeout = e.timeout,
                      d[h] = function () {
                        if (d && (4 === d.readyState || v) && (0 !== d.status || d.responseURL && 0 === d.responseURL.indexOf("file:"))) {
                          var n = "getAllResponseHeaders" in d ? a(d.getAllResponseHeaders()) : null,
                            r = {
                              data: e.responseType && "text" !== e.responseType ? d.response : d.responseText,
                              status: 1223 === d.status ? 204 : d.status,
                              statusText: 1223 === d.status ? "No Content" : d.statusText,
                              headers: n,
                              config: e,
                              request: d
                            };
                          o(t, f, r),
                            d = null
                        }
                      },
                      d.onerror = function () {
                        f(c("Network Error", e, null, d)),
                          d = null
                      },
                      d.ontimeout = function () {
                        f(c("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", d)),
                          d = null
                      },
                      r.isStandardBrowserEnv()) {
                      var g = n(16),
                        w = (e.withCredentials || u(e.url)) && e.xsrfCookieName ? g.read(e.xsrfCookieName) : void 0;
                      w && (p[e.xsrfHeaderName] = w)
                    }
                    if ("setRequestHeader" in d && r.forEach(p, function (e, t) {
                        void 0 === l && "content-type" === t.toLowerCase() ? delete p[t] : d.setRequestHeader(t, e)
                      }),
                      e.withCredentials && (d.withCredentials = !0),
                      e.responseType)
                      try {
                        d.responseType = e.responseType
                      } catch (t) {
                        if ("json" !== e.responseType)
                          throw t
                      }
                    "function" == typeof e.onDownloadProgress && d.addEventListener("progress", e.onDownloadProgress),
                      "function" == typeof e.onUploadProgress && d.upload && d.upload.addEventListener("progress", e.onUploadProgress),
                      e.cancelToken && e.cancelToken.promise.then(function (e) {
                        d && (d.abort(),
                          f(e),
                          d = null)
                      }),
                      void 0 === l && (l = null),
                      d.send(l)
                  })
                }
              }, function (e, t, n) {
                var r = n(10);
                e.exports = function (e, t, n) {
                  var o = n.config.validateStatus;
                  n.status && o && !o(n.status) ? t(r("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n)
                }
              }, function (e, t, n) {
                var r = n(11);
                e.exports = function (e, t, n, o, i) {
                  var a = new Error(e);
                  return r(a, t, n, o, i)
                }
              }, function (e, t) {
                e.exports = function (e, t, n, r, o) {
                  return e.config = t,
                    n && (e.code = n),
                    e.request = r,
                    e.response = o,
                    e
                }
              }, function (e, t, n) {
                function r(e) {
                  return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
                }
                var o = n(2);
                e.exports = function (e, t, n) {
                  if (!t)
                    return e;
                  var i;
                  if (n)
                    i = n(t);
                  else if (o.isURLSearchParams(t))
                    i = t.toString();
                  else {
                    var a = [];
                    o.forEach(t, function (e, t) {
                        null != e && (o.isArray(e) ? t += "[]" : e = [e],
                          o.forEach(e, function (e) {
                            o.isDate(e) ? e = e.toISOString() : o.isObject(e) && (e = JSON.stringify(e)),
                              a.push(r(t) + "=" + r(e))
                          }))
                      }),
                      i = a.join("&")
                  }
                  return i && (e += (-1 === e.indexOf("?") ? "?" : "&") + i),
                    e
                }
              }, function (e, t, n) {
                var r = n(2),
                  o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
                e.exports = function (e) {
                  var t, n, i, a = {};
                  return e ? (r.forEach(e.split("\n"), function (e) {
                      if (i = e.indexOf(":"),
                        t = r.trim(e.substr(0, i)).toLowerCase(),
                        n = r.trim(e.substr(i + 1)),
                        t) {
                        if (a[t] && o.indexOf(t) >= 0)
                          return;
                        a[t] = "set-cookie" === t ? (a[t] ? a[t] : []).concat([n]) : a[t] ? a[t] + ", " + n : n
                      }
                    }),
                    a) : a
                }
              }, function (e, t, n) {
                var r = n(2);
                e.exports = r.isStandardBrowserEnv() ? function () {
                  function e(e) {
                    var t = e;
                    return n && (o.setAttribute("href", t),
                        t = o.href),
                      o.setAttribute("href", t), {
                        href: o.href,
                        protocol: o.protocol ? o.protocol.replace(/:$/, "") : "",
                        host: o.host,
                        search: o.search ? o.search.replace(/^\?/, "") : "",
                        hash: o.hash ? o.hash.replace(/^#/, "") : "",
                        hostname: o.hostname,
                        port: o.port,
                        pathname: "/" === o.pathname.charAt(0) ? o.pathname : "/" + o.pathname
                      }
                  }
                  var t, n = /(msie|trident)/i.test(navigator.userAgent),
                    o = document.createElement("a");
                  return t = e(window.location.href),
                    function (n) {
                      var o = r.isString(n) ? e(n) : n;
                      return o.protocol === t.protocol && o.host === t.host
                    }
                }() : function () {
                  return !0
                }
              }, function (e, t) {
                function n() {
                  this.message = "String contains an invalid character"
                }
                (n.prototype = new Error).code = 5,
                  n.prototype.name = "InvalidCharacterError",
                  e.exports = function (e) {
                    for (var t, r, o = String(e), i = "", a = 0, u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="; o.charAt(0 | a) || (u = "=",
                        a % 1); i += u.charAt(63 & t >> 8 - a % 1 * 8)) {
                      if ((r = o.charCodeAt(a += .75)) > 255)
                        throw new n;
                      t = t << 8 | r
                    }
                    return i
                  }
              }, function (e, t, n) {
                var r = n(2);
                e.exports = r.isStandardBrowserEnv() ? {
                  write: function (e, t, n, o, i, a) {
                    var u = [];
                    u.push(e + "=" + encodeURIComponent(t)),
                      r.isNumber(n) && u.push("expires=" + new Date(n).toGMTString()),
                      r.isString(o) && u.push("path=" + o),
                      r.isString(i) && u.push("domain=" + i),
                      !0 === a && u.push("secure"),
                      document.cookie = u.join("; ")
                  },
                  read: function (e) {
                    var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                    return t ? decodeURIComponent(t[3]) : null
                  },
                  remove: function (e) {
                    this.write(e, "", Date.now() - 864e5)
                  }
                } : {
                  write: function () {},
                  read: function () {
                    return null
                  },
                  remove: function () {}
                }
              }, function (e, t, n) {
                function r() {
                  this.handlers = []
                }
                var o = n(2);
                r.prototype.use = function (e, t) {
                    return this.handlers.push({
                        fulfilled: e,
                        rejected: t
                      }),
                      this.handlers.length - 1
                  },
                  r.prototype.eject = function (e) {
                    this.handlers[e] && (this.handlers[e] = null)
                  },
                  r.prototype.forEach = function (e) {
                    o.forEach(this.handlers, function (t) {
                      null !== t && e(t)
                    })
                  },
                  e.exports = r
              }, function (e, t, n) {
                function r(e) {
                  e.cancelToken && e.cancelToken.throwIfRequested()
                }
                var o = n(2),
                  i = n(19),
                  a = n(20),
                  u = n(6),
                  c = n(21),
                  s = n(22);
                e.exports = function (e) {
                  return r(e),
                    e.baseURL && !c(e.url) && (e.url = s(e.baseURL, e.url)),
                    e.headers = e.headers || {},
                    e.data = i(e.data, e.headers, e.transformRequest),
                    e.headers = o.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}),
                    o.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (t) {
                      delete e.headers[t]
                    }),
                    (e.adapter || u.adapter)(e).then(function (t) {
                      return r(e),
                        t.data = i(t.data, t.headers, e.transformResponse),
                        t
                    }, function (t) {
                      return a(t) || (r(e),
                          t && t.response && (t.response.data = i(t.response.data, t.response.headers, e.transformResponse))),
                        Promise.reject(t)
                    })
                }
              }, function (e, t, n) {
                var r = n(2);
                e.exports = function (e, t, n) {
                  return r.forEach(n, function (n) {
                      e = n(e, t)
                    }),
                    e
                }
              }, function (e, t) {
                e.exports = function (e) {
                  return !(!e || !e.__CANCEL__)
                }
              }, function (e, t) {
                e.exports = function (e) {
                  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
                }
              }, function (e, t) {
                e.exports = function (e, t) {
                  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
                }
              }, function (e, t) {
                function n(e) {
                  this.message = e
                }
                n.prototype.toString = function () {
                    return "Cancel" + (this.message ? ": " + this.message : "")
                  },
                  n.prototype.__CANCEL__ = !0,
                  e.exports = n
              }, function (e, t, n) {
                function r(e) {
                  if ("function" != typeof e)
                    throw new TypeError("executor must be a function.");
                  var t;
                  this.promise = new Promise(function (e) {
                    t = e
                  });
                  var n = this;
                  e(function (e) {
                    n.reason || (n.reason = new o(e),
                      t(n.reason))
                  })
                }
                var o = n(23);
                r.prototype.throwIfRequested = function () {
                    if (this.reason)
                      throw this.reason
                  },
                  r.source = function () {
                    var e;
                    return {
                      token: new r(function (t) {
                        e = t
                      }),
                      cancel: e
                    }
                  },
                  e.exports = r
              }, function (e, t) {
                e.exports = function (e) {
                  return function (t) {
                    return e.apply(null, t)
                  }
                }
              }])
            },
            "object" === u(t) && "object" === u(n) ? n.exports = a() : (o = [],
              void 0 === (i = "function" == typeof (r = a) ? r.apply(t, o) : r) || (n.exports = i))
        }).call(this, n(30), n(83)(e))
      }, function (e, t, n) {
        e.exports = n(37)
      }, function (e, t, n) {
        function r(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
          }),
          n(38);
        var o = r(n(25)),
          i = r(n(27)),
          a = n(65),
          u = r(a),
          c = r(n(85)),
          s = r(n(9));
        t.default = {
            crc32: o.default,
            endecoder: i.default,
            url: u.default,
            live: c.default,
            vas: a.vas,
            uid: !(0,
              s.default)() && document && document.cookie && /tt_webid=(\d+)/gi.test(document.cookie) ? RegExp.$1 : ""
          },
          e.exports = t.default
      }, function (e, t, n) {
        var r, o, i, a, u = n(13),
          c = n(1),
          s = n(6),
          f = n(14),
          l = n(39),
          p = n(5),
          d = n(7),
          h = n(44),
          v = n(45),
          m = n(51),
          y = n(23).set,
          g = n(54)(),
          w = n(24),
          b = n(55),
          x = n(56),
          _ = n(57),
          S = c.TypeError,
          C = c.process,
          j = C && C.versions,
          A = j && j.v8 || "",
          E = c.Promise,
          T = "process" == f(C),
          O = function () {},
          P = o = w.f,
          R = !! function () {
            try {
              var e = E.resolve(1),
                t = (e.constructor = {})[n(2)("species")] = function (e) {
                  e(O, O)
                };
              return (T || "function" == typeof PromiseRejectionEvent) && e.then(O) instanceof t && 0 !== A.indexOf("6.6") && -1 === x.indexOf("Chrome/66")
            } catch (e) {}
          }(),
          k = function (e) {
            var t;
            return !(!p(e) || "function" != typeof (t = e.then)) && t
          },
          B = function (e, t) {
            if (!e._n) {
              e._n = !0;
              var n = e._c;
              g(function () {
                for (var r = e._v, o = 1 == e._s, i = 0, a = function (t) {
                    var n, i, a, u = o ? t.ok : t.fail,
                      c = t.resolve,
                      s = t.reject,
                      f = t.domain;
                    try {
                      u ? (o || (2 == e._h && U(e),
                          e._h = 1),
                        !0 === u ? n = r : (f && f.enter(),
                          n = u(r),
                          f && (f.exit(),
                            a = !0)),
                        n === t.promise ? s(S("Promise-chain cycle")) : (i = k(n)) ? i.call(n, c, s) : c(n)) : s(r)
                    } catch (e) {
                      f && !a && f.exit(),
                        s(e)
                    }
                  }; n.length > i;)
                  a(n[i++]);
                e._c = [],
                  e._n = !1,
                  t && !e._h && L(e)
              })
            }
          },
          L = function (e) {
            y.call(c, function () {
              var t, n, r, o = e._v,
                i = N(e);
              if (i && (t = b(function () {
                    T ? C.emit("unhandledRejection", o, e) : (n = c.onunhandledrejection) ? n({
                      promise: e,
                      reason: o
                    }) : (r = c.console) && r.error && r.error("Unhandled promise rejection", o)
                  }),
                  e._h = T || N(e) ? 2 : 1),
                e._a = void 0,
                i && t.e)
                throw t.v
            })
          },
          N = function (e) {
            return 1 !== e._h && 0 === (e._a || e._c).length
          },
          U = function (e) {
            y.call(c, function () {
              var t;
              T ? C.emit("rejectionHandled", e) : (t = c.onrejectionhandled) && t({
                promise: e,
                reason: e._v
              })
            })
          },
          q = function (e) {
            var t = this;
            t._d || (t._d = !0,
              (t = t._w || t)._v = e,
              t._s = 2,
              t._a || (t._a = t._c.slice()),
              B(t, !0))
          },
          F = function e(t) {
            var n, r = this;
            if (!r._d) {
              r._d = !0,
                r = r._w || r;
              try {
                if (r === t)
                  throw S("Promise can't be resolved itself");
                (n = k(t)) ? g(function () {
                  var o = {
                    _w: r,
                    _d: !1
                  };
                  try {
                    n.call(t, s(e, o, 1), s(q, o, 1))
                  } catch (e) {
                    q.call(o, e)
                  }
                }): (r._v = t,
                  r._s = 1,
                  B(r, !1))
              } catch (e) {
                q.call({
                  _w: r,
                  _d: !1
                }, e)
              }
            }
          };
        R || (E = function (e) {
              h(this, E, "Promise", "_h"),
                d(e),
                r.call(this);
              try {
                e(s(F, this, 1), s(q, this, 1))
              } catch (e) {
                q.call(this, e)
              }
            },
            (r = function (e) {
              this._c = [],
                this._a = void 0,
                this._s = 0,
                this._d = !1,
                this._v = void 0,
                this._h = 0,
                this._n = !1
            }).prototype = n(58)(E.prototype, {
              then: function (e, t) {
                var n = P(m(this, E));
                return n.ok = "function" != typeof e || e,
                  n.fail = "function" == typeof t && t,
                  n.domain = T ? C.domain : void 0,
                  this._c.push(n),
                  this._a && this._a.push(n),
                  this._s && B(this, !1),
                  n.promise
              },
              catch: function (e) {
                return this.then(void 0, e)
              }
            }),
            i = function () {
              var e = new r;
              this.promise = e,
                this.resolve = s(F, e, 1),
                this.reject = s(q, e, 1)
            },
            w.f = P = function (e) {
              return e === E || e === a ? new i(e) : o(e)
            }
          ),
          l(l.G + l.W + l.F * !R, {
            Promise: E
          }),
          n(59)(E, "Promise"),
          n(60)("Promise"),
          a = n(3).Promise,
          l(l.S + l.F * !R, "Promise", {
            reject: function (e) {
              var t = P(this);
              return (0,
                  t.reject)(e),
                t.promise
            }
          }),
          l(l.S + l.F * (u || !R), "Promise", {
            resolve: function (e) {
              return _(u && this === a ? E : this, e)
            }
          }),
          l(l.S + l.F * !(R && n(61)(function (e) {
            E.all(e).catch(O)
          })), "Promise", {
            all: function (e) {
              var t = this,
                n = P(t),
                r = n.resolve,
                o = n.reject,
                i = b(function () {
                  var n = [],
                    i = 0,
                    a = 1;
                  v(e, !1, function (e) {
                      var u = i++,
                        c = !1;
                      n.push(void 0),
                        a++,
                        t.resolve(e).then(function (e) {
                          c || (c = !0,
                            n[u] = e,
                            --a || r(n))
                        }, o)
                    }),
                    --a || r(n)
                });
              return i.e && o(i.v),
                n.promise
            },
            race: function (e) {
              var t = this,
                n = P(t),
                r = n.reject,
                o = b(function () {
                  v(e, !1, function (e) {
                    t.resolve(e).then(n.resolve, r)
                  })
                });
              return o.e && r(o.v),
                n.promise
            }
          })
      }, function (e, t, n) {
        var r = n(1),
          o = n(3),
          i = n(17),
          a = n(20),
          u = n(6),
          c = function e(t, n, c) {
            var s, f, l, p, d = t & e.F,
              h = t & e.G,
              v = t & e.P,
              m = t & e.B,
              y = h ? r : t & e.S ? r[n] || (r[n] = {}) : (r[n] || {}).prototype,
              g = h ? o : o[n] || (o[n] = {}),
              w = g.prototype || (g.prototype = {});
            for (s in h && (c = n),
              c)
              l = ((f = !d && y && void 0 !== y[s]) ? y : c)[s],
              p = m && f ? u(l, r) : v && "function" == typeof l ? u(Function.call, l) : l,
              y && a(y, s, l, t & e.U),
              g[s] != l && i(g, s, p),
              v && w[s] != l && (w[s] = l)
          };
        r.core = o,
          c.F = 1,
          c.G = 2,
          c.S = 4,
          c.P = 8,
          c.B = 16,
          c.W = 32,
          c.U = 64,
          c.R = 128,
          e.exports = c
      }, function (e, t, n) {
        e.exports = !n(8) && !n(18)(function () {
          return 7 != Object.defineProperty(n(19)("div"), "a", {
            get: function () {
              return 7
            }
          }).a
        })
      }, function (e, t, n) {
        var r = n(5);
        e.exports = function (e, t) {
          if (!r(e))
            return e;
          var n, o;
          if (t && "function" == typeof (n = e.toString) && !r(o = n.call(e)))
            return o;
          if ("function" == typeof (n = e.valueOf) && !r(o = n.call(e)))
            return o;
          if (!t && "function" == typeof (n = e.toString) && !r(o = n.call(e)))
            return o;
          throw TypeError("Can't convert object to primitive value")
        }
      }, function (e, t, n) {
        e.exports = function (e, t) {
          return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
          }
        }
      }, function (e, t, n) {
        e.exports = n(15)("native-function-to-string", Function.toString)
      }, function (e, t, n) {
        e.exports = function (e, t, n, r) {
          if (!(e instanceof t) || void 0 !== r && r in e)
            throw TypeError(n + ": incorrect invocation!");
          return e
        }
      }, function (e, t, n) {
        var r = n(6),
          o = n(46),
          i = n(47),
          a = n(4),
          u = n(48),
          c = n(50),
          s = {},
          f = {},
          l = e.exports = function (e, t, n, l, p) {
            var d, h, v, m, y = p ? function () {
                return e
              } :
              c(e),
              g = r(n, l, t ? 2 : 1),
              w = 0;
            if ("function" != typeof y)
              throw TypeError(e + " is not iterable!");
            if (i(y)) {
              for (d = u(e.length); d > w; w++)
                if ((m = t ? g(a(h = e[w])[0], h[1]) : g(e[w])) === s || m === f)
                  return m
            } else
              for (v = y.call(e); !(h = v.next()).done;)
                if ((m = o(v, g, h.value, t)) === s || m === f)
                  return m
          };
        l.BREAK = s,
          l.RETURN = f
      }, function (e, t, n) {
        var r = n(4);
        e.exports = function (e, t, n, o) {
          try {
            return o ? t(r(n)[0], n[1]) : t(n)
          } catch (t) {
            var i = e.return;
            throw void 0 !== i && r(i.call(e)),
              t
          }
        }
      }, function (e, t, n) {
        var r = n(22),
          o = n(2)("iterator"),
          i = Array.prototype;
        e.exports = function (e) {
          return void 0 !== e && (r.Array === e || i[o] === e)
        }
      }, function (e, t, n) {
        var r = n(49),
          o = Math.min;
        e.exports = function (e) {
          return e > 0 ? o(r(e), 9007199254740991) : 0
        }
      }, function (e, t, n) {
        var r = Math.ceil,
          o = Math.floor;
        e.exports = function (e) {
          return isNaN(e = +e) ? 0 : (e > 0 ? o : r)(e)
        }
      }, function (e, t, n) {
        var r = n(14),
          o = n(2)("iterator"),
          i = n(22);
        e.exports = n(3).getIteratorMethod = function (e) {
          if (null != e)
            return e[o] || e["@@iterator"] || i[r(e)]
        }
      }, function (e, t, n) {
        var r = n(4),
          o = n(7),
          i = n(2)("species");
        e.exports = function (e, t) {
          var n, a = r(e).constructor;
          return void 0 === a || null == (n = r(a)[i]) ? t : o(n)
        }
      }, function (e, t, n) {
        e.exports = function (e, t, n) {
          var r = void 0 === n;
          switch (t.length) {
            case 0:
              return r ? e() : e.call(n);
            case 1:
              return r ? e(t[0]) : e.call(n, t[0]);
            case 2:
              return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
            case 3:
              return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
            case 4:
              return r ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
          }
          return e.apply(n, t)
        }
      }, function (e, t, n) {
        var r = n(1).document;
        e.exports = r && r.documentElement
      }, function (e, t, n) {
        var r = n(1),
          o = n(23).set,
          i = r.MutationObserver || r.WebKitMutationObserver,
          a = r.process,
          u = r.Promise,
          c = "process" == n(10)(a);
        e.exports = function () {
          var e, t, n, s = function () {
            var r, o;
            for (c && (r = a.domain) && r.exit(); e;) {
              o = e.fn,
                e = e.next;
              try {
                o()
              } catch (r) {
                throw e ? n() : t = void 0,
                  r
              }
            }
            t = void 0,
              r && r.enter()
          };
          if (c)
            n = function () {
              a.nextTick(s)
            };
          else if (!i || r.navigator && r.navigator.standalone)
            if (u && u.resolve) {
              var f = u.resolve(void 0);
              n = function () {
                f.then(s)
              }
            } else
              n = function () {
                o.call(r, s)
              };
          else {
            var l = !0,
              p = document.createTextNode("");
            new i(s).observe(p, {
                characterData: !0
              }),
              n = function () {
                p.data = l = !l
              }
          }
          return function (r) {
            var o = {
              fn: r,
              next: void 0
            };
            t && (t.next = o),
              e || (e = o,
                n()),
              t = o
          }
        }
      }, function (e, t, n) {
        e.exports = function (e) {
          try {
            return {
              e: !1,
              v: e()
            }
          } catch (e) {
            return {
              e: !0,
              v: e
            }
          }
        }
      }, function (e, t, n) {
        var r = n(1).navigator;
        e.exports = r && r.userAgent || ""
      }, function (e, t, n) {
        var r = n(4),
          o = n(5),
          i = n(24);
        e.exports = function (e, t) {
          if (r(e),
            o(t) && t.constructor === e)
            return t;
          var n = i.f(e);
          return (0,
              n.resolve)(t),
            n.promise
        }
      }, function (e, t, n) {
        var r = n(20);
        e.exports = function (e, t, n) {
          for (var o in t)
            r(e, o, t[o], n);
          return e
        }
      }, function (e, t, n) {
        var r = n(11).f,
          o = n(21),
          i = n(2)("toStringTag");
        e.exports = function (e, t, n) {
          e && !o(e = n ? e : e.prototype, i) && r(e, i, {
            configurable: !0,
            value: t
          })
        }
      }, function (e, t, n) {
        var r = n(1),
          o = n(11),
          i = n(8),
          a = n(2)("species");
        e.exports = function (e) {
          var t = r[e];
          i && t && !t[a] && o.f(t, a, {
            configurable: !0,
            get: function () {
              return this
            }
          })
        }
      }, function (e, t, n) {
        var r = n(2)("iterator"),
          o = !1;
        try {
          var i = [7][r]();
          i.return = function () {
              o = !0
            },
            Array.from(i, function () {
              throw 2
            })
        } catch (e) {}
        e.exports = function (e, t) {
          if (!t && !o)
            return !1;
          var n = !1;
          try {
            var i = [7],
              a = i[r]();
            a.next = function () {
                return {
                  done: n = !0
                }
              },
              i[r] = function () {
                return a
              },
              e(i)
          } catch (e) {}
          return n
        }
      }, function (e, t, n) {
        (function (t) {
          function r(e) {
            var n, r = ("undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {}).location || {},
              o = {},
              u = void 0 === (e = e || r) ? "undefined" : a(e);
            if ("blob:" === e.protocol)
              o = new i(unescape(e.pathname), {});
            else if ("string" === u)
              for (n in o = new i(e, {}),
                p)
                delete o[n];
            else if ("object" === u) {
              for (n in e)
                n in p || (o[n] = e[n]);
              void 0 === o.slashes && (o.slashes = f.test(e.href))
            }
            return o
          }

          function o(e) {
            var t = s.exec(e);
            return {
              protocol: t[1] ? t[1].toLowerCase() : "",
              slashes: !!t[2],
              rest: t[3]
            }
          }

          function i(e, t, n) {
            if (!(this instanceof i))
              return new i(e, t, n);
            var s, f, p, d, h, v, m = l.slice(),
              y = void 0 === t ? "undefined" : a(t),
              g = this,
              w = 0;
            for ("object" !== y && "string" !== y && (n = t,
                t = null),
              n && "function" != typeof n && (n = c.parse),
              t = r(t),
              s = !(f = o(e || "")).protocol && !f.slashes,
              g.slashes = f.slashes || s && t.slashes,
              g.protocol = f.protocol || t.protocol || "",
              e = f.rest,
              f.slashes || (m[3] = [/(.*)/, "pathname"]); w < m.length; w++)
              "function" != typeof (d = m[w]) ? (p = d[0],
                v = d[1],
                p != p ? g[v] = e : "string" == typeof p ? ~(h = e.indexOf(p)) && ("number" == typeof d[2] ? (g[v] = e.slice(0, h),
                  e = e.slice(h + d[2])) : (g[v] = e.slice(h),
                  e = e.slice(0, h))) : (h = p.exec(e)) && (g[v] = h[1],
                  e = e.slice(0, h.index)),
                g[v] = g[v] || s && d[3] && t[v] || "",
                d[4] && (g[v] = g[v].toLowerCase())) : e = d(e);
            n && (g.query = n(g.query)),
              s && t.slashes && "/" !== g.pathname.charAt(0) && ("" !== g.pathname || "" !== t.pathname) && (g.pathname = function (e, t) {
                for (var n = (t || "/").split("/").slice(0, -1).concat(e.split("/")), r = n.length, o = n[r - 1], i = !1, a = 0; r--;)
                  "." === n[r] ? n.splice(r, 1) : ".." === n[r] ? (n.splice(r, 1),
                    a++) : a && (0 === r && (i = !0),
                    n.splice(r, 1),
                    a--);
                return i && n.unshift(""),
                  "." !== o && ".." !== o || n.push(""),
                  n.join("/")
              }(g.pathname, t.pathname)),
              u(g.port, g.protocol) || (g.host = g.hostname,
                g.port = ""),
              g.username = g.password = "",
              g.auth && (d = g.auth.split(":"),
                g.username = d[0] || "",
                g.password = d[1] || ""),
              g.origin = g.protocol && g.host && "file:" !== g.protocol ? g.protocol + "//" + g.host : "null",
              g.href = g.toString()
          }
          var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
              return typeof e
            } :
            function (e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            u = n(63),
            c = n(64),
            s = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,
            f = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
            l = [
              ["#", "hash"],
              ["?", "query"],
              function (e) {
                return e.replace("\\", "/")
              },
              ["/", "pathname"],
              ["@", "auth", 1],
              [NaN, "host", void 0, 1, 1],
              [/:(\d+)$/, "port", void 0, 1],
              [NaN, "hostname", void 0, 1, 1]
            ],
            p = {
              hash: 1,
              query: 1
            };
          i.prototype = {
              set: function (e, t, n) {
                var r = this;
                switch (e) {
                  case "query":
                    "string" == typeof t && t.length && (t = (n || c.parse)(t)),
                      r[e] = t;
                    break;
                  case "port":
                    r[e] = t,
                      u(t, r.protocol) ? t && (r.host = r.hostname + ":" + t) : (r.host = r.hostname,
                        r[e] = "");
                    break;
                  case "hostname":
                    r[e] = t,
                      r.port && (t += ":" + r.port),
                      r.host = t;
                    break;
                  case "host":
                    r[e] = t,
                      /:\d+$/.test(t) ? (t = t.split(":"),
                        r.port = t.pop(),
                        r.hostname = t.join(":")) : (r.hostname = t,
                        r.port = "");
                    break;
                  case "protocol":
                    r.protocol = t.toLowerCase(),
                      r.slashes = !n;
                    break;
                  case "pathname":
                  case "hash":
                    if (t) {
                      var o = "pathname" === e ? "/" : "#";
                      r[e] = t.charAt(0) !== o ? o + t : t
                    } else
                      r[e] = t;
                    break;
                  default:
                    r[e] = t
                }
                for (var i = 0; i < l.length; i++) {
                  var a = l[i];
                  a[4] && (r[a[1]] = r[a[1]].toLowerCase())
                }
                return r.origin = r.protocol && r.host && "file:" !== r.protocol ? r.protocol + "//" + r.host : "null",
                  r.href = r.toString(),
                  r
              },
              toString: function (e) {
                e && "function" == typeof e || (e = c.stringify);
                var t, n = this,
                  r = n.protocol;
                r && ":" !== r.charAt(r.length - 1) && (r += ":");
                var o = r + (n.slashes ? "//" : "");
                return n.username && (o += n.username,
                    n.password && (o += ":" + n.password),
                    o += "@"),
                  o += n.host + n.pathname,
                  (t = "object" === a(n.query) ? e(n.query) : n.query) && (o += "?" !== t.charAt(0) ? "?" + t : t),
                  n.hash && (o += n.hash),
                  o
              }
            },
            i.extractProtocol = o,
            i.location = r,
            i.qs = c,
            e.exports = i
        }).call(this, n(26))
      }, function (e, t, n) {
        e.exports = function (e, t) {
          if (t = t.split(":")[0],
            !(e = +e))
            return !1;
          switch (t) {
            case "http":
            case "ws":
              return 80 !== e;
            case "https":
            case "wss":
              return 443 !== e;
            case "ftp":
              return 21 !== e;
            case "gopher":
              return 70 !== e;
            case "file":
              return !1
          }
          return 0 !== e
        }
      }, function (e, t, n) {
        function r(e) {
          return decodeURIComponent(e.replace(/\+/g, " "))
        }
        var o = Object.prototype.hasOwnProperty;
        t.stringify = function (e, t) {
            t = t || "";
            var n, r, i = [];
            for (r in "string" != typeof t && (t = "?"),
              e)
              o.call(e, r) && ((n = e[r]) || null !== n && void 0 !== n && !isNaN(n) || (n = ""),
                i.push(encodeURIComponent(r) + "=" + encodeURIComponent(n)));
            return i.length ? t + i.join("&") : ""
          },
          t.parse = function (e) {
            for (var t, n = /([^=?&]+)=?([^&]*)/g, o = {}; t = n.exec(e);) {
              var i = r(t[1]),
                a = r(t[2]);
              i in o || (o[i] = a)
            }
            return o
          }
      }, function (e, t, n) {
        function r(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
          } :
          function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          };
        t.default = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "//ib.365yg.com/video/urls/v/1/toutiao/mp4/",
              n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
              r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            if (e) {
              n.vfrom = "xgplayer";
              var o = void 0;
              return o = (0,
                  s.default)() ? {
                  url: (0,
                    u.default)(t + e),
                  params: n,
                  headers: r
                } : {
                  url: (0,
                    u.default)(t + e),
                  adapter: a,
                  params: n,
                  headers: r
                },
                i(o).then(function (e) {
                  var t = {};
                  if (0 === (e = e.data).code) {
                    if ("m3u8" === n.format_type && e.data.dynamic_video) {
                      var r = c.default.base64decode(e.data.dynamic_video.main_url).replace(/^http:/, "");
                      r.indexOf("?"),
                        r = r;
                      var o = c.default.base64decode(e.data.dynamic_video.backup_url_1).replace(/^http:/, "");
                      o.indexOf("?"),
                        o = o,
                        t.main_src = r,
                        t.backup_src = o
                    } else if (e.data.video_list) {
                      var i = [],
                        a = e.data.video_list,
                        u = {
                          "360p": "极速",
                          "480p": "高清",
                          "720p": "超清",
                          origin: "源片"
                        };
                      for (var s in a) {
                        var f = c.default.base64decode(a[s].main_url).replace(/^http:/, "");
                        f.indexOf("?"),
                          f = f;
                        var l = c.default.base64decode(a[s].backup_url_1).replace(/^http:/, "");
                        l.indexOf("?"),
                          l = l,
                          i.push({
                            src: f,
                            type: "video/" + a[s].vtype,
                            definition: a[s].definition,
                            format: a[s].definition,
                            label: u[a[s].definition] || a[s].definition,
                            res: a[s].vheight,
                            backup: l
                          })
                      }
                      t.url_list = i.sort(function (e, t) {
                        return e.definition.replace("p", "") - t.definition.replace("p", "")
                      })
                    }
                    t.data = e.data
                  }
                  return t._source = e,
                    t
                })
            }
            return Promise.reject("vid can't be empty")
          },
          t.vas = function (e, t, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "//vas.snssdk.com/video/openapi/v1/",
              a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                action: "GetPlayInfo",
                video_id: e,
                nobase64: !1,
                ptoken: n
              },
              u = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {
                Authorization: t
              };
            return a.vfrom = "xgplayer",
              i({
                url: r,
                params: a,
                headers: u
              }).then(function (e) {
                if (0 !== e.data.code)
                  return Promise.reject([]);
                var t = function () {
                  var t = e.data.data,
                    n = t.video_id,
                    r = t.video_duration,
                    i = t.video_list,
                    u = t.status,
                    s = t.poster_url;
                  if (10 !== u || !i)
                    return {
                      v: Promise.reject([])
                    };
                  var f = function () {
                    var e = !!a.nobase64,
                      t = function (t) {
                        ["main_url", "backup_url_1"].forEach(function (n) {
                          if (!e) {
                            var r = c.default.base64decode(i[t][n]);
                            r.indexOf("?"),
                              r = r,
                              i[t][n] = r
                          }
                        })
                      };
                    for (var o in i)
                      t(o);
                    return {
                      v: {
                        v: {
                          vid: n,
                          list: i,
                          duration: r,
                          poster: s
                        }
                      }
                    }
                  }();
                  return "object" === (void 0 === f ? "undefined" : o(f)) ? f.v : void 0
                }();
                return "object" === (void 0 === t ? "undefined" : o(t)) ? t.v : void 0
              })
          };
        var i, a, u = r(n(25)),
          c = r(n(27)),
          s = r(n(9));
        (0,
          s.default)() ? i = n(28): (i = n(35),
          a = n(84))
      }, function (e, t, n) {
        function r(e) {
          return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
        }
        e.exports = function (e) {
          return null != e && (r(e) || function (e) {
            return "function" == typeof e.readFloatLE && "function" == typeof e.slice && r(e.slice(0, 0))
          }(e) || !!e._isBuffer)
        }
      }, function (e, t, n) {
        function r(e) {
          this.defaults = e,
            this.interceptors = {
              request: new a,
              response: new a
            }
        }
        var o = n(12),
          i = n(0),
          a = n(76),
          u = n(77);
        r.prototype.request = function (e) {
            "string" == typeof e && (e = i.merge({
                url: arguments[0]
              }, arguments[1])),
              (e = i.merge(o, {
                method: "get"
              }, this.defaults, e)).method = e.method.toLowerCase();
            var t = [u, void 0],
              n = Promise.resolve(e);
            for (this.interceptors.request.forEach(function (e) {
                t.unshift(e.fulfilled, e.rejected)
              }),
              this.interceptors.response.forEach(function (e) {
                t.push(e.fulfilled, e.rejected)
              }); t.length;)
              n = n.then(t.shift(), t.shift());
            return n
          },
          i.forEach(["delete", "get", "head", "options"], function (e) {
            r.prototype[e] = function (t, n) {
              return this.request(i.merge(n || {}, {
                method: e,
                url: t
              }))
            }
          }),
          i.forEach(["post", "put", "patch"], function (e) {
            r.prototype[e] = function (t, n, r) {
              return this.request(i.merge(r || {}, {
                method: e,
                url: t,
                data: n
              }))
            }
          }),
          e.exports = r
      }, function (e, t, n) {
        var r = n(0);
        e.exports = function (e, t) {
          r.forEach(e, function (n, r) {
            r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n,
              delete e[r])
          })
        }
      }, function (e, t, n) {
        var r = n(32);
        e.exports = function (e, t, n) {
          var o = n.config.validateStatus;
          n.status && o && !o(n.status) ? t(r("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n)
        }
      }, function (e, t, n) {
        e.exports = function (e, t, n, r, o) {
          return e.config = t,
            n && (e.code = n),
            e.request = r,
            e.response = o,
            e
        }
      }, function (e, t, n) {
        function r(e) {
          return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
        }
        var o = n(0);
        e.exports = function (e, t, n) {
          if (!t)
            return e;
          var i;
          if (n)
            i = n(t);
          else if (o.isURLSearchParams(t))
            i = t.toString();
          else {
            var a = [];
            o.forEach(t, function (e, t) {
                null != e && (o.isArray(e) ? t += "[]" : e = [e],
                  o.forEach(e, function (e) {
                    o.isDate(e) ? e = e.toISOString() : o.isObject(e) && (e = JSON.stringify(e)),
                      a.push(r(t) + "=" + r(e))
                  }))
              }),
              i = a.join("&")
          }
          return i && (e += (-1 === e.indexOf("?") ? "?" : "&") + i),
            e
        }
      }, function (e, t, n) {
        var r = n(0),
          o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
        e.exports = function (e) {
          var t, n, i, a = {};
          return e ? (r.forEach(e.split("\n"), function (e) {
              if (i = e.indexOf(":"),
                t = r.trim(e.substr(0, i)).toLowerCase(),
                n = r.trim(e.substr(i + 1)),
                t) {
                if (a[t] && o.indexOf(t) >= 0)
                  return;
                a[t] = "set-cookie" === t ? (a[t] ? a[t] : []).concat([n]) : a[t] ? a[t] + ", " + n : n
              }
            }),
            a) : a
        }
      }, function (e, t, n) {
        var r = n(0);
        e.exports = r.isStandardBrowserEnv() ? function () {
          function e(e) {
            var t = e;
            return n && (o.setAttribute("href", t),
                t = o.href),
              o.setAttribute("href", t), {
                href: o.href,
                protocol: o.protocol ? o.protocol.replace(/:$/, "") : "",
                host: o.host,
                search: o.search ? o.search.replace(/^\?/, "") : "",
                hash: o.hash ? o.hash.replace(/^#/, "") : "",
                hostname: o.hostname,
                port: o.port,
                pathname: "/" === o.pathname.charAt(0) ? o.pathname : "/" + o.pathname
              }
          }
          var t, n = /(msie|trident)/i.test(navigator.userAgent),
            o = document.createElement("a");
          return t = e(window.location.href),
            function (n) {
              var o = r.isString(n) ? e(n) : n;
              return o.protocol === t.protocol && o.host === t.host
            }
        }() : function () {
          return !0
        }
      }, function (e, t, n) {
        function r() {
          this.message = "String contains an invalid character"
        }
        (r.prototype = new Error).code = 5,
          r.prototype.name = "InvalidCharacterError",
          e.exports = function (e) {
            for (var t, n, o = String(e), i = "", a = 0, u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="; o.charAt(0 | a) || (u = "=",
                a % 1); i += u.charAt(63 & t >> 8 - a % 1 * 8)) {
              if ((n = o.charCodeAt(a += .75)) > 255)
                throw new r;
              t = t << 8 | n
            }
            return i
          }
      }, function (e, t, n) {
        var r = n(0);
        e.exports = r.isStandardBrowserEnv() ? {
          write: function (e, t, n, o, i, a) {
            var u = [];
            u.push(e + "=" + encodeURIComponent(t)),
              r.isNumber(n) && u.push("expires=" + new Date(n).toGMTString()),
              r.isString(o) && u.push("path=" + o),
              r.isString(i) && u.push("domain=" + i),
              !0 === a && u.push("secure"),
              document.cookie = u.join("; ")
          },
          read: function (e) {
            var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
            return t ? decodeURIComponent(t[3]) : null
          },
          remove: function (e) {
            this.write(e, "", Date.now() - 864e5)
          }
        } : {
          write: function () {},
          read: function () {
            return null
          },
          remove: function () {}
        }
      }, function (e, t, n) {
        function r() {
          this.handlers = []
        }
        var o = n(0);
        r.prototype.use = function (e, t) {
            return this.handlers.push({
                fulfilled: e,
                rejected: t
              }),
              this.handlers.length - 1
          },
          r.prototype.eject = function (e) {
            this.handlers[e] && (this.handlers[e] = null)
          },
          r.prototype.forEach = function (e) {
            o.forEach(this.handlers, function (t) {
              null !== t && e(t)
            })
          },
          e.exports = r
      }, function (e, t, n) {
        function r(e) {
          e.cancelToken && e.cancelToken.throwIfRequested()
        }
        var o = n(0),
          i = n(78),
          a = n(33),
          u = n(12),
          c = n(79),
          s = n(80);
        e.exports = function (e) {
          return r(e),
            e.baseURL && !c(e.url) && (e.url = s(e.baseURL, e.url)),
            e.headers = e.headers || {},
            e.data = i(e.data, e.headers, e.transformRequest),
            e.headers = o.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}),
            o.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (t) {
              delete e.headers[t]
            }),
            (e.adapter || u.adapter)(e).then(function (t) {
              return r(e),
                t.data = i(t.data, t.headers, e.transformResponse),
                t
            }, function (t) {
              return a(t) || (r(e),
                  t && t.response && (t.response.data = i(t.response.data, t.response.headers, e.transformResponse))),
                Promise.reject(t)
            })
        }
      }, function (e, t, n) {
        var r = n(0);
        e.exports = function (e, t, n) {
          return r.forEach(n, function (n) {
              e = n(e, t)
            }),
            e
        }
      }, function (e, t, n) {
        e.exports = function (e) {
          return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
        }
      }, function (e, t, n) {
        e.exports = function (e, t) {
          return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
        }
      }, function (e, t, n) {
        function r(e) {
          if ("function" != typeof e)
            throw new TypeError("executor must be a function.");
          var t;
          this.promise = new Promise(function (e) {
            t = e
          });
          var n = this;
          e(function (e) {
            n.reason || (n.reason = new o(e),
              t(n.reason))
          })
        }
        var o = n(34);
        r.prototype.throwIfRequested = function () {
            if (this.reason)
              throw this.reason
          },
          r.source = function () {
            var e;
            return {
              token: new r(function (t) {
                e = t
              }),
              cancel: e
            }
          },
          e.exports = r
      }, function (e, t, n) {
        e.exports = function (e) {
          return function (t) {
            return e.apply(null, t)
          }
        }
      }, function (e, t, n) {
        e.exports = function (e) {
          return e.webpackPolyfill || (e.deprecate = function () {},
              e.paths = [],
              e.children || (e.children = []),
              Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function () {
                  return e.l
                }
              }),
              Object.defineProperty(e, "id", {
                enumerable: !0,
                get: function () {
                  return e.i
                }
              }),
              e.webpackPolyfill = 1),
            e
        }
      }, function (e, t, n) {
        function r(e) {
          var t = [];
          for (var n in e)
            t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
          return t.join("&")
        }
        var o = 1;
        e.exports = function (e) {
          return new Promise(function (t, n) {
            var i = document.createElement("script"),
              a = e.url;
            if (e.params) {
              var u = r(e.params);
              u && (a += (a.indexOf("?") >= 0 ? "&" : "?") + u)
            }
            i.async = !0;
            var c = "axiosJsonpCallback" + o++,
              s = window[c],
              f = !1;
            window[c] = function (e) {
              window[c] = s,
                f || t({
                  data: e,
                  status: 200
                })
            };
            var l = {
              _: (new Date).getTime()
            };
            l[e.callbackParamName || "callback"] = c,
              a += (a.indexOf("?") >= 0 ? "&" : "?") + r(l),
              i.onload = i.onreadystatechange = function () {
                i.readyState && !/loaded|complete/.test(i.readyState) || (i.onload = i.onreadystatechange = null,
                  i.parentNode && i.parentNode.removeChild(i),
                  i = null)
              },
              e.cancelToken && e.cancelToken.promise.then(function (e) {
                i && (f = !0,
                  n(e))
              }),
              i.src = a,
              document.head.appendChild(i)
          })
        }
      }, function (e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
          }),
          t.default = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "//live-openapi.byted.org/live/v1/play_config",
              t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                project: "ceof2f",
                stream: "video1"
              };
            return o({
              url: e,
              params: t
            }).then(function (e) {
              var t = {
                raw: e = e.data
              };
              if ("success" === e.msg && e.data) {
                var n = e.data.play_list;
                n && (t.list = n.map(function (e) {
                  return e.stream_list[0]
                }))
              }
              return t
            })
          };
        var r, o, i = (r = n(9)) && r.__esModule ? r : {
          default: r
        };
        o = n((0,
            i.default)() ? 28 : 35),
          e.exports = t.default
      }])
    })
  };
  o.VW1Q45fN = function (e, a, t, l, s) {
    var n = l(e("__gK4WbX")),
      i = l(e("lgLPKmWO")),
      r = l(e("LFxswB00")),
      o = l(e("_3k8jqSq")),
      p = l(e("C_TrCxPr")),
      d = e("zNszyAds"),
      c = l(d),
      u = l(e("RiX6bfLf")),
      m = function (e) {
        function a() {
          return (0,
              i.default)(this, a),
            (0,
              o.default)(this, (a.__proto__ || (0,
              n.default)(a)).apply(this, arguments))
        }
        return (0,
            p.default)(a, e),
          (0,
            r.default)(a, [{
            key: "render",
            value: function () {
              var e = this;
              if (window.isXiguaLive)
                return c.default.createElement("div", {
                  className: "video-mask-style-long-xigua " + this.props.className,
                  style: {
                    height: this.props.height,
                    background: "url(" + this.props.posterUrl + "), #000",
                    visibility: "hidden"
                  }
                }, c.default.createElement("div", {
                  className: "mask-btn-replay",
                  onClick: function () {
                    return e.props.replayClick()
                  }
                }, c.default.createElement("img", {
                  src: "//s1.pstatp.com/growth/video_mobile_detail/image/replay-live.8Ipl0inZ.png",
                  className: "replay-img"
                }), c.default.createElement("span", {
                  className: "replay-desc"
                }, "重播")));
              if (window.isXiguaLongVideoPage)
                return c.default.createElement("div", {
                  className: "video-mask-style-long-xigua " + this.props.className,
                  style: {
                    height: this.props.height
                  }
                }, c.default.createElement("div", {
                  className: "mask-btn-download",
                  onClick: function () {
                    return e.props.download()
                  }
                }, "打开", window.APP_CONFIG.app_name, "，观看完整版"), c.default.createElement("div", {
                  className: "mask-btn-replay",
                  onClick: function () {
                    return e.props.replayClick()
                  }
                }, c.default.createElement("img", {
                  src: "//s1.pstatp.com/growth/video_mobile_detail/image/replay.B6l8SPuw.png",
                  className: "replay-img"
                }), c.default.createElement("span", {
                  className: "replay-desc"
                }, "重播")));
              var a = this.props,
                t = a.duration,
                l = a.currentTime;
              return c.default.createElement("div", {
                className: "video-mask-styleB " + this.props.className,
                style: {
                  height: this.props.height
                }
              }, c.default.createElement("div", {
                className: "content"
              }, c.default.createElement("p", null, "打开", window.APP_CONFIG.app_name, " 播放更流畅 评论更精彩"), c.default.createElement("a", {
                className: "play-btn",
                onClick: function (a) {
                  e.props.play(),
                    a.stopPropagation()
                }
              }, "继续观看"), c.default.createElement("a", {
                className: "download-btn",
                onClick: function (a) {
                  e.props.download(),
                    a.stopPropagation()
                }
              }, "立即打开")), c.default.createElement("div", {
                className: "play",
                onClick: function (a) {
                  e.props.play(),
                    a.stopPropagation()
                }
              }, c.default.createElement("img", {
                src: "//s1.pstatp.com/growth/video_mobile_detail/image/play@2x.dFzsGZBm.png"
              }), c.default.createElement("span", null, l, "/", t)))
            }
          }]),
          a
      }(d.Component);
    m.propTypes = {
        play: u.default.func,
        download: u.default.func,
        className: u.default.string,
        duration: u.default.string,
        currentTime: u.default.string,
        height: u.default.number,
        replayClick: u.default.func,
        posterUrl: u.default.string
      },
      m.defaultProps = {
        play: function () {},
        download: function () {},
        className: ""
      },
      a.exports = m
  };
  o.vXntTnul = function (e, t, i, a, r) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    });
    var o = a(e("kwJIKkEn")),
      n = a(e("_l59FVJy")),
      l = a(e("kvaO6mJX")),
      d = a(e("__gK4WbX")),
      s = a(e("lgLPKmWO")),
      u = a(e("LFxswB00")),
      p = a(e("_3k8jqSq")),
      f = a(e("C_TrCxPr")),
      c = a(e("zNszyAds")),
      w = a(e("RiX6bfLf")),
      v = a(e("jf80GuUJ")),
      y = a(e("hPH_bcHo")),
      h = a(e("_l39DXxf")),
      _ = a(e("VW1Q45fN")),
      m = a(e("VcwWJehO")),
      k = a(e("_2MpYYf8")),
      g = a(e("NpbYakKP")),
      P = a(e("xFryiHX9")),
      x = function (e) {
        function t(e) {
          (0,
            s.default)(this, t);
          var i = (0,
            p.default)(this, (t.__proto__ || (0,
            d.default)(t)).call(this, e));
          return i.state = {
              isInvokeApp: !1,
              duration: 0,
              currentTime: 0,
              isFirstShowMask: !0,
              init: !1
            },
            i.hasReTryPlay = !1,
            i.firstPlay = !1,
            i.timer = null,
            i.player = null,
            i
        }
        return (0,
            f.default)(t, e),
          (0,
            u.default)(t, [{
            key: "componentDidMount",
            value: function () {
              this.initPlayer(this.props.videoData)
            }
          }, {
            key: "activateApp",
            value: function () {
              var e = P.default.request("ad_surl");
              if (e || !this.state.isInvokeApp) {
                var t = {
                  position: "playVideo",
                  downloadLink: e && g.default.shortLinkPrefix + "/" + e + "/" || (m.default.os.ios ? "https://d.toutiao.com/yNho/" : "https://d.toutiao.com/2ekp/"),
                  gdLabel: e && "click_alldownload" || (m.default.browser.weixin ? "click_weixin_rf_detail_playvideo" : "click_wap_rf_detail_playvideo"),
                  preventAppDownload: !e,
                  type: "detail",
                  id: window.group_id,
                  item_id: window.item_id,
                  isNewVideo: window.isNewVideoPage
                };
                ["16", "19", "21"].indexOf(window.groupSource) > -1 && (t.type = "awemevideo"),
                  (0,
                    k.default)(t),
                  this.state.isInvokeApp || (this.setState({
                      isInvokeApp: !0
                    }),
                    window.gaevent("video", "play_first"))
              }
            }
          }, {
            key: "initPlayer",
            value: function () {
              var e = (0,
                l.default)(o.default.mark(function e(t) {
                var i, a, r, l, d, s = this;
                return o.default.wrap(function (e) {
                  for (;;)
                    switch (e.prev = e.next) {
                      case 0:
                        if (i = t.video_id,
                          a = t.poster_url,
                          r = this.props.playWrapperHeight,
                          i && r) {
                          e.next = 4;
                          break
                        }
                        return e.abrupt("return");
                      case 4:
                        return l = [],
                          e.next = 7,
                          y.default.url(i, void 0, {
                            aid: window.APP_CONFIG && "video_lite" === window.APP_CONFIG.app ? "1631" : "1217",
                            nobase64: !0
                          }).then(function (e) {
                            var t = (e && e.data || {}).video_list;
                            if ((t = (0,
                                n.default)(t).map(function (e) {
                                if (t[e].main_url)
                                  return t[e]
                              })).sort(function (e, t) {
                                return e.definition.replace(/[^\d]+/g, "") - t.definition.replace(/[^\d]+/g, "") < 0
                              }),
                              t && t.length > 0) {
                              var i = t[0],
                                a = i.main_url,
                                r = i.backup_url_1;
                              l = [{
                                src: a
                              }, {
                                src: r
                              }]
                            }
                          });
                      case 7:
                        d = new v.default({
                            id: "xigua-video-player",
                            url: l,
                            poster: a.replace(/^http:/, "https:"),
                            width: window.innerWidth,
                            height: r,
                            playsinline: !0,
                            whitelist: [/./i],
                            ignores: ["loading"]
                          }),
                          this.player = d,
                          document.querySelector(".xgplayer-start") && !m.default.os.ios && document.querySelector(".xgplayer-start").addEventListener("touchstart", function () {
                            m.default.os.ios && m.default.os.version >= 11 ? setTimeout(function () {
                              s.activateApp()
                            }, 1e3) : s.activateApp()
                          }),
                          d.once("error", function (e) {
                            if (e) {
                              var t = e.errd,
                                i = void 0 === t ? {} : t,
                                a = e.currentTime,
                                r = e.errorType,
                                o = e.ex,
                                n = e.msg,
                                l = e.src;
                              h.default.captureException(new Error(i.msg), {
                                extra: {
                                  src: l || "",
                                  errorType: r || "",
                                  ex: o || "",
                                  msg: n || "",
                                  isPlayVideo: a || ""
                                }
                              })
                            }
                            s.hasReTryPlay || (d.reload(),
                              s.hasReTryPlay = !0)
                          }),
                          d.on("timeupdate", function () {
                            var e = d.duration;
                            if (e) {
                              var t = d.currentTime,
                                i = parseInt(e / 5);
                              if (!s.firstPlay && s.props.showMask && Math.abs(t - i) <= 1) {
                                if (s.firstPlay = !0,
                                  s.setState({
                                    duration: g.default.formatDuration(parseInt(e)),
                                    currentTime: g.default.formatDuration(parseInt(t))
                                  }),
                                  d.fullscreen)
                                  return;
                                d.pause(),
                                  document.querySelector(".video-mask").scrollIntoView(),
                                  window.scrollTo(0, 0)
                              }
                            }
                          }),
                          this.setState({
                            init: !0
                          });
                      case 13:
                      case "end":
                        return e.stop()
                    }
                }, e, this)
              }));
              return function (t) {
                return e.apply(this, arguments)
              }
            }()
          }, {
            key: "resumePlay",
            value: function () {
              this.player.play(),
                this.setState({
                  isFirstShowMask: !1
                })
            }
          }, {
            key: "pauseDownload",
            value: function () {
              var e = g.default.shortLinkPrefix + "/RL5x/";
              e = this.props.GTMValue.playbtnSurl || e,
                (0,
                  k.default)({
                  downloadLink: e,
                  type: "detail",
                  id: window.group_id,
                  item_id: window.item_id,
                  gdLabel: m.default.browser.weixin ? "click_weixin_rf_detail_mask" : "click_wap_rf_detail_mask",
                  isNewVideo: window.isNewVideoPage,
                  extraData: g.default.getExtraData({
                    type: "wap_no_recommend_activation"
                  })
                })
            }
          }, {
            key: "componentWillReceiveProps",
            value: function (e) {
              !this.props.videoData.video_id && e.videoData && e.videoData.video_id && this.initPlayer(e.videoData)
            }
          }, {
            key: "render",
            value: function () {
              var e = this,
                t = this.state,
                i = t.duration,
                a = t.currentTime,
                r = t.isFirstShowMask,
                o = this.props,
                n = o.showMask,
                l = o.playWrapperHeight;
              return c.default.createElement("div", {
                className: "play-wrapper",
                style: {
                  height: l
                }
              }, c.default.createElement("div", {
                id: "xigua-video-player",
                style: {
                  background: "#3A3A3A"
                }
              }), n && r && c.default.createElement(_.default, {
                className: "video-mask",
                duration: i,
                currentTime: a,
                play: function () {
                  return e.resumePlay()
                },
                height: this.props.playWrapperHeight,
                download: function () {
                  return e.pauseDownload()
                }
              }))
            }
          }]),
          t
      }(c.default.Component);
    x.propTypes = {
        videoData: w.default.object,
        GTMValue: w.default.object,
        showMask: w.default.bool,
        playWrapperHeight: w.default.number
      },
      i.default = x
  };
  o.DbhVIwye = function (e, i, d, t, o) {
    Object.defineProperty(d, "__esModule", {
      value: !0
    });
    var n = t(e("__gK4WbX")),
      l = t(e("lgLPKmWO")),
      a = t(e("LFxswB00")),
      r = t(e("_3k8jqSq")),
      u = t(e("C_TrCxPr")),
      f = t(e("zNszyAds")),
      w = t(e("Ze2Nlef5")),
      s = t(e("vXntTnul")),
      p = t(e("VcwWJehO")),
      _ = t(e("RiX6bfLf")),
      y = function (e) {
        function i(e) {
          return (0,
              l.default)(this, i),
            (0,
              r.default)(this, (i.__proto__ || (0,
              n.default)(i)).call(this, e))
        }
        return (0,
            u.default)(i, e),
          (0,
            a.default)(i, [{
            key: "getIsPlayVideo",
            value: function () {
              return !!this.props.allowPlayVideo || (!(!window.nothing || !((window.nothing.group_id || "").indexOf(window.group_id) > -1 || (window.nothing.media_id || "").indexOf(window.mediaUserId) > -1)) || !(window.noPlayVideo && (window.noPlayVideo.media_id || "").indexOf(window.mediaUserId) > -1) && (!p.default.browser.weixin && !p.default.browser.iqiyi))
            }
          }, {
            key: "render",
            value: function () {
              return this.getIsPlayVideo() ? f.default.createElement(s.default, this.props) : f.default.createElement(w.default, this.props)
            }
          }]),
          i
      }(f.default.Component);
    y.propTypes = {
        allowPlayVideo: _.default.bool
      },
      d.default = y
  };
  o.HwHczLPL = function (e, t, a, o, l) {
    var r = o(e("lT_XwWMZ")),
      s = o(e("__gK4WbX")),
      i = o(e("lgLPKmWO")),
      u = o(e("LFxswB00")),
      d = o(e("_3k8jqSq")),
      n = o(e("C_TrCxPr")),
      f = e("zNszyAds"),
      p = o(f),
      c = o(e("VqsoHVG3")),
      h = o(e("RiX6bfLf")),
      v = o(e("DbhVIwye")),
      _ = function (e) {
        function t(e) {
          return (0,
              i.default)(this, t),
            (0,
              d.default)(this, (t.__proto__ || (0,
              s.default)(t)).call(this, e))
        }
        return (0,
            n.default)(t, e),
          (0,
            u.default)(t, [{
            key: "render",
            value: function () {
              var e = this.props.videoData.in_process;
              return p.default.createElement("div", {
                className: "video-video-container-video"
              }, !e && p.default.createElement(v.default, (0,
                r.default)({
                showMask: this.props.showMask,
                className: "tt-video",
                GTMValue: this.props.GTMValue,
                playWrapperHeight: 225
              }, this.props)), e && p.default.createElement("div", {
                style: {
                  height: "225px",
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                  color: "#fff",
                  textAlign: "center",
                  lineHeight: "225px"
                }
              }, "视频正在处理中，请稍后再试"), p.default.createElement(c.default, this.props))
            }
          }]),
          t
      }(f.Component);
    _.propTypes = {
        videoData: h.default.object,
        GTMValue: h.default.object
      },
      _.defaultProps = {
        videoData: {},
        GTMValue: {},
        showMask: !0
      },
      t.exports = _
  };
  o._WsoOicu = function (e, t, a, i, d) {
    var o = i(e("qUYrYx_P")),
      n = i(e("__gK4WbX")),
      r = i(e("lgLPKmWO")),
      l = i(e("LFxswB00")),
      s = i(e("_3k8jqSq")),
      u = i(e("C_TrCxPr")),
      w = e("zNszyAds"),
      c = i(w),
      _ = e("dLqIczAI"),
      f = i(e("_9S022jS")),
      h = i(e("_h2weDsU")),
      p = i(e("xFryiHX9")),
      m = i(e("NpbYakKP")),
      v = i(e("VcwWJehO")),
      g = i(e("_2MpYYf8")),
      V = i(e("fgrAqpf7")),
      S = i(e("DUm84Z0n")),
      C = i(e("Pu3YCUiu")),
      M = i(e("ftflzyBZ")),
      y = e("_k9Qceab"),
      D = i(e("HwHczLPL")),
      T = {
        app_special: "14798012085000246",
        related_article: "14799599715000246"
      },
      k = {
        app_special_count: 6,
        related_article_count: 15
      },
      G = function (e) {
        function t(e) {
          (0,
            r.default)(this, t);
          var a = (0,
            s.default)(this, (t.__proto__ || (0,
            n.default)(t)).call(this, e));
          (0,
            h.default)();
          var i = (window.bit_state || "").split(",").map(function (e) {
              return "1" === e
            }),
            d = window.nothing.group_id.indexOf(window.group_id) > -1 || window.nothing.media_id.indexOf(window.mediaUserId) > -1,
            o = i[2],
            l = (i[3],
              i[4]);
          return a.state = {
              videoData: {},
              app_special: [],
              related_article: [],
              GTMValue: {},
              isShowBottomBanner: !1,
              isInMediaList: d,
              forbidShowFeed: o,
              forbidShowRelationCard: !0,
              allowPlayVideo: l,
              hotCardData: {},
              isChangeIconStatus: !1,
              isShowQuestionnaireIcon: !1,
              showMask: "hupu" !== p.default.request("utm_source")
            },
            a.stashData = [],
            a
        }
        return (0,
            u.default)(t, e),
          (0,
            l.default)(t, [{
            key: "componentDidMount",
            value: function () {
              this.fetchVideo();
              var e = this.state,
                t = e.isInMediaList,
                a = e.forbidShowFeed;
              t || a ? this.setState({
                  isShowBottomBanner: !0
                }) : this.fetchCommon(),
                ["news_article", "news_article_lite"].indexOf(window.APP_CONFIG.app) > -1 && this.fetchHotCardData(),
                "hupu" === p.default.request("utm_source") && v.default.os.android && (0,
                  g.default)({
                  preventAppDownload: !0,
                  type: "detail",
                  id: window.group_id
                })
            }
          }, {
            key: "fetchVideo",
            value: function () {
              var e = this;
              (0,
                y.fetchVideoData)(window.item_id).end(function (t, a) {
                if (t)
                  throw window.maevent("video_content", "get_data_failed"),
                    new Error(t);
                if (a) {
                  var i = JSON.parse(a.text);
                  if (!i.success)
                    throw window.maevent("video_content", "get_data_failed"),
                      new Error((0,
                        o.default)(i));
                  var d = i.data;
                  e.setState({
                    videoData: d
                  })
                }
              })
            }
          }, {
            key: "getCommonOption",
            value: function () {
              return {
                parent_rid: window.request_id,
                aid: window.isNewVideoPage ? 32 : 13,
                city: window.city || "",
                province: window.province || "",
                page_type: window.isNewVideoPage ? "video" : "article",
                share_iid: m.default.getShareInfo.share_iid,
                share_app_name: m.default.getShareInfo.share_app_name,
                wx_share_count: m.default.getShareInfo.wx_share_count,
                site_id: window.site_id,
                num: [k.app_special_count, k.related_article_count],
                code_id: [T.app_special, T.related_article]
              }
            }
          }, {
            key: "fetchCommon",
            value: function () {
              var e = this;
              (0,
                y.fetchCommonData)(window.group_id, this.getCommonOption(), function (t) {
                if (t.data) {
                  window.maevent("pageview", "recommended", 1);
                  var a = t.data[T.app_special] || [],
                    i = "wap_search" !== p.default.request("utm_medium") && t.data[T.related_article].length > 0 ? t.data[T.related_article] : [];
                  e.setState({
                    app_special: a,
                    related_article: i
                  })
                } else
                  window.maevent("pageview", "recommended", 0);
                e.setState({
                  isShowBottomBanner: !0
                })
              })
            }
          }, {
            key: "fetchHotCardData",
            value: function () {
              var e = this;
              (m.default.abTest.hotCardTest1 || m.default.abTest.hotCardTest2) && (0,
                y.getHotCardInfo)().end(function (t, a) {
                if (t)
                  throw new Error(t);
                var i = void 0;
                try {
                  "success" === (i = JSON.parse(a.text)).message && e.setState({
                    hotCardData: i.data
                  })
                } catch (e) {
                  throw new Error((0,
                    o.default)(e))
                }
              })
            }
          }, {
            key: "setGTMValue",
            value: function (e) {
              this.setState({
                GTMValue: e
              }, function () {
                "1" === p.default.request("ug_dsp") && ("ug_dsp_xg2lite1" === p.default.request("utm_source") && (0,
                    V.default)({
                    type: "detail",
                    id: window.group_id,
                    item_id: window.item_id,
                    gdLabel: "click_wap_rf_alldownload",
                    isNewVideo: window.isNewVideoPage,
                    downloadLink: "https://d.toutiao.com/fYLu/"
                  }),
                  "ug_dsp_xg2lite" === p.default.request("utm_source") && (0,
                    V.default)({
                    type: "detail",
                    id: window.group_id,
                    item_id: window.item_id,
                    gdLabel: "click_wap_rf_alldownload",
                    isNewVideo: window.isNewVideoPage,
                    downloadLink: "https://d.toutiao.com/RtVM/"
                  }))
              })
            }
          }, {
            key: "render",
            value: function () {
              var e = this,
                t = this.state,
                a = t.allowPlayVideo,
                i = t.forbidShowRelationCard,
                d = t.GTMValue,
                o = t.isShowBottomBanner,
                n = t.app_special,
                r = t.related_article,
                l = t.hotCardData;
              t.showMask;
              return c.default.createElement("div", {
                className: "video-container"
              }, c.default.createElement("div", {
                className: "weixin-share-portal"
              }), c.default.createElement(D.default, {
                GTMValue: this.state.GTMValue,
                videoData: this.state.videoData,
                allowPlayVideo: a,
                showMask: this.state.showMask,
                forbidShowRelationCard: i
              }), !d.hideAllRec && c.default.createElement(S.default, {
                appOnlyData: {
                  data: n
                },
                relatedNewsData: {
                  data: r
                },
                hotCardData: l,
                GTMValue: this.state.GTMValue
              }), o && c.default.createElement(C.default, {
                relatedNewsData: {
                  data: r
                },
                GTMValue: this.state.GTMValue
              }), c.default.createElement(M.default, {
                GTMValue: this.state.GTMValue
              }), c.default.createElement(f.default, {
                setGTMValue: function (t) {
                  return e.setGTMValue(t)
                }
              }))
            }
          }]),
          t
      }(w.Component);
    (0,
      _.render)(c.default.createElement(G, null), document.getElementById("main"))
  };
  return r("_WsoOicu")
});
//# sourceMappingURL=xigua_video.a7oYow5M.js.map
