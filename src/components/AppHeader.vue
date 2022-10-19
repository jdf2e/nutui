<template>
  <nav class="app-header">
    <div class="container">
      <a class="brand" href="#">
        <img
          class="logo"
          src="../assets/images/logo.png"
          alt="Vue's logo"
          height="24"
        />
        NutUI Issue Helper
      </a>

      <ul class="nav">
        <li v-for="(locale, key) in $root.$locales" :key="key" class="nav-item">
          <a
            class="nav-link"
            :class="{ active: lang === key }"
            @click="$emit('change-lang', key)"
          >
            {{ locale._label }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  props: ["lang"],
};
</script>

<style lang="stylus" scoped>
@import "../style/imports"

.app-header
  background #fff

  &,
  .container,
  .brand,
  .nav
    h-box()
    box-center()

  .container
    width $page-width
    max-width: calc(100% - 48px)
    justify-content space-between
    padding 24px 0
    box-sizing border-box

  .brand
    color #2c3e50
    font-size 18px
    .logo
      margin-right 8px

  .nav
    margin 0

  .nav-item
    list-style none
  .nav-item + .nav-item
    margin-left 8px

  .nav-link
    cursor default
    &:not(.active)
      cursor pointer
      color $vue-ui-color-dark
    &.active
      color #fa2c19
</style>
