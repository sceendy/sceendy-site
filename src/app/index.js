'use strict';

angular.module('sceendyApp', ['ngAnimate', 'ngTouch', 'ngResource', 'ngRoute', 'ngSanitize', 'truncate'])
  .config(function($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'app/views/home.html',
        title: 'Home'
      })
      .when('/about', {
        templateUrl: 'app/views/about.html',
        controller: 'aboutController',
        title: 'About Me'
      })
      .when('/work', {
        templateUrl: 'app/work/work.html',
        controller: 'workController',
        title: 'Work'
      })
      .when('/blog', {
        templateUrl: 'app/blog/blog.html',
        controller: 'blogController',
        title: 'Blog'
      })
      .when('/blog/:id', {
        templateUrl: 'app/blog/entry.html',
        controller: 'blogController',
        title: 'Blog Post'
      })

      .otherwise ({
        redirectTo: '/'
      });
  })

  // APP Controller: allows for dynamic title and generates current year for footer
  .controller('appController', function($rootScope, $scope) {
    $rootScope.$on('$routeChangeSuccess', function(event, current) {
      $rootScope.title = current.title;
    });

    $scope.currentYear = (new Date().getFullYear());
  });
