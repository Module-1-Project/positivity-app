const signInSignUp = document.getElementById('sign-in/sign-up');
const goToProfile = document.getElementById('go-to-profile');
const aboutCreators = document.getElementById('about-button');

aboutCreators.addEventListener('click', () => {
    window.location.href = ('./creators-page');
});