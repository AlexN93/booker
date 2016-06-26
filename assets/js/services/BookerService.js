bookerApp.service('BookerService', function($http, $q) {
  return {
    'getItem': function(itemId) {
      var defer = $q.defer();
      $http.get('/api/items/' + itemId).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'addOrder': function(order) {
      var defer = $q.defer();
      $http.post('/api/orders/', order).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    }
  }});
