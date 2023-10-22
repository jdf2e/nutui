import type { ConfigJson, Target, Type } from '../common/types.js';
import { logger } from 'rslog';
import { CONFIG_DIR, PKG_DIR } from '../common/constant.js';
import { getPath } from '../common/index.js';
import fse from 'fs-extra';

const copyFile = (from: string, to: string) => {
  fse
    .copy(from, to)
    .then(() => {
      logger.success('>', to);
    })
    .catch((err: string) => {
      logger.error(err);
    });
};

const removeFile = async (url: string) => {
  return fse
    .remove(url)
    .then(() => {
      return true;
    })
    .catch((err) => {
      throw err;
    });
};

const packageConfig = await fse.readJson(PKG_DIR);
// copy docs
export async function copyDoc(type?: Type) {
  const demoUrls = {
    h5: 'https://nutui.jd.com/h5/vue/4x/demo.html#',
    taro: 'https://nutui.jd.com/taro/vue/4x/demo.html#/pages/index/index',
    docs: 'https://nutui.jd.com/3x/demo.html#'
  };
  const targetBaseUrl = getPath(`site_docs`);
  let nutuiDocsConfigPath = `${targetBaseUrl}/config.json`;

  // 判断 site_docs 文件是否存在根路径中
  const existsRoot = await fse.pathExists(targetBaseUrl);

  if (existsRoot) await removeFile(targetBaseUrl);
  // 复制所有组件
  const fromConfig: ConfigJson = await fse.readJson(CONFIG_DIR);
  fromConfig.nav.forEach(({ packages }) => {
    packages.forEach((item) => {
      if (item.show) {
        let cmpName = item.name.toLowerCase();
        let docpath = getPath(`src/packages/__VUE/${cmpName}/doc.md`);
        if (type !== 'taro') {
          fse.readFile(docpath, (err: NodeJS.ErrnoException | null) => {
            if (!err) {
              copyFile(docpath, `${targetBaseUrl}/docs/${cmpName}/doc.md`);
            }
          });
          let docEnPath = getPath(`src/packages/__VUE/${cmpName}/doc.en-US.md`);
          fse.readFile(docEnPath, (err: NodeJS.ErrnoException | null) => {
            if (!err) {
              copyFile(docEnPath, `${targetBaseUrl}/docs/${cmpName}/doc.en-US.md`);
            }
          });
        }
        if (type !== 'h5') {
          let doctaropath = `src/packages/__VUE/${cmpName}/doc.taro.md`;
          fse.readFile(doctaropath, (err: NodeJS.ErrnoException | null) => {
            if (!err) {
              copyFile(doctaropath, `${targetBaseUrl}/docs/${cmpName}/doc.taro.md`);
            }
          });
        }
      }
    });
  });

  // 复制 config.json
  const obj = {
    version: '',
    nav: [],
    docs: []
  };
  fse.outputJSON(nutuiDocsConfigPath, obj, async () => {
    const docsConfig: ConfigJson = await fse.readJson(nutuiDocsConfigPath);
    docsConfig.version = packageConfig.version;
    docsConfig.nav = fromConfig.nav;
    docsConfig.docs = fromConfig.docs;
    // docsConfig.demoUrl = 'https://nutui.jd.com/3x/demo.html#';
    docsConfig.demoUrl = demoUrls[type || 'docs'];
    fse
      .writeJson(nutuiDocsConfigPath, docsConfig, {
        spaces: 2
      })
      .then(() => {
        logger.success(`${packageConfig.version} success!`);
      });
  });
}

export async function copyDist(target?: Target) {
  if (!target) {
    logger.error('缺少 nutui or nutui-taro 参数！');
    return;
  }
  let copyfile = ['dist', 'README.md', 'LICENSE', 'CHANGELOG.md'];
  // 清空 dist
  await removeFile(getPath(`publish/${target}/dist`));
  copyfile.forEach((filename) => {
    copyFile(getPath(filename), getPath(`publish/${target}/${filename}`));
  });
  const targetPkgPath = getPath(`publish/${target}/package.json`);
  const targetPkgObj = await fse.readJson(targetPkgPath);
  targetPkgObj.version = packageConfig.version;
  fse.outputFile(targetPkgPath, JSON.stringify(targetPkgObj, null, 2), 'utf8', () => {
    logger.success(`${targetPkgPath} 写入成功`);
  });
}
