function solution(number){
    let nums = [];
    for (let i = 0; i < number; i++) {
      if (i % 3 == 0) {
        nums.push(i)
      }
      else if (i % 5 == 0) {
        nums.push(i)
      } 
  }
sum = nums.reduce((partialSum, a) => partialSum + a, 0);
  console.log(sum);
}

console.log(solution(10));