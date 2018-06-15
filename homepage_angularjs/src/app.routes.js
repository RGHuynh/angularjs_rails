angular
  .module('myApp')
  .config(function($routeProvider){
    $routeProvider
      .when('/homepage', {
        templateUrl: '../src/homepage/homepage.html',
        controller: 'homepageCtrl'
      })
  })




