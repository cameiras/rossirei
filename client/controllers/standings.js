app.controller('standingsCtrl', function($scope, $rootScope, $http, $window) {

   $http.post('/style/allStandings').
        success(function(data) {
        	console.log('DATA' + data);
            $scope.standings = data;
        }).error(function(data) {
            console.error("error in posting");
        });
});