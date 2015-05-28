var appMainModule = angular.module('appMain', []);

appMainModule.controller("homePageViewModel", function ($scope, $http, $location)
{
    $scope.headingCaption = 'My Headiing caption';

    $scope.people = [
        { FirstName: "Kobus", LastName: "Jonker" },
        { FirstName: "Janien", LastName: "Jonker" },
        { FirstName: "Ruan", LastName: "Jonker" }
    ];

    $scope.showPerson = function(person) {
        alert('You selected ' + person.FirstName + ' ' + person.LastName);
    }
})