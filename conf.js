/**
 * Created by Brayam on 30/08/2017.
 */
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
  //plugins: [{
  //  path: require.resolve('protractor-console'),
  //  logLevels: ['warning', 'severe']
  //}],
  seleniumAddress: 'http://localhost:4444/wd/hub',
  framework: 'jasmine2',
  specs: ['todo-sepc.js'],
  jasmineNodeOpts: {
    showColors: true,
    //defaultTimeoutInterval: baseConfig.timeout.defaultTimeoutInterval
    print: function() {} // Remove protractor dot reporter.
  },
  params: {
    report: 'result',
    specs: 'specs'
  },
  capabilities : {
    'browserName': 'chrome',
    loggingPrefs: {
      browser: 'ALL' // "OFF", "SEVERE", "WARNING", "INFO", "CONFIG", "FINE", "FINER", "FINEST", "ALL".
    },
    'chromeOptions': {
      'args': [
        //'--window-size=992,1200',
        //'--test-type',
        '--incognito'
        //'--use-mobile-user-agent',
        //"--user-agent='Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.20 Mobile Safari/537.36'"

      ],
      'w3c' : false
    }
  },
  //capabilities: {
  //  "prefs": {'profile.managed_default_content_settings.notifications': 1}
  //},
  //"prefs": {'profile.managed_default_content_settings.notifications': 1},
  onPrepare: function() {
    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: 'reports/'+this.specs
      })
    );
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true
      }
    }));
    //var SpecReporter = require('jasmine-spec-reporter');
    //jasmine.getEnv().addReporter(new SpecReporter({
    //  displayStacktrace: 'none',
    //  displayFailuresSummary: false
    //}));
  }
};