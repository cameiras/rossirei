app.controller('standingsCtrl', function($scope, $rootScope, $http, $window) {

   $http.post('/style/allStandings').
        success(function(data) {
        	$scope.standings = data.sort(function(a,b) { return b.liked.length - a.liked.length });
        }).error(function(data) {
            console.error("error in posting");
        });
});