'use strict';

// const giveMeAdvice = async function() {
//     const res = await fetch(`https://api.adviceslip.com/advice/${slip_id}`);
//     const data = await res.json();
//     console.log(data);
// }

const slip_id = Math.trunc(Math.random() * 1000);
console.log(slip_id);
// giveMeAdvice();