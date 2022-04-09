// Only change code below this line

function myCounter(n) {
    if (n < 1) {
        return [];
        } else {
            const countdownArray = myCounter(n - 1);
            countdownArray.unshift(n);
            return countdownArray;
        }
}

// Only change code above this line

console.log(myCounter(-1));
console.log(myCounter(10));
console.log(myCounter(5));  // Change this line
module.exports = myCounter;