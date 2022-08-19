/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/
const menu = document.querySelector('#navbar__list');
const sections = document.querySelectorAll("section");


// create navbar elements
function createElement() {
  for (section of sections) {
    const element = document.createElement("li");
    const sectionL = section.getAttribute('id');
    const sectionN = section.getAttribute('data-nav');
    element.innerHTML = `<a class="menu__link" href='#${sectionL}'>${sectionN}</a>`;
    menu.appendChild(element);

    // function for smooth scrolling
    const navLinks = document.querySelectorAll(".menu__link");
    navLinks.forEach((link) => {
      element.addEventListener('click', () => {
        const id = link.getAttribute('href');
        const section = document.querySelector(id);
        event.preventDefault();
        section.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        });
      });
    });
  };
};
/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


