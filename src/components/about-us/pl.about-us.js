angular.module('pl.about-us',[])
    .component('plAboutUs', {
        templateUrl: "components/about-us/pl-about-us.html",
        controller: function($scope){
            $scope.$onInit = function(){
                console.log("About - us ");
            };
        }
    });
