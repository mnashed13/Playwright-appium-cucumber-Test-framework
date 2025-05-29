module.exports = {
	path: '/wd/hub',
	port: 4723,
	capabilities: {
		platformName: 'Android',
		platformVersion: '12.0', // Update as needed
		deviceName: 'Android Emulator',
		app: '/path/to/your/android/app.apk', // Update path
		automationName: 'UiAutomator2',
		appWaitActivity: '*',
		newCommandTimeout: 300,
	},
};
