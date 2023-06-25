function doubleExponentialSmoothing(data, alpha, beta, periods) {
  var smoothed = [data[0]];
  var trend = [data[1] - data[0]];
  var predictions = [];

  for (var i = 1; i < data.length; i++) {
    var level =
      alpha * data[i] +
      (1 - alpha) * (smoothed[i - 1] + trend[i - 1]);
    var newTrend =
      beta * (level - smoothed[i - 1]) + (1 - beta) * trend[i - 1];
    smoothed.push(level + newTrend);
    trend.push(newTrend);
  }

  var lastLevel = smoothed[smoothed.length - 1];
  var lastTrend = trend[trend.length - 1];

  for (var j = 1; j <= periods; j++) {
    var prediction = lastLevel + j * lastTrend;
    predictions.push(prediction);
  }

  return predictions;
}

// Example usage:
var data = [
  72, 100, 90, 85, 70, 61, 74, 90, 120, 80, 88, 90, 65, 95, 78, 105,
  60, 64, 78, 87, 90, 75, 80, 76, 70, 72, 120, 150, 60, 65, 70, 75,
  110, 105, 80, 85,
];
var alpha = 0.5;
var beta = 0.3;
var predictionPeriods = 12;

var predictions = doubleExponentialSmoothing(
  data,
  alpha,
  beta,
  predictionPeriods
);

export { predictions };
