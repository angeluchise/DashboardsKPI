'use strict';

/**
 * @ngdoc overview
 * @name dashboardsKpiApp
 * @description
 * # dashboardsKpiApp
 *
 * Main module of the application.
 */
angular
  .module('dashboardsKpiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'pascalprecht.translate',
    'nvd3'
  ])
  .config(function ($stateProvider,$urlRouterProvider,$resourceProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state('app', {
        url: "",
        templateUrl:'views/main.html',
        controller: 'MainCtrl',
        abstract:true
      })
      .state('app.home', {
        url: "/",
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      });
      $resourceProvider.defaults.stripTrailingSlashes = false;
  });
