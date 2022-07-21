const second_hand = document.querySelector('.second-hand');
const min_hand = document.querySelector('.min-hand');
const hour_hand = document.querySelector('.hour-hand');


function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondDegrees= ((seconds/ 60)* 360) + 90; 

    const minutes= now.getMinutes();
    const minuteDegrees = ((minutes/60) * 360) + 90;

    const hours= now.getHours();
    const hourDegrees = ((hours/12) * 360) + 90;

    second_hand.style.transform = `rotate(${secondDegrees}deg)`;
    min_hand.style.transform = `rotate(${minuteDegrees}deg)`;
    hour_hand.style.transform = `rotate(${hourDegrees}deg)`;

}

setInterval(setDate, 1000);