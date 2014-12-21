var afterHook = function () {
  	this.After(function (done) {
  		console.log('After hook')
      //browser.quit()
      done()
	})
}

module.exports = afterHook
