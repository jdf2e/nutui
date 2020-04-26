import { compileWebPack } from './webpack';
import { packageDisperseConfig } from '../webpack/package.disperse.config';
export function compilePackageDisperse() {
	return compileWebPack(packageDisperseConfig());
}
