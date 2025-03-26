document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("register-form");
    const loginForm = document.getElementById("login-form");

    if (registerForm) {
        registerForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const name = document.getElementById("register-name").value;
            const email = document.getElementById("register-email").value;
            const password = document.getElementById("register-password").value;

            if (localStorage.getItem(email)) {
                document.getElementById("register-message").textContent = "Email already exists!";
            } else {
                localStorage.setItem(email, JSON.stringify({ name, password }));
                document.getElementById("register-message").textContent = "Registration successful! You can login now.";
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const email = document.getElementById("login-email").value;
            const password = document.getElementById("login-password").value;
            const user = JSON.parse(localStorage.getItem(email));

            if (user && user.password === password) {
                document.getElementById("login-message").textContent = "Login successful!";
                window.location.href = "dashboard.html"; 
            } else {
                document.getElementById("login-message").textContent = "Invalid credentials!";
            }
        });
    }
});