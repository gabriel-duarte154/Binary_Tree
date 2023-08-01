import getSortedArray from './Sorted_Array.mjs';
import Tree from './Tree_Factory.mjs';

const binaryTree = Tree(getSortedArray());

binaryTree.print();
treeIsBalanced(binaryTree);
printTreeInAllMethods(binaryTree);
unbalanced(binaryTree);
binaryTree.print();
treeIsBalanced(binaryTree);
binaryTree.rebalance();
binaryTree.print();
treeIsBalanced(binaryTree);
printTreeInAllMethods(binaryTree);

function treeIsBalanced(tree) {
  console.log(`Tree is Balanced: ${tree.isBalanced()}`);
}

function unbalanced(tree) {
  while (tree.isBalanced()) {
    let random = Math.floor(Math.random() * 100) + 1;
    tree.insert(random);
    console.log(`Insert a random number: ${random}`);
  }
}

function printTreeInAllMethods(tree) {
  console.log(`Level Order: ${tree.levelOrder()}\n`);
  console.log(`Inorder: ${tree.inorder()}\n`);
  console.log(`Postorder: ${tree.postorder()}\n`);
  console.log(`Preorder: ${tree.preorder()}\n`);
}
