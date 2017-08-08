(function () {
	'use strict';
	app.controller('coursesController', coursesController);
	function coursesController($location, $scope) {
		$scope.title = 'courses Controller';
		$scope.courses = ["C#", "VB.NET", "ASP.NET", "SQL Server"];
	}
})();
