'use strict';

/**
 * @ngdoc filter
 * @name freeApp.filter:utilFilters
 * @function
 * @description
 * # utilFilters
 * Filter in the freeApp.
 */
 var filtros = angular.module('utilFilters',[]);

    filtros.filter('orderObjectBy', function () {
      return function(items, field, reverse) {
        var filtered = [];
        angular.forEach(items, function(item) {
          filtered.push(item);
        });
        filtered.sort(function (a, b) {
          return (a[field] > b[field] ? 1 : -1);
        });
        if(reverse) filtered.reverse();
        return filtered;
      };
    });

    filtros.filter('tagsFilter', function () {
      return function (items, tags) {
          var filtered = [];
          (items || []).forEach(function (item) {
              var matches = tags.every(function (tag) {
                  return (item.tags.indexOf(tag) > -1);
              });
              if (matches) {
                  filtered.push(item);
              }
          });
          return filtered;
      };
    });

    filtros.filter('skinFilter', function () {
      return function (name) {
          if (name==="default") {
            return "Classic";
          }
          return name;
      };
    });
