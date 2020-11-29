const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();

    let second = date.getSeconds()*6;
    let minute = date.getMinutes()*6 + (second/60);
    let hour = date.getHours()*30 + (second/3600) + (minute/60);

function clockRun(){
    hour += (30/3600);
    minute += (6/60);
    second += 6;

    HOURHAND.style.transform = "rotate(" +hour + "deg)"
    MINUTEHAND.style.transform = "rotate(" +minute+ "deg)"
    SECONDHAND.style.transform = "rotate(" +second + "deg)"
}

var interval = setInterval( clockRun, 1000);




