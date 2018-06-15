(function(angular){
  angular
    .module('myApp')
    .component('homepageList', {
      templateUrl: '../src/homepage/homepage.html',
      controller: 'homepageCtrl'
    })
})(window.angular);