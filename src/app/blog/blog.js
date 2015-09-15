'use strict';

angular.module('sceendyApp')
// BLOG Factory: accesses the API and returns the blog data to be used
.factory('Blog', function($resource) {
  var blog = $resource(
    'https://www.googleapis.com/blogger/v3/blogs/5718631717220089292/posts?&fields=kind,items(id,title,content,published,labels,url),nextPageToken',{
      key: 'AIzaSyCqUv0mNrHN0cEB7gwqiWC0A0rs71lpwgE',
      maxResults: 20,
      //pageToken: '@nextPageToken'
    },
    {
      'query':  { method:'GET', isArray: true },
  }).get();

  return blog;
})


// BLOG Controller: assigns blog data some values
.controller('blogController', function($scope, $routeParams, Blog, $sce, posts) {
  $scope.posts = posts;
  $scope.postId = $routeParams.id;

  // create slug for blog entries
  // then, for HTML >> slug(posts.items[postId].url)
  $scope.slug = function(postUrl){
    if ($scope.posts.items && postUrl){
      var urlPattern = /http:\/\/sceendy\.blogspot\.com\/\d{4}\/\d{2}\/([a-zA-z0-9\-]+)\.html/g;
      var slugged = urlPattern.exec(postUrl);

      return slugged[1];
    }
  };

  $scope.blogContent = function(postId) {
    if ($scope.posts.items && postId){
      return $sce.trustAsHtml($scope.posts.items[postId].content);
    }
  };

});
