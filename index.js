const tree = {
  value: 8,
  left: {
    value: 4,
    left: {
      value: 3,
      left: {
        value: 2,
        left: null,
        right: null,
      },
      right: null,
    },
    right: {
      value: 5,
      left: null,
      right: {
        value: 7,
        left: {
          value: 6,
          left: null,
          right: null,
        },
      },
    },
  },
  right: {
    value: 12,
    left: {
      value: 10,
      left: {
        value: 9,
        left: null,
        right: null,
      },
      right: {
        value: 11,
        left: null,
        right: null,
      },
    },
  },
};

const postOrderTraverse = (node, array) => {
  if (!node) return array;
  array = postOrderTraverse(node.left, array);
  array = postOrderTraverse(node.right, array);
  array.push(node.value);
  return array;
};

console.log(postOrderTraverse(tree, []));

// dfsPre(tree);
// dfsIn(tree);
dfsPost(tree);

// pre -> root left right
// in -> left root right
// post -> left right root

function dfsPre(tree) {
  if (tree === null) return;
  console.log(tree.value);
  if (tree.left) dfsPre(tree.left);
  if (tree.right) dfsPre(tree.right);
}

function dfsIn(tree) {
  if (!tree) return;
  if (tree.left) dfsIn(tree.left);
  console.log(tree.value);
  if (tree.right) dfsIn(tree.right);
}

function dfsPost(tree) {
  if (!tree) return;
  if (tree.left) dfsPost(tree.left);
  if (tree.right) dfsPost(tree.right);
  console.log(tree.value);
}
