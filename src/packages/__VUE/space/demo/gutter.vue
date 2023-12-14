<template>
  <!-- gutter -->
  <nut-space :gutter="20" style="margin-bottom: 10px">
    <nut-button>Button</nut-button>
    <nut-button>Button</nut-button>
    <nut-button>Button</nut-button>
  </nut-space>
  <!-- css variable -->
  <nut-space :style="{ '--nut-space-gap': '30px' }">
    <nut-button>Button</nut-button>
    <nut-button>Button</nut-button>
    <nut-button>Button</nut-button>
  </nut-space>
</template>
