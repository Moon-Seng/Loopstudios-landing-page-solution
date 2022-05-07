let navbar = document.querySelector('.nav-items');
let open = document.querySelector('.open-btn');
let close = document.querySelector('.close-btn');

open.addEventListener('click' , function(){
    navbar.classList.remove('hidden');
    open.classList.add('hidden');
    close.classList.remove('hidden')
})

close.addEventListener('click' , function(){
    navbar.classList.add('hidden');
    open.classList.remove('hidden');
    close.classList.add('hidden')
})