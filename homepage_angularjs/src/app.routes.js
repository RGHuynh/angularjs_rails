angular
  .module('myApp')
  .config(function($routeProvider){
    $routeProvider
      .when('/', {
        template: "<homepage />"
      })
      .when('/post/:id', {
        template: '<post />'
      })
  })