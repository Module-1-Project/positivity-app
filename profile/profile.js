import { fetchQuote, checkAuth } from '../fetch-utils.js';

checkAuth();

window.addEventListener('load', async () => {

    const selectEl = document.querySelector('select');

    const quotesEl = await fetchQuote();

    for (let quote of quotesEl) {

        const option = document.createElement('option');

        option.textContent = quote.quotes;
        option.value = quote.id;
        console.log(quote);
        selectEl.append(option);
    }
});