'use strict';

angular.module('sceendyApp')
  .controller('portfolioCtrl', function ($scope) {
  $scope.workItem = [
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
      summary: 'Did regular maintenance on their previous website. Wrote the frontend code for the current store locator.'
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
      summary: 'Customized a WordPress theme, installed plugins, improved layout/accessibilty, and better web presence. '
    },
    {
      client:'Studio Movie Grill',
      url: 'ticketdeals.studiomoviegrill.com/',
      skills: ['HTML/CSS', 'PHP'],
      summary: 'I made this mini-site for the $5 ticket deals that SMG provides along with a backend developer that made the database where the deals were stored.'
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
      summary: 'Designed and developed custom WordPress theme. Managing content.'
    }
  ];
});
