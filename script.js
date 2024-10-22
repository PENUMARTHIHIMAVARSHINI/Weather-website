const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

document.addEventListener('DOMContentLoaded', () => {
    const signUpBtn = document.getElementById('signUpBtn');
    const signInBtn = document.getElementById('signInBtn');

    signUpBtn.addEventListener('click', () => {
        const nameInput = document.querySelector('.sign-up input[placeholder="Name"]');
        const emailInput = document.querySelector('.sign-up input[placeholder="Email"]');
        const passwordInput = document.querySelector('.sign-up input[placeholder="Password"]');
        
        const invalidField = validateInput(nameInput, 'name') || validateInput(emailInput, 'email') || validateInput(passwordInput, 'password');

        if (!invalidField) {
            showPopup('Sign Up Successful!');
        }
    });

    signInBtn.addEventListener('click', () => {
        const emailInput = document.querySelector('.sign-in input[placeholder="Email"]');
        const passwordInput = document.querySelector('.sign-in input[placeholder="Password"]');
        
        const invalidField = validateInput(emailInput, 'email') || validateInput(passwordInput, 'password');

        if (!invalidField) {
            showPopup('Sign In Successful!');
        }
    });

    function validateInput(input, type = '') {
        const value = input.value.trim();
        if (type === 'email') {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(value)) {
                showPopup('Invalid email address.');
                return true;
            }
        } else if (type === 'password') {
            if (value.length < 6) { // Adjust the minimum length as needed
                showPopup('Password must be at least 6 characters long.');
                return true;
            }
        } else if (type === 'name') {
            if (value === '') {
                showPopup('Please enter your name.');
                return true;
            }
        }
        return false;
    }

    function showPopup(message) {
        const popup = document.createElement('div');
        popup.classList.add('popup');
        popup.textContent = message;
        
        document.body.appendChild(popup);

        setTimeout(() => {
            popup.classList.add('show');
        }, 10);

        setTimeout(() => {
            popup.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(popup);
            }, 300);
        }, 3000);
    }
});
