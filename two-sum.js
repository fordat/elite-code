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


// try to enhance the problem solving process.
var twoSumRedux = function(nums, target) {
  let indices = [];

  // let dict = {};
  let diff = 0;

  for (let i = 0; i < nums.length; i++) {
    diff = target - nums[i];
    // dict[i] = diff;

    potentialIndex = nums.indexOf(diff);

    if (potentialIndex !== i) {
      return [i, potentialIndex];
    }

  }

  return indices;
};

// try to enhance the problem solving process.
var twoSumReduxRedux = function(nums, target) {

  let dict = {};

  for (let i = 0; i < nums.length; i++) {

    let diff = target - nums[i];
    console.log(dict, diff);

    if (dict[diff] >= 0 && dict[diff] !== i) {
      return [dict[diff], i];
    } else {
      dict[nums[i]] = i;
    }
  }


  return [];
};



let numbers = [3,2,4];
let numbers2 = [2,7,11,15];

let thing = 6;
let target2 = 9;

let result = twoSumReduxRedux(numbers,thing);
twoSumReduxRedux(numbers2, target2);
console.log("what", result);
console.log(twoSumReduxRedux(numbers2, target2));