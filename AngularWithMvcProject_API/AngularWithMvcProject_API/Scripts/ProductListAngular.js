/// <reference path="C:\Projects\Code\Personal\KobusRepo\D3_SVG\AngularWithMvcProject_API\AngularWithMvcProject_API\Views/Product/ProductList.cshtml" />
var app = angular.module("ProductApp", ['ngRoute']);


app.config(function ($routeProvider, $locationProvider) {
   
    $routeProvider
        .when('/', {
            templateUrl: '/Tempates/ProductList.html',
            controller: 'productListController'
        })
        .when('/list', {
            templateUrl: '/Tempates/ProductList.html',
            controller: 'productListController'
        })
        .when('/Edit/:id', {
            templateUrl: '/Tempates/ProductEdit.html',
            controller: 'productEditController'
        });

});


var products = [];


app.controller("productListController", ['$scope', '$http', '$location', function ($scope, $http, $location) {
    $scope.products = [];

    $scope.edit = function (product) {
        $location.path("/Edit/" + product.Id);

        console.log("ProductID " + product.Id + " was edited");
    }

    $scope.add = function () {
        console.log("New product");
    }

    $http.get("http://localhost:61903/api/productapi").success(function (data, status) {
        console.log("some data in");
        $scope.products = data;
        products = data;
        
    }).error(function (data, status) {
        console.log("Error");
        alert(data);
    });
}]);


app.controller("productEditController", function ($scope, $http, $location) {
    $scope.myHash = $location.url();
    $scope.myId = ($location.url()).replace("/Edit/", "");

    for(var i=0;i<products.length;i++) {

        if (products[i].Id == $scope.myId) {
            $scope.Name = products[i].Name;
        }
       

    }


   
});