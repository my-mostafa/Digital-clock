let hours = document.querySelector(".hours")
let minit = document.querySelector(".minit")
let second = document.querySelector(".second")

setInterval(function(){
    let time = new Date 
    
///////////////////////////////////////////
    if(time.getHours()<10){
        hours.innerHTML = "0"+time.getHours()
    }else{
        hours.innerHTML = time.getHours()
    }

///////////////////////////////////////////
    if(time.getMinutes()<10){
        minit.innerHTML = "0"+time.getMinutes()
    }else{
        minit.innerHTML = time.getMinutes()
    }

////////////////////////////////////////////
    if(time.getSeconds()<10){
        second.innerHTML = "0"+time.getSeconds()
    }else{
        second.innerHTML = time.getSeconds()
    }

},1000)
