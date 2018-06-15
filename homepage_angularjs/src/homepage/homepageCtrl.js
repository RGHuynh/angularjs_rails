(function(){
  angular
  .module('myApp')
  .controller('homepageCtrl', ['$http', function($http){
    var ctrl = this ;
    ctrl.post = "";
    ctrl.entries = {};

    ctrl.updateEntry = function(newEntry){
        $http({
        method: "POST",
        url: 'http://localhost:3000/lists',
        data: {name: newEntry}
      }).then(function successCallback(response){
        ctrl.entries = response.data
      });
    };

    ctrl.deleteEntry = function(id){
      $http({
        method: 'DELETE',
        url: "http://localhost:3000/lists/" + id
      });
    };


    $http({
      method: "GET",
      url: 'http://localhost:3000/lists.json'
    }).then(function successCallback(response){
      ctrl.entries = response.data;
    });

  }]);
})();



