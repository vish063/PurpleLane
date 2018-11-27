angular.module('pl.mentee-dashboard',[])
    .component('plMenteeDashBoard', {
        templateUrl: "components/mentee-dashboard/pl-mentee-dashboard.html",
        controller: function($scope){
            $scope.$onInit = function(){
                console.log("mentee dashboard");
            };
        }
    });
