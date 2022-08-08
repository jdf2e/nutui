<template>
  <div class="demo">
    <h2>{{ translate('basic') }}</h2>
    <nut-cell :title="translate('basic')" desc="" @click="base = true"></nut-cell>

    <h2>{{ translate('noSell') }}</h2>
    <nut-cell :title="translate('noSell')" desc="" @click="notSell = true"></nut-cell>

    <h2>{{ translate('customStepper') }}</h2>
    <nut-cell :title="translate('customStepper')" desc="" @click="customStepper = true"></nut-cell>

    <h2>{{ translate('slots') }}</h2>
    <nut-cell :title="translate('slots')" desc="" @click="customBySlot = true"></nut-cell>

    <nut-sku
      v-model:visible="base"
      :sku="skuData"
      :goods="goodsInfo"
      @selectSku="selectSku"
      @clickBtnOperate="clickBtnOperate"
      @close="close"
    ></nut-sku>

    <nut-sku
      v-model:visible="notSell"
      :sku="skuData"
      :goods="goodsInfo"
      :btnExtraText="btnExtraText"
      @changeStepper="changeStepper"
      :btnOptions="['buy', 'cart']"
      @selectSku="selectSku"
      @close="close"
    >
      <template #sku-operate>
        <div class="sku-operate-box">
          <nut-button class="sku-operate-box-dis" type="warning">查看相似商品</nut-button>
          <nut-button class="sku-operate-box-dis" type="info">到货通知</nut-button>
        </div>
      </template>
    </nut-sku>

    <nut-sku
      v-model:visible="customStepper"
      :sku="skuData"
      :goods="goodsInfo"
      :stepperMax="7"
      :stepperMin="2"
      :stepperExtraText="stepperExtraText"
      @changeStepper="changeStepper"
      @overLimit="overLimit"
      :btnOptions="['buy', 'cart']"
      @selectSku="selectSku"
      @clickBtnOperate="clickBtnOperate"
      @close="close"
    ></nut-sku>

    <nut-sku
      v-model:visible="customBySlot"
      :sku="skuData"
      :goods="goodsInfo"
      :btnOptions="['buy', 'cart']"
      @selectSku="selectSku"
      @clickBtnOperate="clickBtnOperate"
      @close="close()"
    >
      <template #sku-header-price>
        <div>
          <nut-price :price="goodsInfo.price" :needSymbol="true" :thousands="false"> </nut-price>
          <span class="tag"></span>
        </div>
      </template>

      <template #sku-header-extra>
        <span class="nut-sku-header-right-extra">重量：0.1kg 编号：{{ goodsInfo.skuId }} </span>
      </template>

      <template #sku-operate>
        <div class="sku-operate-box">
          <nut-button class="sku-operate-item" shape="square" type="warning">加入购物车</nut-button>
          <nut-button class="sku-operate-item" shape="square" type="primary">立即购买</nut-button>
        </div>
      </template>

      <template #sku-select-top>
        <div class="address">
          <nut-cell
            style="box-shadow: none; padding: 13px 0"
            title="送至"
            :desc="addressDesc"
            @click="showAddressPopup = true"
          ></nut-cell>
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
  </div>
</template>

<script lang="ts">
import { reactive, ref, toRefs, onMounted } from 'vue';

import { createComponent } from '@/packages/utils/create';
import { useTranslate } from '@/sites/assets/util/useTranslate';
import { Toast } from '@/packages/nutui.vue';
const { createDemo, translate } = createComponent('sku');

const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基本用法',
      noSell: '不可售',
      customStepper: '自定义计步器',
      slots: '自定义插槽'
    },
    'en-US': {
      basic: 'Basic Usage',
      noSell: 'Not Sell',
      customStepper: 'Custom Stepper',
      slots: 'Custom Slots'
    }
  });

interface Skus {
  id: number;
  name: string;
  list: SkuItem[];
  [key: string]: any;
}

interface SkuItem {
  id: number;
  name: string;
  imagePath: string;
  [key: string]: any;
}

interface GoodsProps {
  skuId: string | number;
  price: string; // 商品信息展示区，商品价格
  imagePath?: string;
  [key: string]: any;
}

interface Data {
  skuData: Skus[];
  goodsInfo: any;
  imagePathMap: any;
}

export default createDemo({
  props: {},
  setup() {
    initTranslate();
    const popup = reactive({
      base: false,
      notSell: false,
      customStepper: false,
      customBySlot: false,

      showAddressPopup: false
    });

    const data = reactive<Data>({
      skuData: [],
      goodsInfo: {},
      imagePathMap: {}
    });

    const stepperExtraText = () => {
      return `<div style="width:100%;text-align:right;color:#F00">2 件起售</div>`;
    };

    const btnExtraText = ref('抱歉，此商品在所选区域暂无存货');
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

    onMounted(() => {
      getData();
    });

    const getData = () => {
      fetch('//storage.360buyimg.com/nutui/3x/data.js')
        .then((response) => response.json())
        .then((res) => {
          const { Sku, Goods, imagePathMap } = res;
          data.skuData = Sku;
          data.goodsInfo = Goods;
          data.imagePathMap = imagePathMap;
        }) //执行结果是 resolve就调用then方法
        .catch((err) => console.log('Oh, error', err)); //执行结果是 reject就调用catch方法
    };
    const selectSku = (s: any) => {
      const { sku, parentIndex } = s;

      if (sku.disable) return false;

      data.skuData[parentIndex].list.forEach((s) => {
        s.active = s.id == sku.id;
      });

      data.goodsInfo = {
        skuId: sku.id,
        price: '4599.00' // 商品信息展示区，商品价格
      };

      data.skuData[0].list.forEach((el) => {
        if (el.active && !el.disable) {
          data.goodsInfo.imagePath = data.imagePathMap[el.id];
        }
      });
    };

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

    const clickBtnOperate = (op: string) => {
      console.log('点击了操作按钮', op);
    };
    // 关闭弹框
    const close = () => {
      console.log('选择弹框关闭');
    };

    const selectedAddress = (prevExistAdd: any, nowExistAdd: any) => {
      const { provinceName, countyName, cityName } = nowExistAdd;
      addressDesc.value = `${provinceName}${countyName}${cityName}`;
    };

    return {
      selectSku,
      changeStepper,
      clickBtnOperate,
      close,
      existAddress,
      selectedAddress,
      addressDesc,
      stepperExtraText,
      btnExtraText,
      overLimit,
      translate,
      ...toRefs(popup),
      ...toRefs(data)
    };
  }
});
</script>

<style lang="scss" scoped>
.tag {
  display: inline-block;
  width: 50px;
  height: 15px;
  font-size: 12px;
  margin-left: 10px;
  background: url('//storage.360buyimg.com/imgtools/bbdf6c9a2a-e3f6fbc0-fb4d-11eb-a27f-676da10c85f4.png') no-repeat
    center center;
  background-size: 100% 100%;
}

.sku-operate-box {
  width: 100%;
  display: flex;
  padding: 8px 10px;
  box-sizing: border-box;

  .sku-operate-item {
    width: 100%;
    flex-shrink: 1;
    &:first-child {
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
    }
    &:last-child {
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
    }
  }

  .sku-operate-box-dis {
    width: 100%;
    flex-shrink: 1;
    &:first-child {
      margin-right: 18px;
    }
  }
}
</style>
