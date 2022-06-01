import { checkAuth, logout, fetchQuote, fetchQuoteId } from '../fetch-utils.js';
// import { renderQuote } from '../render-utils.js';
// import { renderOption } from '../render-utils.js';

checkAuth();

// const quoteContainer = document.getElementById('quote-container');
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

// selectEl.addEventListener('change', async (quote) => {
//     const data = await fetchQuoteId(selectEl.value);
//     console.log(data);
//     quoteAnchor.textContent = data.exercises;
//     const exercises = document.createElement('a');
//     exercises.href = `/detail-page/?id=${quote.id}`;
//     exercises.textContent = data.wellness;
//     quoteAnchor.append(exercises);
//     console.log(quote.id);
// });

async function renderAnchor() {
    const anchor = await fetchQuote();
    for (let anchors of anchor) {
        selectEl.addEventListener('change', async (quote) => {
            const data = await fetchQuoteId(selectEl.value);
            console.log(data);
            quoteAnchor.textContent = anchors.exercises;
            quoteAnchor.append(exercises);
            console.log(quote.id);
        });
        
        const exercises = document.createElement('a');
        exercises.href = `/detail-page/?id=${anchors.id}`;
        exercises.textContent = anchors.wellness;
    }
}
renderAnchor();