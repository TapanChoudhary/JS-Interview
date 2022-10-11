const myThrottle = (cb, delay)=>{
    let last = 0;

    return (...args)=>{
        let now = new Date().getTime()
        if(now - last < delay) return
        last = now
        return cb(...args)
    }
}