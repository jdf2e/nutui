# Sku 商品规格选择

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

### 基础用法

:::demo
```html
<template>
  <nut-cell :title="`基本用法`" desc="" @click="base = true"></nut-cell>
  <nut-sku
    v-model:visible="base"
    :sku="sku"
    :goods="goods"
    @selectSku="selectSku"
    @clickBtnOperate="clickBtnOperate"
    @close="close"
  ></nut-sku>
</template>
<script lang="ts">
import { ref,reactive,onMounted,toRefs} from 'vue';
export default {
  setup() {
      const base = ref(false);
      const data = reactive({
        sku: [],
        goods: {}
      });

      onMounted(() => {
        fetch('https://storage.360buyimg.com/nutui/3x/data.js')
          .then((response) => response.json())
          .then((res) => {
            const { Sku, Goods, imagePathMap } = res;
            data.sku = Sku;
            data.goods = Goods;
          }) //执行结果是 resolve就调用then方法
          .catch((err) => console.log('Oh, error', err)); //执行结果是 reject就调用catch方法
      });
      // 切换规格类目
      const selectSku = (ss: string) => {
        const { sku, skuIndex, parentSku, parentIndex } = ss;
        if (sku.disable) return false;
        data.sku[parentIndex].list.forEach((s) => {
          s.active = s.id == sku.id;
        });
        data.goods = {
          skuId: sku.id,
          price: '4599.00',
          imagePath:
            '//img14.360buyimg.com/n4/jfs/t1/215845/12/3788/221990/618a5c4dEc71cb4c7/7bd6eb8d17830991.jpg' 
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
}
</script>
```
:::

### 不可售

:::demo
```html
<template>
  <nut-cell title="不可售" desc="" @click="notSell = true"></nut-cell>
  <nut-sku
    v-model:visible="notSell"
    :sku="sku"
    :goods="goods"
    :btnExtraText="btnExtraText"
    @changeStepper="changeStepper"
    @selectSku="selectSku"
  >
    <template #sku-operate>
      <div class="sku-operate-box">
        <nut-button class="sku-operate-box-dis" type="warning">查看相似商品</nut-button>
        <nut-button class="sku-operate-box-dis" type="info">到货通知</nut-button>
      </div>
    </template>
  </nut-sku>
</template>
<script lang="ts">
import { ref,reactive,onMounted,toRefs} from 'vue';
export default {
setup() {
    const notSell = ref(false);
    const data = reactive({
      sku: [],
      goods: {}
    });

    const btnExtraText = ref('抱歉，此商品在所选区域暂无存货');

    onMounted(() => {
        fetch('https://storage.360buyimg.com/nutui/3x/data.js')
          .then((response) => response.json())
          .then((res) => {
            const { Sku, Goods, imagePathMap } = res;
            data.sku = Sku;
            data.goods = Goods;
          }) //执行结果是 resolve就调用then方法
          .catch((err) => console.log('Oh, error', err)); //执行结果是 reject就调用catch方法
    });

    // inputNumber 更改
    const changeStepper = (count: number) => {
      console.log('购买数量', count);
    };

    // 切换规格类目
    const selectSku = (ss: string) => {
      const { sku, skuIndex, parentSku, parentIndex } = ss;
      if (sku.disable) return false;
      data.sku[parentIndex].list.forEach((s) => {
        s.active = s.id == sku.id;
      });
      data.goods = {
        skuId: sku.id,
        price: '4599.00',
        imagePath:
          '//img14.360buyimg.com/n4/jfs/t1/216079/14/3895/201095/618a5c0cEe0b9e2ba/cf5b98fb6128a09e.jpg' 
      };
    };
    // 底部操作按钮触发
    const clickBtnOperate = (op:string)=>{
      console.log('点击了操作按钮',op)
    } 
    return { notSell, changeStepper,selectSku,btnExtraText,...toRefs(data) };
  }
}
</script>
<style>
.sku-operate-box {
  width: 100%;
  display: flex;
  padding: 8px 10px;
  box-sizing: border-box;
}
.sku-operate-box-dis{
    flex:1
}
.sku-operate-box-dis:first-child{
  margin-right: 18px;
}
</style>
```
:::

### 自定义步进器

可以按照需求配置数字输入框的最大值、最小值、文案等

:::demo
```html
<template>
  <nut-cell title="自定义计步器" desc="" @click="customStepper = true"></nut-cell>
  <nut-sku
    v-model:visible="customStepper"
    :sku="sku"
    :goods="goods"
    :showSaleLimit="true"
    :stepperMax="7"
    :stepperMin="2"
    :stepperExtraText="stepperExtraText"
    @changeStepper="changeStepper"
    @overLimit="overLimit"
    :btnOptions="['buy', 'cart']"
    @selectSku="selectSku"
    @clickBtnOperate="clickBtnOperate"
  ></nut-sku>
</template>
<script lang="ts">
import { ref,reactive,onMounted,toRefs} from 'vue';
export default {
setup() {
    const customStepper = ref(false);
    const data = reactive({
      sku: [],
      goods: {}
    });

    onMounted(() => {
        fetch('https://storage.360buyimg.com/nutui/3x/data.js')
          .then((response) => response.json())
          .then((res) => {
            const { Sku, Goods, imagePathMap } = res;
            data.sku = Sku;
            data.goods = Goods;
          }) //执行结果是 resolve就调用then方法
          .catch((err) => console.log('Oh, error', err)); //执行结果是 reject就调用catch方法
    });

    const stepperExtraText = () => {
      return `<div style="width:100%;text-align:right;color:#F00">2 件起售</div>`
    };
    // inputNumber 更改
    const changeStepper = (count: number) => {
      console.log('购买数量', count);
    };

    // inputNumber 极限值
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
      if (sku.disable) return false;
      data.sku[parentIndex].list.forEach((s) => {
        s.active = s.id == sku.id;
      });
      data.goods = {
        skuId: sku.id,
        price: '4599.00',
        imagePath:
          '//img14.360buyimg.com/n4/jfs/t1/215845/12/3788/221990/618a5c4dEc71cb4c7/7bd6eb8d17830991.jpg' 
      };
    };
    // 底部操作按钮触发
    const clickBtnOperate = (op:string)=>{
      console.log('点击了操作按钮',op)
    } 
    return { customStepper, overLimit, changeStepper,selectSku, clickBtnOperate,stepperExtraText,...toRefs(data) };
}
}
</script>
```
::: 
### 自定义插槽

Sku 组件默认划分为若干区域，这些区域都定义成了插槽，可以按照需求进行替换。

:::demo
```html
<template>
  <nut-cell title="通过插槽自定义设置" desc="" @click="customBySlot = true"></nut-cell>
  <nut-sku
      v-model:visible="customBySlot"
      :sku="sku"
      :goods="goods"
      :btnOptions="['buy', 'cart']"
      @selectSku="selectSku"
      @clickBtnOperate="clickBtnOperate"
  >
      <!-- 商品展示区，价格区域 -->
      <template #sku-header-price>
          <div>
              <nut-price :price="goods.price" :needSymbol="true" :thousands="false"> </nut-price>
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
    :is-show-custom-address="false"
    @selected="selectedAddress"
    exist-address-title="配送至"
  ></nut-address>

</template>
<script lang="ts">
import { ref,reactive,onMounted,toRefs} from 'vue';
export default {
setup() {
    const customBySlot = ref(false);
    const showAddressPopup = ref(false);
    const data = reactive({
      sku: [],
      goods: {}
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
        addressDetail: '12 ',
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

    onMounted(() => {
        fetch('https://storage.360buyimg.com/nutui/3x/data.js')
          .then((response) => response.json())
          .then((res) => {
            const { Sku, Goods, imagePathMap } = res;
            data.sku = Sku;
            data.goods = Goods;
          }) //执行结果是 resolve就调用then方法
          .catch((err) => console.log('Oh, error', err)); //执行结果是 reject就调用catch方法
    });

    // 切换规格类目
    const selectSku = (ss: string) => {
      const { sku, skuIndex, parentSku, parentIndex } = ss;
      if (sku.disable) return false;
      data.sku[parentIndex].list.forEach((s) => {
        s.active = s.id == sku.id;
      });
      data.goods = {
        skuId: sku.id,
        price: '6002.10',
        imagePath:
          '//img14.360buyimg.com/n4/jfs/t1/215845/12/3788/221990/618a5c4dEc71cb4c7/7bd6eb8d17830991.jpg' 
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
}
</script>

<style>
.sku-operate-box {
  width: 100%;
  display: flex;
  padding: 8px 10px;
  box-sizing: border-box;
}
.sku-operate-item {
    flex:1
}
.sku-operate-item:first-child {
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
    }
.sku-operate-item:last-child {
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
    }
</style>
```
:::

## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| v-model:visible         | 是否显示商品规格弹框               | boolean |  false              |
| sku         | 商品 sku 数据 | Array | []               |
| goods |  商品信息    | Object | - |
| stepper-max         | 设置 inputNumber 最大值  | [String, Number] | 99999               |
| stepper-min         | 设置 inputNumber 最小值  | [String, Number] | 1               |
| btn-options        |           底部按钮设置。['confirm','buy','cart' ] 分别对应确定、立即购买、加入购物车              | Array | ['confirm']           |
| btn-extra-text | 按钮上部添加文案，默认为空，有值时显示 | String | -            |
| stepper-title         | 数量选择组件左侧文案 | String | '购买数量'                |
| stepper-extra-text        |   inputNumber 与标题之间的文案       | [Function, false] | false              |
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

sku 数组中，每一个数组索引代表一个规格类目。其中，list 代表该规格类目下的类目值。每个类目值对象包括：name、id、active(是否选中)、disable(是否可选)

```javascript
sku : [{
    id: 1,
    name: '颜色',
    list: [{
        name: '亮黑色',
        id: 100016015112,
        active: true,
        disable: false
      },
      {
        name: '釉白色',
        id: 100016015142,
        active: false,
        disable: false
      },
      {
        name: '秘银色',
        id: 100016015078,
        active: false,
        disable: false
      },
      {
        name: '夏日胡杨',
        id: 100009064831,
        active: false,
        disable: false
      },
      {
        name: '秋日胡杨',
        id: 100009064830,
        active: false,
        disable: false
      }
    ]
  },
  {
    id: 2,
    name: '版本',
    list: [{
        name: '8GB+128GB',
        id: 100016015102,
        active: true,
        disable: false
      },
      {
        name: '8GB+256GB',
        id: 100016015122,
        active: false,
        disable: false
      }
    ]
  },
  {
    id: 3,
    name: '版本',
    list: [{
        name: '4G（有充版）',
        id: 100016015103,
        active: true,
        disable: false
      },
      {
        name: '5G（有充版）',
        id: 100016015123,
        active: false,
        disable: false
      },
      {
        name: '5G（无充版）',
        id: 100016015104,
        active: true,
        disable: true
      },
      {
        name: '5G（无充）质保换新版',
        id: 100016015125,
        active: false,
        disable: false
      }
    ]
  }
];
```
