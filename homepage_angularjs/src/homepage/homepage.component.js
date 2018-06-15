(function(){
  'use strict';

  const config = {
    templateUrl: '../src/homepage/homepage.html',
    controller: 'homepageCtrl'
  }

  angular
  .module('myApp')
  .component('homepageList', config)
  
})();