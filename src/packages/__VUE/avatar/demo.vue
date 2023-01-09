<template>
  <div class="demo full">
    <h2>{{ translate('title1') }}</h2>
    <nut-cell>
      <nut-avatar size="large">
        <img
          src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"
        />
      </nut-avatar>
      <nut-avatar size="normal">
        <img
          src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"
        />
      </nut-avatar>
      <nut-avatar size="small">
        <img
          src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"
        />
      </nut-avatar>
    </nut-cell>
    <h2>{{ translate('title2') }}</h2>
    <nut-cell>
      <nut-avatar shape="square"><My /></nut-avatar>
      <nut-avatar shape="round"><My /></nut-avatar>
    </nut-cell>
    <h2>{{ translate('title3') }}</h2>
    <nut-cell>
      <nut-avatar>
        <img
          src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"
        />
      </nut-avatar>
      <nut-avatar><My /></nut-avatar>
      <nut-avatar>王</nut-avatar>
    </nut-cell>
    <h2>{{ translate('title4') }}</h2>
    <nut-cell>
      <nut-avatar class="demo-avatar" bg-color="#FA2C19"><My color="#fff" /></nut-avatar>
      <nut-avatar color="rgb(245, 106, 0)" bg-color="rgb(253, 227, 207)">小明</nut-avatar>
    </nut-cell>
    <h2>{{ translate('title5') }}</h2>
    <nut-cell>
      <nut-badge value="8">
        <nut-avatar shape="square"><My /></nut-avatar>
      </nut-badge>
      <nut-badge dot>
        <nut-avatar shape="square"><My /></nut-avatar>
      </nut-badge>
    </nut-cell>
    <h2>{{ translate('title6') }}</h2>
    <nut-cell>
      <nut-avatar-group span="-4">
        <nut-avatar>
          <img
            src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"
          />
        </nut-avatar>
        <nut-avatar><My /></nut-avatar>
        <nut-avatar color="rgb(245, 106, 0)" bg-color="rgb(253, 227, 207)">小明</nut-avatar>
      </nut-avatar-group>
    </nut-cell>

    <nut-cell>
      <nut-avatar-group max-count="3" max-color="#fff" max-bgColor="#498ff2">
        <nut-avatar>
          <img
            src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"
          />
        </nut-avatar>
        <nut-avatar><My /></nut-avatar>
        <nut-avatar color="rgb(245, 106, 0)" bg-color="rgb(253, 227, 207)">小明</nut-avatar>
        <nut-avatar><My /></nut-avatar>
      </nut-avatar-group>
    </nut-cell>
    <h2>{{ translate('title7') }}</h2>
    <nut-cell>
      <nut-avatar-group max-count="3" zIndex="right" max-content="...">
        <nut-avatar>
          <img
            src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"
          />
        </nut-avatar>
        <nut-avatar><My /></nut-avatar>
        <nut-avatar color="rgb(245, 106, 0)" bg-color="rgb(253, 227, 207)">小明</nut-avatar>
        <nut-avatar><My /></nut-avatar>
      </nut-avatar-group>
    </nut-cell>

    <h2>{{ translate('title8') }}</h2>
    <nut-cell>
      <nut-avatar @click="handleClick"><My /></nut-avatar>
    </nut-cell>
  </div>
</template>
<script lang="ts">
import { createComponent } from '@/packages/utils/create';
const { createDemo, translate } = createComponent('cell');
import { useTranslate } from '@/sites/assets/util/useTranslate';
import { My } from '@nutui/icons-vue';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      title1: '支持三种尺寸：small、normal、large',
      title2: '支持两种形状：square、round',
      title3: '支持三种类型：图片、Icon 以及字符',
      title4: 'Icon 和字符型可以自定义颜色及背景色',
      title5: '带徽标的头像',
      title6: '头像组合展现',
      title7: '组合头像可控制层级方向',
      title8: '点击头像触发事件'
    },
    'en-US': {
      title1: 'Support three sizes：small、normal、large',
      title2: 'Support two shapes：square、round',
      title3: 'Support three types：picture、icon、letter',
      title4: 'Icon and letter types can have custom colors and background colors',
      title5: 'Avatar with badge',
      title6: 'Avatar group display',
      title7: 'Avatar group to control hierarchy direction',
      title8: 'Click on the avatar to trigger the event'
    }
  });
export default createDemo({
  components: { My },
  props: {},
  setup() {
    initTranslate();
    const handleClick = () => {
      console.log('Click Test');
    };
    return { handleClick, translate };
  }
});
</script>
<style lang="scss" scoped>
.nut-cell {
  align-items: flex-end;
  border-radius: 0;
  & > view {
    margin-right: 30px;
  }
}
.demo-avatar {
  color: #fff;
}
</style>
