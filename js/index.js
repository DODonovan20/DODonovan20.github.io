document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("signin-form");
    console.log("script is running");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form from submitting the traditional way

        // Get values from the input fields
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // You can now use these values as needed, e.g., send them to a server
        console.log("Email:", email);
        console.log("Password:", password);

        if (email == "danielodonovan20@gmail.com" && password == "Shandon2009") {alert("welcome")}

        // Example: sending data to a server using fetch
        // fetch('your-api-endpoint', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ email, password })
        // })
        // .then(response => response.json())
        // .then(data => console.log(data))
        // .catch(error => console.error('Error:', error));
    });
});
