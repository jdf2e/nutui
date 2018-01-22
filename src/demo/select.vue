<template>
    <div>
        <h1>Select</h1>
        <p>从页面底部弹出的select选择器，支持多级选择及异步请求的多级选择。</p>
        <!-- DEMO区域 -->
        <h5>示例</h5>

        <p>默认用法</p>
        <nut-select class="demo1-select" :selected="demo1.selected" :data="demo1.data" @change="demo1Change">{{demo1.selected}}</nut-select>
        <!-- DEMO代码 -->
        

        <p>显示内容自定义Slot</p>
        <nut-select
        :selected="demo2.selected" 
        :data="demo2.data"
        @change="demo2Change">
        <slot><button>{{demo2.selected}}</button></slot>
        </nut-select>
        <!-- DEMO代码 -->
        

        <p>异步加载</p>
        <nut-select
        :selected="demo3.selected" 
        :data="demo3.data"
        :async = true
        @change="demo3Change"
        @slideEnd="slideEnd">
        <slot><button>{{demo3.selected}}</button></slot>
        </nut-select>
        <!-- DEMO代码 -->
        
        <div id="demo-select"></div>
    </div>
</template>

<script>
export default {
    data(){
        return{
          demo1: {
            data: [
              {"n": "北京", "s": [{"n": "海淀区"},{"n": "通州区"}]},
              {"n": "上海", "s": [{"n": "浦东新区"},{"n": "其他区"}]},
              {"n": "河北省", "s": [{"n": "石家庄市", "s": [{"n": "城东区"},{"n": "城西区"}]},{"n":"秦皇岛市"}]},
              {"n": "上海", "s": [{"n": "浦东新区"},{"n": "其他区"}]},
              {"n": "上海", "s": [{"n": "浦东新区"},{"n": "其他区"}]},
              {"n": "上海", "s": [{"n": "浦东新区"},{"n": "其他区"}]},
              {"n": "上海", "s": [{"n": "浦东新区"},{"n": "其他区"}]},
              {"n": "上海", "s": [{"n": "浦东新区"},{"n": "其他区"}]},
              {"n": "上海", "s": [{"n": "浦东新区"},{"n": "其他区"}]}
            ],
            selected: '河北省-石家庄市-城东区',
            txt: `<nut-select class="demo1-select" 
                  :selected="demo1.selected" 
                  :data="demo1.data" 
                  @change="demo1Change">{{demo1.selected}}</nut-select>
                  export default {
                    methods:{
                      demo1Change(val) {
                        this.demo1.selected = val.join('-');
                      }
                    }
                  }`
          },
          demo2: {
              selected: '2018-11',
              data: [
                  {"n":"2017","s":[{"n":"1"},{"n":"2"},{"n":"3"},{"n":"4"},{"n":"5"},{"n":"6"},{"n":"7"},{"n":"8"},{"n":"9"},{"n":"10"},{"n":"11"},{"n":"12"}]},
                  {"n":"2018","s":[{"n":"1"},{"n":"2"},{"n":"3"},{"n":"4"},{"n":"5"},{"n":"6"},{"n":"7"},{"n":"8"},{"n":"9"},{"n":"10"},{"n":"11"},{"n":"12"}]},
                  {"n":"2019","s":[{"n":"1"},{"n":"2"},{"n":"3"},{"n":"4"},{"n":"5"},{"n":"6"},{"n":"7"},{"n":"8"},{"n":"9"},{"n":"10"},{"n":"11"},{"n":"12"}]},
                  {"n":"2020","s":[{"n":"1"},{"n":"2"},{"n":"3"},{"n":"4"},{"n":"5"},{"n":"6"},{"n":"7"},{"n":"8"},{"n":"9"},{"n":"10"},{"n":"11"},{"n":"12"}]},
                  {"n":"2021","s":[{"n":"1"},{"n":"2"},{"n":"3"},{"n":"4"},{"n":"5"},{"n":"6"},{"n":"7"},{"n":"8"},{"n":"9"},{"n":"10"},{"n":"11"},{"n":"12"}]},
                  {"n":"2022","s":[{"n":"1"},{"n":"2"},{"n":"3"},{"n":"4"},{"n":"5"},{"n":"6"},{"n":"7"},{"n":"8"},{"n":"9"},{"n":"10"},{"n":"11"},{"n":"12"}]},
                  {"n":"2023","s":[{"n":"1"},{"n":"2"},{"n":"3"},{"n":"4"},{"n":"5"},{"n":"6"},{"n":"7"},{"n":"8"},{"n":"9"},{"n":"10"},{"n":"11"},{"n":"12"}]}
              ],
              txt: `<nut-select
        :selected="demo2.selected" 
        :data="demo2.data" 
        @change="demo2Change">
        <slot><button>{{demo2.selected}}</button></slot>
        </nut-select>
        export default {
          methods:{
            demo2Change(val) {
              this.demo2.selected = val.join('-');
            }
          }
        }        
        `
          },
          demo3: {
            selected: '1',
            data: [
              {"n":"1"},{"n":"2"},{"n":"3"},{"n":"4"},{"n":"5"},{"n":"6"}
            ],
            txt: `
            <nut-select
        :selected="demo3.selected" 
        :data="demo3.data"
        :async = true
        @change="demo3Change"
        @slideEnd="slideEnd">
        <slot><button>{{demo3.selected}}</button></slot>
        </nut-select>
        export default {
          methods:{
            slideEnd(val, $select) {
              console.log(val);
              $select.updateSelect([{"n": parseInt(Math.random()*10)},{"n": parseInt(Math.random()*10)}]);
            },
            demo3Change(val) {
              this.demo3.selected = val.join('-');
            }
          }
        }`
          }
        }
    },
    methods:{
      demo1Change(val) {
        var arr = [];
        for(var i = 0; i < val.length; i++) {
          arr.push(val[i].n);
        }
        this.demo1.selected = arr.join('-');
      },
      demo2Change(val) {
        var arr = [];
        for(var i = 0; i < val.length; i++) {
          arr.push(val[i].n);
        }
        this.demo1.selected = arr.join('-');
      },      
      demo3Change(val) {
        var arr = [];
        for(var i = 0; i < val.length; i++) {
          arr.push(val[i].n);
        }
        this.demo1.selected = arr.join('-');
      },
      slideEnd(val, $select) {
        console.log(val);
        if(val.length<3) {
          $select.updateSelect([{"n": parseInt(Math.random()*10)},{"n": parseInt(Math.random()*10)}]);          
        }
      }
    }
}
</script>

<style>
.demo1-select {
  border:1px solid #ccc;
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
  display: block;
}
</style>
