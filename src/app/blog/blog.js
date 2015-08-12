'use strict';

angular.module('sceendyApp')
// BLOG Factory: accesses the API and returns the blog data to be used
.factory('Blog', function($resource) {
  var key = 'AIzaSyCqUv0mNrHN0cEB7gwqiWC0A0rs71lpwgE';
  return $resource(
    'https://www.googleapis.com/blogger/v3/blogs/5718631717220089292/posts?key=' + key + '&fields=kind,items(title, content, published, labels)',
  {
    query: {
      method: 'GET',
      isArray: false
    }
  });
})


// BLOG Controller: assigns blog data some values
.controller('blogController', function($scope, $routeParams, Blog, $sce) {
  $scope.posts = Blog.get({id:$routeParams.id});
  $scope.key = $routeParams.id;

  $scope.blogContent = function() {
    return $sce.trustAsHtml($scope.posts.items[$scope.key].content);
  };

});
