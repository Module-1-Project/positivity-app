import { checkAuth, logout, fetchQuote, fetchQuoteId, fetchJournal, deleteJournalEntry } from '../fetch-utils.js';

checkAuth();

const quoteCreateButton = document.getElementById('quote-create-button');
const logoutButton = document.getElementById('logout');
const homeButton = document.getElementById('home');
const quoteRender = document.getElementById('quote-div');
const deleteButton = document.getElementById('delete-journal-entry');

logoutButton.addEventListener('click', () => {
    logout();
});

homeButton.addEventListener('click', () => {
    window.location.href = '../index.html';
});

quoteCreateButton.addEventListener('click', () => {
    window.location.href = '/quote-create/';
});

const JournalDisplay = document.getElementById('journal-render');
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
    JournalDisplay.textContent = '';
    const selectedId = selectEl.value;
    const data = await fetchQuoteId(selectedId);
    const aWellness = document.createElement('a');
    aWellness.textContent = data.wellness;
    aWellness.href = `/detail-page/?id=${selectedId}`;
    const aExercise = document.createElement('a');
    aExercise.textContent = data.exercises;
    aExercise.href = `/detail-page/?id=${selectedId}`;
    JournalDisplay.append(aExercise, aWellness);
});

async function loadData() {
    const journals = await fetchJournal();
    quoteRender.textContent = ' ';

    for (let journal of journals) {
        const p1 = document.createElement('p');
        const div = document.createElement('div');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'delete';

        div.classList.add('journal-detail');
        p1.textContent = journal.entry;
        console.log(journal.entry);
        div.append(p1, deleteButton); 
        deleteButton.addEventListener('click', async () => {
            await deleteJournalEntry(journal.id);
            loadData();
        });
        quoteRender.append(div);
    }
}



loadData();