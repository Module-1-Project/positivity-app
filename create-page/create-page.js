import { checkAuth, logout, fetchQuote, fetchQuoteId, fetchJournal } from '../fetch-utils.js';
import { renderJournal } from '../render-utils.js';
checkAuth();

const quoteCreateButton = document.getElementById('quote-create-button');
const logoutButton = document.getElementById('logout');

const journalDisplay = document.getElementById('journal-render');

logoutButton.addEventListener('click', () => {
    logout();
});

quoteCreateButton.addEventListener('click', () => {
    window.location.href = '/quote-create/';
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

//display journal entries 
//have the entries listed inside the container in the page
//Entries pulled from supabase to be displayed
//Have option to remover a selected journal entry from the container
//Button will remove row from supabase table
//We will need a button to remove journal entry from display


// window.addEventListener('load', async () => {
//     const journalEl = await fetchJournal();
//     console.log(journalEl);
//     for (let journal of journalEl) {
//         const journalEnt = document.createElement('p');
//         journalEnt.textContent = journalEnt.journal;
//         console.log(journalEnt);
//         journalDisplay.append(journalEnt);
//     }

// });

async function loadData() {
    const journals = await fetchJournal();
    for (let journal of journals) {
        const journalDiv = renderJournal(journal);
        journalDisplay.append(journalDiv);
    }
}

loadData();

//links move you to details page w/ selected option

