export function Euler(num) {
    this.num = num;
}

//Problem 1
Euler.prototype.problem1 = function(num) {
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
Euler.prototype.problem2 = function(num) {
  var sum = 0;
  for (var i=2; i<sum; i+2){
    if (num%2 ==0){
      sum += (num[i].length-2 + num[i].length-1);
      console.log(sum);
      return sum;
    }
  }
}
//Problem 3

// exports.eulerModule = Euler;
