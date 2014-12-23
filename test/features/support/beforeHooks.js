// var protractor = require('protractor')

var myHooks = function () {
  	this.Before(function (done) {
  		console.log("Before hook")
      browser.ignoreSynchronization = true; //disables waitForangular()
	    done()
	  })
}

module.exports = myHooks;
