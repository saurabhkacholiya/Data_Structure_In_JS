// remember the when you are passing to left the maximum of all the element should be less than current node value
// and same for when you are passing in right the minimum value should be less than current node value
var isValidBST = function (root) {
  return bst(root, null, null);
};

function bst(root, min, max) {
  if (root === null) return true;

  if ((min !== null && min >= root.val) || (max !== null && max <= root.val))
    return false;

  return bst(root.left, min, root.val) && bst(root.right, root.val, max);
}
