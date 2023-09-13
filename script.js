document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signup-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get user input
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const address = document.getElementById("address").value;
        const dob = document.getElementById("dob").value;

        // Perform form validation and registration logic here
        // For simplicity, we'll just display an alert with the input values
        alert(`Sign Up Successful!\n\nUsername: ${username}\nEmail: ${email}\nAddress: ${address}\nDate Of Birth: ${dob}`);
        form.reset();
    });
});
