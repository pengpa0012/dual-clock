
//function for digital clock

function digitalClock(){
    const hourTime = document.querySelector('.digital-hour');
    const minuteTime = document.querySelector('.digital-minute');
    const secondTime = document.querySelector('.digital-second')

    let dateNow = new Date();
    let hour = dateNow.getHours() % 12;
    let minute = dateNow.getMinutes();
    let second = dateNow.getSeconds();

    hourTime.textContent = `${padding(hour)}`;
    minuteTime.textContent = `${padding(minute)}`;
    secondTime.textContent = `${padding(second)}`;
}
setInterval(digitalClock, 1000);


function padding(n){
    return n.toString().padStart(2, '0');
}

//function for hand clock 

function handClock(){
    let dateNow = new Date();
    let second = dateNow.getSeconds();
    let minute = dateNow.getMinutes();
    let hour = dateNow.getHours();

    let secondDegrees = ((second / 60) * 360 + 270);
    let minuteDegrees = ((minute / 60) * 360 + 270);
    let hourDegrees = ((hour / 12) * 360 + 270);

    const clockSecond = document.querySelector('.clock-second');
    const clockMinute = document.querySelector('.clock-minute');
    const clockHour = document.querySelector('.clock-hour');

    clockSecond.style.transform = `rotate(${secondDegrees}deg)`;
    clockMinute.style.transform = `rotate(${minuteDegrees}deg)`;
    clockHour.style.transform = `rotate(${hourDegrees}deg)`;
}
setInterval(handClock, 1000);

//swith button
function switchClock(){
    const switchBtn = document.querySelector('.switch button');
    const clockCover = document.querySelector('.clock-cover');

    switchBtn.addEventListener('click', ()=>{
        clockCover.classList.toggle('switch-toggle');
    });
}

switchClock();
