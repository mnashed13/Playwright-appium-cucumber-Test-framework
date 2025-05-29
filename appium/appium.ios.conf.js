module.exports = {
	path: '/wd/hub',
	port: 4723,
	capabilities: {
		platformName: 'iOS',
		platformVersion: '17.0', // Update as needed
		deviceName: 'iPhone 15', // Update as needed
		app: '/path/to/your/ios/app.app', // Update path
		automationName: 'XCUITest',
		newCommandTimeout: 300,
	},
};
