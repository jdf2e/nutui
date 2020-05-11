import { emptyDir } from 'fs-extra';
import { compileSite } from '../compiler/site';
import { DIST_DIR } from '../util/dic';
export async function buildSite() {
	await emptyDir(DIST_DIR);
	await compileSite(true);
	process.exit();
}
