import { checkAuth, logout, fetchDetails, fetchQuote } from '../fetch-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});
fetchDetails();
fetchQuote();
// async function onLoad() {
//     const data = await fetchDetails();
    
//     for (let detail of data) {
//         const detail = console.log(fetchDetails);
//     }
// }