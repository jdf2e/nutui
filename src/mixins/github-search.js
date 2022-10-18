const API_ENDPOINT = 'https://api.github.com/search/issues'

function toArray(any) {
  return Array.isArray(any) ? any : [any]
}

/**
 * Maximum number of related issues to be shown by default
 * @type {Number}
 */
const MAX_SHOWN_ISSUE_COUNT = 5

export default {
  data: () => ({
    _issues: [],
    showingAllIssues: false
  }),

  computed: {
    issues: {
      get() {
        const issues = this.$data._issues
        return this.showingAllIssues
          ? issues
          : issues.slice(0, MAX_SHOWN_ISSUE_COUNT)
      },
      set(issues) {
        this.$data._issues = issues
      }
    },

    /**
     * Whether to show the "Show more/less" button after the similar issue list.
     * @return {Boolean}
     */
    showIssueToggleControl() {
      return this.$data._issues.length > MAX_SHOWN_ISSUE_COUNT
    }
  },

  methods: {
    async fetchIssues(term, filters) {
      const q =
        Object.keys(filters)
          .map((key) =>
            toArray(filters[key])
              .map((value) => `${key}:${value}`)
              .join(' ')
          )
          .join(' ') +
        ' ' +
        term

      try {
        const res = await fetch(API_ENDPOINT + `?q=${q}`)
        const { items } = await res.json()
        this.$data._issues = items || []
      } catch (e) {
        // ignore
      }
    }
  }
}
