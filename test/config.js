exports.config = {

  capabilities: {
    browserName: 'iPhone',
    app:         __dirname + '/../platforms/ios/build/emulator/Gonnect.app',
    deviceName: 'iPhone Simulator',
    platformName: 'iOS',
    platformVersion: "8.1",
    autoWebview: true,
    autoWebviewTimeout: 20000
  },
/*
  capabilities: {
    browserName: 'android',
    app:         __dirname + '/../platforms/android/ant-build/Gonnect-release-unsigned.apk',
    deviceName: 'Android Emulator',
    platformVersion: '4.4.4',
    platformName: 'android',
    autoWebview: true,
    autoWebviewTimeout: 20000
  },
*/
  allScriptsTimeout: 30000,
  seleniumAddress: 'http://127.0.0.1:4723/wd/hub',

  onPrepare: function() {
    var wd = require('wd'),
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
