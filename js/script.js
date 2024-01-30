const menuButton = document.querySelector('.menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const closeButton = document.querySelector('.mobile-menu .close-button');

menuButton.addEventListener('click', function(){
    mobileMenu.classList.add('active');
});

closeButton.addEventListener('click', function(){
    mobileMenu.classList.remove('active');
});