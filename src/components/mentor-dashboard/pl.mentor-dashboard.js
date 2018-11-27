angular.module('pl.mentor-dashboard',[])
    .component('plMentorDashBoard', {
        templateUrl: "components/mentor-dashboard/pl-mentor-dashboard.html",
        controller: function($scope){
            $scope.$onInit = function(){
                console.log("Mentor dashboard");
            };
        }
    });
