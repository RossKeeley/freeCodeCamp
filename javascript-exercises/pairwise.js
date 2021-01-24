function pairwise(arr, arg) {

 if (arr.length === 0) return 0;
 var result = [];

 const reduce = (accumulator, currentValue) => accumulator + currentValue;

 for(var i=0; i<=arr.length; i++) {
   for(var j=i+1; j<=arr.length; j++) {
       if(
         arr[i] + arr[j] == arg &&
         (result.indexOf(i)<0 && result.indexOf(j)<0)
       ) {
         result.push(i);
         result.push(j);
       }
     }
   }
 return result.reduce(reduce);
}

console.log(pairwise([1,4,2,3,0,5], 7));
