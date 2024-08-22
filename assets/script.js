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
    const fadeElements = document.querySelectorAll('.fade-right');

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


//Fade in effect from top to bottom
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-top');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('-translate-y-full', 'blur')
                //delay here
                setTimeout(() => {
                    entry.target.classList.remove('opacity-0', 'translate-y-full', 'blur');
                    entry.target.classList.add('opacity-100', 'duration-1000', 'translate-y-0');
                }, 10);
                observer.unobserve(entry.target);
            }
        });
    }, options);

    fadeElements.forEach(element => {
        observer.observe(element);
    });
});

// fade in effect for cards
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-card');
    fadeElements.forEach(element => {
       element.classList.add('-translate-y-1/2', 'blur', 'opacity-0');
    });
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                fadeElements.forEach(element => {
                    entry.target.classList.remove('opacity-0', 'translate-y-full', 'blur');
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                });
                observer.unobserve(entry.target);
            }
        });
    }, options);

    fadeElements.forEach(element => {
        observer.observe(element);
    });
});

//Slider script
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.container')
    const cards = document.querySelector('.cards')
    const goMoreButton = document.querySelectorAll("#go-more");
    enablePointerEvents()

    let isPressed = false;
    let cursorX;
    let isScrollingVertically = false;
    let startX, startY, moveX, moveY;
    const threshold = 10;

    slider.addEventListener("mousedown", (e) => {
        isPressed = true;
        cursorX = e.offsetX - cards.offsetLeft;
        slider.style.cursor = "grabbing";
        setTimeout(()=> {
            disablePointerEvents();
        }, 100);
    });

    slider.addEventListener("mousemove", (e) => {
        if (!isPressed) return;
        e.preventDefault();
        cards.style.left = `${e.offsetX - cursorX}px`;
        boundSlides();
    });


    window.addEventListener("mouseup", () => {
        isPressed = false;
        enablePointerEvents();
    });

    // Handle touchstart (mobile)
    slider.addEventListener("touchstart", (e) => {
        isPressed = true;
        isScrollingVertically = false;
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        slider.style.cursor = "grabbing";

        // Disabling pointer events after a slight delay
        setTimeout(() => {
            disablePointerEvents();
        }, 100);
    });

    slider.addEventListener("touchmove", (e) => {
        if (!isPressed) return;

        moveX = e.touches[0].clientX;
        moveY = e.touches[0].clientY;

        let diffX = moveX - startX;
        let diffY = moveY - startY;


        if (isScrollingVertically) {
            // If already scrolling vertically, do nothing
            return;
        }

        if (Math.abs(diffY) + 5 > Math.abs(diffX)) {
            // If the vertical movement is greater than horizontal, allow vertical scrolling
            isScrollingVertically = true;
            return;
        } else {
            // If horizontal movement is greater, prevent vertical scroll and move the slider
            e.preventDefault();
            slider.scrollLeft -= diffX; // Scroll the slider horizontally
            startX = moveX; // Update the startX for the next movement
        }
    }, { passive: false });

    // Handle touchend (mobile)
    window.addEventListener("touchend", () => {
        isPressed = false;
        isScrollingVertically = false; // Reset vertical scroll flag
        slider.style.cursor = "grab";
        enablePointerEvents();
    });

    function boundSlides() {
        const containerRect = slider.getBoundingClientRect();
        const cardsRect = cards.getBoundingClientRect();

        if (parseInt(cards.style.left) > 0) {
            cards.style.left = 0;
        } else if (cardsRect.right < containerRect.right) {
            cards.style.left = `-${cardsRect.width - containerRect.width}px`;
        }
    }

    function disablePointerEvents() {
        goMoreButton.forEach(button => button.style.pointerEvents = 'none');
    }

    // Function to enable pointer events on the "Go to for more" button
    function enablePointerEvents() {
        goMoreButton.forEach(button => button.style.pointerEvents = 'auto');
    }
});

//Go top button script
document.addEventListener('DOMContentLoaded', () => {
    const goTopButton = document.getElementById('go-top');
    const main = document.getElementById('main-content');
    const targets = [document.getElementById('header'), document.getElementById('about-me')];

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (targets.includes(entry.target)) {
                if (entry.isIntersecting) {
                    // Hide 'Go Top' button when any target section is in view
                    goTopButton.classList.add('opacity-0');
                    goTopButton.classList.remove('opacity-100');
                } else {
                    // Show 'Go Top' button when no target section is in view
                    goTopButton.classList.remove('opacity-0');
                    goTopButton.classList.add('opacity-100');
                }
            }
        });
    }, options);

    targets.forEach(target => observer.observe(target));

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