/*Project Euler - http://www.projecteuler.net
The Odin Project - http://www.theodinproject.com/web-development-101/javascript-basics?ref=lnav
Problem 3
The prime factors of 13195 are 5, 7, 13 and 29. What is the largest prime factor of the number 600851475143 ?

This brute force solution will get it done, if you have enough time to wait
*/

//function that finds factors of a given number
//returns them in an array, decending order
function findFact(num){
    var factors = [];
    for (i=num;i>=1;i--){
        if (num % i === 0){
            factors.push(i);
        }
    }
    return factors;
}

//checks whether a given number is prime
//to save time: checks if divisible by 2 or 3 first then
//starts at five increasing by 6 - only up to sqr root of n 
function isPrime(n) {
 if (n%2===0) return (n==2);
 if (n%3===0) return (n==3);
 var root=Math.sqrt(n);
 for (var i=5;i<=root;i+=6) {
  if (n%i===0)     return false;
  if (n%(i+2)===0) return false;
 }
 return true;
}

//finds largest prime factor of a given number
function bigFact(num){
    for (i=Math.floor(num/2);i>1;i--){
        if (num % i === 0){
            if (isPrime(i)) return i;
        }
    }
    return num;
}

//performance timing
var num = 51475143;
var start = new Date().getTime();
console.log("Largest prime factor of: " + num + " is: " + bigFact(num));
var end = new Date().getTime();
console.log("Runtime was: " + ((end - start)/1000) + " seconds, or " + ((end - start)/60000) + " min.");

/*
Largest prime factor of: 60085147 is: 1397329
Runtime was: 0.21 seconds, or 0.0035 min.
   
Largest prime factor of: 600851475 is: 54499
Runtime was: 2.238 seconds, or 0.0373 min.
   
Largest prime factor of: 6008514751 is: 3439333
Runtime was: 155.126 seconds, or 2.5854333333333335 min.

Above, it took over 2.5 min to run a 10 digit number.
I do not have the patience to run 11 or 12 digit numbers,
but they should take half an hour and five hours respectively.
*/