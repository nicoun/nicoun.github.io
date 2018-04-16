// 实例一个模块，用来专门管理所有的控制器
angular.module('Controllers', [])

.controller('oneCtrl',['$scope','$http',function($scope,$http){

	$http({

		url:'./view/one.php'

	}).success(function(data){

		$scope.content = data;

	});

}])
.controller('twoCtrl',['$scope','$http',function($scope,$http){

	$http({

		url:'./view/two.php'

	}).success(function(data){

		$scope.content = data;

	});

}])
.controller('sixCtrl',['$scope','$http',function($scope,$http){

	$http({

		url:'./view/six.php'

	}).success(function(data){

		$scope.content = data;

	});

}])
.controller('navCtrl',['$scope',function($scope){

	$scope.navs = [

		{link:'#/one',text:'first Page'},
		{link:'#/two',text:'second Page'},
		{link:'#/three',text:'third Page'},
		{link:'#/four',text:'fourthly Page'},
		{link:'#/five',text:'fifths Page'},
		{link:'#/six',text:'sixth Page'}
		
	]


}])