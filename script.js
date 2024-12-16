// script.js

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const thankYouMessage = document.getElementById('thankYouMessage');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            // Simulated form submission (e.g., send data to a server)
            console.log('Form Submission:', {
                name,
                email,
                message,
            });

            // Display thank-you message
            thankYouMessage.classList.remove('hidden');

            // Hide the message after 5 seconds
            setTimeout(() => {
                thankYouMessage.classList.add('hidden');
            }, 5000);

            // Clear the form fields
            form.reset();
        } else {
            alert('Please fill in all fields before submitting.');
        }
    });

    // Add smooth scrolling to links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        });
    });
});

