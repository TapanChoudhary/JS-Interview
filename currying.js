function curriedFunction(a){

    return function(b){

        if(b) return curriedFunction(a+b)
        return a
    }
}

console.log(curriedFunction(2)(4)())