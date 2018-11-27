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
