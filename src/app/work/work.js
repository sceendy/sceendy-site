'use strict';

angular.module('sceendyApp')

// WORK Controller
.controller('workController', function($scope) {
  $scope.workItem = [
  {
    client:'Joinem',
    url: 'web.archive.org/web/20150530073743/https://www.joinem.com/',
    image: '/assets/images/work/joinem.png',
    skills: ['HTML/SCSS', 'AngularJS', 'jQuery'],
    screenshots: [
      '/assets/images/work/joinem/joinem-mobile-left.png',
      '/assets/images/work/joinem/joinem-mobile-right.png'
    ],
    summary: 'Joinem was an SPA built using AngularJS + Sass that consumed a RESTful API. Architected, implemented, and iterated on frontend designs and user interactions.'
  },
  {
    client:'Extraco Banks',
    url: 'www.extracobanks.com/rewards/',
    image: '/assets/images/work/extraco.png',
    skills: ['HTML/CSS', 'AngularJS', 'jQuery'],
    summary: 'I built the Extraco Rewards page for users to quickly find where they can filter to see where they can aquire Rewards. I did some maintenance after launch as well.'
  },
  {
    client:'TSATA',
    url: 'www.tsata.com',
    image: '/assets/images/work/tsata.png',
    skills: ['HTML/LESS', 'JS','PHP'],
    summary: 'I launched their new site for which I created a custom WordPress theme. Customized a job manager plugin to suit their needs. I handle ongoing maintenance.'
  },
  {
    client:'TX Concussion Partnership',
    url: 'www.txconcussionlaw.com',
    image: '/assets/images/work/tscp.png',
    skills: ['HTML/SCSS', 'JS', 'AngularJS', 'PHP'],
    summary: 'Designed and developed a custom WordPress theme, perform monthly maintenance, and currently working on developing a custom WP plugin for the site.'
  },
  {
    client:'Studio Movie Grill',
    url: 'ticketdeals.studiomoviegrill.com/',
    image: '/assets/images/work/smg.png',
    skills: ['HTML/CSS', 'PHP'],
    summary: 'The $5 ticket deals were initially only available through a Facebook app. I built a micro-site allowing users access to them that didn\'t require a Facebook account.'
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
    summary: 'I handled the maintenance on the Stage Stores website and developed the interface for their store locator. I also managed some of the content on the site.'
  },
  {
    client:'Wingstop',
    url: 'www.wingstop.com',
    image: '/assets/images/work/wingstop.png',
    skills: ['HTML/CSS', 'PHP'],
    summary: 'I performed front-end maintenance for the Wingstop website. Implemented improvements throughout the site including the Franchise and Store Locator pages.'
  },
  {
    client:'KHYI 95.3FM',
    url: 'www.khyi.com',
    image: '/assets/images/work/khyi.png',
    skills: ['HTML/CSS', 'PHP', 'JS'],
    summary: 'Customized a WordPress theme, customized plugins, improved layout/accessibilty, and helped increase traffic to their website. '
  },
  {
    client:'Curves',
    url: 'french.curves.com',
    image: '/assets/images/work/curves.png',
    skills: ['HTML/CSS', 'PHP'],
    summary: 'I created new pages and maintained assets/existing pages for the international Curves websites that included Australia, New Zealand, France, and the UK.'
  }
  ];
});
