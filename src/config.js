angular.module('pl')
    .config(function($stateProvider, $urlRouterProvider){

        $urlRouterProvider.otherwise('/home');
        var homeState = {
            name: "home",
            url: '/home',
            component: 'plHome',
        };
        var mentorListState = {
            name: "mentorList",
            url: '/mentorList',
            component: 'plMentorList',
        };
        var contactUsState = {
            name: "contactUs",
            url: '/contactUs',
            component: 'plContactUs',
        };
        var aboutUsState = {
            name: "aboutUs",
            url: '/aboutUs',
            component: 'plAboutUs',
        };
        var mentorDashBoardState = {
            name: "mentorDashBoard",
            url: '/mentorDashBoard',
            component: 'plMentorDashBoard',
        };
        var menteeDashBoardState = {
            name: "menteeDashBoardState",
            url: '/menteeDashBoardState',
            component: 'plMenteeDashBoard',
        };
        $stateProvider.state(homeState);
        $stateProvider.state(mentorListState);
        $stateProvider.state(contactUsState);
        $stateProvider.state(aboutUsState);
        $stateProvider.state(mentorDashBoardState);
        $stateProvider.state(menteeDashBoardState);

    });