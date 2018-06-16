(function(){
  'use strict';

  const config = {
    templateUrl: '../src/homepage/homepage.component.html',
    controller: homepageCtrl
  }

  function homepageCtrl($http) {
    var ctrl = this ;
    ctrl.post = "";
    ctrl.entries = [];

    ctrl.createEntry = function(newEntry){
        $http({
        method: "POST",
        url: 'http://localhost:3000/lists',
        data: {name: newEntry}
      }).then(function successCallback(response){
        ctrl.entries.push(response.data);
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
  }

  angular
  .module('myApp')
  .component('homepage', config)

})();