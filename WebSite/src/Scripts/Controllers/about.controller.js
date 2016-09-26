/// <reference path="../angular.js" />

angular.module("myWebsiteModule")
    .controller("AboutController", [
        "$scope",
        function ($scope) {
            $scope.title = "About";
        }
    ]);