import signale from 'signale';
// signale.success('Operation successful');
// signale.debug('Hello', 'from', 'L59');
// signale.pending('Write release notes for %s', '1.2.0');
// signale.fatal(new Error('Unable to acquire lock'));
// signale.watch('Recursively watching build directory...');
// signale.complete({prefix: '[task]', message: 'Fix issue #59', suffix: '(@klauscfhq)'});

// 覆盖任何存在于 `package.json` 的配置
// signale.config({
//     displayFilename: true,
//     displayTimestamp: true,
//     displayDate: false
// });

const options = {
	config: {
		displayTimestamp: true,
	},
	// types: {
	//     start: {
	//         badge: '🚚',
	//         color: 'green',
	//         label: 'state'
	//     },
	//     info: {
	//         badge: '**',
	//         color: 'yellow',
	//         label: 'info'
	//     }
	// }
};
export default new signale.Signale(options);
