var app = angular.module('beerFinder', ['ui.router']);

app.config([
  "$stateProvider",
  "$urlRouteProvider",

  function($stateProvider, $urlRouteProvider) {

    $urlRouteProvider.otherwise('./main');

    $stateProvider.state('main', {
      url:'/main',
      templateUrl: './views/main.html'
    })
    .state('findBeer', {
      url:'/findBeer',
      templateUrl: './views/findBeer.html'
    })
    .state('findStores', {
      url: './findStores',
      templateUrl: './views/findStores.html'
    })
    .state('reportFinding', {
      url: './reportFinding',
      templateUrl: './views/reportFinding.html'
    })
  }
]);
