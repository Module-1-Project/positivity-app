import { fetchQuote } from './fetch-utils.js';
import { renderQuote } from './render-utils.js';

const signInSignUp = document.getElementById('auth');
// const goToProfile = document.getElementById('go-to-profile');
const aboutCreators = document.getElementById('about-button');

aboutCreators.addEventListener('click', () => {
    window.location.href = './creators-page';
});

signInSignUp.addEventListener('click', () => {
    window.location.href = './login-page';
});


async function onLoad() {
    const quoteRender = document.getElementById('quote-render');
    const quoteEl = await fetchQuote();
    console.log(quoteEl);
    
    for (let quotes of quoteEl) {
        const p = document.createElement('p');
        p.value = quotes.id;
        p.textContent = quotes.quote;
        quoteRender.append(p);
    }
}

onLoad();

