'use strict';

/**
 * @ngdoc function
 * @name dashboardsKpiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dashboardsKpiApp
 */
angular.module('dashboardsKpiApp')
  .controller('MainCtrl', function () {
    $(document).ready(function(){
      angular.element('.modal').modal();
    });
  });
