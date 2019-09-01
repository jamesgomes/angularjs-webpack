import angular from 'angular';

const mainApp = angular.module('mainApp', []);

mainApp.controller('appController',  ['$scope', function ($scope) {
    $scope.title ='Hello Angular';
}]
)