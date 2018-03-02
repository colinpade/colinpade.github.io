angular.module('whale-watcher', [])
.controller('api-eth', function($scope, $http) {
  $scope.loading = true;
  $http.get('https://api.gdax.com/products/eth-usd/book?level=3')
    .then(function(response) {
      whale_block_size = 99;
      whale_min_price = response.data.bids[0][0] - 75;
      whale_max_price = whale_min_price + 150;
      whale_bids = [];
      whale_asks = [];
      for (let bid of response.data.bids) {
        if (bid[1] > whale_block_size & bid[0] > whale_min_price) {
          whale_bids.push(bid);
        }
      }
      for (let ask of response.data.asks) {
        if (ask[1] > whale_block_size & ask[0] < whale_max_price) {
          whale_asks.push(ask);
        }
      }
      $scope.whale_bids = whale_bids;
      $scope.whale_asks = whale_asks.reverse();
    }).finally(function() {
      $scope.loading = false;
    });
})
.controller('api-ltc', function($scope, $http) {
  $scope.loading = true;
  $http.get('https://api.gdax.com/products/ltc-usd/book?level=3')
    .then(function(response) {
      whale_block_size = 500;
      whale_min_price = response.data.bids[0][0] - 10;
      whale_max_price = whale_min_price + 20;
      whale_bids = [];
      whale_asks = [];
      for (let bid of response.data.bids) {
        if (bid[1] > whale_block_size & bid[0] > whale_min_price) {
          whale_bids.push(bid);
        }
      }
      for (let ask of response.data.asks) {
        if (ask[1] > whale_block_size & ask[0] < whale_max_price) {
          whale_asks.push(ask);
        }
      }
      $scope.whale_bids = whale_bids;
      $scope.whale_asks = whale_asks.reverse();
    }).finally(function() {
      $scope.loading = false;
    });
})
.controller('api-btc', function($scope, $http) {
  $scope.loading = true;
  $http.get('https://api.gdax.com/products/btc-usd/book?level=3')
    .then(function(response) {
      whale_block_size = 20;
      whale_min_price = response.data.bids[0][0] - 800;
      whale_max_price = whale_min_price + 1600;
      whale_bids = [];
      whale_asks = [];
      for (let bid of response.data.bids) {
        if (bid[1] > whale_block_size & bid[0] > whale_min_price) {
          whale_bids.push(bid);
        }
      }
      for (let ask of response.data.asks) {
        if (ask[1] > whale_block_size & ask[0] < whale_max_price) {
          whale_asks.push(ask);
        }
      }
      $scope.whale_bids = whale_bids;
      $scope.whale_asks = whale_asks.reverse();
    }).finally(function() {
      $scope.loading = false;
    });
});
