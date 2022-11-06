'use strict';

const advice = document.querySelector('.container__advice');
const adviceBtn = document.querySelector('.adviceButton');
const slip_id = Math.trunc(Math.random() * 225);

const giveMeAdvice = async function() {
    const res = await fetch(`https://api.adviceslip.com/advice/${slip_id}`);
    const data = await res.json();
    advice.innerText= data.slip.advice;
}

adviceBtn.addEventListener('click', () => giveMeAdvice())
