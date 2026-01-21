/*
 * @lc app=leetcode.cn id=3227 lang=javascript
 *
 * [3227] 字符串元音游戏
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var doesAliceWin = function (s) {
  return /[aeiou]/.test(s)
}
// @lc code=end
