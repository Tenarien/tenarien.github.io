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