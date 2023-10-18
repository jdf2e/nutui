import prettier from 'prettier';
import * as plugin from './plugin.js';

const markdown = `
123

|  name   | email | description |
| -- | -- | --- |
| zhang  | zhang@a.com  | zhang  |
|  wang  | wang@a.com      | wang |
| li  | li@a.com    | li  |
| amity  | amity@a.com  | amity  |
| batman | batman@a.com | batman |

123
`;

const res = await prettier.format(markdown, {
  parser: 'markdown',
  plugins: [plugin]
});

console.log(res);
