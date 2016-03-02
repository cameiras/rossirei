app.controller('standingsCtrl', function($scope, $rootScope, $http, $window) {

   $http.post('/style/allStandings').
        success(function(data) {
        	console.log('DATA' + data);
            $scope.standings = data.sort(function(a,b) { return b.liked.length - a.liked.length });
            console.log(data[1]);
        }).error(function(data) {
            console.error("error in posting");
        });
});