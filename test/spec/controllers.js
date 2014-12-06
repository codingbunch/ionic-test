'use strict';

describe('Controller: MessagesCtrl', function () {

  var should = chai.should();

  // load the controller's module
  beforeEach(module('Gonnect'));

  var MessagesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MessagesCtrl = $controller('MessagesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of messages to the scope', function () {
    scope.messages.should.have.length(4);
  });

});
