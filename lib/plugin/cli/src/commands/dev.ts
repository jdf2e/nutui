import { compileSite } from '../compiler/site';
export async function dev() {
	await compileSite();
}
