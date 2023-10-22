import { logger } from 'rslog';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { version: viteVersion } = require('vite/package.json');
const { version: cliVersion } = require('../package.json');

export { cliVersion };

logger.greet(`  NutUI CLI v${cliVersion} / Vite v${viteVersion}\n`);

process.env.NUTUI_CLI_VERSION = cliVersion;
