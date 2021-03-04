const daysNy = document.getElementById("days");
const hoursNy = document.getElementById("hours");
const minuteNy = document.getElementById("minutes");
const secondsNy = document.getElementById("seconds");

const newYear = "1 Jan 2022";

function countDown(){
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600 ) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysNy.innerHTML = days;
    hoursNy.innerHTML = formatTime(hours);
    minuteNy.innerHTML = formatTime(minutes);
    secondsNy.innerHTML = formatTime(seconds);
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

countDown();


setInterval(countDown, 1000);