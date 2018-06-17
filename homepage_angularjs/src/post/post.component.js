(function(){

  const config = {
    templateUrl: '../src/post/post.component.html',
    controller: postCtrl
  }

  function postCtrl(){
    var ctrl = this;
    ctrl.test = 'hello world'
  }

  angular
    .module('myApp')
    .component('post', config);
})();
