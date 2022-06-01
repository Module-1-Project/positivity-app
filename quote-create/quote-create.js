import { logout } from '../fetch-utils.js';

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

burnButton.addEventListener('click', () => {
    const burnText = document.getElementById('burn-text');
    burnText.textContent = '';
    const counter = document.getElementById('counter');
    for (let i = 0; i < counter; i++) {
        const div = (i);

    }
}); // Finish for later

grabButton.addEventListener('click', () => {

});

aboutButton.addEventListener('click', () => {
    window.location.href = '../creators-page/index.html';
});

