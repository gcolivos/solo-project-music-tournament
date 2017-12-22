myApp.controller('LoginController', ['$http', '$location', 'LoginService', function($http, $location, LoginService) {
    console.log('LoginController created');
    var self = this;

    self.loginUser = LoginService.loginUser;

}]);