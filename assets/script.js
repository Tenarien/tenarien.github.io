document.addEventListener("DOMContentLoaded", function() {
    var technologies = document.getElementById("technologies");
    var pElements = technologies.getElementsByTagName("p");
    var currentElement = 0;

    function addColorAndRemove() {
        pElements[currentElement].classList.add("text-xl", "text-opacity-100");
        pElements[currentElement].classList.remove("text-opacity-50");
        setTimeout(function() {
            pElements[currentElement].classList.remove("text-xl", "text-opacity-100");
            pElements[currentElement].classList.add("text-opacity-50");
            currentElement = (currentElement + 1) % pElements.length;
            addColorAndRemove();
        }, 3000);
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
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, options);

    fadeElements.forEach(element => {
        observer.observe(element);
    });
});