import { Before, After } from '@cucumber/cucumber';
import { driver } from './world';

Before(async function () {
	// Choose platform dynamically or via env var
	const platform = process.env.PLATFORM || 'ios';
	await this.initDriver(platform);
});

After(async function () {
	await this.cleanup();
});
