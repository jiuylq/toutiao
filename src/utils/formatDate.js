/* eslint-disable */
export function getTimeStamp(e, b, k) {
  // 两时间相减
  function getDiffTime(e) {
    return (new Date).getTime() - e.getTime()
  }
  // 当前时间月份是否比获取的时间的月份大
  function isLargeTime(e) {
    var t = new Date;
    return t.getMonth() > e.getMonth() || t.getDate() > e.getDate()
  }
  // 当前年份比较
  function isLargeYear(e, b) {
    return (new Date).getFullYear() > e.getFullYear()
  }
  // 格式化当前时间
  function format(e) {
    var nowDate = new Date()
    var t = {
      "M+": nowDate.getMonth() + 1,
      "d+": nowDate.getDate(),
      "h+": nowDate.getHours(),
      "m+": nowDate.getMinutes(),
      "s+": nowDate.getSeconds(),
      "q+": Math.floor((nowDate.getMonth() + 3) / 3),
      S: nowDate.getMilliseconds()
    };
    /(y+)/.test(e) && (e = e.replace(RegExp.$1, (nowDate.getFullYear() + "").substr(4 - RegExp.$1.length)));
    for (var n in t)
      new RegExp("(" + n + ")").test(e) && (e = e.replace(RegExp.$1, 1 === RegExp.$1.length ? t[n] : ("00" + t[n]).substr(("" + t[n]).length)));
    return e
  };
  // 将时间统一格式
  function parse(e) {
    if (k) {
      if (String(e).length === 13) {
        return n = new Date(n)
      } else {
        var n = e + '000';
        return n = new Date(+n)
      }
    } else {
    var n = e;
    return n = n.replace(/\.\d+/, ""),
      n = n.replace(/-/, "/").replace(/-/, "/"),
      n = n.replace(/T/, " ").replace(/Z/, " UTC"),
      n = n.replace(/([+-]\d\d):?(\d\d)/, " $1$2"),
      new Date(n)
    }
  }
  
  var a = {};
  a = {
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
          months: "%d月",
          years: "%d年",
          numbers: []
        },
        yearsAgoFormat: "yyyy-MM-dd",
        daysAgoFormat: "MM-dd hh:mm"
      },
      inWords: function (e) {
        function n(e, n) {
          var r = e,
            o = n;
          return r.replace(/%d/i, o)
        }
        var s = a.settings.relative;
        if (!s && isLargeYear(e))
          return e.format(this.settings.yearsAgoFormat);
        if (!s && isLargeTime(e))
          return e.format(this.settings.daysAgoFormat);
        var u, l = getDiffTime(e),
          c = this.settings.strings,
          f = c.suffixAgo,
          d = Math.abs(l) / 1e3,
          p = d / 60,
          h = p / 60,
          m = h / 24,
          v = m / 30,
          g = m / 365;
        return u = d < 60 ? n(c.seconds, Math.floor(d)) : p < 60 ? n(c.minutes, Math.floor(p)) : h < 24 ? n(c.hours, Math.floor(h)) : m < 30 ? n(c.days, Math.floor(m)) : m < 365 ? n(c.months, Math.floor(v)) : n(c.years, Math.floor(g)),
          "刚刚" === u ? u : u + f
      }
    }
    b && (a.settings.relative = b)
    return a.inWords(parse(e))
}
/* eslint-enable */
