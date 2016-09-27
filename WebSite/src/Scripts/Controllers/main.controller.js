/// <reference path="../angular.js" />

angular.module("myWebsiteModule")
    .controller("MainController", [
        "$scope",
        "$route",
        function ($scope, $route) {
            $scope.$route = $route;
            $scope.posts = [];
            $scope.nextAvailableId = 0;

            $scope.loadPosts = function () {
                var dataString = localStorage.getItem("posts");

                if (dataString) {
                    $scope.posts = JSON.parse(dataString);
                }
            }

            $scope.loadNextAvailableId = function () {
                var dataString = localStorage.getItem("nextAvailableId");

                if (dataString) {
                    $scope.nextAvailableId = JSON.parse(dataString);
                }
            }

            $scope.retrieveNextAvailableId = function () {
                var id = $scope.nextAvailableId++;
                $scope.saveNextAvailableId();
                return id;
                //return $scope.nextAvailableId++;
            }

            $scope.saveNextAvailableId = function () {
                var jsonString = JSON.stringify($scope.nextAvailableId);
                localStorage.setItem("nextAvailableId", jsonString);
            }

            $scope.savePosts = function () {
                var jsonString = JSON.stringify($scope.posts);
                localStorage.setItem("posts", jsonString);
            }

            $scope.loadNextAvailableId();
            $scope.loadPosts();
        }


       
        //    // create 5 posts
        //    for (var i = 0; i < 5; ++i) {
        //        $scope.posts.push({
        //            id: $scope.getNextAvailableId(),
        //            title: "post " + (i + 1),
        //            body: "post " + (i + 1) + " body"
        //        });
        //    }

    ]);