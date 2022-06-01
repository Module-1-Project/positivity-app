import { logout, randomQuote } from '../fetch-utils.js';

const homeButton = document.getElementById('home');
const logOutButton = document.getElementById('logout');
const submitButton = document.getElementById('journal-submit');
const burnButton = document.getElementById('burn-button');
const grabButton = document.getElementById('grab-quote');
const aboutButton = document.getElementById('about-button');

quote();
async function quote() {
    const renderQuote = document.getElementById('render-quote');
    const randomNum = Math.floor(Math.random() * 4); // Current Number of Quotes
    const quoteEl = await randomQuote(randomNum);
    console.log(quoteEl);

    const h5 = document.createElement('h5');
    h5.textContent = quoteEl.quote;

    const p = document.createElement('p');
    p.textContent = `- ${quoteEl.author}`;

    renderQuote.append(h5, p);
}

homeButton.addEventListener('click', () => {
    window.location.href = '../index.html';
});

logOutButton.addEventListener('click', () => {
    logout();
});

submitButton.addEventListener('click', () => { // Submits Journal Entry to Supabase, goes to quotes table, not quotes detail 

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

