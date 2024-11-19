// Function to print every number from 1-100, if it's a multiple of 3, it prints
// "Fizz" instead of the number. If it's a multiple of 5, it will print "Buzz"
// instead of the number. If it's a multiple of both 3 and 5, it will print
// "FizzBuzz" instead of the number.
function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

// Example usage
fizzBuzz();
