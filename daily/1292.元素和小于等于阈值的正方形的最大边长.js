/*
 * @lc app=leetcode.cn id=1292 lang=javascript
 *
 * [1292] 元素和小于等于阈值的正方形的最大边长
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @param {number} threshold
 * @return {number}
 */
var maxSideLength = function (mat, threshold) {
  const m = mat.length,
    n = mat[0].length
  let s = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0))

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      s[i + 1][j + 1] = s[i][j + 1] + s[i + 1][j] - s[i][j] + mat[i][j]
    }
  }
  const query = (r1, c1, r2, c2) => {
    return s[r2 + 1][c2 + 1] - s[r2 + 1][c1] - s[r1][c2 + 1] + s[r1][c1]
  }

  let ans = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      while (i + ans < m && j + ans < n && query(i, j, i + ans, j + ans) <= threshold) {
        ans += 1
      }
    }
  }
  return ans
}
// @lc code=end

// const mat = [
//     [1, 1, 3, 2, 4, 3, 2],
//     [1, 1, 3, 2, 4, 3, 2],
//     [1, 1, 3, 2, 4, 3, 2],
//   ],
//   threshold = 4
const mat = [
    [28, 39, 98, 91, 7, 99],
    [79, 3, 17, 83, 9, 92],
    [81, 73, 42, 27, 67, 70],
    [88, 30, 73, 99, 96, 89],
    [27, 59, 0, 1, 65, 79],
    [42, 55, 48, 29, 86, 96],
  ],
  threshold = 24829

console.log(maxSideLength(mat, threshold))
