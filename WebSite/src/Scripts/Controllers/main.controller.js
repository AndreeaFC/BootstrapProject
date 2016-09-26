/// <reference path="../angular.js" />

angular.module("myWebsiteModule")
    .controller("MainController", [
        "$scope",
        "$route",
        function ($scope, $route) {
            $scope.$route = $route;
            $scope.posts = [];

            // load posts
            $scope.loadPosts = function () {
                var dataString = localStorage.getItem("posts");

                if (dataString)
                    $scope.posts = JSON.parse(dataString);
            }

            $scope.savePosts = function () {
                var jsonString = JSON.stringify($scope.posts);
                localStorage.setItem("posts", jsonString);
            }

            $scope.loadPosts();
        }


        //"$location",
        //function ($scope, $location) {
        //    $scope.posts = [];
        //    $scope.nextAvailableId = 0;

        //    $scope.getNextAvailableId = function () {
        //        return $scope.nextAvailableId++;
        //    }

        //    // create 5 posts
        //    for (var i = 0; i < 5; ++i) {
        //        $scope.posts.push({
        //            id: $scope.getNextAvailableId(),
        //            title: "post " + (i + 1),
        //            body: "post " + (i + 1) + " body"
        //        });
        //    }

        //    $scope.go = function (url) {
        //        $location.path(url);
        //    }
        //}
    ]);