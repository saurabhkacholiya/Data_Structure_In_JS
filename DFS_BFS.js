function Node(name){
    this.name = name
    this.children = []
    this.addChildren = function(name){
        this.children.push(new Node(name))
        return this
    }
    this.depthFirstSearch = function(array){
        array.push(this.name)
        for(const child of this.children){
            child.depthFirstSearch(array)
        }
        return array
    }
    this.breadthFirstSearch = function(array){
        const queue = [this]
        while(queue.length){
            const current = queue.shift()
            array.push(current.name)
            for(const child of current.children){
                queue.push(child)
            }
        }
        return array
    }
}
