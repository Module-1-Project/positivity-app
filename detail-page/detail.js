import { logout, getQuoteById, fetchQuote } from '../fetch-utils.js';
import { renderQuote } from '../render-utils.js';

const logoutButton = document.getElementById('logout-button');
const displayEl = document.getElementById('display');

logoutButton.addEventListener('click', () => {
    logout();
});


async function loadData() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const quote = await getQuoteById(id);
    const quoteEl = document.createElement('div');
    quoteEl.classList.add('quote-div');
    renderQuote(quote);
    quoteEl.append(quote);
    
    const grabQuote = await fetchQuote();
    for (let quotes of grabQuote) {
        quoteEl.textContent = quotes.exercises_detail;
        const exercises = document.createElement('p');
        quoteEl.append(exercises);
        displayEl.append(quoteEl);
        
    }
}
loadData();

