import { setNodeEnv } from '../util';
//import { compileTest } from '../compiler/test';
export async function test() {
	setNodeEnv('test');
	//await compileTest();
}
