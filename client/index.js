var app = angular.module('app', [ 'ngRoute' ]);
app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: './compnent/homehtml.html',
			controller: 'testctrl'
		})
		.when('/signup', {
			templateUrl: './compnent/signup.html',
			controller: 'homeController'
		})
		.when('/workerSignup', {
			templateUrl: './compnent/workerSignup.html',
			controller: 'workerSignup'
		})
		.when('/workerSignin', {
			templateUrl: './compnent/workerSignin.html',
			controller: 'workerSignin'
		})
		.when('/signupEng', {
			templateUrl: './compnent/signupEng.html',
			controller: 'signupEng'
		})
		.when('/signinEng', {
			templateUrl: './compnent/signinEng.html',
			controller: 'signinEng'
		})
		.when('/WorkerProfile/:id', {
			templateUrl: './compnent/WorkerProfile.html',
			controller: 'WorkerProfile'
		})
		.when('/workerscategory', {
			templateUrl: './compnent/workerscategory.html',
			controller: 'workerscategory'
		})
		.when('/workerPage', {
			templateUrl: './compnent/workerMainPage.html',
			controller: 'workerMainPageController'
		})
		.when('/engPage', {
			templateUrl: './compnent/engPage.html',
			controller: 'engPage'
		});
});
app.service('worker_id_service', function() {
	var worker_id;
});
