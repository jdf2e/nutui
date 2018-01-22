//兼容requestanimationframe
function requestAniFrame() {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
}
//是否出现在视口内（水平方向）
function verInViewport(el, viewHeight) {
    var rect = el.getBoundingClientRect();
    return (rect.top > 0 && rect.top < viewHeight);
}
//是否出现在视口内（垂直方向）
function horInViewport(el, viewWidth) {
    var rect = el.getBoundingClientRect();
    return (rect.left > 0 && rect.left < viewWidth);
}
//探测浏览器是否支持webp
function webpSupport() {
    if (!localStorage) return false;
    switch (localStorage.getItem('supportWebp')) {
        case 'true':
            return true;
        case 'false':
            return false;
        default:
            try {
                if (document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0) {
                    document.body.classList.add('webp');
                    localStorage.setItem('supportWebp', 'true');
                    return true;
                } else {
                    localStorage.setItem('supportWebp', 'false');
                    return false;
                }
            } catch (e) {
                localStorage.setItem('supportWebp', 'false');
                return false;
            }
    }
}


export {
    requestAniFrame,
    verInViewport,
    horInViewport,
    webpSupport,
};