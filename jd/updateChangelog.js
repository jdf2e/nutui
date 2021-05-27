const fs = require('fs');
const path = require('path');
const changelog = fs.readFileSync(
  path.join(__dirname, '../CHANGELOG.md'),
  'utf8'
);
const typeList = [
  { type: 'fix', icon: '🐛' },
  { type: 'feat', icon: '✨' },
  { type: 'chore', icon: '👷' },
  { type: 'docs', icon: '📝 ' },
  { type: 'style', icon: '💄' },
  { type: 'refactor', icon: '🎨' },
  { type: 'perf', icon: '⚡' },
  { type: 'test', icon: '✅ ' }
];
const replaceMd = {
  content: '',
  setContent(content) {
    replaceMd.content = content;
    return replaceMd;
  },
  getContent() {
    return replaceMd.content;
  },
  //版本号改成二级标题
  changeTitle() {
    replaceMd.content = replaceMd.content.replace(
      /### (?=\[\d\.\d\.\d\])/g,
      '## '
    );
    return replaceMd;
  },
  //修改日期位置
  changeDate() {
    replaceMd.content = replaceMd.content.replace(
      /(?<=\[\d\.\d\.\d\]\([\s\S]+\)) \((\d\d\d\d\-\d\d\-\d\d)\)(?=\n)/g,
      '\n`$1`'
    );
    return replaceMd;
  },
  //增加type内容
  changeType() {
    function replaceType(type, icon) {
      replaceMd.content = replaceMd.content.replace(
        new RegExp(
          `(?<=### ${type}\\n\\n)\\* ([\\s\\S]+?)\\n+(?=[###|##])`,
          'g'
        ),
        function(match) {
          return match.replace(
            new RegExp(`\\* ([\\s\\S]+?)(?=\\n)`, 'g'),
            `* ${icon} ${type}: $1`
          );
        }
      );
    }
    typeList.forEach(e => {
      replaceType(e.type, e.icon);
    });
    return replaceMd;
  },
  //删除type标题
  deleteType() {
    typeList.forEach(e => {
      replaceMd.content = replaceMd.content.replace(
        new RegExp(`### ${e.type}\\n+`, 'g'),
        ''
      );
    });
    return replaceMd;
  }
};

const newChangelog = replaceMd
  .setContent(changelog)
  .changeTitle()
  .changeDate()
  .changeType()
  .deleteType();
fs.writeFileSync(
  path.join(__dirname, '../CHANGELOG.md'),
  newChangelog.getContent(),
  'utf8'
);
