const menuButton = document.querySelector('.menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const closeButton = document.querySelector('.mobile-menu .close-button');

menuButton.addEventListener('click', function(){
    mobileMenu.classList.add('active');
});

closeButton.addEventListener('click', function(){
    mobileMenu.classList.remove('active');
});


const projectButtons = document.querySelectorAll('.project-button');
const projectCards = document.querySelectorAll('.project-card');
projectButtons[0].classList.add('active');
let firstButtonId = projectButtons[0].getAttribute('data-id');
let firstGroupCards = document.querySelectorAll(`.project-card[data-group-id="${firstButtonId}"]`);

for(let i = 0; i < firstGroupCards.length; i++){
    firstGroupCards[i].classList.remove('d-none');
}


projectButtons.forEach((btn) => {
    btn.addEventListener('click', function(){
        const id = btn.getAttribute('data-id');
        const cards = document.querySelectorAll(`.project-card[data-group-id="${id}"]`);
        for(let i = 0; i < projectButtons.length; i++){
            projectButtons[i].classList.remove('active');
        }
        for(let i = 0; i < projectCards.length; i++){
            projectCards[i].classList.add('d-none');
        }
        for(let i = 0; i < cards.length; i++){
            cards[i].classList.remove('d-none');
        }
        btn.classList.add('active');
    });
})