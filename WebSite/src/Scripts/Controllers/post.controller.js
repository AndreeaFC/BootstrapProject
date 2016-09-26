/// <reference path="../angular.js" />

angular.module("myWebsiteModule")
    .controller("PostController", [
        "$scope",
        "$routeParams",
        function ($scope, $routeParams) {
            $scope.showEditForm = false;

            $scope.post = $scope.posts.filter(function (post) {
                return post.id == $routeParams.id;
            })[0];

            $scope.toggleEdit = function () {
                $scope.showEditForm = !$scope.showEditForm;
            }
        }
    ]);