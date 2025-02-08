document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  
    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Retrieve form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
  
        console.log("Contact Form Submission:");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);
  
        // For now, simply show an alert and reset the form
        alert("Thank you for your message! We'll get back to you soon.");
        contactForm.reset();
      });
    }
  });