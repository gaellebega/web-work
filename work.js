let num=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,1,5,16,17,18,19,20];
 function calculateSum(arr){
let sum=0;
for(let i=0; i<arr.length; i++){
  sum += arr[i];
    }
    return sum;
  }
console.log(calculateSum(num));

function findLarge(arr){
let largest=arr[0];
for(let i=1;i<arr.length;i++){
  if(arr[i]>largest){
    largest=arr[i];
  }
}
return largest;
}
console.log(findLarge(num));