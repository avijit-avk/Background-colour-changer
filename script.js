const body_background=document.querySelector('body');
body_background.style.backgroundColor='white';


const red_background=document.querySelector('#red');
const green_background=document.querySelector('#green');
const blue_background=document.querySelector('#blue');
const random_background=document.querySelector('#random');

const red=document.querySelector('#red');
const green=document.querySelector('#green');
const blue=document.querySelector('#blue');

red.addEventListener('click',function(){
    body_background.style.backgroundColor='red';
    red_background.style.backgroundColor='white';
    red_background.style.color='red';
})
green.addEventListener('click',function(){
    body_background.style.backgroundColor='green';
    green_background.style.backgroundColor='white';
    green_background.style.color='green';
})
blue.addEventListener('click',function(){
    body_background.style.backgroundColor='blue';
    blue_background.style.backgroundColor='white';
    blue_background.style.color='blue';
})
random_background.addEventListener('click', function(){
    let r = getRandomNumber();
    let g = getRandomNumber();
    let b = getRandomNumber();
    
    body_background.style.backgroundColor = random.style.color = `rgb(${r},${g},${b})`;
});

function getRandomNumber(){
    return Math.floor(Math.random() * 256);
}