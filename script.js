// Add any JavaScript functionality here
// JavaScript code for your portfolio website

// Add smooth scrolling functionality to navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    
    for (let link of navLinks) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    }
  });
  
  // Add form submission functionality
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');
      
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const message = messageInput.value.trim();
      
      // Validate form data
      if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields');
        return;
      }
      
      // Send form data to server (simulate form submission)
      // Replace this with your own code to handle form submission
      
      // Clear form inputs
      nameInput.value = '';
      emailInput.value = '';
      messageInput.value = '';
      
      alert('Message sent successfully!');
    });
  });
  