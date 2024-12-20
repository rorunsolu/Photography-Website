
import './styles/utilities.scss';
import './styles/typography.scss';
import './styles/style.scss';

import './styles/navbar.scss';
import './styles/header.scss';
import './styles/footer.scss';

import './styles/services.scss';
import './styles/projects.scss';
import './styles/gallery.scss';
import './styles/blogs.scss';
import './styles/about.scss';
import './styles/contact.scss';
import './styles/faq.scss';
import './styles/accordion.scss';

const openBtn = document.querySelector('.nav__toggle-open');
openBtn.addEventListener('click', openPopupNav);

function openPopupNav() {
    let popupNavContainer = document.createElement('div');
    popupNavContainer.id = 'popupNavContainer';

    popupNavContainer.innerHTML = `

            <button class="nav__toggle-close" id="closeNavPopup-btn" type="button"><i class="ri-close-line"></i>
            </button>

            <div id="navPopUpLinks">
              <a href="#home">Home</a>
              <a href="#contact">Contact</a>
              <a href="#blogs">Blogs</a>
              <a href="#services">Services</a>
              <a href="#projects">Projects</a>
            </div>

        `;

    document.body.style.overflow = 'hidden';

    document.body.appendChild(popupNavContainer);

    let closeNavPopupBtn = document.getElementById('closeNavPopup-btn');
    closeNavPopupBtn.addEventListener('click', closePopupNav);
};

function closePopupNav() {
    let popupNavContainer = document.getElementById('popupNavContainer');

    if (popupNavContainer) {
        popupNavContainer.remove();

        document.body.style.overflow = 'auto';
    }
};

const accordionHeader = document.querySelectorAll(".accordion__header");

accordionHeader.forEach(accordionHeader => {
    accordionHeader.addEventListener("click", event => {
        accordionHeader.classList.toggle("active");
        const accordionBody = accordionHeader.nextElementSibling;

        if (accordionHeader.classList.contains("active")) {
            accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
        }

        else {
            accordionBody.style.maxHeight = 0;
        }
    });
});