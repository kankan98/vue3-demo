!(function (e) {
  var t,
    n,
    o,
    c,
    i,
    d =
      '<svg><symbol id="icon-yanzhengma" viewBox="0 0 1024 1024"><path d="M512 150.84C584.07 219.89 689.35 247 808.2 277.6c6.85 1.76 13.79 3.55 20.8 5.36v107.98c0 60.37-8.2 121.12-24.38 180.57-15.81 58.09-38.31 111.62-66.86 159.11-28.26 47-60.78 85.24-96.64 113.65-35.34 28-72.49 45.13-110.43 50.92l-15.97 2.44-20.7-3.11c-38.02-5.72-75.25-22.8-110.67-50.77-35.94-28.38-68.53-66.61-96.86-113.63-28.63-47.5-51.18-101.07-67.04-159.2C203.23 511.42 195 450.6 195 390.16V282.97c7.01-1.82 13.96-3.6 20.81-5.37C334.66 247 439.94 219.89 512 150.84m0-89.19c-5.69 0-11.38 2.74-15.06 8.21-63.6 94.8-190.94 117.22-352.06 160.08-8.16 2.17-13.88 9.84-13.88 18.65v141.58c0 268.29 150.63 537.14 353.51 567.64l30.28 4.55 25.55-3.9C742.83 927.57 893 658.9 893 390.95V248.59c0-8.81-5.73-16.48-13.88-18.65C718 187.08 590.66 164.66 527.06 69.86c-3.67-5.48-9.37-8.21-15.06-8.21z"  ></path><path d="M504.15 654.85a32.03 32.03 0 0 1-22.42-9.16L326.21 493.02c-12.61-12.38-12.8-32.64-0.42-45.25s32.64-12.8 45.25-0.42l131.78 129.36 192.86-212.37c11.88-13.08 32.12-14.06 45.2-2.18 13.08 11.88 14.06 32.12 2.18 45.2l-215.23 237a32 32 0 0 1-22.77 10.47c-0.3 0.02-0.61 0.02-0.91 0.02z"  ></path></symbol></svg>',
    a = (a = document.getElementsByTagName('script'))[
      a.length - 1
    ].getAttribute('data-injectcss'),
    l = function (e, t) {
      t.parentNode.insertBefore(e, t);
    };
  if (a && !e.__iconfont__svg__cssinject__) {
    e.__iconfont__svg__cssinject__ = !0;
    try {
      document.write(
        '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>'
      );
    } catch (e) {
      console && console.log(e);
    }
  }
  function s() {
    i || ((i = !0), o());
  }
  function r() {
    try {
      c.documentElement.doScroll('left');
    } catch (e) {
      return void setTimeout(r, 50);
    }
    s();
  }
  (t = function () {
    var e, t;
    ((t = document.createElement('div')).innerHTML = d),
      (d = null),
      (e = t.getElementsByTagName('svg')[0]) &&
        (e.setAttribute('aria-hidden', 'true'),
        (e.style.position = 'absolute'),
        (e.style.width = 0),
        (e.style.height = 0),
        (e.style.overflow = 'hidden'),
        (t = e),
        (e = document.body).firstChild ? l(t, e.firstChild) : e.appendChild(t));
  }),
    document.addEventListener
      ? ~['complete', 'loaded', 'interactive'].indexOf(document.readyState)
        ? setTimeout(t, 0)
        : ((n = function () {
            document.removeEventListener('DOMContentLoaded', n, !1), t();
          }),
          document.addEventListener('DOMContentLoaded', n, !1))
      : document.attachEvent &&
        ((o = t),
        (c = e.document),
        (i = !1),
        r(),
        (c.onreadystatechange = function () {
          'complete' == c.readyState && ((c.onreadystatechange = null), s());
        }));
})(window);
