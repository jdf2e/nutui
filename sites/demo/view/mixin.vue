<script>
import Vue from "vue";
Vue.mixin({
  data() {
    return {
      isMobile: false,
      cacheHasNewVersion:false
    };
  },
  methods: {
    checkIsMob() {
      if (window.navigator.userAgent.match(
          /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|IEMobile|MQQBrowser|JUC|Windows Phone)/i)) {
        return true;
      } else {
        return false;
      }
    }
  },
  mounted() {
    this.isMobile = this.checkIsMob();
  }
});
</script>