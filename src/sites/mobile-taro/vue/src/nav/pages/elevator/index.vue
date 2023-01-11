<template>
  <div class="demo elevator-demo" :class="{ web: env === 'WEB' }">
    <Header v-if="env === 'WEB'" />
    <h2>基础用法</h2>
    <div class="elevator-wrapper">
      <nut-elevator :index-list="temp" :height="260" @click-item="clickItem" @click-index="clickIndex"></nut-elevator>
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
    <h2>索引吸顶</h2>
    <div class="elevator-wrapper">
      <nut-elevator
        :index-list="dataList3"
        :is-sticky="true"
        :height="220"
        @click-item="clickItem"
        @click-index="clickIndex"
      ></nut-elevator>
    </div>
    <h2>自定义内容</h2>
    <div class="elevator-wrapper">
      <nut-elevator :index-list="temp" :height="260" @click-item="clickItem" @click-index="clickIndex">
        <template v-slot:default="slotProps">
          <Jd width="12px"></Jd>
          <span :style="{ marginLeft: '15px' }">{{ slotProps.item.name }}</span>
        </template>
      </nut-elevator>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, reactive, toRefs, defineComponent } from 'vue';
import { Jd } from '@nutui/icons-vue-taro';
import Taro from '@tarojs/taro';
import Header from '../../../components/header.vue';
export default defineComponent({
  components: {
    Jd,
    Header
  },
  setup() {
    const env = Taro.getEnv();

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
              id: 5
            },
            {
              name: '广东',
              id: 6
            }
          ]
        },
        {
          title: 'H',
          list: [
            {
              name: '湖南',
              id: 9
            },
            {
              name: '湖北',
              id: 10
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
      ],
      dataList3: [
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
          title: 'C',
          list: [
            {
              name: '重庆',
              id: 3
            }
          ]
        },
        {
          title: 'F',
          list: [
            {
              name: '福建',
              id: 4
            }
          ]
        },
        {
          title: 'G',
          list: [
            {
              name: '广西',
              id: 5
            },
            {
              name: '广东',
              id: 6
            },
            {
              name: '甘肃',
              id: 7
            },
            {
              name: '贵州',
              id: 8
            }
          ]
        },
        {
          title: 'H',
          list: [
            {
              name: '湖南',
              id: 9
            },
            {
              name: '湖北',
              id: 10
            },
            {
              name: '海南',
              id: 11
            },
            {
              name: '河北',
              id: 12
            },
            {
              name: '河南',
              id: 13
            },
            {
              name: '黑龙江',
              id: 14
            }
          ]
        },
        {
          title: 'J',
          list: [
            {
              name: '吉林',
              id: 15
            },
            {
              name: '江苏',
              id: 16
            },
            {
              name: '江西',
              id: 17
            }
          ]
        },
        {
          title: 'L',
          list: [
            {
              name: '辽宁',
              id: 18
            }
          ]
        }
      ]
    });

    const temp = computed(() => {
      return state.dataList;
    });

    const clickItem = (key: string, item: any) => {
      console.log(key, JSON.stringify(item));
    };

    const clickIndex = (key: string) => {
      console.log(key);
    };

    return { ...toRefs(state), temp, clickItem, clickIndex, env };
  }
});
</script>

<style lang="scss">
.elevator-demo {
  background-color: #fff !important;
  overflow-y: hidden !important;
}
</style>
