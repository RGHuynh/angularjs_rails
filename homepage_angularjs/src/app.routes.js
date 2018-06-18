angular
  .module('myApp')
  .config(function($routeProvider){
    $routeProvider
      .when('/', {
        template: "<homepage />"
      })
      .when('/post?', {
        template: '<post />'
      })
  })