/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let indices = [];

    for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums.length; j++) {
        let sum = nums[i] + nums[j];
        if (sum === target && i !== j) {
          indices[0] = i;
          indices[1] = j;
        }
      }
    }

    return indices;
};

let numbers = [3,2,4];
let thing = 6;
let result = twoSum(numbers,thing);
console.log("what", result);