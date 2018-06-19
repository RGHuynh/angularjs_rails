(function(){

  const config = {
    templateUrl: '../src/entry/entry.component.html',
    controller: entryCtrl,
    bindings: {
      name: '<',
      onDelete: '&',
      onUpdate: '&'
    }
  }

  function entryCtrl($http){
    var ctrl = this;
    ctrl.post = [];
    
    ctrl.newEntry = undefined;

    ctrl.delete = function(id){
      ctrl.onDelete({id: id});
    };

    ctrl.update = function(id, newEntry){
      ctrl.onUpdate({id: id, newEntry: newEntry});
    };


    // ctrl.getPost = function(id){
    //   $http({
    //     method: 'GET',
    //     url: 'http://localhost:3000/posts/' + id + '.json'
    //   }).then(function successCallback(response){
    //     ctrl.post = response.data
    //   }, function(error){
    //     console.log(error);
    //   });
    // }
  }
  
  angular
    .module('myApp')
    .component('entry', config)
})();