// Only change code below this line

function sumFibonacci(num) {

  let fibn = [];
  let oddFib = [];
  let sum = [];
  fibn[0] = 0;
  fibn[1] = 1;

    if(num < 0){
      return num = 0;
    }
    if (num === 0){
      return num;
    }
    if (num === 1){
    return num;
    }
    if (num >2){
      for ( let i = 2; i <= num; i++){
      fibn[i] = fibn[i - 2] + fibn[i - 1]; 
      }
    }  

for (let i = 0; i < fibn.length; i++){
  if (fibn[i] % 2 !== 0 ){
    oddFib.push(fibn[i]);
    }
  }


  for (let i = 0; i < oddFib.length; i ++){
    if (oddFib[i] < num)
    {
    sum.push(oddFib[i]);
    }
  }

  return sum.reduce((a,b) => a + b);
         
      
}

// Only change code above this line

console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5)); // Change this line
module.exports = sumFibonacci;