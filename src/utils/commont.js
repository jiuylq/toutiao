export function findIndex(ary, fn) {
  if (ary.findIndex) {
    return ary.findIndex(fn)
  }
  /* istanbul ignore next */
  let index = '-1'
  /* istanbul ignore next */
  ary.some(function(item, i, ary) {
    const ret = fn.call(this, item, i, ary)
    if (ret) {
      index = i
      return ret
    }
  })
  /* istanbul ignore next */
  return index
}

export function throttle(fun, delay) {
  let last, deferTimer
  return function (args) {
    let that = this
    let _args = arguments
    let now = +new Date()
    if (last && now < last + delay) {
      clearTimeout(deferTimer)
      deferTimer = setTimeout(function () {
        last = now
        fun.apply(that, _args)
      }, delay)
    } else {
      last = now
      fun.apply(that, _args)
    }
  }
}

export function debounce(fun, delay) {
  return function (args) {
    let that = this
    let _args = args
    clearTimeout(fun.id)
    fun.id = setTimeout(function () {
      fun.call(that, _args)
    }, delay)
  }
}

/**
 * @desc setCookie
 * @param {String} name
 * @param {String} value
 * @param {Object} opts
**/
export function setCookie(name, value, opts) {
  // opts: {
  //     'domain': '',
  //     'path': '',
  //     'expires': '',
  //     'maxAage': '',
  //     'secure': ''
  // }
  // 对name和value进行编码
  /* eslint-disable */
  value = encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent)
  name = encodeURIComponent(String(name)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape)
  /* eslint-enable */
  var options = ''
  if (opts) {
    if (opts.expires && typeof opts.expires === 'number') {
      opts.expires = new Date(new Date() * 1 + opts.expires * 864e+5).toUTCString()
    }
    for (var i in opts) {
      if (!opts[i]) continue
      options += ';' + i
      options += '=' + opts[i]
    }
  }
  document.cookie = name + '=' + value + options
}

/**
 * @desc getCookie
 * @param {string} name
**/
export function getCookie(name) {
  var cookies = document.cookie.split('; ')
  var keyVal = {}
  function decode (s) {
    return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
  }
  for (var i = 0; i < cookies.length; i++) {
    var part = cookies[i].split('=')
    if (decode(part[0]) === name) {
      keyVal[name] = decode(part[1])
      break
    }
  }
  return name ? keyVal[name] : ''
}

/**
 * @desc getCookie
 * @param {string} name
**/
export function removeCookie(name) {
  setCookie(name, 1, {'expires': -1})
}

export function getRect(el) {
  if (el instanceof window.SVGElement) {
    var rect = el.getBoundingClientRect()
    return {
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height
    }
  } else {
    return {
      top: el.offsetTop,
      left: el.offsetLeft,
      width: el.offsetWidth,
      height: el.offsetHeight
    }
  }
}

export function cleanArray(actual) {
  const newArray = []
  for (let i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i])
    }
  }
  return newArray
}

export function param(json) {
  if (!json) return ''
  return cleanArray(
    Object.keys(json).map(key => {
      if (json[key] === undefined) return ''
      return encodeURIComponent(key) + '=' + encodeURIComponent(json[key])
    })
  ).join('&')
}

export function param2Obj(url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}'
  )
}
