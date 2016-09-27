/// <reference path="../angular.js" />

angular.module("myWebsiteModule")
    .controller("HomeController", [
        "$scope",
        function ($scope) {
            $scope.title = "Home";
        }
    ]);