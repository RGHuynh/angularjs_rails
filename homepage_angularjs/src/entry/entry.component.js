(function(){

  const config = {
    templateUrl: '../src/entry/entry.component.html',
    controller: entryCtrl,
    bindings: {
      name: '<',
      onDelete: '&',
      onUpdate: '&',
      onCreate: '&'
    }
  }

  function entryCtrl(){
    var ctrl = this;
    
    ctrl.newEntry = undefined;

    ctrl.delete = function(id){
      ctrl.onDelete({id: id});
    };

    ctrl.update = function(id, newEntry){
      ctrl.onUpdate({id: id, newEntry: newEntry});
    };

    ctrl.createPost = function(newEntry, id){
      ctrl.onCreate({newEntry: newEntry, id: id});
    }
  }
  
  angular
    .module('myApp')
    .component('entry', config)
})();