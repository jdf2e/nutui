<template>
  <view class="demo">
    <h2>默认用法</h2>
    <nut-row>
      <nut-badge :value="8">
        <nut-avatar icon="my" shape="square"></nut-avatar>
      </nut-badge>
      <nut-badge :value="76">
        <nut-avatar icon="my" shape="square"></nut-avatar>
      </nut-badge>
      <nut-badge value="NEW">
        <nut-avatar icon="my" shape="square"></nut-avatar>
      </nut-badge>
      <nut-badge dot>
        <nut-avatar icon="my" shape="square"></nut-avatar>
      </nut-badge>
    </nut-row>
    <h2>最大值</h2>
    <nut-row>
      <nut-badge :value="200" :max="9">
        <nut-avatar icon="my" shape="square"></nut-avatar>
      </nut-badge>
      <nut-badge :value="200" :max="20">
        <nut-avatar icon="my" shape="square"></nut-avatar>
      </nut-badge>
      <nut-badge :value="200" :max="99">
        <nut-avatar icon="my" shape="square"></nut-avatar>
      </nut-badge>
    </nut-row>

    <h2>自定义颜色</h2>
    <nut-row>
      <nut-badge :value="8" color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)">
        <nut-avatar icon="my" shape="square"></nut-avatar>
      </nut-badge>
      <nut-badge :value="76" color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)">
        <nut-avatar icon="my" shape="square"></nut-avatar>
      </nut-badge>
      <nut-badge value="NEW" color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)">
        <nut-avatar icon="my" shape="square"></nut-avatar>
      </nut-badge>
      <nut-badge dot color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)">
        <nut-avatar icon="my" shape="square"></nut-avatar>
      </nut-badge>
    </nut-row>

    <h2>自定义徽标内容</h2>
    <nut-row>
      <nut-badge>
        <template #icons>
          <nut-icon name="Check" color="#ffffff" size="12"></nut-icon>
        </template>
        <nut-avatar icon="my" shape="square"></nut-avatar>
      </nut-badge>
      <nut-badge>
        <template #icons>
          <nut-icon name="link" color="#ffffff" size="12"></nut-icon>
        </template>
        <nut-avatar icon="my" shape="square"></nut-avatar>
      </nut-badge>
      <nut-badge>
        <template #icons>
          <nut-icon name="download" color="#ffffff" size="12"></nut-icon>
        </template>
        <nut-avatar icon="my" shape="square"></nut-avatar>
      </nut-badge>
    </nut-row>

    <h2>自定义位置</h2>
    <nut-row>
      <nut-badge :value="8" top="5" right="5">
        <nut-avatar icon="my" shape="square"></nut-avatar>
      </nut-badge>
      <nut-badge :value="76" top="10" right="10">
        <nut-avatar icon="my" shape="square"></nut-avatar>
      </nut-badge>
      <nut-badge value="NEW">
        <nut-avatar icon="my" shape="square"></nut-avatar>
      </nut-badge>
    </nut-row>

    <h2>独立展示</h2>
    <nut-row>
      <nut-badge :value="8"> </nut-badge>
      <nut-badge :value="76"> </nut-badge>
      <nut-badge value="NEW"> </nut-badge>
    </nut-row>
  </view>
</template>
<script lang="ts">
export default {
  setup() {}
};
</script>

<style lang="scss">
.nut-badge {
  margin-right: 40px;
}
</style>
