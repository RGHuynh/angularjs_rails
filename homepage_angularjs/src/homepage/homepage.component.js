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
      });
    };

    ctrl.createEntry = function(newEntry){
        $http({
        method: "POST",
        url: 'http://localhost:3000/lists',
        data: {name: newEntry}
      }).then(function successCallback(response){
        ctrl.createPosts(response.data.name, response.data.id)
        ctrl.entries.push(response.data);
      });
    };

    ctrl.deleteEntry = function(id){
      $http({
        method: 'DELETE',
        url: "http://localhost:3000/lists/" + id + '.json'
      }).then(function successCallback(response){
        var index;
        for(var i = 0; i < ctrl.entries.length; i++){
          if(ctrl.entries[i].id === id){
            index = i;
          }
        }
        ctrl.entries.splice(index, 1);
      })
    };

    $http({
      method: "GET",
      url: 'http://localhost:3000/lists.json'
    }).then(function successCallback(response){
      ctrl.entries = response.data;
    });

    ctrl.createPosts = function(newPost, id){
      $http({
        method: "POST",
        url:'http://localhost:3000/posts.json',
        data: {title: newPost, list_id: id}
      }).then(function successCallback(response){
        console.log(response);
      })
    };
    
  }

  angular
  .module('myApp')
  .component('homepage', config);

})();