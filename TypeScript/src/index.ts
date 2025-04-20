function sumOfAnArray(arr: number[]): number {
  let sum = 0;
  sum = arr.reduce((sum,arr)=>sum+arr);
  return sum;
}

console.log(sumOfAnArray([1, 2, 3, 4, 5]));