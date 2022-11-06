'use strict';

const giveMeAdvice = async function() {
    const res = await fetch(`https://api.adviceslip.com/advice`);
    const data = await res.json();
    console.log(data);
}

giveMeAdvice();