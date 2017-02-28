'use strict';

/**
 * @ngdoc function
 * @name freeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the freeApp
 */
angular.module('freeApp')
  .controller('MainCtrl', ['$http','$scope', function ($http, $scope) {
    var ready1 = false;
    var ready2 = false;
    $scope.free = null;
    $scope.index = null;
    $scope.version = null;
    $scope.active = null;
    $scope.myStyle = {'transform':'translateX(-100vw)'};

    $scope.changeActive = function (indice) {
      $scope.active = $scope.index[indice];
      $scope.myStyle = {'transform':'translateX(0vw)'};
    };

    $scope.hide = function () {
      $scope.myStyle = {'transform':'translateX(-100vw)'};
    };

    function check() {
      if (ready1 && ready2) {
        console.log("cargas listas");
        for(var i in $scope.free.champions){
          var aux=$scope.free.champions[i].id;
          var land = new Image();
          land.src = "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/"+$scope.index[aux].key+"_0.jpg";
          var port = new Image();
          port.src = "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/"+$scope.index[aux].key+"_0.jpg";
        }
      }
    }

    $http({
      method: 'GET',
      url: 'https://euw.api.pvp.net/api/lol/euw/v1.2/champion?freeToPlay=true&api_key=e216a393-aaf6-422c-a98f-106fe7322ada'
    }).then(function successCallback(response) {
      ready1=true;
      console.log("rotacion lista");
      $scope.free = response.data;
      check();
    }, function errorCallback(response) {
      console.log(response);
    });

    $http({
      method: 'GET',
      url: 'https://global.api.pvp.net/api/lol/static-data/euw/v1.2/champion?dataById=true&champData=tags,info&api_key=e216a393-aaf6-422c-a98f-106fe7322ada'
    }).then(function successCallback(response) {
      ready2=true;
      console.log("indice listo");
      $scope.index = response.data.data;
      $scope.version = response.data.version;
      check();
    }, function errorCallback(response) {
      console.log(response);
    });

  }]);
