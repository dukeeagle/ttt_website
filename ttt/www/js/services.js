angular.module('starter')

.factory('UserService', function UserService(){
	var user = {
		username: ""
	}
	return{
		user:user
	}
})

	
.factory('socket', ['$rootScope', function ($rootScope) {
  var socket = io.connect('https://fathomless-brushlands-33586.herokuapp.com');
  return {
    on: function (eventName, callback) {
      socket.on(eventName, function () {  
        var args = arguments;
        $rootScope.$apply(function () {
          callback.apply(socket, args);
        });
      });
    },
    emit: function (eventName, data, callback) {
      socket.emit(eventName, data, function () {
        var args = arguments;
        $rootScope.$apply(function () {
          if (callback) {
            callback.apply(socket, args);
          }
        });
      })
    }
    //socketFactory({ioSocket: io('https://fathomless-brushlands-33586.herokuapp.com/')});
  };
}]);
