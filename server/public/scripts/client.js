var myApp = angular.module('myApp', ['ngRoute']);

console.log ("client.js loaded");

myApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        redirectTo: '/login'
      })
      .when('/login', {
        templateUrl: '/views/templates/login.html',
        controller: 'LoginController as vm',
      })
      .when('/user', {
        templateUrl: '/views/templates/user.html',
        controller: 'UserController as vm',
        }
      )
    //   .when('/info', {
    //     templateUrl: '/views/templates/info.html',
    //     controller: 'InfoController as vm'
    //     // resolve: {
    //     //   getuser: function (UserService) {
    //     //     return UserService.getuser();
    //     //   }
    //     // }
    //   })
      .otherwise({
        template: '<h1>404</h1>'
      });
  }]);
  