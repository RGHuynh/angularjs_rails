(function(){
  angular
  .module('myApp')
  .controller('homepgCtrl', ['$scope','$http', function($scope, $http){
    $scope.welcome = "welcome ";

    $http({
      method: "GET",
      url: 'http://localhost:3000/lists.json'
    }).then(function successCallback(response){
      
      angular.forEach(response.data, function(key, value){
        $scope.entry = key.name;
      });
    });



  }]);
})();



