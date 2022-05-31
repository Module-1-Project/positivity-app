const SUPABASE_URL = 'https://iwrnysynnjmvnnialdkf.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml3cm55c3lubmptdm5uaWFsZGtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIyMDEyNjQsImV4cCI6MTk2Nzc3NzI2NH0.Y-Ob2V4H0O-qJIKAB-9ZuEWEKc3wZmEqzRyS-7bd8BM';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export function checkAuth() {
    const user = getUser();

    if (!user) location.replace('../');
}

export function redirectIfLoggedIn() {
    if (getUser()) {
        location.replace('/create-page');
    }
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '../');
}

export async function fetchQuote() {
    const response = await client.from('quotes').select('*');
    console.log(response.data);
    return response.data;
}

export async function fetchDetails() {
    const response = await client.from('quote-detail').select('*');
    console.log(response.data);
    return response.data;
}



// function checkError({ data, error }) {
//     return error ? console.error(error) : data;
// }
