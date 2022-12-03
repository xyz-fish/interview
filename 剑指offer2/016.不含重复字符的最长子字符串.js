/**
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长连续子字符串 的长度。

 

示例 1:

输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子字符串是 "abc"，所以其长度为 3。
示例 2:

输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子字符串是 "b"，所以其长度为 1。
示例 3:

输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
示例 4:

输入: s = ""
输出: 0
 */

/**
 * 双指针
 * 求最大长度： 每次获取满足条件的双指针的差值，用ans来记录最大值
 */

function lengthOfLongestSubstring(s) {
  // map 记录下存在的
  const n = s.length,
    map = new Map()
  // 开始位置一个记录 -1
  let l = -1

  for (let i = 0; i < n; i++) {
    const c = s.charAt(i)
    // 如果存在更新开始位置 l, 然后删除map中 l 前面的元素
    if (map.has(c)) {
      l = map.get(c)
      for (let m of map) {
        if (m[1] <= l) {
          map.delete(m[0])
        }
      }
    } else {
      // 获取最大值
      ans = Math.max(ans, i - l)
    }
    // 更新下标
    map.set(c, i)
  }

  return ans
}

function lengthOfLongestSubstring(s) {
  const n = s.length
  const map = new Map()
  let l = -1,
    ans = 0
  for (let i = 0; i < n; i++) {
    const c = s.charAt(i)
    if (map.has(c)) {
      l = Math.max(l, map.get(c))
    }
    map.set(c, i)
    ans = Math.max(ans, i - l)
  }

  return ans
}
