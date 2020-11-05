function smallestCommons(arr) {
  
  let lowNum = Math.min(...arr); 
  let highNum = Math.max(...arr);
  
  let numberRange = getRange(lowNum, highNum);
  let multiple = 1;
  while (multiple < 1000000) {
  let highestCommonMultiple = (lowNum * multiple) * highNum;
  multiple++;

  let trueCount = 0;
    for (let i = 0; i < numberRange.length; i++) {

      if (highestCommonMultiple % numberRange[i] === 0) {
        trueCount++;
        if (trueCount === numberRange.length) {
          return highestCommonMultiple;
        }
      }
    }
  }   
}

function getRange(lowNum, highNum) {
  let resultRange = [];
  for (let i = lowNum; i <= highNum; i++) {
    resultRange.push(i);
  }
  return resultRange;
}

let result = smallestCommons([23, 18]);
console.log(result);