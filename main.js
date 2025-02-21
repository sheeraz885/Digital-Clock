const hrs = document.querySelector("#hour");
const mins = document.querySelector("#minute");
const secs = document.querySelector("#seconds");
const ampm = document.querySelector("#ampm");
const day = document.querySelector("#day");

let monthName = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

setInterval(() => {
    let today = new Date();
    let d = today.getDate();
    let m = today.getMonth();
    let y = today.getFullYear();
    let h = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    day.innerHTML = `${d} ${monthName[m]} ${y}`;

    // Determine AM or PM
    let am_pm = h < 12 ? "AM" : "PM";

    // Convert 24-hour time to 12-hour format
    h = h % 12 || 12;

    hrs.textContent = h.toString().padStart(2, "0");
    mins.textContent = min.toString().padStart(2, "0");
    secs.textContent = sec.toString().padStart(2, "0");
    ampm.textContent = am_pm;
}, 1000);
