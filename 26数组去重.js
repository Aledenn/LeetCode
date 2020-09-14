// 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。

// 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。

var removeDuplicates = function(nums) {
  let cur = nums[0];
  for (let i = 1; i < nums.length; ) {
    if (nums[i] === cur) nums.splice(i, 1);  // 直接修改原数组
    else cur = nums[i++];
  }
  return nums.length;
};

console.log(removeDuplicates([1, 1, 2]));

// console.log(removeDuplicates2([1, 1, 2]));
