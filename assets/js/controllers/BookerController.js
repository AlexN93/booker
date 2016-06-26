bookerApp.controller('BookerCtrl', ['$scope', '$rootScope', '$routeParams', '$location', '$timeout', '$filter', 'BookerService', 'ChpService', function ($scope, $rootScope, $routeParams, $location, $timeout, $filter, BookerService, ChpService) {
  $scope.formData = {
    gender : 1
  };
  $scope.item = null;
  $scope.chps = [];
  $scope.itemId = $routeParams.itemId;
  $scope.dates = [];

  $scope.openEnd = function() {
    $timeout(function() {
      $scope.endOpened = true;
    });
  };

  $scope.loadInitialData = function () {
    BookerService.getItem($scope.itemId).then(function (response) {
      if (!response.data.length) {
        $location.path('/');
      }
      $scope.item = response.data;

      angular.forEach($scope.item[0].availability[0].dates, function(value, key) {
        $scope.dates.push($filter('date')(new Date(value), 'yyyy-MM-dd'));
      });

      $scope.formData.date = $scope.dates[0];
    });

    ChpService.getChps().then(function (response) {
      if (response.data.length) {
        $scope.chps = response.data;
      }
    });
  };

  $scope.send = function () {
    $scope.submitted = true;
    if ($scope.orderForm.$invalid) {
      return false;
    } else {
      BookerService.addOrder($scope.formData).then(function (response) {
        $location.path('/success');
      });
    }
  };

  $scope.loadInitialData();
}]);
