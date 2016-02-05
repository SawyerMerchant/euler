/*Project Euler - http://www.projecteuler.net
The Odin Project - http://www.theodinproject.com/web-development-101/javascript-basics?ref=lnav
Problem 1
sum all multiples of 3 and 5
ex:  numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6
and 9. The sum of these multiples is 23.

//funtion takes the high number of the set in which we seek multiples
//3&5 hard coded as multiples. Would like to learn how to pass them //as array for added flexability
var isMultiple = function(numberSet) {
    multiples = 0;
    for (i = 0; i < numberSet; i++) {
        if (i % 3 === 0  || i % 5 === 0) {
            multiples+=i;            
        }
    }
    return multiples;
};

console.log(isMultiple(1000));