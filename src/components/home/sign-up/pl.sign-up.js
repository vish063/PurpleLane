angular.module('pl.home.sign-up',[])
    .component('plSignUp', {
        templateUrl: "components/home/sign-up/pl-sign-up.html",
        controller: function($scope){
            $scope.$onInit = function(){
                console.log("hello world - sign up");
            };
        }
    });
