
var myHooks = function () {
  	this.Before(function (done) {
  		console.log("Before hook")
	    done()
	  })
}

module.exports = myHooks;
