import { join } from 'node:path';
import { CWD } from './constant.js';

export const getPath = (path: string) => {
  return join(CWD, path);
};
