<template>
  <div id="app" class="app">
    <AppHeader :lang="$lang" @change-lang="setLang" />

    <div class="container">
      <form class="main-form" @submit.prevent="generate">
        <FormIntro />

        <div class="common-fields vue-ui-grid col-2 default-gap">
          <VueFormField
            :title="i18n('repo-title')"
            :subtitle="i18n('repo-subtitle')"
            class="first-row"
          >
            <VueSelect v-model="repo">
              <VueSelectButton
                v-for="option of repos"
                :key="option.id"
                :value="option"
                :label="option.name"
              />
            </VueSelect>
          </VueFormField>

          <VueFormField :title="i18n('type-title')" class="first-row">
            <VueGroup v-model="type" class="extend">
              <VueGroupButton
                v-for="option of types"
                :key="option.id"
                :value="option.id"
              >
                {{ option.name }}
              </VueGroupButton>
            </VueGroup>
          </VueFormField>

          <VueFormField class="span-2" :title="i18n('title-title')">
            <VueInput v-model="title" required autofocus @blur="findIssues" />
            <template slot="subtitle">
              <div class="similar-issues" v-if="issues.length">
                {{ i18n('similar-issues') }}:

                <ul>
                  <li v-for="issue in issues" :key="issue.id">
                    <a
                      class="issue"
                      :href="issue.html_url"
                      target="_blank"
                      rel="noreferrer"
                      tabindex="-1"
                    >
                      {{ issue.title }}
                    </a>
                  </li>
                </ul>

                <p v-if="showIssueToggleControl">
                  <span
                    v-if="!showingAllIssues"
                    role="button"
                    @click="showingAllIssues = true"
                  >
                    {{ i18n('show-more') }}
                  </span>
                  <span v-else role="button" @click="showingAllIssues = false">
                    {{ i18n('show-less') }}
                  </span>
                </p>
              </div>
            </template>
          </VueFormField>
        </div>

        <!-- content component -->
        <keep-alive>
          <component :is="type" ref="content" :repo="repo" />
        </keep-alive>

        <div class="form-actions">
          <VueButton
            type="submit"
            class="primary big"
            :label="i18n('preview')"
          />
        </div>
      </form>

      <VueModal
        v-if="show"
        :title="i18n('preview-title')"
        class="medium"
        @close="show = false"
      >
        <div class="default-body" v-html="generated.html" />

        <div slot="footer" class="actions">
          <VueButton
            class="primary big"
            :label="i18n('create')"
            @click="create()"
          />
        </div>
      </VueModal>
    </div>

    <footer class="app-footer">
      <p>&hellip;</p>
      <small>
        Source on
        <a target="_blank" href="https://github.com/vuejs/vue-issue-helper"
          >GitHub</a
        >
      </small>
    </footer>
  </div>
</template>

<script lang="babel">
import { repos } from '../config'
import { getQuery, updateQuery } from '../helpers'

import FormIntro from './FormIntro.vue'
import AppHeader from './AppHeader.vue'
import BugReport from './BugReport.vue'
import FeatureRequest from './FeatureRequest.vue'
import search from '../mixins/github-search'

export default {
  name: 'App',

  mixins: [search],

  components: {
    FormIntro,
    AppHeader,
    BugReport,
    FeatureRequest
  },

  data () {
    return {
      title: '',
      generated: {
        markdown: '',
        html: ''
      },
      show: false,
      preview: false,
      repo: null,
      repos,
      type: 'bug-report',
      versions: {},
    }
  },

  computed: {
    types () {
      return this.$lang && [
        { id: 'bug-report', name: this.i18n('bug-report') },
        { id: 'feature-request', name: this.i18n('feature-request') }
      ]
    }
  },

  watch: {
    repo (value) {
      if (value) updateQuery({ repo: value.id })
    },

    type (value) {
      updateQuery({ type: value })
    }
  },

  created () {
    const { repo, type } = getQuery()
    this.repo = this.repos.find(r => r.id === repo) || this.repos[0]
    this.type = type || 'bug-report'
  },

  methods: {
    setLang (lang) {
      this.$lang = lang
      updateQuery({ lang })
    },

    findIssues () {
      this.issues = []
      if (this.title) {
        this.fetchIssues(this.title, { is: 'issue', repo: this.repo.id })
      }
    },

    generate () {
      this.generated = this.$refs.content.generate()
      this.show = true
    },

    create () {
      const title = encodeURIComponent(this.title)
      const body = encodeURIComponent(this.generated.markdown)
      const label = this.type === 'feature-request' ? '&labels=feature%20request' : ''
      window.open(`https://github.com/${this.repo.id}/issues/new?title=${title}&body=${body}${label}`)
    },
  },
}
</script>

<style lang="stylus">
@import '@vue/ui/dist/vue-ui.css'
</style>

<style lang="stylus" scoped>
@import "../style/imports"

.container
  max-width $page-width
  margin 0 auto
  box-sizing border-box
  padding 0 24px

.first-row
  margin-bottom 24px

.common-fields
  margin-bottom 12px

.form-actions
  h-box()
  box-center()
  margin 24px 0

.app-footer
  text-align center
  margin 24px 0
</style>
