document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');
    // Dummy credentials
    const correctUsername = 'user';
    const correctPassword = 'user';

    if (username === correctUsername && password === correctPassword) {
        // Redirect to the next page if credentials are correct
        window.location.href = 'welcome.html';
    } else {
        messageDiv.textContent = 'Invalid username or password';
    }
});
