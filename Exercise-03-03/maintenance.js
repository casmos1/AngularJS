angular.module('maintenance', ['ngRoute'])
  .controller('adminCtrl', AdminCtrl)
  .config(function($routeProvider) {
    $routeProvider
      .when('/locations', {
        templateUrl: 'views/locations.html'
      })
      .when('/diveSites', {
        templateUrl: 'views/sites.html'
      })
      .otherwise({
        templateUrl: 'views/main.html'
    });
  });

function AdminCtrl($scope) {
}

