import Vue from 'vue';
let LoadingConstructor = Vue.extend(require('./loading.vue'));

let instance;

LoadingConstructor.prototype.show = function(){
    this.visible = true;
}

LoadingConstructor.prototype.hide = function(){
    this.visible = false;
}

let Loading = function (options) {
    options = Object.assign({}, options);
    if (typeof (options.mini) === 'undefined' || options.mini) {
        typeof(options.text)==='undefined' && (options.text = '');
        typeof(options.iconRotate) === 'undefined' && (options.iconRotate = true);
        typeof(options.textColor) === 'undefined' && (options.textColor = '#FFF');
        typeof(options.bgColor) === 'undefined' && (options.bgColor = 'rgba(0,0,0,.7)');
        typeof (options.fontSize) === 'undefined' && (options.fontSize = 0.22);
    }
    instance = new LoadingConstructor({
        data: options
    });

    instance.vm = instance.$mount();
    document.body.appendChild(instance.$el);
    
    
    return instance;
};

export default Loading;