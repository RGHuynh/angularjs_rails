(function(){
  angular
    .module('myApp')
    .controller('entryCtrl', function(){
      var ctrl = this;
      ctrl.update = function(newEntry){
        ctrl.onUpdate(newEntry);
      }

      });
})();