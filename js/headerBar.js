const headerBar = document.querySelector('header');
let prevScrollpos = window.scrollY;
let currentScrollPos;
window.addEventListener('scroll', event => {
    event.preventDefault();
    currentScrollPos = window.scrollY;
    prevScrollpos <= currentScrollPos ? headerBar.classList.add('hidden') : headerBar.classList.remove('hidden');
    prevScrollpos = currentScrollPos;
});
