function fibonacci(num) {
if (num<=1){
  return num
}
return fibonacci(num-1) + fibonacci(num - 2)
}

/*
let howManyTimesToAddLastTwoNumbers = num - 1;
let lastTwo = [0,1];
 while(howManyTimesToAddLastTwoNumbers > 0){
  const sum = lastTwo[0]+ lastTwo[1];
  lastTwo= [lastTwo[1], sum]
  //console.log(`i: ${i}, num: ${num}, lastTwo: ${lastTwo}`)
  howManyTimesToAddLastTwoNumbers--;
 }

//console.log(`num: ${num}, lastTwo: ${lastTwo}`)
//console.log(`FIBONACCI ${num} END`);
return lastTwo[1]*/

// function fib(num){
//   if (i<=1){
//     return num
//   }
//   let lastTwo=[0,1]
//   for (i=0; i< num-1; i++){
//     const sum = lastTwo[0]+ lastTwo[1]
//     lastTwo = [lastTwo[1], sum]
//   }
//   return lastTwo[1]
// }
if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// fibonacci function  = [0,1] + 
// F(n) = F(n-1) + F(n-2)
// f function = let (i=1, i<num-1, ++i,){
//       }

// And a written explanation of your solution
// go thru fibonacci sequence and output number that correlates to a position which is given