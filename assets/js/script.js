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