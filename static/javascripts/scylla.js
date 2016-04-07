angular
  .module('scylla', [
    'scylla.config',
    'scylla.routes',
    'scylla.authentication'
  ]);

angular.module('scylla.config', []);
angular.module('scylla.routes', ['ngRoute']);

angular.module('scylla').run(run);

run.$inject = ['$http'];

function run($http) {
  $http.defaults.xsrfHeaderNAme = 'X-CSRFToken';
  $http.defaults.xsrfCookieName = 'csrftoken';
}
