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

document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
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