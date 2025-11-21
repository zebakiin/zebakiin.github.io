function toggleContact() {
    const dropdown = document.getElementById('contactDropdown');
    dropdown.classList.toggle('active');
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const dropdown = document.getElementById('contactDropdown');
    const button = document.querySelector('.contact-btn');
    
    if (dropdown && button && !dropdown.contains(event.target) && !button.contains(event.target)) {
        dropdown.classList.remove('active');
    }
});

// Copy email to clipboard
function copyEmail(event) {
    event.preventDefault();
    
    // Replace this with your actual email
    const email = 'contact@linorufaro.com';
    
    // Copy to clipboard
    navigator.clipboard.writeText(email).then(function() {
        // Show notification
        const notification = document.getElementById('copyNotification');
        notification.classList.add('show');
        
        // Hide notification after 2 seconds
        setTimeout(function() {
            notification.classList.remove('show');
        }, 2000);
    }).catch(function(err) {
        console.error('Failed to copy email: ', err);
    });
}