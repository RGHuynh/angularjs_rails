(function(){
  angular
    .module('appApp')
    .controller('entryCtrl', function($http){
      $http({
        method: "GET",
        url: 'http://localhost:3000/lists.json'
      }).then(function successCallback(response){
        angular.forEach(response.data, function(key, value){
          $scope.entry = key.name;
        });
      });
    })
})();