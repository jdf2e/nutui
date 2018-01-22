<template>
    <div>
        <h1>Drag</h1>
        <p>一种Icon拖动吸边组件。</p>
        <a class="button-primary button" href="/demo.html#/drag">DEMO</a>
        <h5 class="staticTitle">基本用法</h5>
        <!-- DEMO区域 -->
        <!-- <nut-drag :direction="direction"
                  :boundary="boundary"
        ></nut-drag> -->
        <!-- DEMO代码 -->
        <div>
            <p class="drag-tip">1、可控制移动方向，垂直移动(h)，水平移动(v)</p>
        </div>
        
        <pre><code v-highlight v-text="demo1"></code></pre>
        <div>
            <p class="drag-tip">2、可设置距离边界的值来限制拖动范围</p> 
        </div>
        <pre><code v-highlight v-text="demo2"></code></pre>
        
        <div>
            <p class="drag-tip">3、可设置是否吸边</p> 
        </div>
        <pre><code v-highlight v-text="demo3"></code></pre>
        <h5>Props</h5>
        <div class="tbl-wrapper">
        <table class="u-full-width">
          <thead>
            <tr>
              <th>参数</th>
              <th>说明</th>
              <th>类型</th>
              <th>默认值</th>
              <th>可选值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>isSide</td>
              <td>是否吸边</td>
              <td>Boolean</td>
              <td>true</td>
              <td>true/false</td>
            </tr>
            <tr>
              <td>direction</td>
              <td>移动方向</td>
              <td>String</td>
              <td>"h"</td>
              <td>"h"/"v"/"n"</td>
            </tr>
            <tr>
              <td>boundary</td>
              <td>距边界距离</td>
              <td>Object</td>
              <td>{ 
                    top:20,
                    left:0,
                    right:20,
                    bottom:20
                }</td>
              <td>--</td>
            </tr>
            <tr>
              <td>width</td>
              <td>宽</td>
              <td>Number,String</td>
              <td>50</td>
              <td>--</td>
            </tr>
            <tr>
              <td>height</td>
              <td>高</td>
              <td>Number,String</td>
              <td>50</td>
              <td>--</td>
            </tr>
            <tr>
              <td>opacity</td>
              <td>透明度</td>
              <td>Number,String</td>
              <td>1</td>
              <td>--</td>
            </tr>
            <tr>
              <td>unit</td>
              <td>距离单位</td>
              <td>String</td>
              <td>"px"</td>
              <td>"px"/"rem"</td>
            </tr>
            <tr>
              <td>zIndex</td>
              <td>样式层级</td>
              <td>Number,String</td>
              <td>11</td>
              <td>--</td>
            </tr>
            <tr>
              <td>opacity</td>
              <td>透明度</td>
              <td>Number,String</td>
              <td>1</td>
              <td>--</td>
            </tr>
          </tbody>
        </table>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            direction: 'h',
            boundary: {top: 200, bottom: 20, left: 0, right: 20},
            demo1:`<nut-drag direction="h"></nut-drag>`,
            demo2:`<nut-drag :boundary="{top: 20, bottom: 20}"></nut-drag>`,
            demo3:`<nut-drag :isSide="true"></nut-drag>`,
        }
    },
    methods:{
        changeMove(x, e){
            let dom = e.currentTarget;
            let siblings = dom.parentElement.children;
            this.removeClass(siblings);
            dom.classList.add('curr');
            this.direction = x;
        },
        changeBoundary(x, e){
            let dom = e.currentTarget;
            let siblings = dom.parentElement.children;
            this.removeClass(siblings);
            dom.classList.add('curr');
            if (x=='y') {
                this.boundary = {top: 20, bottom: 20, left: 0, right: 20};
            }else{
                this.boundary = {top: 0, bottom: 0, left: 0, right: 0};
            }
        },
        removeClass(siblings){  //去除同级的class
            for ( let i in siblings) {
                if (siblings.hasOwnProperty(i) === true){
                    siblings[i].className = 'button-primary';
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.button-primary{
    display: inline-block;
    height: 38px;
    padding: 0 10px;
    color: #555;
    text-align: center;
    font-size: 14px;
    line-height: 38px;
    text-decoration: none;
    white-space: nowrap;
    background-color: transparent;
    border-radius: 3px;
    border: 1px solid #bbb;
    cursor: pointer;
    box-sizing: border-box;
    &.curr{
        background-color: #33C3F0;
        border-color: #33C3F0; 
        color: #fff;
    }
}
.staticTitle{
    margin-top: 15px;
}
.drag-tip{
    margin-bottom: 0;
}
</style>
