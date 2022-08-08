<template>
  <div class="demo">
    <h2>{{ translate('basic') }}</h2>

    <nut-form>
      <nut-form-item :label="translate('addressTip')">
        <input
          class="nut-input-text"
          @click="demo1.visible = true"
          :value="demo1.value"
          readonly
          :placeholder="translate('addressTip1')"
          type="text"
        />
        <nut-cascader
          :title="translate('addressTip')"
          v-model:visible="demo1.visible"
          v-model="demo1.value"
          @change="events.change"
          @path-change="events.pathChange"
          :options="demo1.options"
          close-icon="heart"
          close-icon-position="top-left"
        ></nut-cascader>
      </nut-form-item>
    </nut-form>

    <h2>{{ translate('title1') }}</h2>
    <nut-form>
      <nut-form-item :label="translate('addressTip')">
        <input
          class="nut-input-text"
          @click="demo2.visible = true"
          :value="demo2.value"
          readonly
          :placeholder="translate('addressTip1')"
          type="text"
        />
        <nut-cascader
          :title="translate('addressTip')"
          v-model:visible="demo2.visible"
          v-model="demo2.value"
          label-key="text"
          @change="events.change"
          @path-change="events.pathChange"
          value-key="text"
          children-key="items"
          :options="demo2.options"
        ></nut-cascader>
      </nut-form-item>
    </nut-form>

    <h2>{{ translate('title2') }}</h2>
    <nut-form>
      <nut-form-item :label="translate('addressTip')">
        <input
          class="nut-input-text"
          @click="demo3.visible = true"
          :value="demo3.value"
          readonly
          :placeholder="translate('addressTip1')"
          type="text"
        />
        <nut-cascader
          :title="translate('addressTip')"
          v-model:visible="demo3.visible"
          v-model="demo3.value"
          @change="events.change"
          @path-change="events.pathChange"
          lazy
          :lazy-load="demo3.lazyLoad"
        ></nut-cascader>
      </nut-form-item>
    </nut-form>

    <h2>{{ translate('title3') }}</h2>
    <nut-form>
      <nut-form-item :label="translate('addressTip')">
        <input
          class="nut-input-text"
          @click="demo4.visible = true"
          :value="demo4.value"
          readonly
          :placeholder="translate('addressTip1')"
          type="text"
        />
        <nut-cascader
          :title="translate('addressTip')"
          v-model:visible="demo4.visible"
          v-model="demo4.value"
          @change="events.change"
          @path-change="events.pathChange"
          :options="demo4.options"
          lazy
          :lazy-load="demo4.lazyLoad"
        ></nut-cascader>
      </nut-form-item>
    </nut-form>

    <h2>{{ translate('title4') }}</h2>
    <nut-form>
      <nut-form-item :label="translate('addressTip')">
        <input
          class="nut-input-text"
          @click="demo5.visible = true"
          :value="demo5.value"
          readonly
          :placeholder="translate('addressTip1')"
          type="text"
        />
        <nut-cascader
          :title="translate('addressTip')"
          v-model:visible="demo5.visible"
          v-model="demo5.value"
          @change="events.change"
          @path-change="events.pathChange"
          :options="demo5.options"
          :convertConfig="demo5.convertConfig"
        ></nut-cascader>
      </nut-form-item>
    </nut-form>
  </div>
</template>

<script lang="ts">
import { onMounted, reactive, watch } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { createDemo, translate } = createComponent('cascader');
import { useTranslate } from '@/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基本用法',
      title1: '自定义属性名称',
      title2: '动态加载',
      title3: '部分数据动态加载',
      title4: '自动转换',
      addressTip: '选择地址',
      addressTip1: '请选择地址'
    },
    'en-US': {
      basic: 'Basic Usage',
      title1: 'Custom attribute name',
      title2: 'Async loading',
      title3: 'Async loading of partial data',
      title4: 'Automatic data conversion',
      addressTip: 'Select address',
      addressTip1: 'Please select an address'
    }
  });
export default createDemo({
  props: {},
  setup() {
    initTranslate();
    // 基础用法
    const demo1 = reactive({
      visible: false,
      // value: ['湖南'],
      value: [],
      options: [
        {
          value: '浙江',
          text: '浙江',
          children: [
            {
              value: '杭州',
              text: '杭州',
              disabled: true,
              children: [
                { value: '西湖区', text: '西湖区' },
                { value: '余杭区', text: '余杭区' }
              ]
            },
            {
              value: '温州',
              text: '温州',
              children: [
                { value: '鹿城区', text: '鹿城区' },
                { value: '瓯海区', text: '瓯海区' }
              ]
            }
          ]
        },
        {
          value: '湖南',
          text: '湖南',
          disabled: true
        },
        {
          value: '福建',
          text: '福建',
          children: [
            {
              value: '福州',
              text: '福州',
              children: [
                { value: '鼓楼区', text: '鼓楼区' },
                { value: '台江区', text: '台江区' }
              ]
            }
          ]
        }
      ]
    });

    // 自定义属性名称
    const demo2 = reactive({
      visible: false,
      value: ['福建', '福州', '台江区'],
      options: [
        {
          text: '浙江',
          items: [
            {
              text: '杭州',
              disabled: true,
              items: [{ text: '西湖区' }, { text: '余杭区' }]
            },
            {
              text: '温州',
              items: [{ text: '鹿城区' }, { text: '瓯海区' }]
            }
          ]
        },
        {
          text: '福建',
          items: [
            {
              text: '福州',
              items: [{ text: '鼓楼区' }, { text: '台江区' }]
            }
          ]
        }
      ]
    });

    // 动态加载
    const demo3 = reactive({
      visible: false,
      value: ['A0', 'A12', 'A23', 'A32'],
      lazyLoad(node: any, resolve: (children: any) => void) {
        setTimeout(() => {
          // root表示第一层数据
          if (node.root) {
            resolve([
              { value: 'A0', text: 'A0' },
              { value: 'B0', text: 'B0' },
              { value: 'C0', text: 'C0' }
            ]);
          } else {
            const { value, level } = node;
            const text = value.substring(0, 1);
            const value1 = `${text}${level + 1}1`;
            const value2 = `${text}${level + 1}2`;
            const value3 = `${text}${level + 1}3`;
            resolve([
              { value: value1, text: value1, leaf: level >= 6 },
              { value: value2, text: value2, leaf: level >= 6 },
              { value: value3, text: value3, leaf: level >= 6 }
            ]);
          }
        }, 2000);
      }
    });

    // 部分数据动态加载
    const demo4 = reactive({
      visible: false,
      value: [],
      options: [
        { value: 'A0', text: 'A0' },
        {
          value: 'B0',
          text: 'B0',
          children: [
            { value: 'B11', text: 'B11', leaf: true },
            { value: 'B12', text: 'B12' }
          ]
        },
        { value: 'C0', text: 'C0' }
      ],
      lazyLoad(node: any, resolve: (children: any) => void) {
        setTimeout(() => {
          const { value, level } = node;
          const text = value.substring(0, 1);
          const value1 = `${text}${level + 1}1`;
          const value2 = `${text}${level + 1}2`;
          resolve([
            { value: value1, text: value1, leaf: level >= 2 },
            { value: value2, text: value2, leaf: level >= 1 }
          ]);
        }, 500);
      }
    });

    const demo5 = reactive({
      visible: false,
      value: ['广东省', '广州市'],
      convertConfig: {
        topId: null,
        idKey: 'id',
        pidKey: 'pid',
        sortKey: ''
      },
      options: [
        { value: '北京', text: '北京', id: 1, pid: null },
        { value: '朝阳区', text: '朝阳区', id: 11, pid: 1 },
        { value: '亦庄', text: '亦庄', id: 111, pid: 11 },
        { value: '广东省', text: '广东省', id: 2, pid: null },
        { value: '广州市', text: '广州市', id: 21, pid: 2 }
      ]
    });

    // onMounted(() => {
    //   setTimeout(() => {
    //     demo1.value = ['浙江', '温州', '瓯海区'];
    //     setTimeout(() => {
    //       demo1.value = ['浙江', '杭州', '西湖区'];
    //     }, 2000);
    //   }, 2000);
    // });

    const events = {
      change(...args: any) {
        console.log('change', ...args);
      },
      pathChange(...args: any) {
        console.log('pathChange', ...args);
      }
    };

    return {
      demo1,
      demo2,
      demo3,
      demo4,
      demo5,
      events,
      translate
    };
  }
});
</script>
