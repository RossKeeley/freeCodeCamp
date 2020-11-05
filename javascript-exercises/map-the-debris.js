function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
 
 let orbitalPeriodResults = []

  arr.forEach(function(dataPoint) {
    let translatedDataPoints = {};
    let semiMajorAxis = earthRadius + dataPoint.avgAlt;
    let formulaResult = Math.round((2 * Math.PI) * (Math.sqrt((Math.pow(semiMajorAxis, 3)) / GM)));

    translatedDataPoints.name = dataPoint.name;
    translatedDataPoints.orbitalPeriod = formulaResult;
    orbitalPeriodResults.push(translatedDataPoints)
  });
  return orbitalPeriodResults;
}

let result = (orbitalPeriod(
  [
    {name: "iss", avgAlt: 413.6}, 
    {name: "hubble", avgAlt: 556.7}, 
    {name: "moon", avgAlt: 378632.553}
  ]
));
console.log(result);