var maxPathSum = function(root) {
    let maxSum = Number.MIN_SAFE_INTEGER
    getPathSum(root)
    return maxSum
    
    function getPathSum(node){
        if(!node) return 0
        let left = Math.max(0,getPathSum(node.left))
        let right = Math.max(0,getPathSum(node.right))
        let priceNewPath = node.val + left + right
        maxSum = Math.max(maxSum,priceNewPath)
        return node.val + Math.max(left,right)
    }
};