<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nut-table :columns="columns1" :data="data1"></nut-table>
    <h2>是否显示边框，文字对齐</h2>
    <nut-table :columns="columns2" :data="data1" :bordered="bordered1"></nut-table>
    <h2>显示总结栏</h2>
    <nut-table :columns="columns3" :data="data2" :summary="summary"></nut-table>
    <h2>条纹、明暗交替</h2>
    <nut-table :columns="columns3" :data="data2" :striped="striped"></nut-table>
    <h2>无数据默认展示，支持自定义</h2>
    <nut-table :columns="columns3" :data="data3"> </nut-table>
    <br />
    <nut-table :columns="columns3" :data="data3">
      <template #nodata>
        <div class="no-data"> 这里是自定义展示 </div>
      </template>
    </nut-table>
    <h2>自定义单元格</h2>
    <nut-table :columns="columns4" :data="data4"> </nut-table>
    <h2>支持异步渲染(5s之后看效果)</h2>
    <nut-table :columns="columns3" :data="data5"> </nut-table>
    <h2>支持排序</h2>
    <nut-table :columns="columns6" :data="data6" @sorter="handleSorter"> </nut-table>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, onMounted, onUnmounted, h, defineComponent } from 'vue';
import { TableColumnProps } from '@/packages/__VUE/table/types';
import Button from './../../../../../../../packages/__VUE/button/index.taro.vue';
import Icon from './../../../../../../../packages/__VUE/icon/index.taro.vue';
export default defineComponent({
  components: {
    Button,
    Icon
  },
  props: {},
  setup(props, { emit, slot }) {
    const state = reactive({
      bordered1: false,
      striped: true,
      columns1: [
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '性别',
          key: 'sex'
        },
        {
          title: '学历',
          key: 'record'
        }
      ],
      columns2: [
        {
          title: '姓名',
          key: 'name',
          align: 'center'
        },
        {
          title: '性别',
          key: 'sex'
        },
        {
          title: '学历',
          key: 'record'
        }
      ],
      columns3: [
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '性别',
          key: 'sex'
        },
        {
          title: '学历',
          key: 'record'
        },
        {
          title: '年龄',
          key: 'age'
        },
        {
          title: '地址',
          key: 'address'
        }
      ],
      columns4: [
        {
          title: '姓名',
          key: 'name',
          align: 'center'
        },
        {
          title: '性别',
          key: 'sex'
        },
        {
          title: '学历',
          key: 'record'
        },
        {
          title: '操作',
          key: 'render'
        }
      ],
      columns6: [
        {
          title: '姓名',
          key: 'name',
          align: 'center',
          sorter: true
        },
        {
          title: '性别',
          key: 'sex'
        },
        {
          title: '学历',
          key: 'record'
        },
        {
          title: '年龄',
          key: 'age',
          sorter: (row1: any, row2: any) => {
            return row1.age - row2.age;
          }
        }
      ],
      data1: [
        {
          name: 'Tom',
          sex: '男',
          record: '小学'
        },
        {
          name: 'Lucy',
          sex: '女',
          record: '本科'
        },
        {
          name: 'Jack',
          sex: '男',
          record: '高中'
        }
      ],
      data2: [
        {
          name: 'Tom',
          sex: '男',
          record: '小学',
          age: 13,
          address: '北京'
        },
        {
          name: 'Lucy',
          sex: '女',
          record: '本科',
          age: 34,
          address: '上海'
        },
        {
          name: 'Jack',
          sex: '男',
          record: '高中',
          age: 4,
          address: '杭州'
        }
      ],
      data3: [],
      data4: [
        {
          name: 'Tom',
          sex: '男',
          record: '小学',
          render: () => {
            return h(Button, { size: 'small', type: 'primary' }, 'Hello');
          }
        },
        {
          name: 'Lucy',
          sex: '女',
          record: '本科',
          render: () => {
            return h(Icon, { name: 'dongdong', size: '14px' });
          }
        },
        {
          name: 'Jack',
          sex: '男',
          record: '高中',
          render: () => {
            return h(Button, { type: 'success', size: 'small' }, '编辑按钮');
          }
        }
      ],
      data5: [],
      data6: [
        {
          name: 'Tom',
          sex: '男',
          record: '小学',
          age: 10
        },
        {
          name: 'Lucy',
          sex: '女',
          record: '本科',
          age: 30
        },
        {
          name: 'Jack',
          sex: '男',
          record: '高中',
          age: 4
        }
      ],
      timer: null as number | null,
      summary: () => {
        return {
          value: '这是总结栏',
          colspan: 5
        };
      }
    });

    const handleSorter = (item: TableColumnProps) => {
      console.log(JSON.stringify(item));
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
      handleSorter
    };
  }
});
</script>

<style lang="scss">
.demo {
  padding-bottom: 20px !important;
}
.nut-table {
  background-color: #fff;
}
</style>
