(function(){

  const config = {
    templateUrl: '../src/post/post.component.html',
    controller: postCtrl
  }

  function postCtrl($http, $location){
    var ctrl = this;

    ctrl.posts = [];
    ctrl.location = $location.search().id
    ctrl.newBody;

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

    ctrl.deleteEntry = function(id){
      $http({
        method: 'DELETE',
        url: "http://localhost:3000/lists/" + id + '.json'
      }).then(function successCallback(response){
        var index;
        for(var i = 0; i < ctrl.posts.length; i++){
          if(ctrl.entries[i].id === id){
            index = i;
          }
        }
        ctrl.posts.splice(index, 1);
      });
    };

    ctrl.updateEntry = function(id, newPost){
      $http({
        method: "PATCH",
        url: "http://localhost:3000/posts/" + id + '.json',
        data: {body: newPost}
      }).then(function successCallback(response){
        for(var i = 0; i < ctrl.posts.length; i++){
          if(ctrl.posts[i].id === id){
            ctrl.posts.splice(i, 1);
            ctrl.posts.push(response.data);
            break;
          }
        }
      });
    };




  }

  angular
    .module('myApp')
    .component('post', config);
})();
