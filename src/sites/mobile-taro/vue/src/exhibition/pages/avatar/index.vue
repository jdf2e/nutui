<template>
  <div class="demo full">
    <h2>支持三种尺寸：small、normal、large</h2>
    <nut-cell>
      <nut-avatar
        size="large"
        url="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
      >
      </nut-avatar>
      <nut-avatar
        size="normal"
        url="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
      >
      </nut-avatar>
      <nut-avatar
        size="small"
        url="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
      >
      </nut-avatar>
    </nut-cell>
    <h2>支持两种形状：square、round</h2>
    <nut-cell>
      <nut-avatar icon="my" shape="square"></nut-avatar>
      <nut-avatar icon="my" shape="round"></nut-avatar>
    </nut-cell>
    <h2>支持三种类型：图片、Icon 以及字符</h2>
    <nut-cell>
      <nut-avatar
        url="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
      >
      </nut-avatar>
      <nut-avatar icon="my"></nut-avatar>
      <nut-avatar>N</nut-avatar>
    </nut-cell>
    <h2>Icon 和字符型可以自定义颜色及背景色</h2>
    <nut-cell>
      <nut-avatar class="demo-avatar" icon="my" color="#fff" bg-color="#FA2C19"></nut-avatar>
      <nut-avatar color="rgb(245, 106, 0)" bg-color="rgb(253, 227, 207)">U</nut-avatar>
    </nut-cell>
    <h2>带徽标的头像</h2>
    <nut-cell>
      <nut-badge value="8">
        <nut-avatar icon="my" shape="square"></nut-avatar>
      </nut-badge>
      <nut-badge dot>
        <nut-avatar icon="my" shape="square"></nut-avatar>
      </nut-badge>
    </nut-cell>
    <h2>头像组合展现</h2>
    <nut-cell>
      <nut-avatar-group span="-4">
        <nut-avatar
          url="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"
          type="round"
        >
        </nut-avatar>
        <nut-avatar icon="my"></nut-avatar>
        <nut-avatar color="rgb(245, 106, 0)" bg-color="rgb(253, 227, 207)">U</nut-avatar>
      </nut-avatar-group>
    </nut-cell>

    <nut-cell>
      <nut-avatar-group max-count="3" max-color="#fff" max-bgColor="#498ff2">
        <nut-avatar
          url="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"
        >
        </nut-avatar>
        <nut-avatar icon="my"></nut-avatar>
        <nut-avatar color="rgb(245, 106, 0)" bg-color="rgb(253, 227, 207)">U</nut-avatar>
        <nut-avatar icon="my"></nut-avatar>
      </nut-avatar-group>
    </nut-cell>
    <h2>组合头像可控制层级方向</h2>
    <nut-cell>
      <nut-avatar-group max-count="3" zIndex="right" max-content="...">
        <nut-avatar
          url="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"
        >
        </nut-avatar>
        <nut-avatar icon="my"></nut-avatar>
        <nut-avatar color="rgb(245, 106, 0)" bg-color="rgb(253, 227, 207)">U</nut-avatar>
        <nut-avatar icon="my"></nut-avatar>
      </nut-avatar-group>
    </nut-cell>

    <h2>点击头像触发事件</h2>
    <nut-cell>
      <nut-avatar icon="my" @active-avatar="handleClick"></nut-avatar>
    </nut-cell>
  </div>
</template>
<script lang="ts">
export default {
  props: {},
  setup() {
    const handleClick = () => {
      console.log('触发点击头像');
    };
    const onError = () => {
      console.log('触发error头像');
    };

    return { handleClick, onError };
  }
};
</script>
<style lang="scss">
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
