<template>
  <Demo class="full">
    <h2>基础用法</h2>
    <nut-swipe>
      <nut-cell round-radius="0" title="左滑删除" />
      <template #right>
        <nut-button shape="square" style="height: 100%" type="danger">删除</nut-button>
      </template>
    </nut-swipe>
    <h2>禁止滑动</h2>
    <nut-swipe disabled>
      <nut-cell round-radius="0" title="禁止滑动" />
      <template #right>
        <nut-button shape="square" style="height: 100%" type="danger">删除</nut-button>
      </template>
    </nut-swipe>
    <h2>左右滑动</h2>
    <nut-swipe>
      <template #left>
        <nut-button shape="square" style="height: 100%" type="success">选择</nut-button>
      </template>
      <nut-cell round-radius="0" title="左滑右滑都可以哦" />
      <template #right>
        <nut-button shape="square" style="height: 100%" type="danger">删除</nut-button>
        <nut-button shape="square" style="height: 100%" type="info">收藏</nut-button>
      </template>
    </nut-swipe>
    <h2>异步控制 <nut-switch v-model="checked" @change="changSwitch" /></h2>
    <nut-swipe ref="refSwipe">
      <nut-cell title="异步打开关闭"></nut-cell>
      <template #right>
        <nut-button shape="square" style="height: 100%" type="danger">删除</nut-button>
      </template>
    </nut-swipe>
    <h2>自定义</h2>
    <nut-swipe>
      <template #left>
        <nut-button shape="square" style="height: 100%" type="success">选择</nut-button>
      </template>
      <nut-cell title="商品描述">
        <template #link>
          <nut-input-number v-model="number" />
        </template>
      </nut-cell>
      <template #right>
        <nut-button shape="square" style="height: 100%" type="danger">删除</nut-button>
        <nut-button shape="square" style="height: 100%" type="info">收藏</nut-button>
      </template>
    </nut-swipe>
    <h2>使用 SwipeGroup 控制 Swipe 之间互斥</h2>
    <nut-swipe-group lock>
      <nut-swipe name="11">
        <nut-cell round-radius="0" title="左滑删除" />
        <template #right>
          <nut-button shape="square" style="height: 100%" type="danger">删除</nut-button>
        </template>
      </nut-swipe>
      <nut-swipe name="22">
        <nut-cell round-radius="0" title="左滑删除" />
        <template #right>
          <nut-button shape="square" style="height: 100%" type="danger">删除</nut-button>
        </template>
      </nut-swipe>
      <div>
        <nut-swipe name="33">
          <nut-cell round-radius="0" title="左滑删除" />
          <template #right>
            <nut-button shape="square" style="height: 100%" type="danger">删除</nut-button>
          </template>
        </nut-swipe>
      </div>
    </nut-swipe-group>
  </Demo>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const refSwipe = ref<HTMLElement>();
const checked = ref(false);
const number = ref(0);
const changSwitch = (value: boolean) => {
  if (value) {
    refSwipe.value?.open('left');
  } else {
    refSwipe.value?.close();
  }
};
</script>
