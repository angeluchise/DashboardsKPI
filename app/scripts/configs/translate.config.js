'use strict';

/**
 * @ngdoc function
 * @name dashboardsKpiApp.config: TranslateProvider
 * @description
 * # Translate
 * Config of the dashboardsKpiApp
 */
angular.module('dashboardsKpiApp')
  .config(['$translateProvider', function ($translateProvider) {
    // add translation tables
    $translateProvider.useStaticFilesLoader({
      files: [{
        prefix: 'language/',
        suffix: '.json'
      }]
    });
    $translateProvider.preferredLanguage('en');
    $translateProvider.useSanitizeValueStrategy(null);
  }]);
