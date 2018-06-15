(function(){
  angular
    .module('myApp', ['ngRoute'])
    .config(function($routeProvider){
      $routeProvider
        .when('/homepage', {
          templateUrl: '../src/homepage/homepage.html',
          controller: 'homepageCtrl'
        })
    })
})();



