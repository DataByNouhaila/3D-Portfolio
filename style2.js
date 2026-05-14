// toutes les pages (droite)
const pages = document.querySelectorAll('.book-page.page-right');

// tous les boutons
const buttons = document.querySelectorAll('.nextprev-btn');

// index actuel
let currentPage = 0;

// fonction pour afficher pages correctement
function updatePages() {
    pages.forEach((page, index) => {
        if (index < currentPage) {
            page.classList.add('turn');
            page.style.zIndex = 10 + index;
        } else {
            page.classList.remove('turn');
            page.style.zIndex = 20 - index;
        }
    });
}

// boutons next / prev
buttons.forEach(btn => {
    btn.addEventListener('click', () => {

        const isBack = btn.classList.contains('back');

        if (isBack) {
            currentPage--;
        } else {
            currentPage++;
        }

        // limites
        if (currentPage < 0) currentPage = 0;
        if (currentPage > pages.length - 1) {
            currentPage = pages.length - 1;
        }

        updatePages();
    });
});

// bouton contact → ouvre la dernière page
const contactBtn = document.querySelector('.contact-me');

if (contactBtn) {
    contactBtn.addEventListener('click', () => {

        currentPage = pages.length - 1;

        updatePages();
    });
}

// bouton retour profil
const backProfileBtn = document.querySelector('.back-profile');

if (backProfileBtn) {
    backProfileBtn.addEventListener('click', () => {
        currentPage = 0;
        updatePages();
    });
}

// animation initiale
updatePages();

// INITIALISATION
emailjs.init("C8trh4Se_sN8COHbQ");

// FORMULAIRE
const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    emailjs.sendForm(
        "service_0jr1aee",
        "template_sg3zfqg",
        this
    )

    .then(() => {

        alert("Message sent successfully!");

        form.reset();

    })

    .catch((error) => {

        alert("Failed to send message.");

        console.log(error);

    });

});
