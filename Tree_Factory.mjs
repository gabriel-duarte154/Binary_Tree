import Node from './Node.mjs';
import printTree from './Print_Tree.mjs';

function Tree(array) {
  let _root = buildTree(array, 0, array.length - 1);

  function buildTree(arr, start, end) {
    if (start > end) {
      return null;
    }

    let mid = Math.floor((start + end) / 2);
    let _root = Node(arr[mid]);

    _root.left = buildTree(arr, start, mid - 1);
    _root.right = buildTree(arr, mid + 1, end);

    return _root;
  }

  function insert(val, node = _root) {
    if (node === null) {
      return Node(val);
    }

    if (val < node.data) {
      node.left = insert(val, node.left);
    } else {
      node.right = insert(val, node.right);
    }

    return node;
  }

  function deleteNode(val, node = _root) {
    if (node === null) return node;

    if (val === node.data) {
      if (isLeafNode(node)) {
        node = null;
        return node;
      }

      if (hasSingleChild(node)) {
        node = singleChild(node);
        return node;
      }

      let succParent = node;
      let succ = node.right;

      while (succ.left !== null) {
        succParent = succ;
        succ = succ.left;
      }

      if (succParent !== node) {
        succParent.left = succ.right;
      } else {
        succParent.right = succ.right;
      }

      node.data = succ.data;

      return node;
    }

    if (val < node.data) {
      node.left = deleteNode(val, node.left);
    } else {
      node.right = deleteNode(val, node.right);
    }

    return node;
  }

  function isLeafNode(node) {
    return node.left === null && node.right === null;
  }

  function hasSingleChild(node) {
    return (
      (node.left !== null && node.right === null) ||
      (node.left === null && node.right !== null)
    );
  }

  function singleChild(node) {
    return node.left === null ? node.right : node.left;
  }

  function find(value, node = _root) {
    if (node === null) return null;
    if (value === node.data) return node;

    if (value < node.data) {
      return find(value, node.left);
    } else {
      return find(value, node.right);
    }
  }

  function levelOrder(fun, node = _root) {
    if (node === null) return;
    let q = [];
    let nodes = [];
    q.push(node);

    while (q.length > 0) {
      let current = q.shift();
      nodes.push(current.data);

      if (current.left !== null) {
        q.push(current.left);
      }

      if (current.right !== null) {
        q.push(current.right);
      }

      if (fun) {
        fun(current.data);
      }
    }

    return nodes;
  }

  function inorder(fun, node = _root, arr = []) {
    if (node === null) return arr;
    inorder(fun, node.left, arr);

    arr.push(node.data);
    if (fun) fun(node.data);

    inorder(fun, node.right, arr);
    return arr;
  }

  function preorder(fun, node = _root, arr = []) {
    if (node === null) return arr;
    arr.push(node.data);
    if (fun) fun(node.data);

    preorder(fun, node.left, arr);
    preorder(fun, node.right, arr);
    return arr;
  }

  function postorder(fun, node = _root, arr = []) {
    if (node === null) return arr;
    postorder(fun, node.left, arr);
    postorder(fun, node.right, arr);

    arr.push(node.data);
    if (fun) fun(node.data);
    return arr;
  }

  function height(node = _root) {
    if (node === null) return -1;

    let leftHeight = height(node.left) + 1;
    let rightHeight = height(node.right) + 1;

    return leftHeight > rightHeight ? leftHeight : rightHeight;
  }

  function depth(node) {
    let current = _root;
    let nodeDepth = 0;

    while (node !== current.data) {
      if (node > current.data) {
        current = current.right;
      } else {
        current = current.left;
      }

      if (current === null) return -1;

      nodeDepth++;
    }

    return nodeDepth;
  }

  function isBalanced(node = _root) {
    if (node === null) return;

    let leftHeight = height(node.left);
    let rightHeight = height(node.right);

    if (Math.abs(leftHeight - rightHeight) > 1) return false;

    isBalanced(node.left);
    isBalanced(node.right);

    return true;
  }

  function rebalance(tree = _root) {
    if (tree === null) return;
    if (isBalanced(tree)) return tree;

    const sortedArray = inorder(false, tree);
    const balancedTree = buildTree(sortedArray, 0, sortedArray.length - 1);
    setTree(balancedTree);

    return balancedTree;
  }

  function setTree(tree) {
    _root = tree;
  }

  function print() {
    printTree(_root);
  }

  return {
    buildTree,
    insert,
    deleteNode,
    find,
    levelOrder,
    inorder,
    preorder,
    postorder,
    height,
    depth,
    isBalanced,
    rebalance,
    print,
  };
}

export default Tree;
