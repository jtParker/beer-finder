var app = angular.module('beerFinder', ['ui.router']);

app.config([
  "$stateProvider",
  "$urlRouterProvider",

  function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('main', {
        url:'/',
        templateUrl: './views/main.html',
        controller: 'mainCtrl'
      })
      .state('findBeer', {
        url:'/findBeer',
        templateUrl: './views/findBeer.html'
      })
      .state('findStores', {
        url: '/findStores',
        templateUrl: './views/findStores.html'
      })
      .state('reportFinding', {
        url: '/reportFinding',
        templateUrl: './views/reportFinding.html'
      })
    }
]);
