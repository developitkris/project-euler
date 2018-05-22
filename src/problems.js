//Problem 1
export function Problem1(num) {
    this.num = num;
}

Problem1.prototype.checkType = function(num) {
  var sum = 0;
  for (var i=1; i<num; i++){
    if((i%3 ==0) || (i%5 == 0)){
      console.log("match found at" + i);
      sum += i;
    }
  }
  console.log(sum);
  return sum;

}

//Problem 2
