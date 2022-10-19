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
                {{ i18n("similar-issues") }}:

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
                    {{ i18n("show-more") }}
                  </span>
                  <span v-else role="button" @click="showingAllIssues = false">
                    {{ i18n("show-less") }}
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
          <!-- <VueButton
            class="primary big"
            :label="i18n('create')"
            @click="create()"
          /> -->
          <el-button type="primary" @click="create()">{{
            i18n("create")
          }}</el-button>
        </div>
      </VueModal>
    </div>

    <footer class="app-footer">
      Inspired by
      <a
        href="https://new-issue.vuejs.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Vue Issue Helper </a
      >&nbsp;·&nbsp;
      <a href="https://github.com/jdf2e/nutui-issue-helper"> Source Code </a>
    </footer>
  </div>
</template>

<script>
import { repos } from "../config";
import { getQuery, updateQuery } from "../helpers";

import FormIntro from "./FormIntro.vue";
import AppHeader from "./AppHeader.vue";
import BugReport from "./BugReport.vue";
import FeatureRequest from "./FeatureRequest.vue";
import search from "../mixins/github-search";

export default {
  name: "App",

  mixins: [search],

  components: {
    FormIntro,
    AppHeader,
    BugReport,
    FeatureRequest,
  },

  data() {
    return {
      title: "",
      generated: {
        markdown: "",
        html: "",
      },
      show: false,
      preview: false,
      repo: null,
      repos,
      type: "bug-report",
      versions: {},
    };
  },

  computed: {
    types() {
      return (
        this.$lang && [
          { id: "bug-report", name: this.i18n("bug-report") },
          { id: "feature-request", name: this.i18n("feature-request") },
        ]
      );
    },
  },

  watch: {
    repo(value) {
      if (value) updateQuery({ repo: value.id });
    },

    type(value) {
      updateQuery({ type: value });
    },
  },

  created() {
    const { repo, type } = getQuery();
    this.repo = this.repos.find((r) => r.id === repo) || this.repos[0];
    this.type = type || "bug-report";
  },

  methods: {
    setLang(lang) {
      this.$lang = lang;
      updateQuery({ lang });
    },

    findIssues() {
      this.issues = [];
      if (this.title) {
        this.fetchIssues(this.title, { is: "issue", repo: this.repo.id });
      }
    },

    generate() {
      this.generated = this.$refs.content.generate();
      this.show = true;
    },

    create() {
      const title = encodeURIComponent(this.title);
      const body = encodeURIComponent(this.generated.markdown);
      const label =
        this.type === "feature-request" ? "&labels=feature%20request" : "";
      window.open(
        `https://github.com/${this.repo.id}/issues/new?title=${title}&body=${body}${label}`
      );
    },
  },
};
</script>

<style lang="stylus">
@import '@vue/ui/dist/vue-ui.css'
@import '../assets/style/common.styl'
</style>

<style lang="stylus" scoped>
@import "../style/imports"

.app
  background #f0f2f5
.container
  width $page-width
  max-width: calc(100% - 48px);
  margin 0 auto
  box-sizing border-box
  padding 0 24px
  background #fff
  >>> .vue-ui-button
    background: rgba(230,70,54,.1)
    border: 1px solid rgba(255,59,41,.2)
    color: #fa2c19

.first-row
  margin-bottom 24px

.common-fields
  margin-bottom 12px

.form-actions
  h-box()
  box-center()
  padding 24px 0
  >>> .vue-ui-button
    height auto
    padding: 11px 20px
    border-radius: 5px
    background-color: #F56C6C
    border-color: #F56C6C
    color: #fff
    font-size: 14px;
    font-weight 600
    &:hover
      background: #f78989;
      border-color: #f78989;
      color: #FFF;
.app-footer
  text-align center
  padding 24px 0
  font-size 14px
  a
    color #fa2c19

@import "../assets/style/form.styl"
</style>
