"use strict";angular.module("sceendyApp",["ngAnimate","ngTouch","ngResource","ngRoute","ngSanitize","truncate"]).config(["$routeProvider",function(e){e.when("/",{templateUrl:"app/views/home.html",title:"Home"}).when("/work",{templateUrl:"app/work/work.html",controller:"workController",title:"Work"}).when("/blog",{templateUrl:"app/blog/blog.html",controller:"blogController",title:"Blog"}).when("/blog/:id",{templateUrl:"app/blog/entry.html",controller:"blogController",title:"Blog Post"}).otherwise({redirectTo:"/"})}]).controller("appController",["$rootScope","$scope",function(e,n){e.$on("$routeChangeSuccess",function(n,t){e.title=t.title}),n.currentYear=(new Date).getFullYear()}]),function(e){try{e=angular.module("sceendyApp")}catch(n){e=angular.module("sceendyApp",[])}e.run(["$templateCache",function(e){e.put("app/blog/blog.html",'<article class="component-portfolio"><div class="row"><div class="col-md-12 col-xs-12"><header class="component-heading"><h3>Blog</h3></header></div></div><div class="row"><a class="blog-entry col-md-6" ng-repeat="(key, post) in posts.items" ng-href="/#/blog/{{ key }}"><h4>{{posts.items[key].title}}</h4><time class="small">{{posts.items[key].published | date:\'MMMM d, y\' : \'UTC\'}}</time><p class="summary" ng-bind-html="posts.items[key].content | words:25"></p><small><strong>related to:</strong> <span ng-repeat="label in posts.items[key].labels">{{ label }}<span ng-if="!$last">+</span></span></small></a></div></article>')}])}(),angular.module("sceendyApp").factory("Blog",["$resource",function(e){return e("https://www.googleapis.com/blogger/v3/blogs/5718631717220089292/posts?key=AIzaSyCqUv0mNrHN0cEB7gwqiWC0A0rs71lpwgE",{query:{method:"GET",isArray:!1}})}]).controller("blogController",["$scope","$routeParams","Blog","$sce",function(e,n,t,o){e.posts=t.get({id:n.id}),e.key=n.id,e.blogContent=function(){return o.trustAsHtml(e.posts.items[e.key].content)}}]),function(e){try{e=angular.module("sceendyApp")}catch(n){e=angular.module("sceendyApp",[])}e.run(["$templateCache",function(e){e.put("app/work/work.html",'<article class="component-portfolio"><div class="row"><div class="col-md-12 col-xs-12"><header class="component-heading"><h3>Work</h3></header><a href="#modal-one" class="btn btn-big">Modal!</a></div></div><div class="row"><a ng-repeat="work in workItem" class="col-sm-6 work" ng-href="http://{{ ::work.url }}" target="_blank"><img ng-src="{{ ::work.image }}" alt="{{ ::work.client }}"><section><h4>{{ work.client }}</h4><div class="tags" ng-repeat="tag in work.skills">{{tag}}</div><p class="summary">{{ work.summary }}</p></section></a></div></article>')}])}(),angular.module("sceendyApp").controller("workController",["$scope",function(e){e.workItem=[{client:"Joinem",url:"web.archive.org/web/20150530073743/https://www.joinem.com/",image:"/assets/images/work/joinem.png",skills:["HTML/SCSS","AngularJS","jQuery"],screenshots:["/assets/images/work/joinem/joinem-mobile-left.png","/assets/images/work/joinem/joinem-mobile-right.png"],summary:"Joinem was a single page application built using AngularJS that consumed a RESTful API. I wrote frontend code while adhering to SMACSS methodology and provided support in product design."},{client:"Extraco Banks",url:"www.extracobanks.com/rewards/",image:"/assets/images/work/extraco.png",skills:["HTML/CSS","AngularJS","jQuery"],summary:"I built the frontend of the Extraco Rewards page for users to quickly find where they can filter to see where they can aquire Rewards. I did some maintenance after launch as well."},{client:"TSATA",url:"www.tsata.com",image:"/assets/images/work/tsata.png",skills:["HTML/LESS","JS","PHP"],summary:"I launched their new site for which I created a custom WordPress theme. Customized a job manager plugin to suit their needs. I continue to update and do maintenance from time to time."},{client:"TX Concussion Partnership",url:"www.txconcussionlaw.com",image:"/assets/images/work/tscp.png",skills:["HTML/SCSS","JS","AngularJS","PHP","Design"],summary:"Designed and developed a custom WordPress theme, perform monthly maintenance, and currently working on developing a custom WP plugin for the site."},{client:"Studio Movie Grill",url:"ticketdeals.studiomoviegrill.com/",image:"/assets/images/work/smg.png",skills:["HTML/CSS","PHP"],summary:"Studio Movie Grill has $5 ticket deals that were initially only available on Facebook but I built a micro-site for them that made them available that didn't require movie goers to have a Facebook account."},{client:"Visionworks",url:"www.visionworks.com/info/",image:"/assets/images/work/visionworks.png",skills:["HTML/CSS","JS"],summary:"Maintained the Visionworks website, created their responsive email templates, improved display for smaller devices, and created landing pages."},{client:"Stage Stores",url:"www.stagestores.com/store/account/findyourstore.jsp",image:"/assets/images/work/stagestores.png",skills:["HTML/CSS","PHP"],summary:"While at Apollo Interactive, I handled the maintenance on the Stage Stores website and developed the interface for their store locator."},{client:"Wingstop",url:"www.wingstop.com",image:"/assets/images/work/wingstop.png",skills:["HTML/CSS","PHP"],summary:"While at Apollo Interactive, I performed front-end maintenance for Wingstop website along with improvements throughout the site including the Franchise pages."},{client:"KHYI 95.3FM",url:"www.khyi.com",image:"/assets/images/work/khyi.png",skills:["HTML/CSS","PHP","JS"],summary:"Customized a WordPress theme, customized plugins, improved layout/accessibilty, and helped increase traffic to their website. "},{client:"Curves",url:"french.curves.com",image:"/assets/images/work/curves.png",skills:["HTML/CSS","PHP"],summary:"While at Apollo Interactive, I maintained and created new pages for the international Curves websites that included Australia, New Zealand, France, and the UK."}]}]),function(e){try{e=angular.module("sceendyApp")}catch(n){e=angular.module("sceendyApp",[])}e.run(["$templateCache",function(e){e.put("app/404.html",'<style>\n    ::-moz-selection {\n        background: #b3d4fc;\n        text-shadow: none;\n    }\n\n    ::selection {\n        background: #b3d4fc;\n        text-shadow: none;\n    }\n\n    html {\n        padding: 30px 10px;\n        font-size: 20px;\n        line-height: 1.4;\n        color: #737373;\n        background: #f0f0f0;\n        -webkit-text-size-adjust: 100%;\n        -ms-text-size-adjust: 100%;\n    }\n\n    html,\n    input {\n        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n    }\n\n    body {\n        max-width: 500px;\n        _width: 500px;\n        padding: 30px 20px 50px;\n        border: 1px solid #b3b3b3;\n        border-radius: 4px;\n        margin: 0 auto;\n        box-shadow: 0 1px 10px #a7a7a7, inset 0 1px 0 #fff;\n        background: #fcfcfc;\n    }\n\n    h1 {\n        margin: 0 10px;\n        font-size: 50px;\n        text-align: center;\n    }\n\n    h1 span {\n        color: #bbb;\n    }\n\n    h3 {\n        margin: 1.5em 0 0.5em;\n    }\n\n    p {\n        margin: 1em 0;\n    }\n\n    ul {\n        padding: 0 0 0 40px;\n        margin: 1em 0;\n    }\n\n    .container {\n        max-width: 380px;\n        _width: 380px;\n        margin: 0 auto;\n    }\n\n    /* google search */\n\n    #goog-fixurl ul {\n        list-style: none;\n        padding: 0;\n        margin: 0;\n    }\n\n    #goog-fixurl form {\n        margin: 0;\n    }\n\n    #goog-wm-qt,\n    #goog-wm-sb {\n        border: 1px solid #bbb;\n        font-size: 16px;\n        line-height: normal;\n        vertical-align: top;\n        color: #444;\n        border-radius: 2px;\n    }\n\n    #goog-wm-qt {\n        width: 220px;\n        height: 20px;\n        padding: 5px;\n        margin: 5px 10px 0 0;\n        box-shadow: inset 0 1px 1px #ccc;\n    }\n\n    #goog-wm-sb {\n        display: inline-block;\n        height: 32px;\n        padding: 0 10px;\n        margin: 5px 0 0;\n        white-space: nowrap;\n        cursor: pointer;\n        background-color: #f5f5f5;\n        background-image: -webkit-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n        background-image: -moz-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n        background-image: -ms-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n        background-image: -o-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none;\n        *overflow: visible;\n        *display: inline;\n        *zoom: 1;\n    }\n\n    #goog-wm-sb:hover,\n    #goog-wm-sb:focus {\n        border-color: #aaa;\n        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n        background-color: #f8f8f8;\n    }\n\n    #goog-wm-qt:hover,\n    #goog-wm-qt:focus {\n        border-color: #105cb6;\n        outline: 0;\n        color: #222;\n    }\n\n    input::-moz-focus-inner {\n        padding: 0;\n        border: 0;\n    }\n</style><h1>Not found <span>:(</span></h1><p>Sorry, but the page you were trying to view does not exist.</p><p>It looks like this was the result of either:</p><ul><li>a mistyped address</li><li>an out-of-date link</li></ul>')}])}(),function(e){try{e=angular.module("sceendyApp")}catch(n){e=angular.module("sceendyApp",[])}e.run(["$templateCache",function(e){e.put("app/blog/entry.html",'<article class="component-entry"><div class="row"><header class="col-md-12 col-xs-12"><h2 class="blog-title">{{posts.items[key].title}}</h2><time class="small">{{posts.items[key].published | date:\'MMMM d, y \' + \'@ h:mm a\' }}</time></header></div><div class="row"><section class="col-md-12"><p class="blog-text" ng-bind-html="blogContent()"></p><h5 class="text-center heading-blue-border">Have a question or comment?<br>Ask me anything: <a href="http://twitter.com/home?status=@sceendy">@sceendy</a></h5></section></div></article>')}])}(),function(e){try{e=angular.module("sceendyApp")}catch(n){e=angular.module("sceendyApp",[])}e.run(["$templateCache",function(e){e.put("app/views/home.html",'<section class="row"><div class="col-md-7 col-xs-12"><header class="component-heading"><h3>about me</h3></header><p class="indent">Pixel by pixel, I create beautiful web experiences. I have a BA in Emerging Media and Communication along with some serious<i class="fa fa-heart"></i>for the internet. So, I enjoy building awesome + modern web applications.</p><p class="indent">I have worked for digital agencies and a startup - both in office and remotely. I am currently looking for a remote front-end position.</p><p><a href="http://sceendy.com/assets/pdf/resume-web.pdf" target="_blank" class="btn btn-blue">resume.pdf | 145kb</a><a href="http://github.com/sceendy" class="btn btn-blue" target="_blank">github code</a></p></div><div class="col-md-5 col-xs-12"><header class="component-heading"><h3>recently worked on</h3></header><aside class="sidebar"><h4 class="sidebar--heading">Joinem</h4><ul class="completed"><li>845 commits</li><li>68,488 lines added</li><li>54,311 lines deleted</li><li>designed mobile version</li></ul></aside><p class="text-center"><a class="btn btn-pink text-center" href="/#/work">view my work</a></p></div></section><article ng-controller="blogController" class="component-portfolio"><div class="row"><div class="col-md-12 col-xs-12"><header class="component-heading"><h3>Blog</h3></header></div><div class="col-md-12" ng-hide="posts.$resolved"><img src="/assets/images/spinner.gif" class="block-center"></div><div class="col-md-4 col-sm-6 col-xs-12" ng-repeat="(key, post) in posts.items"><a class="blog-entry" ng-href="/#/blog/{{ key }}"><h4>{{ posts.items[key].title }}</h4><time>{{ posts.items[key].published | date:\'MMMM d, y \' + \'@ h:mm a\' }}</time><small><strong>topics</strong>: <span ng-repeat="label in posts.items[key].labels">{{ label }}<span ng-if="!$last">+</span></span></small></a></div><div class="col-md-4 col-xs-12 block-center" ng-if="!post.items.length%2 == 0"><a href="/#/blog" class="blog-block">View older posts...</a></div></div></article>')}])}();