/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let uniqueSet = new Set();

    for (let num of nums) {
        if (uniqueSet.has(num)) {
            return true;
        }
        uniqueSet.add(num);
    }
    return false;
};