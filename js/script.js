// ━━━ Navigation (Hamburger Menu) ━━━
const navSlide = () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Hamburger Animation
        hamburger.classList.toggle('toggle');
    });
}

// ━━━ Animate Sections on Scroll ━━━
const animateOnScroll = () => {
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });
};

// ━━━ Keyframes for Nav Links (Dynamically added to head) ━━━
const addNavKeyframes = () => {
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes navLinkFade {
            from {
                opacity: 0;
                transform: translateX(50px);
            }
            to {
                opacity: 1;
                transform: translateX(0px);
            }
        }
    `;
    document.head.appendChild(style);
}

// ━━━ Form Validation ━━━

// Function to validate email format
const isEmailValid = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

// Login Form Validation
const validateLoginForm = () => {
    const loginForm = document.querySelector('.login-container form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent form from submitting

            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();

            if (email === '') {
                alert('Please enter your email.');
                return;
            }
            if (!isEmailValid(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            if (password === '') {
                alert('Please enter your password.');
                return;
            }

            // If everything is valid
            alert('Login successful! (Simulation)');
            loginForm.reset();
        });
    }
};

// Sign Up Form Validation
const validateSignupForm = () => {
    const signupForm = document.querySelector('.signup-container form');
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent form from submitting

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();
            const confirmPassword = document.getElementById('confirmPassword').value.trim();

            if (name === '' || email === '' || password === '' || confirmPassword === '') {
                alert('Please fill in all fields.');
                return;
            }
            if (!isEmailValid(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            if (password.length < 6) {
                alert('Password must be at least 6 characters long.');
                return;
            }
            if (password !== confirmPassword) {
                alert('Passwords do not match.');
                return;
            }

            // If everything is valid
            alert('Sign up successful! (Simulation)');
            signupForm.reset();
        });
    }
};


// ━━━ Initialize Functions on DOMContentLoaded ━━━
document.addEventListener('DOMContentLoaded', () => {
    navSlide();
    addNavKeyframes();
    animateOnScroll();
    
    // Initialize form validations
    validateLoginForm();
    validateSignupForm();
});