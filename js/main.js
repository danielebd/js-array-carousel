'use strict';

/* 
<div class="item show"><img src="img/01.webp" alt=""></div>
<div class="item"><img src="img/02.webp" alt=""></div>
<div class="item"><img src="img/03.webp" alt=""></div>
<div class="item"><img src="img/04.webp" alt=""></div>
<div class="item"><img src="img/05.webp" alt=""></div> 
*/

const img = ['01webp', '02webp', '03webp', '04webp', '05webp',];

let itemContent = '';

const slider = document.querySelector('.slider');

for(let i = 0; i < img.length; i++){
    console.log(img[i]);
    itemContent += '<div class="item"><img src="img/01.webp" alt=""></div>';
    
}


slider.innerHTML = slider.innerHTML + itemContent;
document.querySelector('.item').classList.add('show');