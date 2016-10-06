var acApp = angular.module('acApp', ['angular.filter']);
var resp;
var query = '';

acApp.controller('main', ['$scope', '$http', '$templateCache',  function($scope, $http, $templateCache) {

    $scope.onChange = function() {
        $('div.dropdown').css('display', 'block');

        query = $scope.query;
        $scope.method = 'GET';
        $scope.url = 'http://10.160.124.111/oim_poliza/api/automovil/marcamodelo/' + query;

        $http({method: $scope.method, url: $scope.url, cache: $templateCache}).
        success(function(data, status) {
            $scope.response = data;
        }).
        error(function(data, status) {
            $scope.response = data || "Request failed";
        });
    };

    $scope.onClick = function(clickEvent) {
        console.log(clickEvent.currentTarget.innerText);
        $scope.query = clickEvent.currentTarget.innerText;
        $('div.dropdown').css('display', 'none');
    };
}]);