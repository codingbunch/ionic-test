var afterHook = function () {
  	this.After(function (done) {
  		console.log('After hook')
      browser
        .quit()
        .then(function() {
          console.log("quitted")
          done()
        })
	})
}

module.exports = afterHook
