angular.module('pl.about-us',[])
    .component('plAboutUs', {
        templateUrl: "components/about-us/pl-about-us.html",
        controller: function($scope){
            $scope.$onInit = function(){
                console.log("About - us ");
            };
        }
    });

angular.module('pl.contact-us',[])
    .component('plContactUs', {
        templateUrl: "components/contact-us/pl-contact-us.html",
        controller: function($scope){
            $scope.$onInit = function(){
                console.log("contact-us");
            };
        }
    });

angular.module('pl.home',[
    'ui.bootstrap',
    'ngAnimate',
    'ui.router',
    'pl.home.login',
    'pl.home.sign-up',
    ])
    .config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/home');
        var loginState = {
            name: "home.login",
            url: '/login',
            component: 'plLogin',
        };
        var signUpState = {
            name: "home.signUp",
            url: '/signUp',
            component: 'plSignUp',
        };
        $stateProvider.state(signUpState);
        $stateProvider.state(loginState);
    })
    .component('plHome', {
        templateUrl: "components/home/pl-home.html",
        controller: function($scope){
            $scope.$onInit = function(){
                console.log("hello world again");
            };
            console.log("I am in home page controller");
            $scope.slideInterval = 5000;
            $scope.noWrapSlides = true;
            $scope.active = 0;
            $scope.slides = [[{
                    'id': 2,
                    'image' : 'images/testimonial/2.png',
                    'name' : 'Vishnu2',
                    'name' : 'Vishnu2',
                    'city' : 'Hyderabad2',
                    'review' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '

                },{
                    'id': 3,
                    'image' : 'images/testimonial/1.png',
                    'name' : 'Vishnu3',
                    'city' : 'Hyderabad3',
                    'review' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '

                }],[{
                    'id': 4,
                    'image' : 'images/testimonial/2.png',
                    'name' : 'Vishnu4',
                    'city' : 'Hyderabad4',
                    'review' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '

                },{
                    'id': 5,
                    'image' : 'images/testimonial/1.png',
                    'name' : 'Vishnu5',
                    'city' : 'Hyderabad5',
                    'review' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '

                }]/*,[{
                    'id': 6,
                    'image' : 'images/testimonial/2.png',
                    'name' : 'Vishnu6',
                    'city' : 'Hyderabad6'

                },{
                    'id': 7,
                    'image' : 'images/testimonial/1.png',
                    'name' : 'Vishnu7',
                    'city' : 'Hyderabad7',
                    'review' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '

                }],[{
                    'id': 8,
                    'image' : 'images/testimonial/2.png',
                    'name' : 'Vishnu8',
                    'city' : 'Hyderabad8',
                    'review' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '

                },{
                    'id': 9,
                    'image' : 'images/testimonial/1.png',
                    'name' : 'Vishnu9',
                    'city' : 'Hyderabad9',
                    'review' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '

                }]*/
            ];
        }
    });

angular.module('pl.mentee-dashboard',[])
    .component('plMenteeDashBoard', {
        templateUrl: "components/mentee-dashboard/pl-mentee-dashboard.html",
        controller: function($scope){
            $scope.$onInit = function(){
                console.log("mentee dashboard");
            };
        }
    });

angular.module('pl.mentor-dashboard',[])
    .component('plMentorDashBoard', {
        templateUrl: "components/mentor-dashboard/pl-mentor-dashboard.html",
        controller: function($scope){
            $scope.$onInit = function(){
                console.log("Mentor dashboard");
            };
        }
    });

angular.module('pl.mentor-list',[])
    .component('plMentorList', {
        templateUrl: "components/mentor-list/pl-mentor-list.html",
        controller: function($scope){
            $scope.$onInit = function(){
                console.log("Mentor List");
            };
        }
    });

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

angular.module('pl.home.sign-up',[])
    .component('plSignUp', {
        templateUrl: "components/home/sign-up/pl-sign-up.html",
        controller: function($scope){
            $scope.$onInit = function(){
                console.log("hello world - sign up");
            };
        }
    });

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LXVzL3BsLmFib3V0LXVzLmpzIiwiY29udGFjdC11cy9wbC5jb250YWN0LXVzLmpzIiwiaG9tZS9wbC5ob21lLmpzIiwibWVudGVlLWRhc2hib2FyZC9wbC5tZW50ZWUtZGFzaGJvYXJkLmpzIiwibWVudG9yLWRhc2hib2FyZC9wbC5tZW50b3ItZGFzaGJvYXJkLmpzIiwibWVudG9yLWxpc3QvcGwubWVudG9yLWxpc3QuanMiLCJob21lL2xvZ2luL3BsLmxvZ2luLmpzIiwiaG9tZS9zaWduLXVwL3BsLnNpZ24tdXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgncGwuYWJvdXQtdXMnLFtdKVxyXG4gICAgLmNvbXBvbmVudCgncGxBYm91dFVzJywge1xyXG4gICAgICAgIHRlbXBsYXRlVXJsOiBcImNvbXBvbmVudHMvYWJvdXQtdXMvcGwtYWJvdXQtdXMuaHRtbFwiLFxyXG4gICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzY29wZSl7XHJcbiAgICAgICAgICAgICRzY29wZS4kb25Jbml0ID0gZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWJvdXQgLSB1cyBcIik7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdwbC5jb250YWN0LXVzJyxbXSlcclxuICAgIC5jb21wb25lbnQoJ3BsQ29udGFjdFVzJywge1xyXG4gICAgICAgIHRlbXBsYXRlVXJsOiBcImNvbXBvbmVudHMvY29udGFjdC11cy9wbC1jb250YWN0LXVzLmh0bWxcIixcclxuICAgICAgICBjb250cm9sbGVyOiBmdW5jdGlvbigkc2NvcGUpe1xyXG4gICAgICAgICAgICAkc2NvcGUuJG9uSW5pdCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvbnRhY3QtdXNcIik7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdwbC5ob21lJyxbXHJcbiAgICAndWkuYm9vdHN0cmFwJyxcclxuICAgICduZ0FuaW1hdGUnLFxyXG4gICAgJ3VpLnJvdXRlcicsXHJcbiAgICAncGwuaG9tZS5sb2dpbicsXHJcbiAgICAncGwuaG9tZS5zaWduLXVwJyxcclxuICAgIF0pXHJcbiAgICAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpe1xyXG4gICAgICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy9ob21lJyk7XHJcbiAgICAgICAgdmFyIGxvZ2luU3RhdGUgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiaG9tZS5sb2dpblwiLFxyXG4gICAgICAgICAgICB1cmw6ICcvbG9naW4nLFxyXG4gICAgICAgICAgICBjb21wb25lbnQ6ICdwbExvZ2luJyxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBzaWduVXBTdGF0ZSA9IHtcclxuICAgICAgICAgICAgbmFtZTogXCJob21lLnNpZ25VcFwiLFxyXG4gICAgICAgICAgICB1cmw6ICcvc2lnblVwJyxcclxuICAgICAgICAgICAgY29tcG9uZW50OiAncGxTaWduVXAnLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgJHN0YXRlUHJvdmlkZXIuc3RhdGUoc2lnblVwU3RhdGUpO1xyXG4gICAgICAgICRzdGF0ZVByb3ZpZGVyLnN0YXRlKGxvZ2luU3RhdGUpO1xyXG4gICAgfSlcclxuICAgIC5jb21wb25lbnQoJ3BsSG9tZScsIHtcclxuICAgICAgICB0ZW1wbGF0ZVVybDogXCJjb21wb25lbnRzL2hvbWUvcGwtaG9tZS5odG1sXCIsXHJcbiAgICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24oJHNjb3BlKXtcclxuICAgICAgICAgICAgJHNjb3BlLiRvbkluaXQgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJoZWxsbyB3b3JsZCBhZ2FpblwiKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJJIGFtIGluIGhvbWUgcGFnZSBjb250cm9sbGVyXCIpO1xyXG4gICAgICAgICAgICAkc2NvcGUuc2xpZGVJbnRlcnZhbCA9IDUwMDA7XHJcbiAgICAgICAgICAgICRzY29wZS5ub1dyYXBTbGlkZXMgPSB0cnVlO1xyXG4gICAgICAgICAgICAkc2NvcGUuYWN0aXZlID0gMDtcclxuICAgICAgICAgICAgJHNjb3BlLnNsaWRlcyA9IFtbe1xyXG4gICAgICAgICAgICAgICAgICAgICdpZCc6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2ltYWdlJyA6ICdpbWFnZXMvdGVzdGltb25pYWwvMi5wbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICduYW1lJyA6ICdWaXNobnUyJyxcclxuICAgICAgICAgICAgICAgICAgICAnbmFtZScgOiAnVmlzaG51MicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NpdHknIDogJ0h5ZGVyYWJhZDInLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZXZpZXcnIDogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiAnXHJcblxyXG4gICAgICAgICAgICAgICAgfSx7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogMyxcclxuICAgICAgICAgICAgICAgICAgICAnaW1hZ2UnIDogJ2ltYWdlcy90ZXN0aW1vbmlhbC8xLnBuZycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ25hbWUnIDogJ1Zpc2hudTMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdjaXR5JyA6ICdIeWRlcmFiYWQzJyxcclxuICAgICAgICAgICAgICAgICAgICAncmV2aWV3JyA6ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gJ1xyXG5cclxuICAgICAgICAgICAgICAgIH1dLFt7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogNCxcclxuICAgICAgICAgICAgICAgICAgICAnaW1hZ2UnIDogJ2ltYWdlcy90ZXN0aW1vbmlhbC8yLnBuZycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ25hbWUnIDogJ1Zpc2hudTQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdjaXR5JyA6ICdIeWRlcmFiYWQ0JyxcclxuICAgICAgICAgICAgICAgICAgICAncmV2aWV3JyA6ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gJ1xyXG5cclxuICAgICAgICAgICAgICAgIH0se1xyXG4gICAgICAgICAgICAgICAgICAgICdpZCc6IDUsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2ltYWdlJyA6ICdpbWFnZXMvdGVzdGltb25pYWwvMS5wbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICduYW1lJyA6ICdWaXNobnU1JyxcclxuICAgICAgICAgICAgICAgICAgICAnY2l0eScgOiAnSHlkZXJhYmFkNScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JldmlldycgOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuICdcclxuXHJcbiAgICAgICAgICAgICAgICB9XS8qLFt7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogNixcclxuICAgICAgICAgICAgICAgICAgICAnaW1hZ2UnIDogJ2ltYWdlcy90ZXN0aW1vbmlhbC8yLnBuZycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ25hbWUnIDogJ1Zpc2hudTYnLFxyXG4gICAgICAgICAgICAgICAgICAgICdjaXR5JyA6ICdIeWRlcmFiYWQ2J1xyXG5cclxuICAgICAgICAgICAgICAgIH0se1xyXG4gICAgICAgICAgICAgICAgICAgICdpZCc6IDcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2ltYWdlJyA6ICdpbWFnZXMvdGVzdGltb25pYWwvMS5wbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICduYW1lJyA6ICdWaXNobnU3JyxcclxuICAgICAgICAgICAgICAgICAgICAnY2l0eScgOiAnSHlkZXJhYmFkNycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JldmlldycgOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuICdcclxuXHJcbiAgICAgICAgICAgICAgICB9XSxbe1xyXG4gICAgICAgICAgICAgICAgICAgICdpZCc6IDgsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2ltYWdlJyA6ICdpbWFnZXMvdGVzdGltb25pYWwvMi5wbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICduYW1lJyA6ICdWaXNobnU4JyxcclxuICAgICAgICAgICAgICAgICAgICAnY2l0eScgOiAnSHlkZXJhYmFkOCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JldmlldycgOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuICdcclxuXHJcbiAgICAgICAgICAgICAgICB9LHtcclxuICAgICAgICAgICAgICAgICAgICAnaWQnOiA5LFxyXG4gICAgICAgICAgICAgICAgICAgICdpbWFnZScgOiAnaW1hZ2VzL3Rlc3RpbW9uaWFsLzEucG5nJyxcclxuICAgICAgICAgICAgICAgICAgICAnbmFtZScgOiAnVmlzaG51OScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NpdHknIDogJ0h5ZGVyYWJhZDknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZXZpZXcnIDogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiAnXHJcblxyXG4gICAgICAgICAgICAgICAgfV0qL1xyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgncGwubWVudGVlLWRhc2hib2FyZCcsW10pXHJcbiAgICAuY29tcG9uZW50KCdwbE1lbnRlZURhc2hCb2FyZCcsIHtcclxuICAgICAgICB0ZW1wbGF0ZVVybDogXCJjb21wb25lbnRzL21lbnRlZS1kYXNoYm9hcmQvcGwtbWVudGVlLWRhc2hib2FyZC5odG1sXCIsXHJcbiAgICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24oJHNjb3BlKXtcclxuICAgICAgICAgICAgJHNjb3BlLiRvbkluaXQgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJtZW50ZWUgZGFzaGJvYXJkXCIpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgncGwubWVudG9yLWRhc2hib2FyZCcsW10pXHJcbiAgICAuY29tcG9uZW50KCdwbE1lbnRvckRhc2hCb2FyZCcsIHtcclxuICAgICAgICB0ZW1wbGF0ZVVybDogXCJjb21wb25lbnRzL21lbnRvci1kYXNoYm9hcmQvcGwtbWVudG9yLWRhc2hib2FyZC5odG1sXCIsXHJcbiAgICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24oJHNjb3BlKXtcclxuICAgICAgICAgICAgJHNjb3BlLiRvbkluaXQgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJNZW50b3IgZGFzaGJvYXJkXCIpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgncGwubWVudG9yLWxpc3QnLFtdKVxyXG4gICAgLmNvbXBvbmVudCgncGxNZW50b3JMaXN0Jywge1xyXG4gICAgICAgIHRlbXBsYXRlVXJsOiBcImNvbXBvbmVudHMvbWVudG9yLWxpc3QvcGwtbWVudG9yLWxpc3QuaHRtbFwiLFxyXG4gICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzY29wZSl7XHJcbiAgICAgICAgICAgICRzY29wZS4kb25Jbml0ID0gZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTWVudG9yIExpc3RcIik7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdwbC5ob21lLmxvZ2luJyxbXHJcbiAgICAndWkuYm9vdHN0cmFwJyxcclxuICAgICduZ0FuaW1hdGUnXSlcclxuICAgIC5jb21wb25lbnQoJ3BsTG9naW4nLCB7XHJcbiAgICAgICAgdGVtcGxhdGVVcmw6IFwiY29tcG9uZW50cy9ob21lL2xvZ2luL3BsLWxvZ2luLmh0bWxcIixcclxuICAgICAgICBjb250cm9sbGVyOiBmdW5jdGlvbigkc2NvcGUpe1xyXG4gICAgICAgICAgICAkc2NvcGUuJG9uSW5pdCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImhlbGxvIHdvcmxkIC0gbG9naW5cIik7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdwbC5ob21lLnNpZ24tdXAnLFtdKVxyXG4gICAgLmNvbXBvbmVudCgncGxTaWduVXAnLCB7XHJcbiAgICAgICAgdGVtcGxhdGVVcmw6IFwiY29tcG9uZW50cy9ob21lL3NpZ24tdXAvcGwtc2lnbi11cC5odG1sXCIsXHJcbiAgICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24oJHNjb3BlKXtcclxuICAgICAgICAgICAgJHNjb3BlLiRvbkluaXQgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJoZWxsbyB3b3JsZCAtIHNpZ24gdXBcIik7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiJdfQ==
