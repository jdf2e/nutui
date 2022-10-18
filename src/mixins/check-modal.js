export default {
  watch: {
    show (val) {
      if (!val) {
        const newUrl = window.location.origin + '/' + window.location.search
        window.history.pushState({
          path: newUrl
        }, '', newUrl)
      }
    }
  },

  methods: {
    checkModal (id) {
      this.show = window.location.hash === `#${id}`
    }
  }
}
