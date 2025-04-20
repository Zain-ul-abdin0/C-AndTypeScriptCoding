// function sumOfAnArray(arr: number[]): number {
//   let sum = 0;
//   sum = arr.reduce((sum,arr)=>sum+arr);
//   return sum;
// }

// console.log(sumOfAnArray([1, 2, 3, 4, 5]));

// function reverseString(str: string):string{
//   let result : string = str;
//   return result.split('').reverse().join('');
// }
// console.log(reverseString('ahmad'));


function FilterEvenNumbersFromList(arr:number[]):number[]{
  return arr.filter((arr=>arr%2==0));
}
console.log(FilterEvenNumbersFromList([1,2,4,5]))