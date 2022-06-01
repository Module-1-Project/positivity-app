export function renderQuote(quote) {
    const div = document.createElement('div');
    div.classList.add('quote-list');
    const h2 = document.createElement('h2');
    h2.textContent = quote.quote;
    div.append(h2);
    return div;
}


    

