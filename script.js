document.addEventListener('DOMContentLoaded', function(){
    const cars = ['0.jpg','1.jpg','2.jpg','3.jpg',
    '4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg'];

    const container = document.querySelector('.container');

    const div = document.createElement('div');

    div.classList.add('card');

    for(let i = 0; i < cars.length; i++){
        const img = document.createElement('img');
        img.src = `./img/${i}.jpg`;
        img.alt = 'cars';

        div.appendChild(img);
    }

    container.appendChild(div);
})