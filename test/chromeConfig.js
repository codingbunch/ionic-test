exports.config = {
  capabilities: {
    browserName: 'chrome'
  },
  allScriptsTimeout: 30000,
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  baseUrl: 'http://localhost:8100',

  framework: 'cucumber',

  cucumberOpts: {
    require: 'features/**/*.js',
    format: 'pretty'
  },

  specs: [ 'features/*.feature' ]
};
