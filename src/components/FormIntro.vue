<template>
  <div class="form-intro">
    <i18n
      id="intro"
      class="intro bg-faded"
      @click-modal="show = true"
    />

    <VueModal
      v-if="show"
      :title="i18n('intro-modal-title')"
      class="medium"
      @close="show = false"
    >
      <div class="default-body">
        <i18n id="intro-modal"/>
      </div>
    </VueModal>
  </div>
</template>

<script>
import modal from '../mixins/check-modal'

export default {
  mixins: [modal],

  data () {
    return {
      show: false
    }
  },

  created () {
    this.checkModal('why-strict')
  }
}
</script>

<style lang="stylus" scoped>
@import "../style/imports"

.form-intro
  padding 24px
  margin 24px 0
  border-radius $br
  background lighten($vue-ui-color-light-neutral, 60%)
</style>
