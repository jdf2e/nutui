import { join, dirname } from 'node:path';

function findRootDir(dir: string): string {
  const parentDir = dirname(dir);
  if (dir === parentDir) {
    return dir;
  }

  return findRootDir(parentDir);
}

// Root paths
export const CWD = process.cwd();
export const ROOT = findRootDir(CWD);

// Relative paths
export const SRC_DIR = join(CWD, 'src');
export const DIST_DIR = join(CWD, 'dist');

// Site paths
export const TSC_TYPE_VUE_DIR = join(CWD, 'tsc/type/src/packages');
export const TYPES_DIR = join(DIST_DIR, 'types');
export const VUE_DIR = join(SRC_DIR, 'packages', '__VUE');
export const PKG_DIR = join(CWD, 'package.json');
export const CONFIG_DIR = join(SRC_DIR, 'config.json');
