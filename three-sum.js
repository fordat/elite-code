// notes and work
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function(nums) {
  let sortedNums = nums.sort();
  let results = []

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) {
      continue;
    }

    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      let threeSum = sortedNums[i] + sortedNums[l] + sortedNums[r];
      if (threeSum > 0) {
        r = r - 1
      } else if (threeSum < 0) {
        l = l + 1
      } else {
        results.push([sortedNums[i], sortedNums[l], sortedNums[r]]);
        l++;
        r--;
      }

      console.log("lr: ", i, l, r);
    }
  }

  return results;
}

let nums = [-1,0,1,2,-1,-4];

console.log(threeSum(nums));