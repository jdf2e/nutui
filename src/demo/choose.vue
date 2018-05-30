<template>
    <div>
        <nut-demoheader 
        :name="$route.name"
        ></nut-demoheader>
        <br>
        <div>
            <span>申请地区：{{locationName}}</span>
            <a href="javascript:;" class="button button-primary" @click="showChoose = true">点我出现</a>
        </div>
        <nut-choose 
        :visibile="showChoose"
        :needCache="true"
        @init-choose="initChoose" 
        @close-choose="closeChoose" 
        @choose-item="closeItem"
        :listData="chooseData"></nut-choose>       
    </div>


</template>

<script>
//import jsonp from 'jsonp';

export default {
    data(){
      return {
        showChoose: false,
        loading: false,
        chooseData: [],
        locationName:'',
        cityId:'',
        cityName:'',
        provinceName:'',
        provinceId:'',
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
                self.cityId = item.id;
                self.cityName =item.name;
                if(item.id == 1){
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
                }else if(item.id==2){
                    self.chooseData = [
                        {
                        "id": 21,
                        "name": "浦东新区"
                        },
                        {
                        "id": 22,
                        "name": "徐汇区"
                        },
                        {
                        "id": 22,
                        "name": "长宁"
                        }
                    ];
                }else{
                    self.locationName = self.cityName+' '+self.provinceName
                    self.closeChoose();
                }

                
            }
            if(level == 2) {
                self.provinceId = item.id;
                self.provinceName = item.name;
                self.locationName = self.cityName+' '+self.provinceName
                self.closeChoose();
            }
            //以下注释的代码为地址数据的调用方式，注释打开即可使用，访问url可联系组件开发人员
            /*if(self.loading) return;//一定要注意防止快速点击问题
            self.loading = true;//一定要注意防止快速点击问题
            jsonp(`//xxxxxxxx?fid=${item.id}`, {
                param: 'callback'
            }, function(err, data) {
                self.loading = false;//一定要注意防止快速点击问题
                if(data.length == 0 ) {
                    self.closeChoose();//关闭
                } else {
                    self.chooseData = data;
                }
            });*/
        }
    },
    mounted(){

    }
}
</script>

<style>

</style>
