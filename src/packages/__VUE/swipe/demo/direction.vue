<template>
  <nut-swipe>
    <template #left>
      <nut-button shape="square" style="height: 100%" type="success">Btn0</nut-button>
    </template>
    <nut-cell round-radius="0" title="Swipe Left or Right" />
    <template #right>
      <nut-button shape="square" style="height: 100%" type="danger">Btn1</nut-button>
      <nut-button shape="square" style="height: 100%" type="info">Btn2</nut-button>
    </template>
  </nut-swipe>
</template>
