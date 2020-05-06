# Address 地址选择

## 基本用法

```html
<div class="address-list init" @click="showAddress">
    <div class="titile">选择地址</div>
    <div class="choose">{{text1}}</div>
</div>

<nut-address 
    v-model="showPopup" 
    :province="province" 
    :city="city" 
    :country="country" 
    :town="town" 
    @onChange="onChange1" 
    @close="close1">
</nut-address>
```
```javascript

<script>
export default {
  data() {
    return {
        showPopup:false,
        province:[], // 省
        city:[],// 市
        country:[],// 县
        town:[], // 镇
    }
  },
  methods: {
      showAddress(){
        this.province = Address.province //模拟数据
        const that = this
        setTimeout(()=>{ 
            this.showPopup = true // 使用 setTimeout 模拟数据请求时间
        },1000);
      },
      onChange1(cal){
        this[cal.next] = [].concat(Address[cal.next]); // 赋值下一个列的内容
      },
      close1(val){
        this.text1 = val.data.addressStr 
      }
  }
}
</script>

```


## 选择地址列表

```html
<div class="address-list other" @click="showAddressOther">
    <div class="titile">选择地址</div>
    <div class="choose">{{text2}}</div>
</div>
<nut-address 
    v-model="showPopupOther" 
    type="exist" 
    :existAddress="existAddress" 
    :province="province" 
    :city="city" 
    :country="country" 
    :town="town" 
    @onChange="onChange2" 
    @close="close2" 
    @selected="selected">
</nut-address>


```
```javascript
<script>
export default {
  data() {
    return {
      showPopupOther:false,
      existAddress:[], // 已有地址列表
      province:[], // 省
      city:[],// 市
      country:[],// 县
      town:[], // 镇
    };
  },
  methods: {
    showAddressOther(){
        const that = this
        this.province = Address.province
        setTimeout(()=>{
          this.existAddress = [].concat(Address.addressList)
          this.showPopupOther = true
        },1000)
    },
    onChange2(cal){
        this[cal.next] = [].concat(Address[cal.next])
    },
    close2(val){
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
}
</script>
```


## API
| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| v-model |  | String | ''
| type | 地址选择类型 exist/custom | String | custom
| province | 省 | Array | []
| city | 市 | Array | []
| country | 县 | Array | []
| town | 乡/镇 | Array | []
| existAddress | 已存在地址列表 | Array | []

注：existAddress 列表值中使用的 fullAddress 字段。province/city/country/town 数组中，使用的是每个地址的 name 字段。

## Event
| 字段 | 说明 | 回调参数 
|----- | ----- | ----- 
| onChange | 自定义选择地址时，选择地区时触发 |  参考 onChange
| selected | 选择已有地址列表时触发 | 参考 selected
| close | 地址选择弹框关闭时触发 | 参考 close

## onChange 回调参数
| 参数 | 说明 | 可能值 
|----- | ----- | ----- 
| custom | 当前点击的行政区域  |  province(省) / city(市) / country(县) / town(乡)
| next | 当前点击的行政区域的下一级 | province(省) / city(市) / country(县) / town(乡)
| value | 当前点击的行政区域的值（返回传入的值） | {}

## selected 回调参数
| 参数 | 说明 | 可能值 
|----- | ----- | ----- 
| type | 地址选择类型 exist/custom  |  exist
| data | 选择地址列表的值 | 传入时列表的值

## close 回调参数
| 参数 | 说明 | 可能值 
|----- | ----- | ----- 
| type | 地址选择类型 exist/custom  |  exist/custom
| data | 选择地址的值,custom 时，addressStr 为选择的地址组合 | {} 