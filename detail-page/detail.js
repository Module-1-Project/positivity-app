import { fetchQuote, fetchDetails, logout, getQuoteById } from '../fetch-utils.js';
import { renderQuote } from '../render-utils.js';

const logoutButton = document.getElementById('logout-button');

logoutButton.addEventListener('click', () => {
    logout();
});


// async function displayQuote(id) {
//     const quote = await fetchQuote(id);





async function loadData() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const quote = await getQuoteById(id);
    const quoteEl = document.createElement('div');
    renderQuote(quote);
    quoteEl.append(quote);
}
loadData();
console.log(loadData);