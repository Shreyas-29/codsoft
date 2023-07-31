function toggleOption(type) {
    const options = document.getElementById(`${type}-options`);
    options.classList.toggle('show-options');
}

function navigateToBookingPage() {
    // Add the URL of the booking page here
    window.location.href = 'booking.html';
}

document.getElementById('location-label').addEventListener('click', function () {
    const dropdown = document.getElementById('dropdown');
    dropdown.classList.toggle('show');
});

// Close dropdown when clicking outside
window.addEventListener('click', function (event) {
    const dropdown = document.getElementById('dropdown');
    const locationLabel = document.getElementById('location-label');
    if (event.target !== locationLabel && !locationLabel.contains(event.target)) {
        dropdown.classList.remove('show');
    }
});
