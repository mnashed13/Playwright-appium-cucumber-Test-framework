import { setWorldConstructor, World } from '@cucumber/cucumber';
import { remote } from 'webdriverio';
import type { Browser } from 'webdriverio';

export let driver: Browser;

class CustomWorld extends World {
	async initDriver(platform: 'android' | 'ios') {
		const opts = require(`../appium/appium.${platform}.conf.js`);
		driver = await remote(opts);
		return driver;
	}
	async cleanup() {
		if (driver) {
			await driver.deleteSession();
		}
	}
}

setWorldConstructor(CustomWorld);
