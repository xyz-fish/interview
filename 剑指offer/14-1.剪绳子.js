/**
 * 给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n>1并且m>1），每段绳子的长度记为 k[0],k[1]...k[m-1] 。请问 k[0]*k[1]*...*k[m-1] 可能的最大乘积是多少？例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。

示例 1：

输入: 2
输出: 1
解释: 2 = 1 + 1, 1 × 1 = 1
示例 2:

输入: 10
输出: 36
解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36
提示：

2 <= n <= 58
*/

function cuttingRope(n) {
  if (n === 2) return 1
  if (n === 3) return 2
  if (n === 4) return 4
  let ans = 1

  while (n > 0) {
    if (n / 3 >= 2) {
      ans *= 3
      n -= 3
    } else {
      if (n === 5) {
        ans *= 6
      } else {
        ans *= n
      }
      n = 0
    }
  }
  return ans
}

// 第一种方法的优化
function cuttingRope(n) {
  if (n <= 3) return n - 1
  const a = n % 3,
    b = ~~(n / 3)
  if (a === 0) return Math.pow(3, b)
  if (a === 1) return Math.pow(3, b - 2) * 4
  return Math.pow(3, b) * 2
}

// dp

function cuttingRope(n) {
  const dp = Array.from({ length: n + 1 }).fill(0)

  for (let i = 2; i <= n; i++) {
    let curMax = i - 1
    for (let j = 1; j < i; j++) {
      curMax = Math.max(curMax, Math.max(j * (i - j)), j * dp[i - j])
    }
    dp[i] = curMax
  }

  return dp[n]
}
