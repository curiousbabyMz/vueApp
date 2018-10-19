var getStyle = function (el, style) {
    return parseInt(window.getComputedStyle(el, null)[style])
}
var getImages = function (_url) {
    if (_url !== undefined) {
        let _u = _url.substring(7);
        return "https://images.weserv.nl/?url=" + _u;
    }
}

export { getStyle, getImages }