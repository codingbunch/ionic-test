'use strict';
angular.module('Gonnect.controllers', [])

.controller('MessagesCtrl', function($scope, Messages) {
  $scope.messages = Messages.all();
})

.controller('MessageDetailCtrl', function($scope, $stateParams, Messages) {
  $scope.message = Messages.get($stateParams.messageId);
})

.controller('AccountCtrl', function() {
});
