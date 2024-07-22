function validateForm() {
        // Get form elements
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        // Basic validation checks
        if (name === '' || email === '' || message === '') {
            alert('All fields are required!');
            return false;
        }

        // If validation passes, show success message
        document.getElementById('formMessage').style.display = 'block';

        // Clear the form fields
        document.getElementById('contactForm').reset();

        // Prevent actual form submission
        return false;
    }
    
    // Show the button when the user scrolls down 20px from the top
window.onscroll = function() {
    var scrollTopBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


function toggleFaq(id) {
    var faqAnswer = document.getElementById(id);
    if (faqAnswer.style.display === "none") {
        faqAnswer.style.display = "block";
    } else {
        faqAnswer.style.display = "none";
    }
}


function changeBgColor() {
    var section = document.getElementById("changeColor");
    var currentColor = section.style.backgroundColor;
    section.style.backgroundColor = currentColor === 'lightblue' ? 'lightcoral' : 'lightblue';
}
