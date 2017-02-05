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
        $scope.Customer_Name = [
          {
            "business_unit_id":51,
            "business_unit_name":"FISHER&COMPANY",
            "business_unit_code":"10",
            "business_unit_type":"customer",
            "resp_loc_id":0
          }
        ];
        $scope.Dropdowns =[
          {
            "facility":"All"
          },
          {
            "facility":"FD-Corporate"
          },
          {
            "facility":"FD-Evansville"
          },
          {
            "facility":"FD-Mexico"
          },
          {
            "facility":"FD-Plant 1"
          },
          {
            "facility":"FD-Plant 4"
          },
          {
            "facility":"FD-Plant 6"
          },
          {
            "facility":"FD-Poland"
          },
          {
            "facility":"FD-St. Clair Shores"
          }
        ];
        $scope.directions = [
          {
            "direction":"All"
          },
          {
            "direction":"Inbound"
          },
          {
            "direction":"Outbound"
          },
          {
            "direction":"InterCompany"
          },
          {
            "direction":"3rd Party"
          }
        ];
        $scope.modes = [
          {
            "ship_mode":"All"
          },
          {
            "ship_mode":"Truckload"
          },
          {
            "ship_mode":"Premium Air"
          },
          {
            "ship_mode":"Premium Ground"
          },
          {
            "ship_mode":"Consolidation"
          },
          {
            "ship_mode":"LTL"
          },
          {
            "ship_mode":"Parcel"
          },
          {
            "ship_mode":"Customs and Duties"
          },
          {
            "ship_mode":"Detention"
          },
          {
            "ship_mode":"Ocean"
          },
          {
            "ship_mode":""
          },
          {
            "ship_mode":"Fleet"
          }
        ];

        $scope.datacharts =[{"customer_name":"FISHER&COMPANY","facility":"All","time_period":"2016 YE","direction":"All","ship_year":2016,"ship_month_num":13,"ship_month_name":"2016 YE","ship_month_rank":null,"ship_mode":"Premium Air","freight_spend":1683902.0700,"freight_count":2695.0,"freight_spend_percentage":8.26044892561509912100,"freight_count_percentage":7.72449769268250738100},{"customer_name":"FISHER&COMPANY","facility":"All","time_period":"2016 YE","direction":"All","ship_year":2016,"ship_month_num":13,"ship_month_name":"2016 YE","ship_month_rank":null,"ship_mode":"LTL","freight_spend":513017.7900,"freight_count":1818.0,"freight_spend_percentage":2.51662927893837231400,"freight_count_percentage":5.21081143053684542400},{"customer_name":"FISHER&COMPANY","facility":"All","time_period":"2016 YE","direction":"All","ship_year":2016,"ship_month_num":13,"ship_month_name":"2016 YE","ship_month_rank":null,"ship_mode":"Ocean","freight_spend":348529.7200,"freight_count":171.0,"freight_spend_percentage":1.70972647543507760200,"freight_count_percentage":0.49012582762475278700},{"customer_name":"FISHER&COMPANY","facility":"All","time_period":"2016 YE","direction":"All","ship_year":2016,"ship_month_num":13,"ship_month_name":"2016 YE","ship_month_rank":null,"ship_mode":"Detention","freight_spend":50652.0700,"freight_count":255.0,"freight_spend_percentage":0.24847575441942463700,"freight_count_percentage":0.73088939207199977100},{"customer_name":"FISHER&COMPANY","facility":"All","time_period":"2016 YE","direction":"All","ship_year":2016,"ship_month_num":13,"ship_month_name":"2016 YE","ship_month_rank":null,"ship_mode":"Customs and Duties","freight_spend":183117.8300,"freight_count":1499.0,"freight_spend_percentage":0.89829183598810373000,"freight_count_percentage":4.29648313221932414200},{"customer_name":"FISHER&COMPANY","facility":"All","time_period":"2016 YE","direction":"All","ship_year":2016,"ship_month_num":13,"ship_month_name":"2016 YE","ship_month_rank":null,"ship_mode":"Parcel","freight_spend":654088.3800,"freight_count":2620.0,"freight_spend_percentage":3.20865669808715223400,"freight_count_percentage":7.50953022442603686000},{"customer_name":"FISHER&COMPANY","facility":"All","time_period":"2016 YE","direction":"All","ship_year":2016,"ship_month_num":13,"ship_month_name":"2016 YE","ship_month_rank":null,"ship_mode":"Fleet","freight_spend":887.5000,"freight_count":4.0,"freight_spend_percentage":0.004353666731630896130600,"freight_count_percentage":0.01146493164034509400},{"customer_name":"FISHER&COMPANY","facility":"All","time_period":"2016 YE","direction":"All","ship_year":2016,"ship_month_num":13,"ship_month_name":"2016 YE","ship_month_rank":null,"ship_mode":"Premium Ground","freight_spend":1543313.7300,"freight_count":1594.0,"freight_spend_percentage":7.57078720312133779200,"freight_count_percentage":4.56877525867752013500},{"customer_name":"FISHER&COMPANY","facility":"All","time_period":"2016 YE","direction":"All","ship_year":2016,"ship_month_num":13,"ship_month_name":"2016 YE","ship_month_rank":null,"ship_mode":"Truckload","freight_spend":14771353.9900,"freight_count":22653.0,"freight_spend_percentage":72.46146754637329213000,"freight_count_percentage":64.92877411218435610100},{"customer_name":"FISHER&COMPANY","facility":"All","time_period":"2016 YE","direction":"All","ship_year":2016,"ship_month_num":13,"ship_month_name":"2016 YE","ship_month_rank":null,"ship_mode":"Consolidation","freight_spend":636252.6100,"freight_count":1580.0,"freight_spend_percentage":3.12116261529050954300,"freight_count_percentage":4.52864799793631230500}];
        console.log($scope.datacharts);
        $scope.dataother = [
          {"customer_name":"FISHER&COMPANY","rank_name":"Spend - Top 10","rank_value_by_customer":10,"sort_order":1},
          {"customer_name":"FISHER&COMPANY","rank_name":"Spend - Top 20","rank_value_by_customer":20,"sort_order":2},
          {"customer_name":"FISHER&COMPANY","rank_name":"Volume - Top 10","rank_value_by_customer":10,"sort_order":4},
          {"customer_name":"FISHER&COMPANY","rank_name":"Volume - Top 20","rank_value_by_customer":20,"sort_order":5}
        ];
        console.log($scope.dataother);
// Value to map: business_unit_name
});
