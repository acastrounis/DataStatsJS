/**
 * DataStats
 * https://github.com/acastrounis/DataStatsJS
 * Copyright 2014 Alex Castrounis
 * Available under MIT license
 */
(function() {
  var dStats = {};

  function sum(arr) {
    var total = 0;

    for (var i = 0; i < arr.length; i++) {
      total = total + arr[i];
    }

    return total;
  }

  function mean(arr) {
    return sum(arr) / arr.length;
  }

  dStats.sum = sum;
  dStats.mean = mean;

  if (typeof module !== 'undefined') {
    module.exports = dStats;
  } else {
    this.dStats = dStats;
  }

}.call(this));
