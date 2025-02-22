function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(10); // This will print numbers from 1 to 10

//This function is expected to return a number array
function returnNumbers(n:number):number[]{
  let arr:number[] = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  //This is wrong. The function should return arr
  console.log(arr);
}

returnNumbers(5); //This will print the array to console but will return undefined