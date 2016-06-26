bookerApp.controller('BookerCtrl', ['$scope', '$rootScope', '$routeParams', '$location', 'BookerService', 'ChpService', function ($scope, $rootScope, $routeParams, $location, BookerService, ChpService) {
  $scope.formData = {
    gender : 1
  };
  $scope.item = null;
  $scope.chps = [];
  $scope.itemId = $routeParams.itemId;

  $scope.loadInitialData = function () {
    BookerService.getItem($scope.itemId).then(function (response) {
      if (!response.data.length) {
        $location.path('/');
      }
      $scope.item = response.data;
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
