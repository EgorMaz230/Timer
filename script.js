// let counter = document.querySelector('.counter');
// let number = 0;
// // setInterval(counter++)

// setInterval(function(){
//     number++
//     counter.innerHTML = number;
// }, 1000)


// let counter = document.querySelector('.counter');
// let number = 10;
// setInterval(counter++)

// setInterval(function(){
//         number--
//         counter.innerHTML = number;
//     }, 1000)
//     if(number == 5){
//        console.log("xhchjgjxgh")
//     }

// let count = 10; 
// let timer = setInterval(function() {
//     document.body.style.backgroundColor = count <= 5 ? 'red' : 'white'; 
//     if(count <= 0) {
//         clearInterval(timer); 
//     } else {
//         console.log(count); 
//         count -= 0.001; 
//     }
// }, 1); 

// function clockTimer(){
//     clockMy = document.querySelector('.clock')
//     let timeCurrent = new Date()
//     let seconds = Math.floor(timeCurrent / 1000) % 60
//     let minutes = Math.floor(timeCurrent / 60000) % 60
//     let hours = Math.floor(timeCurrent / 3600000 ) % 24

//     if(seconds < 10){
//         seconds = '0' + seconds
//     }
//     if(minutes < 10){
//         minutes = '0' + minutes
//     }
//     if(hours < 10){
//         hours = '0' + hours
//     }
//     let timeTrue = ` ${hours} : ${minutes} : ${seconds} `
//     clockMy.textContent = timeTrue
//     setTimeout(clockTimer , 1000)

// }

// window.onload = function(){
//     clockTimer()
// }


let myClock;
let isPaused = false;

const submitTrigger = document.querySelector('.submit').addEventListener('click', startTimer);
const stopButton = document.querySelector('.stop').addEventListener('click', stopTimer);
const pauseButton = document.querySelector('.pause').addEventListener('click', pauseTimer);
const resumeButton = document.querySelector('.resume').addEventListener('click', resumeTimer);

function startTimer() {
    let hour = parseInt(document.querySelector('.hour').value);
    let minutes = parseInt(document.querySelector('.minutes').value);
    let seconds = parseInt(document.querySelector('.seconds').value);

    const formatTime = (time) => time < 10 ? `0${time}` : time;

    const clockElement = document.querySelector('.clock');
    if (hour*3600 + minutes*60 + seconds <= 0) {
        alert('no');
        return;
    }


    clockElement.innerHTML = `${formatTime(hour)} : ${formatTime(minutes)} : ${formatTime(seconds)} : 00`;

    let milliseconds = 1000;

    myClock = setInterval(() => {
        if (!isPaused) {
            milliseconds -= 10;
            if (milliseconds <= 0) {
                milliseconds = 999;
                if (seconds > 0) {
                    seconds--;
                } else if (minutes > 0) {
                    minutes--;
                    seconds = 59;
                } else if (hour > 0) {
                    hour--;
                    minutes = 59;
                    seconds = 59;
                }
            }

            if (hour === 0 && minutes === 0 && seconds === 0) {
                clearInterval(myClock);
                alert('Кінець');
            }

            clockElement.innerHTML = `${formatTime(hour)} : ${formatTime(minutes)} : ${formatTime(seconds)} : ${formatTime(Math.floor(milliseconds / 10))}`;
        }
    }, 10);
}

function stopTimer() {
    clearInterval(myClock);
    const clockElement = document.querySelector('.clock');
    clockElement.innerHTML = '00 : 00 : 00 : 00';
}

function pauseTimer() {
    isPaused = true;
}

function resumeTimer() {
    isPaused = false;
}