const clock = document.getElementById('clock');
// or const clock = document.querySelector('#clock');


//work function some interval of time
setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
// console.log(date.toLocaleTimeString());
},1000);  
