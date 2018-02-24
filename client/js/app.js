const app = angular.module('myApp', []);

app.controller('mainController', ['$scope', function($scope){
  let socket = io.connect();
  $scope.send = function(){
    socket.emit('chat message', $scope.message);
    $scope.message="";
  }
  socket.on('chat message', function(msg){
    let li=document.createElement("li");
    li.appendChild(document.createTextNode(msg));
    document.getElementById("messages").appendChild(li);
  });
}]);
