'use strict';
angular.module('sceendyApp', ['ngAnimate', 'ngTouch', 'ngResource', 'ngRoute', 'ngSanitize', 'truncate'])

  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/views/home.html',
        controller: 'blogController',
        title: 'Home',
        resolve: {
          posts: function(Blog) { // Inject a resource named 'Blog'
            return Blog.get();
          }
        }
      })
      .when('/about', {
        templateUrl: 'app/views/about.html',
        title: 'About'
      })
      .when('/work', {
        templateUrl: 'app/work/work.html',
        controller: 'workController',
        title: 'Work'
      })
      .when('/blog', {
        templateUrl: 'app/blog/blog.html',
        controller: 'blogController',
        title: 'Blog',
        resolve: {
          posts: function(Blog) { // Inject a resource named 'Blog'
            return Blog.get();
          }
        }
      })
      .when('/blog/:id', {
        templateUrl: 'app/blog/entry.html',
        controller: 'blogController',
        title: 'Blog Post',
        resolve: {
          posts: function(Blog) { // Inject a resource named 'Blog'
            return Blog.get();
          }
        }
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
