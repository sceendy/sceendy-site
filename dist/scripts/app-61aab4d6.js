"use strict";angular.module("sceendyApp",["ngAnimate","ngTouch","ngResource","ngRoute","ngSanitize","truncate"]).config(["$routeProvider",function(e){e.when("/",{templateUrl:"app/views/home.html",title:"Home"}).when("/portfolio",{templateUrl:"app/views/portfolio.html",controller:"portfolioController",title:"Portfolio"}).when("/blog",{templateUrl:"app/views/blog.html",controller:"blogController",title:"Blog"}).when("/blog/:slug",{templateUrl:"app/views/entry.html",controller:"blogController",title:"Blog Post"}).otherwise({redirectTo:"/"})}]).factory("posts",["$resource",function(e){return e("http://api.tumblr.com/v2/blog/sceendy.tumblr.com/posts/text?callback=JSON_CALLBACK&api_key=2haT0E7GSPnvgRp58tts2EmlBiQXqGdL6opaBs9eO09aA9JQQ3")}]).controller("appController",["$rootScope",function(e){e.$on("$routeChangeSuccess",function(t,o){e.title=o.title})}]).controller("blogController",["$scope","$http","$resource","posts",function(e,t){t.jsonp("http://api.tumblr.com/v2/blog/sceendy.tumblr.com/posts/text?callback=JSON_CALLBACK&api_key=2haT0E7GSPnvgRp58tts2EmlBiQXqGdL6opaBs9eO09aA9JQQ3").success(function(t){e.blog=t.response.posts,e.blog.totalCount=t.response.blog.total_count})}]).controller("portfolioController",["$scope",function(e){e.workItem=[{client:"Studio Movie Grill",url:"ticketdeals.studiomoviegrill.com/",skills:["HTML/CSS","PHP"],summary:"I made this mini-site for the $5 ticket deals that SMG provides along with a backend developer that made the database where the deals were stored."},{client:"Visionworks",url:"www.visionworks.com/info/",skills:["HTML/CSS","JS"],summary:"Maintained the Visionworks website, created their responsive email templates, improved display for smaller devices, and created landing pages."},{client:"Stage Stores",url:"www.stagestores.com/store/account/findyourstore.jsp",skills:["HTML/CSS","PHP"],summary:"Primarily handled regular maintenance on their website. Developed the UI for their store locator and worked with the backend developer to GET data."},{client:"Joinem",url:"www.joinem.com",skills:["HTML/SCSS","Angular","jQuery"],summary:"Currently, part of the UI team creating the Joinem website which is an single page app. We also use Grunt/Bower/Git."},{client:"Wingstop",url:"www.wingstop.com",skills:["HTML/CSS","PHP"],summary:"Performed front-end maintenance for Wingstop website along with improvements throughout the site including the Franchise pages."},{client:"KHYI 95.3FM",url:"www.khyi.com",skills:["HTML/CSS","PHP","JS"],summary:"Customized a purchased WordPress theme, installed/customized plugins, improved layout/accessibilty, and helped increase traffic to their website. "},{client:"Extraco Banks",url:"www.extracobanks.com/rewards/",skills:["HTML/CSS","Angular","jQuery"],summary:"Built the frontend of the Extraco Rewards page for users to quickly find where they can shop to get Rewards. Also created the Contact Us modal."},{client:"Curves",url:"french.curves.com",skills:["HTML/CSS","PHP"],summary:"Maintained and created new pages for the international Curves websites that included Australia, New Zealand, France, and the UK."},{client:"TSATA",url:"www.tsata.com",skills:["HTML/LESS","JS","PHP"],summary:"Custom WordPress theme development, design, and updates. Customized a job manager plugin to suit their needs."},{client:"TX Concussion Partnership",url:"www.txconcussionlaw.com",skills:["HTML/SCSS","JS","Angular","PHP"],summary:"Designed and developed custom WordPress theme, perform bi-weekly maintenance, and currently working on building a doctor-locating tool."}]}]),function(e){try{e=angular.module("sceendyApp")}catch(t){e=angular.module("sceendyApp",[])}e.run(["$templateCache",function(e){e.put("app/views/blog.html",'<article class="component-portfolio"><div class="row"><header class="col-md-12 col-xs-12 component-heading"><ul class="breadcrumb"><li><a href="/#/">home</a> &gt;</li><li>Blog</li></ul><h3>Blog</h3></header></div><div class="row"><section ng-repeat="blog in blog" class="col-md-6"><a class="blog-entry" ng-href="/#/blog/{{blog.slug}}"><h4>{{blog.title}}</h4><time>{{blog.timestamp * 1000 | date:\'MMMM d, y\' : \'UTC\'}}</time><p class="summary" ng-bind-html="blog.body | words:25"></p></a></section></div></article>')}])}(),function(e){try{e=angular.module("sceendyApp")}catch(t){e=angular.module("sceendyApp",[])}e.run(["$templateCache",function(e){e.put("app/views/entry.html",'<article class="component-entry" ng-repeat="blog in blog" ng-show="$first"><div class="row"><header class="col-md-12 col-xs-12"><ul class="breadcrumb"><li><a href="/#/">home</a> &gt;</li><li><a href="/#/blog">Blog</a> &gt;</li><li>{{blog.title}}</li></ul></header></div><div class="row"><section class="col-md-12"><h2>{{blog.title}}</h2><time>{{blog.timestamp * 1000 | date:\'MMMM d, y \' + \'@ h:mm a\' }}</time><p class="summary" ng-bind-html="blog.body"></p><p class="text-center" ng-show="blog.totalCount"><button ng-click="previousPost()" class="btn btn-pink"><i class="fa fa-chevron-circle-left"></i> Previous Post</button> <button ng-click="nextPost()" class="btn btn-pink">Next Post<i class="fa fa-chevron-circle-right"></i></button></p><h5 class="text-center heading-blue-border">Have a question or comment?<br>Ask me anything: <a href="http://twitter.com/home?status=@sceendy">@sceendy</a></h5></section></div></article>')}])}(),function(e){try{e=angular.module("sceendyApp")}catch(t){e=angular.module("sceendyApp",[])}e.run(["$templateCache",function(e){e.put("app/views/footer.html",'<div class="container"><div class="row middle-earth"><div class="col-md-6 col-sm-6 col-xs-12"><p><a href="http://github.com/sceendy" target="_blank" class="btn-social"><i class="fa fa-github"></i></a> <a href="http://jsfiddle.net/user/sceendy" target="_blank" class="btn-social"><i class="fa fa-jsfiddle"></i></a> <a href="http://twitter.com/sceendy" target="_blank" class="btn-social"><i class="fa fa-twitter"></i></a> <a href="http://dribbble.com/sceendy" target="_blank" class="btn-social"><i class="fa fa-dribbble"></i></a></p></div><div class="col-md-6 col-sm-6"><p class="text-right xs-hide"></p></div></div></div>')}])}(),function(e){try{e=angular.module("sceendyApp")}catch(t){e=angular.module("sceendyApp",[])}e.run(["$templateCache",function(e){e.put("app/views/header.html",'<header class="row"><div class="col-md-9"><h1>Hi, my name is Cindy.<br>I am a UI developer in Dallas, TX.</h1></div><div class="col-md-3"><img src="/assets/images/cindy.jpg" alt="Cindy Juarez" class="profile"></div></header>')}])}(),function(e){try{e=angular.module("sceendyApp")}catch(t){e=angular.module("sceendyApp",[])}e.run(["$templateCache",function(e){e.put("app/views/home.html",'<section class="row"><div class="col-md-7 col-xs-12"><header class="component-heading"><h3>about me</h3></header><p class="indent">Pixel by pixel, I build beautiful web experiences. I have a BA in Emerging Media and Communication along with some serious<i class="fa fa-heart"></i>for the internet. With a background in design, I use modern client-side code to create high-quality interactions with an emphasis on aesthetics.</p><p class="indent">I am currently coding at a social ecommerce startup called <a href="https://joinem.com" target="_blank">Joinem</a> alongside some other awesome developers. Unfortunately, that means that I am <strong>not available</strong> for freelancing or contract work at this time.</p><p><a href="http://sceendy.com/assets/pdf/resume-web.pdf" target="_blank" class="btn btn-blue">resume.pdf</a><a href="http://github.com/sceendy" class="btn btn-blue" target="_blank">github code</a></p></div><div class="col-md-5 col-xs-12" ng-controller="portfolioController"><header class="component-heading"><h3>featured project</h3></header><a ng-href="http://{{workItem[0].url}}" class="work" target="_blank"><section><h4>{{workItem[0].client}}</h4><div class="tags" ng-repeat="tag in workItem[0].skills">{{tag}}</div><p class="summary">{{workItem[0].summary}}</p></section></a><p class="text-center"><a class="btn btn-pink text-center" href="/#/portfolio">view my portfolio</a></p></div></section><article ng-controller="blogController" class="component-portfolio"><div class="row"><header class="col-md-12 col-xs-12 component-heading"><h3>Blog</h3></header><div class="col-md-6" ng-repeat="blog in blog | limitTo: 4"><a class="blog-entry" ng-href="/#/blog/{{blog.slug}}"><h4>{{blog.title}}</h4><time>{{blog.timestamp * 1000 | date:\'MMMM d, y \' + \'@ h:mm a\' }}</time><p class="summary" ng-bind-html="blog.body | words:25"></p></a></div></div><a href="/#/blog" ng-if="blog.totalCount" class="btn btn-pink text-center">Check out other posts...</a></article>')}])}(),function(e){try{e=angular.module("sceendyApp")}catch(t){e=angular.module("sceendyApp",[])}e.run(["$templateCache",function(e){e.put("app/views/portfolio.html",'<article class="component-portfolio"><div class="row"><header class="col-md-12 col-xs-12 component-heading"><ul class="breadcrumb"><li><a href="/#/">home</a> &gt;</li><li>Portfolio</li></ul><h3>Portfolio</h3></header></div><div class="row"><a ng-repeat="work in workItem" ng-href="http://{{work.url}}" class="col-sm-6 work" target="_blank"><section><h4>{{work.client}}</h4><div class="tags" ng-repeat="tag in work.skills">{{tag}}</div><p class="summary">{{work.summary}}</p></section></a></div></article>')}])}();