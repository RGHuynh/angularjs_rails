(function(){

  const config = {
    templateUrl: '../src/post/post.component.html',
    controller: postCtrl
  }

  function postCtrl($http, $location){
    var ctrl = this;

    ctrl.posts = [];
    ctrl.location = $location.search().id

    ctrl.getPost = function(id){
      $http({
        method: 'GET',
        url: 'http://localhost:3000/posts/' + id + '.json'
      }).then(function successCallback(response){
        ctrl.posts.push(response.data);
      }, function(error){
        console.log(error);
      })
    }




  }

  angular
    .module('myApp')
    .component('post', config);
})();
