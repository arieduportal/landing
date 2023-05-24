if (null == typeof window || null == window.TRACK_ID) throw Error("Tracker ID not initailized");

function getDate() {
    var t = new Date(), a = ("0" + t.getDate()).slice(-2), n = ("0" + (t.getMonth() + 1)).slice(-2), t = t.getFullYear();
    return "".concat(a, ".").concat(n, ".").concat(t);
}
;function track(t, a, n, r, e, i, o, c) {
    o = window.location.hostname, e = getDate(), (i = a.createElement(n)).async = !0, 
    i.src = "https://static.arieducationportal.com/js/tracker[0]?s=".concat(o, "/?id=").concat(t.TRACK_ID), 
    i.setAttribute(r, '{"v": "[0]", "date": "'.concat(e, '", "tracker": "').concat(t.TRACK_ID, '"}')), 
    i.crossOrigin = "anonymous", i.defer = !0, (c = a.getElementsByTagName(n)[1]).parentNode.insertBefore(i, c);
}
;track(window, document, "script", "data-ae-access");