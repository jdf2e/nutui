import { Command } from 'commander';

import { cliVersion } from './index.js';

const program = new Command();

program.version(`@nutui/cli ${cliVersion}`);

program
  .command('copy <type>')
  .description('Run copy')
  .action(async (type) => {
    const { copyDoc } = await import('./scripts/copy.js');
    return copyDoc(type);
  });

program
  .command('copydist <type>')
  .description('Run copy-dist')
  .action(async (type) => {
    const { copyDist } = await import('./scripts/copy.js');
    return copyDist(type);
  });

program
  .command('gen-themes [type]')
  .description('Run gen-themes')
  .action(async (type) => {
    const { genThemes } = await import('./scripts/gen-themes.js');
    return genThemes(type);
  });

program
  .command('gen-types [type]')
  .description('Run gen-types')
  .action(async (type) => {
    const { genTypes } = await import('./scripts/gen-types.js');
    return genTypes(type);
  });

program
  .command('gen-log')
  .description('Run gen-changelog')
  .action(async () => {
    const { genChangelog } = await import('./scripts/gen-changelog.js');
    return genChangelog();
  });

program
  .command('attr [type]')
  .description('Run create-attributes')
  .action(async (type) => {
    const { createAttributes } = await import('./scripts/create-attributes.js');
    return createAttributes(type);
  });

program
  .command('gen-taro-route')
  .description('Run gen-taro-route')
  .action(async () => {
    const { genTaroRoute } = await import('./scripts/gen-taro-route.js');
    return genTaroRoute();
  });

program
  .command('gen-deps <target>')
  .description('Run gen-deps')
  .action(async (target) => {
    const { genDeps } = await import('./scripts/gen-deps.js');
    return genDeps(target);
  });

program
  .command('gen-nutui [target]')
  .description('Run gen-nutui')
  .action(async (target) => {
    const { genNutUI } = await import('./scripts/gen-nutui.js');
    return genNutUI(target);
  });

program
  .command('add')
  .description('Run create-component-mode')
  .action(async () => {
    const { createComponentMode } = await import('./scripts/create-component-mode.js');
    return createComponentMode();
  });

program
  .command('verify [target]')
  .description('Run verify')
  .action(async (target) => {
    const { verify } = await import('./scripts/verify.js');
    return verify(target);
  });

program.parse();
