<template>
  <div class="demo">
    <h2>{{ translate('basic') }}</h2>
    <nut-table :columns="columns1" :data="data1"></nut-table>
    <h2>{{ translate('title1') }}</h2>
    <nut-table :columns="columns2" :data="data1" :bordered="bordered1"></nut-table>
    <h2>{{ translate('title2') }}</h2>
    <nut-table :columns="columns3" :data="data2" :summary="summary"></nut-table>
    <h2>{{ translate('title3') }}</h2>
    <nut-table :columns="columns3" :data="data2" :striped="striped"></nut-table>
    <h2>{{ translate('title4') }}</h2>
    <nut-table :columns="columns3" :data="data3"> </nut-table>
    <br />
    <nut-table :columns="columns3" :data="data3">
      <template #nodata>
        <div class="no-data"> {{ translate('title5') }} </div>
      </template>
    </nut-table>
    <h2>{{ translate('title6') }}</h2>
    <nut-table :columns="columns4" :data="data4"> </nut-table>
    <h2>{{ translate('title7') }}</h2>
    <nut-table :columns="columns3" :data="data5"> </nut-table>
    <h2>{{ translate('title8') }}</h2>
    <nut-table :columns="columns6" :data="data6" @sorter="handleSorter"> </nut-table>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, onMounted, onUnmounted, h } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { TableColumnProps } from './types';
import { Toast } from '@/packages/nutui.vue';
import Button from '@/packages/__VUE/button/index.vue';
import Icon from '@/packages/__VUE/icon/index.vue';
const { createDemo, translate } = createComponent('table');
import { useTranslate } from '@/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基本用法',
      title1: '是否显示边框，文字对齐',
      title2: '显示总结栏',
      title3: '条纹、明暗交替',
      title4: '无数据默认展示，支持自定义',
      title5: '这里是自定义展示',
      title6: '自定义单元格',
      title7: '支持异步渲染(5s之后看效果)',
      title8: '支持排序',
      name: '姓名',
      age: '年龄',
      sex: '性别',
      man: '男',
      woman: '女',
      education: '学历',
      address: '地址',
      oper: '操作',
      primary: '小学',
      high: '高中',
      undergraduate: '本科',
      jump: '跳转到京东',
      summary: '这是总结栏',
      beijing: '北京',
      shanghai: '上海',
      hangzhou: '杭州'
    },
    'en-US': {
      basic: 'Basic Usage',
      title1: 'Whether to display border and align text',
      title2: 'Show summary bar',
      title3: 'Stripes, alternating light and shade',
      title4: 'No data is displayed by default, and customization is supported',
      title5: 'Here is the custom display',
      title6: 'Custom cell',
      title7: 'Support asynchronous rendering(See the effect after 5S)',
      title8: 'Support sorting',
      name: 'name',
      age: 'age',
      sex: 'sex',
      man: 'man',
      woman: 'woman',
      education: 'education',
      address: 'address',
      oper: 'operation',
      primary: 'primary school',
      high: 'high school',
      undergraduate: 'undergraduate',
      jump: 'Jump To Jingdong',
      summary: 'This is the summary column',
      beijing: 'beijing',
      shanghai: 'shanghai',
      hangzhou: 'hangzhou'
    }
  });
export default createDemo({
  components: {
    Button,
    Icon
  },
  props: {},
  setup(props, { emit, slot }) {
    initTranslate();
    const state = reactive({
      bordered1: false,
      striped: true,
      columns1: [
        {
          title: translate('name'),
          key: 'name',
          stylehead: 'font-size:20px;color:red;font-weight:bolder;',
          stylecolumn: 'font-size:10px;'
        },
        {
          title: translate('sex'),
          key: 'sex',
          stylecolumn: 'font-size:20px;',
          render: ({ sex }) => {
            return h(
              'span',
              {
                style: {
                  color: sex === translate('woman') ? 'blue' : 'green'
                }
              },
              sex
            );
          }
        },
        {
          title: translate('education'),
          key: 'record'
        }
      ],
      columns2: [
        {
          title: translate('name'),
          key: 'name',
          align: 'center'
        },
        {
          title: translate('sex'),
          key: 'sex'
        },
        {
          title: translate('education'),
          key: 'record'
        }
      ],
      columns3: [
        {
          title: translate('name'),
          key: 'name'
        },
        {
          title: translate('sex'),
          key: 'sex'
        },
        {
          title: translate('education'),
          key: 'record'
        },
        {
          title: translate('age'),
          key: 'age'
        },
        {
          title: translate('address'),
          key: 'address'
        }
      ],
      columns4: [
        {
          title: translate('name'),
          key: 'name',
          align: 'center'
        },
        {
          title: translate('sex'),
          key: 'sex'
        },
        {
          title: translate('education'),
          key: 'record'
        },
        {
          title: translate('oper'),
          key: 'render'
        }
      ],
      columns6: [
        {
          title: translate('name'),
          key: 'name',
          align: 'center',
          sorter: true
        },
        {
          title: translate('sex'),
          key: 'sex'
        },
        {
          title: translate('education'),
          key: 'record'
        },
        {
          title: translate('age'),
          key: 'age',
          sorter: (row1: any, row2: any) => {
            return row1.age - row2.age;
          }
        }
      ],
      data1: [
        {
          sex: translate('man'),
          name: 'Tom',
          record: translate('primary')
        },
        {
          name: 'Lucy',
          sex: translate('woman'),
          record: translate('undergraduate')
        },
        {
          name: 'Jack',
          sex: translate('man'),
          record: translate('high')
        }
      ],
      data2: [
        {
          address: translate('beijing'),
          name: 'Tom',
          sex: translate('man'),
          record: translate('primary'),
          age: 13
        },
        {
          record: translate('undergraduate'),
          name: 'Lucy',
          sex: translate('woman'),
          age: 34,
          address: translate('shanghai')
        },
        {
          age: 4,
          name: 'Jack',
          sex: translate('man'),
          record: translate('high'),
          address: translate('hangzhou')
        }
      ],
      data3: [],
      data4: [
        {
          name: 'Tom',
          sex: translate('man'),
          record: translate('primary'),
          render: () => {
            return h(
              Button,
              {
                onClick: () => {
                  (Toast as any).text('hello');
                },
                size: 'small',
                type: 'primary'
              },
              () => h('div', {}, 'Hello')
            );
          }
        },
        {
          name: 'Lucy',
          sex: translate('woman'),
          record: translate('undergraduate'),
          render: () => {
            return h(Icon, { name: 'dongdong', size: '14px' });
          }
        },
        {
          name: 'Jack',
          sex: translate('man'),
          record: translate('high'),
          render: () => {
            return h(
              Button,
              {
                type: 'success',
                size: 'small',
                onClick: () => {
                  window.open('https://www.jd.com');
                }
              },
              () => h('div', {}, translate('jump'))
            );
          }
        }
      ],
      data5: [],
      data6: [
        {
          name: 'Tom',
          sex: translate('man'),
          record: translate('primary'),
          age: 10
        },
        {
          name: 'Lucy',
          sex: translate('woman'),
          record: translate('undergraduate'),
          age: 30
        },
        {
          name: 'Jack',
          sex: translate('man'),
          record: translate('high'),
          age: 4
        }
      ],
      timer: null as number | null,
      summary: () => {
        return {
          value: translate('summary'),
          colspan: 5
        };
      }
    });

    const handleSorter = (item: TableColumnProps) => {
      (Toast as any).text(`${JSON.stringify(item)}`);
    };

    onMounted(() => {
      state.timer = setTimeout(() => {
        state.data5 = state.data2.slice() as any;
      }, 5000);
    });

    onUnmounted(() => {
      state.timer = null;
    });

    return {
      ...toRefs(state),
      handleSorter,
      translate
    };
  }
});
</script>

<style lang="scss" scoped>
::v-deep(.nut-table) {
  background-color: #fff;
}
</style>
