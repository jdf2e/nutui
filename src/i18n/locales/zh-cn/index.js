const mds = import.meta.globEager('./*.md')

const resolved = {}
Object.keys(mds).forEach((key) => {
  resolved[key.replace(/^\.\//, '').replace(/\.md$/, '')] = mds[key].default
})

export default {
  _label: '中文',

  ...resolved,

  // intro
  'intro-modal-title': '为什么要有这么严格的 issue 规定',

  // bug report
  'repo-title': '相关库',
  'repo-subtitle': '请确保将 issue 发往相关的仓库。',
  'type-title': '这是一个',
  'title-title': 'Issue 标题',

  'version-title': '版本',
  'version-subtitle': '请检查问题是否存在于 Vue 的最新版本中。',

  'repro-title': '重现链接',
  'repro-modal-title': '关于重现',
  'cli-no-repro': '如果你的问题无法用代码重现，点选这里。',

  'node-and-os-title': 'Node.js、npm/yarn 以及操作系统信息',
  'node-and-os-subtitle': '请写明 Node.js 版本、npm/yarn 的版本、操作系统的名称以及版本，例如: Node 10.7.0 / yarn 1.7.0 / Windows 10',

  'cli-envinfo-title': '环境信息',

  'browser-and-os-title': '浏览器和操作系统信息',
  'browser-and-os-subtitle': '请写明浏览器和操作系统的名称/版本，例如: Chrome 62 / Windows 10',

  'steps-title': '重现步骤',

  'expected-title': '期望的结果是什么？',
  'actual-title': '实际的结果是什么？',
  'extra-title': '补充说明（可选）',
  'extra-subtitle': '比如：遇到这个 bug 的业务场景、上下文。',

  // feature request
  'rationale-title': '这个功能解决了什么问题？',

  'proposal-title': '你期望的 API 是怎样的？',

  // preview
  'preview': '预览',
  'preview-title': '预览',
  'create': '创建 Issue',

  // misc
  'bug-report': '错误报告',
  'feature-request': '功能要求',
  'similar-issues': '类似的 issue',
  'show-more': '展开',
  'show-less': '收起',
  'drop-warn': '由于 GitHub API 的限制，这里不支持图片拖拽上传功能。但是你可以先创建 issue，然后在 GitHub 的界面中上传需要的图片。'
}
