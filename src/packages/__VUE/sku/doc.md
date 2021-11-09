# Sku 商品规格组件

### 介绍

按需加载请加载对应依赖组件：Popup、InputNumber、Price

### 安装

``` javascript
import { createApp } from 'vue';
//vue
import { Sku, Popup, InputNumber, Price } from '@nutui/nutui';
//taro
import { Sku, Popup, InputNumber, Price } from '@nutui/nutui-taro';

const app = createApp();
app.use(Sku);
app.use(Popup);
app.use(InputNumber);
app.use(Price);

```

## 代码演示

### 基础用法

```html
<nut-sku
  v-model:visible="base"
  :sku="sku"
  :goods="goods"
  @selectSku="selectSku"
  @clickBtnOperate="clickBtnOperate"
  @close="close"
></nut-sku>
```

```javascript
setup() {
    const base = ref(false);
    const data = reactive({
      sku: [
          // 具体数据结构见下方文档
        ],
      goods: {
          // 具体数据结构见下方文档
        }
    });

    onMounted(() => {});
    // 切换规格类目
    const selectSku = (ss: string) => {
      const { sku, skuIndex, parentSku, parentIndex } = ss;
      if (sku._disable) return false;
      data.sku[parentIndex].list.forEach((s) => {
        s._active = s.id == sku.id;
      });
      data.goods = {
        skuId: sku.id,
        price: '9.10',
        imagePath:
          'https://img20.360buyimg.com/imagetools/s750x750_jfs/t1/201286/22/5692/60152/6136fb94Eea1a9d48/211f40f9d27e6cea.jpg' 
      };
    };
    // 底部操作按钮触发
    const clickBtnOperate = (op:string)=>{
      console.log('点击了操作按钮',op)
    } 
    // 关闭商品规格弹框
    const close = ()=>{}
    return { base, selectSku, clickBtnOperate,close, ...toRefs(data) };
}
```


### 限购、起购、已购

```html
<nut-sku
  v-model:visible="openQuota"
  :sku="sku"
  :goods="goods"
  :showSaleLimit="true"
  :showSaleLowest="true"
  :stepperMax="7"
  :stepperMin="2"
  :purchased="2"
  :btnOptions="['buy', 'cart']"
  @selectSku="selectSku"
  @clickBtnOperate="clickBtnOperate"
  @close="close"
></nut-sku>
```

```javascript
setup() {
    const openQuota = ref(false);
    const data = reactive({
      sku: [
          // 数据结构见下方文档
        ],
      goods: {
          // 数据结构见下方文档
        }
    });
    onMounted(() => {});
    const selectSku = (ss: string) => {
      const { sku, skuIndex, parentSku, parentIndex } = ss;
      if (sku._disable) return false;
      data.sku[parentIndex].list.forEach((s) => {
        s._active = s.id == sku.id;
      });
      data.goods = {
        skuId: sku.id,
        price: '9.10',
        imagePath:
          'https://img20.360buyimg.com/imagetools/s750x750_jfs/t1/201286/22/5692/60152/6136fb94Eea1a9d48/211f40f9d27e6cea.jpg' 
      };
    };
    // 底部操作按钮触发
    const clickBtnOperate = (op:string)=>{
      console.log('点击了操作按钮',op)
    } 
    return { openQuota, selectSku, clickBtnOperate, ...toRefs(data) };
}
```

### 自定义步进器

```html
<nut-sku
  v-model:visible="customStepper"
  :sku="sku"
  :goods="goods"
  :showSaleLimit="true"
  :stepperMax="7"
  :stepperMin="2"
  :saleLowestText="saleLowestText"
  :saleLimitText="saleLimitText"
  @changeStepper="changeStepper"
  @overLimit="overLimit"
  :btnOptions="['buy', 'cart']"
  @selectSku="selectSku"
  @clickBtnOperate="clickBtnOperate"
  @close="close"
></nut-sku>
```

```javascript
setup() {
    const customStepper = ref(false);
    const data = reactive({
      sku: [
          // 数据结构见下方文档
        ],
      goods: {
          // 数据结构见下方文档
        }
    });
    onMounted(() => {
      // 模拟数据请求
      setTimeout(()=>{});
    // 自定义起购文案
    const saleLowestText = (count:any)=>`${count} 件起售`;
    // 自定义限购文案
    const saleLimitText = (count:any)=>`最多买${count}件`;
    // stepper 更改
    const changeStepper = (count: number) => {
      console.log('购买数量', count);
    };

    // stepper 极限值
    const overLimit = (val: any) => {
      if (val.action == 'reduce') {
        Toast.text(`至少买${val.value}件哦`);
      } else {
        Toast.text(`最多买${val.value}件哦`);
      }
    };
    // 切换规格类目
    const selectSku = (ss: string) => {
      const { sku, skuIndex, parentSku, parentIndex } = ss;
      if (sku._disable) return false;
      data.sku[parentIndex].list.forEach((s) => {
        s._active = s.id == sku.id;
      });
      data.goods = {
        skuId: sku.id,
        price: '9.10',
        imagePath:
          'https://img20.360buyimg.com/imagetools/s750x750_jfs/t1/201286/22/5692/60152/6136fb94Eea1a9d48/211f40f9d27e6cea.jpg' 
      };
    };
    // 底部操作按钮触发
    const clickBtnOperate = (op:string)=>{
      console.log('点击了操作按钮',op)
    } 
    return { overLimit, changeStepper,selectSku, clickBtnOperate,saleLowestText,saleLimitText,...toRefs(data) };
}
```

### 自定义插槽

Sku 组件默认划分为若干区域，这些区域都定义成了插槽，可以按照需求进行替换。

```html
<nut-sku
    v-model:visible="customBySlot"
    :sku="sku"
    :goods="goods"
    :btnOptions="['buy', 'cart']"
    @selectSku="selectSku"
    @clickBtnOperate="clickBtnOperate"
    @close="close()"
>
    <!-- 商品展示区，价格区域 -->
    <template #sku-header-price>
        <div>
            <nut-price :price="goodsInfo.price" :needSymbol="true" :thousands="false"> </nut-price>
            <span class="tag"></span>
        </div>
    </template> 
    <!-- 商品展示区，编号区域 -->
    <template #sku-header-extra>
        <span class="nut-sku-header-right-extra">重量：0.1kg  编号：{{skuId}}  </span>
    </template> 
    <!-- sku 展示区上方与商品信息展示区下方区域，无默认展示内容 -->
    <template #sku-select-top>
        <div class="address">
            <nut-cell style="box-shadow:none;padding:13px 0" title="送至" :desc="addressDesc" @click="showAddressPopup=true"></nut-cell>
        </div>
    </template>
    <!-- 底部按钮操作区 -->
    <template #sku-operate>
        <div class="sku-operate-box">
        <nut-button class="sku-operate-item" shape="square" type="warning">加入购物车</nut-button>
        <nut-button class="sku-operate-item" shape="square" type="primary">立即购买</nut-button>
        </div>
    </template>
</nut-sku>

<nut-address
  v-model:visible="showAddressPopup"
  type="exist"
  :exist-address="existAddress"
  @close="close"
  :is-show-custom-address="false"
  @selected="selectedAddress"
  exist-address-title="配送至"
></nut-address>
```

```javascript
setup() {
    const customBySlot = ref(false);
    const showAddressPopup = ref(false);
    const data = reactive({
      sku: [
          // 数据结构见下方文档
        ],
      goods: {
          // 数据结构见下方文档
        }
    });
    const addressDesc = ref('(配送地会影响库存，请先确认)');
    const existAddress = ref([
      {
        id: 1,
        addressDetail: 'th ',
        cityName: '石景山区',
        countyName: '城区',
        provinceName: '北京',
        selectedAddress: true,
        townName: ''
      },
      {
        id: 2,
        addressDetail: '12_ ',
        cityName: '电饭锅',
        countyName: '扶绥县',
        provinceName: '北京',
        selectedAddress: false,
        townName: ''
      },
      {
        id: 3,
        addressDetail: '发大水比 ',
        cityName: '放到',
        countyName: '广宁街道',
        provinceName: '钓鱼岛全区',
        selectedAddress: false,
        townName: ''
      },
      {
        id: 4,
        addressDetail: '还是想吧百度吧 ',
        cityName: '研发',
        countyName: '八里庄街道',
        provinceName: '北京',
        selectedAddress: false,
        townName: ''
      }
    ]);

    // 切换规格类目
    const selectSku = (ss: string) => {
      const { sku, skuIndex, parentSku, parentIndex } = ss;
      if (sku._disable) return false;
      data.sku[parentIndex].list.forEach((s) => {
        s._active = s.id == sku.id;
      });
      data.goods = {
        skuId: sku.id,
        price: '9.10',
        imagePath:
          'https://img20.360buyimg.com/imagetools/s750x750_jfs/t1/201286/22/5692/60152/6136fb94Eea1a9d48/211f40f9d27e6cea.jpg' 
      };
    };
    const selectedAddress = (prevExistAdd: any, nowExistAdd: any) => {
      const { provinceName, countyName, cityName } = nowExistAdd;
      addressDesc.value = `${provinceName}${countyName}${cityName}`;
    };
    // 底部操作按钮触发
    const clickBtnOperate = (op:string)=>{
      console.log('点击了操作按钮',op)
    } 
    return { customBySlot, selectSku, clickBtnOperate,existAddress,addressDesc,selectedAddress,...toRefs(data) };
}
```


## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| v-model:visible         | 是否显示商品规格弹框               | boolean |  false              |
| sku         | 商品 sku 数据 | Array | []               |
| goods |  商品信息    | Object | - |
| show-sale-limit        |    是否显示限购文案       | boolean | false              |
| show-sale-lowest |  是否显示起购文案    | boolean | true |
| stepper-max         | 设置 inputNumber 最大值  | [String, Number] | 99999               |
| stepper-min         | 设置 inputNumber 最小值  | [String, Number] | 1               |
| purchased |  设置已购数量    | [String, Number] | 0 |
| btn-options        |           底部按钮设置。['confirm','buy','cart' ] 分别对应确定、立即购买、加入购物车              | Array | ['confirm']           |
| stepper-title         | 数量选择组件左侧文案 | String | '购买数量'                |
| sale-lowest-text        |   数量选择前起购文案       | [Function, false] | false              |
| sale-limit-text        |    限购文案       | [Function, false] | false              |
| purchased-text        |    已购文案       | [Function, false] | false              |
| buy-text |  立即购买按钮文案    | String | 立即购买 |
| add-cart-text          |        加入购物车按钮文案                 | String | 加入购物车             |
| confirm-text          |           确定按钮文案              | String | 确定             |

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| select-sku  | 切换规格类目时触发 | {sku,skuIndex,parentSku,parentIndex} |
| add  | inputNumber 点击增加按钮时触发 | value |
| reduce  | inputNumber 点击减少按钮时触发 | value |
| overLimit  | inputNumber 点击不可用的按钮时触发 | value |
| change-stepper  | 购买变化时触发 | value |
| click-btn-operate  | 点击底部按钮时触发 | {type:'confirm',value:'inputNumber value'} |
| click-close-icon  | 点击左上角关闭 icon 时触发 | - |
| click-overlay  | 点击遮罩时触发 | - |
| close  | 关闭弹层时触发 | - |


### Slots

Sku 组件默认划分为若干区域，这些区域都定义成了插槽，可以按照需求进行替换。

| 事件名 | 说明           | 
|--------|----------------|
| sku-header  | 商品信息展示区，包含商品图片、价格、编号 | 
| sku-header-price  | 商品信息展示区，价格区域展示| 
| sku-header-extra  | 商品信息展示区，编号区域展示 | 
| sku-select-top | sku 展示区上方与商品信息展示区下方区域，无默认展示内容 | 
| sku-select | sku 展示区 | 
| sku-stepper  | 数量选择区 | 
| sku-stepper-bottom  | 数量选择区下方区域 | 
| sku-operate | 底部按钮操作区域 |

### goods 对象结构

```javascript
goods:{
    skuId:'', // 商品信息展示区，商品编号
    price: "0", // 商品信息展示区，商品价格
    imagePath: "", // 商品信息展示区，商品图
}

```

### sku 数组结构

sku 数组中，每一个数组索引代表一个规格类目。其中，list 代表该规格类目下的类目值。每个类目值对象包括：name、id、_active(是否选中)、_disable(是否可选)

```javascript
sku : [{
    id: 1,
    name: '种类',
    list: [{
        name: '五香味150g*3',
        id: 100016015112,
        _active: true,
        _disable: false
      },
      {
        name: '五香味150g*8',
        id: 100016015142,
        _active: false,
        _disable: true
      },
      {
        name: '香辣味150g*3',
        id: 100016015078,
        _active: false,
        _disable: false
      },
      {
        name: '香辣味150g*8',
        id: 100009064831,
        _active: false,
        _disable: true
      }
    ]
  },
  {
    id: 2,
    name: '规格',
    list: [{
        name: '150g',
        id: 100016015102,
        _active: true,
        _disable: false
      },
      {
        name: '150g*8',
        id: 100016015122,
        _active: false,
        _disable: false
      }
    ]
  }
];
```
