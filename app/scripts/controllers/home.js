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
            chart: {
                type: 'historicalBarChart',
                height: 450,
                margin : {
                    top: 20,
                    right: 20,
                    bottom: 65,
                    left: 50
                },
                x: function(d){return d[0];},
                y: function(d){return d[1]/100000;},
                showValues: true,
                valueFormat: function(d){
                    return d3.format(',.1f')(d);
                },
                duration: 100,
                xAxis: {
                    axisLabel: 'X Axis',
                    tickFormat: function(d) {
                        return d3.time.format('%x')(new Date(d))
                    },
                    rotateLabels: 30,
                    showMaxMin: false
                },
                yAxis: {
                    axisLabel: 'Y Axis',
                    axisLabelDistance: -10,
                    tickFormat: function(d){
                        return d3.format(',.1f')(d);
                    }
                },
                tooltip: {
                    keyFormatter: function(d) {
                        return d3.time.format('%x')(new Date(d));
                    }
                },
                zoom: {
                    enabled: true,
                    scaleExtent: [1, 10],
                    useFixedDomain: false,
                    useNiceScale: false,
                    horizontalOff: false,
                    verticalOff: true,
                    unzoomEventType: 'dblclick.zoom'
                }
            }
        };

        $scope.data = [
            {
                "key" : "Quantity" ,
                "bar": true,
                "values" : [ [ 1136005200000 , 1271000.0] , [ 1138683600000 , 1271000.0] , [ 1141102800000 , 1271000.0] , [ 1143781200000 , 0] , [ 1146369600000 , 0] , [ 1149048000000 , 0] , [ 1151640000000 , 0] , [ 1154318400000 , 0] , [ 1156996800000 , 0] , [ 1159588800000 , 3899486.0] , [ 1162270800000 , 3899486.0] , [ 1164862800000 , 3899486.0] , [ 1167541200000 , 3564700.0] , [ 1170219600000 , 3564700.0] , [ 1172638800000 , 3564700.0] , [ 1175313600000 , 2648493.0] , [ 1177905600000 , 2648493.0] , [ 1180584000000 , 2648493.0] , [ 1183176000000 , 2522993.0] , [ 1185854400000 , 2522993.0] , [ 1188532800000 , 2522993.0] , [ 1191124800000 , 2906501.0] , [ 1193803200000 , 2906501.0] , [ 1196398800000 , 2906501.0] , [ 1199077200000 , 2206761.0] , [ 1201755600000 , 2206761.0] , [ 1204261200000 , 2206761.0] , [ 1206936000000 , 2287726.0] , [ 1209528000000 , 2287726.0] , [ 1212206400000 , 2287726.0] , [ 1214798400000 , 2732646.0] , [ 1217476800000 , 2732646.0] , [ 1220155200000 , 2732646.0] , [ 1222747200000 , 2599196.0] , [ 1225425600000 , 2599196.0] , [ 1228021200000 , 2599196.0] , [ 1230699600000 , 1924387.0] , [ 1233378000000 , 1924387.0] , [ 1235797200000 , 1924387.0] , [ 1238472000000 , 1756311.0] , [ 1241064000000 , 1756311.0] , [ 1243742400000 , 1756311.0] , [ 1246334400000 , 1743470.0] , [ 1249012800000 , 1743470.0] , [ 1251691200000 , 1743470.0] , [ 1254283200000 , 1519010.0] , [ 1256961600000 , 1519010.0] , [ 1259557200000 , 1519010.0] , [ 1262235600000 , 1591444.0] , [ 1264914000000 , 1591444.0] , [ 1267333200000 , 1591444.0] , [ 1270008000000 , 1543784.0] , [ 1272600000000 , 1543784.0] , [ 1275278400000 , 1543784.0] , [ 1277870400000 , 1309915.0] , [ 1280548800000 , 1309915.0] , [ 1283227200000 , 1309915.0] , [ 1285819200000 , 1331875.0] , [ 1288497600000 , 1331875.0] , [ 1291093200000 , 1331875.0] , [ 1293771600000 , 1331875.0] , [ 1296450000000 , 1154695.0] , [ 1298869200000 , 1154695.0] , [ 1301544000000 , 1194025.0] , [ 1304136000000 , 1194025.0] , [ 1306814400000 , 1194025.0] , [ 1309406400000 , 1194025.0] , [ 1312084800000 , 1194025.0] , [ 1314763200000 , 1244525.0] , [ 1317355200000 , 475000.0] , [ 1320033600000 , 475000.0] , [ 1322629200000 , 475000.0] , [ 1325307600000 , 690033.0] , [ 1327986000000 , 690033.0] , [ 1330491600000 , 690033.0] , [ 1333166400000 , 514733.0] , [ 1335758400000 , 514733.0]]
            }];
    $scope.options = {
                chart: {
                    type: 'pieChart',
                    height: 500,
                    x: function(d){return d.key;},
                    y: function(d){return d.y;},
                    showLabels: true,
                    duration: 500,
                    labelThreshold: 0.01,
                    labelSunbeamLayout: true,
                    legend: {
                        margin: {
                            top: 5,
                            right: 0,
                            bottom: 0,
                            left: 0
                        }
                    }
                }

            };
            // $scope.datapie = [
            //     {
            //         key: "One",
            //         y: 5
            //     },
            //     {
            //         key: "Two",
            //         y: 2
            //     },
            //     {
            //         key: "Three",
            //         y: 9
            //     },
            //     {
            //         key: "Four",
            //         y: 7
            //     },
            //     {
            //         key: "Five",
            //         y: 4
            //     },
            //     {
            //         key: "Six",
            //         y: 3
            //     },
            //     {
            //         key: "Seven",
            //         y: .5
            //     }
            // ];
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

        $scope.datacharts =[
          {"customer_name":"FISHER&COMPANY","facility":"All","time_period":"2016 YE","direction":"All","ship_year":2016,"ship_month_num":13,"ship_month_name":"2016 YE","ship_month_rank":null,"ship_mode":"Premium Air","freight_spend":1683902.0700,"freight_count":2695.0,"freight_spend_percentage":8.26044892561509912100,"freight_count_percentage":7.72449769268250738100},
          {"customer_name":"FISHER&COMPANY","facility":"All","time_period":"2016 YE","direction":"All","ship_year":2016,"ship_month_num":13,"ship_month_name":"2016 YE","ship_month_rank":null,"ship_mode":"LTL","freight_spend":513017.7900,"freight_count":1818.0,"freight_spend_percentage":2.51662927893837231400,"freight_count_percentage":5.21081143053684542400},
          {"customer_name":"FISHER&COMPANY","facility":"All","time_period":"2016 YE","direction":"All","ship_year":2016,"ship_month_num":13,"ship_month_name":"2016 YE","ship_month_rank":null,"ship_mode":"Ocean","freight_spend":348529.7200,"freight_count":171.0,"freight_spend_percentage":1.70972647543507760200,"freight_count_percentage":0.49012582762475278700},
          {"customer_name":"FISHER&COMPANY","facility":"All","time_period":"2016 YE","direction":"All","ship_year":2016,"ship_month_num":13,"ship_month_name":"2016 YE","ship_month_rank":null,"ship_mode":"Detention","freight_spend":50652.0700,"freight_count":255.0,"freight_spend_percentage":0.24847575441942463700,"freight_count_percentage":0.73088939207199977100},
          {"customer_name":"FISHER&COMPANY","facility":"All","time_period":"2016 YE","direction":"All","ship_year":2016,"ship_month_num":13,"ship_month_name":"2016 YE","ship_month_rank":null,"ship_mode":"Customs and Duties","freight_spend":183117.8300,"freight_count":1499.0,"freight_spend_percentage":0.89829183598810373000,"freight_count_percentage":4.29648313221932414200},
          {"customer_name":"FISHER&COMPANY","facility":"All","time_period":"2016 YE","direction":"All","ship_year":2016,"ship_month_num":13,"ship_month_name":"2016 YE","ship_month_rank":null,"ship_mode":"Parcel","freight_spend":654088.3800,"freight_count":2620.0,"freight_spend_percentage":3.20865669808715223400,"freight_count_percentage":7.50953022442603686000},
          {"customer_name":"FISHER&COMPANY","facility":"All","time_period":"2016 YE","direction":"All","ship_year":2016,"ship_month_num":13,"ship_month_name":"2016 YE","ship_month_rank":null,"ship_mode":"Fleet","freight_spend":887.5000,"freight_count":4.0,"freight_spend_percentage":0.004353666731630896130600,"freight_count_percentage":0.01146493164034509400},
          {"customer_name":"FISHER&COMPANY","facility":"All","time_period":"2016 YE","direction":"All","ship_year":2016,"ship_month_num":13,"ship_month_name":"2016 YE","ship_month_rank":null,"ship_mode":"Premium Ground","freight_spend":1543313.7300,"freight_count":1594.0,"freight_spend_percentage":7.57078720312133779200,"freight_count_percentage":4.56877525867752013500},
          {"customer_name":"FISHER&COMPANY","facility":"All","time_period":"2016 YE","direction":"All","ship_year":2016,"ship_month_num":13,"ship_month_name":"2016 YE","ship_month_rank":null,"ship_mode":"Truckload","freight_spend":14771353.9900,"freight_count":22653.0,"freight_spend_percentage":72.46146754637329213000,"freight_count_percentage":64.92877411218435610100},
          {"customer_name":"FISHER&COMPANY","facility":"All","time_period":"2016 YE","direction":"All","ship_year":2016,"ship_month_num":13,"ship_month_name":"2016 YE","ship_month_rank":null,"ship_mode":"Consolidation","freight_spend":636252.6100,"freight_count":1580.0,"freight_spend_percentage":3.12116261529050954300,"freight_count_percentage":4.52864799793631230500}
        ];
        var reformattedArray = $scope.datacharts.map(function(obj){
           var rObj = {};
           rObj['key'] = obj.ship_mode,
           rObj['y'] = obj.freight_spend_percentage;
           return rObj;
        });
        var reformattedArray2 = $scope.datacharts.map(function(obj){
           var rObj = {};
           rObj['key'] = obj.ship_mode,
           rObj['y'] = obj.freight_count_percentage;
           return rObj;
        });
        $scope.datapie = reformattedArray;
        $scope.datapie2 = reformattedArray2;
        console.log($scope.datapie);
        $scope.dataothers = [
          {"customer_name":"FISHER&COMPANY","rank_name":"Spend - Top 10","rank_value_by_customer":10,"sort_order":1},
          {"customer_name":"FISHER&COMPANY","rank_name":"Spend - Top 20","rank_value_by_customer":20,"sort_order":2},
          {"customer_name":"FISHER&COMPANY","rank_name":"Volume - Top 10","rank_value_by_customer":10,"sort_order":4},
          {"customer_name":"FISHER&COMPANY","rank_name":"Volume - Top 20","rank_value_by_customer":20,"sort_order":5}
        ];
// Value to map: business_unit_name
});
