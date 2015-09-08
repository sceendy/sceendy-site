'use strict';

angular.module('sceendyApp')
// BLOG Factory: accesses the API and returns the blog data to be used
.factory('Blog', function($resource) {
  var key = 'AIzaSyCqUv0mNrHN0cEB7gwqiWC0A0rs71lpwgE';
  //var entireBlog = function() {
  return $resource(
    'https://www.googleapis.com/blogger/v3/blogs/5718631717220089292/posts?key=' + key + '&fields=kind,items(title, content, published, labels)',
  {
    query: {
      method: 'GET',
      isArray: false
    }
  });
})
  //};
  /*var singleEntry = function(){
    return $resource('https://www.googleapis.com/blogger/v3/blogs/5718631717220089292/posts/:postId',
  {
    query: {
      method: 'GET',
      isArray: false
    }
  });
};*/

// BLOG Controller: assigns blog data some values
.controller('blogController', function($scope, $routeParams, Blog, $sce, posts) {
  $scope.posts = posts;
  $scope.postId = $routeParams.id;

  // create slug for blog entries
  $scope.slug = function(postUrl){
    if (posts.items && postUrl){
      var urlPattern = /http:\/\/sceendy\.blogspot\.com\/\d{4}\/\d{2}\/([a-zA-z0-9\-]+)\.html/g;
      var slug = urlPattern.exec(postUrl);
      return slug[1];
    }
  };

  $scope.blogContent = function(postId) {
    if (posts.items && postId){
      return $sce.trustAsHtml(posts.items[postId].content);
    }
  };

});
