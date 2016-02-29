app.controller('standingsCtrl', function($scope, $rootScope, $http, $window) {

   $http.post('/style/allStandings',$scope.formData).
        success(function(data) {
            $scope.standings = data;
        }).error(function(data) {
            console.error("error in posting");
        })

});