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

selectEl.addEventListener('change', async () => {
    quoteAnchor.textContent = '';
    const selectedId = selectEl.value;
    const data = await fetchQuoteId(selectedId);
    const aWellness = document.createElement('a');
    aWellness.textContent = data.wellness;
    aWellness.href = `/detail-page/?id=${selectedId}`;
    const aExercise = document.createElement('a');
    aExercise.textContent = data.exercises;
    aExercise.href = `/detail-page/?id=${selectedId}`;
    quoteAnchor.append(aExercise, aWellness);
});
// display element with options from database
// when list option has been chosen,
// determine which option has been chosen from the select value
// call supabase get quote data from supabase
// data from supabase updates wellness/exercise on page
// wellness / exercise is a link that uses ID of quote selected
//links move you to details page w/ selected option