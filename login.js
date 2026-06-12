// Toggle between Login and Signup forms via tabs or inline links
document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.auth-tab');
    const switchLinks = document.querySelectorAll('.auth-switch a');
    const forms = document.querySelectorAll('.auth-form');

    function showForm(targetId) {
        forms.forEach(function (form) {
            form.classList.toggle('active', form.id === targetId);
        });
        tabs.forEach(function (tab) {
            tab.classList.toggle('active', tab.dataset.target === targetId);
        });
    }

    tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
            showForm(tab.dataset.target);
        });
    });

    switchLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            showForm(link.dataset.target);
        });
    });

    // Basic client-side validation placeholders for both forms
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            // Placeholder: real auth wiring comes later (Express + MongoDB)
            alert('Login submitted. Backend authentication is not yet connected.');
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const pass = document.getElementById('signup-password').value;
            const confirm = document.getElementById('signup-confirm-password').value;
            if (pass !== confirm) {
                alert('Passwords do not match.');
                return;
            }
            // Placeholder: real auth wiring comes later (Express + MongoDB)
            alert('Signup submitted. Backend authentication is not yet connected.');
        });
    }
});
