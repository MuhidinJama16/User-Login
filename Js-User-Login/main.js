// Event Listener
document.getElementById('button').addEventListener('click', signUp);

// Event function
function signUp() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Test Input Varible and update the page
    if (username == 'gmail@email.com' && password == 'password') {
        document.getElementById('sign-in').innerHTML = 'Sign In Successful';
    }
    else {
        document.getElementById('sign-in').innerHTML = 'Sign In Unsuccessful';
    }
}