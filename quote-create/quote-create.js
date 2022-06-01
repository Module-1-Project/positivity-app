const homeButton = document.getElementById('home');
const logOutButton = document.getElementById('logout');
const submitButton = document.getElementById('journal-submit');
const burnButton = document.getElementById('burn-button');
const grabButton = document.getElementById('grab-quote');
const aboutButton = document.getElementById('about-button');

homeButton.addEventListener('click', () => {
    window.location.href = '../index.html';
});

console.log('This button is working');