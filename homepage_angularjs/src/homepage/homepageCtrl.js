(function(){
  angular
  .module('myApp')
  .controller('homepgCtrl', ['$scope','$log', function($scope, $log){
    $scope.welcome = "welcome world";
    $log.log('work');
  }]);
})();



