<template>
  <div class="demo">
    <h2>基本用法</h2>
    <div class="elevator-wrapper">
      <nut-elevator
        :index-list="dataList"
        :height="260"
        @click-item="clickItem"
        @click-index="clickIndex"
      ></nut-elevator>
    </div>

    <h2>自定义索引key</h2>
    <div class="elevator-wrapper">
      <nut-elevator
        :index-list="dataList2"
        :height="220"
        :acceptKey="acceptKey"
        @click-item="clickItem"
        @click-index="clickIndex"
      ></nut-elevator>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue';
import { createComponent } from '../../utils/create';
const { createDemo } = createComponent('elevator');
export default createDemo({
  setup() {
    const state = reactive({
      acceptKey: 'num',
      dataList: [
        {
          title: 'A',
          list: [
            {
              name: '安徽',
              id: 1
            }
          ]
        },
        {
          title: 'B',
          list: [
            {
              name: '北京',
              id: 2
            }
          ]
        },
        {
          title: 'G',
          list: [
            {
              name: '广西',
              id: 3
            },
            {
              name: '广东',
              id: 4
            }
          ]
        },
        {
          title: 'H',
          list: [
            {
              name: '湖南',
              id: 5
            },
            {
              name: '湖北',
              id: 6
            }
          ]
        }
      ],
      dataList2: [
        {
          num: '一',
          list: [
            {
              name: '北京',
              id: 1
            },
            {
              name: '上海',
              id: 2
            },
            {
              name: '深圳',
              id: 3
            },
            {
              name: '广州',
              id: 4
            },
            {
              name: '杭州',
              id: 5
            }
          ]
        },
        {
          num: '二',
          list: [
            {
              name: '成都',
              id: 6
            },
            {
              name: '西安',
              id: 7
            },
            {
              name: '天津',
              id: 8
            },
            {
              name: '武汉',
              id: 9
            },
            {
              name: '长沙',
              id: 10
            },
            {
              name: '重庆',
              id: 11
            },
            {
              name: '苏州',
              id: 12
            },
            {
              name: '南京',
              id: 13
            }
          ]
        },
        {
          num: '三',
          list: [
            {
              name: '西宁',
              id: 14
            },
            {
              name: '兰州',
              id: 15
            },
            {
              name: '石家庄',
              id: 16
            },
            {
              name: '秦皇岛',
              id: 17
            },
            {
              name: '大连',
              id: 18
            },
            {
              name: '哈尔滨',
              id: 19
            },
            {
              name: '长春',
              id: 20
            },
            {
              name: '太原',
              id: 21
            }
          ]
        }
      ]
    });

    const clickItem = (key: string, item: any) => {
      console.log(key, JSON.stringify(item));
    };

    const clickIndex = (key: string) => {
      console.log(key);
    };

    return { ...toRefs(state), clickItem, clickIndex };
  }
});
</script>

<style lang="scss" scoped>
.demo {
  background-color: #fff !important;
}
</style>
