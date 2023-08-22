function mySetInterval(callback, wait){
    function func(){
        callback();
        setTimeout(func, wait);
    }
    setTimeout(func, wait);
}