import fs from 'fs-extra';
import { logger } from 'rslog';
import * as sass from 'sass';
import { CONFIG_DIR } from '../common/constant.js';
import { getPath } from '../common/index.js';
import type { ConfigJson, Target, ThemesEnum, ThemesEnumKey } from '../common/types.js';

const config: ConfigJson = await fs.readJson(CONFIG_DIR);

const themesEnum: ThemesEnum = {
  jdt: 'variables-jdt',
  jdb: 'variables-jdb',
  jddkh: 'variables-jddkh'
};

// 将scss文件额外转换一份css
const sassTocss = () => {
  let sassTocssTasks: any[] = [];
  config.nav.map((item) => {
    item.packages.forEach((element) => {
      let folderName = element.name.toLowerCase();

      try {
        const filePath = getPath(`dist/packages/${folderName}/main.scss`);
        sassTocssTasks.push(
          // 写入main.scss，引入变量文件variables.scss和组件样式index.scss
          fs.outputFile(
            filePath,
            `@import '../../styles/variables.scss';\n@import './index.scss';\n`,
            'utf8',
            (error: NodeJS.ErrnoException | null) => {
              if (error) return logger.error(error);
              try {
                // 编译sass为css
                const result = sass.compile(filePath, { style: 'compressed' });
                // 删除main.scss
                fs.unlinkSync(filePath);
                // 写入index.css
                fs.outputFile(
                  getPath(`dist/packages/${folderName}/index.css`),
                  result.css,
                  'utf8',
                  (error: NodeJS.ErrnoException | null) => {
                    if (error) return logger.error(error);
                  }
                );
              } catch (err) {
                logger.error(err);
              }
            }
          )
        );
      } catch (err) {
        logger.error(err);
      }
    });
  });
  Promise.all(sassTocssTasks).then(() => {
    logger.success(`css文件写入成功`);
  });
};

// 解析scss文件，生成css变量
const parseFile = (filename: string, theme: ThemesEnumKey) => {
  return fs.readFile(filename, 'utf-8', (err, data) => {
    if (err) {
      logger.error(`无法读取文件: ${err}`);
      return;
    }

    const variables: { [key: string]: any } = {};
    const lines = data.split('\n');
    lines.forEach((line) => {
      if (line.startsWith('$')) {
        const trimmedLine = line.trim().replace(';', '');
        const [key, value] = trimmedLine.split(': ');
        variables[key] = value;
      }
    });

    let fileContent = `@import './${themesEnum[theme]}.scss';\n:root {\n`;
    for (const key in variables) {
      if (Object.prototype.hasOwnProperty.call(variables, key)) {
        const variableName = key.slice(1);
        fileContent += `  --nut-${variableName}: #{$${variableName}};\n`;
      }
    }
    fileContent += `}`;
    const base = `base-${theme}`;
    const filePath = getPath(`dist/styles/${base}.scss`);
    fs.outputFile(filePath, fileContent, 'utf8', (error) => {
      if (error) return logger.error(error);
      // 编译sass为css
      const result = sass.compile(filePath, { style: 'compressed' });
      // base.scss
      fs.unlinkSync(filePath);
      // 写入index.css
      fs.outputFile(getPath(`dist/styles/${base}.css`), result.css, 'utf8', (error) => {
        if (error) return logger.error(error);
      });
    });
  });
};

// 循环themesEnum，生成不同的css变量主题
const variablesResolver = () => {
  let variablesResolverTasks: any[] = [];
  Object.keys(themesEnum).forEach((theme) => {
    variablesResolverTasks.push(
      parseFile(getPath(`dist/styles/${themesEnum[theme as ThemesEnumKey]}.scss`), theme as ThemesEnumKey)
    );
  });
  Promise.all(variablesResolverTasks).then(() => {
    logger.success('base文件写入成功');
  });
};

export const genThemes = async (target?: Target) => {
  let sassFileStr = ``;
  let tasks: any[] = [];
  if (target === 'taro') {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    sassFileStr += `@import '@nutui/icons-vue/dist/style_icon.css';\n`;
  }
  config.nav.map((item) => {
    item.packages.forEach((element) => {
      let folderName = element.name.toLowerCase();
      if (element.exclude != true) {
        sassFileStr += `@import '../../packages/${folderName}/index.scss';\n`;
      }
      tasks.push(
        fs
          .copy(
            getPath(`src/packages/__VUE/${folderName}/index.scss`),
            getPath(`dist/packages/${folderName}/index.scss`)
          )
          .catch((error) => {
            logger.error(error);
          })
      );
    });
  });

  tasks.push(fs.copy(getPath('src/packages/styles'), getPath('dist/styles')));
  Promise.all(tasks).then(() => {
    let themes = [
      { file: 'default.scss', sourcePath: `@import '../variables.scss';` },
      { file: 'jdt.scss', sourcePath: `@import '../variables-jdt.scss';` },
      { file: 'jdb.scss', sourcePath: `@import '../variables-jdb.scss';` },
      { file: 'jddkh.scss', sourcePath: `@import '../variables-jddkh.scss';` }
    ];
    tasks = [];
    themes.forEach((item) => {
      tasks.push(
        fs.outputFile(
          getPath(`dist/styles/themes/${item.file}`),
          `${item.sourcePath}\n${sassFileStr}`,
          'utf8',
          (error) => {
            if (error) return logger.error(error);
          }
        )
      );
    });
    Promise.all(tasks).then(() => {
      logger.success(`sass文件写入成功`);
      sassTocss();
      variablesResolver();
    });
  });
};
