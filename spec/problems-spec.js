import { Problem1 } from './../src/problems.js';

describe('Problems', function() {

  it('should correctly sum all the numbers that are divisible', function() {
    var sumOfMultiples = new Problem1();
    expect(sumOfMultiples.checkType(10)).toEqual(23);
  });




});
