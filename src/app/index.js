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
      summary: 'I made this mini-site for the $5 ticket deals that SMG provides along with a backend developer that made the database where the deals were stored.'
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
      summary: 'Primarily handled regular maintenance on their website. Developed the UI for their store locator and worked with the backend developer to GET data.'
    },
    {
      client:'Joinem',
      url: 'www.joinem.com',
      skills: ['HTML/SCSS', 'Angular', 'jQuery'],
      summary: 'Currently, part of the UI team creating the Joinem website which is an single page app. We also use Grunt/Bower/Git.'
    },
    {
      client:'Wingstop',
      url: 'www.wingstop.com',
      skills: ['HTML/CSS', 'PHP'],
      summary: 'Performed front-end maintenance for Wingstop website along with improvements throughout the site including the Franchise pages.'
    },
    {
      client:'KHYI 95.3FM',
      url: 'www.khyi.com',
      skills: ['HTML/CSS', 'PHP', 'JS'],
      summary: 'Customized a purchased WordPress theme, installed/customized plugins, improved layout/accessibilty, and helped increase traffic to their website. '
    },
    {
      client:'Extraco Banks',
      url: 'www.extracobanks.com/rewards/',
      skills: ['HTML/CSS', 'Angular', 'jQuery'],
      summary: 'Built the frontend of the Extraco Rewards page for users to quickly find where they can shop to get Rewards. Also created the Contact Us modal.'
    },
    {
      client:'Curves',
      url: 'french.curves.com',
      skills: ['HTML/CSS', 'PHP'],
      summary: 'Maintained and created new pages for the international Curves websites that included Australia, New Zealand, France, and the UK.'
    },
    {
      client:'TSATA',
      url: 'www.tsata.com',
      skills: ['HTML/LESS', 'JS','PHP'],
      summary: 'Custom WordPress theme development, design, and updates. Customized a job manager plugin to suit their needs.'
    },
    {
      client:'TX Concussion Partnership',
      url: 'www.txconcussionlaw.com',
      skills: ['HTML/SCSS', 'JS', 'Angular', 'PHP'],
      summary: 'Designed and developed custom WordPress theme, perform bi-weekly maintenance, and currently working on building a doctor-locating tool.'
    }
    ];
  });
