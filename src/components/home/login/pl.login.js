angular.module('pl.home.login',[
    'ui.bootstrap',
    'ngAnimate'])
    .component('plLogin', {
        templateUrl: "components/home/login/pl-login.html",
        controller: function($scope){
            $scope.$onInit = function(){
                console.log("hello world - login");
            };
        }
    });
