const clock = document.querySelector("h2#clock");



function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

// Interval is what should happen every time(second minute hour)
// setInterval(<Function>, <Time as ms>);
// Timeout is what should happen once after assigned time
// setTimeout(<Function>, <Time as ms>);
// new Date(); means the date and the time right this code called.
// Date.getDate() === today's date
// Date.getDay() === today's weekday (0 === sunday / 6 === saturday)
// Date.getFullYear() === today's year for 4 digits ex)2021
// Date.getHours() === the hour of now less than 24
// Date.getMinutes() === the minutes of now
// Date.getSeconds() === the seconds of now
// padStart(<maxLength>, <StringWillBeFilled>);
// padEnd(<maxLength>, <StringWillBeFilled>);
// if the String's length is less than <maxLength>, fill the String
// <StringWillBeFilled> Start or the End.