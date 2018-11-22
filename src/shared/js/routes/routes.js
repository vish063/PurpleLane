angular.module('PurpleLane.routes', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){

        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('landingPage', {
                url: '/landingPage',
                templateUrl: 'views/landing-page.html',
                controller: 'landingPageController'
            })
    });