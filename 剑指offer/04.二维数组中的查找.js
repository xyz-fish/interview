/**
 *在一个 n * m 的二维数组中，每一行都按照从左到右 非递减 的顺序排序，每一列都按照从上到下 非递减 的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

 

示例:

现有矩阵 matrix 如下：

[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
给定 target = 5，返回 true。

给定 target = 20，返回 false。

 

限制：

0 <= n <= 1000

0 <= m <= 1000
*/

// 根据从左到右和从上到下都是非递减 找到一个左下的点的值 然后作比较

function findNumberIn2DArray(matrix, target) {
  // 先判断下空的情况
  if (!matrix.length) return false
  const m = matrix.length,
    n = matrix[0].length

  let x = 0,
    y = n - 1
  // 矩阵边界
  while (x < n && y >= 0) {
    const posVal = matrix[y][x]

    if (posVal === target) return true
    // 根据非递增的顺序来处理移动位置
    if (posVal < target) {
      x++
      continue
    }

    y--
  }

  return false
}

// 二分
function findNumberIn2DArray(matrix, target) {
  for (nums of matrix) {
    let l = 0,
      r = nums.length - 1

    // 每一行都是递增的
    while (l <= r) {
      const mid = (l + r) >> 1

      if (matrix[mid] === target) return true
      if (matrix[mid] > target) {
        r = mid - 1
      } else {
        l = mid + 1
      }
    }
  }

  return false
}
