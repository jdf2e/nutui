import { emptyDir } from 'fs-extra';
import { DIST_DIR, CACHE_DIR } from '../util/dic';
import logger from '../util/logger';

export async function clean() {
	await emptyDir(DIST_DIR);
	logger.success(`clean ${DIST_DIR} success!`);
	await emptyDir(CACHE_DIR);
	logger.success(`clean ${CACHE_DIR} success!`);
	process.exit();
}
