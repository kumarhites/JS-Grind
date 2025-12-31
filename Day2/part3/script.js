// let count = 0;
// const countEl = document.getElementById('count');
// const incBtn = document.getElementById('inc');
// const decBtn = document.getElementById('dec')
// const resetBtn = document.getElementById('reset');

// if(count === 0){
//     decBtn.disabled = true;
// }

// incBtn.addEventListener('click', () => {
//     count++;
//     countEl.innerText = count;
//     if(count > 0) decBtn.disabled = false;
//     if (count > 0) countEl.style.color = "green";
// })

// decBtn.addEventListener('click', () => {
//     count--;
//     countEl.innerText = count;
//     if(count <= 0){
//         decBtn.disabled = true;
//     }
//     if (count === 0) countEl.style.color = "black";
// })

// resetBtn.addEventListener('click', () => {
//     count = 0;
//     countEl.innerText = count;
//     countEl.style.color = "black";
//     decBtn.disabled = true;
// })

// react like centralized ui updates
let count = 0;
const countEl = document.getElementById("count");
const incBtn = document.getElementById("inc");
const decBtn = document.getElementById("dec");
const resetBtn = document.getElementById("reset");

const render = () => {
  countEl.innerText = count;
  decBtn.disabled = count <= 0;

  if (count > 0) countEl.style.color = "green";
  else if (count < 0) countEl.style.color = "red";
  else countEl.style.color = "black";
};

incBtn.addEventListener('click', () => {
    count++;
    render();
})

decBtn.addEventListener('click', () => {
    count--;
    render();
})

resetBtn.addEventListener('click', () => {
    count = 0;
    render();
})

render();