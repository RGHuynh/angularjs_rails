(function(angular){
  angular
    .module('myApp')
    .component('entry', {
      templateUrl: '../src/entry/entry.html',
      controller: 'entryCtrl',
      bindings: {
        name: '<'
      }
    })
})(window.angular);