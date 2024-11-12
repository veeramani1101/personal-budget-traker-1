async function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        document.getElementById('auth').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
    } else {
        alert('Login failed');
    }
}

function logout() {
    localStorage.removeItem('token');
    document.getElementById('auth').style.display = 'block';
    document.getElementById('dashboard').style.display = 'none';
}
