'use strict';

angular.module('sceendyApp')
  .controller('blogCtrl', function ($scope) {
  $scope.blog = [
    {
      title:'the tools and flow',
      date: '12/09/14',
      content: 'things'
    }
  ];
});
