var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var tabs = require('../pages/tabs.js')
var messages = require('../pages/messages.js')

function messagesSteps() {
  this.World = require("../support/world.js").World

  this.When('I navigate into the messages view', function (done){
    done()
  })

  this.Then(/^the view must have (\d+) messages$/, function thenViewHasMessages (num,done){
    messages.list.count().then(function(count){
      expect(count).to.equal(parseInt(num))
      done()
    })
  })

}

module.exports = messagesSteps;
