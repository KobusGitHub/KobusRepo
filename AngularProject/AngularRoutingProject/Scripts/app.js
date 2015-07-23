var appMainModule = angular.module('appMain', ['ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider.when('/', { templateUrl: '/Templates/Home.html', controller: 'homeViewModel' });
        $routeProvider.when('/customer/list', { templateUrl: '/Templates/CustomerList.html', controller: 'customerViewModel' });
        $routeProvider.when('/customer/detail', { templateUrl: '/Templates/CustomerDetail.html', controller: 'customerDetailViewModel' });
        $routeProvider.otherwise({ redirectTo: "/" });
        $locationProvider.html5Mode(true);
    });



appMainModule.controller("indexViewModel", function ($scope, $http, $location) {
    $scope.headingCaption = "Index Page";
});


appMainModule.controller("homeViewModel", function ($scope, $http, $location) {
    $scope.headingCaption = "Home Page";
});


appMainModule.controller("customerViewModel", function ($scope, $http, $location) {
    $scope.headingCaption = "Customer Page";
});

appMainModule.controller("customerDetailViewModel", function ($scope, $http, $location) {
    $scope.headingCaption = "Customer Detail Page";
});


