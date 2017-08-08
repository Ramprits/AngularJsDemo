(function () {
    'use strict';
    app.controller('homeController', homeController);
    function homeController($location, $scope) {
        $scope.title = 'homeController';
        $scope.message = "Home Page from controller";
    }
})();
