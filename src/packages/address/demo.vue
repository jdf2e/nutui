<template>
    <div class="address-box">
      <div class="address-list init" @click="showAddress">

        <div class="titile">选择地址</div>
        <div class="choose">{{text1}}</div>

      </div>

      <div class="address-list other" @click="showAddressOther">
        <div class="titile">选择地址</div>
        <div class="choose">{{text2}}</div>
      </div>


      <nut-address v-model="showPopup" :province="province" :city="city" :country="country" :town="town" @onChange="onChange1" @close="close1"></nut-address>

      <nut-address v-model="showPopupOther" type="exist" :existAddress="existAddress" :province="province" :city="city" :country="country" :town="town" @onChange="onChange2" @close="close2" @selected="selected"></nut-address>
    </div>
</template>

<script>
import Address from './data'
export default {
  components: {

  },
  data() {
    return {
      showPopup:false,
      province:[], // 省
      city:[],// 市
      country:[],// 县
      town:[], // 镇

      showPopupOther:false,
      existAddress:[],

      text1:'省市区县、乡镇等',
      text2:''
    };
  },
  methods: {
      showAddress(){
        this.showPopup = true
        const that = this
        setTimeout(()=>{
          that.province = Address.province
        },1000)
      },

      showAddressOther(){
        this.showPopupOther = true
        const that = this
        this.existAddress = [].concat(Address.addressList)
        setTimeout(()=>{
          that.province = Address.province
        },1000)
      },

      onChange1(cal){
        console.log('change1',cal)
        this[cal.next] = [].concat(Address[cal.next])
      },
      onChange2(cal){
        console.log('change2',cal)
        this[cal.next] = [].concat(Address[cal.next])
      },
      close1(val){
        console.log(val)
        this.text1 = val.data.addressStr
      },
      close2(val){
        console.log(val)
        if(val.type == 'exist'){
          this.text2 = val.data.fullAddress
        }else{
          this.text2 = val.data.addressStr
        }
        
      },
      selected(val){
        this.existAddress.forEach((item)=>{
         
          this.$set(item,'selectedAddress',false)
          if(item.id == val.id){
            this.$set(item,'selectedAddress',true)
          }
        })
      }
  }
};
</script>

<style lang="scss" scoped>
.address-box{
  margin-top: 10px;

  .address-list{
    margin-bottom: 10px;
    background: #fff;
    border-radius: 4px;
    font-size: 14px;
    padding: 10px;

    &.init{
      display: flex;
      .titile{
        margin-right: 15px;
      }
      .choose{
        color: #999;
      }
    }
    &.other{
      display: flex;
      .titile{
        margin-right: 15px;
      }
      .choose{
        color: #999;
      }
    }
  }
}
</style>
