const hrs = document.querySelector("#hour");
const mins = document.querySelector("#minute");
const secs = document.querySelector("#seconds");
const day = document.querySelector("#day");
 
let monthName = ["January","February","March","April","May","June","July","August","September","November","December"];

setInterval(()=>{
let today = new Date();
let d = today.getDate()
let m = today.getMonth()
let y = today.getFullYear()
let h = today.getHours()
let min = today.getMinutes()
let sec= today.getSeconds()

day.innerHTML = `${d} ${monthName[m]} ${y}`;
     
    hrs.textContent = h;    
    mins.innerText = min;   
    secs.innerText = sec;  


    let count = 12;
     
    if (h > 12) {
        hrs.innerText = h - count;  
    } else if (h === 0) {
        hrs.innerText = 12; 
    } else {
        hrs.innerText = h;
    }
    
    if(day.getHours()>24 && day.getHous()<12){
        doucument.getElementById("duration").innerText = "am"
    }
    else{
         doucument.getElementById("duration").innerText = "pm"
    }
},1000);

