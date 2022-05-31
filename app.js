const signInSignUp = document.getElementById('auth');
const goToProfile = document.getElementById('go-to-profile');
const aboutCreators = document.getElementById('about-button');

aboutCreators.addEventListener('click', () => {
    window.location.href = './creators-page';
});

signInSignUp.addEventListener('click', () => {
    window.location.href = './login-page';
});