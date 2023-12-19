<template>
  <div class="demo">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
#app {
  .demo {
    // height: 100%;
    min-height: 100vh;
    background: #f7f8fa;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 57px 17px 15px;
    box-sizing: border-box;
    &.full {
      min-height: 100vh;
      padding: 57px 0 0;
      h2 {
        padding-left: 27px;
      }
    }

    &.bg-w {
      background: #fff;
    }

    &::-webkit-scrollbar {
      width: 0;
      background: transparent;
    }
    > h2 {
      margin-top: 30px;
      margin-bottom: 10px;
      font-size: 14px;
      color: rgba(144, 156, 164, 1);
      padding: 0 10px;
      font-weight: normal;
    }
    > p {
      font-size: 12px;
    }

    .card {
      padding: 25px 18px;
      background: rgba(255, 255, 255, 1);
    }
  }
}
</style>
