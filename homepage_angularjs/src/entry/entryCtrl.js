(function(){
  angular
    .module('myApp')
    .controller('entryCtrl', function(){
      var ctrl = this;

      ctrl.delete = function(id){
        ctrl.onDelete({id: id});
      }
      });
})();