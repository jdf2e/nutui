<template>
    <div>
        <!-- 组件名和描述 -->
        <nut-docheader 
        :name="$route.name"
        :chName="$route.params.chnName" 
        type="Component" 
        :showQrCode="true"
        ></nut-docheader>

        <h5>示例</h5>
        <h6>基本用法</h6>
        <nut-codebox :code="demo1" imgUrl="../asset/img/demo/choose.png"></nut-codebox>
        <h6>事件</h6>
        <nut-codebox :code="demo2"></nut-codebox>
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
              <td>visibile</td>
              <td>打开和关闭选择弹层</td>
              <td>Boolean</td>
              <td>false</td>
              <td>true</td>
            </tr>
            <tr>
              <td>short</td>
              <td>短的面板还是长的面板</td>
              <td>Boolean</td>
              <td>false</td>
              <td>true</td>
            </tr>
            <tr>
              <td>needCache</td>
              <td>弹层打开后再关闭是否需要缓存下来数据，以备下次打开使用</td>
              <td>Boolean</td>
              <td>false</td>
              <td>true</td>
            </tr>
            <tr>
              <td>title</td>
              <td>选择弹层标题</td>
              <td>String</td>
              <td>所在地区</td>
              <td>--</td>
            </tr>
            <tr>
              <td>onlyKey</td>
              <td>列表数据对象中，区分每条数据的key名，如'id'</td>
              <td>String</td>
              <td>id</td>
              <td>--</td>
            </tr>
            <tr>
              <td>contentKey</td>
              <td>列表数据对象中，用于显示到列表中的字段key名，如'name'</td>
              <td>String</td>
              <td>name</td>
              <td>--</td>
            </tr>
            <tr>
              <td>listData</td>
              <td>弹层列表数据</td>
              <td>Array</td>
              <td>[]</td>
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
              <th>回调参数</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>init-choose</td>
              <td>打开选择弹层时给列表初始化数据入口</td>
              <td>--</td>
            </tr>
            <tr>
              <td>close-choose</td>
              <td>关闭选择弹层时的回调</td>
              <td>--</td>
            </tr>
            <tr>
              <td>choose-item</td>
              <td>选择某一条选项时的回调</td>
              <td>item:当前选中的数据，index: 当前操作的所处层级</td>
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
            demo1:`<nut-choose 
        :visibile="showChoose"
        :needCache="true"
        @init-choose="initChoose" 
        @close-choose="closeChoose" 
        @choose-item="closeItem"
        :listData="chooseData"></nut-choose> `,
            demo2: `export default {
    data(){
      return {
        showChoose: false,
        loading: false,
        chooseData: []
      }
    },
    methods:{
        initChoose() {
            this.chooseData = [{ 'name': '北京', 'id': 1 },
                { 'name': '上海', 'id': 2 },
                { 'name': '天津', 'id': 3 },
                { 'name': '重庆', 'id': 4 },
                { 'name': '河北', 'id': 5 },
                { 'name': '山西', 'id': 6 },
                { 'name': '河南', 'id': 7 },
                { 'name': '辽宁', 'id': 8 },
                { 'name': '吉林', 'id': 9 },
                { 'name': '黑龙江', 'id': 10 },
                { 'name': '内蒙古', 'id': 11 },
                { 'name': '江苏', 'id': 12 },
                { 'name': '山东', 'id': 13 },
                { 'name': '安徽', 'id': 14 },
                { 'name': '浙江', 'id': 15 },
                { 'name': '福建', 'id': 16 },
                { 'name': '湖北', 'id': 17 },
                { 'name': '湖南', 'id': 18 },
                { 'name': '广东', 'id': 19 },
                { 'name': '广西', 'id': 20 },
                { 'name': '江西', 'id': 21 },
                { 'name': '四川', 'id': 22 },
                { 'name': '海南', 'id': 23 },
                { 'name': '贵州', 'id': 24 },
                { 'name': '云南', 'id': 25 },
                { 'name': '西藏', 'id': 26 },
                { 'name': '陕西', 'id': 27 },
                { 'name': '甘肃', 'id': 28 },
                { 'name': '青海', 'id': 29 },
                { 'name': '宁夏', 'id': 30 },
                { 'name': '新疆', 'id': 31 },
                { 'name': '台湾', 'id': 32 }];
        },
        closeChoose() {
            this.showChoose = false;
            console.log('关闭了弹框');
        },
        closeItem(item,level) {
            console.log('当前选中的数据:');
            console.log(item);
            let self = this;
            if(level == 1) {
                self.chooseData = [
                    {
                    "id": 2816,
                    "name": "密云区"
                    },
                    {
                    "id": 72,
                    "name": "朝阳区"
                    }
                ];
            }
            if(level == 2) {
                self.closeChoose();
            }
        }
    }
}`
        }
    },
    methods:{
    }
}
</script>

<style lang="scss">
</style>
