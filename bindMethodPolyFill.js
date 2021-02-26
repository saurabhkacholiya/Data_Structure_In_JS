// Create poly fill for bind method 

let object = {
    fN : 'Bruce',
    lN : 'Wayne'
}

let printName = function(value){
    console.log(`${this.fN} ${this.lN} ${value}`)
}

let withBindMethod = printName.bind(object)

withBindMethod('Love')


Function.prototype.myBind = function(...args){
    let fn = this
    return function(...args2){
        fn.apply(args[0],[...args.slice(1),...args2])
    }
}

let withMyBindMethod = printName.myBind(object)

withBindMethod('Kacholiya')