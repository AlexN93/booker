bookerApp.service('ChpService', function($http, $q) {
  return {
    'getChps': function () {
      var defer = $q.defer();
      $http.get('/api/chps/').success(function (resp) {
        defer.resolve(resp);
      }).error(function (err) {
        defer.reject(err);
      });
      return defer.promise;
    }
  }});
