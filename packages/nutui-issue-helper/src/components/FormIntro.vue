<template>
  <div class="form-intro">
    <el-link>
      <i18n id="intro" class="intro bg-faded" @click-modal="show = true" />
    </el-link>

    <VueModal
      v-if="show"
      :title="i18n('intro-modal-title')"
      class="medium"
      @close="show = false"
    >
      <div class="default-body">
        <i18n id="intro-modal" />
      </div>
    </VueModal>
  </div>
</template>

<script>
import modal from "../mixins/check-modal";

export default {
  mixins: [modal],

  data() {
    return {
      show: false,
    };
  },

  created() {
    this.checkModal("why-strict");
  },
};
</script>

<style lang="stylus" scoped>
@import "../style/imports"

.form-intro
  padding 24px 0
  margin 24px 0
  border-radius $br
  >>> .el-link.is-underline:hover:after {
    display none
  }
  .bg-faded
    color rgba(0,0,0,.85)
    font-weight 400
    >>> h2
      color rgba(0,0,0,.85)
      font-weight 500
      font-size 22px
    >>> a
      color #fa2c19
</style>
