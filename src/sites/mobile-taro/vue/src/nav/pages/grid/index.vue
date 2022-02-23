<template>
  <div class="demo full">
    <h2>基础用法</h2>
    <nut-grid>
      <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
      <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
      <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
      <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
      <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
      <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
      <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
      <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
    </nut-grid>

    <h2>自定义列数</h2>
    <nut-grid :column-num="3">
      <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
      <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
      <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
    </nut-grid>

    <h2>正方形格子</h2>
    <nut-grid :column-num="3" square>
      <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
      <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
      <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
    </nut-grid>

    <h2>格子间距</h2>
    <nut-grid :gutter="10">
      <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
      <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
      <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
      <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
      <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
      <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
      <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
      <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
    </nut-grid>

    <h2>内容翻转</h2>
    <nut-grid reverse>
      <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
      <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
      <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
      <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
    </nut-grid>

    <h2>内容横向</h2>
    <nut-grid direction="horizontal">
      <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
      <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
      <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
      <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
    </nut-grid>

    <h2>图标颜色/大小</h2>
    <nut-grid :column-num="3" icon-color="#fa2c19">
      <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
      <nut-grid-item icon="dongdong" icon-color="#478EF2" icon-size="40" text="文字"></nut-grid-item>
      <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
    </nut-grid>

    <!-- <h2>页面导航</h2>
    <nut-grid :column-num="2">
      <nut-grid-item icon="home" text="路由跳转 ’/‘ " to="/"></nut-grid-item>
      <nut-grid-item icon="search" text="URL 跳转" url="https://jd.com"></nut-grid-item>
    </nut-grid> -->

    <h2>自定义内容</h2>
    <nut-grid :border="false">
      <nut-grid-item v-for="i in 4" :key="i">
        <nut-avatar
          size="large"
          icon="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
        />
      </nut-grid-item>
    </nut-grid>
  </div>
</template>
