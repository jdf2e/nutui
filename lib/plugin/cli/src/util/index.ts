export type NodeEnv = 'production' | 'development' | 'test';
export function setNodeEnv(value: NodeEnv) {
	process.env.NODE_ENV = value;
}
export function isDev() {
	return process.env.NODE_ENV === 'development';
}

export function isTest() {
	return process.env.NODE_ENV === 'test';
}
