class TreeNode {
  constructor(val, left, right) {
    this.val = val ? val : null;
    this.left = left ? left : null;
    this.right = right ? right : null;
  }
}
let left = new TreeNode(9, null, null);
let rightR = new TreeNode(10, null, null);
let rightL = new TreeNode(11, null, null);
let right = new TreeNode(10, rightL, rightR);
let root = new TreeNode(3, left, right);

var minDepth = function (root) {
  if (root === null) {
    return 0;
  }

  // 需要一个queue来存储后面需要执行的node
  let queue = [];
  // queue 一开始有root在里面
  queue.push(root);

  // 需要一个res， 这个res就是我们的BFS往外扩了几步
  // 初始化为1，因为我们从第一层root开始查找
  let res = 1;

  // 为queue里的每一个node执行一次查找程序
  while (queue.length > 0) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let curr = queue.shift();
      if (curr.left === null && curr.right === null) {
        return res;
      }
      if (curr.left !== null) {
        queue.push(curr.left);
      }
      if (curr.right !== null) {
        queue.push(curr.right);
      }
    }
    res++;
  }
};

console.log(minDepth(root));
