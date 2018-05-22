import { Euler } from './../src/euler.js';

describe('Problem1', function() {
  //test Problem 1
  it('should correctly sum all the numbers that are divisible', function() {
    var sumOfMultiples = new Euler();
    expect(sumOfMultiples.problem1(10)).toEqual(23);
  });

  //test Problem 2
  it('the next number should reflect the sum of the previous two numbers', function() {
    var sumOfTwoPrevious = new Euler();
    expect(sumOfTwoPrevious.problem2(21, 34)).toEqual(55);
  });


});
//
