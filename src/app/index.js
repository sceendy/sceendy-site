'use strict';

angular.module('sceendyApp', ['ngAnimate', 'ngTouch', 'ngResource', 'ngRoute', 'ngSanitize', 'truncate'])
  .config(function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'app/views/home.html',
        title: 'Home'
      })
      .when('/work', {
        templateUrl: 'app/views/work.html',
        controller: 'workController',
        title: 'Work'
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
      // todo add 404 page later
      .otherwise({
        redirectTo: '/'
      });
  })

  // BLOG Factory: accesses the API and returns the blog data to be used
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

  // APP Controller: allows for dynamic title and generates current year for footer
  .controller('appController', function($rootScope, $scope){
    $rootScope.$on("$routeChangeSuccess", function(event, current, previous) {
      $rootScope.title = current.title;
    });
    $scope.currentYear = (new Date().getFullYear());
  })

  // BLOG Controller: assigns blog data some values
  .controller('blogController', function($scope, $routeParams, Blog, $sce) {
    $scope.posts = Blog.get({id:$routeParams.id});
    $scope.key = $routeParams.id;

    $scope.blogContent = function() {
      return $sce.trustAsHtml($scope.posts.items[$scope.key].content);
    };

  })

  // WORK Controller
  // todo add Image preview per item
  .controller('workController', function ($scope) {
    $scope.workItem = [
    {
      client:'Joinem',
      url: 'www.joinem.com',
      image: '/assets/images/work/joinem.png',
      skills: ['HTML/SCSS', 'Angular', 'jQuery'],
      summary: 'Joinem is a single page application built using Angular. I made some contributions to the design as well.'
    },
    {
      client:'Studio Movie Grill',
      url: 'ticketdeals.studiomoviegrill.com/',
      image: '/assets/images/work/smg.png',
      skills: ['HTML/CSS', 'PHP'],
      summary: 'Studio Movie Grill has $5 ticket deals that were initially only available on Facebook but I built a micro-site for them that made them available that didn\'t require movie goers to have a Facebook account.'
    },
    {
      client:'Visionworks',
      url: 'www.visionworks.com/info/',
      image: '/assets/images/work/visionworks.png',
      skills: ['HTML/CSS', 'JS'],
      summary: 'Maintained the Visionworks website, created their responsive email templates, improved display for smaller devices, and created landing pages.'
    },
    {
      client:'Stage Stores',
      url: 'www.stagestores.com/store/account/findyourstore.jsp',
      image: '/assets/images/work/stagestores.png',
      skills: ['HTML/CSS', 'PHP'],
      summary: 'While at Apollo Interactive, I handled the maintenance on the Stage Stores website and developed the interface for their store locator.'
    },
    {
      client:'Wingstop',
      url: 'www.wingstop.com',
      image: '/assets/images/work/wingstop.png',
      skills: ['HTML/CSS', 'PHP'],
      summary: 'While at Apollo Interactive, I performed front-end maintenance for Wingstop website along with improvements throughout the site including the Franchise pages.'
    },
    {
      client:'KHYI 95.3FM',
      url: 'www.khyi.com',
      image: '/assets/images/work/khyi.png',
      skills: ['HTML/CSS', 'PHP', 'JS'],
      summary: 'Customized a WordPress theme, customized plugins, improved layout/accessibilty, and helped increase traffic to their website. '
    },
    {
      client:'Extraco Banks',
      url: 'www.extracobanks.com/rewards/',
      image: '/assets/images/work/extraco.png',
      skills: ['HTML/CSS', 'Angular', 'jQuery'],
      summary: 'While at Apollo Interactive, I built the frontend of the Extraco Rewards page for users to quickly find where they can shop to get Rewards. Also created the Contact Us modal.'
    },
    {
      client:'Curves',
      url: 'french.curves.com',
      image: '/assets/images/work/curves.png',
      skills: ['HTML/CSS', 'PHP'],
      summary: 'While at Apollo Interactive, I maintained and created new pages for the international Curves websites that included Australia, New Zealand, France, and the UK.'
    },
    {
      client:'TSATA',
      url: 'www.tsata.com',
      image: '/assets/images/work/tsata.png',
      skills: ['HTML/LESS', 'JS','PHP'],
      summary: 'Coded up a sweet custom theme for their WordPress site. Customized a job manager plugin to suit their needs. I continue to do regular maintenance.'
    },
    {
      client:'TX Concussion Partnership',
      url: 'www.txconcussionlaw.com',
      image: '/assets/images/work/tscp.png',
      skills: ['HTML/SCSS', 'JS', 'Angular', 'PHP'],
      summary: 'Designed and developed custom WordPress theme, perform bi-weekly maintenance, and currently working on developing a WP plugin for the site.'
    }
    ];
  });
