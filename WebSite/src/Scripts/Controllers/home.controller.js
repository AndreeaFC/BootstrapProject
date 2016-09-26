/// <reference path="../angular.js" />

angular.module("myWebsiteModule")
    .controller("HomeController", [
        "$scope",
        function ($scope) {
            $scope.title = "Home";
            //$scope.showList = false;
            //$scope.newPost = {};

            //// show list
            //$scope.toggleList = function () {
            //    $scope.showList = !$scope.showList;
            //}

            //// add new post
            //$scope.submit = function () {
            //    if ($scope.newPost) {
            //        $scope.newPost.id = $scope.getNextAvailableId();
            //        $scope.posts.push($scope.newPost);
            //        $scope.newPost = {};
            //    }
            //}

            //$scope.delete = function (post) {
            //    $scope.posts.splice($scope.posts.indexOf(post), 1);
            //}
        }
    ]);