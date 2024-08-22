/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  const newArray = [...new Set(nums)].sort((a, b) => b - a);
  if (newArray.length <= 2) {
    return newArray[0];
  } else {
    return newArray[2];
  }
};
