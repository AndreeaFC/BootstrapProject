/// <reference path="../angular.js" />
/// <reference path="../angular-route.js" />

angular.module("myWebsiteModule")
    .config([
        "$routeProvider",
        "$locationProvider",
        function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);

            $routeProvider

                .when("/", {
                    templateUrl: "Views/Home.html",
                    controller: "HomeController",
                    caseInsensitiveMatch: true,
                    activeTab: "Home"
                })

                .when("/About", {
                    templateUrl: "Views/About.html",
                    controller: "AboutController",
                    caseInsensitiveMatch: true,
                    activeTab: "About"
                })

                .when("/Post/:id", {
                    templateUrl: "Views/Post.html",
                    controller: "PostController",
                    caseInsensitiveMatch: true,
                    activeTab: "Posts"
                })
            
                .when("/Posts", {
                    templateUrl: "Views/Posts.html",
                    controller: "PostsController",
                    caseInsensitiveMatch: true,
                    activeTab: "Posts"
                });
        }
    ]);