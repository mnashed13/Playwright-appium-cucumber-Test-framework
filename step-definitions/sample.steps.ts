import { Given, When, Then } from '@cucumber/cucumber';
import assert from 'assert';
import { driver } from '../support/world';

Given('the app is launched', async function () {
	await driver.launchApp();
});

When('I enter valid credentials', async function () {
	// Replace with your app's selectors and actions
	await driver.setValue('~username', 'testuser');
	await driver.setValue('~password', 'password123');
});

When('I tap the login button', async function () {
	await driver.click('~loginButton');
});

Then('I should see the home screen', async function () {
	const homeScreen = await driver.$('~homeScreen');
	assert.strictEqual(await homeScreen.isDisplayed(), true);
});
