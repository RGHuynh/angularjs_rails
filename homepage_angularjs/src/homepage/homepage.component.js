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

    ctrl.updateEntry = function(id, newEntry){
      $http({
        method: "PATCH",
        url: "http://localhost:3000/lists/" + id + ".json",
        data: {name: newEntry}
      }).then(function successCallback(response){
        for(var i = 0; i <= ctrl.entries.length; i++){
          if(ctrl.entries[i].id === id){
            ctrl.entries.splice(i, 1);
            ctrl.entries.push(response.data);
            break;
          }
        }


      })
    }

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