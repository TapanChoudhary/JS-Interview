const myDebounce = (cb, delay)=>{
    let timer ;
    return function (...args) { 
        if(timer) clearTimeout(timer); 
        time = setTimeout(() => {
            cb(...args);
        }, delay);
    }
}