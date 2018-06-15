(function(){
  angular
    .module('myApp', ['ngRoute'])
    .config(function($routeProvider){
      $routeProvider
        .when('/', {
          templateUrl: '../src/homepage/homepg.html',
          controller: 'homepgCtrl'
        })
    })

})();



