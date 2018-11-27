angular.module('pl.contact-us',[])
    .component('plContactUs', {
        templateUrl: "components/contact-us/pl-contact-us.html",
        controller: function($scope){
            $scope.$onInit = function(){
                console.log("contact-us");
            };
        }
    });
