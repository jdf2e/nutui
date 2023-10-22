import fs from 'fs-extra';
import { logger } from 'rslog';
import { getPath } from '../common/index.js';

export const genChangelog = async () => {
  const changelog = fs.readFileSync(getPath('CHANGELOG.md'), 'utf8');

  const getLatestRelease = (cl: string) => {
    const tag1 = cl.indexOf('##');
    if (tag1 > -1) {
      const tag2 = cl
        .split('')
        .slice(tag1 + 1, cl.length - 1)
        .join('')
        .indexOf('##');
      if (tag2 > -1) {
        return cl.substring(tag1, tag2);
      }
    }
    return '';
  };
  let res = getLatestRelease(changelog);
  if (res) {
    res += `\n> [CHANGELOG](https://github.com/jdf2e/nutui/blob/v4/CHANGELOG.md)\n`;
    fs.writeFileSync('.github/changelog.md', res);
  }
  logger.success('changelog success');
};
