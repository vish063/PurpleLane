angular.module('pl', [
    'pl.home-page',
    'ngMaterial'
]).config(function($mdThemingProvider) {
    $mdThemingProvider.disableTheming();
    })
    .controller('mainController', function($scope){
        console.log("Main controller");
    });