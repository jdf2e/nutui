<template>
    <div>
        <!-- 组件名和描述 -->
        <nut-demoheader 
        :name="$route.name"
        ></nut-demoheader>
        <!-- DEMO区域 -->
        <nut-lazycomponent class="demo" 
            @before-enter = "beforeEnter"
            @after-enter = "afterEnter"
            @before-leave = "beforeLeave"
            @after-leave = "afterLeave"
            @after-init = "afterInit"
            >
             <!--实现 骨架 -->
            <div class="loading" slot="loading" v-html="svg"></div>   
              <!--加载ok的模块  -->
            <div class="cp-box">
                 我是模块1
            </div>
        </nut-lazycomponent>
        <nut-lazycomponent class="demo">
             <!--实现 骨架 -->
            <div class="loading" slot="loading" v-html="svg"></div>   
              <!--加载ok的模块  -->
            <div class="cp-box">
                 我是模块2
            </div>
        </nut-lazycomponent> 
        <nut-lazycomponent class="demo">
             <!--实现 骨架 -->
            <div class="loading" slot="loading" v-html="svg"></div>   
              <!--加载ok的模块  -->
            <div class="cp-box">
                 我是模块3
            </div>
        </nut-lazycomponent> 
        <nut-lazycomponent class="demo">
             <!--实现 骨架 -->
            <div class="loading" slot="loading" v-html="svg"></div>   
              <!--加载ok的模块  -->
            <div class="cp-box">
                 我是模块4
            </div>
        </nut-lazycomponent> 
        <nut-lazycomponent class="demo">
             <!--实现 骨架 -->
            <div class="loading" slot="loading" v-html="svg"></div>   
              <!--加载ok的模块  -->
            <div class="cp-box">
                 我是模块5
            </div>
        </nut-lazycomponent> 
        <nut-lazycomponent class="demo">
             <!--实现 骨架 -->
            <div class="loading" slot="loading" v-html="svg"></div>   
              <!--加载ok的模块  -->
            <div class="cp-box">
                 我是模块6
            </div>
        </nut-lazycomponent> 
        <nut-lazycomponent class="demo">
             <!--实现 骨架 -->
            <div class="loading" slot="loading" v-html="svg"></div>   
              <!--加载ok的模块  -->
            <div class="cp-box">
                 我是模块7
            </div>
        </nut-lazycomponent> 
        <nut-lazycomponent class="demo">
             <!--实现 骨架 -->
            <div class="loading" slot="loading" v-html="svg"></div>   
              <!--加载ok的模块  -->
            <div class="cp-box">
                 我是模块8
            </div>
        </nut-lazycomponent> 
        <nut-lazycomponent class="demo">
             <!--实现 骨架 -->
            <div class="loading" slot="loading" v-html="svg"></div>   
              <!--加载ok的模块  -->
            <div class="cp-box">
                 我是模块9
            </div>
        </nut-lazycomponent> 
        <nut-lazycomponent class="demo">
             <!--实现 骨架 -->
            <div class="loading" slot="loading" v-html="svg"></div>   
              <!--加载ok的模块  -->
            <div class="cp-box">
                 我是模块10
            </div>
        </nut-lazycomponent> 
        <nut-lazycomponent class="demo">
             <!--实现 骨架 -->
            <div class="loading" slot="loading" v-html="svg"></div>   
              <!--加载ok的模块  -->
            <div class="cp-box">
                 我是模块11
            </div>
        </nut-lazycomponent> 
        <nut-lazycomponent class="demo">
             <!--实现 骨架 -->
            <div class="loading" slot="loading" v-html="svg"></div>   
              <!--加载ok的模块  -->
            <div class="cp-box">
                 我是模块12
            </div>
        </nut-lazycomponent> 
        <nut-lazycomponent class="demo">
             <!--实现 骨架 -->
            <div class="loading" slot="loading" v-html="svg"></div>   
              <!--加载ok的模块  -->
            <div class="cp-box">
                 我是模块13
            </div>
        </nut-lazycomponent> 
        <nut-lazycomponent class="demo">
             <!--实现 骨架 -->
            <div class="loading" slot="loading" v-html="svg"></div>   
              <!--加载ok的模块  -->
            <div class="cp-box">
                 我是模块14
            </div>
        </nut-lazycomponent> 
        <nut-lazycomponent class="demo">
             <!--实现 骨架 -->
            <div class="loading" slot="loading" v-html="svg"></div>   
              <!--加载ok的模块  -->
            <div class="cp-box">
                 我是模块15
            </div>
        </nut-lazycomponent> 
        <nut-lazycomponent class="demo">
             <!--实现 骨架 -->
            <div class="loading" slot="loading" v-html="svg"></div>   
              <!--加载ok的模块  -->
            <div class="cp-box">
                 我是模块16
            </div>
        </nut-lazycomponent> 
        <nut-lazycomponent class="demo">
             <!--实现 骨架 -->
            <div class="loading" slot="loading" v-html="svg"></div>   
              <!--加载ok的模块  -->
            <div class="cp-box">
                 我是模块16
            </div>
        </nut-lazycomponent> 
        <nut-lazycomponent class="demo">
             <!--实现 骨架 -->
            <div class="loading" slot="loading" v-html="svg"></div>   
              <!--加载ok的模块  -->
            <div class="cp-box">
                 我是模块18
            </div>
        </nut-lazycomponent> 
        <nut-lazycomponent class="demo">
             <!--实现 骨架 -->
            <div class="loading" slot="loading" v-html="svg"></div>   
              <!--加载ok的模块  -->
            <div class="cp-box">
                 我是模块19
            </div>
        </nut-lazycomponent>        
    </div>
</template>

<script>
export default {
    data(){
        return{
             svg:`<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    width="24px" height="30px" viewBox="0 0 24 30"  xml:space="preserve">
                    <rect x="0" y="0" width="4" height="10" fill="#bd2c00">
                    <animateTransform attributeType="xml"
                        attributeName="transform" type="translate"
                        values="0 0; 0 20; 0 0"
                        begin="0" dur="0.6s" repeatCount="indefinite" />
                    </rect>
                    <rect x="10" y="0" width="4" height="10" fill="#bd2c00">
                    <animateTransform attributeType="xml"
                        attributeName="transform" type="translate"
                        values="0 0; 0 20; 0 0"
                        begin="0.2s" dur="0.6s" repeatCount="indefinite" />
                    </rect>
                    <rect x="20" y="0" width="4" height="10" fill="#bd2c00">
                    <animateTransform attributeType="xml"
                        attributeName="transform" type="translate"
                        values="0 0; 0 20; 0 0"
                        begin="0.4s" dur="0.6s" repeatCount="indefinite" />
                    </rect>
                </svg>`
        }
    },
    methods:{       
        beforeEnter(e){
            console.log('懒加载模块开始进入',e);
        },
        afterEnter(e){
            console.log('懒加载模快已经进入',e);
        },
        beforeLeave(e){
            console.log('等待元素开始离开',e);
        },
        afterLeave(e){
            console.log('等待元素已经离开',e);
        },
        afterInit(e){
            console.log("组件开始显示",e)
        }
    }
}
</script>

<style lang="scss" scoped>
.loading,.cp-box{
    width: 100%;
    height: 100px;
    text-align: center;
    line-height: 100px;
    color: #fff;
    background: rgb(168, 168, 222);
    border-bottom:1px solid #fff;
}
.demo{
    padding:5px;
    padding-top:40px;
}
</style>
