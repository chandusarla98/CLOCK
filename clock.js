
setInterval(setClock,1000);                                  // set the time to 1 sec

const hour = document.getElementById("data-hour");
const minutes = document.getElementById("data-minutes");
const second = document.getElementById("data-seconds");

function setClock(){
    const currentDate = new Date()                               //currentDate - set the current time 
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;

    const hourRatio = (minutesRatio + currentDate.getHours()) / 12

    setRotation(second , secondsRatio)
    setRotation(minutes, minutesRatio)                 //setRotation : rotate the each and every Second
    setRotation(hour, hourRatio)
}

function setRotation(ele , rotationRatio) {                        // to roatate every element of of the clock
    ele.style.setProperty('--rotation', rotationRatio * 360);      //set a new property an existing css property
}

setClock()