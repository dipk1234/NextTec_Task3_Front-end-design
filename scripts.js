
// Basic JavaScript for interactivity (Add more as needed)

// Example: Show alert when form is submitted
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted successfully!');
});

// Example: Toggle privacy setting
document.getElementById('privacy').addEventListener('change', function() {
    if (this.checked) {
        alert('Your profile is now private.');
    } else {
        alert('Your profile is now public.');
    }
});
