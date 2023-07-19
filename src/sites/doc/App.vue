<template>
  <router-view />
</template>

<style lang="scss">
::selection {
  background: $doc-default-color;
  color: #fff;
}
#doc {
  background: #fff;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
