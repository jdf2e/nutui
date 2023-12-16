<template>
  <nut-swipe-group lock>
    <nut-swipe name="11">
      <nut-cell round-radius="0" title="Swipe Left" />
      <template #right>
        <nut-button shape="square" style="height: 100%" type="danger">Button</nut-button>
      </template>
    </nut-swipe>
    <nut-swipe name="22">
      <nut-cell round-radius="0" title="Swipe Left" />
      <template #right>
        <nut-button shape="square" style="height: 100%" type="danger">Button</nut-button>
      </template>
    </nut-swipe>
    <div>
      <nut-swipe name="33">
        <nut-cell round-radius="0" title="Swipe Left" />
        <template #right>
          <nut-button shape="square" style="height: 100%" type="danger">Button</nut-button>
        </template>
      </nut-swipe>
    </div>
  </nut-swipe-group>
</template>
