const mds = import.meta.globEager("./*.md");

const resolved = {};
Object.keys(mds).forEach((key) => {
  resolved[key.replace(/^\.\//, "").replace(/\.md$/, "")] = mds[key].default;
});

export default {
  _label: "EN",

  ...resolved,

  // intro
  "intro-modal-title": "The reason behind our strict issue policy",

  // bug report
  "repo-title": "I am opening an issue for",
  "repo-subtitle": "Please make sure to file the issue at appropriate repo.",
  "type-title": "This is a",
  "title-title": "Issue title",

  "version-title-vue": "NutUI-vue version",
  "version-title-react": "NutUI-react version",
  "version-subtitle":
    "Check if the issue is reproducible with the latest stable version of Vue.",

  "nutui-repo-scenes-vue": "nutui-vue scenes",
  "nutui-repo-scenes-react": "nutui-react scenes",
  "nutui-repo-placeholder": "Please choose",
  "nutui-repo-boswer": "The browser and its version",
  "nutui-repo-boswer-placeholder": "Chrome(106.0.5249.119)",
  "nutui-repo-system": "System and its version",
  "nutui-repo-system-placeholder": "MacOS(12.6)",
  "nutui-repo-node": "Node version",
  "nutui-repo-use": "Reference method",
  "nutui-repo-execution": "Running Environment",
  "nutui-repo-vue": "Vue version",
  "nutui-repo-react": "React version",
  "nutui-repo-taro-info": "Taro environmental information",

  "repro-title": "Link to minimal reproduction",
  "repro-modal-title": "About Reproductions",
  "cli-no-repro": "If your issue cannot be reproduced with code, check here.",

  "node-and-os-title": "Node, npm/yarn and OS info",
  "node-and-os-subtitle":
    "Please specify node.js version, npm or yarn version, OS name & version. Example: Node 10.7.0 / yarn 1.7.0 / Windows 10",

  "cli-envinfo-title": "Environment Info",

  "browser-and-os-title": "Browser and OS info",
  "browser-and-os-subtitle":
    "Please specify browser name & version, OS name & version. Example: Chrome 62 / Windows 10",

  "steps-title": "Steps to reproduce",

  "expected-title": "What is expected?",
  "actual-title": "What is actually happening?",
  "extra-title": "Any additional comments? (optional)",
  "extra-subtitle":
    "e.g. some background/context of how you ran into this bug.",

  // feature request
  "rationale-title": "What problem does this feature solve?",

  "proposal-title": "What does the proposed API look like?",

  // preview
  preview: "Preview and Submit",
  "preview-title": "Issue Preview",
  create: "Create",

  // misc
  "bug-report": "Bug Report",
  "feature-request": "Feature Request",
  "similar-issues": "Similar issues",
  "show-more": "Show more",
  "show-less": "Show less",
  "drop-warn":
    `Unfortunately, image drop/uploading is not supported due to GitHub API ` +
    `limitations. However, you can create the issue first (which will take you ` +
    `to GitHub) and then drop the images needed.`,
};
