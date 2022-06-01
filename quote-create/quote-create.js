import { logout, randomQuote } from '../fetch-utils.js';

const homeButton = document.getElementById('home');
const logOutButton = document.getElementById('logout');
const submitButton = document.getElementById('journal-submit');
const burnButton = document.getElementById('burn-button');
const grabButton = document.getElementById('grab-quote');
const aboutButton = document.getElementById('about-button');

homeButton.addEventListener('click', () => {
    window.location.href = '../index.html';
});

logOutButton.addEventListener('click', () => {
    logout();
});

submitButton.addEventListener('click', () => {

});

burnButton.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('burn-text').value = ' ';
    const counter = document.getElementById('counter');
    counter.textContent++;
});

grabButton.addEventListener('click', () => {
    window.location.href = ' ';// See Sean and David's Branch
});

aboutButton.addEventListener('click', () => {
    window.location.href = '../creators-page/index.html';
});

