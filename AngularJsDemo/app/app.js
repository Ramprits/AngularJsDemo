
var app = angular
            .module("Demo", ["ngRoute", "common.services"])
            .config(function ($routeProvider, $locationProvider) {
                $routeProvider
                    .when("/home", {
                        templateUrl: "Templates/home.html",
                        controller: "homeController"
                    })
                    .when("/courses", {
                        templateUrl: "Templates/courses.html",
                        controller: "coursesController"
                    })
                    .when("/students", {
                        templateUrl: "Templates/students.html",
                        controller: "studentsController"
                    }).otherwise({
                        redirectTo: "/home"
                    });
                $locationProvider.html5Mode(true);
            });