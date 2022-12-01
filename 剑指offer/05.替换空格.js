/*
请实现一个函数，把字符串 s 中的每个空格替换成"%20"。

 

示例 1：

输入：s = "We are happy."
输出："We%20are%20happy."
 

限制：

0 <= s 的长度 <= 10000
*/

function replaceSpace(s) {
  return s.replaceAll(' ', '%20')
}

function replaceSpace(s) {
  const n = s.length
  const ans = []
  let i = 0

  for (let j = 0; j < n; j++) {
    const c = s.charAt(j)
    if (c === ' ') {
      ans[i++] = '%'
      ans[i++] = '2'
      ans[i++] = '0'
    } else {
      ans[i++] = c
    }
  }

  return ans.join('')
}
