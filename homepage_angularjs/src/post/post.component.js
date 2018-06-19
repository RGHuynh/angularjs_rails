(function(){

  const config = {
    templateUrl: '../src/post/post.component.html',
    controller: postCtrl
  }

  function postCtrl($http, $routeParams){
    var ctrl = this;

    ctrl.post = [];
    ctrl.location = $routeParams.id;
    ctrl.newBody = "";

    ctrl.updateEntry = function(id, newPost){
      $http({
        method: "PATCH",
        url: "http://localhost:3000/posts/" + id + '.json',
        data: {body: newPost}
      }).then(function successCallback(response){
        ctrl.post.body = response.data.body;
      });
    };

      $http({
        method: 'GET',
        url: 'http://localhost:3000/posts/' + ctrl.location + '.json'
      }).then(function successCallback(response){
        ctrl.post = response.data
      }, function(error){
        console.log(error);
      });

  }

  angular
    .module('myApp')
    .component('post', config);
})();
