export default function (el, style) {
    return parseInt(window.getComputedStyle(el, null)[style])
}