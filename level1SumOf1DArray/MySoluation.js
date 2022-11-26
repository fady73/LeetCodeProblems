var runningSum = function(nums) {
 nums.reduce(
  (accumulator, currentValue,currentIndex,currentArray) =>{
    return  currentArray[currentIndex]+=accumulator
  }
);
    return nums;
};
