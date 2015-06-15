'use strict';

angular.module('sceendyApp')

// WORK Controller
.controller('workController', function($scope) {
  $scope.workItem = [
  {
    client:'Joinem',
    url: 'www.joinem.com',
    image: '/assets/images/work/joinem.png',
    skills: ['HTML/SCSS', 'Angular', 'jQuery'],
    summary: 'Joinem is a single page application built using Angular that consumes a RESTful API. I write frontend code, adhere to SMACSS methodology, and provide support in product design.'
  },
  {
    client:'Extraco Banks',
    url: 'www.extracobanks.com/rewards/',
    image: '/assets/images/work/extraco.png',
    skills: ['HTML/CSS', 'Angular', 'jQuery'],
    summary: 'I built the frontend of the Extraco Rewards page for users to quickly find where they can filter to see where they can aquire Rewards. I did some maintenance after launch as well.'
  },
  {
    client:'TSATA',
    url: 'www.tsata.com',
    image: '/assets/images/work/tsata.png',
    skills: ['HTML/LESS', 'JS','PHP'],
    summary: 'I launched their new site for which I created a custom WordPress theme. Customized a job manager plugin to suit their needs. I continue to update and do maintenance from time to time.'
  },
  {
    client:'TX Concussion Partnership',
    url: 'www.txconcussionlaw.com',
    image: '/assets/images/work/tscp.png',
    skills: ['HTML/SCSS', 'JS', 'Angular', 'PHP'],
    summary: 'Designed and developed a custom WordPress theme, perform monthly maintenance, and currently working on developing a custom WP plugin for the site.'
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
    client:'Curves',
    url: 'french.curves.com',
    image: '/assets/images/work/curves.png',
    skills: ['HTML/CSS', 'PHP'],
    summary: 'While at Apollo Interactive, I maintained and created new pages for the international Curves websites that included Australia, New Zealand, France, and the UK.'
  }
  ];
});
