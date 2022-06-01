import { fetchQuote, randomQuote } from './fetch-utils.js';
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


// async function onLoad() {
//     const quoteRender = document.getElementById('quote-render');
//     const quoteEl = await fetchQuote();
//     console.log(quoteEl);
    
//     for (let quotes of quoteEl) {
//         const p = document.createElement('p');
//         p.value = quotes.id;
//         p.textContent = quotes.quote;
//         quoteRender.append(p);
//     }
// }

// onLoad();
quote();
async function quote() {
    const quoteRender = document.getElementById('quote-render');
    const randomNum = Math.floor(Math.random() * 4); // Update Number with Number of Existing Quotes
    const quoteEl = await randomQuote(randomNum);
    console.log(quoteEl);

    const h3 = document.createElement('h3');
    h3.textContent = quoteEl.quote;
    console.log(h3);
    
    const p = document.createElement('p');
    p.textContent = `- ${quoteEl.author}`;

    quoteRender.append(h3, p);
}
