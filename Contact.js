// Handle contact form submission
function submitContact(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    
    // Create contact object
    const contact = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
        timestamp: new Date().toISOString()
    };
    
    // In production, this would send to a backend API
    console.log('Contact form submitted:', contact);
    
    // Show success message
    alert('Message sent successfully! \n\nWe will get back to you as soon as possible.');
    
    // Reset form
    event.target.reset();
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', submitContact);
    
    // Add character counter for message textarea
    const messageField = form.querySelector('textarea[name="message"]');
    if (messageField) {
        messageField.addEventListener('input', function() {
            const length = this.value.length;
            // You can add a character counter display here if needed
            console.log(`Message length: ${length} characters`);
        });
    }
});
