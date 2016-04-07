(function () {
  'use strict';

  angular
    .module('scylla.authentication', [
      'scylla.authentication.controllers',
      'scylla.authentication.services'
    ]);

  angular
    .module('scylla.authentication.controllers', []);

  angular
    .module('scylla.authentication.services', ['ngCookies']);
})();
