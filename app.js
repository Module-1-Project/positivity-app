import { fetchQuoteId, getUser, fetchQuote } from './fetch-utils.js';

const signInSignUp = document.getElementById('auth');
const goToProfile = document.getElementById('go-to-profile');
const aboutCreators = document.getElementById('about-button');

aboutCreators.addEventListener('click', () => {
    window.location.href = './creators-page';
});

signInSignUp.addEventListener('click', () => {
    window.location.href = './login-page';
});

goToProfile.addEventListener('click', () => {
    if (getUser()) {
        location.replace('/create-page');
    } else {
        window.location.href = './login-page';
    }
});

quote();

async function quote() {
    const grabQuote = await fetchQuote();
    const quoteRender = document.getElementById('quote-render');
    const randomNum = Math.ceil(Math.random() * grabQuote.length); // Update Number with Number of Existing Quotes
    const quoteEl = await fetchQuoteId(randomNum);
    console.log(quoteEl);

    const h3 = document.createElement('h3');
    h3.textContent = quoteEl.quote;
    console.log(h3);
    
    const p = document.createElement('p');
    p.textContent = `- ${quoteEl.author}`;

    quoteRender.append(h3, p);
}