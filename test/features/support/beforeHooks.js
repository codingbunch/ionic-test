
var myHooks = function () {
  	this.Before(function (done) {
  		console.log("Before hook")
      ptor = protractor.getInstance();
      ptor.ignoreSynchronization = true; //disables waitForangular()
	    done()
	  })
}

module.exports = myHooks;
