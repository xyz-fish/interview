/*
输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。

 

示例 1：

输入：head = [1,3,2]
输出：[2,3,1]
 

限制：

0 <= 链表长度 <= 10000
*/

function reversePrint(head) {
  let curr = head,
    res = []

  while (curr) {
    res.unshift(curr.val)
    curr = curr.next
  }

  return ans
}
// 递归
function reversePrint(head) {
  const res = []

  function reverseNodeList(list) {
    if (list === null) return

    reverseNodeList(list.next)
    res.push(list.val)
  }

  reverseNodeList(head)

  return res
}
