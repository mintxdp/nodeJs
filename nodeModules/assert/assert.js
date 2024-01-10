let assert=require('assert');
let a=4,b=6;
assert(a<b);

// assert() function
//ex1
assert(a<b,"a is not greater than b.")

// assert.deepStrictEqual(actual,expected,[message])

assert.deepStrictEqual(5,"5","Actual value is not equal to expected value."); //will result error.

assert.deepStrictEqual(5,5,"Actual value is not equal to expected value.");  //will not result error.