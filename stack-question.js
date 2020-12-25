
const path = "/../../foo/../../bar/baz"

shortenPath(path)

function shortenPath(path) {
	const startWithSlash = path[0] == '/'
	const filterPath = path.split('/').filter(filterString)
    const stack = []
    if(startWithSlash) stack.push('')
	for(const char of filterPath){
		if(char == '..'){
            if(stack.length == 0 || stack[stack.length -1 ] == '..'){
				stack.push('..')
			}else if(stack[stack.length -1] !== ''){
				stack.pop()
			}
		}else{
			stack.push(char)
		}
    }

	if(stack.length == 1 && stack[0] == '') return '/'
	return stack.join('/')
}


function filterString(item){
	return item.length > 0 && item != '.'
}