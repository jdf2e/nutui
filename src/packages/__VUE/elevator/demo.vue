<template>
  <div class="demo">
    <h2>{{ translate('basic') }}</h2>
    <div class="elevator-wrapper">
      <nut-elevator :index-list="temp" :height="260" @click-item="clickItem" @click-index="clickIndex"></nut-elevator>
    </div>
    <h2>{{ translate('customIndex') }}</h2>
    <div class="elevator-wrapper">
      <nut-elevator
        :index-list="dataList2"
        :height="220"
        :acceptKey="acceptKey"
        @click-item="clickItem"
        @click-index="clickIndex"
      ></nut-elevator>
    </div>
    <h2>{{ translate('sticky') }}</h2>
    <div class="elevator-wrapper">
      <nut-elevator
        :index-list="dataList3"
        :is-sticky="true"
        :height="220"
        @click-item="clickItem"
        @click-index="clickIndex"
      ></nut-elevator>
    </div>
    <h2>{{ translate('customContent') }}</h2>
    <div class="elevator-wrapper">
      <nut-elevator :index-list="temp" :height="260" @click-item="clickItem" @click-index="clickIndex">
        <template v-slot:default="slotProps">
          <nut-icon name="JD" size="12"></nut-icon>
          <span :style="{ marginLeft: '15px' }">{{ slotProps.item.name }}</span>
        </template>
      </nut-elevator>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, reactive, toRefs } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { createDemo, translate } = createComponent('elevator');
import { useTranslate } from '@/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基本用法',
      customIndex: '自定义索引key',
      sticky: '索引吸顶',
      customContent: '自定义内容',
      anhui: '安徽',
      beijing: '北京',
      guangxi: '广西',
      guangdong: '广东',
      hunan: '湖南',
      hubei: '湖北',
      shanghai: '上海',
      shenzhen: '深圳',
      guangzhou: '广州',
      hangzhou: '杭州',
      chengdu: '成都',
      xian: '西安',
      tianjin: '天津',
      wuhan: '武汉',
      changsha: '长沙',
      chongqin: '重庆',
      suzhou: '苏州',
      nanjing: '南京',
      xining: '西宁',
      lanzhou: '兰州',
      shijiazhuang: '石家庄',
      qinhuangdao: '秦皇岛',
      dalian: '大连',
      haerbin: '哈尔滨',
      changchun: '长春',
      taiyuan: '太原',
      fujian: '福建',
      gansu: '甘肃',
      guizhou: '贵州',
      hainan: '海南',
      hebei: '河北',
      henan: '河南',
      heilongjiang: '黑龙江',
      jilin: '吉林',
      jiangsu: '江苏',
      jiangxi: '江西',
      liaoning: '辽宁',
      one: '一',
      two: '二',
      three: '三'
    },
    'en-US': {
      basic: 'Basic Usage',
      customIndex: 'Custom index key',
      sticky: 'Index ceiling',
      customContent: 'Custom content',
      anhui: 'AnHui',
      beijing: 'BeiJing',
      guangxi: 'GuangXi',
      guangdong: 'GuangDong',
      hunan: 'HuNan',
      hubei: 'HuBei',
      shanghai: 'ShangHai',
      shenzhen: 'ShenZhen',
      guangzhou: 'GuangZhou',
      hangzhou: 'HangZhou',
      chengdu: 'ChengDu',
      xian: 'XiAn',
      tianjin: 'TianJin',
      wuhan: 'WuHan',
      changsha: 'ChangSha',
      chongqin: 'ChongQin',
      suzhou: 'SuZhou',
      nanjing: 'NanJing',
      xining: 'XiNing',
      lanzhou: 'LanZhou',
      shijiazhuang: 'ShiJiaZhuang',
      qinhuangdao: 'QinHuangDao',
      dalian: 'DaLian',
      haerbin: 'HaErBin',
      changchun: 'ChangChun',
      taiyuan: 'TaiYuan',
      fujian: 'FuJian',
      gansu: 'GanSu',
      guizhou: 'GuiZhou',
      hainan: 'HaiNan',
      hebei: 'HeBei',
      henan: 'HeNan',
      heilongjiang: 'HeiLongJiang',
      jilin: 'JiLin',
      jiangsu: 'JiangSu',
      jiangxi: 'JiangXi',
      liaoning: 'LiaoNing',
      one: 'one',
      two: 'two',
      three: 'three'
    }
  });
export default createDemo({
  setup() {
    initTranslate();
    const state = reactive({
      acceptKey: 'num',
      dataList: [
        {
          title: 'A',
          list: [
            {
              name: translate('anhui'),
              id: 1
            }
          ]
        },
        {
          title: 'B',
          list: [
            {
              name: translate('beijing'),
              id: 2
            }
          ]
        },
        {
          title: 'G',
          list: [
            {
              name: translate('guangxi'),
              id: 3
            },
            {
              name: translate('guangdong'),
              id: 4
            }
          ]
        },
        {
          title: 'H',
          list: [
            {
              name: translate('hunan'),
              id: 5
            },
            {
              name: translate('hubei'),
              id: 6
            }
          ]
        }
      ],
      dataList2: [
        {
          num: translate('one'),
          list: [
            {
              name: translate('beijing'),
              id: 1
            },
            {
              name: translate('shanghai'),
              id: 2
            },
            {
              name: translate('shenzhen'),
              id: 3
            },
            {
              name: translate('guangzhou'),
              id: 4
            },
            {
              name: translate('hangzhou'),
              id: 5
            }
          ]
        },
        {
          num: translate('two'),
          list: [
            {
              name: translate('chengdu'),
              id: 6
            },
            {
              name: translate('xian'),
              id: 7
            },
            {
              name: translate('tianjin'),
              id: 8
            },
            {
              name: translate('wuhan'),
              id: 9
            },
            {
              name: translate('changsha'),
              id: 10
            },
            {
              name: translate('chongqin'),
              id: 11
            },
            {
              name: translate('suzhou'),
              id: 12
            },
            {
              name: translate('nanjing'),
              id: 13
            }
          ]
        },
        {
          num: translate('three'),
          list: [
            {
              name: translate('xining'),
              id: 14
            },
            {
              name: translate('lanzhou'),
              id: 15
            },
            {
              name: translate('shijiazhuang'),
              id: 16
            },
            {
              name: translate('qinhuangdao'),
              id: 17
            },
            {
              name: translate('dalian'),
              id: 18
            },
            {
              name: translate('haerbin'),
              id: 19
            },
            {
              name: translate('changchun'),
              id: 20
            },
            {
              name: translate('taiyuan'),
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
              name: translate('anhui'),
              id: 1
            }
          ]
        },
        {
          title: 'B',
          list: [
            {
              name: translate('beijing'),
              id: 2
            }
          ]
        },
        {
          title: 'C',
          list: [
            {
              name: translate('chongqin'),
              id: 3
            }
          ]
        },
        {
          title: 'F',
          list: [
            {
              name: translate('anhui'),
              id: 4
            }
          ]
        },
        {
          title: 'G',
          list: [
            {
              name: translate('guangxi'),
              id: 5
            },
            {
              name: translate('guangdong'),
              id: 6
            },
            {
              name: translate('gansu'),
              id: 7
            },
            {
              name: translate('guizhou'),
              id: 8
            }
          ]
        },
        {
          title: 'H',
          list: [
            {
              name: translate('hunan'),
              id: 9
            },
            {
              name: translate('hubei'),
              id: 10
            },
            {
              name: translate('hainan'),
              id: 11
            },
            {
              name: translate('hebei'),
              id: 12
            },
            {
              name: translate('henan'),
              id: 13
            },
            {
              name: translate('heilongjiang'),
              id: 14
            }
          ]
        },
        {
          title: 'J',
          list: [
            {
              name: translate('jilin'),
              id: 15
            },
            {
              name: translate('jiangsu'),
              id: 16
            },
            {
              name: translate('jiangxi'),
              id: 17
            }
          ]
        },
        {
          title: 'L',
          list: [
            {
              name: translate('liaoning'),
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

    return { ...toRefs(state), temp, clickItem, clickIndex, translate };
  }
});
</script>

<style lang="scss" scoped>
.nut-theme-dark {
  .demo {
    background-color: #000 !important;
  }
}
.demo {
  background-color: #fff !important;
}
</style>
