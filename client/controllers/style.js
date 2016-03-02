app.controller('styleCtrl', function($scope, $rootScope, $http, $window) {

  $scope.form = {};
  //$scope.selectedLike = false;

  $scope.comment = function(photoId, commentText){
	     var commentReq  = {};
	     commentReq.photoId = photoId;
	     commentReq.comment = commentText
	     $http.post('/style/comment', commentReq).
	        success(function(data) {
	           
	        }).error(function(data) {
	            console.error("error in liking photo");
      	});
     };
  
   $scope.userId = JSON.parse(localStorage.getItem('currentUser'))._id;
	function inArray(array, search) {
	    return array.indexOf(search) >= 0;
	}

   $http.post('/style/styleselector',$scope.formData).
        success(function(data) {
            console.log("get style successfully");
            $scope.photos = data;
            for(var i = 0; i < $scope.photos.length; i++) {
            	if(inArray($scope.photos[i].liked, $scope.userId)) {
            		$scope.photos[i].liked_bool = true;
            	}
            	if(inArray($scope.photos[i].disliked, $scope.userId)) {
            		$scope.photos[i].disliked_bool = true;
            	}
            }
        }).error(function(data) {
            console.error("error in posting");
      	});

	$scope.like = function(photoId, photoName){
	     var likeReq  = {};
	     likeReq.photoId = photoId;
	     likeReq.photoName = photoName;
	     likeReq.userId = JSON.parse(localStorage.getItem('currentUser'))._id;
	     for (var i = 0; i < $scope.photos.length; i++) {
	     	if(photoId === $scope.photos[i]._id) {
	     		$scope.photos[i].liked_bool = true;
	     		$scope.photos[i].disliked_bool = false;
	     	}
	     }
	     $http.post('/style/like', likeReq).
	        success(function(data) {
	            for(var i = 0; i < $scope.photos.length; i++) {
	            	if ($scope.photos[i]._id == data.photo_id) {
	            		$scope.photos[i].liked_bool = true;
	            		$scope.photos[i].disliked_bool = false;
	            	}
	            }
	        }).error(function(data) {
	            console.error("error in liking photo");
      	});
     };

	$scope.dislike = function(photoId, photoName){
	  var dislikeReq  = {};
	  dislikeReq.photoId = photoId;
	  dislikeReq.photoName = photoName;
	  dislikeReq.userId = JSON.parse(localStorage.getItem('currentUser'))._id;
     for (var i = 0; i < $scope.photos.length; i++) {
     	if(photoId === $scope.photos[i]._id) {
     		$scope.photos[i].disliked_bool = true;
     		$scope.photos[i].liked_bool = false;
     	}
     }
      $http.post('/style/dislike', dislikeReq).
        success(function(data) {
	        for(var i = 0; i < $scope.photos.length; i++) {
	        	if ($scope.photos[i]._id == data.photo_id) {
	        		$scope.photos[i].liked_bool = false;
	        		$scope.photos[i].disliked_bool = true;
	        	}
	        }
        }).error(function(data) {
            console.log("photo was not disliked successfully");  
      	});
	};

});