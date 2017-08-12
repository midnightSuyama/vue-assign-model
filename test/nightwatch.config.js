module.exports = {
  "src_folders": ["test/specs"],
  "output_folder": "test/reports",

  "selenium": {
    "start_process": true,
    "server_path": require('selenium-server').path,
    "log_path": false,
    "cli_args": {
      'webdriver.chrome.driver': require('chromedriver').path
    }
  },

  "test_settings": {
    "default": {
      "selenium_port": 4444,
      "selenium_host": "localhost",
      "silent": true,
      "desiredCapabilities": {
        "browserName": "chrome",
        "chromeOptions": {
          "args": [
            "headless"
          ]
        }
      }
    }
  }
}
