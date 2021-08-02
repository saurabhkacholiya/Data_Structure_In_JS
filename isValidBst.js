function isValidBst(root) {
  return validateBST(root, null, null);
}

function validateBST(node, left, right) {
  if (node === null) return true;

  if (left && node.val >= left) return false;

  if (right && node.val <= right) return false;

  return (
    validateBST(node.left, left, node.val) &&
    validateBST(node.right, node.val, right)
  );
}
