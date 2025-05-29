import { setWorldConstructor, World } from '@cucumber/cucumber';
import { remote, RemoteOptions, Browser } from 'webdriverio';

export let driver: Browser<'async'>;

class CustomWorld extends World {
	async initDriver(platform: 'android' | 'ios') {
		const opts: RemoteOptions = require(`../appium/appium.${platform}.conf.js`);
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
