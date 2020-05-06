<template>
    <div class="nut-address">
        <nut-popup v-model="showPopup" round position="bottom" class="choose-address" @close="close" @click-overlay="clickOverlay" @open="closeWay = 'self'">
            <div class="title">
                <span class="arrow" @click="switchModule">
                    <nut-icon v-if="showModule == 'custom' && type == 'exist'" type="self" :url="require('../../assets/svg/arrows-back.svg')"></nut-icon>
                   
                </span>

                <span v-if="type == 'custom'">请选择所在地区</span>
                <span v-if="type == 'exist'">配送至</span>

                <span @click="handClose('hand')"><nut-icon type="circle-cross" size="18px"></nut-icon></span>
            </div>

            <!-- 请选择 -->
            <div class="custom-address" v-if="showModule == 'custom' ">
                <div class="region-tab">
                    <div 
                        class="tab-item" 
                        :class="[index == tabIndex?'active':'']"
                        v-for="(item,key,index) in selectedRegion" 
                        :key="index"
                        :ref="'tab-item-'+key"
                        @click="changeRegionTab(item,key,index)"
                    ><span>{{ getTabName(item,index)}}</span></div>

                    <span class="region-tab-line" ref="regionLine"></span>
                </div>

                <div class="region-con">
                    <ul class="region-group">
                        <li 
                            v-for="(item,index) in regionList[tabName[tabIndex]]" 
                            :key="index"
                            class="region-item"
                            :class="[selectedRegion[tabName[tabIndex]].id == item.id?'active':'']"
                            @click="nextAreaList(item)"
                        >
                        <nut-icon type="self" :url="require('../../assets/svg/hook-red.svg')" v-if="selectedRegion[tabName[tabIndex]].id == item.id"></nut-icon>{{item.name}}</li>
                    </ul>
                </div>
            </div>
            <!-- 配送至 -->
            <div class="exist-address" v-if="showModule == 'exist'">
                <div class="exist-address-group">
                    <ul class="exist-ul">
                        <li 
                            class="exist-item" 
                            :class="[item.selectedAddress ?'active':'']"
                            v-for="(item,index) in existAddress" 
                            :key='index'
                            @click="selectedExist(item)"
                        >
                            <nut-icon  type="self" :url="item.selectedAddress?require('../../assets/svg/tick-red.svg'):require('../../assets/svg/address-location.svg')"></nut-icon>
                            
                            <span>{{item.provinceName + item.cityName + item.countyName + item.townName + item.addressDetail }}</span>
                        </li>
                    </ul>
                </div>

                <div class="choose-other" @click="switchModule">
                    <div class="btn">选择其他地址</div>
                </div>
            </div>
        </nut-popup>
    </div>
</template>
<script>
import Popup from "./../popup/popup.vue";
import Icon from "./../icon/icon.vue";
import { TweenMax } from 'gsap'
export default {
    name:'nut-address',
    props: {
        value: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: 'custom'
        },
        province:{
            type: Array,
            default: () => []
        }, // 省
        city:{
            type: Array,
            default: () => []
        },// 市
        country:{
            type: Array,
            default: () => []
        },// 县
        town:{
            type: Array,
            default: () => []
        }, // 镇

        existAddress:{
            type: Array,
            default: () => []
        }, // 现存地址列表
    },
    data() {
        return {
            showPopup:false,
            showModule:'exist', //展示 exist 还是 custom 主要用于‘选择其他地址’
            tabIndex: 0 ,
            tabName:['province', 'city', 'country', 'town'],
            regionList:{
                'province': [],
                'city': [],
                'country': [],
                'town': []
            }, //省、市、县、镇列表,地址id字符串,地址字符串
            selectedRegion:{
                'province': {},
                'city': {},
                'country': {},
                'town': {}
            }, //已选择的 省、市、县、镇

            selectedExistAddress:{}, // 当前选择的地址
        }
    },
    components: {
        "nut-popup": Popup,
        "nut-icon":Icon
    },
    watch:{
        value(newVal,oldVal){
            this.showPopup = newVal
            
        },
        showPopup(newVal,oldVal){
            if (newVal == false) this.$emit('input', false)
            if (newVal == true) {

                this.showModule = this.type
            }
        },
        province(newVal,oldVal){
            this.regionList.province = newVal
        },
        city(newVal,oldVal){
            this.regionList.city = newVal
        },
        country(newVal,oldVal){
            this.regionList.country = newVal
        },
        town(newVal,oldVal){
            this.regionList.town = newVal
            
        }
    },
    mounted(){
        
    },
    methods: {

        //获取已选地区列表名称
        getTabName(item, index) {

            if (item.name) return item.name

            if (this.tabIndex < index) {
                return item.name
            } else {
                return '请选择'
            }
        },
        // 切换下一级列表
        nextAreaList(item) {
            // onchange 接收的参数
            const calBack = {
                custom:this.tabName[this.tabIndex]
            }

            this.selectedRegion[this.tabName[this.tabIndex]] = item

            for (let i = this.tabIndex; i < this.tabName.length - 1; i++) {
                this.selectedRegion[this.tabName[i + 1]] = {}
            }
            
            if (this.tabIndex < 3) {

                this.tabIndex = this.tabIndex + 1
                this.lineAnimation()

                // 切换下一个
                calBack.next = this.tabName[this.tabIndex]
                calBack.value = item
                this.$emit('onChange', calBack)

            } else {
                this.handClose()
            }
        },
        //切换地区Tab
        changeRegionTab(item, key, index) {
            this.tabIndex = index
            this.lineAnimation()
        },
        // 移动下面的红线
        lineAnimation() {
            const name = 'tab-item-' + this.tabName[this.tabIndex]    
            this.$nextTick(() => {
                if(this.$refs[name] && this.$refs[name][0]){
                    const distance = this.$refs[name][0].offsetLeft
                    TweenMax.to(this.$refs.regionLine, 0.5, { left: distance })
                }
            })
        },

        // 选择现有地址
        selectedExist(item) {

            this.selectedExistAddress = item

            this.$emit('selected',item)

            this.handClose()
        },

        // 关闭
        close(){
            const that = this

            const resCopy = Object.assign({}, this.selectedRegion) 
        
            const res = {
                type: this.showModule,
                data: {}
            }
            
            if (this.showModule == 'custom') {
                const { province, city, country, town } = resCopy
                resCopy.addressIdStr = [province.id || 0, city.id || 0, country.id || 0, town.id || 0].join('_')
                resCopy.addressStr = [province.name, city.name, country.name, town.name].join('')
                res.data = resCopy
            } else {
                res.data = this.selectedExistAddress
            }
            
            
            this.initAddress()

            if(this.closeWay == 'self'){
                this.$emit('close',res)
            }else{
                // this.$emit('close',{type:'hand'})
            }
            
            setTimeout(()=>{
                that.showModule = 'type'
            },500)
            
        },
        // 手动关闭 点击叉号，或者蒙层
        handClose(type = 'self'){
            if(type == 'hand'){
                this.closeWay = 'hand'
            }else{
                this.closeWay = 'self'
            }

            this.showPopup = false
        },
        // 点击遮罩层关闭
        clickOverlay(){
            this.closeWay = 'hand'
        },
        // 初始化
        initAddress(){
            for (let i = 0; i < this.tabName.length; i++) {
                this.selectedRegion[this.tabName[i]] = {}
            }
            this.tabIndex = 0
            this.lineAnimation()
        },
        // 选择其他地址
        switchModule() {
            this.showModule = this.showModule == 'exist' ? 'custom' : 'exist'
            this.initAddress()
        }
    }
}
</script>