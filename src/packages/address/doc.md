# Address 地址选择

> 按需加载请加载对应依赖组件 Icon Popup

## 选择自定义地址

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
    customAddressTitle="请选择所在地区"
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
        province:[{"id":1,"name":"北京"},{"id":2,"name":"广西"},{"id":3,"name":"江西"},{"id":4,"name":"四川"}], // 省
        city:[{"id":7,"name":"朝阳区"},{"id":8,"name":"崇文区"},{"id":9,"name":"昌平区"},{"id":6,"name":"石景山区"}],// 市
        country:[{"id":3,"name":"八里庄街道"},{"id":9,"name":"北苑"},{"id":4,"name":"常营乡"}],// 县
        town:[], // 镇 必传值：name
    }
  },
  methods: {
      showAddress(){
        this.showPopup = true 
      },
      onChange1(cal){
        // 判断下一个行政区列表的内容是否有值
        if(this[cal.next].length < 1){
          this.showPopup = false
        }
      },
      close1(val){
        this.text1 = val.data.addressStr 
      }
  }
}
</script>

```
## 选择已有地址
```html
<div class="address-list other" @click="showAddressExist">
  <div class="titile">选择地址</div>
  <div class="choose">{{text2}}</div>
</div>

<nut-address 
  v-model="showPopupExist" 
  type="exist" 
  :existAddress="existAddress" 
  @onChange="onChange2" 
  @close="close2" 
  :isShowCustomAddress="false" 
  existAddressTitle="配送至"
  @selected="selected2">
</nut-address>

```
```javascript

<script>
export default {
  data() {
    return {
        showPopupExist:false,
        existAddress:[
          {"id":1,"addressDetail":"th ","cityName":"石景山区","countyName":"城区","provinceName":"北京","selectedAddress":true,"townName":""},
          {"id":2,"addressDetail":"12_ ","cityName":"电饭锅","countyName":"扶绥县","provinceName":"北京","selectedAddress":false,"townName":""},
          {"id":3,"addressDetail":"发大水比 ","cityName":"放到","countyName":"广宁街道","provinceName":"钓鱼岛全区","selectedAddress":false,"townName":""},
          {"id":4,"addressDetail":"还是想吧百度吧 ","cityName":"研发","countyName":"八里庄街道","provinceName":"北京","selectedAddress":false,"townName":""},
        ],
        text2:'请选择地址',
    }
  },
  methods: {
      showAddressExist(){
        this.showPopupExist = true
      },

      onChange2(cal){
        console.log('change2',cal)
        if(this[cal.next].length < 1){
          this.showPopupOther = false
        }
      },
      
      close2(val){
        console.log(val)
        if(val.type == 'exist'){
          this.text2 = val.data.provinceName+val.data.cityName+val.data.countyName+val.data.townName+val.data.addressDetail
        }else{
          this.text2 = val.data.addressStr
        }
      },
      selected2(prevExistAdd,nowExistAdd,arr){
        console.log(prevExistAdd)
        console.log(nowExistAdd)
      },
  }
}
</script>

```


## 自定义图标

```html
<div class="address-list other" @click="showCustomImg">
    <div class="titile">选择地址</div>
    <div class="choose">{{text3}}</div>
</div>

<nut-address 
  v-model="showPopupCustomImg" 
  type="exist" 
  :existAddress="existAddress" 
  @onChange="onChange3" 
  @close="close3" 
  :isShowCustomAddress="false" 
  @selected="selected3" 
  :defaultIcon="defaultIcon" 
  :selectedIcon='selectedIcon'
  :closeBtnIcon="closeBtnIcon">
</nut-address>

```
```javascript

<script>
export default {
  data() {
    return {
        showPopupCustomImg:false,
        selectedIcon:require('../../assets/svg/checked.svg'),
        defaultIcon:require('../../assets/svg/unchecked.svg'),
        closeBtnIcon: require('../../assets/svg/close.svg'),
        existAddress:[
          {"id":1,"addressDetail":"th ","cityName":"石景山区","countyName":"城区","provinceName":"北京","selectedAddress":true,"townName":""},
          {"id":2,"addressDetail":"12_ ","cityName":"电饭锅","countyName":"扶绥县","provinceName":"北京","selectedAddress":false,"townName":""},
          {"id":3,"addressDetail":"发大水比 ","cityName":"放到","countyName":"广宁街道","provinceName":"钓鱼岛全区","selectedAddress":false,"townName":""},
          {"id":4,"addressDetail":"还是想吧百度吧 ","cityName":"研发","countyName":"八里庄街道","provinceName":"北京","selectedAddress":false,"townName":""},
        ],
        tex3:'请选择地址',
    }
  },
  methods: {
      showCustomImg(){
        this.showPopupCustomImg = true
      },

      onChange3(cal){
        console.log('change2',cal)
        if(this[cal.next].length < 1){
          this.showPopupOther = false
        }
      },
      
      close3(val){
        console.log(val)
        if(val.type == 'exist'){
          this.text3 = val.data.provinceName+val.data.cityName+val.data.countyName+val.data.townName+val.data.addressDetail
        }else{
          this.text3 = val.data.addressStr
        }
      },
      selected3(prevExistAdd,nowExistAdd,arr){
        console.log(prevExistAdd)
        console.log(nowExistAdd)
      },
  }
}
</script>

```

## 自定义地址与已有地址切换

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
    :backBtnIcon="backBtnIcon"
    customAndExistTitle="选择其他地址"
    @onChange="onChange4" 
    @close="close4" 
    @selected="selected4"
    @switchModule="switchModule"
    @closeMask="closeMask">
</nut-address>


```
```javascript
<script>
export default {
  data() {
    return {
      showPopupOther:false,
      existAddress:[
        {"id":1,"addressDetail":"th ","cityName":"石景山区","countyName":"城区","provinceName":"北京","selectedAddress":true,"townName":""},
        {"id":2,"addressDetail":"12_ ","cityName":"电饭锅","countyName":"扶绥县","provinceName":"北京","selectedAddress":false,"townName":""},
        {"id":3,"addressDetail":"发大水比 ","cityName":"放到","countyName":"广宁街道","provinceName":"钓鱼岛全区","selectedAddress":false,"townName":""},
        {"id":4,"addressDetail":"还是想吧百度吧 ","cityName":"研发","countyName":"八里庄街道","provinceName":"北京","selectedAddress":false,"townName":""},
      ], // 已有地址列表 必传值：provinceName、cityName、countyName、townName、addressDetail 、selectedAddress
      province:[{"id":1,"name":"北京"},{"id":2,"name":"广西"},{"id":3,"name":"江西"},{"id":4,"name":"四川"}], // 省
      city:[{"id":7,"name":"朝阳区"},{"id":8,"name":"崇文区"},{"id":9,"name":"昌平区"},{"id":6,"name":"石景山区"}],// 市
      country:[{"id":3,"name":"八里庄街道"},{"id":9,"name":"北苑"},{"id":4,"name":"常营乡"}],// 县
      town:[], // 镇 必传值：name
      backBtnIcon: require('../../assets/svg/back.svg'),
    };
  },
  methods: {
    showAddressOther(){
        this.showPopupOther = true
    },
    onChange4(cal){
        if(this[cal.next].length < 1){
          this.showPopupOther = false
        }
    },
    close4(val){
        if(val.type == 'exist'){
          this.text2 = val.data.provinceName+val.data.cityName+val.data.countyName+val.data.townName+val.data.addressDetail
        }else{
          this.text2 = val.data.addressStr
        }
    },
  
    selected4(prevExistAdd,nowExistAdd,arr){
      console.log(prevExistAdd)
      console.log(nowExistAdd)
    },
    switchModule(cal){
        if(cal.type == 'custom'){
          console.log('点击了“选择其他地址”按钮')
        } else {
          console.log('点击了自定义地址左上角的返回按钮')
        }
    },
    closeMask(val){
      console.log('关闭弹层',val)
    }
  }
}
</script>
```


## API
| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| v-model | 是否打开地址选择 | String | ''
| type | 地址选择类型 exist/custom | String | custom
| province | 省，每个省的对象中，必须有 name 字段 | Array | []
| city | 市，每个市的对象中，必须有 name 字段 | Array | []
| country | 县，每个县的对象中，必须有 name 字段 | Array | []
| town | 乡/镇，每个乡/镇的对象中，必须有 name 字段 | Array | []
| existAddress | 已存在地址列表，每个地址对象中，必传值provinceName、cityName、countyName、townName、addressDetail、selectedAddress（字段解释见下） | Array | []
| defaultIcon | 已有地址列表默认图标，type=‘exist’ 时生效 | string | ''
| selectedIcon | 已有地址列表选中图标，type=‘exist’ 时生效 | string | ''
| closeBtnIcon | 自定义关闭弹框按钮图标 | string | -
| backBtnIcon | 自定义地址与已有地址切换时，自定义返回的按钮图标 | string | -
| isShowCustomAddress | 是否可以切换自定义地址选择，type=‘exist’ 时生效 | Boolean | true
| customAddressTitle  | 自定义地址选择文案，type='custom' 时生效 | string | '请选择所在地区'
| existAddressTitle| 已有地址文案 ，type=‘exist’ 时生效| string | '配送至'
| customAndExistTitle| 自定义地址与已有地址切换按钮文案 ，type=‘exist’ 时生效| string | '选择其他地址'


  * provinceName 省的名字
  * cityName 市的名字
  * countyName 县的名字
  * townName 乡/镇的名字
  * addressDetail 具体地址
  * selectedAddress 字段用于判断当前地址列表的选中项。

## Event
| 字段 | 说明 | 回调参数 
|----- | ----- | ----- 
| onChange | 自定义选择地址时，选择地区时触发 |  参考 onChange
| selected | 选择已有地址列表时触发 | 参考 selected
| close | 地址选择弹框关闭时触发 | 参考 close
| closeMask | 点击遮罩层或点击右上角叉号关闭时触发 | {closeWay:'mask'/'cross'}
| switchModule | 点击‘选择其他地址’或自定义地址选择左上角返回按钮触发 | {type:'exist'/'custom'}


## onChange 回调参数
| 参数 | 说明 | 可能值 
|----- | ----- | ----- 
| custom | 当前点击的行政区域  |  province(省) / city(市) / country(县) / town(乡)
| next | 当前点击的行政区域的下一级 | province(省) / city(市) / country(县) / town(乡)
| value | 当前点击的行政区域的值（返回传入的值） | {}

## selected 回调参数
| 参数 | 说明 | 可能值 
|----- | ----- | ----- 
| 第一个参数（prevExistAdd） |  选择前选中的地址 |  {}
| 第二个参数（nowExistAdd） |  当前选中的地址 |  {}
| 第三个参数（arr） |  选择完之后的已有地址列表（selectedAddress 值发生改变） |  {}

## close 回调参数
| 参数 | 说明 | 可能值 
|----- | ----- | ----- 
| type | 地址选择类型 exist/custom  |  exist/custom
| data | 选择地址的值,custom 时，addressStr 为选择的地址组合 | {} 

