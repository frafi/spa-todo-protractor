exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  specs: ['answers_spec.js'],
  capabilities: {
	 browserName: 'phantomjs'
  },
  jasmineNodeOpts: {
    showColors: true
  }
}