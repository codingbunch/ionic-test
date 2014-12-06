'use strict';
angular.module('Gonnect.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Messages', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var messages = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
  ];

  return {
    all: function() {
      return messages;
    },
    get: function(messageId) {
      // Simple index lookup
      return messages[messageId];
    }
  };
});
