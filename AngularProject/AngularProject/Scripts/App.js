var appMainModule = angular.module('appMain', ['ui.bootstrap', 'ui.bootstrap.dropdown']);



appMainModule.controller("homePageViewModel", function ($scope, $http, $location)
{
    $scope.headingCaption = 'My Heading caption';

    $scope.people = [
        { FirstName: "Kobus", LastName: "Jonker" },
        { FirstName: "Janien", LastName: "Jonker" },
        { FirstName: "Ruan", LastName: "Jonker" }
    ];

    $scope.showPerson = function(person) {
        alert('You selected ' + person.FirstName + ' ' + person.LastName);
        $scope.selectedPerson = person;
       
        var newPerson = { FirstName: "Kobus", LastName: "Jonker" }

        $scope.people.push(newPerson);
        
        
        

    }

    $scope.selectedPerson = undefined;

    $scope.sendInvite = function (person) {
        alert('You selected ' + person.FirstName + ' ' + person.LastName);
    }




    $scope.items = [
    'Option 1 from viewModel',
    'Option 2 from viewModel',
    'Option 3 from viewModel'
    ];


    $scope.dropdownText = '--SELECT--';
    $scope.dropdownSelected = function (choice) {
        $scope.dropdownText = choice;
    }

})