<template>
    <div class="select nut-select__dd" @click="showSelect">
        <slot>请选择</slot>
    </div>
</template>
<style  lang="scss" scoped></style>
<script>
    import Vue from 'vue';
    import dateSwiper from './dateSwiper.vue';
    import Swiper from './../../swiper/index.js';
    import Mask from './../../mask/index.js';
    Mask.install(Vue);
    Swiper.install(Vue);
    export default {
        name: "nut-select",
        props: {
            data: Array,
            selected: {
                type: String,
                default: ''
            },
            nodeKey: {
                type: String,
                default: 'n'
            },
            childKey: {
                type: String,
                default: 's'
            },
            async: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                swiperCacheData: [],
                dateSwiper: {}
            }
        },
        mounted: function() {
            this.loading = this.$loading({
                fade: true
            })
        },
        computed: {
            cacheSelected() {
                return this.selected;
            }
        },
        methods: {
            initSwiper(selector) {
                this.swiperCacheData = [];
                this.dateSwiper = new Vue(dateSwiper).$mount(`#${selector}>div`);
                this.swiperData(this.data, 0, true);
                this.dateSwiper.data = this.swiperCacheData;
                this.dateSwiper.nodeKey = this.nodeKey;
                this.dateSwiper.$on('change', this.change);
                this.dateSwiper.$on('slideEnd', this.slideEnd);
            },
            showSelect() {
                var con = this.$el.parentElement;
                var containerId = 'nut__select-dropdown';
                var nodeList = document.querySelector(containerId);
                if(!nodeList) {
                    var node = document.createElement("div");
                    node.setAttribute('id', containerId);
                    node.appendChild(document.createElement("div"));
                    con.appendChild(node);
                    this.initSwiper(containerId);
                }else {                    
                    this.initSwiper(containerId);
                }
            }, 
            setId() {
                if(!this.$el.getAttribute("id")) {
                    var id = parseInt(Math.random()*100);
                    var existNode = document.getElementById(id);
                    if(!existNode){
                        this.$el.setAttribute("id", parseInt(Math.random()*100));
                    }else {
                        this.setId();
                    }
                }
            },       
            swiperData(data, hierarchy, hasSelected) {
                var selectedArr = []; 
                var selectedIndex = 1;
                if(hasSelected) {
                    if(this.selected != ""){
                        selectedArr = this.selected.split('-');
                        selectedIndex = this.getSelectedIndex(data, selectedArr[hierarchy]);
                    }
                }
                this.swiperCacheData.push({
                    selected: selectedIndex,
                    data: data
                })
                
                if(!this.async) {
                    var children = data[selectedIndex-1][this.childKey];
                    if(children) {
                        var hie = hierarchy+1;
                        this.swiperData(children, hie, hasSelected);
                    }
                }else {                        
                    this.$emit('slideEnd', this.getSelectedIndexs(), this);
                }
            },
            getSelectedIndex(arr, val) {
                var index = 1;
                for(var i = 0; i<arr.length; i++) {
                    if(arr[i].n ===  val){
                        index = i + 1;
                        break;
                    }
                } 
                return index;
            },
            dealData() {
                // 把数据key转化为代码中的key
            },
            slideEnd(obj) {
                //切换页签
                var hies = this.swiperCacheData.length;
                this.swiperCacheData.splice(obj.hie+1, hies-1);
                this.dateSwiper.data = this.swiperCacheData;
                this.swiperCacheData[obj.hie].selected = obj.index;
                if(!this.async) {
                    var children = this.swiperCacheData[obj.hie].data[obj.index - 1][this.childKey];
                    if(children) {
                        this.swiperData(children, obj.hie+1, false);
                    }
                }
                if(this.async) {
                    this.showSelectMask();
                }
                this.$emit('slideEnd', this.getSelectedIndexs(), this);
            },            
            getSelectedIndexs() {
                var indexs = [];
                for (var i = 0; i < this.swiperCacheData.length; i++) {
                    indexs.push(this.swiperCacheData[i].data[this.swiperCacheData[i].selected-1]);
                }
                return indexs;
            },
            change(val) {
                this.$emit('change', val);
            },
            updateSelect(data, hideMask) {
                //填充下一级
                if(data instanceof Array && data.length >0){
                    this.swiperData(data, this.swiperCacheData.length, false);
                }else {
                    console.warn("【select】组件---调用【updateSelect】时，数据有问题");
                }
                if(hideMask) {
                    this.hideSelectMask();
                }
            },
            showSelectMask(txt) {
                this.dateSwiper.selectShow = true;
                this.dateSwiper.txt = txt || '数据加载中...';
            },
            hideSelectMask() {
                this.dateSwiper.selectShow = false;
            }
        }
    }
</script>