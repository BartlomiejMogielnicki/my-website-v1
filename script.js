const homeBtn = document.getElementById('home-btn');
const aboutBtn = document.getElementById('about-btn');
const portfolioBtn = document.getElementById('portfolio-btn');
const contactBtn = document.getElementById('contact-btn');

const goLeftBtn = document.getElementById('btn-go-left');
const goRightBtn = document.getElementById('btn-go-right');

const container = document.querySelectorAll('.container');

const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const textInput = document.getElementById('text');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const textError = document.getElementById('text-error');

// Actual section number
const sectionsNumber = container.length;
let activeSection = 0;

// Update DOM section
const updateDOM = () => {
    container.forEach((section, index) => {
        if (index < activeSection) {
            section.classList.add('hide-left');
        } else {
            section.classList.add('hide-right');
        };
    });
    container[activeSection].classList.remove('hide-left');
    container[activeSection].classList.remove('hide-right');

    // Hide/show navigation buttons
    if (activeSection === 0) {
        goLeftBtn.classList.add('hide-btn');
        goRightBtn.classList.remove('hide-btn');
    } else if (activeSection === sectionsNumber - 1) {
        goRightBtn.classList.add('hide-btn');
        goLeftBtn.classList.remove('hide-btn');
    } else {
        goLeftBtn.classList.remove('hide-btn');
        goRightBtn.classList.remove('hide-btn');
    };
};

updateDOM();

// Contact form verification
const formVerification = (e) => {
    if (nameInput.value === "") {
        e.preventDefault();
        nameError.classList.add('show');
    } else {
        nameError.classList.remove('show');
    }

    // E-mail verification expression
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailInput.value === "") {
        e.preventDefault();
        emailError.classList.add('show');
    } else if (!re.test(String(emailInput.value).toLowerCase())) {
        e.preventDefault();
        emailError.textContent = 'E-mail address is invalid';
        emailError.classList.add('show');
    } else {
        emailError.classList.remove('show');
    }

    if (textInput.value === "") {
        e.preventDefault();
        textError.classList.add('show');
    } else {
        textError.classList.remove('show');
    }
}

// Event listeners
goRightBtn.addEventListener('click', () => {
    activeSection++;
    if (activeSection > sectionsNumber) {
        activeSection = sectionsNumber - 1;
    };
    updateDOM();
});

goLeftBtn.addEventListener('click', () => {
    activeSection--;
    if (activeSection < 0) {
        activeSection = 0;
    };
    updateDOM();
});

homeBtn.addEventListener('click', () => {
    activeSection = 0;
    updateDOM();
});

aboutBtn.addEventListener('click', () => {
    activeSection = 1;
    updateDOM();
});

portfolioBtn.addEventListener('click', () => {
    activeSection = 2;
    updateDOM();
});

contactBtn.addEventListener('click', () => {
    activeSection = 3;
    updateDOM();
});

contactForm.addEventListener('submit', (e) => {
    formVerification(e);
})