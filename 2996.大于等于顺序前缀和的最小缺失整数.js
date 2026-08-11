/*
 * @lc app=leetcode.cn id=2996 lang=javascript
 *
 * [2996] 大于等于顺序前缀和的最小缺失整数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function (nums) {
  let cache = new Array(52).fill(0)
  nums.forEach((a) => {
    cache[a] = true
  })
  let ans = nums[0]
  let i = 1
  while (nums[i] === nums[i - 1] + 1) {
    ans += nums[i]
    i++
  }
  while (cache[ans]) ans++
  return ans
}
// @lc code=end
const args = [3, 4, 5, 1, 12, 14, 13]
// const args = [37, 1, 2, 9, 5, 8, 5, 2, 9, 4]
console.log(missingInteger(args))

var missingInteger_1 = function (nums) {
  let cache = new Array(52).fill(0)
  nums.forEach((a) => {
    cache[a] = true
  })
  let ans = nums[0] + 1
  let maxLen = 1
  for (let i = 1; i < nums.length; i++) {
    let sum = nums[i - 1]
    let len = 1
    while (nums[i] === nums[i - 1] + 1) {
      sum += nums[i]
      len++
      i++
    }
    if (maxLen < len) {
      maxLen = len
      while (cache[sum]) {
        sum++
      }
      ans = sum
    }
  }
  return ans
}
