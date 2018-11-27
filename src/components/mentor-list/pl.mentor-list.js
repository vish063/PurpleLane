angular.module('pl.mentor-list',[])
    .component('plMentorList', {
        templateUrl: "components/mentor-list/pl-mentor-list.html",
        controller: function($scope){
            $scope.$onInit = function(){
                console.log("Mentor List");
            };
        }
    });
