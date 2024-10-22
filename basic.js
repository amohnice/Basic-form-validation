document.getElementById('registrationForm').addEventListener('submit', function(event) {
    let valid = true;

    // Clear previous error messages
    document.querySelectorAll('.error').forEach((el) => el.textContent = '');

    // Name validation
    const name = document.getElementById('name').value.trim();
    if (!name) {
        document.getElementById('nameError').textContent = 'Name is required.';
        valid = false;
    }

    // Email validation
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email format.';
        valid = false;
    }

    // Password validation
    const password = document.getElementById('password').value;
    if (password.length < 8) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long.';
        valid = false;
    }

    // Confirm Password validation
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        valid = false;
    }

    // Age validation
    const age = parseInt(document.getElementById('age').value);
    if (isNaN(age) || age < 18 || age > 100) {
        document.getElementById('ageError').textContent = 'Age must be a number between 18 and 100.';
        valid = false;
    }

    // Gender validation
    const genderSelected = document.querySelector('input[name="gender"]:checked');
    if (!genderSelected) {
        document.getElementById('genderError').textContent = 'Please select your gender.';
        valid = false;
    }

    // Country validation
    const country = document.getElementById('country').value;
    if (!country) {
        document.getElementById('countryError').textContent = 'Please select a country.';
        valid = false;
    }

    // Terms validation
    const terms = document.getElementById('terms').checked;
    if (!terms) {
        document.getElementById('termsError').textContent = 'You must agree to the terms and conditions.';
        valid = false;
    }

    // Prevent form submission if not valid
    if (!valid) {
        event.preventDefault();
    }
});

// Add similar validation for the login form if necessary
