import { lint as stylelint } from 'stylelint';
import { CLIEngine } from 'eslint';
// import { logger } from '../util/logger';

const SCRIPT_EXTS = ['.js', '.jsx', '.vue', '.ts', '.tsx'];
function lintScript() {
	console.log('ESLint Start');

	const cli = new CLIEngine({
		fix: true,
		extensions: SCRIPT_EXTS,
	});

	const report = cli.executeOnFiles(['src/']);
	const formatter = cli.getFormatter();

	CLIEngine.outputFixes(report);

	// output lint errors
	const formatted = formatter(report.results);
	if (formatted) {
		console.log('ESLint Failed', '\n' + formatter(report.results));
		return false;
	}

	console.log('ESLint Passed');
	return true;
}

async function lintStyle(): Promise<boolean> {
	console.log('Stylelint Start');

	return stylelint({
		fix: true,
		formatter: 'string',
		files: ['src/**/*.css', 'src/**/*.less', 'src/**/*.scss', 'src/**/*.vue'],
	}).then((result: any) => {
		if (result.errored) {
			console.log('Stylelint Failed', '\n' + result.output);
			return false;
		}

		console.log('Stylelint Passed');
		return true;
	});
}

export async function tolint() {
	const scriptPassed = await lintScript();
	const stylePassed = await lintStyle();

	if (!scriptPassed || !stylePassed) {
		process.exit(1);
	}
}
