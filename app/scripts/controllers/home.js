'use strict';

/**
 * @ngdoc function
 * @name dashboardsKpiApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the dashboardsKpiApp
 */
angular.module('dashboardsKpiApp')
  .controller('HomeCtrl', function ($scope) {
    $scope.optionsdiscreteBarChart = {
      "chart": {
        "type": "multiBarChart",
        "height": 450,
        "margin": {
          "top": 20,
          "right": 20,
          "bottom": 45,
          "left": 45
        },
        "clipEdge": true,
        "duration": 500,
        "stacked": true,
        "xAxis": {
          "axisLabel": "Time (ms)",
          "showMaxMin": false
        },
        "yAxis": {
          "axisLabel": "Y Axis",
          "axisLabelDistance": -20
        }
      }
    };
    $scope.data = [
        {
            "key": "Serie andres",
            "values": [
                        { x : "A", y : 40 },
                        { x : "B", y : 30 },
                        { x : 5,   y : 20 }
                      ]
        },
        {
            "key": "serie angel",
            "values": [
                        { x : "A", y : 60 },
                        { x : "B", y : 50 },
                        { x : 5,   y : 70 }
                      ]
        }
    ];
$scope.options = {
  "chart": {
    "type": "pieChart",
    "height": 400,
    "showLabels": true,
    "duration": 500,
    "labelThreshold": 0.01,
    "labelSunbeamLayout": true,
    "legend": {
      "margin": {
        "top": 5,
        "right": 35,
        "bottom": 5,
        "left": 0
      }
    }
  }
};
$scope.exampleData = [
            {
                key: "On Hold",
                y: 5
            },
            {
                key: "Open",
                y: 2
            },
            {
                key: "Closed",
                y: 9
            }
        ];
$scope.exampleData = [
            {
                key: "On Hold",
                y: 5
            },
            {
                key: "Open",
                y: 2
            },
            {
                key: "Closed",
                y: 9
            }
        ];
$scope.exampleData2 = [
            {
                key: "On Hold",
                y: 5
            },
            {
                key: "Open",
                y: 2
            },
            {
                key: "Closed",
                y: 9
            }
        ];
});
