/* toggle menu */
let navbar = document.querySelector('.navbar');
let menu = document.querySelector('#menu-btn');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
}

/* toggle dropdown menu */
let sports = document.querySelector('#sports');
let dropdown = document.querySelector('.dropdown-content');
let font = document.querySelector('#i-font');

sports.onclick = () => {
    font.classList.toggle('fa-angle-up');
    dropdown.classList.toggle('active');
}

let tab = document.querySelector('#tab-menu');
let drop = document.querySelector('.drop-content');
let i = document.querySelector('#m-font');

tab.onclick = () => {
    i.classList.toggle('fa-angle-up');
    drop.classList.toggle('active');
}

/* search button */
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}