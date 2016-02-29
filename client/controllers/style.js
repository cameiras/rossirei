app.controller('styleCtrl', function($scope, $rootScope, $http, $window) {

   $http.post('/style/styleselector',$scope.formData).
        success(function(data) {
            console.log("posted successfully");
            $scope.photos = data;
        }).error(function(data) {
            console.error("error in posting");
        })

});