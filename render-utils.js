export function renderQuote(quote) {
    const div = document.createElement('div');
    div.classList.add('quote-list');
    const h2 = document.createElement('h2');
    h2.textContent = quote.quote;
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    p1.textContent = quote.exercises_details;
    p2.textContent = quote.wellness_details;
    div.append(h2, p1, p2);
    return div;
}


    

// adjust render quote to include remaining columns. and add columns