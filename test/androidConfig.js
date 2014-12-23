exports.config = {
    seleniumAddress: 'http://localhost:4723/wd/hub',

    allScriptsTimeout: 30000,

    chromeOnly: false,

    // Reference: https://github.com/appium/sample-code/blob/master/sample-code/examples/node/helpers/caps.js
    capabilities: {
        device: 'android',
        browserName: '',
        app: __dirname + '/../platforms/android/ant-build/CordovaApp-debug.apk',
        'appium-version': '1.3.4',
        platformName: 'Android',
        platformVersion: '4.4.2',
        deviceName: 'emulator-5554',
        'autoWebview': true,
        autoWebviewTimeout: 20000
    },

    // configuring wd in onPrepare
    // wdBridge helps to bridge wd driver with other selenium clients
    // See https://github.com/sebv/wd-bridge/blob/master/README.md
    onPrepare: function () {
        var wd = require('wd'),
            protractor = require('protractor'),
            wdBridge = require('wd-bridge')(protractor, wd);
        wdBridge.initFromProtractor(exports.config);
    },

    framework: 'cucumber',

    cucumberOpts: {
        require: 'features/**/*.js',
        format: 'pretty'
    },

    specs: [ 'features/*.feature' ]
};