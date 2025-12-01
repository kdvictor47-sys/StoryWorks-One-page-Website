// script.js

document.addEventListener("DOMContentLoaded", () => {
    setupReadMoreToggle();
    setupSmoothScrolling();
    setupContactFormValidation();
});

function setupReadMoreToggle() {
    const button = document.getElementById("toggle-problem-details");
    const details = document.getElementById("problem-details");

    if (!button || !details) return;

    button.addEventListener("click", () => {
        const isHidden = details.classList.contains("hidden");
        if (isHidden) {
            details.classList.remove("hidden");
            button.textContent = "Read less";
        } else {
            details.classList.add("hidden");
            button.textContent = "Read more";
        }
    });
}

function setupSmoothScrolling() {
    const links = document.querySelectorAll("a.scroll-link");

    links.forEach(link => {
        link.addEventListener("click", (event) => {
            const href = link.getAttribute("href");
            if (href && href.startsWith("#")) {
                event.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }
        });
    });
}

function setupContactFormValidation() {
    const form = document.getElementById("contact-form");
    if (!form) return;

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const errorName = document.getElementById("error-name");
    const errorEmail = document.getElementById("error-email");
    const errorMessage = document.getElementById("error-message");
    const successMsg = document.getElementById("form-success");

    form.addEventListener("submit", (event) => {
        let isValid = true;
        successMsg.textContent = "";

        // Reset previous errors
        [nameInput, emailInput, messageInput].forEach(input => {
            if (!input) return;
            input.classList.remove("error");
        });
        [errorName, errorEmail, errorMessage].forEach(span => {
            if (!span) return;
            span.textContent = "";
        });

        // Name validation
        if (!nameInput.value.trim()) {
            isValid = false;
            nameInput.classList.add("error");
            errorName.textContent = "Please enter your name.";
        }

        // Email validation
        const emailValue = emailInput.value.trim();
        if (!emailValue) {
            isValid = false;
            emailInput.classList.add("error");
            errorEmail.textContent = "Please enter your email.";
        } else if (!isValidEmail(emailValue)) {
            isValid = false;
            emailInput.classList.add("error");
            errorEmail.textContent = "Please enter a valid email address.";
        }

        // Message validation
        if (!messageInput.value.trim()) {
            isValid = false;
            messageInput.classList.add("error");
            errorMessage.textContent = "Please enter a message.";
        }

        if (!isValid) {
            event.preventDefault();
            return;
        }

        // For demo: prevent real submission and show success message
        event.preventDefault();
        successMsg.textContent = "Thank you! Your message has been recorded for this prototype.";
        form.reset();
    });
}

function isValidEmail(email) {
    // Simple email regex
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}
