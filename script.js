document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const service = document.getElementById('service').value;

    // Basic validation
    if (name === '' || email === '' || date === '' || time === '') {
        alert('Please fill in all fields');
        return;
    }

    // Simple confirmation message (replace with real backend logic later)
    alert("Thank you, ${name}! Your booking for ${service} on ${date} at ${time} has been received.");

    // Clear the form
    document.getElementById('booking-form').reset();
});