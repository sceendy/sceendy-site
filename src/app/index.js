'use strict';

angular.module('sceendyApp', ['ngAnimate', 'ngTouch', 'ngResource', 'ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/views/home.html',
      })
      .when('/portfolio', {
        controller: 'portfolioCtrl',
        templateUrl: 'app/views/portfolio.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
