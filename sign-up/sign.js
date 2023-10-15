function validate() {
    // Get form input values
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const pno = document.getElementById('pno').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('pass').value;

    // Validation logic (you can customize this to your needs)
    const agePattern = /^\d+$/;
    const phonePattern = /^\d{10}$/;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    // Check if any of the fields are empty
    if (!name || !age || !pno || !email || !username || !password) {
        alert('All fields are required.');
        return;
    }

    // Validate age
    if (!agePattern.test(age)) {
        document.getElementById('age-error').textContent = 'Invalid age';
        return;
    } else {
        document.getElementById('age-error').textContent = '';
    }

    // Validate phone number
    if (!phonePattern.test(pno)) {
        document.getElementById('phone-error').textContent = 'Invalid phone number';
        return;
    } else {
        document.getElementById('phone-error').textContent = '';
    }

    // Validate email
    if (!emailPattern.test(email)) {
        document.getElementById('email-error').textContent = 'Invalid email';
        return;
    } else {
        document.getElementById('email-error').textContent = '';
    }

    // Validate password
    if (!passwordPattern.test(password)) {
        document.getElementById('password-error').textContent = 'Password must be at least 8 characters long and include letters and numbers';
        return;
    } else {
        document.getElementById('password-error').textContent = '';
    }

    // If all validations pass, open the desired webpage
    window.location.href = 'http://127.0.0.1:5500/Projects/Forum/all%20posts/allposts.html'; // Replace with your desired URL
}
