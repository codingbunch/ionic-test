var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

function messagesSteps() {
  this.World = require("../support/world.js").World

  this.When('I navigate into the messages view', function (done){
    done()
  })

  this.Then(/^the view must have (\d+) messages$/, function thenViewHasMessages (num,done){
    expect(element.all(by.repeater('message in messages')).count()).to.eventually.equal(parseInt(num))
  })

}

module.exports = messagesSteps;
