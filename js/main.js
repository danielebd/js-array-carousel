'use strict';

const imgs = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp',];
const slider = document.querySelector('.slider');
const sideBar = document.querySelector('.sidebar');

let itemContent = '';
let itemContentMini = '';

for(let i = 0; i < imgs.length; i++){
    itemContent += `<div class="item"><img src="img/${imgs[i]}" alt=""></div>`;
    itemContentMini += `<div class="item-side"><img src="img/${imgs[i]}" alt=""></div>`;
    //console.log(itemContentMini)
}

sideBar.innerHTML = sideBar.innerHTML + itemContentMini;
slider.innerHTML = slider.innerHTML + itemContent;
//console.log(sideBar.innerHTML)


const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let active = 0;

const items = document.querySelectorAll('.item');
items[active].classList.add('show');

const itemsMini = document.querySelectorAll('.item-side');
itemsMini[active].classList.add('solid');



next.addEventListener('click', function() {
    if(active < items.length -1){
        items[active].classList.remove('show');
        itemsMini[active].classList.remove('solid');

        active++;

        items[active].classList.add('show');
        itemsMini[active].classList.add('solid');



    }
    else if(active === items.length -1){
        items[active].classList.remove('show');
        itemsMini[active].classList.remove('solid');

        active = 0;

        items[active].classList.add('show');  
        itemsMini[active].classList.add('solid');  
    }

})

prev.addEventListener('click', function() {
    if(active > 0){
        items[active].classList.remove('show');
        itemsMini[active].classList.remove('solid');

        active--;

        items[active].classList.add('show');
        itemsMini[active].classList.add('solid');

    }
    else if(active === 0){
        items[active].classList.remove('show');
        itemsMini[active].classList.remove('solid');

        active = items.length - 1;

        items[active].classList.add('show');  
        itemsMini[active].classList.add('solid');  
    }

})