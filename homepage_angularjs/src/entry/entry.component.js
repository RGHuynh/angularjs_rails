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

  function entryCtrl(){
    var ctrl = this;
    
    ctrl.newEntry = undefined;

    ctrl.delete = function(id){
      ctrl.onDelete({id: id});
    };

    ctrl.update = function(id, newEntry){
      ctrl.onUpdate({id: id, newEntry: newEntry});
    };
  }
  
  angular
    .module('myApp')
    .component('entry', config)
})();