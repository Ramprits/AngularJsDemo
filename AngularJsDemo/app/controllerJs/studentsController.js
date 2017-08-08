(function () {
    'use strict';

    angular
        .module('Demo')
        .controller('studentsController', studentsController);

    studentsController.$inject = ['$location', "$scope", "$http", "productResource"];

    function studentsController($location, $scope, $http, productResource) {
        /* jshint validthis:true */
        productResource.query({
            $filter: "contains(ProductCode, 'GDN') and Price ge 5 and Price le 20",
            $orderby: "Price desc"
        },
           function (data) {
               $scope.products = data;
           });
    }
})();
