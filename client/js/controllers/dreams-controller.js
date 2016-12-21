app.controller('dreamsController', ['$scope', '$resource', function($scope, $resource) {
  var Dream = $resource('/api/dreams')
  Dream.query(function(result) {
    $scope.dreams = result;
  })
  $scope.dreams = [];
  $scope.createDream = function() {
    var dream = new Dream();
    dream.author = $scope.author;
    dream.title = $scope.dreamTitle;
    dream.body = $scope.dreamBody;
    dream.tags = $scope.tags;
    dream.$save(function (result) {
      $scope.dreams.push(result);
      $scope.author = '';
      $scope.dreamTitle = '';
      $scope.dreamBody = '';
      $scope.tags = '';
    });
  }
}])
