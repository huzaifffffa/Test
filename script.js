// Add event listeners to all relevant elements
const menuItems = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];

menuItems.forEach(item => {
    document.getElementById(item).addEventListener('click', active);
});

function active(event) {
    // Remove 'active' class from all items
    menuItems.forEach(item => {
        const element = document.getElementById(item);
        element.classList.remove('active');

        // Ensure the blurr class is retained on inactive elements
        element.classList.add('blurr');
    });

    // Add 'active' class to the clicked item
    event.currentTarget.classList.add('active');
    event.currentTarget.classList.remove('blurr');
}

window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('.section'); // Select all sections with the class 'section'
    const navbarItems = document.querySelectorAll('ul li');  // Select all navbar <li> items

    sections.forEach((section, index) => {
        const sectionPosition = section.getBoundingClientRect();

        // Check if the section is in the viewport (threshold: middle of the screen)
        if (sectionPosition.top <= window.innerHeight / 2 && sectionPosition.bottom >= window.innerHeight / 2) {
            // Remove 'active' class from all navbar items
            navbarItems.forEach(item => {
                item.classList.remove('active');
                item.classList.add('blurr'); // Ensure inactive items retain the blurr class
            });

            // Add 'active' class to the corresponding navbar item based on the index
            navbarItems[index].classList.add('active');
            navbarItems[index].classList.remove('blurr'); // Remove blurr class from the active item
        }
    });
});


menuItems.forEach(item => {
    document.getElementById(item).addEventListener('click', view);
});
function view(event) {
    const item = event.currentTarget.textContent;
    let secc = Array.from(document.querySelectorAll('.section'));
    let lii = Array.from(document.querySelectorAll('ul li'));
    for (x = 0; x < lii.length; x++) {
        const a = lii[x].textContent;
        if (item == a) {
            let ct = x;
            event.preventDefault();
            secc[ct].scrollIntoView({
                 behavior: 'smooth'
            })
        }
    } 
    
}

