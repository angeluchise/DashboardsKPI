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
    angular.element(document).ready(function(){
      angular.element('.modal').modal();
      angular.element('select').material_select();
      angular.element('.tooltipped').tooltip({delay: 50});
    });
  });
