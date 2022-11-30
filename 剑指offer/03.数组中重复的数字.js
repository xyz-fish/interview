// easy
/**
 * 找出数组中重复的数字。


在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

示例 1：

输入：
[2, 3, 1, 0, 2, 5, 3]
输出：2 或 3
 

限制：

2 <= n <= 100000
 */

// fn1: map
function findRepeatNumber(nums) {
  const set = new Set()

  for (let n of nums) {
    if (set.has(n)) return n
    set.add(n)
  }

  return -1
}

// fn2: 原地交换: 根据 长度n 0～n-1 范围 这个条件 调换位置到等会下标的时候 因必然存在重复的 所以等遍历要交换的两个地方的时候就找到了
function findRepeatNumber(nums) {
  const n = nums.length
  let i = 0
  while (i < n) {
    if (nums[i] === i) {
      i++
      continue
    }

    if (nums[i] === nums[nums[i]]) return nums[i]
    const temp = nums[i]
    nums[i] = nums[temp]
    nums[temp] = temp
  }

  return -1
}
