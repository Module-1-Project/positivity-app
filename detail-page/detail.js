import { fetchQuoteId } from '../fetch-utils.js';
import { renderQuote } from '../render-utils.js';

const logoutButton = document.getElementById('logout-button');
const displayEl = document.getElementById('display');

logoutButton.addEventListener('click', () => {
    window.location.href = '../create-page';
});


async function loadData() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const quote = await fetchQuoteId(id);
    const quoteEl = renderQuote(quote);
    displayEl.append(quoteEl);
    displayEl.classList.add('detail-display');
}
loadData();

