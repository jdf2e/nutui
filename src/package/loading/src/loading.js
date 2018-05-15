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
    instance = new LoadingConstructor({
        data: options
    });

    instance.vm = instance.$mount();
    document.body.appendChild(instance.$el);
    
    
    return instance;
};

export default Loading;