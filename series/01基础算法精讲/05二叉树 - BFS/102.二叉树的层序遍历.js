/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let ans = []
  if (!root) return ans

  let queue = [root]
  while (queue.length) {
    ans.push(queue.map((node) => node.val))
    let n = queue.length
    for (let i = 0; i < n; i++) {
      let node = queue.shift()
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
  }

  return ans
}
// @lc code=end
import { gTree } from '../../../lib/tree.js'
const args = gTree([3, 9, 20, null, null, 15, 7])
// const args = gTree([])
console.log(levelOrder(args))
