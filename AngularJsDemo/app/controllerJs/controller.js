(function () {
    'use strict';

    angular
        .module('app')
        .controller('studentsController', studentsController);

    studentsController.$inject = ['$location', "$scope", "$http"];

    function studentsController($location, $scope, $http) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'studentsController';
        $http({
            method: 'GET',
            url: 'http://localhost:51383/api/Products'
        }).then(function successCallback(response) {
            $scope.products = response.data;
        }, function errorCallback(response) {
            console.log(response);
        });
        activate();

        function activate() { }
    }
})();
