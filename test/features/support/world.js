var _ = require('underscore')
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;


var World = function World(done) {
  console.log("world init")
  done()
}

exports.World = World;
