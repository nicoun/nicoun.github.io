
var App = angular.module('App',['ngRoute','Controllers']);

App.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/one',{
		templateUrl: './view/one.html',
		controller: 'oneCtrl'
	})
	.when('/two',{
		templateUrl: './view/two.html',
		controller: 'twoCtrl'
	})
	.when('/three',{
		templateUrl: './view/three.html'
	})
	.when('/four',{
		templateUrl: './view/four.html'
	})
	.when('/five',{
		templateUrl: './view/five.html'
	})
	.when('/six',{
		templateUrl: './view/six.html',
		controller: 'sixCtrl'
	})
	.otherwise({
		redirectTo: '/one'
	});
}])