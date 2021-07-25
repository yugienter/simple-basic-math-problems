const algrithm = {};

/**
 * Given a sorted array of distinct integers and a target value, return the index if the target is found. If not,
return the index where it would be if it were inserted in order.
Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:
Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:
Input: nums = [1,3,5,6], target = 7
Output: 4
Example 4:
Input: nums = [1,3,5,6], target = 0
Output: 0
Example 5:
Input: nums = [1], target = 0
Output: 0

 * @param {nums, target} req
 * @param {result = {
    nums: [1, 3, 5, 6],
    arrayLength,
    target,
    position,
  }} res
 * @returns
 */

algrithm.searchInsertPosition = async function (req, res) {
  const { nums = [1, 3, 5, 7], target = 2 } = req.query;
  const arrayLength = nums.length;
  let position = arrayLength;
  for (let i = 0; i < arrayLength; i++) {
    if (nums[i] >= target) {
      position = i;
      break;
    }
  }
  const description = 'Given a sorted nums of distinct integers and a target'
    + ' value, return the index if the target is found. If not,'
    + '  return the index where it would be if it were inserted in order.'

  const inputUrlQueryTest = 'Example :\n'
    + ' nums = [1,2,5,9] - \n'
    + ' target = 5 - \n'
    + ' user URL like :/algorithm/search-insert-position?nums=1&nums=2&nums=5&nums=9&target=5'

  const result = {
    description,
    'array Input': nums,
    'target input': target,
    'expected results': position,
    'how to test': inputUrlQueryTest,
    position,
  }
  return res.json({ result });
}

module.exports = algrithm;
