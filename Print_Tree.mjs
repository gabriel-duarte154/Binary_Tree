const printTree = (node, prefix = '', isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    printTree(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? ' └── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    printTree(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};

export default printTree;
