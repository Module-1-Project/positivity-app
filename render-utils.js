// import { fetchQuote } from './fetch-utils.js';

// const quoteContainer = document.getElementById('quote-container');

export function renderQuote(quotes) {
    // const quote = await fetchQuote();
    
    const div = document.createElement('div');
    div.classList.add('quote-list');

    const exercisesEl = document.createElement('h2');
    exercisesEl.textContent = quotes.exercises;
    const wellnessEl = document.createElement('h2');
    wellnessEl.textContent = quotes.wellness;



    div.append(exercisesEl, wellnessEl);
    // quoteContainer.append(div);
    return div;
}

// export function renderOption(quote) {
//     const option = document.createElement('option');
//     option.value = quote.quote;
//     option.textContent = quote.author;
//     return option;
// }
