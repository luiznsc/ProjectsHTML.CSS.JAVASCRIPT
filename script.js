const sHand = document.querySelector('.hand-second');
const mHand = document.querySelector('.hand-minute');
const hHand = document.querySelector('.hand-hour');

function setDate(){
    const now = new Date();

    const second = now.getSeconds();
    const secondDegree = ((second / 60) * 360) + 90;
    sHand.style.transform = `rotate(${secondDegree}deg)`;

    const mins = now.getMinutes();
    const minDegrees = ((mins / 60) * 360 ) + ((second / 60) * 6) + 90;
    mHand.style.transform = `rotate(${minDegrees}deg)`;

    const hours = now.getHours();
    const hourDegrees = ((hours / 12) * 360 ) + ((mins / 60) * 30) + 90;
    hHand.style.transform = `rotate(${hourDegrees}deg)`;

}
setInterval(setDate,1000);

