(function(){
  angular
  .module('myApp')
  .controller('homepageCtrl', ['$scope','$http', function($scope, $http){
    var ctrl = this ;
    ctrl.entries = {};

    $http({
      method: "GET",
      url: 'http://localhost:3000/lists.json'
    }).then(function successCallback(response){
      ctrl.entries = response.data;
    });

  }]);
})();



