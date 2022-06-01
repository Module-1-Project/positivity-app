import { checkAuth, logout, fetchQuote, fetchQuoteId } from '../fetch-utils.js';

checkAuth();


const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

const quoteAnchor = document.getElementById('quote-div');
const selectEl = document.querySelector('select');

window.addEventListener('load', async () => {

    const quoteEl = await fetchQuote();
    console.log(quoteEl);
    for (let quotes of quoteEl) {
        const option = document.createElement('option');
        option.value = quotes.id;
        option.textContent = quotes.quote;
        selectEl.append(option);
    }
});


async function renderAnchor() {
    const anchor = await fetchQuote();
    for (let anchors of anchor) {
        selectEl.addEventListener('change', async () => {
            // const data = await fetchQuoteId(selectEl.value);
        
            quoteAnchor.textContent = anchors.exercises;
            quoteAnchor.append(exercises);
            
        });
        
        const exercises = document.createElement('a');
        exercises.href = `/detail-page/?id=${anchors.id}`;
        exercises.textContent = anchors.wellness;
    }
}
renderAnchor();