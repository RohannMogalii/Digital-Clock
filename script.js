setInterval(showTime,1000);
function showTime() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    am_pm = "AM";


    if (hour >= 12) {
        if (hour > 12)
        hour -= 12;
        am_pm = "PM";
    } else if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }
 
    hour =hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = hour + ":" + min + ":" + sec+" "+am_pm;
    document.getElementById("clock").innerHTML = currentTime;
}
showTime();

