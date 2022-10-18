import marked from 'marked'
import locales from './locales/index'
import qs from 'qs'

export default Vue => {
  // add locale and lang to root instance.
  // $lang is reactive.
  Vue.mixin({
    beforeCreate () {
      if (this.$root === this) {
        this.$locales = locales
        const query = qs.parse(window.location.search.slice(1))
        Vue.util.defineReactive(this, '$lang', query && query.lang || 'en')
      }
    }
  })

  const notFound = (lang, id) =>
    `[i18n content not found for { lang: "${lang}", id: "${id}" }`

  // global i18n method for simple phrases in text interpolations
  Vue.prototype.i18n = function (id) {
    const { $locales, $lang } = this.$root
    const locale = $locales[$lang]
    return locale[id] || notFound($lang, id)
  }

  // component for rendering an i18n locale markdown file
  Vue.component('i18n', {
    props: {
      id: {
        type: String,
        required: true
      }
    },
    render (h) {
      const { $locales, $lang } = this.$root
      const locale = $locales[$lang]
      const content = locale[this.id]
      return h('div', {
        domProps: {
          innerHTML: content
            ? marked(content.trim())
            : `<div style="color:red">${notFound($lang, this.id)}</div>`
        }
      })
    },
    mounted: processLinks,
    updated: processLinks
  })

  function processLinks () {
    [...this.$el.querySelectorAll('a')].forEach(a => {
      // avoid interferring with form input tab focus
      a.setAttribute('tabindex', '-1')
      const href = a.getAttribute('href')
      if (href) {
        if (href.charAt(0) !== '#') {
          // make external links open in new tab
          a.setAttribute('target', '_blank')
        } else {
          // hash link, emit event, we only have modals so far
          a.addEventListener('click', () => {
            this.$emit(`click-modal`)
          })
        }
      }
    })
  }
}
