(function(){
  angular
    .module('myApp')
    .controller('entryCtrl', function(){
      var ctrl = this;
      
      ctrl.newEntry = undefined;

      ctrl.delete = function(id ,newEntry){
        ctrl.onDelete({id: id});
      };

      ctrl.update = function(id, newEntry){
        ctrl.onUpdate({id: id, newEntry: newEntry});
      };

      });
})();