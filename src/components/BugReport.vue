<template>
  <div class="bug-report" style="margin:0">
    <div class="vue-ui-grid col-2 default-gap">
      <VueFormField
        :title="i18n('version-title')"
        :subtitle="i18n('version-subtitle')"
      >
        <VueTypeAhead
          v-model="attrs.version"
          :suggestions="suggestions"
          :loading="loadingVersion"
          show-all
          show-max="30"
          restrict-choice
          required
        />
      </VueFormField>

      <VueFormField
        v-if="repo.id === 'vuejs/devtools'"
        :title="i18n('browser-and-os-title')"
      >
        <VueInput
          v-model="attrs.browserAndOS"
          required
        />

        <i18n
          slot="subtitle"
          id="browser-and-os-subtitle"
        />
      </VueFormField>

      <template v-else>
        <VueFormField
          v-if="isCLI && doesNotSupportVueInfo"
          :title="i18n('node-and-os-title')"
        >
          <VueInput
            v-model="attrs.nodeAndOS"
            required
          />

          <i18n
            slot="subtitle"
            id="node-and-os-subtitle"
          />
        </VueFormField>

        <VueFormField
          v-else-if="isCLI"
          :title="i18n('cli-envinfo-title')"
          class="span-2"
        >
          <VueInput
            v-model="attrs.cliEnvInfo"
            type="textarea"
            required
          />

          <i18n
            slot="subtitle"
            id="cli-envinfo-subtitle"
          />
        </VueFormField>

        <VueFormField :title="i18n('repro-title')">
          <VueInput
            type="url"
            v-model="attrs.reproduction"
            :disabled="isCLI && reproNotAvailable"
            required
          />

          <template slot="subtitle">
            <i18n
              :id="repo.reproSubtitleId || 'repro-subtitle-links'"
            />
            <VueSwitch v-if="isCLI" v-model="reproNotAvailable">
              <i18n id="cli-no-repro"/>
            </VueSwitch>
            <i18n
              id="repro-subtitle"
              @click-modal="show = true"
            />
          </template>
        </VueFormField>
      </template>

      <VueFormField
        class="span-2"
        :title="i18n('steps-title')"
      >
        <VueInput
          type="textarea"
          rows="4"
          v-model="attrs.steps"
          required
        />
        <i18n slot="subtitle" id="steps-subtitle"/>
      </VueFormField>

      <VueFormField
        :title="i18n('expected-title')"
      >
        <VueInput
          type="textarea"
          rows="4"
          v-model="attrs.expected"
          required
        />
      </VueFormField>

      <VueFormField
        :title="i18n('actual-title')"
      >
        <VueInput
          type="textarea"
          rows="4"
          v-model="attrs.actual"
          required
        />
      </VueFormField>

      <VueFormField
        class="span-2"
        :title="i18n('extra-title')"
        :subtitle="i18n('extra-subtitle')"
      >
        <VueInput
          type="textarea"
          rows="4"
          v-model="attrs.extra"
        />
      </VueFormField>
    </div>

    <VueModal
      v-if="show"
      :title="i18n('repro-modal-title')"
      class="medium"
      @close="show = false"
    >
      <div class="default-body">
        <i18n id="repro-modal"/>
      </div>
    </VueModal>
  </div>
</template>

<script>
import { gt, lt } from 'semver'
import { generate } from '../helpers'
import modal from '../mixins/check-modal'

function getReproLinkTitle(link) {
  try {
    const url = new URL(link)
    return url.href.length < 30
      ? url.href
      : url.hostname.length + url.pathname.length < 30
        ? url.hostname + url.pathname
        : url.hostname
  } catch (e) {
    // return none
  }
  return 'None'
}

export default {
  props: {
    repo: {
      type: Object,
      required: true
    }
  },

  mixins: [modal],

  data() {
    return {
      show: false,
      attrs: {
        version: '',
        reproduction: '',
        steps: '',
        expected: '',
        actual: '',
        extra: '',
        browserAndOS: '',
        nodeAndOS: '',
        cliEnvInfo: ''
      },
      versions: [],
      loadingVersion: false,
      reproNotAvailable: false
    }
  },

  computed: {
    suggestions() {
      return this.versions
        .slice()
        .sort((a, b) => (gt(a.value, b.value) ? -1 : 1))
    },

    isCLI() {
      return this.repo.id === 'vuejs/vue-cli'
    },

    doesNotSupportVueInfo() {
      return this.attrs.version && lt(this.attrs.version, '3.2.0')
    }
  },

  watch: {
    repo() {
      this.versions = []
      this.attrs.version = ''
      this.fetchVersions()
    }
  },

  created() {
    this.fetchVersions()
    this.checkModal('why-repro')
  },

  methods: {
    async fetchVersions(page = 1) {
      this.loadingVersion = true
      const repoId = this.repo.id
      const response = await fetch(
        `https://api.github.com/repos/${repoId}/releases?page=${page}&per_page=100`
      )
      const releases = await response.json()

      if (this.repo.id !== repoId) return

      if (!releases || !(releases instanceof Array)) return false

      this.versions = this.versions.concat(
        releases.map(r => ({
          value: /^v/.test(r.tag_name) ? r.tag_name.slice(1) : r.tag_name
        }))
      )

      const link = response.headers.get('Link')

      if (link && link.indexOf('rel="next"') > -1) {
        await this.fetchVersions(page + 1)
      } else {
        this.loadingVersion = false
      }

      // set current version to the latest
      if (this.suggestions.length) {
        this.attrs.version = this.suggestions[0].value
      }
    },

    generate() {
      const {
        version,
        reproduction,
        steps,
        expected,
        actual,
        extra,
        browserAndOS,
        nodeAndOS,
        cliEnvInfo
      } = this.attrs

      return generate(
        `
### Version
${version}

${
          reproduction
            ? `### Reproduction link
[${getReproLinkTitle(reproduction)}](${reproduction})`
            : ``
        }

${
          browserAndOS
            ? `### Browser and OS info
${browserAndOS}`
            : ``
        }

${
          nodeAndOS
            ? `### Node and OS info
${nodeAndOS}`
            : ``
        }

${
          cliEnvInfo
            ? `### Environment info
\`\`\`
${cliEnvInfo}
\`\`\`
`
            : ``
        }

### Steps to reproduce
${steps}

### What is expected?
${expected}

### What is actually happening?
${actual}

${extra ? `---\n${extra}` : ''}
  `.trim()
      )
    }
  }
}
</script>
