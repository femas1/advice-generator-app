'use strict';

const advice = document.querySelector('.container__advice');
const adviceBtn = document.querySelector('.adviceButton');
const adviceId = document.querySelector('#container__heading__id');

const giveMeAdvice = async function() {
    let slip_id = Math.trunc(Math.random() * 225);
    const res = await fetch(`https://api.adviceslip.com/advice/${slip_id}`);
    const data = await res.json();
    advice.innerText= data.slip.advice;
    adviceId.innerText = data.slip.id;
}

adviceBtn.addEventListener('click', () => giveMeAdvice())