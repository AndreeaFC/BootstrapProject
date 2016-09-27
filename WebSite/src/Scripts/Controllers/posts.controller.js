/// <reference path="../angular.js" />

angular.module("myWebsiteModule")
    .controller("PostsController", [
        "$scope",
        "$location",
        function ($scope, $location) {
            $scope.title = "Posts";
            $scope.newPost = {};
            $scope.showList = false;

            $scope.addPost = function () {
                $scope.newPost.id = $scope.retrieveNextAvailableId();
                $scope.posts.push($scope.newPost);
                $scope.newPost = {};
                $scope.savePosts();
            }

            $scope.delete = function (post) {
                $scope.posts.splice($scope.posts.indexOf(post), 1);
            }

            $scope.go = function (url) {
                $location.path(url);
            }

            $scope.toggleList = function () {
                $scope.showList = !$scope.showList;
            }
        }
    ])