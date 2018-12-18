/* eslint-disable filenames/match-regex */
const seleniumServer = require('selenium-server')
const chromedriver = require('chromedriver')

// We use a nightwatch.conf.js file to include comments and helper functions
module.exports = {
  'src_folders': [
    'tests'// Where you are storing your Nightwatch e2e tests
  ],
  'test_workers': true,
  'output_folder': './tests/reports', // Reports (test outcome) output by nightwatch
  'selenium': {
    'start_process': true, // Tells nightwatch to start/stop the selenium process
    'server_path': seleniumServer.path,
    'host': '127.0.0.1',
    'port': 4444, // Standard selenium port
    'cli_args': {
      'webdriver.chrome.driver' : chromedriver.path
    }
  },
  'test_settings': {
    'default': {
      'screenshots': {
        'enabled': false, // If you want to keep screenshots
        'on_failure': true,
        'path': 'tests/screenshots' // Save screenshots here
      },
      'globals': {
        'waitForConditionTimeout': 5000 // Sometimes internet is slow so wait.
      },
      'desiredCapabilities': { // Use Chrome as the default browser for tests
        'browserName': 'chrome',
        'chromeOptions': {
          'args': [
            '--no-sandbox',
            'disable-web-security',
            'window-size=1000,1000',
          ]
        }
      }
    },
    'chrome': {
      'desiredCapabilities': {
        'browserName': 'chrome',
        'javascriptEnabled': true, // Turn off to test progressive enhancement
      }
    }
  }
}