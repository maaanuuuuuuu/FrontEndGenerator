'use strict';

/* Controllers */

var pageGeneratorApp = angular.module('pageGeneratorApp', []);

pageGeneratorApp.controller('pageController', function($scope, $http) {
  $http.get('content.json')
       .then(function(res){
          $scope.page = res.data;                
        });
});

// custom filters
pageGeneratorApp.filter('rawHTML',
    function($sce) { 
        return $sce.trustAsHtml; 
});