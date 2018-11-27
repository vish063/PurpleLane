angular.module('pl', [
    'pl.home',
    'pl.mentee-dashboard',
    'pl.mentor-dashboard',
    'pl.mentor-list',
    'pl.contact-us',
    'pl.about-us',
    'ngMaterial',
    'ui.router'
]).config(function($mdThemingProvider) {
    $mdThemingProvider.disableTheming();
    })
    .controller('mainController', function($scope){
        console.log("Main controller");
    });