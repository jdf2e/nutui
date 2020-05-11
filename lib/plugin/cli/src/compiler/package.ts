import { packageConfig } from '../webpack/package.config';
import { compileWebPack } from './webpack';
export function compilePackage(isMinimize: boolean) {
	return compileWebPack(packageConfig(isMinimize));
}
