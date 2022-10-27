<template>
  <div class="bug-report" style="margin: 0">
    <div class="vue-ui-grid col-2 default-gap">
      <VueFormField :title="i18n('nutui-repo-scenes')">
        <VueSelect
          v-model="attrs.scenes"
          :label="attrs.scenes.name"
          :placeholder="i18n('nutui-repo-placeholder')"
        >
          <VueSelectButton
            v-for="option of nutuiScenes"
            :key="option.id"
            :value="option"
            :label="option.name"
          >
          </VueSelectButton>
        </VueSelect>
      </VueFormField>
      <VueFormField :title="i18n('version-title')">
        <VueTypeAhead
          v-model="attrs.version"
          :suggestions="suggestions"
          :loading="loadingVersion"
          show-all
          show-max="300"
          restrict-choice
          required
        />
      </VueFormField>
    </div>
    <div
      :class="[
        'vue-ui-grid',
        'default-gap',
        attrs.scenes.name != 'H5' ? 'col-2' : '',
      ]"
    >
      <VueFormField :title="i18n('nutui-repo-vue')">
        <VueTypeAhead
          v-model="attrs.versionVue"
          :suggestions="suggestionsVue"
          :loading="loadingVersionVue"
          show-all
          show-max="300"
          restrict-choice
          required
        />
      </VueFormField>
      <VueFormField
        :title="i18n('nutui-repo-execution')"
        v-if="attrs.scenes.name != 'H5'"
      >
        <VueSelect
          v-model="attrs.runEnvVal"
          :label="attrs.runEnvVal.name"
          :placeholder="i18n('nutui-repo-placeholder')"
        >
          <VueSelectButton
            v-for="option of runEnv"
            :key="option.id"
            :value="option"
            :label="option.name"
          >
          </VueSelectButton>
        </VueSelect>
      </VueFormField>
    </div>
    <div class="vue-ui-grid col-2 default-gap">
      <VueFormField :title="i18n('nutui-repo-use')">
        <VueSelect
          v-model="attrs.useWay"
          :label="attrs.useWay.name"
          :placeholder="i18n('nutui-repo-placeholder')"
        >
          <VueSelectButton
            v-for="option of wayList"
            :key="option.id"
            :value="option"
            :label="option.name"
          >
          </VueSelectButton>
        </VueSelect>
      </VueFormField>

      <VueFormField :title="i18n('nutui-repo-node')">
        <VueInput
          v-model="attrs.nodejs"
          required
          autofocus
          placeholder="16.18.0"
        />
      </VueFormField>
    </div>
    <div class="vue-ui-grid col-2 default-gap">
      <VueFormField :title="i18n('nutui-repo-boswer')">
        <VueInput
          v-model="attrs.boswer"
          required
          autofocus
          :placeholder="i18n('nutui-repo-boswer-placeholder')"
        />
      </VueFormField>

      <VueFormField :title="i18n('nutui-repo-system')">
        <VueInput
          v-model="attrs.system"
          required
          autofocus
          :placeholder="i18n('nutui-repo-system-placeholder')"
        />
      </VueFormField>
    </div>
    <VueFormField :title="i18n('repro-title')">
      <VueInput
        type="url"
        v-model="attrs.reproduction"
        :disabled="isCLI && reproNotAvailable"
        required
      />
      <template slot="subtitle">
        <i18n :id="repo.reproSubtitleId || 'repro-subtitle-links'" />
        <VueSwitch v-if="isCLI" v-model="reproNotAvailable">
          <i18n id="cli-no-repro" />
        </VueSwitch>
        <i18n id="repro-subtitle" @click-modal="show = true" />
      </template>
    </VueFormField>

    <VueFormField class="span-2" :title="i18n('steps-title')">
      <VueInput type="textarea" rows="4" v-model="attrs.steps" required />
      <i18n slot="subtitle" id="steps-subtitle" />
    </VueFormField>

    <VueFormField :title="i18n('expected-title')">
      <VueInput type="textarea" rows="4" v-model="attrs.expected" required />
    </VueFormField>

    <VueFormField :title="i18n('actual-title')">
      <VueInput type="textarea" rows="4" v-model="attrs.actual" required />
    </VueFormField>

    <VueFormField
      class="span-2 span-or"
      :title="i18n('extra-title')"
      :subtitle="i18n('extra-subtitle')"
    >
      <VueInput type="textarea" rows="4" v-model="attrs.extra" />
    </VueFormField>

    <!-- <VueModal
      v-if="show"
      :title="i18n('repro-modal-title')"
      class="medium"
      @close="show = false"
    >
      <div class="default-body">
        <i18n id="repro-modal" />
      </div>
    </VueModal> -->
    <el-dialog
      custom-class="repro-dialog"
      :title="i18n('repro-modal-title')"
      :visible.sync="show"
      width="50%"
      @close="show = false"
    >
      <div class="default-body">
        <i18n id="repro-modal" />
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { gt, lt } from "semver";
import { generate } from "../helpers";
// import modal from "../mixins/check-modal";

function getReproLinkTitle(link) {
  try {
    const url = new URL(link);
    return url.href.length < 30
      ? url.href
      : url.hostname.length + url.pathname.length < 30
      ? url.hostname + url.pathname
      : url.hostname;
  } catch (e) {
    // return none
  }
  return "None";
}

export default {
  props: {
    repo: {
      type: Object,
      required: true,
    },
  },

  // mixins: [modal],

  data() {
    return {
      nutuiScenes: [
        { id: "h5-env", name: "H5" },
        { id: "wechat-env", name: "小程序" },
      ],
      wayList: [
        { id: "npm", name: "npm" },
        { id: "cdn", name: "cdn" },
      ],
      runEnv: [
        { id: "h5", name: "dev:h5" },
        { id: "weapp", name: "dev:weapp" },
        { id: "alipay", name: "dev:alipay" },
        { id: "jd", name: "dev:jd" },
        { id: "rn", name: "dev:rn" },
        { id: "qq", name: "dev:qq" },
        { id: "tt", name: "dev:tt" },
        { id: "swan", name: "dev:swan" },
      ],
      show: false,
      attrs: {
        scenes: { id: "h5-env", name: "H5" },
        version: "",
        versionVue: "",
        runEnvVal: { id: "h5", name: "dev:h5" },
        useWay: { id: "npm", name: "npm" },
        nodejs: "",
        boswer: "",
        system: "",
        reproduction: "",
        steps: "",
        expected: "",
        actual: "",
        extra: "",
        browserAndOS: "",
        nodeAndOS: "",
        cliEnvInfo: "",
      },
      versions: [],
      loadingVersion: false,
      versionsVue: [],
      loadingVersionVue: false,
      reproNotAvailable: false,
    };
  },

  computed: {
    suggestions() {
      return this.versions
        .slice()
        .sort((a, b) => (gt(a.value, b.value) ? -1 : 1));
    },
    suggestionsVue() {
      return this.versionsVue
        .slice()
        .sort((a, b) => (gt(a.value, b.value) ? -1 : 1));
    },

    isCLI() {
      return this.repo.id === "vuejs/vue-cli";
    },

    doesNotSupportVueInfo() {
      return this.attrs.version && lt(this.attrs.version, "3.2.0");
    },
  },

  watch: {
    repo() {
      this.versions = [];
      this.attrs.version = "";
      this.fetchVersions();
    },
  },

  created() {
    this.fetchVersions();
    this.fetchVueVersions();
    // this.checkModal("why-repro");
  },

  methods: {
    async fetchVersions(page = 1) {
      this.loadingVersion = true;
      const repoId = this.repo.id;
      const response = await fetch(
        "https://registry.npmmirror.com/@nutui/nutui"
        // `https://api.github.com/repos/jdf2e/nutui/releases?page=1&per_page=100`
      );
      const result = await response.json();
      const releases = await Object.keys(result.versions);

      if (this.repo.id !== repoId) return;

      if (!releases || !(releases instanceof Array)) return false;

      this.versions = this.versions.concat(
        releases.map((r) => ({
          value: r,
          // value: /^v/.test(r.tag_name) ? r.tag_name.slice(1) : r.tag_name,
        }))
      );

      const link = response.headers.get("Link");

      if (link && link.indexOf('rel="next"') > -1) {
        await this.fetchVersions(page + 1);
      } else {
        this.loadingVersion = false;
      }

      // set current version to the latest
      if (this.suggestions.length) {
        this.attrs.version = this.suggestions[0].value;
      }
    },

    async fetchVueVersions() {
      this.loadingVersionVue = true;
      const response = await fetch(
        "https://registry.npmmirror.com/vue"
        // `https://api.github.com/repos/jdf2e/nutui/releases?page=1&per_page=100`
      );
      const result = await response.json();
      const releases = await Object.keys(result.versions);

      this.versionsVue = this.versionsVue.concat(
        releases.map((r) => ({
          value: r,
        }))
      );

      this.loadingVersionVue = false;
      // set current version to the latest
      if (this.suggestionsVue.length) {
        this.attrs.versionVue = this.suggestionsVue[0].value;
      }
    },

    findNodejs() {},

    generate() {
      const {
        scenes,
        version,
        versionVue,
        runEnvVal,
        useWay,
        nodejs,
        boswer,
        system,
        reproduction,
        steps,
        expected,
        actual,
        extra,
      } = this.attrs;

      return generate(
        `
        ### NutUI scenes（nutui 场景）
${scenes.name}

### NutUI version（nutui 版本）
${version}

### Vue version（vue 版本）
${versionVue}

${
  scenes.name != "H5"
    ? `
### Operating environment（运行环境）
${runEnvVal.name}
`
    : ""
}

### Citation method（引用方式）
${useWay.name}

### Node version（node 版本）
${nodejs}

### Browser and its version（浏览器及其版本）
${boswer}

### System and its version（系统及其版本）
${system}

### Reproduction link（重现链接）
${`[${getReproLinkTitle(reproduction)}](${reproduction})`}

### Steps to reproduce（重现步骤）
${steps}

### What is expected?（期望的结果是什么？）
${expected}

### What is actually happening?（实际的结果是什么？）
${actual}

${
  extra
    ? `### Remarks（补充说明）
${actual}`
    : ""
}
  `.trim()
      );
    },
  },
};
</script>

<style lang="stylus" scoped>
.bug-report
  >>> .repro-dialog
    .el-dialog__body
      h5
        color rgba(0,0,0,.85)
        font-weight 600
      p
        color rgba(0,0,0,.85)
      a
        color #fa2c19
  >>> .vue-ui-grid
    margin-bottom 24px
  >>> .content
    .vue-ui-button
      color: rgba(0,0,0,0.85)
      background: #fff
      border 1px solid #d9d9d9
    .vue-ui-dropdown.open .dropdown-trigger .vue-ui-button:not(.ghost)
      background: #f6f6f6
    .bug-report[data-v-78886cc8] .vue-ui-dropdown.open .dropdown-trigger .vue-ui-button:not(.ghost)
      background: #fff
.vue-ui-group:not(.has-indicator) .vue-ui-group-button.vue-ui-button.selected:not(.primary):not(.accent):not(.danger):not(.warning):not(.info):not(.success):not(.flat):not(.ghost):hover,
.vue-ui-button.flat:not(.ghost):hover:not(.ghost):hover
  background: #f1f1f1
.vue-ui-group:not(.has-indicator) .vue-ui-group-button.vue-ui-button.selected:not(.primary):not(.accent):not(.danger):not(.warning):not(.info):not(.success):not(.flat)
  color: #333
  background: #f1f1f1
</style>
