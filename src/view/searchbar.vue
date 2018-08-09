<template>
	<div>
		<nut-docheader
        :name="$route.name"
        :chName="$route.params.chnName"
        type="Component"
        desc="搜索栏。"
        :showQrCode="true"></nut-docheader>
		<!-- <a class="button button-primary" href="/demo.html#/searchbar" target="_blank">Demo</a> -->
        <!-- <h6>搜索栏。</h6> -->
        <!-- DEMO区域 -->
        <h5>示例</h5>
        <h6>默认用法</h6>
        <nut-codebox :code="demo1" :imgUrl="['../asset/img/demo/searchBar1.png']"></nut-codebox>
       <!--  <pre><code v-highlight v-text="demo1"></code></pre> -->
        <h6>右侧搜索按钮可根据需要进行配置</h6>
        <nut-codebox :code="demo2" :imgUrl="['../asset/img/demo/searchBar2.png']"></nut-codebox>
        <!-- <pre><code v-highlight v-text="demo2"></code></pre> -->
        <h6>可配置输入框前面是否显示搜索图标（图标可配置）、输入框高度、右侧是否显示文字按钮以及文字按钮宽度、显示文字、文字颜色</h6>
        <nut-codebox :code="demo3" :imgUrl="['../asset/img/demo/searchBar3.png']"></nut-codebox>
        <!-- <pre><code v-highlight v-text="demo3"></code></pre> -->
        <h6>可配置获取输入框焦点事件、输入事件、失去焦点事件、默认提交事件</h6>
        <nut-codebox :code="demo4" :imgUrl="['../asset/img/demo/searchBar1.png']"></nut-codebox>
        <nut-codebox :code="demo5"></nut-codebox>
        <!-- <pre><code v-highlight v-text="demo4"></code></pre>
        <pre><code v-highlight v-text="demo5"></code></pre> -->
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
              <td>height</td>
              <td>输入框的高度，单位为rem</td>
              <td>String</td>
              <td>'0.6'</td>
              <td>--</td>
            </tr>
            <tr>
              <td>width</td>
              <td>右侧搜索按钮的宽度，单位为rem</td>
              <td>String</td>
              <td>'0.6'</td>
              <td>--</td>
            </tr>
            <tr>
              <td>color</td>
              <td>右侧文字搜索按钮字体颜色</td>
              <td>String</td>
              <td>'#222'</td>
              <td>--</td>
            </tr>
            <tr>
              <td>textInfo</td>
              <td>右侧文字搜索按钮文案</td>
              <td>String</td>
              <td>'搜索'</td>
              <td>--</td>
            </tr>
            <tr>
              <td>icon</td>
              <td>输入框前面icon及右侧图标搜索按钮icon链接</td>
              <td>String</td>
              <td></td>
              <td>--</td>
            </tr>
            <tr>
              <td>hasIcon</td>
              <td>是否显示输入框前面的icon</td>
              <td>Boolean</td>
              <td>false</td>
              <td>--</td>
            </tr>
            <tr>
              <td>placeText</td>
              <td>输入框placeholder内容</td>
              <td>String</td>
              <td>'请输入内容...'</td>
              <td>--</td>
            </tr>
            <tr>
              <td>hasSearchButton</td>
              <td>是否显示右侧搜索按钮</td>
              <td>Boolean</td>
              <td>true</td>
              <td>--</td>
            </tr>
            <tr>
              <td>hasTextButton</td>
              <td>右侧搜索按钮是否为文字按钮</td>
              <td>Boolean</td>
              <td>false</td>
              <td>--</td>
            </tr>
          </tbody>
        </table>
        </div>
        <h5>Events</h5>
        <div class="tbl-wrapper">
        <table class="u-full-width">
          <thead>
            <tr>
              <th>事件名</th>
              <th>说明</th>
              <th>回调</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>focus</td>
              <td>输入框获取焦点时触发事件</td>
              <td>--</td>
            </tr>
            <tr>
              <td>input</td>
              <td>输入框输入内容时触发事件</td>
              <td>--</td>
            </tr>
            <tr>
              <td>blur</td>
              <td>输入框失去焦点时触发事件</td>
              <td>--</td>
            </tr>
            <tr>
              <td>submit</td>
              <td>默认提交事件</td>
              <td>--</td>
            </tr>
          </tbody>
        </table>
        </div>
	</div>
</template>
<script>
	export default {
	    data() {
	        return {
                demo1: `<nut-searchbar  placeText="请输入自定义文案"></nut-searchbar>`,
                demo2: `<nut-searchbar
  placeText="请输入自定义文案"
  :hasSearchButton="false"
></nut-searchbar>`,
                demo3: `<nut-searchbar
  placeText="ERP/姓名/邮箱"
  :hasIcon="true"
  :hasTextButton="true"
  textInfo="搜索"
  width="1"
  height="1"
  color="#f23030"
></nut-searchbar>`,
                demo4: `<nut-searchbar
  placeText="请输入自定义文案"
  @focus="focusFun"
  @input="inputFun"
  @blur="blurFun"
  @submit="submitFun"
></nut-searchbar>`,
                demo5: `export default {
    methods: {
        focusFun() {
            console.log('获取焦点操作！');
        },
        inputFun() {
            alert('您正在输入...');
        },
        blurFun() {
            console.log('您已失去焦点！');
        },
        submitFun() {
            console.log('默认提交操作！');
        }
    }
}`
	        }
	    },
	    methods:{
            focusFun() {
                console.log('获取焦点操作！');
            },
            inputFun() {
                alert('您正在输入...');
            },
            blurFun() {
                console.log('您已失去焦点！');
            },
            submitFun() {
                console.log('默认提交操作！');
            }
	    }
	}
</script>
<style></style>