'use strict';

angular.module('sceendyApp', ['ngAnimate', 'ngTouch', 'ngResource', 'ngRoute', 'ngSanitize', 'truncate'])
  .config(function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'app/views/home.html',
        title: 'Home'
      })
      .when('/portfolio', {
        templateUrl: 'app/views/portfolio.html',
        controller: 'portfolioController',
        title: 'Portfolio'
      })
      .when('/blog', {
        templateUrl: 'app/views/blog.html',
        controller: 'blogController',
        title: 'Blog'
      })
      .when('/blog/:id', {
        templateUrl: 'app/views/entry.html',
        controller: 'blogController',
        title: 'Blog Post'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

  // BLOG Factory
  .factory('Blog',function($resource){
      return $resource(
        'https://www.googleapis.com/blogger/v3/blogs/5718631717220089292/posts?key=AIzaSyCqUv0mNrHN0cEB7gwqiWC0A0rs71lpwgE',
        {},
      {
        query: {
          method: 'GET',
          isArray: false
        }
      }
    );
  })

  // APP Controller
  .controller('appController', function($rootScope, $scope){
    $rootScope.$on("$routeChangeSuccess", function(event, current, previous) {
      $rootScope.title = current.title;
    });
    $scope.currentYear = (new Date().getFullYear());
  })

  // BLOG Controller
  .controller('blogController', function($scope, $routeParams, Blog,$sce) {
    $scope.posts = Blog.get({id:$routeParams.id});
    $scope.key = $routeParams.id;

    $scope.blogContent = function() {
      return $sce.trustAsHtml($scope.posts.items[$scope.key].content);
    };

  })

  // PORTFOLIO Controller
  //todo add Image preview
  .controller('portfolioController', function ($scope) {
    $scope.workItem = [
    {
      client:'Studio Movie Grill',
      url: 'ticketdeals.studiomoviegrill.com/',
      skills: ['HTML/CSS', 'PHP'],
      summary: 'Studio Movie Grill has $5 ticket deals that were initially only available on Facebook but I built a micro-site for them that made them available that didn\'t require movie goers to have a Facebook account.'
    },
    {
      client:'Visionworks',
      url: 'www.visionworks.com/info/',
      skills: ['HTML/CSS', 'JS'],
      summary: 'Maintained the Visionworks website, created their responsive email templates, improved display for smaller devices, and created landing pages.'
    },
    {
      client:'Stage Stores',
      url: 'www.stagestores.com/store/account/findyourstore.jsp',
      skills: ['HTML/CSS', 'PHP'],
      summary: 'While at Apollo Interactive, I handled the maintenance on the Stage Stores website and developed the interface for their store locator.'
    },
    {
      client:'Joinem',
      url: 'www.joinem.com',
      skills: ['HTML/SCSS', 'Angular', 'jQuery'],
      summary: 'I am part of the UI team creating the Joinem website which is a single page app using Angular. I also designed the mobile menu.'
    },
    {
      client:'Wingstop',
      url: 'www.wingstop.com',
      skills: ['HTML/CSS', 'PHP'],
      summary: 'While at Apollo Interactive, I performed front-end maintenance for Wingstop website along with improvements throughout the site including the Franchise pages.'
    },
    {
      client:'KHYI 95.3FM',
      url: 'www.khyi.com',
      skills: ['HTML/CSS', 'PHP', 'JS'],
      summary: 'Customized a WordPress theme, customized plugins, improved layout/accessibilty, and helped increase traffic to their website. '
    },
    {
      client:'Extraco Banks',
      url: 'www.extracobanks.com/rewards/',
      skills: ['HTML/CSS', 'Angular', 'jQuery'],
      summary: 'While at Apollo Interactive, I built the frontend of the Extraco Rewards page for users to quickly find where they can shop to get Rewards. Also created the Contact Us modal.'
    },
    {
      client:'Curves',
      url: 'french.curves.com',
      skills: ['HTML/CSS', 'PHP'],
      summary: 'While at Apollo Interactive, I maintained and created new pages for the international Curves websites that included Australia, New Zealand, France, and the UK.'
    },
    {
      client:'TSATA',
      url: 'www.tsata.com',
      skills: ['HTML/LESS', 'JS','PHP'],
      summary: 'Coded up a sweet custom theme for their WordPress site. Customized a job manager plugin to suit their needs. I continue to do regular maintenance.'
    },
    {
      client:'TX Concussion Partnership',
      url: 'www.txconcussionlaw.com',
      skills: ['HTML/SCSS', 'JS', 'Angular', 'PHP'],
      summary: 'Designed and developed custom WordPress theme, perform bi-weekly maintenance, and currently working on developing a WP plugin for the site.'
    }
    ];
  });
