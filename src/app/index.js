'use strict';
angular.module('sceendyApp', ['ngAnimate', 'ngTouch', 'ngDisqus', 'ngResource', 'ngRoute', 'ngSanitize', 'truncate'])

.config(function($routeProvider, $locationProvider, $disqusProvider) {

    $locationProvider.hashPrefix('!');
    $disqusProvider.setShortname('sceendyBlog');
    if(window.history && window.history.pushState){
      $locationProvider.html5Mode({enabled: true,  requireBase: false});
    }

    $routeProvider
      .when('/', {
        templateUrl: 'app/views/home.html',
        controller: 'blogController',
        title: 'Home',
        resolve: {
          posts: function(Blog) { // Inject Blog resource
            return Blog;
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
          posts: function(Blog) { // Inject Blog resource
            return Blog;
          }
        }
      })
      .when('/blog/:id', { // use :slug
        templateUrl: 'app/blog/entry.html',
        controller: 'blogController',
        title: 'Blog Post',
        resolve: {
          posts: function(Blog) {
            return Blog;
          }/*,
          slug: function(Blog, $routeParams, $route){
            var postUrl = JSON.stringify($route.current.params.slug);
            console.log('current.params: ' + postUrl); // for testing
            var urlPattern = /http:\/\/sceendy\.blogspot\.com\/\d{4}\/\d{2}\/([a-zA-z0-9\-]+)\.html/g;
            var slugged = urlPattern.exec(postUrl);
            return 0;
          }*/
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
