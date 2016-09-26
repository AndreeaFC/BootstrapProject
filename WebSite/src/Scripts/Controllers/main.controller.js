/// <reference path="../angular.js" />

angular.module("myWebsiteModule")
    .controller("MainController", [
        "$scope",
        "$location",
        function ($scope, $location) {
            $scope.posts = [];
            $scope.nextAvailableId = 0;

            $scope.getNextAvailableId = function () {
                return $scope.nextAvailableId++;
            }

            // create 5 posts
            for (var i = 0; i < 5; ++i) {
                $scope.posts.push({
                    id: $scope.getNextAvailableId(),
                    title: "post " + (i + 1),
                    body: "post " + (i + 1) + " body"
                });
            }

            $scope.go = function (url) {
                $location.path(url);
            }
        }
    ]);