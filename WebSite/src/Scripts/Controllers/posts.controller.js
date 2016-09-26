/// <reference path="../angular.js" />

angular.module("myWebsiteModule")
    .controller("PostsController", [
        "$scope",
        function ($scope) {
            $scope.title = "Posts";
            $scope.newPost = {};

            $scope.addPost = function () {
                $scope.posts.push($scope.newPost);
                $scope.newPost = {};
                $scope.savePosts();
            }
        }
    ])