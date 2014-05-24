var app = angular.module("FlowApp", ['flow'])
app.config(['flowFactoryProvider', function(flowFactoryProvider) {
  flowFactoryProvider.defaults = {
    target: '/upload',
    testChunks: false,
    chunkSize: 1024 * 1024 * 10,
    permanentErrors:[404, 500, 501]
  }
}])

app.controller("FlowCtrl", ["$scope", function($scope) {

}])