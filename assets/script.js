document.addEventListener("DOMContentLoaded", function() {
    var technologies = document.getElementById("technologies");
    var pElements = technologies.getElementsByTagName("a");
    var currentElement = 0;
    var hover = false;
    var timeoutId = 0;

    function addColorAndRemove() {
        // Checks if you hover over element
        if (!hover) {
            pElements[currentElement].classList.add("scale-110", "text-opacity-100");
            pElements[currentElement].classList.remove("text-opacity-50");
            // Sets timeout ID and starts a loop
            timeoutId = setTimeout(function() {
                pElements[currentElement].classList.remove("scale-110", "text-opacity-100");
                pElements[currentElement].classList.add("text-opacity-50");
                currentElement = (currentElement + 1) % pElements.length;
                addColorAndRemove();
            }, 3000);
        }
    }

    // Add event listeners for hover
    for (let i = 0; i < pElements.length; i++) {
        pElements[i].addEventListener("mouseenter", function() {
            hover = true;
            // Clears Timeout loop to stop it
            clearTimeout(timeoutId);
            // Remove classes from all other elements
            for (let j = 0; j < pElements.length; j++) {
                pElements[j].classList.remove("scale-110", "text-opacity-100");
                pElements[j].classList.add("text-opacity-50");
            }
            // Add classes to the hovered element
            pElements[i].classList.add("scale-110", "text-opacity-100");
            pElements[i].classList.remove("text-opacity-50");
            currentElement = i;
        });

        pElements[i].addEventListener("mouseleave", function() {
            hover = false;
            // Remove classes from the element after hover ends
            pElements[i].classList.remove("scale-110", "text-opacity-100");
            pElements[i].classList.add("text-opacity-50");
            addColorAndRemove();
        });
    }

    addColorAndRemove();
});
//Fade in effect from right to left for contact-me
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in-contact');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('translate-x-full', 'blur-xl')
                //delay here
                setTimeout(() => {
                    entry.target.classList.add('transition', 'duration-500', 'opacity-100', 'translate-x-0');
                    entry.target.classList.remove('opacity-0', 'blur-xl', 'translate-x-full');
                }, 10);
                observer.unobserve(entry.target);
            }
        });
    }, options);

    fadeElements.forEach(element => {
        observer.observe(element);
    });
});


//Fade in effect from left to right
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('-translate-x-full', 'blur-xl')
                //delay here
                setTimeout(() => {
                    entry.target.classList.add('transition', 'duration-500', 'opacity-100', 'translate-x-0');
                    entry.target.classList.remove('opacity-0', 'blur-xl', '-translate-x-full');
                }, 10);
                observer.unobserve(entry.target);
            }
        });
    }, options);

    fadeElements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const projects = document.querySelectorAll('.project-item');
    let currentIndex = 0;

    const showProject = (index) => {
        projects.forEach((project, i) => {
            project.classList.toggle('hidden', i !== index);

            project.classList.add('blur-xl')
            //delay here
            setTimeout(() => {
                project.classList.add('transition', 'duration-500');
                project.classList.remove('opacity-0', 'blur-xl');
            }, 10);
        });
    };

    document.getElementById('next-project').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % projects.length;
        showProject(currentIndex);
    });

    document.getElementById('prev-project').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + projects.length) % projects.length;
        showProject(currentIndex);
    });

    // Initialize first project
    showProject(currentIndex);
});

document.addEventListener('DOMContentLoaded', () => {
    const goTopButton = document.getElementById('go-top');
    const main = document.getElementById('main-content');
    const aboutMeSection = document.getElementById('about-me');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.target === aboutMeSection) {
                if (entry.isIntersecting) {
                    // Hide 'Go Top' button when 'About Me' section is in view
                    goTopButton.classList.add('opacity-0');
                    goTopButton.classList.remove('opacity-100');
                } else {
                    // Show 'Go Top' button when 'About Me' section is not in view
                    goTopButton.classList.remove('opacity-0');
                    goTopButton.classList.add('opacity-100');
                }
            }
        });
    }, options);

    observer.observe(aboutMeSection);

    // Smooth scroll to the top when the button is clicked
    goTopButton.addEventListener('click', (event) => {
        event.preventDefault();
        if(window.innerWidth >= 768) {
            main.scroll({
                top: 0,
                behavior: "smooth",
            })
        } else {
            window.scroll({
                top: 0,
                behavior: "smooth",
            })
        }

    });
});

document.addEventListener('DOMContentLoaded', () => {
    const image1 = document.getElementById('project-1-image');
    const image1Overlay = document.getElementById('project-1-image-overlay');
    const elements = [image1, image1Overlay];

    const handleOver = () => {
        image1Overlay.classList.remove('hidden'); // Make sure the overlay is visible
        image1Overlay.classList.add('-translate-x-full');

        // Apply transition with a slight delay to make sure the class is added
        setTimeout(() => {
            image1Overlay.classList.add('transition', 'duration-500', 'translate-x-0');
            image1Overlay.classList.remove('-translate-x-full');
        }, 10);

        image1.classList.add('transition', 'duration-500', 'blur', 'scale-105');
    };

    const handleOut = () => {
        image1.classList.remove('blur', 'scale-105');
        image1Overlay.classList.remove('blur');

        // Reset overlay position with a slight delay
        setTimeout(() => {
            image1Overlay.classList.add('-translate-x-full');
            image1Overlay.classList.remove('translate-x-0');
        }, 10);
    };

    // Attach event listeners for each element
    elements.forEach(element => {
        element.addEventListener('mouseover', handleOver);
        element.addEventListener('touchstart', handleOver);
        element.addEventListener('mouseout', handleOut);
        element.addEventListener('touchend', handleOut);
    });
});