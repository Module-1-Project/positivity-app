import { logout, redirectIfLoggedIn, signInUser, signupUser } from '../fetch-utils.js';

const signInForm = document.getElementById('sign-in');
const signInEmail = document.getElementById('sign-in-email');
const signInPassword = document.getElementById('sign-in-password');

const signUpForm = document.getElementById('sign-up');
const signUpEmail = document.getElementById('sign-up-email');
const signUpPassword = document.getElementById('sign-up-password');

const homeButton = document.getElementById('home-button');
const logOutButton = document.getElementById('logout-button');
// if user currently logged in, redirect
redirectIfLoggedIn();


homeButton.addEventListener('click', () => {
    window.location.href = '../index.html';
});

logOutButton.addEventListener('click', () => {
    logout();
});

signUpForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const user = await signupUser(signUpEmail.value, signUpPassword.value);
    if (user) {
        redirectIfLoggedIn();
    } else {
        console.error(user);
    }
});

signInForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const user = await signInUser(signInEmail.value, signInPassword.value);
    if (user) {
        redirectIfLoggedIn();
    } else {
        console.error(user);
    }
});