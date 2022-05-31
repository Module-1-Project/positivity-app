import { checkAuth, logout, fetchQuote } from '../fetch-utils.js';
// import { renderOption } from '../render-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

// async function onLoad(e) {
//     e.preventDefault();
//     const selectEl = document.querySelector('select');
//     const quoteEl = await fetchQuote();

//     for (let quote of quoteEl) {
//         const quoteOption = renderOption();
//         selectEl.append(quoteOption);
//     }
// }

// onLoad();

window.addEventListener('load', async () => {
    const selectEl = document.querySelector('select');

    const quoteEl = await fetchQuote();
    
    for (let quotes of quoteEl) {
        const option = document.createElement('option');
        option.value = quotes.id;
        option.textContent = quotes.quote;
        selectEl.append(option);
    }
});