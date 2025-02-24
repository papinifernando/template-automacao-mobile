const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: 'tests/**.test.js',
  output: './output',
  helpers: {
    Appium: {
      app: "demo.apk",
      platform: "Android",
      desiredCapabilities: {
        'device': process.env.DEVICE || 'Emulator',
        'automationName': process.env.ENGINE || 'UIAutomator2',
        'newCommandTimeout': 300000,
        'appWaitDuration': 300000,
        'autoGrantPermissions': true,
        'gpsEnabled': true
    }
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'dot-qa-mobile-template'
}