function Dpg(url) {
    if(!url) return;
    if (/\.jpg$|\.jpeg$/i.test(url)) {
        return url + '.dpg';
    } else if (/\.jpg\.webp$|\.jpeg\.webp$/i.test(url)){
        return url.replace(/(\.jpg)\.webp$|(\.jpeg)\.webp$/i, '$1$2.dpg');
    } else {
        return url;
    }
}

Dpg.install = function(Vue) {
    Vue.filter(Dpg.name, Dpg);
};

export default Dpg;