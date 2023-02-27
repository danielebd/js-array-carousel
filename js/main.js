'use strict';

const imgs = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp',];

let itemContent = '';
let active = 0;

const slider = document.querySelector('.slider');

for(let i = 0; i < imgs.length; i++){
    console.log(imgs[i]);
    itemContent += `<div class="item"><img src="img/${imgs[i]}" alt=""></div>`;
}


slider.innerHTML = slider.innerHTML + itemContent;
document.querySelector('.item').classList.add('show');

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const items = document.querySelectorAll('.item');
console.log(items);
console.log(items.length);

next.addEventListener('click', function() {
    if(active < items.length -1){
        items[active].classList.remove('show');
        active++;
        items[active].classList.add('show');
    }
    else if(active === items.length -1){
        items[active].classList.remove('show');
        active = 0;
        items[active].classList.add('show');  
    }

})

prev.addEventListener('click', function() {
    if(active > 0){
        items[active].classList.remove('show');
        active--;
        items[active].classList.add('show');
    }
    else if(active === 0){
        items[active].classList.remove('show');
        active = items.length - 1;
        items[active].classList.add('show');  
    }

})