const hamburgerButton = document.querySelector('.hamburger');
const navbarMenu = document.querySelector('.menu');
const loginLanguage = document.querySelector('.login-language');
hamburgerButton.addEventListener('click', function() {
    navbarMenu.classList.toggle('active');
    loginLanguage.classList.toggle('active');
})